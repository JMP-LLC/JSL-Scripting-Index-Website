# Scatterplot 3D



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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**구문:** obj = Scatterplot 3D(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 연결된 생성자

### Scatterplot 3D

**구문:** Scatterplot 3D( Y( columns ) )

**설명:** 세 개 이상의 변수에 대해 회전하는 3차원 산점도를 생성합니다. 변수를 네 개 이상 지정하면 산점도에 표시되는 변수를 순환할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 변수의 각 수준에 대해 하나씩 여러 보고서를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Coloring

**구문:** obj &lt;&lt; Coloring( column )

**설명:** 선택한 변수에 따라 표식에 색상을 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Coloring( :Sepal length ));

```

### Columns

**구문:** obj &lt;&lt; Columns( column(s) )

**설명:** 3D 그래프의 X, Y, Z 좌표에 사용할 수 있는 변수입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Freq( :_freqcol ));

```

### Weight

**구문:** obj &lt;&lt; Weight( column )

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Weight( :_weightcol ));

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

**설명:** 3D 그래프의 X, Y, Z 좌표에 사용할 수 있는 변수입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## 항목 메시지

### Biplot Rays

**구문:** obj &lt;&lt; Biplot Rays( state=0|1 )

**설명:** 그래프에 행렬도 선을 표시하거나 숨깁니다. 주성분에서는 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );obj << Biplot Rays( 1 );

```

### Circle Size

**구문:** obj &lt;&lt; Circle Size( number=0.2 )

**설명:** "점 크기 지정"이 설정되거나 가중치 또는 빈도 역할이 사용되는 경우 표식 크기를 설정합니다. 기본값은 "0.2"입니다.

**JMP추가된 버전:** 18

```jsl

// slightly larger circlesdt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D(	Y( :Sepal length, :Sepal width, :Petal length ),	Weight( :Petal width ),	Circle Size( .3 ));

```

### Connect Points

**구문:** obj &lt;&lt; Connect Points( state=0|1, &lt;group column name&gt; )

**설명:** 점을 연결하는 선을 표시하거나 숨깁니다. 점을 그룹화할 수 있습니다(선택 사항).

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Connect Points( 1, :Species );

```

### Drop Line Thickness

**구문:** obj &lt;&lt; Drop Line Thickness( fraction=0.03 )

**설명:** 수직선 두께를 설정합니다. 기본값은 "0.03"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Drop Lines( 1 );Wait( 2 );obj << Drop Line Thickness( 0.8 );

```

### Drop Lines

**구문:** obj &lt;&lt; Drop Lines( state=0|1 )

**설명:** 첫 번째 및 세 번째 변수로 정의된 밑면에서 그래프의 각 점까지 선을 그리거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Drop Lines( 1 );

```

### Ellipsoid Coverage

**구문:** obj &lt;&lt; Ellipsoid Coverage( fraction=0.5 )

**설명:** 타원의 범위를 설정합니다. 예를 들어 0.5는 데이터의 밀도가 가장 높은 절반을 포함합니다. 기본값은 "0.5"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Ellipsoid Coverage( 0.8 );obj << Normal Contour Ellipsoids( 1, :Species );

```

### Ellipsoid Transparency

**구문:** obj &lt;&lt; Ellipsoid Transparency( fraction=0.5 )

**설명:** 타원의 투명도를 설정합니다. 0[투명] 및 1[불투명]로 지정할 수 있습니다. 기본값은 "0.5"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Ellipsoid Transparency( 0.4 );obj << Normal Contour Ellipsoids( 1, :Species );

```

### Frame3D

**구문:** obj &lt;&lt; Frame3D( &lt;commands passed to Frame3D&gt; )

**설명:** 표시 명령을 3D 그림으로 보냅니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Zoom( 0.9075 ) );

```

### Jitter

**구문:** obj &lt;&lt; Jitter( state=0|1 )

**설명:** 산점도에서 점을 조금 이동하여 점을 지터링합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Petal length, :Petal width, :Species ), Jitter( 0 ) );

```

### Legend

