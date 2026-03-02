# Partition Platform



## 关联的构造器

### Partition

**语法:** Partition( Y( column ), X( columns ) )

**说明:** 根据预测变量与响应值之间的关系通过对数据进行递归分割来构造决策树。响应和预测变量都可以为连续或分类数据。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 2 );

```

## 项消息

### Method

**语法:** Method( "Decision Tree" ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于分割数据的方法。“决策树”是默认方法。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ));obj << Split Best( 2 );

```

## Decision Tree

### 共享项消息

#### Action

**语法:** obj &lt;&lt; Action

**说明:** 平台内用于插入表达式以求值的所有用途的陷门。暂时将 DisplayBox 和 DataTable 上下文设置为平台。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Apply Preset

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

**说明:** 将以前创建的预设应用到对象，从而更新选项和定制以匹配保存的设置。

**JMP添加的版本:** 18

**匿名预设**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();dt2 = Open( "$SAMPLE_DATA/Dogs.jmp" );obj2 = dt2 << Oneway( Y( :LogHist0 ), X( :drug ) );Wait( 1 );obj2 << Apply Preset( preset );

```

**在文件夹内搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "t-Tests", Folder( "Compare Means" ) );

```

**按名称搜索**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ) );Wait( 1 );obj << Apply Preset( "Sample Presets", "Compare Distributions" );

```

#### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

**说明:** 将消息广播到平台。若各个对象的返回结果是表，则它们会尽可能拼接，并且最终格式与表框中“保存合并表”选项的结果或使用“源”列的“拼接”选项的结果相同。除此之外，结果存储在列表中并返回。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Quality Control/Diameter.jmp" );objs = Control Chart Builder(	Variables( Subgroup( :DAY ), Y( :DIAMETER ) ),	By( :OPERATOR ));objs[1] << Broadcast( Save Summaries );

```

#### Column Switcher

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

**说明:** 添加用于更改平台变量的控制面板

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});

```

#### Copy ByGroup Script

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Copy ByGroup Script;

```

#### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Copy Script;

```

#### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Data Table Window;

```

#### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv << Get By Levels;

```

#### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );t = obj[1] << Get ByGroup Script;Show( t );

```

#### Get Container

**语法:** obj &lt;&lt; Get Container

**说明:** 返回对保留对象内容的容器框的引用。

**带过滤器的平台**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );gb = Graph Builder(	Show Control Panel( 0 ),	Variables( X( :height ), Y( :weight ) ),	Elements( Points( X, Y, Legend( 1 ) ), Smoother( X, Y, Legend( 2 ) ) ),	Local Data Filter(		Add Filter(			columns( :age, :sex, :height ),			Where( :age == {12, 13, 14} ),			Where( :sex == "F" ),			Where( :height >= 55 ),			Display( :age, N Items( 6 ) )		)	));New Window( "platform boxes",	H List Box(		Outline Box( "Report(platform)", Report( gb ) << Get Picture ),		Outline Box( "platform << Get Container", (gb << Get Container) << Get Picture )	));

```

**常规**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Container;Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

#### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Datatable;Show( N Rows( t ) );

```

#### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

**说明:** 若该平台是组的一部分，则返回组平台对象。否则返回 Empty()。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Y( :weight ), X( :height ), By( :sex ) );group = biv[1] << Get Group Platform;Wait( 1 );group << Layout( "Arrange in Tabs" );

```

#### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Script;Show( t );

```

#### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Script With Data Table;Show( t );

```

#### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );t = obj << Get Timing;Show( t );

```

#### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );s = obj << Get Web Support();Show( s );

```

#### Get Where Expr

**语法:** obj &lt;&lt; Get Where Expr

**说明:** 若平台是使用 By() 或 Where() 启动的，则返回数据子集的 Where 表达式。否则返回 Empty()

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );biv2 = dt << Bivariate( X( :height ), Y( :weight ), Where( :age < 14 & :height > 60 ) );Show( biv[1] << Get Where Expr, biv2 << Get Where Expr );

```

#### Ignore Platform Preferences

**语法:** Ignore Platform Preferences( state=0|1 )

**说明:** 忽略平台首选项的当前设置。该消息在创建后发送至平台时将被忽略。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Bivariate(	Ignore Platform Preferences( 1 ),	Y( :height ),	X( :weight ),	Action( Distribution( Y( :height, :weight ), Histograms Only ) ));

```

#### Local Data Filter

**语法:** obj &lt;&lt; Local Data Filter

**说明:** 将数据过滤到特定的组或范围，但在该平台中是本地的

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));

```

#### New Preset

**语法:** obj = New Preset()

**说明:** 创建一个匿名预设，表示应用到对象的选项和定制。该对象可以传递给 Apply Preset 以将设置复制到相同类型的另一个对象。

**JMP添加的版本:** 18

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Oneway( Y( :height ), X( :sex ), t Test( 1 ) );preset = obj << New Preset();

