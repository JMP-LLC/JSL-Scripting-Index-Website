# Partition Platform



## 연결된 생성자

### Partition

**구문:** Partition( Y( column ), X( columns ) )

**설명:** 예측 변수와 반응 값 사이의 관계에 따라 데이터를 재귀적으로 분할하여 의사 결정 나무를 생성합니다. 반응과 예측 변수는 모두 연속형이거나 모두 범주형일 수 있습니다.

#### 예제 1

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);

```

#### 예제 2

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 2 );

```

## 항목 메시지

### Method

**구문:** Method( "Decision Tree" )&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 데이터 분할에 사용되는 방법을 지정합니다. 의사 결정 나무가 기본값입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );

```

## Decision Tree

### 공유 항목 메시지

#### Action

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

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

**이름으로 검색**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

**익명 사전 설정**

```jsl

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

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder( Variables( Subgroup( :DAY ), Y( :DIAMETER ) ), By( :OPERATOR ) );
objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**구문:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**설명:** 플랫폼 변수를 변경하기 위한 제어판을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );

```

#### Copy ByGroup Script

**구문:** obj &lt;&lt; Copy ByGroup Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**구문:** obj &lt;&lt; Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Copy Script;

```

#### Data Table Window

**구문:** obj &lt;&lt; Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Data Table Window;

```

#### Get By Levels

**구문:** obj &lt;&lt; Get By Levels

**설명:** 기준 그룹 열을 값에 매핑하는 연관 배열을 반환합니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**구문:** obj &lt;&lt; Get ByGroup Script

**설명:** 이 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

**구문:** obj &lt;&lt; Get Container

**설명:** 개체의 콘텐츠를 담고 있는 컨테이너 상자에 대한 참조를 반환합니다.

**일반**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

**필터 사용 플랫폼**

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

#### Get Data Table

**구문:** obj &lt;&lt; Get Data Table

**설명:** 데이터 테이블에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

**구문:** obj &lt;&lt; Get Group Platform

**설명:** 이 플랫폼이 그룹의 일부인 경우 그룹 플랫폼 개체를 반환하고, 그렇지 않은 경우 Empty()를 반환합니다.

```jsl

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**구문:** obj &lt;&lt; Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**구문:** obj &lt;&lt; Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**구문:** obj &lt;&lt; Get Web Support

**설명:** 표시 개체에 대한 대화식 HTML 지원 수준을 나타내는 숫자를 반환합니다. 1은 일부 또는 모든 요소가 지원됨을 의미하고 0은 지원되지 않음을 의미합니다.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**구문:** obj &lt;&lt; Redo Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**구문:** obj &lt;&lt; Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**구문:** obj &lt;&lt; Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**구문:** obj &lt;&lt; Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 플랫폼에 추가된 가장 최근 열 전환기를 제거합니다.

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**구문:** obj &lt;&lt; Report;Report( obj )

**설명:** 보고서 개체에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**구문:** obj &lt;&lt; Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**구문:** obj &lt;&lt; Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**구문:** obj &lt;&lt; Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**구문:** obj &lt;&lt; Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**구문:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**구문:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**구문:** obj &lt;&lt; Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Journal;

```

#### Save Script to Report

**구문:** obj &lt;&lt; Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Report;

```

#### Save Script to Script Window

**구문:** obj &lt;&lt; Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

**구문:** obj &lt;&lt; Sync to Data Table Changes

**설명:** 제외 항목 및 데이터 변경 사항과 동기화합니다.

```jsl

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

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Title( "My Platform" );

```

#### Top Report

**구문:** obj &lt;&lt; Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**구문:** obj = Decision Tree(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

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

### 연결된 생성자

#### Decision Tree

**구문:** Partition(Y( column ), X( columns ), Method( "Decision Tree" ))

**설명:** 데이터를 재귀적으로 분할하여 반응을 예측합니다. 분류 및 회귀 트리라고도 합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### 열

#### By

**구문:** obj &lt;&lt; By( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), By( _bycol ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	By( _bycol )
);
obj << Split Best( 2 );

```

#### Factor

**구문:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Freq

**구문:** obj &lt;&lt; Freq( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Freq( _freqcol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	Freq( _freqcol )
);
obj << Split Best( 2 );

```

#### Response

**구문:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Validation

**구문:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Weight

**구문:** obj &lt;&lt; Weight( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
dt << Make Validation Column(
	Training Set( .5 ),
	Validation Set( .3 ),
	Test Set( .2 ),
	Weight( _weightcol ),
	Go
);
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation ),
	Weight( _weightcol )
);
obj << Split Best( 2 );

