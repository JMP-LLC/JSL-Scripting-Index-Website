# Profiler



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

### Column Switcher

**구문:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
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

### Get Container

**구문:** obj << Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**구문:** obj << Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Relaunch Analysis;

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

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

## 연결된 생성자

### Profiler

**구문:** Profiler( Y( column1, <column2>, ..., <PredSE column1, PredSE column2>, ... ), <Expand> )

**설명:** 요인 설정을 변경하면 예측 반응이 어떻게 변하는지 탐색할 수 있는 대화식 그래프를 생성합니다. 각 요인에 대해 프로파일러는 저장된 예측 계산식 및 선형 제약 조건에 기반한 예측 추적선을 표시하고, 해당 요인과 관련하여 반응이 어떻게 변하는지 보여 줍니다. Expand 인수는 시작 창의 중간 계산식 확장 옵션에 해당합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Diabetes.jmp" );
colNum = N Items( dt << Get Column Names );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" ),
	Run()
);
obj << Save Columns( Prediction Formula( 1 ), StdErr Pred Formula( 1 ) );
obj << Close Window( 1 );
predCol = Column( dt, colNum + 1 );
stderrCol = Column( dt, colNum + 2 );
dt << Profiler( Y( predCol, stderrCol ), Profiler( 1, Confidence Intervals( 1 ), ), Use SE Formula( 1 ) );

```

**예제 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Stochastic Optimization.jmp" );
dt << Profiler( Y( :Yield ), Profiler( 1, Desirability Functions( 1 ), ), Expand );

```

## 열

### Noise Factors

**구문:** obj = Profiler(...<Noise Factors( column(s) )>...)

<b>실행기 항목: 예</b>

**설명:** 계산식 열의 성분 열이어야 하는 잡음 요인을 지정합니다. 잡음 요인은 이러한 요인에서 전달되는 변동에 대한 강건성 또는 평탄성을 연구하는 데 사용됩니다. 결과 프로파일러에는 잡음 요인에 대한 계산식의 도함수가 포함됩니다.

**등고선 프로파일러 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Noise Factors( :SILANE )
);

```

**사용자 프로파일러 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Noise Factors( :SILANE )
);

```

**프로파일러 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Noise Factors( :SILANE )
);

```

**혼합물 프로파일러 예**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

### Prediction Formula

**구문:** obj = Profiler(...Prediction Formula( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 계산식을 포함하는 반응 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);

```

### Y

**구문:** obj = Profiler(...Y( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 계산식을 포함하는 반응 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);

```

## 항목 메시지

### Adapt Y Axis

**구문:** obj << Adapt Y Axis( state=0|1 )

**설명:** 반응이 축 범위를 벗어나는 경우 반응 범위가 포함되도록 세로 축의 척도를 조정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
obj << Maximize Desirability;
Wait( 1 );
obj << Adapt Y Axis;

```

### Add Shapley graph scripts to data table

**구문:** obj << Add Shapley graph scripts to data table( state=0|1 )

**설명:** 모형의 각 반응에 대한 행별로 Shapley 값의 JSL 그래프 빌더 막대 차트 스크립트를 추가합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Add Shapley graph scripts to data table( 1 ), Save Shapley Values ));

```

### Animation

**구문:** obj << Animation( <Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )>, <Speed(ticks)>, <Go>, <Stop> )

**설명:** 프로파일러의 애니메이션을 시작하거나 중지합니다. 요인 조합에 대해 애니메이션의 순환 방법을 지정할 수도 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Animation( Tour Type( "Sequential" ), Go );
Wait( 3 );
obj << Animation( "Stop" );

```

### Append Settings to Table

**구문:** obj << Append Settings to Table

**설명:** 현재 프로파일러 설정을 데이터 테이블의 끝에 새 행으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Append Settings to Table;

```

### Arrange in Rows

**구문:** obj << Arrange in Rows( number )

**설명:** 연속으로 나타나는 그림 수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Arrange in Rows( 2 );

```

### Broadcast Factor Settings

**구문:** obj << Broadcast Factor Settings

**설명:** 현재 프로파일러의 요인 설정을 다른 모든 프로파일러로 보냅니다. 이 옵션은 프로파일러를 연결하지 않습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 ),
	Term Value(
		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),
		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),
		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )
	)
);
obj << Contour Profiler( 1 );
Wait( 1 );
obj << Broadcast Factor Settings;

```

### Colorize

**구문:** obj << Colorize( matrix )

**설명:** 0(색상 미지정)과 1(진한 빨간색) 사이의 비율 행렬을 지정합니다. 행렬의 행과 열은 프로파일러의 Y와 X 변수에 해당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Colorize( [.0 .4 .5, .1 .2 .3, .4 .5 .3, .5 .1 .1] );

```

### Colorize Profiler

**구문:** subobj << Colorize Profiler

**설명:** 빨강-흰색 강도 척도를 사용하여 총 효과 중요도 지수별로 프로파일러의 셀에 색상을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] << get scriptable object);
subobj << Colorize Profiler;

```

### Combinations

**구문:** obj << Combinations( "혼합"|"이원"|"다원" )

**설명:** 프로파일러에 중첩 교호작용 곡선으로 표시되는 교호작용 유형을 지정합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Combinations( "Many-Way" );

```

### Compute Shapley values for all rows

**구문:** obj << Compute Shapley values for all rows( state=0|1 )

**설명:** 데이터 테이블에서 제외되거나 제외되지 않은 모든 행에 대한 Shapley 값을 계산합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
r = dt << Select Rows( [5, 7, 8, 10] );
r << Exclude;
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Compute Shapley values for all rows( 1 ), Save Shapley Values ));

```

### Conditional Predictions

**구문:** obj << Conditional Predictions( state=0|1 )

**설명:** 예측값 및 프로파일을 구성할 때 임의 효과를 포함합니다. 이 옵션은 모형에 임의 효과가 포함된 경우 모형 적합 플랫폼의 혼합 적합 분석법에서만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj1 = dt << Run Script( "Repeated Measures Model" );
obj1 << Profiler( Conditional Predictions( 1 ) );

```

### Confidence Intervals

**구문:** obj << Confidence Intervals( state=0|1 )

