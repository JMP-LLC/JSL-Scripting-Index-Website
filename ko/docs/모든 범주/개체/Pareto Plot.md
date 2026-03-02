# Pareto Plot



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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**구문:** obj = Show Pareto Bars(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Show Pareto Bars( 0 );

```

### Cause

**구문:** obj &lt;&lt; Cause( column )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	Freq( :_freqcol ));obj << Show Pareto Bars( 0 );

```

### Grouping

**구문:** obj &lt;&lt; Grouping( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Subcategory

**구문:** obj &lt;&lt; Subcategory( column )

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Weight

**구문:** obj &lt;&lt; Weight( column )

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Show Pareto Line( 1 ),	Weight( :_weightcol ));obj << Show Pareto Bars( 0 );

```

### X

**구문:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Y

**구문:** obj &lt;&lt; Y( column )

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

## 항목 메시지

### Alias

**구문:** obj &lt;&lt; Alias( cause, alias )

**설명:** 원인에 대해 다른 이름을 설정합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Alias( "doping", "substitution" ) );

```

### Bar Label Format

**구문:** obj &lt;&lt; Bar Label Format

**설명:** 파레토 막대 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Label( 1 ),	Bar Label Format( "Currency", "USD", Use thousands separator( 0 ), 12, 0 ));

```

### Bar Style

**구문:** obj &lt;&lt; Bar Style( "막대"|"부동" )

**설명:** 파레토 막대의 표시를 제어합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Bar Style( Float );

```

### Cause Colors

**구문:** obj &lt;&lt; Cause Colors( { { causeName, color }, ...} )

**설명:** 지정된 막대의 색상을 변경합니다.

**JMP추가된 버전:** 17

#### 단일 RGB 색상

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( {117, 150, 200} );

```

#### 단일 색상 목록

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( {"corrosion", "Light Gray"} );

```

#### 모든 색상

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( "Orange" );

```

#### 여러 색상 목록

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Colors( {{"miscellaneous", "Purple"}, {"silicon defect", "Red"}} );

```

### Cause Labels

**구문:** obj &lt;&lt; Cause Labels( { { causeName, 0|1 }, ...} )

**설명:** 개수를 지정된 막대의 라벨로 표시합니다.

**JMP추가된 버전:** 17

#### 단일 원인

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( {"contamination", 1} ) );

```

#### 모든 원인

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Cause Labels( 1 ) );

```

#### 원인 목록

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Cause Labels( {{"contamination", 1}, {"oxide defect", 1}} ));

```

### Cause Markers

**구문:** obj &lt;&lt; Cause Markers( { { causeName, marker }, ...} )

**설명:** 지정된 막대에 대해 그래프에 표시된 누적 백분율 표식을 변경합니다.

**JMP추가된 버전:** 17

#### 단일 원인

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Markers( {"silicon defect", "Diamond"} );

```

#### 모든 원인

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Markers( 1 );

```

#### 원인 목록

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Cum Percent Points( 1 ) );obj << Cause Markers( {{"miscellaneous", "Square"}, {"silicon defect", "Diamond"}} );

```

### Combine Causes

**구문:** obj &lt;&lt; Combine Causes( {cause1, cause2, ... } | &lt;&lt; First(N) | &lt;&lt; Last(N), &lt;label&gt; )

**설명:** 지정된 원인을 단일 원인으로 결합합니다. 원인은 원인 이름 목록으로 지정하거나, 결합할 여러 원인과 함께 처음 또는 마지막 메시지를 보내 지정할 수 있습니다. 원하는 경우 결합 원인에 대한 라벨도 지정할 수 있습니다.

#### 라벨 없음

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );Wait( 2 );obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );

```

#### 라벨 항목

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Others" ));

```

#### 마지막 보내기

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Combine Causes( <<Last( 2 ), "Last 2" ) );

```

### Cum Line Connect Style

**구문:** obj &lt;&lt; Cum Line Connect Style( "선"|"곡선"|"단계" )

**설명:** 누적 백분율 선의 연결 스타일을 제어합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Cum Line Connect Style( "Step" );

```

### Cum Percent Curve Color

