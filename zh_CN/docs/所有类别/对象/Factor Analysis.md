# Factor Analysis



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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Factor Analysis

**语法:** Factor Analysis( Y( columns ) )

**说明:** 通过提取表示观测变量中的共有变异的未观测到的变量或因子来发现数据的底层结构。因子旋转用于增加其可解释性。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

## 列

### Columns

**语法:** obj &lt;&lt; Columns( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Freq

**语法:** obj &lt;&lt; Freq( column )

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Freq( :_freqcol ));

```

### Weight

**语法:** obj &lt;&lt; Weight( column )

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Weight( :_weightcol ));

```

### Y

**语法:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

## 项消息

### Bartlett's Test of Sphericity

**语法:** obj &lt;&lt; Bartlett&apos;s Test of Sphericity( state=0|1 )

**说明:** 显示或隐藏齐性检验的报表，该检验确定特征值是否具有相等方差。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << Bartlett's Test of Sphericity( 1 );

```

### Eigenvalues

**语法:** obj &lt;&lt; Eigenvalues( state=0|1 )

**说明:** 显示或隐藏原始相关性、协方差或未统一尺度矩阵的特征值的表。该表包括每个特征值表示的占总方差的百分比，展示百分比贡献的条形图，以及每个相继特征值贡献的累积百分比。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << Eigenvalues( 0 );

```

### Fit

**语法:** obj &lt;&lt; Fit( "PC"|"ML", "ONE"|"SMC", number, rotation method )

**说明:** 使用指定的因子分解方法、先验公因子方差、因子数和旋转方法拟合因子分析模型。可用的因子分解方法为“主轴”(PC) 和“最大似然”(ML)。您可以将所有先验公因子方差设置为 1 (ONE) 或等于多重相关的平方 (SMC) 系数。可用的旋转方法为“最大方差法”、“双四次幂极大法”、“相等最大值法”、“Parsimax 因子法”、“直交旋转法”、“Parsimax”、“四次方最大正交旋转”、“双四次幂极小法”、“协方差极小法”、“斜交双四次幂极大法”、“斜交相等最大值法”、“斜交 Parsimax 因子法”、“斜交旋转法”、“斜交 Parsimax 法”、“四次最大正交旋转法”、“方差最大旋转法”和“斜交转轴法”。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ));obj << Fit( "ML", "SMC", 2, "Varimax" );

```

### Kaiser-Meyer-Olkin Test

**语法:** obj &lt;&lt; "Kaiser-Meyer-Olkin Test"n( state=0|1 )

**说明:** 显示或隐藏 Kaiser-Meyer-Olkin (KMO) 检验的结果。该检验是一个指标，指示可能是公共方差的方差所占比例，而该方差可能是由内在因子引起的。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << "Kaiser-Meyer-Olkin Test"n( 1 );

```

### Scree Plot

**语法:** obj &lt;&lt; Scree Plot( state=0|1 )

**说明:** 显示或隐藏每个成分特征值的线图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << Scree Plot( 0 );

```

### Variance Estimation

**语法:** obj = Factor Analysis(...Variance Estimation( "REML"| "ML"| "Robust"| "Row-wise"| "Pairwise" )...)

**说明:** 设置用于计算相关性的估计方法。

若没有缺失值，则默认方法为“逐行”。

若有缺失值，并且变量数小于等于 10，同时行数小于等于 5000，则默认方法为“REML”。

若有缺失值，并且变量数超过 10 或者行数超过 5000，则默认方法为“配对”。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "Robust" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

### Variance Scaling

**语法:** obj = Factor Analysis(...Variance Scaling( "Correlations"| "Covariances"| "Unscaled")...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于方差统一尺度的方法。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Estimation( "REML" ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));

```

## Factor Analysis Fit Options

### 项消息

#### Arrow Lines

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Arrow Lines( state=0|1 ))

**说明:** 在图形上显示或隐藏箭头线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Arrow Lines( 0 ));

```

#### Copy Model Specification for SEM

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Copy Model Specification for SEM)

**说明:** 将因子定义复制到剪贴板。然后您可以将因子定义粘贴到带有独立数据的 SEM 平台以确认模型。

```jsl

dt = Open( "$SAMPLE_DATA/Job Satisfaction.jmp" );obj = dt << Factor Analysis(	Y( :Support_L, :Goal_L, :Work_L, :Interact_L ),	Fit( "ML", "SMC", 1, "Varimax" ));obj << (Fit[1] << Copy Model Specification for SEM);obj2 = dt << Structural Equation Models(	Model Variables( :Support_L, :Goal_L, :Work_L, :Interact_L ));obj2 << Paste Model Specification;

```

#### Eigenvalues

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Eigenvalues( state=0|1 ))

**说明:** 显示或隐藏简化相关性矩阵的特征值以及它们所占的公共方差百分比。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Eigenvalues( 1 ));

```

#### Factor Loading Plot

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Loading Plot( state=0|1 ))

**说明:** 显示或隐藏旋转因子载荷图。当对两个以上的因子建模时，“因子载荷图”为图矩阵。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Factor Loading Plot( 0 ));

```

#### Factor Structure

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Factor Structure( state=0|1 ))

**说明:** 显示或隐藏变量与公因子之间的相关性矩阵。该选项仅适用于斜交旋转。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Promax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Factor Structure( 0 ));

```

#### Final Communality Estimates

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Final Communality Estimates( state=0|1 ))

