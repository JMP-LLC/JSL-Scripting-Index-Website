# Data Connector



### Dump

**Sintassi:** res = obj << Dump()

**Descrizione:** Ottiene il contenuto di questo connettore di dati come una stringa di specifica che specifica il tipo e tutti i valori non di default.

```js

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**Sintassi:** res = obj << Get( OPTION )

**Descrizione:** Ottiene il valore di un&apos;opzione.

```js

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**Sintassi:** res = obj << Open()

**Descrizione:** Apre una nuova tabella di dati come specificato da questo connettore di dati.

```js

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**Sintassi:** obj << Save( file path )

**Descrizione:** Salva il contenuto di questo connettore di dati in un file. Il contenuto del file è lo stesso del risultato di << Scarica().

```js

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Sintassi:** obj << Set( < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Descrizione:** Imposta il valore di un numero qualsiasi di opzioni.

```js

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Sintassi:** res = obj << Type()

**Descrizione:** Ottiene il tipo di connettore di dati.

```js

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

