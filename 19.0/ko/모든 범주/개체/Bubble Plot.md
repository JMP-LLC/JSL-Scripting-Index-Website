# Bubble Plot



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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
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

**구문:** obj = Bubble Plot(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Bubble Plot

**구문:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**설명:** 시간 변수에 대해 애니메이션을 적용할 수 있는 버블의 2차원 산점도를 생성합니다. 추가 변수를 사용하여 버블의 크기와 색상을 지정할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );

```

## 열

### By

**구문:** obj = Bubble Plot(...&lt;By( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 변수의 각 수준에 대해 하나씩 여러 보고서를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	By( _bycol )
);

```

### Coloring

**구문:** obj = Bubble Plot(...&lt;Coloring( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 선택한 변수에 따라 버블에 색상을 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Coloring( :Pop )
);

```

### Freq

**구문:** obj = Bubble Plot(...&lt;Freq( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 버블의 위치, 크기 및 색상을 계산할 때 계산에 가중치를 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
dtSummary = dt << Summary(
	Group( :Country ),
	Mean( :"Portion 0-19"n ),
	Mean( :"Portion60+"n ),
	Sum( :Pop ),
	Freq( "None" ),
	Weight( "None" )
);
dtSummary << Bubble Plot(
	X( :"Mean(Portion 0-19)"n ),
	Y( :"Mean(Portion60+)"n ),
	Sizes( :"Sum(Pop)"n ),
	Freq( :N Rows )
);

```

### ID

**구문:** obj = Bubble Plot(...&lt;ID( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 집계하여 단일 버블로 표시해야 하는 행을 식별합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );

```

### Sizes

**구문:** obj = Bubble Plot(...&lt;Sizes( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 버블 크기로 사용할 열입니다. 지정하지 않을 경우 버블 크기는 관측값 수에 비례합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );

```

### Time

**구문:** obj = Bubble Plot(...&lt;Time( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 고유 기간에 대해 별도의 좌표, 크기 및 색상을 유지합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);

```

### X

**구문:** obj = Bubble Plot(...X( column )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 그림에서 버블의 x 좌표로 사용할 열입니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );

```

### Y

**구문:** obj = Bubble Plot(...Y( column )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 그림에서 버블의 y 좌표로 사용할 열입니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );

```

## 항목 메시지

### Auto Stretching

**구문:** obj &lt;&lt; Auto Stretching( "자동"|"켜짐"|"해제" )

**설명:** 보고서 자동 늘이기 동작을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Auto Stretching( "Off" );

```

### Bubble Size

**구문:** obj &lt;&lt; Bubble Size( number )

**설명:** 산점도의 버블 크기를 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Bubble Size( 50 );

```

### Color Levels

**구문:** obj &lt;&lt; Color Levels

**설명:** 연속형 범례의 수준을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Coloring( :Pop )
);
obj << Color Levels( [100000 1000000 10000000] );

```

### Color Theme

**구문:** obj &lt;&lt; Color Theme

**설명:** 버블의 색상 테마를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Color Theme( "White to Red" );

```

### Color as Sum

**구문:** obj &lt;&lt; Color as Sum( state=0|1 )

**설명:** 색상 변수의 평균 대신 색상 변수의 합을 색상 역할로 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Time( :Year ),
	Coloring( :Pop ),
	ID( :Region )
);
obj << Color as Sum( 1 );

```

### Combine

**구문:** obj &lt;&lt; Combine( &lt;id&gt; )

**설명:** 그룹 내의 선택된 버블(또는 지정한 ID)을 큰 버블로 결합합니다. 이 옵션은 두 개의 ID 변수가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
dt << Select Where( :Region == "Europe" );
obj << Split;
Wait( 2 );
obj << Combine( "Europe" );

```

### Combine All

**구문:** obj &lt;&lt; Combine All

**설명:** 그룹의 모든 구성 버블을 큰 버블로 결합합니다. 이 옵션은 두 개의 ID 변수가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
obj << Split All;
Wait( 2 );
obj << Combine All;

```

### Draw

**구문:** obj &lt;&lt; Draw( "채우기"|"외곽선 표시"|"채우기 및 외곽선 표시" )

**설명:** 버블 표시 모드를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Draw( "Outlined" );

```

### Fit to Window

**구문:** obj &lt;&lt; Fit to Window( "자동"|"켜짐"|"해제" )

**설명:** 보고서 자동 늘이기 동작을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Fit to Window( "Off" );

```

### Get Custom Path

**구문:** obj &lt;&lt; Get Custom Path

**설명:** 버블에 대한 사용자 경로를 행렬로 반환합니다. 경로 행렬에는 경로의 각 점에 대한 플래그, x, y에 대한 세 개의 열이 있습니다. 플래그 값은 제어에 대해 0, 이동에 대해 1, 선분에 대해 2, 3차 Bézier 세그먼트에 대해 3이며, 점이 경로를 닫는 경우에는 음수입니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );
obj << Set Shape( "Custom" );
obj << Get Custom Path();

```

### Get Draw

**구문:** obj &lt;&lt; Get Draw

**설명:** 버블 표시 모드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Get Draw();

```

### Get Label

**구문:** obj &lt;&lt; Get Label

**설명:** 버블 라벨 그리기 모드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Get Label();

```

### Get Shape

**구문:** obj &lt;&lt; Get Shape

**설명:** 버블 셰이프를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Set Shape( "Triangle" );
obj << Get Shape();

```

### Go

**구문:** obj &lt;&lt; Go

**설명:** 시간 변수가 사용되는 경우 애니메이션을 시작합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Go;

```

### Label

**구문:** obj &lt;&lt; Label( "없음"|"선택됨"|"모두" )

**설명:** 버블 라벨 그리기 모드를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Label( "All" );

```

### Label Offset

**구문:** obj &lt;&lt; Label Offset( {pt, x offset, y offset}, ... )

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
dt << Select Where( :Region == "Europe" | :Region == "North America" );
obj << Label Offset( {4, -75, -43}, {7, 80, -34} );

```

### Legend

**구문:** obj &lt;&lt; Legend( state=0|1 )

**설명:** 색상 지정 열이 사용되는 경우 색상 범례를 표시합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Legend( 1 );

```

### Lock Scales

**구문:** obj &lt;&lt; Lock Scales( state=0|1 )

**설명:** 축, 그래디언트 및 크기 범위를 잠가 데이터 또는 필터링 변경에 반응하여 변경되지 않도록 합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Lock Scales( 0 );
dt << Data Filter( Mode( Select( 0 ), Show( 0 ), Include( 1 ) ), Add Filter( Columns( :Region ) ) );

```

### Orient Shapes

**구문:** obj &lt;&lt; Orient Shapes( state=0|1 )

**설명:** 위쪽이 이동 방향을 가리키도록 셰이프를 배치합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
obj << Set Shape( "Triangle" );
obj << Orient Shapes( 1 );

```

### Prev

**구문:** obj &lt;&lt; Prev

**설명:** 시간 변수를 애니메이션에서 한 단계 뒤로 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Time Index( 19 );
obj << Prev;

```

### Revert Color Theme

**구문:** obj &lt;&lt; Revert Color Theme

**설명:** 사용자 색상 테마에서 열 특성 또는 환경 설정의 기본 테마로 되돌립니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Color Theme( "White to Red" );
Wait( 2 );
obj << Revert Color Theme();

```

### Selectable Across Gaps

**구문:** obj &lt;&lt; Selectable Across Gaps( state=0|1 )

**설명:** 버블을 선택할 수 있도록 허용하고 데이터가 결측된 시간 주기 동안 버블을 선택된 상태로 유지합니다. 이 옵션이 해제되어 있으면 데이터가 결측된 시간 주기 동안 버블을 선택할 수 없습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( :Country == 3300 );
obj << Selectable Across Gaps( 1 );
obj << Trail Bubbles( 1 );
obj << Go;

```

### Set Custom Path

**구문:** obj &lt;&lt; Set Custom Path

**설명:** 버블의 사용자 경로를 설정합니다. N x 3 행렬 또는 텍스트 표현을 사용하여 경로를 지정할 수 있습니다. 경로 행렬에는 경로의 각 점에 대한 플래그, x, y에 대한 세 개의 열이 있습니다. 플래그 값은 제어에 대해 0, 이동에 대해 1, 선분에 대해 2, 3차 Bézier 세그먼트에 대해 3이며, 점이 경로를 닫는 경우에는 음수입니다. 경로 텍스트는 SVG 구문을 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );
obj << Set Shape( "Custom" );

```

### Set Shape

**구문:** obj &lt;&lt; Set Shape( "원"|"삼각형"|"정사각형"|"마름모"|"화살표"|"사용자 정의" )

**설명:** 버블 셰이프를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Set Shape( "Triangle" );

```

### Show Roles

**구문:** obj &lt;&lt; Show Roles( state=0|1 )

**설명:** 각 역할에 사용되는 변수를 보고서 위쪽의 범례에 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
obj << Show Roles( 1 );

```

### Show Time Annotation

**구문:** obj &lt;&lt; Show Time Annotation( state=0|1 )

**설명:** 애니메이션이 적용된 버블 그림에 현재 시간을 주석으로 표시합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year ),
	Coloring( :Region )
);
Wait( 1 );
obj << Show Time Annotation( 0 );

