# Categorical



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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**구문:** obj = Categorical(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 연결된 생성자

### Categorical

**구문:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**설명:** 범주형 응답 데이터를 요약 및 분석합니다. 단순 응답, 다중 응답, 반복 측정, 평가자 합치도, 정렬된 응답 또는 프리 텍스트 데이터가 대상이 될 수 있습니다. 응답에 대한 사용자 교차표를 생성하는 기능도 포함되어 있습니다.

#### 개별 요인 안에 내포

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:Single Status * :Gender + :School Age Children * :Gender,		:I am working on my career + :I want to see the world	));

```

#### 내포 그룹을 사용한 다중 응답

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );Categorical( X( :clean, :date ), Multiple Response( :Failure1, :Failure2, :Failure3 ) );

```

#### 다중 응답(정형)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical( Structured( :Gender, :Brush Delimited + :Floss Delimited ) );

```

#### 두 개의 개별 요인에 대한 세 개의 응답(정형)

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		:I am working on my career + :I want to see the world, :Gender + :Single Status + :Age Group	));

```

#### 두 개의 내포 요인에 대한 단일 응답

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

#### 반복 측정

```jsl

dt = Open( "$SAMPLE_DATA/Presidential Elections.jmp" );Categorical(	Repeated Measures(		:"1980 Winner"n, :"1984 Winner"n, :"1988 Winner"n, :"1992 Winner"n, :"1996 Winner"n, :"2000 Winner"n,		:"2004 Winner"n, :"2008 Winner"n, :"2012 Winner"n	));

```

#### 정렬된 응답

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured(		Empty(),		Empty(),		Aligned Responses(			:I am working on my career, :I want to see the world, :My home needs some major improvements,			:I have vast interests outside of work, :I want to get my debt under control,			:I come from a large family		)	));

```

#### 평가자 합치도

```jsl

dt = Open( "$SAMPLE_DATA/Attribute Gauge.jmp" );Categorical( Rater Agreement( :A, :B, :C ) );

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), Freq( :_freqcol ) );

```

### Grouping Category

**구문:** obj &lt;&lt; Grouping Category( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### ID

**구문:** obj &lt;&lt; ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Sample Size

**구문:** obj &lt;&lt; Sample Size( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### X

**구문:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

## 항목 메시지

### Agreement Statistic

**구문:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**설명:** 평가자 간의 합치 정도와 합치성 결여의 대칭 여부를 검정합니다. 평가자 합치도 반응에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical(	Rater Agreement( :First Survey, :Second Survey ),	Freq( :Count ),	Agreement Statistic( 0 ));Wait( 1 );obj << Agreement Statistic( 1 );

```

### Aligned Responses

**구문:** obj = Categorical(...Aligned Responses( columns )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 응답 수준이 동일한 여러 열의 데이터를 단일 보고서에 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Aligned Responses( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Arrange in Rows

**구문:** obj &lt;&lt; Arrange in Rows( number )

**설명:** 페이지가 가로로 표시되도록 보고서를 배열합니다. 각 행에 표시할 보고서 수를 지정하십시오.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Responses( :country ),	Responses( :country ),	Legend( 0 ),	Arrange in Rows( 2 ));Wait( 1 );obj << Arrange in Rows( 1 );

```

### Binomial

**구문:** obj &lt;&lt; Binomial( state=0|1 )

**설명:** 각 범주에 대해 이항 분포를 가정하고 응답 수준의 독립성에 대한 카이제곱 검정을 수행합니다. 참고: 다중 응답에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Homogeneity Test( 1 );

```

### Cell Chisq

**구문:** obj &lt;&lt; Cell Chisq( state=0|1 )

**설명:** 독립성 카이제곱 검정을 위해 테이블에서 각 셀의 p 값을 표시하거나 숨깁니다. p 값은 개수가 기대 개수보다 큰지 아니면 작은지에 따라 색상과 음영이 지정됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :size ), Responses( :country ) );obj << Cell Chisq( 1 );

```

### Cell Chisq FDR

**구문:** obj &lt;&lt; Cell Chisq FDR( state=0|1 )

**설명:** 독립성 카이제곱 검정을 위해 테이블에서 각 셀의 FDR(False Discovery Rate) 수정 p 값을 표시하거나 숨깁니다. FDR 수정 p 값은 개수가 기대 개수보다 큰지 아니면 작은지에 따라 색상과 음영이 지정됩니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :size ), Responses( :country ) );obj << Cell Chisq( 1 );

```

