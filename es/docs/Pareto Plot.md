# Pareto Plot



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

### Alias

**Sintaxis:** obj << Alias( cause, alias )

**Descripción:** Establece un nombre distinto para una causa.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Alias( "doping", "substitution" ) );

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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Bar Label Format

**Sintaxis:** obj << Bar Label Format

**Descripción:** Establece el formato de las etiquetas de las barras de Pareto.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label( 1 ),
	Bar Label Format( "Currency", "USD", Use thousands separator( 0 ), 12, 0 )
);

```

### Bar Style

**Sintaxis:** obj << Bar Style( "Barra"|"Flotante" )

**Descripción:** Controla la visualización de las barras de Pareto.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Bar Style( Float );

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

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );

```

### Cause

**Sintaxis:** obj << Cause( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Cause Colors

**Sintaxis:** obj << Cause Colors( { { causeName, color },  ...} )

**Descripción:** Cambia el color de las barras especificadas.

**JMP Versión agregada:** 17

**Color RGB único**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {117, 150, 200} );

```

**Lista de colores únicos**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {"corrosion", "Light Gray"} );

```

**Lista de varios colores**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( {{"miscellaneous", "Purple"}, {"silicon defect", "Red"}} );

```

**Todos los colores**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Colors( "Orange" );

```

### Cause Labels

**Sintaxis:** obj << Cause Labels( { { causeName, 0|1 },  ...} )

**Descripción:** Visualiza el conteo como una etiqueta para las barras especificadas.

**JMP Versión agregada:** 17

**Causa única**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {"contamination", 1} )
);

```

**Lista de causas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Cause Labels( {{"contamination", 1}, {"oxide defect", 1}} )
);

```

**Todas las causas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( 1 ) );

```

### Cause Markers

**Sintaxis:** obj << Cause Markers( { { causeName, marker },  ...} )

**Descripción:** Cambia el marcador de porcentaje acumulado en el gráfico para las barras especificadas.

**JMP Versión agregada:** 17

**Causa única**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( {"silicon defect", "Diamond"} );

```

**Lista de causas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( {{"miscellaneous", "Square"}, {"silicon defect", "Diamond"}} );

```

**Todas las causas**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );
obj << Cause Markers( 1 );

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

### Combine Causes

**Sintaxis:** obj << Combine Causes( {cause1, cause2, ... } | << First(N) | << Last(N), <label> )

**Descripción:** Combina las causas especificadas en una única causa. Las causas pueden especificarse como una lista de nombres de causa o enviando el primer o último mensaje con un número de causas que combinar. De forma opcional, se puede especificar una etiqueta para la causa combinada.

**Con etiqueta**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Others" )
);

```

**Enviar último**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Combine Causes( <<Last( 2 ), "Last 2" )
);

```

**Sin etiqueta**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 2 );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );

```

### Copy ByGroup Script

**Sintaxis:** obj << Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj << Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Copy Script;

```

### Cum Line Connect Style

**Sintaxis:** obj << Cum Line Connect Style( "Línea"|"Curva"|"Paso " )

**Descripción:** Controla el estilo de conexión de la línea del porcentaje acumulado.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Line Connect Style( "Step" );

```

### Cum Percent Curve Color

**Sintaxis:** obj << Cum Percent Curve Color( color )

**Descripción:** Cambia el color de la curva de porcentaje acumulado en el gráfico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Cum Percent Curve Color( "Red" );

```

### Cum Percent Label Format

**Sintaxis:** obj << Cum Percent Label Format

**Descripción:** Establece el formato de las etiquetas de los marcadores del porcentaje acumulado.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Label Cum Percent Points( 1 ),
	Cum Percent Label Format( "Percent", 12, 1 )
);

```

### Data Table Window

**Sintaxis:** obj << Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Data Table Window;

