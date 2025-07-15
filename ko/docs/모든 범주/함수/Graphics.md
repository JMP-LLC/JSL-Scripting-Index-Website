# Graphics



### Add Color Theme

**설명:** 새 사용자 색상 테마를 생성하고 테마 선택기에 등록합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Add Color Theme( {"Yellow To Blue", 0, {{255, 255, 0}, {0, 0, 255}}, {0.0, 1.0}} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Add Color Theme(
	{"Black To Red To White", {"Continuous", "Categorical", "Diverging"}, {{0, 0, 0}, {255, 0, 0}, {255, 255,
	255}, Missing( "Green" )}, {"Full Color", "Tritanopia", "Tritanomaly"}}
);

```

### Arc

**구문:** Arc( left, top, right, bottom, startAngle, endAngle )

**설명:** 타원 호를 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Arrow( {x1, y1}, {x2, y2}, ... ); Arrow( xMatrix, yMatrix )

**설명:** 화살표가 있는 선 또는 이러한 일련의 선을 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Back Color( &lt;name|index|rgbList&gt; )

**설명:** Text() 함수의 지우기 모드에 대한 배경 색상을 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** color = Blend Colors( color1, color2, &lt;percent2&gt;, &lt;colorSpace&gt;, &lt;hueDirection&gt; )

**설명:** 구성 가능한 백분율 및 색상 공간으로 두 색상을 혼합합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
Blend Colors( "black", "white", 0.25 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "sRGB" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", "lRGB" );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.5, "LUV" );

```

**예제 5**

```jsl

Names Default To Here( 1 );
Blend Colors( "red", "blue", 0.75, "HLS" );

```

**예제 6**

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

**예제 7**

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

**구문:** m = Char To Path( pathText )

**설명:** 경로 지정을 문자 형식에서 행렬 형식으로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Show( Char To Path( "M10 10 L50 10 L30 50 Z M20 20 L40 20 L30 40 Z" ) );

```

### Circle

**구문:** Circle( {x, y}, radius|PixelRadius( px ), ..., &lt;"FILL"&gt; )

**설명:** {x, y}를 중심으로 원을 그립니다. 반지름은 세로 축에 기반한 정수로 지정하거나 픽셀 수로 지정할 수 있습니다. 픽셀 기반 반지름은 세로 축이 변경되어도 크기가 변하지 않는 원을 생성합니다. 인수를 임의의 순서로 반복하여 원을 여러 개 그릴 수 있습니다. "FILL"을 사용할 경우 마지막에 지정해야 하며 이 인수는 펜 색상으로 원을 그리는 것이 아니라 채우기 색상으로 원을 채웁니다.

**JMP추가된 버전:** 버전 14 이전

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
		Transparency( 1 );/* solid fill */Circle( PixelRadius( 18 ), {40, 20}, {40, 50}, {40, 80}, "FILL" );
	)
);

```

### Color Difference

**구문:** color = Color Difference( color1, color2, &lt;difference metric&gt;)

**설명:** 지정된 색상 차이 측정 기준에 따라 두 색상의 차이를 반환합니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "sRGB" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "redmean" );

```

**예제 4**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE76" );

```

**예제 5**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIE94" );

```

**예제 6**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "CIEDE2000" );

```

**예제 7**

```jsl

Names Default To Here( 1 );
Color Difference( "red", "blue", "dEok" );

```

### Color To HLS

**구문:** {h, l, s} = Color To HLS( color )

**설명:** 색조, 밝기 및 채도 구성 요소 목록을 반환합니다. color 인수는 유효한 JSL 색상 또는 색상 번호 행렬일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Color To HLS( RGB Color( 1.0, 0.5, 0.5 ) );

```

### Color To RGB

**구문:** {r, g, b} = Color To RGB( color )

**설명:** 0에서 1 사이의 빨간색, 녹색, 파란색 구성 요소의 목록을 반환합니다. 색상 인수는 유효한 JSL 색상 또는 색상 번호의 행렬일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Color To RGB( HLS Color( 30 / 360, 0.5, 1 ) );

```

### Contour

**구문:** Contour( xVector, yVector, zGridMatrix, zContours, &lt; &lt;&lt;zColor( color, option )&gt;, &lt; &lt;&lt;Fill|Fill Between|Fill Below|Fill Above&gt;, &lt; &lt;&lt;Transparency(vector)&gt; )

