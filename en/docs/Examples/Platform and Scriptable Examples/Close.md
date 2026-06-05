# Close

## Close using Window
### Example 1
> **Summary**: Opens and closes data tables, retrieving window titles, and checking for table names in the title, utilizing a With Window Handler to manage new windows.

<!-- Keywords: #JSLScriptingLanguage, #DataTables, #WindowManagement, #PrivateTables, #WithWindowHandler -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
thisTitle = dt << Get Name;
testWins = Window() << Get Window Title;
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = New Table( "test table", private );
thisTitle = dt << Get Name;
testWins = Window() << Get Window Title;
testThisWin = Contains( testWins, thisTitle );
```

**Code Explanation**:

1. Open data table;
2. Retrieve data table's name.
3. Get all window titles.
4. Check if current window title contains data table's name.
5. Close data table without saving.
6. Create new private table named "test table".
7. Retrieve new table's name.
8. Get all window titles again.
9. Check if current window title contains new table's name.



### Example 2
> **Summary**: Opens and closes data tables, retrieving window titles, and checking for table name matches in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #WindowHandling, #TableOperations, #ScriptAutomation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
thisTitle = dt << Get Name;
testWins = Window() << Get Window Title;
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = New Table( "test table", invisible );
thisTitle = dt << Get Name;
testWins = Window() << Get Window Title;
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = Open( "$SAMPLE_DATA/data_table.jmp", private );
thisTitle = dt << Get Name;
testWins = Window() << Get Window Title;
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = New Table( "test table", private );
thisTitle = dt << Get Name;
testWins = Window() << Get Window Title;
testThisWin = Contains( testWins, thisTitle );
```

**Code Explanation**:

1. Open data table;
2. Get table name.
3. Get window titles.
4. Check if title contains.
5. Close table without saving.
6. Create new table invisibly.
7. Get table name.
8. Get window titles.
9. Check if title contains.
10. Close table without saving.



## Close using If
### Example 1
> **Summary**: Process of opening a data table, saving it as a SAS dataset, and closing the dataset on Windows hosts.

<!-- Keywords: #JSLScriptingLanguage, #Windows, #DataManagement, #SASDataset, #FileOperations -->

**Code**:
```jsl
If( Host is( "Windows" ),
	exdt = Open("data_table.jmp");
	Close( exdt, Save( "$TEMP/BC_SAS_2.sas7bxat" ) );
);
```

**Code Explanation**:

1. Check if host is Windows.
2. Open data_table data
3. Close the opened dataset.
4. Save dataset as "BC_SAS_2.sas7bxat" in temp folder.



### Example 2
> **Summary**: Opens and closes a data table in JMP Pro, defining arrays for states and dw values.

<!-- Keywords: #JMPPro, #DataTableManagement, #ArrayDefinition, #ScriptingLanguage, #JSL -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	Close( dt, no save );
);
b states = {states(
	rs( 3, 101, 80 ),
	rs( 0, Dot, 0 ),
	rs( 3, 101, 80 ),
	rs( 0, Dot, 0 ),
	rs( 3, 101, 80 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 3, 101, 80 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 3, 101, 80 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 3, 101, 80 ),
	rs( 3, 101, 80 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 ),
	rs( 0, Dot, 0 )
)};
b dw = [2.36853031620002 33 -0.220364731639365 0.56151647869676];
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table.
3. Close data table without saving.
4. Define b states array.
5. Define b dw array.



### Example 3
> **Summary**: Runs the ordinal fit process in JMP Pro, extracting linear values, cumulative probabilities, and predicted outcomes.

<!-- Keywords: #JMPPro, #OrdinalFit, #ProbabilityFormulas, #ScriptingLanguage, #DataAnalysis -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Run Script( "Ordinal Fit" );
	obj << Save Probability Formula( 1 );
	lin1 = dt:Linear << get values( 1 );
	cum1 = (dt:Name( "Cum[1]" ) << get values( 1 )) || (dt:Name( "Cum[2]" ) << get values( 1 )) || (dt:Name( "Cum[3]" ) << get values( 1 ))
	 || (dt:Name( "Cum[4]" ) << get values( 1 ));
	prob1 = (dt:Name( "Prob[1]" ) << get values( 1 )) || (dt:Name( "Prob[2]" ) << get values( 1 )) || (dt:Name( "Prob[3]" ) <<
	get values( 1 )) || (dt:Name( "Prob[4]" ) << get values( 1 )) || (dt:Name( "Prob[5]" ) << get values( 1 ));
	pred1 = dt:Most Likely Taste Test << get values( 1 );
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Probability Formulas( 1 );
	depot1 << Run Script( 1 );
	lin2 = dt:Linear << get values( 1 );
	cum2 = (dt:Name( "Cum[1]" ) << get values( 1 )) || (dt:Name( "Cum[2]" ) << get values( 1 )) || (dt:Name( "Cum[3]" ) << get values( 1 ))
	 || (dt:Name( "Cum[4]" ) << get values( 1 ));
	prob2 = (dt:Name( "Prob[1]" ) << get values( 1 )) || (dt:Name( "Prob[2]" ) << get values( 1 )) || (dt:Name( "Prob[3]" ) <<
	get values( 1 )) || (dt:Name( "Prob[4]" ) << get values( 1 )) || (dt:Name( "Prob[5]" ) << get values( 1 ));
	pred2 = dt:Most Likely Taste Test << get values( 1 );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table;
3. Get number of columns.
4. Run "Ordinal Fit" script.
5. Save probability formula.
6. Extract linear values.
7. Concatenate cumulative values.
8. Concatenate probability values.
9. Extract predicted values.
10. Delete new columns.
11. Publish probability formulas.
12. Run published script.
13. Extract updated linear values.
14. Concatenate updated cumulative values.
15. Concatenate updated probability values.
16. Extract updated predicted values.
17. Close table without saving.
18. Close "Formula Depot" window.



### Example 4
> **Summary**: Runs a predictive modeling workflow in JMP Pro, generating predicted values and publishing the formula for further analysis.

<!-- Keywords: #JMPPro, #PredictiveModeling, #DataAnalysis, #Scripting, #Automation -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Run Script( "Model" );
	obj << Save Prediction Formula( 1 );
	pred1 = dt:Y Prediction Formula << get values;
	dt << delete columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script;
	pred2 = dt:Y Prediction Formula << get values;
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check for JMP Pro.
2. Open data table.
3. Count initial columns.
4. Run "Model" script.
5. Save prediction formula.
6. Retrieve predicted values.
7. Delete added columns.
8. Publish prediction formula.
9. Run published script.
10. Retrieve new predicted values.
11. Close data table without saving.
12. Close Formula Depot window.



### Example 1
> **Summary**: Process of saving a JMP data table to a text file on the desktop.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #FileI/O, #DesktopOperations, #ScriptAutomation -->

**Code**:
```jsl
folderPathTmp = "$DESKTOP";
dt1 = Open("data_table.jmp");
Close( dt1, save( folderPathTmp || "\S1261564.txt" ) );
```

**Code Explanation**:

1. Set folder path to desktop.
2. Open data_table data
3. Close dataset, save as "S1261564.txt".



### Example 2
> **Summary**: Opens and closes a JMP data table, ignoring specific columns and defining a list of column names.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnSelection, #ScriptAutomation, #JSLSyntax -->

**Code**:
```jsl
dt2 = Open( "$SAMPLE_DATA/data_table.jmp", ignore columns( "name", "sex" ) );
Close( dt2, nosave );
mylist = {"age", "height", "weight"};
```

**Code Explanation**:

1. Open data table.
2. Ignore specific columns.
3. Close table without saving.
4. Define list of column names.



### Example 3
> **Summary**: Runs the conversion of a data table to a matrix and subsequent closure without saving, utilizing the As C Expr function.

<!-- Keywords: #JSLScriptingLanguage, #DataConversion, #MatrixOperations, #JMP, #AsCExpr -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
mat1 = dt1 << Get As Matrix;
Close( dt1, Nosave );
```

**Code Explanation**:

1. Open data table;
2. Convert table to matrix.
3. Close dataset without saving.



## Close using Column
### Example 1
> **Summary**: Recoding process for a selected column in a JMP data table, utilizing the Match function to update values based on specific patterns.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #RecodeFunction, #MatchFunction, #DataUpdate -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Column( "weight" ) << Set Selected;
Main Menu( "Cols:Recode" );
Close( dt, no save );
dt = New Table( "test recode1",
	Add Rows( 7 ),
	New Column( "Recode Column",
		Character,
		"Nominal",
		Set Values(
			{"qwe123456789abc", "qwe123456789abc", "qwe123456789abc", "qwe123456789a", "qwe123456789a", "qwe123456789abc", "qwe123456789"}
		)
	)
);
Column( dt, "Recode Column" ) << Set Selected;
dt << Begin Data Update;
For Each Row(
	:Recode Column = Match( :Recode Column, "qwe123456789a", "qwe123456789abc", "qwe123456789", "qwe123456789abc", :Recode Column )
);
dt << End Data Update;
vals = dt:Recode Column << Get values;
```

**Code Explanation**:

1. Open data table.
2. Select "weight" column.
3. Recode selected column via menu.
4. Close table without saving.
5. Create new table "test recode1".
6. Add 7 rows to new table.
7. Add "Recode Column" with character data type.
8. Set initial values for "Recode Column".
9. Select "Recode Column" in new table.
10. Update data for "Recode Column" using Match function.



