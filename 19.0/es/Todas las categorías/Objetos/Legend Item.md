# Legend Item



## Mensajes del elemento

### Get Label

**Sintaxis:** obj &lt;&lt; Get Label

**Descripción:** Devuelve la etiqueta del elemento de la leyenda.

**JMP Versión agregada:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Label );

```

### Get Position

**Sintaxis:** obj &lt;&lt; Get Position

**Descripción:** Devuelve la posición secuencial de un elemento en la leyenda o un código negativo si no se muestra. Códigos: -1 = ocultado por el usuario, -2 = ocultado por Si se muestra, -3 = Ocultado por Dependencia, -4 = Ocultado por configuración inicial

**JMP Versión agregada:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Position );

```

### Get Type

**Sintaxis:** obj &lt;&lt; Get Type

**Descripción:** Devuelve el tipo de elemento de la leyenda. Los tipos son: "Ninguno", "Marcador", "Línea H", "Línea V", "Paso", "Barra", "Diagrama de caja V", "Intervalo H", "Intervalo V", "Diagrama de caja de barra H", "Diagrama de caja de barra V", "Gráfico OHLC", "Diagrama de caja H", "Gradiente", "Gradiente de densidad", "Relleno y línea", "Tamaño de marcador", "Tamaño de línea", "Línea del gradiente", "Contorno del gradiente", "Color de marca", "Tamaño de marcador categórico", "Tamaño de celda".

**JMP Versión agregada:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
Print( item << Get Type );

```

### Set Label

**Sintaxis:** obj &lt;&lt; Set Label( text )

**Descripción:** Establece la etiqueta de un elemento en la leyenda.

**JMP Versión agregada:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Label( "Label Set Through Script" );

```

### Set Visible

**Sintaxis:** obj &lt;&lt; Set Visible( state=0|1 )

**Descripción:** Establece la visibilidad de un elemento en la leyenda.

**JMP Versión agregada:** 16

```jsl


dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

