# Boosted Tree



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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 연결된 생성자

### Boosted Tree

**구문:** Boosted Tree (Y( column ), X( columns ))

**설명:** 일련의 작은 의사 결정 나무가 누적된 큰 의사 결정 나무를 생성하여 예측 모형을 생성합니다. 각 트리는 이전 트리의 잔차에 대해 적합됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**구문:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Freq( :_freqcol ),	Go);

```

### Response

**구문:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Validation

**구문:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Weight

**구문:** obj &lt;&lt; Weight( column )

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Weight( :_weightcol ),	Go);

```

### X

**구문:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

## 항목 메시지

### Column Contributions

**구문:** obj &lt;&lt; Column Contributions( state=0|1 )

**설명:** 각 입력 열 및 적합에 대한 해당 열의 기여도가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Column Contributions( 1 );

```

### Column Sampling Rate

**구문:** obj &lt;&lt; Column Sampling Rate( number )

**설명:** 각 트리 레이어에 대해 표집할 예측 변수 열의 비율을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Column Sampling Rate( 0.95 ),	Go);

```

### Decision Threshold

**구문:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**설명:** 각 모형에 대한 적합 확률 분포와 실제값 대 예측값 테이블을 표시하거나 숨깁니다. 확률 임계를 변경하여 임계값에 따라 분류 결과에 어떤 영향이 있는지 탐색할 수 있습니다.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Splits per Tree( 4 ),	Number of Layers( 171 ),	Learning Rate( 0.08 ),	Go);obj << Decision Threshold( 1 );

```

### Early Stopping

**구문:** Early Stopping( state=0|1 )

**설명:** 추가 레이어를 통해 검증 통계량이 개선되지 않으면 반복을 조기 중지합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Early Stopping( 1 ),	Go);

```

### Get Average Absolute Error Test

**구문:** obj &lt;&lt; Get Average Absolute Error Test

**설명:** 테스트 데이터 집합의 평균 절대 편차 통계량을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

### Get Average Absolute Error Training

**구문:** obj &lt;&lt; Get Average Absolute Error Training

**설명:** 훈련 데이터 집합의 평균 절대 편차 통계량을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

### Get Average Absolute Error Validation

**구문:** obj &lt;&lt; Get Average Absolute Error Validation

**설명:** 검증 데이터 집합의 평균 절대 편차 통계량을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

### Get Average Log Error Test

**구문:** obj &lt;&lt; Get Average Log Error Test

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 테스트 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));avg = obj << Get Average Log Error Test;Show( avg );

```

### Get Average Log Error Training

**구문:** obj &lt;&lt; Get Average Log Error Training

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 훈련 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));avg = obj << Get Average Log Error Training;Show( avg );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));avg = obj << Get Average Log Error Training;Show( avg );

```

### Get Average Log Error Validation

**구문:** obj &lt;&lt; Get Average Log Error Validation

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 검증 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));avg = obj << Get Average Log Error Validation;Show( avg );

```

### Get Confusion Matrix Test

**구문:** obj &lt;&lt; Get Confusion Matrix Test

**설명:** 테스트 데이터 집합에 대한 혼동 행렬을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

### Get Confusion Matrix Training

**구문:** obj &lt;&lt; Get Confusion Matrix Training

**설명:** 훈련 데이터 집합에 대한 혼동 행렬을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

### Get Confusion Matrix Validation

**구문:** obj &lt;&lt; Get Confusion Matrix Validation

**설명:** 검증 데이터 집합에 대한 혼동 행렬을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

### Get Confusion Rates Test

**구문:** obj &lt;&lt; Get Confusion Rates Test

**설명:** 테스트 데이터 집합에 대한 혼동 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

### Get Confusion Rates Training

**구문:** obj &lt;&lt; Get Confusion Rates Training

**설명:** 훈련 데이터 집합에 대한 혼동 비율을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

### Get Confusion Rates Validation

**구문:** obj &lt;&lt; Get Confusion Rates Validation

**설명:** 검증 데이터 집합에 대한 혼동 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

### Get Gen RSquare Test

**구문:** obj &lt;&lt; Get Gen RSquare Test

**설명:** 테스트 데이터 집합에 대한 일반화 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

### Get Gen RSquare Training

**구문:** obj &lt;&lt; Get Gen RSquare Training

**설명:** 훈련 데이터 집합에 대한 일반화 R²을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

### Get Gen RSquare Validation

**구문:** obj &lt;&lt; Get Gen RSquare Validation

**설명:** 검증 데이터 집합에 대한 일반화 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

### Get MM SAS DATA Step

**구문:** obj &lt;&lt; Get MM SAS DATA Step

**설명:** SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성한 후 로그 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get MM SAS Data Step;

```

