# XGBoost



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

### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Copy Script;

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj[1] << Get ByGroup Script;Show( t );

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Datatable;Show( N Rows( t ) );

```

### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script;Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Script With Data Table;Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );t = obj << Get Timing;Show( t );

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

### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

### Report

**语法:** obj &lt;&lt; Report; Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Save Script to Script Window;

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

### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

## 关联的构造器

### XGBoost

**语法:** XGBoost(Y( columns ), X( columns ))

**说明:** eXtreme 梯度提升树的预测建模界面。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## 列

### Censor

**语法:** obj = XGBoost(...&lt;Censor( column )&gt;...)

**JMP添加的版本:** 17

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Factor

**语法:** obj = XGBoost(...Factor( column(s) )...)

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Freq

**语法:** obj = XGBoost(...&lt;Freq( column )&gt;...)

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Response

**语法:** obj = XGBoost(...Response( column(s) )...)

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Validation

**语法:** obj = XGBoost(...&lt;Validation( column(s) )&gt;...)

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Weight

**语法:** obj = XGBoost(...&lt;Weight( column )&gt;...)

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### X

**语法:** obj = XGBoost(...X( column(s) )...)

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Y

**语法:** obj = XGBoost(...Y( column(s) )...)

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

## 项消息

### Change Variables

**语法:** obj &lt;&lt; Change Variables

**说明:** 更改 X、Y 和其他变量以用于后续模型。

**JMP添加的版本:** 16

### Compare

**语法:** obj &lt;&lt; Compare

**说明:** 更新 XGBoost 比较量度。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Objective( 0 ) ) );obj << Compare( Correlation( 1 ) );

```

### Fit

**语法:** obj &lt;&lt; Fit

**说明:** 拟合 XGBoost 模型。您可以在其中指定 XGBoost 参数和拟合规格。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );

```

### Get Measures

**语法:** obj &lt;&lt; Get Measures

**JMP添加的版本:** 16

### Method

**语法:** obj &lt;&lt; Method( "xgboost"|"lightgbm"="xgboost" )

**说明:** Select either XGBoost or LightGBM as a method for gradient boosting fitting. 默认为“xgboost”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( Method( "lightgbm" ), objective( "regression" ) ));

```

### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << XGBoost( Y( :Weight ), X( :Height ), Fit );obj << Relaunch Analysis;

```

### Show Details

**语法:** obj &lt;&lt; Show Details( state=0|1 )

**说明:** 显示更多详细信息。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Show Details( 1 ) );

```

## XGBoost Compare

### 关联的构造器

#### XGBoost Compare

**语法:** XGBoost Compare

### 项消息

#### AUC

**语法:** obj &lt;&lt; AUC( state=0|1 )

**说明:** 显示或隐藏 AUROC，它是受试者操作特征曲线下方的面积。 默认开启。

**JMP添加的版本:** 16

#### AUPRC

**语法:** obj &lt;&lt; AUPRC( state=0|1 )

**说明:** 精度召回曲线下面积 默认开启。

**JMP添加的版本:** 17

#### Accuracy

**语法:** obj &lt;&lt; Accuracy( state=0|1 )

**说明:** 显示或隐藏准确度，这是正确分类的比例。 默认开启。

**JMP添加的版本:** 15

#### Censor

**语法:** obj &lt;&lt; Censor( state=0|1 )

**说明:** 显示或隐藏“删失”命令 默认开启。

**JMP添加的版本:** 17

#### Concordance

**语法:** obj &lt;&lt; Concordance( state=0|1 )

**说明:** 显示或隐藏一致性，它是 Harrell C- 指数并测量排序效率的强度 默认开启。

**JMP添加的版本:** 17

#### Correlation

**语法:** obj &lt;&lt; Correlation( state=0|1 )

**说明:** 显示或隐藏 Pearson 相关性，这是线性关系强度的一种测度。 默认开启。

**JMP添加的版本:** 15

#### F1

**语法:** obj &lt;&lt; F1( state=0|1 )

**说明:** 显示或隐藏 F1 得分，这是准确率和召回率的调和平均值。 默认开启。

**JMP添加的版本:** 15

#### Features

**语法:** obj &lt;&lt; Features( state=0|1 )

**说明:** 显示或隐藏“特征”列。 默认开启。

**JMP添加的版本:** 16

#### Freq

**语法:** obj &lt;&lt; Freq( state=0|1 )

**说明:** 显示或隐藏“频数”列。 默认开启。

**JMP添加的版本:** 16

#### H Measure

**语法:** obj &lt;&lt; H Measure( state=0|1 )

**说明:** 显示或隐藏 H 测度，它测量相较于基线有多大比例的改进。 默认开启。

**JMP添加的版本:** 17

#### Hide All Models

**语法:** obj &lt;&lt; Hide All Models

**说明:** 隐藏所有模型。

**JMP添加的版本:** 16

#### LogLoss

**语法:** obj &lt;&lt; LogLoss( state=0|1 )

**说明:** 显示或隐藏基于似然的损失函数的对数。 默认开启。

**JMP添加的版本:** 15

#### MAE

**语法:** obj &lt;&lt; MAE( state=0|1 )

**说明:** 显示或隐藏 MAE，这是平均绝对误差。 默认开启。

**JMP添加的版本:** 15

#### MCC

**语法:** obj &lt;&lt; MCC( state=0|1 )

**说明:** 显示或隐藏 Matthews 相关系数，这是二值型变量的 Pearson 相关性。 默认开启。

**JMP添加的版本:** 15

#### Misclass

**语法:** obj &lt;&lt; Misclass( state=0|1 )

**说明:** 显示或隐藏误分类率，这是错误分类的比例。 默认开启。

**JMP添加的版本:** 15

#### Predictors

**语法:** obj &lt;&lt; Predictors( state=0|1 )

**说明:** 显示或隐藏“预测变量”列。 默认开启。

**JMP添加的版本:** 16

#### Profit

**语法:** obj &lt;&lt; Profit( state=0|1 )

**说明:** 显示或隐藏期望收益。 默认开启。

**JMP添加的版本:** 16

#### RMSE

**语法:** obj &lt;&lt; RMSE( state=0|1 )

**说明:** 显示或隐藏 RMSE，这是均方根误差。 默认开启。

**JMP添加的版本:** 15

#### RSquare

**语法:** obj &lt;&lt; RSquare( state=0|1 )

**说明:** 显示或隐藏 R 方值，这是解释的变异性比例。 默认开启。

**JMP添加的版本:** 15

#### Remove Hidden Models

**语法:** obj &lt;&lt; Remove Hidden Models

**说明:** 删除所有未选中“显示”框的模型。

**JMP添加的版本:** 16

#### Remove Shown Models

**语法:** obj &lt;&lt; Remove Shown Models

