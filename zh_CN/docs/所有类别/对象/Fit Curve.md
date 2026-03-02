# Fit Curve



## ANOM for Estimates

### 项消息

#### Point Options

**语法:** obj &lt;&lt; ANOM( 1, Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" ) ); scrobj &lt;&lt; Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Point Options( "Show Only Points" ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Point Options( "Show Connected Points" );

```

#### Set Alpha Level

**语法:** obj &lt;&lt; ANOM( 1, Set Alpha Level( alpha ) ); scrobj &lt;&lt; Set Alpha Level( alpha )

**说明:** 更改用于计算决策限的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Set Alpha Level( 0.1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Set Alpha Level( 0.05 );

```

#### Show Center Line

**语法:** obj &lt;&lt; ANOM( 1, Show Center Line( state=0|1 ) ); scrobj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏 ANOM 图中的中心线（总均值）。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Center Line( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; ANOM( 1, Show Decision Limit Shading( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏 ANOM 图的决策限着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limit Shading( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** obj &lt;&lt; ANOM( 1, Show Decision Limits( state=0|1 ) ); scrobj &lt;&lt; Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏 ANOM 图的决策限线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Decision Limits( 0 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** obj &lt;&lt; ANOM( 1, Show Summary Report( state=0|1 ) ); scrobj &lt;&lt; Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含组均值和决策限的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Drug.jmp" );obj = dt << Oneway( Y( :y ), X( :Drug ) );obj << ANOM( 1, Show Summary Report( 1 ) );Wait( 2 );scrobj = Report( obj )["Analysis of Means"] << Get Scriptable Object;scrobj << Show Summary Report( 0 );

```

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Fit Curve(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Fit Curve

**语法:** Fit Curve( Y( column ), X( column ) )

**说明:** 拟合各种内置非线性模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

## 列

### By

**语法:** obj = Fit Curve(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Fit Logistic 4P;

```

### Freq

**语法:** obj = Fit Curve(...&lt;Freq( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Freq( :_freqcol ));obj << Fit Logistic 4P;

```

### Group

**语法:** obj = Fit Curve(...&lt;Group( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定分组变量。拟合模型对分组变量的每个水平都有单独的参数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Regressor

**语法:** obj = Fit Curve(...&lt;Regressor( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Response

**语法:** obj = Fit Curve(...Response( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Supplementary

**语法:** obj = Fit Curve(...&lt;Supplementary( column(s) )&gt;...)

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );obj << Fit Cubic;

```

### Weight

**语法:** obj = Fit Curve(...&lt;Weight( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Weight( :_weightcol ));obj << Fit Logistic 4P;

```

### X

**语法:** obj = Fit Curve(...&lt;X( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定预测变量。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Y

**语法:** obj = Fit Curve(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定响应变量。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Z

**语法:** obj = Fit Curve(...&lt;Z( column(s) )&gt;...)

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ), Z( :sex ) );obj << Fit Cubic;

```

## 项消息

### F1 Analysis

**语法:** obj &lt;&lt; F1 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**说明:** 使用 F1 差异因子执行溶出曲线分析，它测量每个时间点参考药片曲线和试验药片曲线之间的差异百分比。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << F1 Analysis(	Alpha( 0.05 ),	Reference Level( "R01" ),	Bootstrap Samples( 2000 ),	Random Seed( 1234 ));

```

### F2 Analysis

**语法:** obj &lt;&lt; F2 Analysis( Alpha( number ), Reference Level( level ), Bootstrap Samples( number ), Random Seed( number ))

**说明:** 使用 F2 相似性因子执行溶出曲线分析，它测量参考药片曲线和试验药片曲线之间溶出百分比的相似性。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << F2 Analysis(	Alpha( 0.1 ),	Reference Level( "R01" ),	Bootstrap Samples( 3000 ),	Random Seed( 4321 ));

```

### Fit Antoine Equation

**语法:** obj &lt;&lt; Fit Antoine Equation

**说明:** 拟合数据的 Antoine 模型。该模型通常用于将蒸汽压建模为温度的函数。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );obj = dt << Fit Curve( Y( :Algae Density ), X( :Days ), Group( :Treatment ) );obj << Fit Antoine Equation;

```

### Fit Asymmetric Gaussian Peak

**语法:** obj &lt;&lt; Fit Asymmetric Gaussian Peak

### Fit Biexponential 4P

**语法:** obj &lt;&lt; Fit Biexponential 4P

**说明:** 对数据进行四参数双指数模型拟合。

```jsl

Random Reset( 7483 );xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];yd = J( 11, 1, . );For( i = 1, i <= 11, i++,	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal());dt = As Table( xd || yd );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit Biexponential 4P;

```

### Fit Biexponential 5P

**语法:** obj &lt;&lt; Fit Biexponential 5P

**说明:** 对数据进行五参数双指数模型拟合。

```jsl

Random Reset( 7483 );xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];yd = J( 11, 1, . );For( i = 1, i <= 11, i++,	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal());dt = As Table( xd || yd );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit Biexponential 5P;

```

### Fit Cell Growth 4P

**语法:** obj &lt;&lt; Fit Cell Growth 4P

**说明:** 拟合数据的四参数增长和衰减模型。

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Cell Growth 4P;

```

### Fit Cubic

**语法:** obj &lt;&lt; Fit Cubic

**说明:** 对数据进行三次模型拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Cubic;

```

### Fit ExGaussian Peak

**语法:** obj &lt;&lt; Fit ExGaussian Peak

**说明:** 拟合数据的指数修正高斯峰值模型。

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit ExGaussian Peak;

```

### Fit Exponential 2P

**语法:** obj &lt;&lt; Fit Exponential 2P

**说明:** 对数据进行双参数指数模型拟合。拟合的响应以零为渐近线。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Fit Curve( Y( :pop ), X( :year ) );obj << Fit Exponential 2P;

```

### Fit Exponential 3P

**语法:** obj &lt;&lt; Fit Exponential 3P

**说明:** 对数据进行三参数指数模型拟合。拟合的响应以估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/US Population.jmp" );obj = dt << Fit Curve( Y( :pop ), X( :year ) );obj << Fit Exponential 3P;

```

### Fit First Order Rate

**语法:** obj &lt;&lt; Fit First Order Rate

**说明:** 拟合数据的一阶比率模型。这在对化学反应建模时很有用，并且仅在 X 值非负时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit First Order Rate;

```

### Fit First Order with Equilibrium

**语法:** obj &lt;&lt; Fit First Order with Equilibrium

**说明:** 拟合数据的具有平衡的一阶比率模型。这在对化学反应建模时很有用，并且仅在 X 值非负时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit First Order with Equilibrium;

```

### Fit First Order with Limits

**语法:** obj &lt;&lt; Fit First Order with Limits

**说明:** 拟合数据的具有限值的一阶比率模型。这在对化学反应建模时很有用，并且仅在 X 值非负时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit First Order with Limits;

```

### Fit Gaussian Peak

**语法:** obj &lt;&lt; Fit Gaussian Peak

**说明:** 对数据进行高斯峰值模型拟合。

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Gaussian Peak;

```

### Fit Gompertz 3P

**语法:** obj &lt;&lt; Fit Gompertz 3P

**说明:** 对数据进行三参数 Gompertz 曲线拟合。拟合的响应以 0 和估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;maxy = Max( dat[0, 3] );newy = dat[0, 3] / maxy;form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Gompertz 3P;

```

### Fit Gompertz 4P

**语法:** obj &lt;&lt; Fit Gompertz 4P

**说明:** 对数据进行四参数 Gompertz 曲线拟合。拟合的响应以两条估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Gompertz 4P;

```

### Fit Higuchi

**语法:** obj &lt;&lt; Fit Higuchi

**说明:** 拟合数据的 Higuchi 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi;

```

### Fit Higuchi with Burst

**语法:** obj &lt;&lt; Fit Higuchi with Burst

**说明:** 对数据拟合具有突释成分的 Higuchi 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi with Burst;

```

### Fit Higuchi with Lag

**语法:** obj &lt;&lt; Fit Higuchi with Lag

**说明:** 对数据拟合具有滞后成分的 Higuchi 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi with Lag;

```

### Fit Hixson-Crowell

**语法:** obj &lt;&lt; "Fit Hixson-Crowell"n

**说明:** 对数据拟合 Hixson-Crowell 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Hixson-Crowell"n;

```

### Fit Hixson-Crowell with Lag

**语法:** obj &lt;&lt; "Fit Hixson-Crowell with Lag"n

**说明:** 对数据拟合具有滞后成分的 Hixson-Crowell 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Hixson-Crowell with Lag"n;

```

### Fit Hybrid Exponential

**语法:** obj &lt;&lt; Fit Hybrid Exponential

**说明:** 拟合数据的“混合指数”模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Negative Exponential.jmp" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Hybrid Exponential;

```

### Fit Inverse Michaelis-Menten

**语法:** obj &lt;&lt; Fit Inverse Michaelis Menten; obj &lt;&lt; "Fit Inverse Michaelis-Menten"n

**说明:** 拟合数据的逆 Michaelis-Menten 酶动力学模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Inverse Michaelis Menten;

```

### Fit Korsmeyer-Peppas

**语法:** obj &lt;&lt; "Fit Korsmeyer-Peppas"n

**说明:** 对数据拟合 Korsmeyer-Peppas 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Korsmeyer-Peppas"n;

```

### Fit Korsmeyer-Peppas with Burst

**语法:** obj &lt;&lt; "Fit Korsmeyer-Peppas with Burst"n

**说明:** 对数据拟合具有突释成分的 Korsmeyer-Peppas 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Korsmeyer-Peppas with Burst"n;

```

### Fit Korsmeyer-Peppas with Lag

**语法:** obj &lt;&lt; "Fit Korsmeyer-Peppas with Lag"n

**说明:** 对数据拟合具有滞后成分的 Korsmeyer-Peppas 模型。这是一种比较溶出曲线的参数方法。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << "Fit Korsmeyer-Peppas with Lag"n;

```

### Fit Linear

**语法:** obj &lt;&lt; Fit Linear

**说明:** 拟合数据的最小二乘回归模型。拟合线显示在图上并且提供拟合报表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Linear;

```

### Fit Logistic 2P

**语法:** obj &lt;&lt; Fit Logistic 2P

**说明:** 对数据进行双参数 Logistic 曲线拟合。拟合的响应以 0 和 1 渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;miny = Min( dat[0, 3] );maxy = Max( dat[0, 3] );newy = (dat[0, 3] - miny) / (maxy - miny);form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Logistic 2P;

```

### Fit Logistic 3P

**语法:** obj &lt;&lt; Fit Logistic 3P

**说明:** 对数据进行三参数 Logistic 曲线拟合。拟合的响应以 0 和估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;maxy = Max( dat[0, 3] );newy = dat[0, 3] / maxy;form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Logistic 3P;

```

### Fit Logistic 4P

**语法:** obj &lt;&lt; Fit Logistic 4P

**说明:** 对数据进行四参数 Logistic 模型拟合。拟合的响应以两条估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;

```

### Fit Logistic 4P Hill

**语法:** obj &lt;&lt; Fit Logistic 4P Hill

**说明:** 对数据进行四参数 Logistic 模型拟合。拟合的响应以两条估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P Hill;

```

### Fit Logistic 4P Rodbard

**语法:** obj &lt;&lt; Fit Logistic 4P Rodbard

**说明:** 对数据进行四参数 Logistic 模型拟合。拟合的响应以两条估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );obj << Fit Logistic 4P Rodbard;

```

### Fit Logistic 5P

**语法:** obj &lt;&lt; Fit Logistic 5P

**说明:** 对数据进行五参数 Logistic 模型拟合。拟合的响应以两条估计的渐近线为边界。与其他 Logistic 曲线不同，五参数 Logistic 不对称。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 5P;

```

### Fit Lorentzian Peak

**语法:** obj &lt;&lt; Fit Lorentzian Peak

**说明:** 对数据进行 Lorentzian 峰值模型拟合。

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * (5 / ((xd[i] - 6) ^ 2 + 25)) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Lorentzian Peak;

```

### Fit Mechanistic Growth

**语法:** obj &lt;&lt; Fit Mechanistic Growth

**说明:** 对数据进行机理生长模型拟合。这是对三参数指数模型重新进行参数化。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );obj = dt << Fit Curve( Y( :yield ), X( :nitrate ) );obj << Fit Mechanistic Growth;

```

### Fit Michaelis-Menten

**语法:** obj &lt;&lt; Fit Michaelis Menten; obj &lt;&lt; "Fit Michaelis-Menten"n

**说明:** 拟合数据的 Michaelis-Menten 酶动力学模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Michaelis Menten;

```

### Fit One Compartment Oral Dose

**语法:** obj &lt;&lt; Fit One Compartment Oral Dose

**说明:** 对数据进行单室口服剂量模型拟合。该模型适合于对口服剂量后体内药物浓度建模。

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 123.01, 24.3 .9];dt = As Table( dat );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit One Compartment Oral Dose;

```

### Fit Pearson VII Peak

**语法:** obj &lt;&lt; Fit Pearson VII Peak

### Fit Power Model

**语法:** obj &lt;&lt; Fit Power Model

**说明:** 拟合数据的幂模型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Power Model;

```

### Fit Probit 2P

**语法:** obj &lt;&lt; Fit Probit 2P

**说明:** 对数据进行双参数 probit 曲线拟合。拟合的响应以 0 和 1 渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;miny = Min( dat[0, 3] );maxy = Max( dat[0, 3] );newy = (dat[0, 3] - miny) / (maxy - miny);form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Probit 2P;

```

### Fit Probit 3P

**语法:** obj &lt;&lt; Fit Probit 3P

**说明:** 对数据进行三参数 Probit 曲线拟合。拟合的响应以 0 和估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );dat = dt << get as matrix;maxy = Max( dat[0, 3] );newy = dat[0, 3] / maxy;form = Column( 3 ) << get values;Close( dt, no save );newtab = As Table( dat[0, 2] || newy );Column( 1 ) << set name( "log conc" );Column( 2 ) << set name( "toxicity" );New Column( "formulation", character, nominal );Column( 3 ) << set values( form );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Probit 3P;

```

### Fit Probit 4P

**语法:** obj &lt;&lt; Fit Probit 4P

**说明:** 对数据进行四参数 probit 模型拟合。拟合的响应以两条估计的渐近线为边界。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = Fit Curve( Y( :toxicity ), X( :log conc ), Group( :formulation ) );obj << Fit Probit 4P;

```

### Fit Pseudo-Voigt

**语法:** obj &lt;&lt; Fit Pseudo-Voigt

### Fit Quadratic

**语法:** obj &lt;&lt; Fit Quadratic

**说明:** 对数据进行二次模型拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Quadratic;

```

### Fit Quartic

**语法:** obj &lt;&lt; Fit Quartic

**说明:** 对数据进行四次多项式拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Quartic;

```

### Fit Quintic

**语法:** obj &lt;&lt; Fit Quintic

**说明:** 对数据进行五次多项式拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Fit Curve( Y( :height ), X( :weight ) );obj << Fit Quintic;

```

### Fit Second Order

**语法:** obj &lt;&lt; Fit Second Order

**说明:** 拟合数据的二阶比率模型。这在对化学反应建模时很有用，并且仅在 X 值非负时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Second Order;

```

### Fit Second Order with Two Components

**语法:** obj &lt;&lt; Fit Second Order with Two Components

**说明:** 拟合数据的具有两个成分的二阶比率模型。这在对化学反应建模时很有用，并且仅在 X 值非负时可用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );obj = dt << Fit Curve( Y( :"Velocity (y)"n ), X( :Concentration ) );obj << Fit Second Order with Two Components;

```

### Fit Skew Normal Peak

**语法:** obj &lt;&lt; Fit Skew Normal Peak

### Fit Two Compartment IV Bolus Dose

**语法:** obj &lt;&lt; Fit Two Compartment IV Bolus Dose

**说明:** 对数据进行双室静脉注射剂量模型拟合。该模型适合于对静脉注射剂量后体内药物浓度建模。

```jsl

Random Reset( 7483 );xd = [.25, .5, .75, 1, 1.5, 2, 3, 4, 6, 12, 24];yd = J( 11, 1, . );For( i = 1, i <= 11, i++,	yd[i] = 170 * Exp( -.15 * xd[i] ) + 80 * Exp( -1.4 * xd[i] ) + .1 * Random Normal());dt = As Table( xd || yd );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit Two Compartment IV Bolus Dose;

```

### Fit Weibull Growth

**语法:** obj &lt;&lt; Fit Weibull Growth

**说明:** 拟合数据的三参数 Weibull 增长模型。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :Concentration ), Group( :formulation ) );obj << Fit Weibull Growth;

```

### Multivariate Distance

**语法:** obj &lt;&lt; Multivariate Distance( Alpha( number ), Reference Level( level ))

**说明:** 使用 Mahalanobis 距离 M 执行溶出曲线分析，它测量参考药片曲线和试验药片曲线之间的多元距离。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) );

```

### T2EQ

**语法:** obj &lt;&lt; T2EQ( Alpha( number ), Reference Level( level ))

**说明:** 使用 T2EQ 等价性检验执行溶出曲线分析，它测量参考药片曲线和试验药片曲线之间的多元距离。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ));obj << T2EQ( Alpha( 0.05 ), Reference Level( "R01" ) );

