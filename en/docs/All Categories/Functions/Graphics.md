# Graphics



## Functions

### Add Color Theme

**Description:** Creates a new custom color theme and registers it with the theme picker.

**Example 1**

```jsl

Names Default To Here( 1 );
Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,
	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Arc

**Syntax:** Arc( left, top, right, bottom, startAngle, endAngle )

**Description:** Draws an arc of an oval.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Arc( 10, 80, 70, 30, 0, 90 );
	)
);

```

### Arrow

**Syntax:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**Description:** Draws a line with an arrow or a sequence of such lines.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Arrow( [10 30 90], [88 22 44] );
	)
);

```

### Back Color

**Syntax:** Back Color( <name|index|rgbList> )

**Description:** Sets the background color for the erase mode in the Text() function.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Back Color( "red" );
		Text( Erased, {50, 20}, "Hello" );
	)
);

```

### Blend Colors

**Syntax:** color = Blend Colors( color1, color2, <percent2>, <colorSpace>, <hueDirection> )

**Description:** Blends two colors with a configurable percentage and color space.

**Example 1**

```jsl

Names Default To Here( 1 );
Blend Colors( "black", "white", 0.25 );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "sRGB" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "lRGB" );

```

**Example 4**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.5, "LUV" );

```

**Example 5**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.75, "HLS" );

```

**Example 6**

```jsl

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

**Example 7**

```jsl

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

**Syntax:** m = Char To Path( pathText )

**Description:** Converts a path specification from character form to matrix form.

```jsl

Names Default To Here( 1 );
Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**Syntax:** Circle( {x, y}, radius|PixelRadius( px ), ..., <"FILL"> )

**Description:** Draws a circle centered at {x, y}. The radius can be specified as an integer based on the vertical axis or as a number of pixels. A pixel-based radius creates a circle that does not vary in size when the vertical axis changes. Arguments can be repeated in any order to draw multiple circles. "FILL", if used, must be last, and fills the circles with the fill color rather than drawing them with the pen color.

```jsl

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

**Syntax:** color = Color Difference( color1, color2, <difference metric>)

**Description:** Returns the difference between two colors under a specified color difference metric.

**Example 1**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "sRGB" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "redmean" );

```

**Example 4**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE76" );

```

**Example 5**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE94" );

```

**Example 6**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIEDE2000" );

```

**Example 7**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**Syntax:** {h, l, s} = Color To HLS( color )

**Description:** Returns a list of the hue, lightness, and saturation components.  The color argument can be any valid JSL color, or a matrix of color numbers.

```jsl

Names Default To Here( 1 );
Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**Syntax:** {r, g, b} = Color To RGB( color )

**Description:** Returns a list of the red, green, and blue components, between 0 and 1. The color argument can be any valid JSL color, or a matrix of color numbers.

```jsl

Names Default To Here( 1 );
Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**Syntax:** Contour( xVector, yVector, zGridMatrix, zContours, < <<zColor( color, option )>, < <<Fill|Fill Between|Fill Below|Fill Above>, < <<Transparency(vector)> )

**Description:** Draws contours given a grid of values. If there are fewer colors specified than there are contours, options of "Interpolate Colors" or "Cycle Colors" determines how the colors will be applied.

```jsl

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

**Syntax:** Contour Function( zExpr, xName, yName, z|zMatrix, < <<XGrid( min, max, incr )>, < <<YGrid( min, max, incr )>, < <<ZColor( color, option )>, < <<ZLabeled>, < <<Filled>, < <<FillBetween>, < <<Ternary>, < <<Transparency( t )> )

**Description:** Evaluates the expression on a grid of xName and yName values and draws the contour lines. The color can be specified as a number, a matrix, a list of RGB values, a list of color names, or a Color Theme.  The transparency t can be specified as a number or as a matrix.  If the Ternary option is specified, the contours are clipped to a ternary coordinate system.

**Example 1**

```jsl

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

**Example 2**

```jsl

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

**Syntax:** Drag Line( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws a polyline at the indicated points. Unlike Line though, the points can be dragged across the screen, updating the values in the (LValue) matrix arguments.

```jsl

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

