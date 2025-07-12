# ShapeSeg



## 공유 항목 메시지

### Enabled

**구문:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

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

**구문:** obj << Enabled( state=0|1 );

state = obj << Get Enabled

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

**구문:** obj << Get Namespace

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

**구문:** obj << Get Properties

**설명:** 표시 상자의 특성 및 해당 값이 포함된 연관 배열을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Properties;

```

### Get Property

**구문:** obj << Get Property( "property" )

**설명:** property의 현재 설정을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property( "Enabled" );

```

### Get Property List

**구문:** obj << Get Property List

**설명:** 표시 상자의 특성 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Get Property List;

```

### Set Property

**구문:** obj << Set Property( "property", value )

**설명:** 표시 상자에 대한 property의 값을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

## 연결된 생성자

### Shape Seg

**구문:** ss = Shape Seg( {Path(<path>), ...}, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) > )

**설명:** 셰이프 컬렉션과 함께 표시 세그먼트를 반환합니다. 각 셰이프는 지정한 경로를 따라 스트로크를 그리거나(채우기가 0일 경우) 지정한 경로의 내부를 채웁니다(채우기가 0이 아닐 경우). N x 3 행렬 또는 텍스트 표현을 사용하여 경로를 지정할 수 있습니다. 경로 행렬에는 x, y에 대한 세 개의 열과 경로의 각 점에 대한 플래그가 있습니다. 플래그 값은 제어의 경우 0, 이동의 경우 1, 선분의 경우 2, 3차 Bézier 세그먼트의 경우 3이며 점이 경로를 닫는 경우에는 음수입니다. 경로 텍스트는 SVG 구문을 지원합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

**예제 2**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg(
			{Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )},
			Row States( {Selected State( 1 ), Color State( "red" )} )
		)
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));

```

## 항목 메시지

### Child

**구문:** seg2 = obj << Child

**설명:** 표시 세그먼트의 첫 번째 하위를 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Child; // not many segs support children

```

### Class Name

**구문:** classname = obj << Class Name

**설명:** 표시 세그먼트에 대한 표시 클래스의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Class Name;

```

### Clip Shape

**구문:** seg << Clip Shape(Boundaries(Shape File, [ID(string)]) | Path([string] | [matrix]) | Empty())

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

### Color

**구문:** obj << Color( color )

**설명:** 모든 셰이프의 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Color( "Green" );

```

### Color Theme

**구문:** obj << Color Theme

### Delete

**구문:** obj << Delete

**설명:** 표시 세그먼트를 삭제합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Delete;

```

### Density Gradient

**구문:** obj << Density Gradient( "흰색까지 점점 흐리게"|"회색까지 점점 흐리게"|"전체 색상"="흰색까지 점점 흐리게" )

**설명:** 밀도 그래디언트의 색상 지정 동작을 설정합니다. 기본값은 "흰색까지 점점 흐리게"입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Density Gradient( "Fade to Gray" );

```

### Fill Color

**구문:** obj << Fill Color( color )

**설명:** 모든 셰이프에 대한 채우기 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Green" );

```

### Frame

**구문:** FrameBox = obj << Frame

**설명:** 표시 세그먼트가 있는 프레임 상자를 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Frame;

```

### Get Clip Shape

**구문:** obj << Get Clip Shape

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

### Get Color

**구문:** color = obj << Get Color

**설명:** 셰이프 색상을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Color;

```

### Get Density Gradient

**구문:** obj << Get Density Gradient

**설명:** 밀도 그래디언트의 색상 지정 동작을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Density Gradient;

```

### Get Description

**구문:** description = obj << Get Description

**설명:** 표시 세그먼트에 대한 설명을 가져옵니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << get description();

```

### Get Fill Color

**구문:** obj << Get Fill Color

**설명:** 셰이프의 채우기 색상을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Fill Color;

```

### Get Fill Pattern

**구문:** obj << Get Fill Pattern

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Fill Pattern;

```

### Get Gradient

**구문:** obj << Get Gradient

