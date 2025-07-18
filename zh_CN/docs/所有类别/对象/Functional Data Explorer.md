# Functional Data Explorer



## 共享项消息

### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

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

#### 匿名预设

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### 在文件夹内搜索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### 按名称搜索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Table Window;

```

### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

#### 带过滤器的平台

```jsl

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

#### 常规

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**语法:** obj &lt;&lt; Report;Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

#### 示例 1

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 示例 2

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

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

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**语法:** obj = Functional Data Explorer(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## 关联的构造器

### Functional Data Explorer

**语法:** Functional Data Explorer( Y(column), X(column), ID(column) )

**说明:** 使用 B 样条、P 样条、傅里叶或小波基函数模型拟合函数模型。可以对函数模型执行函数主成分分析，以从数据中提取重要特征。还有一个选项可以直接对数据执行函数主成分分析，而无需先拟合基函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

## 列

### By

**语法:** obj = Functional Data Explorer(...&lt;By( column(s) )&gt;...)

**说明:** 为指定列的每个水平执行单独的分析。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	By( _bycol )
);

```

### Freq

**语法:** obj = Functional Data Explorer(...&lt;Freq( column )&gt;...)

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Freq( _freqcol )
);

```

### Function

**语法:** obj = Functional Data Explorer(...&lt;Function( column )&gt;...)

**说明:** 指定 ID 变量，该变量标识每一单个函数。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### ID

**语法:** obj = Functional Data Explorer(...&lt;ID( column )&gt;...)

**说明:** 指定 ID 变量，该变量标识每一单个函数。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Input

**语法:** obj = Functional Data Explorer(...&lt;Input( column )&gt;...)

**说明:** 指定输入变量。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Output

**语法:** obj = Functional Data Explorer(...Output( column(s) )...)

**说明:** 指定函数过程变量。ID 变量的每个水平必须至少有两个观测到的输出值。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Supplementary

**语法:** obj = Functional Data Explorer(...&lt;Supplementary( column(s) )&gt;...)

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Validation

**语法:** obj = Functional Data Explorer(...&lt;Validation( column )&gt;...)

**说明:** 指定定义验证集的数值列。该列应包含最多三个非重复值。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Validation( :Validation ),
	B Splines
);

```

### X

**语法:** obj = Functional Data Explorer(...&lt;X( column )&gt;...)

**说明:** 指定输入变量。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Y

**语法:** obj = Functional Data Explorer(...Y( column(s) )...)

**说明:** 指定函数过程变量。ID 变量的每个水平必须至少有两个观测到的输出值。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );

```

### Z

**语法:** obj = Functional Data Explorer(...&lt;Z( column(s) )&gt;...)

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

## 项消息

### B Splines

**语法:** obj &lt;&lt; B Splines

**说明:** 拟合数据的 B 样条模型。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines
);

```

### B Splines Model Controls

**语法:** obj &lt;&lt; B Splines Model Controls

**说明:** 在拟合 B 样条模型之前打开“模型控制”面板。您可以指定结点数和样条次数。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines Model Controls
);

```

### Baseline Correction

**语法:** obj &lt;&lt; Baseline Correction

**说明:** Subtracts a baseline function from each individual function. You can perform automated baseline correction using either the statistics-sensitive nonlinear iterative peak-clipping (SNIP) or the alternating reweighted least squares solution technique. There is also an option to load a known baseline function from a data table.

**JMP添加的版本:** 19

### Data Processing

**语法:** obj &lt;&lt; Data Processing( &lt;options&gt; )

**说明:** 指定允许您对数据执行预处理步骤的“数据处理”选项。这些选项包括清除、变换、对齐、光谱和目标函数操作。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

### Direct Functional PCA

**语法:** obj &lt;&lt; Direct Functional PCA

**说明:** 直接执行“函数 PCA”而不拟合基函数模型。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	Direct Functional PCA
);

```

### Fourier Basis

**语法:** obj &lt;&lt; Fourier Basis

**说明:** 拟合数据的惩罚 B 样条模型。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis
);

```

### Fourier Basis Model Controls

**语法:** obj &lt;&lt; Fourier Basis Model Controls

**说明:** 在拟合傅里叶基函数模型之前打开“模型控制”面板。您可以指定傅里叶变换对的个数和周期。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis Model Controls
);

