# Row



## Funciones

### As Table

**Sintaxis:** dt = As Table( matrix, <matrix2,...> < <<invisible/private>, < <<Column Names(name list) > )

**Descripción:** Convierte una matriz en una tabla de datos. La opción invisible se puede usar para evitar mostrar la tabla.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**Sintaxis:** y = Col Stored Value( <dt>, xCol, <row=Row()> )

**Descripción:** Devuelve un valor de columna que no tiene propiedades de columna aplicadas. Si no se especifica la opción de fila, se asume la fila actual

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Equity.jmp" );
:JOB << Set Property( "Missing Value Codes", {"Other"} );
y1 = Col Stored Value( :JOB, 10 );
y2 = Col Stored Value( :JOB, 11 );
y3 = Col Stored Value( :JOB, 14 );
y4 = Col Stored Value( :JOB, 15 );
Show( y1, y2, y3, y4 );

```

### Column

**Sintaxis:** y = Column( name|number );

y = Column( dataTable, name|number, <"formatted"> )

**Descripción:** Devuelve una referencia a la columna de tabla de datos especificada. Las palabras clave "con formato" permiten acceder a los datos con formato, como la etiqueta de valor.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
col4 = Column( 4 );
ht = Column( "height" );
col4[1] + ht[2];

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << run script( "Set Sex Value Labels" );
col = Column( dt, "sex", "formatted" );
Write( "\!n", col[5] );
Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**Sintaxis:** name = Column Name( n )

**Descripción:** Devuelve el nombre de la n-ésima columna de la tabla de datos actual.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Column Name( 4 );

```

### Count

**Sintaxis:** y = Count( start, end, s, <n=1> )

**Descripción:** Devuelve el elemento i-ésimo de la secuencia de números del start al end en s pasos y repitiendo cada número n veces, donde i viene determinado por el valor de la función Row(). Puesto que depende de la función Row(), la función Count() se usar generalmente en fórmulas de columna.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
New Table( "Count Example",
	Add Rows( 12 ),
	New Column( "Count1" ),
	New Column( "Count2" ),
	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) )
);
For Each Row(
	:Count1[Row()] = Count( 0, 6, 4, 1 );
	:Count2[Row()] = Count( 0, 6, 3, 2 );
);

```

### Current Data Table

**Sintaxis:** dt = Current Data Table( <Project(title|index|box|window)> ); Current Data Table( dt )

**Descripción:** Devuelve la tabla de datos actual o convierte la tabla de datos especificada en la actual si se especifica una.



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Current Data Table() << Get Column Names;

```

### Data Table

**Sintaxis:** dt = Data Table( name|number )

**Descripción:** Devuelve una referencia a la tabla de datos especificada.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Data Table( 1 );

```

### Dif

**Sintaxis:** y = Dif( x, <n=1> )

**Descripción:** Devuelve x - Lag( x, n ), también conocida como "primera diferencia". Puesto que depende de Row(), Dif(), resulta útil principalmente en fórmulas de columna.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Dif( :height, 2 );

```

### Dim

**Sintaxis:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**Descripción:** Devuelve un vector de fila con las dimensiones de la tabla de datos actual, una tabla de datos especificada o una matriz. Las dimensiones son el número de filas y el número de columnas y se muestran en ese orden.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**Sintaxis:** dt = Get Data Table( <Project(title|index|box|window)>, name|index )

**Descripción:** Devuelve una referencia a la tabla de datos especificada.



La búsqueda está limitada a las tablas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table( 1 );

```

### Get Data Table List

**Sintaxis:** tableList = Get Data Table List( <Project(title|index|box|window)> )

**Descripción:** Devuelve una lista de todas las tablas de datos abiertas.



La lista está limitada a las tablas del proyecto actual (o a ningún proyecto si no se ejecuta el script en un proyecto).



Para especificar un proyecto, utilice el argumento opcional Project() con un título, índice, cuadro de visualización u objeto de ventana. Utilice Project(0) para no especificar ningún proyecto cuando se ejecute el script en un proyecto.

**JMP Versión agregada:** 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Get Data Table List();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );
Get Data Table List( Project( project ) );

```

### Lag

**Sintaxis:** y = Lag( <x>, <n=1> )

**Descripción:** Devuelve el valor del argumento x con la fila actual con el valor Row() - n. Puesto que depende de Row(), Lag() resulta útil principalmente en fórmulas de columna.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
Lag( :height, 2 );

```

### N Row

**Sintaxis:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**Descripción:** Devuelve el número de filas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
N Row( [11 22, 33 44] );

```

### N Rows

**Sintaxis:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**Descripción:** Devuelve el número de filas de la tabla de datos actual, una tabla de datos especificada o una matriz.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
N Rows( [11 22, 33 44] );