```

## Equivalence with Ratios

### 项消息

#### Set Alpha Level

**语法:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Set Alpha Level( number ))))

**说明:** 设置用于计算等价性图中的置信区间的 alpha 水平。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) ),		Equivalence with Ratios( 1, Set Alpha Level( 0.1 ) )	));

```

#### Set Decision Lines

**语法:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Set Decision Lines( lower, upper ))))

**说明:** 设置等价性图中的上下决策限线。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) ),		Equivalence with Ratios( 1, Set Decision Lines( 0.9, 1.1 ) )	));

```

#### Show Center Line

**语法:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Center Line( state=0|1 ))))

**说明:** 显示或隐藏等价性图中的中心线。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Center Line( 0 ) ),		Equivalence with Ratios( 1, Show Center Line( 1 ) ),		Equivalence with Ratios( 1, Show Center Line( 0 ) )	));

```

#### Show Decision Limit Shading

**语法:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limit Shading( state=0|1 ))))

**说明:** 显示或隐藏等价性图中的决策限着色。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) ),		Equivalence with Ratios( 1, Show Decision Limit Shading( 1 ) ),		Equivalence with Ratios( 1, Show Decision Limit Shading( 0 ) )	));

```

#### Show Decision Limits

**语法:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Decision Limits( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios(1, Show Decision Limits( state=0|1 ))))

**说明:** 显示或隐藏等价性图中的决策限线。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Decision Limits( 0 ) ),		Equivalence with Ratios( 1, Show Decision Limits( 1 ) ),		Equivalence with Ratios( 1, Show Decision Limits( 0 ) )	));

```

