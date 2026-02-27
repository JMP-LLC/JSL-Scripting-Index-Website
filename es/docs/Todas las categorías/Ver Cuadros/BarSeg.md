# BarSeg



## Constructores asociados

### Bar Seg

**Sintaxis:** Bar Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**Descripción:** Devuelve un segmento que representa los datos resumidos en forma de barras.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));

```

## Mensajes del elemento

### Child

**Sintaxis:** seg2 = obj &lt;&lt; Child

**Descripción:** Devuelve el primer hijo del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Child; // not many segs support children

```

### Class Name

**Sintaxis:** classname = obj &lt;&lt; Class Name

**Descripción:** Devuelve el nombre de la clase de visualización correspondiente al segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Class Name;

```

### Clip Shape

**Sintaxis:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Descripción:** Recorta la geometría según la forma dada. La forma puede especificarse con una ruta o archivo de forma. Se puede especificar un ID opcional con un archivo de forma para seleccionar una única forma desde el archivo; de lo contrario, se utiliza la unión de todas las formas como región de corte. Se puede especificar una ruta de corte con una matriz N x 3 o con una representación de texto. Una matriz de ruta tiene tres columnas para x, y y marcas para cada punto de la ruta. Los valores de marca son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento cúbico de Bézier, y son negativos si el punto también cierra la ruta. El texto de la ruta admite la sintaxis SVG.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**Sintaxis:** obj &lt;&lt; Color Theme

### Delete

**Sintaxis:** obj &lt;&lt; Delete

**Descripción:** Eliminar el segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Delete;

```

### Density Gradient

**Sintaxis:** obj &lt;&lt; Density Gradient( "Atenuar a blanco"|"Atenuar a gris"|"A todo color"="Atenuar a blanco" )

**Descripción:** Establece el comportamiento de coloración de los gradientes de densidad. "Atenuar a blanco" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**Sintaxis:** obj &lt;&lt; Error Bar Cap( "Ninguno"|"Diminuto"|"Pequeño"|"Medio"|"Grande" )

**Descripción:** Especifica qué tipo de extremo se debe colocar en las barras de error.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**Sintaxis:** obj &lt;&lt; Error Bar Cap Shape( begin, end )

**Descripción:** Especifica la forma del extremo que se mostrará en las barras de error. Un único argumento establece la forma de ambos extremos de la barra, pero también se pueden proporcionar argumentos independientes para el inicio y el final. La forma predeterminada es "Line". Una forma "Arrow" dibuja una flecha que apunta hacia fuera y "None" omite el extremo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fill Color

**Sintaxis:** obj &lt;&lt; Fill Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Fill Color( "Green" );

```

### First Value

**Sintaxis:** obj &lt;&lt; First Value( state=0|1 )

**JMP Versión agregada:** 16

### Frame

**Sintaxis:** FrameBox = obj &lt;&lt; Frame

**Descripción:** Devuelve el marco dentro del cual se encuentra el segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Frame;

```

### Get Base Font

**Sintaxis:** font = obj &lt;&lt; Get Base Font

**Descripción:** Devuelve la fuente base empleada para el texto introducido por el cuadro. Las fuentes base son nombres predefinidos como Title, Text, Annotation, etc., que se especifican en las Preferencias de las fuentes.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Get Base Font;

```

### Get Clip Shape

**Sintaxis:** obj &lt;&lt; Get Clip Shape

**Descripción:** Devuelve la forma de corte actual

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Density Gradient

**Sintaxis:** obj &lt;&lt; Get Density Gradient

**Descripción:** Obtiene el comportamiento de coloración de los gradientes de densidad.

**JMP Versión agregada:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Density Gradient;

```

### Get Description

**Sintaxis:** description = obj &lt;&lt; Get Description

**Descripción:** Obtiene la descripción del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << get description();

```

### Get Error Bar Cap

**Sintaxis:** obj &lt;&lt; Get Error Bar Cap

**Descripción:** Devuelve el tipo actual de extremo de la barra de error.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**Sintaxis:** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

**Descripción:** Devuelve la forma del extremo de las barras de error.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Error Bar Cap Shape();

```

### Get Fill Color

**Sintaxis:** color = obj &lt;&lt; Get Fill Color

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Fill Color;

```

### Get Fill Pattern

**Sintaxis:** obj &lt;&lt; Get Fill Pattern

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Fill Pattern;

```