### ChiSquare Test Choices

**구문:** obj &lt;&lt; ChiSquare Test Choices( "LR과 Pearson 둘 다"|"LR만"|"Pearson만" )

**설명:** 동질성 검정에 표시되는 검정(가능도비 카이제곱, Pearson 카이제곱 또는 둘 다)을 지정합니다. 단일 응답에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << ChiSquare Test Choices( "Pearson Only" );obj << Test Response Homogeneity( 1 );

```

### Compare Each Cell

**구문:** obj &lt;&lt; Compare Each Cell( state=0|1 )

**설명:** 그룹화 변수의 수준 간에 각 응답 수준을 다른 모든 수준 조합과 비교합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );obj << Compare Each Cell( 1 );

```

### Compare Each Cell FDR

**구문:** obj &lt;&lt; Compare Each Cell FDR( state=0|1 )

**설명:** FDR(False Discovery Rate) 수정을 사용하여 그룹화 변수의 수준 간에 각 응답 수준을 다른 모든 수준 조합과 비교합니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );obj << Compare Each Cell FDR( 1 );

```

### Compare Each Sample

**구문:** obj &lt;&lt; Compare Each Sample( state=0|1 )

**설명:** 그룹화 변수의 수준 간 응답을 비교합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Compare Each Sample( 1 );

```

### Compare Each Sample FDR

**구문:** obj &lt;&lt; Compare Each Sample FDR( state=0|1 )

**설명:** FDR(False Discovery Rate) 수정을 사용하여 그룹화 변수의 수준 간 응답을 비교합니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Compare Each Sample FDR( 1 );

```

### Conditional Association

**구문:** obj &lt;&lt; Conditional Association( state=0|1 )

**설명:** 행에 동일한 응답이 있는 경우 열에 응답이 포함되는 비율을 표시하거나 숨깁니다. 다중 응답, 다중 구분, ID별 다중 응답 모형(ID 내 고유 발생 선택됨)에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	ID( :Response ID ),	Unique Occurrences within ID( 1 ),	Structured( :Brush, :Brush Delimited ),	Share Chart( 0 ),	Legend( 0 ),	Conditional Association( 1 ));

```

### Confidence Interval Coverage

**구문:** obj = Categorical(...Confidence Interval Coverage( number=0.95 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 응답 비율 및 점유율에 대한 신뢰 구간의 범위를 설정합니다. 범위는 (1-α)와 같습니다. 기본값은 "0.95"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	X( :Age Group ),	Responses( :I am working on my career ),	Confidence Interval Coverage( 0.99 ),	Share Confidence Interval( 1 ));

```

### Confidence Limits Format

**구문:** obj &lt;&lt; Confidence Limits Format( format, &lt;options&gt; )

**설명:** 테이블의 점유율 및 비율에 대한 신뢰 한계 형식을 지정합니다. 기본값은 "백분율", 6, 2입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	X( :Age Group ),	Responses( :I am working on my career ),	Confidence Interval Coverage( 0.99 ),	Share Confidence Interval( 1 ));Wait( 1 );obj << Confidence Limits Format( "Percent", 6, 0 );

```

### Contents Summary

**구문:** obj &lt;&lt; Contents Summary( state=0|1 )

**설명:** 모든 검정과 p 값을 하나의 보고서로 모읍니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Contents Summary( 1 );

```

### Count Missing Responses

**구문:** obj = Categorical(...Count Missing Responses( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 결측값을 응답 범주로 포함합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Missing Data Pattern.jmp" );Categorical( X( :Trial 1 ), Count Missing Responses( 1 ), Responses( :Trial 4 ) );

```

### Count Test

**구문:** obj &lt;&lt; Count Test( state=0|1 )

**설명:** Poisson 회귀를 사용하여 비율의 독립성에 대한 카이제곱 검정을 수행합니다. 참고: 다중 응답에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Count Test( 1 );

```

### Crosstab

**구문:** obj &lt;&lt; Crosstab( state=0|1 )

**설명:** 열을 정의하는 응답 수준과 행을 정의하는 그룹화 변수 수준을 사용하여 개수 교차표를 생성합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Crosstab Transposed( 1 );obj << Crosstab( 1 );

```

### Crosstab Transposed

**구문:** obj &lt;&lt; Crosstab Transposed( state=0|1 )

**설명:** 행을 정의하는 응답 수준과 열을 정의하는 그룹화 변수 수준을 사용하여 개수 교차표를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Crosstab Transposed( 1 );

```

### Exclude Nonresponses

**구문:** obj &lt;&lt; Exclude Nonresponses( state=0|1 )

**설명:** 다중 응답 범주를 비교할 때 개수 및 동질성 검정에 대해 무응답을 제외합니다. 빈 셀 또는 결측 셀이 무응답으로 간주됩니다. 이러한 셀에는 별도의 범주를 사용하지 않는 것이 좋습니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	Structured( :"What is your gender ? "n, :"What colors do you like? (with nonresponse)"n ),	Share Chart( 0 ),	Homogeneity Test( 1 ));Wait( 1 );obj << Exclude Nonresponses( 1 );

```

### FDR Adjusted PValues

**구문:** obj &lt;&lt; FDR Adjusted PValues( state=0|1 )

**설명:** FDR(False Discovery Rate) 수정 p 값(Benjamini and Hochberg, 1995)은 p 값이 많고 일부 검정이 의도치 않게 유의성을 쉽게 선언할 때 사용됩니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :I am working on my career, :Age Group * :Employee Tenure ),	Share Chart( 0 ),	Test Response Homogeneity( 1 ));obj << FDR Adjusted PValues( 1 );

