# Display



### Alignment Cell Box

**구문:** y = Alignment Cell Box( row, col, nRow, nCol, &lt;Sides(left+2*top+4*right+8*bottom=15)&gt; &lt;RowSpan(nRow matrix)&gt; &lt;ColSpan(nCol matrix)&gt;, matrix or list of strings )

**설명:** 정렬 격자 상자 안의 행 또는 열 내용을 포함하는 표시 상자에 대한 참조를 반환합니다.

**JMP추가된 버전:** 19

```jsl

New Window( "Crosstab",	Alignment Grid Box(		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),		Alignment Cell Box(			4,			1,			6,			3,			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)", "7 (32%)",			"12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)", "3 (8%)", "1 (6%)", "2 (9%)",			"3 (8%)"}		)	));

```

### Alignment Grid Box

**구문:** y = Alignment Grid Box( alignment cell boxes )

**설명:** 정렬 셀 상자를 포함할 수 있는 표시 상자에 대한 참조를 반환합니다.

**JMP추가된 버전:** 19

```jsl

New Window( "Crosstab",	Alignment Grid Box(		Alignment Cell Box( 0, 1, 1, 1, ColSpan( [3] ), {"sex"} ),		Alignment Cell Box( 1, 1, 1, 3, {"F", "M", "Total"} ),		Alignment Cell Box( 3, 0, 1, 1, Sides( 0 ), ColSpan( [4] ), {"age"} ),		Alignment Cell Box( 4, 0, 6, 1, {"  12", "  13", "  14", "  15", "  16", "  17"} ),		Alignment Cell Box(			4,			1,			6,			3,			{"5 (28%)", "3 (14%)", "8 (20%)", "3 (17%)", "4 (18%)", "7 (18%)", "5 (28%)", "7 (32%)",			"12 (30%)", "2 (11%)", "5 (23%)", "7 (18%)", "2 (11%)", "1 (5%)", "3 (8%)", "1 (6%)", "2 (9%)",			"3 (8%)"}		)	));

```

### Alignment Multi Box

**구문:** y = Alignment Multi Box( row, col, nRow, nCol, nElements, list-of-nElements-matrices or empty values, list-of-nElements-lists of strings or empty values )

**설명:** 정렬 격자 상자 안의 각 셀에 있는 여러 요소를 포함하는 표시 상자에 대한 참조를 반환합니다.

**JMP추가된 버전:** 19

```jsl

New Window( "Alignment MultiBox",	Border Box( Top( 15 ), Left( 15 ), Right( 15 ), Bottom( 15 ),		Alignment Grid Box(			Alignment Multi Box( 0, 1, 1, 1, 2, {}, {{"Freq"}, {"Share"}} ),			Alignment Cell Box( 0, 2, 1, 1, ColSpan( [2] ), {"sex"} ),			Alignment Cell Box( 1, 2, 1, 2, ColSpan( [1, 1] ), {"F", "M"} ),			Alignment Cell Box( 2, 0, 1, 1, RowSpan( [7] ), {"age"} ),			Alignment Cell Box( 2, 1, 7, 1, {"12", "13", "14", "15", "16", "17", "Total Responses"} ),			Alignment Multi Box(				2,				2,				6,				2,				2,				{[5 3, 5 2, 2 1, 3 4, 7 5, 1 2], [0.277 0.167, 0.278 0.111, 0.111 0.055, 0.136 0.181, 0.318				0.227, 0.045 0.090]},				{Empty(), Empty()}			),			Alignment Cell Box( 8, 2, 1, 2, [18 22] )		)	));

```

### Alpha Shape

**구문:** ashape = Alpha Shape(Triangulation)

**설명:** 지정된 삼각 분할에 대한 알파 셰이프를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );triang = Triangulation( X( :X, :Y ), Y( :POP ) );ashape = Alpha Shape( triang );

```

### Border Box

**구문:** y = Border Box( &lt;Left( pix )&gt;, &lt;Right( pix )&gt;, &lt;Top( pix )&gt;, &lt;Bottom( pix )&gt;, &lt;Sides( 0 )&gt;, displayBoxArg )

**설명:** 인수 표시 상자 주위에 공백을 추가하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Lineup Box( N Col( 1 ), spacing( 10 ),		Text Box( "Quadratic Formula" ),		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )		)	));

```

### Box Plot Seg

**구문:** b = Box Plot Seg(&lt;data&gt;, &lt;frequency&gt;, &lt;weight&gt;, &lt;vertical=0|1&gt;)

**설명:** 전달된 x 및 y 값을 기반으로 한 상자 그림을 나타내는 표시 세그먼트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Box Plot Seg Example",	g = Graph Box( Frame Size( 40, 180 ), Y Scale( 0, 5 ), Box Plot Seg( [1, 2, 3, 4] ) ));g[AxisBox( 2 )] << delete;seg = (g[FrameBox( 1 )] << Find Seg( "Box Plot Seg" ));

```

### Busy Light

**구문:** y = Busy Light( &lt; &lt;&lt;Automatic(0|1)&gt;, &lt;Size(x, y)&gt;, &lt; &lt;&lt;Disable&gt; )

**설명:** 실행 중을 나타내는 회전하는 이미지를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", Busy Light( <<automatic ) );

```

### Button Box

**구문:** y = Button Box( title, script )

**설명:** 제목이 있는 버튼을 표시하기 위한 표시 상자를 반환합니다. script 인수는 버튼을 클릭하면 실행됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", Button Box( "Press Me", Print( "Pressed." ) ) );

```

### Calendar Box

**구문:** y = Calendar Box()

**설명:** 달력 컨트롤이 포함된 표시 상자를 반환합니다. 이 달력에서는 날짜와 시간(선택 사항)을 하나만 선택할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Calendar Box Example", Calendar Box() );

```

### Check Box

**구문:** y = Check Box( {item, ...}, &lt;script&gt; )

**설명:** 하나 이상의 체크박스를 표시하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", cb = Check Box( {"Good"}, Show( cb << Get() ) ) );

```

### Clear Global Window Handler

**구문:** Clear Global Window Handler()

**설명:** Set Global Window Handler에서 이전에 설정한 창 처리기를 지웁니다.

**JMP추가된 버전:** 17

```jsl

Set Global Window Handler(	Function( {window},		Print( window << get window title() );		window << close window();	));New Window( "My Window" );Clear Global Window Handler();

```

### Col Box

**구문:** y = Col Box( title, boxes )

**설명:** 지정된 표시 상자로 구성된 열 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = New Window( "Example",	exx = 1;	exy = 4;	exz = 8;	Table Box(		String Col Box( "strings", {"x", "y", "z"} ),		Col Box(			"boxes",			Slider Box( 0, 10, exx, Show( exx ) ),			Slider Box( 0, 10, exy, Show( exy ) ),			Slider Box( 0, 10, exz, Show( exz ) )		)	););

```

### Col List Box

**구문:** y = Col List Box( &lt;Data Table( name )&gt;, &lt;all&gt;|&lt;character|numeric&gt;, &lt;width( pix )&gt;, &lt;grouped&gt;, &lt;maxSelected( n )&gt;, &lt;nlines( n )&gt;, &lt;MaxItems( n )&gt;, &lt;MinItems( n )&gt;, &lt;onChange( expr )&gt;, &lt; &lt;&lt;Modeling Type({"Any","Continuous","Nominal","Ordinal","Multiple Response","Unstructured Text","Vector","None","Row State"}) &gt;, &lt; &lt;&lt; Set Data Type(Any|Numeric|Character)&gt;, &lt;script&gt; )

**설명:** 데이터 테이블 열 선택을 위한 목록 상자를 표시하는 표시 상자를 반환합니다. <<Modeling Type을 사용하면 모델링 유형을 설정하거나 제한할 수 있습니다. 기본값 "Any"는 열이 기본 모델링 유형인 "Continuous", "Nominal" 또는 "Ordinal"을 취할 수 있게 허용합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example 1", Col List Box( all, width( 250 ), maxSelected( 1 ) ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example 2",	Col List Box( all, <<Set Data Type( "numeric" ), width( 250 ), maxSelected( 1 ) ));

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example 3",	H List Box(		ll1 = Col List Box( all ),		Button Box( "Add", ll2 << append( ll1 << get selected ) ),		ll2 = Col List Box( "numeric", MaxItems( 1 ), nlines( 1 ) ),		Button Box( "Remove", ll2 << remove selected )	));

```

### Col Span Box

**구문:** y = Col Span Box( title, children )

**설명:** 머리글이 하위 열에 걸쳐 있는 열을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "test",	Table Box(		Col Span Box(			"Col Span",			String Col Box( "col 1", {"A", "B", "C"} ),			Number Col Box( "col2", {1, 2, 3} )		)	));

```

### Column Dialog

