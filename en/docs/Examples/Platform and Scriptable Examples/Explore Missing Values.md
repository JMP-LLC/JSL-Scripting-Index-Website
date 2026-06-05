# Explore Missing Values

## Explore Missing Values using Data Table
> **Summary**: Opens a data table, splits it into series, and creates new table properties for missing value exploration, multivariate analysis, and process screening. It also performs various configurations and visualizations.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #MissingValueExploration, #MultivariateAnalysis, #ProcessScreening -->

**Code**:
```jsl
// Split into Series
// Open data table
dt = Open("data_table.jmp");
// Split into Series
split dt =
Data Table("data_table") <<
Split(
	Split By( :Series ),
	Split( :Price ),
	Group( :Date ),
	Output Table(
		"data_table Split by Series"
	),
	Remaining Columns( Drop All )
);
split dt <<
NewTableProperty(
	"Explore Missing Values",
	Explore Missing Values(
		Y(
			:Apples, :Bananas, :Bread,
			:Chicken, :Coffee, :Eggs,
			:Electricity, :Fuel oil #2,
			:"Gasoline, all"n,
			:"Gasoline, unleaded"n,
			:Ground chuck, :Lettuce,
			:Milk, :Natural Gas,
			:Orange juice, :Oranges,
			:Tomatoes
		),
		Missing Value Report,
		SendToReport(
			Dispatch( {},
				"Missing Columns",
				OutlineBox,
				{SetHorizontal( 1 )}
			)
		)
	)
);
split dt <<
NewTableProperty( "Multivariate",
	Multivariate(
		Y(
			:Apples, :Bananas, :Bread,
			:Chicken, :Coffee, :Eggs,
			:Electricity
		),
		Estimation Method( "REML" ),
		Matrix Format( "Square" ),
		Scatterplot Matrix(
			Density Ellipses( 1 ),
			Shaded Ellipses( 0 ),
			Ellipse Color( 3 )
		)
	)
);
split dt <<
NewTableProperty( "Process Screening",
	Process Screening(
		Y(
			:Apples, :Bananas, :Bread,
			:Chicken, :Coffee, :Eggs,
			:Electricity, :Fuel oil #2,
			:"Gasoline, all"n,
			:"Gasoline, unleaded"n,
			:Ground chuck, :Lettuce,
			:Milk, :Natural Gas,
			:Orange juice, :Oranges,
			:Tomatoes
		),
		Time( :Date ),
		Subgroup Sample Size( 3 ),
		Recent Shift Up( 1 ),
		Recent Shift Down( 1 ),
		Shift Graph( 1 )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Split data into series.
3. Create new table property for missing values.
4. Configure missing value exploration.
5. Set report orientation.
6. Create new table property for multivariate analysis.
7. Specify estimation method.
8. Format matrix as square.
9. Configure scatterplot matrix.
10. Create new table property for process screening.



### Example 1
> **Summary**: Explores and analyzes missing values in a data table, generating reports and snapshots, and performing clustering and imputation.

<!-- Keywords: #JMPScriptingLanguage, #MissingValueAnalysis, #DataExploration, #ReportGeneration, #Imputation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ) );
rpt = obj << report;
boxInd = 1;
actOutline = rpt[Outline Box( boxInd )] << get title;
obj << Missing Value Clustering( 1 );
actOutline = rpt[Outline Box( boxInd + 1 )] << get title;
obj << Missing Value Snapshot( 1 );
actOutline = rpt[Outline Box( boxInd + 2 )] << get title;
obj << close window;
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
		Multivariate Normal Imputation( Shrink Covariances( 1 ) )
	)
);
rpt = obj << report;
actOutline = rpt[Outline Box( boxInd )] << get title;
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Explore missing values.
3. Generate report.
4. Get first outline box title.
5. Perform missing value clustering.
6. Get second outline box title.
7. Create missing value snapshot.
8. Get third outline box title.
9. Close explore window.
10. Log capture with multivariate normal imputation.



### Example 2
> **Summary**: Process of exploring missing values in selected columns, saving imputed values automatically, and performing automated data imputation.

<!-- Keywords: #JSLScripting, #DataImputation, #MissingValues, #AutomatedAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Options for Saving Imputed Values( 1 ), Automated Data Imputation );
Close( dt, nosave );
newdt = Current Data Table();
mytitle = newdt << Get Window Title;
```

**Code Explanation**:

1. Open data table;
2. Explore missing values in selected columns.
3. Save imputed values automatically.
4. Perform automated data imputation.
5. Close original table without saving.
6. Retrieve current data table.
7. Get window title of new table.



### Example 3
> **Summary**: Explores missing values in a data table, specifying Y variables and saving imputed values.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #MissingValues, #Imputation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( 11 :: 15 ), Options for Saving Imputed Values( 3 ) );
```

**Code Explanation**:

1. Open table.
2. Explore missing values.
3. Set Y variables.
4. Save imputed values.



### Example 4
> **Summary**: Process of exploring missing values in a data table, specifying response variables and enabling saving imputed values.

<!-- Keywords: #DataImputation, #MissingValues, #JMPScriptingLanguage, #AutomatedAnalysis, #DataPreprocessing -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Options for Saving Imputed Values( 1 ), Automated Data Imputation );
```