```

### Filter

**구문:** obj &lt;&lt; Filter( state=0|1 )

**설명:** 데이터를 로컬에서 특정 그룹 또는 범위로 필터링합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	Responses( :country ),	Legend( 0 ),	Local Data Filter(		Location( {634, 43} ),		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),		Add Filter( columns( :sex ), Where( :sex == "Female" ) )	));Wait( 1.0 );obj << Filter( 0 );

```

### Force Crosstab Shading

**구문:** obj &lt;&lt; Force Crosstab Shading( state=0|1 )

**설명:** 음영 표시하지 않도록 전역 환경 설정에 지정되어 있더라도 교차표 보고서에 음영을 사용합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Force Crosstab Shading( 0 );Wait( 1 );obj << Force Crosstab Shading( 1 );

```

### Force Labels Horizontal

**구문:** obj &lt;&lt; Force Labels Horizontal( state=0|1 )

**설명:** 텍스트 길이에 관계없이 교차표 테이블에 가로 라벨을 사용합니다. 라벨 텍스트가 회전하지 않고 줄바꿈됩니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );Wait( 1 );obj << Force Labels Horizontal( 1 );

```

### Format Elements

**구문:** obj &lt;&lt; Format Elements

**설명:** 보고서의 다양한 요소에 대한 형식을 지정할 수 있는 창을 엽니다.

### Frequencies

**구문:** obj &lt;&lt; Frequencies( state=0|1 )

**설명:** 보고서에 빈도 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), Frequencies( 0 ) );Wait( 1 );obj << Frequencies( 1 );

```

### Frequencies Format

**구문:** obj &lt;&lt; Frequencies Format( format, &lt;options&gt; )

**설명:** 테이블의 빈도 값 형식을 지정합니다. 기본값은 "고정 소수점", 7, 0입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );Wait( 1 );obj << Frequencies Format( "Fixed Dec", 7, 2 );

```

### Frequency Chart

**구문:** obj &lt;&lt; Frequency Chart( state=0|1 )

**설명:** 보고서에 빈도 차트를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Frequency Chart( 1 );

```

### Grouping Option

**구문:** obj = Categorical(...Grouping Option( "조합"|"개별"|"둘 다" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** X 변수에 대한 그룹화 방법을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Aligned Responses( :country, :size ),	Grouping Option( Each Individually ));

```

### Hide Nonsignificant

**구문:** obj &lt;&lt; Hide Nonsignificant( state=0|1 )

