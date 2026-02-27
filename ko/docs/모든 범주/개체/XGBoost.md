# XGBoost



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

### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Copy Script;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Timing;Show( t );

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

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Report

**구문:** obj &lt;&lt; Report; Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Script Window;

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

### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 연결된 생성자

### XGBoost

**구문:** XGBoost(Y( columns ), X( columns ))

**설명:** 극단 그래디언트 부스티드 트리에 대한 예측 모델링 인터페이스입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## 열

### Censor

**구문:** obj = XGBoost(...&lt;Censor( column )&gt;...)

**JMP추가된 버전:** 17

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**구문:** obj = XGBoost(...Factor( column(s) )...)

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**구문:** obj = XGBoost(...&lt;Freq( column )&gt;...)

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**구문:** obj = XGBoost(...Response( column(s) )...)

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**구문:** obj = XGBoost(...&lt;Validation( column(s) )&gt;...)

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**구문:** obj = XGBoost(...&lt;Weight( column )&gt;...)

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**구문:** obj = XGBoost(...X( column(s) )...)

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**구문:** obj = XGBoost(...Y( column(s) )...)

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## 항목 메시지

### Change Variables

**구문:** obj &lt;&lt; Change Variables

**설명:** 후속 모형에 대한 X, Y 및 기타 변수를 변경합니다.

**JMP추가된 버전:** 16

### Compare

**구문:** obj &lt;&lt; Compare

**설명:** XGBoost 비교 지표를 업데이트합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );obj << Compare( Correlation( 1 ) );

```

### Fit

**구문:** obj &lt;&lt; Fit

**설명:** XGBoost 모형을 적합시킵니다. XGBoost 모수 및 적합 규격을 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Get Measures

**구문:** obj &lt;&lt; Get Measures

**JMP추가된 버전:** 16

### Method

**구문:** obj &lt;&lt; Method( "xgboost"|"lightgbm"="xgboost" )

**설명:** Select either XGBoost or LightGBM as a method for gradient boosting fitting. 기본값은 "xgboost"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Method( "lightgbm" ), objective( "regression" ) ) );

```

### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Relaunch Analysis;

```

### Show Details

**구문:** obj &lt;&lt; Show Details( state=0|1 )

**설명:** 상세 정보를 표시합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

```

## XGBoost Compare

### 연결된 생성자

#### XGBoost Compare

**구문:** XGBoost Compare

### 항목 메시지

#### AUC

**구문:** obj &lt;&lt; AUC( state=0|1 )

**설명:** ROC(Receiver Operating Characteristic) 곡선 아래의 면적을 나타내는 AUROC를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### AUPRC

**구문:** obj &lt;&lt; AUPRC( state=0|1 )

**설명:** 정밀도-재현율 곡선 아래 면적 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

#### Accuracy

**구문:** obj &lt;&lt; Accuracy( state=0|1 )

**설명:** 올바른 분류의 비율을 나타내는 정확성을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Censor

**구문:** obj &lt;&lt; Censor( state=0|1 )

**설명:** 중도절단 명령을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

#### Concordance

**구문:** obj &lt;&lt; Concordance( state=0|1 )

**설명:** Harrell C 지수를 나타내고 정렬 효율성 강도를 측정하는 부합성을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

#### Correlation

**구문:** obj &lt;&lt; Correlation( state=0|1 )

**설명:** 선형 관계 강도의 측도를 나타내는 Pearson 상관을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### F1

**구문:** obj &lt;&lt; F1( state=0|1 )

**설명:** 정밀도와 재호출의 조화 평균을 나타내는 F1 스코어를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Features

**구문:** obj &lt;&lt; Features( state=0|1 )

**설명:** 기능 열을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Freq

**구문:** obj &lt;&lt; Freq( state=0|1 )

**설명:** 빈도 열을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### H Measure

**구문:** obj &lt;&lt; H Measure( state=0|1 )

**설명:** 기준에 대한 비율 향상을 측정하는 H 측도를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

#### Hide All Models

**구문:** obj &lt;&lt; Hide All Models

**설명:** 모든 모형을 숨깁니다.

**JMP추가된 버전:** 16

#### LogLoss

**구문:** obj &lt;&lt; LogLoss( state=0|1 )

**설명:** 가능도 기반 손실 함수의 로그를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### MAE

**구문:** obj &lt;&lt; MAE( state=0|1 )

**설명:** 평균 절대 오차를 나타내는 MAE를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### MCC

**구문:** obj &lt;&lt; MCC( state=0|1 )

**설명:** 이항 변수에 대한 Pearson 상관을 나타내는 Matthews 상관계수를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Misclass

**구문:** obj &lt;&lt; Misclass( state=0|1 )

**설명:** 올바르지 않은 분류의 비율을 나타내는 오분류 비율을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Predictors

**구문:** obj &lt;&lt; Predictors( state=0|1 )

**설명:** 예측 변수 열을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Profit

**구문:** obj &lt;&lt; Profit( state=0|1 )

**설명:** 기대 수익을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### RMSE

**구문:** obj &lt;&lt; RMSE( state=0|1 )

**설명:** 제곱근 평균 제곱 오차를 나타내는 RMSE를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### RSquare

**구문:** obj &lt;&lt; RSquare( state=0|1 )

**설명:** 설명된 변동의 비율을 나타내는 R² 값을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Remove Hidden Models

**구문:** obj &lt;&lt; Remove Hidden Models

**설명:** "표시" 상자가 선택되지 않은 모든 모형을 제거합니다.

**JMP추가된 버전:** 16

#### Remove Shown Models

**구문:** obj &lt;&lt; Remove Shown Models

**설명:** "표시" 체크박스가 선택된 모든 모형을 제거하고 나머지 모형을 표시합니다.

**JMP추가된 버전:** 15

#### Response

**구문:** obj &lt;&lt; Response( state=0|1 )

**설명:** 반응 열을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Show All Models

**구문:** obj &lt;&lt; Show All Models

**설명:** 모든 모형을 표시합니다.

**JMP추가된 버전:** 16

#### Training Metrics

**구문:** obj &lt;&lt; Training Metrics( state=0|1 )

**설명:** 모든 훈련 측정 기준을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Validation

**구문:** obj &lt;&lt; Validation( state=0|1 )

**설명:** 검증 열을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Validation Metrics

**구문:** obj &lt;&lt; Validation Metrics( state=0|1 )

**설명:** 모든 검증 측정 기준을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Weight

