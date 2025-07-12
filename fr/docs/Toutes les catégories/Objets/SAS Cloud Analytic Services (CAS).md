# SAS Cloud Analytic Services (CAS)



## CAS Action

### Messages d'éléments

#### Action

**Syntaxe :** action  << Action(...)

**Description :** Définit le nom d&apos;action pour l&apos;action CAS. Le message Action peut accepter la spécification complète actionset.action.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action  << Action Set(...)

**Description :** Définit l&apos;ensemble d&apos;actions pour l&apos;action CAS. Les actions CAS sont groupées par ensemble d&apos;actions. Cela est facultatif puisque le message CAS Action peut accepter la spécification complète actionset.action.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Action Set( "builtins" );

```

#### Authorization

**Syntaxe :** action << Authorization(<1|0>)

**Description :** Définit une exigence d&apos;autorisation pour une action CAS. Les actions CAS requièrent automatiquement Connect, Login, Authorization et Session.

**JMP Version ajoutée :** 15

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
action = New CAS Action(
	Action( "dataStep.runCode" ),
	JSON( runCode ),
	Authorization( 1 )
);

```

#### Connection

**Syntaxe :** action << Connection(<1|0>)

**Description :** Définit une exigence de connexion pour une action CAS. Les actions CAS requièrent automatiquement Connect, Login, Authorization et Session.

**JMP Version ajoutée :** 15

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
action = New CAS Action(
	Action( "dataStep.runCode" ),
	JSON( runCode ),
	Connection( 1 )
);

```

#### Endpoint

**Syntaxe :** action << Endpoint(...)

**Description :** Définit le point final de l&apos;action CAS. Le point final est la ressource associée à l&apos;URL de base du serveur CAS. Dans le cas de http://cloud.example.com:8777/cas/sessions, /cas/sessions est le point final. La plupart des actions CAS utilisent le message Action où le point final approprié sera automatiquement sélectionné.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Endpoint( "/cas/sessions" );

```

#### File

**Syntaxe :** action << File(...)

**Description :** Définit le paramètre de fichier pour une action CAS. Toutes les variables de chemin d&apos;accès se trouvant dans le nom de fichier sont développées. L&apos;action CAS change automatiquement tout argument JSON en argument JSON Parameters si le message File est utilisé.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Changed Resources()

**Description :** Obtient les ressources modifiées par une action soumise sous forme d&apos;un tableau associatif.

**JMP Version ajoutée :** 15

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
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol"
 => JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"},
"nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Changed Resources: " || Char( action << Get Changed Resources ) || "\!n" );

```

#### Get Disposition

**Syntaxe :** action << Get Disposition()

**Description :** Obtient la disposition par une action soumise sous forme d&apos;un tableau associatif.

**JMP Version ajoutée :** 15

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
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol"
 => JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"},
"nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Disposition: " || Char( action << Get Disposition ) || "\!n" );

```

#### Get JSON

**Syntaxe :** action << Get JSON()

**Description :** Obtient les valeurs renvoyées à partir d&apos;une action CAS soumise sous forme de chaîne JSON.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Log()

**Description :** Obtient le journal d&apos;une action CAS soumise.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Log Entries()

**Description :** Obtient le journal d&apos;une action CAS soumise sous la forme d&apos;une liste d&apos;entrées de journal.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Metrics

**Description :** Obtient les métriques par une action soumise sous forme d&apos;un tableau associatif.

**JMP Version ajoutée :** 15

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
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol"
 => JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"},
"nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Get Metrics: " || Char( action << Get Metrics ) || "\!n" );

```

#### Get Results

**Syntaxe :** action << Get Results()

**Description :** Obtient les résultats d&apos;une action soumise sous forme d&apos;un tableau associatif.

**JMP Version ajoutée :** 15

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
"effects" => {["vars" => {"species", "season"}, "interaction" => "BAR"]}, "printsol"
 => JSON Literal( true ), "cl" => JSON Literal( false ), "dfmethod" => "RESIDUAL"];
aa_json["random"] = {["depVars" => "miles", "effects" => {["vars" => {"subject"},
"nest" => {"species"}]}]};
aa_json["method"] = "REML";
action = New CAS Action( Action( "mixed.mixed" ), JSON( aa_json ) );
cas << Submit( action );
Write( "\!Results: " || Char( action << Get Results ) || "\!n" );

```