### Get Font

**Sintaxis:** obj &lt;&lt; Get Font

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Get Font;

```

### Get Font Name

**Sintaxis:** obj &lt;&lt; Get Font Name

**Descripción:** Devuelve el nombre de la fuente.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font Name( "Times New Roman" );fontobj << Get Font Name;

```

### Get Font Scale

**Sintaxis:** obj &lt;&lt; Get Font Scale

**Descripción:** Devuelve el factor de escala actual para la fuente.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Get Font Scale;

```

### Get Font Size

**Sintaxis:** obj &lt;&lt; Get Font Size

**Descripción:** Devuelve el tamaño de la fuente.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Get Font Size;

```

### Get Font Style

**Sintaxis:** obj &lt;&lt; Get Font Style

**Descripción:** Devuelve el nombre de estilo de la fuente.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font Name( "Arial" );fontobj << Set Font Style( "Italic" );fontobj << Get Font Style;

```

### Get Gradient

**Sintaxis:** obj &lt;&lt; Get Gradient

**Descripción:** Obtiene el gradiente de coloración.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient;

```

### Get Gradient Color Theme

**Sintaxis:** obj &lt;&lt; Get Gradient Color Theme

**Descripción:** Obtiene el tema de color del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Sintaxis:** obj &lt;&lt; Get Gradient Discrete Colors

**Descripción:** Obtiene si cada nivel de un gradiente debe ser de un único color o si la transición de los colores debe ser gradual.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Sintaxis:** obj &lt;&lt; Get Gradient Fill

**Descripción:** Obtiene el comportamiento de coloración de los valores que están fuera del rango de la escala del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Sintaxis:** obj &lt;&lt; Get Gradient Label Count

**Descripción:** Obtiene el número de etiquetas en la leyenda de un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Sintaxis:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**Descripción:** Obtiene el conjunto de valores utilizados para las etiquetas en la escala del gradiente.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Sintaxis:** obj &lt;&lt; Get Gradient Legend Horizontal

**Descripción:** Obtiene si se debe dibujar la leyenda del gradiente en horizontal.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Sintaxis:** obj &lt;&lt; Get Gradient Legend Label Format

**Descripción:** Obtiene el formato de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Sintaxis:** obj &lt;&lt; Get Gradient Legend Label Width

**Descripción:** Obtiene la longitud máxima en caracteres de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Sintaxis:** obj &lt;&lt; Get Gradient Legend Show Labels

**Descripción:** Obtiene si se deben mostrar las etiquetas de nivel en la leyenda del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Sintaxis:** obj &lt;&lt; Get Gradient Level Count

**Descripción:** Obtiene el número de niveles de un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Sintaxis:** obj &lt;&lt; Get Gradient Lightness Range

**Descripción:** Obtiene el brillo mínimo y máximo de los colores de nivel en un gradiente. Los valores faltantes indican que se utiliza el valor original del tema de color.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Sintaxis:** obj &lt;&lt; Get Gradient Range

**Descripción:** Obtiene el rango en el que se generan las escalas del gradiente no personalizadas.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Sintaxis:** obj &lt;&lt; Get Gradient Reverse Color Order

**Descripción:** Obtiene si se invierte el orden de los colores de un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Sintaxis:** obj &lt;&lt; Get Gradient Reverse Label Order

**Descripción:** Obtiene si se invierte el orden de las etiquetas en un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Sintaxis:** obj &lt;&lt; Get Gradient Scale

**Descripción:** Obtiene el tipo de escala del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Sintaxis:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**Descripción:** Obtiene el conjunto de valores utilizados para las etiquetas en la escala del gradiente.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Get Gradient Scale Values;

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Sintaxis:** obj &lt;&lt; Get Gradient Show Missing

**Descripción:** Obtiene cuándo mostrar la entrada de la leyenda para los valores faltantes.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Sintaxis:** obj &lt;&lt; Get Gradient Transparency

**Descripción:** Obtiene el comportamiento de transparencia de los gradientes.

**JMP Versión agregada:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**Sintaxis:** obj &lt;&lt; Get Interval Draw Directions

**Descripción:** Obtiene las direcciones en las que se deben representar los intervalos.

**JMP Versión agregada:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Interval Draw Directions;