**Code Explanation**:

1. Open data table.
2. Create Explore Missing Values object.
3. Set response variables: OZONE, CO, SO2, NO, PM10.
4. Enable saving imputed values.
5. Perform automated data imputation.



### Example 5
> **Summary**: Process of exploring missing values, selecting a column, deleting columns, and logging multivariate normal imputation in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #MissingValuesAnalysis, #ColumnSelection, #Imputation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
emv = dt << Explore Missing Values( Show only columns with missing( 1 ), Y( 1 :: 21 ) );
Column( dt, "J" ) << Set Selected( 1 );
dt << Delete Columns;
Log Capture( emv << Multivariate Normal Imputation );
emv << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore missing values.
3. Select column "J".
4. Delete selected columns.
5. Log multivariate normal imputation.
6. Close explore missing values window.



### Example 6
> **Summary**: Process of exploring missing values, selecting a column, deleting columns, and logging imputation in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #MissingValueAnalysis, #ColumnSelection, #Imputation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
emv = dt << Explore Missing Values( Show only columns with missing( 1 ), Y( 1 :: 21 ) );
Column( dt, "J" ) << Set Selected( 1 );
dt << Delete Columns;
Log Capture( emv << Multivariate SVD Imputation );
emv << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore missing values.
3. Select column "J".
4. Delete selected columns.
5. Log capture imputation.
6. Close explore window.



### Example 7
> **Summary**: Process of exploring missing values, selecting a column, deleting columns, and logging automated imputation in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #MissingValues, #ColumnSelection, #Imputation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
emv = dt << Explore Missing Values( Show only columns with missing( 1 ), Y( 1 :: 21 ) );
Column( dt, "J" ) << Set Selected( 1 );
dt << Delete Columns;
Log Capture( emv << Automated Data Imputation );
emv << close window;
```

**Code Explanation**:

1. Open data table.
2. Explore missing values.
3. Select column "J".
4. Delete selected columns.
5. Log capture automated imputation.
6. Close explore window.



### Example 8
> **Summary**: Process of exploring missing values, selecting a column, deleting columns, and redoing analysis in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #MissingValuesAnalysis, #ColumnSelection, #DataCleanup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
emv = dt << Explore Missing Values( Show only columns with missing( 1 ), Y( 1 :: 280 ) );
Column( dt, "P" ) << Set Selected( 1 );
dt << Delete Columns;
emv2 = emv << redo analysis;
emv << close window;
emv2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore missing values.
3. Select column "P".
4. Delete selected columns.
5. Redo missing value analysis.
6. Close first missing value window.
7. Close second missing value window.



### Example 9
> **Summary**: Process of exploring missing values, selecting a column, deleting columns, and performing missing value clustering in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #MissingValueAnalysis, #ColumnSelection, #DataCleaning -->

**Code**:
```jsl
dt = Open("data_table.jmp");
emv = dt << Explore Missing Values( Show only columns with missing( 1 ), Y( 1 :: 280 ) );
Column( dt, "P" ) << Set Selected( 1 );
dt << Delete Columns;
emv << Missing Value Clustering;
emv << close window;
```

**Code Explanation**:

1. Open data_table data
2. Explore missing values.
3. Select column "P".
4. Delete selected columns.
5. Perform missing value clustering.
6. Close explore window.



### Example 10
> **Summary**: Process of exploring missing values, selecting a column, deleting columns, and taking a snapshot in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #MissingValuesAnalysis, #ColumnSelection, #DataCleanup -->

**Code**:
```jsl
dt = Open("data_table.jmp");
emv = dt << Explore Missing Values( Show only columns with missing( 1 ), Y( 1 :: 280 ) );
Column( dt, "P" ) << Set Selected( 1 );
dt << Delete Columns;
emv << Missing Value Snapshot;
emv << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore missing values.
3. Select column "P".
4. Delete selected columns.
5. Take missing value snapshot.
6. Close explore window.



### Example 11
> **Summary**: Explores data and report generation by opening a data table, exploring missing values, selecting rows, deleting rows, creating a report object, and interacting with button boxes.

