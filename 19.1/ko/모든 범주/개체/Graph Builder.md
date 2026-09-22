# Graph Builder



## Area Element

### 연결된 생성자

#### Area Element

**구문:** Area Element

**설명:** 범주별로 요약된 반응을 표시합니다.

**100% 누적 영역 차트**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// 100% stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Summary Statistic( "% of Factor" ) ) ),	Local Data Filter( Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) ) ),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Percent", 13, 0 ), Max( 1 )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**누적 영역 차트**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ) ) ),	Local Data Filter( Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) ) ),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**사용자 구간으로 선 주위에 범위 영역 지정**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements( Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ), Line( X, Y( 1 ), Legend( 6 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Level Name( 0, "IQR" ), Properties( 0, {Transparency( 0.33 )} ) )}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

**채우기 패턴을 사용한 중첩 영역**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// overlaid area with fill patternsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Area Style( "Overlaid" ) ) ),	Local Data Filter( Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) ) ),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				40,				Properties( 0, {Fill Pattern( "grid dots" )} ),				Properties( 1, {Fill Pattern( "right slant medium" )} ),				Properties( 2, {Fill Pattern( "left slant medium" )} )			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

### 항목 메시지

#### Area Style

**구문:** obj &lt;&lt; Area Style( "누적됨"|"내포됨"|"범위"|"누적 범위" )

#### Connection

**구문:** obj &lt;&lt; Connection( "선"|"화살표"|"곡선"|"단계"|"중심화 단계"|"가로"|"세로" )

#### Error Interval

**구문:** obj &lt;&lt; Error Interval( "자동"|"없음"|"범위"|"사분위수 범위"|"표준 오차"|"표준편차"|"신뢰 구간"|"중앙 절대 편차"|"사용자 구간"|"양방향 구간" )

#### Interval Style

**구문:** obj &lt;&lt; Interval Style( "오차 막대"|"대역"|"해시 대역"|"화살표" )

#### Missing Factors

**구문:** obj &lt;&lt; Missing Factors( "건너뛰기"|"결측으로 처리"|"0으로 처리" )

**설명:** 결측 요인 수준을 포함하는 연결을 보여 주는 방법

**JMP추가된 버전:** 15

#### Missing Values

**구문:** obj &lt;&lt; Missing Values( "통과하여 연결"|"흐린선 연결"|"파선 연결"|"연결 없음" )

**설명:** 결측값을 포함하는 연결을 보여 주는 방법

#### Ordering

**구문:** obj &lt;&lt; Ordering( "자동"|"행 순서"|"요약"|"행 내" )

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Row order

**구문:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**구문:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**구문:** obj &lt;&lt; Smoothness( number )

#### Stack Negative

**구문:** obj &lt;&lt; Stack Negative( "중첩"|"음수 분리"|"0으로 처리" )

**설명:** 쌓을 때 음수 데이터 값이 처리되는 방식을 제어합니다.

**JMP추가된 버전:** 17

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

## 공유 항목 메시지

### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

#### 이름으로 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### 익명 사전 설정

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### 폴더 내에서 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Data Table Window;

```

### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Timing;Show( t );

```

### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**구문:** obj &lt;&lt; Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**구문:** obj &lt;&lt; Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Relaunch Analysis;

```

### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**구문:** obj &lt;&lt; Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Script Window;

```

### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**구문:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**구문:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 연결된 생성자

### Graph Builder

**구문:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**설명:** 데이터 탐색에 사용할 수 있는 대화식 그래픽 인터페이스를 제공합니다. 열을 그래프 영역으로 드래그하여 산점도, 등고선 그림, 막대 차트, 영역 차트, 상자 그림, 히스토그램, 히트맵, 파이 차트, 트리맵, 모자이크 그림, 맵 등 다양한 그래프를 생성할 수 있습니다.

#### 100% 누적 막대 차트

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements( Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) ) ),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### Coplot 스타일 격자형 그룹화

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### Napoleon 행군 흐름도

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Overlay( :Group ), Color( :Direction ), Size( :Army Size ) ),	Elements( Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) ) ),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox, {Set Text( "Napoleon's March to Moscow" )} ),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### y 축이 정렬되지 않은 패널

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables( X( :"Transform[Year]"n ), Y( :Population ), Page( :Region, Levels per Row( 3 ) ) ),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest", "Mountain", "New England",				"NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### 곡선이 중첩된 버블 차트

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox, {Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )} )	));

```

#### '기준' 변수를 사용한 개별 차트

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### 다중 x 축

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### 등고선 그림과 산점도 점

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour( X, Y, Legend( 9 ), Boundary( 0 ), Number of Levels( 7 ), Alpha( 5 ), Smoothness( 0.2 ) ),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### 막대 차트와 평활 추세선 조합

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox, {Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )} )	));

```

#### 변동성 차트

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points( X( 1 ), X( 2 ), Y, Legend( 3 ), Summary Statistic( "Mean" ), Error Interval( "Range" ) )	),	SendToReport( Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} ) ));

```

#### 사분위수가 포함된 바이올린 그림

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### 사용자 정의 대역 구간이 표시된 선

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements( Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ), Line( X, Y( 1 ), Legend( 6 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Level Name( 0, "IQR" ), Properties( 0, {Transparency( 0.33 )} ) )}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### 선형 회귀 패널

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter( Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) ) ));

```

#### 웨이퍼 맵

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} ) )}		)	));

```

#### 이항 비율 신뢰 구간

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements( Points( X, Y, Legend( 3 ) ), Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) ) ),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox, {Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )} )	));

```

#### 점과 평활기

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### 점이 중첩된 연결 선 차트

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements( Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ), Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) ) ),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ), Minor Ticks( 0 ),			Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### 좌우 y 축

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### 주변 상자 그림이 있는 산점도

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )} )	));

```

#### 중첩된 경험적 누적 분포 함수 곡선

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n ) /			Col Number( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Culmen Length ), Y( :"Rank[Culmen Length]@Overlay"n ), Overlay( :Species ) ),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### 중첩된 이변량 커널 밀도 등고선

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements( Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) ) ));

```

#### 지중해 등면적 단계 구분도

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ), Max( 64.9684846475565 ),			Inc( 20 ), Minor Ticks( 1 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ), Max( 61.3932495299748 ),			Inc( 10 ), Minor Ticks( 1 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### 축 요약 테이블

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

#### 평행 y 축, 선 중첩

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables( X( :Time ), Y( :Temp ), Y( :NH3 Feed ), Y( :Air ), Y( :Tank Level ), Y( :pH ) ),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### 화살표 선, 행당 하나씩

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line( X( 1 ), X( 2 ), Y( 1 ), Y( 2 ), Legend( 8 ), Ordering( "Within Row" ), Connection( "Arrow" ) )	));

```

## 항목 메시지

### Add Element

**구문:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**설명:** 지정된 X 및 Y 위치에 새 그래프 요소를 추가합니다. 요소 규격에는 요소 이름이 포함됩니다. 요소 이름은 데이터 역할이 해당 옵션 값에 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**구문:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**설명:** 지정된 역할 및 위치를 사용하여 그래프 빌더 모형에 새 변수를 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**구문:** obj &lt;&lt; Auto Stretching( state=0|1 )

**설명:** 포함 창을 사용하여 그래프 자동 늘리기 설정/해제 간에 전환합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Auto Stretching( 0 );

```

### Back Color

**구문:** obj &lt;&lt; Back Color( color )

**설명:** 그래프 주변의 전체 배경에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**구문:** obj &lt;&lt; Categorical Color Theme

**설명:** 범주에 사용되는 색상 테마를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**구문:** obj &lt;&lt; Continuous Color Theme

**설명:** 그래디언트에 사용되는 색상 테마를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Continuous Color Theme( "White to Black" );

```

### Done

**구문:** obj &lt;&lt; Done

**설명:** 제어판을 숨기고 모든 행 표집을 끕니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Done;

```

### Elements

**구문:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() )) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시각화 요소를 식별합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) ));

```

### Error Bar Offset

**구문:** obj &lt;&lt; Error Bar Offset

**설명:** 오차 막대의 오프셋을 설정하기 위한 대화상자를 엽니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**구문:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**설명:** 0을 포함하도록 축 척도를 확장하는 데 사용할 승수입니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Extend Axis to Zero( 10 ),	Variables( X( :Weight ), Y( :Height ) ),	Elements( Line( X, Y ) ));

```

### Extend Dual Axes to Zero

**구문:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**설명:** 왼쪽 축과 오른쪽 축이 모두 있을 때 0을 포함하도록 축 척도를 확장하는 데 사용할 승수입니다. 기본값은 "2"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 513, 465 ),	Extend Dual Axes to Zero( 10 ),	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) ));

```

### Extend Parallel Y Axes to Zero

**구문:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**설명:** &apos;평행 Y 축&apos; 모드에서 0을 포함하도록 축 척도를 확장하는 데 사용할 승수입니다. 기본값은 "3"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Extend Parallel Y Axes to Zero( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Line( X, Y ) ),	Elements( Position( 1, 2 ), Line( X, Y ) ));

```

### Fit to Window

**구문:** obj &lt;&lt; Fit to Window( "자동"|"켜짐"|"해제"|"화면비율 유지" )

**설명:** 보고서 자동 늘이기 동작을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Fit to Window( "Off" );

```

### Get Element

**구문:** obj &lt;&lt; Get Element( xposition, yposition, i )

**설명:** 지정된 x 및 y 위치에 대해 지정된 그래프 요소를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Element( 1, 1, 1 );

```

### Get Elements

**구문:** obj &lt;&lt; Get Elements( xposition, yposition )

**설명:** 지정된 x 및 y 위치에 대해 지정된 요소 목록을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Elements( 1, 1 );

```

### Get Legend Display

**구문:** obj &lt;&lt; Get Legend Display

**설명:** 쿼리하거나 수정할 수 있는 그래프에 대한 범례 표시 상자를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Visible( 0 );

```

### Get Legend Server

**구문:** obj &lt;&lt; Get Legend Server

**설명:** 그래프의 범례 표시 및 해당 표시 세그먼트에 사용되는 정보가 포함된 개체를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Server;items = lgnd << Get Legend Items;Show( items );

```

### Get N Elements

**구문:** obj &lt;&lt; Get N Elements( xposition, yposition )

**설명:** 지정된 x 및 y 위치에 대한 그래프 요소 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Elements( 1, 1 );

```

### Get N Positions

**구문:** nrole

**설명:** 제공된 역할에 대해 사용 중인 위치 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Positions( "X" );

```

### Get N Variables

**구문:** n = obj &lt;&lt; Get N Variables

**설명:** 사용 중인 변수 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Variables();

```

### Get Variable

**구문:** obj &lt;&lt; Get Variable( index )

**설명:** 변수 규격을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variable( 1 );

```

### Get Variables

**구문:** list = obj &lt;&lt; Get Variables

**설명:** 사용 중인 변수에 대한 변수 지정 목록의 목록을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variables();

```

### Graph Spacing

**구문:** obj &lt;&lt; Graph Spacing( gap=1 )

**설명:** 그래프 패널 사이의 간격 크기를 설정합니다. 기본값은 "1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Add Variable( {:age, Role( "Wrap" )} );gb << Graph Spacing( 3 );

```

### Grid Color

**구문:** obj &lt;&lt; Grid Color( color )

**설명:** 그래프의 격자선에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Color( "Red" );

```

### Grid Transparency

**구문:** obj &lt;&lt; Grid Transparency( fraction=1 )

**설명:** 격자선의 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**구문:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**설명:** 결측값을 범주형 변수에 대한 별도의 수준으로 처리합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));:age[{10, 20, 30}] = .;gb << Add Variable( {:age, Role( "Wrap" )} );gb << Include Missing Categories( 1 );

```

### Launch Analysis

**구문:** obj &lt;&lt; Launch Analysis

**설명:** 현재 변수를 사용하여 분석을 시작합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Launch Analysis;

```

### Legend Floating Offset

**구문:** obj &lt;&lt; Legend Floating Offset

