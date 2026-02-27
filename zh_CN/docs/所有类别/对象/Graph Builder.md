# Graph Builder



## Area Element

### 关联的构造器

#### Area Element

**语法:** Area Element

**说明:** 显示按类别汇总的响应。

**100% 堆叠面积图**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// 100% stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Summary Statistic( "% of Factor" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox,			{Format( "Percent", 13, 0 ), Max( 1 )}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**使用填充模式的叠加面积图**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// overlaid area with fill patternsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ), Area Style( "Overlaid" ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				40,				Properties( 0, {Fill Pattern( "grid dots" )} ),				Properties( 1, {Fill Pattern( "right slant medium" )} ),				Properties( 2, {Fill Pattern( "left slant medium" )} )			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**堆叠面积图**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// stacked areaGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State, Show Title( 0 ) ),		Overlay( :Commodity )	),	Elements( Area( X, Y, Legend( 40 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	),	SendToReport(		Dispatch( {}, "Commodity Acres Planted", ScaleBox, {Format( "Engineering SI", 13 )} ),		Dispatch( {}, "400", LegendBox, {Legend Position( {40, [2, 1, 0, -3, -3, -3]} )} )	));

```

**将范围区域设置为围绕线条的定制区间**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

### 项消息

#### Area Style

**语法:** obj &lt;&lt; Area Style( "堆叠"|"叠加"|"范围"|"堆叠极差" )

#### Connection

**语法:** obj &lt;&lt; Connection( "线条"|"箭头"|"曲线"|"步进"|"居中步进"|"水平"|"垂直" )

#### Error Interval

**语法:** obj &lt;&lt; Error Interval( "自动"|"无"|"极差"|"四分位数间距"|"标准误差"|"标准差"|"置信区间"|"绝对偏差中位数"|"定制区间"|"双向区间" )

#### Interval Style

**语法:** obj &lt;&lt; Interval Style( "误差条"|"带"|"哈希带"|"箭头" )

#### Missing Factors

**语法:** obj &lt;&lt; Missing Factors( "跳过"|"视为缺失"|"视为零" )

**说明:** 如何显示跨越缺失因子水平的连接

**JMP添加的版本:** 15

#### Missing Values

**语法:** obj &lt;&lt; Missing Values( "连接穿过"|"连接变淡"|"用虚线连接"|"无连接" )

**说明:** 如何显示跨越缺失值的连接。

#### Ordering

**语法:** obj &lt;&lt; Ordering( "自动"|"行顺序"|"汇总"|"行内" )

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Row order

**语法:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**语法:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**语法:** obj &lt;&lt; Smoothness( number )

#### Stack Negative

**语法:** obj &lt;&lt; Stack Negative( "叠加"|"分隔负值"|"视为零" )

**说明:** 控制堆叠时如何处理负数据值。

**JMP添加的版本:** 17

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Graph Builder(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Graph Builder

**语法:** Graph Builder( Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ), &lt;Elements(...)&gt; ) )

**说明:** 提供一个使您可以探索数据的交互式图形界面。您可以将列拖动到图形区域中以创建各种图形，包括散点图、等高线图、条形图、面积图、箱线图、直方图、热图、饼图、矩形树图、马赛克图和地图。

#### 100% 堆叠条形图

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

#### y 轴未对齐的面板

```jsl

Open( "$SAMPLE_DATA/US Regional Population.jmp" );// panels with unaligned y axesGraph Builder(	Transform Column( "Transform[Year]", Continuous, Formula( Num( :Year ) ) ),	Show Control Panel( 0 ),	Extend Axis to Zero( 10 ),	Link Page Axes( "X Only" ),	Replicate Linked Page Axes( 0 ),	Variables(		X( :"Transform[Year]"n ),		Y( :Population ),		Page( :Region, Levels per Row( 3 ) )	),	Elements( Points( X, Y, Legend( 3 ) ), Smoother( X, Y, Legend( 4 ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"AR,LA,OK,TX", "Great Lakes", "KY,TN,AL,MS", "Midwest",				"Mountain", "New England", "NY,NJ,PA", "Pacific", "South Atlantic"}			)		)	),	SendToReport(		Dispatch( {}, "Population", ScaleBox, {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 2 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 3 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 4 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 5 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 6 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 7 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 8 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 9 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Population", ScaleBox( 10 ), {Format( "Engineering SI", 10 )} ),		Dispatch( {}, "Transform[Year]", TextEditBox, {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 2 ), {Set Text( "Year" )} ),		Dispatch( {}, "Transform[Year]", Text Edit Box( 3 ), {Set Text( "Year" )} )	));

```

#### 二项比例置信区间

```jsl

Open( "$SAMPLE_DATA/Bands Data.jmp" );// binomial proportion confidence intervalGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :customer ), Y( :Banding? ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 4 ), Means and Std Devs( 1 ) )	),	Local Data Filter(		Add Filter(			columns( :customer ),			Where( :customer == {"MODMAT", "REI", "ROSES", "SHEPLERS", "TARGET"} )		)	),	SendToReport(		Dispatch( {}, "Banding?", ScaleBox,			{Min( -0.07 ), Max( 1.07 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

#### 使用“依据”变量的独立图

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// by variable creates multiple Graph Builder instancesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), ),	Elements( Points( X, Y, Legend( 17 ) ), Smoother( X, Y, Legend( 18 ) ) ),	By( :Type ));

```

#### 分面式网格分组

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// coplot style grouping using continuous grouping variables, smoother and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Alpha, Levels( 2 ) ),		Y( :CPU Time ),		Group X( :Beta, Levels( 2 ) ),		Group Y( :Gamma, Levels( 2 ) ),		Overlay( :Algorithm )	),	Elements( Points( X, Y, Legend( 29 ) ), Smoother( X, Y, Legend( 30 ), Lambda( 0.25 ) ) ));

```

#### 变异性图

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

#### 叠加点的连接线

```jsl

Open( "$SAMPLE_DATA/Time Series/M3C Quarterly Wide Format.jmp" );// connected lines with overlaid dots, custom markers, nested date axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :N 646 ), Y( :N 647, Position( 1 ) ) ),	Elements(		Line( X, Y( 1 ), Y( 2 ), Legend( 10 ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 11 ) )	),	SendToReport(		Dispatch( {}, "Time", ScaleBox,			{Min( 2515958948 ), Max( 2872394250 ), Interval( "Quarter" ), Inc( 1 ),			Minor Ticks( 0 ), Label Row Nesting( 2 ), Label Row( 1, Set Font Size( 12 ) )}		),		Dispatch( {}, "N 646", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Line Label Properties( {Last Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Last Label( 1 )} )} )			), Legend Model(				11,				Base( 0, 0, 0, Item ID( "N 646", 1 ) ),				Base( 1, 0, 1, Item ID( "N 647", 1 ) ),				Properties( 0, {Marker( "FilledCircle" )} ),				Properties( 1, {Marker( "Filled Up Triangle" )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg(				Line Seg( "Line (N 646)" ),				Label Offset( "Last", 45, {2843799627.0183, 6317.56810988166} )			), DispatchSeg(				Line Seg( "Line (N 647)" ),				Label Offset( "Last", 45, {2857099451.70628, 4518.71614237549} )			)}		)	));

```

#### 叠加的二元核密度等高线

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// overlaid bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Contour( X, Y, Legend( 6 ), Line( 1 ), Number of Levels( 5 ), Smoothness( 0.2174 ) )	));

```

#### 叠加经验累积分布函数曲线

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// CDF, empirical cumulative distribution functionGraph Builder(	Transform Column(		"Rank[Culmen Length]@Overlay",		Formula(			Col Rank( :Culmen Length, :"@Exclude"n, :"@Filter"n, :"@Graph"n, :"@Overlay"n )			 / Col Number(				:Culmen Length,				:"@Exclude"n,				:"@Filter"n,				:"@Graph"n,				:"@Overlay"n			)		)	),	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Show Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Culmen Length ),		Y( :"Rank[Culmen Length]@Overlay"n ),		Overlay( :Species )	),	Elements( Line( X, Y, Legend( 15 ), Connection( "Step" ) ) ),	SendToReport(		Dispatch( {}, "Rank[Culmen Length]@Overlay", ScaleBox, {Max( 1.0117745954803 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				15,				Level Name( 0, "Adelie" ),				Level Name( 1, "Chinstrap" ),				Level Name( 2, "Gentoo" )			)}		)	));

```

#### 地中海等积等值区域图

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

#### 多个 x 轴

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Algorithm Data.jmp" );// mutiple x variables in separate panels, smoother with confidence intervals and scatter plotGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Alpha ), X( :Beta ), X( :Gamma ), Y( :CPU Time ), Overlay( :Algorithm ) ),	Elements(		Position( 1, 1 ),		Points( X, Y, Legend( 39 ) ),		Smoother( X, Y, Legend( 40 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 41 ) ),		Smoother( X, Y, Legend( 42 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 43 ) ),		Smoother( X, Y, Legend( 44 ), Lambda( 1.5 ), Confidence of Fit( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 40, Properties( 2, {Line Color( RGB Color( 0.4, 0.4, 0.4 ) )} ) )}		)	));

```

#### 左 y 轴和右 y 轴

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// left and right y axes sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Time ), Y( :pH ), Y( :Tank Level, Position( 1 ), Side( "Right" ) ) ),	Elements( Line( X, Y( 1 ), Legend( 41 ) ), Line( X, Y( 2 ), Legend( 46 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### 带叠加曲线的气泡图

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Smooth trend line, variable dot size, overlaid y variables, bubble chart. data filterGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"% Taking (2004)"n ),		Y( :SAT Verbal ),		Y( :SAT Math, Position( 1 ) ),		Size( :Population )	),	Elements(		Points( X, Y( 1 ), Y( 2 ), Legend( 7 ) ),		Smoother( X, Y( 1 ), Y( 2 ), Legend( 8 ), Lambda( 0.45 ) )	),	Local Data Filter( Add Filter( columns( :Year ), Where( :Year == 2004 ) ) ),	SendToReport(		Dispatch( {}, "% Taking (2004)", ScaleBox, {Format( "Percent", 12, 0 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 7, Properties( 0, {Marker Size( 6 )} ) )}		)	));

```

#### 带四分位数的小提琴图

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

#### 带定制带区间的线条

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// range area, custom interval, overlaid line, transparencyGraph Builder(	Transform Column(		"Quantile...=0.75[height][age]",		Formula( Col Quantile( :height, 0.75, :age, :"@Exclude"n, :"@Filter"n ) )	),	Transform Column(		"Quantile...=0.25[height][age]",		Formula( Col Quantile( :height, 0.25, :age, :"@Exclude"n, :"@Filter"n ) )	),	Show Control Panel( 0 ),	Variables(		X( :age ),		Y( :height ),		Y( :"Quantile...=0.25[height][age]"n, Position( 1 ) ),		Y( :"Quantile...=0.75[height][age]"n, Position( 1 ) )	),	Elements(		Area( X, Y( 2 ), Y( 3 ), Legend( 5 ), Area Style( "Range" ) ),		Line( X, Y( 1 ), Legend( 6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Level Name( 0, "IQR" ),				Properties( 0, {Transparency( 0.33 )} )			)}		),		Dispatch( {}, "400", LegendBox, {Set Title( "" )} )	));

```

#### 带边缘箱线图的散点图

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot with marginal box plots, custom graph sizesGraph Builder(	Transform Column( "dummy1", Nominal, Formula( 1 ) ),	Transform Column( "dummy2", Nominal, Formula( 1 ) ),	Show Control Panel( 0 ),	Variables(		X( :Delta 13 C ),		X( :dummy1 ),		Y( :dummy2 ),		Y( :Delta 15 N ),		Color( :Sex ),		Size( :Body Mass )	),	Relative Sizes( "X", [100 10] ),	Relative Sizes( "Y", [10 100] ),	Elements( Position( 1, 1 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 12 ) ) ),	Elements( Position( 1, 2 ), Points( X, Y, Legend( 4 ) ) ),	Elements( Position( 2, 1 ) ),	Elements( Position( 2, 2 ), Box Plot( X, Y, Color( 0 ), Size( 0 ), Legend( 13 ) ) ),	SendToReport(		Dispatch( {}, "dummy1", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "dummy2", ScaleBox, {Label Row( Show Major Labels( 0 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 1, {Transparency( 0.75 )} ),				Properties( 2, {Transparency( 0.75 )} )			)}		),		Dispatch( {}, "dummy1", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "dummy2", TextEditBox, {Set Text( "" )} ),		Dispatch( {}, "400", LegendBox,			{Legend Position( {12, [1, -3], 4, [0, 3, 4], 13, [2, -3]} )}		)	));

```

#### 平行 y 轴，叠加线条

```jsl

Open( "$SAMPLE_DATA/Functional Data/Fermentation Process.jmp" );// parallel y axes, multiple y scales sharing a graph, overlaid linesGraph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Variables(		X( :Time ),		Y( :Temp ),		Y( :NH3 Feed ),		Y( :Air ),		Y( :Tank Level ),		Y( :pH )	),	Elements( Position( 1, 1 ), Line( X, Y, Legend( 37 ) ) ),	Elements( Position( 1, 2 ), Line( X, Y, Legend( 39 ) ) ),	Elements( Position( 1, 3 ), Line( X, Y, Legend( 40 ) ) ),	Elements( Position( 1, 4 ), Line( X, Y, Legend( 41 ) ) ),	Elements( Position( 1, 5 ), Line( X, Y, Legend( 42 ) ) ),	SendToReport( Dispatch( {}, "Time", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ) ));

```

#### 拿破仑行军流程图

```jsl

Open( "$SAMPLE_DATA/Napoleons March.jmp" );// flow diagramGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :Longitude ),		Y( :Latitude ),		Overlay( :Group ),		Color( :Direction ),		Size( :Army Size )	),	Elements(		Line( X, Y, Legend( 3 ), Ordering( "Row Order" ), Missing Values( "No Connection" ) )	),	SendToReport(		Dispatch( {}, "Longitude", ScaleBox,			{Min( 26.71 ), Max( 34.9 ), Inc( 2.5 ), Minor Ticks( 0 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "Latitude", ScaleBox,			{Min( 53.32 ), Max( 56.61 ), Inc( 0.5 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Line Width( 10 )} ),				Properties( 1, {RGB Color( 1, 0.69, 0.49 )} ),				Properties( 2, {RGB Color( 0.47, 0.47, 0.47 )} )			)}		),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Napoleon's March to Moscow" )}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Images( "Detailed Earth", Transparency( 0.75 ) ) )}		)	));

```

#### 晶片图

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

#### 条形图和平滑趋势线组合

