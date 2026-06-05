# Sort

## Sort using Data Table
> **Summary**: Sorts the 'Shuffle' column in ascending order and outputs a sorted table, demonstrating data manipulation capabilities in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTable, #Sorting, #OutputTable, #DataManipulation -->

**Code**:
```jsl
// Source
// Open data table
dt = Open("data_table.jmp");
// Source
Data Table("data_table") << Sort(
	By( :Shuffle ),
	Order( Ascending ),
	Output Table(
		"Sort of Join of Chocolate Factory with Untitled 3 by Shuffle"
	)
);
```

**Code Explanation**:

1. Open table.
2. Sort data by "Shuffle".
3. Sort order ascending.
4. Output sorted table.



### Example 1
> **Summary**: Runs data sorting and conversion to matrix, while defining certificate vectors and matrices.

<!-- Keywords: #JSLScriptingLanguage, #DataSorting, #MatrixConversion, #CertificateDefinition, #JMPScripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
dt << Sort( By( :yield ), Order( Descending ), Replace Table );
m = dt << get as matrix;
Close( dt, No save );
cert v = [2, 2, 2, 3, 4, 4, 4, 5, 8, 9, 17, 32864, 1281, 9454, 18847, 19200];
cert m = [8.6 1, 9.2 1, 12.1 1, 18 1, 8.2 1, 10.4 1, 9.9 1, 10.6 1, 7.4 2, 16 2, 15.9 2, 10.1 2, 9.8 2, 8.2 2, 8.8 2, 8.8 2];
```

**Code Explanation**:

1. Open data table;
2. Sort by yield in descending order.
3. Replace original table with sorted data.
4. Convert sorted data to matrix.
5. Close dataset without saving.
6. Define certificate vector.
7. Define certificate matrix.



### Example 2
> **Summary**: Filters and sorts a data table to extract female students aged 14 or younger, applying color scheme 8 and row state coloring.

<!-- Keywords: #JMPScriptingLanguage, #DataTableFiltering, #Sorting, #ColorScheme, #RowState -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << select where( :sex == "F" & :age <= 14 );
dt << colors( 8 );
dt << color rows by row state;
dt << Sort( By( :name ), Order( Ascending ), Output Table( "Sort of data_table by name" ) );
```

**Code Explanation**:

1. Open data table.
2. Select female students.
3. Filter students aged 14 or younger.
4. Apply color scheme 8.
5. Color rows by selection state.
6. Sort data by name.
7. Output sorted table.



### Example 3
> **Summary**: Prepares data by sorting a table, converting it to a matrix, and defining vectors and matrices for further analysis.

<!-- Keywords: #JSLScripting, #DataPreprocessing, #MatrixOperations, #VectorDefinition, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Sort( By( :yield ), Order( Descending ), Replace Table );
m = dt << get as matrix;
Close( dt, No save );
cert v = [2, 2, 2, 3, 4, 4, 4, 5, 8, 9, 17, 32864, 1281, 9454, 18847, 19200];
cert m = [8.6 1, 9.2 1, 12.1 1, 18 1, 8.2 1, 10.4 1, 9.9 1, 10.6 1, 7.4 2, 16 2, 15.9 2, 10.1 2, 9.8 2, 8.2 2, 8.8 2, 8.8 2];
```

**Code Explanation**:

1. Open data table.
2. Sort data by yield descending.
3. Replace original table with sorted data.
4. Convert data table to matrix.
5. Close data table without saving.
6. Define vector cert v.
7. Define matrix cert m.



### Example 4
> **Summary**: Sorts a data table based on transformed columns, utilizing formulas to adjust values and ordering in ascending order.

<!-- Keywords: #JSLScriptingLanguage, #DataTableSorting, #TransformationColumns, #FormulaApplication, #AscendingOrder -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = dt1 << Sort(
	By(
		Transform Column( "-Cause Code", Formula( -:Cause Code ) ),
		Transform Column( "Abs[Time Cycles]", Formula( Abs( :Time Cycles ) ) )
	),
	Order( Ascending, Ascending )
);
```

**Code Explanation**:

1. Open data table;
2. Assign to variable `dt1`.
3. Sort data table `dt1`.
4. Use transformation column for sorting.
5. Transform `-Cause Code` using formula.
6. Transform `Abs[Time Cycles]` using formula.
7. Sort by transformed columns.
8. Order in ascending order.
9. Result assigned to `dt2`.



## Sort using New Column
### Example 1
> **Summary**: Process of creating a new column 'RS Col' and sorting a data table by this column, utilizing JMP's scripting language.

