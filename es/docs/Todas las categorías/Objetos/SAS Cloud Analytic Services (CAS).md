# SAS Cloud Analytic Services (CAS)



## CAS Action

### Mensajes del elemento

#### Action

**Sintaxis:** action  << Action(...)

**Descripción:** Establece el nombre de acción para la acción CAS. El mensaje de acción puede aceptar la especificación actionset.action completa.

**JMP Versión agregada:** 15

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

**Sintaxis:** action  << Action Set(...)

**Descripción:** Establece el conjunto de acciones para la acción CAS. Las acciones CAS se agrupan por conjunto de acciones. Esto es opcional, puesto que el mensaje de acción CAS puede aceptar la especificación actionset.action completa.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Action Set( "builtins" );

```

#### Authorization

**Sintaxis:** action << Authorization(<1|0>)

**Descripción:** Establece un requisito de autorización para una acción CAS. Las acciones CAS requieren automáticamente Conexión, Inicio de sesión, Autorización y Sesión.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Connection(<1|0>)

**Descripción:** Establece un requisito de conexión para una acción CAS. Las acciones CAS requieren automáticamente Conexión, Inicio de sesión, Autorización y Sesión.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Endpoint(...)

**Descripción:** Establece el punto de conexión para la acción CAS. Un punto de conexión es el recurso relacionado con la URL del servidor CAS de base. En el caso de http://cloud.example.com:8777/cas/sessions, /cas/sessions es el punto de conexión. Para la mayoría de las acciones CAS, utilice el mensaje de acción donde se seleccionará automáticamente el punto de conexión correcto.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Endpoint( "/cas/sessions" );

```

#### File

**Sintaxis:** action << File(...)

**Descripción:** Establece el parámetro del archivo para una acción CAS. Cualquier variable de ruta en el nombre de archivo se expande. La acción CAS mueve automáticamente cualquier argumento JSON a un argumento de parámetros JSON si se utiliza el mensaje de archivo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Changed Resources()

**Descripción:** Obtiene los recursos modificados de una acción enviada como arreglo asociativo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Disposition()

**Descripción:** Obtiene la disposición de una acción enviada como arreglo asociativo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get JSON()

**Descripción:** Obtiene los valores devueltos de una acción CAS enviada en forma de cadena JSON.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Log()

**Descripción:** Obtiene el registro de una acción CAS enviada.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Log Entries()

**Descripción:** Obtiene el registro como lista de entradas de registro de una acción CAS enviada.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Metrics

**Descripción:** Obtiene las métricas de una acción enviada como arreglo asociativo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Results()

**Descripción:** Obtiene los resultados de una acción enviada como arreglo asociativo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << JSON(...)

**Descripción:** Establece el argumento JSON para la acción CAS. Las acciones CAS tomarán cadenas JSON o arreglos asociativos JSL como argumentos. Los argumentos JSON se documentan para cada acción SAS CAS.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << JSON Parameters(...)

**Descripción:** Establece el argumento del parámetro JSON para la acción CAS. Las acciones CAS como table.upload utilizan un archivo en combinación con parámetros JSON para trasladar una tabla a CAS. La acción CAS trasladará automáticamente cualquier argumento JSON a un argumento de parámetros JSON si se utiliza el mensaje de archivo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Login(<1|0>s))

**Descripción:** Establece un requisito de inicio de sesión para una acción CAS. Las acciones CAS requieren automáticamente Conexión, Inicio de sesión, Autorización y Sesión.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Make Report

**Descripción:** Genera un informe de una acción CAS enviada.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Method(<"PUT" | "POST" | "GET" | "PATCH"| "HEAD">)

**Descripción:** Establece el método HTTP para la acción CAS. Algunos de los métodos HTTP son "PUT", "POST", "GET", "PATCH" y "HEAD". Para la mayoría de las acciones CAS, se seleccionará automáticamente el método HTTP correcto.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Method( "PUT" );

