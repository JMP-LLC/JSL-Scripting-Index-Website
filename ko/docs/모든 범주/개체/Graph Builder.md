# Graph Builder



## 공유 항목 메시지

### Action

**구문:** obj &lt;&lt; Action

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

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

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

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Data Table Window;

```

### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
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

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

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

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
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

**구문:** obj &lt;&lt; Local Data Filter

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

**구문:** obj &lt;&lt; Paste Local Data Filter

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

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

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

**구문:** obj &lt;&lt; Remove Local Data Filter

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

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

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
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
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
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
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

**구문:** obj &lt;&lt; Sync to Data Table Changes

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

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**구문:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Graph Builder

**구문:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**설명:** 데이터 탐색에 사용할 수 있는 대화식 그래픽 인터페이스를 제공합니다. 열을 그래프 영역으로 드래그하여 산점도, 등고선 그림, 막대 차트, 영역 차트, 상자 그림, 히스토그램, 히트맵, 파이 차트, 트리맵, 모자이크 그림, 맵 등 다양한 그래프를 생성할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );

```

## 항목 메시지

### Add Element

**구문:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**설명:** 지정된 X 및 Y 위치에 새 그래프 요소를 추가합니다. 요소 규격에는 요소 이름이 포함됩니다. 요소 이름은 데이터 역할이 해당 옵션 값에 사용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 0.5 );
gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**구문:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**설명:** 지정된 역할 및 위치를 사용하여 그래프 빌더 모형에 새 변수를 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**구문:** obj &lt;&lt; Auto Stretching( state=0|1 )

**설명:** 포함 창을 사용하여 그래프 자동 늘리기 설정/해제 간에 전환합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Auto Stretching( 0 );

```

### Back Color

**구문:** obj &lt;&lt; Back Color( color )

**설명:** 그래프 주변의 전체 배경에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**구문:** obj &lt;&lt; Categorical Color Theme

**설명:** 범주에 사용되는 색상 테마를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**구문:** obj &lt;&lt; Continuous Color Theme

**설명:** 그래디언트에 사용되는 색상 테마를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Continuous Color Theme( "White to Black" );

```

### Done

**구문:** obj &lt;&lt; Done

**설명:** 제어판을 숨기고 모든 행 표집을 끕니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Done;

```

### Elements

**구문:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() ))&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시각화 요소를 식별합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),
	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) )
);

```

### Error Bar Offset

**구문:** obj &lt;&lt; Error Bar Offset

**설명:** 오차 막대의 오프셋을 설정하기 위한 대화상자를 엽니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 1 );
gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**구문:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**설명:** 0을 포함하도록 축 척도를 확장하는 데 사용할 승수입니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Extend Axis to Zero( 10 ),
	Variables( X( :Weight ), Y( :Height ) ),
	Elements( Line( X, Y ) )
);

```

### Extend Dual Axes to Zero

**구문:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**설명:** 왼쪽 축과 오른쪽 축이 모두 있을 때 0을 포함하도록 축 척도를 확장하는 데 사용할 승수입니다. 기본값은 "2"입니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 513, 465 ),
	Extend Dual Axes to Zero( 10 ),
	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),
	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) )
);

```

### Extend Parallel Y Axes to Zero

**구문:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**설명:** &apos;평행 Y 축&apos; 모드에서 0을 포함하도록 축 척도를 확장하는 데 사용할 승수입니다. 기본값은 "3"입니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Show Control Panel( 0 ),
	Parallel Axes( "Y Only" ),
	Extend Parallel Y Axes to Zero( 0 ),
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Line( X, Y ) ),
	Elements( Position( 1, 2 ), Line( X, Y ) )
);

```

### Fit to Window

**구문:** obj &lt;&lt; Fit to Window( "자동"|"켜짐"|"해제"|"화면비율 유지" )

**설명:** 보고서 자동 늘이기 동작을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Fit to Window( "Off" );

```

### Get Element

**구문:** obj &lt;&lt; Get Element( xposition, yposition, i )

**설명:** 지정된 x 및 y 위치에 대해 지정된 그래프 요소를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Get Element( 1, 1, 1 );