<!-- Keywords: #JSLScripting, #DataTableManipulation, #Sorting, #NewColumnCreation, #JMP -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
dt << New Column( "RS Col", Row State, Row State, Set Values( [4, 2, 4, 2, 4, 2, 5, 3, 18847, 9454, 19200, 1281, 32864, 17, 8, 9] ) );
dt << Sort( By( :RS Col ), Replace Table );
m = dt << Get as Matrix;
```

**Code Explanation**:

1. Open data table;
2. Create new column "RS Col".
3. Set values for "RS Col".
4. Sort table by "RS Col".
5. Replace original table with sorted table.
6. Convert table to matrix.



### Example 2
> **Summary**: Creates and manipulates new columns in a JMP data table, including numeric and character columns with formulas, and retrieves values from these columns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormulaGeneration, #DataRetrieval -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
dt << New Column( "Column 6", Numeric, Continuous, Format( "Best", 8 ), Formula( :age + :height ) );
dt << New Column( "Column 7", Character, Nominal, Formula( :name || :sex ) );
dt << runFormulas;
dt << Sort( By( :Column 6 ), Replace Table );
vector1 = :column 6 << Get Values;
dt << Sort( By( :Column 7 ), Replace Table );
list1 = :column 7 << Get Values;
formula1 = Char( :Column 6 << Get Formula );
formula2 = Char( :Column 7 << Get Formula );
:height[1] = 100;
:name[1] = "ZELDA";
vector1 = :column 6 << Get Values;
list1 = :column 7 << Get Values;
```

**Code Explanation**:

1. Open data table;
2. Create new numeric column "Column 6".
3. Define formula for "Column 6".
4. Create new character column "Column 7".
5. Define formula for "Column 7".
6. Run all formulas in dataset.
7. Sort table by "Column 6".
8. Retrieve values from "Column 6".
9. Sort table by "Column 7".
10. Retrieve values from "Column 7".



### Example 3
> **Summary**: Creates a summary report with grouped data, calculating sums and means for 'height' and 'weight', and sorting by row count in descending order.

<!-- Keywords: #JSLScriptingLanguage, #DataSummary, #Sorting, #Grouping, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "age2",
	Numeric,
	Ordinal,
	Format( "Fixed Dec", Use thousands separator, 5, 0 ),
	List Check( {12, 13, 14, 15, 16, 17} ),
	Set Values(
		[12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15,
		15, 16, 16, 16, 17, 17, 17]
	)
);
dtsum = dt << Summary( Group( :age2 ), Sum( :height ), Mean( :weight ), output table name( "SummaryOutput" ) );
dtsort = dtsum << Sort( By( :N Rows ), Order( Descending ), Output Table( "crash" ) );
Close( dtsort, nosave );
```

**Code Explanation**:

1. Open data table.
2. Create new column "age2".
3. Define column properties.
4. Set column values.
5. Generate summary report.
6. Group by age2.
7. Summarize height and weight.
8. Name output table.
9. Sort by row count descending.
10. Close sorted table without saving.



### Example 4
> **Summary**: Creates a summary table with grouped data, summarized height and weight, and named 'SummaryOutput', using JMP's scripting language.

<!-- Keywords: #JSLScripting, #DataSummary, #TableManipulation, #GroupBy, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "age2",
	Numeric,
	Ordinal,
	Format( "Fixed Dec", Use thousands separator, 5, 0 ),
	List Check( {12, 13, 14, 15, 16, 17} ),
	Set Values(
		[12, 12, 12, 12, 12, 12, 12, 12, 13, 13, 13, 13, 13, 13, 13, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 15, 15, 15, 15, 15, 15,
		15, 16, 16, 16, 17, 17, 17]
	)
);
dtsum = dt << Summary( Group( :age2 ), Sum( :height ), Mean( :weight ), output table name( "SummaryOutput" ) );
dtsort = dtsum << Sort( By( :N Rows ), Order( Descending ), Output Table( "crash" ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column "age2".
3. Define "age2" as numeric and ordinal.
4. Set format for "age2".
5. Define valid values for "age2".
6. Assign values to "age2".
7. Create summary table.
8. Group by "age2".
9. Summarize height and weight.
10. Name summary table "SummaryOutput".



### Example 5
> **Summary**: Process of sorting a data table by a new column and retrieving its values, converting it to a matrix for further analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #MatrixConversion, #Sorting, #ColumnRetrieval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "RS Col", Row State, Row State, Set Values( [4, 2, 4, 2, 4, 2, 5, 3, 18847, 9454, 19200, 1281, 32864, 17, 8, 9] ) );
dt << Sort( By( :RS Col ), Replace Table );
m = dt << Get as Matrix;
v = :RS Col << Get Values;
```

