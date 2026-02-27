# MouseBox



## 공유 항목 메시지

### Add Line Annotation

**구문:** obj &lt;&lt; Add Line Annotation

**설명:** 표시 상자 위쪽에 선을 추가합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Line Annotation( Line( 160, 235, 240, 235 ) );

```

### Add Pin Annotation

**구문:** obj &lt;&lt; Add Pin Annotation

**설명:** 표시 상자 위쪽에 고정된 주석을 추가합니다. 대부분의 속성(예: Index Row, UniqueID 및 FoundPt)은 내부에서만 사용하도록 되어 있습니다.

```jsl

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

**구문:** obj &lt;&lt; Add Polygon Annotation

**설명:** 표시 상자 위쪽에 다각형을 추가합니다.

```jsl

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

**구문:** obj &lt;&lt; Add Simple Shape Annotation

**설명:** 표시 상자 위쪽에 원 모양을 추가합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Add Simple Shape Annotation( Oval( 210, 100, 250, 75 ) );
rbiv << Add Simple Shape Annotation( Rectangle( 70, 180, 95, 215 ) );

```

### Add Text Annotation

**구문:** obj &lt;&lt; Add Text Annotation

**설명:** 표시 상자 위쪽에 텍스트를 추가합니다.

```jsl

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

**구문:** obj &lt;&lt; Append( db2 )

**설명:** 표시 트리에서 db 뒤에 db2를 추가합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );

```

### Background Color

**구문:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**설명:** 배경 색상이 설정되어 있으면 내용을 그리기 전에 상자에 배경 색상이 채워집니다. 배경 색상이 설정되어 있지 않으면 배경과 포함하는 상자의 내용이 비쳐 보입니다.

**JMP추가된 버전:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Border

**구문:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**설명:** 테두리는 표시 상자 바깥쪽을 둘러싸는 실선입니다. 값을 하나만 제공하면 모든 변에 적용되고, 값을 두 개 지정하면 가로 및 세로 테두리에 적용됩니다.

```jsl

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

**구문:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**설명:** 상자 테두리의 기본 색상을 재정의하는 선택적 색상입니다.

**JMP추가된 버전:** 19

```jsl

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

**구문:** obj &lt;&lt; Bring Window To Front

**설명:** 창을 맨 앞으로 가져옵니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Child

**구문:** obj &lt;&lt; Child

**설명:** 표시 상자의 하위 항목을 반환합니다.

```jsl

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

**구문:** obj &lt;&lt; Class Name

**설명:** 표시 상자에 대한 표시 클래스의 이름을 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Class Name();

```

### Clone Box

**구문:** obj &lt;&lt; Clone Box

**설명:** 표시 상자의 새 복사본을 만듭니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << append( Text Box( "=== below ===" ) );
clonedBox = rbiv << Clone Box();
rbiv << append( clonedBox );

```

### Close Window

**구문:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**설명:** 창을 닫습니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Copy Data

**구문:** obj &lt;&lt; Copy Data

**설명:** 행렬 또는 테이블로부터 탭으로 구분된 데이터를 클립보드에 복사합니다.

```jsl

New Window( "x", mat = Matrix Box( [1 2 3, 4 5 6, 7 8 9] ) );
mat << CopyData;

```

### Copy Graph

**구문:** obj &lt;&lt; Copy Graph

**설명:** 그래프 및 축을 그림으로 클립보드에 복사합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
(rbiv[FrameBox( 1 )]) << Copy Graph();
"paste into a paint program";

```

### Copy Picture

**구문:** obj &lt;&lt; Copy Picture

**설명:** 표시 상자 그림을 클립보드에 저장합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Copy Picture();

```

### Delete Box

**구문:** obj &lt;&lt; Delete Box

**설명:** 표시 상자를 삭제합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisbox << Delete Box();

```

### Deselect

**구문:** obj &lt;&lt; Deselect

**설명:** 편집 메뉴 명령에서 사용할 수 있도록 이 개체를 선택 취소합니다.

```jsl

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

**구문:** obj &lt;&lt; Dispatch( {outline node, ...}, display element, display element type, command )

**설명:** command를 표시 트리의 특정 부분으로 전송합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Dispatch( {}, "Bivar Plot", FrameBox, {Marker Size( 3 )} );

```

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

### Find

**구문:** obj &lt;&lt; Find

**설명:** 지정된 argument를 가진 표시 상자를 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv << Find( axis box( 1 ) );
axisbox << Delete();

```

### Get Annotation

**구문:** obj &lt;&lt; Get Annotation

**설명:** 이 표시 상자에 고정된 첫 번째 주석을 반환합니다. 결과에 Sib()를 사용하여 다른 주석에 액세스할 수 있습니다.

```jsl

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

### Get Background Color

**구문:** obj &lt;&lt; Background Color( color );color = obj &lt;&lt; Get Background Color

**설명:** 배경 색상이 설정되어 있으면 내용을 그리기 전에 상자에 배경 색상이 채워집니다. 배경 색상이 설정되어 있지 않으면 배경과 포함하는 상자의 내용이 비쳐 보입니다.

**JMP추가된 버전:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
tb = r[Table Box( 1 )];
Show( tb << Get Background Color );
Wait( 2 );
tb << Background Color( "Yellow" );

```

### Get Border

**구문:** obj &lt;&lt; Border( sides );sides = obj &lt;&lt; Get Border

**설명:** 테두리는 표시 상자 바깥쪽을 둘러싸는 실선입니다. 값을 하나만 제공하면 모든 변에 적용되고, 값을 두 개 지정하면 가로 및 세로 테두리에 적용됩니다.

```jsl

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

**구문:** obj &lt;&lt; Border Color( color );color = obj &lt;&lt; Get Border Color

**설명:** 상자 테두리의 기본 색상을 재정의하는 선택적 색상입니다.

**JMP추가된 버전:** 19

```jsl

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

**구문:** obj &lt;&lt; Get Content Size

**설명:** 창 안의 내용 크기를 반환합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get Display Path

**구문:** obj &lt;&lt; Get Display Path( parent box, &lt;receiver expr&gt;, &lt;Mode("XPath"|"Subscript")&gt; )

**설명:** parent box와 obj 간 탐색을 위해 비교적 로버스트한 표현식을 가져옵니다. 이 경로는 전체 JMP 릴리스에서 안정적인 것은 아닙니다. receiver expr은 출력 표현식이 제공된 경우 여기에 포함됩니다. 그렇지 않은 경우 parent box에 제공된 표현식이 대신 사용됩니다. 예에서 볼 수 있듯이 이 메시지는 주로 이미 사용 가능한 경로의 강건성을 높이는 데 유용합니다. XPath 모드가 기본값입니다.

#### 기본

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
xpath expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Expr( Report( biv ) ) ); // Make Number Col Box(9) more robust
Show( xpath expr );
xpath expr << Select;

```

#### 서브스크립트 모드

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
rpt = Report( biv );
subscript expr = rpt[Number Col Box( 9 )] << Get Display Path( rpt, Mode( "Subscript" ) ); // Make Number Col Box(9) more robust
Show( subscript expr );
subscript expr << Select;

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

### Get HTML

**구문:** obj &lt;&lt; Get HTML( &lt;format&gt; )

**설명:** 표시 상자에 대한 HTML 소스가 포함된 문자열을 반환합니다.

#### 예제 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get HTML );

```

#### 예제 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.html", obj << Get HTML( "svg" ) ); // Prefer <<Save HTML
Web( "$TEMP/Oneway.html", JMPWindow );

```

### Get Height

**구문:** width = obj &lt;&lt; Get Height

**설명:** 표시 상자의 높이를 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Height;

```

### Get Horizontal Alignment

**구문:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**설명:** 가로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

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

**구문:** obj &lt;&lt; Get Journal

**설명:** 표시 상자에 대한 저널 소스가 포함된 문자열을 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Print( rbiv << Get Journal );

```

### Get Margin

**구문:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**설명:** 여백은 상자 테두리와 인접 상자 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 여백에 적용됩니다.

```jsl

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

**구문:** width,height = obj &lt;&lt; Get Max Size

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최대 크기를 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Max Size;

```

### Get Min Size

**구문:** width,height = obj &lt;&lt; Get Min Size

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최소 크기를 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Min Size;

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

### Get On Close

**구문:** obj &lt;&lt; Get On Close

**설명:** 창을 닫을 때 실행되는 스크립트 또는 함수를 반환합니다.

```jsl

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

**구문:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**설명:** 안쪽 여백은 상자 내용과 테두리 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 안쪽 여백에 적용됩니다.

```jsl

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

**구문:** obj &lt;&lt; Get Page Setup

**설명:** PDF에 대한 페이지 설정 정보를 가져옵니다.

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Picture

