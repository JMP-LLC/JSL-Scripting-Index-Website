# Life Distribution and Extensions



## Compare Groups

### 공유 항목 메시지

#### Action

**구문:** obj << Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**구문:** obj << Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj << Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj << Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
obj << Copy Script;

```

#### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj << Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj << Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**구문:** obj << Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj << Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**구문:** obj << Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj << Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**구문:** obj << Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**구문:** obj << Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**구문:** obj << Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**구문:** obj << Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**구문:** obj << Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**구문:** obj << Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj << Report;

Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Script Window;

```

#### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**구문:** obj << Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**구문:** obj << Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**구문:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**구문:** obj << View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>실행기 항목: 예</b>

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### 열

#### Censor

**구문:** obj << Censor( column )

#### Freq

**구문:** obj << Freq( column )

#### Grouping

**구문:** obj << Grouping( column(s) )

#### Label

**구문:** obj << Label( column )

#### Time to Event

**구문:** obj << Time to Event( column(s) )

#### Y

**구문:** obj << Y( column(s) )

### 항목 메시지

#### Change Confidence Level

**구문:** obj << Change Confidence Level( fraction )

**설명:** 전체 플랫폼에 대한 신뢰 수준을 지정합니다. 이에 따라 모든 그림과 보고서가 업데이트됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Change Confidence Level( 0.99 );

```

#### Default Parametric Distribution

**구문:** obj << Default Parametric Distribution( "로그 정규"|"Weibull"|"로그로지스틱"|"Frechet"|"정규"|"SEV"|"로지스틱"|"LEV"|"지수"|"로그 일반화 감마"|"일반화 감마"|"TH Weibull"|"TH 로그 정규"|"TH Frechet"|"TH 로그로지스틱"|"ZI Weibull"|"ZI 로그 정규"|"ZI Frechet"|"ZI 로그로지스틱"|"DS Weibull"|"DS 로그 정규"|"DS Frechet"|"DS 로그로지스틱" )

#### Estimate Probability

**구문:** obj << Estimate Probability( state=<0|1> | <Compute( array )> )

**설명:** 분포 비교 보고서에서 가장 최근에 선택한 분포에 해당하는 확률 추정 보고서를 표시하거나 숨깁니다. 확률 추정을 위한 시간 값 배열을 지정하려면 "계산" 인수를 사용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
obj << Estimate Probability( 1 );
obj << Estimate Probability( Compute( [1000] ) );

```

#### Estimate Quantile

**구문:** obj << Estimate Quantile( state=<0|1> | <Compute( array )> )

**설명:** 분위수 비교 보고서에서 가장 최근에 선택한 분포에 해당하는 분위수 추정 보고서를 표시하거나 숨깁니다. 분위수 추정을 위한 확률 값 배열을 지정하려면 "계산" 인수를 사용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Exponential );
obj << Estimate Quantile( 1 );
obj << Estimate Quantile( Compute( [.1] ) );

```

#### Fit Distribution

**구문:** obj << Fit Distribution( distribution )

**설명:** 지정된 분포를 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution( Perspective( Compare Groups ), Y( :days ), Grouping( :Group ), Censor( :Censor ) );
obj << Fit Distribution( "Loglogistic" );

```

#### Interval Type

**구문:** obj << Interval Type( "동시"|"점별" )

**설명:** 분포 비교 그림의 비모수 적합에 표시되는 신뢰 구간 유형을 지정합니다. 사용 가능한 옵션은 점별 신뢰 구간 또는 동시 신뢰 구간입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution( Perspective( Compare Groups ), Y( :days ), Grouping( :Group ), Censor( :Censor ) );
Wait( 1 );
obj << Interval Type( "Pointwise" );