```

### Get Line Color

**Sintaxis:** color = obj &lt;&lt; Get Line Color

**Descripción:** Devuelve el color de las líneas.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Line Color;

```

### Get Line Style

**Sintaxis:** pen style = obj &lt;&lt; Get Line Style

**Descripción:** Devuelve el estilo de las líneas.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Line Style;

```

### Get Line Width

**Sintaxis:** number = obj &lt;&lt; Get Line Width

**Descripción:** Devuelve el grosor de las líneas.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Line Width;

```

### Get Marker

**Sintaxis:** marker = obj &lt;&lt; Get Marker

**Descripción:** Devuelve el estilo del marcador.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Marker;

```

### Get Marker Size

**Sintaxis:** size = obj &lt;&lt; Get Marker Size

**Descripción:** Devuelve el tamaño de los marcadores.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Marker Size;

```

### Get Side by Side Overlap

**Sintaxis:** proportion = obj &lt;&lt; Get Side by Side Overlap

**Descripción:** Devuelve la cantidad de superposición para subelementos en estilos de barras "en paralelo".

**JMP Versión agregada:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ), Overlay( :sex ) ),	Elements( Bar( X, Y ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Side by Side Overlap();

```

### Get Text Color

**Sintaxis:** obj &lt;&lt; Get Text Color

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Text Color;

```

### Get Text Style

**Sintaxis:** obj &lt;&lt; Get Text Style

**Descripción:** Obtiene cómo se dibuja el texto con respecto al cursor.

**JMP Versión agregada:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( “Text Seg” ));seg << Get Text Style;

```

### Get Transparency

**Sintaxis:** obj &lt;&lt; Get Transparency

**Descripción:** Devuelve un valor numérico que indica la transparencia, entre 0 (transparente) y 1 (opaco).

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Get Transparency;

```

### Get Width Proportion

**Sintaxis:** proportion = obj &lt;&lt; Get Width Proportion

**Descripción:** Devuelve la proporción del ancho de barra disponible que se utilizará para dibujar. 0 significa tamaños automáticos. 1 significa sin discontinuidades.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Get Width Proportion();

```

### Gradient

**Sintaxis:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Descripción:** Establece el gradiente de coloración.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Sintaxis:** obj &lt;&lt; Gradient Color Theme

**Descripción:** Establece el tema de color del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Sintaxis:** obj &lt;&lt; Gradient Discrete Colors

**Descripción:** Establece si cada nivel de un gradiente debe ser de un único color o si la transición de colores debe ser gradual.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Sintaxis:** obj &lt;&lt; Gradient Fill( "Entre"|"Encima"|"Debajo"|"Encima Debajo"="Encima Debajo" )

**Descripción:** Establece el comportamiento de coloración de los valores que están fuera del rango de la escala del gradiente. "Encima Debajo" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Sintaxis:** obj &lt;&lt; Gradient Label Count

**Descripción:** Establece el número de etiquetas en la leyenda de un gradiente. Es uno más que el número de niveles de contorno.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Sintaxis:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Sintaxis:** obj &lt;&lt; Gradient Legend Horizontal

**Descripción:** Establece si se debe dibujar la leyenda del gradiente en horizontal.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Sintaxis:** obj &lt;&lt; Gradient Legend Label Format

**Descripción:** Establece el formato de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Sintaxis:** obj &lt;&lt; Gradient Legend Label Width

**Descripción:** Establece la longitud máxima de caracteres de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Sintaxis:** obj &lt;&lt; Gradient Legend Show Labels

**Descripción:** Establece si se deben mostrar las etiquetas de nivel en la leyenda del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Sintaxis:** obj &lt;&lt; Gradient Level Count

**Descripción:** Establece el número de niveles en un gradiente. Es uno menos que el número de etiquetas.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Sintaxis:** obj &lt;&lt; Gradient Lightness Range

**Descripción:** Establece el brillo mínimo y máximo para los colores de nivel en un gradiente. Los colores se escalarán para cubrir este rango. Un valor faltante se trata como si no hubiera cambios.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Sintaxis:** obj &lt;&lt; Gradient Range( "Predeterminado"|"Rango de datos exacto"|"90% medio"="Predeterminado" )

**Descripción:** Establece el rango en el que se generan las escalas del gradiente no personalizadas. "Predeterminado" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Sintaxis:** obj &lt;&lt; Gradient Reverse Color Order

**Descripción:** Invierte el orden de los colores en un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Sintaxis:** obj &lt;&lt; Gradient Reverse Label Order

**Descripción:** Invierte el orden de las etiquetas en un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Sintaxis:** obj &lt;&lt; Gradient Scale( "Lineal"|"Cuantil"|"Desviación estándar"|"Logaritmo"|"Compensación por logaritmo"|"Personalizado"="Lineal" )

**Descripción:** Establece el tipo de escala del gradiente. "Lineal" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Sintaxis:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Sintaxis:** obj &lt;&lt; Gradient Show Missing( "Automático"|"Activado"|"Desactivado"="Automático" )

**Descripción:** Establece cuándo mostrar la entrada de la leyenda para los valores faltantes. "Automático" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Sintaxis:** obj &lt;&lt; Gradient Transparency( "Ninguno"|"Lineal"="Lineal" )

**Descripción:** Establece el comportamiento de transparencia de los gradientes. "Lineal" de forma predeterminada.

**JMP Versión agregada:** 15

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Gradient Transparency( "None" );

```

### Last Value

**Sintaxis:** obj &lt;&lt; Last Value( state=0|1 )

**JMP Versión agregada:** 16

### Line Color

**Sintaxis:** obj &lt;&lt; Line Color( color )

**Descripción:** Establece el color de todas las líneas del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Line Color( "Green" );

```

### Line Style

**Sintaxis:** obj &lt;&lt; Line Style( pen style )

**Descripción:** Establece el estilo de las líneas. Las opciones son sólido, punteado, discontinuo, guión-punto y guión-punto-punto.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Line Style( "Dotted" );

```

### Line Width

**Sintaxis:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Otro..." )

**Descripción:** Establece el grosor de las líneas.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Line Width( 3 );

```

### Marker

**Sintaxis:** obj &lt;&lt; Marker( marker )

**Descripción:** Establece el estilo de marcador de todos los marcadores.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Marker( "Square" );

```

### Marker Size

**Sintaxis:** obj &lt;&lt; Marker Size( size )

**Descripción:** Establece el tamaño de los marcadores. Las opciones de tamaño son Punto, Pequeño, Medio, Grande, XL, XXL y XXXL.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Max Value

**Sintaxis:** obj &lt;&lt; Max Value( state=0|1 )

**JMP Versión agregada:** 16

### Min Value

**Sintaxis:** obj &lt;&lt; Min Value( state=0|1 )

**JMP Versión agregada:** 16

### Name

**Sintaxis:** obj &lt;&lt; Name( state=0|1 )

**JMP Versión agregada:** 16

### Parent

**Sintaxis:** seg2 = obj &lt;&lt; Parent

**Descripción:** Devuelve el progenitor del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Parent;

```

### Revert

**Sintaxis:** obj &lt;&lt; Revert

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Revert;

```

### Set Base Font

**Sintaxis:** obj &lt;&lt; Set Base Font( "Texto"|"Encabezado"|"Título"|"Pequeño"|"Mono"|"Editor de fórmulas"|"Anotación"|"Eje"|"Marcador"|"Título de eje"|"Etiqueta del gráfico"|"Leyenda"|"Título del gráfico"|"Título"|"Tabla de datos"|"Etiqueta flotante" )

**Descripción:** Establece la fuente base para el texto introducido por el cuadro.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));Wait( 2 );fontobj << Set Base Font( "Title" );

