# Multivariate



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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**语法:** obj << Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

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

### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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

### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**语法:** obj << Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
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
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**语法:** obj = <Platform>(... Transform Column(<name>, Formula(<expression>), [Random Seed(<n>)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

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

### Window View

**语法:** obj = Multivariate(...Window View( "Visible"|"Invisible"|"Private" )...)

<b>启动窗口项: 是</b>

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## 关联的构造器

### Multivariate

**语法:** Multivariate( Y( columns ) )

**说明:** 使用各种多元分析方法探索数值变量之间的相关性和关联性。这些方法包括参数和非参数关联测量、散点图矩阵、主成分分析、离群值分析和项目信度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## 列

### By

**语法:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	By( _bycol )
);

```

### Columns

**语法:** obj << Columns( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

### Freq

**语法:** obj << Freq( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Freq( _freqcol )
);

```

### Weight

**语法:** obj << Weight( column )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Weight( _weightcol )
);

```

### Y

**语法:** obj << Y( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );

```

## 项消息

### CI of Correlation

**语法:** obj << CI of Correlation( state=0|1 )

**说明:** 显示或隐藏每个 Y 变量之间相关性以及每个相关性的置信区间的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << CI of Correlation( 1 );

```

### Cluster the Correlations

**语法:** obj << Cluster the Correlations( state=0|1 )

**说明:** 显示或隐藏聚类相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cluster the Correlations( 1 );

```

### Color Map on Correlations

**语法:** obj << Color Map on Correlations( state=0|1 )

**说明:** 显示或隐藏相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Correlations( 1 );

```

### Color Map on Hoeffding's D

**语法:** obj << Color Map on Hoeffding&apos;s D( state=0|1 )

**说明:** 显示或隐藏 Hoeffding D 非参数相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Hoeffding's D( 1 );

```

### Color Map on Kendall's Tau

**语法:** obj << Color Map on Kendall&apos;s Tau( state=0|1 )

**说明:** 显示或隐藏 Kendall Tau 非参数相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Kendall's τ

**语法:** obj << Color Map on Kendall&apos;s τ( state=0|1 )

**说明:** 显示或隐藏 Kendall Tau 非参数相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Kendall's Tau( 1 );

```

### Color Map on Pairwise Correlations

**语法:** obj << Color Map on Pairwise Correlations( state=0|1 )

**说明:** 显示或隐藏配对相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Pairwise Correlations( 1 );

```

### Color Map on Spearman's Rho

**语法:** obj << Color Map on Spearman&apos;s Rho( state=0|1 )

**说明:** 显示或隐藏 Spearman Rho 非参数相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on Spearman's ρ

**语法:** obj << Color Map on Spearman&apos;s ρ( state=0|1 )

**说明:** 显示或隐藏 Spearman Rho 非参数相关性色图，随着相关性接近 1，颜色从代表负相关的蓝色开始逐渐过渡到红色。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Color Map on Spearman's Rho( 1 );

```

### Color Map on p-Values

**语法:** obj << Color Map on p-Values( state=0|1 )

**说明:** 显示或隐藏 p 值色图，随着 p 值接近 1，颜色从代表 p 值接近 0 的红色开始逐渐过渡到蓝色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << "Color Map on p-Values"n( 1 );

```

### Correlation Probability

**语法:** obj << Correlation Probability( state=0|1 )

**说明:** 显示或隐藏一个 p 值矩阵，其中每个 p 值对应于变量之间的真实相关性为零的原假设的检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Correlation Probability( 1 );

```

### Correlations Multivariate

**语法:** obj << Correlations Multivariate( state=0|1 )

**说明:** 显示或隐藏相关系数矩阵，该矩阵汇总每对 Y 变量之间线性关系的强度。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Correlations Multivariate( 1 );

```

### Covariance Matrix

**语法:** obj << Covariance Matrix( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Covariance Matrix( 1 );

```

### Create SAS Job

**语法:** obj << Create SAS Job

**说明:** 创建 SAS Proc Mixed 代码以通过 SAS 运行类似的估计方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "REML" ) );
obj << Create SAS Job();

```

### Cronbach's Alpha

**语法:** obj << Cronbach&apos;s Alpha( state=0|1 )

**说明:** 显示或隐藏整个变量集的 Cronbach alpha 以及每个 Y 变量单独被排除时的 alpha 的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cronbach's alpha( 1 );

```

### Cronbach's α

**语法:** obj << Cronbach&apos;s α( state=0|1 )

**说明:** 显示或隐藏整个变量集的 Cronbach alpha 以及每个 Y 变量单独被排除时的 alpha 的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Cronbach's alpha( 1 );

```

### Ellipsoid 3D Plot

**语法:** obj << Ellipsoid 3D Plot( column1, column2, column3 )

**说明:** 显示或隐藏展现三个选定 Y 变量的 95% 椭圆的曲面图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Ellipsoid 3D Plot( :Ether, :Chloroform, :Benzene );

```

### Get Correlation Matrix

**语法:** obj << Get Correlation Matrix

**说明:** 返回相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
corr = obj << Get Correlation Matrix;
Show( corr );

```

### Get Inv Correlation Matrix

**语法:** obj << Get Inv Correlation Matrix

**说明:** 返回逆相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Inverse Correlations( 1 ) );
icorr = obj << Get Inv Correlation Matrix;
Show( icorr );

```

### Hoeffding's D

**语法:** obj << Hoeffding&apos;s D( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的 Hoeffding D 统计量的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Hoeffding's D( 1 );

```

### Hotelling's T Square Test

**语法:** obj << Hotelling&apos;s T Square Test

**说明:** 在原假设下给定指定的均值向量，对 Y 变量的多元分布的均值执行单样本检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Hotelling's T Square Test( 1, 0.7, 0.5, 0, -1 );

```

### Impute Missing Data

**语法:** obj << Impute Missing Data

**说明:** 填补所有 Y 变量的缺失值，并创建新的数据表，其中包含现有值和新填补的缺失数据值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Impute Missing Data;

```

### Inverse Correlations

**语法:** obj << Inverse Correlations( state=0|1 )

**说明:** 显示或隐藏每个 Y 变量间的逆相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Inverse Correlations( 1 );

```

### Jackknife Distances

**语法:** obj << Jackknife Distances( state = 0|1, <Save Jackknife Distances> )

**说明:** 显示或隐藏图形，该图展示每一行的 jackknife 距离及指示潜在离群值的参考线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Jackknife Distances( 1 );

```

### Kendall's Tau

**语法:** obj << Kendall&apos;s Tau( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的 Kendall Tau 统计量的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Kendall's Tau( 1 );

```

### Kendall's τ

**语法:** obj << Kendall&apos;s τ( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的 Kendall Tau 统计量的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Kendall's Tau( 1 );

```

### Mahalanobis Distances

**语法:** obj << Mahalanobis Distances( state = 0|1, <Save Outlier Distances> )

**说明:** 显示或隐藏图形，该图展示每一行的 Mahalanobis 距离及指示潜在离群值的参考线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Mahalanobis Distances( 1 );

```

### Matrix Format

**语法:** obj = Multivariate(...Matrix Format( "下三角"|"上三角"|"正方形" )...)

<b>启动窗口项: 是</b>

**说明:** 指定变量在散点图矩阵中的显示方式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Matrix Format( "Lower Triangular" ) );

```

### Multivariate Simple Statistics

**语法:** obj << Multivariate Simple Statistics( state=0|1 )

**说明:** 显示或隐藏多元简单统计量报表，在计算统计量时排除具有缺失值的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Multivariate Simple Statistics( 1 );

```

### Pairwise Correlations

**语法:** obj << Pairwise Correlations( state=0|1 )

**说明:** 显示或隐藏每个 Y 变量组合的配对相关性的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Pairwise Correlations( 1 );

```

### Parallel Coord Plot

**语法:** obj << Parallel Coord Plot( state=0|1 )

**说明:** 显示或隐藏变量的平行坐标图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Parallel Coord Plot( 1 );

```

### Partial Correlation Diagram

**语法:** obj << Partial Correlation Diagram( state=0|1 )

**说明:** 显示或隐藏“偏相关性关系图”报表。该选项对偏相关性矩阵执行特征值分解，并使用结果给出偏相关性的直观表示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlation Diagram( 1 );

```

### Partial Correlation Probability

**语法:** obj << Partial Correlation Probability( state=0|1 )

**说明:** 显示或隐藏一个 p 值矩阵，其中每个 p 值对应于变量之间的真实偏相关性为零的原假设的检验。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlation Probability( 1 );

```

### Partial Correlations

**语法:** obj << Partial Correlations( state=0|1 )

**说明:** 显示或隐藏每个 Y 变量间的偏相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Partial Correlations( 1 );

```

### Save Imputed Formula

**语法:** obj << Save Imputed Formula

**说明:** 插补 Y 列值缺失的值。创建带有插补公式的新列并将其保存至原始数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Save Imputed Formula;

```

### Scatterplot Matrix

**语法:** obj << Scatterplot Matrix( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的散点图矩阵。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( 0 )
);

```

### Set Alpha Level

**语法:** obj << Set Alpha Level( "0.01"|"0.05"|"0.10"|"0.50"|"其他..."=0.05 )

**说明:** 更改有关每个相关性的置信区间的 Alpha 水平。 默认为“0.05”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Set Alpha Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Set α Level

**语法:** obj << Set α Level( "0.01"|"0.05"|"0.10"|"0.50"|"其他..."=0.05 )

**说明:** 更改有关每个相关性的置信区间的 Alpha 水平。 默认为“0.05”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Set α Level( 0.01 );
obj << CI of Correlation( 1 );

```

### Spearman's Rho

**语法:** obj << Spearman&apos;s Rho( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的 Spearman Rho 统计量的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Spearman's Rho( 1 );

```

### Spearman's ρ

**语法:** obj << Spearman&apos;s ρ( state=0|1 )

**说明:** 显示或隐藏每对 Y 变量的 Spearman Rho 统计量的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Spearman's Rho( 1 );

```

### Standardized Alpha

**语法:** obj << Standardized Alpha( state=0|1 )

**说明:** 显示或隐藏整个变量集的 Cronbach 标准化 alpha 以及每个 Y 变量单独被排除时的标准化 alpha 的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Standardized alpha( 1 );

```

### Standardized α

**语法:** obj << Standardized α( state=0|1 )

**说明:** 显示或隐藏整个变量集的 Cronbach 标准化 alpha 以及每个 Y 变量单独被排除时的标准化 alpha 的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << Standardized alpha( 1 );

```

### T Square

**语法:** obj << T Square( state = 0|1, <Save T Square> )

**说明:** 显示或隐藏图形，该图展示每一行的 T² 值及指示潜在离群值的参考线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << T Square( 1 );

```

### T²

**语法:** obj << T²( state = 0|1, <Save T Square> )

**说明:** 显示或隐藏图形，该图展示每一行的 T² 值及指示潜在离群值的参考线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate( Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ) );
obj << T Square( 1 );

```

### Univariate Simple Statistics

**语法:** obj << Univariate Simple Statistics( state=0|1 )

**说明:** 显示或隐藏一元简单统计量报表，在为每一列计算统计量时不用考虑可能有缺失数据的其他列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :POP, :OZONE, :CO, :SO2, :NO ) );
obj << Univariate Simple Statistics( 1 );

```

### Variance Estimation

**语法:** Variance Estimation( REML|ML|Robust|Row-wise|Pairwise )

<b>启动窗口项: 是</b>

**说明:** 设置用于计算相关性的估计方法。

若没有缺失值，则默认方法为“逐行”。

若有缺失值，并且变量数小于等于 10，同时行数小于等于 5000，则默认方法为“REML”。

若有缺失值，并且变量数超过 10 或者行数超过 5000，则默认方法为“配对”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ), Variance Estimation( "ML" ) );

