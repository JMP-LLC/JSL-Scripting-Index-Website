# BarSeg



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

### Bar Seg

**구문:** Bar Seg( x, y, < Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) >, < Sizes( s ) > )

**설명:** 요약 데이터를 막대로 나타내는 세그먼트를 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));

```

## 항목 메시지

### Child

**구문:** seg2 = obj << Child

**설명:** 표시 세그먼트의 첫 번째 하위를 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Child; // not many segs support children

```

### Class Name

**구문:** classname = obj << Class Name

**설명:** 표시 세그먼트에 대한 표시 클래스의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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

### Color Theme

**구문:** obj << Color Theme

### Delete

**구문:** obj << Delete

**설명:** 표시 세그먼트를 삭제합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Delete;

```

### Density Gradient

**구문:** obj << Density Gradient( "흰색까지 점점 흐리게"|"회색까지 점점 흐리게"|"전체 색상"="흰색까지 점점 흐리게" )

**설명:** 밀도 그래디언트의 색상 지정 동작을 설정합니다. 기본값은 "흰색까지 점점 흐리게"입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Density Gradient( "Fade to Gray" );

```

### Error Bar Cap

**구문:** obj << Error Bar Cap( "없음"|"작음"|"작게"|"중간"|"크게" )

**설명:** 오차 막대에 사용할 끝 단면의 유형을 지정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

**구문:** obj << Error Bar Cap Shape( begin, end )

**설명:** 오차 막대에 표시할 끝 단면의 셰이프를 지정합니다. 단일 인수로 막대 양쪽 끝의 셰이프를 설정하거나, 시작과 끝에 개별 인수를 제공할 수 있습니다. 기본 셰이프는 "Line"입니다. "Arrow" 셰이프는 바깥쪽을 가리키는 화살표를 그리고 "None"은 끝 단면을 생략합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Fill Color

**구문:** obj << Fill Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Color( "Green" );

```

### First Value

**구문:** obj << First Value( state=0|1 )

**JMP추가된 버전:** 16

### Frame

**구문:** FrameBox = obj << Frame

**설명:** 표시 세그먼트가 있는 프레임 상자를 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Frame;

```

### Get Base Font

**구문:** font = obj << Get Base Font

**설명:** 상자에 그려진 텍스트에 사용되는 기본 글꼴을 반환합니다. 기본 글꼴은 Title, Text, Annotation 등 글꼴 환경 설정에 지정된 사전 정의된 이름입니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Base Font;

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

### Get Density Gradient

**구문:** obj << Get Density Gradient

**설명:** 밀도 그래디언트의 색상 지정 동작을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Density Gradient;

```

### Get Description

**구문:** description = obj << Get Description

**설명:** 표시 세그먼트에 대한 설명을 가져옵니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << get description();

```

### Get Error Bar Cap

**구문:** obj << Get Error Bar Cap

**설명:** 오차 막대의 현재 끝 단면 종류를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

**구문:** { begin, end } = obj << Get Error Bar Cap Shape

**설명:** 오차 막대의 끝 단면 셰이프를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Error Bar Cap Shape();

```

### Get Fill Color

**구문:** color = obj << Get Fill Color

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Fill Color;

```

### Get Fill Pattern

**구문:** obj << Get Fill Pattern

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Fill Pattern;

```

### Get Font

**구문:** obj << Get Font

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font;

```

### Get Font Name

**구문:** obj << Get Font Name

**설명:** 글꼴 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Times New Roman" );
fontobj << Get Font Name;

```

### Get Font Scale

**구문:** obj << Get Font Scale

**설명:** 글꼴의 현재 배율을 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font Scale;

```

### Get Font Size

**구문:** obj << Get Font Size

**설명:** 글꼴 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Get Font Size;

```

### Get Font Style

**구문:** obj << Get Font Style

**설명:** 글꼴 스타일 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Arial" );
fontobj << Set Font Style( "Italic" );
fontobj << Get Font Style;

```

### Get Gradient

**구문:** obj << Get Gradient

**설명:** 색상 그래디언트를 가져옵니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient;

