# Fit Life by X



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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**구문:** obj = Fit Life by X(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 연결된 생성자

### Fit Life by X

**구문:** Fit Life by X( Y( column ), X( column ), Relationship( string ), Distribution( string ), &lt;Censor( column )&gt; )

**설명:** 단일 회귀 계수로 파라미터화된 사건 발생 시간 데이터의 분포를 분석합니다. 분석 옵션으로는 가속 고장 시간 모형, 그룹 간 수명 분포 및 회귀 요인 변환이 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Censor

**구문:** obj &lt;&lt; Censor( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Freq

**구문:** obj &lt;&lt; Freq( column )

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	Freq( :_freqcol ));

```

### Time to Event

**구문:** obj &lt;&lt; Time to Event( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### X

**구문:** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

## 항목 메시지

### Add Density Curve to Scatterplot

**구문:** obj &lt;&lt; Add Density Curve to Scatterplot( number )

**설명:** 산점도에서 X 변수의 지정된 값 위치에 밀도 곡선을 추가합니다. 범례에서 선택한 각 분포에 대해 밀도 곡선이 표시됩니다. 범례는 산점도의 오른쪽에 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Add Density Curve to Scatterplot( 50 );

```

### Add Quantile Line to Scatterplot

**구문:** obj &lt;&lt; Add Quantile Line to Scatterplot( quantile )

**설명:** 산점도의 지정된 분위수 위치에 선을 추가합니다. 범례에서 선택한 각 분포에 대해 분위수 선이 표시됩니다. 범례는 산점도의 오른쪽에 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Add Quantile Line to Scatterplot( 0.1 );

```

### Censor Code

**구문:** obj = Fit Life by X(...Censor Code( value=1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 오른쪽 중도절단된 관측값을 지정하는 중도절단 열의 값을 식별합니다. 기본값은 "1"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Status ),	Freq( :Weight ),	Censor Code( "Censored" ),	Relationship( Arrhenius Celsius ));

```

### Confidence Interval Method

**구문:** obj = Fit Life by X(...Confidence Interval Method( method="Wald" )...)

**설명:** 모수에 대한 신뢰 구간을 계산하는 데 사용되는 방법을 지정합니다. Wald 방법과 가능도 방법 중에서 선택합니다. Wald는 근사 방법이며 더 빠르게 실행됩니다. 가능도 방법은 더 정확한 모수를 제공하지만 계산하는 데 시간이 오래 걸립니다. 기본값은 "Wald"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	Confidence Interval Method( "Likelihood" ));

```

### Density

**구문:** obj &lt;&lt; Density( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**설명:** 수명 값 t와 공변량 값 x에서 지정된 분포의 밀도를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));d = obj << Density( Lognormal, 30000, 10 );Show( d );

```

### Distribution

**구문:** obj = Fit Life by X(...Distribution( Weibull|Lognormal|Loglogistic|Frechet |SEV|Log|Normal|Logistic|LEV )...)

**설명:** X 변수와 Y 변수 간의 관계를 모델링하는 데 사용되는 분포를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Frechet ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ));

```

### Fit All Distributions

**구문:** obj &lt;&lt; Fit All Distributions

**설명:** 사용 가능한 모든 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit All Distributions;

```

### Fit Exponential

**구문:** obj &lt;&lt; Fit Exponential

**설명:** 지수 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Exponential;

```

### Fit Frechet

**구문:** obj &lt;&lt; Fit Frechet

**설명:** Fréchet 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Frechet;

```

### Fit LEV

**구문:** obj &lt;&lt; Fit LEV

**설명:** LEV(최대 극단값) 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit LEV;

```

### Fit Logistic

**구문:** obj &lt;&lt; Fit Logistic

**설명:** 로지스틱 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Logistic;

```

### Fit Loglogistic

**구문:** obj &lt;&lt; Fit Loglogistic

**설명:** 로그로지스틱 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Loglogistic;

```

### Fit Lognormal

**구문:** obj &lt;&lt; Fit Lognormal

**설명:** 로그 정규 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Weibull ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Lognormal;

```

### Fit Normal

**구문:** obj &lt;&lt; Fit Normal

**설명:** 정규 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Normal;

