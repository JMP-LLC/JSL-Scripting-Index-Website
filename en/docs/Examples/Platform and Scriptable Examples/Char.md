# Char

## Char using New Window
> **Summary**: Creates a matrix box with detailed row names and column headers from a data table, utilizing JMP's scripting capabilities.

<!-- Keywords: #JMPScripting, #MatrixBox, #DataVisualization, #RowNames, #ColumnHeaders -->

**Code**:
```jsl
dt = Open("data_table.jmp");
i = 1;
New Window( "",
	Matrix Box(
		dt << get as matrix,
		<<Column Names( "age", "height", "weight" ),
		<<Row Names( Repeat( {"r" || Char( i++ )}, N Row( dt ) ) )
	)
);
```

**Code Explanation**:

1. Open data table.
2. Initialize counter variable.
3. Create new window.
4. Add matrix box.
5. Convert data table to matrix.
6. Set column names.
7. Generate row names.
8. Concatenate prefix with row index.
9. Repeat for all rows.
10. Assign row names.



## Chart 
> **Summary**: Creates a bar chart to visualize mean age by marital status, country, and sex, with custom formatting for scale boxes.

<!-- Keywords: #JSLScriptingLanguage, #BarChart, #CustomFormatting, #ScaleBox, #DataVisualization -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Chart(
	Grouping( :marital status, :country ),
	X( :sex ),
	Y( Mean( :age ) ),
	Bar Chart( 1 ),
	SendToReport(
		Dispatch( {}, "102", ScaleBox,
			{Format( "Custom", Formula( Char( Round( In Years( value ) / 100000000, 1 ) ) || "e+8 (s)" ), 12 )}
		)
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create chart object.
3. Set grouping variables.
4. Define X-axis variable.
5. Define Y-axis variable.
6. Create bar chart.
7. Send report to chart.
8. Dispatch to scale box.
9. Format scale box.
10. Apply custom formula.



## Char using Format
### Example 1
> **Summary**: Formats height and weight values in a data table by appending custom units to each value.

<!-- Keywords: #DataTableFormatting, #CustomUnits, #JSLScripting, #HeightAndWeight, #DataAnalysis -->

**Code**:
```jsl
Open("data_table.jmp");
:height << Format( "Custom", Formula( Char( value ) || "in" ), 12 );
:weight << Format( "Custom", Formula( Char( value ) || "lb" ), 12 );
```

**Code Explanation**:

1. Open data table.
2. Set custom format for height.
3. Append "in" to height values.
4. Set custom format for weight.
5. Append "lb" to weight values.



### Example 2
> **Summary**: Runs the formatting and creation of a new table with specific column formats, utilizing JSL scripting language.

<!-- Keywords: #JSLScriptingLanguage, #TableFormatting, #ColumnFormats, #DataManipulation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Date << Format( "ddMonyyyy", 10 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );
colset = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( colset, Char( Column( i ) << Get Format ) )
);
Close( dt, nosave );
dt = New Table( "AgreementTestTable2[1]",
	Add Rows( 4 ),
	New Column( "A", Numeric, Nominal, Format( "Best", 12 ), Set Values( [1000, 1000, 3000, 1000] ) ),
	New Column( "B", Numeric, Nominal, Format( "Best", "Use thousands separator", 12 ), Set Values( [2000, 4000, 2000, 1000] ) ),
	New Column( "C", Numeric, Nominal, Format( "Best", Use thousands separator( 1 ), 12 ), Set Values( [1000, 4000, 1000, 1000] ) ),
	New Column( "Part 1", Numeric, Continuous, Format( "Best", 12 ), Set Values( [1000, 1000, 1000, 1000] ) ),
	New Column( "Part 2", Numeric, Continuous, Format( "Best", 12 ), Set Values( [1000, 1000, 1000, 1000] ) ),
	New Column( "Part 3", Numeric, Continuous, Format( "Best", 12 ), Set Values( [1000, 1000, 1000, 1000] ) )
);
Column( "Part 1" ) << Format( "Use thousands separator" );
Column( "Part 2" ) << Format( Use thousands separator( 1 ) );
Column( "Part 3" ) << Format( Use Thousands separator );
colset = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( colset, Char( Column( i ) << Get Format ) )
);
```

**Code Explanation**:

1. Open data table.
2. Format Date column.
3. Format DJI High column.
4. Format DJI Close column.
5. Format DJI Low column.
6. Initialize column set.
7. Loop through columns.
8. Insert column formats into set.
9. Close table without saving.
10. Create new table.
11. Add rows to new table.
12. Add columns with specific formats.
13. Set values for columns.
14. Format Part 1 column.
15. Format Part 2 column.
16. Format Part 3 column.
17. Reinitialize column set.
18. Loop through columns again.
19. Insert new column formats into set.



### Example 3
> **Summary**: Formats a table by setting date, currency, and number formats for specific columns.

<!-- Keywords: #JSLScripting, #TableFormatting, #ColumnManagement, #DataPreprocessing, #JMPScriptingLanguage -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Date << Format( "ddMonyyyy", 10 );
:DJI High << Format( "Currency" );
:DJI Close << Format( "best", "Use Thousands Separator", 10, 0 );
:DJI Low << Format( "Fixed Dec", "Use Thousands Separator", 10, 2 );
colset = {};
For( i = 1, i <= N Col( dt ), i++,
	Insert Into( colset, Char( Column( i ) << Get Format ) )
);
```