**설명:** 유의하지 않은 보고서는 표시하지 않습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Grouping Option( Each Individually ),	X( :Age Group, :School Age Children ),	Responses( :I am working on my career ),	Responses( :My home needs some major improvements ),	Responses( :I have vast interests outside of work ),	Responses( :I come from a large family ),	Crosstab Transposed( 1 ),	Test Response Homogeneity( 1 ));obj << Hide Nonsignificant( 1 );

```

### Highlight Cells

**구문:** obj &lt;&lt; Highlight Cells

**설명:** 지정된 조건을 충족하는 셀을 강조 표시합니다.

#### 가장 낮은 응답 및 표본으로 강조

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical(	Multiple Delimited( :failures ),	ID( :ID ),	X( :clean, :date ),	Highlight Cells( Lowest Response( Share ), Color( "Green" ) ),	Highlight Cells( Lowest Sample( Share ), Color( "Purple" ) ));

```

#### 가장 높은 응답 및 표본으로 강조

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical(	Multiple Delimited( :failures ),	ID( :ID ),	X( :clean, :date ),	Highlight Cells( Highest Response( Share ), Color( "Green" ) ),	Highlight Cells( Highest Sample( Share ), Color( "Purple" ) ));

```

#### 범주로 강조

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.5, Color( "Magenta" ), Category( "30-34" ) ),	Highlight Cells( Share >= 0.46, Color( "Green" ), Category( "5 to 10 years" ) ),	Highlight Cells( Share < 0.5, Color( "Blue" ), Category( "Agree" ) ),	Highlight Cells( Mean Score <= 2, Color( "Yellow" ), Category( "25-29" ) ));

```

#### 열로 강조

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.5, Column( :Age Group ) ),	Highlight Cells( Share >= 0.46, Color( "Fuchsia" ), Column( :Brush ) ));

```

#### 테이블의 최대값 및 최소값으로 강조

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );Categorical(	ID( :ID ),	X( :clean, :date ),	Multiple Delimited( :failures ),	Share Chart( 1 ),	Highlight Cells( Highest in Table( Freq ), Color( "Green" ) ),	Highlight Cells( Lowest in Table( Freq ), Color( "Purple" ) ));

```

#### 평균 스코어 및 점유율로 강조

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );Categorical(	X( :Gender, :Age Group ),	Responses( :Job Satisfaction ),	Responses( :I am working on my career ),	Mean Score( 1 ),	Mean Std Error( 1 ),	Mean Confidence Interval( 1 ),	Std Dev Score( 1 ),	Share Chart( 0 ),	Highlight Cells( Mean Score > 2.3, Color( "Blue" ) ),	Highlight Cells( Share >= 0.6, Color( "Cyan" ) ),	Highlight Cells( Share > 0.7, Color( "Green" ) ));

```

### Homogeneity Test

**구문:** obj &lt;&lt; Homogeneity Test( state=0|1 )

**설명:** 각 범주에 대해 이항 분포를 가정하고 응답 수준의 독립성에 대한 카이제곱 검정을 수행합니다. 참고: 다중 응답에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Homogeneity Test( 1 );

```

### Include Response Categories in Excluded Rows

**구문:** obj = Categorical(...Include Response Categories in Excluded Rows( state=0|1 )...)

**설명:** 제외된 행에만 나타나는 응답 범주를 보고서에 포함하도록 지정합니다. 이러한 범주의 개수는 0입니다.

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Select Where( :size == "Small" );dt << Exclude;obj = Categorical(	Include Response Categories in Excluded Rows( 1 ),	X( :marital status ),	Responses( :size ));

```

### Include Responses Not in Data

**구문:** obj = Categorical(...Include Responses Not in Data( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 데이터에 없더라도 값 라벨이 있는 응답 범주를 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );:type << Set Property(	Value Labels,	{"Family" = "Family", "Sporty" = "Sporty", "Utility" = "SUV", "Work" = "Work"});obj = Categorical( X( :marital status ), Responses( :type ) );obj << Include Responses Not in Data( 1 );

```

### Indicator Group

