# Process Capability



## 共享项消息

### Action

**语法:** obj << Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

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

**语法:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**匿名预设**

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

**在文件夹内搜索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**按名称搜索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**语法:** obj << Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Copy Script;

```

### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Data Table Window;

```

### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**语法:** obj << Get Container

**说明:** 返回对保留对象内容的容器框的引用。

**带过滤器的平台**

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

**常规**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**语法:** obj << Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**语法:** obj << Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

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

**语法:** obj << Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

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

**语法:** New JSL Preset( preset )

**说明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**语法:** obj << Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Local Data Filter

**语法:** obj << Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

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

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Script to Script Window;

```

### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

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

**语法:** obj << Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**语法:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**语法:** obj = Process Capability(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>启动窗口项: 是</b>

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

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

## 关联的构造器

### Process Capability

**语法:** Process Capability( Process Variables (columns), < Spec Limits() > )

**说明:** 为每个过程计算过程能力分析，并创建有助于同时分析多个过程能力的图形。也可以定义规格限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## 列

### By

**语法:** obj = Process Capability(...<By( column(s) )>...)

<b>启动窗口项: 是</b>

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	By( _bycol )
);

```

### Grouping

**语法:** obj = Process Capability( Process Variables( columns), Grouping( columns) )

**说明:** 将列指定为分组变量。

**示例 1**

```jsl

Names Default To Here( 1 );

dtLimits = Open( "$SAMPLE_DATA/Cheese Manufacturing Limits.jmp" );
dt = Open( "$SAMPLE_DATA/Cheese Manufacturing Data.jmp" );
dt << Process Capability(
	Process Variables( :pH, :Salt Concentration, :Moisture Content ),
	Grouping( :Cheese Type ),
	Spec Limits( Use Limits Table( dtLimits ) ),
	Moving Range Method( Average of Moving Ranges ),
	Goal Plot( 1 ),
	Capability Index Plot( 1 ),
	Process Performance Plot( 0 )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id], :PNP1[:lot_id], :PNP2[:lot_id] ),
	Grouping( :site )
);

```

### Process Variables

**语法:** obj = Process Capability(...Process Variables( column(s) )...)

<b>启动窗口项: 是</b>

**说明:** 指定包含要分析的测量值的过程数据的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);

```

## 项消息

### AIAG (Ppk) Labeling

**语法:** obj << "AIAG (Ppk) Labeling"n( state=0|1 )

**说明:** 将“Cp”标签改为“Pp”标签，开启或关闭能力指标的 AIAG 标签。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer] )
);
obj << Individual Detail Reports( 1 );
Wait( 1 );
obj << "AIAG (Ppk) Labeling"n( 0 );

```

### Capability Box Plots

**语法:** obj << Capability Box Plots( state=0|1 )

**说明:** 为每个过程显示或隐藏箱线图。要创建箱线图，每个过程的值以其目标为中心，并以其规格限统一尺度。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 )
);
Wait( 1 );
obj << Capability Box Plots( 1 );

```

### Capability Index Plot

**语法:** obj << Capability Index Plot( state=0|1, <plot options> )

**说明:** 显示或隐藏一个图形，它绘制每个过程的总 Ppk。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Lognormal ), :Process 2 & Dist( Lognormal ),
		:Process 3 & Dist( Weibull ), :Process 4 & Dist( Lognormal ),
		:Process 5 & Dist( Weibull ), :Process 6 & Dist( Johnson ), :Process 7
	),
	Capability Index Plot( 0 ),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Capability Index Plot( 1 );

```

### Color Out of Spec Values

**语法:** obj << Color Out of Spec Values( state=0|1 )

**说明:** 为数据表中值超出规格限的单元格着色。为值低于下规格限 (LSL) 的单元格着红色，值高于上规格限 (USL) 的单元格着蓝色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Color Out of Spec Values( 1 );

```

### Get Limits

**语法:** obj = Process Capability(...Spec Limits(Get Limits( data table ) )...)

**说明:** 从限值数据表加载规格限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Get Limits( dt2 ) )
);

```

### Goal Plot

**语法:** obj << Goal Plot( state=0|1, <plot options> )

**说明:** 显示或隐藏每个过程对应一个点的图形。规格标准化均值在水平轴上，规格标准化的标准差在垂直轴上。显示在目标弧上方的点表示低于指定的 Ppk (Cpk) 阈值的过程。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Goal Plot( 0 )
);
Wait( 1 );
obj << Goal Plot( 1 );