**Code Explanation**:

1. Open table.
2. Format Date column.
3. Format DJI High column.
4. Format DJI Close column.
5. Format DJI Low column.
6. Initialize column set.
7. Loop through columns.
8. Get format for each column.
9. Convert format to character.
10. Insert format into column set.



## Char using New Column
### Example 1
> **Summary**: Creates a new character column 'ID Col' in a JMP data table, concatenating survey, choice set, and choice ID variables.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #NominalDataType, #LinkProperty -->

**Code**:
```jsl
dt = Open( "data_table.jmp", invisible );
dt << New Column( "ID Col",
	Character( 6 ),
	"Nominal",
	Formula( Char( :Survey ) || "_" || Char( :Choice Set ) || "_" || Char( :Choice ID ) )
);
dt:ID Col << Set Property( "Link ID", 1 );
```

**Code Explanation**:

1. Open data table.
2. Create new column "ID Col".
3. Set column data type to character.
4. Define column as nominal.
5. Assign formula to concatenate survey, choice set, and choice ID.
6. Set property "Link ID" to 1.



### Example 2
> **Summary**: Creates a new numeric column with continuous values, formatted as date-time and set to 100, in a JMP data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnCreation, #FormatSetting, #NumericValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "example", Numeric, Continuous, Width( 5 ), Format( ddMonyyyy h:m:s ), <<Set Each Value( 100 ) );
fmt = {};
fmt = Char( :example << get format );
```

**Code Explanation**:

1. Open data table;
2. Create new column "example".
3. Set column type to numeric.
4. Define column as continuous.
5. Set column width to 5.
6. Apply date-time format.
7. Set each cell value to 100.
8. Initialize empty list fmt.
9. Retrieve format of "example" column.
10. Convert format to character.



### Example 3
> **Summary**: Runs data table manipulation by reversing row order, reordering columns by modeling type and data type, and restoring original order.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ColumnReordering, #RowReversal, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "RowState", Rowstate );
n = Char( dt << Get Column Names() );
dt << Reverse Order;
n = Char( dt << Get Column Names() );
dt << Reorder By Modeling Type;
n = Char( dt << Get Column Names() );
dt << Reorder By Data Type;
n = Char( dt << Get Column Names() );
dt << Reorder By Name;
n = Char( dt << Get Column Names() );
dt << Original Order;
n = Char( dt << Get Column Names() );
```

**Code Explanation**:

1. Open data table;
2. Add RowState column.
3. Store initial column names.
4. Reverse order of rows.
5. Store reversed column names.
6. Reorder by modeling type.
7. Store reordered column names.
8. Reorder by data type.
9. Store reordered column names.
10. Reorder by name.
11. Store final column names.
12. Restore original order.



### Example 4
> **Summary**: Runs data manipulation and string processing tasks, including creating new columns, extracting values, and modifying strings.

<!-- Keywords: #JSLScriptingLanguage, #DataManipulation, #StringProcessing, #ColumnCreation, #ValueExtraction -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Soccer", numeric, continuous, Formula( Contains Item( dt:sports, "Soccer", ", " ) ) );
dt << New Column( "Stomach", numeric, continuous, Formula( Contains Item( Lowercase( dt:reported illnesses ), "stomach", ", " ) ) );
cars = dt:family cars << get values;
dt << New Column( "Cars MR Prop", character, nominal, Set Property( "Multiple Response", {Separator( "," )} ), Set Values( cars ) );
dt << New Column( "Jetta", numeric, continuous, Formula( Contains Item( dt:Cars MR Prop, "Jetta", ", " ) ) );
Close( dt, "nosave" );
ut_s = "Plan A";
Substitute Into( ut_s, "A", "B" );
ut_s = "live on";
Reverse Into( ut_s );
Insert Into( ut_s, "u", 3 );
ut_s = "abcdefghijklmnopqrstuvwxyz";
utrad = Substr( Char( 1.5 ), 2, 1 );
```

**Code Explanation**:

1. Open data table.
2. Create "Soccer" column.
3. Create "Stomach" column.
4. Extract family car values.
5. Create "Cars MR Prop" column.
6. Create "Jetta" column.
7. Close table without saving.
8. Initialize string variable.
9. Substitute "A" with "B".
10. Modify string to reverse.



### Example 5
> **Summary**: Creates new columns in a JMP data table, calculating mean, standard deviation, sum, minimum, and maximum values for specific conditions.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ConditionalCalculations, #ColumnCreation, #StatisticalAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << New Column( "Col1", Numeric, Formula( If( :sex == "M" & :age < 14, :height, Empty() ) ) );
dt << New Column( "Col2", Numeric, Formula( Col Mean( :Col1, Char( age ) ) ) );
dt << New Column( "Col3", Numeric, Formula( Col Mean( If( :sex == "M" & :age < 14, :height, Empty() ), Char( age ) ) ) );
dt << New Column( "Col4", Numeric, Formula( Col Std Dev( If( :sex == "M" & :age < 14, :height, Empty() ), Char( age ) ) ) );
dt << New Column( "Col5", Numeric, Formula( Col Sum( If( :sex == "M" & :age < 14, :height, Empty() ), Char( age ) ) ) );
dt << New Column( "Col6", Numeric, Formula( Col Min( If( :sex == "M" & :age < 14, :height, Empty() ), Char( age ) ) ) );
dt << New Column( "Col7", Numeric, Formula( Col Max( If( :sex == "M" & :age < 14, :height, Empty() ), Char( age ) ) ) );
```