```

### Get Gradient Color Theme

**구문:** obj << Get Gradient Color Theme

**설명:** 그래디언트 색상 테마를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Color Theme;

```

### Get Gradient Discrete Colors

**구문:** obj << Get Gradient Discrete Colors

**설명:** 그래디언트의 각 수준을 단일 색상으로 표시할지 아니면 색상을 부드럽게 전환할지를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Horizontal;

```

### Get Gradient Legend Label Format

**구문:** obj << Get Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Label Format;

```

### Get Gradient Legend Label Width

**구문:** obj << Get Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Label Width;

```

### Get Gradient Legend Show Labels

**구문:** obj << Get Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Legend Show Labels;

```

### Get Gradient Level Count

**구문:** obj << Get Gradient Level Count

**설명:** 그래디언트의 수준 수를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Levels;

```

### Get Gradient Lightness Range

**구문:** obj << Get Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 가져옵니다. 결측값은 색상 테마의 원래 값이 사용되었음을 나타냅니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Reverse Color Order;

```

### Get Gradient Reverse Label Order

**구문:** obj << Get Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서가 반전되었는지 여부를 가져옵니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Show Missing;

```

### Get Gradient Transparency

**구문:** obj << Get Gradient Transparency

**설명:** 그래디언트의 투명도 동작을 가져옵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Gradient Transparency;

```

### Get Interval Draw Directions

**구문:** obj << Get Interval Draw Directions

**설명:** 구간을 그릴 방향을 가져옵니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
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

**구문:** color = obj << Get Line Color

**설명:** 선 색상을 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Color;

```

### Get Line Style

**구문:** pen style = obj << Get Line Style

**설명:** 선 스타일을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Style;

```

### Get Line Width

**구문:** number = obj << Get Line Width

**설명:** 선 너비를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Line Width;

```

### Get Marker

**구문:** marker = obj << Get Marker

**설명:** 표식 스타일을 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Marker;

```

### Get Marker Size

**구문:** size = obj << Get Marker Size

**설명:** 표식 크기를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Marker Size;

```

### Get Side by Side Overlap

**구문:** proportion = obj << Get Side by Side Overlap

**설명:** "나란히" 막대 스타일에서 하위 항목에 대한 중첩 크기를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ), Overlay( :sex ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Side by Side Overlap();

```

### Get Text Color

**구문:** obj << Get Text Color

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Text Color;

```

### Get Text Style

**구문:** obj << Get Text Style

**설명:** 커서 펜과 관련하여 텍스트를 그리는 방법을 가져옵니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Get Text Style;

```

### Get Transparency

**구문:** obj << Get Transparency

**설명:** 투명도를 나타내는 0(투명) ~ 1(불투명) 범위의 숫자 값을 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Transparency;

```

### Get Width Proportion

**구문:** proportion = obj << Get Width Proportion

**설명:** 그리기에 사용할 사용 가능한 막대 너비의 비율을 반환합니다. 0은 자동 크기를 의미하고 1은 간격 없음을 의미합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Get Width Proportion();

```

### Gradient

**구문:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**설명:** 색상 그래디언트를 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Gradient Color Theme

**구문:** obj << Gradient Color Theme

**설명:** 그래디언트 색상 테마를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Gradient Legend Label Format

**구문:** obj << Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Gradient Legend Label Width

**구문:** obj << Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Gradient Legend Show Labels

**구문:** obj << Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Gradient Level Count

**구문:** obj << Gradient Level Count

**설명:** 그래디언트의 수준 수를 설정합니다. 이 값은 라벨 수에서 1을 뺀 값입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Levels( 7 );

```

### Gradient Lightness Range

**구문:** obj << Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 설정합니다. 색상은 이 범위를 포함하도록 척도가 조정됩니다. 결측값은 변경 사항이 없는 것으로 처리됩니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Gradient Reverse Label Order

**구문:** obj << Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Gradient Transparency( "None" );

```

### Last Value

**구문:** obj << Last Value( state=0|1 )

**JMP추가된 버전:** 16

### Line Color

**구문:** obj << Line Color( color )

