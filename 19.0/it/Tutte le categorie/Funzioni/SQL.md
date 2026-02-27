# SQL



## Costruttori associati

### New SQL Query

**Sintassi:** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Descrizione:** Crea un oggetto della query SQL per la connessione, colonne e tabella specificate, oppure per la query SQL personalizzata specificata. Usare il Costruttore di query per generare script che creino query.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### As SQL Expr

**Sintassi:** y = As SQL Expr( x, &lt;style&gt; )

**Descrizione:** Restituisce una stringa che contiene l&apos;espressione convertita in sintassi SQL valida per l&apos;uso in un&apos;istruzione SQL Select.

**JMP Versione aggiunta:** prima della versione 14

```jsl

As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**Sintassi:** Close Database Connection(databaseConnectionHandle)

**Descrizione:** Chiude la connessione al database restituita da Crea connessione al database

**JMP Versione aggiunta:** prima della versione 14

```jsl

Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**Sintassi:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Descrizione:** Crea una connessione al database e restituisce un handle alla connessione. Se DriverPrompt è vero, sarà richiesto all&apos;utente di usare il prompt del driver ODBC per fornire le credenziali se necessario.

**JMP Versione aggiunta:** prima della versione 14

```jsl

dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**Sintassi:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Descrizione:** Esegue l&apos;SQL su una connessione al database restituita da Crea connessione al database o da un connettore dati. L&apos;abilitazione dell&apos;invio in batch consente di ricevere più risultati da più istruzioni SQL, restituendo un elenco con i risultati (solo driver di supporto).

**JMP Versione aggiunta:** prima della versione 14

#### Esempio 1

```jsl

dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

#### Esempio 2

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

#### Esempio 3

```jsl

dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### New Data Connector

**Sintassi:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Descrizione:** Crea un oggetto di configurazione del connettore dati.

**JMP Versione aggiunta:** 18

#### Esempio 1

```jsl


// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

#### Esempio 2

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

**Sintassi:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Descrizione:** Crea un oggetto della query SQL per la connessione, colonne e tabella specificate, oppure per la query SQL personalizzata specificata. Usare il Costruttore di query per generare script che creino query.

**JMP Versione aggiunta:** prima della versione 14

```jsl


obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**Sintassi:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Descrizione:** Apre un database che utilizza ODBC, esegue l&apos;SQL dato e inserisce i dati in una tabella di dati con il nome della tabella di output dato.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**Sintassi:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Descrizione:** Esegue una query SQL su tabelle di dati JMP. sqlStatement (la query SQL, più probabile un&apos;istruzione SELECT) è necessario e deve essere l&apos;ultimo argomento. Le tabelle di dati JMP referenziate dall&apos;istruzione SQL devono essere passate come argomenti a Query(), utilizzando Table(dt, "alias") per creare un alias per la tabella utilizzabile, se necessario, da SQL. Invisible or Private possono essere passati per controllare la visibilità della tabella di dati risultante. Se l&apos;istruzione SQL restituisce un singolo valore, passare Scalar, che determinerà la restituzione di un singolo valore invece di una tabella di dati.

**JMP Versione aggiunta:** prima della versione 14

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

### Messaggi degli elementi

#### CustomSQL

**Sintassi:** obj &lt;&lt; Custom SQL( sql )

**Descrizione:** Modifica la query in una query SQL personalizzata e imposta l&apos;SQL.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**Sintassi:** sql = obj &lt;&lt; Generate SQL

**Descrizione:** Genera e restituisce l&apos;istruzione SQL per la query.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
sql = obj << Generate SQL;

```

#### Modify

**Sintassi:** obj &lt;&lt; Modify

**Descrizione:** Apre la query nel Costruttore di query.

```jsl

query << Modify;

```

#### PostQueryScript

**Sintassi:** obj &lt;&lt; Post Query Script( script_as_text )

**Descrizione:** Imposta lo script JSL da eseguire dopo ogni esecuzione della query.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**Sintassi:** obj &lt;&lt; Query Name( &lt;newName&gt; )

**Descrizione:** Ottiene o imposta il nome della query. Il nome della query sarà utilizzato come nome della tabella di dati che deriva dall&apos;esecuzione della query.

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

**Sintassi:** result = obj &lt;&lt; Run( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Descrizione:** Esegue la query. La query può essere eseguita in primo piano o in background, in base alla preferenza del Costruttore di query. Se è specificato Aggiorna tabella, la query sarà eseguita in primo piano. In tal caso il valore di ritorno della funzione Esegui sarà la tabella di dati risultante dalla query. Se la query è eseguita in background o si verifica un errore, Esegui non restituisce un valore. Usare gli argomenti OnRunComplete, OnRunCanceled e OnError per eseguire uno script al termine della query.

```jsl

query << Run;

```

#### Run Background

**Sintassi:** result = obj &lt;&lt; Run Background( &lt;OnRunComplete(script), &lt;Private|Invisible&gt;&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Descrizione:** Esegue la query in background. La tabella di dati risultante dalla query verrà aperta al termine della query. Usare gli argomenti OnRunComplete, OnRunCanceled e OnError per eseguire uno script al termine della query. L&apos;opzione Privata può essere specificata solo se si specifica anche uno script OnRunComplete. Esegui in background non restituisce un valore.

```jsl


query << Run Background(
	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) )
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Background( OnRunComplete( MyRunCompleteFunc ) );

```

#### Run Foreground

**Sintassi:** result = obj &lt;&lt; Run Foreground( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Descrizione:** Esegue la query in primo piano. Se la query è completata o annullata con un risultato parziale, Esegui in primo piano restituisce la tabella di dati risultante dalla query. Se la query non ha esito positivo, Esegui in primo piano non restituisce un valore. Usare gli argomenti OnRunComplete, OnRunCanceled e OnError per eseguire uno script al termine della query.

```jsl


query << Run Foreground(
	OnRunComplete( Write( "Number of rows in query result: ", N Rows( queryResult ) ) )
);

MyRunCompleteFunc = Function( {dt},
	{Default Local},
	Write( "Number of rows in query result: ", N Rows( dt ) )
);
query << Run Foreground( OnRunComplete( MyRunCompleteFunc ) );

```

#### Save

**Sintassi:** obj &lt;&lt; Save

**Descrizione:** Salva la query nel file associato. Il salvataggio non viene eseguito se la query non ha ancora un file associato.

```jsl

obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

#### Save As

**Sintassi:** obj &lt;&lt; Save As( path, &lt;ReplaceExisting(0|1)&gt; )

**Descrizione:** Salva la query nel file specificato. Se il file esiste già, il salvataggio non verrà effettuato, a meno che Sostituisci script esistente sia vero.

```jsl

obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Save As( "c:\users\public\temp.jmpquery" );

```

