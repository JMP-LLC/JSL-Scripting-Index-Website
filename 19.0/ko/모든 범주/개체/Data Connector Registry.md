# Data Connector Registry



## 항목 메시지

### Get

**구문:** Data Connector Registry() &lt;&lt; Get ( name )

**설명:** 레지스트리에서 데이터 커넥터를 가져옵니다.

**JMP추가된 버전:** 18

```jsl


dc = Data Connector Registry() << Get( "com.jmp.sql_server" );

```

### Get Available

**구문:** Data Connector Registry() &lt;&lt; Get Available()

**설명:** 레지스트리의 사용 가능한 데이터 커넥터 목록을 가져옵니다.

**JMP추가된 버전:** 18

```jsl


list = Data Connector Registry() << Get Available();

```

### Get Metadata

**구문:** Data Connector Registry() &lt;&lt; Get Metadata ( name )

**설명:** 레지스트리에서 데이터 커넥터 메타데이터를 가져옵니다.

**JMP추가된 버전:** 18

```jsl


metadata = Data Connector Registry() << Get Metadata( "com.jmp.sql_server" );

```

### Register

**구문:** Data Connector Registry() &lt;&lt; Register( Path(path), &lt;Name(name)&gt;, &lt;Description(Description)&gt; )

**설명:** 레지스트리에 데이터 커넥터를 추가합니다.

**JMP추가된 버전:** 18

```jsl


Data Connector Registry() << Register( Path( "$DOCUMENTS/my connector.jmpdc" ), Name( "My Data Connector" ) );

```

### Unregister

**구문:** Data Connector Registry() &lt;&lt; Unregister ( name )

**설명:** 레지스트리에서 데이터 커넥터를 제거합니다.

**JMP추가된 버전:** 18

```jsl


dc = Data Connector Registry() << Unregister( "My Data Connector" );

```