**구문:** y = Column Dialog( &lt;var = ColList("Label", &lt;Min Col(min)&gt;, &lt;Max Col(max)&gt;, &lt;Width(w)&gt;, &lt;Data Type("Numeric"|"Character"|"Any")&gt;, &lt;Modeling Type({&lt;"Continuous"&gt;, &lt;"Nominal"&gt;, &lt;"Ordinal"&gt;, &lt;"None"&gt;, &lt;"Multiple Response"&gt;, &lt;"Unstructured Text"&gt;, &lt;"Vector"&gt;})&gt; )&gt;, &lt;var=EditText("string")&gt;, &lt;var=EditNumber(num)&gt;, &lt;var=Check Box( "Text", 0|1)&gt;, &lt;var=RadioButtons( "a", "b" )&gt;, &lt;var=Combo Box("choice1", ...)&gt;, &lt;HList(box, ...)&gt;, &lt;VList(box, ...)&gt;, &lt;LineUp(ncol, box, ...)&gt;, &lt;Text Box("string")&gt;, &lt;Window Title("title")&gt;, &lt;Window Icon("icon string")&gt;, &lt;Dialog Description("description")&gt;, &lt;Recall(script)&gt;, &lt;Help Script(script)&gt;)

**설명:** 데이터 테이블의 열을 선택할 수 있는 필드가 포함된 모달 창을 사용자에게 표시합니다. 여러 가지 유형의 입력 상자와 컨테이너 상자를 지정하여 창을 구성할 수 있습니다

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Column Dialog(	ex y = ColList( "Y", Min Col( 1 ), Max Col( 2 ), Data Type( "Numeric" ) ),	ex x = ColList( "X", Max Col( 1 ), Modeling Type( {"Continuous", "Multiple Response"} ) ),	Line Up( 2, Text Box( "Alpha" ), ex = EditNumber( .05 ), Text Box( "Beta" ), ey = EditText( "xyz" ) ),	HList( cb = Check Box( "check", 1 ) ),	HList( combo = Combo Box( "option1", "option2" ) ),	HList( rb = RadioButtons( "a", "b" ) ),	Window Title( "Custom Launch Dialog" ),	Window Icon( "RowState" ), //icon string can be a full path file name of an image file.	Dialog Description( "The dialog before a groundbreaking discovery!" ),	Recall Script(		Function( {dlgBox},			dlgBox[list box box( 2 )] << remove all;			dlgBox[list box box( 1 )] << clear selection;			dlgBox[list box box( 1 )] << set selected( 3 );			dlgBox[Button Box( 2 )] << click;		)	),	Help Script( Web( "http://www.jmp.com/" ) ));

```

### Combo Box

**구문:** y = Combo Box( {item &lt;( tipstr )&gt;, ...}, &lt;script&gt; )

**설명:** 팝업 메뉴가 포함된 콤보 상자를 표시하기 위한 표시 상자를 반환합니다. 필요한 경우 콤보 상자의 각 항목에 툴팁(항목 텍스트 문자열 다음에 괄호로 묶은 문자열 추가)을 지정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", cb = Combo Box( {"single", "double", "triple"("tool tip")}, Show( cb << Get() ) ) );

```

### Context Box

**구문:** y = Context Box( displayBox, ... )

**설명:** 범위 실행 컨텍스트를 설정하는 표시 상자를 반환합니다. 표시 창의 각 부분을 서로 독립적으로 실행할 수 있도록 허용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Context Box( Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) ) ));

```

### Contour Seg

**구문:** me = Contour Seg( Triangulation, [ levels ], &lt; zColor([colors], &lt;Cycle Colors|Interpolate Colors&gt;) &gt;, &lt; Transparency([] | t) &gt;

**설명:** 삼각 분할의 등고선을 나타내는 표시 세그먼트를 반환합니다. 각 수준에 대해 행렬 또는 목록으로 선택적 색상을 지정할 수 있습니다. 투명도는 숫자 또는 행렬로 지정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );{xx, yy} = tri << Get Points();New Window( "Contour Seg Example",	g = Graph Box(		X Scale( Min( xx ) - .1, Max( xx ) + .1 ),		Y Scale( Min( yy ) - .1, Max( yy ) + .1 ),		Contour Seg(			tri,			[0, 400, 1000, 2000, 9000],			zColor( 5 + [64 32 0 16 48] ),			Transparency( [1, 1, 1, 1, 1] )		)	));

```

### Current Report

**구문:** y = Current Report( &lt;Project(title|index|box|window)&gt; )

**설명:** 현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 현재 보고서를 참조하는 표시 상자 참조를 반환합니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Current Report();

```

### Current Window

**구문:** y = Current Window( &lt;Project(title|index|box|window)&gt; )

**설명:** 현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 현재 창에 대한 참조를 반환합니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Example Outline",		Text Box( "Example Text" ),		Button Box( "Close", Current Window() << Close Window )	));

```

### Data Filter Context Box

**구문:** y = Data Filter Context Box( displayBox )

**설명:** 표시 트리에 포함된 로컬 데이터 필터의 범위를 정의하는 표시 상자를 반환합니다. 데이터 필터 및 Data Filter Context Box는 계층으로 배열할 수 있으며 Data Filter Context Box내에 포함된 플랫폼 또는 상자 간에 공유됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Shared Local Filter",	Data Filter Context Box(		H List Box(			dt << Data Filter( Local, Add Filter( columns( :sex ), Where( :sex == "F" ) ) ),			dt << Bubble Plot(				X( :weight ),				Y( :height ),				Fit To Window( "On" ),				Sizes( :age ),				Title Position( 0, 0 )			),			dt << Graph Builder(				Size( 525, 456 ),				Show Control Panel( 0 ),				Fit To Window( "On" ),				Variables( X( :weight ), Y( :age ) ),				Elements( Box Plot( X, Y, Legend( 4 ) ) ),			)		)	));

```

### Data Filter Source Box

**구문:** y = Data Filter Source Box( displayBox )

**설명:** 선택 필터의 소스를 정의하는 표시 상자를 반환합니다. 데이터 필터 소스 상자에 들어 있는 보고서의 선택된 행이 분석을 위해 공통 데이터 필터 컨텍스트 상자에 들어 있는 다른 보고서에 포함됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Selection Filter",	Data Filter Context Box(		H List Box(			Data Filter Source Box(				Graph Builder(					Size( 208, 207 ),					Show Control Panel( 0 ),					Show Legend( 0 ),					Variables( X( :age ) ),					Elements( Bar( X, Legend( 3 ) ) ),					SendToReport( Dispatch( {}, "Graph Builder", OutlineBox, {Set Title( "Filter" )} ) )				)			),			Platform(				Current Data Table(),				Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) )			)		)	));

```

### Data Grid Box

**구문:** y = Data Grid Box( )

**설명:** 데이터 테이블을 포함할 수 있는 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example", x = Data Grid Box() );x << Set Data Table( dt );

```

### Data Table Box

**구문:** y = Data Table Box( datatable )

**설명:** 지정된 데이터 테이블을 나타내는 테이블 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example", Data Table Box( dt ) );

```

### Data Table Col Box

**구문:** y = Data Table Col Box( col )

**설명:** 지정된 데이터 테이블 열에 해당하는 열 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example", Table Box( Data Table Col Box( :name ), Data Table Col Box( :height ) ) );

```

### Data Table Plot Col Box

**구문:** y = Data Table Plot Col Box( col )

**설명:** 지정된 데이터 테이블 열에 해당하는 Plot Col Box를 반환하고, 필요한 경우 두 번째 및 세 번째 데이터 테이블 열을 사용하여 관리 한계를 생성합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example", Table Box( Data Table Plot Col Box( :weight ), Data Table Plot Col Box( :height ) ) );

```

### Dialog

**구문:** y = Dialog( specification )

**설명:** 사용자에게 모달 창을 표시합니다. 이 함수는 더 이상 사용되지 않습니다. <<Modal 인수와 함께 New Window 함수를 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

// See Example 2 for the deprecated Dialog equivalentIf(	ex = New Window( "Dialog() example",		<<Modal,		<<Return Result,		V List Box(			H List Box( "Set this value", variable = Number Edit Box( 42 ) ),			H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )		)	);	ex["button"] == 1;,	ex["variable"],	"CANCEL");

```

**예제 2**

```jsl

// DeprecatedIf(	ex = Dialog(		Title( " Dialog() example" ),		vlist(			hlist( "Set this value", variable = EditNumber( 42 ) ),			hlist( Button( "OK" ), Button( "Cancel" ) )		)	);	ex["button"] == 1;,	ex["variable"],	"CANCEL");

