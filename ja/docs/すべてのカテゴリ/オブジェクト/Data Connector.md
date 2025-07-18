# Data Connector



## 項目のメッセージ

### Dump

**構文:** res = obj &lt;&lt; Dump()

**説明:** このデータコネクタのコンテンツを、種類と非デフォルト値を含む仕様の文字列として取得する。

```jsl


New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**構文:** res = obj &lt;&lt; Get( OPTION )

**説明:** オプションの値を取得する。

```jsl


dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**構文:** res = obj &lt;&lt; Open()

**説明:** このデータコネクタで指定されているとおりに新しいデータテーブルを開く。

```jsl


New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**構文:** obj &lt;&lt; Save( file path )

**説明:** このデータコネクタのコンテンツをファイルに保存する。ファイルのコンテンツは<< Dump()の結果と等しい。

```jsl


New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**構文:** obj &lt;&lt; Set( &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**説明:** オプションの値を設定する。一度に複数のオプションの値を設定できる。

```jsl


dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**構文:** res = obj &lt;&lt; Type()

**説明:** データコネクタの種類を取得する。

```jsl

New Data Connector( Type( "ODBC" ) ) << Type();

```

