# Time Series



## ARIMA

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

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

### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Automatic Recalc( 1 );dt << Select Rows( 5 ) << Exclude( 1 );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Data Table Window;

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Datatable;Show( N Rows( t ) );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );t = obj << Get Timing;Show( t );

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Relaunch Analysis;

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Save Script to Script Window;

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

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

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

**语法:** obj = Time Series(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

## 关联的构造器

### Time Series

**语法:** Time Series( Y( column ) )

**说明:** 对等间距的时间点中的一系列观测进行建模。包括时间序列图、自相关性、变差图、谱密度、ARIMA、季节性 ARIMA、平滑模型和预测。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

## 列

### By

**语法:** obj &lt;&lt; By( column(s) )

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << Time Series(	Y( :steel shipments ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));

```

### Input List

**语法:** obj &lt;&lt; Input List( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### Time ID

**语法:** obj &lt;&lt; Time ID( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### X

**语法:** obj &lt;&lt; X( column )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

### Y

**语法:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :steel shipments ) );

```

## 项消息

### AR Coefficients

**语法:** obj &lt;&lt; AR Coefficients( state=0|1 )

**说明:** 显示或隐藏自相关性系数图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << AR Coefficients( 1 );

```

### ARIMA

**语法:** obj &lt;&lt; ARIMA( p, d, q, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**说明:** 拟合 ARIMA 模型。设置 ARIMA(p,d,q) 模型的阶数 p、d 和 q。设置 level 为 0.95 之外的值。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 1, 0, 0, No Intercept( 1 ), No Constrain( 1 ), Confidence Intervals( 0.99 ) );

```

### ARIMA Model Group

**语法:** obj &lt;&lt; ARIMA Model Group( AR(p0,p1),Diff(d0,d1),MA(q0,q1),Seasonal AR(P0,P1),Seasonal Diff(D0,D1),Seasonal MA(Q0,Q1),Seasonal Period(S0,S1),Confidence Intervals(C),Intercept(1),Constrain fit(1) )

**说明:** 拟合一组阶数在指定范围内的 ARIMA 模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << ARIMA Model Group( AR( 0, 2 ), MA( 0, 2 ) );

```

### Autocorrelation

**语法:** obj &lt;&lt; Autocorrelation( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Autocorrelation( 1 );

```

### Autocorrelation Lags

**语法:** obj = Time Series(...Autocorrelation Lags( number=25 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置用于计算自相关性时使用的两个点之间最大期间数的启动选项。 默认为“25”。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Autocorrelation Lags( 10 ) );

```

### Combine and Save Forecasts from Models

**语法:** obj &lt;&lt; Combine and Save Forecasts from Models

**说明:** 使用报表中所有模型拟合的合并结果创建一个新的数据表。

**JMP添加的版本:** 16

### Connecting Lines

**语法:** obj &lt;&lt; Connecting Lines( state=0|1 )

**说明:** 显示或隐藏基本时间序列图中的连接线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Connecting Lines( 1 );

```

### Cross Correlation

**语法:** obj &lt;&lt; Cross Correlation( state=0|1 )

**说明:** 显示或隐藏交叉相关性图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Cross Correlation( 1 );

```

### Damped-Trend Linear Exponential Smoothing

**语法:** obj &lt;&lt; Damped-Trend Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Damping|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**说明:** 拟合阻尼趋势平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	"Damped-Trend Linear Exponential Smoothing"n( Zero to One ));

```

### Difference

**语法:** obj &lt;&lt; Difference( d, &lt;D&gt;, &lt;S&gt; )

**说明:** 计算差分序列，并生成差分序列的自相关和偏自相关图。差分序列的公式为  (1-B)^d \* (1-B^S)^D \* y_t ，其中 y_t 是时间序列，B 是由 B \* y_t = y_(t-1) 定义的后移算子，d 是非季节差分阶数，D 是季节差分阶数，S 是每个周期的观测数。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Difference( 1 );obj << Difference( 1, 1, 12 );

```

### Double Exponential Smoothing

**语法:** obj &lt;&lt; Double Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**说明:** 调用双指数平滑模型拟合。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Double Exponential Smoothing( Zero to One ),	Double Exponential Smoothing( Unconstrained ),	Double Exponential Smoothing( Stable Invertible ),	Double Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),	Double Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),	Double Exponential Smoothing( Custom( Level( Unconstrained ) ) ));

```

### Fit Recommended ETS

**语法:** obj &lt;&lt; Fit Recommended ETS( Period( m ),Constrained( "Yes"|"No" ) )

**说明:** 拟合所有推荐的状态空间平滑模型。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );

```

### Forecast Periods

**语法:** obj = Time Series(...Forecast Periods( number=25 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置用于生成预测报表的预先步长的启动选项。 默认为“25”。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Forecast Periods( 10 ) );obj << ARIMA( 1, 0, 0 );

```

### Forecast on Holdback

**语法:** obj = Time Series(...Forecast on Holdback( state=0|1 )...)

**说明:** 确定是对将来观测还是对保留观测进行预测。若选择该选项，则将对由“预测周期数”选项中指定的数字确定的保留集进行预测。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Forecast on Holdback( 1 ) );obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Generate Simulation

