# Bayesian Optimization



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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Data Table Window;

```

### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 연결된 생성자

### Bayesian Optimization

**구문:** Bayesian Optimization( Y( columns ), X( columns ) )

**설명:** 데이터 테이블을 확대하여 반응을 최적화할 수 있는 요인 설정을 제안합니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## 열

### Iteration

**구문:** obj &lt;&lt; Iteration( column )

**설명:** 배치 라벨 열을 지정합니다. 배치 라벨은 0, 1, 2, ...와 같이 지정되며, 배치 0은 원래 훈련 데이터를 나타냅니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_itercol",	Numeric,	Ordinal,	set values( V Concat( (Repeat( 0, N Rows( dt ) - 10 )), Repeat( 1, 10 ) ) ));obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Iteration( _itercol ));

```

### Run Order

**구문:** obj &lt;&lt; Run Order( column )

**설명:** 관측값 순서를 나타내는 행 번호의 순열 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_runorder", Numeric, Ordinal, set values( 1 :: (N Rows( dt )) ) );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Run Order( _runorder ));

```

### X

**구문:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));

```

## 항목 메시지

### Automatically Generate a Batch

**구문:** obj &lt;&lt; Automatically Generate a Batch( state=0|1 )

**설명:** 자동 후보 집합 생성 및 배치 선택을 실행할지 여부를 나타냅니다. 선택적으로 배치 선택 방법을 지정할 수 있습니다. 이 옵션은 &apos;후보 집합 생성&apos; 옵션과 &apos;배치 자동 선택&apos; 옵션을 동시에 지정하는 것과 같습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 1 ));

```

### Autoselect Batch

**구문:** obj &lt;&lt; Autoselect Batch( state=0|1 )

**설명:** 현재 불러온 후보 집합에서 배치를 선택합니다. 후보 집합을 불러오지 않은 경우 입력 변수 수의 1000배 크기에 해당하는 공간 채움 집합이 생성됩니다. 이 옵션을 사용하여 실행 시 자동 배치 선택을 해제할 수도 있습니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set( Candidate Set Size( 10 ), Include Runs that Do Not Conform to Constraints( 0 ) ),	Autoselect Batch( Batch Size( 1 ), Minimum RSquare( 0.5 ) ));

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set( Candidate Set Size( 10 ), Include Runs that Do Not Conform to Constraints( 0 ) ),	Autoselect Batch( 0 ));

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Automatically Generate a Batch( 0 ));obj << Autoselect Batch( Batch Size( 5 ), Augmentation Method( Space Filling Exploration ) );

```

### Batch Size

**구문:** obj &lt;&lt; Batch Size( number )

**설명:** 실행 시 자동 선택할 배치 크기를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Batch Size( 5 ));

```

### Candidate Set Size

**구문:** obj &lt;&lt; Candidate Set Size( number )

**설명:** 생성할 후보 집합 크기를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Candidate Set Size( 10 ));

```

### Continuous Correlation Type

**구문:** obj &lt;&lt; Continuous Correlation Type( "가우시안"|"Matern 3/2"|"Matern 5/2"|"지수" )

**설명:** 연속형 입력 변수에 사용할 커널을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Continuous Correlation Type( "Matern 5/2" ));

```

### Generate Candidate Set

**구문:** obj &lt;&lt; Generate Candidate Set( Candidate Set Size( number ), &lt;Include Runs that Do Not Conform to Constraints( state = 0|1 )&gt; )

**설명:** 후보 집합을 생성합니다. 후보 집합 크기를 입력하고 데이터 테이블의 선형 제약 조건을 위반하는 점을 허용할지 여부를 지정할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Generate Candidate Set( Candidate Set Size( 10 ), Include Runs that Do Not Conform to Constraints( 0 ) ));

```

### Include Runs that Do Not Conform to Constraints

**구문:** obj &lt;&lt; Include Runs that Do Not Conform to Constraints( state=0|1 )

