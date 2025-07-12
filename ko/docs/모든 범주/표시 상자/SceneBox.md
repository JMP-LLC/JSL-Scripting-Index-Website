# SceneBox



## 공유 항목 메시지

### Add Line Annotation

**구문:** obj << Add Line Annotation

**설명:** 표시 상자 위쪽에 선을 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**구문:** obj << Add Pin Annotation

**설명:** 표시 상자 위쪽에 고정된 주석을 추가합니다. 대부분의 속성(예: Index Row, UniqueID 및 FoundPt)은 내부에서만 사용하도록 되어 있습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :weight ),
	X( :height ),
	SendToReport(
		Dispatch( {}, "Bivar Plot", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 17 ),
				Index Row( 17 ),
				UniqueID( -960001792 ),
				FoundPt( {238, 219} ),
				Origin( {64.9765625, 142} ),
				Offset( {-174, -40} ),
				Tag Line( 1 ),
				Font( "Helvetica", 11, "Plain" )
			)
		)
	)
);

```

### Add Polygon Annotation

**구문:** obj << Add Polygon Annotation

**설명:** 표시 상자 위쪽에 다각형을 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Polygon Annotation(
	Points( {210, 80}, {230, 70}, {280, 115}, {240, 120} ),
	Color( "Red" ),
	Closed( 1 )
);

```

### Add Simple Shape Annotation

**구문:** obj << Add Simple Shape Annotation

**설명:** 표시 상자 위쪽에 원 모양을 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**구문:** obj << Add Text Annotation

**설명:** 표시 상자 위쪽에 텍스트를 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);

```

### Append

**구문:** obj << Append( db2 )

**설명:** 표시 트리에서 db 뒤에 db2를 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Border

**구문:** obj << Border( sides );

sides = obj << Get Border

**설명:** 테두리는 표시 상자 바깥쪽을 둘러싸는 실선입니다. 값을 하나만 제공하면 모든 변에 적용되고, 값을 두 개 지정하면 가로 및 세로 테두리에 적용됩니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Border Color

**구문:** obj << Border Color( color );

color = obj << Get Border Color

**설명:** 상자 테두리의 기본 색상을 재정의하는 선택적 색상입니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Bring Window To Front

**구문:** obj << Bring Window To Front

**설명:** 창을 맨 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**구문:** obj << Child

**설명:** 표시 상자의 하위 항목을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
axisChild = axisParent << child();
Print( axisChild << Class Name() );

```

### Class Name

**구문:** obj << Class Name

**설명:** 표시 상자에 대한 표시 클래스의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**구문:** obj << Clone Box

**설명:** 표시 상자의 새 복사본을 만듭니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**구문:** obj << Close Window( <"NoSave"> )

**설명:** 창을 닫습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**구문:** obj << Copy Data

**설명:** 행렬 또는 테이블로부터 탭으로 구분된 데이터를 클립보드에 복사합니다.

```jsl

Names Default To Here( 1 );
New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**구문:** obj << Copy Graph

**설명:** 그래프 및 축을 그림으로 클립보드에 복사합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**구문:** obj << Copy Picture

**설명:** 표시 상자 그림을 클립보드에 저장합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**구문:** obj << Delete Box

**설명:** 표시 상자를 삭제합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**구문:** obj << Deselect

**설명:** 편집 메뉴 명령에서 사용할 수 있도록 이 개체를 선택 취소합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
selected = 0;
New Window( "Example",
	ex = Button Box( "Press Me",
		selected = !selected;
		refresh;
	)
);
refresh = Function( {},
	If( selected,
		ex << Select,
		ex << Deselect
	)
);

```

### Dispatch

**구문:** obj << Dispatch( {outline node, ...}, display element, display element type, command )

**설명:** command를 표시 트리의 특정 부분으로 전송합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

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

### Find

**구문:** obj << Find

**설명:** 지정된 argument를 가진 표시 상자를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**구문:** obj << Get Annotation

**설명:** 이 표시 상자에 고정된 첫 번째 주석을 반환합니다. 결과에 Sib()를 사용하여 다른 주석에 액세스할 수 있습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Text Annotation(
	Text( "We need to discuss this at the next meeting." ),
	Text Box( {65, 35, 200, 77} )
);
annotation = rbiv << Get Annotation;
annotation << delete;

```

### Get Border

**구문:** obj << Border( sides );

sides = obj << Get Border

**설명:** 테두리는 표시 상자 바깥쪽을 둘러싸는 실선입니다. 값을 하나만 제공하면 모든 변에 적용되고, 값을 두 개 지정하면 가로 및 세로 테두리에 적용됩니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Border );
Wait( 1 );
tb << Border( 1 );

```

### Get Border Color

**구문:** obj << Border Color( color );

color = obj << Get Border Color

**설명:** 상자 테두리의 기본 색상을 재정의하는 선택적 색상입니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Wait( 2 );
tb << Border( 1 );
tb << Border Color( "Light Red" );

```

### Get Content Size

**구문:** obj << Get Content Size

**설명:** 창 안의 내용 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**구문:** obj << Get Display Path( parent box, <receiver expr>, <Mode("XPath"|"Subscript")> )

**설명:** parent box와 obj 간 탐색을 위해 비교적 로버스트한 표현식을 가져옵니다. 이 경로는 전체 JMP 릴리스에서 안정적인 것은 아닙니다. receiver expr은 출력 표현식이 제공된 경우 여기에 포함됩니다. 그렇지 않은 경우 parent box에 제공된 표현식이 대신 사용됩니다. 예에서 볼 수 있듯이 이 메시지는 주로 이미 사용 가능한 경로의 강건성을 높이는 데 유용합니다. XPath 모드가 기본값입니다.

**기본**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

**서브스크립트 모드**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

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

### Get HTML

**구문:** obj << Get HTML( <format> )

**설명:** 표시 상자에 대한 HTML 소스가 포함된 문자열을 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

**예제 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**구문:** width = obj << Get Height

**설명:** 표시 상자의 높이를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**구문:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**설명:** 가로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Get Journal

**구문:** obj << Get Journal

**설명:** 표시 상자에 대한 저널 소스가 포함된 문자열을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**구문:** obj << Margin( sides );

sides = obj << Get Margin

**설명:** 여백은 상자 테두리와 인접 상자 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 여백에 적용됩니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Max Size

**구문:** width,height = obj << Get Max Size

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최대 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**구문:** width,height = obj << Get Min Size

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최소 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

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

### Get On Close

**구문:** obj << Get On Close

**설명:** 창을 닫을 때 실행되는 스크립트 또는 함수를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	// Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);
Show( w << Get On Close );

```

### Get Padding

**구문:** obj << Padding( sides );

sides = obj << Get Padding

**설명:** 안쪽 여백은 상자 내용과 테두리 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 안쪽 여백에 적용됩니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Get Page Setup

**구문:** obj << Get Page Setup

**설명:** PDF에 대한 페이지 설정 정보를 가져옵니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**구문:** obj << Get Picture( <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**설명:** db를 이미지 개체로 캡처합니다. 선택적 Scale 인수는 이미지를 배율이 조정된 해상도로 렌더링합니다. 배율을 조정하려면 표시 상자를 늘릴 수 있어야 합니다. Type 인수는 결과가 확장 가능한 벡터 이미지인지 아니면 비트맵인지 결정합니다. 기본적으로 PDF와 같은 벡터 형식으로 저장하는 데 적합한 확장 가능 이미지가 반환됩니다. View 옵션은 일부 상자의 동작을 변경합니다. "Picture"(기본값) 옵션은 스크롤된 영역이 전체 표시된 상태에서 이미지 형식으로 내보내는 것처럼 보고서를 그립니다. "Screen" 보기 모드는 보고서를 화면에 표시된 대로 그리고, "Print"는 페이지 설정 기능 없이 인쇄할 때처럼 보고서를 그립니다. SubRect 옵션은 전체 이미지가 아니라 결과 이미지의 일부를 캡처합니다. Appearance 옵션은 "Default" 출력 색상에서 화면에 표시된 "Current" 색상으로 변경할 수 있습니다. View, SubRect 및 Appearance 옵션은 Type "Bitmap"에만 지원됩니다.

**기본값**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

**보기 및 모양**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example",
	H List Box(
		rbiv << Get Picture( View( "Screen" ), Appearance( "Current" ) ),
		rbiv << Get Picture( View( "Print" ), Appearance( "Default" ) )
	)
);

