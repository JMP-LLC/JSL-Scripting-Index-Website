# Explore Outliers



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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
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

**语法:** obj = Explore Outliers(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

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

### Explore Outliers

**语法:** Explore Outliers( Y( columns ) )

**说明:** 标识、探索和管理一元或多元数据中的离群值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## 列

### By

**语法:** obj &lt;&lt; By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ), By( _bycol ) );

```

### Columns

**语法:** obj &lt;&lt; Columns( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Label

**语法:** obj &lt;&lt; Label( column )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Validation

**语法:** obj &lt;&lt; Validation( column )

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

### Y

**语法:** obj &lt;&lt; Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );

```

## 项消息

### K Nearest Neighbor Outliers

**语法:** obj &lt;&lt; K Nearest Neighbor Outliers

**说明:** 对于每个点，查找与其第 k 个最近邻的距离。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << k Nearest Neighbor Outliers( K( 5 ) );

```

### Multivariate k Nearest Neighbor Outliers

**语法:** obj &lt;&lt; Multivariate k Nearest Neighbor Outliers

**JMP添加的版本:** 14

### Quantile Range Outliers

**语法:** obj &lt;&lt; Quantile Range Outliers

**说明:** 查找分位数之外的大于几个分位数间距的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;

```

### Robust Fit Outliers

**语法:** obj &lt;&lt; Robust Fit Outliers

**说明:** 使用中心和尺度的稳健估计值，查找距离中心几个尺度远的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;

```

### Robust PCA Outliers

**语法:** obj &lt;&lt; Robust PCA Outliers

**说明:** 将数据稳健分解为残差的低秩矩阵和稀疏矩阵。残差中会检测离群值。它还可以插补缺失值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << Robust PCA Outliers;

```

## K Nearest Neighbor Outliers

### 项消息

#### Close

**语法:** obj &lt;&lt; Close

**JMP添加的版本:** 16

#### Exclude Selected Rows

**语法:** obj &lt;&lt; Exclude Selected Rows

**JMP添加的版本:** 16

#### Impute Missing

**语法:** obj &lt;&lt; Impute Missing( state=0 )

**说明:** 若存在缺失值，则在使用“K 最近邻”进行分析之前，使用“稳健 PCA”对缺失值进行插补。 默认开启。

**JMP添加的版本:** 16

#### K

**语法:** obj &lt;&lt; K( number=8 )

**说明:** 要为表中每行查找的近邻行数。 默认为“8”。

**JMP添加的版本:** 16

#### Save NN Distances

**语法:** obj &lt;&lt; Save NN Distances

**说明:** 将包含与第 k 个最近邻的距离的新列保存至数据表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Save NN Distances;

```

#### Scatterplot Matrix

**语法:** obj &lt;&lt; Scatterplot Matrix

**说明:** 打开包含所有列的散点图矩阵的窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( 2 :: 10 ) );
obj << k Nearest Neighbor Outliers( K( 4 ) );
obj << Scatterplot Matrix;

```

## Multivariate Robust Outliers

### 项消息

#### Close

**语法:** obj &lt;&lt; Close

**JMP添加的版本:** 16

#### Exclude Selected Rows

**语法:** obj &lt;&lt; Exclude Selected Rows

**JMP添加的版本:** 16

## Quantile Range Outliers

### 项消息

#### Add Highest Nines to Missing Value Codes

**语法:** obj &lt;&lt; Add Highest Nines to Missing Value Codes( ALL or column1, column2, ... )

**说明:** 选择列为参数的列，并在每列中查找最高一串 9。在每个选定列中为这些值创建“缺失值代码”属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Add Highest Nines to Missing Value Codes( :PS_RPNBR );
dt:PS_RPNBR << Get Column Properties;
//See Log for Missing Value Codes column property

```

#### Add to Missing Value Codes

**语法:** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**说明:** 选择列为参数的列，并在这些列中为离群值添加“缺失值代码”属性。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Change Highest Nines to Missing

**语法:** obj &lt;&lt; Change Highest Nines to Missing( ALL or column1, column2, ... )

**说明:** 选择被列为参数的列，并在这些列中查找最高一串 9。将这些最高一串 9 改为缺失。请注意，这将更改数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Responses" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);
obj << Change Highest Nines to Missing( :PS_RPNBR );

```

#### Change to Missing

**语法:** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，将标识为离群值的值改为缺失值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**语法:** obj &lt;&lt; Close

**说明:** 删除分析的一部分并重新打开命令分级显示项。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

#### Color Cells

**语法:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，为对应于离群值的单元格着色。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**语法:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，将“颜色”行状态分配给对应于离群值的行。

**JMP添加的版本:** 16

#### Exclude Rows

**语法:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，排除包含标识为离群值的值的行。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**语法:** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**说明:** 通过将离群值更改为缺失值，从选定的列创建新的公式列。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**语法:** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**说明:** 创建一个脚本，通过将离群值更改为缺失值从选定的列生成新的公式列。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

#### Get Quantile Outliers

