# Model Comparison



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

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
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

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

#### 일반

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
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

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
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

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Redo Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Report View( "Summary" );

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

#### 예제 1

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	By( _bycol )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	By( _bycol )
);
obj = Model Comparison();
obj[1] << Save Script for All Objects To Data Table;

```

#### 예제 2

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	By( _bycol )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	By( _bycol )
);
obj = Model Comparison();
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
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

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## 연결된 생성자

### Model Comparison

**구문:** Model Comparison( Predictors( columns ), Group( column ) )

**설명:** 예측 계산식 열을 사용하여 모형 간에 성능을 비교합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

## 열

### Freq

**구문:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	Freq( _freqcol )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	Freq( _freqcol )
);
obj = Model Comparison();

```

### Group

**구문:** obj &lt;&lt; Group( column(s) )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

### Predictors

**구문:** obj &lt;&lt; Predictors( column(s) )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

### Weight

**구문:** obj &lt;&lt; Weight( column )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	Weight( _weightcol )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window ),
	Weight( _weightcol )
);
obj = Model Comparison();

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
obj = Model Comparison();

```

## 항목 메시지

### AUC Comparison

**구문:** obj &lt;&lt; AUC Comparison( state=0|1 )

**설명:** 각 모형에서 ROC AUC(곡선 아래 면적) 비교를 표시하거나 숨깁니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :sex ),
	Effects( :height ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
dt << Fit Model(
	Y( :sex ),
	Effects( :age ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
Model Comparison( AUC Comparison( 1 ) );

```

### Confusion Matrix

**구문:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**설명:** 실제 및 예측 반응에 대한 교차표 행렬을 표시하거나 숨깁니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :sex ),
	Effects( :height ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
dt << Fit Model(
	Y( :sex ),
	Effects( :age ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
Model Comparison( Confusion Matrix( 1 ) );

```

### Cum Gains Curve

**구문:** obj &lt;&lt; Cum Gains Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 누적 이득 곡선 그림을 표시하거나 숨깁니다. 누적 이득 곡선은 모든 반응의 비율 대비 모형에서 식별된 반응 수준의 비율을 표시합니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :sex ),
	Effects( :height ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
dt << Fit Model(
	Y( :sex ),
	Effects( :age ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
Model Comparison( Cum Gains Curve( 1 ) );

```

### Decision Threshold

**구문:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**설명:** 각 모형에 대한 적합 확률 분포와 실제값 대 예측값 테이블을 표시하거나 숨깁니다. 확률 임계를 변경하여 임계값에 따라 분류 결과에 어떤 영향이 있는지 탐색할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :sex ),
	Effects( :height ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
dt << Fit Model(
	Y( :sex ),
	Effects( :age ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
Model Comparison( Decision Threshold( 1 ) );

```

### Lift Curve

**구문:** obj &lt;&lt; Lift Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 향상도 곡선을 표시하거나 숨깁니다. 여러 모형에 대한 곡선이 그림에 중첩됩니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :sex ),
	Effects( :height ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
dt << Fit Model(
	Y( :sex ),
	Effects( :age ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
Model Comparison( Lift Curve( 1 ) );

```

### Model Averaging

**구문:** obj &lt;&lt; Model Averaging

**설명:** 모형 전체의 예측 확률 평균에 대한 새 예측 열을 저장합니다. 이 예측 열을 사용하면 개별 모형보다 예측 능력이 높은 모형이 생성되는 경우가 많습니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
Model Comparison( Model Averaging );

```

### Plot Actual by Predicted

**구문:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**설명:** 세로 축에 실제 반응 값이 있고 가로 축에 예측값이 있는 그림을 표시하거나 숨깁니다. 양호한 적합의 경우 점이 대각선 근처에 있습니다. 대각선에서 멀리 있는 점을 확인하고, 패턴을 찾고, 검정을 시각화할 수 있습니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
Model Comparison( Plot Actual by Predicted( 1 ) );

```

### Plot Residual by Row

**구문:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**설명:** 세로 축에 잔차가 있고 가로 축에 행 번호가 있는 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
Model Comparison( Plot Residual by Row( 1 ) );

```

### Precision Recall Curve

**구문:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 여러 모형에 대한 곡선이 그림에 중첩됩니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :sex ),
	Effects( :height ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
dt << Fit Model(
	Y( :sex ),
	Effects( :age ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
Model Comparison( Precision Recall Curve( 1 ) );

```

### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :weight ),
	Effects( :height ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
dt << Fit Model(
	Y( :weight ),
	Effects( :age ),
	Personality( "Standard Least Squares" ),
	Run( Prediction Formula, Close Window )
);
Model Comparison( Profiler( 1 ) );

```

### ROC Curve

**구문:** obj &lt;&lt; ROC Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. 여러 모형에 대한 곡선이 그림에 중첩됩니다.

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );
dt << Fit Model(
	Y( :sex ),
	Effects( :height ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
dt << Fit Model(
	Y( :sex ),
	Effects( :age ),
	Target Level( "M" ),
	Personality( "Nominal Logistic" ),
	Run( Save Probability Formula, Close Window )
);
Model Comparison( ROC Curve( 1 ) );

```

