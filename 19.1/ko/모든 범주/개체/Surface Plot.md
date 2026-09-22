# Surface Plot



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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**구문:** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 연결된 생성자

### Surface Plot

**구문:** Surface Plot( Columns() )

**설명:** 저장된 계산식으로 정의된 표면 또는 점의 회전하는 3차원 그림을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 변수의 각 수준에 대해 하나씩 여러 보고서를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**구문:** obj &lt;&lt; Columns( column(s) )

**설명:** 3D 그래프의 X, Y, Z 좌표에 사용할 수 있는 변수입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :silane, :silica, :hardness ) );

```

### Factors

**구문:** obj &lt;&lt; Factors( column(s) )

**설명:** 3D 그래프의 X, Y, Z 좌표에 사용할 수 있는 변수입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

## 항목 메시지

### Clip Sheet

**구문:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**설명:** 첫 번째 반응 열 계산식에 사용된 열 범위에서만 표면이 나타납니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( :Pred Formula ABRASION );Wait( 1 );obj << Clip Sheet( 1 );

```

### Clip Sheet1

**구문:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**설명:** 첫 번째 반응 열 계산식에 사용된 열 범위에서만 표면이 나타납니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( :Pred Formula ABRASION );Wait( 1 );obj << Clip Sheet( 1 );

```

### Clip Sheet2

**구문:** obj &lt;&lt; Clip Sheet2( state=0|1 )

**설명:** 두 번째 반응 열 계산식에 사용된 열 범위에서만 표면이 나타납니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );obj << Show Surface2( "Both Sides" );Wait( 1 );obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**구문:** obj &lt;&lt; Clip Sheet3( state=0|1 )

**설명:** 세 번째 반응 열 계산식에 사용된 열 범위에서만 표면이 나타납니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Show Surface3( "Both sides" );Wait( 1 );obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**구문:** obj &lt;&lt; Clip Sheet4( state=0|1 )

**설명:** 네 번째 반응 열 계산식에 사용된 열 범위에서만 표면이 나타납니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula HARDNESS ));obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS);obj << Show Surface4( "Both sides" );Wait( 1 );obj << Clip Sheet4( 1 );

```

### Contour Color

**구문:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**설명:** 첫 번째 반응 표면의 등고선 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**구문:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**설명:** 첫 번째 반응 표면의 등고선 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**구문:** obj &lt;&lt; Contour Color2( color )

**설명:** 두 번째 반응 표면의 등고선 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both Sides" ));obj << Show Contour2( "On Surface" );Wait( 1 );obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**구문:** obj &lt;&lt; Contour Color3( color )

**설명:** 세 번째 반응 표면의 등고선 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Show Contour3( "On Surface" );Wait( 1 );obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**구문:** obj &lt;&lt; Contour Color4( color )

**설명:** 네 번째 반응 표면의 등고선 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface4( "Both Sides" ),	Show Surface1( "Off" ));obj << Show Contour4( "On Surface" );Wait( 1 );obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**구문:** obj &lt;&lt; Control Panel( state=0|1 )

**설명:** 표면 모양, 독립 변수 및 종속 변수에 대한 컨트롤이 포함된 제어판을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Control Panel( 0 );

```

### Data points Color

**구문:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**설명:** 표면에 그려진 첫 번째 종속 변수에 대한 데이터 점 색상을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Mesh" );obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**구문:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**설명:** 표면에 그려진 첫 번째 종속 변수에 대한 데이터 점 색상을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Mesh" );obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**구문:** obj &lt;&lt; Data points Color2( color )

**설명:** 표면에 그려진 두 번째 종속 변수에 대한 데이터 점 색상을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );obj << Datapoints Choice2( "Mesh" );obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**구문:** obj &lt;&lt; Data points Color3( color )

**설명:** 표면에 그려진 세 번째 종속 변수에 대한 데이터 점 색상을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ) );obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Datapoints Choice3( "Needles" );obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**구문:** obj &lt;&lt; Data points Color4( color )

**설명:** 표면에 그려진 네 번째 종속 변수에 대한 데이터 점 색상을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Datapoints Choice4( "Surface" );obj << Data points Color4( 100, 0, 200 );obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS);obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );

```

### Datapoints Choice

**구문:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**설명:** 첫 번째 반응의 표면에 점이 표시되는 방법을 지정합니다. 기본 스타일은 &apos;점&apos; 옵션입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**구문:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**설명:** 첫 번째 반응의 표면에 점이 표시되는 방법을 지정합니다. 기본 스타일은 &apos;점&apos; 옵션입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**구문:** obj &lt;&lt; Datapoints Choice2( "해제"|"점"|"바늘"|"그물"|"표면" )

**설명:** 두 번째 반응의 표면에 점이 표시되는 방법을 지정합니다. 기본 스타일은 &apos;점&apos; 옵션입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );Wait( 1 );obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**구문:** obj &lt;&lt; Datapoints Choice3( "해제"|"점"|"바늘"|"그물"|"표면" )

