# Text Explorer



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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
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

**구문:** obj = Text Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Text Explorer

**구문:** Text Explorer( Text Columns( columns ) )

**설명:** 열의 텍스트에서 단어를 파싱하여 해당 개수를 세고, 다른 열과의 연관성을 확인하고, 표시자를 저장하고, 관계를 그래프로 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

## 열

### By

**구문:** obj << By( column(s) )

**설명:** 변수의 각 수준에 대해 하나씩 여러 보고서를 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), By( _bycol ) );

```

### ID

**구문:** obj << ID( column )

**설명:** 잠재 계층 분석 보고서 및 연관성을 위해 쌓인 형식의 DTM 저장 출력 데이터 테이블에서 개별 응답자를 식별하는 데 사용되는 열입니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), ID( :School Age Children ) );
obj << Save Stacked DTM For Association;

```

### Text Columns

**구문:** obj << Text Columns( column(s) )

**설명:** 처리할 문서를 포함하는 텍스트 열입니다. 각 행 값이 하나의 문서로 간주됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Validation

**구문:** obj << Validation( column )

**설명:** 두 개 또는 세 개의 구분되는 값을 포함하는 숫자 열입니다. 값이 두 개인 경우 더 작은 값이 훈련 데이터 집합을 정의하고 더 큰 값이 검증 데이터 집합을 정의합니다. 값이 세 개인 경우 작은 값부터 순서대로 훈련 데이터 집합, 검증 데이터 집합, 테스트 데이터 집합을 각각 정의합니다. 값이 네 개 이상인 경우에는 가장 작은 세 개를 제외한 모든 값이 무시됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Validation( :School Age Children ) );
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

## 항목 메시지

### Add Delimiters

**구문:** obj << Add Delimiters( "string" )

**설명:** 단일 문자열의 사용자 제공 구분자 문자를 단어 분할을 위한 기본 구분자 문자 목록에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
Wait( 1 );
obj << Add Delimiters( "{}" );

```

### Add Phrase Exceptions

**구문:** obj << Add Phrase Exceptions( list )

**설명:** 용어 목록에서 제거할 구 목록을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Phrases( {"twice a day", "every time", "time consuming"} );
Wait( 1 );
obj << Add Phrase Exceptions( {"every time"} );

```

### Add Phrases

**구문:** obj << Add Phrases( list )

**설명:** 단일 용어처럼 분석할 구 목록을 용어 목록에 추가합니다. 이에 따라 용어 수가 업데이트됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Phrases( {"twice a day", "every time"} );

```

### Add Recode Exceptions

**구문:** obj << Add Recode Exceptions( { {pair1}, {pair2}, ...} )

**설명:** 제거할 재코딩된 텍스트 문자열의 목록을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );
Wait( 1 );
obj << Add Recode Exceptions( {"neglagent", "negligent"} );

```

### Add Recodes

**구문:** obj << Add Recodes( { {pair1}, {pair2}, ...} )

**설명:** 재코딩할 단어 쌍 목록을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );
obj << Show Recodes( 1 );

```

### Add Stem Exceptions

**구문:** obj << Add Stem Exceptions( list )

**설명:** 어간 추출에서 제외되는 단어 목록을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stem Overrides

**구문:** obj << Add Stem Overrides( list )

**설명:** 어간 추출이 항상 가능한 단어 목록을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
Wait( 1 );
obj << Add Stem Overrides( {"care"} );
obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stop Word Exceptions

**구문:** obj << Add Stop Word Exceptions( list )

**설명:** 중지 단어로 제거하고 용어 목록에 추가할 단어 목록을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Word Exceptions( {"again", "are"} );

```

### Add Stop Words

**구문:** obj << Add Stop Words( list )

**설명:** 용어 목록에서 제거하고 분석에서 무시할 단어 목록을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Stop Words( 1 );
Wait( 1 );
obj << Add Stop Words( {"use", "feel", "like"} );

```

### Cloud Width

**구문:** obj << Cloud Width( number )

**설명:** 단어 클라우드의 너비를 지정된 픽셀 수로 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Cloud Width( 150 );

```

### Coloring

**구문:** obj << Coloring( "없음"|"균등 색상"|"임의 회색"|"임의 색상"|"열 값별..." )

**설명:** 단어 클라우드에서 용어의 색상을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );

```

### Custom Stemmer

**구문:** obj << Custom Stemmer( Function( {string, dot}, ... ) )

**설명:** 사양에 따라 어간 추출을 수행합니다. &apos;string&apos; 인수(문서의 용어)를 사용하고, 이를 테스트하여 포함된 패턴을 판별하고, 필요한 경우 문자를 &apos;dot&apos; 인수로 대체하는 함수를 지정합니다. 이 함수는 표준 어간 추출 알고리즘을 대체합니다. 변경된 모든 단어의 끝에는 어간 추출 점이 포함되어야 합니다. 플랫폼에 어간 추출이 활성화된 경우 말뭉치에서 찾은 각 고유 용어에 대해 이 함수가 호출됩니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
//This custom stemmer looks only for words ending in 'ing' and replaces the end with the stemming dot.
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Stemming( "Stem All Terms" );
obj << Show Stem Report( 1 );
obj << Custom Stemmer(
	Function( {string, dot},
		If( Ends With( string, "ing" ),
			Substr( string, 1, Length( string ) - 3 ) || dot,
			string
		)
	)
);

```

