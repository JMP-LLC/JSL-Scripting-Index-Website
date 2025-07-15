# Process Screening



## 共享项消息

### Action

**语法:** obj &lt;&lt; Action

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

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

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

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

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

### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Data Table Window;

```

### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**语法:** obj &lt;&lt; Get Container

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
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

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

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

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

**语法:** obj &lt;&lt; Local Data Filter

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

**语法:** obj &lt;&lt; Paste Local Data Filter

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

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Remove Local Data Filter

**语法:** obj &lt;&lt; Remove Local Data Filter

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

**语法:** obj &lt;&lt; Report;Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

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
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
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
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
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

**语法:** obj &lt;&lt; Sync to Data Table Changes

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

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

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

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**语法:** obj = Process Screening(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

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

### Process Screening

**语法:** Process Screening( Process Variables( columns ) )

**说明:** 从多个角度检查许多过程，包括稳定性、能力、控制图检验和偏移（漂移）。能够帮助关注于需要注意的过程。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

## 列

### By

**语法:** obj = Process Screening(...&lt;By( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Process Screening(
	Grouping( :Site ),
	Process Variables( Eval( 5 :: 132 ) ),
	By( _bycol )
);

```

### Grouping

**语法:** obj = Process Screening(...&lt;Grouping( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 在指定分组列的每个水平组合下分析每个过程变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Process Variables

**语法:** obj = Process Screening(...Process Variables( column(s) )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含要分析的测量值的过程数据的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Grouping( :Site ), Process Variables( Eval( 5 :: 132 ) ) );

```

### Subgroup

**语法:** obj = Process Screening(...&lt;Subgroup( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 分配一个或多个子组变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Time

**语法:** obj = Process Screening(...&lt;Time( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 分配指定数据的时间顺序的列。在执行计算之前，过程数据按“时间”变量排序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Prices.jmp" );
obj = dt << Process Screening(
	Process Variables( :Price ),
	Grouping( :Series ),
	Control Chart Type( "XBar and R" ),
	Time( :Date ),
	Subgroup Sample Size( 3 )
);

```

### n Trials

**语法:** obj = Process Screening(...&lt;n Trials( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 分配包含试验次数的列。该数字用作 P 图缺陷比例的分母。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Washers.jmp" );
dt << Process Screening(
	Process Variables( :"# defective"n ),
	Control Chart Type( "Proportion" ),
	n Trials( :Lot Size 2 ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] )
);

```

## 项消息

### Action Lower Quantile Prob

**语法:** obj = Process Screening(...Action Lower Quantile Prob( number=. )...)

**说明:** 指定确定“操作限”的值的概率。对于计数过程，若限值表中未指定“操作限”，则根据基于该概率的估计分位数进行设置。 默认为“.”。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Action Upper Quantile Prob

**语法:** obj = Process Screening(...Action Upper Quantile Prob( number=0.9985 )...)

**说明:** 指定确定“操作限”的值的概率。对于计数过程，若限值表中未指定“操作限”，则根据基于该概率的估计分位数进行设置。 默认为“0.9985”。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Alarm Graph

**语法:** obj &lt;&lt; Alarm Graph( state=0|1 )

**说明:** 显示或隐藏警报图，Y 轴上显示发出警报的过程，X 轴上显示发生的时间。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);

```

### Alert Lower Quantile Prob

**语法:** obj = Process Screening(...Alert Lower Quantile Prob( number=. )...)

**说明:** 指定确定“警示限”的值的概率。对于计数过程，若限值表中未指定“警示限”，则根据基于该概率的估计分位数进行设置。 默认为“.”。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Lower Quantile Prob( 0.05 ),
	Action Lower Quantile Prob( 0.01 )
);

```

### Alert Upper Quantile Prob

**语法:** obj = Process Screening(...Alert Upper Quantile Prob( number=0.975 )...)

**说明:** 指定确定“警示限”的值的概率。对于计数过程，若限值表中未指定“警示限”，则根据基于该概率的估计分位数进行设置。 默认为“0.975”。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alert Upper Quantile Prob( 0.95 ),
	Action Upper Quantile Prob( 0.99 )
);

```

### Chart Options Drift Graph

**语法:** obj &lt;&lt; Chart Options Drift Graph( options )

**说明:** 允许您为“已选定漂移图形”选项生成的图表编写其他选项脚本。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ), Connect Points( 0 ) );

```

### Chart Options Graphlet

**语法:** obj &lt;&lt; Chart Options Graphlet( options )

**说明:** 允许您为 graphlet 编写其他选项脚本。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Process Variables( :NPN1, :PNP1, :PNP2, :NPN2, :PNP3 ),
	Subgroup( :lot_id, :wafer ),
	Control Chart Type( "XBar and R" ),
	Process Performance Graph( 1 ),
	Chart Options Graphlet( Show Markers( 1 ) ),
	SendToReport(
		Dispatch( {"Process Performance Graph"}, "ProcessScreening Graph", FrameBox,
			Add Pin Annotation(
				Seg( Marker Seg( 1 ) ),
				Index( 4 ),
				Index Row( 4 ),
				UniqueID( 4 ),
				FoundPt( {320, 564} ),
				Origin( {1, 0.24} ),
				RightOfCenter( 0 ),
				Tag Line( 1 )
			)
		)
	)
);

```

### Chart Options as Selected

