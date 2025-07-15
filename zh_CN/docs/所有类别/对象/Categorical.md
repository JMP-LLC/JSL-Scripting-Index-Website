# Categorical



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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
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
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
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

**语法:** obj = Categorical(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

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

### Categorical

**语法:** Categorical( Responses | Aligned Responses | Repeated Measures | Rater Agreement | Multiple Response | Multiple Response by ID | Multiple Delimited | Indicator Group | Response Frequencies( column ), X( column(s) ) )

**说明:** 汇总和分析分类响应数据。数据可以是简单响应、多重响应、重复测量、评级员一致性、对齐的响应或自由文本。包括生成响应的定制交叉表的能力。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

## 列

### By

**语法:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ), By( _bycol ) );

```

### Freq

**语法:** obj &lt;&lt; Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Freq( _freqcol )
);

```

### Grouping Category

**语法:** obj &lt;&lt; Grouping Category( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### ID

**语法:** obj &lt;&lt; ID( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Sample Size

**语法:** obj &lt;&lt; Sample Size( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### X

**语法:** obj &lt;&lt; X( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

## 项消息

### Agreement Statistic

**语法:** obj &lt;&lt; Agreement Statistic( state=0|1 )

**说明:** 检验评级员彼此一致的程度，以及缺少一致性是否呈对称性。仅适用于评级员一致性响应。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical(
	Rater Agreement( :First Survey, :Second Survey ),
	Freq( :Count ),
	Agreement Statistic( 0 )
);
Wait( 1 );
obj << Agreement Statistic( 1 );

```

### Aligned Responses

**语法:** obj = Categorical(...Aligned Responses( columns )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 在单个报表中汇总具有相同响应水平的多个列的数据。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical( Aligned Responses( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Arrange in Rows

**语法:** obj &lt;&lt; Arrange in Rows( number )

**说明:** 排列报表使得它们显示在页面中。指定要在每行中显示的报表数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Responses( :country ),
	Legend( 0 ),
	Arrange in Rows( 2 )
);
Wait( 1 );
obj << Arrange in Rows( 1 );

```

### Binomial

**语法:** obj &lt;&lt; Binomial( state=0|1 )

**说明:** 假定每个类别服从二项分布，执行响应水平的卡方独立性检验。 注意: 仅可用于多重响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );
obj << Homogeneity Test( 1 );

```

### Cell Chisq

**语法:** obj &lt;&lt; Cell Chisq( state=0|1 )

**说明:** 为卡方独立性检验显示或隐藏表中每个单元格的 p 值。根据该计数是大于还是小于期望值对 p 值着色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### Cell Chisq FDR

**语法:** obj &lt;&lt; Cell Chisq FDR( state=0|1 )

**说明:** 为卡方独立性检验显示或隐藏表中每个单元格的假发现率 (FDR) 调整 p 值。根据该计数是大于还是小于期望数对 FDR 调整 p 值着色。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :size ), Responses( :country ) );
obj << Cell Chisq( 1 );

```

### ChiSquare Test Choices

**语法:** obj &lt;&lt; ChiSquare Test Choices( "LR 和 Pearson"|"仅 LR"|"仅 Pearson" )

**说明:** 指定齐性检验中显示的检验: 似然比卡方或 Pearson 卡方，或二者。仅适用于单个响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << ChiSquare Test Choices( "Pearson Only" );
obj << Test Response Homogeneity( 1 );

```

### Compare Each Cell

**语法:** obj &lt;&lt; Compare Each Cell( state=0|1 )

**说明:** 将响应的每个水平与分组变量各水平组合而成的其他所有水平进行比较。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );
obj << Compare Each Cell( 1 );

```

### Compare Each Cell FDR

**语法:** obj &lt;&lt; Compare Each Cell FDR( state=0|1 )

**说明:** 将响应的每个水平与分组变量各水平组合而成的其他所有水平进行比较，带假发现率 (FDR) 调整。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );
obj << Compare Each Cell FDR( 1 );

```

### Compare Each Sample

**语法:** obj &lt;&lt; Compare Each Sample( state=0|1 )

**说明:** 比较分组变量各个水平的响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );
obj << Compare Each Sample( 1 );

```

### Compare Each Sample FDR

**语法:** obj &lt;&lt; Compare Each Sample FDR( state=0|1 )

**说明:** 比较具有假发现率 (FDR) 调整的分组变量的每个水平的响应。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );
obj << Compare Each Sample FDR( 1 );

```

### Conditional Association

**语法:** obj &lt;&lt; Conditional Association( state=0|1 )

**说明:** 显示或隐藏假定某响应出现在某行中，则使该响应出现在列中的比率。仅适用于多重响应、分隔的多重响应以及由 ID 标识的多重响应模型（“在 ID 中仅出现一次”处于选中状态下）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	ID( :Response ID ),
	Unique Occurrences within ID( 1 ),
	Structured( :Brush, :Brush Delimited ),
	Share Chart( 0 ),
	Legend( 0 ),
	Conditional Association( 1 )
);

```

### Confidence Interval Coverage

**语法:** obj = Categorical(...Confidence Interval Coverage( number=0.95 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置响应比率和份额的置信区间覆盖率。覆盖率等于 (1-alpha)。 默认为“0.95”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);

```

### Confidence Limits Format

**语法:** obj &lt;&lt; Confidence Limits Format( format, &lt;options&gt; )

**说明:** 格式化表中的份额和比率的置信限。默认值为“百分比”、6、2。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	X( :Age Group ),
	Responses( :I am working on my career ),
	Confidence Interval Coverage( 0.99 ),
	Share Confidence Interval( 1 )
);
Wait( 1 );
obj << Confidence Limits Format( "Percent", 6, 0 );

```

### Contents Summary

**语法:** obj &lt;&lt; Contents Summary( state=0|1 )

**说明:** 将所有检验和 p 值收集到一个报表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Contents Summary( 1 );

```

### Count Missing Responses

**语法:** obj = Categorical(...Count Missing Responses( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 包括缺失值作为响应类别。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Missing Data Pattern.jmp" );
Categorical( X( :Trial 1 ), Count Missing Responses( 1 ), Responses( :Trial 4 ) );

```

### Count Test

**语法:** obj &lt;&lt; Count Test( state=0|1 )

**说明:** 使用 Poisson 回归执行比率的卡方独立性检验。 注意: 仅可用于多重响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );
obj << Count Test( 1 );

```

### Crosstab

**语法:** obj &lt;&lt; Crosstab( state=0|1 )

**说明:** 生成计数的交叉表，其中响应水平定义列，分组变量水平定义行。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Crosstab Transposed( 1 );
obj << Crosstab( 1 );

```

### Crosstab Transposed

**语法:** obj &lt;&lt; Crosstab Transposed( state=0|1 )

**说明:** 生成计数的交叉表，其中响应水平定义行，分组变量水平定义列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Crosstab Transposed( 1 );

```

### Exclude Nonresponses

**语法:** obj &lt;&lt; Exclude Nonresponses( state=0|1 )

**说明:** 比较多重响应类别时为计数和齐性检验排除非响应。空或缺失单元格被视为非响应。推荐使用和以上都不相同的另外的类别。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	Structured( :"What is your gender ? "n, :"What colors do you like? (with nonresponse)"n ),
	Share Chart( 0 ),
	Homogeneity Test( 1 )
);
Wait( 1 );
obj << Exclude Nonresponses( 1 );

```

### FDR Adjusted PValues

**语法:** obj &lt;&lt; FDR Adjusted PValues( state=0|1 )

**说明:** 当存在许多 p 值并且某些检验很容易就偶然显著时，将使用假发现率调整的 p 值（Benjamini 和 Hochberg，1995）。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured( :I am working on my career, :Age Group * :Employee Tenure ),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << FDR Adjusted PValues( 1 );

```

### Filter

**语法:** obj &lt;&lt; Filter( state=0|1 )

**说明:** 在本地将数据过滤到特定的组或范围。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	Responses( :country ),
	Legend( 0 ),
	Local Data Filter(
		Location( {634, 43} ),
		Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
		Add Filter( columns( :sex ), Where( :sex == "Female" ) )
	)
);
Wait( 1.0 );
obj << Filter( 0 );

```

### Force Crosstab Shading

**语法:** obj &lt;&lt; Force Crosstab Shading( state=0|1 )

**说明:** 在“交叉表”报表上使用着色，即使全局首选项设置为不着色。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Force Crosstab Shading( 0 );
Wait( 1 );
obj << Force Crosstab Shading( 1 );

```

### Force Labels Horizontal

**语法:** obj &lt;&lt; Force Labels Horizontal( state=0|1 )

**说明:** 在交叉表中使用水平标签，而不考虑文本的长度。标签文本换行而不是旋转。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Employee Tenure ), Responses( :Job Satisfaction ) );
Wait( 1 );
obj << Force Labels Horizontal( 1 );

```

### Format Elements

**语法:** obj &lt;&lt; Format Elements

**说明:** 打开一个窗口，您可以在其中为报表的各个元素指定格式。

### Frequencies

**语法:** obj &lt;&lt; Frequencies( state=0|1 )

**说明:** 在报表中显示或隐藏频数表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Frequencies( 0 )
);
Wait( 1 );
obj << Frequencies( 1 );

