# SAS Cloud Analytic Services (CAS)



## CAS Action

### Action

**Syntax:** action  << Action(...)

**Beschreibung:** Legt den Aktionsnamen für die CAS-Aktion fest. Die Meldung „Action“ kann die vollständig qualifizierte Angabe actionset.action akzeptieren.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
echo = [=> ];
echo["a"] = 1;
echo["b"] = JSON Literal( true );
echo["c"] = 3.141559;
action = New CAS Action( Action( "builtins.echo" ), JSON( echo ) );
rc = cas << Submit( action );

```

### Action Set

**Syntax:** action  << Action Set(...)

**Beschreibung:** Legt die Aktion für die CAS-Aktion fest. CAS-Aktionen sind nach Aktionssatz gruppiert. Dies ist optional, da die Meldung „CAS Action“ die vollständig qualifizierte Angabe actionset.action akzeptieren kann.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

action = New CAS Action();
action << Action Set( "builtins" );

```

### Authorization

**Syntax:** action << Authorization(<1|0>)

**Beschreibung:** Legt eine Autorisierungsanforderung für eine CAS-Aktion fest. CAS-Aktionen erfordern automatisch Connect, Login, Authorization und Session.

**JMP Version hinzugefügt:** 15

```js

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

### Connection

**Syntax:** action << Connection(<1|0>)

**Beschreibung:** Legt eine Verbindungsanforderung für eine CAS-Aktion fest. CAS-Aktionen erfordern automatisch Connect, Login, Authorization und Session.

**JMP Version hinzugefügt:** 15

```js

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

### Endpoint

**Syntax:** action << Endpoint(...)

**Beschreibung:** Legt den Endpunkt für die CAS-Aktion fest. Ein Endpunkt ist die Ressource relativ zur grundlegenden CAS-Server-URL. Bei http://cloud.example.com:8777/cas/sessions ist /cas/sessions der Endpunkt. Verwenden Sie bei den meisten CAS-Aktionen die Meldung „Action“, dann wird der korrekte Endpunkt automatisch ausgewählt.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

action = New CAS Action();
action << Endpoint( "/cas/sessions" );

```

### File

**Syntax:** action << File(...)

**Beschreibung:** Legt den Dateiparameter für eine CAS-Aktion fest. Alle Pfadvariablen im Dateinamen werden erweitert. Die CAS-Aktion verschiebt automatisch alle JSON-Argumente in ein Argument „JSON Parameters“, wenn die Meldung „File“ verwendet wird.

**JMP Version hinzugefügt:** 15

```js

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

### Get Changed Resources

**Syntax:** action << Get Changed Resources()

**Beschreibung:** Ruft die geänderten Ressourcen von einer gesendeten Aktion als assoziatives Array ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Disposition

**Syntax:** action << Get Disposition()

**Beschreibung:** Ruft die Disposition von einer gesendeten Aktion als assoziatives Array ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get JSON

**Syntax:** action << Get JSON()

**Beschreibung:** Ruft die zurückgegebenen Werte einer gesendeten CAS-Aktion als JSON-Zeichenkette ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Log

**Syntax:** action << Get Log()

**Beschreibung:** Ruft das Protokoll von einer gesendeten CAS-Aktion ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Log Entries

**Syntax:** action << Get Log Entries()

**Beschreibung:** Ruft das Protokoll als Liste von Protokolleinträgen von einer gesendeten CAS-Aktion ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Metrics

**Syntax:** action << Get Metrics

**Beschreibung:** Ruft die Metriken von einer gesendeten Aktion als assoziatives Array ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Results

**Syntax:** action << Get Results()

**Beschreibung:** Ruft die Ergebnisse von einer gesendeten Aktion als assoziatives Array ab.

**JMP Version hinzugefügt:** 15

```js

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

### JSON

**Syntax:** action << JSON(...)

**Beschreibung:** Legt das JSON-Argument für die CAS-Aktion fest. CAS-Aktionen nehmen JSON-Zeichenketten oder assoziative JSL-Arrays als Argumente. Die JSON-Argumente sind für jede SAS-CAS-Aktion dokumentiert.

**JMP Version hinzugefügt:** 15

```js

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

### JSON Parameters

**Syntax:** action << JSON Parameters(...)

