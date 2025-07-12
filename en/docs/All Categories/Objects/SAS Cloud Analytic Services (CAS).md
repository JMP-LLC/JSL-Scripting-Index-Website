# SAS Cloud Analytic Services (CAS)



## CAS Action

### Item Messages

#### Action

**Syntax:** action  << Action(...)

**Description:** Sets the action name for the CAS action. The Action message can accept fully qualified actionset.action specification.

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

**Syntax:** action  << Action Set(...)

**Description:** Sets the action set for the CAS action. CAS actions are grouped by action set. This is optional since the CAS Action message can accept fully qualified actionset.action specification.

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Action Set( "builtins" );

```

#### Authorization

**Syntax:** action << Authorization(<1|0>)

**Description:** Sets an authorization requirement for a CAS action. CAS actions automatically require Connect, Login, Authorization, and Session.

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

**Syntax:** action << Connection(<1|0>)

**Description:** Sets a connection requirement for a CAS action. CAS actions automatically require Connect, Login, Authorization, and Session.

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

**Syntax:** action << Endpoint(...)

**Description:** Sets the endpoint for the CAS action. An endpoint is the resource relative to the base CAS server URL. In the case of http://cloud.example.com:8777/cas/sessions, /cas/sessions is the endpoint. For most CAS actions use the Action message where the correct endpoint will automatically be selected.

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Endpoint( "/cas/sessions" );

```

#### File

**Syntax:** action << File(...)

**Description:** Sets the file parameter for a CAS action. Any path variables in the file name are expanded. The CAS action automatically moves any JSON argument to a JSON Parameters argument if the File message is used.

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

**Syntax:** action << Get Changed Resources()

**Description:** Gets the changed resources from a submitted action as an associative array.

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

**Syntax:** action << Get Disposition()

**Description:** Gets the disposition from a submitted action as an associative array.

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

**Syntax:** action << Get JSON()

**Description:** Gets the returned values from a submitted CAS action as a JSON string.

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

**Syntax:** action << Get Log()

**Description:** Gets the log from a submitted CAS action.

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

**Syntax:** action << Get Log Entries()

**Description:** Gets the log as list of log entries from a submitted CAS action.

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

**Syntax:** action << Get Metrics

**Description:** Gets the metrics from a submitted action as an associative array.

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

**Syntax:** action << Get Results()

**Description:** Gets the results from a submitted action as an associative array.

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

**Syntax:** action << JSON(...)

**Description:** Sets the JSON argument for the CAS action. CAS actions will take JSON strings or JSL associative arrays as arguments. The JSON arguments are documented for each SAS CAS action.

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

**Syntax:** action << JSON Parameters(...)

**Description:** Sets the JSON parameter argument for the CAS action. CAS actions like table.upload use a file in combination with JSON parameters to move a table to CAS. The CAS action will automatically move any JSON argument to a JSON Parameters argument if the File message is used.

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

**Syntax:** action << Login(<1|0>s))

**Description:** Sets a login requirement for a CAS action. CAS actions automatically require Connect, Login, Authorization, and Session.

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

**Syntax:** action << Make Report

**Description:** Generates a report from a submitted CAS action.

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

**Syntax:** action << Method(<"PUT" | "POST" | "GET" | "PATCH"| "HEAD">)

**Description:** Sets the HTTP method for the CAS action. HTTP methods include "PUT", "POST", "GET", "PATCH", "HEAD". For most CAS actions the correct HTTP method will automatically be selected.

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Method( "PUT" );

