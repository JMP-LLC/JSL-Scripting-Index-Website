# Contour Profiler



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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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

### Contour Profiler

**구문:** Contour Profiler( Y( column1, column2, ...  ) )

**설명:** 전체 요인 쌍에 대해 하나 이상의 예측 반응이 어떻게 변하는지 탐색할 수 있는 대화식 등고선 그림을 생성합니다. 그림에 사용되지 않는 요인의 값은 요인 설정이 예측 반응에 미치는 영향을 추가로 탐색하기 위해 변경될 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);

```

## 열

### Noise Factors

**구문:** obj = Contour Profiler(...<Noise Factors( column(s) )>...)

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

**구문:** obj = Contour Profiler(...Prediction Formula( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 계산식을 포함하는 반응 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);

```

### Y

**구문:** obj = Contour Profiler(...Y( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 계산식을 포함하는 반응 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);

```

## 항목 메시지

### Animation

**구문:** obj << Animation( <Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )>, <Speed(ticks)>, <Go>, <Stop> )

**설명:** 프로파일러의 애니메이션을 시작하거나 중지합니다. 요인 조합에 대해 애니메이션의 순환 방법을 지정할 수도 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Append Settings to Table;

```

### Arrange X Controls Left

**구문:** obj << Arrange X Controls Left( state=0|1 )

**설명:** X 컨트롤이 왼쪽에 오도록 X 및 Y 컨트롤을 가로로 재배열합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Arrange X Controls Left( 1 );

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

### Clipping

**구문:** obj << Clipping( horizCenter,horizWidth,verticalCenter,VerticalWidth )

**설명:** 웨이퍼 맵에 대해 원형 자르기 영역을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Wafer Stacked.jmp" );
Neural(
	Y( :Defects ),
	X( :X_Die, :Y_Die ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit(
		NGaussian( 9 ),
		Contour Profiler(
			1,
			Term Value( :X_Die( 0, Lock( 0 ), Show( 1 ) ), :Y_Die( 0, Lock( 0 ), Show( 1 ) ) ),
			Contour Value( :Defects( 0.1309, Min( -0.28 ), Max( 7.28 ) ) ),
			Grid Density( "40 x 40" ),
			Contour Grid( 0, 0.275, 0.025, :Defects, Filled( 1 ), Reverse Scale( 0 ) ),
			Horizontal Factor( :X_Die ),
			Vertical Factor( :Y_Die ),
			Clipping( {0, 0}, {42, 42} )
		)
	),
	SendToReport(
		Dispatch( {"Model NGaussian(9)", "Contour Profiler"}, "Contour Profiler Frame", FrameBox,
			{Frame Size( 400, 400 )}
		)
	)
);

```

### Conditional Predictions

**구문:** scrobj << Conditional Predictions( state=0|1 )

**설명:** 예측값 및 프로파일을 구성할 때 임의 효과를 포함합니다. 이 옵션은 모형에 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Reactor.jmp" );
Column( "A" ) << Set Modeling Type( "Nominal" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Ct, :T, :Cn, :Ct * :T, :T * :Cn ),
	Random Effects( :A ),
	Emphasis( "Minimal Report" ),
	Run( Contour Profiler( 1 ) )
);
scrobj = (Report( obj )["Contour Profiler"] << get scriptable object);
scrobj << Conditional Predictions( 1 );

```

### Contour Grid

**구문:** obj << Contour Grid( minimum, maximum, increment, y column, Filled( state=0|1 ), Reverse Scale( state=0|1 ) )

**설명:** 등고선 프로파일러에 등고선 격자를 그립니다. 격자는 지정된 간격을 기반으로 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Contour Grid( 525.7492294, 2173.9472704279, 206.024755128638, :PredFormulaMODULUS );

```

### Contour Label

**구문:** obj << Contour Label( state=0|1 )

**설명:** 등고선 프로파일러에서 반응 변수 이름을 라벨로 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Contour Label( 0 );

```

### Contour Value

**구문:** obj << Contour Value( y1( number, <Lo Limit( number )>, <Hi Limit( number )>, <Min( number )>, <Max( number )>), y2 (...) )

**설명:** 등고선 프로파일러에서 반응의 특정 등고선 값을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Contour Value(
	:PredFormulaAbrasion( 167, Lo Limit( 160 ), Hi Limit( 180 ) ), :Pred Formula Elong( 320 )
);

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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Custom Profiler( 1 );

```

### Data Points

**구문:** obj << Data Points( state=0|1 )

**설명:** 데이터 점을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Data Points( 1 );

```

### Formulas for OPTMODEL

**구문:** obj << Formulas for OPTMODEL

**설명:** 모형의 예측 계산식을 PROC OPTMODEL에 대한 SAS 문으로 새 파일에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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

### Get Factor Settings

**구문:** obj << Get Factor Settings

**설명:** 현재 요인 설정을 목록으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Get Factor Settings;

```

### Get Factor Settings Script

**구문:** obj << Get Factor Settings Script

**설명:** 현재 요인 설정을 스크립트에서 사용할 수 있는 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Get Factor Settings Script;

```

### Get Simulator

**구문:** obj << Get Simulator

**설명:** 시뮬레이터에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
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

### Graph Updating

**구문:** obj << Graph Updating( "마우스를 움직일 때마다"|"마우스 버튼을 놓을 때마다" )

**설명:** 등고선 프로파일러의 업데이트 빈도를 설정합니다. Per Mouse Move 설정은 마우스가 움직일 때 그래프를 업데이트합니다. Per Mouse Up 설정은 마우스 버튼을 놓은 후 그래프를 업데이트합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Graph Updating( "Per Mouse Up" );
// use your mouse to move the slider scale for a response

```

### Grid Density

**구문:** obj << Grid Density( "10 x 10"|"20 x 20"|"30 x 30"|"40 x 40"|"50 x 50"|"60 x 60" )

**설명:** 개별 그물 또는 표면 그림의 밀도를 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Grid Density( "10 x 10" );

```

### Hide X Controls

**구문:** obj << Hide X Controls( state=0|1 )

**설명:** 요인에 대한 제어 설정을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Hide X Controls( 1 );

```

### Hide Y Controls

**구문:** obj << Hide Y Controls( state=0|1 )

**설명:** 반응에 대한 제어 설정을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Hide Y Controls( 1 );

```

### Horizontal Factor

**구문:** obj << Horizontal Factor( column )

**설명:** 가로 축에 표시되는 요인을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 2 );
obj << Horizontal Factor( :SULFUR );

```

### Link Profilers

**구문:** obj << Link Profilers( state=0|1 )

**설명:** 단일 보고서의 모든 프로파일러를 함께 연결하여 한 프로파일러에서 요인이 변경되면 다른 모든 프로파일러에서도 해당 요인이 같은 값으로 변경되게 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Prediction Profiler( 1 );
obj << Contour Profiler( 1 );
obj << Link Profilers( 1 );
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Multiple Contour Frames

**구문:** obj << Multiple Contour Frames( Horizontal Factor( column ), Vertical Factor( column ), <Remove Previous Frames> )

**설명:** 지정된 요인 조합을 나타내는 다른 등고선 그림을 추가합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Multiple Contour Frames( Horizontal Factor( :SULFUR ), Vertical Factor( :SILANE ) );

```

### Number of Plots Across

**구문:** obj << Number of Plots Across( number )

**설명:** 보고서에 여러 등고선 프레임이 표시되는 경우 그림의 레이아웃을 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Multiple Contour Frames( Horizontal Factor( :Sulfur ), Vertical Factor( :Silane ) );
obj << Multiple Contour Frames( Horizontal Factor( :Silane ), Vertical Factor( :Silica ) );
obj << Number of Plots Across( 2 );

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
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
dt2 = dt << Subset( All rows, columns( :SILICA, :SILANE, :SULFUR ), Output Table( "Subset" ) );
obj << Predict For Another Table( dt2 );

```

### Prediction Profiler

**구문:** obj << Prediction Profiler( state=0|1 )

**설명:** 예측 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Prediction Profiler( 1 );

```

### Remember Settings

**구문:** obj << Remember Settings

**설명:** 요인 설정값을 포함하는 개요 노드를 보고서에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Remember Settings;

```

### Remove Contour Grid

**구문:** obj << Remove Contour Grid

**설명:** 등고선 프로파일러에 중첩된 등고선 격자를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Contour Grid( 525.7492294, 2173.9472704279, 206.024755128638, :PredFormulaMODULUS );
Wait( 2 );
obj << Remove Contour Grid;

```

### Reset

**구문:** obj << Reset

**설명:** 현재 값에서 예측을 업데이트합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );
obj << Reset;

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

