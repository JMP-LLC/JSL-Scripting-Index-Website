# Data Connector



## Messages d'éléments

### Dump

**Syntaxe :** res = obj &lt;&lt; Dump()

**Description :** Obtenez les contenus de ce connecteur de données en tant que chaîne de spécification pour le type et les valeurs autres que les valeurs par défaut.

```jsl

New Data Connector(	Type( "ODBC" ),	Block Fetch( "ON" ),  // Default value; won't be included	Supports Schemas( "ON" ),  // Non-default value; will be included) << Dump();

```

### Get

**Syntaxe :** res = obj &lt;&lt; Get( OPTION )

**Description :** Obtenez la valeur d&apos;une option.

```jsl

dc = New Data Connector( Type( "ODBC" ) );// Get dc's value for the Supports Schemas option, namely the default valuedc << Get( Supports Schemas );

```

### Open

**Syntaxe :** res = obj &lt;&lt; Open()

**Description :** Ouvrez une nouvelle table de données comme spécifié par ce connecteur de données.

```jsl

New Data Connector(	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration	Table( "my_table" )  // The table to open) << Open();

```

### Open Backing Data

**Syntaxe :** obj &lt;&lt; Open Backing Data( &lt; Schema( "schema" ) &gt;, Table( "table" ), &lt; Args( ... ) &gt; )

**Description :** Connect and open the file or other data that backs the named table.

```jsl

New Data Connector(    // Available with https://marketplace.jmp.com/appdetails/Python+Data+Connector+Demo	ID( "jmp_py_data_connector_demo.folder" ),	Folder( Get Path Variable( "SAMPLE_IMPORT_DATA" ) ),	Limit To Extension( ".xlsx" )) << Open Backing Data(	Table( "Bigclass" ),	Args(		Worksheets( "Bigclass" ),		Use for all sheets( 1 ),		Concatenate Worksheets( 0 ),		Create Concatenation Column( 0 ),		Worksheet Settings(			1,			Has Column Headers( 1 ),			Number of Rows in Headers( 1 ),			Headers Start on Row( 1 ),			Data Starts on Row( 2 ),			Data Starts on Column( 1 ),			Data Ends on Row( 0 ),			Data Ends on Column( 0 ),			Replicated Spanned Rows( 1 ),			Replicated Spanned Headers( 0 ),			Suppress Hidden Rows( 1 ),			Suppress Hidden Columns( 1 ),			Suppress Empty Columns( 0 ),			Treat as Hierarchy( 0 ),			Multiple Series Stack( 0 ),			Import Cell Colors( 0 ),			Limit Column Detect( 0 ),			Column Separator String( "-" )		)	));

```

### Save

**Syntaxe :** obj &lt;&lt; Save( file path )

**Description :** Enregistrez les contenus de ce connecteur de données dans un fichier. Les contenus du fichier sont identiques au résultat de << Dump().

```jsl

New Data Connector(	Type( "ODBC" ),	Block Fetch( "ON" ),  // Default value; won't be included	Supports Schemas( "ON" ),  // Non-default value; will be included) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**Syntaxe :** obj &lt;&lt; Set( &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Description :** Définissez la valeur d&apos;un nombre quelconque d&apos;options.

```jsl

dc = New Data Connector( Type( "ODBC" ) );Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**Syntaxe :** res = obj &lt;&lt; Type()

**Description :** Obtenez le type du connecteur de données.

```jsl

New Data Connector( Type( "ODBC" ) ) << Type();

```