```

### Individual Detail Reports

**语法:** obj << Individual Detail Reports( state=0|1 )

**说明:** 为每个过程显示或隐藏单独的单项详细能力报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports( 1 );

```

### Individual Detail Reports Cutoff

**语法:** obj << Individual Detail Reports Cutoff( number=1 )

**说明:** 若过程变量数小于等于截止值，则显示单项详细报表并隐藏目标图和能力箱线图。 默认为“1”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Individual Detail Reports Cutoff( 7 );

```

### Make Goal Plot Summary Table

**语法:** obj << Make Goal Plot Summary Table

**说明:** 创建一个新数据表，它包含目标图中绘制的组内点和总体点的坐标。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Make Goal Plot Summary Table;

```

### Order By

**语法:** obj << Order By( "初始顺序"|"反转初始顺序"|"组内 Sigma Cpk 升序"|"组内 Sigma Cpk 降序"|"总 Sigma Ppk 升序"|"总 Sigma Ppk 降序" )

**说明:** 以指定的顺序重新排序所有箱线图、汇总报表和单项详细信息报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Within Sigma Summary Report( 1 );
Wait( 1 );
obj << Order By( "Within Sigma Cpk Ascending" );

```

### Overall Sigma Normalized Box Plots

**语法:** obj << Overall Sigma Normalized Box Plots( state=0|1 )

**说明:** 显示或隐藏每个过程的箱线图。箱线图的值以总均值为中心，以标准差的总估计值统一尺度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Normalized Box Plots( 1 );

```

### Overall Sigma Summary Report

**语法:** obj << Overall Sigma Summary Report( state=0|1 )

**说明:** 显示或隐藏能力指标的汇总报表。能力指标使用标准差的总估计值计算得到。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Overall Sigma Summary Report( 1 );

```

### Process Performance Plot

**语法:** obj << Process Performance Plot( state=0|1, <plot options> )

**说明:** 显示或隐藏“稳定性-总能力 Ppk”的四象限图。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 ),

);
obj << Process Performance Plot( 1 );

```

### Save Distributions as Column Properties

**语法:** obj << Save Distributions as Column Properties

**说明:** 将用于计算能力的分布保存为“过程能力分布”列属性。将为分析中的每个过程变量保存列属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE & Dist( Johnson ), :CO, :SO2 & Dist( Lognormal ), :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Distributions as Column Properties;

```

### Save In Spec Indicator Formulas

**语法:** obj << Save In Spec Indicator Formulas

**说明:** 在数据表中创建新的公式列。新列包含一个值，该值指示某行是否在规格限内。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save In Spec Indicator Formulas;

```

### Save Spec Limits as Column Properties

**语法:** obj << Save Spec Limits as Column Properties

**说明:** 将规格限保存至分析中每个过程变量的列属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Save Spec Limits as Column Properties;

```

### Save Spec Limits to New Table

**语法:** obj << Save Spec Limits to New Table

**说明:** 创建一个新数据表，它包含代表每个过程变量的每一列的规格限、过程重要性和分布。该表为高格式，为每个过程变量包含一行。过程重要性和分布类型仅在适用时保存。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Save Spec Limits to New Table;

```

### Select Out of Spec Values

**语法:** obj << Select Out of Spec Values( state=0|1 )

**说明:** 选择数据表中包含至少一个未落在规格限内的值的所有行和列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Import Spec Limits( "$SAMPLE_DATA/CitySpecLimits.jmp" ) )
);
obj << Select Out of Spec Values( 1 );

```

### Use Limits Table

**语法:** obj = Process Capability(...Spec Limits(Use Limits Table( data table ) )...)

**说明:** 从限值数据表加载规格限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE, :CO, :SO2, :NO ),
	Spec Limits( Use Limits Table( dt2 ) )
);

```

### Within Sigma Normalized Box Plots

**语法:** obj << Within Sigma Normalized Box Plots( state=0|1 )

**说明:** 显示或隐藏一个图形，它包含每个过程的箱线图。箱线图的值以均值为中心，并除以标准差的子组内估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Normalized Box Plots( 1 );

```

### Within Sigma Summary Report

**语法:** obj << Within Sigma Summary Report( state=0|1 )

**说明:** 显示或隐藏能力指标的汇总报表。能力指标使用标准差的子组内估计值计算得到。仅对具有指定正态分布的变量显示结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << Within Sigma Summary Report( 1 );

```

### Within or Between-and-Within Sigma Normalized Box Plots

**语法:** obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( state=0|1 )

