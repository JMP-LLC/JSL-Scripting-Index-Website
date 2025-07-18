# Column Switcher



## 项消息

### Close Outline

**语法:** obj &lt;&lt; Close Outline( state=0|1 )

**说明:** 打开或关闭“列切换器”分级显示框

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Close Outline( 1 );

```

### Get Current

**语法:** obj &lt;&lt; Get Current

**说明:** 获取当前变量的名称

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );
ColumnSwitcherObject << Get Current/*country*/ ;

```

### Get Layout

**语法:** obj &lt;&lt; Get Layout

**说明:** 获取多个列切换器的布局。Vertical(0) 或 horizontal(1)。

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type}, Layout( 1 ) );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
If( cs2 << Get Layout() == 1,
	Print( "Horizontal" ),
	Print( "Vertical" )
);

```

### Get List

**语法:** obj &lt;&lt; Get List

**说明:** 获取可用变量列表

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Get List/*{"sex","country","marital status"}*/ ;

```

### Get Original

**语法:** obj &lt;&lt; Get Original

**说明:** 获取原始变量的名称

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;
ColumnSwitcherObject << Get Original/*marital status*/ ;

```

### Get Speed

**语法:** obj &lt;&lt; Get Speed

**说明:** fpm = obj<<getSpeed /* in Frames Per Minute */;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
FPM = ColumnSwitcherObject << Get Speed;

```

### Link Platform

**语法:** obj &lt;&lt; Link Platform( platform )

**说明:** 将平台链接至该列切换器。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
columnSwitcher = dt << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );
columnSwitcher << Link Platform( gb );

```

### Make Column Switch Handler

**语法:** handler = cs &lt;&lt; Make Column Switch Handler( function(pre), function(post) )

**说明:** 使用回调函数为列切换创建处理程序，该回调函数在切换列之前和之后调用。回调函数接收上一列、下一列和 ColumnSwitcher。切换之前指定的函数应返回非零值以允许切换。返回 0 将阻止切换。切换之后调用的函数不应返回值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
gb = Graph Builder( Variables( Y( :Process 1 ) ), Elements( Histogram( Y, Legend( 3 ) ) ) );
columnSwitcher = gb << Column Switcher(
	:Process 1,
	{:Process 1, :Process 2, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7}
);
pre = Function( {currentColumn, nextColumn, switcher},
	Print(
		"Before switch: " || (currentColumn << get name) || " >> " || (nextColumn << get name
		) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	);
	If( nextColumn << get name == "Process 4",
		0,
		1
	);
);
post = Function( {previousColumn, currentColumn, switcher},
	Print(
		"After switch: " || (previousColumn << get name) || " >> " || (currentColumn <<
		get name) || " [Column Switcher] current: " || (columnSwitcher << Get Current)
	)
);
handler = columnSwitcher << Make Column Switch Handler( pre, post );
columnSwitcher << Run;

```

### Next

**语法:** obj &lt;&lt; Next

**说明:** 将列切换器的选择更改为下一个可用的选择

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Next;

```

### Pause

**语法:** obj &lt;&lt; Pause

**说明:** 暂停动画

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );
ColumnSwitcherObject << Pause;

```

### Previous

**语法:** obj &lt;&lt; Previous

**说明:** 将列切换器的选择更改为前一个可用的选择

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Previous;

```

### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除该列切换器

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;
Wait( 2/*seconds, while it animates*/ );
ColumnSwitcherObject << Remove Column Switcher;

```

### Retain Axis Settings

**语法:** obj &lt;&lt; Retain Axis Settings( state=0|1 )

**说明:** 某些图形根据列的名称存储轴定制。默认情况下，切换列时会删除这些定制。若启用该选项，则切换时列会更新以便定制应用于新图形。

```jsl

dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
Graph Builder(
	Variables( X( :Process 1 ), Y( :Process 2 ) ),
	Elements( Points( X, Y, Legend( 2 ) ), Smoother( X, Y, Legend( 3 ) ) ),
	Column Switcher(
		:Process 1,
		{:Process 1, :Process 3, :Process 4, :Process 5, :Process 6, :Process 7},
		Retain Axis Settings( 1 )
	),
	SendToReport(
		Dispatch( {}, "Process 1", ScaleBox,
			{Min( -0.5 ), Max( 22 ), Inc( 4 ), Minor Ticks( 3 ),
			Add Ref Line( 12, "Solid", "Black", "", 1 )}
		)
	)
);

```

### Run

**语法:** obj &lt;&lt; Run

**说明:** 开始动画

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Run;

```

### Script

**语法:** obj &lt;&lt; Script( script )

**说明:** 设置在列切换时运行的脚本

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Current

**语法:** obj &lt;&lt; Set Current( string )

**说明:** 设置当前变量

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Current( "country" );

```

### Set Layout

**语法:** obj &lt;&lt; Set Layout( 0 = Vertical | 1 = Horizontal )

**说明:** 将多个列切换器的布局设置为垂直 (0) 或水平 (1)。

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );
gb = dt << Graph Builder(
	Variables( X( :Country ), Y( :Weight ) ),
	Elements( Bar( X, Y, Legend( 4 ) ) )
);
cs1 = gb << Column Switcher( :Country, {:Model, :Country, :Type} );
cs2 = gb << Column Switcher(
	:Weight,
	{:Weight, :Turning Circle, :Displacement, :Horsepower, :Gas Tank Size}
);
cs1 << Set Layout( 1 );

```

### Set N Lines

**语法:** obj &lt;&lt; Set N Lines( number )

**说明:** 设置列名列表框中的行数

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set N Lines( 20 );

```

### Set Script

**语法:** obj &lt;&lt; Set Script( script )

**说明:** 设置在列切换时运行的脚本

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Script(
	Print( "New Value: " || Char( ColumnSwitcherObject << Get Current ) )
);
ColumnSwitcherObject << Run;
Wait( 5/*seconds, while it animates*/ );

```

### Set Size

**语法:** obj &lt;&lt; Set Size( number )

**说明:** 设置列名列表框的像素宽度

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Size( 300 );

```

### Set Speed

**语法:** obj &lt;&lt; Set Speed( number )

**说明:** obj<<setSpeed(60) /* in Frames Per Minute */;

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Set Speed( 60 );/*FPM*/ColumnSwitcherObject << Run;

```

### Title

**语法:** obj &lt;&lt; Title( string )

**说明:** 设置 ColumnSwitcher 分级显示框的标题

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
ColumnSwitcherObject << Title( "Switch on X" );

```

