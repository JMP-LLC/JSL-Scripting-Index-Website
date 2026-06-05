# Item Analysis

### Example 1
> **Summary**: Performs item analysis on a data table, utilizing the Logistic 2PL model and generating dual plots with customized scales.

<!-- Keywords: #JMPScriptingLanguage, #ItemAnalysis, #LogisticRegression, #DataVisualization, #Customization -->

**Code**:
```jsl
// Item Analysis
// Open data table
dt = Open("data_table.jmp");
// Item Analysis
Item Analysis(
	Y(
		:Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7,
		:Q8, :Q9, :Q10, :Q11, :Q12, :Q13,
		:Q14
	),
	Model( "Logistic 2PL" ),
	Number of Plots Across( 2 ),
	SendToReport(
		Dispatch( {"Dual Plot"}, "1",
			ScaleBox,
			{Scale( "Linear" ),
			Format( "Fixed Dec", 1 ),
			Min( 0 ), Max( 2 ),
			Inc( 0.5 ), Minor Ticks( 1 ),
			Add Ref Line(
				1, "Dotted", "Black"
			)}
		),
		Dispatch( {"Dual Plot"}, "2",
			ScaleBox,
			{Scale( "Linear" ),
			Format( "Best" ), Min( -4 ),
			Max( 4 ), Inc( 1 ),
			Minor Ticks( 7 )}
		)
	)
);
```

**Code Explanation**:

1. Open table.
2. Perform item analysis.
3. Specify response variables.
4. Choose logistic 2PL model.
5. Set plots across.
6. Customize first plot scale.
7. Set scale type to linear.
8. Format numbers to fixed decimal.
9. Define scale range and increment.
10. Add reference line at 1.



### Example 2
> **Summary**: Runs item analysis using a logistic 2PL model, generating dual plots with customized scales and formats.

<!-- Keywords: #ItemAnalysis, #LogisticRegression, #DualPlot, #Customization, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Item Analysis(
	Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9, :Q10, :Q11, :Q12, :Q13, :Q14 ),
	Model( "Logistic 2PL" ),
	Number of Plots Across( 2 ),
	SendToReport(
		Dispatch( {"Dual Plot"}, "1", ScaleBox, {Format( "Custom", Formula( Choose( 2 * value + 1, 0, 0.5, 1, 1.5, 2 ) ), 12 )} ),
		Dispatch( {"Dual Plot"}, "2", ScaleBox, {Format( "Custom", Formula( Choose( 5 + value, -4, -3, -2, -1, 0, 1, 2, 3, 4 ) ), 9 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Perform item analysis.
3. Specify response variables.
4. Use logistic 2PL model.
5. Set plots across two columns.
6. Customize first plot scale.
7. Apply custom format to first plot.
8. Define custom formula for first plot.
9. Customize second plot scale.
10. Apply custom format to second plot.



### Example 3
> **Summary**: Creates an item analysis object with specified response variables and sends it to a report for parameter estimation, utilizing JMP's Item Analysis platform.

<!-- Keywords: #JMP, #ItemAnalysis, #ParameterEstimation, #DataTable, #ReportGeneration -->

**Code**:
```jsl
Names Default To Here( 1 );
dt = Open("data_table.jmp");
obj = Item Analysis(
	Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ),
	SendToReport( Dispatch( {}, "Parameter Estimates", OutlineBox, {Close( 1 )} ) )
);
```

**Code Explanation**:

1. Set default name scope.
2. Open data table.
3. Create item analysis object.
4. Specify response variables.
5. Close parameter estimates outline.



### Example 4
> **Summary**: Runs item analysis using the Logistic 2PL model and sends the report to output, closing the characteristic curves section.

<!-- Keywords: #ItemAnalysis, #LogisticRegression, #JSLScripting, #DataReporting, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
Item Analysis(
	Y( :Q1, :Q2, :Q3, :Q4 ),
	Model( "Logistic 2PL" ),
	SendToReport( Dispatch( {}, "Characteristic Curves", OutlineBox, {Close( 0 )} ) )
);
```

**Code Explanation**:

1. Open data table;
2. Perform item analysis.
3. Specify response variables.
4. Choose logistic 2PL model.
5. Send report to output.
6. Close characteristic curves section.



### Example 5
> **Summary**: Runs item analysis on multiple questions using a logistic 2PL model, generating dual plots with customized scales across two columns.

<!-- Keywords: #JMPScriptingLanguage, #ItemAnalysis, #LogisticRegression, #DualPlot, #Customization -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Item Analysis(
	Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9, :Q10, :Q11, :Q12, :Q13, :Q14 ),
	Model( "Logistic 2PL" ),
	Number of Plots Across( 2 ),
	SendToReport(
		Dispatch( {"Dual Plot"}, "1", ScaleBox,
			{Scale( Linear ), Format( Fixed Dec, 1 ), Min( 0 ), Max( 2 ), Inc( 0.5 ), Minor Ticks( 1 ), Add Ref Line( 1, Dotted, Black )}
		),
		Dispatch( {"Dual Plot"}, "2", ScaleBox, {Scale( Linear ), Format( Best ), Min( -4 ), Max( 4 ), Inc( 1 ), Minor Ticks( 7 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run item analysis on multiple questions.
3. Use logistic 2PL model.
4. Arrange plots across two columns.
5. Customize first dual plot scale.
6. Set scale to linear.
7. Format numbers to fixed decimal.
8. Set minimum value to 0.
9. Set maximum value to 2.
10. Customize second dual plot scale.



### Example 6
> **Summary**: Creates an item analysis object for variables Q1 to Q9, utilizing the Item Analysis platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ItemAnalysis, #DataTable, #Automation, #VariableSelection -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Item Analysis( Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9 ) );
```

**Code Explanation**:

1. Open data table;
2. Create item analysis object.
3. Analyze variables Q1 to Q9.



### Example 7
> **Summary**: Runs item analysis using the Logistic 2PL model, generates reports and journals, and attempts to redo analysis with updated settings.

<!-- Keywords: #JMPScriptingLanguage, #ItemAnalysis, #LogisticRegression, #ReportGeneration, #DataRedo -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Item Analysis(
	Y( :Q1, :Q2, :Q3, :Q4, :Q5, :Q6, :Q7, :Q8, :Q9, :Q10, :Q11, :Q12, :Q13, :Q14 ),
	Model( "Logistic 2PL" ),
	Number of Plots Across( 2 )
);
rpt1 = obj << report;
expr1 = rpt1 << get journal;
:Q1 << Set Property( "Missing Value Codes", 1 );
Try(
	obj2 = obj << Redo Analysis;
	rpt2 = obj2 << Report;
	expr2 = rpt2 << Get Journal;
	ans = Equal( expr1, expr2 );
, 
);
```

**Code Explanation**:

1. Open data table.
2. Perform item analysis.
3. Set model to Logistic 2PL.
4. Configure plots layout.
5. Generate initial report.
6. Extract initial journal.
7. Set missing value code for Q1.
8. Attempt to redo analysis.
9. Generate new report.
10. Extract new journal.



