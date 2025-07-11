# Graphics



### Add Color Theme

**Descripción:** Crea un nuevo tema de color personalizado y lo registra en el selector de temas.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Arc

**Sintaxis:** Arc( left, top, right, bottom, startAngle, endAngle )

**Descripción:** Dibuja un arco de un óvalo.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arrow

**Sintaxis:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Descripción:** Dibuja una línea con una flecha o una secuencia de ellas.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### Back Color

**Sintaxis:** Back Color( <name|index|rgbList> )

**Descripción:** Establece el color de fondo para el modo de borrado de la función Text().

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Blend Colors

**Sintaxis:** color = Blend Colors( color1, color2, <percent2>, <colorSpace>, <hueDirection> )

**Descripción:** Combina dos colores con un porcentaje y un espacio de color configurables.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
Blend Colors( "black", "white", 0.25 );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", "sRGB" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", "lRGB" );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.5, "LUV" );

```

**Ejemplo 5**

```js

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.75, "HLS" );

```

**Ejemplo 6**

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
c1 = "red";
c2 = "blue";
steps = 20;
New Window( "HLS Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

**Ejemplo 7**

```js

Names Default To Here( 1 );
Names Default To Here( 1 );
c1 = "blue";
c2 = "red";
steps = 20;
New Window( "HCLuv Radial Color Blending",
	Graph(
		frameSize( 290, 110 ),
		X Scale( 0, 150 ),
		Y Scale( 0, 55 ),
		Suppress Axes,
		Text( {2, 47}, "Short" ),
		Text( {2, 32}, "Long" ),
		Text( {2, 17}, "Positive" ),
		Text( {2, 2}, "Negative" ),
		For( i = 0, i < steps, i += 1,
			x = i * 6 + 30;
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );
			Rect( x, 45, x + 5, 55, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );
			Rect( x, 30, x + 5, 40, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );
			Rect( x, 15, x + 5, 25, 1 );
			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );
			Rect( x, 0, x + 5, 10, 1 );
		)
	)
);

```

### Char To Path

**Sintaxis:** m = Char To Path( pathText )

**Descripción:** Convierte la especificación de una ruta de acceso de forma alfanumérica a matricial.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**Sintaxis:** Circle( {x, y}, radius|PixelRadius( px ), ..., <"FILL"> )

**Descripción:** Dibuja un círculo centrado en el punto {x, y}. El radio se puede especificar en forma de entero basado en el eje vertical o como número de píxeles. Si el radio se indica como número de píxeles, el tamaño del círculo no varía al cambiar el eje vertical. Es posible repetir los argumentos en cualquier orden para dibujar múltiples círculos. Si se utiliza el argumento "FILL", se debe colocar en última posición. Se utiliza para rellenar los círculos con un color de relleno en lugar de trazarlos con el color de la pluma.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );
		Fill Color( "blue" );
		Transparency( .25 );/* transparent fill for concentric circles */
		Circle( {60, 20}, 4, 7, 10, "FILL" );
		Fill Color( "green" );
		Transparency( 1 );/* solid fill */Circle(
			PixelRadius( 18 ),
			{40, 20},
			{40, 50},
			{40, 80},
			"FILL"
		);
	)
);

```

### Color Difference

**Sintaxis:** color = Color Difference( color1, color2, <difference metric>)

**Descripción:** Devuelve la diferencia entre dos colores bajo una métrica de diferencia de color especificada.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "sRGB" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "redmean" );

```

**Ejemplo 4**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE76" );

```

**Ejemplo 5**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE94" );

```

**Ejemplo 6**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIEDE2000" );

```

**Ejemplo 7**

```js

Names Default To Here( 1 );
Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**Sintaxis:** {h, l, s} = Color To HLS( color )

**Descripción:** Devuelve una lista de los componentes de tono, brillo y saturación. El argumento color puede ser cualquier color JSL válido, o una matriz de números de colores.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Sintaxis:** {r, g, b} = Color To RGB( color )

**Descripción:** Devuelve una lista de los componentes rojo, verde y azul entre 0 y 1. El argumento de color puede ser cualquier color JSL válido o una matriz de números de colores.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**Sintaxis:** Contour( xVector, yVector, zGridMatrix, zContours, < <<zColor( color, option )>, < <<Fill|Fill Between|Fill Below|Fill Above>, < <<Transparency(vector)> )

**Descripción:** Dibuja contornos a partir de una cuadrícula de valores. Si se especifican menos colores que contornos, las opciones de "Interpolar colores" o "Recorrer colores" determinan cómo se aplicarán los colores.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );

New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box(
				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )
			)
		),
		Outline Box( "Line Colors",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"} )
				)
			)
		)
	),
	H List Box(
		Outline Box( "Fill Cycle",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor(
						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},
						"Cycle Colors"
					),
					fill
				)
			)
		),
		Outline Box( "Fill Interpolate",
			Graph Box(
				Contour(
					1 :: 100,
					1 :: 100,
					(1 :: 100)` * (1 :: 100),
					7 ^ (0 :: 4),
					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),
					fill
				)
			)
		)
	)
);