#### Show Summary Report

**语法:** obj &lt;&lt; Fit Command( Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 )))); obj &lt;&lt; (Fit[name|number] &lt;&lt; Equivalence Test(..., Equivalence with Ratios( 1, Show Summary Report( state=0|1 ))))

**说明:** 显示或隐藏“等价性汇总”报表，其中包含参数估计值、决策限以及参数是否超过限值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P(	Equivalence Test(		Reference Group( "Standard" ),		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),		Equivalence with Ratios( 1, Show Summary Report( 1 ) ),		Equivalence with Ratios( 1, Show Summary Report( 1 ) )	));

```

## Fit Curve CDOE

### 项消息

#### CDOE Fit Plot

**语法:** scrobj &lt;&lt; CDOE Fit Plot( state=0|1 )

**说明:** 显示或隐藏拟合值图。若指定了“分组”变量，则还会提供“分组”变量每个水平的拟合值图的网格。 默认开启。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Report( obj )["CDOE Fit"] << Close( 0 );Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << CDOE Fit Plot( 0 );

```

#### CDOE Profiler

**语法:** scrobj &lt;&lt; CDOE Profiler( state=0|1 )

**说明:** 显示或隐藏“CDOE 刻画器”，它支持您探索响应如何基于补充变量而变化。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << CDOE Profiler( 0 );

