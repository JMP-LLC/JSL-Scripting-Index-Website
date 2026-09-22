# Text Explorer



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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Text Explorer(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Text Explorer

**语法:** Text Explorer( Text Columns( columns ) )

**说明:** 解析来自列中文本的单词，对其计数，将其关联至其他列，保存指示符并绘制关系图。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

## 列

### By

**语法:** obj &lt;&lt; By( column(s) )

**说明:** 生成多个报表，每个报表对应变量的每个水平。

**JMP添加的版本:** 早于版本 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### ID

**语法:** obj &lt;&lt; ID( column )

**说明:** 一列，用于识别“保存用于关联的堆叠 DTM”输出数据表以及“潜在类分析”报表中的单独响应者。

**JMP添加的版本:** 早于版本 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	ID( :School Age Children ));obj << Save Stacked DTM For Association;

```

### Text Columns

**语法:** obj &lt;&lt; Text Columns( column(s) )

**说明:** 一个文本列，它包含要处理的文档。每个行值视为一个文档。

**JMP添加的版本:** 早于版本 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );

```

### Validation

**语法:** obj &lt;&lt; Validation( column )

**说明:** 包含两个和三个非重复值的数值列。若有两个值，较小的值定义训练集，较大的值定义验证集。若有三个值，这些值按大小递增的顺序定义训练集、验证集和测试集。若有三个以上的值，则忽略除最小的三个值以外的其他值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer(	Text Columns( :Reasons Not to Floss ),	Validation( :School Age Children ));obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));

```

## 项消息

### Add Delimiters

**语法:** obj &lt;&lt; Add Delimiters( "string" )

**说明:** 向默认分隔符列表添加单个字符串中用户提供的分隔符，以便拆分单词。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Tokenizing( "Basic Words" );obj << Show Delimiters( 1 );Wait( 1 );obj << Add Delimiters( "{}" );

```

### Add Phrase Exceptions

**语法:** obj &lt;&lt; Add Phrase Exceptions( list )

**说明:** 添加要从词条列表删除的短语列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Add Phrases( {"twice a day", "every time", "time consuming"} );Wait( 1 );obj << Add Phrase Exceptions( {"every time"} );

```

### Add Phrases

**语法:** obj &lt;&lt; Add Phrases( list )

**说明:** 将短语列表添加至要像单个词条那样分析的词条列表。词条计数会相应更新。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Add Phrases( {"twice a day", "every time"} );

```

### Add Recode Exceptions

**语法:** obj &lt;&lt; Add Recode Exceptions( { {pair1}, {pair2}, ...} )

**说明:** 添加要删除的重新编码文本字符串的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );obj << Show Recodes( 1 );Wait( 1 );obj << Add Recode Exceptions( {"neglagent", "negligent"} );

```

### Add Recodes

**语法:** obj &lt;&lt; Add Recodes( { {pair1}, {pair2}, ...} )

**说明:** 添加要重新编码的成对单词的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Add Recodes( {{"everytime", "every time"}, {"neglagent", "negligent"}} );obj << Show Recodes( 1 );

```

### Add Stem Exceptions

**语法:** obj &lt;&lt; Add Stem Exceptions( list )

**说明:** 添加要从词干处理排除的单词列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Stemming( "Stem All Terms" );obj << Show Stem Report( 1 );Wait( 1 );obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stem Overrides

**语法:** obj &lt;&lt; Add Stem Overrides( list )

**说明:** 添加始终允许进行词干处理的单词列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Stemming( "Stem All Terms" );obj << Show Stem Report( 1 );Wait( 1 );obj << Add Stem Overrides( {"care"} );obj << Add Stem Exceptions( {"care", "brush", "like"} );

```

### Add Stop Word Exceptions

**语法:** obj &lt;&lt; Add Stop Word Exceptions( list )

**说明:** 添加要作为停止词删除并添加至词条列表的单词列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Show Stop Words( 1 );Wait( 1 );obj << Add Stop Word Exceptions( {"again", "are"} );

```

### Add Stop Words

**语法:** obj &lt;&lt; Add Stop Words( list )

**说明:** 添加要从词条列表中删除并在分析中忽略的单词列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Show Stop Words( 1 );Wait( 1 );obj << Add Stop Words( {"use", "feel", "like"} );

```

### Cloud Width

**语法:** obj &lt;&lt; Cloud Width( number )

**说明:** 将词云的宽度设置为指定的像素数。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Show Word Cloud( 1 );obj << Cloud Width( 150 );

```

### Coloring

**语法:** obj &lt;&lt; Coloring( "无"|"均匀颜色"|"任意灰度"|"任意颜色"|"按列值..." )

**说明:** 指定词条在词云中的着色。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Show Word Cloud( 1 );obj << Coloring( "Arbitrary Colors" );

```

### Custom Stemmer

**语法:** obj &lt;&lt; Custom Stemmer( Function( {string, dot}, ... ) )

**说明:** 根据您的指定执行“词干处理”。指定一个函数，它取“string”参数（来自文档的一个词条），检验它以确定它包含的模式，并在需要时将字符替换为“&apos;dot”参数。该函数替换标准词干处理算法。发生更改的任何单词应包括在最后的词干处理点。若平台启用了词干处理，则为语料库中找到的每个唯一词条调用该函数。

**JMP添加的版本:** 15

```jsl

