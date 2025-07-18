# BoxPlotSeg



## 공유 항목 메시지

### Enabled

**구문:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**설명:** 활성화되지 않은 개체는 키보드 또는 마우스 입력에 응답하지 않습니다. 이 특성은 하위 개체에 상속되므로 컨테이너 개체가 비활성화되면 모든 하위 개체가 비활성화됩니다.

```jsl

//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "", <<Password Style( 1 ), <<Set Width( 20 ), <<Enabled( 0 ) )
		)
	)
);

```

### Get Enabled

**구문:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**설명:** 활성화되지 않은 개체는 키보드 또는 마우스 입력에 응답하지 않습니다. 이 특성은 하위 개체에 상속되므로 컨테이너 개체가 비활성화되면 모든 하위 개체가 비활성화됩니다.

```jsl

//This message applies to all display objects
New Window( "enabled",
	V List Box(
		check = Check Box(
			{"Use Password"},
			ptext << Enabled( check << Get( 1 ) );
			pvalue << Enabled( check << Get( 1 ) );
		),
		Lineup Box( N Col( 2 ),
			Text Box( "Username:" ),
			Text Edit Box( "", <<Set Width( 100 ) ),
			ptext = Text Box( "Password:", <<Enabled( 0 ) ),
			pvalue = Text Edit Box( "", <<Password Style( 1 ), <<Set Width( 20 ), <<Enabled( 0 ) )
		)
	)
);

```

### Get Namespace

**구문:** obj &lt;&lt; Get Namespace

**설명:** 이 표시 개체와 연결된 네임스페이스를 반환합니다.

```jsl

//This message applies to all display objects
x = 1;
w = New Window( "Test", b = Button Box( "Press me" ) );
b:x = 2;
ns = b << GetNamespace();
Show( ns:x, x );

```

### Get Properties

**구문:** obj &lt;&lt; Get Properties

**설명:** 표시 상자의 특성 및 해당 값이 포함된 연관 배열을 반환합니다.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**구문:** obj &lt;&lt; Get Property( "property" )

**설명:** property의 현재 설정을 반환합니다.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**구문:** obj &lt;&lt; Get Property List

**설명:** 표시 상자의 특성 목록을 반환합니다.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**구문:** obj &lt;&lt; Set Property( "property", value )

**설명:** 표시 상자에 대한 property의 값을 설정합니다.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## 연결된 생성자

### Box Plot Seg

**구문:** Box Plot Seg( &lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt; )

**설명:** 전달된 x 및 y 값을 기반으로 한 상자 그림을 나타내는 표시 세그먼트를 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

## 항목 메시지

### Box Style

**구문:** obj &lt;&lt; Box Style( "보통"|"채움"|"줄임" )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Style( "Solid" );

```

### Box Type

**구문:** obj &lt;&lt; Box Type( "분위수"|"이상치" )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Type( "Outlier" );

```

### Child

**구문:** seg2 = obj &lt;&lt; Child

**설명:** 표시 세그먼트의 첫 번째 하위를 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Child; // not many segs support children

```

### Class Name

**구문:** classname = obj &lt;&lt; Class Name

**설명:** 표시 세그먼트에 대한 표시 클래스의 이름을 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Class Name;

```

### Clip Shape

**구문:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**설명:** 지정한 셰이프로 형상을 자릅니다. 셰이프 파일 또는 경로를 사용하여 셰이프를 지정할 수 있습니다. 셰이프 파일과 함께 선택적 ID를 지정하여 파일에서 단일 셰이프를 선택할 수 있습니다. 그렇지 않은 경우 모든 셰이프를 합친 부분이 자르기 영역으로 사용됩니다. 경로 행렬에는 경로의 각 점에 대한 x, y 및 플래그에 해당하는 세 개의 열이 있습니다. 플래그 값은 제어의 경우 0, 이동의 경우 1, 선분의 경우 2, 3차 Bézier 세그먼트의 경우 3이며 점이 경로를 닫는 경우에는 음수입니다. 경로 텍스트는 SVG 구문을 지원합니다.