### Customize Regex

**구문:** obj = Text Explorer(...Customize Regex( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** 정규 표현식 설정을 수정하기 위한 텍스트 탐색기 정규 표현식 편집기를 엽니다. 이 옵션은 정규 표현식 토큰화 방법에서만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Regex" );
obj << Customize Regex();

```

### Discriminant Analysis

**구문:** obj << Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**설명:** 문서 용어 행렬에 대한 선형 판별 분석을 사용하여 각 문서의 분류를 지정된 반응 열의 범주로 예측합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Discriminant Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Column( :Gender )
);

```

### Font

**구문:** obj << Font( font )

**설명:** 단어 클라우드에서 용어의 글꼴, 스타일 및 크기를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Font( "Arial Narrow", 11, "Plain" );

```

### Include Builtin Phrases

**구문:** obj << Include Builtin Phrases( state=0|1 )

**설명:** 기본 제공 구가 토큰화 과정에 사용되는 구에 포함되도록 지정합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Phrases( 0 );

```

### Include Builtin Stop Words

**구문:** obj << Include Builtin Stop Words( state=0|1 )

**설명:** 기본 제공 중지 단어가 토큰화 과정에 사용되는 중지 단어에 포함되도록 지정합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Include Builtin Stop Words( 0 );

```

### Language

**구문:** obj = Text Explorer(...Language( "표시 언어"|"영어"|"독일어"|"스페인어"|"프랑스어"|"이탈리아어"|"일본어"|"중국어(간체)"|"중국어(번체)"|"한국어" )...)

<b>실행기 항목: 예</b>

**설명:** 텍스트 처리에 사용되는 언어를 지정합니다. 이 설정은 어간 추출과 기본 제공되는 중지 단어, 재코딩 및 구에 영향을 줍니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Language( "German" ) );

```

### Latent Class Analysis

**구문:** obj << Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**설명:** 이진 가중 문서 용어 행렬에 대한 잠재 계층 분석을 사용하여 문서를 유사 문서 군집으로 그룹화합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### Latent Semantic Analysis

**구문:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**설명:** 문서 용어 행렬의 희소 특이값 분해를 수행합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Layout

**구문:** obj << Layout( "정렬됨"|"사전순"|"중심화" )

**설명:** 단어 클라우드에서 용어의 배열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Layout( "Alphabetical" );

```

### Maximum Characters per Word

**구문:** obj = Text Explorer(...Maximum Characters per Word( number=50 )...)

<b>실행기 항목: 예</b>

**설명:** 분석에 용어로 포함되기 위해 단어가 포함할 수 있는 최대 문자 수를 number개로 지정합니다. 기본값은 "50"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Maximum Characters per Word( 15 ) );

```

### Maximum Number of Phrases

**구문:** obj = Text Explorer(...Maximum Number of Phrases( number=5000 )...)

<b>실행기 항목: 예</b>

**설명:** 구 목록에 나타나는 최대 구 수(number)를 지정합니다. 기본값은 "5000"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Maximum Number of Phrases( 50 ) );

```

### Maximum Words per Phrase

**구문:** obj = Text Explorer(...Maximum Words per Phrase( number=4 )...)

<b>실행기 항목: 예</b>

**설명:** 분석에서 구로 포함되기 위해 구에 포함할 수 있는 최대 단어 수를 number개로 지정합니다. 기본값은 "4"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Maximum Words per Phrase( 2 ) );

```

### Minimum Characters per Word

**구문:** obj = Text Explorer(...Minimum Characters per Word( number=1 )...)

<b>실행기 항목: 예</b>

**설명:** 분석에 용어로 포함되기 위해 단어가 포함해야 하는 문자를 number개로 지정합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Minimum Characters per Word( 3 ) );

```

### Minimum Frequency for Phrase

**구문:** obj << Minimum Frequency for Phrase( number )

**설명:** 구를 구 목록에 포함하기 위해 필요한 구 발생 횟수(number)를 지정합니다. 기본적으로 최소값은 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Minimum Frequency for Phrase( 5 );

```

### Phrases Alphabetical

**구문:** obj << Phrases Alphabetical( state=0|1 )

**설명:** 구 목록을 사전순으로 정렬합니다. 기본적으로 개수에 따라 내림차순으로 정렬됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Phrases Alphabetical( 1 );

```

### Rotated SVD

**구문:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**설명:** 문서 용어 행렬에 대한 Varimax 회전 특이값 분해를 수행하여 주제라는 용어 그룹을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### SVD

**구문:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**설명:** 문서 용어 행렬의 희소 특이값 분해를 수행합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << SVD(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);

```

### Save DTM Formula