```

#### Select Distribution

**구문:** obj << Select Distribution( Distribution|Quantile|Hazard|Density, distribution )

**설명:** 지정된 그래프의 각 그룹에 대해 표시할 분포를 지정합니다. 이것은 분포 비교, 분위수 비교, 위험 비교 또는 밀도 비교 보고서에서 분포 옵션을 선택하는 것과 같습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution( Perspective( Compare Groups ), Y( :days ), Grouping( :Group ), Censor( :Censor ) );
obj << Select Distribution( Distribution, Weibull );

```

#### Select Scale

**구문:** obj << Select Scale( distribution )

**설명:** 분포 비교 그림의 확률 축에 대한 척도를 지정합니다. 이것은 분포 비교 보고서의 "척도"에서 옵션을 선택하는 것과 같습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution( Perspective( Compare Groups ), Y( :days ), Grouping( :Group ), Censor( :Censor ) );
obj << Select Scale( Normal );

```

#### Show Confidence Area

**구문:** obj << Show Confidence Area( state=0|1 )

**설명:** 그림에 음영 신뢰 영역을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Select Distribution( Distribution, Exponential )
);
Wait( 1 );
obj << Show Confidence Area( 0 );

```

#### Show Density Functions

**구문:** obj << Show Density Functions( state=0|1 )

**설명:** 선택한 분포에 대한 각 그룹의 밀도 함수 그림을 중첩하는 밀도 비교 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Density Functions( 1 )
);
obj << Select Distribution( Density, Weibull );

```

#### Show Hazard Functions

**구문:** obj << Show Hazard Functions( state=0|1 )

**설명:** 선택한 분포에 대한 각 그룹의 위험 함수 그림을 중첩하는 위험 비교 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Hazard Functions( 1 )
);
obj << Select Distribution( Hazard, Weibull );

```

#### Show Points

**구문:** obj << Show Points( state=0|1 )

**설명:** 확률도에 데이터 점을 표시하거나 숨깁니다. 수명 분포 플랫폼에서는 계단 함수의 중간점 추정값을 사용하여 확률도를 생성합니다. &apos;점 표시&apos; 옵션을 선택 취소하면 중간점 추정값이 Kaplan-Meier 추정값으로 대체됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution( Perspective( Compare Groups ), Y( :days ), Grouping( :Group ), Censor( :Censor ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Quantile Functions

**구문:** obj << Show Quantile Functions( state=0|1 )

**설명:** 선택한 분포에 대한 각 그룹의 분위수 함수 그림을 중첩하는 분위수 비교 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Quantile Functions( 1 )
);
obj << Select Distribution( Quantile, Weibull );

```

#### Show Survival Curve

**구문:** obj << Show Survival Curve( state=0|1 )

**설명:** 분포 비교 확률도에서 고장 확률과 생존 곡선 간을 전환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Show Survival Curve( 1 )
);

```

#### Tabbed Report

**구문:** obj << Tabbed Report( state=0|1 )

**설명:** 그래프와 데이터를 기본 개요 스타일이 아니라 개별 탭에 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = Life Distribution(
	Perspective( Compare Groups ),
	Y( :days ),
	Grouping( :Group ),
	Censor( :Censor ),
	Tabbed Report( 1 )
);

```

## Competing Cause > Mean Remaining Life

### 항목 메시지

#### Compute

**구문:** obj << Mean Remaining Life( Compute( array ) )

**설명:** 평균 잔존 수명 계산기에 추가할 시간 값 배열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Configuration

**구문:** obj << Mean Remaining Life( Configuration( useBootstrap, BootstrapSize, SampleSize, RandomSeed ) )

**설명:** 주어진 일련의 생존 시간에서 유닛의 평균 잔존 수명을 추정하는 평균 잔존 수명 계산기의 설정을 지정합니다. 인수는 붓스트랩 사용 여부, 붓스트랩 집계 분포 수, 시뮬레이션된 고장 시간 수 및 난수 시드값을 지정합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Get Results

**구문:** obj << Mean Remaining Life( Get Results )

**설명:** 평균 잔존 수명 계산기에서 테이블 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );
obj << Mean Remaining Life( Get Results );

```

## Competing Cause

### 공유 항목 메시지

#### Action

**구문:** obj << Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**구문:** obj << Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj << Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj << Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
obj << Copy Script;

```

#### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj << Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj << Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**구문:** obj << Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj << Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**구문:** obj << Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj << Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**구문:** obj << Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**구문:** obj << Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**구문:** obj << Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**구문:** obj << Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**구문:** obj << Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**구문:** obj << Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj << Report;

Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
obj << Save Script to Script Window;

```

#### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**구문:** obj << Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**구문:** obj << Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**구문:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**구문:** obj << View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Y(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>실행기 항목: 예</b>

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### 열

#### By

**구문:** obj << By( column(s) )

#### Censor

**구문:** obj << Censor( column )

#### Failure Cause

**구문:** obj << Failure Cause( column )

#### Freq

**구문:** obj << Freq( column )

#### Label

**구문:** obj << Label( column )

#### Time to Event

**구문:** obj << Time to Event( column(s) )

#### Y

**구문:** obj << Y( column(s) )

### 항목 메시지

#### Bootstrap Sample Size

**구문:** obj << Bootstrap Sample Size( n )

**설명:** 베이지안 추정값 또는 Weibayes 결과를 구하는 데 사용되는 붓스트랩 방법에 사용할 표본 수를 지정합니다. 베이지안 및 Weibayes 방법의 경우 모수 붓스트랩을 사용하여 분포 프로파일러에 나타나는 집계 함수의 신뢰 한계를 시뮬레이션해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull, 0}, {"2",
		Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
	)
);
obj << Bootstrap Sample Size( 1000 );

