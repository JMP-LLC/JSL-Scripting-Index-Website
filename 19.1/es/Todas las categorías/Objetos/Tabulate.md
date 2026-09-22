# Tabulate



## Columnas

### Analysis Columns

**Sintaxis:** Analysis Columns( Column(s) )

**Descripción:** Agrega columnas de análisis a la tabla actual. Se puede utilizar con el comando Agregar tabla o el comando Modificar tabla.

#### Agregar a existente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Analysis Columns( :CO ) );

```

#### Agregar a nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

### By

**Sintaxis:** obj &lt;&lt; By( column(s) )

**Descripción:** Realiza un análisis independiente para cada nivel de la columna especificada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :type ));

```

### Columns by Categories

**Sintaxis:** Columns by Categories( column1, column2, ...) )

**Descripción:** Agrega a la tabla una tabulación cruzada de los nombres de columna y las categorías recopiladas para columnas con valores similares.  Durante el script, el mensaje Columnas por categorías debe estar dentro de un mensaje, o bien de Tabla de columnas o bien de Tabla de filas.

#### Agregar a existente

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ));obj << Modify Table( Row Table( 1 ), Columns by Categories( :Money ) );

```

#### Agregar a nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

### Freq

**Sintaxis:** Freq( Column )

**Descripción:** Especifica la columna de frecuencia que se debe usar al calcular los estadísticos.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));Wait( 1 );obj << Freq( :Count );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

### Grouping Columns

**Sintaxis:** Grouping Columns( Column(s) )

**Descripción:** Agrega columnas de agrupación a la tabla actual. Se puede utilizar con el comando Agregar tabla o el comando Modificar tabla.

#### Add nested to new

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### Agregar a existente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Row Table( 1 ), Grouping Column( :age ) );

```

#### Agregar a nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Grouping Columns( :sex ) ) ));

```

#### Agregar anidado a existente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Column Table( 1 ), Grouping Column( :age ) );

```

### ID

**Sintaxis:** ID( Column )

**Descripción:** Especifica la columna de identificadores que se utiliza para contar los eventos unívocos.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));Wait( 1 );obj << ID( :Division );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

### Page Column

**Sintaxis:** Page Column( Column )

**Descripción:** Especifica la columna de la página que se debe usar para configurar las páginas del informe.

#### Columna de página de respuesta múltiple

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### Establecer columna de página en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### Establecer columna de página y nivel en existente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));Wait( 1 );obj << Page Column( :sex( "F" ) );

```

#### Establecer columna de página y nivel en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex( "F" ) ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

### Weight

**Sintaxis:** Weight( Column )

**Descripción:** Especifica la columna de ponderación que se debe usar al calcular los estadísticos.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));Wait( 1 );obj << Weight( :Weight );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

## Constructores asociados

### Tabulate

**Sintaxis:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Descripción:** Crea una tabla personalizada de estadísticos de resumen de una o más variables. Las variables se pueden agrupar en una o más columnas de clasificación. Le permite construir la tabla de resumen mediante operaciones de arrastrar y colocar.

#### Categorías anidadas

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### Categorías y estadísticas

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender, :goals ), Statistics( N, Column % ) ),		Row Table( Grouping Columns( :Grade, :Age ) )	));

```

#### Columna de página

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :Engine( "Gas" ) ),	Add Table(		Column Table( Analysis Columns( :City MPG, :Hwy MPG ), Statistics( Max ) ),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Columna de página de respuesta múltiple

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### Columna ID

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### Columnas de agrupación apiladas

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### Columnas de agrupación de respuesta múltiple

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Floss Delimited ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :Frequency of Teeth Cleaning, :Brush Delimited ) )	));

```

#### Columnas empaquetadas

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum, Max ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### Columnas por categorías

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

#### Frecuencia

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### Peso

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### Tablas con varias filas

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Row Table( Grouping Columns( :Grades ) ),		Row Table( Grouping Columns( :Sports ) ),		Row Table( Grouping Columns( :Looks ) ),		Row Table( Grouping Columns( :Money ) )	));

```

