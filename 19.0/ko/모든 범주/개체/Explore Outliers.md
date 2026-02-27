# Explore Outliers



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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

**구문:** obj = Explore Outliers(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Explore Outliers

**구문:** Explore Outliers( Y( columns ) )

**설명:** 단변량 또는 다변량 데이터에서 이상치를 식별, 탐색 및 관리합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## 열

### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );

```

### Columns

**구문:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Label

**구문:** obj &lt;&lt; Label( column )

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Validation

**구문:** obj &lt;&lt; Validation( column )

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## 항목 메시지

### K Nearest Neighbor Outliers

**구문:** obj &lt;&lt; K Nearest Neighbor Outliers

**설명:** 각 점에 대해 k 최근접 이웃까지의 거리를 찾습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << k Nearest Neighbor Outliers( K( 5 ) );

```

### Multivariate k Nearest Neighbor Outliers

**구문:** obj &lt;&lt; Multivariate k Nearest Neighbor Outliers

**JMP추가된 버전:** 14

### Quantile Range Outliers

**구문:** obj &lt;&lt; Quantile Range Outliers

**설명:** 분위수를 넘어 분위수 간 범위의 척도 배수보다 높은 값을 찾습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;

```

### Robust Fit Outliers

**구문:** obj &lt;&lt; Robust Fit Outliers

**설명:** 평균 및 척도의 로버스트 추정값을 사용하여 중심으로부터의 척도 배수보다 높은 값을 찾습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;

```

### Robust PCA Outliers

**구문:** obj &lt;&lt; Robust PCA Outliers

**설명:** 데이터를 낮은 계수 행렬 및 잔차 희소 행렬로 로버스트하게 분해합니다. 잔차에서 이상치가 감지됩니다. 결측값을 대치할 수도 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << Robust PCA Outliers;

```

## K Nearest Neighbor Outliers

### 항목 메시지

#### Close

**구문:** obj &lt;&lt; Close

**JMP추가된 버전:** 16

#### Exclude Selected Rows

**구문:** obj &lt;&lt; Exclude Selected Rows

**JMP추가된 버전:** 16

#### Impute Missing

**구문:** obj &lt;&lt; Impute Missing( state=0 )

**설명:** 결측값이 있는 경우 K 최근접 이웃으로 분석하기 전에 로버스트 PCA를 사용하여 결측값을 대치합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### K

**구문:** obj &lt;&lt; K( number=8 )

**설명:** 테이블의 각 행에 대해 검색할 근접 이웃 행의 수입니다. 기본값은 "8"입니다.

**JMP추가된 버전:** 16

#### Save NN Distances

**구문:** obj &lt;&lt; Save NN Distances

**설명:** 데이터 테이블에 K번째 최근접 이웃에 대한 거리가 포함된 새 열을 저장합니다.

**JMP추가된 버전:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Save NN Distances;

```

#### Scatterplot Matrix

**구문:** obj &lt;&lt; Scatterplot Matrix

**설명:** 모든 열에 대한 산점도 행렬이 포함된 창을 엽니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Scatterplot Matrix;

```

## Multivariate Robust Outliers

### 항목 메시지

#### Close

**구문:** obj &lt;&lt; Close

**JMP추가된 버전:** 16

#### Exclude Selected Rows

**구문:** obj &lt;&lt; Exclude Selected Rows

**JMP추가된 버전:** 16

## Quantile Range Outliers

### 항목 메시지

#### Add Highest Nines to Missing Value Codes

**구문:** obj &lt;&lt; Add Highest Nines to Missing Value Codes( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택하고 선택된 각각의 열에서 가장 높은 9모음값을 찾습니다. 선택한 각 열에서 이러한 값에 대해 결측값 코드 특성을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Add Highest Nines to Missing Value Codes( :PS_RPNBR );
dt:PS_RPNBR << Get Column Properties;
//See Log for Missing Value Codes column property

```

#### Add to Missing Value Codes

**구문:** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택하고 해당 열에서 이상치에 대해 결측값 코드 특성을 추가합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Change Highest Nines to Missing

**구문:** obj &lt;&lt; Change Highest Nines to Missing( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택하고 선택된 열 전체에서 가장 높은 9모음값을 찾습니다. 가장 높은 9모음값을 결측값으로 변경합니다. 이 경우 데이터 테이블이 변경됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Change Highest Nines to Missing( :PS_RPNBR );

```

#### Change to Missing

**구문:** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치로 식별된 값을 결측값으로 변경합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**구문:** obj &lt;&lt; Close

**설명:** 분석 섹션을 제거하고 명령 개요를 다시 엽니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

#### Color Cells

**구문:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치에 해당하는 셀에 색상을 지정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**구문:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치에 해당하는 행에 색상 행 상태를 할당합니다.

**JMP추가된 버전:** 16

#### Exclude Rows

**구문:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치로 식별된 값이 포함된 행을 제외합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**구문:** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**설명:** 이상치를 결측값으로 변경하여 선택한 열에서 새 계산식 열을 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**구문:** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**설명:** 이상치를 결측값으로 변경하여 선택한 열에서 새 계산식 열을 생성하는 스크립트를 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

#### Get Quantile Outliers

**구문:** obj &lt;&lt; Get Quantile Outliers

**설명:** 이상치가 포함된 열의 목록과 해당 열에 이상치가 포함된 벡터의 목록을 포함하는 목록을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Get Quantile Outliers;

```

#### Q

**구문:** obj &lt;&lt; Q( number=3 )

**설명:** 분위수 간 거리에 대해 척도 배수 Q를 설정합니다. 꼬리 분위수를 넘어 분위수 간 거리의 Q배보다 높은 값은 이상치로 간주됩니다. 설정을 적용하려면 다시 스캔을 사용하십시오. 기본값은 "3"입니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Q( 4 ) );

```

#### Rescan

**구문:** obj &lt;&lt; Rescan

**설명:** 기준을 다시 계산하고 데이터를 다시 스캔하여 이상치를 구하려면 설정을 변경한 후 사용하십시오.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Tail Quantile( 0.2 );
obj << Rescan;

```

#### Restrict search to integers

**구문:** obj &lt;&lt; Restrict search to integers( state=0|1 )

**설명:** 이상치 값을 정수 값으로만 제한합니다. 이 설정은 특정 결측값 코드 및 오류 코드를 찾기 위해 이상치에 대한 검색을 정수로 제한하는 것입니다. 분위수 범위 이상치 및 로버스트 적합 이상치 방법에서 사용이 가능합니다. 기본적으로 해제되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Restrict search to integers( 1 ) )
);