```

### Excerpt Box

**구문:** y = Excerpt Box( rptnum, lstSubscripts )

**설명:** rptnum 번호의 보고서에 지정된 발췌문이 포함된 표시 상자 및 표시 서브스크립트 lstSubscripts의 목록을 반환합니다. 서브스크립트는 이전 발췌문이 제거된 후의 보고서의 현재 상태를 반영합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### Expr As Picture

**구문:** y = Expr As Picture( expr( ... ), &lt;width in pixels&gt;, &lt;Max Matrix Size( dim )&gt; )

**설명:** 지정된 표현식을 포함하는 이미지를 계산식 그림으로 반환합니다. 기본 너비는 600픽셀이고 기본 최대 행렬 크기는 100입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Lineup Box( N Col( 1 ), spacing( 10 ),		Text Box( "Quadratic Formula" ),		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )		)	));

```

### Filter Col Selector

**구문:** y = Filter Col Selector(&lt;Data Table(name)&gt;, &lt;width(pixels)&gt;, &lt;nlines(n)&gt;, &lt;script&gt;, &lt;onchange(expr)&gt;)

**설명:** 항목 목록이 포함된 표시 상자를 반환합니다. 컨트롤은 열 필터링을 허용합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Col List Box Example", fontobj = lb = Filter Col Selector( width( 250 ) ) );

```

### Get Project

**구문:** project = Get Project( title|index|box|window )

**설명:** 열려 있는 특정 프로젝트에 대한 참조(제목, 인덱스 또는 상자)를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );                             Print( Get Project( 2 ) << Get Window Title() );

```

**예제 2**

```jsl

Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );                             project = Get Project( "Big Class" );

```

### Get Project List

**구문:** projectList = Get Project List()

**설명:** 열려 있는 모든 프로젝트의 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Project();Open( "$SAMPLE_PROJECTS/Big Class.jmpprj" );                              Print( Get Project List() << Get Window Title() );

```

### Get Window

**구문:** window = Get Window( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt;, title|index|box )

**설명:** 열려 있는 특정 창에 대한 참조(제목, 인덱스 또는 상자)를 반환합니다.



검색은 현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 창으로 제한됩니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.



검색을 특정 유형의 창으로 제한하려면 "Data Tables", "Journals", "Reports" 또는 "Dialogs" 중 하나와 함께 선택적 Type() 인수를 사용하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Open( "$SAMPLE_DATA\Big Class.jmp" );                                        window = Get Window( "Big Class" );

```

**예제 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );                             window = Get Window( Project( project ), "Big Class" );

```

### Get Window List

**구문:** windowList = Get Window List( &lt;Project(title|index|box|window)&gt;, &lt;Type(string)&gt; )

**설명:** 열려 있는 모든 창의 목록을 반환합니다.



이 목록은 현재 프로젝트(또는 프로젝트의 스크립트를 실행 중이지 않은 경우 프로젝트 없음)의 창으로 제한됩니다.



프로젝트를 지정하려면 제목, 인덱스, 표시 상자 또는 창 개체와 함께 선택적 Project() 인수를 사용하십시오. 프로젝트의 스크립트를 실행 중일 때 프로젝트 없음을 지정하려면 Project(0)을 사용하십시오.



목록을 특정 유형의 창으로 제한하려면 "Data Tables", "Journals", "Reports" 또는 "Dialogs" 중 하나와 함께 선택적 Type() 인수를 사용하십시오.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Print( Get Window List() << Get Window Title() );

```

**예제 2**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );                             Print( Get Window List( Project( project ) ) << Get Window Title() );

```

**예제 3**

```jsl

project = Open( "$SAMPLE_PROJECTS\Big Class.jmpprj" );                             Print( Get Window List( Project( project ), Type( "Data Tables" ) ) << Get Window Title() );

```

### Global Box

**구문:** box = Global Box( name )

**설명:** 전역 변수의 값을 표시하는 표시 상자를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

ex = .6;New Window( "Example", Global Box( ex ) );

```

### Graph

**구문:** y = Graph Box( props, script )

**설명:** 축이 있는 그래프가 포함된 표시 상자를 반환합니다. 명명된 특성 인수는 title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer 및 SuppressAxes일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );		Pen Color( "Blue" );		Line( [10 30 70], [88 22 44] );	));

```

### Graph 3D Box

**구문:** y = Graph 3D Box()

**설명:** (시험용) 다른 표시 상자와 함께 사용하여 사용자 보고서를 생성할 수 있는 3D 콘텐츠가 포함된 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

x3d = Graph 3D Box( framesize( 300, 300 ), Xname( "X Axis" ), Yname( "Y Axis" ), Zname( "Z Axis" ) );New Window( "Graph3DBox Example", x3d );x3d << addmarkers( /*x*/[20 20 20 20], /*y*/[20 20 20 20], /*z*/[10 20 30 40] );x3d << AddVector(	[60 60 60]/*from*/,	[90 60 60, 60 90 60, 60 60 90]/*to*/,	ShaftThickness( [.1] ),	FromThickness( [.2] ),	ToThickness( [.3] ),	ShaftColor( [-255] ),	FromColor( [-16711680] ),	ToColor( [-65280] ),	Facets( Round ),	FromCap( Sphere ),	toCap( Point ));

```

### Graph Box

**구문:** y = Graph Box( props, script )

**설명:** 축이 있는 그래프가 포함된 표시 상자를 반환합니다. 명명된 특성 인수는 title("title"), XScale(low,high), YScale(low,high), FrameSize(h,v), XName("x"), yName("y"), DoubleBuffer 및 SuppressAxes일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );		Pen Color( "Blue" );		Line( [10 30 70], [88 22 44] );	));

```

### H Center Box

**구문:** y = H Center Box( &lt;childbox&gt; )

**설명:** childbox 표시 상자 인수가 포함된 표시 상자를 반환합니다. 인수에 해당하는 표시 상자는 중심 상자의 모든 다른 형제 항목 및 하위 항목의 최대 크기로 정의된 수평 공간의 가운데에 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "test",	H List Box(		V Center Box( Text Box( "V+V" ) ),		V List Box(			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			H Center Box( Text Box( "H+H" ) ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )		)	));

```

### H List Box

**구문:** y = H List Box( &lt;Align( center|bottom )&gt;, displayBox, ... )

**설명:** 인수에 의해 제공된 표시 상자를 가로 레이아웃에 배열하는 표시 상자를 반환합니다. <<Hold 메시지는 발췌될 보고서를 소유할 시트를 알려 줍니다. 선택적 Align 인수는 표시 상자 안에서 내용의 bottom 맞춤 또는 center 맞춤을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Picker", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) ));

```

### H Scroll Box

**구문:** y = H Scroll Box( &lt;Size( x )&gt;, displayBox )

**설명:** 가로 스크롤 막대를 사용하여 더 큰 하위 상자를 배치하는 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Picker",		H Scroll Box(			Size( 200 ),			H List Box(				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )			),			<<Set Stretch( "Window", "Window" )		)	));

```

### H Sheet Box

**구문:** y = H Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**설명:** 인수에 의해 제공된 여러 표시 상자가 가로 형태로 배열된 하나의 표시 상자를 반환합니다. <<Hold 메시지는 발췌될 보고서가 소속될 시트를 알려 줍니다. 선택적 Align 인수를 사용하여 표시 상자 안에서 right 맞춤 또는 center 맞춤을 지정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### H Splitter Box

**구문:** y = H Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**설명:** 대화식 크기 컨트롤을 사용하여 다른 표시 상자를 가로로 배열하는 표시 상자를 반환합니다. 하위 크기는 Splitter Box의 너비 또는 높이의 비율로 지정됩니다. 선택적 Size 인수는 최상위 분할 상자에만 사용됩니다. 하위 수준 상자는 다른 하위 상자처럼 크기가 조정됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Splitter",	V Splitter Box(		Size( 800, 600 ),		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),		H Splitter Box(			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),			spacer = Spacer Box(),			<<Sizes( {0.4, 0.6} )		)	));graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );pict << Set Min Size( 100, 100 );pict << Set Max Size( 500, 500 );pict << Set Stretch( "Window", "Window" );spacer << Set Fill( 1 );spacer << Color( "Red" );spacer << Set Stretch( "Window", "Window" );

```

### Hier Box

**구문:** y = Hier Box( text, Hier Box( ... ), Hier Box( ... ), ... )

**설명:** 계층 트리에 대한 표시 상자를 반환합니다. text 인수는 노드 이름이며 Text Edit Box일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Hier Box(		Text Edit Box( "Cause 1" ),		Hier Box( Text Edit Box( "Subcause 1.1" ), <<direction( 1 ) ),		Hier Box( Text Box( "Subcause 1.2" ) ),		<<Change Type( Fishbone ),		<<direction( 1 )	));

```

### Hist Seg

**구문:** b = Hist Seg([data], &lt;[freq data]&gt;,&lt;[weight data]&gt;, &lt;vertical=0|1&gt;, &lt;Row States()&gt;)

