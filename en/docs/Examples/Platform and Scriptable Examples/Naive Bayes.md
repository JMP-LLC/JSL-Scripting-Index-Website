# Naive Bayes

### Example 1
> **Summary**: Generates a Naive Bayes analysis to predict the 'Success' outcome based on patient variables, utilizing a profiler with initial conditions and term values.

<!-- Keywords: #NaiveBayes, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
Open("data_table.jmp") << Naive Bayes(
	Y( :Success 1 ),
	X(
		Column Group( "Patient Variables" ),
		:Family Present,
		:Support Present,
		:Counselor Present,
		:Device Assisted,
		:Shift,
		:Expert RN,
		:Mean Active Minutes,
		:Mean Nurse Exp,
		:Mean Nurse Comp,
		:Mean Difficulty,
		:Mean Cooperative,
		:Mean Distress,
		:Minutes 1,
		:Nurse Exp 1,
		:Nurse Comp 1,
		:Difficulty 1,
		:Cooperative 1,
		:Distress 1
	),
	Profiler(
		1,
		Term Value(
			Age( 5.262, Lock( 0 ), Show( 1 ) ),
			Gender( 1, Lock( 0 ), Show( 1 ) ),
			Weight( 24.75, Lock( 0 ), Show( 1 ) ),
			Previous IV( 0, Lock( 0 ), Show( 1 ) ),
			Lost IV( "0", Lock( 0 ), Show( 1 ) ),
			Dehydrated( "No/Unknown", Lock( 0 ), Show( 1 ) ),
			Family Present( 0, Lock( 0 ), Show( 1 ) ),
			Support Present( 0, Lock( 0 ), Show( 1 ) ),
			Counselor Present( 0, Lock( 0 ), Show( 1 ) ),
			Device Assisted( 0.8446, Lock( 0 ), Show( 1 ) ),
			Shift( 1, Lock( 0 ), Show( 1 ) ),
			Expert RN( 0.0557, Lock( 0 ), Show( 1 ) ),
			Mean Active Minutes( 5.706, Lock( 0 ), Show( 1 ) ),
			Mean Nurse Exp( 5.585, Lock( 0 ), Show( 1 ) ),
			Mean Nurse Comp( 3.1058, Lock( 0 ), Show( 1 ) ),
			Mean Difficulty( 0.6416, Lock( 0 ), Show( 1 ) ),
			Mean Cooperative( 0.5241, Lock( 0 ), Show( 1 ) ),
			Mean Distress( 5.062, Lock( 0 ), Show( 1 ) ),
			Minutes 1( 5.75, Lock( 0 ), Show( 1 ) ),
			Nurse Exp 1( 2.2566, Lock( 0 ), Show( 1 ) ),
			Nurse Comp 1( 2.9069, Lock( 0 ), Show( 1 ) ),
			Difficulty 1( 0.3022, Lock( 0 ), Show( 1 ) ),
			Cooperative 1( 0.5332, Lock( 0 ), Show( 1 ) ),
			Distress 1( 5.115, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Naive Bayes analysis.
3. Set response variable.
4. Define predictor variables.
5. Create profiler.
6. Set initial conditions.
7. Configure term values.
8. Display all terms.
9. Unlock all terms.
10. Show all terms.



### Example 2
> **Summary**: Generates a Naive Bayes analysis to predict Thread Wear based on Method, Size of Load, Sand blasted?, and Starch Content variables, with Profiler settings configured for Alpha Amalyze method.

<!-- Keywords: #NaiveBayes, #Profiler, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModel -->

**Code**:
```jsl
Open("data_table.jmp") << Naive Bayes(
	Y( :Thread Wear ),
	X( :Method, :"Size of Load (lbs)"n, :Sand blasted?, :"Starch Content (%)"n ),
	Profiler(
		1,
		Term Value(
			Method( "Alpha Amalyze",
				Lock( 0 ),
				Show( 1 )
			),
			"Size of Load (lbs)"n( 182.26, Lock( 0 ), Show( 1 ) ),
			Sand blasted?( "no", Lock( 0 ), Show( 1 ) ),
			"Starch Content (%)"n( 25.517, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data_table data
2. Run Naive Bayes analysis.
3. Set Y variable: Thread Wear.
4. Set X variables: Method, Size of Load, Sand blasted?, Starch Content.
5. Launch Profiler.
6. Configure Profiler settings.
7. Set Method to Alpha Amalyze.
8. Unlock Method parameter.
9. Display Method parameter.
10. Set Size of Load to 182.26 lbs.



### Example 3
> **Summary**: Generates a Naive Bayes analysis on the provided data table, specifying predictor variables and configuring Profiler settings to analyze the relationship between Age, Gender, BMI, BP, Total Cholesterol, LDL, HDL, TCH, LTG, and Glucose.

<!-- Keywords: #NaiveBayes, #PredictorVariables, #ProfilerSettings, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Naive Bayes(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Profiler(
		1,
		Term Value(
			Age( 48.518, Lock( 0 ), Show( 1 ) ),
			Gender( 1, Lock( 0 ), Show( 1 ) ),
			BMI( 30.75, Lock( 0 ), Show( 1 ) ),
			BP( 94.647, Lock( 0 ), Show( 1 ) ),
			Total Cholesterol( 257.5, Lock( 0 ), Show( 1 ) ),
			LDL( 115.44, Lock( 0 ), Show( 1 ) ),
			HDL( 49.788, Lock( 0 ), Show( 1 ) ),
			TCH( 4.0702, Lock( 0 ), Show( 1 ) ),
			LTG( 4.6414, Lock( 0 ), Show( 1 ) ),
			Glucose( 91.26, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Naive Bayes analysis.
3. Set response variable.
4. Specify predictor variables.
5. Enable Profiler.
6. Configure Profiler settings.
7. Set Age term value.
8. Set Gender term value.
9. Set BMI term value.
10. Set BP term value.



### Example 4
> **Summary**: Generates a Naive Bayes model to predict the 'BAD' response variable using multiple predictors from an open data table, with profiler configuration and term value specification.

<!-- Keywords: #NaiveBayes, #PredictiveModeling, #JMPScriptingLanguage, #DataScience, #MachineLearning -->

**Code**:
```jsl
Open("data_table.jmp") << Naive Bayes(
	Validation( :Validation ),
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO ),
	Profiler(
		1,
		Term Value(
			LOAN( 18608, Lock( 0 ), Show( 1 ) ),
			MORTDUE( 73760, Lock( 0 ), Show( 1 ) ),
			VALUE( 101780, Lock( 0 ), Show( 1 ) ),
			REASON( "DebtCon", Lock( 0 ), Show( 1 ) ),
			JOB( "Mgr", Lock( 0 ), Show( 1 ) ),
			YOJ( 8.922, Lock( 0 ), Show( 1 ) ),
			DEROG( 0.255, Lock( 0 ), Show( 1 ) ),
			DELINQ( 0.449, Lock( 0 ), Show( 1 ) ),
			CLAGE( 179.8, Lock( 0 ), Show( 1 ) ),
			NINQ( 1.186, Lock( 0 ), Show( 1 ) ),
			CLNO( 21.296, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Apply Naive Bayes model.
3. Use "Validation" column for validation.
4. Set "BAD" as response variable.
5. Include multiple predictors: "LOAN", "MORTDUE", "VALUE", "REASON", "JOB", "YOJ", "DEROG", "DELINQ", "CLAGE", "NINQ", "CLNO".
6. Enable Profiler.
7. Set Profiler configuration to 1.
8. Specify term values for each predictor.
9. Lock all terms for prediction.
10. Display all terms in the profiler.



### Example 5
> **Summary**: Generates a Naive Bayes analysis to predict country based on size and type, with profiler enabled and ROC curve disabled, saving the probability formula.

<!-- Keywords: #NaiveBayes, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #ProbabilityFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Naive Bayes(
	Y( :country ),
	X( :size, :type ),
	Profiler( 1, Term Value( size( "Large", Lock( 0 ), Show( 1 ) ), Type( "Family", Lock( 0 ), Show( 1 ) ) ) ),
	ROC Curve( 0 )
);
obj << Save Probability Formula;
```

**Code Explanation**:

1. Open data table.
2. Run Naive Bayes analysis.
3. Set response variable.
4. Specify predictor variables.
5. Enable profiler.
6. Configure term values.
7. Disable ROC curve.
8. Save probability formula.



### Example 6
> **Summary**: Runs the fitting and testing of a Naive Bayes model to predict country based on size and type variables, with interactive profiling capabilities.

<!-- Keywords: #NaiveBayes, #PredictiveModeling, #JMPScriptingLanguage, #DataScience, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Naive Bayes(
	Y( :country ),
	X( :size, :type ),
	Profiler( 1, Term Value( size( "Large", Lock( 0 ), Show( 1 ) ), Type( "Family", Lock( 0 ), Show( 1 ) ) ) ),
	ROC Curve( 0 )
);
obj << Save Probability Formula;
obj << Test YFullFormula;
```

**Code Explanation**:

1. Open data table;
2. Fit Naive Bayes model.
3. Set response variable: country.
4. Set predictor variables: size, type.
5. Enable Profiler.
6. Lock size term at "Large".
7. Show size term in Profiler.
8. Lock type term at "Family".
9. Show type term in Profiler.
10. Disable ROC Curve.
11. Save probability formula.
12. Test YFullFormula.



### Example 7
> **Summary**: Generates a Naive Bayes analysis on the Titanic dataset, using multiple X variables and configuring the Profiler to visualize term values.

<!-- Keywords: #NaiveBayes, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning, #TitanicDataset -->

**Code**:
```jsl
Open("data_table.jmp") << Naive Bayes(
	Y( :Survived ),
	X( :Passenger Class, :Sex, :Age, :Siblings and Spouses, :Parents and Children, :Fare, :Port, :Lifeboat ),
	Profiler(
		1,
		Term Value(
			Passenger Class( 1, Lock( 0 ), Show( 1 ) ),
			Sex( "female", Lock( 0 ), Show( 1 ) ),
			Age( 29.881, Lock( 0 ), Show( 1 ) ),
			Siblings and Spouses( 0.4989, Lock( 0 ), Show( 1 ) ),
			Parents and Children( 0.385, Lock( 0 ), Show( 1 ) ),
			Fare( 121, Lock( 0 ), Show( 1 ) ),
			Port( "C", Lock( 0 ), Show( 1 ) ),
			Lifeboat( "A", Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Apply Naive Bayes model.
3. Set Y variable to Survived.
4. Include multiple X variables.
5. Enable Profiler.
6. Set Profiler configuration.
7. Define term values for each X variable.
8. Lock terms for Passenger Class.
9. Lock terms for Sex.
10. Lock terms for Age.



### Example 8
> **Summary**: Fits a Naive Bayes model to predict sex based on transformed height and weight data, with interactive profiling capabilities.

<!-- Keywords: #NaiveBayes, #DataTransformation, #ModelFitting, #Profiler, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Naive Bayes(
	Y( :sex ),
	X( Transform Column( "Log[height]", Formula( Log( :height ) ) ), :weight ),
	Profiler( 1, Term Value( "Log[height]"n( 4.13363, Lock( 0 ), Show( 1 ) ), weight( 105, Lock( 0 ), Show( 1 ) ) ) )
);
```

**Code Explanation**:

1. Open data table.
2. Create Log[height] column.
3. Fit Naive Bayes model.
4. Use sex as response.
5. Include transformed height and weight.
6. Enable Profiler.
7. Set Log[height] term value.
8. Unlock Log[height] term.
9. Display Log[height] term.
10. Set weight term value.



## Naive Bayes using Set Property
### Example 1
> **Summary**: Generates a Naive Bayes analysis to predict the BAD variable in the data table, utilizing informative missing values for REASON, JOB, DEROG, and DELINQ.

<!-- Keywords: #NaiveBayes, #PredictiveModeling, #DataAnalysis, #JMPScriptingLanguage, #InformativeMissing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:REASON << Set Property( "Informative Missing", 1 );
dt:JOB << Set Property( "Informative Missing", 1 );
dt:DEROG << Set Property( "Informative Missing", 1 );
dt:DELINQ << Set Property( "Informative Missing", 1 );
dt << Naive Bayes(
	Validation( :Validation ),
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO ),
	Profiler(
		1,
		Term Value(
			LOAN( 18608, Lock( 0 ), Show( 1 ) ),
			MORTDUE( 73760, Lock( 0 ), Show( 1 ) ),
			VALUE( 101780, Lock( 0 ), Show( 1 ) ),
			REASON( "", Lock( 0 ), Show( 1 ) ),
			JOB( "Mgr", Lock( 0 ), Show( 1 ) ),
			YOJ( 8.92, Lock( 0 ), Show( 1 ) ),
			DEROG( 0.26, Lock( 0 ), Show( 1 ) ),
			DELINQ( 0.45, Lock( 0 ), Show( 1 ) ),
			CLAGE( 180, Lock( 0 ), Show( 1 ) ),
			NINQ( 1.2, Lock( 0 ), Show( 1 ) ),
			CLNO( 21.3, Lock( 0 ), Show( 1 ) )
		)
	)
);
```

**Code Explanation**:

1. Open data table;
2. Set Informative Missing for REASON.
3. Set Informative Missing for JOB.
4. Set Informative Missing for DEROG.
5. Set Informative Missing for DELINQ.
6. Run Naive Bayes analysis.
7. Use Validation column.
8. Predict BAD variable.
9. Include all specified X variables.
10. Launch Profiler with given settings.



### Example 2
> **Summary**: Generates a Naive Bayes analysis to predict the likelihood of 'BAD' outcomes based on the 'REASON' column, with informative missing values set for the 'REASON' column.

<!-- Keywords: #NaiveBayes, #PredictiveModeling, #JMPScriptingLanguage, #DataAnalysis, #MachineLearning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:REASON << Set Property( "Informative Missing", 1 );
dt << Naive Bayes( Validation( :Validation ), Y( :BAD ), X( :REASON ), Profiler( 1, Term Value( REASON( "", Lock( 0 ), Show( 1 ) ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Set "Informative Missing" property for REASON column.
3. Run Naive Bayes analysis.
4. Specify Validation column.
5. Set BAD as response variable.
6. Use REASON as predictor.
7. Enable Profiler.
8. Configure REASON term in Profiler.
9. Lock REASON term at default value.
10. Display REASON term in Profiler.



## Naive Bayes using If
> **Summary**: Fits a Naive Bayes model to a data table, saving probability formulas, and retrieving values in JMP Pro.

<!-- Keywords: #NaiveBayes, #JMPPro, #DataAnalysis, #ProbabilityModeling, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Naive Bayes( Validation( :Validation ), Y( :BAD ), X( :REASON, JOB ), Profiler( 1 ) );
	obj1 << save probability formula;
	formula1 = (dt:Naive Score Good Risk << get values);
	dt:REASON << Set Property( "Informative Missing", 1 );
	obj2 = dt << Naive Bayes( Validation( :Validation ), Y( :BAD ), X( :REASON, :JOB ), Profiler() );
	obj2 << save probability formula;
	formula2 = (dt:Naive Score Good Risk 2 << get values);
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data table;
3. Fit Naive Bayes model.
4. Save probability formula.
5. Retrieve probability values.
6. Set "Informative Missing" property.
7. Refit Naive Bayes model.
8. Save second probability formula.
9. Retrieve second set of values.
10. Close dataset without saving.