```

#### Save Quantile Outlier Limits

**구문:** obj &lt;&lt; Save Quantile Outlier Limits

**설명:** 분위수 범위 이상치 보고서 정보 및 이상치 값 열이 포함된 새 데이터 테이블을 엽니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Save Quantile Outlier Limits;

```

#### Select Rows

**구문:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택하고 해당 열에서 이상치가 있는 행을 선택합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

#### Show only columns with outliers

**구문:** obj &lt;&lt; Show only columns with outliers( state=0|1 )

**설명:** 보고서의 열 목록을 이상치가 포함된 열로 제한합니다. 분위수 범위 이상치 및 로버스트 적합 이상치 방법에 사용할 수 있습니다. 기본적으로 해제되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);

```

#### Tail Quantile

**구문:** obj &lt;&lt; Tail Quantile( number=.10 )

**설명:** 각 꼬리에 대해 분위수 값을 설정합니다. 분위수는 분위수 간 거리를 계산하는 데 사용됩니다. 설정을 적용하려면 다시 스캔을 사용하십시오. 기본값은 ".10"입니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.2 ) );

```

## Robust Fit Outliers

### 항목 메시지

#### Add to Missing Value Codes

**구문:** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택하고 해당 열에서 이상치에 대해 결측값 코드 특성을 추가합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Cauchy

**구문:** obj &lt;&lt; Cauchy( state=0|1 )

**설명:** Cauchy 분포를 사용하여 로버스트 중심 및 값 척도를 추정합니다. 로버스트 중심 및 척도는 이상치를 결정하는 데 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Cauchy( 1 );
obj << Rescan;

```

#### Change to Missing

**구문:** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치로 식별된 값을 결측값으로 변경합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**구문:** obj &lt;&lt; Close

**설명:** 분석 섹션을 제거하고 명령 개요를 다시 엽니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

#### Color Cells

**구문:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치에 해당하는 셀에 색상을 지정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**구문:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치에 해당하는 행에 색상 행 상태를 할당합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << Clear Row States;
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Rows( :"Q-E"n, :"ZN-E"n );

```

#### Exclude Rows

**구문:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택합니다. 선택한 열에서 이상치로 식별된 값이 포함된 행을 제외합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**구문:** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**설명:** 이상치를 결측값으로 변경하여 선택한 열에서 새 계산식 열을 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**구문:** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**설명:** 이상치를 결측값으로 변경하여 선택한 열에서 새 계산식 열을 생성하는 스크립트를 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

#### Huber

**구문:** obj &lt;&lt; Huber( state=0|1 )

**설명:** Huber 추정값을 사용하여 로버스트 중심 및 값 척도를 추정합니다. 로버스트 중심 및 척도는 이상치를 결정하는 데 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Huber( 1 );
obj << Rescan;

```

#### K Sigma

**구문:** obj &lt;&lt; K Sigma( number=4 )

**설명:** K 시그마 값을 설정합니다. 여기서 이상치는 로버스트 중심으로부터의 로버스트 척도 값의 K배 이상 떨어진 값으로 정의됩니다. 기본값은 "4"입니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 3 );
obj << Rescan;

```

#### Quartile

**구문:** obj &lt;&lt; Quartile( state=0|1 )

**설명:** 중앙값을 사용하여 로버스트 중심 및 사분위수 범위를 1.349로 나누어 로버스트 척도를 추정합니다. 로버스트 중심 및 척도는 이상치를 결정하는 데 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Quartile( 1 );
obj << Rescan;

