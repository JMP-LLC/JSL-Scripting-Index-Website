# Explore Missing Values



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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
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

**구문:** obj = Explore Missing Values(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Explore Missing Values

**구문:** Explore Missing Values( Y( columns ) )

**설명:** 결측값의 패턴을 찾고 대치를 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## 열

### By

**구문:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), By( _bycol ) );

```

### Columns

**구문:** obj << Columns( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Validation

**구문:** obj << Validation( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

### Y

**구문:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );

```

## 항목 메시지

### ADI Loading Matrix

**구문:** obj << ADI Loading Matrix( state=0|1 )

**설명:** 각 성분에 대한 요인 적재에 해당하는 열을 보여 주는 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);
obj << ADI Loading Matrix( 1 );

```

### Automated Data Imputation

**구문:** obj << Automated Data Imputation

**설명:** 낮은 계수 행렬 근사 방법을 사용하여 결측값을 대치합니다. 이 방법은 데이터를 기반으로 낮은 계수 근사에 대한 최선의 차원을 자동으로 선택합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Automated Data Imputation;

```

### Close

**구문:** obj << Close

**설명:** "결측 열" 보고서를 닫습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ), Missing Value Report );
Wait( 2 );
obj << Close;

```

### Color Cells

**구문:** obj << Color Cells( ALL or column1, column2, ... )

**설명:** 데이터 테이블에서 "결측 열" 보고서에서 선택한 열의 결측값이 포함된 셀에 색상을 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Color cells( :OZONE );

```

### Color Rows

**구문:** obj << Color Rows( ALL or column1, column2, ... )

**설명:** 데이터 테이블에서 "결측 열" 보고서에서 선택한 열의 결측값이 포함된 행에 색상을 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Color rows( :OZONE );

```

### Exclude Rows

**구문:** obj << Exclude Rows( ALL or column1, column2, ... )

**설명:** 데이터 테이블에서 "결측 열" 보고서에서 선택한 열의 결측값이 포함된 행에 "제외됨" 행 상태를 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Exclude rows( :OZONE );

```

### Get U V Sigma ADI Matrices

**구문:** obj << Get U V Sigma ADI Matrices

**설명:** ADI 방법의 낮은 계수 근사에서 U, V 및 시그마 행렬을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);
obj << Get U V Sigma ADI Matrices;

```

### Maximum Dimension

**구문:** obj << Maximum Dimension( number )

**설명:** 자동 데이터 결측값 대치에 대한 최대 차원을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Maximum Dimension( 3 ),
	Automated Data Imputation
);

```

### Maximum Iteration

**구문:** obj << Maximum Iteration( number=10 )

**설명:** 자동 데이터 결측값 대치에 대한 최대 반복 수를 설정합니다. 기본값은 "10"입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Maximum Iteration( 8 ),
	Automated Data Imputation
);

```

### Missing Value Clustering

**구문:** obj << Missing Value Clustering

**설명:** 결측 데이터의 계층적 군집화 분석을 제공합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Clustering;

```

### Missing Value Report

**구문:** obj << Missing Value Report

**설명:** 각 열의 이름과 해당 열의 결측값 수를 나열하는 "결측 열" 보고서를 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Report;

```

### Missing Value Snapshot

**구문:** obj << Missing Value Snapshot

**설명:** 결측값에 대한 셀 그림을 표시합니다. 검은색 셀은 결측값을 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Missing Value Snapshot;

```

### Multivariate Normal Imputation

**구문:** obj << Multivariate Normal Imputation( Shrink Covariances( state=0|1 ) )

**설명:** 다변량 정규 분포를 기반으로 결측값을 대치합니다. 공분산 행렬의 추정을 개선하려면 축소 추정량 옵션을 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate Normal Imputation( Shrink Covariances( 1 ) );

```

### Multivariate RPCA Imputation

**구문:** obj << Multivariate RPCA Imputation( Lambda( number ), Tolerance( number = 1e-7 ), MaxIt( number ) )

**설명:** 로버스트 주성분을 사용하여 결측값을 대치합니다. 즉, 이상치에 로버스트한 낮은 계수 행렬 분해(SVD)를 사용하여 결측값을 대체합니다. 이 방법은 변수의 수가 많은 와이드 문제에 유용합니다. 람다의 기본값은 2/sqrt(max(n, p))이며, 여기서 n은 행 수이고 p는 열 수입니다. min(n, p) < 100인 경우 최대 반복 수(MaxIt)의 기본값은 75입니다. 100<= min(n, p) < 1000인 경우 MaxIt 기본값은 100입니다. min(n,p) >= 1000인 경우에는 MaxIt 기본값이 200입니다. 지정된 최대 반복 수가 지나도 알고리즘이 수렴되지 않으면 MaxIt의 해가 채택되어 보고서에 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate RPCA Imputation;

```

### Multivariate SVD Imputation

**구문:** obj << Multivariate SVD Imputation( Number of Singular Vectors( number ), Maximum Iterations( number ), Show Iteration Log( state=0|1 ) )

**설명:** 반복된 낮은 계수 SVD 행렬 완성 방법을 사용하여 큰 문제에 대해 빠르게 결측값을 대치합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Multivariate SVD Imputation(
	Number of Singular Vectors( 3 ),
	Maximum Iterations( 10 ),
	Show Iteration Log( 1 ),

);

```

### Options for Saving Imputed Values

**구문:** obj << Options for Saving Imputed Values(1|2|3)

**설명:** ADI 방법의 대치된 값을 저장하는 방법을 지정합니다. "새 데이터 테이블 생성" 옵션을 지정하려면 1, "스코어링 계산식을 현재 데이터 테이블에 저장" 옵션을 지정하려면 2, "현재 위치에서 결측값 대치" 옵션을 지정하려면 3을 각각 입력합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Options for Saving Imputed Values( 1 ),
	Set Random Seed( 123 ),
	Automated Data Imputation
);

```

### Select Rows

**구문:** obj << Select Rows( ALL or column1, column2, ... )

**설명:** 데이터 테이블에서 "결측 열" 보고서에서 선택한 열의 결측값이 포함된 행을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Select rows( :OZONE );

```

### Set Random Seed

**구문:** obj << Set Random Seed( number=0 )

**설명:** 자동 데이터 결측값 대치에 대한 난수 시드값을 설정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Set Random Seed( 1234 ),
	Automated Data Imputation
);

```

### Show only columns with missing

**구문:** obj << Show only columns with missing( state=0|1 )

**설명:** 결측값이 없는 열을 목록에서 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :POP, :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Show Only Columns With Missing( 1 );

```

### Undo Imputation

**구문:** obj << Undo Imputation

**설명:** 가장 최근에 대치된 데이터를 결측값으로 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Multivariate Normal Imputation );
Wait( 2 );
obj << Undo Imputation;

```

### Validation Proportion

**구문:** obj << Validation Proportion( number=0.3 )

**설명:** 자동 데이터 결측값 대치를 위한 검증 행으로 사용할 행 비율을 설정합니다. 기본값은 "0.3"입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Cities.jmp" );
obj = dt << Explore Missing Values(
	Y( :OZONE, :CO, :SO2, :NO, :PM10 ),
	Validation Proportion( 0.25 ),
	Automated Data Imputation
);

```