```jsl

Open( "$SAMPLE_DATA/Spring.jmp" );// bar chart and smooth trend line combination, left and right y axesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :April ), Y( :Temp ), Y( :Precip, Position( 1 ), Side( "Right" ) ) ),	Elements(		Points( X, Y( 1 ), Legend( 12 ) ),		Smoother( X, Y( 1 ), Legend( 13 ) ),		Bar( X, Y( 2 ), Legend( 16 ) )	),	SendToReport(		Dispatch( {}, "Precip", ScaleBox,			{Format( "Best", 12 ), Max( 5 ), Inc( 1 ), Minor Ticks( 1 )}		)	));

```

#### 点和平滑线

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));

```

#### 等高线图和散点图各点

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );// contour plot and scatter plot points, smoothing, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Labor ), Y( :Capital ), Color( :Difference ) ),	Elements(		Contour(			X,			Y,			Legend( 9 ),			Boundary( 0 ),			Number of Levels( 7 ),			Alpha( 5 ),			Smoothness( 0.2 )		),		Points( X, Y, Color( 0 ), Legend( 10 ) )	));

```

#### 箭头线，每行一条

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

#### 线性回归面板

```jsl

Open( "$SAMPLE_DATA/Financial.jmp" );// line of fit, regression, small multiples, custom group color, custom graph spacingGraph Builder(	Show Control Panel( 0 ),	Grid Color( "Medium Light Gray" ),	Grid Transparency( 0.25 ),	Title Fill Color( "Medium Light Gray" ),	Title Frame Color( "Medium Light Gray" ),	Level Fill Color( {217, 217, 217} ),	Level Frame Color( "Medium Light Gray" ),	Level Spacing Color( "Medium Light Gray" ),	Graph Spacing( 10 ),	Variables( X( :"Assets($Mil.)"n ), Y( :"Stockholder's Eq($Mil.)"n ), Wrap( :Type ) ),	Elements( Points( X, Y, Legend( 17 ) ), Line Of Fit( X, Y, Legend( 19 ) ) ),	Local Data Filter(		Add Filter( columns( :"Assets($Mil.)"n ), Where( :"Assets($Mil.)"n <= 60941 ) )	));

```

#### 轴汇总表

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

## 项消息

### Add Element

**语法:** obj &lt;&lt; Add Element( xposition, yposition, {Type(element name), X(i=1), Y(i=1), options...} )

**说明:** 在给定的 X 和 Y 位置添加新图形元素。元素指定包括元素名称，它使用的数据角色以及选项值。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Element( 1, 1, {Type( "Line Of Fit" ), X, Y, Degree( "Quadratic" )} );

```

### Add Variable

**语法:** obj &lt;&lt; Add Variable( {column, Role(role), Position(p=1), Inner Position(i=1)}, &lt; &lt;&lt;Method("insert"|"merge"|"replace")&gt; )

**说明:** 将新变量以给定角色和位置添加到“图形生成器”模型。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );

```

### Auto Stretching

**语法:** obj &lt;&lt; Auto Stretching( state=0|1 )

**说明:** 切换带有容纳窗口的图形的自动拉伸功能。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Auto Stretching( 0 );

```

### Back Color

**语法:** obj &lt;&lt; Back Color( color )

**说明:** 设置图形周围整个背景的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Back Color( "Yellow" );

```

### Categorical Color Theme

**语法:** obj &lt;&lt; Categorical Color Theme

**说明:** 设置用于类别的颜色主题。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Categorical Color Theme( "Pastel" );

```

### Continuous Color Theme

**语法:** obj &lt;&lt; Continuous Color Theme

**说明:** 设置用于渐变的颜色主题。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Continuous Color Theme( "White to Black" );

```

### Done

**语法:** obj &lt;&lt; Done

**说明:** 隐藏控制面板并关闭任何行抽样。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Done;

```

### Elements

**语法:** Elements( Points( X, Y )| Box plot( X, Y, Jitter( state=0|1 ), Outliers( state=0|1 ), Box Style( "Outlier"|"Quantile" ) )|Line( X, Y, Row Order( number ), Summary Statistic( ) )| Histogram( X, Y)| Bar( X, Y, Bar Style(), Summary Statistic() )| Contour(X, Y)| Smoother(X, Y)|Map Shapes(Summary Statistic() )) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 标识可视化的元素。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Variables( X( :"F Rate 0-19"n ), Y( :Region ) ),	Elements( Box Plot( X, Y ), Line( X, Y, Summary Statistic( "Mean" ) ) ));

```

### Error Bar Offset

**语法:** obj &lt;&lt; Error Bar Offset

**说明:** 打开对话框以设置误差条的偏移。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Error Bar Offset( 0.01 );

```

### Extend Axis to Zero

**语法:** obj &lt;&lt; Extend Axis to Zero( multiplier=1 )

**说明:** 轴尺度扩展能包括零的扩展量的乘数。 默认为“1”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Extend Axis to Zero( 10 ),	Variables( X( :Weight ), Y( :Height ) ),	Elements( Line( X, Y ) ));

```

### Extend Dual Axes to Zero

**语法:** obj &lt;&lt; Extend Dual Axes to Zero( multiplier=2 )

**说明:** 当同时存在左侧轴和右侧轴时，轴尺度扩展能包括零的扩展量的乘数。 默认为“2”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 513, 465 ),	Extend Dual Axes to Zero( 10 ),	Variables( X( :age ), Y( :weight, Side( "Right" ) ), Y( :height, Position( 1 ) ) ),	Elements( Line( X, Y( 2 ) ), Line( X, Y( 1 ) ) ));

```

### Extend Parallel Y Axes to Zero

**语法:** obj &lt;&lt; Extend Parallel Y Axes to Zero( multiplier=3 )

**说明:** 在“平行 Y 轴”模式下，轴尺度扩展能包括零的扩展量的乘数。 默认为“3”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Show Control Panel( 0 ),	Parallel Axes( "Y Only" ),	Extend Parallel Y Axes to Zero( 0 ),	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Line( X, Y ) ),	Elements( Position( 1, 2 ), Line( X, Y ) ));

```

### Fit to Window

**语法:** obj &lt;&lt; Fit to Window( "自动"|"开"|"关"|"保留纵横比" )

**说明:** 设置报表的自动拉伸行为。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Fit to Window( "Off" );

```

### Get Element

**语法:** obj &lt;&lt; Get Element( xposition, yposition, i )

**说明:** 返回给定的 x 和 y 位置的图形元素指定。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Element( 1, 1, 1 );

```

### Get Elements

**语法:** obj &lt;&lt; Get Elements( xposition, yposition )

**说明:** 返回给定的 x 和 y 位置的元素指定列表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Elements( 1, 1 );

```

### Get Legend Display

**语法:** obj &lt;&lt; Get Legend Display

**说明:** 返回可查询或修改的图形的图例显示框。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Display;item = lgnd << Get Item( 2, 1 );item << Set Visible( 0 );

```

### Get Legend Server

**语法:** obj &lt;&lt; Get Legend Server

**说明:** 返回一个对象，该对象包含图例显示和图形中相应的显示段所使用的信息。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Variables( X( :height ), Y( :weight ), Overlay( :sex ), Color( :age ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ));lgnd = gb << Get Legend Server;items = lgnd << Get Legend Items;Show( items );

```

### Get N Elements

**语法:** obj &lt;&lt; Get N Elements( xposition, yposition )

**说明:** 返回给定的 x 和 y 位置的图形元素数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Elements( 1, 1 );

```

### Get N Positions

**语法:** nrole

**说明:** 返回给定角色的正在使用位置数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Positions( "X" );

```

### Get N Variables

**语法:** n = obj &lt;&lt; Get N Variables

**说明:** 返回正在使用的变量数。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get N Variables();

```

### Get Variable

**语法:** obj &lt;&lt; Get Variable( index )

**说明:** 返回变量指定。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variable( 1 );

```

### Get Variables

**语法:** list = obj &lt;&lt; Get Variables

**说明:** 返回正在使用的变量的变量指定列表。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Get Variables();

```

### Graph Spacing

**语法:** obj &lt;&lt; Graph Spacing( gap=1 )

**说明:** 设置图形面板之间的空白量。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Add Variable( {:age, Role( "Wrap" )} );gb << Graph Spacing( 3 );

```

### Grid Color

**语法:** obj &lt;&lt; Grid Color( color )

**说明:** 设置图形中的网格线颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Color( "Red" );

```

### Grid Transparency

**语法:** obj &lt;&lt; Grid Transparency( fraction=1 )

**说明:** 设置网格线的透明度。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Graph Spacing( 5 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Grid Transparency( 0.2 );

```

### Include Missing Categories

**语法:** obj &lt;&lt; Include Missing Categories( state=0|1 )

**说明:** 将缺失值视为分类变量的单独水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));:age[{10, 20, 30}] = .;gb << Add Variable( {:age, Role( "Wrap" )} );gb << Include Missing Categories( 1 );

```

### Launch Analysis

**语法:** obj &lt;&lt; Launch Analysis

**说明:** 使用当前变量启动分析。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Launch Analysis;

```

### Legend Floating Offset

**语法:** obj &lt;&lt; Legend Floating Offset

**说明:** 当“图例位置”设置为“浮动”时，为图例设置以像素为单位的偏移

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Inside Floating" );

```

### Legend Position

**语法:** obj &lt;&lt; Legend Position( "右"|"底部"|"内部左侧"|"内部右侧"|"内部左下"|"内部右下"|"内部浮动" )

**说明:** 设置图例的位置。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Legend Position( "Bottom" );

```

### Legend Settings

**语法:** obj &lt;&lt; Legend Settings

**说明:** 打开一个对话框以修改图例的属性。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << Legend Settings();

```

### Level Fill Color

**语法:** obj &lt;&lt; Level Fill Color( color )

**说明:** 设置图形中水平名称的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Fill Color( {103, 214, 214} );

```

### Level Frame Color

**语法:** obj &lt;&lt; Level Frame Color( color )

**说明:** 设置图形中水平名称的围线颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );

```

### Level Spacing Color

**语法:** obj &lt;&lt; Level Spacing Color( color )

**说明:** 设置水平标签之间的间距颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Color( "Blue" );

```

### Level Spacing Transparency

**语法:** obj &lt;&lt; Level Spacing Transparency( fraction=1 )

**说明:** 设置水平标签之间的间距透明度。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Spacing Transparency( .2 );

```

### Level Text Color

**语法:** obj &lt;&lt; Level Text Color( color )

**说明:** 设置图形中水平名称文本的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Text Color( "Red" );

```

### Level Transparency

**语法:** obj &lt;&lt; Level Transparency( fraction=1 )

**说明:** 设置图形中水平名称框的透明度。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Transparency( .2 );

```

### Level Underline

**语法:** obj &lt;&lt; Level Underline( state=0|1 )

**说明:** 为图形中的水平名称添加下划线或删除下划线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Level Frame Color( "Blue" );gb << Level Underline( 1 );

```

### Lighten large fills

**语法:** obj &lt;&lt; Lighten large fills( state=0|1 )

**说明:** 自动为饼图、矩形树图和马赛克图元素加亮填充大面积的颜色。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lighten large fills( 1 );

```

### Link Page Axes

**语法:** obj &lt;&lt; Link Page Axes( "无"|"仅 X"|"仅 Y"|"X 和 Y" )

**说明:** 设置各页面分组水平关联的轴。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "Y Only" );

```

### Lock Scales

**语法:** obj &lt;&lt; Lock Scales( state=0|1 )

**说明:** 锁定轴和渐变范围，以便在数据或过滤条件发生更改时它们不会随之更改。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Lock Scales( 1 );

```

### Make into Data Table

**语法:** obj &lt;&lt; Make into Data Table

**说明:** 创建一个新的数据表，其中包含图形的图像。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Make into Data Table;

```

### Order Statistic

**语法:** obj &lt;&lt; Order Statistic( "数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数"="均值" )

**说明:** 设置使用“排序方式”消息时图形中的变量基于使用的汇总统计量的默认顺序。 默认为“均值”。

```jsl

dt = Open( "$SAMPLE_DATA/PopAgeGroup.jmp" );gb = dt << Graph Builder(	Order Statistic( "Max" ),	Variables( X( :"F Rate 0-19"n ), Y( :Region, Order By( :"F Rate 0-19"n, Ascending ) ) ),	Elements( Box Plot( X, Y ) ));

```

### Overlay Auto Line Styles Limit

**语法:** obj &lt;&lt; Overlay Auto Line Styles Limit( count=6 )

**说明:** 在存在颜色变量的情况下，“叠加编码”将为“自动”设置使用线条样式，限制叠加水平数。 默认为“6”。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Line Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Line( X, Y ) ));

```

### Overlay Auto Marker Styles Limit

**语法:** obj &lt;&lt; Overlay Auto Marker Styles Limit( count=62 )

**说明:** 在存在颜色变量的情况下，“叠加编码”将为“自动”设置使用标记样式，限制叠加水平数。 默认为“62”。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Overlay Auto Marker Styles Limit( 0 ),	Variables( X( :Weight ), Y( :Height ), Overlay( :sex ), Color( :Age ) ),	Elements( Points( X, Y ) ));

```

### Page Count Limit

**语法:** obj &lt;&lt; Page Count Limit( count=200 )

**说明:** 设置为页面变量创建的最大页数，以避免意外的性能退化。 默认为“200”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Name ) ),	Elements( Points( X, Y ) ));gb << Page Count Limit( 5 );

```

### Page Gap Size

**语法:** obj &lt;&lt; Page Gap Size( gap=25 )

**说明:** 设置页面分组之间的空白量。 默认为“25”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Gap Size( 3 );

```

### Page Level Fill Color

**语法:** obj &lt;&lt; Page Level Fill Color( color )

**说明:** 设置图形中水平名称的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Fill Color( {103, 214, 214} );

```

### Page Level Frame Color

**语法:** obj &lt;&lt; Page Level Frame Color( color )

**说明:** 设置图形中水平名称的围线颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );

```

### Page Level Text Color

**语法:** obj &lt;&lt; Page Level Text Color( color )

**说明:** 设置图形中水平名称文本的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Text Color( "Red" );

```

### Page Level Transparency

**语法:** obj &lt;&lt; Page Level Transparency( fraction=1 )

**说明:** 设置图形中水平名称框的透明度。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Transparency( .2 );

```

### Page Level Underline

**语法:** obj &lt;&lt; Page Level Underline( state=0|1 )

**说明:** 为图形中的水平名称添加下划线或删除下划线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Page( :Sex ) ),	Elements( Smoother( X, Y ) ));gb << Page Level Frame Color( "Blue" );gb << Page Level Underline( 1 );

```

### Parallel Axis Merging

**语法:** obj &lt;&lt; Parallel Axis Merging( "始终"|"低相似性"|"中相似性"|"高相似性"|"从不" )

**说明:** 确定自动“合并尺度”设置何时应选择“平行合并”而非“平行独立”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Axis Merging( "Never" );

