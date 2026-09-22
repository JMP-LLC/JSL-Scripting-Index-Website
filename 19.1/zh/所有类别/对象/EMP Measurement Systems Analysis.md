# EMP Measurement Systems Analysis



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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = EMP Measurement Systems Analysis(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### EMP Measurement Systems Analysis

**语法:** EMP Measurement Systems Analysis( Y( column ), X( columns ), Part(column), Model(Main|Crossed|Crossed with Two Factor Interactions|Nested|Crossed then Nested|Nested then Crossed), Dispersion Chart Type(Range|Standard Deviation) )

**说明:** 启动用于测量系统分析的 EMP（评估测量过程）方法。默认情况下显示平均图和散度（极差或标准差）图。

#### 主效应模型，极差图

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### 主效应模型，标准差图表

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Main" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### 交叉效应模型，极差图

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### 交叉效应模型，标准差图表

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### 先交叉后嵌套效应模型，极差图

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( Range ),	Variance Components( 1 ));

```

#### 先交叉后嵌套效应模型，标准差图表

```jsl

dt = New Table( "3 Factors Crossed then Nested",	Add Rows( 81 ),	New Column( "Operator",		Character( 7 ),		"Nominal",		Set Values(			{"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara", "Clara",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo",			"Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Eduardo", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane", "Jane",			"Jane", "Jane", "Jane", "Jane", "Jane"}		),		Set Display Width( 0 )	),	New Column( "Instrument",		Character( 1 ),		"Nominal",		Set Values(			{"A", "A", "A", "A", "A", "A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B",			"B", "B", "C", "C", "C", "C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A",			"A", "A", "A", "A", "B", "B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C",			"C", "C", "C", "C", "C", "C", "A", "A", "A", "A", "A", "A", "A", "A", "A", "B",			"B", "B", "B", "B", "B", "B", "B", "B", "C", "C", "C", "C", "C", "C", "C", "C",			"C"}		),		Set Display Width( 0 )	),	New Column( "Part",		Numeric,		"Nominal",		Format( "Best", 8 ),		Set Values(			[1, 1, 1, 2, 2, 2, 3, 3, 3, 4, 4, 4, 5, 5, 5, 6, 6, 6, 7, 7, 7, 8, 8, 8, 9, 9, 9,			10, 10, 10, 11, 11, 11, 12, 12, 12, 13, 13, 13, 14, 14, 14, 15, 15, 15, 16, 16,			16, 17, 17, 17, 18, 18, 18, 19, 19, 19, 20, 20, 20, 21, 21, 21, 22, 22, 22, 23,			23, 23, 24, 24, 24, 25, 25, 25, 26, 26, 26, 27, 27, 27]		),		Set Display Width( 0 )	),	New Column( "Y",		Numeric,		"Continuous",		Format( "Best", 8 ),		Set Values(			[0.5, 0.6, 0.2, 0.8, 0.6, 0.6, 1.6, 1.1, 1, 0.4, 0.2, 0.1, 0.1, 0.5, 0, 0.3, 0.6,			0.8, 0.1, 0.1, 0.2, 0.4, 0.9, 1.8, 0.1, 0.3, 0.4, 0.1, 0.3, 0.1, 0.9, 0.4, 0, 0.6,			0.7, 0.7, 0.3, 0.1, 0.2, 0.3, 0.6, 0.2, 0.2, 0.4, 0.4, 0.8, 0.3, 0.3, 2.6, 0.4,			1.6, 0.5, 0.3, 2.9, 0, 0, 0.5, 0.1, 0, 0.3, 0.5, 0, 0, 0.4, 0, 0.4, 0.3, 0.2, 0,			0, 0.5, 0.1, 0.1, 0.2, 0.3, 1.1, 0.2, 0.1, 0.6, 0.3, 0.6]		),		Set Display Width( 68 )	));obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed then Nested (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### 先嵌套后交叉效应模型，极差图

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### 先嵌套后交叉效应模型，标准差图表

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested & Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Nested then Crossed (3 Factors Only)"n ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### 具有双因子交互作用效应的交叉模型，极差图

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### 具有双因子交互作用效应的交叉模型，标准差图表

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator, :Instrument ),	Part( :Part ),	Model( "Crossed with Two Factor Interactions" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

#### 嵌套效应模型，极差图

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Range" ),	Variance Components( 1 ));

```

#### 嵌套效应模型，标准差图表

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Nested" ),	Dispersion Chart Type( "Standard Deviation" ),	Variance Components( 1 ));

```

## 列

### By

**语法:** obj = EMP Measurement Systems Analysis(...&lt;By( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 生成多个报表，每个报表对应变量的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Crossed.jmp" );EMP Measurement Systems Analysis(	Y( :new Y ),	X( :Operator ),	Part( :Part ),	Model( Crossed ),	Dispersion Chart Type( Range ),	By( :Instrument ));

```

### Grouping

**语法:** obj = EMP Measurement Systems Analysis(...&lt;Grouping( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定分类列作为分组变量。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	Grouping( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Measurement

**语法:** obj = EMP Measurement Systems Analysis(...Measurement( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定测量值的连续列。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Measurement( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Part

**语法:** obj = EMP Measurement Systems Analysis(...Part( column )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定标明部件或单元的分类列。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Sample ID( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Sample ID

**语法:** obj = EMP Measurement Systems Analysis(...Sample ID( column )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定标明部件或单元的分类列。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Sample ID( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Standard

**语法:** obj = EMP Measurement Systems Analysis(...&lt;Standard( column )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定一个标准或引用列，它包含被测量部件的已知值。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/MSALinearity.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Response ),	Part( :Part ),	Standard( :Standard ),	Model( "Main" ),	Dispersion Chart Type( "Range" ));

```

### X

**语法:** obj = EMP Measurement Systems Analysis(...&lt;X( column(s) )&gt;...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定分类列作为分组变量。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	Grouping( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

### Y

**语法:** obj = EMP Measurement Systems Analysis(...Y( column(s) )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定测量值的连续列。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Measurement( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));

```

## 项消息

### Conv Limit

**语法:** obj = EMP Measurement Systems Analysis(...Conv Limit( number )...)

**说明:** 设置用于计算方差分量的收敛极限。该选项仅影响 REML 分析。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << Select Rows( 5 ) << Exclude( 1 );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Conv Limit( 1e-7 ));obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### EMP MSA Analysis

**语法:** obj = EMP Measurement Systems Analysis(...EMP MSA Analysis( )...)

**说明:** 指定每个测量响应的“EMP MSA 分析”报表选项。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	EMP MSA Analysis(		"Y",		EMP Results( 1 ),		Variance Components( 1 ),		"EMP Gauge R&R Results"n( 1 )	));

```

### Edit MSA Metadata

**语法:** obj &lt;&lt; Edit MSA Metadata( :column( Lower Tolerance( number ), Upper Tolerance( number ), &lt;Historical Mean( number ), Historical Process Sigma( number )&gt; ) )

**说明:** 打开一个窗口，允许您添加或编辑所有分析的容差范围、容差限值、历史均值和历史过程 sigma。报表将自动更新。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	EMP MSA Analysis( "Y", Dispersion Chart( 0 ), "AIAG Gauge R&R Results"n( 1 ) ));Wait( 1 );obj << Edit MSA Metadata( :Y( Lower Tolerance( 130 ), Upper Tolerance( 230 ) ) );

```

### Include Interactions in Reproducibility

**语法:** obj = EMP Measurement Systems Analysis(...Include Interactions in Reproducibility( state=0|1 )...)

**说明:** 在“再现性”统计量的计算中包括交互作用。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Include Interactions in Reproducibility( 1 ));obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

### Max Iter

**语法:** obj = EMP Measurement Systems Analysis(...Max Iter( number )...)

**说明:** 设置用于计算方差分量的最大迭代次数。该选项仅影响 REML 分析。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );dt << Select Rows( 5 ) << Exclude( 1 );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Max Iter( 200 ));obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

### Save All Metadata to Table

**语法:** obj &lt;&lt; Save All Metadata to Table( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**说明:** 创建一个新数据表，其中包含测量数据每列的 MSA 元数据和“测量值 Sigma”。该表为高格式，每个测量变量都包含一行。有一个选项用于将容差下限和上限值保存为数据表中的附加列。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << Save All Metadata to Table;

```

### Save Metadata as Column Properties

**语法:** obj &lt;&lt; Save Metadata as Column Properties( &lt; MSA( state=0|1 ) &gt;, &lt; Measurement Sigma( state=0|1 ) &gt;, &lt; Tolerance as Specs( state=0|1 ) &gt; )

**说明:** 对于测量数据的每一列，将 MSA 元数据和“测量值 Sigma”保存为原始数据表中列的列属性。有一个选项用于将容差下限和上限值保存为“规格限”列属性。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << Save Metadata as Column Properties;

```

### Set Alpha Level

**语法:** obj = EMP Measurement Systems Analysis(...Set Alpha Level( number )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于偏倚比较和复测误差比较报表的 alpha 水平。 默认为“0.05”。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Set Alpha Level( .01 ));obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

### Set Random Seed

**语法:** obj = EMP Measurement Systems Analysis(...Set Random Seed( number )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 将随机种子设置为特定值，以确保使用相同种子的所有后续试验都是可再现的。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	Set Random Seed( 12345 ));obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

### Sigma Multiplier

**语法:** obj = EMP Measurement Systems Analysis(...Sigma Multiplier( number=6 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定乘以 sigma 的常数值。 默认为“6”。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	Sigma Multiplier( 5.15 ),	EMP MSA Analysis( "Y", "AIAG Gauge R&R Results"n( 1 ) ));

```

## EMP MSA Analysis > EMP AIAG Gauge Results

### 项消息

#### AIAG Labels

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "AIAG Gauge R&R Results"n(1, AIAG Labels( state=0|1 )))

**说明:** 显示或隐藏“AIAG 量具 R&R 结果”表中的标签。这些标签由美国汽车工业行动集团 (AIAG) 定义。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, AIAG Labels( 0 ) ));

```

#### Discrimination Ratio

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "AIAG Gauge R&R Results"n(1, Discrimination Ratio( state=0|1 )))

**说明:** 显示或隐藏给定模型的分辨比率。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1, Discrimination Ratio( 1 ) ));

```

## EMP MSA Analysis > EMP Average Chart

### 项消息

#### Show Connected Means

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Connected Means( state=0|1 )))