```

#### X

**구문:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

#### Y

**구문:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );

```

### 항목 메시지

#### Color Points

**구문:** obj &lt;&lt; Color Points

**설명:** 해당 분류에 따라 점에 색상을 적용합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Color Points;

```

#### Column Contributions

**구문:** obj &lt;&lt; Column Contributions( state=0|1 )

**설명:** 각 입력 열 및 적합에 대한 해당 열의 기여도가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Column Contributions( 1 );

```

#### Decision Threshold

**구문:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**설명:** 각 모형에 대한 적합 확률 분포와 실제값 대 예측값 테이블을 표시하거나 숨깁니다. 확률 임계를 변경하여 임계값에 따라 분류 결과에 어떤 영향이 있는지 탐색할 수 있습니다.

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose )
);
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Decision Threshold( 1 );

```

#### Get Average Absolute Error Test

**구문:** obj &lt;&lt; Get Average Absolute Error Test

**설명:** 테스트 데이터 집합의 평균 절대 편차 통계량을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Test;
Show( aabs );

```

#### Get Average Absolute Error Training

**구문:** obj &lt;&lt; Get Average Absolute Error Training

**설명:** 훈련 데이터 집합의 평균 절대 편차 통계량을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Training;
Show( aabs );

```

#### Get Average Absolute Error Validation

**구문:** obj &lt;&lt; Get Average Absolute Error Validation

**설명:** 검증 데이터 집합의 평균 절대 편차 통계량을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
aabs = obj << Get Average Absolute Error Validation;
Show( aabs );

```

#### Get Average Log Error Test

**구문:** obj &lt;&lt; Get Average Log Error Test

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 테스트 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Test;
Show( avg );

```

#### Get Average Log Error Training

**구문:** obj &lt;&lt; Get Average Log Error Training

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 훈련 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Training;
Show( avg );

```

#### Get Average Log Error Validation

**구문:** obj &lt;&lt; Get Average Log Error Validation

**설명:** -log(p)의 평균을 반환합니다. 여기서 p는 검증 데이터 집합에 대해 반응이 실제로 발생한 모형에 기인하는 반응의 확률과 동일합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
avg = obj << Get Average Log Error Validation;
Show( avg );

```

#### Get Confusion Matrix Test

**구문:** obj &lt;&lt; Get Confusion Matrix Test

**설명:** 테스트 데이터 집합에 대한 혼동 행렬을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Test;
Show( cm );

```

#### Get Confusion Matrix Training

**구문:** obj &lt;&lt; Get Confusion Matrix Training

**설명:** 훈련 데이터 집합에 대한 혼동 행렬을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Training;
Show( cm );

```

#### Get Confusion Matrix Validation

**구문:** obj &lt;&lt; Get Confusion Matrix Validation

**설명:** 검증 데이터 집합에 대한 혼동 행렬을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cm = obj << Get Confusion Matrix Validation;
Show( cm );

```

#### Get Confusion Rates Test

**구문:** obj &lt;&lt; Get Confusion Rates Test

**설명:** 테스트 데이터 집합에 대한 혼동 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Test;
Show( cr );

```

#### Get Confusion Rates Training

**구문:** obj &lt;&lt; Get Confusion Rates Training

**설명:** 훈련 데이터 집합에 대한 혼동 비율을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Training;
Show( cr );

```

#### Get Confusion Rates Validation

**구문:** obj &lt;&lt; Get Confusion Rates Validation

**설명:** 검증 데이터 집합에 대한 혼동 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
cr = obj << Get Confusion Rates Validation;
Show( cr );

```

#### Get Gen RSquare Test

**구문:** obj &lt;&lt; Get Gen RSquare Test

**설명:** 테스트 데이터 집합에 대한 일반화 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Test;
Show( r );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Test;
Show( r );

```

#### Get Gen RSquare Training