```

#### Session

**Syntax:** action << Session(<1|0>)

**Description:** Sets a session requirement for a CAS action. CAS actions automatically require Connect, Login, Authorization, and Session.

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

**Syntax:** action << Timeout(120)

**Description:** Sets a new timeout value in the CAS action.

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

### Item Messages

#### Code

**Syntax:** action << Code(...)

**Description:** Sets the DATA step code to run. The CAS server is capable of running a subset of SAS DATA step code. See SAS documentation for specific limitations.

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

**Syntax:** action << File(...)

**Description:** Sets the DATA step code to run. All path variables are expanded. The CAS server can run a subset of SAS DATA step code. See SAS documentation for specific limitations.

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

**Syntax:** action << Get Changed Resources

**Description:** Gets the changed resources from a submitted action as a list.

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

**Syntax:** action << Get Disposition

**Description:** Gets the disposition from a submitted action as an associative array.

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

**Syntax:** action << Get JSON

**Description:** Gets the returned values from a submitted CAS action as a JSON string.

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

**Syntax:** action << Get Log

**Description:** Gets the log from a submitted CAS action.

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

**Syntax:** action << Get Log Entries

**Description:** Gets the log as list of log entries from a submitted CAS action.

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

**Syntax:** action << Get Metrics

**Description:** Gets the metrics from a submitted action as an associative array.

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

**Syntax:** action << Get Output Data Sets()

**Description:** Gets a list of output data sets (libray.tablename) produced by the submitted action.

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

**Syntax:** action << Get Results

**Description:** Gets the results from a submitted action as an associative array.

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

**Syntax:** action << Has Output Data Sets

**Description:** Returns 1 if the CAS DATA step action produced output data.

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

**Syntax:** action << NThreads(<integer|"MAX">)

**Description:** Specifies the number of threads that are used to run the program. For distributed servers, this value specifies the number of threads on each worker to use for running the program.

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

**Syntax:** action << Single(<NO|NOINPUT|YES>)

**Description:** Specifies when to restrict execution to a single thread. "NO" specifies to run the program in the number of threads specified by the nThreads parameter. "NOINPUT" specifies to run the program in one thread when there are no input data sets. When there are input data sets, the nThreads parameter specifies the number of threads to use. For distributed servers, if the program has no input data sets, the program runs in one thread on one worker. Otherwise, the nThreads parameter specifies the number of threads to use. "YES" specifies to override the nThreads parameter and run the program in one thread. For distributed servers, the program runs on one thread on one worker. The default is "NO"

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

### Item Messages

#### Connect

**Syntax:** cas << Connect(<URL(..)>,<Username(...)>, <Password(...)>, <Prompt(Always | Never | IfNeeded>), <Session("session id")>, <Proxy Server("http://my_proxy:80")>, <Proxy User("proxy_username")>, <Bypass Proxy("http://localhost:80")>, <Certificates("my_certificates.crt")>, <Verify Certificates(1 | 0)>, <No Verify Certificates(1 | 0)>, <Timeout(seconds)>, <Authorization Method("BASIC" | "BEARER")>)

**Description:** Connects to a new CAS server. CAS Connect uses URL, User name, Password arguments and optionally Prompt and Session. Prompt can be IfNeeded, Always, or Never. URL, user name, password can be omitted if the Prompt argument is IfNeeded or Always. The default value for Prompt is Never. Session can be used to reconnect to an existing CAS session. The session must be valid for the URL, user name, and password used in the connection. The optional Certificates argument is useful for supplying trusted certificates for https connections to CAS. The optional Verify Certificates or No Verify Certificates argument is useful to temporarily accept self-signed certificates. The optional Proxy Server argument is useful for supplying a proxy host in a proxy environment. The optional Proxy User argument is useful for supplying user and password information for a proxy environment. The optional Bypass Proxy argument is use for bypassing the proxy for certain hosts. The optional Timeout argument sets a timeout value for the CAS connection operations. The optional Authorization Method argument specifies how JMP connects to CAS. This is dependent on the CAS deployment.

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

**Syntax:** cas << Delete Table(tablename, <Quiet(0|1), reMACs(0|1), Remove(0|1)>)

**Description:** This action deletes the filesystem table. The in memory table is not affected. Specifying Quiet will suppress errors for a non-existent table. Specifying remACs will remove access controls for a table. Specifying Remove will also remove the table from memory.

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
cas << Delete Table( "Casuser", "Big Class" );

```

#### Disconnect

**Syntax:** cas << Disconnect(<Terminate | NoTerminate>)

**Description:** Disconnects from a CAS server and optionally terminates the session. By default, the session is terminated when disconnected.

```jsl

Names Default To Here( 1 );

cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

#### Export Data

**Syntax:** cas << Export Data(jmp_data_table, cas_libref, cas_dataset, <named_arguments>)

**Description:** Exports a table to a CAS server. jmp_data_table is the JMP data table to export while cas_libref and cas_dataset are the target locations on the CAS server. The optional named argument is Save(1|0). When a table is exported to CAS, it is not persisted to CAS filesystem unless the Save option is used. Most CAS actions occur in memory.

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

#### Get Data Sets

**Syntax:** cas << Get Data Sets(<"caslib">)

**Description:** Gets a list of available CAS data sets. These data sets are found on the CAS filesystem. The optional argument limits the list of data sets to the CAS library. If no argument is used, then the data set list contains the fully qualified data set name (library.dataset). If the argument is used, then the data set list is a list of data set names.

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

**Syntax:** cas << Get Libraries()

**Description:** Gets a list of available CAS libraries.

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
libraries = cas << Get Libraries();
Show( libraries );

```

#### Get Session

**Syntax:** cas << Get Session()

**Description:** Gets the session id from the CAS server. This can be used for subsequent re-connections as long as the CAS session remains available.

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

**Syntax:** cas << Get Sessions()

**Description:** Gets the available sessions for the current user.

```jsl

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_ids = cas << Get Sessions();
Show( session_ids );

```

#### Import Data

**Syntax:** cas << Import Data(libref, dataset, <named_arguments>)

**Description:** Imports a table from a CAS server. Optional named arguments are Invisible(0|1), Private(0|1) and UseLabelsForVarNames(0|1).

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Import Data( "Casuser.Big Class" );

```

#### Is Connected

**Syntax:** cas << Is Connected()

**Description:** Returns 1 if there is an active CAS server connection. Otherwise, returns 0.

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
connected = cas << Is Connected();
Show( connected );

```

#### Remove Table

**Syntax:** cas << Remove Table(tablename, <Quiet(0|1), reMACs(0|1), Delete(0|1)>)

**Description:** This action drops the in-memory table. The file that was created with the save action is not affected. Specifying delete will also delete the table from the file system.

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Remove Table( "Casuser", "Big Class" );

```

#### Submit

**Syntax:** cas << Submit(action)

**Description:** Submits a CAS action to the CAS server.

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

**Syntax:** cas << Terminate(sessionId))

**Description:** Terminates a CAS session owned by the current user. A user cannot terminate a connected session ID

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
session_id = cas << Get Session();
cas << Disconnect( NoTerminate );
cas = CAS Connect( Prompt( IfNeeded ) );
cas << Terminate( session_id );

```

#### Terminate Sessions

**Syntax:** cas << Terminate Sessions()

**Description:** Terminates all CAS sessions owned by the current user.

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Terminate Sessions();

```