**说明:** 显示或隐藏“平均图”上连接平均测量值的线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Connected Means( 0 ) ));

```

#### Show Control Limits

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Control Limits( state=0|1 )))

**说明:** 显示或隐藏“平均图”上的控制限。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Control Limits Shading( state=0|1 )))

**说明:** 显示或隐藏“平均图”上控制限之间的着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Data

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Data( state=0|1 )))

**说明:** 显示或隐藏“平均图”上的数据点。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Data( 1 ) ));

```

#### Show Grand Mean

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Grand Mean( state=0|1 )))

**说明:** 显示或隐藏“平均图”上 Y 变量的总均值。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Grand Mean( 0 ) ));

```

#### Show Separators

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( 1, Show Separators( state=0|1 )))

**说明:** 显示或隐藏“平均图”上分隔 X 变量的垂直线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Dispersion Chart

### 项消息

#### Show Average Dispersion

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Average Dispersion( state=0|1 )))

**说明:** 显示或隐藏散度图上的平均极差或标准差。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Average Dispersion( 0 ) ));

```

#### Show Connected Points

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Connected Points( state=0|1 )))

**说明:** 显示或隐藏散度图上连接所有极差或标准差的线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Connected Points( 0 ) ));

```

#### Show Control Limits

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Control Limits( state=0|1 )))

**说明:** 显示或隐藏散度图上的控制限。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits( 0 ) ));

```