```

### Frequencies Format

**语法:** obj &lt;&lt; Frequencies Format( format, &lt;options&gt; )

**说明:** 格式化表中的频数值。默认值为“固定小数位数”、7、0。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
Wait( 1 );
obj << Frequencies Format( "Fixed Dec", 7, 2 );

```

### Frequency Chart

**语法:** obj &lt;&lt; Frequency Chart( state=0|1 )

**说明:** 在报表中显示或隐藏频数图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Frequency Chart( 1 );

```

### Grouping Option

**语法:** obj = Categorical(...Grouping Option( "组合"|"单独"|"二者" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置 X 变量的分组方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Aligned Responses( :country, :size ),
	Grouping Option( Each Individually )
);

```

### Hide Nonsignificant

**语法:** obj &lt;&lt; Hide Nonsignificant( state=0|1 )

**说明:** 隐藏不显著的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Hide Nonsignificant( 1 );

```

### Highlight Cells

**语法:** obj &lt;&lt; Highlight Cells

**说明:** 突出显示满足指定条件的单元格。

### Homogeneity Test

**语法:** obj &lt;&lt; Homogeneity Test( state=0|1 )

**说明:** 假定每个类别服从二项分布，执行响应水平的卡方独立性检验。 注意: 仅可用于多重响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );
obj << Homogeneity Test( 1 );

```

