# Excel Profiler



## 共享项消息

### Action

**语法:** obj << Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**匿名预设**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

**在文件夹内搜索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**按名称搜索**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Column Switcher

**语法:** obj << Column Switcher(column reference, {column reference, ...}, < Title(title) >, < Close Outline(0|1) >, < Retain Axis Settings(0|1) >, < Layout(0|1) >)

**说明:** 添加用于更改平台变量的控制面板

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Data Table Window;

```

### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get Container

**语法:** obj << Get Container

**说明:** 返回对保留对象内容的容器框的引用。

**带过滤器的平台**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
gb = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :height ), Y( :weight ) ),
	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),
	Local Data Filter(
		Add Filter(
			columns( :age, :sex, :height ),
			Where( :age == {12, 13, 14} ),
			Where( :sex == "F" ),
			Where( :height >= 55 ),
			Display( :age, N Items( 6 ) )
		)
	)
);
New Window( "platform boxes",
	H List Box(
		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),
		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )
	)
);

```

**常规**

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**语法:** obj << Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Ignore Platform Preferences( 1 ),
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### New JSL Preset

**语法:** New JSL Preset( preset )

**说明:** For testing purposes, create a preset directly from a JSL expression. Like <<New Preset, it will return a Platform Preset that can be applied using <<Apply Preset. But it allows you to specify the full JSL expression for the preset to test outside of normal operation. You will get an Assert on apply if the platform names do not match, but that is expected.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
preset = obj << New JSL Preset( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) );
Wait( 1 );
obj << Apply Preset( preset );

```

### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Relaunch Analysis;

```

### Remove Column Switcher

**语法:** obj << Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);
Wait( 2 );
obj << Remove Column Switcher;

```

### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Report View( "Summary" );

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	By( :Sex ),
	SendToByGroup(
		{:sex == "F"},
		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )
	),
	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) )
);

```

### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );
dt << Life Distribution(
	Y( :Time ),
	Censor( :Censor ),
	Censor Code( 1 ),
	<<Fit Weibull,
	SendToEmbeddedScriptable(
		Dispatch(
			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},
			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}
		)
	)
);

```

### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## 关联的构造器

### Excel Profiler

**语法:** Excel Profiler(  Workbook( filename ), <Model( string )> ) )

**说明:** 提供一种机制，可将 Excel 数据传输到 JMP 中以便使用刻画器进行分析。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );

```

## 列

### Noise Factors

**语法:** obj = Excel Profiler(...<Noise Factors( column(s) )>...)

<b>启动窗口项: 是</b>

**说明:** 指定噪声因子，这些噪声因子必须是作为公式列成分的列。噪声因子用于研究与这些因子的传递变异相关的稳健性（或平稳性）。生成的刻画器包括公式对噪声因子的导数。

**刻画器示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**定制刻画器示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

**混料刻画器示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

**等高线刻画器示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

### Prediction Formula

**语法:** obj = Excel Profiler(...Prediction Formula( column(s) )...)

<b>启动窗口项: 是</b>

**说明:** 指定包含公式的响应列。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );

```

### Y

**语法:** obj = Excel Profiler(...Y( column(s) )...)

<b>启动窗口项: 是</b>

**说明:** 指定包含公式的响应列。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );

```

## 项消息

### Formulas for OPTMODEL

**语法:** obj << Formulas for OPTMODEL

**说明:** 将模型的预测公式保存到新文件中作为 PROC OPTMODEL 的 SAS 语句。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Formulas for OPTMODEL;

```

### Model

**语法:** obj << Model( string )

**说明:** 标识工作簿中要运行的模型。若没有指定模型，并且工作簿中只有一个模型，则 Excel 刻画器将会运行该模型。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ), Model( "Demand" ) );

```

### Prediction Profiler

**语法:** obj << Prediction Profiler( state=0|1 )

**说明:** 显示或隐藏“预测刻画器”。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Prediction Profiler( 1 );

```

### Save Expanded Formulas

**语法:** obj << Save Expanded Formulas

**说明:** 将新公式列保存至数据表。新列包含用作 Y 变量的公式中的已解析公式引用，以查看底层变量。仅在启动窗口中选择“展开中间公式”选项或在“刻画器”脚本中指定 Expand 消息后才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );
obj << Save Expanded Formulas;

```

### Show Formulas

**语法:** obj << Show Formulas

**说明:** 打开脚本窗口，它包含正在刻画的所有公式的 JSL。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );
obj << Show Formulas;

```

### Workbook

**语法:** obj << Workbook( text )

**说明:** 指定包含要用于刻画器的模型的 Excel 电子表格。

```jsl

Names Default To Here( 1 );
obj = Excel Profiler( Workbook( "$SAMPLE_IMPORT_DATA/Demand.xlsx" ) );

```

