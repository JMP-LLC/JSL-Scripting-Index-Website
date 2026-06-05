# Stack

### Example 1
> **Summary**: Opens a data table and stacks selected columns, specifying source label and stacked data columns, with the option to output the result in a new table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnStacking, #OutputTableGeneration, #JMPScripting -->

**Code**:
```jsl
// Stack MICs
// Open data table
dt = Open("data_table.jmp");
// Stack MICs
dt << Stack(
	Columns( :penicillin, :streptomycin, :neomycin ),
	Source Label Column( :Stack Source Label ),
	Stacked Data Column( :Stack Data Column ),
	Output Table( :Stack Output Table )
);
```

**Code Explanation**:

1. Open data table.
2. Stack selected columns.
3. Specify source label column.
4. Specify stacked data column.
5. Specify output table.



### Example 2
> **Summary**: Runs the stacking and processing of specified columns in a JMP data table, with conditional checks for script suppression and formula evaluation.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #ConditionalLogic, #StackingColumns, #FormulaEvaluation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
stackDt = dt << Stack(
	columns( :hist0, :hist1, :hist3, :hist5 ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Hist" ),
	Output Table( "Stacked Table" )
);
form1 = Contains( Char( Column( stackDt, "diff" ) << get script ), "Suppress" );
form2 = Contains( Char( Column( stackDt, "mean" ) << get script ), "Suppress" );
Close( stackDt, no save );
stackDt = dt << Stack(
	columns( :hist0, :hist1, :hist3, :hist5 ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Hist" ),
	Copy formula( 0 ),
	Output Table( "Stacked Table" )
);
form1 = Contains( Char( Column( stackDt, "diff" ) << get script ), "Formula" );
form2 = Contains( Char( Column( stackDt, "mean" ) << get script ), "Formula" );
Close( stackDt, no save );
stackDt = dt << Stack(
	columns( :hist0, :hist1, :hist3, :hist5 ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Hist" ),
	Copy formula( 1 ),
	Suppress Formula Evaluation( 0 ),
	Output Table( "Stacked Table" )
);
form1 = Contains( Char( Column( stackDt, "diff" ) << get script ), "Suppress" );
form2 = Contains( Char( Column( stackDt, "mean" ) << get script ), "Suppress" );
```

**Code Explanation**:

1. Open data table.
2. Stack specified columns into new table.
3. Check if "diff" column has "Suppress" script.
4. Check if "mean" column has "Suppress" script.
5. Close stacked table without saving.
6. Repeat stacking with "Copy formula" set to 0.
7. Check if "diff" column has "Formula" script.
8. Check if "mean" column has "Formula" script.
9. Close stacked table without saving.
10. Repeat stacking with "Copy formula" set to 1 and "Suppress Formula Evaluation" set to 0.



### Example 3
> **Summary**: Stacks specified columns in a JMP data table, labeling the source column and outputting a new table with stacked data.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #StackedData, #SourceLabelColumn, #OutputTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
stackDt = dt << Stack(
	columns( :hist0, :hist1, :hist3, :hist5 ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Hist" ),
	Copy formula( 0 ),
	Output Table( "Stacked Table" )
);
sourceScript = Char( stackDt << Get Property( "Source" ) );
```

**Code Explanation**:

1. Open data_table data
2. Stack specified columns.
3. Label source column as "Label".
4. Name stacked data column as "Hist".
5. Do not copy formulas.
6. Output new table named "Stacked Table".
7. Retrieve source script property.
8. Convert source script to character string.



### Example 4
> **Summary**: Stacks selected columns, creation of source label and stacked data columns, and output table naming, while also checking for 'Suppress' in column scripts.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnManagement, #ScriptingLogic, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
stackDt = dt << Stack(
	columns( :hist0, :hist1, :hist3, :hist5 ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Hist" ),
	Output Table( "Stacked Table" )
);
form1 = Contains( Char( Column( stackDt, "diff" ) << get script ), "Suppress" );
form2 = Contains( Char( Column( stackDt, "mean" ) << get script ), "Suppress" );
```

**Code Explanation**:

1. Open data table.
2. Stack selected columns.
3. Create source label column.
4. Create stacked data column.
5. Name output table.
6. Check for "Suppress" in "diff" column script.
7. Check for "Suppress" in "mean" column script.



### Example 5
> **Summary**: Stacks and filters data from a primary source table, generating a new stacked table with specific columns and properties.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #StackingColumns, #PropertySetting, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" ),
	Stack by Row( 37 ),
	Number of Series( 3 ),
	Contiguous
);
dt2:Day << Set Property( "List Check", {"BP 12M", "BP 6M", "BP 8M"} );
lc = Char( dt2:Day << Get Property( "List Check" ) );
For Each Row(
	alert = 0;
	i = Row();
	If( Contains( dt2:Day[i], "F" ),
		alert = 1
	);
	If( Contains( dt2:Day[i], "W" ),
		alert = 1
	);
);
Close( dt2, nosave );
Close( dt, nosave );
dt = New Table( "Drug Trials",
	Add Rows( 7 ),
	New Column( "High Dose", Numeric, Continuous, Format( "Best", 10 ), Set Values( [6, 8, 11, 4, 13, 8, 0] ) ),
	New Column( "Low Dose", Numeric, Continuous, Format( "Best", 10 ), Set Values( [2, 3, 18, 14, 9, 1, 9] ) ),
	New Column( "Placebo", Numeric, Continuous, Format( "Best", 10 ), Set Values( [13, 18, 23, 12, 16, 12, 20] ) )
);
dt2 = dt << Stack( columns( :High Dose, :Low Dose, :Placebo ), Stack By Row( 0 ), );
```

**Code Explanation**:

1. Open data table;
2. Stack selected columns into new table.
3. Set property for "Day" column.
4. Convert property to character.
5. Loop through each row.
6. Check for "F" or "W" in "Day".
7. Close stacked table without saving.
8. Close original table without saving.
9. Create new table "Drug Trials".
10. Stack columns from new table.



### Example 6
> **Summary**: Stacks and filters a data table to identify rows containing specific labels, utilizing JMP's Stack platform.

<!-- Keywords: #JMPStack, #DataTableFiltering, #LabelDetection, #ScriptingLanguage, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" ),
	Stack by Row( 37 ),
	Number of Series( 3 ),
	Contiguous
);
dt2:Day << Set Property( "List Check", {"BP 12M", "BP 6M", "BP 8M"} );
lc = Char( dt2:Day << Get Property( "List Check" ) );
For Each Row(
	alert = 0;
	i = Row();
	If( Contains( dt2:Day[i], "F" ),
		alert = 1
	);
	If( Contains( dt2:Day[i], "W" ),
		alert = 1
	);
);
```

**Code Explanation**:

1. Open data table;
2. Stack selected columns into new table.
3. Label stacked columns as "Day" and "BP".
4. Set stack properties by row and series.
5. Enable list check for specific labels.
6. Retrieve checked labels from "Day" column.
7. Initialize alert variable.
8. Loop through each row in the table.
9. Check if "Day" contains "F" or "W".
10. Set alert to 1 if condition met.



## Stack using Delete Column
> **Summary**: Prepares data by opening a data table, deleting the 'age' column, stacking all columns, and creating a subset of the first 20 rows.

<!-- Keywords: #JSLScriptingLanguage, #DataPreparation, #TableOperations, #Subset, #Stack -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Column( age );
dts = dt << Stack( columns( all columns ), output table name( "Stacked" ) );
dtsub = dts << Subset( Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20] ), output table name( "Test" ) );
```

**Code Explanation**:

1. Open data table;
2. Delete "age" column.
3. Stack all columns.
4. Name stacked table "Stacked".
5. Subset first 20 rows.
6. Name subset table "Test".



## Stack using Set Property
> **Summary**: Runs data analysis by creating summary tables and extracting column names, utilizing JMP scripting language (JSL) to manipulate data tables.

<!-- Keywords: #JMPScriptingLanguage, #DataAnalysis, #SummaryTables, #ColumnNames, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:age << Set Property( "Value Ordering", {17, 16, 15, 12, 13, 14} );
dt2 = dt << Summary( Group( :age ), Mean( :height ) );
v = dt2:age << get values;
Close( dt2, nosave );
cert n = {"sex", "N Rows", "Mean(height, 17)", "Mean(height, 16)", "Mean(height, 15)", "Mean(height, 12)", "Mean(height, 13)",
"Mean(height, 14)"};
dt2 = dt << Summary( Group( :sex ), Mean( :height ), Subgroup( :age ) );
n = dt2 << get column names( string );
Close( dt2, nosave );
Close( dt, nosave );
cert m = [3358713600 3358800000, 3358886400 3358972800, 3359059200 .];
dt = New Table( "mytab",
	Add Rows( 1 ),
	New Column( "c2", Numeric, Continuous, Format( "m/d/y", 12 ), Input Format( "m/d/y" ), Set Values( [3358713600] ) ),
	New Column( "c3", Numeric, Continuous, Format( "m/d/y", 12 ), Set Values( [3358800000] ) ),
	New Column( "c4", Numeric, Continuous, Format( "m/d/y", 12 ), Set Values( [3358886400] ) ),
	New Column( "c5", Numeric, Continuous, Format( "m/d/y", 12 ), Set Values( [3358972800] ) ),
	New Column( "c6", Numeric, Continuous, Format( "m/d/y", 12 ), Set Values( [3359059200] ) )
);
dts = dt << Stack(
	columns( :c2, :c3, :c4, :c5, :c6 ),
	Source Label Column( "Label" ),
	Stacked Data Column( "Data" ),
	Number of Series( 2 )
);
m = dts << Get As Matrix;
Close( dts, nosave );
Close( dt, nosave );
cert n = {name, age, sex, height, weight};
```

**Code Explanation**:

1. Open data table.
2. Set age value ordering.
3. Create summary table by age.
4. Extract ages from summary table.
5. Close summary table.
6. Define certificate names.
7. Create summary table by sex and age.
8. Extract column names from summary table.
9. Close summary table.
10. Define certificate matrix.



## Stack using Group Columns
### Example 1
> **Summary**: Runs data manipulation and analysis by opening a data table, grouping columns, stacking selected columns, retrieving column names, and creating a new table with formulas.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ColumnStacking, #FormulaCreation, #TableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Group Columns( "Group1", BP 8M, 9 );
stackDt = dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" ),
	Output Table( "Stacked" )
);
colNames = stackDt << Get Column Names();
Close( stackDt, no save );
Close( dt, no save );
dt = New Table( "Example",
	Add Rows( 100000 ),
	New Column( "Col",
		Numeric,
		Continuous,
		Format( "Best", 10 ),
		Formula(
			If( Row() == 1,
				r = 1,
				r = r + 1
			);
			If( r != Row(),
				Show( "failed", r, Row() )
			);
			r;
		)
	)
);
dt << RunFormulas;
dt << New Column( "Compare", Numeric, Continuous, Format( "Best", 12 ), Formula( If( :Col == Row(), 0, 1 ) ) );
dt << RunFormulas;
act val = Col Sum( :compare );
Close( dt, no save );
dt1 = New Table( "Example", Add Rows( 4000 ) );
For( c = 1, c <= 50, c++,
	dt1 << New Column( "Col",
		Numeric,
		Continuous,
		Formula(
			If( Row() == 1,
				Random Reset( 12345 );
				Random Uniform();
			,
				Random Uniform()
			)
		)
	)
);
dt1 << delete Columns( 1 );
m = dt1 << Get As Matrix();
act val = Loc( V Std( m` ) != 0 );
```

**Code Explanation**:

1. Open data table;
2. Group columns by Group1.
3. Stack selected columns into new table.
4. Retrieve column names from stacked table.
5. Close stacked table without saving.
6. Close original table without saving.
7. Create new table named Example.
8. Add 100,000 rows to Example.
9. Add numeric column Col with formula.
10. Run formulas in Example table.



### Example 2
> **Summary**: Prepares data by grouping columns, stacking selected variables, and retrieving column names from a JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataPreprocessing, #ColumnGrouping, #Stacking, #DataTableManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Group Columns( "Group1", BP 8M, 9 );
stackDt = dt << Stack(
	columns( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Source Label Column( "Day" ),
	Stacked Data Column( "BP" ),
	Output Table( "Stacked" )
);
colNames = stackDt << Get Column Names();
```

**Code Explanation**:

1. Open data table;
2. Group columns by Group1.
3. Stack selected columns.
4. Label source as Day.
5. Name stacked data as BP.
6. Output stacked table as "Stacked".
7. Retrieve column names from stacked table.



## Stack using Set Name
> **Summary**: Prepares data by opening a data table, selecting specific columns, stacking them, and converting the result to a matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataPreparation, #TableOperations, #MatrixConversion, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Set Name( "data_table" );
dt:age << Set Selected( 1 );
dt:height << Set Selected( 1 );
dt:weight << Set Selected( 1 );
dts = dt << Stack( columns( all selected columns ), output table name( "Stacked" ) );
stackMatrix = dts << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Rename table "data_table".
3. Select age column.
4. Select height column.
5. Select weight column.
6. Stack selected columns.
7. Rename stacked table "Stacked".
8. Convert stacked table to matrix.



## Stack using Log Capture
> **Summary**: Runs the opening and processing of a data table, defining variables, stacking columns, labeling source columns, and specifying output table names.

<!-- Keywords: #JSLScripting, #DataTableOperations, #LogCapture, #StackedColumns, #OutputTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
li = {weight, height};
lcap = Log Capture(
	Data Table("data_table") << Stack(
		columns( li ),
		Source Label Column( "Label" ),
		Stacked Data Column( "Data" ),
		Output Table( "foo" )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Define list of variables.
3. Start log capture.
4. Stack specified columns.
5. Label source column.
6. Name stacked data column.
7. Specify output table name.
8. Execute stack operation.
9. End log capture.
10. Store result in variable.



## Stack using Data Table
> **Summary**: Concatenates brand, softness, previous use, and temperature variables into three new columns with different formatting options.

<!-- Keywords: #JSLScriptingLanguage, #DataTransformation, #Concatenation, #CharacterType, #StackedData -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table") << Stack(
	columns(
		Transform Column(
			"Concatenate[brand,softness,previous use,temperature]",
			Character,
			Formula( :brand || :softness || :previous use || :temperature )
		),
		Transform Column(
			"Concatenate[brand,softness,previous use,temperature] 2",
			Character,
			Formula( :brand || " " || :softness || " " || :previous use || " " || :temperature )
		),
		Transform Column(
			"Concatenate[brand,softness,previous use,temperature] 2 3",
			Character,
			Formula( :brand || ", " || :softness || ", " || :previous use || ", " || :temperature )
		)
	),
	Source Label Column( "Label" ),
	Stacked Data Column( "Data" )
);
```

**Code Explanation**:

1. Open data table;
2. Select data table.
3. Begin stacking process.
4. Transform first column.
5. Define character type.
6. Use concatenation formula.
7. Transform second column.
8. Define character type.
9. Use concatenation formula with spaces.
10. Transform third column.
11. Define character type.
12. Use concatenation formula with commas.
13. Specify source label column.
14. Specify stacked data column.