**语法:** obj &lt;&lt; Chart Options as Selected( options )

**说明:** 允许您通过“将图表显示为选定的项”选项生成的图表编写其他选项脚本。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

### Chart Options for Selected

**语法:** obj &lt;&lt; Chart Options for Selected( options )

**说明:** 允许您为“为选定的项显示图表”选项生成的图表编写其他选项脚本。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

### Color Out of Spec Values

**语法:** obj &lt;&lt; Color Out of Spec Values

**说明:** 基于规格限为数据表中的值着色。蓝色表示该值低于下规格限。红色表示该值高于上规格限。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :PNP3, :IVP1, :IVP2 ) );
obj << Color Out of Spec Values;

```

### Color Selected Items

**语法:** obj &lt;&lt; Color Selected Items( color )

**说明:** 将指定的颜色应用于汇总表中的选定行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Find and Select( "PNP1" ),
	Color Selected Items( "Blue" )
);
obj << Find and Select( "NPN1" );
obj << Color Selected Items( "Red" );
obj << Find and Select( "NPN2" );

```

### Control Chart Builder

**语法:** obj &lt;&lt; Control Chart Builder

**说明:** 为您在汇总表中选择的过程打开“控制图生成器”报表窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Control Chart Builder
);

```

### Control Chart Type

**语法:** obj = Process Screening(...Control Chart Type( "Indiv and MR"|"XBar and R"|"XBar and S"|"XBar MR and R"|"XBar MR and S"|"Count"|"Nonnegative Continuous"|"Proportion" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定五种控制图计算类型中的一种。默认为“单值和 MR”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" )
);

```

### Count

**语法:** obj &lt;&lt; Count( state=0|1 )

**说明:** 显示或隐藏汇总表中的“计数”列。该列包含观测数。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Count( 0 );

```

### Cp

**语法:** obj &lt;&lt; Cp( state=0|1 )

**说明:** 显示或隐藏汇总表中的“Cp”列。该列包含解决了目标和漂移问题后的潜在能力。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cp( 1 ) );

```

### Cpk

**语法:** obj &lt;&lt; Cpk( state=0|1 )

**说明:** 显示或隐藏汇总表中的“Cpk”列。该列包含基于“组内 Sigma”或“组间组内 Sigma”并假定服从正态分布的 Cpk 短期能力指标。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Cpk( 0 ) );
Wait( 1 );
obj << Cpk( 1 );

```

### Drift Alpha

**语法:** obj = Process Screening(...Drift Alpha( number=. )...)

**说明:** 指定漂移检测中位置的 Holt-Winters 平滑权重。该值通常为估计得到的，而不是指定的。若它是指定的，您必须在启动脚本中指定它。 默认为“.”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Alpha( .6 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Beta

**语法:** obj = Process Screening(...Drift Beta( number=.05 )...)

**说明:** Specifies the weight that is used in the Holt Double-Exponential Smoother for drift detection. 默认为“.05”。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Beta( .1 ),
	Select All,
	Drift Graph Selected
);

```

### Drift Graph Selected

**语法:** obj &lt;&lt; Drift Graph Selected( &lt;{ process list }&gt; )

**说明:** 显示您在汇总表中选择的每个过程的漂移图形。绘制的值是来自 Holt 双指数平滑模型的斜率估计值。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Drift Graph Selected
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), );
Wait( 1 );
obj << Drift Graph Selected( {{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}} );

```

### Drift Summaries

**语法:** obj &lt;&lt; Drift Summaries( state=0|1 )

**说明:** 显示或隐藏汇总表中的漂移汇总列。这些列包含均值向上漂移、均值向下漂移和均值绝对漂移。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Summaries( 1 )
);

```

### Enable All Tests

**语法:** obj &lt;&lt; Enable All Tests

**说明:** 在报警率和计数中包括所有 Nelson 检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Enable All Tests
);

```

### Expected Out of Spec Rate

**语法:** obj &lt;&lt; Expected Out of Spec Rate( state=0|1 )

**说明:** 显示或隐藏汇总表中的“超出规格比率期望值”列。该列包含落在规格限之外的观测值期望的比例。“超出规格比率期望值”值假定稳定且服从正态分布的过程并使用总 sigma。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Expected Out of Spec Rate( 1 )
);

```

### Filter Where

**语法:** obj &lt;&lt; Filter Where( condition )

**说明:** 查找并删除汇总表中的过程。过滤器基于指定的条件。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Filter Where( Alarm Rate > 0 )
);
Wait( 1 );
obj << Reset Filter;
obj << Filter Where( Stability Index > 1.3 | Mean <= 4.3 );

```

### Find and Select

**语法:** obj &lt;&lt; Find and Select( condition )

**说明:** 查找出现搜索字符串的所有列和组并在汇总表中选择相应过程。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);

```

### Goal Plot

**语法:** obj &lt;&lt; Goal Plot( state=0|1 )

**说明:** 显示或隐藏为每个变量包含一个点的图。规格标准化均值偏移显示在水平轴上，规格标准化标准差显示在垂直轴上。仅当为至少一个过程变量定义了规格限时，该选项才可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Goal Plot( 1 ) );

```

### KSigma

**语法:** obj = Process Screening(...KSigma( number=3 )...)

**说明:** 指定控制限应偏离中心线的标准差数（以 sigma 为单位）。 默认为“3”。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( X( :Process ), Y( Eval( 5 :: 132 ) ), K Sigma( 4 ) );

```

