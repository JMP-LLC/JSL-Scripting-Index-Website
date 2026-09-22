# Distribution



## 共享项消息

### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Distribution(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Distribution

**语法:** Distribution( Column() )

**说明:** 显示每个变量的分布和一元汇总统计量。结果和选项取决于每个变量的建模类型。某些选项包括直方图、箱线图、分位数图、拟合分布和能力分析。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );colref = Column( "age" );// Correct way to use the colrefDistribution( Column( colref ) );// This will not workDistribution( colref );

```

## 列

### By

**语法:** obj = Distribution(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Distribution(	Column( :Age, :Weight ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Column

**语法:** obj = Distribution(...&lt;Column( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Age, :Weight ) );

```

### Columns

**语法:** obj = Distribution(...Columns( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定要分析的分类或连续列。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Y( :Age, :Weight ) );

```

### Freq

**语法:** obj = Distribution(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Distribution( Column( :Age, :Weight ), Freq( :_freqcol ) );

```

### Weight

**语法:** obj = Distribution(...&lt;Weight( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Distribution( Column( :Age, :Weight ), Weight( :_weightcol ) );

```

### Y

**语法:** obj = Distribution(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定要分析的分类或连续列。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Columns( :Age, :Weight ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Y( :Age, :Weight ) );

```

## 项消息

### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

#### Anonymous preset

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

#### Search by name

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

### Arrange in Rows

**语法:** obj &lt;&lt; Arrange in Rows( number )

**说明:** 指定要横跨窗口显示的分布报表数。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );obj << ArrangeInRows( 3 );

```

### Axes on Left

**语法:** obj &lt;&lt; Axes on Left( state=0|1 )

**说明:** 将计数、概率、密度和正态分位数图轴移动到水平图形的左侧。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );obj << Axes on Left( 1 );

```

### CDF Plot

**语法:** obj &lt;&lt; CDF Plot( state=0|1 )

**说明:** 显示或隐藏经验累积分布函数图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << CDF Plot( 1 );

```

### Capability Analysis

**语法:** obj &lt;&lt; Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**说明:** 给定规定的下规格限 (LSL)、目标和上规格限 (USL)，执行能力分析。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

### Confidence Interval

**语法:** obj &lt;&lt; Confidence Interval( number, &lt;Upper | Lower&gt;, &lt;Sigma( number )&gt; )

**说明:** 计算均值和标准差附近的指定置信区间。若您指定 sigma，则指定值用于计算均值附近的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Confidence Interval( 0.98 ); obj << Confidence Interval( 0.95, Lower ); obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

### Count Axis

**语法:** obj &lt;&lt; Count Axis( state=0|1 )

**说明:** 显示或隐藏直方图的计数轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Count Axis( 1 );

```

### Custom Quantiles

**语法:** obj &lt;&lt; Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**说明:** 创建分位数秩估计值的报表和指定分位数的平滑经验似然分位数估计值的报表。使用小数作为两个报表中置信区间的置信水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

### Customize Summary Statistics

**语法:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**说明:** 定制“汇总统计量”报表中显示的汇总统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

### Density Axis

**语法:** obj &lt;&lt; Density Axis( state=0|1 )

**说明:** 在直方图上显示或隐藏密度曲线的密度轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Density Axis( 1 );

```

### Fit All

**语法:** obj &lt;&lt; Fit All

**说明:** 比较所有可能的分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit All;

```

### Fit Beta

**语法:** obj &lt;&lt; Fit Beta

**说明:** 对 0 和 1（不含边界值）之间的数据拟合双参数 Beta 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :OZONE ) );obj << Fit Beta;

```

### Fit Beta Binomial

**语法:** obj &lt;&lt; Fit Beta Binomial( Sample Size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合 Beta 二项分布。该分布是二项分布的更灵活版本。

**JMP添加的版本:** 15

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

### Fit Binomial

**语法:** obj &lt;&lt; Fit Binomial( Sample size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合二项分布。该分布对 n 次独立试验中的总成功次数建模。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Binomial( Sample Size( :Box Size ) );

```

### Fit Cauchy

**语法:** obj &lt;&lt; Fit Cauchy

**说明:** 拟合数据的 Cauchy 分布。Cauchy 分布对离群值是稳健的，且等价于自由度为 1 的 t 分布。

**JMP添加的版本:** 15

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

### Fit ExGaussian

**语法:** obj &lt;&lt; Fit ExGaussian

**说明:** 拟合数据指数修正高斯分布。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;obj << Fit Normal;obj << Fit Exponential;

```

### Fit Exponential

**语法:** obj &lt;&lt; Fit Exponential

**说明:** 拟合非负数数据的指数分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :POP ) );obj << Fit Exponential;

```

### Fit Gamma

**语法:** obj &lt;&lt; Fit Gamma

**说明:** 拟合正数数据的双参数 Gamma 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :Max deg. F Jan ) );obj << Fit Gamma;

```

### Fit Handle

**语法:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; {option}); obj &lt;&lt; (Fit Handle["Distribution Name"] &lt;&lt; {option})

**说明:** 拟合分布的控点数组。您可以将命令发送至已拟合的指定分布。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;obj << Fit Weibull;obj << (Fit Handle[2] << Goodness of Fit( 1 ));obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

### Fit Johnson

**语法:** obj &lt;&lt; Fit Johnson

**说明:** 拟合数据的 Johnson 分布。基于分位数选择三种 Johnson 分布（Su、Sb 和 Sl）中最适合的一种。

**JMP添加的版本:** 15

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Johnson;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Johnson;

```

### Fit Largest Extreme Value

**语法:** obj &lt;&lt; Fit Largest Extreme Value

**说明:** 拟合数据的最大极值分布。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Largest Extreme Value;

```

### Fit Lognormal

**语法:** obj &lt;&lt; Fit Lognormal

**说明:** 拟合正数数据的对数正态分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;

```

### Fit Negative Binomial

**语法:** obj &lt;&lt; Fit Negative Binomial

**说明:** 拟合数据的负二项分布。该分布等价于 Gamma Poisson 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Negative Binomial;

```

### Fit Normal

**语法:** obj &lt;&lt; Fit Normal

**说明:** 拟合数据正态分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Fit Normal;

```

### Fit Normal 2 Mixture

**语法:** obj &lt;&lt; Fit Normal 2 Mixture

**说明:** 拟合两个正态分布的混合分布。该分布可以拟合双模态数据。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 2 Mixture;

```

### Fit Normal 3 Mixture

**语法:** obj &lt;&lt; Fit Normal 3 Mixture

**说明:** 拟合三个正态分布的混合分布。该分布可以拟合多模态数据。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 3 Mixture;

```

### Fit Poisson

**语法:** obj &lt;&lt; Fit Poisson

**说明:** 拟合数据的 Poisson 分布。计数数据普遍选择该分布。Poisson 分布的拟合均值等于方差。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Poisson;

```

### Fit SHASH

**语法:** obj &lt;&lt; Fit Shash

**说明:** 拟合数据的 sinh-arcsinh (SHASH) 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Shash;

```

### Fit Smallest Extreme Value

**语法:** obj &lt;&lt; Fit Smallest Extreme Value

**说明:** 拟合数据的最小极值分布。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Smallest Extreme Value;

