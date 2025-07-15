# Process Screening



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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

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
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
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
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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

**구문:** obj = Process Screening(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Process Screening

**구문:** Process Screening( Process Variables( columns ) )

**설명:** 안정성, 공정 능력, 관리도 검정 및 변화(흐름)를 포함한 몇 가지 관점에서 여러 공정을 검토합니다. 주의가 필요한 공정에 초점을 맞추는 데 도움이 됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

## 열

### By

**구문:** obj = Process Screening(...&lt;By( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ), By( _bycol ) );

```

### Grouping

**구문:** obj = Process Screening(...&lt;Grouping( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 그룹화 열의 모든 수준 조합에서 각 공정 변수를 분석합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Process Variables

**구문:** obj = Process Screening(...Process Variables( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 측정값이 포함된 공정 데이터 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Subgroup

**구문:** obj = Process Screening(...&lt;Subgroup( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 하나 이상의 부분군 변수를 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Time

**구문:** obj = Process Screening(...&lt;Time( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 데이터의 시간 순서를 지정하는 열을 할당합니다. 계산하기 전에 시간 변수를 기준으로 공정 데이터가 정렬됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Prices.jmp" );
obj = dt << Process Screening(
	Process Variables( :Price ),
	Grouping( :Series ),
	Control Chart Type( "XBar and R" ),
	Time( :Date ),
	Subgroup Sample Size( 3 )
);

```

### n Trials

**구문:** obj = Process Screening(...&lt;n Trials( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시행 횟수를 포함하는 열을 할당합니다. 이 값은 P 차트에서 불량품 비율의 분모로 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Washers.jmp" );
dt << Process Screening(
	Process Variables( :"# defective"n ),
	Control Chart Type( "Proportion" ),
	n Trials( :Lot Size 2 ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] )
);

```

## 항목 메시지

### Action Lower Quantile Prob

**구문:** obj = Process Screening(...Action Lower Quantile Prob( number=. )...)

**설명:** 작업 한계 값을 결정하는 확률을 지정합니다. 개수 프로세스의 경우 한계 테이블에 작업 한계를 지정하지 않으면 이 확률을 기반으로 추정된 분위수에서 값이 설정됩니다. 기본값은 "."입니다.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Action Upper Quantile Prob

**구문:** obj = Process Screening(...Action Upper Quantile Prob( number=0.9985 )...)

**설명:** 작업 한계 값을 결정하는 확률을 지정합니다. 개수 프로세스의 경우 한계 테이블에 작업 한계를 지정하지 않으면 이 확률을 기반으로 추정된 분위수에서 값이 설정됩니다. 기본값은 "0.9985"입니다.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Alarm Graph

**구문:** obj &lt;&lt; Alarm Graph( state=0|1 )

**설명:** Y 축에는 경보가 발생한 공정, X 축에는 발생 시간을 나타낸 경보 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);

```

### Alert Lower Quantile Prob

**구문:** obj = Process Screening(...Alert Lower Quantile Prob( number=. )...)

**설명:** 경고 한계 값을 결정하는 확률을 지정합니다. 개수 프로세스의 경우 한계 테이블에 경고 한계를 지정하지 않으면 이 확률을 기반으로 추정된 분위수에서 값이 설정됩니다. 기본값은 "."입니다.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Alert Upper Quantile Prob

**구문:** obj = Process Screening(...Alert Upper Quantile Prob( number=0.975 )...)

**설명:** 경고 한계 값을 결정하는 확률을 지정합니다. 개수 프로세스의 경우 한계 테이블에 경고 한계를 지정하지 않으면 이 확률을 기반으로 추정된 분위수에서 값이 설정됩니다. 기본값은 "0.975"입니다.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Chart Options Drift Graph

**구문:** obj &lt;&lt; Chart Options Drift Graph( options )

**설명:** &apos;선택 항목 흐름 그래프&apos; 옵션으로 생성된 차트에 대한 추가 옵션을 스크립팅할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ), Connect Points( 0 ) );

```

### Chart Options Graphlet

**구문:** obj &lt;&lt; Chart Options Graphlet( options )

**설명:** Graphlet에 대한 추가 옵션을 스크립팅할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Process Variables( :NPN1, :PNP1, :PNP2, :NPN2, :PNP3 ),
	Subgroup( :lot_id, :wafer ),
	Control Chart Type( "XBar and R" ),
	Process Performance Graph( 1 ),
	Chart Options Graphlet( Show Markers( 1 ) ),
	SendToReport(
		Dispatch( {"Process Performance Graph"}, "ProcessScreening Graph", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 4 ),
				Index Row( 4 ),
				UniqueID( 4 ),
				FoundPt( {320, 564} ),
				Origin( {1, 0.24} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);

```

### Chart Options as Selected

**구문:** obj &lt;&lt; Chart Options as Selected( options )

**설명:** &apos;선택 항목 차트 표시&apos; 옵션으로 생성된 차트에 대한 추가 옵션을 스크립팅할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Chart Options for Selected

**구문:** obj &lt;&lt; Chart Options for Selected( options )