**구문:** obj = Categorical(...Indicator Group( columns )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 응답이 여러 표시자 열에 있는 경우 다중 응답 변수의 데이터를 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Indicators.jmp" );obj = dt << Categorical(	X( :clean, :date ),	Indicator Group(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect	));

```

### Mean Confidence Interval

**구문:** obj &lt;&lt; Mean Confidence Interval( state=0|1 )

**설명:** 평균의 신뢰 구간을 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Confidence Interval( 1 );

```

### Mean Score

**구문:** obj &lt;&lt; Mean Score( state=0|1 )

**설명:** 교차표 테이블에 원시 숫자 코드 또는 값 스코어를 기반으로 평균 스코어를 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score( 1 );

```

### Mean Score Comparisons

**구문:** obj &lt;&lt; Mean Score Comparisons( state=0|1 )

**설명:** 그룹화 범주 간 평균 스코어를 비교합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons( 1 );

```

### Mean Score Comparisons FDR

**구문:** obj &lt;&lt; Mean Score Comparisons FDR( state=0|1 )

**설명:** 그룹화 범주 간 평균 스코어를 비교합니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons FDR( 1 );

```

### Mean Score Comparisons as Suffix

**구문:** obj &lt;&lt; Mean Score Comparisons as Suffix( state=0|1 )

**설명:** 그룹화 범주 간 평균 스코어를 비교합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score Comparisons Suffixed( 1 );

```

### Mean Std Error

**구문:** obj &lt;&lt; Mean Std Error( state=0|1 )

**설명:** 평균의 표준 오차를 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Std Error( 1 );

```

### Means Format

**구문:** obj &lt;&lt; Means Format( format, &lt;options&gt; )

**설명:** 테이블의 평균 스코어 형식을 지정합니다. 기본값은 "고정 소수점", 6, 2입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Mean Score( 1 );Wait( 1 );obj << Means Format( "Fixed", 6, 4 );

```

### Multiple Delimited

**구문:** obj = Categorical(...Multiple Delimited( column )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 응답이 단일 열에 있고 각 응답이 쉼표, 세미콜론 또는 탭으로 구분되는 다중 응답 변수의 데이터를 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );obj = dt << Categorical( Multiple Delimited( :failureS ), ID( :ID ), X( :clean, :date ) );

```

### Multiple Response

**구문:** obj = Categorical(...Multiple Response( columns )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 가능성 있는 각 응답이 고유의 개별 열에 기록된 경우 다중 응답 변수의 데이터를 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );obj = dt << Categorical(	X( :clean, :date ),	Multiple Response( :Failure1, :Failure2, :Failure3 ),	Frequency Chart( 0 ));

```

### Multiple Response by ID

**구문:** obj = Categorical(...Multiple Response by ID( column )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 단일 응답 열과 개체 ID를 포함하는 두 번째 열이 있는 경우 다중 응답 변수의 데이터를 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));

```

### Order Response Levels High to Low

**구문:** obj = Categorical(...Order Response Levels High to Low( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 가장 큰 값이 있는 범주가 맨 위에 오도록 보고서를 재정렬합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical(	X( :sex, :marital status ),	Order Response Levels High to Low( 1 ),	Responses( :country ));

```

### Order by Significance

**구문:** obj &lt;&lt; Order by Significance( state=0|1 )

**설명:** 유의성이 가장 높은 보고서가 맨 위에 표시되도록 보고서를 재정렬합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Grouping Option( Each Individually ),	X( :Age Group, :School Age Children ),	Responses( :I am working on my career ),	Responses( :My home needs some major improvements ),	Responses( :I have vast interests outside of work ),	Responses( :I come from a large family ),	Crosstab Transposed( 1 ),	Test Response Homogeneity( 1 ));obj << Order by Significance( 1 );

```

### Poisson

**구문:** obj &lt;&lt; Poisson( state=0|1 )

**설명:** Poisson 회귀를 사용하여 비율의 독립성에 대한 카이제곱 검정을 수행합니다. 참고: 다중 응답에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );obj << Count Test( 1 );

```

### Rate Confidence Interval

**구문:** obj &lt;&lt; Rate Confidence Interval( state=0|1 )

**설명:** 비율 확률의 신뢰 구간을 표시하거나 숨깁니다. 신뢰 구간은 Poisson 선형 모형의 표준 오차를 사용하는 정규 구간입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Gender ), Multiple Delimited( :Brush Delimited ) );obj << Rate Confidence Interval( 1 );

