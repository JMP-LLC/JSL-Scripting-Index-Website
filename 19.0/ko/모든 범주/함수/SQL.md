# SQL



## 연결된 생성자

### New SQL Query

**구문:** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**설명:** 지정된 테이블, 열 및 연결에 대한 SQL 쿼리 개체를 생성합니다. 또는 지정된 사용자 SQL 쿼리에 대한 SQL 쿼리 개체를 생성합니다. 쿼리를 생성하는 스크립트는 쿼리 빌더를 사용하여 만들 수 있습니다.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### As SQL Expr

**구문:** y = As SQL Expr( x, &lt;style&gt; )

**설명:** SQL Select 문에서 사용할 수 있는 유효한 SQL 구문으로 변환된 표현식이 포함된 문자열을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**구문:** Close Database Connection(databaseConnectionHandle)

**설명:** Create Database Connection에서 반환된 데이터베이스 연결을 닫습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**구문:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**설명:** 데이터베이스 연결을 생성하고 해당 연결에 대한 핸들을 반환합니다. DriverPrompt가 true이면 필요한 경우 ODBC 드라이버의 사용자 확인 기능을 통해 자격 증명을 제공하라는 메시지가 사용자에게 표시됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**구문:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**설명:** Create Database Connection 또는 Data Connector에서 반환된 데이터베이스 연결에 대해 SQL을 실행합니다. &apos;Batch Submit&apos;(일괄 전송)을 활성화하면 여러 SQL 문에서 여러 결과를 받아 결과 목록을 반환할 수 있습니다(지원하는 드라이버만 해당).

**JMP추가된 버전:** 버전 14 이전

#### 예제 1

```jsl

dt = Execute SQL( databaseConnectionHandle, "SELECT HEIGHT, WEIGHT FROM Bigclass", "NewTable" );

```

#### 예제 2

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

#### 예제 3

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### New Data Connector

**구문:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**설명:** 데이터 커넥터 구성 개체를 생성합니다.

**JMP추가된 버전:** 18

#### 예제 1

```jsl


// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

#### 예제 2

```jsl


// Launch Query Builder from a SQL Server data source
dc = New Data Connector(
	ID( "com.jmp.sql_server" ), 
    // All these example values need to be replaced with real ones
	Server( "database.example.com" ),
	Database( "MainDatabase" ),
	User( "username" ),
	Password( "password" )
);
New SQL Query( Connection( dc ) ) << Modify;

```

### New SQL Query

**구문:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**설명:** 지정된 테이블, 열 및 연결에 대한 SQL 쿼리 개체를 생성합니다. 또는 지정된 사용자 SQL 쿼리에 대한 SQL 쿼리 개체를 생성합니다. 쿼리를 생성하는 스크립트는 쿼리 빌더를 사용하여 만들 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl


obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**구문:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**설명:** ODBC를 사용하여 데이터베이스를 열고 지정된 SQL을 실행하여 지정된 출력 테이블 이름을 가진 데이터 테이블에 데이터를 추가합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**구문:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**설명:** JMP 데이터 테이블에 대해 SQL 쿼리를 수행합니다. sqlStatement(SQL 쿼리, 대부분의 경우 SELECT 문)는 필수이며 마지막 인수여야 합니다. 원하는 경우 SQL이 사용할 수 있는 테이블에 대한 별칭을 생성하려면 SQL 문이 참조하는 JMP 데이터 테이블을 Table(dt, "alias")을 사용하여 Query()에 인수로 전달해야 합니다. 결과 데이터 테이블의 표시 여부를 제어하기 위해 Invisible 또는 Private을 전달할 수 있습니다. SQL 문이 단일 값을 반환할 경우 스칼라를 전달하십시오. 이 경우 데이터 테이블 대신 단일 값이 반환됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Query( dt, "SELECT name, age, height FROM 'Big Class'
         WHERE age > 14; " );

		// Using aliases, performing a join
dtSAT = Open( "$SAMPLE_DATA/SATByYear.jmp", Invisible );
dtUS = Open( "$SAMPLE_DATA/US Demographics.jmp", Invisible );
Query(
	Table( dtSAT, "t1" ),
	Table( dtUS, "t2" ), 

	"\[SELECT t1.State, t1."SAT Math", t2."College Degrees",
            t2."Eighth Grade Math"
       FROM t1
       LEFT OUTER JOIN t2
           ON t1.State = t2.State
       WHERE t1.'SAT Math' > 550;
      ]\"
);

		// Query that returns a scalar value
retval = Query( Scalar, dt, "SELECT AVG(height) from 'Big Class';" );
// Query with no tables
retval = Query( Scalar, "SELECT SQRT(152399025);" );

```