```

### Multivariate Curve Resolution

**语法:** obj &lt;&lt; Multivariate Curve Resolution

**说明:** 执行多元曲线分辨率 (MCR)。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 18

### Nonnegative SVD

**语法:** obj &lt;&lt; Nonnegative SVD

**说明:** Performs a nonnegative singular value decomposition (SVD) on the stacked matrix of functions. A nonnegative SVD constrains the matrix decomposition so that the scores and loadings are greater than or equal to zero.

**JMP添加的版本:** 18

### P Splines

**语法:** obj &lt;&lt; P Splines

**说明:** 拟合数据的惩罚 B 样条模型。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines
);

```

### P Splines Model Controls

**语法:** obj &lt;&lt; P Splines Model Controls

**说明:** 在拟合 P 样条模型之前打开“模型控制”面板。您可以指定结点数和样条次数。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines Model Controls
);

```

### Peak Finding

**语法:** obj &lt;&lt; Peak Finding

**说明:** 直接或使用指定的参数模型来查找和汇总峰度。

**JMP添加的版本:** 17

### Penalized Nonnegative SVD

**语法:** obj &lt;&lt; Penalized Nonnegative SVD

**说明:** 执行已惩罚的非负 SVD 以构造函数 PCA。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 18

### Penalized SVD

**语法:** obj &lt;&lt; Penalized SVD

**说明:** 执行惩罚 SVD 以构造函数 PCA。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 18

### Plot Mean Function

**语法:** obj &lt;&lt; Plot Mean Function( state=0|1 )

**说明:** 在“汇总”报表中显示或隐藏“均值函数”图。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Mean Function( 0 );

```

### Plot Median Function

**语法:** obj &lt;&lt; Plot Median Function( state=0|1 )

**说明:** 在“汇总”报表中显示或隐藏“中位数函数”图。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Temperature ),
	X( :Month ),
	ID( :Year ),
	Plot Median Function( 1 )
);

```

### Plot Standard Deviation Function

**语法:** obj &lt;&lt; Plot Standard Deviation Function( state=0|1 )

**说明:** 在“汇总”报表中显示或隐藏“标准差函数”图。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Raleigh Temps.jmp" );
obj = dt << Functional Data Explorer( Y( :Temperature ), X( :Month ), ID( :Year ) );
Wait( 1 );
obj << Plot Standard Deviation Function( 0 );

```

### Save Data

**语法:** obj &lt;&lt; Save Data

**说明:** 将处理的数据以堆叠格式保存至单独的数据表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) )
);
obj << Save Data;

```

### Unconstrained MCR

**语法:** obj &lt;&lt; Unconstrained MCR

**说明:** 执行无约束多元曲线分辨率 (MCR)。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 18

### Wavelets

**语法:** obj &lt;&lt; Wavelets

**说明:** 对数据拟合若干小波模型。该选项要求输入数据位于均匀间距的网格中。若数据不是均匀间距，则在小波例程开始之前会自动创建一个网格。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ), Wavelets );

```

## Functional Data Explorer Data Processing

### 项消息

#### Align 0 to 1

**语法:** obj &lt;&lt; Data Processing( Align 0 to 1 )

**说明:** 将输出函数 (Y) 在整个输入 (X) 的范围内对齐在 0 到 1 处。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align 0 to 1 )
);

```

#### Align Maximum

**语法:** obj &lt;&lt; Data Processing( Align Maximum )

**说明:** 使用观测到的最大输入值 (X) 对齐输出函数 (Y)。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Maximum )
);

```

#### Align Minimum

**语法:** obj &lt;&lt; Data Processing( Align Minimum )

**说明:** 使用观测到的最小输入值 (X) 对齐输出函数 (Y)。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align Minimum )
);

```

#### Align by Function

**语法:** obj &lt;&lt; Data Processing( Align by Function )

**说明:** 对齐输出函数 (Y) 以便每个函数的范围超过输入 (X) 的范围。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Align by Function )
);

```

#### Baseline Correction

**语法:** obj &lt;&lt; Data Processing( Baseline Correction( Model( Linear|Quadratic|Cubic|Fit Exponential 2P|Fit Exponential 3P ), Correction Region( ), Baseline Regions( vector ), Anchor Points( vector ) ) )

