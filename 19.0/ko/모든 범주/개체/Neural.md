# Neural



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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
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

**구문:** obj = Neural(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Neural

**구문:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**설명:** 입력 변수의 유연한 함수를 사용하여 하나 이상의 반응 변수를 예측합니다. 유연한 프레임워크에는 여러 층 및 s 형태의 함수가 통합되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );

```

## 열

### By

**구문:** obj = Neural(...&lt;By( column(s) )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol ),
	Go
);

```

### Factor

**구문:** obj = Neural(...Factor( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );

```

### Freq

**구문:** obj = Neural(...&lt;Freq( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Freq( _freqcol ),
	Go
);

```

### Response

**구문:** obj = Neural(...Response( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );

```

### Validation

**구문:** obj = Neural(...&lt;Validation( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 검증 데이터 집합을 정의하는 숫자 열을 지정합니다. 이 열에는 최대 세 개의 구분되는 값이 포함되어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation )
);
obj << Go;

```

### X

**구문:** obj = Neural(...X( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 예측 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );

```

### Y

**구문:** obj = Neural(...Y( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분석할 하나 이상의 반응 변수를 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );

```

## 항목 메시지

### Fit

**구문:** obj &lt;&lt; Fit( NTanH|NLinear|NTanH2|NLinear2|NGaussian|NGaussian2( number ) )

**설명:** 신경망의 은닉층 구조를 데이터에 지정하고 적합시킵니다. 여러 층 및 비 TanH 활성 함수는 JMP Pro에서만 사용할 수 있습니다. 여러 층 및 활성 함수를 지정하려면 인수를 쉼표로 구분하십시오.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ) );
obj << Fit( NTanH( 4 ) );

```

### Go

**구문:** obj &lt;&lt; Go

**설명:** 신경망 모형 적합을 시작합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ) );
Wait( 1 );
obj << Go;

```

### Informative Missing

**구문:** obj = Neural(...Informative Missing( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 결측값 대치 및 코딩을 가능하게 합니다. 이 옵션을 선택하지 않으면 결측값이 있는 행이 무시됩니다.



연속형 변수의 경우 결측값은 변수의 평균으로 대치됩니다. 또한 결측 표시 변수가 생성되어 모형에 포함됩니다.



범주형 변수의 경우에는 결측값이 대치되지 않고 모형에 있는 해당 변수의 다른 수준으로 처리됩니다. 이 옵션은 JMP Pro에서만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Neural( Y( :weight ), X( :height, :age ), Informative Missing( 1 ), Go );

```

### Learning Rate

**구문:** obj &lt;&lt; Learning Rate( fraction )

**설명:** 부스트를 위한 척도 인수를 지정합니다. 학습률이 1에 가까우면 최종 모형에 대한 수렴이 빨라지지만 데이터가 과대적합되는 경향도 높습니다. 이 옵션은 JMP Pro에서만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 )
);
obj << Learning Rate( 0.2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Multithreading

**구문:** obj = Neural(...Multithreading( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 계산을 컴퓨터의 사용 가능한 스레드 간에 분산합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 0 )
);
obj << Go;

```

### N Boost

**구문:** obj &lt;&lt; N Boost( number )

**설명:** 부스트에 사용되는 최대 모형 수를 지정합니다. 이 옵션은 JMP Pro에서만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ) );
obj << N Boost( 2 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Penalty Method

**구문:** obj &lt;&lt; Penalty Method( "제곱"|"절대"|"가중치 감소"|"벌점 없음" )

**설명:** 적합 프로세스 중 가능도에 벌점을 부과하는 벌점 방법을 지정합니다. 벌점 모수는 신경망에서 데이터가 과대적합되는 경향을 줄입니다. 대부분의 X 변수가 모형의 예측 능력에 기여한다고 생각되면 &apos;제곱&apos; 옵션이 적절합니다. X 변수의 개수가 많고 이 중 몇 개가 다른 변수보다 많이 기여한다고 생각되면 &apos;절대&apos; 옵션과 &apos;가중치 감소&apos; 옵션이 적절합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ) );
obj << Penalty Method( "Absolute" );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Robust Fit