**구문:** obj &lt;&lt; Weight( state=0|1 )

**설명:** 가중치 열을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

## XGBoost Fit

### 연결된 생성자

#### XGBoost Fit

**구문:** XGBoost Fit

### 항목 메시지

#### Actual by Predicted Plots

**구문:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**설명:** X 축에 예측값이 있고 Y 축에 실제값이 있는 훈련 데이터를 사용하여 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Autotune

**구문:** obj &lt;&lt; Autotune( state=0 )

**설명:** n개 모형을 적합시키기 위해 min/max 모수 설정 내에서 쾌속 유연 채움 설계를 생성합니다. 여기서 n은 런 수입니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 17

#### Confusion Matrices

**구문:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**설명:** 실제 및 예측 수준에 대한 교차표 행렬을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost( Y( :Species ), X( :Sepal length, :Sepal width, :Petal length, :Petal width ), Fit );obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler

**설명:** 예측 함수의 횡단면을 나타내는 대화식 그래프를 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

#### Copy Parameters to Launch

**구문:** obj &lt;&lt; Copy Parameters to Launch

**설명:** 이 모형의 모수를 모형 시작 섹션에 복사합니다.

**JMP추가된 버전:** 16

#### Decision Thresholds

**구문:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**설명:** 결정 임계값 그래프 및 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Fit Details

**구문:** obj &lt;&lt; Fit Details( state=0|1 )

**설명:** 적합 모형에 대한 통계량을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Generate Python Code

**구문:** obj &lt;&lt; Generate Python Code

**설명:** 훈련 및 스코어링을 위한 Python 코드를 생성합니다.

**JMP추가된 버전:** 16

#### Importances

**구문:** obj &lt;&lt; Importances( state=0|1 )

**설명:** 각 예측 변수에 대한 중요도 통계량을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

#### Lift Curves

**구문:** obj &lt;&lt; Lift Curves( state=0|1 )

**설명:** 향상도 곡선 그림을 표시하거나 숨깁니다. 향상도 곡선은 향상도 대 관측값 비율을 표시하고 모형의 예측 능력에 대한 또 다른 보기를 제공합니다.

**JMP추가된 버전:** 15

#### Number of Design Points

**구문:** obj &lt;&lt; Number of Design Points( number=10 )

**설명:** 수행할 설계 조정 런 수를 지정합니다. 큰 문제가 있는 경우 이 값을 비교적 작게 유지하십시오. 기본값은 "10"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**구문:** obj &lt;&lt; Number of Inner Folds( number=2 )

**설명:** 자동 조정 프로세스 중에 사용되는 내포된 내측 폴드 수를 지정합니다. 기본값은 "2"입니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Precision Recall Curves

**구문:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**설명:** 다양한 분류 임계값에 대한 정밀도와 재현율 간의 균형 관계를 그림으로 나타냅니다. 이 곡선은 계층 불균형이 있을 때 도움이 됩니다.

**JMP추가된 버전:** 15

#### Profiler

**구문:** obj &lt;&lt; Profiler

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

**JMP추가된 버전:** 15

#### Publish Prediction Formula

**구문:** obj &lt;&lt; Publish Prediction Formula

**설명:** 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 저장합니다.

**JMP추가된 버전:** 15

#### ROC Curves

**구문:** obj &lt;&lt; ROC Curves( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다.

**JMP추가된 버전:** 15

#### Remove All But This Fit

**구문:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**설명:** 이 모형을 제외한 모든 모형의 보고서와 그림을 제거합니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost( Y( :Species ), X( :Sepal length, :Sepal width, :Petal length, :Petal width ), Fit );Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**구문:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**설명:** 전체 모형 보고서를 제거합니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost( Y( :Species ), X( :Sepal length, :Sepal width, :Petal length, :Petal width ), Fit );Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**구문:** obj &lt;&lt; Save Predicteds

**설명:** 예측값을 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 15

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다. 큰 모형의 경우 계산 속도가 느릴 수 있습니다.

**JMP추가된 버전:** 15

#### Save SHAPs

**구문:** obj &lt;&lt; Save SHAPs

**설명:** Shapley 값을 데이터 테이블에 저장합니다. 이러한 값은 예측을 각 예측 변수에 대한 성분으로 세분합니다.

**JMP추가된 버전:** 17

#### Set Random Seed

**구문:** obj &lt;&lt; Set Random Seed( number=0 )

**설명:** 동일한 시드값을 사용하는 모든 후속 실행이 재현 가능하다고 가정하고 난수 시드값을 특정 값으로 설정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler

**설명:** 예측 함수의 횡단면을 나타내는 대화식 그래프를 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

#### Tree Details

**구문:** obj &lt;&lt; Tree Details( state=0|1 )

**설명:** 각 트리 분할의 붕괴를 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

#### Tuning Design Table

**구문:** Tuning Design Table( "table name" )

**설명:** 일련의 모형을 적합시키는 데 사용되는 모수 설정이 포함된 열린 JMP 데이터 테이블의 이름을 지정합니다. 이 테이블의 열은 모수 이름과 정확히 일치해야 하며, 각 행은 해당 모형 적합에 사용할 모수 값을 포함해야 합니다. 지정되지 않은 모수는 이 대화상자의 해당 값으로 설정됩니다.

**JMP추가된 버전:** 15

#### alpha

**구문:** obj &lt;&lt; alpha( number=0.0 )

**설명:** 가중치에 대한 L1 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**구문:** obj &lt;&lt; alpha_max( number=0.5 )

**설명:** 가중치에 대한 최대 L1 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0.5"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**구문:** obj &lt;&lt; alpha_min( number=0.0 )

**설명:** 가중치에 대한 최소 L1 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### bagging_by_query

**구문:** obj &lt;&lt; bagging_by_query( state=0 )

**설명:** 행별 히스토그램 생성을 우선 적용할지 여부를 지정합니다. 이 옵션을 활성화하면 특히 샘플이 많고, 배깅 비율이 작거나 GOSS 샘플 전략과 연관된 데이터에서 메모리 사용량이 줄어듭니다. 이 옵션은 열별 옵션과 함께 사용할 수 없습니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### bagging_fraction

**구문:** obj &lt;&lt; bagging_fraction( number=1 )

**설명:** 각 반복 동안 표집할 행의 비율을 지정합니다. 이 값은 0에서 1 사이여야 합니다. 이것은 배깅의 한 유형입니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### bagging_fraction_max

**구문:** obj &lt;&lt; bagging_fraction_max( number=1.0 )

**설명:** 각 반복 동안 표집할 행의 최대 비율을 지정합니다. 이 값은 0에서 1 사이여야 합니다. 이것은 배깅의 한 유형입니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_max( 1.0 ) ) );

