# Custom Graph



### Append Seg

**Sintaxis:** obj << Append Seg( display seg )

**Descripción:** Agrega un segmento de visualización al cuadro del marco

```js

Names Default To Here( 1 );
x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) )
);

```

### Background Map

**Sintaxis:** obj << Background Map

### Bottom

**Sintaxis:** obj << Bottom( number )

### Custom Graph

**Sintaxis:** New Window(Window title, <Editable|Dialog>, Graph Box( named arguments, ..., script segment

**Descripción:** Crea un gráfico mediante un script personalizado.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		),
		Title( "Oval" )
	)
);

```

### FrameSize

**Sintaxis:** Frame Size( width, height )

**Descripción:** Establece el tamaño del gráfico.

**Ejemplo 1**

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Framesize( 400, 400 ),
		<<backgroundcolor( "cyan" ),
		XAxis( Show Major Grid ),
		Title( "Sine curve" ),
		Y Function( 10 + 50 * Sin( a / 30 ), a )
	)
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
xmin = -2;
xmax = 1;
ymin = -1.5;
ymax = 1.5;
contourMatrix = J( 30, 20, 0 );
depth = 100;
/* build a demonstration matrix -- a really low resolution Mandelbrot */
Parallel Assign(
	{r = N Row( contourMatrix ) - 1, c = N Col( contourMatrix ) - 1, xmin = xmin, xmax = xmax,
	ymin = ymin, ymax = ymax, depth = depth},
	contourMatrix[irow, icol] = Mandelbrot(
		depth,
		2,
		(xmax - xmin) * (irow - 1) / (r) + xmin,
		(ymax - ymin) * (icol - 1) / (c) + ymin
	)
);
colors = J( depth + 1, 1, 0 ); // color choices for contours
For( i = 1, i <= depth + 1, i++,
	colors[i] = RGB Color(
		0,
		(Sqrt( Sqrt( (i - 1) / depth ) )),
		1 - (Sqrt( Sqrt( (i - 1) / depth ) ))
	)
);
/* see the Mandelbrot Function for a better way to do this */
New Window( "Example",
	Graph Box(
		X Scale( xmin, xmax ),
		Y Scale( ymin, ymax ),
		framesize( 500, 500 ),
		Contour( /* map the matrix rows onto the axes */
			(0 :: N Row( contourMatrix ) - 1) * (xmax - xmin) / (N Row( contourMatrix ) - 1)
			 + xmin,
			(0 :: N Col( contourMatrix ) - 1) * (ymax - ymin) / (N Col( contourMatrix ) - 1)
			 + ymin, 
            // the low res Mandelbrot data
			contourMatrix, 
            // the Mandelbrot function returns integers from 1 to depth, map them to colors
			0 :: depth,
			colors,
			fill
		)
	)
);

```

### Get Background Color

**Sintaxis:** obj << Get Background Color( color )

### Get Background Fill

**Sintaxis:** obj << Get Background Fill( state=0|1 )

### Get Bottom

**Sintaxis:** obj << Get Bottom

### Get Graphics Script

**Sintaxis:** obj << Get Graphics Script

### Get Height

**Sintaxis:** obj << Get Height

### Get Left

**Sintaxis:** obj << Get Left

### Get Right

**Sintaxis:** obj << Get Right

### Get Sides

**Sintaxis:** obj << Get Sides

### Get Top

**Sintaxis:** obj << Get Top

### Get Width

**Sintaxis:** obj << Get Width

### Get X Axis

**Sintaxis:** obj << Get X Axis

### Get X Name

**Sintaxis:** obj << Get X Name

### Get Y Axis

**Sintaxis:** obj << Get Y Axis

### Get Y Name

**Sintaxis:** obj << Get Y Name

### Left

**Sintaxis:** obj << Left( number )

### Right

**Sintaxis:** obj << Right( number )

### Set Background Color

**Sintaxis:** obj << Set Background Color( color )

### Set Background Fill

**Sintaxis:** obj << Set Background Fill( state=0|1 )

### Set Graphics Script

**Sintaxis:** obj << Set Graphics Script

### Set Height

**Sintaxis:** obj << Set Height

### Set Width

**Sintaxis:** obj << Set Width

### Set X Axis

**Sintaxis:** obj << Set X Axis

### Set X Name

**Sintaxis:** obj << Set X Name

### Set Y Axis

**Sintaxis:** obj << Set Y Axis

### Set Y Name

**Sintaxis:** obj << Set Y Name

### Sides

**Sintaxis:** obj << Sides( number )

### Suppress Axes

**Sintaxis:** obj << Suppress Axes

**Descripción:** Oculta los ejes del cuadro gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Framesize( 400, 400 ),
		Suppress Axes,
		<<backgroundcolor( "cyan" ),
		XAxis( Show Major Grid ),
		Title( "Sine curve" ),
		Y Function( 10 + 50 * Sin( a / 30 ), a )
	)
);

```

### Title

**Sintaxis:** Title( string )

**Descripción:** Establece el título del gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		<<backgroundcolor( "cyan" ),
		XAxis( Show Major Grid ),
		Title( "Sine curve" ),
		Y Function( 10 + 50 * Sin( a / 30 ), a )
	)
);

```

### Top

**Sintaxis:** obj << Top( number )

### X Scale

**Sintaxis:** X Scale( xMin, xMax )

**Descripción:** Establece la escala del eje X del gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		),
		Title( "Oval" )
	)
);

```

### XAxis

**Sintaxis:** X Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Descripción:** Establece las características del eje X del gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Framesize( 400, 400 ),
		<<backgroundcolor( "cyan" ),
		XName( "Time" ),
		YName( "Result" ),
		XAxis( Show Major Grid, Inc( 5 ) ),
		Title( "Cosine curve" ),
		Y Function( 50 + 10 * Cos( a / 10 ), a )
	)
);

```

### XName

**Sintaxis:** X Name( string )

**Descripción:** Establece el nombre del eje X del gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Framesize( 400, 400 ),
		<<backgroundcolor( "blue" ),
		XName( "Time" ),
		YName( "Result" ),
		XAxis( Show Major Grid ),
		Title( "Sine curve" ),
		Y Function( 10 + 50 * Sin( a / 30 ), a )
	)
);

```

### Y Scale

**Sintaxis:** Y Scale( yMin, yMax )

**Descripción:** Establece la escala del eje Y del gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Y Scale( -10, 90 ),
		X Scale( -10, 90 ),
		Oval(
			X Origin() + 10,
			(Y Origin() + Y Range()) - 10,
			(X Origin() + X Range()) - 10,
			Y Origin() + 10,
			1
		),
		Title( "Oval" )
	)
);

```

### YAxis

**Sintaxis:** Y Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Descripción:** Establece las características del eje Y del gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Framesize( 400, 400 ),
		<<backgroundcolor( "cyan" ),
		XName( "Time" ),
		YName( "Result" ),
		YAxis( Show Major Grid ),
		Title( "Cosine curve" ),
		Y Function( 50 + 10 * Cos( a / 10 ), a )
	)
);

```

### YName

**Sintaxis:** Y Name( string )

**Descripción:** Establece el nombre del eje Y del gráfico.

```js

Names Default To Here( 1 );
obj = New Window( "Example",
	Graph Box(
		Framesize( 400, 400 ),
		<<backgroundcolor( "cyan" ),
		XName( "Time" ),
		YName( "Result" ),
		XAxis( Show Major Grid ),
		Title( "Cosine curve" ),
		Y Function( 50 + 10 * Cos( a / 10 ), a )
	)
);

```

