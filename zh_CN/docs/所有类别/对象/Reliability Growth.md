# Reliability Growth



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

### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Copy Script;

```

### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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

### Local Data Filter

**语法:** obj << Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
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

### Paste Local Data Filter

**语法:** obj << Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter(
	Add Filter( columns( :Region ), Where( :Region == "MW" ) )
);
filter << Copy Local Data Filter;
dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );
Wait( 1 );
dist2 << Paste Local Data Filter;

```

### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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

### Remove Local Data Filter

**语法:** obj << Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
dist = dt << Distribution(
	Nominal Distribution( Column( :country ) ),
	Local Data Filter(
		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),
		Mode( Show( 1 ), Include( 1 ) )
	)
);
Wait( 2 );
dist << remove local data filter;

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
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Report View( "Summary" );

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours ),
	By( _bycol )
);
obj << Crow AMSAA;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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

### Sync to Data Table Changes

**语法:** obj << Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
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

### Reliability Growth

**语法:** obj = Reliability Growth( Input Format( Time to Event ), Time to Event( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Dates ), Timestamp( column, <column> ), <Event Count( column )>, <Phase( column )> );



obj = Reliability Growth( Input Format( Concurrent Systems ), Time to Event( column, column, ... ), System ID( column ), <Phase( column )> )



obj = Reliability Growth( Input Format( Parallel Systems ), Time to Event( column, column, ... ), <Event Count( column )>, System ID( column ), <Phase( column )> )

**说明:** 随着单个可修复系统不断接受系统设计的改进而对系统可靠性的变化建模。 该平台接受多种输入格式。请参见每种格式获取规格详细信息。

**事件时间**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

**并发系统**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Concurrent Systems.jmp" );
obj = dt << Reliability Growth(
	Input Format( Concurrent Systems ),
	Time to Event( :Prototype 1, :Prototype 2 ),
	System ID( :Failed System ),

);
obj << Crow AMSAA;

```

**并联系统**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

**日期**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);

```

## 项消息

### Crow AMSAA

**语法:** obj << Crow AMSAA

**说明:** 拟合 Crow-AMSAA 模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;

```

### Crow AMSAA with Modified MLE

**语法:** obj << Crow AMSAA with Modified MLE

**说明:** 拟合带 beta 偏倚校正的 Crow-AMSAA 模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA with Modified MLE;

```

### Distinct Phase Weibull NHPP

**语法:** obj << Distinct Phase Weibull NHPP

**说明:** 拟合“独特阶段 Weibull NHPP”模型，其中多阶段研究中的每个系统在每个阶段中都遵循相同的 Crow-AMSAA 模型。该模型为每个阶段都包含一个 beta 参数和一个 lambda 参数。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Phase Weibull NHPP;

```

### Distinct System Weibull NHPP

**语法:** obj << Distinct System Weibull NHPP

**说明:** 拟合“独特系统 Weibull NHPP”模型，其中研究中的每个系统都遵循具有不同参数的单独 Crow-AMSAA 模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Distinct System Weibull NHPP;

```

### Distinct Weibull NHPP

**语法:** obj << Distinct Weibull NHPP

**说明:** 拟合“独特 Weibull NHPP”模型，其中多阶段研究中的每个系统在每个阶段中都遵循单独的 Crow-AMSAA 模型。该模型为研究中的每个系统和阶段的组合都包含一个 beta 参数和一个 lambda 参数。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Different Intercepts.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Distinct Weibull NHPP;

```

### Fixed Parameter Crow AMSAA

**语法:** obj << Fixed Parameter Crow AMSAA( <lambda ( number )>, <beta ( number )> )

**说明:** 拟合“固定参数 Crow-AMSAA”模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Fixed Parameter Crow AMSAA( lambda( .02 ) );

```

### Get Results

**语法:** obj << Get Results

**说明:** 返回包含模型估计结果的命名列表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Show( obj << Get Results );