```

#### Paste Local Data Filter

**语法:** obj &lt;&lt; Paste Local Data Filter

**说明:** 将剪贴板中的本地数据过滤器应用于当前报表。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );filter = dist << Local Data Filter(	Add Filter( columns( :Region ), Where( :Region == "MW" ) ));filter << Copy Local Data Filter;dist2 = Distribution( Continuous Distribution( Column( :Lead ) ) );Wait( 1 );dist2 << Paste Local Data Filter;

```

#### Redo Analysis

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Redo Analysis;

```

#### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Relaunch Analysis;

```

#### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

**说明:** 删除已添加至平台的最近使用的“列切换器”。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Contingency( Y( :size ), X( :marital status ) );ColumnSwitcherObject = obj << Column Switcher(	:marital status,	{:sex, :country, :marital status});Wait( 2 );obj << Remove Column Switcher;

```

#### Remove Local Data Filter

**语法:** obj &lt;&lt; Remove Local Data Filter

**说明:** 若已创建本地数据过滤器，这会将它删除并将平台恢复为直接使用数据表中的所有数据

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dist = dt << Distribution(	Nominal Distribution( Column( :country ) ),	Local Data Filter(		Add Filter( columns( :sex ), Where( :sex == "Female" ) ),		Mode( Show( 1 ), Include( 1 ) )	));Wait( 2 );dist << remove local data filter;

```

#### Report

**语法:** obj &lt;&lt; Report; Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Report View

**语法:** obj &lt;&lt; Report View( "完全"|"汇总" )

**说明:** 报表视图确定平台报表中可见的详细程度。Full 显示所有详细信息，而 Summary 仅显示根据平台确定的选定内容。对于定制行为，显示框支持 <<Set Summary Behavior 消息。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Report View( "Summary" );

```

#### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save ByGroup Script to Data Table;

```

#### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save ByGroup Script to Journal;

```

#### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save ByGroup Script to Script Window;

```

#### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script for All Objects;

```

#### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

#### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

#### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Journal;

```

#### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Report;

```

#### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Script to Script Window;

```

#### SendToByGroup

**语法:** SendToByGroup( {":Column == level"}, command );

**说明:** 发送平台命令或显示定制命令到“依据”组的每个水平。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	By( :Sex ),	SendToByGroup(		{:sex == "F"},		Continuous Distribution( Column( :weight ), Normal Quantile Plot( 1 ) )	),	SendToByGroup( {:sex == "M"}, Continuous Distribution( Column( :weight ) ) ));

```

#### SendToEmbeddedScriptable

**语法:** SendToEmbeddedScriptable( Dispatch( "Outline name", "Element name", command );

**说明:** SendToEmbeddedScriptable 恢复嵌入可脚本化对象的设置。

```jsl

dt = Open( "$SAMPLE_DATA/Reliability/Fan.jmp" );dt << Life Distribution(	Y( :Time ),	Censor( :Censor ),	Censor Code( 1 ),	<<Fit Weibull,	SendToEmbeddedScriptable(		Dispatch(			{"Statistics", "Parametric Estimate - Weibull", "Profilers", "Density Profiler"},			{1, Confidence Intervals( 0 ), Term Value( Time( 6000, Lock( 0 ), Show( 1 ) ) )}		)	));

```

#### SendToReport

**语法:** SendToReport( Dispatch( "Outline name", "Element name", Element type, command );

**说明:** 在 tandem 中将“发送到报表”与“调度”命令配合使用，以便定制报表的外观。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Nominal Distribution( Column( :age ) ),	Continuous Distribution( Column( :weight ) ),	SendToReport( Dispatch( "age", "Distrib Nom Hist", FrameBox, {Frame Size( 178, 318 )} ) ));

```

#### Sync to Data Table Changes

**语法:** obj &lt;&lt; Sync to Data Table Changes

**说明:** 与已进行的排除和数据的更改同步。

```jsl

dt = Open( "$SAMPLE_DATA/Cities.jmp" );dist = Distribution( Continuous Distribution( Column( :POP ) ) );Wait( 1 );dt << Delete Rows( dt << Get Rows Where( :Region == "W" ) );dist << Sync To Data Table Changes;

```

#### Title

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Title( "My Platform" );

```

#### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Top Report;t = r[Outline Box( 1 )] << Get Title;Show( t );

```

#### Transform Column

**语法:** obj = &lt;Platform&gt;(... Transform Column(&lt;name&gt;, Formula(&lt;expression&gt;), [Random Seed(&lt;n&gt;)], [Numeric|Character|Expression], [Continuous|Nominal|Ordinal|Unstructured Text], [column properties]) ...)

**说明:** 在对象（通常是平台）的本地上下文中创建变换列。变换列仅在平台的生命周期内是活动的。

**JMP添加的版本:** 16

<b>启动窗口项: 是</b>

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Distribution(	Transform Column( "age^2", Format( "Fixed Dec", 5, 0 ), Formula( :age * :age ) ),	Continuous Distribution( Column( :"age^2"n ) ));

```

#### View Web XML

**语法:** obj &lt;&lt; View Web XML

**说明:** 返回用于创建交互式 HTML 报表的 XML 代码。

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bivariate( Y( :Weight ), X( :Height ) );xml = obj << View Web XML;

```

