# Tabulate



## 共享项消息

### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

#### 匿名预设

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

#### 在文件夹内搜索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### 按名称搜索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Data Table Window;

```

### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

```

### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

#### 带过滤器的平台

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

#### 常规

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));t = obj << Get Timing;Show( t );

```

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Local Data Filter

**语法:** obj &lt;&lt; Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Relaunch Analysis;

```

### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

### Remove Local Data Filter

**语法:** obj &lt;&lt; Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

### Report

**语法:** obj &lt;&lt; Report; Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Script to Script Window;

```

### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

### Sync to Data Table Changes

**语法:** obj &lt;&lt; Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

### Window View

**语法:** obj = Tabulate(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Tabulate

**语法:** Tabulate( Add Table( Column Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )), Row Table( Analysis Columns( column(s) )|Grouping Columns( column(s))|Statistics( )) )

**说明:** 创建一个或多个变量的汇总统计量的定制表。变量可以按一个或多个分类列进行分组。允许您使用拖放操作构建汇总表。

#### ID 列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### 堆叠分组列

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### 堆叠填充列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum, Max ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### 多个行列表

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender ) ),		Column Table( Grouping Columns( :race ) ),		Row Table( Grouping Columns( :goals ) ),		Row Table( Grouping Columns( :"Urban/Rural"n ) )	));

```

#### 多个行表

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Row Table( Grouping Columns( :Grades ) ),		Row Table( Grouping Columns( :Sports ) ),		Row Table( Grouping Columns( :Looks ) ),		Row Table( Grouping Columns( :Money ) )	));

```

#### 多重响应分组列

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Floss Delimited ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :Frequency of Teeth Cleaning, :Brush Delimited ) )	));

```

#### 多重响应页列

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

#### 嵌套类别

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### 按类别分类的列

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

#### 权重

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### 类别和统计量

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :gender, :goals ), Statistics( N, Column % ) ),		Row Table( Grouping Columns( :Grade, :Age ) )	));

```

#### 页列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :Engine( "Gas" ) ),	Add Table(		Column Table( Analysis Columns( :City MPG, :Hwy MPG ), Statistics( Max ) ),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### 频数

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

## 列

### Analysis Columns

**语法:** Analysis Columns( Column(s) )

**说明:** 将分析列添加至当前表。它可用于“添加表”命令或“修改表”命令。

#### 添加至新表

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### 添加至现有表

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Analysis Columns( :CO ) );

```

### By

**语法:** obj &lt;&lt; By( column(s) )

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	),	By( :type ));

```

### Columns by Categories

**语法:** Columns by Categories( column1, column2, ...) )

**说明:** 在表中添加一个交叉表，它由列名和具有相似值的列的类别组成。编写脚本时，“按类别分类的列”消息必须嵌套在“行表”消息或“列表”消息中。

#### 添加至新表

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks, :Money ) ) ));

```

#### 添加至现有表

```jsl

dt = Open( "$SAMPLE_DATA/Children's Popularity.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Columns by Categories( :Grades, :Sports, :Looks ) ) ));obj << Modify Table( Row Table( 1 ), Columns by Categories( :Money ) );

```

### Freq

**语法:** Freq( Column )

**说明:** 指定要在统计量计算中使用的频数列

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Freq( :Count ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Causes ) ) ));Wait( 1 );obj << Freq( :Count );

```

### Grouping Columns

**语法:** Grouping Columns( Column(s) )

**说明:** 将分组列添加至当前表。它可用于“添加表”命令或“修改表”命令。

#### Add nested to new

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));

```

#### 将嵌套列添加至现有列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Column Table( 1 ), Grouping Column( :age ) );

```

#### 添加至新表

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Grouping Columns( :sex ) ) ));

```

#### 添加至现有表

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Modify Table( Row Table( 1 ), Grouping Column( :age ) );

```

### ID

**语法:** ID( Column )

**说明:** 指定用于统计唯一出现次数的标识符列。

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	ID( :Division ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Uniform Format( 10, 2 ) ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name ) )	));Wait( 1 );obj << ID( :Division );

```

