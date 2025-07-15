# Data Connector



## 항목 메시지

### Dump

**구문:** res = obj &lt;&lt; Dump()

**설명:** 이 데이터 커넥터의 콘텐츠를 유형 및 기본값 외의 값을 지정하는 규격 문자열로 가져옵니다.

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Dump();

```

### Get

**구문:** res = obj &lt;&lt; Get( OPTION )

**설명:** 옵션의 값을 가져옵니다.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
// Get dc's value for the Supports Schemas option, namely the default value
dc << Get( Supports Schemas );

```

### Open

**구문:** res = obj &lt;&lt; Open()

**설명:** 이 데이터 커넥터에 지정된 새 데이터 테이블을 엽니다.

```jsl

Names Default To Here( 1 );

New Data Connector(
	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration
	Table( "my_table" )  // The table to open
) << Open();

```

### Save

**구문:** obj &lt;&lt; Save( file path )

**설명:** 이 데이터 커넥터의 콘텐츠를 파일에 저장합니다. 파일 콘텐츠는 << Dump() 결과와 동일합니다.

```jsl

Names Default To Here( 1 );

New Data Connector(
	Type( "ODBC" ),
	Block Fetch( "ON" ),  // Default value; won't be included
	Supports Schemas( "ON" ),  // Non-default value; will be included
) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**구문:** obj &lt;&lt; Set( &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**설명:** 여러 옵션의 값을 설정합니다.

```jsl

Names Default To Here( 1 );

dc = New Data Connector( Type( "ODBC" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );
dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );
Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**구문:** res = obj &lt;&lt; Type()

**설명:** 데이터 커넥터 유형을 가져옵니다.

```jsl

Names Default To Here( 1 );
New Data Connector( Type( "ODBC" ) ) << Type();

```