```

### Identical System Weibull NHPP

**语法:** obj << Identical System Weibull NHPP

**说明:** 拟合“相同系统 Weibull NHPP”模型，其中研究中的每个系统都遵循一个 Crow-AMSAA 模型。假定系统之间的差异是由于相同模型的各个实现的随机性造成的。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems One Phase.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Repairs ),
	System ID( :System ID )
);
obj << Identical System Weibull NHPP;

```

### Piecewise Weibull NHPP

**语法:** obj << Piecewise Weibull NHPP

**说明:** 拟合“分段 Weibull NHPP”模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
obj << Piecewise Weibull NHPP;

```

### Piecewise Weibull NHPP Change Point Detection

**语法:** obj << Piecewise Weibull NHPP Change Point Detection

**说明:** 估计数据中的变点并拟合“分段 Weibull NHPP”模型。指定“阶段”变量时该选项不可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
obj << Piecewise Weibull NHPP Change Point Detection;

```

### Piecewise Weibull NHPP with Different Intercepts

**语法:** obj << Piecewise Weibull NHPP with Different Intercepts

**说明:** 拟合具有不同截距的“分段 Weibull NHPP”模型，其中多阶段研究中的每个系统都遵循单独的分段 Weibull NHPP 模型。该模型为每个阶段包含一个 beta 参数，为每个系统包含一个 lambda 参数。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Parallel Systems Multiple Phases.jmp" );
obj = dt << Reliability Growth(
	Input Format( Parallel Systems ),
	Time to Event( :Hours ),
	Event Count( :Fixes ),
	System ID( :System ID ),
	Phase( :Phase )
);
obj << Piecewise Weibull NHPP with Different Intercepts;

```

### Reinitialized Weibull NHPP

**语法:** obj << Reinitialized Weibull NHPP

**说明:** 拟合“重新初始化 Weibull NHPP”模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
obj << Reinitialized Weibull NHPP;

```

## Crow AMSAA

### 项消息

#### Achieved MTBF

**语法:** scrobj << Achieved MTBF( state=0|1 )

**说明:** 显示或隐藏“可达 MTBF”报表。使用可选的 alpha 参数指定 alpha。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Achieved MTBF( .01 );

```

#### Goodness of Fit

**语法:** scrobj << Goodness of Fit( state=0|1 )

**说明:** 显示或隐藏“拟合优度”报表，该报表包含对数据服从 Crow-AMSAA 模型的原假设的检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Goodness of Fit( 1 );

```

#### Show Cumulative Events Plot

**语法:** scrobj << Show Cumulative Events Plot( state=0|1 )

**说明:** 显示或隐藏“累积事件”图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**语法:** scrobj << Show Intensity Plot( state=0|1 )

**说明:** 显示或隐藏“强度”图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**语法:** scrobj << Show MTBF Plot( state=0|1 )

**说明:** 显示或隐藏平均失效间隔时间 (MTBF) 图。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

#### Show Profilers

**语法:** scrobj << Show Profilers( state=0|1 )

**说明:** 显示或隐藏平均失效间隔时间 (MTBF)、失效强度和累积事件的刻画器。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

## Cumulative Events Plot

### 关联的构造器

#### Cumulative Events Plot

**语法:** obj << Cumulative Events Plot( ... );

scrobj = obj << Cumulative Events Plot

**说明:** 支持您在“累积事件”图中显示或隐藏模型。若指定时不带参数，该选项将可脚本化的引用返回给图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
plot = obj << Cumulative Events Plot;
plot << Crow AMSAA( 0 );