**설명:** 후보 집합을 생성하거나 불러올 때 데이터 테이블의 선형 제약 조건을 위반하는 점을 포함할지 여부를 지정합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ));

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dtCand = New Table( "Tiretread Candidate Set",	Add Rows( 15 ),	New Column( "SILICA",		Continuous,		Set Values(			[1.2, 1.60825, 0.79175, 0.995875, 1.812375, 1.404125, 0.587625, 0.6896875, 1.5061875, 1.9144375,			1.0979375, 0.8938125, 1.7103125, 1.3020625, 0.4855625]		)	),	New Column( "SILANE",		Continuous,		Set Values(			[50, 41.835, 58.165, 45.9175, 62.2475, 37.7525, 54.0825, 43.87625, 60.20625, 35.71125, 52.04125,			39.79375, 56.12375, 47.95875, 64.28875]		)	),	New Column( "SULFUR",		Continuous,		Set Values(			[2.3, 1.89175, 2.70825, 2.504125, 1.687625, 2.912375, 2.095875, 3.0144375, 2.1979375, 2.6061875,			1.7896875, 1.9938125, 2.8103125, 1.5855625, 2.4020625]		)	));dt << New Script( "Constraint", {:SILICA + :SULFUR <= 3} );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Include Runs that Do Not Conform to Constraints( 0 ),	Load Candidate Set from Data Table( dtCand ));

```

### Minimum RSquare

**구문:** obj &lt;&lt; Minimum RSquare( number )

**설명:** 배치 자동 선택 알고리즘에 필요한 최소 R² 지표를 지정합니다. 베이지안 최적화 플랫폼 시작 창에서 이 옵션은 모형 기반 확대 R² 임계값입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Minimum RSquare( 0.25 ));

```

### Nominal Correlation Type

**구문:** obj &lt;&lt; Nominal Correlation Type( "등상관"|"이상관" )

**설명:** 명목형 입력 변수에 사용할 커널을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Nominal Correlation Type( "Equal Correlations" ));

```

### Ordinal Correlation Type

**구문:** obj &lt;&lt; Ordinal Correlation Type( "등상관"|"이상관"|"잠재 변수" )

**설명:** 순서형 입력 변수에 사용할 커널을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Ordinal Correlation Type( "Equal Correlations" ));

```

### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Save Prediction Formula( Elong );

```

### Set Tab

**구문:** obj &lt;&lt; Set Tab( number )

**설명:** 현재 탭을 지정합니다. 이 인수는 보고서 창에 탭이 표시된 순서에 따라 0은 &apos;모형 요약&apos; 탭, 1은 &apos;배치 선택&apos; 탭 등으로 해석합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( 1 );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << set tab( "ABRASION" );

```

## Bayesian Optimization Batch Customizer > Candidate Set View

### 항목 메시지

#### Export Candidate Set to Data Table

**구문:** obj &lt;&lt; Export Candidate Set to Data Table

**설명:** 현재 불러온 후보 집합을 새 데이터 테이블로 내보냅니다. 원하는 열 그룹을 인수로 지정할 수 있습니다. 열 그룹이 제공되지 않으면 기본적으로 요인 설정을 내보냅니다. 인수가 지정되지 않으면 옵션을 지정할 수 있는 창이 나타납니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table( Go );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table();

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Export Candidate Set to Data Table(	Order Added, Factor Settings, Bayesian Desirability, Bayesian Desirability Std Dev,	Multimodel Prediction Std Dev, MaxPro Space Filling Criterion, Bayesian Desirability Expected Improvement,	Bayesian Desirability Upper Confidence Bound, Training Response Predictions,	Augmented Response Prediction Std Dev, Augmented Response Prediction Confidence Intervals);

```

#### Select Runs

**구문:** obj &lt;&lt; Select Runs( Row Index( [ numbers ] ), &lt;Order Added( [ numbers ]&gt;, &lt;Reason Added( { text } )&gt;, &lt;Replace( 0|1 )&gt; )

**설명:** 후보 집합 테이블에서 현재 배치에 추가할 행을 선택합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Select Runs(		Row Index( [3 5] ),		Order Added( [1 2] ),		Reason Added( {"Custom Reason", "Custom Reason"} ),		Replace( 1 )	));

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	autoselect batch( 0 ));obj << Select Runs(	Row Index( [3 5] ),	Order Added( [1 2] ),	Reason Added( {"Custom Reason", "Custom Reason"} ),	Replace( 0 ));

```