**语法:** obj &lt;&lt; Generate Simulation( id, seed, length, n )

**说明:** 生成拟合模型的多个将来轨迹数据表。返回表引用。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );dt = obj << Generate Simulation( 1, 11111, 100, 5 );

```

### Get Model Specs

**语法:** obj &lt;&lt; Get Model Specs

**说明:** 返回模型结果的命名列表，每一项分别按模型规格命名。输出中包含的是估计值和标准误差。可用于 ARIMA、季节性 ARIMA、所有平滑模型和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Log Passengers ) );obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );l = obj << Get Model Specs;Show( l );

```

### Get Models

**语法:** obj &lt;&lt; Get Models

**说明:** 返回模型结果的命名列表，每一项分别按模型描述命名。输出中包含的是估计值和标准误差。可用于 ARIMA、季节性 ARIMA、所有平滑模型和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Log Passengers ) );obj << Seasonal ARIMA( 0, 1, 1, 0, 1, 1, 12, No Intercept( 1 ) );l = obj << Get Models;Show( l );

```

### Hide All Reports

**语法:** obj &lt;&lt; Hide All Reports

**说明:** 从报表窗口隐藏“模型比较”表中列出的所有模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );obj << Hide All Model Reports;

```

### Input Series

**语法:** obj &lt;&lt; Input Series( Column, &lt;ARIMA( )&gt;| &lt;Prewhitening( )&gt; ... )

**说明:** 将发送到输入序列的消息分组。注意: 要求指定输入列表变量。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Input Series( :Input Gas Rate, ARIMA( 1, 0, 0 ) );

```

### Keep Best Models

**语法:** obj &lt;&lt; Keep Best Models( "AIC"|"SBC" )

**说明:** 保留各个模型类中的最佳模型并删除其余模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << Fit Recommended ETS( Period( 12 ), Constrained( "Yes" ) );Wait( 1 );obj << Keep Best Models( "AIC" );

```

### Lambda for Box-Cox

**语法:** obj = Time Series(...Lambda for Box-Cox( number=0 )...)

**说明:** 指定用于原始数据的 Box-Cox 变换的 lambda 参数。 默认为“0”。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series(	Y( :Steel Shipments ),	Name( "Use Box-Cox Transformation" )(1),	Name( "Lambda for Box-Cox" )(0));obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Linear Exponential Smoothing