### Page Column

**语法:** Page Column( Column )

**说明:** 指定要用于设置报表页的页列

#### 在新表中设置页列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### 在新表中设置页列和水平

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Page Column( :sex( "F" ) ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));

```

#### 在现有表中设置页列和水平

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height, :weight ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age ) )	));Wait( 1 );obj << Page Column( :sex( "F" ) );

```

#### 多重响应页列

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = Tabulate(	Show Control Panel( 0 ),	Page Column( :family cars( "Jeep" ) ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( N, "% of Total"n ) ),		Row Table( Grouping Columns( :sex ) )	));

```

### Weight

**语法:** Weight( Column )

**说明:** 指定要在统计量计算中使用的权重列

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Weight( :Weight ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Car Physical Data.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :Horsepower ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Type ) )	));Wait( 1 );obj << Weight( :Weight );

```

## 项消息

### Add

**语法:** add(&lt;Column Table | Row Table&gt;(table index), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;))&gt;, &lt;analysis column | grouping column | statistic&gt;(operand name)),

**说明:** Se utiliza con Modificar tabla para agregar columnas y estadísticos a una tabla existente. También sirve como alias para Agregar tabla.

#### 在命名列前添加分析列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :weight ) ) ));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Analysis Columns( :weight ) ), Analysis Columns( :height ) ));

```

#### 在命名统计量后添加统计量

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( After( Statistics( Max ) ), Statistics( Range ) ));

```

#### 在第一个统计量前添加统计量

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Add( Before First, Statistics( N ) ) );

```

#### 在索引前添加统计量

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Add( Before( Statistics( 2 ) ), Statistics( Median ) ));

```

### Add Table

**语法:** Add Table( &lt;Column Table( )&gt;, &lt;Row Table( )&gt; )

**说明:** 若当前没有表，则将表添加至窗口，否则将表追加至现有表对象。

#### 添加至现有表

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );

```

#### 添加至空表

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add Table( Row Table( Grouping Columns( :age ) ) );

```

### Aggregate Statistics

**语法:** Aggregate Statistics( column )

**说明:** 为指定列的每个水平添加单独的列，同时向当前表添加求和列。编写脚本时，聚合统计量消息必须在列表消息或行表消息中。

#### 添加至新表时设置

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ), Aggregate Statistics( :Region ) )	));

```

#### 添加至现有表时设置

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ) ));obj << Modify Table(	Row Table( 1 ),	Grouping Columns( :Region ),	Aggregate Statistics( :Region ));

```

### Change Item Label

**语法:** obj &lt;&lt; Change Item Label( Statistics( stat name, new string ) )

**说明:** 更改表中文本项字段的标签。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Change Item Label( Statistics( Mean, "Average" ) );

```

### Delete

**语法:** delete( &lt;analysis columns | grouping columns | statistics&gt;(operand name, operand name, ...))

**说明:** Se utiliza con Modificar tabla para eliminar columnas y estadísticos de una tabla existente.

#### 删除命名的分析列

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

#### 删除索引处的统计量

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Statistics( 1 ) ) );

```

### Display Column Width

**语法:** obj &lt;&lt; Display Column Width( Data Column( &lt;Column Table(n)&gt;, path ), &lt;width&gt; ); obj &lt;&lt; Display Column Width( Row Label( &lt;Row Table(n)&gt;, path ), &lt;width&gt; )

**说明:** 设置或返回“制表”报表表中列的显示宽度。Path 是一系列带引号的列标题，用于跟踪列路径。Width 是以像素为单位的列宽。使用 Data Column 可定义表主体中的列或使用 Row Label 定义行标签区域中的列。若报表中有多个表，则使用 Column Table(n) 或 Row Table(n) 指定path 应用于哪个表。若未指定 width，该选项返回指定列的当前宽度。