**설명:** 범례 위치가 "부동"으로 설정된 경우 범례의 오프셋(픽셀)을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Inside Floating" );

```

### Legend Position

**구문:** obj &lt;&lt; Legend Position( "오른쪽"|"아래쪽"|"내부 왼쪽"|"내부 오른쪽"|"내부 왼쪽 아래"|"내부 오른쪽 아래"|"내부 부동" )

**설명:** 범례 위치를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Bottom" );

```

### Legend Settings

**구문:** obj &lt;&lt; Legend Settings

**설명:** 범례 특성을 수정하는 대화상자를 엽니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Legend Settings();

```

### Level Fill Color

**구문:** obj &lt;&lt; Level Fill Color( color )

**설명:** 그래프의 수준 이름에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**구문:** obj &lt;&lt; Level Frame Color( color )

**설명:** 그래프 수준 이름 주변의 선에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**구문:** obj &lt;&lt; Level Spacing Color( color )

**설명:** 수준 라벨 사이 간격의 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**구문:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**설명:** 수준 라벨 사이 간격의 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**구문:** obj &lt;&lt; Level Text Color( color )

**설명:** 그래프의 수준 이름 텍스트에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Text Color( "Red" );

```

### Level Transparency

**구문:** obj &lt;&lt; Level Transparency( fraction=1 )

**설명:** 그래프의 수준 이름 프레임에 대한 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Transparency( .2 );

```

### Level Underline

**구문:** obj &lt;&lt; Level Underline( state=0|1 )

**설명:** 그래프의 수준 이름에 밑줄을 적용하거나 밑줄을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );gb << Level Underline( 1 );

```

### Lighten large fills

**구문:** obj &lt;&lt; Lighten large fills( state=0|1 )

**설명:** 큰 영역을 채우는 파이, 트리맵 및 모자이크 요소의 색상을 자동으로 연하게 합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lighten large fills( 1 );

```

### Link Page Axes

**구문:** obj &lt;&lt; Link Page Axes( "없음"|"X만"|"Y만"|"X 및 Y" )

**설명:** 페이지 그룹 수준 전반에 걸쳐 연결되는 축을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**구문:** obj &lt;&lt; Lock Scales( state=0|1 )

**설명:** 축 및 그래디언트 범위를 잠가 데이터 또는 필터링의 변화에 따라 변경되지 않도록 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lock Scales( 1 );

```

### Make into Data Table

**구문:** obj &lt;&lt; Make into Data Table

**설명:** 그래프 이미지를 포함하는 새 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Make into Data Table;

```

### Order Statistic

**구문:** obj &lt;&lt; Order Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수"="평균" )

**설명:** 그래프의 변수에 대해 Order By 메시지를 사용할 경우 사용되는 요약 통계량을 기반으로 기본 순서를 설정합니다. 기본값은 "평균"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Order Statistic( "Max" ),	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),	Elements( Box Plot( X, Y ) ));

```

### Overlay Auto Line Styles Limit

**구문:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**설명:** 색상 변수가 있는 경우 중첩 인코딩에 자동 설정의 선 스타일을 사용할 중첩 수준 수를 제한합니다. 기본값은 "6"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Line Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Line( X, Y ) ));

```

### Overlay Auto Marker Styles Limit

**구문:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**설명:** 색상 변수가 있는 경우 중첩 인코딩에 자동 설정의 표식 스타일을 사용할 중첩 수준 수를 제한합니다. 기본값은 "62"입니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Marker Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Points( X, Y ) ));

```

### Page Count Limit

**구문:** obj &lt;&lt; Page Count Limit( count=200 )

**설명:** 의도치 않은 성능 저하를 방지하기 위해 페이지 변수에 대해 생성되는 페이지의 최대 개수를 설정합니다. 기본값은 "200"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Name ) ), Elements( Points( X, Y ) ) );gb << Page Count Limit( 5 );

```

### Page Gap Size

**구문:** obj &lt;&lt; Page Gap Size( gap=25 )

**설명:** 페이지 그룹 사이의 간격 크기를 설정합니다. 기본값은 "25"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**구문:** obj &lt;&lt; Page Level Fill Color( color )

**설명:** 그래프의 수준 이름에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**구문:** obj &lt;&lt; Page Level Frame Color( color )

**설명:** 그래프 수준 이름 주변의 선에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**구문:** obj &lt;&lt; Page Level Text Color( color )

**설명:** 그래프의 수준 이름 텍스트에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**구문:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**설명:** 그래프의 수준 이름 프레임에 대한 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );gb << Page Level Transparency( .2 );

```

### Page Level Underline

**구문:** obj &lt;&lt; Page Level Underline( state=0|1 )

**설명:** 그래프의 수준 이름에 밑줄을 적용하거나 밑줄을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );gb << Page Level Frame Color( "Blue" );gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**구문:** obj &lt;&lt; Parallel Axis Merging( "항상"|"유사성 낮음"|"유사성 중간"|"유사성 높음"|"안 함" )

**설명:** 자동 척도 결합 설정에 평행 독립 대신 평행 병합을 선택해야 하는 시기를 결정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**구문:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**설명:** 모든 Y 축이 같은 그래프를 공유합니다. 평행 좌표와 비슷하지만 X 변수를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Y Axes( 1 );

```

### Random Seed

**구문:** obj &lt;&lt; Random Seed( number )

**설명:** 랜덤 지터에 대해 특정 시드값을 설정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ) ),	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) ));Wait( 1 );gb << Random Seed( 123456 );

```

### Relative Sizes

**구문:** Relative Sizes(axis, matrix of relative size values)

**설명:** 연속된 여러 축에 각각 할당되는 공간 비율을 결정합니다.

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Graph Builder(	Size( 435, 352 ),	Show Control Panel( 0 ),	Variables( X( :weight ), Y( :height ), Y( :sex ) ),	Relative Sizes( "Y", [4 1] ),	Elements( Position( 1, 1 ), Points( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ) ));

```

### Remove Element

**구문:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**설명:** 지정된 X 및 Y 위치에 있는 그래프 요소를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**구문:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**설명:** 그래프 빌더 모형에서 인덱스 또는 지정된 열 이름, 역할 및 위치로 지정된 변수를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );Wait( 0.5 );gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**구문:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**설명:** 격자의 연결된 페이지 축을 각 그래프에 대해 한 번씩 표시할지 아니면 그래프의 각 행 또는 열에 대해 한 번씩 표시할지를 결정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "X and Y" );gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**구문:** obj &lt;&lt; Sampling( number )

**설명:** 지정된 비율 또는 개수를 사용하여 데이터의 부분집합을 무작위로 선택합니다. 데이터가 크고 그래프가 계속 변경될 때 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Sampling( 20 );

```

### Set Alpha Level

**구문:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**설명:** 신뢰 곡선에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Set α Level

**구문:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**설명:** 신뢰 곡선에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**구문:** obj &lt;&lt; Show Control Panel( state=0|1 )

**설명:** 제어판을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**구문:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**설명:** 제외된 행을 그림에 표시하거나 숨깁니다. 이 옵션을 선택하면 제외된 행이 관리이탈 점 개수에 포함되지만 수치 계산에서는 제외됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));dt << Select Rows( 1 :: 5 );dt << Exclude();gb << Show Excluded Rows( 1 );

```

### Show Footer

**구문:** obj &lt;&lt; Show Footer( state=0|1 )

**설명:** 바닥글 텍스트를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Footer( 0 );

```

### Show Legend

**구문:** obj &lt;&lt; Show Legend( state=0|1 )

**설명:** 그래프 오른쪽에 범례를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Legend( 1 );

```

### Show Subtitle

**구문:** obj &lt;&lt; Show Subtitle( state=0|1 )

**설명:** 그래프 부제목을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Subtitle( 1 );

```

### Show Title

**구문:** obj &lt;&lt; Show Title( state=0|1 )

**설명:** 그래프 제목을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Title( 0 );

```

### Show X Axis

**구문:** obj &lt;&lt; Show X Axis( state=0|1 )

**설명:** X 축을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis( 0 );

```

### Show X Axis Title

**구문:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**설명:** X 축 제목을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis Title( 0 );

```

### Show Y Axis

**구문:** obj &lt;&lt; Show Y Axis( state=0|1 )

**설명:** Y 축을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**구문:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**설명:** Y 축 제목을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis Title( 0 );

```

### Size

**구문:** obj &lt;&lt; Size( width, height )

**설명:** 그래프 크기를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Size( 808, 586 );

```

### Spacing Borders

**구문:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**설명:** 내부 그래프 패널의 테두리를 설정합니다. 기본값은 "0"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**구문:** obj &lt;&lt; Subtitle Alignment( "왼쪽"|"가운데"|"오른쪽"|"자동" )

**설명:** 그래프 부제목의 맞춤을 설정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**구문:** obj &lt;&lt; Subtitle Span( "전체"|"그래프 내용" )

**설명:** 그래프 부제목의 범위를 설정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**구문:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**설명:** 그래프의 다양한 요소에 사용되는 기본 요약 통계량을 설정합니다. 막대 및 선 요소의 경우 기본값은 평균입니다. 기본값은 "평균"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),	Summary Statistic( "Sum" ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) ));

```

### Title Alignment

**구문:** obj &lt;&lt; Title Alignment( "왼쪽"|"가운데"|"오른쪽" )

**설명:** 그래프 제목의 맞춤을 설정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Alignment( "Left" );

```

### Title Fill Color

**구문:** obj &lt;&lt; Title Fill Color( color )

**설명:** 그래프의 제목 배경 채우기에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**구문:** obj &lt;&lt; Title Frame Color( color )

**설명:** 그래프 제목 프레임 주변의 선에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );

```

### Title Span

**구문:** obj &lt;&lt; Title Span( "전체"|"그래프 내용" )

**설명:** 그래프 제목의 범위를 설정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Span( "Graph" );

```

### Title Text Color

**구문:** obj &lt;&lt; Title Text Color( color )

**설명:** 그래프의 제목 텍스트에 대한 색상을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Text Color( "Red" );

```

### Title Transparency

**구문:** obj &lt;&lt; Title Transparency( fraction=1 )

**설명:** 그래프의 제목 프레임에 대한 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Transparency( .2 );

```

### Title Underline

**구문:** obj &lt;&lt; Title Underline( state=0|1 )

**설명:** 그래프의 제목에 밑줄을 적용하거나 밑줄을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );gb << Title Underline( 1 );

```

### Update Element

**구문:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**설명:** 기존 요소의 특성을 수정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**구문:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**설명:** 각 수준마다 고유 색상이 있는 경우 범례 수준을 행 색상으로 초기화합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Use row colors for levels( 1 );

```

### Variables

**구문:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시각화에 사용되는 변수를 정의합니다.

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**구문:** obj &lt;&lt; X Group Edge( "위쪽"|"아래쪽" )

**설명:** X 그룹에 대한 축을 위쪽 또는 아래쪽으로 이동합니다. 기본값은 "Top"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**구문:** obj &lt;&lt; Y Group Edge( "왼쪽"|"오른쪽" )

**설명:** Y 그룹에 대한 축을 왼쪽 또는 오른쪽으로 이동합니다. 기본값은 "Right"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**구문:** obj &lt;&lt; Y Group Level Orientation( "수평"|"수직" )

**설명:** Y 그룹 수준 라벨 텍스트가 가로 방향인지 아니면 세로 방향인지(회전됨)를 결정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**구문:** obj &lt;&lt; Y Group Title Orientation( "수평"|"수직" )

**설명:** Y 그룹 제목 라벨 텍스트가 가로 방향인지 아니면 세로 방향인지(회전됨)를 결정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Title Orientation( "Horizontal" );

```

## Bar Element

### 연결된 생성자

#### Bar Element

**구문:** Bar Element

**설명:** 범주별로 요약된 반응을 표시합니다.

**100% 누적 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements( Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) ) ),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

