# SQL



## Associated Constructors

### New SQL Query

**Syntax:** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Description:** Creates an SQL Query object for the connection, columns and table specified, or for the custom SQL query specified. Use Query Builder to generate scripts that create queries.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### As SQL Expr

**Syntax:** y = As SQL Expr( x, &lt;style&gt; )

**Description:** Returns a string that contains the expression converted to valid SQL syntax for use in an SQL Select statement.

```jsl

Names Default To Here( 1 );
As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**Syntax:** Close Database Connection(databaseConnectionHandle)

**Description:** Closes a database connection returned from Create Database Connection

```jsl

Names Default To Here( 1 );
Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**Syntax:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Description:** Creates a database connection and returns a handle to the connection. If DriverPrompt is true, the user will be prompted using the ODBC driver&apos;s prompt to supply credentials if necessary.

```jsl

Names Default To Here( 1 );
dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**Syntax:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Description:** Executes SQL against a database connection returned from Create Database Connection or a Data Connector. Enabling Batch Submit allows for receiving multiple results from multiple SQL statements, returning a list with the results (supporting drivers only).

**Example 1**

```jsl

Names Default To Here( 1 );
dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### New Data Connector

**Syntax:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Description:** Create a data connector configuration object.

**Example 1**

```jsl

Names Default To Here( 1 );

// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Example 2**

```jsl

Names Default To Here( 1 );

// Launch Query Builder from a SQL Server data source
dc = New Data Connector(
	ID( "com.jmp.sql_server" ), 
    // All these example values need to be replaced with real ones
	Server( "database.example.com" ),
	Database( "MainDatabase" ),
	User( "username" ),
	Password( "password" )
);
New SQL Query( Connection( dc ) ) << Modify;

```

### New SQL Query

**Syntax:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Description:** Creates an SQL Query object for the connection, columns and table specified, or for the custom SQL query specified. Use Query Builder to generate scripts that create queries.

```jsl

Names Default To Here( 1 );

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**Syntax:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Description:** Opens a database using ODBC, runs the given SQL, and puts data into a data table with the given output table name.

```jsl

Names Default To Here( 1 );
Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**Syntax:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Description:** Perform an SQL query on JMP data tables. sqlStatement (the SQL query, most likely a SELECT statement) is required and must be the last argument. JMP data tables referenced by the SQL statement must be passed in as arguments to Query(), using Table(dt, "alias") to create an alias for the table that the SQL can use if desired. Invisible or Private can be passed in to control the visibility of the resulting data table. If the SQL statement returns a single value, pass in Scalar, which will cause the single value to be returned instead of a data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Query( dt, "SELECT name, age, height FROM 'Big Class'
         WHERE age > 14; " );

		// Using aliases, performing a join
dtSAT = Open( "$SAMPLE_DATA/SATByYear.jmp", Invisible );
dtUS = Open( "$SAMPLE_DATA/US Demographics.jmp", Invisible );
Query(
	Table( dtSAT, "t1" ),
	Table( dtUS, "t2" ), 

	"\[SELECT t1.State, t1."SAT Math", t2."College Degrees",
            t2."Eighth Grade Math"
       FROM t1
       LEFT OUTER JOIN t2
           ON t1.State = t2.State
       WHERE t1.'SAT Math' > 550;
      ]\"
);

		// Query that returns a scalar value
retval = Query( Scalar, dt, "SELECT AVG(height) from 'Big Class';" );
// Query with no tables
retval = Query( Scalar, "SELECT SQRT(152399025);" );

```

## SQL Query

### Item Messages

#### CustomSQL

**Syntax:** obj &lt;&lt; Custom SQL( sql )

**Description:** Changes the query to a custom SQL query and sets the SQL.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**Syntax:** sql = obj &lt;&lt; Generate SQL

**Description:** Generates and returns the SQL statement for the query.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
sql = obj << Generate SQL;

```

#### Modify

**Syntax:** obj &lt;&lt; Modify

**Description:** Opens the query in Query Builder.

```jsl

Names Default To Here( 1 );
query << Modify;

```

#### PostQueryScript

**Syntax:** obj &lt;&lt; Post Query Script( script_as_text )

**Description:** Sets the JSL script that will run after the query runs each time.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**Syntax:** obj &lt;&lt; Query Name( &lt;newName&gt; )

**Description:** Gets or sets the name of the query. The name of the query will be used as the name of the data table that results from running the query.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Query Name( "New Name" );
name = obj << Query Name;
Show( name );

```

#### Run

**Syntax:** result = obj &lt;&lt; Run( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Description:** Run the query. The query might run in the foreground or in the background, depending on the Query Builder preference. If UpdateTable is specified, the query will run in the foreground. If the query runs in the foreground, the return value from Run will be the data table resulting from the query. If the query runs in the background or has an error, Run does not return a value. Use the OnRunComplete, OnRunCanceled, and OnError arguments to run a script when the query finishes.

```jsl

Names Default To Here( 1 );
query << Run;

```

#### Run Background

**Syntax:** result = obj &lt;&lt; Run Background( &lt;OnRunComplete(script), &lt;Private|Invisible&gt;&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Description:** Run the query in the background. The data table resulting from the query will open when the query finishes. Use the OnRunComplete, OnRunCanceled, and OnError arguments to run a script when the query finishes. Private can be specified only if an OnRunComplete script is also specified. Run Background does not return a value.

```jsl

Names Default To Here( 1 );

query << Run Background(
	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) )
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Background( OnRunComplete( MyRunCompleteFunc ) );

```

#### Run Foreground

**Syntax:** result = obj &lt;&lt; Run Foreground( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Description:** Run the query in the foreground. If the query succeeds or is canceled with a partial result, Run Foreground returns the data table resulting from the query. If the query fails, Run Foreground does not return a value. Use the OnRunComplete, OnRunCanceled, and OnError arguments to run a script when the query finishes.

```jsl

Names Default To Here( 1 );

query << Run Foreground(
	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) )
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Foreground( OnRunComplete( MyRunCompleteFunc ) );

```

#### Save

**Syntax:** obj &lt;&lt; Save

**Description:** Saves the query to its associated file. The save fails if the query does not yet have an associated file.

```jsl

Names Default To Here( 1 );
obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

#### Save As

**Syntax:** obj &lt;&lt; Save As( path, &lt;ReplaceExisting(0|1)&gt; )

**Description:** Saves the query to the specified file. If the file already exists, the save will fail unless Replace Existing is true.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Save As( "c:\users\public\temp.jmpquery" );

```

