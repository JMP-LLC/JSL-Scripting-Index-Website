# Tabulate



## Constructores asociados

### Tabulate

**Sintaxis:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**Descripción:** Crea una tabla personalizada de estadísticos de resumen de una o más variables. Las variables se pueden agrupar en una o más columnas de clasificación. Le permite construir la tabla de resumen mediante operaciones de arrastrar y colocar.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

## Mensajes del elemento

### Add

**Sintaxis:** add (<Column Table | Row Table>(table index), <before first | <before | after>(<analysis column | grouping column | statistic>(<operand name | index>))>, <analysis column | grouping column | statistic>(operand name)),

**Descripción:** Used with Modificar tabla to add columns and statistics to an existing table. Also serves as an alias for Agregar tabla

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	column table( 1 ),
	Add( After( Statistics( max ) ), Statistics( Range ) )
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), Add( Before First, Statistics( Range ) ) );

```

### Add Table

**Sintaxis:** Add Table( <Column Table( )>, <Row Table( )> )

**Descripción:** Agrega una tabla a la ventana si no hay una tabla actual o añade una tabla al objeto de tabla existente.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );

```

### Aggregate Statistics

**Sintaxis:** Aggregate Statistics( column )

**Descripción:** Agrega a la tabla actual una columna separada para cada nivel de la columna especificada junto con una columna de suma. Durante el script, el mensaje Agregar estadísticos debe de estar dentro de un mensaje, o bien de Tabla de columnas o bien de Tabla de filas.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis columns( :OZONE ), statistics( mean ) ),
		Row Table( Grouping Columns( :Region ), aggregate statistics( :Region ) )
	)
);

```

### Analysis Columns

**Sintaxis:** Analysis Columns( Column(s) )

**Descripción:** Agrega columnas de análisis a la tabla actual. Se puede utilizar con el comando Agregar tabla o el comando Modificar tabla.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
obj << modifytable( column table( 1 ), analysis columns( :CO ) );

```

### Change Item Label

**Sintaxis:** obj << Change Item Label( Statistics( stat name, new string ) )

**Descripción:** Cambia la etiqueta de un campo de entrada de texto de la tabla.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Columns by Categories

**Sintaxis:** Columns by Categories( column1, column2, ...) )

**Descripción:** Agrega a la tabla una tabulación cruzada de los nombres de columna y las categorías recopiladas para columnas con valores similares.  Durante el script, el mensaje Columnas por categorías debe estar dentro de un mensaje, o bien de Tabla de columnas o bien de Tabla de filas.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) )
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate(
	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) )
);
obj << modify table( row table( 1 ), columns by categories( :Money ) );

```

### Delete

**Sintaxis:** delete( <analysis columns | grouping columns | statistics>(operand name, operand name, ...))

**Descripción:** Used with Modificar tabla to remove columns and statistics from an existing table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

### Display Column Width

**Sintaxis:** obj << Display Column Width( Data Column( <Column Table(n)>, path ), <width> );

obj << Display Column Width( Row Label( <Row Table(n)>, path ), <width> )

**Descripción:** Establece o devuelve el ancho de visualización de una columna en una tabla de informe Tabular. Path es una secuencia de encabezados de columna entrecomillados que traza la ruta de la columna. Width es el ancho de una columna en píxeles. Utilice Data Column para definir columnas en el cuerpo principal de la tabla o Row Label para las columnas en el área de etiquetas de fila. Si hay varias tablas en el informe, utilice Column Table(n) o Row Table(n) para especificar a qué tabla se aplica path. Si no se especifica width, esta opción devuelve el ancho actual de la columna especificada.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table(
			Grouping Columns( :sex, :marital status ),
			Analysis Columns( :age ),
			Statistics( Sum, "% of Total" )
		),
		Row Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Set Format( Mean( :OZONE( 6, 4 ) ) ),
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, std dev ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
stats = {"Min", "Max", "Mean", "Std Dev"};
ns = N Items( stats );
a = {};
For( i = 1, i <= ns, i++,
	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) )
);
amax = Max( a );
For( i = 1, i <= ns, i++,
	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax )
);

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table(
			Grouping Columns( :sex, :marital status ),
			Analysis Columns( :age ),
			Statistics( Sum, "% of Total" )
		),
		Row Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Display Column Width( Row Label( Row Table( 2 ), "country" ) );

```