**설명:** 세 번째 반응의 표면에 점이 표시되는 방법을 지정합니다. 기본 스타일은 &apos;점&apos; 옵션입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**구문:** obj &lt;&lt; Datapoints Choice4( "해제"|"점"|"바늘"|"그물"|"표면" )

**설명:** 네 번째 반응의 표면에 점이 표시되는 방법을 지정합니다. 기본 스타일은 &apos;점&apos; 옵션입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula HARDNESS ));obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS);obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**구문:** obj &lt;&lt; Dependent Variables Points( state=0|1 )

**설명:** &apos;종속 변수&apos; 컨트롤에서 점 옵션을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**구문:** obj &lt;&lt; Dependent Variables Response Grid( state=0|1 )

**설명:** &apos;종속 변수&apos; 컨트롤에서 격자 옵션을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Dependent Variables Response Grid( 0 );

```

### Equation

**구문:** obj &lt;&lt; Equation( equation1, &lt;equation2&gt;, &lt;equation3&gt;, &lt;equation4&gt; )

**설명:** &apos;종속 변수&apos; 섹션에서 지정된 순서에 따라 시트에 방정식을 할당합니다. 반응을 건너뛰려면 마침표를 사용하여 결측값을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ) );obj << Show Surface2( "Both sides" );obj << Equation( ., ".7*:Silane+5*:Silica" );obj << Show Formula( 1 );

```

### Fit to Window

**구문:** obj &lt;&lt; Fit to Window( "자동"|"켜짐"|"해제" )

**설명:** 보고서 자동 늘이기 동작을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Fit to Window( "Off" );

```

### Formula

**구문:** obj &lt;&lt; Formula( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**설명:** 종속 변수 섹션에서 지정된 순서로 시트에 열의 계산식을 할당합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Datapoints Choice2( "Surface" ));obj << Show Surface2( "Both sides" );obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**구문:** obj &lt;&lt; Frame3D( Scatterplot 3D options )

**설명:** 표면의 표시 옵션을 변경합니다. 이 옵션은 3D 산점도 플랫폼의 메시지를 사용합니다. 자세한 내용은 3D 산점도에서 전체 설명을 참조하십시오.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Frame3D( Set Graph Size( 692, 671 ), Set Rotation( -54, 0, 38 ), Background Color( 255, 177, 125 ) );

```

### Hide Lights Border

**구문:** obj &lt;&lt; Hide Lights Border( state=0|1 )

**설명:** 조명 컨트롤을 표시하거나 숨깁니다.

```jsl

obj = Surface Plot();Wait( 1 );obj << Hide Lights Border( 1 );

```

### Iso Value

**구문:** obj &lt;&lt; Iso Value( id, value )

**설명:** 특정 종속 변수에 대한 등위면 슬라이더의 값을 변경합니다. id 인수는 0에서 시작하는 인덱스를 사용하여 종속 변수를 식별합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Iso Value( 0, 100 );obj << Iso Value( 1, 1500 );

```

### Lock Z Scale

**구문:** obj &lt;&lt; Lock Z Scale( state=0|1 )

**설명:** Z 축을 현재 값으로 잠급니다.

```jsl

obj = Surface Plot();obj << Lock Z Scale( 1 );

```

### Mesh Color

**구문:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**설명:** 첫 번째 종속 변수의 표면 그물 색상을 지정합니다. 이 옵션은 &apos;그물&apos; 옵션에서 &apos;해제&apos; 이외의 값을 선택한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Show Mesh( "X and Y" );Wait( 1 );obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**구문:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**설명:** 첫 번째 종속 변수의 표면 그물 색상을 지정합니다. 이 옵션은 &apos;그물&apos; 옵션에서 &apos;해제&apos; 이외의 값을 선택한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Show Mesh( "X and Y" );Wait( 1 );obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**구문:** obj &lt;&lt; Mesh Color2( color )

**설명:** 두 번째 종속 변수의 표면 그물 색상을 지정합니다. 이 옵션은 &apos;그물&apos; 옵션에서 &apos;해제&apos; 이외의 값을 선택한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Mode( "Isosurface" );obj << Show Mesh2( "X and Y" );Wait( 1 );obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**구문:** obj &lt;&lt; Mesh Color3( color )

**설명:** 세 번째 종속 변수의 표면 그물 색상을 지정합니다. 이 옵션은 &apos;그물&apos; 옵션에서 &apos;해제&apos; 이외의 값을 선택한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ) );obj << Mode( "Isosurface" );obj << Show Mesh3( "X and Y" );Wait( 1 );obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**구문:** obj &lt;&lt; Mesh Color4( color )

**설명:** 네 번째 종속 변수의 표면 그물 색상을 지정합니다. 이 옵션은 &apos;그물&apos; 옵션에서 &apos;해제&apos; 이외의 값을 선택한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Mode( "Isosurface" );obj << Show Mesh4( "X and Y" );Wait( 1 );obj << Mesh Color4( {0, 250, 0} );

```

### Mode

**구문:** obj &lt;&lt; Mode( "시트, 점"|"등위면"|"밀도 격자" )

