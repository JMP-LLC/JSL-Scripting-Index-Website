# Contour Profiler



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

### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );
obj = dt << Contingency( Y( :size ), X( :marital status ) );
ColumnSwitcherObject = obj << Column Switcher(
	:marital status,
	{:sex, :country, :marital status}
);

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
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

### Local Data Filter

**语法:** obj &lt;&lt; Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

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

### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

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

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Relaunch Analysis;

```

### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

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

**语法:** obj &lt;&lt; Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

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

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Oneway( Y( :Height ), X( :Age ) );
obj << Render Preset( Expr( Oneway( Y( :A ), X( :B ), Each Pair( 1 ) ) ) );

```

### Report

**语法:** obj &lt;&lt; Report;Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Report View( "Summary" );

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

#### 示例 1

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

#### 示例 2

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
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

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
r = obj << Top Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

## 关联的构造器

### Contour Profiler

**语法:** Contour Profiler( Y( column1, column2, ... ) )

**说明:** 生成交互式等高线图，使您能够探索一个或多个预测响应如何在因子对之间变化。在图中未使用的因子的值可以改变，以进一步探索因子设置对预测响应的影响。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

## 列

### Noise Factors

**语法:** obj = Contour Profiler(...&lt;Noise Factors( column(s) )&gt;...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定噪声因子，这些噪声因子必须是作为公式列成分的列。噪声因子用于研究与这些因子的传递变异相关的稳健性（或平稳性）。生成的刻画器包括公式对噪声因子的导数。

#### 刻画器示例

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

#### 定制刻画器示例

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Custom Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Noise Factors( :SILANE )
);

```

#### 混料刻画器示例

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Mixture Profiler( Y( :Pred Formula Y ), Noise Factors( :p1 ) );

```

#### 等高线刻画器示例

```jsl

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

**语法:** obj = Contour Profiler(...Prediction Formula( column(s) )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含公式的响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

### Y

**语法:** obj = Contour Profiler(...Y( column(s) )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定包含公式的响应列。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);

```

## 项消息

### Animation

**语法:** obj &lt;&lt; Animation( &lt;Tour Type( "Sequential"|("Single Factor",factorname)|"Random"|"Data Sequential"|"Data Random" )&gt;, &lt;Speed(ticks)&gt;, &lt;Go&gt;, &lt;Stop&gt; )

**说明:** 启动或停止刻画器的动画。您还可以指定动画如何在因子组合中循环。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Animation( Tour Type( "Sequential" ), Go );
Wait( 3 );
obj << Animation( "Stop" );

```

### Append Settings to Table

**语法:** obj &lt;&lt; Append Settings to Table

**说明:** 将当前刻画器的设置作为新行保存至数据表的结尾。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Append Settings to Table;

```

### Arrange X Controls Left

**语法:** obj &lt;&lt; Arrange X Controls Left( state=0|1 )

**说明:** 按照水平方向重新排列 X 和 Y 控件，使 X 控件位于左侧。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Arrange X Controls Left( 1 );

```

### Broadcast Factor Settings

**语法:** obj &lt;&lt; Broadcast Factor Settings

**说明:** 将当前刻画器的因子设置发送至所有其他刻画器。该选项不链接刻画器。

**JMP添加的版本:** 14

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Desirability Functions( 1 ),
	Term Value(
		SILICA( 1.75, Lock( 0 ), Show( 1 ) ),
		SILANE( 45.2, Lock( 0 ), Show( 1 ) ),
		SULFUR( 2.45, Lock( 0 ), Show( 1 ) )
	)
);
obj << Contour Profiler( 1 );
Wait( 1 );
obj << Broadcast Factor Settings;

```

### Clipping

**语法:** obj &lt;&lt; Clipping( horizCenter,horizWidth,verticalCenter,VerticalWidth )

**说明:** 设置一个剪切区域，该区域对于晶圆图是圆形的。