**3개의 변수와 사용자 색상을 사용한 누적 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, stacked, 3 y variables, meanGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ), Y( :HDL, Position( 1 ) ), Y( :LDL, Position( 1 ) ) ),	Elements(		Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Bar Style( "Stacked" ), Summary Statistic( "Mean" ), Legend( 5 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**Likert 척도를 사용하여 양쪽으로 갈라지는 누적 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Likert Survey.jmp" );// diverging stacked bars, likert scaleGraph Builder(	Transform Column( "neg sd", Formula( -:strongly disagree ) ),	Transform Column( "neg d", Formula( -:disagree ) ),	Transform Column( "neg n", Formula( -:neutral / 2 ) ),	Transform Column( "pos n", Formula( :neutral / 2 ) ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :neg n ),		X( :neg d, Position( 1 ) ),		X( :neg sd, Position( 1 ) ),		X( :pos n, Position( 1 ) ),		X( :agree, Position( 1 ) ),		X( :strongly agree, Position( 1 ) ),		Y( :question )	),	Elements( Bar( X( 1 ), X( 2 ), X( 3 ), X( 4 ), X( 5 ), X( 6 ), Y, Legend( 4 ), Bar Style( "Stacked" ) ) ),	SendToReport(		Dispatch( {}, "neg n", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "question", ScaleBox, {Min( 19.6 ), Max( -0.6 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Level Name( 0, "neutral" ),				Level Name( 1, "disagree" ),				Level Name( 2, "strongly disagree" ),				Level Name( 3, "neutral" ),				Properties( 0, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 1, {Fill Color( RGB Color( {1.0, 0.7, 0.7} ) )} ),				Properties( 2, {Fill Color( RGB Color( {1.0, 0.3, 0.3} ) )} ),				Properties( 3, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 4, {Fill Color( RGB Color( {0.8, 0.8, 1.0} ) )} ),				Properties( 5, {Fill Color( RGB Color( {0.5, 0.5, 1.0} ) )} )			)}		)	),	Dispatch( {}, "400", LegendBox, {Legend Position( {4, [2, 1, 0, -1, 3, 4]} )} ));

```

**값 라벨이 표시된 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, label by valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Label( "Label by Value" ), Label Format( "Fixed Dec", 9, 1 ) ) ));

```

**값 순서로 정렬된 가변 너비 막대 차트**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// variable width bars, ordered by valueGraph Builder(	Show Control Panel( 0 ),	Variables(		X(			:State,			Order By( :"2004 Verbal"n, "Descending", Order Statistic( "Mean" ) ),			Size By( :"% Taking (2004)"n, Size Statistic( "Mean" ) )		),		Y( :"2004 Verbal"n )	),	Elements( Bar( X, Y, Legend( 4 ) ) ));

```

**값이 작은 막대를 '기타'로 누적한 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );// stacked other bar, packed bars, paretoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Count ), Y( :Causes ) ),	Elements(		Bar(			X,			Y,			Bar Style( "Packed" ),			Packed Placement( "Separate stack" ),			Packed Primary Labels( "On axis" )		)	));

```

**개수로 정렬된 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bar chart, ordered by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline, Order By( :Airline, "Descending", Order Statistic( "N" ) ) ) ),	Elements( Bar( X, Legend( 4 ) ) ));

```

**데이터 기반 막대 색상 지정**

```jsl

Open( "$SAMPLE_DATA/Dogs.jmp" );// data-driven bar coloring, diverging barsGraph Builder(	Transform Column(		"hilo",		Nominal,		Formula( If( :diff == Col Minimum( :diff ), "min", :diff == Col Maximum( :diff ), "max", "other" ) )	),	Show Control Panel( 0 ),	Variables( X( :ID ), Y( :diff ), Color( :hilo ) ),	Elements( Bar( X, Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "diff", ScaleBox, {Add Ref Line( 0, "Solid", "Black", "", 1, 0.75 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.5, 0.5, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.95, 0.6, 0.6 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.7, 0.7, 0.7 ) )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" ), Legend Position( {3, [0, 1, -1]} )} )	));

```

**막대 및 화살표 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// arrow and bar chart Graph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Arrow" ) ), Bar( X, Y( 1 ) ) ));

```

**바늘 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// needle bar chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Bar Style( "Needle" ), Summary Statistic( "Max" ) ) ));

```

**범위 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// range bar chart between two variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Range" ) ) ),);

```

**변환을 사용한 구간 및 점 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// interval bar chart, transform columnsGraph Builder(	Transform Column( "Maximum[HDL][Sex]", Formula( Col Maximum( :HDL, :Sex ) ) ),	Transform Column( "Minimum[HDL][Sex]", Formula( Col Minimum( :HDL, :Sex ) ) ),	Transform Column( "Mean[HDL][Sex]", Formula( Col Mean( :HDL, :Sex ) ) ),	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :"Minimum[HDL][Sex]"n ),		Y( :"Maximum[HDL][Sex]"n, Position( 1 ) ),		Y( :"Mean[HDL][Sex]"n, Position( 1 ) ),	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Bar Style( "Interval" ) ) ));

```

**불릿 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, bullet, 2 y variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Bullet" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox, {Legend Model( 1, Properties( 1, {Fill Color( "light gray" )} ) )} )	));

```

**상위 10개 범주를 강조한 묶음 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Billion Dollar Events.jmp" );// packed bar chart, top 10, custom axis format, subtitleGraph Builder(	Size( 813, 512 ),	Show Control Panel( 0 ),	Show Legend( 0 ),	Title Alignment( "Left" ),	Title Span( "Graph contents" ),	Subtitle Alignment( "Left" ),	Subtitle Span( "Graph contents" ),	Show Subtitle( 1 ),	Show Footer( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Cost ), Y( :Unique Event ) ),	Elements( Bar( X, Y, Bar Style( "Packed" ), Packed Primaries( 10 ), Packed Labeling( 0.4091 ) ) ),	SendToReport(		Dispatch( {}, "Cost", ScaleBox,			{Format(				"Custom",				Formula(					If( value == 0,						"0",						"$" || Format( value, "precision", Keep trailing zeroes( 0 ), 3 ) || "B"					)				),				17			), Min( 0 ), Max( 164.25 ), Inc( 20 ), Minor Ticks( 0 )}		),		Dispatch( {}, "graph title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "Billion-dollar disasters in the US, 1980-2017" ), Set Font Style( "Plain" )}		),		Dispatch( {}, "graph 1 title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "CPI-adjusted estimated costs from NOAA, www.ncdc.noaa.gov/billions/" )}		)	));

```

**선이 중첩된 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar with floating lines, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ), Y( :HDL, Position( 1 ) ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Legend( 5 ), Bar Style( "Single" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "light gray" )} ),				Properties( 1, {Line Color( "green" )} ),				Properties( 2, {Line Color( "orange" )} )			)}		)	));

```

**신뢰 구간이 포함된 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// bar chart with confidence intervalsGraph Builder(	Size( 658, 555 ),	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements( Bar( X, Y, Legend( 6 ), Error Interval( "Confidence Interval" ) ) ));

```

**점이 중첩된 부동 선 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// float lines and overlaid pointsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :LDL ), Y( :HDL, Position( 1 ) ) ),	Elements(		Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Float" ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 3 ) )	));

```

**정렬된 누적 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Cabinet Defects.jmp" );// bar chart, sorted stacked, filtered, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Lot Number ), Overlay( :Type of Defect ) ),	Elements( Bar( X, Legend( 3 ), Bar Style( "Sorted stacked" ) ) ),	Local Data Filter(		Add Filter(			columns( :Lot Number, :Type of Defect ),			Where( :Lot Number <= 10.5 ),			Where(				:Type of Defect == {"Bruised veneer", "Checked veneer", "Chipped veneer", "Defective sanding",				"Loose veneer", "Sand throughs", "Scratched veneer", "Split veneer"}			),			Display( :Type of Defect, N Items( 9 ) )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.55, 0.83, 0.78 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.75, 0.73, 0.85 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.98, 0.50, 0.45 ) )} ),				Properties( 3, {Fill Color( RGB Color( 0.50, 0.69, 0.83 ) )} ),				Properties( 4, {Fill Color( RGB Color( 0.99, 0.71, 0.38 ) )} ),				Properties( 5, {Fill Color( RGB Color( 0.70, 0.87, 0.41 ) )} ),				Properties( 6, {Fill Color( RGB Color( 0.99, 0.80, 0.90 ) )} ),				Properties( 7, {Fill Color( RGB Color( 0.74, 0.50, 0.74 ) )} )			)}		)	));

```

**중앙값을 사용한 병렬 그룹 막대 차트**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, side-by-side, 3 y variables, median, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ), Y( :HDL, Position( 1 ) ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Summary Statistic( "Median" ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

### 항목 메시지

#### Bar Style

**구문:** obj &lt;&lt; Bar Style( "나란히"|"누적됨"|"정렬된 누적"|"불릿"|"내포"|"범위"|"범위 나란히"|"구간"|"구간 나란히"|"양방향 구간"|"화살표"|"단일"|"주식"|"상자 그림"|"바늘"|"부동"|"트리맵"|"묶음" )

#### Error Interval

**구문:** obj &lt;&lt; Error Interval( "자동"|"없음"|"범위"|"사분위수 범위"|"표준 오차"|"표준편차"|"신뢰 구간"|"중앙 절대 편차"|"사용자 구간"|"양방향 구간" )

#### Interval Style

**구문:** obj &lt;&lt; Interval Style( "오차 막대"|"대역"|"해시 대역"|"화살표" )

#### Label

**구문:** obj &lt;&lt; Label( "라벨 없음"|"값별 라벨"|"총계 백분율별 라벨"|"행별 라벨" )

#### Label Format

**구문:** obj &lt;&lt; Label Format

**JMP추가된 버전:** 16

#### Overlap

**구문:** obj &lt;&lt; Overlap( "자동"|"없음"|"절반"|"전체" )

**JMP추가된 버전:** 16

#### Packed Coloring

**구문:** obj &lt;&lt; Packed Coloring( "막대 색상"|"막대 색상 흐리게"|"회색" )

**JMP추가된 버전:** 14

#### Packed Labeling

**구문:** obj &lt;&lt; Packed Labeling( number )

**JMP추가된 버전:** 14

#### Packed Ordering

**구문:** obj &lt;&lt; Packed Ordering( "크기별"|"라벨별" )

**JMP추가된 버전:** 14

#### Packed Placement

**구문:** obj &lt;&lt; Packed Placement( "별도 누적 막대"|"가장 작은 누적 막대"|"첫 번째 누적 막대" )

**JMP추가된 버전:** 14

#### Packed Primaries

**구문:** obj &lt;&lt; Packed Primaries( number )

**JMP추가된 버전:** 14

#### Packed Primary Labels

**구문:** obj &lt;&lt; Packed Primary Labels( "축"|"막대 내측" )

**JMP추가된 버전:** 14

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Save Summary Formula

**구문:** obj &lt;&lt; Save Summary Formula

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

## Box Plot Element

### 연결된 생성자

#### Box Plot Element

**구문:** Box Plot Element

**설명:** 사분위수 및 이상치를 사용하여 변수 분포의 요약 보기를 표시합니다.

**데이터 기반 색상으로 채워진 상자 그림**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// solid box plots, colored by summary of a different variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Flipper Length ) ),	Elements( Box Plot( X, Y, Legend( 2 ), Box Style( "Solid" ), Fences( 0 ) ) ));

```

**수평 이상치 상자 그림**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// horizontal outlier box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Box Plot( X, Y, Legend( 4 ) ) ),	SendToReport( Dispatch( {}, "height", ScaleBox, {Min( 50 )} ) ));

```

**중첩 상자 그림**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// box plots, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Overlay( :Sex ) ),	Elements( Box Plot( X, Y, Legend( 2 ) ) ));

```

### 항목 메시지

#### 5 Number Summary

**구문:** obj &lt;&lt; 5 Number Summary( state=0|1 )

**JMP추가된 버전:** 14

#### Box Placement

**구문:** obj &lt;&lt; Box Placement( "오프셋"|"맞춤" )

**JMP추가된 버전:** 16

#### Box Style

**구문:** obj &lt;&lt; Box Style( "보통"|"채움"|"줄임" )

#### Box Type

**구문:** obj &lt;&lt; Box Type( "분위수"|"이상치" )

#### Confidence Diamond

**구문:** obj &lt;&lt; Confidence Diamond( state=0|1 )

**JMP추가된 버전:** 16

#### Fences

**구문:** obj &lt;&lt; Fences( state=0|1 )

**JMP추가된 버전:** 16

#### Jitter

**구문:** obj &lt;&lt; Jitter( "없음"|"자동"|"랜덤 균등"|"랜덤 정규"|"랜덤 밀도"|"묶음"|"격자"|"육각형 격자"|"벌떼 배열" )

#### Notched

**구문:** obj &lt;&lt; Notched( state=0|1 )

**JMP추가된 버전:** 16

#### Outliers

**구문:** obj &lt;&lt; Outliers( state=0|1 )

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Shortest Half

**구문:** obj &lt;&lt; Shortest Half( state=0|1 )

**JMP추가된 버전:** 16

#### Shortest Half Color

**구문:** obj &lt;&lt; Shortest Half Color( color )

**JMP추가된 버전:** 16

#### Width Proportion

**구문:** obj &lt;&lt; Width Proportion( number=0 )

**설명:** 기본값은 "0"입니다.

**JMP추가된 버전:** 15

## Caption Element

### 연결된 생성자

#### Caption Element

**구문:** Caption Element

**설명:** 데이터에 대한 요약 통계량 값을 표시합니다.

**그래프별 캡션 요약 통계량**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption annotation per graphGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group X( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Line Of Fit( X, Y, Legend( 4 ) ),		Caption Box( X, Y, Legend( 5 ), Summary Statistic( "N" ), X Position( "Left" ) )	));