### KSigma for Proportion

**语法:** obj = Process Screening(...KSigma for Proportion( number=3 )...)

**说明:** 指定控制限应偏离中心线的标准差数（以 sigma 为单位）。 默认为“3”。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	K Sigma for Proportion( 2.5 ),
	Use Upper Limit( 1 ),
	Use Lower Limit( 1 )
);

```

### Keep Distribution Details

**语法:** obj = Process Screening(...Keep Distribution Details( state=0|1 )...)

**说明:** 保留拟合所有分布的参数估计值和分位数详细信息，以便可以在报表中显示。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Keep Distribution Details( 1 ),
	SendToReport(
		Dispatch( {}, "Poisson λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "NegBin σ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZIP λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB π", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB λ", NumberColBox, {Visibility( "Visible" )} ),
		Dispatch( {}, "ZINB σ", NumberColBox, {Visibility( "Visible" )} )
	)
);

```

### Largest Downshift

**语法:** obj &lt;&lt; Largest Downshift( state=0|1 )

**说明:** 显示或隐藏汇总表中的“最大的向下偏移”和”向下偏移位置”列。这些列包含序列中超过一个组内 sigma 单位的最大向下偏移和序列中发生该偏移的位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Downshift( 1 )
);

```

### Largest Upshift

**语法:** obj &lt;&lt; Largest Upshift( state=0|1 )

**说明:** 显示或隐藏汇总表中的“最大的向上偏移”和”向上偏移位置”列。这些列包含序列中超过一个组内 sigma 单位的最大向上偏移和序列中发生该偏移的位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Largest Upshift( 1 )
);

```

### Latest Out of Spec

**语法:** obj &lt;&lt; Latest Out of Spec( state=0|1 )

**说明:** 显示或隐藏汇总表中的“最新超出规格限”列。该列包含超出规格限的最后一个观测和最终观测之间的观测数。若最后一个观测超出规格限，则“最新超出规格限”值为 1。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Latest Out of Spec( 0 ) );
Wait( 1 );
obj << Latest Out of Spec( 1 );

```

### Make Detailed Shift Data

**语法:** obj = Process Screening(...Make Detailed Shift Data( state=0|1 )...)

**说明:** Stores all of the shift information so that it can be saved to a data table later using the Save Shift Table option. This option must be specified in the launch script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Maximum

**语法:** obj &lt;&lt; Maximum( state=0|1 )

**说明:** Shows or hides the Maximum for Count and Nonnegative Continuous chart types. 默认开启。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time )
);
Wait( 1 );
obj << Maximum( 0 );

```

### Mean

**语法:** obj &lt;&lt; Mean( state=0|1 )

**说明:** 显示或隐藏汇总表中的“均值”列。该列包含过程数据的平均值。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Mean( 0 );

```

### Minimum Process Length

**语法:** obj = Process Screening(...Minimum Process Length( number=3 )...)

**说明:** 指定过程必须包括在分析中的数据值最小数目。 默认为“3”。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Minimum Process Length( 40 )
);

```

### Moving Range Limit Exceeded

**语法:** obj &lt;&lt; Moving Range Limit Exceeded( state=0|1 )

**说明:** 显示或隐藏汇总表中的“超出移动极差限值”列。该列包含超出三因子控制图计算的移动极差限值的子组数。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Vial Fill Weights.jmp" );
obj = dt << Process Screening(
	Y( :Fill Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar MR and R" ),
	Moving Range Limit Exceeded( 1 )
);

```

### N Subgroups

**语法:** obj &lt;&lt; N Subgroups( state=0|1 )

**说明:** 显示或隐藏汇总表中的“子组数”列。该列包含子组数。 默认开启。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Control Chart Type( "XBar and R" )
);
Wait( 1 );
obj << N Subgroups( 0 );

```

### Out of Spec Count

**语法:** obj &lt;&lt; Out of Spec Count( state=0|1 )

**说明:** 显示或隐藏汇总表中的“超出规格计数”列。该列包含落在规格限之外的观测数。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Count( 0 ) );
Wait( 1 );
obj << Out of Spec Count( 1 );

```

### Out of Spec Rate

**语法:** obj &lt;&lt; Out of Spec Rate( state=0|1 )

**说明:** 显示或隐藏汇总表中的“超出规格比率”列。该列包含落在规格限之外的观测比例。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Out of Spec Rate( 0 ) );
Wait( 1 );
obj << Out of Spec Rate( 1 );

```

### Outlier Threshold