```

#### Diagnostic Plots

**语法:** scrobj &lt;&lt; Diagnostic Plots( state=0|1 )

**说明:** 显示或隐藏响应变量的预测值-实际值图和残差图。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Report( obj )["Diagnostic Plots"] << Close( 0 );Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << Diagnostic Plots( 0 );

```

#### Generalized Regression for Model Parameters

**语法:** scrobj &lt;&lt; Generalized Regression for Model Parameters( state=0|1 )

**说明:** 显示或隐藏每个模型参数的“广义回归”报表。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));Report( obj )["Generalized Regression for Model Parameters"] << Close( 0 );Wait( 2 );scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << Generalized Regression for Model Parameters( 0 );

```

#### Save Prediction Formula

**语法:** scrobj &lt;&lt; Save Prediction Formula

**说明:** 将新公式列保存至原始数据表。新列包含响应的预测公式。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));scrobj = (Report( obj )["Curve DOE Analysis"] << get scriptable object);scrobj << Save Prediction Formula;

```

## Fit

### 项消息

#### Area Under Curve

**语法:** obj &lt;&lt; Fit Command( Area Under Curve( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Area Under Curve( state=0|1 ))

**说明:** 计算拟合预测函数下方的面积。

```jsl

Random Reset( 7483 );xd = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12];yd = J( 12, 1, . );For( i = 1, i <= 12, i++,	yd[i] = 10 * Normal Density( (xd[i] - 6) / 2 ) + Random Normal() * .1);dt = As Table( xd || yd );Column( dt, 1 ) << set name( "x" );Column( dt, 2 ) << set name( "y" );obj = dt << Fit Curve( Y( :Y ), X( :X ) );obj << Fit Gaussian Peak( Area Under Curve( 1 ) );

```

#### Compare Parameter Estimates

**语法:** obj &lt;&lt; Fit Command( Compare Parameter Estimates( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Compare Parameter Estimates( state=0|1 ))

**说明:** 将每组的参数估计值与总均值进行比较。针对每个参数进行该比较。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Compare Parameter Estimates( 1 ) );

```

#### Curve DOE Analysis

**语法:** obj &lt;&lt; (Fit[number|name] &lt;&lt; Curve DOE Analysis( state=0|1 ))

**说明:** 启动“拟合曲线”平台中的“广义回归”报表。将补充变量用作模型效应，对模型的每个参数拟合广义回归模型。

**JMP添加的版本:** 16

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),	Multivariate Distance( Alpha( 0.1 ), Reference Level( "R01" ) ),	SendToReport(		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Multivariate Distance"}, "Comparisons", OutlineBox,			{Close( 1 )}		)	));obj << (fit[1] << Curve DOE Analysis( 1 ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Functional Data/Mill DOE.jmp" );obj = Fit Curve(	Y( :"Size/nm"n ),	X( :Time ),	Group( :Batch ),	Z( :"%Beads"n, :"%Strength"n, :"Flow(g/min)"n ),	Fit Biexponential 5P,	SendToReport(		Dispatch( {"Fit Curve"}, "Model Comparison", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Group Summary", OutlineBox,			{Close( 1 )}		),		Dispatch( {"Fit Curve", "Biexponential 5P"}, "Plot", OutlineBox, {Close( 1 )} )	));obj << (Fit["Biexponential 5P"] << Curve DOE Analysis( 1 ));

```

#### Custom Inverse Prediction

**语法:** obj &lt;&lt; Fit Command( Custom Inverse Prediction( Response( value ))); obj &lt;&lt; (Fit[number|name] &lt;&lt; Custom Inverse Prediction( Response( value )))

**说明:** 预测指定响应值的 X 值。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Custom Inverse Prediction( Response( 0.9 ) ) );

