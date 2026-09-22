# Surface Plot



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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Surface Plot(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Surface Plot

**语法:** Surface Plot( Columns() )

**说明:** 生成由保存的公式定义的点或曲面构成的旋转三维图。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

## 列

### By

**语法:** obj &lt;&lt; By( column(s) )

**说明:** 生成多个报表，每个报表对应变量的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**语法:** obj &lt;&lt; Columns( column(s) )

**说明:** 可用于 3D 图形中 X、Y 和 Z 坐标的变量。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :silane, :silica, :hardness ) );

```

### Factors

**语法:** obj &lt;&lt; Factors( column(s) )

**说明:** 可用于 3D 图形中 X、Y 和 Z 坐标的变量。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Factors( :silane, :silica, :hardness ) );

```

## 项消息

### Clip Sheet

**语法:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**说明:** 在第一个响应列公式中使用的列的范围内剪切曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );Wait( 1 );obj << Clip Sheet( 1 );

```

### Clip Sheet1

**语法:** obj &lt;&lt; Clip Sheet( state=0|1 ); obj &lt;&lt; Clip Sheet1( state=0|1 )

**说明:** 在第一个响应列公式中使用的列的范围内剪切曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );Wait( 1 );obj << Clip Sheet( 1 );

```

### Clip Sheet2

**语法:** obj &lt;&lt; Clip Sheet2( state=0|1 )

**说明:** 在第二个响应列公式中使用的列的范围内剪切曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );obj << Show Surface2( "Both Sides" );Wait( 1 );obj << Clip Sheet2( 1 );

```

### Clip Sheet3

**语法:** obj &lt;&lt; Clip Sheet3( state=0|1 )

**说明:** 在第三个响应列公式中使用的列的范围内剪切曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Show Surface3( "Both sides" );Wait( 1 );obj << Clip Sheet3( 1 );

```

### Clip Sheet4

**语法:** obj &lt;&lt; Clip Sheet4( state=0|1 )

**说明:** 在第四个响应列公式中使用的列的范围内剪切曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,		:Pred Formula HARDNESS	));obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",	:Pred Formula HARDNESS);obj << Show Surface4( "Both sides" );Wait( 1 );obj << Clip Sheet4( 1 );

```

### Contour Color

**语法:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**说明:** 指定第一个响应的曲面上的等高线的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Contour Color( {255, 128, 0} );

```

### Contour Color1

**语法:** obj &lt;&lt; Contour Color( color ); obj &lt;&lt; Contour Color1( color )

**说明:** 指定第一个响应的曲面上的等高线的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Contour( "On Surface" ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Contour Color( {255, 128, 0} );

```

### Contour Color2

**语法:** obj &lt;&lt; Contour Color2( color )

**说明:** 指定第二个响应的曲面上的等高线的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both Sides" ));obj << Show Contour2( "On Surface" );Wait( 1 );obj << Contour Color2( {255, 128, 0} );

```

### Contour Color3

**语法:** obj &lt;&lt; Contour Color3( color )

**说明:** 指定第三个响应的曲面上的等高线的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Show Contour3( "On Surface" );Wait( 1 );obj << Contour Color3( {255, 0, 0} );

```

### Contour Color4

**语法:** obj &lt;&lt; Contour Color4( color )

**说明:** 指定第四个响应的曲面上的等高线的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ),	Show Surface1( "Off" ));obj << Show Contour4( "On Surface" );Wait( 1 );obj << Contour Color4( {100, 0, 200} );

```

### Control Panel

**语法:** obj &lt;&lt; Control Panel( state=0|1 )

**说明:** 显示或隐藏“控制面板”，其中包括用于外观、自变量和因变量的控件。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Control Panel( 0 );

```

### Data points Color

**语法:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**说明:** 为曲面上绘制的第一个因变量更改数据点的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Mesh" );obj << Data Points Color( {0, 0, 255} );

```

### Data points Color1

**语法:** obj &lt;&lt; Data Points Color( color ); obj &lt;&lt; Data Points Color1( color )

**说明:** 为曲面上绘制的第一个因变量更改数据点的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Mesh" );obj << Data Points Color( {0, 0, 255} );

```

### Data points Color2

**语法:** obj &lt;&lt; Data points Color2( color )

**说明:** 为曲面上绘制的第二个因变量更改数据点的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Response( "Pred Formula MODULUS", :Pred Formula MODULUS );obj << Datapoints Choice2( "Mesh" );obj << Data Points Color2( {0, 0, 255} );

```

### Data points Color3

**语法:** obj &lt;&lt; Data points Color3( color )

**说明:** 为曲面上绘制的第三个因变量更改数据点的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Datapoints Choice3( "Needles" );obj << Data Points Color3( {255, 0, 0} );

```

### Data points Color4

**语法:** obj &lt;&lt; Data points Color4( color )

**说明:** 为曲面上绘制的第四个因变量更改数据点的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Datapoints Choice4( "Surface" );obj << Data points Color4( 100, 0, 200 );obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",	:Pred Formula HARDNESS);obj << Frame3D( Set Rotation( -79.3688859847019, -1.23001727812475, 27.7096879560307 ) );

```

### Datapoints Choice

**语法:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**说明:** 指定第一个响应的曲面上的点如何显示。默认样式为“点”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice1

**语法:** obj &lt;&lt; Datapoints Choice( "Off"|"Points"|"Needles"|"Mesh"|"Surface" ); obj &lt;&lt; Datapoints Choice1( "Off"|"Points"|"Needles"|"Mesh"|"Surface" )

**说明:** 指定第一个响应的曲面上的点如何显示。默认样式为“点”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( :Pred Formula ABRASION );obj << Datapoints Choice( "Needles" );

```

### Datapoints Choice2

**语法:** obj &lt;&lt; Datapoints Choice2( "关闭"|"点"|"针"|"网线"|"曲面" )

**说明:** 指定第二个响应的曲面上的点如何显示。默认样式为“点”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( ":Pred Formula MODULUS", :Pred Formula MODULUS );Wait( 1 );obj << Datapoints Choice2( "Off" );

```

### Datapoints Choice3

**语法:** obj &lt;&lt; Datapoints Choice3( "关闭"|"点"|"针"|"网线"|"曲面" )

**说明:** 指定第三个响应的曲面上的点如何显示。默认样式为“点”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG );obj << Datapoints Choice3( "Mesh" );