**설명:** &apos;선택 항목에 대한 차트 표시&apos; 옵션으로 생성된 차트에 대한 추가 옵션을 스크립팅할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Color Out of Spec Values

**구문:** obj &lt;&lt; Color Out of Spec Values

**설명:** 규격 한계를 기반으로 데이터 테이블의 값에 색상을 적용합니다. 파란색은 값이 규격 하한보다 낮음을 나타내고 빨간색은 값이 규격 상한보다 높음을 나타냅니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :PNP3, :IVP1, :IVP2 ) );
obj << Color Out of Spec Values;

```

### Color Selected Items

**구문:** obj &lt;&lt; Color Selected Items( color )

**설명:** 지정된 색상을 요약 테이블에서 선택한 행에 적용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Find and Select( "PNP1" ),
	Color Selected Items( "Blue" )
);
obj << Find and Select( "NPN1" );
obj << Color Selected Items( "Red" );
obj << Find and Select( "NPN2" );

```

### Control Chart Builder

**구문:** obj &lt;&lt; Control Chart Builder

**설명:** 요약 테이블에서 선택한 공정의 관리도 빌더 보고서 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Control Chart Builder
);

```

### Control Chart Type

**구문:** obj = Process Screening(...Control Chart Type( "Indiv and MR"|"XBar and R"|"XBar and S"|"XBar MR and R"|"XBar MR and S"|"Count"|"Nonnegative Continuous"|"Proportion" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 다섯 가지 관리도 계산 유형 중 하나를 지정합니다. 기본값은 "I-MR"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" )
);

```

### Count

**구문:** obj &lt;&lt; Count( state=0|1 )

**설명:** 요약 테이블에 개수 열을 표시하거나 숨깁니다. 이 열에는 관측값 수가 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Count( 0 );

```

### Cp

**구문:** obj &lt;&lt; Cp( state=0|1 )

**설명:** 요약 테이블에 Cp 열을 표시하거나 숨깁니다. 이 열에는 목표 및 흐름 문제가 해결된 경우의 잠재적 공정 능력이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cp( 1 ) );

```

### Cpk

**구문:** obj &lt;&lt; Cpk( state=0|1 )

**설명:** 요약 테이블에 Cpk 열을 표시하거나 숨깁니다. 이 열에는 정규 분포를 가정하고 군내 표준편차 또는 군간-군내 표준편차에 기반한 Cpk 단기 런 공정 능력 지수가 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cpk( 0 ) );
Wait( 1 );
obj << Cpk( 1 );

```

### Drift Alpha

**구문:** obj = Process Screening(...Drift Alpha( number=. )...)

**설명:** 흐름 감지의 위치에 대한 Holt-Winters 평활 가중치를 지정합니다. 일반적으로 이 값은 지정하지 않고 추정됩니다. 값을 지정할 경우 시작 스크립트에서 지정해야 합니다. 기본값은 "."입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Alpha( .6 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Beta

**구문:** obj = Process Screening(...Drift Beta( number=.05 )...)

**설명:** Specifies the weight that is used in the Holt Double-Exponential Smoother for drift detection. 기본값은 ".05"입니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Beta( .1 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Graph Selected

**구문:** obj &lt;&lt; Drift Graph Selected( &lt;{ process list }&gt; )

**설명:** 요약 테이블에서 선택한 각 공정에 대한 흐름 그래프를 표시합니다. 표시된 값은 Holt 이중 지수 평활 모형에서 구한 기울기 추정값입니다.

**JMP추가된 버전:** 14

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), );
Wait( 1 );
obj << Drift Graph Selected( {{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}} );

```

### Drift Summaries

**구문:** obj &lt;&lt; Drift Summaries( state=0|1 )

**설명:** 요약 테이블에 흐름 요약 열을 표시하거나 숨깁니다. 이러한 열에는 평균 상향 흐름, 평균 하향 흐름 및 평균 절대 흐름이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Drift Summaries( 1 ) );

```

### Enable All Tests

**구문:** obj &lt;&lt; Enable All Tests

**설명:** 경보 비율 및 총계에 Nelson 검정을 모두 포함합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Enable All Tests );

```

### Expected Out of Spec Rate

**구문:** obj &lt;&lt; Expected Out of Spec Rate( state=0|1 )

**설명:** 요약 테이블에 기대 규격 이탈 비율 열을 표시하거나 숨깁니다. 이 열에는 규격 한계를 벗어나는 관측값의 기대 비율이 포함됩니다. 기대 규격 이탈 비율 값은 안정적이고 정규 분포를 따르는 공정을 가정하고 전체 표준편차를 사용합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Expected Out of Spec Rate( 1 ) );

```

### Filter Where

**구문:** obj &lt;&lt; Filter Where( condition )

**설명:** 요약 테이블에서 공정을 필터링하고 제거합니다. 필터는 지정된 조건을 기반으로 합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Filter Where( Alarm Rate > 0 ) );
Wait( 1 );
obj << Reset Filter;
obj << Filter Where( Stability Index > 1.3 | Mean <= 4.3 );

```

### Find and Select

**구문:** obj &lt;&lt; Find and Select( condition )