```

#### Equivalence Test

**语法:** obj &lt;&lt; Fit Command( Equivalence Test( Reference Group( column ))); obj &lt;&lt; (Fit[number|name] &lt;&lt; Equivalence Test( Reference Group( column )))

**说明:** 检验每组的拟合曲线是否实际上等价于参考组的拟合曲线。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Equivalence Test( Reference Group( "Standard" ) ) );

```

#### Inflection Point

**语法:** obj &lt;&lt; Fit Command( Inflection Point( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Inflection Point( state=0|1 ))

**说明:** 显示或隐藏模型的拐点估计值报表。该选项仅可用于“Weibull 增长”、“四参数 Logistic Rodbard”和“五参数 Logistic”模型。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 5P( Inflection Point( 1 ) );

```

#### Make Parameter Table

**语法:** obj &lt;&lt; Fit Command( Make Parameter Table ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Make Parameter Table)

**说明:** 创建参数估计值的汇总表。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Make Parameter Table );

```

#### Peak Response

**语法:** obj &lt;&lt; Fit Command( Peak Response( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Peak Response( state=0|1 ))

**说明:** 计算 Y 变量在拟合曲线峰值处的估计值。该选项可用于“四参数细胞生长”和“单室”模型。

**JMP添加的版本:** 15

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 123.01, 24.3 .9];dt = As Table( dat );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit One Compartment Oral Dose( Peak Response( 1 ) );

```

#### Plot Actual by Predicted

**语法:** obj &lt;&lt; Fit Command( Plot Actual by Predicted( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Plot Actual by Predicted( state=0|1 ))

**说明:** 显示或隐藏在垂直轴上显示实际响应值且在水平轴上显示预测值的图。若拟合度好，这些点在对角线附近。您可以看到哪些点远离对角线，可以发现模式，并且实现检验的可视化。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );fc << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Residual by Predicted

**语法:** obj &lt;&lt; Fit Command( Plot Residual by Predicted( state=0|1 ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Plot Residual by Predicted( state=0|1 ))

**说明:** 显示或隐藏垂直轴上显示残差且水平轴上显示行号的图。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );fc = Fit Curve( Y( :weight ), X( :height ), Fit Linear() );fc << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Profiler

**语法:** obj &lt;&lt; Fit Command( Profiler( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Profiler( state=0|1 ))

**说明:** 显示或隐藏拟合的预测函数及其一阶和二阶导数的刻画器。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Fit Logistic 4P);obj << (Fit["Logistic 4P"] << Profiler( 1 ));

```

#### Remove Fit

**语法:** obj &lt;&lt; (Fit[number|name]&lt;&lt;Remove Fit)

**说明:** 从报表中删除指定的拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P;Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Bootstrap Results

**语法:** obj &lt;&lt; Fit Command( Save Bootstrap Results ); obj &lt;&lt; (Fit[number] &lt;&lt; Save Bootstrap Results)

**说明:** 将列保存至新数据表。该数据表包含来自 F1 或 F2 分析的 bootstrap 结果。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, Dissolution 360 ),	Group( :Batch ),	Z( :Polymer A, :Polymer B, :Total Polymer, :Compression Force ),	F2 Analysis(		Alpha( 0.1 ),		Reference Level( "R01" ),		Bootstrap Samples( 2500 ),		Random Seed( 1234 )	),	SendToReport(		Dispatch( {"Fit Curve"}, "Plot", OutlineBox, {Close( 1 )} ),		Dispatch( {"Fit Curve", "F2 Analysis"}, "Comparisons", OutlineBox, {Close( 1 )} )	));obj << (fit[1] << Save Bootstrap Results);