**说明:** 从每个函数拟合和删除基线模型。您可以指定基线模型、校正区域、基线区域和锚点。

**JMP添加的版本:** 17

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction )
);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Baseline Correction( Model( Quadratic ) ) )
);

```

#### Center

**语法:** obj &lt;&lt; Data Processing( Center )

**说明:** 中心化输出。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Center )
);

```

#### Dynamic Time Warping

**语法:** obj &lt;&lt; Data Processing( Dynamic Time Warping( Reference( number ) ) )

**说明:** 使用动态时间规整 (DTW) 对齐输出函数。DTW 是一种函数对齐方法，该方法查找最优规整，将两个或更多函数对齐在一起。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Dynamic Time Warping( Reference( 1 ) ) )
);

```

#### Exp

**语法:** obj &lt;&lt; Data Processing( Exp )

**说明:** 通过计算输出的指数函数以变换数据。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Exp )
);

```

#### Filter X

**语法:** obj &lt;&lt; Data Processing( Filter X( [lower, upper] ) )

**说明:** 删除指定区间之外的输入 (X) 值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter X( [5, 50] ) );

```

#### Filter Y

**语法:** obj &lt;&lt; Data Processing( Filter Y( [lower, upper] ) )

**说明:** 删除指定区间外的输出 (Y) 值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Filter Y( [., 100] ) );

```

#### Load Targets

**语法:** obj &lt;&lt; Data Processing( Load Targets( "level" ) )

**说明:** 指定目标函数。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :ID ),
	Data Processing( Load Targets( "Bristol, TN" ) )
);

```

#### Log

**语法:** obj &lt;&lt; Data Processing( Log )

**说明:** 通过计算输出的自然对数以变换数据。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log )
);

```

#### Log X

**语法:** obj &lt;&lt; Data Processing( Log X )

**说明:** 通过计算输入的自然对数以变换数据。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Air ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Log X )
);

```

#### Logit

**语法:** obj &lt;&lt; Data Processing( Logit )

**说明:** 通过计算输出的 Logit 函数以变换数据。输出值必须介于 0 和 1 之间。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 ),
	Data Processing( Logit )
);

```

#### MSC

**语法:** obj &lt;&lt; Data Processing( MSC )

**说明:** 对数据应用“多元散射校正”方法。该方法为每个单个函数（ID 变量的水平）拟合简单线性回归，其中响应是函数的输出值，回归变量是均值函数的输出值。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( MSC )
);

```

#### Negation

**语法:** obj &lt;&lt; Data Processing( Negation )

**说明:** 通过对输出求反以变换数据。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Negation )
);

```

#### Range 0 to 1

**语法:** obj &lt;&lt; Data Processing( Range 0 to 1 )

**说明:** 调节输出尺度使其落在 0 至 1 的范围内。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Range 0 to 1 )
);

```

#### Reduce

**语法:** obj &lt;&lt; Data Processing( Reduce( Grid( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Bin( number ) ) ); obj &lt;&lt; Data Processing( Reduce( Thin( number ) ) )

**说明:** 使用各种方法中的一种减少输入 (X) 上的数据。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Data Processing( Reduce( Thin( 2 ) ) );

```

#### Remove Selected

**语法:** obj &lt;&lt; Data Processing( Remove Selected )

**说明:** 删除选定值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION == "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Selected );

```

#### Remove Unselected

**语法:** obj &lt;&lt; Data Processing( Remove Unselected )

**说明:** 删除未选定值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
dt << Select Where( :STATION != "USW00024024" );
Wait( 1 );
obj << Data Processing( Remove Unselected );

```

#### Remove Value

**语法:** obj &lt;&lt; Data Processing( Remove Value( number ) )

**说明:** 删除具有指定响应值的观测。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
Wait( 1 );
obj << Data Processing( Remove Value( 30 ) );

```

#### Remove Zeros

**语法:** obj &lt;&lt; Data Processing( Remove Zeros )

**说明:** 删除响应值为 0 的观测。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Ethanol ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Remove Zeros )
);

```

#### Row Alignment

**语法:** obj &lt;&lt; Data Processing( Row Alignment )