**语法:** obj &lt;&lt; Linear Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( (Trend|Level)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**说明:** 拟合线性指数平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Linear Exponential Smoothing( Zero to One ),	Linear Exponential Smoothing( Unconstrained ),	Linear Exponential Smoothing( Stable Invertible ),	Linear Exponential Smoothing(		Custom( Level( Bounded( 0.8, 1 ) ), Trend( Bounded( 0.7, 0.9 ) ) )	),	Linear Exponential Smoothing( Custom( Level( Fixed( 0 ) ), Trend( Fixed( .3 ) ) ) ),	Linear Exponential Smoothing( Custom( Level( Unconstrained ), Trend( Fixed( .4 ) ) ) ));

```

### Maximum Iterations

**语法:** obj &lt;&lt; Maximum Iterations( maxIter=250 )

**说明:** 重置 ARIMA 模型拟合的最大优化迭代次数。 默认为“250”。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Maximum Iterations( 2 );obj << ARIMA( 1, 0, 0 );

```

### Mean Line

**语法:** obj &lt;&lt; Mean Line( state=0|1 )

**说明:** 显示或隐藏基本时间序列图中的均值线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Mean Line( 1 );

```

### Model Comparison Report

**语法:** obj &lt;&lt; Model Comparison Report

**说明:** 配置“模型比较”报表设置。

### Number of Forecast Periods

**语法:** obj &lt;&lt; Number of Forecast Periods( number )

**说明:** 重置预测周期数并更新预测报表。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Partial Autocorrelation

**语法:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Partial Autocorrelation( 1 );

```

### Prewhitening

**语法:** obj &lt;&lt; Prewhitening( Order(p, d, q), Seasonal(P, D, Q, S) )

**说明:** 设置预白化阶数。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series(	Y( :Output CO2 ),	Input List( :Input Gas Rate ),	Input Series(		:Input Gas Rate,		Prewhitening( Order( 1, 0, 0 ), Seasonal( 0, 0, 0, 12 ) )	));

```

### Remove All Simulation

**语法:** obj &lt;&lt; Remove All Simulation

**说明:** 删除所有模拟的将来轨迹。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate More( 1, 2 );obj << Simulate More( 2, 3 );obj << Remove All Simulation;

```

### Remove Cycle

**语法:** obj &lt;&lt; Remove Cycle( Units per Cycle( number ), Has Constant( 0|1 ) )

**说明:** 使用余弦函数估计循环成分，然后将其从数据中删除。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );obj = dt << Time Series( Y( :Sales ) );obj << Remove Cycle( Units per Cycle( 12 ), Has Constant( 1 ) );

```

### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

### Remove Linear Trend

**语法:** obj &lt;&lt; Remove Linear Trend

**说明:** 估计线性趋势，随后从数据中将其删除。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );obj = dt << Time Series( Y( :Sales ) );obj << Remove Linear Trend;

```

### Remove Model Simulation

**语法:** obj &lt;&lt; Remove Model Simulation( id )

**说明:** 删除模拟的拟合模型将来轨迹。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate More( 1, 2 );obj << Simulate More( 2, 3 );obj << Remove Model Simulation( 1 );

```

### Save Spectral Density

**语法:** obj &lt;&lt; Save Spectral Density

**说明:** 将谱密度保存至表。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Save Spectral Density;

```

### Seasonal ARIMA

**语法:** obj &lt;&lt; Seasonal ARIMA( p, d, q, P, D, Q, S, &lt;No Intercept( 0|1 )&gt;, &lt;No Constrain( 0|1 )&gt;, &lt;Confidence Intervals( level )&gt; )

**说明:** 拟合季节性 ARIMA 模型。设置 ARIMA(p,d,q)(P,D,Q)S 模型的阶数 p、d、q、P、D、Q 和 S。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << seasonal arima( 1, 0, 0, 1, 0, 0, 12 );obj << seasonal arima(	1,	0,	0,	1,	0,	0,	12,	No Intercept( 1 ),	No Constrain( 1 ),	Confidence Intervals( 0.99 ));