```

#### Save First Derivative

**语法:** obj &lt;&lt; Fit Command( Save First Derivative ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save First Derivative)

**说明:** 将新公式列保存至原始数据表。新列包含预测的一阶导数公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save First Derivative );

```

#### Save Inverse Prediction Formula

**语法:** obj &lt;&lt; Fit Command( Save Inverse Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Inverse Prediction Formula)

**说明:** 将新公式列保存至原始数据表。新列包含拟合模型的反函数的公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Inverse Prediction Formula );

```

#### Save Parametric Prediction Formula

**语法:** obj &lt;&lt; Fit Command( Save Parametric Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Parametric Prediction Formula)

**说明:** 将新公式列保存至原始数据表。新列包含以“非线性”平台可以使用的方式表示的预测公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Fit Logistic 4P);obj << (Fit["Logistic 4P"] << Save Parametric Prediction Formula);

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Fit Command( Save Prediction Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Prediction Formula)

**说明:** 将新公式列保存至原始数据表。新列包含当前参数估计值的预测公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve(	Y( :Toxicity ),	X( :log Conc ),	Group( :formulation ),	Fit Logistic 4P);obj << (Fit[1] << Save Prediction Formula);

```

#### Save Residual Formula

**语法:** obj &lt;&lt; Fit Command( Save Residual Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Residual Formula)