**설명:** 그림에 표면이 표시되는 방법을 지정합니다. &apos;시트, 점&apos; 옵션은 표면에 시트, 점, 선을 표시하고 &apos;등위면&apos; 옵션은 세 개의 독립 변수가 포함된 계산식을 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Surface 2( "Both Sides" );obj << Show Surface 4( "Both Sides" );obj << Mode( "Isosurface" );

```

### Resolution

**구문:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**설명:** 표면 그림을 그리는 데 사용되는 해상도를 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### Response

**구문:** obj &lt;&lt; Response( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**설명:** 중첩된 점을 표시하기 위한 최대 4개의 반응 열을 식별합니다. 반응을 건너뛰려면 따옴표로 묶은 문자열을 자리 표시자로 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Datapoints Choice3( "Surface" ));obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**구문:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**설명:** 첫 번째 반응 표면의 색상 테마를 변경합니다. 이 옵션은 연속 그래디언트를 사용하는 점 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Continuous Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**구문:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**설명:** 첫 번째 반응 표면의 색상 테마를 변경합니다. 이 옵션은 연속 그래디언트를 사용하는 점 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Continuous Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**구문:** obj &lt;&lt; Response Column Color Theme2( color theme )

**설명:** 두 번째 반응 표면의 색상 테마를 변경합니다. 이 옵션은 연속 그래디언트를 사용하는 점 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Continuous Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**구문:** obj &lt;&lt; Response Column Color Theme3( color theme )

**설명:** 세 번째 반응 표면의 색상 테마를 변경합니다. 이 옵션은 연속 그래디언트를 사용하는 점 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Continuous Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**구문:** obj &lt;&lt; Response Column Color Theme4( color theme )

**설명:** 네 번째 반응 표면의 색상 테마를 변경합니다. 이 옵션은 연속 그래디언트를 사용하는 점 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Continuous Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**구문:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**설명:** 첫 번째 표면에 색상을 적용할 때 단색을 사용할지, 연속 그래디언트를 사용할지 아니면 이산 그래디언트를 사용할지 지정합니다. 이 옵션은 종속 변수 점 반응 열을 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**구문:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**설명:** 첫 번째 표면에 색상을 적용할 때 단색을 사용할지, 연속 그래디언트를 사용할지 아니면 이산 그래디언트를 사용할지 지정합니다. 이 옵션은 종속 변수 점 반응 열을 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**구문:** obj &lt;&lt; Response Column Fill2( "단색"|"연속 그래디언트"|"이산 그래디언트" )

**설명:** 두 번째 표면에 색상을 적용할 때 단색을 사용할지, 연속 그래디언트를 사용할지 아니면 이산 그래디언트를 사용할지 지정합니다. 이 옵션은 종속 변수 점 반응 열을 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**구문:** obj &lt;&lt; Response Column Fill3( "단색"|"연속 그래디언트"|"이산 그래디언트" )

**설명:** 세 번째 표면에 색상을 적용할 때 단색을 사용할지, 연속 그래디언트를 사용할지 아니면 이산 그래디언트를 사용할지 지정합니다. 이 옵션은 종속 변수 점 반응 열을 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**구문:** obj &lt;&lt; Response Column Fill4( "단색"|"연속 그래디언트"|"이산 그래디언트" )

**설명:** 네 번째 표면에 색상을 적용할 때 단색을 사용할지, 연속 그래디언트를 사용할지 아니면 이산 그래디언트를 사용할지 지정합니다. 이 옵션은 종속 변수 점 반응 열을 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**구문:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**설명:** 첫 번째 반응 표면의 그래디언트 수준 사이에 선을 표시하거나 숨깁니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**구문:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**설명:** 첫 번째 반응 표면의 그래디언트 수준 사이에 선을 표시하거나 숨깁니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**구문:** obj &lt;&lt; Response Column Gradient Lines2( state=0|1 )

**설명:** 두 번째 반응 표면의 그래디언트 수준 사이에 선을 표시하거나 숨깁니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Discrete Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**구문:** obj &lt;&lt; Response Column Gradient Lines3( state=0|1 )

**설명:** 세 번째 반응 표면의 그래디언트 수준 사이에 선을 표시하거나 숨깁니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Discrete Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));obj << Response Column Gradient Lines3( 0 );Wait( 1 );obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**구문:** obj &lt;&lt; Response Column Gradient Lines4( state=0|1 )

**설명:** 네 번째 반응 표면의 그래디언트 수준 사이에 선을 표시하거나 숨깁니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Discrete Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS	),	Response Column Gradient Lines4( 0 ));Wait( 1 );obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**구문:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**설명:** 첫 번째 반응 표면의 그래디언트 수를 지정합니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**구문:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**설명:** 첫 번째 반응 표면의 그래디언트 수를 지정합니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**구문:** obj &lt;&lt; Response Column Gradients2( number )

**설명:** 두 번째 반응 표면의 그래디언트 수를 지정합니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Discrete Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**구문:** obj &lt;&lt; Response Column Gradients3( number )

**설명:** 세 번째 반응 표면의 그래디언트 수를 지정합니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Discrete Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**구문:** obj &lt;&lt; Response Column Gradients4( number )

**설명:** 네 번째 반응 표면의 그래디언트 수를 지정합니다. 이 옵션은 종속 변수 점 반응 열에 이산 그래디언트를 사용하여 표면을 생성한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Discrete Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS", :Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Gradients4( 10 );

```