```

### Freq

**Sintaxis:** obj << Freq( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Freq( _freqcol )
);
obj << Show Pareto Bars( 0 );

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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Causes

**Sintaxis:** obj << Get Causes( <"First" | "Last" | "First %" | "Last %", number> )

**Descripción:** Devuelve una lista de nombres de causas del diagrama de Pareto basada en el orden de aparición actual. Si no se especifican opciones, se devuelven todas las causas. De lo contrario, utiliza la palabra clave y el número para devolver las primeras N, las últimas N, el primer N por ciento o el último N por ciento.

**JMP Versión agregada:** 17

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "First", 3 );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Get Causes( "Last %", 10 );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Freq( :Count ),
	Combine Causes( {"Corrosion", "Metallization", "Doping"}, "3 Others" ),
	Move to Last( {"3 Others"} )
);
obj << Get Causes( "Last", 3 );

```

### Get Container

**Sintaxis:** obj << Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

**General**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj << Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj << Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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

### Group Settings

**Sintaxis:** obj << Group Settings( Column, <Levels In View( number )>, <Start Level( number ), <Show Title (0|1)>, <Title Color( color )>, <Levels Color( color )> )

**Descripción:** Controla la apariencia del Pareto agrupado.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Group Settings(
		:clean,
		Levels In View( 1 ),
		Start Level( 1 ),
		Title Color( "Blue" ),
		Levels Color( "Light Blue" )
	)
);

```

### Grouping

**Sintaxis:** obj << Grouping( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

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

### Label Cum Percent Points

**Sintaxis:** obj << Label Cum Percent Points( state=0|1 )

**Descripción:** Muestra u oculta las etiquetas que muestran porcentajes acumulados para cada una de las barras en el gráfico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Label Cum Percent Points( 1 );

```

### Legend Position

**Sintaxis:** obj << Legend Position( ("Right" | "Bottom" | "Left" | "Top") )

**Descripción:** Establece la posición de la leyenda.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Legend Position( "Bottom" );

```

### Legend Settings

**Sintaxis:** obj << Legend Settings

**Descripción:** Abre un cuadro de diálogo para modificar las propiedades de la leyenda.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
Wait( 1 );
obj << Legend Settings();

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

### Move to First

**Sintaxis:** obj << Move to First( {level1, level2, ...} | << First(N) | << Last(N) )

**Descripción:** Mueve las barras de los niveles especificados de manera que se visualicen las primeras. Los niveles pueden especificarse como una lista de nombres de causa o enviando el primer o último mensaje con un número de causas que combinar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to First( {"corrosion", "doping"} );

```

### Move to Last

**Sintaxis:** obj << Move to Last( {level1, level2, ...} | << First(N) | << Last(N) )

**Descripción:** Mueve las barras de los niveles especificados de manera que se visualicen las últimas. Los niveles pueden especificarse como una lista de nombres de causa o enviando el primer o último mensaje con un número de causas que combinar.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Move to Last( {"miscellaneous"} );

```

### N Legend

**Sintaxis:** obj << N Legend( state=0|1 )

**Descripción:** Visualiza el tamaño muestral total en el área del gráfico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << N Legend( 1 );

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

### No Plot

**Sintaxis:** obj << No Plot( state=0|1 )

**Descripción:** Cierra el nodo de esquema para el gráfico de Pareto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ), Per Unit Rates( 1 ) );
obj << No Plot( 1 );

```

### Orientation

**Sintaxis:** obj << Orientation( "Vertical"|"Horizontal" )

**Descripción:** Controla la orientación del diagrama de Pareto.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Orientation( "Horizontal" );

```

### Pareto Line Connect Style

**Sintaxis:** obj << Pareto Line Connect Style( "Línea"|"Curva"|"Paso " )

**Descripción:** Controla el estilo de conexión de la línea de Pareto.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Show Pareto Bars( 0 )
);
obj << Pareto Line Connect Style( "Step" );

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

### Per Unit Rates

**Sintaxis:** obj << Per Unit Rates( state=0|1 )

**Descripción:** Compara las tasas de defecto entre los grupos. Si se ha especificado un tamaño muestral, se añaden al informe defectos por unidad (DPU) y partes por millón (PPM).

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot(
	Cause( :Causes ),
	Per Unit Analysis( Constant( Sample Size( 1000 ) ) ),
	Freq( :Count )
);
obj << Per Unit Rates( 1 );

```