### Set Contours to Current

**구문:** obj << Set Contours to Current

**설명:** 등고선을 현재 Y 값 위치로 재설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Contour Value(
	:PredFormulaAbrasion( 167, Lo Limit( 160 ), Hi Limit( 180 ) ), :Pred Formula Elong( 320 )
);
Wait( 1 );
obj << Set Contours to Current;

```

### Set Script

**구문:** obj << Set Script( Function( {arguments}, <{locals}>, expr ) )

**설명:** 요인이 변경될 때마다 실행되는 스크립트를 설정합니다.

```jsl

Names Default To Here( 1 );
ProfileCallbackLog = Function( {arg}, Show( arg ) );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Set Script( ProfileCallbackLog );
obj << Term Value( :Silica( 1 ) );

```

### Set to Data in Row

**구문:** obj << Set to Data in Row( row number )

**설명:** 데이터 테이블 행의 값을 프로파일러의 X 변수에 할당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 2 );
obj << Set to Data in Row( 4 );

```

### Show Formulas

**구문:** obj << Show Formulas

**설명:** 프로파일링되는 모든 계산식에 대한 JSL이 포함된 스크립트 창을 엽니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Show Formulas;

```

### Simulator

**구문:** obj << Simulator( state=0|1 )

**설명:** 시뮬레이터를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Simulator( 1 );

```

### Surface Plot

**구문:** obj << Surface Plot( state=0|1 )

**설명:** 개별 그물 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Surface Plot( 1 );

```

### Surface Profiler

**구문:** obj << Surface Profiler( state=0|1 )

**설명:** 표면 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
obj << Surface Profiler( 1 );

```

### Term Value

**구문:** obj << Term Value( (x1( number ),x2( number ), ... )

**설명:** 등고선 프로파일러에서 요인의 특정 항 값을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

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

### Up Dots

**구문:** obj << Up Dots( state=0|1 )

**설명:** 등고선 옆에 점을 표시하거나 숨깁니다. 이러한 점은 상향 반응을 나타냅니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 1 );
obj << Up Dots( 0 );

```

### Vertical Factor

**구문:** obj << Vertical Factor( column )

**설명:** 세로 축에 표시되는 요인을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS )
);
Wait( 2 );
obj << Vertical Factor( :SULFUR );

```

### Y Colors

**구문:** obj << Y Colors( color1, color2, ... )

**설명:** 등고선 그림과 개별 그물 그림에서 모두 각 Y 항의 색상을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG, :Pred Formula HARDNESS ),
	Surface Plot( 1 )
);
obj << Y Colors( 8, 4, 5, 46 );

```