**구문:** obj &lt;&lt; Get Gen RSquare Training

**설명:** 훈련 데이터 집합에 대한 일반화 R²을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Training;
Show( r );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Training;
Show( r );

```

#### Get Gen RSquare Validation

**구문:** obj &lt;&lt; Get Gen RSquare Validation

**설명:** 검증 데이터 집합에 대한 일반화 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :sex ),
	X( :marital status, :age, :country, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation( :Validation ),
	Go
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
r = obj << Get Gen RSquare Validation;
Show( r );

```

#### Get MM SAS DATA Step

**구문:** obj &lt;&lt; Get MM SAS DATA Step

**설명:** SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성한 후 로그 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get MM SAS Data Step;

```

#### Get MM Tolerant SAS DATA Step

**구문:** obj &lt;&lt; Get MM Tolerant SAS DATA Step

**설명:** 결측값을 포함하는 데이터에 대해 SAS 모형 관리자에 등록할 수 있는 SAS 코드를 생성한 후 로그 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get MM Tolerant SAS Data Step;

```

#### Get Measures

**구문:** obj &lt;&lt; Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Measures;

```

#### Get Microseconds

**구문:** obj &lt;&lt; Get Microseconds

**설명:** 분석을 완료하는 데 사용된 시간(마이크로초)을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
time = obj << Get Microseconds;
Show( time );

```

#### Get Misclassification Rate Test

**구문:** obj &lt;&lt; Get Misclassification Rate Test

**설명:** 테스트 데이터 집합에 대한 오분류 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt << Make Validation Column(
	Training Set( .6 ),
	Validation Set( .2 ),
	Test Set( .2 ),
	New Column Name( "Valid1" ),
	Go
);
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Valid1 ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Test;
Show( rate );

```

#### Get Misclassification Rate Training

**구문:** obj &lt;&lt; Get Misclassification Rate Training

**설명:** 훈련 데이터 집합에 대한 오분류 비율을 반환합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Training;
Show( rate );

```

#### Get Misclassification Rate Validation

**구문:** obj &lt;&lt; Get Misclassification Rate Validation

**설명:** 검증 데이터 집합에 대한 오분류 비율을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Method( "Decision Tree" ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	validation( :Holdback1 ),
	Go
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation( :Validation ),
	Split Best( 2 )
);
rate = obj << Get Misclassification Rate Validation;
Show( rate );

```

#### Get Precision Recall Area Test

**구문:** obj &lt;&lt; Get Precision Recall Area Test

**설명:** 테스트 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Test;
Show( area );

```

#### Get Precision Recall Area Training

**구문:** obj &lt;&lt; Get Precision Recall Area Training

**설명:** 훈련 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Training;
Show( area );

```

#### Get Precision Recall Area Validation

**구문:** obj &lt;&lt; Get Precision Recall Area Validation

**설명:** 검증 데이터 집합에 대한 정밀도-재현율 곡선 아래 면적을 반환합니다. 면적을 계산하려면 정밀도-재현율 곡선이 표시되어 있어야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << Precision Recall Curve;
area = obj << Get Precision Recall Area Validation;
Show( area );

```

#### Get Prediction Formula

**구문:** obj &lt;&lt; Get Prediction Formula

**설명:** 예측 계산식 열을 생성하는 스크립트를 생성하여 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Prediction Formula;

```

#### Get RMS Error Test

**구문:** obj &lt;&lt; Get RMS Error Test

**설명:** 테스트 오차에 대한 평균 제곱의 제곱근을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Test;
Show( rms );

```

#### Get RMS Error Training

**구문:** obj &lt;&lt; Get RMS Error Training

**설명:** 훈련 오차에 대한 평균 제곱의 제곱근을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Training;
Show( rms );

```

#### Get RMS Error Validation

**구문:** obj &lt;&lt; Get RMS Error Validation

**설명:** 검증 오차에 대한 평균 제곱의 제곱근을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
rms = obj << Get RMS Error Validation;
Show( rms );

```

#### Get ROC Area Test

**구문:** obj &lt;&lt; Get ROC Area Test