### Get MM Tolerant SAS DATA Step

**구문:** obj &lt;&lt; Get MM Tolerant SAS DATA Step

**설명:** 결측값을 포함하는 데이터에 대해 SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성한 후 로그 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get MM Tolerant SAS Data Step;

```

### Get Measures

**구문:** obj &lt;&lt; Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Get Measures;

```

### Get Microseconds

**구문:** obj &lt;&lt; Get Microseconds

**설명:** 분석을 완료하는 데 사용된 시간(마이크로초)을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);time = obj << Get Microseconds;Show( time );

```

### Get Misclassification Rate Test

**구문:** obj &lt;&lt; Get Misclassification Rate Test

**설명:** 테스트 데이터 집합에 대한 오분류 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

### Get Misclassification Rate Training

**구문:** obj &lt;&lt; Get Misclassification Rate Training

**설명:** 훈련 데이터 집합에 대한 오분류 비율을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Method( "Decision Tree" ));obj << Split Best( 2 );rate = obj << Get Misclassification Rate Training;Show( rate );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Training;Show( rate );

```

### Get Misclassification Rate Validation

**구문:** obj &lt;&lt; Get Misclassification Rate Validation

**설명:** 검증 데이터 집합에 대한 오분류 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Method( "Decision Tree" ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Validation;Show( rate );

```

### Get Precision Recall Area Test

**구문:** obj &lt;&lt; Get Precision Recall Area Test

**설명:** 테스트 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

### Get Precision Recall Area Training

**구문:** obj &lt;&lt; Get Precision Recall Area Training

**설명:** 훈련 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

### Get Precision Recall Area Validation

**구문:** obj &lt;&lt; Get Precision Recall Area Validation

**설명:** 검증 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

### Get Prediction Formula

**구문:** obj &lt;&lt; Get Prediction Formula

**설명:** 예측 계산식 열을 생성하는 스크립트를 생성하여 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Get Prediction Formula;

```

### Get RMS Error Test

**구문:** obj &lt;&lt; Get RMS Error Test

**설명:** 테스트 오차에 대한 평균 제곱의 제곱근을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);rms = obj << Get RMS Error Test;Show( rms );

```

### Get RMS Error Training

**구문:** obj &lt;&lt; Get RMS Error Training

**설명:** 훈련 오차에 대한 평균 제곱의 제곱근을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);rms = obj << Get RMS Error Training;Show( rms );

```

### Get RMS Error Validation

**구문:** obj &lt;&lt; Get RMS Error Validation

**설명:** 검증 오차에 대한 평균 제곱의 제곱근을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);rms = obj << Get RMS Error Validation;Show( rms );

```

### Get ROC Area Test

**구문:** obj &lt;&lt; Get ROC Area Test

**설명:** 테스트 데이터의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

### Get ROC Area Training

**구문:** obj &lt;&lt; Get ROC Area Training

**설명:** 훈련 데이터 집합의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

### Get ROC Area Validation

**구문:** obj &lt;&lt; Get ROC Area Validation

**설명:** 검증 데이터 집합의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

### Get RSquare Test

**구문:** obj &lt;&lt; Get RSquare Test

**설명:** 테스트 데이터 집합에 대한 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Get RSquare Test;Show( r );

```

### Get RSquare Training

**구문:** obj &lt;&lt; Get RSquare Training

**설명:** 훈련 데이터 집합에 대한 R²을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Get RSquare Training;Show( r );

```

### Get RSquare Validation

**구문:** obj &lt;&lt; Get RSquare Validation

**설명:** 검증 데이터 집합에 대한 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);r = obj << Get RSquare Validation;Show( r );

```

### Get SAS DATA Step

**구문:** obj &lt;&lt; Get SAS DATA Step

**설명:** 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 로그 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get SAS Data Step;

```

### Get Seconds

**구문:** obj &lt;&lt; Get Seconds

**설명:** 분석을 완료하는 데 사용된 시간(초)을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);time = obj << Get Seconds;Show( time );

```