#### Tablas con varias filas y columnas

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender ) ),		Column Table( Grouping Columns( :race ) ),		Row Table( Grouping Columns( :goals ) ),		Row Table( Grouping Columns( :"Urban/Rural"n ) )	));

```

## Mensajes del elemento

### Add

**Sintaxis:** add(&lt;Column Table | Row Table&gt;(table index), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;))&gt;, &lt;analysis column | grouping column | statistic&gt;(operand name)),

**Descripción:** Se utiliza con Modificar tabla para agregar columnas y estadísticos a una tabla existente. También sirve como alias para Agregar tabla.

#### Agregar columna de análisis antes de la nombrada

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :weight ) ) ));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Analysis Columns( :weight ) ), Analysis Columns( :height ) ));

```

#### Agregar estadístico antes del índice

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Statistics( 2 ) ), Statistics( Median ) ));

```

#### Agregar estadístico antes del primero

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Add( Before First, Statistics( N ) ) );

```

#### Agregar estadístico después del nombrado

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( After( Statistics( Max ) ), Statistics( Range ) ));

```

### Add Table

**Sintaxis:** Add Table( &lt;Column Table( )&gt;, &lt;Row Table( )&gt; )

**Descripción:** Agrega una tabla a la ventana si no hay una tabla actual o añade una tabla al objeto de tabla existente.

#### Agregar a existente

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

#### Agregar a vacío

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add Table( Row Table( Grouping Columns( :age ) ) );

```

### Aggregate Statistics

**Sintaxis:** Aggregate Statistics( column )

**Descripción:** Agrega a la tabla actual una columna separada para cada nivel de la columna especificada junto con una columna de suma. Durante el script, el mensaje Agregar estadísticos debe de estar dentro de un mensaje, o bien de Tabla de columnas o bien de Tabla de filas.

#### Establecer al agregar a existente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ) ));obj << Modify Table(	Row Table( 1 ),	Grouping Columns( :Region ),	Aggregate Statistics( :Region ));

```

#### Establecer al agregar a nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ), Aggregate Statistics( :Region ) )	));

```

### Change Item Label

**Sintaxis:** obj &lt;&lt; Change Item Label( Statistics( stat name, new string ) )

**Descripción:** Cambia la etiqueta de un campo de entrada de texto de la tabla.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Delete

**Sintaxis:** delete( &lt;analysis columns | grouping columns | statistics&gt;(operand name, operand name, ...))

**Descripción:** Se utiliza con Modificar tabla para eliminar columnas y estadísticos de una tabla existente.

#### Eliminar columna de análisis con nombre

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

#### Eliminar estadístico en el índice

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Statistics( 1 ) ) );

```

### Display Column Width

**Sintaxis:** obj &lt;&lt; Display Column Width( Data Column( &lt;Column Table(n)&gt;, path ), &lt;width&gt; ); obj &lt;&lt; Display Column Width( Row Label( &lt;Row Table(n)&gt;, path ), &lt;width&gt; )

**Descripción:** Establece o devuelve el ancho de visualización de una columna en una tabla de informe Tabular. Path es una secuencia de encabezados de columna entrecomillados que traza la ruta de la columna. Width es el ancho de una columna en píxeles. Utilice Data Column para definir columnas en el cuerpo principal de la tabla o Row Label para las columnas en el área de etiquetas de fila. Si hay varias tablas en el informe, utilice Column Table(n) o Row Table(n) para especificar a qué tabla se aplica path. Si no se especifica width, esta opción devuelve el ancho actual de la columna especificada.

#### Cambiar tamaño de las columnas de datos a anchos iguales

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, Std Dev ) ),		Row Table( Grouping Columns( :Region ) )	));stats = {"Min", "Max", "Mean", "Std Dev"};ns = N Items( stats );a = {};For( i = 1, i <= ns, i++,	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) ));amax = Max( a );For( i = 1, i <= ns, i++,	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax ));

```

#### Establecer ancho de la etiqueta de fila

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