#### Window View

**语法:** obj = Decision Tree(...Window View( "Visible"|"Invisible"|"Private" )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 设置要为报表创建的窗口类型。默认情况下将创建 Visible 报表窗口。Invisible 窗口将不显示在屏幕上，但可被函数（例如 Window()）发现。Private 窗口会响应大多数窗口消息，但不可发现并且必须通过报表对象处理

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << Bivariate( Window View( "Private" ), Y( :weight ), X( :height ), Fit Line );eqn = Report( biv )["Linear Fit", Text Edit Box( 1 )] << Get Text;biv << Close Window;New Window( "Bivariate Equation",	Outline Box( "Big Class Linear Fit", Text Box( eqn, <<Set Base Font( "Title" ) ) ));

```

### 关联的构造器

#### Decision Tree

**语法:** Partition(Y( column ), X( columns ), Method( "Decision Tree" ))

**说明:** 对数据进行递归分割以预测响应，也称为“分类与回归树”。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

### 列

#### By

**语法:** obj &lt;&lt; By( column(s) )

**说明:** 为指定列的每个水平执行单独的分析。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_bycol",	Character,	Nominal,	Set Values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] ));dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	By( :_bycol ),	Group Options( Return Group( 1 ) ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	By( :_bycol ),	Group Options( Return Group( 1 ) ));obj << Split Best( 2 );

```

#### Factor

**语法:** obj &lt;&lt; Factor( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Freq

**语法:** obj &lt;&lt; Freq( column )

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_freqcol", Numeric, Continuous, Set Each Value( Random Integer( 1, 5 ) ) );dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	Freq( :_freqcol ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	Freq( :_freqcol ));obj << Split Best( 2 );

```

#### Response

**语法:** obj &lt;&lt; Response( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Validation

**语法:** obj &lt;&lt; Validation( column )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Weight

**语法:** obj &lt;&lt; Weight( column )

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << New Column( "_weightcol", Numeric, Continuous, Set Each Value( Random Beta( 1, 1 ) ) );dt << Make Validation Column(	Training Set( .5 ),	Validation Set( .3 ),	Test Set( .2 ),	Weight( :_weightcol ),	Go);obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ),	Weight( :_weightcol ));obj << Split Best( 2 );

```

#### X

**语法:** obj &lt;&lt; X( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

#### Y

**语法:** obj &lt;&lt; Y( column(s) )

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );

```

### 项消息

#### Color Points

**语法:** obj &lt;&lt; Color Points

**说明:** 根据点的分类对其着色。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Color Points;

```

#### Column Contributions

**语法:** obj &lt;&lt; Column Contributions( state=0|1 )

**说明:** 显示或隐藏包含每个输入列及其对拟合相应贡献的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Column Contributions( 1 );

```

#### Decision Threshold

**语法:** obj &lt;&lt; Decision Threshold( state = 0|1, Set Probability Threshold( number ) )

**说明:** 显示或隐藏每个模型的拟合概率分布和预测值 - 实际值表。您可以更改概率阈值，以探索不同的阈值如何影响分类结果。

```jsl

dt = Open( "$Sample_Data/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ));obj << Split Best( 5 );obj << Show Tree( 0 );obj << Decision Threshold( 1 );

```

#### Get Average Absolute Error Test

**语法:** obj &lt;&lt; Get Average Absolute Error Test

**说明:** Devuelve el estadístico Desviación absoluta media para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Test;Show( aabs );

```

#### Get Average Absolute Error Training

**语法:** obj &lt;&lt; Get Average Absolute Error Training

**说明:** 返回训练集的绝对偏差的均值统计量。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Training;Show( aabs );

```

#### Get Average Absolute Error Validation

**语法:** obj &lt;&lt; Get Average Absolute Error Validation

**说明:** Devuelve el estadístico Desviación absoluta media para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));aabs = obj << Get Average Absolute Error Validation;Show( aabs );

```

#### Get Average Log Error Test

**语法:** obj &lt;&lt; Get Average Log Error Test

**说明:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);avg = obj << Get Average Log Error Test;Show( avg );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));avg = obj << Get Average Log Error Test;Show( avg );

```

#### Get Average Log Error Training

**语法:** obj &lt;&lt; Get Average Log Error Training

**说明:** 返回训练集的 -log(p) 均值，其中 p 等于模型归因的响应实际发生的概率。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));avg = obj << Get Average Log Error Training;Show( avg );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);avg = obj << Get Average Log Error Training;Show( avg );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));avg = obj << Get Average Log Error Training;Show( avg );

```

#### Get Average Log Error Validation

**语法:** obj &lt;&lt; Get Average Log Error Validation

**说明:** Devuelve la media de -log(p), donde p equivale a la probabilidad de respuesta atribuida por el modelo que la respuesta realmente se produjo, para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);avg = obj << Get Average Log Error Validation;Show( avg );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));avg = obj << Get Average Log Error Validation;Show( avg );