```

### Datapoints Choice4

**语法:** obj &lt;&lt; Datapoints Choice4( "关闭"|"点"|"针"|"网线"|"曲面" )

**说明:** 指定第四个响应的曲面上的点如何显示。默认样式为“点”选项。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,		:Pred Formula HARDNESS	));obj << Response(	"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",	:Pred Formula HARDNESS);obj << Datapoints Choice4( "Surface" );

```

### Dependent Variables Points

**语法:** obj &lt;&lt; Dependent Variables Points( state=0|1 )

**说明:** 显示或隐藏“因变量”控件中的点选项。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Dependent Variables Points( 0 );

```

### Dependent Variables Response Grid

**语法:** obj &lt;&lt; Dependent Variables Response Grid( state=0|1 )

**说明:** 显示或隐藏“因变量”控件中的网格选项。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Dependent Variables Response Grid( 0 );

```

### Equation

**语法:** obj &lt;&lt; Equation( equation1, &lt;equation2&gt;, &lt;equation3&gt;, &lt;equation4&gt; )

**说明:** 在“因变量”部分中按指定顺序为面指定方程式。要跳过一个响应，请使用句点指定缺失值。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ));obj << Show Surface2( "Both sides" );obj << Equation( ., ".7*:Silane+5*:Silica" );obj << Show Formula( 1 );

```

### Fit to Window

**语法:** obj &lt;&lt; Fit to Window( "自动"|"开"|"关" )

**说明:** 设置报表的自动拉伸行为。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Fit to Window( "Off" );

```

### Formula

**语法:** obj &lt;&lt; Formula( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**说明:** 将列中的公式以指定顺序分配给“因变量”部分中的工作表。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Datapoints Choice2( "Surface" ));obj << Show Surface2( "Both sides" );obj << Formula( :Pred Formula ABRASION, :Pred Formula ELONG );

```

### Frame3D

**语法:** obj &lt;&lt; Frame3D( Scatterplot 3D options )

**说明:** 更改曲面上的显示选项。该选项使用“三维散点图”平台中的消息。详细信息，请参见“三维散点图”下的完整说明。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Frame3D(	Set Graph Size( 692, 671 ),	Set Rotation( -54, 0, 38 ),	Background Color( 255, 177, 125 ));

```

### Hide Lights Border

**语法:** obj &lt;&lt; Hide Lights Border( state=0|1 )

**说明:** 显示或隐藏光源控件。

```jsl

obj = Surface Plot();Wait( 1 );obj << Hide Lights Border( 1 );

```

### Iso Value

**语法:** obj &lt;&lt; Iso Value( id, value )

**说明:** 更改特定因变量的等值面滑块的值。id 参数使用从零开始的索引来标识因变量。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Iso Value( 0, 100 );obj << Iso Value( 1, 1500 );

```

### Lock Z Scale

**语法:** obj &lt;&lt; Lock Z Scale( state=0|1 )

**说明:** 将 Z 轴锁定到其当前值。

```jsl

obj = Surface Plot();obj << Lock Z Scale( 1 );

```

### Mesh Color

**语法:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**说明:** 指定第一个因变量的曲面网线的颜色。该选项仅在为“网线”选项选择了“关闭”以外的值时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Show Mesh( "X and Y" );Wait( 1 );obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color1

**语法:** obj &lt;&lt; Mesh Color( color ); obj &lt;&lt; Mesh Color1( color )

**说明:** 指定第一个因变量的曲面网线的颜色。该选项仅在为“网线”选项选择了“关闭”以外的值时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Show Mesh( "X and Y" );Wait( 1 );obj << Mesh Color( {0, 0, 255} );

```

### Mesh Color2

**语法:** obj &lt;&lt; Mesh Color2( color )

**说明:** 指定第二个因变量的曲面网线的颜色。该选项仅在为“网线”选项选择了“关闭”以外的值时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Mode( "Isosurface" );obj << Show Mesh2( "X and Y" );Wait( 1 );obj << Mesh Color2( {255, 0, 0} );

```

### Mesh Color3

**语法:** obj &lt;&lt; Mesh Color3( color )

**说明:** 指定第三个因变量的曲面网线的颜色。该选项仅在为“网线”选项选择了“关闭”以外的值时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ));obj << Mode( "Isosurface" );obj << Show Mesh3( "X and Y" );Wait( 1 );obj << Mesh Color3( {50, 0, 100} );

```

### Mesh Color4

**语法:** obj &lt;&lt; Mesh Color4( color )

**说明:** 指定第四个因变量的曲面网线的颜色。该选项仅在为“网线”选项选择了“关闭”以外的值时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Mesh4( "X and Y" );Wait( 1 );obj << Mesh Color4( {0, 250, 0} );

```

### Mode

**语法:** obj &lt;&lt; Mode( "面，点"|"等值面"|"密度网格" )

**说明:** 指定图上的曲面如何显示。“面，点”选项在曲面上显示面、点和线。“等值面”选项使用具有三个自变量的公式。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface 2( "Both Sides" );obj << Show Surface 4( "Both Sides" );obj << Mode( "Isosurface" );

```

### Resolution

**语法:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**说明:** 更改用于绘制曲面图的分辨率。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### Response

**语法:** obj &lt;&lt; Response( column, &lt;column&gt;, &lt;column&gt;, &lt;column&gt; )

**说明:** 标识最多四个用于标绘叠加点的响应列。要跳过一个响应，请使用带引号的字符串作为占位符。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Datapoints Choice3( "Surface" ));obj << Response( :Pred Formula ABRASION, "", :Pred Formula ELONG );

```

### Response Column Color Theme

**语法:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**说明:** 更改第一个响应的曲面的颜色主题。该选项仅适用于使用连续渐变的点响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Continuous Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme1

**语法:** obj &lt;&lt; Response Column Color Theme( color theme ); obj &lt;&lt; Response Column Color Theme1( color theme )

**说明:** 更改第一个响应的曲面的颜色主题。该选项仅适用于使用连续渐变的点响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Continuous Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Color Theme( "Jet" );

```

### Response Column Color Theme2

**语法:** obj &lt;&lt; Response Column Color Theme2( color theme )

**说明:** 更改第二个响应的曲面的颜色主题。该选项仅适用于使用连续渐变的点响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Continuous Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Color Theme2( "White to Black" );

