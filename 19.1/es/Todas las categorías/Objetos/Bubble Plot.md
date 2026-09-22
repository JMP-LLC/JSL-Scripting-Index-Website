# Bubble Plot



## Columnas

### By

**Sintaxis:** obj = Bubble Plot(...&lt;By( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Genera varios informes, uno para cada nivel de las variables.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Coloring

**Sintaxis:** obj = Bubble Plot(...&lt;Coloring( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Colorea las burbujas en función de la variable seleccionada.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Coloring( :Pop ));

```

### Freq

**Sintaxis:** obj = Bubble Plot(...&lt;Freq( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Cálculos de pesos al calcular la posición, tamaño y colores de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));dtSummary = dt << Summary(	Group( :Country ),	Mean( :"Portion 0-19"n ),	Mean( :"Portion60+"n ),	Sum( :Pop ),	Freq( "None" ),	Weight( "None" ));dtSummary << Bubble Plot(	X( :"Mean(Portion 0-19)"n ),	Y( :"Mean(Portion60+)"n ),	Sizes( :"Sum(Pop)"n ),	Freq( :N Rows ));

```

### ID

**Sintaxis:** obj = Bubble Plot(...&lt;ID( column(s) )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Identifica las filas que se deben agregar y mostrar como una única burbuja.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### Sizes

**Sintaxis:** obj = Bubble Plot(...&lt;Sizes( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Columna que se utilizará como tamaño de las burbujas. Si no se especifica, el tamaño de la burbuja es proporcional al número de observaciones.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### Time

**Sintaxis:** obj = Bubble Plot(...&lt;Time( column )&gt;...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Mantiene separadas las coordinadas, tamaños y colores de cada periodo de tiempo único.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));

```

### X

**Sintaxis:** obj = Bubble Plot(...X( column )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Columna que se utilizará como coordenada x de las burbujas en el gráfico.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### Y

**Sintaxis:** obj = Bubble Plot(...Y( column )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Columna que se utilizará como coordenada y de las burbujas en el gráfico.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

## Constructores asociados

### Bubble Plot

**Sintaxis:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**Descripción:** Crea un gráfico de dispersión bidimensional de burbujas que se puede animar con una variable de tiempo. Se pueden utilizar variables adicionales para definir el tamaño y el color de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

## Mensajes del elemento

### Auto Stretching

**Sintaxis:** obj &lt;&lt; Auto Stretching( "Automático"|"Activo"|"Desactivado" )

**Descripción:** Establece el comportamiento del ajuste automático de tamaño del informe.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Auto Stretching( "Off" );

```

### Bubble Size

**Sintaxis:** obj &lt;&lt; Bubble Size( number )

**Descripción:** Cambia el tamaño de las burbujas del gráfico de dispersión.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Bubble Size( 50 );

```

### Color Levels

**Sintaxis:** obj &lt;&lt; Color Levels

**Descripción:** Establece los niveles de la leyenda continua.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Coloring( :Pop ));obj << Color Levels( [100000 1000000 10000000] );

```

### Color Theme

**Sintaxis:** obj &lt;&lt; Color Theme

**Descripción:** Establece el tema de color de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Color Theme( "White to Red" );

```

### Color as Sum

**Sintaxis:** obj &lt;&lt; Color as Sum( state=0|1 )

**Descripción:** Utiliza la suma de la variable de color en lugar de la media de la variable de color como papel de color.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Time( :Year ),	Coloring( :Pop ),	ID( :Region ));obj << Color as Sum( 1 );

```

### Combine

**Sintaxis:** obj &lt;&lt; Combine( &lt;id&gt; )

**Descripción:** Combina las burbujas seleccionadas (o ID indicado) de un grupo dentro de su burbuja mayor. Esta opción sólo está disponible cuando se utilizan dos variables ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));dt << Select Where( :Region == "Europe" );obj << Split;Wait( 2 );obj << Combine( "Europe" );

```

### Combine All

**Sintaxis:** obj &lt;&lt; Combine All

**Descripción:** Combina todas las burbujas constituyentes de un grupo dentro de su burbuja mayor. Esta opción sólo está disponible cuando se utilizan dos variables ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));obj << Split All;Wait( 2 );obj << Combine All;

```

### Draw

**Sintaxis:** obj &lt;&lt; Draw( "Relleno"|"Con contorno"|"Relleno y con contorno" )

**Descripción:** Establece el modo de visualización de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Draw( "Outlined" );

```

### Fit to Window

**Sintaxis:** obj &lt;&lt; Fit to Window( "Automático"|"Activo"|"Desactivado" )

**Descripción:** Establece el comportamiento del ajuste automático de tamaño del informe.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Fit to Window( "Off" );

```

### Get Custom Path

**Sintaxis:** obj &lt;&lt; Get Custom Path

**Descripción:** Devuelve la trayectoria personalizada para las burbujas en forma de matriz. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento cúbico de Bézier, y son negativos si, además, el punto cierra la trayectoria.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );obj << Set Shape( "Custom" );obj << Get Custom Path();

```

### Get Draw

**Sintaxis:** obj &lt;&lt; Get Draw

**Descripción:** Devuelve el modo de visualización de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Get Draw();

```

### Get Label

**Sintaxis:** obj &lt;&lt; Get Label

**Descripción:** Devuelve el modo de dibujo de las etiquetas de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Get Label();

```

### Get Shape

**Sintaxis:** obj &lt;&lt; Get Shape

**Descripción:** Devuelve la forma de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Shape( "Triangle" );obj << Get Shape();

```

### Go

**Sintaxis:** obj &lt;&lt; Go

**Descripción:** Inicia la animación cuando se utiliza una variable de tiempo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Go;

```

### Label

**Sintaxis:** obj &lt;&lt; Label( "Ninguna"|"Seleccionadas"|"Todas" )

**Descripción:** Establece el modo de dibujo de las etiquetas de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Label( "All" );

```

### Label Offset

**Sintaxis:** obj &lt;&lt; Label Offset( {pt, x offset, y offset}, ... )

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));dt << Select Where( :Region == "Europe" | :Region == "North America" );obj << Label Offset( {4, -75, -43}, {7, 80, -34} );

