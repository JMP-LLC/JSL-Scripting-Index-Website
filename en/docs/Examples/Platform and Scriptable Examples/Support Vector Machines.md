# Support Vector Machines

## Support Vector Machines using If
### Example 1
> **Summary**: Runs a Support Vector Machines analysis in JMP Pro, specifying the response variable and predictors, and extracting model summary tables.

<!-- Keywords: #JMPPro, #SupportVectorMachines, #DataAnalysis, #MachineLearning, #Scripting -->

**Code**:
```jsl
If( JMP Product Name() == "Pro",
	dt2 = Open("data_table.jmp");
	SVM_LDF1 = dt2 << Support Vector Machines(
		Y( :Survived ),
		X( :Age, :Cabin ),
		Fit(
			Kernel Function( "Radial Basis Function" ),
			Gamma( 0.5 ),
			Cost( 1 ),
			Validation Method( "None" ),
			Response Profile Plot( 0 ),
			Plot Actual by Predicted( 0 ),
			Confusion Matrix( 0.98857734377105 )
		)
	);
	SVMTable = Report( SVM_LDF1 )[Outline Box( "Support Vector Machine" )][Outline Box( "Support Vector Machine Model 1" )][
	Outline Box( "Model Summary" )][Table Box( 2 )] << Make Into Data Table;
	vals = SVMTable << Get as matrix;
	SVM_LDF1 << Local Data Filter(
		Add Filter( columns( :Passenger Class, :Sex ), Where( :Passenger Class == 2 ), Where( :Sex == "female" ) )
	);
	text1 = (Report( SVM_LDF1 ) << Parent)[Outline Box( 1 )][Text Box( 1 )] << Get Text;
	Close( dt2, nosave );
	Close( SVMTable, nosave );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Run Support Vector Machines analysis.
4. Specify response variable: Survived.
5. Specify predictors: Age, Cabin.
6. Set kernel function to Radial Basis Function.
7. Set gamma to 0.5.
8. Set cost to 1.
9. Disable validation method.
10. Disable plots and confusion matrix.
11. Extract model summary table.
12. Convert table to data table.
13. Get table values as matrix.
14. Add local data filter for Passenger Class 2 and Sex female.
15. Retrieve text from report.
16. Close datasets without saving.



### Example 2
> **Summary**: Executes a Support Vector Machines model in JMP Pro, utilizing the Radial Basis Function kernel and retrieving fit measures.

<!-- Keywords: #JMPPro, #SupportVectorMachines, #RadialBasisFunction, #KernelFunctions, #MachineLearning -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Support Vector Machines(
		Y( :Y Binary ),
		X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG ),
		Validation( :Validation ),
		Kernel Function( "Radial Basis Function" ),
		Fit
	);
	actualmeasures = obj << (Fit[1] << Get Measures);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro.
2. Open data table;
3. Run Support Vector Machines.
4. Set Y variable.
5. Set X variables.
6. Use Validation column.
7. Select Radial Basis Function.
8. Perform model fit.
9. Retrieve fit measures.
10. Close dataset without saving.



### Example 3
> **Summary**: Process of training a Support Vector Machines model in JMP Pro, generating predicted probabilities and saving probability formulas.

<!-- Keywords: #JMPPro, #SupportVectorMachines, #PredictiveModeling, #ProbabilityFormulas, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Support Vector Machines(
		Y( :BAD ),
		X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
		Fit( Kernel Function( "Radial Basis Function" ), Gamma( 0.0833333333333333 ), Cost( 1 ), Validation Method( "None" ) )
	);
	rpt = obj << Report();
	obj << (fit[1] << Save Probabilities);
	obj << (fit[1] << Save Probability Formula);
	probcols = dt[0, 15 :: 16];
	mostlikelycol = dt[0, 17];
	decisionvalform = dt[0, 18];
	probforms = dt[0, 19 :: 20];
	mostlikelyform = dt[0, 21];
	threshpredform = dt[0, 22];
	reportthreshprob = rpt[Outline Box( "Set Probability Threshold" )][Number Edit Box( 1 )] << get;
	dt << New Column( "Threshold Check", Numeric, Nominal, Formula( If( :"Probability( BAD=Good Risk )"n > reportthreshprob, 0, 1 ) ) );
	:Threshold Check << Value Labels( {0 = "Good Risk", 1 = "Bad Risk"} );
	threshcheck = dt[0, 23];
	index = Loc Nonmissing( probforms );
	jindex = Loc Nonmissing( probcols );
	obj << (fit[1] << Save Predicteds);
	obj << (fit[1] << Save Prediction Formula);
	predicteds = dt[0, 24];
	predforms = dt[0, 25];
	:Threshold Predicted BAD << Use Value Labels( 0 );
	threshpredformnolabels = dt[0, 22];
	decisiondatatype = dt:Decision Value << Get Data Type;
	decisionmodeltype = dt:Decision Value << Get Modeling Type;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table;
3. Run Support Vector Machines model.
4. Specify response and predictor variables.
5. Set kernel function and parameters.
6. Generate model report.
7. Save predicted probabilities.
8. Save probability formula.
9. Identify probability columns.
10. Close dataset without saving.



> **Summary**: Runs Support Vector Machines analysis on a data table, generating a report with model comparison results and extracting key parameters.

<!-- Keywords: #SupportVectorMachines, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning, #ModelComparison -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Support Vector Machines(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( -0.25 ), Cost( -1 ), Validation Method( "None" ) ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( . ), Cost( . ), Validation Method( "None" ) ),
	Fit( Kernel Function( "Radial Basis Function" ), Gamma( -1 ), Cost( -2 ), Validation Method( "None" ) )
);
rpt = obj << Report();
actualMethod = rpt[Outline Box( "Model Comparison" )][String Col Box( "Method" )] << get;
actualKernel = rpt[Outline Box( "Model Comparison" )][String Col Box( "Kernel Function" )] << get;
actualCost = rpt[Outline Box( "Model Comparison" )][Number Col Box( "Cost" )] << get as matrix;
actualGamma = rpt[Outline Box( "Model Comparison" )][Number Col Box( "Gamma" )] << get as matrix;
actualNumofSVs = rpt[Outline Box( "Model Comparison" )][Number Col Box( "# SV" )] << get as matrix;
actualMisclassRate = rpt[Outline Box( "Model Comparison" )][Number Col Box( "Training Misclassification Rate" )] << get as matrix;
actualBest = rpt[Outline Box( "Model Comparison" )][String Col Box( "Best" )] << get;
```

**Code Explanation**:

1. Open data table;
2. Run Support Vector Machines analysis.
3. Set first model parameters.
4. Set second model parameters.
5. Set third model parameters.
6. Generate report from results.
7. Extract method name.
8. Extract kernel function.
9. Extract cost values.
10. Extract gamma values.



