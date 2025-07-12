# Distribution



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

### Automatic Recalc

**구문:** obj << Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**구문:** obj << Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

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

### Copy ByGroup Script

**구문:** obj << Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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

### Get ByGroup Script

**구문:** obj << Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

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

### Get Script

**구문:** obj << Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

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

### Report

**구문:** obj << Report;

Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
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
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

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

### View Web XML

**구문:** obj << View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**구문:** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...)

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

## 연결된 생성자

### Distribution

**구문:** Distribution( Column() )

**설명:** 각 변수에 대한 분포 및 단변량 요약 통계량을 표시합니다. 결과 및 옵션은 각 변수의 모델링 유형에 따라 달라집니다. 옵션으로는 히스토그램, 상자 그림, 분위수 그림, 적합 분포 및 공정 능력 분석 등이 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
colref = Column( "age" );
// Correct way to use the colref
Distribution( Column( colref ) );
// This will not work
Distribution( colref );

```

## 열

### By

**구문:** obj = Distribution(...<By( column(s) )>...)

<b>실행기 항목: 예</b>

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Distribution( Column( :Age, :Weight ), By( _bycol ) );

```

### Column

**구문:** obj = Distribution(...<Column( column(s) )>...)

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Columns

**구문:** obj = Distribution(...Columns( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 분석할 범주형 또는 연속형 열을 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

### Freq

**구문:** obj = Distribution(...<Freq( column )>...)

<b>실행기 항목: 예</b>

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Freq( _freqcol ) );

```

### Weight

**구문:** obj = Distribution(...<Weight( column )>...)

<b>실행기 항목: 예</b>

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Distribution( Column( :Age, :Weight ), Weight( _weightcol ) );

```

### Y

**구문:** obj = Distribution(...Y( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 분석할 범주형 또는 연속형 열을 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Y( :Age, :Weight ) );

```

## 항목 메시지

### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**구문:** obj << Arrange in Rows( number )

**설명:** 창에 표시할 분포 보고서의 수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << ArrangeInRows( 3 );

```

### Axes on Left

**구문:** obj << Axes on Left( state=0|1 )

**설명:** 개수, 확률, 밀도 및 정규 분위수 그림 축을 가로 그래프의 왼쪽으로 이동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

### CDF Plot

**구문:** obj << CDF Plot( state=0|1 )

**설명:** 경험적 누적 분포 함수 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

### Capability Analysis

**구문:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**설명:** 명시된 LSL(규격 하한), 목표값 및 USL(규격 상한)이 주어졌을 때 공정 능력 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Confidence Interval

**구문:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**설명:** 평균과 표준편차에 대해 지정된 신뢰 구간을 계산합니다. 시그마를 지정하면 지정된 값을 사용하여 평균에 대한 신뢰 구간을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Count Axis

**구문:** obj << Count Axis( state=0|1 )

**설명:** 히스토그램의 개수 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

### Custom Quantiles

**구문:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**설명:** 분위수 순위 추정값 보고서 및 지정된 분위수에 대한 평활된 경험적 가능도 분위수 추정값 보고서를 생성합니다. 두 보고서에서 신뢰 구간에 대한 신뢰 수준으로 비율을 사용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**구문:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**설명:** 요약 통계량 보고서에 표시되는 요약 통계량을 사용자 정의합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Density Axis

**구문:** obj << Density Axis( state=0|1 )

**설명:** 히스토그램의 밀도 곡선에 대한 밀도 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

### Fit All

**구문:** obj << Fit All

**설명:** 가능한 모든 분포를 비교합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

### Fit Beta

**구문:** obj << Fit Beta

**설명:** 2모수 베타 분포를 0에서 1 사이(경계값 포함 안 함)의 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

### Fit Beta Binomial

**구문:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 베타 이항 분포를 적합시킵니다. 이 분포는 이항 분포보다 유연합니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**구문:** obj << Fit Binomial( Sample size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 이항 분포를 적합시킵니다. 이 분포는 n번의 독립 시행에서 총 성공 횟수를 모델링합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**구문:** obj << Fit Cauchy

**설명:** Cauchy 분포를 데이터에 적합시킵니다. Cauchy 분포는 이상치에 대해 로버스트하며, 자유도가 1인 t 분포와 동일합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**구문:** obj << Fit ExGaussian

**설명:** 지수 수정 가우시안 분포를 데이터에 적합시킵니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

### Fit Exponential

**구문:** obj << Fit Exponential

**설명:** 지수 분포를 음수가 아닌 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

### Fit Gamma

**구문:** obj << Fit Gamma

**설명:** 2모수 감마 분포를 양수 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

### Fit Handle

**구문:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**설명:** 적합 분포에 대한 핸들 배열. 특정 적합 분포로 명령을 보내는 데 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**구문:** obj << Fit Johnson

**설명:** Johnson 분포를 데이터에 적합시킵니다. 세 가지 유형의 Johnson 분포(Su, Sb, Sl) 중 분위수를 기반으로 가장 적절한 분포가 선택됩니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

### Fit Largest Extreme Value

**구문:** obj << Fit Largest Extreme Value

**설명:** 최대 극단값 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**구문:** obj << Fit Lognormal

**설명:** 로그 정규 분포를 양수 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

### Fit Negative Binomial

**구문:** obj << Fit Negative Binomial

**설명:** 음이항 분포를 데이터에 적합시킵니다. 이 분포는 감마 Poisson 분포와 동일합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

### Fit Normal

**구문:** obj << Fit Normal

**설명:** 정규 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

### Fit Normal 2 Mixture

**구문:** obj << Fit Normal 2 Mixture

**설명:** 두 정규 분포의 혼합을 적합시킵니다. 이 분포는 이봉 데이터를 적합시킬 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**구문:** obj << Fit Normal 3 Mixture

**설명:** 세 정규 분포의 혼합을 적합시킵니다. 이 분포는 다봉 데이터를 적합시킬 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**구문:** obj << Fit Poisson

**설명:** Poisson 분포를 데이터에 적합시킵니다. 이 분포는 개수 데이터에 보편적으로 사용됩니다. Poisson 분포의 적합 평균은 분산과 동일합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

### Fit SHASH

**구문:** obj << Fit Shash

**설명:** SHASH(SinH-ArcsinH) 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

### Fit Smallest Extreme Value

**구문:** obj << Fit Smallest Extreme Value

**설명:** 최소 극단값 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**구문:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**설명:** 비모수 밀도 추정을 사용하여 평활 곡선을 데이터에 적합시킵니다. 대역폭을 지정하여 평활도를 설정할 수 있습니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**구문:** obj << Fit Student&apos;s t

**설명:** 스튜던트 t 분포를 데이터에 적합시킵니다. 이 분포는 정규 분포와 Cauchy 분포 사이에 걸쳐 있는 로버스트 옵션입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**구문:** obj << Fit Weibull

**설명:** 2모수 Weibull 분포를 양수 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**구문:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 영과잉 베타 이항 분포를 적합시킵니다. 이 분포는 관측된 0이 베타 이항 분포에서 예상한 것보다 많을 경우 n번의 독립 시행에서 총 성공 횟수를 모델링합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**구문:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 영과잉 이항 분포를 적합시킵니다. 이 분포는 관측된 0이 이항 분포에서 예상한 것보다 많을 경우 n번의 독립 시행에서 총 성공 횟수를 모델링합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**구문:** obj << Fit ZI Negative Binomial

**설명:** 영과잉 음이항 분포를 0 값이 포함된 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**구문:** obj << Fit ZI Poisson

**설명:** 영과잉 Poisson 분포를 0 값이 포함된 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**구문:** obj << Fit ZI SHASH

**설명:** 점질량이 0인 SHASH 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Frequencies

**구문:** obj << Frequencies( state=0|1 )

**설명:** 각 수준의 개수 및 확률이 나열된 빈도 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

### Histogram

**구문:** obj << Histogram( state=0|1 )

**설명:** 히스토그램을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

### Histogram Color

**구문:** obj << Histogram Color( color )

**설명:** 히스토그램 막대의 색상을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

### Horizontal Layout

**구문:** obj << Horizontal Layout( state=0|1 )

**설명:** 히스토그램과 보고서의 방향을 가로로 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**구문:** obj << Mosaic Plot( state=0|1 )

**설명:** 각 명목형 또는 순서형 반응 변수에 대한 모자이크 막대 차트를 표시하거나 숨깁니다. 모자이크 그림은 각 세그먼트가 해당 그룹의 빈도 수에 비례하는 누적 막대 차트입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) );
Wait( 1 );
obj[1] << Apply Preset( preset );

```

### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**구문:** obj << Normal Quantile Plot( state=0|1 )

**설명:** 변수의 정규 분포 범위를 시각화하는 데 사용할 수 있는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

### Order By

**구문:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**설명:** 히스토그램, 모자이크 그림 및 빈도 보고서를 개수에 따라 오름차순 또는 내림차순으로 정렬합니다. 기본 순서로 되돌릴 수도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**구문:** obj << Outlier Box Plot( state=0|1 )

**설명:** 분포를 확인하고 가능한 이상치를 식별할 수 있는 상자 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**구문:** obj << Outlier Box Plot Row Cutoff( number )

**설명:** 처음에 이상치 상자 그림이 해제되기 전에 최대 행 수에 대한 시작 옵션을 설정합니다. 기본값은 "100000"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

### PpK Capability Labeling

**구문:** obj << PpK Capability Labeling( state=0|1 )

**설명:** 공정 능력 분석 결과에서 전체 공정 능력 지수의 라벨 접두사로 Cp 대신 Pp를 사용하도록 전환합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**구문:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**설명:** 개별 미래 관측값에 대한 예측 구간 및 지정된 수(N개 표본)의 미래 관측값에 대한 평균을 계산합니다. 단측 또는 양측 예측 구간을 생성할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**구문:** obj << Prob Axis( state=0|1 )

**설명:** 히스토그램의 확률 또는 비율 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

### Process Capability

**구문:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**설명:** LSL(규격 하한), 목표값 및 USL(규격 상한)이 주어졌을 때 공정 능력 분석을 계산합니다. 공정 능력 보고서에는 히스토그램, 요약 상세 정보, 공정 능력 지수 및 부적합 통계량이 포함됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**구문:** obj << Quantile Box Plot( state=0|1 )

**설명:** 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99% 및 100% 분위수를 포함하는 상자 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

### Quantiles

**구문:** obj << Quantiles( state=0|1 )

**설명:** 선택한 분위수의 값이 나열된 분위수 보고서를 표시하거나 숨깁니다. 기본적으로 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99.5% 및 100% 분위수가 나열됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset( Expr( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) ) );

```

### Save

**구문:** obj << Save( "수준 수"|"수준 중간점"|"순위"|"순위 평균"|"확률 스코어"|"정규 분위수"|"표준화"|"중심화"|"로버스트 표준화"|"로버스트 중심화"|"규격 한계"|"로그에 스크립트로" )

**설명:** 지정된 관측값별 통계량을 데이터 테이블의 새 열에 저장합니다. 현재 보고서를 생성하는 스크립트 명령을 로그 창에 인쇄하는 옵션도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

### Separate Bars

**구문:** obj << Separate Bars( state=0|1 )

**설명:** 히스토그램의 막대 사이에 공백을 추가합니다. 이 옵션은 범주형 변수에만 사용할 수 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

### Set Bin Width

**구문:** obj << Set Bin Width( number )

**설명:** 축을 원본으로 사용하여 히스토그램 계급 폭을 설정합니다. 이 옵션은 연속형 변수에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**구문:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**설명:** 분위수 보고서에 사용되는 증분을 지정된 비율로 설정하거나 기본 분위수로 다시 변경합니다. 이 옵션은 연속형 변수에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**구문:** obj << Shadowgram( state=0|1 )

**설명:** 히스토그램 대신 평활 섀도그램을 표시하거나 숨깁니다. 섀도그램은 계급 폭이 다른 여러 히스토그램을 중첩합니다. 이 옵션은 연속형 변수에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

### Show Counts

**구문:** obj << Show Counts( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 빈도를 제공하는 막대 개수를 히스토그램에 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

### Show Percents

**구문:** obj << Show Percents( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 백분율을 제공하는 막대 백분율을 히스토그램에 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

### Stack

**구문:** obj << Stack( state=0|1 )

**설명:** 히스토그램 및 보고서의 방향을 가로로 변경하고 개별 분포 보고서를 세로로 쌓습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Stack( 1 );

```

### Std Error Bars

**구문:** obj << Std Error Bars( state=0|1 )

**설명:** 각 히스토그램 막대에 표준 오차 막대를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

### Stem and Leaf

**구문:** obj << Stem and Leaf( state=0|1 )

**설명:** 줄기-잎 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

### Summary Statistics

**구문:** obj << Summary Statistics( state=0|1 )

**설명:** 연속형 변수에 대한 평균, 표준편차 및 기타 요약 통계량이 나열된 요약 통계량 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

### Test Equivalence

**구문:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**설명:** TOST(Two One-Sided Test) 방법을 사용하여 표본 평균이 가설 값(목표값)과 동등한지 여부를 검정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**구문:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**설명:** 평균에 대한 1표본 검정을 수행합니다. 표준편차(시그마) 값을 지정하면 z 검정이 수행되고, 그렇지 않으면 표본 표준편차를 사용하여 t 검정이 수행됩니다. 추가로 비모수 Wilcoxon 부호 순위 검정을 수행하는 옵션도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**구문:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**설명:** 지정된 가설 확률(p1, p2, p3 등)에 대해 범주형 변수 수준의 추정 확률을 검정합니다. 수준이 두 개인 변수의 경우 &apos;검정&apos; 옵션을 사용하여 검정의 대립가설에 대한 부호를 지정합니다. 수준이 세 개 이상인 변수의 경우 &apos;고정&apos; 옵션을 사용하여 결측 가설 값 처리 방법을 지정합니다. f는 선행 수준을 고정으로 처리하도록 지정하는 선택적 인수입니다.

**2수준, 단측 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**2수준, 양측 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**다중 수준 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.8, 0.04375, 0.075, 0.04375, 0.01875, 0.01875 );

```

### Test Std Dev

**구문:** obj << Test Std Dev( number )

**설명:** 가설 값(숫자)이 주어졌을 때 표준편차에 대한 카이제곱 검정을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

### Tolerance Interval

**구문:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**설명:** 모집단의 지정된 비율 이상을 포함하는 구간을 계산합니다. 이때 표준 정규 분포가 가정됩니다. 로그 정규, 감마, 지수, Weibull, 최소 극단값, 최대 극단값, 비모수 분포 등 다른 비정규 분포를 지정할 수도 있습니다. 단측 구간을 계산하는 옵션도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Uniform Scaling

**구문:** obj << Uniform Scaling( state=0|1 )

**설명:** 분포를 쉽게 비교할 수 있도록 모든 히스토그램 축의 최소값, 최대값 및 증분 값을 동일하게 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );
obj << Uniform Scaling( 1 );

```

### Vertical

**구문:** obj << Vertical( state=0|1 )

**설명:** 히스토그램, 상자 그림 및 분위수 그림의 방향을 세로로 변경합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Capability Analysis

### 항목 메시지

#### Capability Animation

**구문:** obj << Capability Animation

**설명:** 현재 표본의 공정 능력 통계량과 모수를 사용하는 정규 분포의 애니메이션을 보여 주는 별도의 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Capability Animation );

```

#### Z Bench

**구문:** obj << Z Bench( state=0|1 )

**설명:** 공정 평균에서 규격까지의 거리를 표준편차 단위 수로 나타내는 AIAG 기술 통계량인 Z 통계량을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Continuous Distribution

### 열

#### Column

**구문:** obj = Quantiles(...<Column( column(s) )>...)

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

### 항목 메시지

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**구문:** obj << Axes on Left( state=0|1 )

**설명:** 개수, 확률, 밀도 및 정규 분위수 그림 축을 가로 그래프의 왼쪽으로 이동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );
obj << Axes on Left( 1 );

```

#### CDF Plot

**구문:** obj << CDF Plot( state=0|1 )

**설명:** 경험적 누적 분포 함수 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << CDF Plot( 1 );

```

#### Capability Analysis

**구문:** obj << Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**설명:** 명시된 LSL(규격 하한), 목표값 및 USL(규격 상한)이 주어졌을 때 공정 능력 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

#### Confidence Interval

**구문:** obj << Confidence Interval( number, <Upper | Lower>, <Sigma( number )> )

**설명:** 평균과 표준편차에 대해 지정된 신뢰 구간을 계산합니다. 시그마를 지정하면 지정된 값을 사용하여 평균에 대한 신뢰 구간을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Confidence Interval( 0.98 ); 

obj << Confidence Interval( 0.95, Lower ); 

obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

#### Count Axis

**구문:** obj << Count Axis( state=0|1 )

**설명:** 히스토그램의 개수 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Count Axis( 1 );

```

#### Custom Quantiles

**구문:** obj << Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**설명:** 분위수 순위 추정값 보고서 및 지정된 분위수에 대한 평활된 경험적 가능도 분위수 추정값 보고서를 생성합니다. 두 보고서에서 신뢰 구간에 대한 신뢰 수준으로 비율을 사용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

#### Customize Summary Statistics

**구문:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**설명:** 요약 통계량 보고서에 표시되는 요약 통계량을 사용자 정의합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Density Axis

**구문:** obj << Density Axis( state=0|1 )

**설명:** 히스토그램의 밀도 곡선에 대한 밀도 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Density Axis( 1 );

```

#### Fit All

**구문:** obj << Fit All

**설명:** 가능한 모든 분포를 비교합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit All;

```

#### Fit Beta

**구문:** obj << Fit Beta

**설명:** 2모수 베타 분포를 0에서 1 사이(경계값 포함 안 함)의 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Beta;

```

#### Fit Beta Binomial

**구문:** obj << Fit Beta Binomial( Sample Size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 베타 이항 분포를 적합시킵니다. 이 분포는 이항 분포보다 유연합니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit Binomial

**구문:** obj << Fit Binomial( Sample size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 이항 분포를 적합시킵니다. 이 분포는 n번의 독립 시행에서 총 성공 횟수를 모델링합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit Binomial( Sample Size( :Box Size ) );

```

#### Fit Cauchy

**구문:** obj << Fit Cauchy

**설명:** Cauchy 분포를 데이터에 적합시킵니다. Cauchy 분포는 이상치에 대해 로버스트하며, 자유도가 1인 t 분포와 동일합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

#### Fit ExGaussian

**구문:** obj << Fit ExGaussian

**설명:** 지수 수정 가우시안 분포를 데이터에 적합시킵니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit ExGaussian;
obj << Fit Normal;
obj << Fit Exponential;

```

#### Fit Exponential

**구문:** obj << Fit Exponential

**설명:** 지수 분포를 음수가 아닌 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :POP ) );
obj << Fit Exponential;

```

#### Fit Gamma

**구문:** obj << Fit Gamma

**설명:** 2모수 감마 분포를 양수 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :Max deg. F Jan ) );
obj << Fit Gamma;

```

#### Fit Handle

**구문:** obj << (Fit Handle[number] << {option}); 

 obj << (Fit Handle["Distribution Name"] << {option})

**설명:** 적합 분포에 대한 핸들 배열. 특정 적합 분포로 명령을 보내는 데 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;
obj << Fit Weibull;
obj << (Fit Handle[2] << Goodness of Fit( 1 ));
obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

#### Fit Johnson

**구문:** obj << Fit Johnson

**설명:** Johnson 분포를 데이터에 적합시킵니다. 세 가지 유형의 Johnson 분포(Su, Sb, Sl) 중 분위수를 기반으로 가장 적절한 분포가 선택됩니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Johnson;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Johnson;

```

#### Fit Largest Extreme Value

**구문:** obj << Fit Largest Extreme Value

**설명:** 최대 극단값 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Largest Extreme Value;

```

#### Fit Lognormal

**구문:** obj << Fit Lognormal

**설명:** 로그 정규 분포를 양수 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Lognormal;

```

#### Fit Negative Binomial

**구문:** obj << Fit Negative Binomial

**설명:** 음이항 분포를 데이터에 적합시킵니다. 이 분포는 감마 Poisson 분포와 동일합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Negative Binomial;

```

#### Fit Normal

**구문:** obj << Fit Normal

**설명:** 정규 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Weight ) );
obj << Fit Normal;

