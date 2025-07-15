# Fit Model



## Fit Causal Treatment

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Causal Treatment(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Causal Treatment

**구문:** Fit Model( Y( columns ), &lt;Effects( columns )&gt;, Treatment( column ), Personality( "Causal Treatment" ) )

**설명:** 처리 확률을 수정하는 인과적 처리에 대한 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);

```

### 항목 메시지

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

#### Show Tips and Interpretations

**구문:** obj &lt;&lt; Show Tips and Interpretations( state=0|1 )

**JMP추가된 버전:** 19

## Fit Generalized Linear Model

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Generalized Linear Model(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Generalized Linear Model

**구문:** Fit Model( Y( column ), Effects( columns ), Personality( "Generalized Linear Model" ), GLM Distribution( distribution name ), Link Function( link type ) )

**설명:** 다양한 분포 및 연결 함수를 사용하여 일반화 선형 모형을 적합시킵니다. 로지스틱, Poisson 및 지수 회귀 기법이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### 항목 메시지

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Contour Profiler( 1 );

```

#### Contrast

**구문:** obj &lt;&lt; (effect name &lt;&lt; Contrast( [l1 l2 l3 ...] ))

**설명:** 모형의 효과에 대한 처리 수준을 통계적으로 대비하기 위한 사용자 정의 F-검정을 실행합니다. 각 대비를 행 벡터로 지정하고 효과 이름을 문자열로 지정하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << ("color" << Contrast( [1 0 -0.5 -0.5] ));

```

#### Correlation of Estimates

**구문:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**설명:** 지정된 적합을 통한 모수 추정값 간의 상관 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**구문:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**설명:** 지정된 적합에 대한 모수 추정값 간의 공분산 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Covariance of Estimates( 1 );

```

#### Custom Test

**구문:** obj &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; )

**설명:** 모형의 다양한 효과를 대비하는 사용자 정의 F-검정을 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << Custom Test( [0 .5 0 0 0 0 0 .5 -1], Label( "Test 1" ) );

```

#### Deviance Residuals

**구문:** obj &lt;&lt; Deviance Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 이탈도 잔차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals;

```

#### Deviance Residuals by Predicted

**구문:** obj &lt;&lt; Deviance Residuals by Predicted( state=0|1 )

**설명:** 세로 축에 이탈도 잔차가 있고 가로 축에 예측 반응 값이 있는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals by Predicted( 1 );

```

#### Effect Summary

**구문:** obj &lt;&lt; Effect Summary( state=0|1 )

**설명:** 모형의 효과를 대화식으로 업데이트할 수 있는 효과 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**구문:** obj &lt;&lt; FDR( state=0|1 )

**설명:** 효과 요약 테이블의 LogWorth 값과 해당 p 값을 FDR(False Discovery Rate)을 사용하여 수정할지 여부를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Firth Bias-Adjusted Estimates

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** Firth 편향 수정 방법을 사용하여 모형을 적합시키도록 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### GLM Distribution

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 반응 변수의 확률 분포를 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Inverse Prediction

**구문:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**설명:** Y 값 및 다른 모든 요인의 값이 주어졌을 때 예측 X 값과 신뢰 구간을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
// Exactly one term value must be set to missing.
obj << Inverse Prediction(
	Response( 5, 6 ),
	Term Value( color( "Dark" ), spine( "Both Good" ), width( 26.2988439306358 ), weight( . ) )
);

```

#### Linear Predictor Plot

**구문:** obj &lt;&lt; Linear Predictor Plot( state=0|1 )

**설명:** 세로 축에 역 연결 함수에 의해 변환된 반응이 있고 가로 축에 연속형 예측 변수가 있는 그림을 표시하거나 숨깁니다. 연속형 예측 변수가 하나이고 범주형 예측 변수가 최대 한 개인 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run()
);
obj << Linear Predictor Plot( 1 );

```

#### Link Function

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형의 연결 함수를 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Mean Confidence Interval

**구문:** obj &lt;&lt; Mean Confidence Interval

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 모형에 대한 예측 방정식의 95% 신뢰 한계가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Model Dialog;

```

#### Overdispersion Tests and Intervals

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형에 과대산포 모수를 포함하도록 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Pearson Residuals

**구문:** obj &lt;&lt; Pearson Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 Pearson 잔차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals;

```

#### Pearson Residuals by Predicted

**구문:** obj &lt;&lt; Pearson Residuals by Predicted( state=0|1 )

**설명:** 세로 축에 Pearson 잔차가 있고 가로 축에 예측 반응 값이 있는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals by Predicted( 1 );

```

#### Power Link Parameter

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 멱 연결 함수의 모수를 지정합니다. 일반화 선형 모형 분석법에서 &apos;멱&apos; 연결 함수를 지정한 경우에만 사용할 수 있습니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Predicted Values

**구문:** obj &lt;&lt; Predicted Values

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 모형에서 예측한 값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**구문:** obj &lt;&lt; Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 지정된 모형에 의해 계산된 평균 예측값의 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Profiler( 1 );

```

#### Regression Plot

**구문:** obj &lt;&lt; Regression Plot( state=0|1 )

**설명:** 세로 축에 반응이 있고 가로 축에 연속형 예측 변수가 있는 그림을 표시하거나 숨깁니다. 연속형 예측 변수가 하나이고 범주형 예측 변수가 최대 한 개인 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Regression Plot( 0 ) )
);
Wait( 1 );
obj << Regression Plot( 1 );

```

#### Save Indiv Confid Limits

**구문:** obj &lt;&lt; Save Indiv Confid Limits

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 모형에 대한 지정된 개별값의 95% 신뢰 한계가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Indiv Confid Limits;

```

#### Studentized Deviance Residuals

**구문:** obj &lt;&lt; Studentized Deviance Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 스튜던트화 이탈도 잔차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Deviance Residuals;

```

#### Studentized Deviance Residuals by Predicted

**구문:** obj &lt;&lt; Studentized Deviance Residuals by Predicted( state=0|1 )

**설명:** 세로 축에 스튜던트화 이탈도 잔차가 있고 가로 축에 예측 반응 값이 있는 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Studentized Deviance Residuals by Predicted( 0 ) )
);
Wait( 1 );
obj << Studentized Deviance Residuals by Predicted( 1 );

```

#### Studentized Pearson Residuals

**구문:** obj &lt;&lt; Studentized Pearson Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 스튜던트화 Pearson 잔차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals;

```

#### Studentized Pearson Residuals by Predicted

**구문:** obj &lt;&lt; Studentized Pearson Residuals by Predicted( state=0|1 )

**설명:** 세로 축에 스튜던트화 Pearson 잔차가 있고 가로 축에 예측 반응 값이 있는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals by Predicted( 1 );

```

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler( state=0|1 )

**설명:** 반응에 대한 대화식 표면 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Surface Profiler( 1 );

```

## Fit Least Squares > Effect Fit > Control Differences Chart

### 항목 메시지

#### Point Options

**구문:** scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**설명:** 차트의 점 그리기 스타일을 지정합니다. 세로 바늘(수직선) 그리기, 점 연결 및 점만 표시 중에서 선택할 수 있습니다. 기본적으로 평균 위치에 그려진 가로선에 점을 연결하는 바늘로 차트를 그립니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Point Options( "Show Only Points" ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Point Options( "Show Connected Points" );

```

#### Show Center Line

**구문:** scrobj &lt;&lt; Show Center Line( state=0|1 )

**설명:** 대조군 차이 차트에 중심선(전체 평균)을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Center Line( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**구문:** scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**설명:** 대조군 차이 차트의 결정 한계 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limit Shading( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**구문:** scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**설명:** 대조군 차이 차트의 결정 한계선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limits( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**구문:** scrobj &lt;&lt; Show Summary Report( state=0|1 )

**설명:** 그룹 평균 및 결정 한계가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Dunnett( .05, Control Level( "a" ), Control Differences Chart( 1 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Summary Report( 1 );

```

## Fit Least Squares > Effect Fit

### 항목 메시지

#### LSMeans Contrast

**구문:** scrobj &lt;&lt; LSMeans Contrast( [ l1, l2, l3, ... ] );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Contrast( [ l1, l2, l3, ... ] )} )

**설명:** 효과의 여러 수준을 통계적으로 대비하기 위한 사용자 정의 F-검정을 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Contrast( [1 0 -1] )});

```

#### LSMeans Dunnett

**구문:** scrobj &lt;&lt; LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Dunnett( state=0|1|&lt;alpha&gt;, Control Level( level ), &lt;comparison options&gt; )} )

**설명:** 지정된 대조 수준과의 쌍별 비교를 위한 검정 및 신뢰 구간을 표시하거나 숨깁니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( 1, Control Level( "a" ) )});

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( .01, Control Level( "a" ) )});

```

#### LSMeans Plot

**구문:** scrobj &lt;&lt; LSMeans Plot;obj &lt;&lt; ( effect &lt;&lt; {LSMeans Plot} )

**설명:** 명목형 및 순서형 효과에 대한 최소 제곱 평균 그림을 표시합니다. 교호작용 효과의 경우 이 옵션은 &apos;최소 제곱 평균 그림 옵션&apos; 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Plot});

```

#### LSMeans Student's t

**구문:** scrobj &lt;&lt; Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {Student&apos;s t( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**설명:** 스튜던트 t-검정을 사용하여 최소 제곱 평균의 쌍별 비교를 위한 검정 및 신뢰 구간을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Student's t( 1 )});

```

#### LSMeans Table

**구문:** scrobj &lt;&lt; LSMeans Table( state=0|1 );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Table( state=0|1 )} )

**설명:** 효과를 검정할 때 비교되는 통계량 테이블을 표시하거나 숨깁니다. 연속형 효과에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Table( 0 )} )
);
Wait( 1 );
obj << (:Drug << {LSMeans Table( 1 )});

```

#### LSMeans Tukey HSD

**구문:** scrobj &lt;&lt; LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; );obj &lt;&lt; ( effect &lt;&lt; {LSMeans Tukey HSD( state=0|1|&lt;alpha&gt;, &lt;comparison options&gt; )} )

**설명:** Tukey-Kramer HSD(Honestly Significant Difference) 검정을 사용하여 최소 제곱 평균의 쌍별 비교를 위한 검정 및 신뢰 구간을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Tukey HSD( 1 )});

```

#### Power Analysis

**구문:** scrobj &lt;&lt; Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;);obj &lt;&lt; ( effect &lt;&lt; {Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, &lt;Power Plot&gt;, &lt;Done&gt;)} )

**설명:** 효과 검정의 검정력을 분석할 수 있는 검정력 상세 정보 보고서를 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {Power Analysis(
	Alpha( 0.05 ),
	Sigma( 4.00577754367453 ),
	Delta( 1.51166255719209 ),
	Number( 10, 100, 10 ),
	Solve for Power,
	Power Plot,
	Done
)});

```

#### Test Slices

**구문:** scrobj &lt;&lt; Test Slices( state=0|1 );obj &lt;&lt; ( response &lt;&lt; { effect1 * effect2 &lt;&lt; {Test Slices( state=0|1 )} } )

**설명:** 교호작용 항에 있는 두 요인의 각 수준에 대해 사용자 정의 F-검정을 실행합니다. 이 옵션은 명목형 효과와 순서형 효과를 포함하는 교호작용에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:height << {:age * :sex << {Test Slices( 1 )}});

```

## Fit Least Squares > LSMeans Comparisons

### 항목 메시지

#### Connecting Letters Report

**구문:** scrobj &lt;&lt; Connecting Letters Report( state=0|1 )