**구문:** obj &lt;&lt; Robust Fit( state=0|1 )

**설명:** 최소 제곱 대신 최소 절대 편차를 사용하여 모형을 훈련합니다. 이 옵션은 반응 이상치의 영향을 최소화하려는 경우에 유용하며, JMP Pro에서 연속형 반응에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ) );
obj << Robust Fit( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Set Random Seed

**구문:** obj = Neural(...Set Random Seed( number )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 시작 값 및 검증 할당을 재현하는 데 사용되는 난수 시드값을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 )
);
Wait( 1 );
obj << Go;

```

### Transform Covariates

**구문:** obj &lt;&lt; Transform Covariates( state=0|1 )

**설명:** Johnson Su 또는 Johnson Sb 분포를 사용하여 모든 연속형 변수를 정규성에 가까운 변수로 변환합니다. 연속형 변수의 변환은 이상치 또는 치우침이 심한 분포가 가져오는 부정적인 영향을 완화하는 데 도움이 됩니다. 이 옵션은 JMP Pro에서만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ) );
obj << Transform Covariates( 1 );
obj << Go;
obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Validation Method

**구문:** obj = Neural(...Validation Method( "Excluded Rows Holdback"|"Holdback", &lt;fraction = 0.3333&gt;|"KFold", &lt;number = 5&gt; )...);

**설명:** 모형 검증에 사용되는 방법을 지정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Method( "Holdback", 0.4 ),
	Go
);

```

## Neural Fit

### 항목 메시지

#### Categorical Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Categorical Profiler( state=0|1 ))

**설명:** 모든 범주형 반응이 단일 프로파일러 행에 결합된 예측 프로파일러를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Categorical Profiler( 1 ));

```

#### Contour Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 모형에 두 개 이상의 연속형 요인이 포함된 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Contour Profiler( 1 ));

```

#### Decision Threshold

**구문:** obj &lt;&lt; fit([number] &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) ))

**설명:** 각 모형에 대한 적합 확률 분포와 실제값 대 예측값 테이블을 표시하거나 숨깁니다. 확률 임계를 변경하여 임계값에 따라 분류 결과에 어떤 영향이 있는지 탐색할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 0 );
obj << (Fit[1] << Decision Threshold( 1 ));
Wait( 1 );
obj << (Fit[1] << Decision Threshold( 1, Set Probability Threshold( .7 ) ));

```

#### Diagram

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Diagram( state=0|1 ))

**설명:** 은닉층 구조를 나타내는 다이어그램을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));

```

#### Get Average Absolute Error Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Test)

**설명:** 테스트 데이터 집합의 평균 절대 편차 통계량을 반환합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Test);
Show( ae );

```

#### Get Average Absolute Error Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Training)

**설명:** 훈련 데이터 집합의 평균 절대 편차 통계량을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Training);
Show( ae );

```

#### Get Average Absolute Error Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Validation)

**설명:** 검증 데이터 집합의 평균 절대 편차 통계량을 반환합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
ae = obj << (Fit[1] << Get Average Absolute Error Validation);
Show( ae );

```

#### Get Average Log Error Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Test)

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 테스트 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Test);
Show( avg );

```

#### Get Average Log Error Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Training)

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 훈련 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Training);
Show( avg );

```

#### Get Average Log Error Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Validation)

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 검증 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
avg = obj << (Fit[1] << Get Average Log Error Validation);
Show( avg );

```

#### Get Confusion Matrix Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Test)

**설명:** 테스트 데이터 집합에 대한 혼동 행렬을 반환합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Test);
Show( cm );

```

#### Get Confusion Matrix Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Training)

**설명:** 훈련 데이터 집합에 대한 혼동 행렬을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Training);
Show( cm );

```

#### Get Confusion Matrix Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Validation)

**설명:** 검증 데이터 집합에 대한 혼동 행렬을 반환합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cm = obj << (Fit[1] << Get Confusion Matrix Validation);
Show( cm );

