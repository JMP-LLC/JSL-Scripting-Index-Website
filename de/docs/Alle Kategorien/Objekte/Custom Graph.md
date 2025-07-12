# Custom Graph



## Elementmeldungen

### Append Seg

**Syntax:** obj << Append Seg( display seg )

**Beschreibung:** Fügt ein Anzeigesegment in das Rahmenfeld ein.

```jsl

Names Default To Here( 1 );
x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) )
);

```

### Background Map

**Syntax:** obj << Background Map

### Bottom

**Syntax:** obj << Bottom( number )

### FrameSize

**Syntax:** Frame Size( width, height )

**Beschreibung:** Legt die Größe des Graphen fest.

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** obj << Get Background Color( color )

### Get Background Fill

**Syntax:** obj << Get Background Fill( state=0|1 )

### Get Bottom

**Syntax:** obj << Get Bottom

### Get Graphics Script

**Syntax:** obj << Get Graphics Script

### Get Height

**Syntax:** obj << Get Height

### Get Left

**Syntax:** obj << Get Left

### Get Right

**Syntax:** obj << Get Right

### Get Sides

**Syntax:** obj << Get Sides

### Get Top

**Syntax:** obj << Get Top

### Get Width

**Syntax:** obj << Get Width

### Get X Axis

**Syntax:** obj << Get X Axis

### Get X Name

**Syntax:** obj << Get X Name

### Get Y Axis

**Syntax:** obj << Get Y Axis

### Get Y Name

**Syntax:** obj << Get Y Name

### Left

**Syntax:** obj << Left( number )

### Right

**Syntax:** obj << Right( number )

### Set Background Color

**Syntax:** obj << Set Background Color( color )

### Set Background Fill

**Syntax:** obj << Set Background Fill( state=0|1 )

### Set Graphics Script

**Syntax:** obj << Set Graphics Script

### Set Height

**Syntax:** obj << Set Height

### Set Width

**Syntax:** obj << Set Width

### Set X Axis

**Syntax:** obj << Set X Axis

### Set X Name

**Syntax:** obj << Set X Name

### Set Y Axis

**Syntax:** obj << Set Y Axis

### Set Y Name

**Syntax:** obj << Set Y Name

### Sides

**Syntax:** obj << Sides( number )

### Suppress Axes

**Syntax:** obj << Suppress Axes

**Beschreibung:** Blendet die Achsen des Graphenfelds aus.

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

**Syntax:** Title( string )

**Beschreibung:** Legt den Titel für den Graphen fest.

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

**Syntax:** obj << Top( number )

### X Scale

**Syntax:** X Scale( xMin, xMax )

**Beschreibung:** Legt die Skala für die X-Achse im Graphen fest.

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

**Syntax:** X Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Beschreibung:** Legt die Eigenschaften der X-Achse im Graphen fest.

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

**Syntax:** X Name( string )

**Beschreibung:** Legt den Namen für die X-Achse im Graphen fest.

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

**Syntax:** Y Scale( yMin, yMax )

**Beschreibung:** Legt die Skala für die Y-Achse im Graphen fest.

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

**Syntax:** Y Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Beschreibung:** Legt die Eigenschaften der Y-Achse im Graphen fest.

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

**Syntax:** Y Name( string )

**Beschreibung:** Legt den Namen für die Y-Achse im Graphen fest.

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

## Zugehörige Konstruktoren

### Custom Graph

**Syntax:** New Window(Window title, <Editable|Dialog>, Graph Box( named arguments, ..., script segment

**Beschreibung:** Erstellt einen Graphen anhand eines benutzerdefinierten Skripts.

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

