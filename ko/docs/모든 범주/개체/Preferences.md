# Preferences



## 항목 메시지

### Add Color Theme

**구문:** obj &lt;&lt; Add Color Theme( Add Color Theme({"Name", &lt;type|style&gt;, {color, ..., &lt;Missing(color)&gt;}, &lt;{position, ...}&gt;}, &lt;color blindness discernability&gt;) )

**설명:** 새 사용자 색상 테마를 생성하고 테마 선택기에 등록합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Set Preference(	Add Color Theme(		{"Sunny", {{255, 255, 0}, {255, 128, 64}, {255, 0, 0}, {163, 12, 27}}, {0, 0.5, 0.642857142857143, 1}		}	));Show( Get Color Theme Detail( "Sunny" ) );

```

### Add Rows default number of rows

**구문:** obj &lt;&lt; Add Rows default number of rows( number )

**설명:** &apos;행 추가&apos; 창의 초기 행 수

**JMP추가된 버전:** 18

### Add Rows recall last value

**구문:** obj &lt;&lt; Add Rows recall last value( state=0|1 )

**설명:** 마지막으로 입력한 값이 추가할 행 수에 사용됩니다.

**JMP추가된 버전:** 18

### Add files opened by scripts to the Recent Files list

**구문:** obj &lt;&lt; Add files opened by scripts to the Recent Files list( state=0|1 )

**설명:** JSL Open() 함수를 사용하여 연 파일을 최근 사용한 파일 목록에 추가하는지 여부에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Add files opened by scripts to the Recent Files list( 1 ) );

```

### Allow 16 Bit List Check Compression

**구문:** obj &lt;&lt; Allow 16 Bit List Check Compression( state=0|1 )

**설명:** 열에 구분되는 값이 255개가 넘을 때 "목록 확인"을 사용하여 값을 인코딩할지 여부를 지정합니다. 인코딩할 경우 JMP 14 및 이전 버전에서는 해당 열을 읽을 수 없습니다.

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow 16 Bit List Check Compression( 1 ) );

```

### Allow Compress Selected Columns to create compact columns

**구문:** obj &lt;&lt; Allow Compress Selected Columns to create compact columns( state=0|1 )

**설명:** &apos;선택 열 압축&apos;은 압축하여 디스크 공간이 적게 사용되면 열을 압축합니다.

**JMP추가된 버전:** 18

### Allow Unquoted Strings in JSL

**구문:** obj &lt;&lt; Allow Unquoted Strings in JSL( "아니요"|"예(경고 표시)"|"예(경고 표시 안 함)" )

### Allow mixed ISO format patterns

**구문:** obj &lt;&lt; Allow mixed ISO format patterns( state=0|1 )

**설명:** ISO 주(<ww>)와 ISO 이외의 연도(<YYYY> 또는 <YY>)가 포함된 형식 패턴 날짜 및 ISO 이외의 주(<WW1> 또는 <WW2>)와 ISO 연도(<yyyy> 또는 <yy>)가 포함된 형식 패턴 날짜를 허용합니다. ISO 주 및 연도는 ISO 이외의 주 및 연도와 호환되지 않습니다. 두 값을 함께 사용하면 안 됩니다. 기본적으로 JMP에서는 이러한 날짜 형식을 생성할 수 없습니다.

**JMP추가된 버전:** 18

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow mixed ISO format patterns( 1 ) );

```

### Allow short numeric data format

**구문:** obj &lt;&lt; Allow short numeric data format( state=0|1 )

**설명:** 짧은 숫자 데이터 형식 허용에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Allow short numeric data format( 1 ) );

```

### Always allow publishing to JMP Public

**구문:** obj &lt;&lt; Always allow publishing to JMP Public( state=0|1 )

**설명:** 다른 JMP Live 연결이 구성되어 있어도 JMP Public에 게시하는 메뉴 항목을 항상 활성화합니다.

**JMP추가된 버전:** 19

### Auto Hide Menus

**구문:** obj &lt;&lt; Auto Hide Menus( "항상"|"안 함"|"창 크기 기반" )

**설명:** JMP에서 메뉴 및 도구 모음이 자동으로 숨겨지는지 여부와 숨겨지는 경우를 결정합니다. 참고: Windows에서만 사용할 수 있습니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Auto Hide Menus( "Always" ) );

```

### Auto Run Recent JSL

**구문:** obj &lt;&lt; Auto Run Recent JSL( state=0|1 )

**설명:** 최근에 전송한 JSL 스크립트를 자동으로 실행하는 기본 동작을 변경합니다. 참고: Windows에서만 사용할 수 있습니다.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Auto Run Recent JSL( 1 ) );

```

### Auto match brackets in script editor

**구문:** obj &lt;&lt; Auto match brackets in script editor( state=0|1 )

**설명:** 스크립트 창에서 대괄호 자동 매칭을 위한 기본 설정을 변경합니다. 참고: Windows에서만 사용할 수 있습니다.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Auto match brackets in script editor( 1 ) );

```

### Autosave maximum data table columns

**구문:** obj &lt;&lt; Autosave maximum data table columns( number )

**설명:** 자동으로 저장할 최대 데이터 테이블 열 수입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Maximum Data Table Columns( 1000 ) );

```

### Autosave maximum data table rows

**구문:** obj &lt;&lt; Autosave maximum data table rows( number )

**설명:** 자동으로 저장할 최대 데이터 테이블 행 수입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Maximum Data Table Rows( 10000 ) );

```

### Autosave timeout

**구문:** obj &lt;&lt; Autosave timeout( number )

**설명:** 자동 저장 타임아웃 간격은 분 단위입니다. 타임아웃 간격이 되면 열려 있는 파일과 수정된 파일이 모두 저장됩니다. 기본값은 자동 저장되지 않음을 나타내는 "0"입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Autosave Timeout( 15 ) );

```

### Axis Title Above

**구문:** obj &lt;&lt; Axis Title Above( state=0|1 )

**설명:** 그래프에서 y 축 라벨의 위치를 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Axis Title Above( 1 ) );

```

### Background Color

**구문:** obj &lt;&lt; Background Color( color )

**설명:** 모든 창의 배경 색상에 대한 기본 설정을 변경합니다. 참고: Windows에서만 사용할 수 있습니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Background Color( "Light Blue" ) );

```

### Bad to Good Color Theme

**구문:** obj &lt;&lt; Bad to Good Color Theme( "name" )

**설명:** 모든 그래프에 나타나는 연속형 색상 테마에 대한 기본 설정을 변경합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Bad to Good Color Theme( "Green to Purple" ) );Show( Get Preference( Bad to Good Color Theme ) );

```

### Box Plot Line Width

**구문:** obj &lt;&lt; Box Plot Line Width( number )

**설명:** 상자 그림의 기본 선 너비를 변경합니다.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences[1] << Set( Box Plot Line Width( 2 ) );

```

### Bypass Proxy

**구문:** obj &lt;&lt; Bypass Proxy( text )

**설명:** 특정 호스트에 프록시 사용을 비활성화합니다.

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Bypass Proxy( "www.example.com" ) );

```

### Categorical Color Theme

**구문:** obj &lt;&lt; Categorical Color Theme( "name" )

**설명:** 모든 그래프에 나타나는 범주형 색상 테마에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Categorical Color Theme ) );Set Preference( Categorical Color Theme( "Jet" ) );Show( Get Preference( Categorical Color Theme ) );

```

### Categorical graph type

**구문:** obj &lt;&lt; Categorical graph type( "자동"|"히스토그램"|"막대"|"히트맵"|"모자이크"|"런 차트"|"런 차트" )

**설명:** 명목형 및 순서형 열의 열 머리글에 표시할 기본 그래프입니다.

**JMP추가된 버전:** 18

### Classic Data Table Selection

**구문:** obj &lt;&lt; Classic Data Table Selection( state=0|1 )

**설명:** 데이터 테이블에서 기존의 클릭 선택 동작을 활성화합니다. 이 모드에서는 열 선택이 행 선택에 영향을 미치지 않고 행 선택이 열 선택에 영향을 미치지 않습니다.

**JMP추가된 버전:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Classic Data Table Selection( 1 ) );

```

