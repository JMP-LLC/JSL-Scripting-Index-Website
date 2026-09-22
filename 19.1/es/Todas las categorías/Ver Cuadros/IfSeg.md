# IfSeg



## Constructores asociados

### If Seg

**Sintaxis:** seg = If Seg(&lt;state=0|1&gt;)

**Descripción:** Crea un segmento que muestra u oculta los hijos del segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));

```

## Mensajes del elemento

### Append

**Sintaxis:** obj &lt;&lt; Append( seg2 )

**Descripción:** Agrega el segmento como último hijo del segmento actual.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << Append( Lines Seg( [5 50 95 50] ) );

```

### Child

**Sintaxis:** seg2 = obj &lt;&lt; Child

**Descripción:** Devuelve el primer hijo del segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << Child; // not many segs support children

```

### Class Name

**Sintaxis:** classname = obj &lt;&lt; Class Name

**Descripción:** Devuelve el nombre de la clase de visualización correspondiente al segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << Class Name;

```

### Clip Shape

**Sintaxis:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Descripción:** Recorta la geometría según la forma dada. La forma puede especificarse con una ruta o archivo de forma. Se puede especificar un ID opcional con un archivo de forma para seleccionar una única forma desde el archivo; de lo contrario, se utiliza la unión de todas las formas como región de corte. Se puede especificar una ruta de corte con una matriz N x 3 o con una representación de texto. Una matriz de ruta tiene tres columnas para x, y y marcas para cada punto de la ruta. Los valores de marca son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento cúbico de Bézier, y son negativos si el punto también cierra la ruta. El texto de la ruta admite la sintaxis SVG.

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );Wait( 2 );cs << Clip Shape( Boundaries( "US States" ) );

```

### Delete

**Sintaxis:** obj &lt;&lt; Delete

**Descripción:** Eliminar el segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << Delete;

```

### Frame

**Sintaxis:** FrameBox = obj &lt;&lt; Frame

**Descripción:** Devuelve el marco dentro del cual se encuentra el segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << Frame;

```

### Get

**Sintaxis:** 0|1 = obj &lt;&lt; Get

**Descripción:** Devuelve el estado del IfSeg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << get;

```

### Get Clip Shape

**Sintaxis:** obj &lt;&lt; Get Clip Shape

**Descripción:** Devuelve la forma de corte actual

**JMP Versión agregada:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );gb = Graph Builder(	Size( 653, 396 ),	Show Control Panel( 0 ),	Variables( X( :Longitude ), Y( :Latitude ) ),	Elements( Contour( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),			Reference Line Order( 3 )}		)	));cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );cs << Clip Shape( Boundaries( "US States" ) );Wait( 2 );cs << Get Clip Shape();

```

### Get Description

**Sintaxis:** description = obj &lt;&lt; Get Description

**Descripción:** Obtiene la descripción del segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << get description();

```

### Parent

**Sintaxis:** seg2 = obj &lt;&lt; Parent

**Descripción:** Devuelve el progenitor del segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << Parent;

```

### Set

**Sintaxis:** obj &lt;&lt; Set( state=0|1 )

**Descripción:** Muestra u oculta los segundos de visualización dentro de IfSeg.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));Wait( .5 );seg << set( 0 );Wait( .5 );seg << set( 1 );

```

### Set Description

**Sintaxis:** obj &lt;&lt; Set Description( description )

**Descripción:** Establece la descripción del segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << set description( "my seg" );

```

### Sib

**Sintaxis:** seg2 = obj &lt;&lt; Sib

**Descripción:** Devuelve el hermano del segmento de visualización.

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));seg << Sib;

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

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example",	g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ));frame = g[FrameBox( 1 )];seg = (frame << Find Seg( If Seg( 1 ) ));Try(	xAxis = g[AxisBox( 2 )];	xMin = (xAxis << get min);	xMax = (xAxis << get max);,	xMin = 0;	xMax = 100;);yAxis = g[AxisBox( 1 )];yMin = (yAxis << get min);yMax = (yAxis << get max);xval = Matrix( {xmin, xmax} );yval = Matrix( {ymin, ymax} );seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

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

