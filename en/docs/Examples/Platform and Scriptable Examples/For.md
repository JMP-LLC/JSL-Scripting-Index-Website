# For

### Example 1
> **Summary**: Opens a data table, loops through the first 49 rows, and sets the row state to selected for each iteration.

<!-- Keywords: #JMPScriptingLanguage, #DataTableOperations, #RowStateManagement, #LoopControl, #Scripting -->

**Code**:
```jsl
Open("data_table.jmp");
For( i = 1, i < 50, i++,
	Row State( i ) = Selected State( 1 )
);
```

**Code Explanation**:

1. Open data table.
2. Loop from 1 to 49.
3. Set row state to selected for each iteration.



### Example 2
> **Summary**: Runs the initialization of a data table by setting the sex column values to empty strings for the first 8 rows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableInitialization, #ColumnManipulation, #LoopControl, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
For( i = 1, i <= 8, i++, :sex[i] = "" );
```

**Code Explanation**:

1. Open data table;
2. Loop through first 8 rows.
3. Set sex column values to empty string.



### Example 3
> **Summary**: Selects rows in a data table, setting their selected state to 0 for rows 1 through 49.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RowSelection, #LoopControl, #SelectedState -->

**Code**:
```jsl
Open("data_table.jmp");
For( i = 1, i < 50, i++,
	Row State( i ) = Selected State( 0 )
);
```

**Code Explanation**:

1. Open data table.
2. Start loop from row 1.
3. Iterate through rows 1 to 49.
4. Set selected state of each row to 0.
5. End loop.



### Example 4
> **Summary**: Excludes rows from a data table based on specific conditions, utilizing a For loop and row selection.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManagement, #RowSelection, #Exclusion, #ConditionalLogic -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myRows = dt << get rows where( :age == 12 & :sex == "M" );
For( i = 1, i <= N Items( myRows ), i++,
	:height[myRows[i]] = .
);
myRows = dt << select where( :age == 12 & :sex == "F" );
dt << exclude;
```

**Code Explanation**:

1. Open data table.
2. Get rows where age is 12 and sex is M.
3. Loop through selected rows.
4. Set height to missing for each row.
5. Select rows where age is 12 and sex is F.
6. Exclude selected rows.



### Example 5
> **Summary**: Runs the initialization of a data table by setting age values to missing for the first 9 rows.

<!-- Keywords: #JSLScriptingLanguage, #DataTableInitialization, #MissingValues, #LoopControl, #JMPScripting -->

**Code**:
```jsl
Open("data_table.jmp");
For( myRow = 1, myRow <= 9, myRow++,
	:age[myRow] = .
);
```

**Code Explanation**:

1. Open data table;
2. Loop through first 9 rows.
3. Set age values to missing.