**Beschreibung:** Legt das JSON-Parameterargument für die CAS-Aktion fest. CAS-Aktionen wie table.upload verwenden eine Datei in Verbindung mit JSON-Parametern, um eine Tabelle in CAS zu verschieben. Die CAS-Aktion verschiebt alle JSON-Argumente automatisch in ein Argument „JSON Parameters“, wenn die Meldung „File“ verwendet wird.

**JMP Version hinzugefügt:** 15

```js

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

### Login

**Syntax:** action << Login(<1|0>s))

**Beschreibung:** Legt eine Anmeldeanforderung für eine CAS-Aktion fest. CAS-Aktionen erfordern automatisch Connect, Login, Authorization und Session.

**JMP Version hinzugefügt:** 15

```js

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

### Make Report

**Syntax:** action << Make Report

**Beschreibung:** Erzeugt einen Bericht von einer gesendeten CAS-Aktion.

**JMP Version hinzugefügt:** 15

```js

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

### Method

**Syntax:** action << Method(<"PUT" | "POST" | "GET" | "PATCH"| "HEAD">)

**Beschreibung:** Legt die HTTP-Methode für die CAS-Aktion fest. HTTP-Methoden sind u.a. „PUT“, „POST“, „GET“, „PATCH“, „HEAD“. Bei den meisten CAS-Aktionen wird die korrekte HTTP-Methode automatisch ausgewählt.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

action = New CAS Action();
action << Method( "PUT" );

```

### Session

**Syntax:** action << Session(<1|0>)

**Beschreibung:** Legt eine Sitzungsanforderung für eine CAS-Aktion fest. CAS-Aktionen erfordern automatisch Connect, Login, Authorization und Session.

**JMP Version hinzugefügt:** 15

```js

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

### Timeout

**Syntax:** action << Timeout(120)

**Beschreibung:** Legt einen neuen Timeout-Wert in der CAS-Aktion fest.

**JMP Version hinzugefügt:** 17

```js

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

### Code

**Syntax:** action << Code(...)

**Beschreibung:** Legt den auszuführenden DATA-Step-Code fest. Der CAS-Server kann eine Teilmenge des SAS-DATA-Step-Codes ausführen. Informationen zu spezifischen Einschränkungen finden Sie in der SAS-Dokumentation.

**JMP Version hinzugefügt:** 15

```js

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

### File

**Syntax:** action << File(...)

**Beschreibung:** Legt den auszuführenden DATA-Step-Code fest. Alle Pfadvariablen werden erweitert. Der CAS-Server kann eine Teilmenge eines SAS-DATA-Step-Codes ausführen. Spezifische Einschränkungen finden Sie in der SAS-Dokumentation.

**JMP Version hinzugefügt:** 15

```js

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

### Get Changed Resources

**Syntax:** action << Get Changed Resources

**Beschreibung:** Ruft die geänderten Ressourcen von einer gesendeten Aktion als Liste ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Disposition

**Syntax:** action << Get Disposition

**Beschreibung:** Ruft die Disposition von einer gesendeten Aktion als assoziatives Array ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get JSON

**Syntax:** action << Get JSON

**Beschreibung:** Ruft die zurückgegebenen Werte einer gesendeten CAS-Aktion als JSON-Zeichenkette ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Log

**Syntax:** action << Get Log

**Beschreibung:** Ruft das Protokoll von einer gesendeten CAS-Aktion ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Log Entries

**Syntax:** action << Get Log Entries

**Beschreibung:** Ruft das Protokoll als Liste von Protokolleinträgen von einer gesendeten CAS-Aktion ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Metrics

**Syntax:** action << Get Metrics

**Beschreibung:** Ruft die Metriken von einer gesendeten Aktion als assoziatives Array ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Output Data Sets

**Syntax:** action << Get Output Data Sets()

**Beschreibung:** Ruft eine Liste der von der gesendeten Aktion erzeugten Ausgabedatensätze (library.dataset) ab.

**JMP Version hinzugefügt:** 15

```js

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

### Get Results

**Syntax:** action << Get Results

**Beschreibung:** Ruft die Ergebnisse von einer gesendeten Aktion als assoziatives Array ab.

**JMP Version hinzugefügt:** 15

```js

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

### Has Output Data Sets

**Syntax:** action << Has Output Data Sets

**Beschreibung:** Gibt 1 zurück, wenn die CAS-DATA-Step-Aktion Ausgabedaten produziert hat.

**JMP Version hinzugefügt:** 15

