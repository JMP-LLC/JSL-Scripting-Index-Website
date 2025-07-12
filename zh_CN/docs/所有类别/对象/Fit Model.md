# Fit Model



## Fit Causal Treatment

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Causal Treatment(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Causal Treatment

**语法:** Fit Model( Y( columns ), <Effects( columns )>, Treatment( column ), Personality( "Causal Treatment" ) )

**说明:** 拟合因果处理的模型，其中对处理的概率进行了调整。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Treatment( :Treatment ),
	Effects( :Age, :Diag Time ),
	Treatment Effects( :Age, :Diag Time, :Cell Type ),
	Personality( "Causal Treatment" ),
	Run
);

```

### 项消息

#### Model Dialog

**语法:** obj << Model Dialog

#### Show Tips and Interpretations

**语法:** obj << Show Tips and Interpretations( state=0|1 )

**JMP添加的版本:** 19

## Fit Generalized Linear Model

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Generalized Linear Model(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Generalized Linear Model

**语法:** Fit Model( Y( column ), Effects( columns ), Personality( "Generalized Linear Model" ), GLM Distribution( distribution name ), Link Function( link type ) )

**说明:** 使用各种分布和连结函数拟合广义线性模型，方法包括 Logistic、Poisson 和指数回归。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

### 项消息

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Contour Profiler( 1 );

```

#### Contrast

**语法:** obj << (effect name << Contrast( [l1 l2 l3 ...] ))

**说明:** 为模型中效应的处理水平的统计对比运行定制的 F 检验。将每个对比指定为行向量。注意: 将效应名称指定为字符串。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << ("color" << Contrast( [1 0 -0.5 -0.5] ));

```

#### Correlation of Estimates

**语法:** obj << Correlation of Estimates( state=0|1 )

**说明:** 显示或隐藏指定拟合的参数估计值之间的相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**语法:** obj << Covariance of Estimates( state=0|1 )

**说明:** 显示或隐藏指定拟合的参数估计值之间的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Covariance of Estimates( 1 );

```

#### Custom Test

**语法:** obj << Custom Test( [ l1 l2 l3 ... ], <Label( name )> )

**说明:** 运行定制的 F 检验，它对比模型中的不同效应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
obj << Custom Test( [0 .5 0 0 0 0 0 .5 -1], Label( "Test 1" ) );

```

#### Deviance Residuals

**语法:** obj << Deviance Residuals

**说明:** 将新列保存至数据表。新列包含偏离残差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals;

```

#### Deviance Residuals by Predicted

**语法:** obj << Deviance Residuals by Predicted( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示偏离残差，水平轴上显示预测响应值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Deviance Residuals by Predicted( 1 );

```

#### Effect Summary

**语法:** obj << Effect Summary( state=0|1 )

**说明:** 显示或隐藏“效应汇总”报表，它允许您以交互方式更新模型中的效应。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**语法:** obj << FDR( state=0|1 )

**说明:** 指定“效应汇总”表中的 Logworth 值及其相应的 p 值是否使用假发现率 (FDR) 调整。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Firth Bias-Adjusted Estimates

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定使用 Firth 偏倚调整方法拟合模型。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### GLM Distribution

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

<b>启动窗口项: 是</b>

**说明:** 指定响应变量的概率分布。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Inverse Prediction

**语法:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**说明:** 基于指定的 Y 值和所有其他因子，生成 X 预测值和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Overdispersion Tests and Intervals( 0 ),
	"Firth Bias-Adjusted Estimates"n( 0 ),
	Run
);
// Exactly one term value must be set to missing.
obj << Inverse Prediction(
	Response( 5, 6 ),
	Term Value(
		color( "Dark" ),
		spine( "Both Good" ),
		width( 26.2988439306358 ),
		weight( . )
	)
);

```

#### Linear Predictor Plot

**语法:** obj << Linear Predictor Plot( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示反连结函数变换的响应，水平轴上显示连续预测变量。仅当有一个连续预测变量并且不多于一个分类预测变量时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run()
);
obj << Linear Predictor Plot( 1 );

```

#### Link Function

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

<b>启动窗口项: 是</b>

**说明:** 指定模型的连结函数。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Mean Confidence Interval

**语法:** obj << Mean Confidence Interval

**说明:** 将新列保存至数据表。新列包含模型预测方程的 95% 置信限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Model Dialog;

```

#### Overdispersion Tests and Intervals

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定过度离散参数应要包括在模型中。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Pearson Residuals

**语法:** obj << Pearson Residuals

**说明:** 将新列保存至数据表。新列包含 Pearson 残差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals;

```

#### Pearson Residuals by Predicted

**语法:** obj << Pearson Residuals by Predicted( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示 Pearson 残差，水平轴上显示预测响应值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Pearson Residuals by Predicted( 1 );

```

#### Power Link Parameter

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定“功效”连结函数的参数。仅当在“广义线性模型”特质中“功效”指定为连结函数时可用。 默认为“1”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Predicted Values

**语法:** obj << Predicted Values

**说明:** 将新列保存至数据表。新列包含模型预测的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**语法:** obj << Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含由指定模型计算的均值预测值的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);
obj << Profiler( 1 );

```

#### Regression Plot

**语法:** obj << Regression Plot( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示响应，水平轴上显示连续预测变量。仅当有一个连续预测变量并且不多于一个分类预测变量时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :weight, :color ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Regression Plot( 0 ) )
);
Wait( 1 );
obj << Regression Plot( 1 );

```

#### Save Indiv Confid Limits

**语法:** obj << Save Indiv Confid Limits

**说明:** 将新列保存至数据表。新列包含模型给定单值的 95% 置信限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Save Indiv Confid Limits;

```

#### Studentized Deviance Residuals

**语法:** obj << Studentized Deviance Residuals

**说明:** 将新列保存至数据表。新列包含学生化偏离残差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Deviance Residuals;

```

#### Studentized Deviance Residuals by Predicted

**语法:** obj << Studentized Deviance Residuals by Predicted( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示学生化偏离残差，水平轴上显示预测响应值。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run( Studentized Deviance Residuals by Predicted( 0 ) )
);
Wait( 1 );
obj << Studentized Deviance Residuals by Predicted( 1 );

```

#### Studentized Pearson Residuals

**语法:** obj << Studentized Pearson Residuals

**说明:** 将新列保存至数据表。新列包含学生化 Pearson 残差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals;

```

#### Studentized Pearson Residuals by Predicted

**语法:** obj << Studentized Pearson Residuals by Predicted( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示学生化 Pearson 残差，水平轴上显示预测响应值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Studentized Pearson Residuals by Predicted( 1 );

```

#### Surface Profiler

**语法:** obj << Surface Profiler( state=0|1 )

**说明:** 显示或隐藏响应的交互式曲面图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);
obj << Surface Profiler( 1 );

```

## Fit Least Squares > Effect Fit > Control Differences Chart

### 项消息

#### Point Options

**语法:** scrobj << Point Options( "Show Needles"|"Show Connected Points"|"Show Only Points" )

**说明:** 指定图表中点的绘制样式。您可以在垂直针、连接点和仅点之间进行选择。默认情况下，图表使用针绘制，这些针将点连接到在平均值处绘制的水平线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Point Options( "Show Only Points" ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Point Options( "Show Connected Points" );

```

#### Show Center Line

**语法:** scrobj << Show Center Line( state=0|1 )

**说明:** 显示或隐藏控制差值图中的中心线（总均值）。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Center Line( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Center Line( 1 );

```

#### Show Decision Limit Shading

**语法:** scrobj << Show Decision Limit Shading( state=0|1 )

**说明:** 显示或隐藏控制差值图的决策限着色。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limit Shading( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limit Shading( 1 );

```

#### Show Decision Limits

**语法:** scrobj << Show Decision Limits( state=0|1 )

**说明:** 显示或隐藏控制差值图的决策限线。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1, Show Decision Limits( 0 ) )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Decision Limits( 1 );

```

#### Show Summary Report

**语法:** scrobj << Show Summary Report( state=0|1 )

**说明:** 显示或隐藏包含组均值和决策限的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 1 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["Control Differences"] << get scriptable object);
scrobj << Show Summary Report( 1 );

```

## Fit Least Squares > Effect Fit

### 项消息

#### LSMeans Contrast

**语法:** scrobj << LSMeans Contrast( [ l1, l2, l3, ... ] );

obj << ( effect << {LSMeans Contrast( [ l1, l2, l3, ... ] )} )

**说明:** 对效应不同水平的统计对比运行定制的 F 检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Contrast( [1 0 -1] )});

```

#### LSMeans Dunnett

**语法:** scrobj << LSMeans Dunnett( state=0|1|<alpha>, Control Level( level ), <comparison options> );

obj << ( effect << {LSMeans Dunnett( state=0|1|<alpha>, Control Level( level ), <comparison options> )} )

**说明:** 显示或隐藏针对指定控制水平的配对比较的检验和置信区间。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( 1, Control Level( "a" ) )});

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Dunnett( .01, Control Level( "a" ) )});

```

#### LSMeans Plot

**语法:** scrobj << LSMeans Plot;

obj << ( effect << {LSMeans Plot} )

**说明:** 显示名义型和有序型效应的最小二乘均值图。若效应是交互作用，该选项显示“最小二乘均值图选项”窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {LSMeans Plot});

```

#### LSMeans Student's t

**语法:** scrobj << Student&apos;s t( state=0|1|<alpha>, <comparison options> );

obj << ( effect << {Student&apos;s t( state=0|1|<alpha>, <comparison options> )} )

**说明:** 显示或隐藏使用 Student t 检验的最小二乘均值配对比较的检验和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Student's t( 1 )});

```

#### LSMeans Table

**语法:** scrobj << LSMeans Table( state=0|1 );

obj << ( effect << {LSMeans Table( state=0|1 )} )

**说明:** 显示或隐藏检验效应时比较的统计量表。该选项不可用于连续效应。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Table( 0 )} )
);
Wait( 1 );
obj << (:Drug << {LSMeans Table( 1 )});

```

#### LSMeans Tukey HSD

**语法:** scrobj << LSMeans Tukey HSD( state=0|1|<alpha>, <comparison options> );

obj << ( effect << {LSMeans Tukey HSD( state=0|1|<alpha>, <comparison options> )} )

**说明:** 显示或隐藏使用 Tukey-Kramer 真实显著性差异 (HSD) 检验的最小二乘均值配对比较的检验和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
obj << (:Drug << {LSMeans Tukey HSD( 1 )});

```

#### Power Analysis

**语法:** scrobj << Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, <Power Plot>, <Done>);

obj << ( effect << {Power Analysis( Alpha(from, to, by), Sigma(from, to, by), Delta(from, to, by), Number(from, to, by), objective, <Power Plot>, <Done>)} )

**说明:** 显示“功效详细信息”报表，它允许您分析效应检验的功效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:Drug << {Power Analysis(
	Alpha( 0.05 ),
	Sigma( 4.00577754367453 ),
	Delta( 1.51166255719209 ),
	Number( 10, 100, 10 ),
	Solve for Power,
	Power Plot,
	Done
)});

```

#### Test Slices

**语法:** scrobj << Test Slices( state=0|1 );

obj << ( response << { effect1 * effect2 << {Test Slices( state=0|1 )} } )

**说明:** 对交互作用项中两个因子的每个水平运行定制的 F 检验。该选项仅可用于涉及名义型和有序型效应的交互作用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 1 );
obj << (:height << {:age * :sex << {Test Slices( 1 )}});

```

## Fit Least Squares > LSMeans Comparisons

### 项消息

#### Connecting Letters Report

**语法:** scrobj << Connecting Letters Report( state=0|1 )

**说明:** 显示或隐藏通过连接字母表示的显著和不显著比较。没有由相同字母连接的水平有显著差异。由相同字母连接的水平没有显著差异。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( 1, Connecting Letters Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Connecting Letters Report( 1 );

```

#### Control Differences Chart

**语法:** scrobj << Control Differences Chart( state=0|1 )

**说明:** 显示或隐藏一个图表，它为效应的每个水平（控制水平除外）包含一个点。每个点显示该水平的最小二乘均值和控制水平的最小二乘均值之间的差值。绘制上决策限 (UDL) 和下决策限 (LDL)。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Chart( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Chart( 1 );

```

#### Control Differences Report

**语法:** scrobj << Control Differences Report( state=0|1 )

**说明:** 显示或隐藏一个表，它为效应的每个水平（控制水平除外）包含一行。每行包含要与控制水平比较的水平、估计的差值、差值的标准误差、置信区间和比较的 p 值。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run(
		:Drug << {LSMeans Dunnett(
			.05,
			Control Level( "a" ),
			Control Differences Report( 0 )
		)}
	)
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Dunnett"] << get scriptable object);
scrobj << Control Differences Report( 1 );

```

#### Crosstab Report

**语法:** scrobj << Crosstab Report( state=0|1 )

**说明:** 显示或隐藏交叉表报表，该报表包含最小二乘均值每种组合的差值、该差值的标准误差和该差值的置信限。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1, Crosstab Report( 0 ) )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Crosstab Report( 1 );

```

#### Detailed Comparisons

**语法:** scrobj << Detailed Comparisons( state=0|1 )

**说明:** 显示或隐藏最小二乘均值的每个组合的详细报表。该报表还包含一个图形，显示每个比较的显著性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Detailed Comparisons( 1 );

```

#### Equivalence Test

**语法:** scrobj << Equivalence Test( difference )

**说明:** 检验在均值间差异不超过指定差值时认为这些均值基本相等。该检验与常见的显著性检验相逆。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Equivalence Test( 1.5 );

```

#### Ordered Differences Report

**语法:** scrobj << Ordered Differences Report( state=0|1 )

**说明:** 显示或隐藏一个报表，它对每个水平的最小二乘均值的差值从最大到最小排名。该报表还包含差值的标准误差、置信限和 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Tukey HSD( .05 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Tukey HSD"] << get scriptable object);
scrobj << Ordered Differences Report( 1 );

```

#### Save Connecting Letters Table

**语法:** scrobj << Save Connecting Letters Table