**설명:** 연결 문자를 사용하여 유의한 비교와 유의하지 않은 비교를 표시하거나 숨깁니다. 동일한 문자로 연결되지 않은 수준은 유의한 차이가 있고 동일한 문자로 연결된 수준은 유의한 차이가 없습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( 1, Connecting Letters Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Connecting Letters Report( 1 );

```

#### Control Differences Chart

**구문:** scrobj &lt;&lt; Control Differences Chart( state=0|1 )

**설명:** 대조 수준을 제외한 각 효과 수준의 점을 포함하는 차트를 표시하거나 숨깁니다. 각 점은 해당 수준의 최소 제곱 평균과 대조 수준의 최소 제곱 평균 간 차이를 나타냅니다. UDL(결정 상한)과 LDL(결정 하한)도 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Dunnett( .05, Control Level( "a" ), Control Differences Chart( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Chart( 1 );

```

#### Control Differences Report

**구문:** scrobj &lt;&lt; Control Differences Report( state=0|1 )

**설명:** 대조 수준을 제외한 각 효과 수준의 행을 포함하는 테이블을 표시하거나 숨깁니다. 각 행에는 대조 수준과 비교되는 수준, 추정된 차이, 차이의 표준 오차, 신뢰 구간 및 비교의 p 값이 포함되어 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Dunnett( .05, Control Level( "a" ), Control Differences Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Report( 1 );

```

#### Crosstab Report

**구문:** scrobj &lt;&lt; Crosstab Report( state=0|1 )

**설명:** 각 최소 제곱 평균 조합의 차이, 차이의 표준 오차, 차이의 신뢰 한계를 포함하는 교차표 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1, Crosstab Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Crosstab Report( 1 );

```

#### Detailed Comparisons

**구문:** scrobj &lt;&lt; Detailed Comparisons( state=0|1 )

**설명:** 각 최소 제곱 평균 조합에 대한 상세 보고서를 표시하거나 숨깁니다. 이 보고서에는 각 비교의 유의성을 보여 주는 그래프도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Detailed Comparisons( 1 );

```

#### Equivalence Test

**구문:** scrobj &lt;&lt; Equivalence Test( difference )

**설명:** 평균이 실제적으로 동등하다고 간주되는 지정된 차이 이상으로 다르지 않은지를 검정합니다. 이는 일반 유의성 검정과 반대입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Equivalence Test( 1.5 );

```

#### Ordered Differences Report

**구문:** scrobj &lt;&lt; Ordered Differences Report( state=0|1 )

**설명:** 최소 제곱 평균의 각 수준별 차이를 가장 큰 것부터 순서대로 정렬하는 보고서를 표시하거나 숨깁니다. 이 보고서에는 차이의 표준 오차, 신뢰 한계 및 p 값도 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Ordered Differences Report( 1 );

```

#### Save Connecting Letters Table

**구문:** scrobj &lt;&lt; Save Connecting Letters Table

**설명:** 효과 수준, 연결 문자, 최소 제곱 평균, 표준 오차 및 신뢰 구간을 포함하는 열이 있는 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Save Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Equivalence Tests

### 항목 메시지

#### Forest Plot

**구문:** scrobj &lt;&lt; Forest Plot( state=0|1 )

**설명:** 동등성 검정 포레스트 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Forest Plot( 1 );

```

#### Remove

**구문:** scrobj &lt;&lt; Remove

**설명:** 동등성 검정 보고서를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 2 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Remove;

```

#### Scatterplot

**구문:** scrobj &lt;&lt; Scatterplot( state=0|1 )

**설명:** 동등성 검정 산점도를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Scatterplot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Scatterplot( 1 );

```

#### Test Report

**구문:** scrobj &lt;&lt; Test Report( state=0|1 )

**설명:** 평균 간의 실제적 차이를 검정하는 데 사용되는 TOST(Two One-Sided Tests: 두 개의 단측 검정) 방법의 결과가 포함된 동등성 검정 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Test Report( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Test Report( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Mean Mean Scatterplot

### 항목 메시지

#### Show Reference Lines

**구문:** scrobj &lt;&lt; Show Reference Lines( state=0|1 )

**설명:** 산점도의 점에 대한 참조 격자선을 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1 ) );
Wait( 1 );
scrobj = Report( obj )["All Pairwise Comparisons Scatterplot"] << get scriptable object;
scrobj << Show Reference Lines( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons

### 항목 메시지

#### All Pairwise Comparisons Scatterplot

**구문:** scrobj &lt;&lt; All Pairwise Comparisons Scatterplot( state=0|1 )

**설명:** 전체 쌍별 비교 산점도를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Comparisons Scatterplot( 1 );

```

#### All Pairwise Differences

**구문:** scrobj &lt;&lt; All Pairwise Differences( state=0|1 )

**설명:** 전체 쌍별 차이 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Differences( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Differences( 1 );

```

#### All Pairwise Differences Connecting Letters

**구문:** scrobj &lt;&lt; All Pairwise Differences Connecting Letters( state=0|1 )

**설명:** 전체 쌍별 차이 연결 문자 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Save All Pairwise Differences Connecting Letters Table

**구문:** scrobj &lt;&lt; Save All Pairwise Differences Connecting Letters Table

**설명:** 효과 수준, 연결 문자, 최소 제곱 평균, 표준 오차 및 신뢰 구간을 포함하는 열이 있는 데이터 테이블을 생성합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << Save All Pairwise Differences Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Control

### 항목 메시지

#### Calculate Adjusted P-Values

**구문:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**설명:** 대조군과 차이 보고서에서 p 값 열을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Control( 1, Control Level( "Drug:a" ) ) );
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Control Decision Chart

**구문:** scrobj &lt;&lt; Comparisons with Control Decision Chart( state=0|1 )

**설명:** 대조군과 비교 결정 차트를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ), Comparisons with Control Decision Chart( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Comparisons with Control Decision Chart( 1 );

```

#### Differences from Control

**구문:** scrobj &lt;&lt; Differences from Control( state=0|1 )

**설명:** 대조군과 차이 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ), Differences from Control( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Differences from Control( 1 );

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Overall Average

### 항목 메시지

#### Calculate Adjusted P-Values

**구문:** scrobj &lt;&lt; "Calculate Adjusted P-Values"n( state=0|1 )

**설명:** 전체 평균과 차이 보고서에서 p 값 열을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Overall Average Decision Chart

**구문:** scrobj &lt;&lt; Comparisons with Overall Average Decision Chart( state=0|1 )

**설명:** 전체 평균과 비교 결정 차트를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average( 1, Comparisons with Overall Average Decision Chart( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Comparisons with Overall Average Decision Chart( 1 );

```

#### Differences from Overall Average

**구문:** scrobj &lt;&lt; Differences from Overall Average( state=0|1 )

**설명:** 전체 평균과 차이 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average( 1, Differences from Overall Average( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Differences from Overall Average( 1 );

```

## Fit Least Squares > Multiple Comparisons > Least Squares Means Plot

### 항목 메시지

#### Remove

**구문:** scrobj &lt;&lt; Remove

**설명:** 보고서에서 최소 제곱 평균 그림을 제거합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot( Show Connected Points( 0 ) ) );
Wait( 2 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Remove;

```

#### Show Confidence Limits

**구문:** scrobj &lt;&lt; Show Confidence Limits( state=0|1 )

**설명:** 그림에서 각 추정값의 신뢰 한계를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot( Show Confidence Limits( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Confidence Limits( 1 );

```

#### Show Connected Points

**구문:** scrobj &lt;&lt; Show Connected Points( state=0|1 )

**설명:** 그림에서 각 수준의 최소 제곱 평균을 연결하는 하나 이상의 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot( Show Connected Points( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Connected Points( 1 );

```

## Fit Least Squares > Multiple Comparisons

### 항목 메시지

#### Comparisons with Control

**구문:** scrobj &lt;&lt; Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Control( state=0|1, Control Level( level ), &lt;options&gt; ) )

**설명:** 각 효과 최소 제곱 평균을 대조 수준의 최소 제곱 평균과 비교하는 다중 비교 검정을 표시하거나 숨깁니다. Dunnett 검정이라고도 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Control( 1, Control Level( "Drug:a" ) ) );

```

#### Comparisons with Overall Average

**구문:** scrobj &lt;&lt; Comparisons with Overall Average( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Comparisons with Overall Average( state=0|1, &lt;options&gt; ) )

**설명:** 각 효과 최소 제곱 평균을 전체 평균 최소 제곱 평균과 비교하는 다중 비교 검정을 표시하거나 숨깁니다. 평균 분석 검정이라고도 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );

```

#### Equivalence Tests

**구문:** scrobj &lt;&lt; Equivalence Tests( number );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Equivalence Tests( number ) )

**설명:** 실제적으로 동등하다고 간주되는 지정된 차이에 대한 전체 쌍별 최소 제곱 평균 비교의 다중 비교 검정을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Equivalence Tests( 5 ) );

```

#### Least Squares Means Plot

**구문:** scrobj &lt;&lt; Least Squares Means Plot;obj &lt;&lt; Multiple Comparisons( Effect( effect ), Least Squares Means Plot )

**설명:** 표준 오차 막대가 있는 최소 제곱 평균 그림을 표시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );

```

#### Remove

**구문:** scrobj &lt;&lt; Remove

**설명:** 다중 비교 보고서를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );
Wait( 2 );
scrobj = (Report( obj )["Multiple Comparisons for Drug"] << get scriptable object);
scrobj << Remove;

```

#### Slice F Test

**구문:** scrobj &lt;&lt; Slice F Test( state=0|1 );obj &lt;&lt; Multiple Comparisons( Sliced Effect Estimates( Sliced Effect( effect1 * effect2 ), Slice Term List( effect_level ) ), Slice F Test( state=0|1 ) )

**설명:** 분할 효과에 대한 F-검정을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Sliced Effect Estimates( Sliced Effect( :age * :sex ), Slice Term List( :age( "12" ) ) ),
	Slice F Test( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Multiple Comparisons for Slice of age*sex where age = 12"] << get scriptable object);
scrobj << Slice F Test( 0 );
Wait( 1 );
scrobj << Slice F Test( 1 );

```

#### Student's t

**구문:** scrobj &lt;&lt; Student&apos;s t( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Student&apos;s t( state=0|1, &lt;options&gt; ) )

**설명:** 스튜던트 t-검정을 사용하는 전체 쌍별 최소 제곱 평균 비교의 다중 비교 검정을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Student's t( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Tukey HSD

**구문:** scrobj &lt;&lt; Tukey HSD( state=0|1, &lt;options&gt; );obj &lt;&lt; Multiple Comparisons( Effect( effect ), Tukey HSD( state=0|1, &lt;options&gt; ) )

**설명:** Tukey-Kramer HSD(Honestly Significant Difference) 검정을 사용하는 전체 쌍별 최소 제곱 평균 비교의 다중 비교 검정을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

## Fit Least Squares > REML

### 항목 메시지

#### Convergence Limit

**구문:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형 적합의 수렴 한계를 지정합니다. 모형이 쉽게 수렴되지 않는 경우 수렴 한계를 늘릴 수 있습니다. 기본값은 0.00000001입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Maximum Iterations

**구문:** obj = Fit Model(...Maximum Iterations( number=100 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형 적합에 사용되는 최대 반복 수를 지정합니다. 기본값은 100입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**구문:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 표준 최소 제곱 분석법에서 혼합 모형 적합에 사용되는 방법을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### NoBounds

**구문:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 추정에 대한 제한을 제거합니다. 이 옵션을 선택하지 않으면 분산 추정 하한이 0으로 설정됩니다. 표준 최소 제곱 분석법에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

## Fit Least Squares > Response Fit

### 공유 항목 메시지

#### Action

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Individual Response Fit(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Individual Response Fit

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**설명:** 연속형 반응에 대해 선형 회귀 모형을 적합시킵니다. 회귀, 분산 분석, 공분산 분석, 혼합 모형 및 설계된 실험 분석 기법이 포함됩니다. Emphasis 옵션을 사용하면 보고서 레이아웃을 지정할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );

```

### 항목 메시지

#### AICc

**구문:** obj &lt;&lt; AICc( state=0|1 )

**설명:** 적합 요약 보고서에서 수정 AICc(Akaike 정보 기준) 및 BIC(베이지안 정보 기준) 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**구문:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**설명:** 적합 모형을 단순 평균 모형과 비교하기 위한 통계량이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**구문:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**설명:** 베이지안 방법을 사용하여 모든 모형 항에 대한 사후 확률을 계산하는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**구문:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**설명:** 반응에 멱(Box-Cox) 변환을 사용하여 모형을 재적합시키면 적합이 어떻게 달라지는지 보여 주는 Box-Cox 변환 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**구문:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**설명:** ANCOVA(공분산 분석) 모형에 대해 교호작용 기울기를 평균 기울기와 비교하는 ANOM(평균 분석) 보고서를 생성합니다. 이 옵션은 명목형 효과와 연속형 효과가 각각 하나씩 있고 고정 효과에 대한 교호작용 효과가 있는 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**구문:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측의 개별값에 대한 신뢰 구간이 포함됩니다. 신뢰 구간은 임의 효과가 있는 모형의 임의 효과 추정값을 포함합니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**구문:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측의 기대값에 대한 신뢰 구간이 포함됩니다. 신뢰 구간은 임의 효과가 있는 모형의 임의 효과 추정값을 포함합니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**구문:** obj &lt;&lt; Conditional Pred Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 임의 효과가 있는 모형의 임의 효과 추정값을 사용하는 계산식이 포함됩니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**구문:** obj &lt;&lt; Conditional Pred Values

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 임의 효과의 BLUP(최량 선형 비편향 예측 변수) 계수를 사용하여 계산된 조건부 예측값이 포함됩니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**구문:** obj &lt;&lt; Conditional Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측의 잔차가 포함됩니다. 잔차 값은 임의 효과가 있는 모형의 임의 효과 추정값을 포함합니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 모형에 두 개 이상의 연속형 요인이 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**구문:** obj &lt;&lt; Cook&apos;s D Influence

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 각 관측값이 모형 추정에 미치는 영향을 나타내는 측도가 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**구문:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**설명:** 지정된 적합을 통한 모수 추정값 간의 상관 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**구문:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**설명:** 지정된 참조 혼합물 값에 기반한 Cox 혼합물 모형의 모수 추정값을 표시하거나 숨깁니다. 이 옵션은 모형에 혼합 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1, :p3 * :p2 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**구문:** obj &lt;&lt; Cube Plots( state=0|1 )

**설명:** 하나 이상의 입방체에 배치된 요인 범위의 극단에 대한 예측값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**구문:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**설명:** 모형의 다양한 효과를 대비하는 사용자 정의 F-검정을 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**구문:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**설명:** 잔차에 1차 자기상관이 있는지 여부를 검정하기 위한 통계량을 포함하는 Durbin-Watson 보고서를 표시하거나 숨깁니다. 이 보고서에는 잔차의 자기상관 및 통계량에 대한 정확 확률도 표시됩니다. 이 옵션은 시계열 데이터에만 사용할 수 있으며 관측값이 시간순으로 정렬되어 있다고 가정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**구문:** obj &lt;&lt; Effect Details( state=0|1 )

**설명:** 각 범주형 효과에 대한 최소 제곱 평균 테이블을 포함하여 모형의 각 효과에 대한 상세 보고서를 표시하거나 숨깁니다. 모형 효과로 메시지를 보내 추가 정보를 표시할 수 있습니다. 자세한 내용은 &apos;모형 적합&apos; 아래의 &apos;효과 적합&apos; 개체를 참조하십시오. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**구문:** obj &lt;&lt; Effect Leverage Pairs

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 효과 레버리지 그림에 표시되는 X 및 Y 값이 포함됩니다. Y 값은 편잔차이고 X 값은 효과 레버리지 그림의 회귀변수 축소입니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**구문:** obj &lt;&lt; Effect Summary( state=0|1 )

**설명:** 모형의 효과를 대화식으로 업데이트할 수 있는 효과 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**구문:** obj &lt;&lt; Effect Tests( state=0|1 )

**설명:** 모형의 고정 효과에 대한 검정이 포함된 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**구문:** obj &lt;&lt; Error Specification( "기본 추정값"|"순수 오차"|"지정됨" )

**설명:** 최소 제곱 적합 보고서에서 표준 오차 및 검정에 사용되는 오차 분산과 오차 자유도를 지정합니다. 이 옵션은 모형에 임의 효과가 없는 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**구문:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**설명:** 명목형 모형 효과의 모든 수준에 대한 모수 추정값을 표시하거나 숨깁니다. k개의 수준이 있는 명목형 효과의 경우 모수 추정값 테이블에 k-1개의 모수에 대한 계수가 포함되고 확장 추정값 테이블에는 모든 k개 수준에 대한 효과 계수가 포함됩니다. 이 옵션은 하나 이상의 효과가 연속형이 아닌 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**구문:** obj &lt;&lt; Externally Studentized Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 외부 스튜던트화 잔차(잔차를 현재 행을 제외한 표준 오차 추정값으로 나눈 값)가 포함됩니다. Hold down the shift key to enter suffix.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**구문:** obj &lt;&lt; FDR( state=0|1 )

**설명:** 효과 요약 테이블의 LogWorth 값과 해당 p 값을 FDR(False Discovery Rate)을 사용하여 수정할지 여부를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**구문:** obj &lt;&lt; Get Conditional Formula

**설명:** 임의 효과 추정값을 포함하는 예측 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**구문:** obj &lt;&lt; Get Effect Names

**설명:** 효과 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**구문:** obj &lt;&lt; Get Effect PValues

**설명:** 효과 p 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**구문:** obj &lt;&lt; Get Estimates

**설명:** 추정값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**구문:** obj &lt;&lt; Get Indiv Confid Limit Formula

**설명:** 개별값 신뢰 한계 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**구문:** obj &lt;&lt; Get MM SAS DATA Step

**설명:** SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**구문:** obj &lt;&lt; Get Mean Confid Limit Formula

**설명:** 평균 신뢰 한계 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**구문:** obj &lt;&lt; Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Get Measures;

```

#### Get Parameter Names

**구문:** obj &lt;&lt; Get Parameter Names

**설명:** 모수 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**구문:** obj &lt;&lt; Get Parameterized Formula

**설명:** 상수 대신 모수를 사용하는 예측 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**구문:** obj &lt;&lt; Get Prediction Formula

**설명:** 예측 계산식 열을 생성하는 스크립트를 생성하여 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**구문:** obj &lt;&lt; Get Random Effect Names

**설명:** 임의 효과의 이름을 반환합니다. REML 분석 방법에 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**구문:** obj &lt;&lt; Get SAS DATA Step

**설명:** 새 데이터 집합을 스코어링하는 데 사용할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**구문:** obj &lt;&lt; Get SQL prediction expression

**설명:** 반응을 예측하기 위해 SQL Select 문에 붙여 넣을 수 있는 SQL 표현식을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**구문:** obj &lt;&lt; Get Standard Error Formula

**설명:** 표준 오차 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**구문:** obj &lt;&lt; Get Std Errors

**설명:** 표준 오차를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**구문:** obj &lt;&lt; Get Variance Components

**설명:** 분산 성분을 반환합니다. REML 분석 방법에 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**구문:** obj &lt;&lt; Get X Matrix

**설명:** 설계 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**구문:** obj &lt;&lt; Get XPX Inverse

**설명:** X&apos;X 역행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**구문:** obj &lt;&lt; Get Y Matrix

**설명:** 행렬 Y를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**구문:** obj &lt;&lt; Hats

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 xInv(x`x)x` 행렬의 대각 값이 포함됩니다. 이러한 값을 해트 값 또는 레버리지 값이라고도 합니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**구문:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**설명:** 전통적 표시 함수를 사용하여 모형의 명목형 효과가 파라미터화된 모수 추정값을 포함하는 표시 함수 파라미터화 보고서를 표시하거나 숨깁니다. 이 옵션은 모형 효과에 명목형 열과 절편이 있는 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**구문:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 반응의 개별 실현값에 대한 신뢰 구간의 한계가 포함됩니다. 이 값은 반응의 변동과 추정의 변동을 모두 포함합니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**구문:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 개별 예측에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**구문:** obj &lt;&lt; Interaction Plots( state=0|1 )

**설명:** 교호작용 그림 행렬을 표시하거나 숨깁니다. 이 옵션은 모형에 교호작용 효과가 있는 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**구문:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**설명:** Y 값 및 다른 모든 요인의 값이 주어졌을 때 예측 X 값과 신뢰 구간을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**구문:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**설명:** 모형의 각 주효과에 대한 결합 검정을 표시하거나 숨깁니다. 결합 검정은 해당 주효과를 포함하는 모든 모수를 대상으로 합니다. 이 옵션은 모형에 교호작용이 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**구문:** obj &lt;&lt; Lack of Fit( state=0|1 )

**설명:** 모형의 효과가 적절한지 평가하는 검정을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**구문:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 기대값에 대한 신뢰 구간의 한계가 포함됩니다. 이 값은 추정의 변동을 포함하지만 반응의 변동은 포함하지 않습니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**구문:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 평균 반응에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**구문:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**설명:** 삼원 그림에 반응 등고선을 보여 주는 혼합물 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에서 3개 이상의 요인에 혼합 효과 속성이 적용되거나 3개 이상의 요인 열에 혼합물 특성이 적용된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1, :p3 * :p2 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Model Dialog;

```

#### Multiple Comparisons

**구문:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**설명:** 최소 제곱 평균 추정값 또는 사용자 정의 추정값을 생성합니다. 다중 비교 보고서를 사용하여 전체 평균과 비교, 대조군과 비교 또는 쌍별 비교를 수행할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**구문:** obj &lt;&lt; Normal Plot( state=0|1 )

**설명:** 정규성에서 벗어난 모수 추정값을 식별하는 그림을 표시하거나 숨깁니다. 이렇게 하면 활성 효과를 확인하는 데 도움이 됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**구문:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**설명:** 각 모수가 0이라는 가설에 대한 모수 추정값 및 t-검정이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**구문:** obj &lt;&lt; Parameter Power( state=0|1 )

**설명:** 모수 추정값 보고서에서 열을 추가하거나 제거합니다. 이러한 열에는 해당 가설 검정과 관련된 검정력 및 기타 상세 정보가 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**구문:** obj &lt;&lt; Parameterized Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 상수 대신 테이블 모수를 사용하는 예측 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**구문:** obj &lt;&lt; Pareto Plot( state=0|1 )

**설명:** 직교화 및 표준화된 모수 추정값의 절대값 그림을 표시하거나 숨깁니다. 이 그림은 절대값의 합과 비교한 각 절대값 구성을 보여 줍니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**구문:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**설명:** 반응 예측값에 대한 반응 관측값을 보여 주는 실제값 대 예측값 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**구문:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**설명:** 모형의 각 효과에 대한 레버리지 그림 보고서를 표시하거나 숨깁니다. 이 그림은 관측값이 해당 효과에 미치는 영향을 보여 주고 다중공선성에 대한 정보를 제공합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**구문:** obj &lt;&lt; Plot Regression( state=0|1 )

**설명:** 범주형 효과의 각 수준에 대한 데이터 산점도와 회귀선을 포함하는 회귀 그림 보고서를 표시하거나 숨깁니다. 이 옵션은 모형에 연속형 효과가 정확히 하나만 있고 범주형 효과가 최대 한 개인 경우에만 사용할 수 있습니다. 이러한 조건이 충족되면 회귀 그림 보고서가 기본으로 제공됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**구문:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**설명:** 세로 축에 잔차가 있고 가로 축에 잔차의 정규 분위수가 있는 그림을 표시하거나 숨깁니다. REML 방법이 지정된 경우에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**구문:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**설명:** 세로 축에 잔차가 있고 가로 축에 반응 예측값이 있는 그림을 표시하거나 숨깁니다. 이 옵션은 연속형 반응에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**구문:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**설명:** 세로 축에 잔차가 있고 가로 축에 행 번호가 있는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**구문:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**설명:** 세로 축에 스튜던트화 잔차가 있고 가로 축에 행 번호가 있는 그림을 표시하거나 숨깁니다. 그림의 각 점은 현재 관측값이 삭제된 상태에서 구한 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**구문:** obj &lt;&lt; Predicted Values

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 적합 모형에 대한 예측값이 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**구문:** obj &lt;&lt; Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 적합 모형에 대한 예측 계산식이 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**구문:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**설명:** 데이터 테이블에 새 열을 저장합니다. 이 열에는 예측, 신뢰 한계 및 예측 한계에 대한 계산식이 포함됩니다. 이 옵션으로 생성된 한계 열에는 예측 프로파일러에 사용되는 특성이 포함됩니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler( Y( :Pred Formula y ), Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ) );
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler( Y( :Pred Formula y2 ), Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ) );

```

#### Press

**구문:** obj &lt;&lt; Press( state=0|1 )

**설명:** Press(예측 오차 제곱합) 통계량과 RMSE(제곱근 평균 제곱 오차)를 표시하거나 숨깁니다. Press 통계량은 여러 모형을 비교할 때 유용합니다. Press 통계량이 낮은 모형이 선호됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**구문:** obj &lt;&lt; Publish Conditional Formula

**설명:** 임의 효과 추정값을 포함하는 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**구문:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**설명:** 개별값 신뢰 한계 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**구문:** obj &lt;&lt; Publish Mean Confid Limit Formula

**설명:** 평균 신뢰 한계 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**구문:** obj &lt;&lt; Publish Parameterized Formula

**설명:** 상수 대신 모수를 사용하는 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**구문:** obj &lt;&lt; Publish Prediction Formula

**설명:** 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**구문:** obj &lt;&lt; Publish Standard Error Formula

**설명:** 표준 오차 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Standard Error Formula;

```

#### Residuals

**구문:** obj &lt;&lt; Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 적합 모형에 대한 잔차 값이 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**구문:** obj &lt;&lt; Save Coding Table

**설명:** 모든 모형 모수에 대한 JMP 코딩을 포함하는 새 데이터 테이블을 생성합니다. 마지막 열에는 반응 변수의 값이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**구문:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**설명:** 평균이 0이고 범위가 2가 되도록 척도화된 요인에 해당하는 모수 추정값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**구문:** obj &lt;&lt; Sequential Tests( state=0|1 )

**설명:** 모형에 효과가 순차적으로 추가될 때 제곱합이 포함된 순차(유형 1) 검정 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**구문:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**설명:** 모수 추정값 및 최소 제곱 평균 추정값의 신뢰 구간을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**구문:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**설명:** 추정된 모형에 대한 방정식을 포함하는 예측 표현식 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**구문:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**설명:** REML 분산 성분 추정값 보고서에 분산 성분 제곱근(표준편차) 열을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**구문:** obj &lt;&lt; Show VIF( state=0|1 )

**설명:** 모수 추정값 보고서에서 VIF(분산 팽창 계수) 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**구문:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**설명:** 선별 상황에서 유용한 정렬된 모수 추정값 보고서를 표시하거나 숨깁니다. 이 보고서에는 모수 추정값이 각 추정값에 대한 t 비의 절대값을 기준으로 정렬되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**구문:** obj &lt;&lt; Std Error of Individual

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 개별 예측값의 표준 오차가 포함됩니다. 이 값은 개별값 신뢰 구간을 계산하는 데 사용됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 예측값의 표준 오차가 포함됩니다. 이 값은 평균 신뢰 구간을 계산하는 데 사용됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**구문:** obj &lt;&lt; Std Error of Residual

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 잔차 값의 표준 오차가 포함됩니다. 이 값은 스튜던트화 잔차를 계산하는 데 사용됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**구문:** obj &lt;&lt; StdErr Pred Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 예측값의 표준 오차 계산식이 회귀변수의 함수로 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**구문:** obj &lt;&lt; Studentized Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 스튜던트화 잔차(잔차를 표준 오차로 나눈 값)가 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**구문:** obj &lt;&lt; Summary of Fit( state=0|1 )

**설명:** 모형 적합 통계량 요약이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler( state=0|1 )

**설명:** 반응 표면의 3차원 표면 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

## Fit Least Squares

### 공유 항목 메시지

#### Action

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Least Squares Personality(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Least Squares Personality

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**설명:** 연속형 반응에 대해 선형 회귀 모형을 적합시킵니다. 회귀, 분산 분석, 공분산 분석, 혼합 모형 및 설계된 실험 분석 기법이 포함됩니다. Emphasis 옵션을 사용하면 보고서 레이아웃을 지정할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );

```

### 항목 메시지

#### AICc

**구문:** obj &lt;&lt; AICc( state=0|1 )

**설명:** 적합 요약 보고서에서 수정 AICc(Akaike 정보 기준) 및 BIC(베이지안 정보 기준) 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**구문:** obj &lt;&lt; Analysis of Variance( state=0|1 )

**설명:** 적합 모형을 단순 평균 모형과 비교하기 위한 통계량이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**구문:** obj &lt;&lt; Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go )

**설명:** 베이지안 방법을 사용하여 모든 모형 항에 대한 사후 확률을 계산하는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**구문:** obj &lt;&lt; Box Cox Y Transformation( state=0|1, &lt;Save Best Transformation( state=0|1 )&gt;, &lt;Save Specific Transformation( number )&gt;, &lt;Table of Estimates( state=0|1 )&gt; )

**설명:** 반응에 멱(Box-Cox) 변환을 사용하여 모형을 재적합시키면 적합이 어떻게 달라지는지 보여 주는 Box-Cox 변환 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**구문:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**설명:** ANCOVA(공분산 분석) 모형에 대해 교호작용 기울기를 평균 기울기와 비교하는 ANOM(평균 분석) 보고서를 생성합니다. 이 옵션은 명목형 효과와 연속형 효과가 각각 하나씩 있고 고정 효과에 대한 교호작용 효과가 있는 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**구문:** obj &lt;&lt; Conditional Indiv CI( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측의 개별값에 대한 신뢰 구간이 포함됩니다. 신뢰 구간은 임의 효과가 있는 모형의 임의 효과 추정값을 포함합니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**구문:** obj &lt;&lt; Conditional Mean CI( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측의 기대값에 대한 신뢰 구간이 포함됩니다. 신뢰 구간은 임의 효과가 있는 모형의 임의 효과 추정값을 포함합니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**구문:** obj &lt;&lt; Conditional Pred Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 임의 효과가 있는 모형의 임의 효과 추정값을 사용하는 계산식이 포함됩니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**구문:** obj &lt;&lt; Conditional Pred Values

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 임의 효과의 BLUP(최량 선형 비편향 예측 변수) 계수를 사용하여 계산된 조건부 예측값이 포함됩니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**구문:** obj &lt;&lt; Conditional Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측의 잔차가 포함됩니다. 잔차 값은 임의 효과가 있는 모형의 임의 효과 추정값을 포함합니다. 이 옵션은 REML 분석 방법에만 사용할 수 있습니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 모형에 두 개 이상의 연속형 요인이 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**구문:** obj &lt;&lt; Cook&apos;s D Influence

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 각 관측값이 모형 추정에 미치는 영향을 나타내는 측도가 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**구문:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**설명:** 지정된 적합을 통한 모수 추정값 간의 상관 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**구문:** obj &lt;&lt; Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**설명:** 지정된 참조 혼합물 값에 기반한 Cox 혼합물 모형의 모수 추정값을 표시하거나 숨깁니다. 이 옵션은 모형에 혼합 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1, :p3 * :p2 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**구문:** obj &lt;&lt; Cube Plots( state=0|1 )

**설명:** 하나 이상의 입방체에 배치된 요인 범위의 극단에 대한 예측값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**구문:** obj &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**설명:** 모형의 다양한 효과를 대비하는 사용자 정의 F-검정을 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**구문:** obj &lt;&lt; Durbin Watson Test( state=0|1 )

**설명:** 잔차에 1차 자기상관이 있는지 여부를 검정하기 위한 통계량을 포함하는 Durbin-Watson 보고서를 표시하거나 숨깁니다. 이 보고서에는 잔차의 자기상관 및 통계량에 대한 정확 확률도 표시됩니다. 이 옵션은 시계열 데이터에만 사용할 수 있으며 관측값이 시간순으로 정렬되어 있다고 가정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**구문:** obj &lt;&lt; Effect Details( state=0|1 )

**설명:** 각 범주형 효과에 대한 최소 제곱 평균 테이블을 포함하여 모형의 각 효과에 대한 상세 보고서를 표시하거나 숨깁니다. 모형 효과로 메시지를 보내 추가 정보를 표시할 수 있습니다. 자세한 내용은 &apos;모형 적합&apos; 아래의 &apos;효과 적합&apos; 개체를 참조하십시오. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**구문:** obj &lt;&lt; Effect Leverage Pairs

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 효과 레버리지 그림에 표시되는 X 및 Y 값이 포함됩니다. Y 값은 편잔차이고 X 값은 효과 레버리지 그림의 회귀변수 축소입니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**구문:** obj &lt;&lt; Effect Summary( state=0|1 )

**설명:** 모형의 효과를 대화식으로 업데이트할 수 있는 효과 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**구문:** obj &lt;&lt; Effect Tests( state=0|1 )

**설명:** 모형의 고정 효과에 대한 검정이 포함된 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**구문:** obj &lt;&lt; Error Specification( "기본 추정값"|"순수 오차"|"지정됨" )

**설명:** 최소 제곱 적합 보고서에서 표준 오차 및 검정에 사용되는 오차 분산과 오차 자유도를 지정합니다. 이 옵션은 모형에 임의 효과가 없는 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**구문:** obj &lt;&lt; Expanded Estimates( state=0|1 )

**설명:** 명목형 모형 효과의 모든 수준에 대한 모수 추정값을 표시하거나 숨깁니다. k개의 수준이 있는 명목형 효과의 경우 모수 추정값 테이블에 k-1개의 모수에 대한 계수가 포함되고 확장 추정값 테이블에는 모든 k개 수준에 대한 효과 계수가 포함됩니다. 이 옵션은 하나 이상의 효과가 연속형이 아닌 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**구문:** obj &lt;&lt; Externally Studentized Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 외부 스튜던트화 잔차(잔차를 현재 행을 제외한 표준 오차 추정값으로 나눈 값)가 포함됩니다. Hold down the shift key to enter suffix.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**구문:** obj &lt;&lt; FDR( state=0|1 )

**설명:** 효과 요약 테이블의 LogWorth 값과 해당 p 값을 FDR(False Discovery Rate)을 사용하여 수정할지 여부를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**구문:** obj &lt;&lt; Get Conditional Formula

**설명:** 임의 효과 추정값을 포함하는 예측 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**구문:** obj &lt;&lt; Get Effect Names

**설명:** 효과 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**구문:** obj &lt;&lt; Get Effect PValues

**설명:** 효과 p 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**구문:** obj &lt;&lt; Get Estimates

**설명:** 추정값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**구문:** obj &lt;&lt; Get Indiv Confid Limit Formula

**설명:** 개별값 신뢰 한계 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**구문:** obj &lt;&lt; Get MM SAS DATA Step

**설명:** SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**구문:** obj &lt;&lt; Get Mean Confid Limit Formula

**설명:** 평균 신뢰 한계 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**구문:** obj &lt;&lt; Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Get Measures;

```

#### Get Parameter Names

**구문:** obj &lt;&lt; Get Parameter Names

**설명:** 모수 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**구문:** obj &lt;&lt; Get Parameterized Formula

**설명:** 상수 대신 모수를 사용하는 예측 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**구문:** obj &lt;&lt; Get Prediction Formula

**설명:** 예측 계산식 열을 생성하는 스크립트를 생성하여 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**구문:** obj &lt;&lt; Get Random Effect Names

**설명:** 임의 효과의 이름을 반환합니다. REML 분석 방법에 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**구문:** obj &lt;&lt; Get SAS DATA Step

**설명:** 새 데이터 집합을 스코어링하는 데 사용할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**구문:** obj &lt;&lt; Get SQL prediction expression

**설명:** 반응을 예측하기 위해 SQL Select 문에 붙여 넣을 수 있는 SQL 표현식을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**구문:** obj &lt;&lt; Get Standard Error Formula

**설명:** 표준 오차 계산식을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**구문:** obj &lt;&lt; Get Std Errors

**설명:** 표준 오차를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**구문:** obj &lt;&lt; Get Variance Components

**설명:** 분산 성분을 반환합니다. REML 분석 방법에 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**구문:** obj &lt;&lt; Get X Matrix

**설명:** 설계 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**구문:** obj &lt;&lt; Get XPX Inverse

**설명:** X&apos;X 역행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**구문:** obj &lt;&lt; Get Y Matrix

**설명:** 행렬 Y를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**구문:** obj &lt;&lt; Hats

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 xInv(x`x)x` 행렬의 대각 값이 포함됩니다. 이러한 값을 해트 값 또는 레버리지 값이라고도 합니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**구문:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**설명:** 전통적 표시 함수를 사용하여 모형의 명목형 효과가 파라미터화된 모수 추정값을 포함하는 표시 함수 파라미터화 보고서를 표시하거나 숨깁니다. 이 옵션은 모형 효과에 명목형 열과 절편이 있는 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**구문:** obj &lt;&lt; Indiv Confidence Interval( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 반응의 개별 실현값에 대한 신뢰 구간의 한계가 포함됩니다. 이 값은 반응의 변동과 추정의 변동을 모두 포함합니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**구문:** obj &lt;&lt; Indiv Confidence Limit Formula( &lt;alpha=0.05&gt; )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 개별 예측에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**구문:** obj &lt;&lt; Interaction Plots( state=0|1 )

**설명:** 교호작용 그림 행렬을 표시하거나 숨깁니다. 이 옵션은 모형에 교호작용 효과가 있는 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**구문:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**설명:** Y 값 및 다른 모든 요인의 값이 주어졌을 때 예측 X 값과 신뢰 구간을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**구문:** obj &lt;&lt; Joint Factor Tests( state=0|1 )

**설명:** 모형의 각 주효과에 대한 결합 검정을 표시하거나 숨깁니다. 결합 검정은 해당 주효과를 포함하는 모든 모수를 대상으로 합니다. 이 옵션은 모형에 교호작용이 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**구문:** obj &lt;&lt; Lack of Fit( state=0|1 )

**설명:** 모형의 효과가 적절한지 평가하는 검정을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**구문:** obj &lt;&lt; Mean Confidence Interval( &lt;alpha=0.05&gt; )

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 기대값에 대한 신뢰 구간의 한계가 포함됩니다. 이 값은 추정의 변동을 포함하지만 반응의 변동은 포함하지 않습니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**구문:** obj &lt;&lt; Mean Confidence Limit Formula( &lt;alpha=0.05&gt; )

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 평균 반응에 대한 신뢰 하한 및 신뢰 상한을 회귀변수의 함수로 계산하는 열이 포함됩니다. 기본 유의 수준은 0.05로, 95% 신뢰 한계를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**구문:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**설명:** 삼원 그림에 반응 등고선을 보여 주는 혼합물 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에서 3개 이상의 요인에 혼합 효과 속성이 적용되거나 3개 이상의 요인 열에 혼합물 특성이 적용된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1, :p3 * :p2 ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
obj << Model Dialog;

```

#### Multiple Comparisons

**구문:** obj &lt;&lt; Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), &lt;options&gt; )

**설명:** 최소 제곱 평균 추정값 또는 사용자 정의 추정값을 생성합니다. 다중 비교 보고서를 사용하여 전체 평균과 비교, 대조군과 비교 또는 쌍별 비교를 수행할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**구문:** obj &lt;&lt; Normal Plot( state=0|1 )

**설명:** 정규성에서 벗어난 모수 추정값을 식별하는 그림을 표시하거나 숨깁니다. 이렇게 하면 활성 효과를 확인하는 데 도움이 됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**구문:** obj &lt;&lt; Parameter Estimates( state=0|1 )

**설명:** 각 모수가 0이라는 가설에 대한 모수 추정값 및 t-검정이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**구문:** obj &lt;&lt; Parameter Power( state=0|1 )

**설명:** 모수 추정값 보고서에서 열을 추가하거나 제거합니다. 이러한 열에는 해당 가설 검정과 관련된 검정력 및 기타 상세 정보가 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**구문:** obj &lt;&lt; Parameterized Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 상수 대신 테이블 모수를 사용하는 예측 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**구문:** obj &lt;&lt; Pareto Plot( state=0|1 )

**설명:** 직교화 및 표준화된 모수 추정값의 절대값 그림을 표시하거나 숨깁니다. 이 그림은 절대값의 합과 비교한 각 절대값 구성을 보여 줍니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**구문:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**설명:** 반응 예측값에 대한 반응 관측값을 보여 주는 실제값 대 예측값 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**구문:** obj &lt;&lt; Plot Effect Leverage( state=0|1 )

**설명:** 모형의 각 효과에 대한 레버리지 그림 보고서를 표시하거나 숨깁니다. 이 그림은 관측값이 해당 효과에 미치는 영향을 보여 주고 다중공선성에 대한 정보를 제공합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**구문:** obj &lt;&lt; Plot Regression( state=0|1 )

**설명:** 범주형 효과의 각 수준에 대한 데이터 산점도와 회귀선을 포함하는 회귀 그림 보고서를 표시하거나 숨깁니다. 이 옵션은 모형에 연속형 효과가 정확히 하나만 있고 범주형 효과가 최대 한 개인 경우에만 사용할 수 있습니다. 이러한 조건이 충족되면 회귀 그림 보고서가 기본으로 제공됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**구문:** obj &lt;&lt; Plot Residual by Normal Quantiles( state=0|1 )

**설명:** 세로 축에 잔차가 있고 가로 축에 잔차의 정규 분위수가 있는 그림을 표시하거나 숨깁니다. REML 방법이 지정된 경우에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**구문:** obj &lt;&lt; Plot Residual by Predicted( state=0|1 )

**설명:** 세로 축에 잔차가 있고 가로 축에 반응 예측값이 있는 그림을 표시하거나 숨깁니다. 이 옵션은 연속형 반응에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**구문:** obj &lt;&lt; Plot Residual by Row( state=0|1 )

**설명:** 세로 축에 잔차가 있고 가로 축에 행 번호가 있는 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**구문:** obj &lt;&lt; Plot Studentized Residuals( state=0|1 )

**설명:** 세로 축에 스튜던트화 잔차가 있고 가로 축에 행 번호가 있는 그림을 표시하거나 숨깁니다. 그림의 각 점은 현재 관측값이 삭제된 상태에서 구한 표준편차 추정값을 사용하여 계산됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**구문:** obj &lt;&lt; Predicted Values

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 적합 모형에 대한 예측값이 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**구문:** obj &lt;&lt; Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 적합 모형에 대한 예측 계산식이 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**구문:** obj &lt;&lt; Prediction and Interval Formulas( &lt;alpha=0.05&gt; )

**설명:** 데이터 테이블에 새 열을 저장합니다. 이 열에는 예측, 신뢰 한계 및 예측 한계에 대한 계산식이 포함됩니다. 이 옵션으로 생성된 한계 열에는 예측 프로파일러에 사용되는 특성이 포함됩니다. Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler( Y( :Pred Formula y ), Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ) );
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler( Y( :Pred Formula y2 ), Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) ) );

