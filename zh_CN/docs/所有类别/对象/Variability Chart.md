# Variability Chart



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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
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

**语法:** obj = Variability Chart(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

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

### Variability Chart

**语法:** Variability Chart( Y( column ), X( columns ) )

**说明:** 分析连续测量值以确定测量系统的执行效果。您还可以执行量具研究以查看数据中的变异度量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

## 列

### By

**语法:** obj = Variability Chart(...&lt;By( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 生成多个报表，每个报表对应变量的每个水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :new Y ),
	X( :Operator, :part ),
	Model( "Crossed" ),
	By( :Instrument )
);

```

### Freq

**语法:** obj = Variability Chart(...&lt;Freq( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 其数值为分析中的每一行都分配一个频数的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Freq( _freqcol ) );

```

### Grouping

**语法:** obj = Variability Chart(...&lt;Grouping( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将分类列指定为分组变量。列表中的最后一列应是被测量的部件或单元。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Response

**语法:** obj = Variability Chart(...Response( column(s) )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定测量值的连续列。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

### Standard

**语法:** obj = Variability Chart(...&lt;Standard( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一个标准或引用列，它包含被测量部件的已知值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Variability Analysis( :Response, Std Dev Chart( 0 ), Linearity Study( 1 ) )
);

```

### X

**语法:** obj = Variability Chart(...&lt;X( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将分类列指定为分组变量。列表中的最后一列应是被测量的部件或单元。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), Grouping( :Operator, :part# ) );

```

### Y

**语法:** obj = Variability Chart(...Y( column(s) )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定测量值的连续列。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Response( :Measurement ), X( :Operator, :part# ) );

```

## 项消息

### Analysis Type

**语法:** obj = Variability Chart(...Analysis Type( "选择最佳分析 (EMS REML Bayes)"|"选择最佳分析 (EMS REML)"|"使用 REML 分析"|"使用 Bayes 分析" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 标识用于计算方差分量的方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Conv Limit

**语法:** obj = Variability Chart(...Conv Limit( number )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置用于计算方差分量的收敛极限。该选项仅影响 REML 分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Conv Limit( 0.0000001 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Edit MSA Metadata

**语法:** obj &lt;&lt; Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), &lt;Historical Mean( number ), Historical Process Sigma( number )&gt; ) )

**说明:** 打开一个窗口，允许您添加或编辑所有分析的容差范围、容差限值、历史均值和历史过程 sigma。报表将自动更新。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << Edit MSA Metadata( :Measurement( Lower Tolerance( .1 ), Upper Tolerance( 1.4 ) ) );

```

### Max Iter

**语法:** obj = Variability Chart(...Max Iter( number )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置用于计算方差分量的最大迭代次数。该选项仅影响 REML 分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" ),
	Max Iter( 50 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Function Evals

**语法:** obj = Variability Chart(...Number Function Evals( number )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置用于计算方差分量的函数最大计算次数。该选项仅影响 Bayes 分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Function Evals( 10000 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Number Integration Abscissas

**语法:** obj = Variability Chart(...Number Integration Abscissas( number )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置用于计算方差分量的积分横坐标数。该选项仅影响 Bayes 分析。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use Bayesian analysis" ),
	Number Integration Abscissas( 90 )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**语法:** obj &lt;&lt; Save All Metadata to Table( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**说明:** 创建一个新数据表，其中包含测量数据每列的 MSA 元数据和“测量值 Sigma”。该表为高格式，每个测量变量都包含一行。有一个选项用于将容差下限和上限值保存为数据表中的附加列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**语法:** obj &lt;&lt; Save Metadata as Column Properties( &lt; MSA( 0|1 ) &gt;, &lt; Measurement Sigma( 0|1 ) &gt;, &lt; Tolerance as Specs( 0|1 ) &gt; )

**说明:** 对于测量数据的每一列，将 MSA 元数据和“测量值 Sigma”保存为原始数据表中列的列属性。有一个选项用于将容差下限和上限值保存为“规格限”列属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata(
		:Measurement(
			Lower Tolerance( 0.2 ),
			Upper Tolerance( 1.3 ),
			Historical Process Sigma( 0.2 )
		)
	),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);
obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**语法:** obj = Variability Chart(...Set Alpha Level( number )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 更改用于置信区间和均值菱形的 alpha 水平。该选项对应于“变异性图”启动窗口中的“指定 Alpha 水平”选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Set Alpha Level( .1 )
);
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

### Set Random Seed

**语法:** obj = Variability Chart(...Set Random Seed( number )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将随机种子设置为特定值，以确保使用相同种子的所有后续试验都是可再现的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Set Random Seed( 1234 )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

### Sigma Multiplier

**语法:** obj = Variability Chart(...Sigma Multiplier( number=6 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定乘以 sigma 的常数值。 默认为“6”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Sigma Multiplier( 5.15 ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) )
);

```

### Variability Analysis

**语法:** obj &lt;&lt; Variability Analysis

**说明:** 指定每个测量响应的“变异性分析”报表选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Variance Components( 1 ), "Gauge R&R Report"n( 1 ) )
);

```

## Variability Analysis > Bias Report

### 项消息

#### Confidence Intervals

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Confidence Intervals( state=0|1 )))

**说明:** 在“相对于标准值的测量值偏倚报表”部分中的图形上显示或隐藏置信区间。仅当在启动窗口中指定了标准变量时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Confidence Intervals( 1 ) ));

```

#### Measurement Error Graphs

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report(Measurement Error Graphs( state=0|1 )))

**说明:** 显示或隐藏相对于部件的偏倚的测量值误差图。仅当在启动窗口中指定了标准变量时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( Measurement Error Graphs( 1 ) ));

```

## Variability Analysis > Heterogeneity of Variance Test

### 项消息

#### Point Options

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Point Options("Show Needles" | "Show Connected Points" | "Show Only Points")))

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Point Options( Show Only Points ) ));

```

#### Set Alpha Level

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Set Alpha Level( number )))

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Set Alpha Level( 0.1 ) ));

```

#### Show Center Line

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Center Line(state=0|1)))

**说明:** 显示或隐藏中心线（总 ADM 均值）。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Center Line( 0 ) ));

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limit Shading(state=0|1)))