**설명:** 프로파일러 그래프의 곡선에 시뮬레이션된 평균에 대한 95% 신뢰 구간을 표시하거나 숨깁니다. 시작 창에서 표준 오차 계산식을 지정한 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj1 = dt << Run Script( "RSM for 4 Responses" );
obj1 << Prediction Formula;
obj1 << StdErr Pred Formula;
obj = dt << Profiler(
	Y( :Pred Formula ABRASION 2, :Pred Formula MODULUS 2, :Pred SE ABRASION, :Pred SE MODULUS )
);
Wait( 1 );
obj << Confidence Intervals( 0 );

```

### Contour Profiler

**구문:** obj << Contour Profiler( state=0|1 )

**설명:** 등고선 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Contour Profiler( 1 );

```

### Converge Limit

**구문:** obj << Converge Limit( number )

**설명:** 최적화 알고리즘의 수렴 기준을 지정합니다. 두 번의 연속 반복에 대해 수렴 기준이 이 값보다 작으면 알고리즘이 중지됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Converge limit( 0.0001 );
obj << Optimize;

```

### Copy Settings Script

**구문:** obj << Copy Settings Script

**설명:** 현재 요인 설정을 클립보드에 복사합니다. 그런 다음 설정을 다른 프로파일러에 붙여 넣을 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Custom Profiler

**구문:** obj << Custom Profiler( state=0|1 )

**설명:** 사용자 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Custom Profiler( 1 );

```

### Data Points

**구문:** obj << Data Points( state=0|1 )

**설명:** 예측 프로파일러 그림에 개별 데이터 점을 표시하거나 숨깁니다. 데이터 점은 각 프로파일러 평면에서 얼마나 멀리 떨어져 있는지에 따라 흐리게 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Data Points( 1 );

```

### Default N Grid Points

**구문:** obj << Default N Grid Points( number )

**설명:** 각 연속형 요인에 대한 수준 수를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Default N Grid Points( 5 );

```

### Default N Levels

**구문:** obj << Default N Levels( number )

### Dependent Resampled Inputs

**구문:** obj << Dependent Resampled Inputs( state=0|1 )

**설명:** 입력이 종속적이라고 가정하고 데이터 테이블을 재표집하여 변수 중요도 평가 옵션에 사용되는 지수를 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Dependent Resampled Inputs( 1 );

```

### Design Space

**구문:** obj << Design Space( state=0|1 )

### Design Space Profiler

**구문:** obj << Design Space Profiler( state=0|1 )

**설명:** Y 변수의 규격 한계를 X 변수의 규격 한계에 매핑하는 데 유용한 설계 영역 프로파일러를 시작합니다.

```jsl

Names Default To Here( 1 );

dt = Open( "$Sample_Data/Tiretread.jmp" );
dt:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 120 ), Show Limits( 1 )} );
dt:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 1200 ), Show Limits( 1 )} );
dt:Pred Formula ELONG << Set Property( "Spec Limits", {LSL( 350 ), USL( 500 ), Show Limits( 1 )} );
dt:Pred Formula HARDNESS << Set Property( "Spec Limits", {LSL( 65 ), USL( 75 ), Show Limits( 1 )} );
dt:Pred Formula ABRASION << Set Property(
	"Predicting",
	{:ABRASION, Creator( "Fit Least Squares" ), RMSE( 3 )}
);
dt:Pred Formula MODULUS << Set Property(
	"Predicting",
	{:MODULUS, Creator( "Fit Least Squares" ), RMSE( 100 )}
);
dt:Pred Formula ELONG << Set Property( "Predicting", {:ELONG, Creator( "Fit Least Squares" ), RMSE( 10 )} );
dt:Pred Formula HARDNESS << Set Property(
	"Predicting",
	{:HARDNESS, Creator( "Fit Least Squares" ), RMSE( .6 )}
);
Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Profiler( 1, Desirability Functions( 0 ), Design Space Profiler( 1 ) )
);

```

### Desirability Functions

**구문:** obj << Desirability Functions( state=0|1 )

**설명:** 여러 반응을 최적화할 때 유용한 만족도 함수를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );

```

### Edit Constraints

**구문:** obj << Edit Constraints

**설명:** 선형 제약 조건을 추가, 변경 또는 삭제합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Edit Constraints;

```

### Extrapolation Control Option

**구문:** obj << Extrapolation Control Option( "끄기"|"켜기"|"경고 설정" )

**설명:** 외삽 제어의 설정 여부 또는 외삽 제어 경고만 설정되는지 여부를 지정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ) );

```

### Extrapolation Details

**구문:** obj << Extrapolation Details( state=0|1 )

**설명:** 현재 점의 외삽 측정 기준과 외삽 임계값을 제공하는 외삽 제어 상세 정보를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Age, :Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Profiler( Extrapolation Control Option( "On" ), Extrapolation Details( 1 ) );

```

### Extrapolation Type Option

**구문:** obj << Extrapolation Type Option( "정규화된 T2"|"K 최근접 이웃" )

**JMP추가된 버전:** 18

### Formulas for OPTMODEL

**구문:** obj << Formulas for OPTMODEL

**설명:** 모형의 예측 계산식을 PROC OPTMODEL에 대한 SAS 문으로 새 파일에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Formulas for OPTMODEL;

```

### Get Constraints

**구문:** obj << Get Constraints

**설명:** 요인 제약 조건 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Profiler( Y( :Pred Formula Y ), Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), ) );
obj << Get Constraints;

```

### Get Desirability

**구문:** obj << Get Desirability

**설명:** 현재 만족도 설정을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
d = obj << Get Desirability;
Show( d );

```

### Get Factor Settings

**구문:** obj << Get Factor Settings

**설명:** 현재 요인 설정을 목록으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Get Factor Settings;

```

### Get Factor Settings Script

**구문:** obj << Get Factor Settings Script

**설명:** 현재 요인 설정을 스크립트에서 사용할 수 있는 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Get Factor Settings Script;

```

### Get Main Indices

**구문:** obj << Get Main Indices

**설명:** 변수 중요도 평가 분석의 주요 지수를 PROC OPTMODEL에 대한 SAS 문으로 새 파일에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Main Indices;