**说明:** 将新公式列保存至原始数据表。新列包含残差公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Residual Formula );

```

#### Save Stacked Data

**语法:** obj &lt;&lt; Fit Command( Save Stacked Data ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Stacked Data)

**说明:** 将列保存至新数据表。数据表包含堆叠格式的原始数据，此外还包含一列响应的预测值，还有一列残差。

```jsl

dt = Open( "$SAMPLE_DATA/Dissolution DoE.jmp" );obj = dt << Fit Curve(	Data Format( Row ),	Y( :Dissolution 60, :Dissolution 120, :Dissolution 240, :Dissolution 360 ),	Group( :Batch ));obj << Fit Higuchi( Save Stacked Data );

```

#### Save Std Error of First Derivative

**语法:** obj &lt;&lt; Fit Command( Save Std Error of First Derivative ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Std Error of First Derivative)

**说明:** 将新列保存至原始数据表。新列包含预测的一阶导数的标准误差公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save First Derivative, Save Std Error of First Derivative );

```

#### Save Std Error of Predicted

**语法:** obj &lt;&lt; Fit Command( Save Std Error of Predicted ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Std Error of Predicted)

**说明:** 将新公式列保存至原始数据表。新列包含计算预测的标准误差的公式。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Prediction Formula, Save Std Error of Predicted );