```

#### Get Confusion Rates Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Test)

**설명:** 테스트 데이터 집합에 대한 혼동 비율을 반환합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Test);
Show( cr );

```

#### Get Confusion Rates Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Training)

**설명:** 훈련 데이터 집합에 대한 혼동 비율을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Training);
Show( cr );

```

#### Get Confusion Rates Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Validation)

**설명:** 검증 데이터 집합에 대한 혼동 비율을 반환합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
cr = obj << (Fit[1] << Get Confusion Rates Validation);
Show( cr );

```

#### Get Gen RSquare Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Test)

**설명:** 테스트 데이터 집합의 일반화 R² 통계량을 반환합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Test);
Show( rt );

```

#### Get Gen RSquare Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Training)

**설명:** 훈련 데이터 집합의 일반화 R² 통계량을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Training);
Show( rt );

```

#### Get Gen RSquare Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Validation)

**설명:** 검증 데이터 집합의 일반화 R² 통계량을 반환합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get Gen RSquare Validation);
Show( rt );

```

#### Get MM SAS DATA Step

**구문:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get MM SAS Data Step)

**설명:** SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get MM SAS Data Step);

```

#### Get Measures

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Measures)

**설명:** 모형에서 적합 측도 요약을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Diagram( 1 ));
obj << (Fit[1] << Get Measures);

```

#### Get Misclassification Rate Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Test)

**설명:** 테스트 데이터 집합에 대한 오분류 비율을 반환합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mr = obj << (Fit[1] << Get Misclassification Rate Test);
Show( mr );

```

#### Get Misclassification Rate Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Training)

**설명:** 훈련 데이터 집합에 대한 오분류 비율을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Training);
Show( mrt );

```

#### Get Misclassification Rate Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Validation)

**설명:** 검증 데이터 집합에 대한 오분류 비율을 반환합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
mrt = obj << (Fit[1] << Get Misclassification Rate Validation);
Show( mrt );

```

#### Get NBoost

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get NBoost)

**설명:** 부스트에 사용된 모형 수를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	N Boost( 2 ),
	Go
);
n = obj << (fit[1] << Get NBoost);
Show( n );

```

#### Get Precision Recall Area Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Test)

**설명:** 테스트 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Test);
Show( ra );

```

#### Get Precision Recall Area Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Training)

**설명:** 훈련 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Training);
Show( ra );

```

#### Get Precision Recall Area Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Validation)

**설명:** 검증 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));
ra = obj << (Fit[1] << Get Precision Recall Area Validation);
Show( ra );

```

#### Get Prediction Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**설명:** 예측 계산식 열을 생성하는 스크립트를 생성하여 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Get Prediction Formula);

```

#### Get RMS Error Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Test)

**설명:** 테스트 오차에 대한 평균 제곱의 제곱근을 반환합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Test);
Show( re );

```

#### Get RMS Error Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Training)

**설명:** 훈련 오차에 대한 평균 제곱의 제곱근을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Training);
Show( re );

```

#### Get RMS Error Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Validation)

**설명:** 검증 오차에 대한 평균 제곱의 제곱근을 반환합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
re = obj << (Fit[1] << Get RMS Error Validation);
Show( re );

```

#### Get ROC Area Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Test)

**설명:** 테스트 데이터의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Test);
Show( ra );

```

#### Get ROC Area Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Training)

**설명:** 훈련 데이터 집합의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Training);
Show( ra );

```

#### Get ROC Area Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Validation)

**설명:** 검증 데이터 집합의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));
ra = obj << (Fit[1] << Get ROC Area Validation);
Show( ra );

```

#### Get RSquare Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Test)

**설명:** 테스트 데이터 집합의 엔트로피 R² 통계량을 반환합니다. 이 옵션은 JMP Pro에서 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Neural(
	Y( :BAD ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Test);
Show( rt );

```

#### Get RSquare Training

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Training)

**설명:** 훈련 데이터 집합의 엔트로피 R² 통계량을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Training);
Show( rt );

