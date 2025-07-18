# Nonlinear



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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

#### 示例 1

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### 示例 2

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );
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

**语法:** obj = Nonlinear(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

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

### Nonlinear

**语法:** Nonlinear( Y( column ), X( column with predictor formula ) )

**说明:** 使用最小二乘或定制损失函数拟合非线性模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

## 列

### By

**语法:** obj = Nonlinear(...&lt;By( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), By( _bycol ) );

```

### Freq

**语法:** obj = Nonlinear(...&lt;Freq( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Freq( _freqcol ) );

```

### Group

**语法:** obj = Nonlinear(...&lt;Group( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定分组变量。拟合模型对分组变量的每个水平都有单独的参数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );
dt << Run Script( "Fit Curve" );					 

obj = dt << Nonlinear(
	Y( :Toxicity ),
	X( :Toxicity Predictor Formula ),
	Group( :Formulation ),
	Newton,
	Finish
);

```

### Loss

**语法:** obj = Nonlinear(...&lt;Loss( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含损失函数的公式列。

```jsl

dt = Open( "$SAMPLE_DATA/Ship Damage.jmp" );
obj = dt << Nonlinear(
	X( :model ),
	Loss( :Poisson ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);

```

### Predictor Formula

**语法:** obj = Nonlinear(...&lt;Predictor Formula( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含 X 变量或带参数的模型公式的列。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Response

**语法:** obj = Nonlinear(...&lt;Response( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Weight

**语法:** obj = Nonlinear(...&lt;Weight( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish(), Weight( _weightcol ) );

```

### X

**语法:** obj = Nonlinear(...&lt;X( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含 X 变量或带参数的模型公式的列。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

### Y

**语法:** obj = Nonlinear(...&lt;Y( column )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish() );

```

## 项消息

### Accept Current Estimates

**语法:** obj &lt;&lt; Accept Current Estimates

**说明:** 使用当前估计值生成解报表，即使估计值不收敛。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Parameter Bounds( B0( 15, . ) ) );
obj << Finish;
obj << Accept Current Estimates;

```

### CL Alpha

**语法:** obj &lt;&lt; CL Alpha( number=.05 )

**说明:** 指定参数估计置信限的 alpha 水平。 默认为“.05”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Alpha( .01 );
obj << Confidence Limits;

```

### CL Limit

**语法:** obj &lt;&lt; CL Limit( number=.00001 )

**说明:** 指定用于计算参数估计值置信限的收敛准则。 默认为“.00001”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << CL Limit( .002 );
obj << Confidence Limits;

```

### Confidence Limits

**语法:** obj &lt;&lt; Confidence Limits

**说明:** 计算所有参数估计值的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;

```

### Contour Profiler

**语法:** obj &lt;&lt; Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Contour Profiler( 1 );

```

### Custom Estimate

**语法:** obj &lt;&lt; Custom Estimate( expression )

**说明:** 估计用户指定的参数函数。使用当前参数估计值计算表达式和表达式的标准误差。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Custom Estimate( B0 + A + D );

```

### Custom Estimation Profiler

**语法:** obj &lt;&lt; Custom Estimation Profiler( Custom Estimation( {initial values}, expression ), &lt;Transformation( "Log"|"Logit"|"None" ), Profiler( script )&gt; )

**说明:** 允许您为定制表达式构造刻画器。输入涉及参数和至少一个因子的表达式。默认情况下，“变换”选项设置为“无”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logistic w Loss.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Expand Intermediate Formulas( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish,
	Plot( 0 ),
	Custom Estimation Profiler(
		Custom Estimation( {x = 30}, 1 / (1 + Exp( b0 + b1 * x )) ),
		Transformation( "Logit" ),
		Profiler(
			1,
			Confidence Intervals( 1 ),
			Term Value(
				x(
					140,
					Min( -37.4344314814814 ),
					Max( 392.622262689059 ),
					Lock( 0 ),
					Show( 1 )
				)
			)
		)
	)
);

```

### Custom Inverse Prediction

**语法:** obj &lt;&lt; Custom Inverse Prediction( Response( l1, l2, ... ), &lt;Term Value( column( number ) )&gt; )

**说明:** 估计每个指定响应值的 X 值。还计算估计的 X 值的标准误差和置信限。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 0 );
obj << Custom Inverse Prediction( Response( 100, 150, 200 ) );

```

### Delta

**语法:** obj &lt;&lt; Delta( number=5.0e-6 )

**说明:** 指定“仅限于数值导数”选项中使用的 delta 值。 默认为“5.0e-6”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Delta( 0.2 );
obj << Finish;

```

### Expand Intermediate Formulas

**语法:** obj &lt;&lt; Expand Intermediate Formulas( state=0|1 )

**说明:** 在求解和保存的公式中使用展开的中间公式。这样会在模型依赖于带公式的列时影响输出中的公式，因为它将查找到原始列。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Finish

**语法:** obj &lt;&lt; Finish

**说明:** 开始拟合过程，仅当解收敛或完成时才移至下一个命令。在脚本中，推荐使用“完成”选项而不是“执行”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Finish;
obj << Profiler;

```

### Get CI

**语法:** obj &lt;&lt; Get CI

**说明:** 返回参数估计值的置信区间。注意: 必须在指定“获取置信区间”选项之前选择“置信区间”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Confidence Limits;
G = obj << Get CI;
Show( G );

```

### Get Corr

**语法:** obj &lt;&lt; Get Corr

**说明:** 返回估计值的相关性。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Corr;
Show( G );

```

### Get Cov

**语法:** obj &lt;&lt; Get Cov

**说明:** 返回估计值的协方差。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Cov;
Show( G );

```

### Get Estimates

**语法:** obj &lt;&lt; Get Estimates

**说明:** 返回参数估计值。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Estimates;
Show( G );

```

### Get Parameter Names

**语法:** obj &lt;&lt; Get Parameter Names

**说明:** 返回参数名称。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Parameter Names;
Show( G );

```

### Get SSE

**语法:** obj &lt;&lt; Get SSE

**说明:** 返回误差平方和 (SSE)。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get SSE;
Show( G );

```

### Get Std Errors

**语法:** obj &lt;&lt; Get Std Errors

**说明:** 返回参数估计值的标准误差。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
G = obj << Get Std Errors;
Show( G );

```

### Go

**语法:** obj &lt;&lt; Go

**说明:** 开始在后台迭代以求得非线性解。在脚本中，推荐使用“完成”选项而不是“执行”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;

```

### Gradient Limit

**语法:** obj &lt;&lt; Gradient Limit( number=1e-6 )

**说明:** 指定梯度准则的停止限值。 默认为“1e-6”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Gradient Limit( 0.0002 );
obj << Finish;

```

### Iteration Limit

**语法:** obj &lt;&lt; Iteration Limit( number=60 )

**说明:** 指定最大迭代次数。 默认为“60”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Iteration Limit( 10 );
obj << Finish;

```

### Iteration Log

**语法:** obj &lt;&lt; Iteration Log( state=0|1 )

**说明:** 显示或隐藏“迭代”表。一旦选择该选项，平台会在表中记录后续的迭代。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Iteration Log( 1 );
obj << Finish;
obj << Plot( 0 );
Report( obj )["Iterations"] << Close( 0 );

```

### Lock Parameter

**语法:** obj &lt;&lt; Lock Parameter( Name, ... )

**说明:** 将各个参数锁定为特定值，以便它们在迭代过程中保持不变。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0 );
obj << Finish;

```

### Loss is Neg LogLikelihood

**语法:** obj &lt;&lt; Loss is Neg LogLikelihood( state=0|1 )

**说明:** 假定指定的损失公式的总和是负对数似然，并在分析中使用卡方统计量而不是 F 统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 )
);
obj << Loss is Neg LogLikelihood( 0 );
obj << Finish;

```

### Newton

**语法:** obj &lt;&lt; Newton

**说明:** 指定 Gauss-Newton（针对常规最小二乘）或 Newton-Raphson（针对包含损失函数的模型）作为优化方法。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Newton;
obj << Finish;

```

### Numeric Chain Deriv Delta

**语法:** obj &lt;&lt; Numeric Chain Deriv Delta( =1e-5 )

**说明:** 指定在近似没有内置导数的非线性公式的导数时使用的 delta 参数。 默认为“1e-5”。

**JMP添加的版本:** 14

### Numeric Derivatives Only

**语法:** obj &lt;&lt; Numeric Derivatives Only( state=0|1 )

**说明:** 指定拟合方法中仅使用数值导数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Numeric Derivatives Only( 1 );
obj << Finish;

```

### Obj Change Limit

**语法:** obj &lt;&lt; Obj Change Limit( number=1e-15 )

**说明:** 指定目标更改准则的停止限值。 默认为“1e-15”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Obj Change Limit( 1e-10 );
obj << Finish;

```

### Parameter Bounds

**语法:** obj &lt;&lt; Parameter Bounds( &lt;parameter name( lower, upper )&gt; )

**说明:** 设置指定参数的界限。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Parameter Bounds( B0( 0, . ) );
obj << Finish;

```

### Parameter Contour Profiler

**语法:** obj &lt;&lt; Parameter Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它将 SSE 或损失刻画为参数的函数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Contour Profiler( 1 );

```

### Parameter Profiler

**语法:** obj &lt;&lt; Parameter Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它将 SSE 或损失刻画为参数的函数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Profiler( 1 );

```

### Parameter Surface Profiler

**语法:** obj &lt;&lt; Parameter Surface Profiler( state=0|1 )

**说明:** 显示或隐藏三维曲面图，它将 SSE 或损失刻画为参数的函数。该选项仅可用于包含两个或更多参数的模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Parameter Surface Profiler( 1 );

```

### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏一个图形，它将预测公式绘制为恰好另一个变量的函数。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
Wait( 1 );
obj << Plot( 0 );
obj << Finish;

```

### Profile Likelihood

**语法:** obj &lt;&lt; Profile Likelihood( state=0|1 )

**说明:** 显示或隐藏相对似然函数的图，尺度化为在单个参数的值之间具有最大值 1，而其他参数优化为使损失函数最小。该选项仅在“非线性”平台启动时损失函数包含两个或更多参数时可用。

```jsl

dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Unconstrained Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0},
			If(
				Censor == 0, -Log( Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1,
					-Log( 1 - Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) ) )
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Unconstrained Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood( 1 );

```

### Profile Likelihood Contour

**语法:** obj &lt;&lt; Profile Likelihood Contour( state=0|1 )

**说明:** 显示或隐藏两个参数之间的相对似然函数的似然置信等高线，而所有其他参数优化为使损失函数最小。该选项仅在“非线性”平台启动时损失函数包含三个或更多参数时可用。

```jsl

dt = Open( "$Sample_Data/Reliability/Fan.jmp" );
dt << New Column( "Partial Unconstrained DS Weibull Loss",
	formula(
		Parameter(
			{mu = 10, logSigma = 0, p = 0.5},
			If(
				p < 0 | p > 1, .,
				Censor == 0,
					-Log( p * Weibull Density( Time, 1 / Exp( logSigma ), Exp( mu ) ) ),
				Censor == 1,
					-Log(
						1 - p * Weibull Distribution( Time, 1 / Exp( logSigma ), Exp( mu ) )
					)
			)
		)
	)
);
obj = dt << Nonlinear(
	Loss( :Partial Unconstrained DS Weibull Loss ),
	Numeric Derivatives Only( 1 ),
	Loss is Neg LogLikelihood( 1 ),
	Newton,
	Finish
);
Wait( 0 );
obj << Profile Likelihood Contour( 1 );

```

### Profiler

**语法:** obj &lt;&lt; Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Profiler( 1 );

```

### QuasiNewton BFGS

**语法:** obj &lt;&lt; QuasiNewton BFGS

**说明:** 指定“BFGS 拟牛顿算法”作为优化方法。该方法最适合于大量参数的情况。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton BFGS;
obj << Finish;

```

### QuasiNewton SR1

**语法:** obj &lt;&lt; QuasiNewton SR1

**说明:** 指定“SR1 拟牛顿算法”作为优化方法。该方法避免了在每次迭代时重新计算导数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << QuasiNewton SR1;
obj << Finish;

```

### Relative Gradient

**语法:** obj &lt;&lt; Relative Gradient( number=1e-6 )

**说明:** 指定相对梯度准则的停止限值。 默认为“1e-6”。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Relative Gradient( 0.0001 );
obj << Finish;

```

### Remember Solution

**语法:** obj &lt;&lt; Remember Solution( name )

**说明:** 创建称为“记住的模型”的报表，它包含当前参数估计值和汇总统计量。可以记住并比较多个模型的结果。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << Remember Solution( "New Model" );

```

### Reset

**语法:** obj &lt;&lt; Reset

**说明:** 求解之后重置收敛准则。尝试使用不同的起始值重新拟合模型时，该选项很有用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Finish;
Wait( 2 );
obj << Reset;

```

### Revert To Original Parameters

**语法:** obj &lt;&lt; Revert To Original Parameters

**说明:** 在“控制面板”中将参数的当前值重置为原始值。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 1 );
obj << Revert to Original Parameters;

```

### SSE Grid

**语法:** obj &lt;&lt; SSE Grid

**说明:** 创建解估计值附近的值网格，并计算每个值的误差平方和。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
obj << SSE Grid;

```

### Save Estimates

**语法:** obj &lt;&lt; Save Estimates

**说明:** 将当前参数估计值保存到公式列中的参数值。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
Wait( 1 );
obj << Save Estimates;

```

### Save Estimates To Table

**语法:** obj &lt;&lt; Save Estimates To Table

**说明:** 创建包含参数估计值的新数据表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Estimates To Table;

```

### Save Indiv Confid Limit Formula

**语法:** obj &lt;&lt; Save Indiv Confid Limit Formula

**说明:** 将新公式列保存至数据表。新列包含用于计算单值预测的置信区间的公式。这是给定 X 值的单个响应值的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limit Formula;

```

### Save Indiv Confid Limits

**语法:** obj &lt;&lt; Save Indiv Confid Limits

**说明:** 将新列保存至数据表。新列包含单值预测的渐近置信限。这是给定 X 值下单个响应值的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Indiv Confid Limits;

```

### Save Inverse Prediction Formula

**语法:** obj &lt;&lt; Save Inverse Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含模型的逆预测公式、逆预测的标准误差和单个逆预测的标准误差。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Inverse Prediction Formula;

```

### Save Pred Confid Limit Formula

**语法:** obj &lt;&lt; Save Pred Confid Limit Formula

**说明:** 将新公式列保存至数据表。新列包含用于计算模型预测的置信区间的公式。这是给定 X 值下平均响应值的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limit Formula;

```

### Save Pred Confid Limits

**语法:** obj &lt;&lt; Save Pred Confid Limits

**说明:** 将新列保存至数据表。新列包含模型预测的渐近置信限。这是给定 X 值下平均响应值的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Pred Confid Limits;

```

### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含使用当前参数估计值的预测公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Prediction Formula;

```

### Save Residual Formula

**语法:** obj &lt;&lt; Save Residual Formula

**说明:** 将新公式列保存至数据表。新列包含计算残差的公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Residual Formula;

```

### Save Specific Solving Formula

**语法:** obj &lt;&lt; Save Specific Solving Formula( &lt;column to solve for, {name1=expr1, ...}, Save Formula for Std Error Mean, Save Formula for Std Error Individual&gt; )

**说明:** 将新公式列保存至数据表。新列包含在给定响应变量和数据中的其他 X 值或常数的情况下，计算 X 变量的预测和标准误差的公式。

#### 示例 1

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula;

```

#### 示例 2

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :year, {:pop = 200}, Save Formula for Std Error Mean );

```

#### 示例 3

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Specific Solving Formula( :pop, Save Formula for Std Error Individual );

```

### Save Std Error of Individual

**语法:** obj &lt;&lt; Save Std Error of Individual

**说明:** 将新公式列保存至数据表。新列包含单值预测的标准误差公式。这是预测给定 X 值的单个响应值时的标准误差。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Individual;

```

### Save Std Error of Predicted

**语法:** obj &lt;&lt; Save Std Error of Predicted

**说明:** 将新公式列保存至数据表。新列包含模型预测的标准误差公式。这是预测给定 X 值的平均响应值时的标准误差。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Finish );
obj << Save Std Error of Predicted;

```

### Second Deriv Method

**语法:** obj &lt;&lt; Second Deriv Method( state=0|1 )

**说明:** 指定拟合方法使用二阶导数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ), Second Deriv Method( 1 ), Finish );