**Syntax:** Drag Marker( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws movable markers at the indicated points. The matrix values are updated as the markers are moved.

```jsl

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

**Syntax:** Drag Polygon( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws a filled polygon at the indicated points. The points can be dragged across the screen, updating the values in the (LValue) matrix arguments.

```jsl

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

**Syntax:** Drag Rect( xMatrixName, yMatrixName, <dragScript>, <MouseUpScript> )

**Description:** Draws a rectangle at the indicated points. Unlike Rect though, these corners can be dragged across the screen, updating the values in the (LValue) matrix arguments.

```jsl

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

**Syntax:** Drag Text( xMatrixName, yMatrixName, text, <dragScript>, <MouseUpScript> )

**Description:** Draws the text at the indicated points. Unlike the Text() function, however, the points can be dragged across the screen, updating the values in the xMatrixName and yMatrixName matrix arguments. The text argument can be a string argument or a list of strings.

```jsl

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

**Syntax:** Fill Color( <name|index|rgbList> )

**Description:** Sets the color for drawing filled areas.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( {1, 1, .5} );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Fill Pattern

**Syntax:** Fill Pattern( name|mask|image )

**Description:** Sets the pattern for drawing filled areas. A mask is a matrix of values between 0 and 1 to be applied to the current fill color.

**Image**

```jsl

Names Default To Here( 1 );

image = New Image( "$SAMPLE_IMAGES/pi.gif" );
New Window( "Example",
	Graph Box(
		Fill Pattern( image );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**Mask**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

### Get Color Theme Detail

**Syntax:** script = Get Color Theme Detail(name)

**Description:** Returns the script for a given color theme name

```jsl

Names Default To Here( 1 );
Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**Syntax:** {list of names} = Get Color Theme Names(<kind>)

**Description:** Returns a list of color theme strings which match the optional parameter kind. kind is one of the following: "continuous", "categorical", "sequential", "diverging", "qualitative", or "chromatic".

**Example 1**

```jsl

Names Default To Here( 1 );
Get Color Theme Names();

```

**Example 2**

```jsl

Names Default To Here( 1 );
Get Color Theme Names( "sequential" );

```

### Gradient Function

**Syntax:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), < <<XGrid( min, max, incr )>, < <<YGrid( min, max, incr )>, < <<Transparency( t )> )

**Description:** Fills the graph with a gradient between two colors. The zExpr argument is a function in terms of the variables specified by xName and yName. The vector zLimits specifies the range of values for zExpr. The zColor argument is a vector or list that defines the two colors that are blended together to create the gradient. The Transparency is a single value applied to the entire grid.

```jsl

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

**Syntax:** H Line( y ); H Line( x1, x2, y )

**Description:** Draws a horizontal line at y from x1 to x2 or through the entire frame.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		H Line( 10, 50, 20 );
	)
);

```

### H Size

**Syntax:** h = H Size()

