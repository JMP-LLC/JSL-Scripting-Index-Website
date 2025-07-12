# Functional Data Explorer



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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

**구문:** obj = Functional Data Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Functional Data Explorer

**구문:** Functional Data Explorer( Y(column), X(column), ID(column) )

**설명:** B-스플라인, P-스플라인, Fourier 또는 소파동 기저 모형을 사용하여 함수 모형을 적합시킵니다. 함수 모형에 대해 함수 주성분 분석을 수행하여 데이터에서 중요한 특징을 추출할 수 있습니다. 기저 함수 모형을 먼저 적합시키지 않고 데이터에 대해 함수 주성분 분석을 직접 수행할 수도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

## 열

### By

**구문:** obj = Functional Data Explorer(...<By( column(s) )>...)

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), By( _bycol ) );

```

### Freq

**구문:** obj = Functional Data Explorer(...<Freq( column )>...)

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Freq( _freqcol ) );

```

### Function

**구문:** obj = Functional Data Explorer(...<Function( column )>...)

**설명:** 각 개별 함수를 식별하는 ID 변수를 지정합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### ID

**구문:** obj = Functional Data Explorer(...<ID( column )>...)

**설명:** 각 개별 함수를 식별하는 ID 변수를 지정합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Input

**구문:** obj = Functional Data Explorer(...<Input( column )>...)

**설명:** 입력 변수를 지정합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Output

**구문:** obj = Functional Data Explorer(...Output( column(s) )...)

**설명:** 함수 공정 변수를 지정합니다. ID 변수의 각 수준에 대해 두 개 이상의 관측된 출력 값이 있어야 합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Supplementary

**구문:** obj = Functional Data Explorer(...<Supplementary( column(s) )>...)

**설명:** 하나 이상의 보조 변수를 지정합니다. 보조 변수는 플랫폼에서 계산에 사용되지 않으며 변수를 포함해도 결과에 영향을 주지 않습니다. 이러한 변수는 데이터 해석을 개선하거나 향후 분석에 사용될 수 있습니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Validation

**구문:** obj = Functional Data Explorer(...<Validation( column )>...)

**설명:** 검증 데이터 집합을 정의하는 숫자 열을 지정합니다. 이 열에는 최대 세 개의 구분되는 값이 포함되어야 합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Validation( :Validation ),
	B Splines
);

```

### X

**구문:** obj = Functional Data Explorer(...<X( column )>...)

**설명:** 입력 변수를 지정합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Y

**구문:** obj = Functional Data Explorer(...Y( column(s) )...)

**설명:** 함수 공정 변수를 지정합니다. ID 변수의 각 수준에 대해 두 개 이상의 관측된 출력 값이 있어야 합니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Z

**구문:** obj = Functional Data Explorer(...<Z( column(s) )>...)

**설명:** 하나 이상의 보조 변수를 지정합니다. 보조 변수는 플랫폼에서 계산에 사용되지 않으며 변수를 포함해도 결과에 영향을 주지 않습니다. 이러한 변수는 데이터 해석을 개선하거나 향후 분석에 사용될 수 있습니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

## 항목 메시지

### B Splines

**구문:** obj << B Splines

**설명:** B-스플라인 모형을 데이터에 적합시킵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines );

```

### B Splines Model Controls

**구문:** obj << B Splines Model Controls

**설명:** B-스플라인 모형을 적합시키기 전에 모형 제어 패널을 엽니다. 매듭 수와 스플라인 차수를 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines Model Controls );

```

### Baseline Correction

**구문:** obj << Baseline Correction

**설명:** Subtracts a baseline function from each individual function. You can perform automated baseline correction using either the statistics-sensitive nonlinear iterative peak-clipping (SNIP) or the alternating reweighted least squares solution technique. There is also an option to load a known baseline function from a data table.

**JMP추가된 버전:** 19

### Data Processing

**구문:** obj << Data Processing( <options> )

**설명:** 데이터에 대한 전처리 단계를 수행할 수 있는 데이터 처리 옵션을 지정합니다. 이 옵션에는 정리, 변환, 맞춤, 스펙트럼 및 대상 함수 작업이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer( Y( :pH ), X( :Time ), ID( :BatchID ), Data Processing( Square Root ) );

```