```jsl

dt = Open( "$Sample_Data/Wafer Stacked.jmp" );
Neural(
	Y( :Defects ),
	X( :X_Die, :Y_Die ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit(
		NGaussian( 9 ),
		Contour Profiler(
			1,
			Term Value(
				:X_Die( 0, Lock( 0 ), Show( 1 ) ), :Y_Die( 0, Lock( 0 ), Show( 1 ) )
			),
			Contour Value( :Defects( 0.1309, Min( -0.28 ), Max( 7.28 ) ) ),
			Grid Density( "40 x 40" ),
			Contour Grid( 0, 0.275, 0.025, :Defects, Filled( 1 ), Reverse Scale( 0 ) ),
			Horizontal Factor( :X_Die ),
			Vertical Factor( :Y_Die ),
			Clipping( {0, 0}, {42, 42} )
		)
	),
	SendToReport(
		Dispatch( {"Model NGaussian(9)", "Contour Profiler"}, "Contour Profiler Frame",
			FrameBox,
			{Frame Size( 400, 400 )}
		)
	)
);

```

### Conditional Predictions

**语法:** scrobj &lt;&lt; Conditional Predictions( state=0|1 )

**说明:** 在使用公式表示预测值和刻画时，包括随机效应。仅当模型中包含随机效应时该选项才可用。

```jsl

dt = Open( "$Sample_Data/Reactor.jmp" );
Column( "A" ) << Set Modeling Type( "Nominal" );
obj = dt << Fit Model(
	Y( :Y ),
	Effects( :Ct, :T, :Cn, :Ct * :T, :T * :Cn ),
	Random Effects( :A ),
	Emphasis( "Minimal Report" ),
	Run( Contour Profiler( 1 ) )
);
scrobj = (Report( obj )["Contour Profiler"] << get scriptable object);
scrobj << Conditional Predictions( 1 );

```

### Contour Grid

**语法:** obj &lt;&lt; Contour Grid( minimum, maximum, increment, y column, Filled( state=0|1 ), Reverse Scale( state=0|1 ) )

**说明:** 在等高线刻画器上绘制等高线网格。网格基于指定的间隔。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Contour Grid( 525.7492294, 2173.9472704279, 206.024755128638, :PredFormulaMODULUS );

```

### Contour Label

**语法:** obj &lt;&lt; Contour Label( state=0|1 )

**说明:** 在等高线刻画器上显示或隐藏作为标签的响应变量的名称。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Contour Label( 0 );

```

### Contour Value

**语法:** obj &lt;&lt; Contour Value( y1( number, &lt;Lo Limit( number )&gt;, &lt;Hi Limit( number )&gt;, &lt;Min( number )&gt;, &lt;Max( number )&gt;), y2 (...) )

**说明:** 设置等高线刻画器中响应的特定等高线值。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Contour Value(
	:PredFormulaAbrasion( 167, Lo Limit( 160 ), Hi Limit( 180 ) ), :Pred Formula Elong( 320 )
);

```

### Copy Settings Script

**语法:** obj &lt;&lt; Copy Settings Script

**说明:** 将当前因子设置复制到剪贴板。然后可以将该设置粘贴到另一个刻画器。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Custom Profiler

**语法:** obj &lt;&lt; Custom Profiler( state=0|1 )

**说明:** 显示或隐藏“定制刻画器”。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Custom Profiler( 1 );

```

### Data Points

**语法:** obj &lt;&lt; Data Points( state=0|1 )

**说明:** 显示或隐藏数据点。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Data Points( 1 );

```

### Formulas for OPTMODEL

**语法:** obj &lt;&lt; Formulas for OPTMODEL

**说明:** 将模型的预测公式保存到新文件中作为 PROC OPTMODEL 的 SAS 语句。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Formulas for OPTMODEL;

```

### Get Constraints

**语法:** obj &lt;&lt; Get Constraints

**说明:** 返回因子约束列表。

```jsl

dt = Open( "$SAMPLE_DATA/Plasticizer.jmp" );
obj = dt << Profiler(
	Y( :Pred Formula Y ),
	Profiler( 1, Profile at Boundary( "Stop at Boundaries" ), )
);
obj << Get Constraints;

```

### Get Factor Settings

**语法:** obj &lt;&lt; Get Factor Settings

**说明:** 以列表形式返回当前因子设置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Get Factor Settings;

```

### Get Factor Settings Script

**语法:** obj &lt;&lt; Get Factor Settings Script

**说明:** 将当前因子设置作为可以在脚本中使用的表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Get Factor Settings Script;

```

### Get Simulator

**语法:** obj &lt;&lt; Get Simulator

