# Variability Chart



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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

**구문:** obj = Variability Chart(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Variability Chart

**구문:** Variability Chart( Y( column ), X( columns ) )

**설명:** 연속형 측정값을 분석하여 측정 시스템의 성능을 확인합니다. 게이지 연구를 수행하여 데이터의 변동 척도를 확인할 수도 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

## 열

### By

**구문:** obj = Variability Chart(...&lt;By( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 변수의 각 수준에 대해 하나씩 여러 보고서를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :new Y ), X( :Operator, :part ), Model( "Crossed" ), By( :Instrument ) );

```

### Freq

**구문:** obj = Variability Chart(...&lt;Freq( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Freq( _freqcol ) );

```

### Grouping

**구문:** obj = Variability Chart(...&lt;Grouping( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 범주형 열을 그룹화 변수로 지정합니다. 목록의 마지막 열은 측정되는 부품 또는 단위여야 합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Response

**구문:** obj = Variability Chart(...Response( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 연속형 측정값 열을 지정합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

### Standard

**구문:** obj = Variability Chart(...&lt;Standard( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 측정된 부품에 대해 알려진 값을 포함하는 표준 열 또는 참조 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Variability Analysis( :Response, Std Dev Chart( 0 ), Linearity Study( 1 ) )
);

```

### X

**구문:** obj = Variability Chart(...&lt;X( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 범주형 열을 그룹화 변수로 지정합니다. 목록의 마지막 열은 측정되는 부품 또는 단위여야 합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Y

**구문:** obj = Variability Chart(...Y( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 연속형 측정값 열을 지정합니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

## 항목 메시지

### Analysis Type

**구문:** obj = Variability Chart(...Analysis Type( "최선의 분석(EMS REML 베이지안) 선택"|"최선의 분석(EMS REML) 선택"|"REML 분석 사용"|"베이지안 분석 사용" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 성분 계산에 사용되는 방법을 식별합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Conv Limit

**구문:** obj = Variability Chart(...Conv Limit( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 성분 계산에 사용되는 수렴 한계를 설정합니다. 이 옵션은 REML 분석에만 영향을 줍니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Conv Limit( 0.0000001 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Edit MSA Metadata

**구문:** obj &lt;&lt; Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), &lt;Historical Mean( number ), Historical Process Sigma( number )&gt; ) )

**설명:** 모든 분석에 대한 공차 범위, 공차 한계, 과거 평균 및 과거 공정 시그마를 추가하거나 편집할 수 있는 창을 엽니다. 보고서는 자동으로 업데이트됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Measurement( Lower Tolerance( .1 ), Upper Tolerance( 1.4 ) ) );

```

### Max Iter

**구문:** obj = Variability Chart(...Max Iter( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 성분 계산에 사용되는 최대 반복 수를 설정합니다. 이 옵션은 REML 분석에만 영향을 줍니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Max Iter( 50 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Function Evals

**구문:** obj = Variability Chart(...Number Function Evals( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 성분 계산에 사용되는 함수 실행 최대 횟수를 설정합니다. 이 옵션은 베이지안 분석에만 영향을 줍니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Function Evals( 10000 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Integration Abscissas

**구문:** obj = Variability Chart(...Number Integration Abscissas( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 성분 계산에 사용되는 통합 가로 좌표 수를 설정합니다. 이 옵션은 베이지안 분석에만 영향을 줍니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Integration Abscissas( 90 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**구문:** obj &lt;&lt; Save All Metadata to Table( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**설명:** 각 측정 데이터 열에 대한 MSA 메타데이터 및 측정 시그마를 포함하는 새 데이터 테이블을 생성합니다. 이 테이블은 세로형 형식이고 각 측정 변수에 대한 행을 포함합니다. 공차 하한 및 상한 값을 데이터 테이블의 추가 열로 저장하는 옵션이 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ), Historical Process Sigma( 0.2 ) )
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**구문:** obj &lt;&lt; Save Metadata as Column Properties( &lt; MSA( 0|1 ) &gt;, &lt; Measurement Sigma( 0|1 ) &gt;, &lt; Tolerance as Specs( 0|1 ) &gt; )

**설명:** 각 측정 데이터 열에 대해 MSA 메타데이터 및 측정 시그마를 원래 데이터 테이블의 열 내에 열 특성으로 저장합니다. 공차 하한 및 상한 값을 규격 한계 열 특성으로 저장하는 옵션이 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ), Historical Process Sigma( 0.2 ) )
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**구문:** obj = Variability Chart(...Set Alpha Level( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 신뢰 구간 및 평균 다이아몬드에 사용되는 유의 수준을 변경합니다. 이 옵션은 &apos;계량형 차트&apos; 시작 창의 &apos;유의 수준 지정&apos; 옵션에 해당합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Set Alpha Level( .1 ) );
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

### Set Random Seed

**구문:** obj = Variability Chart(...Set Random Seed( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 동일한 시드값을 사용하는 모든 후속 실행이 재현 가능하다고 가정하고 난수 시드값을 특정 값으로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Set Random Seed( 1234 )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

### Sigma Multiplier

**구문:** obj = Variability Chart(...Sigma Multiplier( number=6 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시그마에 곱하는 상수 값을 지정합니다. 기본값은 "6"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Sigma Multiplier( 5.15 ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);

```

### Variability Analysis

**구문:** obj &lt;&lt; Variability Analysis

**설명:** 각 측정 반응에 대한 변동 분석 보고서 옵션을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Variance Components( 1 ), "Gauge R&R Report"n( 1 ) )
);

```

## Variability Analysis > Bias Report

### 항목 메시지

#### Confidence Intervals

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Confidence Intervals( state=0|1 )))

**설명:** &apos;표준별 측정 치우침 보고서&apos; 섹션의 그래프에 신뢰 구간을 표시하거나 숨깁니다. 이 옵션은 시작 창에서 표준 변수를 지정한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Std Dev Chart( 0 ) );
obj << (Variability Analysis[1] << Bias Report( Confidence Intervals( 1 ) ));

```

#### Measurement Error Graphs

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Measurement Error Graphs( state=0|1 )))

**설명:** 부품별 치우침의 측정 오차 차트를 표시하거나 숨깁니다. 이 옵션은 시작 창에서 표준 변수를 지정한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Std Dev Chart( 0 ) );
obj << (Variability Analysis[1] << Bias Report( Measurement Error Graphs( 1 ) ));

```

## Variability Analysis > Heterogeneity of Variance Test

### 항목 메시지

#### Point Options

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Point Options("Show Needles" | "Show Connected Points" | "Show Only Points")))

**설명:** 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1, Point Options( Show Only Points ) ));

```

#### Set Alpha Level

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Set Alpha Level( number )))

**설명:** 결정 한계 계산에 사용되는 유의 수준을 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1, Set Alpha Level( 0.1 ) ));

```

#### Show Center Line

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Center Line(state=0|1)))

**설명:** 중심선(전체 평균 ADM)을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1, Show Center Line( 0 ) ));

```

#### Show Decision Limit Shading

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limit Shading(state=0|1)))

**설명:** ANOMV-Levene(ADM) 차트에 대한 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1, Show Decision Limit Shading( 0 ) ));

```

#### Show Decision Limits

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limits(state=0|1)))

**설명:** ANOMV-Levene(ADM) 차트에 대한 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1, Show Decision Limits( 0 ) ));

```

#### Show Summary Report

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Summary Report(state=0|1)))

**설명:** 그룹 표준편차 및 해당 결정 한계가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1, Show Summary Report( 1 ) ));

```

## Variability Analysis > Linearity Study

### 항목 메시지

#### Linearity by Groups

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Linearity By Groups( state=0|1 )))