```

**척도**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

### Get Project

**구문:** project = obj << Get Project()

**설명:** 창의 상위 프로젝트 또는 Empty()(프로젝트에 없는 경우)를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

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

### Get RTF

**구문:** obj << Get RTF( <format> )

**설명:** 표시 상자에 대한 RTF 소스가 포함된 문자열을 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

**예제 2**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**구문:** rs = obj << Get Row States( <dt> )

**설명:** 지정된 데이터 테이블 또는 현재 데이터 테이블의 모든 행에 대한 행 상태를 포함하는 벡터를 반환합니다. 행 상태는 테이블에서 가져오거나, 상자의 필터 컨텍스트에서 가져올 수 있습니다.

**Single table**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Get Show Window

**구문:** obj << Get Show Window

**설명:** 창 표시 여부를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**구문:** width,height = obj << Get Size

**설명:** 표시 상자의 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**구문:** x,y = obj << Get Stretch

**설명:** 이 표시 상자에 대한 가로 및 세로 방향의 늘이기 플래그를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		spacer = Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);
spacer << Get Stretch();

```

### Get Text

**구문:** obj << Get Text

**설명:** 표시 상자의 텍스트가 포함된 문자열을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**구문:** obj << Text Color( color );

color = obj << Get Text Color

**설명:** 텍스트 색상이 설정되어 있으면 해당 색상을 사용하여 텍스트를 그립니다. 특성이 설정되어 있지 않으면 포함하는 상자의 텍스트 색상을 상속합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Get UI Only

**구문:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Get Vertical Alignment

**구문:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**설명:** 세로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Get Visibility

**구문:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**설명:** 표시 여부는 상자 표시 여부 및 상자가 공간을 차지하는지 여부를 결정합니다. 기본값 "Visible"은 개체가 표시된다는 것을 의미합니다. "Hidden" 상자는 표시되지는 않아도 공간을 차지하는 반면 "Collapsed" 상자는 레이아웃에서 공간을 차지하지 않습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Get Web Support

**구문:** obj << Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Window Icon

**구문:** obj << Get Window Icon

**설명:** 창 아이콘을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**구문:** obj << Get Window Position

**설명:** 창 위치를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**구문:** obj << Get Window Size

**설명:** 창 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**구문:** obj << Get Window Title

**설명:** 창 제목을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**구문:** obj << Get Window View

**설명:** 현재 창 보기를 반환합니다. 창은 "Visible"(표시), "Invisible"(숨김) 또는 "Private"(비공개)일 수 있습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**구문:** obj << Get XML( <English(0|1)>, <NoData(0|1)> )

**설명:** XML 형식의 표시 트리를 가져옵니다. 기본적으로 문자열은 로컬 언어로 반환되고 XML에는 일부 상자 내의 데이터 값이 포함됩니다. 가능한 경우 영어 문자열을 반환하려면 English 옵션을 사용합니다. 상자 내의 데이터 값을 생략하려면 NoData 옵션을 사용합니다. 이러한 값은 일부 표시 트리의 경우 매우 클 수 있습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**구문:** x,y = obj << GetOffset

**설명:** 상위 상자를 기준으로 이 표시 상자의 오프셋을 반환합니다. 여러 개의 오프셋을 누적하려면 루프에 <<parent 메시지를 사용해야 합니다.

```jsl

Names Default To Here( 1 );
New Window( "example",
	MouseBox(
		Graph Box(
			title( "title" ),
			Pen Size( 3 );
			Y Function( -3 + 100 / 2 * (1 + Sin( (2 * Pi() * (x + .3)) / 100 )), x );
		),
		<<settrackenable( 1 ) // put the mouse box to work, watching "tracking"
	,
		<<settrack( // events from the mouse (movement, with button up or down)
			Function( {this, pt}, // parameters: this is the mousebox, pt is mouse x,y
				{fb, offset, t, off, size}, // local variables
				// recalulate offset and size each time, the values can change
				fb = this[framebox( 1 )]; // the framebox in the graph 
				offset = [0, 0]; // accumulator to sum up the offset between framebox and mousebox
				t = fb; // a temporary box that starts at the frame 
				While( t != this, // and walks up to the mousebox
					off = t << getOffset; // ask each box for its offset to the immediate parent
					offset += Matrix( off ); // convert list answer to matrix so + will work
					t = t << parent; // crawl up to the mousebox, one box at a time
				);
				size = Matrix( fb << getSize ); // the frame knows its size
				If( // over the frame box
					offset[1] < pt[1] < offset[1] + size[1] & offset[2] < pt[2] < offset[2] + size[2]
				,
					fb << setbackgroundcolor( "red" ),
					fb << setbackgroundcolor( "blue" )
				);
			)
		)
	)
);

```

### Horizontal Alignment

**구문:** obj << Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );

"Default"|"Left"|"Center"|"Right" = obj << Get Horizontal Alignment

**설명:** 가로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Border( 1 );
Wait( 2 );
lb << Horizontal Alignment( "Right" );

```

### Inval

**구문:** obj << Inval

**설명:** 표시 상자를 무효화합니다. <<UpdateWindow 메시지가 전송되거나 운영 체제에 업데이트 시간이 있는 경우 창이 업데이트됩니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Inval example",
	Button Box( "red",
		color = "red";
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	),
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change 
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	),
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Is Dirty

**구문:** obj << Is Dirty

**설명:** 문서의 수정된 상태를 가져옵니다. 1은 문서가 수정되었음을 의미하며 저장 여부를 묻습니다. 0은 문서가 수정되지 않았음을 의미합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**구문:** obj << Is Modal Dialog

**설명:** 창이 모달 대화상자이면 true를 반환합니다. 창 처리기 콜백에서 호출한 경우에만 유용합니다.

```jsl

Names Default To Here( 1 );
With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**구문:** obj << Journal

**설명:** 표시 상자에서 저널을 생성합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**구문:** obj << Journal Window

**설명:** 창의 저널 창을 엽니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**구문:** obj << Launch

**설명:** 지정된 argument를 표시 상자의 컨텍스트에서 실행합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "example",
	ob1 = Outline Box( "treemap launcher" ),
	ob2 = Outline Box( "bivariate partial" ),
	ob3 = Outline Box( "bivariate launched" )
);
ob1 << launch( Treemap() );
ob2 << launch( Bivariate( Y( :height ) ) );
ob3 << launch( Bivariate( Y( :height ), X( :weight ) ) );

```

### Make RowState Handler

**구문:** rs = obj << Make RowState Handler( <dt>, function(a) )

**설명:** 지정된 데이터 테이블 또는 현재 데이터 테이블에 대한 행 상태 처리기를 생성합니다. 이 함수는 상자의 필터 컨텍스트에서 행 상태가 변경되면 호출됩니다. 함수의 인수는 변경된 행 번호를 보유하거나, 행 상태 필터가 변경된 경우 -1을 보유합니다.

**Single table**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	Data Filter Context Box(
		H List Box(
			dt << Data Filter(
				Local,
				Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
				Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
			),
			V List Box(
				t = Text Box( "0 Rows Excluded" ),
				Distribution(
					Continuous Distribution( Column( :weight ) ),
					Nominal Distribution( Column( :age ) )
				)
			)
		)
	)
);
updatetext = Function( {},
	rs = t << Get Row States( dt );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = t << Make Row State Handler( dt, rsupdate );
updatetext();

```

**Where subset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "filter test",
	t = Text Box( "0 Rows Excluded" ),
	dist = Distribution(
		Continuous Distribution( Column( :weight ) ),
		Nominal Distribution( Column( :age ) ),
		Local Data Filter(
			Add Filter( columns( :height ), Where( :height >= 51 & :height <= 62 ) ),
			Mode( Select( 0 ), Show( 1 ), Include( 1 ) )
		),
		Where( :sex == "F" )
	)
);
subset = dist << Get Data Table();
updatetext = Function( {},
	rs = Report( dist ) << Get Row States( subset );
	n = 0;
	For( ii = 1, ii <= N Rows( rs ), ii++,
		If( Excluded( As Row State( rs[ii] ) ),
			n
			++)
	);
	t << Set Text( Char( n ) || " Rows Excluded" );
);
rsupdate = Function( {a},
	If( Is Matrix( a ),
		updatetext()
	)
);
rsh = Report( dist ) << Make Row State Handler( subset, rsupdate );
updatetext();