### Direct Functional PCA

**구문:** obj << Direct Functional PCA

**설명:** 기저 함수 모형을 적합시키지 않고 함수 PCA를 직접 수행합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Fourier Basis

**구문:** obj << Fourier Basis

**설명:** 벌점 B-스플라인 모형을 데이터에 적합시킵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Fourier Basis );

```

### Fourier Basis Model Controls

**구문:** obj << Fourier Basis Model Controls

**설명:** Fourier 기저 모형을 적합시키기 전에 모형 제어 패널을 엽니다. Fourier 쌍 개수와 주기를 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis Model Controls
);

```

### Multivariate Curve Resolution

**구문:** obj << Multivariate Curve Resolution

**설명:** MCR(다변량 곡선 해상도)을 수행합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Nonnegative SVD

**구문:** obj << Nonnegative SVD

**설명:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

**JMP추가된 버전:** 18

### P Splines

**구문:** obj << P Splines

**설명:** 벌점 B-스플라인 모형을 데이터에 적합시킵니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), P Splines );

```

### P Splines Model Controls

**구문:** obj << P Splines Model Controls

**설명:** P-스플라인 모형을 적합시키기 전에 모형 제어 패널을 엽니다. 매듭 수와 스플라인 차수를 지정할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), P Splines Model Controls );

```

### Peak Finding

**구문:** obj << Peak Finding

**설명:** 직접 또는 지정된 모수 모형을 사용하여 정상점을 찾고 요약합니다.

**JMP추가된 버전:** 17

### Penalized Nonnegative SVD

**구문:** obj << Penalized Nonnegative SVD

**설명:** 벌점 비음 SVD를 수행하여 함수 PCA를 생성합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Penalized SVD

**구문:** obj << Penalized SVD

**설명:** 벌점 SVD를 수행하여 함수 PCA를 생성합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Plot Mean Function

**구문:** obj << Plot Mean Function( state=0|1 )

**설명:** 요약 보고서에 평균 함수 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Mean Function( 0 );

```

### Plot Median Function

**구문:** obj << Plot Median Function( state=0|1 )

**설명:** 요약 보고서에 중앙값 함수 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Temperature ),
	X( :Month ),
	ID( :Year ),
	Plot Median Function( 1 )
);

```

### Plot Standard Deviation Function

**구문:** obj << Plot Standard Deviation Function( state=0|1 )

**설명:** 요약 보고서에 표준편차 함수 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Standard Deviation Function( 0 );

```

### Save Data

**구문:** obj << Save Data

**설명:** 처리된 데이터를 쌓인 형식의 별도 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer( Data Format( Row ), Y( dt << Get Column Group( "Ethanol" ) ) );
obj << Save Data;

```

### Unconstrained MCR

**구문:** obj << Unconstrained MCR

**설명:** 무제약 MCR(다변량 곡선 해상도)을 수행합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 18

### Wavelets

**구문:** obj << Wavelets

**설명:** 여러 소파동 모형을 데이터에 적합시킵니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다. 데이터 간격이 균등하지 않으면 소파동 루틴이 시작되기 전에 자동으로 격자가 생성됩니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

```

## Functional Data Explorer Data Processing

### 항목 메시지

#### Align 0 to 1

**구문:** obj << Data Processing( Align 0 to 1 )

**설명:** 0 ~ 1 내에 놓이도록 입력(X) 범위에 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align 0 to 1 )
);

```

#### Align Maximum

**구문:** obj << Data Processing( Align Maximum )

**설명:** 관측된 최대 입력 값(X)을 사용하여 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Maximum )
);

```

#### Align Minimum

**구문:** obj << Data Processing( Align Minimum )

**설명:** 관측된 최소 입력 값(X)을 사용하여 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Minimum )
);

```

#### Align by Function