### Example 2
> **Summary**: Runs the setup and retrieval of a column's field width in a JMP data table, allowing for precise control over display formatting.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnProperties, #FieldWidth, #ScriptAutomation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ncol = Column( "weight" );
ncol << set field width( 2 );
fw = ncol << Get Field Width;
Close( dt, nosave );
certm = [1 1, 1 2, 2 1, 2 2];
```

**Code Explanation**:

1. Open data table.
2. Assign weight column to variable.
3. Set field width to 2.
4. Retrieve field width.
5. Close table without saving.
6. Define matrix certm.



### Example 3
> **Summary**: Creates and customizes marker segment graphs in JMP, allowing users to visualize data with varying colors and sizes.

<!-- Keywords: #JMPScriptingLanguage, #MarkerSegmentGraphs, #DataVisualization, #CustomizationOptions, #InteractiveFeatures -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
xx = Column( "height" ) << Get Values;
aa = [=> 0];
sz = Column( "age" ) << get values;
yy = J( N Rows( xx ), 1, 0 );
For( ii = 1, ii <= N Rows( xx ), ii++,
	aa[xx[ii]]++;
	yy[ii] = aa[xx[ii]];
);
nw26 = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), Sizes( sz ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
seg << Delete;
nw26 << Close Window;
Close( dt, no save );
nw32 = New Window( "Test32",
	g32 = Graph Box(
		Marker Seg(
			[10 20 30 40],
			[40 30 20 10],
			Row states( Eval List( {Color State( "blue" ), Color State( "orange" ), Color State( "fuchsia" ), Color State( "green" )} ) )
		)
	)
);
frame = g32[framebox( 1 )];
seg = frame << Find Seg( "MarkerSeg" );
rsColors = seg << Get Colors;
nw32 << Close Window;
nw32b = New Window( "Test32",
	g32b = Graph Box(
		Marker Seg( [10 20 30 40], [40 30 20 10], Row states( Eval List( {Color State( "blue" ), Color State( "orange" )} ) ) )
	)
);
frame = g32b[framebox( 1 )];
seg = frame << Find Seg( "MarkerSeg" );
rsColors = seg << Get Colors;
nw32b << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Extract height values.
3. Initialize age array.
4. Extract age values.
5. Create zero-filled array for counts.
6. Loop through rows to count heights.
7. Create new window for marker segment graph.
8. Configure graph box size and scales.
9. Add marker segment plot.
10. Close first window without saving.
11. Create second window for test graph.
12. Add marker segment plot with colors.
13. Retrieve segment colors.
14. Close second window.
15. Create third window for test graph.
16. Add marker segment plot with fewer colors.
17. Retrieve segment colors.
18. Close third window.



## Close using Select Where
> **Summary**: Data filtering and manipulation tasks for a specific player, Rick Robey, in JMP, including selecting rows, excluding/hiding rows, and creating matrices.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #Filtering, #MatrixOperations, #RowStates -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select Where( :Player == "Rick Robey" );
dt2 = dt << data view();
m = dt2 << Get All Columns As Matrix;
Close( dt2, nosave );
dt2 = dt << data view( selected );
m = dt2 << Get All Columns As Matrix;
Close( dt2, nosave );
robey = {"Rick Robey", "Rick Robey", "Rick Robey", "Rick Robey"};
rick2 = [54, 37, 49, 31];
dt << Clear Row States;
r = dt << Select Where( :Player == "Rick Robey" );
r << Exclude( 1 );
dt << Select All Rows;
dt2 = dt << data view( excluded );
m = dt2 << Get As Matrix;
v = dt2:Player << Get Values;
Close( dt2, nosave );
dt << Clear Row States;
r = dt << Select Where( :Player == "Rick Robey" );
r << Hide( 1 );
dt << Select All Rows;
dt2 = dt << data view( hidden );
m = dt2 << Get All Columns As Matrix;
Close( dt2, nosave );
dt << Clear Row States;
r = dt << Select Where( :Player == "Rick Robey" );
r << Label( 1 );
dt << Select All Rows;
dt2 = dt << data view( labeled );
m = dt2 << Get All Columns As Matrix;
Close( dt2, nosave );
dt << Clear Row States;
r = dt << Select Where( :Player == "Rick Robey" );
r << Label( 1 );
dt << Select All Rows;
dt2 = dt << data view( labelled );
m = dt2 << Get All Columns As Matrix;
Close( dt2, nosave );
Close( dt, nosave );
dt = New Table( "MyDt", New Column(), New Column(), New Column(), New Column() );
dt << Add Rows( 5 );
:Column 1 << set initial data( Today() );
:Column 2 << set initial data( 99 );
:Column 3 << set initial data( "abc" );
:Column 4 << set initial data( Today() );
:Column 4 << set initial data();
v = dt:Column 1 << get values;
If( !Is Missing( v[1] ),
	val = 1,
	val = 0
);
```

**Code Explanation**:

1. Open table.
2. Select rows where Player is Rick Robey.
3. Create data view.
4. Get all columns as matrix.
5. Close data view.
6. Create data view with selected rows.
7. Get all columns as matrix.
8. Close data view.
9. Define array robey.
10. Define array rick2.
11. Clear row states.
12. Select rows where Player is Rick Robey.
13. Exclude selected rows.
14. Select all rows.
15. Create data view with excluded rows.
16. Get values from Player column.
17. Close data view.
18. Clear row states.
19. Select rows where Player is Rick Robey.
20. Hide selected rows.
21. Select all rows.
22. Create data view with hidden rows.
23. Get all columns as matrix.
24. Close data view.
25. Clear row states.
26. Select rows where Player is Rick Robey.
27. Label selected rows.
28. Select all rows.
29. Create data view with labeled rows.
30. Get all columns as matrix.
31. Close data view.
32. Clear row states.
33. Select rows where Player is Rick Robey.
34. Label selected rows.
35. Select all rows.
36. Create data view with labeled rows.
37. Get all columns as matrix.
38. Close data view.
39. Close original table.
40. Create new table MyDt.
41. Add 5 rows to new table.
42. Set initial data for Column 1.
43. Set initial data for Column 2.
44. Set initial data for Column 3.
45. Set initial data for Column 4.
46. Get values from Column 1.
47. Check if first value is missing.
48. Assign value based on check.



## Close using N Table
> **Summary**: Opens and closes a JMP data table, with intermediate counting of tables after each operation.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #TableOperations, #ScriptAutomation, #JSLCodeExample -->

**Code**:
```jsl
dt2 = Open( "$SAMPLE_DATA/Students2.JMP", invisible );
afterOpen2 = N Table();
Close( dt2, no save );
afterClosing = N Table();
```

**Code Explanation**:

1. Open data table;
2. Count tables after opening.
3. Close data_table.jmp without saving.
4. Count tables after closing.



## Close using Add Rows
> **Summary**: Creates and modifies a new JMP table with various numeric and character columns, utilizing formulas and conditional statements.

<!-- Keywords: #JSLScripting, #JMPTableCreation, #NumericColumns, #CharacterColumns, #ConditionalFormulas -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << add rows( 5 );
dt = dt << revert();
dt << set dirty;
Close( dt, nosave );
nt = New Table( "Empty Test",
	Add Rows( 10 ),
	New Column( "Column 1", Numeric, Continuous, Format( "Best", 10 ), Set Values( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) )
);
nt << New Column( "Num Col 1", Numeric, Continuous, Width( 5 ), <<Set Each Value( Empty() ) );
nt << New Column( "Num Col 2", Numeric, Set Values( Empty() ) );
nt << New Column( "Num Col 3", Numeric, Formula( If( :Column 1 <= 5, 1, Empty() ) ) );
nt << New Column( "Num Col 4", Numeric, Set Values( [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] ) );
For( i = 6, i <= N Rows( nt ), i++,
	:Num Col 4[i] = Empty()
);
nt << New Column( "Char Col 1", Character, Nominal, Width( 5 ), <<Set Each Value( Empty() ) );
nt << New Column( "Char Col 2", Character, Set Values( Empty() ) );
nt << New Column( "Char Col 3", Character, Formula( If( :Column 1 <= 5, "1", Empty() ) ) );
nt << New Column( "Char Col 4", Character, Nominal, Set Values( {"1", "2", "3", "4", "5", "6", "7", "8", "9", "10"} ) );
For( i = 6, i <= N Rows( nt ), i++,
	:Char Col 4[i] = Empty()
);
nt << New Column( "RS Col 1", Row State, Row State, Width( 5 ), <<Set Each Value( Empty() ) );
nt << New Column( "RS Col 2", Row State, Set Values( Empty() ) );
nt << New Column( "RS Col 3a: Empty", Row State, Formula( If( :Column 1 <= 5, Color State( 3 ), Empty() ) ) );
nt << New Column( "RS Col 3b: Color State(Empty)", Row State, Formula( If( :Column 1 <= 5, Color State( 5 ), Color State( Empty() ) ) ) );
nt << New Column( "RS Col 4", Row State, Row State, Set Values( [12, 12, 12, 12, 12, 11, 11, 11, 11, 11] ) );
For( i = 2, i <= N Rows( nt ), i++,
	:RS Col 4[i] = Empty()
);
```

**Code Explanation**:

1. Open data table.
2. Add 5 rows to table.
3. Revert table changes.
4. Mark table as dirty.
5. Close table without saving.
6. Create new empty table.
7. Add 10 rows to new table.
8. Add numeric column with values.
9. Add numeric columns with formulas.
10. Modify numeric column values conditionally.



## Close using Function
### Example 1
> **Summary**: Runs data table management by opening a dataset, subscribing to column rename events, and closing the dataset without saving, while defining functions for adding and removing dataset names from an empty list.

<!-- Keywords: #JSLScriptingLanguage, #DataManagement, #ColumnRename, #FunctionDefinition, #DatasetHandling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
x = dt << subscribe( "abc", on column rename( renameNotify ) );
w = dt << unsubscribe( x, on column rename );
Close( dt, nosave );
varOpen = {};
f1 = Function( {dtab},
	{dtname},
	dtname = ((Words( (dtab << getname()), "." ))[1]);
	Insert Into( varOpen, dtname );
);
f2 = Function( {dtab},
	{dt},
	dt = Contains( varOpen, (Words( (dtab << getname()), "." ))[1] );
	Remove From( varOpen, dt );
);
```