#### Obtener ancho de columna

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width(	Column( Column Table( 1 ), "sex", "Female", "Marital status", "Single", "age", "Sum" ));

```

### Full Path Column Name

**Sintaxis:** obj &lt;&lt; Full Path Column Name( true | false )

**Descripción:** Si se establece, el nombre de columna de la tabla de salida debe incluir el nombre de las columnas de agrupación

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Full Path Column Name( 1 );obj << Make Into Data Table;

```

### Ignore duplicate responses

**Sintaxis:** obj &lt;&lt; Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP Versión agregada:** 19

#### Establecer en existente

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 );

```

#### Establecer en nuevo

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

### Ignore duplicates in multiple response columns

**Sintaxis:** obj &lt;&lt; Ignore duplicates in multiple response columns( state=0|1 )

**Descripción:** Ignora las respuestas duplicadas en columnas de respuestas múltiples. Cada respuesta repetida se trata como una sola instancia.

**JMP Versión agregada:** 19

#### Establecer en existente

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicates In Multiple Response Columns( 1 );

```

#### Establecer en nuevo

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicates In Multiple Response Columns( 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

### Include missing for grouping columns

**Sintaxis:** obj &lt;&lt; Include missing for grouping columns( state=0|1 )

**Descripción:** Agrega una columna separada con los conteos de los valores que faltan para todas las columnas de agrupación de la tabla actual.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));obj << Include Missing For Grouping Columns( 1 );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Include Missing For Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));

```

### Make Into Data Table

**Sintaxis:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt;, &lt;Output Table( table name)&gt;, &lt;Full Path Column Name(bool)&gt; )

**Descripción:** Crea una nueva tabla de datos a partir de la tabla creada en Tabular.

#### Crear en tabla de datos

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make Into Data Table;

```

#### Crear en tabla de datos invisible

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Invisible( 1 ) );

```

#### Usar nombre de columna de ruta completa

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Full Path Column Name( 1 ) );

```

### Max scroll locked columns

**Sintaxis:** obj &lt;&lt; Max scroll locked columns( number=3 )

**Descripción:** Establezca el número máximo de columnas en las que se aplicará la protección frente a desplazamiento. Se bloquearán todas las columnas de encabezado de fila o ninguna. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

#### Límite dentro del conteo de encabezados permitido

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 2 );obj << Make Into Data Table;

```

#### Límite inferior del conteo de encabezados

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 1 );obj << Make Into Data Table;

```

### Missing sum is zero

**Sintaxis:** obj &lt;&lt; Missing sum is zero( state=0|1 )

**Descripción:** Especifica si los valores faltantes del estadístico de resumen de la suma deben mostrarse como 0 o como faltantes.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));obj << Missing Sum Is Zero( 1 );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Missing Sum Is Zero( 1 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));

```

### Modify Table

**Sintaxis:** obj &lt;&lt; Modify Table( &lt;Column Table | Row Table&gt;(table index), ... )

**Descripción:** Modifica una tabla existente.

#### Crear y editar tabla completa

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add table( Row Table( Grouping Columns( :age ) ) );obj << Add Table( Column Table( Analysis Columns( :height ) ) );obj << Add Table( Column Table( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Statistics( Min, Max ) );obj << Modify Table( Column Table( 2 ), Grouping Columns( :sex ) );obj << Modify Table( Column Table( 2 ), Analysis Columns( :weight ) );Wait( 1 );obj << Modify Table( Column Table( 2 ), Delete( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Delete( Statistics( Sum ) ) );

```

#### Eliminar columna de análisis

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

### Modify Table Option

**Sintaxis:** obj &lt;&lt; Modify Table Option

**Descripción:** Se utiliza con Modificar tabla para modificar las opciones de una tabla existente.

#### Apilar columnas de agrupación en existente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ) )	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

#### Cambiar etiqueta de grupo apilado en existente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )	));obj << Modify Table(	Row Table( 1 ),	Modify Table Option( Change Stacked Group Label ),	"new label");

