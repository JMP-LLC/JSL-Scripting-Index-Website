# Marker Simulation



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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
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
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Copy Script;

```

### Data Table Window

**语法:** obj << Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
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
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj << Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj << Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
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

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
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

**语法:** obj = Marker Simulation(...Window View( "Visible"|"Invisible"|"Private" )...)

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

### Marker Simulation

**语法:** Marker Simulation( Marker( columns ), Predictor Formula( columns ) )

**说明:** 模拟亲本杂交的标记基因型，并计算繁殖性能的相关测度。

**JMP添加的版本:** 17

**示例 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

## 列

### By

**语法:** obj << By( column(s) )

**说明:** 对于指定列的每个水平，在单独的表和报表中分析和显示结果。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

	//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

	//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4
	),
	Cross( :Sex ),
	By( :Disease Status ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 )
);

```

### Cross

**语法:** obj << Cross( column(s) )

**说明:** 指定将样本分组到区组的列。随后在不同组的样本之间进行杂交。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

	//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

	//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Marker

**语法:** obj << Marker( column(s) )

**说明:** 指定包含遗传标记的列。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Predictor Formula

**语法:** obj << Predictor Formula( column(s) )

**说明:** 指定包含响应或性状的预测公式的列。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Sample ID

**语法:** obj << Sample ID( column )

**说明:** 指定包含每个样本的唯一标识符的列。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

	//Set up ID Column
dt << New Column( "SampleID",
	Character,
	"Nominal",
	Formula( Char( :Pedigree ) || Char( :Sample ) )
);

	//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

	//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Sample ID( :SampleID ),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

## 项消息

### Estimate Diversity

**语法:** obj = Marker Simulation(...Estimate Diversity( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 估计模拟个体的遗传多样性。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set up thresholds for progeny selection via Spec Limits
dt:Name( "Pred Formula Trait1" ) << Set Property( "Spec Limits", {LSL( 22.5 )} );
dt:Name( "Pred Formula Trait2" ) << Set Property( "Spec Limits", {USL( 25.5 )} );
dt:Name( "Probability( Disease Status=1 )" ) << Set Property( "Spec Limits", {USL( 0.3 )} );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Estimate Diversity( 1 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),

);

```

### Imputation Value

**语法:** obj = Marker Simulation(...Imputation Value( number=0 )...)

<b>启动窗口项: 是</b>

**说明:** 指定从 0 到倍性的一个整数，用于替换缺失标记得分。 默认为“0”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set up thresholds for progeny selection via Spec Limits
dt:Name( "Pred Formula Trait1" ) << Set Property( "Spec Limits", {LSL( 22.5 )} );
dt:Name( "Pred Formula Trait2" ) << Set Property( "Spec Limits", {USL( 25.5 )} );
dt:Name( "Probability( Disease Status=1 )" ) << Set Property( "Spec Limits", {USL( 0.3 )} );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 1 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	Missing Marker Imputation Method( "Specified" ),
	Imputation Value( 0 )
);

```

### Missing Marker Imputation Method

**语法:** obj = Marker Simulation(...Missing Marker Imputation Method( "HWE 关闭"|"HWE 打开"|"随机"|"指定"="HWE 关闭" )...)

<b>启动窗口项: 是</b>

**说明:** 指定四种缺失标记插补方法中的一种。 默认为“HWE 关闭”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set up thresholds for progeny selection via Spec Limits
dt:Name( "Pred Formula Trait1" ) << Set Property( "Spec Limits", {LSL( 22.5 )} );
dt:Name( "Pred Formula Trait2" ) << Set Property( "Spec Limits", {USL( 25.5 )} );
dt:Name( "Probability( Disease Status=1 )" ) << Set Property( "Spec Limits", {USL( 0.3 )} );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	Missing Marker Imputation Method( "Random" )
);

```

### Number of Generations

**语法:** obj = Marker Simulation(...Number of Generations( number=1 )...)

<b>启动窗口项: 是</b>

**说明:** 指定杂交和选择过程要经历的世代数。 默认为“1”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Number of Individuals per Cross

**语法:** obj = Marker Simulation(...Number of Individuals per Cross( number=5 )...)

<b>启动窗口项: 是</b>

**说明:** 指定每次杂交要模拟的个体数。 默认为“5”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Number of Selected Crosses

**语法:** obj = Marker Simulation(...Number of Selected Crosses( number=0 )...)

<b>启动窗口项: 是</b>

**说明:** 指定每代要选择的最大族系数。 默认为“0”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Select Best Individuals( 1 ),
	Number of Selected Individuals( 2 ),
	Number of Selected Crosses( 5 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Number of Selected Individuals

**语法:** obj = Marker Simulation(...Number of Selected Individuals( number=0 )...)

<b>启动窗口项: 是</b>

**说明:** 指定每个家系要选择的最大个体数。 默认为“0”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Select Best Individuals( 1 ),
	Number of Selected Individuals( 2 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Ploidy

**语法:** obj = Marker Simulation(...Ploidy( number=2 )...)

<b>启动窗口项: 是</b>

**说明:** 指定指示倍性水平的偶数。 默认为“2”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Save Simulated Table

**语法:** obj << Save Simulated Table

**说明:** 将模拟基因型保存至新数据表。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 2000 ),
	Show Evaluation Plot( 0 ),
	Show Diversity Plot( 0 )
);

// Close Data Table: Full Simulated Table
Close( Data Table( "Full Simulated Table" ), NoSave );

// Create Full Simulated Table
Show( obj << Save Simulated Table );

```

