# Custom Graph



## Constructeurs associés

### Custom Graph

**Syntaxe :** New Window(Window title, &lt;Editable|Dialog&gt;, Graph Box( named arguments, ..., script segment

**Description :** Crée un graphique à l’aide d’un script personnalisé.

```jsl

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

## Messages d'éléments

### Append Seg

**Syntaxe :** obj &lt;&lt; Append Seg( display seg )

**Description :** Ajoute un seg affiché au cadre

```jsl

x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box(
		Frame Size( 300, 120 ),
		Append Seg( Marker Seg( x, x ), Line Seg( x, x ) )
	)
);

```

### Background Map

**Syntaxe :** obj &lt;&lt; Background Map

### Bottom

**Syntaxe :** obj &lt;&lt; Bottom( number )

### FrameSize

**Syntaxe :** Frame Size( width, height )

**Description :** Définit la taille du graphique.

#### Exemple 1

```jsl

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

#### Exemple 2

```jsl

xmin = -2;
xmax = 1;
ymin = -1.5;
ymax = 1.5;
contourMatrix = J( 30, 20, 0 );
depth = 100;
/* build a demonstration matrix -- a really low resolution Mandelbrot */
Parallel Assign(
	{r = N Row( contourMatrix ) - 1, c = N Col( contourMatrix ) - 1, xmin = xmin,
	xmax = xmax, ymin = ymin, ymax = ymax, depth = depth},
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
			(0 :: N Row( contourMatrix ) - 1) * (xmax - xmin) / (
			N Row( contourMatrix ) - 1) + xmin,
			(0 :: N Col( contourMatrix ) - 1) * (ymax - ymin) / (
			N Col( contourMatrix ) - 1) + ymin, 
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

**Syntaxe :** obj &lt;&lt; Get Background Color( color )

### Get Background Fill

**Syntaxe :** obj &lt;&lt; Get Background Fill( state=0|1 )

### Get Bottom

**Syntaxe :** obj &lt;&lt; Get Bottom

### Get Graphics Script

**Syntaxe :** obj &lt;&lt; Get Graphics Script

### Get Height

**Syntaxe :** obj &lt;&lt; Get Height

### Get Left

**Syntaxe :** obj &lt;&lt; Get Left

### Get Right

**Syntaxe :** obj &lt;&lt; Get Right

### Get Sides

**Syntaxe :** obj &lt;&lt; Get Sides

### Get Top

**Syntaxe :** obj &lt;&lt; Get Top

### Get Width

**Syntaxe :** obj &lt;&lt; Get Width

### Get X Axis

**Syntaxe :** obj &lt;&lt; Get X Axis

### Get X Name

**Syntaxe :** obj &lt;&lt; Get X Name

### Get Y Axis

**Syntaxe :** obj &lt;&lt; Get Y Axis

### Get Y Name

**Syntaxe :** obj &lt;&lt; Get Y Name

### Left

**Syntaxe :** obj &lt;&lt; Left( number )

### Right

**Syntaxe :** obj &lt;&lt; Right( number )

### Set Background Color

**Syntaxe :** obj &lt;&lt; Set Background Color( color )

### Set Background Fill

**Syntaxe :** obj &lt;&lt; Set Background Fill( state=0|1 )

### Set Graphics Script

**Syntaxe :** obj &lt;&lt; Set Graphics Script

### Set Height

**Syntaxe :** obj &lt;&lt; Set Height

### Set Width

**Syntaxe :** obj &lt;&lt; Set Width

### Set X Axis

**Syntaxe :** obj &lt;&lt; Set X Axis

### Set X Name

**Syntaxe :** obj &lt;&lt; Set X Name

### Set Y Axis

**Syntaxe :** obj &lt;&lt; Set Y Axis

### Set Y Name

**Syntaxe :** obj &lt;&lt; Set Y Name

### Sides

**Syntaxe :** obj &lt;&lt; Sides( number )

### Suppress Axes

**Syntaxe :** obj &lt;&lt; Suppress Axes

**Description :** Masque les axes de la zone du graphique.

```jsl

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

**Syntaxe :** Title( string )

**Description :** Définit le titre du graphique.

```jsl

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

**Syntaxe :** obj &lt;&lt; Top( number )

### X Scale

**Syntaxe :** X Scale( xMin, xMax )

**Description :** Définit l’échelle de l’axe X sur le graphique.

```jsl

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

**Syntaxe :** X Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Description :** Définit les caractéristiques de l’axe X sur le graphique.

```jsl

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

**Syntaxe :** X Name( string )

**Description :** Définit le nom de l’axe X sur le graphique.

```jsl

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

**Syntaxe :** Y Scale( yMin, yMax )

**Description :** Définit l’échelle de l’axe Y sur le graphique.

```jsl

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

**Syntaxe :** Y Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**Description :** Définit les caractéristiques de l’axe Y sur le graphique.

```jsl

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

**Syntaxe :** Y Name( string )

**Description :** Définit le nom de l’axe Y sur le graphique.

```jsl

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