```

### 项消息

#### Crow AMSAA

**语法:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏 Crow-AMSAA 模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

#### Crow AMSAA with Modified MLE

**语法:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏带 beta 偏倚校正的 Crow-AMSAA 模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

#### Fixed Parameter Crow AMSAA

**语法:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“固定参数 Crow-AMSAA”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

#### Piecewise Weibull NHPP

**语法:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“分段 Weibull NHPP”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

#### Piecewise Weibull NHPP Change Point Detection

**语法:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“重新初始化 Weibull NHPP”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

#### Reinitialized Weibull NHPP

**语法:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“重新初始化 Weibull NHPP”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

## Fixed Parameter Crow AMSAA

### 项消息

#### Show Cumulative Events Plot

**语法:** scrobj << Show Cumulative Events Plot( state=0|1 )

**说明:** 显示或隐藏“累积事件”图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**语法:** scrobj << Show Intensity Plot( state=0|1 )

**说明:** 显示或隐藏“强度”图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**语法:** scrobj << Show MTBF Plot( state=0|1 )

**说明:** 显示或隐藏平均失效间隔时间 (MTBF) 图。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

#### Show Profilers

**语法:** scrobj << Show Profilers( state=0|1 )

**说明:** 显示或隐藏平均失效间隔时间 (MTBF)、失效强度和累积事件的刻画器。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

#### beta

**语法:** obj << Fixed Parameter Crow AMSAA( beta( number ) )

**说明:** 指定固定 beta 参数的值。若参数是缺失值，则参数不固定。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( Beta( 0.8 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

#### lambda

**语法:** obj << Fixed Parameter Crow AMSAA( lambda( number ) )

**说明:** 指定固定 lambda 参数的值。若参数是缺失值，则参数不固定。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
obj << Fixed Parameter Crow AMSAA( lambda( 0.02 ) );
Report( obj )["Crow-AMSAA"] << Close( 1 );

```

## Mean Time Between Failures Plot

### 关联的构造器

#### Mean Time Between Failures Plot

**语法:** obj << Mean Time Between Failures Plot( ... );

scrobj = obj << Mean Time Between Failures Plot

**说明:** 支持您在“平均失效间隔时间”图中显示或隐藏模型。若指定时不带参数，该选项将可脚本化的引用返回给图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Crow AMSAA;
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Crow AMSAA( 0 );

```

### 项消息

#### Crow AMSAA

**语法:** obj << Cumulative Events Plot( Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA( state=0|1 ) );

scrobj << Crow AMSAA( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏 Crow-AMSAA 模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA( 0 );

```

#### Crow AMSAA with Modified MLE

**语法:** obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( state=0|1 ) );

