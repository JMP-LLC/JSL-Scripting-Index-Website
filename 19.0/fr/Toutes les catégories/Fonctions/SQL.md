# SQL



## Constructeurs associés

### New SQL Query

**Syntaxe :** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Description :** Crée un objet SQL Query pour la connexion, colonnes et table spécifiées, ou pour la requête SQL personnalisée spécifiée. Utilisez le générateur de requêtes pour générer des scripts qui créent de requêtes.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### As SQL Expr

**Syntaxe :** y = As SQL Expr( x, &lt;style&gt; )

**Description :** Renvoie une chaîne qui contient l&apos;expression convertie en syntaxe SQL valide pouvant être utilisée dans une instruction SQL Select.

**JMP Version ajoutée :** Avant la version 14

```jsl

As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**Syntaxe :** Close Database Connection(databaseConnectionHandle)

**Description :** Ferme la connexion à la base de données renvoyée par la commande Créer une connexion à la base de données

**JMP Version ajoutée :** Avant la version 14

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**Syntaxe :** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Description :** Crée une connexion à la base de données et renvoie un handle à la connexion. Si DriverPrompt est Vrai, l&apos;utilisateur sera invité à utiliser l&apos;invite du pilote ODBC pour fournir les informations d&apos;identification, si nécessaire.

**JMP Version ajoutée :** Avant la version 14

```jsl

dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**Syntaxe :** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Description :** Exécute SQL sur une connexion à la base de données renvoyée par la commande Créer une connexion à la base de données ou un connecteur de données. L&apos;activation de l&apos;envoi par lot permet de recevoir plusieurs instructions SQL et de renvoyer une liste des résultats (pilotes qui prennent en charge cette fonction uniquement).

**JMP Version ajoutée :** Avant la version 14

#### Exemple 1

```jsl

dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

#### Exemple 2

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

#### Exemple 3

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### New Data Connector

**Syntaxe :** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Description :** Créez un objet de configuration de connecteur de données.

**JMP Version ajoutée :** 18

#### Exemple 1

```jsl


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

#### Exemple 2

```jsl


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

**Syntaxe :** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Description :** Crée un objet SQL Query pour la connexion, colonnes et table spécifiées, ou pour la requête SQL personnalisée spécifiée. Utilisez le générateur de requêtes pour générer des scripts qui créent de requêtes.

**JMP Version ajoutée :** Avant la version 14

```jsl


obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**Syntaxe :** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Description :** Ouvre une base de données en utilisant ODBC, exécute la SQL donnée, et met les données dans une table de données avec le nom du tableau de sortie donné.

**JMP Version ajoutée :** Avant la version 14

```jsl

Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**Syntaxe :** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Description :** Exécute une requête SQL sur les tables de données JMP. sqlStatement (la requête SQL, plus probablement une instruction SELECT) est exigé et doit être le dernier argument. Les tables de données JMP référencées par l&apos;instruction SQL doivent être transmises à la requête() en tant qu&apos;arguments, à l&apos;aide de la table(dt, "alias"), pour créer un alias de la table que SQL peut utiliser si cela est souhaité. Invisible ou Private peuvent être transmis pour contrôler la visibilité de la table de données créée. Si l&apos;instruction SQL renvoie une valeur unique, transmettre Scalar pour renvoyer la valeur unique au lieu de la table de données.

**JMP Version ajoutée :** Avant la version 14

```jsl

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

## SQL Query

### Messages d'éléments

#### CustomSQL

**Syntaxe :** obj &lt;&lt; Custom SQL( sql )

**Description :** Modifie la requête en une requête SQL personnalisée et définit le SQL.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**Syntaxe :** sql = obj &lt;&lt; Generate SQL

**Description :** Génère et renvoie l&apos;instruction SQL pour la requête.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
sql = obj << Generate SQL;

```

#### Modify

**Syntaxe :** obj &lt;&lt; Modify

**Description :** Ouvre la requête dans le générateur de requêtes.

```jsl

query << Modify;

```

#### PostQueryScript

**Syntaxe :** obj &lt;&lt; Post Query Script( script_as_text )

**Description :** Définit le script JSL qui s&apos;exécutera systématiquement après l&apos;exécution de la requête.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**Syntaxe :** obj &lt;&lt; Query Name( &lt;newName&gt; )

**Description :** Obtient ou définit le nom de la requête. Le nom de la requête sera utilisé comme nom de la table de données qui résultera de l&apos;exécution de la requête.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Query Name( "New Name" );
name = obj << Query Name;
Show( name );

```

#### Run

**Syntaxe :** result = obj &lt;&lt; Run( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Description :** Exécuter la requête. La requête peut s&apos;exécuter en avant ou en arrière-plan, selon la préférence du générateur de requêtes. Si Mettre à jour la table est spécifiée, la requête s&apos;exécutera en avant-plan. Si la requête s&apos;exécute en avant-plan, la valeur renvoyée par Exécuter sera la table de données résultant de la requête. Si la requête s&apos;exécute en arrière-plan ou si une erreur survient, Exécuter ne renvoie pas de valeur. Utiliser les arguments OnRunComplete, OnRunCanceled, et OnError pour exécuter un script une fois la requête terminée.

```jsl

query << Run;

```

#### Run Background

**Syntaxe :** result = obj &lt;&lt; Run Background( &lt;OnRunComplete(script), &lt;Private|Invisible&gt;&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Description :** Exécuter la requête en arrière-plan. La table de données résultant de la requête sera ouverte une fois la requête terminée. Utiliser les arguments OnRunComplete, OnRunCanceled, et OnError pour exécuter un script une fois la requête terminée. Private peut être spécifié uniquement si un script OnRunComplete est également spécifié. Exécuter en arrière-plan ne renvoie pas de valeur.

```jsl


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

#### Run Foreground

**Syntaxe :** result = obj &lt;&lt; Run Foreground( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Description :** Exécuter la requête en avant-plan. Si la requête réussit ou est annulée avec un résultat partiel, Exécuter en avant-plan renvoie la table de données résultant de la requête. Si la requête échoue, Exécuter en avant-plan ne renvoie pas de valeur. Utiliser les arguments OnRunComplete, OnRunCanceled, et OnError pour exécuter un script une fois la requête terminée.

```jsl


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

#### Save

**Syntaxe :** obj &lt;&lt; Save

**Description :** Enregistre la requête dans son fichier associé. L&apos;enregistrement échoue si la requête n&apos;a pas encore de fichier associé.

```jsl

obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

#### Save As

**Syntaxe :** obj &lt;&lt; Save As( path, &lt;ReplaceExisting(0|1)&gt; )

**Description :** Enregistre la requête dans le fichier spécifié. Si le fichier existe déjà, l&apos;enregistrement échouera à moins que Remplacer le fichier existant soit Vrai.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Save As( "c:\users\public\temp.jmpquery" );

```