### Percent Scale

**Sintaxis:** obj << Percent Scale( state=0|1 )

**Descripción:** Visualiza el eje vertical izquierdo como escala de porcentajes.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );
obj = dt << Pareto Plot( Cause( :failure ) );
obj << Percent Scale( 1 );

```

### Pie Chart

**Sintaxis:** obj << Pie Chart( state=0|1 )

**Descripción:** Visualiza las barras como un gráfico circular.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Pie Chart( 1 );

```

### Redo Analysis

**Sintaxis:** obj << Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj << Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj << Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj << Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
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

### Reorder Horizontal

**Sintaxis:** obj << Reorder Horizontal( level1, level2, ... )

**Descripción:** Reordena horizontalmente los gráficos de Pareto agrupados cuando hay dos o más grupos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Reorder Horizontal( "before", "after" );

```

### Reorder Vertical

**Sintaxis:** obj << Reorder Vertical( level1, level2, ... )

**Descripción:** Reordena verticalmente los gráficos de Pareto agrupados cuando hay dos o más variables.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Reorder Vertical( "Process B", "Process A" );

```

### Report

**Sintaxis:** obj << Report;

Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj << Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj << Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj << Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj << Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj << Save Script for All Objects To Data Table( <name> )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	By( _bycol )
);
obj << Show Pareto Bars( 0 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj << Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj << Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj << Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Save Script to Script Window;

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

### Separate Causes

**Sintaxis:** obj << Separate Causes

**Descripción:** Separa causas combinadas en barras separadas.

**Ejemplo 1**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );
Wait( 2 );
obj << Separate Causes;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Other Causes" );
Wait( 2 );
obj << Separate Causes( "Other Causes" );

```

### Show Cum Percent Axis

**Sintaxis:** obj << Show Cum Percent Axis( state=0|1 )

**Descripción:** Muestra u oculta el eje de porcentaje acumulado en el lado derecho del gráfico. Nota: sólo está disponible en el gráfico de más a la derecha cuando hay una variable X o de agrupación. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Axis( 1 );

```

### Show Cum Percent Curve

**Sintaxis:** obj << Show Cum Percent Curve( state=0|1 )

**Descripción:** Muestra u oculta la curva de porcentaje acumulado. Opción activada de forma predeterminada.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Cum Percent Curve( 1 );

```

### Show Cum Percent Points

**Sintaxis:** obj << Show Cum Percent Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos de porcentaje acumulado en el gráfico.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Show Cum Percent Points( 1 );

```

### Show Error Bars

**Sintaxis:** obj << Show Error Bars( state=0|1 )

**Descripción:** Muestra u oculta las barras de error en las barras de Pareto para el rango de confianza.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Error Bars( 1 );

```

### Show Pareto Bars

**Sintaxis:** obj << Show Pareto Bars( state=0|1 )

**Descripción:** Muestra u oculta las barras que representan el valor de cada causa. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Show Pareto Line

**Sintaxis:** obj << Show Pareto Line( state=0|1 )

**Descripción:** Muestra u oculta una línea que conecta los valores de cada causa.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Line( 1 );

```

### Show Pareto Markers

**Sintaxis:** obj << Show Pareto Markers( state=0|1 )

**Descripción:** Muestra u oculta los marcadores al valor de cada causa.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
obj << Show Pareto Markers( 1 );

```

### Subcategory

**Sintaxis:** obj << Subcategory( column )

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Subcategory Bar Style

**Sintaxis:** obj << Subcategory Bar Style( "En paralelo"|"Apilado"|"Viñeta"|"Anidado"|"Único"|"Aguja"|"Flotante" )

**Descripción:** Controla la visualización de las barras cuando hay una subcategoría presente.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Subcategory( :clean ),
	Freq( :N ),
	Subcategory Bar Style( Stacked )
);

```