**语法:** obj = Process Screening(...Outlier Threshold( number=5 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定为使观测视为离群值而在量级上与其两个邻居的距离必须超过的组内 sigma 单位数。 默认为“5”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Outlier Threshold( 1.1 ),
	Shift Graph( 1 )
);

```

### Overall Sigma

**语法:** obj &lt;&lt; Overall Sigma( state=0|1 )

**说明:** 显示或隐藏汇总表中的“总 Sigma”列。该列包含基于所有观测的标准差的估计值。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Overall Sigma( 0 );

```

### Performance Graph Boundaries

**语法:** obj &lt;&lt; Performance Graph Boundaries( &lt;Capability Ppk boundary, Stability Ratio boundary&gt; )

**说明:** 指定“过程能力图”中的“能力 Ppk”和“稳定性比”区域的边界。若未指定参数，则该选项将打开一个您可以指定边界的窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Performance Graph Boundaries( 1.7, 1.2 );

```

### Ppk

**语法:** obj &lt;&lt; Ppk( state=0|1 )

**说明:** 显示或隐藏汇总表中的“Ppk”列。该列包含基于“总 Sigma”并假定服从正态分布的 Ppk 长期能力指标。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Ppk( 0 ) );
Wait( 1 );
obj << Ppk( 1 );

```

### Ppk Capability Boundary

**语法:** obj &lt;&lt; Ppk Capability Boundary( number=1.33 )

**说明:** 指定“过程能力图”中的“能力 Ppk”的能和不能区域之间的边界。 默认为“1.33”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Ppk Capability Boundary( 1.7 ),
	Process Performance Graph( 1 )
);

```

### Process Capability

**语法:** obj &lt;&lt; Process Capability

**说明:** 打开“过程能力”报表窗口，它为您在汇总表中选择的过程显示“单项详细报表”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Capability
);

```

### Process Performance Graph

**语法:** obj &lt;&lt; Process Performance Graph( state=0|1 )

**说明:** 显示或隐藏带有四个着色象限的“稳定性比-能力 Ppk”图形。默认情况下，超过 1.5 的稳定性比表示过程不稳定，小于1.33 的 Ppk 表示过程没有能力。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);

```

### Process Potential Graph

**语法:** obj &lt;&lt; Process Potential Graph( state=0|1 )

**说明:** 显示或隐藏“过程潜力图”，它在垂直轴上标绘 Cp，在水平轴上标绘“测量值百分比 Sigma^2”。该图形显示改进测量系统或过程的相对收益。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Coating.jmp" );
Column( "Weight" ) << Set Property(
	"Process Screening",
	{Centerline( 20.5 ), Specified Sigma( 1.5 ), Measurement Sigma( .8 )}
);
Column( "Weight" ) << Set Property( "Spec Limits", {LSL( 17 ), USL( 24 )} );
obj = dt << Process Screening(
	Process Variables( :Weight ),
	Subgroup( :Sample ),
	Control Chart Type( "XBar and R" ),
	Out of Spec Count( 0 ),
	Out of Spec Rate( 0 ),
	Latest Out of Spec( 0 ),
	Process Potential Graph( 1 )
);

```

### Range Limit Exceeded

**语法:** obj &lt;&lt; Range Limit Exceeded( state=0|1 )

**说明:** 显示或隐藏汇总表中的“超出范围限值”列。该列包含超出 R、S 或 MR 图计算的上控制限的子组数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Range Limit Exceeded( 1 )
);

```

### Relaunch Selected Processes

**语法:** obj &lt;&lt; Relaunch Selected Processes

**说明:** Relaunches the Process Screening platform to create a new report that contains only the selected processes from the original report.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	RowStates( [51 1, 52 1, 66 1, 85 1] )
);
Wait( 1 );
obj << Relaunch Selected Processes;

```

### Remove

**语法:** obj = Process Screening(...Remove( columns )...)

**说明:** 指定要从分析中排除的过程。该选项必须在启动脚本中指定，并且仅当指定了“列组”时应用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( dt << get Column Group( "Processes" ) ),
	Remove( :NPN2 ),
	Process Performance Graph( 1 )
);

```

### Remove Selected Items

**语法:** obj &lt;&lt; Remove Selected Items

**说明:** 删除在汇总表中选择的行，并在没有这些过程的情况下重新运行分析。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
Wait( 1 );
obj << Remove Selected Items;

```

### Reset Filter

**语法:** obj &lt;&lt; Reset Filter

**说明:** 删除当前应用于汇总表的任何过滤器。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
Wait( 1 );
obj << Filter Where( Alarm Rate > 0 );
Wait( 3 );
obj << Reset Filter;

```

### RowStates

**语法:** obj &lt;&lt; RowStates( matrix )

**说明:** 设置汇总表中行的行状态。输入是一个 2 * m 矩阵。第一列包含行号（按原始顺序从零开始），第二列包含数值行状态值。有关数值行状态值的详细信息，请参见 JMP 用户指南。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Process Variables( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Control Chart Type( "XBar and R" ),
	RowStates( [0 1, 5 768] ) //Select first and Color Red the sixth of original order
);
Wait( 1 );
// sort columns to show original order
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 3, 1 )} ) );
obj << SendToReport( Dispatch( {}, "", TableBox, {Sort By Column( 2, 1 )} ) );

```

### Save Details Table

**语法:** obj &lt;&lt; Save Details Table

**说明:** 创建一个新数据表，它包含过程和分组变量的每个组合的检验报警信息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Details Table;

```

### Save Selected Details

**语法:** obj &lt;&lt; Save Selected Details

**说明:** 创建一个新数据表，它包含汇总表中选定行的检验报警信息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Find and Select( "DIAMETER", {"C334", "A455"}, 2 )
);
obj << Save Selected Details;

```

### Save Shift Table

**语法:** obj &lt;&lt; Save Shift Table

**说明:** Creates a new data table that contains the saved shift gap data. This option requires that the Make Detailed Shift Data option is specified in the launch script.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	RowStates( [5 1] ),
	Shift Graph( 1 ),
	Make Detailed Shift Data( 1 )
);
obj << Save Shift Table;