```

### Legend

**Sintaxis:** obj &lt;&lt; Legend( state=0|1 )

**Descripción:** Visualiza la leyenda de colores cuando se utiliza una columna de color. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Legend( 1 );

```

### Lock Scales

**Sintaxis:** obj &lt;&lt; Lock Scales( state=0|1 )

**Descripción:** Protege los rangos de eje, de gradiente y de tamaño de manera que no se modifiquen como respuesta a cambios de datos o de filtrado. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Lock Scales( 0 );dt << Data Filter(	Mode( Select( 0 ), Show( 0 ), Include( 1 ) ),	Add Filter( Columns( :Region ) ));

```

### Orient Shapes

**Sintaxis:** obj &lt;&lt; Orient Shapes( state=0|1 )

**Descripción:** Orienta la forma de manera que la parte superior apunte en la dirección del movimiento.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));obj << Set Shape( "Triangle" );obj << Orient Shapes( 1 );

```

### Prev

**Sintaxis:** obj &lt;&lt; Prev

**Descripción:** Mueve la variable de tiempo un paso atrás en la animación.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Time Index( 19 );obj << Prev;

```

### Revert Color Theme

**Sintaxis:** obj &lt;&lt; Revert Color Theme

**Descripción:** Revierte el tema de color personalizado y vuelve al tema predeterminado de las propiedades de columna o preferencias.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Color Theme( "White to Red" );Wait( 2 );obj << Revert Color Theme();

```

### Selectable Across Gaps

**Sintaxis:** obj &lt;&lt; Selectable Across Gaps( state=0|1 )

**Descripción:** Permite que las burbujas sean seleccionables y mantiene la burbuja seleccionada durante periodos de tiempo en que falten datos. Cuando esta opción está desactivada, las burbujas no son seleccionables durante los intervalos de tiempo en que falten datos.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( :Country == 3300 );obj << Selectable Across Gaps( 1 );obj << Trail Bubbles( 1 );obj << Go;

```

### Set Custom Path

**Sintaxis:** obj &lt;&lt; Set Custom Path

**Descripción:** Establece la trayectoria personalizada para las burbujas. La trayectoria se puede especificar en forma de matriz N x 3 o en forma de texto. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento cúbico de Bézier, y son negativos si, además, el punto cierra la trayectoria. El formato de texto de la trayectoria es compatible con la sintaxis SVG.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );obj << Set Shape( "Custom" );

```

