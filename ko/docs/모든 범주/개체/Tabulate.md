# Tabulate



## 공유 항목 메시지

### Action

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

### Apply Preset

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

### Automatic Recalc

**구문:** obj << Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**구문:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Data Table Window;

```

### Get By Levels

**구문:** obj << Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
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

### Get Data Table

**구문:** obj << Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**구문:** obj << Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**구문:** obj << Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

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

### Ignore Platform Preferences

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

### Local Data Filter

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

### New JSL Preset

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

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

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

### Redo Analysis

**구문:** obj << Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

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

### Remove Local Data Filter

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

### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**구문:** obj << Report;

Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

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

### SendToEmbeddedScriptable

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

### SendToReport

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

### Sync to Data Table Changes

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

### Title

**구문:** obj << Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**구문:** obj << View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## 연결된 생성자

### Tabulate

**구문:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**설명:** 하나 이상의 변수에 대한 사용자 요약 통계량 테이블을 생성합니다. 하나 이상의 분류 열을 기준으로 변수를 그룹화할 수 있습니다. 드래그하여 놓기 작업으로 요약 테이블을 생성할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

## 항목 메시지

### Add

**구문:** add (<Column Table | Row Table>(table index), <before first | <before | after>(<analysis column | grouping column | statistic>(<operand name | index>))>, <analysis column | grouping column | statistic>(operand name)),

**설명:** Used with 테이블 수정 to add columns and statistics to an existing table. Also serves as an alias for 테이블 추가

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), Add( After( Statistics( max ) ), Statistics( Range ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), Add( Before First, Statistics( Range ) ) );

```

### Add Table

**구문:** Add Table( <Column Table( )>, <Row Table( )> )

**설명:** 현재 테이블이 없는 경우 창에 테이블을 추가하거나 기존 테이블 개체에 테이블을 추가합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );

```

### Aggregate Statistics

**구문:** Aggregate Statistics( column )

**설명:** 합 열과 함께 지정된 열의 각 수준에 대한 별도의 열을 현재 테이블에 추가합니다. 스크립팅 시 Aggregate Statistics 메시지가 Column Table 메시지 또는 Row Table 메시지 내에 있어야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis columns( :OZONE ), statistics( mean ) ),
		Row Table( Grouping Columns( :Region ), aggregate statistics( :Region ) )
	)
);

```

### Analysis Columns

**구문:** Analysis Columns( Column(s) )

**설명:** 현재 테이블에 분석 열을 추가합니다. Add Table 또는 Modify Table 명령과 함께 사용할 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
obj << modifytable( column table( 1 ), analysis columns( :CO ) );

```

### Change Item Label

**구문:** obj << Change Item Label( Statistics( stat name, new string ) )

**설명:** 테이블의 텍스트 입력 필드에 대한 라벨을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Columns by Categories

**구문:** Columns by Categories( column1, column2, ...) )

**설명:** 유사한 값을 가진 열에 대해 수집된 범주 및 열 이름 교차표를 테이블에 추가합니다. 스크립팅 시 Columns by Categories 메시지가 Column Table 메시지 또는 Row Table 메시지 내에 있어야 합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ) );
obj << modify table( row table( 1 ), columns by categories( :Money ) );

```

### Delete

**구문:** delete( <analysis columns | grouping columns | statistics>(operand name, operand name, ...))

**설명:** Used with 테이블 수정 to remove columns and statistics from an existing table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

### Display Column Width

**구문:** obj << Display Column Width( Data Column( <Column Table(n)>, path ), <width> );

obj << Display Column Width( Row Label( <Row Table(n)>, path ), <width> )