**说明:** 删除所有选中了“显示”复选框的模型，并显示其余模型。

**JMP添加的版本:** 15

#### Response

**语法:** obj &lt;&lt; Response( state=0|1 )

**说明:** 显示或隐藏“响应”列。 默认开启。

**JMP添加的版本:** 16

#### Show All Models

**语法:** obj &lt;&lt; Show All Models

**说明:** 显示所有模型。

**JMP添加的版本:** 16

#### Training Metrics

**语法:** obj &lt;&lt; Training Metrics( state=0|1 )

**说明:** 显示或隐藏所有训练量度。 默认开启。

**JMP添加的版本:** 15

#### Validation

**语法:** obj &lt;&lt; Validation( state=0|1 )

**说明:** 显示或隐藏“验证”列。 默认开启。

**JMP添加的版本:** 16

#### Validation Metrics

**语法:** obj &lt;&lt; Validation Metrics( state=0|1 )

**说明:** 显示或隐藏所有验证量度。 默认开启。

**JMP添加的版本:** 15

#### Weight

**语法:** obj &lt;&lt; Weight( state=0|1 )

**说明:** 显示或隐藏“权重”列。 默认开启。

**JMP添加的版本:** 16

## XGBoost Fit

### 关联的构造器

#### XGBoost Fit

**语法:** XGBoost Fit

### 项消息

#### Actual by Predicted Plots

**语法:** obj &lt;&lt; Actual by Predicted Plots( state=0|1 )

**说明:** 显示或隐藏使用训练数据的图，其中 X 轴标绘预测值，Y 轴标绘实际值。 默认开启。

**JMP添加的版本:** 15

#### Autotune

**语法:** obj &lt;&lt; Autotune( state=0 )

**说明:** 在最小值和最大值参数设置内创建快速灵活填充设计以拟合 n 个模型，其中 n 是试验次数。 默认为“0”。

**JMP添加的版本:** 17

#### Confusion Matrices

**语法:** obj &lt;&lt; ( fit[number] &lt;&lt; Confusion Matrices( state=0|1 ) )

**说明:** 显示或隐藏实际水平与预测水平的交叉表矩阵。 默认开启。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler

**语法:** obj &lt;&lt; Contour Profiler

**说明:** 显示或隐藏预测函数横截面的交互式图形。

**JMP添加的版本:** 15

#### Copy Parameters to Launch

**语法:** obj &lt;&lt; Copy Parameters to Launch

**说明:** 将参数从该模型复制到模型启动部分。

**JMP添加的版本:** 16

#### Decision Thresholds

**语法:** obj &lt;&lt; Decision Thresholds( state=0|1 )

**说明:** 显示或隐藏决策阈值图形和表。 默认开启。

**JMP添加的版本:** 16

#### Fit Details

**语法:** obj &lt;&lt; Fit Details( state=0|1 )

**说明:** 显示或隐藏拟合模型的统计量。 默认开启。

**JMP添加的版本:** 15

#### Generate Python Code

**语法:** obj &lt;&lt; Generate Python Code

**说明:** 创建用于训练和评分的 Python 代码。

**JMP添加的版本:** 16

#### Importances

**语法:** obj &lt;&lt; Importances( state=0|1 )

**说明:** 显示或隐藏每个预测变量的重要性统计量。 默认开启。

**JMP添加的版本:** 15

#### Lift Curves

**语法:** obj &lt;&lt; Lift Curves( state=0|1 )

**说明:** 显示或隐藏“提升曲线”图。提升曲线绘制提升与观测对应部分的关系，并提供另一种方式来展示模型预测的能力。

**JMP添加的版本:** 15

#### Number of Design Points

**语法:** obj &lt;&lt; Number of Design Points( number=10 )

**说明:** 指定要执行的调节设计试验次数。若您遇到大问题，请将该值保持相对较小。 默认为“10”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Design Points( 10 ) ) );

```

#### Number of Inner Folds

**语法:** obj &lt;&lt; Number of Inner Folds( number=2 )

**说明:** 指定自动调节过程中使用的嵌套内部折数。 默认为“2”。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Number of Inner Folds( 2 ) ) );

```

#### Precision Recall Curves

**语法:** obj &lt;&lt; Precision Recall Curves( state=0|1 )

**说明:** 绘制不同分类阈值下精度和召回之间的权衡关系。它在存在类别不平衡的情景下是首选。

**JMP添加的版本:** 15

#### Profiler

**语法:** obj &lt;&lt; Profiler

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

**JMP添加的版本:** 15

#### Publish Prediction Formula

**语法:** obj &lt;&lt; Publish Prediction Formula

**说明:** 创建预测公式并将它们保存为“公式存储库”平台中的公式列脚本。

**JMP添加的版本:** 15

#### ROC Curves

**语法:** obj &lt;&lt; ROC Curves( state=0|1 )

**说明:** 显示或隐藏响应变量每个水平的“受试者操作特征”(ROC) 曲线。ROC 曲线是（1 - 特异度）-灵敏度图。

**JMP添加的版本:** 15

#### Remove All But This Fit

**语法:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove All But This Fit )

**说明:** 删除除该模型之外所有模型的报表和图。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**语法:** obj &lt;&lt; ( fit[number] &lt;&lt; Remove Fit )

**说明:** 删除整个模型报表。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Iris.jmp" );obj = dt << XGBoost(	Y( :Species ),	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),	Fit);Wait( 2 );obj << (Fit[1] << Remove Fit);

```

#### Save Predicteds

**语法:** obj &lt;&lt; Save Predicteds

**说明:** 在数据表的新列中保存预测值。

**JMP添加的版本:** 15

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。大模型的计算会很慢。

**JMP添加的版本:** 15

#### Save SHAPs

**语法:** obj &lt;&lt; Save SHAPs

**说明:** 将 Shapley 值保存至数据表。这些值将预测分解为每个预测变量的分量。

**JMP添加的版本:** 17

#### Set Random Seed

**语法:** obj &lt;&lt; Set Random Seed( number=0 )

**说明:** 将随机种子设置为特定值，以确保使用相同种子的所有后续试验都是可再现的。 默认为“0”。

**JMP添加的版本:** 19

#### Surface Profiler

**语法:** obj &lt;&lt; Surface Profiler

**说明:** 显示或隐藏预测函数横截面的交互式图形。

**JMP添加的版本:** 15

#### Tree Details

**语法:** obj &lt;&lt; Tree Details( state=0|1 )

**说明:** 显示或隐藏每个树拆分的细分。

**JMP添加的版本:** 15

#### Tuning Design Table

**语法:** Tuning Design Table( "table name" )

**说明:** 指定参数设置的打开的 JMP 数据表的名称（其参数设置用来拟合一系列模型）。该表的列必须与参数名称完全匹配，并且每一行必须包含这些参数的值以用于该模型拟合。未指定的参数从该对话框中设置为其值。

**JMP添加的版本:** 15

#### alpha

**语法:** obj &lt;&lt; alpha( number=0.0 )

**说明:** 指定权重的 L1 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha( 0.0 ) ) );

```