```

### Save Summary Table

**语法:** obj &lt;&lt; Save Summary Table

**说明:** 创建一个新数据表，它包含所有变量和组的所有过程汇总信息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table;

```

### Save Summary Table with Graphs

**语法:** obj &lt;&lt; Save Summary Table with Graphs

**说明:** 创建一个新数据表，它包含所有过程汇总信息和一列快速图形。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( Eval( 5 :: 132 ) ), Subgroup Sample Size( 6 ) );
obj << Save Summary Table with Graphs;

```

### Select All

**语法:** obj &lt;&lt; Select All

**说明:** 选择所有列和组并对它们执行后续命令。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Select All );

```

### Select Where

**语法:** obj &lt;&lt; Select Where( condition )

**说明:** 选择汇总表中的过程列。选择的列对应于指定的条件。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select Where( Alarm Rate > 0 )
);

```

### Set Scrolling

**语法:** obj &lt;&lt; Set Scrolling( number=50 )

**说明:** 指定滚动汇总表中显示几行。 默认为“50”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Set Scrolling( 3 )
);

```

### Shift Graph

**语法:** obj &lt;&lt; Shift Graph( state=0|1 )

**说明:** 显示或隐藏超过“偏移阈值”选项指定的组内 sigma 单位数的所有过程偏移发生时间的图。绿色标记指示向上偏移，红色标记指示向下偏移。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" )
);
obj << Shift Graph( 1 );

```

### Shift Lambda

**语法:** obj = Process Screening(...Shift Lambda( number=.3 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于偏移检测的指数加权移动平均 (EWMA) 中使用的权重。 默认为“.3”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Process Variables( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Show Charts as Selected( 1 ),
	RowStates( [5 1] ),
	Shift Lambda( 0.2 ),
	Shift Graph( 1 )
);

```

### Shift Threshold

**语法:** obj = Process Screening(...Shift Threshold( number=3 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定为使偏移显示在“偏移图形”中而在幅度上必须超过的组内 sigma 单位数。 默认为“3”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Shift Threshold( 2 ),
	Shift Graph( 1 )
);

```

### Show Charts as Selected

**语法:** obj &lt;&lt; Show Charts as Selected( state=0|1 )

**说明:** 绘制在汇总表中选择的过程的小图形。这些图形显示在“显示为选定项的图表”报表中，当您在汇总表中选择和取消选择过程时，该报表会自动更新。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ) );
obj << Select Where( :MACHINE == "C334" );
obj << Show Charts as Selected( 1 );
Wait( 2 );
obj << Select Where( :MACHINE == "A455" );

```

### Show Charts for Selected

**语法:** obj &lt;&lt; Show Charts for Selected( &lt;process list&gt; )

**说明:** 绘制在汇总表中选择的过程的小图形。这些图形显示在“为选定项显示的图表”报表中，其中可以同时查看和比较许多过程。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Select All,
	Show Charts for Selected
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :OPERATOR, :MACHINE ),
	Show Charts for Selected( {{:DIAMETER, "DRJ", "C334"}, {:DIAMETER, "MKS", "A386"}} )
);

```

**示例 3**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :IVP7, :B1, :IVP8 ),
	Show Charts for Selected( {:IVP7, :IVP8} )
);

```

### Show Shifts in Graphs

**语法:** obj &lt;&lt; Show Shifts in Graphs( state=0|1 )

**说明:** 在快速图形中使用绿色和红色垂直线显示或隐藏偏移的位置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Steam Turbine Current.jmp" );
obj = dt << Process Screening(
	Y( :Fuel, :Steam Flow, :Steam Temp, :MW, :Cool Temp, :Pressure ),
	Control Chart Type( "Indiv and MR" ),
	Select All,
	Show Charts for Selected,
	Show Shifts in Graphs( 1 )
);

```

### Show Tests

**语法:** obj &lt;&lt; Show Tests( state=0|1 )

**说明:** 显示或隐藏在“选择检验”下所选的 Nelson 检验。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Test 2( 1 ),
	Test 3( 1 )
);
Wait( 1 );
obj << Show Tests( 0 );

```

### Sort by Subgroup

**语法:** obj = Process Screening(...Sort by Subgroup( state=0|1 )...)

**说明:** 在执行计算之前，按子组变量或嵌套子组变量的组合对过程数据进行排序。仅当指定了“子组”变量时，该选项才可用。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup( :wafer ),
	Sort by Subgroup( 1 )
);

```

### Spec Centered Mean

**语法:** obj &lt;&lt; Spec Centered Mean( state=0|1 )

**说明:** 显示或隐藏汇总表中的“(均值-目标)/规格范围”列。该列包含相对于规格限的均值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Centered Mean( 1 ) );

```

### Spec Limits

**语法:** obj &lt;&lt; Spec Limits( state=0|1 )

**说明:** 显示或隐藏汇总表中的规格限列。这些列包含下规格限 (LSL)、上规格限 (USL) 和目标值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Limits( 1 ) );

```

### Spec Scaled Std Dev

**语法:** obj &lt;&lt; Spec Scaled Std Dev( state=0|1 )

**说明:** 显示或隐藏汇总表中的“标准差/规格范围”列。该列包含总标准差除以规格限的范围。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Spec Scaled Std Dev( 1 ) );

```

### Stability Index

