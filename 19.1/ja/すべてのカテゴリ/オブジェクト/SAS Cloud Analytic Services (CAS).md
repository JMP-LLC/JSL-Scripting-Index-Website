# SAS Cloud Analytic Services (CAS)



## CAS Action

### 項目のメッセージ

#### Action

**構文:** action &lt;&lt; Action(...)

**説明:** CASアクションに対してアクション名を設定する。Actionメッセージには、「アクションセット名.アクション名」の完全修飾でアクション名を指定する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();echo = [=> ];echo["a"] = 1;echo["b"] = JSON Literal( true );echo["c"] = 3.141559;action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );rc = cas << Submit( action );

```

#### Action Set

**構文:** action &lt;&lt; Action Set(...)

**説明:** CASアクションに対してアクションセットを設定する。設定されたアクションセットによってグループ化されているアクションが実行される。CAS Actionメッセージによって、「アクションセット名.アクション名」の完全修飾でアクションを指定できるため、このメッセージは必ずしも使わなくてよい。

**JMP追加されたバージョン:** 15

```jsl

action = New CAS Action();action << Action Set( "builtins" );

```

#### Authorization

**構文:** action &lt;&lt; Authorization(&lt;1|0&gt;)

**説明:** CASアクションの承認(Authorization)が必要かどうかを設定する。CASアクションは通常、Connect、Login、Authorization、Sessionを必要とする。

**JMP追加されたバージョン:** 15

```jsl

code ="\[  data temp;  x = 9.1; y = 6; z = sqrt(x**2 + y**2);  A = "SAS"; B = "Statistics";  put _ALL_;              /* display all variables and values */  run;  ]\";runCode = [=> ];runCode["code"] = code;action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Authorization( 1 ) );

```

#### Connection

**構文:** action &lt;&lt; Connection(&lt;1|0&gt;)

**説明:** CASアクションの接続(Connect)が必要かどうかを設定する。CASアクションは通常、Connect、Login、Authorization、Sessionを要求する。

**JMP追加されたバージョン:** 15

```jsl

code ="\[  data temp;  x = 9.1; y = 6; z = sqrt(x**2 + y**2);  A = "SAS"; B = "Statistics";  put _ALL_;              /* display all variables and values */  run;  ]\";runCode = [=> ];runCode["code"] = code;action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Connection( 1 ) );

```

#### Endpoint

**構文:** action &lt;&lt; Endpoint(...)

**説明:** CASアクションのエンドポイントを設定する。このエンドポイントには、CASサーバーのURLを基準としての相対的なパスを指定する。例えばhttp://cloud.example.com:8777/cas/sessionsの場合、/cas/sessionsがエンドポイントとなる。ほとんどのCASアクションにおいては、Actionメッセージを使用すれば正しいエンドポイントが自動的に選択される。

**JMP追加されたバージョン:** 15

```jsl

action = New CAS Action();action << Endpoint( "/cas/sessions" );

```

#### File

**構文:** action &lt;&lt; File(...)

**説明:** CASのアクションのファイルパラメータを設定する。ファイル名の中で指定されたパス変数は展開される。Fileメッセージが指定された場合、すべてのJSON引数はJSON Parameters引数に自動的に引き渡される。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();args ="\[{	"casout": {		"caslib": "casuser",		"name": "UN Malaria 2012",		"replace":true	},	"importOptions": {		"fileType": "CSV"	}}]\";action = New CAS Action(	Action( "table.upload" ),	File( "$SAMPLE_IMPORT_DATA\UN Malaria 2012.csv" ),	JSON( args ));rc = cas << Submit( action );If( rc,	Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" ));

```

#### Get Changed Resources

**構文:** action &lt;&lt; Get Changed Resources()

**説明:** サブミットされたアクションから、連想配列の形式で、変更されたリソースを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );cas << Export Data( dt, "CASUSER.Animals" );Close( dt, NOSAVE );aa_json = [=> ];aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];aa_json["class"] = {"species", "subject", "season"};aa_json["model"] = ["depVar" => "miles","effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>{"species"}]}]};aa_json["method"] = "REML";action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );cas << Submit( action );Write( "\!Changed Resources: " || Char( action << Get Changed Resources ) || "\!n" );

```

#### Get Disposition

**構文:** action &lt;&lt; Get Disposition()

**説明:** サブミットされたCASアクションから、連想配列の形式で、ディスポジションを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );cas << Export Data( dt, "CASUSER.Animals" );Close( dt, NOSAVE );aa_json = [=> ];aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];aa_json["class"] = {"species", "subject", "season"};aa_json["model"] = ["depVar" => "miles","effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>{"species"}]}]};aa_json["method"] = "REML";action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );cas << Submit( action );Write( "\!Disposition: " || Char( action << Get Disposition ) || "\!n" );

```

#### Get JSON

**構文:** action &lt;&lt; Get JSON()

**説明:** サブミットされたCASアクションから、JSON文字列の形式で、結果を取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();echo = "\[{	"a": 1,	"b": true,	"c": 3.141559}]\";action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );cas << Submit( action );Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" );