```

#### Get Confusion Matrix Test

**语法:** obj &lt;&lt; Get Confusion Matrix Test

**说明:** Devuelve la matriz de confusión para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Test;Show( cm );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Test;Show( cm );

```

#### Get Confusion Matrix Training

**语法:** obj &lt;&lt; Get Confusion Matrix Training

**说明:** 返回训练集的混淆矩阵。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Training;Show( cm );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Training;Show( cm );

```

#### Get Confusion Matrix Validation

**语法:** obj &lt;&lt; Get Confusion Matrix Validation

**说明:** Devuelve la matriz de confusión para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cm = obj << Get Confusion Matrix Validation;Show( cm );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cm = obj << Get Confusion Matrix Validation;Show( cm );

```

#### Get Confusion Rates Test

**语法:** obj &lt;&lt; Get Confusion Rates Test

**说明:** Devuelve las tasas de confusión para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Test;Show( cr );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));cr = obj << Get Confusion Rates Test;Show( cr );

```

#### Get Confusion Rates Training

**语法:** obj &lt;&lt; Get Confusion Rates Training

**说明:** 返回训练集的混淆率。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Training;Show( cr );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));cr = obj << Get Confusion Rates Training;Show( cr );

```

#### Get Confusion Rates Validation

**语法:** obj &lt;&lt; Get Confusion Rates Validation

**说明:** Devuelve las tasas de confusión para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Validation( :Validation ),	Go);cr = obj << Get Confusion Rates Validation;Show( cr );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));cr = obj << Get Confusion Rates Validation;Show( cr );

```

#### Get Gen RSquare Test

**语法:** obj &lt;&lt; Get Gen RSquare Test

**说明:** Devuelve el R cuadrado generalizado para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Test;Show( r );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));r = obj << Get Gen RSquare Test;Show( r );

```

#### Get Gen RSquare Training

**语法:** obj &lt;&lt; Get Gen RSquare Training

**说明:** 返回训练集的广义 R 方。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Training;Show( r );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));r = obj << Get Gen RSquare Training;Show( r );

```

#### Get Gen RSquare Validation

**语法:** obj &lt;&lt; Get Gen RSquare Validation

**说明:** Devuelve el R cuadrado generalizado para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :sex ),	X( :marital status, :age, :country, :type, :size ),	Validation( :Validation ),	Go);r = obj << Get Gen RSquare Validation;Show( r );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));r = obj << Get Gen RSquare Validation;Show( r );

```

#### Get MM SAS DATA Step

**语法:** obj &lt;&lt; Get MM SAS DATA Step

**说明:** 创建可在 SAS Model Manager 中注册的 SAS 代码，并将其返回到“日志”窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get MM SAS Data Step;

```

#### Get MM Tolerant SAS DATA Step

**语法:** obj &lt;&lt; Get MM Tolerant SAS DATA Step

**说明:** 为包含缺失值的数据创建可在 SAS Model Manager 中注册的 SAS 代码，并将其返回到日志窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get MM Tolerant SAS Data Step;

```

#### Get Measures

**语法:** obj &lt;&lt; Get Measures

**说明:** 从模型返回拟合测度汇总。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Get Measures;

```

#### Get Microseconds

**语法:** obj &lt;&lt; Get Microseconds

**说明:** 返回完成分析所用的毫秒数。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );time = obj << Get Microseconds;Show( time );

```

#### Get Misclassification Rate Test

**语法:** obj &lt;&lt; Get Misclassification Rate Test

**说明:** Devuelve la tasa de clasificación errónea para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);rate = obj << Get Misclassification Rate Test;Show( rate );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt << Make Validation Column(	Training Set( .6 ),	Validation Set( .2 ),	Test Set( .2 ),	New Column Name( "Valid1" ),	Go);obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Valid1 ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Test;Show( rate );

```

#### Get Misclassification Rate Training

**语法:** obj &lt;&lt; Get Misclassification Rate Training

**说明:** 返回训练集的误分类率。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Method( "Decision Tree" ));obj << Split Best( 2 );rate = obj << Get Misclassification Rate Training;Show( rate );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);rate = obj << Get Misclassification Rate Training;Show( rate );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Training;Show( rate );

```

#### Get Misclassification Rate Validation

**语法:** obj &lt;&lt; Get Misclassification Rate Validation

**说明:** Devuelve la tasa de clasificación errónea para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Method( "Decision Tree" ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << New Column( "Holdback1", formula( Random Integer( 1, 3 ) ) );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	validation( :Holdback1 ),	Go);rate = obj << Get Misclassification Rate Validation;Show( rate );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation( :Validation ),	Split Best( 2 ));rate = obj << Get Misclassification Rate Validation;Show( rate );

```

#### Get Precision Recall Area Test

**语法:** obj &lt;&lt; Get Precision Recall Area Test

**说明:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de pruebas. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Test;Show( area );

```

#### Get Precision Recall Area Training

**语法:** obj &lt;&lt; Get Precision Recall Area Training

