# ShapeSeg



### Child

**Sintaxis:** seg2 = obj << Child

**Descripción:** Devuelve el primer hijo del segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**Sintaxis:** classname = obj << Class Name

**Descripción:** Devuelve el nombre de la clase de visualización correspondiente al segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**Sintaxis:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**Descripción:** Recorta la geometría según la forma dada. La forma puede especificarse con una ruta o archivo de forma. Se puede especificar un ID opcional con un archivo de forma para seleccionar una única forma desde el archivo; de lo contrario, se utiliza la unión de todas las formas como región de corte. Se puede especificar una ruta de corte con una matriz N x 3 o con una representación de texto. Una matriz de ruta tiene tres columnas para x, y y marcas para cada punto de la ruta. Los valores de marca son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento cúbico de Bézier, y son negativos si el punto también cierra la ruta. El texto de la ruta admite la sintaxis SVG.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
Wait( 2 );
cs << Clip Shape( Boundaries( "US States" ) );

```

### Color

**Sintaxis:** obj << Color( color )

**Descripción:** Establece el color para todas las formas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Color( "Green" );

```

### Color Theme

**Sintaxis:** obj << Color Theme

### Delete

**Sintaxis:** obj << Delete

**Descripción:** Eliminar el segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Delete;

```

### Density Gradient

**Sintaxis:** obj << Density Gradient( "Atenuar a blanco"|"Atenuar a gris"|"A todo color"="Atenuar a blanco" )

**Descripción:** Establece el comportamiento de coloración de los gradientes de densidad. "Atenuar a blanco" de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Density Gradient( "Fade to Gray" );

```

### Enabled

**Sintaxis:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Fill Color

**Sintaxis:** obj << Fill Color( color )

**Descripción:** Establece el color de relleno de todas las formas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Green" );

```

### Frame

**Sintaxis:** FrameBox = obj << Frame

**Descripción:** Devuelve el marco dentro del cual se encuentra el segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Frame;

```

### Get Clip Shape

**Sintaxis:** obj << Get Clip Shape

**Descripción:** Devuelve la forma de corte actual

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ),
			Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
cs << Clip Shape( Boundaries( "US States" ) );
Wait( 2 );
cs << Get Clip Shape();

```

### Get Color

**Sintaxis:** color = obj << Get Color

**Descripción:** Devuelve el color de la forma.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Color;

```

### Get Density Gradient

**Sintaxis:** obj << Get Density Gradient

**Descripción:** Obtiene el comportamiento de coloración de los gradientes de densidad.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Density Gradient;

```

### Get Description

**Sintaxis:** description = obj << Get Description

**Descripción:** Obtiene la descripción del segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << get description();

```

### Get Enabled

**Sintaxis:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

**Descripción:** Un objeto que no esté habilitado no responderá a la entrada del teclado o el ratón. Esta propiedad la heredan los objetos hijo, por lo que un objeto contenedor que esté deshabilitado provocará que todos los objetos descendientes se deshabiliten.

```js

Names Default To Here( 1 );
//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "",
				<<Password Style( 1 ),
				<<Set Width( 20 ),
				<<Enabled( 0 )
			)
		)
	)
);

```

### Get Fill Color

**Sintaxis:** obj << Get Fill Color

**Descripción:** Devuelve el color de relleno de las formas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Fill Color;

```

### Get Fill Pattern

**Sintaxis:** obj << Get Fill Pattern

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Fill Pattern;

```

### Get Gradient

**Sintaxis:** obj << Get Gradient

**Descripción:** Obtiene el gradiente de coloración.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**Sintaxis:** obj << Get Gradient Color Theme

**Descripción:** Obtiene el tema de color del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**Sintaxis:** obj << Get Gradient Discrete Colors

**Descripción:** Obtiene si cada nivel de un gradiente debe ser de un único color o si la transición de los colores debe ser gradual.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**Sintaxis:** obj << Get Gradient Fill

**Descripción:** Obtiene el comportamiento de coloración de los valores que están fuera del rango de la escala del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**Sintaxis:** obj << Get Gradient Label Count

**Descripción:** Obtiene el número de etiquetas en la leyenda de un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**Sintaxis:** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**Descripción:** Obtiene el conjunto de valores utilizados para las etiquetas en la escala del gradiente.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**Sintaxis:** obj << Get Gradient Legend Horizontal

**Descripción:** Obtiene si se debe dibujar la leyenda del gradiente en horizontal.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**Sintaxis:** obj << Get Gradient Legend Label Format

