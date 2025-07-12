# EMP Measurement Systems Analysis



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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**구문:** obj << Copy Script

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 클립보드에 넣습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Copy Script;

```

### Data Table Window

**구문:** obj << Data Table Window

**설명:** 이 분석에 대한 데이터 테이블 창을 앞으로 가져옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**구문:** obj << Get Script With Data Table

**설명:** 이 데이터 테이블을 참조하는 분석을 수행하기 위한 스크립트(JSL)를 생성하고 표현식으로 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**구문:** obj << Get Timing

**설명:** 플랫폼 시작 시간을 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**구문:** obj << Redo ByGroup Analysis

**설명:** 동일한 분석을 새 창에서 다시 실행합니다. 데이터가 변경된 경우에는 분석결과가 달라집니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**구문:** obj << Relaunch Analysis

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**구문:** obj << Relaunch ByGroup

**설명:** 플랫폼 시작 창을 열고 보고서를 생성하는 데 사용된 설정을 불러옵니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**구문:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다. 스크립트 이름을 지정할 수 있습니다. Append Suffix 옵션은 스크립트 이름에 숫자 접미사를 추가하여 이름이 같은 기존 스크립트와 구분합니다. Prompt 옵션은 사용자에게 스크립트 이름을 지정하라는 메시지를 표시합니다. Replace 옵션은 이름이 같은 기존 스크립트를 바꿉니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**구문:** obj << Save ByGroup Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**구문:** obj << Save ByGroup Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**구문:** obj << Save Script for All Objects

**설명:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**구문:** obj << Save Script for All Objects To Data Table( <name> )

**설명:** 모든 보고서 개체에 대한 스크립트를 현재 데이터 테이블에 저장합니다. 이 옵션은 창에 여러 보고서가 있을 때 유용합니다. 스크립트 이름을 따옴표로 묶어 지정하는 경우 외에는 첫 번째 플랫폼 이름을 따라 스크립트 이름이 지정됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**구문:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 데이터 테이블에 테이블 특성으로 저장합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**구문:** obj << Save Script to Journal

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 이 스크립트가 포함된 저널에 버튼을 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Journal;

```

### Save Script to Report

**구문:** obj << Save Script to Report

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 보고서 자체에 표시합니다. 수행된 작업에 대한 인쇄된 기록을 유지하려는 경우에 유용합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**구문:** obj << Save Script to Script Window

**설명:** 이 분석을 수행하기 위한 JSL 스크립트를 생성하고 현재 스크립트 텍스트 창에 추가합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Title( "My Platform" );

```

### Top Report

**구문:** obj << Top Report

**설명:** 보고서의 루트 노드에 대한 참조를 반환합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
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

**구문:** obj = EMP Measurement Systems Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### EMP Measurement Systems Analysis

**구문:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**설명:** 측정 시스템 분석에 대한 EMP(Evaluating the Measurement Process) 방법을 시작합니다. 기본적으로 평균 및 산포(범위 또는 표준편차) 차트가 표시됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

## 열

### By

**구문:** obj = EMP Measurement Systems Analysis(...<By( column(s) )>...)

<b>실행기 항목: 예</b>

**설명:** 변수의 각 수준에 대해 하나씩 여러 보고서를 생성합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
EMP Measurement Systems Analysis(
	Y( :new Y ),
	X( :Operator ),
	Part( :Part ),
	Model( Crossed ),
	Dispersion Chart Type( Range ),
	By( :Instrument )
);

```

### Grouping

**구문:** obj = EMP Measurement Systems Analysis(...<Grouping( column(s) )>...)

<b>실행기 항목: 예</b>

**설명:** 범주형 열을 그룹화 변수로 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Measurement

