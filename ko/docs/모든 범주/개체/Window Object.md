# Window Object



## 공유 항목 메시지

### Bring Window To Front

**구문:** obj &lt;&lt; Bring Window To Front

**설명:** 창을 맨 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Run Script( "Bivariate" );
w << Bring Window To Front;

```

### Close Window

**구문:** obj &lt;&lt; Close Window( &lt;"NoSave"&gt; )

**설명:** 창을 닫습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Close Window;

```

### Get Content Size

**구문:** obj &lt;&lt; Get Content Size

**설명:** 창 안의 내용 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Content Size();
Show( c );

```

### Get On Close

**구문:** obj &lt;&lt; Get On Close

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

### Get Page Setup

**구문:** obj &lt;&lt; Get Page Setup

**설명:** PDF에 대한 페이지 설정 정보를 가져옵니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Window", Text Box( "Page Setup Test" ) );
w << get page setup();

```

### Get Project

**구문:** project = obj &lt;&lt; Get Project()

**설명:** 창의 상위 프로젝트 또는 Empty()(프로젝트에 없는 경우)를 반환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
c = w << Get Project();
Show( c );

```

### Get Show Window

**구문:** obj &lt;&lt; Get Show Window

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

### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Window Icon

**구문:** obj &lt;&lt; Get Window Icon

**설명:** 창 아이콘을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Icon;
Show( t );

```

### Get Window Position

**구문:** obj &lt;&lt; Get Window Position

**설명:** 창 위치를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
p = w << Get Window Position();
Show( p );

```

### Get Window Size

**구문:** obj &lt;&lt; Get Window Size

**설명:** 창 크기를 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
s = w << Get Window Size();
Show( s );

```

### Get Window Title

**구문:** obj &lt;&lt; Get Window Title

**설명:** 창 제목을 반환합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
t = w << Get Window Title;
Show( t );

```

### Get Window View

**구문:** obj &lt;&lt; Get Window View

**설명:** 현재 창 보기를 반환합니다. 창은 "Visible"(표시), "Invisible"(숨김) 또는 "Private"(비공개)일 수 있습니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Print( w << Get Window View() );

```

### Is Modal Dialog

**구문:** obj &lt;&lt; Is Modal Dialog

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

### Maximize Window

**구문:** obj &lt;&lt; Maximize Window( &lt;state=0|1&gt; )

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

**구문:** obj &lt;&lt; Minimize Window( &lt;state=0|1&gt; )

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

**구문:** obj &lt;&lt; Move Window( x,y )

**설명:** 창을 지정된 위치로 이동합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
Wait( 2 );
w << Move Window( 500, 500 );

```

### On Close

**구문:** obj &lt;&lt; On Close( script )

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

**구문:** obj &lt;&lt; Optimize Display

**설명:** 데이터 테이블의 열 너비 및 창을 최적 크기로 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
//This message applies to Data Table objects
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Optimize Display;

```

### Pad Window

**구문:** obj &lt;&lt; Pad Window( bool )

**설명:** 창 안쪽 여백을 설정 또는 해제합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
r = d << report;
r << Pad Window( 0 );

```

### Print Window

**구문:** obj &lt;&lt; Print Window

**설명:** 창을 인쇄합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Print Window;

```

### Save Window Report

**구문:** obj &lt;&lt; Save Window Report( pathname, &lt;embed data(0|1)&gt; )

**설명:** 현재 보고서 창을 JMP 보고서 파일(.jrp)에 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
//This message can be sent to any display box object but will be applied to the report window
Open( "$SAMPLE_DATA/Big Class.jmp" );
d = distribution( Column( :height ) );
d << Save Window Report( "$DOCUMENTS/test.jrp", embed data( 1 ) );

```

### Set Content Size

**구문:** obj &lt;&lt; Set Content Size( x,y )

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

### Set Main Window

**구문:** obj &lt;&lt; Set Main Window

**설명:** 창을 JMP의 주 창으로 설정하고 이전 주 창을 일반 창으로 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Main Window", Text Box( "Main JMP Window" ) );
w << Set Main Window;

```

### Set Page Setup

**구문:** obj &lt;&lt; Set Page Setup( &lt;margins(left, top, right, bottom)&gt;, &lt;scale(s)&gt;, &lt;portrait(0|1)&gt;, &lt;paper size(p)&gt;, &lt;Table of Contents(always, never, default)&gt; )

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

**구문:** obj &lt;&lt; Set Print Footers( left footer, center footer, right header )

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

**구문:** obj &lt;&lt; Set Print Headers( left header, center header, right header )

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

### Set Window Icon

**구문:** obj &lt;&lt; Set Window Icon( icon name )

**설명:** 창 아이콘을 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = New Window( "Example", ex = Button Box( "New Analysis" ) );
w << Set Window Icon( "Scatter3D" );

```

### Set Window Size

**구문:** obj &lt;&lt; Set Window Size( x,y )

**설명:** 창 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 800, 1200 );

```

### Show Window

**구문:** obj &lt;&lt; Show Window( state=0|1 )

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

### Size Window

**구문:** obj &lt;&lt; Size Window( x,y )

**설명:** 창 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Size Window( 500, 500 );

```

### Zoom Window

**구문:** obj &lt;&lt; Zoom Window

**설명:** 모든 내용을 표시할 수 있도록 창 크기를 조정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Size( 80, 120 );
Wait( 2 );
w << Zoom Window;

```

## 항목 메시지

### Set Window Title

**구문:** obj &lt;&lt; Set Window Title

**설명:** 창 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
//This message applies to all display box objects
w = Open( "$SAMPLE_DATA/Big Class.jmp" );
w << Set Window Title( "New Title" );

```