**설명:** 기록 세그먼트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;rows = N Row( xx );New Window( "Hist Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, .2 ),		Hist Seg( xx, J( rows, 1 ), J( rows, 1 ), 1, Row States( dt ) )	));

```

### Icon Box

**구문:** Box = Icon Box( "Name" )

**설명:** 아이콘이 포함된 표시 상자를 생성합니다. 여기서 name 인수는 JMP 아이콘 이름 또는 이미지에 대한 경로일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

New Window( "Example",	ex1 = Icon Box( "Popup" ),	ex2 = Icon Box( "Locked" ),	ex3 = Icon Box( "Labeled" ),	ex4 = Icon Box( "Sub" ),	ex5 = Icon Box( "Excluded" ),	ex6 = Icon Box( "Hidden" ),	ex7 = Icon Box( "Continuous" ),	ex8 = Icon Box( "Nominal" ),	ex9 = Icon Box( "Ordinal" ));

```

**예제 2**

```jsl

New Window( "Example with Path", ex = Icon Box( "$SAMPLE_IMAGES/pi.gif" ) );

```

### If Box

**구문:** box = If Box( 0|1, displayBoxArgs )

**설명:** 지정된 표시 상자 인수를 조건부로 표시하는 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	H List Box(		englishBox = If Box( 1, Text Box( "Good day" ) ),		frenchBox = If Box( 0, Text Box( "Bon Jour" ) )	));Wait( 5 );englishBox << Set( 0 );frenchBox << Set( 1 );

```

### If Seg

**구문:** seg = If Seg(&lt;state=0|1&gt;)

**설명:** 표시 세그먼트 하위 항목을 표시하거나 숨기는 표시 세그먼트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( If Seg( true, <<append( Lines Seg( lines ) ) ) ) );

```

### Journal Box

**구문:** y = Journal Box( journalText )

**설명:** 저널에 저장될 지침에서 표시 상자를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );sample = Distribution( Y( :height ) );sampjourn = sample << Get Journal;New Window( "Distribution of Height",	Text Box( "Here is the result of the distribution platform for Height." ),	Journal Box( sampjourn ));

```

### Line Seg

**구문:** ls = Line Seg(x values, y values, &lt;Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )&gt;)

**설명:** 모든 x 및 y 값을 연결하는 선이 포함된 표시 세그먼트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Line Seg" ));

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt ) ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Line Seg" ));

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );x = [10, 50, 90];y = [10, 90, 10];New Window( "Line Seg Example", g = Graph Box( Line Seg( x, y, RowStates( dt, {1, 3, 5} ) ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Line Seg" ));

```

### Lines Seg

**구문:** ls = Lines Seg([x1 y1 x2 y2,...])

**설명:** 전달된 x 및 y 값에 대한 일련의 선분이 포함된 표시 세그먼트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

lines = [30 20 80 70, 10 90 90 10, 40 20 60 30];New Window( "Lines Seg Example", g = Graph Box( Lines Seg( lines ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Lines Seg" ));

```

### Lineup Box

**구문:** y = Lineup Box( &lt;NCol( nc )&gt;, &lt;Spacing( pixels, &lt;vspace&gt; )&gt;, displayBoxArgs, ... )

**설명:** nc 열의 상자 맞춤을 표시하기 위한 표시 상자를 반환합니다. 선택적으로 지정할 수 있는 Spacing 인수는 표시 상자 주위에 가로 및 세로 공백을 지정합니다. vspace 인수를 사용할 경우 vspace가 세로 공백이고 pixels은 가로 공백입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Lineup Box( N Col( 1 ), spacing( 10 ),		Text Box( "Quadratic Formula" ),		Border Box( Left( 10 ), Right( 10 ), bottom( 10 ), top( 10 ), sides( 15 ),			Expr As Picture( Expr( (-b + Sqrt( b ^ 2 - 4 * a * c )) / (2 * a) ) )		)	));

```

### Lineup Ruler Box

**구문:** y = Lineup Box( &lt;Widths( {width1, width2, ...} )&gt;, displayBoxArgs, ... )

**설명:** 포함된 정렬 상자의 열 너비를 설정하는 표시 상자를 반환합니다.

**JMP추가된 버전:** 16

```jsl

New Window( "Lineup Ruler",	lrb = Lineup Ruler Box(		Widths( {120, 200} ),		Outline Box( "Customer 1",			Lineup Box( N Col( 2 ),				Text Box( "First Name:" ),				Text Edit Box(),				Text Box( "Last Name:" ),				Text Edit Box(), 			)		),		Outline Box( "Customer 2",			Lineup Box( N Col( 2 ),				Text Box( "First Name:" ),				Text Edit Box(),				Text Box( "Last Name:" ),				Text Edit Box(), 			)		)	));

```

### List Box

**구문:** y = List Box( {item, ...}, &lt;width( pixels )&gt;, &lt;maxSelected( 9999 )&gt;, &lt;nlines( 12 )&gt;, &lt;script&gt; )

**설명:** 선택 항목 목록 상자를 표시하기 위한 표시 상자를 반환합니다. item 자체가 항목 이름과 문자열(모델링 유형 또는 정렬 순서(예: "Ordinal" 또는 "Ascending") 지정)이 포함된 두 항목 목록일 경우 목록 상자에서 해당 항목 옆에 적절한 아이콘이 표시됩니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

New Window( "Example", b = List Box( {"single", "double", "triple"}, nlines( 10 ) ) );

```

**예제 2**

```jsl

New Window( "Example",	lb = List Box(		{{"First Item", "continuous"}, {"Second Item", "ordinal"}, {"Third Item", "nominal"}},		width( 200 ),		max selected( 2 ),		nlines( 6 )	));

```

### Marker Seg

**구문:** me = Marker Seg( x, y, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt;, &lt; Sizes( s ) &gt; )

**설명:** 모든 x 및 y 값에 대한 표식이 포함된 표시 세그먼트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = Column( "height" ) << Get Values;sz = Column( "age" ) << get values;aa = [=> 0];yy = J( N Rows( xx ), 1, 0 );For( ii = 1, ii <= N Rows( xx ), ii++,	aa[xx[ii]]++;	yy[ii] = aa[xx[ii]];);New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt ), sizes( sz ) )	));

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt, {3, 4, 11, 7, 13} ) )	));

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt, 11 :: 15 ) )	));

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg( xx, yy, Row States( dt, {{1, 2, 3}, {4, 5}, {6}, {7, 12, 15, 9}, {21, 8}} ) )	));

```

**예제 5**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );xx = [1 2 3 4 5];yy = [2 3 4 5 6];New Window( "Marker Seg Example",	g = Graph Box(		Frame Size( 300, 120 ),		X Scale( Min( xx ) - 5, Max( xx ) + 5 ),		Y Scale( 0, 10 ),		Marker Seg(			xx,			yy,			Row States(				{Color State( "Blue" ), Color State( "Orange" ), Color State( "Green" ),				Color State( "Purple" ), Color State( "Red" )}			)		)	));

```

### Matrix Box

**구문:** y = Matrix Box( matrix, &lt; &lt;&lt;Column Names( "c1", "c2", ... )&gt;, &lt; &lt;&lt;Row Names( "r1", "r2", ... )&gt; )

**설명:** 숫자 행렬을 표시하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", Matrix Box( [11 22 33, 44 55 66], <<RowNames( "First", "Second" ) ) );

```

### MouseBox

**구문:** box = MouseBox( displayBoxArgs )

**설명:** 마우스 동작에 대한 JSL 콜백을 생성할 수 있는 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	MouseBox(/*first sibling*/Text Box( "drag from here" ),		<<setDragText( "hello" ),		<<setTooltip( "source" ),		<<setDragEnable( 1 ),		<<setDragBegin(/* decide if a drag is allowed */Function( {this, clickpt},				"magic text";/* 0.0 to prevent the drag.  1.0 is the same as 'this<<getDragText' */			)		),		<<setDragEnd(/* clean up after a drag finishes or cancels */			Function( {this, clickpt, how}, /* how=move,copy,ignore */				If( how != "ignore" & !Is Empty( this << getDestBox ) & this << getDestBox == this << sib, /* the getDestBox check makes sure the destination of the drag-and-drop was my sibling and not some other program beyond our control */					(this << child) << setText(						"done!" /* 'move' suggests clearing the source */					)				)			)		)	),	MouseBox(/*second sibling*/Text Box( "drag to here" ),		<<setTooltip( "destination" ),		<<setDropEnable( 1 ),		<<setDropTrack(/* decide if dropping is allowed, before the drop.  The getSourceBox check makes sure the source of the drag-and-drop is my sibling, and not some other program */			Function( {this, clickpt},				If( !Is Empty( this << getSourceBox ) & this == (this << getSourceBox) << sib,					1, /*else*/0				)			)		),		<<setDropCommit(/* accept the drop */Function( {this, clickpt, text},				(this << child) << setText( text )			)		)	));

```

### Move to Project

**구문:** Move to Project(&lt;Source(project)&gt;, &lt;Destination(project)&gt;, &lt;Windows({list of windows to move})&gt;)

**설명:** 하나 이상의 창을 프로젝트 내부, 프로젝트 외부 또는 프로젝트 간에 이동합니다. 소스와 대상 중 하나만 지정해야 합니다. 다른 하나는 기본적으로 현재 프로젝트로 지정됩니다. 창을 현재 프로젝트로 이동하려면 소스만 지정하고 창을 프로젝트 외부로 이동하려면 대상만 지정하십시오. Windows 인수에는 창을 하나만 지정하지만 데이터 테이블 창은 창에 종속된 보고서와 함께 이동됩니다. Windows 인수를 생략하면 기본적으로 소스 프로젝트의 열려 있는 모든 창이 지정됩니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );report = dt << Run Script( "Bivariate" );                              project = New Project();                              Move to Project( destination( project ), windows( {report} ) );

```

**예제 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );Move to Project( Source( project ) );project << Close Window();