**说明:** 创建一个数据表，其中的列包含效应的水平、连接字母、最小二乘均值、其标准误差和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( :Drug << {LSMeans Student's t( 1 )} )
);
Wait( 1 );
scrobj = (Report( obj )["LSMeans Differences Student's t"] << get scriptable object);
scrobj << Save Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Equivalence Tests

### 项消息

#### Forest Plot

**语法:** scrobj << Forest Plot( state=0|1 )

**说明:** 显示或隐藏等价性检验森林图。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Forest Plot( 1 );

```

#### Remove

**语法:** scrobj << Remove

**说明:** 删除“等价性检验”报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Forest Plot( 0 ) ) );
Wait( 2 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Remove;

```

#### Scatterplot

**语法:** scrobj << Scatterplot( state=0|1 )

**说明:** 显示或隐藏“等价性检验散点图”。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Scatterplot( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Scatterplot( 1 );

```

#### Test Report

**语法:** scrobj << Test Report( state=0|1 )

**说明:** 显示或隐藏“等价性检验”报表，其中包含双单侧检验 (TOST) 方法，用于检测两个均值之间的实效性差值。 默认开启。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Equivalence Tests( 5, Test Report( 0 ) ) );
Wait( 1 );
scrobj = Report( obj )["Equivalence Tests"] << get scriptable object;
scrobj << Test Report( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons > Mean Mean Scatterplot

### 项消息

#### Show Reference Lines

**语法:** scrobj << Show Reference Lines( state=0|1 )

**说明:** 显示或隐藏散点图中点的参考值网格线。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1 ) );
Wait( 1 );
scrobj = Report( obj )["All Pairwise Comparisons Scatterplot"] << get scriptable object;
scrobj << Show Reference Lines( 1 );

```

## Fit Least Squares > Multiple Comparisons > All Pairwise Comparisons

### 项消息

#### All Pairwise Comparisons Scatterplot

**语法:** scrobj << All Pairwise Comparisons Scatterplot( state=0|1 )

**说明:** 显示或隐藏“所有配对比较散点图”。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Comparisons Scatterplot( 1 );

```

#### All Pairwise Differences

**语法:** scrobj << All Pairwise Differences( state=0|1 )

**说明:** 显示或隐藏“所有配对差值”报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( Drug ), Tukey HSD( 1, All Pairwise Differences( 0 ) ) );
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << All Pairwise Differences( 1 );

```

#### All Pairwise Differences Connecting Letters

**语法:** scrobj << All Pairwise Differences Connecting Letters( state=0|1 )

**说明:** 显示或隐藏“所有配对差值连接字母”报表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Save All Pairwise Differences Connecting Letters Table

**语法:** scrobj << Save All Pairwise Differences Connecting Letters Table

**说明:** 创建一个数据表，其中的列包含效应的水平、连接字母、最小二乘均值、其标准误差和置信区间。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Analgesics.jmp" );
obj = dt << Fit Model(
	Y( :pain ),
	Effects( :gender, :drug, :gender * :drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run(
		Multiple Comparisons(
			Effect( Drug ),
			Tukey HSD( 1, All Pairwise Comparisons Scatterplot( 0 ) )
		)
	)
);
Wait( 1 );
scrobj = (Report( obj )["Tukey HSD All Pairwise Comparisons"] << get scriptable object);
scrobj << Save All Pairwise Differences Connecting Letters Table;

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Control

### 项消息

#### Calculate Adjusted P-Values

**语法:** scrobj << "Calculate Adjusted P-Values"n( state=0|1 )

**说明:** 显示或隐藏“与控制组差异”报表中的 p 值列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Control Decision Chart

**语法:** scrobj << Comparisons with Control Decision Chart( state=0|1 )

**说明:** 显示或隐藏“与控制组比较决策图”。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control(
		1,
		Control Level( "Drug:a" ),
		Comparisons with Control Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Comparisons with Control Decision Chart( 1 );

```

#### Differences from Control

**语法:** scrobj << Differences from Control( state=0|1 )

**说明:** 显示或隐藏“与控制组差异”报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ), Differences from Control( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Control"] << get scriptable object);
scrobj << Differences from Control( 1 );

```

## Fit Least Squares > Multiple Comparisons > Comparisons with Overall Average

### 项消息

#### Calculate Adjusted P-Values

**语法:** scrobj << "Calculate Adjusted P-Values"n( state=0|1 )

**说明:** 显示或隐藏“与总平均值差异”报表中的 p 值列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << "Calculate Adjusted P-Values"n( 1 );

```

#### Comparisons with Overall Average Decision Chart

**语法:** scrobj << Comparisons with Overall Average Decision Chart( state=0|1 )

**说明:** 显示或隐藏“与总平均值比较决策图”。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average(
		1,
		Comparisons with Overall Average Decision Chart( 0 )
	)
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Comparisons with Overall Average Decision Chart( 1 );

```

#### Differences from Overall Average

**语法:** scrobj << Differences from Overall Average( state=0|1 )

**说明:** 显示或隐藏“与总平均值差异”报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Overall Average( 1, Differences from Overall Average( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Comparisons with Overall Average"] << get scriptable object);
scrobj << Differences from Overall Average( 1 );

```

## Fit Least Squares > Multiple Comparisons > Least Squares Means Plot

### 项消息

#### Remove

**语法:** scrobj << Remove

**说明:** 从报表中删除“最小二乘均值”图。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 2 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Remove;

```

#### Show Confidence Limits

**语法:** scrobj << Show Confidence Limits( state=0|1 )

**说明:** 显示或隐藏图中每个估计值的置信限。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Confidence Limits( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Confidence Limits( 1 );

```

#### Show Connected Points

**语法:** scrobj << Show Connected Points( state=0|1 )

**说明:** 显示或隐藏连接图中每个水平的最小二乘均值的一条或多条线。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Least Squares Means Plot( Show Connected Points( 0 ) )
);
Wait( 1 );
scrobj = (Report( obj )["Least Squares Means Plot"] << get scriptable object);
scrobj << Show Connected Points( 1 );

```

## Fit Least Squares > Multiple Comparisons

### 项消息

#### Comparisons with Control

**语法:** scrobj << Comparisons with Control( state=0|1, Control Level( level ), <options> );

obj << Multiple Comparisons( Effect( effect ), Comparisons with Control( state=0|1, Control Level( level ), <options> ) )

**说明:** 显示或隐藏将每个效应最小二乘均值与控制水平的最小二乘均值进行比较的多重比较检验。这也被称为 Dunnett 检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Comparisons with Control( 1, Control Level( "Drug:a" ) )
);

```

#### Comparisons with Overall Average

**语法:** scrobj << Comparisons with Overall Average( state=0|1, <options> );

obj << Multiple Comparisons( Effect( effect ), Comparisons with Overall Average( state=0|1, <options> ) )

**说明:** 显示或隐藏将每个效应最小二乘均值与总平均值最小二乘均值进行比较的多重比较检验。这也被称为均值分析检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Comparisons with Overall Average( 1 ) );

```

#### Equivalence Tests

**语法:** scrobj << Equivalence Tests( number );

obj << Multiple Comparisons( Effect( effect ), Equivalence Tests( number ) )

**说明:** 显示或隐藏针对被认为实效上等价的指定差异进行的所有配对最小二乘均值比较的多重比较检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Equivalence Tests( 5 ) );

```

#### Least Squares Means Plot

**语法:** scrobj << Least Squares Means Plot;

obj << Multiple Comparisons( Effect( effect ), Least Squares Means Plot )

**说明:** 显示带标准误差条的最小二乘均值图。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );

```

#### Remove

**语法:** scrobj << Remove

**说明:** 删除“多重比较”报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons( Effect( :Drug ), Least Squares Means Plot );
Wait( 2 );
scrobj = (Report( obj )["Multiple Comparisons for Drug"] << get scriptable object);
scrobj << Remove;

```

#### Slice F Test

**语法:** scrobj << Slice F Test( state=0|1 );

obj << Multiple Comparisons( Sliced Effect Estimates( Sliced Effect( effect1 * effect2 ), Slice Term List( effect_level ) ), Slice F Test( state=0|1 ) )

**说明:** 显示或隐藏切片效应的 F 检验。 默认开启。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height ),
	Effects( :age, :sex, :age * :sex ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run
);
Wait( 0 );
obj << Multiple Comparisons(
	Sliced Effect Estimates( Sliced Effect( :age * :sex ), Slice Term List( :age( "12" ) ) ),
	Slice F Test( 1 )
);
Wait( 1 );
scrobj = (Report( obj )["Multiple Comparisons for Slice of age*sex where age = 12"] <<
get scriptable object);
scrobj << Slice F Test( 0 );
Wait( 1 );
scrobj << Slice F Test( 1 );

```

#### Student's t

**语法:** scrobj << Student&apos;s t( state=0|1, <options> );

obj << Multiple Comparisons( Effect( effect ), Student&apos;s t( state=0|1, <options> ) )

**说明:** 显示或隐藏使用 Student t 检验的所有配对最小二乘均值的多重比较检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Student's t( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

#### Tukey HSD

**语法:** scrobj << Tukey HSD( state=0|1, <options> );

obj << Multiple Comparisons( Effect( effect ), Tukey HSD( state=0|1, <options> ) )

**说明:** 显示或隐藏使用 Tukey-Kramer 真实显著性差异 (HSD) 检验的所有配对最小二乘均值的多重比较检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Drug ),
	Tukey HSD( 1, All Pairwise Differences Connecting Letters( 1 ) )
);

```

## Fit Least Squares > REML

### 项消息

#### Convergence Limit

**语法:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

<b>启动窗口项: 是</b>

**说明:** 指定模型拟合的收敛极限。若您的模型不容易收敛，您可能希望增加收敛极限。默认情况下，收敛极限为 0.00000001。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Maximum Iterations

**语法:** obj = Fit Model(...Maximum Iterations( number=100 )...)

<b>启动窗口项: 是</b>

**说明:** 指定模型拟合中使用的最大迭代次数。默认情况下，最大迭代次数为 100。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**语法:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

<b>启动窗口项: 是</b>

**说明:** 指定用于在“标准最小二乘法”特质中拟合混合模型的方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### NoBounds

**语法:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 删除方差估计限制。若关闭，则方差估计的下限设置为零。仅可用于“标准最小二乘法”特质。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

## Fit Least Squares > Response Fit

### 共享项消息

#### Action

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Individual Response Fit(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Individual Response Fit

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**说明:** 拟合连续响应的线性回归模型。方法包括回归、方差分析、协方差分析、混合模型和设计实验分析。“重点”选项允许您指定报表布局。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### 项消息

#### AICc

**语法:** obj << AICc( state=0|1 )

**说明:** 显示或隐藏“拟合汇总”报表中校正的 Akaike 信息准则 (AICc) 和 Bayes 信息准则 (BIC) 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**语法:** obj << Analysis of Variance( state=0|1 )

**说明:** 显示或隐藏一个报表，它包含用于将拟合模型与简单均值模型进行比较的统计量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**语法:** obj << Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go  )

**说明:** 显示或隐藏使用 Bayes 方法计算所有模型项的后验概率的图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**语法:** obj << Box Cox Y Transformation( state=0|1, <Save Best Transformation( state=0|1 )>, <Save Specific Transformation( number )>, <Table of Estimates( state=0|1 )> )

**说明:** 显示或隐藏“Box-Cox 变换”报表，它显示了若对响应采用幂 (Box-Cox) 变换来重新拟合模型，拟合方式是如何随之更改的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**语法:** obj << Compare Slopes( Effect( effect ), <options> )

**说明:** 生成均值分析 (ANOM) 报表，它将交互作用斜率与协方差分析 (ANCOVA) 模型的平均斜率进行比较。该选项仅在存在一个名义型效应、连续效应及其固定效应的交互作用效应时可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**语法:** obj << Conditional Indiv CI( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含条件预测单值的置信区间。置信区间包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**语法:** obj << Conditional Mean CI( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含条件预测期望值的置信区间。置信区间包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**语法:** obj << Conditional Pred Formula

**说明:** 将新公式列保存至数据表。新列包含一个公式，它包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**语法:** obj << Conditional Pred Values

**说明:** 将新列保存至数据表。新列包含使用随机效应系数的最佳线性无偏预测变量 (BLUP) 计算的条件预测值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**语法:** obj << Conditional Residuals

**说明:** 将新列保存至数据表。新列包含条件预测的残差。残差值包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。仅当模型包含多个连续因子时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**语法:** obj << Cook&apos;s D Influence

**说明:** 将新列保存至数据表。新列包含每个观测在估计模型中影响大小的测度。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**语法:** obj << Correlation of Estimates( state=0|1 )

**说明:** 显示或隐藏指定拟合的参数估计值之间的相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**语法:** obj << Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**说明:** 显示或隐藏基于指定的参考混料值的 Cox 混料模型的参数估计值。该选项仅在模型包含混料效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**语法:** obj << Cube Plots( state=0|1 )

**说明:** 显示或隐藏展示在一个或多个立方图中的因子范围极值的预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**语法:** obj << Custom Test( [l1, l2, l3, ... ], <Label( text )> )

**说明:** 运行定制的 F 检验，它对比模型中的不同效应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**语法:** obj << Durbin Watson Test( state=0|1 )

**说明:** 显示或隐藏 Durbin-Watson 报表，它包含检验残差是否具有一阶自相关性的统计量。该报表还显示残差的自相关性以及与统计量有关的精确概率。该选项仅适用于时间序列数据，并且假定您的观测是按时间顺序的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**语法:** obj << Effect Details( state=0|1 )

**说明:** 显示或隐藏模型中每个效应的详细报表，包括每个分类效应的最小二乘均值表。通过向模型效应发送消息可以显示其他信息。请参见“拟合模型”下的“效应拟合”对象以获取详细信息。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**语法:** obj << Effect Leverage Pairs

**说明:** 将新列保存至数据表。新列包含在效应杠杆图中绘制的 X 和 Y 值。Y 值是偏残差。X 值是效应杠杆图中收缩后的回归变量。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**语法:** obj << Effect Summary( state=0|1 )

**说明:** 显示或隐藏“效应汇总”报表，它允许您以交互方式更新模型中的效应。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**语法:** obj << Effect Tests( state=0|1 )

**说明:** 显示或隐藏包含模型中固定效应的检验的报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**语法:** obj << Error Specification( "默认估计"|"纯误差"|"指定" )

**说明:** 指定用于“拟合最小二乘法”报表中标准误差和检验的误差方差和误差自由度。该选项仅在模型不含随机效应时可用。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**语法:** obj << Expanded  Estimates( state=0|1 )

**说明:** 显示或隐藏名义模型效应的所有水平的参数估计值。对于具有 k 个水平的名义效应，参数估计值表包含 k-1 个参数的系数，而“扩展后的估计值”表包含全部 k 个水平的效应系数。该选项仅在至少一个效应不是连续型时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**语法:** obj << Externally Studentized Residuals

**说明:** 将新列保存至数据表。新列包含外部学生化残差。这些是将残差除以排除当前行之后的标准误差估计值后得到的。 Hold down the shift key to enter suffix.

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**语法:** obj << FDR( state=0|1 )

**说明:** 指定“效应汇总”表中的 Logworth 值及其相应的 p 值是否使用假发现率 (FDR) 调整。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**语法:** obj << Get Conditional Formula

**说明:** 返回包括随机效应估计值的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**语法:** obj << Get Effect Names

**说明:** 返回效应名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**语法:** obj << Get Effect PValues

**说明:** 返回效应 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**语法:** obj << Get Estimates

**说明:** 返回估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**语法:** obj << Get Indiv Confid Limit Formula

**说明:** 返回单值置信限的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**语法:** obj << Get MM SAS DATA Step

**说明:** 创建可以在 SAS Model Manager 中注册的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**语法:** obj << Get Mean Confid Limit Formula

**说明:** 返回均值置信限的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**语法:** obj << Get Measures

**说明:** 从模型返回拟合测度汇总。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

#### Get Parameter Names

**语法:** obj << Get Parameter Names

**说明:** 返回参数名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**语法:** obj << Get Parameterized Formula

**说明:** 返回使用参数而不是常数的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**语法:** obj << Get Prediction Formula

**说明:** 构造一个脚本，以便创建预测公式列并返回它。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**语法:** obj << Get Random Effect Names

**说明:** 返回随机效应的名称。用于 REML 分析方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**语法:** obj << Get SAS DATA Step

**说明:** 创建可用于对新数据集进行评分的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**语法:** obj << Get SQL prediction expression

**说明:** 创建一个 SQL 表达式，您可以将其粘贴到 SQL Select 语句中以预测响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**语法:** obj << Get Standard Error Formula

**说明:** 返回标准误差的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**语法:** obj << Get Std Errors

**说明:** 返回标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**语法:** obj << Get Variance Components

**说明:** 返回方差分量。用于 REML 分析方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**语法:** obj << Get X Matrix

**说明:** 返回设计矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**语法:** obj << Get XPX Inverse

**说明:** 返回 X&apos;X 逆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**语法:** obj << Get Y Matrix

**说明:** 返回 Y 矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**语法:** obj << Hats

**说明:** 将新列保存至数据表。新列包含矩阵 xInv(x`x)x` 的对角线值。这些值也称为帽子或杠杆率值。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**语法:** obj << Indicator Parameterization Estimates( state=0|1 )

**说明:** 显示或隐藏“指标函数参数化”报表，它包含使用经典指标函数参数化的模型中具有名义型效应的参数估计值。该选项仅在模型效应中有名义型列和截距时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**语法:** obj << Indiv Confidence Interval( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含实际响应单值的置信区间界限。它既包含响应变异也包含估计值变异。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**语法:** obj << Indiv Confidence Limit Formula( <alpha=0.05> )

**说明:** 将新公式列保存至原始数据表。这些列表示单值预测的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**语法:** obj << Interaction Plots( state=0|1 )

**说明:** 显示或隐藏交互作用图的矩阵。该选项仅在模型中存在交互作用效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**语法:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**说明:** 基于指定的 Y 值和所有其他因子，生成 X 预测值和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**语法:** obj << Joint Factor Tests( state=0|1 )

**说明:** 显示或隐藏模型中每个主效应的联合检验。该联合检验针对涉及该主效应的所有参数。该选项仅在模型包含交互作用时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**语法:** obj << Lack of Fit( state=0|1 )

**说明:** 显示或隐藏评估模型是否具有适当效应的检验。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**语法:** obj << Mean Confidence Interval( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含期望值的置信区间界限。它包含估计值的变异，但没有包含响应的变异。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**语法:** obj << Mean Confidence Limit Formula( <alpha=0.05> )

**说明:** 将新公式列保存至原始数据表。这些列表示响应均值的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**语法:** obj << Mixture Profiler( state=0|1 )

**说明:** 显示或隐藏混料刻画器，它在三元图上显示响应的等高线。仅当“混料效应”特性应用于模型中的三个或更多因子或者“混料”属性应用于三个或更多因子列时，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**语法:** obj << Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), <options> )

**说明:** 生成最小二乘均值估计值或用户定义估计值。多重比较报表允许与总平均值比较、与控制组比较或配对比较。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**语法:** obj << Normal Plot( state=0|1 )

**说明:** 显示或隐藏标识偏离正态的参数估计值的图。这有助于您确定哪些效应是活跃的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**语法:** obj << Parameter Estimates( state=0|1 )

**说明:** 显示或隐藏一个报表，它包含每个参数等于零的假设的参数估计值和 t 检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**语法:** obj << Parameter Power( state=0|1 )

**说明:** 在“参数估计值”报表中添加或删除列。这些列包含与相应的假设检验有关的功效和其他详细信息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**语法:** obj << Parameterized Formula

**说明:** 将新公式列保存至数据表。新列包含使用表参数而不是常数的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**语法:** obj << Pareto Plot( state=0|1 )

**说明:** 显示或隐藏正交化和标准化参数估计值的绝对值的图。该图显示各个值相对于绝对值总和的比例。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**语法:** obj << Plot Actual by Predicted( state=0|1 )

**说明:** 显示或隐藏“预测值-实际值”图，它绘制响应的观测值对比响应的预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**语法:** obj << Plot Effect Leverage( state=0|1 )

**说明:** 显示或隐藏模型中每个效应的“杠杆图”报表。该图显示观测如何影响该效应的检验，并给出有关多重共线性的见解。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**语法:** obj << Plot Regression( state=0|1 )

**说明:** 显示或隐藏“回归图”报表，它包含数据的散点图和分类效应的每个水平的回归线。该选项仅在模型中恰好有一个连续效应并且不多于一个分类效应时可用。若满足这些条件，则默认提供“回归图”报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**语法:** obj << Plot Residual by Normal Quantiles( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示残差，水平轴上显示残差的正态分位数。该选项在“方法”为 REML 时不可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**语法:** obj << Plot Residual by Predicted( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示残差，水平轴上显示响应的预测值。该选项仅可用于连续响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**语法:** obj << Plot Residual by Row( state=0|1 )

**说明:** 显示或隐藏垂直轴上显示残差且水平轴上显示行号的图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**语法:** obj << Plot Studentized Residuals( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示学生化残差，水平轴上显示行号。图上的每个点都是使用删除了当前观测后得到的标准差的估计值来计算的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**语法:** obj << Predicted Values

**说明:** 将新列保存至数据表。新列包含拟合模型的预测值。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**语法:** obj << Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含拟合模型的预测公式。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**语法:** obj << Prediction and Interval Formulas( <alpha=0.05> )

**说明:** 将新列保存至数据表。这些列包含用于预测、置信限和预测限的公式。该选项创建的限值列包含“预测刻画器”使用的属性。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

#### Press

**语法:** obj << Press( state=0|1 )

**说明:** 显示或隐藏预测误差平方和 (Press) 统计量及其均方根误差 (RMSE)。Press 统计量在比较多个模型时很有用。具有更低 Press 统计量的模型受到青睐。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**语法:** obj << Publish Conditional Formula

**说明:** 创建包括随机效应估计值的预测公式，并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**语法:** obj << Publish Indiv Confid Limit Formula

**说明:** 创建单值置信限的公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**语法:** obj << Publish Mean Confid Limit Formula

**说明:** 创建均值置信限的公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**语法:** obj << Publish Parameterized Formula

**说明:** 创建使用参数而不是常数的预测公式，并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**语法:** obj << Publish Prediction Formula

**说明:** 创建预测公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**语法:** obj << Publish Standard Error Formula

**说明:** 创建标准误差公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

#### Residuals

**语法:** obj << Residuals

**说明:** 将新列保存至数据表。新列包含拟合模型的残差值。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**语法:** obj << Save Coding Table

**说明:** 创建一个新数据表，它包含所有模型参数的 JMP 编码。最后一列显示响应变量的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**语法:** obj << Scaled Estimates( state=0|1 )

**说明:** 显示或隐藏与已调整为均值为零且极差为二的因子相对应的参数估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**语法:** obj << Sequential Tests( state=0|1 )

**说明:** 显示或隐藏“序贯（1 型）检验”报表，它包含当效应按顺序添加至模型时的平方和。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**语法:** obj << Show All Confidence Intervals( state=0|1 )

**说明:** 显示或隐藏参数估计值和最小二乘均值估计值的置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**语法:** obj << Show Prediction Expression( state=0|1 )

**说明:** 显示或隐藏包含估计模型方程的“预测表达式”报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**语法:** obj << Show Sqrt Variance Component( state=0|1 )

**说明:** 显示或隐藏“REML 方差分量的估计值”报表中的“方差分量平方根”列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**语法:** obj << Show VIF( state=0|1 )

**说明:** 显示或隐藏“参数估计值”报表中方差膨胀因子 (VIF) 的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**语法:** obj << Sorted Estimates( state=0|1 )

**说明:** 显示或隐藏“排序后的参数估计值”报表，它可在筛选情况下使用。该报表包含按每个估计值的 t 比绝对值排序的参数估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**语法:** obj << Std Error of Individual

**说明:** 将新列保存至数据表。新列包含单个预测值的标准误差。它用于计算单值置信区间。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**语法:** obj << Std Error of Predicted

**说明:** 将新列保存至数据表。新列包含预测值的标准误差。它用于计算均值置信区间。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**语法:** obj << Std Error of Residual

**说明:** 将新列保存至数据表。新列包含残差值的标准误差。它用于计算学生化残差。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**语法:** obj << StdErr Pred Formula

**说明:** 将新公式列保存至数据表。新列包含作为回归变量函数的预测值标准误差公式。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**语法:** obj << Studentized Residuals

**说明:** 将新列保存至数据表。新列包含学生化残差，即残差除以其标准误差。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**语法:** obj << Summary of Fit( state=0|1 )

**说明:** 显示或隐藏包含模型拟合统计量汇总的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**语法:** obj << Surface Profiler( state=0|1 )

**说明:** 显示或隐藏响应曲面的三维曲面图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

## Fit Least Squares

### 共享项消息

#### Action

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Least Squares Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Least Squares Personality

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage"|"Effect Screening"|"Minimal Report" )

**说明:** 拟合连续响应的线性回归模型。方法包括回归、方差分析、协方差分析、混合模型和设计实验分析。“重点”选项允许您指定报表布局。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);

```

### 项消息

#### AICc

**语法:** obj << AICc( state=0|1 )

**说明:** 显示或隐藏“拟合汇总”报表中校正的 Akaike 信息准则 (AICc) 和 Bayes 信息准则 (BIC) 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << AICc( 1 );

```

#### Analysis of Variance

**语法:** obj << Analysis of Variance( state=0|1 )

**说明:** 显示或隐藏一个报表，它包含用于将拟合模型与简单均值模型进行比较的统计量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Analysis of Variance( 0 ) )
);
Wait( 1 );
obj << Analysis of Variance( 1 );

```

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

dt2 = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj2 = dt2 << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj2 << (:Oxy << Apply Preset( preset ));

```

#### Bayes Plot

**语法:** obj << Bayes Plot( K( number ), Priors( p1, p2, p3, ... ), Go  )

**说明:** 显示或隐藏使用 Bayes 方法计算所有模型项的后验概率的图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Bayes Plot( K( 10 ), Priors( 0.2, 0.2, 0.2, 0.2, 0.2 ), Go );

```

#### Box Cox Y Transformation

**语法:** obj << Box Cox Y Transformation( state=0|1, <Save Best Transformation( state=0|1 )>, <Save Specific Transformation( number )>, <Table of Estimates( state=0|1 )> )

**说明:** 显示或隐藏“Box-Cox 变换”报表，它显示了若对响应采用幂 (Box-Cox) 变换来重新拟合模型，拟合方式是如何随之更改的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Box Cox Y Transformation( 1, Save Best Transformation( 1 ) );

```

#### Compare Slopes

**语法:** obj << Compare Slopes( Effect( effect ), <options> )

**说明:** 生成均值分析 (ANOM) 报表，它将交互作用斜率与协方差分析 (ANCOVA) 模型的平均斜率进行比较。该选项仅在存在一个名义型效应、连续效应及其固定效应的交互作用效应时可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/US Demographics.jmp" );
obj = dt << Fit Model(
	Y( :Eighth Grade Math ),
	Effects( :Region, :High School Graduates, :Region * :High School Graduates ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Region * :High School Graduates ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Indiv CI

**语法:** obj << Conditional Indiv CI( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含条件预测单值的置信区间。置信区间包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Indiv CI( 0.001 );

```

#### Conditional Mean CI

**语法:** obj << Conditional Mean CI( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含条件预测期望值的置信区间。置信区间包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Mean CI( 0.01 );

```

#### Conditional Pred Formula

**语法:** obj << Conditional Pred Formula

**说明:** 将新公式列保存至数据表。新列包含一个公式，它包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Formula;

```

#### Conditional Pred Values

**语法:** obj << Conditional Pred Values

**说明:** 将新列保存至数据表。新列包含使用随机效应系数的最佳线性无偏预测变量 (BLUP) 计算的条件预测值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Pred Values;

```

#### Conditional Residuals

**语法:** obj << Conditional Residuals

**说明:** 将新列保存至数据表。新列包含条件预测的残差。残差值包括具有随机效应的模型的随机效应估计值。该选项仅可用于 REML 分析方法。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Conditional Residuals;

```

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。仅当模型包含多个连续因子时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Cook's D Influence

**语法:** obj << Cook&apos;s D Influence

**说明:** 将新列保存至数据表。新列包含每个观测在估计模型中影响大小的测度。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Cook's D Influence;

```

#### Correlation of Estimates

**语法:** obj << Correlation of Estimates( state=0|1 )

**说明:** 显示或隐藏指定拟合的参数估计值之间的相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Correlation of Estimates( 1 );

```

#### Cox Mixtures

**语法:** obj << Cox Mixtures( p1(percentile), p2(percentile), p3(percentile) )

**说明:** 显示或隐藏基于指定的参考混料值的 Cox 混料模型的参数估计值。该选项仅在模型包含混料效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cox Mixtures( p1( 0.6615 ), p2( 0.126 ), p3( 0.2125 ) );

```

#### Cube Plots

**语法:** obj << Cube Plots( state=0|1 )

**说明:** 显示或隐藏展示在一个或多个立方图中的因子范围极值的预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Cube Plots( 1 );

```

#### Custom Test

**语法:** obj << Custom Test( [l1, l2, l3, ... ], <Label( text )> )

**说明:** 运行定制的 F 检验，它对比模型中的不同效应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Custom Test( [0 0 2 1], Label( "Comparison of intercepts for drug a vs. drug" ) );

```

#### Durbin Watson Test

**语法:** obj << Durbin Watson Test( state=0|1 )

**说明:** 显示或隐藏 Durbin-Watson 报表，它包含检验残差是否具有一阶自相关性的统计量。该报表还显示残差的自相关性以及与统计量有关的精确概率。该选项仅适用于时间序列数据，并且假定您的观测是按时间顺序的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/CO2.jmp" );
obj = dt << Fit Model(
	Y( :CO2 ),
	Effects( :Year, :Month ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Durbin Watson Test( 1 );

```

#### Effect Details

**语法:** obj << Effect Details( state=0|1 )

**说明:** 显示或隐藏模型中每个效应的详细报表，包括每个分类效应的最小二乘均值表。通过向模型效应发送消息可以显示其他信息。请参见“拟合模型”下的“效应拟合”对象以获取详细信息。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Leverage" ),
	Run( Effect Details( 0 ) )
);
Wait( 1 );
obj << Effect Details( 1 );

```

#### Effect Leverage Pairs

**语法:** obj << Effect Leverage Pairs

**说明:** 将新列保存至数据表。新列包含在效应杠杆图中绘制的 X 和 Y 值。Y 值是偏残差。X 值是效应杠杆图中收缩后的回归变量。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Effect Leverage Pairs;

```

#### Effect Summary

**语法:** obj << Effect Summary( state=0|1 )

**说明:** 显示或隐藏“效应汇总”报表，它允许您以交互方式更新模型中的效应。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Effect Tests

**语法:** obj << Effect Tests( state=0|1 )

**说明:** 显示或隐藏包含模型中固定效应的检验的报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Error Specification

**语法:** obj << Error Specification( "默认估计"|"纯误差"|"指定" )

**说明:** 指定用于“拟合最小二乘法”报表中标准误差和检验的误差方差和误差自由度。该选项仅在模型不含随机效应时可用。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Error Specification( "Pure Error" );

```

#### Expanded  Estimates

**语法:** obj << Expanded  Estimates( state=0|1 )

**说明:** 显示或隐藏名义模型效应的所有水平的参数估计值。对于具有 k 个水平的名义效应，参数估计值表包含 k-1 个参数的系数，而“扩展后的估计值”表包含全部 k 个水平的效应系数。该选项仅在至少一个效应不是连续型时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Expanded Estimates( 1 );

```

#### Externally Studentized Residuals

**语法:** obj << Externally Studentized Residuals

**说明:** 将新列保存至数据表。新列包含外部学生化残差。这些是将残差除以排除当前行之后的标准误差估计值后得到的。 Hold down the shift key to enter suffix.

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Externally Studentized Residuals;

```

#### FDR

**语法:** obj << FDR( state=0|1 )

**说明:** 指定“效应汇总”表中的 Logworth 值及其相应的 p 值是否使用假发现率 (FDR) 调整。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Conditional Formula

**语法:** obj << Get Conditional Formula

**说明:** 返回包括随机效应估计值的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Conditional Formula;

```

#### Get Effect Names

**语法:** obj << Get Effect Names

**说明:** 返回效应名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect Names;
Show( G );

```

#### Get Effect PValues

**语法:** obj << Get Effect PValues

**说明:** 返回效应 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Effect PValues;
Show( G );

```

#### Get Estimates

**语法:** obj << Get Estimates

**说明:** 返回估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Estimates;
Show( G );

```

#### Get Indiv Confid Limit Formula

**语法:** obj << Get Indiv Confid Limit Formula

**说明:** 返回单值置信限的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Indiv Confid Limit Formula;

```

#### Get MM SAS DATA Step

**语法:** obj << Get MM SAS DATA Step

**说明:** 创建可以在 SAS Model Manager 中注册的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Mean Confid Limit Formula

**语法:** obj << Get Mean Confid Limit Formula

**说明:** 返回均值置信限的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Mean Confid Limit Formula;

```

#### Get Measures

**语法:** obj << Get Measures

**说明:** 从模型返回拟合测度汇总。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Get Measures;

```

#### Get Parameter Names

**语法:** obj << Get Parameter Names

**说明:** 返回参数名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Parameter Names;
Show( G );

```

#### Get Parameterized Formula

**语法:** obj << Get Parameterized Formula

**说明:** 返回使用参数而不是常数的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Parameterized Formula;

```

#### Get Prediction Formula

**语法:** obj << Get Prediction Formula

**说明:** 构造一个脚本，以便创建预测公式列并返回它。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Prediction Formula;

```

#### Get Random Effect Names

**语法:** obj << Get Random Effect Names

**说明:** 返回随机效应的名称。用于 REML 分析方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Random Effect Names;
Show( G );

```

#### Get SAS DATA Step

**语法:** obj << Get SAS DATA Step

**说明:** 创建可用于对新数据集进行评分的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Get SQL prediction expression

**语法:** obj << Get SQL prediction expression

**说明:** 创建一个 SQL 表达式，您可以将其粘贴到 SQL Select 语句中以预测响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get SQL prediction expression;

```

#### Get Standard Error Formula

**语法:** obj << Get Standard Error Formula

**说明:** 返回标准误差的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Get Standard Error Formula;

```

#### Get Std Errors

**语法:** obj << Get Std Errors

**说明:** 返回标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Std Errors;
Show( G );

```

#### Get Variance Components

**语法:** obj << Get Variance Components

**说明:** 返回方差分量。用于 REML 分析方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
G = obj << Get Variance Components;
Show( G );

```

#### Get X Matrix

**语法:** obj << Get X Matrix

**说明:** 返回设计矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get X Matrix;
Show( G );

```

#### Get XPX Inverse

**语法:** obj << Get XPX Inverse

**说明:** 返回 X&apos;X 逆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get XPX Inverse;
Show( G );

```

#### Get Y Matrix

**语法:** obj << Get Y Matrix

**说明:** 返回 Y 矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
G = obj << Get Y Matrix;
Show( G );

```

#### Hats

**语法:** obj << Hats

**说明:** 将新列保存至数据表。新列包含矩阵 xInv(x`x)x` 的对角线值。这些值也称为帽子或杠杆率值。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Hats;

```

#### Indicator Parameterization Estimates

**语法:** obj << Indicator Parameterization Estimates( state=0|1 )

**说明:** 显示或隐藏“指标函数参数化”报表，它包含使用经典指标函数参数化的模型中具有名义型效应的参数估计值。该选项仅在模型效应中有名义型列和截距时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Indiv Confidence Interval

**语法:** obj << Indiv Confidence Interval( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含实际响应单值的置信区间界限。它既包含响应变异也包含估计值变异。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Indiv Confidence Interval( .001 );

```

#### Indiv Confidence Limit Formula

**语法:** obj << Indiv Confidence Limit Formula( <alpha=0.05> )

**说明:** 将新公式列保存至原始数据表。这些列表示单值预测的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
ref = obj << Indiv Confidence Limit Formula( .001 );
Show( ref );

```

#### Interaction Plots

**语法:** obj << Interaction Plots( state=0|1 )

**说明:** 显示或隐藏交互作用图的矩阵。该选项仅在模型中存在交互作用效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Interaction Plots( 1 );

```

#### Inverse Prediction

**语法:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**说明:** 基于指定的 Y 值和所有其他因子，生成 X 预测值和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :RunTime ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 40, 45, 50, 55 ), Term Value( RunTime( . ) ) );

```

#### Joint Factor Tests

**语法:** obj << Joint Factor Tests( state=0|1 )

**说明:** 显示或隐藏模型中每个主效应的联合检验。该联合检验针对涉及该主效应的所有参数。该选项仅在模型包含交互作用时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Joint Factor Tests( 1 );

```

#### Lack of Fit

**语法:** obj << Lack of Fit( state=0|1 )

**说明:** 显示或隐藏评估模型是否具有适当效应的检验。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Lack Of Fit( 0 ) )
);
Wait( 1 );
obj << Lack Of Fit( 1 );

```

#### Mean Confidence Interval

**语法:** obj << Mean Confidence Interval( <alpha=0.05> )

**说明:** 将新列保存至数据表。新列包含期望值的置信区间界限。它包含估计值的变异，但没有包含响应的变异。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Mean Confidence Interval( .01 );

```

#### Mean Confidence Limit Formula

**语法:** obj << Mean Confidence Limit Formula( <alpha=0.05> )

**说明:** 将新公式列保存至原始数据表。这些列表示响应均值的上下置信限，它们是回归变量的函数。alpha 的默认水平是 0.05，它将创建 95% 置信限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
r = obj << Mean Confidence Limit Formula( .01 );
Show( r );

```

#### Mixture Profiler

**语法:** obj << Mixture Profiler( state=0|1 )

**说明:** 显示或隐藏混料刻画器，它在三元图上显示响应的等高线。仅当“混料效应”特性应用于模型中的三个或更多因子或者“混料”属性应用于三个或更多因子列时，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:p1 & RS & Mixture, :p2 & RS & Mixture, :p3 & RS & Mixture, :p2 * :p1, :p3 * :p1,
		:p3 * :p2
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**语法:** obj << Multiple Comparisons( Effect(...)|Estimate List(...)|Sliced Effect Estimates(...), <options> )

**说明:** 生成最小二乘均值估计值或用户定义估计值。多重比较报表允许与总平均值比较、与控制组比较或配对比较。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :x, :Drug ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Multiple Comparisons( Effect( :Drug ) );

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Lack of Fit( 0 );
obj << Effect Details( 0 );
Report( obj )["Parameter Estimates"] << Close( 1 );
preset = obj << (:y << New Preset);

```

#### Normal Plot

**语法:** obj << Normal Plot( state=0|1 )

**说明:** 显示或隐藏标识偏离正态的参数估计值的图。这有助于您确定哪些效应是活跃的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Normal Plot( 1 );

```

#### Parameter Estimates

**语法:** obj << Parameter Estimates( state=0|1 )

**说明:** 显示或隐藏一个报表，它包含每个参数等于零的假设的参数估计值和 t 检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Parameter Estimates( 1 );

```

#### Parameter Power

**语法:** obj << Parameter Power( state=0|1 )

**说明:** 在“参数估计值”报表中添加或删除列。这些列包含与相应的假设检验有关的功效和其他详细信息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Parameter Power( 1 );

```

#### Parameterized Formula

**语法:** obj << Parameterized Formula

**说明:** 将新公式列保存至数据表。新列包含使用表参数而不是常数的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Parameterized Formula;

```

#### Pareto Plot

**语法:** obj << Pareto Plot( state=0|1 )

**说明:** 显示或隐藏正交化和标准化参数估计值的绝对值的图。该图显示各个值相对于绝对值总和的比例。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Pareto Plot( 1 );

```

#### Plot Actual by Predicted

**语法:** obj << Plot Actual by Predicted( state=0|1 )

**说明:** 显示或隐藏“预测值-实际值”图，它绘制响应的观测值对比响应的预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Effect Leverage

**语法:** obj << Plot Effect Leverage( state=0|1 )

**说明:** 显示或隐藏模型中每个效应的“杠杆图”报表。该图显示观测如何影响该效应的检验，并给出有关多重共线性的见解。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run( Plot Effect Leverage( 0 ) )
);
Wait( 1 );
obj << Plot Effect Leverage( 1 );

```

#### Plot Regression

**语法:** obj << Plot Regression( state=0|1 )

**说明:** 显示或隐藏“回归图”报表，它包含数据的散点图和分类效应的每个水平的回归线。该选项仅在模型中恰好有一个连续效应并且不多于一个分类效应时可用。若满足这些条件，则默认提供“回归图”报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Plot Regression( 0 ) )
);
Wait( 1 );
obj << Plot Regression( 1 );

```

#### Plot Residual by Normal Quantiles

**语法:** obj << Plot Residual by Normal Quantiles( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示残差，水平轴上显示残差的正态分位数。该选项在“方法”为 REML 时不可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Normal Quantiles( 1 );

```

#### Plot Residual by Predicted

**语法:** obj << Plot Residual by Predicted( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示残差，水平轴上显示响应的预测值。该选项仅可用于连续响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Predicted( 1 );

```

#### Plot Residual by Row

**语法:** obj << Plot Residual by Row( state=0|1 )

**说明:** 显示或隐藏垂直轴上显示残差且水平轴上显示行号的图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Residual by Row( 1 );

```

#### Plot Studentized Residuals

**语法:** obj << Plot Studentized Residuals( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示学生化残差，水平轴上显示行号。图上的每个点都是使用删除了当前观测后得到的标准差的估计值来计算的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Plot Studentized Residuals( 1 );

```

#### Predicted Values

**语法:** obj << Predicted Values

**说明:** 将新列保存至数据表。新列包含拟合模型的预测值。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Predicted Values;

```

#### Prediction Formula

**语法:** obj << Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含拟合模型的预测公式。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**语法:** obj << Prediction and Interval Formulas( <alpha=0.05> )

**说明:** 将新列保存至数据表。这些列包含用于预测、置信限和预测限的公式。该选项创建的限值列包含“预测刻画器”使用的属性。 Hold down the shift key to enter alpha level or suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Prediction and Interval Formulas;
dt << Profiler(
	Y( :Pred Formula y ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);
Wait( 2 );
obj << Prediction and Interval Formulas( 0.01 );
dt << Profiler(
	Y( :Pred Formula y2 ),
	Profiler( 1, Confidence Intervals( 1 ), Prediction Intervals( 1 ) )
);

```

#### Press

**语法:** obj << Press( state=0|1 )

**说明:** 显示或隐藏预测误差平方和 (Press) 统计量及其均方根误差 (RMSE)。Press 统计量在比较多个模型时很有用。具有更低 Press 统计量的模型受到青睐。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Press( 1 );

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Publish Conditional Formula

**语法:** obj << Publish Conditional Formula

**说明:** 创建包括随机效应估计值的预测公式，并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Conditional Formula;

```

#### Publish Indiv Confid Limit Formula

**语法:** obj << Publish Indiv Confid Limit Formula

**说明:** 创建单值置信限的公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Indiv Confid Limit Formula;

```

#### Publish Mean Confid Limit Formula

**语法:** obj << Publish Mean Confid Limit Formula

**说明:** 创建均值置信限的公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Mean Confid Limit Formula;

```

#### Publish Parameterized Formula

**语法:** obj << Publish Parameterized Formula

**说明:** 创建使用参数而不是常数的预测公式，并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Parameterized Formula;

```

#### Publish Prediction Formula

**语法:** obj << Publish Prediction Formula

**说明:** 创建预测公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Prediction Formula;

```

#### Publish Standard Error Formula

**语法:** obj << Publish Standard Error Formula

**说明:** 创建标准误差公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Run
);
code = obj << Publish Standard Error Formula;

```

#### Residuals

**语法:** obj << Residuals

**说明:** 将新列保存至数据表。新列包含拟合模型的残差值。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Residuals;

```

#### Save Coding Table

**语法:** obj << Save Coding Table

**说明:** 创建一个新数据表，它包含所有模型参数的 JMP 编码。最后一列显示响应变量的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Save Coding Table;

```

#### Scaled Estimates

**语法:** obj << Scaled Estimates( state=0|1 )

**说明:** 显示或隐藏与已调整为均值为零且极差为二的因子相对应的参数估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects(
		:SILICA, :SILANE, :SULFUR, :SILICA * :SILANE, :SILICA * :SULFUR, :SILANE * :SULFUR
	),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Scaled Estimates( 1 );

```

#### Sequential Tests

**语法:** obj << Sequential Tests( state=0|1 )

**说明:** 显示或隐藏“序贯（1 型）检验”报表，它包含当效应按顺序添加至模型时的平方和。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show All Confidence Intervals

**语法:** obj << Show All Confidence Intervals( state=0|1 )

**说明:** 显示或隐藏参数估计值和最小二乘均值估计值的置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show All Confidence Intervals( 1 );

```

#### Show Prediction Expression

**语法:** obj << Show Prediction Expression( state=0|1 )

**说明:** 显示或隐藏包含估计模型方程的“预测表达式”报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show Prediction Expression( 1 );

```

#### Show Sqrt Variance Component

**语法:** obj << Show Sqrt Variance Component( state=0|1 )

**说明:** 显示或隐藏“REML 方差分量的估计值”报表中的“方差分量平方根”列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**语法:** obj << Show VIF( state=0|1 )

**说明:** 显示或隐藏“参数估计值”报表中方差膨胀因子 (VIF) 的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Sorted Estimates

**语法:** obj << Sorted Estimates( state=0|1 )

**说明:** 显示或隐藏“排序后的参数估计值”报表，它可在筛选情况下使用。该报表包含按每个估计值的 t 比绝对值排序的参数估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Sorted Estimates( 1 );

```

#### Std Error of Individual

**语法:** obj << Std Error of Individual

**说明:** 将新列保存至数据表。新列包含单个预测值的标准误差。它用于计算单值置信区间。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**语法:** obj << Std Error of Predicted

**说明:** 将新列保存至数据表。新列包含预测值的标准误差。它用于计算均值置信区间。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Predicted;

```

#### Std Error of Residual

**语法:** obj << Std Error of Residual

**说明:** 将新列保存至数据表。新列包含残差值的标准误差。它用于计算学生化残差。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Std Error of Residual;

```

#### StdErr Pred Formula

**语法:** obj << StdErr Pred Formula

**说明:** 将新公式列保存至数据表。新列包含作为回归变量函数的预测值标准误差公式。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << StdErr Pred Formula;

```

#### Studentized Residuals

**语法:** obj << Studentized Residuals

**说明:** 将新列保存至数据表。新列包含学生化残差，即残差除以其标准误差。 Hold down the shift key to enter suffix.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
obj << Studentized Residuals;

```

#### Summary of Fit

**语法:** obj << Summary of Fit( state=0|1 )

**说明:** 显示或隐藏包含模型拟合统计量汇总的报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Drug.jmp" );
obj = dt << Fit Model(
	Y( :y ),
	Effects( :Drug, :x ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run( Summary of Fit( 0 ) )
);
Wait( 1 );
obj << Summary of Fit( 1 );

```

#### Surface Profiler

**语法:** obj << Surface Profiler( state=0|1 )

**说明:** 显示或隐藏响应曲面的三维曲面图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Minimal Report" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

## Fit LogVariance > Response Fit LogVariance

### 共享项消息

#### Action

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj << Prediction Formula;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Prediction Formula(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 项消息

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, <Folder( folder {, folder2, ...} )> )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);
obj << (2 << Apply Preset( preset ));

```

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Indiv Confidence Interval

**语法:** obj << Indiv Confidence Interval

**说明:** 将新列保存至数据表。新列包含单个响应值的置信限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Mean Confidence Interval

**语法:** obj << Mean Confidence Interval

**说明:** 将新列保存至数据表。新列包含预测均值的置信区间的界限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Pressure, :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << (:Pressure << Plot Actual By Predicted( 0 ));
Report( obj )["Response Pressure", "Variance Model For Pressure"] << Close( 1 );
Wait( 1 );
preset = obj << (1 << New Preset);

```

#### Plot Actual by Predicted

**语法:** obj << Plot Actual by Predicted( state=0|1 )

**说明:** 显示或隐藏一个诊断图，垂直轴上显示实际值，水平轴上显示预测值。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run( Plot Actual by Predicted( 0 ) )
);
Wait( 1 );
obj << Plot Actual by Predicted( 1 );

```

#### Plot Studentized Residual by Predicted

**语法:** obj << Plot Studentized Residual by Predicted( state=0|1 )

**说明:** 显示或隐藏一个诊断图，垂直轴上显示学生化残差，水平轴上显示预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Predicted( 1 );

```

#### Plot Studentized Residual by Row

**语法:** obj << Plot Studentized Residual by Row( state=0|1 )

**说明:** 显示或隐藏一个诊断图，垂直轴上显示学生化残差，水平轴上显示行号。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Plot Studentized Residual by Row( 1 );

```

#### Prediction Formula

**语法:** obj << Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含由指定模型计算的均值预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Prediction Formula;

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Residuals

**语法:** obj << Residuals

**说明:** 将新列保存至数据表。新列包含残差，即观测响应值减去预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Residuals;

```

#### Std Dev Formula

**语法:** obj << Std Dev Formula

**说明:** 将新公式列保存至数据表。新列包含由指定模型计算的标准差预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Dev Formula;

```

#### Std Error of Individual

**语法:** obj << Std Error of Individual

**说明:** 将新列保存至数据表。新列包含单个预测值的标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Individual;

```

#### Std Error of Predicted

**语法:** obj << Std Error of Predicted

**说明:** 将新列保存至数据表。新列包含预测值的标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Std Error of Predicted;

```

#### Studentized Residuals

**语法:** obj << Studentized Residuals

**说明:** 将新列保存至数据表。新列值是残差除以其标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Studentized Residuals;

```

#### Surface Profiler

**语法:** obj << Surface Profiler( state=0|1 )

**说明:** 显示或隐藏响应和响应标准差的交互式曲面图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

#### Variance Formula

**语法:** obj << Variance Formula

**说明:** 将新公式列保存至数据表。新列包含由指定模型计算的方差预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Variance Formula;

```

## Fit LogVariance

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Column Switcher

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

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Redo Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Relaunch Analysis;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### 关联的构造器

#### Fit LogVariance

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Loglinear Variance" ) )

**说明:** 拟合连续响应变量的均值和方差的模型。您可以为这两种模型指定不同的效应集。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);

```

### 项消息

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
obj << Model Dialog;

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Surface Profiler

**语法:** obj << Surface Profiler( state=0|1 )

**说明:** 显示或隐藏响应和响应标准差的交互式曲面图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/InjectionMolding.jmp" );
obj = dt << Fit Model(
	Y( :Shrinkage ),
	Effects( :MoldTemp, :Screw Speed, :MoldTemp * :Screw Speed, :Hold Time & LogVariance ),
	Personality( "Loglinear Variance" ),
	Run
);
Wait( 0 );
obj << Surface Profiler( 1 );

```

## Fit Manova > Effect

### 项消息

#### Centroid Plot

**语法:** obj << (Response[i] << (Effect[j] << Centroid Plot( state=0|1 )))

**说明:** 显示或隐藏重心值的表和由检验空间形成的前两个典型变量的重心（多元最小二乘均值）的图。注意:“截距”项指定为 Effect[0]。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

#### Contrast

**语法:** obj << (Response[i] << (Effect[j] << Contrast( [ l1 l2 l3 ... ] )))

**说明:** 为模型中效应的处理水平的统计对比运行定制的 F 检验。将对比指定为向量参数。注意:“截距”项指定为 Effect[0]。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[3] << Contrast( [0.5 0.5 -0.5 -0.5] )));

