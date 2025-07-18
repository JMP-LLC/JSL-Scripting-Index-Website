# EWMA Control Chart



## 共享项消息

### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Bivariate(
	Y( :height ),
	X( :weight ),
	Action( Distribution( Y( :height, :weight ), Histograms Only ) )
);

```

### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

#### 匿名预设

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();
dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );
obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );
Wait( 1 );
obj2 << Apply Preset( preset );

```

#### 在文件夹内搜索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

#### 按名称搜索

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ) );
Wait( 1 );
obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

### Automatic Recalc

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );
objs = Control Chart Builder(
	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),
	By( :OPERATOR )
);
objs[1] << Broadcast( Save Summaries );

```

### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Data Table Window;

```

### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

#### 带过滤器的平台

```jsl

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

#### 常规

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );
group = biv[1] << Get Group Platform;
Wait( 1 );
group << Layout( "Arrange in Tabs" );

```

### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
s = obj << Get Web Support();
Show( s );

```

### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );
Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );
preset = obj << New Preset();

```

### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Relaunch ByGroup;

```

### Render Preset

**语法:** Render Preset( preset )

**说明:** For testing purposes, show the platform rerun script that would be used when applying a platform preset to the platform in the log. No changes are made to the platform.

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**语法:** obj &lt;&lt; Report;Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

#### 示例 1

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table;

```

#### 示例 2

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Script to Script Window;

```

### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Nominal Distribution( Column( :age ) ),
	Continuous Distribution( Column( :weight ) ),
	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) )
);

```

### Sync to Data Table Changes

**语法:** obj &lt;&lt; Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Continuous Distribution( Column( :POP ) ) );
Wait( 1 );
dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );
dist << Sync To Data Table Changes;

```

### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Distribution(
	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),
	Continuous Distribution( Column( :"age^2"n ) )
);

```

### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**语法:** obj = EWMA Control Chart(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );
eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;
biv << Close Window;
New Window( "Bivariate Equation",
	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) )
);

```

## 关联的构造器

### EWMA Control Chart

**语法:** EWMA Control Chart( Y( column ), &lt;Subgroup( column )&gt;, &lt;By( column )&gt;, &lt;Center Data( 1 )&gt; )

**说明:** 创建绘制指数加权移动平均值的图表，以及绘制单值观测或子组均值的图表。EWMA 图也称为反馈控制图。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

## 列

### By

**语法:** obj = EWMA Control Chart(...&lt;By( column(s) )&gt;...)

**说明:** 启动期间指定“依据”列。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << EWMA Control Chart( Y( :Gap ), By( _bycol ) );

```

### Subgroup

**语法:** obj = EWMA Control Chart(...&lt;Subgroup( column )&gt;...)

**说明:** 指定启动期间的子组列。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );

```

### Y

**语法:** obj = EWMA Control Chart(...Y( column(s) )...)

**说明:** 启动期间指定 Y 列。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );

```

## 项消息

### Alarm Script

**语法:** Alarm Script(Write("...")|Speak("...")|Mail(address, subject,"...") )

**说明:** 每当控制图上的点未能通过给定检验时就发送消息。消息可以发送至日志、可语音播报或通过电子邮件发送。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart(
	Alarm Script(
		Write(
			"Out of Control for test ",
			qc_test,
			" in column ",
			qc_col,
			" in sample ",
			qc_sample,
			". \!N"
		)
	),
	Y( :Gap ),
	Subgroup( :Sample )
);
obj << Test Beyond Limits( 1 );

```

### Center Data

**语法:** obj = EWMA Control Chart(...Center Data( state=0|1 )...)

**说明:** 指定通过从每个观测中减去目标来对数据进行中心化。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Lambda( 0.2 ), Center Data( 1 ) );

```

### Connect Thru Missing

**语法:** obj &lt;&lt; Connect Thru Missing( state=0|1 )

**说明:** 当某些样本包含缺失值或排除的行时连接各点。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Connect Thru Missing( 1 );

```

### Constant Limits

**语法:** obj &lt;&lt; Constant Limits( state=0|1 )

**说明:** 使用渐近表达式来形成常数 EWMA 限值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait();
obj << Constant Limits( 1 );

```

### Control Panel

**语法:** obj &lt;&lt; Control Panel( state=0|1 )

**说明:** 显示或隐藏包含参数当前值并支持您更改这些值的报表。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Control Panel( 0 );

```

### Get Limits

**语法:** obj &lt;&lt; Get Limits( filename )

**说明:** 从选定的数据表导入控制限，并替换图表上的计算限值。

**JMP添加的版本:** 17

```jsl

dtLimits = New Table( "EWMA Limits",
	New Column( "_LimitsKey",
		Character,
		Set Values( {"_KSigma", "_Weight", "_Mean", "_Std Dev"} )
	),
	New Column( "Gap", Set Values( [4, 0.3, 15, 0.2655555] ) )
);
dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Get Limits( dtLimits );

```

### K Sigma

**语法:** obj &lt;&lt; K Sigma( K value=3 )

**说明:** 设置 K 值用以乘上 sigma，以形成关于平均值的控制限。 默认为“3”。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << K Sigma( 4 );

```

### Lambda

**语法:** obj &lt;&lt; Lambda( number=0.2 )

**说明:** 指定用于加权先验样本的平滑常数。 默认为“0.2”。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda( 0.5 );