```

#### Fit Normal 2 Mixture

**구문:** obj << Fit Normal 2 Mixture

**설명:** 두 정규 분포의 혼합을 적합시킵니다. 이 분포는 이봉 데이터를 적합시킬 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 2 Mixture;

```

#### Fit Normal 3 Mixture

**구문:** obj << Fit Normal 3 Mixture

**설명:** 세 정규 분포의 혼합을 적합시킵니다. 이 분포는 다봉 데이터를 적합시킬 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );
obj = dt << Distribution( Column( :CD8 ) );
obj << Fit Normal 3 Mixture;

```

#### Fit Poisson

**구문:** obj << Fit Poisson

**설명:** Poisson 분포를 데이터에 적합시킵니다. 이 분포는 개수 데이터에 보편적으로 사용됩니다. Poisson 분포의 적합 평균은 분산과 동일합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );
obj = dt << Distribution( Column( :Delay ) );
obj << Fit Poisson;

```

#### Fit SHASH

**구문:** obj << Fit Shash

**설명:** SHASH(SinH-ArcsinH) 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :CO ) );
obj << Fit Shash;

```

#### Fit Smallest Extreme Value

**구문:** obj << Fit Smallest Extreme Value

**설명:** 최소 극단값 분포를 데이터에 적합시킵니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Smallest Extreme Value;

```