#### JSON

**Syntaxe :** action << JSON(...)

**Description :** Définit l&apos;argument JSON pour l&apos;action CAS. Les actions CAS considèreront les chaînes JSON ou les tableaux associatifs JSL comme des arguments. Les arguments JSON sont documentés pour chaque action CAS SAS.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << JSON Parameters(...)

**Description :** Définit l&apos;argument JSON Parameter pour l&apos;action CAS. Les actions CAS telles que table.upload utilisent un fichier en combinaison avec les paramètres JSON pour déplacer une table de données dans CAS. L&apos;action CAS changera automatiquement tout argument JSON en un argument JSON Parameters si le message File est utilisé.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Login(<1|0>s))

**Description :** Définit une exigence de login pour une action CAS. Les actions CAS requièrent automatiquement Connect, Login, Authorization et Session.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Make Report

**Description :** Génère un rapport à partir d&apos;une action CAS soumise.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Method(<"PUT" | "POST" | "GET" | "PATCH"| "HEAD">)

**Description :** Définit la méthode HTTP pour l&apos;action CAS. Les méthodes HTTP incluent "PUT", "POST", "GET", "PATCH", "HEAD". Pour la plupart des actions CAS, la méthode HTTP appropriée sera sélectionnée automatiquement.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

action = New CAS Action();
action << Method( "PUT" );

```

#### Session

**Syntaxe :** action << Session(<1|0>)

**Description :** Définit une exigence de session pour une action CAS. Les actions CAS requièrent automatiquement Connect, Login, Authorization et Session.

**JMP Version ajoutée :** 15

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
action = New CAS Action(
	Action( "dataStep.runCode" ),
	JSON( runCode ),
	Session( 1 )
);

```

#### Timeout

**Syntaxe :** action << Timeout(120)

**Description :** Définit une nouvelle valeur de dépassement de temps dans l&apos;action CAS.

**JMP Version ajoutée :** 17

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

### Messages d'éléments

#### Code

**Syntaxe :** action << Code(...)

**Description :** Définit le code d&apos;étape DATA à exécuter. Le serveur CAS peut exécuter un sous-ensemble de code d&apos;étape DATA SAS. Voir la documentation SAS pour les restrictions spécifiques.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << File(...)

**Description :** Définit le code d&apos;étape DATA à exécuter. Toutes les variables de chemin d&apos;accès sont étendues. Le serveur CAS peut exécuter un sous-ensemble de code d&apos;étape DATA SAS. Voir la documentation SAS pour les restrictions spécifiques.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Changed Resources

**Description :** Obtient les ressources modifiées par une action soumise sous forme de liste.

**JMP Version ajoutée :** 15

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
Write(
	"\!Get Changed Resources: " || Char( action << Get Changed Resources ) || "\!n"
);