scrobj << Crow AMSAA with Modified MLE( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏带 beta 偏倚校正的 Crow-AMSAA 模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
obj << Cumulative Events Plot( Crow AMSAA with Modified MLE( 0 ) );
obj << Mean Time Between Failures Plot( Crow AMSAA with Modified MLE( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Crow AMSAA with Modified MLE;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Crow AMSAA with Modified MLE( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Crow AMSAA with Modified MLE( 0 );

```

#### Customize Average MTBF

**语法:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) ) );

scrobj << Options( Sample MTBF Type( "Customized Average MTBF" ), Customize Average MTBF( vector ) )

**说明:** 指定一组用于计算平均失效间隔时间 (MTBF) 的不相交区间。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
obj << Mean Time Between Failures Plot(
	Options(
		Sample MTBF Type( "Customized Average MTBF" ),
		Customize Average MTBF( [2500, 5000, 7500, 11000] )
	)
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
plot = obj << Mean Time Between Failures Plot;
plot << Options(
	Sample MTBF Type( "Customized Average MTBF" ),
	Customize Average MTBF( [2500, 5000, 7500, 11000] )
);
(obj << report)["Mean Time Between Failures"] << Close( 0 );

```

#### Fixed Parameter Crow AMSAA

**语法:** obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( state=0|1 ) );

scrobj << Fixed Parameter Crow AMSAA( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“固定参数 Crow-AMSAA”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
obj << Cumulative Events Plot( Fixed Parameter Crow AMSAA( 0 ) );
obj << Mean Time Between Failures Plot( Fixed Parameter Crow AMSAA( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Fixed Parameter Crow AMSAA;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Fixed Parameter Crow AMSAA( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Fixed Parameter Crow AMSAA( 0 );

```

#### Interval Size

**语法:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( number ) )

**说明:** 指定用于计算平均失效间隔时间 (MTBF) 的区间大小。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Mean Time Between Failures"] << Close( 0 );
plot = obj << Mean Time Between Failures Plot;
plot << Options( Sample MTBF Type( "Equal Interval Average MTBF" ), Interval Size( 2500 ) );

```

#### Options

**语法:** obj << Mean Time Between Failures( Options( ... ) );

scrobj << Options( ... )

**说明:** 支持您配置“平均失效间隔时间”图。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

#### Piecewise Weibull NHPP

**语法:** obj << Cumulative Events Plot( Piecewise Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( state=0|1 ) );

scrobj << Piecewise Weibull NHPP( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“分段 Weibull NHPP”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP( 0 );

```

#### Piecewise Weibull NHPP Change Point Detection

**语法:** obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( state=0|1 ) );

scrobj << Piecewise Weibull NHPP Change Point Detection( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“重新初始化 Weibull NHPP”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
obj << Cumulative Events Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );
obj << Mean Time Between Failures Plot( Piecewise Weibull NHPP Change Point Detection( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/BrakeReliability.jmp" );
obj = dt << Reliability Growth(
	Input Format( Dates ),
	Timestamp( :Date ),
	Event Count( :Fixes )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Piecewise Weibull NHPP Change Point Detection;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Piecewise Weibull NHPP Change Point Detection( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Piecewise Weibull NHPP Change Point Detection( 0 );

```

#### Reinitialized Weibull NHPP

**语法:** obj << Cumulative Events Plot( Reinitialized Weibull NHPP( state=0|1 ) );

obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( state=0|1 ) );

scrobj << Reinitialized Weibull NHPP( state=0|1 ) )

**说明:** 在“累积事件”或“平均失效间隔时间”图中显示或隐藏“重新初始化 Weibull NHPP”模型。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
obj << Cumulative Events Plot( Reinitialized Weibull NHPP( 0 ) );
obj << Mean Time Between Failures Plot( Reinitialized Weibull NHPP( 0 ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/ProductionEquipment.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Hours of Operation ),
	Event Count( :Fixes ),
	Phase( :Design Stage )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Reinitialized Weibull NHPP;
Wait( 1 );
cep = obj << Cumulative Events Plot;
cep << Reinitialized Weibull NHPP( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Reinitialized Weibull NHPP( 0 );

```

#### Sample MTBF Type

**语法:** obj << Mean Time Between Failures( Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) ) );

scrobj << Options( Sample MTBF Type( "Equal Interval Average MTBF"|"Customized Average MTBF" ) )

**说明:** 指定“平均失效间隔时间”图的计算方法。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
obj << Mean Time Between Failures Plot(
	Options( Sample MTBF Type( "Equal Interval Average MTBF" ) )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/TurbineEngineDesign1.jmp" );
obj = dt << Reliability Growth(
	Input Format( Time to Event ),
	Time to Event( :Day ),
	Event Count( :Fixes ),
	Phase( :Design Phase )
);
Report( obj )["Mean Time Between Failures"] << Close( 0 );
mtbf = obj << Mean Time Between Failures Plot;
mtbf << Options( Sample MTBF Type( "Equal Interval Average MTBF" ) );

```

## Reliability Growth Report

### 项消息

#### Show Cumulative Events Plot

**语法:** scrobj << Show Cumulative Events Plot( state=0|1 )

**说明:** 显示或隐藏“累积事件”图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Cumulative Events Plot( 1 );

```

#### Show Intensity Plot

**语法:** scrobj << Show Intensity Plot( state=0|1 )

**说明:** 显示或隐藏“强度”图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Intensity Plot( 1 );

```

#### Show MTBF Plot

**语法:** scrobj << Show MTBF Plot( state=0|1 )

**说明:** 显示或隐藏平均失效间隔时间 (MTBF) 图。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show MTBF Plot( 0 );

```

#### Show Profilers

**语法:** scrobj << Show Profilers( state=0|1 )

**说明:** 显示或隐藏平均失效间隔时间 (MTBF)、失效强度和累积事件的刻画器。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/NewEngineOperation.jmp" );
obj = dt << Reliability Growth( Input Format( Time to Event ), Time to Event( :Hours ) );
Report( obj )["Observed Data"] << Close( 1 );
report = obj << Crow AMSAA;
report << Show Profilers( 1 );

```