#### Show Table Columns

**구문:** obj &lt;&lt; Show Table Columns( &lt;"Column Group Name"&gt;,... )

**설명:** 후보 집합 테이블에 표시되는 열 그룹을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Show Table Columns( Order Added, Factor Settings, Bayesian Desirability ));

```

## Bayesian Optimization Batch Customizer

### 항목 메시지

#### Add Current Profiler Settings to Batch

**구문:** obj &lt;&lt; Add Current Profiler Settings to Batch

**설명:** 현재 프로파일러 설정을 후보 집합에 추가하고 다음 확대 배치에서 런으로 포함되도록 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Add Current Profiler Settings to Batch;

```

#### Augmented Acquisition Functions Profiler

**구문:** obj &lt;&lt; Augmented Acquisition Functions Profiler( state=0|1 )

**설명:** 각 요인 값의 변화에 따라 각 획득 함수가 어떻게 변하는지 탐색할 수 있는 프로파일러를 표시하거나 숨깁니다. 함수는 현재 배치의 점이 샘플링된다는 가정을 조건으로 합니다. 이 프로파일러는 확대 예측 프로파일러에서 변경된 요인 수준과 만족도 함수를 반영합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Acquisition Functions Profiler( 0 );

```

#### Augmented Prediction Profiler

**구문:** obj &lt;&lt; Augmented Prediction Profiler( state=0|1 )

**설명:** 모형에서 각 요인 값의 변화에 따라 각 열이 어떻게 변하는지 탐색할 수 있는 프로파일러를 표시하거나 숨깁니다. 예측은 현재 배치의 점이 샘플링된다는 가정을 조건으로 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Augmented Prediction Profiler( 0 );

```

#### Deselect All

**구문:** obj &lt;&lt; Deselect All

**설명:** Deselect all points in current batch.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Deselect All;

```

#### Load Candidate Set from Data Table

**구문:** obj &lt;&lt; Load Candidate Set from Data Table

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Load Candidate Set from Data Table());

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Design Experiment/Borehole Latin Hypercube.jmp" );:log y << Set Property( "Response Limits", {Goal( maximize ), Importance( 1 )} );obj = dt << Bayesian Optimization( Y( :log y ), X( :log10 Rw, :log10 R, :Tu, :Tl, :Hu, :Hl, :L, :Kw ) );dt_candidate = Open( "$SAMPLE_DATA/Design Experiment/Borehole Uniform.jmp" );obj << Load Candidate Set from Data Table( dt_candidate );

```

#### Make Table

**구문:** obj &lt;&lt; Make Table

**설명:** Export currently selected batch points to data table based on current settings.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Make Table;

```

#### Make Table Options

**구문:** obj &lt;&lt; Make Table Options( &lt;Location( state = 0|1 )&gt;, &lt;Randomize Runs( state = 0|1 )&gt;, &lt; "Include Option Name"( state = 0|1 ) &gt; , ... )

**설명:** 선택한 배치를 데이터 테이블로 내보낼 때 사용되는 옵션 설정을 선택할 수 있습니다. "Include Option Name" 구문 입력은 &apos;포함 옵션&apos; 메뉴의 모든 옵션을 참조합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Make Table Options(		Location( 1 ),		Randomize Runs( 0 ),		Save desirability function values to columns( 1 ),		Save startup script for next batch selection to data table( 1 ),		Include observed desirabilities( 1 ),		Include original candidate set row indices( 1 ),		Include reason added column( 1 ),		Include predicted response values( 1 ),		Include prediction standard deviations( 1 ),		Include Bayesian desirability expected improvement column( 1 )	));

```

#### Maximize Bayesian Desirability

**구문:** obj &lt;&lt; Maximize Bayesian Desirability

**설명:** 만족도 분포의 사후 평균을 최대화하는 요인 설정을 찾습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;

```

#### Maximize Bayesian Desirability Std Dev

**구문:** obj &lt;&lt; Maximize Bayesian Desirability Std Dev

**설명:** 만족도 분포의 사후 표준편차를 최대화하는 요인 설정을 찾습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability Std Dev;

```

#### Maximize Expected Improvement