#### Show Control Limits Shading

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Control Limits Shading( state=0|1 )))

**说明:** 显示或隐藏散度图上控制限之间的着色。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));

```

#### Show Separators

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( 1, Show Separators( state=0|1 )))

**说明:** 显示或隐藏散度图上分隔 X 变量的垂直线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Separators( 0 ) ));

```

## EMP MSA Analysis > EMP Linearity and Bias Results

### 项消息

#### Show Avg Bias Points

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Avg Bias Points( state=0|1 )))

**说明:** 在图形中显示或隐藏平均偏倚点。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 0 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Avg Bias Points( 1 ) ));

```

#### Show Bias Points

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Bias Points( state=0|1 )))

**说明:** 在图形中显示或隐藏偏倚点。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 0 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Bias Points( 1 ) ));

```

#### Show Fit Confidence Curves

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Fit Confidence Curves( state=0|1 )))

**说明:** 在图形中显示或隐藏拟合置信度曲线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Fit Confidence Curves( 1 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Fit Confidence Curves( 0 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Fit Confidence Curves( 1 )));

```

#### Show Line of Fit

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Line of Fit( state=0|1 )))

**说明:** 在图形中显示或隐藏拟合线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 0 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1, Show Line of Fit( 1 ) ));

```

#### Show Overall Avg Bias Line

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( 1, Show Overall Avg Bias Line( state=0|1 )))

