# SAS Cloud Analytic Services (CAS)



## CAS Action

### Action

**Sintassi:** action  << Action(...)

**Descrizione:** Imposta il nome dell&apos;operazione CAS. Il Messaggio di operazione CAS può accettare una specifica completa actionset.action.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action  << Action Set(...)

**Descrizione:** Imposta il gruppo di operazioni per l&apos;operazione CAS. Le operazioni CAS sono raggruppate per insieme di operazioni. Ciò è facoltativo in quanto il messaggio di operazione CAS può accettare una specifica completa actionset.action.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

action = New CAS Action();
action << Action Set( "builtins" );

```

### Authorization

**Sintassi:** action << Authorization(<1|0>)

**Descrizione:** Imposta un requisito di autorizzazione per un&apos;operazione CAS. Le operazioni CAS richiedono automaticamente Connetti, Accesso, Autorizzazione e Sessione.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Connection(<1|0>)

**Descrizione:** Imposta un requisito di connessione per un&apos;operazione CAS. Le operazioni CAS richiedono automaticamente Connetti, Accesso, Autorizzazione e Sessione.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Endpoint(...)

**Descrizione:** Imposta il punto finale dell&apos;operazione CAS. Un punto finale è la risorsa relativa all&apos;URL base del server CAS. Nel caso di http://cloud.example.com:8777/cas/sessions, /cas/sessions è il punto finale. Per la maggior parte delle operazioni CAS usa il Messaggio dell&apos;operazione in cui sarà automaticamente selezionato il punto finale corretto.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

action = New CAS Action();
action << Endpoint( "/cas/sessions" );

```

### File

**Sintassi:** action << File(...)

**Descrizione:** Imposta il parametro file per un&apos;operazione CAS. Qualsiasi variabile di percorso nel nome del file è espansa. L&apos;operazione CAS sposta automaticamente qualsiasi argomento JSON in un argomento Parametri JSON se si utilizza il messaggio File.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Changed Resources()

**Descrizione:** Ottiene le risorse modificate da un&apos;operazione eseguita come array associativo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Disposition()

**Descrizione:** Ottiene la disposizione da un&apos;operazione eseguita come array associativo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get JSON()

**Descrizione:** Ottiene i valori restituiti da un&apos;operazione CAS eseguita come stringa JSON.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Log()

**Descrizione:** Ottiene il log da un&apos;operazione CAS eseguita.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Log Entries()

**Descrizione:** Ottiene il log come elenco di voci da un&apos;operazione CAS eseguita.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Metrics

**Descrizione:** Ottiene la metrica da un&apos;operazione eseguita come array associativo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Results()

**Descrizione:** Ottiene i risultati da un&apos;operazione eseguita come array associativo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << JSON(...)

**Descrizione:** Imposta l&apos;argomento JSON per l&apos;operazione CAS. Le operazioni CAS utilizzeranno le stringhe JSON o gli array associativi JSL come argomenti. Gli argomenti JSON sono documentati per ogni operazione CAS SAS.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << JSON Parameters(...)

**Descrizione:** Imposta l&apos;argomento del parametro JSON per l&apos;operazione CAS. Le operazioni CAS quali carica.tabella utilizzano un file in combinazione con i parametri JSON per spostare una tabella in CAS. L&apos;operazione CAS sposterà automaticamente qualsiasi argomento JSON in un argomento Parametri JSON se si utilizza il messaggio File.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Login(<1|0>s))

**Descrizione:** Imposta un requisito di accesso per un&apos;operazione CAS. Le operazioni CAS richiedono automaticamente Connetti, Accesso, Autorizzazione e Sessione.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Make Report

**Descrizione:** Genera un report da un&apos;operazione CAS eseguita.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Method(<"PUT" | "POST" | "GET" | "PATCH"| "HEAD">)

**Descrizione:** Imposta il metodo HTTP per l&apos;operazione CAS. I metodi HTTP includono "METTI", "PUBBLICA", "OTTIENI", "PATCH", "TESTA". Per la maggior parte delle operazioni CAS, sarà selezionato automaticamente il metodo HTTP corretto.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

action = New CAS Action();
action << Method( "PUT" );