```

#### Compute Remaining Life Distribution

**구문:** obj << Compute Remaining Life Distribution( time0, time1 )

**설명:** 유닛이 시간0까지 생존했다고 가정할 때 시간1에서의 잔존 수명 분포 값이 포함된 목록을 반환합니다. 이 목록에는 잔존 수명 추정값의 하한 및 상한도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );
p = obj << Compute Remaining Life Distribution( 2000, 4000 );

```

#### Density

**구문:** obj << Density( t )

**설명:** 지정된 시간에 대한 밀도 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
d = obj << Density( .5 );

```

#### Export Bootstrap Results

**구문:** obj << Export Bootstrap Results( time )

**설명:** 붓스트랩 결과를 새 데이터 테이블에 저장합니다. 붓스트랩 방법을 사용하여 베이지안 추정값 또는 Weibayes 결과를 구합니다. 베이지안 및 Weibayes 방법의 경우 모수 붓스트랩을 사용하여 분포 프로파일러에 나타나는 집계 함수의 신뢰 한계를 시뮬레이션해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 ),
	Fit Model(
		{{"0", Bayesian Lognormal, 0}, {"1", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull, 0}, {"2",
		Weibull, 0}, {"5", Weibull, 0}, {"6", Weibull, 0}, {"9", Weibull, 0}}
	)
);
obj << Export Bootstrap Results( 15000 );

```

#### Export Lifetime Data for Individual Causes

**구문:** obj << Export Lifetime Data for Individual Causes

**설명:** 개별 원인에 대한 수명 데이터로 구성된 쌓인 데이터 집합을 내보냅니다. 각 원인에 대한 수명 데이터는 원래 데이터의 복사본으로, 원인 이외의 모든 관측값을 오른쪽 중도절단한 것입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Allow failure mode to use Bayesian models( 1 )
);
dt = obj << Export Lifetime Data for Individual Causes();

```

#### Fit Model

**구문:** obj << Fit Model( specification )

**설명:** 지정된 규격을 사용하여 경쟁 원인 모형을 적합시킵니다. 모형은 각 원인마다 3개의 항목이 포함된 여러 목록으로 지정됩니다. 각 하위 목록은 원인 코드, 분포 및 원인 생략 여부를 나타내는 표시자로 구성됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Fit Model(
	{{"0", Weibull, 1}, {"10", Weibull, 0}, {"15", Weibull, 0}, {"2", Weibull, 0}, {"5", Weibull, 0}, {"6",
	Weibull, 0}, {"9", Weibull, 0}}
);

```