```

### Fit Smooth Curve

**语法:** obj &lt;&lt; Fit Smooth Curve( &lt;Bandwidth( number )&gt; )

**说明:** 使用非参数密度估计拟合数据的平滑曲线。您可以通过指定带宽设置平滑性。

**JMP添加的版本:** 15

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

### Fit Student's t

**语法:** obj &lt;&lt; Fit Student&apos;s t

**说明:** 拟合数据的 Student t 分布。该分布是跨越正态分布和 Cauchy 分布之间空间的稳健选项。

**JMP添加的版本:** 16

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

### Fit Weibull

**语法:** obj &lt;&lt; Fit Weibull

**说明:** 拟合正数数据的双参数 Weibull 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Weibull;

```

### Fit ZI Beta Binomial

**语法:** obj &lt;&lt; Fit ZI Beta Binomial( Sample Size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合零泛滥 beta 二项分布。该分布对 n 次独立试验中的总成功次数建模，其中观测到的零个数比 beta 二项分布期望的要多。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Binomial

**语法:** obj &lt;&lt; Fit ZI Binomial( Sample Size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合零泛滥二项分布。该分布对 n 次独立试验中的总成功次数建模，其中观测到的零个数比二项分布期望的要多。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

### Fit ZI Negative Binomial

**语法:** obj &lt;&lt; Fit ZI Negative Binomial

**说明:** 拟合包含零值的数据的零泛滥负二项分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

### Fit ZI Poisson

**语法:** obj &lt;&lt; Fit ZI Poisson

**说明:** 拟合包含零值的数据的零泛滥 Poisson 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

### Fit ZI SHASH

**语法:** obj &lt;&lt; Fit ZI SHASH

**说明:** 拟合数据点质量为 0 的 SHASH 分布。

```jsl

Random Reset( 18 );d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );For( i = 1, i <= 250, i++,	If( Random Uniform() < .2,		d[i] = 0	));As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

### Frequencies

**语法:** obj &lt;&lt; Frequencies( state=0|1 )

**说明:** 显示或隐藏“频数”报表，它列出每个水平的计数和概率。 默认开启。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Frequencies( 0 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Frequencies( 0 );

```

### Histogram

**语法:** obj &lt;&lt; Histogram( state=0|1 )

**说明:** 显示或隐藏直方图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Histogram( 0 );

```

### Histogram Color

**语法:** obj &lt;&lt; Histogram Color( color )

**说明:** 更改直方图直条的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Histogram Color( "Red" );

```

### Horizontal Layout

**语法:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**说明:** 将直方图和报表的方向更改为水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Horizontal Layout( 1 );

```

### Mosaic Plot

**语法:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**说明:** 显示或隐藏每个名义型或有序型响应变量的马赛克条形图。马赛克图是堆叠的条形图，每个段与其组的频数计数成比例。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Mosaic Plot( 1 );

```

### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

### Normal Quantile Plot

**语法:** obj &lt;&lt; Normal Quantile Plot( state=0|1 )

**说明:** 显示或隐藏可用于可视化变量的正态分布程度的图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Normal Quantile Plot( 1 );

```

### Order By

**语法:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**说明:** 按计数升序或降序方式对直方图、马赛克图和“频数”报表排序。您还可以恢复为默认排序。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Order By( "Count Descending" );

```

### Outlier Box Plot

**语法:** obj &lt;&lt; Outlier Box Plot( state=0|1 )

**说明:** 显示或隐藏允许您查看分布及可标识可能离群值的箱线图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Outlier Box Plot( 0 );

```

### Outlier Box Plot Row Cutoff

**语法:** obj &lt;&lt; Outlier Box Plot Row Cutoff( number )

**说明:** 设置离群值箱线图最初关闭前最大行数的启动选项。 默认为“100000”。

```jsl

dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );obj = dt << Distribution( Column( :Flu Cases ) );obj << Outlier Box Plot Row Cutoff( 10000 );

```

### PpK Capability Labeling

**语法:** obj &lt;&lt; PpK Capability Labeling( state=0|1 )

**说明:** 在“过程能力”输出中，切换总能力指标的标签以使用前缀 Pp 而不是 Cp。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << PpK Capability Labeling( 0 );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( Alpha, N Samples, &lt;Lower | Upper&gt; )

**说明:** 计算单值未来观测的预测区间和指定数量的未来观测（N 个样本）的均值的预测区间。您可以创建单侧或双侧预测区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prediction Interval( 0.95, 20 );

```

### Prob Axis

**语法:** obj &lt;&lt; Prob Axis( state=0|1 )

**说明:** 显示或隐藏该直方图的概率或比例轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prob Axis( 1 );

```

### Process Capability

**语法:** obj &lt;&lt; Process Capability( LSL( number ), Target( number ), USL( number ) )

**说明:** 给定下规格限 (LSL)、目标和上规格限 (USL)，进行过程能力分析。“过程能力”报表包括直方图、汇总详细信息、能力指标和不合格统计量。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

### Quantile Box Plot

**语法:** obj &lt;&lt; Quantile Box Plot( state=0|1 )

**说明:** 显示或隐藏具有下列分位数的箱线图: 0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99% 和 100%。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Outlier Box Plot( 0 );obj << Quantile Box Plot( 1 );

```

### Quantiles

**语法:** obj &lt;&lt; Quantiles( state=0|1 )

**说明:** 显示或隐藏“分位数”报表，它列出所选分位数的值。默认情况下，列出的分位数为 0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99.5% 和 100%。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Quantiles( 0 );

```

### Save

**语法:** obj &lt;&lt; Save( "水平编号"|"水平中点值"|"秩"|"平均秩"|"概率得分"|"正态分位数"|"标准化"|"中心化"|"标准化稳健"|"中心化稳健"|"规格限"|"在日志中显示脚本" )

**说明:** 将指定的特定于观测的统计量保存至数据表中的新列。还提供了一个选项将生成当前报表的脚本命令打印至日志窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Save( "Ranks" );

```

### Separate Bars

**语法:** obj &lt;&lt; Separate Bars( state=0|1 )

**说明:** 在直方图的各直条之间添加间距。该选项仅可用于分类变量。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Separate Bars( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Separate Bars( 1 );

```

### Set Bin Width

**语法:** obj &lt;&lt; Set Bin Width( number )

**说明:** 以轴作为原点，设置直方图的箱宽度。该选项仅可用于连续变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Bin Width( 5 );

```

### Set Quantile Increment

**语法:** obj &lt;&lt; Set Quantile Increment( fraction | "revert to default quantiles" )

**说明:** 将“分位数”报表中使用的增量设置为指定的小数，或更改回默认分位数。该选项仅可用于连续变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Quantile Increment( 0.05 );Wait( 1 );obj << Set Quantile Increment( "revert to default quantiles" );

```

### Shadowgram

**语法:** obj &lt;&lt; Shadowgram( state=0|1 )

**说明:** 显示或隐藏平滑的阴影图代替直方图。阴影图使用不同的箱宽度叠加在直方图上。该选项仅可用于连续变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Shadowgram( 1 );

```

### Show Counts

**语法:** obj &lt;&lt; Show Counts( state=0|1 )

**说明:** 显示或隐藏直方图上的直条计数，它给出每个直方图直条所表示的列值的频数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Counts( 1 );

```

### Show Percents

**语法:** obj &lt;&lt; Show Percents( state=0|1 )

**说明:** 显示或隐藏直方图上的直条百分比，它给出每个直方图直条所表示的列值的百分比。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Percents( 1 );

```

### Stack

**语法:** obj &lt;&lt; Stack( state=0|1 )

**说明:** 将直方图和报表的方向更改为水平并垂直堆叠各个分布报表。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );obj << Stack( 1 );

```

### Std Error Bars

**语法:** obj &lt;&lt; Std Error Bars( state=0|1 )

**说明:** 在每个直方图直条上显示或隐藏标准误差直条。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Std Error Bars( 1 );

```

### Stem and Leaf

**语法:** obj &lt;&lt; Stem and Leaf( state=0|1 )

**说明:** 显示或隐藏茎叶图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Stem and Leaf( 1 );

```

### Summary Statistics

**语法:** obj &lt;&lt; Summary Statistics( state=0|1 )

**说明:** 显示或隐藏“汇总统计量”报表，它列出连续变量的均值、标准差和其他汇总统计量。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Summary Statistics( 0 );

```

### Test Equivalence

**语法:** obj &lt;&lt; Test Equivalence( Target( number ), Practical Difference( number ), &lt;Confidence( fraction )&gt; )

**说明:** 使用双单侧检验 (TOST) 方法检验样本均值是否等价于假设值（目标）。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

### Test Mean

**语法:** obj &lt;&lt; Test Mean( number, &lt;Sigma( number )&gt;, &lt; Wilcoxon Signed Rank( 0|1 ) &gt;, &lt;PValue Animation&gt;, &lt;Power Animation&gt; )

**说明:** 执行均值的单样本检验。若您指定标准差 (Sigma) 的值，则执行 z 检验。否则，样本标准差用于执行 t 检验。还提供了一个选项来执行额外的非参数 Wilcoxon 符号秩检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Mean( 60 ); obj << Test Mean( 60, Sigma( 4 ) ); obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

### Test Probabilities

**语法:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**说明:** 对指定的假设概率（p1、p2、p3 等）检验分类变量水平的估计概率。对于包含两个水平的变量，使用“检验”选项指定检验的备择假设的符号。对于包含两个以上水平的变量，使用“固定”选项指定如何处理缺失假设值。请注意，f 是可选参数，它指定前面的水平被视为固定。

**两水平，单侧示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**两水平，双侧示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**多水平示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );obj << Test Probabilities(	Test( Hypothesized ),	0.8,	0.04375,	0.075,	0.04375,	0.01875,	0.01875);