```

**데이터 기반 참조선**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption reference line, run chartGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :weight ) ),	Elements(		Caption Box(			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Location( "Axis Reference Line" ),			X Position( "Left" )		),		Line( Y, Legend( 6 ), Ordering( "Row Order" ) )	));

```

**요인별 두 개의 캡션 통계량**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption per factor, mean and count, custom number formatGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Graph per factor" ),			Number Format( "Best", 5 )		)	));

```

**축 테이블 요약 통계량**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

### 항목 메시지

#### Location

**구문:** obj &lt;&lt; Location( "그래프"|"요인별 그래프"|"축 테이블"|"축 참조선" )

#### Number Format

**구문:** obj &lt;&lt; Number Format

**JMP추가된 버전:** 16

#### Per Factor

**구문:** obj &lt;&lt; Per Factor( state=0|1 )

**JMP추가된 버전:** 14

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "없음"|"N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수"|"5가지 숫자 요약" )

#### Summary Statistic 2

**구문:** obj &lt;&lt; Summary Statistic 2( "없음"|"N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수"|"5가지 숫자 요약" )

#### Summary Statistic 3

**구문:** obj &lt;&lt; Summary Statistic 3( "없음"|"N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수"|"5가지 숫자 요약" )

#### Summary Statistic 4

**구문:** obj &lt;&lt; Summary Statistic 4( "없음"|"N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수"|"5가지 숫자 요약" )

#### Summary Statistic 5

**구문:** obj &lt;&lt; Summary Statistic 5( "없음"|"N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수"|"5가지 숫자 요약" )

#### X Position

**구문:** obj &lt;&lt; X Position( "왼쪽"|"가운데"|"오른쪽" )

#### Y Position

**구문:** obj &lt;&lt; Y Position( "위쪽"|"가운데"|"아래쪽" )

## Contour Element

### 연결된 생성자

#### Contour Element

**구문:** Contour Element

**설명:** 데이터 밀도의 영역(또는 색상 변수가 포함된 값 등고선)을 표시합니다. X가 범주형일 경우 바이올린 그림을 생성합니다.

**HDR, 최고 밀도 영역**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// HDR, highest denisty regions with mode lineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements( Contour( X, Y, Legend( 4 ), Smoothness( 0.113 ), Contour Type 1D( "HDR" ) ) ));

```

**등고선 평활화**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// contour plot, smooth contours, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Color( :Body Mass ) ),	Elements( Contour( X, Y, Legend( 7 ), Number of Levels( 5 ), Alpha( 0.1 ), Smoothness( 0.065 ) ) ));

```

**사분위수가 포함된 바이올린 그림**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

**얇은 상자 그림이 중첩된 바이올린 그림**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// violin plots overlaid with thin box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :type of space ), Y( :Y ) ),	Elements(		Contour( X, Y, Legend( 5 ), Violin Scaling( "Weighted Area" ) ),		Box Plot( X, Y, Legend( 6 ), Outliers( 0 ), Box Style( "Thin" ), Fences( 0 ) )	));

```

**이변량 커널 밀도 등고선**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Distance ), Y( :Arrival Delay ), Wrap( :Airline ) ),	Elements( Contour( X, Y, Legend( 6 ), Number of Levels( 6 ) ) ));

```

**중앙값 선과 평균 다이아몬드가 포함된 바이올린 그림**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and mean diamond markerGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar( X, Y, Legend( 4 ), Bar Style( "Float" ), Summary Statistic( "Median" ) ),		Points( X, Y, Legend( 5 ), Summary Statistic( "Mean" ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox, {Legend Model( 5, Properties( 0, {Marker( "Diamond" )} ) )} )	));

```

**지리적 등고선**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// contour, geographic, background map, clipped to shapes, sequential colors, hidden axesGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ) ),	Elements(		Contour( X, Y, Legend( 5 ), Boundary( 0 ), Number of Levels( 5 ), Alpha( 0.04 ), Smoothness( 0.02 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Properties( 0, {gradient( {Color Theme( "White to Red" )} )} ) )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 1 ), Reference Line Order( 4 ),			Reorder Segs( {1, 3} ), DispatchSeg(				Contour Seg( 1 ),				{Clip Shape( Boundaries( "US States" ) )}			)}		)	));

```

**패널형 등고선 히트맵**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// paneled contour heatmap, trellisGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Ratio ),		Y( :Agitation Speed ),		Group X( :Hydrolyze ),		Group Y( :"Pre-Soak"n ),		Color( :Solids )	),	Elements( Contour( X, Y, Legend( 28 ), Smoothness( 0.01 ) ) ));

```

### 항목 메시지

#### Adapt to Axis Scale

**구문:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**설명:** 로그 및 기타 축 변환의 경우 변환된 좌표에 계산을 적용합니다.

#### Alpha

**구문:** obj &lt;&lt; Alpha( number )

**설명:** 경계 셰이프를 제어합니다. 값이 0이면 점 집합에 대한 최소볼록집합이 생성됩니다. 알파 값이 크면 모서리가 긴 삼각형이 제거됩니다.

**JMP추가된 버전:** 15

#### Boundary

**구문:** obj &lt;&lt; Boundary( state=0|1 )

**설명:** 정의된 데이터 영역의 경계에 선을 그립니다. 이 경계는 알파 특성에 따라 볼록하지 않을 수도 있습니다.

**JMP추가된 버전:** 15

#### Contour Placement

**구문:** obj &lt;&lt; Contour Placement( "오프셋"|"맞춤" )

**JMP추가된 버전:** 16

#### Contour Type

**구문:** obj &lt;&lt; Contour Type( "바이올린"|"HDR" )

**JMP추가된 버전:** 15

#### Contour Type 1D

**구문:** obj &lt;&lt; Contour Type 1D( "바이올린"|"HDR" )

**JMP추가된 버전:** 15

#### Contour Type 2D

**구문:** obj &lt;&lt; Contour Type 2D( "비모수 밀도"|"가방 그림"|"HDR" )

**JMP추가된 버전:** 15

#### Fill

**구문:** obj &lt;&lt; Fill( state=0|1 )

**설명:** 그래디언트의 색상을 사용하여 등고선 사이의 영역을 채웁니다.

**JMP추가된 버전:** 15

#### Jitter

**구문:** obj &lt;&lt; Jitter( "없음"|"자동"|"랜덤 균등"|"랜덤 정규"|"랜덤 밀도"|"묶음"|"격자"|"육각형 격자"|"벌떼 배열" )

#### Line

**구문:** obj &lt;&lt; Line( state=0|1 )

**설명:** 각 등고선 수준에 그래디언트 색상 또는 별도의 선 색상으로 선을 그립니다.

**JMP추가된 버전:** 15

#### Number of Levels

**구문:** obj &lt;&lt; Number of Levels( number )

**설명:** 그리려는 채워진 등고선 영역의 개수를 설정합니다.

#### Outliers

**구문:** obj &lt;&lt; Outliers( state=0|1 )

#### Smoothness

**구문:** obj &lt;&lt; Smoothness( number )

**설명:** 기본 데이터와 등고선을 평활합니다.

**JMP추가된 버전:** 14

#### Transform

**구문:** obj &lt;&lt; Transform( "없음"|"정규 범위" )

**설명:** 필요할 경우 보간에 사용되는 삼각 분할을 계산하기 전에 점을 변환합니다.

#### Violin Scaling

**구문:** obj &lt;&lt; Violin Scaling( "동일 영역"|"동일 너비"|"가중 영역" )

**JMP추가된 버전:** 14

## Ellipse Element

### 연결된 생성자

#### Ellipse Element

**구문:** Ellipse Element

**설명:** 이변량 정규 밀도 타원을 표시합니다.

**상관계수가 포함된 밀도 타원**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Coverage( "50%" ), Correlation( 1 ), Mean Point( 1 ) )	));

```

**중심 평균 표식이 포함된 밀도 타원**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// density ellipse, correlation, central meanGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group Y( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Coverage( "95%" ), Mean Point( 1 ) ) ));

```

**중첩된 밀도 타원**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) ));

```

**패널 내 밀도 타원**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficient, panels, mean diamondGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Group X( :Species ), Group Y( :Sex ) ),	Elements( Points( X, Y, Legend( 8 ) ), Ellipse( X, Y, Legend( 10 ), Correlation( 1 ), Mean Point( 1 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {Marker( "Circle" ), Transparency( 0.5 )} ) ),			Legend Model( 10, Properties( 1, {Marker( "Filled Diamond" ), Marker Size( 6 )} ) )}		)	));

```

### 항목 메시지

#### Adapt to Axis Scale

**구문:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**설명:** 로그 및 기타 축 변환의 경우 변환된 좌표에 계산을 적용합니다.

#### Correlation

**구문:** obj &lt;&lt; Correlation( state=0|1 )

**설명:** X 및 Y 변수에 대한 상관계수입니다.

#### Coverage

**구문:** obj &lt;&lt; Coverage( "99%"|"95%"|"90%"|"50%" )

#### Mean Point

**구문:** obj &lt;&lt; Mean Point( state=0|1 )

**설명:** 타원의 평균 점을 표시합니다.

## Formula Element

### 연결된 생성자

#### Formula Element

**구문:** Formula Element

**설명:** 열 계산식으로 정의된 함수를 표시합니다.

**모수 방정식**

```jsl

New Table( "bowtie",	New Column( "t", Set Values( [0, 10] ) ),	New Column( "x", Formula( Cos( :t ) ) ),	New Column( "y", Formula( Sine( :t * 2 ) ) ));// function plot, parametric equationsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :x ), Y( :y ) ),	Elements( Formula( X, Y, Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "x", ScaleBox, {Min( -1.1 ), Max( 1.1 )} ),		Dispatch( {}, "y", ScaleBox, {Min( -1.4 ), Max( 1.4 )} )	));

```

**모형 비교**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// function plot, non-linear functions piecewise linear, piecewise quadraticLocal( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear( Y( :yield ), X( :linear ), "Newton", Finish );	obj << Save Prediction Formula;	obj << Close Window;);Local( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear( Y( :yield ), X( :quad ), "QuasiNewton SR1", Finish );	obj << Save Prediction Formula;	obj << Close Window;);Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :nitrate ),		Y( :yield ),		Y( :Fitted linear, Position( 1 ) ),		Y( :Fitted quad, Position( 1 ) )	),	Elements( Points( X, Y( 1 ), Legend( 8 ) ), Formula( X, Y( 2 ), Y( 3 ), Legend( 9 ) ) ));