```

### Parallel Y Axes

**语法:** obj &lt;&lt; Parallel Y Axes( state=0|1 )

**说明:** 所有 Y 轴共享同一个图形。与平行坐标类似，但支持 X 变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :age ), Y( :height ), Y( :weight ) ),	Elements( Position( 1, 1 ), Points( X, Y ), Smoother( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ), Smoother( X, Y ) ));gb << Parallel Y Axes( 1 );

```

### Random Seed

**语法:** obj &lt;&lt; Random Seed( number )

**说明:** 设置随机散布的特定种子。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ) ),	Elements( Points( X, Y, Jitter( "Random Uniform" ) ) ));Wait( 1 );gb << Random Seed( 123456 );

```

### Relative Sizes

**语法:** Relative Sizes(axis, matrix of relative size values)

**说明:** 确定分配给序列中多个轴的每个轴的空间比例。

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Graph Builder(	Size( 435, 352 ),	Show Control Panel( 0 ),	Variables( X( :weight ), Y( :height ), Y( :sex ) ),	Relative Sizes( "Y", [4 1] ),	Elements( Position( 1, 1 ), Points( X, Y ) ),	Elements( Position( 1, 2 ), Points( X, Y ) ));

```

### Remove Element

**语法:** obj &lt;&lt; Remove Element( xposition, yposition, i )

**说明:** 删除在给定的 X 和 Y 位置上的图形元素。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Remove Element( 1, 1, 2 );

```

### Remove Variable

**语法:** obj &lt;&lt; Remove Variable( index | {column, Role(role), Position(p=1), Inner Position(i=1)} )

**说明:** 从“图形生成器”模型中删除通过索引或给定的列名、角色和位置指定的变量。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Add Variable( {:age, Role( "Wrap" )} );Wait( 0.5 );gb << Remove Variable( 3 );

```

### Replicate Linked Page Axes

**语法:** obj &lt;&lt; Replicate Linked Page Axes( state=0|1 )

**说明:** 确定是为每个图形显示一次网格中的关联页面轴还是为图形的每个行或列显示一次。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Size( 470, 552 ),	Variables( X( :height ), Y( :weight ), Page( :age ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Link Page Axes( "X and Y" );gb << Replicate Linked Page Axes( 1 );

```

### Sampling

**语法:** obj &lt;&lt; Sampling( number )

**说明:** 使用指定的比例或计数随机选择数据的一个子集。当数据很大并且图形仍在变化时这很有用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Sampling( 20 );

```

### Set Alpha Level

**语法:** obj &lt;&lt; Set Alpha Level( 0.10|0.05|0.01|Other... )

**说明:** 更改用于置信曲线的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Set α Level

**语法:** obj &lt;&lt; Set α Level( 0.10|0.05|0.01|Other... )

**说明:** 更改用于置信曲线的 alpha 水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Set Alpha Level( 0.10 );

```

### Show Control Panel

**语法:** obj &lt;&lt; Show Control Panel( state=0|1 )

**说明:** 显示或隐藏控制面板。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Control Panel( 1 );

```

### Show Excluded Rows

**语法:** obj &lt;&lt; Show Excluded Rows( state=0|1 )

**说明:** 在图上显示或隐藏排除的行。当选择该选项时，排除的行会包括在失控点的计数中，但会从数值计算中排除。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));dt << Select Rows( 1 :: 5 );dt << Exclude();gb << Show Excluded Rows( 1 );

```

### Show Footer

**语法:** obj &lt;&lt; Show Footer( state=0|1 )

**说明:** 显示或隐藏页脚文本。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Footer( 0 );

```

### Show Legend

**语法:** obj &lt;&lt; Show Legend( state=0|1 )

**说明:** 显示或隐藏图形右侧的图例。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Legend( 1 );

```

### Show Subtitle

**语法:** obj &lt;&lt; Show Subtitle( state=0|1 )

**说明:** 显示或隐藏图形副标题。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Subtitle( 1 );

```

### Show Title

**语法:** obj &lt;&lt; Show Title( state=0|1 )

**说明:** 显示或隐藏图形标题。 默认开启。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Title( 0 );

```

### Show X Axis

**语法:** obj &lt;&lt; Show X Axis( state=0|1 )

**说明:** 显示或隐藏 X 轴。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis( 0 );

```

### Show X Axis Title

**语法:** obj &lt;&lt; Show X Axis Title( state=0|1 )

**说明:** 显示或隐藏 X 轴标题。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show X Axis Title( 0 );

```

### Show Y Axis

**语法:** obj &lt;&lt; Show Y Axis( state=0|1 )

**说明:** 显示或隐藏 Y 轴。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis( 0 );

```

### Show Y Axis Title

**语法:** obj &lt;&lt; Show Y Axis Title( state=0|1 )

**说明:** 显示或隐藏 Y 轴标题。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Show Y Axis Title( 0 );

```

### Size

**语法:** obj &lt;&lt; Size( width, height )

**说明:** 设置图形大小。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Size( 808, 586 );

```

### Spacing Borders

**语法:** obj &lt;&lt; Spacing Borders( 0|1=0 )

**说明:** 设置内部图形面板的边框。 默认为“0”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Spacing Borders( 1 );

```

### Subtitle Alignment

**语法:** obj &lt;&lt; Subtitle Alignment( "左"|"中心"|"右"|"自动" )

**说明:** 设置图形副标题的对齐方式。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Alignment( "Left" );

```

### Subtitle Span

**语法:** obj &lt;&lt; Subtitle Span( "完全"|"图形内容" )

**说明:** 设置图形副标题的跨度。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Subtitle Span( "Graph" );

```

### Summary Statistic

**语法:** Summary Statistic( N|Mean|Min|Max|Sum|% of Total )

**说明:** 设置图形中不同元素使用的默认汇总统计量。直条和线条元素默认使用均值。 默认为“均值”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Age ), Y( :Height ), Y( :weight, Position( 1 ) ) ),	Summary Statistic( "Sum" ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 2 ) ) ));

```

### Title Alignment

**语法:** obj &lt;&lt; Title Alignment( "左"|"中心"|"右" )

**说明:** 设置图形标题的对齐方式。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Alignment( "Left" );

```

### Title Fill Color

**语法:** obj &lt;&lt; Title Fill Color( color )

**说明:** 设置图形中的标题背景填充色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Fill Color( "Cyan" );

```

### Title Frame Color

**语法:** obj &lt;&lt; Title Frame Color( color )

**说明:** 设置图形中标题框的围线颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );

```

### Title Span

**语法:** obj &lt;&lt; Title Span( "完全"|"图形内容" )

**说明:** 设置图形标题的跨度。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Span( "Graph" );

```

### Title Text Color

**语法:** obj &lt;&lt; Title Text Color( color )

**说明:** 设置图形中的标题文本颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Text Color( "Red" );

```

### Title Transparency

**语法:** obj &lt;&lt; Title Transparency( fraction=1 )

**说明:** 设置图形中标题框的透明度。 默认为“1”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Transparency( .2 );

```

### Title Underline

**语法:** obj &lt;&lt; Title Underline( state=0|1 )

**说明:** 为图形中的标题添加下划线或删除下划线。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Title Frame Color( "Blue" );gb << Title Underline( 1 );

```

### Update Element

**语法:** obj &lt;&lt; Update Element( xposition, yposition, i, {options} )

**说明:** 修改现有元素的属性。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 0.5 );gb << Update Element( 1, 1, 1, {Summary Statistic( "Mean" ), Error Bars( "Range" )} );

```

### Use row colors for levels

**语法:** obj &lt;&lt; Use row colors for levels( state=0|1 )

**说明:** 当每个水平具有唯一颜色时，使用行颜色初始化图例水平。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));gb << Use row colors for levels( 1 );

```

### Variables

**语法:** Variables( X(column ), Y( column ), &lt;Group X( column )&gt;, &lt;Group Y( column )&gt;, &lt;Shape( column )&gt;, &lt;Color( column )&gt;, &lt;Overlay( column )&gt;, &lt;Freq( column )&gt; ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 定义用于可视化的变量。

```jsl

dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );gb = dt << Graph Builder( Variables( Color( :SAT Verbal ), Shape( :State ) ) );

```

### X Group Edge

**语法:** obj &lt;&lt; X Group Edge( "顶部"|"底部" )

**说明:** 将代表 X 组的轴移至顶部或底部。默认为“顶部”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y ), Smoother( X, Y ) ));Wait( 1 );gb << X Group Edge( "Bottom" );

```

### Y Group Edge

**语法:** obj &lt;&lt; Y Group Edge( "左侧"|"右侧" )

**说明:** 将代表 Y 组的轴移至左侧或右侧。默认为“右侧”。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Edge( "Left" );

```

### Y Group Level Orientation

**语法:** obj &lt;&lt; Y Group Level Orientation( "水平"|"垂直" )

**说明:** 确定“Y 分组”水平标签文本是水平还是垂直（旋转）。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Level Orientation( "Horizontal" );

```

### Y Group Title Orientation

**语法:** obj &lt;&lt; Y Group Title Orientation( "水平"|"垂直" )

**说明:** 确定“Y 分组”标题标签文本是水平还是垂直（旋转）。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = dt << Graph Builder(	Variables( X( :Sex ), Y( :Height ), Group Y( :Age ) ),	Elements( Smoother( X, Y ) ));Wait( 1 );gb << Y Group Title Orientation( "Horizontal" );

```

## Bar Element

### 关联的构造器

#### Bar Element

**语法:** Bar Element

**说明:** 显示按类别汇总的响应。

**100% 堆叠条形图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// 100% stacked bar chart, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ), Overlay( :Alcohol Use ) ),	Elements(		Bar( X, Y, Legend( 55 ), Bar Style( "Stacked" ), Summary Statistic( "% of Factor" ) )	),	SendToReport(		Dispatch( {}, "Cholesterol", ScaleBox, {Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				55,				Properties( 0, {Fill Color( RGB Color( 0.9, 0.9, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 1.0, 0.8, 0.8 ) )} ),				Properties( 2, {Fill Color( RGB Color( 1.0, 0.6, 0.6 ) )} ),				Properties( 3, {Fill Color( RGB Color( 1.0, 0.3, 0.3 ) )} )			)}		)	));

```

**使用中位数的并排分组条形图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, side-by-side, 3 y variables, median, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Summary Statistic( "Median" ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**使用变换的带点区间**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// interval bar chart, transform columnsGraph Builder(	Transform Column( "Maximum[HDL][Sex]", Formula( Col Maximum( :HDL, :Sex ) ) ),	Transform Column( "Minimum[HDL][Sex]", Formula( Col Minimum( :HDL, :Sex ) ) ),	Transform Column( "Mean[HDL][Sex]", Formula( Col Mean( :HDL, :Sex ) ) ),	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :"Minimum[HDL][Sex]"n ),		Y( :"Maximum[HDL][Sex]"n, Position( 1 ) ),		Y( :"Mean[HDL][Sex]"n, Position( 1 ) ),	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Bar Style( "Interval" ) ) ));

```

**具有 3 个变量和定制颜色的堆叠条形图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, stacked, 3 y variables, meanGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements(		Bar(			X,			Y( 1 ),			Y( 2 ),			Y( 3 ),			Bar Style( "Stacked" ),			Summary Statistic( "Mean" ),			Legend( 5 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "dark gray" )} ),				Properties( 1, {Fill Color( "blue" )} ),				Properties( 2, {Fill Color( "orange" )} )			)}		)	));

```

**叠加了点的浮动线条**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// float lines and overlaid pointsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :LDL ), Y( :HDL, Position( 1 ) ) ),	Elements(		Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Float" ) ),		Points( X, Y( 1 ), Y( 2 ), Legend( 3 ) )	));

```

**叠加了线条的直条**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar with floating lines, custom colorsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Sex ),		Y( :Cholesterol ),		Y( :HDL, Position( 1 ) ),		Y( :LDL, Position( 1 ) )	),	Elements( Bar( X, Y( 1 ), Y( 2 ), Y( 3 ), Legend( 5 ), Bar Style( "Single" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {Fill Color( "light gray" )} ),				Properties( 1, {Line Color( "green" )} ),				Properties( 2, {Line Color( "orange" )} )			)}		)	));

```

**可变宽度直条，按值排序**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// variable width bars, ordered by valueGraph Builder(	Show Control Panel( 0 ),	Variables(		X(			:State,			Order By( :"2004 Verbal"n, "Descending", Order Statistic( "Mean" ) ),			Size By( :"% Taking (2004)"n, Size Statistic( "Mean" ) )		),		Y( :"2004 Verbal"n )	),	Elements( Bar( X, Y, Legend( 4 ) ) ));

```

**小值堆叠为“其他”的直条**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Failures.jmp" );// stacked other bar, packed bars, paretoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Count ), Y( :Causes ) ),	Elements(		Bar(			X,			Y,			Bar Style( "Packed" ),			Packed Placement( "Separate stack" ),			Packed Primary Labels( "On axis" )		)	));

```

**带已添加标签的直条的条形图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, label by valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Label( "Label by Value" ), Label Format( "Fixed Dec", 9, 1 ) ) ));

```

**带置信区间的条形图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// bar chart with confidence intervalsGraph Builder(	Size( 658, 555 ),	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements( Bar( X, Y, Legend( 6 ), Error Interval( "Confidence Interval" ) ) ));

```

**弹道图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// bar chart, bullet, 2 y variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Legend( 1 ), Bar Style( "Bullet" ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 1, Properties( 1, {Fill Color( "light gray" )} ) )}		)	));

```

**按计数排序的条形图**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bar chart, ordered by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline, Order By( :Airline, "Descending", Order Statistic( "N" ) ) ) ),	Elements( Bar( X, Legend( 4 ) ) ));

```

**排序堆叠条形图**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Cabinet Defects.jmp" );// bar chart, sorted stacked, filtered, custom legend colorsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Lot Number ), Overlay( :Type of Defect ) ),	Elements( Bar( X, Legend( 3 ), Bar Style( "Sorted stacked" ) ) ),	Local Data Filter(		Add Filter(			columns( :Lot Number, :Type of Defect ),			Where( :Lot Number <= 10.5 ),			Where(				:Type of Defect == {"Bruised veneer", "Checked veneer", "Chipped veneer",				"Defective sanding", "Loose veneer", "Sand throughs", "Scratched veneer",				"Split veneer"}			),			Display( :Type of Defect, N Items( 9 ) )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.55, 0.83, 0.78 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.75, 0.73, 0.85 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.98, 0.50, 0.45 ) )} ),				Properties( 3, {Fill Color( RGB Color( 0.50, 0.69, 0.83 ) )} ),				Properties( 4, {Fill Color( RGB Color( 0.99, 0.71, 0.38 ) )} ),				Properties( 5, {Fill Color( RGB Color( 0.70, 0.87, 0.41 ) )} ),				Properties( 6, {Fill Color( RGB Color( 0.99, 0.80, 0.90 ) )} ),				Properties( 7, {Fill Color( RGB Color( 0.74, 0.50, 0.74 ) )} )			)}		)	));