**구문:** obj << Save DTM Formula( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**설명:** Text Score JSL 함수를 사용하여 벡터 값 계산식 열을 데이터 테이블에 저장합니다. 벡터 길이는 사용자가 지정한 최대 용어 수, 최소 용어 빈도 및 가중치 옵션에 따라 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save DTM Formula( Maximum Number of Terms( 10 ), Minimum Term Frequency( 4 ), Weighting( "TF IDF" ) );

```

### Save Document Term Matrix

**구문:** obj << Save Document Term Matrix( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**설명:** 문서 용어 행렬의 각 열을 데이터 테이블에 저장합니다. 열 수는 사용자가 지정한 최대 용어 수, 최소 용어 빈도 및 가중치 옵션에 따라 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Document Term Matrix(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" )
);

```

### Save Stacked DTM for Association

**구문:** obj << Save Stacked DTM for Association

**설명:** 쌓은 형태의 문서 용어 행렬을 새 데이터 테이블에 저장합니다. 텍스트 탐색기 시작 창에서 ID 변수를 지정한 경우 ID 변수는 원래 텍스트 데이터 테이블에서 각 용어를 가져온 행을 식별하는 데 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Stacked DTM For Association;

```

### Save Term Table

**구문:** obj << Save Term Table

**설명:** 용어 목록의 각 용어, 발생 횟수 및 각 용어가 포함된 문서 수가 포함된 JMP 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Save Term Table;

```

### SaveRegexColumn

**구문:** obj << SaveRegexColumn( text )

**설명:** 지정된 사용자 정규 표현식을 데이터 테이블의 새 열에 저장합니다.

```jsl

Names Default To Here( 1 );
 
dt = New Table( "WordTable",
	New Column( "Original Words",
		Character,
		"Nominal",
		Set Values( {"Quick brown", "foxes jumped", "over the", "lazy dog."} )
	)
);
dt << Text Explorer(
	Text Columns( :Original Words ), 
// the regex: [a-z]*? means 0 or more letters, reluctantly. [aeiou] means one vowel.	
	// {2} means repeat twice. 
	// [a-z]* means 0 or more letters, greedily. (the rest of the word)
	Set Regex( Custom( Title( "Two Vowels" ), Regex( "(([a-z]*?[aeiou]){2}[a-z]*)" ), Result( "\[\1]\" ), ) ),
	Include Builtin Stop Words( 0 ), // "over" is a stop word, but we want to see it
	SaveRegexColumn( "Poly Vowel Words" )
);

```

### Score Terms by Column

**구문:** obj << Score Terms by Column( column )

**설명:** 지정된 열의 값에 기반한 스코어를 용어 테이블 저장 옵션을 사용하여 생성된 데이터 테이블에 저장합니다. 각 용어의 스코어는 지정된 열의 평균 값이며, 각 행에서 해당 용어가 나타나는 횟수에 따라 가중치가 부여됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Score Terms By Column( :Salary );

```

### Sentiment Analysis

**구문:** obj << Sentiment Analysis( state=0|1 )

**설명:** 어휘 분석을 사용하여 문서에서 감정 용어를 식별하고 긍정, 부정 및 전반적 감정에 대해 문서를 스코어링합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### Set Delimiters

**구문:** obj << Set Delimiters( "string" )

**설명:** 단어 분할을 위한 기본 구분자 문자 목록을 단일 문자열의 사용자 제공 문자로 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
obj << Show Delimiters( 1 );
obj << Set Delimiters( " " );

```

### Set Regex

**구문:** obj << Set Regex( ... )

**설명:** 정규 표현식 토큰화 방법에 사용되는 기본 정규 표현식을 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Set Regex( Library( "Words" ) );

```

### Show Delimiters

**구문:** obj << Show Delimiters( state=0|1 )

**설명:** 토큰화에 사용되는 구분자를 표시하거나 숨깁니다. 이 옵션은 토큰화 방법이 기본 단어인 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Tokenizing( "Basic Words" );
Wait( 1 );
obj << Show Delimiters( 1 );

```

### Show Filters for all Tables

**구문:** obj << Show Filters for all Tables( state=0|1 )

**설명:** 보고서의 테이블을 검색하는 데 사용할 수 있는 필터를 표시하거나 숨깁니다. 이 옵션은 중지 단어, 지정된 구, 어간 예외, 용어 목록, 구 목록 및 어간 보고서 테이블에 적용됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Filters for All Tables( 1 );

```

### Show Legend

**구문:** obj << Show Legend( state=0|1 )

**설명:** 단어 클라우드에 대한 범례를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Show Word Cloud( 1 );
obj << Coloring( "Arbitrary Colors" );
Wait( 1 );
obj << Show Legend( 0 );

```

### Show Phrase List

**구문:** obj << Show Phrase List( state=0|1 )

**설명:** 구 목록 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Phrase List( 0 );

```

### Show Recodes

**구문:** obj << Show Recodes( state=0|1 )

**설명:** 재코딩된 용어 목록을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Add Recodes( {{"flossing", "floss"}} );
Wait( 1 );
obj << Show Recodes( 1 );

```

### Show Selected Rows

**구문:** obj << Show Selected Rows

**설명:** 현재 선택한 행에 있는 문서의 텍스트가 포함된 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
Current Data Table() << Select Rows( [1 2 3 4] );
obj << Show Selected Rows( 1 );

```

### Show Specified Phrases

**구문:** obj << Show Specified Phrases( state=0|1 )

**설명:** 사용자가 용어로 간주하도록 지정한 구 목록을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Specified Phrases( 1 );
Report( obj )["Specified Phrases"] << Close( 0 );

```

### Show Stem Exceptions

**구문:** obj << Show Stem Exceptions( state=0|1 )

**설명:** 어간 추출에서 제외되는 용어를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stem Exceptions( 1 );

```

### Show Stem Report

**구문:** obj << Show Stem Report( state=0|1 )

**설명:** 두 개의 어간 추출 결과 테이블을 포함하는 어간 추출 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem for Combining" );
obj << Show Stem Report( 1 );

```

### Show Stop Words

**구문:** obj << Show Stop Words( state=0|1 )

**설명:** 분석에 사용되는 중지 단어 목록을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Stop Words( 1 );

```

### Show Summary Counts

**구문:** obj << Show Summary Counts( state=0|1 )

**설명:** 요약 개수 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Summary Counts( 0 );

```

### Show Term List

**구문:** obj << Show Term List( state=0|1 )

**설명:** 용어 목록 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term List( 0 );

```

### Show Term and Phrase Options

**구문:** obj << Show Term and Phrase Options( state=0|1 )

**설명:** 용어 및 구 목록 보고서에서 각 목록의 팝업 메뉴에 사용할 수 있는 옵션에 해당하는 버튼을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Term and Phrase Options( 1 );

```

### Show Word Cloud

**구문:** obj << Show Word Cloud( state=0|1 )

**설명:** 단어 클라우드를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Show Word Cloud( 1 );

```

### Stemming

**구문:** obj = Text Explorer(...Stemming( "어간 추출 안 함"|"결합 가능한 경우 어간 추출"|"모든 용어의 어간 추출" )...)

<b>실행기 항목: 예</b>

**설명:** 시작 문자는 유사하지만 종료 문자는 다른 용어를 결합하는 방법을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Stemming( "Stem All Terms" );

```

### Term Selection

**구문:** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )), Model Choice( <index> ))