### Freq

**Sintaxis:** Freq( Column )

**Descripción:** Especifica la columna de frecuencia que se debe usar al calcular los estadísticos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Grouping Columns( :Causes ) ) ) );
Wait( 1 );
obj << Freq( :Count );

```

### Full Path Column Name

**Sintaxis:** obj << Full Path Column Name( true | false )

**Descripción:** Si se establece, el nombre de columna de la tabla de salida debe incluir el nombre de las columnas de agrupación

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Full Path Column Name( 1 );
obj << Make Into Data Table;

```

### Grouping Columns

**Sintaxis:** Grouping Columns( Column(s) )

**Descripción:** Agrega columnas de agrupación a la tabla actual. Se puede utilizar con el comando Agregar tabla o el comando Modificar tabla.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << modify table( column table( 1 ), grouping column( :age ) );

```

### ID

**Sintaxis:** ID( Column )

**Descripción:** Especifica la columna de identificadores que se utiliza para contar los eventos unívocos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Set Format( Uniform Format( 10, 2 ) ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name ) )
	)
);
Wait( 1 );
obj << ID( :Division );

```

### Ignore duplicate responses

**Sintaxis:** obj << Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP Versión agregada:** 19

### Ignore duplicates in multiple response columns

**Sintaxis:** obj << Ignore duplicates in multiple response columns( state=0|1 )

**Descripción:** Ignores duplicate responses in multiple response columns. Each repeated response is treated as a single occurrence.

**JMP Versión agregada:** 19

### Include missing for grouping columns

**Sintaxis:** obj << Include missing for grouping columns( state=0|1 )

**Descripción:** Agrega una columna separada con los conteos de los valores que faltan para todas las columnas de agrupación de la tabla actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate(
	Add Table( Row Table( Grouping Columns( :Doors ) ) ),
	Include missing for grouping columns( 1 )
);

```

### Make Into Data Table

**Sintaxis:** obj << Make Into Data Table( <Invisible(bool) | Private(bool)>, <Output Table ( table name)>, <Full Path Column Name(bool)> )

**Descripción:** Crea una nueva tabla de datos a partir de la tabla creada en Tabular.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make Into Data Table;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make into Data Table( invisible( 1 ) );

```

**Ejemplo 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make into Data Table( Full Path Column Name( 1 ) );

```

### Max scroll locked columns

**Sintaxis:** obj << Max scroll locked columns( number=3 )

**Descripción:** Set the maximum number of columns to be scroll locked. Either all or none of the row header columns will be locked. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Max Scroll Locked Columns( 1 );
obj << Make Into Data Table;

```

### Missing sum is zero

**Sintaxis:** obj << Missing sum is zero( state=0|1 )

### Modify Table

**Sintaxis:** obj << Modify Table( <Column Table | Row Table>(table index), ... )

**Descripción:** Modifies an existing table.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );
obj << Add Table( Column Table( Analysis Column( :height ) ) );
obj << Add Table( Column Table( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), statistics( min, max ) );
obj << Modify Table( Column Table( 2 ), grouping columns( :sex ) );
obj << Modify Table( Column Table( 2 ), Analysis Column( :Weight ) );
Wait( 1 );
obj << Modify Table( Column Table( 2 ), delete( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), delete( statistics( "sum" ) ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

### Modify Table Option

**Sintaxis:** obj << Modify Table Option

**Descripción:** Used with Modificar tabla to modify table options in an existing table.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ) )
	)
);
obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )
	)
);
obj << Modify Table(
	Row Table( 1 ),
	Modify Table Option( Change Stacked Group Label ),
	"new label"
);