```

### Contour Function

**Sintaxis:** Contour Function( zExpr, xName, yName, z|zMatrix, < <<XGrid( min, max, incr )>, < <<YGrid( min, max, incr )>, < <<ZColor( color, option )>, < <<ZLabeled>, < <<Filled>, < <<FillBetween>, < <<Ternary>, < <<Transparency( t )> )

**Descripción:** Evalúa la expresión en una cuadrícula de valores de xName y yName, y dibuja las líneas de contorno. El color se puede especificar en forma de número, matriz o lista de valores RGB, una lista de nombres de colores o un tema de color. La transparencia t se puede especificar en forma de número o de matriz. Si se especifica la opción Ternary, los contornos se recortan y se limitan a un sistema de coordenadas ternarias.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),
			Transparency( 0.9 )
		)
	)
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Contour Function(
			Log( a * a + b * b ),
			a,
			b,
			1 :: 10,
			<<Filled,
			<<ZColor( {{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors" )
		)
	)
);

```

### Drag Line

**Sintaxis:** Drag Line( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Descripción:** Dibuja una línea poligonal pasando por los puntos indicados. Sin embargo, a diferencia de Line, los puntos se pueden arrastrar por la pantalla, con lo cual se actualizan los valores de las matrices empleadas como argumentos (LValue).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Line( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Marker

**Sintaxis:** Drag Marker( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Descripción:** Dibuja marcadores móviles en los puntos indicados. Los valores de la matriz se actualizan a medida que los marcadores se mueven.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Marker( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Polygon

**Sintaxis:** Drag Polygon( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Descripción:** Dibuja un polígono lleno en los puntos indicados. Los puntos se pueden arrastrar por la pantalla, con lo cual se actualizan los valores de los argumentos de la matriz (LValue).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Polygon( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Rect

**Sintaxis:** Drag Rect( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Descripción:** Dibuja un rectángulo en los puntos indicados. Sin embargo, a diferencia de Rect, las esquinas se pueden arrastrar por la pantalla, con lo cual se actualizan los valores de las matrices empleadas como argumentos (LValue).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33];
	exy = [88 22];,
	Graph Box(
		Drag Rect( exx, exy );
		Line( exx, exy );
	)
);

```

### Drag Text

**Sintaxis:** Drag Text( xMatrixName, yMatrixName, text, <dragScript>, <MouseUpScript> )

**Descripción:** Dibuja el texto en los puntos indicados. A diferencia de la función Text(), no obstante, los puntos se pueden arrastrar por la pantalla, lo cual provoca la actualización de los valores de las matrices en los argumentos xMatrixName y yMatrixName. El argumento text puede ser un argumento de cadena de caracteres o una lista de cadenas de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = [11 33 77];
	exy = [88 22 44];,
	Graph Box(
		Drag Text( exx, exy, "hello" );
		Line( exx, exy );
	)
);

```

### Fill Color

**Sintaxis:** Fill Color( <name|index|rgbList> )

**Descripción:** Establece el color para dibujar áreas rellenas.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Sintaxis:** Fill Pattern( name|mask|image )

**Descripción:** Establece el patrón para dibujar áreas rellenas. Una máscara es una matriz de valores comprendidos entre 0 y 1 que se aplicarán al color de relleno actual.

**JMP Versión agregada:** Antes de la versión 14

**Imagen**

```js

Names Default To Here( 1 );

image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Máscara**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Get Color Theme Detail

**Sintaxis:** script = Get Color Theme Detail(name)

**Descripción:** Devuelve el script correspondiente al nombre de tema de color especificado.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Sintaxis:** {list of names} = Get Color Theme Names(<kind>)

**Descripción:** Devuelve una lista de cadenas de temas de color que coinciden con el parámetro opcional kind. kind es uno de los siguientes: "continuo", "categórico", "secuencial", "divergente", "cualitativo" o "cromático".

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Get Color Theme Names();

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Get Color Theme Names( "sequential" );

```

### Gradient Function

**Sintaxis:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), < <<XGrid( min, max, incr )>, < <<YGrid( min, max, incr )>, < <<Transparency( t )> )

**Descripción:** Rellena el gráfico con un gradiente entre dos colores. El argumento zExpr es una función en términos de las variables especificadas por xName y yName. El vector zLimits especifica el intervalo de valores de zExpr. El argumento zColor es un vector o lista que definen los dos colores que se combinan para crear el gradiente. Transparency es un valor único que se aplica a toda la cuadrícula.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Gradient Function(
			Log( a * a + b * b ),
			a,
			b,
			[2 10],
			Z Color( {"Green", "Orange"} )
		)
	)
);

```

### H Line

**Sintaxis:** H Line( y ); H Line( x1, x2, y )

**Descripción:** Dibuja una línea horizontal en y desde x1 hasta x2 o de extremo a extremo del marco.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H Size

**Sintaxis:** h = H Size()

**Descripción:** Devuelve el tamaño horizontal del marco de gráficos en píxeles.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### HLS Color

**Sintaxis:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Descripción:** Devuelve un número de color a partir de los componentes de tono, brillo y saturación, todos entre 0 y 1.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Color Wheel",
	Graph(
		frameSize( 200, 200 ),
		For( hue = 0, hue < 360, hue += 30,
			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );
			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );
			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );
			Oval( x - 10, y - 10, x + 10, y + 10, 1 );
		)
	)
);

```

### Handle

**Sintaxis:** Handle( xPos, yPos, dragScript, <mouseUpScript> )

**Descripción:** Dibuja un marcador cuadrado en las coordenadas especificadas por xPos e yPos y evalúa repetidamente la expresión dragScript cuando se pulsa el ratón encima del marcador. Antes de ejecutar el script, los valores globales x e y se fijan a los valores del ratón y, a continuación, se devuelven a sus valores iniciales. La expresión mouseUpScript se ejecuta después de soltar el botón del ratón.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Handle(
			exx,
			exy,
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### Heat Color

**Sintaxis:** y = Heat Color( x ); y = Heat Color( x, < <<theme> )

**Descripción:** Devuelve un color que corresponde a un valor entre 0 y 1. El tema predeterminado es "Azul a gris y a rojo". Admite cualquier tema de los que admite el Gráfico de celdas y también admite argumentos matriciales.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Color Bar",
	Graph(
		For( z = 0, z < 1, z += .1,
			x = 10 + 80 * z;
			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### In Path

**Sintaxis:** b = In Path( x, y, pathMatrix|pathText )

**Descripción:** Devuelve 1 si el punto (x, y) pertenece al trazado especificado y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );

New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker(
					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),
					{x, y}
				)
			)
		);
	);
);