```

### Margin

**구문:** obj << Margin( sides );

sides = obj << Get Margin

**설명:** 여백은 상자 테두리와 인접 상자 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 여백에 적용됩니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Margin );
tb << Border( 1 );
Wait( 2 );
tb << Margin( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Maximize Window

**구문:** obj << Maximize Window( <state=0|1> )

**설명:** 창을 최대화합니다. 기본 인수는 1입니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**구문:** obj << Minimize Window( <state=0|1> )

**설명:** 창을 최소화합니다. 기본 인수는 1입니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**구문:** obj << Move Window( x,y )

**설명:** 창을 지정된 위치로 이동합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**구문:** obj << Next

**설명:** 이 표시 상자 뒤의 표시 상자를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**구문:** obj << On Close( script )

**설명:** 창을 닫을 때 실행할 스크립트 또는 함수를 설정합니다. 이 스크립트는 닫기를 허용하려면 1을 반환하고, 창이 닫히지 않게 하려면 0을 반환해야 합니다.

**닫기 스크립트**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
    // Modal dialogs return Button(1) if OK is pressed, Button(-1) if canceled
	New Window( "Are you sure?",
		<<modal,
		V List Box(
			Text Box( "Press OK to allow the window to close" ),
			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
		)
	)["button"] == 1
);

```

**닫기 함수**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << On Close(
	Function( {this}, 
        // Modal dialogs return Button(1) if OK is pressed, Button(-1) if cancelled
		New Window( "Are you sure?",
			<<modal,
			V List Box(
				Text Box( "Press OK to allow " || (this << Get Window Title) || " to close" ),
				H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )
			)
		)["button"] == 1
	)
);

```

### Optimize Display

**구문:** obj << Optimize Display

**설명:** 데이터 테이블의 열 너비 및 창을 최적 크기로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**구문:** obj << Pad Window( bool )

**설명:** 창 안쪽 여백을 설정 또는 해제합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**구문:** obj << Padding( sides );

sides = obj << Get Padding

**설명:** 안쪽 여백은 상자 내용과 테두리 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 안쪽 여백에 적용됩니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Padding );
tb << Border( 1 );
Wait( 1 );
tb << Padding( Left( 20 ), Top( 20 ), Right( 20 ), Bottom( 20 ) );

```

### Page Break

**구문:** obj << Page Break

**설명:** 표시 상자 앞에 페이지 구분을 삽입합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	ob = Outline Box( "Outline Box",
		V List Box(
			ob2 = Outline Box( "Outline Box 2",
				H List Box( Text Edit Box( "Top Left" ), Text Edit Box( "Top Right" ) )
			),
			ob3 = Outline Box( "Outline Box",
				H List Box( Text Edit Box( "Bottom Left" ), Text Edit Box( "Bottom Right" ) )
			)
		)
	)
);
ob3 << Page Break;

```

### Parent

**구문:** obj << Parent

**설명:** 이 표시 상자의 상위 항목을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**구문:** obj << Prepend( db2 )

**설명:** 표시 트리에서 db 앞에 db2를 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**구문:** obj << Prev Sib

**설명:** 표시 상자의 이전 형제 항목을 반환합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**구문:** obj << Print Window

**설명:** 창을 인쇄합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**구문:** obj << Reshow

**설명:** 표시 상자를 무효화하고 창을 새 내용으로 업데이트합니다. 업데이트 시기에 대한 추가 제어가 필요한 경우 <<Inval 및 <<UpdateWindow 메시지를 참조하십시오.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "Reshow example",
	Button Box( "red",
		color = "red";
		g << reshow/* tell the graph that something changed */;
	),
	Button Box( "blue",
		color = "blue";
		g << reshow/* tell the graph that something changed */;
	),
	g = Graph Box(/* the graph does NOT watch for the color variable to change
                     but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);

```

### Save Capture

**구문:** obj << Save Capture( <"path">, <format>, <Add Sibling(n)> )

**설명:** 표시 상자의 화면 캡처를 지정된 path에 저장합니다. path를 제공하지 않으면 다른 이름으로 저장 창이 나타납니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**구문:** obj << Save HTML( <pathname>, <format> )

**설명:** HTML 소스를 지정된 format의 그래픽을 포함하는 폴더와 함께 저장합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**구문:** obj << Save Interactive HTML( <pathname>, <Boolean> )

**설명:** 데이터가 포함된 대화식 HTML을 파일에 저장합니다. Boolean 인수는 보고서가 정적임을 나타냅니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**구문:** obj << Save Journal( <pathname> )

**설명:** 표시 상자에 대한 저널 소스를 저장합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**구문:** obj << Save MSWord( <pathname>, <format> )

**설명:** 표시 상자를 Microsoft Word 문서로 저장합니다(Windows만 해당).

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**구문:** obj << Save PDF( <pathname>, <Show Page Setup(0|1)>, <Portrait(0|1)> )

**설명:** 표시 상자의 PDF를 저장합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**구문:** obj << Save Picture( <pathname>, <format>, <Scale(factor)>, <Type("Bitmap" | "Scalable")>, <View("Picture" | "Screen" | "Print"), <Appearance("Default" | "Current")>, <SubRect(Left(number), Top(number), Right(number), Bottom(number))> )

**설명:** 표시 상자 그림을 저장합니다. 지원되는 형식은 EMF(Windows), PICT(Macintosh), JPEG, JPG, GIF 또는 PNG입니다. 선택적 Scale 인수는 이미지를 배율이 조정된 해상도로 렌더링합니다. 배율을 조정하려면 표시 상자를 늘릴 수 있어야 합니다. Type 인수는 결과가 확장 가능한 벡터 이미지인지 아니면 비트맵인지 결정합니다. 기본적으로 PDF와 같은 벡터 형식으로 저장하는 데 적합한 확장 가능 이미지가 반환됩니다. View 옵션은 일부 상자의 동작을 변경합니다. "Picture"(기본값) 옵션은 스크롤된 영역이 전체 표시된 상태에서 이미지 형식으로 내보내는 것처럼 보고서를 그립니다. "Screen" 보기 모드는 보고서를 화면에 표시된 대로 그리고, "Print"는 페이지 설정 기능 없이 인쇄할 때처럼 보고서를 그립니다. SubRect 옵션은 전체 이미지가 아니라 결과 이미지의 일부를 캡처합니다. Appearance 옵션은 "Default" 출력 색상에서 화면에 표시된 "Current" 색상으로 변경할 수 있습니다. View, SubRect 및 Appearance 옵션은 Type "Bitmap"에만 지원됩니다.

**기본값**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

**보기 및 모양**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate(
	Y( :weight ),
	X( :height ),
	Fit Line( {Line Color( {212, 73, 88} )} ),
	Fit Polynomial( 3, {Line Color( {61, 174, 70} )} ),
	Kernel Smoother( 1, 1, 0.5, 0 )
);
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example_screen.png", "png", View( "Screen" ), Appearance( "Current" ) );
rbiv << Save Picture( "$TEMP/jmp_example_print.png", "png", View( "Print" ), Appearance( "Default" ) );
New Window( "Example",
	H List Box( New Image( "$TEMP/jmp_example_screen.png" ), New Image( "$TEMP/jmp_example_print.png" ) )
);

```

**척도**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

### Save Presentation

**구문:** obj << Save Presentation( "filename.pptx", <Template("path\to\my_template.pptx")>, <Insert(Begin|End|#) | Replace(Begin|End|#) | Append>, <Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)>, <"EMF"|"PNG"|"JPG"|"Native"> )

**설명:** 표시 상자 테이블 및 그래프 슬라이드를 프레젠테이션에 저장합니다. 프레젠테이션은 Microsoft PowerPoint나 기타 프레젠테이션 소프트웨어에서 열 수 있습니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**구문:** obj << Save RTF( <pathname>, <format> )

**설명:** RTF 소스를 지정된 format의 그래픽과 함께 저장합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**구문:** obj << Save Text( <pathname>, <format> )

**설명:** 표시 상자의 텍스트가 포함된 파일을 저장합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**구문:** obj << Save Window Report( pathname, <embed data(0|1)> )

**설명:** 현재 보고서 창을 JMP 보고서 파일(.jrp)에 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**구문:** obj << Scroll Window( DisplayBox | <Relative(<v> | <h>,<v>)> | <Absolute(<v> | <h>,<v>) )

**설명:** 창 스크롤 막대를 조정하여 지정된 표시 상자를 보기 영역으로 가져오거나, 상대 픽셀 수로 스크롤하거나, 절대 픽셀 위치로 스크롤합니다. 픽셀 수 대신 "Start" 또는 "End" 키워드를 사용할 수 있습니다.

**Absolute**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Absolute( "End", "End" ) );
Wait( 1 );
fm << scroll window( Absolute( 0, 300 ) );
Wait( 1 );

```

**Box**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
For( i = 1, i <= 5, i++, // repeatedly, bring each frame box into view for 1/2 second
	fm << scroll window( Report( fm )[framebox( 2 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 3 )] );
	Wait( .5 );
	fm << scroll window( Report( fm )[framebox( 1 )] );
	Wait( .5 );
);