**설명:** 색상 그래디언트를 가져옵니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**구문:** obj << Get Gradient Color Theme

**설명:** 그래디언트 색상 테마를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**구문:** obj << Get Gradient Discrete Colors

**설명:** 그래디언트의 각 수준을 단일 색상으로 표시할지 아니면 색상을 부드럽게 전환할지를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Discrete Colors;

```

### Get Gradient Fill

**구문:** obj << Get Gradient Fill

**설명:** 그래디언트 척도 범위를 벗어나는 값에 대한 색상 지정 동작을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Fill;

```

### Get Gradient Label Count

**구문:** obj << Get Gradient Label Count

**설명:** 그래디언트 범례의 라벨 수를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Label Count;

```

### Get Gradient Label Levels

**구문:** [value1,value1, ... value N] = obj << Get Gradient Label Levels

**설명:** 그래디언트 척도의 라벨에 사용되는 값 집합을 가져옵니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Legend Horizontal

**구문:** obj << Get Gradient Legend Horizontal

**설명:** 그래디언트 범례를 가로로 표시할지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**구문:** obj << Get Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**구문:** obj << Get Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**구문:** obj << Get Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**구문:** obj << Get Gradient Level Count

**설명:** 그래디언트의 수준 수를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**구문:** obj << Get Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 가져옵니다. 결측값은 색상 테마의 원래 값이 사용되었음을 나타냅니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Lightness Range;

```

### Get Gradient Range

**구문:** obj << Get Gradient Range

**설명:** 비사용자 그래디언트 척도가 생성되는 범위를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Range;

```

### Get Gradient Reverse Color Order

**구문:** obj << Get Gradient Reverse Color Order

**설명:** 그래디언트의 색상 순서가 반전되었는지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**구문:** obj << Get Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서가 반전되었는지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Reverse Label Order;

```

### Get Gradient Scale

**구문:** obj << Get Gradient Scale

**설명:** 그래디언트 척도 유형을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale;

```

### Get Gradient Scale Values

**구문:** [value1,value1, ... value N] = obj << Get Gradient Scale Values

**설명:** 그래디언트 척도의 라벨에 사용되는 값 집합을 가져옵니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Get Gradient Scale Values;

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 100] );
seg << Get Gradient Scale Values;

```

### Get Gradient Show Missing

**구문:** obj << Get Gradient Show Missing

**설명:** 결측값에 대한 범례 항목을 표시할 시기를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**구문:** obj << Get Gradient Transparency

**설명:** 그래디언트의 투명도 동작을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Gradient Transparency;

```

### Get Line Style

**구문:** pen style = obj << Get Line Style

**설명:** 선 스타일을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Line Style;

```

### Get Line Width

**구문:** number = obj << Get Line Width

**설명:** 선 너비를 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Line Width;

```

### Get Transparency

**구문:** obj << Get Transparency

**설명:** 투명도를 나타내는 0 ~ 1 범위의 숫자 값을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Get Transparency;

```

### Gradient

**구문:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**설명:** 색상 그래디언트를 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**구문:** obj << Gradient Color Theme

**설명:** 그래디언트 색상 테마를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Gradient Discrete Colors

**구문:** obj << Gradient Discrete Colors

**설명:** 그래디언트의 각 수준을 단일 색상으로 표시할지 아니면 색상을 부드럽게 전환할지를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Gradient Fill

**구문:** obj << Gradient Fill( "사이"|"위"|"아래"|"위/아래"="위/아래" )

**설명:** 그래디언트 척도 범위를 벗어나는 값에 대한 색상 지정 동작을 설정합니다. 기본값은 "위/아래"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Gradient Label Count

**구문:** obj << Gradient Label Count

**설명:** 그래디언트 범례의 라벨 수를 설정합니다. 이 값은 등고선 수준 수에 1을 더한 값입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Gradient Label Levels