//This custom stemmer looks only for words ending in 'ing' and replaces the end with the stemming dot.dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Stemming( "Stem All Terms" );obj << Show Stem Report( 1 );obj << Custom Stemmer(	Function( {string, dot},		If( Ends With( string, "ing" ),			Substr( string, 1, Length( string ) - 3 ) || dot,			string		)	));

```

### Customize Regex

**语法:** obj = Text Explorer(...Customize Regex( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 打开“文本分析器正则表达式编辑器”以修改正则表达式设置。该选项仅可用于“Regex 标记化”方法。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Tokenizing( "Regex" );obj << Customize Regex();

```

### Discriminant Analysis

**语法:** obj &lt;&lt; Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**说明:** 使用文档词条矩阵的线性判别分析，预测每个文档划分到指定响应列的类别的分类。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Discriminant Analysis(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Column( :Gender ));

```

### Font

**语法:** obj &lt;&lt; Font( font )

**说明:** 指定词条在词云中的字体、字型和字号。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Show Word Cloud( 1 );obj << Font( "Arial Narrow", 11, "Plain" );

```

### Include Builtin Phrases

**语法:** obj &lt;&lt; Include Builtin Phrases( state=0|1 )

**说明:** 指定包括在标记化过程中使用的短语中的内置短语。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Include Builtin Phrases( 0 );

```

### Include Builtin Stop Words

**语法:** obj &lt;&lt; Include Builtin Stop Words( state=0|1 )

**说明:** 指定包括在标记化过程中使用的停止词中的内置停止词。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Include Builtin Stop Words( 0 );

```

### Language

