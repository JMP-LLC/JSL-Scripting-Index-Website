# Summary

### Example 1
> **Summary**: Generates a summary report by grouping data by Wafer ID, Cluster By Layout, and Layout, with frequency set to 'None' and weight set to 'None'.

<!-- Keywords: #JMPScriptingLanguage, #SummaryReport, #GroupingData, #FrequencyNone, #WeightNone -->

**Code**:
```jsl
// Generate A Lookup Table
Summary(
	Group(
		:Wafer ID, :Cluster By Layout,
		:Layout
	),
	Freq( "None" ),
	Weight( "None" )
);
```

**Code Explanation**:

1. Generate summary report.
2. Group by Wafer ID.
3. Group by Cluster By Layout.
4. Group by Layout.
5. Set frequency to none.
6. Set weight to none.



### Example 2
> **Summary**: Creates a summary table from a data table, grouping by age and calculating mean height, while also generating a histogram for height. The script adjusts cell height and display width for better visualization.

<!-- Keywords: #JSLScripting, #SummaryTable, #Histogram, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary(
	Group( :age ),
	Mean( :height ),
	Histogram( :height ),
	Freq( "None" ),
	Weight( "None" ),
	Link to original data table( 0 )
);
sumdt << Set Cell Height( 50 );
sumdt:"Histogram(height)"n << Set Display Width( 200 );
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table;
2. Create summary table.
3. Group by age.
4. Calculate mean height.
5. Generate histogram for height.
6. Disable frequency calculation.
7. Disable weight calculation.
8. Unlink from original table.
9. Adjust cell height.
10. Adjust histogram display width.
11. Close original table without saving.



### Example 3
> **Summary**: Opens a data table, replaces height values with missing, and summarizes the data by age, calculating mean height, creating a histogram of height, and removing frequency and weight columns. The script also sets cell height and display width for the summary output.

<!-- Keywords: #JMPScriptingLanguage, #DataSummary, #Histogram, #MeanCalculation, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height[38] = .;
dt:height[39] = .;
dt:height[40] = .;
sumDt = dt << Summary(
	Group( :age ),
	Mean( :height ),
	Histogram( :height ),
	Freq( "None" ),
	Weight( "None" ),
	Link to original data table( 0 )
);
sumdt << Set Cell Height( 50 );
sumdt:"Histogram(height)"n << Set Display Width( 200 );
```

**Code Explanation**:

1. Open data table.
2. Replace height values with missing.
3. Summarize data by age.
4. Calculate mean height.
5. Create histogram of height.
6. Remove frequency column.
7. Remove weight column.
8. Unlink from original data.
9. Increase cell height.
10. Adjust histogram display width.



### Example 4
> **Summary**: Opens a data table, sets specific rows to missing, and generates a summary table with mean height, histogram, and frequency information grouped by age.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #SummaryStatistics, #Histogram, #GroupBy -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:height[38] = .;
dt:height[39] = .;
dt:height[40] = .;
sumDt = dt << Summary(
	Group( :age ),
	Mean( :height ),
	Histogram( :height ),
	Freq( "None" ),
	Weight( "None" ),
	Link to original data table( 0 )
);
sumdt << Set Cell Height( 50 );
sumdt:"Histogram(height)"n << Set Display Width( 200 );
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table.
2. Set height for rows 38-40 to missing.
3. Create summary table.
4. Group by age.
5. Calculate mean height.
6. Generate histogram for height.
7. Set frequency to none.
8. Set weight to none.
9. Do not link to original data table.
10. Close original data table without saving.



### Example 5
> **Summary**: Opens a data table, creates a summary data table with histograms for age, height, and weight, sets frequency and weight to none, and adjusts the display width of the height histogram.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #Histograms, #SummaryDataTables, #DisplayCustomization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary(
	Histogram( :age ),
	Histogram( :height ),
	Histogram( :weight ),
	Freq( "None" ),
	Weight( "None" ),
	Link to original data table( 0 )
);
sumdt << Set Cell Height( 50 );
sumdt:"Histogram(height)"n << Set Display Width( 200 );
```

**Code Explanation**:

1. Open data table.
2. Create summary data table.
3. Add age histogram.
4. Add height histogram.
5. Add weight histogram.
6. Set frequency to none.
7. Set weight to none.
8. Unlink from original table.
9. Set cell height.
10. Adjust height histogram display width.



### Example 6
> **Summary**: Creates a summary table with histograms for age, height, and weight, while disabling frequency count and weighting, and adjusting display settings.