**说明:** 使用行号替换输入值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Row Alignment )
);

```

#### SNV

**语法:** obj &lt;&lt; Data Processing( SNV )

**说明:** 对数据应用“标准正态变量”方法。该方法通过将每个单独的函数（ID 变量的水平）中心化和统一尺度使其均值为 0 标准差为 1 来标准化输出。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( SNV )
);

```

#### Savitzky-Golay Filter

**语法:** obj &lt;&lt; Data Processing( "Savitzky-Golay Filter"n )

**说明:** 对每个函数应用 Savitzky-Golay 滤波器。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Filter"n )
);

```

#### Savitzky-Golay First Derivative

**语法:** obj &lt;&lt; Data Processing( "Savitzky-Golay First Derivative"n )

**说明:** 返回 Savitzky-Golay 滤波器的一阶导数。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay First Derivative"n )
);

```

#### Savitzky-Golay Second Derivative

**语法:** obj &lt;&lt; Data Processing( "Savitzky-Golay Second Derivative"n )

**说明:** 返回 Savitzky-Golay 滤波器的二阶导数。该选项要求输入数据位于均匀间距的网格中。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Data Processing( "Savitzky-Golay Second Derivative"n )
);

```

#### Square

**语法:** obj &lt;&lt; Data Processing( Square )

**说明:** 通过计算输出的平方以变换数据。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square )
);

```

#### Square Root

**语法:** obj &lt;&lt; Data Processing( Square Root )

**说明:** 通过计算输出的平方根以变换数据。输出值必须非负。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	Data Processing( Square Root )
);

```

#### Standardize

**语法:** obj &lt;&lt; Data Processing( Standardize )

**说明:** 通过中心化和统一尺度标准化输出。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Data Processing( Standardize )
);

```

## Functional Data Explorer FDOE

### 项消息

#### Diagnostic Plots

**语法:** obj&lt;&lt; Model Name( Functional DOE Analysis( Diagnostic Plots( state=0|1 ) ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**说明:** 在“函数实验设计分析”报表中显示或隐藏预测值-实际值图和残差图。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis, Diagnostic Plots( 0 ) )
);
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( FDOE Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FDOE Profiler( state=0|1 )

**说明:** 显示或隐藏“FDOE 刻画器”，它支持您探索响应如何根据补充变量的值变化。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( FDOE Profiler( 0 ) ) )
);
Report( obj )["Functional PCA"] << Close( 1 );
Report( obj )["Model Selection"] << Close( 1 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression FPC Model

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( Generalized Regression FPC Model( FPC Number( number ), commands )))

**说明:** 指定使用“函数实验设计分析”选项创建的广义回归模型的设置。使用该命令可指定不同于默认设置的设置。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines(
		Functional DOE Analysis(
			Generalized Regression FPC Model(
				FPC Number( 1 ),
				Estimation Method( "Best Subset" ),
				Validation Method( "BIC" )
			),
			Generalized Regression FPC Model(
				FPC Number( 2 ),
				Estimation Method( "Elastic Net" ),
				Validation Method( "AICc" )
			)
		),
		Customize Function Summaries( Number of FPCs( 2 ) )
	)
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );

```

#### Generalized Regression for FPC Scores

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( Generalized Regression for FPC Scores( state=0|1 ) ) ); scrobj &lt;&lt; Generalized Regression for FPC Scores( state=0|1 )

**说明:** 显示或隐藏每个 FPC 得分的“广义回归”报表。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
Report( obj )["Generalized Regression for FPC Scores"] << Close( 0 );
Wait( 2 );
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Generalized Regression for FPC Scores( 0 );

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Prediction Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); scrobj &lt;&lt; Save Prediction Formula

**说明:** 在当前数据表的新列中保存预测公式。若原始数据格式为“行作为函数”或“列作为函数”，该选项会创建一个新数据表，它包含堆叠格式的原始数据和一个“预测公式”列。

**JMP添加的版本:** 16

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Residual Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); scrobj &lt;&lt; Save Residual Formula

**说明:** 在当前数据表的新列中保存残差公式。若原始数据格式为“行作为函数”或“列作为函数”，该选项会创建一个新数据表，它包含堆叠格式的原始数据和一个“残差公式”列。

**JMP添加的版本:** 16

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

## Functional Data Explorer FPCA

### 项消息

#### Customize Number of FPCs

**语法:** obj &lt;&lt; Model Name( Functional PCA( 1, Customize Number of FPCs( number ) ) ); scrobj &lt;&lt; Customize Number of FPCs( number )

**说明:** 指定要在“函数 PCA”中显示的 FPC 得分数。指定 FPC 得分数也会更新“函数汇总”报表。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Customize Number of FPCs( 3 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Customize Number of FPCs( 2 );

```

