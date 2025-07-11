# Explore Patterns



### Action

**Sintaxis:** obj << Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**Buscar por nombre**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**Preajuste anónimo**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj << Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### By

**Sintaxis:** obj << By( column(s) )

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( :SITEID ) );

```

### Clear Cell Colors

**Sintaxis:** obj << Clear Cell Colors

**Descripción:** Borra los colores de celda de las columnas seleccionadas o de todas las columnas si no se selecciona ninguna. En JSL, puede especificar una lista de nombres de columnas.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 3 ),
	Linear Relationships( 1 )
);
obj << Colorize Linear Relationships;
Wait( 2 );
obj << Clear Cell Colors;

```

### Colorize Duplicates Across Columns

**Sintaxis:** obj << Colorize Duplicates Across Columns

**Descripción:** Colorea las celdas de la tabla de datos para que se correspondan con las coincidencias duplicadas encontradas en el informe Duplicados en columnas.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Duplicates Across Columns( 1 )
);
obj << Colorize Duplicates Across Columns;

```

### Colorize Linear Relationships

**Sintaxis:** obj << Colorize Linear Relationships

**Descripción:** Colorea las celdas de la tabla de datos para que se correspondan con las relaciones lineales encontradas en la tabla Relaciones lineales entre variables.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 3 ),
	Linear Relationships( 1 )
);
obj << Colorize Linear Relationships;

```

### Column Switcher

**Sintaxis:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Columns

**Sintaxis:** obj << Columns( column(s) )

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Data Table Window;

```

### Distribution wrt Spec Limits

**Sintaxis:** obj << Distribution wrt Spec Limits( state=0|1 )

**Descripción:** Muestra u oculta una tabla de observaciones observadas frente a esperadas que están fuera de los límites de especificación.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Processes" ) ),
	Distribution wrt Spec Limits( 1 )
);

```

### Duplicates Across Columns

**Sintaxis:** obj << Duplicates Across Columns( state=0|1 )

**Descripción:** Muestra u oculta un informe que contiene una tabla de secuencias de valores que aparecen en las mismas filas de más de una columna.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Duplicates Across Columns( 1 )
);

```

### Explore Patterns

**Sintaxis:** Explore Patterns( Y( columns ) )

**Descripción:** Buscar características inusuales en los datos, incluidas las corridas largas, las secuencias largas duplicadas, los valores con formatos inusuales y las corridas de relaciones lineales.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

### Formatted Widths

**Sintaxis:** obj << Formatted Widths( state=0|1 )

**Descripción:** Muestra u oculta los anchos generales y los anchos decimales de los valores con formato.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Formatted Widths( 1 )
);

```

### Fraction Length

**Sintaxis:** obj << Fraction Length( state=0|1 )

**Descripción:** Muestra u oculta la longitud de las fracciones continuadas para los valores. Los números aleatorios se muestran como 15, que es el límite. Los números irracionales tienden a tener longitudes de fracción más altas, dependiendo de su cercanía a una fracción.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Fraction Length( 1 )
);

```

### Get By Levels

**Sintaxis:** obj << Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj << Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**Plataforma con filtro**

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj << Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj << Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj << Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Include Missing

**Sintaxis:** obj = Explore Patterns(...Include Missing( state=0|1 )...)

**Descripción:** Especifica que los valores faltantes se incluirán en la detección de patrones.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Include Missing( 1 )
);

```

### Leading and Trailing Digits

**Sintaxis:** obj << Leading and Trailing Digits( state=0|1 )

**Descripción:** Muestra u oculta una tabla de conteos para cada dígito inicial y final, de 1 a 9.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Leading and Trailing Digits( 1 )
);

```

### Linear Relationships

**Sintaxis:** obj << Linear Relationships( state=0|1 )

**Descripción:** Muestra u oculta un informe de columnas que están linealmente relacionadas con otras columnas sobre un número especificado de filas secuenciales.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 3 ),
	Linear Relationships( 1 )
);

```

### Local Data Filter

**Sintaxis:** obj << Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```js

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

### Longest Duplicated Sequences

**Sintaxis:** obj << Longest Duplicated Sequences( state=0|1 )

**Descripción:** Muestra u oculta una tabla de la secuencia de valores más larga que aparece más de una vez en la misma columna. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Longest Duplicated Sequences( 0 )
);
Wait( 2 );
obj << Longest Duplicated Sequences( 1 );

```

### Longest Runs

**Sintaxis:** obj << Longest Runs( state=0|1 )

**Descripción:** Muestra u oculta las corridas más largas del mismo valor. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), Longest Runs( 0 ) );
Wait( 2 );
obj << Longest Runs( 1 );

```

### Minimum Cross Column Duplicate Run Size

**Sintaxis:** obj = Explore Patterns(...Minimum Cross Column Duplicate Run Size( number=2 )...)

**Descripción:** Especifica la longitud mínima de una secuencia para que se considere que es una secuencia duplicada en columnas. "2" de forma predeterminada.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Cross Column Duplicate Run Size( 3 ),
	Duplicates Across Columns( 1 )
);

```