```

### Rate Per Case

**구문:** obj &lt;&lt; Rate Per Case( state=0|1 )

**설명:** 보고서에 사례별 비율 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ),	Rate Per Case( 0 ));Wait( 1 );obj << Rate Per Case( 1 );

```

### Rate per Case Responding

**구문:** obj &lt;&lt; Rate per Case Responding( state=0|1 )

**설명:** 사례별 응답률을 표시하거나 숨깁니다(결측값 제외).

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case Responding( 1 );

```

### Rater Agreement

**구문:** obj = Categorical(...Rater Agreement( columns )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 열이 서로 다른 사람(평가자)이 제공한 동일한 질문 또는 항목에 대한 평가인 경우 여러 열의 데이터를 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Rater Agreement( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Relative Risk

**구문:** obj &lt;&lt; Relative Risk( state=0|1, {}, {level of interest} )

**설명:** 각 응답 수준에 대한 2수준 그룹화 변수의 상대 위험도를 표시하거나 숨깁니다. 그룹화 변수의 수준이 두 개인 경우, 응답이 다중 응답이거나 수준이 두 개인 경우, &apos;ID 내 고유 발생&apos; 옵션을 선택한 경우에 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Categorical(	Response Frequencies(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect,	),	Sample Size( :SampleSize ),	X( :clean ));obj << Relative Risk( 1, {}, {"after"} );

```

### Repeated Measures

**구문:** obj = Categorical(...Repeated Measures( columns )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 열에 여러 시점의 동일한 질문에 대한 응답이 포함된 경우 여러 열의 데이터를 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Response Frequencies

**구문:** obj = Categorical(...Response Frequencies( columns )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 가능성 있는 각 응답의 빈도가 고유의 열에 기록된 경우 다중 응답 변수를 요약합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = dt << Categorical(	Response Frequencies(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect, :silicon defect	),	X( :clean, :date ),	Sample Size( :SampleSize ));

```

### Response Levels

**구문:** obj &lt;&lt; Response Levels( state=0|1 )

**설명:** 각 응답에 대한 데이터 수준을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Response Levels( 0 );Wait( 1 );obj << Response Levels( 1 );

```

### Responses

**구문:** obj = Categorical(...Responses( column )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 단일 열의 응답을 요약합니다. 여러 열이 선택된 경우에는 범주형 보고서에 각 개별 열에 대한 별도의 보고서가 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Save Contingency Table

**구문:** obj &lt;&lt; Save Contingency Table

**설명:** 교차표 테이블의 값을 새 데이터 테이블에 저장합니다. 새 테이블은 원래 열 이름을 사용합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Contingency Table;

```

### Save DocX File

**구문:** obj &lt;&lt; Save DocX File

**설명:** Undocumented and Experimental Feature

### Save Excel File

**구문:** obj &lt;&lt; Save Excel File

**설명:** 테이블을 Excel 스프레드시트에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Excel File( "$DOCUMENTS\ExcelCarSize.xlsx", Separate Rows for Each Cell Statistic( 1 ) );

```

### Save Frequencies

**구문:** obj &lt;&lt; Save Frequencies

**설명:** 빈도를 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Frequencies;

```

### Save Mean Scores

**구문:** obj &lt;&lt; Save Mean Scores

**설명:** 각 표본 그룹에 대한 평균 스코어를 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Mean Scores;

```

### Save Rate Per Case

**구문:** obj &lt;&lt; Save Rate Per Case

**설명:** 사례별 비율을 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Rate Per Case;

```

### Save Share of Responses

**구문:** obj &lt;&lt; Save Share of Responses

**설명:** 응답 점유율을 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Share of Responses;

```

### Save Stacked Table

**구문:** obj &lt;&lt; Save Stacked Table

**설명:** 교차표 테이블의 값을 새 데이터 테이블에 저장합니다. 새 테이블은 일반 열 이름을 사용합니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save Stacked Table;

```

### Save Test Homogeneity

**구문:** obj &lt;&lt; Save Test Homogeneity

**설명:** 동질성 검정 결과를 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Test Homogeneity;

```

### Save Test Rates

**구문:** obj &lt;&lt; Save Test Rates

**설명:** &apos;다중 응답 검정&apos; 옵션의 결과를 새 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Test Rates;

```

### Save Transposed Frequencies

**구문:** obj &lt;&lt; Save Transposed Frequencies

**설명:** 전치된 빈도를 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Transposed Frequencies;

```

### Save Transposed Rate Per Case

**구문:** obj &lt;&lt; Save Transposed Rate Per Case

**설명:** 변환된 사례별 비율을 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Multiple Response by ID( :failure ),	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ));obj << Rate Per Case( 1 );obj << Save Transposed Rate Per Case;

```

### Save Transposed Share of Responses

**구문:** obj &lt;&lt; Save Transposed Share of Responses

**설명:** 전치된 응답 점유율을 새 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Save Transposed Share of Responses;

```

### Save tTests and pValues

**구문:** obj &lt;&lt; Save tTests and pValues

**설명:** 평균 비교 검정의 p 값과 t-검정을 새 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );obj << Save ttests and pvalues;