```

#### Press

**구문:** obj &lt;&lt; Press( state=0|1 )

**설명:** Press(예측 오차 제곱합) 통계량과 RMSE(제곱근 평균 제곱 오차)를 표시하거나 숨깁니다. Press 통계량은 여러 모형을 비교할 때 유용합니다. Press 통계량이 낮은 모형이 선호됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**구문:** obj &lt;&lt; Publish Conditional Formula

**설명:** 임의 효과 추정값을 포함하는 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**구문:** obj &lt;&lt; Publish Indiv Confid Limit Formula

**설명:** 개별값 신뢰 한계 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**구문:** obj &lt;&lt; Publish Mean Confid Limit Formula

**설명:** 평균 신뢰 한계 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**구문:** obj &lt;&lt; Publish Parameterized Formula

**설명:** 상수 대신 모수를 사용하는 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**구문:** obj &lt;&lt; Publish Prediction Formula

**설명:** 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**구문:** obj &lt;&lt; Publish Standard Error Formula

**설명:** 표준 오차 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model( Y( :y ), Effects( :Drug, :x ), Personality( "Standard Least Squares" ), Run );
code = obj << Publish Standard Error Formula;

```

#### Residuals

**구문:** obj &lt;&lt; Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 적합 모형에 대한 잔차 값이 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**구문:** obj &lt;&lt; Save Coding Table

**설명:** 모든 모형 모수에 대한 JMP 코딩을 포함하는 새 데이터 테이블을 생성합니다. 마지막 열에는 반응 변수의 값이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**구문:** obj &lt;&lt; Scaled Estimates( state=0|1 )

**설명:** 평균이 0이고 범위가 2가 되도록 척도화된 요인에 해당하는 모수 추정값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**구문:** obj &lt;&lt; Sequential Tests( state=0|1 )

**설명:** 모형에 효과가 순차적으로 추가될 때 제곱합이 포함된 순차(유형 1) 검정 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**구문:** obj &lt;&lt; Show All Confidence Intervals( state=0|1 )

**설명:** 모수 추정값 및 최소 제곱 평균 추정값의 신뢰 구간을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**구문:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**설명:** 추정된 모형에 대한 방정식을 포함하는 예측 표현식 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**구문:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**설명:** REML 분산 성분 추정값 보고서에 분산 성분 제곱근(표준편차) 열을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**구문:** obj &lt;&lt; Show VIF( state=0|1 )

**설명:** 모수 추정값 보고서에서 VIF(분산 팽창 계수) 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**구문:** obj &lt;&lt; Sorted Estimates( state=0|1 )

**설명:** 선별 상황에서 유용한 정렬된 모수 추정값 보고서를 표시하거나 숨깁니다. 이 보고서에는 모수 추정값이 각 추정값에 대한 t 비의 절대값을 기준으로 정렬되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**구문:** obj &lt;&lt; Std Error of Individual

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 개별 예측값의 표준 오차가 포함됩니다. 이 값은 개별값 신뢰 구간을 계산하는 데 사용됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 예측값의 표준 오차가 포함됩니다. 이 값은 평균 신뢰 구간을 계산하는 데 사용됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**구문:** obj &lt;&lt; Std Error of Residual

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 잔차 값의 표준 오차가 포함됩니다. 이 값은 스튜던트화 잔차를 계산하는 데 사용됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**구문:** obj &lt;&lt; StdErr Pred Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 예측값의 표준 오차 계산식이 회귀변수의 함수로 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**구문:** obj &lt;&lt; Studentized Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 스튜던트화 잔차(잔차를 표준 오차로 나눈 값)가 포함됩니다. Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**구문:** obj &lt;&lt; Summary of Fit( state=0|1 )

**설명:** 모형 적합 통계량 요약이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler( state=0|1 )

**설명:** 반응 표면의 3차원 표면 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

## Fit LogVariance > Response Fit LogVariance

### 공유 항목 메시지

#### Action

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Prediction Formula(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 항목 메시지

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);
obj << (2 << Apply Preset( preset ));

```

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Indiv Confidence Interval

**구문:** obj &lt;&lt; Indiv Confidence Interval

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 개별 반응 값에 대한 신뢰 한계가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Mean Confidence Interval

**구문:** obj &lt;&lt; Mean Confidence Interval

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 예측 평균에 대한 신뢰 구간의 한계가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);

```

#### Plot Actual by Predicted

**구문:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**설명:** 세로 축에 실제값이 있고 가로 축에 예측값이 있는 진단 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run( Plot Actual by Predicted( 0 ) )
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Studentized Residual by Predicted

**구문:** obj &lt;&lt; Plot Studentized Residual by Predicted( state=0|1 )

**설명:** 세로 축에 스튜던트화 잔차가 있고 가로 축에 예측값이 있는 진단 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Predicted( 1 );

```

#### Plot Studentized Residual by Row

**구문:** obj &lt;&lt; Plot Studentized Residual by Row( state=0|1 )

**설명:** 세로 축에 스튜던트화 잔차가 있고 가로 축에 행 번호가 있는 진단 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Row( 1 );

```

#### Prediction Formula

**구문:** obj &lt;&lt; Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 지정된 모형에 의해 계산된 평균의 예측값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Residuals

**구문:** obj &lt;&lt; Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 반응 관측값에서 예측값을 뺀 잔차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Residuals;

```

#### Std Dev Formula

**구문:** obj &lt;&lt; Std Dev Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 지정된 모형에 의해 계산된 표준편차의 예측값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Dev Formula;

```

#### Std Error of Individual

**구문:** obj &lt;&lt; Std Error of Individual

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 개별 예측값의 표준 오차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; Std Error of Predicted

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 예측값의 표준 오차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Predicted;

```

#### Studentized Residuals

**구문:** obj &lt;&lt; Studentized Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열 값은 잔차를 표준 오차로 나눈 값입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Studentized Residuals;

```

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler( state=0|1 )

**설명:** 반응과 반응 표준편차에 대한 대화식 표면 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

#### Variance Formula

**구문:** obj &lt;&lt; Variance Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 지정된 모형에 의해 계산된 분산의 예측값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Variance Formula;

```

## Fit LogVariance

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Redo Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Relaunch Analysis;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### 연결된 생성자

#### Fit LogVariance

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Loglinear Variance" ) )

**설명:** 연속형 반응 변수의 평균과 분산 모두에 대한 모형을 적합시킵니다. 두 모형에 대해 서로 다른 효과 집합을 지정할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);

```

### 항목 메시지

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler( state=0|1 )

**설명:** 반응과 반응 표준편차에 대한 대화식 표면 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

## Fit Manova > Effect

### 항목 메시지

#### Centroid Plot

**구문:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Centroid Plot( state=0|1 )))

**설명:** 시험 공간에서 구성된 처음 두 정준 변수에 대한 중심값 테이블과 중심(다변량 최소 제곱 평균) 그림을 표시하거나 숨깁니다. 절편 항은 Effect[0]로 지정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

#### Contrast

**구문:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Contrast( [ l1 l2 l3 ... ] )))

**설명:** 모형의 효과에 대한 처리 수준을 통계적으로 대비하기 위한 사용자 정의 F-검정을 실행합니다. 대비를 벡터 인수로 지정합니다. 절편 항은 Effect[0]로 지정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[3] << Contrast( [0.5 0.5 -0.5 -0.5] )));

```

#### Save Canonical Scores

**구문:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Save Cannonical Scores

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 지정된 효과의 정준 스코어가 포함됩니다. 절편 항은 Effect[0]로 지정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Save Canonical Scores));

```

#### Test Details

**구문:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; Test Details( state=0|1 )))

**설명:** 지정된 효과의 검정에 대한 정준 상세 정보를 표시하거나 숨깁니다. 절편 항은 Effect[0]로 지정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Test Details( 1 )));

```

## Fit Manova > Response

### 항목 메시지

#### Custom Test

**구문:** obj &lt;&lt; (Response[i] &lt;&lt; Custom Test( [ l1 l2 l3 ... ], &lt;Label( name )&gt; ))

**설명:** 모형의 다양한 효과를 대비하는 사용자 정의 F-검정을 실행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ), Response Function( "Contrast" ) )
);
Wait( 0 );
obj << (Response[2] << Custom Test( [0 1 0 -1 0], Label( "Test 1" ) ));

```

#### Effect

**구문:** obj &lt;&lt; (Response[i] &lt;&lt; (Effect[j] &lt;&lt; effect options))

**설명:** 보고서 창에서 특정 반응 내의 특정 효과로 메시지를 보낼 수 있습니다. 효과로 보낼 수 있는 메시지에 대한 자세한 내용을 보려면 &apos;스크립트 인덱스&apos;에서 Objects > Fit Model > Fit Manova > Effect를 선택하십시오. 절편 항은 Effect[0]로 지정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

## Fit Manova

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Manova(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Manova

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Manova" ) )

**설명:** 여러 개의 연속형 반응 변수를 포함하는 모형을 적합시킵니다. 다변량 분산 분석, 반복 측정, 판별 분석 및 정준 상관 기법이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);

```

### 항목 메시지

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Model Dialog;

```

#### Response Function

**구문:** obj &lt;&lt; Response Function( matrix type, &lt;Univariate Tests Also&gt; )

**설명:** 반응 함수의 행렬 유형을 지정합니다. 이 행렬은 다변량 분석을 위한 변환 변수 집합을 정의하는 열로 구성된 M 행렬입니다. 선택적 &apos;단변량 검정 추가&apos; 인수는 보고서에 수정 및 수정되지 않은 단변량 반복 측정 검정과 다변량 검정을 포함하도록 지정합니다.

**기본 예제**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Response Function( "Sum" );

```

**단변량 검정 포함**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
Wait( 0 );
obj << Response Function( "Contrast", Univariate Tests Also );

```

#### Save Discrim

**구문:** obj &lt;&lt; Save Discrim

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 Mahalanobis 거리, 효과의 각 수준에 속할 확률, 확률이 가장 높은 예측 수준 등이 포함됩니다. 이 옵션은 모형에 하나의 범주형 효과가 있는 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Effects( :Species ),
	Personality( "Manova" ),
	Run
);
obj << Save Discrim;

```

#### Save Predicted

**구문:** obj &lt;&lt; Save Predicted

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 모형의 각 반응에 대한 예측값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Predicted;

```

#### Save Residuals

**구문:** obj &lt;&lt; Save Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 모형의 각 반응에 대한 잔차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Residuals;

