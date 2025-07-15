# Factor Analysis



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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
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
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
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

**구문:** obj = Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### Factor Analysis

**구문:** Factor Analysis( Y( columns ) )

**설명:** 관측된 변수 간의 공통적인 변동을 나타내는 관측되지 않은 변수 또는 요인을 추출하여 데이터의 기본 구조를 파악합니다. 요인 회전은 해석력을 높이는 데 사용됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

## 열

### Columns

**구문:** obj &lt;&lt; Columns( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Freq

**구문:** obj &lt;&lt; Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Freq( _freqcol )
);

```

### Weight

**구문:** obj &lt;&lt; Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Weight( _weightcol )
);

```

### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

## 항목 메시지

### Bartlett's Test of Sphericity

**구문:** obj &lt;&lt; Bartlett&apos;s Test of Sphericity( state=0|1 )

**설명:** 고유값의 분산이 동일한지 여부를 판별하는 동질성 검정 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << Bartlett's Test of Sphericity( 1 );

```

### Eigenvalues

**구문:** obj &lt;&lt; Eigenvalues( state=0|1 )

**설명:** 원래 상관 행렬, 공분산 행렬 또는 비척도화 행렬의 고유값 테이블을 표시하거나 숨깁니다. 이 테이블에는 각 고유값이 나타내는 총 분산의 백분율, 기여도 백분율을 보여 주는 막대 차트 및 연속된 각 고유값이 기여하는 누적 백분율이 포함됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << Eigenvalues( 0 );

```

### Fit

**구문:** obj &lt;&lt; Fit( "PC"|"ML", "ONE"|"SMC", number, rotation method )

**설명:** 지정된 요인화 방법, 사전 공통분, 요인 수 및 회전 방법을 사용하여 요인 분석 모형을 적합시킵니다. 사용 가능한 요인화 방법은 PC(주 축)와 ML(최대 가능도)입니다. 모든 사전 공통분을 1(ONE) 또는 다중상관제곱(SMC) 계수로 동일하게 설정할 수 있습니다. 사용 가능한 회전 방법은 Varimax, Biquartimax, Equamax, Factorparsimax, Orthomax, Parsimax, Quartimax, Biquartimin, Covarimin, Obbiquartimax, Obequamax, Obfactorparsimax, Oblimin, Obparsimax, Obquartimax, Obvarimax 및 Promax입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" )
);
obj << Fit( "ML", "SMC", 2, "Varimax" );

```

### Kaiser-Meyer-Olkin Test

**구문:** obj &lt;&lt; "Kaiser-Meyer-Olkin Test"n( state=0|1 )

**설명:** KMO(Kaiser-Meyer-Olkin) 검정 결과를 표시하거나 숨깁니다. 이 검정은 기본 요인에 의한 공통 분산일 수 있는 분산 비율의 지표입니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << "Kaiser-Meyer-Olkin Test"n( 1 );

```

### Scree Plot

**구문:** obj &lt;&lt; Scree Plot( state=0|1 )

**설명:** 각 성분에 대한 고유값의 선 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << Scree Plot( 0 );

```

### Variance Estimation

**구문:** obj = Factor Analysis(...Variance Estimation( "REML"| "ML"| "Robust"| "Row-wise"| "Pairwise" )...)

**설명:** 상관 계산을 위한 추정 방법을 설정합니다.

결측값이 없는 경우 기본값은 &apos;행별&apos;입니다.

결측값이 있는 경우, 변수 수가 10개 이하이고 행 수가 5000개 이하이면 기본값은 &apos;REML&apos;입니다.

결측값이 있는 경우, 변수 수가 10개를 초과하거나 행 수가 5000개를 초과하면 기본값은 &apos;쌍별&apos;입니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Estimation( "Robust" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

### Variance Scaling

**구문:** obj = Factor Analysis(...Variance Scaling( "Correlations"| "Covariances"| "Unscaled")...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 척도에 사용되는 방법을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Estimation( "REML" ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);

```

## Factor Analysis Fit Options

### 항목 메시지

#### Arrow Lines

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Arrow Lines( state=0|1 ))

**설명:** 그래프에 화살표 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Arrow Lines( 0 ));

```

#### Copy Model Specification for SEM

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Copy Model Specification for SEM)

**설명:** 요인 정의를 클립보드에 복사합니다. 그런 다음 독립 데이터와 함께 요인 정의를 SEM 플랫폼에 붙여 넣어 모형을 확인할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );
obj = dt << Factor Analysis(
	Y( :Support_L, :Goal_L, :Work_L, :Interact_L ),
	Fit( "ML", "SMC", 1, "Varimax" )
);
obj << (Fit[1] << Copy Model Specification for SEM);
obj2 = dt << Structural Equation Models( Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ) );
obj2 << Paste Model Specification;

```

#### Eigenvalues

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Eigenvalues( state=0|1 ))

**설명:** 축소 상관 행렬의 고유값과 해당 값이 설명하는 공통 분산의 백분율을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Eigenvalues( 1 ));

```

#### Factor Loading Plot

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Loading Plot( state=0|1 ))

**설명:** 회전된 요인 적재 그림을 표시하거나 숨깁니다. 세 개 이상의 요인을 모델링하는 경우 요인 적재 그림은 그림의 행렬입니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Factor Loading Plot( 0 ));

```

#### Factor Structure

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Structure( state=0|1 ))

**설명:** 변수와 공통 요인 간의 상관 행렬을 표시하거나 숨깁니다. 이 옵션은 사각 회전에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Promax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Factor Structure( 0 ));

