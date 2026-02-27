# Response Screening



## 공유 항목 메시지

### Action

**구문:** obj &lt;&lt; Action

**설명:** 실행할 표현식을 삽입하기 위한 플랫폼 내의 다목적 트랩도어. 임시로 표시 상자 및 데이터 테이블 유형을 플랫폼에 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

#### 이름으로 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### 익명 사전 설정

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### 폴더 내에서 검색

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Data Table Window;

```

### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### 필터 사용 플랫폼

```jsl

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

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**구문:** obj &lt;&lt; Get Where Expr

**설명:** By() 또는 Where()를 사용하여 플랫폼이 시작된 경우 데이터 부분집합에 대한 Where 표현식을 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**구문:** Ignore Platform Preferences( state=0|1 )

**설명:** 플랫폼의 현재 환경 설정을 무시합니다. 생성 후 플랫폼으로 전송될 때 메시지가 무시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Local Data Filter

**구문:** obj &lt;&lt; Local Data Filter

**설명:** 데이터를 특정 그룹 또는 범위로 필터링합니다. 이 플랫폼에서만 사용 가능합니다.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**구문:** obj &lt;&lt; Paste Local Data Filter

**설명:** 클립보드의 로컬 데이터 필터를 현재 보고서에 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ), Where( :Region == "MW" ) ) );
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**구문:** obj &lt;&lt; Remove Local Data Filter

**설명:** 로컬 데이터 필터가 생성된 경우 로컬 데이터 필터를 제거하고 데이터 테이블의 모든 데이터를 직접 사용하도록 플랫폼을 복원합니다.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Save Script to Script Window;

```

### SendToByGroup

**구문:** SendToByGroup( {":Column == level"}, command );

**설명:** 기준 그룹의 각 수준으로 플랫폼 명령을 보내거나 사용자 정의 명령을 표시합니다.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**구문:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**설명:** 개체의 로컬 컨텍스트(대개 플랫폼)에서 변환 열을 생성합니다. 변환 열은 플랫폼의 수명 동안에만 활성화됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**구문:** obj = Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서에 대해 생성할 창 유형을 설정합니다. 기본적으로 Visible 보고서 창이 생성됩니다. Invisible 창은 화면에 나타나지 않지만 Window()와 같은 함수로 검색할 수 있습니다. Private 창은 대부분의 창 메시지에 응답하지만 검색할 수 없으며 보고서 개체를 통해 처리해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## 연결된 생성자

### Response Screening

**구문:** Response Screening( Y( columns ), X( columns ) )

**설명:** 여러 반응에 대해 선형 모형 효과의 검정 수행 과정을 자동화합니다. 검정 결과와 요약 통계량은 데이터 테이블과 그림에 제공됩니다. FDR(False Discovery Rate)은 유의성이 잘못 선언되지 않도록 보호합니다. 로버스트 추정 방법은 이상치에 대한 검정 민감도를 줄입니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

#### 예제 2

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

## 열

### By

**구문:** obj = Response Screening(...&lt;By( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	By( _bycol )
);

```

### Freq

