# Subset

### Example 1
> **Summary**: Creates a subset from a data table, preserving original data links.

<!-- Keywords: #JSLScripting, #DataSubset, #DataLinking, #TableManipulation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mySubset = dt << Subset( All rows, Selected columns only( 0 ), link to original data table( 1 ) );
```

**Code Explanation**:

1. Open data table.
2. Create subset from table.



### Example 2
> **Summary**: Runs the selection and subset creation process for a specific set of rows in a data table, utilizing JMP's built-in functionality.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RowSelection, #SubsetCreation, #InteractiveDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << clear row states;
dt << select rows( [21, 22, 23, 24, 25, 26, 27, 28, 29, 30] );
mySubset = dt << subset( selected rows( 1 ), link to original data table( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Clear row states.
3. Select specific rows.
4. Create subset from selection.



### Example 3
> **Summary**: Subsets data by sex, selecting specific columns and linking to the original table.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #ColumnSelection, #LinkToOriginalTable, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset(
	By( :sex ),
	All rows,
	Selected columns only( 0 ),
	columns( :name, :age, :height, :weight ),
	link to original data table( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Subset data by sex.
3. Include all rows.
4. Select specific columns.
5. Link to original table.



### Example 4
> **Summary**: Creates a subset from a data table, linking the subset to the original data.

<!-- Keywords: #JSLScripting, #DataSubset, #LinkToOriginalData, #JMP, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset(
	Rows(
		[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35,
		36, 37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
	),
	link to original data table( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Create subset of rows.
3. Link subset to original data.



### Example 5
> **Summary**: Subsets data by Report, selecting specific columns and linking the result to the original data table.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #ColumnSelection, #LinkToOriginalTable, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset(
	By( :Report ),
	All rows,
	Selected columns only( 0 ),
	columns( :Color, :Clarity, :Depth, :Table ),
	link to original data table( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Subset data by Report.
3. Include all rows.
4. Exclude selected columns.
5. Select Color, Clarity, Depth, Table.
6. Link subset to original data table.



### Example 6
> **Summary**: Creates a subset from a data table, grouping by Species and selecting specific columns.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #GroupBy, #ColumnSelection, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset(
	Linked,
	Suppress formula evaluation( 0 ),
	By( :Species ),
	All rows,
	Selected columns only( 0 ),
	columns( :Sepal width, :Petal width, :Petal length )
);
dt2 = Data Table("data_table");
```

**Code Explanation**:

1. Open data table;
2. Create subset linked.
3. Suppress formula evaluation.
4. Group by Species.
5. Include all rows.
6. Select specific columns.
7. Store subset in dt2.



### Example 7
> **Summary**: Creates a subset data table from an original data table, filtering by sex and selecting specific columns.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #Filtering, #ColumnSelection, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset(
	Linked,
	Suppress formula evaluation( 0 ),
	By( :sex ),
	All rows,
	Selected columns only( 0 ),
	columns( :weight, :height, :age )
);
dt2 = Data Table("data_table");
```

**Code Explanation**:

1. Open data table.
2. Create subset linked to original.
3. Suppress formula evaluation.
4. Subset by sex.
5. Include all rows.
6. Exclude selected columns.
7. Select weight, height, age columns.
8. Name subset data table as dt2.
9. Filter subset for sex=M.



### Example 8
> **Summary**: Subsets data by sex, selecting all rows and specific columns, while linking the subset to the original data table.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #ColumnSelection, #LinkToOriginal, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset(
	By( :sex ),
	All rows,
	Selected columns only( 0 ),
	columns( :name, :age, :height, :weight ),
	link to original data table( 1 )
);
mySubset = Data Table("data_table");
```

**Code Explanation**:

1. Open data table;
2. Subset data by sex.
3. Select all rows.
4. Include specific columns.
5. Link subset to original.
6. Create new data table.
7. Name new table "sex=F.jmp".



### Example 9
> **Summary**: Selects and subsets specific rows from a data table, clearing row states throughout the process.

<!-- Keywords: #JSLScriptingLanguage, #DataSubsetCreation, #RowStateManagement, #JMPDataTables, #ScriptingAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear Row States;
dt << select rows(
	[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31, 32, 33, 34, 35, 36,
	37, 38, 39, 40, 41, 42, 43, 44, 45, 46, 47, 48, 49, 50]
);
mySubset = subset( linked, dt );
mySubset << Clear Row States;
```

**Code Explanation**:

1. Open data table;
2. Clear row states.
3. Select specific rows.
4. Create subset of selected rows.
5. Clear row states in subset.



### Example 10
> **Summary**: Selects and hides specific rows in a data table, based on region and row indices.

<!-- Keywords: #JSLScripting, #DataSubset, #RowSelection, #HideRows, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :Region == "W" );
mySubset = dt << subset( linked, dt );
mySubset << clear row states;
mySubset << select rows( [1, 2] );
mySubset << hide;
```

**Code Explanation**:

1. Open data table;
2. Select Region == "W".
3. Create linked subset.
4. Clear row states.
5. Select rows 1, 2.
6. Hide selected rows.



### Example 11
> **Summary**: Runs the selection and subset creation process for a data table with specific region criteria, clearing row states in the resulting subset.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetCreation, #RowStateManagement, #DataFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select where( :Region == "W" );
mySubset = dt << subset( linked, dt );
mySubset << clear row states;
```

**Code Explanation**:

1. Open data table.
2. Select rows where region is W.
3. Create linked subset.
4. Clear row states in subset.



### Example 12
> **Summary**: Creates and analyzes a subset from a data table, running a Bivariate analysis and saving the report to a temporary file.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #BivariateAnalysis, #ReportGeneration, #TemporaryFile -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsubset = dt << Subset( Sampling Rate( 0.5 ), Link to Original Data Table( 1 ) );
biv = dtsubset << Run Script( "Bivariate" );
Report( biv ) << Save Window Report( "$TEMP/subsetplatform.jrp", embed data( 1 ) );
Report( biv ) << Close Window;
Close( dtsubset, "NoSave" );
```

**Code Explanation**:

1. Open data table;
2. Create subset with 50% sampling.
3. Link subset to original data.
4. Run Bivariate analysis on subset.
5. Save report to temporary file.
6. Embed data in saved report.
7. Close Bivariate report window.
8. Close subset data table without saving.



