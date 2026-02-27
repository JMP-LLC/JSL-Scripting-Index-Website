# Graphics



### Add Color Theme

**说明:** 创建一个新的自定义颜色主题，并将其注册到主题选择器。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**示例 2**

```jsl

Add Color Theme(	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0,	0}, {255, 255, 255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}});

```

### Arc

**语法:** Arc( left, top, right, bottom, startAngle, endAngle )

**说明:** 绘制椭圆弧。角度以度为单位指定，0 度位于 12:00 点钟方向，90 度位于 3:00 点钟方向。为了将其与 sin() 和 cos() 函数使用的弧度值对齐，必须反转旋转方向并加上 90 度的相位偏移。例如：弧度 = 2 \* pi() \* (90 - 度数) / 360。弧线从起点到终点按顺时针方向绘制。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Color( "red" );		Arc( 10, 80, 70, 30, 0, 90 );	));

```

### Arrow

**语法:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**说明:** 绘制一条或一系列带箭头的线。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Size( 4 );		Arrow( [10 30 90], [88 22 44] );	));

```

### Back Color

**语法:** Back Color( &lt;name|index|rgbList&gt; )

**说明:** 为 Text() 函数中的清除模式设置背景颜色。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Back Color( "red" );		Text( Erased, {50, 20}, "Hello" );	));

```

### Blend Colors

**语法:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**说明:** 使用可配置的百分比和颜色空间混合两种颜色。

**JMP添加的版本:** 18

**示例 1**

```jsl

Blend Colors( "black", "white", 0.25 );

```

**示例 2**

```jsl

Blend Colors( "red", "blue", "sRGB" );

```

**示例 3**

```jsl

Blend Colors( "red", "blue", "lRGB" );

```

**示例 4**

```jsl

Blend Colors( "red", "blue", 0.5, "LUV" );

```

**示例 5**

```jsl

Blend Colors( "red", "blue", 0.75, "HLS" );

```

**示例 6**

```jsl

c1 = "red";c2 = "blue";steps = 20;New Window( "HLS Radial Color Blending",	Graph(		frameSize( 290, 110 ),		X Scale( 0, 150 ),		Y Scale( 0, 55 ),		Suppress Axes,		Text( {2, 47}, "Short" ),		Text( {2, 32}, "Long" ),		Text( {2, 17}, "Positive" ),		Text( {2, 2}, "Negative" ),		For( i = 0, i < steps, i += 1,			x = i * 6 + 30;			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Short" ) );			Rect( x, 45, x + 5, 55, 1 );			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Long" ) );			Rect( x, 30, x + 5, 40, 1 );			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Positive" ) );			Rect( x, 15, x + 5, 25, 1 );			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HLS", "Negative" ) );			Rect( x, 0, x + 5, 10, 1 );		)	));

```

**示例 7**

```jsl

c1 = "blue";c2 = "red";steps = 20;New Window( "HCLuv Radial Color Blending",	Graph(		frameSize( 290, 110 ),		X Scale( 0, 150 ),		Y Scale( 0, 55 ),		Suppress Axes,		Text( {2, 47}, "Short" ),		Text( {2, 32}, "Long" ),		Text( {2, 17}, "Positive" ),		Text( {2, 2}, "Negative" ),		For( i = 0, i < steps, i += 1,			x = i * 6 + 30;			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Short" ) );			Rect( x, 45, x + 5, 55, 1 );			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Long" ) );			Rect( x, 30, x + 5, 40, 1 );			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Positive" ) );			Rect( x, 15, x + 5, 25, 1 );			Fill Color( Blend Colors( c1, c2, i / (steps - 1), "HCLuv", "Negative" ) );			Rect( x, 0, x + 5, 10, 1 );		)	));

```

### Char To Path

**语法:** m = Char To Path( pathText )

**说明:** 将路径规格从字符形式转换为矩阵形式。

**JMP添加的版本:** 早于版本 14

```jsl

Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**语法:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**说明:** 以 {x, y} 为圆心绘制一个圆，半径可以指定为基于垂直轴的一个整数，或者像素数。基于像素的半径会形成一个大小不随垂直轴改变而发生变化的圆。可以按任意顺序重复参数以绘制多个圆。若使用 "FILL"，则必须在最后使用，它使用填充颜色填充圆，而不是使用画笔颜色绘制圆。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Color( "red" );		Circle( {20, 20}, 4, 7, 10/* no fill for concentric circles */ );		Fill Color( "blue" );		Transparency( .25 );/* transparent fill for concentric circles */		Circle( {60, 20}, 4, 7, 10, "FILL" );		Fill Color( "green" );		Transparency( 1 );/* solid fill */Circle(			PixelRadius( 18 ),			{40, 20},			{40, 50},			{40, 80},			"FILL"		);	));

```

### Color Difference

**语法:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**说明:** 返回指定色差值量度下两种颜色的差别。

**JMP添加的版本:** 18

**示例 1**

```jsl

Color Difference( "red", "blue" );

```

**示例 2**

```jsl

