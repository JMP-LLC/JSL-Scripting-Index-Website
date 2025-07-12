# Data Connector



## 项消息

### Dump

**语法:** res = obj << Dump()

**说明:** 以指定类型和任何非默认值的规格字符串形式，获取该数据连接器的内容。

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**语法:** res = obj << Get( OPTION )

**说明:** 获取选项的值。

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**语法:** res = obj << Open()

**说明:** 以该数据连接器指定的形式打开新的数据表。

```jsl

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**语法:** obj << Save( file path )

**说明:** 将该数据连接器的内容保存至文件。文件内容与 << Dump() 的结果相同。

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**语法:** obj << Set( < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**说明:** 设置任意数量的选项的值。

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**语法:** res = obj << Type()

**说明:** 获取数据连接器的类型。

```jsl

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