```

### Response Column Color Theme3

**语法:** obj &lt;&lt; Response Column Color Theme3( color theme )

**说明:** 更改第三个响应的曲面的颜色主题。该选项仅适用于使用连续渐变的点响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Continuous Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Color Theme3( "Blue to Gray to Red" );

```

### Response Column Color Theme4

**语法:** obj &lt;&lt; Response Column Color Theme4( color theme )

**说明:** 更改第四个响应的曲面的颜色主题。该选项仅适用于使用连续渐变的点响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Continuous Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Color Theme4( "White to Red" );

```

### Response Column Fill

**语法:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**说明:** 指定是使用纯色、连续渐变还是离散渐变对第一个曲面着色。该选项仅在使用从属点响应列生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill1

**语法:** obj &lt;&lt; Response Column Fill( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Response Column Fill1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**说明:** 指定是使用纯色、连续渐变还是离散渐变对第一个曲面着色。该选项仅在使用从属点响应列生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Fill( "Discrete Gradients" );

```

### Response Column Fill2

**语法:** obj &lt;&lt; Response Column Fill2( "纯色"|"连续渐变"|"离散渐变" )

**说明:** 指定是使用纯色、连续渐变还是离散渐变对第二个曲面着色。该选项仅在使用从属点响应列生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Fill2( "Continuous Gradients" );

```

### Response Column Fill3

**语法:** obj &lt;&lt; Response Column Fill3( "纯色"|"连续渐变"|"离散渐变" )

**说明:** 指定是使用纯色、连续渐变还是离散渐变对第三个曲面着色。该选项仅在使用从属点响应列生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Fill3( "Discrete Gradients" );

```

### Response Column Fill4

**语法:** obj &lt;&lt; Response Column Fill4( "纯色"|"连续渐变"|"离散渐变" )

**说明:** 指定是使用纯色、连续渐变还是离散渐变对第四个曲面着色。该选项仅在使用从属点响应列生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Fill4( "Continuous Gradients" );

```

### Response Column Gradient Lines

**语法:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**说明:** 显示或隐藏第一个响应的曲面上渐变水平之间的线。该选项仅在使用具有从属点列响应的离散渐变生成曲面时可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines1

**语法:** obj &lt;&lt; Response Column Gradient Lines( state=0|1 ); obj &lt;&lt; Response Column Gradient Lines1( state=0|1 )

**说明:** 显示或隐藏第一个响应的曲面上渐变水平之间的线。该选项仅在使用具有从属点列响应的离散渐变生成曲面时可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradient Lines( 0 );

```

### Response Column Gradient Lines2

**语法:** obj &lt;&lt; Response Column Gradient Lines2( state=0|1 )

**说明:** 显示或隐藏第二个响应的曲面上渐变水平之间的线。该选项仅在使用具有从属点列响应的离散渐变生成曲面时可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Discrete Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Gradient Lines2( 0 );

```

### Response Column Gradient Lines3

**语法:** obj &lt;&lt; Response Column Gradient Lines3( state=0|1 )

**说明:** 显示或隐藏第三个响应的曲面上渐变水平之间的线。该选项仅在使用具有从属点列响应的离散渐变生成曲面时可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Discrete Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));obj << Response Column Gradient Lines3( 0 );Wait( 1 );obj << Response Column Gradient Lines3( 1 );

```

### Response Column Gradient Lines4

**语法:** obj &lt;&lt; Response Column Gradient Lines4( state=0|1 )

**说明:** 显示或隐藏第四个响应的曲面上渐变水平之间的线。该选项仅在使用具有从属点列响应的离散渐变生成曲面时可用。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Discrete Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	),	Response Column Gradient Lines4( 0 ));Wait( 1 );obj << Response Column Gradient Lines4( 1 );

```

### Response Column Gradients

**语法:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**说明:** 指定第一个响应的曲面上的渐变数。该选项仅在使用具有从属点响应列的离散渐变生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradients( 9 );

```

### Response Column Gradients1

**语法:** obj &lt;&lt; Response Column Gradients( number ); obj &lt;&lt; Response Column Gradients1( number )

**说明:** 指定第一个响应的曲面上的渐变数。该选项仅在使用具有从属点响应列的离散渐变生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Equation( ., ., ., . ),	Datapoints Choice( "Surface" ),	Response Column Fill( "Discrete Gradients" ),	Response( :Pred Formula ABRASION ));Wait( 1 );obj << Response Column Gradients( 9 );

```

### Response Column Gradients2

**语法:** obj &lt;&lt; Response Column Gradients2( number )

**说明:** 指定第二个响应的曲面上的渐变数。该选项仅在使用具有从属点响应列的离散渐变生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Equation( ., ., ., . ),	Datapoints Choice2( "Surface" ),	Response Column Fill2( "Discrete Gradients" ),	Response( "Pred Formula MODULUS", :Pred Formula MODULUS ));Wait( 1 );obj << Response Column Gradients2( 8 );

```

### Response Column Gradients3

**语法:** obj &lt;&lt; Response Column Gradients3( number )

**说明:** 指定第三个响应的曲面上的渐变数。该选项仅在使用具有从属点响应列的离散渐变生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Equation( ., ., ., . ),	Datapoints Choice3( "Surface" ),	Response Column Fill3( "Discrete Gradients" ),	Response( "Pred Formula ELONG", "Pred Formula ELONG", :Pred Formula ELONG ));Wait( 1 );obj << Response Column Gradients3( 7 );

```

### Response Column Gradients4

**语法:** obj &lt;&lt; Response Column Gradients4( number )

**说明:** 指定第四个响应的曲面上的渐变数。该选项仅在使用具有从属点响应列的离散渐变生成曲面时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Equation( ., ., ., . ),	Datapoints Choice4( "Surface" ),	Response Column Fill4( "Discrete Gradients" ),	Response(		"Pred Formula HARDNESS", "Pred Formula HARDNESS", "Pred Formula HARDNESS",		:Pred Formula HARDNESS	));Wait( 1 );obj << Response Column Gradients4( 10 );

```

### Scale response axes independently

**语法:** obj = Surface Plot(...Scale response axes indenpendently( state=0|1 )...); obj &lt;&lt; Scale response axes independently( state=0|1 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定每个响应是否有单独的尺度，或所有响应的轴尺度是否与启动窗口中输入的第一个响应的尺度匹配。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Scale response axes independently( 1 ));obj << Show Surface4( "Both sides" );Wait( 1 );obj << Scale response axes independently( 0 );