**语法:** obj &lt;&lt; Stability Index( state=0|1 )

**说明:** 显示或隐藏汇总表中的“稳定性指标”列。该列是过程稳定性的测度，其中稳定过程的稳定性指标接近 1。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
Wait( 1 );
obj << Stability Index( 0 );

```

### Stability Index Boundary

**语法:** obj &lt;&lt; Stability Index Boundary( number=1.25 )

**说明:** 指定“过程性能图”中的“稳定性指标”的稳定和不稳定区域之间的边界。 默认为“1.25”。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( :NPN1, :PNP1, :PNP2, :NPN2 ),
	Select All,
	Process Performance Graph( 1 )
);
Wait( 1 );
obj << Stability Index Boundary( 1.5 );

```

### Stability Ratio

**语法:** obj &lt;&lt; Stability Ratio( state=0|1 )

**说明:** 显示或隐藏汇总表中的“稳定性比”列。该列是过程稳定性的测度，其中稳定过程的稳定性比接近 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ) );
obj << Stability Ratio( 1 );

```

### Subgroup Sample Size

**语法:** obj = Process Screening(...Subgroup Sample Size( number=5 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定每个子组中的观测数。最小子组大小为 2。 默认为“5”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Control Chart Type( "XBar and R" ),
	Subgroup Sample Size( 6 )
);

```

### Summary

**语法:** obj &lt;&lt; Summary( state=0|1 )

**说明:** 在报表中显示或隐藏汇总表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening(
	Y( Eval( 5 :: 132 ) ),
	Subgroup Sample Size( 6 ),
	Summary( 0 )
);
Wait( 1 );
obj << Summary( 1 );

```

### Target Index

**语法:** obj &lt;&lt; Target Index( state=0|1 )

**说明:** 显示或隐藏汇总表中的“目标指标”列。该列包含过程平均值与目标值相差的短期标准差个数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Target Index( 1 ) );

```

### Test 1

**语法:** obj &lt;&lt; Test 1( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 1”列。当一个点偏离中心线超过三个标准差时触发该检验。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 1( 0 ) );

```

### Test 2

**语法:** obj &lt;&lt; Test 2( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 2”列。当九个或更多相邻点位于中心线的同一侧时触发该检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 2( 1 ) );

```

### Test 3

**语法:** obj &lt;&lt; Test 3( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 3”列。当六个或更多相邻点连续增加或减少时触发该检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 3( 1 ) );

```

### Test 4

**语法:** obj &lt;&lt; Test 4( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 4”列。当十四个相邻点交替方向: 先增加再减少或先减少再增加时触发该检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 4( 1 ) );

```

### Test 5

**语法:** obj &lt;&lt; Test 5( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 5”列。当三个相邻点中有两个点在中心线的同一侧偏离中心线超过两个标准差时触发该检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 5( 1 ) );

```

### Test 6

**语法:** obj &lt;&lt; Test 6( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 6”列。当五个相邻点中有四个点在中心线的同一侧偏离中心线超过一个标准差时触发该检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 6( 1 ) );

```

### Test 7

**语法:** obj &lt;&lt; Test 7( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 7”列。当十五个相邻点在中心线的任一侧且均位于中心线一个标准差以内时触发该检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 7( 1 ) );

```

### Test 8

**语法:** obj &lt;&lt; Test 8( state=0|1 )

**说明:** 显示或隐藏汇总表中的“检验 8”列。当八个相邻点在中心线的任一侧且均位于偏离中心线的一个标准差以外时触发该检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening( Y( :DIAMETER ), Grouping( :MACHINE, :Phase ), Test 8( 1 ) );

```

### Test Action

**语法:** obj &lt;&lt; Test Action( state=0|1 )

**说明:** Shows or hides the Action column in the summary table. This test is triggered when a point is greater than an Upper Action Limit or less than a Lower Action Limit. 默认开启。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Action( 0 );

```

### Test Alert

**语法:** obj &lt;&lt; Test Alert( state=0|1 )

**说明:** Shows or hides the Alert column in the summary table. This test is triggered when a point is greater than the Upper Alert Limit or less than the Lower Alert Limit.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert( 1 );

```

### Test Alert Increasing

**语法:** obj &lt;&lt; Test Alert Increasing( state=0|1 )

**说明:** Shows or hides the Alert Increasing column in the summary table. This column counts where the process is increasing and the previous point is above the upper alert limit or if a process is decreasing and the previous point is below the lower alert limit.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Environmental Monitor Sim.jmp" );
obj = dt << Process Screening(
	Process Variables( :Count ),
	Grouping( :Type, :Grade, :Site ),
	Control Chart Type( "Count" ),
	Time( :Time ),
	Show Charts as Selected( 1 ),
	Alarm Graph( 1 )
);
Wait( 1 );
obj << Test Alert Increasing( 0 );

```

### Use Limits Table

**语法:** obj = Process Screening(...Use Limits Table( state=0|1, data table, &lt;options&gt;)...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 从数据表导入历史控制限和规格限。

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	)
);

```

### Use Lower Limit

**语法:** obj = Process Screening(...Use Lower Limit( state=0|1 )...)

**说明:** Specifies whether to use the K-Sigma lower limit. This option is available only for Proportion charts.

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Lower Limit( 1 )
);