```

#### Rescan

**구문:** obj &lt;&lt; Rescan

**설명:** 기준을 다시 계산하고 데이터를 다시 스캔하여 이상치를 구하려면 설정을 변경한 후 사용하십시오.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 2.5 );
obj << Rescan;

```

#### Save Robust Outlier Limits

**구문:** obj &lt;&lt; Save Robust Outlier Limits

**설명:** "로버스트 추정값 및 이상치" 보고서의 정보가 포함된 새 데이터 테이블을 엽니다.

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Save Robust Outlier Limits;

```

#### Select Rows

**구문:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**설명:** 인수로 나열된 열을 선택하고 해당 열에서 이상치가 있는 행을 선택합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

## Robust PCA Outliers

### 항목 메시지

#### Center

**구문:** obj &lt;&lt; Center( state=1 )

**설명:** 분석 전에 중앙값으로 데이터를 중심화할지 여부를 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Close

**구문:** obj &lt;&lt; Close

**설명:** 플랫폼 보고서에서 RPCA 분석을 제거합니다.

**JMP추가된 버전:** 16

#### Lambda

**구문:** obj &lt;&lt; Lambda( number )

**설명:** 낮은 값을 사용한 로버스트 PCA 조정은 이상치 선언을 더 민감하게 만듭니다. 기본 람다=2/sqrt(max(nRow,nCol))

**JMP추가된 버전:** 16

#### MaxIt

**구문:** obj &lt;&lt; MaxIt( number )

**설명:** 수렴에 실패하기 전에 허용되는 최대 SVD 반복 횟수입니다.

**JMP추가된 버전:** 16

#### Outlier Threshold

**구문:** obj &lt;&lt; Outlier Threshold( number=2 )

**설명:** 이 임계값보다 절대값이 큰 척도화된 잔차가 이상치 보고서에 표시된 것과 동일하게 표시되도록 지정합니다. 기본값은 "2"입니다.

**JMP추가된 버전:** 16

#### Randomized SVD Dim

**구문:** obj &lt;&lt; Randomized SVD Dim( state=0|1 )

**설명:** 변수의 수가 많은 와이드 문제를 축소하기 위해 랜덤화 SVD의 차원 수를 지정합니다.

**JMP추가된 버전:** 17

#### Save Cleaned

**구문:** obj &lt;&lt; Save Cleaned( Trim(&lt;threshold&gt;),Impute(&lt;threshold&gt;),Make Missing(&lt;threshold&gt;),Color Impute(0|1)--if none specified it will prompt with dialog )

**설명:** 대치된 결측값과 수정된 이상치를 포함하는 새 열 집합을 생성합니다. Trim(arg)은 arg보다 큰 척도화된 잔차를 찾고 해당 셀의 척도화된 잔차를 부호 있는 arg로 변경합니다. Impute(arg)는 arg보다 큰 척도화된 잔차를 찾고 해당 셀의 척도화된 잔차를 낮은 계수 근사로 변경합니다. Make Missing(value)은 arg보다 큰 척도화된 잔차를 찾고 해당 셀의 척도화된 잔차를 결측값으로 변경합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers );
obj << Save Cleaned( Trim( 25 ), Impute( 50 ), Make Missing( 100 ) );

```

#### Save Large Outliers

**구문:** obj &lt;&lt; Save Large Outliers

**설명:** 보고서의 이상치를 포함하는 새 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers );
obj << Save Large Outliers;

```

#### Save Low Rank Approx

**구문:** obj &lt;&lt; Save Low Rank Approx

**설명:** 특이값 분해에서 얻은 낮은 계수 근사를 포함하는 새 열 집합을 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers );
obj << Save Low Rank Approx;

```

#### Save Residuals

**구문:** obj &lt;&lt; Save Residuals

**설명:** 관측값에서 낮은 계수 근사를 뺀 잔차를 포함하는 새 열 집합을 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers );
obj << Save Residuals;

```

#### Save Scaled Residuals

**구문:** obj &lt;&lt; Save Scaled Residuals

**설명:** 척도화된 관측값에서 낮은 계수 근사를 뺀 척도화된 잔차를 포함하는 새 열 집합을 생성합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), Robust PCA Outliers );
obj << Save Scaled Residuals;

```

#### Scale

**구문:** obj &lt;&lt; Scale( state=1 )

**설명:** 분석 전에 표준편차와 유사한 분위수 간 범위로 데이터를 척도화할지 여부를 지정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

#### Tolerance

**구문:** obj &lt;&lt; Tolerance( number )

**설명:** 알고리즘의 중지 시기를 결정하는 수렴 기준을 지정합니다. 기본 수렴 기준 값은 시작 창에 지정된 열 수를 기준으로 설정됩니다.

**JMP추가된 버전:** 16

#### Use Randomized SVD

**구문:** obj &lt;&lt; Use Randomized SVD( state=0|1 )

**설명:** 랜덤화 SVD를 사용하여 차원을 축소합니다. 이 방법은 변수의 수가 매우 많은 와이드 문제에서 계산 속도를 높일 수 있습니다.

**JMP추가된 버전:** 17