**Descripción:** Obtiene el formato de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**Sintaxis:** obj << Get Gradient Legend Label Width

**Descripción:** Obtiene la longitud máxima en caracteres de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**Sintaxis:** obj << Get Gradient Legend Show Labels

**Descripción:** Obtiene si se deben mostrar las etiquetas de nivel en la leyenda del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**Sintaxis:** obj << Get Gradient Level Count

**Descripción:** Obtiene el número de niveles de un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**Sintaxis:** obj << Get Gradient Lightness Range

**Descripción:** Obtiene el brillo mínimo y máximo de los colores de nivel en un gradiente. Los valores faltantes indican que se utiliza el valor original del tema de color.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**Sintaxis:** obj << Get Gradient Range

**Descripción:** Obtiene el rango en el que se generan las escalas del gradiente no personalizadas.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**Sintaxis:** obj << Get Gradient Reverse Color Order

**Descripción:** Obtiene si se invierte el orden de los colores de un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**Sintaxis:** obj << Get Gradient Reverse Label Order

**Descripción:** Obtiene si se invierte el orden de las etiquetas en un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**Sintaxis:** obj << Get Gradient Scale

**Descripción:** Obtiene el tipo de escala del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**Sintaxis:** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**Descripción:** Obtiene el conjunto de valores utilizados para las etiquetas en la escala del gradiente.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**Sintaxis:** obj << Get Gradient Show Missing

**Descripción:** Obtiene cuándo mostrar la entrada de la leyenda para los valores faltantes.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**Sintaxis:** obj << Get Gradient Transparency

**Descripción:** Obtiene el comportamiento de transparencia de los gradientes.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Transparency;

```

### Get Line Style

**Sintaxis:** pen style = obj << Get Line Style

**Descripción:** Devuelve el estilo de las líneas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**Sintaxis:** number = obj << Get Line Width

**Descripción:** Devuelve el grosor de las líneas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Line Width;

```

### Get Namespace

**Sintaxis:** obj << Get Namespace

**Descripción:** Devuelve el espacio de nombres asociado a este objeto de visualización.

```js

Names Default To Here( 1 );
//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**Sintaxis:** obj << Get Properties

**Descripción:** Devuelve un arreglo asociativo que contiene las propiedades del cuadro de visualización y sus valores.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**Sintaxis:** obj << Get Property( "property" )

**Descripción:** Devuelve la configuración actual de la property con nombre.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**Sintaxis:** obj << Get Property List

**Descripción:** Devuelve una lista de propiedades que tiene el cuadro de visualización.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Get Transparency

**Sintaxis:** obj << Get Transparency

**Descripción:** Devuelve un valor numérico que indica la transparencia, entre 0 y 1.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Transparency;

```

### Gradient

**Sintaxis:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Descripción:** Establece el gradiente de coloración.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**Sintaxis:** obj << Gradient Color Theme

**Descripción:** Establece el tema de color del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**Sintaxis:** obj << Gradient Discrete Colors

**Descripción:** Establece si cada nivel de un gradiente debe ser de un único color o si la transición de colores debe ser gradual.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**Sintaxis:** obj << Gradient Fill( "Entre"|"Encima"|"Debajo"|"Encima Debajo"="Encima Debajo" )

**Descripción:** Establece el comportamiento de coloración de los valores que están fuera del rango de la escala del gradiente. "Encima Debajo" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**Sintaxis:** obj << Gradient Label Count