<!-- Keywords: #JSLScriptingLanguage, #SummaryTable, #Histograms, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary(
	Histogram( :age ),
	Histogram( :height ),
	Histogram( :weight ),
	Freq( "None" ),
	Weight( "None" ),
	Link to original data table( 0 )
);
sumdt << Set Cell Height( 50 );
sumdt:"Histogram(height)"n << Set Display Width( 200 );
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table;
2. Create summary table.
3. Add age histogram.
4. Add height histogram.
5. Add weight histogram.
6. Disable frequency count.
7. Disable weighting.
8. Unlink from original table.
9. Set cell height.
10. Adjust height histogram width.
11. Close original dataset without saving.



### Example 7
> **Summary**: Opens a data table and generates a summary of the data by age, displaying frequency counts without weights.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SummaryStatistics, #ByGroupAnalysis, #JMPScripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Summary( N, Subgroup( :age ), Freq( "None" ), Weight( "None" ) );
```

**Code Explanation**:

1. Open data table.
2. Summarize data by age.



### Example 8
> **Summary**: Runs the creation and renaming of a summary table by age, utilizing the Summary platform in JMP.

<!-- Keywords: #JMPScriptingLanguage, #Summary, #DataTableManipulation, #RowState, #ColumnFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tabname = "Summary of New";
dt2 = dt << Summary( Group( :age ), Sum( :weight ), output table name( tabname ) );
n = dt2 << Get Name;
Close( dt2, nosave );
Close( dt, nosave );
cert v = [., 1, 6, 7, 8, 9, 10, 11, 12, 13, 2, 3, 4, 5];
dt = New Table( "myTest",
	Add Rows( 14 ),
	New Column( "Col1", Row State, Row State, Set Values( [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13] ) ),
	New Column( "Col2", Numeric, Continuous, Format( "Best", 12 ), Formula( Col Rank( :Col1 ) ) )
);
v = :Col2 << Get Values;
Close( dt, nosave );
cert m = [3334608000 3 2 5,
3334608000 5 1 2,
3334608000 6 1 1,
3334608000 7 2 9,
3334694400 2 1 2,
3334694400 3 2 6,
3334694400 4 2 1,
3334694400 5 1 4,
3334694400 7 2 10,
3334694400 9 2 1,
3334780800 1 2 1,
3334780800 2 1 2,
3334780800 3 2 9,
3334780800 5 1 3,
3334780800 7 2 12,
3334780800 8 2 1,
3334780800 9 1 1,
3334780800 9 2 1,
3334867200 2 1 3,
3334867200 3 2 9,
3334867200 4 2 2,
3334867200 5 1 3,
3334867200 6 1 1,
3334867200 7 2 10,
3334867200 9 1 1];
```

**Code Explanation**:

1. Open data table;
2. Create summary table by age.
3. Rename summary table.
4. Close summary table without saving.
5. Close original table without saving.
6. Define certification vector.
7. Create new table "myTest".
8. Add rows to new table.
9. Add "Col1" with row states.
10. Add "Col2" with formula for ranking.



### Example 9
> **Summary**: Creates a summary table by grouping data by age and summing weights, utilizing JMP's built-in Summary platform.

<!-- Keywords: #JMPScriptingLanguage, #Summary, #DataTableOperations, #GroupingData, #WeightSummation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tabname = "Summary of New";
dt2 = dt << Summary( Group( :age ), Sum( :weight ), output table name( tabname ) );
n = dt2 << Get Name;
```

**Code Explanation**:

1. Open data table.
2. Define new table name.
3. Create summary table.
4. Group by age.
5. Sum weights.
6. Assign output table name.
7. Store summary table reference.
8. Retrieve table name.



### Example 10
> **Summary**: Runs data summarization and retrieval for a specified player dataset, utilizing JMP's Summary platform to generate mean counts and sort by ascending or descending order.

<!-- Keywords: #JMPScriptingLanguage, #DataSummarization, #Summary, #AscendingOrder, #DescendingOrder -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsum = dt << Summary( Group( :player ), Mean( :count ) );
sum1 = dtsum:player << get values;
Close( dtsum, nosave );
dtsum = dt << Summary( Group( :player ), order( ascending ), Mean( :count ) );
sum2 = dtsum:player << get values;
Close( dtsum, nosave );
cert sum = {"Rick Robey", "Larry Bird"};
dtsum = dt << Summary( Group( :player ), order( descending ), Mean( :count ) );
sum3 = dtsum:player << get values;
```

**Code Explanation**:

1. Open data table.
2. Summarize data by player.
3. Retrieve player names from summary.
4. Close summary data table without saving.
5. Summarize data by player in ascending order.
6. Retrieve player names from summary.
7. Close summary data table without saving.
8. Define certified players list.
9. Summarize data by player in descending order.
10. Retrieve player names from summary.



### Example 11
> **Summary**: Creates a summary table by grouping data by sex and age, naming the output table with a dynamic date variable.

<!-- Keywords: #JSLScripting, #DataSummary, #GroupBy, #DynamicOutput, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dateNew = "03-22-2010";
dtsum = dt << Summary( Group( :sex, :age ), Output Table Name( "CTS OTD-P Summary - " || datenew ) );
n = dtsum << get name;
```

**Code Explanation**:

1. Open data table;
2. Define dateNew variable.
3. Create summary table.
4. Group by sex and age.
5. Name output table.
6. Assign summary table name to n.



### Example 12
> **Summary**: Runs the calculation and extraction of mean counts for each player in a data table, utilizing Summary and Group functions.

<!-- Keywords: #JSLScripting, #DataAnalysis, #SummaryTable, #GroupBy, #MeanFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsum = dt << Summary( Group( :player ), Mean( :count ) );
sum1 = dtsum:player << get values;
```

**Code Explanation**:

1. Open data table;
2. Create summary table by player.
3. Calculate mean of count for each player.
4. Extract player values from summary table.



### Example 13
> **Summary**: Runs data summarization by grouping 'end time' and calculating the count of unique values, providing an interactive summary of the grouped data.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #GroupBy, #CountUniqueValues, #InteractiveSummary -->

**Code**:
```jsl
dt = Open("data_table.jmp");
summdt = dt << Summary( Group( :end time ), N( :end time ) );
```

**Code Explanation**:

1. Open data table.
2. Summarize data by group.



### Example 14
> **Summary**: Runs data summarization and row deletion by grouping and aggregating values, then removing the first row from the summary.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #RowDeletion, #Grouping, #Aggregation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
summDt = dt << Summary( Group( 4 ), N( 4 ) );
summDt << Delete Rows( 1 );
```

**Code Explanation**:

1. Open data table.
2. Summarize data by groups.
3. Delete first row from summary.



### Example 15
> **Summary**: Creates a summary table by grouping data by age and sex, calculating mean height, and including marginal statistics.

<!-- Keywords: #JMPScriptingLanguage, #SummaryTable, #DataAnalysis, #GroupBy, #MeanStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary( Group( :age, :sex ), Mean( :height ), Include marginal statistics );
```

**Code Explanation**:

1. Open data table.
2. Create summary table.
3. Group by age and sex.
4. Calculate mean height.
5. Include marginal statistics.



### Example 16
> **Summary**: Visualizes and summarizes data by age, generating a matrix of mean height, weight, maximum height, and minimum weight for each group.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #Visualization, #MatrixOperations, #JMP -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
certstat4 = [12 8 58.125 99 66 64,
13 7 60.2857142857143 94.7142857142857 65 67,
14 12 64.1666666666667 100.833333333333 69 81,
15 7 64.5714285714286 108.285714285714 67 92,
16 3 64.3333333333333 118.333333333333 68 112,
17 3 66.6666666666667 140.666666666667 70 116];
sumDt4 = dt2 << Summary(
	Group( :age ),
	Mean( :height, weight ),
	Max( :height ),
	Min( :weight ),
	statistics column name format( "stat of column" ),
	output table name( "Height-Weight Chart" )
);
ut_stat4 = sumDt4 << get as matrix;
Close( sumDt4, NoSave );
Close( dt2, NoSave );
certnrow = [1, 1, 1, 2];
dt3 = New Table( "List Check Bug",
	Add Rows( 5 ),
	New Column( "Column 1", Character, Nominal, Width( 10 ), Set Values( {"b", "c", "d", "a", "a"} ), List Check( {"d", "c", "b", "a"} ) )
);
sumDt5 = dt3 << Summary( Group( :Column 1 ) );
ut_nrow = sumDt5 << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Define `certstat4` matrix.
3. Summarize data by age.
4. Convert summary to matrix.
5. Close summary table without saving.
6. Close original data table without saving.
7. Define `certnrow` list.
8. Create new table `List Check Bug`.
9. Summarize new table by column.
10. Convert summary to matrix.



### Example 17
> **Summary**: Runs data summarization and row selection in a JMP data table, utilizing the Summary platform to group by age and calculate means of height.