### Example 13
> **Summary**: Creates and analyzes a subset of data, linking it to the original table and generating a Bivariate report with embedded data.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #BivariateAnalysis, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsubset = dt << Subset( Sampling Rate( 0.5 ), Link to Original Data Table( 1 ) );
biv = dtsubset << Run Script( "Bivariate" );
Report( biv ) << Save Window Report( "$TEMP/subsetplatform.jrp", embed data( 1 ) );
Report( biv ) << Close Window;
Close( dtsubset, "NoSave" );
Open( "$TEMP/subsetplatform.jrp" );
```

**Code Explanation**:

1. Open data table;
2. Create subset of 50% data.
3. Link subset to original data.
4. Run Bivariate analysis on subset.
5. Save Bivariate report to temporary file.
6. Embed data in saved report.
7. Close Bivariate window.
8. Close subset data table without saving.
9. Open saved Bivariate report.



### Example 14
> **Summary**: Process of creating a subset of data, running Bivariate analysis, and saving the report to a temporary file with embedded data.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #BivariateAnalysis, #ReportGeneration, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dtsubset = dt << Subset( Sampling Rate( 0.5 ), Link to Original Data Table( 1 ) );
biv = dtsubset << Run Script( "Bivariate" );
Report( biv ) << Save Window Report( "$TEMP/subsetplatform.jrp", embed data( 1 ) );
Report( biv ) << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Create subset with 50% sampling.
3. Link subset to original data.
4. Run Bivariate analysis on subset.
5. Save report to temporary file.
6. Embed data in saved report.
7. Close Bivariate window.



### Example 15
> **Summary**: Subsets data and matrix conversion for analysis, utilizing JMP's data manipulation capabilities to extract column names and select specific rows.

<!-- Keywords: #JMPScriptingLanguage, #DataSubset, #MatrixConversion, #ColumnNames, #RowSelection -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
tablelist = dt << Subset( By( :sex ), columns( :name, :age, :height, :weight ) );
colnames1 = Char( tablelist[1] << Get Column Names );
colnames2 = Char( tablelist[2] << Get Column Names );
m1 = tablelist[1] << get as matrix;
Close( tablelist[1], nosave );
Close( tablelist[2], nosave );
tablelist = dt << Subset( By( :age ), columns( :name, :height, :weight ) );
colnames3 = Char( tablelist[2] << Get Column Names );
m2 = tablelist[2] << get as matrix;
Close( tablelist[1], nosave );
Close( tablelist[2], nosave );
Close( tablelist[3], nosave );
Close( tablelist[4], nosave );
Close( tablelist[5], nosave );
Close( tablelist[6], nosave );
dt << Select Where( :sex == "F" & :age >= 15 );
dt2 = dt << Subset( Selected Rows );
m3 = dt2 << get all columns as matrix;
```

**Code Explanation**:

1. Open data table;
2. Subset data by sex.
3. Extract column names for males.
4. Extract column names for females.
5. Convert male subset to matrix.
6. Close male subset without saving.
7. Close female subset without saving.
8. Subset data by age.
9. Extract column names for second subset.
10. Convert second subset to matrix.
11. Close all subsets without saving.
12. Select rows where sex is female and age is 15 or older.
13. Create new table from selected rows.
14. Convert selected rows to matrix.



### Example 16
> **Summary**: Subsets data and value retrieval from a JMP data table, utilizing the Subset platform to create two output tables named 'Test' based on sex.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #ValueRetrieval, #JMPDataTables, #Automation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
dt << Subset( By( :sex ), output table name( "Test" ), keep by columns );
sub1 = Data Table("data_table");
sub2 = Data Table("data_table");
Try( vals1 = Column( sub1, "sex" ) << get values );
Try( vals2 = Column( sub2, "sex" ) << get values );
```

**Code Explanation**:

1. Open data table.
2. Subset data by sex.
3. Name output tables "Test".
4. Assign subset tables to variables.
5. Attempt to get values from sex column in Test 1.
6. Attempt to get values from sex column in Test 2.



### Example 17
> **Summary**: Subsets data and selection operations to extract specific columns and filter by age, utilizing JMP's data manipulation capabilities.

<!-- Keywords: #JMPScriptingLanguage, #DataSubset, #ColumnSelection, #AgeFilter, #JMPDataManipulation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
dt << Subset( By( :sex ), output table name( "Test" ), keep by columns );
sub1 = Data Table("data_table");
sub2 = Data Table("data_table");
Try( vals1 = Column( sub1, "sex" ) << get values );
Try( vals2 = Column( sub2, "sex" ) << get values );
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
Column( "name" ) << set selected;
Column( "sex" ) << set selected;
Column( "height" ) << set selected;
Column( "weight" ) << set selected;
subdt = dt << Subset( Selected columns, By( :age ), Keep by columns );
For( i = 1, i <= N Items( subdt ), i++,
	colname = Column( subdt[i], 1 ) << get name
);
```

**Code Explanation**:

1. Open data table;
2. Subset data by sex.
3. Assign subsets to sub1 and sub2.
4. Attempt to get values from sub1's sex column.
5. Attempt to get values from sub2's sex column.
6. Reopen "data_table.jmp".
7. Select name, sex, height, weight columns.
8. Subset data by selected columns and age.
9. Loop through subset tables.
10. Get first column's name.



### Example 18
> **Summary**: Creates a subset data table from an original data table, stratified by age, and converts it to a character matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetDataTable, #Stratification, #MatrixConversion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
subdt = dt << Subset( Copy formula( 0 ), Sample Size( 1 ), Stratify( :age ) );
m = Char( subdt << Get As Matrix( {age} ) );
```

**Code Explanation**:

1. Open data table.
2. Create subset data table.
3. Copy formulas to subset.
4. Set sample size to 1.
5. Stratify subset by age.
6. Convert subset to matrix.
7. Extract age column from matrix.
8. Convert matrix to character.



### Example 19
> **Summary**: Subsets data and summarization by age, calculating mean height and weight, with the summary results displayed invisibly or privately depending on the output table name.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #SummaryStatistics, #OutputTableControl, #JMPScripting -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
subset1 = dt << Subset( Output Table Name( "Not Visible" ), invisible );
subset2 = dt << Subset( Output Table Name( "Totally Private" ), private );
sumDt1 = dt << Summary( Group( :age ), Mean( :height ), Mean( :weight ), invisible );
sumDt2 = dt << Summary( Group( :age ), Mean( :height ), Mean( :weight ), private );
```

**Code Explanation**:

1. Open data table;
2. Create subset 1 invisibly.
3. Create subset 2 privately.
4. Summarize data by age.
5. Calculate mean height.
6. Calculate mean weight.
7. Display summary invisibly.
8. Summarize data by age again.
9. Calculate mean height again.
10. Calculate mean weight again.
11. Display summary privately.



### Example 20
> **Summary**: Subsets data and matrix conversion for analysis, utilizing JMP's data manipulation capabilities to extract column names and filter rows.

