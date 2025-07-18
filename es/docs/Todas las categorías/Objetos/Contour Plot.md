# Contour Plot



## Columnas

### By

**Sintaxis:** obj = Contour Plot(...&lt;By( column(s) )&gt;...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Genera varios informes, uno para cada nivel de las variables.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );

```

### X

**Sintaxis:** obj = Contour Plot(...X( column, column )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Dos variables independientes que definen el dominio.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

### Y

**Sintaxis:** obj = Contour Plot(...Y( column(s) )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** La variable de respuesta que se utilizará para calcular curvas de valor constante a lo largo del dominio.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

## Constructores asociados

### Contour Plot

**Sintaxis:** Contour Plot( X( column, column ), Y( column ) )

**Descripción:** Crea un gráfico con tres variables en una vista bidimensional en la que la tercera variable está representada mediante curvas de contorno de igual valor.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );

```

## Mensajes del elemento

### Fill Areas

**Sintaxis:** obj &lt;&lt; Fill Areas( state=0|1 )

**Descripción:** Rellena las áreas entre los contornos del gráfico de contorno con un color sólido.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fill Areas( 1 );

```

### Fit to Window

**Sintaxis:** obj &lt;&lt; Fit to Window( "Automático"|"Activo"|"Desactivado" )

**Descripción:** Establece el comportamiento del ajuste automático de tamaño del informe.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Fit to Window( "Off" );

```

### Generate Grid

**Sintaxis:** dt = obj &lt;&lt; Generate Grid( Xsize, Ysize )

**Descripción:** Guarda en una nueva tabla de datos la cuadrícula de la información de contorno para los contornos trazados actualmente en el gráfico de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Generate Grid( 11, 11 );

```

### Label Contours

**Sintaxis:** obj &lt;&lt; Label Contours( state=0|1 )

**Descripción:** Muestra u oculta la etiqueta o el valor z de las líneas de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Label Contours( 1 );

```

### Retrieve Contours

**Sintaxis:** obj &lt;&lt; Retrieve Contours( table )

**Descripción:** Recupera la información de contorno guardada en una tabla de datos para los contornos trazados en el gráfico de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours(
	Min( -4 ),
	Max( 6 ),
	N( 3 ),
	Contour( 1, -4, -2768895 ),
	Contour( 2, 1, -9344469 ),
	Contour( 3, 6, -13927556 )
);
obj << Save Contours;
obj << Revert Contours;
obj << Retrieve Contours( Data Table( "Contours from Little Pond" ) );

```

### Revert Contours

**Sintaxis:** obj &lt;&lt; Revert Contours

**Descripción:** Revierte cualquier cambio y vuelve a los contornos trazados en el gráfico de contorno.

**JMP Versión agregada:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours(
	Min( -4 ),
	Max( 8 ),
	N( 4 ),
	Contour( 1, -4, -2768895 ),
	Contour( 2, 0, -7700704 ),
	Contour( 3, 4, -12632256 ),
	Contour( 4, 8, -14575206 ),
	Contour( 5, 8, -16517899 )
);
Wait( 2 );
obj << Revert Contours;

```

### Save Contours

**Sintaxis:** dt = obj &lt;&lt; Save Contours

**Descripción:** Guarda en una nueva tabla de datos la información de contorno guardada para los contornos trazados actualmente en el gráfico de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Save Contours;

```

### Save Triangulation

**Sintaxis:** dt = obj &lt;&lt; Save Triangulation

**Descripción:** Lista las coordenadas de todos los triángulos utilizados para construir los contornos en una nueva tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Save Triangulation;

```

### Set Alpha

**Sintaxis:** obj &lt;&lt; Set Alpha( number )

**Descripción:** Establece el valor de alfa para controlar la forma de la delimitación. Un valor 0 da lugar a la envolvente convexa del conjunto de puntos. Los valores de alfa grandes eliminan los triángulos con bordes largos.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Contour Plot(
	X( :Longitude, :Latitude ),
	Y( :Pop ),
	Fill Areas( 1 )
);
obj << Set Alpha( 0.06 );

```

### Show Boundary

**Sintaxis:** obj &lt;&lt; Show Boundary( state=0|1 )

**Descripción:** Muestra u oculta la delimitación alrededor del área total de contorno del gráfico de contorno. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Show Boundary( 1 );

```

### Show Contours

**Sintaxis:** obj &lt;&lt; Show Contours( state=0|1 )

**Descripción:** Muestra u oculta los puntos de datos en el gráfico de contorno. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Show Contours( 1 );

