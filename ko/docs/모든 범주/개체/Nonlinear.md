# Nonlinear



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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

**구문:** obj = Nonlinear(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Nonlinear

**구문:** Nonlinear( Y( column ), X( column with predictor formula ) )

**설명:** 최소 제곱 또는 사용자 손실 함수를 사용하여 비선형 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

## 열

### By

**구문:** obj = Nonlinear(...&lt;By( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );

```

### Freq

**구문:** obj = Nonlinear(...&lt;Freq( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Freq( _freqcol ) );

```

### Group

**구문:** obj = Nonlinear(...&lt;Group( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 그룹화 변수를 지정합니다. 적합 모형에는 그룹화 변수의 각 수준에 대한 개별 모수가 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << Run Script( "Fit Curve" );					 

obj = dt << Nonlinear(
	Y( :Toxicity ),
	X( :Toxicity Predictor Formula ),
	Group( :Formulation ),
	Newton,
	Finish
);

```

### Loss

**구문:** obj = Nonlinear(...&lt;Loss( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 손실 함수를 포함하는 계산식 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Ship Damage.jmp" );
obj = dt << Nonlinear( X( :model ), Loss( :Poisson ), Loss is Neg LogLikelihood( 1 ), Newton, Finish );

```

### Predictor Formula

**구문:** obj = Nonlinear(...&lt;Predictor Formula( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모수를 사용한 모형 계산식 또는 X 변수를 포함하는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Response

**구문:** obj = Nonlinear(...&lt;Response( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 반응 변수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Weight

**구문:** obj = Nonlinear(...&lt;Weight( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Weight( _weightcol ) );

```

### X

**구문:** obj = Nonlinear(...&lt;X( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모수를 사용한 모형 계산식 또는 X 변수를 포함하는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Y

**구문:** obj = Nonlinear(...&lt;Y( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 반응 변수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

## 항목 메시지

### Accept Current Estimates

**구문:** obj &lt;&lt; Accept Current Estimates

**설명:** 추정값이 수렴되지 않더라도 현재 추정값을 사용하여 해 보고서를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Parameter Bounds( B0( 15, . ) ) );
obj << Finish;
obj << Accept Current Estimates;

```

### CL Alpha

**구문:** obj &lt;&lt; CL Alpha( number=.05 )

**설명:** 모수 추정값의 신뢰 한계에 사용되는 유의 수준을 지정합니다. 기본값은 ".05"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Alpha( .01 );
obj << Confidence Limits;

```

### CL Limit

**구문:** obj &lt;&lt; CL Limit( number=.00001 )

**설명:** 모수 추정값의 신뢰 한계를 계산하는 데 사용되는 수렴 기준을 지정합니다. 기본값은 ".00001"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Limit( .002 );
obj << Confidence Limits;

```

### Confidence Limits

**구문:** obj &lt;&lt; Confidence Limits

**설명:** 모든 모수 추정값의 신뢰 구간을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;

```

### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Custom Estimate

**구문:** obj &lt;&lt; Custom Estimate( expression )

**설명:** 사용자가 지정한 모수 함수를 추정합니다. 현재 모수 추정값을 사용하여 표현식과 표현식의 표준 오차가 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Custom Estimate( B0 + A + D );

```

### Custom Estimation Profiler

**구문:** obj &lt;&lt; Custom Estimation Profiler( Custom Estimation( {initial values}, expression ), &lt;Transformation( "Log"|"Logit"|"None" ), Profiler( script )&gt; )

**설명:** 사용자 표현식에 대한 프로파일러를 생성할 수 있습니다. 모수와 하나 이상의 요인이 포함된 표현식을 입력합니다. 기본적으로 변환 옵션은 &apos;없음&apos;으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logistic w Loss.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Expand Intermediate Formulas( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 ),
	Custom Estimation Profiler(
		Custom Estimation( {x = 30}, 1 / (1 + Exp( b0 + b1 * x )) ),
		Transformation( "Logit" ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value( x( 140, Min( -37.4344314814814 ), Max( 392.622262689059 ), Lock( 0 ), Show( 1 ) ) )
		)
	)
);

```

### Custom Inverse Prediction

**구문:** obj &lt;&lt; Custom Inverse Prediction( Response( l1, l2, ... ), &lt;Term Value( column( number ) )&gt; )

**설명:** 지정된 각 반응 값에 대한 X 값을 추정합니다. 추정된 X 값의 표준 오차와 신뢰 한계도 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 0 );
obj << Custom Inverse Prediction( Response( 100, 150, 200 ) );

```

### Delta

**구문:** obj &lt;&lt; Delta( number=5.0e-6 )

**설명:** &apos;수치 미분만&apos; 옵션에 사용되는 델타 값을 지정합니다. 기본값은 "5.0e-6"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Delta( 0.2 );
obj << Finish;

```

### Expand Intermediate Formulas

**구문:** obj &lt;&lt; Expand Intermediate Formulas( state=0|1 )

**설명:** 해석 및 저장된 계산식에서 확장된 중간 계산식을 사용합니다. 이때 모형은 원래 열을 검토하므로 모형이 계산식이 포함된 열에 종속되었다면 출력의 계산식에 영향을 주게 됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Finish

**구문:** obj &lt;&lt; Finish

**설명:** 적합 프로세스를 시작하고 해가 수렴되거나 완료된 경우에만 다음 명령으로 이동합니다. 스크립트에서는 &apos;시작&apos; 옵션 대신 &apos;완료&apos; 옵션을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Finish;
obj << Profiler;

```

### Get CI

**구문:** obj &lt;&lt; Get CI

**설명:** 모수 추정값의 신뢰 구간을 반환합니다. &apos;CI 가져오기&apos; 옵션을 지정하려면 먼저 &apos;신뢰 구간&apos; 옵션을 선택해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;
G = obj << Get CI;
Show( G );

```

### Get Corr

**구문:** obj &lt;&lt; Get Corr

**설명:** 추정값 상관계수를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Corr;
Show( G );

```

### Get Cov

**구문:** obj &lt;&lt; Get Cov

**설명:** 추정값의 공분산을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Cov;
Show( G );

```

### Get Estimates

**구문:** obj &lt;&lt; Get Estimates

**설명:** 모수 추정값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Estimates;
Show( G );

```

### Get Parameter Names

**구문:** obj &lt;&lt; Get Parameter Names

**설명:** 모수 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Parameter Names;
Show( G );

```

### Get SSE

**구문:** obj &lt;&lt; Get SSE

**설명:** SSE(오차제곱합)를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get SSE;
Show( G );

```

### Get Std Errors

**구문:** obj &lt;&lt; Get Std Errors

**설명:** 모수 추정값의 표준 오차를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Std Errors;
Show( G );

```

### Go

**구문:** obj &lt;&lt; Go

**설명:** 백그라운드에서 반복을 시작하여 비선형 해를 찾습니다. 스크립트에서는 &apos;시작&apos; 옵션 대신 &apos;완료&apos; 옵션을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;

```

### Gradient Limit

**구문:** obj &lt;&lt; Gradient Limit( number=1e-6 )

**설명:** 그래디언트 기준의 중지 한계 값을 지정합니다. 기본값은 "1e-6"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Gradient Limit( 0.0002 );
obj << Finish;

```

### Iteration Limit

**구문:** obj &lt;&lt; Iteration Limit( number=60 )

**설명:** 최대 반복 수를 지정합니다. 기본값은 "60"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Iteration Limit( 10 );
obj << Finish;

```

### Iteration Log

**구문:** obj &lt;&lt; Iteration Log( state=0|1 )

**설명:** 반복 테이블을 표시하거나 숨깁니다. 이 옵션을 선택하면 테이블에 후속 반복이 기록됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Iteration Log( 1 );
obj << Finish;
obj << Plot( 0 );
Report( obj )["Iterations"] << Close( 0 );

```

### Lock Parameter

**구문:** obj &lt;&lt; Lock Parameter( Name, ... )

**설명:** 지정된 값에서 개별 모수를 잠가 반복 프로세스 중 상수로 유지되도록 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0 );
obj << Finish;

```

### Loss is Neg LogLikelihood

**구문:** obj &lt;&lt; Loss is Neg LogLikelihood( state=0|1 )

**설명:** 지정된 손실 계산식의 합이 음의 로그 가능도라고 가정하고 분석에 F 통계량 대신 카이제곱 통계량을 사용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear( Loss( :Loss ), Show Prediction Expression( 1 ), Expand Intermediate Formulas( 1 ) );
obj << Loss is Neg LogLikelihood( 0 );
obj << Finish;

```

### Newton

**구문:** obj &lt;&lt; Newton

**설명:** Gauss-Newton(정규 최소 제곱의 경우) 또는 Newton-Raphson(손실 함수가 포함된 모형의 경우)을 최적화 방법으로 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Newton;
obj << Finish;

```

### Numeric Chain Deriv Delta

**구문:** obj &lt;&lt; Numeric Chain Deriv Delta( =1e-5 )

**설명:** 기본 제공 도함수가 없는 비선형 계산식의 도함수 근사값을 산출할 때 사용되는 델타 모수를 지정합니다. 기본값은 "1e-5"입니다.

**JMP추가된 버전:** 14

### Numeric Derivatives Only

**구문:** obj &lt;&lt; Numeric Derivatives Only( state=0|1 )

**설명:** 적합 방법에 수치 미분만 사용하도록 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Finish;

```

### Obj Change Limit

**구문:** obj &lt;&lt; Obj Change Limit( number=1e-15 )

**설명:** 목적 변경 기준의 중지 한계 값을 지정합니다. 기본값은 "1e-15"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Obj Change Limit( 1e-10 );
obj << Finish;

```

### Parameter Bounds

**구문:** obj &lt;&lt; Parameter Bounds( &lt;parameter name( lower, upper )&gt; )

**설명:** 지정된 모수의 경계를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Parameter Bounds( B0( 0, . ) );
obj << Finish;

```

### Parameter Contour Profiler

**구문:** obj &lt;&lt; Parameter Contour Profiler( state=0|1 )

**설명:** SSE 또는 손실을 모수의 함수로 프로파일링하는 등고선 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Contour Profiler( 1 );

```

### Parameter Profiler

**구문:** obj &lt;&lt; Parameter Profiler( state=0|1 )

**설명:** SSE 또는 손실을 모수의 함수로 프로파일링하는 예측 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Profiler( 1 );

```

### Parameter Surface Profiler

**구문:** obj &lt;&lt; Parameter Surface Profiler( state=0|1 )

**설명:** SSE 또는 손실을 모수의 함수로 프로파일링하는 3차원 표면 그림을 표시하거나 숨깁니다. 이 옵션은 모수가 두 개 이상 포함된 모형에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Surface Profiler( 1 );

```

### Plot

**구문:** obj &lt;&lt; Plot( state=0|1 )

**설명:** 예측 계산식을 다른 한 변수의 함수로만 표현하는 그래프를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
Wait( 1 );
obj << Plot( 0 );
obj << Finish;

```

### Profile Likelihood

**구문:** obj &lt;&lt; Profile Likelihood( state=0|1 )

**설명:** 다른 모든 모수는 손실 함수를 최소화하도록 최적화된 상태에서 단일 모수의 값에 대해 최대값이 1이 되도록 척도화된 상대 가능도 함수의 그림을 표시하거나 숨깁니다. 이 옵션은 두 개 이상의 모수가 포함된 손실 함수로 비선형 플랫폼을 시작한 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Unconstrained Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0},
			If(
				Censor == 0, -Log( Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1, -Log( 1 - Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) ) )
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Unconstrained Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood( 1 );

```

### Profile Likelihood Contour

**구문:** obj &lt;&lt; Profile Likelihood Contour( state=0|1 )

**설명:** 다른 모든 모수는 손실 함수를 최소화하도록 최적화된 상태에서 두 모수의 상대 가능도 함수에 대한 가능도 신뢰 등고선을 표시하거나 숨깁니다. 이 옵션은 세 개 이상의 모수가 포함된 손실 함수로 비선형 플랫폼을 시작한 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Partial Unconstrained DS Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0, p = 0.5},
			If(
				p < 0 | p > 1, .,
				Censor == 0, -Log( p * Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1, -Log( 1 - p * Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) ) )
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Partial Unconstrained DS Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood Contour( 1 );

```

### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Profiler( 1 );

```

### QuasiNewton BFGS

**구문:** obj &lt;&lt; QuasiNewton BFGS

**설명:** QuasiNewton BFGS를 최적화 방법으로 지정합니다. 이 방법은 모수의 수가 많은 경우에 적합합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton BFGS;
obj << Finish;

```

### QuasiNewton SR1

**구문:** obj &lt;&lt; QuasiNewton SR1

**설명:** QuasiNewton SR1을 최적화 방법으로 지정합니다. 이 방법을 사용하면 반복할 때마다 도함수를 다시 계산할 필요가 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton SR1;
obj << Finish;

```

### Relative Gradient

**구문:** obj &lt;&lt; Relative Gradient( number=1e-6 )

**설명:** 상대 그래디언트 기준의 중지 한계 값을 지정합니다. 기본값은 "1e-6"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Relative Gradient( 0.0001 );
obj << Finish;

```

### Remember Solution

**구문:** obj &lt;&lt; Remember Solution( name )

**설명:** 현재 모수 추정값과 요약 통계량을 포함하는 &apos;저장된 모형&apos; 보고서를 생성합니다. 여러 모형의 결과를 저장하고 비교할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Remember Solution( "New Model" );

```

### Reset

**구문:** obj &lt;&lt; Reset

**설명:** 해를 구한 후 수렴 기준을 재설정합니다. 이 옵션은 다른 시작 값으로 모형을 재적합시킬 때 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Finish;
Wait( 2 );
obj << Reset;

```

### Revert To Original Parameters

**구문:** obj &lt;&lt; Revert To Original Parameters

**설명:** 제어판에서 모수의 현재 값을 원래 값으로 재설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 1 );
obj << Revert to Original Parameters;

```

### SSE Grid

**구문:** obj &lt;&lt; SSE Grid

**설명:** 해 추정값 주변의 값 격자를 생성하고 각 값의 오차 제곱합을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << SSE Grid;

```

### Save Estimates

**구문:** obj &lt;&lt; Save Estimates

**설명:** 현재 모수 추정값을 계산식 열의 모수 값에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 1 );
obj << Save Estimates;

```

### Save Estimates To Table

**구문:** obj &lt;&lt; Save Estimates To Table

**설명:** 모수 추정값을 포함하는 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Estimates To Table;

```

### Save Indiv Confid Limit Formula

**구문:** obj &lt;&lt; Save Indiv Confid Limit Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 개별값 예측의 신뢰 구간 계산식이 포함됩니다. 이 구간은 주어진 X 값에서 개별 반응 값에 대한 신뢰 구간입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limit Formula;

```

### Save Indiv Confid Limits

**구문:** obj &lt;&lt; Save Indiv Confid Limits

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 개별값 예측의 점근 신뢰 한계가 포함됩니다. 이 구간은 주어진 X 값에서 개별 반응 값에 대한 신뢰 구간입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limits;

```

### Save Inverse Prediction Formula

**구문:** obj &lt;&lt; Save Inverse Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 모형의 역추정 예측 계산식, 역추정 예측의 표준 오차 계산식 및 개별값 역추정 예측의 표준 오차 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Inverse Prediction Formula;

```

### Save Pred Confid Limit Formula

**구문:** obj &lt;&lt; Save Pred Confid Limit Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 모형 예측의 신뢰 구간 계산식이 포함됩니다. 이 구간은 주어진 X 값에서 평균 반응 값에 대한 신뢰 구간입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limit Formula;

```

### Save Pred Confid Limits

**구문:** obj &lt;&lt; Save Pred Confid Limits

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 모형 예측의 점근 신뢰 한계가 포함됩니다. 이 구간은 주어진 X 값에서 평균 반응 값에 대한 신뢰 구간입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limits;

```

### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 현재 모수 추정값을 사용한 예측 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Prediction Formula;

```

### Save Residual Formula

**구문:** obj &lt;&lt; Save Residual Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 잔차 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Residual Formula;

```

### Save Specific Solving Formula

**구문:** obj &lt;&lt; Save Specific Solving Formula( &lt;column to solve for, {name1=expr1, ...}, Save Formula for Std Error Mean, Save Formula for Std Error Individual&gt; )

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 반응 변수와 데이터의 다른 X 값 또는 상수가 주어졌을 때 X 변수를 평가하기 위한 예측 및 표준 오차 계산식이 포함됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :year, {:pop = 200}, Save Formula for Std Error Mean );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :pop, Save Formula for Std Error Individual );

```

### Save Std Error of Individual

**구문:** obj &lt;&lt; Save Std Error of Individual

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 개별값 예측의 표준 오차 계산식이 포함됩니다. 이 표준 오차는 주어진 X 값에 대해 개별 반응 값을 예측하는 데 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Individual;

```

### Save Std Error of Predicted

**구문:** obj &lt;&lt; Save Std Error of Predicted

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 모형 예측의 표준 오차 계산식이 포함됩니다. 이 표준 오차는 주어진 X 값에 대해 평균 반응 값을 예측하는 데 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Predicted;

```

### Second Deriv Method

**구문:** obj &lt;&lt; Second Deriv Method( state=0|1 )

**설명:** 적합 방법에 2차 도함수를 사용하도록 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Second Deriv Method( 1 ), Finish );

```

### Set Parameter

**구문:** obj &lt;&lt; Set Parameter( name=expr, ... )

**설명:** 모형을 적합시키기 전에 하나 이상의 모수 값을 설정합니다. 모수를 특정 값으로 고정하거나 시작 값을 설정할 때 모두 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
Wait( 2 );
obj << Finish;

```

### Show Derivatives

**구문:** obj &lt;&lt; Show Derivatives

**설명:** 비선형 계산식의 도함수를 로그에 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Show Derivatives;

```

### Show Prediction Expression

**구문:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**설명:** 보고서에 예측 모형 또는 손실 함수를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Step

**구문:** obj &lt;&lt; Step

**설명:** 비선형 모형을 풀기 위한 한단계 반복을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Step;
Wait( 1 );
obj << Step;

```

### Stop

**구문:** obj &lt;&lt; Stop

**설명:** 비선형 모형 적합 프로세스를 중단하고 현재 반복에서 중지합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;
obj << Stop;

```

### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler( state=0|1 )

**설명:** 3차원 표면 그림을 표시하거나 숨깁니다. 이 옵션은 X 변수가 두 개 이상 있는 모형에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Surface Profiler( 1 );

```

### Unlock Parameter

**구문:** obj &lt;&lt; Unlock Parameter( Name, ... )

**설명:** 지정된 모수의 잠금을 해제합니다. 이전에 잠긴 요인에 이 옵션을 사용하여 반복 프로세스 중에 자유롭게 변경할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0, A, D );
obj << Finish;
Wait( 2 );
obj << Unlock Parameter( B0, A );
obj << Finish;

```

### Unthreaded

**구문:** obj &lt;&lt; Unthreaded( state=0|1 )

**설명:** 주 계산 스레드에서 반복을 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Nonlinear( Y( :Algae density ), X( :Mitscherlich ) );
obj << Unthreaded( 1 );
obj << Finish;

```