```

#### Save Canonical Scores

**语法:** obj << (Response[i] << (Effect[j] << Save Cannonical Scores

**说明:** 将新列保存至数据表。新列包含指定效应的典型得分。注意:“截距”项指定为 Effect[0]。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Save Canonical Scores));

```

#### Test Details

**语法:** obj << (Response[i] << (Effect[j] << Test Details( state=0|1 )))

**说明:** 显示或隐藏有关指定效应的检验的典型详细信息。注意:“截距”项指定为 Effect[0]。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
Wait( 0 );
obj << (Response[1] << (Effect[1] << Test Details( 1 )));

```

## Fit Manova > Response

### 项消息

#### Custom Test

**语法:** obj << (Response[i] << Custom Test( [ l1 l2 l3 ... ], <Label( name )> ))

**说明:** 运行定制的 F 检验，它对比模型中的不同效应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ), Response Function( "Contrast" ) )
);
Wait( 0 );
obj << (Response[2] << Custom Test( [0 1 0 -1 0], Label( "Test 1" ) ));

```

#### Effect

**语法:** obj << (Response[i] << (Effect[j] << effect options))

**说明:** 允许您将消息发送给报表窗口中的特定响应中的特定效应。有关可以发送给效应的消息的详细信息，选择“脚本索引”中的“对象 > Fit Model > Fit Manova > Effect”。注意:“截距”项指定为 Effect[0]。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run( Response Function( "Sum" ) )
);
obj << (Response[1] << (Effect[1] << Centroid Plot( 1 )));

```

## Fit Manova

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Manova(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Manova

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Manova" ) )

**说明:** 拟合涉及多个连续响应变量的模型。方法包括多元方差分析、重复测量、判别分析和典型相关性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);

```

### 项消息

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Model Dialog;

```

#### Response Function

**语法:** obj << Response Function( matrix type, <Univariate Tests Also> )

**说明:** 指定响应函数的矩阵类型。该矩阵是 M 矩阵，它的列定义一组多元分析的变换变量。可选的 Univariate Tests Also 参数指定报表包括调整和未调整的一元重复测量检验和多元检验。

**包括一元检验**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
Wait( 0 );
obj << Response Function( "Contrast", Univariate Tests Also );

```

**基本示例**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Response Function( "Sum" );

```

#### Save Discrim

**语法:** obj << Save Discrim

**说明:** 将新列保存至数据表。新列包含 Mahalanobis 距离、效应每个水平中成员的概率、最高概率的预测水平。仅当模型中存在一个分类效应时，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Effects( :Species ),
	Personality( "Manova" ),
	Run
);
obj << Save Discrim;

```

#### Save Predicted

**语法:** obj << Save Predicted

**说明:** 将新列保存至数据表。新列包含模型中每个响应的预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Predicted;

```

#### Save Residuals

**语法:** obj << Save Residuals

**说明:** 将新列保存至数据表。新列包含模型中每个响应的残差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj = dt << Fit Model(
	Y( :LogHist0, :LogHist1, :LogHist3, :LogHist5 ),
	Effects( :drug, :dep1, :drug * :dep1 ),
	Personality( "Manova" ),
	Run
);
obj << Save Residuals;

```

## Fit Mixed

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run(),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Mixed(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Mixed

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Mixed Model" ) )

**说明:** 使用 REML 拟合各种复杂协方差结构的线性混合模型。这些模型可用于随机系数、重复测量、裂区、空间数据和具有多个相关响应的数据。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run()
);

```

### 项消息

#### Actual by Conditional Predicted Plot

**语法:** obj << Actual by Conditional Predicted Plot( state=0|1 )

**说明:** 显示或隐藏实际值与模型预测值的对比图，同时考虑随机效应。 该选项仅在模型包含至少一个随机效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Conditional Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Conditional Predicted Plot( 1 );

```

#### Actual by Predicted Plot

**语法:** obj << Actual by Predicted Plot( state=0|1 )