### Set Shape

**Sintaxis:** obj &lt;&lt; Set Shape( "Círculo"|"Triángulo"|"Cuadrado"|"Rombo"|"Flecha"|"Personalizada" )

**Descripción:** Establece la forma de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Shape( "Triangle" );

```

### Show Roles

**Sintaxis:** obj &lt;&lt; Show Roles( state=0|1 )

**Descripción:** Visualiza las variables utilizadas para cada papel en una leyenda en la parte superior del informe.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Show Roles( 1 );

```

### Show Time Annotation

**Sintaxis:** obj &lt;&lt; Show Time Annotation( state=0|1 )

**Descripción:** Muestra el tiempo actual como anotación en un gráfico de burbujas animado. Opción activada de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));Wait( 1 );obj << Show Time Annotation( 0 );

```

### Size as Sum

**Sintaxis:** obj &lt;&lt; Size as Sum( state=0|1 )

**Descripción:** Utiliza la suma de la variable de tamaño en lugar de la media de la variable de tamaño como papel de tamaño. Opción activada de forma predeterminada.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Size as Sum( 1 );

```

### Speed

**Sintaxis:** obj &lt;&lt; Speed( number )

**Descripción:** Cambia la velocidad en el tiempo del movimiento de las burbujas.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Speed( 100 );obj << Go;

```

### Split

**Sintaxis:** obj &lt;&lt; Split( &lt;id&gt; )

**Descripción:** Divide la burbuja seleccionada (o ID indicado) en sus partes constituyentes. Esta opción sólo está disponible cuando se utilizan dos variables ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));dt << Select Where( :Region == "Europe" );Wait( 2 );obj << Split;Wait( 2 );obj << Split( "Asia" );

```

### Split All

**Sintaxis:** obj &lt;&lt; Split All

**Descripción:** Divide las burbujas en sus partes constituyentes. Esta opción sólo está disponible cuando se utilizan dos variables ID.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));Wait( 2 );obj << Split All;

```

### Step

**Sintaxis:** obj &lt;&lt; Step

**Descripción:** Mueve la variable de tiempo un paso adelante en la animación.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Step;

```

### Stop

**Sintaxis:** obj &lt;&lt; Stop

**Descripción:** Detiene la animación cuando se utiliza una variable de tiempo.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( :Country == 4120 );obj << Go;Wait( 2 );obj << Stop;

```

### Time Index

**Sintaxis:** obj &lt;&lt; Time Index( number )

**Descripción:** Establece el valor de la variable de tiempo en el gráfico de dispersión.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));obj << Time Index( 19 );

```

### Title Position

**Sintaxis:** obj &lt;&lt; Title Position( X,Y )

**Descripción:** Establece la posición del título. Debe especificarse una variable de tiempo para ver esta opción.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));obj << Title Position( 0.8, 0.06 );

```

### Toggle Animation

**Sintaxis:** obj &lt;&lt; Toggle Animation

**Descripción:** Activa o desactiva el estado de animación actual

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( :Country == 4120 );obj << Go;Wait( 2 );obj << Toggle Animation;

```

### Trail Bubbles

**Sintaxis:** obj &lt;&lt; Trail Bubbles( "Ninguna"|"Seleccionadas"|"Todas" )

**Descripción:** Muestra la historia pasada de las burbujas como trayectoria semitransparente. Para mostrar las burbujas de trayectoria, debe especificarse una columna de tiempo y debe seleccionarse primero una burbuja.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Trail Bubbles( 1 );obj << Go;

```

### Trail Lines

**Sintaxis:** obj &lt;&lt; Trail Lines( "Ninguna"|"Seleccionadas"|"Todas" )

**Descripción:** Muestra la historia pasada de las burbujas como segmentos de línea unidos. Para mostrar las burbujas de trayectoria, debe especificarse una columna de tiempo y debe seleccionarse primero una burbuja.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Trail Lines( 1 );obj << Go;

```

### X as Sum

**Sintaxis:** obj &lt;&lt; X as Sum( state=0|1 )

**Descripción:** Utiliza la suma de la variable X en lugar de la media de la variable X como papel de X.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << X as Sum( 1 );

