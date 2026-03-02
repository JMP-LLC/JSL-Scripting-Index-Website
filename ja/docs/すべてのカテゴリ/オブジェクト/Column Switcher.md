# Column Switcher



## 項目のメッセージ

### Close Outline

**構文:** obj &lt;&lt; Close Outline( state=0|1 )

**説明:** 列スイッチャーアウトラインボックスを開く、または閉じる。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**構文:** obj &lt;&lt; Get Current

**説明:** 現在の変数の名前を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Current( "country" );ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**構文:** obj &lt;&lt; Get Layout

**説明:** 複数の列スイッチャーのレイアウトを取得する。値は縦(0)または横(1)。

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );gb = dt << Graph Builder(	Variables( X( :Country ), Y( :Weight ) ),	Elements( Bar( X, Y, Legend( 4 ) ) ));cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );cs2 = gb << Column Switcher(	:Weight,	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size});If( cs2 << Get Layout() == 1,	Print( "Horizontal" ),	Print( "Vertical" ));

```

### Get List

**構文:** obj &lt;&lt; Get List

**説明:** 使用可能な変数のリストを取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**構文:** obj &lt;&lt; Get Original

**説明:** 元の変数の名前を取得する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Next;ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**構文:** obj &lt;&lt; Get Speed

**説明:** fpm = obj<<getSpeed /\* in Frames Per Minute \*/;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**構文:** obj &lt;&lt; Link Platform( platform )

**説明:** この列スイッチャーにプラットフォームをリンクする。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );columnSwitcher = dt << Column Switcher(	:Process 1,	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**構文:** handler = cs &lt;&lt; Make Column Switch Handler( function(pre), function(post) )

**説明:** 列を切り替えるハンドラを、列の切り替え前後に呼び出される関数つきで作成する。コールバック関数は、前の列、次の列、列スイッチャーを受け取る。切り替え前の関数がゼロ以外の値を戻したときは切り替えができる。0を戻したときは切り替えが行われない。切り替え後の関数は値を戻さない。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );columnSwitcher = gb << Column Switcher(	:Process 1,	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7});pre = Function( {currentColumn, nextColumn, switcher},	Print(		"Before switch: " || (currentColumn << get name) || " >> " || (nextColumn << get name		) || " [Column Switcher] current: " || (columnSwitcher << Get Current)	);	If( nextColumn << get name == "Process 4",		0,		1	););post = Function( {previousColumn, currentColumn, switcher},	Print(		"After switch: " || (previousColumn << get name) || " >> " || (currentColumn <<		get name) || " [Column Switcher] current: " || (columnSwitcher << Get Current)	));handler = columnSwitcher << Make Column Switch Handler( pre, post );columnSwitcher << Run;

```

### Next

**構文:** obj &lt;&lt; Next

**説明:** 列スイッチャーの選択内容を、使用可能な次の選択肢に切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Next;

```

### Pause

**構文:** obj &lt;&lt; Pause

**説明:** アニメーションを一時停止する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );ColumnSwitcherObject << Pause;

```

### Previous

**構文:** obj &lt;&lt; Previous

**説明:** 列スイッチャーの選択内容を、使用可能な直前の選択肢に切り替える。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**構文:** obj &lt;&lt; Remove Column Switcher

**説明:** この列スイッチャーを削除する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Run;Wait( 2/*seconds, while it animates*/ );ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**構文:** obj &lt;&lt; Retain Axis Settings( state=0|1 )

**説明:** 一部のグラフでは、軸のカスタマイズ内容が列の名前に基づいて保存される。デフォルトでは、列を切り替えるとこれらのカスタマイズ内容が削除される。このオプションをオンにすると、列を切り替えたときに列が更新され、新しいグラフにカスタマイズ内容が適用されるようになる。

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );Graph Builder(	Variables( X( :Process 1 ), Y( :Process 2 ) ),	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),	Column Switcher(		:Process 1,		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7},		Retain Axis Settings( 1 )	),	SendToReport(		Dispatch( {}, "Process 1", ScaleBox,			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ),			Add Ref Line( 12, "Solid", "Black", "", 1 )}		)	));

```

### Run

**構文:** obj &lt;&lt; Run

**説明:** アニメーションを開始する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Run;

```

### Script

**構文:** obj &lt;&lt; Script( script )

**説明:** 列が切り替わる際に実行されるスクリプトを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Script(	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) ));ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**構文:** obj &lt;&lt; Set Current( string )

**説明:** 現在の変数(入れ替え後使われるようになるもの)を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**構文:** obj &lt;&lt; Set Layout( 0 = Vertical | 1 = Horizontal )

**説明:** 複数の列スイッチャーのレイアウトを縦(0)または横(1)に設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );gb = dt << Graph Builder(	Variables( X( :Country ), Y( :Weight ) ),	Elements( Bar( X, Y, Legend( 4 ) ) ));cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );cs2 = gb << Column Switcher(	:Weight,	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size});cs1 << Set Layout( 1 );

```

### Set N Lines

**構文:** obj &lt;&lt; Set N Lines( number )

**説明:** 列名のリストボックスの行数を設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**構文:** obj &lt;&lt; Set Script( script )

**説明:** 列が切り替わる際に実行されるスクリプトを設定する。

**JMP追加されたバージョン:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Script(	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) ));ColumnSwitcherObject << Run;Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**構文:** obj &lt;&lt; Set Size( number )

**説明:** 列名のリストボックスの幅をピクセル数で設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**構文:** obj &lt;&lt; Set Speed( number )

**説明:** obj<<setSpeed(60) /\* in Frames Per Minute \*/;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**構文:** obj &lt;&lt; Title( string )

**説明:** 列スイッチャーアウトラインボックスのタイトルを設定する。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});ColumnSwitcherObject << Title( "Switch on X" );

```