```

### 항목 메시지

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

## Heatmap Element

### 연결된 생성자

#### Heatmap Element

**구문:** Heatmap Element

**설명:** X 및 Y 범주에 대한 색상을 사용하여 총계를 표시합니다.

**개수 육각형 히트맵**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// hexagonal heatmap, color by count, sequential color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ) ),	Elements( Heatmap( X, Y, Legend( 4 ), Bin Shape( "Hexagonal" ), Hex Bin Radius( 24.61 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Properties( 0, {gradient( {Color Theme( "White to Purple" )} )} ) )}		)	));

```

**데이터 기반 배경색**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// heat map as background colorGraph Builder(	Transform Column(		"Mean[Total Acres Planted][State]",		Formula( Col Mean( :Total Acres Planted, :State ) )	),	Transform Column(		"delta",		Formula(			(Col At( :Total Acres Planted, -1, :State ) - Col At( :Total Acres Planted, 1, :State )) /			Col Mean( :Total Acres Planted, :State )		)	),	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Total Acres Planted ),		Wrap( :State, Order By( :Total Acres Planted, "Descending", Order Statistic( "Mean" ) ) ),		Color( :delta )	),	Elements(		Heatmap( Legend( 16 ) ),		Points( X, Y, Color( 0 ), Legend( 14 ) ),		Smoother( X, Y, Color( 0 ), Legend( 15 ) )	),	Local Data Filter(		Add Filter(			columns( :"Mean[Total Acres Planted][State]"n ),			Where( :"Mean[Total Acres Planted][State]"n >= 3245000 )		)	),	SendToReport(		Dispatch( {}, "Total Acres Planted", ScaleBox, {Format( "Engineering SI", 13 ), Minor Ticks( 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				16,				Properties(					0,					{gradient( {Scale Values( [-0.3 0 0.3] ), Label Format( "Percent", 12, 0 )} )}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {16, [2], 14, [0], 15, [1]} )} )	));

```

**라벨 표시된 히트맵**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// labeled heatmap, treating continuous variables as categorical with transformGraph Builder(	Transform Column( "Ordinal Agitation Speed", Ordinal, Formula( :Agitation Speed ) ),	Transform Column( "Ordinal Ratio", Ordinal, Formula( :Ratio ) ),	Show Control Panel( 0 ),	Variables( X( :Ordinal Agitation Speed ), Y( :Ordinal Ratio ), Color( :Solids ) ),	Elements( Heatmap( X, Y, Legend( 29 ), Label( "Label by Value" ) ) ));

```

**범주형 색상을 사용한 히트맵**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// heat map, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Color( :Species ) ),	Elements( Heatmap( X, Y, Legend( 4 ) ) ));

```

**사용자 그래디언트가 적용된 범주형 히트맵**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// heat map, custom gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Day of Week ), Y( :Month ), Color( :Arrival Delay ) ),	Elements( Heatmap( X, Y, Legend( 17 ) ) ),	Local Data Filter( Add Filter( columns( :Distance ), Where( :Distance >= 500 & :Distance <= 1500 ) ) ),	SendToReport(		Dispatch( {}, "Month", ScaleBox, {Reversed Scale} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				17,				Properties(					0,					{gradient(						{Color Theme(							{"Blue to Gray to Red Copy", {"Continuous", "Categorical", "Diverging"}, {{42, 63,							255}, {166, 170, 203}, {192, 192, 192}, {201, 165, 165}, {252, 11, 11},							Missing( "Black" )}, {0, 0.33, 0.5, 0.67, 1}, {"Full Color", "Tritanopia"}}						), Scale Values( [. 0 .] )}					)}				)			)}		)	));

```

**웨이퍼 맵**

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} ) )}		)	));

```

### 항목 메시지

#### Bin Shape

**구문:** obj &lt;&lt; Bin Shape( "직사각형"|"육각형" )

**JMP추가된 버전:** 16

#### Cell Outline

**구문:** obj &lt;&lt; Cell Outline( state=0|1 )

**설명:** 글꼴 크기의 최대 증가분을 정의합니다.

**JMP추가된 버전:** 16

#### Hex Bin Radius

**구문:** obj &lt;&lt; Hex Bin Radius( number )

**JMP추가된 버전:** 16

#### Label

**구문:** obj &lt;&lt; Label( "라벨 없음"|"값별 라벨"|"총계 백분율별 라벨"|"행별 라벨" )

**JMP추가된 버전:** 14

#### Label Format

**구문:** obj &lt;&lt; Label Format

**JMP추가된 버전:** 16

#### Max Label Size

**구문:** obj &lt;&lt; Max Label Size( number )

## Histogram Element

### 연결된 생성자

#### Histogram Element

**구문:** Histogram Element

**설명:** 계급화를 사용하여 변수 분포를 표시합니다.

**개수 축이 있는 히스토그램**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// histogram, countGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Distance ), Wrap( :Airline, Show Title( 0 ) ) ),	Elements( Histogram( X, Legend( 9 ) ) ),	SendToReport(		Dispatch( {}, "Distance", ScaleBox, {Min( -6 ), Max( 2900 ), Inc( 1000 ), Minor Ticks( 1 )} ),		Dispatch( {}, "", ScaleBox, {Format( "Engineering SI", 12 ), Inc( 2000 )} ),		Dispatch( {}, "graph title", TextEditBox, {Set Text( "Flight Distance by Airline" )} )	));

```

**능선 그림**

```jsl

Open( "$SAMPLE_DATA/NYC 311 Records.jmp" );// ridgeline plot, overlapping kernel density estimate areas, KDEGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Time ), Y( :Day of Week ) ),	Elements(		Histogram(			X,			Y,			Legend( 3 ),			Response Scale( "Percent" ),			Overlap( 4.8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.1 )		)	),	SendToReport(		Dispatch( {}, "Time", ScaleBox, {Min( -2316 ), Max( 88403 ), Minor Ticks( 3 )} ),		Dispatch( {}, "Day of Week", ScaleBox, {Max( 4.45 )} )	));

```

**요인 수준별 히스토그램**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// histograms by levelGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Histogram( X, Y, Legend( 8 ) ) ));

```

**중첩 히스토그램, 백분율 라벨**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid histograms, percent labelsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Overlay( :sex ) ),	Elements( Histogram( X, Legend( 8 ), Smoothness( -0.0833 ), Percents( 1 ) ) ));

```

**평활 커널 밀도 영역**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// kernel density estimate KDE area chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Histogram( X, Y, Legend( 8 ), Histogram Style( "Kernel Density" ), Smoothness( -0.08 ) ) ));

```

### 항목 메시지

#### Confid Percent

**구문:** obj &lt;&lt; Confid Percent( number=. )

**설명:** 퍼센트로 포함 범위가 주어졌을 때, 평균에 대한 신뢰 구간입니다. 기본값은 "."입니다.

**JMP추가된 버전:** 14

#### Counts

**구문:** obj &lt;&lt; Counts( state=0|1 )

**JMP추가된 버전:** 15

#### Histogram Style

**구문:** obj &lt;&lt; Histogram Style( "막대"|"다각형"|"커널 밀도"|"섀도그램" )

**JMP추가된 버전:** 15

#### Horizontal

**구문:** obj &lt;&lt; Horizontal( state=0|1 )

#### Means and Std Devs

**구문:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**JMP추가된 버전:** 14

#### Overlap

**구문:** obj &lt;&lt; Overlap( number )

**JMP추가된 버전:** 15

#### Percents

**구문:** obj &lt;&lt; Percents( state=0|1 )

**JMP추가된 버전:** 15

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Response Scale

**구문:** obj &lt;&lt; Response Scale( "개수"|"백분율"|"채우기" )

**JMP추가된 버전:** 15

#### Smoothness

**구문:** obj &lt;&lt; Smoothness( number )

**설명:** 대역폭은 밀도 곡선의 평활 정도를 제어합니다. 대역폭을 줄이면 곡선이 덜 평활해지고 스파이크가 많아집니다. 대역폭을 늘리면 곡선이 평활해지지만 일부 상세 정보가 불분명해질 수 있습니다.

**JMP추가된 버전:** 15

#### Vertical

**구문:** obj &lt;&lt; Vertical( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

#### t Test for Mean At

**구문:** obj &lt;&lt; t Test for Mean At( number=. )

**설명:** 평균이 지정된 값인지 검정합니다. 기본값은 "."입니다.

**JMP추가된 버전:** 14

## Line Element

### 연결된 생성자

#### Line Element

**구문:** Line Element

**설명:** 범주별로 요약된 반응을 표시합니다.

**라벨 표시된 선**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// overlaid line chart, labels in graphGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Day of Week ), Y( :Arrival Delay ), Overlay( :Airline ) ),	Elements( Line( X, Y, Legend( 11 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				11,				Type Properties( "H Line", {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 0, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 2, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 3, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 4, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 5, {Line Label Properties( {Name Label( 1 )} )} )			)}		)	));

```

**런 차트, 행 순서 기준**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Run chart, line chart by row, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :Ozone Concentration ) ),	Elements( Line( Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Min( 0 ), Max( 220 ), Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}		),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**범프 차트, 순위 연결**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Bump chart, line chart of ranking, smooth connections, transform columnGraph Builder(	Transform Column(		"Rank",		Formula(			(Col Number( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )			-Col Rank( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )) + 1		)	),	Show Control Panel( 0 ),	Variables( X( :Year ), Y( :Rank ), Overlay( :State ) ),	Elements( Line( X, Y, Legend( 4 ), Connection( "Curve" ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"Midwest", "Mountain", "New England", "Northeast", "Pacific", "Plains", "South",				"Southwest"}			)		)	),	SendToReport( Dispatch( {}, "Rank", ScaleBox, {Reversed Scale} ) ));

```

**사건 기간**

```jsl

Open( "$SAMPLE_DATA/Nic Adverse Events.jmp" );// event spans, start and stop times, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Study Day of Start of Adverse Event ),		X( :Study Day of End of Adverse Event, Position( 1 ) ),		Y( :Unique Subject Identifier ),		Color( :"Severity/Intensity"n )	),	Elements( Line( X( 1 ), X( 2 ), Y, Legend( 4 ), Ordering( "Within Row" ) ) ),	Local Data Filter(		Add Filter(			columns( :"Dictionary-Derived Term"n, :Action Taken with Study Treatment ),			Where( :"Dictionary-Derived Term"n == "Hypertension" ),			Where( :Action Taken with Study Treatment == "DRUG WITHDRAWN" )		)	),	SendToReport(		Dispatch( {}, "Unique Subject Identifier", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {Line Color( RGB Color( 0.31, 0.61, 1 ) ), Line Width( 4 )} ),				Properties( 1, {Line Color( RGB Color( 0.69, 0.65, 0.01 ) ), Line Width( 4 )} ),				Properties( 2, {Line Color( RGB Color( 0.79, 0.09, 0.16 ) ), Line Width( 4 )} )			)}		)	));

```

**스파게티 그림**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Spaghetti plot, line chart, smooth connections, mean line, transform columnGraph Builder(	Transform Column( "Year", Nominal, Formula( Year( :date ) ) ),	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ), Overlay( :Year ) ),	Elements(		Line( X, Y, Legend( 8 ), Connection( "Curve" ) ),		Line( X, Y, Overlay( 0 ), Legend( 9 ), Connection( "Curve" ), Smoothness( 0.6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 1, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 2, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 3, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 4, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 5, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 6, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 7, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 8, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 9, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 10, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 11, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 12, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 13, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 14, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 15, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 16, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 17, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 18, {Line Color( "gray" ), Transparency( 0.5 )} )			), Legend Model( 9, Properties( 0, {Line Color( "black" ), Line Width( 4 )} ) )}		)	));

```