```

### Fit SEV

**구문:** obj &lt;&lt; Fit SEV

**설명:** SEV(최소 극단값) 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit SEV;

```

### Fit Weibull

**구문:** obj &lt;&lt; Fit Weibull

**설명:** Weibull 분포를 데이터에 적합시킵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Inverse Power ),	Freq( :Weight ),	Show Density Curves( 1 ));Wait( 1 );obj << Fit Weibull;

```

### Get Results

**구문:** obj &lt;&lt; Get Results

**설명:** 각 분포 적합에 대한 추정값, 표준 오차, 공분산 행렬 및 수렴 결과를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));r = obj << Get Results;Show( r );

```

### Hazard

**구문:** obj &lt;&lt; Hazard( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**설명:** 수명 값 t와 공변량 값 x에서 지정된 분포의 위험을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));h = obj << Hazard( Lognormal, 30000, 10 );Show( h );

```

### Maximum Iterations

**구문:** obj &lt;&lt; Maximum Iterations( number )

**설명:** 수렴을 찾는 데 사용되는 최대 반복 수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Frechet ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Maximum Iterations( 20 ),	Nested Model Tests( Regression ));

```

### Nested Model Tests

**구문:** obj &lt;&lt; Nested Model Tests( Saturated Location|Location|Location and Scale|Saturated Location and Scale|Regression|No Effect )

**설명:** 보고서에 비모수 중첩 그림, 내포 모형 시험 및 다중 확률도를 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Arrhenius Celsius ),	Nested Model Tests( Regression ));

```

### Probability

**구문:** obj &lt;&lt; Probability( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, t, x )

**설명:** 수명 값 t와 공변량 값 x에서 지정된 분포의 확률을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));p = obj << Probability( Lognormal, 30000, 10 );Show( p );

```

### Quantile

**구문:** obj &lt;&lt; Quantile( Weibull|Lognormal|Loglogistic|Frechet| SEV|Normal|Logistic|LEV, p, x )

**설명:** 확률 p와 공변량 값 x에서 지정된 분포의 분위수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));q = obj << Quantile( Lognormal, 0.005, 10 );Show( q );

```

### Rejection Sampler Maximum Trials

**구문:** obj &lt;&lt; Rejection Sampler Maximum Trials( number=10000 )

**설명:** 기본값은 "10000"입니다.

**JMP추가된 버전:** 14

### Relationship

**구문:** obj = Fit Life by X(...Relationship( Arrhenius Celsius|Arrhenius Fahrenheit|Arrhenius Kelvin|Inverse Power|Linear|Log|Logit|Reciprocal|Square Root|Box-Cox|Custom|No Effect|Location|Location and Scale )...)

**설명:** 사건과 요인 간의 변환 관계를 식별합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Frechet ),	Censor( :Censor ),	Freq( :Weight ),	Relationship( Inverse Power ));

```

### Set Level of Quantile Line CI Bands

**구문:** obj &lt;&lt; Set Level of Quantile Line CI Bands( alpha=0.95 )

**설명:** 분위수 선 주위의 신뢰 구간에 대한 신뢰 수준을 지정합니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Add Quantile Line to Scatterplot( 0.1 );obj << Show Quantile Line CI Bands( 1 );Wait( 1 );obj << Set Level of Quantile Line CI Bands( .90 );

```

### Set Scale

**구문:** obj &lt;&lt; Set Scale( Weibull|Lognormal|Loglogistic|Frechet|SEV |Normal|Logistic|LEV|Linear )

**설명:** 비모수 중첩 그림에 사용되는 척도를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));Wait( 1 );obj << Set Scale( Logistic );

```

### Set Scriptables

**구문:** obj &lt;&lt; Set Scriptables( {&lt;Distribution Comparisons( options )&gt;, &lt;Quantile Comparisons( options )&gt;, &lt;Hazard Comparisons( options )&gt;, &lt;Density Comparisons( options )&gt;} )

**설명:** 출력 내 여러 섹션의 프로파일러 내 스크립트 가능 옵션을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Set Scriptables(	{Distribution Comparisons( Profiler( 1, Term Value( Temp( 50 ), Hours( 2600 ) ) ) )});