#### Get Causes

**구문:** obj << Get Causes

**설명:** 원인 코드 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
lst = obj << Get Causes;

```

#### Get Estimates

**구문:** obj << Get Estimates

**설명:** 경쟁 원인 모형에 대한 원인, 개수, 분포 및 모수 추정값이 포함된 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
res = obj << Get Estimates;

```

#### Get Life Distribution

**구문:** obj << Get Life Distribution( i )

**설명:** 경쟁 원인 보고서의 개별 원인 섹션에서 지정된 수명 분포 보고서 개체에 대한 참조를 반환합니다. 이 옵션의 인수에 대해 수명 분포 보고서는 0에서 n-1까지 인덱싱됩니다. 여기서 n은 원인 수입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
ld = (obj << Get Life Distribution( 1 ));

```

#### Get Model Specification

**구문:** obj << Get Model Specification

**설명:** 경쟁 원인 모형에 대한 규격이 포함된 목록을 반환합니다. 이 목록을 경쟁 원인 플랫폼의 모형 적합 메시지에 대한 인수로 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
spec = obj << Get Model Specification;

```

#### Hazard

**구문:** obj << Hazard( t )

**설명:** 지정된 시간에 대한 위험 함수 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
h = obj << Hazard( 2500 );

```

#### Mean Remaining Life

**구문:** obj << Mean Remaining Life( state=0|1 )

obj << Mean Remaining Life( Configuration(), Compute(), Get Results )

**설명:** 지정된 생존 시간에서 유닛의 평균 잔존 수명을 추정할 수 있는 평균 잔존 수명 계산기를 표시하거나 숨깁니다. 이 옵션을 사용하여 평균 잔존 수명 계산기 개체에 메시지를 보낼 수도 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( 1 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Mean Remaining Life( Configuration( 1, 100, 1000, 333 ), Compute( [1000 2000] ) );

```

#### Omit

**구문:** obj << Omit( k, 0|1 )

**설명:** 지정된 원인을 원인 결합 그림에 표시하거나 숨깁니다. 첫 번째 인수는 원인 번호를 지정합니다. 두 번째 인수가 1이면 지정된 원인이 제거되고, 두 번째 인수가 0이면 지정된 원인이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Omit( 1, 1 );

```

#### Probability

**구문:** obj << Probability( t )

**설명:** 지정된 시간에 대한 고장 확률을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
p = obj << Probability( 2500 );

```

#### Quantile

**구문:** obj << Quantile( p )

**설명:** 지정된 확률에 대한 분위수 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
q = obj << Quantile( .5 );

```

#### Set Scale

**구문:** obj << Set Scale( name )

**설명:** 원인 결합 그림의 세로 축에 대한 확률 척도를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Set Scale( Weibull );

```

#### Show Points

**구문:** obj << Show Points( <0|1> )

**설명:** 원인 결합 그림에 데이터 점을 표시하거나 숨깁니다. 수명 분포 플랫폼에서는 계단 함수의 중간점 추정값을 사용하여 확률도를 생성합니다. &apos;점 표시&apos; 옵션을 선택 취소하면 중간점 추정값이 Kaplan-Meier 추정값으로 대체됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Remaining Life Distribution

**구문:** obj << Show Remaining Life Distribution( state=0|1 )

**설명:** 지정된 시간 동안 유닛 생존을 조건으로 잔존 수명 분포에 대한 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Remaining Life Distribution( 1 );

```

#### Show Subdistributions

**구문:** obj << Show Subdistributions( state=0|1 )

**설명:** 각 개별 원인 하위 분포에 대한 프로파일러를 표시하거나 숨깁니다. "하위 분포 표시" 옵션을 선택하면 원인 결합 그림이 업데이트되어 모든 원인에 대한 하위 분포 함수가 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );

```

#### Subdistribution