#### alpha_max

**语法:** obj &lt;&lt; alpha_max( number=0.5 )

**说明:** 指定权重的最大 L1 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0.5”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_max( 2.0 ) ) );

```

#### alpha_min

**语法:** obj &lt;&lt; alpha_min( number=0.0 )

**说明:** 指定权重的最小 L1 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( alpha_min( 0.0 ) ) );

```

#### bagging_by_query

**语法:** obj &lt;&lt; bagging_by_query( state=0 )

**说明:** 指定是否强制逐行构建直方图。启用该选项可降低内存成本，尤其适用于样本量较大且与较小 Bagging 比例或 GOSS 样本策略关联的数据。该选项不可与“强制逐列”同时使用。 默认为“0”。

**JMP添加的版本:** 19

#### bagging_fraction

**语法:** obj &lt;&lt; bagging_fraction( number=1 )

**说明:** 指定在每次迭代期间要抽样的行比例。该值必须在 0 到 1 之间。这是一种 Bagging。 默认为“1”。

**JMP添加的版本:** 19

#### bagging_fraction_max

**语法:** obj &lt;&lt; bagging_fraction_max( number=1.0 )

**说明:** 指定在每次迭代期间要抽样的最大行比例。该值必须在 0 到 1 之间。这是一种 Bagging。 默认为“1.0”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_max( 1.0 ) ) );

```

#### bagging_fraction_min

**语法:** obj &lt;&lt; bagging_fraction_min( number=0.3 )

**说明:** 指定在每次迭代期间要抽样的最小行比例。该值必须在 0 到 1 之间。这是一种 Bagging。 默认为“0.3”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( bagging_fraction_min( 0.3 ) ) );

```

#### bagging_freq

**语法:** obj &lt;&lt; bagging_freq( number=0 )

**说明:** 指定 bagging 的频率。该值决定了抽取新的训练数据随机样本以训练模型的迭代次数。 默认为“0”。

**JMP添加的版本:** 19

#### bagging_seed

**语法:** obj &lt;&lt; bagging_seed( number=3 )

**说明:** 指定用于 Bagging 随机数生成器的种子。 默认为“3”。

**JMP添加的版本:** 19

#### base_score

**语法:** obj &lt;&lt; base_score( number=0.5 )

**说明:** 指定所有实例的初始预测得分，即全局偏倚。y 的均值通常是一个不错的选择。 默认为“0.5”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( base_score( 0.5 ) ) );

```

#### bin_construct_sample_cnt

**语法:** obj &lt;&lt; bin_construct_sample_cnt( number=200000 )

**说明:** 指定为构造特征离散箱而抽取的观测数。若该值设置过小，可能会遇到意外错误并导致准确度下降。 默认为“200000”。

**JMP添加的版本:** 19

#### boost_from_average

**语法:** obj &lt;&lt; boost_from_average( state=1 )

**说明:** 指定初始预测是设置为响应变量的平均值还是设置为常数零。该选项仅用在回归、二元、多类和交叉熵目标中。 默认开启。

**JMP添加的版本:** 19

#### booster

**语法:** obj &lt;&lt; booster( "gbtree"|"gblinear"|"dart"="gbtree" )

**说明:** 指定要使用的提升器。 默认为“gbtree”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gbtree" ) ) );

```

#### boosting

**语法:** obj &lt;&lt; boosting( "gbdt"|"rf"|"dart"="gbdt" )

**说明:** 指定在模型训练过程中使用的提升策略。 默认为“gbdt”。

**JMP添加的版本:** 19

#### cat_l2

**语法:** obj &lt;&lt; cat_l2( number=10 )

**说明:** 指定分类特征的 L2 正则化值。 默认为“10”。

**JMP添加的版本:** 19

#### cat_l2_max

**语法:** obj &lt;&lt; cat_l2_max( number=15 )

**说明:** 指定分类特征的最大 L2 正则化值。 默认为“15”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_max( 2.0 ) ) );

```

#### cat_l2_min

**语法:** obj &lt;&lt; cat_l2_min( number=5 )

**说明:** 指定分类特征的最小 L2 正则化值。 默认为“5”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( cat_l2_min( 0.0 ) ) );

```

#### cat_smooth

**语法:** obj &lt;&lt; cat_smooth( number=10 )

**说明:** 指定用于减少分类特征中噪声影响的正则化值，特别是对于那些观测很少的类别。 默认为“10”。

**JMP添加的版本:** 19

#### cegb_penalty_split

**语法:** obj &lt;&lt; cegb_penalty_split( number=0 )

**说明:** 默认为“0”。

**JMP添加的版本:** 19

#### cegb_tradeoff

**语法:** obj &lt;&lt; cegb_tradeoff( number=1 )

**说明:** 默认为“1”。

**JMP添加的版本:** 19

#### colsample_bylevel

**语法:** obj &lt;&lt; colsample_bylevel( number=1.0 )

**说明:** 指定每个水平要抽样的列比例。对于树中达到的每个新深度水平，都会进行一次抽样。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bylevel( 1.0 ) ) );

```

#### colsample_bynode

**语法:** obj &lt;&lt; colsample_bynode( number=1.0 )

**说明:** 指定每个节点（拆分）要抽样的列比例。每次评估新拆分时，都会进行一次抽样。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bynode( 1.0 ) ) );

```

#### colsample_bytree

**语法:** obj &lt;&lt; colsample_bytree( number=1.0 )

**说明:** 指定构造每棵树时要抽样的列比例。每棵树抽样一次。该值必须在 0 到 1 之间。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree( 1.0 ) ) );

```

#### colsample_bytree_max

**语法:** obj &lt;&lt; colsample_bytree_max( number=1.0 )

**说明:** 指定构造每棵树时要抽样的最大列比例。每棵树抽样一次。该值必须在 0 到 1 之间。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_max( 1.0 ) ) );

```

#### colsample_bytree_min

**语法:** obj &lt;&lt; colsample_bytree_min( number=0.5 )

**说明:** 指定构造每棵树时要抽样的最小列比例。每棵树抽样一次。该值必须在 0 到 1 之间。 默认为“0.5”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( colsample_bytree_min( 0.3 ) ) );

