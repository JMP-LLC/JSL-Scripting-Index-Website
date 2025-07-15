# Legend Model



## Mensajes del elemento

### Get Fill Color

**Sintaxis:** obj &lt;&lt; Get Fill Color

**Descripción:** Devuelve el color de relleno del elemento de modelo de leyenda que está vinculado a un segmento de visualización en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Ellipse( X, Y, Legend( 3 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 3, 1 );
Show( item << Get Fill Color );

```

### Get Gradient Settings

**Sintaxis:** obj &lt;&lt; Get Gradient Settings

**Descripción:** Devuelve una lista de configuración del gradiente para el elemento de modelo de leyenda que está vinculado a un segmento de visualización en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Color( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Gradient Settings );

```

### Get Label

**Sintaxis:** obj &lt;&lt; Get Label

**Descripción:** Devuelve la etiqueta del elemento de la leyenda.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Label );

```

### Get Marker Size Settings

**Sintaxis:** obj &lt;&lt; Get Marker Size Settings

**Descripción:** Devuelve una lista de configuración del tamaño de marcador para el elemento de modelo de leyenda que está vinculado a un segmento de visualización en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
Print( item << Get Marker Size Settings );

```

### Get Pen Settings

**Sintaxis:** obj &lt;&lt; Get Pen Settings

**Descripción:** Devuelve una lista de configuración de la pluma para el elemento de modelo de leyenda que está vinculado a un segmento de visualización en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 7 );
Print( item << Get Pen Settings );

```

### Get Type

**Sintaxis:** obj &lt;&lt; Get Type

**Descripción:** Devuelve el tipo de elemento de modelo de leyenda. Los tipos son: "Ninguno", "Marcador", "Línea H", "Línea V", "Paso", "Barra", "Diagrama de caja V", "Intervalo H", "Intervalo V", "Diagrama de caja de barra H", "Diagrama de caja de barra V", "Gráfico OHLC", "Diagrama de caja H", "Gradiente", "Gradiente de densidad", "Relleno y línea", "Tamaño de marcador", "Tamaño de línea", "Línea del gradiente", "Contorno del gradiente", "Color de marca", "Tamaño de marcador categórico" y "Tamaño de celda".

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**Sintaxis:** obj &lt;&lt; Set Label( text )

**Descripción:** Establece la etiqueta para el elemento de modelo de leyenda que está vinculado a un segmento de visualización en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
items = server << Get Legend Items;
For Each( {item, index}, items[1], item << Set Label( "Item " || Char( index ) ) );

```

### Set Properties

**Sintaxis:** obj &lt;&lt; Set Properties

**Descripción:** Establece las propiedades de visualización arbitraria para el elemento de modelo de leyenda que está vinculado a un segmento de visualización en el gráfico.

**JMP Versión agregada:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Size( :height ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 1, 1 );
item << Set Properties(
	{Marker Size( 5 ), Marker Scale( {Marker Size Minimum( "Dot" ), Style( "Nested Full" )} )
	}
);

```