**구문:** obj << Subdistribution( Cause(i), Compute(m) )

**설명:** 하위 분포 계산을 위한 원인 및 시간 값을 지정합니다. "원인" 인수는 원인 번호를 지정하고, "계산" 인수는 시간 값으로 구성된 열 벡터입니다. 이 메시지를 사용하려면 먼저 "하위 분포 표시" 옵션을 선택해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull )
);
obj << Show Subdistributions( 1 );
obj << Subdistribution( Cause( 2 ), Compute( [5000, 10000] ) );

```

#### Tabbed Report

**구문:** obj << Tabbed Report( state=0|1 )

**설명:** 경쟁 원인 보고서의 섹션을 탭으로 구성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report( 1 )
);

```

#### Tabbed Report for Individual Causes

**구문:** obj << Tabbed Report for Individual Causes( state=0|1 )

**설명:** 경쟁 원인 보고서의 개별 원인 섹션에서 수명 분포 보고서를 탭으로 구성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Appliance.jmp" );
obj = dt << Life Distribution(
	Y( :Time Cycles ),
	Failure Cause( :Cause Code ),
	Failure Distribution by Cause( Weibull ),
	Tabbed Report for Individual Causes( 1 )
);

```

## Life Distribution

### 공유 항목 메시지

#### Action

**구문:** obj << Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**폴더 내에서 검색**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### Automatic Recalc

**구문:** obj << Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj << Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj << Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Copy Script;

```

#### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj << Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj << Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

#### Get Data Table

**구문:** obj << Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj << Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

#### Get Script

**구문:** obj << Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj << Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

**구문:** obj << Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

#### Local Data Filter

**구문:** obj << Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);

```

#### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

**구문:** obj << Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**구문:** obj << Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**구문:** obj << Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );
Wait( 2 );
obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**구문:** obj << Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

```

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj << Report;

Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Save Script to Script Window;

```

#### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup( {:sex == "F"}, Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ) ),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

#### SendToEmbeddedScriptable

**구문:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**설명:** 포함된 스크립트 가능 개체로 보내기는 포함된 스크립트 가능 개체의 설정을 복원합니다.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch( {"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

#### SendToReport

**구문:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**설명:** Send To Report는 보고서 모양을 사용자 정의하기 위해 Dispatch 명령과 함께 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

#### Sync to Data Table Changes

**구문:** obj << Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

#### Title

**구문:** obj << Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

**구문:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

#### View Web XML

**구문:** obj << View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Life Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>실행기 항목: 예</b>

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

### 연결된 생성자

#### Life Distribution

**구문:** Life Distribution( Y( column(s) ) )

**설명:** 사건 발생 시간의 분포를 분석합니다. 중도절단 데이터, 제품 수명, 신뢰성 및 경쟁 원인을 모델링하는 데 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### 열

#### By

**구문:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), By( _bycol ) );

```

#### Censor