```

#### bagging_fraction_min

**구문:** obj &lt;&lt; bagging_fraction_min( number=0.3 )

**설명:** 각 반복 동안 표집할 행의 최소 비율을 지정합니다. 이 값은 0에서 1 사이여야 합니다. 이것은 배깅의 한 유형입니다. 기본값은 "0.3"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_min( 0.3 ) ) );

```

#### bagging_freq

**구문:** obj &lt;&lt; bagging_freq( number=0 )

**설명:** 배깅 빈도를 지정합니다. 이 값은 모형 훈련을 위해 훈련 데이터의 새로운 랜덤 표본을 추출하는 반복 횟수를 결정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### bagging_seed

**구문:** obj &lt;&lt; bagging_seed( number=3 )

**설명:** 배깅 난수 생성기에 사용되는 시드값을 지정합니다. 기본값은 "3"입니다.

**JMP추가된 버전:** 19

#### base_score

**구문:** obj &lt;&lt; base_score( number=0.5 )

**설명:** 모든 인스턴스의 초기 예측 스코어, 즉 전역 편향을 지정합니다. 일반적으로 y의 평균을 사용하는 것이 적합합니다. 기본값은 "0.5"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### bin_construct_sample_cnt

**구문:** obj &lt;&lt; bin_construct_sample_cnt( number=200000 )

**설명:** 피처의 이산형 계급을 구성하기 위해 샘플링되는 관측값 수를 지정합니다. 이 값을 작게 설정하면 예기치 않은 오류가 발생하고 정확도가 떨어질 수 있습니다. 기본값은 "200000"입니다.

**JMP추가된 버전:** 19

#### boost_from_average

**구문:** obj &lt;&lt; boost_from_average( state=1 )

**설명:** 초기 예측값을 반응 변수의 평균으로 설정할지 아니면 상수 0으로 설정할지 지정합니다. 이 옵션은 회귀, 이항, 다중 클래스 및 교차 엔트로피 목적 함수에서만 사용됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

#### booster

**구문:** obj &lt;&lt; booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**설명:** 사용할 부스터를 지정합니다. 기본값은 "gbtree"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### boosting

**구문:** obj &lt;&lt; boosting( "gbdt"|"rf"|"dart"="gbdt" )

**설명:** 모형 훈련 중에 사용되는 부스트 전략을 지정합니다. 기본값은 "gbdt"입니다.

**JMP추가된 버전:** 19

#### cat_l2

**구문:** obj &lt;&lt; cat_l2( number=10 )

**설명:** 범주형 피처의 L2 정규화 값을 지정합니다. 기본값은 "10"입니다.

**JMP추가된 버전:** 19

#### cat_l2_max

**구문:** obj &lt;&lt; cat_l2_max( number=15 )

**설명:** 범주형 피처의 최대 L2 정규화 값을 지정합니다. 기본값은 "15"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_max( 2.0 ) ) );

```

#### cat_l2_min

**구문:** obj &lt;&lt; cat_l2_min( number=5 )

**설명:** 범주형 피처의 최소 L2 정규화 값을 지정합니다. 기본값은 "5"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_min( 0.0 ) ) );

```

#### cat_smooth

**구문:** obj &lt;&lt; cat_smooth( number=10 )

**설명:** 범주형 피처, 특히 관측값이 적은 범주에서 잡음 영향을 줄이는 데 사용되는 정규화 값을 지정합니다. 기본값은 "10"입니다.

**JMP추가된 버전:** 19

#### cegb_penalty_split

**구문:** obj &lt;&lt; cegb_penalty_split( number=0 )

**설명:** 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### cegb_tradeoff

**구문:** obj &lt;&lt; cegb_tradeoff( number=1 )

**설명:** 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### colsample_bylevel

**구문:** obj &lt;&lt; colsample_bylevel( number=1.0 )

**설명:** 각 수준에 대해 표집할 열의 비율을 지정합니다. 표집은 트리에서 새 깊이 수준에 도달할 때마다 한 번 수행됩니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**구문:** obj &lt;&lt; colsample_bynode( number=1.0 )

**설명:** 각 노드(분할)에 대해 표집할 열의 비율을 지정합니다. 표집은 새 분할이 실행될 때마다 한 번 수행됩니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**구문:** obj &lt;&lt; colsample_bytree( number=1.0 )

**설명:** 각 트리를 생성할 때 표집할 열의 비율을 지정합니다. 표집은 각 트리에 대해 한 번 수행됩니다. 이 값은 0에서 1 사이여야 합니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**구문:** obj &lt;&lt; colsample_bytree_max( number=1.0 )

**설명:** 각 트리를 생성할 때 표집할 열의 최대 비율을 지정합니다. 표집은 각 트리에 대해 한 번 수행됩니다. 이 값은 0에서 1 사이여야 합니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**구문:** obj &lt;&lt; colsample_bytree_min( number=0.5 )

**설명:** 각 트리를 생성할 때 표집할 열의 최소 비율을 지정합니다. 표집은 각 트리에 대해 한 번 수행됩니다. 이 값은 0에서 1 사이여야 합니다. 기본값은 "0.5"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### data_random_seed

**구문:** obj &lt;&lt; data_random_seed( number=1 )

**설명:** 히스토그램 계급을 구성하기 위해 데이터를 샘플링할 때 난수 생성기에 사용되는 시드값을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### data_sample_strategy

**구문:** obj &lt;&lt; data_sample_strategy( "bagging"|"goss"="bagging" )

**설명:** 각 부스트 반복에서 사용할 샘플링 전략을 지정합니다. 기본값은 "bagging"입니다.

**JMP추가된 버전:** 19

#### deterministic

**구문:** obj &lt;&lt; deterministic( state=0 )

**설명:** 결과를 재현할 수 있음을 지정합니다. 이 옵션을 true로 설정하면 동일한 데이터 샘플과 파라미터에 서로 다른 수의 스레드를 사용하더라도 결과가 안정적으로 유지됩니다. 이 옵션은 재현성에 유용합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### device_type

**구문:** obj &lt;&lt; device_type( "cpu"|"gpu"="cpu" )

**설명:** CPU 또는 GPU 중 사용할 장치를 지정합니다. 기본값은 "cpu"입니다.