#### 将数据列的大小调整为等宽

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Min, Max, Mean, Std Dev ) ),		Row Table( Grouping Columns( :Region ) )	));stats = {"Min", "Max", "Mean", "Std Dev"};ns = N Items( stats );a = {};For( i = 1, i <= ns, i++,	a[i] = obj << Display Column Width( Data Column( "OZONE", stats[i] ) ));amax = Max( a );For( i = 1, i <= ns, i++,	obj << Display Column Width( Data Column( "OZONE", stats[i] ), amax ));

```

#### 获取列宽

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width(	Column( Column Table( 1 ), "sex", "Female", "Marital status", "Single", "age", "Sum" ));

```

#### 设置行标签宽度

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :sex, :marital status ),			Analysis Columns( :age ),			Statistics( Sum, "% of Total" )		),		Row Table( Grouping Columns( :type ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Display Column Width( Row Label( Row Table( 2 ), "country" ), 150 );

```

### Full Path Column Name

**语法:** obj &lt;&lt; Full Path Column Name( true | false )

**说明:** 若设置，输出表的列名应包括分组列名

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Full Path Column Name( 1 );obj << Make Into Data Table;

```

### Ignore duplicate responses

**语法:** obj &lt;&lt; Ignore duplicate responses( Grouping Columns( column ), true | false )

**JMP添加的版本:** 19

#### 在新表中设置

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

#### 在现有表中设置

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicate Responses( Grouping Columns( :family cars ), 1 );

```

### Ignore duplicates in multiple response columns

**语法:** obj &lt;&lt; Ignore duplicates in multiple response columns( state=0|1 )

**说明:** 忽略多个响应列中的重复响应。每个重复的响应都被视为出现一次。

**JMP添加的版本:** 19

#### 在新表中设置

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Ignore Duplicates In Multiple Response Columns( 1 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));

```

#### 在现有表中设置

```jsl

dt = Open( "$Sample_Data/Big Class Families.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :family cars ) ),		Row Table( Grouping Columns( :sex, :age ) )	));obj << Ignore Duplicates In Multiple Response Columns( 1 );

```

### Include missing for grouping columns

**语法:** obj &lt;&lt; Include missing for grouping columns( state=0|1 )

**说明:** 在当前表中添加包含所有分组列的缺失值计数的单独列。

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Include Missing For Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Doors ) ) ));obj << Include Missing For Grouping Columns( 1 );

```

### Make Into Data Table

**语法:** obj &lt;&lt; Make Into Data Table( &lt;Invisible(bool) | Private(bool)&gt;, &lt;Output Table( table name)&gt;, &lt;Full Path Column Name(bool)&gt; )

**说明:** 根据制表中创建的表创建新的数据表。

#### 使用完全路径列名

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Full Path Column Name( 1 ) );

```

#### 制成不可见数据表

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make into Data Table( Invisible( 1 ) );

```

#### 制成数据表

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Make Into Data Table;

```

### Max scroll locked columns

**语法:** obj &lt;&lt; Max scroll locked columns( number=3 )

**说明:** 设置要滚动锁定的列的最大数量。将锁定所有行标题列或不锁定任何行标题列。 默认开启。

**JMP添加的版本:** 19

#### 限值允许标题计数

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 2 );obj << Make Into Data Table;

```

#### 限值在标题计数内

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Max Scroll Locked Columns( 1 );obj << Make Into Data Table;

```

### Missing sum is zero

**语法:** obj &lt;&lt; Missing sum is zero( state=0|1 )

**说明:** 指定总和汇总统计量的缺失值是应显示为 0 还是缺失。

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Missing Sum Is Zero( 1 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Grouping Columns( :sex ) ),		Row Table( Grouping Columns( :name ) )	));obj << Missing Sum Is Zero( 1 );

```

### Modify Table

**语法:** obj &lt;&lt; Modify Table( &lt;Column Table | Row Table&gt;(table index), ... )

**说明:** 修改现有表。

#### 删除分析列

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table( Column Table( 1 ), Delete( Analysis Columns( :Assets ) ) );

```