**说明:** 显示或隐藏 ANOMV-Levene (ADM) 图的决策限着色。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limit Shading( 0 ) ));

```

#### Show Decision Limits

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Decision Limits(state=0|1)))

**说明:** 显示或隐藏 ANOMV-Levene (ADM) 图的决策限线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Decision Limits( 0 ) ));

```

#### Show Summary Report

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests(1, Show Summary Report(state=0|1)))

**说明:** 显示或隐藏包含组标准差和相应决策限的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = Variability Chart( Y( :Measurement ), X( :Operator, :part# ), Model( "Crossed" ) );
obj << (Variability Analysis[1] <<
Heterogeneity of Variance Tests( 1, Show Summary Report( 1 ) ));

```

## Variability Analysis > Linearity Study

### 项消息

#### Linearity by Groups

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Linearity By Groups( state=0|1 )))

**说明:** 显示或隐藏模型中每个因子的单个线性图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Linearity By Groups( 1 ) ));

```

#### Set Alpha Level

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Set Alpha Level( number )))

**说明:** 指定用于计算偏倚置信限的 alpha 水平。 默认为“0.05”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Set Alpha Level( .01 ) ));

```

#### Show Avg Bias Points

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Avg Bias Points( state=0|1 )))

**说明:** 在图形中显示或隐藏平均偏倚点。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Bias Points( state=0|1 )))

**说明:** 在图形中显示或隐藏偏倚点。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Fit Confidence Curves( state=0|1 )))

**说明:** 在图形中显示或隐藏拟合置信度曲线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Fit Confidence Curves( 1 ) ));

```

#### Show Line of Fit

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Line of Fit( state=0|1 )))

**说明:** 在图形中显示或隐藏拟合线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study(1, Show Overall Avg Bias Line( state=0|1 )))

**说明:** 在图形中显示或隐藏总平均偏倚线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Metadata( :Response( Historical Process Sigma( .6 ) ) ),
	Standard( :Standard ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 0 ) ));