**구문:** obj = EMP Measurement Systems Analysis(...Measurement( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 연속형 측정값 열을 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Part

**구문:** obj = EMP Measurement Systems Analysis(...Part( column )...)

<b>실행기 항목: 예</b>

**설명:** 부품 또는 유닛을 지정하는 범주형 열을 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Sample ID

**구문:** obj = EMP Measurement Systems Analysis(...Sample ID( column )...)

<b>실행기 항목: 예</b>

**설명:** 부품 또는 유닛을 지정하는 범주형 열을 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Sample ID( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Standard

**구문:** obj = EMP Measurement Systems Analysis(...<Standard( column )>...)

<b>실행기 항목: 예</b>

**설명:** 측정된 부품에 대해 알려진 값을 포함하는 표준 열 또는 참조 열을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Response ),
	Part( :Part ),
	Standard( :Standard ),
	Model( "Main" ),
	Dispersion Chart Type( "Range" )
);

```

### X

**구문:** obj = EMP Measurement Systems Analysis(...<X( column(s) )>...)

<b>실행기 항목: 예</b>

**설명:** 범주형 열을 그룹화 변수로 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	Grouping( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

### Y

**구문:** obj = EMP Measurement Systems Analysis(...Y( column(s) )...)

<b>실행기 항목: 예</b>

**설명:** 연속형 측정값 열을 지정합니다.

**예제 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

**예제 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Measurement( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);

```

## 항목 메시지

### Conv Limit

**구문:** obj = EMP Measurement Systems Analysis(...Conv Limit( number )...)

**설명:** 분산 성분 계산에 사용되는 수렴 한계를 설정합니다. 이 옵션은 REML 분석에만 영향을 줍니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Conv Limit( 1e-7 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### EMP MSA Analysis

**구문:** obj = EMP Measurement Systems Analysis(...EMP MSA Analysis( )...)

**설명:** 각 측정 반응에 대한 EMP MSA 분석 보고서 옵션을 지정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", EMP Results( 1 ), Variance Components( 1 ), "EMP Gauge R&R Results"n( 1 ) )
);

```

### Edit MSA Metadata

**구문:** obj << Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), <Historical Mean( number ), Historical Process Sigma( number )> ) )

**설명:** 모든 분석에 대한 공차 범위, 공차 한계, 과거 평균 및 과거 공정 시그마를 추가하거나 편집할 수 있는 창을 엽니다. 보고서는 자동으로 업데이트됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Dispersion Chart( 0 ), "AIAG Gauge R&R Results"n( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Y( Lower Tolerance( 130 ), Upper Tolerance( 230 ) ) );

```

### Include Interactions in Reproducibility

**구문:** obj = EMP Measurement Systems Analysis(...Include Interactions in Reproducibility( state=0|1 )...)

**설명:** 재현성 통계량 계산에 교호작용을 포함합니다.

**JMP추가된 버전:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Include Interactions in Reproducibility( 1 )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

### Max Iter

**구문:** obj = EMP Measurement Systems Analysis(...Max Iter( number )...)

**설명:** 분산 성분 계산에 사용되는 최대 반복 수를 설정합니다. 이 옵션은 REML 분석에만 영향을 줍니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
dt << Select Rows( 5 ) << Exclude( 1 );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Max Iter( 200 )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**구문:** obj << Save All Metadata to Table( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**설명:** 각 측정 데이터 열에 대한 MSA 메타데이터 및 측정 시그마를 포함하는 새 데이터 테이블을 생성합니다. 이 테이블은 세로형 형식이고 각 측정 변수에 대한 행을 포함합니다. 공차 하한 및 상한 값을 데이터 테이블의 추가 열로 저장하는 옵션이 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**구문:** obj << Save Metadata as Column Properties( < MSA( state=0|1 ) >, < Measurement Sigma( state=0|1 ) >, < Tolerance as Specs( state=0|1 ) > )

**설명:** 각 측정 데이터 열에 대해 MSA 메타데이터 및 측정 시그마를 원래 데이터 테이블의 열 내에 열 특성으로 저장합니다. 공차 하한 및 상한 값을 규격 한계 열 특성으로 저장하는 옵션이 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**구문:** obj = EMP Measurement Systems Analysis(...Set Alpha Level( number )...)

<b>실행기 항목: 예</b>

**설명:** 치우침 비교 및 검사-재검사 오차 비교 보고서에 사용되는 유의 수준을 지정합니다. 기본값은 "0.05"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Set Alpha Level( .01 )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Set Random Seed

**구문:** obj = EMP Measurement Systems Analysis(...Set Random Seed( number )...)

<b>실행기 항목: 예</b>

**설명:** 동일한 시드값을 사용하는 모든 후속 실행이 재현 가능하다고 가정하고 난수 시드값을 특정 값으로 설정합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	Set Random Seed( 12345 )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Sigma Multiplier

**구문:** obj = EMP Measurement Systems Analysis(...Sigma Multiplier( number=6 )...)

<b>실행기 항목: 예</b>

**설명:** 시그마에 곱하는 상수 값을 지정합니다. 기본값은 "6"입니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	Sigma Multiplier( 5.15 ),
	EMP MSA Analysis( "Y", "AIAG Gauge R&R Results"n( 1 ) )
);

```

## EMP MSA Analysis > EMP AIAG Gauge Results

### 항목 메시지

#### AIAG Labels

**구문:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, AIAG Labels( state=0|1 )))

**설명:** AIAG 게이지 R&R 결과 테이블에 라벨을 표시하거나 숨깁니다. 라벨은 AIAG(Automotive Industry Action Group)에서 정의합니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, AIAG Labels( 0 ) ));

```

#### Discrimination Ratio

**구문:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n(1, Discrimination Ratio( state=0|1 )))

**설명:** 지정된 모형에 대한 구별력 비를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, Discrimination Ratio( 1 ) ));