### Get Tolerant Prediction Formula

**구문:** obj &lt;&lt; Get Tolerant Prediction Formula

**설명:** 허용 예측 계산식 열을 생성하기 위한 스크립트를 생성한 후 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Get Tolerant Prediction Formula;

```

### Get Tolerant SAS DATA Step

**구문:** obj &lt;&lt; Get Tolerant SAS DATA Step

**설명:** 결측값을 포함하는 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 로그 창에 반환합니다. 결측값은 트리 분지에 무작위로 할당됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);code = obj << Get Tolerant SAS Data Step;

```

### Go

**구문:** obj &lt;&lt; Go

**설명:** 모든 모수가 설정된 후 반복을 시작합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Informative Missing

**구문:** obj = Boosted Tree(...Informative Missing( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 범주형 변수의 경우 결측값을 범주로 처리합니다. 연속형 변수의 경우 결측값을 낮음 또는 높음으로 처리합니다(둘 중 더 적합한 것으로). 기본적으로 설정되어 있습니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );obj << Split Best( 1 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt:Age[3] = .;obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Informative Missing( 0 ),	Split Best( 3 ));

```

### Learning Rate

**구문:** Learning Rate( fraction )

**설명:** 추정값에 사용되는 학습률을 설정합니다. 기본값은 0.1입니다. 기본값은 ".1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Learning Rate( 0.2 ),	Go);

```

### Lift Curve

**구문:** obj &lt;&lt; Lift Curve( state=0|1 )

**설명:** 향상도 곡선 그림을 표시하거나 숨깁니다. 향상도 곡선은 향상도 대 관측값 비율을 표시하고 모형의 예측 능력에 대한 또 다른 보기를 제공합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Lift Curve( 1 );

```

### Make SAS DATA Step

**구문:** obj &lt;&lt; Make SAS DATA Step

**설명:** 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 스크립트 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Make SAS Data Step;

```

### Make Tolerant SAS DATA Step

**구문:** obj &lt;&lt; Make Tolerant SAS DATA Step

**설명:** 결측값을 포함하는 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 스크립트 창에 반환합니다. 결측값은 트리 분지에 무작위로 할당됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Make Tolerant SAS Data Step;

```

### Maximum Depth

**구문:** obj &lt;&lt; Maximum Depth( number )

**설명:** 노드 수 대신 깊이로 트리 크기를 제한합니다.

### Method

**구문:** Method( "Boosted Tree" ) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 데이터 분할에 사용되는 방법을 결정합니다. 의사 결정 나무가 기본값입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);

```

### Minimum Size Split

**구문:** Minimum Size Split( number )

**설명:** 추정값에 사용되는 분할을 고려할 최소 관측값 수를 설정합니다. 기본값은 5입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Minimum Size Split( 10 ),	Go);

```

### Multithreading

**구문:** Multithreading( state=0|1 )

**설명:** 계산을 컴퓨터의 사용 가능한 스레드 간에 분산합니다. 기본적으로 설정되어 있습니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Split Best( 2 ));

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

### Number of Layers

**구문:** Number of Layers( number )

**설명:** 추정값에 사용되는 레이어 수를 설정합니다. 기본값은 50입니다. 기본값은 "100"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Number of Layers( 20 ),	Go);

```

### Ordinal Restricts Order

**구문:** obj = Boosted Tree(...Ordinal Restricts Order( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 순서형 열의 경우 순서를 유지하는 분할만 고려합니다. 기본적으로 설정되어 있습니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );obj << Split Best( 3 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Ordinal Restricts Order( 1 ),	Split Best( 2 ));

```

### Overfit Penalty

**구문:** Overfit Penalty( fraction )

**설명:** 범주형 반응이 포함된 모형에 대해 확률을 0에서 멀리 이동하기 위한 치우침을 도입하는 과대적합 벌점을 설정합니다. 기본값은 0.0001입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Overfit Penalty( 0.0005 ),	Go);

```

### Plot Actual by Predicted

**구문:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**설명:** X 축에 예측값이 있고 Y 축에 실제값이 있는 훈련 데이터를 사용하여 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Plot Actual by Predicted( 1 );

```

### Precision Recall Curve

**구문:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 곡선을 포함하는 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Precision Recall Curve( 1 );

```

### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Profiler( 1 );

```

### Publish Prediction Formula

**구문:** obj &lt;&lt; Publish Prediction Formula

**설명:** 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Publish Prediction Formula;

```

### Publish Tolerant Prediction Formula

**구문:** obj &lt;&lt; Publish Tolerant Prediction Formula

**설명:** 결측값이 있는 경우에도 예측하는 예측 계산식을 생성하여 계산식 저장소에 계산식 열 스크립트로 게시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Publish Tolerant Prediction Formula;

```

### ROC Curve

**구문:** obj &lt;&lt; ROC Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << ROC Curve( 1 );

```

### Row Sampling Rate

**구문:** obj &lt;&lt; Row Sampling Rate( number )

**설명:** 각 트리 레이어에 대해 표집할 훈련 행의 비율을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Row Sampling Rate( 0.95 ),	Go);

