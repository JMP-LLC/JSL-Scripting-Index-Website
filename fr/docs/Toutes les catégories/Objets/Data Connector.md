# Data Connector



## Messages d'éléments

### Dump

**Syntaxe :** res = obj << Dump()

**Description :** Obtenez les contenus de ce connecteur de données en tant que chaîne de spécification pour le type et les valeurs autres que les valeurs par défaut.

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**Syntaxe :** res = obj << Get( OPTION )

**Description :** Obtenez la valeur d&apos;une option.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**Syntaxe :** res = obj << Open()

**Description :** Ouvrez une nouvelle table de données comme spécifié par ce connecteur de données.

```jsl

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**Syntaxe :** obj << Save( file path )

**Description :** Enregistrez les contenus de ce connecteur de données dans un fichier. Les contenus du fichier sont identiques au résultat de << Dump().

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Syntaxe :** obj << Set( < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Description :** Définissez la valeur d&apos;un nombre quelconque d&apos;options.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Syntaxe :** res = obj << Type()

**Description :** Obtenez le type du connecteur de données.

```jsl

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