### Scale response axes independently

**구문:** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); obj &lt;&lt; Scale response axes independently( state=0|1 ) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 반응에 개별 척도를 사용할지 아니면 모든 반응의 축 척도가 시작 창에 입력한 첫 번째 반응의 척도와 일치하는지 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Scale response axes independently( 1 ));obj << Show Surface4( "Both sides" );Wait( 1 );obj << Scale response axes independently( 0 );

```

### Set Z Variable

**구문:** obj &lt;&lt; Set Z Variable( column )

**설명:** 지정된 열을 표면 그림의 Z 변수로 설정합니다. 이 옵션은 등위면에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ), Mode( "Isosurface" ) );obj << Set Y Variable( :SULFUR );Wait( 1 );obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**구문:** obj &lt;&lt; SetVariableAxis( column, &lt;Current Value( number )&gt;, &lt;Axis Data( axis options )&gt; )

**설명:** 지정된 독립 변수 축의 속성을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );Wait( 1 );obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**구문:** obj &lt;&lt; SetXVariable( column )

**설명:** 지정된 열을 표면 그림의 X 변수로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set X Variable( :SULFUR );

```

### SetYVariable

**구문:** obj &lt;&lt; SetYVariable( column )

**설명:** 지정된 열을 표면 그림의 Y 변수로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**구문:** obj &lt;&lt; SetZAxis( column, Current Value( number ), &lt;Axis Data( axis options )&gt; )

**설명:** Z 축의 속성을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**구문:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**설명:** 첫 번째 반응의 표면을 기준으로 그림에서 등고선 배치를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Contour( "On Surface" );

```

### Show Contour1

**구문:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**설명:** 첫 번째 반응의 표면을 기준으로 그림에서 등고선 배치를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Contour( "On Surface" );

```

### Show Contour2

**구문:** obj &lt;&lt; Show Contour2( "해제"|"아래쪽"|"위쪽"|"표면상" )

**설명:** 두 번째 반응의 표면을 기준으로 그림에서 등고선 배치를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Contour2( "Above" );

```

### Show Contour3

**구문:** obj &lt;&lt; Show Contour3( "해제"|"아래쪽"|"위쪽"|"표면상" )

**설명:** 세 번째 반응의 표면을 기준으로 그림에서 등고선 배치를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Surface3( "Both Sides" );Wait( 1 );obj << Show Contour3( "Below" );

```

### Show Contour4

**구문:** obj &lt;&lt; Show Contour4( "해제"|"아래쪽"|"위쪽"|"표면상" )

**설명:** 네 번째 반응의 표면을 기준으로 그림에서 등고선 배치를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Surface4( "Both Sides" );Wait( 1 );obj << Show Contour4( "On Surface" );

```

### Show Mesh

**구문:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**설명:** 첫 번째 반응에 대한 표면 그물 스타일을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**구문:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**설명:** 첫 번째 반응에 대한 표면 그물 스타일을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**구문:** obj &lt;&lt; Show Mesh2( "해제"|"X 및 Y"|"X"|"Y" )

**설명:** 두 번째 반응에 대한 표면 그물 스타일을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Mesh2( "X" );

```

### Show Mesh3

**구문:** obj &lt;&lt; Show Mesh3( "해제"|"X 및 Y"|"X"|"Y" )

**설명:** 세 번째 반응에 대한 표면 그물 스타일을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Mesh3( "Y" );

```

### Show Mesh4

**구문:** obj &lt;&lt; Show Mesh4( "해제"|"X 및 Y"|"X"|"Y" )

**설명:** 네 번째 반응에 대한 표면 그물 스타일을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Mesh4( "X and Y" );

```

### Show Surface

**구문:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**설명:** 첫 번째 반응 표면이 어떻게 나타나는지 지정합니다. 이 옵션은 계산식 반응 열을 사용하여 생성된 표면에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Surface( "Below Only" );

```

### Show Surface1

**구문:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**설명:** 첫 번째 반응 표면이 어떻게 나타나는지 지정합니다. 이 옵션은 계산식 반응 열을 사용하여 생성된 표면에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Surface( "Below Only" );

```

### Show Surface2

**구문:** obj &lt;&lt; Show Surface2( "해제"|"양쪽"|"위쪽만"|"아래쪽만" )

**설명:** 두 번째 반응 표면이 어떻게 나타나는지 지정합니다. 이 옵션은 계산식 반응 열을 사용하여 생성된 표면에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**구문:** obj &lt;&lt; Show Surface3( "해제"|"양쪽"|"위쪽만"|"아래쪽만" )