```

## Fit Mixed

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Mixed(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Mixed

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Mixed Model" ) )

**설명:** REML을 사용하여 다양한 복소 공분산 구조에 대한 선형 혼합 모형을 적합시킵니다. 이러한 모형은 랜덤 계수, 반복 측정, 분할구, 공간 데이터, 그리고 상관 관계가 있는 여러 반응이 포함된 데이터에 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);

```

### 항목 메시지

#### Actual by Conditional Predicted Plot

**구문:** obj &lt;&lt; Actual by Conditional Predicted Plot( state=0|1 )

**설명:** 임의 효과를 고려하여 실제값 대 모형에서 예측한 값을 보여 주는 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Conditional Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Conditional Predicted Plot( 1 );

```

#### Actual by Predicted Plot

**구문:** obj &lt;&lt; Actual by Predicted Plot( state=0|1 )

**설명:** 임의 효과를 고려하지 않고 실제값 대 모형에서 예측한 값을 보여 주는 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Predicted Plot( 1 );

```

#### Between-Within Degrees of Freedom

**구문:** obj &lt;&lt; Between-Within Degrees of Freedom( state=0|1)

**설명:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << "Between-Within Degrees of Freedom"n( 1 );

```

#### Compare Slopes

**구문:** obj &lt;&lt; Compare Slopes( Effect( effect ), &lt;options&gt; )

**설명:** ANCOVA(공분산 분석) 모형에서 교호작용 효과의 각 수준에 대한 기울기를 비교할 수 있는 보고서를 표시하거나 숨깁니다. 이 옵션은 명목형 항과 연속형 항이 각각 하나이고 고정 효과에 대한 교호작용 효과가 있는 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Fit Model(
	Y( :Calories ),
	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),
	Random Effects( :Manufacturer ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Sugars * :Fiber Gr ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Contour Profiler

**구문:** obj &lt;&lt; Conditional Contour Profiler( state=0|1 )

**설명:** 한 번에 두 요인에 대한 조건부 반응을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 연속형 효과와 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Contour Profiler( 1 );

```

#### Conditional Mean CI

**구문:** obj &lt;&lt; Conditional Mean CI

**설명:** 두 개의 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측 기대값에 대한 신뢰 하한과 신뢰 상한이 포함됩니다. 신뢰 구간에는 임의 효과가 있는 모형의 임의 효과 추정값이 포함됩니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Mean CI;

```

#### Conditional Mixture Profiler

**구문:** obj &lt;&lt; Conditional Mixture Profiler( state=0|1 )

**설명:** 삼원 그림에 조건부 반응 등고선을 보여 주는 혼합물 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함되어 있고 모형에서 3개 이상의 요인에 혼합 효과 속성이 적용되거나 3개 이상의 요인 열에 혼합물 특성이 적용된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Mixture Profiler( 1 );

```

#### Conditional Prediction Formula

**구문:** obj &lt;&lt; Conditional Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 평균에 대한 예측 계산식이 포함됩니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Prediction Formula;

```

#### Conditional Predictions

**구문:** obj &lt;&lt; Conditional Predictions

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 평균에 대한 예측값이 포함됩니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Predictions;

```

#### Conditional Profiler

**구문:** obj &lt;&lt; Conditional Profiler( state=0|1 )

**설명:** 조건부 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Profiler( 1 );

```

#### Conditional Residual Plots

**구문:** obj &lt;&lt; Conditional Residual Plots( state=0|1 )

**설명:** 임의 효과를 고려하여 모형 적합을 평가하는 잔차 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Residual Plots( 1 );

```

#### Conditional Residuals

**구문:** obj &lt;&lt; Conditional Residuals

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 반응 관측값에서 예측 계산식을 뺀 형식으로 제공되는 조건부 잔차 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Residuals;

```

#### Conditional Surface Profiler

**구문:** obj &lt;&lt; Conditional Surface Profiler( state=0|1 )

**설명:** 조건부 반응의 3차원 표면 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 효과와 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Surface Profiler( 1 );

```

#### Containment Degrees of Freedom

**구문:** obj &lt;&lt; Containment Degrees of Freedom( state=0|1 )

**설명:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Containment Degrees of Freedom( 1 );

```

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 요인에 대한 주변 반응을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 연속형 고정 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Correlation of Fixed Effects

**구문:** obj &lt;&lt; Correlation of Fixed Effects( state=0|1 )

**설명:** 모형의 고정 효과에 대한 상관 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Correlation of Fixed Effects( 1 );

```

#### Covariance of All Parameters

**구문:** obj &lt;&lt; Covariance of All Parameters( state=0|1 )

**설명:** 모형의 모든 효과에 대한 공분산 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of All Parameters( 1 );

```

#### Covariance of Covariance Parameters

**구문:** obj &lt;&lt; Covariance of Covariance Parameters( state=0|1 )

**설명:** 모형의 임의 효과에 대한 공분산 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Covariance Parameters( 1 );

```

#### Covariance of Fixed Effects

**구문:** obj &lt;&lt; Covariance of Fixed Effects( state=0|1 )

**설명:** 모형의 고정 효과에 대한 공분산 행렬을 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Fixed Effects( 1 );

```

#### Dispose Reports

**구문:** obj = Fit Model(...Dispose Reports( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 개별 모형 보고서가 표시되지 않고 적합 후 메모리에서 제거되도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축되고 메모리가 절약됩니다. 적합 모형의 결과를 수집하려면 이 옵션을 "결과를 데이터 테이블에 저장" 옵션과 함께 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Empirical Standard Errors

**구문:** obj &lt;&lt; Empirical Standard Errors( state=0|1 )

**설명:** 보고서 전체에서 표준 오차를 샌드위치 추정값으로 바꿉니다. 다중 비교 보고서에서 샌드위치 추정값을 사용하려면 다중 비교 보고서를 추가하기 전에 이 옵션을 선택해야 합니다.

**JMP추가된 버전:** 19

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Empirical Standard Errors( 1 );

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run( Empirical Standard Errors( 1 ) )
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :species ),
	Comparisons with Control( 1, Control Level( "species:COYOTE" ) )
);

```

#### Fit Statistics

**구문:** obj &lt;&lt; Fit Statistics( state=0|1 )

**설명:** 모형 적합 통계량 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fit Statistics( 0 ) )
);
Wait( 1 );
obj << Fit Statistics( 1 );

```

#### Fixed Effects Parameter Estimates

**구문:** obj &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 )

**설명:** 고정 효과 모수 추정값 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Parameter Estimates( 1 );

```

#### Fixed Effects Tests

**구문:** obj &lt;&lt; Fixed Effects Tests( state=0|1 )

**설명:** 고정 효과 검정을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Tests( 1 );

```

#### Homogeneity of Variance Test

**구문:** obj &lt;&lt; Homogeneity of Variance Test( state=0|1 )

**설명:** 지정된 그룹화 변수에 대해 등분산성 검정을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Repeated Effects( :Tenderizer ),
	Repeated Structure( "Unequal Variances" ),
	Run
);
Wait( 1 );
obj << Homogeneity of Variance Test( 1 );

```

#### Indiv Confidence Interval

**구문:** obj &lt;&lt; Indiv Confidence Interval

**설명:** 두 개의 새 열을 데이터 테이블에 저장합니다. 새 열에는 개별 반응 값에 대한 신뢰 한계가 포함됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Inverse Prediction

**구문:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**설명:** Y 값 및 다른 모든 요인의 값이 주어졌을 때 예측 X 값과 신뢰 구간을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 75 ), Term Value( Moisture( . ), Variety( All ) ) );

```

#### Linear Combination of Variance Components

**구문:** obj &lt;&lt; Linear Combination of Variance Components( [l1, l2, l3, ... ], &lt;Label( text )&gt; )

**설명:** 분산 성분의 선형 결합에 대한 신뢰 구간을 계산할 수 있는 보고서를 표시합니다. 이 옵션은 G측 효과가 있는 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects,
	Random Effects( :Operator, :Instrument[:Operator], :Part[:Operator, :Instrument] ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run(
		Repeated Effects Covariance Parameter Estimates( 0 ),
		Linear Combination of Variance Components( [1 1 0 1], Label( " " ) )
	)
);

```

#### Mean Confidence Interval

**구문:** obj &lt;&lt; Mean Confidence Interval

**설명:** 두 개의 새 열을 데이터 테이블에 저장합니다. 새 열에는 평균 반응에 대한 신뢰 하한과 신뢰 상한이 포함됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Mixture Profiler

**구문:** obj &lt;&lt; Mixture Profiler( state=0|1 )

**설명:** 삼원 그림에 주변 반응 등고선을 보여 주는 혼합물 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에서 3개 이상의 요인에 혼합 효과 속성이 적용되거나 3개 이상의 요인 열에 혼합물 특성이 적용된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**구문:** obj &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; )

**설명:** 최소 제곱 평균 추정값 또는 사용자 정의 추정값을 생성합니다. 이러한 추정값을 사용하여 전체 평균과 비교, 대조군과 비교 또는 쌍별 비교를 수행할 수 있습니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n, :Month * :"AM/PM"n,
		:Treatment * :Month * :"AM/PM"n
	),
	Random Effects( :Patient[:Treatment] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Treatment ),
	Comparisons with Control( 1, Control Level( "Treatment:Control" ) )
);

```

#### Prediction Formula

**구문:** obj &lt;&lt; Prediction Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 주변 평균에 대한 예측 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**구문:** obj &lt;&lt; Prediction and Interval Formulas

**설명:** 데이터 테이블에 새 열을 저장합니다. 이 열에는 예측 및 신뢰 한계에 대한 계산식이 포함됩니다. 이 옵션으로 생성된 한계 열에는 예측 프로파일러에 사용되는 특성이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction and Interval Formulas;
Wait( 1 );
Profiler( Y( :Pred Formula Yield 2 ) );

```

#### Predictions

**구문:** obj &lt;&lt; Predictions

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 주변 평균에 대한 예측값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Predictions;

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 주변 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Random Coefficients

**구문:** obj &lt;&lt; Random Coefficients( state=0|1 )

**설명:** 랜덤 계수에 대한 추정값 보고서를 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Coefficients( 0 ) )
);
Wait( 1 );
obj << Random Coefficients( 1 );

```

#### Random Effects Covariance Parameter Estimates

**구문:** obj &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 )

**설명:** 임의 효과 공분산 모수 추정값 테이블을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Random Effects Covariance Parameter Estimates( 1 );

```

#### Random Effects Predictions

**구문:** obj &lt;&lt; Random Effects Predictions( state=0|1 )

**설명:** 임의 효과 예측 테이블을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Random Effects Predictions( 1 );

```

#### Repeated Effects Covariance Parameter Estimates

**구문:** obj &lt;&lt; Repeated Effects Covariance Parameter Estimates( state=0|1 )

**설명:** 반복 효과 공분산 모수 추정값 테이블을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 반복 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n, :Month * :"AM/PM"n,
		:Treatment * :Month * :"AM/PM"n
	),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Repeated Effects Covariance Parameter Estimates( 1 );

```

#### Repeated Measures Covariance Diagnostics

**구문:** obj &lt;&lt; Repeated Measures Covariance Diagnostics( state=0|1 )

**설명:** 반복 측정 분석의 후보 공분산 구조를 결정하는 데 도움이 되는 진단 도구가 포함된 보고서를 표시하거나 숨깁니다. 이 옵션은 비정형 반복 공분산 구조를 지정하는 모형에만 사용할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << Repeated Measures Covariance Diagnostics( 1 );

```

#### Residual Plots

**구문:** obj &lt;&lt; Residual Plots( state=0|1 )

**설명:** 임의 효과를 고려하지 않고 모형 적합을 평가하는 잔차 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Residual Plots( 1 );

```

#### Residuals

**구문:** obj &lt;&lt; Residuals

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 반응 관측값에서 주변 평균 예측값을 뺀 잔차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Residuals;

```

#### Results in Data Tables

**구문:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 여러 반응에 대한 개별 모형 결과를 데이터 테이블에 저장합니다. 출력 데이터 테이블의 내용과 개수는 적합되는 모형에 따라 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Simulation Formula

**구문:** obj &lt;&lt; Save Simulation Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열을 사용하여 적합 모형에서 확률 반응 값을 생성할 수 있습니다. 계산식 열은 JMP Pro의 시뮬레이션 기능에서 사용할 수 있습니다. 기준 변수가 사용되면 이 옵션을 사용할 수 없습니다. 기준 그룹 시뮬레이션 계산식이 필요한 경우 데이터 테이블 부분집합을 사용하십시오.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Save Simulation Formula;

```

#### Sequential Tests

**구문:** obj &lt;&lt; Sequential Tests( state=0|1 )

**설명:** 모형에 효과가 순차적으로 추가될 때 제곱합이 포함된 순차(유형 1) 검정 보고서를 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show Sqrt Variance Component

**구문:** obj &lt;&lt; Show Sqrt Variance Component( state=0|1 )

**설명:** REML 분산 성분 추정값 보고서에 분산 성분 제곱근(표준편차) 열을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**구문:** obj &lt;&lt; Show VIF( state=0|1 )

**설명:** 고정 효과 모수 추정값 보고서의 효과 코딩 탭에서 VIF(분산 팽창 계수) 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Stability Analysis

**구문:** obj &lt;&lt; Stability Analysis

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Fit Model(
	Y( :"Concentration (mg/Kg)"n ),
	Effects( :Time ),
	Random Effects( :Batch Number, :Batch Number * :Time ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
obj << Stability Analysis( Quantile( 0.1 ), Lower Spec Limit( 99 ) );

```

#### Standard Error of Conditional Predicted

**구문:** obj &lt;&lt; Standard Error of Conditional Predicted

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 평균 예측의 표준 오차가 포함됩니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Conditional Predicted;

```

#### Standard Error of Predicted

**구문:** obj &lt;&lt; Standard Error of Predicted

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 주변 평균 예측의 표준 오차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ), :Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Predicted;

```

#### Suppress Reports

**구문:** obj = Fit Model(...Suppress Reports( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 개별 모형 보고서를 숨기도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축됩니다. 적합 개체 및 일부 메뉴 항목은 계속 사용할 수 있습니다. 모형 보고서의 결과를 수집하려면 "결과를 데이터 테이블에 저장" 옵션을 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Surface Profiler

**구문:** obj &lt;&lt; Surface Profiler( state=0|1 )

**설명:** 주변 반응의 3차원 표면 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

#### Variogram

**구문:** obj &lt;&lt; Variogram( &lt;X( columns )&gt;, &lt;Model 1, Model 2, ...&gt; )

**설명:** 관측값 간의 거리가 증가할 때 공분산의 변화를 보여 주는 변동도 그림을 표시하거나 숨깁니다. 잔차 구조를 선택하면 시간 또는 공간 좌표로 사용할 열을 선택할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
obj = dt << Fit Model(
	Y( :Ozone Concentration ),
	Effects,
	Center Polynomials( 0 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Variogram( X( :month ), Exponential, Exponential with Nugget );

```

## Fit Nominal Logistic

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Nominal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Nominal Logistic

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Nominal Logistic" ) )

**설명:** 연속형 예측 변수와 범주형 예측 변수 모두의 명목형 반응 범주에 대한 로지스틱 회귀 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);

```

### 항목 메시지

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**설명:** 모형 모수에 대한 프로파일 - 가능도(1 - fraction)% 신뢰 구간을 표시하거나 숨깁니다. fraction 인수는 플랫폼 시작 창에 설정된 유의 수준을 재정의합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**구문:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**설명:** 실제 및 예측 반응에 대한 교차표 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 모형에 두 개 이상의 연속형 요인이 포함된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Species ),
	Effects(
		:Sepal length, :Sepal width, :Petal length, :Petal width, :Sepal length * :Petal width,
		:Petal width * :Petal width
	),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Decision Threshold

**구문:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number=0.5 ) )

**설명:** 각 모형에 대한 적합 확률 분포와 실제값 대 예측값 테이블을 표시하거나 숨깁니다. 확률 임계를 변경하여 임계값에 따라 분류 결과에 어떤 영향이 있는지 탐색할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Decision Threshold( 1, Set Probability Threshold( 0.33 ) );

```

#### Dispose Reports