**설명:** 지정된 값 격자를 사용하여 등고선을 그립니다. 지정된 색상 수가 등고선 수보다 작으면 "색상 보간" 또는 "색상 순환" 옵션으로 색상 적용 방법을 결정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

New Window( "Example",
	H List Box(
		Outline Box( "Line",
			Graph Box( Contour( 1 :: 100, 1 :: 100, (1 :: 100)` * (1 :: 100), 7 ^ (0 :: 4) ) )
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
					<<zColor( {RGB Color( 218, 218, 255 ), RGB Color( 255, 218, 218 )}, "Cycle Colors" ),
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

**구문:** Contour Function( zExpr, xName, yName, z|zMatrix, &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;ZColor( color, option )&gt;, &lt; &lt;&lt;ZLabeled&gt;, &lt; &lt;&lt;Filled&gt;, &lt; &lt;&lt;FillBetween&gt;, &lt; &lt;&lt;Ternary&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**설명:** xName 및 yName 값으로 구성된 격자에서 표현식을 실행하고 등고선을 그립니다. color는 숫자, 행렬, RGB 값 목록, 색상 이름 목록 또는 색상 테마로 지정할 수 있습니다. 투명도 t는 숫자 또는 행렬로 지정할 수 있습니다. Ternary 옵션을 지정하면 등고선이 삼원 좌표계에 고정됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

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

**예제 2**

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

**구문:** Drag Line( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**설명:** 지정된 점에 다중선을 그립니다. 하지만 Line과 달리 점은 화면에서 드래그할 수 있어 (LValue) 행렬 인수의 값이 업데이트될 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Drag Marker( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**설명:** 지정된 지점에 이동 가능한 표식을 그립니다. 표식이 이동되면 행렬 값이 업데이트됩니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Drag Polygon( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**설명:** 표시된 지점에 채워진 다각형을 그립니다. 화면에서 점을 드래그하여 (LValue) 행렬 인수의 값을 업데이트할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Drag Rect( xMatrixName, yMatrixName, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**설명:** 지정된 점에 직사각형을 그립니다. 하지만 Rect와 달리 이러한 모퉁이는 화면에서 가로로 드래그할 수 있어 (LValue) 행렬 인수의 값이 업데이트될 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Drag Text( xMatrixName, yMatrixName, text, &lt;dragScript&gt;, &lt;MouseUpScript&gt; )

**설명:** 지정된 점에 텍스트를 그립니다. 하지만 Text() 함수와 달리 화면에서 점을 드래그하여 xMatrixName 및 yMatrixName 행렬 인수의 값을 업데이트할 수 있습니다. text 인수는 문자열 인수 또는 문자열 목록일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Fill Color( &lt;name|index|rgbList&gt; )

**설명:** 채우기 영역 그리기에 대한 색상을 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Fill Pattern( name|mask|image )

**설명:** 채우기 영역을 그리는 패턴을 설정합니다. 마스크는 현재 채우기 색상에 적용할 0에서 1 사이의 값 행렬입니다.

**JMP추가된 버전:** 버전 14 이전

**마스크**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Pattern( [1 0.5 0 0, 0.5 0 0 1, 0 0 1 0.5, 0 1 0.5 0] );
		Polygon( [10 30 90], [88 22 44] );
	)
);

```

**이미지**

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

### Get Color Theme Detail

**구문:** script = Get Color Theme Detail(name)

**설명:** 지정된 색상 테마 이름에 대한 스크립트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Get Color Theme Detail( "JMP Default" );

```

### Get Color Theme Names

**구문:** {list of names} = Get Color Theme Names(&lt;kind&gt;)

**설명:** 선택적 파라미터 kind와 매칭되는 색상 테마 문자열 목록을 반환합니다. kind는 "continuous", "categorical", "sequential", "diverging", "qualitative" 또는 "chromatic" 중 하나입니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
Get Color Theme Names();

```

**예제 2**

```jsl

Names Default To Here( 1 );
Get Color Theme Names( "sequential" );

```

### Gradient Function

**구문:** Gradient Function( zExpr, xName, yName, zLimits, zColor( color list or matrix ), &lt; &lt;&lt;XGrid( min, max, incr )&gt;, &lt; &lt;&lt;YGrid( min, max, incr )&gt;, &lt; &lt;&lt;Transparency( t )&gt; )

**설명:** 그래프를 두 색상의 그래디언트로 채웁니다. zExpr 인수는 xName 및 yName 변수에 대한 함수입니다. 벡터 zLimits는 zExpr 값의 범위를 지정합니다. zColor 인수는 그라데이션을 생성하기 위해 함께 사용할 두 색상을 정의하는 벡터 또는 목록입니다. Transparency는 전체 격자에 적용되는 단일 값입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box( Gradient Function( Log( a * a + b * b ), a, b, [2 10], Z Color( {"Green", "Orange"} ) ) )
);

```

### H Line

**구문:** H Line( y ); H Line( x1, x2, y )

**설명:** y에 x1에서 x2까지 또는 전체 프레임을 통과하는 수평선을 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** h = H Size()

**설명:** 그래픽 프레임의 가로 크기(픽셀)를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** y = HLS Color( h, l, s ); y = HLS Color( {h, l, s} )

**설명:** 색조, 밝기 및 채도의 색상 번호(모두 0에서 1 사이)를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Handle( xPos, yPos, dragScript, &lt;mouseUpScript&gt; )

**설명:** xPos 및 yPos에 지정된 좌표에 정사각형 표식을 그리고 마우스로 표식을 누르면 반복적으로 dragScript 표현식을 실행합니다. 스크립트를 실행하기 전에 전역 x 및 y가 마우스 값으로 설정되고 이후 원래 값으로 복원됩니다. mouseUpScript 표현식은 마우스 버튼을 놓으면 실행됩니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** y = Heat Color( x ); y = Heat Color( x, &lt; &lt;&lt;theme&gt; )

**설명:** 0에서 1 사이의 값에 해당하는 색상을 반환합니다. 기본 테마는 "파랑-회색-빨강"입니다. 셀 그림에 지원되는 모든 색상 테마가 지원됩니다. 행렬 인수가 지원됩니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** b = In Path( x, y, pathMatrix|pathText )

**설명:** 점(x,y)이 지정된 경로에 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );

New Window( "Example",
	window:p = "M10 10 L52 10 L37 52 Z M20 16 L40 20 L35 40 Z";
	Graph Box(
		Fill Color( "light blue" );
		Path( window:p, 1 );
		For Each( {x}, 5 :: 55 :: 5,
			For Each( {y}, 5 :: 55 :: 5,
				Marker( Marker State( If( In Path( x, y, window:p ), "x", "circle" ) ), {x, y} )
			)
		);
	);
);

```

### In Polygon

**구문:** b = In Polygon( x, y, xMatrix, &lt;yMatrix&gt; )

**설명:** 점 (x,y)가 벡터 인수로 정의되는 다각형 안에 있으면 1을 반환하고 그렇지 않으면 0을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
In Polygon( 11, 22, [10 20 30], [10 30 20] );

```

### Level Color

**구문:** y = Level Color( i ); y = Level Color( i, n ); y = Level Color( i, n, &lt;theme&gt; ); y = Level Color( i, &lt;theme&gt; )

**설명:** 범주 색상을 반환합니다. 여기서 i는 범주 수준이고 n은 범주 수(선택 사항)이며 theme는 열 정보 대화상자의 값 색상 콤보 상자에 있는 색상 테마입니다. "JMP 기본값"은 기본 테마입니다. 범주 인덱스는 1보다 크거나 같고 호출에 지정되거나 테마에 정의된 범주 수보다 작거나 같아야 합니다. 두 번째 인수가 문자이면 색상 테마이고 n이 지정되지 않은 것입니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Line( {x1, y1}, {x2, y2}, ..., &lt; &lt;&lt;Value Space( 0|1 ) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; ); Line( xMatrix, yMatrix, &lt; &lt;&lt;Value Space(0 | 1) &gt;, &lt; &lt;&lt;Smooth( tension, domain, min response, max response ) &gt; )

**설명:** 하나의 선 또는 연결된 선을 그립니다. 기본적으로 끝점을 연결하는 직선을 그립니다. Value Space 옵션을 설정한 경우 선은 기본 축 척도에 지정된 투영을 따릅니다. Smooth 옵션을 설정한 경우에는 tension, domain dimension, min response 및 max response에 의해 제약되어 연결이 평활됩니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Line Style( x )

**설명:** 현재 선 스타일을 설정합니다. 0(실선), 1(점선), 2(파선), 3(일점 쇄선) 또는 4(이점 쇄선) 중 하나일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Line Style Example",
	Graph Box(
		Frame Size( 500, 400 ),
		named line styles = {"Solid", "Dotted", "Dashed", "Dash Dot", "Dash Dot Dot", "Dash Dash Dot",
		"Dash Dash Dot Dot", "Long Dash", "Long Dash Dash", "Dense Dash", "Sparse Dash", "Sparse Dot",
		"Sparse Dash Dot"};
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

**구문:** v = Mandelbrot( n, radius, x, y )

**설명:** x,y에서의 Mandelbrot 함수 값을 계산하고 n번 반복 후 또는 반지름을 초과하면 중지합니다.

**JMP추가된 버전:** 버전 14 이전

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
				{RGB Color( 0, 0, 0 ), RGB Color( 1, 0, 0 ), RGB Color( 1, 1, 0 ), RGB Color( 0, 1, 0 ),
				RGB Color( 0, 1, 1 ), RGB Color( 0, 0, 1 ), RGB Color( .3, .3, .4 )}
			),
			<<xgrid( X Origin(), X Origin() + X Range(), X Range() / (Floor( grid * H Size() / V Size() )) ),
			<<ygrid( Y Origin(), Y Origin() + Y Range(), Y Range() / (Floor( grid )) ), 

		)
	),
	H List Box( Slider Box( 2, 500, nmax, g << reshow ), Global Box( nmax ) ),
	H List Box( Slider Box( 0, 5, rmax, g << reshow ), Global Box( rmax ) ),
	H List Box( Slider Box( 2, 500, grid, g << reshow ), Global Box( grid ) ), 

);
g << Set X Axis( {Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )} );
g << Set Y Axis( {Format( "Best", 15 ), Show Major Ticks( 0 ), Rotated Labels( "Parallel" )} );

```

### Marker

**구문:** Marker( &lt;rs&gt;, {x1, y1}, {x2, y2}, ... ); Marker( &lt;rs&gt;, xMatrix, yMatrix )

**설명:** 표시된 좌표에 표식을 그립니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example", Graph Box( Marker( Marker State( 3 ), [11 44 77], [75 25 50] ) ) );

```

### Marker Size

**구문:** Marker Size( n )

**설명:** 그래픽 프레임에 그려진 표식 크기를 설정합니다. 0 = 점, 1 = 작게, ....

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Mousetrap( dragScript, &lt;mouseUpScript&gt; )

**설명:** 마우스로 그래프 안쪽을 누르는 동안 다른 그래프 개체에 의해 처리되지 않은 dragScript 표현식을 반복적으로 실행합니다. 스크립트를 실행하기 전에 전역 x 및 y가 마우스 값으로 설정되고 이후 원래 값으로 복원됩니다. mouseUpScript 표현식은 마우스 버튼을 놓으면 실행됩니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** New Heat Image( Matrix, &lt;Color Theme / gradient ( ... )&gt;

**설명:** 행렬과 색상 테마 또는 그래디언트를 기반으로 히트맵 이미지를 생성합니다.

**JMP추가된 버전:** 16

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
			gradient( {Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )} )
		),
		New Heat Image(
			big data,
			gradient( {Color Theme( "Blue To Gray To Orange" ), Scale Type( "Standard Deviation" )} )
		),
		New Heat Image(
			Abs( big data ),
			gradient( {Color Theme( "White to Black" ), Scale Values( [0 2] ), Reverse Gradient( 1 )} )
		)
	)
);

```

### Normal Contour

**구문:** Normal Contour( prob, meanMatrix, stdMatrix, corrMatrix, &lt;colorsMatrix&gt;, &lt;fill=0&gt; )

**설명:** k개 모집단 및 두 개의 변수에 대한 정규 확률 등고선을 그립니다. prob 인수는 스칼라 확률 또는 확률 행렬일 수 있습니다. meanMatrix 및 stdsMatrix 인수는 k x 2 행렬이고 corrMatrix 인수는 k x 1 벡터입니다. colorsMatrix 인수는 k 등고선의 색상을 지정합니다. 색상은 JSL 색상(JSL 색상 정수 값 또는 JSL 색상 함수(예: RGB Color() 또는 HLS Color() 함수)의 반환 값)으로 지정해야 합니다. fill 인수는 등고선 채우기 색상에 대한 투명도를 지정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Oval( left, top, right, bottom, &lt;fill=0&gt; )

**설명:** 지정한 직사각형 내에 타원을 그립니다. fill이 0이 아닌 경우 타원을 채웁니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Path( pathMatrix|pathText, &lt;fill=0&gt; )

**설명:** 지정된 경로를 따라 스트로크를 그리거나(채우기가 0일 경우) 지정된 경로의 내부를 칠합니다(채우기가 0이 아닐 경우). N x 3 행렬 또는 텍스트 표현을 사용하여 경로를 지정할 수 있습니다. 경로 행렬에는 경로의 각 점에 대한 x, y 및 플래그에 해당하는 세 개의 열이 있습니다. 플래그 값은 제어의 경우 0, 이동의 경우 1, 선분의 경우 2, 3차 Bézier 세그먼트의 경우 3이며 점이 경로를 닫는 경우에는 음수입니다. 경로 텍스트는 SVG 구문을 지원합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** s = Path To Char( pathMatrix )

**설명:** 경로 지정을 행렬 형식에서 문자 형식으로 변환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Path To Char( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] );

```

### Pen Color

**구문:** Pen Color( &lt;name|index|rgbList&gt; )

**설명:** 선 그리기에 대한 색상을 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Pen Size( &lt;x&gt; )

**설명:** 선 그리기에 대한 펜 크기(픽셀)를 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** color = Pick Color( &lt;window title&gt;, &lt;name|index|rgbList&gt; )

**설명:** 표준 색상 선택기를 사용하여 선택된 색상을 반환합니다.

**JMP추가된 버전:** 14

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

**구문:** theme = Pick Color Theme( &lt;window title&gt;, &lt;Color Theme(name|specification)&gt;, &lt;Type("Continuous" | "Sequential" | "Bad to Good" | "Categorical")&gt;)

**설명:** 표준 색상 테마 선택기를 사용하여 선택된 색상 테마를 반환합니다. 초기 테마는 명시적으로 지정하거나, Type을 지정하여 환경 설정의 테마를 사용할 수 있습니다.

**JMP추가된 버전:** 17

**그래프 빌더**

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

**행 범례**

```jsl

Names Default To Here( 1 );

pickedTheme = Pick Color Theme( "Pick a Color Theme" );
biv = Open( "$SAMPLE_DATA/Big Class.jmp" ) << Run Script( "Bivariate" );
Report( biv )[FrameBox( 1 )] << Row Legend( "age", Color Theme( pickedTheme ) );

```

### Pie

**구문:** Pie( left, top, right, bottom, startAngle, endAngle )

**설명:** 파이 조각을 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Pixel Line To( h, v )

**설명:** 현재 픽셀 기반 펜 좌표에서 지정된 수평 및 수직 좌표까지 선을 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Pixel Move To( h, v )

**설명:** 픽셀로 위치가 지정된 펜을 원점 기준으로 수평 및 수직으로 이동합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Pixel Origin( x, y )

**설명:** 픽셀 그리기 명령의 기준이 되는 원점을 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** PixelPath( h, v, pathMatrix|pathText, &lt;fill=0&gt;, &lt;scale=1.0&gt;, &lt;orient={0.0,1.0}&gt; )

**설명:** 지정된 픽셀 기반 경로를 따라 스트로크를 그리거나(채우기가 0일 경우) 지정된 경로의 내부를 칠합니다(채우기가 0이 아닐 경우). N x 3 행렬 또는 텍스트 표현을 사용하여 경로를 지정할 수 있습니다. 경로 행렬에는 경로의 각 점에 대한 x, y 및 플래그에 해당하는 세 개의 열이 있습니다. 플래그 값은 제어의 경우 0, 이동의 경우 1, 선분의 경우 2, 3차 Bézier 세그먼트의 경우 3이며 점이 경로를 닫는 경우에는 음수입니다. 경로 텍스트는 SVG 구문을 지원합니다. 경로는 선택적 모수에 따라 축 공간에 지정된 방향을 사용하여 해당 원점을 중심으로 척도화 및 변환됩니다.

**JMP추가된 버전:** 버전 14 이전

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
		Pixel Path( 0, 0, "M-10,-10 C10,-10 20,20 -10,20 Z", 0, 1.0, {Sin( -angle ), Cos( -angle )} );
	)
);

```

### Pixel Text

**구문:** Pixel Text( &lt;properties&gt;, {h, v}, text, ... )

**설명:** {h, v} 픽셀 위치로 이동하고 text 인수에 지정된 텍스트를 그립니다. 명명된 특성 인수에는 Center Justified, Right Justified, Top Align, Bottom Align, Erased, Boxed, Counterclockwise, Clockwise가 포함됩니다. 위치 인수, 명명된 인수 및 문자열을 임의 순서로 지정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Polygon( {x1, y1}, {x2, y2}, ..., &lt;&lt;fill(bool) ); Polygon( xMatrix, &lt;yMatrix&gt;, &lt;&lt;fill(bool) )

**설명:** 점에 지정된 다각형을 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** area = Polygon Area( {x1, y1}, {x2, y2}, ... );area = Polygon Area( xMatrix, yMatrix )

**설명:** 지정된 다각형의 영역을 계산합니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
area = Polygon Area( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
area = Polygon Area( [10 20 30], [10 30 20] );

```

### Polygon Centroid

**구문:** {cx, cy} = Polygon Centroid( {x1, y1}, {x2, y2}, ... );centroid = Polygon Centroid( xMatrix, yMatrix )

**설명:** 지정된 다각형의 중심을 계산합니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
{cx, cy} = Polygon Centroid( {0, 0}, {0, 10}, {10, 10}, {10, 0} );

```

**예제 2**

```jsl

Names Default To Here( 1 );
centroid = Polygon Centroid( [10 20 30], [10 30 20] );

```

### Polygon Simplify

**구문:** rows = Polygon Simplify( xMatrix|xyMatrix, &lt;yMatrix&gt;, &lt;&lt;&lt;detail factor(f=200)&gt;, &lt;&lt;&lt;multiple(ids)&gt;, &lt;&lt;&lt;geodesic(bool)&gt; )

**설명:** 다각형에서 상세 정보가 적은 점을 제거하고 나머지 점의 인덱스를 반환합니다. detail factor는 상세 오차 공차에 반비례합니다. multiple(ids)은 여러 다각형을 함께 단순화하여 공통 모서리를 일관되게 처리해야 함을 나타냅니다. ids는 점당 하나의 행으로 구성된 행렬입니다. geodesic(1)는 거리 측정 좌표가 위도와 경도임을 나타냅니다.

**JMP추가된 버전:** 19

**다중 다각형**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_IMPORT_DATA/Parishes.shp" );
rows = Where( dt, 4 <= :Shape <= 7 );
polys = dt[rows, {"X", "Y"}];
ids = dt[rows, {"Shape"}] * 100 + dt[rows, {"Part"}];
Close( dt, NoSave );

simple rows = Polygon Simplify( polys, <<detail factor( 500 ), <<multiple( ids ), <<geodesic( 1 ) );
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

**예제 1**

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

### RGB Color

**구문:** y = RGB Color( r, g, b ); y = RGB Color( {r, g, b} )

**설명:** 빨간색, 녹색 및 파란색으로 구성되는 색상 번호(모두 0에서 1 사이)를 반환합니다. RGB Color(1, 1, 1)은 흰색입니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Rect( left, top, right, bottom, &lt;fill=0&gt; ); Rect( {left, top}, {right, bottom} )

**설명:** fill이 0이 아닌 경우 채워진 직사각형을 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Remove Color Theme("Name"|{"Name", &lt;flags&gt;, {color, ...}, &lt;{position, ...}&gt;})

**설명:** 이름 또는 전체 색상 테마 개체를 기준으로 전역 목록에서 사용자 색상 테마를 제거합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
Remove Color Theme( "Yellow To Blue" );

```

### Text

**구문:** Text( &lt;properties&gt;, {x, y}, text, ... )Text( {left, top, right, bottom}, text )

**설명:** {x, y} 위치로 이동하여 text 인수에 지정된 텍스트를 그립니다. 명명된 특성 인수에는 Center Justified, Right Justified, Erased, Boxed, Counterclockwise, Clockwise가 포함됩니다. 위치 인수, 명명된 인수 및 문자열을 임의 순서로 혼합할 수 있습니다. 4개의 x, y 좌표를 사용하여 텍스트를 그릴 상자를 설명할 수도 있습니다. 이 경우 특성이 사용되지 않습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Text Color( "red" );
		Text( Center Justified, {50, 20}, "centered" );
	)
);

```

**예제 2**

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

**구문:** Text Color( &lt;name|index|rgbList&gt; )

**설명:** 텍스트 그리기에 대한 색상을 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** {nm, sz, st, an} = Text Font(fontName, &lt;size&gt;, &lt;"bold italic underline strikeout"&gt;, &lt;angle&gt;

**설명:** 이후 Text() 그리기에 사용되는 글꼴을 설정합니다. 현재 글꼴 설정을 가져오려면 인수 없이 사용합니다. 각도는 시계 방향 각도입니다.

**JMP추가된 버전:** 15

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

**구문:** Text Size( n )

**설명:** 텍스트 그리기에 대한 글꼴 크기를 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** color = To Color Space( color, colorSpace )

**설명:** 색상을 다른 색상 공간으로 변환합니다. 영역을 벗어난 색상은 더 작은 색상 공간으로 변환할 때 적절하게 매핑됩니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
To Color Space( "red", "LMS" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
To Color Space( {0.871, 0.032, 0.061, "lRGB"}, "HLS" );

```

**예제 3**

```jsl

Names Default To Here( 1 );
To Color Space( {0.941, 0.196, 0.274, "lRGB", 0.871, 0.032, 0.061}, "HLS" );

```

### Transparency

**구문:** Transparency( &lt;alpha&gt; )

**설명:** 그리기 명령에 사용되는 투명도를 설정합니다. 알파 범위는 0(투명)에서 1(불투명, 기본값) 사이입니다. 일부 운영 체제에서는 이를 지원하지 않습니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** V Line( x ); V Line( x, y1, y2 )

**설명:** x에 y1에서 y2까지 또는 전체 프레임을 통과하는 수직선을 그립니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** v = V Size()

**설명:** 그래픽 프레임의 세로 크기(픽셀)를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** X Function( xExpr, yName, &lt;properties&gt; )

**설명:** yName의 Y 축 범위에서 X 함수 xExpr을 그립니다. 추가 명명된 특성 인수에는 Min(최소 X), Max(최대 Y), Fill(채우기 패턴, 채울 값), Inc(증분 상한)가 포함됩니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** x = X Origin()

**설명:** 그래픽 프레임의 왼쪽 모서리에 대한 x 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval( X Origin() + 10, Y Origin() + Y Range() - 10, X Origin() + X Range() - 10, Y Origin() + 10, 1 );
	)
);

```

### X Range

**구문:** x = X Range()

**설명:** 왼쪽에서 오른쪽까지의 x 거리를 반환합니다. X Origin() + X Range()는 오른쪽 모서리 위치입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval( X Origin() + 10, Y Origin() + Y Range() - 10, X Origin() + X Range() - 10, Y Origin() + 10, 1 );
	)
);

```

### X Scale

**구문:** X Scale( &lt;xMin&gt;, &lt;xMax&gt; )

**설명:** 그래픽 프레임에 대한 새 척도를 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** XY Function( x(t), y(t), t, min(0), max(1), inc(.01) | steps(100) )

**설명:** 이 그래픽 스크립트 함수는 표현식 x(t)와 표현식 y(t)를 결합하여 모수 t의 지정된 범위에 대한 x-y 곡선을 그립니다. Inc()는 t에 대한 최대 증분이고 steps()는 t에 대한 최소 단계 수입니다. 기본값이 상세 정보를 표시하지 않는 경우 steps() 또는 inc()를 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** Y Function( yExpr, xName, &lt;properties&gt; )

**설명:** xName의 X 축 범위에서 변수 Y 함수 yExpr을 그립니다. 추가 명명된 특성 인수에는 Min(최소 X), Max(최대 X), Fill(채우기 패턴, 채울 값), Inc(증분 상한)가 포함됩니다.

**JMP추가된 버전:** 버전 14 이전

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

**구문:** y = Y Origin()

**설명:** 그래픽 프레임의 아래쪽 모서리에 대한 y 값을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval( X Origin() + 10, Y Origin() + Y Range() - 10, X Origin() + X Range() - 10, Y Origin() + 10, 1 );
	)
);

```

### Y Range

**구문:** y = Y Range()

**설명:** 아래쪽에서 위쪽까지의 y 거리를 반환합니다. Y Origin() + Y Range()는 위쪽 모서리 위치입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
New Window( "Example",
	Graph Box(
		Fill Color( "red" );
		Oval( X Origin() + 10, Y Origin() + Y Range() - 10, X Origin() + X Range() - 10, Y Origin() + 10, 1 );
	)
);

```

### Y Scale

**구문:** Y Scale( &lt;yMin&gt;, &lt;yMax&gt; )

**설명:** 그래픽 프레임에 대한 새 척도를 설정합니다.

**JMP추가된 버전:** 버전 14 이전

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