**JMP추가된 버전:** 19

#### drop_rate

**구문:** obj &lt;&lt; drop_rate( number=0.1 )

**설명:** DART 부스트의 중도탈락 과정에서 제거할 이전 트리의 비율을 지정합니다. 기본값은 "0.1"입니다.

**JMP추가된 버전:** 19

#### drop_seed

**구문:** obj &lt;&lt; drop_seed( number=4 )

**설명:** DART 부스트에서 중도탈락 절차에 사용되는 시드값을 지정합니다. 기본값은 "4"입니다.

**JMP추가된 버전:** 19

#### early_stopping_min_delta

**구문:** obj &lt;&lt; early_stopping_min_delta( number=0 )

**설명:** 각 반복에서 훈련 지표가 개선되어야 하는 최소값을 지정합니다. 이 값을 충족하지 않으면 조기 중지를 사용할 때 훈련이 중지됩니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### early_stopping_round

**구문:** obj &lt;&lt; early_stopping_round( number=0 )

**설명:** 훈련 지표가 개선되지 않는 동안 훈련을 계속할 최대 반복 횟수를 지정합니다. 값이 0이면 조기 중지를 사용하지 않음을 의미합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### enable_bundle

**구문:** obj &lt;&lt; enable_bundle( state=1 )

**설명:** EFB(Exclusive Feature Bundling)를 사용할지 여부를 지정합니다. 이 옵션을 false로 설정하면 희소 데이터 집합의 훈련 속도가 느려질 수 있습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

#### eval_at

**구문:** obj &lt;&lt; eval_at( text=1,2,3,4,5 )

**설명:** NDGG 또는 MAP 지표로 모형 순위를 정할 때 사용할 경계 점을 지정합니다. 기본값은 "1,2,3,4,5"입니다.

**JMP추가된 버전:** 19

#### eval_metric

**구문:** obj &lt;&lt; eval_metric( text )

**설명:** 반복 기록 그림에 표시되지만 실제 모형 적합에는 영향을 주지 않는 측정 기준을 지정합니다. 목적 함수에 해당하는 기본 측정 기준의 경우 이 값을 비워 두거나 rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik 중 하나를 지정하십시오.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### extra_seed

**구문:** obj &lt;&lt; extra_seed( number=6 )

**설명:** 추가 트리 옵션이 지정된 경우 임계값 선택에 사용되는 시드값을 지정합니다. 기본값은 "6"입니다.

**JMP추가된 버전:** 19

#### extra_trees

**구문:** obj &lt;&lt; extra_trees( state=0 )

**설명:** 극단적 랜덤 트리를 사용할지 여부를 지정합니다. 이 옵션을 사용하면 각 피처에 대해 최적의 분할을 찾기 위해 가능한 모든 분할 지점을 평가하는 대신 각 노드에서 피처의 부분집합을 무작위로 선택합니다. 선택된 각 피처에 대해서는 분할 노드를 평가하기 위한 임계값 하나를 무작위로 선택합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### fair_c

**구문:** obj &lt;&lt; fair_c( number=1 )

**설명:** 공정성을 고려한 목적 함수의 평활도를 제어하는 파라미터를 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### feature_fraction

**구문:** obj &lt;&lt; feature_fraction( number=1 )

**설명:** 각 트리를 생성할 때 표집할 열의 비율을 지정합니다. 표집은 각 트리에 대해 한 번 수행됩니다. 이 값은 0에서 1 사이여야 합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### feature_fraction_bynode

**구문:** obj &lt;&lt; feature_fraction_bynode( number=1 )

**설명:** 훈련 중 무작위로 선택되는 피처의 비율을 지정합니다. 값이 0.75이면 훈련에 사용할 피처의 75%가 무작위로 선택됨을 의미합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### feature_fraction_max

**구문:** obj &lt;&lt; feature_fraction_max( number=1.0 )

**설명:** 각 트리를 생성할 때 표집할 열의 최대 비율을 지정합니다. 표집은 각 트리에 대해 한 번 수행됩니다. 이 값은 0에서 1 사이여야 합니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_max( 1.0 ) ) );

```

#### feature_fraction_min

**구문:** obj &lt;&lt; feature_fraction_min( number=0.2 )

**설명:** 각 트리를 생성할 때 표집할 열의 최소 비율을 지정합니다. 표집은 각 트리에 대해 한 번 수행됩니다. 이 값은 0에서 1 사이여야 합니다. 기본값은 "0.2"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_min( 0.2 ) ) );

```

#### feature_fraction_seed

**구문:** obj &lt;&lt; feature_fraction_seed( number=2 )

**설명:** 피처 비율 난수 생성기에 사용되는 시드값을 지정합니다. 기본값은 "2"입니다.

**JMP추가된 버전:** 19

#### feature_pre_filter

**구문:** obj &lt;&lt; feature_pre_filter( state=1 )

**설명:** 각 잎 노드의 최소 관측값 수에 지정된 값을 기반으로 분할할 수 없는 피처를 무시할지 여부를 지정합니다. 이 옵션을 false로 설정하면 훈련 속도가 느려질 수 있습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

#### feature_selector

**구문:** obj &lt;&lt; feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**설명:** 선형 부스터에 대한 변수 선택 및 정렬 방법을 지정합니다. 기본값은 "cyclic"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Booster( "gblinear" ), Fit( feature_selector( "cyclic" ) ) );

