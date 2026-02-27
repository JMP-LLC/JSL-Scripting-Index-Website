# Neural



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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Neural(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Neural

**语法:** Neural( Y( column ), X( columns ), &lt;Validation( column )&gt; )

**说明:** 使用灵活的输入变量函数预测一个或多个响应变量。灵活的框架引入了分层与 s 形函数。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

## 列

### By

**语法:** obj = Neural(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);

```

### Factor

**语法:** obj = Neural(...Factor( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Freq

**语法:** obj = Neural(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Freq( :_freqcol ),	Go);

```

### Response

**语法:** obj = Neural(...Response( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Validation

**语法:** obj = Neural(...&lt;Validation( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定定义验证集的数值列。该列应包含最多三个非重复值。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ));obj << Go;

```

### X

**语法:** obj = Neural(...X( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

### Y

**语法:** obj = Neural(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定您想要分析的一个或多个响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);

```

## 项消息

### Fit

**语法:** obj &lt;&lt; Fit( NTanH|NLinear|NTanH2|NLinear2|NGaussian|NGaussian2( number ) )

**说明:** 指定和拟合数据的神经网络隐藏层结构。多个层和非 TanH 激活函数仅限于 JMP Pro。要指定多个层和激活函数，请用逗号分隔参数。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Fit( NTanH( 4 ) );

```

### Go

**语法:** obj &lt;&lt; Go

**说明:** 开始对神经网络模型求解。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));Wait( 1 );obj << Go;

```

### Informative Missing

**语法:** obj = Neural(...Informative Missing( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** Habilita la codificación e imputación de valores faltantes. Cuando no se selecciona esta opción, se ignoran las filas con valores faltantes.



En el caso de las variables continuas, los valores faltantes se sustituyen por la media de la variable. Además, se crea una variable indicadora de valores faltantes y se incluye en el modelo.



En el caso de las variables categóricas, no se imputan los valores faltantes, pero se tratan como si fueran otro nivel de la variable en el modelo. Esta opción solo está disponible en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Neural( Y( :weight ), X( :height, :age ), Informative Missing( 1 ), Go );

```

### Learning Rate

**语法:** obj &lt;&lt; Learning Rate( fraction )

**说明:** Especifica el factor de escala para el impulso. Una tasa de aprendizaje cercana a 1 da como resultado una convergencia más rápida en un modelo final, pero también tiene una mayor tendencia a sobreajustar los datos. Esta opción solo está disponible en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	N Boost( 2 ));obj << Learning Rate( 0.2 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Multithreading

**语法:** obj = Neural(...Multithreading( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 在机器的可用线程间分配计算任务。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 0 ));obj << Go;

```

### N Boost

**语法:** obj &lt;&lt; N Boost( number )

**说明:** Especifica el número máximo de modelos que se utilizan para el impulso. Esta opción solo está disponible en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << N Boost( 2 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Penalty Method

**语法:** obj &lt;&lt; Penalty Method( "平方"|"绝对值"|"加权衰减"|"无惩罚" )

**说明:** 指定在拟合过程中对似然施加惩罚的惩罚方法。惩罚参数降低神经网络中过度拟合数据的趋势。若大多数 X 变量都对模型的预测能力有贡献的话，则“平方”选项较为适用。若 X 变量数量很多并且一小部分的贡献超过其他部分，则“绝对”和“加权衰减”选项较为适用。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Penalty Method( "Absolute" );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Robust Fit

**语法:** obj &lt;&lt; Robust Fit( state=0|1 )

**说明:** 使用最小绝对偏差而不是最小二乘训练模型。若您想最小化响应离群值的影响，则该选项很有用。该选项仅可用于 JMP Pro 中的连续响应。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Robust Fit( 1 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Set Random Seed

**语法:** obj = Neural(...Set Random Seed( number )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于重现开始值和验证分配的随机种子。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ));Wait( 1 );obj << Go;

```

### Transform Covariates

**语法:** obj &lt;&lt; Transform Covariates( state=0|1 )

**说明:** Transforma todas las variables continuas hasta la casi normalidad mediante la distribución de Johnson Su o de Johnson Sb. Transformar las variables continuas contribuye a mitigar los efectos negativos de los valores atípicos o de las distribuciones muy asimétricas. Esta opción solo está disponible en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Transform Covariates( 1 );obj << Go;obj << SendToReport( Dispatch( {}, "Model Launch", OutlineBox, {Close( 0 )} ) );

```

### Validation Method

**语法:** obj = Neural(...Validation Method( "Excluded Rows Holdback"|"Holdback", &lt;fraction = 0.3333&gt;|"KFold", &lt;number = 5&gt; )...);

**说明:** 指定用于验证模型的方法。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Method( "Holdback", 0.4 ),	Go);

```

## Neural Fit

### 项消息

#### Categorical Profiler

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Categorical Profiler( state=0|1 ))

**说明:** 显示或隐藏预测刻画器，其中所有分类响应已合并为刻画器中的一行。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Categorical Profiler( 1 ));

```

#### Contour Profiler

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Contour Profiler( state=0|1 ))

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。仅当模型包含多个连续因子时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Contour Profiler( 1 ));

```

#### Decision Threshold

**语法:** obj &lt;&lt; fit([number] &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) ))

**说明:** 显示或隐藏每个模型的拟合概率分布和预测值 - 实际值表。您可以更改概率阈值，以探索不同的阈值如何影响分类结果。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));Wait( 0 );obj << (Fit[1] << Decision Threshold( 1 ));Wait( 1 );obj << (Fit[1] << Decision Threshold( 1, Set Probability Threshold( .7 ) ));

```

#### Diagram

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Diagram( state=0|1 ))

**说明:** 显示或隐藏表示隐藏层结构的关系图。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Diagram( 1 ));

```

#### Get Average Absolute Error Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Test)

**说明:** Devuelve el estadístico Desviación absoluta media para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Test);Show( ae );

```

#### Get Average Absolute Error Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Training)

**说明:** 返回训练集的绝对偏差的均值统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Training);Show( ae );