### Color Mode

**구문:** obj &lt;&lt; Color Mode( "시스템 설정 사용"|"밝게"|"어둡게"|"고대비" )

**설명:** JMP에서 특정 창 색상 테마를 사용할지 아니면 운영 체제 설정을 적용할지를 변경합니다.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Color Mode( Dark ) );

```

### Columns Manager

**구문:** obj &lt;&lt; Columns Manager

**JMP추가된 버전:** 18

### Conditional formatting rules

**구문:** obj &lt;&lt; Conditional formatting rules

**설명:** 조건부 형식 표시에 대한 환경 설정에 따라 표시되거나 표시되지 않는 사용자 조건부 규칙을 생성합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences(	Conditional Formatting Rules(		RuleSet(			RuleName( "My Special Rule" ),			GreaterThan(				Value( 0 ),				Inclusive( 0 ),				Format(					Text Color( "Medium Dark Red" ),					Back Color( "Light Yellow" ),					Annotation( 1 ),					FontStyle( Bold )				)			)		)	));

```

### Continuous Color Theme

**구문:** obj &lt;&lt; Continuous Color Theme( "name" )

**설명:** 모든 그래프에 나타나는 연속형 색상 테마에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Continuous Color Theme( "Green to Purple" ) );Show( Get Preference( Continuous Color Theme ) );

```

### Continuous graph type

**구문:** obj &lt;&lt; Continuous graph type( "자동"|"히스토그램"|"막대"|"히트맵"|"모자이크"|"런 차트"|"런 차트" )

**설명:** 연속형 열의 열 머리글에 표시할 기본 그래프입니다.

**JMP추가된 버전:** 18

### Custom Locale Settings

**구문:** obj &lt;&lt; Custom Locale Settings

**설명:** 소수점 구분 기호와 천 단위 구분 기호 같은 로케일 설정을 재정의합니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Custom Locale Settings( Decimal Separator( "," ) ) );Print( Format( 1.25, "Best" ) );Preferences( Custom Locale Settings( Decimal Separator( "." ) ) );Print( Format( 1.25, "Best" ) );Preferences( Custom Locale Settings( Decimal Separator() ) );

```

**예제 2**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. // Clear all locale overrides...Preferences( Custom Locale Settings( Reset to Defaults ) );

```

**예제 3**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Get Preferences( Custom Locale Settings );

```

### Data Filter Auto Clear

**구문:** obj &lt;&lt; Data Filter Auto Clear( state=0|1 )

### Data Filter Check Box Display

**구문:** obj &lt;&lt; Data Filter Check Box Display( state=0|1 )

**설명:** 범주형 필터 열에 대한 기본 표시는 체크박스 표시입니다.

### Data Filter Conditional

**구문:** obj &lt;&lt; Data Filter Conditional( state=0|1 )

### Data Filter Group is AND

**구문:** obj &lt;&lt; Data Filter Group is AND( state=0|1 )

### Data Filter Histograms and Bars

**구문:** obj &lt;&lt; Data Filter Histograms and Bars( state=0|1 )

**설명:** 사용 가능한 경우 필터 열에 대한 히스토그램 및 막대를 표시합니다.

**JMP추가된 버전:** 15

### Data Filter Include Check

**구문:** obj &lt;&lt; Data Filter Include Check( state=0|1 )

### Data Filter Select Check

**구문:** obj &lt;&lt; Data Filter Select Check( state=0|1 )

### Data Filter Show Check

**구문:** obj &lt;&lt; Data Filter Show Check( state=0|1 )

### Data Table Actions

**구문:** obj &lt;&lt; Data Table Actions( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Data Table Actions( 1 ) );

```

### Data Table Title on Output

**구문:** obj &lt;&lt; Data Table Title on Output( state=0|1 )

**설명:** 데이터 테이블 이름을 보고서 출력 위쪽에 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Data Table Title on Output( 1 ) );

```

### Date Title on Output

**구문:** obj &lt;&lt; Date Title on Output( state=0|1 )

**설명:** 날짜를 출력 제목에 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Date Title on Output( 1 ) );

```

### Default Field Width

**구문:** obj &lt;&lt; Default Field Width( number )

**설명:** 새 숫자 열에 사용되는 기본 필드 너비를 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Default Field Width( 16 ) );

```

### Default Project Show Bookmarks

**구문:** obj &lt;&lt; Default Project Show Bookmarks( state=0|1 )

**설명:** 새 프로젝트에 프로젝트 페인을 표시합니다.

**JMP추가된 버전:** 16

### Default Project Show Contents

**구문:** obj &lt;&lt; Default Project Show Contents( state=0|1 )

**설명:** 새 프로젝트에 내용 페인을 표시합니다.

**JMP추가된 버전:** 16

### Default Project Show Log

**구문:** obj &lt;&lt; Default Project Show Log( state=0|1 )

**설명:** 새 프로젝트에 로그 페인을 표시합니다.

**JMP추가된 버전:** 16

### Default Project Show Recent Files

**구문:** obj &lt;&lt; Default Project Show Recent Files( state=0|1 )

**설명:** 새 프로젝트에 최근 사용한 파일 페인을 표시합니다.

**JMP추가된 버전:** 16

### Default Project Show Workspace

**구문:** obj &lt;&lt; Default Project Show Workspace( state=0|1 )

**설명:** 새 프로젝트에 작업 영역 페인을 표시합니다.

**JMP추가된 버전:** 16

### Display JSL SAS results as HTML

**구문:** obj &lt;&lt; Display JSL SAS results as HTML( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Display JSL SAS results as HTML"n( 1 ) );

```

### Display indexes in English

**구문:** obj &lt;&lt; Display indexes in English( state=0|1 )

**설명:** 개체 스크립트 인덱스, JSL 함수 인덱스 표시 상자 인덱스를 영어로 표시합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Display indexes in English( 1 ) );

```

### Double Click Opens Column Info

**구문:** obj &lt;&lt; Double Click Opens Column Info( state=0|1 )

**설명:** 열 머리글을 두 번 클릭하면 열 이름을 편집하는 것이 아니라 열 정보 대화상자가 열립니다.

**JMP추가된 버전:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Double Click Opens Column Info( 1 ) );

```

### Empty Project at Startup

**구문:** obj &lt;&lt; Empty Project at Startup( "항상"|"다른 프로젝트가 열려 있지 않은 경우"|"안 함" )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Create an empty project when starting JMP( "Always" ) );

```

### Emulate Zoom Mode

**구문:** obj &lt;&lt; Emulate Zoom Mode( state=0|1 )

**설명:** 최대화된 창에 창 목록이 포함되는지 여부를 결정합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Emulate Zoom Mode( 1 ) );

```

### Enable Advanced Linear Algebra Routines

**구문:** obj &lt;&lt; Enable Advanced Linear Algebra Routines( state=0|1 )

**설명:** 여러 플랫폼과 JSL 함수에 사용되는 선형 대수 계산 루틴을 변경합니다. 이 환경 설정을 선택하면 BLAS 및 LAPACK 라이브러리를 기반으로 하는 고급 선형 대수 루틴이 활성화됩니다. JMP 설명서에는 이 환경 설정의 영향을 받는 플랫폼 및 JSL 함수에 대한 자세한 정보가 포함되어 있습니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enable Advanced Linear Algebra Routines( 0 ) );

```

### Enable Telemetry

**구문:** obj &lt;&lt; Enable Telemetry( state=0|1 )

### Enable direct input from IME

**구문:** obj &lt;&lt; Enable direct input from IME( state=0|1 )

### End Menu Item Marking After Deadline

**구문:** obj &lt;&lt; End Menu Item Marking After Deadline( state=0|1 )