```

### Get Simulator

**구문:** obj << Get Simulator

**설명:** 시뮬레이터에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Simulator(
	1,
	Factors( SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ), SULFUR << Fixed( 2.25 ) ),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Random Noise( 1 ), Pred Formula HARDNESS << Add Random Weighted Noise( 1 )
	)
);
obj2 = obj << Get Simulator;
obj2 << Simulation Experiment;

```

### Get Total Indices

**구문:** obj << Get Total Indices

**설명:** 변수 중요도 평가 분석의 총 지수를 PROC OPTMODEL에 대한 SAS 문으로 새 파일에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );
obj << Get Total Indices;

```

### Graph Spacing

**구문:** obj << Graph Spacing( number )

**설명:** 그래프 패널 사이의 가로 간격 크기를 설정합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Graph Spacing( 20 );

```

### Hide Desirability Row

**구문:** obj << Hide Desirability Row( state=0|1 )

**설명:** Hides or unhides the row of desirability profiles.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Desirability Functions( 1 );
Wait( 1 );
obj << Hide Desirability Row( 1 );

```

### Hide Y Variables

**구문:** obj << Hide Y Variables( Y columns )

**설명:** 프로파일러에서 표시하거나 숨길 반응 변수를 지정합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 0.5 );
obj << Hide Y Variables( :Pred Formula MODULUS );

```

### Independent Resampled Inputs

**구문:** obj << Independent Resampled Inputs( state=0|1 )

**설명:** 입력이 독립적이라고 가정하고 데이터 테이블을 재표집하여 변수 중요도 평가 옵션에 사용되는 지수를 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Resampled Inputs( 1 );

```

### Independent Uniform Inputs

**구문:** obj << Independent Uniform Inputs( state=0|1 )

**설명:** 입력이 독립 균등 분포를 따른다고 가정하고 데이터 테이블을 재표집하여 변수 중요도 평가 옵션에 사용되는 지수를 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );

```

### Interaction Profiler

**구문:** obj << Interaction Profiler( state=0|1 )

**설명:** 각 반응에 대한 교호작용 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Interaction Profiler( 1 );

```

### Linearly Constrained Inputs

**구문:** obj << Linearly Constrained Inputs( state=0|1 )

**설명:** 선형 제약 조건에 의해 정의된 균등 분포에 대해 데이터 테이블을 재표집하여 변수 중요도 평가 옵션에 사용되는 지수를 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Script( "Constraint", {1 * :LDL + 1 * :HDL <= 250} );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Linearly Constrained Inputs( 1 );

```

### Link Profilers

**구문:** obj << Link Profilers( state=0|1 )

**설명:** 단일 보고서의 모든 프로파일러를 함께 연결하여 한 프로파일러에서 요인이 변경되면 다른 모든 프로파일러에서도 해당 요인이 같은 값으로 변경되게 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );
obj << Contour Profiler( 1 );
obj << Link Profilers( 1 );
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Load Constraints from Table

**구문:** obj << Load Constraints from Table

**설명:** Loads linear constraints from a data table.

```jsl

Names Default To Here( 1 );

dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Load Constraints from Table( dtlc );
obj << Profile at Boundary( "Stop at Boundaries" );

```

### Log Iterations

**구문:** obj << Log Iterations( state=0|1 )

**설명:** 최적화 알고리즘의 반복을 포함하는 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Log Iterations( 1 );
obj << Optimize;

```

### Max Cycles

**구문:** obj << Max Cycles( number )

**설명:** 최적화 알고리즘에서 각 트립 내의 최대 순환 수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Max Cycles( 5 );
obj << Optimize;

```

### MaxIter

**구문:** obj << MaxIter( number )

**설명:** 최적화 알고리즘에서 각 트립 내의 최대 반복 수를 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << MaxIter( 10 );
obj << Optimize;

```

### Maximize Desirability

**구문:** obj << Maximize Desirability

**설명:** 현재 요인 값을 만족도 함수가 최대화되도록 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Maximize Desirability;

```

### Maximize and Remember

**구문:** obj << Maximize and Remember

**설명:** 만족도 함수를 최대화하고 관련된 설정을 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
obj << Maximize and Remember;

```

### Maximize for Each Grid Point

**구문:** obj << Maximize for Each Grid Point

**설명:** 하나 이상의 요인을 상수로 유지한 상태에서 각 격자 점에 대한 만족도 함수를 최대화합니다. 이 옵션을 사용하려면 하나 이상의 요인이 잠겨 있어야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
obj << Maximize For Each Grid Point;

```

### Maximum Number of Curves

**구문:** obj << Maximum Number of Curves( number=500 )

**설명:** &apos;중첩 교호작용&apos; 옵션을 선택한 경우 표시할 최대 곡선 수를 지정합니다. 가능한 총 곡선 수가 지정된 최대 곡선 수보다 많으면 임의 표본이 추출됩니다. 기본값은 "500"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Maximum Number of Curves( 100 );

```

### Optimization Control Panel

**구문:** obj << Optimization Control Panel( state=0|1 )

### Output Grid Table

**구문:** obj << Output Grid Table

**설명:** 요인에 대해 격자 값이 있는 열, 각 반응에 대해 각 격자 점에서 계산된 값과 각 격자 점의 만족도 계산이 있는 열을 포함하는 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Output Grid Table;

```

### Output Random Table

**구문:** obj << Output Random Table( number of runs,<Add Random Noise> )

**설명:** 지정된 런 수에 대한 랜덤 요인 설정 및 해당 요인 설정의 예측값을 포함하는 새 데이터 테이블을 생성합니다. 반응에 랜덤 잡음을 추가하는 옵션도 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Output Random Table( 1000 );

```

### Overlaid Interactions

**구문:** obj << Overlaid Interactions( state=0|1 )

**설명:** 예측 프로파일러 그림에 흐린 곡선을 표시하거나 숨깁니다. 흐린 곡선은 요인 범위에서 서로 다른 유형의 교호작용에 대한 프로파일러를 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Overlaid Interactions( 1 );

```

### Paste Settings Script

**구문:** obj << Paste Settings Script