```

## EMP MSA Analysis > EMP Average Chart

### 항목 메시지

#### Show Connected Means

**구문:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Connected Means( state=0|1 )))

**설명:** 평균 차트에 평균 측정값을 연결하는 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Connected Means( 0 ) ));

```

#### Show Control Limits

**구문:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits( state=0|1 )))

**설명:** 평균 차트에 관리 한계를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**구문:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Control Limits Shading( state=0|1 )))

**설명:** 평균 차트에서 관리 한계 사이에 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Data

**구문:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Data( state=0|1 )))

**설명:** 평균 차트에 데이터 점을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Data( 1 ) ));

```

#### Show Grand Mean

**구문:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Grand Mean( state=0|1 )))

**설명:** 평균 차트에 Y 변수의 전체 평균을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Grand Mean( 0 ) ));

```

#### Show Separators

**구문:** obj << (EMP MSA Analysis[number] << Average Chart( 1, Show Separators( state=0|1 )))

**설명:** 평균 차트에 X 변수를 구분하는 세로선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Dispersion Chart

### 항목 메시지

#### Show Average Dispersion

**구문:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Average Dispersion( state=0|1 )))

**설명:** 산포 차트에 평균 범위 또는 표준편차를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Average Dispersion( 0 ) ));

```

#### Show Connected Points

**구문:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Connected Points( state=0|1 )))

**설명:** 산포 차트에 모든 범위 또는 표준편차를 연결하는 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Connected Points( 0 ) ));

```

#### Show Control Limits

**구문:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits( state=0|1 )))

**설명:** 산포 차트에 관리 한계를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**구문:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Control Limits Shading( state=0|1 )))

**설명:** 산포 차트에서 관리 한계 사이에 음영을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Separators

**구문:** obj << (EMP MSA Analysis[number] << Dispersion Chart( 1, Show Separators( state=0|1 )))

**설명:** 산포 차트에 X 변수를 구분하는 세로선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Linearity and Bias Results

### 항목 메시지

#### Show Avg Bias Points

**구문:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Avg Bias Points( state=0|1 )))

**설명:** 그래프에 평균 치우침 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**구문:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Bias Points( state=0|1 )))

**설명:** 그래프에 치우침 점을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**구문:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Fit Confidence Curves( state=0|1 )))

**설명:** 그래프에 적합 신뢰 곡선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Fit Confidence Curves( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Fit Confidence Curves( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Fit Confidence Curves( 1 ) ));

```

#### Show Line of Fit

**구문:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Line of Fit( state=0|1 )))

**설명:** 그래프에 적합선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**구문:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( 1, Show Overall Avg Bias Line( state=0|1 )))

**설명:** 그래프에 전체 평균 치우침 선을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" ),
	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Overall Avg Bias Line( 1 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Overall Avg Bias Line( 0 ) ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Overall Avg Bias Line( 1 ) ));

```

## EMP MSA Analysis

### 항목 메시지

#### AIAG 게이지 R&R 결과

**구문:** obj << (EMP MSA Analysis[number] << "AIAG Gauge R&R Results"n( state=0|1 ))

**설명:** 측정 변동성을 부품 변동과 측정 시스템 변동으로 분할하는 보고서를 표시하거나 숨깁니다. 재현성 계산에 교호작용이 포함됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	MSA Metadata(
		:Y(
			Lower Tolerance( 120 ),
			Upper Tolerance( 240 ),
			Tolerance Range( 120 ),
			Historical Process Sigma( 25 )
		)
	),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1 ));

```

#### Apply Preset

**구문:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**설명:** 이전에 생성된 사전 설정을 개체에 적용하여 옵션과 사용자 정의를 저장된 설정과 일치하도록 업데이트합니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);
dt2 = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj2 = dt2 << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
Wait( 1 );
obj2 << (EMP MSA Analysis[1] << Apply Preset( preset ));

```

#### Average Chart

**구문:** obj << (EMP MSA Analysis[number] << Average Chart( state=0|1 ))

**설명:** 부품과 X 변수의 각 조합에 대한 평균 측정값 그림을 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));

```

#### Bias Comparison

**구문:** obj << (EMP MSA Analysis[number] << Bias Comparison( state=0|1 ))

**설명:** X 변수의 평균이 서로 다른지 여부를 검정하기 위한 평균 분석 차트를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

#### Dispersion Chart

**구문:** obj << (EMP MSA Analysis[number] << Dispersion Chart( state=0|1 ))

**설명:** 지정된 산포 차트를 표시하거나 숨깁니다. 기본 산포 차트는 범위 차트입니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Dispersion Chart( 0 ));

```

#### EMP Results

**구문:** obj << (EMP MSA Analysis[number] << EMP Results( state=0|1 ))