```

### Session

**Sintassi:** action << Session(<1|0>)

**Descrizione:** Imposta un requisito di sessione per un&apos;operazione CAS. Le operazioni CAS richiedono automaticamente Connetti, Accesso, Autorizzazione e Sessione.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Timeout(120)

**Descrizione:** Imposta un nuovo valore di timeout nell&apos;azione CAS.

**JMP Versione aggiunta:** 17

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

**Sintassi:** action << Code(...)

**Descrizione:** Imposta il codice del passo di DATA da eseguire. Il server CAS è in grado di eseguire un sottoinsieme del codice del passo di DATA SAS. Consultare la documentazione SAS per limitazioni specifiche.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << File(...)

**Descrizione:** Imposta il codice del passo di DATA da eseguire. Tutte le variabili di percorso sono espanse. Il server CAS può eseguire un sottoinsieme del codice del passo di DATA SAS. Consultare la documentazione SAS per specifiche limitazioni.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Changed Resources

**Descrizione:** Ottiene le risorse modificate da un&apos;operazione eseguita come un elenco.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Disposition

**Descrizione:** Ottiene la disposizione da un&apos;operazione eseguita come array associativo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get JSON

**Descrizione:** Ottiene i valori restituiti da un&apos;operazione CAS eseguita come stringa JSON.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Log

**Descrizione:** Ottiene il log da un&apos;operazione CAS eseguita.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Log Entries

**Descrizione:** Ottiene il log come elenco di voci da un&apos;operazione CAS eseguita.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Metrics

**Descrizione:** Ottiene le metriche da un&apos;operazione eseguita come array associativo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Output Data Sets()

**Descrizione:** Ottiene un elenco di data set di output (libreria.nometabella) prodotto dall&apos;operazione eseguita.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Get Results

**Descrizione:** Ottiene i risultati da un&apos;operazione eseguita come array associativo.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Has Output Data Sets

**Descrizione:** Restituisce 1 se l&apos;operazione del passo di DATA CAS ha prodotto dati di output.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << NThreads(<integer|"MAX">)

**Descrizione:** Specifica il numero di thread usati per eseguire il programma. Per server distribuiti questo valore specifica il numero di thread su ogni worker da usare per eseguire il programma.

**JMP Versione aggiunta:** 15

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

**Sintassi:** action << Single(<NO|NOINPUT|YES>)

**Descrizione:** Specifica quando restringere l&apos;esecuzione a un singolo thread. "NO" specifica di eseguire il programma nel numero di thread specificato dal parametro nThreads. "NOINPUT" specifica di eseguire il programma in un thread quando non esistono data set di input. Quando esistono data set di input, il parametro nThreads specifica il numero di thread da usare. Per server distribuiti, se il programma non presenta data set di input, il programma viene eseguito in un thread su un worker. Altrimenti, il parametro nThreads specifica il numero di thread da usare. "SÌ" specifica di ignorare il parametro nThreads e di eseguire il programma in un thread. Per server distribuiti il programma viene eseguito in un thread su un worker. L&apos;opzione predefinita è "NO".

**JMP Versione aggiunta:** 15

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

**Sintassi:** cas << Connect(<URL(..)>,<Username(...)>, <Password(...)>, <Prompt(Always | Never | IfNeeded>), <Session("session id")>, <Proxy Server("http://my_proxy:80")>, <Proxy User("proxy_username")>, <Bypass Proxy("http://localhost:80")>, <Certificates("my_certificates.crt")>, <Verify Certificates(1 | 0)>, <No Verify Certificates(1 | 0)>, <Timeout(seconds)>, <Authorization Method("BASIC" | "BEARER")>)

**Descrizione:** Si connette a un nuovo server CAS. CAS Connect utilizza gli argomenti URL, Nome utente, Password e facoltativamente Richiedi e Sessione. Richiedi può essere Se necessario, Sempre o Mai. URL, nome utente e password possono essere omessi se l&apos;argomento di Richiedi è Se necessario o Sempre. Il valore di default per Richiedi è Mai. L’argomento Sessione può essere utilizzato per riconnettersi a una sessione CAS esistente. La sessione deve essere valida per l&apos;URL, il nome utente e la password utilizzati nella connessione. L&apos;argomento facoltativo Certificati è utile per fornire certificati affidabili per connessioni https a CAS. L&apos;argomento facoltativo Verifica certificati o Nessuna verifica certificato è utile per accettare temporaneamente certificati autofirmati. L&apos;argomento facoltativo Proxy Server è utile per fornire un host proxy in un ambiente proxy. L&apos;argomento facoltativo Utente proxy è utile per fornire informazioni su utente e password per un ambiente proxy. L&apos;argomento facoltativo Ignora proxy è utilizzato per ignorare il proxy per alcuni host. L&apos;argomento facoltativo Timeout imposta un valore di timeout per le operazioni di connessione a CAS. L&apos;argomento facoltativo Metodo di autorizzazione specifica come JMP si connette a CAS. Dipende dal deployment CAS.

**JMP Versione aggiunta:** 15

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

**Sintassi:** cas << Delete Table(tablename, <Quiet(0|1), reMACs(0|1), Remove(0|1)>)

**Descrizione:** Questa azione elimina la tabella del filesystem. La tabella in memoria non è interessata. Specificando Nessuna info si eliminano gli errori per tabelle non esistenti. Specificando remACs si rimuovono i controlli di accesso per una tabella. Specificando Rimuovi si rimuove anche la tabella dalla memoria.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
cas << Delete Table( "Casuser", "Big Class" );

```