**JMP추가된 버전:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
Wait( 2 );
cs << Clip Shape( Boundaries( "US States" ) );

```

### Color Theme

**구문:** obj &lt;&lt; Color Theme

### Confidence Diamond

**구문:** obj &lt;&lt; Confidence Diamond( state=0|1 )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Confidence Diamond( 0 );

```

### Delete

**구문:** obj &lt;&lt; Delete

**설명:** 표시 세그먼트를 삭제합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Delete;

```

### Density Gradient

**구문:** obj &lt;&lt; Density Gradient( "흰색까지 점점 흐리게"|"회색까지 점점 흐리게"|"전체 색상"="흰색까지 점점 흐리게" )

**설명:** 밀도 그래디언트의 색상 지정 동작을 설정합니다. 기본값은 "흰색까지 점점 흐리게"입니다.

**JMP추가된 버전:** 15

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**구문:** obj &lt;&lt; Error Bar Cap( "없음"|"작음"|"작게"|"중간"|"크게" )

**설명:** 오차 막대에 사용할 끝 단면의 유형을 지정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Error Bar Cap Shape

**구문:** obj &lt;&lt; Error Bar Cap Shape( begin, end )

**설명:** 오차 막대에 표시할 끝 단면의 셰이프를 지정합니다. 단일 인수로 막대 양쪽 끝의 셰이프를 설정하거나, 시작과 끝에 개별 인수를 제공할 수 있습니다. 기본 셰이프는 "Line"입니다. "Arrow" 셰이프는 바깥쪽을 가리키는 화살표를 그리고 "None"은 끝 단면을 생략합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fences

**구문:** obj &lt;&lt; Fences( state=0|1 )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fences( 0 );

```

### Fill

**구문:** obj &lt;&lt; Fill( state = 0|1 )

**JMP추가된 버전:** 15

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill( 0 );

```

### Fill Color

**구문:** obj &lt;&lt; Fill Color( color )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**구문:** obj &lt;&lt; First Value( state=0|1 )

**JMP추가된 버전:** 16

### Frame

**구문:** FrameBox = obj &lt;&lt; Frame

**설명:** 표시 세그먼트가 있는 프레임 상자를 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Frame;

```

### Get Box Style

**구문:** obj &lt;&lt; Get Box Style

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Box Style();

```

### Get Box Type

**구문:** obj &lt;&lt; Get Box Type

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Box Type();

```

### Get Clip Shape

**구문:** obj &lt;&lt; Get Clip Shape

**설명:** 현재 자르기 셰이프를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );
gb = Graph Builder(
	Size( 653, 396 ),
	Show Control Panel( 0 ),
	Variables( X( :Longitude ), Y( :Latitude ) ),
	Elements( Contour( X, Y, Legend( 2 ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 2 ), Reference Line Order( 3 )}
		)
	)
);
cs = (gb << Report)[FrameBox( 1 )] << Find Seg( Contour Seg( 1 ) );
cs << Clip Shape( Boundaries( "US States" ) );
Wait( 2 );
cs << Get Clip Shape();

```

### Get Confidence Diamond

**구문:** obj &lt;&lt; Get Confidence Diamond

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Confidence Diamond();

```

### Get Density Gradient

**구문:** obj &lt;&lt; Get Density Gradient

**설명:** 밀도 그래디언트의 색상 지정 동작을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Density Gradient;

```

### Get Description

**구문:** description = obj &lt;&lt; Get Description

**설명:** 표시 세그먼트에 대한 설명을 가져옵니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << get description();

```

### Get Error Bar Cap

**구문:** obj &lt;&lt; Get Error Bar Cap

**설명:** 오차 막대의 현재 끝 단면 종류를 반환합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap();

```

### Get Error Bar Cap Shape

**구문:** { begin, end } = obj &lt;&lt; Get Error Bar Cap Shape

**설명:** 오차 막대의 끝 단면 셰이프를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap Shape();

```

### Get Fences

**구문:** obj &lt;&lt; Get Fences

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fences();