**说明:** 显示或隐藏实际值与模型预测值的对比图，不考虑随机效应。 该选项仅在模型包含至少一个固定效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Actual by Predicted Plot( 0 ) )
);
Wait( 1 );
obj << Actual by Predicted Plot( 1 );

```

#### Between-Within Degrees of Freedom

**语法:** obj << Between-Within Degrees of Freedom( state=0|1)

**说明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << "Between-Within Degrees of Freedom"n( 1 );

```

#### Compare Slopes

**语法:** obj << Compare Slopes( Effect( effect ), <options> )

**说明:** 显示或隐藏一个报表，它使您能够比较协方差分析 (ANCOVA) 模型中交互作用效应每个水平的斜率。该选项仅在存在一个名义型项、一个连续型项以及它们对固定效应的交互作用效应时可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cereal.jmp" );
obj = dt << Fit Model(
	Y( :Calories ),
	Effects( :Sugars, :Fiber Gr, :Sugars * :Fiber Gr ),
	Random Effects( :Manufacturer ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Compare Slopes(
	Effect( :Sugars * :Fiber Gr ),
	Student's t( 1, All Pairwise Comparisons Scatterplot( 0 ) )
);

```

#### Conditional Contour Profiler

**语法:** obj << Conditional Contour Profiler( state=0|1 )

**说明:** 以图形方式一次显示或隐藏两个因子的条件响应的等高线刻画器。该选项仅在模型包含至少两个连续效应和至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Contour Profiler( 1 );

```

#### Conditional Mean CI

**语法:** obj << Conditional Mean CI

**说明:** 将两个新列保存至数据表。这些新列包含条件预测的期望值的置信下限和上限。对于包含随机效应的模型，置信区间包括随机效应估计值。 该选项仅在模型包含至少一个随机效应时可用。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Mean CI;

```

#### Conditional Mixture Profiler

**语法:** obj << Conditional Mixture Profiler( state=0|1 )

**说明:** 显示或隐藏混料刻画器，它在三元图上显示条件响应的等高线。仅当模型包含至少一个随机效应，并且在“混料效应”特性应用于模型中的三个或更多因子或“混料”属性应用于三个或更多因子列时，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Mixture Profiler( 1 );

```

#### Conditional Prediction Formula

**语法:** obj << Conditional Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含条件均值的预测公式。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Prediction Formula;

```

#### Conditional Predictions

**语法:** obj << Conditional Predictions

**说明:** 将新列保存至数据表。新列包含条件均值的预测值。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Predictions;

```

#### Conditional Profiler

**语法:** obj << Conditional Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该条件预测方程。预测刻画器包含进行优化的特征。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Profiler( 1 );

```

#### Conditional Residual Plots

**语法:** obj << Conditional Residual Plots( state=0|1 )

**说明:** 显示或隐藏评估模型拟合的残差图，同时考虑随机效应。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Residual Plots( 1 );

```

#### Conditional Residuals

**语法:** obj << Conditional Residuals

**说明:** 将新公式列保存至数据表。新列包含条件残差公式，以观测响应值减去预测公式的形式给出。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Conditional Residuals;

```

#### Conditional Surface Profiler

**语法:** obj << Conditional Surface Profiler( state=0|1 )

**说明:** 显示或隐藏条件响应的三维曲面图。该选项仅在模型包含至少两个效应和至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Conditional Surface Profiler( 1 );

```

#### Containment Degrees of Freedom

**语法:** obj << Containment Degrees of Freedom( state=0|1 )

**说明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Containment Degrees of Freedom( 1 );

```

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 以图形方式一次显示或隐藏两个因子的边缘响应的等高线刻画器。该选项仅在模型包含至少两个连续固定效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Contour Profiler( 1 );

```

#### Correlation of Fixed Effects

**语法:** obj << Correlation of Fixed Effects( state=0|1 )

**说明:** 显示或隐藏模型中固定效应的相关性矩阵。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Correlation of Fixed Effects( 1 );

```

#### Covariance of All Parameters

**语法:** obj << Covariance of All Parameters( state=0|1 )

**说明:** 显示或隐藏模型中所有效应的协方差矩阵。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of All Parameters( 1 );

```

#### Covariance of Covariance Parameters

**语法:** obj << Covariance of Covariance Parameters( state=0|1 )

**说明:** 显示或隐藏模型中随机效应的协方差矩阵。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Covariance Parameters( 1 );

```

#### Covariance of Fixed Effects

**语法:** obj << Covariance of Fixed Effects( state=0|1 )

**说明:** 显示或隐藏模型中固定效应的协方差矩阵。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	Random Effects( :Patient[:Treatment] ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Days ),
	Repeated Structure( "AR(1)" ),
	Run
);
Wait( 1 );
obj << Covariance of Fixed Effects( 1 );

```

#### Dispose Reports

**语法:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定不显示各个模型报表并且在拟合后将它们从内存中移除。当包含上千个响应时，该选项可减少计算时间并节省内存。将该选项和“数据表中的结果”选项一起使用以从拟合的模型中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Empirical Standard Errors

**语法:** obj << Empirical Standard Errors( state=0|1 )

**说明:** 将整个报表中的标准误差替换为夹心估计值。要在多个比较报表中使用夹心估计值，您必须在添加多重比较报表之前选择该选项。

**JMP添加的版本:** 19

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Empirical Standard Errors( 1 );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run( Empirical Standard Errors( 1 ) )
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :species ),
	Comparisons with Control( 1, Control Level( "species:COYOTE" ) )
);

```

#### Fit Statistics

**语法:** obj << Fit Statistics( state=0|1 )

**说明:** 显示或隐藏模型拟合统计量的报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fit Statistics( 0 ) )
);
Wait( 1 );
obj << Fit Statistics( 1 );

```

#### Fixed Effects Parameter Estimates

**语法:** obj << Fixed Effects Parameter Estimates( state=0|1 )

**说明:** 显示或隐藏固定效应参数估计值的表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Parameter Estimates( 1 );

```

#### Fixed Effects Tests

**语法:** obj << Fixed Effects Tests( state=0|1 )

**说明:** 显示或隐藏固定效应的检验。 该选项仅在模型包含至少一个固定效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Fixed Effects Tests( 0 ) )
);
Wait( 1 );
obj << Fixed Effects Tests( 1 );

```

#### Homogeneity of Variance Test

**语法:** obj << Homogeneity of Variance Test( state=0|1 )

**说明:** 计算跨指定分组变量的方差齐性检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Repeated Effects( :Tenderizer ),
	Repeated Structure( "Unequal Variances" ),
	Run
);
Wait( 1 );
obj << Homogeneity of Variance Test( 1 );

```

#### Indiv Confidence Interval

**语法:** obj << Indiv Confidence Interval

**说明:** 将两个新列保存至数据表。新列包含单个响应值的置信限。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Indiv Confidence Interval;

```

#### Inverse Prediction

**语法:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**说明:** 基于指定的 Y 值和所有其他因子，生成 X 预测值和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Inverse Prediction( Response( 75 ), Term Value( Moisture( . ), Variety( All ) ) );

```

#### Linear Combination of Variance Components

**语法:** obj << Linear Combination of Variance Components( [l1, l2, l3, ... ], <Label( text )> )

**说明:** 显示一个报表，它使您能够计算方差分量的线性组合的置信区间。该选项仅在存在 G 侧效应时可用。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Variability Data/3 Factors Nested.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects,
	Random Effects( :Operator, :Instrument[:Operator], :Part[:Operator, :Instrument] ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run(
		Repeated Effects Covariance Parameter Estimates( 0 ),
		Linear Combination of Variance Components( [1 1 0 1], Label( " " ) )
	)
);

```

#### Mean Confidence Interval

**语法:** obj << Mean Confidence Interval

**说明:** 将两个新列保存至数据表。新列包含响应均值的置信下限和上限。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects( :Variety, :Variety * :Moisture ),
	Personality( "Mixed Model" ),
	Run
);
obj << Mean Confidence Interval;

```

#### Mixture Profiler

**语法:** obj << Mixture Profiler( state=0|1 )

**说明:** 显示或隐藏混料刻画器，它在三元图上显示边缘响应的等高线。仅在“混料效应”特性应用于模型中的三个或更多因子或“混料”属性应用于三个或更多因子列时，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
obj = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept,
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Mixture Profiler( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
obj << Model Dialog;

```

#### Multiple Comparisons

**语法:** obj << Multiple Comparisons( Effect( effect ), <options> )

**说明:** 生成最小二乘均值估计值或用户定义的估计值。这些估计值允许您执行与总平均值比较、与控制组比较或配对比较。 该选项仅在模型包含至少一个固定效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Random Effects( :Patient[:Treatment] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Multiple Comparisons(
	Effect( :Treatment ),
	Comparisons with Control( 1, Control Level( "Treatment:Control" ) )
);

```

#### Prediction Formula

**语法:** obj << Prediction Formula

**说明:** 将新公式列保存至数据表。新列包含边缘均值的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction Formula;

```

#### Prediction and Interval Formulas

**语法:** obj << Prediction and Interval Formulas

**说明:** 将新列保存至数据表。这些列包含用于预测和置信限的公式。该选项创建的限值列包含“预测刻画器”使用的属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Prediction and Interval Formulas;
Wait( 1 );
Profiler( Y( :Pred Formula Yield 2 ) );

```

#### Predictions

**语法:** obj << Predictions

**说明:** 将新列保存至数据表。新列包含边缘均值的预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Predictions;

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该边缘预测方程。预测刻画器包含进行优化的特征。 该选项仅在模型包含至少一个固定效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Profiler( 1 );

```

#### Random Coefficients

**语法:** obj << Random Coefficients( state=0|1 )

**说明:** 显示或隐藏随机系数估计值的报表。 该选项仅在模型包含至少一个随机效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Coefficients( 0 ) )
);
Wait( 1 );
obj << Random Coefficients( 1 );

```

#### Random Effects Covariance Parameter Estimates

**语法:** obj << Random Effects Covariance Parameter Estimates( state=0|1 )

**说明:** 显示或隐藏随机效应协方差参数估计值的表。 该选项仅在模型包含至少一个随机效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run( Random Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Random Effects Covariance Parameter Estimates( 1 );

```

#### Random Effects Predictions

**语法:** obj << Random Effects Predictions( state=0|1 )

**说明:** 显示或隐藏随机效应预测的表。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Random Effects Predictions( 1 );

```

#### Repeated Effects Covariance Parameter Estimates

**语法:** obj << Repeated Effects Covariance Parameter Estimates( state=0|1 )

**说明:** 显示或隐藏重复效应协方差参数估计值的表。 该选项仅在模型包含至少一个重复效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects(
		:Treatment, :Month, :Treatment * :Month, :"AM/PM"n, :Treatment * :"AM/PM"n,
		:Month * :"AM/PM"n, :Treatment * :Month * :"AM/PM"n
	),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
Wait( 1 );
obj << Repeated Effects Covariance Parameter Estimates( 1 );

```

#### Repeated Measures Covariance Diagnostics

**语法:** obj << Repeated Measures Covariance Diagnostics( state=0|1 )

**说明:** 显示或隐藏包含诊断工具的报表，以帮助确定重复测量分析的候选协方差结构。该选项仅适用于指定非结构化重复协方差结构的模型。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cholesterol Stacked.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Treatment, :Month, :Month * :Treatment ),
	NoBounds( 1 ),
	Personality( "Mixed Model" ),
	Subject( :Patient ),
	Repeated Effects( :Time ),
	Repeated Structure( "Unstructured" ),
	Run
);
Wait( 1 );
obj << Repeated Measures Covariance Diagnostics( 1 );

```

#### Residual Plots

**语法:** obj << Residual Plots( state=0|1 )

**说明:** 显示或隐藏评估模型拟合的残差图，不考虑随机效应。 该选项仅在模型包含至少一个固定效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Residual Plots( 1 );

```

#### Residuals

**语法:** obj << Residuals

**说明:** 将新列保存至数据表。新列包含残差，即观测响应值减去其边缘均值预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Residuals;

```

#### Results in Data Tables

**语法:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 将许多响应的各个模型结果保存至数据表。输出数据表的内容和个数取决于正在拟合的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Simulation Formula

**语法:** obj << Save Simulation Formula

**说明:** 将新公式列保存至数据表。新列可用于从拟合模型创建随机响应值。您可以将公式列与 JMP Pro 中的“模拟”功能一起使用。若使用了“依据”变量，则该选项不可用。若需要“依据”组模拟公式，则使用子集数据表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Save Simulation Formula;

```

#### Sequential Tests

**语法:** obj << Sequential Tests( state=0|1 )

**说明:** 显示或隐藏“序贯（1 型）检验”报表，它包含当效应按顺序添加至模型时的平方和。 该选项仅在模型包含至少一个固定效应时可用。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Sequential Tests( 1 );

```

#### Show Sqrt Variance Component

**语法:** obj << Show Sqrt Variance Component( state=0|1 )

**说明:** 显示或隐藏“REML 方差分量的估计值”报表中的“方差分量平方根”列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show Sqrt Variance Component( 1 );

```

#### Show VIF

**语法:** obj << Show VIF( state=0|1 )

**说明:** 显示或隐藏“固定效应参数估计值”报表的“效应编码”选项卡中方差膨胀因子 (VIF) 的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Show VIF( 1 );

```

#### Stability Analysis

**语法:** obj << Stability Analysis

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Reliability/Stability.jmp" );
obj = dt << Fit Model(
	Y( :"Concentration (mg/Kg)"n ),
	Effects( :Time ),
	Random Effects( :Batch Number, :Batch Number * :Time ),
	NoBounds( 0 ),
	Personality( "Mixed Model" ),
	Run( Repeated Effects Covariance Parameter Estimates( 0 ) )
);
obj << Stability Analysis( Quantile( 0.1 ), Lower Spec Limit( 99 ) );

```

#### Standard Error of Conditional Predicted

**语法:** obj << Standard Error of Conditional Predicted

**说明:** 将新列保存至数据表。新列包含条件均值预测的标准误差。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Conditional Predicted;

```

#### Standard Error of Predicted

**语法:** obj << Standard Error of Predicted

**说明:** 将新列保存至数据表。新列包含边缘均值预测的标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wheat.jmp" );
obj = dt << Fit Model(
	Y( :Yield ),
	Effects( :Moisture ),
	Random Effects(
		Intercept[:Variety] & Random Coefficients( 1 ),
		:Moisture[:Variety] & Random Coefficients( 1 )
	),
	Personality( "Mixed Model" ),
	Run
);
obj << Standard Error of Predicted;

```

#### Suppress Reports

**语法:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定各个模型报表是隐藏的。当包含上千个响应时，该选项可减少计算时间。拟合对象和某些菜单项仍可用。使用“数据表中的结果”选项从模型报表中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Mixed Model" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Surface Profiler

**语法:** obj << Surface Profiler( state=0|1 )

**说明:** 显示或隐藏边缘响应的三维曲面图。该选项仅在模型包含至少两个效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Split Plot.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Tenderizer, :Roasting Time, :Tenderizer * :Roasting Time ),
	Random Effects( :Carcass, :Carcass * :Tenderizer ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Surface Profiler( 1 );

```

#### Variogram

**语法:** obj << Variogram( <X( columns )>, <Model 1, Model 2, ...> )

**说明:** 显示或隐藏随观测之间的距离增加而显示协方差变化的变差图。当选择“残差”结构时，您可以选择要用作时间或空间坐标的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
obj = dt << Fit Model(
	Y( :Ozone Concentration ),
	Effects,
	Center Polynomials( 0 ),
	Personality( "Mixed Model" ),
	Run
);
Wait( 1 );
obj << Variogram( X( :month ), Exponential, Exponential with Nugget );

```

## Fit Nominal Logistic

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Nominal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Nominal Logistic

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Nominal Logistic" ) )

**说明:** 为连续和分类预测变量拟合名义型响应类别的 Logistic 回归。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);

```

### 项消息

#### Confidence Intervals

**语法:** obj << Confidence Intervals( <state=0|1> | <fraction> )

**说明:** 显示或隐藏模型参数的边侧似然 (1 - fraction)% 置信区间。该 fraction 参数会覆盖平台启动中设置的 alpha 水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**语法:** obj << Confusion Matrix( state=0|1 )

**说明:** 显示或隐藏实际响应与预测响应的交叉表矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。仅当模型包含多个连续因子时可用。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Fit Model(
	Y( :Species ),
	Effects(
		:Sepal length, :Sepal width, :Petal length, :Petal width,
		:Sepal length * :Petal width, :Petal width * :Petal width
	),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Decision Threshold

**语法:** obj << Decision Threshold( state = 0|1, Set Probability Threshold( number=0.5 ) )

**说明:** 显示或隐藏每个模型的拟合概率分布和预测值 - 实际值表。您可以更改概率阈值，以探索不同的阈值如何影响分类结果。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Decision Threshold( 1, Set Probability Threshold( 0.33 ) );

```

#### Dispose Reports

**语法:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定不显示各个模型报表并且在拟合后将它们从内存中移除。当包含上千个响应时，该选项可减少计算时间并节省内存。将该选项和“数据表中的结果”选项一起使用以从拟合的模型中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**语法:** obj << Effect Summary( state=0|1 )

**说明:** 显示或隐藏“效应汇总”报表，它允许您以交互方式更新模型中的效应。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**语法:** obj << FDR( state=0|1 )

**说明:** 指定“效应汇总”表中的 Logworth 值及其相应的 p 值是否使用假发现率 (FDR) 调整。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**语法:** obj << Get Confusion Matrix Test

**说明:** 返回测试集的混淆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**语法:** obj << Get Confusion Matrix Training

**说明:** 返回训练集的混淆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**语法:** obj << Get Confusion Matrix Validation

**说明:** 返回验证集的混淆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**语法:** obj << Get Confusion Rates Test

**说明:** 返回测试集的混淆率。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Equity.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :BAD ),
	Effects(
		:LOAN, :MORTDUE, :VALUE, :REASON, :JOB, :YOJ, :DEROG, :DELINQ, :CLAGE, :NINQ, :CLNO,
		:DEBTINC
	),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**语法:** obj << Get Confusion Rates Training

**说明:** 返回训练集的混淆率。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**语法:** obj << Get Confusion Rates Validation

**说明:** 返回验证集的混淆率。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Binary ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**语法:** obj << Get MM SAS DATA Step

**说明:** 创建可以在 SAS Model Manager 中注册的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**语法:** obj << Get Measures

**说明:** 从模型返回拟合测度汇总。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**语法:** obj << Get Probability Formulas

**说明:** 返回脚本以创建概率公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**语法:** obj << Get SAS DATA Step

**说明:** 创建可用于对新数据集进行评分的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Indicator Parameterization Estimates

**语法:** obj << Indicator Parameterization Estimates( state=0|1 )

**说明:** 显示或隐藏“指标函数参数化”报表。该报表包含模型的参数估计值，其中名义型列使用指标 (SAS GLM) 参数化进行编码并且被视为连续型。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Detergent.jmp" );
obj = dt << Fit Model(
	Freq( :count ),
	Y( :brand ),
	Effects( :softness, :previous use, :temperature ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Indicator Parameterization Estimates( 1 );

```

#### Inverse Prediction

**语法:** obj << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) )

**说明:** 基于指定的 Y 值和所有其他因子，生成 X 预测值和置信区间。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Inverse Prediction( Response( 0.5, 0.75, 0.9 ) );

```

#### Lift Curve

**语法:** obj << Lift Curve( state=0|1 )

**说明:** 显示或隐藏“提升曲线”图。提升曲线绘制提升与观测对应部分的关系，并提供另一种方式来展示模型预测的能力。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**语法:** obj << Likelihood Ratio Tests( state=0|1 )

**说明:** 显示或隐藏每个效应的似然比检验。每个检验将拟合模型的对数似然与移除一个效应的模型的对数似然进行比较。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Likelihood Ratio Test( 1 );

```

#### Line Color

**语法:** obj << Line Color( color )

**说明:** 允许您选择图曲线的颜色。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Line Color( "Magenta" );

```

#### Logistic Plot

**语法:** obj << Logistic Plot( state=0|1 )

**说明:** 显示或隐藏“Logistic 图”报表。仅当模型由单个连续效应构成时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**语法:** obj << Odds Ratios( state=0|1 )

**说明:** 显示或隐藏包含“单位优势比”和“范围优势比”的“优势比”报表。不可用于包含超过两个水平的名义型响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Positive Level

**语法:** obj << Positive Level

**说明:** 设置标识为正例的水平，以便用于 ROC 曲线。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
obj << ROC Curve( 1 );

```

#### Precision Recall Curve

**语法:** obj << Precision Recall Curve( state=0|1 )

**说明:** 显示或隐藏“精度-召回曲线”图，它包含响应变量每个水平的曲线。精度-召回曲线绘制不同阈值下的精度值和召回值。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << Precision Recall Curve( 1 );

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏“预测刻画器”，它显示随着模型中的因子值发生更改时的指定的响应概率的拟合值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**语法:** obj << Publish Probability Formulas

**说明:** 生成概率公式并将其发布为公式存储库中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**语法:** obj << ROC Curve( state=0|1 )

**说明:** 显示或隐藏响应变量每个水平的“受试者操作特征”(ROC) 曲线。ROC 曲线是（1 - 特异度）-灵敏度图。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Positive Level( "Cured" );
Wait( 0 );
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**语法:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 将许多响应的各个模型结果保存至数据表。输出数据表的内容和个数取决于正在拟合的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Probability Formula

**语法:** obj << Save Probability Formula

**说明:** 将新列保存至数据表。新列包含响应水平线性组合的公式、响应水平的预测公式和最可能响应的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Show Points

**语法:** obj << Show Points( state=0|1 )

**说明:** 在 Logistic 图中显示或隐藏点。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Points( 0 );

```

#### Show Rate Curve

**语法:** obj << Show Rate Curve( state=0|1 )

**说明:** 在 Logistic 图中显示或隐藏比率曲线。该比率曲线仅在 X 变量的每个值有多个点时有用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 1 );
obj << Show Rate Curve( 1 );

```

#### Specify Profit Matrix

**语法:** obj << Specify Profit Matrix( matrix, level1, level2, ... )

**说明:** 使您能够指定与正确或错误的分类决策相关的利润或成本。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Binary ),
	Effects( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Nominal Logistic" ),
	Run
);
Wait( 0 );
obj << Specify Profit Matrix( [0 -1, -1 0, . .], "High", "Low", "Undecided" );

```

#### Suppress Reports

**语法:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定各个模型报表是隐藏的。当包含上千个响应时，该选项可减少计算时间。拟合对象和某些菜单项仍可用。使用“数据表中的结果”选项从模型报表中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**语法:** obj << Wald Tests( state=0|1 )

**说明:** 显示或隐藏检验每个参数是否为零的 Wald 检验的卡方检验统计量和 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

## Fit Ordinal Logistic

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Ordinal Logistic(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Ordinal Logistic

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Ordinal Logistic" ) )

**说明:** 为连续和分类预测变量拟合有序型响应类别的 Logistic 回归。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);

```

### 列

#### By

**语法:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	By( _bycol ),
	Run
);

```

### 项消息

#### Confidence Intervals

**语法:** obj << Confidence Intervals( <state=0|1> | <fraction> )

**说明:** 显示或隐藏模型参数的边侧似然 (1 - fraction)% 置信区间。该 fraction 参数会覆盖平台启动中设置的 alpha 水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Confidence Intervals( 0.01 );
Wait( 1 );
obj << Confidence Intervals( 0 );

```

#### Confusion Matrix

**语法:** obj << Confusion Matrix( state=0|1 )

**说明:** 显示或隐藏实际响应与预测响应的交叉表矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Confusion Matrix( 1 );

```

#### Contour Profiler

**语法:** obj << Contour Profiler( state=0|1 )

**说明:** 显示或隐藏等高线刻画器，它一次对两个因子图示其响应变量的等高线图。仅当模型包含多个连续因子时可用。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Job Satisfaction ),
	Effects(
		:Years at Current Employer, :Salary, :Single Status, :Age in Years,
		:Age in Years * :Years at Current Employer
	),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Contour Profiler( 1 );