```

#### Session

**Sintaxis:** action << Session(<1|0>)

**Descripción:** Establece un requisito de sesión para una acción CAS. Las acciones CAS requieren automáticamente Conexión, Inicio de sesión, Autorización y Sesión.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Timeout(120)

**Descripción:** Establece un nuevo valor de tiempo de espera en la acción CAS.

**JMP Versión agregada:** 17

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

### Mensajes del elemento

#### Code

**Sintaxis:** action << Code(...)

**Descripción:** Establece el código DATA step para la corrida. El servidor CAS es capaz de ejecutar un subconjunto de código DATA step de SAS. Consulte la documentación de SAS para conocer las limitaciones concretas.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << File(...)

**Descripción:** Establece el código DATA step para la corrida. Todas las variables de ruta se expanden. El servidor CAS puede ejecutar un subconjunto de código DATA step de SAS. Consulte la documentación de SAS para conocer las limitaciones concretas.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Changed Resources

**Descripción:** Obtiene los recursos modificados de una acción enviada como lista.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Disposition

**Descripción:** Obtiene la disposición de una acción enviada como arreglo asociativo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get JSON

**Descripción:** Obtiene los valores devueltos de una acción CAS enviada en forma de cadena JSON.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Log

**Descripción:** Obtiene el registro de una acción CAS enviada.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Log Entries

**Descripción:** Obtiene el registro como lista de entradas de registro de una acción CAS enviada.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Metrics

**Descripción:** Obtiene las métricas de una acción enviada como arreglo asociativo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Output Data Sets()

**Descripción:** Obtiene una lista de conjuntos de datos de salida (library.tablename) producidos por la acción enviada.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Get Results

**Descripción:** Obtiene los resultados de una acción enviada como arreglo asociativo.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Has Output Data Sets

**Descripción:** Devuelve 1 si la acción DATA step de CAS produjo datos de salida.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << NThreads(<integer|"MAX">)

**Descripción:** Especifica el número de subprocesos que se utilizan para ejecutar el programa. Para los servidores distribuidos, este valor especifica el número de subprocesos en cada trabajador que deben utilizarse para ejecutar el programa.

**JMP Versión agregada:** 15

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

**Sintaxis:** action << Single(<NO|NOINPUT|YES>)

**Descripción:** Especifica cuándo se debe restringir la ejecución a un único subproceso. "NO" especifica que el programa se ejecutará en el número de subprocesos determinados por el parámetro N subprocesos. "NOINPUT" especifica que se ejecutará el programa en un subproceso cuando no haya conjuntos de datos de entrada. Cuando sí haya conjuntos de datos de entrada, el parámetro N subprocesos determina el número de subprocesos que se utilizarán. Para los servidores distribuidos, si el programa no tiene conjuntos de datos de entrada, este se ejecuta en un subproceso en un trabajador. De lo contrario, el parámetro N subprocesos determina el número de subprocesos que se utilizarán. "YES" especifica que se invalidará el parámetro N subprocesos y se ejecutará el programa en un subproceso. Para los servidores distribuidos, el programa se ejecuta en un subproceso en un trabajador. El valor predeterminado es "NO"

**JMP Versión agregada:** 15

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

### Mensajes del elemento

#### Connect

**Sintaxis:** cas << Connect(<URL(..)>,<Username(...)>, <Password(...)>, <Prompt(Always | Never | IfNeeded>), <Session("session id")>, <Proxy Server("http://my_proxy:80")>, <Proxy User("proxy_username")>, <Bypass Proxy("http://localhost:80")>, <Certificates("my_certificates.crt")>, <Verify Certificates(1 | 0)>, <No Verify Certificates(1 | 0)>, <Timeout(seconds)>, <Authorization Method("BASIC" | "BEARER")>)

**Descripción:** Se conecta a un nuevo servidor CAS. La conexión CAS utiliza los argumentos URL, User name y Password, y opcionalmente Prompt y Session. Prompt puede ser IfNeeded, Always o Never. URL, User name y Password se pueden omitir si el argumento Prompt es IfNeeded o Always. El valor predeterminado de Prompt es Never. Session se puede utilizar para volver a conectarse a una sesión CAS existente. La sesión debe ser válida para la URL, el nombre de usuario y la contraseña utilizados en la conexión. El argumento opcional Certificates es útil para proporcionar certificados de confianza para conexiones https a CAS. El argumento opcional Verify Certificates o No Verify Certificates es útil para aceptar temporalmente los certificados autofirmados. El argumento opcional Proxy Server es útil para proporcionar un host proxy en un entorno proxy. El argumento opcional Proxy User es útil para proporcionar información de usuario y contraseña para un entorno proxy. El argumento opcional Bypass Proxy se utiliza para omitir el proxy para determinados hosts. El argumento opcional Timeout establece un valor de tiempo de espera para las operaciones de la conexión CAS. El argumento opcional Authorization Method especifica cómo se conecta JMP a CAS y es independiente de la implementación de CAS.

**JMP Versión agregada:** 15

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

**Sintaxis:** cas << Delete Table(tablename, <Quiet(0|1), reMACs(0|1), Remove(0|1)>)

**Descripción:** Esta acción elimina la tabla del sistema de archivos. La tabla en memoria no se ve afectada. Si especifica Silenciar, se suprimirán los errores de una tabla no existente. Si especifica remACs, se eliminarán los controles de acceso para una tabla. Si especifica Quitar, también se eliminará la tabla de la memoria.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class", Save( 1 ) );
cas << Delete Table( "Casuser", "Big Class" );

```