**설명:** 서로 다른 응답을 가장 잘 설명하는 용어를 분석합니다. 용어 선택은 응답이 평가일 때 감정 분석에도 유용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### Terms Alphabetical

**구문:** obj << Terms Alphabetical( state=0|1 )

**설명:** 용어 목록을 사전순으로 정렬합니다. 기본적으로 개수에 따라 내림차순으로 정렬됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Terms Alphabetical( 1 );

```

### Tokenizing

**구문:** obj = Text Explorer(...Tokenizing( "정규 표현식"|"기본 단어" )...)

<b>실행기 항목: 예</b>

**설명:** 텍스트를 용어 또는 토큰으로 파싱하기 위한 방법을 지정합니다. 사용 가능한 방법은 정규 표현식 및 기본 단어입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );

```

### Topic Analysis

**구문:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**설명:** 문서 용어 행렬에 대한 Varimax 회전 특이값 분해를 수행하여 주제라는 용어 그룹을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Topic Analysis( Number of Topics( 5 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
obj << Latent Semantic Analysis(
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 10 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );

obj << Rotated SVD( Number of Topics( 5 ) );

```

### Treat Numbers as Words

**구문:** obj = Text Explorer(...Treat Numbers as Words( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** 전체가 숫자로만 구성된 단어를 토큰으로 간주합니다. 기본 단어 토큰화 방법과 함께 사용되어야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );
Wait( 1 );
obj << Tokenizing( "Basic Words" );
obj << Treat Numbers as Words( 1 );

```

## Discriminant Analysis

### 연결된 생성자

#### Discriminant Analysis

**구문:** obj << Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**설명:** 문서 용어 행렬에 대한 선형 판별 분석을 사용하여 각 문서의 분류를 지정된 반응 열의 범주로 예측합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);

```

### 항목 메시지

#### Canonical Plot

**구문:** obj << Canonical Plot( state=0|1, N Canon( number ) )

**설명:** 정준 공간의 그룹 평균 및 문서 그림을 숨기거나 표시합니다. 정준 공간은 그룹을 나누는 공간입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Canonical Plot( 1, N Canon( 3 ) );

```

#### Remove

**구문:** obj << Remove

**설명:** 텍스트 탐색기 보고서 창에서 판별 분석 보고서를 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
Wait( 1 );
obj2 << Remove;

```

#### Save Canonical Scores

**구문:** obj << Save Canonical Scores( N Canon( number ) )

**설명:** 각 관측값에 대해 정준 공간의 스코어가 포함된 열을 데이터 테이블에 저장합니다. 정준 공간은 그룹을 나누는 공간입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Canonical Scores( N Canon( 3 ) );

```

#### Save Probabilities

**구문:** obj << Save Probabilities

**설명:** 각 반응 수준에 대한 확률 열 및 최대 확률 분류 반응이 포함된 열을 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**구문:** obj << Save Probability Formulas

**설명:** 최대 확률 분류 반응을 예측하기 위한 계산식 열을 데이터 테이블에 저장합니다. 이러한 열에서는 Text Score 함수를 사용하여 각 반응 수준에 대한 확률을 계산합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Discriminant Analysis(
	Maximum Number of Terms( 20 ),
	Minimum Term Frequency( 3 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 15 ),
	Column( :Floss )
);
obj2 << Save Probability Formulas;

```

## LCA Analysis

### 연결된 생성자

#### Latent Class Analysis

**구문:** obj << Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**설명:** 이진 가중 문서 용어 행렬에 대한 잠재 계층 분석을 사용하여 문서를 유사 문서 군집으로 그룹화합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);

```

### 항목 메시지

#### Cluster Mixture Probabilities

**구문:** obj << Cluster Mixture Probabilities( state=0|1 )

**설명:** 관측값이 각 군집에 속할 확률을 포함하는 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Mixture Probabilities( 0 );

```

#### Cluster Probabilities by Row

**구문:** obj << Cluster Probabilities by Row( state=0|1 )

**설명:** 각 행의 소속 군집 확률을 포함하는 혼합 확률 테이블을 표시하거나 숨깁니다. 최대 확률 분류 군집 열은 각 행의 소속 확률이 가장 높은 군집을 나타냅니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Cluster Probabilities by row( 0 );

```

#### Color by Cluster

**구문:** obj << Color by Cluster

**설명:** 데이터 테이블의 각 행을 최대 확률 분류 군집에 따라 색상을 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Color by Cluster;

```

#### MDS Plot

**구문:** obj << MDS Plot( state=0|1 )

**설명:** 군집 근접성을 2차원으로 표현하는 다차원 척도 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << MDS Plot( 0 );

```

#### Remove

**구문:** obj << Remove

**설명:** 텍스트 탐색기 보고서에서 잠재 계층 분석 보고서를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Remove;

```

#### Rename Clusters

**구문:** obj << Rename Clusters( "name1", "name2", ...  )

**설명:** 하나 이상의 군집에 대한 이름을 추가할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Rename Clusters( "First", "Second", "Third", "Fourth", "Fifth" );

```

#### Save Probabilities

**구문:** obj << Save Probabilities

**설명:** 문서가 각 군집에 소속될 확률을 데이터 테이블에 별도의 열로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probabilities;

```

#### Save Probability Formulas

**구문:** obj << Save Probability Formulas

**설명:** 각 군집에 대한 계산식 열과 최대 확률 분류 군집에 대한 계산식 열을 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Save Probability Formulas;

```

#### Set Random Seed

**구문:** obj << Latent Class Analysis( Set Random Seed( number ) )

**설명:** 분석에 사용할 난수 시드값을 설정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 ),
	Set Random Seed( 1234 )
);

