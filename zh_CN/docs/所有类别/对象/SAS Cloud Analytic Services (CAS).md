# SAS Cloud Analytic Services (CAS)



## CAS Action

### 项消息

#### Action

**语法:** action &lt;&lt; Action(...)

**说明:** 设置 CAS 操作的操作名称。Action 消息可以接受完全限定的 actionset.action 指定。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
rc = cas << Submit( action );

```

#### Action Set

**语法:** action &lt;&lt; Action Set(...)

**说明:** 设置 CAS 操作的操作集。CAS 操作按操作集分组。这是可选的，因为 CAS Action 消息可以接受完全限定的 actionset.action 指定。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Action Set( "builtins" );

```

#### Authorization

**语法:** action &lt;&lt; Authorization(&lt;1|0&gt;)

**说明:** 设置 CAS 操作的授权要求。CAS 操作自动要求连接、登录、授权和会话。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

code =
"\[
  data temp;
  x = 9.1; y = 6; z = sqrt(x**2 + y**2);
  A = "SAS"; B = "Statistics";
  put _ALL_;              /* display all variables and values */
  run;
  ]\";
runCode = [=> ];
runCode["code"] = code;
action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Authorization( 1 ) );

```

#### Connection

**语法:** action &lt;&lt; Connection(&lt;1|0&gt;)

**说明:** 设置 CAS 操作的连接要求。CAS 操作自动要求连接、登录、授权和会话。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

code =
"\[
  data temp;
  x = 9.1; y = 6; z = sqrt(x**2 + y**2);
  A = "SAS"; B = "Statistics";
  put _ALL_;              /* display all variables and values */
  run;
  ]\";
runCode = [=> ];
runCode["code"] = code;
action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Connection( 1 ) );

```

#### Endpoint

**语法:** action &lt;&lt; Endpoint(...)

**说明:** 设置 CAS 操作的端点。端点是相对于基本 CAS 服务器 URL 的资源。对于 http://cloud.example.com:8777/cas/sessions，/cas/sessions 是端点。对于大多数 CAS 操作，使用 Action 消息，这样将自动选择正确的端点。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Endpoint( "/cas/sessions" );

```

#### File

**语法:** action &lt;&lt; File(...)

**说明:** 设置 CAS 操作的文件参数。会展开文件名中的任何路径变量。若使用了 File 消息，CAS 操作会自动将任何 JSON 参数移至 JSON Parameters 参数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
args =
"\[
{
	"casout": {
		"caslib": "casuser",
		"name": "UN Malaria 2012",
		"replace":true
	},
	"importOptions": {
		"fileType": "CSV"
	}
}
]\";

action = New CAS Action(
	Action( "table.upload" ),
	File( "$SAMPLE_IMPORT_DATA\UN Malaria 2012.csv" ),
	JSON( args )
);
rc = cas << Submit( action );
If( rc,
	Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" )
);

```

#### Get Changed Resources

**语法:** action &lt;&lt; Get Changed Resources()

**说明:** 从提交的操作获取更改的资源作为关联数组。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>
JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>
{"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Changed Resources: " || Char( action << Get Changed Resources ) || "\!n" );

```

#### Get Disposition

**语法:** action &lt;&lt; Get Disposition()

**说明:** 从提交的操作获取处置作为关联数组。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>
JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>
{"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Disposition: " || Char( action << Get Disposition ) || "\!n" );

```

#### Get JSON

**语法:** action &lt;&lt; Get JSON()

**说明:** 从提交的 CAS 操作获取返回值作为 JSON 字符串。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
echo = "\[
{
	"a": 1,
	"b": true,
	"c": 3.141559
}
]\";
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
cas << Submit( action );
Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" );

```

#### Get Log

**语法:** action &lt;&lt; Get Log()

**说明:** 从提交的 CAS 操作获取日志。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
echo = "\[
{
	"a": 1,
	"b": true,
	"c": 3.141559
}
]\";
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
cas << Submit( action );
Write( "\!Log: " || Char( action << Get Log ) || "\!n" );

```

#### Get Log Entries

**语法:** action &lt;&lt; Get Log Entries()

**说明:** 从提交的 CAS 操作获取日志作为日志条目的列表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
echo = "\[
{
	"a": 1,
	"b": true,
	"c": 3.141559
}
]\";
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
cas << Submit( action );
Write( "\!Log Entries: " || Char( action << Get Log Entries ) || "\!n" );

```

#### Get Metrics

**语法:** action &lt;&lt; Get Metrics

**说明:** 从提交的操作获取量度作为关联数组。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>
JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>
{"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Get Metrics: " || Char( action << Get Metrics ) || "\!n" );

```

#### Get Results

**语法:** action &lt;&lt; Get Results()