**설명:** 제한 시간이 경과하면 메뉴 항목이 더 이상 표시되지 않습니다.

**JMP추가된 버전:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( End Menu Item Marking After Deadline( 0 ) );

```

### Enhanced Log Alternate Table Rows

**구문:** obj &lt;&lt; Enhanced Log Alternate Table Rows( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Alternate Table Rows( 1 ) );

```

### Enhanced Log Color By Window

**구문:** obj &lt;&lt; Enhanced Log Color By Window( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Color By Window( 1 ) );

```

### Enhanced Log Color By Window Color Theme

**구문:** obj &lt;&lt; Enhanced Log Color By Window Color Theme( "name" )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Enhanced Log Color By Window Color Theme ) );Set Preference( Enhanced Log Color By Window Color Theme( "Jet" ) );Show( Get Preference( Enhanced Log Color By Window Color Theme ) );

```

### Enhanced Log Filter Action

**구문:** obj &lt;&lt; Enhanced Log Filter Action( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Action( 1 ) );

```

### Enhanced Log Filter Error

**구문:** obj &lt;&lt; Enhanced Log Filter Error( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Error( 1 ) );

```

### Enhanced Log Filter Log

**구문:** obj &lt;&lt; Enhanced Log Filter Log( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Log( 1 ) );

```

### Enhanced Log Filter Result

**구문:** obj &lt;&lt; Enhanced Log Filter Result( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Result( 1 ) );

```

### Enhanced Log Filter Script

**구문:** obj &lt;&lt; Enhanced Log Filter Script( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Script( 1 ) );

```

### Enhanced Log Filter Warn

**구문:** obj &lt;&lt; Enhanced Log Filter Warn( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Filter Warn( 1 ) );

```

### Enhanced Log Origin Column

**구문:** obj &lt;&lt; Enhanced Log Origin Column( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Origin Column( 1 ) );

```

### Enhanced Log Result Column

**구문:** obj &lt;&lt; Enhanced Log Result Column( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Result Column( 1 ) );

```

### Enhanced Log Shade Table Cells

**구문:** obj &lt;&lt; Enhanced Log Shade Table Cells( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Table Cells( 1 ) );

```

### Enhanced Log Shade Table Headings

**구문:** obj &lt;&lt; Enhanced Log Shade Table Headings( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Shade Table Headings( 1 ) );

```

### Enhanced Log Table Column Borders

**구문:** obj &lt;&lt; Enhanced Log Table Column Borders( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Column Borders( 1 ) );

```

### Enhanced Log Table Heading Column Borders

**구문:** obj &lt;&lt; Enhanced Log Table Heading Column Borders( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Heading Column Borders( 1 ) );

```

### Enhanced Log Table Row Borders

**구문:** obj &lt;&lt; Enhanced Log Table Row Borders( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Table Row Borders( 1 ) );

```

### Enhanced Log Timestamp Column

**구문:** obj &lt;&lt; Enhanced Log Timestamp Column( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Timestamp Column( 1 ) );

```

### Enhanced Log Underline Table Headings

**구문:** obj &lt;&lt; Enhanced Log Underline Table Headings( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enhanced Log Underline Table Headings( 1 ) );

```

### Enter Key moves down

**구문:** obj &lt;&lt; Enter Key moves down( state=0|1 )

**설명:** Enter 키 이동에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Enter Key moves down( 1 ) );

```

### Evaluate OnOpen Scripts

**구문:** obj &lt;&lt; Evaluate OnOpen Scripts( "사용자 확인"|"안 함"|"항상" )

**설명:** OnOpen 스크립트의 실행을 허용하지 않으려면 "안 함"으로 설정하십시오. 알 수 없는 소스의 스크립트는 실행되지 않습니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Evaluate OnOpen Scripts( "Prompt" ) );

```

### Excel Open Method

**구문:** obj &lt;&lt; Excel Open Method( "모든 시트 열기"|"개별 워크시트 선택"|"Excel 마법사 사용" )

### Fast Marker Threshold

**구문:** obj &lt;&lt; Fast Marker Threshold( number )

**설명:** 그래프의 표식 새로 고침에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fast Marker Threshold( 100000 ) );

```

### Fill Hollow Markers

**구문:** obj &lt;&lt; Fill Hollow Markers( state=0|1 )

**설명:** 빈 표식이 그래프 배경 색상으로 채워집니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Hollow Markers( 1 ) );

```

### Fill Selection Color

**구문:** obj &lt;&lt; Fill Selection Color( color )

**설명:** 채우기 선택 모드가 "선택 시 지정한 색상 적용"으로 지정된 경우 채워진 선택 영역의 색상입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Color( "Red" ) );

```

### Fill Selection Fade

**구문:** obj &lt;&lt; Fill Selection Fade( number )

**설명:** 선택 취소된 채우기를 흐리게 나타내는 정도에 대한 기본 설정을 변경합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Fade( 50 ) );

```

### Fill Selection Mode

**구문:** obj &lt;&lt; Fill Selection Mode( "선택 시 패턴화"|"선택 시 어둡게"|"선택 시 외곽선 표시"|"선택 시 지정한 색상 적용"|"선택 취소 시 흐리게" )

**설명:** 채우기 영역에 대해 선택 사항이 표시되는 방법을 변경합니다. 기본값은 패턴입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Fill Selection Mode( "Selected Patterned" ) );

```

### Formula Evaluation

**구문:** obj &lt;&lt; Formula Evaluation( "유휴 상태일 때"|"즉시" )

**설명:** 계산식을 유휴 시간 동안 실행할지 아니면 포그라운드에서 즉시 실행할지 결정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Formula Evaluation( "Immediate" ) );

```

### Frame Border

**구문:** obj &lt;&lt; Frame Border( state=0|1 )

**설명:** 모든 그래프의 축이 아닌 쪽에 프레임 테두리 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Frame Border( 1 ) );

```

### Frame Color

**구문:** obj &lt;&lt; Frame Color( color )

**설명:** 모든 그래프에 그려지는 프레임 테두리 색상에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Frame Color( "Green" ) );

```

### Get

**구문:** obj &lt;&lt; Get

**설명:** 지정된 환경 설정을 구성하기 위한 스크립트를 반환합니다.

```jsl

a = Preferences[1] << Get( Show the Tip of the Day at startup );Show( a );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 환경 설정을 구성하기 위한 스크립트를 반환합니다.

```jsl

a = Preferences[1] << Get Script;Show( a );

```

### Graph Background Color

**구문:** obj &lt;&lt; Graph Background Color( color )

**설명:** 모든 그래프의 배경 색상에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Background Color( "Light Green" ) );

```

### Graph Border

**구문:** obj &lt;&lt; Graph Border( state=0|1 )

**설명:** 모든 그래프에 그래프 테두리 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Border( 1 ) );

```

### Graph Height

**구문:** obj &lt;&lt; Graph Height( number )

**설명:** 모든 그래프의 그래프 높이에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Height( 1 ) );

```

### Graph Marker

**구문:** obj &lt;&lt; Graph Marker( marker )

**설명:** 모든 그래프에 나타나는 표식 셰이프에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker( "Diamond" ) );

```

### Graph Marker Theme

**구문:** obj &lt;&lt; Graph Marker Theme( "표준"|"비움"|"채움"|"쌍"|"클래식"|"영숫자" )

**설명:** 모든 그래프에 나타나는 표식 테마에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker Theme( "Classic" ) );

```

### Graph Marker Unselected Fade

**구문:** obj &lt;&lt; Graph Marker Unselected Fade( number )

**설명:** 선택 취소된 표식을 흐리게 나타내는 정도에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker Unselected Fade( 45 ) );

```

### Graph Marker size

**구문:** obj &lt;&lt; Graph Marker size( "점"|"작게"|"중간"|"크게"|"XL"|"XXL"|"XXXL" )

**설명:** 모든 그래프에 나타나는 표식 크기에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Graph Marker size( "Large" ) );

