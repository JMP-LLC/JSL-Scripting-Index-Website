# Screening

### Example 1
> **Summary**: Screens a data table for regression analysis by selecting Y and X variables, utilizing the Screening platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Screening, #RegressionAnalysis, #DataPreprocessing, #JSLCode -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening(
	Y( :OCV ),
	X( :A1, :A2, :A3, :A4, :C1, :C2 )
);
```

**Code Explanation**:

1. Open data table.
2. Set Y variable.
3. Set X variables.
4. Run screening analysis.



### Example 2
> **Summary**: Screens a data table for regression analysis by selecting predictor variables and performing a screening analysis.

<!-- Keywords: #ScreeningAnalysis, #Regression, #DataPreprocessing, #JMPScriptingLanguage, #PredictorVariables -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening(
	Y( :Taste ),
	X(
		:Cocoa, :Sugar, :Flour, :Butter,
		:Milk, :Eggs
	)
);
```

**Code Explanation**:

1. Open table.
2. Run screening analysis.
3. Set response variable.
4. Select predictor variables.
5. Perform analysis.



### Example 3
> **Summary**: Screens a data table using the Screening platform in JMP, selecting response and factor variables for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #Screening, #DataTableAnalysis, #FactorSelection, #ResponseVariable -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening( Y( :Y ), X( :X1, :X2, :X3 ) );
```

**Code Explanation**:

1. Open table.
2. Perform screening analysis.
3. Set response variable.
4. Set factor variables.



### Example 4
> **Summary**: Screens a data table for regression analysis by selecting the most relevant predictor variables and response variable, utilizing the Screening platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Screening, #RegressionAnalysis, #DataTableManipulation, #PredictorVariables -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening(
	Y( :Percent Reacted ),
	X(
		:Feed Rate, :Catalyst, :Stir Rate,
		:Temperature, :Concentration
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run screening analysis.
3. Specify response variable.
4. List predictor variables.



### Example 5
> **Summary**: Screens a data table for regression analysis using the Screening platform in JMP, defining response and factor variables before performing the screening analysis.

<!-- Keywords: #JMPScriptingLanguage, #Screening, #RegressionAnalysis, #DataTableManipulation, #JSLCode -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening(
	Y( :Number Popped, :Total Kernels ),
	X( :Brand, :Time, :Power )
);
```

**Code Explanation**:

1. Open data table.
2. Define response variables.
3. Define factor variables.
4. Perform screening analysis.



### Example 6
> **Summary**: Screens a data table for regression analysis, selecting the Odor variable as the response and including temp, gl ratio, and ht as factors.

<!-- Keywords: #Screening, #RegressionAnalysis, #JSLScripting, #DataPreprocessing, #JMP -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening(
	Y( :Odor ),
	X( :temp, :gl ratio, :ht )
);
```

**Code Explanation**:

1. Open data table.
2. Launch Screening platform.
3. Set Odor as response variable.
4. Include temp, gl ratio, ht as factors.
5. Perform screening analysis.



### Example 7
> **Summary**: Screens a data table using the Screening platform in JMP, selecting variables for analysis and specifying the response variable.

<!-- Keywords: #JMPScriptingLanguage, #Screening, #DataTableAnalysis, #VariableSelection, #RegressionAnalysis -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening(
	Y( :Y ),
	X(
		:X1, :X2, :X3, :X4, :X5, :X6, :X7,
		:X8, :X9, :X10, :X11, :X12, :X13,
		:X14, :X15, :X16, :X17, :X18
	)
);
```

**Code Explanation**:

1. Open table.
2. Run screening analysis.
3. Specify response variable.
4. List predictor variables.
5. Execute analysis.



### Example 8
> **Summary**: Screens a data table for regression analysis by selecting the Log Life (√ó100) response variable and multiple predictor variables, including Initial Structure, Bead Size, Pressure Treatment, Heat Treatment, Cooling Rate, Polish, Final Treatment, Œµ1, Œµ2, Œµ3, and Œµ4.

<!-- Keywords: #RegressionAnalysis, #Screening, #DataTable, #PredictorVariables, #ResponseVariable -->

**Code**:
```jsl
// Screening
// Open data table
dt = Open("data_table.jmp");
// Screening
Screening(
	Y( :"Log Life (√ó100)"n ),
	X(
		:Initial Structure, :Bead Size,
		:Pressure Treatment,
		:Heat Treatment, :Cooling Rate,
		:Polish, :Final Treatment, :Œµ1,
		:Œµ2, :Œµ3, :Œµ4
	)
);
```

**Code Explanation**:

1. Open table.
2. Launch screening analysis.
3. Set response variable.
4. Add predictor variables.



### Example 9
> **Summary**: Runs a screening analysis to visualize the relationship between response variable Percent Reacted and predictor variables Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration.

<!-- Keywords: #ScreeningAnalysis, #PredictorVariables, #ResponseVariable, #JMPScriptingLanguage, #DataVisualization -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Screening(
	Y( :Percent Reacted ),
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	SendToReport( Dispatch( {}, "Half Normal Plot", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open table.
2. Launch screening analysis.
3. Set response variable.
4. Add predictor variables.
5. Close half normal plot.



### Example 10
> **Summary**: Runs a screening analysis to identify the most relevant factors in predicting Percent Reacted, using Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration as independent variables.

<!-- Keywords: #ScreeningAnalysis, #PartialLeastSquares, #JMPScriptingLanguage, #DataScience, #Regression -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Screening( Y( :Percent Reacted ), X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ) );
```

**Code Explanation**:

1. Open data table.
2. Define dependent variable.
3. Define independent variables.
4. Perform screening analysis.



### Example 11
> **Summary**: Runs a screening analysis to visualize the relationship between response variable Percent Reacted and predictor variables Feed Rate, Catalyst, Stir Rate, Temperature, and Concentration.

<!-- Keywords: #Screening, #PartialLeastSquares, #RegressionAnalysis, #DataVisualization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Screening(
	Y( :Percent Reacted ),
	X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ),
	SendToReport( Dispatch( {}, "Half Normal Plot", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable.
3. Launch Screening platform.
4. Set response variable.
5. Add predictor variables.
6. Customize report settings.
7. Close Half Normal Plot.



### Example 12
> **Summary**: Runs a screening analysis to identify relevant predictor variables for the Weight response variable in the data table, utilizing the Screening platform and Log Capture button click.

<!-- Keywords: #ScreeningAnalysis, #LogCapture, #PredictorVariables, #DataTable, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Screening( Y( :Weight ), X( :Country, :Type, :Turning Circle ) );
Log Capture( (obj << report)[Button Box( 2 )] << click );
```

**Code Explanation**:

1. Open data table.
2. Perform screening analysis.
3. Set response variable.
4. Define predictor variables.
5. Log capture button click.



## Screening using Expr
> **Summary**: Runs the fitting process for a screening model by defining an expression with Screening and executing it on a data table.

<!-- Keywords: #JSLScriptingLanguage, #ScreeningModel, #DataTable, #FittingExpression, #ExprFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
fitTLSExpr = Expr(
	Screening( Y( :Percent Reacted ), X( :Feed Rate, :Catalyst, :Stir Rate, :Temperature, :Concentration ) )
);
fitTLSExpr;
```

**Code Explanation**:

1. Open data table.
2. Define fitting expression.
3. Execute fitting expression.



