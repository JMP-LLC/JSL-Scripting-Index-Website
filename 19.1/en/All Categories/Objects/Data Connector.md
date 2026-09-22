# Data Connector



## Item Messages

### Dump

**Syntax:** res = obj &lt;&lt; Dump()

**Description:** Get the contents of this data connector as a specification string that specifies the type and any non-default values.

```jsl

New Data Connector(	Type( "ODBC" ),	Block Fetch( "ON" ),  // Default value; won't be included	Supports Schemas( "ON" ),  // Non-default value; will be included) << Dump();

```

### Get

**Syntax:** res = obj &lt;&lt; Get( OPTION )

**Description:** Get the value of an option.

```jsl

dc = New Data Connector( Type( "ODBC" ) );// Get dc's value for the Supports Schemas option, namely the default valuedc << Get( Supports Schemas );

```

### Open

**Syntax:** res = obj &lt;&lt; Open()

**Description:** Open a new data table as specified by this data connector.

```jsl

New Data Connector(	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration	Table( "my_table" )  // The table to open) << Open();

```

### Open Backing Data

**Syntax:** obj &lt;&lt; Open Backing Data( &lt; Schema( "schema" ) &gt;, Table( "table" ), &lt; Args( ... ) &gt; )

**Description:** Connect and open the file or other data that backs the named table.

```jsl

New Data Connector(    // Available with https://marketplace.jmp.com/appdetails/Python+Data+Connector+Demo	ID( "jmp_py_data_connector_demo.folder" ),	Folder( Get Path Variable( "SAMPLE_IMPORT_DATA" ) ),	Limit To Extension( ".xlsx" )) << Open Backing Data(	Table( "Bigclass" ),	Args(		Worksheets( "Bigclass" ),		Use for all sheets( 1 ),		Concatenate Worksheets( 0 ),		Create Concatenation Column( 0 ),		Worksheet Settings(			1,			Has Column Headers( 1 ),			Number of Rows in Headers( 1 ),			Headers Start on Row( 1 ),			Data Starts on Row( 2 ),			Data Starts on Column( 1 ),			Data Ends on Row( 0 ),			Data Ends on Column( 0 ),			Replicated Spanned Rows( 1 ),			Replicated Spanned Headers( 0 ),			Suppress Hidden Rows( 1 ),			Suppress Hidden Columns( 1 ),			Suppress Empty Columns( 0 ),			Treat as Hierarchy( 0 ),			Multiple Series Stack( 0 ),			Import Cell Colors( 0 ),			Limit Column Detect( 0 ),			Column Separator String( "-" )		)	));

```

### Save

**Syntax:** obj &lt;&lt; Save( file path )

**Description:** Save the contents of this data connector to a file. The file contents are the same as the result of << Dump().

```jsl

New Data Connector(	Type( "ODBC" ),	Block Fetch( "ON" ),  // Default value; won't be included	Supports Schemas( "ON" ),  // Non-default value; will be included) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Syntax:** obj &lt;&lt; Set( &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Description:** Set the value of any number of options.

```jsl

dc = New Data Connector( Type( "ODBC" ) );Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Syntax:** res = obj &lt;&lt; Type()

**Description:** Get the type of the data connector.

```jsl

New Data Connector( Type( "ODBC" ) ) << Type();

```

