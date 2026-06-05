# Logistic

### Example 1
> **Summary**: Opens a data table, fits a logistic model to predict age based on weight, and visualizes the results using JMP's built-in Ternary Plot feature.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #TernaryPlot, #DataVisualization, #StatisticalModeling -->

**Code**:
```jsl
// Logistic
// Open data table
dt = Open("data_table.jmp");
// Logistic
Logistic( Y( :age ), X( :weight ) );
```

**Code Explanation**:

1. Open data table.
2. Fit logistic model.



### Example 2
> **Summary**: Opens a data table, fits a logistic regression model, and performs inverse prediction to visualize the relationship between response and dose.

<!-- Keywords: #LogisticRegression, #InversePrediction, #DataVisualization, #JMPScriptingLanguage, #StatisticalModeling -->

**Code**:
```jsl
// Logistic
// Open data table
dt = Open("data_table.jmp");
// Logistic
Logistic(
	Y( response ),
	X( dose ),
	Inverse Prediction( Response( 0.5 ) )
);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic regression.
3. Perform inverse prediction.



### Example 3
> **Summary**: Visualizes a logistic model using the specified variables, including response and predictor variables, and performs inverse prediction with a set response value.

<!-- Keywords: #LogisticModel, #InversePrediction, #TernaryPlot, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
// Logistic
// Open data table
dt = Open("data_table.jmp");
// Logistic
Logistic(
	Y( Response ),
	X( Temperature ),
	Inverse Prediction(
		Response( 0.00063 )
	)
);
```

**Code Explanation**:

1. Open table.
2. Fit logistic model.
3. Specify response variable.
4. Specify predictor variable.
5. Perform inverse prediction.
6. Set response value for prediction.



### Example 4
> **Summary**: Visualizes a logistic regression analysis using the specified variables, opening a data table and fitting the model to predict the response variable based on the natural logarithm of dose.

<!-- Keywords: #LogisticRegression, #JSLScriptingLanguage, #DataVisualization, #StatisticalAnalysis, #JMP -->

**Code**:
```jsl
// Logistic
// Open data table
dt = Open("data_table.jmp");
// Logistic
Logistic(
	Y( Response ),
	X( "ln(dose)"n ),
	Freq( count )
);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic regression.



### Example 5
> **Summary**: Opens a data table, fits a logistic regression model using the 'age' variable as the response and 'weight (lb.)' as the predictor, and visualizes the results.

<!-- Keywords: #LogisticRegression, #JMPScriptingLanguage, #DataVisualization, #PredictiveModeling, #StatisticalAnalysis -->

**Code**:
```jsl
// Logistic
// Open data table
dt = Open("data_table.jmp");
// Logistic
Logistic(
	Y( :age ),
	X( :"weight (lb.)"n )
);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic regression model.
3. Set response variable.
4. Set predictor variable.



### Example 6
> **Summary**: Fits a logistic regression model to predict sex based on height, with customizable report scales and display of odds ratios, rate curve, ROC curve, and lift curve.