**설명:** 검색 문자열이 나타나는 모든 열과 그룹을 찾고 요약 테이블에서 해당 공정을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);

```

### Goal Plot

**구문:** obj &lt;&lt; Goal Plot( state=0|1 )

**설명:** 각 변수에 대한 점이 포함된 그림을 표시하거나 숨깁니다. 규격으로 정규화된 평균 변화가 가로 축에 표시되고 규격으로 정규화된 표준편차가 세로 축에 표시됩니다. 이 옵션은 하나 이상의 공정 변수에 대해 규격 한계가 정의된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Goal Plot( 1 ) );

```

### KSigma

**구문:** obj = Process Screening(...KSigma( number=3 )...)

**설명:** 중심선을 기준으로 관리 한계가 있어야 하는 표준편차 수(시그마 단위)를 지정합니다. 기본값은 "3"입니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( X( :Process ), Y( Eval( 5 :: 132 ) ), K Sigma( 4 ) );

```

### KSigma for Proportion

**구문:** obj = Process Screening(...KSigma for Proportion( number=3 )...)

**설명:** 중심선을 기준으로 관리 한계가 있어야 하는 표준편차 수(시그마 단위)를 지정합니다. 기본값은 "3"입니다.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	K Sigma for Proportion( 2.5 ),
	Use Upper Limit( 1 ),
	Use Lower Limit( 1 )
);

```

### Keep Distribution Details

**구문:** obj = Process Screening(...Keep Distribution Details( state=0|1 )...)

**설명:** 보고서에 표시할 수 있도록 모든 분포 적합에 대한 모수 추정값 및 분위수 상세 정보를 유지합니다.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Keep Distribution Details( 1 ),
	SendToReport(
		Dispatch( {}, "Poisson λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin σ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB σ", NumberColBox, {Visibility( "Visible" )} )
	)
);

```

### Largest Downshift

**구문:** obj &lt;&lt; Largest Downshift( state=0|1 )

**설명:** 요약 테이블에 최대 하향 변화 열과 하향 변화 위치 열을 표시하거나 숨깁니다. 이러한 열에는 계열에서 1 * 군내 표준편차 단위를 초과하는 최대 하향 변화와 이 변화의 발생 위치가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Largest Downshift( 1 ) );

```

### Largest Upshift

**구문:** obj &lt;&lt; Largest Upshift( state=0|1 )

**설명:** 요약 테이블에 최대 상향 변화 열과 상향 변화 위치 열을 표시하거나 숨깁니다. 이러한 열에는 계열에서 1 * 군내 표준편차 단위를 초과하는 최대 상향 변화와 이 변화의 발생 위치가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Largest Upshift( 1 ) );

```

### Latest Out of Spec

**구문:** obj &lt;&lt; Latest Out of Spec( state=0|1 )

**설명:** 요약 테이블에 최근 규격 이탈 열을 표시하거나 숨깁니다. 이 열에는 규격 한계를 벗어난 가장 최근 관측값과 마지막 관측값 사이의 관측값 수가 포함됩니다. 마지막 관측값이 규격 한계를 벗어나는 경우 최근 규격 이탈 값은 1입니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Latest Out of Spec( 0 ) );
Wait( 1 );
obj << Latest Out of Spec( 1 );

```

### Make Detailed Shift Data

**구문:** obj = Process Screening(...Make Detailed Shift Data( state=0|1 )...)

**설명:** Stores all of the shift information so that it can be saved to a data table later using the Save Shift Table option. This option must be specified in the launch script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Maximum

**구문:** obj &lt;&lt; Maximum( state=0|1 )

**설명:** Shows or hides the Maximum for Count and Nonnegative Continuous chart types. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time )
);
Wait( 1 );
obj << Maximum( 0 );

```

### Mean

**구문:** obj &lt;&lt; Mean( state=0|1 )

**설명:** 요약 테이블에 평균 열을 표시하거나 숨깁니다. 이 열에는 공정 데이터의 평균이 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Mean( 0 );

```

### Minimum Process Length

**구문:** obj = Process Screening(...Minimum Process Length( number=3 )...)

**설명:** 공정이 분석에 포함되기 위해 필요한 최소 데이터 값 개수를 지정합니다. 기본값은 "3"입니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Minimum Process Length( 40 ) );

```

### Moving Range Limit Exceeded

**구문:** obj &lt;&lt; Moving Range Limit Exceeded( state=0|1 )

**설명:** 요약 테이블에 이동 범위 한계 초과 열을 표시하거나 숨깁니다. 이 열에는 삼원 관리도 계산에서 이동 범위 한계를 초과하는 부분군의 수가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );
obj = dt << Process Screening(
	Y( :Fill Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar MR and R" ),
	Moving Range Limit Exceeded( 1 )
);

```

### N Subgroups

**구문:** obj &lt;&lt; N Subgroups( state=0|1 )

**설명:** 요약 테이블에 부분군 수 열을 표시하거나 숨깁니다. 이 열에는 부분군 수가 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Control Chart Type( "XBar and R" ) );
Wait( 1 );
obj << N Subgroups( 0 );

