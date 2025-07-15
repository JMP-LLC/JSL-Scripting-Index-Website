# SQL



## Constructores asociados

### New SQL Query

**Sintaxis:** obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) );obj = New SQL Query( Connection( "ODBC:DSN=SampleDSN;" ), Custom SQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Descripción:** Crea un objeto de consulta SQL para la conexión, las columnas y la tabla especificadas, o para la consulta SQL personalizada especificada. Utilice el constructor de consultas para generar  scripts que creen consultas.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### As SQL Expr

**Sintaxis:** y = As SQL Expr( x, &lt;style&gt; )

**Descripción:** Devuelve una cadena que contiene la expresión convertida a sintaxis SQL válida para su uso en una instrucción Select de SQL.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
As SQL Expr( Expr( Match( sex, 1, "Male", 2, "Female", "Other" ) ), "MySQL" );

```

### Close Database Connection

**Sintaxis:** Close Database Connection(databaseConnectionHandle)

**Descripción:** Cierra una conexión a base de datos procedente de la opción Crear conexión a base de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Close Database Connection( databaseConnectionHandle );

```

### Create Database Connection

**Sintaxis:** dbc = Create Database Connection( dataSourceName|"Connect Dialog", &lt;DriverPrompt(true|false)&gt; )

**Descripción:** Crea una conexión de base de datos y devuelve un identificador para la conexión. Si DriverPrompt es True, se le solicitará al usuario mediante la solicitud del controlador ODBC que facilite las credenciales si fuera necesario.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
dbc = Create Database Connection(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;"
);

```

### Execute SQL

**Sintaxis:** dt = Execute SQL(databaseConnectionHandle|dataConnector, "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible(0|1)&gt;, &lt;outputTableName&gt;, &lt;Batch Submit(0|1)&gt; )

**Descripción:** Ejecuta una instrucción SQL sobre una conexión de base de datos devuelta desde Crear conexión a base de datos o un conector de datos. Habilitar el envío por lotes permite recibir múltiples resultados de múltiples instrucciones SQL, lo que devuelve una lista con los resultados (solo controladores compatibles).

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Execute SQL(
	databaseConnectionHandle,
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"NewTable"
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dc = Data Connector Registry() << Get( "com.jmp.sql_server" );
dt = Execute SQL( dc, "SELECT HEIGHT, WEIGHT FROM Bigclass" );

```

**Ejemplo 3**

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

**Sintaxis:** result = New Data Connector( Type( type ) | ID( id ) | File( path ) | Spec( string ) | Base( data connector ), &lt; Option1( value1 ) &gt;, ..., &lt; OptionN( valueN ) &gt; )

**Descripción:** Crea un objeto de configuración del conector de datos.

**JMP Versión agregada:** 18

**Ejemplo 1**

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

**Ejemplo 2**

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

**Sintaxis:** obj = New SQL Query( Connection( "ODBC:my_connection_string" ), Select( Column( "mycolumn", "t1" ) ), From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) ) ); obj = New SQL Query( Connection( "ODBC:my_connection_string;" ), CustomSQL( "SELECT c1, c2, c3 FROM my_table;" ) )

**Descripción:** Crea un objeto de consulta SQL para la conexión, las columnas y la tabla especificadas, o para la consulta SQL personalizada especificada. Utilice el constructor de consultas para generar  scripts que creen consultas.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );

obj = New SQL Query(
	Connection( "ODBC:DSN=mydsn" ),
	Select(),
	From( Table( "my_table", Schema( "my_schema" ), Alias( "t1" ) ) )
);

```

### Open Database

**Sintaxis:** dt = Open Database( dataSourceName|"Connect Dialog", "SELECT ..."|"SQLFILE=..."|tableName, &lt;invisible | private&gt;, &lt;outputTableName&gt; )

**Descripción:** Abre una base de datos mediante ODBC, ejecuta el SQL especificado y pone los datos en una tabla de datos con el nombre de tabla de salida indicado.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open Database(
	"DSN=dBASE Files;DBQ=C:/Program Files/JMP/JMPPRO/19/Samples/Import Data/;",
	"SELECT HEIGHT, WEIGHT FROM Bigclass",
	"hw"
);

```

### Query

**Sintaxis:** result = Query( &lt; &lt; dt1 | Table( dt1, alias1 ) &gt;, ..., &lt; dtN | Table( dtN, aliasN ) &gt; &gt;, &lt;Private|Invisible&gt;, &lt;Scalar&gt;, sqlStatement )