**구문:** obj &lt;&lt; Legend( &lt;Legend Model ID&gt; )

### Nonpar Density Contour

**구문:** obj &lt;&lt; Nonpar Density Contour( state=0|1, &lt;group column name&gt; )

**설명:** 점 주변에 95% 커널 등고선 셸을 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Nonpar Density Contour( 1, :Species );

```

### Nonpar Density Contour Settings

**구문:** obj &lt;&lt; Nonpar Density Contour Settings( surface, on=0|1, &lt;quantile&gt;, &lt;transparency&gt;, &lt;color&gt; )

**설명:** 등위면에 대한 설정

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Nonpar Density Contour( 1 );obj << Nonpar Density Contour Settings( 1, 1, .5, .6, Green );

```

### Normal Contour Ellipsoids

**구문:** obj &lt;&lt; Normal Contour Ellipsoids( state=0|1, &lt;group column name&gt; )

**설명:** 정규 등고선 타원을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Normal Contour Ellipsoids( 1, :Species );

```

### Principal Components

**구문:** obj &lt;&lt; Principal Components( state=0|1 )

**설명:** 그래프에 주성분 보고서와 선을 모두 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components;

```

### Remove Prin Comp

**구문:** obj &lt;&lt; Remove Prin Comp

**설명:** 그래프에서 주성분 보고서와 선을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );Wait( 2 );obj << Remove Prin Comp;

```

### Rotated Components

**구문:** obj &lt;&lt; Rotated Components( PC|ML, ONE|SMC , number, Varimax| Biquartimax| Quartimax|Equamax|Orthomax| Factorparsimax... )

**설명:** 회전된 주성분이 포함된 보고서를 표시합니다. 여기서 성분은 좌표 공간과 더 밀접하게 정렬됩니다. 두 번째 모수는 사전 공통분에 사용되는 대각을 정의하며 SMC 또는 ONE(주성분)일 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Rotated Components( PC, ONE, 3, Varimax );

```

### Save Prin Components

**구문:** obj &lt;&lt; Save Prin Components( number )

**설명:** 주성분을 데이터 테이블에 새 열로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );obj << Save Prin Components( 3 );

```

### Save Rotated Components

**구문:** obj &lt;&lt; Save Rotated Components

**설명:** 회전한 주성분을 데이터 테이블에 새 열로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Rotated Components( PC, ONE, 3, Varimax );obj << Save Rotated Components;

```

### Show Controls

**구문:** obj &lt;&lt; Show Controls( state=0|1 )

**설명:** 산점도 아래쪽에 제어판을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Show Controls( 1 );

```

### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 산점도에 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Show Points( 1 );

```

### Show Ray Labels

**구문:** obj &lt;&lt; Show Ray Labels( state=0|1 )

**설명:** 선에 라벨을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Principal Components( 1 );obj << Biplot Rays( 1 );obj << Show Ray Labels( 1 );

```

### Sized Points

**구문:** obj &lt;&lt; Sized Points( state=0|1 )

**설명:** 산점도의 점을 확장하거나 축소합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Sized Points( 1 );

```

### Std Prin Components

**구문:** obj &lt;&lt; Std Prin Components( state=0|1 )

**설명:** 그래프에 표준화 주성분 보고서와 선을 모두 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Std Prin Components;

```

## Frame3D

### 연결된 생성자

#### Graph 3D Box

**구문:** y = Graph 3D Box()

**설명:** 표시 명령을 3D 그림으로 보냅니다.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### 항목 메시지

#### Add Ellipsoid

**구문:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix ) obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means) obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**설명:** 그림에 타원을 그립니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D(	Add Ellipsoid(		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],		[6.55099 2.96919 5.5066],		[0.57829 0.29087 0.53668]	));

```

#### Add Markers

**구문:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**설명:** 그림에 n개의 표식을 그립니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**구문:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**설명:** 그림에 벡터 또는 화살표를 그립니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**구문:** obj &lt;&lt; Get Axes

**설명:** 그림에 축을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Axes );Show( s );

```

#### Get Box

**구문:** obj &lt;&lt; Get Box

**설명:** 그림에 상자 프레임을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Box );Show( s );

```

