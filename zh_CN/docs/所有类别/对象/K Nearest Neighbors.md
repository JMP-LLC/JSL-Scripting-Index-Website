# K Nearest Neighbors



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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Copy Script;

```

### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
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
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
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

**语法:** obj = K Nearest Neighbors(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### K Nearest Neighbors

**语法:** K Nearest Neighbors(Y( column ), X( columns ))

**说明:** 基于 X 变量空间范围内 K 最近邻的响应来预测连续或分类响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

## 列

### By

**语法:** obj = K Nearest Neighbors(...<By( column(s) )>...)

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 ),
	By( _bycol )
);

```

### Factor

**语法:** obj = K Nearest Neighbors(...Factor( column(s) )...)

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Validation

**语法:** obj = K Nearest Neighbors(...<Validation( column )>...)

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);

```

### X

**语法:** obj = K Nearest Neighbors(...X( column(s) )...)

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

### Y

**语法:** obj = K Nearest Neighbors(...<Y( column(s) )>...)

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);

```

## 项消息

### Category Bias

**语法:** obj = K Nearest Neighbors(...Category Bias( number=0.5 )...)

**说明:** 指定一个确保分类响应的拟合概率始终为正的调节参数。 默认为“0.5”。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	K( 10 ),
	Category Bias( 0.2 )
);

```

### Get Measures

**语法:** obj << Get Measures

**说明:** 从模型返回拟合测度汇总。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = K Nearest Neighbors(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	K( 10 )
);
obj << Get Measures;

```

### K

**语法:** obj = K Nearest Neighbors(...K( number=10 )...)

**说明:** 设置要分析的最近邻的最大数。 默认为“10”。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	K( 8 )
);

```

### Response

**语法:** obj << Response( "<Response Variable Name>", <Set K( number )>, <Mosaic Plot ( state=0|1 ) >, <Plot Actual by Predicted( state=0|1 )>, <Plot Residual by Predicted( state=0|1 )> )

**说明:** 指定可用于模型响应的报表选项。可用选项取决于响应类型。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 ),
	Response(
		"Y",
		Set K( 6 ),
		Plot Actual by Predicted( 1 ),
		Plot Residual by Predicted( 1 )
	)
);

```

### Save Near Neighbor Distances

**语法:** obj << Save Near Neighbor Distances

**说明:** 保存到 k 最近邻数据点的距离。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << Save Near Neighbor Distances;

```

### Save Near Neighbor Rows

**语法:** obj << Save Near Neighbor Rows

**说明:** 保存 k 最近邻的行数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << Save Near Neighbor Rows;

```

### Set Random Seed

**语法:** obj = K Nearest Neighbors(...Set Random Seed( number )...)

**说明:** 将随机种子设置为特定值，以确保使用相同种子的所有后续试验都是可再现的。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Set Random Seed( 123456 ),
	K( 8 )
);

```

### Use Excluded Rows for Validation

**语法:** obj << Use Excluded Rows for Validation( state=0|1 )

**说明:** 使用数据表中的排除行创建验证集。只有在使用标准 JMP 并且有排除行时，该选项才会显示在启动窗口中。

**JMP添加的版本:** 15

### Validation Portion

**语法:** obj = K Nearest Neighbors(...Validation Portion( fraction=0 )...)

**说明:** 通过随机选择行构成验证集，每行的选中概率为 p（小数）。 默认为“0”。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = K Nearest Neighbors(
	Y( :country ),
	X( :sex, :marital status, :age, :type, :size ),
	Validation Portion( 0.2 ),
	K( 10 )
);

```

## KNN Fit

### 项消息

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Plot Actual by Predicted( 1 ));
obj << (Response[1] << Plot Residual by Predicted( 1 ));
preset = obj << (Response[1] << New Preset);
obj2 = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 5 )
);
Wait( 1 );
obj2 << (Response[1] << Apply Preset( preset ));

```

#### Get Best K

**语法:** obj << (Response[number] << Get Best K)

**说明:** 返回最佳 K 近邻的值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Get Best K);

```

#### Get Prediction Formula

**语法:** obj << (Response[number] << Get Prediction Formula( k ))

**说明:** 构造一个脚本，以便创建预测公式列并返回它。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Get Prediction Formula( 9 ));

```

#### Mosaic Plot

**语法:** obj << Mosaic Plot( state=0|1 )

**说明:** 显示或隐藏数据的马赛克图。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Mosaic Plot( 0 ));

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Plot Actual by Predicted( 1 ));
obj << (Response[1] << Plot Residual by Predicted( 1 ));
preset = obj << (Response[1] << New Preset);

```

#### Plot Actual by Predicted

**语法:** obj << (Response[number] << Plot Actual By Predicted( state=0|1 ))

**说明:** 显示或隐藏在垂直轴上显示实际响应值且在水平轴上显示预测值的图。若拟合度好，这些点在对角线附近。您可以看到哪些点远离对角线，可以发现模式，并且实现检验的可视化。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Residual by Predicted

**语法:** obj << ( Response[number] << Plot Residual By Predicted( state=0|1 ) )

**说明:** 标绘残差值在 Y 轴，预测值在 X 轴。使用散点图检测拟合中或变异中的模式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Plot Residual by Predicted( 1 ));

```

#### Publish Prediction Formula

**语法:** obj << (Response[number] << Publish Prediction Formula( k ))

**说明:** 创建预测公式并将它们保存为“公式存储库”平台中的公式列脚本。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Publish Prediction Formula( 9 ));

```

#### Save Predicteds

**语法:** obj << (Response[number] << Save Predicteds)

**说明:** 在数据表的新列中保存预测值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Save Predicteds);

```

#### Save Prediction Formula

**语法:** obj << (Response[number] << Save Prediction Formula( k ))

**说明:** 在数据表的新列中保存预测公式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 )
);
obj << (Response[1] << Save Prediction Formula( 9 ));

```

#### Set K

**语法:** obj << ( Response[number] << Set K( number ) )

**说明:** 将指定模型更改为解路径中的其他模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = K Nearest Neighbors(
	Y( :Y ),
	X( :Age, :Gender, :BMI ),
	Validation( :Validation ),
	K( 10 ),
	Plot Actual by Predicted( 1 )
);
Wait( 3 );
obj << (Response[1] << Set K( 6 ));

```