```

#### Get Average Absolute Error Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Absolute Error Validation)

**说明:** Devuelve el estadístico Desviación absoluta media para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));ae = obj << (Fit[1] << Get Average Absolute Error Validation);Show( ae );

```

#### Get Average Log Error Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Test)

**说明:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Test);Show( avg );

```

#### Get Average Log Error Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Training)

**说明:** 返回训练集的 -log(p) 均值，其中 p 等于模型归因的响应实际发生的概率。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Training);Show( avg );

```

#### Get Average Log Error Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Average Log Error Validation)

**说明:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo, para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));avg = obj << (Fit[1] << Get Average Log Error Validation);Show( avg );

```

#### Get Confusion Matrix Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Test)

**说明:** Devuelve la matriz de confusión para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Test);Show( cm );

```

#### Get Confusion Matrix Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Training)

**说明:** 返回训练集的混淆矩阵。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Training);Show( cm );

```

#### Get Confusion Matrix Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Matrix Validation)

**说明:** Devuelve la matriz de confusión para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cm = obj << (Fit[1] << Get Confusion Matrix Validation);Show( cm );

```

#### Get Confusion Rates Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Test)

**说明:** Devuelve las tasas de confusión para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Test);Show( cr );

```

#### Get Confusion Rates Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Training)

**说明:** 返回训练集的混淆率。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Training);Show( cr );

```

#### Get Confusion Rates Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Confusion Rates Validation)

**说明:** Devuelve las tasas de confusión para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));cr = obj << (Fit[1] << Get Confusion Rates Validation);Show( cr );

```

#### Get Gen RSquare Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Test)

**说明:** Devuelve el estadístico R cuadrado generalizado para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Test);Show( rt );

```

#### Get Gen RSquare Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Training)

**说明:** 返回训练集的广义 R 方统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Training);Show( rt );