**설명:** 모형의 각 요인에 대한 개별 선형성 그래프를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Linearity By Groups( 1 ) ));

```

#### Set Alpha Level

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Set Alpha Level( number )))

**설명:** 치우침 신뢰 한계를 계산하는 데 사용되는 유의 수준을 지정합니다. 기본값은 "0.05"입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Set Alpha Level( .01 ) ));

```

#### Show Avg Bias Points

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Avg Bias Points( state=0|1 )))

**설명:** 그래프에 평균 치우침 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Bias Points( state=0|1 )))

**설명:** 그래프에 치우침 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Fit Confidence Curves( state=0|1 )))

**설명:** 그래프에 적합 신뢰 곡선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));

```

#### Show Line of Fit

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Line of Fit( state=0|1 )))

**설명:** 그래프에 적합선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Overall Avg Bias Line( state=0|1 )))

**설명:** 그래프에 전체 평균 치우침 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));

```

## Variability Analysis

### 항목 메시지

#### AIAG Labels

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; AIAG Labels( state=0|1 ))

**설명:** 게이지 R&R 출력에 라벨을 표시하거나 숨깁니다. 라벨은 AIAG(Automotive Industry Action Group)에서 정의합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) ),

);
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 1 ));

```

#### Bias Report

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report( state=0|1 ))

**설명:** 관측된 값과 표준 값 사이의 평균 차이가 포함된 보고서를 표시하거나 숨깁니다. 이 옵션은 표준 변수를 지정한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ), Std Dev Chart( 0 ) );
obj << (Variability Analysis[1] << Bias Report( 1 ));

```