```

#### force_col_wise

**구문:** obj &lt;&lt; force_col_wise( state=0 )

**설명:** 열별 히스토그램 생성을 우선 적용할지 여부를 지정합니다. 이 옵션을 활성화하면 특히 피처가 많은 데이터에서 메모리 사용량이 줄어듭니다. 이 옵션은 행별 옵션과 함께 사용할 수 없습니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### force_row_wise

**구문:** obj &lt;&lt; force_row_wise( state=0 )

**설명:** 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### gamma

**구문:** obj &lt;&lt; gamma( number=0.0 )

**설명:** 트리의 잎 노드에 추가 파티션을 만드는 데 필요한 최소 손실 감소를 지정합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### gpu_device_id

**구문:** obj &lt;&lt; gpu_device_id( number=-1 )

**설명:** GPU 사용 시 장치 번호를 지정합니다. 기본값은 "-1"입니다.

**JMP추가된 버전:** 19

#### gpu_platform_id

**구문:** obj &lt;&lt; gpu_platform_id( number=-1 )

**설명:** GPU 사용 시 플랫폼 번호를 지정합니다. 기본값은 "-1"입니다.

**JMP추가된 버전:** 19

#### gpu_use_dp

**구문:** obj &lt;&lt; gpu_use_dp( state=0 )

**설명:** GPU에서 배정밀도 연산을 사용할지 여부를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### grow_policy

**구문:** obj &lt;&lt; grow_policy( "depthwise"|"lossguide"="depthwise" )

**설명:** 트리에 새 노드를 추가하는 방법을 지정합니다. 현재 이 옵션은 tree_method=hist인 경우에만 적용됩니다. 기본값은 "depthwise"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### histogram_pool_size

**구문:** obj &lt;&lt; histogram_pool_size( number=-1 )

**설명:** 과거 히스토그램의 최대 메모리 크기(MB)를 지정합니다. 기본값은 "-1"입니다.

**JMP추가된 버전:** 19

#### interaction_constraints

**구문:** obj &lt;&lt; interaction_constraints( text )

**설명:** 피처 교호작용 제약 조건을 대괄호를 사용하여 내포된 피처 인덱스 목록으로 지정합니다. 함께 그룹화된 피처끼리만 상호 작용할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( interaction_constraints( "[[0,1]]" ) ) );

```

#### is_enable_sparse

**구문:** obj &lt;&lt; is_enable_sparse( state=1 )

**설명:** 희소 최적화를 활성화할지 여부를 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

#### is_unbalance

**구문:** obj &lt;&lt; is_unbalance( state=0 )

**설명:** 이항 및 다중 클래스 회귀에서 훈련 데이터 집합이 불균형한지 여부를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### iterations

**구문:** obj &lt;&lt; iterations( number=30 )

**설명:** 부스트 반복 수를 지정합니다. 기본값은 "30"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**구문:** obj &lt;&lt; iterations_max( number=100 )

**설명:** 부스트 반복의 최대 수를 지정합니다. 기본값은 "100"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**구문:** obj &lt;&lt; iterations_min( number=20 )

**설명:** 부스트 반복의 최소 수를 지정합니다. 기본값은 "20"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**구문:** obj &lt;&lt; lambda( number=1.0 )

**설명:** 가중치에 대한 L2 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_l1

**구문:** obj &lt;&lt; lambda_l1( number=0 )

**설명:** 가중치에 대한 L1 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### lambda_l1_max

**구문:** obj &lt;&lt; lambda_l1_max( number=2.0 )

**설명:** 가중치에 대한 최대 L1 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "2.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_max( 2.0 ) ) );

```

#### lambda_l1_min

**구문:** obj &lt;&lt; lambda_l1_min( number=0.0 )

**설명:** 가중치에 대한 최소 L1 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_min( 0.0 ) ) );

```

#### lambda_l2

**구문:** obj &lt;&lt; lambda_l2( number=0 )

**설명:** 가중치에 대한 L2 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### lambda_l2_max

**구문:** obj &lt;&lt; lambda_l2_max( number=2.0 )

**설명:** 가중치에 대한 최대 L2 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "2.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_max( 2.0 ) ) );

```

#### lambda_l2_min

**구문:** obj &lt;&lt; lambda_l2_min( number=0.0 )

**설명:** 가중치에 대한 최소 L2 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_min( 0.0 ) ) );

```

#### lambda_max

**구문:** obj &lt;&lt; lambda_max( number=2.0 )

**설명:** 가중치에 대한 최대 L2 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "2.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**구문:** obj &lt;&lt; lambda_min( number=0.0 )

**설명:** 가중치에 대한 최소 L2 정규화 항을 지정합니다. 이 값을 늘리면 더 보수적인 모형이 생성됩니다. 이 값은 음수가 아니어야 합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### lambdarank_norm

**구문:** obj &lt;&lt; lambdarank_norm( state=1 )

**설명:** 서로 다른 쿼리에 대한 람다 값을 정규화하여 불균형 데이터의 성능을 개선할지 여부를 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

#### lambdarank_position_bias_regularization

**구문:** obj &lt;&lt; lambdarank_position_bias_regularization( number=0 )

**설명:** LambdaRank 목적 함수에서 위치 정보 편향을 제어하는 값을 지정합니다. 값이 클수록 추론된 위치 편향 요인이 감소합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### lambdarank_truncation_level

**구문:** obj &lt;&lt; lambdarank_truncation_level( number=30 )

**설명:** LambdaRank 목적 함수를 위한 훈련 중 모형이 집중해야 할 상위 결과 수를 제어하는 파라미터를 지정합니다. 기본값은 "30"입니다.

**JMP추가된 버전:** 19

#### learning_rate

**구문:** obj &lt;&lt; learning_rate( number=0.3 )

**설명:** 학습률을 지정합니다. 학습률이 낮을수록 더 잘 적합되지만 수렴하려면 추가 반복이 필요합니다. 반면에 학습률이 높으면 더 빨리 적합됩니다. 기본값은 "0.3"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**구문:** obj &lt;&lt; learning_rate_max( number=0.4 )

**설명:** 최대 학습률을 지정합니다. 학습률이 낮을수록 더 잘 적합되지만 수렴하려면 추가 반복이 필요합니다. 반면에 학습률이 높으면 더 빨리 적합됩니다. 기본값은 "0.4"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**구문:** obj &lt;&lt; learning_rate_min( number=0.05 )

**설명:** 최소 학습률을 지정합니다. 학습률이 낮을수록 더 잘 적합되지만 수렴하려면 추가 반복이 필요합니다. 반면에 학습률이 높으면 더 빨리 적합됩니다. 기본값은 "0.05"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### linear_lambda

**구문:** obj &lt;&lt; linear_lambda( number=0.0 )

**설명:** 선형 트리의 정규화 파라미터를 지정합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 19

#### linear_tree

**구문:** obj &lt;&lt; linear_tree( state=0 )

**설명:** 조각별 선형 그래디언트 부스트 트리를 적합할지 여부를 지정합니다. 분할은 일반적인 방식으로 선택되지만 각 잎 노드에서 모형은 상수 대신 선형입니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### max_bin

**구문:** obj &lt;&lt; max_bin( number=256 )

**설명:** 연속형 변수를 포함할 이산 계급의 최대 수를 지정합니다. 이 옵션은 tree_method=hist에만 적용됩니다. 기본값은 "256"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_bin_by_feature

**구문:** obj &lt;&lt; max_bin_by_feature( text )

**설명:** 각 피처의 최대 계급 수를 지정합니다.

**JMP추가된 버전:** 19