**语法:** obj = Text Explorer(...Language( "显示语言"|"英语"|"德语"|"西班牙语"|"法语"|"意大利语"|"日语"|"简体中文"|"繁体中文"|"韩语" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于文本处理的语言。这将影响词干处理，以及停止词、重新编码和短语的内置列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( TextColumns( :Reasons Not to Floss ), Language( "German" ) );

```

### Latent Class Analysis

**语法:** obj &lt;&lt; Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**说明:** 使用二进制加权文档词条矩阵的潜在类分析，将文档分组到相似文档的聚类中。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));

```

### Latent Semantic Analysis

**语法:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**说明:** 执行文档词条矩阵的稀疏奇异值分解。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Latent Semantic Analysis(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << SVD(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));

```

### Layout

**语法:** obj &lt;&lt; Layout( "有序"|"按字母顺序"|"中心化" )

**说明:** 指定词条在词云中的排列方式。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Show Word Cloud( 1 );obj << Layout( "Alphabetical" );

```

### Maximum Characters per Word

**语法:** obj = Text Explorer(...Maximum Characters per Word( number=50 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定要作为词条包含在分析中的单词可以包含最多 number 个字符。 默认为“50”。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer(	TextColumns( :Reasons Not to Floss ),	Maximum Characters per Word( 15 ));

```

### Maximum Number of Phrases

**语法:** obj = Text Explorer(...Maximum Number of Phrases( number=5000 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定最多 number 个短语出现在短语列表中。 默认为“5000”。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer(	TextColumns( :Reasons Not to Floss ),	Maximum Number of Phrases( 50 ));

```

### Maximum Words per Phrase

**语法:** obj = Text Explorer(...Maximum Words per Phrase( number=4 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定作为短语最多可含 number 个单词被包括在分析中。 默认为“4”。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer(	TextColumns( :Reasons Not to Floss ),	Maximum Words per Phrase( 2 ));

```

### Minimum Characters per Word

**语法:** obj = Text Explorer(...Minimum Characters per Word( number=1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定要作为词条包含在分析中的单词必须包含 number 个字符。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer(	TextColumns( :Reasons Not to Floss ),	Minimum Characters per Word( 3 ));

```

### Minimum Frequency for Phrase

**语法:** obj &lt;&lt; Minimum Frequency for Phrase( number )

**说明:** 指定要包括在短语列表中的短语出现 number 次。默认情况下没有最小值。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Minimum Frequency for Phrase( 5 );

```

### Phrases Alphabetical

**语法:** obj &lt;&lt; Phrases Alphabetical( state=0|1 )

**说明:** 按字母顺序排序短语列表。默认值为按计数降序排序。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Phrases Alphabetical( 1 );

```

### Rotated SVD

**语法:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**说明:** 执行文档词条矩阵的最大方差法旋转奇异值分解，以生成称为主题的词条组。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Latent Semantic Analysis(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));obj << Show Term List( 0 );obj << Show Phrase List( 0 );obj << Show Summary Counts( 0 );obj << Topic Analysis( Number of Topics( 5 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Latent Semantic Analysis(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));obj << Show Term List( 0 );obj << Show Phrase List( 0 );obj << Show Summary Counts( 0 );obj << Rotated SVD( Number of Topics( 5 ) );

```

### SVD

**语法:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**说明:** 执行文档词条矩阵的稀疏奇异值分解。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Latent Semantic Analysis(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << SVD(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));

```

### Save DTM Formula

**语法:** obj &lt;&lt; Save DTM Formula( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**说明:** 使用 Text Score JSL 函数将向量值公式列保存至数据表。向量长度取决于用户指定的最大词条数、最小词条频数和加权的选项。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Save DTM Formula(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ));

```

### Save Document Term Matrix

**语法:** obj &lt;&lt; Save Document Term Matrix( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weight( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ) )

**说明:** 为文档词条矩阵的每一列将列保存至数据表。列数取决于用户指定的最大词条数、最小词条频数和加权的选项。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Save Document Term Matrix(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ));

```

### Save Stacked DTM for Association

**语法:** obj &lt;&lt; Save Stacked DTM for Association

**说明:** 将堆叠版本的文档词条矩阵保存至新数据表中。若在“文本分析器”启动窗口中指定了 ID 变量，则该 ID 变量用于标识原始文本数据表中每个词条来自的行。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Save Stacked DTM For Association;

```

### Save Term Table

**语法:** obj &lt;&lt; Save Term Table

**说明:** 创建一个 JMP 数据表，它包含词条列表中的每个词条、出现次数，以及包含每个词条的文档数。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Save Term Table;

```

### SaveRegexColumn

**语法:** obj &lt;&lt; SaveRegexColumn( text )

**说明:** 将指定的定制正则表达式保存至数据表中的新列。

```jsl

 dt = New Table( "WordTable",	New Column( "Original Words",		Character,		"Nominal",		Set Values( {"Quick brown", "foxes jumped", "over the", "lazy dog."} )	));dt << Text Explorer(	Text Columns( :Original Words ), // the regex: [a-z]*? means 0 or more letters, reluctantly. [aeiou] means one vowel.		// {2} means repeat twice. 	// [a-z]* means 0 or more letters, greedily. (the rest of the word)	Set Regex(		Custom(			Title( "Two Vowels" ),			Regex( "(([a-z]*?[aeiou]){2}[a-z]*)" ),			Result( "\[\1]\" ),		)	),	Include Builtin Stop Words( 0 ), // "over" is a stop word, but we want to see it	SaveRegexColumn( "Poly Vowel Words" ));

```

### Score Terms by Column

**语法:** obj &lt;&lt; Score Terms by Column( column )

**说明:** 将基于指定列中的值的得分保存至“保存词条表”选项创建的数据表。每个词条的得分是通过按每行中词条的出现次数加权对指定列求均值得到的。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Score Terms By Column( :Salary );

```

### Sentiment Analysis

**语法:** obj &lt;&lt; Sentiment Analysis( state=0|1 )

**说明:** 使用词法分析识别文档中的情感词条，并对文档的正面、负面和整体情感进行评分。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );

```

### Set Delimiters

**语法:** obj &lt;&lt; Set Delimiters( "string" )

**说明:** 将用于拆分单词的默认分隔符列表替换为单个字符串中的用户提供字符。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Tokenizing( "Basic Words" );obj << Show Delimiters( 1 );obj << Set Delimiters( " " );

```

### Set Regex

**语法:** obj &lt;&lt; Set Regex( ... )

**说明:** 替换 Regex 标记化方法中使用的默认正则表达式。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Set Regex( Library( "Words" ) );

```

### Show Delimiters

**语法:** obj &lt;&lt; Show Delimiters( state=0|1 )

**说明:** 显示或隐藏用于标记化的分隔符。仅当“标记化”方法为“基本单词”时该选项才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Tokenizing( "Basic Words" );Wait( 1 );obj << Show Delimiters( 1 );

```

### Show Filters for all Tables

**语法:** obj &lt;&lt; Show Filters for all Tables( state=0|1 )

**说明:** 显示或隐藏可用于搜索报表中的表的过滤器。该选项适用于以下表:“停止词”、“指定的短语”、“词干例外情况”、“词条列表”、“短语列表”和“词干报表”。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Filters for All Tables( 1 );

```

### Show Legend

**语法:** obj &lt;&lt; Show Legend( state=0|1 )

**说明:** 显示或隐藏词云的图例。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Show Word Cloud( 1 );obj << Coloring( "Arbitrary Colors" );Wait( 1 );obj << Show Legend( 0 );

```

### Show Phrase List

**语法:** obj &lt;&lt; Show Phrase List( state=0|1 )

**说明:** 显示或隐藏“短语列表”报表。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Phrase List( 0 );

```

### Show Recodes

**语法:** obj &lt;&lt; Show Recodes( state=0|1 )

**说明:** 显示或隐藏已重新编码的词条列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Add Recodes( {{"flossing", "floss"}} );Wait( 1 );obj << Show Recodes( 1 );

```

### Show Selected Rows

**语法:** obj &lt;&lt; Show Selected Rows

**说明:** 打开一个窗口，它包含在当前所选行中的文档文本。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );Current Data Table() << Select Rows( [1 2 3 4] );obj << Show Selected Rows( 1 );

```

### Show Specified Phrases

**语法:** obj &lt;&lt; Show Specified Phrases( state=0|1 )

**说明:** 显示或隐藏用户已指定视为词条的短语列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Specified Phrases( 1 );Report( obj )["Specified Phrases"] << Close( 0 );

```

### Show Stem Exceptions

**语法:** obj &lt;&lt; Show Stem Exceptions( state=0|1 )

**说明:** 显示或隐藏从词干处理中排除的词条。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Stem Exceptions( 1 );

```

### Show Stem Report

**语法:** obj &lt;&lt; Show Stem Report( state=0|1 )

**说明:** 显示或隐藏包含词干处理结果的两个表的“词干处理”报表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Stemming( "Stem for Combining" );obj << Show Stem Report( 1 );

```

### Show Stop Words

**语法:** obj &lt;&lt; Show Stop Words( state=0|1 )

**说明:** 显示或隐藏分析中使用的停止词列表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Stop Words( 1 );

```

### Show Summary Counts

**语法:** obj &lt;&lt; Show Summary Counts( state=0|1 )

**说明:** 显示或隐藏汇总计数的表。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Summary Counts( 0 );

```

### Show Term List

**语法:** obj &lt;&lt; Show Term List( state=0|1 )

**说明:** 显示或隐藏“词条列表”报表。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Term List( 0 );

```

### Show Term and Phrase Options

**语法:** obj &lt;&lt; Show Term and Phrase Options( state=0|1 )

**说明:** 显示或隐藏“词条和短语列表”报表中对应于每个列表弹出式菜单中可用选项的按钮。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Term and Phrase Options( 1 );

```

### Show Word Cloud

**语法:** obj &lt;&lt; Show Word Cloud( state=0|1 )

**说明:** 显示或隐藏词云。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Show Word Cloud( 1 );

```

### Stemming

**语法:** obj = Text Explorer(...Stemming( "无需词干处理"|"要组合的词干"|"处理所有词条的词干" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定将具有类似的开始字符但结尾字符不同的词条进行组合的方法。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Stemming( "Stem All Terms" );

```

### Term Selection

**语法:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )), Model Choice( &lt;index&gt; ))

**说明:** 分析哪些词条对不同的响应解释得最好。当响应为评级时，词条选择也可用于情感分析。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));

```

### Terms Alphabetical

**语法:** obj &lt;&lt; Terms Alphabetical( state=0|1 )

**说明:** 按字母顺序排序词条列表。默认值为按计数降序排序。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Terms Alphabetical( 1 );

```

### Tokenizing

**语法:** obj = Text Explorer(...Tokenizing( "Regex"|"基本单词" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定将文本解析为词条或标记的方法。可用方法包括 Regex 和“基本单词”。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Tokenizing( "Basic Words" );

```

### Topic Analysis

**语法:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**说明:** 执行文档词条矩阵的最大方差法旋转奇异值分解，以生成称为主题的词条组。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Latent Semantic Analysis(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));obj << Show Term List( 0 );obj << Show Phrase List( 0 );obj << Show Summary Counts( 0 );obj << Topic Analysis( Number of Topics( 5 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );obj << Latent Semantic Analysis(	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 10 ),	Centering and Scaling( "Centered" ));obj << Show Term List( 0 );obj << Show Phrase List( 0 );obj << Show Summary Counts( 0 );obj << Rotated SVD( Number of Topics( 5 ) );

```

### Treat Numbers as Words

**语法:** obj = Text Explorer(...Treat Numbers as Words( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将完全由数字构成的单词视为标记。仅适用于“基本单词”标记化方法。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ) );Wait( 1 );obj << Tokenizing( "Basic Words" );obj << Treat Numbers as Words( 1 );

```

## Discriminant Analysis

### 关联的构造器

#### Discriminant Analysis

**语法:** obj &lt;&lt; Discriminant Analysis( Maximum Number of Terms( number ), Minimum Number of Terms( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number oc Singular Vectors( number ), Column( :column name ) )

**说明:** 使用文档词条矩阵的线性判别分析，预测每个文档划分到指定响应列的类别的分类。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Discriminant Analysis(	Maximum Number of Terms( 20 ),	Minimum Term Frequency( 3 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 15 ),	Column( :Floss ));

```

### 项消息

#### Canonical Plot

**语法:** obj &lt;&lt; Canonical Plot( state=0|1, N Canon( number ) )

**说明:** 显示或隐藏典型空间中的文档和组均值图。典型空间是最能分隔组的空间。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Discriminant Analysis(	Maximum Number of Terms( 20 ),	Minimum Term Frequency( 3 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 15 ),	Column( :Floss ));obj2 << Canonical Plot( 1, N Canon( 3 ) );

```

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 从“文本分析器”报表窗口中删除“判别分析”报表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Discriminant Analysis(	Maximum Number of Terms( 20 ),	Minimum Term Frequency( 3 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 15 ),	Column( :Floss ));Wait( 1 );obj2 << Remove;

```

#### Save Canonical Scores

**语法:** obj &lt;&lt; Save Canonical Scores( N Canon( number ) )

**说明:** 将包含每个观测来自典型空间的得分的列保存至数据表。典型空间是最能分隔组的空间。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Discriminant Analysis(	Maximum Number of Terms( 20 ),	Minimum Term Frequency( 3 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 15 ),	Column( :Floss ));obj2 << Save Canonical Scores( N Canon( 3 ) );

```

#### Save Probabilities

**语法:** obj &lt;&lt; Save Probabilities

**说明:** 将每个响应水平的概率列以及包含最可能的响应的列保存至数据表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Discriminant Analysis(	Maximum Number of Terms( 20 ),	Minimum Term Frequency( 3 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 15 ),	Column( :Floss ));obj2 << Save Probabilities;

```

#### Save Probability Formulas

**语法:** obj &lt;&lt; Save Probability Formulas

**说明:** 将公式列保存至数据表以预测最可能的响应。这些列使用 Text Score 函数计算每个响应水平的概率。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Discriminant Analysis(	Maximum Number of Terms( 20 ),	Minimum Term Frequency( 3 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 15 ),	Column( :Floss ));obj2 << Save Probability Formulas;

```

## LCA Analysis

### 关联的构造器

#### Latent Class Analysis

**语法:** obj &lt;&lt; Latent Class Analysis( Number of Clusters( number ), Maximum Number of Terms( number ), Minimum Term Frequency( number ) )

**说明:** 使用二进制加权文档词条矩阵的潜在类分析，将文档分组到相似文档的聚类中。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));

```

### 项消息

#### Cluster Mixture Probabilities

**语法:** obj &lt;&lt; Cluster Mixture Probabilities( state=0|1 )

**说明:** 显示或隐藏属于每个聚类的观测的概率表。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));Wait( 1 );obj2 << Cluster Mixture Probabilities( 0 );

```

#### Cluster Probabilities by Row

**语法:** obj &lt;&lt; Cluster Probabilities by Row( state=0|1 )

**说明:** 显示或隐藏“混合概率”表，它包含每行聚类成员关系的概率。“最可能的聚类”列指示每行具有最高成员关系概率的聚类。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));Wait( 1 );obj2 << Cluster Probabilities by row( 0 );

```

#### Color by Cluster

**语法:** obj &lt;&lt; Color by Cluster

**说明:** 根据其最可能的聚类，对数据表中的每行着色。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));obj2 << Color by Cluster;

```

#### MDS Plot

**语法:** obj &lt;&lt; MDS Plot( state=0|1 )

**说明:** 显示或隐藏多维尺度化图，它是聚类邻近关系的二维表示。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));Wait( 1 );obj2 << MDS Plot( 0 );

```

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 从“文本分析器”报表中删除“潜在类分析”报表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));Wait( 1 );obj2 << Remove;

```

#### Rename Clusters

**语法:** obj &lt;&lt; Rename Clusters( "name1", "name2", ... )

**说明:** 允许您为一个或多个聚类添加说明性名称。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));Wait( 1 );obj2 << Rename Clusters( "First", "Second", "Third", "Fourth", "Fifth" );

