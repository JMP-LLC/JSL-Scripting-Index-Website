# Process Capability



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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
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

### Copy ByGroup Script

**구문:** obj << Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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

### Get ByGroup Script

**구문:** obj << Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
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

**구문:** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Process Capability

**구문:** Process Capability( Process Variables (columns), < Spec Limits() > )

**설명:** 각 공정에 대한 공정 능력 분석을 계산하고 여러 공정의 공정 능력을 한 번에 분석하는 데 유용한 그래프를 생성합니다. 규격 한계도 정의할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);

```

## 열

### By

**구문:** obj = Process Capability(...<By( column(s) )>...)

<b>실행기 항목: 예</b>

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);

```

### Grouping

**구문:** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**설명:** 열을 그룹화 변수로 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );

dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );
dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );
dt << Process Capability(
	Process Variables( :pH, :Salt Concentration, :Moisture Content ),
	Grouping( :Cheese Type ),
	Spec Limits( Use Limits Table( dtLimits ) ),
	Moving Range Method( Average of Moving Ranges ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),
	Grouping( :site )
);

```

### Process Variables

**구문:** obj = Process Capability(...Process Variables( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 분석할 측정값이 포함된 공정 데이터 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);

```

## 항목 메시지

### AIAG (Ppk) Labeling

**구문:** obj << "AIAG (Ppk) Labeling"n( state=0|1 )

**설명:** "Cp" 라벨을 "Pp" 라벨로 변경하여 공정 능력 지수의 AIAG 라벨을 설정하거나 해제합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability( Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] ) );
obj << Individual Detail Reports( 1 );
Wait( 1 );
obj << "AIAG (Ppk) Labeling"n( 0 );

```

### Capability Box Plots

**구문:** obj << Capability Box Plots( state=0|1 )

**설명:** 각 공정에 대한 상자 그림을 표시하거나 숨깁니다. 상자 그림을 생성하기 위해 각 공정의 값이 목표값으로 중심화되고 규격 한계로 척도화됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 )
);
Wait( 1 );
obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**구문:** obj << Capability Index Plot( state=0|1, <plot options> )

**설명:** 각 공정의 전체 Ppk를 나타내는 그래프를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ), :Process 3 & Dist( Weibull ),
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ),
		:Process 7
	),
	Capability Index Plot( 0 ),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**구문:** obj << Color Out of Spec Values( state=0|1 )

**설명:** 데이터 테이블에서 규격 이탈 값의 셀에 색상을 적용합니다. 값이 LSL(규격 하한) 미만인 셀은 빨간색으로 표시되고 USL(규격 상한)을 초과하는 셀은 파란색으로 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Color Out of Spec Values( 1 );

```

### Get Limits

**구문:** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**설명:** 한계 데이터 테이블에서 규격 한계를 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Get Limits( dt2 ) )
);

```

### Goal Plot

**구문:** obj << Goal Plot( state=0|1, <plot options> )

**설명:** 각 공정에 대한 점이 있는 그래프를 표시하거나 숨깁니다. 규격으로 표준화된 평균이 가로 축에 표시되고 규격으로 표준화된 표준편차가 세로 축에 표시됩니다. 목표 호 위의 점은 지정된 Ppk(Cpk) 임계보다 낮은 공정을 나타냅니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Goal Plot( 1 );

```

### Individual Detail Reports

**구문:** obj << Individual Detail Reports( state=0|1 )

**설명:** 각 공정에 대해 별도의 개별 상세 정보 공정 능력 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**구문:** obj << Individual Detail Reports Cutoff( number=1 )

**설명:** 공정 변수 개수가 경계 값보다 작거나 같은 경우 개별 상세 정보 보고서를 표시하고 목표 그림 및 공정 능력 상자 그림을 숨깁니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports Cutoff( 7 );

```

### Make Goal Plot Summary Table

**구문:** obj << Make Goal Plot Summary Table

**설명:** 목표 그림에 표시되는 군내 점과 전체 점의 좌표가 모두 포함된 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Make Goal Plot Summary Table;

```

### Order By

**구문:** obj << Order By( "초기 순서"|"초기 순서 역순"|"군내 표준편차 Cpk 오름차순"|"군내 표준편차 Cpk 내림차순"|"전체 표준편차 Ppk 오름차순"|"전체 표준편차 Ppk 내림차순" )

**설명:** 모든 상자 그림, 요약 보고서 및 개별 상세 정보 보고서를 지정된 순서로 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Within Sigma Summary Report( 1 );
Wait( 1 );
obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**구문:** obj << Overall Sigma Normalized Box Plots( state=0|1 )