#### Connect Cell Means

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Connect Cell Means( state=0|1 ))

**설명:** 계량형 차트에 셀 그룹 내 셀 평균을 연결하는 선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Connect Cell Means( 1 ));

```

#### Discrimination Ratio

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Discrimination Ratio( state=0|1 ))

**설명:** 지정된 모형에 대한 구별력 비를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Discrimination Ratio( 1 ));

```

#### Edit MSA Metadata

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Edit MSA Metadata(Lower Tolerance(number), Upper Tolerance(number), Tolerance Range(number), Historical Mean(number), Historical Process Sigma(number)))

**설명:** 모든 분석에 대한 공차 범위, 공차 한계, 과거 평균 및 과거 공정 시그마를 추가하거나 편집할 수 있는 창을 엽니다. 보고서는 자동으로 업데이트됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (Variability Analysis[1] << Edit MSA Metadata( Lower Tolerance( .1 ), Upper Tolerance( 1.2 ) ));

```

#### Group Means of Std Dev

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Group Means of Std Dev( state=0|1 ))

**설명:** S 관리도에 셀 표준편차 그룹의 평균 선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Group Means of Std Dev( 1 ));

```

#### Heterogeneity of Variance Tests

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests( state=0|1 ))

**설명:** 그룹 간 분산을 비교하는 보고서를 표시하거나 숨깁니다. 이 보고서에는 모형의 각 요인에 대한 이분산성 검정을 보여 주는 그래프가 포함됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

#### Linearity Study

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study( state=0|1 ))

**설명:** 표준 값을 X 변수로 사용하고 치우침을 Y 변수로 사용하는 회귀 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( 1.1 ) ) ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Linearity Study( 1 ));

```

#### Mean Diamonds

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Diamonds( state=0|1 ))

**설명:** 계량형 차트에 평균 다이아몬드를 표시하거나 숨깁니다. 각 셀의 그룹 내 표준편차가 신뢰 구간에 사용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

#### Mean Plots

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Plots( state=0|1 ))

**설명:** 모형의 각 요인에 대한 요인 수준 평균 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Mean Plots( 1 ));

```

#### Mean of Std Dev

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean of Std Dev( state=0|1 ))

**설명:** S 관리도에서 평균 표준편차 위치에 회색 파선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean of Std Dev( 1 ));