```

#### Dispose Reports

**语法:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定不显示各个模型报表并且在拟合后将它们从内存中移除。当包含上千个响应时，该选项可减少计算时间并节省内存。将该选项和“数据表中的结果”选项一起使用以从拟合的模型中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effect Summary

**语法:** obj << Effect Summary( state=0|1 )

**说明:** 显示或隐藏“效应汇总”报表，它允许您以交互方式更新模型中的效应。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**语法:** obj << FDR( state=0|1 )

**说明:** 指定“效应汇总”表中的 Logworth 值及其相应的 p 值是否使用假发现率 (FDR) 调整。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Confusion Matrix Test

**语法:** obj << Get Confusion Matrix Test

**说明:** 返回测试集的混淆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Test;

```

#### Get Confusion Matrix Training

**语法:** obj << Get Confusion Matrix Training

**说明:** 返回训练集的混淆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Training;

```

#### Get Confusion Matrix Validation

**语法:** obj << Get Confusion Matrix Validation

**说明:** 返回验证集的混淆矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Matrix Validation;

```

#### Get Confusion Rates Test

**语法:** obj << Get Confusion Rates Test

**说明:** 返回测试集的混淆率。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );
obj = dt << Fit Model(
	Validation( :Validation 2 ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Test;

```

#### Get Confusion Rates Training

**语法:** obj << Get Confusion Rates Training

**说明:** 返回训练集的混淆率。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Training;

```

#### Get Confusion Rates Validation

**语法:** obj << Get Confusion Rates Validation

**说明:** 返回验证集的混淆率。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run( Confusion Matrix( 1 ) )
);
obj << Get Confusion Rates Validation;

```

#### Get MM SAS DATA Step

**语法:** obj << Get MM SAS DATA Step

**说明:** 创建可以在 SAS Model Manager 中注册的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get MM SAS Data Step;

```

#### Get Measures

**语法:** obj << Get Measures

**说明:** 从模型返回拟合测度汇总。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Measures;

```

#### Get Probability Formulas

**语法:** obj << Get Probability Formulas

**说明:** 返回脚本以创建概率公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Get Probability Formulas;

```

#### Get SAS DATA Step

**语法:** obj << Get SAS DATA Step

**说明:** 创建可用于对新数据集进行评分的 SAS 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
code = obj << Get SAS Data Step;

```

#### Lift Curve

**语法:** obj << Lift Curve( state=0|1 )

**说明:** 显示或隐藏“提升曲线”图。提升曲线绘制提升与观测对应部分的关系，并提供另一种方式来展示模型预测的能力。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Lift Curve( 1 );

```

#### Likelihood Ratio Tests

**语法:** obj << Likelihood Ratio Tests( state=0|1 )

**说明:** 显示或隐藏每个效应的似然比检验。每个检验将拟合模型的对数似然与移除一个效应的模型的对数似然进行比较。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Likelihood Ratio Tests( 1 );

```

#### Logistic Plot

**语法:** obj << Logistic Plot( state=0|1 )

**说明:** 显示或隐藏“Logistic 图”报表。仅当模型由单个连续效应构成时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Logistic Plot( 0 );
Wait( 1 );
obj << Logistic Plot( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Model Dialog;

```

#### Odds Ratios

**语法:** obj << Odds Ratios( state=0|1 )

**说明:** 显示或隐藏包含“单位优势比”和“范围优势比”的“优势比”报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y Ordinal ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Odds Ratios( 1 );

```

#### Precision Recall Curve

**语法:** obj << Precision Recall Curve( state=0|1 )

**说明:** 显示或隐藏“精度-召回曲线”图，它包含响应变量每个水平的曲线。精度-召回曲线绘制不同阈值下的精度值和召回值。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Precision Recall Curve( 1 );

```

#### Profiler

**语法:** obj << Profiler( state=0|1 )

**说明:** 显示或隐藏“预测刻画器”，它显示随着模型中的因子值发生更改时的指定的响应概率的拟合值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
Wait( 0 );
obj << Profiler( 1 );

```

#### Publish Probability Formulas

**语法:** obj << Publish Probability Formulas

**说明:** 生成概率公式并将其发布为公式存储库中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Publish Probability Formulas;

```

#### ROC Curve

**语法:** obj << ROC Curve( state=0|1 )

**说明:** 显示或隐藏响应变量每个水平的“受试者操作特征”(ROC) 曲线。ROC 曲线是（1 - 特异度）-灵敏度图。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << ROC Curve( 1 );

```

#### Results in Data Tables

**语法:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 将许多响应的各个模型结果保存至数据表。输出数据表的内容和个数取决于正在拟合的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Save Expected Value

**语法:** obj << Save Expected Value

**说明:** 将新列保存至数据表。新列包含响应值与每行的拟合响应概率的线性组合，并且给出期望值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Expected Value;

```

#### Save Probability Formula

**语法:** obj << Save Probability Formula

**说明:** 将新列保存至数据表。新列包含响应水平线性组合的公式、响应水平的预测公式和最可能响应的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Probability Formula;

```

#### Save Quantiles

**语法:** obj << Save Quantiles

**说明:** 将新列保存至数据表。新列命名为 OrdQ.05、OrdQ.50 和 OrdQ.95，并且它们包含拟合相应概率的分位数的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cheese.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :Cheese ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Save Quantiles;

```

#### Suppress Reports

**语法:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定各个模型报表是隐藏的。当包含上千个响应时，该选项可减少计算时间。拟合对象和某些菜单项仍可用。使用“数据表中的结果”选项从模型报表中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Consumer Preferences.jmp" );
obj = dt << Fit Model(
	Y( :Employee Tenure, :Position Tenure, :Job Satisfaction ),
	Effects( :Gender, :Birth Year, :Single Status, :School Age Children ),
	Personality( "Ordinal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Wald Tests

**语法:** obj << Wald Tests( state=0|1 )

**说明:** 显示或隐藏检验每个参数是否为零的 Wald 检验的卡方检验统计量和 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Denim.jmp" );
obj = dt << Fit Model(
	Y( :Thread Wear ),
	Effects( :"Size of Load (lbs)"n ),
	Personality( "Ordinal Logistic" ),
	Run
);
obj << Wald Tests( 1 );

```

## Fit Parametric Survival

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Parametric Survival(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Parametric Survival

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Parametric Survival" ), Censor( columns ) )

**说明:** 拟合生存时间的广义线性回归模型。这些模型可用于可以表示为一个或多个解释变量的函数的生存时间。考虑各种生存分布和删失。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);

```

### 项消息

#### Correlation of Estimates

**语法:** obj << Correlation of Estimates( state=0|1 )

**说明:** 显示或隐藏指定拟合的参数估计值之间的相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Correlation of Estimates( 1 );

```

#### Covariance of Estimates

**语法:** obj << Covariance of Estimates( state=0|1 )

**说明:** 显示或隐藏指定拟合的参数估计值之间的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Covariance of Estimates( 1 );

```

#### Distribution

**语法:** obj = Fit Model(...Distribution("Weibull"|"Lognormal"|"Exponential"|"Frechet"|"Loglogistic"|"All Distributions"|"SEV"|"Normal"|"LEV"|"Logistic"...)

<b>启动窗口项: 是</b>

**说明:** 指定在对“事件时间”响应建模时使用的分布。“所有分布”选项拟合所有可用的分布。

**单个分布**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Censor( :censor ),
	Run Model
);

```

**所有分布**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "All Distributions" ),
	Censor( :censor ),
	Run Model
);

```

#### Distribution Plot by Level Combinations

**语法:** obj << Distribution Plot by Level Combinations( state=0|1 )

**说明:** 显示或隐藏一个报表，它基于 X 变量的水平比较三个嵌套模型。该报表包含三个评估模型拟合的概率图。这些图为 X 水平的每个组合显示不同的线条。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/reliability/Devalt.jmp" );
dt << Fit Model(
	Censor( :Censor ),
	Censor Code( "1" ),
	Freq( :Weight ),
	Y( :Hours ),
	Effects( :x ),
	Personality( "Parametric Survival" ),
	Distribution( "Lognormal" ),
	Run( Likelihood Ratio Tests( 1 ), Distribution Plot by Level Combinations( 1 ), )
);

```

#### Distribution Profiler

**语法:** obj << Distribution Profiler( state=0|1 )

**说明:** 显示或隐藏预测变量和响应的累积分布函数的刻画器。响应显示在最右侧的方格中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Distribution Profiler( 1 );

```

#### Effect Summary

**语法:** obj << Effect Summary( state=0|1 )

**说明:** 显示或隐藏“效应汇总”报表，它允许您以交互方式更新模型中的效应。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Estimate Quantile

**语法:** obj << Estimate Quantile( x1 = [number, ...], x2 = [number, ...], [p1, p2, ...], Alpha( fraction ) )

**说明:** 估计指定效应值和概率的分位数。使用向量指定效应的多个值或多个概率值。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Quantile(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[0.5, 0.10, 0.05],
	Alpha( 0.05 )
);

```

#### Estimate Survival Probability

**语法:** obj << Estimate Survival Probability( x1 = [number, ...], x2 = [number, ...], [time1, time2, ...], Alpha( fraction ) )

**说明:** 估计指定效应值和时间值的失效和生存概率。使用向量指定效应的多个值或多个时间值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Estimate Survival Probability(
	:Age = [55, 60],
	:Diag Time = [8.77],
	[50, 100, 150],
	Alpha( 0.05 )
);

```

#### FDR

**语法:** obj << FDR( state=0|1 )

**说明:** 指定“效应汇总”表中的 Logworth 值及其相应的 p 值是否使用假发现率 (FDR) 调整。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Get Effect Names

**语法:** obj << Get Effect Names

**说明:** 返回模型中使用的效应名称。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Effect Names;
Show( n );

```

#### Get Effect PValues

**语法:** obj << Get Effect PValues

**说明:** 返回模型中每个效应的 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
p = obj << Get Effect PValues;
Show( p );

```

#### Get Estimates

**语法:** obj << Get Estimates

**说明:** 返回模型中的参数估计值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
e = obj << Get Estimates;
Show( e );

```

#### Get Parameter Names

**语法:** obj << Get Parameter Names

**说明:** 返回模型中使用的参数名。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
n = obj << Get Parameter Names;
Show( n );

```

#### Get Std Errors

**语法:** obj << Get Std Errors

**说明:** 返回模型中参数估计值的标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
std = obj << Get Std Errors;
Show( std );

```

#### Hazard Profiler

**语法:** obj << Hazard Profiler( state=0|1 )

**说明:** 显示或隐藏一个刻画器，该刻画器显示危险率作为预测变量和响应的函数。响应显示在最右侧的方格中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Hazard Profiler( 1 );

```

#### Likelihood Confidence Intervals

**语法:** obj << Likelihood Confidence Intervals( state=0|1 )

**说明:** 指定“参数估计值”表中显示的置信区间的类型。当选择该选项时，显示边侧似然置信区间。否则，显示 Wald 区间。当边侧似然置信区间的计算时间不长时才默认开启该选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**语法:** obj << Likelihood Ratio Tests( state=0|1 )

**说明:** 显示或隐藏每个效应的似然比检验。每个检验将拟合模型的对数似然与移除一个效应的模型的对数似然进行比较。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Model Dialog;

```

#### Publish Probability Formula

**语法:** obj << Publish Probability Formula

**说明:** 创建概率公式并将其发布为“公式存储库”平台中的公式列脚本。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Probability Formula;

```

#### Publish Quantile Formula

**语法:** obj << Publish Quantile Formula( probability )

**说明:** 创建分位数公式并将其发布为“公式存储库”平台中的公式列脚本。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Publish Quantile Formula( 0.1 );

```

#### Quantile Profiler

**语法:** obj << Quantile Profiler( state=0|1 )

**说明:** 显示或隐藏一个刻画器，该刻画器显示预测响应作为预测变量的函数以及累积分布函数的分位数。该分位数称为“失效概率”，显示在最右侧的单元格中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Quantile Profiler( 1 );

```

#### Residual Probability Plot

**语法:** obj << Residual Probability Plot( state=0|1 )

**说明:** 显示或隐藏带置信区间的标准残差的概率图。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Residual Probability Plot( 1 );

```

#### Response versus Fitted Median

**语法:** obj << Response versus Fitted Median( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示响应，水平轴上显示拟合中位数。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Response versus Fitted Median( 1 );

```

#### Save Probability Formula

**语法:** obj << Save Probability Formula

**说明:** 将新公式列保存至数据表。新列包含失效的估计概率的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Probability Formula;

```

#### Save Quantile Formula

**语法:** obj << Save Quantile Formula( probability )

**说明:** 将新公式列保存至数据表。新列包含指定概率值的估计分位数的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Quantile Formula( 0.8 );

```

#### Save Residuals

**语法:** obj << Save Residuals

**说明:** 将一个或两个新列保存至数据表。残差列数匹配模型中的“事件时间”列数。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Save Residuals;

```

#### Standardized Residuals versus Fitted Median

**语法:** obj << Standardized Residuals versus Fitted Median( state=0|1 )

**说明:** 显示或隐藏一个图，垂直轴上显示标准化残差，水平轴上显示拟合中位数。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Standardized Residuals versus Fitted Median( 1 );

```

#### Survival Profiler

**语法:** obj << Survival Profiler( state=0|1 )

**说明:** 显示或隐藏预测变量和响应的生存函数的刻画器。响应显示在最右侧的方格中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Survival Profiler( 1 );

```

#### Wald Tests

**语法:** obj << Wald Tests( state=0|1 )

**说明:** 显示或隐藏检验每个参数是否为零的 Wald 检验的卡方检验统计量和 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
obj = dt << Fit Model(
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Parametric Survival" ),
	Distribution( "Weibull" ),
	Censor( :censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

## Fit Proportional Hazards

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Proportional Hazards(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Proportional Hazards

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Proportional Hazard" ), Censor( columns ) )

**说明:** 拟合半参数回归模型（Cox 比例风险模型）以评估考虑删失情况下解释变量对生存时间的影响。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);

```

### 列

#### By

**语法:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	By( _bycol ),
	Run Model
);

```

### 项消息

#### Effect Summary

**语法:** obj << Effect Summary( state=0|1 )

**说明:** 显示或隐藏“效应汇总”报表，它允许您以交互方式更新模型中的效应。 默认开启。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Effect Summary( 0 );
Wait( 1 );
obj << Effect Summary( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### FDR

**语法:** obj << FDR( state=0|1 )

**说明:** 指定“效应汇总”表中的 Logworth 值及其相应的 p 值是否使用假发现率 (FDR) 调整。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << FDR( 1 );
Report( obj )["Effect Summary"] << Close( 0 );

```

#### Hazard Ratios

**语法:** obj << Hazard Ratios( state=0|1 )

**说明:** 显示或隐藏效应的危险比。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Hazard Ratios( 1 );

```

#### Likelihood Confidence Intervals

**语法:** obj << Likelihood Confidence Intervals( state=0|1 )

**说明:** 指定“参数估计值”表中显示的置信区间的类型。当选择该选项时，显示边侧似然置信区间。否则，显示 Wald 区间。当边侧似然置信区间的计算时间不长时才默认开启该选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Confidence Intervals( 1 );

```

#### Likelihood Ratio Tests

**语法:** obj << Likelihood Ratio Tests( state=0|1 )

**说明:** 显示或隐藏每个效应的似然比检验。每个检验将拟合模型的对数似然与移除一个效应的模型的对数似然进行比较。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Likelihood Ratio Tests( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Model Dialog;

```

#### Wald Tests

**语法:** obj << Wald Tests( state=0|1 )

**说明:** 显示或隐藏检验每个参数是否为零的 Wald 检验的卡方检验统计量和 p 值。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
obj = dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Run Model
);
obj << Wald Tests( 0 );
Wait( 2 );
obj << Wald Tests( 1 );

```

## Fit Response Screening

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Response Screening(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Response Screening

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ) )

**说明:** 自动执行对大量的响应进行线性模型效应的检验的过程。检验结果和汇总统计量以数据表和图的形式呈现。假发现率 (FDR) 可防止错误声明显著性。稳健估计方法可降低检验对于离群值的灵敏度。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);

```

### 项消息

#### Effect Plots

**语法:** obj << Effect Plots( state=0|1 )

**说明:** 显示或隐藏效应的 FDR p 值图和“FDR Logworth 依据: 效应大小”图。 默认开启。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Plots( 0 ) )
);
Wait( 1 );
obj << Effect Plots( 1 );

```

#### Effect Tests

**语法:** obj << Effect Tests( state=0|1 )

**说明:** 显示或隐藏“效应检验”表。 默认开启。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Effect Tests( 0 ) )
);
Wait( 1 );
obj << Effect Tests( 1 );

```

#### Force G Side

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force G Side ) )

**说明:** 强制在 G 侧估计随机效应，即使随机效应矩阵的列数多于行数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :season, :species * :season ),
	Random Effects( :subject[:species] ),
	Personality( "Response Screening" ),
	Run( Force G Side )
);

```

#### Force R Side

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Force R Side ) )

**说明:** 强制在 R 侧估计随机效应，即使随机效应矩阵的行数多于列数。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Force R Side )
);

```

#### Least Squares Means

**语法:** obj << Least Squares Means( state=0|1 )

**说明:** 计算全部最小二乘（边缘）均值。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Least Squares Means( 1 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Model Dialog;

```

#### Overall Plots

**语法:** obj << Overall Plots( state=0|1 )

**说明:** 显示或隐藏“总 FDR p 值”图和“FDR Logworth 依据: R 方”图。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Overall Plots( 1 );

```

#### Overall Report

**语法:** obj << Overall Report( state=0|1 )

**说明:** 显示或隐藏“总体拟合”表。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Overall Report( 1 );

```

#### Save BLUPs

**语法:** obj << Save BLUPs

**说明:** 创建一个新数据表，其中包含模型中随机效应的最佳线性无偏预测变量 (BLUP)。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save BLUPs;

```

#### Save Conditional Predicted Values

**语法:** obj << Save Conditional Predicted Values

**说明:** 将每个响应的新列保存至数据表。该列包含使用随机效应系数的最佳线性无偏预测变量 (BLUP) 计算的条件预测值。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Predicted Values;

```

#### Save Conditional Prediction Formula

**语法:** obj << Save Conditional Prediction Formula

**说明:** 将每个响应的新公式列保存至数据表。新列包含一个公式，它包括具有随机效应的模型的随机效应估计值。仅可用于 REML 分析方法。

```jsl

Names Default To Here( 1 );

Open( "$Sample_Data/Life Sciences/Genotypes Pedigree.jmp" );
obj = Fit Model(
	Y( :Trait1, :Trait2, :Trait3 ),
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Conditional Prediction Formula;

```

#### Save Effect Tests

**语法:** obj << Save Effect Tests

**说明:** 创建一个新数据表，它为每个效应检验包含一行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Effect Tests;

```

#### Save Estimates

**语法:** obj << Save Estimates

**说明:** 创建一个新数据表，它为每个响应变量包含一行，为每个模型项包含一列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Estimates;

```

#### Save LSMeans Differences

**语法:** obj << Save LSMeans Differences

**说明:** 创建一个新数据表，它包含所有切片最小二乘均值差值。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Effects( :age, :sex, :age * :sex ),
	Personality( "Response Screening" ),
	Y( :height, :weight ),
	Sliced LSMeans Differences( 1 ),
	Run
);
obj << Save LSMeans Differences;

```

#### Save Least Squares Means

**语法:** obj << Save Least Squares Means

**说明:** 创建一个新数据表，它包含所有最小二乘均值。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Big Class.jmp" );
obj = dt << Fit Model(
	Y( :height, :weight ),
	Effects( :age, :sex ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Least Squares Means;

```

#### Save Overall Fit

**语法:** obj << Save Overall Fit

**说明:** 创建一个新数据表，它为每个响应变量包含一行。对于每个 Y，表中的列汇总有关模型拟合的信息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Save Overall Fit;

```

#### Save Predicted Values

**语法:** obj << Save Predicted Values

**说明:** 将每个响应的新列保存至数据表。每列包含对应响应的预测值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Predicted Values )
);

```

#### Save Prediction Formula

**语法:** obj << Save Prediction Formula

**说明:** 将每个响应的新公式列保存至数据表。每列包含对应响应的预测方程。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run( Save Prediction Formula )
);

```

#### Select Effects Where

**语法:** obj << Select Effects Where( condition )

**说明:** 打开“选择符合条件的行”窗口，它允许您选择“效应检验”表中与“选择符合条件的行”窗口中指定的特定条件对应的行。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run
);
obj << Select Effects Where( FDR Logworth > 4 );

```

#### Select Responses for Selected Effects

**语法:** obj << Select Responses for Selected Effects

**说明:** 选择原始表中与所选效应对应的响应列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Response Screening" ),
	Run()
);
obj << Select Effects Where( FDR Logworth > 4 );
obj << Select Responses for Selected Effects;

```

#### Sliced LSMeans Differences

**语法:** obj << Sliced LSMeans Differences( state=0|1 )

**说明:** 计算比较主效应和 2 因子和 3 因子交互作用切片的所有最小二乘均值的检验。

```jsl

Names Default To Here( 1 );
dt = Open( "$Sample_Data/Popcorn.jmp" );
obj = dt << Fit Model(
	Y( :yield ),
	Effects(
		:popcorn, :oil amt, :popcorn * :oil amt, :batch, :popcorn * :batch, :oil amt * :batch,
		:popcorn * :oil amt * :batch
	),
	Personality( "Response Screening" ),
	Run
);
Wait( 0 );
obj << Sliced LSMeans Differences( 1 );

```

#### Unthreaded

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Response Screening" ), Run( Unthreaded ) )

**说明:** 禁止响应（和“切换”变量）上的多线程。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
obj = dt << Fit Model(
	Effects( :Sex ),
	Random Effects( Grouped( Column Group( "Markers" ) ) ),
	Personality( "Response Screening" ),
	Y( :Trait1 ),
	Run( Unthreaded )
);

```

## Fit Stepwise

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Stepwise Personality(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Stepwise Personality

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Stepwise" ) )

**说明:** 拟合逐步回归模型，这有助于标准最小二乘和有序型 Logistic 模型以及具有二值响应的名义型 Logistic 模型的变量选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

### 列

#### By

**语法:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	By( _bycol ),
	Run
);
obj << Finish;

