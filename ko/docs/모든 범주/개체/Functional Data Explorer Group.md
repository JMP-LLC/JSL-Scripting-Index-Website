# Functional Data Explorer Group



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

obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

obj << Data Table Window;

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

t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

t = obj << Get Timing;Show( t );

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

obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

obj << Relaunch Analysis;

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

r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

obj << Save Script to Script Window;

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

obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 연결된 생성자

### Functional Data Explorer Group

**구문:** Functional Data Explorer Group( model1, model2, ... ) Functional Data Explorer Group( model1; model2; ... )

**설명:** 쌓인 데이터 형식의 여러 Y에 대한 그룹 함수 데이터 탐색기 모형입니다.

## 항목 메시지

### AICc

**구문:** obj &lt;&lt; Model Name( AICc ); scrobj &lt;&lt; AICc

**설명:** AICc를 B-스플라인, P-스플라인, Fourier 기저 모형에 대한 모형 선택 기준으로 지정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines( AICc ) );

```

### ARWLS Save Baselines

**구문:** obj &lt;&lt; ARWLS Save Baselines

**JMP추가된 버전:** 19

### ARWLS Save Corrected

**구문:** obj &lt;&lt; ARWLS Save Corrected

**JMP추가된 버전:** 19

### Align 0 to 1

**구문:** obj &lt;&lt; Data Processing( Align 0 to 1 )

**설명:** 0 ~ 1 내에 놓이도록 입력(X) 범위에 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align 0 to 1 ));

```

### Align Maximum

**구문:** obj &lt;&lt; Data Processing( Align Maximum )

**설명:** 관측된 최대 입력 값(X)을 사용하여 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Maximum ));

```

### Align Minimum

**구문:** obj &lt;&lt; Data Processing( Align Minimum )

**설명:** 관측된 최소 입력 값(X)을 사용하여 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align Minimum ));

```

### Align by Function

**구문:** obj &lt;&lt; Data Processing( Align by Function )

**설명:** 각 함수의 범위가 입력(X) 범위 위에 오도록 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Align by Function ));

```

### B Splines

**구문:** obj &lt;&lt; B Splines

**설명:** B-스플라인 모형을 데이터에 적합시킵니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines );

```

### B Splines Model Controls

**구문:** obj &lt;&lt; B Splines Model Controls

**설명:** B-스플라인 모형을 적합시키기 전에 모형 제어 패널을 엽니다. 매듭 수와 스플라인 차수를 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines Model Controls );

```

### BIC

**구문:** obj &lt;&lt; Model Name( BIC ); scrobj &lt;&lt; BIC

**설명:** BIC를 B-스플라인, P-스플라인, Fourier 기저 모형에 대한 모형 선택 기준으로 지정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), P Splines( BIC ) );

```

### Baseline Correction

**구문:** obj &lt;&lt; Baseline Correction

**JMP추가된 버전:** 19

### Center

**구문:** obj &lt;&lt; Data Processing( Center )

**설명:** 결과를 가운데에 맞춥니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Center ));

```

### Custom Save Corrected

**구문:** obj &lt;&lt; Custom Save Corrected

**JMP추가된 버전:** 19

### Direct Functional PCA

**구문:** obj &lt;&lt; Direct Functional PCA

**설명:** 기저 함수 모형을 적합시키지 않고 함수 PCA를 직접 수행합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );obj = dt << Functional Data Explorer(	Y( :Homogeneity Grade ),	X( :T ),	ID( :Formulation ),	Z( :Solvent, :Active, :Water ),	Direct Functional PCA);

```

### Dynamic Time Warping

**구문:** obj &lt;&lt; Data Processing( Dynamic Time Warping( Reference( number ) ) )

**설명:** DTW(동적 시간 뒤틀림)를 사용하여 출력 함수를 정렬합니다. DTW는 둘 이상의 함수를 서로 맞추기 위해 최적의 뒤틀림을 찾는 함수 맞춤 기법입니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Dynamic Time Warping( Reference( 1 ) ) ));

```

### Exp

**구문:** obj &lt;&lt; Data Processing( Exp )

**설명:** 결과의 지수 함수를 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer( Y( :pH ), X( :Time ), ID( :BatchID ), Data Processing( Exp ) );

```

### Filter X

**구문:** obj &lt;&lt; Data Processing( Filter X( [lower, upper] ) )

**설명:** 지정된 구간을 벗어나는 입력(X) 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter X( [5, 50] ) );

```

### Filter Y

**구문:** obj &lt;&lt; Data Processing( Filter Y( [lower, upper] ) )

**설명:** 지정된 구간을 벗어나는 출력(Y) 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Filter Y( [., 100] ) );

```

### Fourier Basis

**구문:** obj &lt;&lt; Fourier Basis

**설명:** 벌점 B-스플라인 모형을 데이터에 적합시킵니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Fourier Basis );