```

### Test Std Dev

**语法:** obj &lt;&lt; Test Std Dev( number )

**说明:** 给定假设值（数值），执行标准差的卡方检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Std Dev( 3 );

```

### Tolerance Interval

**语法:** obj &lt;&lt; Tolerance Interval( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric&gt; )

**说明:** 计算一个区间，该区间至少包含指定的总体部分。假定服从标准正态分布。您还可以指定其他非正态分布，包括对数正态、Gamma、指数、Weibull、最小极值、最大极值和非参数分布。也有用来计算单侧区间的选项。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

### Uniform Scaling

**语法:** obj &lt;&lt; Uniform Scaling( state=0|1 )

**说明:** 将所有直方图轴设置为具有相同的最小值、最大值和增量值，以便可以轻松比较分布。

```jsl

dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );obj = dt << Distribution( Column( :BP 8M, :BP 12M, :BP 6M, :BP 8W, :BP 12W ) );obj << Uniform Scaling( 1 );

```

### Vertical

**语法:** obj &lt;&lt; Vertical( state=0|1 )

**说明:** 将直方图、箱线图和分位数图的方向更改为垂直。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Vertical( 0 );

```

## Capability Analysis

### 项消息

#### Capability Animation

**语法:** obj &lt;&lt; Capability Animation

**说明:** 打开一个单独的窗口，它显示使用来自当前样本的参数和能力统计量的正态分布的动画。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Capability Animation );

```

#### Z Bench

**语法:** obj &lt;&lt; Z Bench( state=0|1 )

**说明:** 显示或隐藏 Z 统计量，AIAG 将 Z 统计量描述为从过程平均值到指定值间的标准差单位数。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ), Z Bench( 1 ) );

```

## Confidence Interval

### 项消息

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 删除“置信区间”报表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Confidence Interval( 0.98 );Wait( 2 );scrobj = (Report( obj )["Confidence Intervals"] << get scriptable object);scrobj << Remove;

```

## Continuous Distribution

### 列

#### Column

**语法:** obj = Quantiles(...&lt;Column( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Quantiles( 0 );

```

### 项消息

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**语法:** obj &lt;&lt; Axes on Left( state=0|1 )

**说明:** 将计数、概率、密度和正态分位数图轴移动到水平图形的左侧。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ), Horizontal Layout( 1 ), Count Axis( 1 ) );obj << Axes on Left( 1 );

```

#### CDF Plot

**语法:** obj &lt;&lt; CDF Plot( state=0|1 )

**说明:** 显示或隐藏经验累积分布函数图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << CDF Plot( 1 );

```

#### Capability Analysis

**语法:** obj &lt;&lt; Capability Analysis( LSL( number ), Target( number ), USL( number ) )

**说明:** 给定规定的下规格限 (LSL)、目标和上规格限 (USL)，执行能力分析。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Capability Analysis( LSL( 16 ), USL( 24 ), Target( 20 ) );

```

#### Confidence Interval

**语法:** obj &lt;&lt; Confidence Interval( number, &lt;Upper | Lower&gt;, &lt;Sigma( number )&gt; )

**说明:** 计算均值和标准差附近的指定置信区间。若您指定 sigma，则指定值用于计算均值附近的置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Confidence Interval( 0.98 ); obj << Confidence Interval( 0.95, Lower ); obj << Confidence Interval( 0.95, Sigma( 4 ) );

```

#### Count Axis

**语法:** obj &lt;&lt; Count Axis( state=0|1 )

**说明:** 显示或隐藏直方图的计数轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Count Axis( 1 );

```

#### Custom Quantiles

**语法:** obj &lt;&lt; Custom Quantiles( fraction, [quantile1, quantile2, ... quantileN] )

**说明:** 创建分位数秩估计值的报表和指定分位数的平滑经验似然分位数估计值的报表。使用小数作为两个报表中置信区间的置信水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Custom Quantiles( 0.975, [0.075, 0.1, 0.125, 0.975, 0.99] );

```

#### Customize Summary Statistics

**语法:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**说明:** 定制“汇总统计量”报表中显示的汇总统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Density Axis

**语法:** obj &lt;&lt; Density Axis( state=0|1 )

**说明:** 在直方图上显示或隐藏密度曲线的密度轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Density Axis( 1 );

```

#### Fit All

**语法:** obj &lt;&lt; Fit All

**说明:** 比较所有可能的分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit All;

```

#### Fit Beta

**语法:** obj &lt;&lt; Fit Beta

**说明:** 对 0 和 1（不含边界值）之间的数据拟合双参数 Beta 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :OZONE ) );obj << Fit Beta;

```

#### Fit Beta Binomial

**语法:** obj &lt;&lt; Fit Beta Binomial( Sample Size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合 Beta 二项分布。该分布是二项分布的更灵活版本。

**JMP添加的版本:** 15

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( 10 ) );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit Binomial

**语法:** obj &lt;&lt; Fit Binomial( Sample size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合二项分布。该分布对 n 次独立试验中的总成功次数建模。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit Binomial( Sample Size( :Box Size ) );

```

#### Fit Cauchy

**语法:** obj &lt;&lt; Fit Cauchy

**说明:** 拟合数据的 Cauchy 分布。Cauchy 分布对离群值是稳健的，且等价于自由度为 1 的 t 分布。

**JMP添加的版本:** 15

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Cauchy );

```

#### Fit ExGaussian

**语法:** obj &lt;&lt; Fit ExGaussian

**说明:** 拟合数据指数修正高斯分布。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit ExGaussian;obj << Fit Normal;obj << Fit Exponential;

```

#### Fit Exponential

**语法:** obj &lt;&lt; Fit Exponential

**说明:** 拟合非负数数据的指数分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :POP ) );obj << Fit Exponential;

```

#### Fit Gamma

**语法:** obj &lt;&lt; Fit Gamma

**说明:** 拟合正数数据的双参数 Gamma 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :Max deg. F Jan ) );obj << Fit Gamma;

```

#### Fit Handle

**语法:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; {option}); obj &lt;&lt; (Fit Handle["Distribution Name"] &lt;&lt; {option})

**说明:** 拟合分布的控点数组。您可以将命令发送至已拟合的指定分布。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;obj << Fit Weibull;obj << (Fit Handle[2] << Goodness of Fit( 1 ));obj << (Fit Handle["Lognormal"] << QQ Plot( 1 ));

```

#### Fit Johnson

**语法:** obj &lt;&lt; Fit Johnson

**说明:** 拟合数据的 Johnson 分布。基于分位数选择三种 Johnson 分布（Su、Sb 和 Sl）中最适合的一种。

**JMP添加的版本:** 15

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Johnson;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Johnson;

```

#### Fit Largest Extreme Value

**语法:** obj &lt;&lt; Fit Largest Extreme Value

**说明:** 拟合数据的最大极值分布。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Largest Extreme Value;

```

#### Fit Lognormal

**语法:** obj &lt;&lt; Fit Lognormal

**说明:** 拟合正数数据的对数正态分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Lognormal;

```

#### Fit Negative Binomial

**语法:** obj &lt;&lt; Fit Negative Binomial

**说明:** 拟合数据的负二项分布。该分布等价于 Gamma Poisson 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Negative Binomial;

```

#### Fit Normal

**语法:** obj &lt;&lt; Fit Normal

**说明:** 拟合数据正态分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Weight ) );obj << Fit Normal;