```

#### Save Probabilities

**语法:** obj &lt;&lt; Save Probabilities

**说明:** 在数据表的另一列中保存属于各个聚类文档成员的概率。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));obj2 << Save Probabilities;

```

#### Save Probability Formulas

**语法:** obj &lt;&lt; Save Probability Formulas

**说明:** 将每个聚类公式列以及最可能聚类的公式列保存至数据表。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));obj2 << Save Probability Formulas;

```

#### Set Random Seed

**语法:** obj &lt;&lt; Latent Class Analysis( Set Random Seed( number ) )

**说明:** 设置分析的随机种子。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ),	Set Random Seed( 1234 ));

```

#### Term Probabilities by Cluster

**语法:** obj &lt;&lt; Term Probabilities by Cluster( state=0|1 )

**说明:** 显示或隐藏包含每个聚类的估计值的词条表。估计值是假定文档属于特定聚类的情况下文档包含词条的条件概率。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));Wait( 1 );obj2 << Term Probabilities by Cluster( 0 );

```

#### Top Terms by Cluster

**语法:** obj &lt;&lt; Top Terms by Cluster( state=0|1 )

**说明:** 显示或隐藏每个聚类中具有最高得分的十个词条的表。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));Wait( 1 );obj2 << Top Terms by Cluster( 0 );

```