```

#### Final Communality Estimates

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Final Communality Estimates( state=0|1 ))

**설명:** 요인 모형이 적합된 후 공통분 추정값을 표시하거나 숨깁니다. 요인이 직교할 경우 변수의 최종 공통분 추정값은 해당 변수의 적재 제곱합과 같습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Final Communality Estimates( 0 ));

```

#### Interfactor Correlations

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Interfactor Correlations( state=0|1 ))

**설명:** 요인 간 상관 행렬을 표시하거나 숨깁니다. 이 옵션은 사각 회전에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Quartimin" )
);
obj << (Fit[1] << Interfactor Correlations( 1 ));

```

#### Measures of Factor Scores

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Factor Scores( state=0|1 ))

**설명:** 다중 R, 다중 R² 및 최소 상관 스코어를 포함한 요인 스코어 결정 측도를 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Measures of Factor Scores( 1 ));

```

#### Measures of Fit

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Fit( state=0|1 ))

**설명:** Bartlett 수정이 없는 카이제곱, AIC, BIC, Tucker-Lewis 지수 및 근사의 제곱근 평균 제곱 오차를 포함한 적합 측도를 표시하거나 숨깁니다. 이 옵션은 최대 가능도 요인화 방법을 선택한 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Measures of Fit( 0 ));

```

#### Prior Communality

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Prior Communality( state=0|1 ))

**설명:** 각 변수에 대한 공통분의 초기 추정값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Prior Communality( 1 ));

```

#### Remove Fit

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Remove Fit)

**설명:** 지정된 적합을 보고서에서 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Remove Fit);

```

#### Rotated Factor Loading

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotated Factor Loading( state=0|1 ))

**설명:** 회전 후 요인 적재 행렬을 표시하거나 숨깁니다. 직교 회전을 사용한 경우 이러한 값은 변수와 회전된 요인 간의 상관입니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
Wait( 1 );
obj << (Fit[1] << Rotated Factor Loading( 0 ));

```

#### Rotation Matrix

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotation Matrix( state=0|1 ))

**설명:** 요인 적재 그림과 요인 적재 행렬을 회전하는 데 사용된 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Rotation Matrix( 1 ));

```

#### Save Factor Scores

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores( state=0|1 ))

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 Thurstone 방법을 사용하여 추정된 요인 스코어의 계산식이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Save Factor Scores);

```

#### Save Factor Scores with Imputation

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores with Imputation( state=0|1 ))

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 결측값의 대치 값과 함께 요인 스코어의 계산식이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Factor Analysis(
	Y( :CO, :SO2, :NO, :PM10 ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Save Factor Scores with Imputation);

```

#### Score Plot

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot( state=0|1 ))

**설명:** 추정된 요인 스코어의 산점도를 표시하거나 숨깁니다. 세 개 이상의 요인을 모델링하는 경우 스코어 그림은 그림의 행렬입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Score Plot( 1 ));

```

#### Score Plot with Imputation

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot with Imputation( state=0|1 ))

**설명:** 결측값을 대치 값으로 채우고 추정된 요인 스코어의 산점도를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Factor Analysis(
	Y( :CO, :SO2, :NO, :PM10 ),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Score Plot with Imputation( 1 ));

```

#### Significance Test

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Significance Test( state=0|1 ))

**설명:** 두 가지 유의성 검정의 결과를 표시하거나 숨깁니다. 첫 번째는 공통 요인이 없다는 귀무가설을 검정하고 두 번째는 지정된 수의 요인이 충분하다는 귀무가설을 검정합니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Significance Test( 0 ));

```

#### Standard Score Coefficients

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Standard Score Coefficients( state=0|1 ))

**설명:** 회전된 요인을 소스 데이터 테이블에 저장할 때 요인 스코어를 추정하는 데 사용되는 승수 테이블을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Standard Score Coefficients( 1 ));

```

#### Target Matrix

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Target Matrix( state=0|1 ))

**설명:** Varimax 요인 패턴이 회전되는 행렬을 표시하거나 숨깁니다. 이 옵션은 Promax 회전에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Promax" )
);
obj << (Fit[1] << Target Matrix( 1 ));

```

#### Unrotated Factor Loading

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Unrotated Factor Loading( state=0|1 ))

**설명:** 회전하기 전의 요인 적재 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Unrotated Factor Loading( 1 ));

```

#### Unsorted and Rotated Factor Loading

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Rotated Factor Loading( state=0|1 ))

**설명:** 회전 후 정렬되지 않은 요인 적재 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" ),
	Eigenvalues( 0 ),
	Scree Plot( 0 )
);
obj << (Fit[1] << Unsorted and Rotated Factor Loading( 1 ));

```

#### Unsorted and Unrotated Factor Loading

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Unrotated Factor Loading( state=0|1 ))

**설명:** 정렬과 회전을 수행하기 전의 요인 적재 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
obj << (Fit[1] << Unsorted and Unrotated Factor Loading( 1 ));

```

#### Variance Explained by Each Factor

**구문:** obj &lt;&lt; (Fit[number] &lt;&lt; Variance Explained by Each Factor( state=0|1 ))

**설명:** 회전된 각 요인에 의해 설명되는 공통 분산의 분산, 백분율 및 누적 백분율을 표시하거나 숨깁니다. 이 옵션은 직교 회전에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );
obj = dt << Factor Analysis(
	Y(
		:Total Population, :Median School Years, :Total Employment, :Professional Services,
		:Median House Value
	),
	Variance Scaling( "Correlations" ),
	Fit( "ML", "SMC", 2, "Varimax" )
);
Wait( 1 );
obj << (Fit[1] << Variance Explained by Each Factor( 0 ));

```