#### Fit Smooth Curve

**구문:** obj << Fit Smooth Curve( <Bandwidth( number )> )

**설명:** 비모수 밀도 추정을 사용하여 평활 곡선을 데이터에 적합시킵니다. 대역폭을 지정하여 평활도를 설정할 수 있습니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :SO2 ) );
obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

#### Fit Student's t

**구문:** obj << Fit Student&apos;s t

**설명:** 스튜던트 t 분포를 데이터에 적합시킵니다. 이 분포는 정규 분포와 Cauchy 분포 사이에 걸쳐 있는 로버스트 옵션입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
Random Reset( 15 );
d = J( 75, 1, Random Normal() );
d[1] = 10;
d[2] = 9;
d[3] = 8;
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

#### Fit Weibull

**구문:** obj << Fit Weibull

**설명:** 2모수 Weibull 분포를 양수 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :NO ) );
obj << Fit Weibull;

```

#### Fit ZI Beta Binomial

**구문:** obj << Fit ZI Beta Binomial( Sample Size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 영과잉 베타 이항 분포를 적합시킵니다. 이 분포는 관측된 0이 베타 이항 분포에서 예상한 것보다 많을 경우 n번의 독립 시행에서 총 성공 횟수를 모델링합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Binomial

**구문:** obj << Fit ZI Binomial( Sample Size( n | column ) )

**설명:** 지정된 상수 표본 크기 또는 표본 크기가 포함된 열이 주어졌을 때 영과잉 이항 분포를 적합시킵니다. 이 분포는 관측된 0이 이항 분포에서 예상한 것보다 많을 경우 n번의 독립 시행에서 총 성공 횟수를 모델링합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );
obj = dt << Distribution( Column( :"# Defects"n ) );
obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Negative Binomial

**구문:** obj << Fit ZI Negative Binomial

**설명:** 영과잉 음이항 분포를 0 값이 포함된 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

#### Fit ZI Poisson

**구문:** obj << Fit ZI Poisson

**설명:** 영과잉 Poisson 분포를 0 값이 포함된 데이터에 적합시킵니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

#### Fit ZI SHASH

**구문:** obj << Fit ZI SHASH

**설명:** 점질량이 0인 SHASH 분포를 데이터에 적합시킵니다.

```jsl