**说明:** 返回训练集的精度-召回曲线下的面积。精度-召回曲线必须在计算面积之前显示。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << Precision Recall Curve;area = obj << Get Precision Recall Area Training;Show( area );

```

#### Get Precision Recall Area Validation

**语法:** obj &lt;&lt; Get Precision Recall Area Validation

**说明:** Devuelve el área situada debajo de la curva de Precisión-Recuerdo para el conjunto de validación. Debe mostrarse la curva de Precisión-Recuerdo antes de que se calcule el área. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << Precision Recall Curve;area = obj << Get Precision Recall Area Validation;Show( area );

```

#### Get Prediction Formula

**语法:** obj &lt;&lt; Get Prediction Formula

**说明:** 构造一个脚本，以便创建预测公式列并返回它。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Get Prediction Formula;

```

#### Get RMS Error Test

**语法:** obj &lt;&lt; Get RMS Error Test

**说明:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de prueba. Solo disponible al utilizar un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );rms = obj << Get RMS Error Test;Show( rms );

```

#### Get RMS Error Training

**语法:** obj &lt;&lt; Get RMS Error Training

**说明:** 返回训练误差的均方平方根。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );rms = obj << Get RMS Error Training;Show( rms );

```

#### Get RMS Error Validation

**语法:** obj &lt;&lt; Get RMS Error Validation

**说明:** Devuelve la raíz cuadrada de la media de los cuadrados de los errores de validación. Solo disponible al utilizar un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );rms = obj << Get RMS Error Validation;Show( rms );

```

#### Get ROC Area Test

**语法:** obj &lt;&lt; Get ROC Area Test

**说明:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente a los datos de la prueba. Es necesario mostrar la curva ROC antes de calcular el área. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );dt << Make Validation Column( Training Set( .6 ), Validation Set( .2 ), Test Set( .2 ), Go );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation( :Validation 2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Test;Show( area );

```

#### Get ROC Area Training

**语法:** obj &lt;&lt; Get ROC Area Training

**说明:** 返回训练数据集的受试者操作特征 (ROC) 曲线下的面积。首先需要显示 ROC 曲线，然后才会计算该面积。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 2 ));obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Go);obj << Show Tree( 0 );obj << ROC Curve;area = obj << Get ROC Area Training;Show( area );

```

#### Get ROC Area Validation

**语法:** obj &lt;&lt; Get ROC Area Validation

**说明:** Devuelve el área bajo la curva Característica operativa del receptor (ROC) correspondiente al conjunto de datos de validación. Es necesario mostrar la curva ROC antes de calcular el área. Solo disponible al utilizar un conjunto de validación.

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Method( "Decision Tree" ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Validation Portion( 0.2 ),	Go);obj << ROC Curve;area = obj << Get ROC Area Validation;Show( area );

```

#### Get RSquare Test

**语法:** obj &lt;&lt; Get RSquare Test

**说明:** Devuelve el R cuadrado para el conjunto de prueba. Solo disponible al utilizar un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Get RSquare Test;Show( r );

```

#### Get RSquare Training

**语法:** obj &lt;&lt; Get RSquare Training

**说明:** 返回训练集的 R 方。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Get RSquare Training;Show( r );

```

#### Get RSquare Validation

**语法:** obj &lt;&lt; Get RSquare Validation

**说明:** Devuelve el R cuadrado para el conjunto de validación. Solo disponible al utilizar un conjunto de validación.

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );r = obj << Get RSquare Validation;Show( r );

```

#### Get SAS DATA Step

**语法:** obj &lt;&lt; Get SAS DATA Step

**说明:** 创建 SAS DATA 步以便对数据评分，并将其返回到“日志”窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get SAS Data Step;

```

#### Get Seconds

**语法:** obj &lt;&lt; Get Seconds

**说明:** 返回完成分析所用的秒数。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );time = obj << Get Seconds;Show( time );

```

#### Get Tolerant Prediction Formula

**语法:** obj &lt;&lt; Get Tolerant Prediction Formula

**说明:** 构造一个脚本，以便创建容差预测公式列并将其返回至“日志”窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Get Tolerant Prediction Formula;

```

#### Get Tolerant SAS DATA Step

**语法:** obj &lt;&lt; Get Tolerant SAS DATA Step

**说明:** 创建 SAS DATA 步以便对包含缺失值的数据进行评分，并将其返回到“日志”窗口。缺失值被随机分配给树分支。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );code = obj << Get Tolerant SAS Data Step;

```

#### Go

**语法:** obj &lt;&lt; Go

**说明:** 在选择“K 折交叉验证”之后开始迭代。若使用 JMP Pro，则“Go”在指定“验证”列之后开始迭代。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << K Fold Crossvalidation( 5 );obj << Go;

```

#### Informative Missing

**语法:** obj = Decision Tree(...Informative Missing( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 对于分类变量，将缺失视为一个类别。对于连续变量，将缺失视为低或高（取拟合较优者）。 默认开启。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Partition( Y( :height ), X( :age ), Informative Missing( 0 ) );obj << Split Best( 1 );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:age[3] = .;obj = dt << Boosted Tree( Y( :height ), X( :age ), Informative Missing( 0 ), Go );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );dt:Age[3] = .;obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Informative Missing( 0 ),	Split Best( 3 ));

```

#### Initial Splits

**语法:** obj = Partition(...Initial Splits( condition, {left condition}, {right condition} )...)

**说明:** 描述执行的拆分。condition 参数指定第一个拆分的左侧。{left condition} 和 {right condition} 参数指定在各自一侧的拆分，并且该格式以递归方式继续执行所需的拆分数。要指定在右侧而不是左侧拆分，请将 left 参数分配为空列表。要指定在左侧而不是右侧拆分，请忽略 right 参数。

**示例 1**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Initial Splits( :size == {"Large"} ));

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Initial Splits( :size == {"Large"}, {}, {:size == {"Medium"}, {:age >= 25}} ));