**구문:** obj << Data Processing( Align by Function )

**설명:** 각 함수의 범위가 입력(X) 범위 위에 오도록 출력 함수(Y)를 정렬합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align by Function )
);

```

#### Baseline Correction

**구문:** obj << Data Processing( Baseline Correction( Model( Linear|Quadratic|Cubic|Fit Exponential 2P|Fit Exponential 3P ), Correction Region( ), Baseline Regions( vector ), Anchor Points( vector ) ) )

**설명:** 각 함수에서 기준 모형을 적합시키고 제거합니다. 기준 모형, 수정 영역, 기준 영역 및 앵커 지점을 지정할 수 있습니다.

**JMP추가된 버전:** 17

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction( Model( Quadratic ) ) )
);

```

#### Center

**구문:** obj << Data Processing( Center )

**설명:** 결과를 가운데에 맞춥니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center )
);

```

#### Dynamic Time Warping

**구문:** obj << Data Processing( Dynamic Time Warping( Reference( number ) ) )

**설명:** DTW(동적 시간 뒤틀림)를 사용하여 출력 함수를 정렬합니다. DTW는 둘 이상의 함수를 서로 맞추기 위해 최적의 뒤틀림을 찾는 함수 맞춤 기법입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) )
);

```

#### Exp

**구문:** obj << Data Processing( Exp )

**설명:** 결과의 지수 함수를 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer( Y( :pH ), X( :Time ), ID( :BatchID ), Data Processing( Exp ) );

```

#### Filter X

**구문:** obj << Data Processing( Filter X( [lower, upper] ) )

**설명:** 지정된 구간을 벗어나는 입력(X) 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter X( [5, 50] ) );

```

#### Filter Y

**구문:** obj << Data Processing( Filter Y( [lower, upper] ) )

**설명:** 지정된 구간을 벗어나는 출력(Y) 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter Y( [., 100] ) );

```

#### Load Targets

**구문:** obj << Data Processing( Load Targets( "level" ) )

**설명:** 대상 함수를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :ID ),
	Data Processing( Load Targets( "Bristol, TN" ) )
);

```

#### Log

**구문:** obj << Data Processing( Log )

**설명:** 결과의 자연 로그를 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer( Y( :Air ), X( :Time ), ID( :BatchID ), Data Processing( Log ) );

```

#### Log X

**구문:** obj << Data Processing( Log X )

**설명:** 입력의 자연 로그를 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer( Y( :Air ), X( :Time ), ID( :BatchID ), Data Processing( Log X ) );

```

#### Logit

**구문:** obj << Data Processing( Logit )

**설명:** 결과의 로짓 함수를 계산하여 데이터를 변환합니다. 출력 값은 0에서 1 사이여야 합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 ),
	Data Processing( Logit )
);

```

#### MSC

**구문:** obj << Data Processing( MSC )

**설명:** 승법 산포 수정 방법을 데이터에 적용합니다. 이 방법은 각 개별 함수(ID 변수의 수준)에 대해 단순 선형 회귀를 적합시킵니다. 여기서 반응은 함수의 출력 값이고 회귀변수는 평균 함수의 출력 값입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( MSC )
);

```

#### Negation

**구문:** obj << Data Processing( Negation )

**설명:** 결과에 음수를 취해 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Negation )
);

```

#### Range 0 to 1

**구문:** obj << Data Processing( Range 0 to 1 )

**설명:** 0 ~ 1 범위 내에 들어가도록 결과를 척도화합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 )
);

```

#### Reduce

**구문:** obj << Data Processing( Reduce( Grid( number ) ) ); 

obj << Data Processing( Reduce( Bin( number ) ) ); 

obj << Data Processing( Reduce( Thin( number ) ) )

**설명:** 다양한 기법 중 하나를 사용하여 입력(X)에 대한 데이터를 줄입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Reduce( Thin( 2 ) ) );

```

#### Remove Selected

**구문:** obj << Data Processing( Remove Selected )

**설명:** 선택한 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION == "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Selected );

```

#### Remove Unselected