**설명:** 표시 세그먼트에 있는 모든 선의 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Color( "Green" );

```

### Line Style

**구문:** obj << Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Style( "Dotted" );

```

### Line Width

**구문:** obj << Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Width( 3 );

```

### Marker

**구문:** obj << Marker( marker )

**설명:** 모든 표식의 표식 스타일을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );

```

### Marker Size

**구문:** obj << Marker Size( size )

**설명:** 표식 크기를 설정합니다. 크기 옵션은 점, 작음, 중간, 큼, XL, XXL 및 XXXL입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Max Value

**구문:** obj << Max Value( state=0|1 )

**JMP추가된 버전:** 16

### Min Value

**구문:** obj << Min Value( state=0|1 )

**JMP추가된 버전:** 16

### Name

**구문:** obj << Name( state=0|1 )

**JMP추가된 버전:** 16

### Parent

**구문:** seg2 = obj << Parent

**설명:** 표시 세그먼트의 상위를 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Parent;

```

### Revert

**구문:** obj << Revert

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Revert;

```

### Set Base Font

**구문:** obj << Set Base Font( "텍스트"|"머리글"|"제목"|"작게"|"모노"|"계산식 편집기"|"주석"|"축"|"표식"|"축 제목"|"그래프 라벨"|"범례"|"그래프 제목"|"캡션"|"데이터 테이블"|"가리키기 라벨" )

**설명:** 상자에 의해 그려진 텍스트에 대한 기본 글꼴을 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
Wait( 2 );
fontobj << Set Base Font( "Title" );

```

### Set Description

**구문:** obj << Set Description( description )

**설명:** 표시 세그먼트에 대한 설명을 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << set description( "my seg" );

```

### Set Error Bar Cap

**구문:** obj << Set Error Bar Cap( "없음"|"작음"|"작게"|"중간"|"크게" )

**설명:** 오차 막대에 사용할 끝 단면의 유형을 지정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
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

**구문:** obj << Set Error Bar Cap Shape( begin, end )

**설명:** 오차 막대에 표시할 끝 단면의 셰이프를 지정합니다. 단일 인수로 막대 양쪽 끝의 셰이프를 설정하거나, 시작과 끝에 개별 인수를 제공할 수 있습니다. 기본 셰이프는 "Line"입니다. "Arrow" 셰이프는 바깥쪽을 가리키는 화살표를 그리고 "None"은 끝 단면을 생략합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :Age ), Y( :Height ) ),
	Elements( Line( X, Y, Legend( 4 ), Error Bars( "Range" ) ) ), 

);
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Error Bar Cap Shape( "Line", "Arrow" );

```

### Set Fill Color

**구문:** obj << Set Fill Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Color( "Green" );

```

### Set Fill Pattern

**구문:** obj << Set Fill Pattern

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Fill Pattern( "h wave medium" );

```

### Set Font

**구문:** obj << Set Font( fontName, <size>, <"bold italic underline strikeout">, <angle> )

**예제 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font( "Arial Black" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font( "Arial Black", 12, "Italic Underline" );

```

### Set Font Name

**구문:** obj << Set Font Name( fontname )

**설명:** 텍스트 문자열의 글꼴을 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Name( "Arial Black" );

```

### Set Font Scale

**구문:** obj << Set Font Scale( f )

**설명:** 현재 글꼴의 배율을 설정합니다. 배율은 기본 글꼴 및 포인트 크기를 기준으로 결정되는 크기에 적용됩니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
Wait( 2 );
fontobj << Set Font Scale( 2.0 );

```

### Set Font Size

**구문:** obj << Set Font Size( n )

**설명:** 텍스트 문자열의 글꼴 크기(포인트)를 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Size( 14 );

```

### Set Font Style

**구문:** obj << Set Font Style( style )

**설명:** 텍스트 문자열에 대한 글꼴 스타일을 설정합니다. 한 번에 둘 이상의 스타일을 설정하려면 공백으로 구분하여 동일한 문자열에 배치하십시오(아래 예제 2 참조).

**예제 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Style( "Italic" );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
fontobj << Set Font Style( "Italic Bold Underline" );

```