```

### Set Description

**Sintaxis:** obj &lt;&lt; Set Description( description )

**Descripción:** Establece la descripción del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << set description( "my seg" );

```

### Set Error Bar Cap

**Sintaxis:** obj &lt;&lt; Set Error Bar Cap( "Ninguno"|"Diminuto"|"Pequeño"|"Medio"|"Grande" )

**Descripción:** Especifica qué tipo de extremo se debe colocar en las barras de error.

**JMP Versión agregada:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**Sintaxis:** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

**Descripción:** Especifica la forma del extremo que se mostrará en las barras de error. Un único argumento establece la forma de ambos extremos de la barra, pero también se pueden proporcionar argumentos independientes para el inicio y el final. La forma predeterminada es "Line". Una forma "Arrow" dibuja una flecha que apunta hacia fuera y "None" omite el extremo.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :Age ), Y( :Height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fill Color

**Sintaxis:** obj &lt;&lt; Set Fill Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Sintaxis:** obj &lt;&lt; Set Fill Pattern

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**Sintaxis:** obj &lt;&lt; Set Font( fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt; )

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font( "Arial Black" );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**Sintaxis:** obj &lt;&lt; Set Font Name( fontname )

**Descripción:** Establece la fuente del las cadenas de texto.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**Sintaxis:** obj &lt;&lt; Set Font Scale( f )

**Descripción:** Establece un factor de escala para la fuente actual. El factor de escala se aplicará al tamaño que se determine desde la fuente base y el tamaño de punto.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));Wait( 2 );fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**Sintaxis:** obj &lt;&lt; Set Font Size( n )