Color Difference( "red", "blue", "sRGB" );

```

**示例 3**

```jsl

Color Difference( "red", "blue", "redmean" );

```

**示例 4**

```jsl

Color Difference( "red", "blue", "CIE76" );

```

**示例 5**

```jsl

Color Difference( "red", "blue", "CIE94" );

```

**示例 6**

```jsl

Color Difference( "red", "blue", "CIEDE2000" );

```

**示例 7**

```jsl

Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**语法:** {h, l, s} = Color To HLS( color )

**说明:** 返回一个由色调、亮度和饱和度分量所组成的列表。color 参数可以是任何有效的 JSL 颜色，或由色号组成的矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**语法:** {r, g, b} = Color To RGB( color )

**说明:** 返回一个由红色、绿色和蓝色分量（介于 0 和 1 之间）组成的列表。颜色参数可以是任何有效的 JSL 颜色，或由色号组成的矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**语法:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**说明:** 在给定值网格的情况下绘制等高线。若指定的颜色少于等高线的数量，则“插值颜色”或“循环颜色”选项确定如何应用颜色。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	H List Box(		Outline Box( "Line",			Graph Box(				Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) )			)		),		Outline Box( "Line Colors",			Graph Box(				Contour(					1 :: 100,					1 :: 100,					(1 :: 100)` * (1 :: 100),					7 ^ (0 :: 4),					<<zColor( {"Blue", "Red"} )				)			)		)	),	H List Box(		Outline Box( "Fill Cycle",			Graph Box(				Contour(					1 :: 100,					1 :: 100,					(1 :: 100)` * (1 :: 100),					7 ^ (0 :: 4),					<<zColor(						{RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )},						"Cycle Colors"					),					fill				)			)		),		Outline Box( "Fill Interpolate",			Graph Box(				Contour(					1 :: 100,					1 :: 100,					(1 :: 100)` * (1 :: 100),					7 ^ (0 :: 4),					<<zColor( {"Blue", "Red"}, "Interpolate Colors" ),					fill				)			)		)	));

```

### Contour Function

**语法:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**说明:** 计算由 xName 和 yName 值确定的网格中的表达式，并绘制等高线。color 可以指定为数字、矩阵、RGB 值列表、颜色名称列表或颜色主题。透明度 t 可以指定为数字或矩阵。若指定了 Ternary 选项，则会剪切等高线以适应三元坐标系统。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

New Window( "Example",	Graph Box(		Contour Function(			Log( a * a + b * b ),			a,			b,			1 :: 10,			<<ZColor( {"blue", "green", "red"}, "Cycle Colors" ),			Transparency( 0.9 )		)	));

```

**示例 2**

```jsl

New Window( "Example",	Graph Box(		Contour Function(			Log( a * a + b * b ),			a,			b,			1 :: 10,			<<Filled,			<<ZColor( {{1, 0.1, 0.1}, {0.1, 1, 0.1}, {0.1, 0.1, 1}}, "Interpolate Colors" )		)	));

```

### Drag Line

**语法:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**说明:** 连接指定点绘制折线。但是与 Line 不同，这些点可以在屏幕中拖动，更新 (LValue) 矩阵参数中的值。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	exx = [11 33 77];	exy = [88 22 44];,	Graph Box(		Drag Line( exx, exy );		Line( exx, exy );	));

```

### Drag Marker

**语法:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**说明:** 连接指定点绘制可移动标记。标记移动时，矩阵值随之更新。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	exx = [11 33 77];	exy = [88 22 44];,	Graph Box(		Drag Marker( exx, exy );		Line( exx, exy );	));

```

### Drag Polygon

**语法:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**说明:** 连接指定的点绘制填充的多边形。这些点可以在屏幕中拖动，并且更新 (LValue) 矩阵参数中的值。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	exx = [11 33 77];	exy = [88 22 44];,	Graph Box(		Drag Polygon( exx, exy );		Line( exx, exy );	));

```

### Drag Rect

**语法:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**说明:** 连接指定的点绘制矩形。但是与 Rect 不同，这些角可以在屏幕中拖动，更新 (LValue) 矩阵参数中的值。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	exx = [11 33];	exy = [88 22];,	Graph Box(		Drag Rect( exx, exy );		Line( exx, exy );	));

```

### Drag Text

**语法:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**说明:** 连接指定点绘制文本。但是与 Text() 函数不同，这些点可以在屏幕中拖动，并更新 xMatrixName 和 yMatrixName 矩阵参数中的值。text 参数可以是字符串参数或字符串列表。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	exx = [11 33 77];	exy = [88 22 44];,	Graph Box(		Drag Text( exx, exy, "hello" );		Line( exx, exy );	));

```

### Fill Color

**语法:** Fill Color( &lt;name|index|rgbList&gt; )

**说明:** 设置用于绘制填充区域的颜色。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( {1, 1, .5} );		Polygon( [10 30 90], [88 22 44] );	));