**설명:** 측정 시스템을 평가하고 분류하는 데 유용한 여러 통계량을 계산하는 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));

```

#### EMP 게이지 R&R 결과

**구문:** obj << (EMP MSA Analysis[number] << "EMP Gauge R&R Results"n( state=0|1 ))

**설명:** 측정 변동성을 부품 변동과 측정 시스템 변동으로 분할하는 보고서를 표시하거나 숨깁니다. 이 보고서의 계산은 범위가 아니라 분산을 기반으로 합니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

#### Edit MSA Metadata

**구문:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**설명:** 모든 분석에 대한 공차 범위, 공차 한계, 과거 평균 및 과거 공정 시그마를 추가하거나 편집할 수 있는 창을 엽니다. 보고서는 자동으로 업데이트됩니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" ),
	EMP MSA Analysis( "Y", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (EMP MSA Analysis[1] << Edit MSA Metadata( Lower Tolerance( 120 ), Upper Tolerance( 240 ) ));

```

#### Effective Resolution

**구문:** obj << (EMP MSA Analysis[number] << Effective Resolution( state=0|1 ))

**설명:** 측정 증분이 제대로 작동하는지 확인하는 데 도움이 되는 측정 시스템의 해상도 결과가 포함된 테이블을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));

```

#### Linearity and Bias Results

**구문:** obj << (EMP MSA Analysis[number] << Linearity and Bias Results( state=0|1 ))

**설명:** 표준 열을 X 변수로 사용하고 치우침을 Y 변수로 사용한 회귀 분석의 그래프 및 요약을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Measurement ),
	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),
	X( :Operator ),
	Part( :part# ),
	Standard( :Standard ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Standard Deviation" )
);
obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1 ));

```

#### Misclassification Probabilities

**구문:** obj << (EMP MSA Analysis[number] << Misclassification Probabilties( state=0|1 ))

**설명:** 지정된 모형에 대한 오분류 확률이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Misclassification Probabilities( 1 ));

```

#### New Preset

**구문:** obj = New Preset()

**설명:** 개체에 적용된 옵션과 사용자 정의를 나타내는 익명 사전 설정을 생성합니다. 이 개체를 Apply Preset에 전달하여 같은 유형의 다른 개체에 설정을 복사할 수 있습니다.

**JMP추가된 버전:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Average Chart( 0 ));
obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));
obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));
preset = obj << (EMP MSA Analysis[1] << New Preset);

```

#### Parallelism Plots

**구문:** obj << (EMP MSA Analysis[number] << Parallelism Plots( state=0|1 ))

**설명:** 각 부품의 평균 측정값을 반영하는 중첩 그림을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Parallelism Plots( 1 ));

```

#### Shift Detection Profiler

**구문:** obj << (EMP MSA Analysis[number] << Shift Detection Profiler( state=0|1 ))

**설명:** 공정 동작 차트에서 경고를 받을 확률을 확인하기 위해 조정할 수 있는 대화식 차트 집합을 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));

```

#### Show Monitor Classification Legend

**구문:** obj << (EMP MSA Analysis[number] << Show Monitor Classification Legend( state=0|1 ))

**설명:** EMP 결과 보고서에 모니터링 분류 범례를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << EMP Results( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Monitor Classification Legend( 0 ));

```

#### Show Part Legend

**구문:** obj << (EMP MSA Analysis[number] << Show Part Legend( state=0|1 ))

**설명:** 평균 및 산포 차트에 대한 부품 범례를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Show Part Legend( 0 ));

```

#### Show Shift Detection Profiler Legend

**구문:** obj << (EMP MSA Analysis[number] << Show Shift Detection Profiler Legend( state=0|1 ))

**설명:** 변화 감지 프로파일러에 범례를 표시하거나 숨깁니다. 기본적으로 설정되어 있습니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));
Wait( 1 );
obj << (EMP MSA Analysis[1] << Show Shift Detection Profiler Legend( 0 ));

```

#### Test-Retest Error Comparison

**구문:** obj << (EMP MSA Analysis[number] << "Test-Retest Error Comparison"n( state=0|1 ))

**설명:** 그룹의 검사-재검사 오차 수준이 서로 다른지 여부를 검정하기 위한 분산에 대한 평균 분석 또는 평균 범위 분석 차트를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

#### Variance Components

**구문:** obj << (EMP MSA Analysis[number] << Variance Components( state=0|1 ))

**설명:** 지정된 모형에 대한 분산 성분 추정값이 포함된 보고서를 표시하거나 숨깁니다.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );
obj = dt << EMP Measurement Systems Analysis(
	Y( :Y ),
	X( :Operator ),
	Part( :Part ),
	Model( "Crossed" ),
	Dispersion Chart Type( "Range" )
);
obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