```

#### Get Log

**構文:** action &lt;&lt; Get Log()

**説明:** サブミットされたCASアクションのログを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();echo = "\[{	"a": 1,	"b": true,	"c": 3.141559}]\";action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );cas << Submit( action );Write( "\!Log: " || Char( action << Get Log ) || "\!n" );

```

#### Get Log Entries

**構文:** action &lt;&lt; Get Log Entries()

**説明:** エントリごとのリストの形式で、サブミットされたCASアクションのログを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();echo = "\[{	"a": 1,	"b": true,	"c": 3.141559}]\";action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );cas << Submit( action );Write( "\!Log Entries: " || Char( action << Get Log Entries ) || "\!n" );

```

#### Get Metrics

**構文:** action &lt;&lt; Get Metrics

**説明:** サブミットされたアクションから、連想配列の形式で、メトリックを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );cas << Export Data( dt, "CASUSER.Animals" );Close( dt, NOSAVE );aa_json = [=> ];aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];aa_json["class"] = {"species", "subject", "season"};aa_json["model"] = ["depVar" => "miles","effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>{"species"}]}]};aa_json["method"] = "REML";action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );cas << Submit( action );Write( "\!Get Metrics: " || Char( action << Get Metrics ) || "\!n" );

```

#### Get Results

**構文:** action &lt;&lt; Get Results()

**説明:** サブミットされたCASアクションから、連想配列の形式で、結果を取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );cas << Export Data( dt, "CASUSER.Animals" );Close( dt, NOSAVE );aa_json = [=> ];aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];aa_json["class"] = {"species", "subject", "season"};aa_json["model"] = ["depVar" => "miles","effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>{"species"}]}]};aa_json["method"] = "REML";action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );cas << Submit( action );Write( "\!Results: " || Char( action << Get Results ) || "\!n" );

```

#### JSON

**構文:** action &lt;&lt; JSON(...)

**説明:** CASアクションに対してJSON引数を設定する。このJSON引数には、文字列またはJSL連想配列を指定することができる。JSON引数は、1つのCASアクションごとに定義される。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();echo = "\[{	"a": 1,	"b": true,	"c": 3.141559}]\";action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );rc = cas << Submit( action );

```

#### JSON Parameters

**構文:** action &lt;&lt; JSON Parameters(...)

**説明:** CASアクションのJSONパラメータ引数を設定する。table.uploadのようなCASアクションは、ファイルとJSONパラメータの指定を必要とする。CASアクションは、Fileメッセージが指定されると自動的にJSONの引数をJSON Parameters引数に移す。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();args ="\[{	"casout": {		"caslib": "casuser",		"name": "UN Malaria 2012",		"replace":true	},	"importOptions": {		"fileType": "CSV"	}}]\";action = New CAS Action(	Action( "table.upload" ),	File( "$SAMPLE_IMPORT_DATA\UN Malaria 2012.csv" ),	JSON Parameters( args ));rc = cas << Submit( action );If( rc,	Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" ));

```

#### Login

**構文:** action &lt;&lt; Login(&lt;1|0&gt;s))

**説明:** CASアクションのログインが必要かどうかを設定する。CASアクションは通常、Connect、Login、Authorization、Sessionを必要とする。

**JMP追加されたバージョン:** 15

```jsl

code ="\[  data temp;  x = 9.1; y = 6; z = sqrt(x**2 + y**2);  A = "SAS"; B = "Statistics";  put _ALL_;              /* display all variables and values */  run;  ]\";runCode = [=> ];runCode["code"] = code;action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Login( 1 ) );

```

#### Make Report

**構文:** action &lt;&lt; Make Report

**説明:** サブミットされたCASアクションからレポートを生成する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[data temp;x = 9.1; y = 6; z = sqrt(x**2 + y**2);A = "SAS"; B = "Statistics";put _ALL_;              /* display all variables and values */run;]\";runCode = [=> ];runCode["code"] = code;action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ) );cas << Submit( action );action << Make Report();

```

#### Method