#### Word Clouds by Cluster

**语法:** obj &lt;&lt; Word Clouds by Cluster( state=0|1 )

**说明:** 显示或隐藏词云矩阵，每个聚类对应一个矩阵。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Class Analysis(	Number of Clusters( 5 ),	Maximum Number of Terms( 10 ),	Minimum Term Frequency( 2 ));obj2 << Word Clouds by Cluster( 1 );

```

## SVD Analysis > Topic Analysis

### 关联的构造器

#### Rotated SVD

**语法:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**说明:** 执行文档词条矩阵的最大方差法旋转奇异值分解，以生成称为主题的词条组。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### Topic Analysis

**语法:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**说明:** 执行文档词条矩阵的最大方差法旋转奇异值分解，以生成称为主题的词条组。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );

```

### 项消息

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 从 SVD 报表中删除“主题分析”报表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Wait( 1 );obj3 << Remove;

```

#### Rename Topics

**语法:** obj &lt;&lt; Rename Topics

**说明:** 允许您为一个或多个主题添加说明性名称。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Wait( 1 );obj3 << Rename Topics( "Too Busy", "Less Often", "Difficult", "Bed", "Week" );

```

#### Rotation Matrix

**语法:** obj &lt;&lt; Rotation Matrix( state=0|1 )

**说明:** 显示或隐藏最大方差法旋转的旋转矩阵。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );obj3 << Rotation Matrix( 1 );Report( obj )["Rotation Matrix"] << Close( 0 );

```

#### Save Document Topic Vectors

**语法:** obj &lt;&lt; Save Document Topic Vectors

**说明:** 将主题分析中的奇异向量保存至数据表中的新列。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );obj3 << Save Document Topic Vectors;

```

#### Save Item Topic Vectors

**语法:** obj &lt;&lt; Save Item Topic Vectors

**说明:** 将主题向量保存至新的“项主题得分”数据表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );obj3 << Save Item Topic Vectors;

```

#### Save Term Topic Vectors

**语法:** obj &lt;&lt; Save Term Topic Vectors

**说明:** 将主题分析中的主题向量另存为新数据表中的列。若“词条表”已打开，则列保存至该数据表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );obj << Save Term Table;obj3 << Save Term Topic Vectors;

```

#### Save Topic Vector Formula

**语法:** obj &lt;&lt; Save Topic Vector Formula

**说明:** 将包含旋转奇异值分解的具有“向量”建模类型的公式保存至数据表。生成的列使用 Text Score 函数。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );obj3 << Save Topic Vector Formula;

```

#### Save Transaction Topic Vectors

**语法:** obj &lt;&lt; Save Transaction Topic Vectors

**说明:** 将旋转奇异值分解（主题向量）中用户指定数量的奇异向量保存至数据表中的新列。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );obj3 << Save Transaction Topic Vectors;

```