```

#### Get Gen RSquare Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Gen RSquare Validation)

**说明:** Devuelve el estadístico R cuadrado generalizado para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get Gen RSquare Validation);Show( rt );

```

#### Get MM SAS DATA Step

**语法:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get MM SAS Data Step)

**说明:** 创建可以在 SAS Model Manager 中注册的 SAS 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));code = obj << (Fit[1] << Get MM SAS Data Step);

```

#### Get Measures

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Measures)

**说明:** 从模型返回拟合测度汇总。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Diagram( 1 ));obj << (Fit[1] << Get Measures);

```

#### Get Misclassification Rate Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Test)

**说明:** Devuelve la tasa de clasificación errónea para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mr = obj << (Fit[1] << Get Misclassification Rate Test);Show( mr );

```

#### Get Misclassification Rate Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Training)

**说明:** 返回训练集的误分类率。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mrt = obj << (Fit[1] << Get Misclassification Rate Training);Show( mrt );

```

#### Get Misclassification Rate Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Misclassification Rate Validation)

**说明:** Devuelve la tasa de clasificación errónea para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));mrt = obj << (Fit[1] << Get Misclassification Rate Validation);Show( mrt );

```

#### Get NBoost

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get NBoost)

**说明:** 返回用于提升的模型数。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	N Boost( 2 ),	Go);n = obj << (fit[1] << Get NBoost);Show( n );

```

#### Get Precision Recall Area Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Test)

**说明:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de pruebas. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Test);Show( ra );

```

#### Get Precision Recall Area Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Training)

**说明:** 返回训练集的精度-召回曲线下的面积。精度-召回曲线必须在计算面积之前显示。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Training);Show( ra );

```

#### Get Precision Recall Area Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Precision Recall Area Validation)

**说明:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de validación. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));ra = obj << (Fit[1] << Get Precision Recall Area Validation);Show( ra );

```

#### Get Prediction Formula

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Prediction Formula)

**说明:** 构造一个脚本，以便创建预测公式列并返回它。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Get Prediction Formula);

```

#### Get RMS Error Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Test)

**说明:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Test);Show( re );

```

#### Get RMS Error Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Training)

**说明:** 返回训练误差的均方平方根。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Training);Show( re );

```

#### Get RMS Error Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get RMS Error Validation)

**说明:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));re = obj << (Fit[1] << Get RMS Error Validation);Show( re );

```

#### Get ROC Area Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Test)

**说明:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente a los datos de la prueba. Es necesario mostrar la curva ROC antes de calcular el área. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Test);Show( ra );

```

#### Get ROC Area Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Training)

**说明:** 返回训练数据集的受试者操作特征 (ROC) 曲线下的面积。首先需要显示 ROC 曲线，然后才会计算该面积。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Training);Show( ra );

```

#### Get ROC Area Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get ROC Area Validation)

**说明:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente al conjunto de datos de validación. Es necesario mostrar la curva ROC antes de calcular el área. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));ra = obj << (Fit[1] << Get ROC Area Validation);Show( ra );

```

#### Get RSquare Test

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Test)

**说明:** Devuelve el estadístico R cuadrado de entropía para el conjunto de prueba. Esta opción solo está disponible si se utiliza un conjunto de validación en JMP Pro.

```jsl

dt = Open( "$SAMPLE_DATA/Equity.jmp" );obj = dt << Neural(	Y( :BAD ),	X(		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,		:DEBTINC	),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Test);Show( rt );

```

#### Get RSquare Training

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Training)

**说明:** 返回训练集的熵 R 方统计量。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Training);Show( rt );

```

#### Get RSquare Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get RSquare Validation)

**说明:** Devuelve el estadístico R cuadrado de entropía para el conjunto de validación. Esta opción solo está disponible si se utiliza un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));rt = obj << (Fit[1] << Get RSquare Validation);Show( rt );

```

#### Get SAS DATA Step

**语法:** text = obj &lt;&lt; (fit[number] &lt;&lt; Get SAS Data Step)