```

#### Get RSquare Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Validation)

**설명:** 검증 데이터 집합의 엔트로피 R² 통계량을 반환합니다. 이 옵션은 검증 데이터 집합을 사용하는 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
rt = obj << (Fit[1] << Get RSquare Validation);
Show( rt );

```

#### Get SAS DATA Step

**구문:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get SAS Data Step)

**설명:** 새 데이터 집합을 스코어링하는 데 사용할 수 있는 SAS 코드를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
code = obj << (Fit[1] << Get SAS Data Step);

```

#### Get Seconds

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Seconds)

**설명:** 분석을 완료하는 데 사용된 시간(초)을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
s = obj << (Fit[1] << Get Seconds);
Show( s );

```

#### Lift Curve

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**설명:** 향상도 곡선 그림을 표시하거나 숨깁니다. 향상도 곡선은 향상도 대 관측값 비율을 표시하고 모형의 예측 능력에 대한 또 다른 보기를 제공합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Lift Curve( 1 ));

```

#### Make SAS DATA Step

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Make SAS Data Step)

**설명:** 새 데이터 집합을 스코어링하는 데 사용할 수 있는 SAS 코드를 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Make SAS Data Step);

```

#### Plot Actual by Predicted

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**설명:** 세로 축에 실제값이 있고 가로 축에 예측값이 있는 그림을 표시하거나 숨깁니다. 이 옵션은 연속형 반응에만 사용할 수 있습니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Actual By Predicted( 1 ));

```

#### Plot Residual by Predicted

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual by Predicted( state= 0|1 ))

**설명:** 세로 축에 잔차가 있고 가로 축에 예측값이 있는 그림을 표시하거나 숨깁니다. 이 옵션은 연속형 반응에만 사용할 수 있습니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Plot Residual By Predicted( 1 ));

```

#### Precision Recall Curve

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**설명:** 반응 변수의 각 수준에 대한 곡선을 포함하는 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Profiler( 1 ));

```

#### Publish Prediction Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**설명:** 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Publish Prediction Formula);

```

#### ROC Curve

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << ROC Curve( 1 ));

```

#### Remove Fit

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**설명:** 전체 모형 보고서를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Save Fast Formulas

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Fast Formulas)

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 이 열에는 예측 반응에 대한 계산식이 포함되며, 은닉층 노드에 대한 계산식이 이 계산식에 포함되어 있습니다. 이 옵션은 빠르게 실행되지만 대화식 버전의 프로파일러에서 사용할 수 없는 계산식을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Fast Formulas);

```

#### Save Formulas

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Formulas)

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 예측 반응과 은닉층 노드에 대한 개별 계산식 열이 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Formulas);

```

#### Save Profile Formulas

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Profile Formulas)

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 이 열에는 예측 반응에 대한 계산식이 포함되며, 은닉층 노드에 대한 계산식이 이 계산식에 포함되어 있습니다. 이 옵션은 대화식 버전의 프로파일러에서 사용할 수 있는 계산식을 생성합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Profile Formulas);

```

#### Save Transformed Covariates

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Transformed Covariates)

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 공변량을 변환하는 데 사용되는 계산식이 포함됩니다. 이 옵션은 JMP Pro의 시작 창에서 공변량 변환 옵션을 지정한 경우에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Transform Covariates( 1 ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Transformed Covariates);

```

#### Save Validation

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation)

**설명:** 새 열을 데이터 테이블에 저장합니다. 이 열은 훈련 데이터 집합과 검증 데이터 집합에 사용된 행을 식별합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Save Validation);

```

#### Show Estimates

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Show Estimates( state=0|1 ))

**설명:** 모수 추정값 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Show Estimates( 1 ));

```

#### Surface Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**설명:** 3차원 표면 그림을 표시하거나 숨깁니다. 이 옵션은 X 변수가 두 개 이상 있는 모형에만 사용할 수 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Fit( NTanH( 2 ) ),
	Fit( NGaussian( 3 ) )
);
obj << (Fit[1] << Surface Profiler( 1 ));

```

