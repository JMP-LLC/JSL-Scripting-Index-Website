# Bubble Plot



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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Bubble Plot(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Bubble Plot

**语法:** Bubble Plot( X( column ), Y( column ), &lt;Sizes( column )&gt;, &lt;Time( column )&gt;, &lt;ID( column )&gt;, &lt;Coloring( column ) )

**说明:** 生成可随时间变量变化播放动画的二维气泡散点图。可以使用其他变量来调整气泡的大小和设置气泡颜色。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

## 列

### By

**语法:** obj = Bubble Plot(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 生成多个报表，每个报表对应变量的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Coloring

**语法:** obj = Bubble Plot(...&lt;Coloring( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 根据所选的变量对气泡着色。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Coloring( :Pop ));

```

### Freq

**语法:** obj = Bubble Plot(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 计算气泡的位置、大小和颜色时为计算加权。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));dtSummary = dt << Summary(	Group( :Country ),	Mean( :"Portion 0-19"n ),	Mean( :"Portion60+"n ),	Sum( :Pop ),	Freq( "None" ),	Weight( "None" ));dtSummary << Bubble Plot(	X( :"Mean(Portion 0-19)"n ),	Y( :"Mean(Portion60+)"n ),	Sizes( :"Sum(Pop)"n ),	Freq( :N Rows ));

```

### ID

**语法:** obj = Bubble Plot(...&lt;ID( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 标识应聚合并显示为单个气泡的行。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### Sizes

**语法:** obj = Bubble Plot(...&lt;Sizes( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 用作气泡大小的列。若未指定，则气泡大小与观测数成比例。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### Time

**语法:** obj = Bubble Plot(...&lt;Time( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为每个唯一的时间段保持单独的坐标、大小和颜色。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));

```

### X

**语法:** obj = Bubble Plot(...X( column )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 用作图中气泡的 x 坐标的列。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

### Y

**语法:** obj = Bubble Plot(...Y( column )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 用作图中气泡的 y 坐标的列。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));

```

## 项消息

### Auto Stretching

**语法:** obj &lt;&lt; Auto Stretching( "自动"|"开"|"关" )

**说明:** 设置报表的自动拉伸行为。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Auto Stretching( "Off" );

```

### Bubble Size

**语法:** obj &lt;&lt; Bubble Size( number )

**说明:** 更改散点图中气泡的大小。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Bubble Size( 50 );

```

### Color Levels

**语法:** obj &lt;&lt; Color Levels

**说明:** 设置连续图例的水平。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Coloring( :Pop ));obj << Color Levels( [100000 1000000 10000000] );

```

### Color Theme

**语法:** obj &lt;&lt; Color Theme

**说明:** 设置气泡的颜色主题。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Color Theme( "White to Red" );

```

### Color as Sum

**语法:** obj &lt;&lt; Color as Sum( state=0|1 )

**说明:** 使用“颜色”变量的总和而不是“颜色”变量的均值作为“颜色”角色。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Time( :Year ),	Coloring( :Pop ),	ID( :Region ));obj << Color as Sum( 1 );

```

### Combine

**语法:** obj &lt;&lt; Combine( &lt;id&gt; )

**说明:** 将组中的选定气泡（或指定 ID）合并为更大的气泡。该选项仅在使用了两个 ID 变量时可用。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));dt << Select Where( :Region == "Europe" );obj << Split;Wait( 2 );obj << Combine( "Europe" );

```

### Combine All

**语法:** obj &lt;&lt; Combine All

**说明:** 将组中的所有气泡合并为更大的气泡。该选项仅在使用了两个 ID 变量时可用。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));obj << Split All;Wait( 2 );obj << Combine All;

```

### Draw

**语法:** obj &lt;&lt; Draw( "填充"|"轮廓"|"填充且带轮廓" )

**说明:** 设置气泡的显示模式。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Draw( "Outlined" );

```

### Fit to Window

**语法:** obj &lt;&lt; Fit to Window( "自动"|"开"|"关" )

**说明:** 设置报表的自动拉伸行为。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Fit to Window( "Off" );

```

### Get Custom Path

**语法:** obj &lt;&lt; Get Custom Path

**说明:** 将气泡的自定义路径作为矩阵返回。路径矩阵包含三列，分别为 x、y 和标志，用于指定路径上的各点。标志值为 0 表示控制，为 1 表示移动，为 2 表示线段，为 3 表示三次 Bézier 线段，还可以为负值（若该点还起到闭合路径的作用）。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );obj << Set Shape( "Custom" );obj << Get Custom Path();

```

### Get Draw

**语法:** obj &lt;&lt; Get Draw

**说明:** 返回气泡的显示模式。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Get Draw();

```

### Get Label

**语法:** obj &lt;&lt; Get Label

**说明:** 返回绘制气泡标签的模式。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Get Label();

```

### Get Shape

**语法:** obj &lt;&lt; Get Shape

**说明:** 返回气泡的形状。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Shape( "Triangle" );obj << Get Shape();

```

### Go

**语法:** obj &lt;&lt; Go

**说明:** 使用“时间”变量时初始化动画。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Go;

```

### Label

**语法:** obj &lt;&lt; Label( "无"|"选定"|"全部" )

**说明:** 设置绘制气泡标签的模式。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Label( "All" );

```

### Label Offset

**语法:** obj &lt;&lt; Label Offset( {pt, x offset, y offset}, ... )

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));dt << Select Where( :Region == "Europe" | :Region == "North America" );obj << Label Offset( {4, -75, -43}, {7, 80, -34} );

```

### Legend

**语法:** obj &lt;&lt; Legend( state=0|1 )

**说明:** 当使用彩色列时显示颜色图例。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Legend( 1 );

```

### Lock Scales

**语法:** obj &lt;&lt; Lock Scales( state=0|1 )

**说明:** 锁定轴、渐变和大小范围，以便在数据或过滤条件发生更改时它们不会随之更改。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Lock Scales( 0 );dt << Data Filter(	Mode( Select( 0 ), Show( 0 ), Include( 1 ) ),	Add Filter( Columns( :Region ) ));

```

### Orient Shapes

**语法:** obj &lt;&lt; Orient Shapes( state=0|1 )

**说明:** 形状定向，使顶部指向移动方向。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));obj << Set Shape( "Triangle" );obj << Orient Shapes( 1 );

```

### Prev

**语法:** obj &lt;&lt; Prev

**说明:** 将“时间”变量在动画中向后移动一步。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Time Index( 19 );obj << Prev;

```

### Revert Color Theme

**语法:** obj &lt;&lt; Revert Color Theme

**说明:** 恢复定制颜色主题，从列属性或首选项返回到默认的主题。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Color Theme( "White to Red" );Wait( 2 );obj << Revert Color Theme();

```

### Selectable Across Gaps

**语法:** obj &lt;&lt; Selectable Across Gaps( state=0|1 )

**说明:** 允许在数据缺失时间期间选择气泡并保持气泡的选中状态。若未选中该选项，则在数据缺失时间期间不可选择气泡。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( :Country == 3300 );obj << Selectable Across Gaps( 1 );obj << Trail Bubbles( 1 );obj << Go;

```

### Set Custom Path

**语法:** obj &lt;&lt; Set Custom Path

**说明:** 设置气泡的自定义路径。路径可通过 N x 3 矩阵或文本表达式指定。路径矩阵包含三列，分别为 x、y 和标志，用于指定路径上的各点。标志值为 0 表示控制，为 1 表示移动，为 2 表示线段，为 3 表示三次 Bézier 线段，还可以为负值（若该点还起到闭合路径的作用）。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Custom Path( "M-1,-1 L-1,1 L0,0.5 L1,1 L1,-1 L0,-0.5 L-1,-1 Z" );obj << Set Shape( "Custom" );

```

### Set Shape

**语法:** obj &lt;&lt; Set Shape( "圆圈"|"三角"|"方形"|"菱形"|"箭头"|"定制" )

**说明:** 设置气泡的形状。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Set Shape( "Triangle" );

```

### Show Roles

**语法:** obj &lt;&lt; Show Roles( state=0|1 )

**说明:** 在报表顶部图例中显示每个角色所用的变量。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));obj << Show Roles( 1 );