### Include Response Categories in Excluded Rows

**语法:** obj = Categorical(...Include Response Categories in Excluded Rows( state=0|1 )...)

**说明:** 指定报表包括仅在排除行中出现的响应类别。这些类别的计数为零。

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Select Where( :size == "Small" );
dt << Exclude;
obj = Categorical(
	Include Response Categories in Excluded Rows( 1 ),
	X( :marital status ),
	Responses( :size )
);

```

### Include Responses Not in Data

**语法:** obj = Categorical(...Include Responses Not in Data( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 显示具有值标签的响应类别，即使它们不出现在数据中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:type << Set Property(
	Value Labels,
	{"Family" = "Family", "Sporty" = "Sporty", "Utility" = "SUV", "Work" = "Work"}
);
obj = Categorical( X( :marital status ), Responses( :type ) );
obj << Include Responses Not in Data( 1 );

```

### Indicator Group

**语法:** obj = Categorical(...Indicator Group( columns )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总多重响应变量中的数据，其中响应位于多个指示符列中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Indicators.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Indicator Group(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	)
);

```

### Mean Confidence Interval

**语法:** obj &lt;&lt; Mean Confidence Interval( state=0|1 )

**说明:** 显示或隐藏均值的置信区间

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Confidence Interval( 1 );

```

