# Data Connector Registry



## 項目のメッセージ

### Get

**構文:** Data Connector Registry() &lt;&lt; Get ( name )

**説明:** レジストリからデータコネクタを読み込む。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**構文:** Data Connector Registry() &lt;&lt; Get Available()

**説明:** レジストリから使用可能なデータコネクタのリストを読み込む。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

list = Data Connector Registry() << Get Available();

```

### Get Metadata

**構文:** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**説明:** レジストリからデータコネクタのメタデータを取得する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**構文:** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**説明:** レジストリにデータコネクタを追加する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

Data Connector Registry() << Register(
	Path( "$DOCUMENTS/my connector.jmpdc" ),
	Name( "My Data Connector" )
);

```

### Unregister

**構文:** Data Connector Registry() &lt;&lt; Unregister ( name )

**説明:** レジストリからデータコネクタを削除する。

**JMP追加されたバージョン:** 18

```jsl

Names Default To Here( 1 );

dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

