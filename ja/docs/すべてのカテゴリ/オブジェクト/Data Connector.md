# Data Connector



## 項目のメッセージ

### Dump

**構文:** res = obj << Dump()

**説明:** このデータコネクタのコンテンツを、種類と非デフォルト値を含む仕様の文字列として取得する。

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**構文:** res = obj << Get( OPTION )

**説明:** オプションの値を取得する。

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**構文:** res = obj << Open()

**説明:** このデータコネクタで指定されているとおりに新しいデータテーブルを開く。

```jsl

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**構文:** obj << Save( file path )

**説明:** このデータコネクタのコンテンツをファイルに保存する。ファイルのコンテンツは<< Dump()の結果と等しい。

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**構文:** obj << Set( < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**説明:** オプションの値を設定する。一度に複数のオプションの値を設定できる。

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**構文:** res = obj << Type()

**説明:** データコネクタの種類を取得する。

```jsl

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

