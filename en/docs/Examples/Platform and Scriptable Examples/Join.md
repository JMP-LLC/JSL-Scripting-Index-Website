# Join

### Example 1
> **Summary**: Opens a data table, joins it with another table using a Cartesian join, and prepares the data for analysis.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #CartesianJoin, #DataPreparation, #BreadDoughAnalysis -->

**Code**:
```jsl
// Join
// Open data table
dt = Open("data_table.jmp");
// Join
Open("data_table.jmp") <<
Join(
	With( Data Table("data_table") ),
	Cartesian Join
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Join tables using Cartesian join.
4. Specify "Batch" table for joining.



### Example 2
> **Summary**: Opens a data table, performs a Cartesian join with another data table, and enables the analysis of various ingredients and conditions on bread dough strength using linear regression.

<!-- Keywords: #JMPScriptingLanguage, #CartesianJoin, #LinearRegression, #DataTableOperations, #JoinOperation -->

**Code**:
```jsl
// Cartesian join
// Open data table
dt = Open("data_table.jmp");
// Cartesian join
Open("data_table.jmp") <<
Join(
	With( Data Table("data_table") ),
	Cartesian Join
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Perform Cartesian join.
4. Join with "data_table".



### Example 3
> **Summary**: Joins unequal rows in a data table by row number, allowing for the combination of disparate datasets.

<!-- Keywords: #JSLScriptingLanguage, #DataTableJoin, #RowNumberMatch, #UnequalRows, #JMPDataAnalysis -->

**Code**:
```jsl
// Joining unequal rows
// Open data table
dt = Open("data_table.jmp");
// Joining unequal rows
Open("data_table.jmp") <<
Join(
	With( Data Table("data_table") ),
	By Row Number
);
```

**Code Explanation**:

1. Open table data_table.
2. Open table data_table.
3. Join tables by row number.



### Example 4
> **Summary**: Runs the merging of two data tables by matching columns and preserving main table order, generating a new output table with non-matches included.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #JoinFunction, #MergeSameNameColumns, #PreserveMainTableOrder -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt1 << set name( "data_table Dup" );
dt2 = Open("data_table.jmp");
dt3 = dt2 << Join(
	With( dt1 ),
	Merge Same Name Columns,
	By Matching Columns( :name = :name, :age = :age ),
	Drop multiples( 0, 0 ),
	Name( "Include non-matches" )(0, 0),
	Preserve main table order( 1 ),
	Output Table( "New" )
);
tableProps = dt3 << Get Table Script Names;
```

**Code Explanation**:

1. Open data table;
2. Rename dataset to "data_table Dup".
3. Open data table;
4. Join datasets by matching columns.
5. Merge same name columns.
6. Drop multiple matches.
7. Exclude non-matches.
8. Preserve main table order.
9. Output joined table as "New".
10. Get table script names.



## Join using Data Table
### Example 1
> **Summary**: Joins two data tables based on matching columns and preserves the original order, resulting in a new output table.

<!-- Keywords: #DataTableJoin, #MatchingColumns, #PreserveOrder, #OutputTable, #JMPScriptingLanguage -->

**Code**:
```jsl
// Join
// Open data table
dt = Open("data_table.jmp");
// Join
Data Table("data_table") <<
Join(
	With(
		Data Table("data_table")
	),
	By Matching Columns(
		:Date = :Date,
		:Customer = :Customer,
		:Beverage = :Beverage
	),
	Drop multiples( 1, 1 ),
	"Include non-matches"n( 0, 0 ),
	Preserve main table order( 1 ),
	Output Table(
		"data_table Final"
	)
);
```

**Code Explanation**:

1. Open table.
2. Join tables.
3. Specify matching columns.
4. Drop duplicates.
5. Include non-matches.
6. Preserve order.
7. Name output table.



### Example 2
> **Summary**: This JSL script joins two data tables, 'data_table1' and 'data_table2', using a Cartesian join method to combine their contents.

<!-- Keywords: #JMPScriptingLanguage, #DataTableJoin, #CartesianJoin, #JMPDataManagement, #DataAnalysis -->

**Code**:
```jsl
// Join
// Open data table
dt = Open("data_table1.jmp");
// Join
Data Table("data_table2") <<
Join(
	With(
		Open("data_table1.jmp")
	),
	Cartesian Join
);
```

**Code Explanation**:

1. Open table "data_table1".
2. Open table "data_table2".
3. Join "data_table1" with "data_table2".
4. Use Cartesian join method.



### Example 3
> **Summary**: Performs a Cartesian join on two data tables, allowing for the combination of variables and analysis across both datasets.

<!-- Keywords: #JMPScriptingLanguage, #DataTableJoin, #CartesianJoin, #DataAnalysis, #Scripting -->

**Code**:
```jsl
// Cartesian join
// Open data table
dt = Open("data_table.jmp");
// Cartesian join
Data Table("data_table") <<
Join(
	With(
		Open("data_table.jmp")
	),
	Cartesian Join
);
```

**Code Explanation**:

1. Open data_table;
2. Open data table;
3. Perform Cartesian join.
4. Join data_table to data_table.



### Example 4
> **Summary**: This JSL script joins two data tables by row number, allowing for the combination of unequal rows. The joined table is then created and stored in memory.

<!-- Keywords: #JSLScriptingLanguage, #DataTableJoin, #RowNumberMatch, #UnequalRows, #DataManipulation -->

**Code**:
```jsl
// Joining unequal rows
// Open data table
dt = Open("data_table.jmp");
// Joining unequal rows
Data Table("data_table") <<
Join(
	With(
		Open("data_table.jmp")
	),
	By Row Number
);
```

**Code Explanation**:

1. Open table data_table.
2. Open table data_table.
3. Join tables by row number.



## Join using List Check
### Example 1
> **Summary**: Runs data processing by opening a data table, performing a list check on specific names, creating a new table with additional rows and columns, joining tables based on matching names, updating the original table, and defining a renameNotify function.

<!-- Keywords: #JSLScripting, #DataProcessing, #TableManipulation, #JoinOperation, #RenameFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:name << List Check(
	{"WILLIAM", "TIM", "SUSAN", "ROBERT", "PHILLIP", "PATTY", "MICHAEL", "MARY", "MARTHA", "MARK", "MARION", "LOUISE", "LINDA", "LILLIE",
	"LEWIS", "LESLIE", "LAWRENCE", "KIRK", "KATIE", "JUDY", "JOHN", "JOE", "JEFFREY", "JANE", "JAMES", "JACLYN", "HENRY", "FREDERICK",
	"ELIZABETH", "EDWARD", "DAVID", "DANNY", "CLAY", "CHRIS", "CAROL", "BARBARA", "AMY", "ALICE", "ALFRED"}
);
dt2 = New Table( "bc1Sub-1",
	Add Rows( 5 ),
	New Column( "name", Character, Nominal, Set Values( {"LOUISE", "JOHN", "LEWIS", "AMY", "LAWRENCE"} ) ),
	New Column( "age", Numeric, Ordinal, Format( "Fixed Dec", 5, 0 ), Set Values( [-12, -13, -14, -15, .] ) ),
	Set Label Columns( :name )
);
dtjoin = dt << Join( with( dt2 ), By Matching Columns( :name = :name ) );
Close( dtjoin, nosave );
dt << Update( With( Data Table("data_table") ), Match Columns( :name = :name ) );
Close( dt2, nosave );
Close( dt, nosave );
renameNotify = Function( {dt, oldname, newname},
	Print( "renameNotify" );
	Show( oldname, newname );
	columnNames = dt << get column names( string );
);
```

**Code Explanation**:

1. Open data table;
2. List check on specific names.
3. Create new table bc1Sub-1.
4. Add rows and columns to bc1Sub-1.
5. Join tables by matching names.
6. Close joined table without saving.
7. Update original table with bc1Sub-1 data.
8. Close bc1Sub-1 without saving.
9. Close original table without saving.
10. Define renameNotify function.



### Example 2
> **Summary**: Process of joining two data tables based on matching names, creating a new table with added rows and columns.

<!-- Keywords: #JSLScripting, #DataJoining, #TableManipulation, #ColumnCreation, #LabelSetting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:name << List Check(
	{"WILLIAM", "TIM", "SUSAN", "ROBERT", "PHILLIP", "PATTY", "MICHAEL", "MARY", "MARTHA", "MARK", "MARION", "LOUISE", "LINDA", "LILLIE",
	"LEWIS", "LESLIE", "LAWRENCE", "KIRK", "KATIE", "JUDY", "JOHN", "JOE", "JEFFREY", "JANE", "JAMES", "JACLYN", "HENRY", "FREDERICK",
	"ELIZABETH", "EDWARD", "DAVID", "DANNY", "CLAY", "CHRIS", "CAROL", "BARBARA", "AMY", "ALICE", "ALFRED"}
);
dt2 = New Table( "bc1Sub-1",
	Add Rows( 5 ),
	New Column( "name", Character, Nominal, Set Values( {"LOUISE", "JOHN", "LEWIS", "AMY", "LAWRENCE"} ) ),
	New Column( "age", Numeric, Ordinal, Format( "Fixed Dec", 5, 0 ), Set Values( [-12, -13, -14, -15, .] ) ),
	Set Label Columns( :name )
);
dtjoin = dt << Join( with( dt2 ), By Matching Columns( :name = :name ) );
```

**Code Explanation**:

1. Open data table.
2. Check names against list.
3. Create new data table.
4. Add five rows to new table.
5. Add name column with values.
6. Add age column with values.
7. Set label columns for name.
8. Join tables by matching names.



## Join using Run Script
> **Summary**: Creates and manipulates data tables, vectors, and path diagrams in JMP, utilizing various scripting commands to perform tasks such as data compression, column selection, and diagram customization.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #PathDiagrams, #VectorOperations, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = dt << Run Script( "Bivariate" );
dt << Select Where( :sex == "F" );
dt << Colors( "Red" );
rs = dt << Get row states;
Close( dt, nosave );
dt = New Table( "Data1",
	New Column( "ID", Character, Values( {"AAAA", "BBBB", "CCCCCC", "DDDDDDDD", "EEEEEEEEEEE", "FFFF", "GGG", "H", "I", "J", "K"} ) ),
	New Column( "Y", Values( J( 11, 1, -10000 ) ) )
);
dt << Compress Selected Columns( {:ID} );
lnth = dt:ID << Get Data Type Length( English );
dt2 = New Table( "Data2", New Column( "ID", Character, Values( {"J", "K"} ) ), New Column( "Y", Values( [9999, 9999] ) ) );
newjoin = dt << Join( With( dt2 ), Update, By Matching Columns( :ID = :ID ), Include Nonmatches( 1, 0 ) );
vals = newjoin:ID << get values;
Close( newjoin, nosave );
Close( dt2, nosave );
Close( dt, nosave );
dt = New Table( "Vectors", <<New Column( "Vec", vector ) );
dt1 = New Table( "Vectors", <<New Column( "Vec", vector ) );
For( i = 1, i <= 20, i++,
	dt1 << add rows( 1 );
	dt1:vec = J( 5, 1, Random Integer( 10 ) );
);
vecs = {};
For( i = 1, i <= 20, i++,
	Insert Into( vecs, Eval List( {J( 5, 1, Random Integer( 20 ) )} ) )
);
dt2 = New Table( "Vectors", <<New Column( "Vec", vector, <<set values( vecs ) ) );
Close( dt, nosave );
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate script on table.
3. Select female entries.
4. Change selected rows color to red.
5. Get row states.
6. Close original data table without saving.
7. Create new data table "Data1".
8. Compress ID column in "Data1".
9. Get data type length of ID column.
10. Create and join "Data2" with "Data1".
11. Retrieve values from joined table.
12. Close joined and "Data2" tables without saving.
13. Create new "Vectors" table.
14. Add 20 rows with random integer vectors to "Vectors".
15. Create another "Vectors" table.
16. Insert random integer vectors into list.
17. Set values of "Vectors" table to list.
18. Close final "Vectors" table without saving.



## Join using Set Table Variable
> **Summary**: Process of opening two data tables, setting a table variable, creating a new column with a formula, and joining the tables based on matching columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #TableVariableManagement, #ColumnCreation, #JoinOperation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt2 << Set Table Variable( "x", 20 );
dt2 << New Column( "test", Numeric, "Continuous", Format( "Best", 12 ), Formula( :x ) );
joindt = Data Table("data_table") << Join(
	With( Data Table("data_table") ),
	Merge Same Name Columns,
	Suppress formula evaluation( 0 ),
	Select( :popcorn, :oil, :batch, :yield, :test ),
	By Matching Columns( :popcorn = :popcorn, :oil = :oil amt, :batch = :batch ),
	Drop multiples( 0, 0 ),
	Include Nonmatches( 0, 0 ),
	Preserve main table order( 1 )
);
```