```

### In Polygon

**Sintaxis:** b = In Polygon( x, y, xMatrix, <yMatrix> )

**Descripción:** Devuelve 1 si el punto (x,y) pertenece al polígono definido por los vectores indicados como argumentos y 0 en caso contrario.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**Sintaxis:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, <theme> ); y = Level Color( i, <theme> )

**Descripción:** Devuelve un color de categoría, donde i es el nivel de categoría, n el número de categorías (opcional) y theme son los temas de color del cuadro desplegable Color de valor del cuadro de diálogo Información de columna. (El tema predeterminado es "JMP Default"). El índice de la categoría debe ser >= 1 y <= el número de categorías especificadas en la llamada o definidas por el tema. Si el segundo argumento es un carácter, es el tema de color y n es no especificado.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Color Bar",
	Graph(
		For( x = 1, x <= 100, x += 5,
			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );
			Rect( x - 5, 45, x + 5, 55, 1 );
		)
	)
);

```

### Line

**Sintaxis:** Line( {x1, y1}, {x2, y2}, ..., < <<Value Space( 0|1 ) >, < <<Smooth( tension, domain, min response, max response ) > ); Line( xMatrix, yMatrix, < <<Value Space(0 | 1) >, < <<Smooth( tension, domain, min response, max response ) > )