```

#### Fit Normal 2 Mixture

**语法:** obj &lt;&lt; Fit Normal 2 Mixture

**说明:** 拟合两个正态分布的混合分布。该分布可以拟合双模态数据。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 2 Mixture;

```

#### Fit Normal 3 Mixture

**语法:** obj &lt;&lt; Fit Normal 3 Mixture

**说明:** 拟合三个正态分布的混合分布。该分布可以拟合多模态数据。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cytometry.jmp" );obj = dt << Distribution( Column( :CD8 ) );obj << Fit Normal 3 Mixture;

```

#### Fit Poisson

**语法:** obj &lt;&lt; Fit Poisson

**说明:** 拟合数据的 Poisson 分布。计数数据普遍选择该分布。Poisson 分布的拟合均值等于方差。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Airport.jmp" );obj = dt << Distribution( Column( :Delay ) );obj << Fit Poisson;

```

#### Fit SHASH

**语法:** obj &lt;&lt; Fit Shash

**说明:** 拟合数据的 sinh-arcsinh (SHASH) 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :CO ) );obj << Fit Shash;

```

#### Fit Smallest Extreme Value

**语法:** obj &lt;&lt; Fit Smallest Extreme Value

**说明:** 拟合数据的最小极值分布。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Smallest Extreme Value;

```

#### Fit Smooth Curve

**语法:** obj &lt;&lt; Fit Smooth Curve( &lt;Bandwidth( number )&gt; )

**说明:** 使用非参数密度估计拟合数据的平滑曲线。您可以通过指定带宽设置平滑性。

**JMP添加的版本:** 15

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :SO2 ) );obj << Fit Smooth Curve( Bandwidth( 0.02 ) );

```

#### Fit Student's t

**语法:** obj &lt;&lt; Fit Student&apos;s t

**说明:** 拟合数据的 Student t 分布。该分布是跨越正态分布和 Cauchy 分布之间空间的稳健选项。

**JMP添加的版本:** 16

```jsl

Random Reset( 15 );d = J( 75, 1, Random Normal() );d[1] = 10;d[2] = 9;d[3] = 8;As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit Normal, Fit Student's t );

```

#### Fit Weibull

**语法:** obj &lt;&lt; Fit Weibull

**说明:** 拟合正数数据的双参数 Weibull 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :NO ) );obj << Fit Weibull;

```

#### Fit ZI Beta Binomial

**语法:** obj &lt;&lt; Fit ZI Beta Binomial( Sample Size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合零泛滥 beta 二项分布。该分布对 n 次独立试验中的总成功次数建模，其中观测到的零个数比 beta 二项分布期望的要多。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Beta Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Binomial

**语法:** obj &lt;&lt; Fit ZI Binomial( Sample Size( n | column ) )

**说明:** 给定指定的常数样本大小或包含样本大小的列，拟合零泛滥二项分布。该分布对 n 次独立试验中的总成功次数建模，其中观测到的零个数比二项分布期望的要多。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Shirts.jmp" );obj = dt << Distribution( Column( :"# Defects"n ) );obj << Fit ZI Binomial( Sample Size( :Box Size ) );

```

#### Fit ZI Negative Binomial

**语法:** obj &lt;&lt; Fit ZI Negative Binomial

**说明:** 拟合包含零值的数据的零泛滥负二项分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Negative Binomial );

```

#### Fit ZI Poisson

**语法:** obj &lt;&lt; Fit ZI Poisson

**说明:** 拟合包含零值的数据的零泛滥 Poisson 分布。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );dt << Distribution( Column( :satell ), Fit ZI Poisson );

```

#### Fit ZI SHASH

**语法:** obj &lt;&lt; Fit ZI SHASH

**说明:** 拟合数据点质量为 0 的 SHASH 分布。

```jsl

Random Reset( 18 );d = J( 250, 1, Random SHASH( 0, 1, 3, 5 ) );For( i = 1, i <= 250, i++,	If( Random Uniform() < .2,		d[i] = 0	));As Table( d );Column( 1 ) << set name( "X" );Distribution( Column( :X ), Fit ZI SHASH, Fit SHASH );

```

#### Histogram

**语法:** obj &lt;&lt; Histogram( state=0|1 )

**说明:** 显示或隐藏直方图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Histogram( 0 );

```

#### Histogram Color

**语法:** obj &lt;&lt; Histogram Color( color )

**说明:** 更改直方图直条的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Histogram Color( "Red" );

```

#### Horizontal Layout

**语法:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**说明:** 将直方图和报表的方向更改为水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Horizontal Layout( 1 );

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

#### Normal Quantile Plot

**语法:** obj &lt;&lt; Normal Quantile Plot( state=0|1 )

**说明:** 显示或隐藏可用于可视化变量的正态分布程度的图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Normal Quantile Plot( 1 );

```

#### Outlier Box Plot

**语法:** obj &lt;&lt; Outlier Box Plot( state=0|1 )

**说明:** 显示或隐藏允许您查看分布及可标识可能离群值的箱线图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Outlier Box Plot( 0 );