### Set Gradient

**구문:** obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <Contour Levels(num)>, <Reverse Gradient(0|1)>, <Density Gradient("Fade To White"|"Fade To Gray"|"Full Color")>, <Gradient Transparency("None"|"Linear")> }

obj << { <Color Theme(theme)>, <Min Lightness(0-1)>, <Max Lightness(0-1)>, <N Labels(num)>, <Show Missing Color("On"|"Off"|"Auto")>, <Scale Type("Linear"|"Quantile"|"Standard Deviation"|"Log"|"Log Offset"|"Custom")>, <Scale Values([v1, v2, …])>, <Range Type("Default"|"Exact Data Range"|"Middle 90%")>, <Fill("Between"|"Above"|"Below"|"Above Below")>, <Reverse Gradient(0|1)>, <Reverse Labels(0|1)>, <Discrete Color(0|1)> }, <Label Format(labelFormat)>, <Width(num)>, <Horizontal(0|1)>, <Show Labels(0|1)>

**설명:** 색상 그래디언트를 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient( {Color Theme( "Viridis" ), N Labels( 7 )} );

```

### Set Gradient Color Theme

**구문:** obj << Set Gradient Color Theme

**설명:** 그래디언트 색상 테마를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Color Theme( "Viridis" );

```

### Set Gradient Custom Scale

**구문:** obj << Set Gradient Custom Scale

**설명:** 사용자 척도에 값 목록을 사용하도록 그래디언트를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Horizontal( 1 );

```

### Set Gradient Legend Label Format

**구문:** obj << Set Gradient Legend Label Format

**설명:** 그래디언트 범례 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Format( "Fixed Dec", 6, 3 );

```

### Set Gradient Legend Label Width

**구문:** obj << Set Gradient Legend Label Width

**설명:** 그래디언트 범례 라벨의 최대 문자 길이를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Label Width( 4 );

```

### Set Gradient Legend Show Labels

**구문:** obj << Set Gradient Legend Show Labels

**설명:** 그래디언트 범례에 수준 라벨을 표시할지 여부를 설정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Legend Show Labels( 0 );

```

### Set Gradient Level Count

**구문:** obj << Set Gradient Level Count

**설명:** 그래디언트의 수준 수를 설정합니다. 이 값은 라벨 수에서 1을 뺀 값입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Levels( 7 );

```

### Set Gradient Lightness Range

**구문:** obj << Set Gradient Lightness Range

**설명:** 그래디언트의 수준 색상에 대한 최소 및 최대 밝기를 설정합니다. 색상은 이 범위를 포함하도록 척도가 조정됩니다. 결측값은 변경 사항이 없는 것으로 처리됩니다.

**JMP추가된 버전:** 18

**예제 1**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( Min( 0.25 ), Max( 0.75 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Lightness Range( 0.25, 0.75 );

```

**예제 3**

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Gradient Reverse Color Order( 1 );

```

### Set Gradient Reverse Label Order

**구문:** obj << Set Gradient Reverse Label Order

**설명:** 그래디언트의 라벨 순서를 역순으로 바꿉니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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

### Set Interval Draw Directions

**구문:** obj << Set Interval Draw Directions( Both|Upper|Lower|None )

**설명:** 구간을 그릴 방향을 설정합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
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

### Set Label Offset

**구문:** Set Label Offset {Bar Index, X Scale Coordinate, Y Scale Coordinate}

**설명:** 막대 값 라벨의 오프셋을 그래프의 좌표로 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Legend( 9 ), Label( "Label by Value" ) ) ),
	SendToReport(
		Dispatch( {}, "Graph Builder", FrameBox,
			{DispatchSeg(
				BarSeg( 1 ),
				{Set Label Offset( {0, 0.394409937888199, 112.5685} ),
				Set Label Offset( {1, 1.2639751552795, 110.634333333333} ),
				Set Label Offset( {2, 2.14596273291925, 111.794833333333} ),
				Set Label Offset( {3, 3.12732919254658, 116.05} ),
				Set Label Offset( {4, 4.17080745341615, 127.268166666667} )}
			)}
		)
	)
);

```