```

### Show Time Annotation

**语法:** obj &lt;&lt; Show Time Annotation( state=0|1 )

**说明:** 显示当前时间作为动画气泡图中的注解。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ),	Coloring( :Region ));Wait( 1 );obj << Show Time Annotation( 0 );

```

### Size as Sum

**语法:** obj &lt;&lt; Size as Sum( state=0|1 )

**说明:** 使用“大小”变量的总和而不是“大小”变量的均值作为“大小”角色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Size as Sum( 1 );

```

### Speed

**语法:** obj &lt;&lt; Speed( number )

**说明:** 更改气泡随时间移动的速度。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Speed( 100 );obj << Go;

```

### Split

**语法:** obj &lt;&lt; Split( &lt;id&gt; )

**说明:** 将选定的气泡（或指定 ID）拆分为其组成气泡。该选项仅在使用了两个 ID 变量时可用。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));dt << Select Where( :Region == "Europe" );Wait( 2 );obj << Split;Wait( 2 );obj << Split( "Asia" );

```

### Split All

**语法:** obj &lt;&lt; Split All

**说明:** 将所有气泡拆分为其组成部分。该选项仅在使用两个 ID 变量时可用。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Region, :Country ),	Time( :Year ));Wait( 2 );obj << Split All;

```

### Step