**연결된 산점도**

```jsl

New Table( "prey and predator",	Add Rows( 48 ),	New Column( "Month", Formula( Row() ) ),	New Column( "Rabbits", Formula( 10 * Cos( :Month * 0.35 ) + Random Normal( 50, 1.5 ) ) ),	New Column( "Foxes", Formula( 8 * Cos( :Month * 0.35 + 1 ) + Random Normal( 30, 1 ) ) ),);// connected scatter plot, smooth line connections, row orderGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Foxes ), Y( :Rabbits ), Color( :Month ) ),	Elements(		Line( X, Y, Legend( 5 ), Ordering( "Row Order" ), Connection( "Curve" ) ),		Points( X, Y, Color( 0 ), Legend( 6 ) )	));

```

**오차 대역이 표시된 선 차트**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// line chart, error bandGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements( Line( X, Y, Legend( 4 ), Error Interval( "Confidence Interval" ), Interval Style( "Band" ) ) ));

```

**이동 평균 선 차트**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother( X, Y, Color( 0 ), Legend( 12 ), Method( "Moving Average" ) )	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 12, Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} ) )}		)	));

```

**추적 이동 평균 선 차트**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// trailing moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Color( 0 ),			Legend( 12 ),			Method( "Moving Average" ),			Local Region( "Trailing" ),			Local Width( 6 ),			Trim( 0.6435 )		)	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 12, Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} ) )}		)	));

```

**화살표 선, 행당 하나씩**

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line( X( 1 ), X( 2 ), Y( 1 ), Y( 2 ), Legend( 8 ), Ordering( "Within Row" ), Connection( "Arrow" ) )	));

```

**화살표 연결선**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// arrow chart, multiple x and y variables, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"1992 Verbal"n ),		X( :"1999 Verbal"n, Position( 1 ) ),		X( :"2004 Verbal"n, Position( 1 ) ),		Y( :"1992 Math"n ),		Y( :"1999 Math"n, Position( 1 ) ),		Y( :"2004 Math"n, Position( 1 ) ),		Overlay( :State )	),	Elements(		Line(			X( 1 ),			X( 2 ),			X( 3 ),			Y( 1 ),			Y( 2 ),			Y( 3 ),			Legend( 7 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	),	Local Data Filter(		Add Filter( columns( :"% Taking (2004)"n ), Where( :"% Taking (2004)"n >= 0.57788 ) )	),	SendToReport(		Dispatch( {}, "1992 Verbal & 2 more", TextEditBox, {Set Text( "Verbal" )} ),		Dispatch( {}, "1992 Math & 2 more", TextEditBox, {Set Text( "Math" )} )	));

```

### 항목 메시지

#### Connection

**구문:** obj &lt;&lt; Connection( "선"|"화살표"|"곡선"|"단계"|"중심화 단계"|"가로"|"세로" )

#### Error Interval

**구문:** obj &lt;&lt; Error Interval( "자동"|"없음"|"범위"|"사분위수 범위"|"표준 오차"|"표준편차"|"신뢰 구간"|"중앙 절대 편차"|"사용자 구간"|"양방향 구간" )

#### Fill

**구문:** obj &lt;&lt; Fill( "없음"|"아래에 채우기"|"간격 채우기" )

**JMP추가된 버전:** 15

#### Interval Style

**구문:** obj &lt;&lt; Interval Style( "오차 막대"|"대역"|"해시 대역"|"화살표" )

#### Missing Factors

**구문:** obj &lt;&lt; Missing Factors( "건너뛰기"|"결측으로 처리"|"0으로 처리" )

**설명:** 결측 요인 수준을 포함하는 연결을 보여 주는 방법

**JMP추가된 버전:** 15

#### Missing Values

**구문:** obj &lt;&lt; Missing Values( "통과하여 연결"|"흐린선 연결"|"파선 연결"|"연결 없음" )

**설명:** 결측값을 포함하는 연결을 보여 주는 방법

#### Ordering

**구문:** obj &lt;&lt; Ordering( "자동"|"행 순서"|"요약"|"행 내" )

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Row order

**구문:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**구문:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**구문:** obj &lt;&lt; Smoothness( number )

#### Stack

**구문:** obj &lt;&lt; Stack( state=0|1 )

**JMP추가된 버전:** 15

#### Stack Negative

**구문:** obj &lt;&lt; Stack Negative( "중첩"|"음수 분리"|"0으로 처리" )

**설명:** 쌓을 때 음수 데이터 값이 처리되는 방식을 제어합니다.

**JMP추가된 버전:** 17

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

## Line of Fit Element

### 연결된 생성자

#### Line of Fit Element

**구문:** Line of Fit Element

**설명:** 연속 X 및 Y에 대한 신뢰 구간과 함께 선형 회귀를 표시합니다. 범주형 X에 대해 평균을 적합시킵니다.

**2차 적합**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// linear regression, overlaid curves, quadraticGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Overlay( :Species ) ),	Elements( Points( X, Y, Legend( 9 ) ), Line Of Fit( X, Y, Legend( 10 ), Degree( "Quadratic" ) ) ));

```

**시계열 회귀**

```jsl

Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );// time series regression, periodicGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Date ), Y( :Sales ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 5 ), Fit( "Time Series" ), Seasonal Period( 12 ) )	));

```

**일원 ANOVA 적합, 평균 비교**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// ANOVA fit, oneway, means comparison, confidence interval, F test p-valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements(		Points( X, Y, Legend( 1 ) ),		Line Of Fit( X, Y, Legend( 2 ), Unequal Variances( 1 ), F Test( 1 ) )	));

```

**중첩 선형 회귀**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// linear regression, overlaid with confidence intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Line Of Fit( X, Y, Legend( 4 ) ) ));

```

### 항목 메시지

#### Adapt to Axis Scale

**구문:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**설명:** 로그 및 기타 축 변환의 경우 변환된 좌표에 계산을 적용합니다.

#### Confidence of Fit

**구문:** obj &lt;&lt; Confidence of Fit( state=0|1 )

#### Confidence of Prediction

**구문:** obj &lt;&lt; Confidence of Prediction( state=0|1 )

#### Constrain Parameters

**구문:** obj &lt;&lt; Constrain Parameters( state=0|1 )

**설명:** ETS 파라미터를 제한합니다.

**JMP추가된 버전:** 17

#### Degree

**구문:** obj &lt;&lt; Degree( "선형"|"2차"|"3차" )

#### Equation

**구문:** obj &lt;&lt; Equation( state=0|1 )

**설명:** 적합된 식

#### F Test

**구문:** obj &lt;&lt; F Test( state=0|1 )

**설명:** 전체 모형 검정에 대한 유의 수준

**JMP추가된 버전:** 14

#### Fit

**구문:** obj &lt;&lt; Fit( "다항식"|"로버스트 Cauchy"|"시계열" )

**JMP추가된 버전:** 15

#### Forecast Model

**구문:** obj &lt;&lt; Forecast Model( state=0|1 )

**설명:** 예측에 사용되는 모형을 모수 추정값과 함께 표시합니다.

**JMP추가된 버전:** 15

#### Forecast Periods

**구문:** obj &lt;&lt; Forecast Periods( number )

**설명:** 미리 예측할 기간의 개수입니다.

**JMP추가된 버전:** 15

#### Means and Std Devs

**구문:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**설명:** 각 그룹의 평균 및 표준편차를 평균 선 옆에 표시합니다.

**JMP추가된 버전:** 14

#### Prediction

**구문:** obj &lt;&lt; Prediction( state=0|1 )

**설명:** 개별 예측값에 대한 신뢰 영역입니다.

#### RMSE

**구문:** obj &lt;&lt; RMSE( state=0|1 )

**설명:** 반응 단위의 오차 측도인 제곱근 평균 제곱 오차입니다.

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Root Mean Square Error

**구문:** obj &lt;&lt; Root Mean Square Error( state=0|1 )

#### R²

**구문:** obj &lt;&lt; R²( state=0|1 )

**설명:** 적합의 데이터 예측 능력에 대한 측도인 결정 계수입니다.

#### Save Formula

**구문:** obj &lt;&lt; Save Formula

#### Seasonal Period

**구문:** obj &lt;&lt; Seasonal Period( number )

**설명:** 계절의 기간 수입니다. 예를 들어 월별 데이터의 경우 연간 계절에는 12개의 기간이 있습니다.

**JMP추가된 버전:** 15

#### Unequal Variances

**구문:** obj &lt;&lt; Unequal Variances( state=0|1 )

**설명:** 그룹마다 분산이 다르다고 가정하고 검정 및 신뢰 한계를 계산할지 여부를 결정합니다.

## Mosaic Element

### 연결된 생성자

#### Mosaic Element

**구문:** Mosaic Element

**설명:** X 및 Y 범주에 대한 크기를 사용하여 총계를 표시합니다.

**가로 모자이크**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// horizontal mosaic, axis label line wrappingGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Clutch Completion ), Y( :Species ) ),	Elements( Mosaic( X, Y, Legend( 5 ), Response Axis( "X" ) ) ));

```

**모자이크 차트**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// mosaic, marimekkoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :sex ) ),	Elements( Mosaic( X, Y, Legend( 4 ) ) ));

```

### 항목 메시지

#### Cell Labeling

**구문:** obj &lt;&lt; Cell Labeling( "라벨 없음"|"개수별 라벨"|"백분율별 라벨"|"값별 라벨"|"행별 라벨" )

**JMP추가된 버전:** 14

#### Chi-square Test

**구문:** obj &lt;&lt; Chi-square Test( state=0|1 )

**설명:** 반응률이 그룹마다 동일한지 또는 두 개의 반응이 독립적인지 검정하는 카이제곱 검정입니다.

**JMP추가된 버전:** 14

#### Confid Percent

**구문:** obj &lt;&lt; Confid Percent( number=. )

**설명:** 상위 수준의 비율에 대한 신뢰 구간 포함 범위(퍼센트)입니다. 기본값은 "."입니다.

**JMP추가된 버전:** 14

#### Horizontal

**구문:** obj &lt;&lt; Horizontal( state=0|1 )

#### Label Format

**구문:** obj &lt;&lt; Label Format

**JMP추가된 버전:** 16

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Test Proportion At

**구문:** obj &lt;&lt; Test Proportion At( number=. )

**설명:** 상위 수준의 비율이 지정된 값과 동일한지 검정합니다. 기본값은 "."입니다.

**JMP추가된 버전:** 14

#### Vertical