**설명:** 클립보드의 프로파일러 설정을 다른 보고서의 프로파일러에 붙여 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Predict for Another Table

**구문:** obj << Predict for Another Table( <data table> )

**설명:** 지정된 데이터 테이블의 요인을 사용하여 해당 테이블에 예측 열을 추가합니다. 이 옵션은 연속형 반응에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
dt2 = dt << Subset( All rows, columns( :SILICA, :SILANE, :SULFUR ), Output Table( "Subset" ) );
obj << Predict For Another Table( dt2 );

```

### Prediction Intervals

**구문:** obj << Prediction Intervals( state=0|1 )

**설명:** 모형 추정의 변동과 잔차 오차의 변동을 모두 포함하는 95% 예측 구간을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ELONG ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILANE * :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ), Desirability Functions( 0 ) ),
		:ELONG << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ),
		Effect Tests( 0 ), Effect Details( 0 ), Lack of Fit( 0 ), Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Effect Summary( 0 )}
	)
);

```

### Prediction Profiler

**구문:** obj << Prediction Profiler( state=0|1 )

**설명:** 예측 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Prediction Profiler( 1 );

```

### Profile at Boundary

**구문:** obj << Profile at Boundary( "경계에서 변화"|"경계에서 중지" )

**설명:** 제약 조건이 있는 요인에 대한 경계 처리 방법을 식별합니다. 이 옵션은 혼합물 변수가 포함된 예측 모형, 선형 제약 조건이 있는 경우 또는 선형 제약 조건 변경 옵션을 지정한 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Donev Mixture Data.jmp" );
obj1 = Fit Model(
	Y( :Damping ),
	Effects( :CuSO4 & RS & Mixture, :Na2S2O3 & RS & Mixture, :Glyoxal & RS & Mixture ),
	Personality( "Standard Least Squares" ),
	Run Model( 1 )
);
obj1 << Prediction Formula;
obj2 = Profiler( Y( :Pred Formula Damping ) );
Wait( 1 );
obj2 << Profile at Boundary( "Stop at Boundaries" );

```

### Prop of Error Bars

**구문:** obj << Prop of Error Bars( state=0|1 )

**설명:** 프로파일러 그래프에 오차 막대를 표시하거나 숨깁니다. 이 옵션은 열에 시그마 열 특성이 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( Sigma, 5 );
:Pred Formula MODULUS << Set Property( Sigma, 100 );
obj = dt << Profiler( Y( :Pred Formula ABRASION, :Pred Formula MODULUS ) );
obj << Prop of Error Bars( 1 );

```

### Remember Settings

**구문:** obj << Remember Settings

**설명:** 요인 설정값을 포함하는 개요 노드를 보고서에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Remember Settings;

```

### Remove Profiler

**구문:** scobj << Remove Profiler

**설명:** 플랫폼 보고서에서 프로파일러를 제거합니다. 이 옵션은 제한된 수의 플랫폼에서만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Run Script( "SEM: Path Analysis w / Latent" );
rpt = obj << Report();
rpt["Model Specification"] << Close( 1 );
obj << Prediction Profiler(
	1,
	Confidence Intervals( 1 ),
	Term Value( Leadership( 0, Lock( 0 ), Show( 1 ) ), Conflict( 0, Lock( 0 ), Show( 1 ) ) ),
	Y Terms( Conflict, Satisfaction )
);
scobj = rpt[Outline Box( "Prediction Profiler" )] << Get Scriptable Object();
scobj << Remove Profiler;

```

### Reorder X Variables

**구문:** obj << Reorder X Variables( columns )

**설명:** 프로파일러에서 모형 주효과를 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 2 );
obj << Reorder X Variables( :SULFUR, :SILANE, :SILICA );

```

### Reorder Y Variables

**구문:** obj << Reorder Y Variables( columns )

**설명:** 반응 변수를 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 2 );
obj << Reorder Y Variables( :Pred Formula HARDNESS, :Pred Formula MODULUS, :Pred Formula ELONG );

```

### Reorder factors by main effect importance

**구문:** subobj << Reorder factors by main effect importance

**설명:** 주효과에 대한 중요도 지수에 따라 예측 프로파일러의 셀을 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
Wait( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] << get scriptable object);
subobj << Reorder factors by main effect importance;

```

### Reorder factors by total importance

**구문:** subobj << Reorder factors by total importance

**설명:** 요인에 대한 총 중요도 지수에 따라 예측 프로파일러의 셀을 재정렬합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fit = Neural( Y( :Y ), X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ), Go );
fit << Save Formulas;
obj = Profiler( Y( :Predicted Y ), Expand );
obj << Independent Uniform Inputs( 1 );
subobj = (Report( obj )["Variable Importance: Independent Uniform Inputs"] << get scriptable object);
subobj << Reorder factors by main effect importance;
Wait( 1 );
subobj << Reorder factors by total importance;

```

### Reset

**구문:** obj << Reset

**설명:** 만족도 함수를 재설정합니다.

### Reset Factor Grid

**구문:** obj << Reset Factor Grid

### Reset Factors

**구문:** obj << Reset Factors

**설명:** 요인 격자를 변경하기 위한 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Reset Factor Grid;

```

### Response Limits

**구문:** Pred Y << Response Limits( {Lower( value, fraction ), Middle( value, fraction ), Upper( value, fraction ), Goal( Minimize|Maximize|Target ), Importance( number )} )

**설명:** 개별 반응에 대한 만족도 함수 설정 및 관련된 만족도 값을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Pred Formula ABRASION << Response Limits(
		{Lower( 90, 0.9819 ), Middle( 145, 0.5 ), Upper( 200, 0.066 ), Goal( Minimize ), Importance( 1 )}
	)
);
obj << Desirability Functions( 1 );

```

### Samples per Factor

**구문:** obj << Samples per Factor( number=6 )

**설명:** 이원 교호작용을 위해 각 연속형 요인에 대해 추출되는 표본 값 수를 지정합니다. 이 값은 다원 교호작용의 경우 감소하고 최대 곡선 수를 조건으로 합니다. 기본값은 "6"입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Samples per Factor( 10 );

```

### Save Bagged Predictions