```

### HDF5PathDelimiter

**구문:** obj &lt;&lt; HDF5PathDelimiter( text )

**JMP추가된 버전:** 17

### Header summary heat map color theme

**구문:** obj &lt;&lt; Header summary heat map color theme( "name" )

**설명:** 모든 그래프에 나타나는 연속형 색상 테마에 대한 기본 설정을 변경합니다.

**JMP추가된 버전:** 18

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Show( Get Preference( Header summary heat map color theme ) );Set Preference( Header summary heat map color theme( "Green to Purple" ) );Show( Get Preference( Header summary heat map color theme ) );

```

### Hide 'Find and Replace' window

**구문:** obj &lt;&lt; Hide &apos;Find and Replace&apos; window( state=0|1 )

**설명:** 찾아서 바꾼 후 &apos;찾기 및 바꾸기&apos; 창 유지에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Hide 'Find and Replace' window"n( 1 ) );

```

### Hide ODBC Connection Strings

**구문:** obj &lt;&lt; Hide ODBC Connection Strings( state=0|1 )

### Hide Overlapping Labels

**구문:** obj &lt;&lt; Hide Overlapping Labels( state=0|1 )

**설명:** 그래프에서 중첩 라벨을 숨깁니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Hide Overlap Labels( 0 ) );

```

### Histogram Color

**구문:** obj &lt;&lt; Histogram Color( color )

**설명:** 히스토그램의 기본 색상을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Histogram Color( "Light Yellow" ) );

```

### Histogram Line Color

**구문:** obj &lt;&lt; Histogram Line Color( color )

**설명:** 히스토그램의 기본 선 색상을 변경합니다.

**JMP추가된 버전:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.  Preferences[1] << Set( Histogram Line Color( "Red" ) );

```

### Hover Help

**구문:** obj &lt;&lt; Hover Help( state=0|1 )

**설명:** 원형 마우스 동작에 반응하는 툴팁 스타일 도움말입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Hover Help( 1 ) );

```

### Image Format for PowerPoint

**구문:** obj &lt;&lt; Image Format for PowerPoint( "기본 OS 형식"|"PNG"|"JPEG" )

### Include Responses Not in Data

**구문:** obj &lt;&lt; Include Responses Not in Data( state=0|1 )

**설명:** 데이터 테이블에서 나타나지 않는 반응의 라벨을 표시합니다.

### Initial JMP Window

**구문:** obj &lt;&lt; Initial JMP Window( "홈 창"|"JMP 시작하기"|"창 목록" )

**설명:** JMP를 시작할 때 생성되는 JMP 창을 결정합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial JMP Window( "Home Window" ) );

```

### Initial Log Window

**구문:** obj &lt;&lt; Initial Log Window( state=0|1 )

**설명:** 초기 로그 창 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial Log Window( 1 ) );

```

### Initial Splash Window

**구문:** obj &lt;&lt; Initial Splash Window( state=0|1 )

**설명:** 초기 시작 창 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Initial Splash Window( 1 ) );

```

### Inside Ticks

**구문:** obj &lt;&lt; Inside Ticks( state=0|1 )

**설명:** 그래프 프레임 내부에 축 눈금 표식에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Inside Ticks( 1 ) );

```

### Interactive HTML Color

**구문:** obj &lt;&lt; Interactive HTML Color( "연한 배경"|"진한 배경"|"회색 배경" )

**설명:** 대화식 HTML의 색상 테마에 대한 기본 설정을 변경합니다.

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Interactive HTML Color( "Light Background" ) );

```

### Internet Open Timeout

**구문:** obj &lt;&lt; Internet Open Timeout( number )

**설명:** 이 시간(초)이 지나면 인터넷 열기를 중단합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Internet Open Timeout( 300 /* 5 minutes */ ) );

```

### JMP Live Timeout

**구문:** obj &lt;&lt; JMP Live Timeout( number )

**설명:** JMP Live에 게시하기 위한 타임아웃 값을 설정합니다. 기본값은 180초입니다.

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( JMP Live Timeout( 120 ) );

```

### JMP Theme

**구문:** obj &lt;&lt; JMP Theme( "전통적"|"간편"|"JMP Live"|"JMP Clinical" )

**설명:** JMP 전체의 테마를 전환합니다.

**JMP추가된 버전:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );restore theme = Get Preference( JMP Theme );Set Preference( JMP Theme( "Traditional" ) );Wait( 2 );Set Preference( JMP Theme( "Comfortable" ) );Wait( 2 );Set Preference( JMP Theme( "JMP Live" ) );Wait( 2 );restore theme;

```

### JSL save column groups with group name

**구문:** obj &lt;&lt; JSL save column groups with group name( state=0|1 )

**설명:** 열 목록으로 스크립트를 저장할 때 열 목록이 열 그룹인 경우 &apos;column group&apos; 구문을 사용합니다.

**JMP추가된 버전:** 16

### JSS Dir

**구문:** obj &lt;&lt; JSS Dir( text )

**설명:** Changes the JSS directory for development use.

**JMP추가된 버전:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Set Preference( JSS Dir( "C:\My\Path\To\jss\" ) );

```

### Journal Freeze Backward Compatible

**구문:** obj &lt;&lt; Journal Freeze Backward Compatible( state=0|1 )

### Language Switch Warning

**구문:** obj &lt;&lt; Language Switch Warning( state=0|1 )

**설명:** 언어 변경 감지 시 경고에 대한 기본 설정을 변경합니다. 참고: Windows에서만 사용할 수 있습니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Language Switch Warning( 1 ) );

```

### Laser pointer

**구문:** obj &lt;&lt; Laser pointer( "해제"|"보라색"|"파란색"|"녹색"|"노란색"|"주황색"|"빨간색" )

**설명:** 보고서의 일부분을 강조하기 위한 레이저 포인터 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Laser pointer( "Purple" ) );

```

### Line Width

**구문:** obj &lt;&lt; Line Width( number )

**설명:** 그래프 내용에 대한 기본 선 너비를 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Line Width( 2 ) );

```

### Log Mode

**구문:** obj &lt;&lt; Log Mode( "확장"|"텍스트" )

**설명:** 로그 표시 방법에 대한 기본 설정을 변경합니다. 여기에는 기본 로그와 프로젝트 로그가 포함됩니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Log Mode( "Text" ) );

```

### Log Window Height

**구문:** obj &lt;&lt; Log Window Height( number )

**설명:** 로그 창 크기에 대한 기본 설정을 변경합니다. 참고: Windows에서만 사용할 수 있습니다.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Log Window Height( 200 ) );

```

### Major Grid Line Color

**구문:** obj &lt;&lt; Major Grid Line Color( color )

**설명:** 그래프 주 격자선의 기본 색상을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Major Grid Line Color( "Blue" ) );

```

### Major Grid Lines

**구문:** obj &lt;&lt; Major Grid Lines( state=0|1 )

**설명:** 그래프에 주 격자선 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Major Grid Lines( 1 ) );

```

### Mark Menu Items Added Since

**구문:** obj &lt;&lt; Mark Menu Items Added Since( "없음"|"현재 버전"|"18"|"17"|"16"|"15"|"14" )

**설명:** 특정 JMP 버전보다 최신 버전의 메뉴 항목을 표시합니다.

**JMP추가된 버전:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Mark Items Added Since( "16" ) );

```

### Marker Label Color

**구문:** obj &lt;&lt; Marker Label Color( color )

**설명:** "표식 라벨 색상 스타일"이 "고정"으로 설정된 경우 표식 라벨 색상입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Label Color( "Blue" ) );

```

### Marker Label Color Style

**구문:** obj &lt;&lt; Marker Label Color Style( "표식 색상"|"표식 색상 흐리게"|"고정 색상" )

**설명:** 표식 라벨에 대한 기본 색상 스타일을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Label Color Style( "Marker Color" ) );

```

### Marker Selection Mode

**구문:** obj &lt;&lt; Marker Selection Mode( "선택 취소 시 흐리게"|"선택 시 크게"|"선택 시 후광 표시"|"선택 시 외곽선 표시"|"선택 시 지정한 색상 적용" )