```

### Seasonal Exponential Smoothing

**语法:** obj &lt;&lt; Seasonal Exponential Smoothing( Zero to One|Unconstrained|Custom( (Level| Seasonal)( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**说明:** 拟合季节性指数平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Seasonal Exponential Smoothing(		12,		Custom( Level( Bounded( 0, 1 ) ), Seasonal( Bounded( 0, 1 ) ) )	));

```

### Set Seed

**语法:** obj &lt;&lt; Set Seed( seed )

**说明:** 设置随机种子。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << Set Seed( 1111 );obj << Simulate Once( 1 );obj << Set Seed( 1111 );obj << Simulate Once( 1 );

```

### Show Box-Cox Transformation Plot

**语法:** obj &lt;&lt; Show Box-Cox Transformation Plot( state=0|1 )

**JMP添加的版本:** 16

### Show Lag Plot

**语法:** obj &lt;&lt; Show Lag Plot( state=0|1 )

### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏基本时间序列图中的点。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Show Points( 1 );

```

### Simple Exponential Smoothing

**语法:** obj &lt;&lt; Simple Exponential Smoothing( Zero to One|Unconstrained|Stable Invertible|Custom( Level( Unconstrained| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**说明:** 拟合简单指数平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Simple Exponential Smoothing( Zero to One ),	Simple Exponential Smoothing( Unconstrained ),	Simple Exponential Smoothing( Stable Invertible ),	Simple Exponential Smoothing( Custom( Level( Bounded( 0.8, 1 ) ) ) ),	Simple Exponential Smoothing( Custom( Level( Fixed( 0 ) ) ) ),	Simple Exponential Smoothing( Custom( Level( Unconstrained ) ) ));

```

### Simple Moving Average

**语法:** obj &lt;&lt; Simple Moving Average

**说明:** 若没有其他参数，则调用简单移动平均规格对话框并拟合模型。将参数传递给可脚本化简单移动平均模型。返回值为可脚本化简单移动平均模型句柄。有关参数的详细信息，请参见可脚本化简单移动平均。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = dt << Time Series( Y( :Close ) );sma = obj << Simple Moving Average;sma << Add Model( 10 );

```

### Simple Moving Average Centering Method

**语法:** obj &lt;&lt; Simple Moving Average Centering Method( "不中心化"|"中心化"|"偶数项中心化和双平滑" )

### Simulate More

**语法:** obj &lt;&lt; Simulate More( id, n )

**说明:** 模拟拟合模型的多个将来轨迹。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate More( 1, 2 );obj << Simulate More( 2, 3 );

```

### Simulate Once

**语法:** obj &lt;&lt; Simulate Once( id )

**说明:** 模拟拟合模型的一个将来轨迹。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << arima( 1, 0, 0 );obj << arima( 2, 0, 0 );obj << Simulate Once( 1 );obj << Simulate Once( 2 );

```

### Spectral Density

**语法:** obj &lt;&lt; Spectral Density( state=0|1 )

**说明:** 显示或隐藏谱密度图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Spectral Density( 1 );

```

### State Space Smoothing

**语法:** obj &lt;&lt; State Space Smoothing( Error Type( "Additive"|"Multiplicative" ),Trend Type( "None"|"Additive"|"Multiplicative" ),Seasonal Type( "None"|"Additive"|"Multiplicative" ),Damped( "Yes"|"No" ),Period( m ),Constrained( "Yes"|"No" ) )

**说明:** 拟合状态空间平滑模型。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Seriesg.jmp" );obj = dt << Time Series( Y( :Passengers ) );obj << State Space Smoothing(	Error Type( "Multiplicative" ),	Trend Type( "Additive" ),	Seasonal Type( "Multiplicative" ),	Damped( "No" ),	Period( 12 ),	Constrained( "Yes" ));

```

### Time Series Graph

**语法:** obj &lt;&lt; Time Series Graph( state=0|1 )

**说明:** 开启或关闭基本时间序列图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Time Series Graph( 1 );

```

### Transfer Function

**语法:** obj &lt;&lt; Transfer Function( Order(p, d, q), Seasonal(P, D, Q, S), input1(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag)), &lt;input2(Order(p, d, q), Seasonal(P, D, Q, S), Lag(lag))&gt;, ..., &lt;No Intercept(flag1)&gt;, &lt;No Constrain(flag2)&gt;, &lt;Alternative Parameterization( flag3 )&gt;, &lt;Confidence Intervals( level )&gt;, &lt;Number of Forecast Periods( nAhead )&gt; )

**说明:** 拟合转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = dt << Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	No Intercept( 1 ),	Alternative Parameterization( 1 ),	Confidence Intervals( 0.99 ),	Number of Forecast Periods( 10 ));

```

### Use Box-Cox Transformation

**语法:** obj = Time Series(...Use Box-Cox Transformation( state=0|1 )...)

**说明:** 通过使用 Box-Cox 变换，其 lambda 按照“Box-Cox 的 Lambda”选项中进行指定，变换原始数据。若选中该选项，则对变换的数据执行“时间序列”报表中的所有分析。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ), Name( "Use Box-Cox Transformation" )(1) );obj << arima( 1, 0, 0 );obj << Number of Forecast Periods( 100 );

