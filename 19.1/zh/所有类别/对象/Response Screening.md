# Response Screening



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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Data Table Window;

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

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Relaunch Analysis;

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Save Script to Script Window;

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

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Response Screening

**语法:** Response Screening( Y( columns ), X( columns ) )

**说明:** 自动执行对大量的响应进行线性模型效应的检验的过程。检验结果和汇总统计量以数据表和图的形式呈现。假发现率 (FDR) 可防止错误声明显著性。稳健估计方法可降低检验对于离群值的灵敏度。

#### 4 个响应和 26 个前瞻性预测变量的响应筛选

```jsl

dt = Open( "$SAMPLE_DATA/Baltic.jmp" );obj = dt << Response Screening( Y( :ls, :ha, :dt ), X( Column Group( "Intensities" ) ) );

```

#### 使用列编号指定的响应筛选

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

#### 使用稳健拟合的响应筛选

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	Y( Column Group( "Responses" ) ),	X( :Process ),	Robust( 1 ));

```

#### 具有均值差值火山图的多列响应筛选

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Father, :Mother, :Sex, :Disease Status ),	Common Y Scale( 1 ),	Volcano Plots Use FDR Axis( 1 ),	SendToReport(		Dispatch( {}, "", TabListBox( 1 ), {Set Selected( 4 )} ),		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )	));

```

#### 对四个预测变量分别进行多列响应筛选

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ));

```

#### 已选定火山图的子组中的响应筛选

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( :Father, :Mother, :Sex, :Disease Status ),	Subgroup( Column Group( "Markers" ) ),	Common Y Scale( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

```

#### 组中多列响应筛选

```jsl

dt = Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );obj = dt << Response Screening(	Y( Column Group( "Markers" ) ),	X( :Trait1, :Trait2, :Trait3, :Trait4 ),	Grouping( "Sex" ));

```

## 列

### By

**语法:** obj = Response Screening(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 108 ) ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Freq

**语法:** obj = Response Screening(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ), Freq( :_freqcol ) );

```

### Grouping

**语法:** obj = Response Screening(...&lt;Grouping( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将分类列指定为分组变量。分配给指定列的每个水平的行将分别进行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Grouping( :Site ));

```

### Response