**구문:** obj = Fit Model(...Dispose Reports( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 개별 모형 보고서가 표시되지 않고 적합 후 메모리에서 제거되도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축되고 메모리가 절약됩니다. 적합 모형의 결과를 수집하려면 이 옵션을 "결과를 데이터 테이블에 저장" 옵션과 함께 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam, :solvent type,
		:type on cylinder, :press type, :unit number, :cylinder size, :paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**구문:** obj &lt;&lt; Effect Summary( state=0|1 )

**설명:** 모형의 효과를 대화식으로 업데이트할 수 있는 효과 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**구문:** obj &lt;&lt; FDR( state=0|1 )

**설명:** 효과 요약 테이블의 LogWorth 값과 해당 p 값을 FDR(False Discovery Rate)을 사용하여 수정할지 여부를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**구문:** obj &lt;&lt; Get Confusion Matrix Test

**설명:** 테스트 데이터 집합에 대한 혼동 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**구문:** obj &lt;&lt; Get Confusion Matrix Training

**설명:** 훈련 데이터 집합에 대한 혼동 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**구문:** obj &lt;&lt; Get Confusion Matrix Validation

**설명:** 검증 데이터 집합에 대한 혼동 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**구문:** obj &lt;&lt; Get Confusion Rates Test

**설명:** 테스트 데이터 집합에 대한 혼동 비율을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects( :LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO, :DEBTINC ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**구문:** obj &lt;&lt; Get Confusion Rates Training

**설명:** 훈련 데이터 집합에 대한 혼동 비율을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**구문:** obj &lt;&lt; Get Confusion Rates Validation

**설명:** 검증 데이터 집합에 대한 혼동 비율을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**구문:** obj &lt;&lt; Get MM SAS DATA Step

**설명:** SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**구문:** obj &lt;&lt; Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**구문:** obj &lt;&lt; Get Probability Formulas

**설명:** 확률 계산식을 생성하기 위한 스크립트를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**구문:** obj &lt;&lt; Get SAS DATA Step

**설명:** 새 데이터 집합을 스코어링하는 데 사용할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Indicator Parameterization Estimates

**구문:** obj &lt;&lt; Indicator Parameterization Estimates( state=0|1 )

**설명:** 표시 함수 파라미터화 보고서를 표시하거나 숨깁니다. 이 보고서에는 명목형 열이 표시자(SAS GLM) 파라미터화를 사용하여 코드화되고 연속형으로 처리되는 모형에 대한 모수 추정값이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Detergent.jmp" );
obj = dt << Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects( :softness, :previous use, :temperature ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Inverse Prediction

**구문:** obj &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**설명:** Y 값 및 다른 모든 요인의 값이 주어졌을 때 예측 X 값과 신뢰 구간을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Inverse Prediction( Response( 0.5, 0.75, 0.9 ) );

```

#### Lift Curve

**구문:** obj &lt;&lt; Lift Curve( state=0|1 )

**설명:** 향상도 곡선 그림을 표시하거나 숨깁니다. 향상도 곡선은 향상도 대 관측값 비율을 표시하고 모형의 예측 능력에 대한 또 다른 보기를 제공합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**구문:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**설명:** 각 효과에 대한 가능도비 검정을 표시하거나 숨깁니다. 각 검정은 적합 모형의 로그 가능도와 효과를 제거한 모형의 로그 가능도를 비교합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Likelihood Ratio Test( 1 );

```

#### Line Color

**구문:** obj &lt;&lt; Line Color( color )

**설명:** 그림 곡선의 색상을 선택할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**구문:** obj &lt;&lt; Logistic Plot( state=0|1 )

**설명:** 로지스틱 그림 보고서를 표시하거나 숨깁니다. 모형이 단일 연속형 효과로 구성된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**구문:** obj &lt;&lt; Odds Ratios( state=0|1 )

**설명:** 단위 승산비와 범위 승산비가 포함된 승산비 보고서를 표시하거나 숨깁니다. 수준이 세 개 이상인 명목형 반응에는 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Positive Level

**구문:** obj &lt;&lt; Positive Level

**설명:** ROC 곡선에 사용할 positive 클래스로 식별될 수준을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
obj << ROC Curve( 1 );

```

#### Precision Recall Curve

**구문:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 곡선을 포함하는 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << Precision Recall Curve( 1 );

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 모형의 요인 값이 변경될 때 지정된 반응 확률에 대한 적합된 값을 보여 주는 예측 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**구문:** obj &lt;&lt; Publish Probability Formulas

**설명:** 확률 계산식을 생성하고 이를 계산식 저장소에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**구문:** obj &lt;&lt; ROC Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**구문:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 여러 반응에 대한 개별 모형 결과를 데이터 테이블에 저장합니다. 출력 데이터 테이블의 내용과 개수는 적합되는 모형에 따라 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam, :solvent type,
		:type on cylinder, :press type, :unit number, :cylinder size, :paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Probability Formula

**구문:** obj &lt;&lt; Save Probability Formula

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 반응 수준의 선형 결합 계산식, 각 반응 수준에 대한 예측 계산식, 최대 확률 분류 반응을 제공하는 예측 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 로지스틱 그림에 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**구문:** obj &lt;&lt; Show Rate Curve( state=0|1 )

**설명:** 로지스틱 그림에 비율 곡선을 표시하거나 숨깁니다. 비율 곡선은 X 변수의 각 값에 대해 여러 개의 점이 있는 경우에만 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Specify Profit Matrix

**구문:** obj &lt;&lt; Specify Profit Matrix( matrix, level1, level2, ... )

**설명:** 올바르거나 올바르지 않은 분류 결정과 관련된 수익 또는 비용을 지정할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Binary ),
	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Specify Profit Matrix( [0 -1, -1 0, . .], "High", "Low", "Undecided" );

```

#### Suppress Reports

**구문:** obj = Fit Model(...Suppress Reports( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 개별 모형 보고서를 숨기도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축됩니다. 적합 개체 및 일부 메뉴 항목은 계속 사용할 수 있습니다. 모형 보고서의 결과를 수집하려면 "결과를 데이터 테이블에 저장" 옵션을 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam, :solvent type,
		:type on cylinder, :press type, :unit number, :cylinder size, :paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**구문:** obj &lt;&lt; Wald Tests( state=0|1 )

**설명:** 각 모수가 0인지 여부에 대한 Wald 검정의 카이제곱 검정 통계량 및 p 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

## Fit Ordinal Logistic

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Ordinal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Ordinal Logistic

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Ordinal Logistic" ) )

**설명:** 연속형 예측 변수와 범주형 예측 변수 모두의 순서형 반응 범주에 대한 로지스틱 회귀 모형을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);

```

### 항목 메시지

#### Confidence Intervals

**구문:** obj &lt;&lt; Confidence Intervals( &lt;state=0|1&gt; | &lt;fraction&gt; )

**설명:** 모형 모수에 대한 프로파일 - 가능도(1 - fraction)% 신뢰 구간을 표시하거나 숨깁니다. fraction 인수는 플랫폼 시작 창에 설정된 유의 수준을 재정의합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**구문:** obj &lt;&lt; Confusion Matrix( state=0|1 )

**설명:** 실제 및 예측 반응에 대한 교차표 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**구문:** obj &lt;&lt; Contour Profiler( state=0|1 )

**설명:** 한 번에 두 개의 요인에 대한 반응 등고선을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 모형에 두 개 이상의 연속형 요인이 포함된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Job Satisfaction ),
	Effects(
		:Years at Current Employer, :Salary, :Single Status, :Age in Years,
		:Age in Years * :Years at Current Employer
	),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Dispose Reports

**구문:** obj = Fit Model(...Dispose Reports( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 개별 모형 보고서가 표시되지 않고 적합 후 메모리에서 제거되도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축되고 메모리가 절약됩니다. 적합 모형의 결과를 수집하려면 이 옵션을 "결과를 데이터 테이블에 저장" 옵션과 함께 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**구문:** obj &lt;&lt; Effect Summary( state=0|1 )

**설명:** 모형의 효과를 대화식으로 업데이트할 수 있는 효과 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**구문:** obj &lt;&lt; FDR( state=0|1 )

**설명:** 효과 요약 테이블의 LogWorth 값과 해당 p 값을 FDR(False Discovery Rate)을 사용하여 수정할지 여부를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**구문:** obj &lt;&lt; Get Confusion Matrix Test

**설명:** 테스트 데이터 집합에 대한 혼동 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**구문:** obj &lt;&lt; Get Confusion Matrix Training

**설명:** 훈련 데이터 집합에 대한 혼동 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**구문:** obj &lt;&lt; Get Confusion Matrix Validation

**설명:** 검증 데이터 집합에 대한 혼동 행렬을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**구문:** obj &lt;&lt; Get Confusion Rates Test

**설명:** 테스트 데이터 집합에 대한 혼동 비율을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**구문:** obj &lt;&lt; Get Confusion Rates Training

**설명:** 훈련 데이터 집합에 대한 혼동 비율을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**구문:** obj &lt;&lt; Get Confusion Rates Validation

**설명:** 검증 데이터 집합에 대한 혼동 비율을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**구문:** obj &lt;&lt; Get MM SAS DATA Step

**설명:** SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**구문:** obj &lt;&lt; Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**구문:** obj &lt;&lt; Get Probability Formulas

**설명:** 확률 계산식을 생성하기 위한 스크립트를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**구문:** obj &lt;&lt; Get SAS DATA Step

**설명:** 새 데이터 집합을 스코어링하는 데 사용할 수 있는 SAS 코드를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Lift Curve

**구문:** obj &lt;&lt; Lift Curve( state=0|1 )

**설명:** 향상도 곡선 그림을 표시하거나 숨깁니다. 향상도 곡선은 향상도 대 관측값 비율을 표시하고 모형의 예측 능력에 대한 또 다른 보기를 제공합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**구문:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**설명:** 각 효과에 대한 가능도비 검정을 표시하거나 숨깁니다. 각 검정은 적합 모형의 로그 가능도와 효과를 제거한 모형의 로그 가능도를 비교합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Likelihood Ratio Tests( 1 );

```

#### Logistic Plot

**구문:** obj &lt;&lt; Logistic Plot( state=0|1 )

**설명:** 로지스틱 그림 보고서를 표시하거나 숨깁니다. 모형이 단일 연속형 효과로 구성된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**구문:** obj &lt;&lt; Odds Ratios( state=0|1 )

**설명:** 단위 승산비와 범위 승산비가 포함된 승산비 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**구문:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 곡선을 포함하는 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Precision Recall Curve( 1 );

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 모형의 요인 값이 변경될 때 지정된 반응 확률에 대한 적합된 값을 보여 주는 예측 프로파일러를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**구문:** obj &lt;&lt; Publish Probability Formulas

**설명:** 확률 계산식을 생성하고 이를 계산식 저장소에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**구문:** obj &lt;&lt; ROC Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**구문:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 여러 반응에 대한 개별 모형 결과를 데이터 테이블에 저장합니다. 출력 데이터 테이블의 내용과 개수는 적합되는 모형에 따라 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Expected Value

**구문:** obj &lt;&lt; Save Expected Value

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 각 행에 대한 적합 반응 확률과 반응 값의 선형 결합이 포함되며 기대값이 제공됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Expected Value;

```

#### Save Probability Formula

**구문:** obj &lt;&lt; Save Probability Formula

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 반응 수준의 선형 결합 계산식, 각 반응 수준에 대한 예측 계산식, 최대 확률 분류 반응을 제공하는 예측 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Save Quantiles

**구문:** obj &lt;&lt; Save Quantiles

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열의 이름은 OrdQ.05, OrdQ.50, OrdQ.95이며, 해당 확률의 분위수를 적합시키는 값을 포함합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Quantiles;

```

#### Suppress Reports

**구문:** obj = Fit Model(...Suppress Reports( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 개별 모형 보고서를 숨기도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축됩니다. 적합 개체 및 일부 메뉴 항목은 계속 사용할 수 있습니다. 모형 보고서의 결과를 수집하려면 "결과를 데이터 테이블에 저장" 옵션을 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**구문:** obj &lt;&lt; Wald Tests( state=0|1 )

**설명:** 각 모수가 0인지 여부에 대한 Wald 검정의 카이제곱 검정 통계량 및 p 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

## Fit Parametric Survival

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Parametric Survival(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Parametric Survival

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**설명:** 생존 시간에 일반 선형 회귀 모형을 적합시킵니다. 하나 이상의 설명 변수에 대한 함수로 표현될 수 있는 생존 시간에 이 모형을 사용할 수 있습니다. 다양한 생존 분포 및 중도절단을 고려합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### 항목 메시지

#### Correlation of Estimates

**구문:** obj &lt;&lt; Correlation of Estimates( state=0|1 )

**설명:** 지정된 적합을 통한 모수 추정값 간의 상관 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**구문:** obj &lt;&lt; Covariance of Estimates( state=0|1 )

**설명:** 지정된 적합에 대한 모수 추정값 간의 공분산 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Covariance of Estimates( 1 );

```

#### Distribution

**구문:** obj = Fit Model(...Distribution("Weibull"|"Lognormal"|"Exponential"|"Frechet"|"Loglogistic"|"All Distributions"|"SEV"|"Normal"|"LEV"|"Logistic"...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 사건 발생 시간 반응을 모델링하는 데 사용할 분포를 지정합니다. "모든 분포" 옵션은 사용 가능한 모든 분포를 적합시킵니다.

**단일 분포**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Censor( :censor ),
	Run Model
);

```

**모든 분포**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "All Distributions" ),
	Censor( :censor ),
	Run Model
);

```

#### Distribution Plot by Level Combinations

**구문:** obj &lt;&lt; Distribution Plot by Level Combinations( state=0|1 )

**설명:** X 변수 수준에 기반한 세 개의 내포 모형을 비교하는 보고서를 표시하거나 숨깁니다. 이 보고서에는 모형 적합을 평가하기 위한 세 가지 확률도가 포함되어 있습니다. 각 X 수준 조합에 대해 서로 다른 선이 그림에 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/reliability/Devalt.jmp" );
dt << Fit Model(
	Censor( :Censor ),
	Censor Code( "1" ),
	Freq( :Weight ),
	Y( :Hours ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Run( Likelihood Ratio Tests( 1 ), Distribution Plot by Level Combinations( 1 ), )
);

```

#### Distribution Profiler

**구문:** obj &lt;&lt; Distribution Profiler( state=0|1 )

**설명:** 예측 변수 및 반응의 누적 분포 함수 프로파일러를 표시하거나 숨깁니다. 반응은 맨 오른쪽 셀에 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Distribution Profiler( 1 );

```

#### Effect Summary

**구문:** obj &lt;&lt; Effect Summary( state=0|1 )

**설명:** 모형의 효과를 대화식으로 업데이트할 수 있는 효과 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Estimate Quantile

**구문:** obj &lt;&lt; Estimate Quantile( x1 = [number, ...], x2 = [number, ...], [p1, p2, ...], Alpha( fraction ) )

**설명:** 지정된 효과 값과 확률에 대한 분위수를 추정합니다. 효과 값 또는 확률 값을 두 개 이상 지정하려면 벡터를 사용합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Quantile( :Age = [55, 60], :Diag Time = [8.77], [0.5, 0.10, 0.05], Alpha( 0.05 ) );

```

#### Estimate Survival Probability

**구문:** obj &lt;&lt; Estimate Survival Probability( x1 = [number, ...], x2 = [number, ...], [time1, time2, ...], Alpha( fraction ) )

**설명:** 지정된 효과 값과 시간 값에 대한 고장 및 생존 확률을 추정합니다. 효과 값 또는 시간 값을 두 개 이상 지정하려면 벡터를 사용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Survival Probability( :Age = [55, 60], :Diag Time = [8.77], [50, 100, 150], Alpha( 0.05 ) );

```

#### FDR

**구문:** obj &lt;&lt; FDR( state=0|1 )

**설명:** 효과 요약 테이블의 LogWorth 값과 해당 p 값을 FDR(False Discovery Rate)을 사용하여 수정할지 여부를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Effect Names

**구문:** obj &lt;&lt; Get Effect Names

**설명:** 모형에 사용된 효과 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Effect Names;
Show( n );

```

#### Get Effect PValues

**구문:** obj &lt;&lt; Get Effect PValues

**설명:** 모형의 각 효과에 대한 p 값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
p = obj << Get Effect PValues;
Show( p );

```

#### Get Estimates

**구문:** obj &lt;&lt; Get Estimates

**설명:** 모형의 모수 추정값을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
e = obj << Get Estimates;
Show( e );

```

#### Get Parameter Names

**구문:** obj &lt;&lt; Get Parameter Names

**설명:** 모형에 사용된 모수 이름을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Parameter Names;
Show( n );

```

#### Get Std Errors

**구문:** obj &lt;&lt; Get Std Errors

**설명:** 모형의 모수 추정값에 대한 표준 오차를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
std = obj << Get Std Errors;
Show( std );

```

#### Hazard Profiler

**구문:** obj &lt;&lt; Hazard Profiler( state=0|1 )

**설명:** 위험률을 예측 변수 및 반응의 함수로 보여 주는 프로파일러를 표시하거나 숨깁니다. 반응은 맨 오른쪽 셀에 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Hazard Profiler( 1 );

```

#### Likelihood Confidence Intervals

**구문:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**설명:** 모수 추정값 테이블에 표시되는 신뢰 구간 유형을 지정합니다. 이 옵션을 선택하면 프로파일 가능도 신뢰 구간이 나타나고 그렇지 않으면 Wald 구간이 나타납니다. 이 옵션은 프로파일 가능도 신뢰 구간의 계산 시간이 길지 않을 때 기본적으로 설정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**구문:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**설명:** 각 효과에 대한 가능도비 검정을 표시하거나 숨깁니다. 각 검정은 적합 모형의 로그 가능도와 효과를 제거한 모형의 로그 가능도를 비교합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Model Dialog;

```

#### Publish Probability Formula

**구문:** obj &lt;&lt; Publish Probability Formula

**설명:** 확률 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Probability Formula;

```

#### Publish Quantile Formula

**구문:** obj &lt;&lt; Publish Quantile Formula( probability )

**설명:** 분위수 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Quantile Formula( 0.1 );

```

#### Quantile Profiler

**구문:** obj &lt;&lt; Quantile Profiler( state=0|1 )

**설명:** 예측 반응을 예측 변수의 함수 및 누적 분포 함수의 분위수로 보여 주는 프로파일러를 표시하거나 숨깁니다. 이 분위수를 고장 확률이라고 하며 맨 오른쪽 셀에 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Quantile Profiler( 1 );

```

#### Residual Probability Plot

**구문:** obj &lt;&lt; Residual Probability Plot( state=0|1 )

**설명:** 신뢰 구간과 함께 표준화 잔차의 확률도를 표시하거나 숨깁니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Residual Probability Plot( 1 );

```

#### Response versus Fitted Median

**구문:** obj &lt;&lt; Response versus Fitted Median( state=0|1 )

**설명:** 세로 축에 반응이 있고 가로 축에 적합 중앙값이 있는 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Response versus Fitted Median( 1 );

```

#### Save Probability Formula

**구문:** obj &lt;&lt; Save Probability Formula

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 추정된 고장 확률의 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Probability Formula;

```

#### Save Quantile Formula

**구문:** obj &lt;&lt; Save Quantile Formula( probability )

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 지정된 확률 값에 대한 추정 분위수 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Quantile Formula( 0.8 );

```

#### Save Residuals

**구문:** obj &lt;&lt; Save Residuals

**설명:** 하나 또는 두 개의 새 열을 데이터 테이블에 저장합니다. 잔차 열의 수는 모형의 사건 발생 시간 열 수와 일치합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Residuals;

```

#### Standardized Residuals versus Fitted Median

**구문:** obj &lt;&lt; Standardized Residuals versus Fitted Median( state=0|1 )

**설명:** 세로 축에 표준화 잔차가 있고 가로 축에 적합 중앙값이 있는 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Standardized Residuals versus Fitted Median( 1 );

```

#### Survival Profiler

**구문:** obj &lt;&lt; Survival Profiler( state=0|1 )

**설명:** 예측 변수 및 반응의 생존 함수 프로파일러를 표시하거나 숨깁니다. 반응은 맨 오른쪽 셀에 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Survival Profiler( 1 );

```

#### Wald Tests

**구문:** obj &lt;&lt; Wald Tests( state=0|1 )

**설명:** 각 모수가 0인지 여부에 대한 Wald 검정의 카이제곱 검정 통계량 및 p 값을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

## Fit Proportional Hazards

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Proportional Hazards(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Proportional Hazards

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**설명:** 중도절단을 고려하여 설명 변수가 생존 시간에 미치는 영향을 평가하기 위해 준모수 회귀 모형(Cox 비례 위험 모형)을 적합시킵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);

```

### 항목 메시지

#### Effect Summary

**구문:** obj &lt;&lt; Effect Summary( state=0|1 )

**설명:** 모형의 효과를 대화식으로 업데이트할 수 있는 효과 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**구문:** obj &lt;&lt; FDR( state=0|1 )

**설명:** 효과 요약 테이블의 LogWorth 값과 해당 p 값을 FDR(False Discovery Rate)을 사용하여 수정할지 여부를 지정합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Hazard Ratios

**구문:** obj &lt;&lt; Hazard Ratios( state=0|1 )

**설명:** 효과의 위험 비율을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Hazard Ratios( 1 );

```

#### Likelihood Confidence Intervals

**구문:** obj &lt;&lt; Likelihood Confidence Intervals( state=0|1 )

**설명:** 모수 추정값 테이블에 표시되는 신뢰 구간 유형을 지정합니다. 이 옵션을 선택하면 프로파일 가능도 신뢰 구간이 나타나고 그렇지 않으면 Wald 구간이 나타납니다. 이 옵션은 프로파일 가능도 신뢰 구간의 계산 시간이 길지 않을 때 기본적으로 설정됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**구문:** obj &lt;&lt; Likelihood Ratio Tests( state=0|1 )

**설명:** 각 효과에 대한 가능도비 검정을 표시하거나 숨깁니다. 각 검정은 적합 모형의 로그 가능도와 효과를 제거한 모형의 로그 가능도를 비교합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Model Dialog;

```

#### Wald Tests

**구문:** obj &lt;&lt; Wald Tests( state=0|1 )

**설명:** 각 모수가 0인지 여부에 대한 Wald 검정의 카이제곱 검정 통계량 및 p 값을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

## Fit Response Screening

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

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
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
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
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Response Screening

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ) )

**설명:** 여러 반응에 대해 선형 모형 효과의 검정 수행 과정을 자동화합니다. 검정 결과와 요약 통계량은 데이터 테이블과 그림에 제공됩니다. FDR(False Discovery Rate)은 유의성이 잘못 선언되지 않도록 보호합니다. 로버스트 추정 방법은 이상치에 대한 검정 민감도를 줄입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);

```

### 항목 메시지

#### Effect Plots

**구문:** obj &lt;&lt; Effect Plots( state=0|1 )

**설명:** 효과에 대한 FDR p 값 그림과 FDR LogWorth 대 효과 크기 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Plots( 0 ) )
);
Wait( 1 );
obj << Effect Plots( 1 );

```

#### Effect Tests

**구문:** obj &lt;&lt; Effect Tests( state=0|1 )

**설명:** 효과 검정 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Force G Side

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force G Side ) )

**설명:** 임의 효과 행렬에 행보다 열이 더 많은 경우에도 G측에서 임의 효과를 추정하도록 강제합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ),
	Run( Force G Side )
);

```

#### Force R Side

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force R Side ) )

**설명:** 임의 효과 행렬에 열보다 행이 더 많은 경우에도 R측에서 임의 효과를 추정하도록 강제합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Force R Side )
);

```

#### Least Squares Means

**구문:** obj &lt;&lt; Least Squares Means( state=0|1 )

**설명:** 모든 최소 제곱(주변) 평균을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Least Squares Means( 1 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Model Dialog;

```

#### Overall Plots

**구문:** obj &lt;&lt; Overall Plots( state=0|1 )

**설명:** 전체 FDR p 값 그림과 FDR LogWorth 대 R² 그림을 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Overall Plots( 1 );

```

#### Overall Report

**구문:** obj &lt;&lt; Overall Report( state=0|1 )

**설명:** 전체 적합 테이블을 표시하거나 숨깁니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Overall Report( 1 );

```

#### Save BLUPs

**구문:** obj &lt;&lt; Save BLUPs

**설명:** 모형의 임의 효과에 대한 BLUP(최량 선형 비편향 예측 변수)를 포함하는 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save BLUPs;

```

#### Save Conditional Predicted Values

**구문:** obj &lt;&lt; Save Conditional Predicted Values

**설명:** 각 반응에 대한 새 열을 데이터 테이블에 저장합니다. 이 열에는 임의 효과의 BLUP(최량 선형 비편향 예측 변수) 계수를 사용하여 계산된 조건부 예측값이 포함됩니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Predicted Values;

```

#### Save Conditional Prediction Formula

**구문:** obj &lt;&lt; Save Conditional Prediction Formula

**설명:** 각 반응에 대한 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 임의 효과가 있는 모형의 임의 효과 추정값을 사용하는 계산식이 포함됩니다. REML 분석 방법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Prediction Formula;

```

#### Save Effect Tests

**구문:** obj &lt;&lt; Save Effect Tests

**설명:** 각 효과 검정에 대한 행이 포함된 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Effect Tests;

```

#### Save Estimates

**구문:** obj &lt;&lt; Save Estimates

**설명:** 각 반응 변수에 대한 행과 각 모형 항에 대한 열이 포함된 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Estimates;

```

#### Save LSMeans Differences

**구문:** obj &lt;&lt; Save LSMeans Differences

**설명:** 모든 분할 최소 제곱 평균 차이가 포함된 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Effects( :age, :sex, :age * :sex ),
	Personality( "Response Screening" ),
	Y( :height, :weight ),
	Sliced LSMeans Differences( 1 ),
	Run
);
obj << Save LSMeans Differences;

```

#### Save Least Squares Means

**구문:** obj &lt;&lt; Save Least Squares Means

**설명:** 모든 최소 제곱 평균이 포함된 새 데이터 테이블을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height, :weight ),
	Effects( :age, :sex ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Least Squares Means;

```

#### Save Overall Fit

**구문:** obj &lt;&lt; Save Overall Fit

**설명:** 반응 변수당 하나의 행이 포함된 새 데이터 테이블을 생성합니다. 테이블의 열에는 각 Y에 대해 모형 적합에 대한 정보가 요약되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Overall Fit;

```

#### Save Predicted Values

**구문:** obj &lt;&lt; Save Predicted Values

**설명:** 각 반응에 대한 새 열을 데이터 테이블에 저장합니다. 각 열에는 해당 반응에 대한 예측값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Predicted Values )
);

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 각 반응에 대한 새 계산식 열을 데이터 테이블에 저장합니다. 각 열에는 해당 반응에 대한 예측 방정식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Prediction Formula )
);