**설명:** 표식 선택 모드에 대한 기본 설정을 변경합니다. 기본값은 선택 취소 시 흐리게입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Marker Selection Mode( "Selection Haloed" ) );

```

### Maximum Auto Size Column List Width

**구문:** obj &lt;&lt; Maximum Auto Size Column List Width( number )

**JMP추가된 버전:** 18

### Maximum JMP Call Depth

**구문:** obj &lt;&lt; Maximum JMP Call Depth( number )

**설명:** 최대 JMP 호출 깊이에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum JMP call depth( 50 ) );

```

### Maximum Parse Depth

**구문:** obj &lt;&lt; Maximum Parse Depth( number )

**설명:** 최대 파싱 깊이에 대한 기본 설정을 변경합니다. 기본값은 512입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum Parse Depth( 600 ) );

```

### Maximum Symbol Evaluation Recursion Depth

**구문:** obj &lt;&lt; Maximum Symbol Evaluation Recursion Depth( number )

**설명:** 최대 기호 평가 재귀 깊이에 대한 기본 설정을 변경합니다. 기본값은 25입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Maximum Symbol Evaluation Recursion Depth( 50 ) );

```

### Minor Grid Line Color

**구문:** obj &lt;&lt; Minor Grid Line Color( color )

**설명:** 그래프 보조 격자선의 기본 색상을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Minor Grid Line Color( "Black" ) );

```

### Minor Grid Lines

**구문:** obj &lt;&lt; Minor Grid Lines( state=0|1 )

**설명:** 그래프에 보조 격자선 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Minor Grid Lines( 1 ) );

```

### New Project Template

**구문:** obj &lt;&lt; New Project Template( text )

**설명:** 비어 있는 새 프로젝트에 사용할 파일입니다.

**JMP추가된 버전:** 16

### New character columns default to compact

**구문:** obj &lt;&lt; New character columns default to compact( state=0|1 )

**설명:** 새 문자 열 또는 문자 데이터 유형으로 전환된 열이 자동으로 압축 열이 됩니다.

**JMP추가된 버전:** 18

### OAuth2 Authentication Browser

**구문:** obj &lt;&lt; OAuth2 Authentication Browser( text=Default )

**설명:** 지정된 브라우저 유형으로 OAuth2 서버에 로그인합니다. 유효한 값은 "기본값", "포함", "외부"입니다. 기본값은 "Default"입니다.

**JMP추가된 버전:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Sign in to OAuth2 servers with the specified browser type( "Embedded" ) );

```

### ODBC Allow Table Replace

**구문:** Preferences[1] &lt;&lt; Name("ODBC Allow Table Replace") ( state = 0|1 )

**설명:** ODBC 테이블 바꾸기를 허용하려면 이 옵션을 선택합니다. 이 옵션은 기본적으로 선택됩니다. ODBC 테이블을 바꾸면 데이터베이스의 기존 테이블이 삭제되고 새 테이블로 대체됩니다.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.     Preferences[1] << Name( "ODBC Allow Table Replace" )(0);

```

### ODBC Hide Connection String

**구문:** obj &lt;&lt; ODBC Hide Connection String( state=0|1 )

### Open Text File Charset

**구문:** obj &lt;&lt; Open Text File Charset( "최적 추측"|"ASMO-708"|"big5"|"cp1025"|"cp866"|"cp875"|"csISO2022JP"|"DOS-720"|"DOS-862"|"EUC-CN"|"EUC-JP"|"euc-kr"|"GB18030"|"gb2312"|"hz-gb-2312"|"IBM00858"|"IBM00924"|"IBM01047"|"IBM01140"|"IBM01141"|"IBM01142"|"IBM01143"|"IBM01144"|"IBM01145"|"IBM01146"|"IBM01147"|"IBM01148"|"IBM01149"|"IBM037"|"IBM1026"|"IBM273"|"IBM277"|"IBM278"|"IBM280"|"IBM284"|"IBM285"|"IBM290"|"IBM297"|"IBM420"|"IBM423"|"IBM424"|"IBM437"|"IBM500"|"ibm737"|"ibm775"|"ibm850"|"ibm852"|"IBM855"|"ibm857"|"IBM860"|"ibm861"|"IBM863"|"IBM864"|"IBM865"|"ibm869"|"IBM870"|"IBM871"|"IBM880"|"IBM905"|"IBM-Thai"|"iso-2022-jp"|"iso-2022-jp"|"iso-2022-kr"|"iso-8859-1"|"iso-8859-13"|"iso-8859-15"|"iso-8859-2"|"iso-8859-3"|"iso-8859-4"|"iso-8859-5"|"iso-8859-6"|"iso-8859-7"|"iso-8859-8"|"iso-8859-8-i"|"iso-8859-9"|"Johab"|"koi8-r"|"koi8-u"|"ks_c_5601-1987"|"macintosh"|"shift_jis"|"us-ascii"|"utf-16"|"utf-16BE"|"utf-32"|"utf-7"|"utf-8"|"windows-1250"|"windows-1251"|"Windows-1252"|"windows-1253"|"windows-1254"|"windows-1255"|"windows-1256"|"windows-1257"|"windows-1258"|"windows-874"|"x-Chinese-CNS"|"x-Chinese-Eten"|"x-cp20001"|"x-cp20003"|"x-cp20004"|"x-cp20005"|"x-cp20261"|"x-cp20269"|"x-cp20936"|"x-cp20949"|"x-cp50227"|"x-EBCDIC-KoreanExtended"|"x-IA5"|"x-IA5-German"|"x-IA5-Norwegian"|"x-IA5-Swedish"|"x-iscii-as"|"x-iscii-be"|"x-iscii-de"|"x-iscii-gu"|"x-iscii-ka"|"x-iscii-ma"|"x-iscii-or"|"x-iscii-pa"|"x-iscii-ta"|"x-iscii-te"|"x-mac-arabic"|"x-mac-ce"|"x-mac-chinesesimp"|"x-mac-chinesetrad"|"x-mac-croatian"|"x-mac-cyrillic"|"x-mac-greek"|"x-mac-hebrew"|"x-mac-icelandic"|"x-mac-japanese"|"x-mac-korean"|"x-mac-romanian"|"x-mac-thai"|"x-mac-turkish"|"x-mac-ukrainian" )

**설명:** 유니코드 바이트 순서 표시를 찾을 수 없는 경우 사용할 인코딩을 지정합니다. 기본값은 파일 내용을 기반으로 인코딩을 추측하는 것입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Open Text File Charset( "utf-8" ) );

```

### Open character columns as compact columns

**구문:** obj &lt;&lt; Open character columns as compact columns( state=0|1 )

**설명:** 압축 열이 유리하다고 판단될 때 자동으로 문자 열을 압축 열로 엽니다.

**JMP추가된 버전:** 18

### Open files from outside projects in

**구문:** obj &lt;&lt; Open files from outside projects in( "프로젝트 없음"|"프로젝트 열기 또는 프로젝트 없음"|"프로젝트 열기 또는 새 프로젝트"|"새 프로젝트" )

**JMP추가된 버전:** 16

### Outline Close Orientation

**구문:** obj &lt;&lt; Outline Close Orientation( "자동"|"수평"|"수직" )

**설명:** 가로 공간을 절약하기 위해 세로로 접는 개요 상자에 대한 옵션입니다.

### Parallel Data Table Column Decompression

**구문:** obj &lt;&lt; Parallel Data Table Column Decompression( state=0|1 )

**설명:** 열을 병렬로 압축 해제하기 위한 기본 설정을 변경합니다. 이 옵션은 기본적으로 활성화되어 있습니다. 옵션을 해제하면 일부 매우 큰 테이블이 로드될 수 있습니다.

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences[1] << Set( Parallel Data Table Column Decompression( 0 ) );

```

### Partial Selection Indicator