```

#### Outlier Box Plot Row Cutoff

**语法:** obj &lt;&lt; Outlier Box Plot Row Cutoff( number )

**说明:** 设置离群值箱线图最初关闭前最大行数的启动选项。 默认为“100000”。

```jsl

dt = Open( "$SAMPLE_DATA/Seasonal Flu.jmp" );obj = dt << Distribution( Column( :Flu Cases ) );obj << Outlier Box Plot Row Cutoff( 10000 );

```

#### PpK Capability Labeling

**语法:** obj &lt;&lt; PpK Capability Labeling( state=0|1 )

**说明:** 在“过程能力”输出中，切换总能力指标的标签以使用前缀 Pp 而不是 Cp。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << PpK Capability Labeling( 0 );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( Alpha, N Samples, &lt;Lower | Upper&gt; )

**说明:** 计算单值未来观测的预测区间和指定数量的未来观测（N 个样本）的均值的预测区间。您可以创建单侧或双侧预测区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prediction Interval( 0.95, 20 );

```

#### Prob Axis

**语法:** obj &lt;&lt; Prob Axis( state=0|1 )

**说明:** 显示或隐藏该直方图的概率或比例轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prob Axis( 1 );

```

#### Process Capability

**语法:** obj &lt;&lt; Process Capability( LSL( number ), Target( number ), USL( number ) )

**说明:** 给定下规格限 (LSL)、目标和上规格限 (USL)，进行过程能力分析。“过程能力”报表包括直方图、汇总详细信息、能力指标和不合格统计量。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :PM10 ) );obj << Process Capability( LSL( 5 ), Target( 40 ), USL( 75 ) );

```

#### Quantile Box Plot

**语法:** obj &lt;&lt; Quantile Box Plot( state=0|1 )

**说明:** 显示或隐藏具有下列分位数的箱线图: 0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99% 和 100%。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Outlier Box Plot( 0 );obj << Quantile Box Plot( 1 );

```

#### Quantiles

**语法:** obj &lt;&lt; Quantiles( state=0|1 )

**说明:** 显示或隐藏“分位数”报表，它列出所选分位数的值。默认情况下，列出的分位数为 0%、0.5%、2.5%、10%、25%、50%、75%、90%、97.5%、99.5% 和 100%。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Quantiles( 0 );

```

#### Save

**语法:** obj &lt;&lt; Save( "水平编号"|"水平中点值"|"秩"|"平均秩"|"概率得分"|"正态分位数"|"标准化"|"中心化"|"标准化稳健"|"中心化稳健"|"规格限"|"在日志中显示脚本" )

**说明:** 将指定的特定于观测的统计量保存至数据表中的新列。还提供了一个选项将生成当前报表的脚本命令打印至日志窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Save( "Ranks" );

```

#### Set Bin Width

**语法:** obj &lt;&lt; Set Bin Width( number )

**说明:** 以轴作为原点，设置直方图的箱宽度。该选项仅可用于连续变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Bin Width( 5 );

```

#### Set Quantile Increment

**语法:** obj &lt;&lt; Set Quantile Increment( fraction | "revert to default quantiles" )

**说明:** 将“分位数”报表中使用的增量设置为指定的小数，或更改回默认分位数。该选项仅可用于连续变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Set Quantile Increment( 0.05 );Wait( 1 );obj << Set Quantile Increment( "revert to default quantiles" );

```

#### Shadowgram

**语法:** obj &lt;&lt; Shadowgram( state=0|1 )

**说明:** 显示或隐藏平滑的阴影图代替直方图。阴影图使用不同的箱宽度叠加在直方图上。该选项仅可用于连续变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Shadowgram( 1 );

```

#### Show Counts

**语法:** obj &lt;&lt; Show Counts( state=0|1 )

**说明:** 显示或隐藏直方图上的直条计数，它给出每个直方图直条所表示的列值的频数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Counts( 1 );

```

#### Show Percents

**语法:** obj &lt;&lt; Show Percents( state=0|1 )

**说明:** 显示或隐藏直方图上的直条百分比，它给出每个直方图直条所表示的列值的百分比。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Show Percents( 1 );

```

#### Std Error Bars

**语法:** obj &lt;&lt; Std Error Bars( state=0|1 )

**说明:** 在每个直方图直条上显示或隐藏标准误差直条。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Std Error Bars( 1 );

```

#### Stem and Leaf

**语法:** obj &lt;&lt; Stem and Leaf( state=0|1 )

**说明:** 显示或隐藏茎叶图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Stem and Leaf( 1 );

```

#### Summary Statistics

**语法:** obj &lt;&lt; Summary Statistics( state=0|1 )

**说明:** 显示或隐藏“汇总统计量”报表，它列出连续变量的均值、标准差和其他汇总统计量。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );Wait( 1 );obj << Summary Statistics( 0 );

```

#### Test Equivalence

**语法:** obj &lt;&lt; Test Equivalence( Target( number ), Practical Difference( number ), &lt;Confidence( fraction )&gt; )

**说明:** 使用双单侧检验 (TOST) 方法检验样本均值是否等价于假设值（目标）。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );

```

#### Test Mean

**语法:** obj &lt;&lt; Test Mean( number, &lt;Sigma( number )&gt;, &lt; Wilcoxon Signed Rank( 0|1 ) &gt;, &lt;PValue Animation&gt;, &lt;Power Animation&gt; )

**说明:** 执行均值的单样本检验。若您指定标准差 (Sigma) 的值，则执行 z 检验。否则，样本标准差用于执行 t 检验。还提供了一个选项来执行额外的非参数 Wilcoxon 符号秩检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Mean( 60 ); obj << Test Mean( 60, Sigma( 4 ) ); obj << Test Mean( 60, Wilcoxon Signed Rank( 1 ) );

```

#### Test Std Dev

**语法:** obj &lt;&lt; Test Std Dev( number )

**说明:** 给定假设值（数值），执行标准差的卡方检验。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Std Dev( 3 );

```

#### Tolerance Interval

**语法:** obj &lt;&lt; Tolerance Interval( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Normal|Lognormal|Gamma|Exponential|Weibull|Smallest Extreme Value|Largest Extreme Value|Nonparametric&gt; )

**说明:** 计算一个区间，该区间至少包含指定的总体部分。假定服从标准正态分布。您还可以指定其他非正态分布，包括对数正态、Gamma、指数、Weibull、最小极值、最大极值和非参数分布。也有用来计算单侧区间的选项。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Lower );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.9 ), Upper, Lognormal );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.8 ), Lower, Nonparametric );

```

#### Vertical

**语法:** obj &lt;&lt; Vertical( state=0|1 )

**说明:** 将直方图、箱线图和分位数图的方向更改为垂直。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Vertical( 0 );

```

## Distribution Fit

### 项消息

#### Density Curve

**语法:** obj &lt;&lt; Fit Distribution Name( Density Curve( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Density Curve( state=0|1 ))

**说明:** 显示或隐藏直方图上的密度曲线。来自指定拟合的估计参数用于创建密度曲线。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Density Curve( 0 ) );

```

#### Distribution Profiler

**语法:** obj &lt;&lt; Fit Distribution Name( Distribution Profiler( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Distribution Profiler( state=0|1 ) )

**说明:** 显示或隐藏指定拟合分布的累积分布函数的预测刻画器。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Distribution Profiler( 1 ) );

```

#### Fitted CDF

