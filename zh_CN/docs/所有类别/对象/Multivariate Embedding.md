# Multivariate Embedding



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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Multivariate Embedding(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Multivariate Embedding

**语法:** Multivariate Embedding( Y( columns ) )

**说明:** 使用均匀流形近似和投影 (UMAP) 方法或 t 分布随机近邻嵌入 (t-SNE) 方法将数据从高维空间映射到低维空间。很多时候您希望将数据映射到二维或三维，以便可以轻松地可视化低维空间。两种方法都尝试保留数据的局部结构，但是对于大型数据集，UMAP 通常比 t-SNE 快。

**JMP添加的版本:** 17

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );/* Parameters can be changed according to data features */obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Maximum Iterations( 1500 ),	Perplexity( 15 ),	Initial Principal Component Dimensions( 55 ),	Random Seed( 2022 ),	Output Dimensions( 3 ));

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );/* by group example */dt << New Column( "_bycol",	Character,	Nominal,	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( _bycol ));

```

## 列

### By

**语法:** obj &lt;&lt; By( column(s) )

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Columns

**语法:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

### Y

**语法:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ));

```

## 项消息

### Batch Mode if N Greater Than

**语法:** Batch Mode if N greater than( number = 4096 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定当样本大小大于指定数时使用多线程来优化嵌入坐标。 默认为“4096”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Batch Mode if N greater than( 100 ));

```

### Convergence Criterion

**语法:** Convergence Criterion( number = 1e-8 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 默认为“1e-8”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Convergence Criterion( 1e-8 ));

```

### Distance Metric

**语法:** Distance Metric( "Euclidean" | "Angular" | "Hamming" | "Manhattan") &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于计算最近邻之间距离的量度。距离量度的选项为“欧氏”（默认值）、“角”、“Hamming”和“Manhattan”。该选项仅在 ANNOY 指定为“最近邻方法”时适用。

### Eta

**语法:** Eta( number = 200 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定学习率。 默认为“200”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Eta( 200 ));

```

### Gradient Descent Method

**语法:** Gradient Descent Method( "SGD" | "ADAM") &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于优化嵌入布局的梯度下降方法。您可以在随机梯度下降 (SGD) 或自适应矩估计 (ADAM) 之间进行选择。默认方法是 SGD。ADAM 选项仅在批处理模式下可用。

### Inflate Iterations

**语法:** Inflate Iterations( number = 250 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定在此之后困惑度不再扩大的迭代。 默认为“250”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Inflate Iterations( 250 ));

```

### Initial Principal Component Dimensions

**语法:** Initial Principal Component Dimensions( number = 50 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定应保留在初始 PCA 步骤中的维数。 默认为“50”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Initial Principal Component Dimensions( 50 ));

```

### Initial Scale

**语法:** Initial Scale( number = 0.0001 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于所导出成分的初始尺度。 默认为“.0001”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Initial Scale( 0.001 ));

```

### Learning Rate

**语法:** Learning Rate( number = 1.0 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定计算中学习率的值，它影响模型适应问题有多快。 默认为“1.0”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Learning Rate( 1.0 ));

```

### Local Connectivity

**语法:** Local Connectivity( number = 1 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定假定在局部级别连通的最近邻数。默认值是 1，它假定高维空间中的每个点至少有一个与它相连的其他近邻。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Local Connectivity( 1 ));

```

### Maximum Iterations

**语法:** Maximum Iterations( number = 1000 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定计算嵌入成分时使用的最大迭代次数。 默认为“1000”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Maximum Iterations( 1500 ));

```

### Method

**语法:** Method( "t-SNE" | "UMAP" ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定降维方法。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "UMAP" ));

```

### Minimum Distance

**语法:** Minimum Distance( number = 0.01 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定低维空间中点之间的最小标准化距离。 默认为“0.01”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Minimum Distance( 0.001 ));

```

### Missing Value Imputation

**语法:** Missing Value Imputation( state =0|1 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定数据中使用多元奇异值分解 (SVD) 方法插补的缺失值。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Missing Value Imputation( 0 ));

```

### Nearest Neighbor Method

**语法:** Nearest Neighbor Method( "Default" | "VPTree (Exact)" | "ANNOY (Approximate)") &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于查找最近邻的方法。您可以在优点树 (VPTree) 或近似最近邻方法 (ANNOY) 之间进行选择。默认选项根据样本大小和变量数选择最近邻方法。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Method( "UMAP" ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Nearest Neighbor Method( "VPTree (Exact)" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Method( "UMAP" ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Nearest Neighbor Method( "ANNOY (Approximate)" ));

```

### Negative Sample Rate

**语法:** Negative Sample Rate( number = 5 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定在查找数据的低维表示时每个正 1 单纯形样本要使用的负 1 单纯形样本数。“负抽样率”值的范围为 2 至 20。 默认为“5”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Negative Sample Rate( 5 ));

```

### Number of Epochs

**语法:** Number of Epochs( number = 500 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定优化低维表示时要使用的训练时期数。这是算法处理完整训练数据的次数。 默认为“500”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Epochs( 500 ));

```

### Number of Neighbors

**语法:** Number of Neighbors( number = 15 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定为每个数据点找到的近邻数。指定的近邻数越小，UMAP 算法越着重于数据局部结构。随着近邻数增加，UMAP 算法会捕获更多的数据全局结构。 默认为“15”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Method( "UMAP" ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Neighbors( 20 ));

```

### Output Dimensions

**语法:** Output Dimensions( number = 2 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定所选方法导出的成分数。该数值必须 >=2。 默认为“2”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Output Dimensions( 3 ));

```

### Perplexity

**语法:** Perplexity( number = 30 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定困惑度参数的值，该值与计算样本的相似性有关。困惑度参数的值应介于 5 和 50 之间，并且不应大于样本大小的八分之一。默认值是 30 或样本大小八分之一中的较小值。 默认为“30”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Perplexity( 20 ));

```

### Random Seed

**语法:** Random Seed( number = 1234 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于获取可再现结果的随机种子数。 默认为“123”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Random Seed( 1234 ));

```

### Save Embedding Component Values

**语法:** obj &lt;&lt; Save Embedding Component Values

**说明:** 将派生的嵌入成分另存为数据表中的新列。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Random Seed( 1234 ));obj << Save Embedding Component Values;

```

### Save PQ Matrices

**语法:** obj &lt;&lt; Save PQ Matrices

**说明:** 显示 P 和 Q 矩阵，它们可参考 van der Maaten (2008)。该选项仅在未选择 t-SNE 的稀疏模式时有效。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Perplexity( 15 ),	Sparse( 0 ));obj << Save PQ Matrices;

```

### Sparse

**语法:** Sparse( state =0|1 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定是否使用稀疏模式。稀疏模式允许计算高维数据集。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Sparse( 1 ));

```

### Standardize

**语法:** Standardize( state =0|1 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定在距离计算之前数据是否经过内部标准化。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Method( "t-SNE" ),	Standardize( 1 ));

```

### a

**语法:** a( number = 0 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定控制嵌入优化的参数之一。若该值指定为 0 或负数，则算法中通过非线性最小二乘法过程计算 a。 默认为“0”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	a( 0 ));

```

### b

**语法:** b( number = 0 ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定控制嵌入优化的参数之一。若该值指定为 0 或负数，则算法中通过非线性最小二乘法过程计算 b。 默认为“0”。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << Multivariate Embedding(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	b( 0 ));

```