**Descripción:** Realiza una consulta SQL en las tablas de datos JMP. sqlStatement (la consulta SQL, una instrucción SELECT lo más probable) es necesario y debe ser el último argumento. Las tablas de datos JMP a las que hace referencia la instrucción SQL deben introducirse como argumentos en Query(), usando Table(dt, "alias") para crear un alias para la tabla que SQL puede usar si se desea. Se puede indicar Invisible o Privado para controlar la visibilidad de la tabla de datos resultante. Si la instrucción SQL devuelve un valor único, introduzca Escalar, lo que provocará que se devuelva el valor único en lugar de una tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

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

## SQL Query

### Mensajes del elemento

#### CustomSQL

**Sintaxis:** obj &lt;&lt; Custom SQL( sql )

**Descripción:** Cambia la consulta a una consulta SQL personalizada y establece la SQL.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Custom SQL( "SELECT c4, c5, c6 FROM my_table;" );

```

#### GenerateSQL

**Sintaxis:** sql = obj &lt;&lt; Generate SQL

**Descripción:** Genera y devuelve la instrucción SQL para la consulta.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
sql = obj << Generate SQL;

```

#### Modify

**Sintaxis:** obj &lt;&lt; Modify

**Descripción:** Abre la consulta en el Constructor de consultas.

```jsl

Names Default To Here( 1 );
query << Modify;

```

#### PostQueryScript

**Sintaxis:** obj &lt;&lt; Post Query Script( script_as_text )

**Descripción:** Establece el script JSL que se ejecutará después de cada corrida de consulta.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Post Query Script( "show( queryResult << Get As Matrix );" );

```

#### QueryName

**Sintaxis:** obj &lt;&lt; Query Name( &lt;newName&gt; )

**Descripción:** Obtiene o establece el nombre de la consulta. El nombre de la consulta se utilizará como nombre de la tabla de datos que se genera tras la corrida de la consulta.

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

**Sintaxis:** result = obj &lt;&lt; Run( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Descripción:** Ejecuta la consulta. La consulta se puede ejecutar en primer plano o en segundo plano, dependiendo de la preferencia del Constructor de consultas. Si se especifica UpdateTable, la consulta se ejecutará en primer plano. Si la consulta se ejecuta en primer plano, el valor devuelto de la corrida será la tabla de datos que se genere a partir de la consulta. Si la consulta se ejecuta en segundo plano o contiene un error, la corrida no devuelve ningún valor. Utilice los argumentos OnRunComplete, OnRunCanceled y OnError para ejecutar un script cuando la consulta finalice.

```jsl

Names Default To Here( 1 );
query << Run;

```

#### Run Background

**Sintaxis:** result = obj &lt;&lt; Run Background( &lt;OnRunComplete(script), &lt;Private|Invisible&gt;&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Descripción:** Ejecuta la consulta en segundo plano. La tabla de datos que se genera a partir de la consulta se abrirá cuando la consulta finalice. Utilice los argumentos OnRunComplete, OnRunCanceled y OnError para ejecutar un script cuando la consulta finalice. Se puede especificar Privado solo si se especifica también un script OnRunComplete. Ejecutar en segundo plano no devuelve ningún valor.

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

**Sintaxis:** result = obj &lt;&lt; Run Foreground( &lt;Private|Invisible&gt;, &lt;UpdateTable(table)&gt;, &lt;OnRunComplete(script)&gt;, &lt;OnRunCanceled(script)&gt;, &lt;OnError(script)&gt; )

**Descripción:** Ejecuta la consulta en primer plano. Si la consulta se completa correctamente o se cancela con un resultado parcial, Ejecutar en primer plano devuelve la tabla de datos que se genera a partir de la consulta. Si la consulta falla, Ejecutar en primer plano no devuelve un valor. Utilice los argumentos OnRunComplete, OnRunCanceled y OnError para ejecutar un script cuando la consulta finalice.

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

**Sintaxis:** obj &lt;&lt; Save

**Descripción:** Guardar la consulta en su archivo asociado. Se produce un error al guardar si la consulta aún no tiene ningún archivo asociado.

```jsl

Names Default To Here( 1 );
obj = Open( "my_query.jmpquery" );
obj << Query Name( "New Name" );
obj << Save;

```

#### Save As

**Sintaxis:** obj &lt;&lt; Save As( path, &lt;ReplaceExisting(0|1)&gt; )

**Descripción:** Guarda la consulta en el archivo especificado. Si el archivo ya existe, se producirá un error al guardar a menos que Reemplazar existente sea True.

```jsl

Names Default To Here( 1 );
obj = New SQL Query(
	Connection( "ODBC:DSN=SampleDSN;" ),
	Custom SQL( "SELECT c1, c2, c3 FROM my_table;" )
);
obj << Save As( "c:\users\public\temp.jmpquery" );

```