**Description:** Returns the horizontal size of the graphics frame in pixels.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( H Size() / 20 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### HLS Color

**Syntax:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**Description:** Returns a color number from the hue, lightness, and saturation components, all between 0 and 1.

```jsl

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

**Syntax:** Handle( xPos, yPos, dragScript, <mouseUpScript> )

**Description:** Draws a square marker at the coordinates specified by xPos and yPos and repeatedly evaluates the dragScript expression when the mouse is pressed over the marker. Before running the script, the globals x and y are set to the mouse value and are restored to their original values afterward. The mouseUpScript expression is run after the mouse button is released.

```jsl

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

**Syntax:** y = Heat Color( x ); y = Heat Color( x, < <<theme> )

**Description:** Returns a color corresponding to a value between 0 and 1. Default theme is "Blue to Gray to Red". Any theme supported by Cell Plot is supported here. Matrix arguments supported.

```jsl

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

**Syntax:** b = In Path( x, y, pathMatrix|pathText )

**Description:** Returns 1 if the point (x,y) is in the given path, otherwise returns 0.

```jsl

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

**Syntax:** b = In Polygon( x, y, xMatrix, <yMatrix> )

**Description:** Returns 1 if the point (x,y) is in the polygon defined by the vector arguments, otherwise returns 0.

```jsl

Names Default To Here( 1 );
In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**Syntax:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, <theme> ); y = Level Color( i, <theme> )

**Description:** Returns a category color, where i is the category level; n is the number of categories (optional); and theme are the color themes in the Column Info dialog&apos;s Value Color combo box. ("JMP Default" is the default theme.) The category index must be >= 1 and <= the number of categories specified in the call or defined by the theme. If the second argument is a character, it is the color theme and n is unspecified.

```jsl

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

**Syntax:** Line( {x1, y1}, {x2, y2}, ..., < <<Value Space( 0|1 ) >, < <<Smooth( tension, domain, min response, max response ) > ); Line( xMatrix, yMatrix, < <<Value Space(0 | 1) >, < <<Smooth( tension, domain, min response, max response ) > )

**Description:** Draws a line or connected lines. In the default case, the line is drawn linearly between the endpoints. If the Value Space option is set, the line follows the projection specified by the underlying axis scales. If the Smooth option is set, connections are smoothed, constrained by tension, domain dimension, min response, and max response.

**Constrained smoothing**

```jsl

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

```jsl

Names Default To Here( 1 );
New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

**Smoothing**

```jsl

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

```jsl

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

**Syntax:** Line Style( x )

**Description:** Sets the current line style, which can be one of: 0 (Solid), 1 (Dotted), 2 (Dashed), 3 (DashDot), or 4 (DashDotDot).

```jsl

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

**Syntax:** v = Mandelbrot( n, radius, x, y )

**Description:** calculates the value of the Mandelbrot function at x,y, stopping after n iterations or when radius exceeded

```jsl

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

**Syntax:** Marker( <rs>, {x1, y1}, {x2, y2}, ... ); Marker( <rs>, xMatrix, yMatrix )

**Description:** Draws markers at the indicated coordinates.

```jsl

Names Default To Here( 1 );
New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Size

**Syntax:** Marker Size( n )

**Description:** Sets the size markers are drawn in the graphics frame. 0 = dot, 1 = small, ....

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Marker Size( 5 );
		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );
	)
);

```

### Mousetrap

**Syntax:** Mousetrap( dragScript, <mouseUpScript> )

**Description:** Evaluates the dragScript expression repeatedly while the mouse is pressed within the graph and not handled by another graph object. Before running the script, the globals x and y are set to the mouse value and are restored to their original values afterward. The mouseUpScript expression is run after the mouse button is released.

```jsl

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

**Syntax:** New Heat Image( Matrix, <Color Theme / gradient ( ... )>

**Description:** Creates a heat map image based on a matrix and color theme or gradient.

```jsl

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

**Syntax:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, <colorsMatrix>, <fill=0> )

**Description:** Draws normal probability contour(s) for k populations and two variables. The prob argument can be either a scalar probability or a matrix of probabilities. The meanMatrix and stdsMatrix arguments are k by 2 matrices, and the corrMatrix argument is a k by 1 vector. The colorsMatrix argument specifies the color(s) for the k contour(s); colors must be specified as JSL colors (either JSL color integer values or return values of JSL color functions such as the RGB Color() or HLS Color() functions). The fill argument specifies the amount of transparency for the contour fill color.

```jsl

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

**Syntax:** Oval( left, top, right, bottom, <fill=0> )

**Description:** Draws an oval within the specified rectangle, filled if fill is nonzero.

```jsl

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

**Syntax:** Path( pathMatrix|pathText, <fill=0> )

**Description:** Draws a stroke along the given path if fill is 0, or paints the interior of the given path if fill is not 0. The path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax.

```jsl

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

**Syntax:** s = Path To Char( pathMatrix )

**Description:** Converts a path specification from matrix form to character form.

```jsl

Names Default To Here( 1 );
Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**Syntax:** Pen Color( <name|index|rgbList> )

**Description:** Sets the color for drawing lines.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( {.3, .5, .7} );
		Circle( {20, 20}, 10 );
	)
);

```

### Pen Size

**Syntax:** Pen Size( <x> )

**Description:** Sets the pen size in pixels for drawing lines.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 4 );
		Line( [10 30 90], [88 22 44] );
	)
);

```