**说明:** 显示或隐藏一个图形，它包含每个过程的箱线图。箱线图的值以均值为中心，并除以标准差的组内估计值或组间组内估计值（若指定）。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Normalized Box Plots"n( 1 );

```

### Within or Between-and-Within Sigma Summary Report

**语法:** obj << "Within or Between-and-Within Sigma Summary Report"n( state=0|1 )

**说明:** 显示或隐藏能力指标的汇总报表。能力指标使用标准差的组内估计值或组间组内估计值（若指定）计算得到。只有在启动窗口中为至少一个过程选择了“计算组间组内能力”选项时，该选项才可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 0 );
obj << "Within or Between-and-Within Sigma Summary Report"n( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons > Process Capability Probability Plots

### 项消息

#### Parametric Fit Confidence Limits Shading

**语法:** scrobj << Parametric Fit Confidence Limits Shading( state=0|1 )

**说明:** 显示或隐藏参数拟合的置信限着色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Parametric Fit Confidence Limits Shading( 1 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Confidence Limits Shading( 0 );

```

#### Parametric Fit Line

**语法:** scrobj << Parametric Fit Line( state=0|1 )

**说明:** 显示或隐藏参数拟合线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots( 1, Lognormal Probability Plot( Parametric Fit Line( 0 ) ) )
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Parametric Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**语法:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**说明:** 显示或隐藏联合经验置信限。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot( Simultaneous Empirical Confidence Limits( 0 ) )
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**语法:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**说明:** 显示或隐藏联合经验置信限的着色。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Lognormal,
			Probability Plots(
				1,
				Lognormal Probability Plot(
					Simultaneous Empirical Confidence Limits Shading( 0 )
				)
			)
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1(Lognormal) Probability Plot"] << get scriptable object);
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis > Process Capability Analysis Comparisons

### 项消息

#### Comparison Details

**语法:** scrobj << Comparison Details( state=0|1 )

**说明:** 显示或隐藏包含每个分布的 AICc、BIC 和 -2对数似然值的报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Details( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Details( 1 );

```

#### Comparison Histogram

**语法:** scrobj << Comparison Histogram( state=0|1 )

**说明:** 显示或隐藏分布比较直方图。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1,
			<<Fit Normal,
			<<Fit Gamma,
			<<Fit Johnson,
			<<Fit Lognormal,
			<<Fit Weibull,
			Comparison Histogram( 0 )
		)
	)}
);
Wait( 1 );
scrobj = Report( obj )["Compare Distributions"] << Get Scriptable Object;
scrobj << Comparison Histogram( 1 );

```

#### Fit Beta

**语法:** scrobj << Compare Distributions( 1, <<Fit Beta )

**说明:** 在“比较详细信息”报表中显示 beta 分布拟合统计量并在直方图中显示密度曲线。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/cities.jmp" );
obj = dt << Process Capability(
	Process Variables( :OZONE ),
	Spec Limits( OZONE( LSL( 0.05 ), Target( 0.15 ), USL( 0.4 ) ) ),
	Individual Detail Reports( 1 ),
	{:OZONE << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["OZONE Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Beta );

```

#### Fit Exponential

**语法:** scrobj << Compare Distributions( 1, <<Fit Exponential )

**说明:** 在“比较详细信息”报表中显示指数分布拟合统计量并在直方图中显示密度曲线。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Exponential );

```

#### Fit Gamma

**语法:** scrobj << Compare Distributions( 1, <<Fit Gamma )

**说明:** 在“比较详细信息”报表中显示 gamma 分布拟合统计量并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Gamma );

```

#### Fit Johnson

**语法:** scrobj << Compare Distributions( 1, <<Fit Johnson )

**说明:** 在“比较详细信息”报表中显示 Johnson 分布拟合统计量并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Johnson );

```

#### Fit Largest Extreme Value

**语法:** scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value )

**说明:** 在“比较详细信息”报表中显示最大极值分布拟合统计量并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Largest Extreme Value );

```

#### Fit Lognormal

**语法:** scrobj << Compare Distributions( 1, <<Fit Lognormal )

**说明:** 在“比较详细信息”报表中显示对数正态分布拟合统计量并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

#### Fit Nonparametric

**语法:** scrobj << Compare Distributions( 1, <<Fit Nonparametric )

**说明:** 显示非参数分布核带宽滑块并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Nonparametric );

```

#### Fit Normal

**语法:** scrobj << Compare Distributions( 1, <<Fit Normal )

**说明:** 在“比较详细信息”报表中显示正态分布拟合统计量并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);