**구문:** obj = Response Screening(...&lt;Freq( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Freq( _freqcol )
);

```

### Grouping

**구문:** obj = Response Screening(...&lt;Grouping( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 범주형 열을 그룹화 변수로 지정합니다. 지정된 열의 각 수준에 할당된 행이 개별적으로 분석됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Grouping( :Site ) );

```

### Response

**구문:** obj = Response Screening(...Response( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 측정값을 포함하는 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

### Subgroup

**구문:** obj = Response Screening(...&lt;Subgroup( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 하나 이상의 부분군 변수를 지정합니다. 부분군 변수가 정의되면 부분군 변수의 각 범주에 대해 추가 적합이 수행됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Subgroup( :Site ) );

```

### Weight

**구문:** obj = Response Screening(...&lt;Weight( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Weight( _weightcol )
);

```

### X

**구문:** obj = Response Screening(...X( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

### Y

**구문:** obj = Response Screening(...Y( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 측정값을 포함하는 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process )
);

```

## 항목 메시지

### Cauchy

**구문:** obj = Response Screening(...Cauchy( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 최대 가능도와 Cauchy 연결 함수를 사용하여 모수를 추정합니다. 이 추정 방법은 오차가 Cauchy 분포를 따른다고 가정합니다. Cauchy 분포는 정규 분포보다 꼬리가 더 두꺼우므로 이 방법을 사용하면 이상치의 영향이 줄어듭니다.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Eval( 8 :: 48 ) ), Cauchy( 1 ) );

```

### Common X Scale

**구문:** obj = Response Screening(...Common X Scale( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모든 연속형 X 변수의 척도가 동일하다는 것을 플랫폼에 알립니다. 이는 여러 X 변수의 기울기를 비교하는 데 필요합니다.

```jsl

dt = Open( "$Sample_Data/Iris.jmp" );
dt << Response Screening(
	Y( :Sepal length, :Sepal width ),
	X( :Petal length, :Petal width ),
	Common X Scale
);

```

### Common Y Scale

**구문:** obj = Response Screening(...Common Y Scale( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모든 연속형 반응의 척도가 동일하다는 것을 플랫폼에 알립니다. 이는 평균 차이 또는 기울기를 비교하는 데 필요합니다.

```jsl

dt = Open( "$Sample_Data/Iris.jmp" );
dt << Response Screening(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Common Y Scale
);

```

### Comparisons

**구문:** obj = Response Screening(...Comparisons( "각 수준과 대조군"|"모든 조합" )...)

**설명:** Specifies the method for comparing means or rates. You can compare each level with a control group level or compare all possible level combinations.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career ),
	Comparisons( "All combinations" ),
	Name( "2 by M Table" )(1)
);

```

### Corr

**구문:** obj = Response Screening(...Corr( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 값 순서화로 정의된 인덱스에 따라 Pearson 곱적률 상관계수를 계산합니다.

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );
dt << Response Screening(
	X( :Employee Tenure, :Position Tenure, :Age Group ),
	Y( :Job Satisfaction ),
	Corr( 1 )
);

```

### Empirical Bayes Shrinkage

**구문:** obj = Response Screening(...Empirical Bayes Shrinkage( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 잔차 분산 추정값을 추정된 사전 최빈값으로 축소, 모든 추정값에서 강도 차용(borrowing strength). 이는 공통 척도를 사용하는 많은 연속형 Y 변수를 선별할 때 유용합니다.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 88 ) ),
	Common Y Scale,
	Empirical Bayes Shrinkage( 1 )
);

```

### Fit Selected Items

**구문:** obj &lt;&lt; Fit Selected Items

**설명:** X로 Y 적합 보고서를 반응 변수 선별 보고서에 추가합니다. 추가된 보고서는 그림에서 선택한 점 또는 결과 테이블에서 선택한 행에 해당합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );
obj << Fit Selected Items;

```

### Force X Categorical

**구문:** obj = Response Screening(...Force X Categorical( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모델링 유형을 무시하고 모든 X 열을 범주형 열로 처리합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :height, :sex ), Y( :age, :weight ), Force X Categorical( 1 ) );

```

### Force X Continuous

**구문:** obj = Response Screening(...Force X Continuous( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모델링 유형을 무시하고 모든 X 열을 연속형 열로 처리합니다.

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );
dt << Response Screening(
	X( :Age Group, :Job Satisfaction ),
	Y( :Gender, :Single Status ),
	Force X Continuous( 1 )
);

```

### Force Y Categorical

**구문:** obj = Response Screening(...Force Y Categorical( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모델링 유형을 무시하고 모든 Y 열을 범주형 열로 처리합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( Y( :height, :sex ), X( :age, :weight ), Force Y Categorical( 1 ) );

```

### Force Y Continuous

**구문:** obj = Response Screening(...Force Y Continuous( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모델링 유형을 무시하고 모든 Y 열을 연속형 열로 처리합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( Y( :age ), X( :height, :weight ), Force Y Continuous( 1 ) );

```

### Get Crosstab RTF

**구문:** obj &lt;&lt; Get Crosstab RTF( state=0|1 )

**설명:** Get an RTF source for a crosstab table.

**JMP추가된 버전:** 19

### Get Crosstab Script

**구문:** obj &lt;&lt; Get Crosstab Script( state=0|1 )

**설명:** Get a JSL display script for a crosstab table.

**JMP추가된 버전:** 19

### Get PValues

**구문:** obj &lt;&lt; Get PValues

**설명:** p 값 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Outlier Indicator );
pvals = obj << Get PValues;
Show( pvals );

```

### Kappa

**구문:** obj = Response Screening(...Kappa( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** "카파"라는 새 열을 결과 테이블에 추가합니다. 카파는 Y와 X 간의 합치도 측도입니다.

```jsl

dt = Open( "$Sample_Data/Mail Messages.jmp" );
dt << Response Screening( X( :From ), Y( :To ), Kappa( 1 ) );

```

### Kruskal Wallis Test

**구문:** obj = Response Screening(...Kruskal Wallis Test( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** Kruskal-Wallis 검정을 계산합니다. 이 검정은 연속형 Y 대 범주형 X에 대한 비모수 Wilcoxon 순위 기반 검정입니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :sex ), Y( :height, :weight ), Kruskal Wallis Test( 1 ) );

```

### Max Comparison Levels

**구문:** obj = Response Screening(...Max Comparison Levels( number=100 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 비교에 지원되는 수준 수를 지정합니다. 기본값은 "100"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Wafer Number ), Y( Column Group( "Responses" ) ), Max Comparison Levels( 24 ) );

```

### Max Logworth

**구문:** obj = Response Screening(...Max Logworth( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** LogWorth 값을 포함하는 그림의 척도를 제어합니다. 지정된 값을 초과하는 LogWorth 값은 지정된 값으로 표시되어 LogWorth 그림에서 극단 척도를 방지합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Max Logworth( 1000 ) );

```

### Missing is Category

**구문:** obj = Response Screening(...Missing is Category( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 범주형 변수의 결측값을 별도의 범주로 처리합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
Row() = 1;
:age = .;
Row() = 8;
:age = .;
dt << Response Screening( X( :age ), Y( :sex ), Missing is Category( 1 ) );

```

### Negative Binomial Y

**구문:** obj = Response Screening(...Negative Binomial Y( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 Y 반응을 음이항 분포를 따르는 개수로 적합시킵니다.

```jsl

dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );
dt << Response Screening( X( :clean ), Grouping( :failure ), Y( :N ), Negative Binomial Y( 1 ) );

```

### No Report

**구문:** obj = Response Screening(...No Report( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 보고서 창을 표시하지 않습니다. 이 옵션을 사용하면 보고서 창을 나타내지 않고 저장 명령을 실행하여 결과를 얻을 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save PValues, No Report( 1 ) );

```

### PValues Table on Launch

**구문:** obj = Response Screening(...PValues Table on Launch( state=0|1 )...)

**설명:** p 값 및 개별 모형 적합 통계량에 대한 데이터 테이블을 생성합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Eval( 8 :: 88 ) ), Robust, PValues Table on Launch( 1 ) );

```

### Paired X and Y

**구문:** obj = Response Screening(...Paired X and Y( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시작 창에 표시된 순서에 따라 X 열과 쌍을 이룬 Y 열에 대해서만 검정을 수행합니다. 예를 들어 Y1은 X1과 쌍이 되고 Y2는 X2와 쌍이 됩니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :age, :sex ), Y( :height, :weight ), Paired X and Y( 1 ) );

```

### Poisson Y

**구문:** obj = Response Screening(...Poisson Y( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 Y 반응을 Poisson 분포를 따르는 개수로 적합시킵니다.

```jsl

dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );
dt << Response Screening( X( :clean ), Grouping( :failure ), Y( :N ), Poisson Y( 1 ) );

```

### Practical Difference Portion

**구문:** obj &lt;&lt; Practical Difference Portion( number=0.10 )

**설명:** 실제적으로 의미가 있다고 간주하는 차이를 나타내는 규격 범위의 비율을 지정합니다. 기본값은 "0.10"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 48 ) ),
	Practical Difference Portion( .2 ),
	Save Compare Means
);

```

### Practical Differences and Equivalences

**구문:** obj &lt;&lt; Practical Differences and Equivalences( Practical Portion(fraction) | Specific Difference(number) )

**설명:** 감지할 차이가 지정된 경우, 실제 차이가 감지할 차이 절대값보다 유의하게 큰지 아니면 유의하게 작은지 검정합니다.

### Quartiles per Group

**구문:** obj = Response Screening(...Quartiles per Group( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 연속형 Y 대 범주형 X에 대한 각 그룹의 사분위수와 범위를 계산합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :sex ), Y( :height, :weight ), Quartiles per Group( 1 ) );

```

### Ratio Adjustment

**구문:** obj = Response Screening(...Ratio Adjustment( "수정 없음"|"0일 때 0.5 추가"|"항상 0.5 추가" )...)

**설명:** 위험비, 승산비 및 위험도 차이를 계산할 때 셀 개수에 0.5를 추가하는 옵션을 제공합니다. 이렇게 조정하면 0으로 나누기에서 발생하는 문제를 방지할 수 있습니다.

**JMP추가된 버전:** 17

<b>실행기 항목: 예</b>

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening(
	X( :Age Group ),
	Y( :Single Status, :Gender, :I am working on my career ),
	Ratio Adjustment( "Add 0.5 Always" ),
	Name( "2 by M Table" )(1)
);

```

### Robust

**구문:** obj = Response Screening(...Robust( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 이상치의 영향을 받지 않는 Huber M 추정 방법을 사용하여 회귀 및 ANOVA 모형을 적합시킵니다.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Eval( 8 :: 88 ) ), Robust( 1 ) );

```

### Save 2 by M

**구문:** obj &lt;&lt; Name( "Save 2 by M table" )

**설명:** 2 x M 결과 보고서의 정보와 기타 검정 통계량을 새 데이터 테이블에 저장합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening( X( :Age Group ), Y( :Single Status, :Gender, :I am working on my career ) );
obj << Name( "2 by M Table" )(1);
obj << Name( "Save 2 by M Table" );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Response Screening( X( :Age Group ), Y( :Single Status, :Gender, :I am working on my career ) );
obj << "2 by M Table"n( 1 );
obj << "Save 2 by M Table"n;

```

### Save Compare Means

**구문:** obj &lt;&lt; Save Compare Means

**설명:** 범주형 변수의 모든 수준에 대한 전체 쌍별 비교 검정 결과를 포함하는 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Compare Means );

```

### Save Means

**구문:** obj &lt;&lt; Save Means

**설명:** 범주형 변수의 각 수준에 대한 개수, 평균 및 표준편차를 포함하는 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Means );

```

### Save Means Differences

**구문:** obj &lt;&lt; Save Means Differences

**설명:** 범주형 변수의 모든 수준에 대한 전체 쌍별 비교 검정 결과를 포함하는 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Means Differences );

```

### Save Outlier Indicator

**구문:** obj &lt;&lt; Save Outlier Indicator

**설명:** 이상치를 나타내기 위해 표시자 열 그룹을 원래 데이터 테이블에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Outlier Indicator );

```

### Save PValues

**구문:** obj &lt;&lt; Save PValues

**설명:** 결과 테이블의 정보를 포함하는 데이터 테이블을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save PValues );

```

### Save Std Residuals

**구문:** obj &lt;&lt; Save Std Residuals

**설명:** 각 적합에 대해 잔차를 추정된 표준편차로 나눈 값을 포함하는 열을 원래 데이터 테이블에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Std Residuals );

```

### Select Columns

**구문:** obj &lt;&lt; Select Columns( condition )

**설명:** 결과 테이블에서 선택한 행에 해당하는 열을 원래 데이터 테이블에서 선택합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );
obj << Select Columns;

```

### Select Where

**구문:** obj &lt;&lt; Select Where

**설명:** 보고서 테이블에서 특정 조건에 해당하는 항목을 선택합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Select Where( FDR Logworth > 200 );

```

### Show Crosstab Report

**구문:** obj &lt;&lt; Show Crosstab Report( state=0|1 )

**설명:** Experimental Hidden Feature: Show the details for each X and Y combination in a crosstab cell

**JMP추가된 버전:** 19

### Show Means Differences

**구문:** obj &lt;&lt; Show Means Differences

**설명:** 반응 변수 선별 보고서 창에 Logworth 대 차이 그림과 평균 차이 보고서를 표시합니다. 이 옵션은 Y 변수가 공통 척도를 사용한다고 가정합니다.

```jsl


Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( Column Group( "Markers" ) ),
	X( :Sex, :Disease Status ),
	Common Y Scale( 1 ),
	Show Means Differences( 1 ),
	SendToReport(
		Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ),
		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )
	)
);