```

### Show Control Panel

**Sintaxis:** obj &lt;&lt; Show Control Panel( state=0|1 )

**Descripción:** Muestra u oculta los controles de la delimitación de forma.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Contour Plot(
	X( :Longitude, :Latitude ),
	Y( :Pop ),
	Fill Areas( 1 )
);
obj << Set Alpha( 0.06 );
obj << Show Control Panel( 1 );

```

### Show Data Points

**Sintaxis:** obj &lt;&lt; Show Data Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos de datos en el gráfico de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Show Data Points( 1 );

```

### Show Missing Data Points

**Sintaxis:** obj &lt;&lt; Show Missing Data Points( state=0|1 )

**Descripción:** Muestra u oculta los puntos con valores faltantes de Y si se muestran los puntos de datos

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "SqrtZ", Numeric, Continuous, Formula( Sqrt( Z ) ) );
r = dt << Select Where( :Z < 0 );
r << Colors( "Red" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :SqrtZ ) );
obj << Show Data Points( 1 );
Wait( 2 );
obj << Show Missing Data Points( 1 );

```

### Specify Contours

**Sintaxis:** obj &lt;&lt; Specify Contours( Min( value ), Max( value ), N( number ), Contour(1, value, color), Contour(2, value, color), ... Contour(n+1, value, color) )

**Descripción:** Cambia el número y el tamaño de los contornos del gráfico de contorno.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Specify Contours(
	Min( -4 ),
	Max( 8 ),
	N( 4 ),
	Contour( 1, -4, -2768895 ),
	Contour( 2, 0, -7700704 ),
	Contour( 3, 4, -12632256 ),
	Contour( 4, 8, -14575206 ),
	Contour( 5, 8, -16517899 )
);

```

### Transform

**Sintaxis:** obj &lt;&lt; Transform( "Ninguna"|"Rango normalizado" )

**Descripción:** Establece la transformación para el cálculo de la triangulación. La transformación no afectará a las coordenadas de la salida, pero la triangulación se calculará en el espacio transformado. El resultado puede ser una triangulación distinta en función de la relación de aspecto entre espacio de coordenadas y el espacio transformado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Contour Plot(
	X( :Longitude, :Latitude ),
	Y( :Pop ),
	Fill Areas( 1 )
);
Wait( 2 );
obj << Transform( "Range Normalized" );

```

## Mensajes del elemento compartidos

### Action

**Sintaxis:** obj &lt;&lt; Action

**Descripción:** Trampa multiuso dentro de una plataforma para insertar expresiones que se desean evaluar. Temporalmente establece los contextos de cuadros de visualización y tablas de datos en la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**Sintaxis:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**Descripción:** Aplica al objeto un preajuste creado previamente, actualizando las opciones y personalizaciones para que coincidan con la configuración guardada.

**JMP Versión agregada:** 18

#### Buscar en las carpetas

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Buscar por nombre

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Preajuste anónimo

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

### Automatic Recalc

**Sintaxis:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**Descripción:** Rehace automáticamente el análisis para modificaciones de datos y de exclusión. Si está activada la opción Recálculo automático, le recomendamos que utilice los comandos Wait(0) para asegurarse de que las modificaciones de datos y de exclusión surtan efecto antes del recálculo.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**Sintaxis:** obj &lt;&lt; Broadcast(message)

**Descripción:** Difunde un mensaje a una plataforma. Si los resultados devueltos de objetos individuales son tablas, se concatenan si es posible y el formato final es idéntico al resultado de la opción Guardar tabla combinada en un cuadro de tabla o al resultado de la opción Concatenar mediante una columna de origen. Los demás resultados se almacenan en una lista y se devuelven.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**Sintaxis:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**Descripción:** Añade un panel de control para cambiar las variables de la plataforma

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**Sintaxis:** obj &lt;&lt; Copy ByGroup Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Data Table Window;