```

### N Table

**Sintaxis:** n = N Table()

**Descripción:** Devuelve el número de tablas de datos abiertas actualmente.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
N Table();

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Open( "$SAMPLE_DATA/Cars.jmp" );
Open( "$SAMPLE_DATA/Solubility.jmp" );
d = {};
For( i = 1, i <= N Table(), i++,
	d[i] = Data Table( i ) << GetName
);
d;

```

### New Column

**Sintaxis:** dc = New Column( name, <"Numeric"|"Character"|"RowState"|"Expression">, <"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None">, <Width( n )|Format(format name, width, precision)>, <Like(:other column)>, <actions> )

**Descripción:** Crea una columna nueva en la tabla de datos actual. Los argumentos opcionales actions son todos los mensajes compatibles con los objetos de columnas de datos.

**JMP Versión agregada:** Antes de la versión 14

**Like**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "like name", Like( :name ) );

```

**Simple**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**Sintaxis:** dc = New Column by Text Matching( Column(:name), Set Regex(), <Output Column Name("Name")>, <Use Result(0 | 1)> )

**Descripción:** Crea una nueva columna realizando una coincidencia de patrón de expresión regular en una columna existente.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
New Column by Text Matching(
	Column( :Narrative Cause ),
	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),
	Output Column Name( "Match Output" ),
	Use Result( 1 )
);

```

### New Table

**Sintaxis:** dt = New Table( name, <visibility("private"|"invisible"|"visible")>, <Enable Filter Views(bool)>, <actions> )

**Descripción:** Crea una nueva tabla de datos. "Invisible" oculta la tabla de datos de la vista pero la muestra en la Ventana principal de JMP. "Private" oculta la tabla por completo. "Visible" es la opción predeterminada y crea una tabla normal que está visible y aparece en la Ventana principal de JMP. Los argumentos actions opcionales son cualquier mensaje que sean compatibles con las tablas de datos.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
New Table( "Little Class",
	Add Rows( 3 ),
	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),
	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),
	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) )
);

```

### Row

**Sintaxis:** y = Row(); Row() = y

**Descripción:** Devuelve la fila actual en una tabla de datos. Se puede usar como L-value. Restablezca la fila actual asignando un valor de 0.

**JMP Versión agregada:** Antes de la versión 14

**Establecer fila**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Row() = 3;
:height * :weight;

```

**Restablecer fila**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Add Rows( 5 );
Show( Row() );
Row() = 0;

```

### Sequence

**Sintaxis:** y = Sequence( start, end, <incr=1>, <n=1> )

**Descripción:** Devuelve el Row()-ésimo elemento de la secuencia de números de start a end, incrementado por incr. Cada número de la secuencia se repite n veces. Dada su dependencia de Row(), la función Sequence() resulta útil fundamentalmente en las fórmulas de columna. Para crear secuencias como matrices JSL, consulte Index().

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Row() = 3;
Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**Sintaxis:** aSub = Subscribe to Data Table List( <subscriber name | "">, <OnOpen(fn) | OnClose(fn) | On Rename(fn)>)

**Descripción:** Se suscribe a la lista de tablas de datos para recibir una notificación al añadir o cerrar una nueva tabla de datos.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab, b},
	dtname = (dtab << getname());
	Print( "renaming ", b, " to ", dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnRename( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
dt << setname( "xxx" );

```

### Subscript

**Sintaxis:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**Descripción:** Devuelve el valor i-ésimo de un objeto indexable, que puede ser una columna de una tabla de datos, una matriz, una lista o un elemento de visualización de un informe.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
{11, 12, 13}[2];

```

### Suppress Formula Eval

**Sintaxis:** Suppress Formula Eval( <suppress=1> )

**Descripción:** Suprime la evaluación de las fórmulas en todas las tablas de datos si el argumento es distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

```jsl

Names Default To Here( 1 );
Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**Sintaxis:** aSub = Unsubscribe to Data Table List(<subscriber name>, <"OnOpen" | "OnClose" | "OnRename" | "ALL">)

**Descripción:** Elimina una suscripción a la lista de tablas de datos añadida mediante el comando "suscribirse a la lista de tablas de datos".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "on close" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
f1 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "opening" );
	Print( dtname );
);
f2 = Function( {dtab},
	dtname = (dtab << getname());
	Print( "closing" );
	Print( dtname );
);
aSub = Subscribe to Data Table List( , OnOpen( f1 ) );
Subscribe to Data Table List( aSub, OnClose( f2 ) );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );
Unsubscribe to Data Table List( aSub, "all" );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
Close( dt );

```

