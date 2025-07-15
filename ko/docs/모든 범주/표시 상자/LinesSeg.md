# LinesSeg



## 공유 항목 메시지

### Enabled

**구문:** obj &lt;&lt; Enabled( state=0|1 );state = obj &lt;&lt; Get Enabled

**설명:** 활성화되지 않은 개체는 키보드 또는 마우스 입력에 응답하지 않습니다. 이 특성은 하위 개체에 상속되므로 컨테이너 개체가 비활성화되면 모든 하위 개체가 비활성화됩니다.

```jsl

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**구문:** obj &lt;&lt; Get Property( "property" )

**설명:** property의 현재 설정을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**구문:** obj &lt;&lt; Get Property List

**설명:** 표시 상자의 특성 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**구문:** obj &lt;&lt; Set Property( "property", value )

**설명:** 표시 상자에 대한 property의 값을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## 연결된 생성자

### Lines Seg

**구문:** ls = Lines Seg([x1 y1 x2 y2,...])

**설명:** 지정한 x 및 y 값에 대해 일련의 선분을 사용하여 표시 세그먼트를 생성합니다. 선택적 인수인 두 번째 인수를 사용하면 데이터 테이블(dt)에서 또는 독립적으로 행 상태를 할당할 수 있습니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));

```

## 항목 메시지

### Child

**구문:** seg2 = obj &lt;&lt; Child

**설명:** 표시 세그먼트의 첫 번째 하위를 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**구문:** classname = obj &lt;&lt; Class Name

**설명:** 표시 세그먼트에 대한 표시 클래스의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**구문:** seg &lt;&lt; Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

**설명:** 지정한 셰이프로 형상을 자릅니다. 셰이프 파일 또는 경로를 사용하여 셰이프를 지정할 수 있습니다. 셰이프 파일과 함께 선택적 ID를 지정하여 파일에서 단일 셰이프를 선택할 수 있습니다. 그렇지 않은 경우 모든 셰이프를 합친 부분이 자르기 영역으로 사용됩니다. 경로 행렬에는 경로의 각 점에 대한 x, y 및 플래그에 해당하는 세 개의 열이 있습니다. 플래그 값은 제어의 경우 0, 이동의 경우 1, 선분의 경우 2, 3차 Bézier 세그먼트의 경우 3이며 점이 경로를 닫는 경우에는 음수입니다. 경로 텍스트는 SVG 구문을 지원합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

### Delete

**구문:** obj &lt;&lt; Delete

**설명:** 표시 세그먼트를 삭제합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Delete;

```

### First Value

**구문:** obj &lt;&lt; First Value( state=0|1 )

**JMP추가된 버전:** 16

### Frame

**구문:** FrameBox = obj &lt;&lt; Frame

**설명:** 표시 세그먼트가 있는 프레임 상자를 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Frame;

```

### Get Clip Shape

**구문:** obj &lt;&lt; Get Clip Shape

**설명:** 현재 자르기 셰이프를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

### Get Connected

**구문:** 0|1 = obj &lt;&lt; Get Connected

**설명:** 표시 세그먼트에 모든 선분의 연결 상태를 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Connected;

```

### Get Description

**구문:** description = obj &lt;&lt; Get Description

**설명:** 표시 세그먼트에 대한 설명을 가져옵니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << get description();

```

### Get Line

**구문:** [x1 y1 x2 y2] = obj &lt;&lt; Get Line( index )

**설명:** 지정된 선의 X 및 Y 좌표를 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line( 2 );

```

### Get Line Color

**구문:** color = obj &lt;&lt; Get Line Color

**설명:** 선 색상을 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Color;

```

### Get Line Count

**구문:** Number = obj &lt;&lt; Get Line Count

**설명:** 표시 세그먼트에 선의 수를 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Count;

```

### Get Line Style

**구문:** pen style = obj &lt;&lt; Get Line Style

**설명:** 선 스타일을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**구문:** number = obj &lt;&lt; Get Line Width

**설명:** 선 너비를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Line Width;

```

### Get Lines

**구문:** [x1 y1 x2 y2, ...] = obj &lt;&lt; Get Lines

**설명:** 모든 선에 대한 X 및 Y 좌표 값을 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Get Lines;

```

### Last Value

**구문:** obj &lt;&lt; Last Value( state=0|1 )

**JMP추가된 버전:** 16

### Line Color

**구문:** obj &lt;&lt; Line Color( color )

**설명:** 표시 세그먼트에 있는 모든 선의 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Line Style

**구문:** obj &lt;&lt; Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**구문:** obj &lt;&lt; Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Max Value

**구문:** obj &lt;&lt; Max Value( state=0|1 )

**JMP추가된 버전:** 16

### Min Value

**구문:** obj &lt;&lt; Min Value( state=0|1 )

**JMP추가된 버전:** 16

### Name

**구문:** obj &lt;&lt; Name( state=0|1 )

**JMP추가된 버전:** 16

### Parent

**구문:** seg2 = obj &lt;&lt; Parent

**설명:** 표시 세그먼트의 상위를 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Parent;

```

### Set Connected

**구문:** obj &lt;&lt; Set Connected( state=0|1 )

**설명:** 표시 세그먼트의 모든 선분에 대한 연결 상태를 설정합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Connected( 1 );

```

### Set Description

**구문:** obj &lt;&lt; Set Description( description )

**설명:** 표시 세그먼트에 대한 설명을 설정합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Line Color

**구문:** obj &lt;&lt; Set Line Color( color )

**설명:** 표시 세그먼트에 있는 모든 선의 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**구문:** obj &lt;&lt; Set Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**구문:** obj &lt;&lt; Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Sib

**구문:** seg2 = obj &lt;&lt; Sib

**설명:** 표시 세그먼트의 형제 항을 반환합니다.

```jsl

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**구문:** obj &lt;&lt; Sib Append( seg2 )

**설명:** 표시 세그먼트 바로 뒤에 표시 세그먼트를 추가합니다.

```jsl

Names Default To Here( 1 );
Names Default To Here( 1 );
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

Names Default To Here( 1 );
lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];
New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );
frame = g[FrameBox( 1 )];
seg = (frame << Find Seg( Lines Seg( 1 ) ));
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