<!-- Keywords: #LogisticRegression, #CustomizableReports, #OddsRatios, #ROCcurve, #LiftCurve -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Logistic(
	Y( :sex ),
	X( :height ),
	Positive Level( "M" ),
	Odds Ratios( 1 ),
	Show Rate Curve( 1 ),
	ROC Curve( 1 ),
	Lift Curve( 1 ),
	SendToReport(
		Dispatch( {}, "1", ScaleBox, {Format( "Custom", Formula( In Minutes( value ) ), 12 )} ),
		Dispatch( {}, "2", ScaleBox, {Format( "Custom", Formula( In Days( value ) ), 12 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit logistic regression model.
3. Set Y variable as "sex".
4. Set X variable as "height".
5. Define positive level as "M".
6. Enable odds ratios display.
7. Show rate curve.
8. Generate ROC curve.
9. Create lift curve.
10. Customize report scales.



### Example 7
> **Summary**: Fits a logistic regression model to predict Response based on ln(dose) and Count, using data from the Plasticizer 78.jmp table.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #DataTable, #PredictiveModeling, #StatisticalAnalysis -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Logistic( Y( :Response ), X( :Name( "ln(dose)" ) ), Freq( :Count ) );
```

**Code Explanation**:

1. Set default names scope.
2. Open data table;
3. Fit logistic model.



### Example 8
> **Summary**: Runs a logistic regression analysis with ROC curve generation and report dispatching, utilizing the specified variables to test the model's performance.

<!-- Keywords: #LogisticRegression, #ROCCurve, #JMPScriptingLanguage, #DataAnalysis, #ModelEvaluation -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Logistic(
	Y( :Name( "Claim(Y/N)" ) ),
	X( :Premium USD ),
	Positive Level( "Y" ),
	Logistic Plot( 0 ),
	ROC Curve,
	SendToReport(
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ),
		Dispatch( {"Parameter Estimates"}, "Covariance of Estimates", OutlineBox, {Close( 0 )} ),
		Dispatch( {"Receiver Operating Characteristic"}, "ROC Table", OutlineBox,
			{Set Title( "ROC Table - Testing, ROC table should have a message about truncation" )}
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Define dt under test.
3. Run logistic regression.
4. Set Y variable to Claim(Y/N).
5. Set X variable to Premium USD.
6. Define positive level as "Y".
7. Disable logistic plot.
8. Generate ROC curve.
9. Close Whole Model Test.
10. Close Parameter Estimates.



### Example 9
> **Summary**: Creates a logistic regression model to predict response based on dose, utilizing inverse prediction and term value methods.

<!-- Keywords: #JSLScripting, #LogisticRegression, #InversePrediction, #TermValueMethod, #DataAnalysis -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Logistic( Y( :response ), X( :dose ), Inverse Prediction( Response( 0.5 ), Term Value( dose( . ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Perform logistic regression.
3. Set response variable.
4. Set predictor variable.
5. Enable inverse prediction.
6. Specify response level.
7. Use term value method.
8. Set dose variable.
9. Analyze data.
10. Display results.



### Example 10
> **Summary**: Runs the logistic regression analysis and visualization of age based on weight, generating ROC, lift, and rate curves, as well as a report with customized title.

<!-- Keywords: #LogisticRegression, #ROCCurve, #LiftCurve, #RateCurve, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Logistic(
	Y( :age ),
	X( :weight ),
	Logistic Plot( 0 ),
	Show Rate Curve( 1 ),
	ROC Curve,
	Lift Curve,
	SendToReport(
		Dispatch( {}, "Logistic Fit of age By weight", OutlineBox, {Set Title( "ROC Curve, Lift Curve" )} ),
		Dispatch( {}, "Whole Model Test", OutlineBox, {Close( 1 )} ),
		Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit logistic model.
3. Predict age from weight.
4. Plot logistic curve.
5. Show rate curve.
6. Generate ROC curve.
7. Generate lift curve.
8. Rename report title.
9. Close whole model test.
10. Close parameter estimates.



### Example 11
> **Summary**: Creates a logistic regression model to predict age based on weight, utilizing the Open function and Logistic platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #PredictiveModeling, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Logistic( Y( :age ), X( :weight ) );
```

**Code Explanation**:

1. Open data table;
2. Create logistic object.
3. Set response variable: age.
4. Set predictor variable: weight.



### Example 12
> **Summary**: Runs a logistic regression analysis to model the relationship between dose and response, generating rate curves, ROC curves, lift curves, and performing inverse prediction.

<!-- Keywords: #LogisticRegression, #JMPScriptingLanguage, #DataAnalysis, #StatisticalModeling, #PredictiveAnalytics -->

**Code**:
```jsl
Open("data_table.jmp");
Logistic(
	Y( :Response ),
	X( :Name( "ln(dose)" ) ),
	Freq( :Count ),
	Positive Level( "Cured" ),
	Odds Ratios( 1 ),
	Show Rate Curve( 1 ),
	ROC Curve,
	Lift Curve,
	Inverse Prediction( Response( 0.6 ), Term Value( Name( "ln(dose)" )(.) ) ),
	SendToReport(
		Dispatch( {}, "Iterations", OutlineBox, {Close( 0 )} ),
		Dispatch( {"Parameter Estimates"}, "Covariance of Estimates", OutlineBox, {Close( 0 )} ),
		Dispatch( {"Receiver Operating Characteristic"}, "ROC Table", OutlineBox, {Close( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Fit logistic regression model.
3. Set response variable.
4. Set predictor variable.
5. Specify frequency variable.
6. Define positive level.
7. Calculate odds ratios.
8. Display rate curve.
9. Generate ROC curve.
10. Create lift curve.
11. Perform inverse prediction.
12. Close iterations report.
13. Close covariance report.
14. Close ROC table report.



### Example 13
> **Summary**: Creates a logistic regression model with automatic recalculation, odds ratios, and rate curve generation for sex prediction based on height, utilizing Local Data Filter for interactive filtering.

<!-- Keywords: #LogisticRegression, #JMPScriptingLanguage, #LocalDataFilter, #AutomaticRecalculation, #OddsRatios -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Logistic(
	Y( :sex ),
	X( :height ),
	Automatic Recalc( 1 ),
	Positive Level( "M" ),
	Odds Ratios( 1 ),
	Show Rate Curve( 1 ),
	ROC Curve,
	Lift Curve, 
);
obj << Local Data Filter(
	Location( {748, 19} ),
	Mode,
	Add Filter( columns( :height ), Where( :height >= 51 & :height <= 60 ), Display( :height ) )
);
rpt = obj << Report;
actN = rpt[Number Col Box( 12 )] << Get( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create logistic model object.
3. Set response variable to sex.
4. Set predictor variable to height.
5. Enable automatic recalculation.
6. Define positive level as "M".
7. Include odds ratios in output.
8. Show rate curve in report.
9. Generate ROC curve.
10. Generate lift curve.



### Example 14
> **Summary**: Fits a logistic regression model to predict sex based on height, with interactive filtering and reporting capabilities.

<!-- Keywords: #LogisticRegression, #InteractiveFiltering, #Reporting, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Logistic(
	Y( :sex ),
	X( :height ),
	Automatic Recalc( 0 ),
	Positive Level( "M" ),
	Odds Ratios( 1 ),
	Show Rate Curve( 1 ),
	ROC Curve,
	Lift Curve, 
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :age ), Where( :age == 12 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
rpt = obj << Report;
actN = rpt[Number Col Box( 12 )] << Get( 1 );
```

**Code Explanation**:

1. Open data table;
2. Fit logistic regression model.
3. Set response variable to "sex".
4. Set predictor variable to "height".
5. Disable automatic recalculation.
6. Define positive level as "M".
7. Enable odds ratios.
8. Show rate curve.
9. Generate ROC curve.
10. Generate lift curve.



### Example 15
> **Summary**: Fits logistic regression models, applying local data filters, and retrieving reports from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #LocalDataFilter, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Logistic(
	Y( :sex ),
	X( :height ),
	Automatic Recalc( 1 ),
	Positive Level( "M" ),
	Odds Ratios( 1 ),
	Show Rate Curve( 1 ),
	ROC Curve,
	Lift Curve, 
);
obj << Local Data Filter(
	Location( {748, 19} ),
	Mode,
	Add Filter( columns( :height ), Where( :height >= 51 & :height <= 60 ), Display( :height ) )
);
rpt = obj << Report;
actN = rpt[Number Col Box( 12 )] << Get( 1 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Logistic(
	Y( :sex ),
	X( :height ),
	Automatic Recalc( 0 ),
	Positive Level( "M" ),
	Odds Ratios( 1 ),
	Show Rate Curve( 1 ),
	ROC Curve,
	Lift Curve, 
);
obj << Local Data Filter(
	Location( {0, 0} ),
	Add Filter( columns( :age ), Where( :age == 12 ) ),
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
);
rpt = obj << Report;
actN = rpt[Number Col Box( 12 )] << Get( 1 );
```

**Code Explanation**:

1. Open data table;
2. Fit logistic regression model.
3. Set local data filter.
4. Retrieve report.
5. Extract number from report.
6. Close table without saving.
7. Reopen "data_table.jmp" table.
8. Refit logistic regression model.
9. Set different local data filter.
10. Retrieve updated report.



### Example 16
> **Summary**: Analyze a logistic regression model to estimate parameter estimates for male and female subjects, utilizing automatic recalculation and certification statistics.

<!-- Keywords: #LogisticRegression, #JSLScriptingLanguage, #DataAnalysis, #CertificationStatistics, #AutomaticRecalculation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
logi = dt << Logistic( Y( :age ), X( :weight ) );
logi << Automatic Recalc( 1 );
dt << select where( :sex == "M" );
dt << Hide and Exclude( 1 );
sumStats1 = Report( logi )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
certStats1 = [0.393203762208981 1.91892269729832 0.0419875340971164 0.837643536448633,
1.13043931761916 1.93098213870009 0.342718852608946 0.558264037147018,
2.3348227827045 1.99291402299498 1.37255804198051 0.241372862515658,
3.00809074533778 2.04277525460176 2.16840644961753 0.140872145410627,
4.25563785435111 2.21532457004247 3.69023988190693 0.0547317441777929,
-0.0138583587243675 0.0186466407676287 0.552360214435949 0.457354912300557];
dt << Clear Row states;
dt << Select Where( :sex == "F" );
dt << Hide and Exclude( 1 );
sumStats2 = Report( logi )["Parameter Estimates"][Table Box( 1 )] << get as matrix;
certSTats2 = [9.0261659982534 3.22352736990941 7.84050269652724 0.00510883976577484,
10.5348245915297 3.36627401317594 9.79390052836118 0.00175091667426672,
12.5538281939888 3.65041661098598 11.8268066710511 0.000583840370554629,
14.8146898586434 4.05346127141199 13.3577426561281 0.000257357892347003,
15.844166097879 4.20648344178999 14.1873213450831 0.000165481790740533,
-0.111858230037988 0.033318992344299 11.2707331859847 0.000787386240902122];
```

**Code Explanation**:

1. Open table.
2. Fit logistic model.
3. Enable automatic recalculation.
4. Select male rows.
5. Hide and exclude males.
6. Get parameter estimates.
7. Define certification statistics for males.
8. Clear row states.
9. Select female rows.
10. Hide and exclude females.



### Example 17
> **Summary**: Fits a logistic model to a data table, filtering by country, and extracting probability values for specific categories.

<!-- Keywords: #LogisticModel, #DataFiltering, #ProbabilityValues, #JSLScripting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Logistic( Y( :Type ), X( :Weight ), Where( :Country == "Japan" ), Run );
obj1 << Save Probability Formula( 1 );
b save1 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic model.
3. Specify response variable.
4. Specify predictor variable.
5. Apply filter condition.
6. Run the analysis.
7. Save probability formula.
8. Extract probability values.
9. Concatenate probability arrays.
10. Assign combined array.



### Example 18
> **Summary**: Fits a logistic model to predict probabilities based on weight and country, with interactive filtering by country.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #InteractiveFiltering, #ProbabilityModeling, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Logistic( Y( :Type ), X( :Weight ), Where( :Country == "USA" ), Run );
obj1 << Save Probability Formula( 1 );
b save2 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic model.
3. Specify response variable.
4. Specify predictor variable.
5. Filter for USA.
6. Run the model.
7. Save probability formula.
8. Retrieve probability values.
9. Concatenate probability arrays.
10. Store concatenated values.



### Example 19
> **Summary**: Fits a logistic model to predict probabilities based on weight and country, then extracts and concatenates probability values for specific categories.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #ProbabilityModeling, #DataFiltering, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Logistic( Y( :Type ), X( :Weight ), Where( :Country == "Other" ), );
obj1 << Save Probability Formula( 1 );
b save3 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Fit logistic model.
3. Specify response variable.
4. Specify predictor variable.
5. Apply filter condition.
6. Save probability formula.
7. Extract probability values.
8. Concatenate probability arrays.



### Example 20
> **Summary**: Creates a logistic model to predict probabilities by country, utilizing the Country variable and Weight as predictors.

<!-- Keywords: #JSLScripting, #LogisticRegression, #ProbabilityModeling, #CountryAnalysis, #PredictiveAnalytics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
val = dt:Country << get values;
obj = dt << Logistic( Y( :Type ), X( :Weight ), by( :Country ), );
obj << Save Probability Formula( 1 );
save = (dt:Name( "Prob[Sporty] By Country" ) << get values) || (dt:Name( "Prob[Small] By Country" ) << get values) || (dt
:Name( "Prob[Compact] By Country" ) << get values) || (dt:Name( "Prob[Medium] By Country" ) << get values) || (dt
:Name( "Prob[Large] By Country" ) << get values);
For( i = 1, i <= N Items( val ), i++,
	Match( val[i], "Japan", , "USA", , "Other", )
);
```

**Code Explanation**:

1. Open data table;
2. Get Country values.
3. Fit logistic model.
4. Save probability formula.
5. Concatenate probability values.
6. Loop through Country values.
7. Match Japan condition.
8. Match USA condition.
9. Match Other condition.



### Example 21
> **Summary**: Fits a logistic regression model to predict age based on weight, generating a report and journal from the analysis, and setting the journal window title.

<!-- Keywords: #LogisticRegression, #JMPScriptingLanguage, #DataAnalysis, #ModelBuilding, #Journaling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myrpt = Logistic( Y( :age ), X( :weight ) ) << report;
myrpt << journal;
Current Journal() << set window title( "test" );
Current Journal() << closewindow( no save );
```

**Code Explanation**:

1. Open data table;
2. Fit logistic regression model.
3. Generate model report.
4. Create journal from report.
5. Set journal window title.
6. Close journal without saving.



### Example 22
> **Summary**: Creates a logistic model with inverse prediction and report generation using JMP's Logistic platform.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #InversePrediction, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
obj1 = Logistic(
	Y( :Y Binary ),
	X( :BMI ),
	Lift Curve( 1 ),
	ROC Curve( 1 ),
	Target Level( "High" ),
	Inverse Prediction( Response( 0.5, 0.1 ), Term Value( BMI( . ) ) ),
	Inverse Prediction( Response( 0.9 ), Term Value( BMI( . ) ) )
);
rpt1 = obj1 << report;
```

**Code Explanation**:

1. Open data table;
2. Create logistic model object.
3. Set response variable.
4. Set predictor variable.
5. Enable lift curve.
6. Enable ROC curve.
7. Set target level.
8. Perform inverse prediction at 0.5 response.
9. Perform inverse prediction at 0.9 response.
10. Generate report object.



### Example 23
> **Summary**: Creates a logistic model with inverse predictions for binary response and continuous predictor variables, utilizing the JMP scripting language.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #InversePrediction, #BinaryResponse, #ContinuousPredictor -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = Logistic(
	Y( :Y Binary ),
	X( :BMI ),
	Lift Curve( 1 ),
	ROC Curve( 1 ),
	Target Level( "High" ),
	Inverse Prediction( Response( 0.5, 0.1 ), Term Value( BMI( . ) ) ),
	Inverse Prediction( Response( 0.9 ), Term Value( BMI( . ) ) )
);
rpt1 = obj1 << report;
```

**Code Explanation**:

1. Open data table;
2. Create logistic model.
3. Set response variable.
4. Add predictor variable.
5. Enable lift curve.
6. Enable ROC curve.
7. Set target level.
8. Calculate inverse prediction at 0.5.
9. Specify BMI term value.
10. Calculate inverse prediction at 0.9.



### Example 24
> **Summary**: Creates a logistic regression model using age as the response variable and weight as the predictor variable, opening a data table from a specified file.

<!-- Keywords: #LogisticRegression, #JSLScripting, #DataTable, #PredictiveModeling, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Logistic( Y( :age ), X( :weight ) );
```

**Code Explanation**:

1. Open data table;
2. Create logistic model object.
3. Set response variable to age.
4. Set predictor variable to weight.



### Example 25
> **Summary**: Creates a logistic regression model to predict sex based on weight, with a positive level set to 'M' and ROC curve generation.

<!-- Keywords: #LogisticRegression, #ROCCurve, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lg3 = Logistic( Y( :sex ), X( :weight ), Positive Level( "M" ), ROC Curve );
```

**Code Explanation**:

1. Open data table;
2. Create logistic model.
3. Set response variable: sex.
4. Set predictor variable: weight.
5. Define positive level as "M".
6. Generate ROC curve.



## Logistic using For Each
> **Summary**: Fits and creates reports for logistic models for multiple samples, utilizing a For Each loop to apply presets and set report titles.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #DataTable, #PresetDictionary, #ReportAutomation -->

**Code**:
```jsl
plat_samples = ["Logistic" => {"Logistic with ROC Curves"}, => {}];
dt = Open("data_table.jmp");
For Each( {sample}, plat_samples["Logistic"],
	obj = dt << Logistic( Y( :Response ), X( :"ln(dose)"n ) );
	Eval( Eval Expr( obj << Apply Preset( "Sample Presets", Expr( sample ) ) ) );
	obj << Set Report Title( sample );
);
```

**Code Explanation**:

1. Define preset dictionary.
2. Open data table;
3. Loop through logistic samples.
4. Fit logistic model.
5. Apply preset to model.
6. Set report title.
7. Repeat for each sample.



## Logistic using New Window
### Example 1
> **Summary**: Creates a new window with a horizontal list box, fitting a logistic model on the first dataset and adding a new data box for the second dataset.

<!-- Keywords: #JMPScriptingLanguage, #LogisticModel, #DataVisualization, #WindowReport, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
win = New Window( "multi dt",
	H List Box(
		dt << Logistic( Y( :age ), X( :weight ), SendToReport( Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ) ) ),
		dt2 << New Data Box()
	)
);
win << Save Window Report( "$TEMP/multipletables.jrp", embed data( 0 ) );
win << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Create new window titled "multi dt".
4. Add horizontal list box.
5. Fit logistic model on first dataset.
6. Hide parameter estimates in report.
7. Add new data box for second dataset.
8. Save window report to file.
9. Embed data in report.
10. Close the window.



### Example 2
> **Summary**: Creates a new window with a horizontal list box, fitting a logistic model to data and adding a new data box, then saves and opens the report.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #DataVisualization, #WindowManagement, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
win = New Window( "multi dt",
	H List Box(
		dt << Logistic( Y( :age ), X( :weight ), SendToReport( Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ) ) ),
		dt2 << New Data Box()
	)
);
win << Save Window Report( "$TEMP/multipletables.jrp", embed data( 0 ) );
win << Close Window;
Try( w = Open( "$TEMP/multipletables.jrp" ) );
w << set window size( 1200, 700 );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Create new window named "multi dt".
4. Add horizontal list box.
5. Fit logistic model on data_table data.
6. Hide parameter estimates outline.
7. Add new data box for Little Pond data.
8. Save window report as multipletables.jrp.
9. Close the window.
10. Open saved report.
11. Set window size to 1200x700.



## Logistic using Select Rows
> **Summary**: Analyze a data table by selecting specific rows, excluding one row, running logistic regression with automatic recalculation and local data filtering, and extracting text from the report.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #DataFiltering, #AutomaticRecalculation, #TextExtraction -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
r = dt1 << Select Rows( [2, 4, 6, 13, 15, 18, 19, 28, 32] );
r << Exclude( 1 );
report1 = dt1 << Logistic(
	Y( :Size Co ),
	X( :Name( "Sales ($M)" ) ),
	Automatic Recalc( 1 ),
	Local Data Filter(
		COUNT EXCLUDED ROWS( 1 ),
		Add Filter( columns( :Type ), Where( :Type == "Pharmaceutical" ), Display( :Type, Size( 181, 34 ), List Display ) )
	)
);
text1 = (Report( report1 ) << parent)[Outline Box( 1 )][Text Box( 1 )] << get text;
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Exclude one row.
4. Run logistic regression.
5. Set Y variable.
6. Set X variable.
7. Enable automatic recalculation.
8. Add local data filter.
9. Filter by Pharmaceutical type.
10. Extract text from report.



## Logistic using Save
> **Summary**: Selects and analyzes specific rows in a data table, performing logistic regression with automatic recalculation and local data filtering for Type 'Computer', before extracting text from the report and deleting the temporary file.

<!-- Keywords: #JMPScriptingLanguage, #LogisticRegression, #DataFiltering, #AutomaticRecalculation, #ReportGeneration -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << Save( "$TEMP/companiesOmit.jmp" );
r = dt2 << Select Rows( [2, 4, 6, 13, 15, 18, 19, 28, 32] );
report2 = dt2 << Logistic(
	Y( :Size Co ),
	X( :Name( "Sales ($M)" ) ),
	Automatic Recalc( 1 ),
	Local Data Filter(
		COUNT EXCLUDED ROWS( 0 ),
		Add Filter( columns( :Type ), Where( :Type == "Computer" ), Display( :Type, Size( 181, 34 ), List Display ) )
	)
);
text2 = (Report( report2 ) << parent)[Outline Box( 1 )][Text Box( 1 )] << get text;
Delete File( "$TEMP/companiesOmit.jmp" );
```

**Code Explanation**:

1. Open data table;
2. Save as companiesOmit.jmp.
3. Select specific rows.
4. Perform logistic regression.
5. Set automatic recalculation.
6. Add local data filter.
7. Filter for Type "Computer".
8. Extract text from report.
9. Delete temporary file.



## Logistic using Set Modeling Type
### Example 1
> **Summary**: Fits a logistic model to predict probability values based on weight and country, with specific probabilities saved for Japan.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #OrdinalModeling, #ProbabilityFormula, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
obj1 = dt << Logistic( Y( :Type ), X( :Weight ), Where( :Country == "Japan" ) );
obj1 << Save Probability Formula( 1 );
b save1 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Set modeling type ordinal.
3. Fit logistic model.
4. Save probability formula.
5. Extract probability values.



### Example 2
> **Summary**: Fits a logistic model to examine the relationship between Type and Weight, with specific consideration for observations from the USA.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #OrdinalModelingType, #DataFiltering, #ProbabilityFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
obj1 = dt << Logistic( Y( :Type ), X( :Weight ), Where( :Country == "USA" ) );
obj1 << Save Probability Formula( 1 );
b save2 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Set modeling type ordinal.
3. Fit logistic model.
4. Save probability formula.
5. Retrieve probability values.



### Example 3
> **Summary**: Fits a logistic model to examine the relationship between Type and Weight, with interactive filtering by Country.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #OrdinalModelingType, #InteractiveFiltering, #ProbabilityFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
obj1 = dt << Logistic( Y( :Type ), X( :Weight ), Where( :Country == "Other" ) );
obj1 << Save Probability Formula( 1 );
b save3 = (dt:Name( "Prob[Sporty] Where" ) << get values) || (dt:Name( "Prob[Small] Where" ) << get values) || (dt
:Name( "Prob[Compact] Where" ) << get values) || (dt:Name( "Prob[Medium] Where" ) << get values) || (dt:Name( "Prob[Large] Where" ) <<
get values);
```

**Code Explanation**:

1. Open data table.
2. Set modeling type ordinal.
3. Fit logistic model.
4. Save probability formula.
5. Extract probability values.



### Example 4
> **Summary**: Analyze logistic regression models by country, generating probability values for different categories and saving them as a data table.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #OrdinalModelingType, #DataTableManipulation, #CountryAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
val = dt:Country << get values;
obj = dt << Logistic( Y( :Type ), X( :Weight ), by( :Country ) );
obj << Save Probability Formula( 1 );
save = (dt:Name( "Prob[Sporty] By Country" ) << get values) || (dt:Name( "Prob[Small] By Country" ) << get values) || (dt
:Name( "Prob[Compact] By Country" ) << get values) || (dt:Name( "Prob[Medium] By Country" ) << get values) || (dt
:Name( "Prob[Large] By Country" ) << get values);
For( i = 1, i <= N Items( val ), i++,
	Match( val[i], "Japan", , "USA", , "Other", )
);
Close( dt, no save );
b note1 = "Ready/Not Ready";
b note2 = "Not Ready/Ready";
```

**Code Explanation**:

1. Open table.
2. Set modeling type ordinal.
3. Get country values.
4. Fit logistic model.
5. Save probability formula.
6. Concatenate probability values.
7. Loop through country values.
8. Match country values.
9. Close table without saving.
10. Define notes.



### Example 5
> **Summary**: Analyze logistic regression by country, generating probability formulas and concatenating results for further exploration.

<!-- Keywords: #JSLScriptingLanguage, #LogisticRegression, #OrdinalData, #ByGroups, #ProbabilityFormulas -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:Type << Set Modeling Type( "Ordinal" );
val = dt:Country << get values;
obj = dt << Logistic( Y( :Type ), X( :Weight ), by( :Country ) );
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
2. Set modeling type for "Type".
3. Get unique values from "Country".
4. Perform logistic regression by country.
5. Save probability formula.
6. Concatenate probability columns.
7. Loop through country values.
8. Match country values (no action specified).
9. End loop.
10. Close script.



## Logistic using Log Capture
> **Summary**: Creates and analyzes a log output, including logistic regression with inverse prediction and report generation.

<!-- Keywords: #JSLScripting, #LogisticRegression, #InversePrediction, #ReportGeneration, #DataAnalysis -->

**Code**:
```jsl
log1 = Log Capture(
	dt = New Table( "LogRegInvPredDiff",
		Add Rows( 8 ),
		New Column( "dose", Numeric, Continuous, Set Values( [0.1, 0.3, 1, 3, 0.1, 0.3, 1, 3] ) ),
		New Column( "logdose", Numeric, Continuous, Formula( Log10( :dose ) ), Lock( 1 ) ),
		New Column( "NominalY", Numeric, Nominal, Set Values( [0, 0, 0, 0, 1, 1, 1, 1] ) ),
		New Column( "count", Numeric, Continuous, Set Values( [1, 2, 5, 8, 7, 6, 3, 0] ) ),
		New Column( "OrdinalY", Numeric, Ordinal, Set Values( [0, 0, 0, 0, 1, 1, 1, 1] ) )
	);
	ford = Logistic( Y( :OrdinalY ), X( :logdose ), Freq( :count ), Inverse Prediction( Response( 0.5 ) ) );
);
con = Contains( log1, "Inverse Response only works for Nominal responses" );
rord = Report( ford );
Close( dt, NoSave );
dt = Open("data_table.jmp");
lg3 = Logistic( Y( :sex ), X( :weight ), Positive Level( "M" ), ROC Curve );
```

**Code Explanation**:

1. Capture log output.
2. Create new table "LogRegInvPredDiff".
3. Add 8 rows to the table.
4. Define "dose" column with numeric values.
5. Define "logdose" column with formula Log10(dose).
6. Define "NominalY" column with nominal values.
7. Define "count" column with continuous values.
8. Define "OrdinalY" column with ordinal values.
9. Perform logistic regression with OrdinalY as response.
10. Check log for specific message.
11. Generate report from logistic model.
12. Close table without saving.
13. Open data table.
14. Perform logistic regression with sex as response.



## Logistic using Response Screening
> **Summary**: Runs a series of data manipulation and modeling tasks, including response screening, p-value extraction, and logistic regression fitting.

<!-- Keywords: #JSLScripting, #DataManipulation, #LogisticRegression, #ResponseScreening, #PValueExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj1 = dt << Response Screening( Y( :sex ), X( :height ) );
dt1 = obj1 << Save PValues();
PValue1 = dt1:PValue[1];
obj2 = dt << Response Screening( Y( :sex, :weight ), X( :age, :height ), PValues Table on Launch( 1 ) );
dt2 = Data Table("data_table");
row = dt2 << Get Rows Where( :Y == "sex" & :X == "height" );
PValue2 = dt2:PValue[row][1];
obj3 = dt << Fit Group( Logistic( Y( :sex ), X( :height ) ) );
```

**Code Explanation**:

1. Open data table.
2. Perform response screening.
3. Save p-values to new table.
4. Extract first p-value.
5. Perform response screening with multiple variables.
6. Retrieve p-values table.
7. Find specific row based on conditions.
8. Extract p-value from found row.
9. Fit logistic model to data.
10. Perform group fitting.