```

#### data_random_seed

**语法:** obj &lt;&lt; data_random_seed( number=1 )

**说明:** 指定在对数据抽样以构造直方图箱时用于随机数生成器的种子。 默认为“1”。

**JMP添加的版本:** 19

#### data_sample_strategy

**语法:** obj &lt;&lt; data_sample_strategy( "bagging"|"goss"="bagging" )

**说明:** 指定在每次提升迭代中用于抽样的策略。 默认为“bagging”。

**JMP添加的版本:** 19

#### deterministic

**语法:** obj &lt;&lt; deterministic( state=0 )

**说明:** 指定结果可复现。将该选项设置为 true 可确保在使用相同的数据样本和参数时，不同线程数下获得稳定的结果。该选项有助于实现可复现性。 默认为“0”。

**JMP添加的版本:** 19

#### device_type

**语法:** obj &lt;&lt; device_type( "cpu"|"gpu"="cpu" )

**说明:** 指定是否使用 CPU 或 GPU 设备。 默认为“cpu”。

**JMP添加的版本:** 19

#### drop_rate

**语法:** obj &lt;&lt; drop_rate( number=0.1 )

**说明:** 指定 DART 提升过程中在退出阶段要丢弃的先前树的比例。 默认为“0.1”。

**JMP添加的版本:** 19

#### drop_seed

**语法:** obj &lt;&lt; drop_seed( number=4 )

**说明:** 指定用于 DART 提升中的退出过程的种子。 默认为“4”。

**JMP添加的版本:** 19

#### early_stopping_min_delta

**语法:** obj &lt;&lt; early_stopping_min_delta( number=0 )

**说明:** 指定训练量度在每次迭代中必须改进的最小值。否则，使用提前停止回合时，训练过程将停止。 默认为“0”。

**JMP添加的版本:** 19

#### early_stopping_round

**语法:** obj &lt;&lt; early_stopping_round( number=0 )

**说明:** 指定在训练量度没有改善的情况下继续训练的最大迭代次数。值为零意味着不提前停止。 默认为“0”。

**JMP添加的版本:** 19

#### enable_bundle

**语法:** obj &lt;&lt; enable_bundle( state=1 )

**说明:** 指定是否使用互斥特征捆绑。若将该选项设置为 false，对于稀疏数据集，训练速度可能会较慢。 默认开启。

**JMP添加的版本:** 19

#### eval_at

**语法:** obj &lt;&lt; eval_at( text=1,2,3,4,5 )

**说明:** 用于在使用 NDGG 或 MAP 量度对模型排名时指定截止点。 默认为“1,2,3,4,5”。

**JMP添加的版本:** 19

#### eval_metric

**语法:** obj &lt;&lt; eval_metric( text )

**说明:** Especifica la métrica mostrada en el gráfico del historial de iteraciones pero no afecta al ajuste del modelo real. Deje este valor en blanco para que se aplique la métrica predeterminada correspondiente a la función objetivo o especifique uno de los siguientes: rmse, rmsle, mae, logloss, error, error@t, merror, auc, aucpr, ndcg, map, ndcg@n, map@n, ndcg-, map-, ndcg@n-, map@n-, poisson-nloglik, gamma-nloglik, cox-nloglik, gamma-deviance, tweedie-nloglik.

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( eval_metric( rmse ) ) );

```

#### extra_seed

**语法:** obj &lt;&lt; extra_seed( number=6 )

**说明:** 指定在指定了额外树选项时用于选择阈值的种子。 默认为“6”。

**JMP添加的版本:** 19

#### extra_trees

**语法:** obj &lt;&lt; extra_trees( state=0 )

**说明:** 指定是否使用极度随机树。该选项不会为每个特征评估所有可能的拆分点来寻找最优拆分，而是在每个节点随机选择一部分特征。对于每个选定的特征，该选项会随机选择一个阈值对拆分节点进行评估。 默认为“0”。

**JMP添加的版本:** 19

#### fair_c

**语法:** obj &lt;&lt; fair_c( number=1 )

**说明:** 指定控制公平目标损失的平滑度的参数。 默认为“1”。

**JMP添加的版本:** 19

#### feature_fraction

**语法:** obj &lt;&lt; feature_fraction( number=1 )

**说明:** 指定构造每棵树时要抽样的列比例。每棵树抽样一次。该值必须在 0 到 1 之间。 默认为“1”。

**JMP添加的版本:** 19

#### feature_fraction_bynode

**语法:** obj &lt;&lt; feature_fraction_bynode( number=1 )

**说明:** 指定在训练过程中随机选择的特征比例。值为 0.75 意味着 75% 的特征被随机选择用于训练。 默认为“1”。

**JMP添加的版本:** 19

#### feature_fraction_max

**语法:** obj &lt;&lt; feature_fraction_max( number=1.0 )

**说明:** 指定构造每棵树时要抽样的最大列比例。每棵树抽样一次。该值必须在 0 到 1 之间。 默认为“1.0”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_max( 1.0 ) ) );

```

#### feature_fraction_min

**语法:** obj &lt;&lt; feature_fraction_min( number=0.2 )

**说明:** 指定构造每棵树时要抽样的最小列比例。每棵树抽样一次。该值必须在 0 到 1 之间。 默认为“0.2”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( feature_fraction_min( 0.2 ) ) );

```

#### feature_fraction_seed

**语法:** obj &lt;&lt; feature_fraction_seed( number=2 )

**说明:** 指定用于特征比例随机数生成器的种子。 默认为“2”。

**JMP添加的版本:** 19

#### feature_pre_filter

**语法:** obj &lt;&lt; feature_pre_filter( state=1 )

**说明:** 指定是否根据每个叶中最小观测的指定值忽略不可拆分的特征。若将该选项设为 false，训练速度可能较慢。 默认开启。

**JMP添加的版本:** 19

#### feature_selector

**语法:** obj &lt;&lt; feature_selector( "cyclic"|"shuffle"|"greedy"|"thrifty"="cyclic" )

**说明:** 指定线性提升器的特征选择和排序方法。 默认为“cyclic”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "gblinear" ),	Fit( feature_selector( "cyclic" ) ));

```

#### force_col_wise

**语法:** obj &lt;&lt; force_col_wise( state=0 )

**说明:** 指定是否强制逐列构建直方图。启用该选项可降低内存成本，尤其适用于特征较多的数据。该选项不可与“强制逐行”同时使用。 默认为“0”。

**JMP添加的版本:** 19

#### force_row_wise

**语法:** obj &lt;&lt; force_row_wise( state=0 )

**说明:** 默认为“0”。

**JMP添加的版本:** 19

#### gamma

**语法:** obj &lt;&lt; gamma( number=0.0 )

**说明:** 指定在树的叶节点上进一步分区所需的最小损失减少量。 默认为“0.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( Gamma( 0.0 ) ) );

```

#### gpu_device_id

**语法:** obj &lt;&lt; gpu_device_id( number=-1 )