**구문:** obj << Censor( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Failure Cause

**구문:** obj << Failure Cause( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Freq

**구문:** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Freq( _freqcol ) );

```

#### Label

**구문:** obj << Label( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Time to Event

**구문:** obj << Time to Event( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

#### Y

**구문:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );

```

### 항목 메시지

#### Censor Code

**구문:** obj = Life Distribution(... Censor Code( value ) )

**설명:** 오른쪽 중도절단된 관측값을 지정하는 중도절단 열의 값을 식별합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution( Y( :Hours ), Censor( :Status ), Freq( :Weight ), Censor Code( "Censored" ) );
obj << Fit Lognormal;

```

#### Change Confidence Level

**구문:** obj << Change Confidence Level( fraction )

**설명:** 전체 플랫폼에 대한 신뢰 수준을 지정합니다. 이에 따라 모든 그림과 보고서가 업데이트됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Change Confidence Level( 0.99 );

```

#### Comparison Criterion

**구문:** obj << Comparison Criterion( <Negative Loglikelihood|AICc|BIC> )

**설명:** 모형 비교 보고서에서 모형의 순위를 결정하는 데 사용되는 기준을 지정합니다. 세 가지 기준 모두 값이 작을수록 더 나은 적합을 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;
obj << Comparison Criterion( BIC );

```

#### Confidence Interval Method

**구문:** obj = Life Distribution(... Confidence Interval Method( "Wald"|"Likelihood" ) )

**설명:** 모수에 대한 신뢰 구간을 계산하는 데 사용되는 방법을 지정합니다. 기본값은 Wald이지만 가능도를 대신 선택할 수 있습니다. 그러나 프로파일러에 제공된 모든 신뢰 구간은 Wald 방법을 기반으로 합니다. 기본값은 "Wald"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Freq( :Weight ),
	Censor Code( "Censored" ),
	Confidence Interval Method( "Likelihood" )
);
obj << Fit Lognormal;

```

#### Do Same Analyses For All Groups

**구문:** obj << Do Same Analyses For All Groups

**설명:** 현재 그룹에서 선택한 모든 옵션을 출력의 모든 그룹별 섹션에 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution( Y( :Time Cycles ), By( :Group ), Censor( :Censor ), Fit Exponential );
obj[2] << Fit Weibull;
Wait( 1 );
obj[2] << Do Same Analyses For All Groups;

```

#### Fit All DS Distributions

**구문:** obj << Fit All DS Distributions

**설명:** 모든 DS(결함 부모집단) 분포를 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All DS Distributions;

```

#### Fit All Distributions

**구문:** obj << Fit All Distributions

**설명:** TH(임계) 분포를 제외한 모든 분포를 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Distributions;

```

#### Fit All Nonnegative

**구문:** obj << Fit All Nonnegative

**설명:** 비음 관측값을 지원하는 모든 분포를 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit All Nonnegative;

```

#### Fit Competing Risk Mixture

**구문:** obj << Fit Competing Risk Mixture( Mix( distribution( n ), <distribution( n ), ...>, method, <Show Profilers( 0|1 )>

**설명:** 경쟁 위험 혼합물 모형에 대한 분포 및 옵션을 지정합니다. method 인수는 필수이며 단일 군집, 분리 가능 군집 또는 중첩 군집이라는 시작 값 방법 중 하나여야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Competing Risk Mixture( Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) ) );

```

#### Fit DS Frechet

**구문:** obj << Fit DS Frechet

**설명:** 결함 부모집단 Fréchet 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Frechet;

```

#### Fit DS Loglogistic

**구문:** obj << Fit DS Loglogistic

**설명:** 결함 부모집단 로그로지스틱 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Loglogistic;

```

#### Fit DS Lognormal

**구문:** obj << Fit DS Lognormal

**설명:** 결함 부모집단 로그 정규 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Lognormal;

```

#### Fit DS Weibull

**구문:** obj << Fit DS Weibull

**설명:** 결함 부모집단 Weibull 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit DS Weibull;

```

#### Fit Exponential

**구문:** obj << Fit Exponential

**설명:** 지수 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Exponential;

```

#### Fit Frechet

**구문:** obj << Fit Frechet

**설명:** Fréchet 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Frechet;

```

#### Fit GenGamma

**구문:** obj << Fit GenGamma

**설명:** 일반화 감마 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit GenGamma;

```

#### Fit LEV

**구문:** obj << Fit LEV

**설명:** LEV(최대 극단값) 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LEV;

```

#### Fit LogGenGamma

**구문:** obj << Fit LogGenGamma

**설명:** 로그 일반화 감마 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit LogGenGamma;

```

#### Fit Logistic

**구문:** obj << Fit Logistic

**설명:** 로지스틱 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Logistic;

```

#### Fit Loglogistic

**구문:** obj << Fit Loglogistic

**설명:** 로그로지스틱 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Loglogistic;

```

#### Fit Lognormal

**구문:** obj << Fit Lognormal

**설명:** 로그 정규 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Lognormal;

```

#### Fit Mixture

**구문:** obj << Fit Mixture( Mix( distribution( n ), <distribution( n ), ...>, method, <Show Profilers( 0|1 )>

**설명:** 혼합물 모형에 대한 분포 및 옵션을 지정합니다. method 인수는 필수이며 단일 군집, 분리 가능 군집 또는 중첩 군집이라는 시작 값 방법 중 하나여야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Devalt.jmp" );
obj = dt << Life Distribution(
	Y( :Hours ),
	Censor( :Status ),
	Censor Code( "Censored" ),
	Freq( :Weight ),
	<<Fit Lognormal
);
obj << Fit Mixture( Mix( Lognormal( 2 ), Single Cluster, Show Profilers( 0 ) ) );

```

#### Fit Normal

**구문:** obj << Fit Normal

**설명:** 정규 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Normal;

```

#### Fit SEV

**구문:** obj << Fit SEV

**설명:** SEV(최소 극단값) 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit SEV;

```

#### Fit TH Frechet

**구문:** obj << Fit TH Frechet

**설명:** 임계가 있는 Fréchet 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Frechet;

```

#### Fit TH Loglogistic

**구문:** obj << Fit TH Loglogistic

**설명:** 임계가 있는 로그로지스틱 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Loglogistic;

```

#### Fit TH Lognormal

**구문:** obj << Fit TH Lognormal

**설명:** 임계가 있는 로그 정규 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Lognormal;

```

#### Fit TH Weibull

**구문:** obj << Fit TH Weibull

**설명:** 임계가 있는 Weibull 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit TH Weibull;

```

#### Fit Weibull

**구문:** obj << Fit Weibull

**설명:** Weibull 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
obj << Fit Weibull;

```

#### Fit ZI Frechet

**구문:** obj << Fit ZI Frechet

**설명:** 영과잉 Fréchet 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Frechet;

```

#### Fit ZI Loglogistic

**구문:** obj << Fit ZI Loglogistic

**설명:** 영과잉 로그로지스틱 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Loglogistic;

```

#### Fit ZI Lognormal

**구문:** obj << Fit ZI Lognormal

**설명:** 영과잉 로그 정규 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Lognormal;

```

#### Fit ZI Weibull

**구문:** obj << Fit ZI Weibull

**설명:** 영과잉 Weibull 분포를 데이터에 적합시킵니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Spring.jmp" );
obj = dt << Life Distribution( Y( :Precip ) );
obj << Fit ZI Weibull;

```

#### Get Estimates

**구문:** obj << Get Estimates

**설명:** 모든 적합 분포에 대한 추정값이 포함된 목록을 반환합니다. 목록에는 원래 데이터도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential, Set Scale( Exponential ) );
estimate = obj << Get Estimates;
Show( estimate );

```

#### Get Formula

**구문:** obj << Get Formula

**설명:** 모든 적합 분포에 대한 계산식이 포함된 목록을 반환합니다. 목록에는 원래 데이터도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential, Set Scale( Exponential ) );
formula = obj << Get Formula;
Show( formula );