**语法:** obj &lt;&lt; Fit Distribution Name( Fitted CDF( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fitted CDF( vector ))

**说明:** 显示或隐藏拟合分布的指定拟合概率。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Fitted CDF( [5 8 11] ) );

```

#### Fitted Quantiles

**语法:** obj &lt;&lt; Fit Distribution Name( Fitted Quantiles( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fitted Quantiles( vector ))

**说明:** 显示或隐藏指定拟合分布的指定分位数。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Fitted Quantiles( [.9 .95 .99] ) );

```

#### Fix Parameters

**语法:** obj &lt;&lt; Fit Distribution Name( Fix Parameters( vector )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Fix Parameters( vector ))

**说明:** 将指定参数固定为常数并重新估计非固定参数。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Normal( Fix Parameters( [. 2.8] ) );

```

#### Goodness of Fit

**语法:** obj &lt;&lt; Fit Distribution Name( Goodness of Fit( state=0|1 )); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Goodness of Fit( state=0|1 ))

**说明:** 显示或隐藏包含指定拟合分布的拟合优度检验的报表。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Goodness of Fit( 1 ) );

```

#### PP Plot

**语法:** obj &lt;&lt; Fit Distribution Name( PP Plot( state=0|1 ) ); obj &lt;&lt; (Fit Handle[ number ] &lt;&lt; PP Plot( state=0|1 ) )

**说明:** 显示或隐藏百分位数-百分位数 (PP) 图，它显示经验累积分布函数 (CDF) 和指定拟合分布的 CDF 之间的关系。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Gamma( PP Plot( 1 ) );

```

#### Process Capability

**语法:** obj &lt;&lt; Fit Distribution Name( Process Capability( LSL( number ), Target( number ), USL( number ))); obj &lt;&lt; (Fit Handle[number] &lt;&lt; ( Process Capability( LSL( number ), Target( number ), USL( number ))))

**说明:** 给定下规格限 (LSL)、目标和上规格限 (USL)，进行过程能力分析。“过程能力”报表包括直方图、汇总详细信息、能力指标和不合格统计量。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Distribution( Column( :OZONE ) );obj << Fit Lognormal( Process Capability( LSL( .03 ), Target( .15 ), USL( .27 ) ) );

```

#### QQ Plot

**语法:** obj &lt;&lt; Fit Distribution Name( QQ Plot( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; QQ Plot( state=0|1 ) )

**说明:** 显示或隐藏分位数-分位数 (QQ) 图，它显示观测数据和指定拟合分布的分位数之间的关系。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Distribution( Column( :Y ) );obj << Fit Gamma( QQ Plot( 1 ) );

```

#### Quantile Profiler

**语法:** obj &lt;&lt; Fit Distribution Name( Quantile Profiler( state=0|1 ) ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Quantile Profiler( state=0|1 ) )

**说明:** 显示或隐藏指定拟合分布的分位数函数的预测刻画器。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Quantile Profiler( 1 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; (Fit Handle[number] &lt;&lt; Remove Fit )

**说明:** 删除指定分布的拟合和 JSL 对象。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Weibull;obj << Fit Lognormal;Wait( 1 );obj << (Fit Handle[1] << Remove Fit);

```

#### Save Density Formula

**语法:** obj &lt;&lt; Fit Distribution Name( Save Density Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Density Formula )

**说明:** 将一列保存至数据表，它包含指定拟合分布的密度公式。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Save Density Formula );

```

#### Save Distribution Formula

**语法:** obj &lt;&lt; Fit Distribution Name( Save Distribution Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Distribution Formula )

**说明:** 将一列保存至数据表，它包含指定拟合分布的累积分布函数。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Save Distribution Formula );

```

#### Save Simulation Formula

**语法:** obj &lt;&lt; Fit Distribution Name( Save Simulation Formula ) ; obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Simulation Formula )

**说明:** 将一列保存至数据表，它包含从指定的拟合分布生成模拟值的公式。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Lognormal( Save Simulation Formula );

```

#### Save Transformed

**语法:** obj &lt;&lt; Fit Distribution Name( Save Transformed ); obj &lt;&lt; ( Fit Handle[number] &lt;&lt; Save Transformed )

**说明:** 将一列保存至数据表，它包含用于使用指定的拟合分布将分析列变换为正态的公式。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :CO ) );obj << Fit Shash( Save Transformed );

```

## Distribution Process Capability

### 项消息

#### Color Out of Spec Values

**语法:** obj &lt;&lt; Color Out of Spec Values

**说明:** 为数据表中值超出规格限的单元格着色。为值低于下规格限 (LSL) 的单元格着红色，值高于上规格限 (USL) 的单元格着蓝色。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.12 ),	Target( 0.18 ),	USL( 0.24 ),	Color Out of Spec Values);

```

#### Remove

**语法:** obj &lt;&lt; Remove( LSL, Target, USL )

**说明:** 删除过程能力分析。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability( LSL( 0.12 ), Target( 0.18 ), USL( 0.24 ) );Wait( 2 );scrobj = (Report( obj )["Process Capability"] << get scriptable object);scrobj << Remove;

```

#### Save Distribution as a Column Property

**语法:** obj &lt;&lt; Process Capability( Save Distribution as a Column Property )

**说明:** 将“过程能力分布”类型保存为原始数据表的列中的列属性。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.03 ),	Target( 0.15 ),	USL( 0.27 ),	Dist( Lognormal ),	Save Distribution as a Column Property);

```

#### Save In Spec Indicator Formula

**语法:** obj &lt;&lt; Save In Spec Indicator Formula

**说明:** 在数据表中创建新的公式列。新列包含一个值，该值指示某行是否在规格限内。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.12 ),	Target( 0.18 ),	USL( 0.24 ),	Save In Spec Indicator Formula);

```

#### Save Spec Limits and Distribution to Column Properties without Report

**语法:** obj &lt;&lt; Fit Distribution Name( Process Capability(Save Spec Limits and Distribution to Column Properties without Report))

**说明:** 将计算规格限和针对拟合分布的过程能力分布类型保存为原始数据表的列中的列属性并且不显示能力报表。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability(		Set Sigma Multiplier for Quantile Spec Limits( 4 ),		Save Spec Limits and Distribution to Column Properties without Report	));

```

#### Save Spec Limits as a Column Property

**语法:** obj &lt;&lt; Fit Distribution Name( Process Capability( Save Spec Limits as a Column Property )); obj &lt;&lt; Process Capability( Save Spec Limits as a Column Property )

**说明:** 将规格限保存为原始数据表的列中的列属性。

**JMP添加的版本:** 15

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability(		LSL( 0.03 ),		Target( 0.15 ),		USL( 0.27 ),		Save Spec Limits as a Column Property	));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Process Capability(	LSL( 0.03 ),	Target( 0.15 ),	USL( 0.27 ),	Save Spec Limits as a Column Property);

```

#### Set Probabilities for Quantile Spec Limits

**语法:** obj &lt;&lt; Fit Distribution Name( Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))); obj &lt;&lt; Process Capability(Set Probabilties for Quantile Spec Limits( LSL Prob(p1), Target Prob(p2), USL Prob(p3)))

**说明:** 设置用于计算拟合分布的分位数规格限的概率。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability(		Set Probabilities for Quantile Spec Limits(			LSL Prob( .0001 ),			Target Prob( .5 ),			USL Prob( .9999 )		)	));