**说明:** 创建可用于对新数据集进行评分的 SAS 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));code = obj << (Fit[1] << Get SAS Data Step);

```

#### Get Seconds

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Get Seconds)

**说明:** 返回完成分析所用的秒数。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));s = obj << (Fit[1] << Get Seconds);Show( s );

```

#### Lift Curve

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Lift Curve( state=0|1 ))

**说明:** 显示或隐藏“提升曲线”图。提升曲线绘制提升与观测对应部分的关系，并提供另一种方式来展示模型预测的能力。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Lift Curve( 1 ));

```

#### Make SAS DATA Step

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Make SAS Data Step)

**说明:** 创建可用于对新数据集进行评分的 SAS 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Make SAS Data Step);

```

#### Plot Actual by Predicted

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**说明:** 显示或隐藏一个图，垂直轴上显示实际值，水平轴上显示预测值。该选项仅可用于连续变量。若使用了验证，将为每个训练集、验证集和测试集都显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Plot Actual By Predicted( 1 ));

```

#### Plot Residual by Predicted

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Plot Residual by Predicted( state= 0|1 ))

**说明:** 显示或隐藏一个图，垂直轴上显示残差，水平轴上显示预测值。该选项仅可用于连续响应。若使用了验证，将为每个训练集、验证集和测试集都显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Plot Residual By Predicted( 1 ));

```

#### Precision Recall Curve

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Precision Recall Curve( state=0|1 ))

**说明:** 显示或隐藏“精度-召回曲线”图，它包含响应变量每个水平的曲线。精度-召回曲线绘制不同阈值下的精度值和召回值。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Profiler( state=0|1 ))

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Profiler( 1 ));

```

#### Publish Prediction Formula

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Publish Prediction Formula)

**说明:** 创建预测公式并将它们保存为“公式存储库”平台中的公式列脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Publish Prediction Formula);

```

#### ROC Curve

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; ROC Curve( state=0|1 ))

**说明:** 显示或隐藏响应变量每个水平的“受试者操作特征”(ROC) 曲线。ROC 曲线是（1 - 特异度）-灵敏度图。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << ROC Curve( 1 ));

```

#### Remove Fit

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Remove Fit)

**说明:** 删除整个模型报表。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Fast Formulas

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Save Fast Formulas)

**说明:** 将新的公式列保存至数据表。该列包含用于预测响应的公式，其中包括隐藏层节点的嵌入公式。该选项生成快速计算的公式，但这些公式不能供交互式版本的刻画器使用。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Fast Formulas);

```

#### Save Formulas

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Save Formulas)

**说明:** 将新的公式列保存至数据表。预测响应和隐藏层节点有单独的公式列。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Formulas);

```

#### Save Profile Formulas

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Save Profile Formulas)

**说明:** 将新的公式列保存至数据表。该列包含用于预测响应的公式，其中包括隐藏层节点的嵌入公式。该选项生成可供交互式版本的刻画器使用的公式。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Profile Formulas);

```

#### Save Transformed Covariates

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Save Transformed Covariates)

**说明:** 将新的公式列保存至数据表。新列包含用于变换协变量的公式。该选项仅限于 JMP Pro 并且在启动中指定了“变换协变量”选项时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Transform Covariates( 1 ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Transformed Covariates);

```

#### Save Validation

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Save Validation)

**说明:** 将新列保存至数据表。该列标识训练集和验证集中使用的行。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Save Validation);

```

#### Show Estimates

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Show Estimates( state=0|1 ))

**说明:** 显示或隐藏参数估计值的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Show Estimates( 1 ));

```

#### Surface Profiler

**语法:** obj &lt;&lt; (fit[number] &lt;&lt; Surface Profiler( state=0|1 ))

**说明:** 显示或隐藏三维曲面图。该选项仅可用于具有两个或更多 X 变量的模型。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Neural(	Y( :Y ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Fit( NTanH( 2 ) ),	Fit( NGaussian( 3 ) ));obj << (Fit[1] << Surface Profiler( 1 ));

```