```js

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

### NThreads

**Syntax:** action << NThreads(<integer|"MAX">)

**Beschreibung:** Gibt die Anzahl von Threads an, die für die Ausführung des Programms verwendet werden. Bei verteilten Servern gibt dieser Wert die Anzahl von Threads auf jedem Worker für die Ausführung des Programms an.

**JMP Version hinzugefügt:** 15

```js

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

### Single

**Syntax:** action << Single(<NO|NOINPUT|YES>)

**Beschreibung:** Gibt an, wann die Ausführung auf einen einzelnen Thread begrenzt werden soll. „NO“ gibt an, dass das Programm in der Anzahl von Threads, die vom Parameter nThreads angegeben wird, ausgeführt werden soll. „NOINPUT“ gibt an, dass das Programm in einem Thread ausgeführt werden soll, wenn es keine Eingabedatensätze gibt. Wenn Eingabedatensätze vorhanden sind, gibt der Parameter nThreads die zu verwendende Anzahl von Threads an. Bei verteilten Servern wird das Programm, wenn keine Eingabedatensätze vorhanden sind, in einem Thread auf einem Worker ausgeführt. Ansonsten gibt der Parameter nThreads die zu verwendende Anzahl von Threads an. „YES“ gibt an, dass der Parameter nThreads aufgehoben und das Programm in einem Thread ausgeführt werden soll. Bei verteilten Servern wird das Programm in einem Thread auf einem Worker ausgeführt. Die Standardeinstellung ist „NO“.

**JMP Version hinzugefügt:** 15

```js

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

### Connect

**Syntax:** cas << Connect(<URL(..)>,<Username(...)>, <Password(...)>, <Prompt(Always | Never | IfNeeded>), <Session("session id")>, <Proxy Server("http://my_proxy:80")>, <Proxy User("proxy_username")>, <Bypass Proxy("http://localhost:80")>, <Certificates("my_certificates.crt")>, <Verify Certificates(1 | 0)>, <No Verify Certificates(1 | 0)>, <Timeout(seconds)>, <Authorization Method("BASIC" | "BEARER")>)

**Beschreibung:** Stellt eine Verbindung zu einem neuen CAS-Server her. CAS Connect verwendet die Argumente URL, Username, Password und optional Prompt und Session. Für Prompt kann IfNeeded, Always oder Never angegeben werden. URL, Username, Password können weggelassen werden, wenn für das Argument Prompt eine der Optionen IfNeeded oder Always angegeben ist. Der Standardwert für Prompt ist Never. Session kann verwendet werden, um erneut eine Verbindung zu einer vorhandenen CAS-Sitzung herzustellen. Die Sitzung muss für die in der Verbindung verwendeten Argumente URL, Username und Password gültig sein. Das optionale Argument „Certificates“ ist nützlich, um vertrauenswürdige Zertifikate für HTTPS-Verbindungen mit CAS bereitzustellen. Die optionalen Argumente „Verify Certificates“ oder „No Verify Certificates“ sind nützlich, um kurzzeitig selbst signierte Zertifikate zu akzeptieren. Das optionale Argument „Proxy Server“ ist nützlich, um einen Proxy-Host in einer Proxy-Umgebung anzugeben. Das optionale Argument „Proxy User“ ist nützlich, um Benutzer- und Kennwortinformationen für eine Proxy-Umgebung bereitzustellen. Das optionale Argument „Bypass Proxy“ dient zum Umgehen des Proxy bei bestimmten Hosts. Das optionale Argument „Timeout“ legt einen Timeout-Wert für die CAS-Verbindungsoperationen fest. Das optionale Argument „Authorization Method“ gibt an, wie JMP eine Verbindung mit CAS herstellt. Dies ist von der CAS-Bereitstellung abhängig.

**JMP Version hinzugefügt:** 15

```js

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

### Delete Table

**Syntax:** cas << Delete Table(tablename, <Quiet(0|1), reMACs(0|1), Remove(0|1)>)

**Beschreibung:** Diese Aktion löscht die Dateisystemtabelle. Die Tabelle im Speicher ist davon nicht betroffen. Durch Angabe von Quiet werden Fehler bei einer nicht vorhandenen Tabelle unterdrückt. Durch Angabe von remACs werden Zugriffskontrollen für eine Tabelle entfernt. Durch Angabe von Remove wird auch die Tabelle aus dem Speicher entfernt.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
cas << Delete Table( "Casuser", "Big Class" );