**Descripción:** Dibuja una línea o líneas conectadas. En el caso predeterminado, la línea se dibuja linealmente entre los extremos. Si se selecciona la opción Value Space, la línea seguirá la proyección especificada por las escalas de los ejes subyacentes. Si se selecciona la opción Smooth, se suavizan las conexiones, y se restringen por tension, domain dimension, min response y max response.

**JMP Versión agregada:** Antes de la versión 14

**Constrained smoothing**

```js

Names Default To Here( 1 );
New Window( "Constrained smoothing",
	Graph Box(
		Pen Color( "gray" );
		H Line( 90 );
		H Line( 92 );
		H Line( 10 );
		H Line( 8 );
		Pen Color( "red" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );
		Pen Color( "blue" );
		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( ., "X", 8, 92 ) );
	)
);

```

**Polyline**

```js

Names Default To Here( 1 );
New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

**Smoothing**

```js

Names Default To Here( 1 );
New Window( "Smoothing",
	Graph Box(
		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),
		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),
		Pen Color( "gray" );
		H Line( 1 );
		H Line( -1 );
		H Line( 0 );
		Line( 0 :: 10, Sin( 0 :: 10 ) );
		Pen Color( "red" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );
		Pen Color( "blue" );
		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );
	)
);

```

**Value space interpolation**

```js

Names Default To Here( 1 );
New Window( "Interpolate in value space",
	Graph Box(
		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),
		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )
	)
);

```

### Line Style

**Sintaxis:** Line Style( x )

**Descripción:** Establece el estilo de línea actual, que puede ser uno de los siguientes: 0 (sólido), 1 (punteado), 2 (discontinua), 3 (guión-punto) o 4 (guión-punto-punto).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",
		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",
		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};
		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},
			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );
			Line Style( istyle );
			Pen Size( 2 );
			Line( x, y + 92 - 6 * i );
		);
	)
);

```

### Mandelbrot

**Sintaxis:** v = Mandelbrot( n, radius, x, y )

**Descripción:** Calcula el valor de la función de Mandelbrot en x,y, deteniéndose después de n iteraciones o al superar el radio.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
grid = 50;
rmax = 0/*zero for smooth*/;
nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set 
New Window( "Mandelbrot - use magnifier to zoom in",
	g = Graph Box(
		X Scale( -3, 3 ),
		Y Scale( -2, 2 ),
		framesize( 600, 400 ),
		Gradient Function(
			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened
			a, // standard GradientFunction stuff...
			b,
			Matrix( {0, nmax} ), // range to map the colors onto
			Z Color(
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),
				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),
				RGB Color( .3, .3, .4 )}
			),
			<<xgrid(
				X Origin(), X Origin() + X Range(),
				X Range() / (Floor( grid * H Size() / V Size() ))
			),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);
g << Set Y Axis(
	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )}
);

```

### Marker

**Sintaxis:** Marker( <rs>, {x1, y1}, {x2, y2}, ... ); Marker( <rs>, xMatrix, yMatrix )

**Descripción:** Dibuja marcadores en las coordenadas indicadas.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Size

**Sintaxis:** Marker Size( n )

**Descripción:** Establece los marcadores de tamaño para dibujar en el marco de gráficos. 0 = punto, 1 = pequeño, ....

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Mousetrap

**Sintaxis:** Mousetrap( dragScript, <mouseUpScript> )

**Descripción:** Evalúa repetidamente la expresión dragScript mientras se mantiene pulsado el ratón dentro del gráfico allí donde la pulsación no sea gestionada por otro objeto gráfico. Antes de ejecutar el script, las variables globales x e y se fijan a los valores del ratón y posteriormente se restauran a sus valores originales. La expresión mouseUpScript se ejecuta al soltar el botón del ratón.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	exx = 20;
	exy = 50;,
	Graph Box(
		Frame Size( 200, 200 ),
		Mousetrap(
			exx = x;
			exy = y;
		);
		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );
	)
);

```

### New Heat Image

**Sintaxis:** New Heat Image( Matrix, <Color Theme / gradient ( ... )>

**Descripción:** Crea una imagen del mapa de calor basada en una matriz y tema de color o gradiente.

**JMP Versión agregada:** 16

```js

Names Default To Here( 1 );

nx = 20; // data is this size
ny = 15;
data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols
// create a magnified matrix for seeing each value
magnify = 10;
big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );
big data = Transform Each( {z, {row, col}}, big data, 
	// and filling each value with one from the small matrix
	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]
);
New Window( "small and big",
	Lineup Box( N Col( 3 ),
		New Heat Image(
			data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			big data,
			gradient(
				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}
			)
		),
		New Heat Image(
			Abs( big data ),
			gradient(
				{Color Theme( "White to Black" ), Scale Values( [0 2] ),
				Reverse Gradient( 1 )}
			)
		)
	)
);

```

### Normal Contour

**Sintaxis:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, <colorsMatrix>, <fill=0> )