**说明:** 指定使用 GPU 时的设备编号。 默认为“-1”。

**JMP添加的版本:** 19

#### gpu_platform_id

**语法:** obj &lt;&lt; gpu_platform_id( number=-1 )

**说明:** 指定使用 GPU 时的平台编号。 默认为“-1”。

**JMP添加的版本:** 19

#### gpu_use_dp

**语法:** obj &lt;&lt; gpu_use_dp( state=0 )

**说明:** 指定是否在 GPU 上使用双精度运算。 默认为“0”。

**JMP添加的版本:** 19

#### grow_policy

**语法:** obj &lt;&lt; grow_policy( "depthwise"|"lossguide"="depthwise" )

**说明:** 指定用于将新节点添加到树的方法。当前，该选项仅在 tree_method=hist 时适用。 默认为“depthwise”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( grow_policy( "depthwise" ) ) );

```

#### histogram_pool_size

**语法:** obj &lt;&lt; histogram_pool_size( number=-1 )

**说明:** 指定历史直方图的最大内存大小 (MB)。 默认为“-1”。

**JMP添加的版本:** 19

#### interaction_constraints

**语法:** obj &lt;&lt; interaction_constraints( text )

**说明:** 使用括号将特征交互作用约束指定为特征指标的嵌套列表。分组在一起的特征只能彼此交互。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost(	Y( :Weight ),	X( :Age, :Height ),	Fit( interaction_constraints( "[[0,1]]" ) ));

```

#### is_enable_sparse

**语法:** obj &lt;&lt; is_enable_sparse( state=1 )

**说明:** 指定是否启用稀疏优化。 默认开启。

**JMP添加的版本:** 19

#### is_unbalance

**语法:** obj &lt;&lt; is_unbalance( state=0 )

**说明:** 指定训练数据集在二元和多类回归中是否不平衡。 默认为“0”。

**JMP添加的版本:** 19

#### iterations

**语法:** obj &lt;&lt; iterations( number=30 )

**说明:** 指定提升迭代次数。 默认为“30”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations( 100 ) ) );

```

#### iterations_max

**语法:** obj &lt;&lt; iterations_max( number=100 )

**说明:** 指定最大提升迭代次数。 默认为“100”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_max( 300 ) ) );

```

#### iterations_min

**语法:** obj &lt;&lt; iterations_min( number=20 )

**说明:** 指定最小提升迭代次数。 默认为“20”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( iterations_min( 20 ) ) );

```

#### lambda

**语法:** obj &lt;&lt; lambda( number=1.0 )

**说明:** 指定权重的 L2 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda( 1.0 ) ) );

```

#### lambda_l1

**语法:** obj &lt;&lt; lambda_l1( number=0 )

**说明:** 指定权重的 L1 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0”。

**JMP添加的版本:** 19

#### lambda_l1_max

**语法:** obj &lt;&lt; lambda_l1_max( number=2.0 )

**说明:** 指定权重的最大 L1 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“2.0”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_max( 2.0 ) ) );

```

#### lambda_l1_min

**语法:** obj &lt;&lt; lambda_l1_min( number=0.0 )

**说明:** 指定权重的最小 L1 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0.0”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l1_min( 0.0 ) ) );

```

#### lambda_l2

**语法:** obj &lt;&lt; lambda_l2( number=0 )

**说明:** 指定权重的 L2 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0”。

**JMP添加的版本:** 19

#### lambda_l2_max

**语法:** obj &lt;&lt; lambda_l2_max( number=2.0 )

**说明:** 指定权重的最大 L2 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“2.0”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_max( 2.0 ) ) );

```

#### lambda_l2_min

**语法:** obj &lt;&lt; lambda_l2_min( number=0.0 )

**说明:** 指定权重的最小 L2 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0.0”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_l2_min( 0.0 ) ) );

```

#### lambda_max

**语法:** obj &lt;&lt; lambda_max( number=2.0 )

**说明:** 指定权重的最大 L2 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“2.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_max( 2.0 ) ) );

```

#### lambda_min

**语法:** obj &lt;&lt; lambda_min( number=0.0 )

**说明:** 指定权重的最小 L2 正则化项。增加该值会使模型更加保守。该值必须为非负值。 默认为“0.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( lambda_min( 0.0 ) ) );

```

#### lambdarank_norm

**语法:** obj &lt;&lt; lambdarank_norm( state=1 )

**说明:** 指定是否对不同查询的 lambda 进行标准化处理，以提升在不平衡数据中的性能。 默认开启。

**JMP添加的版本:** 19

#### lambdarank_position_bias_regularization

**语法:** obj &lt;&lt; lambdarank_position_bias_regularization( number=0 )

**说明:** 指定用于控制 LambdaRank 目标的位置信息偏倚的值。较大的值可减少推断出的位置偏倚因子。 默认为“0”。

**JMP添加的版本:** 19

#### lambdarank_truncation_level

**语法:** obj &lt;&lt; lambdarank_truncation_level( number=30 )

**说明:** 指定用于控制 LambdaRank 目标训练期间模型应关注的顶部结果数量的参数。 默认为“30”。

**JMP添加的版本:** 19

#### learning_rate

**语法:** obj &lt;&lt; learning_rate( number=0.3 )

**说明:** 指定学习率。较小的学习率往往拟合效果更好，但需要更多次迭代才能收敛，而较大的学习率拟合更快。 默认为“0.3”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate( 0.3 ) ) );

```

#### learning_rate_max

**语法:** obj &lt;&lt; learning_rate_max( number=0.4 )

**说明:** 指定最大学习率。较小的学习率往往拟合效果更好，但需要更多次迭代才能收敛，而较大的学习率拟合更快。 默认为“0.4”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_max( 0.4 ) ) );

```

#### learning_rate_min

**语法:** obj &lt;&lt; learning_rate_min( number=0.05 )

**说明:** 指定最小学习率。较小的学习率往往拟合效果更好，但需要更多次迭代才能收敛，而较大的学习率拟合更快。 默认为“0.05”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( learning_rate_min( 0.05 ) ) );

```

#### linear_lambda

**语法:** obj &lt;&lt; linear_lambda( number=0.0 )

**说明:** 指定线性树的正则化参数。 默认为“0.0”。

**JMP添加的版本:** 19

#### linear_tree

**语法:** obj &lt;&lt; linear_tree( state=0 )

**说明:** 指定是否拟合分段线性梯度提升树。拆分仍按常规方式选择，但每个叶子处的模型为线性而非常量。 默认为“0”。

**JMP添加的版本:** 19

#### max_bin

**语法:** obj &lt;&lt; max_bin( number=256 )

**说明:** 指定要将连续特征存储到其中的最大离散箱个数。该选项仅适用于 tree_method=hist。 默认为“256”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_bin( 256 ) ) );

```