```

#### Term Probabilities by Cluster

**구문:** obj << Term Probabilities by Cluster( state=0|1 )

**설명:** 각 군집에 대한 추정값과 함께 용어 테이블을 표시하거나 숨깁니다. 추정값은 문서가 특정 군집에 속한다고 할 때 문서에 용어가 포함될 조건부 확률입니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Term Probabilities by Cluster( 0 );

```

#### Top Terms by Cluster

**구문:** obj << Top Terms by Cluster( state=0|1 )

**설명:** 각 군집에서 스코어가 가장 높은 10개 용어를 포함하는 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
Wait( 1 );
obj2 << Top Terms by Cluster( 0 );

```

#### Word Clouds by Cluster

**구문:** obj << Word Clouds by Cluster( state=0|1 )

**설명:** 각 군집당 하나씩 단어 클라우드 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Class Analysis(
	Number of Clusters( 5 ),
	Maximum Number of Terms( 10 ),
	Minimum Term Frequency( 2 )
);
obj2 << Word Clouds by Cluster( 1 );

```

## SVD Analysis > Topic Analysis

### 연결된 생성자

#### Rotated SVD

**구문:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**설명:** 문서 용어 행렬에 대한 Varimax 회전 특이값 분해를 수행하여 주제라는 용어 그룹을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### Topic Analysis

**구문:** obj << Topic Analysis( Number of Topics ( number ) ) 

 

obj << Rotated SVD( Number of Topics( number ) )

**설명:** 문서 용어 행렬에 대한 Varimax 회전 특이값 분해를 수행하여 주제라는 용어 그룹을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### 항목 메시지

#### Remove

**구문:** obj << Remove

**설명:** SVD 보고서에서 주제 분석 보고서를 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Remove;

```

#### Rename Topics

**구문:** obj << Rename Topics

**설명:** 하나 이상의 주제에 대한 이름을 추가할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Rename Topics( "Too Busy", "Less Often", "Difficult", "Bed", "Week" );

```

#### Rotation Matrix

**구문:** obj << Rotation Matrix( state=0|1 )

**설명:** Varimax 회전에 대한 회전 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Rotation Matrix( 1 );
Report( obj )["Rotation Matrix"] << Close( 0 );

```

#### Save Document Topic Vectors

**구문:** obj << Save Document Topic Vectors

**설명:** 주제 분석의 특이 벡터를 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Document Topic Vectors;

```

#### Save Item Topic Vectors

**구문:** obj << Save Item Topic Vectors

**설명:** 주제 벡터를 새 항목 주제 스코어 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Item Topic Vectors;

```

#### Save Term Topic Vectors

**구문:** obj << Save Term Topic Vectors

**설명:** 주제 분석의 주제 벡터를 새 데이터 테이블의 열로 저장합니다. 용어 테이블이 이미 열려 있으면 열이 해당 데이터 테이블에 저장됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj << Save Term Table;
obj3 << Save Term Topic Vectors;

```

#### Save Topic Vector Formula

**구문:** obj << Save Topic Vector Formula

**설명:** 회전된 특이값 분해를 포함하는 벡터 모델링 유형의 계산식을 데이터 테이블에 저장합니다. 결과 열에는 Text Score 함수가 사용됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Topic Vector Formula;