**설명:** 테스트 데이터의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation( :Validation 2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Test;
Show( area );

```

#### Get ROC Area Training

**구문:** obj &lt;&lt; Get ROC Area Training

**설명:** 훈련 데이터 집합의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 2 )
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Go
);
obj << Show Tree( 0 );
obj << ROC Curve;
area = obj << Get ROC Area Training;
Show( area );

```

#### Get ROC Area Validation

**구문:** obj &lt;&lt; Get ROC Area Validation

**설명:** 검증 데이터 집합의 ROC(Receiver Operator Characteristic) 곡선 아래 면적을 반환합니다. 면적을 계산하기 전에 ROC 곡선을 표시해야 합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Method( "Decision Tree" ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Validation Portion( 0.2 ),
	Go
);
obj << ROC Curve;
area = obj << Get ROC Area Validation;
Show( area );

```

#### Get RSquare Test

**구문:** obj &lt;&lt; Get RSquare Test

**설명:** 테스트 데이터 집합에 대한 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Test;
Show( r );

```

#### Get RSquare Training

**구문:** obj &lt;&lt; Get RSquare Training

**설명:** 훈련 데이터 집합에 대한 R²을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Training;
Show( r );

```

#### Get RSquare Validation

**구문:** obj &lt;&lt; Get RSquare Validation

**설명:** 검증 데이터 집합에 대한 R²을 반환합니다. 검증 데이터 집합을 사용하는 경우에만 가능합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
r = obj << Get RSquare Validation;
Show( r );

```

#### Get SAS DATA Step

**구문:** obj &lt;&lt; Get SAS DATA Step

**설명:** 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 로그 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get SAS Data Step;

```

#### Get Seconds

**구문:** obj &lt;&lt; Get Seconds

**설명:** 분석을 완료하는 데 사용된 시간(초)을 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
time = obj << Get Seconds;
Show( time );

```

#### Get Tolerant Prediction Formula

**구문:** obj &lt;&lt; Get Tolerant Prediction Formula

**설명:** 허용 예측 계산식 열을 생성하기 위한 스크립트를 생성한 후 로그 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Get Tolerant Prediction Formula;

```

#### Get Tolerant SAS DATA Step

**구문:** obj &lt;&lt; Get Tolerant SAS DATA Step

**설명:** 결측값을 포함하는 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 로그 창에 반환합니다. 결측값은 트리 분지에 무작위로 할당됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
code = obj << Get Tolerant SAS Data Step;

```

#### Go

**구문:** obj &lt;&lt; Go

**설명:** K 폴드 교차 검증이 선택된 후 반복을 시작합니다. JMP Pro를 사용하는 경우 Go는 검증 열이 지정된 후 반복을 시작합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << K Fold Crossvalidation( 5 );
obj << Go;

```

#### Informative Missing

**구문:** obj = Decision Tree(...Informative Missing( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 범주형 변수의 경우 결측값을 범주로 처리합니다. 연속형 변수의 경우 결측값을 낮음 또는 높음으로 처리합니다(둘 중 더 적합한 것으로). 기본적으로 설정되어 있습니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );
obj << Split Best( 1 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:age[3] = .;
obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
dt:Age[3] = .;
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Informative Missing( 0 ),
	Split Best( 3 )
);

```

#### Initial Splits

**구문:** obj = Partition(...Initial Splits( condition, {left condition}, {right condition} )...)

**설명:** 수행되는 분할에 대해 설명합니다. condition 인수는 첫 번째 분할의 왼쪽을 지정합니다. {left condition} 및 {right condition} 인수는 각 측의 분할을 지정하며 이 형식은 원하는 분할 수에 대해 재귀적으로 계속됩니다. 왼쪽이 아니라 오른쪽에 분할을 지정하려면 왼쪽 인수를 빈 목록으로 할당합니다. 오른쪽이 아니라 왼쪽에 분할을 지정하려면 오른쪽 인수를 생략합니다.

**예제 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"} )
);

```

**예제 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}, {:age >= 25}} )
);

```

**예제 3**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Initial Splits( :size == {"Large"}, {:type == {"Family", "Sporty"}} )
);

```

#### K Fold Crossvalidation

**구문:** obj &lt;&lt; K Fold Crossvalidation

**설명:** 더 이상 사용되지 않는 기능입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ), Split Best( 2 ) );
obj << K Fold Crossvalidation( 5 );

```