<!-- Keywords: #JMPScriptingLanguage, #DataExploration, #ReportGeneration, #ButtonBoxInteraction, #DataTableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
dt << Select Rows( 2 :: (N Row( dt ) - 1) ) << Delete Rows();
rpt = Report( obj );
isPro = 1;
If( isPro,
	rpt[Button Box( 8 )] << Click,
	rpt[Button Box( 7 )] << Click
);
lc = Collapse Whitespace( Log Capture( rpt[Button Box( 1 )] << Click ) );
lc2 = Collapse Whitespace( Log Capture( obj << close window ) );
```

**Code Explanation**:

1. Open data table;
2. Explore missing values for selected columns.
3. Select all rows except first and last.
4. Delete selected rows.
5. Create report object from exploration.
6. Set variable `isPro` to 1.
7. Check if `isPro` is true.
8. Click button box 8 in report.
9. Capture log when clicking button box 1.
10. Collapse whitespace in captured logs.



### Example 12
> **Summary**: Explores missing values in a data table, generating a report and imputing values based on age groups.

<!-- Keywords: #JMPScriptingLanguage, #DataImputation, #MissingValues, #ExploratoryDataAnalysis, #DataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Missing Values( Y( :height, :weight ), Missing Value Report, By( :age ), Options for Saving Imputed Values( 3 ) );
observedData = {{"LINDA", 17, "F", 62, 116}, {"KIRK", 17, "M", 68, 134}, {"LAWRENCE", 17, "M", 70, 172}};
lc = Collapse Whitespace( Log Capture( obj[6] << Automated Data Imputation ) );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Explore missing values.
3. Set Y variables: height, weight.
4. Generate missing value report.
5. Group by age.
6. Enable saving imputed values.
7. Define observed data.
8. Capture log output.
9. Automate data imputation.
10. Close explore window.



### Example 13
> **Summary**: Explores and imputes missing values in a table, grouping by age and utilizing various imputation methods.

<!-- Keywords: #JMPScriptingLanguage, #MissingValueImputation, #DataExploration, #MultivariateAnalysis, #TableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Explore Missing Values( Y( :height, :weight ), Missing Value Report, By( :age ), Options for Saving Imputed Values( 3 ) );
observedData = {{"LINDA", 17, "F", 62, 116}, {"KIRK", 17, "M", 68, 134}, {"LAWRENCE", 17, "M", 70, 172}};
lc2 = Collapse Whitespace( Log Capture( obj[6] << Multivariate RPCA Imputation ) );
lc3 = Collapse Whitespace(
	Log Capture( obj[6] << Multivariate SVD Imputation( Number of Singular Vectors( 3 ), Maximum Iterations( 10 ) ) )
);
lc4 = Collapse Whitespace( Log Capture( obj[6] << Multivariate Normal Imputation( Shrink Covariances ) ) );
lc5 = Collapse Whitespace( Log Capture( obj[6] << Multivariate Normal Imputation ) );
obj << close window;
```

**Code Explanation**:

1. Open table.
2. Explore missing values.
3. Set Y variables.
4. Generate missing value report.
5. Group by age.
6. Enable saving imputed values.
7. Define observed data.
8. Perform Multivariate RPCA Imputation.
9. Perform Multivariate SVD Imputation.
10. Perform Multivariate Normal Imputation with shrinkage.
11. Perform Multivariate Normal Imputation.
12. Close window.



### Example 14
> **Summary**: Explores missing values in a dataset, generating a report for variables OZONE, CO, SO2, NO, PM10, and Lead.

<!-- Keywords: #JMPScriptingLanguage, #MissingValueAnalysis, #DataExploration, #ReportGeneration, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ), Missing Value Report );
```

**Code Explanation**:

1. Open data table;
2. Assign dataset to variable dt.
3. Launch Explore Missing Values.
4. Set response variables: OZONE, CO, SO2, NO, PM10, Lead.
5. Generate Missing Value Report.



### Example 15
> **Summary**: Explores and imputes missing values in a data table, utilizing JMP's Explore Missing Values platform to generate reports.

<!-- Keywords: #JMPScriptingLanguage, #DataImputation, #MissingValueAnalysis, #ExploratoryDataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt[0, {"OZONE", "CO", "SO2", "NO", "PM10", "Lead"}];
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ), Missing Value Report );
obj << close window;
x2 = dt[0, {"OZONE", "CO", "SO2", "NO", "PM10", "Lead"}];
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ), Missing Value Report );
x2 = dt[0, {"OZONE", "CO", "SO2", "NO", "PM10", "Lead"}];
Log Capture( obj << Multivariate RPCA Imputation );
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Select variables for analysis.
3. Explore missing values for selected variables.
4. Close the missing value report window.
5. Repeat selecting variables.
6. Explore missing values again.
7. Repeat selecting variables.
8. Log capture of multivariate RPCA imputation.
9. Close the imputation report window.



### Example 16
> **Summary**: Runs the exploration and reporting of missing values in a data table, specifying response variables OZONE, CO, SO2, NO, PM10, and Lead.

<!-- Keywords: #JSLScriptingLanguage, #DataTableExploration, #MissingValuesAnalysis, #ReportGeneration, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ) );
rpt = Report( obj );
```

**Code Explanation**:

1. Open data table;
2. Create Explore Missing Values object.
3. Set response variables: OZONE, CO, SO2, NO, PM10, Lead.
4. Generate report from Explore Missing Values object.