```

### Get Fill

**구문:** obj &lt;&lt; Get Fill

**JMP추가된 버전:** 15

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fill;

```

### Get Fill Color

**구문:** obj &lt;&lt; Get Fill Color

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fill Color();

```

### Get Fill Pattern

**구문:** obj &lt;&lt; Get Fill Pattern

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Fill Pattern;

```

### Get Gradient

**구문:** obj &lt;&lt; Get Gradient

**설명:** 색상 그래디언트를 가져옵니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**구문:** obj &lt;&lt; Get Gradient Color Theme

**설명:** 그래디언트 색상 테마를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**구문:** obj &lt;&lt; Get Gradient Discrete Colors

**설명:** 그래디언트의 각 수준을 단일 색상으로 표시할지 아니면 색상을 부드럽게 전환할지를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**구문:** obj &lt;&lt; Get Gradient Fill

**설명:** 그래디언트 척도 범위를 벗어나는 값에 대한 색상 지정 동작을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**구문:** obj &lt;&lt; Get Gradient Label Count

**설명:** 그래디언트 범례의 라벨 수를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**구문:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Label Levels

**설명:** 그래디언트 척도의 라벨에 사용되는 값 집합을 가져옵니다.

**JMP추가된 버전:** 18

#### 예제 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### 예제 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**구문:** obj &lt;&lt; Get Gradient Legend Horizontal

**설명:** 그래디언트 범례를 가로로 표시할지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**구문:** obj &lt;&lt; Get Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**구문:** obj &lt;&lt; Get Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**구문:** obj &lt;&lt; Get Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**구문:** obj &lt;&lt; Get Gradient Level Count

**설명:** 그래디언트의 수준 수를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**구문:** obj &lt;&lt; Get Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 가져옵니다. 결측값은 색상 테마의 원래 값이 사용되었음을 나타냅니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**구문:** obj &lt;&lt; Get Gradient Range

**설명:** 비사용자 그래디언트 척도가 생성되는 범위를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**구문:** obj &lt;&lt; Get Gradient Reverse Color Order

**설명:** 그래디언트의 색상 순서가 반전되었는지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**구문:** obj &lt;&lt; Get Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서가 반전되었는지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**구문:** obj &lt;&lt; Get Gradient Scale

**설명:** 그래디언트 척도 유형을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**구문:** [value1,value1, ... value N] = obj &lt;&lt; Get Gradient Scale Values

**설명:** 그래디언트 척도의 라벨에 사용되는 값 집합을 가져옵니다.

**JMP추가된 버전:** 18

#### 예제 1

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

#### 예제 2

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**구문:** obj &lt;&lt; Get Gradient Show Missing

**설명:** 결측값에 대한 범례 항목을 표시할 시기를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**구문:** obj &lt;&lt; Get Gradient Transparency

**설명:** 그래디언트의 투명도 동작을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**구문:** obj &lt;&lt; Get Interval Draw Directions

**설명:** 구간을 그릴 방향을 가져옵니다.

**JMP추가된 버전:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ), Summary Statistic( "Mean" ), Error Interval( "Standard Deviation" ) )
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg( BarSeg( 1 ), {Set Interval Draw Directions( "Upper" )} )
			}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Interval Draw Directions;

```

### Get Line Color

**구문:** color = obj &lt;&lt; Get Line Color

**설명:** 선 색상을 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Line Color;

```

### Get Line Style

**구문:** pen style = obj &lt;&lt; Get Line Style

**설명:** 선 스타일을 반환합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Line Style;

```

### Get Line Width

**구문:** number = obj &lt;&lt; Get Line Width

**설명:** 선 너비를 반환합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Line Width;

```

### Get Marker

**구문:** marker = obj &lt;&lt; Get Marker

**설명:** 표식 스타일을 반환합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Marker;

```

### Get Marker Size

**구문:** size = obj &lt;&lt; Get Marker Size

**설명:** 표식 크기를 반환합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Marker Size;

```

### Get Median Line Style

**구문:** obj &lt;&lt; Get Median Line Style

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Median Line Style();