```

### Out of Spec Count

**구문:** obj &lt;&lt; Out of Spec Count( state=0|1 )

**설명:** 요약 테이블에 규격 이탈 개수 열을 표시하거나 숨깁니다. 이 열에는 규격 한계를 벗어나는 관측값의 수가 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Count( 0 ) );
Wait( 1 );
obj << Out of Spec Count( 1 );

```

### Out of Spec Rate

**구문:** obj &lt;&lt; Out of Spec Rate( state=0|1 )

**설명:** 요약 테이블에 규격 이탈 비율 열을 표시하거나 숨깁니다. 이 열에는 규격 한계를 벗어나는 관측값의 비율이 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Rate( 0 ) );
Wait( 1 );
obj << Out of Spec Rate( 1 );

```

### Outlier Threshold

**구문:** obj = Process Screening(...Outlier Threshold( number=5 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 관측값을 이상치로 처리하기 위해 해당 관측값과 두 이웃 사이의 거리를 사용하는 경우 기준으로 사용할 군내 표준편차 단위 수를 지정합니다. 기본값은 "5"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Outlier Threshold( 1.1 ),
	Shift Graph( 1 )
);

```

### Overall Sigma

**구문:** obj &lt;&lt; Overall Sigma( state=0|1 )

**설명:** 요약 테이블에 전체 표준편차 열을 표시하거나 숨깁니다. 이 열에는 모든 관측값에 기반한 표준편차 추정값이 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Overall Sigma( 0 );

```

### Performance Graph Boundaries

**구문:** obj &lt;&lt; Performance Graph Boundaries( &lt;Capability Ppk boundary, Stability Ratio boundary&gt; )

**설명:** 공정 성능 그래프에서 공정 능력 Ppk 대 안정성 비율 영역의 경계를 지정합니다. 이 옵션의 인수를 지정하지 않으면 경계를 지정할 수 있는 창이 열립니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Select All, Process Performance Graph( 1 ) );
Wait( 1 );
obj << Performance Graph Boundaries( 1.7, 1.2 );

```

### Ppk

**구문:** obj &lt;&lt; Ppk( state=0|1 )

**설명:** 요약 테이블에 Ppk 열을 표시하거나 숨깁니다. 이 열에는 정규 분포를 가정하고 전체 표준편차에 기반한 Ppk 장기 런 공정 능력 지수가 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Ppk( 0 ) );
Wait( 1 );
obj << Ppk( 1 );

```

### Ppk Capability Boundary

**구문:** obj &lt;&lt; Ppk Capability Boundary( number=1.33 )

**설명:** 공정 성능 그래프의 공정 능력 Ppk에 대해 공정 능력이 있는 영역과 공정 능력이 없는 영역 간의 경계를 지정합니다. 기본값은 "1.33"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Ppk Capability Boundary( 1.7 ),
	Process Performance Graph( 1 )
);

```

### Process Capability

**구문:** obj &lt;&lt; Process Capability

**설명:** 요약 테이블에서 선택한 공정의 개별 상세 정보 보고서를 보여 주는 공정 능력 보고서 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Select All, Process Capability );

```

### Process Performance Graph

**구문:** obj &lt;&lt; Process Performance Graph( state=0|1 )

**설명:** 색상이 지정된 네 개의 사분면을 사용하여 공정 능력 Ppk 대 안정성 비율 그래프를 표시하거나 숨깁니다. 기본적으로 안정성 비율이 1.5를 초과하면 공정이 불안정함을 나타내고 Ppk가 1.33보다 작으면 공정 능력이 없음을 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Select All, Process Performance Graph( 1 ) );

```

### Process Potential Graph

**구문:** obj &lt;&lt; Process Potential Graph( state=0|1 )

**설명:** 세로 축에 Cp를 나타내고 가로 축에 % 측정 시그마^2을 나타내는 공정 잠재력 그래프를 표시하거나 숨깁니다. 이 그래프는 측정 시스템이나 공정을 개선하여 얻을 수 있는 상대적 이점을 보여 줍니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Coating.jmp" );
Column( "Weight" ) << Set Property(
	"Process Screening",
	{Centerline( 20.5 ), Specified Sigma( 1.5 ), Measurement Sigma( .8 )}
);
Column( "Weight" ) << Set Property( "Spec Limits", {LSL( 17 ), USL( 24 )} );
obj = dt << Process Screening(
	Process Variables( :Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar and R" ),
	Out of Spec Count( 0 ),
	Out of Spec Rate( 0 ),
	Latest Out of Spec( 0 ),
	Process Potential Graph( 1 )
);

```

### Range Limit Exceeded

**구문:** obj &lt;&lt; Range Limit Exceeded( state=0|1 )

**설명:** 요약 테이블에 범위 한계 초과 열을 표시하거나 숨깁니다. 이 열에는 R, S 또는 MR 차트 계산에서 관리 상한을 초과하는 부분군의 수가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Range Limit Exceeded( 1 ) );

```

### Relaunch Selected Processes

**구문:** obj &lt;&lt; Relaunch Selected Processes

**설명:** Relaunches the Process Screening platform to create a new report that contains only the selected processes from the original report.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	RowStates( [51 1, 52 1, 66 1, 85 1] )
);
Wait( 1 );
obj << Relaunch Selected Processes;