<!-- Keywords: #JMPScriptingLanguage, #DataSummarization, #RowSelection, #Summary, #JMPDataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = dt << Summary( Group( :age ), Mean( :height ), );
dt2 << Clear Select;
dt2 << Select Rows( [4] );
r = dt << Get Selected Rows;
certr = [28, 29, 30, 31, 32, 33, 34];
dt2 << Clear Select;
r = dt << Get Selected Rows;
certr = J( 0, 1, . );
Close( dt2, nosave );
dt2 = dt << Summary( Group( :age ), Mean( :height ), Link to original data table( 0 ) );
dt2 << Select Rows( [4] );
r = dt2 << Get Selected Rows;
certr = [4];
r = dt << Get Selected Rows;
certr = J( 0, 1, . );
```

**Code Explanation**:

1. Open data table.
2. Create summary table by age.
3. Clear row selection in summary.
4. Select row 4 in summary.
5. Get selected rows from original.
6. Initialize array certr.
7. Clear row selection in summary.
8. Get selected rows from original again.
9. Reset certr array.
10. Close summary table without saving.



### Example 18
> **Summary**: Creates a summary data table from 'data_table.jmp', grouping by age, calculating percentage of total for height, counting missing values and unique categories in height, and sub-grouping by sex and height.

<!-- Keywords: #JSLScript, #SummaryDataTable, #DataTableOperations, #Grouping, #Subgrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary(
	Group( :age ),
	Name( "% of Total" )(:height),
	N Missing( :height ),
	N Categories( :height ),
	Subgroup( :sex, :height )
);
```

**Code Explanation**:

1. Open data table.
2. Create summary data table.
3. Group by age.
4. Calculate % of Total for height.
5. Count missing values in height.
6. Count unique categories in height.
7. Subgroup by sex and height.



### Example 19
> **Summary**: Runs data summarization and category counting for variables in a JMP data table, converting the summary to a matrix.

<!-- Keywords: #JMPScriptingLanguage, #DataSummarization, #CategoryCounting, #MatrixConversion, #DataTableOperations -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary( N Categories( :name, :height, :age, :sex ) );
rowVector = sumDt << Get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create summary table.
3. Count categories for variables.
4. Convert summary to matrix.



### Example 20
> **Summary**: Creates a summary table by age, counting height categories and grouping by sex, from an open data table.

<!-- Keywords: #JSLScriptingLanguage, #SummaryTable, #DataTableOperations, #Grouping, #MatrixRetrieval -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary( Group( :age ), N Categories( :height ), Subgroup( :sex ) );
rowMatrix = sumDt << Get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create summary table by age.
3. Count height categories.
4. Group by sex.
5. Retrieve summary table as matrix.



### Example 21
> **Summary**: Creates a summary table by grouping data based on specified columns, utilizing JMP's built-in Summary platform.

<!-- Keywords: #JMPScriptingLanguage, #Summary, #DataGrouping, #ColumnDefinition, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
cols = {:age, :sex};
sumDt = dt << Summary( Group( cols ) );
```

**Code Explanation**:

1. Open data table.
2. Define columns for summary.
3. Create summary table by grouping.



### Example 22
> **Summary**: Creates a summary data table by grouping and sub-grouping data from a specified data table, utilizing the Group and Subgroup functions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #GroupBy, #Subgrouping, #SummaryStatistics -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grpList = {:region, :state};
subgrpList = {:city};
sumDt = dt << Summary( Group( grpList ), Subgroup( subgrpList ) );
```

**Code Explanation**:

1. Open data table;
2. Define `grpList` with :region, :state.
3. Define `subgrpList` with :city.
4. Create summary data table.
5. Group by `grpList`.
6. Subgroup by `subgrpList`.