```

### Get Moment

**구문:** obj &lt;&lt; Get Moment( "Mean"|"Std Dev"|"Std Err Mean"|"Upper Mean"|"Lower Mean"|"N"|"Sum Wgt"|"Sum"|"Variance"|"Skewness"|"Kurtosis"|"CV"|"N Missing"|"N Zero"|"N Unique"|"Uncorrected SS"|"Corrected SS"|"Autocorrelation"|"Minimum"|"Maximum"|"Median"|"Mode"|"Trimmed Mean"|"Geometric Mean"|"Range"|"Interquartile Range"|"Median Absolute Deviation"|"Proportion Zero"|"Proportion Nonzero"|"K*Std Dev"|"K*Std Dev Above Mean"|"K*Std Dev Below Mean"|"Robust Mean"|"Robust Standard Deviation"|"N Modes"|"Mode Count" )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Moment( "Std Dev" );

```

### Get Notched

**구문:** obj &lt;&lt; Get Notched

**JMP추가된 버전:** 16

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Notched();

```

### Get Quantiles

**구문:** Matrix = obj &lt;&lt; Get Quantiles( number )

**설명:** 계산된 분위수를 나타내는 행렬을 반환합니다. 첫 번째 열에는 계산된 분위수가 나열되고 두 번째 열에는 해당 분위수에 대한 값이 포함됩니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Quantiles;

```

### Get Shortest Half Bracket

**구문:** obj &lt;&lt; Get Shortest Half Bracket

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Shortest Half Bracket();

```

### Get Shortest Half Color

**구문:** obj &lt;&lt; Get Shortest Half Color

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Shortest Half Color();

```

### Get Transparency

**구문:** obj &lt;&lt; Get Transparency

**설명:** 투명도를 나타내는 0(투명) ~ 1(불투명) 범위의 숫자 값을 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Get Transparency;

```

### Gradient

**구문:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**설명:** 색상 그래디언트를 설정합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**구문:** obj &lt;&lt; Gradient Color Theme

**설명:** 그래디언트 색상 테마를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**구문:** obj &lt;&lt; Gradient Discrete Colors

**설명:** 그래디언트의 각 수준을 단일 색상으로 표시할지 아니면 색상을 부드럽게 전환할지를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**구문:** obj &lt;&lt; Gradient Fill( "사이"|"위"|"아래"|"위/아래"="위/아래" )

**설명:** 그래디언트 척도 범위를 벗어나는 값에 대한 색상 지정 동작을 설정합니다. 기본값은 "위/아래"입니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**구문:** obj &lt;&lt; Gradient Label Count

**설명:** 그래디언트 범례의 라벨 수를 설정합니다. 이 값은 등고선 수준 수에 1을 더한 값입니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**구문:** obj &lt;&lt; Gradient Label Levels( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**구문:** obj &lt;&lt; Gradient Legend Horizontal

**설명:** 그래디언트 범례를 가로로 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**구문:** obj &lt;&lt; Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**구문:** obj &lt;&lt; Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**구문:** obj &lt;&lt; Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**구문:** obj &lt;&lt; Gradient Level Count

**설명:** 그래디언트의 수준 수를 설정합니다. 이 값은 라벨 수에서 1을 뺀 값입니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**구문:** obj &lt;&lt; Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 설정합니다. 색상은 이 범위를 포함하도록 척도가 조정됩니다. 결측값은 변경 사항이 없는 것으로 처리됩니다.

**JMP추가된 버전:** 18

#### 예제 1

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### 예제 2

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### 예제 3

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**구문:** obj &lt;&lt; Gradient Range( "기본값"|"정확 데이터 범위"|"가운데 90%"="기본값" )

**설명:** 비사용자 그래디언트 척도가 생성되는 범위를 설정합니다. 기본값은 "기본값"입니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**구문:** obj &lt;&lt; Gradient Reverse Color Order

**설명:** 그래디언트의 색상 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**구문:** obj &lt;&lt; Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**구문:** obj &lt;&lt; Gradient Scale( "선형"|"분위수"|"표준편차"|"로그"|"로그 오프셋"|"사용자 정의"="선형" )

**설명:** 그래디언트 척도 유형을 설정합니다. 기본값은 "선형"입니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**구문:** obj &lt;&lt; Gradient Scale Values( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**구문:** obj &lt;&lt; Gradient Show Missing( "자동"|"켜기"|"끄기"="자동" )

**설명:** 결측값에 대한 범례 항목을 표시할 시기를 설정합니다. 기본값은 "자동"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder( Variables( X( :city ), Y( :POP ), Color( :NO ) ), Elements( Bar( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**구문:** obj &lt;&lt; Gradient Transparency( "없음"|"선형"="선형" )

**설명:** 그래디언트의 투명도 동작을 설정합니다. 기본값은 "선형"입니다.

**JMP추가된 버전:** 15

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Gradient Transparency( "None" );

```