<!-- Keywords: #JMPScriptingLanguage, #DataSubset, #MatrixConversion, #FilteringRows, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tablelist = dt << Subset( By( :sex ), columns( :name, :age, :height, :weight ) );
colnames1 = Char( tablelist[1] << Get Column Names );
colnames2 = Char( tablelist[2] << Get Column Names );
m1 = tablelist[1] << get as matrix;
Close( tablelist[1], nosave );
Close( tablelist[2], nosave );
tablelist = dt << Subset( By( :age ), columns( :name, :height, :weight ) );
colnames3 = Char( tablelist[2] << Get Column Names );
m2 = tablelist[2] << get as matrix;
Close( tablelist[1], nosave );
Close( tablelist[2], nosave );
Close( tablelist[3], nosave );
Close( tablelist[4], nosave );
Close( tablelist[5], nosave );
Close( tablelist[6], nosave );
dt << Select Where( :sex == "F" & :age >= 15 );
dt2 = dt << Subset( Selected Rows );
m3 = dt2 << get all columns as matrix;
```

**Code Explanation**:

1. Open data_table data
2. Subset data by sex.
3. Extract column names for males.
4. Extract column names for females.
5. Convert male subset to matrix.
6. Close male subset without saving.
7. Close female subset without saving.
8. Subset data by age.
9. Extract column names for second age group.
10. Convert second age group subset to matrix.
11. Close all subsets without saving.
12. Select rows where sex is female and age is 15 or older.
13. Create subset of selected rows.
14. Convert selected subset to matrix.



### Example 21
> **Summary**: Subsets data and value retrieval from a JMP data table, utilizing the Subset platform to create two separate subsets based on the sex column.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #ValueRetrieval, #JMPDataTables, #Automation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset( By( :sex ), output table name( "Test" ), keep by columns );
sub1 = Data Table("data_table");
sub2 = Data Table("data_table");
Try( vals1 = Column( sub1, "sex" ) << get values );
Try( vals2 = Column( sub2, "sex" ) << get values );
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table.
2. Subset by sex column.
3. Output named "Test".
4. Assign subset 1 to sub1.
5. Assign subset 2 to sub2.
6. Try getting values from sub1's sex column.
7. Try getting values from sub2's sex column.
8. Close original data table without saving.



### Example 22
> **Summary**: Subsets data and column extraction from a JMP data table, utilizing the Subset platform to filter by sex and select specific columns.

<!-- Keywords: #JMPScriptingLanguage, #DataSubset, #ColumnExtraction, #Automation, #DataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tablelist = dt << Subset( By( :sex ), columns( :name, :age, :height, :weight ) );
colnames1 = Char( tablelist[1] << Get Column Names );
colnames2 = Char( tablelist[2] << Get Column Names );
m1 = tablelist[1] << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Subset data by sex.
3. Select specific columns.
4. Store subset tables in list.
5. Extract column names from first subset.
6. Extract column names from second subset.
7. Convert first subset to matrix.



### Example 23
> **Summary**: Subsets data and value retrieval from a JMP data table, utilizing the Subset platform to filter by sex and keep columns.

<!-- Keywords: #JMPScriptingLanguage, #DataSubset, #ColumnRetrieval, #Automation, #DataTableManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Subset( By( :sex ), output table name( "Test" ), keep by columns );
sub1 = Data Table("data_table");
sub2 = Data Table("data_table");
Try( vals1 = Column( sub1, "sex" ) << get values );
Try( vals2 = Column( sub2, "sex" ) << get values );
```

**Code Explanation**:

1. Open data table;
2. Subset by sex.
3. Output named "Test".
4. Keep by columns.
5. Assign Test 1 to sub1.
6. Assign Test 2 to sub2.
7. Try to get sex values from sub1.
8. Try to get sex values from sub2.



### Example 24
> **Summary**: Runs data table operations by opening a file, clearing column and row selections, and subsetting selected columns to create a new data table.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #SubsetData, #ColumnSelection, #RowSelection -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Clear Column Selection;
dt1 << Clear Select;
dt2 = dt1 << subset( columns( dt1 << get selected columns ) );
```

**Code Explanation**:

1. Open data table;
2. Clear column selection.
3. Clear row selection.
4. Subset selected columns.
5. Assign subset to dt2.



### Example 25
> **Summary**: Selects and subsets columns in a data table, creating a new table with the desired columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnSelection, #SubsetData, #JMPScripting -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = dt1 << subset( columns( dt1 << get selected columns ) );
```

**Code Explanation**:

1. Open data table.
2. Select columns in data table.
3. Subset selected columns into new table.



### Example 26
> **Summary**: Creates a subset from a data table by filtering rows based on specific conditions, including Type, Grade, and Site.