### Example 23
> **Summary**: Creates a summary table by grouping and sub-grouping data from an open JMP data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #GroupingandSubgrouping, #SummaryTableGeneration, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
grpList = {};
subgrpList = {};
sumDt = dt << Summary( Group( grpList ), Subgroup( subgrpList ) );
```

**Code Explanation**:

1. Open data table.
2. Initialize group list.
3. Initialize subgroup list.
4. Create summary table.



### Example 24
> **Summary**: Creates a summary table by transforming and grouping data from an open JMP data table, while disabling linking to the original table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SummaryTables, #DataTransformation, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
sumDt = dt << Summary( Group( Transform Column( "Log[height]", Formula( Log( :height ) ) ) ), Link to original data table( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Create summary table.
3. Transform height column.
4. Apply log formula.
5. Group by transformed height.
6. Disable linking to original table.



### Example 25
> **Summary**: Creates a summary table grouped by the first letter of the 'sex' column, utilizing the `Summary` and `Group` functions.

<!-- Keywords: #JSLScripting, #DataManipulation, #TableSummary, #ColumnTransformation, #Grouping -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = dt1 << Summary( Group( Transform Column( "FirstLetter", Character, Formula( Word( 1, :sex ) ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create summary table.
3. Group by first letter of sex.



### Example 26
> **Summary**: Creates a summary table from a data table, grouping by age and calculating mean height and weight, maximum height, and minimum weight.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #SummaryStatistics, #GroupBy, #MatrixOutput -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
certstat4 = [12 8 58.125 99 66 64,
13 7 60.2857142857143 94.7142857142857 65 67,
14 12 64.1666666666667 100.833333333333 69 81,
15 7 64.5714285714286 108.285714285714 67 92,
16 3 64.3333333333333 118.333333333333 68 112,
17 3 66.6666666666667 140.666666666667 70 116];
sumDt4 = dt2 << Summary(
	Group( :age ),
	Mean( :height, weight ),
	Max( :height ),
	Min( :weight ),
	statistics column name format( "stat of column" ),
	output table name( "Height-Weight Chart" )
);
ut_stat4 = sumDt4 << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Define `certstat4` matrix.
3. Create summary table.
4. Group by age.
5. Calculate mean height and weight.
6. Find max height.
7. Find min weight.
8. Set statistics column names.
9. Name output table.
10. Convert summary table to matrix.



### Example 27
> **Summary**: Runs data processing by opening a data table, creating a summary table with grouped means, selecting specific rows, and defining central ranges.

<!-- Keywords: #JSLScripting, #DataProcessing, #SummaryTable, #RowSelection, #CentralRange -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = dt << Summary( Group( :age ), Mean( :height ), );
dt2 << Clear Select;
dt2 << Select Rows( [4] );
r = dt << Get Selected Rows;
certr = [28, 29, 30, 31, 32, 33, 34];
dt2 << Clear Select;
r = dt << Get Selected Rows;
certr = J( 0, 1, . );
```

**Code Explanation**:

1. Open data table.
2. Create summary table.
3. Clear selection in summary table.
4. Select specific row in summary table.
5. Get selected rows from original table.
6. Define central range.
7. Clear selection in summary table again.
8. Get selected rows from original table again.
9. Define central range as matrix.



### Example 28
> **Summary**: Creates a summary table grouped by year from date, extracting year values into a matrix.

<!-- Keywords: #JSLScripting, #SummaryTable, #GroupBy, #MatrixOperation, #DateTransformation -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
dt4 = dt3 << Summary( Group( Transform Column( "Year", Formula( Year( :Date ) ) ) ) );
vals = dt4:year 2 << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create summary table.
3. Group by year from date.
4. Extract year values into matrix.