**Descripción:** Dibuja los contornos de probabilidad normal de k poblaciones y 2 variables. El argumento prob puede ser una probabilidad escalar o una matriz de probabilidades. Los argumentos meanMatrix y stdsMatrix son matrices k por 2, y el argumento corrMatrix es un vector k por 1. El argumento colorsMatrix específica los colores de los k contornos, especificados como colores de JSL (ya sean valores enteros de colores de JSL o valores devueltos por funciones de color de JSL como RGB Color() o HLS Color()). El argumento fill especifica la transparencia del color de relleno del contorno.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,
		Normal Contour(
			0.95,
			[40 40, 60 50],
			[15 5, 10 10],
			[-0.9, -0.5],
			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),
			0.2
		)
	)
);

```

### Oval

**Sintaxis:** Oval( left, top, right, bottom, <fill=0> )

**Descripción:** Dibuja un óvalo dentro del rectángulo especificado y lo rellena si el parámetro de relleno es no nulo.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Oval( 15, 75, 65, 55, 1 );
		Oval( 10, 80, 70, 50 );
	)
);

```

### Path

**Sintaxis:** Path( pathMatrix|pathText, <fill=0> )

**Descripción:** Dibuja un trazo a lo largo de una trayectoria determinada si el valor del relleno es 0. En caso contrario, pinta el interior de ese trazo. La trayectoria se puede especificar en forma de matriz N x 3 o en forma de texto. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento de curva de Bézier, y son negativos si, además, el punto cierra la trayectoria. El formato de texto de la trayectoria es compatible con la sintaxis SVG.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );
		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );
	)
);

```

### Path To Char

**Sintaxis:** s = Path To Char( pathMatrix )

**Descripción:** Convierte la especificación de una ruta de acceso de forma matricial a alfanumérica.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**Sintaxis:** Pen Color( <name|index|rgbList> )

**Descripción:** Establece el color para dibujar líneas.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Sintaxis:** Pen Size( <x> )

**Descripción:** Establece el grosor de las líneas en píxeles.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pick Color

**Sintaxis:** color = Pick Color( <window title>, <name|index|rgbList> )

**Descripción:** Devuelve un color que se seleccionó con el selector de colores estándar.

**JMP Versión agregada:** 14

```js

Names Default To Here( 1 );
pickedColor = Pick Color( "Pick a Line Color", "Red" );
New Window( "Example",
	Graph Box(
		Frame Size( 300, 300 ),
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
		Pen Color( pickedColor );
		Line( [10 30 70], [88 22 44] );
	)
);

```

### Pick Color Theme

**Sintaxis:** theme = Pick Color Theme( <window title>, <Color Theme(name|specification)>, <Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")>)

**Descripción:** Devuelve un tema de color que se seleccionó con el selector de tema de color estándar. El tema inicial puede especificarse explícitamente o determinando un Type para utilizar los temas de las preferencias.

**JMP Versión agregada:** 17

**Constructor de gráficos**

```js

Names Default To Here( 1 );

theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Variables( Color( :SAT Math ), Shape( :State ) ),
	Elements( Map Shapes( Legend( 2 ) ) )
);
server = gb << Get Legend Server;
item = server << Get Legend Item( 2, 1 );
item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

**Leyenda de fila**

```js

Names Default To Here( 1 );

pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**Sintaxis:** Pie( left, top, right, bottom, startAngle, endAngle )

**Descripción:** Dibuja un sector circular.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pixel Line To

**Sintaxis:** Pixel Line To( h, v )

**Descripción:** Dibuja una línea desde la coordenada en píxeles actual de la pluma hasta las coordenadas horizontal y vertical indicadas.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Move To

**Sintaxis:** Pixel Move To( h, v )

**Descripción:** Mueve la pluma, situada en un píxel determinado, hasta las coordenadas horizontal y vertical indicadas en relación con el origen.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Origin

**Sintaxis:** Pixel Origin( x, y )

**Descripción:** Establece el origen que se usa como referencia en los comandos de trazado de píxeles.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pixel Origin( 50, 50 ); // in axis coordinates
		// others are pixels, relative to pixel origin
		Pixel Move To( 0, 0 );
		Pixel Line To( 0, 80 );
		Pixel Move To( 2, 0 );
		Pixel Line To( 2, 40 );
		Pixel Move To( 4, 0 );
		Pixel Line To( 4, 20 );
	)
);

```