**Code Explanation**:

1. Open data table.
2. Add new column "RS Col".
3. Set values for "RS Col".
4. Sort data table by "RS Col".
5. Replace original table with sorted table.
6. Convert data table to matrix.
7. Retrieve values from "RS Col".



### Example 6
> **Summary**: Creates and manipulates new columns in a JMP data table, including numeric and character columns with formulas, and retrieves sorted values from these columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormulaGeneration, #Sorting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Column 6", Numeric, Continuous, Format( "Best", 8 ), Formula( :age + :height ) );
dt << New Column( "Column 7", Character, Nominal, Formula( :name || :sex ) );
dt << runFormulas;
dt << Sort( By( :Column 6 ), Replace Table );
vector1 = :column 6 << Get Values;
dt << Sort( By( :Column 7 ), Replace Table );
list1 = :column 7 << Get Values;
formula1 = Char( :Column 6 << Get Formula );
formula2 = Char( :Column 7 << Get Formula );
:height[1] = 100;
:name[1] = "ZELDA";
vector1 = :column 6 << Get Values;
list1 = :column 7 << Get Values;
```

**Code Explanation**:

1. Open data table.
2. Create new numeric column.
3. Create new character column.
4. Run column formulas.
5. Sort table by numeric column.
6. Retrieve sorted values from numeric column.
7. Sort table by character column.
8. Retrieve sorted values from character column.
9. Get formula for numeric column.
10. Get formula for character column.
11. Modify height value.
12. Modify name value.
13. Retrieve updated values from numeric column.
14. Retrieve updated values from character column.



### Example 7
> **Summary**: Runs the Wilcoxon Signed Rank Test with Pratt Option to analyze SO2 values, generating a table with scaled and transformed data.

<!-- Keywords: #WilcoxonSignedRankTest, #PrattOption, #DataTransformation, #JSLScripting, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
row = dt << getrowswhere( :SO2 >= 0 );
chem = :SO2[row];
dt1 = New Table( "Wilcoxon Signed Rank Test, Pratt Option", New Column( "SO2", Numeric, Continuous, Set Values( chem * 1000 ) ) );
dt1 << New Column( "diff", Numeric, Continuous, Formula( :SO2 - 0.052 * 1000 ) );
dt1 << New Column( "absDiff", Numeric, Continuous, Formula( Abs( :diff ) ) );
dt1 << sort( replace table, by( absDiff ), order( ascending ) );
dt1 << New Column( "sign", Numeric, Continous, Formula( If( :diff == 0, 0, :diff / :absdiff ) ) );
dt1 << New Column( "unsignedRank", Numeric, Continous );
map = Associative Array( dt1:absDiff );
uniqueAbsDiff = map << getkeys;
len = Length( uniqueAbsDiff );
For( j = 1, j <= len, j++,
	value = uniqueAbsDiff[j];
	row = dt1 << getrowswhere( :absDiff == value );
	map[value] = N Row( row );
	newrank = (Min( row ) + Max( row )) / 2;
	:unsignedRank[row] = newrank;
);
dt1 << New Column( "signRank", Numeric, Countinous, Formula( :sign * :unsignedRank ) );
posIndex = dt1 << getrowswhere( :signRank > 0 );
```

**Code Explanation**:

1. Open data table.
2. Filter rows where SO2 >= 0.
3. Extract SO2 values.
4. Create new table for analysis.
5. Add SO2 column with scaled values.
6. Add diff column with formula.
7. Add absDiff column with formula.
8. Sort table by absDiff.
9. Add sign column with formula.
10. Add unsignedRank column.