```

### Get Elements

**구문:** obj &lt;&lt; Get Elements( xposition, yposition )

**설명:** 지정된 x 및 y 위치에 대해 지정된 요소 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Get Elements( 1, 1 );

```

### Get Legend Display

**구문:** obj &lt;&lt; Get Legend Display

**설명:** 쿼리하거나 수정할 수 있는 그래프에 대한 범례 표시 상자를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Display;
item = lgnd << Get Item( 2, 1 );
item << Set Visible( 0 );

```

### Get Legend Server

**구문:** obj &lt;&lt; Get Legend Server

**설명:** 그래프의 범례 표시 및 해당 표시 세그먼트에 사용되는 정보가 포함된 개체를 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) )
);
lgnd = gb << Get Legend Server;
items = lgnd << Get Legend Items;
Show( items );

```

### Get N Elements

**구문:** obj &lt;&lt; Get N Elements( xposition, yposition )

**설명:** 지정된 x 및 y 위치에 대한 그래프 요소 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Get N Elements( 1, 1 );

```

### Get N Positions

**구문:** nrole

**설명:** 제공된 역할에 대해 사용 중인 위치 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Get N Positions( "X" );

```

### Get N Variables

**구문:** n = obj &lt;&lt; Get N Variables

**설명:** 사용 중인 변수 수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Get N Variables();

```

### Get Variable

**구문:** obj &lt;&lt; Get Variable( index )

**설명:** 변수 규격을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Get Variable( 1 );

```

### Get Variables

**구문:** list = obj &lt;&lt; Get Variables

**설명:** 사용 중인 변수에 대한 변수 지정 목록의 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Get Variables();

```

### Graph Spacing

**구문:** obj &lt;&lt; Graph Spacing( gap=1 )

**설명:** 그래프 패널 사이의 간격 크기를 설정합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Graph Spacing( 3 );

```

### Grid Color

**구문:** obj &lt;&lt; Grid Color( color )

**설명:** 그래프의 격자선에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Color( "Red" );

```

### Grid Transparency

**구문:** obj &lt;&lt; Grid Transparency( fraction=1 )

**설명:** 격자선의 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Graph Spacing( 5 ),
	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**구문:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**설명:** 결측값을 범주형 변수에 대한 별도의 수준으로 처리합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
:age[{10, 20, 30}] = .;
gb << Add Variable( {:age, Role( "Wrap" )} );
gb << Include Missing Categories( 1 );

```

### Launch Analysis

**구문:** obj &lt;&lt; Launch Analysis

**설명:** 현재 변수를 사용하여 분석을 시작합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Launch Analysis;

```

### Legend Floating Offset

**구문:** obj &lt;&lt; Legend Floating Offset

**설명:** 범례 위치가 "부동"으로 설정된 경우 범례의 오프셋(픽셀)을 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Legend Position( "Inside Floating" );

```

### Legend Position

**구문:** obj &lt;&lt; Legend Position( "오른쪽"|"아래쪽"|"내부 왼쪽"|"내부 오른쪽"|"내부 왼쪽 아래"|"내부 오른쪽 아래"|"내부 부동" )

**설명:** 범례 위치를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Legend Position( "Bottom" );

```

### Legend Settings

**구문:** obj &lt;&lt; Legend Settings

**설명:** 범례 특성을 수정하는 대화상자를 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 1 );
gb << Legend Settings();

```

### Level Fill Color

**구문:** obj &lt;&lt; Level Fill Color( color )

**설명:** 그래프의 수준 이름에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**구문:** obj &lt;&lt; Level Frame Color( color )

**설명:** 그래프 수준 이름 주변의 선에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**구문:** obj &lt;&lt; Level Spacing Color( color )

**설명:** 수준 라벨 사이 간격의 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**구문:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**설명:** 수준 라벨 사이 간격의 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**구문:** obj &lt;&lt; Level Text Color( color )

**설명:** 그래프의 수준 이름 텍스트에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Level Text Color( "Red" );

```

### Level Transparency

**구문:** obj &lt;&lt; Level Transparency( fraction=1 )

**설명:** 그래프의 수준 이름 프레임에 대한 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Level Transparency( .2 );

```