```

### New Image

**구문:** img = New Image() img = New Image( width, height ) img = New Image( pathname ) img = New Image( picture ) img = New Image( matrix of JSL color pixels ) img = New Image( rgb|r|g|rgba, {i, i, i} )

**설명:** 새 이미지를 반환합니다. JSL 명령을 통해 이 이미지를 편집할 수 있습니다. 기존 이미지 파일에 대한 경로를 지정할 경우에는 .JPG, .PNG, .GIF, .BMP 또는 .TIF 파일이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

image = New Image( "$SAMPLE_IMAGES/windmap.png" );New Window( "new image", image );

```

**예제 2**

```jsl

pic = Open( "$SAMPLE_IMAGES/windmap.png", png );image2 = New Image( pic );New Window( "new image", image2 );

```

**예제 3**

```jsl

image3 = New Image();mat = J( 256, 256 );For( y = 0, y < 256, y++,	For( x = 0, x < 256, x++,		mat[y * 256 + x] = RGB Color( y / 255.0, 0.0, x / 255.0 )	));image3 << Set Pixels( mat );New Window( "image", image3 );

```

### New Project

**구문:** project = new Project( &lt;project messages&gt; )

**설명:** 비어 있는 새 프로젝트 창을 생성합니다. 한 단계로 프로젝트를 생성하려는 경우 하나 이상의 프로젝트 메시지를 인수로 포함할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

project = New Project();

```

**예제 2**

```jsl

project = New Project(	Run Script(		dt = Open( "$SAMPLE_DATA/Big Class.jmp" );		dt << Run Script( "Bivariate" );	));

```

**예제 3**

```jsl

project = New Project(	Run Script(		Open( "$SAMPLE_DATA/Big Class.jmp" );		New Window( "Big Class - Bivariate of weight by height", Bivariate( Y( :weight ), X( :height ) ) );	));

```

**예제 4**

```jsl

project = New Project(	Set Bookmarks( {File( "$SAMPLE_DATA/Animals.jmp" ), File( "$SAMPLE_DATA/Big Class.jmp" )} ),	Run Script(		Open( "$SAMPLE_DATA/Big Class.jmp" );		New Window( "Big Class - Bivariate of weight by height", Bivariate( Y( :weight ), X( :height ) ) );	));

```

**예제 5**

```jsl

project = New Project(	Run Script( Open( "$SAMPLE_SCRIPTS/demoCorr.jsl", Set Window ID( "demoCorr" ), Script ) ),	Set Layout(		H Splitter Box(			<<Set Sizes( {0.15, 0.85} ),			Tab Page Box( Title( "Window List" ), Window ID( "Windows" ) ),			V Splitter Box(				<<Set Sizes( {0.7, 0.3} ),				Tab Page Box( Title( "demoCorr" ), Window ID( "demoCorr" ) ),				Tab Page Box( Title( "Log" ), Window ID( "Log" ) )			)		)	));

```

### New Window

**구문:** w = New Window( title, &lt; &lt;&lt;Type("Report" | "Dialog" | "Modal Dialog" | "Journal" | "Launcher" | "Script")&gt;, &lt; &lt;&lt; Return Result&gt;, &lt; &lt;&lt; On Open(expr | function | method)&gt;, &lt; &lt;&lt; On Close(expr | function | method)&gt;, &lt; &lt;&lt;On Validate(expr | function | method)&gt;, &lt; &lt;&lt;Show Menu(0 | 1)&gt;, &lt; &lt;&lt;Show Toolbars(0 | 1)&gt;, &lt; &lt;&lt;Suppress AutoHide(0 | 1)&gt;, &lt; &lt;&lt;Window View("Visible" | "Invisible")&gt;, &lt; &lt;&lt;Language("C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML")&gt;, &lt; &lt;&lt;Size(x, y)&gt;, displayBox | script)

**설명:** 지정된 표시 상자 또는 스크립트를 포함하는 창을 생성합니다. Type 옵션이 지정되지 않으면 기본적으로 보고서 창이 생성됩니다. Type("Modal Dialog") 창은 대화상자가 응답할 때까지 실행을 중지합니다. On Open, On Validate 및 Return Result는 모달 창에만 사용할 수 있습니다. On Open()은 창이 생성될 때 표현식, 함수 또는 클래스 메서드를 실행합니다. On Close()가 false를 반환하면 창이 닫히지 않습니다. On Validate()는 &apos;확인&apos; 버튼을 클릭할 때 표현식, 함수 또는 클래스 메서드를 실행합니다. 표현식이 true를 반환하면 창이 닫히고 그렇지 않으면 창이 계속 열려 있습니다. Return Result는 창을 닫을 때 더 이상 사용되지 않는 Dialog() 함수의 반환 값과 일치하도록 창의 반환 값을 변경합니다. 도구 모음을 지원하는 창 유형의 경우 Show Toolbars 옵션을 사용하여 기본 동작에서 변경 사항을 지정합니다. Show Menu 및 Suppress AutoHide 옵션은 Windows에만 해당됩니다. Window View("Invisible") 옵션은 Modal Dialog 이외의 모든 창에 사용할 수 있습니다. <<Language 옵션이 지정되지 않은 경우 Type("Script") 창은 JSL 문서를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

#### [Win] 도구 모음 및 메뉴

```jsl

// Compare settings for toolbars and menus// Suppress AutoHide is Windows onlyg = Graph Box(	Frame Size( 300, 300 ),	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );	Pen Color( "Blue" );	Line( [10 30 70], [88 22 44] ););New Window( "Default - menu and toolbars", g );New Window( "Menu, no toolbars, suppress autohide", Suppress AutoHide( 1 ), Show Toolbars( 0 ), g );New Window( "Toolbars, no menu", Show Menu( 0 ), g );New Window( "No menu, no toolbars", Show Menu( 0 ), Show Toolbars( 0 ), g );

```

#### Invisible

```jsl

g = Graph Box(	Frame Size( 300, 300 ),	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );	Pen Color( "Blue" );	Line( [10 30 70], [88 22 44] ););w = New Window( "My Window's Title", <<WindowView( "Invisible" ), g );p = w << Get Picture();w << Close Window;psize = p << Size;New Window( "picture", Outline Box( "picture size: " || Char( psize ), p ) );

```

#### Python 스크립트

```jsl

pyscript = "\[import numpy as npa = np.arange(15).reshape(3, 5)]\";ex = New Window( "Script example", <<Type( "Script" ), <<Language( "Python" ), pyscript );

```

#### 대화상자

```jsl

ex = New Window( "Dialog example",	<<Type( "Dialog" ),	V List Box(		Panel Box( "Sample data dialog",			Button Box( "Open Sample Data", Open( "$SAMPLE_DATA/Big Class.jmp" ) )		),		H List Box( Button Box( "Close", Try( ex << CloseWindow ) ) )	));

```

#### 모달 대화상자

```jsl