Wait( 1 );
obj << (Variability Analysis[1] << Linearity Study( 1, Show Overall Avg Bias Line( 1 ) ));

```

## Variability Analysis

### 项消息

#### AIAG Labels

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; AIAG Labels( state=0|1 ))

**说明:** 显示或隐藏量具 R&R 输出中的标签。这些标签由美国汽车工业行动集团 (AIAG) 定义。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),
	Variability Analysis( "Measurement", "Gauge R&R Report"n( 1 ) ),

);
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << AIAG Labels( 1 ));

```

#### Bias Report

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Bias Report( state=0|1 ))

**说明:** 显示或隐藏包含观测值与标准之间的平均差值的报表。仅当指定标准变量时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Bias Report( 1 ));

```

#### Connect Cell Means

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Connect Cell Means( state=0|1 ))

**说明:** 显示或隐藏变异性图中连接一组单元格内的单元格均值的线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Connect Cell Means( 1 ));

```

#### Discrimination Ratio

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Discrimination Ratio( state=0|1 ))

**说明:** 显示或隐藏给定模型的分辨比率。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Discrimination Ratio( 1 ));

```

#### Edit MSA Metadata

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Edit MSA Metadata(Lower Tolerance(number), Upper Tolerance(number), Tolerance Range(number), Historical Mean(number), Historical Process Sigma(number)))

**说明:** 打开一个窗口，允许您添加或编辑所有分析的容差范围、容差限值、历史均值和历史过程 sigma。报表将自动更新。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( .2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Variability Analysis( "Measurement", Misclassification Probabilities( 1 ) )
);
Wait( 1 );
obj << (Variability Analysis[1] << Edit MSA Metadata(
	Lower Tolerance( .1 ),
	Upper Tolerance( 1.2 )
));

```

#### Group Means of Std Dev

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Group Means of Std Dev( state=0|1 ))

**说明:** 显示或隐藏标准差图中单元格标准差组的均值线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Group Means of Std Dev( 1 ));

```

#### Heterogeneity of Variance Tests

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Heterogeneity of Variance Tests( state=0|1 ))

**说明:** 显示或隐藏比较组间方差的报表。该报表包括显示模型中每个因子的方差非齐性检验的图形。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Heterogeneity of Variance Tests( 1 ));

```

#### Linearity Study

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Linearity Study( state=0|1 ))

**说明:** 执行一个回归，该回归使用标准值作为 X 变量，偏倚作为 Y 变量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart(
	Y( :Response ),
	X( :Part ),
	MSA Metadata( :Response( Historical Process Sigma( 1.1 ) ) ),
	Standard( :Standard ),
	Std Dev Chart( 0 )
);
obj << (Variability Analysis[1] << Linearity Study( 1 ));

```

#### Mean Diamonds

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Diamonds( state=0|1 ))

**说明:** 显示或隐藏变异性图中的均值菱形。置信区间使用每个单元格的组内标准差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean Diamonds( 1 ));

```

#### Mean Plots

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean Plots( state=0|1 ))

**说明:** 显示或隐藏模型中每个因子的因子水平均值图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Mean Plots( 1 ));

```

#### Mean of Std Dev

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Mean of Std Dev( state=0|1 ))

**说明:** 显示或隐藏标准差图中标准差均值处的灰色虚线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Mean of Std Dev( 1 ));

```

#### Misclassification Probabilities

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Misclassification Probabilities( state=0|1 ))

**说明:** 显示或隐藏包含给定模型误分类概率的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" )
);
obj << (Variability Analysis[1] << Misclassification Probabilities( 1 ));

```

#### Points Jittered

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Points Jittered( state=0|1 ))

**说明:** 在变异性图中，向各点添加随机水平散布效果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Points Jittered( 1 ));

```

#### S Control Limits

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; S Control Limits( state=0|1 ))

**说明:** 显示或隐藏标准差图中位于下控制限 (LCL) 和上控制限 (UCL) 处的红线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << S Control Limits( 1 ));

```

#### Show Box Plots

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Box Plots( state=0|1 ))

**说明:** 显示或隐藏变异性图中每个单元格的箱线图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Box Plots( 1 ));

```