**구문:** obj << Save Bagged Predictions( nsample, Random Seed(number), Fractional Weights(0|1), Save Prediction Formulas(0|1) )

**설명:** 붓스트랩 집계(배깅)를 사용하여 예측을 수행하고 배깅된 예측 평균 및 표준 오차를 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Neural(
	Y( :ABRASION, :MODULUS, :ELONG, :HARDNESS ),
	X( :SILICA, :SILANE, :SULFUR ),
	Crossvalidation( No Crossvalidation ),
	Go
);
obj << Profiler( Save Bagged Predictions( 10 ) );

```

### Save Constraints to Script

**구문:** obj << Save Constraints to Script

**설명:** 기존 선형 제약 조건을 "제약 조건" 테이블 스크립트에 저장합니다.

```jsl

Names Default To Here( 1 );
dtlc = New Table( "Linear Constraints",
	Add Rows( 2 ),
	New Column( "SILICA", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 2] ) ),
	New Column( "SILANE", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [0, 0] ) ),
	New Column( "SULFUR", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [1, 1] ) ),
	New Column( "Comparison", Character, "Nominal", Set Values( {">=", "<="} ) ),
	New Column( "RHS", Numeric, "Continuous", Format( "Best", 12 ), Set Values( [3, 6] ) )
);
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Load Constraints from Table( dtlc );
obj << Save Constraints to Script;

```

### Save Constraints to Table

**구문:** obj << Save Constraints to Table

**설명:** Saves existing linear constraints to a new data table.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Script( "Constraint", {1 * :SILICA + 1 * :SULFUR >= 3, 2 * :SILICA + 1 * :SULFUR <= 6} );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Save Constraints to Table;

```

### Save Desirabilities

**구문:** obj << Save Desirabilities

**설명:** 각 반응에 대한 세 가지 만족도 함수 설정 및 관련된 만족도 값을 반응 한계 열 특성으로 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
obj << Save Desirabilities;

```

### Save Desirability Formula

**구문:** obj << Save Desirability Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 전체 반응의 결합 만족도에 대한 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
obj << Save Desirability Formula;

```

### Save Expanded Formulas

**구문:** obj << Save Expanded Formulas

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 계산식 내에서 기본 변수를 확인하기 위해 Y 변수로 사용된 해석된 계산식 참조가 포함됩니다. 이 기능은 시작 창에서 중간 계산식 확장 옵션을 선택하거나, 프로파일러 스크립트에서 Expand 메시지를 지정한 후에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );
obj << Save Expanded Formulas;

```

### Save Shapley Values

**구문:** obj << Save Shapley Values

**설명:** 데이터 테이블에서 제외되지 않은 각 행에 대한 Shapley 값을 계산합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Save Shapley Values ));

```

### Sensitivity Indicator

**구문:** obj << Sensitivity Indicator( state=0|1 )

**설명:** 큰 프로파일에서 민감한 셀을 빠르게 찾는 데 도움이 되는 보라색 삼각형을 표시하거나 숨깁니다. 삼각형의 높이와 방향은 현재 값에서 프로파일 함수의 편도함수 값에 해당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Sensitivity Indicator( 1 );

```

### Set Desirabilities

**구문:** obj << Set Desirabilities

**설명:** 특정 만족도 값을 설정할 수 있는 반응 목표 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
obj << Set Desirabilities;

```

### Set Script

**구문:** obj << Set Script( Function( {arguments}, <{locals}>, expr ) )

**설명:** 요인이 변경될 때마다 실행되는 스크립트를 설정합니다.

```jsl

Names Default To Here( 1 );
ProfileCallbackLog = Function( {arg}, Show( arg ) );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Set Script( ProfileCallbackLog );
obj << Term Value( :Silica( 1 ) );

```

### Set Threshold Criterion

**구문:** obj << Set Threshold Criterion( Extrapolation Control Criterion( "Num Model Terms / Num Observations " | "Maximum Leverage" ), <multiplier> )

**설명:** 일반 외삽 임계값 승수를 지정하는 데 사용할 수 있습니다. 또는 이 기능을 사용하여 외삽 임계값 승수를 조정할 수 있는 창을 열 수도 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Neural(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Desirability Functions( 1 ),
	Extrapolation Details( 1 ),
	Extrapolation Control Option( "Warning On" ),
	Set Threshold Criterion( General Extrapolation Control Multiplier( 4 ) )
));

```

### Set to Data in Row

**구문:** obj << Set to Data in Row( row number )

**설명:** 데이터 테이블 행의 값을 프로파일러의 X 변수에 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
Wait( 2 );
obj << Set to Data in Row( 4 );

```

### Shapley Background Data Choice

**구문:** obj << Shapley Background Data Choice( "훈련 데이터 집합 백분율"|"훈련 데이터 집합의 행 수" )

**설명:** Shapley 계산의 백그라운드 데이터를 훈련 데이터의 백분율 또는 훈련 데이터의 행 수로 지정합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 150 ),
	Save Shapley Values
));

```

### Shapley Number of Permutations

**구문:** obj << Shapley Number of Permutations( number=10 )

**설명:** Shapley 값을 계산하는 데 사용할 순열 수를 설정합니다. 기본값은 "10"입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Number of Permutations( 15 ), Save Shapley Values ));

```

### Shapley Number of Rows of Training Data

**구문:** obj << Shapley Number of Rows of Training Data( number=100 )

**설명:** Shapley 계산에서 백그라운드 데이터로 사용할 모형을 적합시키는 데 사용된 훈련 데이터의 행 수를 설정합니다. 기본값은 "100"입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Number of rows of training data set ),
	Shapley Number of Rows of Training Data( 125 ),
	Save Shapley Values
));

```

### Shapley Percent Training Data

**구문:** obj << Shapley Percent Training Data( number=100 )

**설명:** Shapley 계산에서 백그라운드 데이터로 사용할 모형을 적합시키는 데 사용된 훈련 데이터의 백분율을 설정합니다. 기본값은 "100"입니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler(
	1,
	Shapley Background Data Choice( Percent training data set ),
	Shapley Percent Training Data( 50 ),
	Save Shapley Values
));

```

### Shapley Set Random Seed