```

**数据驱动的直条着色**

```jsl

Open( "$SAMPLE_DATA/Dogs.jmp" );// data-driven bar coloring, diverging barsGraph Builder(	Transform Column(		"hilo",		Nominal,		Formula(			If(				:diff == Col Minimum( :diff ), "min",				:diff == Col Maximum( :diff ), "max",				"other"			)		)	),	Show Control Panel( 0 ),	Variables( X( :ID ), Y( :diff ), Color( :hilo ) ),	Elements( Bar( X, Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "diff", ScaleBox, {Add Ref Line( 0, "Solid", "Black", "", 1, 0.75 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				3,				Properties( 0, {Fill Color( RGB Color( 0.5, 0.5, 0.9 ) )} ),				Properties( 1, {Fill Color( RGB Color( 0.95, 0.6, 0.6 ) )} ),				Properties( 2, {Fill Color( RGB Color( 0.7, 0.7, 0.7 ) )} )			)}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [0, 1, -1]} )}		)	));

```

**极差条形图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// range bar chart between two variablesGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Range" ) ) ),);

```

**直条和箭头图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// arrow and bar chart Graph Builder(	Show Control Panel( 0 ),	Variables( X( :Sex ), Y( :HDL ), Y( :LDL, Position( 1 ) ) ),	Elements( Bar( X, Y( 1 ), Y( 2 ), Bar Style( "Arrow" ) ), Bar( X, Y( 1 ) ) ));

```

**突出显示前十个类别的堆叠填充直条**

```jsl

Open( "$SAMPLE_DATA/Billion Dollar Events.jmp" );// packed bar chart, top 10, custom axis format, subtitleGraph Builder(	Size( 813, 512 ),	Show Control Panel( 0 ),	Show Legend( 0 ),	Title Alignment( "Left" ),	Title Span( "Graph contents" ),	Subtitle Alignment( "Left" ),	Subtitle Span( "Graph contents" ),	Show Subtitle( 1 ),	Show Footer( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Cost ), Y( :Unique Event ) ),	Elements(		Bar( X, Y, Bar Style( "Packed" ), Packed Primaries( 10 ), Packed Labeling( 0.4091 ) )	),	SendToReport(		Dispatch( {}, "Cost", ScaleBox,			{Format(				"Custom",				Formula(					If( value == 0,						"0",						"$" || Format( value, "precision", Keep trailing zeroes( 0 ), 3 ) ||						"B"					)				),				17			), Min( 0 ), Max( 164.25 ), Inc( 20 ), Minor Ticks( 0 )}		),		Dispatch( {}, "graph title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "Billion-dollar disasters in the US, 1980-2017" ),			Set Font Style( "Plain" )}		),		Dispatch( {}, "graph 1 title", TextEditBox,			{Margin( {Left( 5 ), Top( 0 ), Right( 0 ), Bottom( 0 )} ),			Set Text( "CPI-adjusted estimated costs from NOAA, www.ncdc.noaa.gov/billions/" )			}		)	));

```

**采用李克特尺度的发散堆叠直条**

```jsl

Open( "$SAMPLE_DATA/Likert Survey.jmp" );// diverging stacked bars, likert scaleGraph Builder(	Transform Column( "neg sd", Formula( -:strongly disagree ) ),	Transform Column( "neg d", Formula( -:disagree ) ),	Transform Column( "neg n", Formula( -:neutral / 2 ) ),	Transform Column( "pos n", Formula( :neutral / 2 ) ),	Show Control Panel( 0 ),	Legend Position( "Bottom" ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables(		X( :neg n ),		X( :neg d, Position( 1 ) ),		X( :neg sd, Position( 1 ) ),		X( :pos n, Position( 1 ) ),		X( :agree, Position( 1 ) ),		X( :strongly agree, Position( 1 ) ),		Y( :question )	),	Elements(		Bar(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			Y,			Legend( 4 ),			Bar Style( "Stacked" )		)	),	SendToReport(		Dispatch( {}, "neg n", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "question", ScaleBox, {Min( 19.6 ), Max( -0.6 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Level Name( 0, "neutral" ),				Level Name( 1, "disagree" ),				Level Name( 2, "strongly disagree" ),				Level Name( 3, "neutral" ),				Properties( 0, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 1, {Fill Color( RGB Color( {1.0, 0.7, 0.7} ) )} ),				Properties( 2, {Fill Color( RGB Color( {1.0, 0.3, 0.3} ) )} ),				Properties( 3, {Fill Color( RGB Color( {0.9, 0.9, 0.9} ) )} ),				Properties( 4, {Fill Color( RGB Color( {0.8, 0.8, 1.0} ) )} ),				Properties( 5, {Fill Color( RGB Color( {0.5, 0.5, 1.0} ) )} )			)}		)	),	Dispatch( {}, "400", LegendBox, {Legend Position( {4, [2, 1, 0, -1, 3, 4]} )} ));

```

**针状图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// needle bar chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Age ), Y( :Cholesterol ) ),	Elements( Bar( X, Y, Bar Style( "Needle" ), Summary Statistic( "Max" ) ) ));

```

### 项消息

#### Bar Style

**语法:** obj &lt;&lt; Bar Style( "并排"|"堆叠"|"排序堆叠"|"弹道图"|"嵌套"|"范围"|"并排范围"|"区间"|"并排区间"|"双向区间"|"箭头"|"单个"|"股票"|"箱线图"|"针"|"浮动"|"矩形树图"|"堆叠填充" )

#### Error Interval

**语法:** obj &lt;&lt; Error Interval( "自动"|"无"|"极差"|"四分位数间距"|"标准误差"|"标准差"|"置信区间"|"绝对偏差中位数"|"定制区间"|"双向区间" )

#### Interval Style

**语法:** obj &lt;&lt; Interval Style( "误差条"|"带"|"哈希带"|"箭头" )

#### Label

**语法:** obj &lt;&lt; Label( "无标签"|"将值用作标签"|"将占合计的百分比用作标签"|"将行用作标签" )

#### Label Format

**语法:** obj &lt;&lt; Label Format

**JMP添加的版本:** 16

#### Overlap

**语法:** obj &lt;&lt; Overlap( "自动"|"无"|"一半"|"完全" )

**JMP添加的版本:** 16

#### Packed Coloring

**语法:** obj &lt;&lt; Packed Coloring( "直条颜色"|"变淡的直条颜色"|"灰色" )

**JMP添加的版本:** 14

#### Packed Labeling

**语法:** obj &lt;&lt; Packed Labeling( number )

**JMP添加的版本:** 14

#### Packed Ordering

**语法:** obj &lt;&lt; Packed Ordering( "按大小"|"按标签" )

**JMP添加的版本:** 14

#### Packed Placement

**语法:** obj &lt;&lt; Packed Placement( "单独堆叠"|"最小堆叠"|"第一个堆叠" )

**JMP添加的版本:** 14

#### Packed Primaries

**语法:** obj &lt;&lt; Packed Primaries( number )

**JMP添加的版本:** 14

#### Packed Primary Labels

**语法:** obj &lt;&lt; Packed Primary Labels( "轴上"|"直条内部" )

**JMP添加的版本:** 14

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Save Summary Formula

**语法:** obj &lt;&lt; Save Summary Formula

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

## Box Plot Element

### 关联的构造器

#### Box Plot Element

**语法:** Box Plot Element

**说明:** 显示带四分位数和离群值的变量分布的紧凑视图。

**叠加箱线图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// box plots, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Overlay( :Sex ) ),	Elements( Box Plot( X, Y, Legend( 2 ) ) ));

```

**水平离群值箱线图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// horizontal outlier box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Box Plot( X, Y, Legend( 4 ) ) ),	SendToReport( Dispatch( {}, "height", ScaleBox, {Min( 50 )} ) ));

```

**采用数据驱动颜色的纯色箱线图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// solid box plots, colored by summary of a different variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Flipper Length ) ),	Elements( Box Plot( X, Y, Legend( 2 ), Box Style( "Solid" ), Fences( 0 ) ) ));

```

### 项消息

#### 5 Number Summary

**语法:** obj &lt;&lt; 5 Number Summary( state=0|1 )

**JMP添加的版本:** 14

#### Box Placement

**语法:** obj &lt;&lt; Box Placement( "偏移"|"对齐" )

**JMP添加的版本:** 16

#### Box Style

**语法:** obj &lt;&lt; Box Style( "正常"|"纯色"|"细" )

#### Box Type

**语法:** obj &lt;&lt; Box Type( "分位数"|"离群值" )

#### Confidence Diamond

**语法:** obj &lt;&lt; Confidence Diamond( state=0|1 )

**JMP添加的版本:** 16

#### Fences

**语法:** obj &lt;&lt; Fences( state=0|1 )

**JMP添加的版本:** 16

#### Jitter

**语法:** obj &lt;&lt; Jitter( "无"|"自动"|"随机均匀"|"随机正态"|"密度随机"|"堆叠填充"|"网格"|"六边形网格"|"蜂群" )

#### Notched

**语法:** obj &lt;&lt; Notched( state=0|1 )

**JMP添加的版本:** 16

#### Outliers

**语法:** obj &lt;&lt; Outliers( state=0|1 )

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Shortest Half

**语法:** obj &lt;&lt; Shortest Half( state=0|1 )

**JMP添加的版本:** 16

#### Shortest Half Color

**语法:** obj &lt;&lt; Shortest Half Color( color )

**JMP添加的版本:** 16

#### Width Proportion

**语法:** obj &lt;&lt; Width Proportion( number=0 )

**说明:** 默认为“0”。

**JMP添加的版本:** 15

## Caption Element

### 关联的构造器

#### Caption Element

**语法:** Caption Element

**说明:** 显示数据的汇总统计量值。

**两个说明文字统计量，每因子**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption per factor, mean and count, custom number formatGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Graph per factor" ),			Number Format( "Best", 5 )		)	));

```

**图形级别的说明文字汇总统计量**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption annotation per graphGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group X( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Line Of Fit( X, Y, Legend( 4 ) ),		Caption Box( X, Y, Legend( 5 ), Summary Statistic( "N" ), X Position( "Left" ) )	));

```

**数据驱动的参考线**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption reference line, run chartGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :weight ) ),	Elements(		Caption Box(			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Location( "Axis Reference Line" ),			X Position( "Left" )		),		Line( Y, Legend( 6 ), Ordering( "Row Order" ) )	));

```

**轴表汇总统计量**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// caption axis tableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :sex ), Y( :height ) ),	Elements(		Bar( X, Y, Legend( 4 ) ),		Caption Box(			X,			Y,			Legend( 5 ),			Summary Statistic( "Mean" ),			Summary Statistic 2( "N" ),			Location( "Axis Table" )		)	));

```

### 项消息

#### Location

**语法:** obj &lt;&lt; Location( "图形"|"每因子图形"|"轴表"|"轴参考线" )

#### Number Format

**语法:** obj &lt;&lt; Number Format

**JMP添加的版本:** 16

#### Per Factor

**语法:** obj &lt;&lt; Per Factor( state=0|1 )

**JMP添加的版本:** 14

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "无"|"数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数"|"5 数汇总" )

#### Summary Statistic 2

**语法:** obj &lt;&lt; Summary Statistic 2( "无"|"数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数"|"5 数汇总" )

#### Summary Statistic 3

**语法:** obj &lt;&lt; Summary Statistic 3( "无"|"数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数"|"5 数汇总" )

#### Summary Statistic 4

**语法:** obj &lt;&lt; Summary Statistic 4( "无"|"数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数"|"5 数汇总" )

#### Summary Statistic 5

**语法:** obj &lt;&lt; Summary Statistic 5( "无"|"数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数"|"5 数汇总" )

#### X Position

**语法:** obj &lt;&lt; X Position( "左"|"中"|"右" )

#### Y Position

**语法:** obj &lt;&lt; Y Position( "顶部"|"中部"|"底部" )

## Contour Element

### 关联的构造器

#### Contour Element

**语法:** Contour Element

**说明:** 显示数据密度区域（或带“颜色”变量的值等高线）。当 X 为分类变量时生成小提琴图形。

**HDR，最高密度区域**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// HDR, highest denisty regions with mode lineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements( Contour( X, Y, Legend( 4 ), Smoothness( 0.113 ), Contour Type 1D( "HDR" ) ) ));

```

**二元核密度等高线**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// bivariate kernel density contourGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Distance ), Y( :Arrival Delay ), Wrap( :Airline ) ),	Elements( Contour( X, Y, Legend( 6 ), Number of Levels( 6 ) ) ));

```

**叠加细箱线图的小提琴图**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// violin plots overlaid with thin box plotsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :type of space ), Y( :Y ) ),	Elements(		Contour( X, Y, Legend( 5 ), Violin Scaling( "Weighted Area" ) ),		Box Plot( X, Y, Legend( 6 ), Outliers( 0 ), Box Style( "Thin" ), Fences( 0 ) )	));

```

**地理等高线**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// contour, geographic, background map, clipped to shapes, sequential colors, hidden axesGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ) ),	Elements(		Contour(			X,			Y,			Legend( 5 ),			Boundary( 0 ),			Number of Levels( 5 ),			Alpha( 0.04 ),			Smoothness( 0.02 )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Properties( 0, {gradient( {Color Theme( "White to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) ), Grid Line Order( 1 ),			Reference Line Order( 4 ), Reorder Segs( {1, 3} ),			DispatchSeg( Contour Seg( 1 ), {Clip Shape( Boundaries( "US States" ) )} )}		)	));

```

**带中位数线和均值菱形的小提琴图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and mean diamond markerGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar( X, Y, Legend( 4 ), Bar Style( "Float" ), Summary Statistic( "Median" ) ),		Points( X, Y, Legend( 5 ), Summary Statistic( "Mean" ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 5, Properties( 0, {Marker( "Diamond" )} ) )}		)	));

```

**带四分位数的小提琴图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// violin plots, overlaid median line and quartile intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ) ),	Elements(		Contour( X, Y, Legend( 3 ) ),		Bar(			X,			Y,			Legend( 4 ),			Bar Style( "Float" ),			Summary Statistic( "Median" ),			Error Interval( "Interquartile Range" )		)	));

```

**平滑等高线**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// contour plot, smooth contours, alpha shapes for non-convex hullGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Color( :Body Mass ) ),	Elements(		Contour(			X,			Y,			Legend( 7 ),			Number of Levels( 5 ),			Alpha( 0.1 ),			Smoothness( 0.065 )		)	));

```