### Mean Score

**语法:** obj &lt;&lt; Mean Score( state=0|1 )

**说明:** 在交叉表中显示基于原始数值代码或值得分的得分均值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score( 1 );

```

### Mean Score Comparisons

**语法:** obj &lt;&lt; Mean Score Comparisons( state=0|1 )

**说明:** 比较各个分组类别的得分均值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons( 1 );

```

### Mean Score Comparisons FDR

**语法:** obj &lt;&lt; Mean Score Comparisons FDR( state=0|1 )

**说明:** 比较各个分组类别的得分均值。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons FDR( 1 );

```

### Mean Score Comparisons as Suffix

**语法:** obj &lt;&lt; Mean Score Comparisons as Suffix( state=0|1 )

**说明:** 比较各个分组类别的得分均值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score Comparisons Suffixed( 1 );

```

### Mean Std Error

**语法:** obj &lt;&lt; Mean Std Error( state=0|1 )

**说明:** 显示或隐藏均值的标准误差

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Std Error( 1 );

```

### Means Format

**语法:** obj &lt;&lt; Means Format( format, &lt;options&gt; )

**说明:** 设置表中均值得分的格式。默认值为“固定”、6、2。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Mean Score( 1 );
Wait( 1 );
obj << Means Format( "Fixed", 6, 4 );

```

### Multiple Delimited

**语法:** obj = Categorical(...Multiple Delimited( column )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总多重响应变量中的数据，其中多个响应变量在单个列中，每个响应用逗号、分号或制表符分隔。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failures3Delimited.jmp" );
obj = dt << Categorical( Multiple Delimited( :failureS ), ID( :ID ), X( :clean, :date ) );

```

### Multiple Response

**语法:** obj = Categorical(...Multiple Response( columns )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总多重响应变量中的数据，其中每个可能的响应都记录在其自己的单独列中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3MultipleField.jmp" );
obj = dt << Categorical(
	X( :clean, :date ),
	Multiple Response( :Failure1, :Failure2, :Failure3 ),
	Frequency Chart( 0 )
);

```

### Multiple Response by ID

**语法:** obj = Categorical(...Multiple Response by ID( column )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总多重响应变量中的数据，其中包含单个响应列，并且还有另一列包含测试对象的 ID。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);

```

### Order Response Levels High to Low

**语法:** obj = Categorical(...Order Response Levels High to Low( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 对报表重新排序，使得具有最高值的类别显示在最上部。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Order Response Levels High to Low( 1 ),
	Responses( :country )
);

```

### Order by Significance

**语法:** obj &lt;&lt; Order by Significance( state=0|1 )

**说明:** 对报表重新排序，使得最显著的报表显示在最上部。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Grouping Option( Each Individually ),
	X( :Age Group, :School Age Children ),
	Responses( :I am working on my career ),
	Responses( :My home needs some major improvements ),
	Responses( :I have vast interests outside of work ),
	Responses( :I come from a large family ),
	Crosstab Transposed( 1 ),
	Test Response Homogeneity( 1 )
);
obj << Order by Significance( 1 );

```

### Poisson

**语法:** obj &lt;&lt; Poisson( state=0|1 )

**说明:** 使用 Poisson 回归执行比率的卡方独立性检验。 注意: 仅可用于多重响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( Multiple Response( :country, :size ), X( :sex, :marital status ) );
obj << Count Test( 1 );

```

### Rate Confidence Interval

**语法:** obj &lt;&lt; Rate Confidence Interval( state=0|1 )

**说明:** 显示或隐藏比率概率的置信区间。置信区间是使用 Poisson 线性模型的标准误差的正态区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Gender ), Multiple Delimited( :Brush Delimited ) );
obj << Rate Confidence Interval( 1 );