### Set Line Color

**구문:** obj << Set Line Color( color )

**설명:** 표시 세그먼트에 있는 모든 선의 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Color( "Green" );

```

### Set Line Style

**구문:** obj << Set Line Style( pen style )

**설명:** 선 스타일을 설정합니다. 옵션은 실선, 점선, 파선, 일점 쇄선 및 이점 쇄선입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Style( "Dotted" );

```

### Set Line Width

**구문:** obj << Set Line Width( "1"|"2"|"3"|"4"|"5"|"6"|"기타..." )

**설명:** 선 너비를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Line Width( 3 );

```

### Set Marker

**구문:** obj << Set Marker( marker )

**설명:** 모든 표식의 표식 스타일을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );

```

### Set Marker Size

**구문:** obj << Set Marker Size( size )

**설명:** 표식 크기를 설정합니다. 크기 옵션은 점, 작음, 중간, 큼, XL, XXL 및 XXXL입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Marker( "Square" );
seg << Set Marker Size( "XL" );

```

### Set Side by Side Overlap

**구문:** obj << Set Side by Side Overlap( proportion or missing )

**설명:** "나란히" 막대 스타일에서 하위 항목에 대한 중첩 크기를 설정합니다. 0(중첩 없음) ~ 1(전체 중첩)

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ), Overlay( :sex ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Side by Side Overlap( 0.5 );

```

### Set Text Color

**구문:** obj << Set Text Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Text Color( "Green" );

```

### Set Text Style

**구문:** obj << Set Text Style( [왼쪽|중심|오른쪽], [위쪽|세로 가운데|기준|아래쪽], [지워짐], [박스 처리됨] )

**설명:** 커서 펜과 관련하여 텍스트를 그리는 방법을 설정합니다. 지원될 경우 "지워짐"은 텍스트의 경계 상자를 채우고 "지워짐"은 외곽선을 그립니다. 지정하지 않을 경우 기본 가로 맞춤은 "왼쪽"이고 세로 맞춤은 "기준"입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Set Transparency

**구문:** obj << Set Transparency( number )

**설명:** 셰이프 투명도를 설정합니다. 인수는 0에서 1 사이의 숫자 값이어야 합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Transparency( .3 );

```

### Set Width Proportion

**구문:** obj << Set Width Proportion( proportion )

**설명:** 그리기에 사용할 사용 가능한 막대 너비의 비율을 설정합니다. 0은 자동 크기를 의미하고 1은 간격 없음을 의미합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );
frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Width Proportion( 1 );

```

### Sib

**구문:** seg2 = obj << Sib

**설명:** 표시 세그먼트의 형제 항을 반환합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
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

### Text Color

**구문:** obj << Text Color( color )

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Text Color( "Green" );

```

### Text Style

**구문:** obj << Text Style( [왼쪽|중심|오른쪽], [위쪽|세로 가운데|기준|아래쪽], [지워짐], [박스 처리됨] )

**설명:** 커서 펜과 관련하여 텍스트를 그리는 방법을 설정합니다. 지원될 경우 "지워짐"은 텍스트의 경계 상자를 채우고 "지워짐"은 외곽선을 그립니다. 지정하지 않을 경우 기본 가로 맞춤은 "왼쪽"이고 세로 맞춤은 "기준"입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 5 ), Equation( 1 ) ) )
);

frame = Report( obj )[FrameBox( 1 )];
seg = (frame << Find Seg( “Text Seg” ));
seg << Set Text Style( {Center, VCenter} );

```

### Transparency

**구문:** obj << Transparency( number )

**설명:** 셰이프 투명도를 설정합니다. 인수는 0에서 1 사이의 숫자 값이어야 합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Graph Builder(
	Variables( X( :age ), Y( :weight ) ),
	Elements( Bar( X, Y, Label( "Label by Value" ) ) )
);
frame = Report( obj )[FrameBox( 1 )];
fontobj = seg = (frame << Find Seg( "Bar Seg" ));
seg << Set Transparency( .3 );

```

