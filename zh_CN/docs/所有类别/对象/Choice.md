# Choice



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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Copy Script;

```

### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
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

**语法:** obj = Choice(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Choice

**语法:** Choice( Profile DataTable( data table ), Profile ID( column ), Profile Effects( column(s) ), <Response Data Table( data table )>, <Subject Data Table( data table )>, <Response Profile ID Chosen( column )>, <Response Subject ID( column)>, <Response Grouping( column(s) )>, <Response Profile ID Choices( column(s) )>, <Profile Grouping( column(s) )>, <Subject Subject ID( column )>, <Subject Effects( column(s) )> )

**说明:** 对研究客户偏好的选择实验得到的数据进行建模。使用条件 Logistic 回归估计首选特定配置的概率。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Profile DataTable( dt ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Profile Grouping( :Subject, :Trial )
);

```

## 列

### Choice Set ID

**语法:** Choice( Choice Set ID( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 在一个数据表的情况下标识特定选择集的列，该选择集针对给定的偏好决定而提供给测试对象。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile Effects

**语法:** obj = Choice(...<Profile Effects( column )>...)

<b>启动窗口项: 是</b>

**说明:** 在特征数据表中包含效应或因子值的一列或多列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile Grouping

**语法:** Choice( Profile Grouping( column(s) ), ... )

<b>启动窗口项: 是</b>

**说明:** 与“特征 ID”列一起使用时，唯一指定每个选择集的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Profile ID

**语法:** Choice( Profile ID( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 在特征数据表中包含 ID 的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Response Freq

**语法:** Choice( Response Freq( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Response Grouping

**语法:** Choice( Response Grouping( column(s) ), ... )

<b>启动窗口项: 是</b>

**说明:** 与“已选择的特征 ID”列一起使用时，唯一指定每个选择集的列。

```jsl

Names Default To Here( 1 );
Open( "$Sample_Data/Laptop Profile.jmp" );
Open( "$Sample_Data/Laptop Runs.jmp" );
Choice(
	Response Data Table( Data Table( "Laptop Runs" ) ),
	Profile DataTable( Data Table( "Laptop Profile" ) ),
	Response Grouping( :Survey, :Choice Set ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :Choice ID ),
	Profile Grouping( :Survey, :Choice Set ),
	Profile Effects( :Hard Disk, :Speed, :Battery Life, :Price ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Response ),
	Likelihood Ratio Tests( 1 ),
	Willingness to Pay(
		Hard Disk( Feature Factor, "40 GB" ),
		Speed( Feature Factor, "1.5 GHz" ),
		Battery Life( Feature Factor, "4 hours" ),
		Price( Price Factor, 1000 )
	)
);

```

### Response Profile ID Choices

**语法:** Choice( Response Profile ID Choice( columns ), ... )

<b>启动窗口项: 是</b>

**说明:** 至少两列，它们包含可作为响应的可能选择。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Response Profile ID Chosen

**语法:** Choice( Response Profile ID Chosen( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 包含代表测试对象的选定特征的特征 ID 的列。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Response Subject ID

**语法:** Choice( Response Subject ID( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 在响应数据表中标识研究参与者的列。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Response Weight

**语法:** Choice( Response Weight( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Subject Effects

**语法:** obj = Choice(...<Subject Effects( column )>...)

<b>启动窗口项: 是</b>

**说明:** 在测试对象数据表中包含效应或因子值的一列或多列。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Subject ID

**语法:** Choice( Subject ID( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 在测试对象数据表或在一个数据表的情况下标识测试对象的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined.jmp" );
obj = Choice(
	One Table( 1 ),
	Subject ID( :Subject ),
	Choice Set ID( :Trial ),
	Profile ID( :Indicator ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Subject Subject ID

**语法:** Choice( Subject Subject ID( column ), ... )

<b>启动窗口项: 是</b>

**说明:** 在测试对象数据表中标识研究参与者的列。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

## 项消息

### Comparisons

**语法:** obj << Comparisons( {term1(value1a),term2(value2a),...},{term1(value1b),term2(value2b),...} )

**说明:** 执行两个特定备择选择特征之间的比较。使您能够指定您想要比较的因子和值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Comparisons(
	{Crust( "Thick" ), Cheese( "Jack" ), Topping( "Pepperoni" )},
	{Crust( "Thin" ), Cheese( "Mozzarella" ), Topping( "None" )}
);

```

### Confidence Intervals

**语法:** obj << Confidence Intervals( state=0|1, <alpha> )

**说明:** 显示或隐藏“参数估计值”报表中每个参数的 (1-alpha)% 置信区间。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Confidence Intervals( 1, 0.01 );

```

### Confidence Limits

**语法:** obj << Confidence Limits( state=0|1, <alpha> )

**说明:** 显示或隐藏“Bayes 参数估计值”报表中每个参数的置信限。限值是基于后验分布的 2.5 分位数和 97.5 分位数构造的。

**JMP添加的版本:** 14

### Convergence Criterion

**语法:** obj = Choice(...Convergence Criterion( number )...)

<b>启动窗口项: 是</b>

**说明:** 在估计参数时，设置可接受的收敛准则。

### Correlation of Estimates

**语法:** obj << Correlation of Estimates( state=0|1 )

**说明:** 显示或隐藏参数估计值的相关性矩阵。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Correlation of Estimates( 1 );

```

### Effect Marginals

**语法:** obj << Effect Marginals( state=0|1 )

**说明:** 显示或隐藏模型中每个主效应的边缘概率和边缘效用。边缘概率是指在所有其他特性设置为其均值或默认水平下，相对于特性 B，试验个体选择 A 的概率。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Effect Marginals( 1 );

```

### Firth Bias-Adjusted Estimates

**语法:** obj = Choice(...Firth Bias-Adjusted Estimates( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 计算修正偏倚的最大似然估计值 (MLE)，以便生成比没有修正偏倚的 MLE 更准确的估计值和检验。这些估计值还可缓解 Logistic 模型中常见的分离问题。 默认开启。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);
Report( obj )["Parameter Estimates"] << Close( 0 );

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Hierarchical Bayes

**语法:** obj = Choice(...Hierarchical Bayes( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 使用 Bayes 方法估计特定于测试对象的参数。

### Joint Factor Tests

**语法:** obj << Joint Factor Tests( state=0|1 )

**说明:** 针对涉及该因子的所有效应构造一个似然比检验，来检验模型中的每个因子。若模型中没有交互作用，则该选项需要测试对象数据表。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);
obj << Joint Factor Tests( 1 );

```

### Likelihood Ratio Tests

**语法:** obj << Likelihood Ratio Tests( state=0|1 )

**说明:** 对模型中的每个效应执行似然比检验。默认情况下，对收敛时间短于五秒钟的模型启用。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Likelihood Ratio Tests( 1 );

```

### Model Dialog

**语法:** obj << Model Dialog

**说明:** 打开“模型对话框”窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Model Dialog;

```

### Multiple Choice Profiler

**语法:** obj << Multiple Choice Profiler( state=0|1, N Choices( number ) )

**说明:** 显示或隐藏指定数量的预测刻画器。这使您能够比较备择选择集之间的预测概率。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Multiple Choice Profiler( 1, N Choices( 3 ) );

```

### Number of Bayesian Iterations

**语法:** obj = Choice(...Number of Bayesian Iterations( number )...)

<b>启动窗口项: 是</b>

### Number of Burn In Iterations

**语法:** obj << Number of Burn In Iterations( number )

### One Table

**语法:** obj = Choice(...One Table...)

<b>启动窗口项: 是</b>

**说明:** 指定数据在一个数据表中以堆叠格式存储。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Probability Profiler

**语法:** obj << Probability Profiler( state=0|1 )

**说明:** 显示或隐藏与参考集相比当前选择的概率的预测刻画器。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Probability Profiler( 1 );

```

### Profile DataTable

**语法:** Choice( Profile Data Table( table ), ... )

<b>启动窗口项: 是</b>

**说明:** 标识特征数据表。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Remove Subject Effects

**语法:** obj = Choice(...Remove Subject Effects...)

<b>启动窗口项: 是</b>

### Respondents Are Allowed to Choose None

**语法:** Choice( Respondents Are Allowed to Choose None( state=0|1 ), ... )

<b>启动窗口项: 是</b>

**说明:** 指定在模型中为包含缺失值的响应行包括“无选择指示符”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Combined No Choice.jmp" );
obj = Choice(
	One Table( 1 ),
	Response Subject ID( :Subject ),
	Profile ID( :Indicator ),
	Profile Grouping( :Subject, :Trial ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	"Firth Bias-adjusted Estimates"n( 1 ),
	Respondents Are Allowed to Choose None( 1 ),
	Likelihood Ratio Tests( 1 )
);

```

### Response Data Table

**语法:** Choice( Response Data Table( table ), ... )

<b>启动窗口项: 是</b>

**说明:** 标识响应数据表。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);

```

### Save Bayes Chain

**语法:** obj << Save Bayes Chain

### Save Gradients by Subject

**语法:** obj << Save Gradients by Subject

**说明:** 创建新表，其中包含对象各参数的平均步长，每个对象对应一行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = dt << Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Gradients by Subject;

```

### Save Subject Estimates

**语法:** obj << Save Subject Estimates

### Save Utility Formula

**语法:** obj << Save Utility Formula

**说明:** 在特征数据表中创建新列，其中包含用于所评估线性模型的公式。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Save Utility Formula;

```

### Show MLE Parameter Estimates

**语法:** obj << Show MLE Parameter Estimates( state=0|1 )

**说明:** 显示使用 Bayes 参数估计值的最大似然估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( Data Table( "Pizza Responses" ) ),
	Profile DataTable( Data Table( "Pizza Profiles" ) ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Hierarchical Bayes( 1 )
);
obj << Show MLE Parameter Estimates( 1 );

```

### Subject DataTable

**语法:** Choice( Subject Data Table( table ), ... )

<b>启动窗口项: 是</b>

**说明:** 标识测试对象数据表。

**MaxDiff 示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Potato Chip Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Potato Chip Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Potato Chip Subjects.jmp" );
obj = MaxDiff(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Subject ID( :Respondent ),
	Response Profile ID Choices( :Choice 1, :Choice 2, :Choice 3 ),
	Profile ID( :Profile ID ),
	Profile Effects( :Flavor ),
	Subject Subject ID( :Respondent ),
	Subject Effects( :Citizenship, :Gender ),
	Response Best Option( :Best Profile ),
	Response Worst Option( :Worst Profile )
);

```

**选择示例**

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
dt3 = Open( "$SAMPLE_DATA/Pizza Subjects.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Subject DataTable( dt3 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping ),
	Subject Subject ID( :Subject ),
	Subject Effects( :Gender )
);

```

### Use Adaptive Bayes

**语法:** obj << Use Adaptive Bayes( state=0|1 )

### Utility Profiler

**语法:** obj << Utility Profiler( state=0|1 )

**说明:** 显示或隐藏不同因子设置下的预测效用。该效用值通过线性模型预测得出。

```jsl

Names Default To Here( 1 );

dt1 = Open( "$SAMPLE_DATA/Pizza Profiles.jmp" );
dt2 = Open( "$SAMPLE_DATA/Pizza Responses.jmp" );
obj = Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Profile ID Chosen( :Choice ),
	Response Subject ID( :Subject ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :ID ),
	Profile Effects( :Crust, :Cheese, :Topping )
);
obj << Utility Profiler( 1 );

```

### Willingness to Pay

**语法:** obj << Willingness to Pay

**说明:** 要求您的模型包含一个连续的价格列。计算客户愿意为一个新功能支付的超过基准功能成本的最大价格上涨（下降）。结果是使用每个背景设置的基准设置计算得出的。

```jsl

Names Default To Here( 1 );
dt1 = Open( "$SAMPLE_DATA/Laptop Profile.jmp" );
dt2 = Open( "$SAMPLE_DATA/Laptop Runs.jmp" );
Choice(
	Response Data Table( dt2 ),
	Profile DataTable( dt1 ),
	Response Grouping( :Survey, :Choice Set ),
	Response Profile ID Choices( :Choice1, :Choice2 ),
	Profile ID( :Choice ID ),
	Profile Grouping( :Survey, :Choice Set ),
	Profile Effects( :Hard Disk, :Speed, :Battery Life, :Price ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	Response Profile ID Chosen( :Response ),
	Likelihood Ratio Tests( 1 ),
	Willingness to Pay(
		Hard Disk( Feature Factor, "40 GB" ),
		Speed( Feature Factor, "1.5 GHz" ),
		Battery Life( Feature Factor, "4 hours" ),
		Price( Price Factor, 1000 )
	)
);

```

