# Data Connector



## Elementmeldungen

### Dump

**Syntax:** res = obj << Dump()

**Beschreibung:** Ruft den Inhalt dieses Datenkonnektors als Spezifikationszeichenkette ab, die den Typ und alle Nicht-Standardwerte angibt.

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**Syntax:** res = obj << Get( OPTION )

**Beschreibung:** Ruft den Wert einer Option ab.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**Syntax:** res = obj << Open()

**Beschreibung:** Öffnet eine neue Datentabelle wie von diesem Datenkonnektor angegeben.

```jsl

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**Syntax:** obj << Save( file path )

**Beschreibung:** Speichert den Inhalt dieses Datenkonnektors in einer Datei. Der Inhalt der Datei ist derselbe wie das Ergebnis von << Dump().

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Syntax:** obj << Set( < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Beschreibung:** Legt den Wert einer beliebigen Anzahl von Optionen fest.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Syntax:** res = obj << Type()

**Beschreibung:** Ruft den Typ des Datenkonnektors ab.

```jsl

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