```

#### Save Studentized Residual Formula

**语法:** obj &lt;&lt; Fit Command( Save Studentized Residual Formula ); obj &lt;&lt; (Fit[number|name] &lt;&lt; Save Studentized Residual Formula)

**说明:** 将新公式列保存至原始数据表。新列包含学生化残差的公式，这些残差是标准残差除以其估计的标准差。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Save Studentized Residual Formula );

```

#### Test Parallelism

**语法:** obj &lt;&lt; Fit Command( Test Parallelism( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Test Parallelism( state=0|1 ))

**说明:** 检验拟合曲线在各组之间是否具有相似形状。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );obj = dt << Fit Curve( Y( :Toxicity ), X( :log Conc ), Group( :formulation ) );obj << Fit Logistic 4P( Test Parallelism( 1 ) );

```

#### Time to Peak Response

**语法:** obj &lt;&lt; Fit Command( Time to Peak Response( state=0|1 )); obj &lt;&lt; (Fit[number|name] &lt;&lt; Time to Peak Response( state=0|1 ))

**说明:** 计算 X 变量在拟合曲线峰值处的估计值。该选项仅可用于“四参数细胞生长”和“单室”模型。

**JMP添加的版本:** 15

```jsl

dat = [0 0, .27 1.72, .52 7.91, 1 8.31, 1.92 8.33, 3.5 6.85, 5.02 6.08, 7.03 5.4, 9 4.55, 123.01, 24.3 .9];dt = As Table( dat );Column( dt, 1 ) << set name( "time" );Column( dt, 2 ) << set name( "concentration" );obj = dt << Fit Curve( Y( :concentration ), X( :time ) );obj << Fit One Compartment Oral Dose( Time to Peak Response( 1 ) );

```