```

### Show Density Curves

**구문:** obj &lt;&lt; Show Density Curves( state=0|1 )

**설명:** 산점도에 밀도 곡선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Show Density Curves( 1 );

```

### Show Overlay by Levels

**구문:** obj &lt;&lt; Show Overlay by Levels( state=0|1 )

**설명:** 수준별 중첩 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Location ),	Freq( :Weight ));rpt = obj << report;rpt["Scatterplot"] << Close( 1 );rpt["Nonparametric Overlay"] << Close( 1 );rpt["Comparisons"] << Close( 1 );rpt[TabListBox( 2 )] << SetSelected( 2 );rpt["Overlay by Levels"] << Close( 0 );Wait( 1 );obj << Show Overlay by Levels( 0 );Wait( 1 );obj << Show Overlay by Levels( 1 );

```

### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 비모수 중첩 그림과 다중 확률도에 데이터 점을 표시하거나 숨깁니다. 점이 숨겨지면 대신 계단 함수가 표시됩니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));Wait( 1 );obj << Show Points( 0 );Wait( 1 );obj << Show Points( 1 );

```

### Show Quantile Line CI Bands

**구문:** obj &lt;&lt; Show Quantile Line CI Bands( state=0|1 )

**설명:** 분위수 선 주위에 신뢰 구간을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Add Quantile Line to Scatterplot( 0.1 );Wait( 1 );obj << Show Quantile Line CI Bands( 1 );

```

### Show Surface Plot

**구문:** obj &lt;&lt; Show Surface Plot( state=0|1 )

**설명:** 보고서의 개별 분포 결과 섹션에서 표면 그림을 표시하거나 숨깁니다. 표면 그림은 개별 분포에 대한 분포, 분위수, 위험 및 밀도 섹션에 나타납니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));rpt = obj << report;rpt["Scatterplot"] << Close( 1 );rpt["Comparisons"] << Close( 1 );rpt[TabListBox( 2 )] << SetSelected( 2 );rpt["Lognormal"] << Close( 0 );Wait( 1 );obj << Show Surface Plot( 0 );Wait( 1 );obj << Show Surface Plot( 1 );

```

### TAF

**구문:** obj &lt;&lt; TAF( Weibull|Lognormal|Loglogistic|Frechet, value, x )

**설명:** 지정된 분포, 가속 조건 x 및 기준 조건 값에 대한 시간 가속 요인을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));af = obj << TAF( Lognormal, 10, 40 );Show( af );

```

### Tabbed Individual Report

**구문:** obj &lt;&lt; Tabbed Individual Report( state=0|1 )

**설명:** 개별 보고서를 탭 패널로 구성합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));rpt = obj << report;rpt["Scatterplot"] << Close( 1 );rpt["Comparisons"] << Close( 1 );Wait( 1 );obj << Tabbed Individual Report( 0 );

```

### Tabbed Overall Report

**구문:** obj &lt;&lt; Tabbed Overall Report( state=0|1 )

**설명:** 전체 보고서를 보고서의 그림, 비교 및 결과 섹션에 대한 탭 패널로 구성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ),	Nested Model Tests( Regression ));Wait( 1 );obj << Tabbed Overall Report( 1 );

```

### Time Acceleration Baseline

**구문:** obj &lt;&lt; Time Acceleration Baseline( number )

**설명:** 가속 요인에 대한 사용 조건을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));obj << Time Acceleration Baseline( 20 );

```

### Transposed Axes

**구문:** obj &lt;&lt; Transposed Axes( state=0|1 )

**설명:** 가속 요인이 가로 축 대신 세로 축에 나타나도록 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Transposed Axes( 1 );

```

### Use Transformation Scale

**구문:** obj &lt;&lt; Use Transformation Scale( state=0|1 )

**설명:** 산점도의 가속 요인 축에 변환 척도가 사용되도록 지정합니다. 이 옵션은 가속 요인 축에 대해 선형 척도와 비선형 척도 간을 전환합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );obj = dt << Fit Life by X(	Y( :Hours ),	X( :Temp ),	Distribution( Lognormal ),	Censor( :Censor ),	Relationship( Arrhenius Celsius ),	Freq( :Weight ));Wait( 1 );obj << Use Transformation Scale( 1 );

```