#### Top Loadings by Topic

**语法:** obj &lt;&lt; Top Loadings by Topic( state=0|1 )

**说明:** 显示或隐藏“按主题划分的前几位载荷”报表，它包含每个主题的词条表。每个表中的词条是每个主题具有最大绝对值载荷的词条。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Wait( 1 );obj3 << Top Loadings by Topic( 0 );

```

#### Topic Loadings

**语法:** obj &lt;&lt; Topic Loadings( state=0|1 )

**说明:** 显示或隐藏“主题载荷”表，它包含不同主题下每个词条的载荷矩阵。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Report( obj )["Topic Loadings"] << Close( 0 );Wait( 1 );obj3 << Topic Loadings( 0 );

```

#### Topic Scatterplot Matrix

**语法:** obj &lt;&lt; Topic Scatterplot Matrix( state=0|1 )

**说明:** 显示或隐藏旋转奇异值分解向量的散点图矩阵。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Wait( 1 );obj3 << Topic Scatterplot Matrix( 1 );

```

#### Topic Scores

**语法:** obj &lt;&lt; Topic Scores( state=0|1 )

**说明:** 显示或隐藏不同主题下每个文档的得分矩阵。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Report( obj )["Topic Scores"] << Close( 0 );Wait( 1 );obj3 << Topic Scores( 0 );

```

#### Topic Scores Plots

**语法:** obj &lt;&lt; Topic Scores Plots( state=0|1 )

**说明:** 显示或隐藏包含每个文档的主题得分图的报表。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Report( obj )["Topic Scores Plots"] << Close( 0 );Wait( 1 );obj3 << Topic Scores Plots( 0 );

```

#### Variance Explained by Each Topic

**语法:** obj &lt;&lt; Variance Explained by Each Topic( state=0|1 )

**说明:** 显示或隐藏包含每个主题解释的方差的表。该表还包括每个主题解释的方差百分比和累积百分比的列。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Wait( 1 );obj3 << Variance Explained by Each Topic( 1 );Report( obj )["Variance Explained by Each Topic"] << Close( 0 );

```

#### Word Clouds by Topic

**语法:** obj &lt;&lt; Word Clouds by Topic( state=0|1 )

**说明:** 显示或隐藏词云矩阵，每个主题对应一个矩阵。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer(	TextColumns( :Reasons Not to Floss ),	Show Term List( 0 ),	Show Phrase List( 0 ),	Show Summary Counts( 0 ));obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj3 = obj2 << Topic Analysis( Number of Topics( 5 ) );Wait( 1 );obj3 << Word Clouds by Topic( 1 );Report( obj )["Word Clouds by Topic"] << Close( 0 );

```

## SVD Analysis

### 关联的构造器

#### Latent Semantic Analysis

**语法:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**说明:** 执行文档词条矩阵的稀疏奇异值分解。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));

```

#### SVD

**语法:** obj &lt;&lt; Latent Semantic Analysis( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) ); obj &lt;&lt; SVD( Maximum Number of Terms( number ), Minimum Term Frequency( number ), Weighting( "Binary"|"Ternary"|"Frequency"|"Log Freq"|"TF IDF" ), Number of Singular Vectors( number ), Centering and Scaling( "Centered and Scaled",|"Centered"|"Uncentered" ) )

**说明:** 执行文档词条矩阵的稀疏奇异值分解。

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));

```

### 项消息

#### Cluster Documents

**语法:** obj &lt;&lt; Cluster Documents( state=0|1 )

**说明:** 显示或隐藏数据中文档的层次聚类分析。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Cluster Documents( 1 );

```

#### Cluster Items

**语法:** obj &lt;&lt; Cluster Items( state=0|1 )

**说明:** 显示或隐藏数据中词条的层次聚类分析。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );obj2 = obj << SVD( Number of Singular Vectors( 20 ) );obj2 << Cluster Items( 1 );

```

#### Cluster Terms

**语法:** obj &lt;&lt; Cluster Terms( state=0|1 )

**说明:** 显示或隐藏数据中词条的层次聚类分析。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << obj << Cluster Terms( 1 );

```

#### Cluster Transactions

**语法:** obj &lt;&lt; Cluster Transactions( state=0|1 )

**说明:** 显示或隐藏数据中文档的层次聚类分析。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA\Grocery Purchases.jmp" );obj = dt << Association Analysis( Item( :Product ), ID( :Customer ID ) );obj2 = obj << SVD( Number of Singular Vectors( 20 ) );obj2 << Cluster Transactions( 1 );

```

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 从“文本分析器”报表窗口中删除 SVD 报表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));Wait( 1 );obj2 << Remove;

```

#### Rotated SVD

**语法:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**说明:** 执行文档词条矩阵的最大方差法旋转奇异值分解，以生成称为主题的词条组。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj << Show Term List( 0 );obj << Show Phrase List( 0 );obj << Show Summary Counts( 0 );obj2 << Topic Analysis( Number of Topics( 5 ) );

```

#### SVD Scatterplot Matrix

**语法:** obj &lt;&lt; SVD Scatterplot Matrix( state=0|1, Number of Vectors( number ) )

**说明:** 为每个 SVD 图显示或隐藏词条和文档奇异值分解向量的散点图矩阵。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << SVD Scatterplot Matrix( 1, Number of Vectors( 8 ) );

```

#### Save Document Singular Vectors

**语法:** obj &lt;&lt; Save Document Singular Vectors(number)