**Code Explanation**:

1. Open data table;
2. Subscribe to column rename event.
3. Unsubscribe from column rename event.
4. Close dataset without saving.
5. Initialize empty list `varOpen`.
6. Define function `f1` for adding dataset name to `varOpen`.
7. Define function `f2` for removing dataset name from `varOpen`.



### Example 2
> **Summary**: Opens and closes a data table, as well as defining a logbegin function with the current date.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #LogFunctionality, #DateHandling, #ScriptAutomation -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
Close( dt2, nosave );
logbegin = Function( {},
	begintime = Today()
);
```

**Code Explanation**:

1. Open data table.
2. Close table without saving.
3. Define logbegin function.
4. Assign current date to begintime variable.



### Example 3
> **Summary**: Runs table renaming and tracking, utilizing JMP's data manipulation capabilities to dynamically update table names and store open tables in a variable.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #RenameEventHandling, #FunctionDefinition, #VariableTracking -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dname = dt << get name;
f = Function( {dtab, tabname},
	Print( "oldname", dname );
	Print( "new name", dtab << get name );
);
dt << Subscribe( "test1", On Rename( f ) );
dt << set name( "Best Class" );
dt << Run Script( "Distribution" );
dt << unsubscribe( "test1", onRename );
dt << set name( "Better Class" );
Close( dt, no save );
varOpen = {};
f1 = Function( {dtab},
	{dtname},
	dtname = ((Words( (dtab << getname()), "." ))[1]);
	Insert Into( varOpen, dtname );
);
```

**Code Explanation**:

1. Open data table;
2. Get table name.
3. Define function `f` for renaming.
4. Subscribe to rename event.
5. Rename table to "Best Class".
6. Run distribution script.
7. Unsubscribe from rename event.
8. Rename table to "Better Class".
9. Close table without saving.
10. Define function `f1` for tracking open tables.



### Example 4
> **Summary**: Runs various data table operations, including adding and deleting rows and columns, renaming columns, and saving the data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #JMP, #Automation, #DataManagement -->

**Code**:
```jsl
dt = Open("data_table.jmp");
addRowsFn = Function( {},
	Print( "hello add row" )
);
dt << subscribe( "Test Add", onAddRows( addRowsFn, 3 ) );
deleteRowsFn = Function( {},
	Print( "hello delete row" )
);
dt << subscribe( "Test Delete", onDeleteRows( deleteRowsFn, 3 ) );
addColsFn = Function( {},
	Print( "hello add column" )
);
dt << subscribe( "Test Add", onAddColumns( addColsFn, 2 ) );
deleteColsFn = Function( {},
	Print( "hello delete col" )
);
dt << subscribe( "Test Delete", onDeleteCols( deleteColsFn, 2 ) );
renameColsFn = Function( {},
	Print( "hello rename column" )
);
dt << subscribe( "Test Rename", onRenameColumns( renameColsFn, 3 ) );
saveFn = Function( {},
	Print( "hello save" )
);
dt << subscribe( "Test Save", onSave( saveFn, 3 ) );
closeFn = Function( {},
	Print( "hello close" )
);
dt << subscribe( "Test Close", onClose( closeFn, 2 ) );
```

**Code Explanation**:

1. Open data table.
2. Define function for adding rows.
3. Subscribe to add rows event.
4. Define function for deleting rows.
5. Subscribe to delete rows event.
6. Define function for adding columns.
7. Subscribe to add columns event.
8. Define function for deleting columns.
9. Subscribe to delete columns event.
10. Define function for renaming columns.
11. Subscribe to rename columns event.
12. Define function for saving.
13. Subscribe to save event.
14. Define function for closing.
15. Subscribe to close event.



### Example 5
> **Summary**: Runs the renaming of a data table and defines a custom function to expand a list based on binary representation.

<!-- Keywords: #JSLScriptingLanguage, #DataTableRenaming, #ListExpansion, #BinaryRepresentation, #CustomFunction -->

**Code**:
```jsl
dt2 = Open("data_table.jmp");
dt2 << set name( "utBigClass" );
ut_expected = dt2 << get script;
Close( dt2, nosave );
expand list = Function( {v},
	{Default Local},
	n = N Items( v );
	m = 2 ^ n;
	l = Repeat( {{}}, n );
	For( i = 0, i < m, i++,
		b = 0;
		For( j = i, j > 0, j = Floor( j / 2 ),
			b += Modulo( j, 2 )
		);
		Insert Into( l[b], i );
	);
	l;
);
```

**Code Explanation**:

1. Open data table.
2. Rename table to "utBigClass".
3. Get table's script.
4. Close table without saving.
5. Define function "expand list".
6. Initialize variable "n" with item count.
7. Calculate power of 2 for "n".
8. Initialize list "l" with empty lists.
9. Loop through range 0 to m-1.
10. Calculate binary representation sum.



## Close using New Window
### Example 1
> **Summary**: Opens a data table, creation of a new window with an outline box and column list box, retrieval of items from the column list box, and closure of the original data table and new window.

<!-- Keywords: #JSL, #DataTable, #NewWindow, #ColumnListBox, #OutlineBox -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Test Case 1a", Outline Box( "Test", clb = Col List Box( all ) ) );
colItems = clb << get items;
Close( dt, no save );
nw << close window;
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add outline box to window.
4. Add column list box to outline box.
5. Get items from column list box.
6. Close original data table.
7. Close new window.



### Example 2
> **Summary**: Creates a column list box with font settings and closes it, while also deleting a symbol.

<!-- Keywords: #JSLScriptingLanguage, #ColumnListbox, #FontSettings, #DataVisualization, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), lb = Col List Box() );
lb << append( "weight" );
lb << append( "height" );
lb << Set Base Font( "Title" );
tt = "Heading";
lb << Set Base Font( tt );
Small = "Mono";
lb << Set Base Font( Small );
lb << Set Base Font( "duh" );
lb << Set Base Font( 2 );
lb << Set Base Font();
lb << Set Base Font( . );
lb << Set Base Font( Empty() );
lb << Set Base Font( "text" );
lb << Set Base Font( "SMALL" );
lb << Set Base Font( "formula editor" );
lb << Set Base Font( "ANNOtatioN" );
lb << Set Base Font( "axiS" );
Close( dt, "nosave" );
lb << close window;
Delete Symbols( Small );
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add column list box.
4. Append "weight" to list box.
5. Append "height" to list box.
6. Set base font to "Title".
7. Set base font to variable "tt".
8. Set base font to "Mono".
9. Set base font to "duh".
10. Set base font to number 2.
11. Set base font to default.
12. Set base font to empty.
13. Set base font to "text".
14. Set base font to "SMALL".
15. Set base font to "formula editor".
16. Set base font to "ANNOtatioN".
17. Set base font to "axiS".
18. Close data table without saving.
19. Close list box window.
20. Delete symbol "Small".



### Example 3
> **Summary**: Creates a column list box with font scaling options, capturing log messages for various font scale settings.

<!-- Keywords: #JSLScripting, #ColumnListbox, #FontScaling, #LogCapture, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Col List Box Example", Col List Box( all, width( 250 ), maxSelected( 1 ) ), lb = Col List Box() );
lb << append( "weight" );
lb << append( "height" );
lb << Set Font Scale( 2 );
tt = .75;
lb << Set Font Scale( tt );
log = "";
log = Log Capture( lb << Set Font Scale( 0 ) );
log = "";
log = Log Capture( lb << Set Font Scale() );
log = "";
log = Log Capture( lb << Set Font Scale( . ) );
log = "";
log = Log Capture( lb << Set Font Scale( Empty() ) );
log = "";
log = Log Capture( lb << Set Font Scale( -5 ) );
lb << Set Font Scale( 1 );
Close( dt, "nosave" );
lb << close window;
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add column list box.
4. Append "weight" to list box.
5. Append "height" to list box.
6. Set font scale to 2.
7. Set font scale to 0.75.
8. Capture log for setting font scale to 0.
9. Capture log for setting font scale without argument.
10. Capture log for setting font scale to empty.
11. Capture log for setting font scale to -5.
12. Set font scale to 1.
13. Close table without saving.
14. Close list box window.



### Example 4
> **Summary**: Creates a new window with a filter column selector, allowing users to interactively set the number of lines displayed.