## Sort using Delete Rows
> **Summary**: Process of filtering a data table, selecting rows where age is less than 14, and extracting the selected column as a matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #Filtering, #MatrixExtraction, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( 21 :: 40 );
dt << Select Where( :age < 14 );
dt << Name Selection in Column( Column Name( "Younger" ), Selected( 1 ), unselected( 0 ) );
m = dt:Younger << Get As Matrix();
Close( dt, nosave );
certscpt =
"New Table(\!"MySortedTable\!", Add Rows(3), New Script(\!"Source\!", Data Table(\!"MyTable\!") << Sort(By(:c1), Order(Descending), Output Table(\!"MySortedTable\!"))), New Column(\!"c1\!", Numeric, \!"Continuous\!", Format(\!"Best\!", 12), Set Property(\!"Notes\!", \!"numeric column\!"), Set Values([3, 2, 1])), New Column(\!"c2\!", Character, \!"Nominal\!", Set Property(\!"Notes\!", \!"character column\!"), Set Values({\!"c\!", \!"b\!", \!"a\!"})))";
dt = New Table( "MyTable",
	Add Rows( 3 ),
	New Column( "c1", Numeric, Continuous, Format( "Best", 12 ), Set Property( "Notes", "numeric column" ), Set Values( [1, 2, 3] ) ),
	New Column( "c2", Character, Nominal, Set Property( "Notes", "character column" ), Set Values( {"a", "b", "c"} ) )
);
dt2 = dt << Sort( By( :c1 ), Order( Descending ), Output Table( "MySortedTable" ) );
myscript = dt2 << get script();
charscpt = Char( Name Expr( myscript ) );
Close( dt2, nosave );
Close( dt, nosave );
rick = [1 1 1 54, 1 1 2 37, 1 2 1 49, 1 2 2 31];
```

**Code Explanation**:

1. Open data table.
2. Delete rows 21-40.
3. Select rows where age < 14.
4. Name selected rows "Younger".
5. Extract "Younger" column as matrix.
6. Close original data table.
7. Define script for new table creation.
8. Create new data table "MyTable".
9. Sort "MyTable" by column c1 descending.
10. Save sort script and close tables.



## Sort using Set Property
### Example 1
> **Summary**: Creates a new table with formatted date columns and stacks these columns to generate a matrix.

<!-- Keywords: #JSLScriptingLanguage, #TableOperations, #MatrixGeneration, #DateFormatting, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:age << Set Property( "Value Ordering", {17, 16, 13, 12} );
dt << Sort( by( age ), Replace Table );
v = dt:age << Get Values;
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
3. Sort table by age.
4. Get age values.
5. Close original table.
6. Define matrix cert m.
7. Create new table mytab.
8. Add rows to new table.
9. Add columns to new table.
10. Stack columns in new table.



### Example 2
> **Summary**: Runs the sorting and reordering of a data table by age, replacing the original table with the sorted values.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #Sorting, #Reordering, #TableReplacement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:age << Set Property( "Value Ordering", {17, 16, 13, 12} );
dt << Sort( by( age ), Replace Table );
v = dt:age << Get Values;
```

**Code Explanation**:

1. Open data table.
2. Set age value ordering.
3. Sort table by age.
4. Replace original table.
5. Retrieve age values.



## Sort using Summary
### Example 1
> **Summary**: Process of summarizing data by species and sorting it by the sum of miles, generating a sorted output table.

<!-- Keywords: #JSLScriptingLanguage, #DataSummary, #TableSorting, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsum = dt << Summary( Group( :species ), Sum( :miles ), output table name( "AnimalsSummaryOutput" ) );
dtsort = dtsum << Sort( By( Column( "Sum(miles)" ) ), Order( Ascending ), Output Table( "AnimalsSortOutput" ) );
Close( dtsort, nosave );
```

**Code Explanation**:

1. Open data table;
2. Create summary table.
3. Sum miles by species.
4. Name summary table.
5. Sort summary table.
6. Sort by sum of miles.
7. Order in ascending.
8. Output sorted table.
9. Close sorted table.
10. Do not save.



### Example 2
> **Summary**: Creates a summary table by species, summing miles and sorting the output in ascending order.

<!-- Keywords: #JSLScripting, #SummaryTable, #Sorting, #DataAnalysis, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsum = dt << Summary( Group( :species ), Sum( :miles ), output table name( "AnimalsSummaryOutput" ) );
dtsort = dtsum << Sort( By( Column( "Sum(miles)" ) ), Order( Ascending ), Output Table( "AnimalsSortOutput" ) );
```

**Code Explanation**:

1. Open data table;
2. Create summary table by species.
3. Sum miles for each species.
4. Name summary table "AnimalsSummaryOutput".
5. Sort summary table by sum of miles.
6. Sort order is ascending.
7. Name sorted table "AnimalsSortOutput".