## SQL Query

### 항목 메시지

#### CustomSQL

**구문:** obj &lt;&lt; Custom SQL( sql )

**설명:** 쿼리를 사용자 SQL 쿼리로 변경하고 SQL을 설정합니다.

```jsl

obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) );
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**구문:** sql = obj &lt;&lt; Generate SQL

**설명:** 쿼리에 대한 SQL 문을 생성하고 반환합니다.

```jsl

obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) );
sql = obj << Generate SQL;

```

#### Modify

**구문:** obj &lt;&lt; Modify

**설명:** 쿼리 빌더에서 쿼리를 엽니다.

```jsl

query << Modify;

```

#### PostQueryScript

**구문:** obj &lt;&lt; Post Query Script( script_as_text )

**설명:** 쿼리가 실행된 후에 실행될 JSL 스크립트를 설정합니다.

```jsl

obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) );
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**구문:** obj &lt;&lt; Query Name( &lt;newName&gt; )

**설명:** 쿼리 이름을 가져오거나 설정합니다. 쿼리 이름은 쿼리 실행으로 생성된 데이터 테이블의 이름으로 사용됩니다.

```jsl

obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) );
obj << Query Name( "New Name" );
name = obj << Query Name;
Show( name );

```

#### Run

**구문:** result = obj &lt;&lt; Run( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**설명:** 쿼리를 실행합니다. 쿼리는 쿼리 빌더 환경 설정에 따라 포그라운드 또는 백그라운드에서 실행될 수 있습니다. UpdateTable을 지정할 경우 쿼리가 포그라운드에서 실행됩니다. 쿼리가 포그라운드에서 실행될 경우 실행으로 반환되는 값은 쿼리에서 생성된 데이터 테이블입니다. 쿼리가 백그라운드에서 실행되거나 쿼리에 오류가 있는 경우에는 실행 후에 값이 반환되지 않습니다. 쿼리가 완료될 때 스크립트를 실행하려면 OnRunComplete, OnRunCanceled 및 OnError 인수를 사용하십시오.

```jsl

query << Run;

```

#### Run Background

**구문:** result = obj &lt;&lt; Run Background( &lt;OnRunComplete(script), &lt;Private|Invisible&gt;&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**설명:** 백그라운드에서 쿼리를 실행합니다. 쿼리가 완료되면 쿼리에서 생성된 데이터 테이블이 열립니다. 쿼리가 완료될 때 스크립트를 실행하려면 OnRunComplete, OnRunCanceled 및 OnError 인수를 사용하십시오. Private은 OnRunComplete 스크립트를 지정한 경우에만 지정할 수 있습니다. Run Background는 값을 반환하지 않습니다.

```jsl


query << Run Background(
	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) )
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Background( OnRunComplete( MyRunCompleteFunc ) );

```

#### Run Foreground

**구문:** result = obj &lt;&lt; Run Foreground( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**설명:** 포그라운드에서 쿼리를 실행합니다. 쿼리가 성공하거나 부분 결과와 함께 취소될 경우 Run Foreground는 쿼리에서 생성된 데이터 테이블을 반환합니다. 쿼리가 실패할 경우에는 Run Foreground가 값을 반환하지 않습니다. 쿼리가 완료될 때 스크립트를 실행하려면 OnRunComplete, OnRunCanceled 및 OnError 인수를 사용하십시오.

```jsl


query << Run Foreground(
	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) )
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Foreground( OnRunComplete( MyRunCompleteFunc ) );

```

#### Save

**구문:** obj &lt;&lt; Save

**설명:** 쿼리를 쿼리에 연결된 파일에 저장합니다. 쿼리에 연결된 파일이 없는 경우에는 저장이 실패합니다.

```jsl

obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

#### Save As

**구문:** obj &lt;&lt; Save As( path, &lt;ReplaceExisting(0|1)&gt; )

**설명:** 쿼리를 지정된 파일에 저장합니다. 파일이 이미 있는 경우 기존 항목 바꾸기가 true가 아니면 저장이 실패합니다.

```jsl

obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) );
obj << Save As( "c:\users\public\temp.jmpquery" );

```