<!-- Keywords: #JSLScriptingLanguage, #NewWindow, #FilterColumnSelector, #InteractiveInterface, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nw = New Window( "Col List Box Example", lb = Filter Col Selector( width( 250 ) ) );
lb << Set N Lines( 20 );
numLines = lb << Get Nlines;
numLines = lb << Get Nlines;
lb << Set N Lines( 0 );
numLines = lb << Get Nlines;
lb << Set N Lines( 5 );
numLines = lb << Get Nlines;
Close( dt, no save );
nw << Close window;
log = "";
```

**Code Explanation**:

1. Open data table.
2. Create new window.
3. Add filter column selector.
4. Set selector width.
5. Set number of lines.
6. Retrieve number of lines.
7. Retrieve number of lines again.
8. Set number of lines to zero.
9. Retrieve number of lines.
10. Set number of lines to five.
11. Retrieve number of lines.
12. Close data table.
13. Close window.
14. Initialize log variable.



### Example 5
> **Summary**: Runs font settings and window management in JMP, creating a new window with a filter column selector and setting various font styles.

<!-- Keywords: #JMPScriptingLanguage, #FontSettings, #WindowManagement, #FilterColumnSelector, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Test Case 30", lb = Filter Col Selector( width( 250 ) ) );
lb << Set Base Font( "Title" );
tt = "Heading";
lb << Set Base Font( tt );
Small = "Mono";
lb << Set Base Font( Small );
lb << Set Base Font( "duh" );
lb << Set Base Font( 2 );
lb << Set Base Font();
lb << Set Base Font( . );
lb << Set Base Font( Empty() );
lb << Set Base Font( "text" );
lb << Set Base Font( "SMALL" );
lb << Set Base Font( "formula editor" );
lb << Set Base Font( "ANNOtatioN" );
lb << Set Base Font( "axiS" );
Close( dt, "nosave" );
lb << close window;
Delete Symbols( Small );
```

**Code Explanation**:

1. Open data table.
2. Create new window titled "Test Case 30".
3. Add filter column selector to window.
4. Set base font to "Title".
5. Define variable `tt` as "Heading".
6. Set base font to `tt`.
7. Define variable `Small` as "Mono".
8. Set base font to `Small`.
9. Attempt to set base font to "duh".
10. Attempt to set base font to number 2.
11. Reset base font.
12. Attempt to set base font to empty symbol.
13. Attempt to set base font to "text".
14. Attempt to set base font to "SMALL".
15. Attempt to set base font to "formula editor".
16. Attempt to set base font to "ANNOtatioN".
17. Attempt to set base font to "axiS".
18. Close data table without saving.
19. Close the new window.
20. Delete symbol `Small`.



### Example 6
> **Summary**: Runs font scaling and logging operations in a JMP script, creating new windows with filter column selectors, text boxes, and combo boxes.

<!-- Keywords: #JSLScriptingLanguage, #JMP, #FontScaling, #LogCapture, #WindowCreation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
New Window( "Test Case 31", lb = Filter Col Selector( width( 250 ) ) );
lb << Set Font Scale( 2 );
tt = .75;
lb << Set Font Scale( tt );
log = "";
log = Log Capture( lb << Set Font Scale( 0 ) );
log = "";
log = Log Capture( lb << Set Font Scale() );
log = "";
log = Log Capture( lb << Set Font Scale( . ) );
log = "";
log = Log Capture( lb << Set Font Scale( Empty() ) );
log = "";
log = Log Capture( lb << Set Font Scale( -5 ) );
lb << Set Font Scale( 1 );
Close( dt, "nosave" );
lb << close window;
nw = New Window( "test", H List Box( Text Box( "left" ), fcs = Filter Col Selector(), Combo Box( {"a", "b", "c"} ) ) );
```

**Code Explanation**:

1. Open table.
2. Create new window.
3. Add filter column selector.
4. Set font scale to 2.
5. Initialize log variable.
6. Capture log for setting font scale to 0.75.
7. Clear log.
8. Capture log for default font scale.
9. Clear log.
10. Capture log for setting font scale to 0.
11. Clear log.
12. Capture log for setting font scale to empty.
13. Clear log.
14. Capture log for setting font scale to -5.
15. Set font scale to 1.
16. Close table without saving.
17. Close filter column selector window.
18. Create new window.
19. Add horizontal list box.
20. Add text box.
21. Add filter column selector.
22. Add combo box.



## Close using GetAsMatrix
> **Summary**: Runs data extraction and table creation by opening a JMP dataset, defining variable ranges, and generating new columns with specific properties.

<!-- Keywords: #JMPScriptingLanguage, #DataExtraction, #TableCreation, #ColumnManagement, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
vars = 4 :: 5;
Answer = [59 95, 61 123, 55 74, 66 145, 52 64, 60 84, 61 128, 51 79, 60 112, 61 107, 56 67, 65 98, 63 105, 58 95, 59 79, 61 81, 62 91, 65
142, 63 84, 62 85, 63 93, 64 99, 65 119, 64 92, 68 112, 64 99, 69 113, 62 92, 64 112, 67 128, 65 111, 66 105, 62 104, 66 106, 65 112, 60
115, 68 128, 62 116, 68 134, 70 172];
xData = dt << GetAsMatrix( 4 :: 5 );
xData2 = dt << GetAsMatrix( vars );
xData3 = dt << GetAsMatrix( Eval( vars ) );
xData4 = dt << GetAsMatrix( Eval( 4 :: 5 ) );
Close( dt, no save );
dt = New Table( "S1051899",
	Add Rows( 3 ),
	New Column( "End Spaces", Character, Nominal, Set Values( {"  trim this  ", "  trim that  ", "trim some more  "} ) ),
	New Column( "No end spaces", Character, Nominal, Set Values( {"trim this", "trim that", "trim some more"} ) ),
	New Column( "End Spaces with List Check",
		Character,
		Nominal,
		List Check( {"  trim that  ", "  trim this  ", "trim some more  "} ),
		Set Values( {"  trim this  ", "  trim that  ", "trim some more  "} )
	),
	New Column( "No End Spaces with List Check",
		Character,
		Nominal,
		List Check( {"trim some more", "trim that", "trim this"} ),
		Set Values( {"trim this", "trim that", "trim some more"} )
	)
);
tableScript = dt << Get Script;
newDt = Eval( tableScript );
```

**Code Explanation**:

1. Open data table;
2. Define variable range.
3. Define Answer matrix.
4. Extract columns 4-5 as xData.
5. Extract columns 4-5 as xData2.
6. Extract columns 4-5 as xData3.
7. Extract columns 4-5 as xData4.
8. Close dataset without saving.
9. Create new table S1051899.
10. Add columns with specific properties.



## Close using Log Capture
### Example 1
> **Summary**: Creates a new column in a data table, defines a formula with syntax error, and configures a Column List Box to print a message on change.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnListbox, #FormulaDefinition, #SyntaxError -->

**Code**:
```jsl
log string = Log Capture(
	dt = Open("data_table.jmp");
	dt << New Column( "crashy", Numeric, Formula( Local( {mal + formed}, 1 + 1 ) ) );
);
Close( dt, nosave );
New Window( "colwin", clb = Col List Box( dt, On Change( Print( "Changed" ) ) ) );
clb << Append( "Age" );
```

**Code Explanation**:

1. Capture log output.
2. Open data table.
3. Add new column "crashy".
4. Define formula with syntax error.
5. Close table without saving.
6. Create new window "colwin".
7. Add column list box.
8. Set on change event to print message.
9. Append "Age" to column list box.



### Example 2
> **Summary**: Executes Python scripts within JMP, capturing log output and retrieving Python objects.

<!-- Keywords: #JMPScriptingLanguage, #PythonIntegration, #LogCapture, #DataTableManagement, #ScriptExecution -->

**Code**:
```jsl
iris = Open("data_table.jmp");
commands = "\[
iris = jmp.current()   
print(iris.name)
]\";
s = Log Capture( Python Submit( commands ) );
iris = Python Get( iris );
Close( iris, nosave );
commands = "\[
jmpdt=jmp.current()
print(jmpdt)
]\";
s = Log Capture( Python Submit( commands ) );
```

**Code Explanation**:

1. Open data_table;
2. Prepare Python script.
3. Execute Python script.
4. Capture log output.
5. Retrieve Python object.
6. Close data_table dataset.
7. Prepare another Python script.
8. Execute second Python script.
9. Capture second log output.



## Close using Select where
> **Summary**: Runs data table operations to select, hide, label, and exclude rows based on specific conditions.