### Pixel Path

**Sintaxis:** PixelPath( h, v, pathMatrix|pathText, <fill=0>, <scale=1.0>, <orient={0.0,1.0}> )

**Descripción:** Dibuja un trazo a lo largo de una trayectoria determinada definida por píxeles si el valor del relleno es 0. En caso contrario, pinta el interior de ese trazo. La trayectoria se puede especificar en forma de matriz N x 3 o en forma de texto. Una matriz de trayectoria tiene tres columnas para x, y, y marcas para cada punto de la trayectoria. Los valores de las marcas son 0 para control, 1 para movimiento, 2 para segmento lineal, 3 para segmento de curva de Bézier, y son negativos si, además, el punto cierra la trayectoria. El formato de texto es compatible con la sintaxis SVG. La trayectoria se escala y traslada respecto a su origen en función de los parámetros opcionales, con la orientación especificada en el espacio de ejes.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "blue" );
		angle = 45 * Pi() / 180; // 45 deg in radians
		Pixel Origin( 20, 80 );
		Pixel Path(
			0,
			0, // offset from pixel origin in pixels
			[-10 -10 1,
			10 -10 0,
			20 20 0,
			-10 20 -3],
			1, // fill
			2.0, // scale
			{Sin( angle ), Cos( angle )} // clockwise rotation
		);
		Pixel Origin( 80, 20 );
		Pixel Path(
			0,
			0,
			"M-10,-10 C10,-10 20,20 -10,20 Z",
			0,
			1.0,
			{Sin( -angle ), Cos( -angle )}
		);
	)
);

```

### Pixel Text

**Sintaxis:** Pixel Text( <properties>, {h, v}, text, ... )

**Descripción:** Se mueve hasta la posición del píxel {h, v} y dibuja el texto especificado por el argumento text. Los argumentos de propiedades con nombre asignado incluyen Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. Los argumentos de posición, los argumentos con nombre y las cadenas de caracteres se pueden mezclar en cualquier orden.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );

New Window( "Example",
	Graph Box(
		Pixel Origin( 10, 80 ); // in axis coordinates
		Pixel Move To( 0, 0 );
		Pixel Line To( 160, 140 ); // in pixels from pixel origin
		Pixel Text( {0, 0}, "default" );
		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );
		Pixel Text(
			Center Justified,
			Bottom Align,
			{160, 140},  // in pixels from pixel origin
			"Bottom Align\!NCenter Justified"
		);
	)
);

```

### Polygon

**Sintaxis:** Polygon( {x1, y1}, {x2, y2}, ..., <<fill(bool) ); Polygon( xMatrix, <yMatrix>, <<fill(bool) )

**Descripción:** Dibuja el polígono especificado por los puntos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "gray" );
		Polygon( [10 30 90], [88 22 44] );
		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );
	)
);

```

### Polygon Area

**Sintaxis:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );

area = Polygon Area( xMatrix, yMatrix )

**Descripción:** Calcula el área del polígono especificado.

**JMP Versión agregada:** 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Sintaxis:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );

centroid = Polygon Centroid( xMatrix, yMatrix )

**Descripción:** Calcula el centroide del polígono especificado.

**JMP Versión agregada:** 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Sintaxis:** rows = Polygon Simplify( xMatrix|xyMatrix, <yMatrix>, <<<detail factor(f=200)>, <<<multiple(ids)>, <<<geodesic(bool)> )

**Descripción:** Quita los puntos de un polígono que tienen poco detalle y devuelve los índices de los puntos restantes. detail factor es inversamente proporcional a la tolerancia de error de detalle. multiple(ids) indica que se deben simplificar muchos polígonos conjuntamente para que las aristas comunes se traten de forma coherente. ids es una matriz con una fila por punto. geodesic(1) indica que las coordenadas son latitud y longitud para medir distancias.

**JMP Versión agregada:** 19

**Ejemplo 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "cyan" );
		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );
		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );
		Polygon( xx, yy );
		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );
		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );
	)
);

```

**Múltiples polígonos**