**面板式等高线热图**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// paneled contour heatmap, trellisGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Ratio ),		Y( :Agitation Speed ),		Group X( :Hydrolyze ),		Group Y( :"Pre-Soak"n ),		Color( :Solids )	),	Elements( Contour( X, Y, Legend( 28 ), Smoothness( 0.01 ) ) ));

```

### 项消息

#### Adapt to Axis Scale

**语法:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**说明:** 关于对数和其他轴变换，它是对变换的坐标应用计算的。

#### Alpha

**语法:** obj &lt;&lt; Alpha( number )

**说明:** 控制边界的形状。值为 0 会得到点集的凸包。较大的值会删除有长边的三角。

**JMP添加的版本:** 15

#### Boundary

**语法:** obj &lt;&lt; Boundary( state=0|1 )

**说明:** 在定义的数据区域的边界处绘制一条线。该边界根据 Alpha 属性可能是非凸的。

**JMP添加的版本:** 15

#### Contour Placement

**语法:** obj &lt;&lt; Contour Placement( "偏移"|"对齐" )

**JMP添加的版本:** 16

#### Contour Type

**语法:** obj &lt;&lt; Contour Type( "小提琴图形"|"HDR" )

**JMP添加的版本:** 15

#### Contour Type 1D

**语法:** obj &lt;&lt; Contour Type 1D( "小提琴图形"|"HDR" )

**JMP添加的版本:** 15

#### Contour Type 2D

**语法:** obj &lt;&lt; Contour Type 2D( "非参数密度"|"袋状图"|"HDR" )

**JMP添加的版本:** 15

#### Fill

**语法:** obj &lt;&lt; Fill( state=0|1 )

**说明:** 使用渐变中的颜色填充等高线之间的区域。

**JMP添加的版本:** 15

#### Jitter

**语法:** obj &lt;&lt; Jitter( "无"|"自动"|"随机均匀"|"随机正态"|"密度随机"|"堆叠填充"|"网格"|"六边形网格"|"蜂群" )

#### Line

**语法:** obj &lt;&lt; Line( state=0|1 )

**说明:** 在每个等高线水平处绘制一条线，按渐变或按单独的线条颜色着色。

**JMP添加的版本:** 15

#### Number of Levels

**语法:** obj &lt;&lt; Number of Levels( number )

**说明:** 设置要绘制的填充等高线区域数。

#### Outliers

**语法:** obj &lt;&lt; Outliers( state=0|1 )

#### Smoothness

**语法:** obj &lt;&lt; Smoothness( number )

**说明:** 平滑底层数据和等高线。

**JMP添加的版本:** 14

#### Transform

**语法:** obj &lt;&lt; Transform( "无"|"标准化范围" )

**说明:** 可以选择在计算用于内插的三角测量之前变换点。

#### Violin Scaling

**语法:** obj &lt;&lt; Violin Scaling( "面积相等"|"宽度相等"|"加权面积" )

**JMP添加的版本:** 14

## Ellipse Element

### 关联的构造器

#### Ellipse Element

**语法:** Ellipse Element

**说明:** 显示二元正态密度椭圆。

**叠加密度椭圆**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Ellipse( X, Y, Legend( 5 ), Correlation( 1 ) ) ));

```

**带中心均值标记的密度椭圆**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// density ellipse, correlation, central meanGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Group Y( :sex ) ),	Elements(		Points( X, Y, Legend( 2 ) ),		Ellipse( X, Y, Legend( 5 ), Coverage( "95%" ), Mean Point( 1 ) )	));

```

**带相关性系数的密度椭圆**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Coverage( "50%" ), Correlation( 1 ), Mean Point( 1 ) )	));

```

**面板中的密度椭圆**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// density ellipse, correlation coefficient, panels, mean diamondGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species ),		Group Y( :Sex )	),	Elements(		Points( X, Y, Legend( 8 ) ),		Ellipse( X, Y, Legend( 10 ), Correlation( 1 ), Mean Point( 1 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 8, Properties( 0, {Marker( "Circle" ), Transparency( 0.5 )} ) ),			Legend Model(				10,				Properties( 1, {Marker( "Filled Diamond" ), Marker Size( 6 )} )			)}		)	));

```

### 项消息

#### Adapt to Axis Scale

**语法:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**说明:** 关于对数和其他轴变换，它是对变换的坐标应用计算的。

#### Correlation

**语法:** obj &lt;&lt; Correlation( state=0|1 )

**说明:** X 和 Y 变量的相关系数。

#### Coverage

**语法:** obj &lt;&lt; Coverage( "99%"|"95%"|"90%"|"50%" )

#### Mean Point

**语法:** obj &lt;&lt; Mean Point( state=0|1 )

**说明:** 显示椭圆的均值点。

## Formula Element

### 关联的构造器

#### Formula Element

**语法:** Formula Element

**说明:** 显示列公式定义的函数。

**参数方程**

```jsl

New Table( "bowtie",	New Column( "t", Set Values( [0, 10] ) ),	New Column( "x", Formula( Cos( :t ) ) ),	New Column( "y", Formula( Sine( :t * 2 ) ) ));// function plot, parametric equationsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :x ), Y( :y ) ),	Elements( Formula( X, Y, Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "x", ScaleBox, {Min( -1.1 ), Max( 1.1 )} ),		Dispatch( {}, "y", ScaleBox, {Min( -1.4 ), Max( 1.4 )} )	));

```

**模型比较**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// function plot, non-linear functions piecewise linear, piecewise quadraticLocal( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :linear ),		"Newton",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Local( {obj},	obj = Data Table( "Corn.jmp" ) << Nonlinear(		Y( :yield ),		X( :quad ),		"QuasiNewton SR1",		Finish	);	obj << Save Prediction Formula;	obj << Close Window;);Graph Builder(	Show Control Panel( 0 ),	Variables(		X( :nitrate ),		Y( :yield ),		Y( :Fitted linear, Position( 1 ) ),		Y( :Fitted quad, Position( 1 ) )	),	Elements( Points( X, Y( 1 ), Legend( 8 ) ), Formula( X, Y( 2 ), Y( 3 ), Legend( 9 ) ) ));

```

### 项消息

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

## Heatmap Element

### 关联的构造器

#### Heatmap Element

**语法:** Heatmap Element

**说明:** 使用颜色显示 X 和 Y 类别的计数。

**已添加标签的热图**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// labeled heatmap, treating continuous variables as categorical with transformGraph Builder(	Transform Column( "Ordinal Agitation Speed", Ordinal, Formula( :Agitation Speed ) ),	Transform Column( "Ordinal Ratio", Ordinal, Formula( :Ratio ) ),	Show Control Panel( 0 ),	Variables( X( :Ordinal Agitation Speed ), Y( :Ordinal Ratio ), Color( :Solids ) ),	Elements( Heatmap( X, Y, Legend( 29 ), Label( "Label by Value" ) ) ));

```

**带分类颜色的热图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// heat map, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ), Color( :Species ) ),	Elements( Heatmap( X, Y, Legend( 4 ) ) ));

```

**带定制梯度的分类热图**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// heat map, custom gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Day of Week ), Y( :Month ), Color( :Arrival Delay ) ),	Elements( Heatmap( X, Y, Legend( 17 ) ) ),	Local Data Filter(		Add Filter( columns( :Distance ), Where( :Distance >= 500 & :Distance <= 1500 ) )	),	SendToReport(		Dispatch( {}, "Month", ScaleBox, {Reversed Scale} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				17,				Properties(					0,					{gradient(						{Color Theme(							{"Blue to Gray to Red Copy", {"Continuous", "Categorical",							"Diverging"}, {{42, 63, 255}, {166, 170, 203}, {192, 192, 192},							{201, 165, 165}, {252, 11, 11}, Missing( "Black" )}, {0, 0.33,							0.5, 0.67, 1}, {"Full Color", "Tritanopia"}}						), Scale Values( [. 0 .] )}					)}				)			)}		)	));

```

**数据驱动的背景颜色**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// heat map as background colorGraph Builder(	Transform Column(		"Mean[Total Acres Planted][State]",		Formula( Col Mean( :Total Acres Planted, :State ) )	),	Transform Column(		"delta",		Formula(			(Col At( :Total Acres Planted, -1, :State )			-Col At( :Total Acres Planted, 1, :State )) /			Col Mean( :Total Acres Planted, :State )		)	),	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Total Acres Planted ),		Wrap(			:State,			Order By( :Total Acres Planted, "Descending", Order Statistic( "Mean" ) )		),		Color( :delta )	),	Elements(		Heatmap( Legend( 16 ) ),		Points( X, Y, Color( 0 ), Legend( 14 ) ),		Smoother( X, Y, Color( 0 ), Legend( 15 ) )	),	Local Data Filter(		Add Filter(			columns( :"Mean[Total Acres Planted][State]"n ),			Where( :"Mean[Total Acres Planted][State]"n >= 3245000 )		)	),	SendToReport(		Dispatch( {}, "Total Acres Planted", ScaleBox,			{Format( "Engineering SI", 13 ), Minor Ticks( 0 )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				16,				Properties(					0,					{gradient(						{Scale Values( [-0.3 0 0.3] ), Label Format( "Percent", 12, 0 )}					)}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {16, [2], 14, [0], 15, [1]} )} )	));

```

**晶片图**

```jsl

Open( "$SAMPLE_DATA/Wafer Stacked.jmp" );// wafer map, heat map, trellis, wrap arrangementGraph Builder(	Show Control Panel( 0 ),	Variables( X( :X_Die ), Y( :Y_Die ), Wrap( :Wafer ), Color( :Defects ) ),	Elements( Heatmap( X, Y, Legend( 8 ) ) ),	SendToReport(		Dispatch( {}, "X_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "Y_Die", ScaleBox, {Minor Ticks( 9 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {gradient( {Color Theme( "White to Orange" )} )} )			)}		)	));

```

**计数的六角形热图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// hexagonal heatmap, color by count, sequential color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Depth ), Y( :Culmen Length ) ),	Elements(		Heatmap( X, Y, Legend( 4 ), Bin Shape( "Hexagonal" ), Hex Bin Radius( 24.61 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {gradient( {Color Theme( "White to Purple" )} )} )			)}		)	));

```

### 项消息

#### Bin Shape

**语法:** obj &lt;&lt; Bin Shape( "矩形"|"六角形" )

**JMP添加的版本:** 16

#### Cell Outline

**语法:** obj &lt;&lt; Cell Outline( state=0|1 )

**说明:** 按照字体大小定义最大增量。

**JMP添加的版本:** 16

#### Hex Bin Radius

**语法:** obj &lt;&lt; Hex Bin Radius( number )

**JMP添加的版本:** 16

#### Label

**语法:** obj &lt;&lt; Label( "无标签"|"将值用作标签"|"将占合计的百分比用作标签"|"将行用作标签" )

**JMP添加的版本:** 14

#### Label Format

**语法:** obj &lt;&lt; Label Format

**JMP添加的版本:** 16

#### Max Label Size

**语法:** obj &lt;&lt; Max Label Size( number )

## Histogram Element

### 关联的构造器

#### Histogram Element

**语法:** Histogram Element

**说明:** 使用分箱显示变量分布。

**叠加直方图，百分比标签**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// overlaid histograms, percent labelsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Overlay( :sex ) ),	Elements( Histogram( X, Legend( 8 ), Smoothness( -0.0833 ), Percents( 1 ) ) ));

```

**带计数轴的直方图**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// histogram, countGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Distance ), Wrap( :Airline, Show Title( 0 ) ) ),	Elements( Histogram( X, Legend( 9 ) ) ),	SendToReport(		Dispatch( {}, "Distance", ScaleBox,			{Min( -6 ), Max( 2900 ), Inc( 1000 ), Minor Ticks( 1 )}		),		Dispatch( {}, "", ScaleBox, {Format( "Engineering SI", 12 ), Inc( 2000 )} ),		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Flight Distance by Airline" )}		)	));

```

**平滑核密度面积图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// kernel density estimate KDE area chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements(		Histogram(			X,			Y,			Legend( 8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.08 )		)	));

```

**按因子水平显示的直方图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// histograms by levelGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :sex ) ),	Elements( Histogram( X, Y, Legend( 8 ) ) ));

```

**脊线图**

```jsl

Open( "$SAMPLE_DATA/NYC 311 Records.jmp" );// ridgeline plot, overlapping kernel density estimate areas, KDEGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Time ), Y( :Day of Week ) ),	Elements(		Histogram(			X,			Y,			Legend( 3 ),			Response Scale( "Percent" ),			Overlap( 4.8 ),			Histogram Style( "Kernel Density" ),			Smoothness( -0.1 )		)	),	SendToReport(		Dispatch( {}, "Time", ScaleBox, {Min( -2316 ), Max( 88403 ), Minor Ticks( 3 )} ),		Dispatch( {}, "Day of Week", ScaleBox, {Max( 4.45 )} )	));

```

### 项消息

#### Confid Percent

**语法:** obj &lt;&lt; Confid Percent( number=. )

**说明:** 均值的置信区间，覆盖率以百分比形式给出。 默认为“.”。

**JMP添加的版本:** 14

#### Counts

**语法:** obj &lt;&lt; Counts( state=0|1 )

**JMP添加的版本:** 15

#### Histogram Style

**语法:** obj &lt;&lt; Histogram Style( "条形图"|"多边形"|"核密度"|"阴影图" )

**JMP添加的版本:** 15

#### Horizontal

**语法:** obj &lt;&lt; Horizontal( state=0|1 )

#### Means and Std Devs

**语法:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**JMP添加的版本:** 14

#### Overlap

**语法:** obj &lt;&lt; Overlap( number )

**JMP添加的版本:** 15

#### Percents

**语法:** obj &lt;&lt; Percents( state=0|1 )

**JMP添加的版本:** 15

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Response Scale

**语法:** obj &lt;&lt; Response Scale( "计数"|"百分比"|"填充" )

**JMP添加的版本:** 15

#### Smoothness

**语法:** obj &lt;&lt; Smoothness( number )

**说明:** 带宽控制密度曲线中的平滑量。减小带宽使曲线更不平滑，具有更多尖峰。增大带宽将平滑曲线但会模糊某些细节。

**JMP添加的版本:** 15

#### Vertical

**语法:** obj &lt;&lt; Vertical( state=0|1 )

**说明:** 默认开启。

#### t Test for Mean At

**语法:** obj &lt;&lt; t Test for Mean At( number=. )

**说明:** 检验均值为某个指定值。 默认为“.”。

**JMP添加的版本:** 14

## Line Element

### 关联的构造器

#### Line Element

**语法:** Line Element

**说明:** 显示按类别汇总的响应。

**事件跨度**

```jsl