```

**Relative**

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
fm = Fit Model(
	Y( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W, :BP 6W, :BP 8F, :BP 12F, :BP 6F ),
	Effects( :Subject, :Dose ),
	Personality( "Manova" ),
	Run
);
fm << setwindowsize( 600, 600 ); // shrink the window
fm << scroll window( Relative( 300 ) );
Wait( 1 );
fm << scroll window( Relative( -50 ) );
Wait( 1 );
fm << scroll window( Relative( "Start" ) );
Wait( 1 );

```

### Select

**구문:** obj << Select

**설명:** 편집 메뉴 명령에서 사용할 수 있도록 이 개체를 선택합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**구문:** obj << Set Content Size( x,y )

**설명:** 창 안의 내용 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Test",
	lb = List Box( {"a", "b", "c", "d"} ),
	Button Box( "Enable 2nd item",
		lb << enable item( 2, 1 );
		Show( lb << item enabled( 2 ) );
	),
	Button Box( "Disable 2nd item",
		lb << enable item( 2, 0 );
		Show( lb << item enabled( 2 ) );
	)
);
Wait( 2 );
w << Set Content Size( 400, 300 );

```

### Set Dirty

**구문:** obj << Set Dirty

**설명:** 문서의 수정된 상태를 설정합니다. 0은 저장 여부를 묻지 않고 1은 저장 여부를 묻습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**구문:** obj << Set Height( width )

**설명:** 표시 상자의 높이를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**구문:** obj << Set Main Window

**설명:** 창을 JMP의 주 창으로 설정하고 이전 주 창을 일반 창으로 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**구문:** obj << Set Max Size( width,height )

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최대 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**구문:** obj << Set Min Size( width,height )

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최소 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**구문:** obj << Set Page Setup( <margins(left, top, right, bottom)>, <scale(s)>, <portrait(0|1)>, <paper size(p)>, <Table of Contents(always, never, default)>  )

**설명:** pdf로 저장하거나 인쇄하는 동안 사용되는 페이지 설정 정보를 지정합니다. 필요한 경우 개요 상자에서 목차를 생성할 수도 있습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Outline Box( "TOC", Text Box( "Page Setup Test" ) ) );
w << Set page setup(
	margins( 1, 1, 1, 1 ),
	scale( 1 ),
	portrait( 1 ),
	paper size( "Letter" ),
	Table of Contents( "always" )
);
w << Save pdf( "$DOCUMENTS\test.pdf" );

```

### Set Print Footers

**구문:** obj << Set Print Footers( left footer, center footer, right header )

**설명:** 인쇄된 출력에 대한 왼쪽, 가운데 및 오른쪽 바닥글을 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**구문:** obj << Set Print Headers( left header, center header, right header )

**설명:** 인쇄된 출력에 대한 왼쪽, 가운데 및 오른쪽 머리글을 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**구문:** obj << Set Property( "property", value )

**설명:** 표시 상자에 대한 property의 값을 설정합니다.

```jsl

Names Default To Here( 1 );
New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**구문:** obj << Set Report Title( "string" )

**설명:** 보고서 제목을 변경합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**구문:** obj << Set Stretch( x,y )

**설명:** 상자의 가로 및 세로 늘이기 동작을 설정합니다. Window와 함께 늘어나는 상자는 창 또는 분할 도구 크기가 변경되면 크기가 조정됩니다. Fill을 위해 늘어나는 상자는 컨테이너의 사용 가능한 공간을 채우기 위해 늘어납니다. 일반적으로 늘이기 설정이 Off인 상자는 늘어나지 않습니다. 대부분의 상자는 Neutral을 기본값으로 설정하며, 이는 하위 상자를 기준으로 동작을 결정한다는 의미입니다.

**JMP추가된 버전:** 16

**창과 함께 늘이기**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Example",
	H List Box(
		tv = Text Box( "V+V", <<rotate text( left ) ),
		V List Box(
			Text Box( "resize the containing window" ),
			th = Text Box( "H+H" ),
			ts = Spacer Box( <<Size( 10, 30 ), <<Color( "blue" ) )
		)
	)
);
tv << Vertical Alignment( "Center" );
th << Horizontal Alignment( "Center" );
th << Set Stretch( "Window", "Off" );
ts << Set Min Size( 5, 20 );
ts << Set Max Size( 100000, 100 );
ts << Set Stretch( "Window", "Window" );

```

**채우기 위해 늘이기**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

### Set Summary Behavior

**구문:** obj << Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**설명:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**구문:** obj << Set Width( width )

**설명:** 표시 상자의 너비를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**구문:** obj << Set Window Icon( icon name )

**설명:** 창 아이콘을 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**구문:** obj << Set Window Size( x,y )

**설명:** 창 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**구문:** obj << Set Window Title( "string" )

**설명:** 창 제목을 변경합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**구문:** obj << Show Properties

**설명:** 표시 상자에 대한 특성 편집기를 표시합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**구문:** obj << Show Tree Structure

**설명:** 표시 상자의 계층적 트리 구조 및 관련 노드를 표시합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**구문:** obj << Show Window( state=0|1 )

**설명:** 창을 표시하거나 숨깁니다. 창을 임시로 숨길 때 유용합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**구문:** obj << Sib

**설명:** 표시 상자의 형제 항목을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**구문:** obj << Sib Append( Display box, Horizontal|Vertical )

**설명:** 이 표시 상자 바로 뒤에 표시 상자를 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append( Text Box( "============ after ==============", Rotate Text( "Right" ) ), "Horizontal" );
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**구문:** obj << Sib Prepend( Display box, Horizontal|Vertical )

**설명:** 이 표시 상자 바로 앞에 표시 상자를 추가합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << sib prepend(
	Text Box( "    ============ before ==============", Rotate Text( "Right" ) ),
	"Horizontal"
);
fb << sib prepend( Text Box( "=== above ===" ), "Vertical" );

```

### Size Window

**구문:** obj << Size Window( x,y )

**설명:** 창 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**구문:** obj << Text Color( color );

color = obj << Get Text Color

**설명:** 텍스트 색상이 설정되어 있으면 해당 색상을 사용하여 텍스트를 그립니다. 특성이 설정되어 있지 않으면 포함하는 상자의 텍스트 색상을 상속합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Text Color );
Wait( 2 );
tb << Text Color( "Red" );

```

### Top Parent

**구문:** obj << Top Parent

**설명:** 이 표시 상자의 루트 상위 항목을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**구문:** obj << UI Only( state=0|1 );

state = obj << Get UI Only

### Update Window

**구문:** obj << Update Window

**설명:** 무효화된 영역이 있는 경우 표시 상자가 포함된 창을 업데이트합니다. <<Inval 메시지는 무효화된 영역을 생성합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
color = "green"; /* initial color in a variable */
New Window( "UpdateWindow example",
	Button Box( "red",
		color = "red";
        // try commenting out each of the 4 lines that follow, run the script,
		// click the buttons, and resize the windows (for example) to force a
		// redraw.  All 4 lines are important, though the last two may be
		// slightly different on Windows and Mac OSs.
		g1 << inval; /* tell the oval to redraw */
		g2 << inval; /* tell the rectangle to redraw */
		g1 << updateWindow; /* tell the oval window to update immediately */
		g2 << updateWindow; /* tell the rect window to update immediately */
		// this is a busy-wait to help demonstrate the various behaviors...
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 /* delay without wait(.5) */ );
	),
	Button Box( "blue",
		color = "blue";
		g1 << inval; /* same comments */
		g2 << inval;
		g1 << updateWindow;
		g2 << updateWindow;
		x = Tick Seconds();
		While( Tick Seconds() - x < .5, 0 );
	)
);
New Window( "oval",
	g1 = Graph Box(/* the graph does NOT watch for the color variable to change
                      but will use the current value of color when it reshows */
		Fill Color( color );
		Oval( 10, 80, 70, 50, 1 );
	)
);
New Window( "rect",
	g2 = Graph Box(
		Fill Color( color );
		Rect( 10, 80, 70, 50, 1 );
	)
);

```

### Vertical Alignment

**구문:** obj << Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );

"Default"|"Top"|"Center"|"Bottom" = obj << Get Vertical Alignment

**설명:** 세로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
lb = r[List Box( 6 )];
lb << Set Horizontal( 1 );
lb = r[List Box( 7 )];
lb << Border( 1 );
Wait( 2 );
lb << Vertical Alignment( "Bottom" );

```

### Visibility

**구문:** obj << Visibility( "Visible"|"Hidden"|"Collapse" );

"Visible"|"Hidden"|"Collapse" = obj << Get Visibility