**语法:** obj &lt;&lt; Step

**说明:** 将“时间”变量在动画中向前移动一步。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Step;

```

### Stop

**语法:** obj &lt;&lt; Stop

**说明:** 使用“时间”变量时停止动画。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( :Country == 4120 );obj << Go;Wait( 2 );obj << Stop;

```

### Time Index

**语法:** obj &lt;&lt; Time Index( number )

**说明:** 设置散点图中“时间”变量的值。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));obj << Time Index( 19 );

```

### Title Position

**语法:** obj &lt;&lt; Title Position( X,Y )

**说明:** 设置标题的位置。必须指定“时间”变量以查看该选项。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));obj << Title Position( 0.8, 0.06 );

```

### Toggle Animation

**语法:** obj &lt;&lt; Toggle Animation

**说明:** 切换当前动画状态

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( :Country == 4120 );obj << Go;Wait( 2 );obj << Toggle Animation;

```

### Trail Bubbles

**语法:** obj &lt;&lt; Trail Bubbles( "无"|"选定"|"全部" )

**说明:** 将气泡图过去的历史显示为半透明尾迹。要显示尾迹气泡，必须指定“时间”列，且必须先选择一个气泡。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Trail Bubbles( 1 );obj << Go;

```

### Trail Lines

**语法:** obj &lt;&lt; Trail Lines( "无"|"选定"|"全部" )

**说明:** 将气泡图过去的历史显示为连起来的线段。要显示尾迹气泡，必须指定“时间”列，且必须先选择一个气泡。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ),	Time( :Year ));dt << Select Where( (:Country == 3300) | (:Country == 4120) );obj << Trail Lines( 1 );obj << Go;

```

### X as Sum

**语法:** obj &lt;&lt; X as Sum( state=0|1 )

**说明:** 使用 X 变量的总和而不是 X 变量的均值作为 X 角色。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << X as Sum( 1 );

```

### Y as Sum

**语法:** obj &lt;&lt; Y as Sum( state=0|1 )

**说明:** 使用 Y 变量的总和而不是 Y 变量的均值作为 Y 角色。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );obj = dt << Bubble Plot(	X( :"Portion 0-19"n ),	Y( :"Portion60+"n ),	Sizes( :Pop ),	ID( :Country ));obj << Y as Sum( 1 );

```