```

### Save Cumulative Details

**구문:** obj &lt;&lt; Save Cumulative Details

**설명:** 검증 R²을 트리 번호와 함께 새 데이터 테이블에 저장합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Cumulative Details;

```

### Save Offset Estimates

**구문:** obj &lt;&lt; Save Offset Estimates

**설명:** 오프셋 추정값을 데이터 테이블의 새 열에 저장합니다. 범주형 반응에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Offset Estimates;

```

### Save Predicteds

**구문:** obj &lt;&lt; Save Predicteds

**설명:** 예측값을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Predicteds;

```

### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Prediction Formula;

```

### Save Residuals

**구문:** obj &lt;&lt; Save Residuals

**설명:** 잔차를 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Residuals;

```

### Save Tolerant Prediction Formula

**구문:** obj &lt;&lt; Save Tolerant Prediction Formula

**설명:** 데이터 테이블의 새 열에 결측값이 있는 경우에도 예측하는 계산식을 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Tolerant Prediction Formula;

```

### Save Tree Details

**구문:** obj &lt;&lt; Save Tree Details

**설명:** 각 레이어-분할 조합에 대한 레이어, 분할, 라벨 및 추정값을 새 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Save Tree Details;

```

### Set Random Seed

**구문:** obj &lt;&lt; Set Random Seed( number )

**설명:** 이후 플랫폼 실행에 대한 결과를 재현하는 데 사용할 난수 시드값을 지정합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

### Show Trees

**구문:** obj &lt;&lt; Show Trees( "없음"|"이름 표시"|"이름 범주 표시"|"이름 범주 추정값 표시" )

**설명:** 각 노드에 이름만 포함되거나 이름과 범주가 포함되거나 이름, 범주 및 추정값이 포함된 트리 목록을 각 레이어에 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Go);obj << Show Trees( Show names categories );(obj << Report)["Tree Views"] << Close( 0 );(obj << Report)["Layer4"] << Close( 0 );

```

### Specify Profit Matrix

**구문:** obj &lt;&lt; Specify Profit Matrix

**설명:** 올바르거나 올바르지 않은 분류 결정과 관련된 수익 또는 비용을 지정할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Specify Profit Matrix( [1 -1, -1 1, . .], "0", "1", "Undecided" ),	Go);

```

### Splits per Tree

**구문:** Splits Per Tree( number )

**설명:** 추정값에 사용되는 트리당 분할 수를 설정합니다. 기본값은 3입니다. 기본값은 "3"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Splits Per Tree( 2 ),	Go);

```

### Tuning Design Table

**구문:** Tuning Design Table( "table name" )

**설명:** 함께 실행할 조정 모수 테이블입니다. 트리당 분할 수, 학습률, 행 표집 비율, 열 표집 비율, 레이어 수, 최소 분할 크기를 지원합니다.

### Use Excluded Rows for Validation

**구문:** obj = Boosted Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**설명:** 데이터 테이블의 제외된 행을 사용하여 검증 데이터 집합을 생성합니다. 이 옵션은 표준 JMP를 사용 중이고 제외된 행이 있는 경우에만 시작 창에 나타납니다.

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ));obj << Split Best( 5 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Bootstrap Forest(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Use Excluded Rows for Validation( 1 ),	Split Best( 2 ));

```

### Validation Portion

**구문:** obj = Boosted Tree(...Validation Portion( fraction=0 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 무작위로 행을 선택하여 검증 데이터 집합을 구성합니다. 각 행이 선택될 확률은 p(분수)입니다. 기본값은 "0"입니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :country, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ));obj << Split Best( 2 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation Portion( 0.2 ),	Go);

```

