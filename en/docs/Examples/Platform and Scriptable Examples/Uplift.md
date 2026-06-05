# Uplift

### Example 1
> **Summary**: Creates an uplift model to analyze the impact of a promotion on purchase behavior, utilizing predictor variables such as gender, age, hair color, U.S. region, and residence.

<!-- Keywords: #UpliftModel, #LogisticRegression, #PredictiveAnalytics, #MarketingAnalysis, #JMPScripting -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Uplift(
	Treatment( :Promotion ),
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Informative Missing( 1 ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 0.03 ), Inc( 0.025 ), Minor Ticks( 0 ), Add Ref Line( 0.025, "Solid", "Black", 1 )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create uplift object.
3. Define treatment variable.
4. Set response variable.
5. Specify predictor variables.
6. Handle missing data.
7. Customize report settings.
8. Set axis minimum value.
9. Set axis maximum value.
10. Set axis increment value.



### Example 2
> **Summary**: Fits a nominal logistic regression model using JMP's Uplift function, specifying treatment and response variables, predictor variables, validation variable, and initial splits.

<!-- Keywords: #JMPScriptingLanguage, #NominalLogisticRegression, #UpliftFunction, #DataAnalysis, #StatisticalModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Uplift(
	Treatment( :Promotion ),
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Validation( :Validation ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Uplift Graph( 1 ),
	Initial Splits( :Gender == {"Female"}, {:Hair Color == {"Brown", "Black", "Red"}, {}, {:Age >= 42}}, {:Residence == {"Rural"}} ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Format( "Custom", Formula( Round( Normal Density( value ), 2 ) ), 12 )} ),
		Dispatch( {"Uplift Graph"}, "2", ScaleBox,
			{Format( "Custom", Formula( Char( value * 100 ) || "/100" ), 12 ), Min( -0.01 ), Max( 0.0225 ), Inc( 0.005 ), Minor Ticks( 1 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Call Uplift function.
3. Define treatment variable.
4. Define response variable.
5. Specify predictor variables.
6. Define validation variable.
7. Set split history option.
8. Enable informative missing values.
9. Enable uplift graph.
10. Define initial splits.



### Example 3
> **Summary**: Fits a nominal logistic regression model to predict Purchase based on Gender, Age, Hair Color, U.S. Region, and Residence, with Promotion as the treatment variable.

<!-- Keywords: #NominalLogisticRegression, #UpliftModeling, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Uplift(
	Treatment( :Promotion ),
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Validation( :Validation ),
	Leaf Report( 1 ),
	Show Fit Details( 1 ),
	Informative Missing( 1 ),
	Column Contributions( 1 ),
	Initial Splits( :Age >= 42, {:Hair Color == {"Black", "Red", "Brown"}, {:Gender == {"Female"}}}, {:Gender == {"Female"}} ),
	SendToReport(
		Dispatch( {}, "Uplift Model for Purchase", OutlineBox,
			{Set Title( "Leaf Report, Column Contributions, Show Fit Details, Do not points" )}
		),
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 0.03 ), Inc( 0.025 ), Minor Ticks( 0 )} )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Run Uplift analysis.
3. Set Promotion as treatment.
4. Set Purchase as outcome.
5. Include Gender, Age, Hair Color, U.S. Region, Residence as predictors.
6. Use Validation column for validation.
7. Enable leaf report.
8. Show fit details.
9. Handle informative missing data.
10. Display column contributions.



## If 
> **Summary**: Executes Uplift analysis with varying treatment and validation settings, iterating four times to generate distinct results.

<!-- Keywords: #JSLScripting, #UpliftAnalysis, #DataTableOperations, #WindowManagement, #ConditionalLoop -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	For( i = 1, i <= 4, i++,
		dt = Open("data_table.jmp");
		win lst1 = Associative Array( Window() << get window title );
		Match( i,
			1, obj = dt << Uplift( Y( :Purchase ), X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ), Treatment( :Promotion ) ),
			2,
				obj = dt << Uplift(
					Y( :Purchase ),
					X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
					Treatment( :Promotion ),
					Split Best( 1 )
				),
			3,
				obj = dt << Uplift(
					Y( :Purchase ),
					X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
					Treatment( :Promotion ),
					Validation( :Validation ), 
				),
			4,
				obj = dt << Uplift(
					Y( :Purchase ),
					X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
					Treatment( :Promotion ),
					Validation( :Validation ),
					Split Best( 1 )
				)
		);
		win lst2 = Associative Array( Window() << get window title );
		win lst2 << Remove( win lst1 );
		aftlst = win lst2 << get keys;
		Close( dt, no save );
	)
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Loop 4 times.
3. Open data table;
4. Get current window titles.
5. Run Uplift analysis based on loop index.
6. Get new window titles.
7. Remove old window titles from new list.
8. Get remaining window titles.
9. Close data table without saving.
10. Repeat loop.



## Uplift using Associative Array
> **Summary**: Executes Uplift analysis with varying treatment and validation settings, generating a series of windows for data exploration.

<!-- Keywords: #JSLScripting, #UpliftAnalysis, #DataExploration, #WindowManagement, #AssociativeArrays -->

**Code**:
```jsl
dt = Open("data_table.jmp");
win lst1 = Associative Array( Window() << get window title );
i = 1;
Match( i,
	1, obj = dt << Uplift( Y( :Purchase ), X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ), Treatment( :Promotion ) ),
	2,
		obj = dt << Uplift(
			Y( :Purchase ),
			X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
			Treatment( :Promotion ),
			Split Best( 1 )
		),
	3,
		obj = dt << Uplift(
			Y( :Purchase ),
			X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
			Treatment( :Promotion ),
			Validation( :Validation ), 
		),
	4,
		obj = dt << Uplift(
			Y( :Purchase ),
			X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
			Treatment( :Promotion ),
			Validation( :Validation ),
			Split Best( 1 )
		)
);
win lst2 = Associative Array( Window() << get window title );
win lst2 << Remove( win lst1 );
aftlst = win lst2 << get keys;
```

**Code Explanation**:

1. Open data table.
2. Create associative array of windows.
3. Initialize counter variable.
4. Match counter value to execute Uplift analysis.
5. Assign Uplift object to variable.
6. Create another associative array of windows.
7. Remove initial windows from new array.
8. Get remaining window keys.
9. Store result in variable.