**구문:** obj &lt;&lt; Cum Percent Curve Color( color )

**설명:** 그래프의 누적 백분율 곡선 색상을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Cum Percent Curve Color( "Red" );

```

### Cum Percent Label Format

**구문:** obj &lt;&lt; Cum Percent Label Format

**설명:** 누적 백분율 표식 라벨의 형식을 설정합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Freq( :N ),	Label Cum Percent Points( 1 ),	Cum Percent Label Format( "Percent", 12, 1 ));

```

### Get Causes

**구문:** obj &lt;&lt; Get Causes( &lt;"First" | "Last" | "First %" | "Last %", number&gt; )

**설명:** 현재 표시 순서를 기반으로 파레토도에서 원인 이름 목록을 반환합니다. 옵션이 제공되지 않으면 모든 원인이 반환됩니다. 그렇지 않으면 키워드와 숫자를 사용하여 처음 N개, 마지막 N개, 처음 N개 백분율 또는 마지막 N개 백분율을 반환합니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Get Causes;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Get Causes( "First", 3 );

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Get Causes( "Last %", 10 );

```

**예제 4**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot(	Cause( :Causes ),	Freq( :Count ),	Combine Causes( {"Corrosion", "Metallization", "Doping"}, "3 Others" ),	Move to Last( {"3 Others"} ));obj << Get Causes( "Last", 3 );

```

### Group Settings

**구문:** obj &lt;&lt; Group Settings( Column, &lt;Levels In View( number )&gt;, &lt;Start Level( number ), &lt;Show Title (0|1)&gt;, &lt;Title Color( color )&gt;, &lt;Levels Color( color )&gt; )

**설명:** 그룹화된 파레토도의 모양을 제어합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Group Settings(		:clean,		Levels In View( 1 ),		Start Level( 1 ),		Title Color( "Blue" ),		Levels Color( "Light Blue" )	));

```

### Label Cum Percent Points

**구문:** obj &lt;&lt; Label Cum Percent Points( state=0|1 )

**설명:** 그래프의 각 막대에 누적 백분율을 보여 주는 라벨을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Label Cum Percent Points( 1 );

```

### Legend Position

**구문:** obj &lt;&lt; Legend Position( ("Right" | "Bottom" | "Left" | "Top") )

**설명:** 범례 위치를 설정합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Legend Position( "Bottom" );

```

### Legend Settings

**구문:** obj &lt;&lt; Legend Settings

**설명:** 범례 특성을 수정하는 대화상자를 엽니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );Wait( 1 );obj << Legend Settings();

```

### Move to First

**구문:** obj &lt;&lt; Move to First( {level1, level2, ...} | &lt;&lt; First(N) | &lt;&lt; Last(N) )

**설명:** 지정된 수준에 대한 막대가 가장 먼저 나타나도록 막대를 이동합니다. 수준은 원인 이름 목록으로 지정하거나, 결합할 여러 원인과 함께 처음 또는 마지막 메시지를 보내 지정할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << Move to First( {"corrosion", "doping"} );

```

### Move to Last

**구문:** obj &lt;&lt; Move to Last( {level1, level2, ...} | &lt;&lt; First(N) | &lt;&lt; Last(N) )

**설명:** 지정된 수준에 대한 막대가 마지막에 나타나도록 막대를 이동합니다. 수준은 원인 이름 목록으로 지정하거나, 결합할 여러 원인과 함께 처음 또는 마지막 메시지를 보내 지정할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << Move to Last( {"miscellaneous"} );

```

### N Legend

**구문:** obj &lt;&lt; N Legend( state=0|1 )

**설명:** 그림 영역에 총 표본 크기를 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << N Legend( 1 );

```

### No Plot

**구문:** obj &lt;&lt; No Plot( state=0|1 )

**설명:** 파레토도에 대한 개요 노드를 닫습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ), Per Unit Rates( 1 ) );obj << No Plot( 1 );

```

### Orientation

**구문:** obj &lt;&lt; Orientation( "수직"|"수평" )

**설명:** 파레토도의 방향을 제어합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Orientation( "Horizontal" );