### Disconnect

**Sintassi:** cas << Disconnect(<Terminate | NoTerminate>)

**Descrizione:** Disconnette da un server CAS e facoltativamente termina la sessione. Per impostazione predefinita, la sessione termina quando ci si disconnette.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

### Export Data

**Sintassi:** cas << Export Data(jmp_data_table, cas_libref, cas_dataset, <named_arguments>)

**Descrizione:** Esporta una tabella in un server CAS. jmp_data_table è la tabella di dati di JMP da esportare mentre cas_libref e cas_dataset sono le posizioni di destinazione sul server CAS. L&apos;argomento denominato facoltativo è Save(1|0). Quando una tabella viene esportata in CAS non viene mantenuta nel file system CAS a meno che si utilizzi l&apos;opzione Salva. La maggior parte delle operazioni CAS avviene in memoria.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

### Get Data Sets

**Sintassi:** cas << Get Data Sets(<"caslib">)

**Descrizione:** Ottiene un elenco di data set CAS disponibili. Questi data set sono presenti nel file system CAS. L&apos;argomento facoltativo limita l&apos;elenco dei data set alla libreria CAS. Se non viene utilizzato alcun argomento, l&apos;elenco dei data set contiene il nome del data set completo (libreria.dataset). Se si utilizza l&apos;argomento, l&apos;elenco dei data set è un elenco di nomi di data set.

**JMP Versione aggiunta:** 15

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

**Sintassi:** cas << Get Libraries()

**Descrizione:** Ottiene un elenco di librerie CAS disponibili.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
libraries = cas << Get Libraries();
Show( libraries );

```

### Get Session

**Sintassi:** cas << Get Session()

**Descrizione:** Ottiene l&apos;ID di sessione dal server CAS. Può essere utilizzato per successive connessioni fino a quando la sessione CAS rimane disponibile.

**JMP Versione aggiunta:** 15

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

**Sintassi:** cas << Get Sessions()

**Descrizione:** Ottiene le sessioni disponibili per l&apos;utente corrente.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_ids = cas << Get Sessions();
Show( session_ids );

```

### Import Data

**Sintassi:** cas << Import Data(libref, dataset, <named_arguments>)

**Descrizione:** Importa una tabella da un server CAS. Gli argomenti facoltativi sono Invisible(0|1), Private(0|1) e UseLabelsForVarNames(0|1).

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Import Data( "Casuser.Big Class" );

```

### Is Connected

**Sintassi:** cas << Is Connected()

**Descrizione:** Restituisce 1 se esiste una connessione al server CAS attiva, in caso contrario 0.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
connected = cas << Is Connected();
Show( connected );

```

### Remove Table

**Sintassi:** cas << Remove Table(tablename, <Quiet(0|1), reMACs(0|1), Delete(0|1)>)

**Descrizione:** Questa operazione ignora la tabella in memoria. Il file creato con l&apos;operazione di salvataggio non è coinvolto. Se si specifica l&apos;eliminazione, la tabella sarà eliminata anche dal file system.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Remove Table( "Casuser", "Big Class" );

```

### Submit

**Sintassi:** cas << Submit(action)

**Descrizione:** Esegue un&apos;operazione CAS sul server CAS.

**JMP Versione aggiunta:** 15

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

**Sintassi:** cas << Terminate(sessionId))

**Descrizione:** Termina una sessione CAS di proprietà dell&apos;utente corrente. Un utente non può interrompere un ID di sessione connesso

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
session_id = cas << Get Session();
cas << Disconnect( NoTerminate );
cas = CAS Connect( Prompt( IfNeeded ) );
cas << Terminate( session_id );

```

### Terminate Sessions

**Sintassi:** cas << Terminate Sessions()

**Descrizione:** Termina tutte le sessioni CAS di proprietà dell&apos;utente corrente.

**JMP Versione aggiunta:** 15

```js

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Terminate Sessions();

```