ex = New Window( "Modal Dialog example",	<<Type( "Modal Dialog" ),	<<Return Result,	<<On Validate(		num = myEditBox << Get;		If( num >= 1 & num <= 100, // in range			myEditBox << Background Color( "Background" ); // this field does not need attention			1; //the number is good, validate		, // else out of range			myEditBox << Background Color( "Light Yellow" ); // this field needs attention			0; // the number is bad, do not validate		) // the result of this if(...) is the OnValidate( ) answer, 0 or 1		;	),	V List Box(		Text Box( "Enter a value between [1,100]:" ),		H List Box( myEditBox = Number Edit Box( 42 ) ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	));//  the Modal window must be closed before the following code runsIf(	ex["button"] == 1 // not canceled, // then show the value	Write( ex["myEditBox"] ); // note: myEditBox is the name of the variable holding the text edit box, // else report no selection	Write( "CANCEL" ); // cancel button or red X was pressed);

```

#### 보고서

```jsl

g = Graph Box(	Frame Size( 300, 300 ),	Marker( Marker State( 3 ), [11 44 77], [75 25 50] );	Pen Color( "Blue" );	Line( [10 30 70], [88 22 44] ););New Window( "My Window's Title", g );

```

#### 스크립트

```jsl

script = JSL Quote(Names Default To Here(1);dt=Open("$SAMPLE_DATA/Big Class.jmp");dt << Run Script("Bivariate"););ex = New Window( "Script example", <<Type( "Script" ), script );

```

### Number Col Box

**구문:** y = Number Col Box( title, numbers )

**설명:** numbers 인수(목록 또는 행렬일 수 있음)에 지정된 숫자를 표시하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### Number Col Edit Box

**구문:** y = Number Col Edit Box( title, numbers )

**설명:** numbers 인수(목록 또는 행렬일 수 있음)에 지정된 숫자를 표시하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

x = y = z = 0;New Window( "Example",	Modal,	<<Return Result,	Outline Box( "Table", Table Box( neb = Number Col Edit Box( "values", {x, y, z} ) ) ));

```

### Number Edit Box

**구문:** y = Number Edit Box( initValue, &lt;width&gt; )

**설명:** 숫자 입력만 허용하는 편집 상자를 반환합니다. 필요한 경우 width 인수를 선택적으로 지정하여 상자 너비를 문자 수로 설정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", neb = Number Edit Box( 5 ) );x = neb << get;

```

### Outline Box

**구문:** y = Outline Box( title, &lt;command script pairs list&gt;, displayBox, ... )

**설명:** 보고서에 표시 상자 참조를 반환하는 개요 요소를 생성합니다. 개요 노드에 메뉴를 포함하려면 메뉴 명령 및 연결된 스크립트를 지정하는 목록인 command script pairs list를 지정하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Picker",		{"Show label value", Show( teb << get text )},		H List Box( Text Box( "Label:" ), teb = Text Edit Box( Char( 213 ) ) )	));

```

### Page Break Box

**구문:** Page Break Box()

**설명:** 페이지 구분을 강제로 적용하는 표시 상자를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [11 44 77], [75 25 50] );		Pen Color( "Blue" );		Line( [10 30 70], [88 22 44] );	),	Page Break Box(),	Graph Box(		Frame Size( 300, 300 ),		Marker( Marker State( 3 ), [77 44 11], [75 25 50] );		Pen Color( "Red" );		Line( [70 30 10], [88 22 44] );	));

```

### Panel Box

**구문:** y = Panel Box( title, displayBoxArgs )

**설명:** 인수 표시 상자에 라벨을 지정하고 에워싸기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Tab Box(		"alpha",		Panel Box( "panel", Text Box( "text" ) ),		"beta",		Popup Box( {"x", ex = 1, "y", ex = 2} )	));

```

### Picture Box

**구문:** pict = Picture Box( Picture Object )

**설명:** 그래픽 그림 개체가 포함된 표시 상자를 생성합니다. 그림을 연 다음 참조하거나 Picture Object 인수 위치에 그림에 대한 경로를 지정함으로써 Open 명령을 사용할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

New Window( "Example", Picture Box( Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg ) ) );

```

**예제 2**

```jsl

pict = Open( "$SAMPLE_IMAGES/black rhino footprint.jpg", jpg );New Window( "Example", Picture Box( pict ) );

```

### Pie Seg

**구문:** ps = Pie Seg(&lt;{ xorigin, yorigin }&gt;, &lt;radius&gt;, &lt;style("pie", "ring", "coxcomb")&gt;, values)

**설명:** 행렬 형식으로 지정된 값을 기반으로, 지정된 radius를 사용하여 지정된 origin에 파이 세그먼트를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Summarize( a = by( :age ), c = count, sumHt = Sum( :height ), sumWt = Sum( :weight ) );New Window( "Pie Seg",	Graph Box( Pie Seg( style( "ring" ), {25, 50}, .25, sumHt ), Pie Seg( {75, 50}, .25, sumWt ) ));

```

### Platform

**구문:** y = Platform( dataTable, script )

**설명:** 지정된 스크립트를 지정된 데이터 테이블의 컨텍스트에서 실행합니다. 표시 트리에 포함할 결과 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Platform example",	H List Box(		Platform( dt, Bubble Plot( X( :weight ), Y( :height ), Sizes( :age ), Title Position( 0, 0 ) ) ),		Platform( dt, Bubble Plot( X( :weight ), Y( :age ), Sizes( :height ), Title Position( 0, 0 ) ) )	));

```

### Plot Col Box

**구문:** y = Plot Col Box( title, numbers )

**설명:** 숫자를 그래프로 나타내기 위한 표시 상자를 반환합니다. numbers 인수는 목록 또는 행렬일 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### Poly Seg

**구문:** ps = Poly Seg(x values, y values)

**설명:** 전달된 x 및 y 값을 기반으로 한 꼭지점이 있는 다각형을 나타내는 표시 세그먼트를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

x = [10, 50, 90];y = [10, 90, 10];New Window( "Poly Seg Example", g = Graph Box( Poly Seg( x, y ) ) );frame = g[FrameBox( 1 )];seg = (frame << Find Seg( "Poly Seg" ));

```

### Popup Box

**구문:** y = Popup Box( {label1, script1, ...} )

**설명:** 라벨/스크립트 쌍으로 정의된 팝업 메뉴가 포함된 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Tab Box(		"alpha",		Popup Box( {"x", ex = 1, "y", ex = 2} ),		"beta",		Panel Box( "panel", Text Box( "text" ) )	));

```

### Radio Box

**구문:** y = Radio Box( {item, ...}, &lt;script&gt; )

**설명:** 라디오 버튼 집합을 표시하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", rb = Radio Box( {"single", "double", "triple"}, Show( rb << Get() ) ) );

```

### Range Slider Box

**구문:** y = Range Slider Box( minValue, maxValue, lowVariable, highVariable, script )

**설명:** 범위가 minValue에서 maxValue까지인 범위 슬라이더 컨트롤을 표시하는 표시 상자를 반환합니다. 두 슬라이더의 위치가 변경되면 해당 값이 lowVariable 및 highVariable에 지정되고 스크립트가 실행됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

sliderLowerValue = .5;sliderUpperValue = .7;New Window( "Example",	Panel Box( "Range Slider",		tb1 = Text Box( "Low Value: " || Char( sliderLowerValue ) ),		tb2 = Text Box( "High Value: " || Char( sliderUpperValue ) ),		sb = Range Slider Box(			0,			1,			sliderLowerValue,			sliderUpperValue,			tb1 << Set Text( "Low Value: " || Char( sliderLowerValue ) );			tb2 << Set Text( "High Value: " || Char( sliderUpperValue ) );		)	));

```

### Report

**구문:** y = Report( platform object )

**설명:** 플랫폼에서 보고서의 표시 트리에 대한 참조를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Report( Bivariate( Y( :weight ), X( :height ), Fit Line ) );

```

### Scene Box

**구문:** box = Scene Box( xsize, ysize )

**설명:** 3D 그래픽에 대한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Scene = Scene Box( 600, 600 );Scene << backgroundcolor( 0 );Scene << showarcball( always );New Window( "See HelloWorld.jsl in sample scripts", Scene );Scene << perspective( 45, .2, 20 );Scene << Translate( 0.0, 0.0, -4.5 );ex = Scene Display List();ex << color( .9, .9, .9 );ex << Text( center, middle, .3, "Hello World" );Scene << arcball( ex, 1.5 );Scene << update;

```

### Scene Display List

**구문:** list = Scene Display List()

**설명:** 3D 그래픽에 대한 표시 목록을 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

ex = Scene Display List();ex << color( .9, .9, .9 );ex << Text( center, middle, .3, "Hello World" );exScene = Scene Box( 600, 600 );exScene << backgroundcolor( 0 );exScene << showarcball( always );New Window( "See HelloWorld.jsl in sample scripts", exScene );exScene << perspective( 45, .2, 20 );exScene << Translate( 0.0, 0.0, -4.5 );exScene << arcball( ex, 1.5 );exScene << update;

```

### Script Box

**구문:** y = Script Box( &lt;s&gt;, &lt;"C" | "JavaScript" | "JSL" | "JSON" | "Python" | "R" | "SAS" | "SQL" | "Text" | "XML"&gt;, &lt;width&gt;, &lt;height&gt; )

**설명:** 스크립트 편집을 위한 표시 상자를 반환합니다. 기본적으로 편집기에는 강조 표시된 JSL 구문과 동작이 있습니다.

**JMP추가된 버전:** 버전 14 이전

#### JSL

```jsl

Script = Script Box( "// This window is editable.", "JSL", 300, 100 );New Window( "This is a script box", Script );

```

#### Python 스크립트

```jsl

pyscript = "\[import numpy as npa = np.arange(15).reshape(3, 5)]\";Script = Script Box( pyscript, "Python", 300, 100 );New Window( "This is a python script box", Script );

```