```

## Principal Component Options

### 项消息

#### 3D Score Plot

**语法:** obj << 3D Score Plot( state=0|1 )

**说明:** 显示或隐藏三维散点图，主成分在三维空间中显示为射线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", "3D Score Plot"n );

```

#### Bartlett Test

**语法:** obj << Bartlett Test( state=0|1 )

**说明:** 显示或隐藏每个主成分的齐性检验结果的报表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Bartlett Test( 1 ) );

```

#### Eigenvectors

**语法:** obj << Eigenvectors( state=0|1 )

**说明:** 显示或隐藏每个主成分的特征向量的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Eigenvectors( 1 ) );

```

#### Factor Rotation

**语法:** obj << Factor Rotation( <ML|PC>, 1|SMC, n Rotated, Varimax|Biquartimax| Equamax| Factorparsimax| Orthomax| Parsimax| Quartimax| Biquartimin| Covarimin| Obbiquartimax| Obequamax| Obfactorparsimax| Obequamax| Obfactorparsimax| Oblimin| Obparsimax| Obquartimax| Obvarimax| Quartimin| Promax )

**说明:** 显示或隐藏主成分的因子旋转模式的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "ML", "SMC", 2, "Varimax" )
);

```

#### Loading Plot

**语法:** obj << Loading Plot( number )

**说明:** 显示或隐藏因子载荷二维表示的图矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Loading Plot( 2 ) );

```