### Minimum Longest Duplicate Size

**Sintaxis:** obj = Explore Patterns(...Minimum Longest Duplicate Size( number=2 )...)

**Descripción:** Especifica la longitud mínima de una secuencia para que se considere que es una secuencia duplicada en una columna. "2" de forma predeterminada.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Longest Duplicate Size( 5 ),

);

```

### Minimum Rows for Linear Relationship

**Sintaxis:** obj = Explore Patterns(...Minimum Rows for Linear Relationship( number=10 )...)

**Descripción:** Especifica el número mínimo de filas utilizadas para detectar relaciones lineales entre columnas en grupos de filas. "10" de forma predeterminada.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 3 ),
	Linear Relationships( 1 )
);

```

### Minimum Run Size

**Sintaxis:** obj = Explore Patterns(...Minimum Run Size( number=2 )...)

**Descripción:** Especifica el número mínimo de valores en una fila para que se considere que una secuencia es una corrida. "2" de forma predeterminada.

**JMP Versión agregada:** 15

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Run Size( 3 )
);

```

### Most Duplicated Values

**Sintaxis:** obj << Most Duplicated Values( state=0|1 )

**Descripción:** Muestra u oculta los valores más duplicados. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Most Duplicated Values( 0 )
);
Wait( 2 );
obj << Most Duplicated Values( 1 );

```

### New JSL Preset

**Sintaxis:** New JSL Preset( preset )

**Descripción:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP Versión agregada:** 18

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Order by Column Name

**Sintaxis:** obj << Order by Column Name

**Descripción:** Ordena alfabéticamente la lista de columnas por nombre de columna.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
Wait( 2 );
obj << Order by Column Name;

```

### Order by Runs Rarity

**Sintaxis:** obj << Order by Runs Rarity

**Descripción:** Ordena la lista de columnas por los valores de rareza de las corridas más largas. Los valores de rareza más altos aparecen en la parte superior.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
Wait( 2 );
obj << Order by Runs Rarity;

```

### Order by Sequence Rarity

**Sintaxis:** obj << Order by Sequence Rarity

**Descripción:** Ordena la lista de columnas por los valores de rareza de las secuencias duplicadas más largas. Los valores de rareza más altos aparecen en la parte superior.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
Wait( 2 );
obj << Order by Sequence Rarity;

```

### Original Order

**Sintaxis:** obj << Original Order

**Descripción:** Ordena la lista de columnas según el orden original en el que se especificaron las columnas en la ventana de inicio.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Order by Sequence Rarity
);
Wait( 2 );
obj << Original Order;

```

### Paste Local Data Filter

**Sintaxis:** obj << Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj << Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Duplicates Across Columns

**Sintaxis:** obj << Save Duplicates Across Columns

**Descripción:** Guarda la tabla Duplicados en columnas en una nueva tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Duplicates Across Columns( 1 )
);
obj << Save Duplicates Across Columns;

```

### Save Linear Relationships

**Sintaxis:** obj << Save Linear Relationships

**Descripción:** Guarda las relaciones lineales que existen entre la tabla de valores en una nueva tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns(
	Y( Column Group( "Laboratory Results" ) ),
	Minimum Rows for Linear Relationship( 3 ),
	Linear Relationships( 1 )
);
obj << Save Linear Relationships;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Save Script to Script Window;

```

### Save Table of Duplicate Sequences

**Sintaxis:** obj << Save Table of Duplicate Sequences

**Descripción:** Guarda las secuencias duplicadas más largas para todas las columnas en una nueva tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Save Table of Duplicate Sequences;

```

### Save Table of Runs

**Sintaxis:** obj << Save Table of Runs

**Descripción:** Guarda las corridas más largas para todas las columnas en una nueva tabla de datos.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Save Table of Runs;

```

### Select Columns

**Sintaxis:** obj << Select Columns( {list of columns} or ALL )

**Descripción:** Especifica las columnas que se muestran en el informe Patrones univariantes.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Select Columns( {:BUN, :Creatinine, :Glucose} );

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```js

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

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Spec Limit Matches

**Sintaxis:** obj << Spec Limit Matches( state=0|1 )

**Descripción:** Muestra u oculta los valores que son exactamente iguales al límite inferior de especificación, al límite superior de especificación o al objetivo.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Processes" ) ), Spec Limit Matches( 1 ) );

```

### Sync to Data Table Changes

**Sintaxis:** obj << Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```js

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintaxis:** obj << View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Explore Patterns(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>Elemento de inicio: Sí</b>

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### Y

**Sintaxis:** obj << Y( column(s) )

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nicardipine Lab Patterns.jmp" );
obj = dt << Explore Patterns( Y( Column Group( "Laboratory Results" ) ) );

```