Names Default To Here( 1 );
Random Reset( 18 );
d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );
For( i = 1, i <= 250, i++,
	If( Random Uniform() < .2,
		d[i] = 0
	)
);
As Table( d );
Column( 1 ) << set name( "X" );
Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

#### Histogram

**구문:** obj << Histogram( state=0|1 )

**설명:** 히스토그램을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**구문:** obj << Histogram Color( color )

**설명:** 히스토그램 막대의 색상을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**구문:** obj << Horizontal Layout( state=0|1 )

**설명:** 히스토그램과 보고서의 방향을 가로로 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Horizontal Layout( 1 );

```

#### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) );
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Normal Quantile Plot

**구문:** obj << Normal Quantile Plot( state=0|1 )

**설명:** 변수의 정규 분포 범위를 시각화하는 데 사용할 수 있는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Normal Quantile Plot( 1 );

```

#### Outlier Box Plot

**구문:** obj << Outlier Box Plot( state=0|1 )

**설명:** 분포를 확인하고 가능한 이상치를 식별할 수 있는 상자 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Outlier Box Plot( 0 );

```

#### Outlier Box Plot Row Cutoff

**구문:** obj << Outlier Box Plot Row Cutoff( number )

**설명:** 처음에 이상치 상자 그림이 해제되기 전에 최대 행 수에 대한 시작 옵션을 설정합니다. 기본값은 "100000"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );
obj = dt << Distribution( Column( :Flu Cases ) );
obj << Outlier Box Plot Row Cutoff( 10000 );

```