**구문:** obj << Shapley Set Random Seed( number )

**설명:** Shapley 값을 계산하기 위한 난수 시드값을 설정합니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Body Fat.jmp" );
obj = dt << Neural(
	Y( :Percent Body Fat ),
	X(
		:"Age (years)"n, :"Weight (lbs)"n, :"Height (inches)"n, :"Neck circumference (cm)"n,
		:"Chest circumference (cm)"n, :"Abdomen circumference (cm)"n, :"Hip circumference (cm)"n,
		:"Thigh circumference (cm)"n, :"Knee circumference (cm)"n, :"Ankle circumference (cm)"n,
		:"Biceps (extended) circumference (cm)"n, :"Forearm circumference (cm)"n,
		:"Wrist circumference (cm)"n
	),
	Validation Method( :Validation ),
	Set Random Seed( 123 ),
	Fit( NTanH( 3 ) )
);
obj << (Fit[1] << Profiler( 1, Shapley Set Random Seed( 12345 ), Save Shapley Values ));

```

### Show Creator

**구문:** obj << Show Creator( state=0|1 )

**설명:** 반응 열에 계산식을 생성한 플랫폼의 이름을 표시하거나 숨깁니다. 플랫폼 이름은 세로 축에 나타납니다. 반응 열의 "예측" 열 특성에 "생성자"라는 인수가 포함된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
fm = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x, :Drug * :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		:y << {Summary of Fit( 0 ), Analysis of Variance( 0 ), Parameter Estimates( 1 ), Effect Tests( 0 ),
		Effect Details( 0 ), Lack of Fit( 0 ), Scaled Estimates( 0 ), Plot Actual by Predicted( 0 ),
		Plot Regression( 0 ), Plot Residual by Predicted( 0 ), Plot Studentized Residuals( 0 ),
		Plot Effect Leverage( 0 ), Plot Residual by Normal Quantiles( 0 ), Box Cox Y Transformation( 0 )},
		Effect Summary( 0 )
	)
);

predForm = fm << Save Columns( "Prediction Formula" );

Profiler( Y( predForm ), Show Creator( 1 ) );

```

### Show Formulas

**구문:** obj << Show Formulas

**설명:** 프로파일링되는 모든 계산식에 대한 JSL이 포함된 스크립트 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Show Formulas;

```

### Simulator

**구문:** obj << Simulator( state=0|1 )

**설명:** 시뮬레이터를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Simulator( 1 );

```

### Spanning Range

**구문:** obj << Spanning Range( "내부 축 범위"|"전체 축 범위"|"1 표준편차"|"2 표준편차"|"데이터 범위" )

**설명:** 각 연속형 요인의 표집 범위를 결정하는 방법을 지정합니다. 각 요인의 표집 범위는 교호작용 곡선이 생성되는 가장 낮은 값과 가장 높은 값을 정의합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Overlaid Interactions( 1 );
Wait( 1 );
obj << Spanning Range( "Two Standard Deviations" );

```

### Surface Profiler

**구문:** obj << Surface Profiler( state=0|1 )

**설명:** 표면 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Surface Profiler( 1 );

```

### Term Value

**구문:** obj << Term Value( factor( current value, <Lock( 0|1 )>, <Min( number )>, <Max( number)> ) )

**설명:** 현재 값, 잠금 상태 및 범위를 포함하여 개별 요인에 대한 설정을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
Wait( 2 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

### Trips

**구문:** obj << Trips( number )

**설명:** 최적화 알고리즘의 랜덤 시작 수를 지정합니다. 각 트립은 다른 시작점에서 알고리즘을 다시 시작합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Desirability Functions( 1 )
);
obj << Trips( 10 );
obj << Optimize;

```

### Unthreaded

**구문:** obj << Unthreaded( state=0|1 )

**설명:** To suppress any multithreading in evaluating the profile traces, the contour grid, and the optimizer trips.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Desirability Functions( 1 );
obj << Unthreaded( 1 );
obj << Maximize Desirability;

```

## Design Space Profiler

### 연결된 생성자

#### Design Space Profiler

**구문:** Design Space Profiler

**설명:** Y 변수의 규격 한계를 X 변수의 규격 한계에 매핑하는 데 유용한 설계 영역 프로파일러를 시작합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );

```

### 항목 메시지

#### Connect Hide Mode

**구문:** obj << Connect Hide Mode( state=0|1 )

**설명:** 테이블이 연결된 경우 이 옵션은 한계 내에 속하는 점을 선택하는 대신 한계를 벗어나는 점을 숨깁니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Connect Hide Mode( 1 );
dt2 = obj2 << Make and Connect Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Connect to Table

**구문:** obj << Connect to Table( data table )

**설명:** 설계 영역 프로파일러 보고서를 지정된 데이터 테이블에 연결합니다. 연결된 테이블에서 현재 하한 및 상한 내에 있는 요인을 포함하는 행이 선택됩니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj << Output Random Table( 10000, Add Random Noise );
dt2 << Run Script( (dt2 << Get Table Script Names)[1] );
obj2 << Connect to Table( dt2 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Get Midpoints from Profiler

**구문:** obj << Get Midpoints from Profiler( fraction )

**설명:** 예측 프로파일러에서 현재 요인 설정을 가져오고, 설계 영역 프로파일러에서 각 요인에 대한 중간점을 해당 값으로 설정합니다. 요인 범위의 지정된 비율을 사용하여 각 중간점 값을 기준으로 한계가 생성됩니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Get Midpoints from Profiler( 0.5 );

```

#### Lock

**구문:** obj << Lock( Lock(colume name(lock_value),...) )

**설명:** Locks the continuous factor at the specified value. This lock is temporary.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Lock( Ethanol( 5 ) );