```

#### Misclassification Probabilities

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Misclassification Probabilities( state=0|1 ))

**설명:** 지정된 모형에 대한 오분류 확률이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Misclassification Probabilities( 1 ));

```

#### Points Jittered

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Points Jittered( state=0|1 ))

**설명:** 계량형 차트의 점에 랜덤 수평 지터를 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Points Jittered( 1 ));

```

#### S Control Limits

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; S Control Limits( state=0|1 ))

**설명:** S 관리도에서 LCL(관리 하한) 및 UCL(관리 상한) 위치에 빨간색 선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << S Control Limits( 1 ));

```

#### Show Box Plots

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Box Plots( state=0|1 ))

**설명:** 계량형 차트에 각 셀의 상자 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Box Plots( 1 ));

```

#### Show Cell Means

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Cell Means( state=0|1 ))

**설명:** 계량형 차트에 각 셀의 평균 표식을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 1 ));

```

#### Show Grand Mean

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Mean( state=0|1 ))

**설명:** 전체 그래프에서 가로 방향의 회색 점선으로 나타나는 전체 평균을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Mean( 1 ));

```

#### Show Grand Median

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Median( state=0|1 ))

**설명:** 전체 그래프에서 가로 방향의 파란색 점선으로 나타나는 전체 중앙값을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Median( 1 ));

```

#### Show Group Means

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Group Means( state=0|1 ))

**설명:** 셀 그룹의 평균을 수평 실선으로 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Group Means( 1 ));

```

#### Show Points

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Points( state=0|1 ))

**설명:** 계량형 차트에 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 1 ));

```

#### Show Range Bars

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Range Bars( state=0|1 ))

**설명:** 각 셀의 최대값과 최소값을 나타내는 막대를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 1 ));

```

#### Show Separators

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Separators( state=0|1 ))

**설명:** 계량형 차트에서 그룹화 변수의 각 수준 사이에 구분선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 1 ));

```

#### Show Standard Mean

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Standard Mean( state=0|1 ))

**설명:** 표준 값의 평균 위치에 선을 표시하거나 숨깁니다. 이 옵션은 시작 창에서 표준 변수를 지정한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Standard Mean( 1 ));

```

#### Std Dev Chart

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Chart( state=0|1 ))

**설명:** 각 셀의 표준편차를 표시하는 차트를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 1 ));

```

#### Std Dev Plots

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Plots( state=0|1 ))

**설명:** 각 요인 수준별로 그룹화된 표준편차 그림을 표시하거나 숨깁니다. 모형의 각 요인에 대한 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] << Std Dev Plots( 1 ));

```

#### Variability Chart

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Chart( state=0|1 ))

**설명:** 계량형 차트를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 1 ));

```

#### Variability Summary Report

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Summary Report( state=0|1 ))

**설명:** 평균, 표준편차, CV(변동 계수), 평균의 표준 오차, 신뢰 구간 하한/상한을 보여 주는 보고서를 표시하거나 숨깁니다. 최소값, 최대값, 범위, 중앙값 및 관측값 수도 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Variability Summary Report( 1 ));

```

#### Variance Components

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variance Components( state=0|1 ))

**설명:** 특정 모형에 대한 분산 성분을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

#### Vertical Charts

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Vertical Charts( state=0|1 ))

**설명:** 계량형 차트를 회전합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Vertical Charts( 1 ));

```

#### XBar Control Limits

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; XBar Control Limits( state=0|1 ))

**설명:** 계량형 차트에서 LCL(관리 하한) 및 UCL(관리 상한) 위치에 선을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << XBar Control Limits( 1 ));

```

#### 게이지 R&R 보고서

**구문:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; "Gauge R & R Report"n( state=0|1 ))

**설명:** 게이지 R&R(반복성 및 재현성) 요약 보고서를 계산하고 표시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),

);
obj << (Variability Analysis[1] << "Gauge R&R Report"n( 1 ));

```