```

### Fill Pattern

**语法:** Fill Pattern( name|mask|image )

**说明:** 设置绘制填充区域的图案。mask 是值介于 0 和 1 之间的矩阵，其应用于当前的填充颜色。

**JMP添加的版本:** 早于版本 14

#### 图像

```jsl

image = New Image( "$SAMPLE_IMAGES/pi.gif" );New Window( "Example",	Graph Box(		Fill Pattern( image );		Polygon( [10 30 90], [88 22 44] );	));

```

#### 掩码

```jsl

New Window( "Example",	Graph Box(		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );		Polygon( [10 30 90], [88 22 44] );	));

```

### Get Color Theme Detail

**语法:** script = Get Color Theme Detail(name)

**说明:** 返回给定的颜色主题名称的脚本

**JMP添加的版本:** 早于版本 14

```jsl

Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**语法:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**说明:** 返回与可选参数 kind 匹配的颜色主题字符串的列表。kind 是以下项之一:“continuous”、“categorical”、“sequential”、“diverging”、“qualitative”或“chromatic”。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Get Color Theme Names();

```

**示例 2**

```jsl

Get Color Theme Names( "sequential" );

```

### Gradient Function

**语法:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**说明:** 用两种颜色之间的渐变色来填充图形。zExpr 参数是 xName 和 yName 指定的变量组成的函数。向量 zLimits 指定 zExpr 值的范围。zColor 参数是一个向量或列表，它定义了用于混合以生成渐变色的两种颜色。Transparency 是应用于整个网格的单个值。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Gradient Function(			Log( a * a + b * b ),			a,			b,			[2 10],			Z Color( {"Green", "Orange"} )		)	));

```

### H Line

**语法:** H Line( y ); H Line( x1, x2, y )

**说明:** 从 x1 到 x2 或沿整个框架，在 y 处绘制一条水平线。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Size( 2 );		H Line( 10, 50, 20 );	));

```

### H Size

**语法:** h = H Size()

**说明:** 返回图形框架的水平大小（以像素表示）。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Size( H Size() / 20 );		Line( [10 30 90], [88 22 44] );	));

```

### HLS Color

**语法:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**说明:** 返回一个由色调、亮度、饱和度分量（值均介于 0 和 1 之间）所组成的色号。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Color Wheel",	Graph(		frameSize( 200, 200 ),		For( hue = 0, hue < 360, hue += 30,			y = 50 - 40 * Cos( hue * 2 * Pi() / 360 );			x = 50 + 40 * Sin( hue * 2 * Pi() / 360 );			Fill Color( HLS Color( hue / 360, 0.5, 1 ) );			Oval( x - 10, y - 10, x + 10, y + 10, 1 );		)	));

```

### Handle

**语法:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**说明:** 在 xPos 和 yPos 指定的坐标处绘制方形标记，在标记处按下鼠标时，重复计算 dragScript 表达式。运行脚本前，将全局变量 x 和 y 设置为鼠标值，之后再将其恢复为原始值。释放鼠标按钮后即运行 mouseUpScript 表达式。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	exx = 20;	exy = 50;,	Graph Box(		Frame Size( 200, 200 ),		Handle(			exx,			exy,			exx = x;			exy = y;		);		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );	));

```

### Heat Color

**语法:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**说明:** 返回与介于 0 与 1 之间的值对应的颜色。默认主题为“由蓝经灰到红”。此处支持所有方格图所支持的主题。支持矩阵参数。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Color Bar",	Graph(		For( z = 0, z < 1, z += .1,			x = 10 + 80 * z;			Fill Color( Heat Color( z, <<"Green to Black to Red" ) );			Rect( x - 5, 45, x + 5, 55, 1 );		)	));

```

### In Path

**语法:** b = In Path( x, y, pathMatrix|pathText )

**说明:** 若点 (x,y) 在指定路径中则返回 1，否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";	Graph Box(		Fill Color( "light blue" );		Path( window:p, 1 );		For Each( {x}, 5 :: 55 :: 5,			For Each( {y}, 5 :: 55 :: 5,				Marker(					Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ),					{x, y}				)			)		);	););

```

### In Polygon

**语法:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**说明:** 若点 (x,y) 位于由向量参数定义的多边形内，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**语法:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**说明:** 返回类别颜色，其中 i 是类别水平，n 是类别数（可选），theme 是“列信息”对话框中“值颜色”组合框中的颜色主题。（“JMP 默认”是默认主题。）类别索引必须大于等于 1 且小于等于在调用中指定的或主题中定义的类别数。若第二个参数是字符，则它表示颜色主题而不指定 n。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Color Bar",	Graph(		For( x = 1, x <= 100, x += 5,			Fill Color( Level Color( x, 100, "Green to Black to Red" ) );			Rect( x - 5, 45, x + 5, 55, 1 );		)	));

```

### Line

**语法:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**说明:** 绘制一条线或多条连接线。默认情况下在端点之间采用线性方式绘制线条。若设置了“Value Space”选项，则按照所基于的轴刻度指定的投影绘制线条。若设置了“Smooth”选项，则连接是平滑的，受“tension”、“domain dimension”、“min response”和“max response”约束。

**JMP添加的版本:** 早于版本 14

#### Constrained smoothing

```jsl