#### max_bin_by_feature

**语法:** obj &lt;&lt; max_bin_by_feature( text )

**说明:** 指定每个特征的最大箱个数。

**JMP添加的版本:** 19

#### max_cat_threshold

**语法:** obj &lt;&lt; max_cat_threshold( number=32 )

**说明:** 指定拆分分类特征时要考虑的唯一类别最大数量的阈值。较大的值会进行更全面的最优分类拆分搜索，但花费的训练时间会更长。 默认为“32”。

**JMP添加的版本:** 19

#### max_cat_to_onehot

**语法:** obj &lt;&lt; max_cat_to_onehot( number=4 )

**说明:** Specifies the maximum number of categories that a categorical feature can have to use the one-vs-other split algorithm. Categorical features with more than the maximum number of categories are handled by a different algorithm. 默认为“4”。

**JMP添加的版本:** 19

#### max_delta_step

**语法:** obj &lt;&lt; max_delta_step( number=0.0 )

**说明:** 指定每个叶输出可以取的最大增量步长。 默认为“0.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_delta_step( 0.0 ) ) );

```

#### max_depth

**语法:** obj &lt;&lt; max_depth( number=6 )

**说明:** 指定树的最大深度。该值必须是整数。复杂度随着深度的增加而增加。具有更大 max_depth 的模型有更高的过拟合风险。 默认为“6”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth( 6 ) ) );

```

#### max_depth_max

**语法:** obj &lt;&lt; max_depth_max( number=8 )

**说明:** 指定树的最大深度最大值。该值必须是整数。复杂度随着深度的增加而增加。深度为 2^depth 以及更大深度的模型有更高的过度拟合风险。 默认为“8”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_max( 9 ) ) );

```

#### max_depth_min

**语法:** obj &lt;&lt; max_depth_min( number=1 )

**说明:** 指定树的最大深度最小值。该值必须是整数。复杂度随着深度的增加而增加。深度为 2^depth 以及更大深度的模型有更高的过度拟合风险。 默认为“1”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_depth_min( 3 ) ) );

```

#### max_drop

**语法:** obj &lt;&lt; max_drop( number=50 )

**说明:** 指定每次 DART 提升迭代中允许丢弃的树的最大数量。 默认为“50”。

**JMP添加的版本:** 19

#### max_leaves

**语法:** obj &lt;&lt; max_leaves( number=0 )

**说明:** 指定要添加的最大节点数。该选项仅适用于 grow_policy=lossguide。 默认为“0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( max_leaves( 0 ) ) );

```

#### metric

**语法:** obj &lt;&lt; metric( "default"|"l1"|"l2"|"rmse"|"quantile"|"mape"|"huber"|"fair"|"poisson"|"gamma"|"gamma_deviance"|"tweedie"|"ndcg"|"map"|"auc"|"average_precision"|"binary_logloss"|"binary_error"|"auc_mu"|"multi_logloss"|"multi_error"|"cross_entropy"|"cross_entropy_lambda"|"kulback_leibler"="default" )

**说明:** 指定同时在训练集和验证集中计算的量度。 默认为“default”。

**JMP添加的版本:** 19

#### min_child_weight

**语法:** obj &lt;&lt; min_child_weight( number=1.0 )

**说明:** 指定子级中所需的实例权重 (Hessian) 的最小总和。该值是每个叶子的最小大小。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight( 1.0 ) ) );

```

#### min_child_weight_max

**语法:** obj &lt;&lt; min_child_weight_max( number=3.0 )

**说明:** 指定子级中所需的实例权重 (Hessian) 的最大总和。该值是每个叶子的最大大小。 默认为“3.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_max( 10.0 ) ) );

```

#### min_child_weight_min

**语法:** obj &lt;&lt; min_child_weight_min( number=1.0 )

**说明:** 指定子级中所需的实例权重 (Hessian) 的最小总和。该值是每个叶子的最小大小。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_child_weight_min( 1.0 ) ) );

```

#### min_data_in_bin

**语法:** obj &lt;&lt; min_data_in_bin( number=3 )

**说明:** 随机梯度提升会指定包含在每个箱内的最小观测数。 默认为“3”。

**JMP添加的版本:** 19

#### min_data_in_leaf

**语法:** obj &lt;&lt; min_data_in_leaf( number=20 )

**说明:** 指定每个叶中的最小观测数。 默认为“20”。

**JMP添加的版本:** 19

#### min_data_per_group

**语法:** obj &lt;&lt; min_data_per_group( number=100 )

**说明:** 指定分类特征中每个分类组的最小观测数。 默认为“100”。

**JMP添加的版本:** 19

#### min_gain_to_split

**语法:** obj &lt;&lt; min_gain_to_split( number=0 )

**说明:** 指定树的最大深度。该值必须是整数。复杂度随着深度的增加而增加。具有更大 max_depth 的模型有更高的过拟合风险。 默认为“0”。

**JMP添加的版本:** 19

#### min_sum_hessian_in_leaf

**语法:** obj &lt;&lt; min_sum_hessian_in_leaf( number=0.001 )

**说明:** 指定子级中所需的实例权重 (Hessian) 的最小总和。该值是每个叶子的最小大小。 默认为“0.001”。

**JMP添加的版本:** 19

#### min_sum_hessian_in_leaf_max

**语法:** obj &lt;&lt; min_sum_hessian_in_leaf_max( number=10.0 )

**说明:** 指定子级中所需的实例权重 (Hessian) 的最大总和。该值是每个叶子的最大大小。 默认为“10.0”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_max( 10.0 ) ) );

```

#### min_sum_hessian_in_leaf_min

**语法:** obj &lt;&lt; min_sum_hessian_in_leaf_min( number=0.5 )

**说明:** 指定子级中所需的实例权重 (Hessian) 的最小总和。该值是每个叶子的最小大小。 默认为“0.5”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( min_sum_hessian_in_leaf_min( 0.5 ) ) );

```

#### monotone_constraints

**语法:** obj &lt;&lt; monotone_constraints( text=None )

**说明:** 指定每个特征的单调性约束。约束必须使用括号内逗点分隔的值列表指定，其中 -1 表示负值，1 表示正值，0 表示无约束。 默认为“None”。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );:Age << Set Modeling Type( "Continuous" );dt << XGBoost( Y( :Weight ), X( :Age, :Height ), Fit( monotone_constraints( "(1,1)" ) ) );

