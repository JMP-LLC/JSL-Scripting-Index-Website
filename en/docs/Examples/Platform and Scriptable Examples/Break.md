# Break

## Break using For
> **Summary**: Generates a distribution analysis for continuous variables in the specified data table using the Distribution platform, identifying outlying rows and replacing values as needed.

<!-- Keywords: #JMPScriptingLanguage, #DistributionAnalysis, #ContinuousVariables, #DataCleaning, #QuantileRange -->

**Code**:
```jsl
// Clean Out Error Codes
// Open data table
dt = Open("data_table.jmp");
// Clean Out Error Codes
For( icol = 8, icol <= 394, icol++,
	col = Column( icol );
	vec = col << GetAsMatrix;
	nr = N Row( vec );
	Tail = 0.1;
	For( i = 1, i < 8, i++,
		PL = Tail;
		PU = 1 - Tail;
		QLower = Quantile( PL, vec );
		QUpper = Quantile( PU, vec );
		If( QLower < QUpper, Break() );
		Tail = Tail / 2;
	);
	QRange = QUpper - QLower;
	funnyRows =
	Loc(
		(vec > QUpper + 20 * QRange | vec
		 < QLower - 20 * QRange) & vec
		 == Floor( vec )
	);
	nFix = N Row( funnyRows );
	If( nFix == 0, Continue() );
	Show(
		"  ",
		col << GetName,
		QLower,
		QUpper,
		vec[funnyRows]
	);
	For( i = 1, i <= nfix, i++,
		col[funnyRows[i]] = .
	);
);
```

**Code Explanation**:

1. Open data table.
2. Initialize column index.
3. Loop through columns.
4. Get column matrix.
5. Calculate number of rows.
6. Set initial tail value.
7. Loop through initial quantiles.
8. Calculate lower and upper quantiles.
9. Check quantile condition.
10. Calculate quantile range.
11. Identify outlying rows.
12. Count fixable rows.
13. Skip if no fix needed.
14. Display column details.
15. Replace outlying values.



## Break using Run Script
> **Summary**: Fits a parametric survival model, extracting parameter estimates, and adjusting for original predictors in JMP Pro.

<!-- Keywords: #JMPScriptingLanguage, #ParametricSurvivalModel, #ParameterEstimates, #JMPPro, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
 
obj = dt << Run Script( "Fit Parametric Survival" );
rpt = obj << report;
est = rpt[Outline Box( "Parameter Estimates" )][Table Box( 1 )] << get as matrix;
If( JMP Product Name() == "Pro",
	rpt["Parameter Estimates"][Button Box( 1 )] << Click;
	For( i = 1, i <= N Items( Window() ), i++,
		If( Window()[i] << get window title == "Report: Fit Model",
			Window()[i][Button Box( 9 )] << Click;
			rpt1 = Current Report();
			Break();
		)
	);
	est1 = rpt1[Outline Box( "Parameter Estimates for Original Predictors" )][Table Box( 1 )] << get as matrix;
	scale1 = rpt1[Outline Box( "Parameter Estimates for Original Predictors" )][Table Box( 2 )] << get as matrix;
);
```

**Code Explanation**:

1. Open data table.
2. Run parametric survival script.
3. Extract parameter estimates report.
4. Convert estimates to matrix.
5. Check if JMP version is Pro.
6. Click on parameter estimates button.
7. Loop through all windows.
8. Find "Report: Fit Model" window.
9. Click on "Confidence Limits" button.
10. Extract original parameter estimates and scale matrices.