```

### Set Z Variable

**语法:** obj &lt;&lt; Set Z Variable( column )

**说明:** 将指定列设置为曲面图上的 Z 变量。该选项仅适用于等值面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Mode( "Isosurface" ));obj << Set Y Variable( :SULFUR );Wait( 1 );obj << Set Z Variable( :SILANE );

```

### SetVariableAxis

**语法:** obj &lt;&lt; SetVariableAxis( column, &lt;Current Value( number )&gt;, &lt;Axis Data( axis options )&gt; )

**说明:** 为指定的自变量轴指定特性。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Variable Axis( :SULFUR, Current Value( 2.925 ) );Wait( 1 );obj << Set Variable Axis( :SILANE, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### SetXVariable

**语法:** obj &lt;&lt; SetXVariable( column )

**说明:** 将指定列设置为曲面图上的 X 变量。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set X Variable( :SULFUR );

```

### SetYVariable

**语法:** obj &lt;&lt; SetYVariable( column )

**说明:** 将指定列设置为曲面图上的 Y 变量。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Y Variable( :SULFUR );

```

### SetZAxis

**语法:** obj &lt;&lt; SetZAxis( column, Current Value( number ), &lt;Axis Data( axis options )&gt; )

**说明:** 指定 Z 轴的特性。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Set Z Axis( :Pred Formula ABRASION, Axis Data( {Format( "Fixed", 8, 1 )} ) );

```

### Show Contour

**语法:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**说明:** 指定等高线在图上相对于第一个响应的曲面的位置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Contour( "On Surface" );

```

### Show Contour1

**语法:** obj &lt;&lt; Show Contour( "Off"|"Below"|"Above"|"On Surface" ); obj &lt;&lt; Show Contour1( "Off"|"Below|Above"|"On Surface" )

**说明:** 指定等高线在图上相对于第一个响应的曲面的位置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Contour( "On Surface" );

```

### Show Contour2

**语法:** obj &lt;&lt; Show Contour2( "关闭"|"下层"|"上层"|"在曲面上" )

**说明:** 指定等高线在图上相对于第二个响应的曲面的位置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Contour2( "Above" );

```

### Show Contour3

**语法:** obj &lt;&lt; Show Contour3( "关闭"|"下层"|"上层"|"在曲面上" )

**说明:** 指定等高线在图上相对于第三个响应的曲面的位置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface3( "Both Sides" );Wait( 1 );obj << Show Contour3( "Below" );

```

### Show Contour4

**语法:** obj &lt;&lt; Show Contour4( "关闭"|"下层"|"上层"|"在曲面上" )

**说明:** 指定等高线在图上相对于第四个响应的曲面的位置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface4( "Both Sides" );Wait( 1 );obj << Show Contour4( "On Surface" );

```

### Show Mesh

**语法:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**说明:** 指定第一个响应的曲面网线的样式。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh( "X and Y" );

```

### Show Mesh1

**语法:** obj &lt;&lt; Show Mesh( "Off"|"X"|"Y"|"X and Y" ); obj &lt;&lt; Show Mesh1( "Off"|"X"|"Y"|"X and Y" )

**说明:** 指定第一个响应的曲面网线的样式。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh( "X and Y" );

```

### Show Mesh2

**语法:** obj &lt;&lt; Show Mesh2( "关闭"|"X 和 Y"|"X"|"Y" )

**说明:** 指定第二个响应的曲面网线的样式。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh2( "X" );

```

### Show Mesh3

**语法:** obj &lt;&lt; Show Mesh3( "关闭"|"X 和 Y"|"X"|"Y" )

**说明:** 指定第三个响应的曲面网线的样式。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh3( "Y" );

```

### Show Mesh4

**语法:** obj &lt;&lt; Show Mesh4( "关闭"|"X 和 Y"|"X"|"Y" )

**说明:** 指定第四个响应的曲面网线的样式。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Mesh4( "X and Y" );

```

### Show Surface

**语法:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**说明:** 指定第一个响应的曲面如何显示。该选项仅适用于由公式列响应生成的曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface( "Below Only" );

```

### Show Surface1

**语法:** obj &lt;&lt; Show Surface( "Off"|"Both sides"|"Above only"|"Below only" ); obj &lt;&lt; Show Surface1( "Off"|"Both sides"|"Above only"|"Below only" )

**说明:** 指定第一个响应的曲面如何显示。该选项仅适用于由公式列响应生成的曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface( "Below Only" );

```

### Show Surface2

**语法:** obj &lt;&lt; Show Surface2( "关闭"|"两侧"|"仅上层"|"仅下层" )

**说明:** 指定第二个响应的曲面如何显示。该选项仅适用于由公式列响应生成的曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface2( "Both Sides" );

```

### Show Surface3

**语法:** obj &lt;&lt; Show Surface3( "关闭"|"两侧"|"仅上层"|"仅下层" )

**说明:** 指定第三个响应的曲面如何显示。该选项仅适用于由公式列响应生成的曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface3( "Above Only" );

```

### Show Surface4

**语法:** obj &lt;&lt; Show Surface4( "关闭"|"两侧"|"仅上层"|"仅下层" )

**说明:** 指定第四个响应的曲面如何显示。该选项仅适用于由公式列响应生成的曲面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ELONG, :Pred Formula ABRASION, :Pred Formula MODULUS,		:Pred Formula HARDNESS	));Wait( 1 );obj << Show Surface4( "Both Sides" );

```

### Show formula

**语法:** obj &lt;&lt; Show formula( state=0|1 )

**说明:** 显示或隐藏当前显示在曲面图中的所有因变量的公式。

```jsl

obj = Surface Plot();obj << Show Formula( 1 );

```

### Surface Alpha

**语法:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**说明:** 指定第一个响应变量的等值面的不透明度。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );Wait( 1 );obj << Surface Alpha( 0.25 );

```

### Surface Alpha1

**语法:** obj &lt;&lt; Surface Alpha( number ); obj &lt;&lt; Surface Alpha1( number )

**说明:** 指定第一个响应变量的等值面的不透明度。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );Wait( 1 );obj << Surface Alpha( 0.25 );

```

### Surface Alpha2

**语法:** obj &lt;&lt; Surface Alpha2( number )

**说明:** 指定第二个响应变量的等值面的不透明度。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Surface2( "Both sides" );Wait( 1 );obj << Surface Alpha2( 0.3 );