#### Leaf Report

**구문:** obj &lt;&lt; Leaf Report( state=0|1 )

**설명:** 잎 노드의 평균 및 개수(연속형 반응) 또는 반응률 및 개수(범주형 반응)가 포함된 보고서를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Leaf Report( 1 );

```

#### Lift Curve

**구문:** obj &lt;&lt; Lift Curve( state=0|1 )

**설명:** 향상도 곡선 그림을 표시하거나 숨깁니다. 향상도 곡선은 향상도 대 관측값 비율을 표시하고 모형의 예측 능력에 대한 또 다른 보기를 제공합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Lift Curve( 1 );

```

#### Lock Columns

**구문:** obj &lt;&lt; Lock Columns( state=0|1, columns )

**설명:** 지정된 열을 잠가 분할에 사용되지 않도록 합니다.

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Lock Columns( 1, :age, :size );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Lock Columns( 1, :Age, :Hair Color );
(obj << report)[CheckboxBox( 1 )] << Select;
Wait( .5 );
obj << Lock Columns( 0 );
Wait( .5 );
obj << Lock Columns( 1 );

```

#### Make SAS DATA Step

**구문:** obj &lt;&lt; Make SAS DATA Step

**설명:** 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 스크립트 창에 반환합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Make SAS Data Step;

```

#### Make Tolerant SAS DATA Step

**구문:** obj &lt;&lt; Make Tolerant SAS DATA Step

**설명:** 결측값을 포함하는 데이터를 스코어링하기 위한 SAS DATA 스텝을 생성한 후 스크립트 창에 반환합니다. 결측값은 트리 분지에 무작위로 할당됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Make Tolerant SAS Data Step;

```

#### Method

**구문:** Method( "Decision Tree" )&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 데이터 분할에 사용되는 방법을 지정합니다. 의사 결정 나무가 기본값입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" )
);
obj << Split Best( 2 );

```

#### Minimum Size Split

**구문:** obj &lt;&lt; Minimum Size Split( number )

**설명:** 그룹을 분할할지 여부를 결정할 때의 최소 그룹 크기를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Minimum Size Split( 15 );
obj << Split Best( 4 );

```

#### Missing Value Order

**구문:** Missing Value Order( Low(list of numeric columns),High(list of numeric columns))

**설명:** 결측값을 낮음으로 처리할지 아니면 높음으로 처리할지 지정합니다.

**JMP추가된 버전:** 16

#### Multithreading

**구문:** Multithreading( state=0|1 )

**설명:** 계산을 컴퓨터의 사용 가능한 스레드 간에 분산합니다. 기본적으로 설정되어 있습니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Split Best( 2 )
);

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Multithreading( 1 ),
	Go
);

```

#### Ordinal Restricts Order