**语法:** obj &lt;&lt; Get Quantile Outliers

**说明:** 返回包含特定列的列表，这些列包含离群值和包含这些列中的离群值的向量列表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Get Quantile Outliers;

```

#### Q

**语法:** obj &lt;&lt; Q( number=3 )

**说明:** 为四分位距离设置尺度倍数 Q。落在尾分位数之外 Q 倍四分位距离以上位置的值被视为离群值。使用“重新扫描”应用该设置。 默认为“3”。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Q( 4 ) );

```

#### Rescan

**语法:** obj &lt;&lt; Rescan

**说明:** 使用更改后的设置重新计算准则并重新扫描数据以获取离群值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Tail Quantile( 0.2 );
obj << Rescan;

```

#### Restrict search to integers

**语法:** obj &lt;&lt; Restrict search to integers( state=0|1 )

**说明:** 将离群值仅限定为整数值。该设置限制搜索离群值，以便查找业界特定的缺失值代码和错误代码。可用于“分位数范围离群值”和“稳健拟合离群值”方法。默认关闭。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Restrict search to integers( 1 ) )
);

```

#### Save Quantile Outlier Limits

**语法:** obj &lt;&lt; Save Quantile Outlier Limits

**说明:** 打开包含“分位数范围离群值”报表信息和一列离群值的新数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers;
obj << Save Quantile Outlier Limits;

```

#### Select Rows

**语法:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**说明:** 选择列为参数的列，并选择在以上任意列中包含离群值的行。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.3 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

#### Show only columns with outliers

**语法:** obj &lt;&lt; Show only columns with outliers( state=0|1 )

**说明:** 将报表中的列列表限定为包含离群值的那些列。可用于“分位数范围离群值”和“稳健拟合离群值”方法。默认关闭。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Quantile Range Outliers( Show only columns with outliers( 1 ) )
);

```

#### Tail Quantile

**语法:** obj &lt;&lt; Tail Quantile( number=.10 )

**说明:** 为每个尾设置分位数值。分位数用在计算分位数间距中。使用“重新扫描”应用该设置。 默认为“.10”。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Quantile Range Outliers( Tail Quantile( 0.2 ) );

```

## Robust Fit Outliers

### 项消息

#### Add to Missing Value Codes

**语法:** obj &lt;&lt; Add to Missing Value Codes( ALL or column1, column2, ... )

**说明:** 选择列为参数的列，并在这些列中为离群值添加“缺失值代码”属性。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Add to Missing Value Codes( :"Q-E"n, :"ZN-E"n );

```

#### Cauchy

**语法:** obj &lt;&lt; Cauchy( state=0|1 )

**说明:** 使用 Cauchy 分布来估计值的稳健中心和尺度。稳健中心和尺度用于确定离群值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Cauchy( 1 );
obj << Rescan;

```

#### Change to Missing

**语法:** obj &lt;&lt; Change to Missing( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，将标识为离群值的值改为缺失值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Change to Missing( :"Q-E"n, :"ZN-E"n );

```

#### Close

**语法:** obj &lt;&lt; Close

**说明:** 删除分析的一部分并重新打开命令分级显示项。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
Wait( 2 );
obj << Close;

```

#### Color Cells

**语法:** obj &lt;&lt; Color Cells( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，为对应于离群值的单元格着色。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Cells( :"Q-E"n, :"ZN-E"n );

```

#### Color Rows

