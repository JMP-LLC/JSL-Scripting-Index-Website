# Model Screening



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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
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

**구문:** obj = Model Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Model Screening

**구문:** Model Screening( Y( column ), X( columns ) )

**설명:** 최적 모형을 선택할 수 있도록 다양한 예측 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

## 열

### By

**구문:** obj << By( column(s) )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	By( _bycol )
);

```

### Factor

**구문:** obj << Factor( column(s) )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Freq

**구문:** obj << Freq( column )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Freq( _freqcol )
);

```

### Response

**구문:** obj << Response( column(s) )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Validation

**구문:** obj << Validation( column )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Weight

**구문:** obj << Weight( column )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Weight( _weightcol )
);

```

### X

**구문:** obj << X( column(s) )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

### Y

**구문:** obj << Y( column(s) )

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);

```

## 항목 메시지

### Add Quadratics

**구문:** obj = Model Screening(...Add Quadratics( state=0|1 )...)

**설명:** 연속형 변수의 제곱에 대한 효과를 선형 모델링 적합에 추가합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :LTG, :BMI, :BP, :Glucose, :HDL ),
	Add Quadratics( 1 )
);

```

### Add Two Way Interactions

**구문:** obj = Model Screening(...Add Two Way Interactions( state=0|1 )...)

**설명:** 모든 이원 교호작용 효과를 선형 모델링 적합에 추가합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :LTG, :BMI, :BP, :Glucose, :HDL ),
	Add Two Way Interactions( 1 )
);

```

### Additional Methods

**구문:** obj = Model Screening(...Additional Methods( state=0|1 )...)

**설명:** 일반화 회귀 플랫폼에서 Lasso 회귀 외에 전진 선택, 가지 치기 전진 선택, Elastic Net 및 능형 회귀와 같은 몇 가지 추가 방법을 호출합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Additional Methods( 1 )
);

```

### Boosted Tree

**구문:** obj = Model Screening(...Boosted Tree( state=0|1 )...)

**설명:** 일련의 작은 트리로 구성된 의사 결정 나무를 생성하여 반응을 예측합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Bootstrap Forest

**구문:** obj = Model Screening(...Bootstrap Forest( state=0|1 )...)

**설명:** 랜덤 표집을 사용하여 여러 개의 의사 결정 나무를 생성하고 그 결과의 평균을 구해 반응을 예측합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Cardinality of Predictors

**구문:** obj << Cardinality of Predictors( state=0|1 )

**설명:** 각 범주형 예측 변수의 선형 모형 적합에 사용되는 수준 수와 모수 수에 대한 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Neural( 0 ),
	Bootstrap Forest( 0 ),
	Generalized Regression( 0 ),
	Support Vector Machines( 0 ),
	Cardinality of Predictors( 1 )
);

```

### Decision Threshold

**구문:** obj << Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**설명:** 각 모형에 대한 적합 확률 분포와 실제값 대 예측값 테이블을 표시하거나 숨깁니다. 확률 임계를 변경하여 임계값에 따라 분류 결과에 어떤 영향이 있는지 탐색할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Decision Threshold( 1 )
);

```

### Decision Tree

**구문:** obj = Model Screening(...Decision Tree( state=0|1 )...)

**설명:** 의사 결정 나무를 생성하여 반응을 예측합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 1 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Discriminant

**구문:** obj = Model Screening(...Discriminant( state=0|1 )...)

**설명:** 연속형 변수를 기준으로 범주형 그룹 소속을 분류합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Iris.jmp" );
Make Validation Column( Validation Set( .3 ), Training Set( .7 ), Go );
obj = Model Screening(
	Y( :Species ),
	Validation( :Validation ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Discriminant( 1 ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);

```

### Elapsed Time

**구문:** obj << Elapsed Time( state=0|1 )

**설명:** 각 방법을 적합시키는 데 소요된 총 경과 시간을 포함하는 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Elapsed Time( 1 )
);