<!-- Keywords: #JMPScripting, #DataTableOperations, #ConditionalLogic, #RowManipulation, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Select where( :age == 13 );
dt << Exclude;
dt << Exclude( 1 );
dt << Exclude;
dt << Exclude;
dt << Exclude( 0 );
Close( dt, no save );
dt = Open("data_table.jmp");
dt << Select where( :age == 13 );
dt << Hide;
dt << Hide( 1 );
dt << Hide;
dt << Hide;
dt << Hide( 0 );
Close( dt, no save );
dt = Open("data_table.jmp");
dt << Select where( :age == 13 );
dt << Label;
dt << Label( 1 );
dt << Label;
dt << Label;
dt << Label( 0 );
Close( dt, no save );
dt = Open("data_table.jmp");
dt << Select where( :age == 13 );
dt << Label << Hide( 1 ) << Exclude( 0 );
dt << Label( 1 ) << Hide << Exclude;
dt << Label << Hide( 0 ) << Exclude( 0 );
dt << Label << Hide << Exclude;
dt << Label( 0 ) << Hide( 0 ) << Exclude( 0 );
```

**Code Explanation**:

1. Open data table;
2. Select rows where age is 13.
3. Exclude selected rows.
4. Exclude row 1.
5. Exclude selected rows again.
6. Exclude selected rows once more.
7. Exclude row 0.
8. Close table without saving.
9. Reopen "data_table.jmp".
10. Select rows where age is 13.
11. Hide selected rows.
12. Hide row 1.
13. Hide selected rows again.
14. Hide selected rows once more.
15. Hide row 0.
16. Close table without saving.
17. Reopen "data_table.jmp".
18. Select rows where age is 13.
19. Label selected rows.
20. Label row 1.
21. Label selected rows again.
22. Label selected rows once more.
23. Label row 0.
24. Close table without saving.
25. Reopen "data_table.jmp".
26. Select rows where age is 13.
27. Label, hide row 1, exclude row 0.
28. Label row 1, hide, exclude.
29. Label, hide row 0, exclude row 0.
30. Label, hide, exclude.
31. Label row 0, hide row 0, exclude row 0.



## Close using New Column
> **Summary**: Creates a new column in a JMP data table, applying a Munger formula to extract specific information from existing columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #FormulaEvaluation, #ColumnCreation, #MungerFormula -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "X", Formula( Munger( :name, 1, "M" ) ) );
Column( "X" ) << Eval Formula;
colVals = Column( dt, "x" ) << Get Values;
Close( dt, NoSave );
certv = {"a", "b", "c", "1", "2", "3"};
```

**Code Explanation**:

1. Open data table.
2. Create new column "X".
3. Apply Munger formula to "Name".
4. Evaluate formula for "X".
5. Retrieve values from "X".
6. Close data table without saving.
7. Define certification variables.



## Close using Try
### Example 1
> **Summary**: Runs the opening, closing, and renaming of data tables in JMP, utilizing Try() and Contains() functions to manage window titles.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #WindowTitleHandling, #TryFunction, #ContainsFunction -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
thisTitle = dt << Get Name;
testWins = Try( Get Window List() << Get Window Title, Window() << Get Window Title );
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = New Table( "test table", "private" );
thisTitle = dt << Get Name;
testWins = Try( Get Window List() << Get Window Title, Window() << Get Window Title );
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
Delete Symbols( dt, biv );
```

**Code Explanation**:

1. Open data table.
2. Retrieve table name.
3. Get window list titles.
4. Check if table title in list.
5. Close table without saving.
6. Create new private table.
7. Retrieve new table name.
8. Get updated window list titles.
9. Check if new table title in list.
10. Close new table without saving.



### Example 2
> **Summary**: Runs the opening, closing, and summarizing of data tables in JMP, utilizing various technical features such as Try(), Get Window List(), and Summarize()

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #Summarization, #TryStatement, #WindowHandling -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "invisible" );
thisTitle = dt << Get Name;
testWins = Try( Get Window List() << Get Window Title, Window() << Get Window Title );
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = New Table( "test table", "invisible" );
thisTitle = dt << Get Name;
testWins = Try( Get Window List() << Get Window Title, Window() << Get Window Title );
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
thisTitle = dt << Get Name;
testWins = Try( Get Window List() << Get Window Title, Window() << Get Window Title );
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
dt = New Table( "test table", "private" );
thisTitle = dt << Get Name;
testWins = Try( Get Window List() << Get Window Title, Window() << Get Window Title );
testThisWin = Contains( testWins, thisTitle );
Close( dt, nosave );
Delete Symbols( dt, biv );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "private" );
biv = dt << Run Script( "Bivariate" );
Close( dt, "nosave" );
Delete Symbols( dt, biv );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "invisible" );
biv = dt << Run Script( "Bivariate" );
Close( dt, "nosave" );
Delete Symbols( dt, biv );
Delete Symbols( dt, exg, exm );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "private" );
Summarize( dt, exg = By( :sex ), exm = Mean( :height ) );
Close( dt, "nosave" );
Delete Symbols( dt, exg, exm );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", "invisible" );
Summarize( dt, exg = By( :sex ), exm = Mean( :height ) );
Close( dt, "nosave" );
Delete Symbols( dt, exg, exm );
```

**Code Explanation**:

1. Open data table;
2. Get window title.
3. Check if title exists.
4. Close data_table.jmp without saving.
5. Create new invisible table.
6. Get window title.
7. Check if title exists.
8. Close table without saving.
9. Open data table;
10. Get window title.
11. Check if title exists.
12. Close data_table.jmp without saving.
13. Create new private table.
14. Get window title.
15. Check if title exists.
16. Close table without saving.
17. Delete symbols.
18. Open data table;
19. Run Bivariate script.
20. Close data_table.jmp without saving.
21. Delete symbols.
22. Open data table;
23. Run Bivariate script.
24. Close data_table.jmp without saving.
25. Delete symbols.
26. Delete symbols.
27. Open data table;
28. Summarize data by sex.
29. Close data_table.jmp without saving.
30. Delete symbols.
31. Open data table;
32. Summarize data by sex.
33. Close data_table.jmp without saving.
34. Delete symbols.



### Example 3
> **Summary**: Runs the training and evaluation of a neural network model using JMP's Neural platform, with cross-validation and customizable parameters.

<!-- Keywords: #JMP_Neural, #MachineLearning, #CrossValidation, #NeuralNetworks, #DataScience -->

**Code**:
```jsl
Open("data_table.jmp");
test = Try(
	obj = Neural Net(
		Y( :Y ),
		X( :X ),
		crossvalidation( 1 ),
		hidden nodes( 3 ),
		overfit penalty( 0.001 ),
		number of tours( 20 ),
		max iterations( 50 ),
		converge criterion( 0.00001 ),
		set random seed( 1261684285 ),
		Go,
		SendToReport( Dispatch( {"Current Fit Results"}, "Parameter Estimates", OutlineBox, Close( 0 ) ) )
	),
	1
);
```

**Code Explanation**:

1. Open data table;
2. Initialize neural network object.
3. Set response variable.
4. Set predictor variable.
5. Enable cross-validation.
6. Define hidden nodes.
7. Set overfit penalty.
8. Specify number of tours.
9. Define max iterations.
10. Set convergence criterion.



## Close using Run Script
### Example 1
> **Summary**: Executes a Bivariate script on a dataset, followed by closing and deleting symbols without saving.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #DataManipulation, #PathDiagramProperties, #SEM -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
biv = dt << Run Script( "Bivariate" );
Close( dt, "nosave" );
Delete Symbols( dt, biv );
```

**Code Explanation**:

1. Open data table;
2. Run Bivariate script on dataset.
3. Close dataset without saving.
4. Delete symbols for dataset and bivariate object.



### Example 2
> **Summary**: Executes a Bivariate script and subsequent cleanup operations on a data table, including closing the table without saving and deleting symbols.

<!-- Keywords: #JSLScriptingLanguage, #BivariateAnalysis, #DataTableManagement, #SEMPathAnalysis, #JMP -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "invisible" );
biv = dt << Run Script( "Bivariate" );
Close( dt, "nosave" );
Delete Symbols( dt, biv );
Delete Symbols( dt, exg, exm );
```

**Code Explanation**:

1. Open data table.
2. Run Bivariate script.
3. Close data table without saving.
4. Delete Bivariate object symbol.
5. Delete other symbols.



### Example 3
> **Summary**: Creates and customizes a bubble plot for specific country data, executing 26 steps to refine the visualization.

<!-- Keywords: #JMPScriptingLanguage, #BubblePlot, #DataSelection, #VisualizationAutomation, #CountryAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
bp = dt << Run Script( "Bubble Plot Dynamic" );
dt << Select Where( :Country == 3365 );
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Step();
bp << Selectable Across Gaps( 1 );
bp << Close Window;
Close( dt, nosave );
dt = Open("data_table.jmp");
dt << Select Where( :Country == 3365 );
bp = dt << Run Script( "Bubble Plot Dynamic" );
bp << Time Index( 19 );
bp << No Labels;
bp << All Labels;
bp << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Run bubble plot script.
3. Select specific country.
4. Execute 26 steps on bubble plot.
5. Enable selectable across gaps.
6. Close bubble plot window.
7. Close data table without saving.
8. Reopen data table.
9. Select specific country again.
10. Run bubble plot script again.
11. Set time index to 19.
12. Disable all labels.
13. Enable all labels.
14. Close bubble plot window.



## Close using Summarize
> **Summary**: Runs data summarization by sex and calculates the mean height, then closes the dataset without saving and deletes temporary symbols.