```

### Size as Sum

**구문:** obj &lt;&lt; Size as Sum( state=0|1 )

**설명:** 크기 변수의 평균 대신 크기 변수의 합을 크기 역할로 사용합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Size as Sum( 1 );

```

### Speed

**구문:** obj &lt;&lt; Speed( number )

**설명:** 시간 경과에 따른 버블 이동 속도를 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Speed( 100 );
obj << Go;

```

### Split

**구문:** obj &lt;&lt; Split( &lt;id&gt; )

**설명:** 선택된 버블(또는 지정한 ID)을 구성 버블로 분할합니다. 이 옵션은 두 개의 ID 변수가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
dt << Select Where( :Region == "Europe" );
Wait( 2 );
obj << Split;
Wait( 2 );
obj << Split( "Asia" );

```

### Split All

**구문:** obj &lt;&lt; Split All

**설명:** 버블을 구성 버블로 분할합니다. 이 옵션은 두 개의 ID 변수가 사용되는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Region, :Country ),
	Time( :Year )
);
Wait( 2 );
obj << Split All;

```

### Step

**구문:** obj &lt;&lt; Step

**설명:** 시간 변수를 애니메이션에서 한 단계 앞으로 이동합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Step;

```

### Stop

**구문:** obj &lt;&lt; Stop

