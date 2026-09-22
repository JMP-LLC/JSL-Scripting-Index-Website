# Marker Statistics



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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**구문:** obj = Marker Statistics(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 연결된 생성자

### Marker Statistics

**구문:** Marker Statistics( Marker( columns ), With Marker( columns ) )

**설명:** 유전 표지자 데이터 분석을 수행하여 마이너 대립유전자 빈도, Hardy-Weinberg 평형 및 연관비평형과 같은 측도를 계산합니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

**설명:** 지정된 열의 각 수준에 대해 분석을 수행하고 결과를 별도의 테이블과 보고서에 제공합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), By( :Sex ) );

```

### Grouping

**구문:** obj &lt;&lt; Grouping( column(s) )

**설명:** 지정된 열의 각 수준에 할당된 행을 개별적으로 분석합니다. 모든 결과는 단일 테이블과 보고서에 제공됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), Grouping( :Sex ) );

```

### Marker

**구문:** obj &lt;&lt; Marker( column(s) )

**설명:** 유전 표지자를 포함하는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

### With Marker

**구문:** obj &lt;&lt; With Marker( column(s) )

**설명:** 표지자에 지정된 유전 표지자 열을 사용하여 쌍별 연관비평형 추정을 위한 유전 표지자를 포함하는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );

```

## 항목 메시지

### Counts Table

**구문:** obj &lt;&lt; Counts Table( state=1 )

**설명:** 유전자형 수준별 개수 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Counts Table( 1 ));obj << Counts Table( 0 );

```

### LD Decay Plot

**구문:** obj &lt;&lt; LD Decay Plot( state=1 )

**설명:** LD 붕괴 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));obj << LD Decay Plot( 1 );

```

### Levels Table

**구문:** obj &lt;&lt; Levels Table( state=1 )

**설명:** 유전자형 수준 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Levels Table( 1 ));obj << Levels Table( 0 );

```

### Marker Format

**구문:** obj = Marker Statistics(...Marker Format( "숫자"|"단일 문자"|"문자"|"단일 코드 뉴클레오티드"|"뉴클레오티드"="숫자" )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 유전자형 형식을 선택하는 옵션을 제공합니다. 옵션에는 단일 문자(A, B, H), 단일 코드 뉴클레오티드(IUPAC: A,C,G,T,R,Y,S,W,K,M,+,0,-,N), 뉴클레오티드(AA, CC, GG, TT, AC, AT 등), 숫자(0, 1, 2, ..., p) 및 문자(ApBp 또는 Ap/Bp)가 포함됩니다. 숫자 형식과 문자 형식은 p-배수성을 가진 유전자형을 처리합니다. 기본값은 "숫자"입니다.

### PValue Plot

**구문:** obj &lt;&lt; PValue Plot( state=1 )

**설명:** p 값 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ) );obj << PValue Plot( 0 );

```

### PValues Table on Launch

**구문:** obj = Marker Statistics(...PValues Table on Launch( state=0 )...)

**설명:** 플랫폼을 시작할 때 p 값 데이터 테이블을 생성할지 여부를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 17

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	PValues Table on Launch( 1 ),	Ploidy( 2 ));

```

### Ploidy

**구문:** obj = Marker Statistics(...Ploidy( number=2 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 배수성 수준을 나타내는 양의 짝수를 지정합니다. 기본값은 "2"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));

```

### Recode Marker

**구문:** obj &lt;&lt; Recode Marker

**설명:** 마이너 대립유전자와 메이저 대립유전자를 전환하여 원래 데이터 테이블의 선택된 모든 표지자 열을 재코딩합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), PValues Table on Launch( 1 ) );obj << Select Where( Marker Annotation Position == 11 );obj << Recode Marker;

```

### Result Table

**구문:** obj &lt;&lt; Result Table( state=1 )

**설명:** 결과 테이블을 표시합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));obj << Result Table( 0 );

```

### Save Counts Table

**구문:** obj &lt;&lt; Save Counts Table

**설명:** 개수를 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), PValues Table on Launch( 1 ) );Show( obj << Save Counts Table );

```

### Save Levels Table

**구문:** obj &lt;&lt; Save Levels Table

**설명:** 수준을 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), PValues Table on Launch( 1 ) );Show( obj << Save Levels Table );

```

### Save Proportion of Missing Markers

**구문:** obj &lt;&lt; Save Proportion of Missing Markers

**설명:** 결측 유전자형의 비율이 포함된 열을 원래 데이터 테이블에 추가합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Save Proportion of Missing Markers);

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));obj << Save Proportion of Missing Markers;

```

### Save Result Table

**구문:** obj &lt;&lt; Save Result Table

**설명:** 결과를 데이터 테이블에 저장합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ),	Save Result Table);

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics(	Marker( Column Group( "Markers" ) ),	With Marker( Column Group( "Markers" ) ),	Ploidy( 2 ));Show( obj << Save Result Table );

```

### Select Columns

**구문:** obj &lt;&lt; Select Columns

**설명:** 결과 테이블에서 선택한 행에 해당하는 열을 원래 데이터 테이블에서 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), PValues Table on Launch( 1 ) );obj << Select Where( Minor Allele Frequency >= 0.05 );obj << Select Columns;

```

### Select Where

**구문:** obj &lt;&lt; Select Where

**설명:** 보고서 테이블에서 특정 조건에 해당하는 항목을 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), PValues Table on Launch( 1 ) );obj << Select Where( Minor Allele Frequency >= 0.05 );

```

### Select and Recode Marker

**구문:** obj &lt;&lt; Select and Recode Marker

**설명:** 마이너 대립유전자와 메이저 대립유전자를 전환하여 원래 데이터 테이블에서 표지자 열을 선택하고 재코딩합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), PValues Table on Launch( 1 ) );obj << Select and Recode Marker( Marker Annotation Position == 11 );

```

### Unthreaded

**구문:** obj = Marker Statistics(...Unthreaded( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 계산에 주 스레드만 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Marker Statistics( Marker( Column Group( "Markers" ) ), Ploidy( 2 ), Unthreaded( 1 ) );

```

### Use Annotation Table

**구문:** obj = Marker Statistics(...Use Annotation Table( state=0|1 )...) &lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 표지자 주석 그룹 및 위치가 포함된 주석 테이블을 사용합니다.

```jsl

dt1 = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );dt2 = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree Anno.jmp" );dt1 << Marker Statistics(	Marker( Column Group( "Markers" ) ),	Use Annotation Table(		1,		dt2,		Marker Variables( :Marker ),		Annotation Group( :Gene ),		Annotation Position( :Physical Position ),		Go	),	Ploidy( 2 ));

```