```

### Pareto Line Connect Style

**구문:** obj &lt;&lt; Pareto Line Connect Style( "선"|"곡선"|"단계" )

**설명:** 파레토 선의 연결 스타일을 제어합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Show Pareto Line( 1 ), Show Pareto Bars( 0 ) );obj << Pareto Line Connect Style( "Step" );

```

### Per Unit Rates

**구문:** obj &lt;&lt; Per Unit Rates( state=0|1 )

**설명:** 그룹 간 결함 비율을 비교합니다. 표본 크기가 지정된 경우 DPU(Defects per Unit) 및 PPM(Parts per Million) 열이 보고서에 추가됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot(	Cause( :Causes ),	Per Unit Analysis( Constant( Sample Size( 1000 ) ) ),	Freq( :Count ));obj << Per Unit Rates( 1 );

```

### Percent Scale

**구문:** obj &lt;&lt; Percent Scale( state=0|1 )

**설명:** 왼쪽 세로 축을 백분율 척도로 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure Raw Data.jmp" );obj = dt << Pareto Plot( Cause( :failure ) );obj << Percent Scale( 1 );

```

### Pie Chart

**구문:** obj &lt;&lt; Pie Chart( state=0|1 )

**설명:** 막대를 파이 차트로 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Pie Chart( 1 );

```

### Reorder Horizontal

**구문:** obj &lt;&lt; Reorder Horizontal( level1, level2, ... )

**설명:** 두 개 이상의 그룹이 있는 경우 가로로 그룹화된 파레토도를 재정렬합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );Wait( 2 );obj << Reorder Horizontal( "before", "after" );

```

### Reorder Vertical

**구문:** obj &lt;&lt; Reorder Vertical( level1, level2, ... )

**설명:** 두 개 이상의 변수가 있는 경우 세로로 그룹화된 파레토도를 재정렬합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );Wait( 2 );obj << Reorder Vertical( "Process B", "Process A" );

```

### Separate Causes

**구문:** obj &lt;&lt; Separate Causes

**설명:** 결합된 원인을 별도의 막대로 분리합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"} );Wait( 2 );obj << Separate Causes;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Combine Causes( {"miscellaneous", "silicon defect", "doping"}, "Other Causes" );Wait( 2 );obj << Separate Causes( "Other Causes" );

```

### Show Cum Percent Axis

**구문:** obj &lt;&lt; Show Cum Percent Axis( state=0|1 )

**설명:** 그림 오른쪽에 누적 백분율 축을 표시하거나 숨깁니다. 참고: X 또는 그룹화 변수가 있는 경우 맨 오른쪽 그림에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Cum Percent Axis( 1 );

```

### Show Cum Percent Curve

**구문:** obj &lt;&lt; Show Cum Percent Curve( state=0|1 )

**설명:** 누적 백분율 곡선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Cum Percent Curve( 1 );

```

### Show Cum Percent Points

**구문:** obj &lt;&lt; Show Cum Percent Points( state=0|1 )

**설명:** 그래프에 누적 백분율 점을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Show Cum Percent Points( 1 );

```

### Show Error Bars

**구문:** obj &lt;&lt; Show Error Bars( state=0|1 )

**설명:** 파레토 막대에 신뢰도 범위에 대한 오차 막대를 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Error Bars( 1 );

```

### Show Pareto Bars

**구문:** obj &lt;&lt; Show Pareto Bars( state=0|1 )

**설명:** 각 원인에 대한 값을 표시하는 막대를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ), Show Pareto Line( 1 ) );obj << Show Pareto Bars( 0 );

```

### Show Pareto Line

**구문:** obj &lt;&lt; Show Pareto Line( state=0|1 )

**설명:** 각 원인에 대한 값을 연결하는 선을 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Pareto Line( 1 );

```

### Show Pareto Markers

**구문:** obj &lt;&lt; Show Pareto Markers( state=0|1 )

**설명:** 각 원인에 대한 값에 표식을 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );obj << Show Pareto Markers( 1 );