```

### Lambda Slider

**语法:** obj &lt;&lt; Lambda Slider( state=0|1 )

**说明:** 在控制面板上显示或隐藏 lambda 滑块。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda Slider( 1 );

```

### Overlay Charts

**语法:** obj &lt;&lt; Overlay Charts( state=0|1 )

**说明:** 在 EWMA 图上叠加各个点或均值点（若汇总了数据）。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Overlay Charts( 1 );

```

### Parameters Report

**语法:** obj &lt;&lt; Parameters Report( state=0|1 )

**说明:** 显示或隐藏参数报表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Parameters Report( 1 );

```

### Reset to Defaults

**语法:** obj &lt;&lt; Reset to Defaults

**说明:** 将所有参数重置回默认值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Lambda( .9 );
Wait( 1 );
obj << Reset to Defaults();

```

### Restart EWMA after Empty Subgroup

**语法:** obj &lt;&lt; Restart EWMA after Empty Subgroup( state=0|1 )

**说明:** 在每个缺失或排除的子组之后，重新开始 EWMA 统计量的计算。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35} ) << exclude << hide;
Wait();
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ) );
Wait( 1 );
obj << Restart EWMA after empty subgroup( 1 );

```

### Save Limits

**语法:** obj &lt;&lt; Save Limits( "在列中"|"在新表中" )

**说明:** 将图参数保存至列属性或新数据表。



若指定了 in Column，则平均值保存在“EWMA 控制限”列属性中。



若指定了 in New Table，则每个图的 Lambda（或权重）、标准差和均值保存至新数据表。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Limits( "in Column" );
obj << Save Limits( "in New Table" );

```

### Save Sigma

**语法:** obj &lt;&lt; Save Sigma

**说明:** 将控制图中使用的 Sigma 保存为数据表中的列属性。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Sigma;

```

### Save Summaries

**语法:** obj &lt;&lt; Save Summaries

**说明:** 创建一个新表，它包含每个子组的汇总统计量和限值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Save Summaries;

```

### Show ARL

**语法:** obj &lt;&lt; Show ARL( state=0|1 )

**说明:** 显示或隐藏根据相关 EWMA 和 X 图计算其平均运行长度的报表。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show ARL( 1 );

```

### Show Center Line

**语法:** obj &lt;&lt; Show Center Line( state=0|1 )

**说明:** 显示或隐藏图形中的中心线。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Center Line( 0 );

```

### Show Excluded Region

**语法:** obj = EWMA Control Chart(...Show Excluded Region( state=0|1 )...)

**说明:** 在子组轴上显示或隐藏排除区域。仅适用于子组变量。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
dt << Select Rows( {31, 32, 33, 34, 35, 36, 37, 38, 39, 40} ) << exclude << hide;
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Sample ), Show Excluded Region( 0 ) );

```

### Show Limits

**语法:** obj &lt;&lt; Show Limits( state=0|1 )

**说明:** 显示或隐藏限值。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Limits( 0 );

```

### Show Residuals Chart

**语法:** obj &lt;&lt; Show Residuals Chart( state=0|1 )

**说明:** 显示或隐藏残差图。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show Residuals Chart( 0 );

```

### Show Shift Lines

**语法:** obj &lt;&lt; Show Shift Lines( state=0|1 )

**说明:** 显示或隐藏指定图中偏移的垂直线。在偏移的起点处绘制偏移线。仅当在数据中检测到偏移时才可用。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
Wait( 1 );
obj << Show Shift Lines( 0 );

```

### Show X Chart

**语法:** obj &lt;&lt; Show X Chart( state=0|1 )

**说明:** 显示或隐藏 EWMA 图下方的位置图。 默认开启。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Show X Chart( 0 );

```

### Show X Limits on Overlay Charts

**语法:** obj &lt;&lt; Show X Limits on Overlay Charts( state=0|1 )

**说明:** 当“叠加图”选项被选中时，在 EWMA 图上叠加位置图中的限值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart(
	Y( :Gap ),
	Show X Limits On Overlay Charts( 1 ),
	Overlay Charts( 1 )
);

```

### Sigma

**语法:** obj &lt;&lt; Sigma( number )

**说明:** 指定标准差的已知值。默认情况下，该参数设置为 Y 列的平均移动极差。若有“子组”变量，则 Sigma 参数设置为子组均值的移动极差的平均值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Sigma( 2 );

```

### Target

**语法:** obj &lt;&lt; Target( number )

**说明:** 指定均值的已知值。这是图中中心线的值。默认情况下，该参数设置为 Y 列的“规格限”列属性中的“目标”值。若 Y 列的“规格限”列属性中没有“目标”值，则该参数设置为 Y 列的总平均值。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips1.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Target( 14.65 );

```

### Test Beyond Limits

**语法:** obj &lt;&lt; Test Beyond Limits( state=0|1 )

**说明:** 在 EWMA 和 X 图中高于上限或低于下限的任何点周围显示或隐藏一个红色圆圈。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ) );
obj << Test Beyond Limits( 1 );

```

### Use Overall Mean for Target

**语法:** obj &lt;&lt; Use Overall Mean for Target( state=0|1 )

**说明:** 将“目标”设置为总均值。注意: 仅当使用“目标”的“规格限”列属性设置“目标”时才适用。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Clips2.jmp" );
obj = dt << EWMA Control Chart( Y( :Gap ), Subgroup( :Date ) );
Wait( 1 );
obj << Use Overall Mean for Target();

```