```

### Fourier Basis Model Controls

**구문:** obj &lt;&lt; Fourier Basis Model Controls

**설명:** Fourier 기저 모형을 적합시키기 전에 모형 제어 패널을 엽니다. Fourier 쌍 개수와 주기를 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Fourier Basis Model Controls);

```

### GCV

**구문:** obj &lt;&lt; Model Name( GCV ); scrobj &lt;&lt; GCV

**설명:** GCV(일반화 교차 검증)를 B-스플라인, P-스플라인, Fourier 기저 모형에 대한 모형 선택 기준으로 지정합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Fourier Basis( GCV ) );

```

### Load Targets

**구문:** obj &lt;&lt; Data Processing( Load Targets( "level" ) )

**설명:** 대상 함수를 지정합니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :ID ),	Data Processing( Load Targets( "Bristol, TN" ) ));

```

### Log

**구문:** obj &lt;&lt; Data Processing( Log )

**설명:** 결과의 자연 로그를 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer( Y( :Air ), X( :Time ), ID( :BatchID ), Data Processing( Log ) );

```

### Log X

**구문:** obj &lt;&lt; Data Processing( Log X )

**설명:** 입력의 자연 로그를 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer( Y( :Air ), X( :Time ), ID( :BatchID ), Data Processing( Log X ) );

```

### Logit

**구문:** obj &lt;&lt; Data Processing( Logit )

**설명:** 결과의 로짓 함수를 계산하여 데이터를 변환합니다. 출력 값은 0에서 1 사이여야 합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ),	Data Processing( Logit ));

```

### MSC

**구문:** obj &lt;&lt; Data Processing( MSC )

**설명:** 승법 산포 수정 방법을 데이터에 적용합니다. 이 방법은 각 개별 함수(ID 변수의 수준)에 대해 단순 선형 회귀를 적합시킵니다. 여기서 반응은 함수의 출력 값이고 회귀변수는 평균 함수의 출력 값입니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( MSC ));

```

### Multivariate Curve Resolution

**구문:** obj &lt;&lt; Multivariate Curve Resolution

**설명:** MCR(다변량 곡선 해상도)을 수행합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Negation

**구문:** obj &lt;&lt; Data Processing( Negation )

**설명:** 결과에 음수를 취해 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Negation ));

```

### Nonnegative SVD

**구문:** obj &lt;&lt; Nonnegative SVD

**설명:** 쌓인 함수 행렬에 대해 비음 SVD(특이값 분해)를 수행합니다. 비음 SVD는 스코어와 적재량이 0보다 크거나 같도록 행렬 분해를 제한합니다.

**JMP추가된 버전:** 18

### P Splines

**구문:** obj &lt;&lt; P Splines

**설명:** 벌점 B-스플라인 모형을 데이터에 적합시킵니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), P Splines );

```

### P Splines Model Controls

**구문:** obj &lt;&lt; P Splines Model Controls

**설명:** P-스플라인 모형을 적합시키기 전에 모형 제어 패널을 엽니다. 매듭 수와 스플라인 차수를 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), P Splines Model Controls );

```

### Parametric Save Baselines

**구문:** obj &lt;&lt; Parametric Save Baselines

**JMP추가된 버전:** 19

### Parametric Save Corrected

**구문:** obj &lt;&lt; Parametric Save Corrected

**JMP추가된 버전:** 19

### Peak Finding

**구문:** obj &lt;&lt; Peak Finding

**설명:** 직접 또는 지정된 모수 모형을 사용하여 정상점을 찾고 요약합니다.

**JMP추가된 버전:** 17

### Penalized Nonnegative SVD

**구문:** obj &lt;&lt; Penalized Nonnegative SVD

**설명:** 벌점 비음 SVD를 수행하여 함수 PCA를 생성합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Penalized SVD

**구문:** obj &lt;&lt; Penalized SVD

**설명:** 벌점 SVD를 수행하여 함수 PCA를 생성합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Plot Mean Function

**구문:** obj &lt;&lt; Plot Mean Function( state=0|1 )

**설명:** 요약 보고서에 평균 함수 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Mean Function( 0 );

```

### Plot Median Function

**구문:** obj &lt;&lt; Plot Median Function( state=0|1 )

**설명:** 요약 보고서에 중앙값 함수 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer(	Y( :Temperature ),	X( :Month ),	ID( :Year ),	Plot Median Function( 1 ));

```

### Plot Standard Deviation Function

**구문:** obj &lt;&lt; Plot Standard Deviation Function( state=0|1 )

**설명:** 요약 보고서에 표준편차 함수 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );Wait( 1 );obj << Plot Standard Deviation Function( 0 );

```

### Range 0 to 1

**구문:** obj &lt;&lt; Data Processing( Range 0 to 1 )

**설명:** 0 ~ 1 범위 내에 들어가도록 결과를 척도화합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Range 0 to 1 ));