#### Diagnostic Plots

**语法:** obj &lt;&lt; Model Name( Functional PCA( 1, Diagnostic Plots( state=0|1 ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**说明:** 在“函数 PCA”报表中显示或“隐藏 FPCA 诊断图”。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Diagnostic Plots( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FPCA Diagnostic Plots"] << Close( 0 );

```

#### FPC Profiler

**语法:** obj &lt;&lt; Model Name( Functional PCA( 1, FPC Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FPC Profiler( state=0|1 )

**说明:** 显示或隐藏 FPC 得分的刻画器。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, FPC Profiler( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << FPC Profiler( 1 );

```

#### Score Plot

**语法:** obj &lt;&lt; Model Name( Functional PCA( 1, Score Plot( state=0|1 ) ) ); scrobj &lt;&lt; Score Plot( state=0|1 )

**说明:** 显示或隐藏 FPC 得分图。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Functional PCA( 1, Score Plot( 0 ) ) ),
	Send to Report(
		Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
			{Close( 1 )}
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Functional PCA"] << get scriptable object);
scrobj << Score Plot( 1 );

```

## Functional Data Explorer Model

### 项消息

#### AICc

**语法:** obj &lt;&lt; Model Name( AICc ); scrobj &lt;&lt; AICc

**说明:** 将 AICc 指定为 B 样条、P 样条和傅里叶基函数模型的模型选择准则。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( AICc )
);

```

#### BIC

**语法:** obj &lt;&lt; Model Name( BIC ); scrobj &lt;&lt; BIC

**说明:** 将 BIC 指定为 B 样条、P 样条和傅里叶基函数模型的模型选择准则。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	P Splines( BIC )
);

```

#### Basis Function Coefficients

**语法:** obj &lt;&lt; Model Name( Basis Function Coefficients( state=0|1 ) ); scrobj &lt;&lt; Basis Function Coefficients( state=0|1 )

**说明:** 显示或隐藏相应模型拟合的“基函数系数”报表。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Basis Function Coefficients( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Basis Function Coefficients( 1 );
Report( obj )["Basis Function Coefficients"] << Close( 0 );

```

#### Diagnostic Plots

**语法:** obj &lt;&lt; Model Name( Diagnostic Plots( state=0|1 ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**说明:** 显示或隐藏“诊断图”报表。该选项不可用于“小波”或“直接函数 PCA”模型。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );
obj = dt << Functional Data Explorer(
	Y( :pH ),
	X( :Time ),
	ID( :BatchID ),
	B Splines( Diagnostic Plots( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["B-Spline on Initial data"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["B-Spline Diagnostic Plots"] << Close( 0 );

```

#### Function Summaries

**语法:** obj &lt;&lt; Model Name( Function Summaries( state=0|1 ) ); scrobj &lt;&lt; Function Summaries( state=0|1 )

**说明:** 显示或隐藏“函数汇总”报表。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Function Summaries( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Function Summaries( 1 );
Report( obj )["Function Summaries"] << Close( 0 );

```

#### Functional DOE Analysis

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( ... ) ); scrobj &lt;&lt; Functional DOE Analysis( ... )

**说明:** 在 FDE 平台中启动“广义回归”报表。将补充变量用作模型效应，对每个 FPC 得分函数拟合广义回归模型。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Formulation for Homogeneity DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :Homogeneity Grade ),
	X( :T ),
	ID( :Formulation ),
	Z( :Solvent, :Active, :Water ),
	P Splines( Functional DOE Analysis )
);

```

#### Functional PCA

**语法:** obj &lt;&lt; Model Name( Functional PCA( state= 0|1 ) ); scrobj &lt;&lt; Functional PCA( state=0|1 )

**说明:** 显示或隐藏“函数 PCA”报表。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer( Y( :TMAX ), X( :Week of Year ), ID( :NAME ) );
obj << Fourier Basis( Functional PCA( 0 ) );
obj << Send to Report(
	Dispatch( {"Fourier Basis on Initial data"}, "Model Selection", OutlineBox,
		{Close( 1 )}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Fourier Basis on Initial data"] << get scriptable object);
scrobj << Functional PCA( 1 );

```

#### GCV

**语法:** obj &lt;&lt; Model Name( GCV ); scrobj &lt;&lt; GCV

**说明:** 将广义交叉验证 (GCV) 指定为 B 样条、P 样条和傅里叶基函数模型的模型选择准则。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( GCV )
);

```

#### Plot Basis

**语法:** obj &lt;&lt; Model Name( Plot Basis( state=0|1 ) ); scrobj &lt;&lt; Plot Basis( state=0|1 )

**说明:** 显示或隐藏一个图，所有基函数都显示在一个图形上。该选项不可用于“小波”或“直接函数 PCA”模型。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Plot Basis( 1 ) )
);

```

#### Random Coefficients

**语法:** obj &lt;&lt; Model Name( Random Coefficients( state=0|1 ) ); scrobj &lt;&lt; Random Coefficients( state=0|1 )

**说明:** 显示或隐藏“按函数划分的随机系数”报表。该报表包含每个基函数和函数过程组合的估计随机系数表。该选项不可用于“小波”或“直接函数 PCA”模型。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis( Random Coefficients( 1 ) )
);
Report( obj )["Random Coefficients by Function"] << Close( 0 );

```

#### Remove Fit

**语法:** obj &lt;&lt; (Model["B Splines" | "P Splines" | "Fourier Basis" | "Wavelets" | "Direct Functional PCA"] &lt;&lt; Remove Fit)

**说明:** 从报表中删除指定的拟合。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Fourier Basis,
	B Splines
);
Wait( 2 );
obj << (Model["Fourier Basis"] << Remove Fit);

```

#### Save Data

**语法:** obj &lt;&lt; Model Name( Save Data ); scrobj &lt;&lt; Save Data

**说明:** 将处理后的数据保存至新数据表。处理后的数据以堆叠数据格式保存。

**JMP添加的版本:** 14

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Fermentation Process Row Functions.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( dt << Get Column Group( "Ethanol" ) ),
	B Splines( Save Data )
);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets
);
scrobj = (Report( obj )["Wavelets on Initial data"] << get scriptable object);
scrobj << Save Data;

```

#### Save Script Options

**语法:** obj &lt;&lt; Save Script Options( "Save Script Saves Steps"|"Save Script Saves State"="Save Script Saves Steps" )

**说明:** Specifies the type of script that is saved for reproducing the peak finding results. 默认为“Save Script Saves Steps”。

#### Wavelets DOE Analysis

**语法:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( state=0|1 ) ); scrobj &lt;&lt; Wavelets DOE Analysis( state=0|1 )

**说明:** 在 FDE 平台中启动“广义回归”报表。将补充变量用作模型效应，对小波系数拟合广义回归模型。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1 ) )
);

```

## Functional Data Explorer Peak Summaries

### 项消息

#### Customize Peak Summaries

**语法:** obj &lt;&lt; Peak Finding( Customize Peak Summaries(stat1(0|1), ..., statN(0|1)) )

**说明:** 定制“函数汇总”报表中显示的汇总统计量。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Customize Peak Summaries() )
);