```

### Surface Alpha3

**语法:** obj &lt;&lt; Surface Alpha3( number )

**说明:** 指定第三个响应变量的等值面的不透明度。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Surface3( "Both sides" );Wait( 1 );obj << Surface Alpha3( 0.75 );

```

### Surface Alpha4

**语法:** obj &lt;&lt; Surface Alpha4( number )

**说明:** 指定第四个响应变量的等值面的不透明度。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Mode( "Isosurface" );obj << Show Surface4( "Both sides" );Wait( 1 );obj << Surface Alpha4( 0.90 );

```

### Surface Color

**语法:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**说明:** 指定填充类型为实心时第一个响应的曲面的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );Wait( 1 );obj << Surface Color( {0, 0, 255} );

```

### Surface Color Method

**语法:** obj &lt;&lt; Surface Color Method( "Solid"|formula, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt;, &lt;"Solid"|formula&gt; )

**说明:** 指定用于为四个可能的曲面中的每个曲面着色的方法。请注意，公式可能不同于用于绘制曲面的公式。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Theme2( "Blue to Gray to Red" );

```

### Surface Color Range

**语法:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**说明:** 指定第一个响应的曲面上的颜色渐变的终点。该选项仅在使用了渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface( "Both Sides" ));obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Range( "Axis" );

```

### Surface Color Range1

**语法:** obj &lt;&lt; Surface Color Range( "Data"|"Axis" ); obj &lt;&lt; Surface Color Range1( "Data"|"Axis" )

**说明:** 指定第一个响应的曲面上的颜色渐变的终点。该选项仅在使用了渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface( "Both Sides" ));obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Range( "Axis" );

```

### Surface Color Range2

**语法:** obj &lt;&lt; Surface Color Range2( "数据"|"坐标轴" )

**说明:** 指定第二个响应的曲面上的颜色渐变的终点。该选项仅在使用了渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface2( "Both Sides" ));obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Range2( "Data" );

```

### Surface Color Range3

**语法:** obj &lt;&lt; Surface Color Range3( "数据"|"坐标轴" )

**说明:** 指定第三个响应的曲面上的颜色渐变的终点。该选项仅在使用了渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface3( "Both Sides" ));obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Color Range3( "Axis" );

```

### Surface Color Range4

**语法:** obj &lt;&lt; Surface Color Range4( "数据"|"坐标轴" )

**说明:** 指定第四个响应的曲面上的颜色渐变的终点。该选项仅在使用了渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Color Range4( "Data" );

```

### Surface Color Theme

**语法:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**说明:** 指定第一个响应的曲面的颜色主题。该选项仅适用于使用梯度的公式响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme1

**语法:** obj &lt;&lt; Surface Color Theme( color theme ); obj &lt;&lt; Surface Color Theme1( color theme )

**说明:** 指定第一个响应的曲面的颜色主题。该选项仅适用于使用梯度的公式响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Color Theme( "Blue to Gray to Red" );

```

### Surface Color Theme2

**语法:** obj &lt;&lt; Surface Color Theme2( color theme )

**说明:** 指定第二个响应的曲面的颜色主题。该选项仅适用于使用梯度的公式响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));obj << Surface Gradient Type2( "Continuous Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Color Theme2( "White to Black" );

```

### Surface Color Theme3

**语法:** obj &lt;&lt; Surface Color Theme3( color theme )

**说明:** 指定第三个响应的曲面的颜色主题。该选项仅适用于使用梯度的公式响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Surface Gradient Type3( "Continuous Gradients" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Color Theme3( "Spectral" );

```

### Surface Color Theme4

**语法:** obj &lt;&lt; Surface Color Theme4( color theme )

**说明:** 指定第四个响应的曲面的颜色主题。该选项仅适用于使用梯度的公式响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));obj << Surface Gradient Type4( "Continuous Gradients" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Color Theme4( "Jet" );

```

### Surface Color1

**语法:** obj &lt;&lt; Surface Color( color ); obj &lt;&lt; Surface Color1( color )

**说明:** 指定填充类型为实心时第一个响应的曲面的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ), Show Surface( "Both Sides" ) );Wait( 1 );obj << Surface Color( {0, 0, 255} );

```

### Surface Color2

**语法:** obj &lt;&lt; Surface Color2( color )

**说明:** 指定填充类型为实心时第二个响应的曲面的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both Sides" ));obj << Surface Color2( {255, 128, 0} );

```

### Surface Color3

**语法:** obj &lt;&lt; Surface Color3( color )

**说明:** 指定填充类型为实心时第三个响应的曲面的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));obj << Surface Color3( {255, 0, 0} );

```

### Surface Color4

**语法:** obj &lt;&lt; Surface Color4( color )

**说明:** 指定填充类型为实心时第四个响应的曲面的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));obj << Surface Color4( {100, 0, 200} );

```

### Surface Gradient Type

**语法:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**说明:** 指定第一个响应的曲面的填充类型。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type1

**语法:** obj &lt;&lt; Surface Gradient Type( "Solid"|"Continuous Gradients"|"Discrete Gradients" ); obj &lt;&lt; Surface Gradient Type1( "Solid"|"Continuous Gradients"|"Discrete Gradients" )

**说明:** 指定第一个响应的曲面的填充类型。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << Surface Gradient Type( "Continuous Gradients" );obj << Surface Color Method( ":Pred Formula ABRASION" );

```

### Surface Gradient Type2

**语法:** obj &lt;&lt; Surface Gradient Type2( "纯色"|"连续渐变"|"离散渐变" )

**说明:** 指定第二个响应的曲面的填充类型。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ));Wait( 1 );obj << Surface Gradient Type2( "Discrete Gradients" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );

```

### Surface Gradient Type3

**语法:** obj &lt;&lt; Surface Gradient Type3( "纯色"|"连续渐变"|"离散渐变" )

**说明:** 指定第三个响应的曲面的填充类型。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both Sides" ));Wait( 1 );obj << Surface Gradient Type3( "Solid" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );

```

### Surface Gradient Type4

**语法:** obj &lt;&lt; Surface Gradient Type4( "纯色"|"连续渐变"|"离散渐变" )

**说明:** 指定第四个响应的曲面的填充类型。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both Sides" ));Wait( 1 );obj << Surface Gradient Type4( "Discrete Gradients" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );

```