```js

Names Default To Here( 1 );
dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify(
	polys,
	<<detail factor( 500 ),
	<<multiple( ids ),
	<<geodesic( 1 )
);
unique ids = Associative Array( ids );

minx = Min( polys[0, 1] );
maxx = Max( polys[0, 1] );
sx = maxx - minx;
miny = Min( polys[0, 2] );
maxy = Max( polys[0, 2] );
sy = maxy - miny;

New Window( "Parishes",
	Graph Box(
		Frame Size( 600, 600 ),
		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),
		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 
		
		For Each( {id}, unique ids, 

			rows = simple rows[Loc( ids[simple rows] == id )];
			Pen Color( "light red" );
			Pen Size( 4 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );

			rows = Loc( ids == id );
			Pen Color( "black" );
			Pen Size( 1 );
			Polygon( polys[rows, 0], <<Fill( 0 ) );
			
			{cx, cy} = Polygon Centroid( polys[rows, 0] );
			Text( Center Justified, {cx, cy}, Char( id ) );
		)
	)
);

```

### RGB Color

**Sintaxis:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Descripción:** Devuelve un número de color a partir de los componentes rojo, verde y azul, todos entre 0 y 1. RGB Color(1, 1, 1) corresponde al color blanco.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "RGB Color Example", 
    /* 1 through 16 are good */ 
	division = 6;
	blocks = division + 1;
	ysize = 400 / Sqrt( division );
	xsize = ysize * blocks;
	fract = 1 / division;
    /* 100 is default axis range */
	yBlockSize = 100 / blocks;
	xBlockSize = 100 / (blocks * blocks);
	Graph(
		frameSize( xsize, ysize ),
		For( blue = 0, blue <= 1, blue += fract,
			For( red = 0, red <= 1, red += fract,
				For( green = 0, green <= 1, green += fract,
					y = red / fract * yBlockSize;
					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;
                    /* here's the example */
					Fill Color( RGB Color( red, green, blue ) );
					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );
				)
			)
		)
	);
);

```

### Rect

**Sintaxis:** Rect( left, top, right, bottom, <fill=0> ); Rect( {left, top}, {right, bottom} )

**Descripción:** Dibuja un rectángulo y lo rellena si el parámetro es distinto de cero.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "Green" );
		Pen Size( 2 );
		Fill Color( "Red" );
		Rect( 15, 75, 65, 55, 1 );
		Rect( 10, 80, 70, 50 );
	)
);

```

### Remove Color Theme

**Sintaxis:** Remove Color Theme("Name"|{"Name", <flags>, {color, ...}, <{position, ...}>})

**Descripción:** Quita un tema de color personalizado de la lista global, por nombre o por el objeto de tema de color completo.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Remove Color Theme( "Yellow To Blue" );

```

### Text

**Sintaxis:** Text( <properties>, {x, y}, text, ... )

Text( {left, top, right, bottom}, text )

**Descripción:** Se mueve a la posición {x, y} y dibuja el texto especificado en el argumento text. Los argumentos de propiedad con nombre incluyen Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. Se pueden mezclar argumentos de posición, argumentos con nombre y cadenas de caracteres en cualquier orden. También se pueden usar cuatro coordenadas x, y para describir una caja en la cual dibujar el texto. En ese caso, no se utilizan propiedades.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Color

**Sintaxis:** Text Color( <name|index|rgbList> )

**Descripción:** Establece el color para dibujar texto.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Font

**Sintaxis:** {nm, sz, st, an} = Text Font(fontName, <size>, <"bold italic underline strikeout">, <angle>

**Descripción:** Establece la fuente para el trazado de Text() posterior. Utilícelo sin ningún argumento para obtener la configuración de fuente actual. El ángulo se expresa en grados en el sentido de las agujas del reloj.

**JMP Versión agregada:** 15

```js

Names Default To Here( 1 );
New Window( "Degrees",
	Graph Box(
		FrameSize( 400, 400 ),
		X Scale( -100, 100 ),
		Y Scale( -100, 100 ),
		Local( {fname, fsize, fstyle, fangle, i, a},
			{fname, fsize, fstyle, fangle} = Text Font();
			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );
			Text( Center Justified, {0, -10}, "JMP" );
			For( i = 0, i < 360, i += 15,
				Text Font( {fname, 10, "plain", -i + 90} );
				a = i * Pi() / 180;
				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );
				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );
			);
		)
	)
);