```

### Rate Per Case

**语法:** obj &lt;&lt; Rate Per Case( state=0|1 )

**说明:** 在报表中显示或隐藏每种情况的比率表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Rate Per Case( 0 )
);
Wait( 1 );
obj << Rate Per Case( 1 );

```

### Rate per Case Responding

**语法:** obj &lt;&lt; Rate per Case Responding( state=0|1 )

**说明:** 显示或隐藏每种情况的响应率（排除缺失）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case Responding( 1 );

```

### Rater Agreement

**语法:** obj = Categorical(...Rater Agreement( columns )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总多个列中的数据，其中每一列都是不同的个人（评级员）对同一问题或项作出的评级。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical( Rater Agreement( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Relative Risk

**语法:** obj &lt;&lt; Relative Risk( state=0|1, {}, {level of interest} )

**说明:** 针对响应的每个水平，显示或隐藏二水平分组变量的相对风险。在分组变量有两个水平、响应有两个水平或为多重响应，并且已选定“在 ID 中仅出现一次”选项的情况下，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect,
	),
	Sample Size( :SampleSize ),
	X( :clean )
);
obj << Relative Risk( 1, {}, {"after"} );

```

### Repeated Measures

**语法:** obj = Categorical(...Repeated Measures( columns )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总多个列中的数据，其中每一列包含在不同时间点对同一问题作出的响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );

```

### Response Frequencies

**语法:** obj = Categorical(...Response Frequencies( columns )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总多重响应变量，其中每个可能响应的频数都记录在其自己的列中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );
obj = dt << Categorical(
	Response Frequencies(
		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,
		:silicon defect
	),
	X( :clean, :date ),
	Sample Size( :SampleSize )
);

```

### Response Levels

**语法:** obj &lt;&lt; Response Levels( state=0|1 )

**说明:** 显示或隐藏每个响应的数据水平。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Response Levels( 0 );
Wait( 1 );
obj << Response Levels( 1 );

```

### Responses

**语法:** obj = Categorical(...Responses( column )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 汇总单个列中的响应。若选择了多个列，则分类报表将为每个单独的列包含一个单独的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );

```

### Save Contingency Table

**语法:** obj &lt;&lt; Save Contingency Table

**说明:** 将交叉表中的值保存至新的数据表。新表使用原始列名。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Contingency Table;

```

### Save DocX File

**语法:** obj &lt;&lt; Save DocX File

**说明:** Undocumented and Experimental Feature

### Save Excel File

**语法:** obj &lt;&lt; Save Excel File

**说明:** 将表保存至 Excel 电子表格文件。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Excel File(
	"$DOCUMENTS\ExcelCarSize.xlsx",
	Separate Rows for Each Cell Statistic( 1 )
);

```

### Save Frequencies

**语法:** obj &lt;&lt; Save Frequencies

**说明:** 将频数保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Frequencies;

```

### Save Mean Scores

**语法:** obj &lt;&lt; Save Mean Scores

**说明:** 将每个样本组的得分均值保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Mean Scores;

```

### Save Rate Per Case

**语法:** obj &lt;&lt; Save Rate Per Case

**说明:** 将每种情况的比率保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Rate Per Case;

```

### Save Share of Responses

**语法:** obj &lt;&lt; Save Share of Responses

**说明:** 将响应份额保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Share of Responses;

```

### Save Stacked Table

**语法:** obj &lt;&lt; Save Stacked Table

**说明:** 将交叉表中的值保存至新的数据表。新表使用通用的列名。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save Stacked Table;

```

### Save Test Homogeneity

**语法:** obj &lt;&lt; Save Test Homogeneity

**说明:** 将齐性检验的结果保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Test Homogeneity;

```

### Save Test Rates

**语法:** obj &lt;&lt; Save Test Rates

**说明:** 将“检验多重响应”选项的结果保存至新的数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Test Rates;