### Example 6
> **Summary**: Process of setting age values to missing for rows where age is 12 in a specified data table.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #ConditionalStatements, #LoopControl, #MissingValues -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myRows = dt << get rows where( :age == 12 );
For( i = 1, i <= N Items( myRows ), i++,
	:age[myRows[i]] = .
);
```

**Code Explanation**:

1. Open data table;
2. Get rows where age is 12.
3. Loop through selected rows.
4. Set age values to missing.



### Example 7
> **Summary**: Filters and modifies data in a JMP data table by selecting rows where age is 12 and sex is 'F', then setting age values to missing.

<!-- Keywords: #JMPScriptingLanguage, #DataTableManipulation, #Filtering, #MissingValues, #LoopControl -->

**Code**:
```jsl
dt = Open("data_table.jmp");
myrows = dt << get rows where( :age == 12 & :sex == "F" );
For( i = 1, i <= N Items( myrows ), i++,
	:age[myrows[i]] = .
);
```

**Code Explanation**:

1. Open data table.
2. Get rows where age is 12.
3. Filter for female gender.
4. Loop through selected rows.
5. Set age values to missing.



### Example 8
> **Summary**: Generates random numbers for reliability forecasting in a specified data table, utilizing the Run Script platform.

<!-- Keywords: #JSLScriptingLanguage, #ReliabilityForecasting, #RandomNumberGeneration, #DataTableOperations, #RunScript -->

**Code**:
```jsl
dt = Open("data_table.jmp");
ran = [];
For( i = 1, i <= 2, i++,
	obj = dt << Run Script( "Reliability Forecast" );
	option = obj << Forecast Options;
	option << Random Seed( 1111 );
	ran = ran |/ (Random Uniform());
);
```

**Code Explanation**:

1. Open table.
2. Initialize empty list.
3. Start loop 2 times.
4. Run reliability forecast script.
5. Access forecast options.
6. Set random seed.
7. Generate random number.
8. Append to list.
9. End loop.
10. Save results.



### Example 9
> **Summary**: Runs the random selection and modification of cells in a specified data table, utilizing a For loop to iterate through rows and columns.

<!-- Keywords: #JSLScriptingLanguage, #DataTableManipulation, #RandomSampling, #LoopControl, #JMPScripting -->

**Code**:
```jsl
dt = Open("data_table.jmp");
For( j = 1, j <= 3, j++,
	rand_row = Random Integer( 1, N Row( dt ) );
	rand_col = Random Integer( 1, N Col( dt ) - 1 );
	dt[rand_row, rand_col] = .;
);
```

**Code Explanation**:

1. Open data table;
2. Initialize loop counter j to 1.
3. Check if j is less than or equal to 3.
4. Generate random row index.
5. Generate random column index.
6. Set selected cell to missing value.
7. Increment j by 1.
8. Repeat steps 3-7 until j > 3.



## For using Get Rows Where
> **Summary**: Selects specific rows in a data table, opening and retrieving all rows before selecting first 12 and then rows 33 to 40.

<!-- Keywords: #JSLScriptingLanguage, #DataTableOperations, #RowSelection, #ForLoop, #Selected -->

**Code**:
```jsl
dt = Open("data_table.jmp");
dt << Get Rows Where();
For( i = 1, i <= 12, i++,
	Selected( Row State( i ) ) = 1
);
For( i = 33, i <= 40, i++,
	Selected( Row State( i ) ) = 1
);
```

**Code Explanation**:

1. Open data table.
2. Retrieve all rows.
3. Select first 12 rows.
4. Select rows 33 to 40.



## For using Random Reset
> **Summary**: Generates a data table with random values and then runs a SEM script to perform multiple group analysis, capturing the log output.

<!-- Keywords: #JSLScriptingLanguage, #DataTableGeneration, #SEMAnalysis, #LogCapture, #MultipleGroupAnalysis -->

**Code**:
```jsl
dt = Open("data_table.jmp");
Random Reset( 123 );
For( i = 1, i <= 30, i++,
	row = Random Index( 100, 1 );
	col = Random Index( 7, 1 );
	dt[row, col] = .;
);
dt[1, 2] = 3;
dt[2, 2] = 3;
dt[3, 2] = 3;
dt[4, 2] = 3;
dt[5, 2] = 3;
dt[1, 3 :: 7] = .;
dt[2, 3 :: 7] = .;
dt[3, 3 :: 7] = .;
dt[4, 3 :: 7] = .;
dt[5, 3 :: 7] = .;
log = Log Capture( obj = dt << Run Script( "SEM: Multiple Group Analysis LGC" ) );
```

**Code Explanation**:

1. Open data table;
2. Set random seed to 123.
3. Loop 30 times.
4. Randomly select row and column.
5. Set selected cell to missing.
6. Set first five cells in second column to 3.
7. Set first five cells in columns 3 to 7 to missing.
8. Capture log from running SEM script.



## For using N Row
> **Summary**: Runs the processing and validation of data table columns, selecting specific rows based on conditions and combining variables into a matrix.

<!-- Keywords: #JSLScriptingLanguage, #DataTableProcessing, #ValidationLogic, #MatrixOperations, #ConditionalSelection -->

**Code**:
```jsl
dt = Open("data_table.jmp");
X = dt << Get All Columns As Matrix;
X = X[0, 4 :: 13];
dum_var_1 = J( N Row( X ), 1, . );
For( i = 1, i <= N Row( X ), i++,
	dum_var_1[i] = If( X[i, 2] == 1, 1, 0 )
);
dum_var_2 = J( N Row( X ), 1, . );
For( i = 1, i <= N Row( X ), i++,
	dum_var_2[i] = If( X[i, 2] == 2, 1, 0 )
);
mat_diab = X[0, 1] || dum_var_1 || dum_var_2 || X[0, 3 :: 10];
valid = :Validation << Get Values;
train_idx = Loc( valid, 1 );
```

**Code Explanation**:

1. Open data table;
2. Extract all columns as matrix.
3. Select specific columns for X.
4. Initialize dummy variable 1.
5. Loop through rows to set dummy variable 1.
6. Initialize dummy variable 2.
7. Loop through rows to set dummy variable 2.
8. Combine variables into matrix.
9. Retrieve validation column values.
10. Find indices for training data.



## For using Chart
> **Summary**: Creates a line chart to visualize mean sales and assets by type, with customizable colors for each axis.

<!-- Keywords: #JMPScriptingLanguage, #LineChart, #DataVisualization, #Customization, #ReportGeneration -->

**Code**:
```jsl
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type ),
	Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Assets($Mil.)" ) ) ),
	Line Chart( 1 ),
	Y[1] << Overlay Color( 4 ),
	Y[2] << Overlay Color( 3 )
);
rpt = obj << report;
cert rs = {1, 2, 3, 4, 5};
k = 1;
For( i = 1, i <= N Items( cert rs ), i++,
	k = k + 12
);
```

**Code Explanation**:

1. Open data table;
2. Create chart object.
3. Set X-axis to Type.
4. Set Y-axis to mean Sales and Assets.
5. Add line chart type.
6. Color first Y-axis line blue.
7. Color second Y-axis line orange.
8. Generate chart report.
9. Initialize certification array.
10. Loop through certification array elements.



## For using Text Edit Box
> **Summary**: Creates a line chart with multiple series, utilizing text edit boxes and custom rendering styles for data visualization.

<!-- Keywords: #JSLScripting, #LineChart, #DataVisualization, #CustomRendering, #JMP -->

**Code**:
```jsl
cert label = {label( "Mean(Sales($M))" ), label( "Mean(Assets($Mil.))" )};
cert text edit bx = {Text Edit Box( "Y", default font id( 9 ), wrapWidth( 277 ), justification( 1 ), vjustification( 1 ), left )};
cert title = {Title( "Type" )};
cert labels = {"Labels", Labels( "Aerospace", "Beverages", "Computer", "Drugs", "Oil", "Soap" )};
cert rs = {rs( 0, Dot, 4 ), rs( 0, Dot, 3 )};
cert pen size = {Pen Size( 1 ), Pen Size( 2 ), Pen Size( 1 ), Pen Size( 2 ), Pen Size( 1 ), Pen Size( 2 ), Pen Size( 1 ), Pen Size( 2 ),
Pen Size( 1 ), Pen Size( 2 ), Pen Size( 1 ), Pen Size( 2 ), Pen Size( 1 ), Pen Size( 2 ), Pen Size( 1 ), Pen Size( 2 ), Pen Size( 1 ),
Pen Size( 2 ), Pen Size( 1 ), Pen Size( 2 )};
cert color = {color( 3 ), color( 4 ), color( 3 ), color( 4 ), color( 81 )};
dt = Open("data_table.jmp");
obj = Chart(
	X( :Type ),
	Y( Mean( :Name( "Sales($M)" ) ), Mean( :Name( "Assets($Mil.)" ) ) ),
	Line Chart( 1 ),
	Y[1] << Overlay Color( 4 ),
	Y[2] << Overlay Color( 3 )
);
rpt = obj << report;
k = 1;
For( i = 1, i <= N Items( cert rs ), i++,
	k = k + 12
);
```

**Code Explanation**:

1. Define labels for chart.
2. Create text edit box.
3. Define title for chart.
4. Define labels for categories.
5. Define rendering styles.
6. Define pen sizes.
7. Define colors.
8. Open data table;
9. Create line chart object.
10. Extract report from chart.