**구문:** obj &lt;&lt; Partial Selection Indicator( "없음"|"막대"|"파이"|"와플" )

**설명:** 그룹의 부분 선택이 표시되는 방식을 나타냅니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Partial Selection Mode( "Bar" ) );

```

### Platform Launch Actions

**구문:** obj &lt;&lt; Platform Launch Actions( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Platform Launch Actions( 1 ) );

```

### Prefer DSN-less ODBC Connection Strings

**구문:** Preferences[1] &lt;&lt; Name("Prefer DSN-less ODBC Connection Strings") ( state = 0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.      Preferences[1] << Name( "Prefer DSN-less ODBC Connection Strings" )(1);

```

### Preserve SAS formats when exporting to SAS

**구문:** obj &lt;&lt; Preserve SAS formats when exporting to SAS( state=0|1 )

**설명:** SAS로 내보낼 때 SAS 형식 유지에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Preserve SAS formats when exporting to SAS( 1 ) );

```

### Preserve SAS variable names when exporting to SAS

**구문:** obj &lt;&lt; Preserve SAS variable names when exporting to SAS( state=0|1 )

**설명:** SAS로 내보낼 때 SAS 변수 이름 유지에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Preserve SAS variable names when exporting to SAS( 1 ) );

```

### Print Data Grid as is

**구문:** obj &lt;&lt; Print Data Grid as is( state=0|1 )

**설명:** 화면에 나타나는 대로 데이터 격자 인쇄에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Print Data Grid as is( 1 ) );

```

### Prompt to save when closing summary tables

**구문:** obj &lt;&lt; Prompt to save when closing summary tables( state=0|1 )

**설명:** 요약 테이블을 닫을 때 저장 여부를 묻거나 묻지 않습니다.

**JMP추가된 버전:** 14

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Close report action( "Prompt" ) );

```

### Proxy Port

**구문:** obj &lt;&lt; Proxy Port( number )

**설명:** 지정된 프록시 포트를 사용합니다.

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Proxy Port( 80 ) );

```

### Proxy Server

**구문:** obj &lt;&lt; Proxy Server( text )

**설명:** 지정된 프록시를 사용합니다.

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.url = "http:://myproxy.com:80";Preferences[1] << Set( Proxy Server( url ) );

```

### Proxy User

**구문:** obj &lt;&lt; Proxy User( text )

**설명:** 프록시 인증에 사용할 사용자 이름 및 암호입니다([사용자 이름]:[암호] 형식).

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Proxy User( "clark%20kent:superman" ) );

```

### Reopen the initial JMP window on last window close

**구문:** obj &lt;&lt; Reopen the initial JMP window on last window close( state=0|1 )

**설명:** 마지막 JMP 창을 닫으면 초기 JMP 창을 자동으로 다시 열지 여부를 결정합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Reopen the initial JMP window on last window close( 1 ) );

```

### Report Invalid Display Box Messages

**구문:** obj &lt;&lt; Report Invalid Display Box Messages( state=0|1 )

**설명:** 표시 상자의 올바르지 않은 메시지에 대해 오류를 출력하기 위한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report Invalid Display Box Messages( 1 ) );

```

### Report JSL warnings and errors interactively

**구문:** obj &lt;&lt; Report JSL warnings and errors interactively( state=0|1 )

**설명:** JSL 전송 시 발생하는 경고 및 오류가 로깅되고 대화식으로 표시됩니다. 이 옵션을 비활성화하면 경고 및 오류가 로깅되기만 합니다.

**JMP추가된 버전:** 15

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report JSL warnings and errors interactively( 1 ) );

```

### Report Recent Problems

**구문:** obj &lt;&lt; Report Recent Problems( state=0|1 )

### Report Snapshot On Close

**구문:** obj &lt;&lt; Report Snapshot On Close( state=0|1 )

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Report Snapshot On Close( 1 ) );

```

### Row Editor Always Show All Columns

**구문:** obj &lt;&lt; Row Editor Always Show All Columns( state=0|1 )

**설명:** 이 옵션을 선택하면 선택된 열이 있는지 여부에 관계없이 데이터 테이블의 모든 열이 행 편집기에 표시됩니다.

**JMP추가된 버전:** 16

### Ruler Tool Units

**구문:** obj &lt;&lt; Ruler Tool Units( "킬로미터"|"마일" )

**설명:** 그래프 도구 눈금자를 그래프 빌더의 맵에 사용할 때 표시되는 단위를 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Ruler Tool Units( "Miles" ) );

```

### SAS Automatically Generate ODS results

**구문:** obj &lt;&lt; SAS Automatically Generate ODS results( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Automatically Generate ODS results"n( 1 ) );

```

### SAS Connect to CAS with SAS Viya

**구문:** obj &lt;&lt; SAS Connect to CAS with SAS Viya( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.           Preferences[1] << Set( "SAS Connect to CAS with SAS Viya"n( 1 ) );

```

### SAS Data Import Close Warning

**구문:** obj &lt;&lt; SAS Data Import Close Warning( state=0|1 )

**JMP추가된 버전:** 19

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Data Import Close Warning"n( 0 ) );

```

### SAS Data Import Uses Labels

**구문:** obj &lt;&lt; SAS Data Import Uses Labels( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Data Import Uses Labels"n( 1 ) );

```

### SAS Import generated datasets into JMP

**구문:** obj &lt;&lt; SAS Import generated datasets into JMP( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Import generated datasets into JMP"n( 1 ) );

```

### SAS ODS Results Format

**구문:** obj &lt;&lt; SAS ODS Results Format( "HTML"|"텍스트" )

### SAS ODS Style

**구문:** obj &lt;&lt; SAS ODS Style( text=Statistical )

**설명:** 기본값은 "Statistical"입니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS ODS Style"n( "HTMLBlue" ) );

```

### SAS Organize results in JMP project

**구문:** obj &lt;&lt; SAS Organize results in JMP project( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "SAS Organize results in JMP project"n( 1 ) );

```

### SAS Transport Use UTF8

**구문:** obj &lt;&lt; SAS Transport Use UTF8( state=0|1 )

**설명:** 전송 파일의 기본 문자 인코딩을 UTF-8로 변경

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( SAS Transport Use UTF8( 1 ) );

```

### SPSSMultiResponseDelimiter

**구문:** obj &lt;&lt; SPSSMultiResponseDelimiter( text=| )

**설명:** 기본값은 "|"입니다.

**JMP추가된 버전:** 16

### Save Data Table Columns GZ Compressed

**구문:** obj &lt;&lt; Save Data Table Columns GZ Compressed( state=0|1 )

**설명:** GZip 압축 형식으로 데이터 테이블을 저장하기 위한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Data Table Columns GZ Compressed( 1 ) );

```

### Save Image DPI

**구문:** obj &lt;&lt; Save Image DPI( number )

**설명:** 이미지 저장 시 사용할 DPI 설정을 지정합니다. 지정하지 않을 경우 기본값이 사용됩니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.             Preferences[1] << Set( Save Image DPI( 300 ) );

```

### Save Journals GZ Compressed

**구문:** obj &lt;&lt; Save Journals GZ Compressed( state=0|1 )

**설명:** 저널을 GZip 압축 형식으로 저장에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Journals GZ Compressed( 1 ) );

```

### Save Scripts in English

**구문:** obj &lt;&lt; Save Scripts in English( state=0|1 )

**설명:** 스크립트를 표시된 언어 대신 영어로 저장에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Scripts in English( 1 ) );

```

### Save Text Files as Unicode

**구문:** obj &lt;&lt; Save Text Files as Unicode( state=0|1 )

**설명:** 텍스트 파일을 유니코드 형식으로 저장에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save Text Files as Unicode( 1 ) );

```

### Save table with report

**구문:** obj &lt;&lt; Save table with report( "포함"|"별도"|"사용자 확인" )

**설명:** 저장된 보고서와 함께 데이터가 저장되는 방법을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save table with report( prompt | embed | separate ) );