```

### Move

**Sintaxis:** move (<Column Table | Row Table>(table index), <analysis column | grouping column | statistic>(<operand name | index>)), <before first | <before | after>(<analysis column | grouping column | statistic>(<operand name | index>)>)

**Descripción:** Used with Modificar tabla to move columns and statistics in an existing table.

**JMP Versión agregada:** 19

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	column table( 1 ),
	move( column table( 1 ), Statistics( mean ) ),
	After( Statistics( max ) )
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	row table( 1 ),
	move( column table( 1 ), Grouping Column( :Type ) ),
	before first
);

```

### Order By Count

**Sintaxis:** obj << Order By Count( Grouping Columns( column ), true | false )

### Order by count of grouping columns

**Sintaxis:** obj << Order by count of grouping columns( state=0|1 )

**Descripción:** Ordena los niveles de las columnas de agrupación por conteos en la tabla.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Grouping Columns( :Make ) ) ) );
obj << Order by Count of Grouping Columns( 1 );

```

### Pack

**Sintaxis:** obj << Pack( <Analysis columns | Statistics>(operand name, ...), <Template> )

**Descripción:** Apila varios estadísticos en una columna de la tabla. La opción Template especifica el formato de los elementos.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table(
	Column Table( 1 ),
	Pack(
		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
		Template( "^FIRST  (^OTHERS)", "/" )
	)
);

```

### Page Column

**Sintaxis:** Page Column( Column )

**Descripción:** Especifica la columna de la página que se debe usar para configurar las páginas del informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age ) )
	)
);
Wait( 1 );
obj << page column( :sex( "F" ) );

```

### Plot Scale

**Sintaxis:** obj << Plot Scale( min, max )

**Descripción:** Establece la escala en el diagrama de barras.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**Sintaxis:** obj << Remove Column Label( Grouping Columns( column ) )

**Descripción:** Quita la etiqueta de columna especificada en la tabla.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
Wait( 2 );
obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**Sintaxis:** obj << Restore Column Label( Grouping Columns( column ) )

**Descripción:** Restaura en la tabla la etiqueta de columna especificada y previamente quitada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
obj << Remove Column Label( Grouping Columns( :Region ) );
Wait( 2 );
obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**Sintaxis:** Retype( <Analysis Columns | Grouping Columns>( operand name, ... ), <Analysis Column | Gropuing Column> )

**Descripción:** Used with Modificar tabla to convert between analysis columns and grouping columns in an existing table.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( N ), Grouping Columns( :age ) ),
		Row Table( Grouping Columns( :sex ) )
	)
);
obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

### Save grouping as tags in data table export

**Sintaxis:** obj << Save grouping as tags in data table export( state=0|1 )

**Descripción:** Sets if the grouping levels should be included in the data table as column tags. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save grouping as tags in data table export( 0 );
obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**Sintaxis:** obj << Scroll lock row headers in data table export( state=0|1 )

**Descripción:** Sets if the columns containing the row headers should be scroll locked. Opción activada de forma predeterminada.

**JMP Versión agregada:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Scroll lock row headers in data table export( 0 );
obj << Make Into Data Table;

```

### Set Format