**说明:** 从提交的操作获取结果作为关联数组。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" =>
JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" =>
{"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Results: " || Char( action << Get Results ) || "\!n" );

```

#### JSON

**语法:** action &lt;&lt; JSON(...)

**说明:** 设置 CAS 操作的 JSON 参数。CAS 操作将取 JSON 字符串或 JSL 关联数组作为参数。会为每个 SAS CAS 操作记录 JSON 参数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
echo = "\[
{
	"a": 1,
	"b": true,
	"c": 3.141559
}
]\";
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
rc = cas << Submit( action );

```

#### JSON Parameters

**语法:** action &lt;&lt; JSON Parameters(...)

**说明:** 设置 CAS 操作的 JSON parameter 参数。CAS 操作（例如 table.upload）将文件与 JSON parameter 一起使用以将表移至 CAS。若使用了 File 消息，CAS 操作会自动将任何 JSON 参数移至 JSON Parameter 参数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
args =
"\[
{
	"casout": {
		"caslib": "casuser",
		"name": "UN Malaria 2012",
		"replace":true
	},
	"importOptions": {
		"fileType": "CSV"
	}
}
]\";

action = New CAS Action(
	Action( "table.upload" ),
	File( "$SAMPLE_IMPORT_DATA\UN Malaria 2012.csv" ),
	JSON Parameters( args )
);
rc = cas << Submit( action );
If( rc,
	Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" )
);

```

#### Login

**语法:** action &lt;&lt; Login(&lt;1|0&gt;s))

**说明:** 设置 CAS 操作的登录要求。CAS 操作自动要求连接、登录、授权和会话。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

code =
"\[
  data temp;
  x = 9.1; y = 6; z = sqrt(x**2 + y**2);
  A = "SAS"; B = "Statistics";
  put _ALL_;              /* display all variables and values */
  run;
  ]\";
runCode = [=> ];
runCode["code"] = code;
action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Login( 1 ) );

```

#### Make Report

**语法:** action &lt;&lt; Make Report

**说明:** 从提交的 CAS 操作生成报表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
data temp;
x = 9.1; y = 6; z = sqrt(x**2 + y**2);
A = "SAS"; B = "Statistics";
put _ALL_;              /* display all variables and values */
run;
]\";
runCode = [=> ];
runCode["code"] = code;
action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ) );
cas << Submit( action );
action << Make Report();

```

#### Method

**语法:** action &lt;&lt; Method(&lt;"PUT" | "POST" | "GET" | "PATCH"| "HEAD"&gt;)

**说明:** 设置 CAS 操作的 HTTP 方法。HTTP 方法包括“PUT”、“POST”、“GET”、“PATCH”、“HEAD”。对于大多数 CAS 操作，将自动选择正确的 HTTP 方法。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Method( "PUT" );

```

#### Session

**语法:** action &lt;&lt; Session(&lt;1|0&gt;)

**说明:** 设置 CAS 操作的会话要求。CAS 操作自动要求连接、登录、授权和会话。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

code =
"\[
  data temp;
  x = 9.1; y = 6; z = sqrt(x**2 + y**2);
  A = "SAS"; B = "Statistics";
  put _ALL_;              /* display all variables and values */
  run;
  ]\";
runCode = [=> ];
runCode["code"] = code;
action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ), Session( 1 ) );

```

#### Timeout

**语法:** action &lt;&lt; Timeout(120)

**说明:** 在 CAS 操作中设置新的超时值。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
data temp;
x = 9.1; y = 6; z = sqrt(x**2 + y**2);
A = "SAS"; B = "Statistics";
put _ALL_;              /* display all variables and values */
run;
]\";
runCode = [=> ];
runCode["code"] = code;
action = New CAS Action( Action( "dataStep.runCode" ), JSON( runCode ) );
action << Timeout( 120 );
cas << Submit( action );
action << Make Report();

```

## CAS DATA Step Action

### 项消息

#### Code

**语法:** action &lt;&lt; Code(...)

**说明:** 设置要运行的 DATA 步代码。CAS 服务器可以运行 SAS DATA 步代码的子集。请参见 SAS 文档获取特定限制。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );

```

#### File

**语法:** action &lt;&lt; File(...)

**说明:** 设置要运行的 DATA 步代码。会展开所有路径变量。CAS 服务器可以运行 SAS DATA 步代码的子集。请参见 SAS 文档获取特定限制。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

filename = "$TEMP/Cas DataStep Action.sas";
file = Save Text File( filename, code, "replace" );
action = New CAS DATA Step action( File( filename ) );
cas << Submit( action );

```

#### Get Changed Resources

**语法:** action &lt;&lt; Get Changed Resources

**说明:** 从提交的操作获取更改的资源作为列表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
Write( "\!Get Changed Resources: " || Char( action << Get Changed Resources ) || "\!n" );

