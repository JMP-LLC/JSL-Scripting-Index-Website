# Row



### As Table

**Syntax:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**Description:** Converts a matrix into a data table. The invisible option can be used to avoid displaying the table.

**JMP Version Added:** Before version 14

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**Syntax:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**Description:** Returns column value that has not had column properties applied to it. If row option is not specified, then the current row is assumed.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Column

**Syntax:** y = Column( name|number );y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**Description:** Returns a reference to the specified data table column. The keyword "formatted" allows accessing formatted data, like the value label.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Example 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**Syntax:** name = Column Name( n )

**Description:** Returns the name of the nth column of the current data table.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Count

**Syntax:** y = Count( start, end, s, &lt;n=1&gt; )

**Description:** Returns the ith value in the sequence of numbers from start to end taking s steps and repeating each number n times, where i is determined by the value of the Row() function. Being dependent on the Row() function, the Count() function is generally used in column formulas.

**JMP Version Added:** Before version 14

```jsl

New Table( "Count Example",
	Add Rows( 12 ),
	New Column( "Count1" ),
	New Column( "Count2" ),
	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) )
);
For Each Row(
	:Count1[Row()] = Count( 0, 6, 4, 1 );
	:Count2[Row()] = Count( 0, 6, 3, 2 );
);

```

### Current Data Table

**Syntax:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**Description:** Returns the current data table or makes the specified data table current if there is one specified.



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Data Table

**Syntax:** dt = Data Table( name|number )

**Description:** Returns a reference to the specified data table.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Dif

**Syntax:** y = Dif( x, &lt;n=1&gt; )

**Description:** Returns x - Lag( x, n ), also known as the "first difference". Being dependent on Row(), Dif() is mainly useful in column formulas.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Dim

**Syntax:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Description:** Returns a row vector with the dimensions of the current data table, a specified data table, or a matrix. The dimensions are the number of rows and the number of columns and are listed in that order.

**JMP Version Added:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**Syntax:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**Description:** Returns a reference to the specified data table.



The search is limited to tables in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Syntax:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**Description:** Returns a list of all open data tables.



The list is limited to tables in the current project (or no project when not running the script in a project).



To specify a project, use the optional Project() argument with a title, index, display box, or window object. Use Project(0) to specify no project when running the script in a project.

**JMP Version Added:** 14

**Example 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Example 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Lag

**Syntax:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**Description:** Returns the value of the x argument with the current row set to Row() - n. Being dependent on Row(), Lag() is mainly useful in column formulas.

**JMP Version Added:** Before version 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### N Row

**Syntax:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Description:** Returns the number of rows in the current data table, a specified data table, or a matrix.

**JMP Version Added:** Before version 14

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**Syntax:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Description:** Returns the number of rows in the current data table, a specified data table, or a matrix.

**JMP Version Added:** Before version 14

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**Syntax:** n = N Table()

**Description:** Returns the number of currently open data tables.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Example 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### New Column

**Syntax:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**Description:** Creates a new column in the current data table. The optional actions arguments are any messages that data columns support.

**JMP Version Added:** Before version 14

#### Like

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

#### Simple

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**Syntax:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**Description:** Creates a new column by performing a regular expression pattern match on an existing column.

**JMP Version Added:** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Table

**Syntax:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**Description:** Creates a new data table. "Invisible" hides the data table from view but lists it in the JMP Home Window. "Private" hides the table completely. "Visible" is the default, and creates a normal table that is visible and listed in the JMP Home Window. The optional actions arguments are any messages that data tables support.

**JMP Version Added:** Before version 14

```jsl

New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### Row

**Syntax:** y = Row(); Row() = y

**Description:** Returns the current row in a data table. Can be set as an L-value. Reset the current row by assigning value of 0.

**JMP Version Added:** Before version 14

#### Reset Row

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

#### Set Row

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

### Sequence

**Syntax:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**Description:** Returns the Row()th item in the sequence of numbers from start to end incremented by incr. Each number in the sequence is repeated n times. Because of its dependence on Row(), the Sequence() function is mainly useful in column formulas. To create sequences as JSL matrices, see Index().

**JMP Version Added:** Before version 14

```jsl

Row() = 3;
Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**Syntax:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**Description:** Subscribe to the data table list to be notified when a new data table has been added or closed.

**JMP Version Added:** Before version 14

**Example 1**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

**Example 2**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab, b},
	dtname = (dtab << getname());
	Print( "renaming ", b, " to ", dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnRename( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << setname( "xxx" );

```

### Subscript

**Syntax:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Description:** Returns the ith value of a subscriptable object, which can be a column of a data table, a matrix, a list, or a report display element.

**JMP Version Added:** Before version 14

```jsl

{11, 12, 13}[2];

```

### Suppress Formula Eval

**Syntax:** Suppress Formula Eval( &lt;suppress=1&gt; )

**Description:** Suppresses the evaluation of formulas in all data tables if the argument if nonzero.

**JMP Version Added:** Before version 14

```jsl

Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**Syntax:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**Description:** Remove a subscription to the data table list that had been added thru the command "subscribe to data table list".

**JMP Version Added:** Before version 14

**Example 1**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "on close" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Example 2**

```jsl

f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "all" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