```

### Disconnect

**Syntax:** cas << Disconnect(<Terminate | NoTerminate>)

**Beschreibung:** Trennt die Verbindung zum CAS-Server und beendet optional die Sitzung. Standardmäßig wird die Sitzung beim Trennen der Verbindung beendet.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

### Export Data

**Syntax:** cas << Export Data(jmp_data_table, cas_libref, cas_dataset, <named_arguments>)

**Beschreibung:** Exportiert eine Tabelle auf einen CAS-Server. jmp_data_table ist die zu exportierende JMP-Datentabelle, und cas_libref und cas_dataset sind die Zielspeicherorte auf dem CAS-Server. Das optional benannte Argument ist Save(1|0). Wenn eine Tabelle in CAS exportiert wird, wird sie nicht dauerhaft im CAS-Dateisystem gespeichert, wenn nicht die Option Save verwendet wird. Die meisten CAS-Aktionen geschehen im Speicher.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

### Get Data Sets

**Syntax:** cas << Get Data Sets(<"caslib">)

**Beschreibung:** Ruft eine Liste verfügbarer CAS-Datensätze ab. Diese Datensätze werden im CAS-Dateisystem gefunden. Das optionale Argument begrenzt die Liste der Datensätze auf die CAS-Bibliothek. Wenn kein Argument verwendet wird, enthält die Liste der Datensätze den vollständig qualifizierten Datensatznamen (library.dataset). Wenn das Argument verwendet wird, listet die Datensatzliste die Datensatznamen auf.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );

```

### Get Libraries

**Syntax:** cas << Get Libraries()

**Beschreibung:** Ruft eine Liste verfügbarer CAS-Bibliotheken ab.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
libraries = cas << Get Libraries();
Show( libraries );

```

### Get Session

**Syntax:** cas << Get Session()

**Beschreibung:** Ruft die Sitzungs-ID vom CAS-Server ab. Sie kann für nachfolgende Neuverbindungen verwendet werden, solange die CAS-Sitzung verfügbar bleibt.

**JMP Version hinzugefügt:** 15

```js

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

### Get Sessions

**Syntax:** cas << Get Sessions()

**Beschreibung:** Ruft die verfügbaren Sitzungen für den aktuellen Benutzer ab.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_ids = cas << Get Sessions();
Show( session_ids );

```

### Import Data

**Syntax:** cas << Import Data(libref, dataset, <named_arguments>)

**Beschreibung:** Importiert eine Tabelle von einem CAS-Server. Optional benannte Argumente sind Invisible(0|1), Private(0|1) und UseLabelsForVarNames(0|1)

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Import Data( "Casuser.Big Class" );

```

### Is Connected

**Syntax:** cas << Is Connected()

**Beschreibung:** Gibt 1 zurück, wenn eine aktive CAS-Server-Verbindung besteht. Andernfalls wird 0 zurückgegeben.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
connected = cas << Is Connected();
Show( connected );

```

### Remove Table

**Syntax:** cas << Remove Table(tablename, <Quiet(0|1), reMACs(0|1), Delete(0|1)>)

**Beschreibung:** Durch diese Aktion wird die im Speicher befindliche Tabelle verworfen. Die Datei, die von der Speicheraktion erstellt wurde, ist nicht betroffen. Wenn Sie „Delete“ angeben, wird die Tabelle auch aus dem Dateisystem gelöscht.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Remove Table( "Casuser", "Big Class" );

```

### Submit

**Syntax:** cas << Submit(action)

**Beschreibung:** Sendet eine CAS-Aktion an den CAS-Server.

**JMP Version hinzugefügt:** 15

```js

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

### Terminate

**Syntax:** cas << Terminate(sessionId))

**Beschreibung:** Beendet eine CAS-Sitzung des aktuellen Benutzers. Ein Benutzer kann eine verbundene Sitzungs-ID nicht beenden.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
session_id = cas << Get Session();
cas << Disconnect( NoTerminate );
cas = CAS Connect( Prompt( IfNeeded ) );
cas << Terminate( session_id );

```

### Terminate Sessions

**Syntax:** cas << Terminate Sessions()

**Beschreibung:** Beendet alle CAS-Sitzungen des aktuellen Benutzers.

**JMP Version hinzugefügt:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Terminate Sessions();

```