```

### Move

**Sintaxis:** move(&lt;Column Table | Row Table&gt;(table index), &lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)&gt;)

**Descripción:** Se utiliza con Modificar tabla para mover columnas y estadísticos en una tabla existente.

**JMP Versión agregada:** 19

#### Mover columna de agrupación de la tabla de columnas a la tabla de filas

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Row Table( 1 ),	Move( Column Table( 1 ), Grouping Column( :Type ) ),	Before First);

```

#### Mover estadístico después del nombrado

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Move( Column Table( 1 ), Statistics( Mean ) ),	After( Statistics( Max ) ));

```

### Order By Count

**Sintaxis:** obj &lt;&lt; Order By Count( Grouping Columns( column ), true | false )

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));obj << Order By Count( Grouping Columns( :age ), 1 );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order By Count( Grouping Columns( :age ), 1 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));

```

### Order by count of grouping columns

**Sintaxis:** obj &lt;&lt; Order by count of grouping columns( state=0|1 )

**Descripción:** Ordena los niveles de las columnas de agrupación por conteos en la tabla.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));obj << Order by Count of Grouping Columns( 1 );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order by Count of Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));

```

### Pack

**Sintaxis:** obj &lt;&lt; Pack( &lt;Analysis columns | Statistics&gt;(operand name, ...), &lt;Template&gt; )

**Descripción:** Apila varios estadísticos en una columna de la tabla. La opción Template especifica el formato de los elementos.

#### Empaquetar columnas de análisis en existente

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table(	Column Table( 1 ),	Pack(		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),		Template( "^FIRST  (^OTHERS)", "/" )	));

```

#### Empaquetar columnas de análisis en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ) )		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### Empaquetar columnas de análisis en nuevo con plantilla

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

### Plot Scale

**Sintaxis:** obj &lt;&lt; Plot Scale( min, max )

**Descripción:** Establece la escala en el diagrama de barras.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**Sintaxis:** obj &lt;&lt; Remove Column Label( Grouping Columns( column ) )

**Descripción:** Quita la etiqueta de columna especificada en la tabla.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));Wait( 2 );obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**Sintaxis:** obj &lt;&lt; Restore Column Label( Grouping Columns( column ) )

**Descripción:** Restaura en la tabla la etiqueta de columna especificada y previamente quitada.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));obj << Remove Column Label( Grouping Columns( :Region ) );Wait( 2 );obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**Sintaxis:** Retype( &lt;Analysis Columns | Grouping Columns&gt;( operand name, ... ), &lt;Analysis Column | Gropuing Column&gt; )

**Descripción:** Se utiliza con Modificar tabla para convertir columnas de análisis en columnas de agrupación, y viceversa, en una tabla existente.

**JMP Versión agregada:** 19

#### Cambiar columna de agrupación a columna de análisis

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Grouping Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

#### Cambiar columna de análisis a columna de agrupación

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Analysis Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Analysis Column( :age ) ), Grouping Column );

```

### Save grouping as tags in data table export

**Sintaxis:** obj &lt;&lt; Save grouping as tags in data table export( state=0|1 )

**Descripción:** Establece si los niveles de agrupación se deben incluir en la tabla de datos como etiquetas de columna. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

#### Guardar etiquetas

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 1 );obj << Make Into Data Table;

```

#### No guardar etiquetas

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 0 );obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**Sintaxis:** obj &lt;&lt; Scroll lock row headers in data table export( state=0|1 )

**Descripción:** Establece si se deben bloquear las columnas que contienen los encabezados de fila para que no se puedan desplazar. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

#### No proteger frente a desplazamiento de los encabezados de fila

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 0 );obj << Make Into Data Table;

```

#### Proteger frente a desplazamiento de los encabezados de fila

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Make Into Data Table;

```

### Set Format