```

### Fit Least Squares

**구문:** obj = Model Screening(...Fit Least Squares( state=0|1 )...)

**설명:** 연속형 반응에 대해 선형 회귀 모형을 적합시킵니다. 회귀, 분산 분석, 공분산 분석, 혼합 모형 및 설계된 실험 분석 기법이 포함됩니다. Emphasis 옵션을 사용하면 보고서 레이아웃을 지정할 수 있습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 1 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Fit Stepwise

**구문:** obj = Model Screening(...Fit Stepwise( state=0|1 )...)

**설명:** 단계별 회귀 모형을 적합시킵니다. 이 방법을 사용하면 표준 최소 제곱 및 순서형 로지스틱 모형과 이항 반응을 포함하는 명목형 로지스틱 모형의 변수 선택이 간편해집니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 1 ),
	Generalized Regression( 0 )
);

```

### Generalized Regression

**구문:** obj = Model Screening(...Generalized Regression( state=0|1 )...)

**설명:** 벌점 회귀 기법을 사용하여 일반화 선형 모형을 적합시킵니다. 이 기법은 과대적합을 방지하는 방식으로 변수 선택을 자동화하는 데 유용합니다. 벌점 회귀 기법으로는 Lasso 회귀, 적응형 Lasso 회귀, Elastic Net, 적응형 Elastic Net 및 능형 회귀가 포함됩니다. 반응 분포는 연속형, 범주형, 개수 및 사건 발생 시간 유형의 반응 데이터를 수용할 수 있습니다. 대부분의 회귀 설정에 이 분석법이 권장됩니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 )
);

```

### Informative Missing

**구문:** obj = Model Screening(...Informative Missing( state=0|1 )...)

**설명:** 모든 플랫폼에 대해 결측값 정보화 옵션을 활성화합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Neural( 0 ),
	Informative Missing( 1 )
);

```

### K Fold Crossvalidation

**구문:** obj = Model Screening(...K Fold Crossvalidation( state=0|1 )...)

**설명:** 데이터를 K개의 부분 또는 폴드로 랜덤 분할합니다. 모형은 데이터에 K번 적합되고, 매번 교차 검증 집합으로 홀드아웃된 서로 다른 폴드를 사용합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### K Nearest Neighbors

**구문:** obj = Model Screening(...K Nearest Neighbors( state=0|1 )...)

**설명:** K 최근접 이웃의 반응을 기반으로 반응을 예측합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### K for K Fold

**구문:** obj = Model Screening(...K for K Fold( number=5 )...)

**설명:** K 폴드 교차 검증을 위한 폴드 수를 지정합니다. 기본값은 5이고 K는 1보다 커야 합니다. 기본값은 "5"입니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	K for K Fold( 6 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### K for Nested

**구문:** obj = Model Screening(...K for Nested( number=5 )...)

**설명:** 내포 교차 검증을 위한 폴드 수를 지정합니다. 기본값은 5이고 K는 1보다 커야 합니다. 기본값은 "5"입니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	K for Nested( 3 ),
	L for Nested( 4 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### L for Nested

**구문:** obj = Model Screening(...L for Nested( number=4 )...)

**설명:** 내포 교차 검증을 위한 내측 폴드 수를 지정합니다. 기본값은 4이고 L은 1보다 커야 합니다. 기본값은 "4"입니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	K for Nested( 5 ),
	L for Nested( 4 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Log Methods

**구문:** obj = Model Screening(...Log Methods( state=0|1 )...)

<b>실행기 항목: 예</b>

### Logistic Regression

**구문:** obj = Model Screening(...Logistic Regression( state=0|1 )...)

**설명:** 연속형 예측 변수와 범주형 예측 변수 모두의 명목형 반응 범주에 대한 로지스틱 회귀 모형을 적합시킵니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 0 )
);

```

### Model NParm Limit

**구문:** obj << Model NParm Limit( number=450 )

**설명:** 모델링 플랫폼이 실행되지 않는 최소 모수 수를 지정합니다. 기본값은 "450"입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Add Two Way Interactions( 1 ),
	Add Quadratics( 1 ),
	Model NParm Limit( 40 ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Fit Least Squares( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);

```

### Naive Bayes

**구문:** obj = Model Screening(...Naive Bayes( state=0|1 )...)

**설명:** 범주형 변수의 소속 그룹을 예측합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 ), 

);