```

### Use Medians instead of Means

**语法:** obj = Process Screening(...Use Medians instead of Means( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 使用观测的中位数来估计中心线，以降低离群值对检验的影响。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Use Medians instead of Means( 1 )
);

```

### Use Upper Limit

**语法:** obj = Process Screening(...Use Upper Limit( state=0|1 )...)

**说明:** Specifies whether to use the K-Sigma upper limit. This option is available only for Proportion charts. 默认开启。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Quality Control/Electrical Component Defect Screening.jmp" );
dt << Process Screening(
	Process Variables( :N Defective ),
	n Trials( :N Units ),
	Time( :Day ),
	Control Chart Type( "Proportion" ),
	Show Charts as Selected( 1 ),
	RowStates( [0 1] ),
	Use Upper Limit( 0 ),
	Use Lower Limit( 1 )
);

```

### Within Sigma

**语法:** obj &lt;&lt; Within Sigma( state=0|1 )

**说明:** 显示或隐藏汇总表中的“组内 Sigma”列。该列包含基于子组内部变异的标准差的估计值。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Semiconductor Capability.jmp" );
obj = dt << Process Screening( Y( :NPN1, :PNP1, :PNP2, :NPN2 ), Within Sigma( 0 ) );
Wait( 1 );
obj << Within Sigma( 1 );

```

## Chart Options Drift Graph

### 项消息

#### Circle Alarm Points

**语法:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**说明:** 显示或隐藏具有警报状态的点周围的红圈。对应的警报代码显示在每个圆圈点的旁边。该选项不可用于“漂移图形”。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**语法:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**说明:** 显示或隐藏连接各点的线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**语法:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**说明:** 显示或隐藏除每个过程的控制图之外的极差、标准差或移动极差图。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**语法:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**说明:** 设置图形大小。 默认为“500,170”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**语法:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**说明:** 指定图表的布局。 默认为“1”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**语法:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**说明:** 从报表中删除图表。

**JMP添加的版本:** 14

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**语法:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**说明:** 显示或隐藏表示过程平均值的绿色实线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**说明:** 显示或隐藏上控制限和下控制限。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**语法:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**说明:** 在图表上显示或隐藏各个点。

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**说明:** 显示或隐藏以蓝色虚线表示的上规格限和下规格限。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**语法:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**说明:** 显示或隐藏图表上的一个和两个标准差区域。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**语法:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**说明:** 显示或隐藏每个图表上的垂直轴标签。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options Graphlet

### 项消息

#### Circle Alarm Points

**语法:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**说明:** 显示或隐藏具有警报状态的点周围的红圈。对应的警报代码显示在每个圆圈点的旁边。该选项不可用于“漂移图形”。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**语法:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**说明:** 显示或隐藏连接各点的线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**语法:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**说明:** 显示或隐藏除每个过程的控制图之外的极差、标准差或移动极差图。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**语法:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**说明:** 设置图形大小。 默认为“500,170”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**语法:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**说明:** 指定图表的布局。 默认为“1”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**语法:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**说明:** 从报表中删除图表。

**JMP添加的版本:** 14

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**语法:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**说明:** 显示或隐藏表示过程平均值的绿色实线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**说明:** 显示或隐藏上控制限和下控制限。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**语法:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**说明:** 在图表上显示或隐藏各个点。

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**说明:** 显示或隐藏以蓝色虚线表示的上规格限和下规格限。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**语法:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**说明:** 显示或隐藏图表上的一个和两个标准差区域。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**语法:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**说明:** 显示或隐藏每个图表上的垂直轴标签。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options as Selected

### 项消息

#### Circle Alarm Points

**语法:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**说明:** 显示或隐藏具有警报状态的点周围的红圈。对应的警报代码显示在每个圆圈点的旁边。该选项不可用于“漂移图形”。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**语法:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**说明:** 显示或隐藏连接各点的线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**语法:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**说明:** 显示或隐藏除每个过程的控制图之外的极差、标准差或移动极差图。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**语法:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**说明:** 设置图形大小。 默认为“500,170”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**语法:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**说明:** 指定图表的布局。 默认为“1”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**语法:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**说明:** 从报表中删除图表。

**JMP添加的版本:** 14

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**语法:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**说明:** 显示或隐藏表示过程平均值的绿色实线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**说明:** 显示或隐藏上控制限和下控制限。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**语法:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**说明:** 在图表上显示或隐藏各个点。

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**说明:** 显示或隐藏以蓝色虚线表示的上规格限和下规格限。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**语法:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**说明:** 显示或隐藏图表上的一个和两个标准差区域。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**语法:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**说明:** 显示或隐藏每个图表上的垂直轴标签。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

## Chart Options for Selected

### 项消息

#### Circle Alarm Points

**语法:** obj &lt;&lt; Chart Options as Selected( Circle Alarm Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Circle Alarm Points( state=0|1 ) )

**说明:** 显示或隐藏具有警报状态的点周围的红圈。对应的警报代码显示在每个圆圈点的旁边。该选项不可用于“漂移图形”。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Circle Alarm Points( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All,
	Chart Options as Selected( Circle Alarm Points( 0 ) )
);
Wait( 1 );
obj << Chart Options as Selected( Circle Alarm Points( 1 ) );