### Example 29
> **Summary**: Runs data summarization and table management by opening a data table, calculating means and frequencies, creating a new empty table, and sorting lists of tables.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #TableManagement, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
sum2 = dt2 << Summary( Group( :age ), Mean( :height ), Mean( :weight ), Freq( "None" ), Weight( "None" ) );
dt3 = New Table( "Test Table" );
oldListDT = {};
For( inc = 1, inc <= N Table(), inc++,
	Insert Into( oldListDT, Data Table( inc ) << Get Name )
);
oldListDT = Sort Ascending( oldListDT );
newListDT = Get Data Table List();
newListDT = Sort Ascending( newListDT << Get Name );
```

**Code Explanation**:

1. Open data table.
2. Summarize data by age.
3. Create new empty table.
4. Initialize empty list.
5. Loop through all tables.
6. Append table names to list.
7. Sort list in ascending order.
8. Get current data table list.
9. Sort list in ascending order.



### Example 30
> **Summary**: Creates a summary table from a data table, grouping by 'Sample', calculating mean and standard deviation of 'Weight', and converting the result to a matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SummaryStatistics, #MatrixConversion, #Grouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtSum = dt << Summary( Group( :Sample ), Mean( :Weight ), Std Dev( :Weight ) );
sumMat = dtSum << get all columns as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create summary table.
3. Group by Sample.
4. Calculate Weight mean.
5. Calculate Weight standard deviation.
6. Convert summary table to matrix.



## Summary using Column
> **Summary**: Runs the recoding and summarization of data in a JMP data table, replacing missing values and mapping specific column values to new labels.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #RecodeOperation, #SummaryStatistics, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, "DEROG" ) << Set Selected;
recodeObj = dt << Recode( ‚ÄúReturn‚Äù );
recodeObj << Change Value( ., "MISSING" );
recodeObj << Change Value( "10", "MORE" );
recodeObj << Change Value( "0", "NONE" );
wrc = Window( "Recode - DEROG" );
wrc[Combo Box( 1 )] << Set( 3 );
If( Host is( "windows" ),
	wrc[Button Box( 4 )] << Click(),
	wrc[Button Box( 6 )] << Click()
);
sumDT = Data Table("data_table") << Summary( Group( :DEROG ), Freq( "None" ), Weight( "None" ) );
derogVals = sumDT << Get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Select "DEROG" column.
3. Initiate recode operation.
4. Replace missing values with "MISSING".
5. Replace "10" with "MORE".
6. Replace "0" with "NONE".
7. Access Recode window.
8. Set combo box to third option.
9. Click OK button based on OS.
10. Create summary table grouped by "DEROG".



## Summary using Row State
### Example 1
> **Summary**: Runs data summarization and row exclusion, generating a summarized table by Process and Causes, while also extracting the number of rows and defining certificate names.

<!-- Keywords: #JSLScriptingLanguage, #DataSummarization, #RowExclusion, #TableManipulation, #CertificateDefinition -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row State( 16 ) = Excluded State( 1 );
Row State( 17 ) = Excluded State( 1 );
Row State( 18 ) = Excluded State( 1 );
Row State( 19 ) = Excluded State( 1 );
Row State( 20 ) = Excluded State( 1 );
Row State( 21 ) = Excluded State( 1 );
Row State( 22 ) = Excluded State( 1 );
Row State( 23 ) = Excluded State( 1 );
Row State( 24 ) = Excluded State( 1 );
Row State( 25 ) = Excluded State( 1 );
sumdt = dt << Summary( Group( :Process, :Causes ) );
actvals = Char( :N Rows << Get As Matrix() );
Close( sumdt, No Save );
Close( dt, No Save );
certnames = {sex, Label, Name( "12" ), Name( "13" ), Name( "14" ), Name( "15" ), Name( "16" ), Name( "17" )};
```

**Code Explanation**:

1. Open table.
2. Exclude rows 16-25.
3. Summarize data by Process and Causes.
4. Extract number of rows.
5. Close summary table.
6. Close original table.
7. Define certificate names.



### Example 2
> **Summary**: Process of opening a data table, excluding specific rows, summarizing data by groups, and extracting row counts.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SummaryStatistics, #RowStateManagement, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row State( 16 ) = Excluded State( 1 );
Row State( 17 ) = Excluded State( 1 );
Row State( 18 ) = Excluded State( 1 );
Row State( 19 ) = Excluded State( 1 );
Row State( 20 ) = Excluded State( 1 );
Row State( 21 ) = Excluded State( 1 );
Row State( 22 ) = Excluded State( 1 );
Row State( 23 ) = Excluded State( 1 );
Row State( 24 ) = Excluded State( 1 );
Row State( 25 ) = Excluded State( 1 );
sumdt = dt << Summary( Group( :Process, :Causes ) );
actvals = Char( :N Rows << Get As Matrix() );
```

**Code Explanation**:

1. Open data table.
2. Exclude specific rows.
3. Summarize data by groups.
4. Extract row counts.



## Summary using Set Property
> **Summary**: Calculates and visualizes mean height by age, utilizing a summary table to group data and extract age values.

<!-- Keywords: #JSLScripting, #DataSummary, #GraphBuilder, #MeanHeight, #AgeGrouping -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:age << Set Property( "Value Ordering", {17, 16, 15, 12, 13, 14} );
dt2 = dt << Summary( Group( :age ), Mean( :height ) );
v = dt2:age << get values;
```

**Code Explanation**:

1. Open data table.
2. Set age value ordering.
3. Create summary table.
4. Calculate mean height by age.
5. Extract age values from summary.



