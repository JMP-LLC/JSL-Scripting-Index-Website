# Concatenate

## Concatenate using Data Table
> **Summary**: Performs principal component analysis (PCA) on variables using the 'on Correlations' option, concatenating data tables and sorting them by a specific column.

<!-- Keywords: #JMPScriptingLanguage, #PrincipalComponentAnalysis, #DataTableConcatenation, #Sorting, #Correlation -->

**Code**:
```jsl
// Concatenate
// Open data table
dt = Open("data_table.jmp");
// Concatenate
Data Table("data_table") <<
Concatenate(
	Open("data_table.jmp")
);
```

**Code Explanation**:

1. Open data table.
2. Concatenate Cancer2 data table.



### Example 1
> **Summary**: Concatenates data from two tables, Cancer2 and another table, using the Concatenate function in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ConcatenateFunction, #DataIntegration, #JMP -->

**Code**:
```jsl
// Concatenate
// Open data table
dt = Open("data_table.jmp");
// Concatenate
Open("data_table.jmp") <<
Concatenate( Data Table("data_table") );
```

**Code Explanation**:

1. Open data table Cancer2.
2. Open data table Cancer1.
3. Concatenate data_table1 data_table2.



### Example 2
> **Summary**: Concatenates and appends data tables in JMP, allowing for efficient data manipulation and analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #Concatenation, #AppendTable, #DataAnalysis -->

**Code**:
```jsl
temp1 = Open("data_table.jmp");
temp2 = Open("data_table.jmp");
temp2 << concatenate( temp1, <<append to first table );
temp3 = Open("data_table.jmp");
temp4 = Open("data_table.jmp");
temp4 << Concatenate( temp3, <<append to first table( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Concatenate temp1 to temp2.
4. Open data table;
5. Open data table;
6. Concatenate temp3 to temp4.
7. Append temp1 to temp2.
8. Append temp3 to temp4.
9. Save concatenated data.
10. Close all tables.



### Example 3
> **Summary**: Concatenates two data tables by appending one table to another, allowing for efficient data manipulation and analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #Concatenation, #AppendOperation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
newDt = dt << Concatenate( dt2, Append to first table );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Concatenate tables.
4. Append to first table.



### Example 4
> **Summary**: Concatenates a data table to create a nested structure, repeating the process up to 9 levels deep.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #Concatenation, #NestedStructure, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt1 = dt << concatenate( dt );
dt2 = dt1 << concatenate( dt1 );
dt3 = dt2 << concatenate( dt2 );
dt4 = dt3 << concatenate( dt3 );
dt5 = dt4 << concatenate( dt4 );
dt6 = dt5 << concatenate( dt5 );
dt7 = dt6 << concatenate( dt6 );
dt8 = dt7 << concatenate( dt7 );
dt9 = dt8 << concatenate( dt8 );
```

**Code Explanation**:

1. Open table.
2. Concatenate table.
3. Concatenate table.
4. Concatenate table.
5. Concatenate table.
6. Concatenate table.
7. Concatenate table.
8. Concatenate table.
9. Concatenate table.
10. Concatenate table.



## Concatenate using DOE
> **Summary**: Generates two custom design tables for mixture experiments, utilizing the DOE function to create and manipulate factors, responses, and optimality criteria. The script also concatenates the resulting tables.

<!-- Keywords: #JMPScriptingLanguage, #DOEFunction, #MixtureDesign, #CustomDesign, #DataTableManipulation -->