**설명:** 세 번째 반응 표면이 어떻게 나타나는지 지정합니다. 이 옵션은 계산식 반응 열을 사용하여 생성된 표면에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Surface3( "Above Only" );

```

### Show Surface4

**구문:** obj &lt;&lt; Show Surface4( "해제"|"양쪽"|"위쪽만"|"아래쪽만" )

**설명:** 네 번째 반응 표면이 어떻게 나타나는지 지정합니다. 이 옵션은 계산식 반응 열을 사용하여 생성된 표면에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula HARDNESS ));Wait( 1 );obj << Show Surface4( "Both Sides" );

```

### Show formula

**구문:** obj &lt;&lt; Show formula( state=0|1 )

**설명:** 현재 표면 그림에 나타나는 모든 종속 변수에 대한 계산식을 표시하거나 숨깁니다.

```jsl

obj = Surface Plot();obj << Show Formula( 1 );

```

### Surface Alpha

**구문:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**설명:** 첫 번째 반응 변수에 대한 등위면의 불투명도를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Mode( "Isosurface" );Wait( 1 );obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**구문:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**설명:** 첫 번째 반응 변수에 대한 등위면의 불투명도를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Mode( "Isosurface" );Wait( 1 );obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**구문:** obj &lt;&lt; Surface Alpha2( number )

**설명:** 두 번째 반응 변수에 대한 등위면의 불투명도를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Mode( "Isosurface" );obj << Show Surface2( "Both sides" );Wait( 1 );obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**구문:** obj &lt;&lt; Surface Alpha3( number )

**설명:** 세 번째 반응 변수에 대한 등위면의 불투명도를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Mode( "Isosurface" );obj << Show Surface3( "Both sides" );Wait( 1 );obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**구문:** obj &lt;&lt; Surface Alpha4( number )

**설명:** 네 번째 반응 변수에 대한 등위면의 불투명도를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Mode( "Isosurface" );obj << Show Surface4( "Both sides" );Wait( 1 );obj << Surface Alpha4( 0.90 );

```

### Surface Color

**구문:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**설명:** 채우기 유형이 단색일 때 첫 번째 반응 표면의 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );Wait( 1 );obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**구문:** obj &lt;&lt; Surface Color Method( "Solid"|formula, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt; )

**설명:** 네 가지 가능한 표면에 각각 색상을 적용하는 데 사용되는 방법을 지정합니다. 이 계산식은 표면을 그리는 데 사용되는 계산식과 다를 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**구문:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**설명:** 첫 번째 반응 표면의 색상 그래디언트 끝점을 지정합니다. 이 옵션은 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface( "Both Sides" ));obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**구문:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**설명:** 첫 번째 반응 표면의 색상 그래디언트 끝점을 지정합니다. 이 옵션은 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface( "Both Sides" ));obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**구문:** obj &lt;&lt; Surface Color Range2( "데이터"|"축" )

**설명:** 두 번째 반응 표면의 색상 그래디언트 끝점을 지정합니다. 이 옵션은 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface2( "Both Sides" ));obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**구문:** obj &lt;&lt; Surface Color Range3( "데이터"|"축" )

**설명:** 세 번째 반응 표면의 색상 그래디언트 끝점을 지정합니다. 이 옵션은 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface3( "Both Sides" ));obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**구문:** obj &lt;&lt; Surface Color Range4( "데이터"|"축" )

**설명:** 네 번째 반응 표면의 색상 그래디언트 끝점을 지정합니다. 이 옵션은 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface4( "Both Sides" ));obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**구문:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**설명:** 첫 번째 반응 표면의 색상 테마를 지정합니다. 이 옵션은 그래디언트를 사용하는 계산식 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**구문:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**설명:** 첫 번째 반응 표면의 색상 테마를 지정합니다. 이 옵션은 그래디언트를 사용하는 계산식 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**구문:** obj &lt;&lt; Surface Color Theme2( color theme )

**설명:** 두 번째 반응 표면의 색상 테마를 지정합니다. 이 옵션은 그래디언트를 사용하는 계산식 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Surface Gradient Type2( "Continuous Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**구문:** obj &lt;&lt; Surface Color Theme3( color theme )

**설명:** 세 번째 반응 표면의 색상 테마를 지정합니다. 이 옵션은 그래디언트를 사용하는 계산식 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Surface Gradient Type3( "Continuous Gradients" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**구문:** obj &lt;&lt; Surface Color Theme4( color theme )

**설명:** 네 번째 반응 표면의 색상 테마를 지정합니다. 이 옵션은 그래디언트를 사용하는 계산식 반응 열에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface4( "Both Sides" ));obj << Surface Gradient Type4( "Continuous Gradients" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**구문:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**설명:** 채우기 유형이 단색일 때 첫 번째 반응 표면의 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );Wait( 1 );obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**구문:** obj &lt;&lt; Surface Color2( color )

**설명:** 채우기 유형이 단색일 때 두 번째 반응 표면의 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both Sides" ));obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**구문:** obj &lt;&lt; Surface Color3( color )

**설명:** 채우기 유형이 단색일 때 세 번째 반응 표면의 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**구문:** obj &lt;&lt; Surface Color4( color )

**설명:** 채우기 유형이 단색일 때 네 번째 반응 표면의 색상을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface4( "Both Sides" ));obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**구문:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**설명:** 첫 번째 반응 표면의 채우기 유형을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**구문:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**설명:** 첫 번째 반응 표면의 채우기 유형을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**구문:** obj &lt;&lt; Surface Gradient Type2( "단색"|"연속 그래디언트"|"이산 그래디언트" )

**설명:** 두 번째 반응 표면의 채우기 유형을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));Wait( 1 );obj << Surface Gradient Type2( "Discrete Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**구문:** obj &lt;&lt; Surface Gradient Type3( "단색"|"연속 그래디언트"|"이산 그래디언트" )

**설명:** 세 번째 반응 표면의 채우기 유형을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));Wait( 1 );obj << Surface Gradient Type3( "Solid" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**구문:** obj &lt;&lt; Surface Gradient Type4( "단색"|"연속 그래디언트"|"이산 그래디언트" )

**설명:** 네 번째 반응 표면의 채우기 유형을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface4( "Both Sides" ));Wait( 1 );obj << Surface Gradient Type4( "Discrete Gradients" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**구문:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**설명:** 첫 번째 반응 표면의 그래디언트 선 수를 지정합니다. 이 옵션은 이산 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Surface Color Method( ":Pred Formula ABRASION" ));obj << Surface Gradient Type( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients( 9 );

```