```

#### Select Effects Where

**구문:** obj &lt;&lt; Select Effects Where( condition )

**설명:** 선택 조건 창을 엽니다. 그러면 선택 조건 창에 지정된 특정 조건에 해당하는 행을 효과 검정 테이블에서 선택할 수 있습니다.

**JMP추가된 버전:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Select Effects Where( FDR Logworth > 4 );

```

#### Select Responses for Selected Effects

**구문:** obj &lt;&lt; Select Responses for Selected Effects

**설명:** 원래 테이블에서 선택한 효과에 해당하는 반응 열을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run()
);
obj << Select Effects Where( FDR Logworth > 4 );
obj << Select Responses for Selected Effects;

```

#### Sliced LSMeans Differences

**구문:** obj &lt;&lt; Sliced LSMeans Differences( state=0|1 )

**설명:** 주효과와 분할된 2요인 교호작용 및 3요인 교호작용에 대한 모든 최소 제곱 평균을 비교하는 검정을 계산합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Sliced LSMeans Differences( 1 );

```

#### Unthreaded

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Unthreaded ) )

**설명:** 반응 및 전환 변수에 대해 멀티스레딩을 제한합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Unthreaded )
);

```

## Fit Stepwise

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Stepwise Personality(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Stepwise Personality

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Stepwise" ) )

**설명:** 단계별 회귀 모형을 적합시킵니다. 이 방법을 사용하면 표준 최소 제곱 및 순서형 로지스틱 모형과 이항 반응을 포함하는 명목형 로지스틱 모형의 변수 선택이 간편해집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;

```

### 항목 메시지

#### All Possible Models

**구문:** obj &lt;&lt; All Possible Models( max_terms, max_models, &lt;Heredity Restriction( state=0|1 )&gt; )

**설명:** 지정된 한계까지 가능한 모든 모형을 적합시키고 각 항 수에 대한 최적 모형을 표시합니다. 하나의 모형에 적합시킬 최대 항 수를 지정하고, 각 모형 항 수에 대해 표시할 최대 모형 결과 수를 지정합니다. 강한 효과 유전성을 충족하는 모형만 나타나도록 모형을 제한할 수 있습니다. &apos;모든 가능 모형&apos; 옵션은 연속형 반응에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << All Possible Models( 5, 10 );

```

#### Backward Step

**구문:** obj &lt;&lt; Backward Step

**설명:** p 값이 가장 큰 항을 제거합니다. p 값 임계 중지 규칙을 선택한 경우 해당 항은 &apos;제거 유의확률&apos; 옵션에 지정된 수준에서 유의하지 않아야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter All;
Wait( 1 );
obj << Backward Step;

```

#### Clear History

**구문:** obj &lt;&lt; Clear History

**설명:** 단계 기록을 지우고 재설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Clear History;

```

#### Direction

**구문:** obj &lt;&lt; Direction( "전진 선택"|"후진 제거"|"혼합" )

**설명:** 항 선택 프로세스를 단계별로 진행하는 데 사용되는 방향을 지정합니다. 방향은 전진 선택, 후진 제거 또는 이 둘을 혼합하여 사용할 수 있습니다. 혼합 방향을 사용하려면 p 값 임계 중지 규칙을 선택해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Enter

**구문:** obj &lt;&lt; Enter( term )

**설명:** 모형에 항을 입력합니다. 이 옵션은 잠긴 항에 영향을 주지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );

```

#### Enter All

**구문:** obj &lt;&lt; Enter All

**설명:** 가능한 경우 모형에 모든 항을 입력합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Direction( "Backward" ) )
);
obj << Enter All;

```

#### Export Model With Validation

**구문:** obj &lt;&lt; Export Model With Validation( state=0|1 )

**설명:** &apos;모형 생성&apos; 옵션을 선택하면 &apos;모형 규격&apos; 창에 검증 열을 추가합니다. 또한 &apos;모형 실행&apos; 옵션을 선택하면 검증 열을 사용하여 모형을 실행합니다. 이 옵션은 검증 열을 지정한 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Validation( :Validation ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;
Wait( 1 );
obj << Export Model With Validation( 0 );
obj << Make Model;

```

#### Finish

**구문:** obj &lt;&lt; Finish

**설명:** 항 선택 프로세스를 즉시 완료합니다. 스크립트에서 &apos;시작&apos; 옵션 대신 &apos;완료&apos; 옵션을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

#### Forward Step

**구문:** obj &lt;&lt; Forward Step

**설명:** p 값이 가장 작은 항을 입력합니다. p 값 임계 중지 규칙을 선택한 경우 해당 항은 &apos;선택 유의확률&apos; 옵션에 지정된 수준에서 유의해야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Forward Step;

```

#### Get Measures

**구문:** obj &lt;&lt; Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Get Measures;

```

#### Get Prospectives

**구문:** obj &lt;&lt; Get Prospectives

**설명:** 추정값과 신뢰 구간을 포함하는 연관 배열을 반환합니다. 이러한 값은 모형에 있는 항의 경우 현재 모형에서 얻은 값이고, 현재 모형에 없는 항의 경우 해당 항을 포함하는 모형의 추정값과 신뢰 구간입니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Show(
	obj << Enter( :Runtime );
	obj << Get Prospectives;
);

```

#### Go

**구문:** obj &lt;&lt; Go

**설명:** 항 선택 프로세스를 위한 백그라운드 작업을 시작합니다. 스크립트에서 &apos;시작&apos; 옵션 대신 &apos;완료&apos; 옵션을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Go;

```

#### K-Fold Crossvalidation

**구문:** obj &lt;&lt; "K-Fold Crossvalidation"n( &lt;k&gt; )

**설명:** 변수 선택 프로세스에서 k 폴드 교차 검증을 수행합니다. 이 옵션을 선택하면 제어판에서 최대 K 폴드 R² 중지 규칙이 활성화됩니다. 단계별 플랫폼의 K 폴드 교차 검증은 표본을 k개의 부분집합으로 나누어 부분집합을 검증 데이터 집합으로 사용합니다. &apos;K 폴드 교차 검증&apos; 옵션은 연속형 반응에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;

```

#### Lock

**구문:** obj &lt;&lt; Lock( term )

**설명:** 모형에 있는 항 또는 없는 항을 잠급니다. 모형에 없는 잠긴 항은 모형에 입력할 수 없으며, 모형에 있는 잠긴 항은 모형에서 제거할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );

```

#### Make Model

**구문:** obj &lt;&lt; Make Model

**설명:** &apos;현재 추정값&apos; 테이블에 지정된 모형에 대한 모형 적합 시작 창을 엽니다. 명목형 또는 순서형 항이 있는 경우 &apos;모형 생성&apos; 옵션은 모형에 필요한 항을 포함하는 임시 변환 열을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;

```

#### Model Averaging

**구문:** obj &lt;&lt; Model Averaging( max_terms, AICc_cutoff )

**설명:** 단일 최적 모형을 선택하는 대신 여러 모형의 적합을 평균화할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Averaging( 5, .90 );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Dialog;

```

#### Plot Criterion History

**구문:** obj &lt;&lt; Plot Criterion History( state=0|1 )

**설명:** AICc와 BIC 대 모수의 수 그림을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;
obj << Plot Criterion History( 1 );

```

#### Plot RSquare History

**구문:** obj &lt;&lt; Plot RSquare History( state=0|1 )

**설명:** 훈련 및 검증 R² 대 모수의 수 그림을 생성합니다. 이 옵션은 검증 데이터가 있는 연속형 반응 모형에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;
obj << Plot RSquare History( 1 );

```

#### Prob to Enter

**구문:** obj &lt;&lt; Prob to Enter( number )

**설명:** 전진 선택 단계 중에 모형에 효과를 입력해야 하는 최대 p 값을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Enter( .20 );
obj << Finish;

```

#### Prob to Leave

**구문:** obj &lt;&lt; Prob to Leave( number )

**설명:** 후진 제거 단계 중에 모형에서 효과를 제거해야 하는 최소 p 값을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Leave( .20 );
obj << Enter All;
obj << Direction( "Backward" );
obj << Finish;

```

#### Remove

**구문:** obj &lt;&lt; Remove( term )

**설명:** 모형에서 항을 제거합니다. 이 옵션은 잠긴 항에 영향을 주지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Remove( :RunPulse );

```

#### Remove All

**구문:** obj &lt;&lt; Remove All

**설명:** 모형에서 모든 항을 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Remove All;

```

#### Rules

**구문:** obj &lt;&lt; Rules( "결합"|"제한"|"규칙 없음"|"전체 효과"|"유전성을 적용한 전체 효과" )

**설명:** 모형에 항 계층이 있을 때 적용되는 규칙을 지정합니다. 이 옵션은 모형에 계층 항이 포함된 경우에만 나타납니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime, :Weight * :RunPulse,
		:Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse, :RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run
);
obj << Rules( "Whole Effects" );
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Run Model

**구문:** obj &lt;&lt; Run Model

**설명:** &apos;현재 추정값&apos; 테이블에 지정된 모형에 대한 표준 최소 제곱 보고서를 엽니다. 명목형 또는 순서형 항이 있는 경우 &apos;모형 실행&apos; 옵션은 모형에 필요한 항을 포함하는 임시 변환 열을 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Run Model;

```

#### Step

**구문:** obj &lt;&lt; Step

**설명:** 항 선택 프로세스의 다음 단계를 수행합니다. &apos;단계&apos; 옵션은 항을 하나씩 입력하거나(전진 선택 방향) 하나씩 제거합니다(후진 제거 방향).

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Step;

```

#### Stop

**구문:** obj &lt;&lt; Stop

**설명:** &apos;시작&apos; 또는 &apos;완료&apos; 옵션을 사용하여 시작된 자동 선택 프로세스를 중지합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Stop;

```

#### Stopping Rule

**구문:** obj &lt;&lt; Stopping Rule( "p 값 임계"|"최소 AICc"|"최소 BIC"|"최대 검증 R²"|"최대 K 폴드 R²" )

**설명:** &apos;시작&apos; 또는 &apos;완료&apos; 옵션이 지정된 경우 항 선택 프로세스를 중지하는 데 사용되는 규칙을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime, :Weight * :RunPulse,
		:Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse, :RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run Model( Stopping Rule( "Minimum AICc" ) )
);
obj << Finish;

```

#### Unlock

**구문:** obj &lt;&lt; Unlock( term )

**설명:** 모형에서 이전에 잠긴 항의 잠금을 해제합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );
Wait( 1 );
obj << Unlock( :Runtime );

```

## Fit Varcomp

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Estimate Only Variance Components(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Estimate Only Variance Components

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Method( "REML" ), Estimate Only Variance Components( 1 ) )

**설명:** 지정된 모형을 사용하여 REML 분석을 실행하고 모형의 분산 성분을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);

```

### 항목 메시지

#### Get Random Effect Names

**구문:** obj &lt;&lt; Get Random Effect Names

**설명:** 임의 효과의 이름을 반환합니다. REML 분석 방법에 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vn = obj << Get Random Effect Names;
Show( vn );

```

#### Get Variance Components

**구문:** obj &lt;&lt; Get Variance Components

**설명:** 지정된 모형에 대해 모형 적합에 의해 생성된 분산 성분을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vc = obj << Get Variance Components;
Show( vc );

```

## Generalized Linear Mixed Model > Fit GLMM

### 항목 메시지

#### Between-Within Degrees of Freedom

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Between-Within Degrees of Freedom( state=0|1 ))

**설명:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );
fm = Fit Model(
	Y( :No Headache, :Number of Patients ),
	Effects( :Treatment, :Week, :Treatment * :Week ),
	Personality( "Generalized Linear Mixed Model" ),
	Subject( :"Treatment(Clinic)"n ),
	Repeated Effects( :Week Continuous ),
	Repeated Structure( "AR(1)" ),
	Generalized Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run()
);
Wait( 1 );
fm << (Fit[1] << "Between-Within Degrees of Freedom"n( 1 ));

```

#### Conditional Contour Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Contour Profiler( state=0|1 ))

**설명:** 한 번에 두 요인에 대한 조건부 반응을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 연속형 효과와 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Contour Profiler( 1 ));

```

#### Conditional Diagnostic Bundle

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Diagnostic Bundle( state=0|1 ))

**설명:** 회귀 모형이 관측된 데이터에 얼마나 적합한지 판단하는 데 유용한 진단 그림 그룹을 표시하거나 숨깁니다. 이 옵션은 이항 분포를 선택하거나 모형에 임의 효과가 없는 경우에는 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Conditional Diagnostic Bundle( 1 ));

```

#### Conditional Mean CI

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mean CI)

**설명:** 두 개의 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 예측 기대값에 대한 신뢰 하한과 신뢰 상한이 포함됩니다. 신뢰 구간에는 임의 효과가 있는 모형의 임의 효과 추정값이 포함됩니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Mean CI);

```

#### Conditional Mixture Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Mixture Profiler( state=0|1 ))

**설명:** 삼원 그림에 조건부 반응 등고선을 보여 주는 혼합물 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함되어 있고 모형에서 3개 이상의 요인에 혼합 효과 속성이 적용되거나 3개 이상의 요인 열에 혼합물 특성이 적용된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Mixture Profiler( 1 ));

```

#### Conditional Prediction Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Prediction Formula)

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 평균에 대한 예측 계산식이 포함됩니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Prediction Formula);

```

#### Conditional Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Profiler( state=0|1 ))

**설명:** 조건부 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Profiler( 1 ));

```

#### Conditional Surface Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Conditional Surface Profiler( state=0|1 ))

**설명:** 조건부 반응의 3차원 표면 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 효과와 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Surface Profiler( 1 ));

```

#### Containment Degrees of Freedom

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Containment Degrees of Freedom( state=0|1 ))

**설명:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Containment Degrees of Freedom( 1 ));

```

#### Contour Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**설명:** 한 번에 두 요인에 대한 주변 반응을 시각적으로 보여 주는 등고선 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 연속형 고정 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Contour Profiler( 1 ));

```

#### Correlation of Fixed Effects

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Fixed Effects( state=0|1 ))

**설명:** 모형의 고정 효과에 대한 상관 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Correlation of Fixed Effects( 1 ));

```

#### Covariance of All Parameters

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of All Parameters( state=0|1 ))

**설명:** 모형의 모든 효과에 대한 공분산 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of All Parameters( 1 ));

```

#### Covariance of Covariance Parameters

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Covariance Parameters( state=0|1 ))

**설명:** 모형의 임의 효과에 대한 공분산 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Covariance Parameters( 1 ));

```

#### Covariance of Fixed Effects

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance of Fixed Effects( state=0|1 ))

**설명:** 모형의 고정 효과에 대한 공분산 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Fixed Effects( 1 ));

```

#### Diagnostic Bundle

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**설명:** 회귀 모형이 관측된 데이터에 얼마나 적합한지 판단하는 데 유용한 진단 그림 그룹을 표시하거나 숨깁니다. 이 옵션은 이항 분포를 선택하거나 모형에 임의 효과가 있는 경우에는 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Empirical Standard Errors

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Empirical Standard Errors( state=0|1 ))

**설명:** 보고서 전체에서 표준 오차를 샌드위치 추정값으로 바꿉니다. 다중 비교 보고서에서 샌드위치 추정값을 사용하려면 다중 비교 보고서를 추가하기 전에 이 옵션을 선택해야 합니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Empirical Standard Errors( 1 ));

```

#### Fit Statistics

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Fit Statistics( state=0|1 ))

**설명:** 모형에 대한 규격 및 적합도 통계량 정보를 포함하는 적합 통계량 보고서와 모형 요약 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Fixed Effects Parameter Estimates

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Parameter Estimates( state=0|1 ))

**설명:** 고정 효과 모수 추정값 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Parameter Estimates( 1 ));

```

#### Fixed Effects Tests

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Fixed Effects Tests( state=0|1 ))

**설명:** 고정 효과 검정을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Tests( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Tests( 1 ));

```

#### Mean Confidence Interval

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**설명:** 두 개의 새 열을 데이터 테이블에 저장합니다. 새 열에는 평균 반응에 대한 신뢰 하한과 신뢰 상한이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Mean Confidence Interval);

```

#### Mixture Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Mixture Profiler( state=0|1 ))

**설명:** 삼원 그림에 주변 반응 등고선을 보여 주는 혼합물 프로파일러를 표시하거나 숨깁니다. 이 옵션은 모형에서 3개 이상의 요인에 혼합 효과 속성이 적용되거나 3개 이상의 요인 열에 혼합물 특성이 적용된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate, :m2 * :temperature,
		:m3 * :extrusion rate, :m3 * :temperature, :extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Mixture Profiler( 1 ));

```

#### Multiple Comparisons

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**설명:** 최소 제곱 평균 추정값 또는 사용자 정의 추정값을 생성합니다. 이러한 추정값을 사용하여 전체 평균과 비교, 대조군과 비교 또는 쌍별 비교를 수행할 수 있습니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Target Level( "Pass" ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Multiple Comparisons( Effect( :Program ), Least Squares Means Plot, Student's t( 1 ) ));

```

#### Odds Ratios

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**설명:** 범주형 예측 변수에 대한 승산비와 연속형 예측 변수에 대한 단위 승산비 및 범위 승산비가 포함된 보고서를 표시하거나 숨깁니다.

#### Prediction Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction Formula)

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 주변 평균에 대한 예측 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction Formula);

```

#### Prediction and Interval Formulas

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Prediction and Interval Formulas)

**설명:** 데이터 테이블에 새 열을 저장합니다. 이 열에는 예측 및 신뢰 한계에 대한 계산식이 포함됩니다. 이 옵션으로 생성된 한계 열에는 예측 프로파일러에 사용되는 특성이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction and Interval Formulas);

```

#### Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**설명:** 주변 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Profiler( 1 ));

```

#### Random Coefficients

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Random Coefficients( state=0|1 ))

**설명:** 랜덤 계수에 대한 추정값 보고서를 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Coefficients( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Coefficients( 1 ));
Report( fm )["Random Coefficients"] << Close( 0 );

```

#### Random Effects Covariance Parameter Estimates

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Covariance Parameter Estimates( state=0|1 ))

**설명:** 임의 효과 공분산 모수 추정값 테이블을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Effects Covariance Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Effects Covariance Parameter Estimates( 1 ));

```

#### Random Effects Predictions

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Random Effects Predictions( state=0|1 ))

**설명:** 임의 효과 예측 테이블을 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Random Effects Predictions( 1 ));

```

#### Save Conditional Residual Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Conditional Residual Formula )

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 Y에서 예측 계산식을 뺀 형식의 조건부 잔차 계산식이 포함됩니다. 이 옵션은 이항 분포를 선택하거나 모형에 임의 효과가 있는 경우에는 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Conditional Residual Formula);

```

#### Save Residual Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula )

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열에는 Y에서 예측 계산식을 뺀 형식의 주변 잔차 계산식이 포함됩니다. 이 옵션은 이항 분포를 선택한 경우에는 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**설명:** 새 계산식 열을 데이터 테이블에 저장합니다. 새 열을 사용하여 적합 모형에서 확률 반응 값을 생성할 수 있습니다. 계산식 열은 JMP Pro의 시뮬레이션 기능에서 사용할 수 있습니다. 기준 변수가 사용되면 이 옵션을 사용할 수 없습니다. 기준 그룹 시뮬레이션 계산식이 필요한 경우 데이터 테이블 부분집합을 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Save Simulation Formula);

```

#### Sequential Tests

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Sequential Tests( state=0|1 ))

**설명:** 모형에 효과가 순차적으로 추가될 때 제곱합이 포함된 순차(유형 1) 검정 보고서를 표시하거나 숨깁니다. 이 옵션은 모형에 하나 이상의 고정 효과가 포함된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Sequential Tests( 1 ));

```

#### Standard Error of Conditional Predicted

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Conditional Predicted)

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 조건부 평균 예측의 표준 오차가 포함됩니다. 이 옵션은 모형에 하나 이상의 임의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Conditional Predicted);

```

#### Standard Error of Predicted

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Standard Error of Predicted)

**설명:** 새 열을 데이터 테이블에 저장합니다. 새 열에는 주변 평균 예측의 표준 오차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Predicted);

```

#### Surface Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**설명:** 주변 반응의 3차원 표면 그림을 표시하거나 숨깁니다. 이 옵션은 모형에 두 개 이상의 효과가 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Surface Profiler( 1 ));

```

## Generalized Linear Mixed Model

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit GLMM Platform(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit GLMM Platform

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Linear Mixed Model" ) )

**설명:** Fits a generalized linear mixed model. These models can be used for random coefficients, split-plots, and blocked designs when the response is non-Gaussian. The response distributions can accommodate continuous, categorical, count, and time-to-event response data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);

```

### 항목 메시지

#### Fit

**구문:** Fit Model(...Run( Fit( options ) )...);obj &lt;&lt; Fit( options );obj &lt;&lt; (Fit[number] &lt;&lt; option)

**설명:** 플랫폼에 메시지를 보낼 수 있습니다. 이 옵션은 모형 시작 스크립트에 사용하거나, 보고서에서 특정 모형에 대한 핸들을 생성하는 데 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << Model Dialog;

```

## Generalized Regression > Generalized Regression Fit

### 항목 메시지

#### Active Parameter Estimates

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Active Parameter Estimates( state=0|1 ))

**설명:** 현재 선택된 모형에 대한 활성 또는 0이 아닌 모수 추정값 테이블을 표시하거나 숨깁니다. 최대 가능도 또는 능형 회귀 모형에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Active Parameter Estimates( 1 ));

```

#### Confusion Matrix

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Confusion Matrix( &lt;probability=0.5&gt; ))

**설명:** 실제 및 예측 반응에 대한 교차표 행렬을 생성합니다. 0.5 이외의 임계 확률을 지정하려면 선택적 인수를 사용합니다. 이 옵션은 이항, 다항 또는 순서형 로지스틱 분포가 지정된 경우에만 사용할 수 있습니다. 기본값은 "0.5"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Confusion Matrix( 0.5 )
		)
	)
);

```

