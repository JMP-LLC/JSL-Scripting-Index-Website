# SQL



## SQL Query

### CustomSQL

**Syntaxe :** obj << Custom SQL( sql )

**Description :** Modifie la requête en une requête SQL personnalisée et définit le SQL.

```js

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

### GenerateSQL

**Syntaxe :** sql = obj << Generate SQL

**Description :** Génère et renvoie l&apos;instruction SQL pour la requête.

```js

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
sql = obj << Generate SQL;

```

### Modify

**Syntaxe :** obj << Modify

**Description :** Ouvre la requête dans le générateur de requêtes.

```js

Names Default To Here( 1 );
query << Modify;

```

### PostQueryScript

**Syntaxe :** obj << Post Query Script( script_as_text )

**Description :** Définit le script JSL qui s&apos;exécutera systématiquement après l&apos;exécution de la requête.

```js

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

### QueryName

**Syntaxe :** obj << Query Name( <newName> )

**Description :** Obtient ou définit le nom de la requête. Le nom de la requête sera utilisé comme nom de la table de données qui résultera de l&apos;exécution de la requête.

```js

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Query Name( "New Name" );
name = obj << Query Name;
Show( name );

```

### Run

**Syntaxe :** result = obj << Run( <Private|Invisible>, <UpdateTable(table)>, <OnRunComplete(script)>, <OnRunCanceled(script)>, <OnError(script)> )

**Description :** Exécuter la requête. La requête peut s&apos;exécuter en avant ou en arrière-plan, selon la préférence du générateur de requêtes. Si Mettre à jour la table est spécifiée, la requête s&apos;exécutera en avant-plan. Si la requête s&apos;exécute en avant-plan, la valeur renvoyée par Exécuter sera la table de données résultant de la requête. Si la requête s&apos;exécute en arrière-plan ou si une erreur survient, Exécuter ne renvoie pas de valeur. Utiliser les arguments OnRunComplete, OnRunCanceled, et OnError pour exécuter un script une fois la requête terminée.

```js

Names Default To Here( 1 );
query << Run;

```

### Run Background

**Syntaxe :** result = obj << Run Background( <OnRunComplete(script), <Private|Invisible>>, <OnRunCanceled(script)>, <OnError(script)> )

**Description :** Exécuter la requête en arrière-plan. La table de données résultant de la requête sera ouverte une fois la requête terminée. Utiliser les arguments OnRunComplete, OnRunCanceled, et OnError pour exécuter un script une fois la requête terminée. Private peut être spécifié uniquement si un script OnRunComplete est également spécifié. Exécuter en arrière-plan ne renvoie pas de valeur.

```js

Names Default To Here( 1 );

query << Run Background(
	OnRunComplete(
		Write( "Number of rows in query result: ", N Rows( queryResult ) )
	)
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Background( OnRunComplete( MyRunCompleteFunc ) );

```

### Run Foreground

**Syntaxe :** result = obj << Run Foreground( <Private|Invisible>, <UpdateTable(table)>, <OnRunComplete(script)>, <OnRunCanceled(script)>, <OnError(script)> )

**Description :** Exécuter la requête en avant-plan. Si la requête réussit ou est annulée avec un résultat partiel, Exécuter en avant-plan renvoie la table de données résultant de la requête. Si la requête échoue, Exécuter en avant-plan ne renvoie pas de valeur. Utiliser les arguments OnRunComplete, OnRunCanceled, et OnError pour exécuter un script une fois la requête terminée.

```js

Names Default To Here( 1 );

query << Run Foreground(
	OnRunComplete(
		Write( "Number of rows in query result: ", N Rows( queryResult ) )
	)
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Foreground( OnRunComplete( MyRunCompleteFunc ) );

```

### Save

**Syntaxe :** obj << Save

**Description :** Enregistre la requête dans son fichier associé. L&apos;enregistrement échoue si la requête n&apos;a pas encore de fichier associé.