**구문:** obj &lt;&lt; Vertical( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

## Parallel Element

### 연결된 생성자

#### Parallel Element

**구문:** Parallel Element

**설명:** 각 행에 대해 연결선과 함께 병렬 축을 따라 여러 변수를 표시합니다.

**Sankey 평행 집합**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// parallel sets, sankey, categorical parallel coordinatesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender?, Combine( "Parallel Independent" ) ),		X( :"What is your favorite color? (select one)"n, Position( 1 ), Combine( "Parallel Independent" ) ),		X( :What is your favorite color?, Position( 1 ), Combine( "Parallel Independent" ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), Legend( 15 ) ) ),	SendToReport(		Dispatch( {}, "What is your gender?", ScaleBox,			{Label Row(				{Tick Mark( Label( "What is your favorite color?" ), Label( "Specific favorite color" ) ),				Tick Mark(					Label( "What is your favorite color? (select one)" ),					Label( "General favorite color" )				), Tick Mark( Label( "What is your gender?" ), Label( "Gender" ) )}			)}		)	));

```

**평행 상자 그림**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - box plotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) )	),	Elements( Box Plot( X( 1 ), X( 2 ), X( 3 ), X( 4 ), X( 5 ), X( 6 ), X( 7 ), X( 8 ), X( 9 ), X( 11 ) ) ));

```

**평행 점 그림**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - dotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Points(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**평행 좌표 그림**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Elements(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**평행 좌표(공유 척도)**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - aligned scaleGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"Trig-3yrs"n, Combine( "Parallel Merged" ) ),		X( :"Chol-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"HDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"LDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 8 ) ) ));

```

**평행 집합**

```jsl

Open( "$SAMPLE_DATA/Titanic Passengers.jmp" );// parallel setsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Survived ),		X( :Passenger Class, Position( 1 ) ),		X( :Sex, Position( 1 ) ),		X( :Age, Position( 1 ) ),		Color( :Survived )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg( ParallelAxisSeg( 1 ), Reversed( Passenger Class, Sex ) )}		)	));

```

### 항목 메시지

#### Axes Labels

**구문:** obj &lt;&lt; Axes Labels( state=0|1 )

#### Combine Sets

**구문:** obj &lt;&lt; Combine Sets( state=0|1 )

#### Smoothness

**구문:** obj &lt;&lt; Smoothness( number )

**JMP추가된 버전:** 16

## Pie Element

### 연결된 생성자

#### Pie Element

**구문:** Pie Element

**설명:** 전체의 부분을 표시합니다.

**개수 기준 도넛 차트**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// donut chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ), Pie Style( "Ring" ) ) ));

```

**개수 기준 파이 차트**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// pie chart by countGraph Builder( Show Control Panel( 0 ), Variables( X( :age ) ), Elements( Pie( X, Legend( 6 ) ) ) );

```

**파이 패널**

```jsl

Open( "$SAMPLE_DATA/Smartphone OS.jmp" );// pie panelGraph Builder(	Transform Column( "Market Share freq", Formula( Round( :Market Share * 1000 ) ) ),	Show Control Panel( 0 ),	Show Footer( 0 ),	Variables( X( :Operating System ), Wrap( :Year ), Frequency( :Market Share freq ) ),	Elements( Pie( X, Legend( 6 ) ) ),	SendToReport( Dispatch( {}, "graph title", TextEditBox, {Set Text( "SmartPhone OS Market Share" )} ) ));

```

### 항목 메시지

#### Label

**구문:** obj &lt;&lt; Label( "라벨 없음"|"값별 라벨"|"총계 백분율별 라벨"|"행별 라벨" )

#### Label Format

**구문:** obj &lt;&lt; Label Format

**JMP추가된 버전:** 16

#### Pie Style

**구문:** obj &lt;&lt; Pie Style( "파이"|"고리"|"칵스콤" )

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

## Points Element

### 연결된 생성자

#### Points Element

**구문:** Points Element

**설명:** 데이터 값의 산점도를 표시합니다.

**밀도 점 그림**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// density dot plot, beeswarmGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Privacy ), Y( :Female ) ),	Elements(		Points( X, Y, Legend( 3 ), Jitter( "Hex Grid" ), Jitter Side( "Positive" ), Jitter Smooth( 1 ) )	),	SendToReport(		Dispatch( {}, "Female", ScaleBox, {Min( 0 ), Max( 1.99 ), Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox, {Legend Model( 3, Properties( 0, {Marker( "FilledCircle" )} ) )} )	));

```

**변동성 차트**

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points( X( 1 ), X( 2 ), Y, Legend( 3 ), Summary Statistic( "Mean" ), Error Interval( "Range" ) )	),	SendToReport( Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} ) ));

```

**산점도 행렬**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot matrix with main diagonal histogramsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Length ),		X( :Culmen Depth ),		X( :Flipper Length ),		X( :Body Mass ),		Y( :Culmen Length ),		Y( :Culmen Depth ),		Y( :Flipper Length ),		Y( :Body Mass ),		Overlay( :Species )	),	Elements( Position( 1, 1 ), Histogram( X, Y, Legend( 87 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 57 ) ), Smoother( X, Y, Legend( 58 ) ) ),	Elements( Position( 1, 3 ), Points( X, Y, Legend( 59 ) ), Smoother( X, Y, Legend( 60 ) ) ),	Elements( Position( 1, 4 ), Points( X, Y, Legend( 61 ) ), Smoother( X, Y, Legend( 62 ) ) ),	Elements( Position( 2, 1 ), Points( X, Y, Legend( 63 ) ), Smoother( X, Y, Legend( 64 ) ) ),	Elements( Position( 2, 2 ), Histogram( X, Y, Legend( 88 ) ) ),	Elements( Position( 2, 3 ), Points( X, Y, Legend( 67 ) ), Smoother( X, Y, Legend( 68 ) ) ),	Elements( Position( 2, 4 ), Points( X, Y, Legend( 69 ) ), Smoother( X, Y, Legend( 70 ) ) ),	Elements( Position( 3, 1 ), Points( X, Y, Legend( 71 ) ), Smoother( X, Y, Legend( 72 ) ) ),	Elements( Position( 3, 2 ), Points( X, Y, Legend( 73 ) ), Smoother( X, Y, Legend( 74 ) ) ),	Elements( Position( 3, 3 ), Histogram( X, Y, Legend( 89 ) ) ),	Elements( Position( 3, 4 ), Points( X, Y, Legend( 77 ) ), Smoother( X, Y, Legend( 78 ) ) ),	Elements( Position( 4, 1 ), Points( X, Y, Legend( 79 ) ), Smoother( X, Y, Legend( 80 ) ) ),	Elements( Position( 4, 2 ), Points( X, Y, Legend( 81 ) ), Smoother( X, Y, Legend( 82 ) ) ),	Elements( Position( 4, 3 ), Points( X, Y, Legend( 83 ) ), Smoother( X, Y, Legend( 84 ) ) ),	Elements( Position( 4, 4 ), Histogram( X, Y, Legend( 90 ) ) ));

```

**원형 묶음 지터**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// categorical 2D jitter, circle packing, color by responseGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Pre-Soak"n ), Y( :Hydrolyze ), Color( :Solids ) ),	Elements( Points( X, Y, Legend( 4 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox, {Legend Model( 4, Properties( 1, {Marker Size( 10 )} ) )} )	));

```

**위도와 경도**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// geographic scatter plot, background map, sized dotsGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ), Size( :POP ) ),	Elements( Points( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				2,				Properties( 0, {Marker Size( 8 )} ),				Properties( 1, {gradient( {Color Theme( "Muted Yellow to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox, {Background Map( Boundaries( "US States" ) )} )	));

```

**육각형 격자 점 그림**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center hexagonal grid dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter( "Hex Grid" ), Jitter Smooth( 1 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 10, Properties( 0, {Marker Size( 5 )} ), Properties( 1, {Marker Size( 5 )} ) )}		)	));

```

**육각형 마주 보는 점 그림**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// dot plot, hexagonal jitter from opposite side (ordinal), custom axis label formatGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Y ), Y( :type of space ) ),	Elements(		Points( X, Y, Legend( 9 ), Jitter( "Hex Grid" ), Jitter Side( "Ordinal" ), Jitter Smooth( 1 ) )	),	Local Data Filter(		Add Filter( columns( :type of space ), Where( :type of space == {"exterior", "interior"} ) )	),	SendToReport(		Dispatch( {}, "Y", ScaleBox, {Format( "Custom", Formula( Char( value ) || "°" ), 12, 0 )} ),		Dispatch( {}, "type of space", ScaleBox, {Min( 0 ), Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 9, Properties( 0, {Line Color( "Gray" ), Marker Size( 6 )} ) )}		),		Dispatch( {}, "Y", TextEditBox, {Set Text( "Temperature (Celcius))" )} )	));

```

**중심 정렬된 병렬 점 그림**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 10, Properties( 0, {Marker Size( 5 )} ), Properties( 1, {Marker Size( 5 )} ) )}		)	));

```

**크기와 색상을 사용한 산점도**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// bubble plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species, Show Title( 0 ) ),		Color( :Sex ),		Size( :Body Mass )	),	Elements( Points( X, Y, Legend( 20 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				20,				Properties( 1, {Marker( "Circle" ), Transparency( 0.5 )}, ),				Properties( 2, {Marker( "FilledCircle" ), Transparency( 0.5 )} )			)}		)	));

```

**평활 및 중심 정렬된 병렬 점 그림**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter Smooth( 0.5 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 10, Properties( 0, {Marker Size( 5 )} ), Properties( 1, {Marker Size( 5 )} ) )}		)	));

```

**평활화된 점 그림**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// smoothed dot plot, color by ordinalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Privacy ), Y( :Female ), Color( :Internet Use ) ),	Elements( Points( X, Y, Legend( 5 ), Jitter Smooth( 0.8 ) ) ),	SendToReport(		Dispatch( {}, "Privacy", ScaleBox, {Min( -2 ), Max( 2 ), Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Type Properties( 0, "Marker", {Marker Size( 5 )} ),				Properties( 0, {Line Color( RGB Color( 0.86, 0.52, 0.35 ) ), Marker Size( 5 )} ),				Properties( 1, {Line Color( RGB Color( 0.95, 0.79, 0.45 ) ), Marker Size( 5 )} ),				Properties( 2, {Line Color( RGB Color( 0.56, 0.02, 0.23 ) ), Marker Size( 5 )} ),				Properties( 3, {Line Color( RGB Color( 0.88, 0.9, 0.74 ) ), Marker Size( 5 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {5, [1, 2, 0, 3]} )} )	));

```

### 항목 메시지

#### Error Interval

**구문:** obj &lt;&lt; Error Interval( "자동"|"없음"|"범위"|"사분위수 범위"|"표준 오차"|"표준편차"|"신뢰 구간"|"중앙 절대 편차"|"사용자 구간"|"양방향 구간" )

#### Interval Style

**구문:** obj &lt;&lt; Interval Style( "오차 막대"|"대역"|"해시 대역"|"화살표" )

#### Jitter

**구문:** obj &lt;&lt; Jitter( "없음"|"자동"|"랜덤 균등"|"랜덤 정규"|"랜덤 밀도"|"묶음"|"격자"|"육각형 격자"|"벌떼 배열" )

#### Jitter Limit

**구문:** obj &lt;&lt; Jitter Limit( number )

**JMP추가된 버전:** 14

#### Jitter Overlap

**구문:** obj &lt;&lt; Jitter Overlap( number )

**JMP추가된 버전:** 19

#### Jitter Side

**구문:** obj &lt;&lt; Jitter Side( "중심화"|"양수"|"음수"|"순서형" )

#### Jitter Smooth

**구문:** obj &lt;&lt; Jitter Smooth( number )

**JMP추가된 버전:** 19

#### Label

**구문:** obj &lt;&lt; Label( "라벨 없음"|"값별 라벨"|"행별 라벨"|"행 및 값별 라벨" )

#### Label Format

**구문:** obj &lt;&lt; Label Format

**JMP추가된 버전:** 18

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Save Summary Formula

**구문:** obj &lt;&lt; Save Summary Formula

#### Set Shape Column

**구문:** obj &lt;&lt; Set Shape Column

**JMP추가된 버전:** 16

#### Set Shape Expression

**구문:** obj &lt;&lt; Set Shape Expression

**JMP추가된 버전:** 16

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "없음"|"N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

## Shapes Element

### 연결된 생성자

#### Map Shapes Element

**구문:** Map Shapes Element

**설명:** 일반적으로 색상 변수를 사용하여 맵 셰이프 변수로 정의된 영역을 표시합니다.

