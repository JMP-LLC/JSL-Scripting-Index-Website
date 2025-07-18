# SAS Cloud Analytic Services (CAS)



## CAS Action

### 항목 메시지

#### Action

**구문:** action &lt;&lt; Action(...)

**설명:** CAS 작업의 작업 이름을 설정합니다. Action 메시지에는 정규화된 actionset.action을 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
rc = cas << Submit( action );

```

#### Action Set

**구문:** action &lt;&lt; Action Set(...)

**설명:** CAS 작업을 위한 작업 집합을 설정합니다. CAS 작업은 작업 집합별로 그룹화됩니다. CAS Action 메시지에는 정규화된 actionset.action을 지정할 수 있으므로 이 기능은 선택적입니다.

**JMP추가된 버전:** 15

```jsl


action = New CAS Action();
action << Action Set( "builtins" );

```

#### Authorization

**구문:** action &lt;&lt; Authorization(&lt;1|0&gt;)

**설명:** CAS 작업을 위한 권한 부여 요구 사항을 설정합니다. CAS 작업에서는 연결, 로그인, 권한 부여 및 세션을 자동으로 요구합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Connection(&lt;1|0&gt;)

**설명:** CAS 작업을 위한 연결 요구 사항을 설정합니다. CAS 작업에서는 연결, 로그인, 권한 부여 및 세션을 자동으로 요구합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Endpoint(...)

**설명:** CAS 작업의 끝점을 설정합니다. 끝점은 기준 CAS 서버 URL에 상대적인 리소스입니다. http://cloud.example.com:8777/cas/sessions의 경우에는 /cas/sessions가 끝점입니다. 대부분의 CAS 작업에는 올바른 끝점이 자동으로 선택되는 Action 메시지가 사용됩니다.

**JMP추가된 버전:** 15

```jsl


action = New CAS Action();
action << Endpoint( "/cas/sessions" );

```

#### File

**구문:** action &lt;&lt; File(...)

**설명:** CAS 작업을 위한 파일 파라미터를 설정합니다. 파일 이름의 모든 경로 변수가 확장됩니다. File 메시지가 사용된 경우 CAS 작업은 자동으로 JSON 인수를 JSON Parameters 인수로 이동합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Changed Resources()

**설명:** 전송된 작업에서 변경된 리소스를 연관 배열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" => JSON Literal( true ),
"cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Changed Resources: " || Char( action << Get Changed Resources ) || "\!n" );

```

#### Get Disposition

**구문:** action &lt;&lt; Get Disposition()

**설명:** 전송된 작업의 처리 결과를 연관 배열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" => JSON Literal( true ),
"cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Disposition: " || Char( action << Get Disposition ) || "\!n" );

```

#### Get JSON

**구문:** action &lt;&lt; Get JSON()

**설명:** 전송된 CAS 작업에서 반환된 값을 JSON 문자열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Log()

**설명:** 전송된 CAS 작업의 로그를 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Log Entries()

**설명:** 전송된 CAS 작업의 로그를 로그 항목 목록으로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Metrics

**설명:** 전송된 작업의 측정 기준을 연관 배열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" => JSON Literal( true ),
"cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Get Metrics: " || Char( action << Get Metrics ) || "\!n" );

```

#### Get Results

**구문:** action &lt;&lt; Get Results()

**설명:** 전송된 작업의 결과를 연관 배열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
dt = Open( "$SAMPLE_DATA/Animals.jmp", invisible );
cas << Export Data( dt, "CASUSER.Animals" );
Close( dt, NOSAVE );
aa_json = [=> ];
aa_json["table"] = ["name" => "Animals", "caslib" => "CASUSER"];
aa_json["class"] = {"species", "subject", "season"};
aa_json["model"] = ["depVar" => "miles",
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol" => JSON Literal( true ),
"cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"}, "nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Results: " || Char( action << Get Results ) || "\!n" );