**Descripción:** Establece el tamaño de la fuente en puntos de las cadenas de texto.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font Size( 14 );

```

### Set Font Style

**Sintaxis:** obj &lt;&lt; Set Font Style( style )

**Descripción:** Establece el estilo de fuente para las cadenas de caracteres de texto. Para establecer más de un estilo a la vez, póngalos en la misma cadena de caracteres, separados por espacios (consulte el Ejemplo 2, a continuación).

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font Style( "Italic" );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**Sintaxis:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; } obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**Descripción:** Establece el gradiente de coloración.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Sintaxis:** obj &lt;&lt; Set Gradient Color Theme

**Descripción:** Establece el tema de color del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Sintaxis:** obj &lt;&lt; Set Gradient Custom Scale

**Descripción:** Establece que el gradiente utilice una lista de valores para una escala personalizada.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Sintaxis:** obj &lt;&lt; Set Gradient Discrete Colors

**Descripción:** Establece si cada nivel de un gradiente debe ser de un único color o si la transición de colores debe ser gradual.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Marker Seg( 1 ) );seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Sintaxis:** obj &lt;&lt; Set Gradient Fill( "Entre"|"Encima"|"Debajo"|"Encima Debajo"="Encima Debajo" )

**Descripción:** Establece el comportamiento de coloración de los valores que están fuera del rango de la escala del gradiente. "Encima Debajo" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Middle 90%" );seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Sintaxis:** obj &lt;&lt; Set Gradient Label Count

**Descripción:** Establece el número de etiquetas en la leyenda de un gradiente. Es uno más que el número de niveles de contorno.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Sintaxis:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Sintaxis:** obj &lt;&lt; Set Gradient Legend Horizontal

**Descripción:** Establece si se debe dibujar la leyenda del gradiente en horizontal.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Sintaxis:** obj &lt;&lt; Set Gradient Legend Label Format

**Descripción:** Establece el formato de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Sintaxis:** obj &lt;&lt; Set Gradient Legend Label Width

**Descripción:** Establece la longitud máxima de caracteres de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Sintaxis:** obj &lt;&lt; Set Gradient Legend Show Labels

**Descripción:** Establece si se deben mostrar las etiquetas de nivel en la leyenda del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Sintaxis:** obj &lt;&lt; Set Gradient Level Count

**Descripción:** Establece el número de niveles en un gradiente. Es uno menos que el número de etiquetas.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Sintaxis:** obj &lt;&lt; Set Gradient Lightness Range

**Descripción:** Establece el brillo mínimo y máximo para los colores de nivel en un gradiente. Los colores se escalarán para cubrir este rango. Un valor faltante se trata como si no hubiera cambios.

**JMP Versión agregada:** 18

**Ejemplo 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Ejemplo 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Ejemplo 3**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Sintaxis:** obj &lt;&lt; Set Gradient Range( "Predeterminado"|"Rango de datos exacto"|"90% medio"="Predeterminado" )

**Descripción:** Establece el rango en el que se generan las escalas del gradiente no personalizadas. "Predeterminado" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Sintaxis:** obj &lt;&lt; Set Gradient Reverse Color Order

**Descripción:** Invierte el orden de los colores en un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Sintaxis:** obj &lt;&lt; Set Gradient Reverse Label Order

**Descripción:** Invierte el orden de las etiquetas en un gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Sintaxis:** obj &lt;&lt; Set Gradient Scale( "Lineal"|"Cuantil"|"Desviación estándar"|"Logaritmo"|"Compensación por logaritmo"|"Personalizado"="Lineal" )

**Descripción:** Establece el tipo de escala del gradiente. "Lineal" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Sintaxis:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Contour Seg( 1 ) );seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Sintaxis:** obj &lt;&lt; Set Gradient Show Missing( "Automático"|"Activado"|"Desactivado"="Automático" )

**Descripción:** Establece cuándo mostrar la entrada de la leyenda para los valores faltantes. "Automático" de forma predeterminada.

**JMP Versión agregada:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );gb = Graph Builder(	Variables( X( :city ), Y( :POP ), Color( :NO ) ),	Elements( Bar( X, Y ) ));frame = (gb << Report)[FrameBox( 1 )];seg = frame << Find Seg( Bar Seg( 1 ) );seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**Sintaxis:** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

**Descripción:** Establece las direcciones en las que se deben representar los intervalos.

**JMP Versión agregada:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Standard Deviation" )		)	),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Reference Line Order( 3 ), DispatchSeg(				BarSeg( 1 ),				{Set Interval Draw Directions( "Upper" )}			)}		)	));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Interval Draw Directions( "Lower" );

```