**설명:** 시간 변수가 사용되는 경우 애니메이션을 중지합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( :Country == 4120 );
obj << Go;
Wait( 2 );
obj << Stop;

```

### Time Index

**구문:** obj &lt;&lt; Time Index( number )

**설명:** 산점도의 시간 변수 값을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
obj << Time Index( 19 );

```

### Title Position

**구문:** obj &lt;&lt; Title Position( X,Y )

**설명:** 제목 위치를 설정합니다. 이 옵션을 보려면 시간 변수를 지정해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
obj << Title Position( 0.8, 0.06 );

```

### Toggle Animation

**구문:** obj &lt;&lt; Toggle Animation

**설명:** 현재 애니메이션 상태를 전환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( :Country == 4120 );
obj << Go;
Wait( 2 );
obj << Toggle Animation;

```

### Trail Bubbles

**구문:** obj &lt;&lt; Trail Bubbles( "없음"|"선택됨"|"모두" )

**설명:** 버블의 시간에 따른 이동 경로를 반투명 버블로 표시합니다. 버블 궤적을 표시하려면 시간 열을 지정해야 하고 먼저 버블을 선택해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Trail Bubbles( 1 );
obj << Go;

```

### Trail Lines

**구문:** obj &lt;&lt; Trail Lines( "없음"|"선택됨"|"모두" )

**설명:** 버블의 시간에 따른 이동 경로를 연결된 선분으로 표시합니다. 버블 궤적을 표시하려면 시간 열을 지정해야 하고 먼저 버블을 선택해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot(
	X( :"Portion 0-19"n ),
	Y( :"Portion60+"n ),
	Sizes( :Pop ),
	ID( :Country ),
	Time( :Year )
);
dt << Select Where( (:Country == 3300) | (:Country == 4120) );
obj << Trail Lines( 1 );
obj << Go;

```

### X as Sum

**구문:** obj &lt;&lt; X as Sum( state=0|1 )

**설명:** X 변수의 평균 대신 X 변수의 합을 X 역할로 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << X as Sum( 1 );

```

### Y as Sum

**구문:** obj &lt;&lt; Y as Sum( state=0|1 )

**설명:** Y 변수의 평균 대신 Y 변수의 합을 Y 역할로 사용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );
obj = dt << Bubble Plot( X( :"Portion 0-19"n ), Y( :"Portion60+"n ), Sizes( :Pop ), ID( :Country ) );
obj << Y as Sum( 1 );

```