Open( "$SAMPLE_DATA/Nic Adverse Events.jmp" );// event spans, start and stop times, categorical colorGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Study Day of Start of Adverse Event ),		X( :Study Day of End of Adverse Event, Position( 1 ) ),		Y( :Unique Subject Identifier ),		Color( :"Severity/Intensity"n )	),	Elements( Line( X( 1 ), X( 2 ), Y, Legend( 4 ), Ordering( "Within Row" ) ) ),	Local Data Filter(		Add Filter(			columns( :"Dictionary-Derived Term"n, :Action Taken with Study Treatment ),			Where( :"Dictionary-Derived Term"n == "Hypertension" ),			Where( :Action Taken with Study Treatment == "DRUG WITHDRAWN" )		)	),	SendToReport(		Dispatch( {}, "Unique Subject Identifier", ScaleBox,			{Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				4,				Properties( 0, {Line Color( RGB Color( 0.31, 0.61, 1 ) ), Line Width( 4 )} ),				Properties(					1,					{Line Color( RGB Color( 0.69, 0.65, 0.01 ) ), Line Width( 4 )}				),				Properties(					2,					{Line Color( RGB Color( 0.79, 0.09, 0.16 ) ), Line Width( 4 )}				)			)}		)	));

```

**凹凸图，连接的排名**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// Bump chart, line chart of ranking, smooth connections, transform columnGraph Builder(	Transform Column(		"Rank",		Formula(			(Col Number( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )			-Col Rank( :SAT Verbal, :Year, :"@Exclude"n, :"@Filter"n )) + 1		)	),	Show Control Panel( 0 ),	Variables( X( :Year ), Y( :Rank ), Overlay( :State ) ),	Elements( Line( X, Y, Legend( 4 ), Connection( "Curve" ) ) ),	Local Data Filter(		Add Filter(			columns( :Region ),			Where(				:Region == {"Midwest", "Mountain", "New England", "Northeast", "Pacific",				"Plains", "South", "Southwest"}			)		)	),	SendToReport( Dispatch( {}, "Rank", ScaleBox, {Reversed Scale} ) ));

```

**尾部移动平均值线图**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// trailing moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Color( 0 ),			Legend( 12 ),			Method( "Moving Average" ),			Local Region( "Trailing" ),			Local Width( 6 ),			Trim( 0.6435 )		)	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**已添加标签的线条**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// overlaid line chart, labels in graphGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Day of Week ), Y( :Arrival Delay ), Overlay( :Airline ) ),	Elements( Line( X, Y, Legend( 11 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				11,				Type Properties( "H Line", {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 0, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 1, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 2, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 3, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 4, {Line Label Properties( {Name Label( 1 )} )} ),				Properties( 5, {Line Label Properties( {Name Label( 1 )} )} )			)}		)	));

```

**带误差带的线图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// line chart, error bandGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :height ) ),	Elements(		Line(			X,			Y,			Legend( 4 ),			Error Interval( "Confidence Interval" ),			Interval Style( "Band" )		)	));

```

**意面图**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Spaghetti plot, line chart, smooth connections, mean line, transform columnGraph Builder(	Transform Column( "Year", Nominal, Formula( Year( :date ) ) ),	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ), Overlay( :Year ) ),	Elements(		Line( X, Y, Legend( 8 ), Connection( "Curve" ) ),		Line( X, Y, Overlay( 0 ), Legend( 9 ), Connection( "Curve" ), Smoothness( 0.6 ) )	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				8,				Properties( 0, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 1, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 2, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 3, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 4, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 5, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 6, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 7, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 8, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 9, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 10, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 11, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 12, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 13, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 14, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 15, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 16, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 17, {Line Color( "gray" ), Transparency( 0.5 )} ),				Properties( 18, {Line Color( "gray" ), Transparency( 0.5 )} )			), Legend Model( 9, Properties( 0, {Line Color( "black" ), Line Width( 4 )} ) )}		)	));

```

**移动平均值线图**

```jsl

Open( "$SAMPLE_DATA/Quality Control/Coating.jmp" );// moving average line chartGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Pin ), Y( :Weight ), Color( :Product ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother( X, Y, Color( 0 ), Legend( 12 ), Method( "Moving Average" ) )	),	SendToReport(		Dispatch( {}, "Pin", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "Weight", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				12,				Properties( 0, {Line Color( RGB Color( 0.25, 0.25, 0.25 ) )} )			)}		)	));

```

**箭头线，每行一条**

```jsl

Open( "$SAMPLE_DATA/Cholesterol.jmp" );// arrow lines, one per rowGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :April AM ),		X( :April PM, Position( 1 ) ),		Y( :June AM ),		Y( :June PM, Position( 1 ) ),		Overlay( :treatment )	),	Elements(		Line(			X( 1 ),			X( 2 ),			Y( 1 ),			Y( 2 ),			Legend( 8 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	));

```

**运行图，按行顺序**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Run chart, line chart by row, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Y( :Ozone Concentration ) ),	Elements( Line( Y, Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Min( 0 ), Max( 220 ), Label Row( {Show Major Grid( 1 ), Show Minor Grid( 1 )} )}		),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**连接的散点图**

```jsl

New Table( "prey and predator",	Add Rows( 48 ),	New Column( "Month", Formula( Row() ) ),	New Column( "Rabbits", Formula( 10 * Cos( :Month * 0.35 ) + Random Normal( 50, 1.5 ) ) ),	New Column( "Foxes", Formula( 8 * Cos( :Month * 0.35 + 1 ) + Random Normal( 30, 1 ) ) ),);// connected scatter plot, smooth line connections, row orderGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Foxes ), Y( :Rabbits ), Color( :Month ) ),	Elements(		Line( X, Y, Legend( 5 ), Ordering( "Row Order" ), Connection( "Curve" ) ),		Points( X, Y, Color( 0 ), Legend( 6 ) )	));

```

**连接的箭头**

```jsl

Open( "$SAMPLE_DATA/SAT.jmp" );// arrow chart, multiple x and y variables, overlaidGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"1992 Verbal"n ),		X( :"1999 Verbal"n, Position( 1 ) ),		X( :"2004 Verbal"n, Position( 1 ) ),		Y( :"1992 Math"n ),		Y( :"1999 Math"n, Position( 1 ) ),		Y( :"2004 Math"n, Position( 1 ) ),		Overlay( :State )	),	Elements(		Line(			X( 1 ),			X( 2 ),			X( 3 ),			Y( 1 ),			Y( 2 ),			Y( 3 ),			Legend( 7 ),			Ordering( "Within Row" ),			Connection( "Arrow" )		)	),	Local Data Filter(		Add Filter( columns( :"% Taking (2004)"n ), Where( :"% Taking (2004)"n >= 0.57788 ) )	),	SendToReport(		Dispatch( {}, "1992 Verbal & 2 more", TextEditBox, {Set Text( "Verbal" )} ),		Dispatch( {}, "1992 Math & 2 more", TextEditBox, {Set Text( "Math" )} )	));

```

### 项消息

#### Connection

**语法:** obj &lt;&lt; Connection( "线条"|"箭头"|"曲线"|"步进"|"居中步进"|"水平"|"垂直" )

#### Error Interval

**语法:** obj &lt;&lt; Error Interval( "自动"|"无"|"极差"|"四分位数间距"|"标准误差"|"标准差"|"置信区间"|"绝对偏差中位数"|"定制区间"|"双向区间" )

#### Fill

**语法:** obj &lt;&lt; Fill( "无"|"向下填充"|"之间填充" )

**JMP添加的版本:** 15

#### Interval Style

**语法:** obj &lt;&lt; Interval Style( "误差条"|"带"|"哈希带"|"箭头" )

#### Missing Factors

**语法:** obj &lt;&lt; Missing Factors( "跳过"|"视为缺失"|"视为零" )

**说明:** 如何显示跨越缺失因子水平的连接

**JMP添加的版本:** 15

#### Missing Values

**语法:** obj &lt;&lt; Missing Values( "连接穿过"|"连接变淡"|"用虚线连接"|"无连接" )

**说明:** 如何显示跨越缺失值的连接。

#### Ordering

**语法:** obj &lt;&lt; Ordering( "自动"|"行顺序"|"汇总"|"行内" )

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Row order

**语法:** obj &lt;&lt; Row order( state=0|1 )

#### Save Summary Formula

**语法:** obj &lt;&lt; Save Summary Formula

#### Smoothness

**语法:** obj &lt;&lt; Smoothness( number )

#### Stack

**语法:** obj &lt;&lt; Stack( state=0|1 )

**JMP添加的版本:** 15

#### Stack Negative

**语法:** obj &lt;&lt; Stack Negative( "叠加"|"分隔负值"|"视为零" )

**说明:** 控制堆叠时如何处理负数据值。

**JMP添加的版本:** 17

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

## Line of Fit Element

### 关联的构造器

#### Line of Fit Element

**语法:** Line of Fit Element

**说明:** 为连续型 X 和 Y 显示带置信区间的线性回归。为分类 X 拟合均值。

**二次拟合**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// linear regression, overlaid curves, quadraticGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Culmen Length ), Y( :Flipper Length ), Overlay( :Species ) ),	Elements(		Points( X, Y, Legend( 9 ) ),		Line Of Fit( X, Y, Legend( 10 ), Degree( "Quadratic" ) )	));

```

**叠加线性回归**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// linear regression, overlaid with confidence intervalsGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Overlay( :sex ) ),	Elements( Points( X, Y, Legend( 2 ) ), Line Of Fit( X, Y, Legend( 4 ) ) ));

```

**方差分析拟合，单因子，均值比较**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// ANOVA fit, oneway, means comparison, confidence interval, F test p-valueGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :weight ) ),	Elements(		Points( X, Y, Legend( 1 ) ),		Line Of Fit( X, Y, Legend( 2 ), Unequal Variances( 1 ), F Test( 1 ) )	));

```

**时间序列回归**

```jsl

Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );// time series regression, periodicGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Date ), Y( :Sales ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Line Of Fit( X, Y, Legend( 5 ), Fit( "Time Series" ), Seasonal Period( 12 ) )	));

```

### 项消息

#### Adapt to Axis Scale

**语法:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**说明:** 关于对数和其他轴变换，它是对变换的坐标应用计算的。

#### Confidence of Fit

**语法:** obj &lt;&lt; Confidence of Fit( state=0|1 )

#### Confidence of Prediction

**语法:** obj &lt;&lt; Confidence of Prediction( state=0|1 )

#### Constrain Parameters

**语法:** obj &lt;&lt; Constrain Parameters( state=0|1 )

**说明:** 约束 ETS 参数。

**JMP添加的版本:** 17

#### Degree

**语法:** obj &lt;&lt; Degree( "线性"|"二次"|"三次" )

#### Equation

**语法:** obj &lt;&lt; Equation( state=0|1 )

**说明:** 拟合的方程式。

#### F Test

**语法:** obj &lt;&lt; F Test( state=0|1 )

**说明:** 整体模型检验的显著性水平。

**JMP添加的版本:** 14

#### Fit

**语法:** obj &lt;&lt; Fit( "多项式"|"稳健 Cauchy"|"时间序列" )

**JMP添加的版本:** 15

#### Forecast Model

**语法:** obj &lt;&lt; Forecast Model( state=0|1 )

**说明:** 显示用于预测的模型，带参数估计值。

**JMP添加的版本:** 15

#### Forecast Periods

**语法:** obj &lt;&lt; Forecast Periods( number )

**说明:** 预测前面的期间数。

**JMP添加的版本:** 15

#### Means and Std Devs

**语法:** obj &lt;&lt; Means and Std Devs( state=0|1 )

**说明:** 显示均值线附近的每个组的均值与标准差。

**JMP添加的版本:** 14

#### Prediction

**语法:** obj &lt;&lt; Prediction( state=0|1 )

**说明:** 单个预测值的置信区域

#### RMSE

**语法:** obj &lt;&lt; RMSE( state=0|1 )

**说明:** 均方根误差，以响应单位对误差的一种测度。

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Root Mean Square Error

**语法:** obj &lt;&lt; Root Mean Square Error( state=0|1 )

#### R²

**语法:** obj &lt;&lt; R²( state=0|1 )

**说明:** 决定系数，拟合预测数据良好程度的一种测度。

#### Save Formula

**语法:** obj &lt;&lt; Save Formula

#### Seasonal Period

**语法:** obj &lt;&lt; Seasonal Period( number )

**说明:** 季节中的期间数。例如，对于每月数据，依照一年内的季节有 12 个期间。

**JMP添加的版本:** 15

#### Unequal Variances

**语法:** obj &lt;&lt; Unequal Variances( state=0|1 )

**说明:** 是否基于不同组具有不同方差的假定来计算检验和置信限。

## Mosaic Element

### 关联的构造器

#### Mosaic Element

**语法:** Mosaic Element

**说明:** 使用大小显示 X 和 Y 类别的计数。

**水平马赛克图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// horizontal mosaic, axis label line wrappingGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Clutch Completion ), Y( :Species ) ),	Elements( Mosaic( X, Y, Legend( 5 ), Response Axis( "X" ) ) ));

```

**马赛克图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// mosaic, marimekkoGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ), Y( :sex ) ),	Elements( Mosaic( X, Y, Legend( 4 ) ) ));

```

### 项消息

#### Cell Labeling

**语法:** obj &lt;&lt; Cell Labeling( "无标签"|"将计数用作标签"|"将百分比用作标签"|"将值用作标签"|"将行用作标签" )

**JMP添加的版本:** 14

#### Chi-square Test

**语法:** obj &lt;&lt; Chi-square Test( state=0|1 )

**说明:** 各组的响应率相同的卡方检验，或两个响应独立的卡方检验

**JMP添加的版本:** 14

#### Confid Percent

**语法:** obj &lt;&lt; Confid Percent( number=. )

**说明:** 高水平中的比例的置信区间覆盖率，以百分比表示。 默认为“.”。

**JMP添加的版本:** 14

#### Horizontal

**语法:** obj &lt;&lt; Horizontal( state=0|1 )

#### Label Format

**语法:** obj &lt;&lt; Label Format

**JMP添加的版本:** 16

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Test Proportion At

**语法:** obj &lt;&lt; Test Proportion At( number=. )

**说明:** 检验高水平中的比例为某个指定值。 默认为“.”。

**JMP添加的版本:** 14

#### Vertical

**语法:** obj &lt;&lt; Vertical( state=0|1 )

**说明:** 默认开启。

## Parallel Element

### 关联的构造器

#### Parallel Element

**语法:** Parallel Element

**说明:** 沿平行轴显示每行多个变量，每行对应一条连接线。

**Sankey 平行集**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// parallel sets, sankey, categorical parallel coordinatesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender?, Combine( "Parallel Independent" ) ),		X(			:"What is your favorite color? (select one)"n,			Position( 1 ),			Combine( "Parallel Independent" )		),		X( :What is your favorite color?, Position( 1 ), Combine( "Parallel Independent" ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), Legend( 15 ) ) ),	SendToReport(		Dispatch( {}, "What is your gender?", ScaleBox,			{Label Row(				{Tick Mark(					Label( "What is your favorite color?" ),					Label( "Specific favorite color" )				), Tick Mark(					Label( "What is your favorite color? (select one)" ),					Label( "General favorite color" )				), Tick Mark( Label( "What is your gender?" ), Label( "Gender" ) )}			)}		)	));

