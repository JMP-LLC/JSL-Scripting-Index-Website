# SQL



### As SQL Expr

**構文:** y = As SQL Expr( x, &lt;style&gt; )

**説明:** SQLのSelectステートメントで使用できる形式に式を変換して、文字列で戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**構文:** Close Database Connection(databaseConnectionHandle)

**説明:** Create Database Connectionで戻されたデータベース接続を閉じる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**構文:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**説明:** データベース接続を確立し、接続へのハンドルを戻す。DriverPromptが真の場合、ODBCドライバの確認メッセージが表示され、必要に応じてユーザがログイン情報を入力する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dbc = Create Database Connection(	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;");

```

### Execute SQL

**構文:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**説明:** Create Database Connectionまたはデータコネクタから戻されたデータベース接続に対し、SQLを実行する。Batch Submitを有効にすると、複数のSQLステートメントから複数の結果をリストとして受け取ることができる(サポートしているドライバのみ)。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

dt = Execute SQL(	databaseConnectionHandle,	"SELECT HEIGHT, WEIGHT FROM Bigclass",	"NewTable");

```

**例 2**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**例 3**

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );resultList = Execute SQL(	dc,	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",	Batch Submit( 1 ));

```

### New Data Connector

**構文:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**説明:** データコネクタの構成オブジェクトを作成する。

**JMP追加されたバージョン:** 18

**例 1**

```jsl

// Create a data connector from scratchdc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );Show( dc << Get( Database ) );  // Overridden database value "foo"Show( dc << Get( Driver ) );  // Default driver value . (missing)dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );Show( dc << Get( Database ) );  // New database value "foo2"Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**例 2**

```jsl

// Launch Query Builder from a SQL Server data sourcedc = New Data Connector(	ID( "com.jmp.sql_server" ),     // All these example values need to be replaced with real ones	Server( "database.example.com" ),	Database( "MainDatabase" ),	User( "username" ),	Password( "password" ));New SQL Query( Connection( dc ) ) << Modify;

```

### New SQL Query

**構文:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**説明:** SQLクエリーのオブジェクトを作成する。接続、列、テーブルを指定することによって、もしくは、スクリプトで指定することによって、クエリーを作成できる。クエリーのスクリプトは、クエリービルダーによって生成してください。

**JMP追加されたバージョン:** バージョン14より前

```jsl

obj = New SQL Query(	Connection( "ODBC:DSN=mydsn" ),	Select(),	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ));

```

### Open Database

**構文:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**説明:** ODBCを使ってデータベースを開き、指定されたSQLを実行し、データテーブルにデータを格納する。そのデータテーブルの名前は、output table nameに指定された文字列となる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Open Database(	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",	"SELECT HEIGHT, WEIGHT FROM Bigclass",	"hw");

```

### Query

**構文:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**説明:** JMPデータテーブルに対し、SQLクエリーを実行する。最後の引数であるsqlStatementの部分に、SQLクエリーを必ず指定すること(ほとんどの場合において、SELECTステートメントを指定すること)。 SQLステートメントで参照されるJMPデータテーブルは、Query()の引数で指定する必要がある。必要に応じ、Table(dt, "エイリアス")で、SQLステートメントで参照するテーブル名のエイリアスを定義すること。InvisibleやPrivateによって、結果のデータテーブルを表示するかどうかを制御できる。Scalarを指定すると、SQLステートメントはデータテーブルではなく、1つの値を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );Query( dt, "SELECT name, age, height FROM 'Big Class'         WHERE age > 14; " );		// Using aliases, performing a joindtSAT = Open( "$SAMPLE_DATA/SATByYear.jmp", Invisible );dtUS = Open( "$SAMPLE_DATA/US Demographics.jmp", Invisible );Query(	Table( dtSAT, "t1" ),	Table( dtUS, "t2" ), 	"\[SELECT t1.State, t1."SAT Math", t2."College Degrees",            t2."Eighth Grade Math"       FROM t1       LEFT OUTER JOIN t2           ON t1.State = t2.State       WHERE t1.'SAT Math' > 550;      ]\");		// Query that returns a scalar valueretval = Query( Scalar, dt, "SELECT AVG(height) from 'Big Class';" );// Query with no tablesretval = Query( Scalar, "SELECT SQRT(152399025);" );

```

## 関連するコンストラクター

### New SQL Query

**構文:** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**説明:** SQLクエリーのオブジェクトを作成する。接続、列、テーブルを指定することによって、もしくは、スクリプトで指定することによって、クエリーを作成できる。クエリーのスクリプトは、クエリービルダーによって生成してください。

```jsl

obj = New SQL Query(	Connection( "ODBC:DSN=mydsn" ),	Select(),	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ));

```

## SQL Query

### 項目のメッセージ

#### CustomSQL

**構文:** obj &lt;&lt; Custom SQL( sql )

**説明:** クエリーをカスタムSQLクエリーに変更し、SQLを設定する。

```jsl

obj = New SQL Query(	Connection( "ODBC:DSN=SampleDSN;" ),	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ));obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**構文:** sql = obj &lt;&lt; Generate SQL

**説明:** クエリーのSQLステートメントを生成し、戻す。

```jsl

obj = New SQL Query(	Connection( "ODBC:DSN=SampleDSN;" ),	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ));sql = obj << Generate SQL;

```

#### Modify

**構文:** obj &lt;&lt; Modify

**説明:** クエリーをクエリービルダで開く。

```jsl

query << Modify;

```

#### PostQueryScript

**構文:** obj &lt;&lt; Post Query Script( script_as_text )

**説明:** クエリーが実行された後に必ず実行されるJSLスクリプトを設定する。

```jsl

obj = New SQL Query(	Connection( "ODBC:DSN=SampleDSN;" ),	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ));obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**構文:** obj &lt;&lt; Query Name( &lt;newName&gt; )