### Pick Color

**Syntax:** color = Pick Color( <window title>, <name|index|rgbList> )

**Description:** Returns a color that was selected with the standard color picker.

```jsl

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

**Syntax:** theme = Pick Color Theme( <window title>, <Color Theme(name|specification)>, <Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")>)

**Description:** Returns a color theme that was selected with the standard color theme picker. The initial theme can be specified explicitly or by specifying a Type to use the themes from preferences.

**Graph Builder**

```jsl

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

**Row Legend**

```jsl

Names Default To Here( 1 );

pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**Syntax:** Pie( left, top, right, bottom, startAngle, endAngle )

**Description:** Draws a pie slice.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Pie( 10, 80, 70, 40, 0, 90 );
	)
);

```

### Pixel Line To

**Syntax:** Pixel Line To( h, v )

**Description:** Draws a line from the current pixel-based pen coordinate to the horizontal and vertical coordinates given.

```jsl

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

**Syntax:** Pixel Move To( h, v )

**Description:** Moves the pixel-addressed pen to the horizontal and vertical coordinate relative to the origin.

```jsl

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

**Syntax:** Pixel Origin( x, y )

**Description:** Sets the origin that pixel drawing commands are based on.

```jsl

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

**Syntax:** PixelPath( h, v, pathMatrix|pathText, <fill=0>, <scale=1.0>, <orient={0.0,1.0}> )

**Description:** Draws a stroke along the given pixel-based path if fill is 0, or paints the interior of the given path if fill is not 0. The path can be specified with an N x 3 matrix or with a text representation. A path matrix has three columns for x, y, and flags for each point in the path. The flag values are 0 for control, 1 for move, 2 for line segment, 3 for cubic Bézier segment, and are negative if the point also closes the path. Path text supports SVG syntax. The path will be scaled and translated about its origin according to the optional parameters, with the orientation specified in the axis space.

```jsl

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

**Syntax:** Pixel Text( <properties>, {h, v}, text, ... )

**Description:** Moves to the {h, v} pixel position and draws text specified by the text argument. Named property arguments include Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise. The position arguments, named arguments, and strings can be mixed in any order.

```jsl

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

**Syntax:** Polygon( {x1, y1}, {x2, y2}, ..., <<fill(bool) ); Polygon( xMatrix, <yMatrix>, <<fill(bool) )

**Description:** Draws the polygon specified by the points.

```jsl

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

**Syntax:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );

area = Polygon Area( xMatrix, yMatrix )

**Description:** Calculates the area of the specified polygon.

**Example 1**

```jsl

Names Default To Here( 1 );
area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**Syntax:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );

centroid = Polygon Centroid( xMatrix, yMatrix )

**Description:** Calculates the centroid of the specified polygon.

**Example 1**

```jsl

Names Default To Here( 1 );
{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**Example 2**

```jsl

Names Default To Here( 1 );
centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**Syntax:** rows = Polygon Simplify( xMatrix|xyMatrix, <yMatrix>, <<<detail factor(f=200)>, <<<multiple(ids)>, <<<geodesic(bool)> )

**Description:** Removes points from a polygon that carry a low amount of detail and returns indices of the remaining points. detail factor is inversely proportional to the detail error tolerance. multiple(ids) indicates that many polygons should be simplified together so that common edges are treated consistently. ids is a matrix with one row per point. geodesic(1) indicates coordinates are latitude and longitude for distance measurement.

**Example 1**

```jsl

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

**Multiple polygons**

```jsl

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

**Syntax:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**Description:** Returns a color number from the red, green, and blue components, all between 0 and 1. RGB Color(1, 1, 1) is white.

```jsl

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

**Syntax:** Rect( left, top, right, bottom, <fill=0> ); Rect( {left, top}, {right, bottom} )

**Description:** Draws a rectangle, filled if fill is nonzero.

```jsl

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

**Syntax:** Remove Color Theme("Name"|{"Name", <flags>, {color, ...}, <{position, ...}>})

**Description:** Removes a custom color theme from the global list, either by name or by the full color theme object.

```jsl

Names Default To Here( 1 );
Remove Color Theme( "Yellow To Blue" );

```

### Text

**Syntax:** Text( <properties>, {x, y}, text, ... )

Text( {left, top, right, bottom}, text )

**Description:** Moves to the {x, y} position and draws text specified by the text argument. Named property arguments include Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise. The position arguments, named arguments, and strings can be mixed in any order. You can also use four x, y coordinates to describe a box within which to draw the text. In that case, properties are not used.

**Example 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**Example 2**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "blue" );
		Text( {20, 80, 40, 70}, "some text" );
	)
);

```

### Text Color

**Syntax:** Text Color( <name|index|rgbList> )

**Description:** Sets the color for drawing text.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( {50, 20}, "label" );
	)
);