**설명:** 표시 여부는 상자 표시 여부 및 상자가 공간을 차지하는지 여부를 결정합니다. 기본값 "Visible"은 개체가 표시된다는 것을 의미합니다. "Hidden" 상자는 표시되지는 않아도 공간을 차지하는 반면 "Collapsed" 상자는 레이아웃에서 공간을 차지하지 않습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Visibility );
Wait( 1 );
tb << Visibility( "Collapse" );
Show( tb << Get Visibility );

```

### Window Class Name

**구문:** obj << Window Class Name

**설명:** 표시 상자에 대한 창 클래스의 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**구문:** obj << XPath( XPath expression, <English(0|1)>, <NoData(0|1)> )

**설명:** 표시 트리의 XML 표현에 XPath 표현식을 적용하고 결과를 반환합니다. 기본적으로 문자열은 로컬 언어로 반환되고 XML에는 일부 상자 내의 데이터 값이 포함됩니다. 가능한 경우 영어 문자열을 반환하려면 English 옵션을 사용합니다. 상자 내의 데이터 값을 생략하려면 NoData 옵션을 사용합니다. 쿼리가 상자 속성만 기반으로 할 때 이렇게 하면 성능에 유용합니다.

**Attributes**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

**Box type**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

**Child box**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) << Make Into Data Table;

```

**Data**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) << Text Color( "Green" );

```

**Display Seg**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

**Text**

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**구문:** obj << Zoom Window

**설명:** 모든 내용을 표시할 수 있도록 창 크기를 조정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## 연결된 생성자

### Scene Box

**구문:** box = Scene Box( xsize, ysize )

**설명:** OpenGL 명령을 실행할 수 있는 표시 상자를 반환합니다.

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

## 항목 메시지

### ArcBall

**구문:** obj << ArcBall( list,radius )

**설명:** 지정된 목록에 마우스 왼쪽 버튼 클릭 및 드래그를 사용한 회전을 허용하는 개체를 그립니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Update;

```

### Background Color

**구문:** obj << Background Color( red, green, blue )

**설명:** 장면 상자의 배경 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );

```

### Begin

**구문:** obj << Begin

**설명:** primitive의 시작 위치를 지정합니다. OpenGL 명령 glBegin을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### BlendFunc

**구문:** obj << BlendFunc( source factor,destination factor )

**설명:** 혼합에 사용되는 함수를 설정합니다. OpenGL 명령 glBlendFunc를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Enable( Blend );
shape << BlendFunc( SRC_ALPHA, ONE_MINUS_SRC_ALPHA );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
shape << Disable( Blend );
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### CallList

**구문:** obj << CallList( list )

**설명:** 지정된 목록에 개체를 그립니다. OpenGL 명령 glCallList를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Disk( .5, 1, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### Clear

**구문:** obj << Clear

**설명:** 배경 색상이 보이도록 장면을 지웁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second", scene );
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### ClipPlane

**구문:** obj << ClipPlane( clip_plane0|clip_plane1|clip_plane2|clip_plane3|clip_plane4|clip_plane5,x,y,z,d )

**설명:** clipping plane을 생성합니다. OpenGL 명령 glClipPlane을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << enable( CLIP_PLANE0 );
scene << ClipPlane( CLIP_PLANE0, 1, 1, 0, 0 );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Disable( CLIP_PLANE0 );
scene << Update;

```

### Color

**구문:** obj << Color( r,g,b,<a> )

**설명:** 색상을 설정합니다. 알파 계층이 작동하려면 혼합이 설정되어 있어야 합니다. OpenGL 명령 glColor를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Enable( Blend );
shape << BlendFunc( SRC_ALPHA, ONE_MINUS_SRC_ALPHA );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
shape << Disable( Blend );
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### ColorMask

**구문:** obj << ColorMask( red=0|1,green=0|1,blue=0|1,alpha=0|1 )