**Code Explanation**:

1. Open data table.
2. Create new column "Col1".
3. Define formula for "Col1".
4. Create new column "Col2".
5. Define formula for "Col2".
6. Create new column "Col3".
7. Define formula for "Col3".
8. Create new column "Col4".
9. Define formula for "Col4".
10. Create new column "Col5".
11. Define formula for "Col5".
12. Create new column "Col6".
13. Define formula for "Col6".
14. Create new column "Col7".
15. Define formula for "Col7".



## Char using Delete Rows
### Example 1
> **Summary**: Modifies a data table by deleting rows, setting range and list checks, and converting columns to matrices.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #RangeCheck, #ListCheck, #MatrixConversion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( 21 :: 40 );
dt:height << Range Check( LE LT( 60, 65 ) );
dt:age << List Check( {12, 13} );
charrange = Char( dt:height << Get Property( "Range Check" ) );
charlist = Char( dt:age << Get Property( "List Check" ) );
mtx height = Char( dt << Get As Matrix( {height} ) );
mtx age = Char( dt << Get As Matrix( {age} ) );
dt:height << Range Check( LELE( 60, 63 ) );
dt:age << List Check();
Try( listch = dt:age << Get Property( "List Check" ) );
charlist = Char( listch );
```

**Code Explanation**:

1. Open data table.
2. Delete rows 21-40.
3. Set height range check.
4. Set age list check.
5. Get height range check property.
6. Get age list check property.
7. Convert height to matrix.
8. Convert age to matrix.
9. Update height range check.
10. Clear age list check.



### Example 2
> **Summary**: Runs data table manipulation by deleting rows, applying range and list checks, and converting data to matrices.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RangeCheck, #ListCheck, #MatrixConversion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Delete Rows( 21 :: 40 );
dt:height << Range Check( LE LT( 60, 65 ) );
dt:age << List Check( {12, 13} );
charrange = Char( dt:height << Get Property( "Range Check" ) );
charlist = Char( dt:age << Get Property( "List Check" ) );
mtx height = Char( dt << Get As Matrix( {height} ) );
mtx age = Char( dt << Get As Matrix( {age} ) );
dt:height << Range Check();
Try( range = dt:height << Get Property( "Range Check" ) );
charrange = Char( range );
dt:age << List Check();
Try( listch = dt:age << Get Property( "List Check" ) );
charlist = Char( listch );
```

**Code Explanation**:

1. Open data table;
2. Delete rows 21 to 40.
3. Apply height range check.
4. Apply age list check.
5. Get height range check property.
6. Get age list check property.
7. Convert height data to matrix.
8. Convert age data to matrix.
9. Remove height range check.
10. Attempt to get updated height range check.



### Example 1
> **Summary**: Runs the processing and hiding of columns in a JMP data table, adding new numeric columns and retrieving column names.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnOperations, #NumericColumns, #ColumnNames -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:x << hide( 1 );
:y << hide( 1 );
:State << hide( 1 );
:Region << hide( 1 );
:POP << hide( 1 );
dt << add multiple columns( "new", 3, after last, numeric );
colnames = Char( dt << Get Column Names() );
Close( dt, No Save );
certnames = "{A, A_, _A, _A_, A_B, A_B_}";
```

**Code Explanation**:

1. Open data table;
2. Hide column :x.
3. Hide column :y.
4. Hide column :State.
5. Hide column :Region.
6. Hide column :POP.
7. Add 3 new numeric columns.
8. Get column names.
9. Close table without saving.
10. Define certification names.



### Example 2
> **Summary**: Prepares a data table by hiding columns, adding new numeric columns, and retrieving column names.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #ColumnOperations, #TablePreparation, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:x << hide( 1 );
:y << hide( 1 );
:State << hide( 1 );
:Region << hide( 1 );
:POP << hide( 1 );
dt << add multiple columns( "new", 3, after last, numeric );
colnames = Char( dt << Get Column Names() );
```

**Code Explanation**:

1. Open data table;
2. Hide X column.
3. Hide Y column.
4. Hide State column.
5. Hide Region column.
6. Hide POP column.
7. Add 3 new columns.
8. Get all column names.



### Example 3
> **Summary**: Runs data table operations by opening a file, retrieving scripts, converting column scripts to strings, evaluating the script, and retrieving the resulting script.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ScriptConversion, #Evaluation, #ColumnScripts -->

