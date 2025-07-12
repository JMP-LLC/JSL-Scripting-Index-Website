# Discriminant



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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**구문:** obj << Report View( "전체"|"요약" )

**설명:** 보고서 보기는 플랫폼 보고서에 표시되는 상세 수준을 결정합니다. Full은 모든 상세 정보를 표시하고 Summary는 플랫폼에 따라 선택된 콘텐츠만 표시합니다. 사용자 정의된 동작의 경우 표시 상자는 <<Set Summary Behavior 메시지를 지원합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
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

**구문:** obj = Discriminant(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Discriminant

**구문:** Discriminant( Y( columns ), X( columns ) )

**설명:** Mahalanobis 거리를 사용하여 각 관측값부터 각 그룹의 다변량 평균(중심)까지의 거리를 추정합니다. 그런 다음에는 관측값이 가장 가까운 그룹으로 분류됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## 열

### By

**구문:** obj = Discriminant(...<By( column(s) )>...)

<b>실행기 항목: 예</b>

**설명:** 지정된 열의 각 수준에 대해 별도의 분석을 수행합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	By( _bycol )
);

```

### Categories

**구문:** obj = Discriminant(...Categories( column )...)

<b>실행기 항목: 예</b>

**설명:** 관측값을 분류할 범주 또는 그룹을 포함하는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Covariates

**구문:** obj = Discriminant(...Covariates( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 관측값을 범주로 분류하는 데 사용되는 연속형 변수를 포함하는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Freq

**구문:** obj = Discriminant(...<Freq( column )>...)

<b>실행기 항목: 예</b>

**설명:** 분석을 위해 각 행에 빈도를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Freq( _freqcol )
);

```

### Validation

**구문:** obj = Discriminant(...<Validation( column )>...)

<b>실행기 항목: 예</b>

**설명:** 검증 데이터 집합을 정의하는 숫자 열을 지정합니다. 이 열에는 최대 세 개의 구분되는 값이 포함되어야 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
obj = dt << Discriminant(
	X( :Severity ),
	Validation( :Validation ),
	Y( :BMI, :Age, :Time ),
	Use Matrix Columns( 1 )
);

```

### Weight

**구문:** obj = Discriminant(...<Weight( column )>...)

<b>실행기 항목: 예</b>

**설명:** 분석을 위해 각 행에 가중치를 할당하는 값이 들어 있는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Weight( _weightcol )
);

```

### X

**구문:** obj = Discriminant(...X( column )...)

<b>실행기 항목: 예</b>

**설명:** 관측값을 분류할 범주 또는 그룹을 포함하는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

### Y