#### 生成并编辑完整表

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate( Show Control Panel( 0 ) );obj << Add Table( Column Table( Grouping Columns( :sex ) ) );obj << Add table( Row Table( Grouping Columns( :age ) ) );obj << Add Table( Column Table( Analysis Columns( :height ) ) );obj << Add Table( Column Table( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Statistics( Min, Max ) );obj << Modify Table( Column Table( 2 ), Grouping Columns( :sex ) );obj << Modify Table( Column Table( 2 ), Analysis Columns( :weight ) );Wait( 1 );obj << Modify Table( Column Table( 2 ), Delete( Analysis Columns( :weight ) ) );obj << Modify Table( Column Table( 2 ), Delete( Statistics( Sum ) ) );

```

### Modify Table Option

**语法:** obj &lt;&lt; Modify Table Option

**说明:** Se utiliza con Modificar tabla para modificar las opciones de una tabla existente.

#### 在现有表中堆叠填充分组列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ) )	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( true ) ) );

```

#### 在现有表中更改堆叠的组标签

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :height ), Statistics( Mean ) ),		Row Table( Grouping Columns( :age, :sex ), Stack Grouping Columns( 1 ) )	));obj << Modify Table(	Row Table( 1 ),	Modify Table Option( Change Stacked Group Label ),	"new label");

```

### Move

**语法:** move(&lt;Column Table | Row Table&gt;(table index), &lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)), &lt;before first | &lt;before | after&gt;(&lt;analysis column | grouping column | statistic&gt;(&lt;operand name | index&gt;)&gt;)

**说明:** Se utiliza con Modificar tabla para mover columnas y estadísticos en una tabla existente.

**JMP添加的版本:** 19

#### 将分组列从列移至行表

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Row Table( 1 ),	Move( Column Table( 1 ), Grouping Column( :Type ) ),	Before First);

```

#### 将统计量移至命名统计量之后

```jsl

dt = Open( "$SAMPLE_DATA/Companies.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :Type ),			Analysis Columns( :"Sales ($M)"n, :Assets ),			Statistics( Min, Mean, Max )		)	));Wait( 0 );obj << Modify Table(	Column Table( 1 ),	Move( Column Table( 1 ), Statistics( Mean ) ),	After( Statistics( Max ) ));

```

### Order By Count

**语法:** obj &lt;&lt; Order By Count( Grouping Columns( column ), true | false )

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order By Count( Grouping Columns( :age ), 1 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :age ) ) ));obj << Order By Count( Grouping Columns( :age ), 1 );

```

### Order by count of grouping columns

**语法:** obj &lt;&lt; Order by count of grouping columns( state=0|1 )

**说明:** 按表中的计数对分组列的水平排序。

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Order by Count of Grouping Columns( 1 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Cars.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table( Row Table( Grouping Columns( :Make ) ) ));obj << Order by Count of Grouping Columns( 1 );

```

### Pack

**语法:** obj &lt;&lt; Pack( &lt;Analysis columns | Statistics&gt;(operand name, ...), &lt;Template&gt; )

**说明:** 将多个统计量堆叠填充到表中的一个列。“Template”选项指定项的格式。

#### 在新表中使用模板堆叠填充分析列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### 在新表中堆叠填充分析列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack( Analysis Columns( City MPG, Hwy MPG, Comb MPG ) )		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));

```

#### 在现有表中堆叠填充分析列

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Sum ), Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ) ),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table(	Column Table( 1 ),	Pack(		Analysis Columns( City MPG, Hwy MPG, Comb MPG ),		Template( "^FIRST  (^OTHERS)", "/" )	));

```

### Plot Scale

**语法:** obj &lt;&lt; Plot Scale( min, max )

**说明:** 设置条形图的尺度。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Plot Scale( 0, 25 );

```

### Remove Column Label

**语法:** obj &lt;&lt; Remove Column Label( Grouping Columns( column ) )

**说明:** 删除表中指定的列标签。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));Wait( 2 );obj << Remove Column Label( Grouping Columns( :Region ) );

```

### Restore Column Label

**语法:** obj &lt;&lt; Restore Column Label( Grouping Columns( column ) )