```

### Y as Sum

**Sintaxis:** obj &lt;&lt; Y as Sum( state=0|1 )

**Descripción:** Utiliza la suma de la variable Y en lugar de la media de la variable Y como papel de Y.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Y as Sum( 1 );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**Sintaxis:** obj &lt;&lt; Copy Script

**Descripción:** Crea un script JSL para generar este análisis y lo pone en el portapapeles.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Copy Script;

```

### Data Table Window

**Sintaxis:** obj &lt;&lt; Data Table Window

**Descripción:** Mueve al frente la ventana de la tabla de datos que se utiliza en este análisis.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**Sintaxis:** obj &lt;&lt; Get Container

**Descripción:** Devuelve una referencia al cuadro contenedor que incluye el contenido del objeto.

#### General

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Plataforma con filtro

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**Sintaxis:** obj &lt;&lt; Get Data Table

**Descripción:** Devuelve una referencia a la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**Sintaxis:** obj &lt;&lt; Get Script With Data Table

**Descripción:** Crea un script (JSL) para generar este análisis haciendo referencia específica a esta tabla de datos y lo devuelve en forma de expresión.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**Sintaxis:** obj &lt;&lt; Get Timing

**Descripción:** Determina el tiempo de inicio de una plataforma.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Redo Analysis;

```

### Relaunch Analysis

**Sintaxis:** obj &lt;&lt; Relaunch Analysis

**Descripción:** Abre la ventana de inicio de la plataforma y recupera la configuración que se utilizó para crear el informe.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**Sintaxis:** obj &lt;&lt; Report View( "Completa"|"Resumen" )

**Descripción:** La vista del informe determina el nivel de detalle visible en el informe de una plataforma. Full muestra todos los detalles, mientras que Summary solo muestra el contenido seleccionado, con independencia de la plataforma. Para el comportamiento personalizado, los cuadros de visualización admiten un mensaje <<Set Summary Behavior.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**Sintaxis:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis, y lo guarda como propiedad de tabla en la tabla de datos. Puede especificar un nombre para el script. La opción Append Suffix añade un sufijo numérico al nombre del script, que diferencia el script de un script existente que tenga el mismo nombre. La opción Prompt solicita al usuario que especifique un nombre de script. La opción Replace reemplaza un script existente que tenga el mismo nombre.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**Sintaxis:** obj &lt;&lt; Save ByGroup Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**Sintaxis:** obj &lt;&lt; Save Script for All Objects

**Descripción:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**Sintaxis:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**Descripción:** Guarda un script para todos los objetos de informe en la tabla de datos actual. Esta opción es útil cuando tiene varios informes en la ventana. El script recibe el nombre de la primera plataforma a menos que especifique el nombre del script entre comillas.

**Ejemplo 1**

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**Ejemplo 2**

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**Sintaxis:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**Descripción:** Crea un script JSL para generar este análisis y lo guarda en forma de propiedad de tabla en la tabla de datos.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**Sintaxis:** obj &lt;&lt; Save Script to Journal

**Descripción:** Crea un script JSL para generar este análisis y añade un botón al diario que contiene este script.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Journal;

```

### Save Script to Report

**Sintaxis:** obj &lt;&lt; Save Script to Report

**Descripción:** Crea un script JSL para generar este análisis y lo muestra en el propio informe. Resulta útil para conservar un registro impreso de lo que se ha hecho.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Report;

```

### Save Script to Script Window

**Sintaxis:** obj &lt;&lt; Save Script to Script Window

**Descripción:** Crea un script JSL para generar este análisis y lo añade a la ventana de texto Script actual.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Title( "My Platform" );

```

### Top Report

**Sintaxis:** obj &lt;&lt; Top Report

**Descripción:** Devuelve una referencia al nodo raíz del informe.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**Sintaxis:** obj = Bubble Plot(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;Elemento de inicio: Sí&lt;/b&gt;

**Descripción:** Establece el tipo de ventana que se creará para el informe. De forma predeterminada, se creará una ventana de informe Visible. Una ventana Invisible no aparecerá en pantalla, pero se puede detectar mediante funciones como Window(). Una ventana Private responde a la mayoría de los mensajes de ventana pero no es detectable y se debe abordar a través del objeto de informe.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