**说明:** 返回对模拟器的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator(
	1,
	Factors(
		SILICA << Random( Normal( 1.25, 0.3266 ) ), SILANE << Fixed( 50 ),
		SULFUR << Fixed( 2.25 )
	),
	Responses(
		Pred Formula ABRASION << No Noise, Pred Formula MODULUS << No Noise,
		Pred Formula ELONG << Add Random Noise( 1 ),
		Pred Formula HARDNESS << Add Random Weighted Noise( 1 )
	)
);
obj2 = obj << Get Simulator;
obj2 << Simulation Experiment;

```

### Graph Updating

**语法:** obj &lt;&lt; Graph Updating( "每次移动鼠标"|"每次释放鼠标" )

**说明:** 设置更新“等高线刻画器”的频率。Per Mouse Move 设置在鼠标移动时更新图形。Per Mouse Up 设置在释放鼠标按钮之后更新图形。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Graph Updating( "Per Mouse Up" );
// use your mouse to move the slider scale for a response

```

### Grid Density

**语法:** obj &lt;&lt; Grid Density( "10 x 10"|"20 x 20"|"30 x 30"|"40 x 40"|"50 x 50"|"60 x 60" )

**说明:** 设置各个网线图或曲面图的密度。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Grid Density( "10 x 10" );

```

### Hide X Controls

**语法:** obj &lt;&lt; Hide X Controls( state=0|1 )

**说明:** 显示或隐藏因子的控件设置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Hide X Controls( 1 );

```

### Hide Y Controls

**语法:** obj &lt;&lt; Hide Y Controls( state=0|1 )

**说明:** 显示或隐藏响应的控件设置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Hide Y Controls( 1 );

```

### Horizontal Factor

**语法:** obj &lt;&lt; Horizontal Factor( column )

**说明:** 指定水平轴上显示的因子。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Horizontal Factor( :SULFUR );

```

### Link Profilers

**语法:** obj &lt;&lt; Link Profilers( state=0|1 )

**说明:** 将单个报表中的所有刻画器关联在一起，以便一个刻画器中的因子更改时，所有其他刻画器中的该因子也进行相应更改。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Prediction Profiler( 1 );
obj << Contour Profiler( 1 );
obj << Link Profilers( 1 );
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Multiple Contour Frames

**语法:** obj &lt;&lt; Multiple Contour Frames( Horizontal Factor( column ), Vertical Factor( column ), &lt;Remove Previous Frames&gt; )

**说明:** 添加另一个表示指定因子组合的等高线图。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Multiple Contour Frames( Horizontal Factor( :SULFUR ), Vertical Factor( :SILANE ) );

```

### Number of Plots Across

**语法:** obj &lt;&lt; Number of Plots Across( number )

**说明:** 指定报表中显示多个等高线框架时图的布局。

**JMP添加的版本:** 15

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Multiple Contour Frames( Horizontal Factor( :Sulfur ), Vertical Factor( :Silane ) );
obj << Multiple Contour Frames( Horizontal Factor( :Silane ), Vertical Factor( :Silica ) );
obj << Number of Plots Across( 2 );

```

### Paste Settings Script

**语法:** obj &lt;&lt; Paste Settings Script

**说明:** 将剪贴板中的刻画器设置粘贴到另一个报表中的刻画器。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set to Data in Row( 4 );
obj << Copy Settings Script;
obj2 = Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj2 << Paste Settings Script;

```

### Predict for Another Table

**语法:** obj &lt;&lt; Predict for Another Table( &lt;data table&gt; )

**说明:** 使用指定数据表中的因子将预测列添加到该表中。该选项仅适用于连续响应。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
dt2 = dt << Subset(
	All rows,
	columns( :SILICA, :SILANE, :SULFUR ),
	Output Table( "Subset" )
);
obj << Predict For Another Table( dt2 );

```

### Prediction Profiler

**语法:** obj &lt;&lt; Prediction Profiler( state=0|1 )

**说明:** 显示或隐藏“预测刻画器”。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Prediction Profiler( 1 );

```

### Remember Settings

**语法:** obj &lt;&lt; Remember Settings

**说明:** 将分级显示节点添加至包含因子设置值的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Remember Settings;

```

### Remove Contour Grid

**语法:** obj &lt;&lt; Remove Contour Grid