#### max_cat_threshold

**구문:** obj &lt;&lt; max_cat_threshold( number=32 )

**설명:** 범주형 피처를 분할할 때 고려할 최대 고유 범주 수의 임계값을 지정합니다. 값이 클수록 최적의 범주형 분할을 찾기 위한 검색 범위가 더 넓어지지만 훈련 시간이 길어집니다. 기본값은 "32"입니다.

**JMP추가된 버전:** 19

#### max_cat_to_onehot

**구문:** obj &lt;&lt; max_cat_to_onehot( number=4 )

**설명:** Specifies the maximum number of categories that a categorical feature can have to use the one-vs-other split algorithm. Categorical features with more than the maximum number of categories are handled by a different algorithm. 기본값은 "4"입니다.

**JMP추가된 버전:** 19

#### max_delta_step

**구문:** obj &lt;&lt; max_delta_step( number=0.0 )

**설명:** 각 잎 출력이 얻을 수 있는 최대 델타 단계를 지정합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**구문:** obj &lt;&lt; max_depth( number=6 )

**설명:** 트리의 최대 깊이를 지정합니다. 이 값은 정수여야 합니다. 깊이가 증가함에 따라 복잡성도 증가합니다. max_depth가 큰 모형은 과대적합 위험이 더 큽니다. 기본값은 "6"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**구문:** obj &lt;&lt; max_depth_max( number=8 )

**설명:** 최대 트리의 최대 깊이를 지정합니다. 이 값은 정수여야 합니다. 깊이가 증가함에 따라 복잡성도 증가합니다. 깊이가 2^depth 이상인 모형은 과대적합 위험이 더 큽니다. 기본값은 "8"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**구문:** obj &lt;&lt; max_depth_min( number=1 )

**설명:** 최소 트리의 최대 깊이를 지정합니다. 이 값은 정수여야 합니다. 깊이가 증가함에 따라 복잡성도 증가합니다. 깊이가 2^depth 이상인 모형은 과대적합 위험이 더 큽니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_drop

**구문:** obj &lt;&lt; max_drop( number=50 )

**설명:** 각 DART 부스트 반복에서 제거할 최대 트리 수를 지정합니다. 기본값은 "50"입니다.

**JMP추가된 버전:** 19

#### max_leaves

**구문:** obj &lt;&lt; max_leaves( number=0 )

**설명:** 추가할 최대 노드 수를 지정합니다. 이 옵션은 grow_policy=lossguide에만 적용됩니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### metric

**구문:** obj &lt;&lt; metric( "default"|"l1"|"l2"|"rmse"|"quantile"|"mape"|"huber"|"fair"|"poisson"|"gamma"|"gamma_deviance"|"tweedie"|"ndcg"|"map"|"auc"|"average_precision"|"binary_logloss"|"binary_error"|"auc_mu"|"multi_logloss"|"multi_error"|"cross_entropy"|"cross_entropy_lambda"|"kulback_leibler"="default" )

**설명:** 훈련 데이터 집합과 검증 데이터 집합에서 모두 평가되는 지표를 지정합니다. 기본값은 "default"입니다.

**JMP추가된 버전:** 19

#### min_child_weight

**구문:** obj &lt;&lt; min_child_weight( number=1.0 )

**설명:** 하위 항목에 필요한 인스턴스 가중치의 최소 합을 지정합니다(헤시안). 이 값은 각 잎의 최소 크기입니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**구문:** obj &lt;&lt; min_child_weight_max( number=3.0 )

**설명:** 하위 항목에 필요한 인스턴스 가중치의 최대 합을 지정합니다(헤시안). 이 값은 각 잎의 최대 크기입니다. 기본값은 "3.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**구문:** obj &lt;&lt; min_child_weight_min( number=1.0 )

**설명:** 하위 항목에 필요한 인스턴스 가중치의 최소 합을 지정합니다(헤시안). 이 값은 각 잎의 최소 크기입니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### min_data_in_bin

**구문:** obj &lt;&lt; min_data_in_bin( number=3 )

**설명:** 각 계급에 포함되는 최소 관측값 수를 지정합니다. 기본값은 "3"입니다.

**JMP추가된 버전:** 19

#### min_data_in_leaf

**구문:** obj &lt;&lt; min_data_in_leaf( number=20 )

**설명:** 각 잎 노드의 최소 관측값 수를 지정합니다. 기본값은 "20"입니다.

**JMP추가된 버전:** 19

#### min_data_per_group

**구문:** obj &lt;&lt; min_data_per_group( number=100 )

**설명:** 범주형 피처에서 범주형 그룹별 최소 관측값 수를 지정합니다. 기본값은 "100"입니다.

**JMP추가된 버전:** 19

#### min_gain_to_split

**구문:** obj &lt;&lt; min_gain_to_split( number=0 )

**설명:** 트리의 최대 깊이를 지정합니다. 이 값은 정수여야 합니다. 깊이가 증가함에 따라 복잡성도 증가합니다. max_depth가 큰 모형은 과대적합 위험이 더 큽니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### min_sum_hessian_in_leaf

**구문:** obj &lt;&lt; min_sum_hessian_in_leaf( number=0.001 )

**설명:** 하위 항목에 필요한 인스턴스 가중치의 최소 합을 지정합니다(헤시안). 이 값은 각 잎의 최소 크기입니다. 기본값은 "0.001"입니다.

**JMP추가된 버전:** 19

#### min_sum_hessian_in_leaf_max

**구문:** obj &lt;&lt; min_sum_hessian_in_leaf_max( number=10.0 )

**설명:** 하위 항목에 필요한 인스턴스 가중치의 최대 합을 지정합니다(헤시안). 이 값은 각 잎의 최대 크기입니다. 기본값은 "10.0"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_max( 10.0 ) ) );

```

#### min_sum_hessian_in_leaf_min

**구문:** obj &lt;&lt; min_sum_hessian_in_leaf_min( number=0.5 )

**설명:** 하위 항목에 필요한 인스턴스 가중치의 최소 합을 지정합니다(헤시안). 이 값은 각 잎의 최소 크기입니다. 기본값은 "0.5"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_min( 0.5 ) ) );

```

#### monotone_constraints

**구문:** obj &lt;&lt; monotone_constraints( text=None )

**설명:** 각 피처에 대한 단조성 제약 조건을 지정합니다. 제약 조건은 괄호 안에 쉼표로 구분된 값 목록을 사용하여 지정해야 합니다. 여기서 -1은 음수, 1은 양수, 0은 제약 없음을 나타냅니다. 기본값은 "None"입니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### monotone_constraints_method