**구문:** obj << Data Processing( Remove Unselected )

**설명:** 선택 취소한 값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION != "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Unselected );

```

#### Remove Value

**구문:** obj << Data Processing( Remove Value( number ) )

**설명:** 지정된 반응 값을 가진 관측값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
Wait( 1 );
obj << Data Processing( Remove Value( 30 ) );

```

#### Remove Zeros

**구문:** obj << Data Processing( Remove Zeros )

**설명:** 반응 값이 0인 관측값을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Remove Zeros )
);

```

#### Row Alignment

**구문:** obj << Data Processing( Row Alignment )

**설명:** 입력 값을 행 번호로 바꿉니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Row Alignment )
);

```

#### SNV

**구문:** obj << Data Processing( SNV )

**설명:** 표준 정규 변량 방법을 데이터에 적용합니다. 이 방법은 평균 0, 표준편차 1이 되도록 각 개별 함수(ID 변수의 수준)를 중심에 맞추고 척도를 조정하여 출력을 표준화합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( SNV )
);

```

#### Savitzky-Golay Filter

**구문:** obj << Data Processing( "Savitzky-Golay Filter"n )

**설명:** Savitzky-Golay 필터를 각 함수에 적용합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Filter"n )
);

```

#### Savitzky-Golay First Derivative

**구문:** obj << Data Processing( "Savitzky-Golay First Derivative"n )

**설명:** Savitzky-Golay 필터에서 1차 도함수를 반환합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay First Derivative"n )
);

```

#### Savitzky-Golay Second Derivative

**구문:** obj << Data Processing( "Savitzky-Golay Second Derivative"n )

**설명:** Savitzky-Golay 필터에서 2차 도함수를 반환합니다. 이 옵션을 사용하려면 입력 데이터가 균등한 간격의 격자에 있어야 합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Second Derivative"n )
);

```

#### Square

**구문:** obj << Data Processing( Square )

**설명:** 결과의 제곱을 계산하여 데이터를 변환합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer( Y( :pH ), X( :Time ), ID( :BatchID ), Data Processing( Square ) );

```

#### Square Root

**구문:** obj << Data Processing( Square Root )

**설명:** 결과의 제곱근을 계산하여 데이터를 변환합니다. 출력 값은 음수가 아니어야 합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer( Y( :pH ), X( :Time ), ID( :BatchID ), Data Processing( Square Root ) );

```

#### Standardize

**구문:** obj << Data Processing( Standardize )

**설명:** 중심화 및 척도화를 통해 출력을 표준화합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Standardize )
);

```

## Functional Data Explorer FDOE

### 항목 메시지

#### Diagnostic Plots

**구문:** obj<< Model Name( Functional DOE Analysis( Diagnostic Plots( state=0|1 ) ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**설명:** 함수 DOE 분석 보고서에 실제값 대 예측값 그림과 잔차 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis, Diagnostic Plots( 0 ) )
);
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**구문:** obj << Model Name( Functional DOE Analysis( FDOE Profiler( state=0|1 ) ) ); 

scrobj << FDOE Profiler( state=0|1 )

**설명:** 보조 변수 값에 따라 반응이 어떻게 변하는지 탐색할 수 있는 FDOE 프로파일러를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( FDOE Profiler( 0 ) ) )
);
Report( obj )["Functional PCA"] << Close( 1 );
Report( obj )["Model Selection"] << Close( 1 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression FPC Model

**구문:** obj << Model Name( Functional DOE Analysis( Generalized Regression FPC Model( FPC Number( number ), commands )))

**설명:** &apos;함수 DOE 분석&apos; 옵션을 사용하여 생성되는 일반화 회귀 모형의 설정을 지정합니다. 기본 설정과 다른 설정을 지정하려면 이 명령을 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines(
		Functional DOE Analysis(
			Generalized Regression FPC Model(
				FPC Number( 1 ),
				Estimation Method( "Best Subset" ),
				Validation Method( "BIC" )
			),
			Generalized Regression FPC Model(
				FPC Number( 2 ),
				Estimation Method( "Elastic Net" ),
				Validation Method( "AICc" )
			)
		),
		Customize Function Summaries( Number of FPCs( 2 ) )
	)
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );

```