#### Cook's D Influence

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Cook&apos;s D Influence)

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 새 열에는 Cook 거리 영향력 통계량 값이 포함됩니다. 이 옵션은 정규 분포와 표준 최소 제곱 추정 방법이 지정된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Cook's D Influence);

```

#### Correlation of Estimates

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Correlation of Estimates( state=0|1 ))

**설명:** 지정된 적합을 통한 모수 추정값 간의 상관 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Correlation of Estimates);

```

#### Covariance of Estimates

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Covariance Of Estimates( state=0|1 ))

**설명:** 지정된 적합에 대한 모수 추정값 간의 공분산 행렬을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Covariance of Estimates);

```

#### Custom Test

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Custom Test( [l1, l2, l3, ... ], &lt;Label( text )&gt; ))

**설명:** 사용자 가설을 검정할 수 있는 사용자 검정 보고서를 표시하거나 숨깁니다. 모형에 해 경로가 있는 경우 해를 업데이트하면 사용자 검정 결과가 업데이트됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :BMI, :BP, :LDL, :HDL, :TCH ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Custom Test( [0 0 0 1 -1 0], Label() ));

```

#### Decision Threshold

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Decision Threshold( state=0|1, Set Probability Threshold( number=0.5 ))

**설명:** 훈련, 검증 및 테스트(지정된 경우) 데이터 집합에 대한 결정 임계값 보고서를 표시하거나 숨깁니다. 각 보고서에는 모형 적합을 비교할 수 있도록 각 모형에 대한 적합 확률 분포 그래프, 각 모형에 대한 혼동 행렬 및 분류 그래프가 포함되어 있습니다. 이 옵션은 이항 범주형 반응에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time, :BMI * :Markers,
		:BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers, :Age * :Hepatitis,
		:Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis, :Time * :Jaundice, :Markers * :Hepatitis,
		:Markers * :Jaundice, :Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Estimation Method( Elastic Net( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 0 );
fm << (fit[1] << Decision Threshold( 1 ));

```

#### Diagnostic Bundle

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Diagnostic Bundle( state=0|1 ))

**설명:** 회귀 모형이 관측된 데이터에 얼마나 적합한지 판단하는 데 유용한 진단 그림 그룹을 표시하거나 숨깁니다. 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합(사용하는 경우)에 대해 그림이 제공됩니다. 이항, 다항, 순서형 로지스틱 또는 Cox 비례 위험 분포가 지정된 경우에는 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Distribution Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Distribution Profiler( state=0|1 ))

**설명:** 예측 변수 및 반응의 누적 분포 함수 프로파일러를 표시하거나 숨깁니다. 반응은 맨 오른쪽 셀에 표시됩니다. 이항 또는 분위수 회귀 분포가 지정된 경우에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight, :spine * :width,
		:spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Distribution Profiler( 1 )
		)
	)
);

```

#### Effect Tests

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Effect Tests( state=0|1 ))

**설명:** 각 효과에 대한 검정을 표시하거나 숨깁니다. 각 효과 검정은 해당 효과와 관련된 모든 모수가 0이라는 귀무가설을 검정합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Effect Tests( 0 ));

```

#### Get Prediction Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**설명:** 예측 계산식 열을 생성하는 스크립트를 생성하여 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Get Prediction Formula);

```

#### Hats

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Hats)

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 새 열에는 hat 행렬의 대각 요소가 포함되며 이러한 요소를 hat 값이라고도 합니다. 이 옵션은 정규 분포 및 표준 최소 제곱 추정 방법이 지정된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Hats);

```

#### Hazard Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Profiler( state=0|1 ))

**설명:** 위험률을 예측 변수 및 반응의 함수로 보여 주는 프로파일러를 표시하거나 숨깁니다. 반응은 맨 오른쪽 셀에 표시됩니다. 이 옵션은 정규, 지수, Weibull, 로그 정규 또는 Cox 비례 위험 분포가 지정된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ), Hazard Profiler( 1 ) )
	)
);

```

#### Hazard Ratios

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Hazard Ratios( state=0|1 ))

**설명:** 범주형 예측 변수에 대한 위험 비율과 연속형 예측 변수에 대한 단위 위험 비율 및 범위 위험 비율이 포함된 보고서를 표시하거나 숨깁니다. 위험 비율은 두 사건에 대한 위험률 비율입니다. 이 옵션은 Cox 비례 위험 분포가 지정된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ), Hazard Ratios( 1 ) ) )
);

```

#### Hide Inactive Paths

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Hide Inactive Paths( state=0|1 ))

**설명:** 현재 활성화되지 않은 경로가 흐리게 나타나도록 해 경로 모수 추정값 그림에서 비활성 경로의 투명도를 조정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Hide Inactive Paths);

```

#### Incidence Rate Ratios

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Incidence Rate Ratios( state=0|1 ))

**설명:** 범주형 예측 변수에 대한 발생률 비율과 연속형 예측 변수에 대한 단위 발생률 비율 및 범위 발생률 비율이 포함된 보고서를 표시하거나 숨깁니다. 이 옵션은 Poisson 또는 음이항 분포가 지정되고 모형에 절편이 포함된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Incidence Rate Ratios( 1 )
		)
	)
);

```

#### Inverse Prediction

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) ))

**설명:** Y 값 및 다른 모든 요인의 값이 주어졌을 때 예측 X 값과 신뢰 구간을 생성합니다. 벡터 모델링 유형이 있는 예측 변수가 포함된 모형에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Inverse Prediction(
	Response( 200, 250, 300 ),
	Term Value(
		Age( 48.5181 ),
		Gender( "1" ),
		BMI( . ),
		BP( 94.6470135746607 ),
		Total Cholesterol( 189.140271493213 ),
		LDL( 115.439140271493 ),
		HDL( 49.7884615384615 ),
		TCH( 4.07024886877828 ),
		LTG( 4.64141085972851 ),
		Glucose( 91.2601809954751 )
	)
));

```

#### Lift Curve

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**설명:** 모형에 대한 향상도 곡선을 표시하거나 숨깁니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 향상도 곡선이 표시됩니다. 이 옵션은 이항, 다항 또는 순서형 로지스틱 분포가 지정된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time, :BMI * :Markers,
		:BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers, :Age * :Hepatitis,
		:Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis, :Time * :Jaundice, :Markers * :Hepatitis,
		:Markers * :Jaundice, :Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Estimation Method( Elastic Net( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 0 );
fm << (fit[1] << Lift Curve( 1 ));

```

#### Mean Confidence Interval

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Mean Confidence Interval)

**설명:** 두 개의 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 평균 반응에 대한 95% 신뢰 하한과 신뢰 상한이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Mean Confidence Interval);

```

#### Model Summary

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Model Summary( state=0|1 ))

**설명:** 모형에 대한 규격 및 적합도 통계량 정보를 포함하는 모형 요약 보고서를 표시하거나 숨깁니다. 이 옵션은 적용 가능한 모형에 대한 추정 상세 정보 보고서도 표시합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Model Summary( 0 ));

```

#### Multiple Comparisons

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Multiple Comparisons( Effect( effect ), &lt;options&gt; ))

**설명:** 최소 제곱 평균 추정값 또는 사용자 정의 추정값을 생성합니다. 이러한 추정값을 사용하여 전체 평균과 비교, 대조군과 비교 또는 쌍별 비교를 수행할 수 있습니다. 벡터 모델링 유형이 있는 예측 변수가 포함된 모형 또는 범주형 예측 변수가 포함되지 않은 모형에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );
fm = dt << Fit Model(
	Y( :World Gross ),
	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Gamma" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Multiple Comparisons(
				Effect( :Genre ),
				Comparisons with Overall Average(
					1,
					Comparisons with Overall Average Decision Chart(
						ANOM( 1, Point Options( "Show Needles" ) )
					)
				)
			)
		)
	),
	SendToReport( Dispatch( {}, "Parameter Estimates for Original Predictors", OutlineBox, Close( 1 ) ) )
);

```

#### Normal Quantile Plot

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Normal Quantile Plot( state=0|1 ))

**설명:** 세로 축에 정규 분위수가 있고 가로 축에 표준화 잔차가 있는 그림을 표시하거나 숨깁니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다. 이 옵션은 정규 분포가 지정되고 중도절단이 없는 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Normal Quantile Plot);

```

#### Odds Ratios

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Odds Ratios( state=0|1 ))

**설명:** 범주형 예측 변수에 대한 승산비와 연속형 예측 변수에 대한 단위 승산비 및 범위 승산비가 포함된 보고서를 표시하거나 숨깁니다. 이 옵션은 이항 분포가 지정되고 모형에 절편이 포함된 경우에만 사용할 수 있습니다. 벡터 모델링 유형이 있는 예측 변수가 포함된 모형에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Estimation Method( "Logistic Regression" ), Validation Method( "None" ), Odds Ratios( 1 ) ) )
);

```

#### Parameter Estimates for Centered and Scaled Predictors

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Centered and Scaled Predictors( state=0|1 ))

**설명:** 중심화 및 척도화된 모수 추정값 테이블을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Centered and Scaled Predictors( 1 ));

```

#### Parameter Estimates for Original Predictors

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Parameter Estimates for Original Predictors( state=0|1 ))

**설명:** 데이터의 원래 척도로 표현된 모수 추정값 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Original Predictors( 0 ));

```

#### Plot Actual by Predicted

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predicted( state=0|1 ))

**설명:** 세로 축에 실제값이 있고 가로 축에 예측값이 있는 훈련 데이터 집합에 대한 그림을 표시하거나 숨깁니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다. 이항, 다항, 순서형 로지스틱 또는 Cox 비례 위험 분포가 지정된 경우에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Baseline Survival and Hazard

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Baseline Survival and Hazard( state=0|1 ))

**설명:** 반응 변수에 대한 기준 비례 위험 함수의 생존 및 위험 함수를 보여 주는 기준 생존 및 위험 그림을 표시하거나 숨깁니다. 아래에는 그림에 표시된 값이 포함된 테이블이 있습니다. 이 옵션은 Cox 비례 위험 분포가 지정된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Plot Baseline Survival and Hazard( 1 )
		)
	)
);

```

#### Plot Residual by Predicted

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual By Predicted( state=0|1 ))

**설명:** 세로 축에 잔차 값이 있고 가로 축에 예측값이 있는 훈련 데이터 집합에 대한 그림을 표시하거나 숨깁니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다. 이항, 다항, 순서형 로지스틱 또는 Cox 비례 위험 분포가 지정된 경우에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Plot Residual by Predictor

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual By Predictor( state=0|1 ))

**설명:** 세로 축에 잔차 값이 있고 가로 축에 예측 변수 값이 있는 그림을 표시하거나 숨깁니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다. 이항, 다항, 순서형 로지스틱 또는 Cox 비례 위험 분포가 지정된 경우에는 이 옵션을 사용할 수 없습니다. 벡터 모델링 유형이 있는 예측 변수가 포함된 모형에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predictor( 1 ));

```

#### Precision Recall Curve

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**설명:** 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time, :BMI * :Markers,
		:BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers, :Age * :Hepatitis,
		:Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis, :Time * :Jaundice, :Markers * :Hepatitis,
		:Markers * :Jaundice, :Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Estimation Method( Elastic Net( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 0 );
fm << (fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**설명:** 예측 프로파일러를 표시하거나 숨깁니다. 모수 추정값이 0이고, 계수가 0이 아닌 교호작용 항에 포함되지 않은 예측 변수는 프로파일러에 나타나지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight, :spine * :width,
		:spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ), Profiler( 1 ) ) )
);

```

#### Publish Prediction Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**설명:** 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 게시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Publish Prediction Formula);

```

#### Quantile Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Quantile Profiler( state=0|1 ))

**설명:** 예측 반응을 예측 변수의 함수 및 누적 분포 함수의 분위수로 보여 주는 프로파일러를 표시하거나 숨깁니다. 분위수는 확률이라고 하며 맨 오른쪽 셀에 표시됩니다. 이항 또는 분위수 회귀 분포가 지정된 경우에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight, :spine * :width,
		:spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ), Quantile Profiler( 1 ) )
	)
);

```

#### ROC Curve

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**설명:** ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 ROC 곡선이 표시됩니다. 이 옵션은 이항, 다항 또는 순서형 로지스틱 분포가 지정된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time, :BMI * :Markers,
		:BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers, :Age * :Hepatitis,
		:Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis, :Time * :Jaundice, :Markers * :Hepatitis,
		:Markers * :Jaundice, :Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Estimation Method( Elastic Net( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 0 );
fm << (fit[1] << ROC Curve( 1 ));

```

#### Relaunch Active Main Effects and Full Factorial

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Full Factorial)

**설명:** 모수 추정값이 0이 아닌 항을 기반으로 한 항 집합이 모형 효과 생성 목록에 포함된 모형 적합 시작 창을 엽니다. 이러한 항이 활성 효과입니다. 시작 창의 다른 모든 규격은 원래 분석에 사용된 것입니다. 모형 효과 생성 목록에는 활성 효과를 사용하여 생성된 완전 요인이 채워집니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Relaunch Active Main Effects and Full Factorial);

```

#### Relaunch Active Main Effects and Response Surface Model

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Response Surface Model)

**설명:** 모수 추정값이 0이 아닌 항을 기반으로 한 항 집합이 모형 효과 생성 목록에 포함된 모형 적합 시작 창을 엽니다. 이러한 항이 활성 효과입니다. 시작 창의 다른 모든 규격은 원래 분석에 사용된 것입니다. 모형 효과 생성 목록에는 활성 효과를 사용하여 생성된 반응 표면 모형이 채워집니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Relaunch Active Main Effects and Response Surface Model);

```

#### Relaunch Active Main Effects and Second Degree Factorial

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Factorial)

**설명:** 모수 추정값이 0이 아닌 항을 기반으로 한 항 집합이 모형 효과 생성 목록에 포함된 모형 적합 시작 창을 엽니다. 이러한 항이 활성 효과입니다. 시작 창의 다른 모든 규격은 원래 분석에 사용된 것입니다. 모형 효과 생성 목록에는 활성 효과를 사용하여 생성된 2차 요인이 채워집니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Factorial);

```

#### Relaunch Active Main Effects and Second Degree Polynomial

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Second Degree Polynomial)

**설명:** 모수 추정값이 0이 아닌 항을 기반으로 한 항 집합이 모형 효과 생성 목록에 포함된 모형 적합 시작 창을 엽니다. 이러한 항이 활성 효과입니다. 시작 창의 다른 모든 규격은 원래 분석에 사용된 것입니다. 모형 효과 생성 목록에는 활성 효과를 사용하여 생성된 2차 다항식이 채워집니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Polynomial);

```

#### Relaunch Active Main Effects and Third Degree Factorial

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Factorial)

**설명:** 모수 추정값이 0이 아닌 항을 기반으로 한 항 집합이 모형 효과 생성 목록에 포함된 모형 적합 시작 창을 엽니다. 이러한 항이 활성 효과입니다. 시작 창의 다른 모든 규격은 원래 분석에 사용된 것입니다. 모형 효과 생성 목록에는 활성 효과를 사용하여 생성된 3차 요인이 채워집니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Factorial);

```

#### Relaunch Active Main Effects and Third Degree Polynomial

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch Active Main Effects and Third Degree Polynomial)

**설명:** 모수 추정값이 0이 아닌 항을 기반으로 한 항 집합이 모형 효과 생성 목록에 포함된 모형 적합 시작 창을 엽니다. 이러한 항이 활성 효과입니다. 시작 창의 다른 모든 규격은 원래 분석에 사용된 것입니다. 모형 효과 생성 목록에는 활성 효과를 사용하여 생성된 3차 다항식이 채워집니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Polynomial);

```

#### Relaunch with Active Effects

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Relaunch with Active Effects)

**설명:** 모수 추정값이 0이 아닌 항을 기반으로 한 항 집합이 모형 효과 생성 목록에 포함된 모형 적합 시작 창을 엽니다. 이러한 항이 활성 효과입니다. 시작 창의 다른 모든 규격은 원래 분석에 사용된 것입니다. 모형 효과 생성 목록에는 활성 효과만 채워집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Relaunch with Active Effects);

```

#### Remove Fit

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**설명:** 지정된 적합을 보고서에서 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
fm = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime, :Weight * :RunPulse,
		:Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse, :Runtime * :RstPulse,
		:Runtime * :MaxPulse, :RunPulse * :RstPulse, :RunPulse * :MaxPulse, :RstPulse * :MaxPulse
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
Wait( 2 );
fm << (fit[1] << Remove Fit);

```

#### Reset Solution

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Reset Solution)

**설명:** 해 경로의 모형을 원래 모형으로 재설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));
Wait( 1 );
fm << (Fit[1] << Reset Solution);

```

#### Save Cox Snell Residual Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Cox Snell Residual Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 Cox-Snell 잔차에 대한 계산식이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Cox Snell Residual Formula);

```

#### Save Distribution Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Distribution Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 누적 분포 함수에 대한 계산식이 포함됩니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (Fit[1] << Save Distribution Formula);

```

#### Save Functional Prediction Formulas

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Functional Prediction Formulas)

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 각 FDE 주성분 반응에 대한 새 열이 추가됩니다. 각 새 열에는 각 함수 주성분에 대한 예측 계산식이 포함됩니다. 함수 데이터 탐색기 플랫폼의 고유 함수 열과 예측 계산식의 선형 조합인 모형 예측 계산식을 포함하는 마지막 열이 추가됩니다. 이 옵션은 반응 열에 FDE FPC 수 열 특성이 포함된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Simple Linear Functional Data.jmp" );
fobj = Functional Data Explorer( Y( :Y ), X( :T ), ID( :ID ), Z( :X1, :X2, :X3 ), B Splines( 1 ) );
dtsum = (Report( fobj )["Function Summaries"] << get scriptable object) << Save Summaries;
fobj << close window;
fm = dtsum << Fit Model(
	Y( :Y FPC 1, :Y FPC 2 ),
	Effects( :X1, :X2, :X3, :X1 * :X2, :X1 * :X3, :X2 * :X3 ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Best Subset" ), Validation Method( "AICc" ), Enforce Heredity( 1 ) ) )
);
(Report( fm[1] )["Generalized Regression for Y FPC 1"]["Normal Best Subset with AICc Validation"] <<
get scriptable object) << Save Functional Prediction Formulas;

```

#### Save Linear Predictor

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Linear Predictor)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 설계 행렬과 모수 추정값 벡터의 곱을 구하는 계산식이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight, :spine * :width,
		:spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Save Linear Predictor);

```

#### Save Martingale Residual Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Martingale Residual Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 Martingale 잔차에 대한 계산식이 포함됩니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Martingale Residual Formula);

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Prediction Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 관측된(표준화되지 않음) 데이터 값이 주어진 경우 예측 계산식이 포함됩니다. 예측 계산식은 0인 항을 포함하지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Save Prediction Formula);

```

#### Save Resample Formulas

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Resample Formulas)

**설명:** 여러 계산식 열을 원래 데이터 테이블에 저장합니다. &apos;SVEM 표본&apos; 열 그룹에는 개별 모형당 하나의 계산식 열이 포함됩니다. 이러한 열은 숨겨진 열로 저장됩니다. 다음 열은 자체 검증 앙상블 모형에 대한 예측 계산식입니다. 다음 열에는 자체 검증 앙상블 모형에 대한 표준 오차 계산식이 포함됩니다. 마지막 열에는 각 행에 대한 자체 검증 앙상블 모형의 중앙값 예측이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( SVEM Forward Selection( Samples( 100 ) ) ) ) )
);
fm << (fit[1] << Save Resample Formulas);

```

#### Save Residual Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Residual Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 Y에서 예측 계산식을 뺀 형식으로 제공되는 잔차 계산식이 포함됩니다. 잔차 계산식은 0인 항을 포함하지 않습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Simulation Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 적합 모형에 대한 추정 모수를 사용하여 시뮬레이션 값을 생성하는 계산식이 포함됩니다. 이 열은 시뮬레이션 유틸리티에서 스위치 인할 열로 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Simulation Formula);

```

#### Save Survival Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Survival Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 관측된 시간에서의 생존 확률에 대한 계산식이 포함됩니다. 생존 함수는 1에서 누적 분포 함수를 뺀 값과 같습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Survival Formula);

```

#### Save Validation Column

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation Column)

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 새 열은 폴드에 행 할당을 설명합니다. K 폴드의 경우 행이 할당된 폴드가 열에 나열됩니다. 홀드백의 경우 각 행은 훈련 데이터 집합 또는 검증 데이터 집합에 속하는 것으로 식별됩니다. Leave-One-Out의 경우 행 값은 해당 행이 제외되는 순서를 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Validation Column);

```

#### Save Variance Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Save Variance Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 예측 분산에 대한 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight, :spine * :width,
		:spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Variance Formula);

```

#### Select Nonzero Terms

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Select Nonzero Terms)

**설명:** 보고서에서 계수가 0이 아닌 항을 강조 표시합니다. 또한 데이터 테이블에서 관련된 모든 열을 선택합니다. 능형 회귀 추정 방법이 지정된 경우에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Select Nonzero Terms);

```

#### Select Zeroed Terms

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Select Zeroed Terms)

**설명:** 보고서에서 계수가 0인 항을 강조 표시합니다. 또한 데이터 테이블에서 관련된 모든 열을 선택합니다. 능형 회귀 추정 방법이 지정된 경우에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Select Zeroed Terms);

```

#### Set Solution ID

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Set Solution ID( number ))

**설명:** 지정한 모형을 해 경로에 있는 다른 모형으로 변경합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));

```