### Surface Gradients

**语法:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**说明:** 指定第一个响应的曲面上的渐变线个数。该选项仅在使用了离散渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Surface Color Method( ":Pred Formula ABRASION" ));obj << Surface Gradient Type( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients( 9 );

```

### Surface Gradients1

**语法:** obj &lt;&lt; Surface Gradients( number ); obj &lt;&lt; Surface Gradients1( number )

**说明:** 指定第一个响应的曲面上的渐变线个数。该选项仅在使用了离散渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION ),	Surface Color Method( ":Pred Formula ABRASION" ));obj << Surface Gradient Type( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients( 9 );

```

### Surface Gradients2

**语法:** obj &lt;&lt; Surface Gradients2( number )

**说明:** 指定第二个响应的曲面上的渐变线个数。该选项仅在使用了离散渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ),	Show Surface2( "Both sides" ),	Surface Color Method( "Solid", ":Pred Formula MODULUS" ));obj << Surface Gradient Type2( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients2( 8 );

```

### Surface Gradients3

**语法:** obj &lt;&lt; Surface Gradients3( number )

**说明:** 指定第三个响应的曲面上的渐变线个数。该选项仅在使用了离散渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns( :Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG ),	Show Surface3( "Both sides" ),	Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" ));obj << Surface Gradient Type3( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients3( 10 );

```

### Surface Gradients4

**语法:** obj &lt;&lt; Surface Gradients4( number )

**说明:** 指定第四个响应的曲面上的渐变线个数。该选项仅在使用了离散渐变时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface4( "Both sides" ),	Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" ));obj << Surface Gradient Type4( "Discrete Gradients" );Wait( 1 );obj << Surface Gradients4( 9 );

```

### Surface Lighting

**语法:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**说明:** 指定第一个响应的曲面上的曲面光源。该选项仅适用于连续和离散渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting1

**语法:** obj &lt;&lt; Surface Lighting( "None"|"Low Reflection"|"Normal" ); obj &lt;&lt; Surface Lighting1( "None"|"Low Reflection"|"Normal" )

**说明:** 指定第一个响应的曲面上的曲面光源。该选项仅适用于连续和离散渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Surface Color Method( ":Pred Formula ABRASION" );Wait( 1 );obj << Surface Lighting( "Low Reflection" );

```

### Surface Lighting2

**语法:** obj &lt;&lt; Surface Lighting2( "无"|"低反射"|"正常" )

**说明:** 指定第二个响应的曲面上的曲面光源。该选项仅适用于连续和离散渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION, :Pred Formula MODULUS ) );obj << Show Surface2( "Both Sides" );obj << Surface Color Method( "Solid", ":Pred Formula MODULUS" );Wait( 1 );obj << Surface Lighting2( "Normal" );

```

### Surface Lighting3

**语法:** obj &lt;&lt; Surface Lighting3( "无"|"低反射"|"正常" )

**说明:** 指定第三个响应的曲面上的曲面光源。该选项仅适用于连续和离散渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface3( "Both Sides" );obj << Surface Color Method( "Solid", "Solid", ":Pred Formula ELONG" );Wait( 1 );obj << Surface Lighting3( "Low Reflection" );

```

### Surface Lighting4

**语法:** obj &lt;&lt; Surface Lighting4( "无"|"低反射"|"正常" )

**说明:** 指定第四个响应的曲面上的曲面光源。该选项仅适用于连续和离散渐变。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Show Surface4( "Both Sides" );obj << Surface Color Method( "Solid", "Solid", "Solid", ":Pred Formula HARDNESS" );Wait( 1 );obj << Surface Lighting4( "Normal" );

```

### Surface Selector

**语法:** obj &lt;&lt; Surface Selector( state=0|1 )

**说明:** 显示或隐藏“因变量”控件中的曲面选项。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));Wait( 1 );obj << Surface Selector( 0 );

```

### X Grid

**语法:** obj &lt;&lt; X Grid( state=0|1 )

**说明:** 显示或隐藏垂直于 X 轴的网格。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << X Grid( 1 );

```

### X Resolution

**语法:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**说明:** 更改用于绘制曲面图的分辨率。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### XRotate

**语法:** obj &lt;&lt; XRotate( degrees )

**说明:** 旋转 X 轴上的曲面图。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << XRotate( 30 );

```

### Y Grid

**语法:** obj &lt;&lt; Y Grid( state=0|1 )

**说明:** 显示或隐藏垂直于 Y 轴的网格。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Y Grid( 1 );

```

### Y Resolution

**语法:** obj &lt;&lt; Resolution( number ) obj &lt;&lt; X Resolution( number ) obj &lt;&lt; Y Resolution( number )

**说明:** 更改用于绘制曲面图的分辨率。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Mode( "Isosurface" );Wait( 1 );obj << Resolution( 4 );Wait( 1 );obj << Resolution( 12 );

```

### YRotate

**语法:** obj &lt;&lt; YRotate( degrees )

**说明:** 旋转 Y 轴上的曲面图。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << YRotate( 20 );

```

### Z Grid

**语法:** obj &lt;&lt; Z Grid( state=0|1 )

**说明:** 显示或隐藏垂直于 Z 轴的网格。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Z Grid( 1 );

```

### Z Grid Position

**语法:** obj &lt;&lt; Z Grid Position( fraction )

**说明:** 将 Z 网格移至指定的百分比。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );obj << Z Grid( 1 );Wait( 1 );obj << Z Grid Position( 0.733 );

```

### ZRotate

**语法:** obj &lt;&lt; ZRotate( degrees )

**说明:** 旋转 Z 轴上的曲面图。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = dt << Surface Plot( Columns( :Pred Formula ABRASION ) );Wait( 1 );obj << ZRotate( 45 );

```

## Surface Frame3D

### 关联的构造器

#### Surface Frame3D

**语法:** Surface Frame3D( &lt;commands passed to Frame3D&gt; )

**说明:** 将显示命令发送至三维图。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));

```

### 项消息

#### Add Ellipsoid

**语法:** obj &lt;&lt; Add Ellipsoid( 4x4 matrix ) obj &lt;&lt; Add Ellipsoid(3x3 cov,3x1 means) obj &lt;&lt; Add Ellipsoid(3x3 corr,3x1 means,3x1 std dev)

**说明:** 在图上绘制椭圆。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D(	Add Ellipsoid(		[1 0.42632 0.85183, 0.42632 1 0.34418, 0.85183 0.34418 1],		[6.55099 2.96919 5.5066],		[0.57829 0.29087 0.53668]	));

```