```

#### Get Disposition

**语法:** action &lt;&lt; Get Disposition

**说明:** 从提交的操作获取处置作为关联数组。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
Write( "\!Get Disposition: " || Char( action << Get Disposition ) || "\!n" );

```

#### Get JSON

**语法:** action &lt;&lt; Get JSON

**说明:** 从提交的 CAS 操作获取返回值作为 JSON 字符串。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
Write( "\!nJSON: " || Char( action << Get JSON ) || "\!n" );

```

#### Get Log

**语法:** action &lt;&lt; Get Log

**说明:** 从提交的 CAS 操作获取日志。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
Write( "\!nLog: " || Char( action << Get Log ) || "\!n" );

```

#### Get Log Entries

**语法:** action &lt;&lt; Get Log Entries

**说明:** 从提交的 CAS 操作获取日志作为日志条目的列表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
Write( "\!Get Log Entries: " || Char( action << Get Log Entries ) || "\!n" );

```

#### Get Metrics

**语法:** action &lt;&lt; Get Metrics

**说明:** 从提交的操作获取量度作为关联数组。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
Write( "\!Get Metrics: " || Char( action << Get Metrics ) || "\!n" );

```

#### Get Output Data Sets

**语法:** action &lt;&lt; Get Output Data Sets()

**说明:** 获取提交的操作生成的输出数据集 (libray.tablename) 列表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
output_ds = action << Get Output Data Sets;
Show( output_ds );

```

#### Get Results

**语法:** action &lt;&lt; Get Results

**说明:** 从提交的操作获取结果作为关联数组。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
Write( "\!Get Results: " || Char( action << Get Results ) || "\!n" );

```

#### Has Output Data Sets

**语法:** action &lt;&lt; Has Output Data Sets

**说明:** 若 CAS DATA 步操作生成了输出数据，则返回 1。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
	data temp;
	x = 9.1; y = 6; z = sqrt(x**2 + y**2);
	A = "SAS"; B = "Statistics";
	put _ALL_;              /* display all variables and values */
	run;
]\";

action = New CAS DATA Step action( Code( code ) );
cas << Submit( action );
has_output = action << Has Output Data Sets;
Show( has_output );

```

#### NThreads

**语法:** action &lt;&lt; NThreads(&lt;integer|"MAX"&gt;)

**说明:** 指定用于运行程序的线程数。对于分布式服务器，该值指定每个工作节点中用于运行程序的线程数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
 data temp;
 x = 9.1; y = 6; z = sqrt(x**2 + y**2);
 A = "SAS"; B = "Statistics";
 put _ALL_;              /* display all variables and values */
 run;
 ]\";
	 
action = New CAS DATA Step action( Code( code ), NThreads( 2 ) );
cas << Submit( action );

```

#### Single

**语法:** action &lt;&lt; Single(&lt;NO|NOINPUT|YES&gt;)

**说明:** 指定何时将执行限制为单个线程。“NO”指定以 nThreads 参数指定的线程数运行程序。当没有输入数据集时，“NOINPUT”指定以一个线程运行程序。当有输入数据集时，nThreads 参数指定要使用的线程数。对于分布式服务器，若程序没有输入数据集，则程序以一个工作节点的一个线程运行。否则，nThreads 参数指定要使用的线程数。“YES”指定覆盖 nThreads 参数并以一个线程运行程序。对于分布式服务器，程序以一个工作节点的一个线程运行。默认值为“NO”

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
code =
"\[
data temp;
x = 9.1; y = 6; z = sqrt(x**2 + y**2);
A = "SAS"; B = "Statistics";
put _ALL_;              /* display all variables and values */
run;
]\";

action = New CAS DATA Step action( Code( code ), Single( "YES" ) );
cas << Submit( action );

```

## CAS

### 项消息

#### Connect

**语法:** cas &lt;&lt; Connect(&lt;URL(..)&gt;,&lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Always | Never | IfNeeded&gt;), &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates("my_certificates.crt")&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("BASIC" | "BEARER")&gt;)

**说明:** 连接至新的 CAS 服务器。CAS 连接使用 URL、User name、Password 参数以及可选参数 Prompt 和 Session。Prompt 可以为 IfNeeded、Always 或 Never。若 Prompt 参数为 IfNeeded 或 Always，则可以忽略 URL、user name 和 password。Prompt 的默认值为 Never。Session 可用于重新连接至现有的 CAS 会话。会话必须对连接中使用的 URL、user name 和 password 有效。可选 Certificates 参数用于为与 CAS 的 https 连接提供受信任的证书 。可选的 Verify Certificates 或 No Verify Certificates 参数用于临时接受自签名证书。可选的 Proxy Server 参数用于在代理环境中提供代理主机。可选的 Proxy User 参数用于提供代理环境的用户和密码信息。可选的 Bypass Proxy 参数用于绕过某些主机的代理。可选 Timeout 参数可设置 CAS 连接操作的超时值。可选 Authorization Method 参数指定 JMP 如何与 CAS 连接。这取决于 CAS 部署。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_id = cas << Get Session;
cas << Disconnect( NoTerminate ); //disconnect CAS without terminating
cas = CAS Connect(
	URL( url ),
	Username( "my_username" ),
	Prompt( "IfNeeded" ),
	Session( session_id )
); //reconnect to the session

```