#### Generalized Regression for FPC Scores

**구문:** obj << Model Name( Functional DOE Analysis( Generalized Regression for FPC Scores( state=0|1 ) ) ); 

scrobj << Generalized Regression for FPC Scores( state=0|1 )

**설명:** 각 FPC 스코어에 대한 일반화 회귀 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Generalized Regression for FPC Scores( 0 );

```

#### Save Prediction Formula

**구문:** obj << Model Name( Functional DOE Analysis( Save Prediction Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); 

scrobj << Save Prediction Formula

**설명:** 예측 계산식을 현재 데이터 테이블의 새 열에 저장합니다. 원래 데이터 형식이 &apos;함수 행&apos; 또는 &apos;함수 열&apos;인 경우 이 옵션은 쌓인 형식의 원래 데이터와 예측 계산식 열을 포함하는 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**구문:** obj << Model Name( Functional DOE Analysis( Save Residual Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); 

scrobj << Save Residual Formula

**설명:** 잔차 계산식을 현재 데이터 테이블의 새 열에 저장합니다. 원래 데이터 형식이 &apos;함수 행&apos; 또는 &apos;함수 열&apos;인 경우 이 옵션은 쌓인 형식의 원래 데이터와 잔차 계산식 열을 포함하는 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

## Functional Data Explorer FPCA

### 항목 메시지

#### Customize Number of FPCs

**구문:** obj << Model Name( Functional PCA( 1, Customize Number of FPCs( number ) ) ); 

scrobj << Customize Number of FPCs( number )

**설명:** 함수 PCA에 표시할 FPC 스코어 수를 지정합니다. FPC 스코어 수를 지정하면 함수 요약 보고서도 업데이트됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Customize Number of FPCs( 3 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox, {Close( 1 )} )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Customize Number of FPCs( 2 );

```

#### Diagnostic Plots