New Window( "Constrained smoothing",	Graph Box(		Pen Color( "gray" );		H Line( 90 );		H Line( 92 );		H Line( 10 );		H Line( 8 );		Pen Color( "red" );		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( . ) );		Pen Color( "blue" );		Line( Index( 10, 90, 10 ), [20 10 90 90 60 70 10 10 40], <<Smooth( ., "X", 8, 92 ) );	));

```

#### Polyline

```jsl

New Window( "Example", Graph Box( Line( [10 30 90], [88 22 44] ) ) );

```

#### Smoothing

```jsl

New Window( "Smoothing",	Graph Box(		XAxis( Min( 0 ), Max( 10 ), Inc( 2 ) ),		YAxis( Min( -1.1 ), Max( 1.1 ), Inc( 1 ) ),		Pen Color( "gray" );		H Line( 1 );		H Line( -1 );		H Line( 0 );		Line( 0 :: 10, Sin( 0 :: 10 ) );		Pen Color( "red" );		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( . ) );		Pen Color( "blue" );		Line( 0 :: 10, Sin( 0 :: 10 ), <<Smooth( 0.25 ) );	));

```

#### Value space interpolation

```jsl

New Window( "Interpolate in value space",	Graph Box(		XAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),		YAxis( Scale( "Log" ), Min( 10 ), Max( 100 ) ),		Line( [10 30 90], [88 22 44], <<Value Space( 1 ) )	));

```

### Line Style

**语法:** Line Style( x )

**说明:** 设置当前线条样式，可以为: 0（实线）、1（点线）、2（虚线）、3（点划线）、4（双点划线）。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Line Style Example",	Graph Box(		Frame Size( 500, 400 ),		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot",		"Dash Dash Dot", "Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash",		"Sparse Dash", "Sparse Dot", "Sparse Dash Dot"};		For Each( {istyle, i}, named line styles, {x = 5 :: 75, y = 12 * Sin( x / 12 )},			Text( {x[N Items( x )] + 1, y[N Items( y )] + 92 - 6 * i - 1.5}, istyle );			Line Style( istyle );			Pen Size( 2 );			Line( x, y + 92 - 6 * i );		);	));

```

### Mandelbrot

**语法:** v = Mandelbrot( n, radius, x, y )

**说明:** 计算 x 和 y 位置的 Mandelbrot 函数的值，在 n 次迭代之后或超过半径时停止

**JMP添加的版本:** 早于版本 14

```jsl

grid = 50;rmax = 0/*zero for smooth*/;nmax = 50;// http://wikipedia.org/wiki/Mandelbrot_set New Window( "Mandelbrot - use magnifier to zoom in",	g = Graph Box(		X Scale( -3, 3 ),		Y Scale( -2, 2 ),		framesize( 600, 400 ),		Gradient Function(			Mandelbrot( nmax, rmax, a, b ), // return value: number of iterations before something interesting happened			a, // standard GradientFunction stuff...			b,			Matrix( {0, nmax} ), // range to map the colors onto			Z Color(				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ),				RGB Color( 0, 1, 0 ), RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ),				RGB Color( .3, .3, .4 )}			),			<<xgrid(				X Origin(), X Origin() + X Range(),				X Range() / (Floor( grid * H Size() / V Size() ))			),			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 		)	),	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), );g << Set X Axis(	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )});g << Set Y Axis(	{Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )});

```

### Marker

**语法:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**说明:** 在指定的坐标位置绘制标记。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Size

**语法:** Marker Size( n )

**说明:** 设置图形框架中绘制标记的大小。0 = 点、1 = 小、....

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Marker Size( 5 );		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );	));

```

### Mousetrap

**语法:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**说明:** 当在图形中按下鼠标，并且鼠标未被其他图形对象操控时，将重复计算 dragScript 表达式。运行脚本之前，先将全局变量 x 和 y 设置为鼠标值，之后再将其恢复为原始值。释放鼠标按钮后随即运行 mouseUpScript 表达式。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	exx = 20;	exy = 50;,	Graph Box(		Frame Size( 200, 200 ),		Mousetrap(			exx = x;			exy = y;		);		Circle( {0, 0}, Sqrt( exx * exx + exy * exy ) );	));

```

### New Heat Image

**语法:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**说明:** 根据矩阵和颜色主题或梯度创建热图图像

**JMP添加的版本:** 16

```jsl

nx = 20; // data is this sizeny = 15;data = J( ny, nx, Random Normal() ); // ny=rows, nx=cols// create a magnified matrix for seeing each valuemagnify = 10;big data = J( N Rows( data ) * magnify, N Cols( data ) * magnify );big data = Transform Each( {z, {row, col}}, big data, 	// and filling each value with one from the small matrix	data[Floor( (row - 1) / magnify ) + 1, Floor( (col - 1) / magnify ) + 1]);New Window( "small and big",	Lineup Box( N Col( 3 ),		New Heat Image(			data,			gradient(				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}			)		),		New Heat Image(			big data,			gradient(				{Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )}			)		),		New Heat Image(			Abs( big data ),			gradient(				{Color Theme( "White to Black" ), Scale Values( [0 2] ),				Reverse Gradient( 1 )}			)		)	));

```