**구문:** obj = Decision Tree(...Ordinal Restricts Order( state=0|1 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 순서형 열의 경우 순서를 유지하는 분할만 고려합니다. 기본적으로 설정되어 있습니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );
obj << Split Best( 3 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Ordinal Restricts Order( 1 ),
	Split Best( 2 )
);

```

#### Plot Actual by Predicted

**구문:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**설명:** X 축에 예측값이 있고 Y 축에 실제값이 있는 훈련 데이터를 사용하여 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Split Best( 3 )
);
obj << Plot Actual By Predicted;

```

#### Precision Recall Curve

**구문:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 곡선을 포함하는 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Precision Recall Curve( 1 );

```

#### Profiler

**구문:** obj &lt;&lt; Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Profiler( 1 );

```

#### Prune Worst

**구문:** obj &lt;&lt; Prune Worst

**설명:** 최소 판별 능력이 있는 최종 분할을 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Prune Worst;
Wait( .5 );
obj << Prune Worst;

```

#### Publish Prediction Formula

**구문:** obj &lt;&lt; Publish Prediction Formula

**설명:** 예측 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Publish Prediction Formula;

```

#### Publish Tolerant Prediction Formula

**구문:** obj &lt;&lt; Publish Tolerant Prediction Formula

**설명:** 결측값이 있는 경우에도 예측하는 예측 계산식을 생성하여 계산식 저장소에 계산식 열 스크립트로 게시합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Publish Tolerant Prediction Formula;

```

#### ROC Curve

**구문:** obj &lt;&lt; ROC Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다. 검증을 사용한 경우 훈련 데이터 집합, 검증 데이터 집합 및 테스트 데이터 집합에 대해 각각 그림이 표시됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << ROC Curve( 1 );

```

#### Save Leaf Label Formula

**구문:** obj &lt;&lt; Save Leaf Label Formula

**설명:** 잎 라벨 계산식을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Label Formula;

```

#### Save Leaf Labels

**구문:** obj &lt;&lt; Save Leaf Labels

**설명:** 잎 라벨을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Labels;

```

#### Save Leaf Number Formula

**구문:** obj &lt;&lt; Save Leaf Number Formula

**설명:** 잎 번호 계산식을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Number Formula;

```

#### Save Leaf Numbers

**구문:** obj &lt;&lt; Save Leaf Numbers

**설명:** 잎 번호를 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Leaf Numbers;

```

#### Save Predicteds

**구문:** obj &lt;&lt; Save Predicteds

**설명:** 예측값을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Predicteds;

```

#### Save Prediction Formula

**구문:** obj &lt;&lt; Save Prediction Formula

**설명:** 예측 계산식을 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Prediction Formula;

```

#### Save Residuals

**구문:** obj &lt;&lt; Save Residuals

**설명:** 잔차를 데이터 테이블의 새 열에 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Residuals;

```

#### Save Tolerant Prediction Formula

**구문:** obj &lt;&lt; Save Tolerant Prediction Formula

**설명:** 데이터 테이블의 새 열에 결측값이 있는 경우에도 예측하는 계산식을 저장합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Save Tolerant Prediction Formula;

```

#### Set Random Seed

**구문:** obj &lt;&lt; Set Random Seed( number )

**설명:** 이후 플랫폼 실행에 대한 결과를 재현하는 데 사용할 난수 시드값을 지정합니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Boosted Tree(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Partition(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Bootstrap Forest(
	Y( :Y Binary ),
	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Set Random Seed( 1234 ),
	Go
);

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Set Random Seed( 1234 ),
	Split Best( 2 )
);

```

#### Show Fit Details

**구문:** obj &lt;&lt; Show Fit Details( state=0|1 )

**설명:** 보고서를 모든 측정값에 대한 정의, 오분류 비율 및 혼동 행렬과 함께 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Show Fit Details( 1 );

```

#### Show Graph

**구문:** obj &lt;&lt; Show Graph( state=0|1 )

**설명:** 분할 그래프를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowGraph( 0 );
Wait( .5 );
obj << ShowGraph( 1 );

```

#### Show Points

**구문:** obj &lt;&lt; Show Points( state=0|1 )

**설명:** 분할 그래프에 점(1 또는 on) 또는 색상 패널(0 또는 off)을 표시합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowPoints( 0 );
Wait( .5 );
obj << ShowPoints( 1 );

```

#### Show Split Bar

**구문:** obj &lt;&lt; Show Split Bar( state=0|1 )

**설명:** 각 잎의 분할 비율을 나타내는 색상 막대를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Bar( 0 );
Wait( .5 );
obj << Show Split Bar( 1 );

```

#### Show Split Candidates

**구문:** obj &lt;&lt; Show Split Candidates( state=0|1 )

**설명:** 최종 분할에서 후보 보고서를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Candidates( 1 );
(obj << Report)["Candidates"] << Close( 0 ) << select;

```

#### Show Split Count

**구문:** obj &lt;&lt; Show Split Count( state=0|1 )

**설명:** 각 트리 노드의 각 수준에 대한 반응 총계를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Count( 0 );
Wait( .5 );
obj << Show Split Count( 1 );

```

#### Show Split Prob

**구문:** obj &lt;&lt; Show Split Prob( state=0|1 )

**설명:** 각 트리 노드의 각 수준에 대한 반응률을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Prob( 0 );
Wait( .5 );
obj << Show Split Prob( 1 );

```

#### Show Split Stats

**구문:** obj &lt;&lt; Show Split Stats( state=0|1 )

**설명:** 개수 및 분할 통계량을 표시하거나 숨깁니다. 표시된 통계량은 G² 또는 평균과 표준편차를 포함합니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Show Split Stats( 0 );
Wait( .5 );
obj << Show Split Stats( 1 );

```

#### Show Tree

**구문:** obj &lt;&lt; Show Tree( state=0|1 )

**설명:** 분할 정보와 함께 트리 구조를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << ShowTree( 1 );

```

#### Small Tree View

**구문:** obj &lt;&lt; Small Tree View( state=0|1 )

**설명:** 분할 그래프 오른쪽에 소형 버전의 분할 트리를 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
obj << Small Tree View( 1 );

```

#### Sort Split Candidates

**구문:** obj &lt;&lt; Sort Split Candidates( state=0|1 )

**설명:** 유의도를 기준으로 후보를 정렬합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Method( "Decision Tree" ),
	Validation( :Validation )
);
obj << Split Best( 2 );
(obj << Report)["Candidates"] << Close( 0 ) << select;
Wait( 1 );
obj << Sort Split Candidates;

```

#### Specify Profit Matrix

**구문:** obj &lt;&lt; Specify Profit Matrix

**설명:** 올바르거나 올바르지 않은 분류 결정과 관련된 수익 또는 비용을 지정할 수 있습니다.

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :marital status ),
	X( :sex, :age, :country, :type, :size ),
	Split Best( 3 ),
	Specify Profit Matrix( [0 -1, -1 0, . .], "Married", "Single", "Undecided" ),
	Show Fit Details( 1 )
);

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Split Best( 2 ),
	Specify Profit Matrix( [0 -1, -1 0, . .], "Yes", "No", "Undecided" ),
	Show Fit Details( 1 )
);