**Sintaxis:** Set Format( statistic( Column( format ) )

**Descripción:** Establece el formato visualizado para las columnas de análisis.

#### Formatear en existente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Set Format( Mean( :OZONE( 6, 4 ) ) );

```

#### Formatear estadístico sin columna de análisis

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Row %( Format( 9, 1, "Percent" ) ) ),	Add Table( Column Table( Grouping Columns( :age ), Statistics( Row % ) ) ));

```

#### Formatear un solo estadístico y columna de análisis

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### Formatear varios estadísticos y columnas de análisis

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Tabulate(	Show Control Panel( 0 ),	Set Format(		Mean(			:height( 10, 1 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 10, "Best" )			)		),		"% of Total"n(			:height( 12, 2 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 12, 2 )			)		)	),	Add Table(		Column Table(			Analysis Columns(				:height,				Transform Column( "Log[height]", Formula( Log( :height ) ) )			),			Statistics( Mean, "% of Total"n )		),		Row Table( Grouping Columns( :sex ) )	));

```

### Show Chart

**Sintaxis:** obj &lt;&lt; Show Chart( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de barras generado a partir de la tabla creada en Tabular.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );

```

### Show Control Panel

**Sintaxis:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Descripción:** Muestra u oculta el panel de control utilizado para manipular la tabla creada en Tabular. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Control Panel( 1 );

```

### Show Shading

**Sintaxis:** obj &lt;&lt; Show Shading( state=0|1 )

**Descripción:** Muestra u oculta alternativamente las líneas sombreadas y sin sombrear en la tabla creada en Tabular. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Shading( 1 );

```

### Show Table

**Sintaxis:** obj &lt;&lt; Show Table( state=0|1 )

**Descripción:** Muestra u oculta la tabla creada en Tabular. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Table( 1 );

```

### Show Test Build Panel

**Sintaxis:** obj &lt;&lt; Show Test Build Panel( state=0|1 )

**Descripción:** Muestra u oculta el panel que controla el muestreo para una generación de prueba de la tabla.

#### Mostrar para existente

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Show Test Build Panel( 1 );

```

#### Mostrar para nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Show Test Build Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

### Show Tooltip

**Sintaxis:** obj &lt;&lt; Show Tooltip( state=0|1 )

**Descripción:** Muestra u oculta las informaciones sobre herramienta cuando se pasa el ratón por las zonas de colocación y los menús de la salida Tabular.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**Sintaxis:** Stack Grouping Columns(0 | 1)

**Descripción:** Apila las columnas de agrupación en una única columna utilizando la sangría para mostrar la estructura de anidación.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size )		)	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( 1 ) ) );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

### Statistics

**Sintaxis:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**Descripción:** Agrega estadísticos a una columna o fila de la tabla. Durante el script, el mensaje de Estadísticos() se encuentra junto al mensaje de identificación Columnas de análisis( columna ), y ambos están anidados dentro de un comando, o bien Tabla de filas() o bien Tabla de columnas().

#### Agregar a existente

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Statistics( Min ) );

```

#### Agregar a nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));

```

### Test Build

**Sintaxis:** obj &lt;&lt; Test Build( Sample Size( number ) )

**Descripción:** Muestra la tabla mediante una muestra de generación de prueba de los datos de tamaño number.

#### Establecer en existente

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );

```

#### Establecer en nuevo

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Test Build( Sample Size( 100 ) ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

### Test Data View

**Sintaxis:** obj &lt;&lt; Test Data View

**Descripción:** Muestra la tabla de datos utilizada como muestra para generar la tabla de prueba.

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );obj << Test Data View;

```

### Undo

**Sintaxis:** obj &lt;&lt; Undo

**Descripción:** Quita el efecto de la última operación efectuada a la tabla actual.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );Wait( 2 );obj << Undo;

```

### Uniform plot scale

**Sintaxis:** obj &lt;&lt; Uniform plot scale( state=0|1 )

**Descripción:** Establece las escalas para que todas las subcategorías del diagrama de barras sean iguales. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Uniform Plot Scale( 1 );

```

### Unpack

**Sintaxis:** obj &lt;&lt; Unpack( &lt;Analysis columns | Statistics&gt;(operand name, ...) )

**Descripción:** Desempaqueta un conjunto de columnas empaquetadas.

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Timing;Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**Sintaxis:** obj &lt;&lt; Report; Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Tabulate(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

