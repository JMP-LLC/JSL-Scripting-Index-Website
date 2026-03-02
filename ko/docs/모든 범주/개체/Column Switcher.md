# Column Switcher



## 항목 메시지

### Close Outline

**구문:** obj &lt;&lt; Close Outline( state=0|1 )

**설명:** 열 전환기 개요 상자를 열거나 닫습니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**구문:** obj &lt;&lt; Get Current

**설명:** 현재 변수의 이름을 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Set Current( "country" );ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**구문:** obj &lt;&lt; Get Layout

**설명:** 여러 열 전환기의 레이아웃을 가져옵니다. 값은 세로(0) 또는 가로(1)입니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );gb = dt << Graph Builder( Variables( X( :Country ), Y( :Weight ) ), Elements( Bar( X, Y, Legend( 4 ) ) ) );cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );cs2 = gb << Column Switcher(	:Weight,	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size});If( cs2 << Get Layout() == 1,	Print( "Horizontal" ),	Print( "Vertical" ));

```

### Get List

**구문:** obj &lt;&lt; Get List

**설명:** 사용 가능한 변수 목록을 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**구문:** obj &lt;&lt; Get Original

**설명:** 원래 변수의 이름을 가져옵니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Next;ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**구문:** obj &lt;&lt; Get Speed

**설명:** fpm = obj<<getSpeed /\* in Frames Per Minute \*/;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**구문:** obj &lt;&lt; Link Platform( platform )

**설명:** 이 열 전환기에 플랫폼을 연결합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );columnSwitcher = dt << Column Switcher(	:Process 1,	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**구문:** handler = cs &lt;&lt; Make Column Switch Handler( function(pre), function(post) )

**설명:** 열 전환 전/후에 호출되는 콜백 함수를 사용하여 열 전환에 대한 처리기를 생성합니다. 콜백 함수는 이전 열, 다음 열 및 열 전환기를 받습니다. 전환을 허용하려면 전환 전에 지정된 함수에서 0이 아닌 값을 반환해야 합니다. 0을 반환하면 전환할 수 없습니다. 전환 후에 호출된 함수는 값을 반환하지 않아야 합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );columnSwitcher = gb << Column Switcher(	:Process 1,	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});pre = Function( {currentColumn, nextColumn, switcher},	Print(		"Before switch: " || (currentColumn << get name) || " >> " || (nextColumn << get name) ||		" [Column Switcher] current: " || (columnSwitcher << Get Current)	);	If( nextColumn << get name == "Process 4",		0,		1	););post = Function( {previousColumn, currentColumn, switcher},	Print(		"After switch: " || (previousColumn << get name) || " >> " || (currentColumn << get name) ||		" [Column Switcher] current: " || (columnSwitcher << Get Current)	));handler = columnSwitcher << Make Column Switch Handler( pre, post );columnSwitcher << Run;

```

### Next

**구문:** obj &lt;&lt; Next

**설명:** 열 전환기 선택을 다음 사용 가능한 선택으로 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Next;

```

### Pause

**구문:** obj &lt;&lt; Pause

**설명:** 애니메이션을 일시 중지합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );ColumnSwitcherObject << Pause;

```

### Previous

**구문:** obj &lt;&lt; Previous

**설명:** 열 전환기 선택을 이전 사용 가능한 선택으로 변경합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**구문:** obj &lt;&lt; Remove Column Switcher

**설명:** 이 열 전환기를 제거합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Run;Wait( 2/*seconds, while it animates*/ );ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**구문:** obj &lt;&lt; Retain Axis Settings( state=0|1 )

**설명:** 일부 그래프는 열 이름을 기반으로 축 사용자 정의를 저장합니다. 기본적으로 이러한 사용자 정의는 열을 전환하면 제거됩니다. 이 옵션을 활성화하면 전환할 때 열이 업데이트되어 사용자 정의가 새 그래프에 적용됩니다.

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );Graph Builder(	Variables( X( :Process 1 ), Y( :Process 2 ) ),	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),	Column Switcher(		:Process 1,		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7},		Retain Axis Settings( 1 )	),	SendToReport(		Dispatch( {}, "Process 1", ScaleBox,			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ), Add Ref Line( 12, "Solid", "Black", "", 1 )}		)	));

```

### Run

**구문:** obj &lt;&lt; Run

**설명:** 애니메이션을 시작합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Run;

```

### Script

**구문:** obj &lt;&lt; Script( script )

**설명:** 열이 전환될 때 실행되는 스크립트를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Set Script( Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) ) );ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**구문:** obj &lt;&lt; Set Current( string )

**설명:** 현재 변수를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**구문:** obj &lt;&lt; Set Layout( 0 = Vertical | 1 = Horizontal )

**설명:** 여러 열 전환기의 레이아웃을 세로(0) 또는 가로(1)로 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );gb = dt << Graph Builder( Variables( X( :Country ), Y( :Weight ) ), Elements( Bar( X, Y, Legend( 4 ) ) ) );cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );cs2 = gb << Column Switcher(	:Weight,	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size});cs1 << Set Layout( 1 );

```

### Set N Lines

**구문:** obj &lt;&lt; Set N Lines( number )

**설명:** 열 이름 목록 상자의 줄 수를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**구문:** obj &lt;&lt; Set Script( script )

**설명:** 열이 전환될 때 실행되는 스크립트를 설정합니다.

**JMP추가된 버전:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Set Script( Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) ) );ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**구문:** obj &lt;&lt; Set Size( number )

**설명:** 열 이름 목록 상자의 픽셀 너비를 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**구문:** obj &lt;&lt; Set Speed( number )

**설명:** obj<<setSpeed(60) /\* in Frames Per Minute \*/;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**구문:** obj &lt;&lt; Title( string )

**설명:** 열 전환기 개요 상자의 제목을 설정합니다.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher( :marital status, {:sex, :country, :marital status} );ColumnSwitcherObject << Title( "Switch on X" );

```