```

**示例 3**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Initial Splits( :size == {"Large"}, {:type == {"Family", "Sporty"}} ));

```

#### K Fold Crossvalidation

**语法:** obj &lt;&lt; K Fold Crossvalidation

**说明:** 该功能已废弃。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Split Best( 2 ));obj << K Fold Crossvalidation( 5 );

```

#### Leaf Report

**语法:** obj &lt;&lt; Leaf Report( state=0|1 )

**说明:** 显示或隐藏具有均值和计数（连续响应）或叶节点响应率和计数（分类响应）的报表。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Tree( 0 );obj << Leaf Report( 1 );

```

#### Lift Curve

**语法:** obj &lt;&lt; Lift Curve( state=0|1 )

**说明:** 显示或隐藏“提升曲线”图。提升曲线绘制提升与观测对应部分的关系，并提供另一种方式来展示模型预测的能力。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << Lift Curve( 1 );

```

#### Lock Columns

**语法:** obj &lt;&lt; Lock Columns( state=0|1, columns )

**说明:** 锁定指定列以防止用于拆分。

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Lock Columns( 1, :age, :size );(obj << report)[CheckboxBox( 1 )] << Select;Wait( .5 );obj << Lock Columns( 0 );Wait( .5 );obj << Lock Columns( 1 );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Lock Columns( 1, :Age, :Hair Color );(obj << report)[CheckboxBox( 1 )] << Select;Wait( .5 );obj << Lock Columns( 0 );Wait( .5 );obj << Lock Columns( 1 );

```

#### Make SAS DATA Step

**语法:** obj &lt;&lt; Make SAS DATA Step

**说明:** 创建 SAS DATA 步以便对数据评分，并将其返回到脚本窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Make SAS Data Step;

```

#### Make Tolerant SAS DATA Step

**语法:** obj &lt;&lt; Make Tolerant SAS DATA Step

**说明:** 创建 SAS DATA 步以便对包含缺失值的数据进行评分，并将其返回到脚本窗口。缺失值被随机分配给树分支。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Make Tolerant SAS Data Step;

```

#### Method

**语法:** Method( "Decision Tree" ) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 指定用于分割数据的方法。“决策树”是默认方法。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ));obj << Split Best( 2 );

```

#### Minimum Size Split

**语法:** obj &lt;&lt; Minimum Size Split( number )

**说明:** 在确定是否拆分组时设置最小分组大小。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Minimum Size Split( 15 );obj << Split Best( 4 );

```

#### Missing Value Order

**语法:** Missing Value Order( Low(list of numeric columns),High(list of numeric columns))

**说明:** 指定将缺失值视为低还是高。

**JMP添加的版本:** 16

#### Multithreading

**语法:** Multithreading( state=0|1 )

**说明:** 在机器的可用线程间分配计算任务。 默认开启。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Split Best( 2 ));

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Multithreading( 1 ),	Go);

```

#### Ordinal Restricts Order

**语法:** obj = Decision Tree(...Ordinal Restricts Order( state=0|1 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 对于有序型列，仅考虑保留顺序的拆分。 默认开启。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Bootstrap Forest( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Partition( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ) );obj << Split Best( 3 );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );obj = dt << Boosted Tree( Y( :height ), X( :age ), Ordinal Restricts Order( 1 ), Go );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Ordinal Restricts Order( 1 ),	Split Best( 2 ));

```

#### Plot Actual by Predicted

**语法:** obj &lt;&lt; Plot Actual by Predicted( state=0|1 )

**说明:** 显示或隐藏使用训练数据的图，其中 X 轴标绘预测值，Y 轴标绘实际值。

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Split Best( 3 ));obj << Plot Actual By Predicted;

```

#### Precision Recall Curve

**语法:** obj &lt;&lt; Precision Recall Curve( state=0|1 )

**说明:** 显示或隐藏“精度-召回曲线”图，它包含响应变量每个水平的曲线。精度-召回曲线绘制不同阈值下的精度值和召回值。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << Precision Recall Curve( 1 );

```

#### Profiler