#### Show Cell Means

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Cell Means( state=0|1 ))

**说明:** 显示或隐藏变异性图中每个单元格的均值标记。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Cell Means( 1 ));

```

#### Show Grand Mean

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Mean( state=0|1 ))

**说明:** 显示或隐藏总均值，它通过一条横跨整个图形的灰色虚线来表示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Mean( 1 ));

```

#### Show Grand Median

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Grand Median( state=0|1 ))

**说明:** 显示或隐藏总中位数，它通过一条横跨整个图形的蓝色虚线来表示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Grand Median( 1 ));

```

#### Show Group Means

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Group Means( state=0|1 ))

**说明:** 显示或隐藏单元格组的均值，它通过一条水平实线来表示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Show Group Means( 1 ));

```

#### Show Points

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Points( state=0|1 ))

**说明:** 显示或隐藏变异性图中的点。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Points( 1 ));

```

#### Show Range Bars

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Range Bars( state=0|1 ))

**说明:** 显示或隐藏指示每个单元格的最小值和最大值的直条。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Range Bars( 1 ));

```

#### Show Separators

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Separators( state=0|1 ))

**说明:** 显示或隐藏变异性图中分组变量水平之间的分隔线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Show Separators( 1 ));

```

#### Show Standard Mean

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Show Standard Mean( state=0|1 ))

**说明:** 显示或隐藏标准值均值处的线。仅当在启动窗口中指定了标准变量时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );
obj = dt << Variability Chart( Y( :Response ), X( :Part ), Standard( :Standard ) );
Wait( 1 );
obj << (Variability Analysis[1] << Show Standard Mean( 1 ));

```

#### Std Dev Chart

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Chart( state=0|1 ))

**说明:** 显示或隐藏标绘每个单元格的标准差的图表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Std Dev Chart( 1 ));

```

#### Std Dev Plots

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Std Dev Plots( state=0|1 ))

**说明:** 显示或隐藏按每个因子水平分组的标准差图。为模型中的每个因子都显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" )
);
obj << (Variability Analysis[1] << Std Dev Plots( 1 ));

```

#### Variability Chart

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Chart( state=0|1 ))

**说明:** 显示或隐藏变异性图。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 0 ));
Wait( 1 );
obj << (Variability Analysis[1] << Variability Chart( 1 ));

```

#### Variability Summary Report

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variability Summary Report( state=0|1 ))

**说明:** 显示或隐藏一个报表，该报表显示均值、标准差、变异系数 (CV)、均值标准误差、置信区间下限和上限。还显示最小值、最大值、极差、中位数和观测数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Variability Summary Report( 1 ));

```

#### Variance Components

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Variance Components( state=0|1 ))

**说明:** 显示或隐藏特定模型的方差分量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	Model( "Crossed" ),
	Analysis Type( "Use REML analysis" )
);
obj << (Variability Analysis[1] << Variance Components( 1 ));

```

#### Vertical Charts

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; Vertical Charts( state=0|1 ))

**说明:** 旋转变异性图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << Vertical Charts( 1 ));

```

#### XBar Control Limits

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; XBar Control Limits( state=0|1 ))

**说明:** 显示或隐藏变异性图中位于下控制限 (LCL) 和上控制限 (UCL) 处的线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart( Y( :Measurement ), X( :Operator, :part# ) );
obj << (Variability Analysis[1] << XBar Control Limits( 1 ));

```

#### 量具 R&R 报表

**语法:** obj &lt;&lt; (Variability Analysis[number] &lt;&lt; "Gauge R & R Report"n( state=0|1 ))

**说明:** 计算并显示“量具 R&R”（再现性和重复性）汇总报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );
obj = dt << Variability Chart(
	Y( :Measurement ),
	X( :Operator, :part# ),
	MSA Metadata( :Measurement( Lower Tolerance( 0.2 ), Upper Tolerance( 1.3 ) ) ),
	Model( "Crossed" ),
	Analysis Type( "Choose best analysis(EMS REML)" ),

);
obj << (Variability Analysis[1] << "Gauge R&R Report"n( 1 ));

```