#### Add Markers

**语法:** obj &lt;&lt; Add Markers( [ nx1 X matrix ], [ nx1 Y matrix ], [ nx1 Z matrix ] )

**说明:** 在图上绘制 n 个标记。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Add Markers( [2 3 4], [5 6 7], [1 8 9] ) );

```

#### Add Vector

**语法:** obj &lt;&lt; Add Vector( [ 3xn from matrix ], [ 3xn to matrix ], FromCap( CutOff|Sphere|Point|Feather ), ToCap( CutOff|Sphere|Point|Feather ), Facets( Triangle|Square|Round ), Shaft Color( color ), Shaft Thickness( number ), From Thickness( number ), To Thickness( number ), From Color( number ), To Color( number ) ) )

**说明:** 在图上绘制向量或箭头。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Add Vector( [4.5 2 1], [7.5 4 6], FromCap( "Feather" ), ToCap( "Point" ) ) );

```

#### Get Axes

**语法:** obj &lt;&lt; Get Axes

**说明:** 返回在图上显示轴的这种状态。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Axes );Show( s );

```

#### Get Box

**语法:** obj &lt;&lt; Get Box

**说明:** 返回在图上显示各方块的边框的这种状态。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Box );Show( s );

```

#### Get Grab Handles

**语法:** obj &lt;&lt; Get Grab Handles

**说明:** 返回在图上显示抓取控点的这种状态。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Box );Show( s );

```

#### Get Graph Size

**语法:** obj &lt;&lt; Get Graph Size

**说明:** 返回图形大小。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Graph Size );Show( s );

```

#### Get Grids

**语法:** obj &lt;&lt; Get Grids

**说明:** 返回在图上显示网格的这种状态。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Grids );Show( s );

```

#### Get Hide Lights Border

**语法:** obj &lt;&lt; Get Hide Lights Border

**说明:** 返回图四周光源边框的状态。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));state = obj << Frame3D( Get Hide Lights Border );Show( state );

```

#### Get Line Scale

**语法:** obj &lt;&lt; Get Line Scale

**说明:** 返回图的线条粗细。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));w = obj << Frame3D( Get Line Scale );Show( w );

```

#### Get Marker Quality

**语法:** obj &lt;&lt; Get Marker Quality

**说明:** 返回图的标记特性，如形状和颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));q = obj << Frame3D( Get Marker Quality );Show( q );

```

#### Get Marker Scale

**语法:** obj &lt;&lt; Get Marker Scale

**说明:** 返回图的标记大小。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Marker Scale );Show( s );

```

#### Get Marker Transparency

**语法:** obj &lt;&lt; Get Marker Transparency

**说明:** 返回图的标记透明度。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));t = obj << Frame3D( Get Marker Transparency );Show( t );

```

#### Get Rotation

**语法:** obj &lt;&lt; Get Rotation

**说明:** 返回框架的当前旋转。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));r = obj << Frame3D( Get Rotation() );Show( r );

```

#### Get Text Scale

**语法:** obj &lt;&lt; Get Text Scale

**说明:** 返回图的文本大小。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Text Scale );Show( s );

```

#### Get View Ortho

**语法:** obj &lt;&lt; Get View Ortho

**说明:** 返回图的正射视图状态。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));o = obj << Frame3D( Get View Ortho );Show( o );

```

#### Get View Perspective

**语法:** obj &lt;&lt; Get View Perspective

**说明:** 返回图的视图透视。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));p = obj << Frame3D( Get View Perspective );Show( p );

```

#### Get View Zoom

**语法:** obj &lt;&lt; Get View Zoom

**说明:** 返回图的当前缩放。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));z = obj << Frame3D( Get View Zoom );Show( z );

```

#### Get Wall Color

**语法:** obj &lt;&lt; Get Wall Color

**说明:** 返回图的墙壁颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get Wall Color );Show( c );

```

#### Get Walls

**语法:** obj &lt;&lt; Get Walls

**说明:** 返回在图上显示墙壁的这种状态。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));s = obj << Frame3D( Get Walls );Show( s );

```

#### Get X Axis Color

**语法:** obj &lt;&lt; Get X Axis Color

**说明:** 返回图的 x 轴颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get X Axis Color );Show( c );

```

#### Get X Axis Label

**语法:** obj &lt;&lt; Get X Axis Label

**说明:** 返回图中 X 轴的标签。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));label = obj << Frame3D( Get X Axis Label );Show( label );

```

#### Get Y Axis Color

**语法:** obj &lt;&lt; Get Y Axis Color

**说明:** 返回图的 y 轴颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get Y Axis Color );Show( c );

```

#### Get Y Axis Label

**语法:** obj &lt;&lt; Get Y Axis Label

**说明:** 返回图中 Y 轴的标签。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));label = obj << Frame3D( Get Y Axis Label );Show( label );

```

#### Get Z Axis Color

**语法:** obj &lt;&lt; Get Z Axis Color

**说明:** 返回图的 z 轴颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Get Z Axis Color );Show( c );

```

#### Get Z Axis Label

**语法:** obj &lt;&lt; Get Z Axis Label

**说明:** 返回图中 Z 轴的标签。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));label = obj << Frame3D( Get Z Axis Label );Show( label );

```

#### Legend

**语法:** obj &lt;&lt; Legend( state=0|1 )

**说明:** 显示或隐藏图中的图例。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	),	Show Surface2( Both Sides ));obj << Frame3D( Legend( 0 ) );Wait( 2 );obj << Frame3D( Legend( 1 ) );

```

#### Set Axes

**语法:** obj &lt;&lt; Set Axes( state=0|1 )

**说明:** 显示或隐藏图中的 x、y 和 z 轴。默认情况下显示。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Axes( 1 ) );

```

#### Set Box

**语法:** obj &lt;&lt; Set Box( state=0|1 )

**说明:** 显示或隐藏图中各方块的边框。默认情况下显示。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Box( 1 ) );

```

#### Set Graph Size

**语法:** obj &lt;&lt; Set Graph Size( x, y )

**说明:** 设置图形大小。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Graph Size( 700, 800 ) );