### Normal Contour

**语法:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**说明:** 绘制 k 个总体和两个变量的正态概率等高线。prob 参数可以是标量概率或概率矩阵。meanMatrix 和 stdsMatrix 参数是 k×2 矩阵，corrMatrix 参数是 k×1 向量。colorsMatrix 参数指定 k 条等高线的颜色；颜色必须指定为 JSL 颜色（JSL 颜色整数值或者 RGB Color() 或 HLS Color() 等 JSL 颜色函数的返回值）。fill 参数指定等高线填充颜色的透明度。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "blue" );		Normal Contour( 0.95, [40 40], [15 5], [0.5], Empty(), 0.1 );,		Normal Contour(			0.95,			[40 40, 60 50],			[15 5, 10 10],			[-0.9, -0.5],			Matrix( {RGB Color( {0.1, 0.9, 0.1} ), 3} ),			0.2		)	));

```

### Oval

**语法:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**说明:** 在指定矩形中绘制椭圆，若 fill 不为 0，则填满。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Color( "Green" );		Pen Size( 2 );		Fill Color( "Red" );		Oval( 15, 75, 65, 55, 1 );		Oval( 10, 80, 70, 50 );	));

```

### Path

**语法:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**说明:** 若 fill 为 0，则沿指定路径绘线；若 fill 不为 0，则在指定路径内部填充颜色。可以使用 N x 3 矩阵或文本表示法来指定路径。路径矩阵包含三列（x、y 和标志），用于指定路径上的各点。标志值为 0 表示控制，为 1 表示移动，为 2 表示线段，为 3 表示三次 Bézier 线段，还可为负值（若该点还起到闭合路径的作用）。路径文本支持 SVG 语法。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "blue" );		Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3], 1 );		Path( "M20,20 C20,60 60,60 60,20 Z", 0 );	));

```

### Path To Char

**语法:** s = Path To Char( pathMatrix )

**说明:** 将路径规格从矩阵形式转换为字符形式。

**JMP添加的版本:** 早于版本 14

```jsl

Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**语法:** Pen Color( &lt;name|index|rgbList&gt; )

**说明:** 设置用于绘制线条的颜色。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Color( {.3, .5, .7} );		Circle( {20, 20}, 10 );	));

```

### Pen Size

**语法:** Pen Size( &lt;x&gt; )

**说明:** 设置用于绘制线条的画笔大小（以像素表示）。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Size( 4 );		Line( [10 30 90], [88 22 44] );	));

```

### Pick Color

**语法:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**说明:** 返回使用标准颜色选择器选择的颜色。

**JMP添加的版本:** 14

```jsl

pickedColor = Pick Color( "Pick a Line Color", "Red" );New Window( "Example",	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );		Pen Color( pickedColor );		Line( [10 30 70], [88 22 44] );	));

```

### Pick Color Theme

**语法:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**说明:** 返回使用标准颜色主题选择器选择的颜色主题。可以显式指定初始主题或通过指定 Type 使用首选项中的主题。

**JMP添加的版本:** 17

#### 图形生成器

```jsl

theme = Pick Color Theme( "Choose a color theme", Type( "Bad to Good" ) );dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Variables( Color( :SAT Math ), Shape( :State ) ),	Elements( Map Shapes( Legend( 2 ) ) ));server = gb << Get Legend Server;item = server << Get Legend Item( 2, 1 );item << Set Properties( {Gradient( {Color Theme( theme )} )} );

```

#### 行图例

```jsl

pickedTheme = Pick Color Theme( "Pick a Color Theme" );biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**语法:** Pie( left, top, right, bottom, startAngle, endAngle )

**说明:** 绘制饼图扇区。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "red" );		Pie( 10, 80, 70, 40, 0, 90 );	));

```

### Pixel Line To

**语法:** Pixel Line To( h, v )

**说明:** 从像素笔当前所在的坐标到指定的水平和垂直坐标之间绘制一线条。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pixel Origin( 50, 50 ); // in axis coordinates		// others are pixels, relative to pixel origin		Pixel Move To( 0, 0 );		Pixel Line To( 0, 80 );		Pixel Move To( 2, 0 );		Pixel Line To( 2, 40 );		Pixel Move To( 4, 0 );		Pixel Line To( 4, 20 );	));

```

### Pixel Move To

**语法:** Pixel Move To( h, v )

**说明:** 将像素专用笔移动到与该原始位置相对应的水平和垂直坐标。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pixel Origin( 50, 50 ); // in axis coordinates		// others are pixels, relative to pixel origin		Pixel Move To( 0, 0 );		Pixel Line To( 0, 80 );		Pixel Move To( 2, 0 );		Pixel Line To( 2, 40 );		Pixel Move To( 4, 0 );		Pixel Line To( 4, 20 );	));

```