```

### Save Transposed Frequencies

**语法:** obj &lt;&lt; Save Transposed Frequencies

**说明:** 将转置频数保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Transposed Frequencies;

```

### Save Transposed Rate Per Case

**语法:** obj &lt;&lt; Save Transposed Rate Per Case

**说明:** 将变换的每种情况的比率保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Multiple Response by ID( :failure ),
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date )
);
obj << Rate Per Case( 1 );
obj << Save Transposed Rate Per Case;

```

### Save Transposed Share of Responses

**语法:** obj &lt;&lt; Save Transposed Share of Responses

**说明:** 将转置的响应份额保存至新表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Save Transposed Share of Responses;

```

### Save tTests and pValues

**语法:** obj &lt;&lt; Save tTests and pValues

**说明:** 将“比较均值”检验中的 t 检验和 p 值保存至新的数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :size ) );
obj << Save ttests and pvalues;

```

### Share Chart

**语法:** obj &lt;&lt; Share Chart( state=0|1 )

**说明:** 在报表中显示或隐藏份额图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share Chart( 0 )
);
Wait( 1 );
obj << Share Chart( 1 );

```

### Share Confidence Interval

**语法:** obj &lt;&lt; Share Confidence Interval( state=0|1 )

**说明:** 显示或隐藏份额响应概率的置信区间。该置信区间使用 Wilson 得分检验方法构建。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical( X( :Age Group ), Responses( :I am working on my career ) );
obj << Share Confidence Interval( 1 );

```

### Share Of Responses

**语法:** obj &lt;&lt; Share Of Responses( state=0|1 )

**说明:** 在报表中显示或隐藏响应份额表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical(
	X( :sex, :marital status ),
	Responses( :country ),
	Share of Responses( 0 )
);
Wait( 1 );
obj << Share of Responses( 1 );

```

### Shares and Rates Format

**语法:** obj &lt;&lt; Shares and Rates Format( format, &lt;options&gt; )

**说明:** 格式化表中的份额、比率和每响应比率值。默认值为“百分比”、6、1。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
Wait( 1 );
obj << Shares and Rates Format( "Percent", 7, 2 );

```

### Shorten Labels

**语法:** obj = Categorical(...Shorten Labels( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 通过删除公共前缀和后缀以缩短标签。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << New Column( "Age Range",
	Numeric,
	"Continuous",
	Formula( :age > 12 ),
	Value Labels( {0 = "Age Range: Adolescent", 1 = "Age Range: Teenager"} )
);
obj = dt << Categorical( Responses( :Age Range ), Legend( 0 ) );
Wait( 2 );
obj << Shorten Labels( 1 );

```

### Show Columns Used in Report

**语法:** obj &lt;&lt; Show Columns Used in Report( state=0|1 )

**说明:** 显示或隐藏“报表中使用的列”信息。该选项仅影响具有 SPSS 或 SAS 名称或 SPSS 或 SAS 标签列属性的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
:country << Set Property( "SAS Label", "Country of Manufacture Origin" );
obj = Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Show Columns Used in Report( 1 );

```

### Show Highlight Legend

**语法:** obj &lt;&lt; Show Highlight Legend( state=0|1 )

**说明:** 默认开启。

### Show Supercategories

**语法:** obj &lt;&lt; Show Supercategories( state=0|1 )

**说明:** 显示或隐藏超类别。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}
		)
	),
	Legend( 0 )
);
obj << Show Supercategories( 0 );
Wait( 1 );
obj << Show Supercategories( 1 );

```

### Show Warnings

**语法:** obj &lt;&lt; Show Warnings( state=0|1 )

**说明:** 为与小样本有关的卡方检验显示警告。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured( :I am working on my career, :Age Group * :Employee Tenure ),
	Share Chart( 0 ),
	Test Response Homogeneity( 1 )
);
obj << Show Warnings( 1 );