### Set Label Offset

**Sintaxis:** Set Label Offset {Bar Index, X Scale Coordinate, Y Scale Coordinate}

**Descripción:** Establece la compensación de la etiqueta de valor de una barra con respecto a una coordenada en el gráfico

**JMP Versión agregada:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Legend( 9 ), Label( "Label by Value" ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				BarSeg( 1 ),				{Set Label Offset( {0, 0.394409937888199, 112.5685} ),				Set Label Offset( {1, 1.2639751552795, 110.634333333333} ),				Set Label Offset( {2, 2.14596273291925, 111.794833333333} ),				Set Label Offset( {3, 3.12732919254658, 116.05} ),				Set Label Offset( {4, 4.17080745341615, 127.268166666667} )}			)}		)	));

```

### Set Line Color

**Sintaxis:** obj &lt;&lt; Set Line Color( color )

**Descripción:** Establece el color de todas las líneas del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Line Color( "Green" );

```

### Set Line Style

**Sintaxis:** obj &lt;&lt; Set Line Style( pen style )

**Descripción:** Establece el estilo de las líneas. Las opciones son sólido, punteado, discontinuo, guión-punto y guión-punto-punto.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Sintaxis:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Otro..." )

**Descripción:** Establece el grosor de las líneas.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Line Width( 3 );

```

### Set Marker

**Sintaxis:** obj &lt;&lt; Set Marker( marker )

**Descripción:** Establece el estilo de marcador de todos los marcadores.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Marker( "Square" );

```

### Set Marker Size

**Sintaxis:** obj &lt;&lt; Set Marker Size( size )

**Descripción:** Establece el tamaño de los marcadores. Las opciones de tamaño son Punto, Pequeño, Medio, Grande, XL, XXL y XXXL.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Marker( "Square" );seg << Set Marker Size( "XL" );

```

### Set Side by Side Overlap

**Sintaxis:** obj &lt;&lt; Set Side by Side Overlap( proportion or missing )

**Descripción:** Establece la cantidad de superposición para subelementos en estilos de barras "en paralelo", de 0 (sin superposición) a 1 (superposición completa).

**JMP Versión agregada:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ), Overlay( :sex ) ),	Elements( Bar( X, Y ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Side by Side Overlap( 0.5 );

```

### Set Text Color

**Sintaxis:** obj &lt;&lt; Set Text Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Text Color( "Green" );

```

### Set Text Style

**Sintaxis:** obj &lt;&lt; Set Text Style( [Izquierda|Centro|Derecha], [Arriba|Centrado verticalmente|Referencia|Abajo], [Borrado], [Encuadrado] )

**Descripción:** Establece cómo se dibuja el texto con respecto al cursor. Cuando es compatible, "Borrado" rellena el cuadro de límite del texto y "Borrado" establece el contorno. Si no se especifica, la alineación horizontal predeterminada es "Izquierda" y la vertical es "Referencia".

**JMP Versión agregada:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( “Text Seg” ));seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**Sintaxis:** obj &lt;&lt; Set Transparency( number )

**Descripción:** Establece la transparencia de la forma. El argumento debe ser un número entre 0 y 1.

**JMP Versión agregada:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Transparency( .3 );

```

### Set Width Proportion

**Sintaxis:** obj &lt;&lt; Set Width Proportion( proportion )

**Descripción:** Establece la proporción del ancho de barra disponible que se utilizará para dibujar. 0 significa tamaños automáticos. 1 significa sin discontinuidades.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( "Bar Seg" ));seg << Set Width Proportion( 1 );