```

#### monotone_constraints_method

**语法:** obj &lt;&lt; monotone_constraints_method( "basic"|"intermediate"|"advanced"="basic" )

**说明:** 指定当约束设置为强制时用于单调约束的方法。 默认为“basic”。

**JMP添加的版本:** 19

#### monotone_penalty

**语法:** obj &lt;&lt; monotone_penalty( number=0 )

**说明:** 将约束设置为强制时，指定单调约束的严格程度。指定的 K 值将禁止在树的前 K 个水平上进行任何单调拆分。值越大，在早期建树过程中产生的惩罚越强。 默认为“0”。

**JMP添加的版本:** 19

#### multi_error_top_k

**语法:** obj &lt;&lt; multi_error_top_k( number=1 )

**说明:** 指定多类分类中前 k 个多错误量度的阈值。 默认为“1”。

**JMP添加的版本:** 19

#### neg_bagging_fraction

**语法:** obj &lt;&lt; neg_bagging_fraction( number=1 )

**说明:** 指定用于调整不平衡二元回归中负样本抽样过程的值。 默认为“1”。

**JMP添加的版本:** 19

#### normalize_type

**语法:** obj &lt;&lt; normalize_type( "tree"|"forest"="tree" )

**说明:** 指定 DART 提升器的标准化算法的类型。 默认为“tree”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( normalize_type( "tree" ) ));

```

#### nthread

**语法:** obj &lt;&lt; nthread( number=0 )

**说明:** 指定用于运行 XGBoost 的并行线程数。默认情况下，使用所有可用线程。 默认为“0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( nthread( 8 ) ) );

```

#### num_grad_quant_bins

**语法:** obj &lt;&lt; num_grad_quant_bins( number=4 )

**说明:** 在使用量化梯度时，指定用于量化梯度和 Hessian 矩阵的箱数。值越大，量化训练的效果越接近全精度训练。 默认为“4”。

**JMP添加的版本:** 19

#### num_iteration_predict

**语法:** obj &lt;&lt; num_iteration_predict( number=-1 )

**说明:** 指定要预测的迭代次数。 默认为“-1”。

**JMP添加的版本:** 19

#### num_iterations

**语法:** obj &lt;&lt; num_iterations( number=100 )

**说明:** 指定提升迭代次数。 默认为“100”。

**JMP添加的版本:** 19

#### num_iterations_max

**语法:** obj &lt;&lt; num_iterations_max( number=100 )

**说明:** 指定最大提升迭代次数。 默认为“100”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_max( 100 ) ) );

```

#### num_iterations_min

**语法:** obj &lt;&lt; num_iterations_min( number=20 )

**说明:** 指定最小提升迭代次数。 默认为“20”。

**JMP添加的版本:** 19

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_iterations_min( 20 ) ) );

```

#### num_leaves

**语法:** obj &lt;&lt; num_leaves( number=31 )

**说明:** 指定每棵树上的最大叶数。 默认为“31”。

**JMP添加的版本:** 19

#### num_parallel_tree

**语法:** obj &lt;&lt; num_parallel_tree( number=1 )

**说明:** 指定要并行增长的提升树的个数。然后将结果平均。 默认为“1”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( num_parallel_tree( 1 ) ) );

```

#### num_threads

**语法:** obj &lt;&lt; num_threads( number=0 )

**说明:** 指定线程数。为获得最佳速度，请将其设置为与 CPU 核心数相同。 默认为“0”。

**JMP添加的版本:** 19

#### objective

**语法:** obj &lt;&lt; objective( "reg:squarederror"|"binary:logistic"|"binary:hinge"|"count:poisson"|"multi:softprob"|"rank:pairwise"|"rank:ndcg"|"rank:map"|"reg:gamma"|"reg:logistic"|"reg:pseudohubererror"|"reg:squaredlogerror"|"reg:tweedie"|"survival:cox"="reg:squarederror" )

**说明:** 指定要为模型拟合优化的函数。该函数必须与响应的建模类型一致。 默认为“reg:squarederror”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), objective( "reg:squarederror" ) );

```

#### objective_seed

**语法:** obj &lt;&lt; objective_seed( number=5 )

**说明:** Specifies the seed that is used in the random number generator for the objective parameter. 默认为“5”。

**JMP添加的版本:** 19

#### one_drop

**语法:** obj &lt;&lt; one_drop( number=0 )

**说明:** 在 DART 提升器中启用该标志后，在退出过程中始终至少删除一棵树。 默认为“0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), one_drop( 0 ) ) );

```

#### other_rate

**语法:** obj &lt;&lt; other_rate( number=0.1 )

**说明:** 指定 GOSS 数据抽样策略中保留小梯度数据的比率。 默认为“0.1”。

**JMP添加的版本:** 19

#### path_smooth

**语法:** obj &lt;&lt; path_smooth( number=0 )

**说明:** 默认为“0”。

**JMP添加的版本:** 19

#### poisson_max_delta_step

**语法:** obj &lt;&lt; poisson_max_delta_step( number=0.7 )

**说明:** 指定一个用于限制 Poisson 模型叶节点最大预测贡献的值。 默认为“0.7”。

**JMP添加的版本:** 19

#### pos_bagging_fraction

**语法:** obj &lt;&lt; pos_bagging_fraction( number=1 )

**说明:** 指定用于调整不平衡二元回归中正样本抽样过程的值。 默认为“1”。

**JMP添加的版本:** 19

#### pred_early_stop

**语法:** obj &lt;&lt; pred_early_stop( state=0 )

**说明:** 指定是否在分类和排名应用程序中强制预测提前停止。若将该选项设置为 true，预测速度可能加快，但准确度可能会受到影响。 默认为“0”。

**JMP添加的版本:** 19

#### pred_early_stop_freq

**语法:** obj &lt;&lt; pred_early_stop_freq( number=10 )

**说明:** 指定在指定了预测提前停止时，检查预测提前停止的频率。 默认为“10”。

**JMP添加的版本:** 19

#### pred_early_stop_margin

**语法:** obj &lt;&lt; pred_early_stop_margin( number=10 )

**说明:** Specifies the threshold margin in prediction early stopping when prediction early stopping is specified. This parameter enables the prediction process to stop early if the margin is far enough from the threshold. 默认为“10”。

**JMP添加的版本:** 19

#### predict_disable_shape_check

**语法:** obj &lt;&lt; predict_disable_shape_check( state=0 )

**说明:** 指定在预测用的数据的特征数量与训练数据不同时，是否引发错误。 默认为“0”。

**JMP添加的版本:** 19

#### predictor

**语法:** obj &lt;&lt; predictor( "auto"|"cpu_predictor"|"gpu_predictor"="auto" )

**说明:** 指定预测变量算法的类型。 默认为“auto”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( predictor( "cpu_predictor" ) ) );

```

#### process_type

**语法:** obj &lt;&lt; process_type( "default"|"update"="default" )

**说明:** 指定要运行的提升过程的类型。 默认为“default”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( process_type( "default" ) ) );

```

#### quant_train_renew_leaf