```

### Save the session when exiting

**구문:** obj &lt;&lt; Save the session when exiting( "항상"|"안 함"|"사용자 확인" )

**설명:** 종료 시 세션 저장에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Save table with report( "Prompt" ) );

```

### Selected Marker Color

**구문:** obj &lt;&lt; Selected Marker Color( color )

**설명:** 표식 선택 모드에서 선택 시 지정한 색상 적용을 사용할 경우 선택된 표식의 색상을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Selected Marker Color( "Cyan" ) );

```

### Semantic formatting

**구문:** obj &lt;&lt; Semantic formatting

**설명:** 기준이 현재 보고서 컨텍스트와 일치할 때 사용되는 의미 체계 형식을 생성합니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Oneway( Y( :height ), X( :sex ), Means( 1 ), Mean Diamonds( 1 ) );Preferences(	Semantic formatting(		Add Semantic Format(			Format Name( "My Format 1" ),			Semantic Format( Format( "Fixed Dec", 11, 1 ) ),			Criteria( Object Name( "*mean*" ), Outline Path( "** :: Means for Oneway Anova" ) )		),		Add Semantic Format(			Format Name( "My Format 2" ),			Semantic Format( Format( "Fixed Dec", 11, 2 ) ),			Criteria(				Object Name( "*mean*" ),				Outline Path( "** :: Means for Oneway Anova" ),				Row Name( "M" )			)		)	));

```

**예제 2**

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Semantic formatting( Clear ) );

```

### Sequential Color Theme

**구문:** obj &lt;&lt; Sequential Color Theme( "name" )

**설명:** 모든 그래프에 나타나는 연속형 색상 테마에 대한 기본 설정을 변경합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Show( Get Preference( Continuous Color Theme ) );Set Preference( Sequential Color Theme( "Green to Purple" ) );Show( Get Preference( Sequential Color Theme ) );

```

### Set

**구문:** obj &lt;&lt; Set

**설명:** 지정된 환경 설정을 구성합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show the Tip of the Day at startup( 1 ) );

```

### Set ODBC Primary Key as Link ID

**구문:** Preferences[1] &lt;&lt; Name("Set ODBC Primary Key as Link ID") ( state = 0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP.      Preferences[1] << Name( "Set ODBC Primary Key as Link ID" )(1);

```

### Shade Alternate Table Rows

**구문:** obj &lt;&lt; Shade Alternate Table Rows( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Alternate Table Rows( 1 ) );

```

### Shade Table Cells

**구문:** obj &lt;&lt; Shade Table Cells( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Table Cells( 1 ) );

```

### Shade Table Headings

**구문:** obj &lt;&lt; Shade Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shade Table Headings( 1 ) );

```

### Shape Boundary Color

**구문:** obj &lt;&lt; Shape Boundary Color( color )

**설명:** 배경 맵과 같은 모든 그래프에 그려진 셰이프 경계의 색상에 대한 기본 설정을 변경합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Shape Boundary Color( "Black" ) );

```

### Show Alternate Column Name

**구문:** obj &lt;&lt; Show Alternate Column Name( state=0|1 )

**설명:** 대화상자 및 데이터 테이블 열 패널에 대체 이름을 표시하는 기본 설정을 변경합니다.

### Show Personalization at startup

**구문:** obj &lt;&lt; Show Personalization at startup( state=0|1 )

**설명:** 다음에 JMP를 시작할 때 개인 설정 대화상자가 표시됩니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show Personalization at startup( 1 ) );

```

### Show SAS Log

**구문:** obj &lt;&lt; Show SAS Log( "안 함"|"항상"|"오류 발생 시" )

### Show Search box on Columns Panel

**구문:** obj &lt;&lt; Show Search box on Columns Panel( state=0|1 )

**설명:** 기본적으로 열 패널에 검색 편집 상자를 표시합니다.

**JMP추가된 버전:** 16

### Show Status Bar

**구문:** obj &lt;&lt; Show Status Bar( state=0|1 )

**설명:** 상태 표시줄 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show Status Bar( 1 ) );

```

### Show conditional formatting

**구문:** obj &lt;&lt; Show conditional formatting( "항상"|"화면만"|"안 함" )

**설명:** 보고서에 조건부 형식 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show conditional formatting( "Always" ) );

```

### Show menu tips

**구문:** obj &lt;&lt; Show menu tips( state=0|1 )

**설명:** 빨간색 삼각형 메뉴 항목을 마우스로 가리키면 표시되는 메뉴 팁 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show menu tips( 1 ) );

```

### Show missing data bars or bins in summary graphs

**구문:** obj &lt;&lt; Show missing data bars or bins in summary graphs( state=0|1 )

**설명:** 요약 그래프에 결측 데이터 막대 또는 계급을 기본적으로 표시할지 여부를 지정합니다. 이 값에 상관없이 요약 그래프를 마우스 오른쪽 버튼으로 클릭하고 "결측값 막대" 또는 "결측값 계급"을(를) 선택하여 개별 요약 그래프에 대해 표시 여부를 전환할 수 있습니다.

**JMP추가된 버전:** 16

### Show semantic formatting

**구문:** obj &lt;&lt; Show semantic formatting( "항상"|"No Row Matching"|"안 함" )

**설명:** 보고서에 의미 체계 형식을 사용하기 위한 기본 설정을 변경합니다. 가능한 값은 "항상", "행 매칭 안 함" 및 "안 함"입니다. 행별 의미 체계 형식을 비활성화하려면 "행 매칭 안 함"을 사용합니다.

**JMP추가된 버전:** 17

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show semantic formatting( "Always" ) );

```

### Show summary graphs below column names

**구문:** obj &lt;&lt; Show summary graphs below column names( state=0|1 )

**설명:** 행 수가 성능 임계(3백만 개의 행) 미만인 경우 데이터 테이블의 열 이름과 데이터 셀 사이에 요약 그래프를 기본적으로 표시할지 여부를 지정합니다. 초기 상태에 상관없이 열 이름 옆의 아이콘을 사용하여 개별 데이터 테이블에 대해 이 요약 그래프의 표시 여부를 전환할 수 있습니다.

**JMP추가된 버전:** 15

### Show the Quick Start at startup

**구문:** obj &lt;&lt; Show the Quick Start at startup( state=0|1 )

**설명:** &apos;빠른 시작&apos; 창 표시에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Show the Quick Start at startup( 1 ) );

```

### Summary Graph Continuous Color

**구문:** obj &lt;&lt; Summary Graph Continuous Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 연속형 데이터의 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Highlight Color

**구문:** obj &lt;&lt; Summary Graph Continuous Highlight Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 연속형 데이터의 강조 표시 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Color

**구문:** obj &lt;&lt; Summary Graph Continuous Missing Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 결측 연속형 데이터의 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Missing Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Continuous Missing Highlight Color

**구문:** obj &lt;&lt; Summary Graph Continuous Missing Highlight Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 결측 연속형 데이터의 강조 표시 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Continuous Missing Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Color

**구문:** obj &lt;&lt; Summary Graph Name Ordered Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 이름으로 정렬된 데이터의 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Name Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Name Ordered Highlight Color

**구문:** obj &lt;&lt; Summary Graph Name Ordered Highlight Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 이름으로 정렬된 데이터의 강조 표시 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Name Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Color

**구문:** obj &lt;&lt; Summary Graph Other Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 기타 막대의 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Other Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Other Highlight Color

**구문:** obj &lt;&lt; Summary Graph Other Highlight Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 기타 막대의 강조 표시 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Other Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Run Chart Color

**구문:** obj &lt;&lt; Summary Graph Run Chart Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 기타 막대의 색상을 설정합니다.

**JMP추가된 버전:** 18

```jsl

//Caution: Changing a preference will//affect the default behavior of JMP.Preferences( Summary Graph Run Chart Color( RGB Color( 0.5, 0.1, 0.9 ) ) );

```

### Summary Graph Size Ordered Color