**语法:** obj &lt;&lt; Profiler( state=0|1 )

**说明:** 显示或隐藏预测刻画器，它用于通过从预测方程中一次分离出一个因子来图形化探索该预测方程。预测刻画器包含进行优化的特征。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Profiler( 1 );

```

#### Prune Worst

**语法:** obj &lt;&lt; Prune Worst

**说明:** 删除判别能力最低的末端拆分。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Prune Worst;Wait( .5 );obj << Prune Worst;

```

#### Publish Prediction Formula

**语法:** obj &lt;&lt; Publish Prediction Formula

**说明:** 创建预测公式并将它们保存为“公式存储库”平台中的公式列脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Publish Prediction Formula;

```

#### Publish Tolerant Prediction Formula

**语法:** obj &lt;&lt; Publish Tolerant Prediction Formula

**说明:** 生成即使有缺失值时仍能进行预测的预测公式，并将其发布为“公式存储库”中的公式列脚本。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Publish Tolerant Prediction Formula;

```

#### ROC Curve

**语法:** obj &lt;&lt; ROC Curve( state=0|1 )

**说明:** 显示或隐藏响应变量每个水平的“受试者操作特征”(ROC) 曲线。ROC 曲线是（1 - 特异度）-灵敏度图。若您使用了验证，则会为训练集、验证集和测试集分别显示一个图。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << ROC Curve( 1 );

```

#### Save Leaf Label Formula

**语法:** obj &lt;&lt; Save Leaf Label Formula

**说明:** 在数据表的新列中保存叶标签公式。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Label Formula;

```

#### Save Leaf Labels

**语法:** obj &lt;&lt; Save Leaf Labels

**说明:** 在数据表的新列中保存叶标签。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Labels;

```

#### Save Leaf Number Formula

**语法:** obj &lt;&lt; Save Leaf Number Formula

**说明:** 在数据表的新列中保存叶数公式。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Number Formula;

```

#### Save Leaf Numbers

**语法:** obj &lt;&lt; Save Leaf Numbers

**说明:** 在数据表的新列中保存叶数。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Leaf Numbers;

```

#### Save Predicteds

**语法:** obj &lt;&lt; Save Predicteds

**说明:** 在数据表的新列中保存预测值。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Predicteds;

```

#### Save Prediction Formula

**语法:** obj &lt;&lt; Save Prediction Formula

**说明:** 在数据表的新列中保存预测公式。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Prediction Formula;

```

#### Save Residuals

**语法:** obj &lt;&lt; Save Residuals

**说明:** 在数据表的新列中保存残差。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Residuals;

```

#### Save Tolerant Prediction Formula

**语法:** obj &lt;&lt; Save Tolerant Prediction Formula

**说明:** 保存公式，该公式在数据表中的新列有缺失值的情况下也进行预测。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Save Tolerant Prediction Formula;

```

#### Set Random Seed

**语法:** obj &lt;&lt; Set Random Seed( number )

**说明:** 指定一个随机种子，以便将来启动该平台时重现结果。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Bootstrap Forest(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Partition(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );obj = dt << Boosted Tree(	Y( :Y Binary ),	X( :Age, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Set Random Seed( 1234 ),	Go);

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Set Random Seed( 1234 ),	Split Best( 2 ));

```

#### Show Fit Details

**语法:** obj &lt;&lt; Show Fit Details( state=0|1 )

**说明:** 显示或隐藏报表，其中包含所有测量定义、误分类率以混淆矩阵。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Tree( 0 );obj << Show Fit Details( 1 );

```

#### Show Graph

**语法:** obj &lt;&lt; Show Graph( state=0|1 )

**说明:** 显示或隐藏分割图。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << ShowGraph( 0 );Wait( .5 );obj << ShowGraph( 1 );

```

#### Show Points

**语法:** obj &lt;&lt; Show Points( state=0|1 )

**说明:** 在分割图中显示点（1 或“显示”）还是显示颜色面板（0 或“隐藏”）。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << ShowPoints( 0 );Wait( .5 );obj << ShowPoints( 1 );

```

#### Show Split Bar

**语法:** obj &lt;&lt; Show Split Bar( state=0|1 )

**说明:** 显示或隐藏指出每个叶中的拆分比例的着色条。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Bar( 0 );Wait( .5 );obj << Show Split Bar( 1 );

```

#### Show Split Candidates

**语法:** obj &lt;&lt; Show Split Candidates( state=0|1 )

**说明:** 在末端拆分中显示或隐藏“候选项”报表。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Candidates( 1 );(obj << Report)["Candidates"] << Close( 0 ) << select;

```

#### Show Split Count

**语法:** obj &lt;&lt; Show Split Count( state=0|1 )

**说明:** 显示或隐藏每个树节点中每个水平的响应计数。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Count( 0 );Wait( .5 );obj << Show Split Count( 1 );

```

#### Show Split Prob

**语法:** obj &lt;&lt; Show Split Prob( state=0|1 )