<!-- Keywords: #JSLScripting, #DataSummarization, #ByGroup, #MeanCalculation, #DatasetManagement -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", "private" );
Summarize( dt, exg = By( :sex ), exm = Mean( :height ) );
Close( dt, "nosave" );
Delete Symbols( dt, exg, exm );
```

**Code Explanation**:

1. Open data table;
2. Summarize data by sex.
3. Calculate mean height.
4. Close dataset without saving.
5. Delete temporary symbols.



## Close using Expr
> **Summary**: Runs table operations, including copying cell values, creating a matrix difference, and defining a new table creation.

<!-- Keywords: #JSLScriptingLanguage, #TableOperations, #MatrixDifference, #NewTableCreation, #DataManipulation -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt[1, 1] = dt[2, 1];
dt[1, {height, weight}] = dt[2, 4 :: 5];
dt[0, {height}] = dt[0, {weight}];
mat = (dt:height << get as matrix) - (dt:weight << get as matrix);
dt[[5 3 1], 0] = .;
Close( dt, "nosave" );
makedt = Expr(
	dt = New Table( "Untitled",
		Add Rows( 10 ),
		New Column( "name",
			Character,
			"Nominal",
			Set Values( {"KATIE", "LOUISE", "JANE", "JACLYN", "LILLIE", "TIM", "JAMES", "ROBERT", "BARBARA", "ALICE"} )
		),
		New Column( "color",
			Character,
			"Nominal",
			Set Values( {"red", "black", "orange", "blue", "pink", "green", "yellow", "purple", "magenta", "cyan"} )
		),
		New Column( "fruit",
			Character,
			"None",
			Set Values( {"peach", "blueberry", "apple", "pear", "strawberry", "kiwi", "orange", "lime", "tangerine", "lemon"} )
		),
		New Column( "age", Numeric, "Ordinal", Format( "Best", 12 ), Set Values( [4, 6, 8, 3, 5, 10, 9, 9, 5, 10] ) ),
		New Column( "weight", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [6, 2, 9, 8, 7, 3, 9, 2, 2, 8] ) ),
		New Column( "pictures",
			Expression,
			"None",
			Set Values( {Empty(), Empty(), Empty(), Empty(), Empty(), Empty(), Empty(), Empty(), Empty(), Empty()} )
		)
	)
);
dt = "";
makedt;
log = "";
log = Trim( Log Capture( dt:name[1] = . ) );
 
dt[1, 2] = .;
dt[5, 2] = .;
dt[5, 3] = .;
dt:pictures[1] = .;
dt[5, 6] = .;
```

**Code Explanation**:

1. Open table.
2. Copy cell value.
3. Copy multiple cells.
4. Rename column.
5. Create matrix difference.
6. Clear specified rows.
7. Close table without saving.
8. Define new table creation.
9. Reset variable.
10. Execute table creation.



## Close using Add Column Properties
> **Summary**: Runs data table operations, adding value labels to the 'sex' column, selecting rows where sex is Female, and creating a new column 'x' with a formula and format.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ValueLabels, #ColumnFormula, #FixedDecimalFormat -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:sex << Add Column Properties( Value Labels( {"F" = "Female", "M" = "Male"} ), Use Value Labels( 1 ) );
dt << select where( Column( dt, "sex", "formatted" )[] == "Female" );
Close( dt, nosave );
dt = Open("data_table.jmp");
dt << New Column( "x", Formula( :age / :weight ), Format( "Fixed Dec", 10, 4 ) );
```

**Code Explanation**:

1. Open data table;
2. Add value labels to sex.
3. Enable value labels for sex.
4. Select rows where sex is Female.
5. Close table without saving.
6. Reopen data_table.jmp.
7. Create new column x.
8. Set formula for x: age divided by weight.
9. Format x as fixed decimal with 4 places.
10. Save changes.



## Close using Row
> **Summary**: Runs repetitive data table operations and creates a new column with a formula-based calculation.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #FormulaCalculation, #NominalColumn, #LagFunction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 3;
Close( dt, nosave );
dt = Open("data_table.jmp");
Row() = 3;
Close( dt, nosave );
dt = Open("data_table.jmp");
Row() = 3;
Close( dt, nosave );
dt = Open("data_table.jmp");
Row() = 3;
Close( dt, nosave );
dt = Open("data_table.jmp");
Row() = 3;
Close( dt, nosave );
dt = Open("data_table.jmp");
Row() = 10;
Close( dt, nosave );
dt = Open("data_table.jmp");
dt << New Column( "Lag Test", "Character", "Nominal", Formula( If( :sex == "M", Lag( :name ), Lag() ) ) );
```

**Code Explanation**:

1. Open data table;
2. Set row to 3.
3. Close data_table.jmp without saving.
4. Repeat steps 1-3.
5. Open data table;
6. Set row to 3.
7. Close data_table.jmp without saving.
8. Open data table;
9. Set row to 3.
10. Close data_table.jmp without saving.
11. Open data table;
12. Set row to 3.
13. Close data_table.jmp without saving.
14. Open data table;
15. Set row to 10.
16. Close data_table.jmp without saving.
17. Open data table;
18. Create new column "Lag Test".
19. Set column type to Character, Nominal.
20. Define formula for "Lag Test".



## Close using Color or Mark by Column
### Example 1
> **Summary**: Runs data visualization and filtering operations on a JMP data table, including color-marking by the Age column, selecting female rows, hiding selected rows, and creating two graph windows.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #Filtering, #GraphWindows, #JSL -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
dt << Hide;
dt << Clear Select;
dt << show window;
sz = [11, 12, 13, 14];
nw15 = New Window( "Test", g15 = Graph Box( Line Seg( [10 20 30 40], [40 30 20 10], Row states( dt, [5 11 21 30] ), Sizes( sz ) ) ) );
frame = g15[FrameBox( 1 )];
nw15 << Close Window;
Close( dt, no save );
nw16 = New Window( "Test",
	g16 = Graph Box(
		Line Seg(
			[10 20 30 40],
			[40 30 20 10],
			Row states( {Hidden State( 0 ), Hidden State( 0 ), Hidden State( 1 ), Hidden State( 1 )} )
		)
	)
);
frame = g16[FrameBox( 1 )];
nw16 << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Color/mark by Age column.
3. Select rows where sex is Female.
4. Hide selected rows.
5. Clear row selection.
6. Show data table window.
7. Define sizes array.
8. Create first graph window.
9. Get frame box reference.
10. Close first graph window.
11. Close data table without saving.
12. Create second graph window.
13. Get frame box reference.
14. Close second graph window.



### Example 2
> **Summary**: Visualizes and filters a data table, creating two new windows with graph boxes that display marker segments based on age and sex.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #GraphBox, #MarkerSegments, #TableFiltering -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
dt << Label;
dt << Clear Select;
sz = [11, 12, 13, 14];
nw15 = New Window( "Test", g15 = Graph Box( Marker Seg( [10 20 30 40], [40 30 20 10], Row states( dt, [5 11 20 29] ), Sizes( sz ) ) ) );
frame = g15[FrameBox( 1 )];
nw15 << Close Window;
Close( dt, no save );
sz = [11, 12, 13, 14];
nw14 = New Window( "Test13",
	g14 = Graph Box(
		Marker Seg(
			[10 20 30 40],
			[40 30 20 10],
			Row states(
				{Combine States( Color State( "red" ), Marker State( "star" ), Labeled State( 1 ), Hidden State( 0 ) ),
				Combine States( Marker State( 8 ), Color State( 8 ), Labeled State( 1 ), Hidden State( 1 ) ),
				Combine States( Color State( "fuchsia" ), Marker State( Filled Left Triangle ), Labeled State( 1 ), Hidden State( 0 ) ),
				Combine States( Marker State( "T" ), Color State( -2648061 ), Labeled State( 1 ), Hidden State( 1 ) )}
			),
			sizes( sz )
		)
	)
);
frame = g14[FrameBox( 1 )];
nw14 << Close Window;
```

**Code Explanation**:

1. Open data table.
2. Color/mark by age.
3. Select female rows.
4. Label selected rows.
5. Clear selection.
6. Define marker sizes.
7. Create new window with graph.
8. Access graph frame.
9. Close window.
10. Close data table without saving.



### Example 3
> **Summary**: Vizualizes a data table by coloring and marking rows based on Age, selecting females, and creating new windows with graph boxes.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #GraphBox, #MarkerSegments, #WindowManagement -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
dt << Hide;
dt << Clear Select;
sz = [11, 12, 13, 14];
nw15 = New Window( "Test", g15 = Graph Box( Marker Seg( [10 20 30 40], [40 30 20 10], Row states( dt, [5 11 20 29] ), Sizes( sz ) ) ) );
frame = g15[FrameBox( 1 )];
nw15 << Close Window;
Close( dt, no save );
sz = [11, 12, 13, 14];
nw14 = New Window( "Test13",
	g14 = Graph Box(
		Marker Seg(
			[10 20 30 40],
			[40 30 20 10],
			Row states(
				{Combine States( Color State( "red" ), Marker State( "star" ), Labeled State( 1 ), Excluded State( 0 ) ),
				Combine States( Marker State( 8 ), Color State( 8 ), Labeled State( 1 ), Excluded State( 1 ) ),
				Combine States( Color State( "fuchsia" ), Marker State( Filled Left Triangle ), Labeled State( 1 ), Excluded State( 0 ) ),
				Combine States( Marker State( "T" ), Color State( -2648061 ), Labeled State( 1 ), Excluded State( 1 ) )}
			),
			sizes( sz )
		)
	)
);
frame = g14[FrameBox( 1 )];
nw14 << Close Window;
```

**Code Explanation**:

1. Open data table;
2. Color by Age, pastel theme.
3. Mark by Age, alphanumeric theme.
4. Select females.
5. Hide selected rows.
6. Clear selection.
7. Define sizes array.
8. Create new window "Test".
9. Add graph box with marker segments.
10. Get frame box.
11. Close window "Test".
12. Close data table without saving.
13. Redefine sizes array.
14. Create new window "Test13".
15. Add graph box with detailed marker segments.
16. Get frame box.
17. Close window "Test13".