**構文:** action &lt;&lt; Method(&lt;"PUT" | "POST" | "GET" | "PATCH"| "HEAD"&gt;)

**説明:** CASアクションのHTTPメソッドを設定する。HTTPメソッドには、"PUT"、"POST"、"GET"、"PATCH"、"HEAD"がある。ほとんどのCASアクションにおいては、正しいHTTPメソッドが自動的に選択される。

**JMP追加されたバージョン:** 15

```jsl

action = New CAS Action();action << Method( "PUT" );

```

#### Session

**構文:** action &lt;&lt; Session(&lt;1|0&gt;)

**説明:** CASアクションのセッション(Session)が必要かどうかを設定する。CASアクションは通常、Connect、Login、Authorization、Sessionを必要とする。

**JMP追加されたバージョン:** 15

```jsl

code ="\[  data temp;  x = 9.1; y = 6; z = sqrt(x**2 + y**2);  A = "SAS"; B = "Statistics";  put _ALL_;              /* display all variables and values */  run;  ]\";runCode = [=> ];runCode["code"] = code;action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Session( 1 ) );

```

#### Timeout

**構文:** action &lt;&lt; Timeout(120)

**説明:** CASアクションに新しいタイムアウト値を設定する。

**JMP追加されたバージョン:** 17

```jsl

cas = Current CAS Connection();code ="\[data temp;x = 9.1; y = 6; z = sqrt(x**2 + y**2);A = "SAS"; B = "Statistics";put _ALL_;              /* display all variables and values */run;]\";runCode = [=> ];runCode["code"] = code;action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ) );action << Timeout( 120 );cas << Submit( action );action << Make Report();

```

## CAS DATA Step Action

### 項目のメッセージ

#### Code

**構文:** action &lt;&lt; Code(...)

**説明:** 実行するDATAステップを指定する。CASサーバーはSAS DATAステップの一部を実行できる。具体的な機能制限については、SASのドキュメントを参照のこと。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );

```

#### File

**構文:** action &lt;&lt; File(...)

**説明:** 実行するDATAステップを指定する。すべてのパス変数は展開される。CASサーバーは、SASのDATAステップの一部を実行できる。具体的な機能制限については、SASのドキュメントを参照のこと。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";filename = "$TEMP/Cas DataStep Action.sas";file = Save Text File( filename, code, "replace" );action = New CAS DATA Step action( File( filename ) );cas << Submit( action );

```

#### Get Changed Resources

**構文:** action &lt;&lt; Get Changed Resources

**説明:** 実行されたアクションにより変更されたリソースのリストを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );Write( "\!Get Changed Resources: " || Char( action << Get Changed Resources ) || "\!n" );

```

#### Get Disposition

**構文:** action &lt;&lt; Get Disposition

**説明:** サブミットされたアクションから、連想配列の形式で、ディスポジションを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );Write( "\!Get Disposition: " || Char( action << Get Disposition ) || "\!n" );

```

#### Get JSON

**構文:** action &lt;&lt; Get JSON

**説明:** サブミットされたCASアクションから、JSON文字列の形式で、結果を取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" );

```

#### Get Log

**構文:** action &lt;&lt; Get Log

**説明:** サブミットされたCASアクションのログを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );Write( "\!nLog: " || Char( action << Get Log ) || "\!n" );

```

#### Get Log Entries

**構文:** action &lt;&lt; Get Log Entries

**説明:** エントリごとのリストの形式で、サブミットされたCASアクションのログを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );Write( "\!Get Log Entries: " || Char( action << Get Log Entries ) || "\!n" );

```

#### Get Metrics

**構文:** action &lt;&lt; Get Metrics

**説明:** サブミットされたアクションから、連想配列の形式で、メトリックを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );Write( "\!Get Metrics: " || Char( action << Get Metrics ) || "\!n" );

```

#### Get Output Data Sets

**構文:** action &lt;&lt; Get Output Data Sets()

**説明:** 実行されたアクションによる出力データセットのリスト(「ライブラリ名.テーブル名」)を取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );output_ds = action << Get Output Data Sets;Show( output_ds );

```

#### Get Results

**構文:** action &lt;&lt; Get Results

**説明:** サブミットされたアクションから、連想配列の形式で、結果を取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );Write( "\!Get Results: " || Char( action << Get Results ) || "\!n" );

```

#### Has Output Data Sets

**構文:** action &lt;&lt; Has Output Data Sets