```

#### Split Best

**구문:** obj &lt;&lt; Split Best( &lt;number of splits&gt; )

**설명:** 트리를 최적 분할 지점에서 분할합니다.

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best;
Wait( .5 );
obj << Split Best( 2 );

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best;
Wait( 1 );
obj << Split Best( 2 );

```

#### Split History

**구문:** obj &lt;&lt; Split History( state=0|1 )

**설명:** 각 분할을 X 축에 나타내고 모형에 대한 해당 R² 값을 Y 축에 나타내는 그래프를 표시하거나 숨깁니다.

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 5 );
obj << Show Tree( 0 );
obj << Split History;

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion )
);
obj << Split Best( 2 );
obj << Show Tree( 0 );
obj << Split History;

```

#### Tree 3D

**구문:** obj &lt;&lt; Tree 3D( state=0|1 )

**설명:** 트리 구조의 3D 그림을 표시하거나 숨깁니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );
obj << Split Best( 14 );
obj << Show Tree( 0 );
obj << Tree 3D( 1 );

```

#### Use Excluded Rows for Validation

**구문:** obj = Decision Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**설명:** 데이터 테이블의 제외된 행을 사용하여 검증 데이터 집합을 생성합니다. 이 옵션은 표준 JMP를 사용 중이고 제외된 행이 있는 경우에만 시작 창에 나타납니다.

**JMP추가된 버전:** 15

<b>실행기 항목: 예</b>

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Boosted Tree(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Partition(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 )
);
obj << Split Best( 5 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Bootstrap Forest(
	Y( :Y ),
	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Use Excluded Rows for Validation( 1 ),
	Go
);

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Use Excluded Rows for Validation( 1 ),
	Split Best( 2 )
);

```

#### Validation Portion

**구문:** obj = Decision Tree(...Validation Portion( fraction=0 )...)&lt;b&gt;실행기 항목: 예&lt;/b&gt;

**설명:** 무작위로 행을 선택하여 검증 데이터 집합을 구성합니다. 각 행이 선택될 확률은 p(분수)입니다. 기본값은 "0"입니다.

**부스티드 트리 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Boosted Tree(
	Y( :marital status ),
	X( :sex, :country, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**분할 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Partition(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 )
);
obj << Split Best( 2 );

```

**붓스트랩 포레스트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Bootstrap Forest(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 ),
	Go
);

```

**업리프트 예제**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );
obj = dt << Uplift(
	Y( :Purchase ),
	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),
	Treatment( :Promotion ),
	Validation Portion( 0.2 ),
	Go
);

```