**설명:** 각 공정에 대한 상자 그림을 표시하거나 숨깁니다. 상자 그림의 값은 전체 평균으로 중심화되고 표준편차의 전체 추정값으로 척도화됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**구문:** obj << Overall Sigma Summary Report( state=0|1 )

**설명:** 공정 능력 지수 요약 보고서를 표시하거나 숨깁니다. 공정 능력 지수는 표준편차의 전체 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Summary Report( 1 );

```

### Process Performance Plot

**구문:** obj << Process Performance Plot( state=0|1, <plot options> )

**설명:** 전체 공정 능력 Ppk 대 안정성을 보여 주는 4개의 사분면 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 ),

);
obj << Process Performance Plot( 1 );

```

### Save Distributions as Column Properties

**구문:** obj << Save Distributions as Column Properties

**설명:** 공정 능력을 계산하는 데 사용되는 분포를 &apos;공정 능력 분포&apos; 열 특성으로 저장합니다. 열 특성은 분석의 각 공정 변수에 대해 저장됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**구문:** obj << Save In Spec Indicator Formulas

**설명:** 데이터 테이블에 새 계산식 열을 생성합니다. 새 열에는 행이 규격 한계 내에 있는지 여부를 나타내는 값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save In Spec Indicator Formulas;

```

### Save Spec Limits as Column Properties

**구문:** obj << Save Spec Limits as Column Properties

**설명:** 규격 한계를 분석의 각 공정 변수에 대한 열 특성에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**구문:** obj << Save Spec Limits to New Table

**설명:** 각 공정 변수에 대한 규격 한계, 공정 중요도 및 분포가 포함된 새 데이터 테이블을 생성합니다. 이 테이블은 세로형이고 각 공정 변수에 대한 행을 포함합니다. 공정 중요도 및 분포 유형은 해당되는 경우에만 저장됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**구문:** obj << Select Out of Spec Values( state=0|1 )

**설명:** 데이터 테이블에서 규격 한계를 벗어나는 값이 하나 이상 포함된 모든 행과 열을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Select Out of Spec Values( 1 );

```

### Use Limits Table

**구문:** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**설명:** 한계 데이터 테이블에서 규격 한계를 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Use Limits Table( dt2 ) )
);

```

### Within Sigma Normalized Box Plots

**구문:** obj << Within Sigma Normalized Box Plots( state=0|1 )

**설명:** 각 공정에 대한 상자 그림이 포함된 그래프를 표시하거나 숨깁니다. 상자 그림의 값은 평균으로 중심화되고 표준편차의 부분군 내 추정값으로 나눕니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**구문:** obj << Within Sigma Summary Report( state=0|1 )

**설명:** 공정 능력 지수 요약 보고서를 표시하거나 숨깁니다. 공정 능력 지수는 표준편차의 부분군 내 추정값을 사용하여 계산됩니다. 정규 분포가 지정된 변수에 대해서만 결과가 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**구문:** obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**설명:** 각 공정에 대한 상자 그림이 포함된 그래프를 표시하거나 숨깁니다. 상자 그림의 값은 평균으로 중심화되고 표준편차의 그룹 내 추정값 또는 군간-군내 추정값(지정된 경우)으로 나눕니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**구문:** obj << "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**설명:** 공정 능력 지수 요약 보고서를 표시하거나 숨깁니다. 공정 능력 지수는 표준편차의 부분군 내 추정값 또는 그룹 간-그룹 내 추정값(지정된 경우)을 사용하여 계산됩니다. 이 옵션은 시작 창에서 하나 이상의 공정에 대해 &apos;군간-군내 공정 능력 계산&apos; 옵션을 선택한 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### 항목 메시지

#### Parametric Fit Confidence Limits Shading

**구문:** scrobj << Parametric Fit Confidence Limits Shading( state=0|1 )

**설명:** 모수 적합 신뢰 한계 음영을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**구문:** scrobj << Parametric Fit Line( state=0|1 )

**설명:** 모수 적합선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**구문:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**설명:** 동시 경험적 신뢰 한계를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**구문:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**설명:** 동시 경험적 신뢰 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits Shading( 0 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### 항목 메시지

#### Comparison Details

**구문:** scrobj << Comparison Details( state=0|1 )

**설명:** 각 분포의 AICc, BIC 및 -2*로그 가능도 값이 포함된 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Details( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**구문:** scrobj << Comparison Histogram( state=0|1 )

**설명:** 분포 비교 히스토그램을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Histogram( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**구문:** scrobj << Compare Distributions( 1, <<Fit Beta )

**설명:** 비교 상세 정보 보고서에 베타 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE ),
	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),
	Individual Detail Reports( 1 ),
	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**구문:** scrobj << Compare Distributions( 1, <<Fit Exponential )

**설명:** 비교 상세 정보 보고서에 지수 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**구문:** scrobj << Compare Distributions( 1, <<Fit Gamma )

**설명:** 비교 상세 정보 보고서에 감마 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**구문:** scrobj << Compare Distributions( 1, <<Fit Johnson )

**설명:** 비교 상세 정보 보고서에 Johnson 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**구문:** scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value )

**설명:** 비교 상세 정보 보고서에 최대 극단값 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**구문:** scrobj << Compare Distributions( 1, <<Fit Lognormal )

**설명:** 비교 상세 정보 보고서에 로그 정규 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**구문:** scrobj << Compare Distributions( 1, <<Fit Nonparametric )

**설명:** 히스토그램에 비모수 분포 커널 대역폭 슬라이더와 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**구문:** scrobj << Compare Distributions( 1, <<Fit Normal )

**설명:** 비교 상세 정보 보고서에 정규 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);

```