```

#### Connect Points

**语法:** obj &lt;&lt; Chart Options as Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Connect Points( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Connect Points( state=0|1 ) )

**说明:** 显示或隐藏连接各点的线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Connect Points( 0 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Show Markers( 1 ) )
);
Wait( 1 );
obj << Chart Options Drift Graph( Connect Points( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Connect Points( 0 ) );

```

#### Dispersion Chart

**语法:** obj &lt;&lt; Chart Options as Selected( Dispersion Chart( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Dispersion Chart( state=0|1 ) )

**说明:** 显示或隐藏除每个过程的控制图之外的极差、标准差或移动极差图。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Dispersion Chart( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Dispersion Chart( 1 ) );

```

#### Frame Size

**语法:** obj &lt;&lt; Chart Options as Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options for Selected( Frame Size( width=500, height=170 ) ); obj &lt;&lt; Chart Options Drift Graph( Frame Size( width=500, height=170 ) )

**说明:** 设置图形大小。 默认为“500,170”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Frame Size( 300, 100 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Frame Size( 600, 200 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Frame Size( 500, 400 ) );

```

#### Number of Plots Across

**语法:** obj &lt;&lt; Chart Options as Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options for Selected( Number of Plots Across( number=1 ) ); obj &lt;&lt; Chart Options Drift Graph( Number of Plots Across( number=1 ) )

**说明:** 指定图表的布局。 默认为“1”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Number of Plots Across( 4 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options Drift Graph( Number of Plots Across( 2 ) )
);

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Number of Plots Across( 2 ) );

```

#### Remove

**语法:** obj &lt;&lt; Chart Options as Selected( Remove ); obj &lt;&lt; Chart Options for Selected( Remove ); obj &lt;&lt; Chart Options Drift Graph( Remove )

**说明:** 从报表中删除图表。

**JMP添加的版本:** 14

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options for Selected( Remove );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Remove );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Remove );

```

#### Show Centerline

**语法:** obj &lt;&lt; Chart Options as Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Centerline( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Centerline( state=0|1 ) )

**说明:** 显示或隐藏表示过程平均值的绿色实线。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Centerline( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Centerline( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Centerline( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Centerline( 0 ) );

```

#### Show Control Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Control Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Control Limits( state=0|1 ) )

**说明:** 显示或隐藏上控制限和下控制限。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( Show Control Limits( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( Show Control Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Control Limits( 0 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Control Limits( 0 ) );

```

#### Show Markers

**语法:** obj &lt;&lt; Chart Options as Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Markers( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Markers( state=0|1 ) )

**说明:** 在图表上显示或隐藏各个点。

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options for Selected( Show Markers( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),

);
Wait( 1 );
obj << Chart Options Drift Graph( Show Markers( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( Show Markers( 0 ) );

```

#### Show Spec Limits

**语法:** obj &lt;&lt; Chart Options as Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Spec Limits( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( Show Spec Limits( state=0|1 ) )

**说明:** 显示或隐藏以蓝色虚线表示的上规格限和下规格限。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Show Charts for Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options for Selected( Show Spec Limits( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Drift Graph Selected( {:NO, :OZONE, :CO, :SO2} )
);
Wait( 1 );
obj << Chart Options Drift Graph( Show Spec Limits( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Cities.jmp" );
dt2 = Open( "$SAMPLE_DATA/CitySpecLimits.jmp" );
obj = dt1 << Process Screening(
	Y( :OZONE, :CO, :SO2, :NO ),
	Use Limits Table(
		1,
		dt2,
		Process Variables( :Column 1 ),
		LSL( :_LSL ),
		USL( :_USL ),
		Target( :_Target ),
		Go
	),
	Select All,
	Show Charts as Selected
);
Wait( 1 );
obj << Chart Options as Selected( Show Spec Limits( 1 ) );

```

#### Show Zones

**语法:** obj &lt;&lt; Chart Options as Selected( Show Zones( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( Show Zones( state=0|1 ) )

**说明:** 显示或隐藏图表上的一个和两个标准差区域。该选项不可用于“漂移图形”。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
obj << Chart Options for Selected( Show Zones( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( Show Zones( 1 ) ),
	Select All
);

```

#### V Axis Label

**语法:** obj &lt;&lt; Chart Options as Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options for Selected( V Axis Label( state=0|1 ) ); obj &lt;&lt; Chart Options Drift Graph( V Axis Label( state=0|1 ) )

**说明:** 显示或隐藏每个图表上的垂直轴标签。 默认开启。

**JMP添加的版本:** 17

**“为选定项显示的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts for Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	),
	Chart Options for Selected( V Axis Label( 0 ) )
);
Wait( 1 );
obj << Chart Options for Selected( V Axis Label( 1 ) );

```

**“图表选项漂移图形”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Drift Graph Selected(
		{{:DIAMETER, "C334", 2}, {:DIAMETER, "A455", 1}, {:DIAMETER, "A455", 2}, {:DIAMETER,
		"A386", 2}, {:DIAMETER, "A386", 1}, {:DIAMETER, "C334", 1}}
	)
);
Wait( 1 );
obj << Chart Options Drift Graph( V Axis Label( 1 ) );

```

**“显示为选定项的图表选项”示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
obj = dt << Process Screening(
	Y( :DIAMETER ),
	Grouping( :MACHINE, :Phase ),
	Show Charts as Selected,
	Chart Options as Selected( V Axis Label( 0 ) ),
	Select All
);
Wait( 1 );
obj << Chart Options as Selected( V Axis Label( 1 ) );

```