```

### 项消息

#### All Possible Models

**语法:** obj << All Possible Models( max_terms, max_models, <Heredity Restriction( state=0|1 )> )

**说明:** 拟合最高达到指定限值的所有可能模型，并显示每个项数对应的最佳模型。指定要在任意一个模型中拟合的最大项数。指定针对每个模型项数要显示的最大模型结果数。您可以将显示的模型限制为满足强效应遗传的那些模型。“所有可能的模型”选项仅可用于连续响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << All Possible Models( 5, 10 );

```

#### Backward Step

**语法:** obj << Backward Step

**说明:** 删除具有最大 p 值的项。若选择了“p 值阈值”停止规则，该项在“剔除的概率”选项所指定的水平下不能是显著的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter All;
Wait( 1 );
obj << Backward Step;

```

#### Clear History

**语法:** obj << Clear History

**说明:** 清除并重置步进历史记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Clear History;

```

#### Direction

**语法:** obj << Direction( "前进"|"后退"|"混合" )

**说明:** 指定用于逐步完成项选择过程的方向。方向可以是前进、后退或两者混合。“混合”方向选项要求选择“p 值阈值”停止规则。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Enter

**语法:** obj << Enter( term )

**说明:** 使项进入模型。该选项不影响锁定项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );

```

#### Enter All

**语法:** obj << Enter All

**说明:** 将所有项输入模型中（若可能）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run( Direction( "Backward" ) )
);
obj << Enter All;

```

#### Export Model With Validation

**语法:** obj << Export Model With Validation( state=0|1 )

**说明:** 选择“构建模型”选项时向“模型规格”窗口添加“验证”列。当您选择“运行模型”选项时，该选项还运行具有“验证”列的模型。仅当您指定了“验证”列时该选项才可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Validation( :Validation ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;
Wait( 1 );
obj << Export Model With Validation( 0 );
obj << Make Model;

```

#### Finish

**语法:** obj << Finish

**说明:** 立即完成项选择过程。在脚本中，建议使用“完成”选项而非“执行”选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;

```

#### Forward Step

**语法:** obj << Forward Step

**说明:** 输入具有最小 p 值的项。若选择了“p 值阈值”停止规则，该项在“进入的概率”选项所指定的水平下必须是显著的。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Forward Step;

```

#### Get Measures

**语法:** obj << Get Measures

**说明:** 从模型返回拟合测度汇总。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Get Measures;

```

#### Get Prospectives

**语法:** obj << Get Prospectives

**说明:** 返回包含估计值和置信区间的关联矩阵。对于模型中的项，这些值是从当前模型中获取的值。对于不在当前模型中的项，这些值是包括对应项的模型中的估计值和置信区间。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Show(
	obj << Enter( :Runtime );
	obj << Get Prospectives;
);

```

#### Go

**语法:** obj << Go

**说明:** 启动项选择过程的后台任务。在脚本中，建议使用“完成”选项而非“执行”选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Go;

```

#### K-Fold Crossvalidation

**语法:** obj << "K-Fold Crossvalidation"n( <k> )

**说明:** 在变量选择过程中执行 k 折交叉验证。选中该选项后，将在控制面板中启用“最大 K 折 R 方”停止规则。“逐步”平台中的 K 折交叉验证将样本划分为 k 个子集并将这些子集用作验证集。“K 折交叉验证”选项仅可用于连续响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;

```

#### Lock

**语法:** obj << Lock( term )

**说明:** 将项锁定在模型中或锁定在模型外。不在模型中的锁定项无法进入模型，而模型中的锁定项无法从模型中删除。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );

```

#### Make Model

**语法:** obj << Make Model

**说明:** 为“当前估计值”表中指定的模型打开“拟合模型”启动窗口。有名义型或有序型项时，“构建模型”选项会创建临时变换列，其中包含模型所需的项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Make Model;

```

#### Model Averaging

**语法:** obj << Model Averaging( max_terms, AICc_cutoff )

**说明:** 支持您平均若干模型的拟合结果而非选择一单个最佳模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Averaging( 5, .90 );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Model Dialog;

```

#### Plot Criterion History

**语法:** obj << Plot Criterion History( state=0|1 )

**说明:** 创建 AICc 和 BIC 与参数数目的关系图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;
obj << Plot Criterion History( 1 );

```

#### Plot RSquare History

**语法:** obj << Plot RSquare History( state=0|1 )

**说明:** 创建训练和验证 R 方与参数数目的关系图。该选项仅适用于具有验证数据的连续响应模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << "K-Fold Crossvalidation"n( 5 );
obj << Finish;
obj << Plot RSquare History( 1 );

```

#### Prob to Enter

**语法:** obj << Prob to Enter( number )

**说明:** 指定在前进步中效应必须进入模型的最大 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Enter( .20 );
obj << Finish;

```

#### Prob to Leave

**语法:** obj << Prob to Leave( number )

**说明:** 指定在后退步中必须从模型中删除效应的最小 p 值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Stopping Rule( "P-value Threshold" );
obj << Prob to Leave( .20 );
obj << Enter All;
obj << Direction( "Backward" );
obj << Finish;

```

#### Remove

**语法:** obj << Remove( term )

**说明:** 从模型中删除项。该选项不影响锁定项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Remove( :RunPulse );

```

#### Remove All

**语法:** obj << Remove All

**说明:** 从模型中删除所有项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
Wait( 1 );
obj << Remove All;

```

#### Rules

**语法:** obj << Rules( "合并"|"限制"|"无规则"|"整体效应"|"关于遗传的整体效应" )

**说明:** 指定当模型中有项的层次结构时应用的规则。仅当模型包含分层项时该选项才显示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run
);
obj << Rules( "Whole Effects" );
obj << Stopping Rule( "P-value Threshold" );
obj << Direction( "Mixed" );
obj << Finish;

```

#### Run Model

**语法:** obj << Run Model

**说明:** 为“当前估计值”表中指定的模型打开“标准最小二乘法”报表。有名义型或有序型项时，“运行模型”选项会创建临时变换列，其中包含模型所需的项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Run Model;

```

#### Step

**语法:** obj << Step

**说明:** 执行项选择过程中的下一步。“步进”选项在前进方向逐一输入项，或在后退方向逐一删除项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
Wait( 1 );
obj << Step;

```

#### Stop

**语法:** obj << Stop

**说明:** 停止由“执行”或“完成”选项启动的自动选择过程。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Finish;
obj << Stop;

```

#### Stopping Rule

**语法:** obj << Stopping Rule( "p 值阈值"|"最小 AICc"|"最小 BIC"|"最大验证 R 方"|"最大 K 折 R 方" )

**说明:** 指定在指定“执行”或“完成”选项时用于停止项选择过程的规则。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:RunPulse * :MaxPulse
	),
	Personality( "Stepwise" ),
	Run Model( Stopping Rule( "Minimum AICc" ) )
);
obj << Finish;

```

#### Unlock

**语法:** obj << Unlock( term )

**说明:** 在模型中解除锁定以前锁定的项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
obj = dt << Fit Model(
	Y( :Oxy ),
	Effects( :Runtime, :Weight, :RunPulse, :RstPulse, :MaxPulse ),
	Personality( "Stepwise" ),
	Run
);
obj << Enter( :Runtime );
obj << Lock( :Runtime );
Wait( 1 );
obj << Unlock( :Runtime );

```

## Fit Varcomp

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Estimate Only Variance Components(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Estimate Only Variance Components

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Standard Least Squares" ), Method( "REML" ), Estimate Only Variance Components( 1 ) )

**说明:** 使用指定的模型运行 REML 分析并显示模型的方差分量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

### 列

#### By

**语法:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	By( _bycol ),
	Run
);

```

### 项消息

#### Get Random Effect Names

**语法:** obj << Get Random Effect Names

**说明:** 返回随机效应的名称。用于 REML 分析方法。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vn = obj << Get Random Effect Names;
Show( vn );

```

#### Get Variance Components

**语法:** obj << Get Variance Components

**说明:** 为指定模型返回由“拟合模型”平台生成的方差分量。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);
vc = obj << Get Variance Components;
Show( vc );

```

## Generalized Linear Mixed Model > Fit GLMM

### 项消息

#### Between-Within Degrees of Freedom

**语法:** obj << (fit[number] << Between-Within Degrees of Freedom( state=0|1 ))

**说明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to between-within based throughout the report. To use between-within degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Repeated Measures Binomial.jmp" );
fm = Fit Model(
	Y( :No Headache, :Number of Patients ),
	Effects( :Treatment, :Week, :Treatment * :Week ),
	Personality( "Generalized Linear Mixed Model" ),
	Subject( :"Treatment(Clinic)"n ),
	Repeated Effects( :Week Continuous ),
	Repeated Structure( "AR(1)" ),
	Generalized Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run()
);
Wait( 1 );
fm << (Fit[1] << "Between-Within Degrees of Freedom"n( 1 ));

```

#### Conditional Contour Profiler

**语法:** obj << (fit[number] << Conditional Contour Profiler( state=0|1 ))

**说明:** 以图形方式一次显示或隐藏两个因子的条件响应的等高线刻画器。该选项仅在模型包含至少两个连续效应和至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Contour Profiler( 1 ));

```

#### Conditional Diagnostic Bundle

**语法:** obj << (fit[number] << Conditional Diagnostic Bundle( state=0|1 ))

**说明:** 显示或隐藏一组有助于确定回归模型对观测数据拟合好坏的诊断图。若选择“二项”作为“分布”或模型中没有随机效应，则该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Conditional Diagnostic Bundle( 1 ));

```

#### Conditional Mean CI

**语法:** obj << (fit[number] << Conditional Mean CI)

**说明:** 将两个新列保存至数据表。这些新列包含条件预测的期望值的置信下限和上限。对于包含随机效应的模型，置信区间包括随机效应估计值。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Mean CI);

```

#### Conditional Mixture Profiler

**语法:** obj << (fit[number] << Conditional Mixture Profiler( state=0|1 ))

**说明:** 显示或隐藏混料刻画器，它在三元图上显示条件响应的等高线。仅当模型包含至少一个随机效应，并且在“混料效应”特性应用于模型中的三个或更多因子或“混料”属性应用于三个或更多因子列时，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Conditional Mixture Profiler( 1 ));

```

#### Conditional Prediction Formula

**语法:** obj << (fit[number] << Conditional Prediction Formula)

**说明:** 将新公式列保存至数据表。新列包含条件均值的预测公式。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Prediction Formula);

```

#### Conditional Profiler

**语法:** obj << (fit[number] << Conditional Profiler( state=0|1 ))

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该条件预测方程。预测刻画器包含进行优化的特征。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Profiler( 1 ));

```

#### Conditional Surface Profiler

**语法:** obj << (fit[number] << Conditional Surface Profiler( state=0|1 ))

**说明:** 显示或隐藏条件响应的三维曲面图。该选项仅在模型包含至少两个效应和至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Conditional Surface Profiler( 1 ));

```

#### Containment Degrees of Freedom

**语法:** obj << (fit[number] << Containment Degrees of Freedom( state=0|1 ))

**说明:** Replaces the standard errors with unadjusted estimates and degrees of freedom to containment-based throughout the report. To use containment degrees of freedom in a multiple comparisons report, you must select this option prior to adding a multiple comparisons report.

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Containment Degrees of Freedom( 1 ));

```

#### Contour Profiler

**语法:** obj << (fit[number] << Contour Profiler( state=0|1 ))

**说明:** 以图形方式一次显示或隐藏两个因子的边缘响应的等高线刻画器。该选项仅在模型包含至少两个连续固定效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Contour Profiler( 1 ));

```

#### Correlation of Fixed Effects

**语法:** obj << (fit[number] << Correlation of Fixed Effects( state=0|1 ))

**说明:** 显示或隐藏模型中固定效应的相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Correlation of Fixed Effects( 1 ));

```

#### Covariance of All Parameters

**语法:** obj << (fit[number] << Covariance of All Parameters( state=0|1 ))

**说明:** 显示或隐藏模型中所有效应的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of All Parameters( 1 ));

```

#### Covariance of Covariance Parameters

**语法:** obj << (fit[number] << Covariance of Covariance Parameters( state=0|1 ))

**说明:** 显示或隐藏模型中随机效应的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Covariance Parameters( 1 ));

```

#### Covariance of Fixed Effects

**语法:** obj << (fit[number] << Covariance of Fixed Effects( state=0|1 ))

**说明:** 显示或隐藏模型中固定效应的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Covariance of Fixed Effects( 1 ));

```

#### Diagnostic Bundle

**语法:** obj << (fit[number] << Diagnostic Bundle( state=0|1 ))

**说明:** 显示或隐藏一组有助于确定回归模型对观测数据拟合好坏的诊断图。若选择“二项”作为“分布”或模型中有随机效应，则该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Empirical Standard Errors

**语法:** obj << (fit[number] << Empirical Standard Errors( state=0|1 ))

**说明:** 将整个报表中的标准误差替换为夹心估计值。要在多个比较报表中使用夹心估计值，您必须在添加多重比较报表之前选择该选项。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Empirical Standard Errors( 1 ));

```

#### Fit Statistics

**语法:** obj << (fit[number] << Fit Statistics( state=0|1 ))

**说明:** 显示或隐藏“拟合统计量”和“模型汇总”报表，它包括有关模型的规格和拟合优度统计量的信息。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Fixed Effects Parameter Estimates

**语法:** obj << (fit[number] << Fixed Effects Parameter Estimates( state=0|1 ))

**说明:** 显示或隐藏固定效应参数估计值的表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Parameter Estimates( 1 ));

```

#### Fixed Effects Tests

**语法:** obj << (fit[number] << Fixed Effects Tests( state=0|1 ))

**说明:** 显示或隐藏固定效应的检验。 该选项仅在模型包含至少一个固定效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fixed Effects Tests( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fixed Effects Tests( 1 ));

```

#### Mean Confidence Interval

**语法:** obj << (fit[number] << Mean Confidence Interval)

**说明:** 将两个新列保存至数据表。新列包含响应均值的置信下限和上限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Mean Confidence Interval);

```

#### Mixture Profiler

**语法:** obj << (fit[number] << Mixture Profiler( state=0|1 ))

**说明:** 显示或隐藏混料刻画器，它在三元图上显示边缘响应的等高线。仅在“混料效应”特性应用于模型中的三个或更多因子或“混料”属性应用于三个或更多因子列时，该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Vinyl Data.jmp" );
fm = dt << Fit Model(
	Y( :thickness ),
	Effects(
		:m1 & RS & Mixture, :m2 & RS & Mixture, :m3 & RS & Mixture, :m1 * :m2, :m1 * :m3,
		:m1 * :extrusion rate, :m1 * :temperature, :m2 * :m3, :m2 * :extrusion rate,
		:m2 * :temperature, :m3 * :extrusion rate, :m3 * :temperature,
		:extrusion rate * :temperature
	),
	Random Effects( :Whole Plots ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
Wait( 0 );
fm << (Fit[1] << Mixture Profiler( 1 ));

```

#### Multiple Comparisons

**语法:** obj << (fit[number] << Multiple Comparisons( Effect( effect ), <options> ))

**说明:** 生成最小二乘均值估计值或用户定义的估计值。这些估计值允许您执行与总平均值比较、与控制组比较或配对比较。 该选项仅在模型包含至少一个固定效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Target Level( "Pass" ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (fit[1] << Multiple Comparisons(
	Effect( :Program ),
	Least Squares Means Plot,
	Student's t( 1 )
));

```

#### Odds Ratios

**语法:** obj << (fit[number] << Odds Ratios( state=0|1 ))

**说明:** 显示或隐藏一个报表，其中包含分类预测变量的优势比以及连续预测变量的单位优势比和范围优势比。

#### Prediction Formula

**语法:** obj << (fit[number] << Prediction Formula)

**说明:** 将新公式列保存至数据表。新列包含边缘均值的预测公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction Formula);

```

#### Prediction and Interval Formulas

**语法:** obj << (fit[number] << Prediction and Interval Formulas)

**说明:** 将新列保存至数据表。这些列包含用于预测和置信限的公式。该选项创建的限值列包含“预测刻画器”使用的属性。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Prediction and Interval Formulas);

```

#### Profiler

**语法:** obj << (fit[number] << Profiler( state=0|1 ))

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该边缘预测方程。预测刻画器包含进行优化的特征。 该选项仅在模型包含至少一个固定效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Profiler( 1 ));

```

#### Random Coefficients

**语法:** obj << (fit[number] << Random Coefficients( state=0|1 ))

**说明:** 显示或隐藏随机系数估计值的报表。 该选项仅在模型包含至少一个随机效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Coefficients( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Coefficients( 1 ));
Report( fm )["Random Coefficients"] << Close( 0 );

```

#### Random Effects Covariance Parameter Estimates

**语法:** obj << (fit[number] << Random Effects Covariance Parameter Estimates( state=0|1 ))

**说明:** 显示或隐藏随机效应协方差参数估计值的表。 该选项仅在模型包含至少一个随机效应时可用。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Random Effects Covariance Parameter Estimates( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Random Effects Covariance Parameter Estimates( 1 ));

```

#### Random Effects Predictions

**语法:** obj << (fit[number] << Random Effects Predictions( state=0|1 ))

**说明:** 显示或隐藏随机效应预测的表。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Random Effects Predictions( 1 ));

```

#### Save Conditional Residual Formula

**语法:** obj << (fit[number] << Save Conditional Residual Formula )

**说明:** 将新公式列保存至数据表。新列包含条件残差公式，以 Y 减去预测公式的形式给出。若选择“二项”作为“分布”或模型中有随机效应，则该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Conditional Residual Formula);

```

#### Save Residual Formula

**语法:** obj << (fit[number] << Save Residual Formula )

**说明:** 将新公式列保存至数据表。新列包含边缘残差公式，以 Y 减去预测公式的形式给出。若选择“二项”作为“分布”，则该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Manufacturing Defect Counts.jmp" );
fm = dt << Fit Model(
	Y( :Defect ),
	Effects( :Finishing Treatment ),
	Random Effects( :Lot, :Lot * :Finishing Treatment, :Lot * :Unit in Lot ),
	NoBounds( 1 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Poisson" ),
	Run
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**语法:** obj << (fit[number] << Save Simulation Formula)

**说明:** 将新公式列保存至数据表。新列可用于从拟合模型创建随机响应值。您可以将公式列与 JMP Pro 中的“模拟”功能一起使用。若使用了“依据”变量，则该选项不可用。若需要“依据”组模拟公式，则使用子集数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Save Simulation Formula);

```

#### Sequential Tests

**语法:** obj << (fit[number] << Sequential Tests( state=0|1 ))

**说明:** 显示或隐藏“序贯（1 型）检验”报表，它包含当效应按顺序添加至模型时的平方和。 该选项仅在模型包含至少一个固定效应时可用。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
Wait( 1 );
fm << (Fit[1] << Sequential Tests( 1 ));

```

#### Standard Error of Conditional Predicted

**语法:** obj << (fit[number] << Standard Error of Conditional Predicted)

**说明:** 将新列保存至数据表。新列包含条件均值预测的标准误差。 该选项仅在模型包含至少一个随机效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Conditional Predicted);

```

#### Standard Error of Predicted

**语法:** obj << (fit[number] << Standard Error of Predicted)

**说明:** 将新列保存至数据表。新列包含边缘均值预测的标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Standard Error of Predicted);

```

#### Surface Profiler

**语法:** obj << (fit[number] << Surface Profiler( state=0|1 ))

**说明:** 显示或隐藏边缘响应的三维曲面图。该选项仅在模型包含至少两个效应时可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << (Fit[1] << Surface Profiler( 1 ));

```

## Generalized Linear Mixed Model

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit GLMM Platform(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit GLMM Platform

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Linear Mixed Model" ) )

**说明:** Fits a generalized linear mixed model. These models can be used for random coefficients, split-plots, and blocked designs when the response is non-Gaussian. The response distributions can accommodate continuous, categorical, count, and time-to-event response data.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);

```

### 列

#### By

**语法:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	NoBounds( 0 ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	By( _bycol ),
	Run
);

```

### 项消息

#### Fit

**语法:** Fit Model(...Run( Fit( options ) )...);

obj << Fit( options );

obj << (Fit[number] << option)

**说明:** 允许您将消息发送给平台。该选项可以在模型启动脚本中使用，或在报表中生成特定模型的句柄。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run( Fit( Fit Statistics( 0 ) ) )
);
Wait( 1 );
fm << (Fit[1] << Fit Statistics( 1 ));

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Student Testing.jmp" );
fm = dt << Fit Model(
	Y( :Grade ),
	Effects( :Program ),
	Random Effects( :School, :Class[:School] ),
	Personality( "Generalized Linear Mixed Model" ),
	Generalized Distribution( "Binomial" ),
	Run
);
fm << Model Dialog;

```

## Generalized Regression > Generalized Regression Fit

### 项消息

#### Active Parameter Estimates

**语法:** obj << (fit[number] << Active Parameter Estimates( state=0|1 ))

**说明:** 显示或隐藏当前选定模型的活跃或非零参数估计值表。该选项不可用于“最大似然”或“岭回归”模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Active Parameter Estimates( 1 ));

```

#### Confusion Matrix

**语法:** obj << (fit[number] << Confusion Matrix( <probability=0.5> ))

**说明:** 生成实际响应和预测响应的交叉表矩阵。使用可选参数可指定 0.5 之外的阈值概率。仅当指定的“分布”为“二项”、“多项式”或“有序型 Logistic”时该选项才可用。 默认为“0.5”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Confusion Matrix( 0.5 )
		)
	)
);

```

#### Cook's D Influence

**语法:** obj << (fit[number] << Cook&apos;s D Influence)

**说明:** 将新列保存至原始数据表。新列包含“Cook 距离影响”统计量的值。仅当指定的“分布”为“正态”且指定的“估计方法”为“标准最小二乘法”时该选项才可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Cook's D Influence);

```

#### Correlation of Estimates

**语法:** obj << (fit[number] << Correlation of Estimates( state=0|1 ))

**说明:** 显示或隐藏指定拟合的参数估计值之间的相关性矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Correlation of Estimates);

```

#### Covariance of Estimates

**语法:** obj << (fit[number] << Covariance Of Estimates( state=0|1 ))

**说明:** 显示或隐藏指定拟合的参数估计值之间的协方差矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Covariance of Estimates);

```

#### Custom Test

**语法:** obj << (fit[number] << Custom Test( [l1, l2, l3, ... ], <Label( text )> ))

**说明:** 显示或隐藏支持您检验定制假设的“定制检验”报表。若模型具有“解路径”，则定制检验结果将随着您更新解而更新。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :BMI, :BP, :LDL, :HDL, :TCH ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Custom Test( [0 0 0 1 -1 0], Label() ));

```

#### Decision Threshold

**语法:** obj << (fit[number] << Decision Threshold( state=0|1, Set Probability Threshold( number=0.5 ))

**说明:** 显示或隐藏训练集、验证集和测试集（若指定）的“决策阈值”报表。每个报表包含每个模型的拟合概率分布图、每个模型的混淆矩阵以及用于比较模型拟合的分类图。该选项仅可用于二值分类响应。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Decision Threshold( 1 ));