```

### Reduce

**구문:** obj &lt;&lt; Data Processing( Reduce( Grid( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Bin( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Thin( number ) ) )

**설명:** 다양한 기법 중 하나를 사용하여 입력(X)에 대한 데이터를 줄입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );obj << Data Processing( Reduce( Thin( 2 ) ) );

```

### Remove Last Step

**구문:** obj &lt;&lt; Remove Last Step

**JMP추가된 버전:** 14

### Remove Selected

**구문:** obj &lt;&lt; Data Processing( Remove Selected )

**설명:** 선택한 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION == "USW00024024" );Wait( 1 );obj << Data Processing( Remove Selected );

```

### Remove Unselected

**구문:** obj &lt;&lt; Data Processing( Remove Unselected )

**설명:** 선택 취소한 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );dt << Select Where( :STATION != "USW00024024" );Wait( 1 );obj << Data Processing( Remove Unselected );

```

### Remove Value

**구문:** obj &lt;&lt; Data Processing( Remove Value( number ) )

**설명:** 지정된 반응 값을 가진 관측값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );Wait( 1 );obj << Data Processing( Remove Value( 30 ) );

```

### Remove Zeros

**구문:** obj &lt;&lt; Data Processing( Remove Zeros )

**설명:** 반응 값이 0인 관측값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol ),	X( :Time ),	ID( :BatchID ),	Data Processing( Remove Zeros ));

```

### Row Alignment

**구문:** obj &lt;&lt; Data Processing( Row Alignment )

**설명:** 입력 값을 행 번호로 바꿉니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Row Alignment ));

```

### SNIP Save Baselines

**구문:** obj &lt;&lt; SNIP Save Baselines

**JMP추가된 버전:** 19

### SNIP Save Corrected

**구문:** obj &lt;&lt; SNIP Save Corrected

**JMP추가된 버전:** 19

### SNV

**구문:** obj &lt;&lt; Data Processing( SNV )

**설명:** 표준 정규 변량 방법을 데이터에 적용합니다. 이 방법은 평균 0, 표준편차 1이 되도록 각 개별 함수(ID 변수의 수준)를 중심에 맞추고 척도를 조정하여 출력을 표준화합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( SNV ));

```

### Save Data

**구문:** obj &lt;&lt; Save Data

**설명:** 처리된 데이터를 쌓인 형식의 별도 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol, :Temp, :Molasses Feed ),	X( :Time ),	ID( :BatchID ),	B Splines);obj << Save Data;

```

### Save Summaries

**구문:** obj &lt;&lt; Save Summaries

**설명:** 각 출력(Y)에 대한 각 함수(ID)의 모형 요약 통계량을 저장합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer(	Y( :Ethanol, :Temp, :Molasses Feed ),	X( :Time ),	ID( :BatchID ),	B Splines);obj << Save Summaries;

```

### Savitzky-Golay Filter

**구문:** obj &lt;&lt; Data Processing( "Savitzky-Golay Filter"n )

**설명:** Savitzky-Golay 필터를 각 함수에 적용합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Filter"n ));

```

### Savitzky-Golay First Derivative

**구문:** obj &lt;&lt; Data Processing( "Savitzky-Golay First Derivative"n )

**설명:** Savitzky-Golay 필터에서 1차 도함수를 반환합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay First Derivative"n ));

```

### Savitzky-Golay Second Derivative

**구문:** obj &lt;&lt; Data Processing( "Savitzky-Golay Second Derivative"n )

**설명:** Savitzky-Golay 필터에서 2차 도함수를 반환합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );obj = dt << Functional Data Explorer(	Data Format( Row ),	Y( Column Group( "NMR Spectra" ) ),	ID( :NMR ID ),	Data Processing( "Savitzky-Golay Second Derivative"n ));

```

### Square

**구문:** obj &lt;&lt; Data Processing( Square )

**설명:** 결과의 제곱을 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer( Y( :pH ), X( :Time ), ID( :BatchID ), Data Processing( Square ) );

```

### Square Root

**구문:** obj &lt;&lt; Data Processing( Square Root )

**설명:** 결과의 제곱근을 계산하여 데이터를 변환합니다. 출력 값은 음수가 아니어야 합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );obj = dt << Functional Data Explorer( Y( :pH ), X( :Time ), ID( :BatchID ), Data Processing( Square Root ) );

```

### Standardize

**구문:** obj &lt;&lt; Data Processing( Standardize )

**설명:** 중심화 및 척도화를 통해 출력을 표준화합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer(	Y( :TMAX ),	X( :Week of Year ),	ID( :NAME ),	Data Processing( Standardize ));

```

### Unconstrained MCR

**구문:** obj &lt;&lt; Unconstrained MCR

**설명:** 무제약 MCR(다변량 곡선 해상도)을 수행합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Wavelets

**구문:** obj &lt;&lt; Wavelets

**설명:** 여러 소파동 모형을 데이터에 적합시킵니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다. 데이터 간격이 균등하지 않으면 소파동 루틴이 시작되기 전에 자동으로 격자가 생성됩니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

```