### Subset

**Sintaxis:** obj << Subset

**Descripción:** Crea una tabla de datos del subconjunto a partir de las selecciones en el gráfico de Pareto.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
dt << Select Where( :Causes == "Corrosion" );
obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );
obj << Subset;

```

### Swap Group Orientation

**Sintaxis:** obj << Swap Group Orientation( state=0|1 )

**Descripción:** Intercambia los grupos horizontales y verticales. Si solo hay un grupo, cambia la orientación de la visualización.

**JMP Versión agregada:** 17

**Dos grupos**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

```

**Un grupo**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
Wait( 2 );
obj << Swap Group Orientation( true );

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

### Synchronize Y Axes

**Sintaxis:** obj << Synchronize Y Axes( state=0|1 )

**Descripción:** Protege el eje y derecho de modo que el zoom y la panorámica estén sincronizados con el eje y izquierdo. Opción activada de forma predeterminada.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );
obj << Synchronize Y Axes( 0 );

```

### Tables Match Plot

**Sintaxis:** obj << Tables Match Plot( {<Per Unit Rates( 0|1 )>, <Test Rate Within Groups( 0|1 )>, <Test Rates Across Groups( 0|1 )>} )

**Descripción:** Controla si las tablas de análisis de conteo muestran los valores de causas combinadas que coinciden con el diagrama de Pareto o las causas originales sin combinar. Un valor de 1 muestra los valores de causas combinadas. Un valor de 0 muestra los valores sin combinar. No es necesario especificar todas las tablas en el comando.

**JMP Versión agregada:** 17

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Per Unit Rates( 1 ),
	Test Rate Within Groups( 1 ),
	Test Rates Across Groups( 1 ),
	Combine Causes( {"silicon defect", "oxide defect", "doping"}, "3 Others" ),
	Move to Last( {"corrosion", "miscellaneous", "3 Others"} )
);
obj << Tables Match Plot(
	{Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )}
);

```

### Test Rate Within Groups

**Sintaxis:** obj << Test Rate Within Groups( state=0|1 )

**Descripción:** Realiza una prueba de razón de verosimilitud intragrupal para verificar si las causas tienen razones iguales dentro de los grupos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );
obj << Test Rate Within Groups( 1 );

```

### Test Rates Across Groups

**Sintaxis:** obj << Test Rates Across Groups( state=0|1 )

**Descripción:** Realiza una prueba de razón de verosimilitud intergrupal para verificar si las causas tienen razones iguales entre los grupos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );
obj << Test Rates Across Groups( 1 );

```

### Threshold of Combined Causes

**Sintaxis:** obj << Threshold of Combined Causes

**Descripción:** Combina las causas que no llegan al umbral. Esto sucede en el primer inicio de la plataforma.

**% cola**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Tail %( 25 ) )
);

```

**Conteo**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot(
	Cause( :failure ),
	Freq( :N ),
	Threshold of Combined Causes( Count( 5 ) )
);

```

### Title

**Sintaxis:** obj << Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj << Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );
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

### Ungroup Plots

**Sintaxis:** obj << Ungroup Plots( state=0|1 )

**Descripción:** Separa los gráficos de Pareto agrupados cuando hay dos o más grupos.

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );
Wait( 2 );
obj << Ungroup Plots( 1 );

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

### Weight

**Sintaxis:** obj << Weight( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Pareto Plot(
	Cause( :failure ),
	X( :clean ),
	Freq( :N ),
	Show Pareto Line( 1 ),
	Weight( _weightcol )
);
obj << Show Pareto Bars( 0 );

```

### Window View

**Sintaxis:** obj = Show Pareto Bars(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### X

**Sintaxis:** obj << X( column(s) )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

### Y

**Sintaxis:** obj << Y( column )

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );
obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );
obj << Show Pareto Bars( 0 );

```