**説明:** CASのDATAステップアクションが出力データを生成した場合は1を戻す。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[	data temp;	x = 9.1; y = 6; z = sqrt(x**2 + y**2);	A = "SAS"; B = "Statistics";	put _ALL_;              /* display all variables and values */	run;]\";action = New CAS DATA Step action( Code( code ) );cas << Submit( action );has_output = action << Has Output Data Sets;Show( has_output );

```

#### NThreads

**構文:** action &lt;&lt; NThreads(&lt;integer|"MAX"&gt;)

**説明:** プログラムの実行に使用するスレッドの数を指定する。分散型サーバーの場合は、プログラムを実行するそれぞれのワーカーでのスレッド数となる。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[ data temp; x = 9.1; y = 6; z = sqrt(x**2 + y**2); A = "SAS"; B = "Statistics"; put _ALL_;              /* display all variables and values */ run; ]\";	 action = New CAS DATA Step action( Code( code ), NThreads( 2 ) );cas << Submit( action );

```

#### Single

**構文:** action &lt;&lt; Single(&lt;NO|NOINPUT|YES&gt;)

**説明:** 実行をシングルスレッドに制限する。"NO"は、nThreadsパラメータで指定した数のスレッドでプログラムを実行することを意味する。"NOINPUT"を指定すると、入力データセットがない場合はプログラムを1つのスレッドで実行する。入力データセットがある場合は、nTreadsパラメータで指定した数のスレッドを使用する。分散型サーバーで入力データセットがない場合は、1つのワーカーで1つのスレッドを使用する。そうでない場合は、nThreadsパラメータで指定した数のスレッドを使用する。"YES"は、nThreadsパラメータより優先され、プログラムを1つのスレッドで実行する。分散型サーバーでは、1つのワーカーで1つのスレッドを使用する。デフォルトは"NO"。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();code ="\[data temp;x = 9.1; y = 6; z = sqrt(x**2 + y**2);A = "SAS"; B = "Statistics";put _ALL_;              /* display all variables and values */run;]\";action = New CAS DATA Step action( Code( code ), Single( "YES" ) );cas << Submit( action );

```

## CAS

### 項目のメッセージ

#### Connect

**構文:** cas &lt;&lt; Connect(&lt;URL(..)&gt;,&lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Always | Never | IfNeeded&gt;), &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates("my_certificates.crt")&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("BASIC" | "BEARER")&gt;)

**説明:** 新しいCASサーバーに接続する。CAS Connectには、URL、User name、Passwordの引数、およびオプションで PromptとSessionの引数を指定できる。Prompt引数には、IfNeeded、Always、Neverのいずれかを指定する。Prompt引数がIfNeededまたはAlwaysの場合、URL、User name、Passwordは省略できる。Promptのデフォルト値はNever。Sessionは、既存のCASセッションへの再接続に使用できる。セッションは、接続に使用されているURL、ユーザ名、パスワードで使用可能なものでなければならない。オプションのCertificates引数は、CASへのHTTPS接続の際に信頼された証明書を提供するのに使用できる。オプションのVerify Certificates引数またはNo Verify Certificates引数は、自己署名証明書を一時的に受け入れるのに使用できる。オプションのProxy Server引数は、プロキシ環境でプロキシホストを指定するのに使用できる。オプションのProxy User引数は、プロキシ環境のためのユーザ名とパスワード情報を指定するのに使用できる。オプションのBypass Proxy引数は、特定のホストについてプロキシをバイパスする場合に使用する。オプションのTimeout引数は、CAS接続処理のタイムアウト値を設定する。オプションのAuthorization Method引数は、JMPからCASへの接続方法を指定する。これは、CASのデプロイメントによって異なる。

**JMP追加されたバージョン:** 15

```jsl

cas = New CAS Server();url = "http://myCasURL";cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );session_id = cas << Get Session;cas << Disconnect( NoTerminate ); //disconnect CAS without terminatingcas = CAS Connect(	URL( url ),	Username( "my_username" ),	Prompt( "IfNeeded" ),	Session( session_id )); //reconnect to the session

```

#### Delete Table

**構文:** cas &lt;&lt; Delete Table(tablename, &lt;Quiet(0|1), reMACs(0|1), Remove(0|1)&gt;)

**説明:** このアクションはファイルシステムのテーブルを削除する。メモリ上のテーブルには影響しない。Quietを指定すると、存在しないテーブルについてのエラーは表示されない。remACsを指定すると、テーブルのアクセス制御が削除される。Removeを指定すると、テーブルがメモリから削除される。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );cas << Delete Table( "Casuser", "Big Class" );

```

#### Disconnect