**语法:** obj = Response Screening(...Response( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含要分析的测量值的响应变量。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Subgroup

**语法:** obj = Response Screening(...&lt;Subgroup( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一个或多个子组变量。当定义了子组变量时，会为该子组变量的每个类别执行其他拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Subgroup( :Site ));

```

### Weight

**语法:** obj = Response Screening(...&lt;Weight( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ), Weight( :_weightcol ) );

```

### X

**语法:** obj = Response Screening(...X( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

### Y

**语法:** obj = Response Screening(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含要分析的测量值的响应变量。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );obj = dt << Response Screening( X( :Process ), Y( Eval( 8 :: 108 ) ) );

```

## 项消息

### Cauchy

**语法:** obj = Response Screening(...Cauchy( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 使用最大似然和 Cauchy 连结函数估计参数。该估计方法假定误差服从 Cauchy 分布，它具有比正态分布更肥大的尾部。该方法弱化了对离群值的强调。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Eval( 8 :: 48 ) ), Cauchy( 1 ) );

```

### Common X Scale

**语法:** obj = Response Screening(...Common X Scale( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 通知平台所有连续 X 变量都在同一尺度上。这对于比较不同的 X 变量的斜率是必要的。

```jsl

dt = Open( "$Sample_Data/Iris.jmp" );dt << Response Screening(	Y( :Sepal length, :Sepal width ),	X( :Petal length, :Petal width ),	Common X Scale);

```

### Common Y Scale

**语法:** obj = Response Screening(...Common Y Scale( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 通知平台所有连续响应都在同一尺度上。这对于比较均值差值或斜率是必要的。

```jsl

dt = Open( "$Sample_Data/Iris.jmp" );dt << Response Screening(	X( :Species ),	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Common Y Scale);

```

### Comparisons

**语法:** obj = Response Screening(...Comparisons( "每个带有控制组的比较"|"所有组合" )...)

**说明:** 指定用于比较均值或比率的方法。您可以将每个水平与控制组水平进行比较，也可以比较所有可能的水平组合。

**JMP添加的版本:** 19

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ),	Comparisons( "All combinations" ),	Name( "2 by M Table" )(1));

```

### Corr

**语法:** obj = Response Screening(...Corr( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 根据值排序定义的指标计算 Pearson 积矩相关性。

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );dt << Response Screening(	X( :Employee Tenure, :Position Tenure, :Age Group ),	Y( :Job Satisfaction ),	Corr( 1 ));

```

### Empirical Bayes Shrinkage

**语法:** obj = Response Screening(...Empirical Bayes Shrinkage( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将剩余方差估计值朝估计的先验模式收缩，在所有估计值中借用强度。当在一个公共尺度上筛选许多连续 Y 变量时，这很有用。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 88 ) ),	Common Y Scale,	Empirical Bayes Shrinkage( 1 ));

```

### Fit Selected Items

**语法:** obj &lt;&lt; Fit Selected Items

**说明:** 将“以 X 拟合 Y”报表添加至“响应筛选”报表。添加的报表对应于图中的选定点或“结果表”中的选定行。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Select Where( FDR Logworth > 200 );obj << Fit Selected Items;

```

### Force X Categorical

**语法:** obj = Response Screening(...Force X Categorical( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 忽略建模类型并将所有 X 列视为分类型。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :height, :sex ), Y( :age, :weight ), Force X Categorical( 1 ) );

```

### Force X Continuous

**语法:** obj = Response Screening(...Force X Continuous( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 忽略建模类型并将所有 X 列视为连续型。

```jsl

dt = Open( "$Sample_Data/Consumer Preferences.jmp" );dt << Response Screening(	X( :Age Group, :Job Satisfaction ),	Y( :Gender, :Single Status ),	Force X Continuous( 1 ));

```

### Force Y Categorical

**语法:** obj = Response Screening(...Force Y Categorical( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 忽略建模类型并将所有 Y 列视为分类型。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( Y( :height, :sex ), X( :age, :weight ), Force Y Categorical( 1 ) );

```

### Force Y Continuous

**语法:** obj = Response Screening(...Force Y Continuous( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 忽略建模类型并将所有 Y 列视为连续型。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( Y( :age ), X( :height, :weight ), Force Y Continuous( 1 ) );

```

### Get Crosstab RTF

**语法:** obj &lt;&lt; Get Crosstab RTF( state=0|1 )

**说明:** Get an RTF source for a crosstab table.

**JMP添加的版本:** 19

### Get Crosstab Script

**语法:** obj &lt;&lt; Get Crosstab Script( state=0|1 )

**说明:** Get a JSL display script for a crosstab table.

**JMP添加的版本:** 19

### Get PValues

**语法:** obj &lt;&lt; Get PValues

**说明:** 返回对 p 值表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Outlier Indicator);pvals = obj << Get PValues;Show( pvals );

```

### Kappa

**语法:** obj = Response Screening(...Kappa( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将称为 Kappa 的新列添加至“结果表”。Kappa 是 Y 和 X 之间一致性的测度。

```jsl

dt = Open( "$Sample_Data/Mail Messages.jmp" );dt << Response Screening( X( :From ), Y( :To ), Kappa( 1 ) );

```

### Kruskal Wallis Test

**语法:** obj = Response Screening(...Kruskal Wallis Test( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 计算 Kruskal-Wallis 检验，它是分类 X 对连续 Y 的非参数 (Wilcoxon) 基于秩的检验。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :sex ), Y( :height, :weight ), Kruskal Wallis Test( 1 ) );

```

### Max Comparison Levels

**语法:** obj = Response Screening(...Max Comparison Levels( number=100 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定比较中支持的水平数。 默认为“100”。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Wafer Number ),	Y( Column Group( "Responses" ) ),	Max Comparison Levels( 24 ));

```

### Max Logworth

**语法:** obj = Response Screening(...Max Logworth( number )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 控制图涉及 Logworth 值的尺度。超过指定值的 Logworth 值绘制为指定值以防止 Logworth 图中出现极端尺度。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Max Logworth( 1000 ));

```

### Missing is Category

**语法:** obj = Response Screening(...Missing is Category( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将分类变量的缺失值视为单独的类别。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );Row() = 1;:age = .;Row() = 8;:age = .;dt << Response Screening( X( :age ), Y( :sex ), Missing is Category( 1 ) );

```

### Negative Binomial Y

**语法:** obj = Response Screening(...Negative Binomial Y( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将每个 Y 响应拟合为具有负二项 Y 分布的计数。

```jsl

dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );dt << Response Screening(	X( :clean ),	Grouping( :failure ),	Y( :N ),	Negative Binomial Y( 1 ));

```

### No Report

**语法:** obj = Response Screening(...No Report( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 隐藏报表窗口。使用该选项可以运行“保存”命令以获取结果而不显示报表窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save PValues,	No Report( 1 ));

```

### PValues Table on Launch

**语法:** obj = Response Screening(...PValues Table on Launch( state=0|1 )...)

**说明:** 为 p 值和各个模型拟合统计量创建数据表。 默认为“0”。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 88 ) ),	Robust,	PValues Table on Launch( 1 ));

```

### Paired X and Y

**语法:** obj = Response Screening(...Paired X and Y( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 根据它们在启动窗口中的顺序，仅对与 X 列配对的 Y 列执行检验。例如，Y1 与 X1 配对，Y2 与 X2 配对。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :age, :sex ), Y( :height, :weight ), Paired X and Y( 1 ) );

```

### Poisson Y

**语法:** obj = Response Screening(...Poisson Y( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将每个 Y 响应拟合为具有 Poisson 分布的计数。

```jsl

dt = Open( "$Sample_Data/Quality Control/Failure2.jmp" );dt << Response Screening( X( :clean ), Grouping( :failure ), Y( :N ), Poisson Y( 1 ) );

```

### Practical Difference Portion

**语法:** obj &lt;&lt; Practical Difference Portion( number=0.10 )

**说明:** 指定规格范围中表示您认为实际有意义的差异的部分。 默认为“0.10”。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 48 ) ),	Practical Difference Portion( .2 ),	Save Compare Means);

```

### Practical Differences and Equivalences

**语法:** obj &lt;&lt; Practical Differences and Equivalences( Practical Portion(fraction) | Specific Difference(number) )

**说明:** 给定待检差值，检验实际差值是否显著大于或显著小于待检差值的绝对值。

### Quartiles per Group

**语法:** obj = Response Screening(...Quartiles per Group( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 计算分类 X 对连续 Y 的每个组的四分位数和极差。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening( X( :sex ), Y( :height, :weight ), Quartiles per Group( 1 ) );

```

### Ratio Adjustment

**语法:** obj = Response Screening(...Ratio Adjustment( "无调整"|"任意为零时加 0.5"|"始终加 0.5" )...)

**说明:** 提供选项以在计算风险比、优势比和风险差值时将 0.5 加到单元格计数。该调整可避免由除以零引起的问题。

**JMP添加的版本:** 17

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ),	Ratio Adjustment( "Add 0.5 Always" ),	Name( "2 by M Table" )(1));

```

### Robust

**语法:** obj = Response Screening(...Robust( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 使用 Huber M 估计方法拟合回归和 ANOVA 模型，它不受离群值影响。

```jsl

dt = Open( "$Sample_Data/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Eval( 8 :: 88 ) ), Robust( 1 ) );

```

### Save 2 by M

**语法:** obj &lt;&lt; Name( "Save 2 by M table" )

**说明:** 将“M \* 2 结果”报表中的信息以及其他检验统计量保存至新数据表。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ));obj << Name( "2 by M Table" )(1);obj << Name( "Save 2 by M Table" );

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );obj = dt << Response Screening(	X( :Age Group ),	Y( :Single Status, :Gender, :I am working on my career ));obj << "2 by M Table"n( 1 );obj << "Save 2 by M Table"n;

```

### Save Compare Means

**语法:** obj &lt;&lt; Save Compare Means

**说明:** 创建一个数据表，它包含在分类变量的各水平下检验所有配对比较的结果。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Compare Means);

```

### Save Means

**语法:** obj &lt;&lt; Save Means

**说明:** 创建一个数据表，它包含分类变量每个水平的计数、均值和标准差。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save Means );

```

### Save Means Differences

**语法:** obj &lt;&lt; Save Means Differences

**说明:** 创建一个数据表，它包含在分类变量的各水平下检验所有配对比较的结果。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Means Differences);

```

### Save Outlier Indicator

**语法:** obj &lt;&lt; Save Outlier Indicator

**说明:** 将一组指示符列保存至原始数据表以指示离群值。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Outlier Indicator);

```

### Save PValues

**语法:** obj &lt;&lt; Save PValues

**说明:** 创建一个数据表，它包含“结果表”中的信息。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening( X( :Process ), Y( Column Group( "Responses" ) ), Save PValues );

```

### Save Std Residuals

**语法:** obj &lt;&lt; Save Std Residuals

**说明:** 对于每次拟合，将一列添加至原始数据表，它包含残差除以其估计的标准差所得的值。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Column Group( "Responses" ) ),	Save Std Residuals);

```

### Select Columns

**语法:** obj &lt;&lt; Select Columns( condition )

**说明:** 选择原始数据表中与“结果表”中的选定行对应的列。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Select Where( FDR Logworth > 200 );obj << Select Columns;

```

### Select Where

**语法:** obj &lt;&lt; Select Where

**说明:** 选择报表表中与特定条件相对应的项。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Select Where( FDR Logworth > 200 );

```

### Show Crosstab Report

**语法:** obj &lt;&lt; Show Crosstab Report( state=0|1 )

**说明:** Experimental Hidden Feature: Show the details for each X and Y combination in a crosstab cell

**JMP添加的版本:** 19

### Show Means Differences

**语法:** obj &lt;&lt; Show Means Differences

**说明:** 在“响应筛选”报表窗口中显示“差值-Logworth”图和“均值差”报表。该选项假定 Y 变量位于一个共同的尺度上。

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );Response Screening(	Y( Column Group( "Markers" ) ),	X( :Sex, :Disease Status ),	Common Y Scale( 1 ),	Show Means Differences( 1 ),	SendToReport(		Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ),		Dispatch( {}, "", TabListBox( 2 ), {Set Selected( 2 )} )	));

```

### Show Plots

**语法:** obj &lt;&lt; Show Plots( state=0|1 )

**说明:** 在报表窗口中显示或隐藏图。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Show Result Tables( 0 );

```

### Show Report Tables

**语法:** obj &lt;&lt; Show Report Tables( state=0|1 )

**说明:** 在报表窗口中显示或隐藏结果表。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );obj = Response Screening( X( :Process ), Y( Column Group( "Responses" ) ) );obj << Show Result Tables( 0 );

```

### Show Slopes

**语法:** obj &lt;&lt; Show Slopes

**说明:** 在“响应筛选”报表窗口中显示“斜率-Logworth”图。该选项假定 Y 变量位于一个共同的尺度上，X 变量位于一个共同的尺度上。

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( Column Group( "Markers" ) ),	Show Slopes( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

```

### Specific Difference to Detect

**语法:** obj &lt;&lt; Specific Difference to Detect( number )

**说明:** 指定待检差值而不是规格范围的部分或 sigma。该选项假定所有 Y 变量位于同一个尺度上。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	X( :Process ),	Y( Eval( 8 :: 48 ) ),	Practical Difference Portion( .2 ),	Save Compare Means);

```

### Subgroup Twoway

**语法:** obj = Response Screening(...Subgroup Twoway( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 拟合所有双因子子组组合。该选项仅在定义了至少一个“子组”变量时可用。

```jsl

dt = Open( "$Sample_Data/Big Class.jmp" );dt << Response Screening(	X( :height ),	Y( :weight ),	Subgroup( :age, :sex ),	Subgroup Twoway( 1 ));

```

### Tabbed Report Layout

**语法:** obj &lt;&lt; Tabbed Report Layout( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 17

### Unthreaded

**语法:** obj = Response Screening(...Unthreaded( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 禁止多线程。

```jsl

dt = Open( "$SAMPLE_DATA/Probe.jmp" );dt << Response Screening(	Y( :DELL_RPNBR, :DELL_RPPBR, :DELW_M1, :DELW_M2, :DELW_NBASE ),	X( :Process ),	Unthreaded( 1 ));

```

### Volcano Plots Use FDR Axis

**语法:** obj = Response Screening(...Volcano Plots Use FDR Axis( state=0 )...)

**说明:** 在火山图的垂直轴上使用 FDR 调整 Logworth 代替未调整 Logworth。 默认为“0”。

**JMP添加的版本:** 18

<b>启动窗口项: 是</b>

```jsl

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );Response Screening(	Y( :Trait1, :Trait2, :Trait3, :Trait4 ),	X( Column Group( "Markers" ) ),	Common Y Scale( 1 ),	Common X Scale( 1 ),	Volcano Plots Use FDR Axis( 1 ),	SendToReport( Dispatch( {}, "", TabListBox, {Set Selected( 4 )} ) ));

```