**구문:** obj << Model Name( Functional PCA( 1, Diagnostic Plots( state=0|1 ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**설명:** 함수 PCA 보고서에 FPCA 진단 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Diagnostic Plots( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox, {Close( 1 )} )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FPCA Diagnostic Plots"] << Close( 0 );

```

#### FPC Profiler

**구문:** obj << Model Name( Functional PCA( 1, FPC Profiler( state=0|1 ) ) ); 

scrobj << FPC Profiler( state=0|1 )

**설명:** FPC 스코어 프로파일러를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, FPC Profiler( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox, {Close( 1 )} )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << FPC Profiler( 1 );

```

#### Score Plot

**구문:** obj << Model Name( Functional PCA( 1, Score Plot( state=0|1 ) ) ); 

scrobj << Score Plot( state=0|1 )

**설명:** FPC 스코어 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Score Plot( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox, {Close( 1 )} )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Score Plot( 1 );

```

## Functional Data Explorer Model

### 항목 메시지

#### AICc

**구문:** obj << Model Name( AICc ); 

scrobj << AICc

**설명:** AICc를 B-스플라인, P-스플라인, Fourier 기저 모형에 대한 모형 선택 기준으로 지정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), B Splines( AICc ) );

```

#### BIC

**구문:** obj << Model Name( BIC ); 

scrobj << BIC

**설명:** BIC를 B-스플라인, P-스플라인, Fourier 기저 모형에 대한 모형 선택 기준으로 지정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), P Splines( BIC ) );

```

#### Basis Function Coefficients

**구문:** obj << Model Name( Basis Function Coefficients( state=0|1 ) ); 

scrobj << Basis Function Coefficients( state=0|1 )

**설명:** 해당 모형 적합에 대한 기저 함수 계수 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Basis Function Coefficients( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Basis Function Coefficients( 1 );
Report( obj )["Basis Function Coefficients"] << Close( 0 );

```

#### Diagnostic Plots

**구문:** obj << Model Name( Diagnostic Plots( state=0|1 ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**설명:** 진단 그림 보고서를 표시하거나 숨깁니다. 소파동 또는 직접 함수 PCA 모형에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	B Splines( Diagnostic Plots( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["B-Spline on Initial data"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["B-Spline Diagnostic Plots"] << Close( 0 );

```

#### Function Summaries

**구문:** obj << Model Name( Function Summaries( state=0|1 ) ); 

scrobj << Function Summaries( state=0|1 )

**설명:** 함수 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Function Summaries( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Function Summaries( 1 );
Report( obj )["Function Summaries"] << Close( 0 );

```

#### Functional DOE Analysis

**구문:** obj << Model Name( Functional DOE Analysis( ... ) ); 

scrobj << Functional DOE Analysis( ... )

**설명:** FDE 플랫폼 내에서 일반화 회귀 보고서를 시작합니다. 보조 변수를 모형 효과로 사용하여 일반화 회귀 모형이 각 FPC 스코어 함수에 적합됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines( Functional DOE Analysis )
);

```

#### Functional PCA

**구문:** obj << Model Name( Functional PCA( state= 0|1 ) ); 

scrobj << Functional PCA( state=0|1 )

**설명:** 함수 PCA 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Fourier Basis( Functional PCA( 0 ) );
obj << Send to Report(
	Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox, {Close( 1 )} )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Functional PCA( 1 );

```

#### GCV

**구문:** obj << Model Name( GCV ); 

scrobj << GCV

**설명:** GCV(일반화 교차 검증)를 B-스플라인, P-스플라인, Fourier 기저 모형에 대한 모형 선택 기준으로 지정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Fourier Basis( GCV ) );

```

#### Plot Basis

**구문:** obj << Model Name( Plot Basis( state=0|1 ) ); 

scrobj << Plot Basis( state=0|1 )

**설명:** 모든 기저 함수 그림을 하나의 그래프에 표시하거나 숨깁니다. 소파동 또는 직접 함수 PCA 모형에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Plot Basis( 1 ) )
);

```

#### Random Coefficients

**구문:** obj << Model Name( Random Coefficients( state=0|1 ) ); 

scrobj << Random Coefficients( state=0|1 )

**설명:** 함수별 랜덤 계수 보고서를 표시하거나 숨깁니다. 이 보고서에는 각 기저 함수 및 함수 공정 조합에 대해 추정된 랜덤 계수 테이블이 포함됩니다. 소파동 또는 직접 함수 PCA 모형에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Random Coefficients( 1 ) )
);
Report( obj )["Random Coefficients by Function"] << Close( 0 );

```

#### Remove Fit

**구문:** obj << (Model["B Splines" | "P Splines" | "Fourier Basis" | "Wavelets" | "Direct Functional PCA"] << Remove Fit)

**설명:** 지정된 적합을 보고서에서 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Fourier Basis, B Splines );
Wait( 2 );
obj << (Model["Fourier Basis"] << Remove Fit);

```

#### Save Data

**구문:** obj << Model Name( Save Data ); 

scrobj << Save Data

**설명:** 처리된 데이터를 새 데이터 테이블에 저장합니다. 처리된 데이터는 쌓인 데이터 형식으로 저장됩니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) ),
	B Splines( Save Data )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets
);
scrobj = (Report( obj )["Wavelets on Initial data"] << get scriptable object);
scrobj << Save Data;

```

#### Save Script Options

**구문:** obj << Save Script Options( "Save Script Saves Steps"|"Save Script Saves State"="Save Script Saves Steps" )

**설명:** Specifies the type of script that is saved for reproducing the peak finding results. 기본값은 "Save Script Saves Steps"입니다.

#### Wavelets DOE Analysis

**구문:** obj << Wavelets( Wavelets DOE Analysis( state=0|1 ) ); 

scrobj << Wavelets DOE Analysis( state=0|1 )

**설명:** FDE 플랫폼 내에서 일반화 회귀 보고서를 시작합니다. 보조 변수를 모형 효과로 사용하여 일반화 회귀 모형이 소파동 계수에 적합됩니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1 ) )
);

```