```

### Share Chart

**구문:** obj &lt;&lt; Share Chart( state=0|1 )

**설명:** 보고서에 점유율 차트를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), Share Chart( 0 ) );Wait( 1 );obj << Share Chart( 1 );

```

### Share Confidence Interval

**구문:** obj &lt;&lt; Share Confidence Interval( state=0|1 )

**설명:** 응답 점유율 확률의 신뢰 구간을 표시하거나 숨깁니다. 신뢰 구간은 Wilson 스코어 검정 방법을 사용하여 생성됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );obj << Share Confidence Interval( 1 );

```

### Share Of Responses

**구문:** obj &lt;&lt; Share Of Responses( state=0|1 )

**설명:** 보고서에 응답 점유율 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), Share of Responses( 0 ) );Wait( 1 );obj << Share of Responses( 1 );

```

### Shares and Rates Format

**구문:** obj &lt;&lt; Shares and Rates Format( format, &lt;options&gt; )

**설명:** 테이블의 점유율, 비율 및 응답률 값 형식을 지정합니다. 기본값은 "백분율", 6, 1입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );Wait( 1 );obj << Shares and Rates Format( "Percent", 7, 2 );

```

### Shorten Labels

**구문:** obj = Categorical(...Shorten Labels( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 공통 접두사 및 접미사를 제거하여 라벨 길이를 짧게 만듭니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "Age Range",	Numeric,	"Continuous",	Formula( :age > 12 ),	Value Labels( {0 = "Age Range: Adolescent", 1 = "Age Range: Teenager"} ));obj = dt << Categorical( Responses( :Age Range ), Legend( 0 ) );Wait( 2 );obj << Shorten Labels( 1 );

```

### Show Columns Used in Report

**구문:** obj &lt;&lt; Show Columns Used in Report( state=0|1 )

**설명:** 보고서에 사용된 열 정보를 표시하거나 숨깁니다. 이 옵션은 SPSS 이름/SAS 이름 또는 SPSS 라벨/SAS 라벨 열 특성을 가진 열에만 영향을 줍니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );:country << Set Property( "SAS Label", "Country of Manufacture Origin" );obj = Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Show Columns Used in Report( 1 );

```

### Show Highlight Legend

**구문:** obj &lt;&lt; Show Highlight Legend( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :Position Tenure + :Age Group, :I am working on my career + :Brush ),	Mean Score( 1 ),	Highlight Cells( Share >= 0.8 ),	Highlight Cells( Mean Score >= 2.7, Color( "Blue" ) ));obj << Show Highlight Legend( 0 );Wait( 1 );obj << Show Highlight Legend( 1 );

```

### Show Supercategories

**구문:** obj &lt;&lt; Show Supercategories( state=0|1 )

**설명:** 상위 범주를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Responses( :I like the color orange. ),	Supercategories(		:I like the color orange.( {Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )} )	),	Legend( 0 ));obj << Show Supercategories( 0 );Wait( 1 );obj << Show Supercategories( 1 );

```

### Show Warnings

**구문:** obj &lt;&lt; Show Warnings( state=0|1 )

**설명:** 작은 표본 크기와 관련된 카이제곱 검정에 대한 경고를 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :I am working on my career, :Age Group * :Employee Tenure ),	Share Chart( 0 ),	Test Response Homogeneity( 1 ));obj << Show Warnings( 1 );

```

### Std Dev Format