**Code Explanation**:

1. Open data table 1;
2. Open data table 2;
3. Set table variable "x" to 20.
4. Create new column "test" in dt2.
5. Define formula for "test" as :x.
6. Join "data_table1" with "data_table2".
7. Merge same name columns.
8. Suppress formula evaluation.
9. Select specific columns for join.
10. Match columns by name and values.



## Join using Value Labels
> **Summary**: Runs the joining and labeling of two data tables based on matching columns, while preserving main table order and excluding nonmatches.

<!-- Keywords: #JSLScripting, #DataTableJoin, #ValueLabels, #ByMatchingColumns, #PreserveMainTableOrder -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
dt2 = Open("data_table.jmp");
dt1:oil << Value Labels( {"little" = "b"} );
dt2:oil amt << Value Labels( {"little" = "b", "lots" = "a"} );
newtab4 = dt1 << Join(
	With( Data Table( dt2 ) ),
	By Matching Columns( :oil = :oil amt ),
	Drop multiples( 1, 0 ),
	Include Nonmatches( 0, 0 ),
	Preserve main table order( 1 )
);
col3 = Column( newtab4, "Popcorn of trial1" );
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Label "little" as "b" in oil.
4. Label "little" as "b" and "lots" as "a" in oil amt.
5. Join tables by matching columns.
6. Drop multiple matches.
7. Exclude nonmatches.
8. Preserve main table order.
9. Assign "Popcorn of trial1" to col3.



## Join using Add Rows
> **Summary**: Runs the merging and joining of two data tables, adding new rows to the second table and matching by name columns.

<!-- Keywords: #JSLScripting, #DataMerging, #TableJoining, #DataManipulation, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt3 = Open("data_table.jmp");
dt3 << Add Rows( 2 );
dt3:name[41] = "PENELOPE";
dt3:name[42] = "GEORGE";
dt3:height[41] = 69;
dt3:height[42] = 75;
joinDt3 = dt << Join(
	With( dt3 ),
	Merge Same Name Columns,
	By Matching Columns( :name = :name ),
	Drop multiples( 1, 1 ),
	Include Nonmatches( 1, 1 ),
	Preserve main table order( 1 )
);
```

**Code Explanation**:

1. Open data table;
2. Open data table;
3. Add 2 rows to New Heights.
4. Set name for row 41 to PENELOPE.
5. Set name for row 42 to GEORGE.
6. Set height for row 41 to 69.
7. Set height for row 42 to 75.
8. Join data_table with New Heights.
9. Merge columns with same name.
10. Match by name column.