**Code**:
```jsl
// 
dt = DOE(
	Custom Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Add Factor( Mixture, 0, 1, "X1", 0 ),
	Add Factor( Mixture, 0, 1, "X2", 0 ),
	Add Factor( Mixture, 0, 1, "X3", 0 ),
	Set Random Seed( 2056751533 ),
	Number of Starts( 31398 ),
	Add Term( {1, 1} ),
	Add Term( {2, 1} ),
	Add Term( {3, 1} ),
	Add Term( {1, 1}, {2, 1} ),
	Add Term( {1, 1}, {3, 1} ),
	Add Term( {2, 1}, {3, 1} ),
	Set Sample Size( 6 ),
	Optimality Criterion( 1 ),
	Simulate Responses( 0 ),
	Save X Matrix( 0 ), Make Design,
	Set Run Order( Randomize ),
	Make Table}
);
dt2 = DOE(
	Mixture Design,
	{
	Add Response(
		Maximize, "Y", ., ., .
	),
	Change Factor Settings(
		1, 0, 1, "X1"
	),
	Change Factor Settings(
		2, 0, 1, "X2"
	),
	Change Factor Settings(
		3, 0, 1, "X3"
	), Set Random Seed( 2056751533 ),
	FFF Optimality Criterion( Centroid ),
	Mixture Design Type(
		Space Filling, 6
	), Simulate Responses( 0 ),
	Set Run Order( Randomize ),
	Make Table}
);
Data Table("data_table") <<
Concatenate(
	Data Table("data_table")
);
```

**Code Explanation**:

1. Create custom design table.
2. Add response variable Y.
3. Add mixture factors X1, X2, X3.
4. Set random seed.
5. Specify number of starts.
6. Add main effects terms.
7. Add interaction terms.
8. Set sample size.
9. Choose optimality criterion.
10. Simulate responses off.
11. Save X matrix off.
12. Make design.
13. Randomize run order.
14. Create table.
15. Create mixture design table.
16. Add response variable Y.
17. Change factor settings for X1, X2, X3.
18. Set random seed.
19. Choose FFF optimality criterion.
20. Set mixture design type.
21. Simulate responses off.
22. Randomize run order.
23. Make table.
24. Concatenate tables "Custom Design" and "Space Filling".



## Concatenate using New Window
> **Summary**: Creates a new window titled 'Add Data' and adds two columns with specific names, allowing for data manipulation and concatenation.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #ColumnManagement, #Concatenation, #JMP -->

**Code**:
```jsl
// New Data
New Window( "Add Data",
	H List Box(
		Button Box( "Add Col",
			Current Data Table() <<
			Add Multiple Columns(
				"Column", 2, Before First,
				numeric
			);
			Column( "Column 1 2" ) <<
			set name( "Year" );
			Column( "Column 2" ) <<
			set name( "Month" );
		),
		Button Box( "Append New Data",
			Data Table("data_table") <<
			Concatenate(
				Current Data Table(),
				Append to first table
			)
		)
	)
);
```

**Code Explanation**:

1. Create new window titled "Add Data".
2. Add horizontal list box.
3. Add button "Add Col".
4. On click, add two columns.
5. Name first column "Year".
6. Name second column "Month".
7. Add button "Append New Data".
8. On click, open "Territory Report.jmp".
9. Concatenate data from opened file.
10. Append to current data table.



## Concatenate using Select Where
### Example 1
> **Summary**: Creates subsets based on age groups and concatenates them into a new table, retrieving table script names along the way.