**구문:** obj &lt;&lt; Std Dev Format( format, &lt;options&gt; )

**설명:** 테이블의 표준편차 스코어 형식을 지정합니다. 기본값은 "고정 소수점", 6, 2입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Std Dev Score( 1 );Wait( 1 );obj << Std Dev Format( "Fixed", 6, 4 );

```

### Std Dev Score

**구문:** obj &lt;&lt; Std Dev Score( state=0|1 )

**설명:** 교차표 테이블에 원시 숫자 코드 또는 값 스코어를 기반으로 표준편차 스코어를 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Std Dev Score( 1 );

```

### Structured

**구문:** obj = Categorical(...Structured( Column * nestedColumn ... + rightColumn, sideColumn + lowerColumns... )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 둘 이상의 변수에 대한 정형 교차표를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Categorical(	Structured( :Gender * :Age Group + :Position Tenure, :Job Satisfaction + :Salary Group ));

```

### Supercategories

**구문:** obj &lt;&lt; Supercategories( column, ({Group (name, {level1, level2, ... levelN})}) )

**설명:** 반응 범주를 로컬로 집계하도록 상위 범주를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Responses( :I like the color orange. ),	Supercategories(		:I like the color orange.( {Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )} )	),	Legend( 0 ));

```

### Test Response Homogeneity

**구문:** obj &lt;&lt; Test Response Homogeneity( state=0|1 )

**설명:** 가능도비 검정과 Pearson 카이제곱 검정을 모두 사용하여 응답 열의 동질성을 검정합니다. 단일 응답에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Test Response Homogeneity( 1 );

```

### Total Cases

**구문:** obj &lt;&lt; Total Cases( state=0|1 )

**설명:** 다중 응답 변수의 경우 교차표 테이블에 총 사례 수를 표시합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Multiple Response( :I like the color blue., :I like the color red., :I like the color orange. ));obj << Total Cases( 0 );Wait( 1 );obj << Total Cases( 1 );

```

### Total Cases Responding

**구문:** obj &lt;&lt; Total Cases Responding( state=0|1 )

**설명:** 다중 응답 변수의 경우 교차표 테이블에 한 번 이상 응답한 총 사례 수를 표시합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );obj = dt << Categorical(	X( :"What is your gender ? "n, :"How old are you ? "n ),	Multiple Response( :I like the color blue., :I like the color red., :I like the color orange. ));obj << Total Cases Responding( 0 );Wait( 1 );obj << Total Cases Responding( 1 );

```

### Total Responses

**구문:** obj &lt;&lt; Total Responses( state=0|1 )

**설명:** 교차표 테이블에 총 응답 수를 표시합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );obj << Total Responses( 0 );Wait( 1 );obj << Total Responses( 1 );

```

### Totals First

**구문:** obj &lt;&lt; Totals First( state=0|1 )

**설명:** 교차표의 왼쪽 상단 근처에 총 응답 수를 표시합니다. 단, 여러 테이블의 각 열에서 총계가 동일해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Categorical(	Structured( :Single Status + :School Age Children, :Employee Tenure + :Position Tenure + :Age Group ),	Frequencies( 0 ),	Totals First( 1 ),	Total Responses( 0 ));

```

### Transition Report

**구문:** obj &lt;&lt; Transition Report( state=0|1 )

**설명:** 시간에 따라 범주가 어떻게 변경되는지 보여 주는 보고서를 표시하거나 숨깁니다. 반복 측정 모형에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );obj << Transition Report( 1 );

```

### Transposed Freq Chart

**구문:** obj &lt;&lt; Transposed Freq Chart( state=0|1 )

**설명:** 각 응답 수준에 대한 열과 여러 표본 수준에 대한 행을 포함하는 전치된 빈도 차트를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Categorical( X( :marital status ), Responses( :country ) );obj << Transposed Freq Chart( 1 );

```

### Unique Occurrences within ID

**구문:** obj = Categorical(...Unique Occurrences within ID( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 동일한 ID를 가진 행에 대해 다중 응답을 정렬합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );obj = dt << Categorical(	Freq( :N ),	Sample Size( :SampleSize ),	ID( :ID ),	X( :clean, :date ),	Unique occurrences within ID( 1 ),	Multiple Response by ID( :failure ));

```