## Sort using Rename Table Script
> **Summary**: Runs data table operations, including renaming a script, running the renamed script, creating a new table with specific columns and values, and sorting the table by a column.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TableCreation, #ColumnManagement, #Sorting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Rename Table Script( "Distribution", "Bivariate\X" );
dt << Run Script( "Bivariate\X" );
Close( dt, nosave );
dt = New Table( "mytab1",
	Add Rows( 8 ),
	New Column( "c1", Numeric, Continuous, Format( "Best", 12 ), Set Values( [5, 2, 1, 3, 4, 53, 4, 2] ) ),
	New Column( "c2", Numeric, Nominal, Format( "Best", 12 ), Formula( Row() ) )
);
dt << Sort( by( c1 ), replace table );
```

**Code Explanation**:

1. Open data table;
2. Rename script "Distribution" to "BivariateX".
3. Run renamed "BivariateX" script.
4. Close dataset without saving.
5. Create new table "mytab1".
6. Add 8 rows to table.
7. Add numeric column "c1" with continuous data.
8. Set values for column "c1".
9. Add nominal column "c2" with formula.
10. Sort table by column "c1".



## Sort using Control Chart
### Example 1
> **Summary**: Creates and configures control charts for Grade, utilizing data sorting, selection, and deletion, as well as customization of phase variables, group sizes, and KSigma settings.

<!-- Keywords: #JSLScriptingLanguage, #ControlChart, #DataManipulation, #CustomizationOptions, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsorted = dt << sort( by( :Money ) );
dtsorted << select rows( {1, 2} );
dtsorted << delete rows;
obj = dtsorted << Control Chart(
	Phase( :Money ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:Grade,
		Individual Measurement(
			Show Zones( 1 ),
			Rule 10 X( 1 ),
			Phase Level( "1" ),
			Phase Level( "2" ),
			Phase Level( "3" ),
			Phase Level( "4" )
		)
	)
);
rpt = obj << report;
obj << Rule 10 X( 0 );
obj << Test 2( 1 );
rpt = obj << report;
obj = dtsorted << Control Chart(
	Phase( :Money ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:Grade,
		Individual Measurement( Test 8( 1 ), Phase Level( "1" ), Phase Level( "2" ), Phase Level( "3" ), Phase Level( "4" ) )
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open table.
2. Sort data by Money.
3. Select first two rows.
4. Delete selected rows.
5. Create control chart for Grade.
6. Set phase variable to Money.
7. Set group size to 1.
8. Set KSigma to 3.
9. Enable Rule 10 X for phases 1-4.
10. Disable Rule 10 X.
11. Enable Test 2.
12. Create new control chart with Test 8 for phases 1-4.



### Example 2
> **Summary**: Creates a control chart for NPN1 measurements across sites, with individual measurement tests applied and K Sigma set to 3.

<!-- Keywords: #ControlChart, #JMPScriptingLanguage, #QualityControl, #ProcessMonitoring, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsorted = dt << sort( by( :SITE ) );
obj = dtsorted << Control Chart(
	Phase( :SITE ),
	Group Size( 1 ),
	KSigma( 3 ),
	Chart Col(
		:NPN1,
		Individual Measurement(
			Test 7( 1 ),
			Phase Level( "1" ),
			Phase Level( "2" ),
			Phase Level( "3" ),
			Phase Level( "4" ),
			Phase Level( "5" )
		)
	)
);
rpt = obj << report;
```

**Code Explanation**:

1. Open data table.
2. Sort data by site.
3. Create control chart object.
4. Set phase by site.
5. Define group size as 1.
6. Set K Sigma to 3.
7. Add chart column for NPN1.
8. Apply individual measurement test.
9. Specify test 7 with level 1.
10. Specify test 7 with levels 2-5.



## Sort using Column
> **Summary**: Runs recoding and sorting operations on a data table, utilizing the Recode platform to transform values and generate new columns.

<!-- Keywords: #JMPRecode, #DataTransformation, #Sorting, #ColumnManagement, #Scripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
Column( dt1, "Sports" ) << set selected;
recodeobj = (dt1 << Recode( "Return" ))[1];
recodeobj << Change Value( "Soccer", "Snowboarding" );
recodeobj << GetNewDataCol();
recodeobj << Set sort by( "NewValues", 1 );
recodeobj << view groups( 1 );
recodeobj << Save Recode;
list1 = :Sports 2 << Get as matrix;
dt1 << Clear column selection;
Preferences( Recode Initial sort( 2 ) );
Column( dt1, "Family cars" ) << set selected;
recodeobj = (dt1 << Recode( "Return" ))[1];
recodeobj << Convert to Uppercase();
recodeobj << Set sort by( "OldValues", 0 );
list2 = recodeobj << GetNewDataCol();
recodeobj << Save Recode;
dt1 << Clear column selection;
```

**Code Explanation**:

1. Open data table.
2. Select "Sports" column.
3. Initiate recode operation.
4. Change "Soccer" to "Snowboarding".
5. Retrieve new data column.
6. Sort by new values.
7. View groups.
8. Save recode changes.
9. Extract "Sports 2" as matrix.
10. Clear column selection.
11. Set recode initial sort preference.
12. Select "Family cars" column.
13. Initiate recode operation.
14. Convert to uppercase.
15. Sort by old values.
16. Retrieve new data column.
17. Save recode changes.
18. Clear column selection.