```

### Text Font

**Syntax:** {nm, sz, st, an} = Text Font(fontName, <size>, <"bold italic underline strikeout">, <angle>

**Description:** Sets the font for subsequent Text() drawing. Use without any arguments to get the current font settings. Angle is in degrees clockwise.

```jsl

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

**Syntax:** Text Size( n )

**Description:** Sets the font size that for text drawing.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( 20 );
		Text( {50, 20}, "label" );
	)
);

```

### To Color Space

**Syntax:** color = To Color Space( color, colorSpace )

**Description:** Translates a color into another color space. Out of gamut colors are mapped to fit when converting to smaller color spaces.

**Example 1**

```jsl

Names Default To Here( 1 );
To Color Space( "red", "LMS" );

```

**Example 2**

```jsl

Names Default To Here( 1 );
To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**Example 3**

```jsl

Names Default To Here( 1 );
To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**Syntax:** Transparency( <alpha> )

**Description:** Sets the transparency used in the drawing commands. Alpha ranges between 0 (clear) and 1 (opaque, the default). Some operating systems do not support this.

```jsl

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

**Syntax:** V Line( x ); V Line( x, y1, y2 )

**Description:** Draws a vertical line at x from y1 to y2 or through the entire frame.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Size( 2 );
		V Line( 20, 10, 50 );
	)
);

```

### V Size

**Syntax:** v = V Size()

**Description:** Returns the vertical size of the graphics frame in pixels.

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Size( V Size() / 4 );
		Text( {50, 20}, "label" );
	)
);

```

### X Function

**Syntax:** X Function( xExpr, yName, <properties> )

**Description:** Draws function xExpr in the X dimension as variable yName varies across the range of the Y axis of the graph. Additional named property arguments include Min(minimum X), Max(maximum Y), Fill(fill pattern, value to fill to), Inc(upper bound of increment).

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		X Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### X Origin

**Syntax:** x = X Origin()

**Description:** Returns the x value for the left edge of the graphics frame.

```jsl

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

**Syntax:** x = X Range()

**Description:** Returns the x distance from left to right. X Origin() + X Range() is the right edge.

```jsl

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

**Syntax:** X Scale( <xMin>, <xMax> )

**Description:** Sets a new scale for the graphics frame.

```jsl

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

**Syntax:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**Description:** This graphic script function combines an expression x(t) and an expression y(t) to draw an x-y curve for the specified range of parameter t. Inc() is the maximum increment on t, or steps() is the minimum number of steps on t. Use steps() or inc() if the default value does not show details.

```jsl

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

**Syntax:** Y Function( yExpr, xName, <properties> )

**Description:** Draws function yExpr in the Y dimension as variable xName varies across the range of the X axis of the graph. Additional named property arguments include Min(minimum X), Max(maximum X), Fill(fill pattern, value to fill to), Inc(upper bound of increment).

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Pen Color( "red" );
		Y Function( 20 + 40 * Sin( a / 30 ), a );
	)
);

```

### Y Origin

**Syntax:** y = Y Origin()

**Description:** Returns the y value for the bottom edge of the graphics frame.

```jsl

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

**Syntax:** y = Y Range()

**Description:** Returns the y distance from bottom to top. Y Origin() + Y Range() is the top edge.

```jsl

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

**Syntax:** Y Scale( <yMin>, <yMax> )

**Description:** Sets a new scale for the graphics frame.

```jsl

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