**语法:** obj &lt;&lt; Color Rows( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，将“颜色”行状态分配给对应于离群值的行。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
dt << Clear Row States;
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Color Rows( :"Q-E"n, :"ZN-E"n );

```

#### Exclude Rows

**语法:** obj &lt;&lt; Exclude Rows( ALL or column1, column2, ... )

**说明:** 选择列为参数的列。在选定列中，排除包含标识为离群值的值的行。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Exclude Rows( :"Q-E"n, :"ZN-E"n );

```

#### Formula Columns

**语法:** obj &lt;&lt; Formula Columns( ALL or column1, column2, ... )

**说明:** 通过将离群值更改为缺失值，从选定的列创建新的公式列。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Columns( Suffix( "Culled" ) );

```

#### Formula Script

**语法:** obj &lt;&lt; Formula Script( ALL or column1, column2, ... )

**说明:** 创建一个脚本，通过将离群值更改为缺失值从选定的列生成新的公式列。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
Wait( 2 );
obj << Formula Script( Suffix( "Culled" ) );

```

#### Huber

**语法:** obj &lt;&lt; Huber( state=0|1 )

**说明:** 使用 Huber 估计法来估计值的稳健中心和尺度。稳健中心和尺度用于确定离群值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Huber( 1 );
obj << Rescan;

```

#### K Sigma

**语法:** obj &lt;&lt; K Sigma( number=4 )

**说明:** 设置 K Sigma 值，其中离群值定义为 K 倍的距离稳健中心的稳健尺度的值。 默认为“4”。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 3 );
obj << Rescan;

```

#### Quartile

**语法:** obj &lt;&lt; Quartile( state=0|1 )

**说明:** 使用中位数估计稳健中心，使用除以 1.349 后的四分位间距估计稳健尺度。稳健中心和尺度用于确定离群值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Quartile( 1 );
obj << Rescan;

```

#### Rescan

**语法:** obj &lt;&lt; Rescan

**说明:** 使用更改后的设置重新计算准则并重新扫描数据以获取离群值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << K Sigma( 2.5 );
obj << Rescan;

```

#### Save Robust Outlier Limits

**语法:** obj &lt;&lt; Save Robust Outlier Limits

**说明:** 打开一个新的数据表，它包含“稳健估计值和离群值”报表中的信息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers;
obj << Save Robust Outlier Limits;

```

#### Select Rows

**语法:** obj &lt;&lt; Select Rows( ALL or column1, column2, ... )

**说明:** 选择列为参数的列，并选择在以上任意列中包含离群值的行。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers( Y( Column Group( "Sensor Measurements" ) ) );
obj << Robust Fit Outliers( K Sigma( 2 ) );
obj << Select Rows( :"Q-E"n, :"ZN-E"n );

```

## Robust PCA Outliers

### 项消息

#### Center

**语法:** obj &lt;&lt; Center( state=1 )

**说明:** 指定在分析前是否以中位数居中数据。 默认开启。

**JMP添加的版本:** 16

#### Close

**语法:** obj &lt;&lt; Close

**说明:** 从平台报表删除 RPCA 分析。

**JMP添加的版本:** 16

#### Lambda

**语法:** obj &lt;&lt; Lambda( number )

**说明:** 具有较低值的“稳健 PCA”调节使其对声明离群值更加敏感。默认 Lambda=2/sqrt(max(nRow,nCol))

**JMP添加的版本:** 16

#### MaxIt

**语法:** obj &lt;&lt; MaxIt( number )

**说明:** 收敛失败前允许的最大 SVD 迭代次数。

**JMP添加的版本:** 16

#### Outlier Threshold

**语法:** obj &lt;&lt; Outlier Threshold( number=2 )

**说明:** 指定绝对值大于该阈值的任何统一尺度的残差都将显示在离群值报表中。 默认为“2”。

**JMP添加的版本:** 16

#### Randomized SVD Dim

**语法:** obj &lt;&lt; Randomized SVD Dim( state=0|1 )

**说明:** 指定随机 SVD 中的维数，将宽问题的维数降低到该值。

**JMP添加的版本:** 17

#### Save Cleaned

**语法:** obj &lt;&lt; Save Cleaned( Trim(&lt;threshold&gt;),Impute(&lt;threshold&gt;),Make Missing(&lt;threshold&gt;),Color Impute(0|1)--if none specified it will prompt with dialog )

**说明:** 创建一组新列，其中包含插补的缺失值和修改的离群值。Trim(arg) 查找大于 arg 的统一尺度的残差，并将相应单元格中统一尺度的残差更改为带符号的 arg。Impute(arg) 查找大于 arg 的统一尺度的残差，并将相应单元格中统一尺度的残差更改为低秩近似。Make Missing(value) 查找任何大于 arg 的统一尺度的残差，并将相应单元格中统一尺度的残差更改为缺失。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Cleaned( Trim( 25 ), Impute( 50 ), Make Missing( 100 ) );

```

#### Save Large Outliers

**语法:** obj &lt;&lt; Save Large Outliers

**说明:** 创建一个新数据表，其包含报表中的离群值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Large Outliers;

```

#### Save Low Rank Approx

**语法:** obj &lt;&lt; Save Low Rank Approx

**说明:** 创建一组新列，其中包含从奇异值分解得到的低秩近似。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Low Rank Approx;

```

#### Save Residuals

**语法:** obj &lt;&lt; Save Residuals

**说明:** 创建一组包含残差的新列，残差为观测减去低秩近似。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Residuals;

```

#### Save Scaled Residuals

**语法:** obj &lt;&lt; Save Scaled Residuals

**说明:** 创建一组包含统一尺度残差的新列，统一尺度残差为统一尺度观测减去低秩近似。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Water Treatment.jmp" );
obj = dt << Explore Outliers(
	Y( Column Group( "Sensor Measurements" ) ),
	Robust PCA Outliers
);
obj << Save Scaled Residuals;

```

#### Scale

**语法:** obj &lt;&lt; Scale( state=1 )

**说明:** 指定是否在分析前按对标准差的四分位间距模拟将数据统一尺度。 默认开启。

**JMP添加的版本:** 16

#### Tolerance

**语法:** obj &lt;&lt; Tolerance( number )

**说明:** 指定收敛准则，它确定何时停止算法。默认收敛准则值基于启动窗口中指定的列数进行设置。

**JMP添加的版本:** 16

#### Use Randomized SVD

**语法:** obj &lt;&lt; Use Randomized SVD( state=0|1 )

**说明:** 使用随机 SVD 降维。该方法可以加快非常宽问题的计算速度。

**JMP添加的版本:** 17