### Level Underline

**구문:** obj &lt;&lt; Level Underline( state=0|1 )

**설명:** 그래프의 수준 이름에 밑줄을 적용하거나 밑줄을 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Level Frame Color( "Blue" );
gb << Level Underline( 1 );

```

### Lighten large fills

**구문:** obj &lt;&lt; Lighten large fills( state=0|1 )

**설명:** 큰 영역을 채우는 파이, 트리맵 및 모자이크 요소의 색상을 자동으로 연하게 합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Lighten large fills( 1 );

```

### Link Page Axes

**구문:** obj &lt;&lt; Link Page Axes( "없음"|"X만"|"Y만"|"X 및 Y" )

**설명:** 페이지 그룹 수준 전반에 걸쳐 연결되는 축을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :sex ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**구문:** obj &lt;&lt; Lock Scales( state=0|1 )

**설명:** 축 및 그래디언트 범위를 잠가 데이터 또는 필터링의 변화에 따라 변경되지 않도록 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Lock Scales( 1 );

```

### Make into Data Table

**구문:** obj &lt;&lt; Make into Data Table

**설명:** 그래프 이미지를 포함하는 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Make into Data Table;

```

### Order Statistic

**구문:** obj &lt;&lt; Order Statistic( "N"|"평균"|"중앙값"|"최빈값"|"기하평균"|"최소값"|"최대값"|"범위"|"합"|"누적합"|"누적 백분율"|"% 총계"|"% 요인"|"% 총 합계"|"표준편차"|"분산"|"표준 오차"|"CV"|"사분위수 범위"|"중앙 절대 편차"|"1사분위수"|"3사분위수"="평균" )

**설명:** 그래프의 변수에 대해 Order By 메시지를 사용할 경우 사용되는 요약 통계량을 기반으로 기본 순서를 설정합니다. 기본값은 "평균"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
gb = dt << Graph Builder(
	Order Statistic( "Max" ),
	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),
	Elements( Box Plot( X, Y ) )
);

```

### Overlay Auto Line Styles Limit

**구문:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**설명:** 색상 변수가 있는 경우 중첩 인코딩에 자동 설정의 선 스타일을 사용할 중첩 수준 수를 제한합니다. 기본값은 "6"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Line Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Line( X, Y ) )
);

```

### Overlay Auto Marker Styles Limit

**구문:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**설명:** 색상 변수가 있는 경우 중첩 인코딩에 자동 설정의 표식 스타일을 사용할 중첩 수준 수를 제한합니다. 기본값은 "62"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Overlay Auto Marker Styles Limit( 0 ),
	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),
	Elements( Points( X, Y ) )
);

```

### Page Count Limit

**구문:** obj &lt;&lt; Page Count Limit( count=200 )

**설명:** 의도치 않은 성능 저하를 방지하기 위해 페이지 변수에 대해 생성되는 페이지의 최대 개수를 설정합니다. 기본값은 "200"입니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Name ) ), Elements( Points( X, Y ) ) );
gb << Page Count Limit( 5 );

```

### Page Gap Size

**구문:** obj &lt;&lt; Page Gap Size( gap=25 )

**설명:** 페이지 그룹 사이의 간격 크기를 설정합니다. 기본값은 "25"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );
gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**구문:** obj &lt;&lt; Page Level Fill Color( color )

**설명:** 그래프의 수준 이름에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );
gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**구문:** obj &lt;&lt; Page Level Frame Color( color )

**설명:** 그래프 수준 이름 주변의 선에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );
gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**구문:** obj &lt;&lt; Page Level Text Color( color )

**설명:** 그래프의 수준 이름 텍스트에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );
gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**구문:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**설명:** 그래프의 수준 이름 프레임에 대한 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );
gb << Page Level Transparency( .2 );