#### PpK Capability Labeling

**구문:** obj << PpK Capability Labeling( state=0|1 )

**설명:** 공정 능력 분석 결과에서 전체 공정 능력 지수의 라벨 접두사로 Cp 대신 Pp를 사용하도록 전환합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << PpK Capability Labeling( 0 );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Prediction Interval

**구문:** obj << Prediction Interval( Alpha, N Samples, <Lower | Upper> )

**설명:** 개별 미래 관측값에 대한 예측 구간 및 지정된 수(N개 표본)의 미래 관측값에 대한 평균을 계산합니다. 단측 또는 양측 예측 구간을 생성할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prediction Interval( 0.95, 20 );

```

#### Prob Axis

**구문:** obj << Prob Axis( state=0|1 )

**설명:** 히스토그램의 확률 또는 비율 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Prob Axis( 1 );

```

#### Process Capability

**구문:** obj << Process Capability( LSL( number ), Target( number ), USL( number ) )

**설명:** LSL(규격 하한), 목표값 및 USL(규격 상한)이 주어졌을 때 공정 능력 분석을 계산합니다. 공정 능력 보고서에는 히스토그램, 요약 상세 정보, 공정 능력 지수 및 부적합 통계량이 포함됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :PM10 ) );
obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Quantile Box Plot

**구문:** obj << Quantile Box Plot( state=0|1 )

**설명:** 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99% 및 100% 분위수를 포함하는 상자 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Outlier Box Plot( 0 );
obj << Quantile Box Plot( 1 );

```

#### Quantiles

**구문:** obj << Quantiles( state=0|1 )

**설명:** 선택한 분위수의 값이 나열된 분위수 보고서를 표시하거나 숨깁니다. 기본적으로 0%, 0.5%, 2.5%, 10%, 25%, 50%, 75%, 90%, 97.5%, 99.5% 및 100% 분위수가 나열됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Quantiles( 0 );

```

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset( Expr( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) ) );

```

#### Save

**구문:** obj << Save( "수준 수"|"수준 중간점"|"순위"|"순위 평균"|"확률 스코어"|"정규 분위수"|"표준화"|"중심화"|"로버스트 표준화"|"로버스트 중심화"|"규격 한계"|"로그에 스크립트로" )

**설명:** 지정된 관측값별 통계량을 데이터 테이블의 새 열에 저장합니다. 현재 보고서를 생성하는 스크립트 명령을 로그 창에 인쇄하는 옵션도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Save( "Ranks" );

```

#### Set Bin Width

**구문:** obj << Set Bin Width( number )

**설명:** 축을 원본으로 사용하여 히스토그램 계급 폭을 설정합니다. 이 옵션은 연속형 변수에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Bin Width( 5 );

```

#### Set Quantile Increment

**구문:** obj << Set Quantile Increment( fraction | "revert to default quantiles" )

**설명:** 분위수 보고서에 사용되는 증분을 지정된 비율로 설정하거나 기본 분위수로 다시 변경합니다. 이 옵션은 연속형 변수에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Set Quantile Increment( 0.05 );
Wait( 1 );
obj << Set Quantile Increment( "revert to default quantiles" );

```

#### Shadowgram

**구문:** obj << Shadowgram( state=0|1 )

**설명:** 히스토그램 대신 평활 섀도그램을 표시하거나 숨깁니다. 섀도그램은 계급 폭이 다른 여러 히스토그램을 중첩합니다. 이 옵션은 연속형 변수에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Shadowgram( 1 );

```

#### Show Counts

**구문:** obj << Show Counts( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 빈도를 제공하는 막대 개수를 히스토그램에 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Counts( 1 );

```

#### Show Percents