**구문:** obj = Discriminant(...Y( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 관측값을 범주로 분류하는 데 사용되는 연속형 변수를 포함하는 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );

```

## 항목 메시지

### Apply This Model

**구문:** obj << Apply This Model

**설명:** 단계별 변수 선택에서 현재 선택된 변수를 모형에 적용하고 대화상자를 닫습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;
Wait( 2 );
obj << Apply This Model;

```

### Biplot Ray Position

**구문:** obj << Biplot Ray Position( [x position, y position, radius scaling] )

**설명:** 정준 그림 및 3D 정준 그림에서 행렬도 선의 위치와 반지름 척도를 지정할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Biplot Ray Position( [0, 1.7, 3.5] );

```

### Canonical 3D Plot

**구문:** obj << Canonical 3D Plot( state=0|1 )

**설명:** 정준 그림의 3차원 버전을 표시하거나 숨깁니다. 참고: 네 개 이상의 그룹이 있는 경우에만 사용할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cherts.jmp" );
obj = dt << Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U )
);
obj << Canonical 3D Plot( 1 );
(obj << report)["Discriminant Scores"] << Close( 1 );

```

### Canonical Plot

**구문:** obj << Canonical Plot( state=0|1 )

**설명:** 정준 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Canonical Plot( 1 );

```

### Color Points

**구문:** obj << Color Points

**설명:** X 변수의 수준을 기반으로 정준 그림 및 3D 정준 그림의 점에 색상을 지정합니다. 데이터 테이블의 행에 색상 표식이 추가됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
dt << Clear Row States;
Wait( 2 );
obj << Color Points;

```

### Consider New Levels

**구문:** obj << Consider New Levels( fraction )

**설명:** 일부 점은 알려진 그룹에 적합하지 않을 수 있으며 스코어가 없는 새 그룹에 속한 것으로 간주되어야 함을 지정합니다. 새 수준의 사전 확률을 입력하십시오.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Consider New Levels( 0.05 );

```

### Cross Validate by Excluded Rows

**구문:** obj = Discriminant(...Cross Validate by Excluded Rows( state=0 )...)

**설명:** 제외된 행이 적합 통계량이 계산되는 검증 데이터 집합을 구성하도록 지정합니다. 기본값은 "0"입니다.

**JMP추가된 버전:** 14

<b>실행기 항목: 예</b>

### Discriminant Method

**구문:** obj << Discriminant Method( Linear );

obj << Discriminant Method( Quadratic );

obj << Discriminant Method( Regularized, Regularization Lambda( fraction ), Regularization Gamma( fraction ) );

obj << Discriminant Method( Wide Linear )

<b>실행기 항목: 예</b>

**설명:** 판별 방법을 지정합니다.

Regularized 옵션을 사용하려면 추가 인수가 필요합니다. Regularization Lambda 모수의 범위는 0(2차 판별 분석) ~ 1(선형 판별 분석)이고, Regularization Gamma 모수의 범위는 0(축소 안 함) ~ 1(대각 값만)입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Discriminant Method( Regularized, Regularization Lambda( 0.2 ), Regularization Gamma( 0.6 ) );

```

### Discriminant Scores

**구문:** obj << Discriminant Scores( state=0|1 )

**설명:** 각 행의 판별 스코어 테이블을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Discriminant Scores( 1 );

```

### Enter All

**구문:** obj << Enter All

**설명:** 단계별 변수 선택에서 모든 변수를 모형에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Stepwise Variable Selection( 1 );
obj << Enter All;

```

### Get Discrim Matrices

**구문:** obj << Get Discrim Matrices

**설명:** 분석의 판별 행렬을 포함하는 목록을 반환합니다. 이 목록에는 Y 이름, X 이름, X 값 및 Y 평균에 대해 각각 명명된 목록이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
z = obj << Get Discrim Matrices;
Show( z );

```

### Get Measures

**구문:** obj << Get Measures

**설명:** 모형에서 적합 측도 요약을 반환합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Get Measures;

```

### Go

**구문:** obj << Go

**설명:** 전진 선택 단계에서 R²에 더 이상 개선이 없을 때까지 공변량을 입력합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Stepwise Variable Selection( 1 );
obj << Go;

```

### Make Scoring Script

**구문:** obj << Make Scoring Script

**설명:** 계산식 저장 옵션으로 저장된 계산식 열을 구성하는 스크립트를 생성합니다. 이 스크립트를 저장한 후 다른 데이터 테이블과 함께 사용하여 소속 확률을 계산하고 소속 그룹을 예측하는 계산식 열을 생성할 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Make Scoring Script;

```

### Precision Recall Curve

**구문:** obj << Precision Recall Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 곡선을 포함하는 정밀도-재현율 곡선 그림을 표시하거나 숨깁니다. 정밀도-재현율 곡선은 다양한 임계값에서 정밀도 값 대 재현율 값을 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Precision Recall Curve( 1 );

```

### Profiler

**구문:** obj << Profiler( state=0|1 )

**설명:** 예측 방정식을 한 번에 한 요인씩 분할하여 시각적으로 탐색하는 데 사용되는 예측 프로파일러를 표시하거나 숨깁니다. 예측 프로파일러에는 최적화를 위한 기능이 포함되어 있습니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Profiler;

```

### Publish Probability Formulas

**구문:** obj << Publish Probability Formulas

**설명:** 확률 계산식을 생성하여 계산식 저장소 플랫폼에 계산식 열 스크립트로 저장합니다. 계산식 저장소 보고서가 열려 있지 않은 경우 이 옵션은 계산식 저장소 보고서를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Publish Probability Formulas;

```

### ROC Curve

**구문:** obj << ROC Curve( state=0|1 )

**설명:** 반응 변수의 각 수준에 대한 ROC(Receiver Operating Characteristic) 곡선을 표시하거나 숨깁니다. ROC 곡선은 민감도 대 (1 - 특이도)를 보여 주는 그림입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
Wait( 0 );
obj << ROC Curve( 1 );

```

### Remove All

**구문:** obj << Remove All

**설명:** 단계별 변수 선택에서 모형의 모든 변수를 제거합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Stepwise Variable Selection( 1 );
obj << Enter All;
Wait( 2 );
obj << Remove All;

```

### Save Canonical Scores

**구문:** obj << Save Canonical Scores

**설명:** 각 관측값에 대한 정준 스코어 계산식이 포함된 열을 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Canonical Scores;

```

### Save Discrim Matrices

**구문:** obj << Save Discrim Matrices

**설명:** 분석의 판별 행렬 목록을 포함하는 스크립트를 데이터 테이블에 저장합니다. 이 목록에는 Y 이름, X 이름, X 값 및 Y 평균에 대해 각각 명명된 목록이 포함되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Discrim Matrices;

```

### Save Formulas

**구문:** obj << Save Formulas

**설명:** 거리, 확률 및 소속 확률 예측 계산식을 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save Formulas;

```

### Save To New Data Table

**구문:** obj << Save To New Data Table

**설명:** 그룹 평균 및 정준 변수의 행렬도 선을 정준 스코어와 함께 새 데이터 테이블에 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Save To New Data Table;

```

### Scatterplot Matrix

**구문:** obj << Scatterplot Matrix

**설명:** 각 공변량 쌍에 대한 산점도가 있는 행렬을 표시하는 산점도 행렬 보고서를 엽니다. 이 옵션은 각 그룹에 대해 음영 밀도 타원이 있는 산점도 행렬 플랫폼을 호출합니다. 산점도에는 검증이 사용된 경우에도 데이터 테이블의 모든 관측값이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Scatterplot Matrix( 1 );

```

### Score Data

**구문:** obj << Score Data( state=0|1 )

### Select Misclassified Rows

**구문:** obj << Select Misclassified Rows

**설명:** 행별 목록을 표시하는 보고서 창과 데이터 테이블에서 잘못 분류된 행을 선택합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Interesting Rows Only( 1 );
obj << Select Misclassified Rows;

```

### Select Uncertain Rows

**구문:** obj << Select Uncertain Rows( fraction )

**설명:** 행별 목록을 표시하는 보고서 창과 데이터 테이블에서 분류가 불확실한 행을 선택합니다. 불확실한 행은 어떤 그룹에 대한 그룹 소속일 확률이 0에 가깝지도 않고 1에 가깝지도 않은 행입니다. fraction 인수는 불확실한 것으로 정의하기 위한 0 또는 1과의 확률 차이를 나타냅니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Interesting Rows Only( 1 );
obj << Select Uncertain Rows( 0.2 );

```

### Show Biplot Rays

**구문:** obj << Show Biplot Rays( state=0|1 )

**설명:** 정준 그림 및 3D 정준 그림에서 행렬도 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Biplot Rays( 1 );

```

### Show Canonical Details

**구문:** obj << Show Canonical Details( state=0|1 )

**설명:** 정준 상세 정보 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Canonical Details( 1 );

```

### Show Canonical Structure

**구문:** obj << Show Canonical Structure( state=0|1 )

**설명:** 정준 구조 보고서를 표시하거나 숨깁니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Canonical Structure( 1 );

```

### Show Canonical Structures

**구문:** obj << Show Canonical Structures( state=0|1 )

### Show Classification Counts

**구문:** obj << Show Classification Counts( state=0|1 )

**설명:** 스코어 요약 보고서에서 실제값 대 예측값 개수를 보여 주는 혼동 행렬을 표시하거나 숨깁니다. 기본적으로 스코어 요약 보고서에는 범주형 X의 각 수준에 대한 혼동 행렬이 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Classification Counts( 1 );

```

### Show Distances to Each Group

**구문:** obj << Show Distances to Each Group( state=0|1 )

**설명:** 각 그룹 평균에 대한 각 관측값의 Mahalanobis 거리 제곱을 포함하는 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Distances to each group( 1 );

```

### Show Group Means

**구문:** obj << Show Group Means( state=0|1 )

**설명:** 각 공변량의 평균을 제공하는 그룹 평균 보고서를 표시하거나 숨깁니다. X 변수의 각 수준에 대한 평균과 전체 평균이 나타납니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Group Means( 1 );

```

### Show Interesting Rows Only

**구문:** obj << Show Interesting Rows Only( state=0|1 )

**설명:** 판별 스코어 보고서에서 잘못 분류된 행과 예측 확률이 0.05에서 0.95 사이인 행만 표시합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Interesting Rows Only( 1 );

```

### Show Means CL Ellipses

**구문:** obj << Show Means CL Ellipses( state=0|1 )

**설명:** 정규성을 가정하고 정준 그림 및 3D 정준 그림에서 각 그룹의 평균에 대한 95% 신뢰도 타원을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Means CL Ellipses( 1 );

```

### Show Normal 50% Contours

**구문:** obj << Show Normal 50% Contours( state=0|1 )

**설명:** 각 그룹에 대해 모집단의 50%를 포함하도록 추정된 정규 타원 영역을 정준 그림 및 3D 정준 그림에 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Normal 50% Contours( 1 );

```

### Show Points

**구문:** obj << Show Points( state=0|1 )

**설명:** 정준 그림 및 3D 정준 그림에서 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Points( 1 );

```

### Show Probabilities to Each Group

**구문:** obj << Show Probabilities to Each Group( state=0|1 )

**설명:** 관측값이 범주형 X로 정의된 각 그룹에 속할 확률을 포함하는 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Probabilities to each group( 1 );

```

### Show Within Covariances

**구문:** obj << Show Within Covariances( state=0|1 )

**설명:** 공분산 행렬과 관련된 보고서를 표시하거나 숨깁니다. 나타나는 보고서는 지정된 판별 방법에 따라 다릅니다. 와이드 선형 판별 방법에는 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Show Within Covariances( 1 );

```

### Shrink Covariances

**구문:** obj = Discriminant(...Shrink Covariances( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** 합동 그룹 내 공분산 행렬과 그룹 내 공분산 행렬의 비대각 요소를 축소합니다. 이로 인해 안정성이 향상되고 예측 분산을 줄일 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Shrink Covariances( 1 )
);

```

### Specify Priors

**구문:** obj << Specify Priors( Equal Probabilities | Proportional to Occurrence | [matrix of priors] )

**설명:** X 변수의 각 수준에 대한 사전 확률을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cherts.jmp" );
obj = dt << Discriminant(
	X( :location name ),
	Y( :Al, :Mn, :Na, :Br, :Ce, :Co, :Cr, :Cs, :Eu, :Fe, :Hf, :La, :Sc, :Sm, :U )
);
obj << Specify Priors( Proportional to Occurrence );

```

### Step Backward

**구문:** obj << Step Backward

**설명:** 단계별 변수 선택에서 모형에서 변수를 하나 제거하여 한 단계 뒤로 이동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Stepwise Variable Selection( 1 );
obj << Enter All;
Wait( 2 );
obj << Step Backward;

```

### Step Forward

**구문:** obj << Step Forward

**설명:** 단계별 변수 선택에서 모형에 변수를 하나 추가하여 한 단계 앞으로 이동합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Stepwise Variable Selection( 1 );
obj << Step Forward;

```

### Stepwise Variable Selection

**구문:** obj = Discriminant(...Stepwise Variable Selection( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** 열 선택 제어판을 표시하거나 숨깁니다. 이 제어판에는 공분산 분석 및 p 값을 사용하여 단계별 변수 선택을 수행할 수 있는 옵션이 포함되어 있습니다. 와이드 선형 방법에는 이 옵션을 사용할 수 없습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant( X( :Species ), Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );
obj << Stepwise Variable Selection( 1 );

```

### Uncentered Canonical

**구문:** obj = Discriminant(...Uncentered Canonical( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** 이전 버전 JMP와의 호환성을 위해 정준 스코어 중심화를 제한합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Uncentered Canonical( 1 )
);

```

### Use Matrix Columns

**구문:** obj << Use Matrix Columns( state=0|1 )

**설명:** 계산에 행렬 열을 사용하도록 지정합니다. 행렬 열의 사용은 계산식 열로 스코어링 예측을 계산하는 것에 비해 수행 시간을 줄일 수 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Use Matrix Columns( 1 )
);

```

### Use Pseudoinverses

**구문:** obj = Discriminant(...Use Pseudoinverses( state=0|1 )...)

<b>실행기 항목: 예</b>

**설명:** 공분산 행렬이 특이 행렬일 때 Moore-Penrose 유사역행렬을 분석에 사용합니다. 결과 스코어에 모든 공변량이 포함됩니다. 이 옵션을 선택하지 않으면 Y, 공변량 목록에서 앞에 나오는 공변량의 선형 결합인 공변량이 분석에서 삭제됩니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Discriminant(
	X( :Species ),
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Use Pseudoinverses( 0 )
);

```