```

#### Diagnostic Bundle

**语法:** obj << (fit[number] << Diagnostic Bundle( state=0|1 ))

**说明:** 显示或隐藏一组有助于确定回归模型对观测数据拟合好坏的诊断图。一组图可供训练集使用，若您使用了验证集和测试集，也会提供相应的图。当指定的“分布”为“二项”、“多项式”、“有序型 Logistic”或“Cox 比例风险”时不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (fit[1] << Diagnostic Bundle( 1 ));

```

#### Distribution Profiler

**语法:** obj << (fit[number] << Distribution Profiler( state=0|1 ))

**说明:** 显示或隐藏预测变量和响应的累积分布函数的刻画器。响应显示在最右侧的方格中。当指定的“分布”为“二项”或“分位数回归”时该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Distribution Profiler( 1 )
		)
	)
);

```

#### Effect Tests

**语法:** obj << (fit[number] << Effect Tests( state=0|1 ))

**说明:** 显示或隐藏每个效应的检验。每个效应检验都检验与该效应关联的所有参数均为零这个原假设。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Effect Tests( 0 ));

```

#### Get Prediction Formula

**语法:** obj << (fit[number] << Get Prediction Formula)

**说明:** 构造一个脚本，以便创建预测公式列并返回它。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Get Prediction Formula);

```

#### Hats

**语法:** obj << (fit[number] << Hats)

**说明:** 将新列保存至原始数据表。新列包含帽子矩阵的对角线元素，这些元素有时被称为帽子值。仅当指定的“分布”为“正态”且指定的“估计方法”为“标准最小二乘法”时该选项才可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Hats);

```

#### Hazard Profiler

**语法:** obj << (fit[number] << Hazard Profiler( state=0|1 ))

**说明:** 显示或隐藏一个刻画器，该刻画器显示危险率作为预测变量和响应的函数。响应显示在最右侧的方格中。仅当指定的“分布”为“正态”、“指数”、“Weibull”、“对数正态”或“Cox 比例风险”时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Profiler( 1 )
		)
	)
);

```

#### Hazard Ratios

**语法:** obj << (fit[number] << Hazard Ratios( state=0|1 ))

**说明:** 显示或隐藏一个报表，其中包含分类预测变量的危险比以及连续预测变量的单位危险比和范围危险比。危险比是两个事件的危险率之比。仅当指定的“分布”为“Cox 比例风险”时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Hazard Ratios( 1 )
		)
	)
);

```

#### Hide Inactive Paths

**语法:** obj << (fit[number] << Hide Inactive Paths( state=0|1 ))

**说明:** 调整“解路径参数估计值”图中不活动路径的透明度，以使当前不活动的路径变淡显示。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Hide Inactive Paths);

```

#### Incidence Rate Ratios

**语法:** obj << (fit[number] << Incidence Rate Ratios( state=0|1 ))

**说明:** 显示或隐藏一个报表，其中包含分类预测变量的发生率比以及连续预测变量的单位发生率比和范围发生率比。仅当指定的“分布”为“Poisson”或“负二项”并且模型包含截距时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Incidence Rate Ratios( 1 )
		)
	)
);

```

#### Inverse Prediction

**语法:** obj << (fit[number] << Inverse Prediction( Response( p1, p2, ... ), Term Value( effect1( value ), effect2( value ), ... ) ))

**说明:** 基于指定的 Y 值和所有其他因子生成 X 预测值和置信区间。该选项不适用于包含具有“向量”建模类型的预测变量的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Inverse Prediction(
	Response( 200, 250, 300 ),
	Term Value(
		Age( 48.5181 ),
		Gender( "1" ),
		BMI( . ),
		BP( 94.6470135746607 ),
		Total Cholesterol( 189.140271493213 ),
		LDL( 115.439140271493 ),
		HDL( 49.7884615384615 ),
		TCH( 4.07024886877828 ),
		LTG( 4.64141085972851 ),
		Glucose( 91.2601809954751 )
	)
));

```

#### Lift Curve

**语法:** obj << (fit[number] << Lift Curve( state=0|1 ))

**说明:** 显示或隐藏模型的提升曲线。若使用了验证，将为每个训练集、验证集和测试集都显示一条提升曲线。仅当指定的“分布”为“二项”、“多项式”或“有序型 Logistic”时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Lift Curve( 1 ));

```

#### Mean Confidence Interval

**语法:** obj << (fit[number] << Mean Confidence Interval)

**说明:** 将两个新公式列保存至原始数据表。新列包含响应均值的 95% 置信下限和上限。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Mean Confidence Interval);

```

#### Model Summary

**语法:** obj << (fit[number] << Model Summary( state=0|1 ))

**说明:** 显示或隐藏“模型汇总”报表，其中包括有关模型的规格和拟合优度统计量的信息。该选项还显示适用模型的“估计详细信息”报表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Model Summary( 0 ));

```

#### Multiple Comparisons

**语法:** obj << (fit[number] << Multiple Comparisons( Effect( effect ), <options> ))

**说明:** 生成最小二乘均值估计值或用户定义的估计值。这些估计值允许您与总平均值比较、与控制组比较或配对比较。该选项不适用于包含具有“向量”建模类型的预测变量的模型或不包含任何分类预测变量的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Hollywood Movies.jmp" );
fm = dt << Fit Model(
	Y( :World Gross ),
	Effects( :Rotten Tomatoes Score, :Audience Score, :Theme, :Genre ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Gamma" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Multiple Comparisons(
				Effect( :Genre ),
				Comparisons with Overall Average(
					1,
					Comparisons with Overall Average Decision Chart(
						ANOM( 1, Point Options( "Show Needles" ) )
					)
				)
			)
		)
	),
	SendToReport(
		Dispatch( {}, "Parameter Estimates for Original Predictors", OutlineBox, Close( 1 ) )
	)
);

```

#### Normal Quantile Plot

**语法:** obj << (fit[number] << Normal Quantile Plot( state=0|1 ))

**说明:** 显示或隐藏一个图，垂直轴上显示正态分位数，水平轴上显示标准化残差。若使用了验证，将为每个训练集、验证集和测试集都显示一个图。仅当指定的“分布”为“正态”且没有删失时该选项才可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Standard Least Squares" ) ) )
);
fm << (fit[1] << Normal Quantile Plot);

```

#### Odds Ratios

**语法:** obj << (fit[number] << Odds Ratios( state=0|1 ))

**说明:** 显示或隐藏一个报表，其中包含分类预测变量的优势比以及连续预测变量的单位优势比和范围优势比。仅当指定的“分布”为“二项”并且模型包含截距时该选项才可用。该选项不适用于包含具有“向量”建模类型的预测变量的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( "Logistic Regression" ),
			Validation Method( "None" ),
			Odds Ratios( 1 )
		)
	)
);

```

#### Parameter Estimates for Centered and Scaled Predictors

**语法:** obj << (fit[number] << Parameter Estimates for Centered and Scaled Predictors( state=0|1 ))

**说明:** 显示或隐藏中心化和统一尺度的参数估计值表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Centered and Scaled Predictors( 1 ));

```

#### Parameter Estimates for Original Predictors

**语法:** obj << (fit[number] << Parameter Estimates for Original Predictors( state=0|1 ))

**说明:** 显示或隐藏采用数据原始尺度的参数估计值表。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Parameter Estimates for Original Predictors( 0 ));

```

#### Plot Actual by Predicted

**语法:** obj << (fit[number] << Plot Actual By Predicted( state=0|1 ))

**说明:** 显示或隐藏一个针对训练集的图，垂直轴上显示实际值，水平轴上显示预测值。若使用了验证，将为每个训练集、验证集和测试集都显示一个图。当指定的“分布”为“二项”、“多项式”、“有序型 Logistic”或“Cox 比例风险”时该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Actual by Predicted( 1 ));

```

#### Plot Baseline Survival and Hazard

**语法:** obj << (fit[number] << Plot Baseline Survival and Hazard( state=0|1 ))

**说明:** 显示或隐藏“基线生存和危险率”图，这些图为基线比率危险率函数标绘生存和危险率函数与响应变量的关系图。在这些图下方有一个包含标绘值的表。仅当指定的“分布”为“Cox 比例风险”时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Cell Type, :Treatment, :Prior, :Age, :Diag Time, :KPS ),
	No Intercept,
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Plot Baseline Survival and Hazard( 1 )
		)
	)
);

```

#### Plot Residual by Predicted

**语法:** obj << (fit[number] << Plot Residual By Predicted( state=0|1 ))

**说明:** 显示或隐藏一个针对训练集的图，垂直轴上显示残差值，水平轴上显示预测值。若使用了验证，将为每个训练集、验证集和测试集都显示一个图。当指定的“分布”为“二项”、“多项式”、“有序型 Logistic”或“Cox 比例风险”时该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predicted( 1 ));

```

#### Plot Residual by Predictor

**语法:** obj << (fit[number] << Plot Actual By Predictor( state=0|1 ))

**说明:** 显示或隐藏一个图，垂直轴上显示残差值，水平轴上显示预测变量值。若使用了验证，将为每个训练集、验证集和测试集都显示一个图。当指定的“分布”为“二项”、“多项式”、“有序型 Logistic”或“Cox 比例风险”时该选项不可用。该选项不可用于包含建模类型为“向量”的预测变量的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
fm << (fit[1] << Plot Residual by Predictor( 1 ));

```

#### Precision Recall Curve

**语法:** obj << (fit[number] << Precision Recall Curve( state=0|1 ))

**说明:** 显示或隐藏“精度-召回曲线”图。精度-召回曲线绘制不同阈值下的精度值和召回值的关系。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << Precision Recall Curve( 1 ));

```

#### Profiler

**语法:** obj << (fit[number] << Profiler( state=0|1 ))

**说明:** 显示或隐藏“预测刻画器”。参数估计值为零且未涉及具有非零系数的任何交互作用项的预测变量不显示在刻画器中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Profiler( 1 )
		)
	)
);

```

#### Publish Prediction Formula

**语法:** obj << (fit[number] << Publish Prediction Formula)

**说明:** 创建预测公式并将其发布为“公式存储库”平台中的公式列脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Publish Prediction Formula);

```

#### Quantile Profiler

**语法:** obj << (fit[number] << Quantile Profiler( state=0|1 ))

**说明:** 显示或隐藏一个刻画器该刻画器显示预测响应作为预测变量的函数以及累积分布函数的分位数。该分位数称为“概率”显示在最右侧的单元格中。当指定的“分布”为“二项”或“分位数回归”时该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "BIC" ),
			Quantile Profiler( 1 )
		)
	)
);

```

#### ROC Curve

**语法:** obj << (fit[number] << ROC Curve( state=0|1 ))

**说明:** 显示或隐藏“受试者操作特征 (ROC)”曲线。若使用了验证，将为每个训练集、验证集和测试集都显示一条 ROC 曲线。仅当指定的“分布”为“二项”、“多项式”或“有序型 Logistic”时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Severity ),
	Effects(
		:BMI, :Age, :Time, :Markers, :Hepatitis, :Jaundice, :BMI * :Age, :BMI * :Time,
		:BMI * :Markers, :BMI * :Hepatitis, :BMI * :Jaundice, :Age * :Time, :Age * :Markers,
		:Age * :Hepatitis, :Age * :Jaundice, :Time * :Markers, :Time * :Hepatitis,
		:Time * :Jaundice, :Markers * :Hepatitis, :Markers * :Jaundice,
		:Hepatitis * :Jaundice
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Binomial" ),
	Run(
		Fit(
			Estimation Method( Elastic Net( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 0 );
fm << (fit[1] << ROC Curve( 1 ));

```

#### Relaunch Active Main Effects and Full Factorial

**语法:** obj << (fit[number] << Relaunch Active Main Effects and Full Factorial)

**说明:** 打开“拟合模型”启动窗口，其中的“构造模型效应”列表包含一组项，它们是基于具有非零参数估计值的项构造的。这些项是活跃效应。启动窗口中的所有其他规格都是在原始分析中使用的那些规格。“构造模型效应”列表仅使用通过活跃效应构造的完全析因填充。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Full Factorial);

```

#### Relaunch Active Main Effects and Response Surface Model

**语法:** obj << (fit[number] << Relaunch Active Main Effects and Response Surface Model)

**说明:** 打开“拟合模型”启动窗口，其中的“构造模型效应”列表包含一组项，它们是基于具有非零参数估计值的项构造的。这些项是活跃效应。启动窗口中的所有其他规格都是在原始分析中使用的那些规格。“构造模型效应”列表仅使用通过活跃效应构造的响应曲面模型填充。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Response Surface Model);

```

#### Relaunch Active Main Effects and Second Degree Factorial

**语法:** obj << (fit[number] << Relaunch Active Main Effects and Second Degree Factorial)

**说明:** 打开“拟合模型”启动窗口，其中的“构造模型效应”列表包含一组项，它们是基于具有非零参数估计值的项构造的。这些项是活跃效应。启动窗口中的所有其他规格都是在原始分析中使用的那些规格。“构造模型效应”列表仅使用通过活跃效应构造的二阶析因填充。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Factorial);

```

#### Relaunch Active Main Effects and Second Degree Polynomial

**语法:** obj << (fit[number] << Relaunch Active Main Effects and Second Degree Polynomial)

**说明:** 打开“拟合模型”启动窗口，其中的“构造模型效应”列表包含一组项，它们是基于具有非零参数估计值的项构造的。这些项是活跃效应。启动窗口中的所有其他规格都是在原始分析中使用的那些规格。“构造模型效应”列表仅使用通过活跃效应构造的二阶多项式填充。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Second Degree Polynomial);

```

#### Relaunch Active Main Effects and Third Degree Factorial

**语法:** obj << (fit[number] << Relaunch Active Main Effects and Third Degree Factorial)

**说明:** 打开“拟合模型”启动窗口，其中的“构造模型效应”列表包含一组项，它们是基于具有非零参数估计值的项构造的。这些项是活跃效应。启动窗口中的所有其他规格都是在原始分析中使用的那些规格。“构造模型效应”列表仅使用通过活跃效应构造的三阶析因填充。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Factorial);

```

#### Relaunch Active Main Effects and Third Degree Polynomial

**语法:** obj << (fit[number] << Relaunch Active Main Effects and Third Degree Polynomial)

**说明:** 打开“拟合模型”启动窗口，其中的“构造模型效应”列表包含一组项，它们是基于具有非零参数估计值的项构造的。这些项是活跃效应。启动窗口中的所有其他规格都是在原始分析中使用的那些规格。“构造模型效应”列表仅使用通过活跃效应构造的三阶多项式填充。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch Active Main Effects and Third Degree Polynomial);

```

#### Relaunch with Active Effects

**语法:** obj << (fit[number] << Relaunch with Active Effects)

**说明:** 打开“拟合模型”启动窗口，其中的“构造模型效应”列表包含一组项，它们是基于具有非零参数估计值的项构造的。这些项是活跃效应。启动窗口中的所有其他规格都是在原始分析中使用的那些规格。“构造模型效应”列表仅使用活跃效应填充。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Relaunch with Active Effects);

```

#### Remove Fit

**语法:** obj << (fit[number] << Remove Fit)

**说明:** 从报表中删除指定的拟合。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Fitness.jmp" );
fm = dt << Fit Model(
	Y( :Oxy ),
	Effects(
		:Weight, :Runtime, :RunPulse, :RstPulse, :MaxPulse, :Weight * :Runtime,
		:Weight * :RunPulse, :Weight * :RstPulse, :Weight * :MaxPulse, :Runtime * :RunPulse,
		:Runtime * :RstPulse, :Runtime * :MaxPulse, :RunPulse * :RstPulse,
		:RunPulse * :MaxPulse, :RstPulse * :MaxPulse
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
Wait( 2 );
fm << (fit[1] << Remove Fit);

```

#### Reset Solution

**语法:** obj << (fit[number] << Reset Solution)

**说明:** 将解路径中的模型重置为原始模型。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));
Wait( 1 );
fm << (Fit[1] << Reset Solution);

```

#### Save Cox Snell Residual Formula

**语法:** obj << (fit[number] << Save Cox Snell Residual Formula)

**说明:** 将新公式列保存至原始数据表。新列包含 Cox-Snell 残差的公式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Cox Snell Residual Formula);

```

#### Save Distribution Formula

**语法:** obj << (fit[number] << Save Distribution Formula)

**说明:** 将新公式列保存至原始数据表。新列包含累积分布函数的公式。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (Fit[1] << Save Distribution Formula);

```

#### Save Functional Prediction Formulas

**语法:** obj << (fit[number] << Save Functional Prediction Formulas)

**说明:** 将新列保存至原始数据表。为每个 FDE 主成分响应添加一个新列。每个新列都包含每个函数主成分的预测公式。添加了最后一列，其中包含模型预测公式，该公式是预测公式与“函数数据分析器”平台中的特征函数列的线性组合。仅当响应列包含“FDE FPC 数”列属性时该选项才可用。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Functional Data/Simple Linear Functional Data.jmp" );
fobj = Functional Data Explorer(
	Y( :Y ),
	X( :T ),
	ID( :ID ),
	Z( :X1, :X2, :X3 ),
	B Splines( 1 )
);
dtsum = (Report( fobj )["Function Summaries"] << get scriptable object) << Save Summaries;
fobj << close window;
fm = dtsum << Fit Model(
	Y( :Y FPC 1, :Y FPC 2 ),
	Effects( :X1, :X2, :X3, :X1 * :X2, :X1 * :X3, :X2 * :X3 ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Best Subset" ),
			Validation Method( "AICc" ),
			Enforce Heredity( 1 )
		)
	)
);
(Report( fm[1] )["Generalized Regression for Y FPC 1"][
"Normal Best Subset with AICc Validation"] << get scriptable object) <<
Save Functional Prediction Formulas;

```

#### Save Linear Predictor

**语法:** obj << (fit[number] << Save Linear Predictor)

**说明:** 将新公式列保存至原始数据表。新列包含设计矩阵与参数估计值向量的乘积公式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Save Linear Predictor);

```

#### Save Martingale Residual Formula

**语法:** obj << (fit[number] << Save Martingale Residual Formula)

**说明:** 将新公式列保存至原始数据表。新列包含鞅残差的公式。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Martingale Residual Formula);

```

#### Save Prediction Formula

**语法:** obj << (fit[number] << Save Prediction Formula)

**说明:** 将新公式列保存至原始数据表。新列包含以观测的（非标准化）数据值的形式给出的预测公式。预测公式不包含清零项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);

```

#### Save Resample Formulas

**语法:** obj << (fit[number] << Save Resample Formulas)

**说明:** 将多个公式列保存到原始数据表。名为“SVEM 样本”的列组为每个模型包含一个公式列。这些列另存为隐藏列。下一列是自验证集成模型的预测公式。下一列包含自验证集成模型的标准误差公式。最后一列包含每行的自验证集成模型的中位数预测。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run( Fit( Estimation Method( SVEM Forward Selection( Samples( 100 ) ) ) ) )
);
fm << (fit[1] << Save Resample Formulas);

```

#### Save Residual Formula

**语法:** obj << (fit[number] << Save Residual Formula)

**说明:** 将新公式列保存至原始数据表。新列包含残差公式，以 Y 减去预测公式的形式给出。残差公式不包含清零项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Residual Formula);

```

#### Save Simulation Formula

**语法:** obj << (fit[number] << Save Simulation Formula)

**说明:** 将新公式列保存至原始数据表。新列包含一个公式，该公式使用您拟合模型的估计参数生成模拟值。该列可在“模拟”实用工具中用作“换入列”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Simulation Formula);

```

#### Save Survival Formula

**语法:** obj << (fit[number] << Save Survival Formula)

**说明:** 将新公式列保存至原始数据表。新列包含在观测时间时的生存概率公式。生存函数等于 1 减去累积分布函数。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Save Survival Formula);

```

#### Save Validation Column

**语法:** obj << (fit[number] << Save Validation Column)

**说明:** 将新列保存至原始数据表。新列说明如何将行分配给折。对于“K 折”，该列列出该行被分配到第几折。对于“保留”，将每行标识为属于训练集或验证集。对于“留一法”，行的值指示其被排除在外的顺序。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "KFold", 5 ) ) )
);
fm << (fit[1] << Save Validation Column);

```

#### Save Variance Formula

**语法:** obj << (fit[number] << Save Variance Formula)

**说明:** 将新公式列保存至原始数据表。新列包含预测方差的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
fm = dt << Fit Model(
	Y( :satell ),
	Effects(
		:color, :spine, :width, :weight, :color * :spine, :color * :width, :color * :weight,
		:spine * :width, :spine * :weight, :width * :weight
	),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Poisson" ),
	Run( Fit( Estimation Method( Lasso( "Adaptive" ) ), Validation Method( "BIC" ) ) )
);
fm << (fit[1] << Save Variance Formula);

```

#### Select Nonzero Terms

**语法:** obj << (fit[number] << Select Nonzero Terms)

**说明:** 突出显示报表中具有非零系数的项。同时选择数据表中的所有关联列。当指定的“估计方法”为“岭回归”时该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Nonzero Terms);

```

#### Select Zeroed Terms

**语法:** obj << (fit[number] << Select Zeroed Terms)

**说明:** 突出显示报表中具有零系数的项。同时选择数据表中的所有关联列。当指定的“估计方法”为“岭回归”时该选项不可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Select Zeroed Terms);

```

#### Set Solution ID

**语法:** obj << (fit[number] << Set Solution ID( number ))

**说明:** 将指定模型更改为解路径中的其他模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Set Solution ID( 122 ));

```

#### Show Prediction Expression

**语法:** obj << (fit[number] << Show Prediction Expression( state=0|1 ))

**说明:** 显示或隐藏包含估计模型方程的“预测表达式”报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Show Prediction Expression);

```

#### Show Solution Path Summary

**语法:** obj << (fit[number] << Show Solution Path Summary( state=0|1 ))

**说明:** 显示或隐藏一个报表，其中包含“解路径”和“验证路径”图上活跃集发生变化的点的拟合统计量表。可用的统计量取决于估计方法。该选项不可用于“最大似然”或“岭回归”模型。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Show Solution Path Summary( 1 ));

```

#### Solution Path

**语法:** obj << (fit[number] << Solution Path( state=0|1 ))

**说明:** 显示或隐藏“解路径”和“验证路径”图。该选项不可用于“最大似然”模型。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
Wait( 1 );
fm << (fit[1] << Solution Path( 0 ));

```

#### Std Error of Predicted

**语法:** obj << (fit[number] << Std Error of Predicted)

**说明:** 将新列保存至原始数据表。新列包含预测响应均值的标准误差。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted);

```

#### Std Error of Predicted Formula

**语法:** obj << (fit[number] << Std Error of Predicted Formula)

**说明:** 将新公式列保存至原始数据表。新列包含预测响应均值的标准误差的公式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit( Estimation Method( Lasso( Adaptive ) ), Validation Method( Validation Column ) )
	)
);
fm << (fit[1] << Save Prediction Formula);
fm << (fit[1] << Std Error of Predicted Formula);

```

#### Step Backward

**语法:** obj << (fit[number] << Step Backward)

**说明:** 移至解路径中的下一个最小模型。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Backward);
Wait( 1 );
fm << (Fit[1] << Step Backward);

```

#### Step Forward

**语法:** obj << (fit[number] << Step Forward)