### Last Value

**구문:** obj &lt;&lt; Last Value( state=0|1 )

**JMP추가된 버전:** 16

### Line Color

**구문:** obj &lt;&lt; Line Color( color )

**설명:** 표시 세그먼트에 있는 모든 선의 색상을 설정합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**구문:** obj &lt;&lt; Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**구문:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Width( 3 );

```

### Marker

**구문:** obj &lt;&lt; Marker( marker )

**설명:** 모든 표식의 표식 스타일을 설정합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**구문:** obj &lt;&lt; Marker Size( size )

**설명:** 표식 크기를 설정합니다. 크기 옵션은 점, 작음, 중간, 큼, XL, XXL 및 XXXL입니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**구문:** obj &lt;&lt; Max Value( state=0|1 )

**JMP추가된 버전:** 16

### Median Line Style

**구문:** obj &lt;&lt; Median Line Style( pen style )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Median Line Style( "Dotted" );

```

### Min Value

**구문:** obj &lt;&lt; Min Value( state=0|1 )

**JMP추가된 버전:** 16

### Name

**구문:** obj &lt;&lt; Name( state=0|1 )

**JMP추가된 버전:** 16

### Notched

**구문:** obj &lt;&lt; Notched( state=0|1 )

**JMP추가된 버전:** 16

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Notched( 1 );

```

### Parent

**구문:** seg2 = obj &lt;&lt; Parent

**설명:** 표시 세그먼트의 상위를 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Parent;

```

### Set Box Style

**구문:** obj &lt;&lt; Set Box Style( "보통"|"채움"|"줄임" )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Style( "Solid" );

```

### Set Box Type

**구문:** obj &lt;&lt; Set Box Type( "분위수"|"이상치" )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Box Type( "Outlier" );

```

### Set Confidence Diamond

**구문:** obj &lt;&lt; Set Confidence Diamond( state=0|1 )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Confidence Diamond( 0 );

```

### Set Description

**구문:** obj &lt;&lt; Set Description( description )

**설명:** 표시 세그먼트에 대한 설명을 설정합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**구문:** obj &lt;&lt; Set Error Bar Cap( "없음"|"작음"|"작게"|"중간"|"크게" )

**설명:** 오차 막대에 사용할 끝 단면의 유형을 지정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap( "Large" );

```

### Set Error Bar Cap Shape

**구문:** obj &lt;&lt; Set Error Bar Cap Shape( begin, end )

**설명:** 오차 막대에 표시할 끝 단면의 셰이프를 지정합니다. 단일 인수로 막대 양쪽 끝의 셰이프를 설정하거나, 시작과 끝에 개별 인수를 제공할 수 있습니다. 기본 셰이프는 "Line"입니다. "Arrow" 셰이프는 바깥쪽을 가리키는 화살표를 그리고 "None"은 끝 단면을 생략합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fences

**구문:** obj &lt;&lt; Set Fences( state=0|1 )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fences( 0 );

```

### Set Fill

**구문:** obj &lt;&lt; Set Fill( state = 0|1 )

**JMP추가된 버전:** 15

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill( 0 );

```

### Set Fill Color

**구문:** obj &lt;&lt; Set Fill Color( color )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**구문:** obj &lt;&lt; Set Fill Pattern

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Gradient