**구문:** obj << Show Percents( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 백분율을 제공하는 막대 백분율을 히스토그램에 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**구문:** obj << Std Error Bars( state=0|1 )

**설명:** 각 히스토그램 막대에 표준 오차 막대를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Std Error Bars( 1 );

```

#### Stem and Leaf

**구문:** obj << Stem and Leaf( state=0|1 )

**설명:** 줄기-잎 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Stem and Leaf( 1 );

```

#### Summary Statistics

**구문:** obj << Summary Statistics( state=0|1 )

**설명:** 연속형 변수에 대한 평균, 표준편차 및 기타 요약 통계량이 나열된 요약 통계량 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
Wait( 1 );
obj << Summary Statistics( 0 );

```

#### Test Equivalence

**구문:** obj << Test Equivalence( Target( number ), Practical Difference( number ), <Confidence( fraction )> )

**설명:** TOST(Two One-Sided Test) 방법을 사용하여 표본 평균이 가설 값(목표값)과 동등한지 여부를 검정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

#### Test Mean

**구문:** obj << Test Mean( number, <Sigma( number )>, < Wilcoxon Signed Rank( 0|1 ) >, <PValue Animation>, <Power Animation> )

**설명:** 평균에 대한 1표본 검정을 수행합니다. 표준편차(시그마) 값을 지정하면 z 검정이 수행되고, 그렇지 않으면 표본 표준편차를 사용하여 t 검정이 수행됩니다. 추가로 비모수 Wilcoxon 부호 순위 검정을 수행하는 옵션도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Mean( 60 ); 

obj << Test Mean( 60, Sigma( 4 ) ); 

obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

#### Test Std Dev

**구문:** obj << Test Std Dev( number )

**설명:** 가설 값(숫자)이 주어졌을 때 표준편차에 대한 카이제곱 검정을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Test Std Dev( 3 );

```

#### Tolerance Interval

**구문:** obj << Tolerance Interval( Alpha(number), Proportion(number), <Lower | Upper>, <Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric> )

**설명:** 모집단의 지정된 비율 이상을 포함하는 구간을 계산합니다. 이때 표준 정규 분포가 가정됩니다. 로그 정규, 감마, 지수, Weibull, 최소 극단값, 최대 극단값, 비모수 분포 등 다른 비정규 분포를 지정할 수도 있습니다. 단측 구간을 계산하는 옵션도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

#### Vertical

**구문:** obj << Vertical( state=0|1 )

**설명:** 히스토그램, 상자 그림 및 분위수 그림의 방향을 세로로 변경합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Vertical( 0 );

```

## Distribution Fit

### 항목 메시지

#### Density Curve

**구문:** obj << Fit Distribution Name( Density Curve( state=0|1 ) ); 

obj << ( Fit Handle[number] << Density Curve( state=0|1 ))

**설명:** 히스토그램에 밀도 곡선을 표시하거나 숨깁니다. 지정된 적합의 추정 모수는 밀도 곡선을 생성하는 데 사용됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Density Curve( 0 ) );

```

#### Distribution Profiler

**구문:** obj << Fit Distribution Name( Distribution Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Distribution Profiler( state=0|1 ) )

**설명:** 지정된 적합 분포에 대한 누적 분포 함수의 예측 프로파일러를 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

#### Fitted CDF

**구문:** obj << Fit Distribution Name( Fitted CDF( vector ));

 obj << ( Fit Handle[number] << Fitted CDF( vector ))

**설명:** 적합 분포에 대한 지정된 적합 확률을 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

#### Fitted Quantiles

**구문:** obj << Fit Distribution Name( Fitted Quantiles( vector ));

 obj << ( Fit Handle[number] << Fitted Quantiles( vector ))

**설명:** 지정된 적합 분포에 대한 지정된 분위수를 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

#### Fix Parameters

**구문:** obj << Fit Distribution Name( Fix Parameters( vector ));

 obj << ( Fit Handle[number] << Fix Parameters( vector ))

**설명:** 지정된 모수를 상수로 고정하고, 고정되지 않은 모수를 다시 추정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

#### Goodness of Fit

**구문:** obj << Fit Distribution Name( Goodness of Fit( state=0|1 )); 

obj << ( Fit Handle[number] << Goodness of Fit( state=0|1 ))

**설명:** 지정된 적합 분포에 대한 적합도 검정이 포함된 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

#### PP Plot

**구문:** obj << Fit Distribution Name( PP Plot( state=0|1 ) ); 

 obj << (Fit Handle[ number ] << PP Plot( state=0|1 ) )

**설명:** 경험적 CDF(누적 분포 함수)와 지정된 적합 분포의 CDF 간 관계를 보여 주는 PP(백분위수-백분위수) 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( PP Plot( 1 ) );

```

#### Process Capability

**구문:** obj << Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); 

 obj << (Fit Handle[number] << ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**설명:** LSL(규격 하한), 목표값 및 USL(규격 상한)이 주어졌을 때 공정 능력 분석을 계산합니다. 공정 능력 보고서에는 히스토그램, 요약 상세 정보, 공정 능력 지수 및 부적합 통계량이 포함됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Distribution( Column( :OZONE ) );
obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

#### QQ Plot

**구문:** obj << Fit Distribution Name( QQ Plot( state=0|1 ) ); 

obj << ( Fit Handle[number] << QQ Plot( state=0|1 ) )

**설명:** 관측된 데이터와 지정된 적합 분포의 분위수 간 관계를 보여 주는 QQ(분위수-분위수) 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Distribution( Column( :Y ) );
obj << Fit Gamma( QQ Plot( 1 ) );

```

#### Quantile Profiler

**구문:** obj << Fit Distribution Name( Quantile Profiler( state=0|1 ) ); 

obj << ( Fit Handle[number] << Quantile Profiler( state=0|1 ) )

**설명:** 지정된 적합 분포에 대한 분위수 함수의 예측 프로파일러를 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

#### Remove Fit

**구문:** obj << (Fit Handle[number] << Remove Fit )

**설명:** 지정된 분포의 적합 및 JSL 개체를 제거합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Weibull;
obj << Fit Lognormal;
Wait( 1 );
obj << (Fit Handle[1] << Remove Fit);

```

#### Save Density Formula

**구문:** obj << Fit Distribution Name( Save Density Formula ) ; 

obj << ( Fit Handle[number] << Save Density Formula )

**설명:** 지정된 적합 분포의 밀도 계산식이 포함된 열을 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Density Formula );

```

#### Save Distribution Formula

**구문:** obj << Fit Distribution Name( Save Distribution Formula ) ; 

obj << ( Fit Handle[number] << Save Distribution Formula )

**설명:** 지정된 적합 분포의 누적 분포 함수가 포함된 열을 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Distribution Formula );

```

#### Save Simulation Formula

**구문:** obj << Fit Distribution Name( Save Simulation Formula ) ; 

obj << ( Fit Handle[number] << Save Simulation Formula )

**설명:** 지정된 적합 분포에서 시뮬레이션 값을 생성하는 계산식이 포함된 열을 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Lognormal( Save Simulation Formula );

```

#### Save Transformed

**구문:** obj << Fit Distribution Name( Save Transformed ); 

obj << ( Fit Handle[number] << Save Transformed )

**설명:** 지정된 적합 분포를 사용하여 분석 열을 정규성 열로 변환하는 데 사용되는 계산식이 포함된 열을 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :CO ) );
obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### 항목 메시지

#### Color Out of Spec Values

**구문:** obj << Color Out of Spec Values

**설명:** 데이터 테이블에서 규격 이탈 값의 셀에 색상을 적용합니다. 값이 LSL(규격 하한) 미만인 셀은 빨간색으로 표시되고 USL(규격 상한)을 초과하는 셀은 파란색으로 표시됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability( LSL( 0.12 ), Target( 0.18 ), USL( 0.24 ), Color Out of Spec Values );

```

#### Save Distribution as a Column Property

**구문:** obj << Process Capability( Save Distribution as a Column Property )

**설명:** 공정 능력 분포 유형을 원래 데이터 테이블의 열 내에 열 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability(
	LSL( 0.03 ),
	Target( 0.15 ),
	USL( 0.27 ),
	Dist( Lognormal ),
	Save Distribution as a Column Property
);

```

#### Save In Spec Indicator Formula

**구문:** obj << Save In Spec Indicator Formula

**설명:** 데이터 테이블에 새 계산식 열을 생성합니다. 새 열에는 행이 규격 한계 내에 있는지 여부를 나타내는 값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability( LSL( 0.12 ), Target( 0.18 ), USL( 0.24 ), Save In Spec Indicator Formula );

```

#### Save Spec Limits and Distribution to Column Properties without Report

**구문:** obj << Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**설명:** 적합 분포에 대해 계산된 규격 한계 및 공정 능력 분포 유형을 원래 데이터 테이블의 열 내에 열 특성으로 저장하고 공정 능력 보고서를 표시하지 않습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Sigma Multiplier for Quantile Spec Limits( 4 ),
		Save Spec Limits and Distribution to Column Properties without Report
	)
);

```