```

#### Save Summaries

**语法:** obj &lt;&lt; Peak Finding( Save Summaries )

**说明:** 保存每个函数的模型汇总统计量，包括函数主成分得分。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	Peak Finding( Save Summaries )
);

```

## Functional Data Explorer Summaries

### 项消息

#### Control Chart Builder

**语法:** obj &lt;&lt; B Splines( Control Chart Builder )obj &lt;&lt; P Splines( Control Chart Builder )obj &lt;&lt; Fourier Basis( Control Chart Builder )

**说明:** 使用“控制图生成器”分析函数主成分。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Control Chart Builder )
);

```

#### Customize Function Summaries

**语法:** obj &lt;&lt; B Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )obj &lt;&lt; P Splines( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )obj &lt;&lt; Fourier Basis( Customize Function Summaries(stat1(0|1), ..., statN(0|1)) )

**说明:** 定制“函数汇总”报表中显示的汇总统计量。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines(
		Customize Function Summaries(
			Number of FPCs( 2 ),
			Mean( 0 ),
			Std Dev( 1 ),
			Integrated Difference( 0 ),
			Median( 1 ),
			Minimum( 1 ),
			Maximum( 1 )
		)
	)
);

```

#### Save Summaries

**语法:** obj &lt;&lt; B Splines( Save Summaries )obj &lt;&lt; P Splines( Save Summaries )obj &lt;&lt; Fourier Basis( Save Summaries )