**説明:** クエリーの名前を取得または設定する。クエリーの名前は、そのクエリーを実行した結果のデータテーブル名に使用される。

```jsl

obj = New SQL Query(	Connection( "ODBC:DSN=SampleDSN;" ),	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ));obj << Query Name( "New Name" );name = obj << Query Name;Show( name );

```

#### Run

**構文:** result = obj &lt;&lt; Run( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**説明:** クエリーを実行する。クエリービルダー環境設定での設定に応じて、クエリーをフォアグランドまたはバックグランドで実行する。UpdateTableが指定されている場合、クエリーはフォアグランドで実行される。クエリーがフォアグランドで実行された場合、[実行]による戻り値はクエリー結果のデータテーブル。クエリーがバックグランドで実行されるか、エラーがある場合、[実行]は値を戻さない。クエリーの終了時にスクリプトを実行するには、引数OnRunComplete、OnRunCanceled、OnErrorを使用する。

```jsl

query << Run;

```

#### Run Background

**構文:** result = obj &lt;&lt; Run Background( &lt;OnRunComplete(script), &lt;Private|Invisible&gt;&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**説明:** クエリーをバックグラウンドで実行する。クエリーの終了時に、結果のデータテーブルが開く。クエリーの終了時にスクリプトを実行するには、引数OnRunComplete、OnRunCanceled、OnErrorを使用する。OnRunCompleteが指定された場合のみ、Privateも指定できる。[Run Background]は値を戻さない。

```jsl

query << Run Background(	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) ));MyRunCompleteFunc = Function( {dt},	{Default Local},	Write( "Number of rows in query result: ", N Rows( dt ) ));query << Run Background( OnRunComplete( MyRunCompleteFunc ) );

```

#### Run Foreground

**構文:** result = obj &lt;&lt; Run Foreground( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**説明:** クエリーをフォアグラウンドで実行する。クエリーに成功した場合、または結果の一部を生成した後にキャンセルされた場合、結果のデータテーブルを戻す。クエリーに失敗した場合は値を戻さない。クエリーの終了時にスクリプトを実行するには、引数OnRunComplete、OnRunCanceled、OnErrorを使用する。

```jsl

query << Run Foreground(	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) ));MyRunCompleteFunc = Function( {dt},	{Default Local},	Write( "Number of rows in query result: ", N Rows( dt ) ));query << Run Foreground( OnRunComplete( MyRunCompleteFunc ) );

```

#### Save

**構文:** obj &lt;&lt; Save

**説明:** クエリーを、それが関連付けられているファイルに保存する。関連付けられているファイルがまだない場合、保存に失敗する。

```jsl

obj = Open( "my_query.jmpquery" );obj << Query Name( "New Name" );obj << Save;

```

#### Save As

**構文:** obj &lt;&lt; Save As( path, &lt;ReplaceExisting(0|1)&gt; )

**説明:** クエリーを、指定されたファイルに保存する。ファイルがすでに存在している場合、Replace Existingが真でない限り保存に失敗する。

```jsl

obj = New SQL Query(	Connection( "ODBC:DSN=SampleDSN;" ),	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ));obj << Save As( "c:\users\public\temp.jmpquery" );

```