```

#### Set Sigma Multiplier for Quantile Spec Limits

**语法:** obj &lt;&lt; Fit Distribution Name( Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, &lt;sided=1|2&gt;))); obj &lt;&lt; Process Capability(Set Sigma Multiplier for Quantile Spec Limits(K, &lt;sided=1|2&gt;))

**说明:** 设置 sigma 乘数 K，它用于计算拟合分布的分位数规格限。可选的边侧参数对于仅下规格限等于 1，对于仅上规格限等于 2。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = Distribution( Column( :OZONE ) );obj << Fit Lognormal(	Process Capability( Set Sigma Multiplier for Quantile Spec Limits( 4 ) ));

```

## Distribution Summary Statistics

### 项消息

#### Customize Summary Statistics

**语法:** obj &lt;&lt; Customize Summary Statistics(statistic1( state=0|1 ), statistic2( state=0|1 ), ..., statisticN( state=0|1 ), &lt;Set Trimmed Mean Percent(number)&gt;, &lt;Set Alpha Level(number)&gt;)

**说明:** 定制“汇总统计量”报表中显示的汇总统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Customize Summary Statistics( N( 0 ), Variance( 1 ), Skewness( 1 ) );

```

#### Show All Modes

**语法:** obj &lt;&lt; Customize Summary Statistics( Show all Modes( state=0|1 ))

**说明:** 在“汇总统计量”报表中显示或隐藏所有众数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Customize Summary Statistics( Mode( 1 ), Show All Modes( 1 ) );

```

## Multiple Response Distribution

### 项消息

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**语法:** obj &lt;&lt; Axes on Left( state=0|1 )