```

#### Make and Connect Random Table

**구문:** obj << Make and Connect Random Table( number, <Add Random Noise( state=0|1 )>, <Embed Factor Space Scatterplots>, <Embed Response Space Scatterplots> )

**설명:** 균등하게 분포된 요인 설정 및 해당 시뮬레이션 반응을 포함하는 새 데이터 테이블을 생성합니다. 반응을 시뮬레이션하는 방법과 반응 및 요인 산점도를 보고서에 포함할지 여부를 지정하는 옵션이 있습니다. 데이터 테이블의 행 선택은 보고서의 프로파일러에 연결됩니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
dt2 = obj2 << Make and Connect Random Table( 10000, Add Random Noise( 1 ), Embed Factor Space Scatterplots );
Wait( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Move Corner Inward

**구문:** obj << Move Corner Inward

#### Move Corner Outward

**구문:** obj << Move Corner Outward

#### Move Inward

**구문:** obj << Move Inward( <number=1> )

**설명:** 최대 경사 상향 경로가 있는 규격 한계를 찾아 해당 규격 한계를 안쪽으로 이동합니다. 이 프로세스가 수행되는 횟수를 지정하려면 선택적 number 인수를 사용합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Move Inward( 4 );
Wait( 2 );
obj2 << Move Outward;

```

#### Move Outward

**구문:** obj << Move Outward( <number=1> )

**설명:** 최소 경사 하향 경로가 있는 규격 한계를 찾아 해당 규격 한계를 바깥쪽으로 이동합니다. 이 프로세스가 수행되는 횟수를 지정하려면 선택적 number 인수를 사용합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Move Outward( 2 );
Wait( 2 );
obj2 << Move Outward;

```

#### Reset Factor Space

**구문:** obj << Reset Factor Space( factor1( lower, upper ), factor2( lower, upper ), ... )

**설명:** 하나 이상의 요인에 대한 범위를 좁히거나, 넓히거나, 이동하도록 요인 공간을 변경합니다. 한계 구간이 너무 좁으면 한계 크기가 작아지고 시뮬레이션 기반 추정값이 정확하지 않을 수 있습니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
Wait( 1 );
obj2 << Reset Factor Space(
	Butanol( -0.275, 11 ),
	Ethanol( -0.25, 10.25 ),
	Methanol( -0.25, 10.25 ),
	Propanol( -0.25, 10.25 ),
	Time( 0.95, 3 )
);

```

#### Save Simulation Table

**구문:** obj << Save Simulation Table( state=0|1 )

#### Save X Spec Limits

**구문:** obj << Save X Spec Limits

**설명:** 현재 X 규격 한계를 열 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Save X Spec Limits;

```

#### Send Limits to Profiler as Constraints

**구문:** obj << Send Limits to Profiler as Constraints

**설명:** 현재 X 한계를 경계 제약 조건으로 프로파일러에 보냅니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Profiler as Constraints;

```

#### Send Limits to Simulator

**구문:** obj << Send Limits to Simulator( "Uniform" | "Normal with limits at 2 sigma" | "Normal with limits at 3 sigma" | "Normal weighted with limits at 2 sigma" | "Normal weighted with limits at 3 sigma" )

**설명:** 현재 X 한계를 지정된 분포에 대한 파라미터로 시뮬레이터에 보냅니다. 또한 각 반응의 오차 표준편차 값을 추가된 랜덤 잡음의 표준편차로 보냅니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Limits to Simulator( "Normal with Limits at 3 Sigma" );

```

#### Send Midpoints to Profiler

**구문:** obj << Send Midpoints to Profiler

**설명:** 현재 X 한계의 중간점을 프로파일러에 보냅니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );
obj2 << Send Midpoints to Profiler;

```

#### Set Limits

**구문:** obj << Set Limits( Set Limits(colume name(lower limit,upper limit),...) )

**설명:** 스크립트를 사용하여 요인 한계를 설정합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Set Limits( Ethanol( 1.9, 10 ), Methanol( 4.5, 10 ), Time( 1.2, 2 ) );

```

#### Show Corners

**구문:** obj << Show Corners( state=0|1 )

**설명:** 모서리 보고서를 표시하거나 숨깁니다. 이 보고서에는 요인 공간의 극단에서 규격 내 확률을 보여 주는 테이블이 포함되어 있습니다. 이 확률은 예측값을 중심으로 하고 규격 한계에서 절단된 정규 분포를 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Corners;

```

#### Show Current Profiler Values

**구문:** obj << Show Current Profiler Values( state=0|1 )

**설명:** 프로파일러의 현재 값을 회색의 엷은 세로 점선으로 표시합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Current Profiler Values( 1 );

```

#### Show Impact Ratios

**구문:** obj << Show Impact Ratios( state=0|1 )

**설명:** Shows or hides the impact ratios. These ratios show how sensitive changes in each factor, from midpoint to each limit, affect how far the predictions are from their specification limits.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 30 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.8 )} )
);
obj = Profiler( Y( :Pred Formula Yield ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Impact Ratios;

```

#### Show Portion for Each Response

**구문:** obj << Show Portion for Each Response( state=0|1 )

**설명:** 현재 X 한계에서 각 반응에 대한 규격 내 비율을 포함하는 열을 추가합니다.

```jsl

Names Default To Here( 1 );

Names Default To Here( 1 );
Open( "$Sample_Data/Design Experiment/Extraction Data.jmp" );
New Column( "Pred Formula Yield",
	Numeric,
	Continuous,
	Formula(
		42.69 + -0.347 * :Butanol - 6.650 * :Ethanol - 2.286 * :Methanol - 0.326 * :Propanol - 10.380 * :Time
		 + 0.415 * :Methanol ^ 2 + 0.0467 * :Butanol * :Methanol + 0.111 * :Ethanol * :Propanol + 4.313 *
		:Ethanol * :Time
	),
	Set Property( "Spec Limits", {LSL( 26 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 12321 ), Std Dev( 2.1 )} )
);
New Column( "Pred Formula Impurities",
	Numeric,
	Continuous,
	Formula( 0.3 + -0.08 * :Ethanol + 0.06 * :Propanol + 0.12 * :Time + 0.06 * :Ethanol * :Time ),
	Set Property( "Spec Limits", {USL( 1 ), Show Limits( 1 )} ),
	Set Property( "Predicting", {:Yield, Creator( "DEMO" ), ID( 24642 ), Std Dev( 0.2 )} )
);
obj = Profiler( Y( :Pred Formula Yield, :Pred Formula Impurities ) );
obj2 = obj << Design Space Profiler( 1 );
obj2 << Show Portion for Each Response( 1 );
obj2 << Set Limits( Methanol( 5, 10 ), Propanol( 0, 5 ) );

```