**구문:** obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;Contour Levels(num)&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")&gt;, &lt;Gradient Transparency("None"|"Linear")&gt; }obj &lt;&lt; { &lt;Color Theme(theme)&gt;, &lt;Min Lightness(0-1)&gt;, &lt;Max Lightness(0-1)&gt;, &lt;N Labels(num)&gt;, &lt;Show Missing Color("On"|"Off"|"Auto")&gt;, &lt;Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")&gt;, &lt;Scale Values([v1, v2, …])&gt;, &lt;Range Type("Default"|"Exact Data Range"|"Middle 90%")&gt;, &lt;Fill("Between"|"Above"|"Below"|"Above Below")&gt;, &lt;Reverse Gradient(0|1)&gt;, &lt;Reverse Labels(0|1)&gt;, &lt;Discrete Color(0|1)&gt; }, &lt;Label Format(labelFormat)&gt;, &lt;Width(num)&gt;, &lt;Horizontal(0|1)&gt;, &lt;Show Labels(0|1)&gt;

**설명:** 색상 그래디언트를 설정합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**구문:** obj &lt;&lt; Set Gradient Color Theme

**설명:** 그래디언트 색상 테마를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**구문:** obj &lt;&lt; Set Gradient Custom Scale

**설명:** 사용자 척도에 값 목록을 사용하도록 그래디언트를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**구문:** obj &lt;&lt; Set Gradient Discrete Colors

**설명:** 그래디언트의 각 수준을 단일 색상으로 표시할지 아니면 색상을 부드럽게 전환할지를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**구문:** obj &lt;&lt; Set Gradient Fill( "사이"|"위"|"아래"|"위/아래"="위/아래" )

**설명:** 그래디언트 척도 범위를 벗어나는 값에 대한 색상 지정 동작을 설정합니다. 기본값은 "위/아래"입니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**구문:** obj &lt;&lt; Set Gradient Label Count