```

### Remove

**구문:** obj = Process Screening(...Remove( columns )...)

**설명:** 분석에서 제외할 공정을 지정합니다. 이 옵션은 시작 스크립트에서 지정해야 하며 열 그룹이 지정된 경우에만 적용됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( dt << get Column Group( "Processes" ) ),
	Remove( :NPN2 ),
	Process Performance Graph( 1 )
);

```

### Remove Selected Items

**구문:** obj &lt;&lt; Remove Selected Items

**설명:** 요약 테이블에서 선택한 행을 제거하고 해당 공정 없이 분석을 다시 실행합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
Wait( 1 );
obj << Remove Selected Items;

```

### Reset Filter

**구문:** obj &lt;&lt; Reset Filter

**설명:** 현재 요약 테이블에 적용된 필터를 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
Wait( 1 );
obj << Filter Where( Alarm Rate > 0 );
Wait( 3 );
obj << Reset Filter;

```

### RowStates

**구문:** obj &lt;&lt; RowStates( matrix )

**설명:** 요약 테이블의 행에 대한 행 상태를 설정합니다. 입력은 m x 2 행렬입니다. 첫 번째 열에는 행 번호(0에서 시작하는 원래 순서)가 포함되고 두 번째 열에는 숫자 행 상태 값이 포함됩니다. 숫자 행 상태 값에 대한 자세한 내용은 JMP 사용자 가이드를 참조하십시오.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" ),
	RowStates( [0 1, 5 768] ) //Select first and Color Red the sixth of original order
);
Wait( 1 );
// sort columns to show original order
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 3, 1 )} ) );
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 2, 1 )} ) );

```

### Save Details Table

**구문:** obj &lt;&lt; Save Details Table

**설명:** 공정과 그룹화 변수의 각 조합에 대한 검정 경보 정보를 포함하는 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Details Table;

```

### Save Selected Details

**구문:** obj &lt;&lt; Save Selected Details

**설명:** 요약 테이블에서 선택한 행에 대한 검정 경보 정보를 포함하는 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
obj << Save Selected Details;

```

### Save Shift Table

**구문:** obj &lt;&lt; Save Shift Table

**설명:** Creates a new data table that contains the saved shift gap data. This option requires that the Make Detailed Shift Data option is specified in the launch script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Save Summary Table

**구문:** obj &lt;&lt; Save Summary Table

**설명:** 모든 변수 및 그룹에 대한 모든 공정 요약 정보를 포함하는 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table;

```

### Save Summary Table with Graphs

**구문:** obj &lt;&lt; Save Summary Table with Graphs

**설명:** 모든 공정 요약 정보와 빠른 그래프 열을 포함하는 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table with Graphs;

```

### Select All

**구문:** obj &lt;&lt; Select All

**설명:** 모든 열 및 그룹을 선택하고 이들에 대해 후속 명령을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Select All );

```

### Select Where

**구문:** obj &lt;&lt; Select Where( condition )

**설명:** 요약 테이블에서 공정 열을 선택합니다. 선택한 열은 지정된 조건에 해당합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Select Where( Alarm Rate > 0 ) );

```

### Set Scrolling

**구문:** obj &lt;&lt; Set Scrolling( number=50 )

**설명:** 스크롤 요약 테이블에 표시할 행 수를 지정합니다. 기본값은 "50"입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Set Scrolling( 3 ) );

```

### Shift Graph

**구문:** obj &lt;&lt; Shift Graph( state=0|1 )

**설명:** &apos;변화 임계&apos; 옵션에 지정된 군내 표준편차 단위 수를 초과하는 모든 공정 변화의 시간 발생 그림을 표시하거나 숨깁니다. 녹색 표식은 상향 변화를 나타내고 빨간색 표식은 하향 변화를 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" )
);
obj << Shift Graph( 1 );

```

### Shift Lambda

**구문:** obj = Process Screening(...Shift Lambda( number=.3 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 변화 감지를 위해 EWMA(지수 가중 이동 평균)에 사용되는 가중치를 지정합니다. 기본값은 ".3"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Show Charts as Selected( 1 ),
	RowStates( [5 1] ),
	Shift Lambda( 0.2 ),
	Shift Graph( 1 )
);

```

### Shift Threshold