**구문:** obj &lt;&lt; monotone_constraints_method( "basic"|"intermediate"|"advanced"="basic" )

**설명:** 제약 조건 적용 시 단조 제약 조건의 방법을 지정합니다. 기본값은 "basic"입니다.

**JMP추가된 버전:** 19

#### monotone_penalty

**구문:** obj &lt;&lt; monotone_penalty( number=0 )

**설명:** 제약 조건 적용 시 단조 제약 조건의 엄격성을 지정합니다. 값 K를 지정하면 트리의 처음 K개 수준에서는 단조 분할이 허용되지 않습니다. 값이 클수록 초기 트리 생성 과정에서 더 큰 벌점이 적용됩니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### multi_error_top_k

**구문:** obj &lt;&lt; multi_error_top_k( number=1 )

**설명:** 다중 클래스 분류에서 상위 k개 다중 오류 지표의 임계값을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### neg_bagging_fraction

**구문:** obj &lt;&lt; neg_bagging_fraction( number=1 )

**설명:** 불균형 이항 회귀에서 음성 표본 추출 과정을 조정하는 값을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### normalize_type

**구문:** obj &lt;&lt; normalize_type( "tree"|"forest"="tree" )

**설명:** DART 부스터에 대한 정규화 알고리즘 유형을 지정합니다. 기본값은 "tree"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( normalize_type( "tree" ) ) );

```

#### nthread

**구문:** obj &lt;&lt; nthread( number=0 )

**설명:** XGBoost를 실행하는 데 사용되는 병렬 스레드 수를 지정합니다. 기본적으로 모든 스레드를 사용할 수 있습니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_grad_quant_bins

**구문:** obj &lt;&lt; num_grad_quant_bins( number=4 )

**설명:** 양자화 그래디언트를 사용할 때 그래디언트 및 헤시안 행렬의 양자화를 위한 계급 수를 지정합니다. 값이 클수록 양자화 훈련 결과가 최대 정밀도 훈련에 더 가까워집니다. 기본값은 "4"입니다.

**JMP추가된 버전:** 19

#### num_iteration_predict

**구문:** obj &lt;&lt; num_iteration_predict( number=-1 )

**설명:** 예측을 위한 반복 횟수를 지정합니다. 기본값은 "-1"입니다.

**JMP추가된 버전:** 19

#### num_iterations

**구문:** obj &lt;&lt; num_iterations( number=100 )

**설명:** 부스트 반복 수를 지정합니다. 기본값은 "100"입니다.

**JMP추가된 버전:** 19

#### num_iterations_max

**구문:** obj &lt;&lt; num_iterations_max( number=100 )

**설명:** 부스트 반복의 최대 수를 지정합니다. 기본값은 "100"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_max( 100 ) ) );

```

#### num_iterations_min

**구문:** obj &lt;&lt; num_iterations_min( number=20 )

**설명:** 부스트 반복의 최소 수를 지정합니다. 기본값은 "20"입니다.

**JMP추가된 버전:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_min( 20 ) ) );

```

#### num_leaves

**구문:** obj &lt;&lt; num_leaves( number=31 )

**설명:** 각 트리의 최대 잎 노드 수를 지정합니다. 기본값은 "31"입니다.

**JMP추가된 버전:** 19

#### num_parallel_tree

**구문:** obj &lt;&lt; num_parallel_tree( number=1 )

**설명:** 병렬로 증가할 부스티드 트리의 수를 지정합니다. 그런 다음 결과 평균이 계산됩니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### num_threads

**구문:** obj &lt;&lt; num_threads( number=0 )

**설명:** 스레드 수를 지정합니다. 속도를 최적화하려면 이 값을 CPU 코어 수로 설정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### objective

**구문:** obj &lt;&lt; objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**설명:** 모형 적합을 위해 최적화할 함수를 지정합니다. 함수는 반응의 모델링 유형과 일치해야 합니다. 기본값은 "reg:squarederror"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### objective_seed

**구문:** obj &lt;&lt; objective_seed( number=5 )

**설명:** Specifies the seed that is used in the random number generator for the objective parameter. 기본값은 "5"입니다.

**JMP추가된 버전:** 19

#### one_drop

**구문:** obj &lt;&lt; one_drop( number=0 )

**설명:** DART 부스터에서 이 플래그가 활성화되면 중도탈락 중에 하나 이상의 트리가 항상 삭제됩니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### other_rate

**구문:** obj &lt;&lt; other_rate( number=0.1 )

**설명:** GOSS 데이터 샘플링 전략에서 그래디언트가 작은 데이터의 유지 비율을 지정합니다. 기본값은 "0.1"입니다.

**JMP추가된 버전:** 19

#### path_smooth

**구문:** obj &lt;&lt; path_smooth( number=0 )

**설명:** 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### poisson_max_delta_step

**구문:** obj &lt;&lt; poisson_max_delta_step( number=0.7 )

**설명:** Poisson 모형에서 잎의 최대 예측 기여도를 제한하는 값을 지정합니다. 기본값은 "0.7"입니다.

**JMP추가된 버전:** 19

#### pos_bagging_fraction

**구문:** obj &lt;&lt; pos_bagging_fraction( number=1 )

**설명:** 불균형 이항 회귀에서 양성 표본 추출 과정을 조정하는 값을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### pred_early_stop

**구문:** obj &lt;&lt; pred_early_stop( state=0 )

**설명:** 분류 및 순위 작업에서 예측 조기 중지를 적용할지 여부를 지정합니다. 이 옵션을 true로 설정하면 예측 속도는 빨라지지만 정확성에 영향을 줄 수 있습니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### pred_early_stop_freq

**구문:** obj &lt;&lt; pred_early_stop_freq( number=10 )

**설명:** 예측 조기 중지가 지정된 경우 예측 조기 중지 확인 빈도를 지정합니다. 기본값은 "10"입니다.

**JMP추가된 버전:** 19

#### pred_early_stop_margin

**구문:** obj &lt;&lt; pred_early_stop_margin( number=10 )

**설명:** Specifies the threshold margin in prediction early stopping when prediction early stopping is specified. This parameter enables the prediction process to stop early if the margin is far enough from the threshold. 기본값은 "10"입니다.

**JMP추가된 버전:** 19

#### predict_disable_shape_check

**구문:** obj &lt;&lt; predict_disable_shape_check( state=0 )

**설명:** 훈련 데이터와 피처 수가 다른 데이터로 예측할 때 오류를 발생시킬지 여부를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### predictor

**구문:** obj &lt;&lt; predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**설명:** 예측 변수 알고리즘의 유형을 지정합니다. 기본값은 "auto"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**구문:** obj &lt;&lt; process_type( "default"|"update"="default" )

**설명:** 실행할 부스트 공정의 유형을 지정합니다. 기본값은 "default"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### quant_train_renew_leaf

**구문:** obj &lt;&lt; quant_train_renew_leaf( state=0 )

**설명:** 양자화 훈련이 적용 중일 때 잎 노드 값을 원래 그래디언트로 갱신할지 여부를 지정합니다. 이 옵션은 양자화 훈련에서 순위 목적 함수의 정확도를 향상시킬 수 있습니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### rate_drop

**구문:** obj &lt;&lt; rate_drop( number=0.0 )

**설명:** DART 부스터의 중도탈락 비율을 지정합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**구문:** obj &lt;&lt; refresh_leaf( number=1 )

**설명:** 새로 고침 업데이트 도구의 파라미터를 지정합니다. 1로 설정하면 잎과 노드가 업데이트되고, 0으로 설정하면 노드만 업데이트됩니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### reg_sqrt

**구문:** obj &lt;&lt; reg_sqrt( state=0 )

**설명:** 회귀 모형에서 원래 값 대신 반응 변수의 제곱근을 적합할지 여부를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### sample_type

**구문:** obj &lt;&lt; sample_type( "uniform"|"weighted"="uniform" )

**설명:** DART 부스터에 대한 표집 알고리즘 유형을 지정합니다. 기본값은 "uniform"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Booster( "dart" ), Fit( sample_type( "uniform" ) ) );

```