**说明:** 将文档奇异值分解中指定数量的奇异向量保存至数据表中的新列。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Save Document Singular Vectors( 5 );

```

#### Save Item SVD

**语法:** obj &lt;&lt; Save Item SVD

**说明:** 创建包含您为每个项指定的奇异向量数的数据表。这些是交易项矩阵中的右奇异值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Save Item SVD( 5 );

```

#### Save Item Singular Vectors

**语法:** obj &lt;&lt; Save Item Singular Vectors

**说明:** 创建包含您为每个项指定的奇异向量数的数据表。这些是交易项矩阵中的右奇异值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Save Item Singular Vectors( 5 );

```

#### Save Singular Vector Formula

**语法:** obj &lt;&lt; Save Singular Vector Formula

**说明:** 将包含文档奇异值分解的向量值公式列保存至数据表。公式列使用 Text Score 函数。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Save Singular Vector Formula;

```

#### Save Term Singular Vectors

**语法:** obj &lt;&lt; Save Term Singular Vectors( number )

**说明:** 将词条奇异值分解中指定数量的奇异向量另存为新数据表中的列。每行对应一个词条。若“词条表”已打开，则列保存至该数据表。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Save Term Singular Vectors( 5 );

```

#### Save Transaction SVD

**语法:** obj &lt;&lt; Save Transaction SVD

**说明:** 创建包含您为每个交易指定的奇异向量数的数据表。这些是交易项矩阵中的左奇异值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Save Transaction SVD( 5 );

```

#### Save Transaction Singular Vectors

**语法:** obj &lt;&lt; Save Transaction Singular Vectors

**说明:** 创建包含您为每个交易指定的奇异向量数的数据表。这些是交易项矩阵中的左奇异值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj2 << Save Transaction Singular Vectors( 5 );

```

#### Select Near Neighbors

**语法:** obj &lt;&lt; Select Near Neighbors( number=10 )

**说明:** 查找并选择文档 SVD 图中所选点的 k 最近邻。 默认为“10”。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));dt << Select Rows( [102, 237] );obj2 << Select Near Neighbors( 8 );

```

#### Topic Analysis

**语法:** obj &lt;&lt; Topic Analysis( Number of Topics ( number ) ) obj &lt;&lt; Rotated SVD( Number of Topics( number ) )

**说明:** 执行文档词条矩阵的最大方差法旋转奇异值分解，以生成称为主题的词条组。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = Text Explorer( TextColumns( :Reasons Not to Floss ) );obj2 = obj << Latent Semantic Analysis(	Maximum Number of Terms( 100 ),	Minimum Term Frequency( 4 ),	Weighting( "TF IDF" ),	Number of Singular Vectors( 50 ),	Centering and Scaling( "Centered" ));obj << Show Term List( 0 );obj << Show Phrase List( 0 );obj << Show Summary Counts( 0 );obj2 << Topic Analysis( Number of Topics( 5 ) );

```

## Sentiment Analysis

### 关联的构造器

#### Sentiment Analysis

**语法:** Sentiment Analysis( state=0|1 )

**说明:** 使用词法分析识别文档中的情感词条，并对文档的正面、负面和整体情感进行评分。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );

```

### 项消息

#### Add Feature Words

**语法:** obj &lt;&lt; Add Feature Words( list )

**说明:** 添加要评分为特征的单词列表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );sent << Add Feature Words( {"floss"} );

```

#### Add Intensifier Exception Words

**语法:** obj &lt;&lt; Add Intensifier Exception Words( list )

**说明:** 添加强化词条列表以从分析中删除。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Add Intensifier Exception Words( {"almost"} );

```

#### Add Intensifier Words

**语法:** obj &lt;&lt; Add Intensifier Words( {{&lt;word, multiplier&gt;}, {&lt;word&gt;, &lt;multiplier&gt;}, ... } )

**说明:** 添加在分析中用作强化词条的单词列表。乘数是浮点数，通常在 [-2, 2] 范围内。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Add Intensifier Words( {{"extreme", 1.8}, {"extremely", 1.8}} );

```

#### Add Negation Exception Words

**语法:** obj &lt;&lt; Add Negation Exception Words( list )

**说明:** 添加否定词条列表以从分析中删除。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Add Negation Exception Words( {"without"} );

```

#### Add Negation Words

**语法:** obj &lt;&lt; Add Negation Words( list )

**说明:** 添加在分析中用作否定词条的单词列表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Add Negation Words( {"dont"} );

```

#### Add Sentiment Exception Words

**语法:** obj &lt;&lt; Add Sentiment Exception Words( list )

**说明:** 添加情感词条列表以从分析中删除。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Add Sentiment Exception Words( {"easy"} );

```

#### Add Sentiment Words

**语法:** obj &lt;&lt; Add Sentiment Words( {{&lt;word&gt;, &lt;score&gt;}, {&lt;word&gt;, &lt;score&gt;}, ... } )

**说明:** 添加在分析中用作情感词条的单词列表。得分是 [-100, 100] 范围内的整数。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Add Sentiment Words( {{"difficult", -70}, {"necessary", -20}} );

```

#### Include Builtin Intensifier Terms

**语法:** obj &lt;&lt; Include Builtin Intensifier Terms( state=0|1 )

**说明:** 指定将内置强化词条包括在用于情感分析的强化词条中。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Include Builtin Intensifier Terms( 0 );

```

#### Include Builtin Negation Terms

**语法:** obj &lt;&lt; Include Builtin Negation Terms( state=0|1 )