**구문:** obj &lt;&lt; Summary Graph Size Ordered Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 크기로 정렬된 데이터의 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Size Ordered Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Summary Graph Size Ordered Highlight Color

**구문:** obj &lt;&lt; Summary Graph Size Ordered Highlight Color( color )

**설명:** 요약 그래프 및 데이터 필터에서 크기로 정렬된 데이터의 강조 표시 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Summary Graph Size Ordered Highlight Color( RGB Color( 0.5, 0.9, 0.9 ) ) );

```

### Suppress Formula Eval on Open

**구문:** obj &lt;&lt; Suppress Formula Eval on Open( state=0|1 )

**설명:** 데이터 테이블을 열 때 계산식 실행 제한에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Suppress Formula Eval on Open( 1 ) );

```

### Table Column Borders

**구문:** obj &lt;&lt; Table Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Column Borders( 1 ) );

```

### Table Column Group Borders

**구문:** obj &lt;&lt; Table Column Group Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Column Group Borders( 1 ) );

```

### Table Heading Column Borders

**구문:** obj &lt;&lt; Table Heading Column Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Heading Column Borders( 1 ) );

```

### Table Row Borders

**구문:** obj &lt;&lt; Table Row Borders( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Table Row Borders( 1 ) );

```

### Task Bar Strategy

**구문:** obj &lt;&lt; Task Bar Strategy( "All windows"|"Main window only"|"Main and data tables" )

**설명:** Windows 작업 표시줄에 표시되는 JMP 창을 결정합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Task Bar Strategy( "All Windows" ) );

```

### Transparent background for report PNG images

**구문:** obj &lt;&lt; Transparent background for report PNG images( state=0|1 )

**설명:** 보고서 또는 보고서의 일부를 PNG 이미지로 저장하면 배경이 투명하게 나타납니다.

**JMP추가된 버전:** 14

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Transparent background for report PNG images( 1 ) );

```

### Underline Table Headings

**구문:** obj &lt;&lt; Underline Table Headings( state=0|1 )

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Underline Table Headings( 1 ) );

```

### Use Excel Labels as Headings

**구문:** obj &lt;&lt; Use Excel Labels as Headings( "최적 추측 사용"|"항상"|"안 함" )

**설명:** Excel 파일을 열 때 Excel 라벨을 JMP 열 이름으로 가져오기에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Excel Labels as Headings( "Always" ) );

```

### Use Greek letters

**구문:** obj &lt;&lt; Use Greek letters( state=0|1 )

**설명:** JMP 보고서에 그리스 문자 사용에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Greek letters( 1 ) );

```

### Use JMP Locale Settings

**구문:** obj &lt;&lt; Use JMP Locale Settings( state=0|1 )

**설명:** 숫자, 날짜 및 통화 형식을 표시하는 기본 동작을 변경합니다. 참고: Windows에서만 사용할 수 있습니다.

```jsl

//Caution: Changing a preference will affect //the default behavior of JMP. Preferences[1] << Set( Use JMP Locale Settings( 1 ) );

```

### Use Numerical Ordering

**구문:** obj &lt;&lt; Use Numerical Ordering( state=0|1 )

**설명:** 숫자를 포함하는 텍스트가 수치 순서로 정렬되도록 새 열의 열 정렬을 구성합니다. 문자 유형으로 변환된 열도 값 순서 특성이 포함되어 있지 않으면 영향을 받게 됩니다.

**JMP추가된 버전:** 16

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences( Use Numerical Ordering( 0 ) );

```

### Use Project Log

**구문:** obj &lt;&lt; Use Project Log( "항상"|"열려 있는 경우"|"안 함" )

**설명:** 프로젝트의 스크립트 및 창에서 생성된 로그 메시지를 기본 로그 창 대신 프로젝트 로그 창으로 보낼지 여부를 지정합니다.

**JMP추가된 버전:** 16

### Use SPSS labels for column names during import

**구문:** obj &lt;&lt; Use SPSS labels for column names during import( state=0|1 )

**설명:** SPSS 파일을 열 때 SPSS 라벨을 JMP 열 이름으로 가져오기에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use SPSS labels for column names during import( 1 ) );

```

### Use Thousands Separator

**구문:** obj &lt;&lt; Use Thousands Separator( state=0|1 )

**설명:** 숫자 출력에 천 단위 구분 기호 사용에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use Thousands Separator( 1 ) );

```

### Use Triple-S Labels as Headings

**구문:** obj &lt;&lt; Use Triple-S Labels as Headings( state=0|1 )

**설명:** 라벨을 Triple-S 변수에 대한 열 이름으로 사용하기 위한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( "Use Triple-S Labels as Headings"n( 1 ) );

```

### Use a Floating Window for Data Filters

**구문:** obj &lt;&lt; Use a Floating Window for Data Filters( state=0|1 )

**설명:** 설정할 경우 데이터 필터가 데이터 테이블 및 관련 창 위에 표시되는 부동 창을 사용합니다. 그렇지 않은 경우에는 데이터 필터가 다른 창과 함께 정상적으로 배열될 수 있는 창을 사용합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use a Floating Window for Data Filters( 1 ) );

```

### Use an Asterisk with the PValue Format

**구문:** obj &lt;&lt; Use an Asterisk with the PValue Format( state=0|1 )

**설명:** p 값 형식은 숫자 열에 별표를 추가합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use an Asterisk with the PValue Format( 1 ) );

```

### Use column references in Dispatch

**구문:** obj &lt;&lt; Use column references in Dispatch( state=0|1 )

**설명:** 보고서 사용자 정의를 저장하는 경우 사용자 정의 요소를 참조할 때 문자열 대신 열 참조를 사용합니다. 그러면 열 이름 변경에 대해 더 로버스트한 스크립트가 생성됩니다. 이 환경 설정을 사용하여 저장된 사용자 정의는 JMP 18.0 이상에서만 작동할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use column references in Dispatch( 1 ) );

```

### Use math symbols

**구문:** obj &lt;&lt; Use math symbols( state=0|1 )

**설명:** JMP 보고서에 수학 기호 사용에 대한 기본 설정을 변경합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Preferences[1] << Set( Use math symbols( 1 ) );

```

### Virtual Join Auto Open Linked Table

**구문:** obj &lt;&lt; Virtual Join Auto Open Linked Table( state=0|1 )

**설명:** 이 열이 참조하는 데이터 테이블을 자동으로 엽니다.

**JMP추가된 버전:** 16

### Virtual Join Use Linked Column Name

**구문:** obj &lt;&lt; Virtual Join Use Linked Column Name( state=0|1 )

**설명:** 연결된 열 이름을 사용하여 가상 열 이름을 지정합니다.

**JMP추가된 버전:** 16

### Warn that compact columns cannot be opened in JMP 17 and earlier

**구문:** obj &lt;&lt; Warn that compact columns cannot be opened in JMP 17 and earlier( state=0|1 )

**설명:** JMP 17 및 이전 버전에서는 압축 파일 형식을 열 수 없습니다.

**JMP추가된 버전:** 18

### Warn when referenced table name has changed

**구문:** obj &lt;&lt; Warn when referenced table name has changed( state=0|1 )

**설명:** 가상으로 연결된(참조된) 테이블의 이름이 변경된 경우 경고 메시지를 표시합니다.

**JMP추가된 버전:** 15

## Platform Preferences

### 항목 메시지

#### Get

**구문:** obj &lt;&lt; Get

**설명:** 지정된 환경 설정을 구성하기 위한 스크립트를 반환합니다.

```jsl

a = Platform Preferences[1] << Get( Distribution );Show( a );

```

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 환경 설정을 구성하기 위한 스크립트를 반환합니다.

```jsl

a = Platform Preferences[1] << Get Script;Show( a );

```

#### Set

**구문:** obj &lt;&lt; Set

**설명:** 지정된 환경 설정을 구성합니다.

```jsl

//Caution: Changing a preference will //affect the default behavior of JMP. Platform Preferences[1] << Set( Distribution( Vertical( 1 ) ) );

```