**说明:** 恢复之前删除的、表中指定的列标签。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :Region ) ),		Row Table( Analysis Columns( :OZONE, :CO, :NO, :SO2 ), Statistics( Mean ) )	));obj << Remove Column Label( Grouping Columns( :Region ) );Wait( 2 );obj << Restore Column Label( Grouping Columns( :Region ) );

```

### Retype

**语法:** Retype( &lt;Analysis Columns | Grouping Columns&gt;( operand name, ... ), &lt;Analysis Column | Gropuing Column&gt; )

**说明:** Se utiliza con Modificar tabla para convertir columnas de análisis en columnas de agrupación, y viceversa, en una tabla existente.

**JMP添加的版本:** 19

#### 将分析列改为分组列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Analysis Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Analysis Column( :age ) ), Grouping Column );

```

#### 将分组列改为分析列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( N ), Grouping Columns( :age ) ),		Row Table( Grouping Columns( :sex ) )	));obj << Modify Table( Column Table( 1 ), Retype( Grouping Column( :age ) ), Analysis Column );

```

### Save grouping as tags in data table export

**语法:** obj &lt;&lt; Save grouping as tags in data table export( state=0|1 )

**说明:** 设置是否应将分组水平以列标记形式包含在数据表中。 默认开启。

**JMP添加的版本:** 19

#### 不保存标记

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 0 );obj << Make Into Data Table;

```

#### 保存标记

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Save Grouping As Tags In Data Table Export( 1 );obj << Make Into Data Table;

```

### Scroll lock row headers in data table export

**语法:** obj &lt;&lt; Scroll lock row headers in data table export( state=0|1 )

**说明:** 设置包含行标题的列是否应被滚动锁定。 默认开启。

**JMP添加的版本:** 19

#### 不滚动锁定行标题

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 0 );obj << Make Into Data Table;

```

#### 滚动锁定行标题

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Scroll Lock Row Headers In Data Table Export( 1 );obj << Make Into Data Table;

```

### Set Format

**语法:** Set Format( statistic( Column( format ) )

**说明:** 设置为分析列显示的格式。

#### 在现有表中设置格式

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Set Format( Mean( :OZONE( 6, 4 ) ) );

```

#### 设置不带分析列的统计量的格式

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Row %( Format( 9, 1, "Percent" ) ) ),	Add Table( Column Table( Grouping Columns( :age ), Statistics( Row % ) ) ));

```

#### 设置单个统计量和分析列的格式

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Set Format( Mean( :OZONE( 6, 4 ) ) ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### 设置多个统计量和分析列的格式

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Tabulate(	Show Control Panel( 0 ),	Set Format(		Mean(			:height( 10, 1 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 10, "Best" )			)		),		"% of Total"n(			:height( 12, 2 ),			Analysis Column(				Transform Column( "Log[height]", Formula( Log( :height ) ) ),				Format( 12, 2 )			)		)	),	Add Table(		Column Table(			Analysis Columns(				:height,				Transform Column( "Log[height]", Formula( Log( :height ) ) )			),			Statistics( Mean, "% of Total"n )		),		Row Table( Grouping Columns( :sex ) )	));

```

### Show Chart

**语法:** obj &lt;&lt; Show Chart( state=0|1 )

**说明:** 显示或隐藏从制表中所创建表生成的条形图。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );

```

### Show Control Panel

**语法:** obj &lt;&lt; Show Control Panel( state=0|1 )

**说明:** 显示或隐藏用于操控制表中所创建表的控制面板。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Control Panel( 1 );

```

### Show Shading

**语法:** obj &lt;&lt; Show Shading( state=0|1 )

**说明:** 显示或隐藏制表中所创建表中交替显示的着色和不着色线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Shading( 1 );

```

### Show Table

**语法:** obj &lt;&lt; Show Table( state=0|1 )

**说明:** 显示或隐藏制表中创建的表。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Table( 1 );

```

### Show Test Build Panel

**语法:** obj &lt;&lt; Show Test Build Panel( state=0|1 )