```

### Show Plots

**구문:** obj &lt;&lt; Show Plots( state=0|1 )

**설명:** 보고서 창에서 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Show Result Tables( 0 );

```

### Show Report Tables

**구문:** obj &lt;&lt; Show Report Tables( state=0|1 )

**설명:** 보고서 창에서 결과 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );
obj << Show Result Tables( 0 );

```

### Show Slopes

**구문:** obj &lt;&lt; Show Slopes

**설명:** 반응 변수 선별 보고서 창에 Logworth 대 기울기 그림을 표시합니다. 이 옵션은 Y 변수가 공통 척도를 사용하고 X 변수도 공통 척도를 사용한다고 가정합니다.

```jsl


Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( Column Group( "Markers" ) ),
	Show Slopes( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) )
);

```

### Specific Difference to Detect

**구문:** obj &lt;&lt; Specific Difference to Detect( number )

**설명:** 시그마 또는 규격 범위의 비율이 아닌 감지할 차이를 지정합니다. 이 옵션은 모든 Y 변수가 동일한 척도를 사용한다고 가정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	X( :Process ),
	Y( Eval( 8 :: 48 ) ),
	Practical Difference Portion( .2 ),
	Save Compare Means
);

```

### Subgroup Twoway

**구문:** obj = Response Screening(...Subgroup Twoway( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모든 이원 부분군 조합을 적합시킵니다. 이 옵션은 하나 이상의 부분군 변수가 정의된 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Response Screening( X( :height ), Y( :weight ), Subgroup( :age, :sex ), Subgroup Twoway( 1 ) );

```

### Tabbed Report Layout

**구문:** obj &lt;&lt; Tabbed Report Layout( state=0|1 )

**설명:** 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

### Unthreaded

**구문:** obj = Response Screening(...Unthreaded( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 멀티스레딩을 제한합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Response Screening(
	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),
	X( :Process ),
	Unthreaded( 1 )
);

```

### Volcano Plots Use FDR Axis

**구문:** obj = Response Screening(...Volcano Plots Use FDR Axis( state=0 )...)

**설명:** 화산 그림의 세로 축에 수정되지 않은 LogWorth 대신 FDR 수정 LogWorth를 사용합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 18

<b>실행기 항목: 예</b>

```jsl


Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
Response Screening(
	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),
	X( Column Group( "Markers" ) ),
	Common Y Scale( 1 ),
	Common X Scale( 1 ),
	Volcano Plots Use FDR Axis( 1 ),
	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) )
);

```