```

#### JSON

**구문:** action &lt;&lt; JSON(...)

**설명:** CAS 작업에 대한 JSON 인수를 설정합니다. CAS 작업에는 JSON 문자열 또는 JSL 연관 배열이 인수로 사용됩니다. 각 SAS CAS 작업마다 JSON 인수가 문서화되어 있습니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; JSON Parameters(...)

**설명:** CAS 작업에 대한 JSON 파라미터 인수를 설정합니다. table.upload 같은 CAS 작업에서는 파일과 JSON 파라미터를 함께 사용하여 테이블을 CAS로 이동합니다. File 메시지가 사용된 경우 CAS 작업은 자동으로 모든 JSON 인수를 JSON Parameters 인수로 이동합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Login(&lt;1|0&gt;s))

**설명:** CAS 작업을 위한 로그인 요구 사항을 설정합니다. CAS 작업에서는 연결, 로그인, 권한 부여 및 세션을 자동으로 요구합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Make Report

**설명:** 전송된 CAS 작업에서 보고서를 생성합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Method(&lt;"PUT" | "POST" | "GET" | "PATCH"| "HEAD"&gt;)

**설명:** CAS 작업을 위한 HTTP 메서드를 설정합니다. HTTP 메서드로는 "PUT", "POST", "GET", "PATCH", "HEAD"가 있습니다. 대부분의 CAS 작업에는 올바른 HTTP 메서드가 자동으로 선택됩니다.

**JMP추가된 버전:** 15

```jsl


action = New CAS Action();
action << Method( "PUT" );

```

#### Session

**구문:** action &lt;&lt; Session(&lt;1|0&gt;)

**설명:** CAS 작업을 위한 세션 요구 사항을 설정합니다. CAS 작업에서는 연결, 로그인, 권한 부여 및 세션을 자동으로 요구합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Timeout(120)

**설명:** CAS 작업의 새 타임아웃 값을 설정합니다.

**JMP추가된 버전:** 17

```jsl


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

### 항목 메시지

#### Code

**구문:** action &lt;&lt; Code(...)

**설명:** 실행할 DATA 스텝 코드를 설정합니다. CAS 서버에서는 일부 SAS DATA 스텝 코드를 실행할 수 있습니다. 구체적인 제한 사항은 SAS 설명서에서 확인하십시오.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; File(...)

**설명:** 실행할 DATA 스텝 코드를 설정합니다. 모든 경로 변수가 확장됩니다. CAS 서버에서는 일부 SAS DATA 스텝 코드를 실행할 수 있습니다. 구체적인 제한 사항은 SAS 설명서에서 확인하십시오.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Changed Resources

**설명:** 전송된 작업에서 변경된 리소스를 목록으로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Disposition

**설명:** 전송된 작업의 처리 결과를 연관 배열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get JSON

**설명:** 전송된 CAS 작업에서 반환된 값을 JSON 문자열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Log

**설명:** 전송된 CAS 작업의 로그를 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Log Entries

**설명:** 전송된 CAS 작업의 로그를 로그 항목 목록으로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Metrics

**설명:** 전송된 작업의 측정 기준을 연관 배열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Output Data Sets()

**설명:** 전송된 작업을 통해 생성된 출력 데이터 집합(libray.tablename)의 목록을 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Get Results

**설명:** 전송된 작업의 결과를 연관 배열로 가져옵니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Has Output Data Sets

**설명:** CAS DATA 스텝 작업으로 출력 데이터가 생성된 경우 1을 반환합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; NThreads(&lt;integer|"MAX"&gt;)

**설명:** 프로그램을 실행하는 데 사용되는 스레드의 개수를 지정합니다. 분산 서버의 경우 이 값은 각 작업자 서버에서 프로그램을 실행하는 데 사용되는 스레드의 개수를 지정합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** action &lt;&lt; Single(&lt;NO|NOINPUT|YES&gt;)

**설명:** 실행을 단일 스레드로 제한할 경우를 지정합니다. "NO"는 nThreads 파라미터로 지정된 수만큼의 스레드에서 프로그램을 실행하도록 지정합니다. "NOINPUT"은 입력 데이터 집합이 없는 경우 단일 스레드에서 프로그램을 실행하도록 지정합니다. 입력 데이터 집합이 있는 경우 nThreads 파라미터는 사용할 스레드의 개수를 지정합니다. 분산 서버의 경우에는 프로그램에 입력 데이터 집합이 없으면 프로그램이 한 작업자 서버의 단일 스레드에서 실행됩니다. 그렇지 않으면 nThreads 파라미터가 사용할 스레드의 개수를 지정합니다. "YES"는 nThreads 파라미터를 재정의하고 프로그램을 단일 스레드에서 실행하도록 지정합니다.분산 서버의 경우에는 프로그램이 한 작업자 서버의 단일 스레드에서 실행됩니다. 기본값은 "NO"입니다.