```

#### Get Disposition

**Syntaxe :** action << Get Disposition

**Description :** Obtient la disposition par une action soumise sous forme d&apos;un tableau associatif.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get JSON

**Description :** Obtient les valeurs renvoyées à partir d&apos;une action CAS soumise sous forme de chaîne JSON.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Log

**Description :** Obtient le journal d&apos;une action CAS soumise.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Log Entries

**Description :** Obtient le journal d&apos;une action CAS soumise sous la forme d&apos;une liste d&apos;entrées de journal.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Metrics

**Description :** Obtient les métriques par une action soumise sous forme d&apos;un tableau associatif.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Output Data Sets()

**Description :** Obtient une liste des ensembles de données de sortie (libray.tablename) produits par l&apos;action soumise.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Get Results

**Description :** Obtient les résultats d&apos;une action soumise sous forme d&apos;un tableau associatif.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Has Output Data Sets

**Description :** Renvoie 1 si l&apos;action de l&apos;étape CAS DATA a produit des données de sortie.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << NThreads(<integer|"MAX">)

**Description :** Spécifie le nombre de threads utilisés pour exécuter le programme. Pour les serveurs distribués, cette valeur spécifie le nombre de threads sur chaque worker à utiliser pour exécuter le programme.

**JMP Version ajoutée :** 15

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

**Syntaxe :** action << Single(<NO|NOINPUT|YES>)

**Description :** Spécifie quand limiter l&apos;exécution à un seul thread. "NO" spécifie d&apos;exécuter le programme en respectant le nombre de threads spécifié par le paramètre nThreads. "NOINPUT" spécifie d&apos;exécuter le programme dans un thread lorsqu&apos;il n&apos;y a pas d&apos;ensemble de données d&apos;entrée. Lorsqu&apos;il y a des ensembles de données d&apos;entrée, le paramètre nThreads spécifie le nombre de threads à utiliser. Pour les serveurs distribués, si le programme n&apos;a pas d&apos;ensemble de données d&apos;entrée, il s&apos;exécute dans un thread et sur un worker. Sinon, le paramètre nThreads spécifie le nombre de threads à utiliser. "YES" spécifie d&apos;outrepasser le paramètre nThreads et d&apos;exécuter le programme dans un thread. Pour les serveurs distribués, le programme s&apos;exécute sur un thread et un worker. Le paramètre par défaut est "NO"

**JMP Version ajoutée :** 15

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

### Messages d'éléments

#### Connect

**Syntaxe :** cas << Connect(<URL(..)>,<Username(...)>, <Password(...)>, <Prompt(Always | Never | IfNeeded>), <Session("session id")>, <Proxy Server("http://my_proxy:80")>, <Proxy User("proxy_username")>, <Bypass Proxy("http://localhost:80")>, <Certificates("my_certificates.crt")>, <Verify Certificates(1 | 0)>, <No Verify Certificates(1 | 0)>, <Timeout(seconds)>, <Authorization Method("BASIC" | "BEARER")>)

**Description :** Se connecte à un nouveau serveur CAS. CAS Connect utilise l&apos;URL, le nom d&apos;utilisateur, les arguments de mot de passe et, en option, l&apos;invite et la session. L&apos;invite peut être IfNeeded, Always ou Never. L&apos;URL, le nom d&apos;utilisateur et le mot de passe peuvent être omis si l&apos;argument d&apos;invite est IfNeeded ou Always. La valeur par défaut pour l&apos;invite est Never. La session peut servir à se reconnecter à une session CAS existante. La session doit être valide pour l&apos;URL, le nom d&apos;utilisateur et le mot de passe utilisés pour la connexion. L&apos;argument facultatif Certificates est utile pour fournir des certificats de confiance à CAS pour les connexions https. L&apos;argument facultatif Verify Certificates ou No Verify Certificates est utile pour accepter temporairement les certificats auto-signés. L&apos;argument facultatif Proxy Server est utile pour fournir un hôte proxy dans un environnement proxy. L&apos;argument facultatif Proxy User est utile pour fournir des informations sur l&apos;utilisateur et le mot de passe pour un environnement proxy. L&apos;argument facultatif Bypass Proxy permet d&apos;ignorer le proxy pour certains hôtes. L&apos;argument facultatif Timeout définit une valeur de dépassement de temps pour les opérations de connexion à CAS. L&apos;argument facultatif Authorization Method spécifie comment JMP se connecte à CAS. Cela est dépendant du déploiement de CAS.

**JMP Version ajoutée :** 15

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

**Syntaxe :** cas << Delete Table(tablename, <Quiet(0|1), reMACs(0|1), Remove(0|1)>)

**Description :** Cette action supprime la table de données filesystem. La table de données en mémoire n&apos;est pas affectée. Spécifier Quiet supprimera les erreurs en cas de table de données inexistante. Spécifier remACs supprimera les commandes d&apos;accès pour une table de données. Spécifier Remove supprimera également la table de données de la mémoire.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"Casuser",
	"Big Class",
	Save( 1 )
);
cas << Delete Table( "Casuser", "Big Class" );

```

#### Disconnect

**Syntaxe :** cas << Disconnect(<Terminate | NoTerminate>)

**Description :** Se déconnecte d&apos;un serveur CAS et, de façon facultative, termine la session. Par défaut, la session est terminée lors de la déconnexion.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = New CAS Server();
url = "http://myCasURL";
cas << Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
cas << Disconnect( Terminate( 1 ) ); //disconnect CAS and terminate