### Surface Gradients1

**구문:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**설명:** 첫 번째 반응 표면의 그래디언트 선 수를 지정합니다. 이 옵션은 이산 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Surface Color Method( ":Pred Formula ABRASION" ));obj << Surface Gradient Type( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients( 9 );

```

### Surface Gradients2

**구문:** obj &lt;&lt; Surface Gradients2( number )

**설명:** 두 번째 반응 표면의 그래디언트 선 수를 지정합니다. 이 옵션은 이산 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ),	Surface Color Method( "Solid", ":Pred Formula MODULUS" ));obj << Surface Gradient Type2( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**구문:** obj &lt;&lt; Surface Gradients3( number )

**설명:** 세 번째 반응 표면의 그래디언트 선 수를 지정합니다. 이 옵션은 이산 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both sides" ),	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" ));obj << Surface Gradient Type3( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**구문:** obj &lt;&lt; Surface Gradients4( number )

**설명:** 네 번째 반응 표면의 그래디언트 선 수를 지정합니다. 이 옵션은 이산 그래디언트가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface4( "Both sides" ),	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" ));obj << Surface Gradient Type4( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients4( 9 );

```

### Surface Lighting

**구문:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**설명:** 첫 번째 반응 표면의 표면 조명을 지정합니다. 이 옵션은 연속 그래디언트 및 이산 그래디언트에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**구문:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**설명:** 첫 번째 반응 표면의 표면 조명을 지정합니다. 이 옵션은 연속 그래디언트 및 이산 그래디언트에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**구문:** obj &lt;&lt; Surface Lighting2( "없음"|"낮은 반사"|"정규" )

**설명:** 두 번째 반응 표면의 표면 조명을 지정합니다. 이 옵션은 연속 그래디언트 및 이산 그래디언트에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Show Surface2( "Both Sides" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**구문:** obj &lt;&lt; Surface Lighting3( "없음"|"낮은 반사"|"정규" )

**설명:** 세 번째 반응 표면의 표면 조명을 지정합니다. 이 옵션은 연속 그래디언트 및 이산 그래디언트에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Surface3( "Both Sides" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**구문:** obj &lt;&lt; Surface Lighting4( "없음"|"낮은 반사"|"정규" )

**설명:** 네 번째 반응 표면의 표면 조명을 지정합니다. 이 옵션은 연속 그래디언트 및 이산 그래디언트에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Show Surface4( "Both Sides" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Lighting4( "Normal" );

```

### Surface Selector

**구문:** obj &lt;&lt; Surface Selector( state=0|1 )

**설명:** &apos;종속 변수&apos; 컨트롤에서 표면 옵션을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));Wait( 1 );obj << Surface Selector( 0 );

```

### X Grid

**구문:** obj &lt;&lt; X Grid( state=0|1 )

**설명:** X 축에 수직인 격자를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << X Grid( 1 );

```

### X Resolution

**구문:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**설명:** 표면 그림을 그리는 데 사용되는 해상도를 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### XRotate

**구문:** obj &lt;&lt; XRotate( degrees )

**설명:** X 축에서 표면 그림을 회전합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << XRotate( 30 );

```

### Y Grid

**구문:** obj &lt;&lt; Y Grid( state=0|1 )

**설명:** Y 축에 수직인 격자를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Y Grid( 1 );

```

### Y Resolution

**구문:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**설명:** 표면 그림을 그리는 데 사용되는 해상도를 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### YRotate

**구문:** obj &lt;&lt; YRotate( degrees )

**설명:** Y 축에서 표면 그림을 회전합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << YRotate( 20 );

```

### Z Grid

**구문:** obj &lt;&lt; Z Grid( state=0|1 )

**설명:** Z 축에 수직인 격자를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Z Grid( 1 );

```

### Z Grid Position

**구문:** obj &lt;&lt; Z Grid Position( fraction )

**설명:** Z 격자를 지정된 백분율로 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Z Grid( 1 );Wait( 1 );obj << Z Grid Position( 0.733 );

```

### ZRotate

**구문:** obj &lt;&lt; ZRotate( degrees )

**설명:** Z 축에서 표면 그림을 회전합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << ZRotate( 45 );

```

## Surface Frame3D

### 연결된 생성자

#### Surface Frame3D

**구문:** Surface Frame3D( &lt;commands passed to Frame3D&gt; )

**설명:** 표시 명령을 3D 그림으로 보냅니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));

```

### 항목 메시지

#### Add Ellipsoid

**구문:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix ) obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means) obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**설명:** 그림에 타원을 그립니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D(	Add Ellipsoid(		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],		[6.55099 2.96919 5.5066],		[0.57829 0.29087 0.53668]	));

```

#### Add Markers

**구문:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**설명:** 그림에 n개의 표식을 그립니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**구문:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**설명:** 그림에 벡터 또는 화살표를 그립니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**구문:** obj &lt;&lt; Get Axes

**설명:** 그림에 축을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Axes );Show( s );

```

#### Get Box

**구문:** obj &lt;&lt; Get Box

**설명:** 그림에 상자 프레임을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Box );Show( s );