```

### Set Parameter

**语法:** obj &lt;&lt; Set Parameter( name=expr, ... )

**说明:** 在拟合模型前设置一个或多个参数值。这样有助于将参数固定为一个特定值以及设置起始值。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
Wait( 2 );
obj << Finish;

```

### Show Derivatives

**语法:** obj &lt;&lt; Show Derivatives

**说明:** 在日志中显示非线性公式的导数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );
obj = dt << Nonlinear( Y( :pop ), X( :"X-formula"n ) );
obj << Show Derivatives;

```

### Show Prediction Expression

**语法:** obj &lt;&lt; Show Prediction Expression( state=0|1 )

**说明:** 在报表中显示或隐藏预测模型或损失函数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Logit Model w Loss1.jmp" );
obj = dt << Nonlinear(
	Loss( :Loss ),
	Show Prediction Expression( 1 ),
	Expand Intermediate Formulas( 1 ),
	Finish
);

```

### Step

**语法:** obj &lt;&lt; Step

**说明:** 迭代一次进行非线性模型求解。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Step;
Wait( 1 );
obj << Step;

```

### Stop

**语法:** obj &lt;&lt; Stop

**说明:** 中断非线性模型拟合过程并将它停止在当前迭代。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Go;
obj << Stop;

```

### Surface Profiler

**语法:** obj &lt;&lt; Surface Profiler( state=0|1 )

**说明:** 显示或隐藏三维曲面图。该选项仅可用于具有两个或更多 X 变量的模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ), Finish );
Wait( 0 );
obj << Surface Profiler( 1 );

```

### Unlock Parameter

**语法:** obj &lt;&lt; Unlock Parameter( Name, ... )

**说明:** 解锁指定的参数。对以前锁定的因子使用该选项，以便它们在迭代过程中可以自由更改。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Nonlinear( Y( :"log($ value)"n ), X( :Model ) );
obj << Set Parameter( B0 = 0.2 );
obj << Lock Parameter( B0, A, D );
obj << Finish;
Wait( 2 );
obj << Unlock Parameter( B0, A );
obj << Finish;

```

### Unthreaded

**语法:** obj &lt;&lt; Unthreaded( state=0|1 )

**说明:** 在主计算线程中运行迭代。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );
obj = dt << Nonlinear( Y( :Algae density ), X( :Mitscherlich ) );
obj << Unthreaded( 1 );
obj << Finish;

```