### Example 4
> **Summary**: Creates a graph box with marker segments, color-coded by age and marked by sex, in JMP.

<!-- Keywords: #JMPScriptingLanguage, #GraphBox, #MarkerSegments, #ColorCoding, #DataVisualization -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << Color or Mark by Column( :Age, Color theme( "pastel" ), Marker theme( "alphanumeric" ) );
dt << Select Where( :sex == "F" );
dt << Exclude;
dt << Clear Select;
sz = [11, 12, 13, 14];
nw29 = New Window( "Test", g29 = Graph Box( Marker Seg( [10 20 30 40], [40 30 20 10], Row states( dt, [5 11 20 29] ), Sizes( sz ) ) ) );
frame = g29[FrameBox( 1 )];
nw29 << Close Window;
Close( dt, no save );
sz = [11, 12, 13, 14];
nw30a = New Window( "Test13",
	g30a = Graph Box(
		Marker Seg(
			[10 20 30 40],
			[40 30 20 10],
			Row states(
				{Combine States( Color State( "red" ), Marker State( "star" ), Labeled State( 1 ), Selected State( 0 ) ),
				Combine States( Marker State( 8 ), Color State( 8 ), Labeled State( 1 ), Selected State( 1 ) ),
				Combine States( Color State( "fuchsia" ), Marker State( Filled Left Triangle ), Labeled State( 1 ), Selected State( 0 ) ),
				Combine States( Marker State( "T" ), Color State( -2648061 ), Labeled State( 1 ), Selected State( 1 ) )}
			),
			sizes( sz )
		)
	)
);
frame = g30a[FrameBox( 1 )];
nw30a << Close Window;
```

**Code Explanation**:

1. Open table.
2. Color or mark by column.
3. Select females.
4. Exclude selected rows.
5. Clear selection.
6. Create new window.
7. Add graph box.
8. Plot marker segments.
9. Get frame box.
10. Close window.



## Close using SVD
> **Summary**: Runs the computation and reconstruction of matrices using SVD and Sparse SVD techniques, with additional functionality for sparse matrix decomposition and function calls.

<!-- Keywords: #JSLScriptingLanguage, #SingularValueDecomposition, #SparseMatrixDecomposition, #MatrixReconstruction, #FunctionCalls -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
mat1 = dt1 << Get As Matrix;
Close( dt1, Nosave );
x = [0 0 1, 1 0 1, 1 0 1, 0 1 1, 0 1 1, 0 0 1, 1 1 1, 0 0 0, 1 1 1, 0 0 0];
{U1, D1, V1} = SVD( x );
{U2, D2, V2} = Sparse SVD( x );
newX2 = U2 * Diag( D2 ) * V2`;
x = [0 0 0, 0 0 1, 1 0 1, 0 0 0, 0 0 0, 0 0 0, 0 1 0, 0 0 1, 1 1 0, 0 1 0];
{U1, D1, V1} = SVD( x );
{U2, D2, V2} = Sparse SVD( x );
newX2 = U2 * Diag( D2 ) * V2`;
x = Diag( 1 :: 500 );
{U, D, V} = Sparse SVD( x );
actD = 500 :: 1;
newX = U * Diag( D ) * V`;
 
x = Diag( 8 * Identity( 5 ), 5 * Identity( 5 ), 2 * Identity( 5 ) );
{U1, D1, V1} = Sparse SVD( x );
newX1 = U1 * Diag( D1 ) * V1`;
ChrisExample2Fun = Function( {nSing},
	{nR, nC, U0, S0, V0, A0, nNonZero, A, Ub, Sb, Vb},
	Random Reset( 123456789 );
	nR = 1000;
	nC = 100;
	A0 = J( nR, nC, Random Integer( 0, 1 ) );
	{U0, S0, V0} = SVD( A0 );
	nNonZero = 50;
	S0[nNonZero + 1 :: 100] = 0;
	A = U0 * Diag( S0 ) * V0`;
	{Ub, Sb, Vb} = Sparse SVD( A, nSing );
	If( nSing > 50,
		result = S0 || (Sb |/ J( N Rows( S0 ) - N Rows( Sb ), 1, 0 )),
		result = S0[1 :: nSing] || Sb
	);
);
nSing2 = ChrisExample2Fun( 2 );
nSing4 = ChrisExample2Fun( 4 );
nSing5 = ChrisExample2Fun( 5 );
nSing10 = ChrisExample2Fun( 10 );
nSing15 = ChrisExample2Fun( 15 );
nSing30 = ChrisExample2Fun( 30 );
nSing40 = ChrisExample2Fun( 40 );
nSing50 = ChrisExample2Fun( 50 );
nSing60 = ChrisExample2Fun( 60 );
nSing29 = ChrisExample2Fun( 29 );
```

**Code Explanation**:

1. Open data table.
2. Convert table to matrix.
3. Close data_table.jmp data table.
4. Define matrix x.
5. Perform SVD on x.
6. Perform Sparse SVD on x.
7. Reconstruct matrix newX2.
8. Redefine matrix x.
9. Perform SVD on new x.
10. Perform Sparse SVD on new x.
11. Reconstruct matrix newX2.
12. Define diagonal matrix x.
13. Perform Sparse SVD on x.
14. Adjust diagonal matrix actD.
15. Reconstruct matrix newX.
16. Define block diagonal matrix x.
17. Perform Sparse SVD on x.
18. Reconstruct matrix newX1.
19. Define function ChrisExample2Fun.
20. Call ChrisExample2Fun with argument 2.
21. Call ChrisExample2Fun with argument 4.
22. Call ChrisExample2Fun with argument 5.
23. Call ChrisExample2Fun with argument 10.
24. Call ChrisExample2Fun with argument 15.
25. Call ChrisExample2Fun with argument 30.
26. Call ChrisExample2Fun with argument 40.
27. Call ChrisExample2Fun with argument 50.
28. Call ChrisExample2Fun with argument 60.
29. Call ChrisExample2Fun with argument 29.



## Close using Chart
### Example 1
> **Summary**: Creates and customizes multiple charts from a data table, showcasing mean height and weight by sex and age, with interactive color overlays.

<!-- Keywords: #JSLScriptingLanguage, #DataVisualization, #InteractiveCharts, #CustomizationOptions, #MeanHeightAndWeight -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :sex, :age ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Show Level Legend( 1 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Show Level Legend( 1 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :sex, :age ), Y( Mean( :height ) ) );
obj << Show Level Legend( 1 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Y[1] << Overlay Color( 41 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Y[2] << Overlay Color( Red );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << (Y[1] << Overlay Color( 41 ));
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << (Y[2] << Overlay Color( Red ));
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart(
	X( :age, :sex ),
	Y( Mean( :height ), Mean( :weight ) ),
	Overlay( 1 ),
	Y[1] << Overlay Color( 41 ),
	Y[2] << Overlay Color( Red )
);
```

**Code Explanation**:

1. Open data table;
2. Create chart with sex and age on X, mean height and weight on Y.
3. Show level legend.
4. Close dataset without saving.
5. Repeat steps 1-4 with age and sex on X.
6. Repeat steps 1-4 with sex and age on X, only mean height on Y.
7. Repeat steps 1-4 with age and sex on X, color mean height overlay.
8. Repeat steps 1-4 with age and sex on X, color mean weight overlay.
9. Repeat steps 1-4 with age and sex on X, color mean height overlay.
10. Repeat steps 1-4 with age and sex on X, color mean weight overlay.
11. Open data table;
12. Create chart with age and sex on X, mean height and weight on Y, color overlays.



### Example 2
> **Summary**: Creates and customizes multiple charts in JMP, utilizing the Chart() function to visualize mean height and weight by sex and age.

<!-- Keywords: #JMPScriptingLanguage, #ChartCustomization, #DataVisualization, #ScriptAutomation, #MeanCalculation -->

**Code**:
```jsl
Open("data_table.jmp");
obj = Chart( X( :sex, :age ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Show Level Legend( 1 );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Show Level Legend( 1 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :sex, :age ), Y( Mean( :height ) ) );
obj << Show Level Legend( 1 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Y[1] << Overlay Color( 41 );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << Y[2] << Overlay Color( Red );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << (Y[1] << Overlay Color( 41 ));
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :age, :sex ), Y( Mean( :height ), Mean( :weight ) ), Overlay( 1 ) );
obj << (Y[2] << Overlay Color( Red ));
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart(
	X( :age, :sex ),
	Y( Mean( :height ), Mean( :weight ) ),
	Overlay( 1 ),
	Y[1] << Overlay Color( 41 ),
	Y[2] << Overlay Color( Red )
);
```

**Code Explanation**:

1. Open data table;
2. Create chart with sex, age on X, mean height, weight on Y.
3. Enable level legend.
4. Reopen "data_table.jmp" table.
5. Create chart with age, sex on X, mean height, weight on Y.
6. Enable level legend.
7. Close table without saving.
8. Reopen "data_table.jmp" table.
9. Create chart with sex, age on X, mean height on Y.
10. Enable level legend.
11. Close table without saving.
12. Reopen "data_table.jmp" table.
13. Create chart with age, sex on X, mean height, weight on Y.
14. Set overlay color for Y1 to 41.
15. Close table without saving.
16. Reopen "data_table.jmp" table.
17. Create chart with age, sex on X, mean height, weight on Y.
18. Set overlay color for Y2 to Red.
19. Close table without saving.
20. Reopen "data_table.jmp" table.
21. Create chart with age, sex on X, mean height, weight on Y.
22. Set overlay color for Y1 to 41.
23. Close table without saving.
24. Reopen "data_table.jmp" table.
25. Create chart with age, sex on X, mean height, weight on Y.
26. Set overlay color for Y2 to Red.
27. Close table without saving.
28. Reopen "data_table.jmp" table.
29. Create chart with age, sex on X, mean height, weight on Y.
30. Set overlay colors for Y1 to 41, Y2 to Red.