**설명:** 테이블 생성 보고서 테이블의 열 표시 너비를 설정하거나 반환합니다. Path는 따옴표로 묶은 열 머리글 시퀀스로, 열 경로를 추적합니다. Width는 열 너비(픽셀)입니다. Data Column을 사용하여 테이블 본문에 열을 정의하거나, 행 라벨 영역의 열에 대해 Row Label을 사용하십시오. 보고서에 테이블이 여러 개 있는 경우 Column Table(n) 또는 Row Table(n)을 사용하여 path가 적용되는 테이블을 지정합니다. width가 지정되지 않은 경우 이 옵션은 지정된 열의 현재 너비를 반환합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table(
			Grouping Columns( :sex, :marital status ),
			Analysis Columns( :age ),
			Statistics( Sum, "% of Total" )
		),
		Row Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Set Format( Mean( :OZONE( 6, 4 ) ) ),
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, std dev ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);
stats = {"Min", "Max", "Mean", "Std Dev"};
ns = N Items( stats );
a = {};
For( i = 1, i <= ns, i++,
	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) )
);
amax = Max( a );
For( i = 1, i <= ns, i++,
	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table(
			Grouping Columns( :sex, :marital status ),
			Analysis Columns( :age ),
			Statistics( Sum, "% of Total" )
		),
		Row Table( Grouping Columns( :type ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Display Column Width( Row Label( Row Table( 2 ), "country" ) );

```

### Freq

**구문:** Freq( Column )

**설명:** 통계량 계산에 사용될 빈도 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Grouping Columns( :Causes ) ) ) );
Wait( 1 );
obj << Freq( :Count );

```

### Full Path Column Name

**구문:** obj << Full Path Column Name( true | false )

**설명:** 설정된 경우, 출력 테이블의 열 이름에 그룹화 열 이름이 포함되어야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Full Path Column Name( 1 );
obj << Make Into Data Table;

```

### Grouping Columns

**구문:** Grouping Columns( Column(s) )

**설명:** 현재 테이블에 그룹화 열을 추가합니다. Add Table 또는 Modify Table 명령과 함께 사용할 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << modify table( column table( 1 ), grouping column( :age ) );

```

### ID

**구문:** ID( Column )

**설명:** 고유 발생 횟수를 계산하는 데 사용되는 식별자 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Set Format( Uniform Format( 10, 2 ) ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ), Template( "^FIRST  (^OTHERS)", "/" ) )
		),
		Row Table( Grouping Columns( :Mfr Name ) )
	)
);
Wait( 1 );
obj << ID( :Division );

```

### Ignore duplicate responses

**구문:** obj << Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP추가된 버전:** 19

### Ignore duplicates in multiple response columns

**구문:** obj << Ignore duplicates in multiple response columns( state=0|1 )

**설명:** Ignores duplicate responses in multiple response columns. Each repeated response is treated as a single occurrence.

**JMP추가된 버전:** 19

### Include missing for grouping columns

**구문:** obj << Include missing for grouping columns( state=0|1 )

**설명:** 현재 테이블의 모든 그룹화 열에 대한 결측값 수가 포함된 별도의 열을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate(
	Add Table( Row Table( Grouping Columns( :Doors ) ) ),
	Include missing for grouping columns( 1 )
);

```

### Make Into Data Table

**구문:** obj << Make Into Data Table( <Invisible(bool) | Private(bool)>, <Output Table ( table name)>, <Full Path Column Name(bool)> )