**说明:** 指定将内置否定词条包括在用于情感分析的否定词条中。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Include Builtin Negation Terms( 0 );

```

#### Include Builtin Sentiment Terms

**语法:** obj &lt;&lt; Include Builtin Sentiment Terms( state=0|1 )

**说明:** 指定内置情感词条包括在用于情感分析的情感词条中。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Include Builtin Sentiment Terms( 0 );

```

#### Parse Documents

**语法:** obj &lt;&lt; Parse Documents( state=0|1 )

**说明:** 指定自然语言处理 (NLP) 用于解析文档。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Parse Documents( 0 );

```

#### Save Count of Sentiment Scores by Document

**语法:** obj &lt;&lt; Save Count of Sentiment Scores by Document

**说明:** 为每个情感词条将一列保存至数据表。每列包含每个情感词条在每个文档中出现次数的计数。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );sent << Save Count of Sentiment Scores by Document;

```

#### Save Document Scores

**语法:** obj &lt;&lt; Save Document Scores

**说明:** 将文档得分保存至数据表中的新列。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );sent << Save Document Scores;

```

#### Score Column

**语法:** obj &lt;&lt; Score Column( column )

**说明:** 指定一列，其中包含要与计算情感进行比较的已知信息。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );sent << Score Column( :Gender );

```

#### Scoring

**语法:** obj &lt;&lt; Scoring( "统一尺度"|"最小最大值" )

**说明:** 设置评分风格以计算文档的总得分。“统一尺度”选项将肯定和否定短语的得分相加，然后除以短语数量。“最小最大”选项计算为最高正得分和最低负得分的总和。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Wait( 1 );sent << Scoring( "Min Max" );

```

#### Show Feature Finder

**语法:** obj &lt;&lt; Show Feature Finder( state=0|1 )

**说明:** 显示或隐藏一个报表，使您可以按选定的特征划分情感。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Report( obj )["Features"] << Close( 0 );Wait( 2 );sent << Show Feature Finder( 0 );

```

#### Show Intensifier Terms

**语法:** obj &lt;&lt; Show Intensifier Terms( state=0|1 )

**说明:** 显示或隐藏强化词条的表。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Report( obj )["Intensifier Terms"] << Close( 0 );Wait( 2 );sent << Show Intensifier Terms( 0 );

```

#### Show Negation Terms

**语法:** obj &lt;&lt; Show Negation Terms( state=0|1 )

**说明:** 显示或隐藏否定词条的表。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Report( obj )["Negation Terms"] << Close( 0 );Wait( 2 );sent << Show Negation Terms( 0 );

```

#### Show Sentiment Cloud

**语法:** obj &lt;&lt; Show Sentiment Cloud( state=0|1 )

**说明:** 显示或隐藏情感短语的词云。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );sent << Show Sentiment Cloud( 1 );

```

#### Show Sentiment Terms

**语法:** obj &lt;&lt; Show Sentiment Terms( state=0|1 )

**说明:** 显示或隐藏情感词条的表。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );sent = obj << Sentiment Analysis( 1 );Report( obj )["Sentiment Terms"] << Close( 0 );Wait( 2 );sent << Show Sentiment Terms( 0 );

```

## Term Selection

### 关联的构造器

#### Term Selection

**语法:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )), Model Choice( &lt;index&gt; ))

**说明:** 分析哪些词条对不同的响应解释得最好。当响应为评级时，词条选择也可用于情感分析。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));

```

### 项消息

#### Model Choice

**语法:** obj &lt;&lt; Term Selection( Model Choice(&lt;index&gt;) )

**说明:** 指定哪个模型是汇总区域的当前模型。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));

```

#### Models

**语法:** obj &lt;&lt; Term Selection( Models( Model( Response Column( &lt;column&gt; ), &lt;other models&gt; )))

**说明:** 指定生成模型所需的信息。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));

```

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 从“文本分析器”报表窗口中删除“词条选择”报表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));Wait( 1 );term << Remove;

```

#### Save Document Scores

**语法:** obj &lt;&lt; Save Document Scores

**说明:** 将文档得分保存至数据表中的新列。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));term << Save Document Scores;

```

#### Save Prediction Formulas

**语法:** obj &lt;&lt; Save Prediction Formulas

**说明:** 将包含当前所选分析的预测公式的列保存至数据表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));term << Save Prediction Formulas;

```

#### Save Term Score DTM

**语法:** obj &lt;&lt; Save Term Score DTM

**说明:** 将当前所选分析中每个相关词条的列保存至数据表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));term << Save Term Score DTM;

```

#### Show Term Cloud

**语法:** obj &lt;&lt; Show Term Cloud( state=0|1 )

**说明:** 显示或隐藏系数词条的词云。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Text Explorer( Text Columns( :Reasons Not to Floss ), Language( "English" ) );term = obj << Term Selection(	Models(		Model(			Response Column( :Gender ),			Fits(				First Fit(					Fit(						Estimation Method( Elastic Net ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Model(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) ),			Fits(				First Fit(					Fit(						Estimation Method( Lasso ),						Validation Method( AICc ),						Early Stopping,						Model Summary( 0 ),						Parameter Estimates for Original Predictors( 0 ),						Effect Tests( 0 )					)				)			)		),		Current Model Settings(			Response Column( :Single Status ),			Target Levels( Target Number( 1 ), Target String( "1" ) ),			Fit Settings( Estimation Method( Lasso ) )		)	),	Model Choice( 2 ));term << Show Term Cloud;

```