#### Disconnect

**Sintaxis:** cas << Disconnect(<Terminate | NoTerminate>)

**Descripción:** Se desconecta de un servidor CAS y, opcionalmente, finaliza la sesión. De forma predeterminada, la sesión finaliza al desconectarse.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

#### Export Data

**Sintaxis:** cas << Export Data(jmp_data_table, cas_libref, cas_dataset, <named_arguments>)

**Descripción:** Exporta una tabla a un servidor CAS. jmp_data_table es la tabla de datos de JMP que se exporta, mientras que cas_libref y cas_dataset representan las ubicaciones de destino en el servidor CAS. El argumento con nombre opcional es Save(1|0). Cuando se exporta una tabla a CAS, no se guarda en el sistema de archivos CAS a menos que se utilice la opción Guardar. La mayoría de las acciones CAS tienen lugar en la memoria.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

#### Get Data Sets

**Sintaxis:** cas << Get Data Sets(<"caslib">)

**Descripción:** Obtiene una lista de conjuntos de datos CAS disponibles. Estos conjuntos de datos se encuentran en el sistema de archivos CAS. El argumento opcional limita la lista de conjuntos de datos a la librería CAS. Si no se utiliza ningún argumento, la lista de conjuntos de datos contiene el nombre del conjunto de datos completo (library.dataset). Si se utiliza el argumento, la lista de conjuntos de datos es una lista de nombres de conjuntos de datos.

**JMP Versión agregada:** 15

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

**Sintaxis:** cas << Get Libraries()

**Descripción:** Obtiene una lista de librerías CAS disponibles.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
libraries = cas << Get Libraries();
Show( libraries );

```

#### Get Session

**Sintaxis:** cas << Get Session()

**Descripción:** Obtiene el ID de sesión del servidor CAS. Se puede utilizar para las futuras conexiones siempre que la sesión CAS siga disponible.

**JMP Versión agregada:** 15

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

**Sintaxis:** cas << Get Sessions()

**Descripción:** Obtiene las sesiones disponibles para el usuario actual.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_ids = cas << Get Sessions();
Show( session_ids );

```

#### Import Data

**Sintaxis:** cas << Import Data(libref, dataset, <named_arguments>)

**Descripción:** Importa una tabla de un servidor CAS. Los argumentos opcionales con nombre son Invisible(0|1), Private(0|1) y UseLabelsForVarNames(0|1).

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Import Data( "Casuser.Big Class" );

```

#### Is Connected

**Sintaxis:** cas << Is Connected()

**Descripción:** Devuelve 1 si hay una conexión a un servidor CAS activa y 0 en caso contrario.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
connected = cas << Is Connected();
Show( connected );

```

#### Remove Table

**Sintaxis:** cas << Remove Table(tablename, <Quiet(0|1), reMACs(0|1), Delete(0|1)>)

**Descripción:** Esta acción anula la tabla en memoria. Esto no afecta al archivo que se creó con la acción de guardar. Si se especifica la eliminación, también se elimina la tabla del sistema de archivos.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Remove Table( "Casuser", "Big Class" );

```

#### Submit

**Sintaxis:** cas << Submit(action)

**Descripción:** Envía una acción CAS al servidor CAS.

**JMP Versión agregada:** 15

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

**Sintaxis:** cas << Terminate(sessionId))

**Descripción:** Finaliza una sesión CAS que pertenezca al usuario actual. Un usuario no puede finalizar un ID de sesión conectado.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
session_id = cas << Get Session();
cas << Disconnect( NoTerminate );
cas = CAS Connect( Prompt( IfNeeded ) );
cas << Terminate( session_id );

```

#### Terminate Sessions

**Sintaxis:** cas << Terminate Sessions()

**Descripción:** Finaliza todas las sesiones CAS que pertenezcan al usuario actual.

**JMP Versión agregada:** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Terminate Sessions();

```

