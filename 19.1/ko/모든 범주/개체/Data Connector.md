# Data Connector



## 항목 메시지

### Dump

**구문:** res = obj &lt;&lt; Dump()

**설명:** 이 데이터 커넥터의 콘텐츠를 유형 및 기본값 외의 값을 지정하는 규격 문자열로 가져옵니다.

```jsl

New Data Connector(	Type( "ODBC" ),	Block Fetch( "ON" ),  // Default value; won't be included	Supports Schemas( "ON" ),  // Non-default value; will be included) << Dump();

```

### Get

**구문:** res = obj &lt;&lt; Get( OPTION )

**설명:** 옵션의 값을 가져옵니다.

```jsl

dc = New Data Connector( Type( "ODBC" ) );// Get dc's value for the Supports Schemas option, namely the default valuedc << Get( Supports Schemas );

```

### Open

**구문:** res = obj &lt;&lt; Open()

**설명:** 이 데이터 커넥터에 지정된 새 데이터 테이블을 엽니다.

```jsl

New Data Connector(	ID( "com.example.odbc_example" ),  // Some ODBC-type base configuration	Table( "my_table" )  // The table to open) << Open();

```

### Open Backing Data

**구문:** obj &lt;&lt; Open Backing Data( &lt; Schema( "schema" ) &gt;, Table( "table" ), &lt; Args( ... ) &gt; )

**설명:** Connect and open the file or other data that backs the named table.

```jsl

New Data Connector(    // Available with https://marketplace.jmp.com/appdetails/Python+Data+Connector+Demo	ID( "jmp_py_data_connector_demo.folder" ),	Folder( Get Path Variable( "SAMPLE_IMPORT_DATA" ) ),	Limit To Extension( ".xlsx" )) << Open Backing Data(	Table( "Bigclass" ),	Args(		Worksheets( "Bigclass" ),		Use for all sheets( 1 ),		Concatenate Worksheets( 0 ),		Create Concatenation Column( 0 ),		Worksheet Settings(			1,			Has Column Headers( 1 ),			Number of Rows in Headers( 1 ),			Headers Start on Row( 1 ),			Data Starts on Row( 2 ),			Data Starts on Column( 1 ),			Data Ends on Row( 0 ),			Data Ends on Column( 0 ),			Replicated Spanned Rows( 1 ),			Replicated Spanned Headers( 0 ),			Suppress Hidden Rows( 1 ),			Suppress Hidden Columns( 1 ),			Suppress Empty Columns( 0 ),			Treat as Hierarchy( 0 ),			Multiple Series Stack( 0 ),			Import Cell Colors( 0 ),			Limit Column Detect( 0 ),			Column Separator String( "-" )		)	));

```

### Save

**구문:** obj &lt;&lt; Save( file path )

**설명:** 이 데이터 커넥터의 콘텐츠를 파일에 저장합니다. 파일 콘텐츠는 << Dump() 결과와 동일합니다.

```jsl

New Data Connector(	Type( "ODBC" ),	Block Fetch( "ON" ),  // Default value; won't be included	Supports Schemas( "ON" ),  // Non-default value; will be included) << Save( "$DOCUMENTS/data connector save example.jmpdc" );

```

### Set

**구문:** obj &lt;&lt; Set( &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**설명:** 여러 옵션의 값을 설정합니다.

```jsl

dc = New Data Connector( Type( "ODBC" ) );Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );dc << Set( Block Fetch( "ON" ), Supports Schemas( "ON" ) );Show( dc << Get( Block Fetch ), dc << Get( Supports Schemas ) );

```

### Type

**구문:** res = obj &lt;&lt; Type()

**설명:** 데이터 커넥터 유형을 가져옵니다.

```jsl

New Data Connector( Type( "ODBC" ) ) << Type();

```