**说明:** 显示或隐藏拟合因子模型后的公因子方差估计值。若因子是正交的，变量的最终公因子方差估计值等于该变量的载荷平方和。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Final Communality Estimates( 0 ));

```

#### Interfactor Correlations

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Interfactor Correlations( state=0|1 ))

**说明:** 显示或隐藏因子之间的相关性矩阵。该选项仅适用于斜交旋转。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Quartimin" ));obj << (Fit[1] << Interfactor Correlations( 1 ));

```

#### Measures of Factor Scores

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Factor Scores( state=0|1 ))

**说明:** 显示或隐藏因子得分确定性的测度，包括“多重 R”、“多重 R 平方”和“最小相关性”得分。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Measures of Factor Scores( 1 ));

```

#### Measures of Fit

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Measures of Fit( state=0|1 ))

**说明:** 显示或隐藏拟合测度，包括“不带 Bartlett 校正的卡方”、“AIC”、“BIC”、“Tucker-Lewis 指数”和“近似的均方根误差”。仅当将“最大似然”选作“因子分解方法”时该选项才可用。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Measures of Fit( 0 ));

```

#### Prior Communality

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Prior Communality( state=0|1 ))

**说明:** 显示或隐藏每个变量的公因子方差的初始估计值。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Prior Communality( 1 ));

```

#### Remove Fit

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Remove Fit)

**说明:** 从报表中删除指定的拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Remove Fit);

```

#### Rotated Factor Loading

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotated Factor Loading( state=0|1 ))

**说明:** 显示或隐藏旋转后的因子载荷矩阵。若旋转是正交的，这些值为变量与旋转因子之间的相关性。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));Wait( 1 );obj << (Fit[1] << Rotated Factor Loading( 0 ));

```

#### Rotation Matrix

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Rotation Matrix( state=0|1 ))

**说明:** 显示或隐藏用于旋转因子载荷图和因子载荷矩阵的值。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Rotation Matrix( 1 ));

```

#### Save Factor Scores

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores( state=0|1 ))

**说明:** 将新公式列保存至原始数据表。新列包含使用 Thurstone 方法估计的因子得分的公式。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Save Factor Scores);

```

#### Save Factor Scores with Imputation

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Save Factor Scores with Imputation( state=0|1 ))

**说明:** 将新公式列保存至原始数据表。新列包含因子得分的公式，其中缺失值带有插补值。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Factor Analysis(	Y( :CO, :SO2, :NO, :PM10 ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Save Factor Scores with Imputation);

```

#### Score Plot

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot( state=0|1 ))

**说明:** 显示或隐藏估计的因子得分的散点图。当对两个以上的因子建模时，“得分图”为图矩阵。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Score Plot( 1 ));

```

#### Score Plot with Imputation

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Score Plot with Imputation( state=0|1 ))

**说明:** 显示或隐藏估计因子得分的散点图，其中缺失值带有插补值。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );obj = dt << Factor Analysis(	Y( :CO, :SO2, :NO, :PM10 ),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax", Rotated Factor Loading( 0 ), Factor Loading Plot( 0 ) ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Score Plot with Imputation( 1 ));

```

#### Significance Test

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Significance Test( state=0|1 ))

**说明:** 显示或隐藏两个显著性检验的结果。第一个检验不存在公因子的原假设，第二个检验指定数量的因子已足够的原假设。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Significance Test( 0 ));

```

#### Standard Score Coefficients

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Standard Score Coefficients( state=0|1 ))

**说明:** 显示或隐藏一个乘数表，该表用于在将旋转因子保存到源数据表时估计因子得分。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Standard Score Coefficients( 1 ));

```

#### Target Matrix

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Target Matrix( state=0|1 ))

**说明:** 显示或隐藏最大方差法因子模式要旋转到的矩阵。该选项仅可用于“Promax 旋转法”。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Promax" ));obj << (Fit[1] << Target Matrix( 1 ));

```

#### Unrotated Factor Loading

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Unrotated Factor Loading( state=0|1 ))

**说明:** 显示或隐藏旋转之前的因子载荷矩阵。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Unrotated Factor Loading( 1 ));

```

#### Unsorted and Rotated Factor Loading

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Rotated Factor Loading( state=0|1 ))

**说明:** 显示或隐藏旋转后的未排序因子载荷矩阵。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ),	Eigenvalues( 0 ),	Scree Plot( 0 ));obj << (Fit[1] << Unsorted and Rotated Factor Loading( 1 ));

```

#### Unsorted and Unrotated Factor Loading

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Unsorted and Unrotated Factor Loading( state=0|1 ))

**说明:** 显示或隐藏排序和旋转之前的因子载荷矩阵。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));obj << (Fit[1] << Unsorted and Unrotated Factor Loading( 1 ));

```

#### Variance Explained by Each Factor

**语法:** obj &lt;&lt; (Fit[number] &lt;&lt; Variance Explained by Each Factor( state=0|1 ))

**说明:** 显示或隐藏每个旋转因子解释的公共方差的方差、百分比和累积百分比。该选项仅适用于正交旋转。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Socioeconomic.jmp" );obj = dt << Factor Analysis(	Y(		:Total Population, :Median School Years, :Total Employment, :Professional Services,		:Median House Value	),	Variance Scaling( "Correlations" ),	Fit( "ML", "SMC", 2, "Varimax" ));Wait( 1 );obj << (Fit[1] << Variance Explained by Each Factor( 0 ));

```