```

#### Save Transaction Topic Vectors

**구문:** obj << Save Transaction Topic Vectors

**설명:** 회전된 특이값 분해에서 사용자가 지정한 수의 특이 벡터(주제 벡터)를 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
obj3 << Save Transaction Topic Vectors;

```

#### Top Loadings by Topic

**구문:** obj << Top Loadings by Topic( state=0|1 )

**설명:** 각 주제에 대한 용어 테이블을 포함하는 주제별 상위 적재 보고서를 표시하거나 숨깁니다. 각 테이블의 용어는 각 주제에 대한 적재량 절대값이 가장 큰 용어입니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Top Loadings by Topic( 0 );

```

#### Topic Loadings

**구문:** obj << Topic Loadings( state=0|1 )

**설명:** 각 용어의 주제별 적재량 행렬을 포함하는 주제 적재 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Loadings"] << Close( 0 );
Wait( 1 );
obj3 << Topic Loadings( 0 );

```

#### Topic Scatterplot Matrix

**구문:** obj << Topic Scatterplot Matrix( state=0|1 )

**설명:** 회전된 특이값 분해 벡터에 대한 산점도 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Topic Scatterplot Matrix( 1 );

```

#### Topic Scores

**구문:** obj << Topic Scores( state=0|1 )

**설명:** 각 문서의 주제별 스코어 행렬을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores( 0 );

```

#### Topic Scores Plots

**구문:** obj << Topic Scores Plots( state=0|1 )

**설명:** 각 문서에 대한 주제 스코어 그림을 포함하는 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Report( obj )["Topic Scores Plots"] << Close( 0 );
Wait( 1 );
obj3 << Topic Scores Plots( 0 );

```

#### Variance Explained by Each Topic

**구문:** obj << Variance Explained by Each Topic( state=0|1 )

**설명:** 각 주제에 의해 설명되는 분산을 포함하는 테이블을 표시하거나 숨깁니다. 이 테이블에는 각 주제에 의해 설명되는 변동의 백분율 및 누적 백분율 열도 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Variance Explained by Each Topic( 1 );
Report( obj )["Variance Explained by Each Topic"] << Close( 0 );

```

#### Word Clouds by Topic

**구문:** obj << Word Clouds by Topic( state=0|1 )

**설명:** 각 주제당 하나씩 단어 클라우드 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer(
	TextColumns( :Reasons Not to Floss ),
	Show Term List( 0 ),
	Show Phrase List( 0 ),
	Show Summary Counts( 0 )
);
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );
Wait( 1 );
obj3 << Word Clouds by Topic( 1 );
Report( obj )["Word Clouds by Topic"] << Close( 0 );

```

## SVD Analysis

### 연결된 생성자

#### Latent Semantic Analysis

**구문:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**설명:** 문서 용어 행렬의 희소 특이값 분해를 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

#### SVD

**구문:** obj << Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); 

 

obj << SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**설명:** 문서 용어 행렬의 희소 특이값 분해를 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);

```

### 항목 메시지

#### Cluster Documents

**구문:** obj << Cluster Documents( state=0|1 )

**설명:** 데이터에 있는 문서의 계층적 군집화 분석을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Cluster Documents( 1 );

```

#### Cluster Items

**구문:** obj << Cluster Items( state=0|1 )

**설명:** 데이터에 있는 용어의 계층적 군집화 분석을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Items( 1 );

```

#### Cluster Terms

**구문:** obj << Cluster Terms( state=0|1 )

**설명:** 데이터에 있는 용어의 계층적 군집화 분석을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << obj << Cluster Terms( 1 );

```

#### Cluster Transactions

**구문:** obj << Cluster Transactions( state=0|1 )

**설명:** 데이터에 있는 문서의 계층적 군집화 분석을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );
obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );
obj2 = obj << SVD( Number of Singular Vectors( 20 ) );
obj2 << Cluster Transactions( 1 );

```

#### Remove

**구문:** obj << Remove

**설명:** 텍스트 탐색기 보고서 창에서 SVD 보고서를 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
Wait( 1 );
obj2 << Remove;

```

#### Rotated SVD

**구문:** obj << Topic Analysis( Number of Topics ( number ) )   

obj << Rotated SVD( Number of Topics( number ) )

**설명:** 문서 용어 행렬에 대한 Varimax 회전 특이값 분해를 수행하여 주제라는 용어 그룹을 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### SVD Scatterplot Matrix

**구문:** obj << SVD Scatterplot Matrix( state=0|1, Number of Vectors( number ) )

**설명:** 각 SVD 그림에 대해 용어 및 문서 특이값 분해 벡터에 대한 산점도 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << SVD Scatterplot Matrix( 1, Number of Vectors( 8 ) );

```

#### Save Document Singular Vectors

**구문:** obj << Save Document Singular Vectors(number)

**설명:** 문서 특이값 분해에서 사용자가 지정한 수의 특이 벡터를 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Document Singular Vectors( 5 );

```

#### Save Item SVD

**구문:** obj << Save Item SVD

**설명:** 각 항목에 대해 지정한 수의 특이 벡터가 포함된 데이터 테이블을 생성합니다. 트랜잭션 항목 행렬에서 우측 특이값입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item SVD( 5 );

```

#### Save Item Singular Vectors

**구문:** obj << Save Item Singular Vectors