**说明:** 保存每个函数的模型汇总统计量，包括函数主成分得分。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Weekly Weather Data.jmp" );
obj = dt << Functional Data Explorer(
	Y( :TMAX ),
	X( :Week of Year ),
	ID( :NAME ),
	B Splines( Save Summaries )
);

```

## Functional Data Explorer WDOE

### 项消息

#### Diagnostic Plots

**语法:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Diagnostic Plots( state=0|1 ) ) ); scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**说明:** 在“小波实验设计分析”报表中显示或隐藏预测值-实际值图和残差图。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, Diagnostic Plots( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Diagnostic Plots( 1 );
Report( obj )["FDOE Diagnostic Plots"] << Close( 0 );

```

#### FDOE Profiler

**语法:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, FDOE Profiler( state=0|1 ) ) ); scrobj &lt;&lt; FDOE Profiler( state=0|1 )

**说明:** 显示或隐藏“FDOE 刻画器”，它支持您探索响应如何根据补充变量的值变化。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Functional PCA( 0 ), Wavelets DOE Analysis( 1, FDOE Profiler( 0 ) ) )
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << FDOE Profiler( 1 );

```

#### Generalized Regression for Wavelets Coefficients

**语法:** obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( state=0|1 ) ) ); scrobj &lt;&lt; Generalized Regression for Wavelets Coefficients( state=0|1 )

**说明:** 显示或隐藏每个小波系数的“广义回归”报表。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets(
		Functional PCA( 0 ),
		Wavelets DOE Analysis( 1, Generalized Regression for Wavelets Coefficients( 0 ) )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Wavelets DOE Analysis"] << get scriptable object);
scrobj << Generalized Regression for Wavelets Coefficients( 1 );
Report( obj )["Generalized Regression for Wavelets Coefficients"] << Close( 0 );

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Prediction Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) ); scrobj &lt;&lt; Save Prediction Formula

**说明:** 在当前数据表的新列中保存预测公式。若原始数据格式为“行作为函数”或“列作为函数”，该选项会创建一个新数据表，它包含堆叠格式的原始数据和一个“预测公式”列。

**JMP添加的版本:** 16

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Prediction Formula ) )
);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Prediction Formula ) )
);

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1 ) )
);
scrobj = Report( obj )["Wavelets DOE Analysis"] << get scriptable object;
scrobj << Save Prediction Formula;

```

#### Save Residual Formula

**语法:** obj &lt;&lt; Model Name( Functional DOE Analysis( Save Residual Formula ) ); obj &lt;&lt; Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) ); scrobj &lt;&lt; Save Residual Formula

**说明:** 在当前数据表的新列中保存残差公式。若原始数据格式为“行作为函数”或“列作为函数”，该选项会创建一个新数据表，它包含堆叠格式的原始数据和一个“残差公式”列。

**JMP添加的版本:** 16

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis( Save Residual Formula ) )
);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/NMR DoE.jmp" );
obj = dt << Functional Data Explorer(
	Data Format( Row ),
	Y( Column Group( "NMR Spectra" ) ),
	ID( :NMR ID ),
	Z( :Propanol, :Butanol, :Pentanol ),
	Wavelets( Wavelets DOE Analysis( 1, Save Residual Formula ) )
);

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );
obj = dt << Functional Data Explorer(
	Y( :"Size/nm"n ),
	X( :Time ),
	ID( :Batch ),
	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),
	B Splines( Functional DOE Analysis )
);
scrobj = Report( obj )["Functional DOE Analysis"] << get scriptable object;
scrobj << Save Residual Formula;

```