```

### Sib

**Sintaxis:** seg2 = obj &lt;&lt; Sib

**Descripción:** Devuelve el hermano del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Sib;

```

### Sib Append

**Sintaxis:** obj &lt;&lt; Sib Append( seg2 )

**Descripción:** Agrega un segmento de visualización inmediatamente después del segmento de visualización.

```jsl

win = New Window( "World",	gb = Graph(		FrameSize( 800, 400 ),		X Scale( -180, 180 ),		Y Scale( -90, 90 ),		<<Background Map( Images( "Simple Earth" ) )	));imgBox = win[framebox( 1 )];mapSeg = imgBox << FindSeg( MapSeg( 1 ) );mapSeg << Transparency( 0.5 );Try(	xAxis = gb[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = gb[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Sintaxis:** obj &lt;&lt; Sib Prepend( seg2 )

**Descripción:** Agrega un segmento de visualización inmediatamente antes del segmento de visualización.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Text Color

**Sintaxis:** obj &lt;&lt; Text Color( color )

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Text Color( "Green" );

```

### Text Style

**Sintaxis:** obj &lt;&lt; Text Style( [Izquierda|Centro|Derecha], [Arriba|Centrado verticalmente|Referencia|Abajo], [Borrado], [Encuadrado] )

**Descripción:** Establece cómo se dibuja el texto con respecto al cursor. Cuando es compatible, "Borrado" rellena el cuadro de límite del texto y "Borrado" establece el contorno. Si no se especifica, la alineación horizontal predeterminada es "Izquierda" y la vertical es "Referencia".

**JMP Versión agregada:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) ));frame = Report( obj )[FrameBox( 1 )];seg = (frame << Find Seg( “Text Seg” ));seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**Sintaxis:** obj &lt;&lt; Transparency( number )

**Descripción:** Establece la transparencia de la forma. El argumento debe ser un número entre 0 y 1.

**JMP Versión agregada:** 16

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Graph Builder(	Variables( X( :age ), Y( :weight ) ),	Elements( Bar( X, Y, Label( "Label by Value" ) ) ));frame = Report( obj )[FrameBox( 1 )];fontobj = seg = (frame << Find Seg( "Bar Seg" ));seg << Set Transparency( .3 );

```

## Mensajes del elemento compartidos

### Enabled

**Sintaxis:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Enabled

**Sintaxis:** obj &lt;&lt; Enabled( state=0|1 ); state = obj &lt;&lt; Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```jsl

//This message applies to all display objectsNew Window( "enabled",	V List Box(		check = Check Box(			{"Use Password"},			ptext << Enabled( check << Get( 1 ) );			pvalue << Enabled( check << Get( 1 ) );		),		Lineup Box( N Col( 2 ),			Text Box( "Username:" ),			Text Edit Box( "", <<Set Width( 100 ) ),			ptext = Text Box( "Password:", <<Enabled( 0 ) ),			pvalue = Text Edit Box( "",				<<Password Style( 1 ),				<<Set Width( 20 ),				<<Enabled( 0 )			)		)	));

```

### Get Namespace

**Sintaxis:** obj &lt;&lt; Get Namespace

**Descripción:** Devuelve el espacio de nombres asociado a este objeto de visualización.

```jsl

//This message applies to all display objectsx = 1;w = New Window( "Test", b = Button Box( "Press me" ) );b:x = 2;ns = b << GetNamespace();Show( ns:x, x );

```

### Get Properties

**Sintaxis:** obj &lt;&lt; Get Properties

**Descripción:** Devuelve un arreglo asociativo que contiene las propiedades del cuadro de visualización y sus valores.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Properties;

```

### Get Property

**Sintaxis:** obj &lt;&lt; Get Property( "property" )

**Descripción:** Devuelve la configuración actual de la property con nombre.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property( "Enabled" );

```

### Get Property List

**Sintaxis:** obj &lt;&lt; Get Property List

**Descripción:** Devuelve una lista de propiedades que tiene el cuadro de visualización.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Get Property List;

```

### Set Property

**Sintaxis:** obj &lt;&lt; Set Property( "property", value )

**Descripción:** Establece el valor de la property con nombre para el cuadro de visualización.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );bb << Set Property( "Enabled", 0 );

```