**Descripción:** Establece el número de etiquetas en la leyenda de un gradiente. Es uno más que el número de niveles de contorno.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**Sintaxis:** obj << Gradient Label Levels( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**Sintaxis:** obj << Gradient Legend Horizontal

**Descripción:** Establece si se debe dibujar la leyenda del gradiente en horizontal.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**Sintaxis:** obj << Gradient Legend Label Format

**Descripción:** Establece el formato de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**Sintaxis:** obj << Gradient Legend Label Width

**Descripción:** Establece la longitud máxima de caracteres de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**Sintaxis:** obj << Gradient Legend Show Labels

**Descripción:** Establece si se deben mostrar las etiquetas de nivel en la leyenda del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**Sintaxis:** obj << Gradient Level Count

**Descripción:** Establece el número de niveles en un gradiente. Es uno menos que el número de etiquetas.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**Sintaxis:** obj << Gradient Lightness Range

**Descripción:** Establece el brillo mínimo y máximo para los colores de nivel en un gradiente. Los colores se escalarán para cubrir este rango. Un valor faltante se trata como si no hubiera cambios.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**Sintaxis:** obj << Gradient Range( "Predeterminado"|"Rango de datos exacto"|"90% medio"="Predeterminado" )

**Descripción:** Establece el rango en el que se generan las escalas del gradiente no personalizadas. "Predeterminado" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**Sintaxis:** obj << Gradient Reverse Color Order

**Descripción:** Invierte el orden de los colores en un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**Sintaxis:** obj << Gradient Reverse Label Order

**Descripción:** Invierte el orden de las etiquetas en un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**Sintaxis:** obj << Gradient Scale( "Lineal"|"Cuantil"|"Desviación estándar"|"Logaritmo"|"Compensación por logaritmo"|"Personalizado"="Lineal" )

**Descripción:** Establece el tipo de escala del gradiente. "Lineal" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**Sintaxis:** obj << Gradient Scale Values( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**Sintaxis:** obj << Gradient Show Missing( "Automático"|"Activado"|"Desactivado"="Automático" )

**Descripción:** Establece cuándo mostrar la entrada de la leyenda para los valores faltantes. "Automático" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**Sintaxis:** obj << Gradient Transparency( "Ninguno"|"Lineal"="Lineal" )

**Descripción:** Establece el comportamiento de transparencia de los gradientes. "Lineal" de forma predeterminada.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Gradient Transparency( "None" );

```

### Line Style

**Sintaxis:** obj << Line Style( pen style )

**Descripción:** Establece el estilo de las líneas. Las opciones son sólido, punteado, discontinuo, guión-punto y guión-punto-punto.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**Sintaxis:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Otro..." )

**Descripción:** Establece el grosor de las líneas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Parent

**Sintaxis:** seg2 = obj << Parent

**Descripción:** Devuelve el progenitor del segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Parent;

```

### Revert

**Sintaxis:** obj << Revert

**Descripción:** Devuelve el segmento a su estado original.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
Wait( 1 );
seg << Set Color( "Red" );
Wait( 1 );
seg << Revert;

```

### Set Color

**Sintaxis:** obj << Set Color( color )

**Descripción:** Establece el color para todas las formas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Color( "Green" );

```

### Set Description

**Sintaxis:** obj << Set Description( description )

**Descripción:** Establece la descripción del segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Fill Color

**Sintaxis:** obj << Set Fill Color( color )

**Descripción:** Establece el color de relleno de todas las formas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**Sintaxis:** obj << Set Fill Pattern

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Blue" );
seg << Set Fill Pattern( "h wave medium" );

```

### Set Gradient

**Sintaxis:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**Descripción:** Establece el gradiente de coloración.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**Sintaxis:** obj << Set Gradient Color Theme

**Descripción:** Establece el tema de color del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**Sintaxis:** obj << Set Gradient Custom Scale

**Descripción:** Establece que el gradiente utilice una lista de valores para una escala personalizada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**Sintaxis:** obj << Set Gradient Discrete Colors

**Descripción:** Establece si cada nivel de un gradiente debe ser de un único color o si la transición de colores debe ser gradual.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**Sintaxis:** obj << Set Gradient Fill( "Entre"|"Encima"|"Debajo"|"Encima Debajo"="Encima Debajo" )

**Descripción:** Establece el comportamiento de coloración de los valores que están fuera del rango de la escala del gradiente. "Encima Debajo" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**Sintaxis:** obj << Set Gradient Label Count

**Descripción:** Establece el número de etiquetas en la leyenda de un gradiente. Es uno más que el número de niveles de contorno.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**Sintaxis:** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**Sintaxis:** obj << Set Gradient Legend Horizontal

**Descripción:** Establece si se debe dibujar la leyenda del gradiente en horizontal.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**Sintaxis:** obj << Set Gradient Legend Label Format

**Descripción:** Establece el formato de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**Sintaxis:** obj << Set Gradient Legend Label Width

**Descripción:** Establece la longitud máxima de caracteres de las etiquetas de leyenda de gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**Sintaxis:** obj << Set Gradient Legend Show Labels

**Descripción:** Establece si se deben mostrar las etiquetas de nivel en la leyenda del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**Sintaxis:** obj << Set Gradient Level Count

**Descripción:** Establece el número de niveles en un gradiente. Es uno menos que el número de etiquetas.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**Sintaxis:** obj << Set Gradient Lightness Range

**Descripción:** Establece el brillo mínimo y máximo para los colores de nivel en un gradiente. Los colores se escalarán para cubrir este rango. Un valor faltante se trata como si no hubiera cambios.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**Sintaxis:** obj << Set Gradient Range( "Predeterminado"|"Rango de datos exacto"|"90% medio"="Predeterminado" )

**Descripción:** Establece el rango en el que se generan las escalas del gradiente no personalizadas. "Predeterminado" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**Sintaxis:** obj << Set Gradient Reverse Color Order

**Descripción:** Invierte el orden de los colores en un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**Sintaxis:** obj << Set Gradient Reverse Label Order

**Descripción:** Invierte el orden de las etiquetas en un gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**Sintaxis:** obj << Set Gradient Scale( "Lineal"|"Cuantil"|"Desviación estándar"|"Logaritmo"|"Compensación por logaritmo"|"Personalizado"="Lineal" )

**Descripción:** Establece el tipo de escala del gradiente. "Lineal" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**Sintaxis:** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**Descripción:** Establece un conjunto personalizado de valores para usarlos en la escala del gradiente.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**Sintaxis:** obj << Set Gradient Show Missing( "Automático"|"Activado"|"Desactivado"="Automático" )

**Descripción:** Establece cuándo mostrar la entrada de la leyenda para los valores faltantes. "Automático" de forma predeterminada.

**JMP Versión agregada:** 18

```js

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder(
	Variables( X( :city ), Y( :POP ), Color( :NO ) ),
	Elements( Bar( X, Y ) )
);
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Label Offset

**Sintaxis:** obj << Set Label Offset {Index, Longitude, Latitude}, ...

**Descripción:** Coloca etiquetas de fila según las coordenadas indicadas.

**JMP Versión agregada:** 16

### Set Line Style

**Sintaxis:** obj << Set Line Style( pen style )

**Descripción:** Establece el estilo de las líneas. Las opciones son sólido, punteado, discontinuo, guión-punto y guión-punto-punto.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**Sintaxis:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"Otro..." )

**Descripción:** Establece el grosor de las líneas.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Set Property

**Sintaxis:** obj << Set Property( "property", value )

**Descripción:** Establece el valor de la property con nombre para el cuadro de visualización.

```js

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Transparency

**Sintaxis:** obj << Set Transparency( number )

**Descripción:** Establece la transparencia de la forma. El argumento debe ser un número entre 0 y 1.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Transparency( .3 );

```

### Shape Seg

**Sintaxis:** ss = Shape Seg( {Path(<path>), ...}, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) > )