<!-- Keywords: #JSLScripting, #DataSubset, #FilterRows, #ConditionalLogic, #JMPDataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
subsetdt = dt << Subset(
	Filtered Rows(
		(:Type == "Viable" & :Grade == "C" & :Site == "Room282") | (:Type == "Surface" & :Grade == "D" & :Site == "Room151") | (:Type ==
		"Viable" & :Grade == "C" & :Site == "Room125")
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create subset of data.
3. Filter rows by conditions.
4. Type is Viable, Grade C, Site Room282.
5. Or Type is Surface, Grade D, Site Room151.
6. Or Type is Viable, Grade C, Site Room125.



### Example 27
> **Summary**: Creates and compares two ARIMA models for Steel Shipments data, utilizing random selection and exclusion to simulate real-world scenarios.

<!-- Keywords: #JMPScriptingLanguage, #ARIMAModeling, #TimeSeriesAnalysis, #RandomSelection, #ModelComparison -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = dt << Subset( All Rows( 1 ), All Columns( 1 ) );
Random Reset( 123456789 );
dt << Select Randomly( 0.1 ) << Hide and Exclude();
dt << Clear Select;
Random Reset( 123 );
obj = dt << Time Series( Y( :Steel Shipments ) );
Random Reset( 456 );
obj << Maximum Iterations( 2 );
Random Reset( 789 );
obj << ARIMA( 1, 0, 0 );
Random Reset( 123 );
obj2 = dt2 << Time Series( Y( :Steel Shipments ) );
Random Reset( 456 );
obj2 << Maximum Iterations( 2 );
Random Reset( 789 );
obj2 << ARIMA( 1, 0, 0 );
obj2 << Automatic Recalc( 1 );
Random Reset( 123456789 );
dt2 << Select Randomly( 0.1 ) << Hide and Exclude();
dt2 << Clear Select;
rpt1 = obj << report;
rpt2 = obj2 << report;
mc1 = rpt1["Model Comparison"][Table Box( 1 )] << get as matrix;
mc2 = rpt2["Model Comparison"][Table Box( 1 )] << get as matrix;
```

**Code Explanation**:

1. Open data table.
2. Create subset of data.
3. Set random seed.
4. Randomly select and hide rows.
5. Clear row selection.
6. Set new random seed.
7. Create time series object.
8. Set maximum iterations.
9. Set ARIMA model parameters.
10. Create second time series object.



## Subset using Triangulation
### Example 1
> **Summary**: Vizualizes triangulation results by generating a contour segment graph with shape segments, utilizing JMP's Triangulation and Graph Box features.

<!-- Keywords: #JMPScriptingLanguage, #Triangulation, #GraphBox, #ContourSegments, #ShapeSegments -->

**Code**:
```jsl
Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri = tri << Subset( tri << Get Hull Points );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
```

**Code Explanation**:

1. Open data table.
2. Perform triangulation.
3. Subset triangulation hull points.
4. Retrieve triangulation points.
5. Create new window.
6. Initialize graph box.
7. Set X scale.
8. Set Y scale.
9. Add contour segments.
10. Add shape segments.



### Example 2
> **Summary**: Creates a contour segment graph from triangulation data, with interactive features for exploring hull points and shape segments.

<!-- Keywords: #JSLScripting, #Triangulation, #ContourSegments, #GraphBuilder, #InteractiveVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
tri = Triangulation( X( :X, :Y ), Y( :POP ) );
tri = tri << Subset( tri << Get Hull Points );
{xx, yy} = tri << Get Points();
New Window( "Contour Seg Example",
	g = Graph Box(
		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),
		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),
		Contour Seg( tri, [0, 400, 1000, 2000, 9000], zColor( 5 + [64 32 0 16 48] ), Transparency( [1, 1, 1, 1, 1] ) ),
		Shape Seg( {Path( tri << Get Hull Path() )}, <<Set Color( "Black" ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Contour Seg( 1 ) ));
```

**Code Explanation**:

1. Open data table.
2. Perform triangulation.
3. Subset triangulation hull points.
4. Retrieve triangulation points.
5. Create new window.
6. Set graph box scales.
7. Add contour segments.
8. Add shape segments.
9. Access graph frame.
10. Find contour segment.



## Subset using Get Rows Where
> **Summary**: Selects and subsets a data table, utilizing the Get Rows Where and Subset functions to generate a specific output.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #RowSelection, #DataManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Get Rows Where();
For( i = 1, i <= 40, i += 2,
	Selected( Row State( i ) ) = 1
);
dt << Subset( Output Table( "BigClassSubset" ), Selected Rows( 1 ), selected
columns( 0 ), Link to original data table( 1 ) );
dt << Clear Select;
```

**Code Explanation**:

1. Open data_table data
2. Get all row indices.
3. Loop through rows 1 to 40.
4. Select every other row.
5. Create subset named "BigClassSubset".
6. Include only selected rows.
7. Exclude columns from subset.
8. Link subset to original data.
9. Clear selection in original data.



## Subset using Data Table
### Example 1
> **Summary**: Creates a linked subset from the original data table, grouping by sex and selecting specific columns.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #GroupBy, #ColumnSelection, #LinkedSubset -->

**Code**:
```jsl
Open("data_table.jmp");
Data Table("data_table") << Subset(
	Output Table( "Linked Subset" ),
	Linked,
	Suppress formula evaluation( 0 ),
	By( :sex ),
	All rows,
	Selected columns only( 0 ),
	columns( :name, :age, :height, :weight )
);
```

**Code Explanation**:

1. Open data table;
2. Create subset table.
3. Link subset to original.
4. Suppress formula evaluation.
5. Group by sex.
6. Include all rows.
7. Select specified columns.
8. Name subset "Linked Subset".
9. Include name column.
10. Include age column.
11. Include height column.
12. Include weight column.



### Example 2
> **Summary**: Creates a subset from a data table, specifying a copy formula and sampling rate.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetCreation, #SamplingRate, #CopyFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
subDt1 = dt << Data Table("data_table") << Subset( Copy formula( 0 ), Sampling Rate( 0.5 ) );
sourceScript1 = Char( subDt1 << get property( "Source" ) );
```

**Code Explanation**:

1. Open data_table data
2. Create subset of "data_table" table.
3. Set copy formula option to off.
4. Use sampling rate of 50%.
5. Retrieve source script of subset.
6. Convert source script to character.



## Subset using Select where
> **Summary**: Data filtering and subsetting to extract specific rows from a data table, linking the subset back to the original data.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #SubsetOperation, #LinkingDataTables, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select where( :Report == "AGS" );
dt2 = dt << Subset( Selected Rows, link to original data table( 1 ) );
dt2 << Clear Selected Row States;
```

**Code Explanation**:

1. Open data table;
2. Select rows with Report == "AGS".
3. Subset selected rows into dt2.
4. Link subset to original data table.
5. Clear selected row states in dt2.



## Subset using Select Where
### Example 1
> **Summary**: Selects and subsets data table rows based on a specific species, linking the subset to the original table while clearing row states.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetCreation, #RowStateManagement, #LinkingDataTables -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Species == "versicolor" );
dt2 = dt << Subset( Selected Rows, link to original data table( 1 ) );
dt2 << Clear Row States;
```

**Code Explanation**:

1. Open data table;
2. Select versicolor rows.
3. Create subset of selected rows.
4. Link subset to original table.
5. Clear row states in subset.



### Example 2
> **Summary**: Data filtering and subsetting by opening a data table, selecting rows where height is less than 63, and creating a subset of the selected rows.

<!-- Keywords: #JSLScriptingLanguage, #DataFiltering, #SubsetOperations, #DataTableManagement, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :height < 63 );
dt2 = dt << Subset( Selected Rows );
```

**Code Explanation**:

1. Open data table.
2. Select rows where height is less than 63.
3. Create subset of selected rows.



## Subset using Char
> **Summary**: Runs data table operations, including opening a file, converting tables to strings, and subsetting specific columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetColumns, #CharFunction, #CurrentDataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt1 = Char( dt );
cdt = Current Data Table();
test1 = Char( cdt );
subdt = dt << Subset( columns( :name, :age, :height, :weight ) );
dt2 = Char( subdt );
cdt = Current Data Table();
test2 = Char( cdt );
```

**Code Explanation**:

1. Open data table.
2. Convert table to string.
3. Get current data table.
4. Convert current table to string.
5. Subset specific columns.
6. Convert subset table to string.
7. Get current data table again.
8. Convert current table to string.



## Subset using Column
### Example 1
> **Summary**: Process of selecting columns, creating a subset by age, and retrieving column names from each table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetCreation, #ColumnSelection, #Age-BasedAnalysis -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
Column( "name" ) << set selected;
Column( "sex" ) << set selected;
Column( "height" ) << set selected;
Column( "weight" ) << set selected;
subdt = dt << Subset( Selected columns, By( :age ), Keep by columns );
For( i = 1, i <= N Items( subdt ), i++,
	colname = Column( subdt[i], 1 ) << get name
);
```

**Code Explanation**:

1. Open data table.
2. Set columns selected.
3. Create subset by age.
4. Loop through subset tables.
5. Get column name from each table.



### Example 2
> **Summary**: Runs the selection and subset operation of a data table, allowing for targeted analysis of specific columns and rows.

<!-- Keywords: #JSLScripting, #DataSubset, #ColumnSelection, #RowFiltering, #JMPDataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( dt, 2 ) << set selected;
Column( dt, "weight" ) << set selected;
dt << select rows( [1, 3, 5, 12, 27] );
subdt = dt << subset( selected columns( 1 ), selected rows( 0 ), output tablename( "Sub selected cols, All rows" ) );
```

**Code Explanation**:

1. Open table.
2. Select second column.
3. Select weight column.
4. Select specific rows.
5. Subset selected columns.
6. Output subset table.



### Example 3
> **Summary**: Selects and subsets columns in a JMP data table, based on age groups, and retrieves column names for further analysis.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnSelection, #SubsetOperations, #Age-BasedAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "name" ) << set selected;
Column( "sex" ) << set selected;
Column( "height" ) << set selected;
Column( "weight" ) << set selected;
subdt = dt << Subset( Selected columns, By( :age ), Keep by columns );
For( i = 1, i <= N Items( subdt ), i++,
	colname = Column( subdt[i], 1 ) << get name
);
Close( "age=17", nosave );
Close( "age=16", nosave );
Close( "age=15", nosave );
Close( "age=14", nosave );
Close( "age=13", nosave );
```

**Code Explanation**:

1. Open data table;
2. Select name column.
3. Select sex column.
4. Select height column.
5. Select weight column.
6. Subset selected columns by age.
7. Loop through subsetted tables.
8. Get first column name.
9. Close age=17 table without saving.
10. Close age=16 table without saving.
11. Close age=15 table without saving.
12. Close age=14 table without saving.
13. Close age=13 table without saving.



### Example 4
> **Summary**: Selects and subsets rows and columns in a data table, allowing for focused analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetSelection, #ColumnSelection, #RowSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] );
Column( dt, 1 ) << Set Selected;
Column( dt, 2 ) << Set Selected;
Column( dt, 3 ) << Set Selected;
subDt = dt << Subset( Selected Rows( 1 ), Selected columns only( 0 ) );
```

**Code Explanation**:

1. Open data table;
2. Select rows 1-10.
3. Select column 1.
4. Select column 2.
5. Select column 3.
6. Subset selected rows.
7. Include all columns in subset.



### Example 5
> **Summary**: Runs the selection and subset creation process for a data table, allowing for interactive exploration of relationships between columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #SubsetCreation, #ColumnSelection, #InteractiveDataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "name" ) << set selected;
Column( "sex" ) << set selected;
Column( "height" ) << set selected;
Column( "weight" ) << set selected;
subdt = dt << Subset( Selected columns, By( :age ), Keep by columns );
For( i = 1, i <= N Items( subdt ), i++,
	colname = Column( subdt[i], 1 ) << get name
);
```

**Code Explanation**:

1. Open table.
2. Select columns.
3. Create subset.
4. Loop through subsets.
5. Get column name.



## Subset using Select Rows
### Example 1
> **Summary**: Runs the selection and journaling of specific rows from a data table, saving the output as an HTML file.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #Journaling, #HTMLOutput, #SubsetSelection -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << Select Rows( [1, 3, 6, 7] );
newdt = dt1 << Subset( Selected Rows( 0 ), Rows( [1, 3, 6, 7] ), Selected columns only( 0 ) );
jrn = newdt << Journal();
Current Journal() << Save HTML( "$TEMP/BigClassFamJournal.html", "jpeg" );
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Create subset of selected rows.
4. Generate journal from subset.
5. Save journal as HTML.



### Example 2
> **Summary**: Selects and subsets data rows, followed by journaling and saving as HTML.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #Journaling, #HTMLOutput, #JMPDataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [1, 3, 6, 7] );
newdt = dt << Subset( Selected Rows( 0 ), Rows( [1, 3, 6, 7] ), Selected columns only( 0 ) );
newdt << Journal();
Current Journal() << Save HTML( "$TEMP/BigClassFamJournal.html", PNG );
```

**Code Explanation**:

1. Open data table;
2. Select rows 1, 3, 6, 7.
3. Create subset of selected rows.
4. Open journal for subset.
5. Save journal as HTML.



### Example 3
> **Summary**: Runs data manipulation and filtering tasks, including row selection, exclusion, and subset creation, as well as adding a new column with row states.

<!-- Keywords: #JSLScripting, #DataManipulation, #RowSelection, #SubsetCreation, #ColumnAddition -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [3, 5, 9, 12] );
dt << Exclude( 1 );
dt << Select All Rows;
Column( 1 ) << Set Selected;
Column( 2 ) << Set Selected;
subDt = dt << Subset( All Rows( 1 ), Selected Columns( 1 ), Linked( 1 ) );
subDt << Clear select();
subDt << Select Rows( [3, 4, 5, 6] );
col1 = dt << New Column( "RS", rowstate );
Column( dt, "RS" ) << Add From Row States;
col2 = subDt << New Column( "RS", rowstate );
Column( subDt, "RS" ) << Add From Row States;
Close( subDt, nosave );
Close( dt, nosave );
dt = New Table( "base", New Column( "label", Set Values( 1 :: 10 ) ) );
set = Random Shuffle( 1 :: N Rows( dt ) );
split = Floor( N Rows( dt ) * .5 );
set1 = set[1 :: split];
set2 = set[(split + 1) :: N Rows( dt )];
dt1 = dt << subset( rows( set1 ), LinkToOriginalDataTable( 1 ) );
dt2 = dt << subset( rows( set2 ), LinkToOriginalDataTable( 1 ) );
dt << selectwhere( 3 < :label < 8 );
dt << deleterows;
vals = dt << get as Matrix;
```

**Code Explanation**:

1. Open data table;
2. Select specific rows.
3. Exclude first row.
4. Select all rows.
5. Select columns 1 and 2.
6. Create subset of selected rows and columns.
7. Clear selection in subset table.
8. Select specific rows in subset table.
9. Add row state column to original table.
10. Add row state from original to subset table.
11. Close subset table without saving.
12. Close original table without saving.
13. Create new table "base".
14. Add "label" column with values 1-10.
15. Randomly shuffle row indices.
16. Split indices into two sets.
17. Create subset tables based on shuffled indices.
18. Select rows where label is between 3 and 8.
19. Delete selected rows.
20. Get remaining data as matrix.



### Example 4
> **Summary**: Selects data and subset creation, adding row state columns to both the original table and a subset table.

<!-- Keywords: #JSLScripting, #DataSubsetCreation, #RowStateColumn, #TableManipulation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Rows( [3, 5, 9, 12] );
dt << Exclude( 1 );
dt << Select All Rows;
Column( 1 ) << Set Selected;
Column( 2 ) << Set Selected;
subDt = dt << Subset( All Rows( 1 ), Selected Columns( 1 ), Linked( 1 ) );
subDt << Clear select();
subDt << Select Rows( [3, 4, 5, 6] );
col1 = dt << New Column( "RS", rowstate );
Column( dt, "RS" ) << Add From Row States;
col2 = subDt << New Column( "RS", rowstate );
Column( subDt, "RS" ) << Add From Row States;
```

**Code Explanation**:

1. Open data table;
2. Select rows 3, 5, 9, 12.
3. Exclude first row.
4. Select all rows.
5. Select column 1.
6. Select column 2.
7. Create subset table.
8. Clear selection in subset.
9. Select rows 3, 4, 5, 6 in subset.
10. Add row state column to original table.
11. Add row states to new column in original table.
12. Add row state column to subset table.
13. Add row states to new column in subset table.



## Subset using Clear column selection
> **Summary**: Runs data table operations by opening a file, clearing column selection, creating a subset table, renaming the output table, and setting the current data table.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #TableOperations, #SubsetCreation, #CurrentDataTable -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Clear column selection();
dt2 = dt << Subset( Output table name( "Concat to data_table" ) );
Current Data Table();
```

**Code Explanation**:

1. Open data table.
2. Clear column selection.
3. Create subset table.
4. Rename output table.
5. Set current data table.



## Subset using Function
### Example 1
> **Summary**: Filters a data table by creating a new window with a filter column selector and subsets the data based on user selection.

<!-- Keywords: #JSLScriptingLanguage, #FilterColumnSelector, #DataTableSubset, #NamespaceManagement, #InteractiveDataExploration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
f = Function( {dt},
	{ns},
	ns = New Namespace();
	ns:sub = dt << Subset(
		Output Table( "sub" ),
		Selected Rows( 0 ),
		Rows( [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] ),
		Selected columns only( 0 )
	);
	ns;
);
gns = f( dt );
New Window( "Filter Col Selector Example",
	fontobj = lb1 = Filter Col Selector(
		width( 250 ),
		On Change(
			Close( gns:sub, nosave );
			gns = f( dt );
		)
	)
);
lb1 << set selected( :age );
lb1 << close window;
```

**Code Explanation**:

1. Open data table.
2. Define function `f` with parameters.
3. Create new namespace `ns`.
4. Subset rows 6-22 from data table.
5. Assign subset to `ns:sub`.
6. Call function `f` with data table.
7. Create new window for filter selector.
8. Add filter column selector to window.
9. Set selected column to `:age`.
10. Close filter selector window.



### Example 2
> **Summary**: Filters and subsets a data table based on user selection, utilizing a Filter Col Selector to interactively select columns.

<!-- Keywords: #JSLScripting, #DataSubset, #FilterColSelector, #InteractiveAnalysis, #JMP -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
f = Function( {dt2},
	sub = dt2 << Subset(
		Output Table( "sub" ),
		Selected Rows( 0 ),
		Rows( [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] ),
		Selected columns only( 0 )
	)
);
f( dt2 );
win = New Window( "Filter Col Selector Example",
	fontobj = lb2 = Filter Col Selector(
		width( 250 ),
		On Change(
			sub:age << set selected;
			sub:weight << set selected;
			sub << delete columns();
		)
	)
);
lb2 << set selected( :weight );
cols = sub << get selected columns;
lb2 << close window;
```

**Code Explanation**:

1. Open data table;
2. Define function `f` for subsetting.
3. Call function `f` on dataset.
4. Create new window for column selector.
5. Add Filter Col Selector to window.
6. Set initial selection to weight column.
7. Get selected columns from subset.
8. Close the column selector window.



### Example 3
> **Summary**: Creates a subset table from an original data table, utilizing a custom function and namespace.

<!-- Keywords: #JSLScripting, #DataSubset, #NamespaceManagement, #TableManipulation, #CustomFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
f = Function( {dt},
	{ns},
	ns = New Namespace();
	ns:sub = dt << Subset(
		Output Table( "sub" ),
		Selected Rows( 0 ),
		Rows( [6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22] ),
		Selected columns only( 0 )
	);
	ns;
);
gns = f( dt );
```

**Code Explanation**:

1. Open table.
2. Define function.
3. Create namespace.
4. Subset rows.
5. Output subset table.
6. Execute function.
7. Assign result to variable.



## Subset using Set Name
### Example 1
> **Summary**: Subsets data and file closing operations in JMP, utilizing the `Subset` function to create two subsets based on species and subject columns.

<!-- Keywords: #JMPScriptingLanguage, #DataSubsetting, #FileOperations, #ConditionalStatements, #Specific -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select columns( :Species );
dt:Species << Set Name( "Species>" );
dt << Exclude( 1 );
dt:subject << Set Name( "Subject<" );
subDt1 = dt << Subset( By( :Name( "Species>" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Subject<" ), :miles, :season ) );
subDt2 = dt << Subset( By( :Name( "Subject<" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Species>" ), :miles, :season ) );
If( Host is( "windows" ),
	Close( "Subject-=1", nosave ),
	Close( "Subject-=1.jmp", nosave )
);
If( Host is( "windows" ),
	Close( "Subject-=2", nosave ),
	Close( "Subject-=2.jmp", nosave )
);
If( Host is( "windows" ),
	Close( "Subject-=3", nosave ),
	Close( "Subject-=3.jmp", nosave )
);
If( Host is( "windows" ),
	Close( "Species-=FOX", nosave ),
	Close( "Species-=FOX.jmp", nosave )
);
If( Host is( "windows" ),
	Close( "Species-=COYOTE", nosave ),
	Close( "Species-=COYOTE.jmp", nosave )
);
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table;
2. Select Species column.
3. Rename Species column.
4. Exclude first row.
5. Rename subject column.
6. Create subset subDt1 by Species.
7. Create subset subDt2 by Subject.
8. Close "Subject-=1" file if Windows.
9. Close "Subject-=2" file if Windows.
10. Close "Subject-=3" file if Windows.
11. Close "Species-=FOX" file if Windows.
12. Close "Species-=COYOTE" file if Windows.
13. Close original dataset without saving.



### Example 2
> **Summary**: Runs data table operations, including column renaming, subset creation, and file closing, on a Windows platform.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #Windows, #ColumnRenaming, #SubsetCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select columns( :Species );
dt:Species << Set Name( "Species/" );
dt << Exclude( 1 );
dt:subject << Set Name( "Subject*" );
subDt1 = dt << Subset( By( :Name( "Species/" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Subject*" ), :miles, :season ) );
subDt2 = dt << Subset( By( :Name( "Subject*" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Species/" ), :miles, :season ) );
If( Host is( "windows" ),
	Close( "Subject-=1", nosave ),
	Close( "Subject-=1.jmp", nosave )
);
If( Host is( "windows" ),
	Close( "Subject-=2", nosave ),
	Close( "Subject-=2.jmp", nosave )
);
If( Host is( "windows" ),
	Close( "Subject-=3", nosave ),
	Close( "Subject-=3.jmp", nosave )
);
If( Host is( "windows" ),
	Close( "Species-=FOX", nosave ),
	Close( "Species-=FOX", nosave )
);
If( Host is( "windows" ),
	Close( "Species-=COYOTE", nosave ),
	Close( "Species-=COYOTE", nosave )
);
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table.
2. Select Species column.
3. Rename Species column to "Species/".
4. Exclude first row.
5. Rename subject column to "Subject*".
6. Create subset subDt1 by Species.
7. Create subset subDt2 by Subject.
8. Close "Subject-=1" or "Subject-=1.jmp" if Windows.
9. Close "Subject-=2" or "Subject-=2.jmp" if Windows.
10. Close "Subject-=3" or "Subject-=3.jmp" if Windows.
11. Close "Species-=FOX" if Windows.
12. Close "Species-=COYOTE" if Windows.
13. Close original data table without saving.



### Example 3
> **Summary**: Subsets data and renaming operations on a JMP data table, utilizing the Subset platform to create two subsets based on species and subject variables.

<!-- Keywords: #JMPScriptingLanguage, #DataSubsetting, #ColumnRenaming, #Subset, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select columns( :Species );
dt:Species << Set Name( "Species>" );
dt << Exclude( 1 );
dt:subject << Set Name( "Subject<" );
subDt1 = dt << Subset( By( :Name( "Species>" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Subject<" ), :miles, :season ) );
subDt2 = dt << Subset( By( :Name( "Subject<" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Species>" ), :miles, :season ) );
```

**Code Explanation**:

1. Open data table.
2. Select Species column.
3. Rename Species column.
4. Exclude first row.
5. Rename subject column.
6. Create subset by Species.
7. Create subset by Subject.
8. End script.



### Example 4
> **Summary**: Prepares data by selecting, renaming, and subsetting a JMP data table to create two subsets based on species and subject.

<!-- Keywords: #JMPDataPreparation, #SubsetOperator, #RenameColumns, #DataTableManagement, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select columns( :Species );
dt:Species << Set Name( "Species/" );
dt << Exclude( 1 );
dt:subject << Set Name( "Subject*" );
subDt1 = dt << Subset( By( :Name( "Species/" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Subject*" ), :miles, :season ) );
subDt2 = dt << Subset( By( :Name( "Subject*" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Species/" ), :miles, :season ) );
```

**Code Explanation**:

1. Open data table.
2. Select Species column.
3. Rename Species column.
4. Exclude first row.
5. Rename subject column.
6. Subset data by Species.
7. Subset data by Subject.
8. Save subDt1 subset.
9. Save subDt2 subset.
10. End script.



### Example 5
> **Summary**: Subsets data and renaming operations to prepare a JMP data table for analysis, utilizing the `Open`, `Select`, `Set Name`, `Exclude`, and `Subset` functions.

<!-- Keywords: #JMPScriptingLanguage, #DataSubsetting, #ColumnRenaming, #DataPreparation, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << select columns( :Species );
dt:Species << Set Name( "Species\!"" );
dt << Exclude( 1 );
dt:subject << Set Name( "Subject|" );
subDt1 = dt << Subset( By( :Name( "Species\!"" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Subject|" ), :miles, :season ) );
subDt2 = dt << Subset( By( :Name( "Subject|" ) ), All rows, Selected columns only( 0 ), columns( :Name( "Species\!"" ), :miles, :season ) );
```

**Code Explanation**:

1. Open data table.
2. Select Species column.
3. Rename Species column to "Species!".
4. Exclude first row.
5. Rename subject column to "Subject|".
6. Subset data by Species!.
7. Create subDt1 with selected columns.
8. Subset data by Subject|.
9. Create subDt2 with selected columns.



## Subset using Row Selection
> **Summary**: Selects and subsets data rows based on a date condition, utilizing a dialog for interactive row selection.

<!-- Keywords: #JSLScripting, #DataSubset, #RowSelection, #DialogInterface, #MatrixConversion -->

**Code**:
```jsl
dt4 = Open("data_table.jmp");
dt4 << Row Selection(
	Select where( :Date > "12/22/2011"n | :Date > "12/05/2011"n ),
	Dialog( Edit( Greater( Source Column( :Date ) ) ), Keep dialog open( 0 ) )
);
newDt4 = dt4 << Subset( selected rows );
matrix3 = newDt4 << get as matrix;
```

**Code Explanation**:

1. Open data table;
2. Select rows where Date > "12/22/2011" or Date > "12/05/2011".
3. Show dialog for row selection.
4. Create subset of selected rows.
5. Convert subset to matrix.



## Subset using For Each Row
> **Summary**: Selects and subsets female rows from a data table, extracting the sex column as a matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataSubset, #MatrixOperation, #RowSelection, #SexColumn -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For Each Row( Selected( Row State() ) = (:sex == "F") );
dt2 = dt << Subset( Output Table Name( "out1" ) );
m = dt2:sex << Get As Matrix();
```

**Code Explanation**:

1. Open data table.
2. Select female rows.
3. Create subset table.
4. Assign subset to variable.
5. Extract sex column.
6. Convert to matrix.



## Subset using Select Duplicate Rows
> **Summary**: Process of selecting duplicate rows from a data table, creating a subset of duplicates, and counting the number of rows in the subset.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #DuplicateRows, #SubsetCreation, #RowCount -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << Select Duplicate Rows( Match() );
dtSub = dt2 << Select Duplicate Rows( Match() ) << Subset( Selected Rows( 1 ), Selected columns only( 0 ) );
numRowsSubset = N Rows( dtSub );
```

**Code Explanation**:

1. Open data table.
2. Select duplicate rows.
3. Create subset of duplicates.
4. Count rows in subset.



## Subset using Data Filter
> **Summary**: Data filtering and subsetting for a specific age range, height threshold, and reported illnesses containing 'head', utilizing the Data Filter and Subset functions in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataFilter, #SubsetFunction, #ConditionalLogic, #DataAnalysis -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
df = dt2 << Data Filter(
	Add Filter(
		columns( :age, :height, :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Where( :age == {12, 13, 14, 15, 16} ),
		Where( :height >= 55.298 ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),
		Display( :age, N Items( 6 ) ),
		Display( :reported illnesses, N Items( 2 ) )
	)
);
subdt2 = Data Table("data_table") << Subset(
	Rows(
		Data Table("data_table") << Get Rows Where(
			(:age == 12 | :age == 13 | :age == 14 | :age == 15 | :age == 16) & :height >= 55.298 & Contains(
				Lowercase( :reported illnesses ),
				"head"
			)
		)
	)
);
```

**Code Explanation**:

1. Open table "data_table".
2. Create data filter.
3. Add filter for age, height, and reported illnesses.
4. Set filter for age in specific range.
5. Set filter for height greater than 55.298.
6. Match any rows containing "head" in reported illnesses.
7. Display filtered age count.
8. Display filtered reported illnesses count.
9. Subset data table based on filter criteria.
10. Get rows where age is 12-16, height >= 55.298, and "head" in reported illnesses.



## Subset using New Column
> **Summary**: Creates a subset table with suppressed formula based on age criteria, adding a new numeric column for Upper Weight.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #SubsetTable, #FormulaCreation, #AgeCriteria -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Upper Weight", numeric, continuous, Formula( 256 ) );
dt << Select where( :age == 12 | :age == 13 );
subDt = dt << Subset( Output Table Name( "With Suppressed Formula" ) );
```

**Code Explanation**:

1. Open data table;
2. Add new column "Upper Weight".
3. Set column type to numeric.
4. Set column modeling type to continuous.
5. Define formula for "Upper Weight".
6. Select rows where age is 12 or 13.
7. Create subset of selected rows.
8. Save subset as "With Suppressed Formula".



## Subset using Year
> **Summary**: Data filtering and transformation by opening a data table, selecting rows based on year, hiding and excluding selected rows, creating a new column for the year, and subsetting the table by the transformed year.

<!-- Keywords: #JSLScripting, #DataTransformation, #Filtering, #SubsetTable, #YearColumn -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << select where( Year( :date ) >= 1957 );
dt1 << Hide and exclude;
dt1 << New Column( "yr", numeric, Formula( Year( :date ) ) );
dt2 = dt1 << Subset( By( Transform Column( "Year", Formula( Year( :date ) ) ) ), All rows, Selected columns only( 0 ) );
dt3 = dt1 << Subset( By( :yr ), All rows, Selected columns only( 0 ) );
```

**Code Explanation**:

1. Open data table.
2. Select rows with year >= 1957.
3. Hide and exclude selected rows.
4. Create new column "yr".
5. Transform "yr" using year formula.
6. Subset table by transformed year.
7. Subset table by "yr" column.
8. Assign subset to dt2.
9. Assign subset to dt3.



## Subset using Subscribe
### Example 1
> **Summary**: Runs data processing and saving operations in JMP, including subscribing to events, creating subsets, generating summaries, and unsubscribing from events.

<!-- Keywords: #JMPScriptingLanguage, #DataProcessing, #EventSubscription, #SubsetCreation, #SummaryGeneration -->

**Code**:
```jsl
savedList = {};
dtmain = Open("data_table.jmp");
dtmain << Subscribe(
	"name5"("client"),
	On Save(
		Wait( 1 );
		Insert Into( savedList, Word( 1, Current Data Table() << get name, "." ) );
	)
);
dtmain << Save( "$DOCUMENTS/data_tableTest.jmp" );
subDt = dtmain << Subset( Selected Rows( 0 ), Linked, Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ) );
subdt << Save( "$DOCUMENTS/subsetTable.jmp" );
subdt << Save( "$DOCUMENTS/subsetTable.jmp" );
sumDt = dtmain << Summary( Group( :Sex ), Mean( :Runtime ), Mean( :RunPulse ), Mean( :RstPulse ), output table name( "Summary" ) );
sumDt << Save( "$DOCUMENTS/summaryTable.jmp" );
Set Default Directory( "$TEMP" );
Try( dtmain << unsubscribe( "name5", all ) );
Try( subdt << unsubscribe( "name5", all ) );
Try( sumdt << unsubscribe( "name5", all ) );
```

**Code Explanation**:

1. Initialize an empty list.
2. Open data table;
3. Subscribe to "name5" event.
4. On save, wait 1 second.
5. Insert table name into list.
6. Save data_table.jmp to Documents.
7. Create subset of rows.
8. Save subset to Documents.
9. Save subset again (redundant).
10. Create summary table by sex.
11. Save summary table to Documents.
12. Set default directory to TEMP.
13. Unsubscribe from "name5" for main table.
14. Unsubscribe from "name5" for subset table.
15. Unsubscribe from "name5" for summary table.



### Example 2
> **Summary**: Runs data processing by opening a data table, creating a subset of rows, and generating summary statistics grouped by Sex.

<!-- Keywords: #JMPScriptingLanguage, #DataProcessing, #SummaryStatistics, #DataSubset, #EventSubscription -->

**Code**:
```jsl
dtmain = Open("data_table.jmp");
savedList = {};
dtmain << Subscribe(
	"name5"("client"),
	On Save(
		Wait( 1 );
		Insert Into( savedList, Word( 1, Current Data Table() << get name, "." ) );
	)
);
subDt = dtmain << Subset( Selected Rows( 0 ), Linked, Rows( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12] ) );
sumDt = dtmain << Summary( Group( :Sex ), Mean( :Runtime ), Mean( :RunPulse ), Mean( :RstPulse ), output table name( "Summary" ) );
```

**Code Explanation**:

1. Open data table;
2. Initialize empty list.
3. Subscribe to "name5" event.
4. On save, wait 1 second.
5. Insert table name into list.
6. Create subset of first 12 rows.
7. Create summary table.
8. Group by Sex.
9. Calculate mean Runtime.
10. Calculate mean RunPulse.
11. Calculate mean RstPulse.
12. Name output table "Summary".



