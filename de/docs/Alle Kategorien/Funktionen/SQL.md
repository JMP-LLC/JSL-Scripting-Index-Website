# SQL



## Funktionen

### As SQL Expr

**Syntax:** y = As SQL Expr( x, <style> )

**Beschreibung:** Gibt eine Zeichenkette zurück, die den Ausdruck – konvertiert in eine gültige SQL-Syntax – zur Verwendung in einer SQL-Select-Anweisung enthält.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**Syntax:** Close Database Connection(databaseConnectionHandle)

**Beschreibung:** Schließt eine Datenbankverbindung, die von „Datenbankverbindung erstellen“ zurückgegeben wurde.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**Syntax:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", <DriverPrompt(true|false)> )

**Beschreibung:** Erstellt eine Datenbankverbindung und gibt einen Handle auf die Verbindung zurück. Wenn DriverPrompt wahr ist, wird der Benutzer über die Eingabeaufforderung des ODBC-Treibers aufgefordert, gegebenenfalls seine Benutzerdaten einzugeben.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**Syntax:** dt = Execute SQL(databaseConnectionHandle|dataConnector,  "SELECT ..."|"SQLFILE=..."|tableName, <invisible(0|1)>, <outputTableName>, <Batch Submit(0|1)> )

**Beschreibung:** Führt SQL mit einer Datenbankverbindung aus, die von „Datenbankverbindung erstellen“ oder einem Datenkonnektor zurückgegeben wurde. Die Aktivierung von „Batch absenden“ ermöglicht den Empfang mehrerer Ergebnisse von mehreren SQL-Anweisungen und die Rückgabe einer Liste mit den Ergebnissen (nur unterstützende Treiber).

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```jsl

Names Default To Here( 1 );
dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Beispiel 2**

```jsl

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Beispiel 3**

```jsl

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
resultList = Execute SQL(
	dc,
	"SELECT HEIGHT, WEIGHT FROM Bigclass; SELECT AGE, WEIGHT FROM BigClass;",
	Batch Submit( 1 )
);

```

### New Data Connector

**Syntax:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), < Option1( value1 ) >, ..., < OptionN( valueN ) > )

**Beschreibung:** Erstellt ein Konfigurationsobjekt für einen Datenkonnektor.

**JMP Version hinzugefügt:** 18

**Beispiel 1**

```jsl

Names Default To Here( 1 );

// Create a data connector from scratch
dc = New Data Connector( Type( "ODBC" ), Database( "foo" ), Server( "bar.example.com" ) );
Show( dc << Get( Database ) );  // Overridden database value "foo"
Show( dc << Get( Driver ) );  // Default driver value . (missing)
dc << Set( Database( "foo2" ), Driver( "SQL Server" ) );
Show( dc << Get( Database ) );  // New database value "foo2"
Show( dc << Get( Driver ) );  // New driver value "SQL Server"

```

**Beispiel 2**

```jsl

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

**Syntax:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );



		obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Beschreibung:** Erstellt ein SQL-Abfrageobjekt für die angegebene Verbindung, Spalten und Tabelle oder für die angegebene benutzerdefinierte SQL-Abfrage. Erzeugen Sie mit der Funktion „Abfrage erstellen“ Skripte, die Abfragen erstellen.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**Syntax:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, <invisible | private>, <outputTableName> )

**Beschreibung:** Öffnet eine Datentabelle mittels ODBC, führt das vorgegebene SQL aus und legt die Daten in einer Datentabelle mit dem angegebenen Ausgabetabellennamen ab.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

Names Default To Here( 1 );
Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**Syntax:** result = Query( < < dt1 | Table( dt1, alias1 ) >, ..., < dtN | Table( dtN, aliasN ) > >,

     <Private|Invisible>, <Scalar>, sqlStatement )

**Beschreibung:** Eine SQL-Abfrage auf JMP-Datentabellen durchführen. sqlStatement (die SQL-Abfrage, wahrscheinlich eine SELECT-Anweisung) ist erforderlich und muss das letzte Argument sein. Von der SQL-Anweisung referenzierte JMP-Datentabellen müssen als Argumente an Query() übergeben werden, wobei mittels Table(dt, "Alias") ein Alias für die Tabelle erstellt wird, den die SQL ggf. verwenden kann. „Unsichtbar“ oder „Privat“ kann übergeben werden, um die Sichtbarkeit der resultierenden Datentabelle zu steuern. Wenn die SQL-Anweisung einen einzelnen Wert zurückgibt, übergeben Sie „Skalar“, wodurch statt einer Datentabelle der einzelne Wert zurückgegeben wird.

**JMP Version hinzugefügt:** Vor Version 14

```jsl

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

## Zugehörige Konstruktoren