**구문:** obj = Process Screening(...Shift Threshold( number=3 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 특정 값을 초과하는 변화를 변화 그래프에 표시하기 위해 기준으로 사용할 군내 표준편차 단위 수를 지정합니다. 기본값은 "3"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Shift Graph( 1 )
);

```

### Show Charts as Selected

**구문:** obj &lt;&lt; Show Charts as Selected( state=0|1 )

**설명:** 요약 테이블에서 선택한 공정의 작은 그래프를 표시합니다. 그래프는 요약 테이블에서 공정을 선택하거나 선택 취소하면 자동으로 업데이트되는 &apos;선택 항목 차트&apos; 보고서에 표시됩니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
obj << Select Where( :MACHINE == "C334" );
obj << Show Charts as Selected( 1 );
Wait( 2 );
obj << Select Where( :MACHINE == "A455" );

```

### Show Charts for Selected

**구문:** obj &lt;&lt; Show Charts for Selected( &lt;process list&gt; )

**설명:** 요약 테이블에서 선택한 공정의 작은 그래프를 표시합니다. 그래프는 한 번에 여러 공정을 보고 비교할 수 있는 &apos;선택 항목에 대한 차트&apos; 보고서에 표시됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :OPERATOR, :MACHINE ),
	Show Charts for Selected( {{:DIAMETER, "DRJ", "C334"}, {:DIAMETER, "MKS", "A386"}} )
);

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :IVP7, :B1, :IVP8 ), Show Charts for Selected( {:IVP7, :IVP8} ) );

```

### Show Shifts in Graphs

**구문:** obj &lt;&lt; Show Shifts in Graphs( state=0|1 )

**설명:** 녹색 및 빨간색 세로선을 사용하여 빠른 그래프에 변화 위치를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Select All,
	Show Charts for Selected,
	Show Shifts in Graphs( 1 )
);

```

### Show Tests

**구문:** obj &lt;&lt; Show Tests( state=0|1 )

**설명:** &apos;검정 선택&apos;에서 선택한 Nelson 검정을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 2( 1 ), Test 3( 1 ) );
Wait( 1 );
obj << Show Tests( 0 );

```

### Sort by Subgroup

**구문:** obj = Process Screening(...Sort by Subgroup( state=0|1 )...)

**설명:** 계산하기 전에 부분군 변수 또는 내포된 부분군 변수의 조합을 기준으로 공정 데이터를 정렬합니다. 이 옵션은 부분군 변수를 지정한 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Spec Centered Mean

**구문:** obj &lt;&lt; Spec Centered Mean( state=0|1 )

**설명:** 요약 테이블에 (평균-목표)/규격 범위 열을 표시하거나 숨깁니다. 이 열에는 규격 한계를 기준으로 한 평균이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Centered Mean( 1 ) );

```

### Spec Limits

**구문:** obj &lt;&lt; Spec Limits( state=0|1 )

**설명:** 요약 테이블에 규격 한계 열을 표시하거나 숨깁니다. 이러한 열에는 LSL(규격 하한), USL(규격 상한) 및 목표값이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Limits( 1 ) );

```

### Spec Scaled Std Dev

**구문:** obj &lt;&lt; Spec Scaled Std Dev( state=0|1 )

**설명:** 요약 테이블에 표준편차/규격 범위 열을 표시하거나 숨깁니다. 이 열에는 전체 표준편차를 규격 한계 범위로 나눈 값이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Scaled Std Dev( 1 ) );

```

### Stability Index

**구문:** obj &lt;&lt; Stability Index( state=0|1 )

**설명:** 요약 테이블에 안정성 지수 열을 표시하거나 숨깁니다. 이 열은 공정 안정성 지표이며 공정이 안정적이면 안정성 지수가 1에 가깝습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Stability Index( 0 );

```

### Stability Index Boundary

**구문:** obj &lt;&lt; Stability Index Boundary( number=1.25 )

**설명:** 공정 성능 그래프의 안정성 지수에 대해 안정 영역과 불안정 영역 간의 경계를 지정합니다. 기본값은 "1.25"입니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Select All, Process Performance Graph( 1 ) );
Wait( 1 );
obj << Stability Index Boundary( 1.5 );

```

### Stability Ratio

**구문:** obj &lt;&lt; Stability Ratio( state=0|1 )

**설명:** 요약 테이블에 안정성 비율 열을 표시하거나 숨깁니다. 이 열은 공정 안정성 지표이며 공정이 안정적이면 안정성 비율이 1에 가깝습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
obj << Stability Ratio( 1 );

```

### Subgroup Sample Size

**구문:** obj = Process Screening(...Subgroup Sample Size( number=5 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 부분군의 관측값 개수를 지정합니다. 최소 부분군 크기는 2입니다. 기본값은 "5"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup Sample Size( 6 )
);

```

### Summary

**구문:** obj &lt;&lt; Summary( state=0|1 )

**설명:** 보고서에 요약 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ), Summary( 0 ) );
Wait( 1 );
obj << Summary( 1 );

```

### Target Index

**구문:** obj &lt;&lt; Target Index( state=0|1 )

**설명:** 요약 테이블에 목표 지수 열을 표시하거나 숨깁니다. 이 열에는 공정 평균이 목표값과 다른 단기 표준편차의 수가 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Target Index( 1 ) );

```

### Test 1

**구문:** obj &lt;&lt; Test 1( state=0|1 )

**설명:** 요약 테이블에 검정 1 열을 표시하거나 숨깁니다. 이 시험은 1개의 점이 중심선으로부터 3 표준편차 넘게 떨어져 있을 때 발동합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 1( 0 ) );

```

### Test 2

**구문:** obj &lt;&lt; Test 2( state=0|1 )

**설명:** 요약 테이블에 검정 2 열을 표시하거나 숨깁니다. 이 시험은 연속 9개 이상의 점이 중심선의 한쪽 편에 있을 때 발동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 2( 1 ) );

```

