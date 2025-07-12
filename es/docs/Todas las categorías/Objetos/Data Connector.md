# Data Connector



## Mensajes del elemento

### Dump

**Sintaxis:** res = obj << Dump()

**Descripción:** Obtiene el contenido de este conector de datos como una cadena de especificación que especifica el tipo y cualquier valor no predeterminado.

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**Sintaxis:** res = obj << Get( OPTION )

**Descripción:** Obtiene el valor de una opción.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**Sintaxis:** res = obj << Open()

**Descripción:** Abre una nueva tabla de datos, tal y como especifica este conector de datos.

```jsl

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**Sintaxis:** obj << Save( file path )

**Descripción:** Guarda el contenido de este conector de datos en un archivo. El contenido del archivo es el mismo que el resultado de << Dump().

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Sintaxis:** obj << Set( < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Descripción:** Establece el valor de cualquier número de opciones.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Sintaxis:** res = obj << Type()

**Descripción:** Obtiene el tipo del conector de datos.

```jsl

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