#### Save Principal Components

**语法:** obj << Save Principal Components( number )

**说明:** 在数据表的新列中保存指定数量的主成分。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Save Principal Components( 3 ) );

```

#### Save Principal Components with Imputation

**语法:** obj << Save Principal Components with Imputation( number )

**说明:** 使用插补缺失值后计算出的指定数量的主成分，并将其保存到数据表的新列中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Save Principal Components with Imputation( 3 )
);

```

#### Save Rotated Components

**语法:** obj << Save Rotated Components

**说明:** 将旋转成分保存至数据表中的新列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components
);

```

#### Save Rotated Components with Imputation

**语法:** obj << Save Rotated Components with Imputation

**说明:** 在数据表的新列中保存插补缺失值后计算出的旋转成分。注意: 该选项仅在运行了“因子旋转”后可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components(
	"on Correlations",
	Factor Rotation( "SMC", 2, "Varimax" ),
	Save Rotated Components with Imputation
);

```

#### Score Plot

**语法:** obj << Score Plot( number )

**说明:** 显示或隐藏一个散点图矩阵，其中包含每对指定数量的主成分的得分。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot( 2 ) );

```

#### Score Plot with Imputation

**语法:** obj << Score Plot with Imputation( number )

**说明:** 显示或隐藏一个散点图矩阵，其中包含每对指定数量的主成分的得分，缺失值将通过补缺法补齐。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Score Plot with Imputation( 2 ) );

```