### Scroll Box

**구문:** y = Scroll Box( &lt;Size( x, y )&gt;, displayBox )

**설명:** 더 큰 하위 상자를 배치하는 표시 상자를 반환합니다. 하위 상자가 더 크기 때문에 스크롤 막대를 사용하게 됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Picker",		Scroll Box(			Size( 200, 100 ),			V List Box(				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )			),			<<Set Stretch( "Window", "Window" )		)	));

```

### Set Global Window Handler

**구문:** Set Global Window Handler( Handler Function )

**설명:** 새 창이 생성될 때마다 호출되는 함수를 설정합니다.

**JMP추가된 버전:** 17

```jsl

Set Global Window Handler(	Function( {window},		Print( window << get window title() );		window << close window();	));New Window( "My Window" );Clear Global Window Handler();

```

### Shape Seg

**구문:** me = Shape Seg( {Path(&lt;path&gt;), ...}, &lt; Row States( dt | dt,[rows] | dt,{{rows}, ...} | {states} ) &gt; )

**설명:** 형태 컬렉션과 함께 표시 세그먼트를 반환합니다. 각 형태는 지정한 경로를 따라 스트로크를 그리거나(채우기가 0일 경우) 지정한 경로의 내부가 채워집니다(채우기가 0이 아닐 경우). N x 3 행렬 또는 텍스트 표현을 사용하여 경로를 지정할 수 있습니다. 경로 행렬에는 x, y에 대한 세 개의 열과 경로의 각 점에 대한 플래그가 있습니다. 플래그 값은 제어의 경우 0, 이동의 경우 1, 선분의 경우 2, 3차 Bézier 세그먼트의 경우 3이며 점이 경로를 닫는 경우에는 음수입니다. 경로 텍스트는 SVG 구문을 지원합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Shape Seg Example",	Graph Box(		Shape Seg( {Path( [10 10 1, 10 70 0, 70 70 0, 70 10 -3] ), Path( "M20,20 C20,60 60,60 60,20 Z" )} )	));

```

### Sheet Part

**구문:** y = Sheet Part( title, childbox )

**설명:** 지정된 제목이 있는 childbox 표시 상자 인수가 포함된 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### Slider Box

**구문:** box = Slider Box(minValue, maxValue, variable, script, &lt;set width(n)&gt;, &lt;rescale slider(minValue, maxValue)&gt;)

**설명:** 범위가 minValue에서 maxValue까지인 슬라이더 컨트롤을 표시하는 표시 상자를 반환합니다. 슬라이더 위치가 변경되면 해당 값이 variable에 지정되고 스크립트가 실행됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

sliderValue = .6;New Window( "Example",	Panel Box( "Slider Box",		tb = Text Box( "Value: " || Char( sliderValue ) ),		sb = Slider Box( 0, 1, sliderValue, tb << Set Text( "Value: " || Char( sliderValue ) ) )	));

```

### Spacer Box

**구문:** y = Spacer Box( &lt;Size( x, y )&gt;, &lt;Color( c )&gt;)

**설명:** 다른 표시 상자 사이에 공백을 유지하거나 Lineup Box의 셀을 채우는 데 사용될 수 있는 표시 상자를 반환합니다. Size 인수는 픽셀로 지정되고 Color 인수는 유효한 JSL 색상입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Lineup Box( N Col( 3 ),		Text Box( "a" ),		Spacer Box(),		Text Box( "b" ),		Spacer Box(),		Text Edit Box( "Under Spacer Box" )	));

```

### Spin Box

**구문:** y = Spin Box( &lt;script&gt; )

**설명:** 위쪽/아래쪽 컨트롤이 있는 버튼을 표시하는 상자를 반환합니다. script 인수는 화살표 클릭 방향을 나타내는 인수(음수는 아래쪽, 양수는 위쪽)와 함께 호출됩니다. 값이 1이면 한 번 클릭을 나타내고 값이 클수록 반복 동작을 나타낼 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Lineup Box(		2,		nb = Number Edit Box( 3 ),		sb = Spin Box( Function( {value}, nb << Increment( value ) ) )	));nb << Set Increment( 1 );

```

### String Col Box

**구문:** y = String Col Box( title, {strings} )

**설명:** strings 인수(문자열 목록)에 지정된 문자열을 표시하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### String Col Edit Box

**구문:** y = String Col Edit Box( title, {strings} )

**설명:** strings 인수(문자열 목록)에 지정된 문자열을 표시하기 위한 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

a = b = c = "";New Window( "Example",	Modal,	<<Return Result,	Outline Box( "Table", Table Box( seb = String Col Edit Box( "names", {a, b, c} ) ) ));

```

### Tab Box

**구문:** y = Tab Box( Tab Page Box(...), TabPageBox(...), ... )

**설명:** 표시 상자 창에 탭 형식 페이지 패널을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Tab Box(		"alpha",		Panel Box( "panel", Text Box( "text" ) ),		"beta",		Popup Box( {"x", ex = 1, "y", ex = 2} )	));

```

### Tab Page Box

**구문:** y = Tab Page Box( &lt;Title("string")&gt;, &lt;Tip(0|1)&gt;, &lt;Closeable(0|1)&gt;, &lt;Icon("string")&gt;, &lt;Moveable(0|1)&gt;, contents)

**설명:** Tab Box 내에서 사용되거나 제목이 있는 독립 컨테이너로 사용될 수 있는 표시 상자를 반환합니다. 옵션으로는 제목을 지정하기 위한 Title(문자열), 툴팁을 지정하기 위한 Title(문자열), 페이지를 닫을 수 있는지 여부를 지정하기 위한 Closeable(0|1), 아이콘을 지정하기 위한Icon(문자열) 및 페이지를 이동할 수 있는지 여부를 지정하기 위한 Moveable(0|1)이 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Tab Box(		tp = Tab Page Box( Title( "alpha" ), Panel Box( "panel", Text Box( "text" ) ) ),		Tab Page Box( Title( "beta" ), Popup Box( {"x", ex = 1, "y", ex = 2} ) )	));

```

### Table Box

**구문:** y = Table Box( displayBox, ... )

**설명:** 인수에 의해 제공된 String Col Box, Number Col Box, Plot Col Box 열 표시 상자 테이블을 구성하는 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Table",		Table Box(			String Col Box( "names", {"x", "y", "z"} ),			Number Col Box( "values", {11, 22, 33} ),			Plot Col Box( "values", {11, 22, 33} )		)	));

```

### Text Box

**구문:** y = Text Box( text, &lt;&lt;Justify Text( strPos ), &lt;&lt;Set Wrap( width ) )

**설명:** 문자열 인수 text의 텍스트가 포함된 표시 상자를 생성합니다. 텍스트 맞춤을 제어하거나 텍스트 줄바꿈 너비를 설정하기 위한 선택적 인수를 사용할 수 있습니다. Justify Text에 대한 인수는 left, right 또는 center가 포함된 문자열이어야 합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Justification Example",	Outline Box( "text",		V List Box(			Text Box( "Text implicitly justified over multiple lines:", <<Set Wrap( 100 ) ),			Text Box( " " ),			Text Box(				"Text left justified over multiple lines:",				<<Justify Text( "left" ),				<<Set Wrap( 100 )			),			Text Box( " " ),			Text Box(				"Text center justified over multiple lines:",				<<Justify Text( "center" ),				<<Set Wrap( 100 )			),			Text Box( " " ),			Text Box(				"Text right justified over multiple lines:",				<<Justify Text( "right" ),				<<Set Wrap( 100 )			)		)	));

```

### Text Edit Box

**구문:** y = Text Edit Box( text, &lt;&lt;Password Style( bool ), &lt;&lt;Set Script( script ), &lt;&lt;Set Width( value ) )

**설명:** 따옴표로 묶인 문자열 text가 포함된 편집 가능한 상자를 생성하고 표시 상자 참조를 반환합니다. 선택적 인수를 사용하여 텍스트 표시를 제어하고 텍스트 상자에 스크립트를 연결하고 텍스트 상자의 너비(픽셀)를 설정할 수 있습니다. Set Width(-1)을 지정하면 내용에 맞게 크기가 조정됩니다. 스크립트를 선택적 인수로 추가하거나 Set Script 메시지를 보내 스크립트를 텍스트 편집 상자에 연결할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example: Text Edit Box",	Outline Box( "Picker Example", H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) ),	Outline Box( "Text Edit Box with password style Example",		H List Box(			Text Box( "Enter password:    " ),			exq = Text Edit Box( "", Password Style( 1 ), Set Script( Print( "changed!" ) ) )		),		Button Box( "print to log", Set Script( Print( exq << Get Text() ) ) ),		Button Box( "hide password", Set Script( exq << Password Style( 1 ) ) ),		Button Box( "show password", Set Script( exq << Password Style( 0 ) ) )	)); // "look in the log window"