```

### Nested Crossvalidation

**구문:** obj = Model Screening(...Nested Crossvalidation( state=0|1 )...)

**설명:** 데이터를 K개의 동일한 부분으로 랜덤 분할한 후 이 중 하나를 제외한 나머지를 L개의 동일한 부분으로 추가 분할합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Nested Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Neural

**구문:** obj = Model Screening(...Neural( state=0|1 )...)

**설명:** 입력 변수의 유연한 함수를 사용하여 하나 이상의 반응 변수를 예측합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Partial Least Squares

**구문:** obj = Model Screening(...Partial Least Squares( state=0|1 )...)

**설명:** 잠재 요인을 사용하여 하나 이상의 반응 변수에 모형을 적합시킵니다. 설명 변수의 상관관계가 높거나 관측값보다 설명 변수가 더 많은 경우에 이 방법으로 모형을 적합시킬 수 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	Partial Least Squares( 1 )
);

```

### Plot Actual by Predicted

**구문:** obj << Plot Actual by Predicted( state=0|1 )

**설명:** 여러 모형 적합의 실제값 대 예측값 점을 중첩합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 1 ),
	Generalized Regression( 1 ),
	Plot Actual by Predicted( 1 )
);

```

### Precision Recall Curve

**구문:** obj << Precision Recall Curve( state=0|1 )

**설명:** 모든 모형 적합에 대한 중첩된 정밀도-재현율 곡선을 표시하거나 숨깁니다. 훈련, 검증 및 테스트 데이터 집합에 대한 개별 그림이 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),

);
obj << Precision Recall Curve( 1 );

```

### Predictor Properties

**구문:** obj << Predictor Properties( state=0|1 )

**설명:** Available if you hold down the shift button, for each platform called, shows information about supported interfaces.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Predictor Properties( 1 )
);

```

### Profiler

**구문:** obj << Profiler( state=0|1 )

**설명:** 각 모형 적합 유형에 대한 예측 프로파일러를 표시하거나 숨깁니다. 이 옵션은 연속형 반응에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 ),
	Profiler( 1 )
);

```

### ROC Curve

**구문:** obj << ROC Curve( state=0|1 )

**설명:** 모든 모형 적합에 대한 중첩된 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. 훈련, 검증 및 테스트 데이터 집합에 대한 개별 그림이 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	ROC Curve( 1 )
);

```

### Remove Live Reports

**구문:** obj = Model Screening(...Remove Live Reports( state=0|1 )...)

**설명:** 모형 선별 보고서 창에서 개별 모형 플랫폼 보고서를 제거합니다. 이 옵션을 사용하면 추가 작업을 위한 메모리를 확보할 수 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	Remove Live Reports( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### Repeated K Fold

**구문:** obj = Model Screening(...Repeated K Fold( number=0 )...)

**설명:** K 폴드 교차 검증 또는 내포 교차 검증 프로세스의 반복 횟수를 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Repeated K Fold( 2 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### SVM NRow Limit

**구문:** obj << SVM NRow Limit( number=10000 )

**설명:** 서포트 벡터 머신이 실행되지 않는 최소 행 수를 지정합니다. 기본값은 "10000"입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Decision Tree( 1 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 1 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	SVM NRow Limit( 6000 )
);

```

### Save Folded Prediction Formula

**구문:** obj << Save Folded Prediction Formula

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 새 열에는 K 폴드 교차 검증에 대한 빠짐 없는 예측 계산식이 포함됩니다. 각 행에 대해 계산식은 해당 행을 사용하여 훈련된 모형 적합을 사용하지 않습니다.

### Save KFold Results Table

**구문:** obj << Save KFold Results Table

**설명:** 폴드 간 요약 보고서의 정보를 새 데이터 테이블에 저장합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	K Fold Crossvalidation( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 1 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 1 ),
	Save KFold Results Table
);

```

### Save Prediction Formulas

**구문:** obj << Save Prediction Formulas

**설명:** 예측 계산식을 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Fit Least Squares( 1 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 0 ),
	Generalized Regression( 0 )
);
obj << Select Fit( "Training", "Best" );
obj << Save Prediction Formulas;

```

### Save Results Table

**구문:** obj << Save Results Table

**설명:** 검증 보고서의 정보를 새 데이터 테이블에 저장합니다. 테스트 데이터 집합이 있는 경우 테스트 보고서의 정보도 새 데이터 테이블에 저장됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Save Results Table
);

