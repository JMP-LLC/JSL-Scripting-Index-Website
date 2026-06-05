# Fit Definitive Screening

### Example 1
> **Summary**: Fits a definitive screening model to identify significant predictors in a dataset, utilizing the Fit Definitive Screening platform.

<!-- Keywords: #FitDefinitiveScreening, #PredictorSelection, #RegressionModel, #JMPScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
// Fit Definitive Screening
// Open data table
dt = Open("data_table.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:Methanol, :Ethanol, :Propanol,
		:Butanol, :pH, :Time
	),
	Y( :Yield )
);
```

**Code Explanation**:

1. Open data table.
2. Fit Definitive Screening.
3. Specify predictors.
4. Specify response variable.



### Example 2
> **Summary**: Fits a definitive screening model to analyze the relationship between yield and various predictors, including lot, methanol, ethanol, propanol, butanol, pH, and time.

<!-- Keywords: #DefinitiveScreening, #MultipleRegression, #JMPScriptingLanguage, #PredictorVariables, #ResponseVariable -->

**Code**:
```jsl
// Fit Definitive Screening
// Open data table
dt = Open("data_table.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	Y( :Yield ),
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	)
);
```

**Code Explanation**:

1. Open data table.
2. Fit Definitive Screening model.
3. Set response variable to Yield.
4. Include predictors: Lot, Methanol, Ethanol.
5. Include predictors: Propanol, Butanol, pH.
6. Include predictor: Time.



### Example 3
> **Summary**: Fits a Definitive Screening model to analyze the relationship between multiple predictors (Lot, Methanol, Ethanol, Propanol, Butanol, pH, Time) and a response variable (Yield) in a data table.

<!-- Keywords: #DefinitiveScreening, #MultipleRegression, #PredictorVariables, #ResponseVariable, #DataAnalysis -->

**Code**:
```jsl
// Fit Definitive Screening
// Open data table
dt = Open("data_table.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:Lot, :Methanol, :Ethanol,
		:Propanol, :Butanol, :pH, :Time
	),
	Y( :Yield )
);
```

**Code Explanation**:

1. Open data table.
2. Fit Definitive Screening model.
3. Specify predictors: Lot, Methanol, Ethanol.
4. Specify predictors: Propanol, Butanol, pH, Time.
5. Specify response variable: Yield.



### Example 4
> **Summary**: Fits a Definitive Screening model to predict Solids based on pH, Water Temp, Extraction Time, Ratio, Agitation Speed, Hydrolyze, and Pre-Soak variables in a data table.

<!-- Keywords: #DefinitiveScreening, #RegressionModel, #JMPScriptingLanguage, #PredictiveAnalytics, #DataAnalysis -->

**Code**:
```jsl
// Fit Definitive Screening
// Open data table
dt = Open("data_table.jmp");
// Fit Definitive Screening
Fit Definitive Screening(
	X(
		:pH, :Water Temp,
		:Extraction TIme, :Ratio,
		:Agitation Speed, :Hydrolyze,
		:"Pre-Soak"n
	),
	Y( :Solids )
);
```

**Code Explanation**:

1. Open data table.
2. Fit Definitive Screening model.
3. Set predictors: pH, Water Temp, Extraction Time, Ratio, Agitation Speed, Hydrolyze, Pre-Soak.
4. Set response variable: Solids.



### Example 5
> **Summary**: Fits a definitive screening model to identify significant terms in a multiple regression analysis, utilizing quadratic and interaction heredity.

<!-- Keywords: #FitModel, #DefinitiveScreening, #MultipleRegression, #JMPScriptingLanguage, #QuadraticTerms -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dfs = Fit Definitive Screening(
	Y( :Yield ),
	X( :Lot, :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ),
	Quadratic Terms Obey Strong Heredity( 1 ),
	Interactions Obey Strong Heredity( 1 )
);
rpt = dfs << report;
dfs << set stage 1 p value( 0.3 );
```

**Code Explanation**:

1. Open data table.
2. Fit definitive screening model.
3. Specify response variable.
4. Define predictor variables.
5. Enable quadratic heredity.
6. Enable interaction heredity.
7. Generate report.
8. Set stage 1 p-value threshold.



### Example 6
> **Summary**: Fits a definitive screening model to identify significant predictor variables and interactions, generating a report with stage 1 p-value threshold set to 1e-7.

<!-- Keywords: #FitDefinitiveScreening, #JMPScriptingLanguage, #RegressionModel, #PredictorVariables, #Interactions -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dfs = dt << Fit Definitive Screening(
	Y( :Stretch ),
	X( :Silica, :Sulfur, :Silane ),
	Quadratic Terms Obey Strong Heredity( 1 ),
	Interactions Obey Strong Heredity( 1 )
);
rpt = dfs << report;
dfs << set stage 1 p value( 1e-7 );
```

**Code Explanation**:

1. Open data table.
2. Fit definitive screening model.
3. Specify response variable.
4. Select predictor variables.
5. Enable quadratic terms heredity.
6. Enable interactions heredity.
7. Generate model report.
8. Set stage 1 p-value threshold.



## Fit Definitive Screening using Expr
> **Summary**: Fits a Definitive Screening Design (DSD) to a data table, utilizing quadratic terms and interactions that obey strong heredity.

<!-- Keywords: #JSLScriptingLanguage, #DefinitiveScreeningDesign, #QuadraticTerms, #Interactions, #StrongHeredity -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fitDSDExpr = Expr(
	Fit Definitive Screening(
		Y( :Yield ),
		X( :Lot, :Methanol, :Ethanol, :Propanol, :Butanol, :pH, :Time ),
		Quadratic Terms Obey Strong Heredity( 1 ),
		Interactions Obey Strong Heredity( 1 )
	)
);
fitDSDExpr;
```

**Code Explanation**:

1. Open data table.
2. Define fit expression.
3. Execute fit expression.