#### scale_pos_weight

**구문:** obj &lt;&lt; scale_pos_weight( number=1.0 )

**설명:** 불균형 클래스에 유용한 양수 및 음수 가중치의 균형을 지정합니다. 대표적으로 고려할 값은 합(음의 인스턴스)/합(양의 인스턴스)입니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**구문:** obj &lt;&lt; seed( number=0 )

**설명:** 난수 생성기의 시드값을 지정합니다. 결과의 재현성을 위해 이 값을 설정하십시오. 기본값은 "0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sigmoid

**구문:** obj &lt;&lt; sigmoid( number=1 )

**설명:** 이항 및 다중 클래스 모형에서 시그모이드 함수의 파라미터를 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

#### sketch_eps

**구문:** obj &lt;&lt; sketch_eps( number=0.03 )

**설명:** 이 값은 tree_method=approx에만 사용되며 대략 (1/sketch_eps) = 계급 수로 변환됩니다. 기본값은 "0.03"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**구문:** obj &lt;&lt; skip_drop( number=0.0 )

**설명:** DART 부스트 반복 중에 중도탈락 절차를 건너뛸 확률을 지정합니다. 기본값은 "0.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### start_iteration_predict

**구문:** obj &lt;&lt; start_iteration_predict( number=0 )

**설명:** 예측을 위한 반복 시작을 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### stochastic_rounding

**구문:** obj &lt;&lt; stochastic_rounding( state=1 )

**설명:** 그래디언트 양자화에서 확률적 반올림(stochastic rounding)을 사용할지 여부를 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

#### subsample

**구문:** obj &lt;&lt; subsample( number=1.0 )

**설명:** 각 반복 동안 표집할 행의 비율을 지정합니다. 이 값은 0에서 1 사이여야 합니다. 이것은 배깅의 한 유형입니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**구문:** obj &lt;&lt; subsample_max( number=1.0 )

**설명:** 각 반복 동안 표집할 행의 최대 비율을 지정합니다. 이 값은 0에서 1 사이여야 합니다. 이것은 배깅의 한 유형입니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**구문:** obj &lt;&lt; subsample_min( number=0.5 )

**설명:** 각 반복 동안 표집할 행의 최소 비율을 지정합니다. 이 값은 0에서 1 사이여야 합니다. 이것은 배깅의 한 유형입니다. 기본값은 "0.5"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**구문:** obj &lt;&lt; top_k( number=256 )

**설명:** greedy 및 thrifty 기능 선택기에서 선택할 상위 기능의 수를 지정합니다. 이 옵션은 gblinear 부스터에만 적용됩니다. 기본값은 "256"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### top_rate

**구문:** obj &lt;&lt; top_rate( number=0.2 )

**설명:** GOSS 데이터 샘플링 전략에서 그래디언트가 큰 데이터의 유지 비율을 지정합니다. 기본값은 "0.2"입니다.

**JMP추가된 버전:** 19

#### tree_method

**구문:** obj &lt;&lt; tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**설명:** XGBoost에 사용되는 트리 생성 알고리즘을 지정합니다. 기본값은 "auto"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**구문:** obj &lt;&lt; tweedie_variance_power( number=1.5 )

**설명:** Tweedie 분포의 검정력을 지정합니다. 이 값은 1에서 2 사이여야 합니다. 이 옵션은 objective=reg:tweedie에만 적용됩니다. 기본값은 "1.5"입니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) ) );

```

#### uniform_drop

**구문:** obj &lt;&lt; uniform_drop( state=0 )

**설명:** Specifies whether to select trees for dropping in DART boosting using uniform probability. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### updater

**구문:** obj &lt;&lt; updater( text )

**설명:** Gbtree 부스터를 실행할 트리 업데이트 도구를 지정합니다. grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent 중 하나를 지정하십시오.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

#### use_missing

**구문:** obj &lt;&lt; use_missing( state=1 )

**설명:** 결측값 특별 처리를 적용할지 여부를 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

#### use_quantized_grad

**구문:** obj &lt;&lt; use_quantized_grad( state=0 )

**설명:** 훈련 시 그래디언트 양자화를 사용할지 여부를 지정합니다. 이 옵션을 활성화하면 그래디언트와 헤시안 행렬이 계급으로 구분되어 대부분의 경우 정확도 손실 없이 훈련 속도를 높일 수 있습니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### xgboost_dart_mode

**구문:** obj &lt;&lt; xgboost_dart_mode( state=0 )

**설명:** XGBoost DART 모드를 사용할지 여부를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

#### zero_as_missing

**구문:** obj &lt;&lt; zero_as_missing( state=0 )

**설명:** 모든 0 값을 결측값으로 처리할지 여부를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 19

