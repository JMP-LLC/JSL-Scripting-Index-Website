# Data Connector



## Messaggi degli elementi

### Dump

**Sintassi:** res = obj &lt;&lt; Dump()

**Descrizione:** Ottiene il contenuto di questo connettore di dati come una stringa di specifica che specifica il tipo e tutti i valori non di default.

```jsl


New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**Sintassi:** res = obj &lt;&lt; Get( OPTION )

**Descrizione:** Ottiene il valore di un&apos;opzione.

```jsl


dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**Sintassi:** res = obj &lt;&lt; Open()

**Descrizione:** Apre una nuova tabella di dati come specificato da questo connettore di dati.

```jsl


New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**Sintassi:** obj &lt;&lt; Save( file path )

**Descrizione:** Salva il contenuto di questo connettore di dati in un file. Il contenuto del file è lo stesso del risultato di << Scarica().

```jsl


New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Sintassi:** obj &lt;&lt; Set( &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Descrizione:** Imposta il valore di un numero qualsiasi di opzioni.

```jsl


dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Sintassi:** res = obj &lt;&lt; Type()

**Descrizione:** Ottiene il tipo di connettore di dati.

```jsl

New Data Connector( Type( "ODBC" ) ) << Type();

```