#### Delete Table

**语法:** cas &lt;&lt; Delete Table(tablename, &lt;Quiet(0|1), reMACs(0|1), Remove(0|1)&gt;)

**说明:** 该操作删除文件系统表。in memory 表不受影响。指定“静音”将隐藏不存在的表的错误。指定 remACs 将删除表的访问控制。指定“删除”还将从内存中删除表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
cas << Delete Table( "Casuser", "Big Class" );

```

#### Disconnect

**语法:** cas &lt;&lt; Disconnect(&lt;Terminate | NoTerminate&gt;)

**说明:** 与 CAS 服务器断开连接并且可以选择终止会话。默认情况下，断开连接时会终止会话。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

#### Export Data

**语法:** cas &lt;&lt; Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**说明:** 将表导出至 CAS 服务器。jmp_data_table 是要导出的 JMP 数据表，而 cas_libref 和 cas_dataset 是 CAS 服务器上的目标位置。可选的命名参数为 Save(1|0)。当表导出至 CAS 时，它不会保留到 CAS 文件系统，除非使用了“保存”选项。大多数 CAS 操作在内存中执行。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

#### Get Data Sets

**语法:** cas &lt;&lt; Get Data Sets(&lt;"caslib"&gt;)

**说明:** 获取可用的 CAS 数据集列表。这些数据集位于 CAS 文件系统中。可选参数将数据集列表限制为 CAS 逻辑库。若没有使用参数，则数据集列表包含完全限定的数据集名称 (library.dataset)。若使用了参数，则数据集列表是数据集名称的列表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );

```

#### Get Libraries

**语法:** cas &lt;&lt; Get Libraries()

**说明:** 获取可用 CAS 逻辑库的列表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
libraries = cas << Get Libraries();
Show( libraries );

```

#### Get Session

**语法:** cas &lt;&lt; Get Session()

**说明:** 从 CAS 服务器获取会话 ID。这可用于后续的重新连接，只要 CAS 会话保持可用即可。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_id = cas << Get Session;
cas << Disconnect( NoTerminate ); //disconnect CAS without terminating
cas = CAS Connect(
	URL( url ),
	Username( "my_username" ),
	Prompt( "IfNeeded" ),
	Session( session_id )
); //reconnect to the session

```

#### Get Sessions

**语法:** cas &lt;&lt; Get Sessions()

**说明:** 获取当前用户的可用会话。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_ids = cas << Get Sessions();
Show( session_ids );

```

#### Import Data

**语法:** cas &lt;&lt; Import Data(libref, dataset, &lt;named_arguments&gt;)

**说明:** 从 CAS 服务器导入表。可选的命名参数为 Invisible(0|1)、Private(0|1) 和 UseLabelsForVarNames(0|1)。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Import Data( "Casuser.Big Class" );

```

#### Is Connected

**语法:** cas &lt;&lt; Is Connected()

**说明:** 若存在活动的 CAS 服务器连接，则返回 1。否则返回 0。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
connected = cas << Is Connected();
Show( connected );

```

#### Remove Table

**语法:** cas &lt;&lt; Remove Table(tablename, &lt;Quiet(0|1), reMACs(0|1), Delete(0|1)&gt;)

**说明:** 该操作会删除 in-memory 表。使用保存操作创建的表不受影响。指定删除也将从文件系统中删除表。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Remove Table( "Casuser", "Big Class" );

```

#### Submit

**语法:** cas &lt;&lt; Submit(action)

**说明:** 将 CAS 操作提交至 CAS 服务器。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
cas = Current CAS Connection();
rc = cas << Submit( action );

```

#### Terminate

**语法:** cas &lt;&lt; Terminate(sessionId))

**说明:** 终止当前用户拥有的 CAS 会话。用户不能终止连接上的会话 ID

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
session_id = cas << Get Session();
cas << Disconnect( NoTerminate );
cas = CAS Connect( Prompt( IfNeeded ) );
cas << Terminate( session_id );

```

#### Terminate Sessions

**语法:** cas &lt;&lt; Terminate Sessions()

**说明:** 终止当前用户拥有的全部 CAS 会话。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Terminate Sessions();

```