```

#### Fit SHASH

**语法:** scrobj << Compare Distributions( 1, <<Fit SHASH )

**说明:** 在“比较详细信息”报表中显示 SHASH 分布拟合统计量并在直方图中显示密度曲线。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

#### Fit Smallest Extreme Value

**语法:** scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value )

**说明:** 在“比较详细信息”报表中显示最小极值分布拟合统计量并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Smallest Extreme Value );

```

#### Fit Weibull

**语法:** scrobj << Compare Distributions( 1, <<Fit Weibull )

**说明:** 在“比较详细信息”报表中显示 Weibull 分布拟合统计量并在直方图中显示密度曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit Weibull );

```

#### Mixture of 2 Normals

**语法:** scrobj << Compare Distributions( 1, <<Mixture of 2 Normals )

**说明:** 在“比较详细信息”报表中显示 2 个正态混合分布拟合统计量并在直方图中显示密度曲线。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 2 Normals );

```

#### Mixture of 3 Normals

**语法:** scrobj << Compare Distributions( 1, <<Mixture of 3 Normals )

**说明:** 在“比较详细信息”报表中显示 3 个正态混合分布拟合统计量并在直方图中显示密度曲线。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Mixture of 3 Normals );

```

#### Order by Comparison Criterion

**语法:** scrobj << Order by Comparison Criterion( "AICc"|"BIC"|"-2Loglikelihood" )

**说明:** 重新排序“比较详细信息”报表。它可以按 AICc、BIC 或 -2对数似然重新排序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis(
		Compare Distributions(
			1, <<Fit Normal, <<Fit Gamma, <<Fit Johnson, <<Fit Lognormal, <<Fit Weibull,
		)
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Order by Comparison Criterion( "-2Loglikelihood" );

```

#### Probability Plots

**语法:** scrobj << Probability Plots( state=0|1 )

**说明:** 显示或隐藏分布比较概率图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal, <<Fit Lognormal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Compare Distributions"] << get scriptable object);
scrobj << Probability Plots( 1 );

```

## Process Capability Analysis > Process Capability Analysis Histogram

### 项消息

#### Show Between-and-Within Sigma Density

**语法:** scrobj << "Show Between-and-Within Sigma Density"n( state=0|1 )

**说明:** 在直方图中显示或隐藏使用组间组内 Sigma 的密度曲线。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Within Subgroup Variation( Average of Unbiased Standard Deviations ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		Histogram( 1, "Show Between-and-Within Sigma Density"n( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << "Show Between-and-Within Sigma Density"n( 1 );

```

#### Show Count Axis

**语法:** scrobj << Show Count Axis( state=0|1 )

**说明:** 在直方图框架右侧显示或隐藏计数轴。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Count Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Count Axis( 1 );

```

#### Show Density Axis

**语法:** scrobj << Show Density Axis( state=0|1 )

**说明:** 在直方图框架右侧显示或隐藏密度轴。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Density Axis( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Density Axis( 1 );

```

#### Show Overall Sigma Density

**语法:** scrobj << Show Overall Sigma Density( state=0|1 )

**说明:** 在直方图中显示或隐藏使用总 sigma 的密度曲线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Overall Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Overall Sigma Density( 1 );

```

#### Show Spec Limits

**语法:** scrobj << Show Spec Limits( state=0|1 )

**说明:** 在直方图中显示或隐藏上下规格限。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Spec Limits( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Spec Limits( 1 );

```

#### Show Target

**语法:** scrobj << Show Target( state=0|1 )