```

### Text Size

**Sintaxis:** Text Size( n )

**Descripción:** Establece el tamaño de la fuente para trazar textos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### To Color Space

**Sintaxis:** color = To Color Space( color, colorSpace )

**Descripción:** Traduce un color a otro espacio de color. Se asignan los colores fuera de la gama para ajustarlos al convertir a espacios de color más pequeños.

**JMP Versión agregada:** 18

**Ejemplo 1**

```js

Names Default To Here( 1 );
To Color Space( "red", "LMS" );

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Ejemplo 3**

```js

Names Default To Here( 1 );
To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**Sintaxis:** Transparency( <alpha> )

**Descripción:** Establece la transparencia a emplear en los comandos de dibujo. Alfa puede variar entre 0 (transparente) y 1 (opaco, el valor predeterminado). Algunos sistemas operativos no admiten esta opción.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Frame Size( 500, 500 ),
		X Scale( -3, 3 ),
		Y Scale( -3, 3 ),
		Transparency( .1 );
		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );
		For( i = 0, i < 10000, i++,
			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )
		);
	)
);

```

### V Line

**Sintaxis:** V Line( x ); V Line( x, y1, y2 )

**Descripción:** Dibuja una línea vertical en x desde y1 hasta y2 o de extremo a extremo del marco.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V Size

**Sintaxis:** v = V Size()

**Descripción:** Devuelve el tamaño vertical del marco de gráficos en píxeles.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### X Function

**Sintaxis:** X Function( xExpr, yName, <properties> )

**Descripción:** Dibuja la función xExpr en la dimensión X a medida que la variable yName varía en el intervalo del eje Y del gráfico. Entre los argumentos adicionales relativos a propiedades con nombre asignado se encuentran Min(X mínima), Max(Y máxima), Fill(patrón de relleno, valor del color de relleno), Inc(límite superior del incremento).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Sintaxis:** x = X Origin()

**Descripción:** Devuelve el valor x correspondiente al extremo izquierdo del marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Range

**Sintaxis:** x = X Range()

**Descripción:** Devuelve la distancia x de izquierda a derecha. X Origin() + X Range() corresponde al extremo derecho.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### X Scale

**Sintaxis:** X Scale( <xMin>, <xMax> )

**Descripción:** Establece una nueva escala en el marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
/* Default value for X Scale() is (0,100). */
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

### XY Function

**Sintaxis:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Descripción:** Esta función de script gráfico combina una expresión x(t) y una expresión y(t) para dibujar una curva x-y para el rango especificado del parámetro t. Inc() es el incremento máximo en t, o steps() es el número mínimo de pasos en t. Utilice steps() o inc() si el valor predeterminado no muestra detalles.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Spiral",
	Graph Box(
		Pen Color( "red" );
		xCenter = 50;
		yCenter = 50;
		minAngle = 0;
		maxAngle = Pi() * 2 * 20;
		XY Function(
			xCenter + ((ta / 3) * Cos( ta )),
			yCenter + ((ta / 3) * Sin( ta )),
			ta,
			Min( minAngle ),
			Max( maxAngle ),
			inc( Pi() / 100 )
		);
	)
);
/* sin() and cos() use ta as an argument (rotates)
   AND as a factor (expands) in this example.
   (sin and cos use radians, not degrees.) */

```

### Y Function

**Sintaxis:** Y Function( yExpr, xName, <properties> )

**Descripción:** Dibuja la función yExpr en la dimensión Y a medida que la variable xName varía en el intervalo del eje X del gráfico. Entre los argumentos adicionales relativos a propiedades con nombre asignado se encuentran Min(X mínima), Max(X máxima), Fill(patrón de relleno, valor del color de relleno), Inc(límite superior del incremento).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Sintaxis:** y = Y Origin()

**Descripción:** Devuelve el valor y correspondiente al extremo inferior del marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Range

**Sintaxis:** y = Y Range()

**Descripción:** Devuelve la distancia y de abajo a arriba. Y Origin() + Y Range() corresponde al extremo superior.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval(
			X Origin() + 10,
			Y Origin() + Y Range() - 10,
			X Origin() + X Range() - 10,
			Y Origin() + 10,
			1
		);
	)
);

```

### Y Scale

**Sintaxis:** Y Scale( <yMin>, <yMax> )

**Descripción:** Establece una nueva escala en el marco de gráficos.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
/* Default value for Y Scale() is (0,100).*/
New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		)
	)
);

```