```

### Select Fit

**구문:** <<Select Fit( Training | Validation | Test | Summary | Clear All,

	  Clear

	| Dominant

	| Best(<number>),

	| Largest(name,<number>) 

	| Smallest(name,<number>)

	| Where(expression) )

**설명:** 지정된 기준에 따라 다양한 보고서에서 적합을 선택합니다. 이 옵션은 JSL에서만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Select Fit( Validation, Largest( "RSquare", 2 ) );

```

### Set Probability Threshold

**구문:** obj << Set Probability Threshold( number=0.5 )

**설명:** 모델링 플랫폼이 실행되지 않는 최소 모수 수를 지정합니다. 기본값은 "0.5"입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 1 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Decision Threshold( 1 ),
	Set Probability Threshold( .2 )
);

```

### Set Random Seed

**구문:** obj = Model Screening(...Set Random Seed( number )...)

**설명:** 이후 플랫폼 실행에 대한 결과를 재현하는 데 사용할 난수 시드값을 지정합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 123454321 )
);

```

### Show Methods in Log

**구문:** obj = Model Screening(...Show Methods in Log( state=0|1 )...)

**설명:** 적합 플랫폼이 호출될 때마다 진행 메시지를 로그에 기록합니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Log Methods( 1 )
);

```

### Show Profit

**구문:** obj << Show Profit( state=0|1 )

**설명:** 반응 수준에 대해 지정된 수익 행렬을 사용하여 각 모형에 대한 기대 수익을 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
Column( "Y Binary" ) << Set Property(
	"Profit Matrix", {[1 - 1, -0.3333333 1, . .], {"Low", "High", "Undecided"}}
);
obj = Model Screening(
	Y( :Y Binary ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Show Profit( 1 )
);

```

### Specify Profit Matrix

**구문:** obj << Specify Profit Matrix

**설명:** 올바르거나 올바르지 않은 분류 결정과 관련된 수익 또는 비용을 지정할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Model Screening(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Naive Bayes( 0 ),
	Neural( 1 ),
	Support Vector Machines( 0 ),
	Fit Stepwise( 0 ),
	Logistic Regression( 1 ),
	Generalized Regression( 1 ),
	Specify Profit Matrix( [0 -1, -0.6 0, . .], "Married", "Single", "Undecided" ),
	Show Profit( 1 )
);

```

### Support Vector Machines

**구문:** obj = Model Screening(...Support Vector Machines( state=0|1 )...)

**설명:** X 변수의 공간에서 서포트 벡터를 기반으로 반응을 예측합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 1 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 )
);

```

### Time Limit Each

**구문:** obj = Model Screening(...Time Limit Each( number )...)

**설명:** 각 적합에 대한 시간 한계(초)를 지정합니다. 조기 중지를 지원하는 플랫폼의 경우 해당 시점까지의 최적 추정값이 제공됩니다.

**JMP추가된 버전:** 16

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Equity.jmp" );
Model Screening(
	Y( :BAD ),
	Validation( :Validation ),
	X( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Time Limit Each( 1 )
);

```

### Use Two Way Splits for K Fold

**구문:** obj = Model Screening(...Use Two Way Splits for K Fold( state=0|1 )...)

**설명:** Uses only training and validation splits instead of training, validation, and test splits.

**JMP추가된 버전:** 19

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	K Fold Crossvalidation( 1 ),
	Use Two Way Splits for K Fold( 1 ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Neural( 0 ),
	Support Vector Machines( 0 )
);

```

### XGBoost

**구문:** obj = Model Screening(...XGBoost( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** XGBoost 추가기능이 있는 경우 그래디언트 부스트를 위해 XGBoost를 호출합니다. 이 옵션은 추가기능이 설치된 경우에만 나타납니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Diabetes.jmp" );
obj = Model Screening(
	Y( :Y ),
	Validation( :Validation ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Decision Tree( 0 ),
	Bootstrap Forest( 0 ),
	Boosted Tree( 0 ),
	K Nearest Neighbors( 0 ),
	Neural( 0 ),
	Support Vector Machines( 0 ),
	Fit Least Squares( 0 ),
	Fit Stepwise( 0 ),
	Generalized Regression( 0 ),
	XGBoost( 1 )
);

```