```

**带对齐尺度的平行坐标**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - aligned scaleGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :"Trig-3yrs"n, Combine( "Parallel Merged" ) ),		X( :"Chol-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"HDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) ),		X( :"LDL-3yrs"n, Position( 1 ), Combine( "Parallel Merged" ) )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 8 ) ) ));

```

**平行坐标图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Elements(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**平行点图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - dotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) ),		Color( :Sex )	),	Points(		Parallel(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 10 ),			X( 11 ),			Smoothness( 0.5 )		)	));

```

**平行箱线图**

```jsl

Open( "$SAMPLE_DATA/Lipid Data.jmp" );// parallel coordinates - box plotsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Height ),		X( :Skinfold, Position( 1 ) ),		X( :Weight, Position( 1 ) ),		X( :"% Ideal Body Wt."n, Position( 1 ) ),		X( :"% Ideal Weight-3yr"n, Position( 1 ) ),		X( :"Weight-3yr"n, Position( 1 ) ),		X( :Cholesterol, Position( 1 ) ),		X( :Triglycerides, Position( 1 ) ),		X( :HDL, Position( 1 ) ),		X( :LDL, Position( 1 ) ),		X( :Cholesterol Loss, Position( 1 ) )	),	Elements(		Box Plot(			X( 1 ),			X( 2 ),			X( 3 ),			X( 4 ),			X( 5 ),			X( 6 ),			X( 7 ),			X( 8 ),			X( 9 ),			X( 11 )		)	));

```

**平行集**

```jsl

Open( "$SAMPLE_DATA/Titanic Passengers.jmp" );// parallel setsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Survived ),		X( :Passenger Class, Position( 1 ) ),		X( :Sex, Position( 1 ) ),		X( :Age, Position( 1 ) ),		Color( :Survived )	),	Elements( Parallel( X( 1 ), X( 2 ), X( 3 ), X( 4 ), Legend( 5 ) ) ),	SendToReport(		Dispatch( {}, "Graph Builder", FrameBox,			{DispatchSeg( ParallelAxisSeg( 1 ), Reversed( Passenger Class, Sex ) )}		)	));

```

### 项消息

#### Axes Labels

**语法:** obj &lt;&lt; Axes Labels( state=0|1 )

#### Combine Sets

**语法:** obj &lt;&lt; Combine Sets( state=0|1 )

#### Smoothness

**语法:** obj &lt;&lt; Smoothness( number )

**JMP添加的版本:** 16

## Pie Element

### 关联的构造器

#### Pie Element

**语法:** Pie Element

**说明:** 显示整体的各个部分。

**按计数排序的环形图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// donut chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ), Pie Style( "Ring" ) ) ));

```

**按计数排序的饼图**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// pie chart by countGraph Builder(	Show Control Panel( 0 ),	Variables( X( :age ) ),	Elements( Pie( X, Legend( 6 ) ) ));

```

**饼图面板**

```jsl

Open( "$SAMPLE_DATA/Smartphone OS.jmp" );// pie panelGraph Builder(	Transform Column( "Market Share freq", Formula( Round( :Market Share * 1000 ) ) ),	Show Control Panel( 0 ),	Show Footer( 0 ),	Variables( X( :Operating System ), Wrap( :Year ), Frequency( :Market Share freq ) ),	Elements( Pie( X, Legend( 6 ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "SmartPhone OS Market Share" )}		)	));

```

### 项消息

#### Label

**语法:** obj &lt;&lt; Label( "无标签"|"将值用作标签"|"将占合计的百分比用作标签"|"将行用作标签" )

#### Label Format

**语法:** obj &lt;&lt; Label Format

**JMP添加的版本:** 16

#### Pie Style

**语法:** obj &lt;&lt; Pie Style( "饼式"|"环式"|"鸡冠花式" )

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

## Points Element

### 关联的构造器

#### Points Element

**语法:** Points Element

**说明:** 显示数据值的散点图。

**中心化并排点图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**使用大小和颜色的散点图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// bubble plotGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Depth ),		Y( :Culmen Length ),		Group X( :Species, Show Title( 0 ) ),		Color( :Sex ),		Size( :Body Mass )	),	Elements( Points( X, Y, Legend( 20 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				20,				Properties( 1, {Marker( "Circle" ), Transparency( 0.5 )}, ),				Properties( 2, {Marker( "FilledCircle" ), Transparency( 0.5 )} )			)}		)	));

```

**六角形对侧点图**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// dot plot, hexagonal jitter from opposite side (ordinal), custom axis label formatGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Y ), Y( :type of space ) ),	Elements(		Points(			X,			Y,			Legend( 9 ),			Jitter( "Hex Grid" ),			Jitter Side( "Ordinal" ),			Jitter Smooth( 1 )		)	),	Local Data Filter(		Add Filter(			columns( :type of space ),			Where( :type of space == {"exterior", "interior"} )		)	),	SendToReport(		Dispatch( {}, "Y", ScaleBox,			{Format( "Custom", Formula( Char( value ) || "°" ), 12, 0 )}		),		Dispatch( {}, "type of space", ScaleBox, {Min( 0 ), Max( 1 )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 9, Properties( 0, {Line Color( "Gray" ), Marker Size( 6 )} ) )}		),		Dispatch( {}, "Y", TextEditBox, {Set Text( "Temperature (Celcius))" )} )	));

```

**六角形网格点图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center hexagonal grid dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter( "Hex Grid" ), Jitter Smooth( 1 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**变异性图**

```jsl

Open( "$SAMPLE_DATA/Variability Data/2 Factors Nested.jmp" );// variability chart, mean and range interval, nested axisGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Operator ), X( :Part, Position( 1 ) ), Y( :Y ) ),	Elements(		Points(			X( 1 ),			X( 2 ),			Y,			Legend( 3 ),			Summary Statistic( "Mean" ),			Error Interval( "Range" )		)	),	SendToReport(		Dispatch( {}, "Operator", ScaleBox, {Label Row( 2, Show Major Grid( 1 ) )} )	));

```

**圆堆积随机散布**

```jsl

Open( "$SAMPLE_DATA/Design Experiment/Peanut Data.jmp" );// categorical 2D jitter, circle packing, color by responseGraph Builder(	Show Control Panel( 0 ),	Variables( X( :"Pre-Soak"n ), Y( :Hydrolyze ), Color( :Solids ) ),	Elements( Points( X, Y, Legend( 4 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Properties( 1, {Marker Size( 10 )} ) )}		)	));

```

**密度点图**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// density dot plot, beeswarmGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Privacy ), Y( :Female ) ),	Elements(		Points(			X,			Y,			Legend( 3 ),			Jitter( "Hex Grid" ),			Jitter Side( "Positive" ),			Jitter Smooth( 1 )		)	),	SendToReport(		Dispatch( {}, "Female", ScaleBox,			{Min( 0 ), Max( 1.99 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model( 3, Properties( 0, {Marker( "FilledCircle" )} ) )}		)	));

```

**平滑中心化并排点图**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// center dot plots, smoothed jitter placement, colored by categorical variableGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Species ), Y( :Body Mass ), Color( :Sex ) ),	Elements( Points( X, Y, Legend( 10 ), Jitter Smooth( 0.5 ) ) ),	SendToReport(		Dispatch( {}, "Species", ScaleBox, {Label Row( Show Major Grid( 1 ) )} ),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				10,				Properties( 0, {Marker Size( 5 )} ),				Properties( 1, {Marker Size( 5 )} )			)}		)	));

```

**平滑点图**

```jsl

Open( "$SAMPLE_DATA/Online Consumer Data.jmp" );// smoothed dot plot, color by ordinalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Privacy ), Y( :Female ), Color( :Internet Use ) ),	Elements( Points( X, Y, Legend( 5 ), Jitter Smooth( 0.8 ) ) ),	SendToReport(		Dispatch( {}, "Privacy", ScaleBox,			{Min( -2 ), Max( 2 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "400", ScaleBox,			{Legend Model(				5,				Type Properties( 0, "Marker", {Marker Size( 5 )} ),				Properties(					0,					{Line Color( RGB Color( 0.86, 0.52, 0.35 ) ), Marker Size( 5 )}				),				Properties(					1,					{Line Color( RGB Color( 0.95, 0.79, 0.45 ) ), Marker Size( 5 )}				),				Properties(					2,					{Line Color( RGB Color( 0.56, 0.02, 0.23 ) ), Marker Size( 5 )}				),				Properties(					3,					{Line Color( RGB Color( 0.88, 0.9, 0.74 ) ), Marker Size( 5 )}				)			)}		),		Dispatch( {}, "400", LegendBox, {Legend Position( {5, [1, 2, 0, 3]} )} )	));

```

**散点图矩阵**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// scatter plot matrix with main diagonal histogramsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Culmen Length ),		X( :Culmen Depth ),		X( :Flipper Length ),		X( :Body Mass ),		Y( :Culmen Length ),		Y( :Culmen Depth ),		Y( :Flipper Length ),		Y( :Body Mass ),		Overlay( :Species )	),	Elements( Position( 1, 1 ), Histogram( X, Y, Legend( 87 ) ) ),	Elements(		Position( 1, 2 ),		Points( X, Y, Legend( 57 ) ),		Smoother( X, Y, Legend( 58 ) )	),	Elements(		Position( 1, 3 ),		Points( X, Y, Legend( 59 ) ),		Smoother( X, Y, Legend( 60 ) )	),	Elements(		Position( 1, 4 ),		Points( X, Y, Legend( 61 ) ),		Smoother( X, Y, Legend( 62 ) )	),	Elements(		Position( 2, 1 ),		Points( X, Y, Legend( 63 ) ),		Smoother( X, Y, Legend( 64 ) )	),	Elements( Position( 2, 2 ), Histogram( X, Y, Legend( 88 ) ) ),	Elements(		Position( 2, 3 ),		Points( X, Y, Legend( 67 ) ),		Smoother( X, Y, Legend( 68 ) )	),	Elements(		Position( 2, 4 ),		Points( X, Y, Legend( 69 ) ),		Smoother( X, Y, Legend( 70 ) )	),	Elements(		Position( 3, 1 ),		Points( X, Y, Legend( 71 ) ),		Smoother( X, Y, Legend( 72 ) )	),	Elements(		Position( 3, 2 ),		Points( X, Y, Legend( 73 ) ),		Smoother( X, Y, Legend( 74 ) )	),	Elements( Position( 3, 3 ), Histogram( X, Y, Legend( 89 ) ) ),	Elements(		Position( 3, 4 ),		Points( X, Y, Legend( 77 ) ),		Smoother( X, Y, Legend( 78 ) )	),	Elements(		Position( 4, 1 ),		Points( X, Y, Legend( 79 ) ),		Smoother( X, Y, Legend( 80 ) )	),	Elements(		Position( 4, 2 ),		Points( X, Y, Legend( 81 ) ),		Smoother( X, Y, Legend( 82 ) )	),	Elements(		Position( 4, 3 ),		Points( X, Y, Legend( 83 ) ),		Smoother( X, Y, Legend( 84 ) )	),	Elements( Position( 4, 4 ), Histogram( X, Y, Legend( 90 ) ) ));

```

**纬度和经度**

```jsl

Open( "$SAMPLE_DATA/Cities.jmp" );// geographic scatter plot, background map, sized dotsGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( X( :Longitude ), Y( :Latitude ), Color( :PM10 ), Size( :POP ) ),	Elements( Points( X, Y, Legend( 2 ) ) ),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model(				2,				Properties( 0, {Marker Size( 8 )} ),				Properties( 1, {gradient( {Color Theme( "Muted Yellow to Red" )} )} )			)}		),		Dispatch( {}, "Graph Builder", FrameBox,			{Background Map( Boundaries( "US States" ) )}		)	));

```

### 项消息

#### Error Interval

**语法:** obj &lt;&lt; Error Interval( "自动"|"无"|"极差"|"四分位数间距"|"标准误差"|"标准差"|"置信区间"|"绝对偏差中位数"|"定制区间"|"双向区间" )

#### Interval Style

**语法:** obj &lt;&lt; Interval Style( "误差条"|"带"|"哈希带"|"箭头" )

#### Jitter

**语法:** obj &lt;&lt; Jitter( "无"|"自动"|"随机均匀"|"随机正态"|"密度随机"|"堆叠填充"|"网格"|"六边形网格"|"蜂群" )

#### Jitter Limit

**语法:** obj &lt;&lt; Jitter Limit( number )

**JMP添加的版本:** 14

#### Jitter Overlap

**语法:** obj &lt;&lt; Jitter Overlap( number )

**JMP添加的版本:** 19

#### Jitter Side

**语法:** obj &lt;&lt; Jitter Side( "中心化"|"正"|"负"|"有序型" )

#### Jitter Smooth

**语法:** obj &lt;&lt; Jitter Smooth( number )

**JMP添加的版本:** 19

#### Label

**语法:** obj &lt;&lt; Label( "无标签"|"将值用作标签"|"将行用作标签"|"按行和值添加标签" )

#### Label Format

**语法:** obj &lt;&lt; Label Format

**JMP添加的版本:** 18

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Save Summary Formula

**语法:** obj &lt;&lt; Save Summary Formula

#### Set Shape Column

**语法:** obj &lt;&lt; Set Shape Column

**JMP添加的版本:** 16

#### Set Shape Expression

**语法:** obj &lt;&lt; Set Shape Expression

**JMP添加的版本:** 16

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "无"|"数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

## Shapes Element

### 关联的构造器

#### Map Shapes Element

**语法:** Map Shapes Element

**说明:** 显示“地图形状”变量定义的区域，通常带有“颜色”变量。