```

### Page Level Underline

**구문:** obj &lt;&lt; Page Level Underline( state=0|1 )

**설명:** 그래프의 수준 이름에 밑줄을 적용하거나 밑줄을 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder( Variables( X( :Age ), Y( :Height ), Page( :Sex ) ), Elements( Smoother( X, Y ) ) );
gb << Page Level Frame Color( "Blue" );
gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**구문:** obj &lt;&lt; Parallel Axis Merging( "항상"|"유사성 낮음"|"유사성 중간"|"유사성 높음"|"안 함" )

**설명:** 자동 척도 결합 설정에 평행 독립 대신 평행 병합을 선택해야 하는 시기를 결정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**구문:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**설명:** 모든 Y 축이 같은 그래프를 공유합니다. 평행 좌표와 비슷하지만 X 변수를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :age ), Y( :height ), Y( :weight ) ),
	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) )
);
gb << Parallel Y Axes( 1 );

```

### Random Seed

**구문:** obj &lt;&lt; Random Seed( number )

**설명:** 랜덤 지터에 대해 특정 시드값을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ) ),
	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) )
);
Wait( 1 );
gb << Random Seed( 123456 );

```

### Relative Sizes

**구문:** Relative Sizes(axis, matrix of relative size values)

**설명:** 연속된 여러 축에 각각 할당되는 공간 비율을 결정합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Size( 435, 352 ),
	Show Control Panel( 0 ),
	Variables( X( :weight ), Y( :height ), Y( :sex ) ),
	Relative Sizes( "Y", [4 1] ),
	Elements( Position( 1, 1 ), Points( X, Y ) ),
	Elements( Position( 1, 2 ), Points( X, Y ) )
);

```

### Remove Element

**구문:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**설명:** 지정된 X 및 Y 위치에 있는 그래프 요소를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 0.5 );
gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**구문:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**설명:** 그래프 빌더 모형에서 인덱스 또는 지정된 열 이름, 역할 및 위치로 지정된 변수를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 0.5 );
gb << Add Variable( {:age, Role( "Wrap" )} );
Wait( 0.5 );
gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**구문:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**설명:** 격자의 연결된 페이지 축을 각 그래프에 대해 한 번씩 표시할지 아니면 그래프의 각 행 또는 열에 대해 한 번씩 표시할지를 결정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Size( 470, 552 ),
	Variables( X( :height ), Y( :weight ), Page( :age ) ),
	Elements( Points( X, Y ), Smoother( X, Y ) )
);
gb << Link Page Axes( "X and Y" );
gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**구문:** obj &lt;&lt; Sampling( number )

**설명:** 지정된 비율 또는 개수를 사용하여 데이터의 부분집합을 무작위로 선택합니다. 데이터가 크고 그래프가 계속 변경될 때 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Sampling( 20 );

```

### Set Alpha Level

**구문:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**설명:** 신뢰 곡선에 사용되는 유의 수준을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Set Alpha Level( 0.10 );

```

### Set α Level

**구문:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**설명:** 신뢰 곡선에 사용되는 유의 수준을 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**구문:** obj &lt;&lt; Show Control Panel( state=0|1 )

**설명:** 제어판을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**구문:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**설명:** 제외된 행을 그림에 표시하거나 숨깁니다. 이 옵션을 선택하면 제외된 행이 관리이탈 점 개수에 포함되지만 수치 계산에서는 제외됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
dt << Select Rows( 1 :: 5 );
dt << Exclude();
gb << Show Excluded Rows( 1 );

```

### Show Footer

**구문:** obj &lt;&lt; Show Footer( state=0|1 )

**설명:** 바닥글 텍스트를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show Footer( 0 );

```

### Show Legend

**구문:** obj &lt;&lt; Show Legend( state=0|1 )

**설명:** 그래프 오른쪽에 범례를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show Legend( 1 );

```

### Show Subtitle

**구문:** obj &lt;&lt; Show Subtitle( state=0|1 )

**설명:** 그래프 부제목을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show Subtitle( 1 );

```

### Show Title

**구문:** obj &lt;&lt; Show Title( state=0|1 )

**설명:** 그래프 제목을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show Title( 0 );

```

### Show X Axis

**구문:** obj &lt;&lt; Show X Axis( state=0|1 )

**설명:** X 축을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show X Axis( 0 );

```

### Show X Axis Title

**구문:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**설명:** X 축 제목을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show X Axis Title( 0 );