**说明:** 移至解路径中的下一个最大模型。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Validation( :Validation ),
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run( Fit( Estimation Method( "Lasso" ), Validation Method( "Validation Column" ) ) )
);
Wait( 1 );
fm << (Fit[1] << Step Forward);
Wait( 1 );
fm << (Fit[1] << Step Forward);

```

#### Survival Profiler

**语法:** obj << (fit[number] << Survival Profiler( state=0|1 ))

**说明:** 显示或隐藏一个刻画器，该刻画器显示生存函数作为预测变量和响应的函数。响应显示在最右侧的方格中。仅当指定的“分布”为“正态”、“指数”、“Weibull”、“对数正态”或“Cox 比例风险”时该选项才可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/VA Lung Cancer.jmp" );
fm = dt << Fit Model(
	Censor( :censor ),
	Censor Code( "1" ),
	Y( :Time ),
	Effects( :Age, :Diag Time ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Cox Proportional Hazards" ),
	Run( Fit( Estimation Method( "Maximum Likelihood" ), Validation Method( "None" ) ) )
);
fm << (fit[1] << Survival Profiler( 1 ));

```

## Generalized Regression

### 共享项消息

#### Action

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

#### Apply Preset

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

#### Automatic Recalc

**语法:** obj << Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

#### Broadcast

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

#### Column Switcher

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

#### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Copy Script;

```

#### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Data Table Window;

```

#### Get By Levels

**语法:** obj << Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj << Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

#### Get Container

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
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

#### Get Group Platform

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

#### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Script;
Show( t );

```

#### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

#### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
t = obj << Get Timing;
Show( t );

```

#### Get Web Support

**语法:** obj << Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

#### Get Where Expr

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

#### Ignore Platform Preferences

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

#### Local Data Filter

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

#### New JSL Preset

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

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

#### Paste Local Data Filter

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

#### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Redo Analysis;

```

#### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

#### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Relaunch Analysis;

```

#### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

#### Remove Column Switcher

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

#### Remove Local Data Filter

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

#### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

#### Report

**语法:** obj << Report;

Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Report View

**语法:** obj << Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Save Script to Script Window;

```

#### SendToByGroup

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

#### SendToEmbeddedScriptable

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

#### SendToReport

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

#### Sync to Data Table Changes

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

#### Title

**语法:** obj << Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

#### Transform Column

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

#### View Web XML

**语法:** obj << View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Fit Generalized(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### 关联的构造器

#### Fit Generalized

**语法:** Fit Model( Y( columns ), Effects( columns ), Personality( "Generalized Regression" ) )

**说明:** 使用惩罚回归方法拟合广义线性模型，它有助于以避免过拟合的方式自动执行变量选择。惩罚回归方法包括 lasso、自适应 lasso、弹性网络、自适应弹性网络和岭回归。响应分布可以适用于连续、分类、计数和事件时间响应数据。对于大多数回归设置推荐使用该特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);

```

### 列

#### By

**语法:** obj << By( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	By( _bycol )
);

```

### 项消息

#### Fit

**语法:** obj << Fit( Estimation Method( Emethod( estim_options ) ), Validation Method( Vmethod( valid_options ) ), <Early Stopping>, <Enforce Heredity>, <Force( vector )> )

**说明:** 为您的模型指定“估计方法”和选项，“验证方法”和选项，以及其他拟合选项。可用的估计选项取决于所指定的估计方法。验证选项可用于“K 折”和“保留”方法。其他拟合选项控制提前停止、强制项遗传，以及强制项进入模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	),
	SendToReport( Dispatch( {}, "Model Launch", OutlineBox, Close( 0 ) ) )
);

```

#### Get X Matrix

**语法:** obj << Get X Matrix

**说明:** 返回设计矩阵（也称 X 矩阵）。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
As Table( fm << Get X Matrix );

```

#### Model Dialog

**语法:** obj << Model Dialog

**说明:** 为当前分析显示完成的“拟合模型”启动窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Validation( :Validation ),
	Run(
		Fit(
			Estimation Method( Lasso( "Adaptive" ) ),
			Validation Method( "Validation Column" )
		)
	)
);
obj << Model Dialog;

```

#### Save Coding Table

**语法:** obj << Save Coding Table

**说明:** 创建一个新数据表，它包含所有模型参数的 JMP 编码。最后一列显示响应变量的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
fm = dt << Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run
);
fm << Save Coding Table;

```

#### Set Random Seed

**语法:** obj = Fit Model(...Run( Set Random Seed( number ) )...)

**说明:** 设置用于“K 折”和“保留”验证的随机化过程的种子。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );
Fit Model(
	Y( :Y ),
	Effects( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Set Random Seed( 1111 ),
		Fit( Estimation Method( "Lasso" ), Validation Method( "Holdback", 0.3 ) )
	)
);

```

## Model Dialog

### 列

#### ID

**语法:** obj = Run(...<ID( column )>...)

<b>启动窗口项: 是</b>

**说明:** 标识遗传关系矩阵的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

#### Subgroup

**语法:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) )...)

<b>启动窗口项: 是</b>

**说明:** 指定一个或多个子组变量。当定义了子组变量时，会为该子组变量的每个类别执行其他拟合。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Switch

**语法:** obj = Fit Model(...Switch( column(s) )...)

<b>启动窗口项: 是</b>

**说明:** 指定可以一次一个切换到模型中的列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

### 项消息

#### Cauchy Fit

**语法:** obj = Fit Model(...Personality( "Response Screening" ), Cauchy Fit( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 假定误差服从 Cauchy 分布。Cauchy 分布具有比正态分布更肥大的尾部，从而弱化了对离群值的强调。仅可用于“响应筛选”特质。该消息对应于“拟合模型”启动窗口中的“非常稳健拟合”选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Cauchy Fit( 1 ),
	Run
);

```

#### Censor Code

**语法:** obj = Fit Model(...Censor Code( string )...)

<b>启动窗口项: 是</b>

**说明:** 标识“删失”列中指定右删失观测的值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Rats.jmp" );
dt << Fit Model(
	Y( :days ),
	Effects( :Group ),
	Personality( "Proportional Hazard" ),
	Censor( :Censor ),
	Censor Code( "1" ),
	Run( Likelihood Ratio Tests( 1 ), Likelihood Confidence Intervals( 1 ) )
);

```

#### Center Polynomials

**语法:** obj = Fit Model(...Center Polynomials( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 将多项式模型中的效应中心化。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE, :SILICA * :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Centering

**语法:** obj = Fit Model(...Personality( "Partial Least Squares" ), Centering( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 通过从每个列减去均值将所有响应变量和模型效应中心化。仅可用于“偏最小二乘”特质。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Centering( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Choose High Target

**语法:** obj = Fit Model(...Personality( "Nominal Logistic" ), Choose High Target( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定二值名义型响应的较大值用作目标响应。仅可用于“名义型 Logistic”特质中的二值型响应列。该消息对应于“拟合模型”启动窗口中的“目标水平”选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Choose High Target( 1 ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

#### Convergence Limit

**语法:** obj = Fit Model(...Convergence Limit( number=0.00000001 )...)

<b>启动窗口项: 是</b>

**说明:** 指定模型拟合的收敛极限。若您的模型不容易收敛，您可能希望增加收敛极限。默认情况下，收敛极限为 0.00000001。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Convergence Limit( 0.0001 ),
	Run
);

```

#### Create SAS Job

**语法:** obj << Create SAS Job

**说明:** 将当前模型规格的 SAS 代码保存至“SAS 程序”窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Create SAS Job;

```

#### Dispose Reports

**语法:** obj = Fit Model(...Dispose Reports( state=0|1 )...)

**说明:** 指定不显示各个模型报表并且在拟合后将它们从内存中移除。当包含上千个响应时，该选项可减少计算时间并节省内存。将该选项和“数据表中的结果”选项一起使用以从拟合的模型中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Dispose Reports( 1 ),
	Run
);

```

#### Effects

**语法:** obj = Run(...Effects( col, col, ... )...);

obj = Run(...Effects( macro( col, col, ... ) )...)

<b>启动窗口项: 是</b>

**说明:** 将解释变量项指定给“效应”角色。您可以单独或使用“拟合模型”启动窗口中提供的宏来指定效应。请参见下面的各个示例。

**Scheffe 三次项**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Scheffe Cubic( :height, :weight ) ) );

```

**偏三次项**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Partial Cubic( :height, :weight ) ) );

```

**分组的回归变量**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Grouped Regressors( :height, :weight ) ) );

```

**响应曲面**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Response Surface( :weight, :age ) ) );

```

**多项式次数**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 5 ),
	Effects( Polynomial to Degree( :height, :weight ) )
);

```

**完全析因**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Full Factorial( :sex, :age, :weight ) ) );

```

**效应**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( :sex, :age, :weight ) );

```

**析因排序**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model( Y( :height ), Effects( Factorial Sorted( :sex, :age, :weight ) ) );

```

**析因次数**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Set Degree( 2 ),
	Effects( Factorial to Degree( :sex, :age, :weight ) )
);

```

**混料响应曲面**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Big Class.jmp" );
dialog = dt << Fit Model(
	Y( :height ),
	Effects( Mixture Response Surface( :weight, :age ) )
);

```

#### Emphasis

**语法:** obj = Fit Model(...Personality( "Standard Least Squares" ), Emphasis( "Effect Leverage" | "Effect Screening" | "Minimal Report" )...)

<b>启动窗口项: 是</b>

**说明:** 指定在“标准最小二乘法”特质的默认报表中显示的图和统计量的类型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Emphasis( "Effect Screening" )
);
obj << Run Model;

```

#### Error Specification

**语法:** obj = Fit Model(...Personality("Standard Least Squares" ), Error Specification( "Default Estimate" | "Pure Error" | "Specified" )...)

**说明:** 指定用于“拟合最小二乘法”报表中标准误差和检验的误差方差和误差自由度。该选项仅在没有随机效应时用于“标准最小二乘法”特质。

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Error Specification( "Pure Error" ),
	Run
);

```

#### Estimate Only Variance Components

**语法:** obj = Fit Model(...Personality( "Standard Least Squares" ), Estimate Only Variance Components( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 使用指定的模型运行 REML 分析并显示一个报表，其中仅包含来自模型的方差分量。仅可用于“标准最小二乘法”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Estimate Only Variance Components( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Run
);

```

#### Firth Bias-Adjusted Estimates

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), "Firth Bias-Adjusted Estimates"n( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定使用 Firth 偏倚调整方法拟合模型。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	"Firth Bias-Adjusted Estimates"n( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Fit Separately

**语法:** obj = Fit Model(...Personality( "Standard Least Squares" ), Fit Separately( state=0|1 )...)

**说明:** 使用非缺失的所有行为每个 Y 变量拟合单独的模型。该选项仅在模型具有多个 Y 变量且不包含随机效应的“标准最小二乘法”特质中可用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION, :HARDNESS ),
	Effects( :SILICA, :SILANE, :SULFUR ),
	Personality( "Standard Least Squares" ),
	Fit Separately( 1 ),
	Run
);

```

#### GLM Distribution

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), GLM Distribution( distribution name )...)

<b>启动窗口项: 是</b>

**说明:** 指定响应变量的概率分布。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
obj = dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Binomial" ),
	Link Function( "Logit" ),
	Run
);

```

#### Generalized Distribution

**语法:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( distribution name )...)

<b>启动窗口项: 是</b>

**说明:** 指定响应概率分布。仅可用于“广义回归”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Normal" ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

#### Imputation Method

**语法:** obj = Fit Model(...Personality( "Partial Least Squares" ), Imputation Method( "Mean" | "EM" )...)

<b>启动窗口项: 是</b>

**说明:** 指定插补方法。默认情况下，使用“均值”方法。仅可用于“偏最小二乘”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Impute Missing Data

**语法:** obj = Fit Model(...Personality( "Partial Least Squares" ), Impute Missing Data( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 通过指定的“插补方法”使用非缺失值来替代 Y 或 X 列中的缺失数据值。仅可用于“偏最小二乘”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Informative Missing

**语法:** obj = Fit Model(...Informative Missing( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 启用缺失值插补和编码。当未选择该选项时，将忽略带有缺失值的行。



对于连续变量，缺失值由变量的均值代替。此外，将创建缺失指示变量并将其包含在模型中。



对于分类变量，不会插补缺失值，但会将其视为模型中变量的另一个水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt:height[3] = dt:age[2] = .;
dt << Fit Model(
	Y( :weight ),
	Effects( :height, :age ),
	Informative Missing( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Keep dialog open

**语法:** obj << Keep dialog open( state=0|1 )

**说明:** 指定在运行指定的模型之后，“拟合模型”启动窗口是保持打开还是关闭。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Keep dialog open( 1 ),
	Run
);

```

#### Link Function

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Link Function( link type )...)

<b>启动窗口项: 是</b>

**说明:** 指定模型的连结函数。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Max Iterations

**语法:** obj = Fit Model(...Personality( "Partial Least Squares" ), Max Iterations( number=1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定算法使用的最大迭代次数。若缺失值的当前估计值和前一估计值之间的最大差值不超过 10^-8，算法将终止。仅可用于“偏最小二乘”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dt << Fit Model(
	Y( :POP, :Max deg. F Jan ),
	Effects( :OZONE, :CO, :SO2, :NO, :PM10, :Lead ),
	No Intercept( 1 ),
	Center Polynomials( 0 ),
	Personality( "Partial Least Squares" ),
	Impute Missing Data( 1 ),
	Imputation Method( "EM" ),
	Max Iterations( 5 ),
	Run(
		Initial Number of Factors( 6 ),
		Validation Method( KFold( 7 ), Initial Number of Factors( 6 ) ),
		Fit( Method( NIPALS ), Number of Factors( 2 ) )
	)
);

```

#### Maximum Iterations

**语法:** obj = Fit Model(...Maximum Iterations( number=100 )...)

<b>启动窗口项: 是</b>

**说明:** 指定模型拟合中使用的最大迭代次数。默认情况下，最大迭代次数为 100。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Maximum Iterations( 150 ),
	Run
);

```

#### Method

**语法:** obj = Fit Model(...Personality( "Standard Least Squares" ), Method( "EMS" | "REML" )...)

<b>启动窗口项: 是</b>

**说明:** 指定用于在“标准最小二乘法”特质中拟合混合模型的方法。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 1 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### No Intercept

**语法:** obj = Fit Model(...No Intercept( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 将模型的截距设置为零。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	No Intercept( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### NoBounds

**语法:** obj = Fit Model(...Personality( "Standard Least Squares" ), NoBounds( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 删除方差估计限制。若关闭，则方差估计的下限设置为零。仅可用于“标准最小二乘法”特质。 默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Animals.jmp" );
obj = dt << Fit Model(
	Y( :miles ),
	Effects( :species, :subject[:species] & Random, :season, :species * :season ),
	NoBounds( 0 ),
	Personality( "Standard Least Squares" ),
	Method( "REML" ),
	Emphasis( "Minimal Report" ),
	Run
);

```

#### Nominal Coding

**语法:** obj = Fit Model(...Nominal Coding( "Average Level" | "Last Level" )...)

**说明:** 指定名义型效应的编码是从各水平平均值估计差值（默认方式）还是从最后一个水平来估计差值。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tablet Production.jmp" );
dt << Fit Model(
	Y( :Disso ),
	Effects(
		:Mill Time, :Screen Size, :Blend Time, :Blend Speed, :Compressor, :Coating Viscosity,
		:Spray Rate
	),
	Personality( "Standard Least Squares" ),
	Nominal Coding( "Last Level" ),
	Emphasis( "Effect Leverage" ),
	Run
);

```

#### Overdispersion Tests and Intervals

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Overdispersion Tests and Intervals( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定过度离散参数应要包括在模型中。仅可用于“广义线性模型”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Log" ),
	Run
);

```

#### Personality

**语法:** obj = Fit Model(...Personality( "Standard Least Sqaures" | "Stepwise" | "Generalized Regression" | "Mixed Model" | "Generalized Linear Mixed Model" | "Manova" | "Loglinear Variance" | "Nominal Logistic" | "Ordinal Logistic" | "Proportional Hazard" | "Parametric Survival" | "Generalized Linear Model" | "Partial Least Squares" | "Response Screening" )...)

<b>启动窗口项: 是</b>

**说明:** 指定用于拟合模型的分析的类型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

#### Power Link Parameter

**语法:** obj = Fit Model(...Personality( "Generalized Linear Model" ), Power Link Parameter( value=1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定“功效”连结函数的参数。仅当在“广义线性模型”特质中“功效”指定为连结函数时可用。 默认为“1”。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/CrabSatellites.jmp" );
obj = dt << Fit Model(
	Y( :satell ),
	Effects( :color, :spine, :width, :weight ),
	Center Polynomials( 0 ),
	Personality( "Generalized Linear Model" ),
	Overdispersion Tests and Intervals( 1 ),
	GLM Distribution( "Poisson" ),
	Link Function( "Power" ),
	Power Link Parameter( 0.5 ),
	Run
);

```

#### Quantile

**语法:** obj = Fit Model(...Personality( "Generalized Regression" ), Generalized Distribution( "Quantile Regression" ), Quantile( q=0.5 )...)

**说明:** 指定要建模的响应的分位数。仅可用于“广义回归”特质。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Fit Model(
	Y( :height ),
	Effects( :weight, :sex ),
	Personality( "Generalized Regression" ),
	Generalized Distribution( "Quantile Regression" ),
	Quantile( 0.75 ),
	Run(
		Fit(
			Estimation Method( "Maximum Likelihood" ),
			Validation Method( "None" ),
			Profiler( 1 )
		)
	)
);

```

#### Results in Data Tables

**语法:** obj = Fit Model(...Results in Data Tables( state=0|1 )...)

**说明:** 将许多响应的各个模型结果保存至数据表。输出数据表的内容和个数取决于正在拟合的模型。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Run
);

```

#### Robust Fit

**语法:** obj = Fit Model(...Personality( "Response Screening" ), Robust Fit( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 使用稳健 (Huber) 估计降低离群值的权重。若无离群值，这些估计值接近最小二乘估计值。仅可用于“响应筛选”特质。该消息对应于“拟合模型”启动窗口中的“稳健拟合”选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Probe.jmp" );
dt << Fit Model(
	Effects( :Process, :Site, :Process * :Site ),
	Personality( "Response Screening" ),
	Y( 8 :: 394 ),
	Robust Fit( 1 ),
	Run
);

```

#### Run

**语法:** obj = Fit Model(...Run( <options> )...);

obj << Run( <options> )

**说明:** 运行在“拟合模型”启动窗口中指定的模型，然后关闭启动窗口。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" ),
	Run( Show Prediction Expression( 1 ) )
);
obj << Run;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run;

```

#### Run Model

**语法:** obj << Run Model

**说明:** 运行在“拟合模型”启动窗口中指定的模型，并保持启动窗口打开。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Run Model;

```

#### Save to Data Table

**语法:** obj << Save to Data Table

**说明:** 将模型以 JSL 形式保存到当前数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to DataTable;

```

#### Save to Script Window

**语法:** obj << Save to Script Window

**说明:** 将模型以 JSL 形式保存到脚本窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Personality( "Standard Least Squares" )
);
obj << Save to Script Window;

```

#### Scaling

**语法:** obj = Fit Model(...Personality( "Partial Least Squares" ), Scaling( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 通过将每个列除以其标准差对所有响应变量和模型效应统一尺度。 仅可用于“偏最小二乘”特质。  默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Scaling( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Set Alpha Level

**语法:** obj = Fit Model(...Set Alpha Level( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定模型报表中置信区间的 alpha 水平。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Fit Model(
	Y( :ABRASION ),
	Effects( :SILICA, :SILANE ),
	Center Polynomials( 0 ),
	Personality( "Standard Least Squares" ),
	Set Alpha Level( 0.01 ),
	Run
);

```

#### Standardize X

**语法:** obj = Fit Model(...Personality( "Partial Least Squares" ), Standardize X( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 将构造模型效应时使用的所有列中心化和统一尺度。若未选择该选项，则使用原始数据表列构造高阶效应。然后基于所选的“中心化”和“统一尺度”选项将每个高阶效应中心化或统一尺度。请注意，“标准化 X”选项不将 Y 变量中心化或统一尺度。仅可用于“偏最小二乘”特质。  默认开启。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Baltic.jmp" );
dt << Fit Model(
	Y( :ls, :ha, :dt ),
	Effects( 5 :: 31 ),
	No Intercept( 1 ),
	Personality( "Partial Least Squares" ),
	Standardize X( 0 ),
	Run( Validation Method( KFold( 7 ) ), Fit( Method( NIPALS ) ), Number of Factors( 5 ) )
);

```

#### Subgroup Twoway

**语法:** obj = Fit Model(...Personality( "Response Screening" ), Subgroup( column(s) ), Subgroup Twoway( state=0|1 )...)

**说明:** 拟合所有双因子子组组合。该选项仅在“响应筛选”特质中定义了至少一个“子组”变量时可用。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Fit Model(
	Y( :age ),
	Effects( :sex, :type ),
	Subgroup( :country, :marital status ),
	Personality( "Response Screening" ),
	Subgroup Twoway( 1 ),
	Run
);

```

#### Suppress Coding

**语法:** obj = Fit Model(...Suppress Coding( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 禁止任何“编码”列属性，以便估计值针对的是原始尺度。“编码”列属性允许您更方便地比较估计值，并有助于使低阶效应检验有意义。除非您需要，否则不建议使用“禁止编码”选项。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur, :Silane ),
	Suppress Coding( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Suppress Reports

**语法:** obj = Fit Model(...Suppress Reports( state=0|1 )...)

**说明:** 指定各个模型报表是隐藏的。当包含上千个响应时，该选项可减少计算时间。拟合对象和某些菜单项仍可用。使用“数据表中的结果”选项从模型报表中收集结果。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Bands Data.jmp" );
obj = dt << Fit Model(
	Y(
		:grain screened, :proof on ctd ink, :blade mfg, :paper type, :ink type, :direct steam,
		:solvent type, :type on cylinder, :press type, :unit number, :cylinder size,
		:paper mill location, :plating tank
	),
	Effects( "Banding?"n ),
	Personality( "Nominal Logistic" ),
	Results in Data Tables( 1 ),
	Suppress Reports( 1 ),
	Run
);

```

#### Suppress Warning for Missing Effects

**语法:** obj = Fit Model(...Suppress Warning for Missing Effects( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 禁止高阶效应隐含的低阶效应不在模型中的警告警示。当试验许多子集模型时该选项很有用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Design Experiment/Bounce Data.jmp" );
obj = dt << Fit Model(
	Y( :Stretch ),
	Effects( :Silica, :Sulfur * :Silane ),
	Suppress Warning for Missing Effects( 1 ),
	Personality( "Standard Least Squares" ),
	Run
);

```

#### Target Level

**语法:** obj = Fit Model(...Target Level( level )...)

**说明:** 指定您想对其概率建模的水平。默认值是两个水平中顺序更高的那个水平。仅在某些特质中并且 Y 变量是二值型且具有“名义型”建模类型时可用。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Penicillin.jmp" );
dt << Fit Model(
	Freq( :Count ),
	Y( :Response ),
	Effects( :"ln(dose)"n ),
	Personality( "Nominal Logistic" ),
	Target Level( "Cured" ),
	Run( Likelihood Ratio Tests( 1 ), Wald Tests( 0 ), Logistic Plot( 1 ) )
);

```