**世界地图等值区域图**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -175.3 ), Max( 175.3 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -82.6 ), Max( 82.6 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**以亚太为中心的世界地图**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// world map, choropleth, grid lines, Pacific centeringGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -23.27 ), Max( 327.33 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( -87.55 ), Max( 87.55 ), Inc( 30 ),			Minor Ticks( 0 ), Label Row( Show Major Grid( 1 ) )}		)	));

```

**使用分类颜色的定制形状文件**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, categorical colorGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Color( :sector ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**使用渐变颜色的定制形状文件**

```jsl

Open( "$SAMPLE_DATA/S4 Temps.jmp" );// custom shape file choropleth, color gradientGraph Builder(	Show Control Panel( 0 ),	Show X Axis( 0 ),	Show Y Axis( 0 ),	Show X Axis Title( 0 ),	Show Y Axis Title( 0 ),	Variables( Group X( :time of day ), Color( :fahrenheit ), Shape( :"room/office"n ) ),	Elements( Map Shapes( Legend( 2 ) ) ));

```

**地中海等积等值区域图**

```jsl

Open( "$SAMPLE_DATA/World Demographics.jmp" );// Mediterranean map, choropleth, equal area projection, grid linesGraph Builder(	Size( 1094, 586 ),	Show Control Panel( 0 ),	Variables( Color( :Total Median Age ), Shape( :Territory ) ),	Elements( Map Shapes( Legend( 3 ) ) ),	SendToReport(		Dispatch( {}, "", ScaleBox,			{Format( "Longitude DDD", "PUNDIR", 16 ), Min( -14.2917884823647 ),			Max( 64.9684846475565 ), Inc( 20 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		),		Dispatch( {}, "", ScaleBox( 2 ),			{Format( "Latitude DDD", "PUNDIR", 16 ), Min( 21.8020806509188 ),			Max( 61.3932495299748 ), Inc( 10 ), Minor Ticks( 1 ),			Label Row( Show Major Grid( 1 ) )}		)	));

```

### 项消息

#### Aspect Ratio

**语法:** obj &lt;&lt; Aspect Ratio( number )

**说明:** X:Y 缩放比例的调整因子。

#### Show Missing Shapes

**语法:** obj &lt;&lt; Show Missing Shapes( state=0|1 )

**JMP添加的版本:** 16

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

## Smoother Element

### 关联的构造器

#### Smoother Element

**语法:** Smoother Element

**说明:** 显示通过数据的平滑曲线。最适用于相互关系未知的连续型 X 和 Y。

**使用拆分的平滑时间序列趋势**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// Time series, split trend curve, grid linesGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :date ),		Y( :Ozone Concentration ),		Overlay( :Intervention for post 1960 period )	),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ), Lambda( 1.4 ) ) ),	SendToReport(		Dispatch( {}, "date", ScaleBox, {Minor Ticks( 4 )} ),		Dispatch( {}, "Ozone Concentration", ScaleBox, {Label Row( Show Major Grid( 1 ) )} )	));

```

**单调平滑趋势线**

```jsl

Open( "$SAMPLE_DATA/Penguins.jmp" );// monotonic smooth trend line, p-spline, constraintGraph Builder(	Show Control Panel( 0 ),	Include Missing Continuous Values( 0 ),	Variables( X( :Culmen Length ), Y( :Culmen Depth ), Overlay( :Species ) ),	Elements(		Points( X, Y ),		Smoother(			X,			Y,			Method( "P-Spline" ),			Lambda( 0.3 ),			Shape Constraint( "Non-descending" )		)	));

```

**周期性平滑线**

```jsl

Open( "$SAMPLE_DATA/Time Series/Air.jmp" );// smoother, cycle, p-spline, bootstrap confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :month ), Y( :Ozone Concentration ) ),	Elements(		Points( X, Y, Legend( 5 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Shape Constraint( "Cycle" ),			Confidence of Fit( 1 )		)	));

```

**在对数 x 轴上单调**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Bioassay.jmp" );// monotonic spline smoother, log x axis, overlaid, legend in graph cornerGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Concentration ), Y( :Toxicity ), Overlay( :Formulation ) ),	Elements(		Points( X, Y, Legend( 11 ) ),		Smoother(			X,			Y,			Legend( 12 ),			Method( "P-Spline" ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "Concentration", ScaleBox, {Scale( "Log" ), Minor Ticks( 1 )} )	));

```

**平滑线比较: loess，样条，p 样条**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Corn.jmp" );// smoothers, loess, cubic spline, p-spline, monotonic, legend in bottom rightGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Bottom Right" ),	Variables( X( :nitrate ), Y( :yield ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother(			X,			Y,			Legend( 4 ),			Method( "Local Kernel" ),			Lambda( 0.5 ),			Local Width( 0.687 ),			Trim( 0 )		),		Smoother( X, Y, Legend( 5 ), Lambda( 0.4 ) ),		Smoother(			X,			Y,			Legend( 6 ),			Method( "P-Spline" ),			Lambda( 2.0 ),			Shape Constraint( "Non-descending" )		)	),	SendToReport(		Dispatch( {}, "400", ScaleBox,			{Legend Model( 4, Level Name( 0, "Loess" ) ),			Legend Model( 5, Level Name( 0, "Spline" ) ),			Legend Model( 6, Level Name( 0, "Monotonic p-spline" ) )}		),		Dispatch( {}, "400", LegendBox,			{Set Title( "" ), Legend Position( {3, [-1], 4, [0], 5, [1], 6, [2]} )}		)	));

```

**平滑趋势和置信区间**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Chemical Kinetics.jmp" );// cubic spline smoother confidence intervalGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Concentration ), Y( :"Velocity (y)"n ) ),	Elements(		Points( X, Y, Legend( 3 ) ),		Smoother( X, Y, Legend( 4 ), Confidence of Fit( 1 ) )	));

```

**平滑趋势曲线，叠加**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// overlaid cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Legend Position( "Inside Left" ),	Variables( X( :Days ), Y( :Algae density ), Overlay( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**平滑趋势曲线，面板式**

```jsl

Open( "$SAMPLE_DATA/Nonlinear Examples/Algae Mitscherlich.jmp" );// paneled cubic spline trend linesGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables( X( :Days ), Y( :Algae density ), Wrap( :Treatment ) ),	Elements( Points( X, Y, Legend( 9 ) ), Smoother( X, Y, Legend( 10 ) ) ));

```

**平滑趋势曲线，面板式和叠加**

```jsl

Open( "$SAMPLE_DATA/Corn Wheat Soybean Production.jmp" );// smoothers paneled and filteredGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :Year ),		Y( :Commodity Acres Planted ),		Group X( :State ),		Overlay( :Commodity )	),	Elements( Points( X, Y, Legend( 38 ) ), Smoother( X, Y, Legend( 39 ) ) ),	Local Data Filter(		Add Filter( columns( :State ), Where( :State == {"IOWA", "NEBRASKA", "OKLAHOMA"} ) )	));

```

**散点图上的平滑趋势线**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );// smoothers and scatter plot, overlay, panels, trellis, trend curve, splineGraph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ), Wrap( :age ), Overlay( :sex ) ),	Elements( Points( X, Y ), Smoother( X, Y, Lambda( 0.2 ) ) ));

```

### 项消息

#### Adapt to Axis Scale

**语法:** obj &lt;&lt; Adapt to Axis Scale( state=0|1 )

**说明:** 关于对数和其他轴变换，它是对变换的坐标应用计算的。

#### Confidence Bootstrap

**语法:** obj &lt;&lt; Confidence Bootstrap( number )

**JMP添加的版本:** 14

#### Confidence of Fit

**语法:** obj &lt;&lt; Confidence of Fit( state=0|1 )

**说明:** 拟合的 Bootstrap 置信区域。

**JMP添加的版本:** 14

#### Constrain Confidence Region

**语法:** obj &lt;&lt; Constrain Confidence Region( state=0|1 )

**说明:** 形状约束是否也适用于用于计算拟合置信度区域的 Bootstrap 拟合。

**JMP添加的版本:** 19

#### Degree

**语法:** obj &lt;&lt; Degree( "中间值"|"均值"|"线性"|"二次"|"三次" )

**JMP添加的版本:** 16

#### Lambda

**语法:** obj &lt;&lt; Lambda( number )

#### Local Constraint

**语法:** obj &lt;&lt; Local Constraint( state=0|1 )

**说明:** 将曲线限制到附近值的范围内。

**JMP添加的版本:** 19

#### Local Region

**语法:** obj &lt;&lt; Local Region( "功效"|"比例"|"固定"|"尾部" )

**JMP添加的版本:** 16

#### Local Robustness

**语法:** obj &lt;&lt; Local Robustness( number )

**JMP添加的版本:** 16

#### Local Weighting

**语法:** obj &lt;&lt; Local Weighting( "Tri-cube"|"余弦"|"Epanechnikov"|"高斯"|"Cauchy"|"Laplace"|"三角形"|"矩形" )

**JMP添加的版本:** 16

#### Local Width

**语法:** obj &lt;&lt; Local Width( number )

**JMP添加的版本:** 16

#### Maximum Constraint

**语法:** obj &lt;&lt; Maximum Constraint( number )

#### Method

**语法:** obj &lt;&lt; Method( "样条"|"P 样条"|"局部核"|"Savitzky-Golay"|"移动平均值"|"移动框" )

**JMP添加的版本:** 15

#### Minimum Constraint

**语法:** obj &lt;&lt; Minimum Constraint( number )

#### Response Axis

**语法:** obj &lt;&lt; Response Axis( "自动"|"X"|"Y" )

#### Save Formula

**语法:** obj &lt;&lt; Save Formula

#### Scale lambda for count

**语法:** obj &lt;&lt; Scale lambda for count( state=0|1 )

**说明:** 调整样条平滑参数 lambda 以考虑数据大小。对于在不同大小的组之间保持一致的平滑很有用。

#### Shape Constraint

**语法:** obj &lt;&lt; Shape Constraint( "无"|"非递减"|"非递增"|"高峰"|"低谷"|"高峰和低谷"|"平坦开始"|"平坦结束"|"平坦开始和结束"|"周期" )

**JMP添加的版本:** 19

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "无"|"数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

#### Trim

**语法:** obj &lt;&lt; Trim( number )

**JMP添加的版本:** 16

## Treemap Element

### 关联的构造器

#### Treemap Element

**语法:** Treemap Element

**说明:** 显示按多个类别汇总的响应。

**‌位置排序提示**

```jsl

Open( "$SAMPLE_DATA/SATByYear.jmp" );// treemap, positional ordering hintsGraph Builder(	Show Control Panel( 0 ),	Variables(		X( :State ),		Y( :Longitude ),		Y( :Latitude, Position( 1 ) ),		Color( :SAT Verbal ),		Size( :Population )	),	Elements( Treemap( X, Y( 1 ), Y( 2 ), Legend( 9 ) ) ));

```

**嵌套矩形树图，方形化**

```jsl

Open( "$SAMPLE_DATA/Color Preference Survey.jmp" );// nested treemap, squarify, color value column propertyGraph Builder(	Show Control Panel( 0 ),	Show Legend( 0 ),	Variables(		X( :What is your gender? ),		X( :"What is your favorite color? (select one)"n, Position( 1 ) ),		X( :What is your favorite color?, Position( 1 ) ),		Color( :"What is your favorite color? (select one)"n )	),	Elements(		Treemap(			X( 1 ),			X( 2 ),			X( 3 ),			Legend( 6 ),			Layout( "Squarify" ),			Group Labels( "Above" )		)	));

```

**连续颜色渐变**

```jsl

Open( "$SAMPLE_DATA/Airline Delays.jmp" );// treemap, continuous color gradientGraph Builder(	Show Control Panel( 0 ),	Variables( X( :Airline ), Color( :Arrival Delay ) ),	Elements( Treemap( X, Legend( 5 ), Summary Statistic( "N" ) ) ),	SendToReport(		Dispatch( {}, "graph title", TextEditBox,			{Set Text( "Airline Flight Count colored by Average Delay" )}		)	));

```

### 项消息

#### Category Name

**语法:** obj &lt;&lt; Category Name( state=0|1 )

**说明:** 将类别的列名作为类别标签的一部分显示。该选项仅在也显示类别值时使用。

#### Category Value

**语法:** obj &lt;&lt; Category Value( state=0|1 )

**说明:** 将类别的值作为类别标签的一部分显示。

#### Color Label Format

**语法:** obj &lt;&lt; Color Label Format

**JMP添加的版本:** 16

#### Color Name

**语法:** obj &lt;&lt; Color Name( state=0|1 )

**说明:** 将颜色变量的名称作为颜色标签的一部分显示。仅当同时显示颜色值时才使用该选项。

**JMP添加的版本:** 16

#### Color Value

**语法:** obj &lt;&lt; Color Value( state=0|1 )

**说明:** 将颜色变量的值作为类别标签的一部分显示。该选项仅在指定了颜色变量时使用。

#### Group Labels

**语法:** obj &lt;&lt; Group Labels( "无"|"上"|"浮动" )

**说明:** 关闭组标签，或将组标签显示在类别上方或显示为浮动框。

#### Implicit Color

**语法:** obj &lt;&lt; Implicit Color( state=0|1 )

**说明:** 对矩形树图使用唯一颜色。取消选择该选项会将矩形树图显示为一种实色。若指定了颜色变量，则禁用该选项。 默认开启。

#### Label Justification

**语法:** obj &lt;&lt; Label Justification( "左"|"中心"|"右" )

#### Label Threshold

**语法:** obj &lt;&lt; Label Threshold( number )

**说明:** 用于在框中显示标签的最小大小（区域）。

#### Label Transparency

**语法:** obj &lt;&lt; Label Transparency( number )

**说明:** 当组标签浮动时，设置组标签的透明度。有效值介于 0.0 和 1.0 之间（含 0.0 和 1.0）。

**JMP添加的版本:** 16

#### Layout

**语法:** obj &lt;&lt; Layout( "拆分"|"方形化"|"混合" )

#### Max Label Size

**语法:** obj &lt;&lt; Max Label Size( number )

**说明:** 按照字体大小定义最大增量。

#### Orientation Bias

**语法:** obj &lt;&lt; Orientation Bias( number )

**说明:** 设置水平与垂直区域拆分的相对偏好。

**JMP添加的版本:** 17

#### Show Frames

**语法:** obj &lt;&lt; Show Frames( state=0|1 )

**说明:** 默认开启。

#### Show Group Name

**语法:** obj &lt;&lt; Show Group Name( state=0|1 )

**说明:** 将组的列名作为组标签的一部分显示。该选项仅在组标签位于组拼块上方时使用。

#### Size Label Format

**语法:** obj &lt;&lt; Size Label Format

**JMP添加的版本:** 16

#### Size Name

**语法:** obj &lt;&lt; Size Name( state=0|1 )

**说明:** 将大小变量的名称作为大小标签的一部分显示。仅当同时显示大小值时才使用该选项。

**JMP添加的版本:** 16

#### Size Value

**语法:** obj &lt;&lt; Size Value( state=0|1 )

**说明:** 将大小变量的值作为类别标签的一部分显示。

#### Summary Statistic

**语法:** obj &lt;&lt; Summary Statistic( "数目"|"均值"|"中位数"|"众数"|"几何均值"|"最小值"|"最大值"|"极差"|"总和"|"累积和"|"累积百分比"|"占合计的百分比"|"占因子的百分比"|"占总计的百分比"|"标准差"|"方差"|"标准误差"|"变异系数"|"四分位数间距"|"绝对偏差中位数"|"第一四分位数"|"第三四分位数" )

#### Tile Labels

**语法:** obj &lt;&lt; Tile Labels