#### Scree Plot

**语法:** obj << Scree Plot( state=0|1 )

**说明:** 显示或隐藏每个成分特征值的线图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Multivariate( Y( :OZONE, :CO, :SO2, :NO, :PM10 ) );
obj << Principal Components( "on Correlations", Scree Plot( 1 ) );

```

## Scatterplot Matrix Message

### 项消息

#### Density Ellipses

**语法:** Density Ellipses( state=0|1 )

**说明:** 在散点图矩阵上显示或隐藏密度椭圆。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ) )
);

```

#### Ellipse Alpha

**语法:** obj << Ellipse Alpha( "0.90"|"0.95"|"0.99"|"其他..." )

**说明:** 更改散点图矩阵上每两个 Y 变量间的密度椭圆的 Alpha 水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

#### Ellipse Color

**语法:** Ellipse Color( color )

**说明:** 更改散点图矩阵上每两个 Y 变量间的密度椭圆的颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Color( "Blue" ) )
);

```

#### Ellipse α

**语法:** obj << Ellipse α( "0.90"|"0.95"|"0.99"|"其他..." )

**说明:** 更改散点图矩阵上每两个 Y 变量间的密度椭圆的 Alpha 水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipse Alpha( 0.1 ) )
);

```

#### Ellipses Coverage

**语法:** obj << Ellipses Coverage( "0.90"|"0.95"|"0.99"|"其他..." )

**说明:** 更改散点图矩阵上每两个 Y 变量间的密度椭圆的 Alpha 水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Density Ellipses( 1 ), Ellipses Coverage( 0.9 ) )
);

```

#### Ellipses Transparency

**语法:** obj << Ellipses Transparency( "0.20"|"0.40"|"0.60"|"其他..." )

**说明:** 更改散点图矩阵上每两个 Y 变量间的着色密度椭圆的透明度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Ellipses Transparency( 0.6 ), Shaded Ellipses( 1 ) )
);

```

#### Fit Line

**语法:** obj << Fit Line( state=0|1 )

**说明:** 在散点图矩阵上显示或隐藏回归线和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Fit line( 1 ) )
);

```

#### Heat Map

**语法:** Heat Map( state=0|1 )

**说明:** 在散点图矩阵的右上三角中显示或隐藏相关性热图。热图中每个方格的颜色表示每对变量之间的相关性。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Heat Map( 1 ) )
);

```

#### Horizontal

**语法:** Horizontal( state=0|1 )

**说明:** 在散点图矩阵每两个 Y 变量间的对角线上显示水平直方图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Horizontal( 1 ) )
);

```

#### Nonpar Density

**语法:** Nonpar Density( state=0|1 )

**说明:** 显示或隐藏 0.90 和 0.50 分位数的着色非参数密度等高线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Nonpar Density( 1 ) )
);

```

#### Shaded Ellipses

**语法:** Shaded Ellipses( state=0|1 )

**说明:** 在散点图矩阵每两个 Y 变量间的椭圆内部着色或清除颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Shaded Ellipses( 1 ) )
);

```

#### Show Correlations

**语法:** Show Correlations( state=0|1 )

**说明:** 在每个散点图左上角中显示或隐藏每对变量的相关性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Correlations( 1 ) )
);

```

#### Show Counts

**语法:** Show Counts( state=0|1 )

**说明:** 在每两个 Y 变量间散点图矩阵的对角线上显示或隐藏直方图每个直条上的计数标签。注意: 该选项仅在显示直方图之后才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ), Show Counts( 1 ) )
);

```

#### Show Points

**语法:** Show Points( state=0|1 )

**说明:** 在散点图矩阵中显示或隐藏点。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Show Points( 1 ) )
);

```

#### Significance Circles

**语法:** Significance Circles( state=0|1 )

**说明:** 在散点图矩阵的右上三角中显示或隐藏相关性圆圈。圆圈颜色表示相关性，圆圈大小表示每对变量之间的显著性检验。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Significance Circles( 1 ) )
);

```

#### Vertical

**语法:** Vertical( state=0|1 )

**说明:** 在散点图矩阵每两个 Y 变量间的对角线上显示垂直直方图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Solubility.jmp" );
obj = Multivariate(
	Y( :Ether, :Chloroform, :Benzene, :Carbon Tetrachloride, :Hexane ),
	Scatterplot Matrix( Vertical( 1 ) )
);

```

