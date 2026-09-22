# K Means Cluster



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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = K Means Cluster(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### K Means Cluster

**语法:** K Means Cluster( Y( column(s) ), Number of Clusters( number ) )

**说明:** 基于包含多达数百万行的数据表中的数值变量对行聚类。您必须提前指定聚类数。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

## 列

### By

**语法:** obj = K Means Cluster(...&lt;By( column(s) )&gt;...)

**说明:** 为指定列的每个水平执行单独的分析。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Go;

```

### Columns

**语法:** obj = K Means Cluster(...Columns( column(s) )...)

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);

```

### Freq

**语法:** obj = K Means Cluster(...&lt;Freq( column )&gt;...)

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = K Means Cluster(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Freq( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = Normal Mixtures(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Freq( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

### Weight

**语法:** obj = K Means Cluster(...&lt;Weight( column )&gt;...)

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = K Means Cluster(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Weight( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Failure3Freq.jmp" );obj = Normal Mixtures(	Y(		:contamination, :corrosion, :doping, :metallization, :miscellaneous, :oxide defect,		:silicon defect	),	Weight( :SampleSize ),	Number of Clusters( 2 ),	Go);

```

### Y

**语法:** obj = K Means Cluster(...Y( column(s) )...)

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);

```

## 项消息

### Columns Scaled Individually

**语法:** Columns Scaled Individually( state=0|1 )

**说明:** 独立于其他列调整每列的尺度。 默认开启。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Columns Scaled Individually( 1 ),	Go);

```

### Go

**语法:** obj &lt;&lt; Go

**说明:** 通过完成迭代启动平台。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;

```

### Initial Clusters

**语法:** obj &lt;&lt; Initial Clusters( "Default" | "Randomize" | column )

**说明:** 确定如何创建初始聚类。初始聚类可以是随机的，您也可以指定一个分类列来定义初始聚类，以每个类别的均值为种子。

**JMP添加的版本:** 19

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Initial Clusters( :Species ),	Go);

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Initial Clusters( "Randomize" ),	Go);

```

### Max Iterations

**语法:** obj &lt;&lt; Max Iterations( number )

**说明:** 设置最大迭代次数。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster( Y( :Sepal length, :Sepal width, :Petal length, :Petal width ) );obj << Max Iterations( 100 );obj << Go;

```

### Number of Clusters

**语法:** obj &lt;&lt; Number of Clusters( number )

**说明:** 更改聚类数。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);Wait( 1 );obj << Number of Clusters( 5 );obj << Go;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);Wait( 1 );obj << Number of Clusters( 5 );obj << Go;

```

### SOM

**语法:** obj &lt;&lt; SOM

**说明:** 使用自组织图创建聚类。由这个方法使用的网格结构可用于在二维中解释聚类。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << SOM;obj << Go;

```

### SOM Bandwidth

**语法:** obj &lt;&lt; SOM Bandwidth( number )

**说明:** 指定自组织图的带宽。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << SOM;obj << SOM Bandwidth( 0.5 );obj << Go;

```

### SOM N Rows

**语法:** obj &lt;&lt; SOM N Rows( number )

**说明:** 设置自组织图的行数。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << SOM( 1 );obj << SOM N Rows( 3 );obj << Go;

```

### Shift distances by rates

**语法:** obj &lt;&lt; Shift distances by rates( state=0|1 )

**说明:** 优先级高的点分配给更大的聚类。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Shift distances by rates( 1 ),	Go);

```

### Single Step

**语法:** obj &lt;&lt; Single Step( state=0|1 )

**说明:** 支持逐步执行各迭代。在“K 均值”分级显示项中，针对各迭代点击“Step”按钮。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Single Step( 1 );obj << Go;obj << Step;Wait( 1 );obj << Step;

```

### Use within cluster std dev

**语法:** obj &lt;&lt; Use within cluster std dev( state=0|1 )

**说明:** 计算用为每个聚类估计的标准差衡量尺度的距离。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Use within cluster std dev( 1 ),	Go);

```

## K Means Fit

### 项消息

#### Biplot

**语法:** obj &lt;&lt; Biplot( state=0|1 )

**说明:** 显示或隐藏数据头两个主成分中的点和聚类的图。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );

```

#### Biplot 3D

**语法:** obj &lt;&lt; Biplot 3D( state=0|1 )

**说明:** 显示或隐藏数据头三个主成分中的点和聚类的图。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot 3D( 1 );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot 3D( 1 );

```

#### Biplot Contour Density

**语法:** obj &lt;&lt; Biplot Contour Density( density percent )

**说明:** 设置密度等高线的水平。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Contour Density( .95 );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Contour Density( .95 );

```

#### Biplot Ray Position

**语法:** obj &lt;&lt; Biplot Ray Position( [X, Y, scaling] )