### Example 17
> **Summary**: Process of exploring missing values, selecting and deleting middle rows, generating a report, clicking buttons based on a flag, capturing log output, and collapsing whitespace in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ReportGeneration, #ButtonClicks, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
dt << Select Rows( 2 :: (N Row( dt ) - 1) ) << Delete Rows();
rpt = Report( obj );
isPro = 1;
If( isPro,
	rpt[Button Box( 8 )] << Click,
	rpt[Button Box( 7 )] << Click
);
lc = Collapse Whitespace( Log Capture( rpt[Button Box( 1 )] << Click ) );
```

**Code Explanation**:

1. Open table.
2. Explore missing values.
3. Select middle rows.
4. Delete selected rows.
5. Get report object.
6. Set isPro flag.
7. Click appropriate button based on flag.
8. Capture log output.
9. Collapse whitespace in log.
10. Store result in lc.



## Explore Missing Values using Log Capture
> **Summary**: Explores and imputes missing values in a JMP data table using Multivariate SVD Imputation, with interactive report generation.

<!-- Keywords: #JMPScriptingLanguage, #MultivariateSVDImputation, #DataTableExploration, #MissingValueImputation, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
boxInd = 1;
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
		Multivariate SVD Imputation( Number of Singular Vectors( 3 ), Maximum Iterations( 10 ), Show Iteration Log( 1 ), Lambda( 1 ) )
	)
);
rpt = obj << report;
actOutline = rpt[Outline Box( boxInd )] << get title;
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Initialize box index.
3. Log capture starts.
4. Explore missing values on selected columns.
5. Apply multivariate SVD imputation method.
6. Set number of singular vectors to 3.
7. Set maximum iterations to 10.
8. Enable iteration log display.
9. Set lambda value to 1.
10. Retrieve report from object.



## Explore Missing Values using Structural Equation Models
> **Summary**: Creates and launches a Structural Equation Model (SEM) with specified model variables, including Support_L, Goal_L, Work_L, and Interact_L, in JMP.

<!-- Keywords: #JMP, #StructuralEquationModel, #ModelVariables, #LaunchExploreMissingValues, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Structural Equation Models( Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ) );
obj << Launch Explore Missing Values( 1 );
```

**Code Explanation**:

1. Open data table;
2. Create Structural Equation Model.
3. Include Support_L, Goal_L, Work_L, Interact_L.
4. Launch Explore Missing Values report.



## Explore Missing Values using For
### Example 1
> **Summary**: Process of setting random cells to missing in a data table, followed by exploring and imputing missing values using automated data imputation.

<!-- Keywords: #JSLScriptingLanguage, #DataImputation, #MissingValues, #AutomatedDataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( j = 1, j <= 3, j++,
	rand_row = Random Integer( 1, N Row( dt ) );
	rand_col = Random Integer( 1, N Col( dt ) - 1 );
	dt[rand_row, rand_col] = .;
);
Log Capture(
	emv2 = Explore Missing Values(
		Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
		Options for Saving Imputed Values( 2 ),
		Automated Data Imputation,
		SendToReport( Dispatch( {"Commands"}, "Automated Data Imputation Controls", OutlineBox, {Close( 0 )} ) )
	)
);
emv2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Loop 3 times.
3. Generate random row index.
4. Generate random column index.
5. Set selected cell to missing.
6. Capture log output.
7. Explore missing values.
8. Set imputation options.
9. Perform automated data imputation.
10. Close imputation controls outline.



### Example 2
> **Summary**: Explores and filters missing values in a specified data table, utilizing the Explore Missing Values platform to analyze columns with and without missing values.

<!-- Keywords: #JSLScriptingLanguage, #ExploreMissingValues, #DataTableManagement, #MissingValueAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( i = 1, i <= 5, i++,
	emv = dt << Explore Missing Values( Y( 1 :: 21 ), Show only columns with missing( 1 ) );
	emv << close window;
);
For( i = 1, i <= 5, i++,
	emv = dt << Explore Missing Values( Y( 1 :: 21 ), Show only columns with missing( 0 ) );
	emv << Show only columns with missing( 1 );
	emv << close window;
);
```

**Code Explanation**:

1. Open data table;
2. Loop 5 times.
3. Explore missing values for first 21 columns.
4. Filter columns with missing values.
5. Close the window.
6. Repeat steps 3-5.
7. Loop 5 times again.
8. Explore missing values for first 21 columns.
9. Filter columns without missing values.
10. Filter columns with missing values.
11. Close the window.



## Explore Missing Values using As Table
> **Summary**: Process of introducing missing values, joining tables, and exploring missing values in a data table using JMP's scripting language.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #MissingValues, #TableJoin, #ExploratoryDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = As Table( J( N Row( dt ), 100, 23 ) );
nmiss = Floor( .1 * (N Row( dt ) * N Col( dt )) );
For( i = 1, i <= nmiss, i++,
	dt[Random Integer( 1, N Row( dt ) ), Random Integer( 1, N Col( dt ) )] = .
);
dt3 = dt << Join( With( dt2 ), By Row Number );
Log Capture(
	emv3 = dt3 << Explore Missing Values(
		Y( :Y, :Age, :BMI, :BP, :Name( "Total Cholesterol" ), :LDL, :HDL, :TCH, :LTG, :Glucose, 15 :: 114 ),
		Options for Saving Imputed Values( 3 ),
		Automated Data Imputation,
		Set Random Seed( 123 )
	)
);
```