## Simulator

### 연결된 생성자

#### Simulator

**구문:** obj << Simulator( state=0|1, <Factors( column << Random( )|Fixed( constant )| Expression( )| Multivariate( ) )>, <Responses( column << No Noise| Add Random Noise| Add Random Weighted Noise| Add Multivariate Noise ) )>

**설명:** 시뮬레이터를 시작합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	)
);

```

### 항목 메시지

#### Automatic Histogram Update

**구문:** simuobj << Automatic Historgram Update( state=0|1 )

**설명:** 요인 분포가 변경될 경우 시뮬레이션된 새 값으로 히스토그램을 업데이트합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	),
	Simulate
);
simobj = obj << Get Simulator;
simobj << Automatic Histogram Update( 1 );
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );

```

#### Defect Parametric Profile

**구문:** simobj << Defect Parametric Profile( state=0|1 )

**설명:** 분포 모수별로 평균 결함 비율을 그래프로 나타냅니다. 이 옵션은 결함 프로파일러를 선택한 후에만 사용할 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
			SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

simobj = obj << Get Simulator;
simobj << Defect Parametric Profile( 1 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
			SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Defect Parametric Profile( 1 ),
		Simulate
	)
);

```

#### Defect Profiler

**구문:** simobj << Defect Profiler( state=0|1 )

**설명:** 결함 비율을 각 요인의 고립 함수로 표시합니다. 이 옵션은 규격 한계가 정의된 경우에만 사용할 수 있습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
			SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Simulate
	)
);
simobj = obj << Get Simulator;
simobj << Defect Profiler( 1 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
:Pred Formula ABRASION << Set Property( "Spec Limits", {LSL( 110 )} );
:Pred Formula MODULUS << Set Property( "Spec Limits", {LSL( 750 ), USL( 1700 )} );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Simulator(
		1,
		Factors(
			SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
			SULFUR << Fixed( 2.25 )
		),
		Responses(
			Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
			Pred Formula ELONG << No Noise, Pred Formula HARDNESS << No Noise
		),
		Defect Profiler( 1 ),
		Simulate
	)
);

```

#### N Runs

**구문:** obj << Simulator( N Runs(number=1000) )

**설명:** 시뮬레이션의 런 수를 설정합니다. 기본값은 "10000"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( N Runs( 2500 ), Simulate );

```

#### Resimulate

**구문:** simobj << Resimulate

**설명:** 시뮬레이션을 다시 실행합니다. 이 옵션은 요인 분포를 변경한 후에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Simulate
);
Wait( 1 );
obj << Term Value( SILANE( 60, Lock( 1 ) ) );
simobj = obj << Get Simulator;
simobj << Resimulate;

```

#### Set Random Seed

**구문:** obj << Simulator( Set Random Seed( number ) )

**설명:** 동일한 시드값을 사용하는 모든 후속 실행이 재현 가능하다고 가정하고 난수 시드값을 특정 값으로 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	),

);
obj << Simulator( Set Random Seed( 1234 ), Simulate );

```

#### Simulate to table

**구문:** simobj << Simulate To Table(N Runs(n),factorName<<Sequence Location(low,high,nSteps),factorName2<<Sequence Spread(low,high,nSteps),factorName3<<Not Sequenced)

**설명:** 다양한 평균 또는 산포에 걸친 일련의 시뮬레이션 결과 테이블을 생성합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	)
);
simobj = obj << Get Simulator;
simobj << Simulate to table(
	N Runs( 20 ),
	SILICA << Sequence Location( .5, 2, 4 ),
	SILANE << Sequence Location( 35, 65, 4 ),
	SULFUR << Sequence Location( 1.5, 3, 4 )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	)
);
obj << Simulator(
	Simulate to table(
		N Runs( 20 ),
		SILICA << Sequence Location( .5, 2, 4 ),
		SILANE << Sequence Location( 35, 65, 4 ),
		SULFUR << Sequence Location( 1.5, 3, 4 )
	)
);

```

#### Simulation Experiment

**구문:** simobj << Simulation Experiment( NRun(number of experimental runs=128), Portion(factor space portion=1),NSim(number of simulations per experimental run=10000),<Run>,<Selected Factors(factor1,..)> )

**설명:** 모형 내 요인 분포 위치를 기반으로 설계된 시뮬레이션 실험을 실행합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	)
);
simobj = obj << Get Simulator;
simobj << Simulation Experiment( NRun( 100 ), Portion( 0.6 ) );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	)
);
obj << Simulator( Simulation Experiment( NRun( 128 ), NSim( 20000 ), Portion( 1.0 ), Run ) );

```

#### X Correlations

**구문:** obj << Simulator( X Correlations( state=0|1, {factor1, factor2, ..., factorN}, [NxN correlations] ) )

**설명:** 요인의 시뮬레이션 설정이 다변량으로 설정된 경우 X 요인에 대한 상관관계를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Multivariate( 1.2, 0.3266 ), SILANE << Multivariate( 50, 6.532 ), SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise, Pred Formula ELONG << No Noise,
		Pred Formula HARDNESS << No Noise
	),
	Automatic Histogram Update( 1 ),
	X Correlations( 1, {SILICA, SILANE, SULFUR}, [1 0.3 0, 0.3 1 0, 0 0 1] ),
	Simulate
);

```

#### Y Correlations

**구문:** obj << Simulator( Y Correlations( state=0|1, {response1, response2, ..., responseN}, [NxN correlations] ) )

**설명:** 다변량 잡음이 반응에 추가된 경우 Y 반응에 대한 상관관계를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Random( Normal weighted( 50, 6.532 ) ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << Add Multivariate Noise( 1 ), Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Multivariate Noise( 1 ), Pred Formula HARDNESS << No Noise
	),
	Y Correlations(
		1,
		{Pred Formula ABRASION, Pred Formula MODULUS, Pred Formula ELONG, Pred Formula HARDNESS},
		[1 0.15 0.27 0, 0.15 1 0 0, 0.27 0 1 0, 0 0 0 1]
	),
	Simulate
);

```