### New SQL Query

**Syntax:** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );



obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Beschreibung:** Erstellt ein SQL-Abfrageobjekt für die angegebene Verbindung, Spalten und Tabelle oder für die angegebene benutzerdefinierte SQL-Abfrage. Erzeugen Sie mit der Funktion „Abfrage erstellen“ Skripte, die Abfragen erstellen.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

## SQL Query

### Elementmeldungen

#### CustomSQL

**Syntax:** obj << Custom SQL( sql )

**Beschreibung:** Macht aus der Abfrage eine benutzerdefinierte SQL-Abfrage und legt die SQL fest.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**Syntax:** sql = obj << Generate SQL

**Beschreibung:** Generiert die SQL-Anweisung für die Abfrage und gibt sie zurück.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
sql = obj << Generate SQL;

```

#### Modify

**Syntax:** obj << Modify

**Beschreibung:** Öffnet die Abfrage in „Abfrage erstellen“.

```jsl

Names Default To Here( 1 );
query << Modify;

```

#### PostQueryScript

**Syntax:** obj << Post Query Script( script_as_text )

**Beschreibung:** Legt das JSL-Skript fest, das nach jeder Ausführung der Abfrage ausgeführt werden soll.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**Syntax:** obj << Query Name( <newName> )

**Beschreibung:** Ruft den Namen der Abfrage ab oder legt ihn fest. Der Name der Abfrage wird als Name der Datentabelle verwendet, die aus der Abfrage resultiert.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Query Name( "New Name" );
name = obj << Query Name;
Show( name );

```

#### Run

**Syntax:** result = obj << Run( <Private|Invisible>, <UpdateTable(table)>, <OnRunComplete(script)>, <OnRunCanceled(script)>, <OnError(script)> )

**Beschreibung:** Abfrage ausführen. Die Abfrage kann abhängig von der Voreinstellung unter „Abfrage erstellen“ im Vordergrund oder im Hintergrund ausgeführt werden. Wenn „UpdateTable“ angegeben ist, wird die Abfrage im Vordergrund ausgeführt. Wenn die Abfrage im Vordergrund ausgeführt wird, ist der Rückgabewert der Ausführung die aus der Abfrage resultierende Datentabelle. Wenn die Abfrage im Hintergrund ausgeführt wird oder einen Fehler aufweist, gibt die Ausführung keinen Wert zurück. Mit den Argumenten OnRunComplete, OnRunCanceled und OnError führen Sie ein Skript aus, wenn die Abfrage beendet ist.

```jsl

Names Default To Here( 1 );
query << Run;

```

#### Run Background

**Syntax:** result = obj << Run Background( <OnRunComplete(script), <Private|Invisible>>, <OnRunCanceled(script)>, <OnError(script)> )

**Beschreibung:** Abfrage im Hintergrund ausführen. Die aus der Abfrage resultierende Datentabelle wird nach Abschluss der Abfrage geöffnet. Mit den Argumenten OnRunComplete, OnRunCanceled und OnError führen Sie ein Skript aus, wenn die Abfrage beendet ist. „Privat“ kann nur angegeben werden, wenn auch ein OnRunComplete-Skript angegeben ist. Bei der Ausführung im Hintergrund wird kein Wert zurückgegeben.

```jsl

Names Default To Here( 1 );

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

**Syntax:** result = obj << Run Foreground( <Private|Invisible>, <UpdateTable(table)>, <OnRunComplete(script)>, <OnRunCanceled(script)>, <OnError(script)> )

**Beschreibung:** Abfrage im Vordergrund ausführen. Wenn die Abfrage erfolgreich ist oder mit einem Teilergebnis abgebrochen wird, wird bei der Abfrage im Vordergrund die aus der Abfrage resultierende Datentabelle zurückgegeben. Wenn die Abfrage fehlschlägt, wird bei der Abfrage im Vordergrund kein Wert zurückgegeben. Mit den Argumenten OnRunComplete, OnRunCanceled und OnError führen Sie ein Skript aus, wenn die Abfrage beendet ist.

```jsl

Names Default To Here( 1 );

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

**Syntax:** obj << Save

**Beschreibung:** Speichert die Abfrage in der zugehörigen Datei. Das Speichern schlägt fehl, wenn die Abfrage noch keine zugehörige Datei hat.

```jsl

Names Default To Here( 1 );
obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

#### Save As

**Syntax:** obj << Save As( path, <ReplaceExisting(0|1)> )

**Beschreibung:** Speichert die Abfrage in der angegebenen Datei. Wenn die Datei bereits vorhanden ist, schlägt das Speichern fehl, sofern die vorhandene Datei nicht ersetzt werden soll.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Save As( "c:\users\public\temp.jmpquery" );

```