```

#### Get Results

**구문:** obj << Get Results

**설명:** 모든 적합 분포에 대한 결과가 포함된 목록을 반환합니다. 목록에는 원래 데이터도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential, Set Scale( Exponential ) );
r = obj << Get Results;
Show( r );

```

#### Interval Type

**구문:** obj << Interval Type( "동시"|"점별" )

**설명:** 분포 비교 그림의 비모수 적합에 표시되는 신뢰 구간 유형을 지정합니다. 사용 가능한 옵션은 점별 신뢰 구간 또는 동시 신뢰 구간입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Interval Type( "Pointwise" );

```

#### Nonparametric Estimate Plot Options

**구문:** obj << Nonparametric Estimate Plot Options( "점"|"계단 함수"|"둘 다"|"없음" )

**설명:** 확률도에 데이터 점을 나타내는 방법을 지정합니다. 점 또는 계단 함수를 사용하도록 선택하거나, 점과 계단 함수를 모두 사용 또는 모두 사용하지 않도록 선택할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Nonparametric Estimate Plot Options( "Step Function" );

```

#### Rejection Sampler Maximum Trials

**구문:** obj << Rejection Sampler Maximum Trials( number=10000 )

**설명:** 기본값은 "10000"입니다.

**JMP추가된 버전:** 14