**설명:** 그래디언트 범례의 라벨 수를 설정합니다. 이 값은 등고선 수준 수에 1을 더한 값입니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**구문:** obj &lt;&lt; Set Gradient Label Levels( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**구문:** obj &lt;&lt; Set Gradient Legend Horizontal

**설명:** 그래디언트 범례를 가로로 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**구문:** obj &lt;&lt; Set Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**구문:** obj &lt;&lt; Set Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**구문:** obj &lt;&lt; Set Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**구문:** obj &lt;&lt; Set Gradient Level Count

**설명:** 그래디언트의 수준 수를 설정합니다. 이 값은 라벨 수에서 1을 뺀 값입니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**구문:** obj &lt;&lt; Set Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 설정합니다. 색상은 이 범위를 포함하도록 척도가 조정됩니다. 결측값은 변경 사항이 없는 것으로 처리됩니다.

**JMP추가된 버전:** 18

#### 예제 1

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

#### 예제 2

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

#### 예제 3

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**구문:** obj &lt;&lt; Set Gradient Range( "기본값"|"정확 데이터 범위"|"가운데 90%"="기본값" )

**설명:** 비사용자 그래디언트 척도가 생성되는 범위를 설정합니다. 기본값은 "기본값"입니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**구문:** obj &lt;&lt; Set Gradient Reverse Color Order

**설명:** 그래디언트의 색상 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**구문:** obj &lt;&lt; Set Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**구문:** obj &lt;&lt; Set Gradient Scale( "선형"|"분위수"|"표준편차"|"로그"|"로그 오프셋"|"사용자 정의"="선형" )

**설명:** 그래디언트 척도 유형을 설정합니다. 기본값은 "선형"입니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**구문:** obj &lt;&lt; Set Gradient Scale Values( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**구문:** obj &lt;&lt; Set Gradient Show Missing( "자동"|"켜기"|"끄기"="자동" )

**설명:** 결측값에 대한 범례 항목을 표시할 시기를 설정합니다. 기본값은 "자동"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder( Variables( X( :city ), Y( :POP ), Color( :NO ) ), Elements( Bar( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Interval Draw Directions

**구문:** obj &lt;&lt; Set Interval Draw Directions( Both|Upper|Lower|None )

**설명:** 구간을 그릴 방향을 설정합니다.

**JMP추가된 버전:** 17

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements(
		Points( X, Y, Legend( 3 ), Summary Statistic( "Mean" ), Error Interval( "Standard Deviation" ) )
	),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{Reference Line Order( 3 ), DispatchSeg( BarSeg( 1 ), {Set Interval Draw Directions( "Upper" )} )
			}
		)
	)
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Interval Draw Directions( "Lower" );

```

### Set Line Color

**구문:** obj &lt;&lt; Set Line Color( color )

**설명:** 표시 세그먼트에 있는 모든 선의 색상을 설정합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**구문:** obj &lt;&lt; Set Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**구문:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**구문:** obj &lt;&lt; Set Marker( marker )

**설명:** 모든 표식의 표식 스타일을 설정합니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**구문:** obj &lt;&lt; Set Marker Size( size )

**설명:** 표식 크기를 설정합니다. 크기 옵션은 점, 작음, 중간, 큼, XL, XXL 및 XXXL입니다.

**JMP추가된 버전:** 14

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Median Line Style

**구문:** obj &lt;&lt; Set Median Line Style( pen style )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Median Line Style( "Dotted" );

```

### Set Notched

**구문:** obj &lt;&lt; Set Notched( state=0|1 )

**JMP추가된 버전:** 16

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Notched( 1 );

```

### Set Shortest Half Bracket

**구문:** obj &lt;&lt; Set Shortest Half Bracket( state = 0|1 )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Bracket( 0 );

```

### Set Shortest Half Color

**구문:** obj &lt;&lt; Set Shortest Half Color( color )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Color( "Green" );

```

### Set Transparency

**구문:** obj &lt;&lt; Set Transparency( number )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Transparency( .3 );

```

### Shortest Half Bracket

**구문:** obj &lt;&lt; Shortest Half Bracket( state = 0|1 )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Bracket( 0 );

```

### Shortest Half Color

**구문:** obj &lt;&lt; Shortest Half Color( color )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Shortest Half Color( "Green" );

```

### Sib

**구문:** seg2 = obj &lt;&lt; Sib

**설명:** 표시 세그먼트의 형제 항을 반환합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Sib;

```

### Sib Append

**구문:** obj &lt;&lt; Sib Append( seg2 )

**설명:** 표시 세그먼트 바로 뒤에 표시 세그먼트를 추가합니다.

```jsl

win = New Window( "World",
	gb = Graph(
		FrameSize( 800, 400 ),
		X Scale( -180, 180 ),
		Y Scale( -90, 90 ),
		<<Background Map( Images( "Simple Earth" ) )
	)
);
imgBox = win[framebox( 1 )];
mapSeg = imgBox << FindSeg( MapSeg( 1 ) );
mapSeg << Transparency( 0.5 );
Try(
	xAxis = gb[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = gb[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
mapSeg << Sib Append( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Sib Prepend

**구문:** obj &lt;&lt; Sib Prepend( seg2 )

**설명:** 표시 세그먼트 바로 앞에 표시 세그먼트를 추가합니다.

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
Try(
	xAxis = g[AxisBox( 2 )];
	xMin = (xAxis << get min);
	xMax = (xAxis << get max);
,
	xMin = 0;
	xMax = 100;
);
yAxis = g[AxisBox( 1 )];
yMin = (yAxis << get min);
yMax = (yAxis << get max);
xval = Matrix( {xmin, xmax} );
yval = Matrix( {ymin, ymax} );
seg << Sib Prepend( Line Seg( xval, yval, <<line color( "Green" ), <<line width( 3 ) ) );

```

### Transparency

**구문:** obj &lt;&lt; Transparency( number )

```jsl

New Window( "Box Plot Seg Example",
	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 100 ), Box Plot Seg( [20, 30, 50, 90] ) )
);
g[AxisBox( 2 )] << delete;
seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));
seg << Set Transparency( .3 );

```