**说明:** 将计数、概率、密度和正态分位数图轴移动到水平图形的左侧。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) ));obj << Axes on Left( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution(	Multiple Response Distribution(		Column( :Brush Delimited ),		Horizontal Layout( 1 ),		Count Axis( 1 )	));obj << Axes on Left( 1 );

```

#### Confidence Interval

**语法:** obj &lt;&lt; Confidence Interval( "0.90"|"0.95"|"0.99"|"其他..." )

**说明:** 计算有关概率的得分置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Confidence Interval( 0.95 );

```

#### Count Axis

**语法:** obj &lt;&lt; Count Axis( state=0|1 )

**说明:** 显示或隐藏直方图的计数轴。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Count Axis( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Count Axis( 1 );

```

#### Density Axis

**语法:** obj &lt;&lt; Density Axis( state=0|1 )

**说明:** 在直方图上显示或隐藏密度曲线的密度轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Density Axis( 1 );

```

#### Frequencies

**语法:** obj &lt;&lt; Frequencies( state=0|1 )

**说明:** 显示或隐藏“频数”报表，它列出每个水平的计数和概率。 默认开启。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Frequencies( 0 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Frequencies( 0 );

```

#### Histogram

**语法:** obj &lt;&lt; Histogram( state=0|1 )

**说明:** 显示或隐藏直方图。 默认开启。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Histogram( 0 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Histogram( 0 );

```

#### Histogram Color

**语法:** obj &lt;&lt; Histogram Color( color )

**说明:** 更改直方图直条的颜色。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Histogram Color( "Red" );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Histogram Color( "Blue" );

```

#### Horizontal Layout

**语法:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**说明:** 将直方图和报表的方向更改为水平。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Horizontal Layout( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**语法:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**说明:** 显示或隐藏每个名义型或有序型响应变量的马赛克条形图。马赛克图是堆叠的条形图，每个段与其组的频数计数成比例。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Mosaic Plot( 1 );

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

#### Order By

**语法:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**说明:** 按计数升序或降序方式对直方图、马赛克图和“频数”报表排序。您还可以恢复为默认排序。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Order By( "Count Descending" );

```

#### Prob Axis

**语法:** obj &lt;&lt; Prob Axis( state=0|1 )

**说明:** 显示或隐藏该直方图的概率或比例轴。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Prob Axis( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Prob Axis( 1 );

```

#### Save

**语法:** obj &lt;&lt; Save( "水平编号"|"值排序"|"在日志中显示脚本" )

**说明:** 在数据表的新列中保存水平编号，或将脚本保存至日志。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Save( "Level Numbers" );

```

#### Separate Bars

**语法:** obj &lt;&lt; Separate Bars( state=0|1 )

**说明:** 在直方图的各直条之间添加间距。该选项仅可用于分类变量。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Separate Bars( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Separate Bars( 1 );

```

#### Show Counts

**语法:** obj &lt;&lt; Show Counts( state=0|1 )

**说明:** 显示或隐藏直方图上的直条计数，它给出每个直方图直条所表示的列值的频数。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Counts( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Counts( 1 );

```

#### Show Percents

**语法:** obj &lt;&lt; Show Percents( state=0|1 )

**说明:** 显示或隐藏直方图上的直条百分比，它给出每个直方图直条所表示的列值的百分比。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Percents( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Percents( 1 );

```

#### Std Error Bars

**语法:** obj &lt;&lt; Std Error Bars( state=0|1 )

**说明:** 在每个直方图直条上显示或隐藏标准误差直条。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Std Error Bars( 1 );

```

#### Test Probabilities

**语法:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**说明:** 对指定的假设概率（p1、p2、p3 等）检验分类变量水平的估计概率。对于包含两个水平的变量，使用“检验”选项指定检验的备择假设的符号。对于包含两个以上水平的变量，使用“固定”选项指定如何处理缺失假设值。请注意，f 是可选参数，它指定前面的水平被视为固定。

**两水平，单侧示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**两水平，双侧示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**多水平示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );obj << Test Probabilities(	Test( Hypothesized ),	0.8,	0.04375,	0.075,	0.04375,	0.01875,	0.01875);

```

#### Vertical

**语法:** obj &lt;&lt; Vertical( state=0|1 )

**说明:** 将直方图、箱线图和分位数图的方向更改为垂直。 默认开启。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Vertical( 0 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Vertical( 0 );

```

## Nominal Distribution

### 项消息

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**Anonymous preset**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();dt2 = Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );obj2 = dt2 << Distribution(	Nominal Distribution( Column( :Aircraft Damage ) ),	Continuous Distribution( Column( :Total Minor Injuries ) ));Wait( 1 );obj2[2] << Apply Preset( preset );

```

**Search by name**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ) ),	Nominal Distribution( Column( :age ) ));Wait( 1 );obj[1] << Apply Preset( "Sample Presets", "Check Normality" );

```

#### Axes on Left

**语法:** obj &lt;&lt; Axes on Left( state=0|1 )

**说明:** 将计数、概率、密度和正态分位数图轴移动到水平图形的左侧。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Nominal Distribution( Column( :Age ), Horizontal Layout( 1 ), Count Axis( 1 ) ));obj << Axes on Left( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution(	Multiple Response Distribution(		Column( :Brush Delimited ),		Horizontal Layout( 1 ),		Count Axis( 1 )	));obj << Axes on Left( 1 );

```

#### Confidence Interval

**语法:** obj &lt;&lt; Confidence Interval( "0.90"|"0.95"|"0.99"|"其他..." )

**说明:** 计算有关概率的得分置信区间。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Confidence Interval( 0.95 );

```

#### Count Axis

**语法:** obj &lt;&lt; Count Axis( state=0|1 )

**说明:** 显示或隐藏直方图的计数轴。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Count Axis( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Count Axis( 1 );

```

#### Density Axis

**语法:** obj &lt;&lt; Density Axis( state=0|1 )

**说明:** 在直方图上显示或隐藏密度曲线的密度轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Density Axis( 1 );

```

#### Frequencies

**语法:** obj &lt;&lt; Frequencies( state=0|1 )

**说明:** 显示或隐藏“频数”报表，它列出每个水平的计数和概率。 默认开启。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Frequencies( 0 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Frequencies( 0 );

```

#### Histogram

**语法:** obj &lt;&lt; Histogram( state=0|1 )

**说明:** 显示或隐藏直方图。 默认开启。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );Wait( 1 );obj << Histogram( 0 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );Wait( 1 );obj << Histogram( 0 );

```

#### Histogram Color

**语法:** obj &lt;&lt; Histogram Color( color )

**说明:** 更改直方图直条的颜色。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Histogram Color( "Red" );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Histogram Color( "Blue" );

```

#### Horizontal Layout

**语法:** obj &lt;&lt; Horizontal Layout( state=0|1 )

**说明:** 将直方图和报表的方向更改为水平。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Horizontal Layout( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Horizontal Layout( 1 );

```

#### Mosaic Plot

**语法:** obj &lt;&lt; Mosaic Plot( state=0|1 )

**说明:** 显示或隐藏每个名义型或有序型响应变量的马赛克条形图。马赛克图是堆叠的条形图，每个段与其组的频数计数成比例。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Mosaic Plot( 1 );

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution(	Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) ),	Nominal Distribution( Column( :age ), Mosaic Plot( 1 ) ));preset = obj[1] << New Preset();

```

#### Order By

**语法:** obj &lt;&lt; Order By( "Default"|"Count Descending"|"Count Ascending" )

**说明:** 按计数升序或降序方式对直方图、马赛克图和“频数”报表排序。您还可以恢复为默认排序。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Order By( "Count Descending" );

```

#### Prob Axis

**语法:** obj &lt;&lt; Prob Axis( state=0|1 )

**说明:** 显示或隐藏该直方图的概率或比例轴。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Prob Axis( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Prob Axis( 1 );

```

#### Save

**语法:** obj &lt;&lt; Save( "水平编号"|"值排序"|"在日志中显示脚本" )

**说明:** 在数据表的新列中保存水平编号，或将脚本保存至日志。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Save( "Level Numbers" );

```

#### Separate Bars

**语法:** obj &lt;&lt; Separate Bars( state=0|1 )

**说明:** 在直方图的各直条之间添加间距。该选项仅可用于分类变量。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Separate Bars( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Separate Bars( 1 );

```

#### Show Counts

**语法:** obj &lt;&lt; Show Counts( state=0|1 )

**说明:** 显示或隐藏直方图上的直条计数，它给出每个直方图直条所表示的列值的频数。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Counts( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Counts( 1 );

```

#### Show Percents

**语法:** obj &lt;&lt; Show Percents( state=0|1 )

**说明:** 显示或隐藏直方图上的直条百分比，它给出每个直方图直条所表示的列值的百分比。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Show Percents( 1 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Show Percents( 1 );

```

#### Std Error Bars

**语法:** obj &lt;&lt; Std Error Bars( state=0|1 )

**说明:** 在每个直方图直条上显示或隐藏标准误差直条。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Std Error Bars( 1 );

```

#### Test Probabilities

**语法:** obj &lt;&lt; Test Probabilities( Test( Hypothesized|Greater than|Less than ), Fix( Hypothesized|Omitted ), p1, &lt;f&gt;, p2, &lt;f&gt;, p3, &lt;f&gt;, etc. )

**说明:** 对指定的假设概率（p1、p2、p3 等）检验分类变量水平的估计概率。对于包含两个水平的变量，使用“检验”选项指定检验的备择假设的符号。对于包含两个以上水平的变量，使用“固定”选项指定如何处理缺失假设值。请注意，f 是可选参数，它指定前面的水平被视为固定。

**两水平，单侧示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Less than ), 0.5, f, 0.5 );

```

**两水平，双侧示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :sex ) ) );obj << Test Probabilities( Test( Hypothesized ), 0.4, f, 0.6, f );

```

**多水平示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :age ) ) );obj << Test Probabilities(	Test( Hypothesized ),	0.8,	0.04375,	0.075,	0.04375,	0.01875,	0.01875);

```

#### Vertical

**语法:** obj &lt;&lt; Vertical( state=0|1 )

**说明:** 将直方图、箱线图和分位数图的方向更改为垂直。 默认开启。

**名义分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Nominal Distribution( Column( :Age ) ) );obj << Vertical( 0 );

```

**多重响应分布示例**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Distribution( Multiple Response Distribution( Column( :Brush Delimited ) ) );obj << Vertical( 0 );

```

## Prediction Interval

### 项消息

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 删除“预测区间”报表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Prediction Interval( 0.95, 20 );Wait( 2 );scrobj = (Report( obj )["Prediction Interval"] << get scriptable object);scrobj << Remove;

```

## Test Equivalence

### 项消息

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 删除“检验等价性”报表。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Test Equivalence( Target( 62 ), Practical Difference( 1 ), Confidence( 0.95 ) );Wait( 2 );scrobj = (Report( obj )["Test Equivalence"] << get scriptable object);scrobj << Remove;

```

## Test Mean

### 项消息

#### PValue animation

**语法:** obj &lt;&lt; Test Mean( PValue Animation )

**说明:** 打开一个单独的窗口，它显示 p 值如何随均值变化的动画。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Test Mean( 60, PValue Animation );

```

#### Power animation

**语法:** obj &lt;&lt; Test Mean( Power Animation )

**说明:** 打开一个单独的窗口，它显示功效如何随均值变化的动画以及检验是单侧的还是双侧的。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Test Mean( 60, Power Animation );

```

#### Remove Test

**语法:** obj &lt;&lt; Remove Test

**说明:** 删除“检验均值”报表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Test Mean( 60 );Wait( 2 );scrobj = (Report( obj )["Test Mean"] << get scriptable object);scrobj << Remove Test;

```

## Tolerance Interval

### 项消息

#### Remove

**语法:** obj &lt;&lt; Remove

**说明:** 删除“容许区间”报表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval( Alpha( 0.95 ), Proportion( 0.85 ) );Wait( 2 );scrobj = (Report( obj )["Normal Distribution Tolerance Intervals"] << get scriptable object);scrobj << Remove;

```

#### Save Distribution as a Column Property

**语法:** obj &lt;&lt; Tolerance Interval( Save Distribution as a Column Property )

**说明:** 将“容许区间分布”类型保存为原始数据表的列中的列属性。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = Distribution( Column( :Height ) );obj << Tolerance Interval(	Alpha( 0.95 ),	Proportion( 0.90 ),	Lognormal,	Save Distribution as a Column Property);

```

#### Save to Spec Limits Column Property

**语法:** obj &lt;&lt; Save to Spec Limits Column Property( Alpha(number), Proportion(number), &lt;Lower | Upper&gt;, &lt;Nonparametric&gt;, &lt;Save to Spec Limits Column Property&gt; )

**说明:** 将容差区间保存为数据表“规格限”列属性中的规格限。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Distribution( Column( :Height ) );obj << Tolerance Interval(	Alpha( 0.95 ),	Proportion( 0.85 ),	Save to Spec Limits Column Property);

```