### Test 3

**구문:** obj &lt;&lt; Test 3( state=0|1 )

**설명:** 요약 테이블에 검정 3 열을 표시하거나 숨깁니다. 이 시험은 연속 6개 이상의 점이 계속 증가하거나 감소할 때 발동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 3( 1 ) );

```

### Test 4

**구문:** obj &lt;&lt; Test 4( state=0|1 )

**설명:** 요약 테이블에 검정 4 열을 표시하거나 숨깁니다. 이 시험은 연속 14개의 점이 증가하다가 감소하거나 감소하다가 증가하는 식으로 번갈아 나올 때 발동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 4( 1 ) );

```

### Test 5

**구문:** obj &lt;&lt; Test 5( state=0|1 )

**설명:** 요약 테이블에 검정 5 열을 표시하거나 숨깁니다. 이 시험은 연속 3개의 점 중 2개가 중심선의 한쪽 편에 있고 중심선으로부터 2 표준편차 넘게 떨어져 있을 때 발동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 5( 1 ) );

```

### Test 6

**구문:** obj &lt;&lt; Test 6( state=0|1 )

**설명:** 요약 테이블에 검정 6 열을 표시하거나 숨깁니다. 이 시험은 연속 5개의 점 중 4개가 중심선의 한쪽 편에 있고 중심선으로부터 1 표준편차 넘게 떨어져 있을 때 발동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 6( 1 ) );

```

### Test 7

**구문:** obj &lt;&lt; Test 7( state=0|1 )

**설명:** 요약 테이블에 검정 7 열을 표시하거나 숨깁니다. 이 시험은 연속 15개의 점이 중심선의 양쪽에 있고 모두 중심선으로부터 1 표준편차 내에 있을 때 발동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 7( 1 ) );

```

### Test 8

**구문:** obj &lt;&lt; Test 8( state=0|1 )

**설명:** 요약 테이블에 검정 8 열을 표시하거나 숨깁니다. 이 시험은 연속 8개의 점이 중심선의 양쪽에 있고 모두 중심선으로부터 1 표준편차를 벗어날 때 발동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 8( 1 ) );

```

### Test Action

**구문:** obj &lt;&lt; Test Action( state=0|1 )

**설명:** Shows or hides the Action column in the summary table. This test is triggered when a point is greater than an Upper Action Limit or less than a Lower Action Limit. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Action( 0 );

```

### Test Alert

**구문:** obj &lt;&lt; Test Alert( state=0|1 )

**설명:** Shows or hides the Alert column in the summary table. This test is triggered when a point is greater than the Upper Alert Limit or less than the Lower Alert Limit.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert( 1 );

```

### Test Alert Increasing

**구문:** obj &lt;&lt; Test Alert Increasing( state=0|1 )

**설명:** Shows or hides the Alert Increasing column in the summary table. This column counts where the process is increasing and the previous point is above the upper alert limit or if a process is decreasing and the previous point is below the lower alert limit.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert Increasing( 0 );

```

### Use Limits Table

**구문:** obj = Process Screening(...Use Limits Table( state=0|1, data table, &lt;options&gt;)...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 데이터 테이블에서 과거 관리 한계 및 규격 한계를 가져옵니다.

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	)
);

```

### Use Lower Limit

**구문:** obj = Process Screening(...Use Lower Limit( state=0|1 )...)

**설명:** Specifies whether to use the K-Sigma lower limit. This option is available only for Proportion charts.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Lower Limit( 1 )
);

```

### Use Medians instead of Means

**구문:** obj = Process Screening(...Use Medians instead of Means( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 이상치가 검정에 미치는 영향을 줄이기 위해 관측값의 중앙값을 사용하여 중심선을 추정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Use Medians instead of Means( 1 )
);

```

### Use Upper Limit

**구문:** obj = Process Screening(...Use Upper Limit( state=0|1 )...)

**설명:** Specifies whether to use the K-Sigma upper limit. This option is available only for Proportion charts. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Upper Limit( 0 ),
	Use Lower Limit( 1 )
);

```

### Within Sigma

**구문:** obj &lt;&lt; Within Sigma( state=0|1 )

**설명:** 요약 테이블에 군내 표준편차 열을 표시하거나 숨깁니다. 이 열에는 부분군 내 변동에 기반한 표준편차 추정값이 포함됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Within Sigma( 0 ) );
Wait( 1 );
obj << Within Sigma( 1 );

```

## Chart Options Drift Graph

### 항목 메시지

#### Circle Alarm Points

**구문:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**설명:** 경보 상태의 점 주위에 빨간색 원을 표시하거나 숨깁니다. 원 안에 포함된 각 점 옆에 해당하는 경보 코드가 표시됩니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**구문:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**설명:** 점을 연결하는 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

#### Dispersion Chart

**구문:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**설명:** 각 공정에 대한 관리도 외에 범위, 표준편차 또는 이동 범위 차트를 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**구문:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**설명:** 그래프 크기를 설정합니다. 기본값은 "500,170"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