<!-- Keywords: #JSLScripting, #DataSubset, #TableConcatenation, #AgeGroupAnalysis, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :age == 12 );
subdt1 = dt << Subset( Output Table Name( "12 year olds" ) );
dt << Select Where( :age == 14 );
subdt2 = dt << Subset( Output Table Name( "14 year olds" ) );
dt << Select Where( :age == 13 );
subdt3 = dt << Subset( Output Table Name( "13 year olds" ) );
dt << Select Where( :age == 15 );
subdt4 = dt << Subset( Output Table Name( "15 year olds" ) );
dt << Select Where( :age == 16 );
subdt5 = dt << Subset( Output Table Name( "16 year olds" ) );
dt << Select Where( :age == 17 );
subdt6 = dt << Subset( Output Table Name( "17 year olds" ) );
newdt = subdt1 << Concatenate( subdt2, subdt3, subdt4, subdt5, subdt6 );
tableProps = subdt1 << Get Table Script Names;
Close( dt, no save );
Close( newdt, no save );
Close( subdt1, No Save );
Close( subdt2, No Save );
Close( subdt3, No Save );
Close( subdt4, No Save );
```

**Code Explanation**:

1. Open data table.
2. Select age 12 rows.
3. Subset selected rows.
4. Select age 14 rows.
5. Subset selected rows.
6. Select age 13 rows.
7. Subset selected rows.
8. Select age 15 rows.
9. Subset selected rows.
10. Select age 16 rows.
11. Subset selected rows.
12. Select age 17 rows.
13. Subset selected rows.
14. Concatenate subsets into new table.
15. Retrieve table script names.
16. Close original table without saving.
17. Close concatenated table without saving.
18. Close subset tables without saving.



### Example 2
> **Summary**: Selects and subsets data based on age groups, followed by concatenation and retrieval of table script names.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #Concatenation, #TableProperties, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :age == 12 );
subdt1 = dt << Subset( Output Table Name( "12 year olds" ) );
dt << Select Where( :age == 14 );
subdt2 = dt << Subset( Output Table Name( "14 year olds" ) );
dt << Select Where( :age == 13 );
subdt3 = dt << Subset( Output Table Name( "13 year olds" ) );
dt << Select Where( :age == 15 );
subdt4 = dt << Subset( Output Table Name( "15 year olds" ) );
dt << Select Where( :age == 16 );
subdt5 = dt << Subset( Output Table Name( "16 year olds" ) );
dt << Select Where( :age == 17 );
subdt6 = dt << Subset( Output Table Name( "17 year olds" ) );
newdt = subdt1 << Concatenate( subdt2, subdt3, subdt4, subdt5, subdt6 );
tableProps = subdt1 << Get Table Script Names;
```

**Code Explanation**:

1. Open data table.
2. Select age 12 rows.
3. Subset age 12 data.
4. Select age 14 rows.
5. Subset age 14 data.
6. Select age 13 rows.
7. Subset age 13 data.
8. Select age 15 rows.
9. Subset age 15 data.
10. Select age 16 rows.
11. Subset age 16 data.
12. Select age 17 rows.
13. Subset age 17 data.
14. Concatenate subsets.
15. Get table script names.



## Concatenate using Clear column selection
> **Summary**: Runs data processing by opening a data table, creating a subset, defining summary statistics, and performing row operations such as concatenation, selection, exclusion, hiding, and deletion.

<!-- Keywords: #JSLScriptingLanguage, #DataProcessing, #RowOperations, #SummaryStatistics, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear column selection();
dt2 = dt << Subset( Output table name( "Concat to data_table" ) );
Current Data Table();
stbl = Function( {a, b},
	Try( Close( std, No Save ) );
	sdt = dt << Summary( Group( :Sample ), Mean( :Weight ), Link to Original Data Table( 0 ) );
);
dt << subscribe( "rowadd", onAddRows( stbl ) );
Current Data Table();
dt << Concatenate( dt2, Append to First Table );
dt << Select Duplicate Rows;
exclude = dt << Exclude;
hide = dt << Hide;
rows = dt << Get excluded rows();
dt << Delete rows;
dt << Select rows( [31, 32] );
rows2 = dt << Get selected rows;
dt << Unsubscribe( "rowadd", onAddRows( stbl ) );
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table;
2. Clear column selection.
3. Create subset of original data.
4. Define function for summary statistics.
5. Subscribe to row addition event.
6. Concatenate subset to original data.
7. Select duplicate rows.
8. Exclude selected rows.
9. Hide excluded rows.
10. Delete excluded rows.
11. Select specific rows.
12. Unsubscribe from row addition event.
13. Close dataset without saving.



## Concatenate using New Column
### Example 1
> **Summary**: Fits a standard least squares model with multiple effects and generating a profiler plot using JMP's Graph Builder.