**说明:** 删除叠加在等高线刻画器上的等高线网格。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Contour Grid( 525.7492294, 2173.9472704279, 206.024755128638, :PredFormulaMODULUS );
Wait( 2 );
obj << Remove Contour Grid;

```

### Reset

**语法:** obj &lt;&lt; Reset

**说明:** 更新当前值处的预测。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );
obj << Reset;

```

### Save Expanded Formulas

**语法:** obj &lt;&lt; Save Expanded Formulas

**说明:** 将新公式列保存至数据表。新列包含用作 Y 变量的公式中的已解析公式引用，以查看底层变量。仅在启动窗口中选择“展开中间公式”选项或在“刻画器”脚本中指定 Expand 消息后才可用。

```jsl

dt = Open( "$SAMPLE_DATA/Nonlinear Examples/CES Production Function.jmp" );
obj = dt << Profiler( Y( :GP Fit, :NL Fit, :Difference ), Expand, Contour Profiler( 1 ) );
obj << Save Expanded Formulas;

```

### Set Contours to Current

**语法:** obj &lt;&lt; Set Contours to Current

**说明:** 将等高线重置为当前 Y 值所在的位置。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Contour Value(
	:PredFormulaAbrasion( 167, Lo Limit( 160 ), Hi Limit( 180 ) ), :Pred Formula Elong( 320 )
);
Wait( 1 );
obj << Set Contours to Current;

```

### Set Script

**语法:** obj &lt;&lt; Set Script( Function( {arguments}, &lt;{locals}&gt;, expr ) )

**说明:** 设置每次因子更改时运行的脚本。

```jsl

ProfileCallbackLog = Function( {arg}, Show( arg ) );
dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Set Script( ProfileCallbackLog );
obj << Term Value( :Silica( 1 ) );

```

### Set to Data in Row

**语法:** obj &lt;&lt; Set to Data in Row( row number )

**说明:** 将数据表行的值分配到刻画器中的 X 变量。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Set to Data in Row( 4 );

```

### Show Formulas

**语法:** obj &lt;&lt; Show Formulas

**说明:** 打开脚本窗口，它包含正在刻画的所有公式的 JSL。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Show Formulas;

```

### Simulator

**语法:** obj &lt;&lt; Simulator( state=0|1 )

**说明:** 显示或隐藏模拟器。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Simulator( 1 );

```

### Surface Plot

**语法:** obj &lt;&lt; Surface Plot( state=0|1 )

**说明:** 显示或隐藏各个网格图。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Surface Plot( 1 );

```

### Surface Profiler

**语法:** obj &lt;&lt; Surface Profiler( state=0|1 )

**说明:** 显示或隐藏“曲面刻画器”。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Surface Profiler( 1 );

```

### Term Value

**语法:** obj &lt;&lt; Term Value( (x1( number ),x2( number ), ... )

**说明:** 设置等高线刻画器上因子的特定项值。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Term Value( :Silica( 1.78 ), :Sulfur( 2.34 ) );

```

### Unthreaded

**语法:** obj &lt;&lt; Unthreaded( state=0|1 )

**说明:** To suppress any multithreading in evaluating the profile traces, the contour grid, and the optimizer trips.

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
obj << Desirability Functions( 1 );
obj << Unthreaded( 1 );
obj << Maximize Desirability;

```

### Up Dots

**语法:** obj &lt;&lt; Up Dots( state=0|1 )

**说明:** 显示或隐藏等高线旁边的点。这些点指示响应的向上方向。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 1 );
obj << Up Dots( 0 );

```

### Vertical Factor

**语法:** obj &lt;&lt; Vertical Factor( column )

**说明:** 指定垂直轴上显示的因子。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	)
);
Wait( 2 );
obj << Vertical Factor( :SULFUR );

```

### Y Colors

**语法:** obj &lt;&lt; Y Colors( color1, color2, ... )

**说明:** 指定等高线图和单个网格图中每个 Y 项的颜色。

```jsl

dt = Open( "$SAMPLE_DATA/Tiretread.jmp" );
obj = dt << Contour Profiler(
	Y(
		:Pred Formula ABRASION, :Pred Formula MODULUS, :Pred Formula ELONG,
		:Pred Formula HARDNESS
	),
	Surface Plot( 1 )
);
obj << Y Colors( 8, 4, 5, 46 );

```