```

### Get By Levels

**Sintaxis:** obj &lt;&lt; Get By Levels

**Descripción:** Devuelve un arreglo asociativo que asigna las columnas Por grupo a sus valores.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**Sintaxis:** obj &lt;&lt; Get ByGroup Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

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
		Outline Box( "platform << Get Container",
			(gb << Get Container) << Get Picture
		)
	)
);

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**Sintaxis:** obj &lt;&lt; Get Group Platform

**Descripción:** Devuelve el objeto Plataforma grupal si esta plataforma forma parte de un grupo. De lo contrario, devuelve Empty().

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**Sintaxis:** obj &lt;&lt; Get Script

**Descripción:** Crea un script (JSL) para generar este análisis y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**Sintaxis:** obj &lt;&lt; Get Web Support

**Descripción:** Devuelve un número que indica el nivel de compatibilidad del HTML interactivo para el objeto de visualización. 1 significa que algunos o todos los elementos son compatibles. 0 significa que no existe compatibilidad.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**Sintaxis:** obj &lt;&lt; Get Where Expr

**Descripción:** Devuelve la expresión Where para el subconjunto de datos, si la plataforma se inició con By() o Where(). De lo contrario, devuelve Empty().

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate(
	X( :height ),
	Y( :weight ),
	Where( :age < 14 & :height > 60 )
);
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**Sintaxis:** Ignore Platform Preferences( state=0|1 )

**Descripción:** Ignora la configuración actual de las preferencias de la plataforma. El mensaje se ignora cuando se envía a la plataforma después de crearse.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**Sintaxis:** obj &lt;&lt; Local Data Filter

**Descripción:** Para filtrar los datos según grupos o rangos determinados, pero locales para esta plataforma.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**Sintaxis:** obj &lt;&lt; Paste Local Data Filter

**Descripción:** Se aplica el filtro de datos locales del portapapeles al informe actual.

```jsl

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

**Sintaxis:** obj &lt;&lt; Redo Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**Sintaxis:** obj &lt;&lt; Redo ByGroup Analysis

**Descripción:** Vuelve a ejecutar el mismo análisis en una ventana nueva. Si los datos han cambiado, el análisis será distinto.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**Sintaxis:** obj &lt;&lt; Relaunch ByGroup

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**Sintaxis:** obj &lt;&lt; Remove Column Switcher

**Descripción:** Quita el Cambiador de columnas más reciente que se haya agregado a la plataforma.

```jsl

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

**Sintaxis:** obj &lt;&lt; Remove Local Data Filter

**Descripción:** Si se ha creado un filtro de datos local, esto lo eliminará y restaurará la plataforma para usar todos los datos de la tabla de datos directamente.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**Sintaxis:** obj &lt;&lt; Report;Report( obj )

**Descripción:** Devuelve una referencia al objeto informe.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

#### Ejemplo 1

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### Ejemplo 2

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Save Script to Data Table(
	"My Analysis", <<Prompt( 0 ), <<Replace( 0 )
);

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**Sintaxis:** SendToByGroup( {":Column == level"}, command );

**Descripción:** Envía comandos de plataforma o de personalización de la visualización a cada nivel de un grupo Por.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup(
		{:sex == "M"},
		Continuous Distribution( Column( :weight ) )
	)
);

```

### SendToEmbeddedScriptable

**Sintaxis:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**Descripción:** EnviaraObjetoqueadmitescriptsIncrutado restaura la configuración de los objetos que admiten scripts incrustados.

```jsl


dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers",
			"Density Profiler"},
			{1, Confidence Intervals( 0 ),
			Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**Sintaxis:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**Descripción:** La función "Send To Report" se utiliza en combinación con el comando Dispatch para personalizar el aspecto de un informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport(
		Dispatch( "age", "Distrib Nom Hist", FrameBox,
			{Frame Size( 178, 318 )}
		)
	)
);

```

### Sync to Data Table Changes

**Sintaxis:** obj &lt;&lt; Sync to Data Table Changes

**Descripción:** Realiza una sincronización con las modificaciones de datos y de exclusión que se hayan realizado.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**Sintaxis:** obj &lt;&lt; Title( "new title" )

**Descripción:** Establece el título de la plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/Little Pond.jmp" );
obj = dt << Contour Plot( X( :X, :Y ), Y( :Z ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**Sintaxis:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**Descripción:** Crea una columna de transformación en el contexto local de un objeto (una plataforma por lo general). La columna de transformación solo está activa mientras esté en uso la plataforma.

**JMP Versión agregada:** 16

<b>Elemento de inicio: Sí</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column(
		"age^2",
		Format( "Fixed Dec", 5, 0 ),
		Formula( :age * :age )
	),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**Sintaxis:** obj &lt;&lt; View Web XML

**Descripción:** Devuelve el código XML que se utiliza para crear el informe HTML interactivo.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**Sintaxis:** obj = Contour Plot(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Window View( "Private" ),
	Y( :weight ),
	X( :height ),
	Fit Line
);
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit",
		Text Box( eqn, <<Set Base Font( "Title" ) )
	)
);

```

