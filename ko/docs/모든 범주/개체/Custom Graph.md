# Custom Graph



## 연결된 생성자

### Custom Graph

**구문:** New Window(Window title, &lt;Editable|Dialog&gt;, Graph Box( named arguments, ..., script segment

**설명:** 사용자 스크립트를 사용하여 그래프를 생성합니다.

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

## 항목 메시지

### Append Seg

**구문:** obj &lt;&lt; Append Seg( display seg )

**설명:** 프레임 상자에 표시 세그먼트를 추가합니다.

```jsl

Names Default To Here( 1 );
x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) )
);

```

### Background Map

**구문:** obj &lt;&lt; Background Map

### Bottom

**구문:** obj &lt;&lt; Bottom( number )

### FrameSize

**구문:** Frame Size( width, height )

**설명:** 그래프 크기를 설정합니다.

**예제 1**

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

**예제 2**

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
	{r = N Row( contourMatrix ) - 1, c = N Col( contourMatrix ) - 1, xmin = xmin, xmax = xmax, ymin = ymin,
	ymax = ymax, depth = depth},
	contourMatrix[irow, icol] = Mandelbrot(
		depth,
		2,
		(xmax - xmin) * (irow - 1) / (r) + xmin,
		(ymax - ymin) * (icol - 1) / (c) + ymin
	)
);
colors = J( depth + 1, 1, 0 ); // color choices for contours
For( i = 1, i <= depth + 1, i++,
	colors[i] = RGB Color( 0, (Sqrt( Sqrt( (i - 1) / depth ) )), 1 - (Sqrt( Sqrt( (i - 1) / depth ) )) )
);
/* see the Mandelbrot Function for a better way to do this */
New Window( "Example",
	Graph Box(
		X Scale( xmin, xmax ),
		Y Scale( ymin, ymax ),
		framesize( 500, 500 ),
		Contour( /* map the matrix rows onto the axes */
			(0 :: N Row( contourMatrix ) - 1) * (xmax - xmin) / (N Row( contourMatrix ) - 1) + xmin,
			(0 :: N Col( contourMatrix ) - 1) * (ymax - ymin) / (N Col( contourMatrix ) - 1) + ymin, 
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

**구문:** obj &lt;&lt; Get Background Color( color )

### Get Background Fill

**구문:** obj &lt;&lt; Get Background Fill( state=0|1 )

### Get Bottom

**구문:** obj &lt;&lt; Get Bottom

### Get Graphics Script

**구문:** obj &lt;&lt; Get Graphics Script

### Get Height

**구문:** obj &lt;&lt; Get Height

### Get Left

**구문:** obj &lt;&lt; Get Left

### Get Right

**구문:** obj &lt;&lt; Get Right

### Get Sides

**구문:** obj &lt;&lt; Get Sides

### Get Top

**구문:** obj &lt;&lt; Get Top

### Get Width

**구문:** obj &lt;&lt; Get Width

### Get X Axis

**구문:** obj &lt;&lt; Get X Axis

### Get X Name

**구문:** obj &lt;&lt; Get X Name

### Get Y Axis

**구문:** obj &lt;&lt; Get Y Axis

### Get Y Name

**구문:** obj &lt;&lt; Get Y Name

### Left

**구문:** obj &lt;&lt; Left( number )

### Right

**구문:** obj &lt;&lt; Right( number )

### Set Background Color

**구문:** obj &lt;&lt; Set Background Color( color )

### Set Background Fill

**구문:** obj &lt;&lt; Set Background Fill( state=0|1 )

### Set Graphics Script

**구문:** obj &lt;&lt; Set Graphics Script

### Set Height

**구문:** obj &lt;&lt; Set Height

### Set Width

**구문:** obj &lt;&lt; Set Width

### Set X Axis

**구문:** obj &lt;&lt; Set X Axis

### Set X Name

**구문:** obj &lt;&lt; Set X Name

### Set Y Axis

**구문:** obj &lt;&lt; Set Y Axis

### Set Y Name

**구문:** obj &lt;&lt; Set Y Name

### Sides

**구문:** obj &lt;&lt; Sides( number )

### Suppress Axes

**구문:** obj &lt;&lt; Suppress Axes

**설명:** 그래프 상자의 축을 숨깁니다.

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

**구문:** Title( string )

**설명:** 그래프 제목을 설정합니다.

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

**구문:** obj &lt;&lt; Top( number )

### X Scale

**구문:** X Scale( xMin, xMax )

**설명:** 그래프에서 X 축에 대한 척도를 설정합니다.

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

**구문:** X Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**설명:** 그래프에서 X 축의 기능을 설정합니다.

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

**구문:** X Name( string )

**설명:** 그래프에서 X 축의 이름을 설정합니다.

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

**구문:** Y Scale( yMin, yMax )

**설명:** 그래프에서 Y 축에 대한 척도를 설정합니다.

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

**구문:** Y Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**설명:** 그래프에서 Y 축의 기능을 설정합니다.

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

**구문:** Y Name( string )

**설명:** 그래프에서 Y 축의 이름을 설정합니다.

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