**说明:** 显示或隐藏为表的测试版本控制抽样的面板。

#### 为新表显示

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Show Test Build Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

#### 为现有表显示

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 1 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Show Test Build Panel( 1 );

```

### Show Tooltip

**语法:** obj &lt;&lt; Show Tooltip( state=0|1 )

**说明:** 当鼠标指针停留在拖放区以及制表输出的菜单上时显示或隐藏工具提示。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Tool Tip( 1 );

```

### Stack Grouping Columns

**语法:** Stack Grouping Columns(0 | 1)

**说明:** 将分组列堆叠为单个列，使用缩进显示嵌套结构。

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size ),			Stack Grouping Columns( 1 )		)	));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Grouping Columns( :marital status ),			Add Aggregate Statistics( :marital status ),			Analysis Columns( :age ),			Statistics( Min, Max )		),		Row Table(			Grouping Columns( :sex, :country, :size ),			Add Aggregate Statistics( :sex, :country, :size )		)	));obj << Modify Table( Row Table( 1 ), Modify Table Option( Stack Grouping Columns( 1 ) ) );

```

### Statistics

**语法:** Statistics( N|Mean|Std Dev|Min|Max|Range|% of Total|N Missing|N Categories|Sum|Sum Wgt|Variance|Std Err|CV|Median|Interquartile Range|Quantiles|Column %|Row %|All )

**说明:** 将统计量添加至表中的行或列。编写脚本时，Statistics() 消息位于标识 Analysis Columns( column ) 消息旁，二者均嵌套在 Row Table() 或 Column Table() 命令中。

#### 添加至新表

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));

```

#### 添加至现有表

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Analysis Columns( :OZONE ), Statistics( Mean, Max ) ),		Row Table( Grouping Columns( :Region ) )	));obj << Modify Table( Column Table( 1 ), Statistics( Min ) );

```

### Test Build

**语法:** obj &lt;&lt; Test Build( Sample Size( number ) )

**说明:** 显示使用大小为 number 的测试版数据样本的表。

#### 在新表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Test Build( Sample Size( 100 ) ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));

```

#### 在现有表中设置

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );

```

### Test Data View

**语法:** obj &lt;&lt; Test Data View

**说明:** 显示用作样本（用于构建测试表）的数据表。

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Statistics( Mean, Std Dev ) ),		Row Table( Analysis Columns( :ForSc, :SideSc, :CD3, :CD8, :CD4, :MCB ) )	));obj << Test Build( Sample Size( 100 ) );obj << Test Data View;

```

### Undo

**语法:** obj &lt;&lt; Undo

**说明:** 删除对当前表进行的上一次操作所产生的影响。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Add Table( Column Table( Grouping Columns( :type ) ) );Wait( 2 );obj << Undo;

```

### Uniform plot scale

**语法:** obj &lt;&lt; Uniform plot scale( state=0|1 )

**说明:** 将所有子类别的尺度设置为针对条形图是相同的。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table( Grouping Columns( :sex, :marital status ) ),		Row Table( Grouping Columns( :country, :size ) )	));obj << Show Chart( 1 );Wait( 2 );obj << Uniform Plot Scale( 1 );

```

### Unpack

**语法:** obj &lt;&lt; Unpack( &lt;Analysis columns | Statistics&gt;(operand name, ...) )

**说明:** 取消堆叠填充一组堆叠填充过的列。

```jsl

dt = Open( "$SAMPLE_DATA/Hybrid Fuel Economy.jmp" );obj = dt << Tabulate(	Show Control Panel( 0 ),	Add Table(		Column Table(			Statistics( Sum ),			Analysis Columns( :City MPG, :Hwy MPG, :Comb MPG ),			Pack(				Analysis Columns( City MPG, Hwy MPG, Comb MPG ),				Template( "^FIRST  (^OTHERS)", "/" )			)		),		Row Table( Grouping Columns( :Mfr Name, :Engine ) )	));obj << Modify Table( Column Table( 1 ), Unpack( Analysis Columns( :City MPG ) ) );

```