**Sintaxis:** Set Format( statistic( Column( format ) )

**Descripción:** Establece el formato visualizado para las columnas de análisis.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Set Format( Mean( :OZONE( 6, 4 ) ) ),
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Tabulate(
	Set Format(
		Mean(
			:height( 10, 1 ),
			Analysis Column(
				Transform Column( "Log[height]", Formula( Log( :height ) ) ),
				Format( 10, "Best" )
			)
		),
		"% of Total"n(
			:height( 12, 2 ),
			Analysis Column(
				Transform Column( "Log[height]", Formula( Log( :height ) ) ),
				Format( 12, 2 )
			)
		)
	),
	Add Table(
		Column Table(
			Analysis Columns(
				:height,
				Transform Column( "Log[height]", Formula( Log( :height ) ) )
			),
			Statistics( Mean, "% of Total"n )
		),
		Row Table( Grouping Columns( :sex ) )
	)
);

```

### Show Chart

**Sintaxis:** obj << Show Chart( state=0|1 )

**Descripción:** Muestra u oculta un diagrama de barras generado a partir de la tabla creada en Tabular.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );

```

### Show Control

**Sintaxis:** obj << Show Control( state=0|1 )

### Show Control Panel

**Sintaxis:** obj << Show Control Panel( state=0|1 )

**Descripción:** Muestra u oculta el panel de control utilizado para manipular la tabla creada en Tabular. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Control Panel( 1 );

```

### Show Shading

**Sintaxis:** obj << Show Shading( state=0|1 )

**Descripción:** Muestra u oculta alternativamente las líneas sombreadas y sin sombrear en la tabla creada en Tabular. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Shading( 1 );

```

### Show Table

**Sintaxis:** obj << Show Table( state=0|1 )

**Descripción:** Muestra u oculta la tabla creada en Tabular. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Table( 1 );

```

### Show Test Build Panel

**Sintaxis:** obj << Show Test Build Panel( state=0|1 )

**Descripción:** Muestra u oculta el panel que controla el muestreo para una generación de prueba de la tabla.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Show Test Build Panel( 1 );

```

### Show Tooltip

**Sintaxis:** obj << Show Tooltip( state=0|1 )

**Descripción:** Muestra u oculta las informaciones sobre herramienta cuando se pasa el ratón por las zonas de colocación y los menús de la salida Tabular.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**Sintaxis:** Stack Grouping Columns(0 | 1)

**Descripción:** Apila las columnas de agrupación en una única columna utilizando la sangría para mostrar la estructura de anidación.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :marital status ),
			Add Aggregate Statistics( :marital status ),
			Analysis Columns( :age ),
			Statistics( Min, Max )
		),
		Row Table(
			Grouping Columns( :sex, :country, :size ),
			Add Aggregate Statistics( :sex, :country, :size ),
			Stack Grouping Columns( 1 )
		)
	)
);

```

### Statistics

**Sintaxis:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**Descripción:** Agrega estadísticos a una columna o fila de la tabla. Durante el script, el mensaje de Estadísticos() se encuentra junto al mensaje de identificación Columnas de análisis( columna ), y ambos están anidados dentro de un comando, o bien Tabla de filas() o bien Tabla de columnas().

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

### Test Build

**Sintaxis:** obj << Test Build( Sample Size( number ) )

**Descripción:** Muestra la tabla mediante una muestra de generación de prueba de los datos de tamaño number.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Test Build( Sample Size( 100 ) );

```

### Test Data View

**Sintaxis:** obj << Test Data View

**Descripción:** Muestra la tabla de datos utilizada como muestra para generar la tabla de prueba.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Test Build( Sample Size( 100 ) );
obj << Test Data View;

```

### Undo

**Sintaxis:** obj << Undo

**Descripción:** Quita el efecto de la última operación efectuada a la tabla actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );
Wait( 2 );
obj << undo;

```

### Uniform plot scale

**Sintaxis:** obj << Uniform plot scale( state=0|1 )

**Descripción:** Establece las escalas para que todas las subcategorías del diagrama de barras sean iguales. Opción activada de forma predeterminada.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Uniform Plot Scale( 1 );

```

### Unpack

**Sintaxis:** obj << Unpack( <Analysis columns | Statistics>(operand name, ...) )

**Descripción:** Unpacks a packed set of columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack(
				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),
				Template( "^FIRST  (^OTHERS)", "/" )
			)
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

### Weight

**Sintaxis:** Weight( Column )

**Descripción:** Especifica la columna de ponderación que se debe usar al calcular los estadísticos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Type ) )
	)
);
Wait( 1 );
obj << Weight( :Weight );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj << Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

**Buscar en las carpetas**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj << Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**Sintaxis:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj << Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

### Get Data Table

**Sintaxis:** obj << Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj << Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Sintaxis:** obj << Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**Sintaxis:** obj = New Preset()

**Descripción:** Crea un preajuste anónimo que representa las opciones y personalizaciones que se aplican al objeto. Este objeto se puede transferir a Apply Preset para copiar la configuración a otro objeto del mismo tipo.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj << Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**Sintaxis:** obj << Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

### Render Preset

**Sintaxis:** Render Preset( preset )

**Descripción:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP Versión agregada:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**Sintaxis:** obj << Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