```

### Subcategory Bar Style

**구문:** obj &lt;&lt; Subcategory Bar Style( "나란히"|"누적됨"|"불릿"|"내포"|"단일"|"바늘"|"부동" )

**설명:** 하위 범주가 있는 경우 막대의 표시를 제어합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	Subcategory( :clean ),	Freq( :N ),	Subcategory Bar Style( Stacked ));

```

### Subset

**구문:** obj &lt;&lt; Subset

**설명:** 파레토도의 선택 항목에서 데이터 테이블 부분집합을 생성합니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );dt << Select Where( :Causes == "Corrosion" );obj = dt << Pareto Plot( Cause( :Causes ), Freq( :Count ) );obj << Subset;

```

### Swap Group Orientation

**구문:** obj &lt;&lt; Swap Group Orientation( state=0|1 )

**설명:** 가로 그룹과 세로 그룹을 바꿉니다. 그룹이 하나뿐이면 표시 방향을 변경합니다.

**JMP추가된 버전:** 17

#### 두 그룹

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );Wait( 2 );obj << Swap Group Orientation( true );

```

#### 한 그룹

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );Wait( 2 );obj << Swap Group Orientation( true );

```

### Synchronize Y Axes

**구문:** obj &lt;&lt; Synchronize Y Axes( state=0|1 )

**설명:** 확대/축소 및 이동이 왼쪽 y 축과 동기화되도록 오른쪽 y 축을 잠급니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ) );obj << Synchronize Y Axes( 0 );

```

### Tables Match Plot

**구문:** obj &lt;&lt; Tables Match Plot( {&lt;Per Unit Rates( 0|1 )&gt;, &lt;Test Rate Within Groups( 0|1 )&gt;, &lt;Test Rates Across Groups( 0|1 )&gt;} )

**설명:** 가산 분석 테이블에 파레토도와 매칭되는 결합 원인 값을 표시할지 아니면 결합되지 않은 원래 원인을 표시할지를 제어합니다. 값이 1이면 결합된 원인 값이 표시되고, 값이 0이면 결합되지 않은 값이 표시됩니다. 명령에 모든 테이블을 지정해야 하는 것은 아닙니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot(	Cause( :failure ),	X( :clean ),	Freq( :N ),	Per Unit Rates( 1 ),	Test Rate Within Groups( 1 ),	Test Rates Across Groups( 1 ),	Combine Causes( {"silicon defect", "oxide defect", "doping"}, "3 Others" ),	Move to Last( {"corrosion", "miscellaneous", "3 Others"} ));obj << Tables Match Plot(	{Per Unit Rates( 1 ), Test Rate Within Groups( 1 ), Test Rates Across Groups( 1 )});

```

### Test Rate Within Groups

**구문:** obj &lt;&lt; Test Rate Within Groups( state=0|1 )

**설명:** 가능도비 검정으로 원인이 그룹 내에서 동일한 비율을 가지는지 여부를 검정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process ), Freq( :Count ) );obj << Test Rate Within Groups( 1 );

```

### Test Rates Across Groups

**구문:** obj &lt;&lt; Test Rates Across Groups( state=0|1 )

**설명:** 가능도비 검정으로 원인이 그룹 간에 동일한 비율을 가지는지 여부를 검정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Pareto Plot( Cause( :Causes ), X( :Process, :Day ), Freq( :Count ) );obj << Test Rates Across Groups( 1 );

```

### Threshold of Combined Causes

**구문:** obj &lt;&lt; Threshold of Combined Causes

**설명:** 임계값 아래의 원인을 결합합니다. 이는 초기 플랫폼 시작 시 수행됩니다.

#### 개수

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Threshold of Combined Causes( Count( 5 ) ) );

```

#### 꼬리 %

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), Freq( :N ), Threshold of Combined Causes( Tail %( 25 ) ) );

```

### Ungroup Plots

**구문:** obj &lt;&lt; Ungroup Plots( state=0|1 )

**설명:** 두 개 이상의 그룹이 있는 경우 그룹화된 파레토도를 분리합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure2.jmp" );obj = dt << Pareto Plot( Cause( :failure ), X( :clean ), Freq( :N ) );Wait( 2 );obj << Ungroup Plots( 1 );

```

