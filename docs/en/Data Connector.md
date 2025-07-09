# Data Connector



### Dump

**Syntax:** res = obj << Dump()

**Description:** Get the contents of this data connector as a specification string that specifies the type and any non-default values.

```js

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**Syntax:** res = obj << Get( OPTION )

**Description:** Get the value of an option.

```js

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**Syntax:** res = obj << Open()

**Description:** Open a new data table as specified by this data connector.

```js

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**Syntax:** obj << Save( file path )

**Description:** Save the contents of this data connector to a file. The file contents are the same as the result of << Dump().

```js

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Syntax:** obj << Set( < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Description:** Set the value of any number of options.

```js

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Syntax:** res = obj << Type()

**Description:** Get the type of the data connector.

```js

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