```

#### Set Grids

**语法:** obj &lt;&lt; Set Grids( state=0|1 )

**说明:** 显示或隐藏图中的网格。默认情况下显示。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Grids( 1 ) );

```

#### Set Hide Lights Border

**语法:** obj &lt;&lt; Set Hide Lights Border( state=0|1 )

**说明:** 隐藏或显示图四周的光源边框。默认情况下显示。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ) );

```

#### Set Line Scale

**语法:** obj &lt;&lt; Set Line Scale( number )

**说明:** 设置图中网格的线条粗细。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Line Scale( 6.5 ) );

```

#### Set Marker Quality

**语法:** obj &lt;&lt; Set Marker Quality( number )

**说明:** 设置图的标记特性，如形状和颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Marker Scale( 3 ), Set Marker Quality( 0.2625 ) );

```

#### Set Marker Scale

**语法:** obj &lt;&lt; Set Marker Scale( number )

**说明:** 设置图的标记大小。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Marker Scale( 3.5 ) );

```

#### Set Marker Transparency

**语法:** obj &lt;&lt; Set Marker Transparency( fraction )

**说明:** 设置图的标记透明度。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Marker Transparency( 0.4125 ) );

```

#### Set Oscillation

**语法:** obj &lt;&lt; Set Oscillation( X, Y, Z, duration )

**说明:** 设置图中的振动率。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Rotation( -60, -3, 35 ), Set Oscillation( -54, 0, 38, 100 ) );

```

#### Set Rotation

**语法:** obj &lt;&lt; Set Rotation( X, Y, Z )

**说明:** 将框架旋转至指定的坐标。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Rotation( -60, -3, 35 ) );

```

#### Set Spin

**语法:** obj &lt;&lt; Set Spin( dx, dy, sx, sy )

**说明:** 使图形沿指定轴旋转。值 dx 和 dy 是鼠标基于点 (sx, sy) 的移动量。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Spin( .01, .01, 0, 0 ) );

```

#### Set Text Scale

**语法:** obj &lt;&lt; Set Text Scale( number )

**说明:** 设置图中轴文本的大小。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Text Scale( 1.4 ) );

```

#### Set View Ortho

**语法:** obj &lt;&lt; Set View Ortho( state=0|1 )

**说明:** 正射或线性显示图。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set View Ortho( 1 ) );

```

#### Set View Perspective

**语法:** obj &lt;&lt; Set View Perspective( fraction )

**说明:** 设置图中的视图透视。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set View Perspective( 0.275 ) );

```

#### Set View Zoom

**语法:** obj &lt;&lt; Set View Zoom( number )

**说明:** 设置图中的缩放。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set View Zoom( 0.5 ) );Wait( 2 );obj << Frame3D( Set View Zoom( 2 ) );

```

#### Set Wall Color

**语法:** obj &lt;&lt; Set Wall Color( number )

**说明:** 设置图的墙壁颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Wall Color( -16775543 ) );

```

#### Set Walls

**语法:** obj &lt;&lt; Set Walls( state=0|1 )

**说明:** 显示或隐藏图中的墙壁。默认情况下显示。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Walls( 1 ) );

```

#### Set X Axis Color

**语法:** obj &lt;&lt; Set X Axis Color( color )

**说明:** 设置图的 x 轴颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set X Axis Color( 5 ) );

```

#### Set X Axis Label

**语法:** obj &lt;&lt; Set X Axis Label( string )

**说明:** 设置图中 X 轴的标签。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set X Axis Label( "Iris Sepal Length" ) );

```

#### Set Y Axis Color

**语法:** obj &lt;&lt; Set Y Axis Color( color )

**说明:** 设置图的 y 轴颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Y Axis Color( 11 ) );

```

#### Set Y Axis Label

**语法:** obj &lt;&lt; Set Y Axis Label( string )

**说明:** 设置图中 Y 轴的标签。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Y Axis Label( "Iris Petal Length" ) );

```

#### Set Z Axis Color

**语法:** obj &lt;&lt; Set Z Axis Color( color )

**说明:** 设置图的 z 轴颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Z Axis Color( "Green" ) );

```

#### Set Z Axis Label

**语法:** obj &lt;&lt; Set Z Axis Label( string )

**说明:** 设置图中 Z 轴的标签。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Z Axis Label( "Iris Sepal Width" ) );

```

#### XAxis

**语法:** obj &lt;&lt; XAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**说明:** 设置图中 X 轴的值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( XAxis( Min( 3 ), Max( 10 ) ) );

```

#### YAxis

**语法:** obj &lt;&lt; YAxis( Min( number ), Max( number ), Inc( number ), Format( ) )

**说明:** 设置图中 Y 轴的值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( YAxis( Min( 1 ), Max( 10 ), Inc( 0.5 ) ) );

```

#### Z Axis

**语法:** obj &lt;&lt; Z Axis( Min( number ), Max( number ), Inc( number ), Format( ) )

**说明:** 设置图中 Z 轴的值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( ZAxis( Min( 1 ), Max( 5 ), Inc( 0.25 ) ) );

```

#### get light active

**语法:** obj &lt;&lt; get light active( light number )

**说明:** 返回图中发出的指定光源激活。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Active( 2 ) );Show( p );

```

#### get light color

**语法:** obj &lt;&lt; get light color( light number )

**说明:** 将图中的指定光源颜色作为列表返回 {red, green, blue}。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));c = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Color( 1 ) );Show( c );

```

#### get light position

**语法:** obj &lt;&lt; get light position( light number )

**说明:** 将图中的指定光源位置作为列表返回 {x, y, z}。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));p = obj << Frame3D( Set Hide Lights Border( 0 ), Get Light Position( 2 ) );Show( p );

```

#### set light active

**语法:** obj &lt;&lt; set light active( light number, state=0|1 )

**说明:** 开启指定的光源在图上发光。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Active( 4, 1 ) );

```

#### set light color

**语法:** obj &lt;&lt; set light color( light number, red value, green value, blue value )

**说明:** 设置图中光源的颜色。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Color( 2, 240, 50, 70 ) );

```

#### set light position

**语法:** obj &lt;&lt; set light position( light number, X, Y, Z )

**说明:** 设置图中光源的位置。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );obj = Surface Plot(	Columns(		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,		:Pred Formula HARDNESS	));obj << Frame3D( Set Hide Lights Border( 0 ), Set Light Position( 2, -1.5833, 10, 0 ) );

```