**그래디언트 색상이 적용된 사용자 셰이프 파일**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, color gradientGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Group X( :time of day ), Color( :fahrenheit ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**범주형 색상이 적용된 사용자 셰이프 파일**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, categorical colorGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Color( :sector ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**세계 지도 단계 구분도**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -175.3 ), Max( 175.3 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -82.6 ), Max( 82.6 ), Inc( 30 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

**아시아/태평양 중심 세계 지도**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid lines, Pacific centeringGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -23.27 ), Max( 327.33 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -87.55 ), Max( 87.55 ), Inc( 30 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

**지중해 등면적 단계 구분도**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ), Max( 64.9684846475565 ),			Inc( 20 ), Minor Ticks( 1 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ), Max( 61.3932495299748 ),			Inc( 10 ), Minor Ticks( 1 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

### 항목 메시지

#### Aspect Ratio

**구문:** obj &lt;&lt; Aspect Ratio( number )

**설명:** X:Y 척도 비율에 대한 조정 요인입니다.

#### Show Missing Shapes

**구문:** obj &lt;&lt; Show Missing Shapes( state=0|1 )

**JMP추가된 버전:** 16

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

## Smoother Element

### 연결된 생성자

#### Smoother Element

**구문:** Smoother Element

**설명:** 데이터를 통과하는 평활 곡선을 표시합니다. 알 수 없는 관계를 가진 연속형 X 및 Y에 가장 적합합니다.

**단조 평활기 추세선**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// monotonic smooth trend line, p-spline, constraintGraph Builder(	Show Control Panel( 0 ),	Include Missing Continuous Values( 0 ),	Variables( X( :Culmen Length ), Y( :Culmen Depth ), Overlay( :Species ) ),	Elements(		Points( X, Y ),		Smoother( X, Y, Method( "P-Spline" ), Lambda( 0.3 ), Shape Constraint( "Non-descending" ) )	));

```

**로그 x 축의 단조**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );// monotonic spline smoother, log x axis, overlaid, legend in graph cornerGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Concentration ), Y( :Toxicity ), Overlay( :Formulation ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother( X, Y, Legend( 12 ), Method( "P-Spline" ), Shape Constraint( "Non-descending" ) )	),	SendToReport( Dispatch( {}, "Concentration", ScaleBox, {Scale( "Log" ), Minor Ticks( 1 )} ) ));

```

**분할된 시계열 평활 추세선**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Time series, split trend curve, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :date ), Y( :Ozone Concentration ), Overlay( :Intervention for post 1960 period ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ), Lambda( 1.4 ) ) ),	SendToReport(		Dispatch( {}, "date", ScaleBox, {Minor Ticks( 4 )} ),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**산점도 위의 평활 추세선**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// smoothers and scatter plot, overlay, panels, trellis, trend curve, splineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ), Overlay( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y, Lambda( 0.2 ) ) ));

```

**순환 평활기**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// smoother, cycle, p-spline, bootstrap confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ) ),	Elements(		Points( X, Y, Legend( 5 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Shape Constraint( "Cycle" ),			Confidence of Fit( 1 )		)	));

```

**중첩 평활 추세 곡선**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// overlaid cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Days ), Y( :Algae density ), Overlay( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**패널형 중첩 평활 추세 곡선**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// smoothers paneled and filteredGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Year ), Y( :Commodity Acres Planted ), Group X( :State ), Overlay( :Commodity ) ),	Elements( Points( X, Y, Legend( 38 ) ), Smoother( X, Y, Legend( 39 ) ) ),	Local Data Filter( Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) ) ));

```

**패널형 평활 추세 곡선**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// paneled cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Days ), Y( :Algae density ), Wrap( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**평활 추세선과 신뢰 구간**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );// cubic spline smoother confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Concentration ), Y( :"Velocity (y)"n ) ),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ), Confidence of Fit( 1 ) ) ));

```

**평활기 비교: loess, 스플라인, p-스플라인**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// smoothers, loess, cubic spline, p-spline, monotonic, legend in bottom rightGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Variables( X( :nitrate ), Y( :yield ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother(			X,			Y,			Legend( 4 ),			Method( "Local Kernel" ),			Lambda( 0.5 ),			Local Width( 0.687 ),			Trim( 0 )		),		Smoother( X, Y, Legend( 5 ), Lambda( 0.4 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Lambda( 2.0 ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Level Name( 0, "Loess" ) ), Legend Model( 5, Level Name( 0, "Spline" ) ),			Legend Model( 6, Level Name( 0, "Monotonic p-spline" ) )}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [-1], 4, [0], 5, [1], 6, [2]} )}		)	));

```

### 항목 메시지

#### Adapt to Axis Scale

**구문:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**설명:** 로그 및 기타 축 변환의 경우 변환된 좌표에 계산을 적용합니다.

#### Confidence Bootstrap

**구문:** obj &lt;&lt; Confidence Bootstrap( number )

**JMP추가된 버전:** 14

#### Confidence of Fit

**구문:** obj &lt;&lt; Confidence of Fit( state=0|1 )

**설명:** 적합에 대한 붓스트랩 신뢰 영역입니다.

**JMP추가된 버전:** 14

#### Constrain Confidence Region

**구문:** obj &lt;&lt; Constrain Confidence Region( state=0|1 )

**설명:** 셰이프 제약 조건을 적합 영역 신뢰도를 계산하는 데 사용되는 붓스트랩 적합에도 적용할지 여부를 지정합니다.

**JMP추가된 버전:** 19

#### Degree

**구문:** obj &lt;&lt; Degree( "중앙값"|"평균"|"선형"|"2차"|"3차" )

**JMP추가된 버전:** 16

#### Lambda

**구문:** obj &lt;&lt; Lambda( number )

#### Local Constraint

**구문:** obj &lt;&lt; Local Constraint( state=0|1 )

**설명:** 곡선을 주변 값 범위 내로 제한합니다.

**JMP추가된 버전:** 19

#### Local Region

**구문:** obj &lt;&lt; Local Region( "거듭제곱"|"비율"|"고정"|"후행" )

**JMP추가된 버전:** 16

#### Local Robustness

**구문:** obj &lt;&lt; Local Robustness( number )

**JMP추가된 버전:** 16

#### Local Weighting

**구문:** obj &lt;&lt; Local Weighting( "트라이큐브"|"코사인"|"Epanechnikov"|"가우시안"|"Cauchy"|"라플라스"|"삼각형"|"직사각형" )

**JMP추가된 버전:** 16

#### Local Width

**구문:** obj &lt;&lt; Local Width( number )

**JMP추가된 버전:** 16

#### Maximum Constraint

**구문:** obj &lt;&lt; Maximum Constraint( number )

#### Method

**구문:** obj &lt;&lt; Method( "스플라인"|"P-스플라인"|"로컬 커널"|"Savitzky-Golay"|"이동 평균"|"이동 상자" )

**JMP추가된 버전:** 15

#### Minimum Constraint

**구문:** obj &lt;&lt; Minimum Constraint( number )

#### Response Axis

**구문:** obj &lt;&lt; Response Axis( "자동"|"X"|"Y" )

#### Save Formula

**구문:** obj &lt;&lt; Save Formula

#### Scale lambda for count

**구문:** obj &lt;&lt; Scale lambda for count( state=0|1 )

**설명:** 데이터 크기를 고려하기 위해 스플라인 평활기 모수 람다를 조정합니다. 크기가 다른 그룹 간에 일관된 평활을 유지하는 데 유용합니다.

#### Shape Constraint

**구문:** obj &lt;&lt; Shape Constraint( "없음"|"하강 안 됨"|"상승 안 됨"|"정상점"|"계곡점"|"정상점과 계곡점"|"평면 시작"|"평면 끝"|"평면 시작/끝"|"순환" )

**JMP추가된 버전:** 19

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "없음"|"N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

#### Trim

**구문:** obj &lt;&lt; Trim( number )

**JMP추가된 버전:** 16

## Treemap Element

### 연결된 생성자

#### Treemap Element

**구문:** Treemap Element

**설명:** 많은 범주를 기준으로 요약된 반응을 표시합니다.

**연속형 색상 그래디언트**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// treemap, continuous color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline ), Color( :Arrival Delay ) ),	Elements( Treemap( X, Legend( 5 ), Summary Statistic( "N" ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Airline Flight Count colored by Average Delay" )}		)	));

```

**위치 정렬 힌트**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// treemap, positional ordering hintsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :State ),		Y( :Longitude ),		Y( :Latitude, Position( 1 ) ),		Color( :SAT Verbal ),		Size( :Population )	),	Elements( Treemap( X, Y( 1 ), Y( 2 ), Legend( 9 ) ) ));

```

**중첩 트리맵, 정사각형 분할**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// nested treemap, squarify, color value column propertyGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender? ),		X( :"What is your favorite color? (select one)"n, Position( 1 ) ),		X( :What is your favorite color?, Position( 1 ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements( Treemap( X( 1 ), X( 2 ), X( 3 ), Legend( 6 ), Layout( "Squarify" ), Group Labels( "Above" ) ) ));

```

### 항목 메시지

#### Category Name

**구문:** obj &lt;&lt; Category Name( state=0|1 )

**설명:** 범주의 열 이름을 범주 라벨의 일부로 표시합니다. 이 옵션은 범주 값도 표시되는 경우에만 사용됩니다.

#### Category Value

**구문:** obj &lt;&lt; Category Value( state=0|1 )

**설명:** 범주의 값을 범주 라벨의 일부로 표시합니다.

#### Color Label Format

**구문:** obj &lt;&lt; Color Label Format

**JMP추가된 버전:** 16

#### Color Name

**구문:** obj &lt;&lt; Color Name( state=0|1 )

**설명:** 색상 변수 이름을 색상 라벨의 일부로 표시합니다. 이 옵션은 색상 값도 표시되는 경우에만 사용됩니다.

**JMP추가된 버전:** 16

#### Color Value

**구문:** obj &lt;&lt; Color Value( state=0|1 )

**설명:** 색상 변수의 값을 범주 라벨의 일부로 표시합니다. 이 옵션은 색상 변수가 지정된 경우에만 사용됩니다.

#### Group Labels

**구문:** obj &lt;&lt; Group Labels( "없음"|"위"|"부동" )

**설명:** 그룹 라벨을 해제하거나, 그룹 라벨을 범주 위에 또는 부동 상자로 표시합니다.

#### Implicit Color

**구문:** obj &lt;&lt; Implicit Color( state=0|1 )

**설명:** 트리맵에 고유한 색상을 사용합니다. 이 옵션을 선택 취소하면 트리맵이 한 가지 단색으로 표시됩니다. 색상 변수가 지정된 경우에는 이 옵션이 비활성화됩니다. 기본적으로 설정되어 있습니다.

#### Label Justification

**구문:** obj &lt;&lt; Label Justification( "왼쪽"|"가운데"|"오른쪽" )

#### Label Threshold

**구문:** obj &lt;&lt; Label Threshold( number )

**설명:** 상자에 라벨을 표시할 최소 크기(영역)입니다.

#### Label Transparency

**구문:** obj &lt;&lt; Label Transparency( number )

**설명:** 그룹 라벨이 부동일 때 그룹 라벨의 투명도를 설정합니다. 올바른 값은 0.0에서 1.0 사이(경계값 포함)입니다.

**JMP추가된 버전:** 16

#### Layout

**구문:** obj &lt;&lt; Layout( "분할"|"정사각형"|"혼합" )

#### Max Label Size

**구문:** obj &lt;&lt; Max Label Size( number )

**설명:** 글꼴 크기의 최대 증가분을 정의합니다.

#### Orientation Bias

**구문:** obj &lt;&lt; Orientation Bias( number )

**설명:** 가로 영역 분할과 세로 영역 분할의 상대적 환경 설정을 지정합니다.

**JMP추가된 버전:** 17

#### Show Frames

**구문:** obj &lt;&lt; Show Frames( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

#### Show Group Name

**구문:** obj &lt;&lt; Show Group Name( state=0|1 )

**설명:** 그룹의 열 이름을 그룹 라벨의 일부로 표시합니다. 이 옵션은 그룹 라벨이 그룹 타일 위에 있을 경우에만 사용됩니다.

#### Size Label Format

**구문:** obj &lt;&lt; Size Label Format

**JMP추가된 버전:** 16

#### Size Name

**구문:** obj &lt;&lt; Size Name( state=0|1 )

**설명:** 크기 변수 이름을 크기 라벨의 일부로 표시합니다. 이 옵션은 크기 값도 표시되는 경우에만 사용됩니다.

**JMP추가된 버전:** 16

#### Size Value

**구문:** obj &lt;&lt; Size Value( state=0|1 )

**설명:** 크기 변수의 값을 범주 라벨의 일부로 표시합니다.

#### Summary Statistic

**구문:** obj &lt;&lt; Summary Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수" )

#### Tile Labels

**구문:** obj &lt;&lt; Tile Labels