**구문:** obj << Gradient Label Levels( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Legend Horizontal

**구문:** obj << Gradient Legend Horizontal

**설명:** 그래디언트 범례를 가로로 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**구문:** obj << Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**구문:** obj << Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**구문:** obj << Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**구문:** obj << Gradient Level Count

**설명:** 그래디언트의 수준 수를 설정합니다. 이 값은 라벨 수에서 1을 뺀 값입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**구문:** obj << Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 설정합니다. 색상은 이 범위를 포함하도록 척도가 조정됩니다. 결측값은 변경 사항이 없는 것으로 처리됩니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**예제 3**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Gradient Range

**구문:** obj << Gradient Range( "기본값"|"정확 데이터 범위"|"가운데 90%"="기본값" )

**설명:** 비사용자 그래디언트 척도가 생성되는 범위를 설정합니다. 기본값은 "기본값"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Gradient Reverse Color Order

**구문:** obj << Gradient Reverse Color Order

**설명:** 그래디언트의 색상 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**구문:** obj << Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Gradient Scale

**구문:** obj << Gradient Scale( "선형"|"분위수"|"표준편차"|"로그"|"로그 오프셋"|"사용자 정의"="선형" )

**설명:** 그래디언트 척도 유형을 설정합니다. 기본값은 "선형"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Gradient Scale Values

**구문:** obj << Gradient Scale Values( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Gradient Show Missing

**구문:** obj << Gradient Show Missing( "자동"|"켜기"|"끄기"="자동" )

**설명:** 결측값에 대한 범례 항목을 표시할 시기를 설정합니다. 기본값은 "자동"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder( Variables( X( :city ), Y( :POP ), Color( :NO ) ), Elements( Bar( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Gradient Transparency

**구문:** obj << Gradient Transparency( "없음"|"선형"="선형" )

**설명:** 그래디언트의 투명도 동작을 설정합니다. 기본값은 "선형"입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Gradient Transparency( "None" );

```

### Line Style

**구문:** obj << Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**구문:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Parent

**구문:** seg2 = obj << Parent

**설명:** 표시 세그먼트의 상위를 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Parent;

```

### Revert

**구문:** obj << Revert

**설명:** 세그먼트를 다시 원래 상태로 변경합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
Wait( 1 );
seg << Set Color( "Red" );
Wait( 1 );
seg << Revert;

```

### Set Color

**구문:** obj << Set Color( color )

**설명:** 모든 셰이프의 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Color( "Green" );

```

### Set Description

**구문:** obj << Set Description( description )

**설명:** 표시 세그먼트에 대한 설명을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << set description( "my seg" );

```

### Set Fill Color

**구문:** obj << Set Fill Color( color )

**설명:** 모든 셰이프에 대한 채우기 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**구문:** obj << Set Fill Pattern

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Fill Color( "Blue" );
seg << Set Fill Pattern( "h wave medium" );

```

### Set Gradient

**구문:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**설명:** 색상 그래디언트를 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**구문:** obj << Set Gradient Color Theme

**설명:** 그래디언트 색상 테마를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**구문:** obj << Set Gradient Custom Scale

**설명:** 사용자 척도에 값 목록을 사용하도록 그래디언트를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Custom Scale( {0.0, 5.0, 10.0, 20.0} );

```

### Set Gradient Discrete Colors

**구문:** obj << Set Gradient Discrete Colors

**설명:** 그래디언트의 각 수준을 단일 색상으로 표시할지 아니면 색상을 부드럽게 전환할지를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Points( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Marker Seg( 1 ) );
seg << Set Gradient Discrete Colors( 1 );

```

### Set Gradient Fill

**구문:** obj << Set Gradient Fill( "사이"|"위"|"아래"|"위/아래"="위/아래" )

**설명:** 그래디언트 척도 범위를 벗어나는 값에 대한 색상 지정 동작을 설정합니다. 기본값은 "위/아래"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Middle 90%" );
seg << Set Gradient Fill( "Between" );

```

### Set Gradient Label Count

**구문:** obj << Set Gradient Label Count

**설명:** 그래디언트 범례의 라벨 수를 설정합니다. 이 값은 등고선 수준 수에 1을 더한 값입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Label Count( 8 );

```

### Set Gradient Label Levels

**구문:** obj << Set Gradient Label Levels( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Legend Horizontal

**구문:** obj << Set Gradient Legend Horizontal

**설명:** 그래디언트 범례를 가로로 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**구문:** obj << Set Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**구문:** obj << Set Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**구문:** obj << Set Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**구문:** obj << Set Gradient Level Count

**설명:** 그래디언트의 수준 수를 설정합니다. 이 값은 라벨 수에서 1을 뺀 값입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**구문:** obj << Set Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 설정합니다. 색상은 이 범위를 포함하도록 척도가 조정됩니다. 결측값은 변경 사항이 없는 것으로 처리됩니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**예제 3**

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Lightness Range( ., 0.75 );

```

### Set Gradient Range

**구문:** obj << Set Gradient Range( "기본값"|"정확 데이터 범위"|"가운데 90%"="기본값" )

**설명:** 비사용자 그래디언트 척도가 생성되는 범위를 설정합니다. 기본값은 "기본값"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Range( "Exact Data Range" );

```

### Set Gradient Reverse Color Order

**구문:** obj << Set Gradient Reverse Color Order

**설명:** 그래디언트의 색상 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**구문:** obj << Set Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Gradient Reverse Label Order( 1 );

```

### Set Gradient Scale

**구문:** obj << Set Gradient Scale( "선형"|"분위수"|"표준편차"|"로그"|"로그 오프셋"|"사용자 정의"="선형" )

**설명:** 그래디언트 척도 유형을 설정합니다. 기본값은 "선형"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale( "Quantile" );

```

### Set Gradient Scale Values

**구문:** obj << Set Gradient Scale Values( [value1,value1, ... value N] )

**설명:** 그래디언트 척도에 사용할 사용자 값 집합을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Little Pond.jmp" );
gb = Graph Builder( Variables( X( :X ), Y( :Y ), Color( :Z ) ), Elements( Contour( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Contour Seg( 1 ) );
seg << Set Gradient Scale Values( [-10.0, 0.0, 10.0] );

```

### Set Gradient Show Missing

**구문:** obj << Set Gradient Show Missing( "자동"|"켜기"|"끄기"="자동" )

**설명:** 결측값에 대한 범례 항목을 표시할 시기를 설정합니다. 기본값은 "자동"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
gb = Graph Builder( Variables( X( :city ), Y( :POP ), Color( :NO ) ), Elements( Bar( X, Y ) ) );
frame = (gb << Report)[FrameBox( 1 )];
seg = frame << Find Seg( Bar Seg( 1 ) );
seg << Set Gradient Show Missing( "Off" );

```

### Set Label Offset

**구문:** obj << Set Label Offset {Index, Longitude, Latitude}, ...

**설명:** 지정한 좌표에 따라 행 라벨을 배치합니다.

**JMP추가된 버전:** 16

### Set Line Style

**구문:** obj << Set Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**구문:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Line Width( 3 );

```

### Set Transparency

**구문:** obj << Set Transparency( number )

**설명:** 셰이프 투명도를 설정합니다. 인수는 0에서 1 사이의 숫자 값이어야 합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Transparency( .3 );

```

### Sib

**구문:** seg2 = obj << Sib

**설명:** 표시 세그먼트의 형제 항을 반환합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Sib;

```

### Sib Append

**구문:** obj << Sib Append( seg2 )

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

**구문:** obj << Sib Prepend( seg2 )

**설명:** 표시 세그먼트 바로 앞에 표시 세그먼트를 추가합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
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

**구문:** obj << Transparency( number )

**설명:** 셰이프 투명도를 설정합니다. 인수는 0에서 1 사이의 숫자 값이어야 합니다.

```jsl

Names Default To Here( 1 );
New Window( "Shape Seg Example",
	g = Graph Box(
		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )
	)
);
frame = g[Frame Box( 1 )];
seg = (frame << Find Seg( Shape Seg( 1 ) ));
seg << Set Transparency( .3 );

```