### Pixel Origin

**语法:** Pixel Origin( x, y )

**说明:** 设置像素绘制命令所基于的起始点。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pixel Origin( 50, 50 ); // in axis coordinates		// others are pixels, relative to pixel origin		Pixel Move To( 0, 0 );		Pixel Line To( 0, 80 );		Pixel Move To( 2, 0 );		Pixel Line To( 2, 40 );		Pixel Move To( 4, 0 );		Pixel Line To( 4, 20 );	));

```

### Pixel Path

**语法:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**说明:** 若 fill 为 0，则沿指定像素路径绘线；若 fill 不为 0，则在指定路径内部填充颜色。可以使用 N x 3 矩阵或文本表示法来指定路径。路径矩阵包含三列（x、y 和标志），用于指定路径上的各点。标志值为 0 表示控制，为 1 表示移动，为 2 表示线段，为 3 表示三次 Bézier 线段，还可为负值（若该点还起到闭合路径的作用）。路径文本支持 SVG 语法。路径将根据可选参数以原点为中心调整尺度和转换，并且方向在轴空间中指定。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "blue" );		angle = 45 * Pi() / 180; // 45 deg in radians		Pixel Origin( 20, 80 );		Pixel Path(			0,			0, // offset from pixel origin in pixels			[-10 -10 1,			10 -10 0,			20 20 0,			-10 20 -3],			1, // fill			2.0, // scale			{Sin( angle ), Cos( angle )} // clockwise rotation		);		Pixel Origin( 80, 20 );		Pixel Path(			0,			0,			"M-10,-10 C10,-10 20,20 -10,20 Z",			0,			1.0,			{Sin( -angle ), Cos( -angle )}		);	));

```

### Pixel Text

**语法:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**说明:** 移动到 {h, v} 像素位置并绘制 text 参数指定的文本。已命名的属性参数包含 Center Justified、Right Justified、Top Align、Bottom Align、Erased、Boxed、Counterclockwise、Clockwise。可按任意顺序混合位置参数、已命名参数和字符串。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pixel Origin( 10, 80 ); // in axis coordinates		Pixel Move To( 0, 0 );		Pixel Line To( 160, 140 ); // in pixels from pixel origin		Pixel Text( {0, 0}, "default" );		Pixel Text( Erased, Boxed, Clockwise, {75, 75}, "Erased Boxed Clockwise" );		Pixel Text(			Center Justified,			Bottom Align,			{160, 140},  // in pixels from pixel origin			"Bottom Align\!NCenter Justified"		);	));

```

### Polygon

**语法:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**说明:** 绘制各点指定的多边形。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "gray" );		Polygon( [10 30 90], [88 22 44] );		Polygon( [10 10, 50 80, 80 20, 50 50], <<Fill( 0 ) );	));

```

### Polygon Area

**语法:** area = Polygon Area( {x1, y1}, {x2, y2}, ... ); area = Polygon Area( xMatrix, yMatrix )

**说明:** 计算指定多边形的面积。

**JMP添加的版本:** 14

**示例 1**

```jsl

area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**示例 2**

```jsl

area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**语法:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... ); centroid = Polygon Centroid( xMatrix, yMatrix )

**说明:** 计算指定多边形的重心。

**JMP添加的版本:** 14

**示例 1**

```jsl

{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**示例 2**

```jsl

centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**语法:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**说明:** 从带有少量细节的多边形中删除点并返回其剩余点的索引。detail factor 与细节误差容差成反比。multiple(ids) 指示许多多边形应该一起简化，以便一致地处理公共边。ids 是每个点对应一行的矩阵。geodesic(1) 指示坐标是距离测量值的经纬度。

**JMP添加的版本:** 19

#### 多个多边形

```jsl

dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );rows = Where( dt, 4 <= :Shape <= 7 );polys = dt[rows, {"X", "Y"}];ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];Close( dt, NoSave );simple rows = Polygon Simplify(	polys,	<<detail factor( 500 ),	<<multiple( ids ),	<<geodesic( 1 ));unique ids = Associative Array( ids );minx = Min( polys[0, 1] );maxx = Max( polys[0, 1] );sx = maxx - minx;miny = Min( polys[0, 2] );maxy = Max( polys[0, 2] );sy = maxy - miny;New Window( "Parishes",	Graph Box(		Frame Size( 600, 600 ),		X Scale( minx - sx * 0.02, maxx + sx * 0.02 ),		Y Scale( miny - sy * 0.02, maxy + sy * 0.02 ), 				For Each( {id}, unique ids, 			rows = simple rows[Loc( ids[simple rows] == id )];			Pen Color( "light red" );			Pen Size( 4 );			Polygon( polys[rows, 0], <<Fill( 0 ) );			rows = Loc( ids == id );			Pen Color( "black" );			Pen Size( 1 );			Polygon( polys[rows, 0], <<Fill( 0 ) );						{cx, cy} = Polygon Centroid( polys[rows, 0] );			Text( Center Justified, {cx, cy}, Char( id ) );		)	));

```