**说明:** 显示或隐藏每个树节点中每个水平的响应率。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Prob( 0 );Wait( .5 );obj << Show Split Prob( 1 );

```

#### Show Split Stats

**语法:** obj &lt;&lt; Show Split Stats( state=0|1 )

**说明:** Muestra u oculta el conteo y los estadísticos de división. Los estadísticos mostrados incluyen el valor G² o la media y la desviación estándar. 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Show Split Stats( 0 );Wait( .5 );obj << Show Split Stats( 1 );

```

#### Show Tree

**语法:** obj &lt;&lt; Show Tree( state=0|1 )

**说明:** 显示或隐藏带分割信息的树状结构。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << ShowTree( 1 );

```

#### Small Tree View

**语法:** obj &lt;&lt; Small Tree View( state=0|1 )

**说明:** 在分割图的右侧显示或隐藏缩小版的分割树。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );obj << Small Tree View( 1 );

```

#### Sort Split Candidates

**语法:** obj &lt;&lt; Sort Split Candidates( state=0|1 )

**说明:** 按显著性对候选项进行排序。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );dt << Make Validation Column( Training Set( .5 ), Validation Set( .3 ), Test Set( .2 ), Go );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Method( "Decision Tree" ),	Validation( :Validation ));obj << Split Best( 2 );(obj << Report)["Candidates"] << Close( 0 ) << select;Wait( 1 );obj << Sort Split Candidates;

```

#### Specify Profit Matrix

**语法:** obj &lt;&lt; Specify Profit Matrix

**说明:** 使您能够指定与正确或错误的分类决策相关的利润或成本。

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :marital status ),	X( :sex, :age, :country, :type, :size ),	Split Best( 3 ),	Specify Profit Matrix( [0 -1, -1 0, . .], "Married", "Single", "Undecided" ),	Show Fit Details( 1 ));

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Split Best( 2 ),	Specify Profit Matrix( [0 -1, -1 0, . .], "Yes", "No", "Undecided" ),	Show Fit Details( 1 ));

```

#### Split Best

**语法:** obj &lt;&lt; Split Best( &lt;number of splits&gt; )

**说明:** 在最优拆分点拆分树。

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best;Wait( .5 );obj << Split Best( 2 );

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Split Best;Wait( 1 );obj << Split Best( 2 );

```

#### Split History

**语法:** obj &lt;&lt; Split History( state=0|1 )

**说明:** Muestra u oculta un gráfico que expone cada división del eje X y el valor R² correspondiente para el modelo en el eje Y.

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 5 );obj << Show Tree( 0 );obj << Split History;

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ));obj << Split Best( 2 );obj << Show Tree( 0 );obj << Split History;

```

#### Tree 3D

**语法:** obj &lt;&lt; Tree 3D( state=0|1 )

**说明:** 显示或隐藏树状结构的三维图。

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition( Y( :country ), X( :sex, :marital status, :age, :type, :size ) );obj << Split Best( 14 );obj << Show Tree( 0 );obj << Tree 3D( 1 );

```

#### Use Excluded Rows for Validation

**语法:** obj = Decision Tree(...Use Excluded Rows for Validation( state=0|1 )...)

**说明:** 使用数据表中的排除行创建验证集。只有在使用标准 JMP 并且有排除行时，该选项才会显示在启动窗口中。

**JMP添加的版本:** 15

<b>启动窗口项: 是</b>

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Bootstrap Forest(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Partition(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ));obj << Split Best( 5 );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Diabetes.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Boosted Tree(	Y( :Y ),	X( :Age, :Gender, :BMI, :BP, :Total Cholesterol, :LDL, :HDL, :TCH, :LTG, :Glucose ),	Use Excluded Rows for Validation( 1 ),	Go);

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );For Each( {i}, 10 :: 200 :: 10, Row State( i ) = Excluded State( 1 ) );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Use Excluded Rows for Validation( 1 ),	Split Best( 2 ));

```

#### Validation Portion

**语法:** obj = Decision Tree(...Validation Portion( fraction=0 )...) &lt;b&gt;启动窗口项: 是&lt;/b&gt;

**说明:** 通过随机选择行构成验证集，每行的选中概率为 p（小数）。 默认为“0”。

**Bootstrap 森林法示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Bootstrap Forest(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**分割示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Partition(	Y( :country ),	X( :sex, :marital status, :age, :type, :size ),	Validation Portion( 0.2 ));obj << Split Best( 2 );

```

**提升树示例**

```jsl

dt = Open( "$SAMPLE_DATA/Car Poll.jmp" );obj = dt << Boosted Tree(	Y( :marital status ),	X( :sex, :country, :age, :type, :size ),	Validation Portion( 0.2 ),	Go);

```

**提升示例**

```jsl

dt = Open( "$SAMPLE_DATA/Hair Care Product.jmp" );obj = dt << Uplift(	Y( :Purchase ),	X( :Gender, :Age, :Hair Color, :U.S. Region, :Residence ),	Treatment( :Promotion ),	Validation Portion( 0.2 ),	Go);

```