**설명:** 테이블 생성 기능으로 생성된 테이블을 기반으로 새 데이터 테이블을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make Into Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make into Data Table( invisible( 1 ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Make into Data Table( Full Path Column Name( 1 ) );

```

### Max scroll locked columns

**구문:** obj << Max scroll locked columns( number=3 )

**설명:** Set the maximum number of columns to be scroll locked. Either all or none of the row header columns will be locked. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Max Scroll Locked Columns( 1 );
obj << Make Into Data Table;

```

### Missing sum is zero

**구문:** obj << Missing sum is zero( state=0|1 )

### Modify Table

**구문:** obj << Modify Table( <Column Table | Row Table>(table index), ... )

**설명:** Modifies an existing table.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate();
obj << Add Table( Column Table( Grouping Columns( :sex ) ) );
obj << Add table( row table( grouping column( :age ) ) );
obj << Add Table( Column Table( Analysis Column( :height ) ) );
obj << Add Table( Column Table( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), statistics( min, max ) );
obj << Modify Table( Column Table( 2 ), grouping columns( :sex ) );
obj << Modify Table( Column Table( 2 ), Analysis Column( :Weight ) );
Wait( 1 );
obj << Modify Table( Column Table( 2 ), delete( Analysis Column( :Weight ) ) );
obj << Modify Table( Column Table( 2 ), delete( statistics( "sum" ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( column table( 1 ), delete( analysis columns( :Assets ) ) );

```

### Modify Table Option

**구문:** obj << Modify Table Option

**설명:** Used with 테이블 수정 to modify table options in an existing table.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ) )
	)
);
obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )
	)
);
obj << Modify Table( Row Table( 1 ), Modify Table Option( Change Stacked Group Label ), "new label" );

```

### Move

**구문:** move (<Column Table | Row Table>(table index), <analysis column | grouping column | statistic>(<operand name | index>)), <before first | <before | after>(<analysis column | grouping column | statistic>(<operand name | index>)>)

**설명:** Used with 테이블 수정 to move columns and statistics in an existing table.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table(
	column table( 1 ),
	move( column table( 1 ), Statistics( mean ) ),
	After( Statistics( max ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Companies.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :Type ),
			Analysis Columns( :"Sales ($M)"n, :Assets ),
			statistics( min, mean, max )
		)
	)
);
Wait( 0 );
obj << modify table( row table( 1 ), move( column table( 1 ), Grouping Column( :Type ) ), before first );

```

### Order By Count

**구문:** obj << Order By Count( Grouping Columns( column ), true | false )

### Order by count of grouping columns

**구문:** obj << Order by count of grouping columns( state=0|1 )

**설명:** 테이블의 총계를 기준으로 그룹화 열의 수준을 정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cars.jmp" );
obj = dt << Tabulate( Add Table( Row Table( Grouping Columns( :Make ) ) ) );
obj << Order by Count of Grouping Columns( 1 );

```

### Pack

**구문:** obj << Pack( <Analysis columns | Statistics>(operand name, ...), <Template> )

**설명:** 여러 통계량을 테이블의 한 열로 묶습니다. Template 옵션은 항목의 형식을 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ), Template( "^FIRST  (^OTHERS)", "/" ) )
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table(
	Column Table( 1 ),
	Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ), Template( "^FIRST  (^OTHERS)", "/" ) )
);

```

### Page Column

**구문:** Page Column( Column )

**설명:** 보고서 페이지 설정에 사용될 페이지 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :age ) )
	)
);
Wait( 1 );
obj << page column( :sex( "F" ) );

```

### Plot Scale

**구문:** obj << Plot Scale( min, max )

**설명:** 막대 차트에 척도를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**구문:** obj << Remove Column Label( Grouping Columns( column ) )

**설명:** 테이블에서 지정된 열 라벨을 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
Wait( 2 );
obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**구문:** obj << Restore Column Label( Grouping Columns( column ) )

**설명:** 테이블에서 이전에 제거된 열 라벨 중 지정된 항목을 복원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :Region ) ),
		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )
	)
);
obj << Remove Column Label( Grouping Columns( :Region ) );
Wait( 2 );
obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**구문:** Retype( <Analysis Columns | Grouping Columns>( operand name, ... ), <Analysis Column | Gropuing Column> )

**설명:** Used with 테이블 수정 to convert between analysis columns and grouping columns in an existing table.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Statistics( N ), Grouping Columns( :age ) ),
		Row Table( Grouping Columns( :sex ) )
	)
);
obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

### Save grouping as tags in data table export

**구문:** obj << Save grouping as tags in data table export( state=0|1 )

**설명:** Sets if the grouping levels should be included in the data table as column tags. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Save grouping as tags in data table export( 0 );
obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**구문:** obj << Scroll lock row headers in data table export( state=0|1 )

**설명:** Sets if the columns containing the row headers should be scroll locked. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Scroll lock row headers in data table export( 0 );
obj << Make Into Data Table;

```

### Set Format

**구문:** Set Format( statistic( Column( format ) )

**설명:** 분석 열에 대해 표시되는 형식을 설정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Set Format( Mean( :OZONE( 6, 4 ) ) ),
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
Tabulate(
	Set Format(
		Mean(
			:height( 10, 1 ),
			Analysis Column(
				Transform Column( "Log[height]", Formula( Log( :height ) ) ),
				Format( 10, "Best" )
			)
		),
		"% of Total"n(
			:height( 12, 2 ),
			Analysis Column( Transform Column( "Log[height]", Formula( Log( :height ) ) ), Format( 12, 2 ) )
		)
	),
	Add Table(
		Column Table(
			Analysis Columns( :height, Transform Column( "Log[height]", Formula( Log( :height ) ) ) ),
			Statistics( Mean, "% of Total"n )
		),
		Row Table( Grouping Columns( :sex ) )
	)
);

```

