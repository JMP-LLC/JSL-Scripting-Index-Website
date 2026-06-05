# Split

## Split using Data Table
### Example 1
> **Summary**: Opens a data table, splits the data by Drug Type and Measurement, groups by Subject, and performs no further analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #SplitData, #GroupBy, #NoFurtherAnalysis -->

**Code**:
```jsl
// Split
// Open data table
dt = Open("data_table.jmp");
// Split
Data Table("data_table") <<
Split(
	Split By( :Drug Type ),
	Split( :Measurement ),
	Group( :Subject )
);
```

**Code Explanation**:

1. Open table.
2. Split data by Drug Type.
3. Split Measurement.
4. Group by Subject.



### Example 2
> **Summary**: Runs data splitting and grouping operations on a data table, utilizing the Split By transformation to separate data by trial^3 and yield^3 transformations, and then sorting the resulting data by value order.

<!-- Keywords: #JSLScripting, #DataSplitting, #Grouping, #Sorting, #DataTransformation -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table") << Split(
	Split By( Transform Column( "trial^3", Formula( :trial ^ 3 ) ) ),
	Split( Transform Column( "yield^3", Formula( :yield ^ 3 ) ) ),
	Group( Transform Column( "Last[batch]", Character, Formula( Word( -1, :batch ) ) ) ),
	Remaining Columns( Drop All ),
	Sort by Value Order
);
```

**Code Explanation**:

1. Open data_table data
2. Access data_table data table.
3. Split data table by trial^3 transformation.
4. Split data table by yield^3 transformation.
5. Group data by last batch character.
6. Drop all remaining columns.
7. Sort data by value order.



## Split using Uplift
### Example 1
> **Summary**: Fits a nominal logistic regression model using the Uplift function in JMP, specifying predictor variables and treatment variable while handling informative missing data.

<!-- Keywords: #JMPScriptingLanguage, #UpliftFunction, #LogisticRegression, #NominalData, #DataAnalysis -->

**Code**:
```jsl
// Initial Uplift Report
// Open data table
dt = Open("data_table.jmp");
// Initial Uplift Report
Uplift(
	Y( :Purchase ),
	X(
		:Gender, :Age, :Hair Color,
		:U.S. Region, :Residence
	),
	Validation( :Validation ),
	Minimum Size Split( 63 ),
	Treatment( :Promotion ),
	Split History( 1 ),
	Informative Missing( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Call Uplift function.
3. Set response variable.
4. Define predictor variables.
5. Specify validation column.
6. Set minimum split size.
7. Identify treatment variable.
8. Enable split history.
9. Handle informative missing data.



### Example 2
> **Summary**: Fits a nominal logistic regression model to predict the probability of a purchase based on demographic and geographic variables, utilizing an uplift graph for visualization.

<!-- Keywords: #NominalLogisticRegression, #UpliftModeling, #JMPScriptingLanguage, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
// Uplift
// Open data table
dt = Open("data_table.jmp");
// Uplift
Uplift(
	Y( :Purchase ),
	X(
		:Gender, :Age, :Hair Color,
		:U.S. Region, :Residence
	),
	Validation( :Validation ),
	Minimum Size Split( 63 ),
	Treatment( :Promotion ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Uplift Graph( 1 ),
	Split Best( 4 )
);
```

**Code Explanation**:

1. Open table.
2. Define response variable.
3. Define predictor variables.
4. Specify validation column.
5. Set minimum split size.
6. Identify treatment variable.
7. Enable split history.
8. Handle informative missing data.
9. Generate uplift graph.
10. Use best split method.



### Example 3
> **Summary**: Fits a nominal logistic regression model using Uplift analysis to predict the effect of promotion on purchase behavior, with interactive features for customizing report scales and frame sizes.

<!-- Keywords: #UpliftAnalysis, #NominalLogisticRegression, #JMPScriptingLanguage, #DataVisualization, #PredictiveModeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Show Points( 1 ),
	Validation( :Validation ),
	Minimum Size Split( 63 ),
	Treatment( :Promotion ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Uplift Graph( 1 ),
	Initial Splits( :Age >= 42, {:Hair Color == {"Black", "Red", "Brown"}, {:Gender == {"Female"}}}, {:Gender == {"Female"}} ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 0.03 ), Inc( 0.025 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, FrameBox, {Frame Size( 808, 255 )} ),
		Dispatch( {}, FrameBox( 2 ), {Frame Size( 808, 182 )} ),
		Dispatch( {"Split History"}, "1", ScaleBox, {Min( 0 ), Max( 14 ), Inc( 2 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run Uplift analysis.
3. Set response variable.
4. Define predictor variables.
5. Display points.
6. Use validation column.
7. Set minimum split size.
8. Identify treatment group.
9. Include split history.
10. Handle missing values informatively.
11. Generate uplift graph.
12. Specify initial splits.
13. Customize report scale.
14. Adjust frame size.
15. Adjust second frame size.
16. Customize split history scale.



### Example 4
> **Summary**: Fits a nominal logistic regression model using Uplift analysis to predict the likelihood of a customer purchasing a product based on demographic factors.

<!-- Keywords: #JSLScriptingLanguage, #UpliftAnalysis, #NominalLogisticRegression, #PredictiveModeling, #DataScience -->

**Code**:
```jsl
dt under test = Open("data_table.jmp");
obj = Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Show Points( 1 ),
	Validation( :Validation ),
	Minimum Size Split( 63 ),
	Treatment( :Promotion ),
	Split History( 1 ),
	Informative Missing( 1 ),
	Uplift Graph( 1 ),
	Initial Splits( :Age >= 42, {:Hair Color == {"Black", "Red", "Brown"}, {:Gender == {"Female"}}}, {:Gender == {"Female"}} ),
	SendToReport(
		Dispatch( {}, "2", ScaleBox, {Min( 0 ), Max( 0.03 ), Inc( 0.025 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )} ),
		Dispatch( {}, FrameBox, {Frame Size( 808, 255 )} ),
		Dispatch( {}, FrameBox( 2 ), {Frame Size( 808, 182 )} ),
		Dispatch( {"Split History"}, "1", ScaleBox, {Min( 0 ), Max( 14 ), Inc( 2 ), Minor Ticks( 0 ), Rotated Labels( "Horizontal" )} )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Run Uplift analysis.
3. Specify response variable.
4. Define predictor variables.
5. Display points on graph.
6. Use validation column.
7. Set minimum split size.
8. Identify treatment group.
9. Include split history.
10. Handle missing data informatively.



## Split using Run Script
### Example 1
> **Summary**: Creates a bubble plot by region, with the Midwest region split for analysis.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #PathDiagram, #SEMAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot by Region" );
bp << Split( "Midwest" );
```

**Code Explanation**:

1. Open data table.
2. Run bubble plot script.
3. Split plot by Midwest.



### Example 2
> **Summary**: Creates a bubble plot by region, splitting data into Midwest and South regions using the Run Script function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataSplitting, #RunScript, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot by Region" );
bp << Split( "Midwest" );
bp << Split( "South" );
```

**Code Explanation**:

1. Open table.
2. Run bubble plot script.
3. Split by Midwest.
4. Split by South.



### Example 3
> **Summary**: Creates a bubble plot by region, splitting and combining data for Midwest and South regions.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataVisualization, #RegionAnalysis, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot by Region" );
bp << Split( "Midwest" );
bp << Split( "South" );
bp << Combine( "Midwest" );
```

**Code Explanation**:

1. Open table.
2. Run script for bubble plot.
3. Split bubble plot by Midwest.
4. Split bubble plot by South.
5. Combine bubble plot for Midwest.



## Split using Stack
> **Summary**: Runs data stacking and splitting operations to transform a raw data table into a stacked and split output table, utilizing the ID column for stacking and sex and ID columns for splitting.

<!-- Keywords: #JSLScriptingLanguage, #DataStacking, #DataSplitting, #IDColumn, #SexColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt1 = dt << Stack( Stack( :height, :weight ), id( "ID" ), Stacked( "Y" ), Output table name( "stacked" ) );
dt2 = dt1 << Split( split( y, sex ), split by( ID ), output table name( "Split" ) );
```

**Code Explanation**:

1. Open data table;
2. Stack height and weight.
3. Use ID for stacking.
4. Name stacked column "Y".
5. Output table named "stacked".
6. Split stacked data.
7. Split by sex.
8. Split by ID.
9. Output table named "Split".



### Example 1
> **Summary**: Creates a child table by splitting a data table based on age, sex, and including specific columns.

<!-- Keywords: #JSLScriptingLanguage, #DataSplitting, #TableManipulation, #ColumnSelection, #DataTransformation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtchild = dt << Split( Split By( :age ), Split( :sex, :height, :weight ), Remaining Columns( Drop All ) );
```

**Code Explanation**:

1. Open data table.
2. Create child table from split.
3. Split by age column.
4. Further split by sex column.
5. Include height and weight columns.
6. Drop all remaining columns.



### Example 2
> **Summary**: Runs data splitting and grouping operations to analyze measurements by drug type, measurement, and subject, while setting value ordering for drug types.

<!-- Keywords: #JSLScripting, #DataSplitting, #Grouping, #ValueOrdering, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
splitDt = dt << Split( Split By( :Drug Type ), Split( :Measurement ), Group( :Subject ), Sort by Value Order );
colnames = splitDt << get column names;
Close( splitDt, no save );
dt:drug type << Set Property( "Value Ordering", {"c", "b", "a"} );
splitDt = dt << Split( Split By( :Drug Type ), Split( :Measurement ), Group( :Subject ), Sort by Value Order );
colnames = splitDt << get column names;
```

**Code Explanation**:

1. Open data table.
2. Split data by drug type.
3. Split data by measurement.
4. Group data by subject.
5. Sort by value order.
6. Get column names.
7. Close split table without saving.
8. Set value ordering for drug type.
9. Split data again by drug type.
10. Split data again by measurement.
11. Group data again by subject.
12. Sort by value order again.
13. Get column names again.



### Example 3
> **Summary**: Runs the splitting and subseting of a data table based on state and year, then saves the result to a temporary file.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #SplitData, #SubsetData, #FileOutput -->

**Code**:
```jsl
dt = Open("data_table.jmp");
splitDt = dt << Split( Split By( :State ), Split( :Name( "1980" ) ), Output Table( "Test 1" ), Remaining Columns( Drop All ) );
subDt = splitDt << Subset( All rows, Selected columns only( 0 ) );
splitDt << Save( "$TEMP/test1.jmp" );
```

**Code Explanation**:

1. Open data table.
2. Split by state.
3. Split by 1980 column.
4. Name output table "Test 1".
5. Drop all remaining columns.
6. Create subset with selected columns.
7. Save subset to temporary file.



## Split using Log Capture
> **Summary**: Runs data splitting and outputting a table named 'Yield column split by Trial Column' based on trial and oil amount, with the yield column also split.

<!-- Keywords: #JSLScriptingLanguage, #DataSplitting, #LogCapture, #OutputTable, #JMPScript -->

**Code**:
```jsl
Open("data_table.jmp");
logString = Log Capture(
	dtSplit = dt << Split( Split By( :trial, :oil amt ), Split( :yield ), Output Table( "Yield column split by Trial Column" ) )
);
```

**Code Explanation**:

1. Open data_table data
2. Capture log output.
3. Split data by trial and oil amt.
4. Split yield column.
5. Output split table named "Yield column split by Trial Column".



## Split using Set Property
### Example 1
> **Summary**: Runs data splitting and ordering operations to create a new table with customized columns, utilizing the Split By and Set Property functions in JMP Scripting Language.

<!-- Keywords: #JMPScriptingLanguage, #DataSplitting, #ColumnOrdering, #TableCreation, #Customization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:drug type << Set Property( "Value Ordering", {"c", "b", "a"} );
splitDt = dt << Split( Split By( :Drug Type ), Split( :Measurement ), Group( :Subject ) );
colnames = splitDt << get column names;
Close( dt, no save );
Close( splitDt, no save );
dt = New Table( "Ordering",
	Add Rows( 21 ),
	New Column( "Week Day",
		Character,
		Nominal,
		Set Property( "Value Ordering", {"Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"} ),
		Set Values(
			{"Monday", "Monday", "Monday", "Tuesday", "Tuesday", "Tuesday", "Wednesday", "Wednesday", "Wednesday", "Thursday", "Thursday",
			"Thursday", "Friday", "Friday", "Friday", "Saturday", "Saturday", "Saturday", "Sunday", "Sunday", "Sunday"}
		)
	),
	New Column( "Data",
		Numeric,
		Continuous,
		Format( "Best", 12 ),
		Set Values( [111, 222, 333, 444, 555, 666, 777, 888, 999, 111, 222, 333, 444, 555, 666, 777, 888, 999, 111, 222, 333] )
	)
);
splitDt = dt << Split( Split By( :Week Day ), Split( :Data ), Output Table( "Test" ), Sort by Value Order );
colnames = splitDt << Get Column Names;
```

**Code Explanation**:

1. Open data table.
2. Set value ordering for drug type.
3. Split data by drug type and measurement.
4. Get column names from split table.
5. Close original data table without saving.
6. Close split data table without saving.
7. Create new table "Ordering".
8. Add rows to new table.
9. Add "Week Day" column with value ordering.
10. Add "Data" column with numeric values.



### Example 2
> **Summary**: Prepares data by opening a table, setting drug type ordering, splitting data by drug type and measurement, grouping by subject, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataPreparation, #TableManipulation, #ColumnManagement, #GraphBuilder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:drug type << Set Property( "Value Ordering", {"c", "b", "a"} );
splitDt = dt << Split( Split By( :Drug Type ), Split( :Measurement ), Group( :Subject ) );
colnames = splitDt << get column names;
```

**Code Explanation**:

1. Open table.
2. Set drug type ordering.
3. Split data by drug type.
4. Split data by measurement.
5. Group data by subject.
6. Retrieve column names.



## Split using Expr
### Example 1
> **Summary**: Process of splitting a data table by sex, age, and country, allowing users to select columns for grouping and aggregation.

<!-- Keywords: #JSLScriptingLanguage, #DataSplitting, #ColumnSelection, #InteractiveWindow, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
split = Expr(
	dt << Split( Split By( :sex ), Split( :age ), Group( ::b << Get Items, :country ) )
);
New Window( "Pick 'Type'",
	Text Box( "Select the Type column, click >>, and then click OK." ),
	H List Box(
		::a = Col List Box( all ),
		Button Box( ">>", ::b << Append( ::a << GetSelected ) ),
		::b = Col List Box()
	),
	Button Box( "OK", split )
);
::a << close window;
Delete Symbols( ::a, ::b );
```

**Code Explanation**:

1. Open data table;
2. Define `split` expression for splitting data.
3. Create new window titled "Pick 'Type'".
4. Display instruction text box.
5. Initialize horizontal list box.
6. Add source column list box.
7. Add ">>" button to move selected columns.
8. Add destination column list box.
9. Add "OK" button to execute split operation.
10. Close source column list box.
11. Delete symbols `::a` and `::b`.



### Example 2
> **Summary**: Runs the splitting of a data table by sex, age, and country, allowing users to select the Type column and execute the split operation.

<!-- Keywords: #JSLScriptingLanguage, #DataSplitting, #InteractiveWindow, #ColumnSelection, #JMP -->

**Code**:
```jsl
Open("data_table.jmp");
split = Expr(
	dt << Split( Split By( :sex ), Split( :age ), Group( ::b << Get Items, :country ) )
);
New Window( "Pick 'Type'",
	Text Box( "Select the Type column, click >>, and then click OK." ),
	H List Box( ::a = Col List Box( all ), Button Box( ">>", ::b << Append( ::a << GetSelected ) ), ::b = Col List Box() ),
	Button Box( "OK", split )
);
```

**Code Explanation**:

1. Open data table;
2. Define `split` expression.
3. Create new window titled "Pick 'Type'".
4. Add text box instruction.
5. Create horizontal list box.
6. Add "Type" column list box.
7. Add ">>" button.
8. Add second column list box.
9. Add "OK" button.
10. Execute `split` on button click.



## Split using If
### Example 1
> **Summary**: Runs uplift analysis and prediction formula generation for a given dataset, utilizing the JMP Pro platform to extract probabilities, most likely purchases, and difference formulas.

<!-- Keywords: #JMPPro, #UpliftAnalysis, #PredictionFormula, #DataScience, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Uplift(
		Y( :Purchase ),
		X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
		Treatment( :Promotion ),
		Split Best( 1 )
	);
	obj << Save Prediction Formula( 1 );
	prob1 = (dt:Name( "Prob(Purchase==Yes)" ) << get values) || (dt:Name( "Prob(Purchase==No)" ) << get values);
	pred1 = dt:Most Likely Purchase << get values( 1 );
	obj << Save Difference Formula( 1 );
	diff1 = dt:Name( "Difference Prob(Purchase==Yes)" ) << get values;
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script( 1 );
	prob2 = (dt:Name( "Prob(Purchase==Yes)" ) << get values) || (dt:Name( "Prob(Purchase==No)" ) << get values);
	pred2 = dt:Most Likely Purchase << get values( 1 );
	depot2 = obj << Publish Difference Formula( 1 );
	depot2 << Run Script( 1 );
	diff2 = dt:Name( "Difference Prob(Purchase==Yes)" ) << get values;
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	obj = dt << Uplift( Y( :Y ), X( :F, :Ct, :A, :Cn ), Minimum Size Split( 2 ), Treatment( :T ), Split Best( 2 ) );
	obj << Save Prediction Formula( 1 );
	pred1 = dt:Y Predictor << get values( 1 );
	obj << Save Difference Formula( 1 );
	diff1 = dt:Name( "Y Difference Formula" ) << get values;
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot3 = obj << Publish Prediction Formula( 1 );
	depot3 << Run Script( 1 );
	pred2 = dt:Y Predictor << get values( 1 );
	depot4 = obj << Publish Difference Formula( 1 );
	depot4 << Run Script( 1 );
	diff2 = dt:Name( "Y Difference Formula" ) << get values;
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP is Pro version.
2. Open data table;
3. Count initial columns.
4. Perform uplift analysis.
5. Save prediction formula.
6. Extract probabilities.
7. Extract most likely purchase.
8. Save difference formula.
9. Extract difference probabilities.
10. Delete new columns.
11. Publish prediction formula.
12. Run published script.
13. Extract updated probabilities.
14. Extract updated most likely purchase.
15. Publish difference formula.
16. Run published script.
17. Extract updated difference probabilities.
18. Close dataset without saving.
19. Close Formula Depot window.
20. Repeat for Reactor.jmp dataset.



### Example 2
> **Summary**: Runs Uplift analysis with predictors F, Ct, A, Cn and treatment variable T to generate reports and extract column uplift contributions matrices.

<!-- Keywords: #JSLScriptingLanguage, #UpliftAnalysis, #PredictiveModeling, #DataTableManipulation, #ReportGeneration -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = dt << Uplift(
		Y( :Y ),
		X( :F, :Ct, :A, :Cn ),
		Treatment( :T ),
		Minimum Size Split( 2 ),
		Informative Missing( 1 ),
		Split Best( 1 )
	);
	rpt1 = Report( obj1 );
	obj1 << Column Contributions( 1 );
	cc1 = rpt1[Outline Box( "Column Uplift Contributions" )][Table Box( 1 )] << get as matrix;
	root lw1 = Matrix( rpt1[Table Box( 3 )][Number Col Box( 3 )] << get );
	leaf1 lw1 = Matrix( rpt1[Outline Box( 2 )][Number Col Box( 1 )] << get );
	obj2 = dt << Uplift(
		Y( :Y ),
		X( :F, :Ct, :A, :Cn ),
		Treatment( :T ),
		Minimum Size Split( 2 ),
		Informative Missing( 1 ),
		Initial Splits( :Ct < 1 ), 
	);
	rpt2 = Report( obj2 );
	obj2 << Column Contributions( 1 );
	cc2 = rpt2[Outline Box( "Column Uplift Contributions" )][Table Box( 1 )] << get as matrix;
	root lw2 = Matrix( rpt2[Table Box( 3 )][Number Col Box( 3 )] << get );
	leaf1 lw2 = Matrix( rpt2[Outline Box( 2 )][Number Col Box( 1 )] << get );
	obj1 << Prune Worst( 1 );
	obj2 << Prune Worst( 1 );
	rmse1 = Matrix( rpt1[Table Box( 1 )][Number Col Box( 2 )] << get );
	rmse2 = Matrix( rpt2[Table Box( 1 )][Number Col Box( 2 )] << get );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Perform Uplift analysis on Y with predictors F, Ct, A, Cn.
4. Set treatment variable T.
5. Define minimum size split as 2.
6. Enable informative missing data.
7. Use split best method.
8. Generate report from Uplift analysis.
9. Enable column contributions.
10. Extract column uplift contributions matrix.
11. Retrieve root lift weights.
12. Retrieve leaf lift weights.
13. Repeat Uplift analysis with initial split on Ct < 1.
14. Generate second report.
15. Enable column contributions again.
16. Extract second column uplift contributions matrix.
17. Retrieve second root lift weights.
18. Retrieve second leaf lift weights.
19. Prune worst contribution from first analysis.
20. Prune worst contribution from second analysis.
21. Extract RMSE from first analysis.
22. Extract RMSE from second analysis.
23. Close data table without saving.



### Example 3
> **Summary**: Executes two Uplift analyses with customized settings, generating reports and extracting column contributions and formats.

<!-- Keywords: #JSLScripting, #UpliftAnalysis, #DataTableManagement, #ReportGeneration, #ColumnContributions -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj1 = Uplift(
		Y( :Purchase ),
		X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
		Validation( :Validation ),
		Minimum Size Split( 63 ),
		Treatment( :Promotion ),
		Informative Missing( 1 ),
		Split Best( 2 )
	);
	obj1 << Column Contributions( 1 );
	rpt1 = Report( obj1 );
	contrib1 = rpt1[Outline Box( "Column Uplift Contributions" )][Table Box( 1 )] << get as matrix;
	fmt1 = rpt1[Outline Box( "Column Uplift Contributions" )][Number Col Box( 2 )] << get format;
	obj2 = Uplift(
		Y( :Purchase ),
		X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
		Validation( :Validation ),
		Minimum Size Split( 63 ),
		Treatment( :Promotion ),
		Informative Missing( 1 ),
		Column Contributions( 1 )
	);
	obj2 << Split Best( 2 );
	rpt2 = Report( obj2 );
	contrib2 = rpt2[Outline Box( "Column Uplift Contributions" )][Table Box( 1 )] << get as matrix;
	fmt2 = rpt2[Outline Box( "Column Uplift Contributions" )][Number Col Box( 2 )] << get format;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP version is Pro.
2. Open data table;
3. Run first Uplift analysis.
4. Set column contributions.
5. Generate first report.
6. Extract column contributions from first report.
7. Extract format from first report.
8. Run second Uplift analysis.
9. Set split best to 2.
10. Close dataset without saving.



### Example 4
> **Summary**: Creates and analyzes an uplift report in JMP Pro, utilizing data table manipulation and prediction formula saving.

<!-- Keywords: #JMPPro, #UpliftAnalysis, #DataManipulation, #PredictionFormula, #Scripting -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Run Script( "Initial Uplift Report" );
	obj << Save Prediction Formula;
	prop1 = Char( dt:Name( "Prob(Purchase==Yes)" ) << get property( Response Probability ) );
	prop2 = Char( dt:Name( "Prob(Purchase==No)" ) << get property( Response Probability ) );
	obj2 = dt << Uplift(
		Y( :Age ),
		X( :Gender, :Hair Color, :U.S. Region, :Residence ),
		Validation( :Validation ),
		Minimum Size Split( 63 ),
		Treatment( :Promotion ),
		Split Best( 2 )
	);
	obj2 << Save Prediction Formula;
	prop3 = Char( dt:Age Predictor << get property( Predicting ) );
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check for JMP Pro version.
2. Open data_table data
3. Run "Initial Uplift Report" script.
4. Save prediction formula from report.
5. Get "Prob(Purchase==Yes)" property.
6. Get "Prob(Purchase==No)" property.
7. Create uplift analysis object.
8. Save prediction formula from uplift analysis.
9. Get "Age Predictor" property.
10. Close data table without saving.



### Example 5
> **Summary**: Runs the uplift analysis process by opening a data table, performing an uplift model, and generating a report with extracted text.

<!-- Keywords: #JSLScripting, #UpliftAnalysis, #DataTableManagement, #ReportGeneration, #TextExtraction -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ),
	dt = Open("data_table.jmp");
	obj = dt << Uplift( Y( :Y ), X( :F, :Ct, :A, :Cn ), Treatment( :T ), Informative Missing( 1 ), Minimum Size Split( 5 ) );
	obj << Save Script to Report;
	rpt = Report( obj );
	saved1 = rpt[Outline Box( "Uplift Model for Y" )][Text Box( 1 )] << get text;
	Close( dt, no save );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Perform Uplift analysis.
4. Save script to report.
5. Generate report from object.
6. Extract text from report.
7. Close dataset without saving.