#### Save Spec Limits as a Column Property

**구문:** obj << Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); 

 obj << Process Capability( Save Spec Limits as a Column Property )

**설명:** 규격 한계를 원래 데이터 테이블의 열 내에 열 특성으로 저장합니다.

**JMP추가된 버전:** 15

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability( LSL( 0.03 ), Target( 0.15 ), USL( 0.27 ), Save Spec Limits as a Column Property )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Process Capability( LSL( 0.03 ), Target( 0.15 ), USL( 0.27 ), Save Spec Limits as a Column Property );

```

#### Set Probabilities for Quantile Spec Limits

**구문:** obj << Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); 

 obj << Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**설명:** 적합 분포에 대한 분위수 규격 한계를 계산하는 데 사용되는 확률을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal(
	Process Capability(
		Set Probabilities for Quantile Spec Limits( LSL Prob( .0001 ), Target Prob( .5 ), USL Prob( .9999 ) )
	)
);

```

#### Set Sigma Multiplier for Quantile Spec Limits

**구문:** obj << Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))); 

 obj << Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, <sided=1|2>))

**설명:** 적합 분포에 대한 분위수 규격 한계를 계산하는 데 사용되는 시그마 승수 K를 설정합니다. 선택적 sided 인수는 LSL만 계산할 경우 1이고 USL만 계산할 경우 2입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Distribution( Column( :OZONE ) );
obj << Fit Lognormal( Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) ) );

```

## Distribution Summary Statistics

### 항목 메시지

#### Customize Summary Statistics

**구문:** obj << Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), <Set Trimmed Mean Percent(number)>, <Set Alpha Level(number)>)

**설명:** 요약 통계량 보고서에 표시되는 요약 통계량을 사용자 정의합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Show All Modes

**구문:** obj << Customize Summary Statistics( Show all Modes( state=0|1 ))

**설명:** 요약 통계량 보고서에 모든 모드를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### 항목 메시지

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**구문:** obj << Axes on Left( state=0|1 )

**설명:** 개수, 확률, 밀도 및 정규 분위수 그림 축을 가로 그래프의 왼쪽으로 이동합니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) ) );
obj << Axes on Left( 1 );

```

#### Confidence Interval

**구문:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"기타…" )

**설명:** 확률에 대한 스코어 신뢰 구간을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**구문:** obj << Count Axis( state=0|1 )

**설명:** 히스토그램의 개수 축을 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**구문:** obj << Density Axis( state=0|1 )

**설명:** 히스토그램의 밀도 곡선에 대한 밀도 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**구문:** obj << Frequencies( state=0|1 )

**설명:** 각 수준의 개수 및 확률이 나열된 빈도 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**구문:** obj << Histogram( state=0|1 )

**설명:** 히스토그램을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**구문:** obj << Histogram Color( color )

**설명:** 히스토그램 막대의 색상을 변경합니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**구문:** obj << Horizontal Layout( state=0|1 )

**설명:** 히스토그램과 보고서의 방향을 가로로 변경합니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**구문:** obj << Mosaic Plot( state=0|1 )

**설명:** 각 명목형 또는 순서형 반응 변수에 대한 모자이크 막대 차트를 표시하거나 숨깁니다. 모자이크 그림은 각 세그먼트가 해당 그룹의 빈도 수에 비례하는 누적 막대 차트입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) );
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**구문:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**설명:** 히스토그램, 모자이크 그림 및 빈도 보고서를 개수에 따라 오름차순 또는 내림차순으로 정렬합니다. 기본 순서로 되돌릴 수도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**구문:** obj << Prob Axis( state=0|1 )

**설명:** 히스토그램의 확률 또는 비율 축을 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset( Expr( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) ) );

```

#### Save

**구문:** obj << Save( "수준 수"|"값 순서화"|"로그에 스크립트로" )

**설명:** 수준 수를 데이터 테이블의 새 열에 저장하거나 스크립트로서 로그에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**구문:** obj << Separate Bars( state=0|1 )

**설명:** 히스토그램의 막대 사이에 공백을 추가합니다. 이 옵션은 범주형 변수에만 사용할 수 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**구문:** obj << Show Counts( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 빈도를 제공하는 막대 개수를 히스토그램에 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**구문:** obj << Show Percents( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 백분율을 제공하는 막대 백분율을 히스토그램에 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**구문:** obj << Std Error Bars( state=0|1 )

**설명:** 각 히스토그램 막대에 표준 오차 막대를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**구문:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**설명:** 지정된 가설 확률(p1, p2, p3 등)에 대해 범주형 변수 수준의 추정 확률을 검정합니다. 수준이 두 개인 변수의 경우 &apos;검정&apos; 옵션을 사용하여 검정의 대립가설에 대한 부호를 지정합니다. 수준이 세 개 이상인 변수의 경우 &apos;고정&apos; 옵션을 사용하여 결측 가설 값 처리 방법을 지정합니다. f는 선행 수준을 고정으로 처리하도록 지정하는 선택적 인수입니다.

**2수준, 단측 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**2수준, 양측 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**다중 수준 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.8, 0.04375, 0.075, 0.04375, 0.01875, 0.01875 );

```

#### Vertical

**구문:** obj << Vertical( state=0|1 )

**설명:** 히스토그램, 상자 그림 및 분위수 그림의 방향을 세로로 변경합니다. 기본적으로 설정되어 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Nominal Distribution

### 항목 메시지

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**Anonymous preset**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();
dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );
obj2 = dt2 << Distribution(
	Nominal Distribution( Column( :Aircraft Damage ) ),
	Continuous Distribution( Column( :Total Minor Injuries ) )
);
Wait( 1 );
obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
Wait( 1 );
obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**구문:** obj << Axes on Left( state=0|1 )

**설명:** 개수, 확률, 밀도 및 정규 분위수 그림 축을 가로 그래프의 왼쪽으로 이동합니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution(
	Multiple Response Distribution( Column( :Brush Delimited ), Horizontal Layout( 1 ), Count Axis( 1 ) )
);
obj << Axes on Left( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) ) );
obj << Axes on Left( 1 );