**구문:** obj &lt;&lt; Get Picture( &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**설명:** db를 이미지 개체로 캡처합니다. 선택적 Scale 인수는 이미지를 배율이 조정된 해상도로 렌더링합니다. 배율을 조정하려면 표시 상자를 늘릴 수 있어야 합니다. Type 인수는 결과가 확장 가능한 벡터 이미지인지 아니면 비트맵인지 결정합니다. 기본적으로 PDF와 같은 벡터 형식으로 저장하는 데 적합한 확장 가능 이미지가 반환됩니다. View 옵션은 일부 상자의 동작을 변경합니다. "Picture"(기본값) 옵션은 스크롤된 영역이 전체 표시된 상태에서 이미지 형식으로 내보내는 것처럼 보고서를 그립니다. "Screen" 보기 모드는 보고서를 화면에 표시된 대로 그리고, "Print"는 페이지 설정 기능 없이 인쇄할 때처럼 보고서를 그립니다. SubRect 옵션은 전체 이미지가 아니라 결과 이미지의 일부를 캡처합니다. Appearance 옵션은 "Default" 출력 색상에서 화면에 표시된 "Current" 색상으로 변경할 수 있습니다. View, SubRect 및 Appearance 옵션은 Type "Bitmap"에만 지원됩니다.

#### 기본값

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
New Window( "Example", rbiv << Get Picture );

```

#### 보기 및 모양

```jsl

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

#### 척도

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
New Window( "Example", rbiv << Get Picture( Scale( 1.5 ) ) );

```

### Get Project

**구문:** project = obj &lt;&lt; Get Project()

**설명:** 창의 상위 프로젝트 또는 Empty()(프로젝트에 없는 경우)를 반환합니다.

**JMP추가된 버전:** 14

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

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

### Get RTF

**구문:** obj &lt;&lt; Get RTF( &lt;format&gt; )

**설명:** 표시 상자에 대한 RTF 소스가 포함된 문자열을 반환합니다.

#### 예제 1

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get RTF );

```

#### 예제 2

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
Save Text File( "$TEMP/Oneway.rtf", obj << Get RTF( "png" ) ); // Prefer <<Save RTF
Open( "$TEMP/Oneway.rtf" );

```

### Get Row States

**구문:** rs = obj &lt;&lt; Get Row States( &lt;dt&gt; )

**설명:** 지정된 데이터 테이블 또는 현재 데이터 테이블의 모든 행에 대한 행 상태를 포함하는 벡터를 반환합니다. 행 상태는 테이블에서 가져오거나, 상자의 필터 컨텍스트에서 가져올 수 있습니다.

#### Single table

```jsl

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

#### Where subset

```jsl

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

**구문:** obj &lt;&lt; Get Show Window

**설명:** 창 표시 여부를 반환합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
Print( w << Get Show Window() );

```

### Get Size

**구문:** width,height = obj &lt;&lt; Get Size

**설명:** 표시 상자의 크기를 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
Print( fb << Get Size );

```

### Get Stretch

**구문:** x,y = obj &lt;&lt; Get Stretch

**설명:** 이 표시 상자에 대한 가로 및 세로 방향의 늘이기 플래그를 반환합니다.

**JMP추가된 버전:** 16

```jsl

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

**구문:** obj &lt;&lt; Get Text

**설명:** 표시 상자의 텍스트가 포함된 문자열을 반환합니다.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << Set Text( win << Get Text );

```

### Get Text Color

**구문:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**설명:** 텍스트 색상이 설정되어 있으면 해당 색상을 사용하여 텍스트를 그립니다. 특성이 설정되어 있지 않으면 포함하는 상자의 텍스트 색상을 상속합니다.

**JMP추가된 버전:** 15

```jsl

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

**구문:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Get Vertical Alignment

**구문:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**설명:** 세로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

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

**구문:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**설명:** 표시 여부는 상자 표시 여부 및 상자가 공간을 차지하는지 여부를 결정합니다. 기본값 "Visible"은 개체가 표시된다는 것을 의미합니다. "Hidden" 상자는 표시되지는 않아도 공간을 차지하는 반면 "Collapsed" 상자는 레이아웃에서 공간을 차지하지 않습니다.

```jsl

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

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Width

**구문:** width = obj &lt;&lt; Get Width

**설명:** 표시 상자의 너비를 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Get Width;

```

### Get Window Icon

**구문:** obj &lt;&lt; Get Window Icon

**설명:** 창 아이콘을 반환합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**구문:** obj &lt;&lt; Get Window Position

**설명:** 창 위치를 반환합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**구문:** obj &lt;&lt; Get Window Size

**설명:** 창 크기를 반환합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**구문:** obj &lt;&lt; Get Window Title

**설명:** 창 제목을 반환합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**구문:** obj &lt;&lt; Get Window View

**설명:** 현재 창 보기를 반환합니다. 창은 "Visible"(표시), "Invisible"(숨김) 또는 "Private"(비공개)일 수 있습니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Get XML

**구문:** obj &lt;&lt; Get XML( &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**설명:** XML 형식의 표시 트리를 가져옵니다. 기본적으로 문자열은 로컬 언어로 반환되고 XML에는 일부 상자 내의 데이터 값이 포함됩니다. 가능한 경우 영어 문자열을 반환하려면 English 옵션을 사용합니다. 상자 내의 데이터 값을 생략하려면 NoData 옵션을 사용합니다. 이러한 값은 일부 표시 트리의 경우 매우 클 수 있습니다.

```jsl

//This message applies to all display box objects
win = New Window( "test", a = Text Box( "my test" ) );
a << set text( win << get xml );

```

### GetOffset

**구문:** x,y = obj &lt;&lt; GetOffset

**설명:** 상위 상자를 기준으로 이 표시 상자의 오프셋을 반환합니다. 여러 개의 오프셋을 누적하려면 루프에 <<parent 메시지를 사용해야 합니다.

```jsl

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

**구문:** obj &lt;&lt; Horizontal Alignment( "Default"|"Left"|"Center"|"Right" );"Default"|"Left"|"Center"|"Right" = obj &lt;&lt; Get Horizontal Alignment

**설명:** 가로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

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

**구문:** obj &lt;&lt; Inval

**설명:** 표시 상자를 무효화합니다. <<UpdateWindow 메시지가 전송되거나 운영 체제에 업데이트 시간이 있는 경우 창이 업데이트됩니다.

```jsl

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

**구문:** obj &lt;&lt; Is Dirty

**설명:** 문서의 수정된 상태를 가져옵니다. 1은 문서가 수정되었음을 의미하며 저장 여부를 묻습니다. 0은 문서가 수정되지 않았음을 의미합니다.

**JMP추가된 버전:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Is Modal Dialog

**구문:** obj &lt;&lt; Is Modal Dialog

**설명:** 창이 모달 대화상자이면 true를 반환합니다. 창 처리기 콜백에서 호출한 경우에만 유용합니다.

```jsl

With Window Handler(
	New Window( "Modal Window", <<Modal ),
	Function( {win},
		Print( win << Is Modal Dialog() );
		win << close window();
	)
);

```

### Journal

**구문:** obj &lt;&lt; Journal

**설명:** 표시 상자에서 저널을 생성합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << journal;

```

### Journal Window

**구문:** obj &lt;&lt; Journal Window

**설명:** 창의 저널 창을 엽니다.

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Journal Window;

```

### Launch

**구문:** obj &lt;&lt; Launch

**설명:** 지정된 argument를 표시 상자의 컨텍스트에서 실행합니다.

```jsl

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

**구문:** rs = obj &lt;&lt; Make RowState Handler( &lt;dt&gt;, function(a) )

**설명:** 지정된 데이터 테이블 또는 현재 데이터 테이블에 대한 행 상태 처리기를 생성합니다. 이 함수는 상자의 필터 컨텍스트에서 행 상태가 변경되면 호출됩니다. 함수의 인수는 변경된 행 번호를 보유하거나, 행 상태 필터가 변경된 경우 -1을 보유합니다.

#### Single table

```jsl

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

#### Where subset

```jsl

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

**구문:** obj &lt;&lt; Margin( sides );sides = obj &lt;&lt; Get Margin

**설명:** 여백은 상자 테두리와 인접 상자 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 여백에 적용됩니다.

```jsl

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

**구문:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

**설명:** 창을 최대화합니다. 기본 인수는 1입니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Maximize Window( 1 );
Wait( 1 );
w << Maximize Window( 0 );

```

### Minimize Window

**구문:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

**설명:** 창을 최소화합니다. 기본 인수는 1입니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Minimize Window( 1 );
Wait( 1 );
w << Minimize Window( 0 );

```

### Move Window

**구문:** obj &lt;&lt; Move Window( x,y )

**설명:** 창을 지정된 위치로 이동합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### Next

**구문:** obj &lt;&lt; Next

**설명:** 이 표시 상자 뒤의 표시 상자를 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
next = rbiv << Next();
Print( next << Class Name() );

```

### On Close

**구문:** obj &lt;&lt; On Close( script )

**설명:** 창을 닫을 때 실행할 스크립트 또는 함수를 설정합니다. 이 스크립트는 닫기를 허용하려면 1을 반환하고, 창이 닫히지 않게 하려면 0을 반환해야 합니다.

#### 닫기 스크립트

```jsl

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

#### 닫기 함수

```jsl

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

**구문:** obj &lt;&lt; Optimize Display

**설명:** 데이터 테이블의 열 너비 및 창을 최적 크기로 설정합니다.

**JMP추가된 버전:** 14

```jsl

//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**구문:** obj &lt;&lt; Pad Window( bool )

**설명:** 창 안쪽 여백을 설정 또는 해제합니다.

```jsl

//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Padding

**구문:** obj &lt;&lt; Padding( sides );sides = obj &lt;&lt; Get Padding

**설명:** 안쪽 여백은 상자 내용과 테두리 사이에 공백을 추가합니다. 명명된 인수를 사용하거나 값 목록을 제공하십시오. 값을 하나만 제공하면 모든 측면에 적용되고, 값을 두 개 지정하면 가로 및 세로 안쪽 여백에 적용됩니다.

```jsl

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

**구문:** obj &lt;&lt; Page Break

**설명:** 표시 상자 앞에 페이지 구분을 삽입합니다.

```jsl

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

**구문:** obj &lt;&lt; Parent

**설명:** 이 표시 상자의 상위 항목을 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisParent = axisbox << parent();
Print( axisParent << Class Name() );

```

### Prepend

**구문:** obj &lt;&lt; Prepend( db2 )

**설명:** 표시 트리에서 db 앞에 db2를 추가합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << prepend( Text Box( "=== above ===" ) );

```

### Prev Sib

**구문:** obj &lt;&lt; Prev Sib

**설명:** 표시 상자의 이전 형제 항목을 반환합니다.

**JMP추가된 버전:** 15

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 2 )];
axisSibling = axisbox << Prev Sib();
Print( axisSibling << Class Name() );

```

### Print Window

**구문:** obj &lt;&lt; Print Window

**설명:** 창을 인쇄합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Reshow

**구문:** obj &lt;&lt; Reshow

**설명:** 표시 상자를 무효화하고 창을 새 내용으로 업데이트합니다. 업데이트 시기에 대한 추가 제어가 필요한 경우 <<Inval 및 <<UpdateWindow 메시지를 참조하십시오.

```jsl

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

**구문:** obj &lt;&lt; Save Capture( &lt;"path"&gt;, &lt;format&gt;, &lt;Add Sibling(n)&gt; )

**설명:** 표시 상자의 화면 캡처를 지정된 path에 저장합니다. path를 제공하지 않으면 다른 이름으로 저장 창이 나타납니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Capture( "$TEMP/jmp_example.png", "png" );

```

### Save HTML

**구문:** obj &lt;&lt; Save HTML( &lt;pathname&gt;, &lt;format&gt; )

**설명:** HTML 소스를 지정된 format의 그래픽을 포함하는 폴더와 함께 저장합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save HTML( "$TEMP/jmp_example.html" );

```

### Save Interactive HTML

**구문:** obj &lt;&lt; Save Interactive HTML( &lt;pathname&gt;, &lt;Boolean&gt; )

**설명:** 데이터가 포함된 대화식 HTML을 파일에 저장합니다. Boolean 인수는 보고서가 정적임을 나타냅니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Interactive HTML( "$TEMP/jmp_example.html" );

```

### Save Journal

**구문:** obj &lt;&lt; Save Journal( &lt;pathname&gt; )

**설명:** 표시 상자에 대한 저널 소스를 저장합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Journal( "$TEMP/jmp_example.jrn" );

```

### Save MSWord

**구문:** obj &lt;&lt; Save MSWord( &lt;pathname&gt;, &lt;format&gt; )

**설명:** 표시 상자를 Microsoft Word 문서로 저장합니다(Windows만 해당).

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save MSWord( "$TEMP/jmp_example.doc" );

```

### Save PDF

**구문:** obj &lt;&lt; Save PDF( &lt;pathname&gt;, &lt;Show Page Setup(0|1)&gt;, &lt;Portrait(0|1)&gt; )

**설명:** 표시 상자의 PDF를 저장합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save PDF( "$TEMP/jmp_example.pdf" );

```

### Save Picture

**구문:** obj &lt;&lt; Save Picture( &lt;pathname&gt;, &lt;format&gt;, &lt;Scale(factor)&gt;, &lt;Type("Bitmap" | "Scalable")&gt;, &lt;View("Picture" | "Screen" | "Print"), &lt;Appearance("Default" | "Current")&gt;, &lt;SubRect(Left(number), Top(number), Right(number), Bottom(number))&gt; )

**설명:** 표시 상자 그림을 저장합니다. 지원되는 형식은 EMF(Windows), PICT(Macintosh), JPEG, JPG, GIF 또는 PNG입니다. 선택적 Scale 인수는 이미지를 배율이 조정된 해상도로 렌더링합니다. 배율을 조정하려면 표시 상자를 늘릴 수 있어야 합니다. Type 인수는 결과가 확장 가능한 벡터 이미지인지 아니면 비트맵인지 결정합니다. 기본적으로 PDF와 같은 벡터 형식으로 저장하는 데 적합한 확장 가능 이미지가 반환됩니다. View 옵션은 일부 상자의 동작을 변경합니다. "Picture"(기본값) 옵션은 스크롤된 영역이 전체 표시된 상태에서 이미지 형식으로 내보내는 것처럼 보고서를 그립니다. "Screen" 보기 모드는 보고서를 화면에 표시된 대로 그리고, "Print"는 페이지 설정 기능 없이 인쇄할 때처럼 보고서를 그립니다. SubRect 옵션은 전체 이미지가 아니라 결과 이미지의 일부를 캡처합니다. Appearance 옵션은 "Default" 출력 색상에서 화면에 표시된 "Current" 색상으로 변경할 수 있습니다. View, SubRect 및 Appearance 옵션은 Type "Bitmap"에만 지원됩니다.

#### 기본값

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Picture( "$TEMP/jmp_example.png", "png" );

```

#### 보기 및 모양

```jsl

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

#### 척도

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv[FrameBox( 1 )] << Set Stretch( "Window", "Window" );
rbiv << Save Picture( "$TEMP/jmp_example_scale.png", "png", Scale( 1.5 ) );
New Window( "scaled image", New Image( "$TEMP/jmp_example_scale.png" ) );

```

### Save Presentation

**구문:** obj &lt;&lt; Save Presentation( "filename.pptx", &lt;Template("path\\to\\my_template.pptx")&gt;, &lt;Insert(Begin|End|#) | Replace(Begin|End|#) | Append&gt;, &lt;Outline Titles(None|Hide|TopLeft|TopRight|BottomLeft|BottomRight)&gt;, &lt;"EMF"|"PNG"|"JPG"|"Native"&gt; )

**설명:** 표시 상자 테이블 및 그래프 슬라이드를 프레젠테이션에 저장합니다. 프레젠테이션은 Microsoft PowerPoint나 기타 프레젠테이션 소프트웨어에서 열 수 있습니다.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save Presentation( "$TEMP/jmp_example.pptx" );
Open( "$TEMP/jmp_example.pptx" );

```

### Save RTF

**구문:** obj &lt;&lt; Save RTF( &lt;pathname&gt;, &lt;format&gt; )

**설명:** RTF 소스를 지정된 format의 그래픽과 함께 저장합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Save RTF( "$TEMP/jmp_example.rtf", "png" );

```

### Save Text

**구문:** obj &lt;&lt; Save Text( &lt;pathname&gt;, &lt;format&gt; )

**설명:** 표시 상자의 텍스트가 포함된 파일을 저장합니다.

```jsl

//This message applies to all display box objects
win = New Window( "Example", a = Text Box( "Example Text" ) );
a << save text( "$TEMP/jmp_example.txt" );

```

### Save Window Report

**구문:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**설명:** 현재 보고서 창을 JMP 보고서 파일(.jrp)에 저장합니다.

**JMP추가된 버전:** 16

```jsl

//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Scroll Window

**구문:** obj &lt;&lt; Scroll Window( DisplayBox | &lt;Relative(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;)&gt; | &lt;Absolute(&lt;v&gt; | &lt;h&gt;,&lt;v&gt;) )

**설명:** 창 스크롤 막대를 조정하여 지정된 표시 상자를 보기 영역으로 가져오거나, 상대 픽셀 수로 스크롤하거나, 절대 픽셀 위치로 스크롤합니다. 픽셀 수 대신 "Start" 또는 "End" 키워드를 사용할 수 있습니다.

#### Absolute

```jsl


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

#### Box

```jsl


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

#### Relative

```jsl


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

**구문:** obj &lt;&lt; Select

**설명:** 편집 메뉴 명령에서 사용할 수 있도록 이 개체를 선택합니다.

```jsl

//This message applies to all display box objects
New Window( "Example", ex = Button Box( "Press Me" ) );
ex << Select;

```

### Set Content Size

**구문:** obj &lt;&lt; Set Content Size( x,y )

**설명:** 창 안의 내용 크기를 설정합니다.

```jsl

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

**구문:** obj &lt;&lt; Set Dirty

**설명:** 문서의 수정된 상태를 설정합니다. 0은 저장 여부를 묻지 않고 1은 저장 여부를 묻습니다.

**JMP추가된 버전:** 14

```jsl


ww = New Window( "Test", <<Script, "Open(\!"$SAMPLE_DATA\Big Class.jmp\!");" );
Show( ww << Is Dirty );
ww << Set Dirty( 0 );
Show( ww << Is Dirty );

```

### Set Height

**구문:** obj &lt;&lt; Set Height( width )

**설명:** 표시 상자의 높이를 설정합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Height( 150 );

```

### Set Main Window

**구문:** obj &lt;&lt; Set Main Window

**설명:** 창을 JMP의 주 창으로 설정하고 이전 주 창을 일반 창으로 설정합니다.

```jsl

//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Max Size

**구문:** obj &lt;&lt; Set Max Size( width,height )

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최대 크기를 설정합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Max Size( 500, 500 );
fb << Get Max Size;

```

### Set Min Size

**구문:** obj &lt;&lt; Set Min Size( width,height )

**설명:** 이 표시 상자를 자동으로 늘릴 수 있는 최소 크기를 설정합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Min Size( 30, 30 );
fb << Get Min Size;

```

### Set Page Setup

**구문:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

**설명:** pdf로 저장하거나 인쇄하는 동안 사용되는 페이지 설정 정보를 지정합니다. 필요한 경우 개요 상자에서 목차를 생성할 수도 있습니다.

```jsl

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

**구문:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

**설명:** 인쇄된 출력에 대한 왼쪽, 가운데 및 오른쪽 바닥글을 설정합니다.

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Footer Test" ) );
w << Set Print Footers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Print Headers

**구문:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

**설명:** 인쇄된 출력에 대한 왼쪽, 가운데 및 오른쪽 머리글을 설정합니다.

```jsl

//This message applies to all display box objects
w = New Window( "Window", Text Box( "Header Test" ) );
w << Set Print Headers(
	"Today is: &d;"/*left*/, "&wt;"/*center*/,
	"Page &pn; of &pc;"/*right*/
);
w << Print Window;

```

### Set Property

**구문:** obj &lt;&lt; Set Property( "property", value )

**설명:** 표시 상자에 대한 property의 값을 설정합니다.

```jsl

New Window( "Example", bb = Button Box( "Press Me", Print( "Pressed" ) ) );
bb << Set Property( "Enabled", 0 );

```

### Set Report Title

**구문:** obj &lt;&lt; Set Report Title( "string" )

**설명:** 보고서 제목을 변경합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Report Title( "New Title" );

```

### Set Stretch

**구문:** obj &lt;&lt; Set Stretch( x,y )

**설명:** 상자의 가로 및 세로 늘이기 동작을 설정합니다. Window와 함께 늘어나는 상자는 창 또는 분할 도구 크기가 변경되면 크기가 조정됩니다. Fill을 위해 늘어나는 상자는 컨테이너의 사용 가능한 공간을 채우기 위해 늘어납니다. 일반적으로 늘이기 설정이 Off인 상자는 늘어나지 않습니다. 대부분의 상자는 Neutral을 기본값으로 설정하며, 이는 하위 상자를 기준으로 동작을 결정한다는 의미입니다.

**JMP추가된 버전:** 16

#### 창과 함께 늘이기

```jsl

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

#### 채우기 위해 늘이기

```jsl

//This message applies to all display box objects
New Window( "Stretch",
	V List Box(
		H List Box( Text Edit Box( "String1" ), Text Edit Box( "String2" ) ),
		Spacer Box( Size( 20, 20 ), Color( "Light Red" ), <<Set Stretch( "Fill", "Off" ) )
	)
);

```

### Set Summary Behavior

**구문:** obj &lt;&lt; Set Summary Behavior( "Default"|"Visible"|"Collapse" )

**설명:** Sets the behavior of the box when a report is viewed in Summary mode.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
d = dt << Distribution( Column( :height ) );
d << Report View( "Summary" );
r = d << Report;
tb = r[Table Box( 1 )];
tb << Set Summary Behavior( "Visible" );

```

### Set Width

**구문:** obj &lt;&lt; Set Width( width )

**설명:** 표시 상자의 너비를 설정합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r[framebox( 1 )];
fb << Set Width( 400 );

```

### Set Window Icon

**구문:** obj &lt;&lt; Set Window Icon( icon name )

**설명:** 창 아이콘을 설정합니다.

```jsl

//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**구문:** obj &lt;&lt; Set Window Size( x,y )

**설명:** 창 크기를 설정합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Set Window Title

**구문:** obj &lt;&lt; Set Window Title( "string" )

**설명:** 창 제목을 변경합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Set Window Title( "New Title" );

```

### Show Properties

**구문:** obj &lt;&lt; Show Properties

**설명:** 표시 상자에 대한 특성 편집기를 표시합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Properties();

```

### Show Tree Structure

**구문:** obj &lt;&lt; Show Tree Structure

**설명:** 표시 상자의 계층적 트리 구조 및 관련 노드를 표시합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rbiv << Show Tree Structure();

```

### Show Window

**구문:** obj &lt;&lt; Show Window( state=0|1 )

**설명:** 창을 표시하거나 숨깁니다. 창을 임시로 숨길 때 유용합니다. 기본적으로 설정되어 있습니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 1 );
w << Show Window( 0 );
Wait( 2 );
w << Show Window( 1 );

```

### Sib

**구문:** obj &lt;&lt; Sib

**설명:** 표시 상자의 형제 항목을 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
axisbox = rbiv[axis box( 1 )];
axisSibling = axisbox << sib();
Print( axisSibling << Class Name() );

```

### Sib Append

**구문:** obj &lt;&lt; Sib Append( Display box, Horizontal|Vertical )

**설명:** 이 표시 상자 바로 뒤에 표시 상자를 추가합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/big class.jmp" );
d = dt << Distribution( Column( :height ) );
r = d << report;
fb = r()[framebox( 1 )];
fb << sib append( Text Box( "============ after ==============", Rotate Text( "Right" ) ), "Horizontal" );
fb << sib append( Text Box( "=== below ===" ), "Vertical" );

```

### Sib Prepend

**구문:** obj &lt;&lt; Sib Prepend( Display box, Horizontal|Vertical )

**설명:** 이 표시 상자 바로 앞에 표시 상자를 추가합니다.

```jsl

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

**구문:** obj &lt;&lt; Size Window( x,y )

**설명:** 창 크기를 설정합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Text Color

**구문:** obj &lt;&lt; Text Color( color );color = obj &lt;&lt; Get Text Color

**설명:** 텍스트 색상이 설정되어 있으면 해당 색상을 사용하여 텍스트를 그립니다. 특성이 설정되어 있지 않으면 포함하는 상자의 텍스트 색상을 상속합니다.

**JMP추가된 버전:** 15

```jsl

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

**구문:** obj &lt;&lt; Top Parent

**설명:** 이 표시 상자의 루트 상위 항목을 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
rootParent = rbiv << Top Parent();
Print( rootParent << Class Name() );

```

### UI Only

**구문:** obj &lt;&lt; UI Only( state=0|1 );state = obj &lt;&lt; Get UI Only

### Update Window

**구문:** obj &lt;&lt; Update Window

**설명:** 무효화된 영역이 있는 경우 표시 상자가 포함된 창을 업데이트합니다. <<Inval 메시지는 무효화된 영역을 생성합니다.

```jsl

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

**구문:** obj &lt;&lt; Vertical Alignment( "Default"|"Top"|"Center"|"Bottom" );"Default"|"Top"|"Center"|"Bottom" = obj &lt;&lt; Get Vertical Alignment

**설명:** 세로 맞춤은 상자가 전체 공간을 채우지 않을 경우 컨테이너 내에서의 상자 위치를 제어합니다.

```jsl

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

**구문:** obj &lt;&lt; Visibility( "Visible"|"Hidden"|"Collapse" );"Visible"|"Hidden"|"Collapse" = obj &lt;&lt; Get Visibility

**설명:** 표시 여부는 상자 표시 여부 및 상자가 공간을 차지하는지 여부를 결정합니다. 기본값 "Visible"은 개체가 표시된다는 것을 의미합니다. "Hidden" 상자는 표시되지는 않아도 공간을 차지하는 반면 "Collapsed" 상자는 레이아웃에서 공간을 차지하지 않습니다.

```jsl

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

**구문:** obj &lt;&lt; Window Class Name

**설명:** 표시 상자에 대한 창 클래스의 이름을 반환합니다.

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( y( :weight ), x( :height ) );
rbiv = biv << report;
Show( biv << Window Class Name() );
Show( rbiv << Window Class Name() );

```

### XPath

**구문:** obj &lt;&lt; XPath( XPath expression, &lt;English(0|1)&gt;, &lt;NoData(0|1)&gt; )

**설명:** 표시 트리의 XML 표현에 XPath 표현식을 적용하고 결과를 반환합니다. 기본적으로 문자열은 로컬 언어로 반환되고 XML에는 일부 상자 내의 데이터 값이 포함됩니다. 가능한 경우 영어 문자열을 반환하려면 English 옵션을 사용합니다. 상자 내의 데이터 값을 생략하려면 NoData 옵션을 사용합니다. 쿼리가 상자 속성만 기반으로 할 때 이렇게 하면 성능에 유용합니다.

#### Attributes

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[@isOpen='false']" )) << Close( 0 );

```

#### Box type

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//TextEditBox" )) << Text Color( "Green" );

```

#### Child box

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Summary of Fit']/TableBox" )) << Make Into Data Table;

```

#### Data

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//NumberColBoxItem[text()='40']/parent::*" )) << Text Color( "Green" );

```

#### Display Seg

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//MarkerSeg" )) << Set Marker( "Square" );

```

#### Text

```jsl

//This message applies to all display box objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Run Script( "Bivariate" );
(Report( biv ) << xpath( "//OutlineBox[text()='Parameter Estimates']" )) << Close;

```

### Zoom Window

**구문:** obj &lt;&lt; Zoom Window

**설명:** 모든 내용을 표시할 수 있도록 창 크기를 조정합니다.

```jsl

//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## 연결된 생성자

### Mouse Box

**구문:** box = MouseBox( displayBoxArgs )

**설명:** 마우스 동작에 대한 JSL 콜백을 생성할 수 있는 상자를 반환합니다.

```jsl

New Window( "Example",
	MouseBox(/*first sibling*/Text Box( "drag from here" ),
		<<setDragText( "hello" ),
		<<setTooltip( "source" ),
		<<setDragEnable( 1 ),
		<<setDragBegin(/* decide if a drag is allowed */Function( {this, clickpt},
				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */
			)
		),
		<<setDragEnd(/* clean up after a drag finishes or cancels */
			Function( {this, clickpt, how}, /* how=move,copy,ignore */
				If( how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */
					(this << child) << setText(
						"done!" /* 'move' suggests clearing the source */
					)
				)
			)
		)
	),
	MouseBox(/*second sibling*/Text Box( "drag to here" ),
		<<setTooltip( "destination" ),
		<<setDropEnable( 1 ),
		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */
			Function( {this, clickpt},
				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,
					1, /*else*/0
				)
			)
		),
		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},
				(this << child) << setText( text )
			)
		)
	)
);

```

## 항목 메시지

### GetChildBox

**구문:** GetChildBox( { x, y } | [ x y ] | x, y )

**설명:** 0개 이상의 내포된 표시 상자 목록(이 마우스 상자 내의 지정된 좌표에 있는 { child, grand-child, great-grand-child, ... })을 반환합니다. 대부분의 경우 각 하위 주위에 별도의 마우스 상자를 사용하는 것이 더 간단합니다.

```jsl

New Window( "MouseBox",
	Text Box( "Move the mouse around" ),
	MouseBox(
		Lineup Box( N Col( 2 ), 
            /*pre-load the spacer boxes with a color, but make them transparent as well so the color won't show*/
			s1 = Spacer Box( size( 50, 50 ), <<Color( "red" ), <<SetFill( 0 ) ),
			s2 = Spacer Box( size( 50, 50 ), <<Color( "green" ), <<SetFill( 0 ) ),
			s3 = Spacer Box( size( 50, 50 ), <<Color( "blue" ), <<SetFill( 0 ) ),
			Lineup Box( N Col( 2 ), 
                /*demonstrate nested boxes*/
				s4 = Spacer Box( size( 24, 24 ), <<Color( "red" ), <<SetFill( 0 ) ),
				s5 = Spacer Box( size( 24, 24 ), <<Color( "green" ), <<SetFill( 0 ) ),
				s6 = Spacer Box( size( 24, 24 ), <<Color( "blue" ), <<SetFill( 0 ) ),
				s7 = Spacer Box( size( 24, 24 ), <<Color( "yellow" ), <<SetFill( 0 ) )
			)
		), 
        /*set up a callback function to track the mouse movements*/
		<<SetTrackEnable( 1 ),
		<<SetTrack(
			Function( {this, clickpt}, /*clickpt is really the move point*/
/*on each mouse move, make children transparent*/
				s1 << setfill( 0 );
				s2 << setfill( 0 );
				s3 << setfill( 0 );
				s4 << setfill( 0 );
				s5 << setfill( 0 );
				s6 << setfill( 0 );
				s7 << setfill( 0 );
                /*retrieve a list of boxes under the clickpt (which is a mouse coordinate within the mouse box like {10,20})*/
				childBoxList = this << GetChildBox( clickpt );
                /* child 1 is the LineupBox.  child 2, if present, is one of the Spacer Boxes */
				If(
					N Items( childBoxList ) > 0 & (childBoxList[N Items( childBoxList )]) << className ==
					"SpacerBox", 
                    /*if a SpacerBox is under the mouse, make it opaque*/
					childBoxList[N Items( childBoxList )] << SetFill( 1 )
				);
			)
		)
	)
);

```

### GetClick

**구문:** obj &lt;&lt; GetClick

**설명:** <<SetClick에서 함수를 반환합니다.

```jsl

mb = MouseBox();
mb << setClick( Function( {this, clickPt, event}, Print( 42 ) ) );
mb << getClick();

```

### GetClickEnable

**구문:** obj &lt;&lt; GetClickEnable

**설명:** SetClickEnable에 설정된 값을 보고합니다.

```jsl

mb = MouseBox();
mb << setClickEnable( 1 );
mb << getClickEnable();

```

### GetDefaultCursor

**구문:** obj &lt;&lt; GetDefaultCursor

**설명:** SetDefaultCursor에 지정된 값을 가져옵니다.

### GetDefaultCursorEnable

**구문:** obj &lt;&lt; GetDefaultCursorEnable

**설명:** SetDefaultCursorEnable에 지정된 값을 가져옵니다.

### GetDestBox

**구문:** obj &lt;&lt; GetDestBox

### GetDragBegin

**구문:** obj &lt;&lt; GetDragBegin

**설명:** <<SetDragBegin에 지정된 함수를 반환합니다.

### GetDragEnable

**구문:** obj &lt;&lt; GetDragEnable

**설명:** MouseBox가 현재 소스 드래그앤드롭 작업을 허용하는지 여부를 묻습니다.

```jsl

mb = MouseBox();
mb << GetDragEnable;

```

### GetDragEnd

**구문:** obj &lt;&lt; GetDragEnd

**설명:** <<SetDragEnd에 지정된 함수를 반환합니다.

### GetDragText

**구문:** obj &lt;&lt; GetDragText

**설명:** 일반적으로 필요하지 않습니다. SetDragText가 제공한 텍스트를 반환합니다. 이 텍스트는 놓기 지점으로 전송된 텍스트가 아닐 수도 있습니다.

```jsl

mb = MouseBox();
mb << setDragText( "1000 words" );
mb << getDragText;

```

### GetDropCommit

**구문:** obj &lt;&lt; GetDropCommit

**설명:** <<setDropCommit에 설정된 함수를 반환합니다.

```jsl

mb = MouseBox();
mb << setDropCommit( Function( {this, clickPt, text}, Print( 42 ) ) );
mb << getDropCommit();

```

### GetDropEnable

**구문:** obj &lt;&lt; GetDropEnable

**설명:** <<SetDropEnable에 저장된 값을 보고합니다.

```jsl

mb = MouseBox();
mb << setDropEnable( 1 );
mb << getDropEnable();

```

### GetDropTrack

**구문:** obj &lt;&lt; GetDropTrack

**설명:** <<setDropTrack에 설정된 함수를 반환합니다.

```jsl

mb = MouseBox();
mb << setDropTrack( Function( {this, clickPt}, Print( 42 ) ) );
mb << getDropTrack();

```

### GetEdit

**구문:** obj &lt;&lt; GetEdit

### GetEditClear

**구문:** obj &lt;&lt; GetEditClear( state=0|1 )

### GetEditCopy

**구문:** obj &lt;&lt; GetEditCopy( state=0|1 )

### GetEditCopyLabel

**구문:** obj &lt;&lt; GetEditCopyLabel( state=0|1 )

### GetEditCopyText

**구문:** obj &lt;&lt; GetEditCopyText( state=0|1 )

### GetEditCut

**구문:** obj &lt;&lt; GetEditCut( state=0|1 )

### GetEditEnable

**구문:** obj &lt;&lt; GetEditEnable

### GetEditJournal

**구문:** obj &lt;&lt; GetEditJournal( state=0|1 )

### GetEditPaste

**구문:** obj &lt;&lt; GetEditPaste( state=0|1 )

### GetEditPasteJSL

**구문:** obj &lt;&lt; GetEditPasteJSL( state=0|1 )

### GetEditPasteLabel

**구문:** obj &lt;&lt; GetEditPasteLabel( state=0|1 )

### GetEditSaveSelectionAs

**구문:** obj &lt;&lt; GetEditSaveSelectionAs( state=0|1 )

### GetEditSubmit

**구문:** obj &lt;&lt; GetEditSubmit( state=0|1 )

### GetEditSubmitDebug

**구문:** obj &lt;&lt; GetEditSubmitDebug( state=0|1 )

### GetFocus

**구문:** obj &lt;&lt; GetFocus

### GetKey

**구문:** obj &lt;&lt; GetKey

**설명:** Set Key에 설정된 함수를 반환합니다.

```jsl

New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;
Show( mb << GetKey );

```

### GetKeyEnable

**구문:** obj &lt;&lt; GetKeyEnable

### GetMark

**구문:** obj &lt;&lt; GetMark

**설명:** <<SetMark에 지정된 값을 가져옵니다.

```jsl

New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );
mb << GetMark;

```

### GetMarkEnable

**구문:** obj &lt;&lt; GetMarkEnable

**설명:** <<SetMarkEnable에 설정된 값을 가져옵니다.

```jsl

New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();

```

### GetMarked

**구문:** obj &lt;&lt; GetMarked

**설명:** 현재 표시된 플래그를 반환합니다.

```jsl

New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();
mb << getMarked();

```

### GetSourceBox

**구문:** obj &lt;&lt; GetSourceBox

### GetToolTip

**구문:** obj &lt;&lt; GetToolTip

**설명:** 일반적으로 필요하지 않습니다. SetTooltip이 제공한 텍스트를 반환합니다. 툴팁은 자동이며 이 메시지가 필요하지 않습니다.

```jsl

mb = MouseBox();
mb << setTooltip( "this is your best choice" );
mb << getTooltip;

```

### GetTrack

**구문:** obj &lt;&lt; GetTrack

**설명:** <<SetTrack에 지정된 값을 가져옵니다.

```jsl

mb = MouseBox();
mb << setTrack( /*track the button-up mouse movement*/Function( {this, clickPt}, Print( 42 ) ) );
mb << getTrack();

```

### GetTrackEnable

**구문:** obj &lt;&lt; GetTrackEnable

**설명:** <<SetTrackEnable에 설정된 값을 가져옵니다.

```jsl

mb = MouseBox();
mb << setTrackEnable( 1 );
mb << getTrackEnable();

```

### GetUserData

**구문:** obj &lt;&lt; GetUserData

**설명:** <<SetUserData에 저장된 값을 가져옵니다.

```jsl

mb = MouseBox();
mb << setUserData( [1 2, 3 4] );
(mb << getUserData())[2, 1];

```

### RemoveFocus

**구문:** obj &lt;&lt; RemoveFocus

### SetClick

**구문:** obj &lt;&lt; SetClick( Function( {this, clickpt, event}, &lt;script&gt; ) )

**설명:** 버튼을 누를 때(또는 처음 누르거나 놓을 때) 마우스 이벤트를 처리할 함수를 제공합니다. 버튼이 눌리지 않은 경우 <<SetTrack()을 참조하십시오. clickpt는 이 MouseBox 내에서 클릭한 {x,y} 위치입니다. event는 클릭 이벤트입니다. 값은(발생한 순서대로) "Pressed", "Ticked" 또는 "Released"입니다.

```jsl

xsize = 300; /* size of the bitmap */
ysize = 200;
backred = .8; /* background color is light gray-green */
backgrn = .9;
backblu = .8;
RED = J( ysize, xsize, backred ); /* matrix where the bitmap is composed */
GRN = J( ysize, xsize, backgrn );
BLU = J( ysize, xsize, backblu );
BITMAP = New Image( xsize, ysize ); /* displaybox that holds the bitmap */
BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* initialize bitmap */
drawline = Function( {x0, y0, x1, y1}, /* utility function to draw a line in an array using matrix operations */
	{dx = x1 - x0, dy = y1 - y0, adx = Abs( dx ), ady = Abs( dy ), m, b},
	If( adx > ady,
		xx = Round( x0 ) :: Round( x1 );
		m = dy / dx;
		b = y0 - m * x0;
		yy = Round( xx * m + b );
	,
		yy = Round( y0 ) :: Round( y1 );
		m = dx / dy;
		b = x0 - m * y0;
		xx = Round( yy * m + b );
	);
	singleindex = (yy - 1) * N Col( GRN ) + xx;
	Try( GRN[singleindex] = .6, 0 ); /* catch indexing errors and ignore the problems */
	Try( RED[singleindex] = .1, 0 ); /* the line is dark green; you could add other */
	Try( BLU[singleindex] = .1, 0 ); /* controls to change the color. */
);
w = New Window( "paint",
	MouseBox( /* <<<<<<<< handler for mouse events */
		BITMAP, /* <<<<<< child box does not receive the mouse events */
		<<setTrackEnable( 1 ),
		<<setTrack(
			Function( {this, clickpt},
				this << setCursor( "Hand" ) /* button-up tracking - use the hand */
			)
		),
		<<setClickEnable( 1 ),
		<<setClick( /* button-down, move, button-release handler */
			Function( {this, clickpt, event}, /*Is Alt Key(),Is Control Key(),Is Shift Key() should be captured on "Pressed" */
				If( event == "Released" | event == "Canceled",
					this << setCursor( "Hand" ) /* switch back to hand immediately */
				,
					this << setCursor( "Finger" ) /* change cursor during drawing */
				);
				If(
					event == "Pressed",
						origin = clickpt; /* capture starting point */
						Show( event, origin );,
					event == "Moved", /* else */
						{x0, y0} = origin;
						{x1, y1} = clickpt; /* draw to new point */
						drawline( x0, y0, x1, y1 );
						drawline( x0 + 1, y0, x1 + 1, y1 ); /* make a thick line */
						drawline( x0 - 1, y0, x1 - 1, y1 );
						drawline( x0, y0 + 1, x1, y1 + 1 );
						drawline( x0, y0 - 1, x1, y1 - 1 );
						origin = clickpt;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} ); /* apply changes to bitmap */
						w << reshow; /* force screen update */
				,
					event == "Ticked", /* else ... while the button is pressed but not moving, the tick event will let you do something...here we fade the drawing... */
						GRN = (49 * GRN + backgrn) / 50;
						RED = (49 * RED + backred) / 50;
						BLU = (49 * BLU + backblu) / 50;
						BITMAP << setpixels( "rgb", {RED, GRN, BLU} );
						w << reshow;
				);
			)
		)
	)
);

```

### SetClickEnable

**구문:** obj &lt;&lt; SetClickEnable( state=0|1 )

**설명:** MouseBox를 활성화하여 <<SetClick 함수를 통해 버튼 누르기, 마우스 이동, 버튼 놓기 작업을 처리합니다.

### SetCursor

**구문:** obj &lt;&lt; SetCursor( "화살표"|"NS"|"EW"|"NWSE"|"NESW"|"Finger"|"Hand" )

**설명:** <<SetCursor("Hand")(또는 Finger 또는 Arrow 또는 NS EW NWSE NESW)는 커서를 설정합니다. <<SetTrack 또는 <<SetClick 함수에서 사용하십시오.

```jsl

New Window( "roll over demo",
	MouseBox(
		Text Box( "hello" ),
		<<setTrackEnable( 1 ),
		<<settrack(
			Function( {this, pos},
				(this << child) << FontColor( If( pos[1] >= 0, "red", "black" ) )
			)
		),
		<<setDefaultCursor( "Finger" )
	),
	MouseBox(
		Text Box( "there" ),
		<<setToolTip( "Special!" ),
		<<setTrackEnable( 1 ),
		<<settrack( Function( {this, pos}, this << setCursor( "Hand" ) ) )
	)
);

```

### SetDefaultCursor

**구문:** obj &lt;&lt; SetDefaultCursor( "화살표"|"NS"|"EW"|"NWSE"|"NESW"|"Finger"|"Hand" )

**설명:** SetDefaultCursorEnable(1)도 지정된 경우 표시할 기본 커서를 지정합니다. "Arrow", "NS", "EW", "NWSE", "NESW", "Finger" 또는 "Hand" 중 하나를 사용하십시오. SetTrack 스크립트에서 사용되는 SetCursor와 달리 SetDefaultCursor는 스크립트 없이도 작동합니다.

```jsl

clickFunction = Function( {this, pos, action},
	If(
		action == "Pressed", oldPos = pos,
		action == "Moved",
			dx = pos[1] - oldPos[1];
			dy = pos[2] - oldPos[2];
			oldPos = pos;
			{tops, lefts, rights, bottoms} = this << getUserData();
			If(
				N Items( tops ) > 0 & 0 < ((border << getTop()) + dy) & (((boxes[tops[1]] << child) << getTop
				) - dy) > 0,
				border << top( (border << getTop()) + dy );
				For( i = 1, i <= N Items( tops ), i++,
					(boxes[tops[i]] << child) << top( ((boxes[tops[i]] << child) << getTop) - dy )
				);
			);
			If(
				N Items( bottoms ) > 0 & 0 < ((border << getBottom()) - dy) & (((boxes[bottoms[1]] << child)
				 << getBottom) + dy) > 0,
				border << bottom( (border << getBottom()) - dy );
				For( i = 1, i <= N Items( bottoms ), i++,
					(boxes[bottoms[i]] << child) << bottom(
						((boxes[bottoms[i]] << child) << getBottom) + dy
					)
				);
			);
			If(
				N Items( lefts ) > 0 & 0 < ((border << getLeft()) + dx) & (((boxes[lefts[1]] << child) <<
				getLeft) - dx) > 0,
				border << Left( (border << getLeft()) + dx );
				For( i = 1, i <= N Items( lefts ), i++,
					(boxes[lefts[i]] << child) << Left( ((boxes[lefts[i]] << child) << getLeft) - dx )
				);
			);
			If(
				N Items( rights ) > 0 & 0 < ((border << getRight()) - dx) & (((boxes[rights[1]] << child) <<
				getRight) + dx) > 0,
				border << Right( (border << getRight()) - dx );
				For( i = 1, i <= N Items( rights ), i++,
					(boxes[rights[i]] << child) << Right( ((boxes[rights[i]] << child) << getRight) + dx )
				);
			);,
		action == "Released", 0,
		action == "Ticked",
			((this << child) << child) << settext(
				Char( Num( ((this << child) << child) << gettext() ) + 1 )
			)
	)
);
mb = Function( {boxNumber, cursor, TopLeftRightBottom},
	MouseBox(
		Border Box( sides( 15 ), Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ), Text Box( boxNumber ) ),
		<<setDefaultCursor( Eval( cursor ) ),
		<<setClickEnable( 1 ),
		<<SetClick( clickFunction ),
		<<SetUserData( TopLeftRightBottom )
	)
);
boxes = {};
bigBorder = 50;
New Window( "corner demo",
	border = Border Box( sides( 15 ), Left( bigBorder ), Right( bigBorder ), top( bigBorder ),
		bottom( bigBorder ),
		Lineup Box( N Col( 3 ), spacing( 10, 10 ),
			boxes[1] = mb( "1000", "NWSE", {{1, 2, 3}, {1, 4, 7}, {}, {}} ),
			boxes[2] = mb( "2000", "NS", {{1, 2, 3}, {}, {}, {}} ),
			boxes[3] = mb( "3000", "NESW", {{1, 2, 3}, {}, {3, 6, 9}, {}} ),
			boxes[4] = mb( "4000", "EW", {{}, {1, 4, 7}, {}, {}} ),
			boxes[5] = mb( "5000", "HAND", {{}, {}, {}, {}} ),
			boxes[6] = mb( "6000", "EW", {{}, {}, {3, 6, 9}, {}} ),
			boxes[7] = mb( "7000", "NESW", {{}, {1, 4, 7}, {}, {7, 8, 9}} ),
			boxes[8] = mb( "8000", "NS", {{}, {}, {}, {7, 8, 9}} ),
			boxes[9] = mb( "9000", "NWSE", {{}, {}, {3, 6, 9}, {7, 8, 9}} )
		)
	)
);

```

### SetDefaultCursorEnable

**구문:** obj &lt;&lt; SetDefaultCursorEnable( state=0|1 )

**설명:** MouseBox를 활성화하여 SetDefaultCursor로 지정된 커서를 표시합니다.

### SetDragBegin

**구문:** obj &lt;&lt; SetDragBegin( Function( {this, clickpt}, &lt;script&gt; ) )

**설명:** 드래그앤드롭 작업 시작 시 호출할 함수를 제공합니다. 이 함수는 0.0을 반환하여 드래그를 제한합니다. 또는 문자열을 반환하거나(<<SetDragText를 사용하는 대신) 1.0을 반환하여(<<SetDragText를 사용하기 위해) 드래그를 허용합니다. clickpt는 MouseBox 내에서 드래그가 시작된 {x,y} 위치입니다.

```jsl

/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragBegin( Function( {this, clickpt}, 1.0 /*always allow*/ ) );

```

### SetDragEnable

**구문:** obj &lt;&lt; SetDragEnable( state=0|1 )

**설명:** MouseBox가 드래그앤드롭 작업의 소스가 될 수 있습니다.

```jsl

New Window( "example",
	MouseBox( Text Box( "drag me to a text editor" ), <<SetDragEnable( 1 ), <<SetDragText( "hello" ) )
);

```

### SetDragEnd

**구문:** obj &lt;&lt; SetDragEnd( Function( {this, clickpt, how}, &lt;script&gt; ) )

**설명:** 드래그앤드롭 작업 종료 시 호출할 함수를 제공합니다. how는 작업이 종료된 방법("이동" 또는 "무시")을 보고합니다. 작업이 &apos;이동&apos;으로 종료된 경우 이 함수를 사용하여 드래그 소스 위치를 지울 수 있습니다. clickpt는 MouseBox 내에서 드래그가 시작된 {x,y} 위치입니다.

```jsl

/* See full example for MouseBox() */
mb = MouseBox();
mb << SetDragEnd(
	Function( {this, clickpt, how},
		If( how == "move",
			(this << child) << delete/* example; probably not what you want */
		)
	)
);

```

### SetDragText

**구문:** obj &lt;&lt; SetDragText

**설명:** MouseBox가 놓기 지점으로 보낼 텍스트를 지정합니다.

```jsl

mb = MouseBox();
mb << setDragText( "1000 words" );

```

### SetDropCommit

**구문:** obj &lt;&lt; SetDropCommit( Function( {this, clickpt, text}, &lt;script&gt; ) )

**설명:** 버튼 놓기 이벤트가 발생할 때 드래그앤드롭 시퀀스가 종료될 즈음 호출되는 함수를 제공합니다. commit 함수는 드래그 소스가 제공한 text를 받으며 필요한 경우 TextBox의 내용을 설정하여 이를 사용할 수 있습니다. clickpt는 MouseBox 내에서 드래그가 종료된 {x,y} 위치입니다.

```jsl

/* See full example for <<SetDropTrack() */
mb = MouseBox();
mb << setDropCommit(
	Function( {this, clickPt, text},
		((this << child) << child) << setText( text );
		1;/* return code is ignored */
	)
);

```

### SetDropEnable

**구문:** obj &lt;&lt; SetDropEnable( state=0|1 )

**설명:** MouseBox를 활성화하여 놓기를 허용합니다.

```jsl

mb = MouseBox();
mb << setDropEnable( 1 );

```

### SetDropTrack

**구문:** obj &lt;&lt; SetDropTrack( Function( {this, clickpt}, &lt;script&gt; ) )

**설명:** MouseBox에서 드래그앤드롭 작업이 드래그할 때 호출할 함수를 제공합니다. 제공된 함수는 0.0(드래그 금지) 또는 1.0(드래그 허용)을 반환합니다. 실제 드롭은 버튼을 놓을 때까지 발생하지 않으며 버튼 놓기 시 드롭한 텍스트에 대한 작업을 수행하기 위해 SetDropCommit 함수가 호출됩니다(setDropTrack이 1.0을 반환한 경우에만). clickpt는 MouseBox 내에서 다른 MouseBox를 드래그하고 있는 {x,y} 위치입니다. 드래그가 this MouseBox에서 수행되지 않은 경우 {-1, -1}입니다.

```jsl

nextToBlank = Function( {x, y}, /* helper function */
	If( /* child is border, grandchild is text */
		(x > 1 & (((puzzle[x - 1][y] << child) << child) << gettext) == " ") | (x < 4 & (((puzzle[x + 1][y]
		 << child) << child) << gettext) == " ") | (y > 1 & (((puzzle[x][y - 1] << child) << child) <<
		gettext) == " ") | (y < 4 & (((puzzle[x][y + 1] << child) << child) << gettext) == " ")
	,
		1,
		0
	)
);/* only allow drag begin if next door to empty cell */
dragBegin = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		((this << child) << child) << getText/* the message is the textbox content */
	, /* else */
		0 /* suppress the drag */
	);
);/* function to remove the character from the source cell, but only if the drop was successful */
dragEnd = Function( {this, clickPt, how}, /* how is copy/move/ignore */
	destbox = this << getDestBox;
	If( Is Empty( destBox ),
		Show( "unknown destination" );
		0 /* don't know where the dest was, force ignore */
		;
	,
		Try(
			{x, y} = destbox << GetUserData,
			x = -1;
			y = -1;
		); /* the destbox might not have a list in userdata */
		If(
			Try(
				puzzle[x][y] != destbox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not dropped in this puzzle" );
			0 /* not this puzzle instance, force ignore */
			;
		, /* else */
			If( how == "ignore",
				Show( "drop not completed" );
				0 /* the drop was not completed */
				;
			, /* else */
				((this << child) << child) << setText( " " )
			)
		);
	);
	0 /* the return code is ignored */
	;
);/* function to decide if a drop is allowed.  return codes (0,1) are critical. */
dropTrack = Function( {this, clickPt},
	sourcebox = this << getSourceBox;
	If( Is Empty( sourcebox ),
		Show( "unknown source" );
		0 /* no drop from unknown source box */
		;
	, /* else */
		Try(
			{x, y} = sourcebox << getUserData,
			x = -1;
			y = -1;
		); /* the sourcebox mightnot have a list in userdata */
		If(
			Try(
				puzzle[x][y] != sourcebox,
				1 /*throw is same as !=*/
			)
		, /* x,y might not be valid index */
			Show( "not from this puzzle" );
			0 /* not sourced from this puzzle instance, ignore */
			;
		, /* else */
			If( ((this << child) << child) << getText != " ",
				0 /* no drop on occupied cell */
			, /* else */
				1 /* allow drop on the blank cell */
			)
		);
	);
);/* function to implement the drop */
dropCommit = Function( {this, clickPt, text},
	((this << child) << child) << setText( text );
	1; /* ignored */
);/* cursor changer for cells that can source a drag */
track = Function( {this, clickPt},
	{x, y} = this << getUserData;
	If( nextToBlank( x, y ),
		this << setCursor( "Hand" ),
		this << setCursor( "Arrow" )
	);
	1; /* ignored */
);/* helper function to construct the displaybox tree */
mb = Function( {letter, x, y},
	MouseBox(
		Border Box( Left( 9 ), Right( 9 ), top( 3 ), bottom( 3 ), sides( 15 ),
			Text Box( letter, <<setFont( "Courier New" ), <<set font size( 15 ), <<set font style( "bold" ) )
		),
		<<setUserData( Eval List( {x, y} ) ), /* remember my location.  I don't move, but my content changes. */
		<<setDragEnable( 1 ),
		<<setDragBegin( dragBegin ), /* dragFunctions defined below */
		<<setDragEnd( dragEnd ),
		<<setDropEnable( 1 ),
		<<setDropTrack( dropTrack ),
		<<setDropCommit( dropCommit ),
		<<setTrackEnable( 1 ),
		<<setTrack( track )
	)
);
puzzle = Eval List(
	{Eval List( {mb( "b", 1, 1 ), mb( "u", 1, 2 ), mb( "y", 1, 3 ), mb( " ", 1, 4 )} ),
	Eval List( {mb( "t", 2, 1 ), mb( "h", 2, 2 ), mb( "i", 2, 3 ), mb( "s", 2, 4 )} ),
	Eval List( {mb( "w", 3, 1 ), mb( "o", 3, 2 ), mb( "r", 3, 3 ), mb( "d", 3, 4 )} ),
	Eval List( {mb( "g", 4, 1 ), mb( "a", 4, 2 ), mb( "m", 4, 3 ), mb( "e", 4, 4 )} )}
);
New Window( "puzzle",
	Border Box( Left( 5 ), Right( 5 ), top( 5 ), bottom( 5 ), sides( 15 ),
		Lineup Box( N Col( 4 ), spacing( 3, 3 ),
			puzzle[1][1],
			puzzle[1][2],
			puzzle[1][3],
			puzzle[1][4],
			puzzle[2][1],
			puzzle[2][2],
			puzzle[2][3],
			puzzle[2][4],
			puzzle[3][1],
			puzzle[3][2],
			puzzle[3][3],
			puzzle[3][4],
			puzzle[4][1],
			puzzle[4][2],
			puzzle[4][3],
			puzzle[4][4]
		)
	)
);

```

### SetEdit

**구문:** obj &lt;&lt; SetEdit

### SetEditClear

**구문:** obj &lt;&lt; SetEditClear( state=0|1 )

### SetEditCopy

**구문:** obj &lt;&lt; SetEditCopy( state=0|1 )

### SetEditCopyLabel

**구문:** obj &lt;&lt; SetEditCopyLabel( state=0|1 )

### SetEditCopyText

**구문:** obj &lt;&lt; SetEditCopyText( state=0|1 )

### SetEditCut

**구문:** obj &lt;&lt; SetEditCut( state=0|1 )

### SetEditEnable

**구문:** obj &lt;&lt; SetEditEnable

### SetEditJournal

**구문:** obj &lt;&lt; SetEditJournal( state=0|1 )

### SetEditPaste

**구문:** obj &lt;&lt; SetEditPaste( state=0|1 )

### SetEditPasteJSL

**구문:** obj &lt;&lt; SetEditPasteJSL( state=0|1 )

### SetEditPasteLabel

**구문:** obj &lt;&lt; SetEditPasteLabel( state=0|1 )

### SetEditSaveSelectionAs

**구문:** obj &lt;&lt; SetEditSaveSelectionAs( state=0|1 )

### SetEditSubmit

**구문:** obj &lt;&lt; SetEditSubmit( state=0|1 )

### SetEditSubmitDebug

**구문:** obj &lt;&lt; SetEditSubmitDebug( state=0|1 )

### SetFocus

**구문:** obj &lt;&lt; SetFocus

### SetKey

**구문:** obj &lt;&lt; SetKey( Function( {this, key}, &lt;script&gt; ) )

**설명:** 마우스 상자에 포커스가 있을 때 키를 누르면 호출되는 함수를 설정합니다. 함수는 키가 처리된 경우 1을 반환하고, 그렇지 않은 경우 0을 반환합니다.

```jsl

New Window( "SetKey Example", mb = MouseBox( tb = Text Box( "Press a key." ) ) );
mb << setkey(
	Function( {this, key},
		tb << settext( key );
		1;
	)
);
mb << setkeyenable( 1 );
mb << setfocus;

```

### SetKeyEnable

**구문:** obj &lt;&lt; SetKeyEnable

### SetMark

**구문:** obj &lt;&lt; SetMark( Function( {this}, &lt;script&gt; ) )

**설명:** SetMark는 상자에 포커스가 있을 때 마우스를 클릭하거나 리턴 키를 누르면 호출되는 함수를 지정합니다. 표시를 사용하여 Mouse Box와 연결된 선택 상태를 구현할 수 있습니다. 클릭 작업을 구현하려면 <<SetClick을 사용하십시오.

```jsl

New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << getMarkEnable();
mb << setMark( Function( {this}, this << Set Marked( !(this << Get Marked) ) ) );

```

### SetMarkEnable

**구문:** obj &lt;&lt; SetMarkEnable( state=0|1 )

**설명:** MouseBox를 활성화하여 마우스를 클릭할 때 또는 리턴 키를 누를 때(상자에 포커스가 있는 경우) <<SetMark 함수를 호출합니다.

```jsl

New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );

```

### SetMarked

**구문:** obj &lt;&lt; SetMarked( state=0|1 )

**설명:** Mouse Box에 대한 표시된 플래그를 설정합니다. 표시된 상자는 강조된 배경과 함께 표시됩니다.

```jsl

New Window( "Mouse Box", mb = MouseBox( Text Box( "Text" ) ) );
mb << setMarkEnable( 1 );
mb << setMarked();

```

### SetToolTip

**구문:** obj &lt;&lt; SetToolTip

**설명:** MouseBox가 툴팁에 사용할 텍스트를 지정합니다.

```jsl

mb = MouseBox();
mb << setTooltip( "this is your best choice" );

```

### SetTrack

**구문:** obj &lt;&lt; SetTrack( Function( {this, clickpt}, &lt;script&gt; ) )

**설명:** 버튼이 눌리지 않은 상태로 마우스를 MouseBox로 이동할 때 호출될 함수를 지정합니다. 버튼 누르기의 경우 <<SetClick을 참조하십시오. clickpt는 이 MouseBox 내에서 커서의 현재 위치를 나타내는 {x,y} 위치입니다.

```jsl

/* See full example for <<SetClick() */
mb = MouseBox();
mb << setTrack(
	Function( {this, clickpt},
		this << setCursor( "Hand" ) /* button-up tracking - use the hand */
	)
);

```

### SetTrackEnable

**구문:** obj &lt;&lt; SetTrackEnable( state=0|1 )

**설명:** MouseBox를 활성화하여 버튼을 누르지 않은 상태로 마우스를 이동할 때 <<SetTrack 함수를 호출합니다.

### SetUserData

**구문:** obj &lt;&lt; SetUserData

**설명:** JSL 값을 MouseBox에 저장합니다. 값은 숫자, 문자열, 목록, 연관 배열 또는 기타 JSL 유형일 수 있습니다.