```js

Names Default To Here( 1 );
obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

### Save As

**Syntaxe :** obj << Save As( path, <ReplaceExisting(0|1)> )

**Description :** Enregistre la requête dans le fichier spécifié. Si le fichier existe déjà, l&apos;enregistrement échouera à moins que Remplacer le fichier existant soit Vrai.

```js

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Save As( "c:\users\public\temp.jmpquery" );

```

### As SQL Expr

**Syntaxe :** y = As SQL Expr( x, <style> )

**Description :** Renvoie une chaîne qui contient l&apos;expression convertie en syntaxe SQL valide pouvant être utilisée dans une instruction SQL Select.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**Syntaxe :** Close Database Connection(databaseConnectionHandle)

**Description :** Ferme la connexion à la base de données renvoyée par la commande Créer une connexion à la base de données

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**Syntaxe :** dbc = Create Database Connection( dataSourceName|"Connect Dialog", <DriverPrompt(true|false)> )

**Description :** Crée une connexion à la base de données et renvoie un handle à la connexion. Si DriverPrompt est Vrai, l&apos;utilisateur sera invité à utiliser l&apos;invite du pilote ODBC pour fournir les informations d&apos;identification, si nécessaire.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**Syntaxe :** dt = Execute SQL(databaseConnectionHandle|dataConnector,  "SELECT ..."|"SQLFILE=..."|tableName, <invisible(0|1)>, <outputTableName>, <Batch Submit(0|1)> )

**Description :** Exécute SQL sur une connexion à la base de données renvoyée par la commande Créer une connexion à la base de données ou un connecteur de données. L&apos;activation de l&apos;envoi par lot permet de recevoir plusieurs instructions SQL et de renvoyer une liste des résultats (pilotes qui prennent en charge cette fonction uniquement).

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```js

Names Default To Here( 1 );
dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Exemple 2**

```js

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Exemple 3**

```js

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### New Data Connector

**Syntaxe :** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Description :** Créez un objet de configuration de connecteur de données.

**JMP Version ajoutée :** 18

**Exemple 1**

```js

Names Default To Here( 1 );

// Create a data connector from scratch
dc = New Data Connector(
	Type( "ODBC" ),
	Database( "foo" ),
	Server( "bar.example.com" )
);
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Exemple 2**

```js

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

**Syntaxe :** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );



obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Description :** Crée un objet SQL Query pour la connexion, colonnes et table spécifiées, ou pour la requête SQL personnalisée spécifiée. Utilisez le générateur de requêtes pour générer des scripts qui créent de requêtes.

```js

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

```js

Names Default To Here( 1 );

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**Syntaxe :** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, <invisible | private>, <outputTableName> )

**Description :** Ouvre une base de données en utilisant ODBC, exécute la SQL donnée, et met les données dans une table de données avec le nom du tableau de sortie donné.

**JMP Version ajoutée :** Avant la version 14

```js

Names Default To Here( 1 );
Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**Syntaxe :** result = Query( < < dt1 | Table( dt1, alias1 ) >, ..., < dtN | Table( dtN, aliasN ) > >,

     <Private|Invisible>, <Scalar>, sqlStatement )

**Description :** Exécute une requête SQL sur les tables de données JMP. sqlStatement (la requête SQL, plus probablement une instruction SELECT) est exigé et doit être le dernier argument. Les tables de données JMP référencées par l&apos;instruction SQL doivent être transmises à la requête() en tant qu&apos;arguments, à l&apos;aide de la table(dt, "alias"), pour créer un alias de la table que SQL peut utiliser si cela est souhaité. Invisible ou Private peuvent être transmis pour contrôler la visibilité de la table de données créée. Si l&apos;instruction SQL renvoie une valeur unique, transmettre Scalar pour renvoyer la valeur unique au lieu de la table de données.

**JMP Version ajoutée :** Avant la version 14

```js

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