### Show Chart

**구문:** obj << Show Chart( state=0|1 )

**설명:** 테이블 생성 기능으로 생성된 테이블을 기반으로 한 막대 차트를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );

```

### Show Control

**구문:** obj << Show Control( state=0|1 )

### Show Control Panel

**구문:** obj << Show Control Panel( state=0|1 )

**설명:** 테이블 생성 기능으로 생성된 테이블을 조작하는 데 사용되는 제어판을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Control Panel( 1 );

```

### Show Shading

**구문:** obj << Show Shading( state=0|1 )

**설명:** 테이블 생성 기능으로 생성된 테이블에 음영이 적용된 선과 음영이 적용되지 않은 선을 교대로 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Shading( 1 );

```

### Show Table

**구문:** obj << Show Table( state=0|1 )

**설명:** 테이블 생성 기능으로 생성된 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Table( 1 );

```

### Show Test Build Panel

**구문:** obj << Show Test Build Panel( state=0|1 )

**설명:** 테이블 테스트 빌드에 대한 표집을 제어하는 패널을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Show Test Build Panel( 1 );

```

### Show Tooltip

**구문:** obj << Show Tooltip( state=0|1 )

**설명:** 테이블 생성 결과의 놓기 영역 및 메뉴를 마우스로 가리킬 때 툴팁을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**구문:** Stack Grouping Columns(0 | 1)

**설명:** 내포 구조를 표시하기 위해 들여쓰기를 사용하여 그룹화 열을 단일 열로 쌓습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Grouping Columns( :marital status ),
			Add Aggregate Statistics( :marital status ),
			Analysis Columns( :age ),
			Statistics( Min, Max )
		),
		Row Table(
			Grouping Columns( :sex, :country, :size ),
			Add Aggregate Statistics( :sex, :country, :size ),
			Stack Grouping Columns( 1 )
		)
	)
);

```

### Statistics

**구문:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**설명:** 테이블의 열 또는 행에 통계량을 추가합니다. 스크립팅 시 Statistics() 메시지는 식별하는 Analysis Columns(열) 메시지 옆에 오며, 둘 모두 Row Table() 또는 Column Table() 명령 내에 내포됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),
		Row Table( Grouping Columns( :Region ) )
	)
);

```

### Test Build

**구문:** obj << Test Build( Sample Size( number ) )

**설명:** 크기가 number인 데이터의 테스트 빌드 표본을 사용하여 테이블을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Test Build( Sample Size( 100 ) );

```

### Test Data View

**구문:** obj << Test Data View

**설명:** 테스트 테이블을 빌드하기 위한 표본으로 사용되는 데이터 테이블을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Statistics( Mean, Std Dev ) ),
		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )
	)
);
obj << Test Build( Sample Size( 100 ) );
obj << Test Data View;

```

### Undo

**구문:** obj << Undo

**설명:** 현재 테이블에서 실행된 마지막 작업의 효과를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Add Table( Column Table( Grouping Columns( :type ) ) );
Wait( 2 );
obj << undo;

```

### Uniform plot scale

**구문:** obj << Uniform plot scale( state=0|1 )

**설명:** 막대 차트에서 모든 하위 범주에 대한 척도가 동일하도록 설정합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Tabulate(
	Add Table(
		Column Table( Grouping Columns( :sex, :marital status ) ),
		Row Table( Grouping Columns( :country, :size ) )
	)
);
obj << Show Chart( 1 );
Wait( 2 );
obj << Uniform Plot Scale( 1 );

```

### Unpack

**구문:** obj << Unpack( <Analysis columns | Statistics>(operand name, ...) )

**설명:** Unpacks a packed set of columns.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table(
			Statistics( Sum ),
			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),
			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ), Template( "^FIRST  (^OTHERS)", "/" ) )
		),
		Row Table( Grouping Columns( :Mfr Name, :Engine ) )
	)
);
obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

### Weight

**구문:** Weight( Column )

**설명:** 통계량 계산에 사용될 가중치 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
obj = dt << Tabulate(
	Show Control Panel( 0 ),
	Add Table(
		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),
		Row Table( Grouping Columns( :Type ) )
	)
);
Wait( 1 );
obj << Weight( :Weight );

```