**说明:** 移动双标图射线显示。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Ray Position( [-1, -1, 2] );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Biplot Ray Position( [-1, -1, 2] );

```

#### Get Statistics

**语法:** obj &lt;&lt; Get Statistics

**说明:** 返回各聚类中每个变量的均值和标准差。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);stats = obj << Get Statistics;Show( stats );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);stats = obj << Get Statistics;Show( stats );

```

#### Mark Clusters

**语法:** obj &lt;&lt; Mark Clusters

**说明:** 在数据表各行的行状态中设置标记。每个聚类分配有一个不同的标记。这会影响所有使用行状态标记的平台上的图，包括聚类中的双标图。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );obj << Mark Clusters;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Biplot( 1 );obj << Mark Clusters;

```

#### Parallel Coord Plots

**语法:** obj &lt;&lt; Parallel Coord Plots( state=0|1 )

**说明:** 显示或隐藏每个聚类的图，它们分别显示了代表数据表每一行的连接线段。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Parallel Coord Plots( 1 );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Parallel Coord Plots( 1 );

```

#### Publish Cluster Formulas

**语法:** obj &lt;&lt; Publish Cluster Formulas

**说明:** 生成概率公式并将其发布为公式存储库中的公式列脚本。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Publish Cluster Formulas;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Publish Cluster Formulas;

```

#### SOM Heat Map

**语法:** obj &lt;&lt; SOM Heat Map( state=0|1 )

**说明:** 显示或隐藏自组织图聚类均值的热图，按聚类中使用的其中一个 Y 变量着色。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	{SOM N Rows( 2 ), SOM Bandwidth( 0.5 ), Single Step( 0 ), Number of Clusters( 4 ), SOM,	Go});obj << SOM Heat Map;

```

#### Save Cluster Distance

**语法:** obj &lt;&lt; Save Cluster Distance

**说明:** 将一列保存到数据表，其中包含到分配的聚类数的距离。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Cluster Distance;

```

#### Save Cluster Formula

**语法:** obj &lt;&lt; Save Cluster Formula

**说明:** 将确定最可能的聚类的公式列保存至数据表。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Cluster Formula;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Cluster Formula;

```

#### Save Clusters

**语法:** obj &lt;&lt; Save Clusters

**说明:** 将一个新列保存到数据表，该表包含每一行的最可能的聚类。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Clusters;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Clusters;

```

#### Save Colors to Table

**语法:** obj &lt;&lt; Save Colors to Table

**说明:** 根据聚类成员关系将为行状态分配的颜色保存在每一行中。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Colors to Table;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Save Colors to Table;

```

#### Save Distance Formula

**语法:** obj &lt;&lt; Save Distance Formula

**说明:** 将一列保存到数据表，其中包含到分配的聚类数的距离公式。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save Distance Formula;

```

#### Save K Cluster Distances

**语法:** obj &lt;&lt; Save K Cluster Distances

**说明:** 将到每个聚类中心的距离作为单独的列保存在数据表中。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save K Cluster Distances;

```

#### Save K Distance Formulas

**语法:** obj &lt;&lt; Save K Distance Formulas

**说明:** 将到每个聚类中心的距离公式作为单独的列保存在数据表中。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Save K Distance Formulas;

```

#### Save SOM Grid

**语法:** obj &lt;&lt; Save SOM Grid

**说明:** 将新列保存至数据表，它包含最可能聚类的自组织图网格行和列。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	{SOM N Rows( 2 ), SOM Bandwidth( 0.5 ), Single Step( 0 ), Number of Clusters( 4 ), SOM,	Go});obj << Save SOM Grid;

```

#### Scatterplot Matrix

**语法:** obj &lt;&lt; Scatterplot Matrix( state=0|1 )

**说明:** 基于当前聚类数使用置信椭圆在新窗口中创建散点图矩阵。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Scatterplot Matrix;

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Go;obj << Scatterplot Matrix;

```

#### Show Biplot Rays

**语法:** obj &lt;&lt; Show Biplot Rays( state=0|1 )

**说明:** 显示或隐藏双标图上的射线。 默认开启。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Show Biplot Rays( 1 );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go( Biplot( 1 ) ));obj << Show Biplot Rays( 1 );

```

#### Simulate Clusters

**语法:** obj &lt;&lt; Simulate Clusters

**说明:** 使用每个聚类的估计聚类混合概率、均值和标准差通过模拟数据创建新数据表。

**JMP添加的版本:** 14

**K 均值示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Simulate Clusters( 1000 );

```

**正态混合示例**

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = Normal Mixtures(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ),	Go);obj << Simulate Clusters( 1000 );

```

#### Step

**语法:** obj &lt;&lt; Step

**说明:** 采用一“K-均值”步或迭代。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << K Means Cluster(	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Number of Clusters( 3 ));obj << Single Step( 1 );obj << Go;obj << Step;Wait( 1 );obj << Step;

```