### Select Best Individuals

**语法:** obj = Marker Simulation(...Select Best Individuals( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 选择满足“预测变量公式”的“规格限”列属性中指定的所有准则的最佳个体。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Set up thresholds for progeny selection via Spec Limits
dt:Name( "Pred Formula Trait1" ) << Set Property( "Spec Limits", {LSL( 22.5 )} );
dt:Name( "Pred Formula Trait2" ) << Set Property( "Spec Limits", {USL( 25.5 )} );
dt:Name( "Probability( Disease Status=1 )" ) << Set Property( "Spec Limits", {USL( 0.3 )} );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Select Best Individuals( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Set Random Seed

**语法:** obj = Marker Simulation(...Set Random Seed( number=0 )...)

<b>启动窗口项: 是</b>

**说明:** 将随机种子设置为特定值，以确保使用相同种子的所有后续试验都是可再现的。 默认为“0”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Show Diversity Plot

**语法:** obj << Show Diversity Plot( state=1 )

**说明:** 显示或隐藏遗传多样性的图。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 2000 ),
	Estimate Diversity( 1 ),
	Show Diversity Plot( 1 )
);

```

**示例 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 2000 ),
	Estimate Diversity( 1 ),
	Show Diversity Plot( 0 )
);
obj << Show Diversity Plot( 1 );

```

### Show Evaluation Plot

**语法:** obj << Show Evaluation Plot( state=1 )

**说明:** 显示或隐藏遗传统计量的图。 默认开启。

**示例 1**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 2000 ),
	Show Evaluation Plot( 1 ),

);

```

**示例 2**

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
obj = dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 2000 ),
	Show Evaluation Plot( 0 ),

);
obj << Show Evaluation Plot( 1 );

```

### Threshold to Make Line Plots

**语法:** obj = Marker Simulation(...Threshold to Make Line Plots( number=500 )...)

<b>启动窗口项: 是</b>

**说明:** 指定要在报表中绘制线图的最大杂交数。当总杂交数小于该阈值时绘制线图。 默认为“500”。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Unthreaded

**语法:** obj = Marker Simulation(...Unthreaded( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 仅使用主线程进行计算

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

### Use Annotation Table

**语法:** obj = Marker Simulation(...Use Annotation Table( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 使用包含标记注解组和位置的注解表。

```jsl

Names Default To Here( 1 );

dtAnno = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree Anno.jmp" );
dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 ),
	Use Annotation Table(
		1,
		dtAnno,
		Marker Variables( :Marker ),
		Annotation Group( :Gene ),
		Annotation Position( :Linkage Position ),
		Go
	)
);

```

### Use Only Markers Found in Predictor Formula

**语法:** obj = Marker Simulation(...Use Only Markers Found in Predictor Formula( state=0|1 )...)

<b>启动窗口项: 是</b>

**说明:** 模拟仅在预测变量公式中找到的那些标记。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Life Sciences/Genotypes Pedigree.jmp" );

//Hide and Exclude Rows
dt << Clear Select << Clear Row States;
dt << Select Where( :Father == 0 & :Mother == 0 & Row() <= 100 );
dt << Invert Row Selection << Exclude;
dt << Clear Select;

//Run platform
dt << Marker Simulation(
	Marker( Column Group( "Markers" ) ),
	Predictor Formula(
		:Pred Formula Trait1, :Pred Formula Trait2, :Pred Formula Trait3,
		:Pred Formula Trait4, :"Probability( Disease Status=1 )"n
	),
	Cross( :Sex ),
	Use Only Markers Found in Predictor Formula( 1 ),
	Unthreaded( 1 ),
	Ploidy( 2 ),
	Number of Generations( 2 ),
	Number of Individuals per Cross( 10 ),
	Set Random Seed( 12345 ),
	Threshold to Make Line Plots( 1000 )
);

```