**Code**:
```jsl
dt1 = Open("data_table.jmp");
s = dt1 << Get Script;
col1 = Char( dt1:Failure3 << Get Script );
dt2 = Eval( s );
col2 = Char( dt2:Failure3 << Get Script );
```

**Code Explanation**:

1. Open data table.
2. Retrieve script from data table.
3. Convert Failure3 column script to string.
4. Evaluate script to create new data table.
5. Retrieve script from new data table's Failure3 column.
6. Convert retrieved script to string.



## Char using Row
### Example 1
> **Summary**: Opens and configures a JMP data table, setting row numbers and column properties.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManagement, #ColumnProperties, #RowOperations, #JSLCodeExample -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 1;
:name = "1";
Row() = 2;
:name = "1";
col = Column( "name" );
col << data type( numeric );
datatype = col << get data type;
actual = Char( col << get as matrix() );
Close( dt, No Save );
certempty = "Empty()";
```

**Code Explanation**:

1. Open data table.
2. Set row to 1.
3. Assign value "1" to column.
4. Set row to 2.
5. Assign value "1" to column.
6. Get column object.
7. Change data type to numeric.
8. Retrieve data type.
9. Convert data to character matrix.
10. Close table without saving.



### Example 2
> **Summary**: Process of setting row index, assigning values to a column, and retrieving its data type in JMP.

<!-- Keywords: #JMPScriptingLanguage, #DataManipulation, #ColumnOperations, #RowIndexing, #DatatypeConversion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Row() = 1;
:name = "1";
Row() = 2;
:name = "1";
col = Column( "name" );
col << data type( numeric );
datatype = col << get data type;
actual = Char( col << get as matrix() );
```

**Code Explanation**:

1. Open data table;
2. Set row index to 1.
3. Assign "1" to column :name.
4. Set row index to 2.
5. Assign "1" to column :name.
6. Retrieve column "name".
7. Change column data type to numeric.
8. Get column data type.
9. Convert column data to matrix.
10. Convert matrix to character string.



## Char using Color by Column
> **Summary**: Runs data visualization and customization for a JMP data table, applying colors and markers to marital status, country, row state, age, and size variables.

<!-- Keywords: #JMPScriptingLanguage, #DataVisualization, #Customization, #Coloring, #Marker -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Color by Column( marital status, Color( 1 ), Color Theme( "JMP Light" ), );
dt << Marker by Column( country, Marker( 1 ), Marker Theme( "Classic" ) );
dt << color rows by row state;
dt << color rows by row state( 0 );
:age << Set Property( "Color Gradient", {"White to Blue", Range( 40, 80 )} );
:age << color cell by value( 1 );
:size << set property( "Value Colors", {"Large" = red, "Medium" = yellow, "Small" = gray} );
:size << color cell by value;
:size << color cell by value( 0 );
:sex << color cells( "green", {1, 5, 8} );
:sex << color cells( "white", {11} );
:sex << color cells( "black", {1, 11} );
vc = Char( :age << Get Property( "Color Gradient" ) );
vc = :size << Get Property( "Value Colors" );
```

**Code Explanation**:

1. Open data table;
2. Color by marital status.
3. Marker by country.
4. Color rows by row state.
5. Disable row state coloring.
6. Set age color gradient.
7. Color age cells by value.
8. Set size value colors.
9. Color size cells by value.
10. Disable size cell coloring.



## Char using Compress selected columns
> **Summary**: Runs data compression and property fetching for selected columns in a JMP data table, utilizing the Compress Selected Columns and Get Property functions.

<!-- Keywords: #JMPScriptingLanguage, #DataCompression, #PropertyFetching, #ColumnManagement, #JSLProgramming -->

**Code**:
```jsl
dt = Open("data_table.jmp");
nlist = dt << get column names;
dt << Compress selected columns( nlist );
cert dprop = "List Check({\!"American\!", \!"European\!", \!"Japanese\!"})";
dprop = Char( dt:country << Get Property( "List Check" ) );
cert dprop = "List Check({\!"Married\!", \!"Single\!"})";
dprop = Char( dt:marital status << Get Property( "List Check" ) );
cert dprop = "List Check({\!"Large\!", \!"Medium\!", \!"Small\!"})";
dprop = Char( dt:size << Get Property( "List Check" ) );
cert dprop = "List Check({\!"Family\!", \!"Sporty\!", \!"Work\!"})";
dprop = Char( dt:type << Get Property( "List Check" ) );
cert dprop = "List Check({\!"Female\!", \!"Male\!"})";
dprop = Char( dt:sex << Get Property( "List Check" ) );
```

**Code Explanation**:

1. Open data table.
2. Retrieve column names into nlist.
3. Compress selected columns using nlist.
4. Define cert dprop for American/European/Japanese.
5. Fetch property of country column.
6. Define cert dprop for Married/Single.
7. Fetch property of marital status column.
8. Define cert dprop for Large/Medium/Small.
9. Fetch property of size column.
10. Define cert dprop for Family/Sporty/Work.
11. Fetch property of type column.
12. Define cert dprop for Female/Male.
13. Fetch property of sex column.



## Char using Set Selected
> **Summary**: Runs data table operations by selecting columns, compressing selected columns, and retrieving properties for 'size' and 'type' columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #ColumnSelection, #PropertyRetrieval, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt:size << Set Selected( 1 );
dt:type << Set Selected( 1 );
dt << compress selected columns;
cert dprop = "List Check({\!"Large\!", \!"Medium\!", \!"Small\!"})";
dprop = Char( dt:size << Get Property( "List Check" ) );
cert dprop = "List Check({\!"Family\!", \!"Sporty\!", \!"Work\!"})";
dprop = Char( dt:type << Get Property( "List Check" ) );
```