```

#### Confidence Interval

**구문:** obj << Confidence Interval( "0.90"|"0.95"|"0.99"|"기타…" )

**설명:** 확률에 대한 스코어 신뢰 구간을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Confidence Interval( 0.95 );

```

#### Count Axis

**구문:** obj << Count Axis( state=0|1 )

**설명:** 히스토그램의 개수 축을 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Count Axis( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Count Axis( 1 );

```

#### Density Axis

**구문:** obj << Density Axis( state=0|1 )

**설명:** 히스토그램의 밀도 곡선에 대한 밀도 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Density Axis( 1 );

```

#### Frequencies

**구문:** obj << Frequencies( state=0|1 )

**설명:** 각 수준의 개수 및 확률이 나열된 빈도 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Frequencies( 0 );

```

#### Histogram

**구문:** obj << Histogram( state=0|1 )

**설명:** 히스토그램을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
Wait( 1 );
obj << Histogram( 0 );

```

#### Histogram Color

**구문:** obj << Histogram Color( color )

**설명:** 히스토그램 막대의 색상을 변경합니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Histogram Color( "Blue" );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**구문:** obj << Horizontal Layout( state=0|1 )

**설명:** 히스토그램과 보고서의 방향을 가로로 변경합니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Horizontal Layout( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**구문:** obj << Mosaic Plot( state=0|1 )

**설명:** 각 명목형 또는 순서형 반응 변수에 대한 모자이크 막대 차트를 표시하거나 숨깁니다. 모자이크 그림은 각 세그먼트가 해당 그룹의 빈도 수에 비례하는 누적 막대 차트입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Mosaic Plot( 1 );

```

#### New JSL Preset

**구문:** New JSL Preset( preset )

**설명:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
preset = obj[1] << New JSL Preset( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) );
Wait( 1 );
obj[1] << Apply Preset( preset );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),
	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) )
);
preset = obj[1] << New Preset();

```

#### Order By

**구문:** obj << Order By( "Default"|"Count Descending"|"Count Ascending" )

**설명:** 히스토그램, 모자이크 그림 및 빈도 보고서를 개수에 따라 오름차순 또는 내림차순으로 정렬합니다. 기본 순서로 되돌릴 수도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Order By( "Count Descending" );

```

#### Prob Axis

**구문:** obj << Prob Axis( state=0|1 )

**설명:** 히스토그램의 확률 또는 비율 축을 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Prob Axis( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Prob Axis( 1 );

```

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution(
	Continuous Distribution( Column( :weight ) ),
	Nominal Distribution( Column( :age ) )
);
obj[1] << Render Preset( Expr( Continuous Distribution( Column( :A ), Normal Quantile Plot( 1 ) ) ) );

```

#### Save

**구문:** obj << Save( "수준 수"|"값 순서화"|"로그에 스크립트로" )

**설명:** 수준 수를 데이터 테이블의 새 열에 저장하거나 스크립트로서 로그에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Save( "Level Numbers" );

```

#### Separate Bars

**구문:** obj << Separate Bars( state=0|1 )

**설명:** 히스토그램의 막대 사이에 공백을 추가합니다. 이 옵션은 범주형 변수에만 사용할 수 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Separate Bars( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Separate Bars( 1 );

```

#### Show Counts

**구문:** obj << Show Counts( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 빈도를 제공하는 막대 개수를 히스토그램에 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Counts( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Counts( 1 );

```

#### Show Percents

**구문:** obj << Show Percents( state=0|1 )

**설명:** 각 히스토그램 막대가 나타내는 열 값의 백분율을 제공하는 막대 백분율을 히스토그램에 표시하거나 숨깁니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Show Percents( 1 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Show Percents( 1 );

```

#### Std Error Bars

**구문:** obj << Std Error Bars( state=0|1 )

**설명:** 각 히스토그램 막대에 표준 오차 막대를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Std Error Bars( 1 );

```

#### Test Probabilities

**구문:** obj << Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, <f>, p2, <f>, p3, <f>, etc. )

**설명:** 지정된 가설 확률(p1, p2, p3 등)에 대해 범주형 변수 수준의 추정 확률을 검정합니다. 수준이 두 개인 변수의 경우 &apos;검정&apos; 옵션을 사용하여 검정의 대립가설에 대한 부호를 지정합니다. 수준이 세 개 이상인 변수의 경우 &apos;고정&apos; 옵션을 사용하여 결측 가설 값 처리 방법을 지정합니다. f는 선행 수준을 고정으로 처리하도록 지정하는 선택적 인수입니다.

**2수준, 단측 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**2수준, 양측 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**다중 수준 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );
obj << Test Probabilities( Test( Hypothesized ), 0.8, 0.04375, 0.075, 0.04375, 0.01875, 0.01875 );

```

#### Vertical

**구문:** obj << Vertical( state=0|1 )

**설명:** 히스토그램, 상자 그림 및 분위수 그림의 방향을 세로로 변경합니다. 기본적으로 설정되어 있습니다.

**다중 반응 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );
obj << Vertical( 0 );

```

**명목형 분포 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );
obj << Vertical( 0 );

```

## Test Mean

### 항목 메시지

#### PValue animation

**구문:** obj << Test Mean( PValue Animation )

**설명:** 평균이 변경되면 p 값이 어떻게 변하는지 애니메이션으로 보여 주는 별도의 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, PValue Animation );

```

#### Power animation

**구문:** obj << Test Mean( Power Animation )

**설명:** 평균이 변경되면 검정력이 어떻게 변하는지와 검정이 단측인지 또는 양측인지를 애니메이션으로 보여 주는 별도의 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Test Mean( 60, Power Animation );

```

## Tolerance Interval

### 항목 메시지

#### Save Distribution as a Column Property

**구문:** obj << Tolerance Interval( Save Distribution as a Column Property )

**설명:** 공차 구간 분포 유형을 원래 데이터 테이블의 열 내에 열 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = Distribution( Column( :Height ) );
obj << Tolerance Interval(
	Alpha( 0.95 ),
	Proportion( 0.90 ),
	Lognormal,
	Save Distribution as a Column Property
);

```

#### Save to Spec Limits Column Property

**구문:** obj << Save to Spec Limits Column Property( Alpha(number), Proportion(number), <Lower | Upper>, <Nonparametric>, <Save to Spec Limits Column Property> )

**설명:** 공차 구간을 데이터 테이블의 규격 한계 열 특성에 규격 한계로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Distribution( Column( :Height ) );
obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ), Save to Spec Limits Column Property );

```