#### Show Prediction Expression

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Show Prediction Expression( state=0|1 ))

**설명:** 추정된 모형에 대한 방정식을 포함하는 예측 표현식 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Show Prediction Expression);

```

#### Show Solution Path Summary

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Show Solution Path Summary( state=0|1 ))

**설명:** 해 경로 및 검증 경로 그림에서 활성 집합이 변경되는 점에 대한 적합 통계량 테이블이 포함된 보고서를 표시하거나 숨깁니다. 사용 가능한 통계량은 추정 방법에 따라 다릅니다. 최대 가능도 또는 능형 회귀 모형에는 이 옵션을 사용할 수 없습니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Show Solution Path Summary( 1 ));

```

#### Solution Path

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Solution Path( state=0|1 ))

**설명:** 해 경로 및 검증 경로 그림을 표시하거나 숨깁니다. 최대 가능도 모형에는 이 옵션을 사용할 수 없습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Solution Path( 0 ));

```

#### Std Error of Predicted

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted)

**설명:** 새 열을 원래 데이터 테이블에 저장합니다. 새 열에는 예측 평균 반응의 표준 오차가 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted);

```

#### Std Error of Predicted Formula

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Std Error of Predicted Formula)

**설명:** 새 계산식 열을 원래 데이터 테이블에 저장합니다. 새 열에는 예측 평균 반응의 표준 오차 계산식이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( Validation Column ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted Formula);

```

#### Step Backward

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Step Backward)

**설명:** 해 경로에서 가장 작은 다음 모형으로 이동합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Backward);
Wait( 1 );
fm << (Fit[1] << Step Backward);

```

#### Step Forward

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Step Forward)

**설명:** 해 경로에서 가장 큰 다음 모형으로 이동합니다.

**JMP추가된 버전:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Forward);
Wait( 1 );
fm << (Fit[1] << Step Forward);

```

#### Survival Profiler

**구문:** obj &lt;&lt; (fit[number] &lt;&lt; Survival Profiler( state=0|1 ))

**설명:** 생존 함수를 예측 변수 및 반응의 함수로 보여 주는 프로파일러를 표시하거나 숨깁니다. 반응은 맨 오른쪽 셀에 표시됩니다. 이 옵션은 정규, 지수, Weibull, 로그 정규 또는 Cox 비례 위험 분포가 지정된 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Survival Profiler( 1 ));

```

## Generalized Regression

### 공유 항목 메시지

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**구문:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**설명:** 제외 항목 및 데이터 변경이 있을 때 분석을 자동으로 다시 실행합니다. 자동 재계산 옵션이 설정된 경우 재계산하기 전에 제외 항목 및 데이터 변경이 적용되게 하려면 Wait(0) 명령을 사용하는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

**구문:** obj &lt;&lt; Broadcast(message)

**설명:** 플랫폼에 메시지를 브로드캐스트합니다. 개별 개체의 반환 결과가 테이블인 경우 가능하면 테이블이 연결되고 최종 형식은 테이블 상자의 &apos;결합 테이블 저장&apos; 옵션 결과 또는 소스 열을 사용한 &apos;연결&apos; 옵션 결과와 동일합니다. 그 외의 경우에는 결과가 목록에 저장되어 반환됩니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**구문:** obj &lt;&lt; Get Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**구문:** Render Preset( preset )

**설명:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**구문:** obj &lt;&lt; Title( "new title" )

**설명:** 플랫폼의 제목을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**구문:** obj &lt;&lt; View Web XML

**설명:** 대화식 HTML 보고서를 생성하는 데 사용된 XML 코드를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Fit Generalized(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Fit Generalized

**구문:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Regression" ) )

**설명:** 벌점 회귀 기법을 사용하여 일반화 선형 모형을 적합시킵니다. 이 기법은 과대적합을 방지하는 방식으로 변수 선택을 자동화하는 데 유용합니다. 벌점 회귀 기법으로는 Lasso 회귀, 적응형 Lasso 회귀, Elastic Net, 적응형 Elastic Net 및 능형 회귀가 포함됩니다. 반응 분포는 연속형, 범주형, 개수 및 사건 발생 시간 유형의 반응 데이터를 수용할 수 있습니다. 대부분의 회귀 설정에 이 분석법이 권장됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	By( _bycol )
);

```

### 항목 메시지

#### Fit

**구문:** obj &lt;&lt; Fit( Estimation Method( Emethod( estim_options ) ), Validation Method( Vmethod( valid_options ) ), &lt;Early Stopping&gt;, &lt;Enforce Heredity&gt;, &lt;Force( vector )&gt; )

**설명:** 추정 방법 및 옵션, 검증 방법 및 옵션, 모형에 대한 기타 적합 옵션을 지정합니다. 사용 가능한 추정 옵션은 지정된 추정 방법에 따라 달라집니다. 검증 옵션은 K 폴드 및 홀드백 방법에 사용할 수 있습니다. 다른 적합 옵션은 모형에 대한 조기 중지, 항 유전성 적용 및 항 강제 적용을 제어합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) ),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, Close( 0 ) ) )
);

```

#### Get X Matrix

**구문:** obj &lt;&lt; Get X Matrix

**설명:** 설계 행렬(행렬 X라고도 함)을 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
As Table( fm << Get X Matrix );

```

#### Model Dialog

**구문:** obj &lt;&lt; Model Dialog

**설명:** 현재 분석을 위해 완료된 모형 적합 시작 창을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "Validation Column" ) ) )
);
obj << Model Dialog;

```

#### Save Coding Table

**구문:** obj &lt;&lt; Save Coding Table

**설명:** 모든 모형 모수에 대한 JMP 코딩을 포함하는 새 데이터 테이블을 생성합니다. 마지막 열에는 반응 변수의 값이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run
);
fm << Save Coding Table;

```

#### Set Random Seed

**구문:** obj = Fit Model(...Run( Set Random Seed( number ) )...)

**설명:** K 폴드 및 홀드백 검증에 사용되는 랜덤화 과정의 시드값을 설정합니다.

**JMP추가된 버전:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Set Random Seed( 1111 ), Fit( Estimation Method( "Lasso" ), Validation Method( "Holdback", 0.3 ) ) )
);

```

## Model Dialog

### 열

#### ID

**구문:** obj = Run(...&lt;ID( column )&gt;...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 유전 관계 행렬을 식별하는 열입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

#### Subgroup

**구문:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 하나 이상의 부분군 변수를 지정합니다. 부분군 변수가 정의되면 부분군 변수의 각 범주에 대해 추가 적합이 수행됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Switch

**구문:** obj = Fit Model(...Switch( column(s) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 한 번에 하나씩 모형으로 전환할 수 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

### 항목 메시지

#### Cauchy Fit

**구문:** obj = Fit Model(...Personality( "Response Screening" ), Cauchy Fit( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 오차가 Cauchy 분포를 따른다고 가정합니다. Cauchy 분포는 정규 분포보다 꼬리가 더 두텁기 때문에 이상치의 영향이 줄어듭니다. 반응 변수 선별 분석법에만 사용할 수 있습니다. 이 메시지는 모형 적합 시작 창의 &apos;강한 로버스트 적합&apos; 옵션에 해당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Cauchy Fit( 1 ),
	Run
);

```

#### Censor Code

**구문:** obj = Fit Model(...Censor Code( string )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 오른쪽 중도절단된 관측값을 지정하는 중도절단 열의 값을 식별합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ) )
);

```

#### Center Polynomials

**구문:** obj = Fit Model(...Center Polynomials( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 다항식 모형의 효과를 중심화합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SILICA * :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Centering

**구문:** obj = Fit Model(...Personality( "Partial Least Squares" ), Centering( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 열에서 평균을 빼서 모든 반응 변수와 모형 효과를 중앙에 맞춥니다. 부분 최소 제곱 분석법에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Centering( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Choose High Target

**구문:** obj = Fit Model(...Personality( "Nominal Logistic" ), Choose High Target( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 이진 명목형 반응의 큰 값을 목표 반응으로 사용하도록 지정합니다. 명목형 로지스틱 분석법의 이진 반응 열에만 사용할 수 있습니다. 이 메시지는 모형 적합 시작 창에 있는 목표 수준 옵션에 해당됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Choose High Target( 1 ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

#### Convergence Limit

**구문:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형 적합의 수렴 한계를 지정합니다. 모형이 쉽게 수렴되지 않는 경우 수렴 한계를 늘릴 수 있습니다. 기본값은 0.00000001입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Create SAS Job

**구문:** obj &lt;&lt; Create SAS Job

**설명:** 현재 모형 규격에 대한 SAS 코드를 SAS 프로그램 창에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model( Y( :ABRASION ), Effects( :SILICA, :SILANE ), Personality( "Standard Least Squares" ) );
obj << Create SAS Job;

```

#### Dispose Reports

**구문:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**설명:** 개별 모형 보고서가 표시되지 않고 적합 후 메모리에서 제거되도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축되고 메모리가 절약됩니다. 적합 모형의 결과를 수집하려면 이 옵션을 "결과를 데이터 테이블에 저장" 옵션과 함께 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam, :solvent type,
		:type on cylinder, :press type, :unit number, :cylinder size, :paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effects

**구문:** obj = Run(...Effects( col, col, ... )...);obj = Run(...Effects( macro( col, col, ... ) )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 효과 역할에 설명 항을 할당합니다. 효과를 개별적으로 또는 모형 적합 시작 창의 매크로를 사용하여 지정할 수 있습니다. 아래의 다양한 예를 참조하십시오.

**Scheffe 3차**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Scheffe Cubic( :height, :weight ) ) );

```

**그룹화된 회귀변수**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Grouped Regressors( :height, :weight ) ) );

```

**반응 표면**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Response Surface( :weight, :age ) ) );

```

**부분 3차**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Partial Cubic( :height, :weight ) ) );

```

**완전 요인**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Full Factorial( :sex, :age, :weight ) ) );

```

**정렬된 요인 배치**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Factorial Sorted( :sex, :age, :weight ) ) );

```

**특정 차수까지의 다항식**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 5 ),
	Effects( Polynomial to Degree( :height, :weight ) )
);

```

**특정 차수까지의 요인**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 2 ),
	Effects( Factorial to Degree( :sex, :age, :weight ) )
);

```

**혼합물 반응 표면**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Mixture Response Surface( :weight, :age ) ) );

```

**효과**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( :sex, :age, :weight ) );

```

#### Emphasis

**구문:** obj = Fit Model(...Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage" | "Effect Screening" | "Minimal Report" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 표준 최소 제곱 분석법의 기본 보고서에 나오는 그림 및 통계량 유형을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" )
);
obj << Run Model;

```

#### Error Specification

**구문:** obj = Fit Model(...Personality("Standard Least Squares" ), Error Specification( "Default Estimate" | "Pure Error" | "Specified" )...)

**설명:** 최소 제곱 적합 보고서에서 표준 오차 및 검정에 사용되는 오차 분산과 오차 자유도를 지정합니다. 이 옵션은 임의 효과가 없는 경우 표준 최소 제곱 분석법에만 사용할 수 있습니다.

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Error Specification( "Pure Error" ),
	Run
);

```

#### Estimate Only Variance Components

**구문:** obj = Fit Model(...Personality( "Standard Least Squares" ), Estimate Only Variance Components( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 모형을 사용하여 REML 분석을 실행하고 모형의 분산 성분만 포함된 보고서를 표시합니다. 표준 최소 제곱 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

#### Firth Bias-Adjusted Estimates

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** Firth 편향 수정 방법을 사용하여 모형을 적합시키도록 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Fit Separately

**구문:** obj = Fit Model(...Personality( "Standard Least Squares" ), Fit Separately( state=0|1 )...)

**설명:** 비결측인 모든 행을 사용하여 각 Y 변수에 대해 개별 모형을 적합시킵니다. 이 옵션은 모형에 Y 변수가 여러 개이고 임의 효과가 없는 경우 표준 최소 제곱 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Fit Separately( 1 ),
	Run
);

```

#### GLM Distribution

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 반응 변수의 확률 분포를 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Generalized Distribution

**구문:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( distribution name )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 반응 확률 분포를 지정합니다. 일반화 회귀 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ), Profiler( 1 ) ) )
);

```

#### Imputation Method

**구문:** obj = Fit Model(...Personality( "Partial Least Squares" ), Imputation Method( "Mean" | "EM" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 대치 방법을 지정합니다. 기본적으로 평균법이 사용됩니다. 부분 최소 제곱 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Impute Missing Data

**구문:** obj = Fit Model(...Personality( "Partial Least Squares" ), Impute Missing Data( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 지정된 결측값 대치법을 사용하여 Y 또는 X 열의 결측 데이터 값을 비결측값으로 대체합니다. 부분 최소 제곱 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Informative Missing

**구문:** obj = Fit Model(...Informative Missing( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 결측값 대치 및 코딩을 가능하게 합니다. 이 옵션을 선택하지 않으면 결측값이 있는 행이 무시됩니다.



연속형 변수의 경우 결측값은 변수의 평균으로 대치됩니다. 또한 결측 표시 변수가 생성되어 모형에 포함됩니다.



범주형 변수의 경우에는 결측값이 대치되지 않고 모형에 있는 해당 변수의 다른 수준으로 처리됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[3] = dt:age[2] = .;
dt << Fit Model(
	Y( :weight ),
	Effects( :height, :age ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Keep dialog open

**구문:** obj &lt;&lt; Keep dialog open( state=0|1 )

**설명:** 지정된 모형이 실행된 후 모형 적합 시작 창을 계속 열어 둘지 아니면 닫을지 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Keep dialog open( 1 ),
	Run
);

```

#### Link Function

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형의 연결 함수를 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Max Iterations

**구문:** obj = Fit Model(...Personality( "Partial Least Squares" ), Max Iterations( number=1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 알고리즘에 사용되는 최대 반복 수를 지정합니다. 결측값의 현재 추정값과 이전 추정값 사이의 최대 차이가 10^-8로 제한되면 알고리즘이 종료됩니다. 부분 최소 제곱 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 5 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Maximum Iterations

**구문:** obj = Fit Model(...Maximum Iterations( number=100 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형 적합에 사용되는 최대 반복 수를 지정합니다. 기본값은 100입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**구문:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 표준 최소 제곱 분석법에서 혼합 모형 적합에 사용되는 방법을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### No Intercept

**구문:** obj = Fit Model(...No Intercept( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형에 대한 절편을 0으로 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	No Intercept( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### NoBounds

**구문:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 분산 추정에 대한 제한을 제거합니다. 이 옵션을 선택하지 않으면 분산 추정 하한이 0으로 설정됩니다. 표준 최소 제곱 분석법에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### Nominal Coding

**구문:** obj = Fit Model(...Nominal Coding( "Average Level" | "Last Level" )...)

**설명:** 명목형 효과 코딩으로 수준 간 평균과의 차이를 추정할지(기본값) 아니면 마지막 수준과의 차이를 추정할지 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Production.jmp" );
dt << Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size, :Blend Time, :Blend Speed, :Compressor, :Coating Viscosity, :Spray Rate
	),
	Personality( "Standard Least Squares" ),
	Nominal Coding( "Last Level" ),
	Emphasis( "Effect Leverage" ),
	Run
);

```

#### Overdispersion Tests and Intervals

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형에 과대산포 모수를 포함하도록 지정합니다. 일반화 선형 모형 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Personality

**구문:** obj = Fit Model(...Personality( "Standard Least Sqaures" | "Stepwise" | "Generalized Regression" | "Mixed Model" | "Generalized Linear Mixed Model" | "Manova" | "Loglinear Variance" | "Nominal Logistic" | "Ordinal Logistic" | "Proportional Hazard" | "Parametric Survival" | "Generalized Linear Model" | "Partial Least Squares" | "Response Screening" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형을 적합시키는 데 사용되는 분석 유형을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model( Y( :ABRASION ), Effects( :SILICA, :SILANE ), Personality( "Standard Least Squares" ) );
obj << Run Model;

```

#### Power Link Parameter

**구문:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 멱 연결 함수의 모수를 지정합니다. 일반화 선형 모형 분석법에서 &apos;멱&apos; 연결 함수를 지정한 경우에만 사용할 수 있습니다. 기본값은 "1"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Quantile

**구문:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( "Quantile Regression" ), Quantile( q=0.5 )...)

**설명:** 모델링할 반응의 분위수를 지정합니다. 일반화 회귀 분석법에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Quantile Regression" ),
	Quantile( 0.75 ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ), Profiler( 1 ) ) )
);

```

#### Results in Data Tables

**구문:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**설명:** 여러 반응에 대한 개별 모형 결과를 데이터 테이블에 저장합니다. 출력 데이터 테이블의 내용과 개수는 적합되는 모형에 따라 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam, :solvent type,
		:type on cylinder, :press type, :unit number, :cylinder size, :paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Robust Fit

**구문:** obj = Fit Model(...Personality( "Response Screening" ), Robust Fit( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 이상치 비중을 줄이는 로버스트(Huber) 추정을 사용합니다. 이상치가 없으면 이러한 추정값은 최소 제곱 추정값에 가깝습니다. 반응 변수 선별 분석법에만 사용할 수 있습니다. 이 메시지는 모형 적합 시작 창의 &apos;로버스트 적합&apos; 옵션에 해당합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Robust Fit( 1 ),
	Run
);

```

#### Run

**구문:** obj = Fit Model(...Run( &lt;options&gt; )...);obj &lt;&lt; Run( &lt;options&gt; )

**설명:** 모형 적합 시작 창에 지정된 모형을 실행한 후 시작 창을 닫습니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model( Y( :ABRASION ), Effects( :SILICA, :SILANE ), Personality( "Standard Least Squares" ) );
obj << Run;

```

#### Run Model

**구문:** obj &lt;&lt; Run Model

**설명:** 모형 적합 시작 창에 지정된 모형을 실행하고 시작 창을 열어 둡니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model( Y( :ABRASION ), Effects( :SILICA, :SILANE ), Personality( "Standard Least Squares" ) );
obj << Run Model;

```

#### Save to Data Table

**구문:** obj &lt;&lt; Save to Data Table

**설명:** 모형을 JSL로 현재 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model( Y( :ABRASION ), Effects( :SILICA, :SILANE ), Personality( "Standard Least Squares" ) );
obj << Save to DataTable;

```

#### Save to Script Window

**구문:** obj &lt;&lt; Save to Script Window

**설명:** 모형을 JSL로 스크립트 창에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model( Y( :ABRASION ), Effects( :SILICA, :SILANE ), Personality( "Standard Least Squares" ) );
obj << Save to Script Window;

```

#### Scaling

**구문:** obj = Fit Model(...Personality( "Partial Least Squares" ), Scaling( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 각 열을 표준편차로 나누어 모든 반응 변수와 모형 효과를 척도 조정합니다. 부분 최소 제곱 분석법에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Scaling( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Set Alpha Level

**구문:** obj = Fit Model(...Set Alpha Level( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형 보고서에서 신뢰 구간의 유의 수준을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Set Alpha Level( 0.01 ),
	Run
);

```

#### Standardize X

**구문:** obj = Fit Model(...Personality( "Partial Least Squares" ), Standardize X( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 모형 효과 생성에 사용되는 모든 열을 중앙에 맞추고 척도를 조정합니다. 이 옵션을 선택하지 않으면 원래 데이터 테이블 열을 사용하여 고차원 효과가 구성됩니다. 그런 다음 선택한 중심화 및 척도화 옵션에 따라 각각의 고차원 효과를 중앙에 맞추거나 척도를 조정합니다. X 표준화를 지정하면 Y 변수를 중앙에 맞추거나 척도 조정하지 않습니다. 부분 최소 제곱 분석법에만 사용할 수 있습니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Standardize X( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Subgroup Twoway

**구문:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) ), Subgroup Twoway( state=0|1 )...)

**설명:** 모든 이원 부분군 조합을 적합시킵니다. 이 옵션은 반응 변수 선별 분석법에서 하나 이상의 부분군 변수가 정의된 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Suppress Coding

**구문:** obj = Fit Model(...Suppress Coding( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 원래 척도에 대한 추정값이 되도록 코딩 열 특성을 제한합니다. 코딩 열 특성을 사용하면 추정값을 더 쉽게 비교할 수 있으며 저차 효과 검정을 의미 있게 만들 수 있습니다. 필요한 경우 외에는 코딩 제한 옵션을 사용하지 않는 것이 좋습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur, :Silane ),
	Suppress Coding( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Suppress Reports

**구문:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**설명:** 개별 모형 보고서를 숨기도록 지정합니다. 반응이 수천 개일 때 이 옵션을 사용하면 계산 시간이 단축됩니다. 적합 개체 및 일부 메뉴 항목은 계속 사용할 수 있습니다. 모형 보고서의 결과를 수집하려면 "결과를 데이터 테이블에 저장" 옵션을 사용하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam, :solvent type,
		:type on cylinder, :press type, :unit number, :cylinder size, :paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Suppress Warning for Missing Effects

**구문:** obj = Fit Model(...Suppress Warning for Missing Effects( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 고차 효과에 내재된 저차 효과가 모형에 없다는 경고를 표시하지 않습니다. 이 옵션은 많은 부분집합 모형으로 실험할 때 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur * :Silane ),
	Suppress Warning for Missing Effects( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Target Level

**구문:** obj = Fit Model(...Target Level( level )...)

**설명:** 확률을 모델링할 수준을 지정합니다. 기본값은 수준 순서에 따라 두 수준 중 더 높은 값입니다. 특정 분석법에서 Y가 이항 변수이고 모델링 유형이 명목형인 경우에만 사용할 수 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Target Level( "Cured" ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