#### Save By Group Results

**구문:** obj << Save By Group Results

**설명:** 모든 기준 그룹 결과 추정값을 새 테이블에 별개의 행으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Blenders.jmp" );
obj = dt << Life Distribution( Y( :Time Cycles ), By( :Group ), Censor( :Censor ), Fit Exponential );
obj[1] << Save By Group Results;

```

#### Set Scale

**구문:** obj << Set Scale( Linear|Lognormal|Weibull|Loglogistic|Frechet|Normal|SEV|Logistic|LEV|Exponential )

**설명:** 분포 비교 그림에서 확률 축에 대한 척도를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Set Scale( Exponential );

```

#### Show Confidence Area

**구문:** obj << Show Confidence Area( state=0|1 )

**설명:** 그림에 음영 신뢰 영역을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Confidence Area( 0 );

```

#### Show Event Plot Frequency Label

**구문:** obj << Show Event Plot Frequency Label( state=0|1 )

**설명:** 사건 그림에 빈도 라벨을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Microprocessor Data.jmp" );
obj = dt << Life Distribution( Y( :start time, end time ), Freq( :count ) );
Report( obj )["Event Plot"] << Close( 0 );
Wait( 1 );
obj << Show Event Plot Frequency Label( 0 );

```

#### Show Hazard Functions

**구문:** obj << Show Hazard Functions( state=0|1 )

**설명:** 선택한 분포에 대한 위험 함수 그림을 중첩하는 위험 프로파일러 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Hazard Functions( 1 );

```

#### Show Points

**구문:** obj << Show Points( state=0|1 )

**설명:** 확률도에 데이터 점을 표시하거나 숨깁니다. 수명 분포 플랫폼에서는 계단 함수의 중간점 추정값을 사용하여 확률도를 생성합니다. &apos;점 표시&apos; 옵션을 선택 취소하면 중간점 추정값이 Kaplan-Meier 추정값으로 대체됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ) );
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Quantile Functions

**구문:** obj << Show Quantile Functions( state=0|1 )

**설명:** 선택한 분포에 대한 분위수 함수 그림을 중첩하는 분위수 프로파일러 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Show Quantile Functions( 1 );

```

#### Show Statistics

**구문:** obj << Show Statistics( state=0|1 )

**설명:** 모형 비교, 데이터 요약, 비모수 및 모수 추정값을 포함하는 통계량 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
Wait( 1 );
obj << Show Statistics( 0 );

```

#### Show Survival Curve

**구문:** obj << Show Survival Curve( state=0|1 )

**설명:** 분포 비교 확률도 및 분포 프로파일러 그림에서 고장 확률과 생존 곡선 간을 전환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Show Survival Curve( 1 ), Fit Exponential );

```

#### Suppress Plot

**구문:** obj << Suppress Plot( distribution name )

**설명:** 보고서의 그림에서 지정된 분포를 제거합니다. 이 옵션은 분포 비교, 위험 프로파일러 또는 분위수 프로파일러 보고서에서 "분포" 아래의 해당 상자를 선택 해제하는 것과 같습니다.분포

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Fit Weibull, Fit Lognormal, Set Scale( Weibull ) );
Wait( 2 );
obj << Suppress Plot( Lognormal );

```

#### Tabbed Report

**구문:** obj << Tabbed Report( state=0|1 )

**설명:** 그래프와 데이터를 기본 개요 스타일이 아니라 개별 탭에 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
obj = dt << Life Distribution( Y( :Time ), Censor( :Censor ), Fit Exponential );
obj << Tabbed Report( 1 );

```