**구문:** obj &lt;&lt; Maximize Expected Improvement

**설명:** 베이지안 만족도 지표로 측정된 기대 이익이 가장 큰 요인 설정을 찾습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Expected Improvement;

```

#### Maximize MaxPro Criterion

**구문:** obj &lt;&lt; Maximize MaxPro Criterion

**설명:** MaxPro 기준을 사용하여 최적의 공간 채움 요인 설정을 찾습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize MaxPro Criterion;

```

#### Maximize Multimodel Std Dev

**구문:** obj &lt;&lt; Maximize Multimodel Std Dev

**설명:** 다중 반응 예측 표준편차를 최대화하는 요인 설정을 찾습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Multimodel Std Dev;

```

#### Maximize Upper Confidence Bound

**구문:** obj &lt;&lt; Maximize Upper Confidence Bound

**설명:** 베이지안 만족도 예측의 신뢰 상한이 가장 높은 요인 설정을 찾습니다. 이를 UCB 기준이라고도 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Upper Confidence Bound;

```

#### Restore Best Training Point

**구문:** obj &lt;&lt; Restore Best Training Point

**설명:** 요인 설정을 관측 만족도가 가장 높은 훈련 행의 요인 설정으로 되돌립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ));obj << Maximize Bayesian Desirability;obj << Add Current Profiler Settings to Batch;obj << Restore Best Training Point;

```

## Bayesian Optimization Model Summary

### 항목 메시지

#### All Responses Profiler

**구문:** obj &lt;&lt; All Responses Profiler( state=0|1 )

**설명:** 전체 모형에 대해 각 요인의 변화에 따른 각 열의 변화를 탐색합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	All Responses Profiler( 1 ));

```

## Gaussian Process Model

### 항목 메시지

#### Intercept

**구문:** obj &lt;&lt; Intercept( number )

**설명:** 가우시안 과정 모형 적합을 위해 절편 모수로 사용할 값을 지정합니다. 세타, 너겟, 잔차 및 절편 값이 모두 제공된 경우 해당 값은 고정 값으로 처리됩니다. 일부 값만 제공된 경우에는 주어진 값이 시작 값으로 처리됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Nugget

**구문:** obj &lt;&lt; Nugget( number )

**설명:** 가우시안 과정 모형 적합을 위해 너겟으로 사용할 값을 지정합니다. 세타, 너겟, 잔차 및 절편 값이 모두 제공된 경우 해당 값은 고정 값으로 처리됩니다. 일부 값만 제공된 경우에는 주어진 값이 시작 값으로 처리됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 전체 모형에 대해 각 요인의 변화에 따른 각 열의 변화를 탐색합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab( Y( :MODULUS ), Profiler( 0 ) ));

```

#### Residual

**구문:** obj &lt;&lt; Residual( number )

**설명:** 가우시안 과정 모형 적합을 위해 잔차 모수로 사용할 값을 지정합니다. 세타, 너겟, 잔차 및 절편 값이 모두 제공된 경우 해당 값은 고정 값으로 처리됩니다. 일부 값만 제공된 경우에는 주어진 값이 시작 값으로 처리됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

#### Starting Values

**구문:** obj &lt;&lt; Starting Values( number )

**설명:** 가우시안 과정 모형을 적합하는 데 사용할 시작 값을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Starting Values( Theta Values( {0.5, 0.5, 0.5} ), Nugget( 0.05 ), Residual( 500 ), Intercept( 100 ) )	));

```

#### Theta Values

**구문:** obj &lt;&lt; Theta Values( number )

**설명:** 가우시안 과정 모형 적합을 위해 세타 모수로 사용할 값을 지정합니다. 세타, 너겟, 잔차 및 절편 값이 모두 제공된 경우 해당 값은 고정 값으로 처리됩니다. 일부 값만 제공된 경우에는 주어진 값이 시작 값으로 처리됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );Bayesian Optimization(	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),	X( :SILICA, :SILANE, :SULFUR ),	Response Model Tab(		Y( :ABRASION ),		Theta Values( {0.5, 0.5, 0.5} ),		Nugget( 0.05 ),		Residual( 500 ),		Intercept( 100 )	));

```