## Summary using Select where
> **Summary**: Process of filtering a data table, excluding specific rows, and generating a summary table by soil type.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SummaryTables, #FilteringData, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select where( :soil == "compost" );
dt << Exclude( 1 );
dt << Clear select;
sumdt = dt << Summary( Group( :soil ), Output table name( "Soil Types" ) );
exclRows = sumdt << get excluded rows;
```

**Code Explanation**:

1. Open table.
2. Select specific rows.
3. Exclude selected rows.
4. Clear selection.
5. Create summary table.
6. Retrieve excluded rows.



## Summary using Tabulate
> **Summary**: Creates tabulation reports and summary tables to analyze data by study identifier, outcome, and action taken with treatment, utilizing the Tabulate and Summary functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #TabulateFunction, #SummaryFunction, #DataAnalysis, #StatisticalComputing -->

**Code**:
```jsl
dt3 = Open("data_table.jmp");
tabID2 = dt3 << Tabulate(
	ID( :Study Identifier ),
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :Total Count ) ),
		Row Table( Grouping Columns( :Outcome of Adverse Event, :Action Taken with Study Treatment ) )
	)
);
Tabulatenew = tabID2 << make into data table;
vals1 = Tabulatenew:Name( "Sum(Total Count)" ) << get as matrix;
tabsum1 = dt3 << Summary(
	Group( :Study Identifier, :Outcome of Adverse Event, :Action Taken with Study Treatment ),
	Mean( :Total Count ),
	Freq( "None" ),
	Weight( "None" ),
	output table name( "SumNic" )
);
tabsum2 = Data Table("data_table") << Summary(
	Group( :Outcome of Adverse Event, :Action Taken with Study Treatment ),
	Sum( :"Mean(Total Count)"n ),
	Freq( "None" ),
	Weight( "None" ),
	output table name( "SumNic2" )
);
tabsum2 << select Rows( [1] ) << Delete rows;
vals2 = :Name( "Sum(Mean(Total Count))" ) << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create tabulation report.
3. Hide control panel.
4. Add column table with analysis columns.
5. Add row table with grouping columns.
6. Convert tabulation to data table.
7. Extract sum of total count as matrix.
8. Create summary table by study identifier.
9. Create second summary table by outcome and action.
10. Delete first row from second summary table.
11. Extract sum of mean total count as matrix.



## Summary using Control Chart
### Example 1
> **Summary**: Creates a control chart and calculates expected S values, average, LCL, and UCL from a data table.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #StatisticalAnalysis, #DataSummary, #ExpectedValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( Column( dt, "Sample" ) ), KSigma( 3 ), Chart Col( :Weight, S ), );
rpt = obj << report;
dtX = dt << Summary( Group( :Sample ), Std Dev( :Weight ) );
tmp = dtX << get all columns as matrix;
Close( dtX, no save );
expS = tmp[0, 3];
expAVG = Mean( expS );
expLCL = Max( Mean( expS ) - 3 * Sqrt( 1 - 0.9213 ^ 2 ) * Mean( expS ) / 0.9213, 0 );
expUCL = Mean( expS ) + 3 * Sqrt( 1 - 0.9213 ^ 2 ) * Mean( expS ) / 0.9213;
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Extract report object.
4. Summarize data by sample.
5. Convert summary to matrix.
6. Close summary table.
7. Retrieve expected S values.
8. Calculate expected average.
9. Compute expected LCL.
10. Compute expected UCL.



### Example 2
> **Summary**: Calculates expected S values, average, lower control limit, and upper control limit for a control chart analysis.

<!-- Keywords: #JSLScripting, #ControlChart, #StatisticalAnalysis, #DataSummary, #JMP -->

**Code**:
```jsl
ut relative epsilon = 1e-4;
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( Column( dt, "Sample" ) ), KSigma( 3 ), Chart Col( :Weight, S ), );
rpt = obj << report;
dtX = dt << Summary( Group( :Sample ), Std Dev( :Weight ) );
tmp = dtX << get all columns as matrix;
Close( dtX, no save );
expS = tmp[0, 3];
expAVG = Mean( expS );
expLCL = Max( Mean( expS ) - 3 * Sqrt( 1 - 0.9213 ^ 2 ) * Mean( expS ) / 0.9213, 0 );
expUCL = Mean( expS ) + 3 * Sqrt( 1 - 0.9213 ^ 2 ) * Mean( expS ) / 0.9213;
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data table.
3. Create control chart.
4. Get report object.
5. Summarize data by group.
6. Convert summary to matrix.
7. Close summary table.
8. Extract expected S values.
9. Calculate expected average.
10. Calculate expected lower control limit.
11. Calculate expected upper control limit.



### Example 3
> **Summary**: Creates a control chart from a data table, summarizing data by sample and calculating standard deviation.

<!-- Keywords: #ControlChart, #DataSummary, #StandardDeviation, #JSLScripting, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( Column( dt, "Sample" ) ), KSigma( 3 ), Chart Col( :Weight, S ), );
rpt = obj << report;
dtX = dt << Summary( Group( :Sample ), Std Dev( :Weight ) );
tmp = dtX << get all columns as matrix;
```