```

### Show Y Axis

**구문:** obj &lt;&lt; Show Y Axis( state=0|1 )

**설명:** Y 축을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**구문:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**설명:** Y 축 제목을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Show Y Axis Title( 0 );

```

### Size

**구문:** obj &lt;&lt; Size( width, height )

**설명:** 그래프 크기를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Size( 808, 586 );

```

### Spacing Borders

**구문:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**설명:** 내부 그래프 패널의 테두리를 설정합니다. 기본값은 "0"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**구문:** obj &lt;&lt; Subtitle Alignment( "왼쪽"|"가운데"|"오른쪽"|"자동" )

**설명:** 그래프 부제목의 맞춤을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**구문:** obj &lt;&lt; Subtitle Span( "전체"|"그래프 내용" )

**설명:** 그래프 부제목의 범위를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**구문:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**설명:** 그래프의 다양한 요소에 사용되는 기본 요약 통계량을 설정합니다. 막대 및 선 요소의 경우 기본값은 평균입니다. 기본값은 "평균"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),
	Summary Statistic( "Sum" ),
	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) )
);

```

### Title Alignment

**구문:** obj &lt;&lt; Title Alignment( "왼쪽"|"가운데"|"오른쪽" )

**설명:** 그래프 제목의 맞춤을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Title Alignment( "Left" );

```

### Title Fill Color

**구문:** obj &lt;&lt; Title Fill Color( color )

**설명:** 그래프의 제목 배경 채우기에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**구문:** obj &lt;&lt; Title Frame Color( color )

**설명:** 그래프 제목 프레임 주변의 선에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Title Frame Color( "Blue" );

```

### Title Span

**구문:** obj &lt;&lt; Title Span( "전체"|"그래프 내용" )

**설명:** 그래프 제목의 범위를 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Title Span( "Graph" );

```

### Title Text Color

**구문:** obj &lt;&lt; Title Text Color( color )

**설명:** 그래프의 제목 텍스트에 대한 색상을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Title Text Color( "Red" );

```

### Title Transparency

**구문:** obj &lt;&lt; Title Transparency( fraction=1 )

**설명:** 그래프의 제목 프레임에 대한 투명도를 설정합니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Title Transparency( .2 );

```

### Title Underline

**구문:** obj &lt;&lt; Title Underline( state=0|1 )

**설명:** 그래프의 제목에 밑줄을 적용하거나 밑줄을 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Title Frame Color( "Blue" );
gb << Title Underline( 1 );

```

### Update Element

**구문:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**설명:** 기존 요소의 특성을 수정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 0.5 );
gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**구문:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**설명:** 각 수준마다 고유 색상이 있는 경우 범례 수준을 행 색상으로 초기화합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
gb << Use row colors for levels( 1 );

```

### Variables

**구문:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; )&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시각화에 사용되는 변수를 정의합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**구문:** obj &lt;&lt; X Group Edge( "위쪽"|"아래쪽" )

**설명:** X 그룹에 대한 축을 위쪽 또는 아래쪽으로 이동합니다. 기본값은 "Top"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ), Smoother( X, Y ) ) );
Wait( 1 );
gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**구문:** obj &lt;&lt; Y Group Edge( "왼쪽"|"오른쪽" )

**설명:** Y 그룹에 대한 축을 왼쪽 또는 오른쪽으로 이동합니다. 기본값은 "Right"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**구문:** obj &lt;&lt; Y Group Level Orientation( "수평"|"수직" )

**설명:** Y 그룹 수준 라벨 텍스트가 가로 방향인지 아니면 세로 방향인지(회전됨)를 결정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**구문:** obj &lt;&lt; Y Group Title Orientation( "수평"|"수직" )

**설명:** Y 그룹 제목 라벨 텍스트가 가로 방향인지 아니면 세로 방향인지(회전됨)를 결정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),
	Elements( Smoother( X, Y ) )
);
Wait( 1 );
gb << Y Group Title Orientation( "Horizontal" );

```

## Graph Builder Elements

### 항목 메시지

#### Area

**구문:** obj &lt;&lt; Area

**설명:** 영역: 범주별로 요약된 반응을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Area( X, Y ) ) );