**示例 1**

```jsl

New Window( "Example",	Graph Box(		Fill Color( "cyan" );		xx = 18 * [1 1 1 1 1 2 3 4 5 5 5 5 5 4 3 2] + J( 1, 16, Random Uniform( -5, 5 ) );		yy = 18 * [1 2 3 4 5 5 5 5 5 4 3 2 1 1 1 1] + J( 1, 16, Random Uniform( -5, 5 ) );		Polygon( xx, yy );		rows = Polygon Simplify( xx, yy, <<detail factor( 10 ) );		Polygon( xx[rows], yy[rows], <<Fill( 0 ) );	));

```

### RGB Color

**语法:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**说明:** 返回一个由红、绿、蓝分量（值均介于 0 和 1 之间）所组成的色号。RGB Color(1, 1, 1) 为白色。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "RGB Color Example",     /* 1 through 16 are good */ 	division = 6;	blocks = division + 1;	ysize = 400 / Sqrt( division );	xsize = ysize * blocks;	fract = 1 / division;    /* 100 is default axis range */	yBlockSize = 100 / blocks;	xBlockSize = 100 / (blocks * blocks);	Graph(		frameSize( xsize, ysize ),		For( blue = 0, blue <= 1, blue += fract,			For( red = 0, red <= 1, red += fract,				For( green = 0, green <= 1, green += fract,					y = red / fract * yBlockSize;					x = green / fract * xBlockSize + blue / fract * xBlockSize * blocks;                    /* here's the example */					Fill Color( RGB Color( red, green, blue ) );					Rect( x, y, x + xBlockSize, y + yBlockSize, 1 );				)			)		)	););

```

### Rect

**语法:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**说明:** 绘制矩形，若 fill 不等于 0，则填满。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Color( "Green" );		Pen Size( 2 );		Fill Color( "Red" );		Rect( 15, 75, 65, 55, 1 );		Rect( 10, 80, 70, 50 );	));

```

### Remove Color Theme

**语法:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**说明:** 按名称或按完整颜色主题对象，从全局列表中删除自定义颜色主题。

**JMP添加的版本:** 早于版本 14

```jsl

Remove Color Theme( "Yellow To Blue" );

```

### Text

**语法:** Text( &lt;properties&gt;, {x, y}, text, ... ) Text( {left, top, right, bottom}, text )

**说明:** 移动至 {x, y} 位置并绘制 text 参数指定的文本。命名属性参数包括 Center Justified、Right Justified、Erased、Boxed、Counterclockwise 和 Clockwise。位置参数、命名参数和字符串可以按任意顺序混合。您还可以使用四个 x, y 坐标描述在其中绘制文本的框。在这种情况下，不使用属性。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

New Window( "Example",	Graph Box(		Text Color( "red" );		Text( Center Justified, {50, 20}, "centered" );	));

```

**示例 2**

```jsl

New Window( "Example",	Graph Box(		Text Color( "blue" );		Text( {20, 80, 40, 70}, "some text" );	));

```

### Text Color

**语法:** Text Color( &lt;name|index|rgbList&gt; )

**说明:** 设置用于绘制文本的颜色。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Text Color( "red" );		Text( {50, 20}, "label" );	));

```

### Text Font

**语法:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**说明:** 设置后续 Text() 绘制的字体。使用时不带参数来获取当前字体设置。角度为顺时针度数。

**JMP添加的版本:** 15

```jsl

New Window( "Degrees",	Graph Box(		FrameSize( 400, 400 ),		X Scale( -100, 100 ),		Y Scale( -100, 100 ),		Local( {fname, fsize, fstyle, fangle, i, a},			{fname, fsize, fstyle, fangle} = Text Font();			Text Font( If( Host is( "Mac" ), "Helvetica", "Arial" ), 30, "Italic Bold" );			Text( Center Justified, {0, -10}, "JMP" );			For( i = 0, i < 360, i += 15,				Text Font( {fname, 10, "plain", -i + 90} );				a = i * Pi() / 180;				Text( Center Justified, {80 * Cos( a ), 80 * Sin( a )}, Char( i ) );				Line( {70 * Cos( a ), 70 * Sin( a )}, {76 * Cos( a ), 76 * Sin( a )} );			);		)	));

```

### Text Size

**语法:** Text Size( n )

**说明:** 设置用于文本绘制的字体大小。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Text Size( 20 );		Text( {50, 20}, "label" );	));

```

### To Color Space

**语法:** color = To Color Space( color, colorSpace )

**说明:** 将一种颜色转换为另一种颜色空间。将映射超出色域的颜色以适应转换为更小颜色空间这种情况。

**JMP添加的版本:** 18

**示例 1**

```jsl

To Color Space( "red", "LMS" );

```

**示例 2**

```jsl

To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**示例 3**