<!-- Keywords: #JMPScriptingLanguage, #GraphBuilder, #LeastSquaresModel, #ProfilerPlot, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );
dt << Distribution(
	Continuous Distribution( Column( :height ), Always use column
properties( 1 ) ),
	Column Switcher( :height, {:name, :age, :sex, :height, :weight, :example} )
);
dt:example << set selected;
dt << Delete Columns();
dt << Select Columns( :Height );
dt << Move Selected Columns( To first );
cnames = dt << Get Column Names;
Close( dt, nosave );
t1 = New Table( "table1",
	Add Rows( 10 ),
	New Column( "Column 1", Numeric, "Continuous", Format( "Best", 12 ), Formula( Random Uniform() ) ),
	New Column( "Column 2", Numeric, "Continuous", Format( "Best", 12 ), Formula( Random Uniform() ) )
);
t2 = New Table( "table2",
	Add Rows( 10 ),
	New Column( "Column 1", Numeric, "Continuous", Format( "Best", 12 ), Formula( Random Uniform() ) ),
	New Column( "Column 2", Numeric, "Continuous", Format( "Best", 12 ), Formula( Random Uniform() ) )
);
t2 << select rows( 10 );
t1 << Graph Builder(
	Variables( X( :Column 1 ), Y( :Column 2 ) ),
	Elements( Points( X, Y, Legend( 16 ) ), Smoother( X, Y, Legend( 17 ) ) ),
	Local Data Filter( Add Filter( columns( :Column 2 ), Where( :Column 2 >= 0.3 & :Column 2 <= 0.6 ) ) )
);
t1 << Concatenate( Data Table( t2 ), "Append to first table" );
rows = t1 << get selected rows;
```

**Code Explanation**:

1. Open data table.
2. Add new numeric column.
3. Create distribution analysis.
4. Set example column selected.
5. Delete all columns.
6. Select Height column.
7. Move Height to first.
8. Get column names.
9. Close table without saving.
10. Create new table 1.
11. Create new table 2.
12. Select all rows in table 2.
13. Create Graph Builder for data_table.
14. Concatenate table 2 into table 1.
15. Get selected rows from table 1.



### Example 2
> **Summary**: Runs the creation and concatenation of two data tables with formulas, while preserving column properties.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #FormulaPreservation, #Concatenation, #ColumnProperties -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt1 << New Column( "X", Formula( .205 + 100 ) );
dt1 << New Column( "Y", Formula( .254 * .546 ) );
dt2 << Concatenate( Data Table( dt2 ), Data Table( dt1 ), "Append to first table", "Keep Formulas" );
props = :X << get column properties;
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Add new column "X".
4. Set "X" formula.
5. Add new column "Y".
6. Set "Y" formula.
7. Concatenate dt1 into dt2.
8. Append to first table.
9. Keep formulas during concatenate.
10. Get column properties for "X".



## Concatenate using For Each Row
> **Summary**: Runs data table operations by opening a file, modifying batch values, setting the data type to numeric, and concatenating with another data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #NumericDataTypes, #Concatenation, #BatchValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For Each Row( dt, dt:batch = Match( dt:batch, "small", "1", "large", "2" ) );
dt:batch << Set Data Type( "Numeric" );
dt2 = Open("data_table.jmp");
dt << Concatenate( dt2, Append to first table );
```

**Code Explanation**:

1. Open data table 1;
2. For each row, replace batch values.
3. Set batch data type to numeric.
4. Open data table 2;
5. Concatenate data_table2.jmp to data_table1.jmp.



## Concatenate using Run Script
> **Summary**: Runs data processing by opening a data table, running a distribution script, concatenating tables, and setting automatic recalculation.

<!-- Keywords: #JSLScriptingLanguage, #DataProcessing, #TableManipulation, #AutomaticRecalculation, #PathDiagram -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dist = dt << Run Script( "Distribution" );
dt << Concatenate( dt, "Append to First Table" );
dist << Automatic Recalc( 1 );
```

**Code Explanation**:

1. Open data table;
2. Run Distribution script.
3. Concatenate table.
4. Set automatic recalculation on.