**JMP추가된 버전:** 15

```jsl


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

### 항목 메시지

#### Connect

**구문:** cas &lt;&lt; Connect(&lt;URL(..)&gt;,&lt;Username(...)&gt;, &lt;Password(...)&gt;, &lt;Prompt(Always | Never | IfNeeded&gt;), &lt;Session("session id")&gt;, &lt;Proxy Server("http://my_proxy:80")&gt;, &lt;Proxy User("proxy_username")&gt;, &lt;Bypass Proxy("http://localhost:80")&gt;, &lt;Certificates("my_certificates.crt")&gt;, &lt;Verify Certificates(1 | 0)&gt;, &lt;No Verify Certificates(1 | 0)&gt;, &lt;Timeout(seconds)&gt;, &lt;Authorization Method("BASIC" | "BEARER")&gt;)

**설명:** 새 CAS 서버에 연결합니다. CAS 연결에는 URL, Username, Password 인수와 선택적 Prompt 및 Session이 사용됩니다. Prompt는 IfNeeded, Always 또는 Never일 수 있습니다. Prompt 인수가 IfNeeded 또는 Always이면 URL, Username, Password를 생략할 수 있습니다. Prompt의 기본값은 Never입니다. 기존 CAS 세션에 다시 연결하려면 Session을 사용하면 됩니다. 해당 세션은 연결에 사용된 URL, Username 및 Password에 대해 유효해야 합니다. 선택적 Certificates 인수는 CAS에 https로 연결하기 위해 신뢰할 수 있는 인증서를 제공하는 데 유용합니다. 선택적 Verify Certificates 또는 No Verify Certificates 인수는 자체 서명된 인증서를 일시적으로 수락하는 데 유용합니다. 선택적 Proxy Server 인수는 프록시 환경에서 프록시 호스트를 제공하는 데 유용합니다. 선택적 Proxy User 인수는 프록시 환경에서 사용자/암호 정보를 제공하는 데 유용합니다. 선택적 Bypass Proxy 인수는 특정 호스트에 대해 프록시를 우회하는 데 유용합니다. 선택적 Timeout 인수는 CAS 연결 작업에 대한 타임아웃 값을 설정합니다. 선택적 Authorization Method 인수는 JMP에서 CAS에 연결하는 방법을 지정합니다. 이는 CAS 배포에 따라 다릅니다.

**JMP추가된 버전:** 15

```jsl


cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_id = cas << Get Session;
cas << Disconnect( NoTerminate ); //disconnect CAS without terminating
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ), Session( session_id ) ); //reconnect to the session

```

#### Delete Table

**구문:** cas &lt;&lt; Delete Table(tablename, &lt;Quiet(0|1), reMACs(0|1), Remove(0|1)&gt;)

**설명:** 이 작업은 파일 시스템 테이블을 삭제합니다. 메모리 내 테이블은 영향을 받지 않습니다. Quiet를 지정하면 존재하지 않는 테이블에 대한 오류가 표시되지 않습니다. remACs를 지정하면 테이블에 대한 액세스 제어가 제거됩니다. Remove를 지정하면 메모리의 테이블도 제거됩니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
cas << Delete Table( "Casuser", "Big Class" );

```

#### Disconnect

**구문:** cas &lt;&lt; Disconnect(&lt;Terminate | NoTerminate&gt;)

**설명:** CAS 서버와의 연결을 끊고 필요에 따라 세션을 종료합니다. 기본적으로는 연결이 끊어질 때 세션이 종료됩니다.

**JMP추가된 버전:** 15