**Code Explanation**:

1. Open data table;
2. Select "size" column.
3. Select "type" column.
4. Compress selected columns.
5. Define "cert dprop" for "Large", "Medium", "Small".
6. Retrieve "size" column property.
7. Define "cert dprop" for "Family", "Sporty", "Work".
8. Retrieve "type" column property.



## Char using Try
### Example 1
> **Summary**: Runs the retrieval and processing of data table properties, including list check, range check, value labels, and formula, before closing the table without saving.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #PropertyRetrieval, #Automation, #JMP -->

**Code**:
```jsl
dt = Open("data_table.jmp");
l = 0;
c = 0;
v = 0;
f = 0;
Try( l = Char( dt:Region << Get List Check ) );
Try( c = Char( dt:Region << Get Range Check ) );
Try( v = Char( dt:Region << Get Value Labels ) );
Try( f = Char( dt:Region << Get Formula ) );
Close( dt, nosave );
cert v = [17, 17, 17, 16, 16, 16, 13, 13, 13, 13, 13, 13, 13, 12, 12, 12, 12, 12, 12, 12, 12, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14, 14,
14, 15, 15, 15, 15, 15, 15, 15];
```

**Code Explanation**:

1. Open data table;
2. Initialize variables l, c, v, f.
3. Try getting list check for Region.
4. Try getting range check for Region.
5. Try getting value labels for Region.
6. Try getting formula for Region.
7. Close table without saving.
8. Define certificate values array.



### Example 2
> **Summary**: Runs the retrieval and initialization of data table regions, including list check, range check, value labels, and formula.

<!-- Keywords: #JMPScriptingLanguage, #DataTableRegions, #Initialization, #Automation, #Scripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
l = 0;
c = 0;
v = 0;
f = 0;
Try( l = Char( dt:Region << Get List Check ) );
Try( c = Char( dt:Region << Get Range Check ) );
Try( v = Char( dt:Region << Get Value Labels ) );
Try( f = Char( dt:Region << Get Formula ) );
```

**Code Explanation**:

1. Open data table;
2. Initialize variables l, c, v, f to 0.
3. Try getting Region list check.
4. Try getting Region range check.
5. Try getting Region value labels.
6. Try getting Region formula.



## Char using New Data View
> **Summary**: Process of retrieving window titles containing 'data_table' from a JMP data table, utilizing a For loop to iterate through all windows.

<!-- Keywords: #JMPScriptingLanguage, #DataView, #WindowManagement, #LoopControl, #StringManipulation -->

**Code**:
```jsl
dt = Open( "$SAMPLE_DATA/data_table.jmp", invisible );
dt << New Data View();
xx = Window();
winlist = {};
For( i = 1, i < N Items( xx ) + 1, i++,
	If( Char( xx[i] ) == "DisplayBox[HeadBox]",
		winname = xx[i] << get window title;
		If( Contains( winname, "data_table" ),
			Insert Into( winlist, winname )
		);
	)
);
```

**Code Explanation**:

1. Open data table.
2. Create new data view.
3. Retrieve all windows.
4. Initialize window list.
5. Loop through all windows.
6. Check for HeadBox display box.
7. Get window title.
8. Check if title contains "Cities".
9. Insert matching titles into list.
10. End loop.



## Char using Go to
> **Summary**: Creates and configures a new JMP table with a 'Date' column, formatting and modeling options, and a 'Month' column with character values.

<!-- Keywords: #JMPScriptingLanguage, #TableCreation, #ColumnConfiguration, #DataFormatting, #Modeling -->

**Code**:
```jsl
dt = Open("data_table.jmp");
i = 2;
dt << Go to( i );
selCol = dt << get Selected columns;
Close( dt, no save );
dt = New Table( "Test" );
col = dt << New Column( "Date", numeric, continuous );
col << input format( "m/d/y" );
col << Format( "y/m/d" );
fcol = Char( col << get format );
incol = Char( col << get input format );
Close( dt, no save );
dt = New Table( "test",
	Add Rows( 11 ),
	New Column( "Month",
		Character,
		Nominal,
		Set Values(
			{"05/2012", "06/2012", "07/2012", "08/2012", "09/2012", "10/2012", "11/2012", "12/2012", "01/2013", "02/2013", "03/2013"}
		)
	)
);
Column( dt, 1 ) << Data Type( Numeric ) << Format( "M/Y", 7 ) << Set Modeling Type( Continuous );
t = Column( dt, 1 )[1];
```

**Code Explanation**:

1. Open data table.
2. Go to second row.
3. Get selected columns.
4. Close data table without saving.
5. Create new table named "Test".
6. Add "Date" column with numeric format.
7. Set input format for "Date" column.
8. Set display format for "Date" column.
9. Retrieve column formats.
10. Create new table named "test" with 11 rows.
11. Add "Month" column with character values.
12. Convert "Month" column to numeric.
13. Set format for "Month" column.
14. Set modeling type for "Month" column.
15. Retrieve first value from "Month" column.



## Char using Column
### Example 1
> **Summary**: Runs property setting operations on a column in a JMP data table, demonstrating various syntax and formatting options.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #ColumnProperties, #PropertySetting, #JSLSyntax -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dc = Column( dt, "age" );
dc << Set Property( Any, Eval(), Any );
Try( dc << Set Property() );
dc << Set Property( [] );
dc << Set Property( {} );
dc << Set Property( foo, foo );
dc << Set Property( "", {} );
dc << Set Property( Eval() );
Close( dt, no save );
cert f = "Format(\!"Best\!", 1)";
dt = New Table( "Ding", Add Rows( 3 ), New Column( "MyCol", Numeric, Continuous, Format( "", 1 ), Set Values( [1, 2, 3] ) ) );
f = Char( dt:mycol << Get Format );
```