**语法:** obj &lt;&lt; quant_train_renew_leaf( state=0 )

**说明:** 指定在量化训练生效时，是否用原始梯度更新叶值。该选项可提升量化训练中对目标排名的准确度。 默认为“0”。

**JMP添加的版本:** 19

#### rate_drop

**语法:** obj &lt;&lt; rate_drop( number=0.0 )

**说明:** 指定 DART 提升器的退出率。 默认为“0.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), rate_drop( 0.0 ) ) );

```

#### refresh_leaf

**语法:** obj &lt;&lt; refresh_leaf( number=1 )

**说明:** 指定刷新更新程序的参数。若设置为 1，则叶子和节点将更新。若设置为 0，则仅更新节点。 默认为“1”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( refresh_leaf( 1 ) ) );

```

#### reg_sqrt

**语法:** obj &lt;&lt; reg_sqrt( state=0 )

**说明:** 指定是否拟合回归模型中响应变量的平方根而不是原始值。 默认为“0”。

**JMP添加的版本:** 19

#### sample_type

**语法:** obj &lt;&lt; sample_type( "uniform"|"weighted"="uniform" )

**说明:** 指定 DART 提升器的抽样算法的类型。 默认为“uniform”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Booster( "dart" ),	Fit( sample_type( "uniform" ) ));

```

#### scale_pos_weight

**语法:** obj &lt;&lt; scale_pos_weight( number=1.0 )

**说明:** 指定正权重和负权重的平衡，这对于不平衡的类很有用。要考虑的典型值是总和（负实例）/总和（正实例）。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( scale_posweight( 1.0 ) ) );

```

#### seed

**语法:** obj &lt;&lt; seed( number=0 )

**说明:** 指定随机数生成器的种子。设置该值可重现结果。 默认为“0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( seed( 0 ) ) );

```

#### sigmoid

**语法:** obj &lt;&lt; sigmoid( number=1 )

**说明:** 指定二元和多类模型中的 S 形函数的参数。 默认为“1”。

**JMP添加的版本:** 19

#### sketch_eps

**语法:** obj &lt;&lt; sketch_eps( number=0.03 )

**说明:** 仅用于 tree_method=approx，该值近似转换为 (1 / sketch_eps) = 箱数。 默认为“0.03”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( sketch_eps( 0.03 ) ) );

```

#### skip_drop

**语法:** obj &lt;&lt; skip_drop( number=0.0 )

**说明:** 指定在 DART 提升迭代期间跳过退出过程的概率。 默认为“0.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "dart" ), skip_drop( 0.0 ) ) );

```

#### start_iteration_predict

**语法:** obj &lt;&lt; start_iteration_predict( number=0 )

**说明:** 指定要预测的起始迭代。 默认为“0”。

**JMP添加的版本:** 19

#### stochastic_rounding

**语法:** obj &lt;&lt; stochastic_rounding( state=1 )

**说明:** 指定是否在梯度量化中使用随机舍入。 默认开启。

**JMP添加的版本:** 19

#### subsample

**语法:** obj &lt;&lt; subsample( number=1.0 )

**说明:** 指定在每次迭代期间要抽样的行比例。该值必须在 0 到 1 之间。这是一种 Bagging。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample( 1.0 ) ) );

```

#### subsample_max

**语法:** obj &lt;&lt; subsample_max( number=1.0 )

**说明:** 指定在每次迭代期间要抽样的最大行比例。该值必须在 0 到 1 之间。这是一种 Bagging。 默认为“1.0”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_max( 1.0 ) ) );

```

#### subsample_min

**语法:** obj &lt;&lt; subsample_min( number=0.5 )

**说明:** 指定在每次迭代期间要抽样的最小行比例。该值必须在 0 到 1 之间。这是一种 Bagging。 默认为“0.5”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( subsample_min( 0.3 ) ) );

```

#### top_k

**语法:** obj &lt;&lt; top_k( number=256 )

**说明:** 指定要在贪婪和节俭特征选择器中选择的顶级特征个数。该选项仅适用于 gblinear 提升器。 默认为“256”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( booster( "gblinear" ), top_k( 0 ) ) );

```

#### top_rate

**语法:** obj &lt;&lt; top_rate( number=0.2 )

**说明:** 指定 GOSS 数据抽样策略中保留大梯度数据的比率。 默认为“0.2”。

**JMP添加的版本:** 19

#### tree_method

**语法:** obj &lt;&lt; tree_method( "auto"|"exact"|"approx"|"hist"|"gpu_exact"|"gpu_hist"="auto" )

**说明:** 指定 XGBoost 中使用的树构造算法。 默认为“auto”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( tree_method( "auto" ) ) );

```

#### tweedie_variance_power

**语法:** obj &lt;&lt; tweedie_variance_power( number=1.5 )

**说明:** 指定 Tweedie 分布的功效。该值必须在 1 和 2 之间。该选项仅适用于 objective=reg:tweedie。 默认为“1.5”。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost(	Y( :Weight ),	X( :Height ),	Fit( objective( "reg:tweedie" ), tweedie_variance_power( 1.5 ) ));

```

#### uniform_drop

**语法:** obj &lt;&lt; uniform_drop( state=0 )

**说明:** Specifies whether to select trees for dropping in DART boosting using uniform probability. 默认为“0”。

**JMP添加的版本:** 19

#### updater

**语法:** obj &lt;&lt; updater( text )

**说明:** Especifique el actualizador de árboles que ejecutar para el impulsor gbtree. Especifique uno de los siguientes: grow_colmaker, distcol, grow_histmaker, grow_local_histmaker, grow_skmaker, sync, refresh, prune. For the gblinear booster, specify either shotgun or coord_descent.

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << XGBoost( Y( :Weight ), X( :Height ), Fit( updater( "grow_colmaker" ) ) );

```

#### use_missing

**语法:** obj &lt;&lt; use_missing( state=1 )

**说明:** 指定是否强制对缺失值进行特殊处理。 默认开启。

**JMP添加的版本:** 19

#### use_quantized_grad

**语法:** obj &lt;&lt; use_quantized_grad( state=0 )

**说明:** 指定在训练时是否使用梯度量化。启用该选项后，梯度和 Hessian 矩阵将被离散化为箱，这在大多数情况下可加速训练且准确度损失很小。 默认为“0”。

**JMP添加的版本:** 19

#### xgboost_dart_mode

**语法:** obj &lt;&lt; xgboost_dart_mode( state=0 )

**说明:** 指定是否使用 XGBoost DART 模式。 默认为“0”。

**JMP添加的版本:** 19

#### zero_as_missing

**语法:** obj &lt;&lt; zero_as_missing( state=0 )

**说明:** 指定是否将所有零值视为缺失值。 默认为“0”。

**JMP添加的版本:** 19