```jsl


cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

#### Export Data

**구문:** cas &lt;&lt; Export Data(jmp_data_table, cas_libref, cas_dataset, &lt;named_arguments&gt;)

**설명:** 테이블을 CAS 서버로 내보냅니다. jmp_data_table은 내보낼 JMP 데이터 테이블이고, cas_libref 및 cas_dataset은 CAS 서버의 대상 위치입니다. 명명된 선택적 인수는 Save(1|0)입니다. 테이블을 CAS로 내보낼 경우 Save 옵션을 사용하지 않으면 테이블이 CAS 파일 시스템에 저장되지 않습니다. 대부분의 CAS 작업은 메모리에서 수행됩니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

#### Get Data Sets

**구문:** cas &lt;&lt; Get Data Sets(&lt;"caslib"&gt;)

**설명:** 사용 가능한 CAS 데이터 집합의 목록을 가져옵니다. 이 데이터 집합은 CAS 파일 시스템에서 찾을 수 있습니다. 선택적 인수는 데이터 집합 목록을 CAS 라이브러리로 제한합니다. 인수를 사용하지 않을 경우에는 데이터 집합 목록에 정규화된 데이터 집합 이름(library.dataset)이 포함됩니다. 인수를 사용할 경우에는 데이터 집합 목록에 데이터 집합 이름이 포함됩니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );

```

#### Get Libraries

**구문:** cas &lt;&lt; Get Libraries()

**설명:** 사용 가능한 CAS 라이브러리의 목록을 가져옵니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
libraries = cas << Get Libraries();
Show( libraries );

```

#### Get Session

**구문:** cas &lt;&lt; Get Session()

**설명:** CAS 서버에서 세션 ID를 가져옵니다. CAS 세션이 사용 가능한 상태로 유지되는 한 이후 연결에 이 ID를 사용할 수 있습니다.

**JMP추가된 버전:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_id = cas << Get Session;
cas << Disconnect( NoTerminate ); //disconnect CAS without terminating
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ), Session( session_id ) ); //reconnect to the session

```

#### Get Sessions

**구문:** cas &lt;&lt; Get Sessions()

**설명:** 현재 사용자가 사용할 수 있는 세션을 가져옵니다.

**JMP추가된 버전:** 15

```jsl


url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_ids = cas << Get Sessions();
Show( session_ids );

```

#### Import Data

**구문:** cas &lt;&lt; Import Data(libref, dataset, &lt;named_arguments&gt;)

**설명:** CAS 서버에서 테이블을 가져옵니다. 명명된 선택적 인수는 Invisible(0|1), Private(0|1) 및 UseLabelsForVarNames(0|1)입니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Import Data( "Casuser.Big Class" );

```

#### Is Connected

**구문:** cas &lt;&lt; Is Connected()

**설명:** 활성 CAS 서버 연결이 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
connected = cas << Is Connected();
Show( connected );

```

#### Remove Table

**구문:** cas &lt;&lt; Remove Table(tablename, &lt;Quiet(0|1), reMACs(0|1), Delete(0|1)&gt;)

**설명:** 이 작업은 메모리 내 테이블을 제거합니다. 저장 작업으로 생성된 파일은 영향을 받지 않습니다. 삭제를 지정하면 해당 테이블이 파일 시스템에서도 삭제됩니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Remove Table( "Casuser", "Big Class" );

```

#### Submit

**구문:** cas &lt;&lt; Submit(action)

**설명:** CAS 작업을 CAS 서버로 전송합니다.

**JMP추가된 버전:** 15

```jsl


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

**구문:** cas &lt;&lt; Terminate(sessionId))

**설명:** 현재 사용자 소유의 모든 CAS 세션을 종료합니다. 연결된 세션 ID는 사용자가 직접 종료할 수 없습니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
session_id = cas << Get Session();
cas << Disconnect( NoTerminate );
cas = CAS Connect( Prompt( IfNeeded ) );
cas << Terminate( session_id );

```

#### Terminate Sessions

**구문:** cas &lt;&lt; Terminate Sessions()

**설명:** 현재 사용자 소유의 모든 CAS 세션을 종료합니다.

**JMP추가된 버전:** 15

```jsl


cas = Current CAS Connection();
cas << Terminate Sessions();

```