```

#### Get Grab Handles

**구문:** obj &lt;&lt; Get Grab Handles

**설명:** 그림에 손잡이 핸들을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Box );Show( s );

```

#### Get Graph Size

**구문:** obj &lt;&lt; Get Graph Size

**설명:** 그래프 크기를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Graph Size );Show( s );

```

#### Get Grids

**구문:** obj &lt;&lt; Get Grids

**설명:** 그림에 격자를 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Grids );Show( s );

```

#### Get Hide Lights Border

**구문:** obj &lt;&lt; Get Hide Lights Border

**설명:** 그림 주위의 조명 테두리의 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));state = obj << Frame3D( Get Hide Lights Border );Show( state );

```

#### Get Line Scale

**구문:** obj &lt;&lt; Get Line Scale

**설명:** 그림에 대한 선 너비를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));w = obj << Frame3D( Get Line Scale );Show( w );

```

#### Get Marker Quality

**구문:** obj &lt;&lt; Get Marker Quality

**설명:** 그림에 대한 형태 및 음영과 같은 표식 특성을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));q = obj << Frame3D( Get Marker Quality );Show( q );

```

#### Get Marker Scale

**구문:** obj &lt;&lt; Get Marker Scale

**설명:** 그림에 대한 표식 크기를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Marker Scale );Show( s );

```

#### Get Marker Transparency

**구문:** obj &lt;&lt; Get Marker Transparency

**설명:** 그림에 대한 표식 투명도를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));t = obj << Frame3D( Get Marker Transparency );Show( t );

```

#### Get Rotation

**구문:** obj &lt;&lt; Get Rotation

**설명:** 프레임에 대한 현재 회전을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));r = obj << Frame3D( Get Rotation() );Show( r );

```

#### Get Text Scale

**구문:** obj &lt;&lt; Get Text Scale

**설명:** 그림에 대한 텍스트 크기를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Text Scale );Show( s );

```

#### Get View Ortho

**구문:** obj &lt;&lt; Get View Ortho

**설명:** 그림에 대한 직교 보기의 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));o = obj << Frame3D( Get View Ortho );Show( o );

```

#### Get View Perspective

**구문:** obj &lt;&lt; Get View Perspective

**설명:** 그림에 대한 보기 투시를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));p = obj << Frame3D( Get View Perspective );Show( p );

```

#### Get View Zoom

**구문:** obj &lt;&lt; Get View Zoom

**설명:** 그림에 대한 현재 확대/축소를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));z = obj << Frame3D( Get View Zoom );Show( z );

```

#### Get Wall Color

**구문:** obj &lt;&lt; Get Wall Color

**설명:** 그림에 대한 벽 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));c = obj << Frame3D( Get Wall Color );Show( c );

```

#### Get Walls

**구문:** obj &lt;&lt; Get Walls

**설명:** 그림에 벽을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));s = obj << Frame3D( Get Walls );Show( s );

```

#### Get X Axis Color

**구문:** obj &lt;&lt; Get X Axis Color

**설명:** 그림에 대한 x 축 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));c = obj << Frame3D( Get X Axis Color );Show( c );

```

#### Get X Axis Label

**구문:** obj &lt;&lt; Get X Axis Label

**설명:** 그림의 X 축에 대한 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));label = obj << Frame3D( Get X Axis Label );Show( label );

```

#### Get Y Axis Color

**구문:** obj &lt;&lt; Get Y Axis Color