**说明:** 在图形中显示或隐藏总平均偏倚线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ),	EMP MSA Analysis( :Measurement, Average Chart( 0 ), Dispersion Chart( 0 ) ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Overall Avg Bias Line( 1 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Overall Avg Bias Line( 0 )));Wait( 1 );obj << (EMP MSA Analysis[1] << Linearity and Bias Results(	1,	Show Overall Avg Bias Line( 1 )));

```

## EMP MSA Analysis

### 项消息

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 0 ));obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));preset = obj << (EMP MSA Analysis[1] << New Preset);dt2 = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj2 = dt2 << EMP Measurement Systems Analysis(	Y( :Measurement ),	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ));Wait( 1 );obj2 << (EMP MSA Analysis[1] << Apply Preset( preset ));

```

#### Average Chart

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Average Chart( state=0|1 ))

**说明:** 显示或隐藏部件和 X 变量的每个组合的平均测量值图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 0 ));

```

#### Bias Comparison

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Bias Comparison( state=0|1 ))

**说明:** 显示或隐藏“均值分析”图，用于检验 X 变量是否具有不同的平均值。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Bias Comparison( 1 ));

```

#### Dispersion Chart

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Dispersion Chart( state=0|1 ))

**说明:** 显示或隐藏指定的散度图。默认散度图是“极差图”。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 0 ));

```

#### EMP Results

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; EMP Results( state=0|1 ))

**说明:** 显示或隐藏计算若干统计量的报表，以帮助您对测量系统进行评估和分类。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << EMP Results( 1 ));

```

#### Edit MSA Metadata

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( state=0|1 ))

**说明:** 打开一个窗口，允许您添加或编辑所有分析的容差范围、容差限值、历史均值和历史过程 sigma。报表将自动更新。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ),	EMP MSA Analysis( "Y", Misclassification Probabilities( 1 ) ));Wait( 1 );obj << (EMP MSA Analysis[1] << Edit MSA Metadata(	Lower Tolerance( 120 ),	Upper Tolerance( 240 )));

```

#### Effective Resolution

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Effective Resolution( state=0|1 ))

**说明:** 显示或隐藏包含测量系统分辨率结果的表，该表帮助您确定测量值增量是否合适。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));

```

#### Linearity and Bias Results

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Linearity and Bias Results( state=0|1 ))