### Example 3
> **Summary**: Creates and customizes multiple charts in JMP, utilizing various data manipulation techniques and visualization options.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #ChartCustomization, #RangeCharts, #InteractiveDashboards -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart( X( :YearWeek ), Y( Max( :High ), Min( :Low ), Mean( :Close ) ), Range Chart( 1 ), Y[3] << Connect Points( 1 ) );
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart(
	X( :Date ),
	Y( :High, :Low, :Close ),
	Range Chart( 1 ),
	Y[3] << {Connect Points( 1 ), Pen Style( 1 )},
	SendToReport( Dispatch( {}, "Chart", FrameBox, {Frame Size( 868, 207 ), Line Width Scale( 0.5 )} ) )
);
Close( dt, NoSave );
dt = Open("data_table.jmp");
obj = Chart( X( :Size Co ), Y( Mean( :Name( "Sales ($M)" ) ), Mean( :Name( "Profits ($M)" ) ) ), Range Chart( 1 ) );
```

**Code Explanation**:

1. Open data table;
2. Create a chart with YearWeek on X.
3. Plot High, Low, and Close on Y.
4. Add a range chart.
5. Connect points for Close.
6. Close the dataset without saving.
7. Reopen "data_table.jmp".
8. Create another chart with Date on X.
9. Plot High, Low, and Close on Y.
10. Add a range chart.
11. Connect and style points for Close.
12. Adjust frame size and line width.
13. Close the dataset without saving.
14. Open data table;
15. Create a chart with Size Co on X.
16. Plot mean Sales and Profits on Y.
17. Add a range chart.



## Close using Python Send
> **Summary**: Runs the interaction between JMP and Python to send data, execute commands, capture log output, and retrieve updated data.

<!-- Keywords: #JMP-PythonIntegration, #DataTransfer, #LogCapture, #PythonScripting, #Automation -->

**Code**:
```jsl
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
iris = jmp.table('data_table.jmp') 
print(iris.name)
]\";
s = Log Capture( Python Submit( commands ) );
iris = Python Get( iris );
Close( iris, nosave );
commands = "\[
jmp.DataTable('Powered by Python', 30)
mydt = jmp.table('Powered by Python')
print(mydt.name)
]\";
s = Log Capture( Python Submit( commands ) );
mydt = Python Get( mydt );
```

**Code Explanation**:

1. Open data table;
2. Send data to Python.
3. Define Python commands.
4. Execute Python commands.
5. Capture log output.
6. Retrieve updated data.
7. Close dataset without saving.
8. Define new Python commands.
9. Execute new Python commands.
10. Capture new log output.



## Close using Informat
> **Summary**: Opens and closes a data table, formatting a date string, sending it to Python, capturing log output, and submitting a print command.

<!-- Keywords: #JSLScriptingLanguage, #DataManagement, #PythonIntegration, #LogCapture, #DateFormatting -->

**Code**:
```jsl
d2 = Open("data_table.jmp");
L3 = {d1, d2};
Close( d2, nosave );
date = Informat( "07/15/2000 22:01:31", "Format Pattern", "<MM>/<DD>/<YYYY> <hh24>:<mm>:<ss>" );
Python Send( date );
s = Log Capture( Python Submit( "print(date)" ) );
```

**Code Explanation**:

1. Open data_table;
2. Create list with datasets.
3. Close data_table dataset without saving.
4. Format date string.
5. Send date to Python.
6. Capture log from Python.
7. Submit print command in Python.
8. Store log capture result.



## Close using Python Connect
### Example 1
> **Summary**: Runs Python connectivity and data manipulation tasks, including matrix operations, list definitions, log captures, and dataset interactions.

<!-- Keywords: #JSLScripting, #PythonIntegration, #DataManipulation, #MatrixOperations, #LogCapturing -->

**Code**:
```jsl
Python Connect();
M = [1 2 3, 4 5 6, 7 8 9];
L = {1.2, -2, 3, 124};
L2 = {1, 2 + 3, [11 22]};
s = Log Capture( Python Submit( "print(L2)" ) );
iris = Open("data_table.jmp");
Python Send( iris );
commands = "\[
import jmp
iris = jmp.table('data_table.jmp') 
print(iris.__class__)
]\";
s = Log Capture( Python Submit( commands ) );
Close( iris, nosave );
d1 = Open("data_table.jmp");
d2 = Open("data_table.jmp");
L3 = {d1, d2};
Close( d1, nosave );
Close( d2, nosave );
date = Informat( "07/15/2000 22:01:31", "Format Pattern", "<MM>/<DD>/<YYYY> <hh24>:<mm>:<ss>" );
Python Send( date );
s = Log Capture( Python Submit( "print(date)" ) );
dt = Open("data_table.jmp");
Python Send( dt:weight );
w = Log Capture( Python Submit( "print(dt_weight)" ) );
Close( dt );
dt = Open("data_table.jmp");
Python Send( dt:weight, Python Name( "weight" ) );
s = Log Capture( Python Submit( "print(weight)" ) );
```

**Code Explanation**:

1. Connect to Python.
2. Define matrix M.
3. Define list L.
4. Define list L2.
5. Capture log of Python output for L2.
6. Open data table;
7. Send Iris dataset to Python.
8. Execute Python commands on Iris dataset.
9. Close Iris dataset without saving.
10. Open data table;
11. Open data table;
12. Define list L3 with datasets.
13. Close Big Class dataset without saving.
14. Close Iris dataset without saving.
15. Convert string to date.
16. Send date to Python.
17. Capture log of Python output for date.
18. Open data table;
19. Send weight column to Python.
20. Capture log of Python output for weight.
21. Close Big Class dataset.
22. Open data table;
23. Send weight column with name to Python.
24. Capture log of Python output for named weight.



### Example 2
> **Summary**: Runs Python connectivity and data transfer between JMP and Python, logging output and handling exceptions.

<!-- Keywords: #JMPScriptingLanguage, #PythonIntegration, #DataTransfer, #ExceptionHandling, #Automation -->

**Code**:
```jsl
Python Connect();
Python Send File( "$SAMPLE_DATA/data_table.jmp" );
s = Log Capture( Python Submit( "print(Big_Class)" ) );
If( Host is( Windows ), , );
Close( "data_table", nosave );
Python Send File( "$SAMPLE_DATA/Baseball.jmp", python name( "python_Baseball" ) );
s = Log Capture( Python Submit( "print(python_Baseball)" ) );
If( Host is( Windows ), , );
Close( "Baseball", nosave );
s = Log Capture( Python Submit( "print(python_Baseball2)" ) );
Try( Python Send File( "$SAMPLE_SCRIPTS/Python/JMP2pandas.py" ), exception_msg );
Try( Python Send File( "$SAMPLE_DATA/Non Existing.jmp" ), exception_msg );
```

**Code Explanation**:

1. Connect to Python.
2. Send data_table.jmp to Python.
3. Log Python output.
4. Check if host is Windows.
5. Close data_table without saving.
6. Send Baseball.jmp to Python.
7. Log Python output.
8. Check if host is Windows.
9. Close Baseball without saving.
10. Log Python output.
11. Try sending JMP2pandas.py to Python.
12. Try sending Non Existing.jmp to Python.



### Example 3
> **Summary**: Runs the establishment of a Python connection, data table operations, and date conversion using JMP's JSL scripting language.

<!-- Keywords: #JMPScriptingLanguage, #PythonIntegration, #DataTableOperations, #DateConversion, #Automation -->

**Code**:
```jsl
pythonconn = Python Connect();
M = [1 2 3, 4 5 6, 7 8 9];
L = {1.2, -2, 3, 124};
L2 = {1, 2 + 3, [11 22]};
s = Log Capture( Python Submit( "print(L2)" ) );
iris = Open("data_table.jmp");
pythonconn << Set( iris );
commands = "\[
import jmp
iris = jmp.table('data_table.jmp') 
print(iris.__class__)
]\";
s = Log Capture( Python Submit( commands ) );
Close( iris, nosave );
d1 = Open("data_table.jmp");
d2 = Open("data_table.jmp");
L3 = {d1, d2};
Close( d1, nosave );
Close( d2, nosave );
date = Informat( "07/15/2000 22:01:31", "Format Pattern", "<MM>/<DD>/<YYYY> <hh24>:<mm>:<ss>" );
pythonconn << Set( date );
s = Log Capture( Python Submit( "print(date)" ) );
```

**Code Explanation**:

1. Establish Python connection.
2. Define matrix M.
3. Define list L.
4. Define list L2.
5. Capture Python print output.
6. Open data table;
7. Send data_table dataset to Python.
8. Execute Python commands on data_table.
9. Close data_table dataset without saving.
10. Open data table;
11. Open data table;
12. Define list L3 with datasets.
13. Close Big Class dataset without saving.
14. Close data_table dataset without saving.
15. Convert string to date.
16. Send date to Python.
17. Capture Python print output.