```

### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏时间序列基本诊断报表中的变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = dt << Time Series( Y( :Steel Shipments ) );obj << Variogram( 1 );

```

### Winters Method

**语法:** obj &lt;&lt; Winters Method( Zero to One|Unconstrained|Custom( (Level|Seasonal|Trend)( Unconstrained| Seasonal| Bounded( lower, upper )| Fixed( value ) )), &lt;Confidence Intervals(level)&gt; )

**说明:** 使用 Winter 方法拟合平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom(			Level( Bounded( 0, 1 ) ),			Trend( Bounded( 0, 1 ) ),			Seasonal( Bounded( 0, 1 ) )		)	));

```

### X11

**语法:** obj &lt;&lt; X11( Additive|Multiplicative )

**说明:** 使用美国人口普查局开发的 X-11 方法删除趋势和季节效应。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Monthly Sales.jmp" );obj = dt << Time Series( X( :Date ), Y( :Sales ) );obj << X11( Additive );

```

## Damped-Trend Linear Exponential Smoothing

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Difference

### 项消息

#### Autocorrelation

**语法:** obj &lt;&lt; Autocorrelation( state=0|1 )

**说明:** 显示或隐藏差值报表中的自相关性。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Autocorrelation( 1 ) );

```

#### Connecting Lines

**语法:** obj &lt;&lt; Connecting Lines( state=0|1 )

**说明:** 显示或隐藏差值图上的点的连接线。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Connecting Lines( 1 ) );

```

#### Difference Graph

**语法:** obj &lt;&lt; Difference Graph( state=0|1 )

**说明:** 显示或隐藏差值图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Difference Graph( 1 ) );

```

#### Mean Line

**语法:** obj &lt;&lt; Mean Line( state=0|1 )

**说明:** 显示或隐藏差值图上的均线。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Mean Line( 1 ) );

```

#### Partial Autocorrelation

**语法:** obj &lt;&lt; Partial Autocorrelation( state=0|1 )

**说明:** 显示或隐藏差值报表中的偏自相关性。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Partial Autocorrelation( 1 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Save

**语法:** obj &lt;&lt; Save

**说明:** 将差值保存至数据表的新列中。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Save );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏差值图上的点。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Show Points( 1 ) );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏差值报表中的变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Difference( 1, 0, 0, Variogram( 1 ) );

```

## Double (Brown) Exponential Smoothing

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Linear (Holt) Exponential Smoothing

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal ARIMA

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Seasonal Exponential Smoothing

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Exponential Smoothing

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

## Simple Moving Average

### 项消息

#### Add Model

**语法:** obj &lt;&lt; Add Model( Window Width, &lt;Centered&gt; )

**说明:** 添加简单移动平均模型。模型通过移动窗口宽度来确定。可选参数指示均值是否中心化。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );sma = obj << Simple Moving Average( Add Model( 10 ) );sma << Add Model( 15, Centered );

```