```

### Text Seg

**구문:** seg = Text Seg("text")

**JMP추가된 버전:** 17

```jsl

w = New Window( "test", Graph Box( FrameSize( 400, 400 ), ) );w[FrameBox( 1 )] << append seg( ts1 = Text Seg( "default location fixed bottom left" ) );

```

### This Project

**구문:** project = this project()

**설명:** 프로젝트 내에서 해당 프로젝트 개체를 반환합니다. 프로젝트 외부에서는 아무것도 반환하지 않습니다.

**JMP추가된 버전:** 14

```jsl

If(	Is Empty( This Project() ), Print( "Project: (none)" ),	Print( "Project: " || (This Project() << Get Window Title()) ),);

```

### Tree Box

**구문:** tree = Tree Box( &lt;{rootnodes}&gt;, &lt;Size( x, y )&gt;, &lt;Multiselect( 0|1 )&gt; )

**설명:** 계층적 정보를 보여주기 위한 표시 상자를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );                                        c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );                                        root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );                                        New Window( "TreeBox", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Tree Node

**구문:** node = Tree Node( &lt;label&gt; )

**설명:** 트리 상자 내에 표시할 트리 노드를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

root1 = Tree Node( "Parent 1" );root2 = Tree Node( "Parent 2" );                                        c1 = Tree Node( "Child 1" );c2 = Tree Node( "Child 2" );c3 = Tree Node( "Child 3" );c4 = Tree Node( "Child 4" );                                        root1 << Append( c1 );root1 << Append( c2 );root2 << Append( c3 );root2 << Append( c4 );                                        New Window( "TreeBox Nodes", tree = Tree Box( {root1, root2}, Size( 300, 200 ) ) );

```

### Triangulation

**구문:** triangulation = Triangulation( X(Column1, Column2), &lt; Y(Column) &gt; )

**설명:** 지정된 점 집합의 Delaunay 삼각 분할이 포함된 개체를 반환합니다. 선택적 Y는 중복 점에 대해 평균화되고 출력의 모든 점은 고유합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );tri = Triangulation( X( :X, :Y ), Y( :POP ) );

```

**예제 2**

```jsl

tri = Triangulation( X( [0 0 1 1], [0 1 0 1] ), Y( [0 1 2 3] ) );

```

### Unlineup Box

**구문:** y = UnLineup Box(displayBoxArgs, ... )

**설명:** 정렬 상자의 열 레이아웃을 일시 중단하는 표시 상자를 반환합니다. 정렬 해제 상자의 하위 항목은 정렬 상자의 모든 열에 걸쳐 확장됩니다.

**JMP추가된 버전:** 16

```jsl

New Window( "unlineup",	Lineup Box( N Col( 2 ),		Unlineup Box( Text Box( "First Section", <<Justify Text( "Center" ) ) ),		Button Box( "First Section 1" ),		Button Box( "First Section 2" ),		Unlineup Box( Text Box( "Second Section", <<Justify Text( "Center" ) ) ),		Button Box( "Second Section 1" ),		Button Box( "Second Section 2" )	));

```

### V Center Box

**구문:** y = V Center Box( &lt;childbox&gt; )

**설명:** childbox 표시 상자 인수가 포함된 표시 상자를 반환합니다. 인수에 해당하는 표시 상자는 중심 상자의 모든 다른 형제 항목 및 하위 항목의 최대 크기로 정의된 수직 공간의 가운데에 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "test",	H List Box(		V Center Box( Text Box( "V+V" ) ),		V List Box(			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			H Center Box( Text Box( "H+H" ) ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" ),			Text Box( "mmmmmmmmmmmmmmmmmmmmmmmmmmmmmm" )		)	));

```

### V List Box

**구문:** y = V List Box( &lt;Align( center|right )&gt;, displayBox, ... )

**설명:** 인수에 의해 제공된 여러 표시 상자가 세로 형태로 배열된 하나의 표시 상자를 반환합니다. <<Hold 메시지는 발췌될 보고서가 소속될 시트를 알려 줍니다. 선택적 Align 인수를 사용하여 표시 상자 안에서 right 맞춤 또는 center 맞춤을 지정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Picker", V List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ) ));

```

### V Scroll Box

**구문:** y = V Scroll Box( &lt;Size( y )&gt;, displayBox )

**설명:** 세로 스크롤 막대를 사용하여 더 큰 하위 상자를 배치하는 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example",	Outline Box( "Picker",		V Scroll Box(			Size( 100 ),			V List Box(				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) ),				H List Box( Text Box( "Label:" ), Text Edit Box( Char( 213 ) ) )			),			<<Set Stretch( "Window", "Window" )		)	));

```

### V Sheet Box

**구문:** y = V Sheet Box( &lt;&lt;Hold( rpt ), displayBox, ... )

**설명:** 인수에 의해 제공된 여러 표시 상자가 세로 형태로 배열된 하나의 표시 상자를 반환합니다. <<Hold 메시지는 발췌될 보고서가 소속될 시트를 알려 줍니다. 선택적 Align 인수를 사용하여 표시 상자 안에서 right 맞춤 또는 center 맞춤을 지정할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Window( "Example",	V Sheet Box(		<<Hold( Bivariate( Y( :weight ), X( :height ), Fit Line() ) ),		<<Hold(			Distribution(				Automatic Recalc( 1 ),				Continuous Distribution(					Column( :height ),					Horizontal Layout( 1 ),					Vertical( 0 ),					Outlier Box Plot( 0 )				)			)		),		<<Hold( Treemap( Categories( :age ) ) ),		<<Hold(			Bubble Plot(				X( :height ),				Y( :weight ),				Sizes( :age ),				Coloring( :sex ),				Circle Size( 6.226 ),				All Labels( 0 )			)		),		H Sheet Box(			Sheet Part( "weight by height", Excerpt Box( 1, {Picture Box( 1 )} ) ),			Sheet Part( "height", Excerpt Box( 2, {Picture Box( 1 )} ) )		),		H Sheet Box(			Sheet Part( "", Excerpt Box( 3, {Picture Box( 1 )} ) ),			Sheet Part( "height by weight", Excerpt Box( 4, {Picture Box( 1 )} ) )		)	));

```

### V Splitter Box

**구문:** y = V Splitter Box( &lt;Size(x,y)&gt;, displayBox, ... )

**설명:** 대화식 컨트롤을 사용하여 다른 표시 상자를 세로로 배열하는 표시 상자를 반환합니다. 하위 크기는 Splitter Box의 너비 또는 높이의 비율로 지정됩니다. 선택적 Size 인수는 최상위 분할 상자에만 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Splitter",	V Splitter Box(		Size( 800, 600 ),		H Splitter Box( graph = Graph Box(), Script Box(), <<Sizes( {0.6, 0.4} ) ),		H Splitter Box(			pict = Picture Box( Open( "$SAMPLE_IMAGES/tile.jpg", jpg ) ),			spacer = Spacer Box(),			<<Sizes( {0.4, 0.6} )		)	));graph[FrameBox( 1 )] << Set Stretch( "Window", "Window" );pict << Set Min Size( 100, 100 );pict << Set Max Size( 500, 500 );pict << Set Stretch( "Window", "Window" );spacer << Set Fill( 1 );spacer << Color( "Red" );spacer << Set Stretch( "Window", "Window" );

```

### Web Browser Box

**구문:** wb = Web Browser Box( url )

**설명:** url 문자열 인수에 지정된 웹 페이지를 표시하는 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "Example", wb = Web Browser Box() );wb << Navigate( "http://www.jmp.com" );wb << Set Stretch( "Window", "Window" );wb << Set Max Size( 10000, 10000 );

```

### Window

**구문:** y = Window( &lt;string|int&gt; )

**설명:** 이 함수는 더 이상 사용되지 않으며 기존 스크립트와의 호환성을 위해서만 유지됩니다. 새 스크립트의 경우 Get Window() 또는 Get Window List()를 사용하십시오.

**JMP추가된 버전:** 버전 14 이전

```jsl

Window( "Big Class" );

```

### With Window Handler

**구문:** With Window Handler( JSL Code, Handler Function )

**설명:** 새 창이 생성될 때마다 호출되는 함수로 코드 블록을 실행합니다.

**JMP추가된 버전:** 17

```jsl

With Window Handler(	New Window( "My Window" ),	Function( {window},		Print( window << get window title() );		window << close window();	));

```

### Wrap List Box

**구문:** y = Wrap List Box( displayBox, ... )

**설명:** 인수에 의해 제공된 표시 상자를 가로 레이아웃에 배열하지만 인쇄 시 해당 목록을 줄바꿈하는 표시 상자를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

New Window( "WrapListBox",	Wrap List Box(		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "1" ) ),		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "2" ) ),		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "3" ) ),		Graph Box( framesize( 150, 100 ), Text( {50, 50}, "4" ) )	));

```