#### Number of Plots Across

**구문:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**설명:** 차트의 레이아웃을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

#### Remove

**구문:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**설명:** 보고서에서 차트를 제거합니다.

**JMP추가된 버전:** 14

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

#### Show Centerline

**구문:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**설명:** 공정 평균에 대해 녹색 실선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

#### Show Control Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**설명:** 관리 상한 및 하한을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

#### Show Markers

**구문:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**설명:** 차트에 개별 점을 표시하거나 숨깁니다.

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

#### Show Spec Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**설명:** 규격 상한 및 하한을 파란색 점선으로 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

#### Show Zones

**구문:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**설명:** 차트에 1 및 2 표준편차 영역을 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

#### V Axis Label

**구문:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**설명:** 각 차트에 세로 축 라벨을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

## Chart Options Graphlet

### 항목 메시지

#### Circle Alarm Points

**구문:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**설명:** 경보 상태의 점 주위에 빨간색 원을 표시하거나 숨깁니다. 원 안에 포함된 각 점 옆에 해당하는 경보 코드가 표시됩니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**구문:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**설명:** 점을 연결하는 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

#### Dispersion Chart

**구문:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**설명:** 각 공정에 대한 관리도 외에 범위, 표준편차 또는 이동 범위 차트를 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**구문:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**설명:** 그래프 크기를 설정합니다. 기본값은 "500,170"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

#### Number of Plots Across

**구문:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**설명:** 차트의 레이아웃을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

#### Remove

**구문:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**설명:** 보고서에서 차트를 제거합니다.

**JMP추가된 버전:** 14

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

#### Show Centerline

**구문:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**설명:** 공정 평균에 대해 녹색 실선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

#### Show Control Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**설명:** 관리 상한 및 하한을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

#### Show Markers

**구문:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**설명:** 차트에 개별 점을 표시하거나 숨깁니다.

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

#### Show Spec Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**설명:** 규격 상한 및 하한을 파란색 점선으로 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

#### Show Zones

**구문:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**설명:** 차트에 1 및 2 표준편차 영역을 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

#### V Axis Label

**구문:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**설명:** 각 차트에 세로 축 라벨을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

## Chart Options as Selected

### 항목 메시지

#### Circle Alarm Points

**구문:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**설명:** 경보 상태의 점 주위에 빨간색 원을 표시하거나 숨깁니다. 원 안에 포함된 각 점 옆에 해당하는 경보 코드가 표시됩니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**구문:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**설명:** 점을 연결하는 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

#### Dispersion Chart

**구문:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**설명:** 각 공정에 대한 관리도 외에 범위, 표준편차 또는 이동 범위 차트를 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**구문:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**설명:** 그래프 크기를 설정합니다. 기본값은 "500,170"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

#### Number of Plots Across

**구문:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**설명:** 차트의 레이아웃을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

#### Remove

**구문:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**설명:** 보고서에서 차트를 제거합니다.

**JMP추가된 버전:** 14

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

#### Show Centerline

**구문:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**설명:** 공정 평균에 대해 녹색 실선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

#### Show Control Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**설명:** 관리 상한 및 하한을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

#### Show Markers

**구문:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**설명:** 차트에 개별 점을 표시하거나 숨깁니다.

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

#### Show Spec Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**설명:** 규격 상한 및 하한을 파란색 점선으로 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

#### Show Zones

**구문:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**설명:** 차트에 1 및 2 표준편차 영역을 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

#### V Axis Label

**구문:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**설명:** 각 차트에 세로 축 라벨을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

## Chart Options for Selected

### 항목 메시지

#### Circle Alarm Points

**구문:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**설명:** 경보 상태의 점 주위에 빨간색 원을 표시하거나 숨깁니다. 원 안에 포함된 각 점 옆에 해당하는 경보 코드가 표시됩니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**구문:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**설명:** 점을 연결하는 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

#### Dispersion Chart

**구문:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**설명:** 각 공정에 대한 관리도 외에 범위, 표준편차 또는 이동 범위 차트를 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**구문:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**설명:** 그래프 크기를 설정합니다. 기본값은 "500,170"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

#### Number of Plots Across

**구문:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**설명:** 차트의 레이아웃을 지정합니다. 기본값은 "1"입니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

#### Remove

**구문:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**설명:** 보고서에서 차트를 제거합니다.

**JMP추가된 버전:** 14

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

#### Show Centerline

**구문:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**설명:** 공정 평균에 대해 녹색 실선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

#### Show Control Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**설명:** 관리 상한 및 하한을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

#### Show Markers

**구문:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**설명:** 차트에 개별 점을 표시하거나 숨깁니다.

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

#### Show Spec Limits

**구문:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**설명:** 규격 상한 및 하한을 파란색 점선으로 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

#### Show Zones

**구문:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**설명:** 차트에 1 및 2 표준편차 영역을 표시하거나 숨깁니다. 흐름 그래프에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

#### V Axis Label

**구문:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**설명:** 각 차트에 세로 축 라벨을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

**선택 항목 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

**선택 항목에 대한 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**흐름 그래프 차트 옵션의 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER, "A386", 2},
		{:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