**Code Explanation**:

1. Open data table;
2. Create control chart object.
3. Set sample size column.
4. Define KSigma level.
5. Add weight column to chart.
6. Generate control chart report.
7. Summarize data by sample.
8. Calculate standard deviation.
9. Convert summary table to matrix.
10. Store matrix in variable.



### Example 4
> **Summary**: Calculates and visualizes control charts for a given data table, extracting mean and range values by sample group.

<!-- Keywords: #JSLScripting, #ControlCharts, #DataVisualization, #SummaryStatistics, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( Column( dt, "Sample" ) ), KSigma( 3 ), Chart Col( :Weight, XBar, R ) );
rpt = obj << report;
dtX = dt << Summary( Group( :Sample ), Mean( :Weight ) );
tmp = dtX << get all columns as matrix;
tmp = tmp[0, 3];
XBarCal = J( N Rows( tmp ), 1, 0 );
For( i = 1, i <= N Rows( tmp ), i++,
	XBarCal[i] = tmp[N Rows( tmp ) - i + 1]
);
Close( dtX, no save );
dtR = dt << Summary( Group( :Sample ), Range( :Weight ) );
tmp = dtR << get all columns as matrix;
tmp = tmp[0, 3];
RCal = J( N Rows( tmp ), 1, 0 );
For( i = 1, i <= N Rows( tmp ), i++,
	RCal[i] = tmp[N Rows( tmp ) - i + 1]
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Extract chart report.
4. Summarize data by sample.
5. Convert summary to matrix.
6. Extract mean column.
7. Reverse order of means.
8. Close summary table.
9. Summarize data by sample range.
10. Extract range column.



### Example 5
> **Summary**: Creates an XBar-R control chart and calculates mean and range statistics for a given dataset, utilizing Control Chart and Summary functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #ControlChart, #SummaryStatistics, #DataAnalysis, #QualityControl -->

**Code**:
```jsl
ut relative epsilon = 1e-3;
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( Column( dt, "Sample" ) ), KSigma( 3 ), Chart Col( :Weight, XBar, R ) );
rpt = obj << report;
dtX = dt << Summary( Group( :Sample ), Mean( :Weight ) );
tmp = dtX << get all columns as matrix;
tmp = tmp[0, 3];
XBarCal = J( N Rows( tmp ), 1, 0 );
For( i = 1, i <= N Rows( tmp ), i++,
	XBarCal[i] = tmp[N Rows( tmp ) - i + 1]
);
Close( dtX, no save );
dtR = dt << Summary( Group( :Sample ), Range( :Weight ) );
tmp = dtR << get all columns as matrix;
tmp = tmp[0, 3];
RCal = J( N Rows( tmp ), 1, 0 );
For( i = 1, i <= N Rows( tmp ), i++,
	RCal[i] = tmp[N Rows( tmp ) - i + 1]
);
```

**Code Explanation**:

1. Set relative epsilon.
2. Open data_table data
3. Create XBar-R control chart.
4. Extract report object.
5. Summarize data by sample for Weight.
6. Get summary columns as matrix.
7. Select mean column.
8. Reverse order of means.
9. Close summary table without saving.
10. Summarize data by sample for range of Weight.



### Example 6
> **Summary**: Calculates and visualizes control charts for quality control analysis, utilizing JMP's Control Chart platform to summarize data by sample and generate a report.

<!-- Keywords: #JMPScriptingLanguage, #ControlCharts, #QualityControl, #DataAnalysis, #Visualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Control Chart( Sample Size( Column( dt, "Sample" ) ), KSigma( 3 ), Chart Col( :Weight, XBar, R ) );
rpt = obj << report;
dtX = dt << Summary( Group( :Sample ), Mean( :Weight ) );
tmp = dtX << get all columns as matrix;
tmp = tmp[0, 3];
XBarCal = J( N Rows( tmp ), 1, 0 );
For( i = 1, i <= N Rows( tmp ), i++,
	XBarCal[i] = tmp[N Rows( tmp ) - i + 1]
);
```

**Code Explanation**:

1. Open data table.
2. Create control chart.
3. Retrieve report object.
4. Summarize data by sample.
5. Convert summary to matrix.
6. Extract mean column.
7. Initialize XBar calculation matrix.
8. Loop through mean values.
9. Reverse order of means.
10. Store reversed means in XBarCal.