## Functional Data Explorer Peak Summaries

### 항목 메시지

#### Customize Peak Summaries

**구문:** obj << Peak Finding( Customize Peak Summaries(stat1(0|1), ..., statN(0|1)) )

**설명:** 함수 요약 보고서에 표시된 요약 통계량을 사용자 정의합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Customize Peak Summaries() )
);

```

#### Save Summaries

**구문:** obj << Peak Finding( Save Summaries )

**설명:** 함수 주성분 스코어를 포함하여 각 함수에 대한 모형 요약 통계량을 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Save Summaries )
);

```

## Functional Data Explorer Summaries

### 항목 메시지

#### Control Chart Builder

**구문:** obj << B Splines( Control Chart Builder )

obj << P Splines( Control Chart Builder )

obj << Fourier Basis( Control Chart Builder )

**설명:** 관리도 빌더를 사용하여 함수 주성분을 분석합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Control Chart Builder )
);

```

#### Customize Function Summaries

**구문:** obj << B Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

obj << P Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

obj << Fourier Basis( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

**설명:** 함수 요약 보고서에 표시된 요약 통계량을 사용자 정의합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines(
		Customize Function Summaries(
			Number of FPCs( 2 ),
			Mean( 0 ),
			Std Dev( 1 ),
			Integrated Difference( 0 ),
			Median( 1 ),
			Minimum( 1 ),
			Maximum( 1 )
		)
	)
);

```

#### Save Summaries

**구문:** obj << B Splines( Save Summaries )

obj << P Splines( Save Summaries )

obj << Fourier Basis( Save Summaries )

**설명:** 함수 주성분 스코어를 포함하여 각 함수에 대한 모형 요약 통계량을 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Save Summaries )
);

```

## Functional Data Explorer WDOE

### 항목 메시지

#### Diagnostic Plots

**구문:** obj << Wavelets( Wavelets DOE Analysis( 1, Diagnostic Plots( state=0|1 ) ) ); 

scrobj << Diagnostic Plots( state=0|1 )

**설명:** 소파동 DOE 분석에 실제값 대 예측값 그림과 잔차 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, Diagnostic Plots( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**구문:** obj << Wavelets( Wavelets DOE Analysis( 1, FDOE Profiler( state=0|1 ) ) ); 

scrobj << FDOE Profiler( state=0|1 )

**설명:** 보조 변수 값에 따라 반응이 어떻게 변하는지 탐색할 수 있는 FDOE 프로파일러를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, FDOE Profiler( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression for Wavelets Coefficients

**구문:** obj << Wavelets( Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( state=0|1 ) ) ); 

scrobj << Generalized Regression for Wavelets Coefficients( state=0|1 )

**설명:** 각 소파동 계수에 대한 일반화 회귀 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets(
		Functional PCA( 0 ),
		Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( 0 ) )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Wavelets Coefficients( 1 );
Report( obj )["Generalized Regression for Wavelets Coefficients"] << Close( 0 );

```

#### Save Prediction Formula

**구문:** obj << Model Name( Functional DOE Analysis( Save Prediction Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); 

scrobj << Save Prediction Formula

**설명:** 예측 계산식을 현재 데이터 테이블의 새 열에 저장합니다. 원래 데이터 형식이 &apos;함수 행&apos; 또는 &apos;함수 열&apos;인 경우 이 옵션은 쌓인 형식의 원래 데이터와 예측 계산식 열을 포함하는 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**구문:** obj << Model Name( Functional DOE Analysis( Save Residual Formula ) ); 

obj << Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); 

scrobj << Save Residual Formula

**설명:** 잔차 계산식을 현재 데이터 테이블의 새 열에 저장합니다. 원래 데이터 형식이 &apos;함수 행&apos; 또는 &apos;함수 열&apos;인 경우 이 옵션은 쌓인 형식의 원래 데이터와 잔차 계산식 열을 포함하는 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 16

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