**Descripción:** Devuelve un segmento de visualización con una colección de formas. Cada forma dibuja un trazo a lo largo de un camino determinado si el relleno es 0, o pinta el interior del camino determinado si el relleno es distinto de 0. El camino se puede especificar mediante una matriz N x 3 o con una representación en texto. Una matriz de camino tiene tres columnas para x e y, e indicadores para cada punto del camino. Los valores de los indicadores son 0 para control, 1 para mover, 2 para un segmento de línea, 3 para un segmento cúbico de Bézier, y son negativos si el punto también cierra el camino. El texto del camino es compatible con la sintaxis de SVG.

**Ejemplo 1**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )},
			Row States( {Selected State( 1 ), Color State( "red" )} )
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

### Sib

**Sintaxis:** seg2 = obj << Sib

**Descripción:** Devuelve el hermano del segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**Sintaxis:** obj << Sib Append( seg2 )

**Descripción:** Agrega un segmento de visualización inmediatamente después del segmento de visualización.

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
win = New Window( "World",
	gb = Graph(
		FrameSize( 800, 400 ),
		X Scale( -180, 180 ),
		Y Scale( -90, 90 ),
		<<Background Map( Images( "Simple Earth" ) )
	)
);
imgBox = win[framebox( 1 )];
mapSeg = imgBox << FindSeg( MapSeg( 1 ) );
mapSeg << Transparency( 0.5 );
Try(
	xAxis = gb[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = gb[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**Sintaxis:** obj << Sib Prepend( seg2 )

**Descripción:** Agrega un segmento de visualización inmediatamente antes del segmento de visualización.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
Try(
	xAxis = g[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = g[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Transparency

**Sintaxis:** obj << Transparency( number )

**Descripción:** Establece la transparencia de la forma. El argumento debe ser un número entre 0 y 1.

```js

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ),
			Path( "M20,20 C20,60 60,60 60,20 Z" )}
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Transparency( .3 );

```