```

#### Bar

**구문:** obj &lt;&lt; Bar

**설명:** 막대: 범주별로 요약된 반응을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Bar( X, Y ) ) );

```

#### Box Plot

**구문:** obj &lt;&lt; Box Plot

**설명:** 상자 그림: 사분위수 및 이상치를 사용하여 변수 분포의 요약 보기를 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Box Plot( X, Y ) ) );

```

#### Caption Box

**구문:** obj &lt;&lt; Caption Box

**설명:** 캡션 상자: 데이터에 대한 요약 통계량 값을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Line( X, Y ), Caption Box( X, Y ) ) );

```

#### Contour

**구문:** obj &lt;&lt; Contour

**설명:** 등고선: 데이터 밀도의 영역(또는 색상 변수가 포함된 값 등고선)을 표시합니다. X가 범주형일 경우 바이올린 그림을 생성합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Contour( X, Y ) ) );

```

#### Ellipse

**구문:** obj &lt;&lt; Ellipse

**설명:** 타원: 이변량 정규 밀도 타원을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Ellipse( X, Y ) ) );

```

#### Formula

**구문:** obj &lt;&lt; Formula

**설명:** 계산식: 열 계산식으로 정의된 함수를 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), Y( Transform Column( "f", Formula( Sin( :height / 5 ) ) ) ) ),
	Elements( Formula( X, Y ) )
);

```

#### Heatmap

**구문:** obj &lt;&lt; Heatmap

**설명:** 히트맵: X 및 Y 범주에 대한 색상을 사용하여 총계를 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Heatmap( X, Y ) ) );

```

#### Histogram

**구문:** obj &lt;&lt; Histogram

**설명:** 히스토그램: 계급화를 사용하여 변수 분포를 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :weight ) ), Elements( Histogram( X ) ) );

```

#### Line

**구문:** obj &lt;&lt; Line

**설명:** 선: 범주별로 요약된 반응을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Line( X, Y ) ) );

```

#### Line Of Fit

**구문:** obj &lt;&lt; Line Of Fit

**설명:** 적합선: 연속 X 및 Y에 대한 신뢰 구간과 함께 선형 회귀를 표시합니다. 범주형 X에 대해 평균을 적합시킵니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Line of Fit( X, Y ) ) );

```

#### Map Shapes

**구문:** obj &lt;&lt; Map Shapes

**설명:** 맵 셰이프: 일반적으로 색상 변수를 사용하여 맵 셰이프 변수로 정의된 영역을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/SATByYear.jmp" );
Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ), Elements( Map Shapes() ) );

```

#### Mosaic

**구문:** obj &lt;&lt; Mosaic

**설명:** 모자이크: X 및 Y 범주에 대한 크기를 사용하여 총계를 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :sex ) ), Elements( Mosaic( X, Y ) ) );

```

#### Parallel

**구문:** obj &lt;&lt; Parallel

**설명:** 병렬: 각 행에 대해 연결선과 함께 병렬 축을 따라 여러 변수를 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder(
	Variables( X( :height ), X( :weight, Position( 1 ) ), X( :age, Position( 1 ) ) ),
	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ) ) )
);

```

#### Pie

**구문:** obj &lt;&lt; Pie

**설명:** 파이: 전체의 부분을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ) ), Elements( Pie( X ) ) );

```

#### Points

**구문:** obj &lt;&lt; Points

**설명:** 점: 데이터 값의 산점도를 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Points( X, Y ) ) );

```

#### Smoother

**구문:** obj &lt;&lt; Smoother

**설명:** 평활기: 데이터를 통과하는 평활 곡선을 표시합니다. 알 수 없는 관계를 가진 연속형 X 및 Y에 가장 적합합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :height ), Y( :weight ) ), Elements( Smoother( X, Y ) ) );

```

#### Treemap

**구문:** obj &lt;&lt; Treemap

**설명:** 트리맵: 많은 범주를 기준으로 요약된 반응을 표시합니다.

```jsl

Names Default To Here( 1 );
Open( "$SAMPLE_DATA/Big Class.jmp" );
Graph Builder( Variables( X( :age ), Y( :weight ) ), Elements( Treemap( X, Y ) ) );

```