**설명:** 각 항목에 대해 지정한 수의 특이 벡터가 포함된 데이터 테이블을 생성합니다. 트랜잭션 항목 행렬에서 우측 특이값입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Item Singular Vectors( 5 );

```

#### Save Singular Vector Formula

**구문:** obj << Save Singular Vector Formula

**설명:** 문서 특이값 분해를 포함하는 벡터 값 계산식 열을 데이터 테이블에 저장합니다. 계산식 열에는 Text Score 함수가 사용됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Singular Vector Formula;

```

#### Save Term Singular Vectors

**구문:** obj << Save Term Singular Vectors( number )

**설명:** 용어 특이값 분해에서 지정된 수의 특이 벡터를 새 데이터 테이블의 열로 저장합니다. 각 행은 용어에 해당합니다. 용어 테이블이 이미 열려 있으면 열이 해당 데이터 테이블에 저장됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Term Singular Vectors( 5 );

```

#### Save Transaction SVD

**구문:** obj << Save Transaction SVD

**설명:** 각 트랜잭션에 대해 지정한 수의 특이 벡터가 포함된 데이터 테이블을 생성합니다. 트랜잭션 항목 행렬에서 좌측 특이값입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction SVD( 5 );

```

#### Save Transaction Singular Vectors

**구문:** obj << Save Transaction Singular Vectors

**설명:** 각 트랜잭션에 대해 지정한 수의 특이 벡터가 포함된 데이터 테이블을 생성합니다. 트랜잭션 항목 행렬에서 좌측 특이값입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj2 << Save Transaction Singular Vectors( 5 );

```

#### Select Near Neighbors

**구문:** obj << Select Near Neighbors( number=10 )

**설명:** 문서 SVD 그림에서 선택한 점의 k개 최근접 이웃을 찾아 선택합니다. 기본값은 "10"입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
dt << Select Rows( [102, 237] );
obj2 << Select Near Neighbors( 8 );

```

#### Topic Analysis

**구문:** obj << Topic Analysis( Number of Topics ( number ) )   

obj << Rotated SVD( Number of Topics( number ) )

**설명:** 문서 용어 행렬에 대한 Varimax 회전 특이값 분해를 수행하여 주제라는 용어 그룹을 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );
obj2 = obj << Latent Semantic Analysis(
	Maximum Number of Terms( 100 ),
	Minimum Term Frequency( 4 ),
	Weighting( "TF IDF" ),
	Number of Singular Vectors( 50 ),
	Centering and Scaling( "Centered" )
);
obj << Show Term List( 0 );
obj << Show Phrase List( 0 );
obj << Show Summary Counts( 0 );
obj2 << Topic Analysis( Number of Topics( 5 ) );

```

## Sentiment Analysis

### 연결된 생성자

#### Sentiment Analysis

**구문:** Sentiment Analysis( state=0|1 )

**설명:** 어휘 분석을 사용하여 문서에서 감정 용어를 식별하고 긍정, 부정 및 전반적 감정에 대해 문서를 스코어링합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );

```

### 항목 메시지

#### Add Feature Words

**구문:** obj << Add Feature Words( list )

**설명:** 특징으로 스코어링할 단어 목록을 추가합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Add Feature Words( {"floss"} );

```

#### Add Intensifier Exception Words

**구문:** obj << Add Intensifier Exception Words( list )

**설명:** 분석에서 제거할 강조사 용어 목록을 추가합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Exception Words( {"almost"} );

```

#### Add Intensifier Words

**구문:** obj << Add Intensifier Words( {{<word, multiplier>}, {<word>, <multiplier>}, ... } )

**설명:** 분석에서 강조사 용어로 사용할 단어 목록을 추가합니다. 승수는 일반적으로 [-2, 2] 범위의 부동 소수점 숫자입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Intensifier Words( {{"extreme", 1.8}, {"extremely", 1.8}} );

```

#### Add Negation Exception Words

**구문:** obj << Add Negation Exception Words( list )

**설명:** 분석에서 제거할 부정 용어 목록을 추가합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Exception Words( {"without"} );

```

#### Add Negation Words

**구문:** obj << Add Negation Words( list )

**설명:** 분석에서 부정 용어로 사용할 단어 목록을 추가합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Negation Words( {"dont"} );

```

#### Add Sentiment Exception Words

**구문:** obj << Add Sentiment Exception Words( list )

**설명:** 분석에서 제거할 감정 용어 목록을 추가합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Exception Words( {"easy"} );

```

#### Add Sentiment Words

**구문:** obj << Add Sentiment Words( {{<word>, <score>}, {<word>, <score>}, ... } )

**설명:** 분석에서 감정 용어로 사용할 단어 목록을 추가합니다. 스코어는 [-100, 100] 범위의 정수입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Add Sentiment Words( {{"difficult", -70}, {"necessary", -20}} );

```

#### Include Builtin Intensifier Terms

**구문:** obj << Include Builtin Intensifier Terms( state=0|1 )

**설명:** 기본 제공 강조사 용어가 감정 분석에 사용되는 강조사 용어에 포함되도록 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Intensifier Terms( 0 );

```

#### Include Builtin Negation Terms

**구문:** obj << Include Builtin Negation Terms( state=0|1 )