```

#### Export Data

**Syntaxe :** cas << Export Data(jmp_data_table, cas_libref, cas_dataset, <named_arguments>)

**Description :** Exporte une table de données dans un serveur CAS. La table jmp_data_table est la table de données JMP à exporter, tandis que cas_libref et cas_dataset sont les emplacements cibles sur le serveur CAS. L&apos;argument nommé facultatif est Save(1|0). Lorsqu&apos;une table de données est exportée dans CAS, elle n&apos;est pas conservée dans le système de fichiers CAS, à moins que l&apos;option Enregistrer soit utilisée. La plupart des actions CAS se trouvent en mémoire.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );

```

#### Get Data Sets

**Syntaxe :** cas << Get Data Sets(<"caslib">)

**Description :** Obtient une liste des ensembles de données CAS disponibles. Ces ensembles de données se trouvent dans le système de fichiers CAS. L&apos;argument facultatif limite la liste des ensembles de données dans la bibliothèque CAS. Si aucun argument n&apos;est spécifié, la liste contiendra le nom complet de l&apos;ensemble de données (library.dataset). Si l&apos;argument est utilisé, la liste sera une liste de noms d&apos;ensembles de données.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data(
	Open( "$SAMPLE_DATA\Big Class.jmp" ),
	"Casuser",
	"Big Class",
	Save( 1 )
);
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );
cas << Delete Table( "Casuser", "Big Class" );
datasets = cas << Get Data Sets( "casuser" );
Show( datasets );

```

#### Get Libraries

**Syntaxe :** cas << Get Libraries()

**Description :** Obtient une liste des bibliothèques CAS disponibles.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
libraries = cas << Get Libraries();
Show( libraries );

```

#### Get Session

**Syntaxe :** cas << Get Session()

**Description :** Obtient l&apos;ID de la session à partir du serveur CAS. Celui-ci peut être utilisé pour les reconnexions ultérieures dès lors que la session CAS reste disponible.

**JMP Version ajoutée :** 15

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

**Syntaxe :** cas << Get Sessions()

**Description :** Obtient les sessions disponibles pour l&apos;utilisateur actuel.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

url = "http://myCasURL";
cas = CAS Connect( URL( url ), Username( "my_username" ), Prompt( "IfNeeded" ) );
session_ids = cas << Get Sessions();
Show( session_ids );

```

#### Import Data

**Syntaxe :** cas << Import Data(libref, dataset, <named_arguments>)

**Description :** Importe une table depuis un serveur CAS. Les arguments nommés facultatifs sont Invisible(0|1), Private(0|1) et UseLabelsForVarNames(0|1).

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Import Data( "Casuser.Big Class" );

```

#### Is Connected

**Syntaxe :** cas << Is Connected()

**Description :** Renvoie 1 si une connexion au serveur CAS est active, 0 dans le cas contraire.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
connected = cas << Is Connected();
Show( connected );

```

#### Remove Table

**Syntaxe :** cas << Remove Table(tablename, <Quiet(0|1), reMACs(0|1), Delete(0|1)>)

**Description :** Cette action supprime la table en mémoire. Le fichier qui avait été créé lors de la sauvegarde n&apos;est pas affecté. Cette action  entraînera également la suppression de la table dans le système de fichiers.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Export Data( Open( "$SAMPLE_DATA\Big Class.jmp" ), "Casuser", "Big Class" );
cas << Remove Table( "Casuser", "Big Class" );

```

#### Submit

**Syntaxe :** cas << Submit(action)

**Description :** Soumet une action CAS au serveur CAS.

**JMP Version ajoutée :** 15

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

**Syntaxe :** cas << Terminate(sessionId))

**Description :** Termine une session CAS de l&apos;utilisateur actuel. Un utilisateur ne peut pas terminer l&apos;ID d&apos;une session connectée

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
session_id = cas << Get Session();
cas << Disconnect( NoTerminate );
cas = CAS Connect( Prompt( IfNeeded ) );
cas << Terminate( session_id );

```

#### Terminate Sessions

**Syntaxe :** cas << Terminate Sessions()

**Description :** Termine toutes les sessions CAS de l&apos;utilisateur actuel.

**JMP Version ajoutée :** 15

```jsl

Names Default To Here( 1 );

cas = Current CAS Connection();
cas << Terminate Sessions();

```