```

### Std Dev Format

**语法:** obj &lt;&lt; Std Dev Format( format, &lt;options&gt; )

**说明:** 设置表中标准差得分的格式。默认值为“固定”、6、2。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Std Dev Score( 1 );
Wait( 1 );
obj << Std Dev Format( "Fixed", 6, 4 );

```

### Std Dev Score

**语法:** obj &lt;&lt; Std Dev Score( state=0|1 )

**说明:** 在交叉表中显示基于原始数值代码或值得分的得分标准差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Std Dev Score( 1 );

```

### Structured

**语法:** obj = Categorical(...Structured( Column * nestedColumn ... + rightColumn, sideColumn + lowerColumns... )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 生成两个或多个变量的结构化交叉表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Categorical(
	Structured( :Gender * :Age Group + :Position Tenure, :Job Satisfaction + :Salary Group )
);

```

### Supercategories

**语法:** obj &lt;&lt; Supercategories( column, ({Group (name, {level1, level2, ... levelN})}) )

**说明:** 指定超类别在本地聚合响应类别。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Responses( :I like the color orange. ),
	Supercategories(
		:I like the color orange.(
			{Group( "Positive Response", {"Neutral", "Agree", "Strongly agree"} )}
		)
	),
	Legend( 0 )
);

```

### Test Response Homogeneity

**语法:** obj &lt;&lt; Test Response Homogeneity( state=0|1 )

**说明:** 给定似然比和 Pearson 卡方检验，检验响应列的齐性。仅适用于单个响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Test Response Homogeneity( 1 );

```

### Total Cases

**语法:** obj &lt;&lt; Total Cases( state=0|1 )

**说明:** 对于多重响应变量，在交叉表中显示总案例数。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red., :I like the color orange.
	)
);
obj << Total Cases( 0 );
Wait( 1 );
obj << Total Cases( 1 );

```

### Total Cases Responding

**语法:** obj &lt;&lt; Total Cases Responding( state=0|1 )

**说明:** 对于多重响应变量，在交叉表中显示至少响应一次的总案例数。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );
obj = dt << Categorical(
	X( :"What is your gender ? "n, :"How old are you ? "n ),
	Multiple Response(
		:I like the color blue., :I like the color red., :I like the color orange.
	)
);
obj << Total Cases Responding( 0 );
Wait( 1 );
obj << Total Cases Responding( 1 );

```

### Total Responses

**语法:** obj &lt;&lt; Total Responses( state=0|1 )

**说明:** 在交叉表中显示总响应数。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :sex, :marital status ), Responses( :country ) );
obj << Total Responses( 0 );
Wait( 1 );
obj << Total Responses( 1 );

```

### Totals First

**语法:** obj &lt;&lt; Totals First( state=0|1 )

**说明:** 在交叉表顶部或左侧附近显示响应合计，但仅当每列下的多个表的合计相同时才显示。

### Transition Report

**语法:** obj &lt;&lt; Transition Report( state=0|1 )

**说明:** 显示或隐藏说明类别如何随时间更改的报表。仅适用于重复测量模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Prime Minister Ratings.jmp" );
obj = dt << Categorical( Repeated Measures( :First Survey, :Second Survey ), Freq( :Count ) );
obj << Transition Report( 1 );

```

### Transposed Freq Chart

**语法:** obj &lt;&lt; Transposed Freq Chart( state=0|1 )

**说明:** 显示或隐藏转置的频数图，它包含的列对应每个响应水平而横向的行对应不同的样本水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Categorical( X( :marital status ), Responses( :country ) );
obj << Transposed Freq Chart( 1 );

```

### Unique Occurrences within ID

**语法:** obj = Categorical(...Unique Occurrences within ID( state=0|1 )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 调整 ID 相同的各行的多重响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Failure3ID.jmp" );
obj = dt << Categorical(
	Freq( :N ),
	Sample Size( :SampleSize ),
	ID( :ID ),
	X( :clean, :date ),
	Unique occurrences within ID( 1 ),
	Multiple Response by ID( :failure )
);

```