**설명:** 다음에 나오는 개체에 색상 마스크를 적용합니다. OpenGL 명령 glColorMask를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.0, 0.0 );
shape << Material( Front, Ambient, 0, 1, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << ColorMask( 1, 1, 0, 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### ColorMaterial

**구문:** obj << ColorMaterial( Front|Back|Front_And_Back,Emission|Ambient|Diffuse|Specular|Ambient_And_Diffuse )

**설명:** 다음에 나오는 개체에 color material을 적용합니다. OpenGL 명령 glColorMaterial을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color Material( Front_And_Back, Ambient );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### CullFace

**구문:** obj << CullFace( front|back|front_and_back )

**설명:** 선별이 활성화되어야 하는 위치를 설정합니다. OpenGL 명령 glCullFace를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( CULL_FACE );
shape << CullFace( Front );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( CULL_FACE );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Cylinder

**구문:** obj << Cylinder( base radius,top radius,height,slices,stacks )

**설명:** 원기둥을 생성합니다. OpenGL 유틸리티 명령 gluCylinder를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### DepthFunc

**구문:** obj << DepthFunc( nevert|lesst|equalt|lequalt|greatert|notequalt|gequalt|always )

**설명:** 깊이 버퍼 비교에 사용할 깊이 함수를 설정합니다. OpenGL 명령 glDepthFunc를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthFunc( never );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### DepthMask

**구문:** obj << DepthMask( state=0|1 )

**설명:** 깊이 버퍼에 쓸 수 있는지 여부를 설정합니다. OpenGL 명령 glDepthMask를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthMask( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### DepthRange

**구문:** obj << DepthRange( near,far )

**설명:** 깊이 범위를 설정합니다. 이 범위를 벗어난 항목은 그리지 않습니다. OpenGL 명령 glDepthRange를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( DEPTH_TEST );
shape << DepthRange( 1, 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( DEPTH_TEST );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Disable

**구문:** obj << Disable

**설명:** 다양한 OpenGL 기능을 비활성화합니다. OpenGL 명령 glDisable을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### Disk

**구문:** obj << Disk( inner radius,outer radius,slices,rings )

**설명:** 원반을 생성합니다. OpenGL 유틸리티 명령 gluDisk를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << Disk( .5, 1, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Enable

**구문:** obj << Enable

**설명:** 다양한 OpenGL 기능을 활성화합니다. OpenGL 명령 glEnable을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### End

**구문:** obj << End

**설명:** primitive의 마지막 위치를 지정합니다. OpenGL 명령 glEnd를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### EvalCoord1

**구문:** obj << EvalCoord1( u )

**설명:** 1차원 맵을 실행합니다. OpenGL 명령 glEvalCoord1d를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = Random Uniform() - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
curve = Scene Box( 500, 400 );
curve << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
curve << Enable( MAP1_VERTEX_3 );
curve << Ortho2D( -.6, .6, -.6, .6 );
curve << Color( 0, 0, 1 );
curve << Begin( line_strip );
For( i = 0, i <= 30, i++,
	curve << EvalCoord1( i / 30 )
);
curve << End();
curve << Disable( MAP1_VERTEX_3 );
New Window( "Example", curve );

```

### EvalCoord2

**구문:** obj << EvalCoord2( u,v )

**설명:** 1차원 맵을 실행합니다. OpenGL 명령 glEvalCoord2d를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 16;
imax = 8;
jmax = 20;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << color( 0, 0, 1 );
For( i = 0, i <= imax, i++,
	surface << begin( LINE_STRIP );
	For( j = 0, j <= jmax, j++,
		surface << EvalCoord2( j / jmax, i / imax )
	);
	surface << End();
	surface << Begin( LINE_STRIP );
	For( j = 0, j < jmax, j++,
		surface << EvalCoord2( i / imax, j / jmax )
	);
	surface << End();
);
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << CallList( surface );
sb << backgroundcolor( "white" );
New Window( "Example", sb );

```

### EvalMesh1

**구문:** obj << EvalMesh1( mode,i1,i2 )

**설명:** 1차원 mesh를 실행합니다. OpenGL 명령 glEvalMesh1을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### EvalMesh2

**구문:** obj << EvalMesh2( mode,i1,i2,j1,j2 )

**설명:** 2차원 mesh를 실행합니다. OpenGL 명령 glEvalMesh2를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### EvalPoint1

**구문:** obj << EvalPoint1( i )

**설명:** 1차원 mesh의 단일 점을 실행합니다. OpenGL 명령 glEvalPoint1을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = Random Uniform() - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
curve = Scene Box( 500, 400 );
curve << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
curve << Enable( MAP1_VERTEX_3 );
curve << Ortho2D( -.6, .6, -.6, .6 );
curve << Color( 0, 0, 1 );
curve << Begin( line_strip );
For( i = 0, i <= 60, i++,
	curve << EvalPoint1( i )
);
curve << End();
curve << Disable( MAP1_VERTEX_3 );
New Window( "Example", curve );

```

### EvalPoint2

**구문:** obj << EvalPoint2( i,j )

**설명:** 2차원 mesh의 단일 점을 실행합니다. OpenGL 명령 glEvalPoint2를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 16;
imax = 8;
jmax = 20;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
curves = Scene Display List();
curves << Enable( MAP2_VERTEX_3 );
curves << Enable( Auto_Normal );
curves << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
curves << color( 0, 0, 1 );
For( i = 0, i <= imax, i++,
	curves << begin( LINE_STRIP );
	For( j = 0, j <= jmax, j++,
		curves << EvalCoord2( j / jmax, i / imax )
	);
	curves << End();
	curves << Begin( LINE_STRIP );
	For( j = 0, j < jmax, j++,
		curves << EvalPoint2( i, j )
	);
	curves << End();
);
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << CallList( curves );
sb << backgroundcolor( "white" );
New Window( "Example", sb );

```

### Fog

**구문:** obj << Fog( fog_mode|fog_density|fog_start|fog_end|fog_index|fog_color,p1,<p2>,<p3>,<p4> )

**설명:** fog를 생성합니다. OpenGL 명령 glFog를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
showfog = 1;
scene = Scene Box( 600, 600 );
New Window( "Example",
	scene,
	box = Button Box( "Disable Fog",
		showfog = !showfog;
		refresh();
	)
);
refresh = Function( {},
	scene << clear;
	scene << perspective( 50, .5, 5 );
	scene << translate( 0, 0, -2 );
	scene << backgroundcolor( "Black" );
	If( showfog,
		scene << enable( FOG );
		scene << fog( FOG_END, 3 );
		scene << fog( FOG_START, 1 );
		scene << fog( FOG_COLOR, 0, 0, 0 );
		scene << fog( FOG_MODE, LINEAR );
		box << SetButtonName( "Disable Fog" );
	,
		scene << disable( FOG );
		box << SetButtonName( "Enable Fog" );
	);
	scene << color( 0, 1, 0 );
	scene << rotate( 180, 1, 0, 0 );
	object = Scene Display List();
	object << cylinder( .8, .4, 1, 40, 10 );
	scene << calllist( object );
	scene << update;
);
refresh();

```

### Frame

**구문:** obj << Frame( x0,x1,y0,y1,z0,z1,farside )

**설명:** 프레임을 그립니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << frame( -0.2, 0.2, -0.2, 0.2, 0.0, 0.0, 1 );
scene << frame( -0.4, 0.4, -0.4, 0.4, 0.0, 0.0, 1 );
scene << frame( -0.6, 0.6, -0.6, 0.6, 0.0, 0.0, 1 );
scene << frame( -0.8, 0.8, -0.8, 0.8, 0.0, 0.0, 1 );

```

### FrontFace

**구문:** obj << FrontFace( cw|ccw )

**설명:** 앞 또는 뒤를 향할 다각형을 설정합니다. 개체 선별과 함께 사용됩니다. OpenGL 명령 glFrontFace를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( CULL_FACE );
shape << CullFace( Front );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
shape << Disable( CULL_FACE );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << frontface( cw );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Frustum

**구문:** obj << Frustum( left,right,bottom,top,near,far )

**설명:** 카메라에 사용되는 파라미터를 설정합니다. OpenGL 명령 glFrustum을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Frustum( -3, 1, -1, 1, 2, 9 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Get Background Color

**구문:** color = obj << Get Background Color

**설명:** 장면 상자의 배경 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );
scene << Background Color( 0, 0, 0 );
scene << Get Background Color();

```

### Get Show ArcBall

**구문:** obj << Get Show ArcBall

**설명:** 아크볼의 표시 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Show ArcBall( always );
scene << Update;
scene << Get Show ArcBall();

```

### Get Width

**구문:** pixels = obj << Get Width

**설명:** 상자의 너비를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Get Width();

```

### Height

**구문:** obj << Height( pixels )

**설명:** 상자의 높이를 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Height( 150 );

```

### Light

**구문:** obj << Light( light0|light1|light2|light3|light4|light5|light6|light7,ambient|diffuse|specular|position,x|r,y|g,z|b,<a> )

**설명:** 지정된 파라미터를 사용하여 광원을 생성합니다. OpenGL 명령 glLight를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Light( Light0, Ambient, 0, 0, 1, 1 );
scene << Light( Light0, Diffuse, 0, 1, 1, 1 );
scene << Light( Light0, Specular, 1, 1, 0, 1 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### LightModel

**구문:** obj << LightModel( light_model_ambient|light_model_local_viewer|light_model_two_side,r,g,b,a )

**설명:** light model에 사용되는 파라미터를 설정합니다. OpenGL 명령 glLightModel을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << Light Model( light_model_ambient, 0.2, 0, 0.5, 1 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### LineStipple

**구문:** obj << LineStipple( factor,pattern )

**설명:** 선 점묘 패턴을 설정합니다. OpenGL 명령 glLineStipple을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << LineWidth( 4 );
scene << color( 0, 0, 0 );
scene << Enable( LINE_STIPPLE );
scene << LineStipple( 2, 01101010 );
scene << Begin( LINES );
scene << Vertex( -.8, 0, 0 );
scene << Vertex( .8, 0, 0 );
scene << End();
scene << Disable( LINE_STIPPLE );

```

### LineWidth

**구문:** obj << LineWidth( width )

**설명:** 선 너비를 설정합니다. OpenGL 명령 glLineWidth를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << LineWidth( 1 );
scene << Begin( LINES );
scene << color( 0, 0, 0 );
scene << Vertex( -.4, 0.04, 0 );
scene << Vertex( .4, 0.04, 0 );
scene << End();
scene << LineWidth( 4 );
scene << Begin( LINES );
scene << Vertex( -.4, -0.04, 0 );
scene << Vertex( .4, -0.04, 0 );
scene << End();

```

### LoadIdentity

**구문:** obj << LoadIdentity

**설명:** 현재 행렬을 identity matrix로 설정합니다. OpenGL 명령 glLoadIdentity를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
scene << LoadIdentity;
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### LoadMatrix

**구문:** obj << LoadMatrix( matrix )

**설명:** 현재 행렬을 지정된 행렬로 설정합니다. OpenGL 명령 glLoadMatrix를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
identitymatrix = [1 0 0 0, 0 1 0 0, 0 0 1 0, 0 0 0 1];
scene << LoadMatrix( identitymatrix );
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### LoadName

**구문:** obj << LoadName( i )

**설명:** picker와 함께 사용하며 다음에 나오는 개체를 식별하는 정수를 불러옵니다. OpenGL 명령 glLoadName을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### LookAt

**구문:** obj << LookAt( eye x,eye y,eye z,center x,center y,center z,up x,up y,up z )

**설명:** 카메라가 봐야 할 위치를 설정합니다. OpenGL 유틸리티 명령 gluLookAt을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Cylinder( 0.5, 0.5, 2, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 20 );
scene << LookAt( 1, 0, 7, 0, 0, 0, 0, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Map1

**구문:** obj << Map1( target,u1,u2,stride,order,points )

**설명:** 1차원 실행기를 정의합니다. OpenGL 명령 glMap1d를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### Map2

**구문:** obj << Map2( target,u1,u2,ustride,uorder,v1,v2,vstride,vorder,points )

**설명:** 2차원 실행기를 정의합니다. OpenGL 명령 glMap2d를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### MapGrid1

**구문:** obj << MapGrid1( un,u1,u2 )

**설명:** 1차원 mesh를 정의합니다. OpenGL 명령 glMapGrid1d를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 100;
NPOINTS = 4;
points = J( NPOINTS, 3, 0 );
For( x = 1, x <= NPOINTS, x++,
	points[x, 1] = (x - 1) / (NPOINTS - 1) - .5;
	points[x, 2] = Random Uniform() - .5;
	points[x, 3] = 0;
);
spline = Scene Box( 500, 400 );
spline << Ortho2D( -.6, .6, -.6, .6 );
spline << Enable( MAP1_VERTEX_3 );
spline << MapGrid1( gridsize, 0, 1 );
spline << color( .2, .2, 1 );
spline << Map1( MAP1_VERTEX_3, 0, 1, 3, NPOINTS, points );
spline << EvalMesh1( LINE, 0, gridsize );
New Window( "Example", spline );

```

### MapGrid2

**구문:** obj << MapGrid2( un,u1,u2,vn,v1,v2 )

**설명:** 2차원 mesh를 정의합니다. OpenGL 명령 glMapGrid2d를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
gridsize = 10;
npoints = 32;
points = J( npoints, 3, 0 );
For( i = 0, i < npoints, i++,
	points[i, 1] = Random Uniform() - .5;
	points[i, 2] = Random Uniform() - .5;
	points[i, 3] = Random Uniform() - .5;
);
surface = Scene Display List();
surface << Enable( MAP2_VERTEX_3 );
surface << Enable( Auto_Normal );
surface << MapGrid2( gridsize, 0, 1, gridsize, 0, 1 );
surface << color( 0, 0, 1 );
surface << Map2( MAP2_VERTEX_3, 0, 1, 3, 4, 0, 1, 12, 4, points );
surface << EvalMesh2( LINE, 0, gridsize, 0, gridsize );
sb = Scene Box( 500, 400 );
sb << Ortho( -.75, .75, -.75, .75, -1, 1 );
sb << ArcBall( surface, 1 );
New Window( "Example", sb );

```

### Material

**구문:** obj << Material

**설명:** 다음에 나오는 개체에 사용할 재료 유형을 지정합니다. OpenGL 명령 glMaterial을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### MatrixMode

**구문:** obj << MatrixMode( modelview|projection|texture )

**설명:** 작업을 수행할 행렬을 설정합니다. OpenGL 명령 glMatrixMode를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 0.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 1.0, 0.0, -5 );
scene << CallList( shape );
scene << MatrixMode( projection );
scene << LoadIdentity;
scene << Perspective( 90, 1, 10 );
scene << Translate( -1.0, 0.0, -5 );
scene << CallList( shape );
scene << update;

```

### MultMatrix

**구문:** obj << MultMatrix( matrix )

**설명:** 현재 행렬에 지정된 행렬을 곱합니다. OpenGL 명령 glMultMatrix를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0.48, 0.72 );
shape << Sphere( 1.0, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
matrix = [1.5 0 0 0, 0 1 0 0, 0 0 1 0, 0 0 0 1];
scene << MultMatrix( matrix );
scene << CallList( shape );
scene << update;

```

### Normal

**구문:** obj << Normal( x,y,z )

**설명:** current normal을 설정합니다. OpenGL 명령 glNormal을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << LightModel( LIGHT_MODEL_TWO_SIDE, 1 );
shape << Color( 0, 0.0, 0.0 );
shape << Material( Front_and_back, Ambient, 0, 1, 1, 1 );
shape << Material( Front_and_back, Diffuse, 0, 1, 1, 1 );
shape << Material( Front_and_back, Specular, 0, 1, 0, 1 );
shape << Material( Front_and_back, Emission, 0, 0, 0, 1 );
shape << Material( Front_and_back, Shininess, 100 );
shape << Begin( POLYGON );
shape << Normal( 0, 0, 1 );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 2 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Ortho

**구문:** obj << Ortho( left,right,bottom,top,near,far )

**설명:** 장면을 직교 보기로 설정합니다. OpenGL 명령 glOrtho를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -0.5, 0.5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### Ortho2D

**구문:** obj << Ortho2D( left,right,bottom,top )

**설명:** 장면을 2D 직교 보기로 설정합니다. OpenGL 유틸리티 명령 gluOrtho2d를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << Shade Model( SMOOTH );
scene << Begin( TRIANGLES );
scene << color( 1, 0, 0 );
scene << Vertex( -1, -1, 0 );
scene << Color( 0, 1, 0 );
scene << Vertex( 0, 1, 0 );
scene << Color( 0, 0, 1 );
scene << Vertex( 1, -1, 0 );
scene << End();
scene << Update;

```

### PartialDisk

**구문:** obj << PartialDisk( inner radius,outer radius,slices,rings,start angle,sweep angle )

**설명:** 부분 원반을 생성합니다. OpenGL 유틸리티 명령 gluPartialDisk를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 0, 0.48, 0.72 );
shape << PartialDisk( 0.5, 1, 2, 3, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 2 );
scene << Update;

```

### Perspective

**구문:** obj << Perspective( angle,z near,z far )

**설명:** 보기의 관점을 설정합니다. OpenGL 유틸리티 명령 gluPerspective를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Pick

**구문:** name = obj << Pick( x center,y center,pick width,pick height,buffer size,only return the names=0|1 )

**설명:** 마우스의 2D 좌표 아래에 있는 명명된 개체를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### PointSize

**구문:** obj << PointSize( size )

**설명:** 점 크기를 설정합니다. OpenGL 명령 glPointSize를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << pointsize( 1 );
scene << Begin( POINTS );
scene << color( 0, 0, 0 );
scene << Vertex( -.08, 0.04, 0 );
scene << Vertex( -.04, 0.04, 0 );
scene << Vertex( 0, 0.04, 0 );
scene << Vertex( .04, 0.04, 0 );
scene << Vertex( .08, 0.04, 0 );
scene << End();
scene << pointsize( 2 );
scene << Begin( POINTS );
scene << Vertex( -.08, -0.04, 0 );
scene << Vertex( -.04, -0.04, 0 );
scene << Vertex( 0, -0.04, 0 );
scene << Vertex( .04, -0.04, 0 );
scene << Vertex( .08, -0.04, 0 );
scene << End();

```

### PolygonMode

**구문:** obj << PolygonMode( front|back|front_and_back,point|line|fill )

**설명:** 래스터화에 사용되는 모드를 설정합니다. OpenGL 명령 glPolygonMode를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << PolygonMode( front, line );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -2, 2 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PolygonOffset

**구문:** obj << PolygonOffset( factor,units )

**설명:** 다각형의 오프셋을 설정합니다. OpenGL 명령 glPolygonOffset을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 1.5, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -1.5, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -1.5, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 1.5, 1 );
shape << Color( 0, 0, 0 );
shape << Vertex( 1, 1.5, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Ortho( -2, 2, -2, 2, -2, 2 );
scene << Enable( Polygon_offset_fill );
scene << PolygonMode( back, point );
scene << ArcBall( shape, 2 );
scene << Disable( Polygon_offset_line );
scene << update;

```

### PopAttrib

**구문:** obj << PopAttrib

**설명:** 현재 속성을 Pops합니다. OpenGL 명령 glPopAttrib를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0, 1 );
shape << PushAttrib( GL_CURRENT_BIT );
shape << Color( 0, 0, 0 );
shape << Begin( POLYGON );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -2, 0 );
shape << Vertex( -1, -2, 0 );
shape << End;
shape << PopAttrib;
shape << Begin( TRIANGLES );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 1, 0, 0 );
shape << Vertex( 0, 2, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0, 0, -5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PopMatrix

**구문:** obj << PopMatrix

**설명:** 현재 행렬을 Pops합니다. OpenGL 명령 glPopMatrix를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
object = Scene Display List();
object << PushMatrix;
object << Translate( 0, 0, .1 );
object << Color( 1, 0, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
object << PushMatrix;
object << Translate( 0, 0, -.1 );
object << Rotate( 180, 1, 0, 0 );
object << Color( 0, 1, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << Rotate( -85, 1, 0, 0 );
scene << CallList( object );
scene << Update;

```

### PopName

**구문:** obj << PopName

**설명:** picker와 함께 사용하며 다음에 나오는 개체를 식별하는 정수를 pop합니다. OpenGL 명령 glPopName을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### PushAttrib

**구문:** obj << PushAttrib( mask )

**설명:** 현재 속성을 Pushes합니다. OpenGL 명령 glPushAttrib를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0, 0, 1 );
shape << PushAttrib( GL_CURRENT_BIT );
shape << Color( 0, 0, 0 );
shape << Begin( POLYGON );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -2, 0 );
shape << Vertex( -1, -2, 0 );
shape << End;
shape << PopAttrib;
shape << Begin( TRIANGLES );
shape << Vertex( -1, 0, 0 );
shape << Vertex( 1, 0, 0 );
shape << Color( 1, 0, 0 );
shape << Vertex( 0, 2, 0 );
shape << End();
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0, 0, -5 );
scene << ArcBall( shape, 2 );
scene << update;

```

### PushMatrix

**구문:** obj << PushMatrix

**설명:** 현재 행렬을 Pushes합니다. OpenGL 명령 glPushMatrix를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
object = Scene Display List();
object << PushMatrix;
object << Translate( 0, 0, .1 );
object << Color( 1, 0, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
object << PushMatrix;
object << Translate( 0, 0, -.1 );
object << Rotate( 180, 1, 0, 0 );
object << Color( 0, 1, 0 );
object << Cylinder( 1, .4, .4, 25, 5 );
object << PopMatrix;
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << Rotate( -85, 1, 0, 0 );
scene << CallList( object );
scene << Update;

```

### PushName

**구문:** obj << PushName( i )

**설명:** picker와 함께 사용하며 다음에 나오는 개체를 식별하는 정수를 push합니다. OpenGL 명령 glPushName을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
spheres = Scene Display List();
spheres << Point Size( 50 );
Spheres << PushName( 0 );
For( i = 0, i < 3, i++,
	spheres << LoadName( (i + 1) );
	spheres << PushMatrix;
	spheres << Translate( (i * 0.75 - .75), 0, 0 );
	spheres << color( 1, 0, 0 );
	spheres << Begin( POINTS );
	spheres << Vertex( 0, 0, -.0001 );
	spheres << End;
	spheres << color( 0, 0, 0 );
	spheres << Text( center, middle, 0.2, Char( (i + 1) ) );
	spheres << PopMatrix;
);
spheres << PopName;
view = Scene Box( 500, 400 );
view << Ortho( -1, 1, -1, 1, -2, 2 );
view << CallList( spheres );
view << update;
New Window( "Example", view );
Print( view << Pick( 50, 200, 1, 1, 4, 1 ) );

```

### QuadricDrawStyle

**구문:** obj << QuadricDrawStyle( point|line|silhouette|fill )

**설명:** 2차 곡선에 사용할 그리기 스타일 유형을 설정합니다. OpenGL 유틸리티 명령 gluQuadricDrawStyle을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << QuadricDrawStyle( LINE );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricNormals

**구문:** obj << QuadricNormals( none|flat|smooth )

**설명:** 2차 곡선에 사용할 normals 유형을 설정합니다. OpenGL 유틸리티 명령 gluQuadricNormals를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << QuadricNormals( FLAT );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricOrientation

**구문:** obj << QuadricOrientation( outside|inside )

**설명:** 2차 곡선에 사용할 방향 유형을 설정합니다. OpenGL 유틸리티 명령 gluQuadricOrientation을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << QuadricOrientation( INSIDE );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Ambient, 0, 0, 1, 1 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << update;

```

### QuadricTexture

**구문:** obj << QuadricTexture

**JMP추가된 버전:** 16

### Rect

**구문:** obj << Rect( x1,y1,x2,y2 )

**설명:** 직사각형을 생성합니다. OpenGL 명령 glRect를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Color( 0.5, 0, 0 );
shape << Rect( -0.75, -0.75, 0.5, 0.75 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << CallList( shape );

```

### Rotate

**구문:** obj << Rotate( angle,x,y,z )

**설명:** 현재 행렬에 지정된 회전 각도를 곱합니다. OpenGL 명령 glRotate를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Rotate( 15, 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Scale

**구문:** obj << Scale( x,y,z )

**설명:** 현재 행렬에 지정된 척도를 곱합니다. OpenGL 명령 glScale을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Scale( 2, 1, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Scissor

**구문:** obj << Scissor( x,y,width,height )

**설명:** scissor 보기 내에 나타나는 항목만 그립니다. OpenGL 명령 glScissor를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Color( 1, 0, 0 );
shape << Rect( -0.5, -0.5, 0.5, 0.5 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Scissor( 0, 0, 100, 200 );
scene << Enable( scissor_test );
scene << CallList( shape );
scene << Disable( scissor_test );

```

### ShadeModel

**구문:** obj << ShadeModel( flat|smooth )

**설명:** 다음에 나오는 개체에 사용할 음영 유형을 지정합니다. OpenGL 명령 glShadeModel을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 200, 200 );
New Window( "Example", scene );
scene << Ortho2D( -1, 1, -1, 1 );
scene << Shade Model( SMOOTH );
scene << Begin( TRIANGLES );
scene << color( 1, 0, 0 );
scene << Vertex( -1, -1, 0 );
scene << Color( 0, 1, 0 );
scene << Vertex( 0, 1, 0 );
scene << Color( 0, 0, 1 );
scene << Vertex( 1, -1, 0 );
scene << End();
scene << Update;

```

### Show ArcBall

**구문:** obj << Show ArcBall( "드래그하는 중"|"항상"|"안 함" )

**설명:** 아크볼의 표시 상태를 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Show ArcBall( always );
scene << Update;

```

### SortList

**구문:** obj << SortList

**JMP추가된 버전:** 16

### Sphere

**구문:** obj << Sphere( radius,slices,stacks )

**설명:** 구를 생성합니다. OpenGL 유틸리티 명령 gluSphere를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;

```

### Suppress Context Menu

**구문:** obj << Suppress Context Menu( state=0|1 )

**설명:** 장면 상자 컨텍스트 메뉴가 나타나지 않도록 합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << color( 0, 0, 1 );
shape << Text( center, baseline, 0.2, "Hello, World." );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << ArcBall( shape, 1 );
scene << Update;
scene << Suppress Context Menu( 1 );

```

### Text

**구문:** obj << Text( left|center|right,top|middle|baseline|bottom,size,"string" )

**설명:** SceneBox에 표시할 수 있는 텍스트를 생성합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( 0.0, 0.0, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Translate

**구문:** obj << Translate( x,y,z )

**설명:** 현재 행렬에 지정된 변환을 곱합니다. OpenGL 명령 glTranslate를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << Perspective( 45, 3, 7 );
scene << Translate( -0.9, 1.5, -4.5 );
scene << color( 0, 0, 1 );
scene << Text( center, baseline, 0.2, "Hello, World." );

```

### Update

**구문:** obj << Update

**설명:** 장면을 렌더링합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second", scene );
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### Use Hardware Acceleration

**구문:** obj << Use Hardware Acceleration( state=0|1 )

**설명:** 하드웨어 가속을 사용하면 표시 속도가 빨라집니다. 상태가 좋지 않은 경우 새 그래픽 드라이버(하드웨어 벤더가 제공)가 필요할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
scene = Scene Box( 500, 500 );
fps = Scene Display List();
window = New Window( "Frames Per Second",
	scene,
	accelButton = Button Box( "Turn Hardware Acceleration On", toggleHardwareAccel() )
);
hardwareAccel = 0;
lastTime = 0;
frameCount = 0;
framesPerSecond = "Frames Per Second: ";
toggleHardwareAccel = Function( {},
	hardwareAccel = !hardwareAccel;
	scene << Use Hardware Acceleration( hardwareAccel );
	If( hardwareAccel,
		accelButton << Set Button Name( "Turn Hardware Acceleration Off" ),
		accelButton << Set Button Name( "Turn Hardware Acceleration On" )
	);
);
While( 1,
	time = Today();
	frameCount++;
	If( time != lastTime,
		framesPerSecond = Char( frameCount );
		frameCount = 0;
		lastTime = time;
	);
	fps << Clear;
	fps << Translate( -1, 0, 0 );
	fps << Color( 1, 0, 0 );
	fps << Text( left, baseline, .1, "Frames Per Second: " || framesPerSecond );
	scene << Clear;
	scene << CallList( fps );
	scene << Update;
	Wait( 0 );
);

```

### Vertex

**구문:** obj << Vertex( x,y,z )

**설명:** primitive의 꼭지점을 지정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List();
shape << Begin( POLYGON );
shape << Color( 1, 0, 0 );
shape << Vertex( -1, 0.75, 0 );
shape << Color( 0, 0, 1 );
shape << Vertex( -1, -0.75, 0 );
shape << Color( 0, 1, 0 );
shape << Vertex( 1, -0.75, 0 );
shape << Color( 1, 1, 0 );
shape << Vertex( 1, 0.75, 0 );
shape << End();
scene = Scene Box( 200, 200 );
scene << CallList( shape );
New Window( "Example", scene );

```

### Width

**구문:** obj << Width( pixels )

**설명:** 상자의 너비를 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
shape = Scene Display List( 0 );
shape << Enable( COLOR_MATERIAL );
shape << Color( 0, 0.48, 0.72 );
shape << Material( Front, Diffuse, 0, 1, 1, 1 );
shape << Material( Front, Specular, 0, 1, 0, 1 );
shape << Material( Front, Emission, 0, 0, 0, 1 );
shape << Material( Front, Shininess, 100 );
shape << Sphere( 1.5, 50, 50 );
shape << Disable( COLOR_MATERIAL );
scene = Scene Box( 400, 400 );
New Window( "Example", scene );
scene << clear;
scene << Perspective( 45, 1, 10 );
scene << Translate( 0.0, 0.0, -5 );
scene << Enable( Lighting );
scene << Enable( Light0 );
scene << Light( Light0, Position, 1, 1, 1, 0 );
scene << ArcBall( shape, 3 );
scene << Disable( Light0 );
scene << Disable( Lighting );
scene << update;
scene << Width( 150 );

```

