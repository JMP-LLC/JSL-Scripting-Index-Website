# SQL



## 关联的构造器

### New SQL Query

**语法:** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**说明:** 为指定的连接、列和表或为指定的自定义 SQL 查询创建 SQL 查询对象。使用“查询生成器”生成创建查询的脚本。

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### As SQL Expr

**语法:** y = As SQL Expr( x, &lt;style&gt; )

**说明:** 返回一个字符串，它包含转换为有效的 SQL 语法供 SQL Select 语句中使用的表达式。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**语法:** Close Database Connection(databaseConnectionHandle)

**说明:** 关闭从“创建数据库连接”返回的数据库连接

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**语法:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**说明:** 创建数据库连接并将句柄返回至连接。若 DriverPrompt 为真，将提示用户使用 ODBC 驱动程序的提示提供凭证（若必要）。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**语法:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**说明:** 针对从“创建数据库连接”或“数据连接器”返回的数据库连接执行 SQL。启用“批量提交”允许从多个 SQL 语句接收多个结果，并返回包含结果的列表（仅限支持的驱动程序）。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### New Data Connector

**语法:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**说明:** 创建数据连接器配置对象。

**JMP添加的版本:** 18

**示例 1**

```jsl

Names Default To Here( 1 );

// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**示例 2**

```jsl

Names Default To Here( 1 );

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

**语法:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**说明:** 为指定的连接、列和表或为指定的自定义 SQL 查询创建 SQL 查询对象。使用“查询生成器”生成创建查询的脚本。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**语法:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**说明:** 使用 ODBC 打开一个数据库，运行给定的 SQL，将数据输入具有给定的输出数据表名称的数据表中。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**语法:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**说明:** 针对 JMP 数据表执行 SQL 查询。sqlStatement（SQL 查询，很可能是 SELECT 语句）是必需的并且必须是最后一个参数。SQL 语句引用的 JMP 数据表必须作为参数传递到 Query()，若需要，可使用 Table(dt, "alias") 为该 SQL 可以使用的表创建别名。可以传入 Invisible 或 Private 以控制生成的数据表的可见性。若 SQL 语句返回单个值，则传入 Scalar，这将会返回单个值而不是数据表。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
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

### 项消息

#### CustomSQL

**语法:** obj &lt;&lt; Custom SQL( sql )

**说明:** 将该查询改为自定义 SQL 查询并设置 SQL。

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**语法:** sql = obj &lt;&lt; Generate SQL

**说明:** 生成并返回查询的 SQL 语句。

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
sql = obj << Generate SQL;

```

#### Modify

**语法:** obj &lt;&lt; Modify

**说明:** 在查询生成器中打开查询。

```jsl

Names Default To Here( 1 );
query << Modify;

```

#### PostQueryScript

**语法:** obj &lt;&lt; Post Query Script( script_as_text )

**说明:** 设置在每次查询运行后要运行的 JSL 脚本。

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**语法:** obj &lt;&lt; Query Name( &lt;newName&gt; )

**说明:** 获取或设置查询名称。该查询名称将用作运行查询所生成的数据表的名称。

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Query Name( "New Name" );
name = obj << Query Name;
Show( name );

```

#### Run

**语法:** result = obj &lt;&lt; Run( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**说明:** 运行查询。查询可能在前台或后台运行，具体取决于查询生成器首选项。若指定 UpdateTable，则查询将在前台运行。若查询在前台运行，“运行”返回的值将为该查询所生成的数据表。若查询在后台运行或有错误，则“运行”不返回任何值。查询完成后，使用 OnRunComplete、OnRunCanceled 和 OnError 参数运行脚本。

```jsl

Names Default To Here( 1 );
query << Run;

```

#### Run Background

**语法:** result = obj &lt;&lt; Run Background( &lt;OnRunComplete(script), &lt;Private|Invisible&gt;&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**说明:** 在后台运行查询。查询完成后将打开查询生成的数据表。查询完成后，使用 OnRunComplete、OnRunCanceled 和 OnError 参数运行脚本。仅当还指定了 OnRunComplete 脚本时才能指定“私有”。“在后台运行”不返回任何值。

```jsl

Names Default To Here( 1 );

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

**语法:** result = obj &lt;&lt; Run Foreground( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**说明:** 在前台运行查询。若查询成功或被取消但生成了部分结果，“在前台运行”将返回该查询所生成的数据表。若查询失败，“在前台运行”不返回任何值。查询完成后，使用 OnRunComplete、OnRunCanceled 和 OnError 参数运行脚本。

```jsl

Names Default To Here( 1 );

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

**语法:** obj &lt;&lt; Save

**说明:** 将查询保存到其关联文件。若查询尚未关联文件，则保存失败。

```jsl

Names Default To Here( 1 );
obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

#### Save As

**语法:** obj &lt;&lt; Save As( path, &lt;ReplaceExisting(0|1)&gt; )

**说明:** 将查询保存到指定文件。若该文件已存在，则除非“替换现有项”为真，否则保存将失败。

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Save As( "c:\users\public\temp.jmpquery" );

```