**構文:** cas &lt;&lt; Disconnect(&lt;Terminate | NoTerminate&gt;)

**説明:** CASサーバーへの接続を切断する。オプションでセッションを終了するかどうかも指定できる。デフォルトでは、接続の切断と共にセッションが終了する。

**JMP追加されたバージョン:** 15

```jsl

cas = New CAS Server();url = "http://myCasURL";cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

#### Export Data

**構文:** cas &lt;&lt; Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**説明:** CASサーバーにテーブルを書き出す。jmp_data_tableは書き出すJMPデータテーブル、cas_librefおよびcas_datasetはCASサーバー上にある書き出し先の場所。オプションとして、名前付き引数のSave(1|0)がある。Saveオプションが指定されない限り、CASのファイルシステムまでは書き込まれない。多くのCASアクションはインメモリで行われる。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

#### Get Data Sets

**構文:** cas &lt;&lt; Get Data Sets(&lt;"caslib"&gt;)

**説明:** 利用可能なCASデータセットのリストを取得する。これらのデータセットはCASファイルシステム上にある。オプションの引数により、指定したライブラリのCASデータセットのみのリストも取得できる。引数を指定しない場合、データセットのリストは「ライブラリ名.データセット名」の完全修飾の形式で戻される。引数が指定されると、データセット名のみのリストとなる。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );datasets = cas << Get Data Sets( "casuser" );Show( datasets );cas << Delete Table( "Casuser", "Big Class" );datasets = cas << Get Data Sets( "casuser" );Show( datasets );

```

#### Get Libraries

**構文:** cas &lt;&lt; Get Libraries()

**説明:** リストの形式で、現在、使用できるCASライブラリを取得する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();libraries = cas << Get Libraries();Show( libraries );

```

#### Get Session

**構文:** cas &lt;&lt; Get Session()

**説明:** 該当のCASサーバーからセッションIDを取得する。このメッセージを使うと、該当のCASセッションが利用可能である限り、再接続することができる。

**JMP追加されたバージョン:** 15

```jsl

url = "http://myCasURL";cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );session_id = cas << Get Session;cas << Disconnect( NoTerminate ); //disconnect CAS without terminatingcas = CAS Connect(	URL( url ),	Username( "my_username" ),	Prompt( "IfNeeded" ),	Session( session_id )); //reconnect to the session

```

#### Get Sessions

**構文:** cas &lt;&lt; Get Sessions()

**説明:** 現在のユーザが利用できるセッションを取得する。

**JMP追加されたバージョン:** 15

```jsl

url = "http://myCasURL";cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );session_ids = cas << Get Sessions();Show( session_ids );

```

#### Import Data

**構文:** cas &lt;&lt; Import Data(libref, dataset, &lt;named_arguments&gt;)

**説明:** CASサーバーからテーブルを読み込む。オプションの名前付きの引数として、Invisible(0|1)、Private(0|1)、UseLabelsForVarNames(0|1)がある。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );cas << Import Data( "Casuser.Big Class" );

```

#### Is Connected

**構文:** cas &lt;&lt; Is Connected()

**説明:** CASサーバーへのアクティブな接続がある場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();connected = cas << Is Connected();Show( connected );

```

#### Remove Table

**構文:** cas &lt;&lt; Remove Table(tablename, &lt;Quiet(0|1), reMACs(0|1), Delete(0|1)&gt;)

**説明:** インメモリ上のテーブルを削除する。Saveアクションによりファイルに保存されているテーブルは削除されない。ファイルに保存されているテーブルは、Delete Tableにより削除される。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );cas << Remove Table( "Casuser", "Big Class" );

```

#### Submit

**構文:** cas &lt;&lt; Submit(action)

**説明:** CASアクションをCASサーバーにサブミットする。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();echo = [=> ];echo["a"] = 1;echo["b"] = JSON Literal( true );echo["c"] = 3.141559;action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );cas = Current CAS Connection();rc = cas << Submit( action );

```

#### Terminate

**構文:** cas &lt;&lt; Terminate(sessionId))

**説明:** 現在のユーザのCASセッションを終了する。接続しているセッションは終了できない。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();session_id = cas << Get Session();cas << Disconnect( NoTerminate );cas = CAS Connect( Prompt( IfNeeded ) );cas << Terminate( session_id );

```

#### Terminate Sessions

**構文:** cas &lt;&lt; Terminate Sessions()

**説明:** 現在のユーザによって実行されているCASセッションをすべて終了する。

**JMP追加されたバージョン:** 15

```jsl

cas = Current CAS Connection();cas << Terminate Sessions();

```