**说明:** 根据回归分析显示或隐藏图形和汇总，使用标准列作为 X 变量，偏倚作为 Y 变量。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/2 Factors Crossed.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Measurement ),	MSA Metadata( :Measurement( Historical Process Sigma( 0.25 ) ) ),	X( :Operator ),	Part( :part# ),	Standard( :Standard ),	Model( "Crossed" ),	Dispersion Chart Type( "Standard Deviation" ));obj << (EMP MSA Analysis[1] << Linearity and Bias Results( 1 ));

```

#### Misclassification Probabilities

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Misclassification Probabilties( state=0|1 ))

**说明:** 显示或隐藏包含给定模型误分类概率的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	MSA Metadata( :Y( Lower Tolerance( 140 ), Upper Tolerance( 220 ) ) ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Misclassification Probabilities( 1 ));

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Average Chart( 0 ));obj << (EMP MSA Analysis[1] << Effective Resolution( 1 ));obj << (EMP MSA Analysis[1] << Dispersion Chart( 1, Show Control Limits Shading( 0 ) ));preset = obj << (EMP MSA Analysis[1] << New Preset);

```

#### Parallelism Plots

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Parallelism Plots( state=0|1 ))

**说明:** 显示或隐藏反映每个部件的平均测量值的叠加图。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Parallelism Plots( 1 ));

```

#### Resultados del estudio R&R de sistemas de medición basado en el método EMP

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "EMP Gauge R&R Results"n( state=0|1 ))

**说明:** 显示或隐藏一个报表，它将测量值中的变异性划分为部件变异和测量系统变异。该报表中的计算基于方差而不是极差。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "EMP Gauge R&R Results"n( 1 ));

```

#### Resultados del estudio R&R de sistemas de medición de AIAG

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "AIAG Gauge R&R Results"n( state=0|1 ))

**说明:** 显示或隐藏一个报表，它将测量值中的变异性划分为部件变异和测量系统变异。“再现性”的计算包括交互作用。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	MSA Metadata(		:Y(			Lower Tolerance( 120 ),			Upper Tolerance( 240 ),			Tolerance Range( 120 ),			Historical Process Sigma( 25 )		)	),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "AIAG Gauge R&R Results"n( 1 ));

```

#### Shift Detection Profiler

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Shift Detection Profiler( state=0|1 ))

**说明:** 显示或隐藏一组交互式图，您可以调整它们以查看在过程行为图中得到警告的概率。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));

```

#### Show Monitor Classification Legend

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Show Monitor Classification Legend( state=0|1 ))

**说明:** 显示或隐藏“EMP 结果”报表中的监控等级图例。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << EMP Results( 1 ));Wait( 1 );obj << (EMP MSA Analysis[1] << Show Monitor Classification Legend( 0 ));

```

#### Show Part Legend

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Show Part Legend( state=0|1 ))

**说明:** 显示或隐藏平均图和散度图的部件图例。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Show Part Legend( 0 ));

```

#### Show Shift Detection Profiler Legend

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Show Shift Detection Profiler Legend( state=0|1 ))

**说明:** 显示或隐藏“偏移检测刻画器”中的图例。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Shift Detection Profiler( 1 ));Wait( 1 );obj << (EMP MSA Analysis[1] << Show Shift Detection Profiler Legend( 0 ));

```

#### Test-Retest Error Comparison

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; "Test-Retest Error Comparison"n( state=0|1 ))

**说明:** 显示或隐藏“方差均值分析”图或“极差均值分析”图，用于检验任何组是否具有不同的复测误差水平。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << "Test-Retest Error Comparison"n( 1 ));

```

#### Variance Components

**语法:** obj &lt;&lt; (EMP MSA Analysis[number] &lt;&lt; Variance Components( state=0|1 ))

**说明:** 显示或隐藏包含给定模型的方差分量估计值的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Variability Data/Gasket.jmp" );obj = dt << EMP Measurement Systems Analysis(	Y( :Y ),	X( :Operator ),	Part( :Part ),	Model( "Crossed" ),	Dispersion Chart Type( "Range" ));obj << (EMP MSA Analysis[1] << Variance Components( 1 ));

```