**Code Explanation**:

1. Open data table.
2. Assign age column to dc.
3. Set property on age column.
4. Try setting property on age column.
5. Set property on age column.
6. Set property on age column.
7. Set property on age column.
8. Set property on age column.
9. Close data table without saving.
10. Define format string.
11. Create new data table.
12. Get format of MyCol column.



### Example 2
> **Summary**: Configures a column's List Check property with a predefined list of values, retrieving and converting the selected value to character.

<!-- Keywords: #JSLScriptingLanguage, #ColumnProperty, #ListCheck, #DataTable, #CharacterConversion -->

**Code**:
```jsl
dt = Open("data_table.jmp");
mylist = {"F", "M"};
col = Column( 3 );
col << Set Property( "List Check", mylist );
charval = Char( col << Get Property( "List Check" ) );
```

**Code Explanation**:

1. Open data table;
2. Define gender list {"F", "M"}.
3. Select third column.
4. Set column's List Check property.
5. Retrieve List Check property value.
6. Convert property value to character.



### Example 3
> **Summary**: Creates a marker segment graph to visualize height and age data, utilizing the Get Values and New Window functions.

<!-- Keywords: #JSLScriptingLanguage, #MarkerSegmentGraph, #DataVisualization, #GetValues, #NewWindow -->

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
nw24 = New Window( "Marker Seg Example",
	g = Graph Box(
		Frame Size( 300, 120 ),
		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),
		Y Scale( 0, 10 ),
		Marker Seg( xx, yy, Row States( dt ), Sizes( sz ) )
	)
);
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( "Marker Seg" ));
frame_db = Char( seg << Frame );
```

**Code Explanation**:

1. Open data table.
2. Retrieve height column values.
3. Initialize age count array.
4. Retrieve age column values.
5. Create zero-initialized output array.
6. Loop through each row.
7. Increment height count.
8. Assign count to output array.
9. Create new window.
10. Add graph box with marker segments.



## Char using Set Display Width
> **Summary**: Formats and displays the 'Order Date' column in a JMP data table, doubling its width and applying a custom date format.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #ColumnFormatting, #DateHandling, #InteractiveDataAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
:Order Date << Set Selected;
w = :Order Date << Get Display Width;
:Order Date << Set Display Width( 2 * w );
:Order Date << Format( "Custom", Formula( Char( Year( value ) ) || "W" || Substr( Char( 100 + Week Of Year( value ) ), 2 ) ), 10 );
dt << Go to row( 5 );
r = dt << get rows( {5} );
```

**Code Explanation**:

1. Open data table.
2. Select "Order Date" column.
3. Get display width of column.
4. Double the display width.
5. Set custom format for date.
6. Go to row number 5.
7. Get row number 5.



## Char using Run Script
> **Summary**: Process of running a Distribution analysis, sorting a table box by column, and evaluating a parsed script.

