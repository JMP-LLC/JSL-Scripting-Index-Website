# WebReport



## 항목 메시지

### Add Image

**구문:** obj &lt;&lt; Add Image("path to image" | File("path to image"), &lt;Title(...)&gt;,&lt;Description(...)&gt;)

**설명:** 웹 보고서에 게시할 이미지를 추가합니다. 선택적 인수로는 제목 및 설명이 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

webreport = New Web Report();
webreport << Add Image(
	File( "$SAMPLE_IMAGES/black rhino footprint.jpg" ),
	Title( "Black Rhino Footprint" )
);

```

### Add Report

**구문:** obj &lt;&lt; Add Report( jmpreport, &lt;Title(...)&gt;, &lt;Description(...)&gt;, &lt;Publish Data(0|1)&gt;, &lt;Enable Warnings(0|1)&gt;, &lt;Optimization("Interactivity" | "Performance")&gt; )

**설명:** 웹 보고서에 게시할 보고서를 추가합니다. 선택적 인수로는 제목 및 설명이 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport );

```

### Add Reports

**구문:** obj &lt;&lt; Add Reports( reports )

**설명:** 기본 옵션을 사용하여 웹 보고서에 JMP 보고서 목록을 추가합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
Distribution( Continuous Distribution( Column( :weight ) ), Nominal Distribution( Column( :age ) ) );
Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
windows = Find All( Reports );
If( N Items( windows ) > 0,
	webreport = New Web Report();
	webreport << Title( "Big Class Reports" );
	webreport << Description( "Multiple reports found in Big Class." );
	webreport << Add Reports( windows );
);

```

### Description

**구문:** obj &lt;&lt; Description(...)

**설명:** 웹 보고서에 대한 설명을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport_1 = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport_2 = Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport_1 );
webreport << Add Report( jmpreport_2 );
webreport << Title( "Publish Test" );
webreport << Description( "This is a multiple report publish" );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Index

**구문:** obj &lt;&lt; Index( Title(...), &lt;Description(...)&gt;, &lt;Timestamp(1 | 0)&gt;, &lt;Font(name, style)&gt;, &lt;Logo(image path)&gt;, &lt;CSS(css path)&gt;, &lt;Theme(Default | Orange | Blue | Red | Green | Black)&gt;, &lt;Style(LargeList | SmallList | Grid | Custom)&gt; )

**설명:** 웹 보고서에 사용자 인덱스 페이지를 추가합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport1 = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport2 = dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );
webreport = New Web Report();
webreport << Add Report( jmpreport1 );
webreport << Add Report( jmpreport2, Title( "Oneway Analysis" ), Description( "shows height by sex" ) );
webreport << Index(
	Title( "Publish Test" ),
	Description( "This is a multiple report publish with a custom index page" ),
	Timestamp( 1 ),
	Font( "Arial Narrow", "Bold Italic" ),
	Logo( "$SAMPLE_IMAGES/pi.gif" ),
	Theme( "Orange" ),
	Style( "Grid" )
);
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Reset

**구문:** obj &lt;&lt; Reset()

**설명:** 웹 보고서를 새 값으로 재설정합니다. 이렇게 하면 공개적으로 지정한 정보, 파일 위치 및 기타 캐시된 정보가 모두 지워집니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
windows = Find All( Reports );
If( N Items( windows ) > 0,
	webreport = New Web Report();
	webreport << Add Reports( windows );
);
webreport << Reset();
webreport << Add Report( jmpreport );

```

### Save

**구문:** obj &lt;&lt; Save ("directory path", &lt;Replace(&lt;0&gt;|&lt;1&gt;)&gt;, &lt;Publish Data(&lt;0&gt;|&lt;1&gt;)&gt;)

**설명:** 웹 보고서를 지정된 디렉터리에 저장합니다. 성공할 경우 게시된 보고서 위치의 파일 이름이 반환됩니다. 로컬에 저장된 웹 보고서에는 내장된 사용자 데이터가 포함될 수 있습니다. Publish Data 값을 false로 설정하면 사용자 데이터를 포함하지 않고 정적 이미지를 사용하여 보고서가 생성됩니다. 기본값은 true입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

### Title

**구문:** obj &lt;&lt; Title(...)

**설명:** 웹 보고서의 제목을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );

Open( "$SAMPLE_DATA/Big Class.jmp", Invisible );
jmpreport_1 = Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
jmpreport_2 = Bivariate(
	Y( :weight ),
	X( :height ),
	Automatic Recalc( 1 ),
	Fit Line( {Line Color( {213, 72, 87} )} ),
	Local Data Filter( Add Filter( columns( :sex ) ) )
);
webreport = New Web Report();
webreport << Add Report( jmpreport_1 );
webreport << Add Report( jmpreport_2 );
webreport << Title( "Publish Test" );
file = webreport << Save( "$TEMP" );
If( !Is Empty( file ),
	Web( file )
);

```