**설명:** 기본 제공 부정 용어가 감정 분석에 사용되는 부정 용어에 포함되도록 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Negation Terms( 0 );

```

#### Include Builtin Sentiment Terms

**구문:** obj << Include Builtin Sentiment Terms( state=0|1 )

**설명:** 기본 제공 감정 용어가 감정 분석에 사용되는 감정 용어에 포함되도록 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Include Builtin Sentiment Terms( 0 );

```

#### Parse Documents

**구문:** obj << Parse Documents( state=0|1 )

**설명:** NLP(자연어 처리)를 사용하여 문서를 파싱하도록 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Parse Documents( 0 );

```

#### Save Count of Sentiment Scores by Document

**구문:** obj << Save Count of Sentiment Scores by Document

**설명:** 각 감정 용어에 대한 열을 데이터 테이블에 저장합니다. 각 열에는 각 문서에서 각 감정 용어가 나타나는 횟수가 포함됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Count of Sentiment Scores by Document;

```

#### Save Document Scores

**구문:** obj << Save Document Scores

**설명:** 문서 스코어를 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Save Document Scores;

```

#### Score Column

**구문:** obj << Score Column( column )

**설명:** 계산된 감정과 비교할 알려진 정보가 포함된 열을 지정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Score Column( :Gender );

```

#### Scoring

**구문:** obj << Scoring( "척도화"|"최소값 최대값" )

**설명:** 문서의 총 스코어를 계산하기 위한 스코어링 스타일을 설정합니다. 척도화 옵션은 긍정적 구와 부정적 구의 스코어를 합산하여 구의 수로 나눕니다. 최소값 최대값 옵션은 긍정 스코어 최대값과 부정 스코어 최소값의 합으로 계산됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Wait( 1 );
sent << Scoring( "Min Max" );

```

#### Show Feature Finder

**구문:** obj << Show Feature Finder( state=0|1 )

**설명:** 선택한 특징별로 감정을 분할할 수 있는 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Features"] << Close( 0 );
Wait( 2 );
sent << Show Feature Finder( 0 );

```

#### Show Intensifier Terms

**구문:** obj << Show Intensifier Terms( state=0|1 )

**설명:** 강조사 용어 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Intensifier Terms"] << Close( 0 );
Wait( 2 );
sent << Show Intensifier Terms( 0 );

```

#### Show Negation Terms

**구문:** obj << Show Negation Terms( state=0|1 )

**설명:** 부정 용어 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Negation Terms"] << Close( 0 );
Wait( 2 );
sent << Show Negation Terms( 0 );

```

#### Show Sentiment Cloud

**구문:** obj << Show Sentiment Cloud( state=0|1 )

**설명:** 감정 구의 단어 클라우드를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
sent << Show Sentiment Cloud( 1 );

```

#### Show Sentiment Terms

**구문:** obj << Show Sentiment Terms( state=0|1 )

**설명:** 감정 용어 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
sent = obj << Sentiment Analysis( 1 );
Report( obj )["Sentiment Terms"] << Close( 0 );
Wait( 2 );
sent << Show Sentiment Terms( 0 );

```

## Term Selection

### 연결된 생성자

#### Term Selection

**구문:** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )), Model Choice( <index> ))

**설명:** 서로 다른 응답을 가장 잘 설명하는 용어를 분석합니다. 용어 선택은 응답이 평가일 때 감정 분석에도 유용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

### 항목 메시지

#### Model Choice

**구문:** obj << Term Selection( Model Choice(<index>) )

**설명:** 요약 영역에 대한 현재 모형을 지정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Models

**구문:** obj << Term Selection( Models( Model( Response Column( <column> ), <other models> )))

**설명:** 모형을 생성하는 데 필요한 정보를 지정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);

```

#### Remove

**구문:** obj << Remove

**설명:** 텍스트 탐색기 보고서 창에서 용어 선택 보고서를 제거합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
Wait( 1 );
term << Remove;

```

#### Save Document Scores

**구문:** obj << Save Document Scores

**설명:** 문서 스코어를 데이터 테이블의 새 열에 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Document Scores;

```

#### Save Prediction Formulas

**구문:** obj << Save Prediction Formulas

**설명:** 현재 선택한 분석에 대한 예측 계산식을 포함하는 열을 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Prediction Formulas;

```

#### Save Term Score DTM

**구문:** obj << Save Term Score DTM

**설명:** 현재 선택한 분석에서 각 관련 용어에 대한 열을 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Save Term Score DTM;

```

#### Show Term Cloud

**구문:** obj << Show Term Cloud( state=0|1 )

**설명:** 계수 항의 단어 클라우드를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );
term = obj << Term Selection(
	Models(
		Model(
			Response Column( :Gender ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Elastic Net ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Model(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) ),
			Fits(
				First Fit(
					Fit(
						Estimation Method( Lasso ),
						Validation Method( AICc ),
						Early Stopping,
						Model Summary( 0 ),
						Parameter Estimates for Original Predictors( 0 ),
						Effect Tests( 0 )
					)
				)
			)
		),
		Current Model Settings(
			Response Column( :Single Status ),
			Target Levels( Target Number( 1 ), Target String( "1" ) ),
			Fit Settings( Estimation Method( Lasso ) )
		)
	),
	Model Choice( 2 )
);
term << Show Term Cloud;

```