**설명:** 그림에 대한 y 축 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));c = obj << Frame3D( Get Y Axis Color );Show( c );

```

#### Get Y Axis Label

**구문:** obj &lt;&lt; Get Y Axis Label

**설명:** 그림의 Y 축에 대한 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));label = obj << Frame3D( Get Y Axis Label );Show( label );

```

#### Get Z Axis Color

**구문:** obj &lt;&lt; Get Z Axis Color

**설명:** 그림에 대한 z 축 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));c = obj << Frame3D( Get Z Axis Color );Show( c );

```

#### Get Z Axis Label

**구문:** obj &lt;&lt; Get Z Axis Label

**설명:** 그림의 Z 축에 대한 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));label = obj << Frame3D( Get Z Axis Label );Show( label );

```

#### Legend

**구문:** obj &lt;&lt; Legend( state=0|1 )

**설명:** 그림에 범례를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),	Show Surface2( Both Sides ));obj << Frame3D( Legend( 0 ) );Wait( 2 );obj << Frame3D( Legend( 1 ) );

```

#### Set Axes

**구문:** obj &lt;&lt; Set Axes( state=0|1 )

**설명:** 그림에 X, Y, Z 축을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**구문:** obj &lt;&lt; Set Box( state=0|1 )

**설명:** 그림에 상자 프레임을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**구문:** obj &lt;&lt; Set Graph Size( x, y )

**설명:** 그래프 크기를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**구문:** obj &lt;&lt; Set Grids( state=0|1 )

**설명:** 그림에 격자를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**구문:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**설명:** 그림 주위에 조명 테두리를 숨기거나 표시합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**구문:** obj &lt;&lt; Set Line Scale( number )

**설명:** 그림의 격자에 대한 선 너비를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**구문:** obj &lt;&lt; Set Marker Quality( number )

**설명:** 그림에 대한 형태 및 음영과 같은 표식 특성을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**구문:** obj &lt;&lt; Set Marker Scale( number )

**설명:** 그림에 대한 표식 크기를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**구문:** obj &lt;&lt; Set Marker Transparency( fraction )

**설명:** 그림에 대한 표식 투명도를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**구문:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**설명:** 그림의 진동 비율을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**구문:** obj &lt;&lt; Set Rotation( X, Y, Z )

**설명:** 지정한 좌표로 프레임을 회전합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**구문:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**설명:** 지정된 축에서 그래프를 스핀합니다. dx 및 dy 값은 점 (sx, sy)로부터의 마우스 델타 움직임입니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**구문:** obj &lt;&lt; Set Text Scale( number )

**설명:** 그림의 축 텍스트에 대한 텍스트 크기를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**구문:** obj &lt;&lt; Set View Ortho( state=0|1 )

**설명:** 그림을 직교로 또는 선형으로 표시합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**구문:** obj &lt;&lt; Set View Perspective( fraction )

**설명:** 그림의 보기 투시를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**구문:** obj &lt;&lt; Set View Zoom( number )

**설명:** 그림에 대한 확대/축소를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set View Zoom( 0.5 ) );Wait( 2 );obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**구문:** obj &lt;&lt; Set Wall Color( number )

**설명:** 그림의 벽 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**구문:** obj &lt;&lt; Set Walls( state=0|1 )

**설명:** 그림에 벽을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**구문:** obj &lt;&lt; Set X Axis Color( color )

**설명:** 그림의 X 축 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**구문:** obj &lt;&lt; Set X Axis Label( string )

**설명:** 그림의 X 축에 대한 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**구문:** obj &lt;&lt; Set Y Axis Color( color )

**설명:** 그림의 Y 축 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**구문:** obj &lt;&lt; Set Y Axis Label( string )

**설명:** 그림의 Y 축에 대한 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**구문:** obj &lt;&lt; Set Z Axis Color( color )

**설명:** 그림의 Z 축 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**구문:** obj &lt;&lt; Set Z Axis Label( string )

**설명:** 그림의 Z 축에 대한 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**구문:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**설명:** 그림의 X 축에 대한 값을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**구문:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**설명:** 그림의 Y 축에 대한 값을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**구문:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**설명:** 그림의 Z 축에 대한 값을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**구문:** obj &lt;&lt; get light active( light number )

**설명:** 그림의 지정된 조명 활성화 샤이닝을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );Show( p );

```

#### get light color

**구문:** obj &lt;&lt; get light color( light number )

**설명:** 그림의 지정된 조명 색상 샤이닝을 목록 {빨간색, 녹색, 파란색}으로 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );Show( c );

```

#### get light position

**구문:** obj &lt;&lt; get light position( light number )

**설명:** 그림의 지정된 조명 위치 샤이닝을 목록 {x, y, z}로 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );Show( p );

```

#### set light active

**구문:** obj &lt;&lt; set light active( light number, state=0|1 )

**설명:** 그림에 지정된 조명 샤이닝을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**구문:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**설명:** 그림의 조명 샤이닝 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**구문:** obj &lt;&lt; set light position( light number, X, Y, Z )

**설명:** 그림의 조명 위치 샤이닝을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