#### Get Grab Handles

**구문:** obj &lt;&lt; Get Grab Handles

**설명:** 그림에 손잡이 핸들을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Box );Show( s );

```

#### Get Graph Size

**구문:** obj &lt;&lt; Get Graph Size

**설명:** 그래프 크기를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Graph Size );Show( s );

```

#### Get Grids

**구문:** obj &lt;&lt; Get Grids

**설명:** 그림에 격자를 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Grids );Show( s );

```

#### Get Hide Lights Border

**구문:** obj &lt;&lt; Get Hide Lights Border

**설명:** 그림 주위의 조명 테두리의 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );state = obj << Frame3D( Get Hide Lights Border );Show( state );

```

#### Get Line Scale

**구문:** obj &lt;&lt; Get Line Scale

**설명:** 그림에 대한 선 너비를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );w = obj << Frame3D( Get Line Scale );Show( w );

```

#### Get Marker Quality

**구문:** obj &lt;&lt; Get Marker Quality

**설명:** 그림에 대한 형태 및 음영과 같은 표식 특성을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );q = obj << Frame3D( Get Marker Quality );Show( q );

```

#### Get Marker Scale

**구문:** obj &lt;&lt; Get Marker Scale

**설명:** 그림에 대한 표식 크기를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Marker Scale );Show( s );

```

#### Get Marker Transparency

**구문:** obj &lt;&lt; Get Marker Transparency

**설명:** 그림에 대한 표식 투명도를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );t = obj << Frame3D( Get Marker Transparency );Show( t );

```

#### Get Rotation

**구문:** obj &lt;&lt; Get Rotation

**설명:** 프레임에 대한 현재 회전을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );r = obj << Frame3D( Get Rotation() );Show( r );

```

#### Get Text Scale

**구문:** obj &lt;&lt; Get Text Scale

**설명:** 그림에 대한 텍스트 크기를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Text Scale );Show( s );

```

#### Get View Ortho

**구문:** obj &lt;&lt; Get View Ortho

**설명:** 그림에 대한 직교 보기의 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );o = obj << Frame3D( Get View Ortho );Show( o );

```

#### Get View Perspective

**구문:** obj &lt;&lt; Get View Perspective

**설명:** 그림에 대한 보기 투시를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Get View Perspective );Show( p );

```

#### Get View Zoom

**구문:** obj &lt;&lt; Get View Zoom

**설명:** 그림에 대한 현재 확대/축소를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );z = obj << Frame3D( Get View Zoom );Show( z );

```

#### Get Wall Color

**구문:** obj &lt;&lt; Get Wall Color

**설명:** 그림에 대한 벽 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Wall Color );Show( c );

```

#### Get Walls

**구문:** obj &lt;&lt; Get Walls

**설명:** 그림에 벽을 표시하는 상태를 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );s = obj << Frame3D( Get Walls );Show( s );

```

#### Get X Axis Color

**구문:** obj &lt;&lt; Get X Axis Color

**설명:** 그림에 대한 x 축 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get X Axis Color );Show( c );

```

#### Get X Axis Label

**구문:** obj &lt;&lt; Get X Axis Label

**설명:** 그림의 X 축에 대한 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get X Axis Label );Show( label );

```

#### Get Y Axis Color

**구문:** obj &lt;&lt; Get Y Axis Color

**설명:** 그림에 대한 y 축 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Y Axis Color );Show( c );

```

#### Get Y Axis Label

**구문:** obj &lt;&lt; Get Y Axis Label

**설명:** 그림의 Y 축에 대한 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get Y Axis Label );Show( label );

```

#### Get Z Axis Color

**구문:** obj &lt;&lt; Get Z Axis Color

**설명:** 그림에 대한 z 축 색상을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Get Z Axis Color );Show( c );

```

#### Get Z Axis Label

**구문:** obj &lt;&lt; Get Z Axis Label

**설명:** 그림의 Z 축에 대한 라벨을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );label = obj << Frame3D( Get Z Axis Label );Show( label );