```jsl

To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**语法:** Transparency( &lt;alpha&gt; )

**说明:** 设置在绘制命令中使用的透明度。Alpha 范围: 0（清晰）至 1（不透明，默认值）。某些操作系统可能不支持该项。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Frame Size( 500, 500 ),		X Scale( -3, 3 ),		Y Scale( -3, 3 ),		Transparency( .1 );		Fill Color( RGB Color( 1/*red*/, 0/*green*/, 0/*blue*/ ) );		For( i = 0, i < 10000, i++,			Circle( {Random Normal(), Random Normal()}, 0.05, "FILL" )		);	));

```

### V Line

**语法:** V Line( x ); V Line( x, y1, y2 )

**说明:** 从 y1 到 y2 或沿整个框架，在 x 处绘制一条垂直线。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Size( 2 );		V Line( 20, 10, 50 );	));

```

### V Size

**语法:** v = V Size()

**说明:** 返回图形框架的垂直大小（以像素表示）。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Text Size( V Size() / 4 );		Text( {50, 20}, "label" );	));

```

### X Function

**语法:** X Function( xExpr, yName, &lt;properties&gt; )

**说明:** 变量 yName 沿着图中 Y 轴的范围变化时，在 X 方向绘制函数 xExpr。其他已命名的属性参数包含 Min(minimum X)、Max(maximum Y)、Fill(fill pattern, value to fill to)、Inc(upper bound of increment)。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Color( "red" );		X Function( 20 + 40 * Sin( a / 30 ), a );	));

```

### X Origin

**语法:** x = X Origin()

**说明:** 返回图形框架左边的 x 值。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "red" );		Oval(			X Origin() + 10,			Y Origin() + Y Range() - 10,			X Origin() + X Range() - 10,			Y Origin() + 10,			1		);	));

```

### X Range

**语法:** x = X Range()

**说明:** 返回从左至右的 x 轴距离。X Origin() + X Range() 是右边缘。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "red" );		Oval(			X Origin() + 10,			Y Origin() + Y Range() - 10,			X Origin() + X Range() - 10,			Y Origin() + 10,			1		);	));

```

### X Scale

**语法:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**说明:** 设置图形框架的新尺度。

**JMP添加的版本:** 早于版本 14

```jsl

/* Default value for X Scale() is (0,100). */New Window( "Example",	Graph Box(		Y Scale( -10, 90 ),		X Scale( -10, 90 ),		Oval(			X Origin() + 10,			(Y Origin() + Y Range()) - 10,			(X Origin() + X Range()) - 10,			Y Origin() + 10,			1		)	));

```

### XY Function

**语法:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**说明:** 该图形脚本函数将表达式 x(t) 和表达式 y(t) 组合起来对参数 t 的指定范围绘制 x-y 曲线。Inc() 是 t 的最大增量，steps() 是 t 的最小步数。若默认值不显示详细信息，则使用 steps() 或 inc()。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Spiral",	Graph Box(		Pen Color( "red" );		xCenter = 50;		yCenter = 50;		minAngle = 0;		maxAngle = Pi() * 2 * 20;		XY Function(			xCenter + ((ta / 3) * Cos( ta )),			yCenter + ((ta / 3) * Sin( ta )),			ta,			Min( minAngle ),			Max( maxAngle ),			inc( Pi() / 100 )		);	));/* sin() and cos() use ta as an argument (rotates)   AND as a factor (expands) in this example.   (sin and cos use radians, not degrees.) */

```

### Y Function

**语法:** Y Function( yExpr, xName, &lt;properties&gt; )

**说明:** 变量 xName 沿着图中 X 轴的范围变化时，在 Y 方向绘制函数 yExpr。其他已命名的属性参数包含 Min(minimum X)、Max(maximum X)、Fill(fill pattern, value to fill to)、Inc(upper bound of increment)。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Pen Color( "red" );		Y Function( 20 + 40 * Sin( a / 30 ), a );	));

```

### Y Origin

**语法:** y = Y Origin()

**说明:** 返回图形框架底边的 y 值。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "red" );		Oval(			X Origin() + 10,			Y Origin() + Y Range() - 10,			X Origin() + X Range() - 10,			Y Origin() + 10,			1		);	));

```

### Y Range

**语法:** y = Y Range()

**说明:** 返回从底部到顶部的 y 轴距离。Y Origin() + Y Range() 是顶边。

**JMP添加的版本:** 早于版本 14

```jsl

New Window( "Example",	Graph Box(		Fill Color( "red" );		Oval(			X Origin() + 10,			Y Origin() + Y Range() - 10,			X Origin() + X Range() - 10,			Y Origin() + 10,			1		);	));

```

### Y Scale

**语法:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**说明:** 设置图形框架的新尺度。

**JMP添加的版本:** 早于版本 14

```jsl

/* Default value for Y Scale() is (0,100).*/New Window( "Example",	Graph Box(		Y Scale( -10, 90 ),		X Scale( -10, 90 ),		Oval(			X Origin() + 10,			(Y Origin() + Y Range()) - 10,			(X Origin() + X Range()) - 10,			Y Origin() + 10,			1		)	));

```