**Code Explanation**:

1. Open data table;
2. Create new table dt2 with random data.
3. Calculate number of missing values.
4. Loop to introduce missing values randomly.
5. Join original table with new table.
6. Capture log output.
7. Explore missing values in joined table.
8. Specify columns for analysis.
9. Set options for saving imputed values.
10. Perform automated data imputation.



## Explore Missing Values using Random Index
### Example 1
> **Summary**: Process of imputing missing values in a data table, specifically for the 'Region', 'OZONE', 'CO', 'SO2', 'NO', and 'PM10' columns.

<!-- Keywords: #JSL, #DataImputation, #MissingValues, #AutomatedDataImputation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[Random Index( N Row( dt ), 10 ), "Region"] = "";
nCols = N Col( dt );
obj = dt << Explore Missing Values(
	Y( :Region, :OZONE, :CO, :SO2, :NO, :PM10 ),
	Options for Saving Imputed Values( 2 ),
	Automated Data Imputation
);
nCols2 = N Col( dt );
extraCols = nCols2 - nCols;
imputedCols = {"Region", "OZONE", "CO", "SO2", "NO", "PM10"};
For( i = 1, i <= 10, i++,
	For( j = 1, j <= Length( imputedCols ), j++,
		missValInd = Is Missing( dt[0, imputedCols[j]] )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Randomly select 10 rows.
3. Set Region to missing for selected rows.
4. Count initial columns.
5. Launch Explore Missing Values.
6. Specify Region, OZONE, CO, SO2, NO, PM10 as Y.
7. Enable saving imputed values.
8. Use Automated Data Imputation.
9. Count final columns.
10. Calculate number of extra columns added.



### Example 2
> **Summary**: Process of exploring missing values in a data table, including automated data imputation and multivariate normal imputation with shrink covariances.

<!-- Keywords: #JSLScriptingLanguage, #DataImputation, #MissingValues, #MultivariateNormalImputation, #ExploratoryDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[{38, 39}, "height"] = .;
dt[Random Index( 37, 5 ), "height"] = .;
dt[Random Index( 37, 7 ), "weight"] = .;
obj = Explore Missing Values( Y( :height, :weight ), Missing Value Report, By( :age ), Options for Saving Imputed Values( 3 ) );
observedData = {{"LINDA", 17, "F", ., 116}, {"KIRK", 17, "M", ., 134}, {"LAWRENCE", 17, "M", 70, 172}};
lc = Collapse Whitespace( Log Capture( obj[6] << Automated Data Imputation ) );
Log Capture( obj[6] << Undo Imputation );
lc2 = Collapse Whitespace( Log Capture( obj[6] << Multivariate Normal Imputation( Shrink Covariances ) ) );
Log Capture( obj[6] << Undo Imputation );
lc3 = Collapse Whitespace( Log Capture( obj[6] << Multivariate Normal Imputation ) );
Log Capture( obj[6] << Undo Imputation );
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Set height missing for rows 38-39.
3. Randomly set height missing for 5 rows.
4. Randomly set weight missing for 7 rows.
5. Explore missing values for height and weight, by age.
6. Save imputed values option set to 3.
7. Define observed data with missing values.
8. Capture log of automated data imputation.
9. Undo previous imputation.
10. Capture log of multivariate normal imputation with shrink covariances.
11. Undo previous imputation.
12. Capture log of multivariate normal imputation.
13. Undo previous imputation.
14. Close explore missing values window.



## Explore Missing Values using If
### Example 1
> **Summary**: Explores and imputes missing values in a JMP data table, utilizing the Explore Missing Values platform.

<!-- Keywords: #JMPScriptingLanguage, #MissingValueImputation, #DataExploration, #AutomatedAnalysis, #JMPDataTable -->

**Code**:
```jsl
isPro = 1;
If( isPro == 0,
	dt = Open("data_table.jmp");
	obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ), Automated Data Imputation );
	nMissing = Sum( Is Missing( dt[0, {"OZONE", "CO", "SO2", "NO", "PM10", "Lead"}] ) );
	obj << close window;
	Close( dt, nosave );
);
```

**Code Explanation**:

1. Check if `isPro` equals 0.
2. If true, open "data_table.jmp".
3. Create missing values exploration object.
4. Specify variables for analysis.
5. Perform automated data imputation.
6. Count missing values.
7. Close exploration window.
8. Close "data_table.jmp" without saving.



### Example 2
> **Summary**: Runs data imputation and exploration processes in JMP, utilizing various methods to handle missing values and log results.

<!-- Keywords: #JMPScriptingLanguage, #DataImputation, #MissingValues, #ExploratoryDataAnalysis, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
isPro = 1;
If( isPro,
	obj = dt << Explore Missing Values(
		Y( :Age, :BMI, :BP, :Name( "Total Cholesterol" ), :LDL, :HDL, :TCH, :LTG, :Glucose ),
		Validation( :Validation )
	),
	obj = dt << Explore Missing Values( Y( :Age, :BMI, :BP, :Name( "Total Cholesterol" ), :LDL, :HDL, :TCH, :LTG, :Glucose ) )
);
If( isPro,
	lc1 = Collapse Whitespace( Log Capture( obj << Automated Data Imputation ) )
);
lc2 = Collapse Whitespace( Log Capture( obj << Multivariate RPCA Imputation ) );
lc3 = Collapse Whitespace( Log Capture( obj << Multivariate SVD Imputation( Number of Singular Vectors( 3 ), Maximum Iterations( 10 ) ) ) );
lc4 = Collapse Whitespace( Log Capture( obj << Multivariate Normal Imputation( Shrink Covariances ) ) );
lc5 = Collapse Whitespace( Log Capture( obj << Multivariate Normal Imputation ) );
```

**Code Explanation**:

1. Open data table;
2. Set isPro flag to 1.
3. If isPro, explore missing values with validation.
4. Otherwise, explore missing values without validation.
5. If isPro, log automated data imputation.
6. Log multivariate RPCA imputation.
7. Log multivariate SVD imputation with settings.
8. Log multivariate normal imputation with shrinkage.
9. Log multivariate normal imputation.
10. Collapse whitespace in logs.



## Explore Missing Values using Random Integer
### Example 1
> **Summary**: Process of exploring missing values in a data table, including random clearing and setting of entries, range checking, and automated imputation.

<!-- Keywords: #JSLScriptingLanguage, #DataImputation, #MissingValues, #RandomSeed, #DataTableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "sex"] = "";
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 55, 65 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
Close( dtNew, nosave );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 2 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
dt << Delete Columns( (p + 1) :: N Col( dt ) );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 3 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
Close( dt, nosave );
	
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data table;
2. Randomly clear 5 "sex" entries.
3. Randomly set 5 "weight" entries to missing.
4. Log range check on "height".
5. Count columns in dataset.
6. Explore missing values with options.
7. Capture data table list.
8. Remove original dataset from list.
9. Select new dataset.
10. Close new dataset without saving.
11. Repeat explore missing values with different option.
12. Close window.
13. Delete newly added columns.
14. Explore missing values again with final option.
15. Close window.
16. Close original dataset without saving.
17. Reset random seed.



### Example 2
> **Summary**: Process of exploring missing values in a data table, imputing values, and deleting columns, while logging range check results for height.

<!-- Keywords: #JSLScriptingLanguage, #DataImputation, #MissingValues, #DataTableManipulation, #LogCapture -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "sex"] = "";
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 51, 80 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
Close( dtNew, nosave );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 2 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
dt << Delete Columns( (p + 1) :: N Col( dt ) );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 3 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
Close( dt, nosave );
			
	
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data table;
2. Randomly set 5 sex entries to missing.
3. Randomly set 5 weight entries to missing.
4. Log height range check results.
5. Count number of columns in dataset.
6. Explore missing values for sex, height, weight.
7. Save first imputed dataset.
8. Remove original dataset from list.
9. Select new dataset.
10. Close first imputed dataset without saving.
11. Explore missing values again, save second imputed dataset.
12. Close second imputed dataset without saving.
13. Delete newly added columns.
14. Explore missing values one last time, save third imputed dataset.
15. Close final dataset without saving.
16. Reset random seed.



### Example 3
> **Summary**: Runs a series of data manipulation and imputation tasks, including introducing missing values, exploring missing values with automated data imputation, and deleting columns.

<!-- Keywords: #JSLScriptingLanguage, #DataImputation, #MissingValues, #AutomatedDataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 55, 65 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
Close( dtNew, nosave );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 2 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
dt << Delete Columns( (p + 1) :: N Col( dt ) );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 3 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
Close( dt, nosave );
	
Random Reset( 123456789 );
```

**Code Explanation**:

1. Open data table;
2. Introduce missing values in weight column.
3. Log height range check results.
4. Count number of columns.
5. Explore missing values for height and weight.
6. Save imputed values option 1.
7. Close imputation window.
8. Remove original dataset from list.
9. Select new dataset.
10. Explore missing values again, option 2.
11. Close imputation window.
12. Delete newly added columns.
13. Explore missing values, option 3.
14. Close imputation window.
15. Close final dataset without saving.
16. Reset random seed.



### Example 4
> **Summary**: Process of exploring missing values in a data table, performing automated data imputation, and saving imputed values with different options.

<!-- Keywords: #JSLScriptingLanguage, #DataImputation, #MissingValues, #AutomatedDataAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 51, 69 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
Close( dtNew, nosave );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 2 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
dt << Delete Columns( (p + 1) :: N Col( dt ) );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 3 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Introduce missing values in weight column.
3. Log height range check results.
4. Count columns in data table.
5. Explore missing values for height and weight.
6. Save imputed values option 1.
7. Set random seed for reproducibility.
8. Perform automated data imputation.
9. Retrieve list of open data tables.
10. Remove original data table from list.
11. Assign first remaining table to new variable.
12. Close the imputation result window.
13. Close the new data table without saving.
14. Explore missing values again for height and weight.
15. Save imputed values option 2.
16. Set random seed for reproducibility.
17. Perform automated data imputation.
18. Close the imputation result window.
19. Delete newly added columns.
20. Explore missing values once more for height and weight.
21. Save imputed values option 3.
22. Set random seed for reproducibility.
23. Perform automated data imputation.
24. Close the imputation result window.



### Example 5
> **Summary**: Process of imputing missing values in a data table, identifying and selecting non-imputed columns, and exploring missing values with specified settings.

<!-- Keywords: #JSLScriptingLanguage, #DataImputation, #MissingValues, #JMP, #AutomatedAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 100, 1, Random Integer( 1, N Row( dt ) ) ), "Years at Current Employer"] = .;
dt[J( 100, 1, Random Integer( 1, N Row( dt ) ) ), "Years in Current Position"] = .;
BeforeImputeCols = dt[0, {8, 10}];
missingInd = Loc( Is Missing( BeforeImputeCols ) );
nonMissingInd = Loc( Is Missing( BeforeImputeCols ) == 0 );
NonImputedCols = dt[0, (1 :: 7) || [9] || (11 :: N Col( dt ))];
obj = dt << Explore Missing Values(
	By( :Group ),
	Y( :"Years at Current Employer"n, :"Years in Current Position"n ),
	Set Random Seed( 46897213 ),
	Options for Saving Imputed Values( 1 ),
	Automated Data Imputation
);
tableList = Get Data Table List();
originalLoc = Contains( tableList, Data Table("data_table") );
Remove From( tableList, originalLoc );
dt2 = tableList[1];
NonImputedColsAfter = dt2[0, (1 :: 7) || [9] || (11 :: N Col( dt ))];
AfterImputeCols = dt2[0, {8, 10}];
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Replace 100 random "Years at Current Employer" values with missing.
3. Replace 100 random "Years in Current Position" values with missing.
4. Identify columns 8 and 10 before imputation.
5. Find indices of missing values in selected columns.
6. Find indices of non-missing values in selected columns.
7. Select non-imputed columns.
8. Launch Explore Missing Values with specified settings.
9. Retrieve list of data tables.
10. Remove original table from list.
11. Assign first table in list to dt2.
12. Select non-imputed columns after imputation.
13. Select columns 8 and 10 after imputation.
14. Close Explore Missing Values window.



### Example 6
> **Summary**: Runs data table operations, including randomizing missing values and logging range check results, to prepare the dataset for further analysis.

<!-- Keywords: #JSLScripting, #DataPreprocessing, #MissingValues, #RangeCheck, #DataTableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "sex"] = "";
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 55, 65 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Randomly clear 5 sex entries.
3. Randomly set 5 weight values to missing.
4. Log height range check results.
5. Count columns in dataset.
6. Log explore missing values results.
7. Get list of all data tables.
8. Remove data_table from list.
9. Assign first table to dtNew.
10. Close explore missing values window.



### Example 7
> **Summary**: Prepares data and imputation tasks, including randomizing missing values and exploring missing value patterns in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataPreprocessing, #MissingValueImputation, #AutomatedDataAnalysis, #Reproducibility -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "sex"] = "";
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 51, 80 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :sex, :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
```

**Code Explanation**:

1. Open data table.
2. Randomly clear 5 "sex" entries.
3. Randomly set 5 "weight" entries to missing.
4. Log capture height range check.
5. Count columns in data table.
6. Log capture missing value exploration.
7. Save imputed values.
8. Set random seed for reproducibility.
9. Perform automated data imputation.
10. Close exploration window.



### Example 8
> **Summary**: Runs data table manipulation and exploration, introducing missing values in a column, logging range check results, counting columns, exploring missing values, retrieving a list of data tables, removing a specific table, and closing the explore window.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #MissingValues, #RangeCheck, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 55, 65 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Introduce missing values in weight.
3. Log height range check results.
4. Count columns in dataset.
5. Log explore missing values results.
6. Get list of all data tables.
7. Remove data_table from list.
8. Assign second table to dtNew.
9. Close explore missing values window.



### Example 9
> **Summary**: Runs data table operations, including weight replacement, height range checking, column counting, and missing value exploration.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #MissingValueHandling, #LogCapture, #DataImputation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[J( 5, 1, Random Integer( 1, N Row( dt ) ) ), "weight"] = .;
Log Capture( Column( dt, "height" ) << Range Check( LELE( 51, 69 ) ) );
p = N Col( dt );
Log Capture(
	obj = dt << Explore Missing Values(
		Y( :height, :weight ),
		Options for Saving Imputed Values( 1 ),
		Set Random Seed( 123456789 ),
		Automated Data Imputation
	)
);
dtList = Get Data Table List();
Remove From( dtList, Loc( dtList, Data Table("data_table") )[1] );
dtNew = dtList[1];
obj << close window;
```

**Code Explanation**:

1. Open data table;
2. Replace 5 random weights with missing values.
3. Log height range check results.
4. Count columns in dataset.
5. Log explore missing values results.
6. Get all data tables.
7. Remove data_table from list.
8. Assign first remaining table to dtNew.
9. Close explore missing values window.



## Explore Missing Values using Collapse Whitespace
> **Summary**: Explores and imputes missing values in a data table, capturing log output and displaying the ADI loading matrix.

<!-- Keywords: #DataImputation, #MissingValueAnalysis, #LogCapture, #JSLScripting, #DataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
lc = Collapse Whitespace(
	Log Capture(
		emv = dt << Explore Missing Values(
			Y( :Age, :BMI, :BP, :Name( "Total Cholesterol" ), :LDL, :HDL, :TCH, :LTG, :Glucose ),
			Validation( :Validation ),
			Automated Data Imputation
		)
	)
);
emv << ADI Loading Matrix;
```

**Code Explanation**:

1. Open data table;
2. Collapse whitespace.
3. Capture log output.
4. Explore missing values.
5. Select multiple Y variables.
6. Specify validation column.
7. Enable automated data imputation.
8. Assign explore result to emv.
9. Display ADI loading matrix.



## Explore Missing Values using Function
> **Summary**: Explores and deletes missing values in a JMP data table, generating reports and capturing logs from button clicks.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #MissingValueExploration, #ButtonClickLogging, #ReportGeneration -->

**Code**:
```jsl
checkSyncWarning = Function( {buttonInd},
	{},
	dt = Open("data_table.jmp");
	obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
	dt << Select Rows( 21 :: N Row( dt ) ) << Delete Rows();
	rpt = Report( obj );
	Log Capture( rpt[Button Box( 8 )] << Click );
	buttonName = rpt[Button Box( buttonInd )] << Get Button Name;
	lc = Collapse Whitespace( Log Capture( rpt[Button Box( buttonInd )] << Click ) );
	lc2 = Collapse Whitespace( Log Capture( obj << close window ) );
	Close( dt, nosave );
);
maxInd = 6;
For( i = 1, i <= maxInd, i++,
	checkSyncWarning( i )
);
```

**Code Explanation**:

1. Define function `checkSyncWarning`.
2. Open data table;
3. Explore missing values for specified columns.
4. Delete rows 21 to last.
5. Generate report from exploration.
6. Capture log from first button click.
7. Retrieve button name at index `buttonInd`.
8. Capture log from selected button click.
9. Capture log from closing window.
10. Close dataset without saving.
11. Set `maxInd` to 6.
12. Loop through indices 1 to 6.
13. Call `checkSyncWarning` for each index.



## Explore Missing Values using Random Reset
> **Summary**: Process of randomly selecting rows, clearing specific columns, and exploring missing values in a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #RandomSampling, #MissingValueHandling, #ExploratoryDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123456789 );
randRows = Sort Ascending( J( .1 * N Row( dt ), 1, Random Integer( 1, N Row( dt ) ) ) );
randRows2 = Sort Ascending( J( .1 * N Row( dt ), 1, Random Integer( 1, N Row( dt ) ) ) );
randRows3 = Sort Ascending( J( .1 * N Row( dt ), 1, Random Integer( 1, N Row( dt ) ) ) );
dt[randRows, "Sex"] = "";
dt[randRows2, "weight"] = .;
dt[randRows3, "height"] = .;
emv = dt << Explore Missing Values( Y( :sex, :height, :weight ), Options for Saving Imputed Values( 3 ), Set Random Seed( 123456789 ) );
```

**Code Explanation**:

1. Open data table;
2. Reset random seed.
3. Generate random row indices.
4. Generate second set of random row indices.
5. Generate third set of random row indices.
6. Clear "Sex" for selected rows.
7. Set "Weight" to missing for selected rows.
8. Set "Height" to missing for selected rows.
9. Explore missing values for specified columns.
10. Save imputed values randomly.



## Explore Missing Values using Select Rows
> **Summary**: Processes and analyzes missing values in a data table, including subset creation and selection manipulation.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #MissingValueAnalysis, #SubsetCreation, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( 1 :: 10 );
dt2 = dt << Subset( Selected Rows( 1 ), All Columns( 1 ) );
dt << Clear Select;
dt << Select Rows( 11 :: N Row( dt ) ) << Hide and Exclude( 1 );
obj = dt << Explore Missing Values( Y( :T, :P, :QRST, :J, :Heart rate ), Missing Value Report );
obj2 = dt2 << Explore Missing Values( Y( :T, :P, :QRST, :J, :Heart rate ), Missing Value Report );
```

**Code Explanation**:

1. Open data table;
2. Select first 10 rows.
3. Subset selected rows into new table.
4. Clear row selection.
5. Select remaining rows.
6. Hide and exclude selected rows.
7. Explore missing values in original table.
8. Explore missing values in subset table.