```

#### Set Axes

**구문:** obj &lt;&lt; Set Axes( state=0|1 )

**설명:** 그림에 X, Y, Z 축을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**구문:** obj &lt;&lt; Set Box( state=0|1 )

**설명:** 그림에 상자 프레임을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**구문:** obj &lt;&lt; Set Graph Size( x, y )

**설명:** 그래프 크기를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**구문:** obj &lt;&lt; Set Grids( state=0|1 )

**설명:** 그림에 격자를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**구문:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**설명:** 그림 주위에 조명 테두리를 숨기거나 표시합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**구문:** obj &lt;&lt; Set Line Scale( number )

**설명:** 그림의 격자에 대한 선 너비를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**구문:** obj &lt;&lt; Set Marker Quality( number )

**설명:** 그림에 대한 형태 및 음영과 같은 표식 특성을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**구문:** obj &lt;&lt; Set Marker Scale( number )

**설명:** 그림에 대한 표식 크기를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**구문:** obj &lt;&lt; Set Marker Transparency( fraction )

**설명:** 그림에 대한 표식 투명도를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**구문:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**설명:** 그림의 진동 비율을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**구문:** obj &lt;&lt; Set Rotation( X, Y, Z )

**설명:** 지정한 좌표로 프레임을 회전합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**구문:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**설명:** 지정된 축에서 그래프를 스핀합니다. dx 및 dy 값은 점 (sx, sy)로부터의 마우스 델타 움직임입니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**구문:** obj &lt;&lt; Set Text Scale( number )

**설명:** 그림의 축 텍스트에 대한 텍스트 크기를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**구문:** obj &lt;&lt; Set View Ortho( state=0|1 )

**설명:** 그림을 직교로 또는 선형으로 표시합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**구문:** obj &lt;&lt; Set View Perspective( fraction )

**설명:** 그림의 보기 투시를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**구문:** obj &lt;&lt; Set View Zoom( number )

**설명:** 그림에 대한 확대/축소를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set View Zoom( 0.5 ) );Wait( 2 );obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**구문:** obj &lt;&lt; Set Wall Color( number )

**설명:** 그림의 벽 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**구문:** obj &lt;&lt; Set Walls( state=0|1 )

**설명:** 그림에 벽을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**구문:** obj &lt;&lt; Set X Axis Color( color )

**설명:** 그림의 X 축 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**구문:** obj &lt;&lt; Set X Axis Label( string )

**설명:** 그림의 X 축에 대한 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**구문:** obj &lt;&lt; Set Y Axis Color( color )

**설명:** 그림의 Y 축 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**구문:** obj &lt;&lt; Set Y Axis Label( string )

**설명:** 그림의 Y 축에 대한 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**구문:** obj &lt;&lt; Set Z Axis Color( color )

**설명:** 그림의 Z 축 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**구문:** obj &lt;&lt; Set Z Axis Label( string )

**설명:** 그림의 Z 축에 대한 라벨을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**구문:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**설명:** 그림의 X 축에 대한 값을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**구문:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**설명:** 그림의 Y 축에 대한 값을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**구문:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**설명:** 그림의 Z 축에 대한 값을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**구문:** obj &lt;&lt; get light active( light number )

**설명:** 그림의 지정된 조명 활성화 샤이닝을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );Show( p );

```

#### get light color

**구문:** obj &lt;&lt; get light color( light number )

**설명:** 그림의 지정된 조명 색상 샤이닝을 목록 {빨간색, 녹색, 파란색}으로 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );Show( c );

```

#### get light position

**구문:** obj &lt;&lt; get light position( light number )

**설명:** 그림의 지정된 조명 위치 샤이닝을 목록 {x, y, z}로 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );Show( p );

```

#### set light active

**구문:** obj &lt;&lt; set light active( light number, state=0|1 )

**설명:** 그림에 지정된 조명 샤이닝을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**구문:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**설명:** 그림의 조명 샤이닝 색상을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**구문:** obj &lt;&lt; set light position( light number, X, Y, Z )

**설명:** 그림의 조명 위치 샤이닝을 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Scatterplot 3D( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

