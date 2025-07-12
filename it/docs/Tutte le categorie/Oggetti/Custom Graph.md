# Custom Graph



## Costruttori associati

### Custom Graph

**Sintassi:** New Window(Window title, <Editable|Dialog>, Graph Box( named arguments, ..., script segment

**Descrizione:** Crea un grafico che utilizza uno script personalizzato.

```jsl

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

## Messaggi degli elementi

### Append Seg

**Sintassi:** obj << Append Seg( display seg )

**Descrizione:** Aggiunge un segmento di visualizzazione alla casella del frame.

```jsl

Names Default To Here( 1 );
x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) )
);

```

### Background Map

**Sintassi:** obj << Background Map

### Bottom

**Sintassi:** obj << Bottom( number )

### FrameSize

**Sintassi:** Frame Size( width, height )

**Descrizione:** Imposta le dimensioni del grafico.

**Esempio 1**

```jsl

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

**Esempio 2**

```jsl

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

**Sintassi:** obj << Get Background Color( color )

### Get Background Fill

**Sintassi:** obj << Get Background Fill( state=0|1 )

### Get Bottom

**Sintassi:** obj << Get Bottom

### Get Graphics Script

**Sintassi:** obj << Get Graphics Script

### Get Height

**Sintassi:** obj << Get Height

### Get Left

**Sintassi:** obj << Get Left

### Get Right

**Sintassi:** obj << Get Right

### Get Sides

**Sintassi:** obj << Get Sides

### Get Top

**Sintassi:** obj << Get Top

### Get Width

**Sintassi:** obj << Get Width

### Get X Axis

**Sintassi:** obj << Get X Axis

### Get X Name

**Sintassi:** obj << Get X Name

### Get Y Axis

**Sintassi:** obj << Get Y Axis

### Get Y Name

**Sintassi:** obj << Get Y Name

### Left

**Sintassi:** obj << Left( number )

### Right

**Sintassi:** obj << Right( number )

### Set Background Color

**Sintassi:** obj << Set Background Color( color )

### Set Background Fill

**Sintassi:** obj << Set Background Fill( state=0|1 )

### Set Graphics Script

**Sintassi:** obj << Set Graphics Script

### Set Height

**Sintassi:** obj << Set Height

### Set Width

**Sintassi:** obj << Set Width

### Set X Axis

**Sintassi:** obj << Set X Axis

### Set X Name

**Sintassi:** obj << Set X Name

### Set Y Axis

**Sintassi:** obj << Set Y Axis

### Set Y Name

**Sintassi:** obj << Set Y Name

### Sides

**Sintassi:** obj << Sides( number )

### Suppress Axes

**Sintassi:** obj << Suppress Axes

**Descrizione:** Nasconde gli assi del riquadro del grafico.

```jsl

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

**Sintassi:** Title( string )

**Descrizione:** Imposta il titolo del grafico.

```jsl

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

**Sintassi:** obj << Top( number )

### X Scale

**Sintassi:** X Scale( xMin, xMax )

**Descrizione:** Imposta la scala per l&apos;asse X nel grafico.

```jsl

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

**Sintassi:** X Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Descrizione:** Imposta le funzioni per l&apos;asse X nel grafico.

```jsl

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

**Sintassi:** X Name( string )

**Descrizione:** Imposta il nome per l&apos;asse X nel grafico.

```jsl

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

**Sintassi:** Y Scale( yMin, yMax )

**Descrizione:** Imposta la scala per l&apos;asse Y nel grafico.

```jsl

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

**Sintassi:** Y Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Descrizione:** Imposta le funzioni per l&apos;asse Y nel grafico.

```jsl

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

**Sintassi:** Y Name( string )

**Descrizione:** Imposta il nome per l&apos;asse Y nel grafico.

```jsl

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