#### Connecting Lines

**语法:** obj &lt;&lt; Connecting Lines( &lt;1|0&gt; )

**说明:** 用于显示连接线的图形选项。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );sma = obj << Simple Moving Average( Connecting Lines );

```

#### Get Results

**语法:** obj &lt;&lt; Get Results

**说明:** 将所有简单移动平均模型作为 JSL 对象返回。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );resultobj = obj << Simple Moving Average( Get Result );

```

#### Remove Model

**语法:** obj &lt;&lt; Remove Model( Window Width, &lt;Centered&gt; )

**说明:** 删除简单移动平均模型。模型通过移动窗口宽度来标识。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );obj << Simple Moving Average( Remove Model( 5 ) );

```

#### Remove Report

**语法:** obj &lt;&lt; Remove Report

**JMP添加的版本:** 16

#### Save to Data Table

**语法:** obj &lt;&lt; Save to Data Table

**说明:** 将所有简单移动平均模型保存至数据表，并返回数据表句柄

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );resultdt = obj << Simple Moving Average( Save to Data Table );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( &lt;1|0&gt; )

**说明:** 用于显示点的图形选项。

```jsl

dt = Open( "$SAMPLE_DATA/Stock Prices.jmp" );obj = Time Series( Y( :Close ), Simple Moving Average( Add Model( 5 ) ) );sma = obj << Simple Moving Average( Show Points( 0 ) );

```

## Transfer Function Model

### 项消息

#### Alternative Parameterization

**语法:** obj &lt;&lt; Alternative Parameterization( state=0|1 )

**说明:** 指定常规回归系数是否是分子多项式的公因子。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Alternative Parameterization( 1 ));

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Autocorrelations( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

#### Compute Objective

**语法:** obj &lt;&lt; Compute Objective

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Create SAS Job);

```

#### Import New Inputs

**语法:** obj &lt;&lt; Import New Inputs

**JMP添加的版本:** 16

#### Maximum Iterations

**语法:** obj &lt;&lt; Maximum Iterations( number )

**说明:** 指定最大迭代次数。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Maximum Iterations( 10 ));

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 删除对 AR 和 MA 系数的约束。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	No Constrain( 1 ));

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	No Intercept( 1 ));

```

#### Number of Forecast Periods

**语法:** obj &lt;&lt; Number of Forecast Periods( number )

**说明:** 指定预测的期间数。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Number of Forecast Periods( 10 ));

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Partial Autocorrelations( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Plot( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( number )

**说明:** 设置显示的置信区间水平。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ));obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	:Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Confidence Intervals( 0.99 ));

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Save Columns);

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/SeriesJ.jmp" );obj = Time Series( Y( :Output CO2 ), Input List( :Input Gas Rate ) );obj << Transfer Function(	Order( 2, 0, 0 ),	Seasonal( 0, 0, 0, 0 ),	Input Gas Rate( Order( 2, 0, 2 ), Seasonal( 0, 0, 0, 0 ), Lag( 3 ) ),	Variogram( 1 ));(obj << report)["Residuals"] << Close( 0 );

```

## Winters Method (Additive)

### 项消息

#### Actual

**语法:** obj &lt;&lt; Actual( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“实际值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Actual( 1 ), Save Columns );

```

#### Autocorrelations

**语法:** obj &lt;&lt; Autocorrelations( state=0|1 )

**说明:** 显示或隐藏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Confidence Intervals

**语法:** obj &lt;&lt; Confidence Intervals( number )

#### Create SAS Job

**语法:** obj &lt;&lt; Create SAS Job

**说明:** 创建 SAS 作业以启动 SAS，并且在 PROC ARIMA 中运行分析。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Create SAS Job;

```

#### Innovations

**语法:** obj &lt;&lt; Innovations( state=0|1 )

**说明:** 默认开启。