**说明:** 在直方图中显示或隐藏目标线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis( Histogram( 1, Show Target( 0 ) ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Target( 1 );

```

#### Show Within Sigma Density

**语法:** scrobj << Show Within Sigma Density( state=0|1 )

**说明:** 在直方图中显示或隐藏使用组内 sigma 的密度曲线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date]) << Process Capability Analysis(
		Histogram( 1, Show Within Sigma Density( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Histogram"] << get scriptable object);
scrobj << Show Within Sigma Density( 1 );

```

## Process Capability Analysis > Process Capability Interactive Plot

### 项消息

#### Capability

**语法:** scrobj << Capability( state=0|1 )

**说明:** 显示或隐藏能力指标。原始能力指标基于总 sigma。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Capability( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Capability( 1 );

```

#### Nonconformance

**语法:** scrobj << Nonconformance( state=0|1 )

**说明:** 显示或隐藏不合格。原始不合格值基于总 Sigma。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, Nonconformance( 0 ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Nonconformance( 1 );

```

#### Revert to Original Values

**语法:** scrobj << Revert to Original Values

**说明:** 将交互式能力图恢复为其原始值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( Mean( 400 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Revert to Original Values;

```

#### Save New Spec Limits as a Column Property

**语法:** scrobj << Save New Spec Limits as a Column Property

**说明:** 将新的规格限保存为原始数据表中的列属性。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis(
		Process Summary( 0 ),
		Overall Sigma Capability( 0 ),
		Nonconformance( 0 ),
		Within Sigma Capability( 0 ),
		Histogram( 0 ),
		Interactive Capability Plot( 1, New Values( LSL( 150 ), Target( 300 ), USL( 450 ) ) )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Interactive Capability Plot"] << get scriptable object);
scrobj << Save New Spec Limits as a Column Property;

```

## Process Capability Analysis > Process Capability Normal Probability Plot

### 项消息

#### Normal Fit Confidence Limits Shading

**语法:** scrobj << Normal Fit Confidence Limits Shading( state=0|1 )

**说明:** 显示或隐藏正态概率图中的正态拟合置信限着色。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Confidence Limits Shading( 1 );

```

#### Normal Fit Line

**语法:** scrobj << Normal Fit Line( state=0|1 )

**说明:** 显示或隐藏正态概率图中的正态拟合线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Normal Fit Line( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Normal Fit Line( 1 );

```

#### Simultaneous Empirical Confidence Limits

**语法:** scrobj << Simultaneous Empirical Confidence Limits( state=0|1 )

**说明:** 在“过程能力”报表的正态概率图中显示或隐藏联合经验置信限。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits( 1 );

```

#### Simultaneous Empirical Confidence Limits Shading

**语法:** scrobj << Simultaneous Empirical Confidence Limits Shading( state=0|1 )

**说明:** 在“过程能力”报表的正态概率图中显示或隐藏联合经验置信限着色。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis(
		Normal Probability Plot( 1, Simultaneous Empirical Confidence Limits Shading( 0 ) )
	)}
);
Wait( 2 );
scrobj = Report( obj )["Normal Probability Plot"] << get scriptable object;
scrobj << Simultaneous Empirical Confidence Limits Shading( 1 );

```

## Process Capability Analysis

### 项消息

#### Between-and-Within Sigma Capability

**语法:** scrobj << "Between-and-Within Sigma Capability"n( state=0|1 )

**说明:** 显示或隐藏使用组间组内 Sigma 的能力指标。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Capability"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << Get Scriptable Object;
scrobj << "Between-and-Within Sigma Capability"n( 1 );

```

#### Between-and-Within Sigma Target Index

**语法:** scrobj << "Between-and-Within Sigma Target Index"n( state=0|1 )

**说明:** 显示或隐藏基于组间组内 sigma 的目标指标的估计值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Target Index"n( 1 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Target Index"n( 0 );

```

#### Between-and-Within Sigma Z Benchmark

**语法:** scrobj << "Between-and-Within Sigma Z Benchmark"n( state=0|1 )

**说明:** 显示或隐藏使用组间组内 Sigma 的 Z 基准指标。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] & Between ),
	Individual Detail Reports( 1 ),
	{(:Gap[:Date] & Between) << Process Capability Analysis(
		"Between-and-Within Sigma Z Benchmark"n( 0 )
	)}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << "Between-and-Within Sigma Z Benchmark"n( 1 );

```

#### Compare Distributions

**语法:** scrobj << Compare Distributions( state=0|1, < <<distribution options > )

**说明:** 显示或隐藏用于比较过程分布的控制面板。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << get scriptable object;
scrobj << Compare Distributions( 1, <<Fit Lognormal );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 1, <<Fit SHASH );

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Lognormal ) ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	Capability Box Plots( 1 ),
	Capability Index Plot( 1 ),
	{(:Process 1 & Dist( Lognormal )) <<
	Process Capability Analysis( Compare Distributions( 1, <<Fit Normal ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Lognormal) Capability"] << Get Scriptable Object;
scrobj << Compare Distributions(
	1, <<Fit Gamma, <<Fit Johnson, <<FitLognormal, <<Fit Weibull
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 ),
	Moving Range Method( Average of Moving Ranges ),
	Individual Detail Reports( 1 ),
	{:Process 1 << Process Capability Analysis(
		Compare Distributions( 1, <<Fit Normal, <<Fit Gamma )
	)}
);
Wait( 1 );
scrobj = (Report( obj )["Process 1 Capability"] << get scriptable object);
scrobj << Compare Distributions( 0 );

```

#### Fix Parameters

**语法:** scrobj << Fix Parameters( vector )

**说明:** 将某些参数固定为指定值并重新估计其余参数。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Process 1 & Dist( Weibull ) ),
	Individual Detail Reports( 1 ),
	{(:Process 1 & Dist( Weibull )) <<
	Process Capability Analysis( Fix Parameters( [11, .] ) )}
);
Wait( 1 );
scrobj = Report( obj )["Process 1(Weibull*) Capability"] << get scriptable object;
scrobj << Fix Parameters( [., .] );

```

#### Histogram

**语法:** scrobj << Histogram( state=0|1 )

**说明:** 在“单项详细报表”中显示或隐藏过程数据的直方图。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Histogram( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Histogram( 1 );

```

#### Interactive Capability Plot

**语法:** scrobj << Interactive Capability Plot( state=0|1 )

**说明:** 显示或隐藏交互式能力报表，它允许您探索对过程或规格限的更改如何影响能力。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables( :PNP1 ),
	Individual Detail Reports( 1 ),
	{:PNP1 << Process Capability Analysis( Interactive Capability Plot( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["PNP1 Capability"] << get scriptable object;
scrobj << Interactive Capability Plot( 1 );

```

#### Nonconformance

**语法:** scrobj << Nonconformance( state=0|1 )

**说明:** 显示或隐藏落在规格限之外的观测的观测百分比和期望百分比的报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Nonconformance( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Nonconformance( 1 );

```

#### Nonparametric Density

**语法:** scrobj << Nonparametric Density( state=0|1 )

**说明:** 显示或隐藏“非参数密度”报表，它提供用于拟合非参数分布的核带宽。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Purity & Dist( Nonparametric ) ),
	Individual Detail Reports( 1 ),
	{(:Purity & Dist( Nonparametric )) <<
	Process Capability Analysis( Nonparametric Density( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Purity(Nonparametric) Capability"] << get scriptable object;
scrobj << Nonparametric Density( 1 );

```

#### Normal Probability Plot

**语法:** scrobj << Normal Probability Plot( state=0|1 )

**说明:** 显示或隐藏正态概率图。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),

);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Normal Probability Plot( 1 );

```

#### Overall Sigma Capability

**语法:** scrobj << Overall Sigma Capability( state=0|1 )

**说明:** 显示或隐藏基于总 sigma 的能力指标。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Capability( 1 );

```

#### Overall Sigma Z Benchmark

**语法:** scrobj << Overall Sigma Z Benchmark( state=0|1 )

**说明:** 显示或隐藏基于总 sigma 的 Z 基准指标。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Overall Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Overall Sigma Z Benchmark( 1 );

```

#### Parameter Estimates

**语法:** scrobj << Parameter Estimates( state=0|1 )

**说明:** 显示或隐藏非正态参数分布的参数估计值报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables( :Thickness & Dist( Johnson ) ),
	Individual Detail Reports( 1 ),
	{(:Thickness & Dist( Johnson )) <<
	Process Capability Analysis( Parameter Estimates( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Thickness(Johnson) Capability"] << get scriptable object;
scrobj << Parameter Estimates( 1 );

```

#### Process Summary

**语法:** scrobj << Process Summary( state=0|1 )

**说明:** 显示或隐藏过程汇总统计量。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Process Summary( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Process Summary( 1 );

```

#### Within Sigma Capability

**语法:** scrobj << Within Sigma Capability( state=0|1 )

**说明:** 显示或隐藏基于组内 sigma 的能力指标及其置信区间。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Capability( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Capability( 1 );

```

#### Within Sigma Target Index

**语法:** scrobj << Within Sigma Target Index( state=0|1 )

**说明:** 显示或隐藏基于组内 sigma 的目标指标的估计值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Target Index( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Target Index( 1 );

```

#### Within Sigma Z Benchmark

**语法:** scrobj << Within Sigma Z Benchmark( state=0|1 )

**说明:** 显示或隐藏基于组内 sigma 的 Z 基准指标。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << Process Capability(
	Process Variables( :Gap[:Date] ),
	Individual Detail Reports( 1 ),
	{:Gap[:Date] << Process Capability Analysis( Within Sigma Z Benchmark( 0 ) )}
);
Wait( 1 );
scrobj = Report( obj )["Gap[Date] Capability"] << get scriptable object;
scrobj << Within Sigma Z Benchmark( 1 );

```

## Process Capability Goal Plot

### 项消息

#### Capability Lines

**语法:** obj << Goal Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**说明:** 设置控制目标图中目标三角线的 Ppk (Cpk) 值。该值还出现在 Ppk (Cpk) 编辑框中。 默认为“1.0”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Capability Lines( 1.5 ) );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1 );

```

#### Defect Rate Contour

**语法:** obj << Goal Plot( 1, Defect Rate Contour( number=0.0001 ) ); 

scrobj << Defect Rate Contour( number=0.0001 )

**说明:** 显示或隐藏指定的缺陷率等高线。 默认为“0.0001”。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Defect Rate Contour( 0.01 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Defect Rate Contour( 0.01 );

```

#### Label Overall Sigma Points

**语法:** obj << Goal Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**说明:** 显示或隐藏目标图上点的标签。这些点使用总 sigma 估计值计算得到。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Label Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 1 );

```

#### Label Within Sigma Points

**语法:** obj << Goal Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**说明:** 显示或隐藏目标图上点的标签。这些点使用组内 sigma 估计值计算得到。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**语法:** obj << Goal Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**说明:** 显示或隐藏目标图上点的标签。这些点使用组内 sigma 估计值或组间组内 sigma 估计值（若指定）计算得到。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
obj << Goal Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	Show Overall Sigma Points( 0 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**语法:** obj << Goal Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**说明:** 在目标图中显示或隐藏 Ppk (Cpk) 水平着色。若 p 代表在编辑框中输入的 Ppk (Cpk) 目标，则 Ppk (Cpk) 大于 2*p 的过程着绿色；Ppk (Cpk) 小于 p 的过程着红色；Ppk (Cpk) 大于 p 且小于 2*p 的过程着黄色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
obj << Goal Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**语法:** obj << Goal Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**说明:** 显示或隐藏目标图上的点。这些点使用总 sigma 估计值计算得到。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),

);
Wait( 1 );
obj << Goal Plot( 1, Show Overall Sigma Points( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**语法:** obj << Goal Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**说明:** 显示或隐藏目标图上的点。这些点使用组内 sigma 估计值计算得到。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**语法:** obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**说明:** 显示或隐藏目标图上的点。这些点使用组内 sigma 估计值或组间组内 sigma 估计值（若指定）计算得到。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	)
);
Wait( 1 );
obj << Goal Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Goal Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Index Plot

### 项消息

#### Capability Lines

**语法:** obj << Capability Index Plot( 1, Capability Lines( number=1.0 ) ); 

scrobj << Capability Lines( number=1.0 )

**说明:** 设置控制能力指标图中 Ppk (Cpk) 参考线的 Ppk (Cpk) 值。该值还出现在 Ppk (Cpk) 编辑框中。 默认为“1.0”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1 & Dist( Johnson ), :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal )
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Capability Lines( 2.0 ) );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Lines( 1.0 );

```

#### Label Overall Sigma Points

**语法:** obj << Capability Index Plot( 1, Label Overall Sigma Points( state=0|1 ) ); 

scrobj << Label Overall Sigma Points( state=0|1 )

**说明:** 显示或隐藏能力指标图上点的标签。这些点使用总 sigma 估计值计算得到。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Label Overall Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Overall Sigma Points( 0 );

```

#### Label Within Sigma Points

**语法:** obj << Capability Index Plot( 1, Label Within Sigma Points( state=0|1 ) ); 

scrobj << Label Within Sigma Points( state=0|1 )

**说明:** 显示或隐藏能力指标图上点的标签。这些点使用组内 sigma 估计值计算得到。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Label Within Sigma Points( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Label Within Sigma Points( 0 );

```

#### Label Within or Between-and-Within Sigma Points

**语法:** obj << Capability Index Plot( 1, "Label Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Label Within or Between-and-Within Sigma Points"n( state=0|1 )

**说明:** 显示或隐藏能力指标图上点的标签。这些点使用组内 sigma 估计值或组间组内 sigma 估计值（若指定）计算得到。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	"Show Within or Between-and-Within Sigma Points"n( 1 ),
	"Label Within or Between-and-Within Sigma Points"n( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Label Within or Between-and-Within Sigma Points"n( 0 );

```

#### Shade Levels

**语法:** obj << Capability Index Plot( 1, Shade Levels( state=0|1 ) ); 

scrobj << Shade Levels( state=0|1 )

**说明:** 在能力指标图中显示或隐藏 Ppk (Cpk) 水平着色。若 p 代表在编辑框中输入的 Ppk (Cpk) 值，则 Ppk (Cpk) 大于 2*p 的过程着绿色；Ppk (Cpk) 小于 p 的过程着红色；Ppk (Cpk) 大于 p 且小于 2*p 的过程着黄色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Shade Levels( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Shade Levels( 0 );

```

#### Show Overall Sigma Points

**语法:** obj << Capability Index Plot( 1, Show Overall Sigma Points( state=0|1 ) ); 

scrobj << Show Overall Sigma Points( state=0|1 )

**说明:** 显示或隐藏能力指标图上的点。这些点使用总 sigma 估计值计算得到。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot(
	1,
	Show Within Sigma Points( 1 ),
	Show Overall Sigma Points( 0 )
);
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Overall Sigma Points( 1 );

```

#### Show Within Sigma Points

**语法:** obj << Capability Index Plot( 1, Show Within Sigma Points( state=0|1 ) ); 

scrobj << Show Within Sigma Points( state=0|1 )

**说明:** 显示或隐藏能力指标图上的点。这些点使用组内 sigma 估计值计算得到。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Process Measurements.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:Process 1, :Process 2 & Dist( Lognormal ), :Process 3,
		:Process 4 & Dist( Lognormal ), :Process 5 & Dist( Weibull ), :Process 6, :Process 7
	),
	Moving Range Method( Average of Moving Ranges ),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, Show Within Sigma Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << Show Within Sigma Points( 0 );

```

#### Show Within or Between-and-Within Sigma Points

**语法:** obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( state=0|1 ) ); 

scrobj << "Show Within or Between-and-Within Sigma Points"n( state=0|1 )

**说明:** 显示或隐藏能力指标图上的点。这些点使用组内 sigma 估计值或组间组内 sigma 估计值（若指定）计算得到。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer] & Between, :PNP1[:lot_id, :wafer] & Between,
		:PNP2[:lot_id, :wafer], :NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Goal Plot( 0 ),
	Process Performance Plot( 0 )
);
obj << Capability Index Plot( 1, "Show Within or Between-and-Within Sigma Points"n( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Capability Index Plot"] << get scriptable object);
scrobj << "Show Within or Between-and-Within Sigma Points"n( 0 );

```

## Process Capability Performance Plot

### 项消息

#### Capability Boundary

**语法:** obj << Process Performance Plot( 1, Capability Boundary( number=1.0 ) ); 

scrobj << Capability Boundary( number=1.0 )

**说明:** 设置总能力 Ppk 值，该值用于控制有能力对比没有能力的过程性能图边界。该值还显示在“总 Ppk”编辑框中。 默认为“1.0”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Capability Boundary( 1.33 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Capability Boundary( 1 );

```

#### Label Points

**语法:** obj << Process Performance Plot( 1, Label Points( state=0|1 ) ); 

scrobj << Label Points( state=0|1 )

**说明:** 显示或隐藏过程名称，它作为过程性能图中点的标签。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Label Points( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Label Points( 0 );

```

#### Show Within Cpk Curve

**语法:** obj << Process Performance Plot( 1, Show Within Cpk Curve( state=0|1 ) ); 

scrobj << Show Within Cpk Curve( state=0|1 )

**说明:** 在过程性能图中显示或隐藏“组内 Cpk”曲线。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
obj << Process Performance Plot( 1, Show Within Cpk Curve( 0 ) );
Wait( 1 );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
scrobj << Show Within Cpk Curve( 1 );

```

#### Stability Boundary

**语法:** obj << Process Performance Plot( 1, Stability Boundary( number=1.25 ) ); 

scrobj << Stability Boundary( number=1.25 )

**说明:** 设置稳定性比值，该值用于控制稳定对比不稳定的过程性能图边界。 默认为“1.25”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Capability(
	Process Variables(
		:NPN1[:lot_id, :wafer], :PNP1[:lot_id, :wafer], :PNP2[:lot_id, :wafer],
		:NPN2[:lot_id, :wafer], :PNP3[:lot_id, :wafer]
	),
	Capability Box Plots( 0 ),
	Process Performance Plot( 1 ),
	Goal Plot( 0 ),
	Capability Index Plot( 0 )
);
Wait( 1 );
obj << Process Performance Plot( 1, Stability Boundary( 1.7 ) );
scrobj = (Report( obj )["Process Performance Plot"] << get scriptable object);
Wait( 1 );
scrobj << Stability Boundary( 1.25 );

```