#### Fit SHASH

**구문:** scrobj << Compare Distributions( 1, <<Fit SHASH )

**설명:** 비교 상세 정보 보고서에 SHASH 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**구문:** scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value )

**설명:** 비교 상세 정보 보고서에 최소 극단값 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**구문:** scrobj << Compare Distributions( 1, <<Fit Weibull )

**설명:** 비교 상세 정보 보고서에 Weibull 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**구문:** scrobj << Compare Distributions( 1, <<Mixture of 2 Normals )

**설명:** 비교 상세 정보 보고서에 2 정규 혼합 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**구문:** scrobj << Compare Distributions( 1, <<Mixture of 3 Normals )

**설명:** 비교 상세 정보 보고서에 3 정규 혼합 분포 적합 통계량을 표시하고 히스토그램에 밀도 곡선을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**구문:** scrobj << Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**설명:** 비교 상세 정보 보고서를 재정렬합니다. AICc, BIC 또는 -2*로그 가능도에 따라 재정렬할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull, )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**구문:** scrobj << Probability Plots( state=0|1 )

**설명:** 분포 비교 확률도를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### 항목 메시지

#### Show Between-and-Within Sigma Density

**구문:** scrobj << "Show Between-and-Within Sigma Density"n( state=0|1 )

**설명:** 히스토그램에 군간-군내 표준편차를 사용하는 밀도 곡선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Within Subgroup Variation( Average of Unbiased Standard Deviations ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**구문:** scrobj << Show Count Axis( state=0|1 )

**설명:** 히스토그램 프레임 오른쪽에 개수 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**구문:** scrobj << Show Density Axis( state=0|1 )

**설명:** 히스토그램 프레임 오른쪽에 밀도 축을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**구문:** scrobj << Show Overall Sigma Density( state=0|1 )

**설명:** 히스토그램에 전체 표준편차를 사용하는 밀도 곡선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Overall Sigma Density( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**구문:** scrobj << Show Spec Limits( state=0|1 )

**설명:** 히스토그램에 규격 하한 및 규격 상한을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Spec Limits( 1 );

```

#### Show Target

**구문:** scrobj << Show Target( state=0|1 )

**설명:** 히스토그램에 목표값 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**구문:** scrobj << Show Within Sigma Density( state=0|1 )

**설명:** 히스토그램에 군내 표준편차를 사용하는 밀도 곡선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Within Sigma Density( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### 항목 메시지

#### Capability

**구문:** scrobj << Capability( state=0|1 )

**설명:** 공정 능력 지수를 표시하거나 숨깁니다. 원래 공정 능력 지수는 전체 표준편차를 기반으로 합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Capability( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Capability( 1 );

```

#### Nonconformance

**구문:** scrobj << Nonconformance( state=0|1 )

**설명:** 부적합을 표시하거나 숨깁니다. 원래 부적합 값은 전체 표준편차를 기반으로 합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Nonconformance( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**구문:** scrobj << Revert to Original Values

**설명:** 대화식 공정 능력 그림을 원래 값으로 되돌립니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**구문:** scrobj << Save New Spec Limits as a Column Property

**설명:** 새 규격 한계를 원래 데이터 테이블에 열 특성으로 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### 항목 메시지

#### Normal Fit Confidence Limits Shading

**구문:** scrobj << Normal Fit Confidence Limits Shading( state=0|1 )

**설명:** 정규 확률도에서 정규 적합 신뢰 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**구문:** scrobj << Normal Fit Line( state=0|1 )

**설명:** 정규 확률도에서 정규 적합선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Normal Probability Plot( 1, Normal Fit Line( 0 ) ) )}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**구문:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**설명:** 공정 능력 보고서의 정규 확률도에 동시 경험적 신뢰 한계를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**구문:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**설명:** 공정 능력 보고서의 정규 확률도에 동시 경험적 신뢰 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### 항목 메시지

#### Between-and-Within Sigma Capability

**구문:** scrobj << "Between-and-Within Sigma Capability"n( state=0|1 )

**설명:** 군간-군내 표준편차를 사용하는 공정 능력 지수를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis( "Between-and-Within Sigma Capability"n( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;
scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**구문:** scrobj << "Between-and-Within Sigma Target Index"n( state=0|1 )

**설명:** 군간-군내 표준편차를 기반으로 하는 목표 지수 추정값을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis( "Between-and-Within Sigma Target Index"n( 1 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**구문:** scrobj << "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**설명:** 군간-군내 표준편차를 사용하는 벤치마크 Z 지수를 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis( "Between-and-Within Sigma Z Benchmark"n( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**구문:** scrobj << Compare Distributions( state=0|1, < <<distribution options > )

**설명:** 공정의 분포를 비교하는 제어판을 표시하거나 숨깁니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis( Compare Distributions( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) << Process Capability Analysis(
		Compare Distributions( 1, <<Fit Normal )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;
scrobj << Compare Distributions( 1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull );

```

**예제 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Gamma ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**구문:** scrobj << Fix Parameters( vector )

**설명:** 특정 모수를 지정된 값으로 고정하고 나머지 모수를 다시 추정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Weibull ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Weibull )) << Process Capability Analysis( Fix Parameters( [11, .] ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;
scrobj << Fix Parameters( [., .] );

```

#### Histogram

**구문:** scrobj << Histogram( state=0|1 )

**설명:** 개별 상세 정보 보고서에 공정 데이터 히스토그램을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**구문:** scrobj << Interactive Capability Plot( state=0|1 )

**설명:** 공정 또는 규격 한계의 변경이 공정 능력에 어떤 영향을 주는지 탐색할 수 있는 대화식 공정 능력 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;
scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**구문:** scrobj << Nonconformance( state=0|1 )

**설명:** 규격 한계를 벗어나는 관측값의 관측 백분율 및 기대 백분율 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**구문:** scrobj << Nonparametric Density( state=0|1 )

**설명:** 비모수 분포를 적합시키는 데 사용된 커널 대역폭을 제공하는 비모수 밀도 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Purity & Dist( Nonparametric ) ),
	Individual Detail Reports( 1 ),
	{(:Purity & Dist( Nonparametric )) << Process Capability Analysis( Nonparametric Density( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;
scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**구문:** scrobj << Normal Probability Plot( state=0|1 )

**설명:** 정규 확률도를 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability( Process Variables( :Gap[:Date] ), Individual Detail Reports( 1 ), );
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**구문:** scrobj << Overall Sigma Capability( state=0|1 )

**설명:** 전체 표준편차를 기반으로 한 공정 능력 지수를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**구문:** scrobj << Overall Sigma Z Benchmark( state=0|1 )

**설명:** 전체 표준편차를 기반으로 한 벤치마크 Z 지수를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**구문:** scrobj << Parameter Estimates( state=0|1 )

**설명:** 비정규 모수 분포에 대한 모수 추정값 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Thickness & Dist( Johnson ) ),
	Individual Detail Reports( 1 ),
	{(:Thickness & Dist( Johnson )) << Process Capability Analysis( Parameter Estimates( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;
scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**구문:** scrobj << Process Summary( state=0|1 )

**설명:** 공정 요약 통계량을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**구문:** scrobj << Within Sigma Capability( state=0|1 )

**설명:** 군내 표준편차를 기반으로 하는 공정 능력 지수 및 신뢰 구간을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**구문:** scrobj << Within Sigma Target Index( state=0|1 )

**설명:** 군내 표준편차를 기반으로 하는 목표 지수 추정값을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**구문:** scrobj << Within Sigma Z Benchmark( state=0|1 )

**설명:** 군내 표준편차를 기반으로 한 벤치마크 Z 지수를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### 항목 메시지

#### Capability Lines

**구문:** obj << Goal Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**설명:** 목표 그림의 목표 삼각형 선을 제어하는 Ppk(Cpk) 값을 설정합니다. 이 값은 Ppk(Cpk) 편집 상자에도 나타납니다. 기본값은 "1.0"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Capability Lines( 1.5 ) );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**구문:** obj << Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); 

scrobj << Defect Rate Contour( number=0.0001 )

**설명:** 지정된 결함 비율 등고선을 표시하거나 숨깁니다. 기본값은 "0.0001"입니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**구문:** obj << Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**설명:** 목표 그림의 점에 라벨을 표시하거나 숨깁니다. 점은 전체 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**구문:** obj << Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**설명:** 목표 그림의 점에 라벨을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**구문:** obj << Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**설명:** 목표 그림의 점에 라벨을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값 또는 군간-군내 표준편차 추정값(지정된 경우)을 사용하여 계산됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	Show Overall Sigma Points( 0 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**구문:** obj << Goal Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**설명:** 목표 그림에 Ppk(Cpk) 수준 음영을 표시하거나 숨깁니다. p가 편집 상자에 입력된 Ppk(Cpk) 목표를 나타낼 경우 Ppk(Cpk)가 2*p보다 큰 공정은 녹색으로, Ppk(Cpk)가 p보다 작은 공정은 빨간색으로, Ppk(Cpk)가 p보다 크고 2*p보다 작은 공정은 노란색으로 음영 처리됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**구문:** obj << Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**설명:** 목표 그림에 점을 표시하거나 숨깁니다. 점은 전체 표준편차 추정값을 사용하여 계산됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),

);
Wait( 1 );
obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**구문:** obj << Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**설명:** 목표 그림에 점을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**구문:** obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**설명:** 목표 그림에 점을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값 또는 군간-군내 표준편차 추정값(지정된 경우)을 사용하여 계산됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### 항목 메시지

#### Capability Lines

**구문:** obj << Capability Index Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**설명:** 공정 능력 지수 그림에서 Ppk(Cpk) 참조선을 제어하는 Ppk(Cpk) 값을 설정합니다. 이 값은 Ppk(Cpk) 편집 상자에도 나타납니다. 기본값은 "1.0"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal )
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**구문:** obj << Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**설명:** 공정 능력 지수 그림의 점에 라벨을 표시하거나 숨깁니다. 점은 전체 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3, :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**구문:** obj << Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**설명:** 공정 능력 지수 그림의 점에 라벨을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3, :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ), Label Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**구문:** obj << Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**설명:** 공정 능력 지수 그림의 점에 라벨을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값 또는 군간-군내 표준편차 추정값(지정된 경우)을 사용하여 계산됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**구문:** obj << Capability Index Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**설명:** 공정 능력 지수 그림에서 Ppk(Cpk) 수준 음영을 표시하거나 숨깁니다. p가 편집 상자에 입력된 Ppk(Cpk) 값을 나타내는 경우 2*p보다 큰 Ppk(Cpk)를 가진 공정은 녹색으로, P보다 작은 Ppk(Cpk)를 가진 공정은 빨간색으로, p보다 크고 2*p보다 작은 Ppk(Cpk)를 가진 공정은 노란색으로 각각 음영이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3, :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**구문:** obj << Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**설명:** 공정 능력 지수 그림에 점을 표시하거나 숨깁니다. 점은 전체 표준편차 추정값을 사용하여 계산됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3, :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ), Show Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**구문:** obj << Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**설명:** 공정 능력 지수 그림에 점을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3, :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**구문:** obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**설명:** 공정 능력 지수 그림에 점을 표시하거나 숨깁니다. 점은 군내 표준편차 추정값 또는 군간-군내 표준편차 추정값(지정된 경우)을 사용하여 계산됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between, :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### 항목 메시지

#### Capability Boundary

**구문:** obj << Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); 

scrobj << Capability Boundary( number=1.0 )

**설명:** 공정 성능 그림에서 공정의 능력이 충분한지, 충분하지 않은지에 대한 경계를 제어하는 전체 공정 능력 Ppk 값을 설정합니다. 이 값은 전체 Ppk 편집 상자에도 나타납니다. 기본값은 "1.0"입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Boundary( 1 );

```

#### Label Points

**구문:** obj << Process Performance Plot( 1, Label Points( state=0|1 ) ); 

scrobj << Label Points( state=0|1 )

**설명:** 공정 성능 그림의 점에 공정 이름 라벨을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Label Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**구문:** obj << Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); 

scrobj << Show Within Cpk Curve( state=0|1 )

**설명:** 공정 성능 그림에서 군내 Cpk 곡선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**구문:** obj << Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); 

scrobj << Stability Boundary( number=1.25 )

**설명:** 공정 성능 그림에서 공정이 안정적인지, 안정적이지 않은지에 대한 경계를 제어하는 전체 공정 능력 Ppk 값을 설정합니다. 기본값은 "1.25"입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer],
		:PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Stability Boundary( 1.25 );

```