**JMP添加的版本:** 16

#### Lower Confidence Limit

**语法:** obj &lt;&lt; Lower Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信下限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Lower Confidence Limit( 1 ), Save Columns );

```

#### No Constrain

**语法:** obj &lt;&lt; No Constrain( state=0|1 )

**说明:** 启动 ARIMA 模型时，取消以下约束: 自回归参数要始终位于稳定区域内，而移动平均参数要始终位于可逆区域内。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Constrain( 1 ) );

```

#### No Intercept

**语法:** obj &lt;&lt; No Intercept( state=0|1 )

**说明:** 启动 ARIMA 模型时将截距设置为零。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, No Intercept( 1 ) );

```

#### Partial Autocorrelations

**语法:** obj &lt;&lt; Partial Autocorrelations( state=0|1 )

**说明:** 显示或隐藏偏自相关性图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Partial Autocorrelations( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Plot

**语法:** obj &lt;&lt; Plot( state=0|1 )

**说明:** 显示或隐藏残差统计量图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Plot( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Predicted

**语法:** obj &lt;&lt; Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Predicted( 1 ), Save Columns );

```

#### Prediction Interval

**语法:** obj &lt;&lt; Prediction Interval( level )

**说明:** 为 ARIMA 模型设置有关预测的置信区间的大小。默认大小为 0.95。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 1, 0, Forecasting Interval( 0.99 ) );

```

#### Remove Fit

**语法:** obj &lt;&lt; Remove Fit

**JMP添加的版本:** 16

#### Residuals

**语法:** obj &lt;&lt; Residuals( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“残差值”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Residuals( 1 ), Save Columns );

```

#### Save Columns

**语法:** obj &lt;&lt; Save Columns

**说明:** 创建包含有关响应的实际值、预测值、标准误差、残差和 95% 预测区间的新数据表。该选项可用于所有 ARIMA、平滑和转换函数模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Columns;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。该选项可用于所有 ARIMA 和平滑模型。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Arima( 1, 0, 0 );obj2 << Save Prediction Formula;

```

#### Show Confidence Interval

**语法:** obj &lt;&lt; Show Confidence Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Confidence Interval( 0 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的点。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Show Points( 1 ) );(obj << report)["Model Comparison"] << Close( 1 );

```

#### Show Prediction Interval

**语法:** obj &lt;&lt; Show Prediction Interval( state=0|1 )

**说明:** 显示或隐藏时间序列预测图中的预测区间。该选项适用于所有 ARIMA 和平滑模型。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj2 = obj << Simple Exponential Smoothing( Zero to One );obj2 << Show Prediction Interval( 0 );

```

#### Std Error of Predicted

**语法:** obj &lt;&lt; Std Error of Predicted( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“预测值标准误差”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Std Error of Predicted( 1 ), Save Columns );

```

#### Time

**语法:** obj &lt;&lt; Time( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“时间”数据列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ), Time ID( :Date ) );obj << Arima( 1, 0, 0, Time( 0 ), Save Columns );

```

#### Upper Confidence Limit

**语法:** obj &lt;&lt; Upper Confidence Limit( state=0|1 )

**说明:** 选择要用“保存列”命令保存的“95% 置信上限”值列。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series( Y( :Steel Shipments ) );obj << Arima( 1, 0, 0, Upper Confidence Limit( 1 ), Save Columns );

```

#### Variogram

**语法:** obj &lt;&lt; Variogram( state=0|1 )

**说明:** 显示或隐藏变差图。

```jsl

dt = Open( "$SAMPLE_DATA/Time Series/Steel Shipments.jmp" );obj = Time Series(	Y( :Steel Shipments ),	Winters Method(		12,		Custom( Level( Bounded( 0, 1 ) ), Trend( Bounded( 0, 1 ) ) ),		Variogram( 1 )	));(obj << report)["Residuals"] << Close( 0 );(obj << report)["Model Comparison"] << Close( 1 );

```