<!-- Keywords: #JSLScriptingLanguage, #DistributionAnalysis, #TableBoxSorting, #ScriptEvaluation, #PathDiagramProperties -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dist = dt << Run Script( "Distribution" );
(Report( dist )[Table Box( 3 )]) << Sort by Column( 2, 1 );
scr = Collapse Whitespace( Char( dist << Get Script ) );
dist2 = Eval( Parse( scr ) );
```

**Code Explanation**:

1. Open data table;
2. Run Distribution analysis.
3. Sort third table box by second column.
4. Extract script from distribution.
5. Collapse whitespace in script.
6. Evaluate parsed script.



## Char using If
### Example 1
> **Summary**: Fits a model, generating prediction formulas, and publishing confidence limits in JMP Pro.

<!-- Keywords: #JMPPro, #PredictiveModeling, #DataAnalysis, #Scripting, #StatisticalComputing -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Run Script( "Fit Model" );
	obj << Prediction Formula( 1 );
	pred formula1 = Char( dt:Pred Formula weight << get formula( 1 ) );
	obj << Parameterized Formula( 1 );
	pred param formula1 = (dt:Pred Param Formula weight << get formula( 1 ));
	pred param1 = dt:Pred Param Formula weight << get values( 1 );
	obj << StdErr Pred Formula( 1 );
	stderr pred formula1 = Char( dt:PredSE weight << get formula( 1 ) );
	obj << Mean Confidence Limit Formula( 1 );
	mean ci 1 = (dt:Lower 95% Mean weight << get values) || (dt:Upper 95% Mean weight << get values);
	obj << Indiv Confidence Limit Formula( 1 );
	indiv ci 1 = (dt:Lower 95% Indiv weight << get values) || (dt:Upper 95% Indiv weight << get values);
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script( 1 );
	pred formula2 = Char( dt:Pred Formula weight << get formula( 1 ) );
	depot2 = obj << Publish Parameterized Formula( 1 );
	depot2 << Run Script( 1 );
	pred param formula2 = (dt:Pred Param Formula weight << get formula( 1 ));
	pred param2 = dt:Pred Param Formula weight << get values( 1 );
	depot3 = obj << Publish Standard Error Formula( 1 );
	depot3 << Run Script( 1 );
	stderr pred formula2 = Char( dt:PredSE weight << get formula( 1 ) );
	depot4 = obj << Publish Mean Confid Limit Formula( 1 );
	depot4 << Run Script( 1 );
	mean ci 2 = (dt:Lower 95% Mean weight << get values) || (dt:Upper 95% Mean weight << get values);
	depot5 = obj << Publish Indiv Confid Limit Formula( 1 );
	depot5 << Run Script( 1 );
	indiv ci 2 = (dt:Lower 95% Indiv weight << get values) || (dt:Upper 95% Indiv weight << get values);
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP is Pro.
2. Open data table;
3. Count initial columns.
4. Run Fit Model script.
5. Set prediction formula.
6. Get prediction formula.
7. Set parameterized formula.
8. Get parameterized formula and values.
9. Set standard error formula.
10. Get standard error formula.
11. Set mean confidence limit formula.
12. Get mean confidence limits.
13. Set individual confidence limit formula.
14. Get individual confidence limits.
15. Delete new columns.
16. Publish prediction formula.
17. Run published prediction formula.
18. Get updated prediction formula.
19. Publish parameterized formula.
20. Run published parameterized formula.
21. Get updated parameterized formula and values.
22. Publish standard error formula.
23. Run published standard error formula.
24. Get updated standard error formula.
25. Publish mean confidence limit formula.
26. Run published mean confidence limit formula.
27. Get updated mean confidence limits.
28. Publish individual confidence limit formula.
29. Run published individual confidence limit formula.
30. Get updated individual confidence limits.
31. Close data table without saving.
32. Close Formula Depot window.



### Example 2
> **Summary**: Process of running a Repeated Measures Model script in JMP Pro, generating prediction formulas and publishing conditional and standard error formulas.

<!-- Keywords: #JMPPro, #RepeatedMeasuresModel, #ScriptingLanguage, #DataAnalysis, #PredictiveModeling -->

**Code**:
```jsl
If( Contains( JMP Product Name(), "Pro" ) > 0,
	dt = Open("data_table.jmp");
	n1 = N Items( dt << get column names( string ) );
	obj = dt << Run Script( "Repeated Measures Model" );
	obj << Prediction Formula( 1 );
	pred formula1 = (dt:Pred Formula miles << get formula( 1 ));
	pred formula1 eval = dt:Pred Formula miles << get values;
	obj << Parameterized Formula( 1 );
	pred param formula1 = (dt:Pred Param Formula miles << get formula( 1 ));
	pred param1 = dt:Pred Param Formula miles << get values( 1 );
	obj << Conditional Pred Formula( 1 );
	cond pred formula1 = Char( dt:Cond Pred Formula miles << get formula( 1 ) );
	obj << StdErr Pred Formula( 1 );
	stderr pred formula1 = Char( dt:PredSE miles << get formula( 1 ) );
	dt << Delete Columns( n1 + 1 :: N Cols( dt ) );
	depot1 = obj << Publish Prediction Formula( 1 );
	depot1 << Run Script( 1 );
	pred formula2 = (dt:Pred Formula miles << get formula( 1 ));
	pred formula2 eval = dt:Pred Formula miles << get values;
	depot2 = obj << Publish Parameterized Formula( 1 );
	depot2 << Run Script( 1 );
	pred param formula2 = (dt:Pred Param Formula miles << get formula( 1 ));
	pred param2 = dt:Pred Param Formula miles << get values( 1 );
	depot3 = obj << Publish Conditional Formula( 1 );
	depot3 << Run Script( 1 );
	cond pred formula2 = Char( dt:Cond Pred Formula miles << get formula( 1 ) );
	depot4 = obj << Publish Standard Error Formula( 1 );
	depot4 << Run Script( 1 );
	stderr pred formula2 = Char( dt:PredSE miles << get formula( 1 ) );
	Close( dt, no save );
	Window( "Formula Depot" ) << close window( 1 );
);
```

**Code Explanation**:

1. Check if JMP Pro is installed.
2. Open data table.
3. Count initial columns.
4. Run "Repeated Measures Model" script.
5. Set prediction formula.
6. Get prediction formula for "miles".
7. Evaluate prediction formula.
8. Set parameterized formula.
9. Get parameterized formula for "miles".
10. Get parameter value.
11. Set conditional prediction formula.
12. Get conditional formula as character.
13. Set standard error formula.
14. Get standard error formula as character.
15. Delete new columns.
16. Publish prediction formula.
17. Run published prediction formula.
18. Get updated prediction formula.
19. Evaluate updated prediction formula.
20. Publish parameterized formula.
21. Run published parameterized formula.
22. Get updated parameterized formula.
23. Get updated parameter value.
24. Publish conditional formula.
25. Run published conditional formula.
26. Get updated conditional formula.
27. Publish standard error formula.
28. Run published standard error formula.
29. Close data table without saving.
30. Close "Formula Depot" window.



## Char using Add Rows
> **Summary**: Creates a new data table with 125 rows, featuring columns for Wafer ID, Test Location, Bonding Force (N), Temperature (¬∞C), Thickness (¬µm), Time (s), and Operator, with formulas generating random values and deleting formulas from columns 1 to 9.

<!-- Keywords: #JSL, #DataTable, #RandomValues, #FormulaGeneration, #ColumnManagement -->

**Code**:
```jsl
Names Default To Here (1):
random reset (1234);
// Create a new data table
dt = New Table( "Wafer Bonding Data",
    Add Rows( 25*5 ),
    New Column( "Wafer ID",
        Character,
        Nominal,
        Formula( "W_"||char(Sequence(1,25,1,5)) )  // Unique wafer ID for each row
    ),
	New Column ("Test Location",
		Numeric,
		Nominal,
		Formula( Sequence (1,5))
	),
    New Column( "Bonding Force (N)",
        Numeric,
        Continuous,
        Format( "Fixed Dec", 1 ),
        Formula( Random Normal( 100, 1 ) )  // Random values around 100 N
    ),
    New Column( "Temperature (¬∞C)",
        Numeric,
        Continuous,
        Format( "Fixed Dec", 1 ),
        Formula( Random Normal( 200, 0.5 ) )  // Random values around 200 ¬∞C
    ),
    New Column( "Thickness (¬µm)",
        Numeric,
        Continuous,
        Format( "Fixed Dec", 1 ),
        Formula( Random Normal( 700, 0.5 ) )  // Random values around 700 ¬µm
    ),
    New Column( "Alignment Error (¬µm)",
        Numeric,
        Continuous,
        Format( "Fixed Dec", 1 ),
        Formula( Random Uniform( 0.4, 0.8 ) )  // Uniformly distributed between 0.4 and 0.8
    ),
    New Column( "Bond Strength (MPa)",
        Numeric,
        Continuous,
        Format( "Fixed Dec", 1 ),
        Formula( Random Normal( 50, 0.5 ) )  // Random values around 50 MPa
    ),
    New Column( "Time (s)",
        Numeric,
        Continuous,
        Formula( 30 )  // Fixed value of 30 seconds
    ),
    New Column( "Operator",
        Character,
        Nominal,
        Formula( If( Row() <= 60, "Operator A", "Operator B" ) )  // Alternating operators
    )
);
for each ({i}, 1::9,
	column (i) << delete formula
);
```

**Code Explanation**:

1. Set default names scope.
2. Reset random seed.
3. Create new data table.
4. Add 125 rows.
5. Add "Wafer ID" column.
6. Add "Test Location" column.
7. Add "Bonding Force (N)" column.
8. Add "Temperature (¬∞C)" column.
9. Add "Thickness (¬µm)" column.
10. Add "Alignment Error (¬µm)" column.
11. Add "Bond Strength (MPa)" column.
12. Add "Time (s)" column.
13. Add "Operator" column.
14. Delete formulas from columns 1 to 9.



## Char using For Each
> **Summary**: Creates 10 Excel workbooks with 2 worksheets each, using data from two open data tables and specifying worksheet names.

<!-- Keywords: #JSLScriptingLanguage, #ExcelWorkbookGeneration, #DataTableManagement, #WorksheetNaming, #LoopControl -->

**Code**:
```jsl
Names Default To Here( 1 );
//make 10 workbooks with 2 worksheets in each
lstdt = {};
lstdt[1] = Open("data_table.jmp");
lstdt[2] = Open("data_table.jmp");
For Each( {i}, 1 :: 10,
	Create Excel Workbook(
		"$DESKTOP/Sample Excel Workbook" || Char( i ) || ".xlsx",
		lstdt,
		{"Class", "Abrasion"}
	)
);
```

**Code Explanation**:

1. Set default names location.
2. Initialize empty list.
3. Open data table;
4. Open data table;
5. Loop 10 times.
6. Create Excel workbook.
7. Name workbook uniquely.
8. Include datasets in workbook.
9. Specify worksheet names.
10. End loop.



