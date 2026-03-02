# Custom Graph



## 关联的构造器

### Custom Graph

**语法:** New Window(Window title, &lt;Editable|Dialog&gt;, Graph Box( named arguments, ..., script segment

**说明:** 使用定制脚本创建图形。

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

## 项消息

### Append Seg

**语法:** obj &lt;&lt; Append Seg( display seg )

**说明:** 将显示段添加到 FrameBox

```jsl

x = [20, 40, 60, 80];
New Window( "Example",
	Graph Box( Frame Size( 300, 120 ), Append Seg( Marker Seg( x, x ), Line Seg( x, x ) ) )
);

```

### Background Map

**语法:** obj &lt;&lt; Background Map

### Bottom

**语法:** obj &lt;&lt; Bottom( number )

### FrameSize

**语法:** Frame Size( width, height )

**说明:** 设置图形大小。

#### 示例 1

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

#### 示例 2

```jsl

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

**语法:** obj &lt;&lt; Get Background Color( color )

### Get Background Fill

**语法:** obj &lt;&lt; Get Background Fill( state=0|1 )

### Get Bottom

**语法:** obj &lt;&lt; Get Bottom

### Get Graphics Script

**语法:** obj &lt;&lt; Get Graphics Script

### Get Height

**语法:** obj &lt;&lt; Get Height

### Get Left

**语法:** obj &lt;&lt; Get Left

### Get Right

**语法:** obj &lt;&lt; Get Right

### Get Sides

**语法:** obj &lt;&lt; Get Sides

### Get Top

**语法:** obj &lt;&lt; Get Top

### Get Width

**语法:** obj &lt;&lt; Get Width

### Get X Axis

**语法:** obj &lt;&lt; Get X Axis

### Get X Name

**语法:** obj &lt;&lt; Get X Name

### Get Y Axis

**语法:** obj &lt;&lt; Get Y Axis

### Get Y Name

**语法:** obj &lt;&lt; Get Y Name

### Left

**语法:** obj &lt;&lt; Left( number )

### Right

**语法:** obj &lt;&lt; Right( number )

### Set Background Color

**语法:** obj &lt;&lt; Set Background Color( color )

### Set Background Fill

**语法:** obj &lt;&lt; Set Background Fill( state=0|1 )

### Set Graphics Script

**语法:** obj &lt;&lt; Set Graphics Script

### Set Height

**语法:** obj &lt;&lt; Set Height

### Set Width

**语法:** obj &lt;&lt; Set Width

### Set X Axis

**语法:** obj &lt;&lt; Set X Axis

### Set X Name

**语法:** obj &lt;&lt; Set X Name

### Set Y Axis

**语法:** obj &lt;&lt; Set Y Axis

### Set Y Name

**语法:** obj &lt;&lt; Set Y Name

### Sides

**语法:** obj &lt;&lt; Sides( number )

### Suppress Axes

**语法:** obj &lt;&lt; Suppress Axes

**说明:** 隐藏图形框的轴。

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

**语法:** Title( string )

**说明:** 设置图形标题。

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

**语法:** obj &lt;&lt; Top( number )

### X Scale

**语法:** X Scale( xMin, xMax )

**说明:** 设置图形中 X 轴的尺度。

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

**语法:** X Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**说明:** 设置图形中 X 轴的功能。

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

**语法:** X Name( string )

**说明:** 设置图形中 X 轴的名称。

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

**语法:** Y Scale( yMin, yMax )

**说明:** 设置图形中 Y 轴的尺度。

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

**语法:** Y Axis(Scale, Min, Max, Inc, Tick Font, Show Major Ticks, Show Minor Ticks, Show Major Grid, Show Minor Grid, Format, Decimal, Show Labels, Rotated Labels, Rotated Labels Alt, Minor Ticks, Add Ref Line )

**说明:** 设置图形中 Y 轴的功能。

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

**语法:** Y Name( string )

**说明:** 设置图形中 Y 轴的名称。

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

