# Torch Deep Learning



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

### Copy ByGroup Script

**语法:** obj << Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Copy Script;

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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( <name>, < <<Append Suffix(0|1)>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj << Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj << Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
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

### Torch Deep Learning

**语法:** Torch Deep Learning(Y( columns ), X( columns ))

**说明:** Interface to predictive modeling via the Torch Deep Learning add-in

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## 列

### Censor

**语法:** obj << Censor( column )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Freq

**语法:** obj << Freq( column )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Inputs

**语法:** obj << Inputs( column(s) )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Responses

**语法:** obj << Responses( column(s) )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Subject

**语法:** obj << Subject( column )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Validation

**语法:** obj << Validation( column(s) )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Weight

**语法:** obj << Weight( column )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### X

**语法:** obj << X( column(s) )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Y

**语法:** obj << Y( column(s) )

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

## 项消息

### Change Variables

**语法:** obj << Change Variables

**说明:** Changes X, Y, and other variables for subsequent models.

**JMP添加的版本:** 18

### Compare

**语法:** obj << Compare

**说明:** Updates the Torch Deep Learning comparison metrics.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Compare( AUC( 1 ) );

```

### Fit

**语法:** obj << Fit

**说明:** Fits a Torch Deep Learning model. You can specify parameters and fitting specifications within this command.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );

```

### Get Measures

**语法:** obj << Get Measures

**JMP添加的版本:** 18

### Redo Analysis

**语法:** obj << Redo Analysis

**说明:** Rerun this same analysis in a new window. The analysis will be different if the data has changed.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Redo Analysis;

```

### Relaunch Analysis

**语法:** obj << Relaunch Analysis

**说明:** Return to the launcher for this analysis.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Fit );
obj << Relaunch Analysis;

```

### Set

**语法:** obj << Set

**说明:** Specifies parameters for a Torch Deep Learning model.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Torch Deep Learning( Y( :sex ), X( :picture ), Set( Epochs( 5 ) ) );

```

### Show Details

**语法:** obj << Show Details( state=0|1 )

**说明:** Shows more details.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Show Details( 1 ) );

```

## Torch Deep Learning Compare

### 关联的构造器

#### Torch Deep Learning Compare

**语法:** Torch Deep Learning Compare

### 项消息

#### AUC

**语法:** obj << AUC( state=0|1 )

**说明:** Shows or hides the AUROC, which is the area under the receiver operating characteristic curve. 默认开启。

**JMP添加的版本:** 18

#### Accuracy

**语法:** obj << Accuracy( state=0|1 )

**说明:** Shows or hides the accuracy, which is the proportion of correct classifications. 默认开启。

**JMP添加的版本:** 18

#### Censor

**语法:** obj << Censor( state=0|1 )

**说明:** Shows or hides the Censor command 默认开启。

**JMP添加的版本:** 18

#### Concordance

**语法:** obj << Concordance( state=0|1 )

**说明:** Shows or hides the concordance, which is the Harrell C-Index and measures strength of sorting efficiency 默认开启。

**JMP添加的版本:** 18

#### Correlation

**语法:** obj << Correlation( state=0|1 )

**说明:** Shows or hides the Pearson correlation, which is a measure of the strength of the linear relationship. 默认开启。

**JMP添加的版本:** 18

#### F1

**语法:** obj << F1( state=0|1 )

**说明:** Shows or hides the F1 Score, which is the harmonic average of precision and recall. 默认开启。

**JMP添加的版本:** 18

#### Freq

**语法:** obj << Freq( state=0|1 )

**说明:** Shows or hides the Freq column. 默认开启。

**JMP添加的版本:** 18

#### H Measure

**语法:** obj << H Measure( state=0|1 )

**说明:** Shows or hides the H Measure, which measures proportion improvement over baseline. 默认开启。

**JMP添加的版本:** 18

#### Hide All Models

**语法:** obj << Hide All Models

**说明:** Hides all models.

**JMP添加的版本:** 18

#### LogLoss

**语法:** obj << LogLoss( state=0|1 )

**说明:** Shows or hides the logarithm of the likelihood-based loss function. 默认开启。

**JMP添加的版本:** 18

#### MAE

**语法:** obj << MAE( state=0|1 )

**说明:** Shows or hides the MAE, which is the mean absolute error. 默认开启。

**JMP添加的版本:** 18

#### MCC

**语法:** obj << MCC( state=0|1 )

**说明:** Shows or hides the Matthews correlation coefficient, which is the Pearson correlation for binary variables. 默认开启。

**JMP添加的版本:** 18

#### Misclass

**语法:** obj << Misclass( state=0|1 )

**说明:** Shows or hides the misclassification rate, which is the proportion of incorrect classifications. 默认开启。

**JMP添加的版本:** 18

#### Precision Recall AUC

**语法:** obj << Precision Recall AUC( state=0|1 )

**说明:** Shows or hides the Precision Recall AUC, which is the area under the precision-recall curve. 默认开启。

**JMP添加的版本:** 18

#### Predictors

**语法:** obj << Predictors( state=0|1 )

**说明:** Shows or hides the Predictors column. 默认开启。

**JMP添加的版本:** 18

#### Profit

**语法:** obj << Profit( state=0|1 )

**说明:** Shows or hides the expected profit. 默认开启。

**JMP添加的版本:** 18

#### RMSE

**语法:** obj << RMSE( state=0|1 )

**说明:** Shows or hides the RMSE, which is the root mean square error. 默认开启。

**JMP添加的版本:** 18

#### RSquare

**语法:** obj << RSquare( state=0|1 )

**说明:** Shows or hides RSquare value, which is the proportion of variability explained. 默认开启。

**JMP添加的版本:** 18

#### Remove Hidden Models

**语法:** obj << Remove Hidden Models

**说明:** Removes all models for which the Show box is not checked.

**JMP添加的版本:** 18

#### Remove Shown Models

**语法:** obj << Remove Shown Models

**说明:** Removes all models for which the Show check box is checked and shows the remaining models.

**JMP添加的版本:** 18

#### Response

**语法:** obj << Response( state=0|1 )

**说明:** Shows or hides the Response column. 默认开启。

**JMP添加的版本:** 18

#### Show All Models

**语法:** obj << Show All Models

**说明:** Shows all models.

**JMP添加的版本:** 18

#### Subject

**语法:** obj << Subject( state=0|1 )

**说明:** Shows or hides the Subject column 默认开启。

**JMP添加的版本:** 18

#### Training Metrics

**语法:** obj << Training Metrics( state=0|1 )

**说明:** Shows or hides all training metrics. 默认开启。

**JMP添加的版本:** 18

#### Validation

**语法:** obj << Validation( state=0|1 )

**说明:** Shows or hides the Validation column. 默认开启。

**JMP添加的版本:** 18

#### Validation Metrics

**语法:** obj << Validation Metrics( state=0|1 )

**说明:** Shows or hides all validation metrics. 默认开启。

**JMP添加的版本:** 18

#### Weight

**语法:** obj << Weight( state=0|1 )

**说明:** Shows or hides the Weight column. 默认开启。

**JMP添加的版本:** 18

## Torch Deep Learning Fit > Post

### 项消息

#### Actual by Predicted Plots

**语法:** obj << Actual by Predicted Plots( state=0|1 )

**说明:** Shows or hides a plot using the training data with the predicted values on the X axis and actual values on the Y axis. 默认开启。

**JMP添加的版本:** 18

#### Confusion Matrices

**语法:** obj << ( fit[number] << Confusion Matrices( state=0|1 ) )

**说明:** Shows or hides a crosstabulation matrix of actual and predicted levels. 默认开启。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
obj << (fit[1] << Confusion Matrices( 1 ));

```

#### Contour Profiler.

**语法:** obj << Contour Profiler.

**说明:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP添加的版本:** 18

#### Decision Thresholds

**语法:** obj << Decision Thresholds( state=0|1 )

**说明:** Shows or hides decision threshold graphs and tables. 默认开启。

**JMP添加的版本:** 18

#### Fit Details

**语法:** obj << Fit Details( state=0|1 )

**说明:** Shows or hides the statistics for the fitted model. 默认开启。

**JMP添加的版本:** 18

#### Lift Curves

**语法:** obj << Lift Curves( state=0|1 )

**说明:** Plots how much more saturated the top x-percent of predicted values are compared to the whole population.

**JMP添加的版本:** 18

#### Model Details

**语法:** obj << Model Details( state=0|1 )

**说明:** Shows or hides model details 默认开启。

**JMP添加的版本:** 18

#### Precision Recall Curves

**语法:** obj << Precision Recall Curves( state=0|1 )

**说明:** Plots the trade-off between precision and recall for different classification thresholds. It is preferred in scenarios where class imbalances exist.

**JMP添加的版本:** 18

#### Profiler

**语法:** obj << Profiler

**说明:** Shows or hides the Prediction Profiler.

**JMP添加的版本:** 18

#### ROC Curves

**语法:** obj << ROC Curves( state=0|1 )

**说明:** Plots the response-category sorting efficiency of the model predictions.

**JMP添加的版本:** 18

#### Surface Profiler

**语法:** obj << Surface Profiler

**说明:** Shows or hides interactive graphs of cross-sections of the prediction function.

**JMP添加的版本:** 18

## Torch Deep Learning Fit

### 关联的构造器

#### Post

**语法:** Post

#### Torch Deep Learning Fit

**语法:** Torch Deep Learning Fit

### 项消息

#### Activation

**语法:** obj << Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="ReLU" )

**说明:** Specifies the activation function to use after each layer. 默认为“ReLU”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activation( "ReLU" ) ) );

```

#### Activations

**语法:** obj << Activations( text )

**说明:** Specifies a space-delimited list of activation functions to use in sequential layers.  This parameter overrides Activation when it is specified, and the last value carries forward.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Activations( "ReLU" ) ) );

```

#### Anchor Scale

**语法:** obj << Anchor Scale( number=16 )

**说明:** Specifies a multiplier applied to an internal range of anchor sizes.  Larger values tend to work better for larger boxes. 默认为“16”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Anchor Scale( "16" ) ) );

```

#### Aspect Sigma

**语法:** obj << Aspect Sigma( number=0 )

**说明:** Standard deviation of Gaussian aspect ratio deformation 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Aspect Sigma( 0.0 ) ) );

```

#### Attention Heads

**语法:** obj << Attention Heads( text=4 )

**说明:** For transformer models, specifies the number of attention heads as a space delimited list of positive integers, each of which must evenly divide its corresponding layer size. Last value carries forward if necessary. 默认为“4”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Attention Heads( 1 ) ) );

```

#### Base Activation

**语法:** obj << Base Activation( "CELU"|"ELU"|"GELU"|"Hardshrink"|"Hardtanh"|"LeakyReLU"|"LogSigmoid"|"Mish"|"PReLU"|"ReLU"|"ReLU6"|"RReLU"|"SELU"|"Sigmoid"|"SiLU"|"Softplus"|"Softshrink"|"Softsign"|"Tanh"|"Tanhshrink"|"None"="GELU" )

**说明:** Specifies the base activation function for Kolmogorov Arnold B Splines. 默认为“GELU”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Base Activation( "GELU" ) ) );

```

#### Basis Function

**语法:** obj << Basis Function( "Gaussian"|"Linear"|"Quadradic"|"InverseQuadradic"|"MultiQuadric"|"InverseMultiQuadric"|"Spline"|"Poisson1"|"Poisson2"|"Matern32"|"Matern52"="Gaussian" )

**说明:** For Radial Basis Machine models, specify the basis function. 默认为“Gaussian”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "RadialBasisMachine" ), Basis Function( "Gaussian" ) )
);

```

#### Batch Size

**语法:** obj << Batch Size( number=128 )

**说明:** Specifies the number of rows to randomly sample for each training batch and optimization update. Decrease it to save memory and update gradients more frequently; increase it to pass through the data faster and regularize the model more. 默认为“128”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Batch Size( 128 ) ) );

```

#### Binary Loss

**语法:** obj << Binary Loss( "BCE"|"SM"="BCE" )

**说明:** Specifies the loss function for binary responses. Choose from Binary Cross Entropy (BCE) or Soft Margin (SM). 默认为“BCE”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Binary Loss( "BCE" ) ) );

```

#### Blur Max Sigma

**语法:** obj << Blur Max Sigma( number=0 )

**说明:** Maximum standard deviation of Gaussian blur 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Blur Max Sigma( 1 ) ) );

```

#### Class Loss Weight

**语法:** obj << Class Loss Weight( number=4.0 )

**说明:** Specifies the multiplier for class loss. 默认为“4.0”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Class Loss Weight( 4.0 ) ) );

```

#### Confidence Threshold

**语法:** obj << Confidence Threshold( number=0.05 )

**说明:** Specifies the confidence score threshold for predicted boxes.  Boxes with probability score less than this threshold are dropped. 默认为“0.05”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Confidence Threshold( 0.05 ) ) );

```

#### Continuous Loss

**语法:** obj << Continuous Loss( "MSE"|"L1"|"SmoothL1"|"Huber"|"Poisson"|"Quantile"|"CoxPH"="MSE" )

**说明:** Specifies the loss function for continuous responses. Choose from Mean Squared Error (MSE), Mean Absolute Error (L1), Smoothed L1 (with margin), Huber (with margin), or Poisson (for count responses). 默认为“MSE”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :weight ), X( :picture ), Fit( Continuous Loss( "MSE" ) ) );

```

#### Copy Parameters to Launch

**语法:** obj << Copy Parameters to Launch

**说明:** Copies the parameter values from this model to the model launch section.

**JMP添加的版本:** 18

#### Covariance Structure

**语法:** obj << Covariance Structure( "DotProduct"|"Gaussian"="DotProduct" )

**说明:** For mixed models, specify the covariance structure. 默认为“DotProduct”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Tabular Model( "MixedModel" ), Covariance Structure( "DotProduct" ) )
);

```

#### Data Threads

**语法:** obj << Data Threads( number=4 )

**说明:** Specifies the number of threads to use to load data into memory. A number near half the number of actual cores is usually near optimal. 默认为“4”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Data Threads( 0 ) ) );

```

#### Device

**语法:** obj << Device( "auto"|"cpu"|"cuda:0"|"cuda:1"|"cuda:2"|"cuda:3"="auto" )

**说明:** Specifies the computational device that Torch uses. 默认为“auto”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Device( "cpu" ) ) );

```

#### Dilations

**语法:** obj << Dilations( text=1 )

**说明:** For custom convolutional models, specifies the dilations as a space-delimited list of positive integers. Last value carries forward if necessary. 默认为“1”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dilations( "1" ) ) );

```

#### Dropout Probs

**语法:** obj << Dropout Probs( text=0.0 )

**说明:** Specifies the probabilities of dropout to use after each layer as a space-delimited list of decimals between 0 and 1. Last value carries forward if necessary. 默认为“0.0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Dropout Probs( "0.1" ) ) );

```

#### Epochs

**语法:** obj << Epochs( number=20 )

**说明:** Specifies the number of iterations through the training data to optimize the loss function for each batch and train the model. 默认为“20”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Epochs( 100 ) ) );

```

#### Factorization Machine Layers

**语法:** obj << Factorization Machine Layers( text=0 )

**说明:** Specify a space-separated list of 0s and 1s indicating if factorization machine interactions should be added to each linear layer.  Last value carries forward. 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :height, :weight ),
	Fit( Factorization Machine Layers( "1" ) )
);

```

#### Fit Ys Separately

**语法:** obj << Fit Ys Separately( state=0 )

**说明:** Check to fit a distinct model for each Y variable, and uncheck to model them jointly. 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex, :height ), X( :picture ), Fit( Model Ys Separately( 1 ) ) );

```

#### Fixed Effects

**语法:** obj << Fixed Effects( number=0 )

**说明:** Specify the number of fixed effects, all of which must be at the beginning of the X variable list 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Fixed Effects( 0 ) ) );

```

#### Folder

**语法:** obj << Folder( text )

**说明:** Select a folder in which to save modeling results. A subfolder for each model is created in this folder.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Folder( "" ) ) );

```

#### Frozen Epochs

**语法:** obj << Frozen Epochs( number=0 )

**说明:** Specifies the number of epochs for which pretrained model bodies remain frozen.  After this number there is full training gradients for all parameters. 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Frozen Epochs( 3 ) ) );

```

#### Generate Python Code

**语法:** obj << Generate Python Code

**说明:** Creates Python code for model deployment.

**JMP添加的版本:** 18

#### Grid Size

**语法:** obj << Grid Size( number=5 )

**说明:** For Kolmogorov Arnold B Spline networks, specifies the number of points in the grid for the spline interpolation. 默认为“5”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Grid Size( 5 ) ) );

```

#### HFlip Prob

**语法:** obj << HFlip Prob( number=0 )

**说明:** Probability of horizontal flip 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( HFlip Prob( 0.3 ) ) );

```

#### Highway Layers

**语法:** obj << Highway Layers( text=0 )

**说明:** Specify a space-separated list of nonnegative integers specifying the number of highway layers to insert in the network.  Last value carries forward. 默认为“0”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Highway Layers( "1" ) ) );

```

#### Image Model

**语法:** obj << Image Model( ="LeNet5" )

**说明:** Specifies the image network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. 默认为“LeNet5”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Model( "LeNet5" ) ) );

```

#### Image Size

**语法:** obj << Image Size( number=28 )

**说明:** Specifies the size of image to use while training. Input images are transformed to this size square; larger images have higher resolution but slower training times. 默认为“28”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Image Size( 28 ) ) );

```

#### Kernel Sizes

**语法:** obj << Kernel Sizes( text=3 )

**说明:** For custom convolutional models, specifies the kernel sizes as a space-delimited list of positive integers. Last value carries forward if necessary. 默认为“3”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Kernel Sizes( "3" ) ) );

```

#### L1 Penalty

**语法:** obj << L1 Penalty( number=0.0 )

**说明:** Specifies a multiplier for the sum of absolute values of weight parameters to be added to the loss and induce sparsity. 默认为“0.0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( L1 Penalty( 0.0001 ) ) );

```

#### Layer Sizes

**语法:** obj << Layer Sizes( text=16 )

**说明:** Specifies output sizes of hidden layers as a space-delimited list of integers (actual sizes) or decimals (multipliers of the previous layer size). The final value is the embedding size. 默认为“16”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Layer Sizes( "16" ) ) );

```

#### Learning Rate

**语法:** obj << Learning Rate( number=0.001 )

**说明:** Specifies the learning rate. Smaller learning rates tend to fit better but require more iterations to converge, whereas larger learning rates fit faster. 默认为“0.001”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Learning Rate( 0.001 ) ) );

```

#### Margin

**语法:** obj << Margin( number=1.0 )

**说明:** Specifies the margin used in margin-based loss functions. Larger values should produce larger embedding distances between nominal responses with different levels, but may adversely affect training. 默认为“1.0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Margin( 1.0 ) ) );

```

#### Max Boxes

**语法:** obj << Max Boxes( number=5 )

**说明:** Specifies the maximum number of predicted boxes per image. 默认为“5”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Max Boxes( 5 ) ) );

```

#### Max Seq Length

**语法:** obj << Max Seq Length( number=512 )

**说明:** For text models, specifies the maximum number of tokens to create for each text item. 默认为“512”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Max Seq Length( 512 ) )
);

```

#### Mixup Portion

**语法:** obj << Mixup Portion( number=0.0 )

**说明:** Specifies portion of mixup samples to add to each training batch. For example, if Batch Size is 128 and Mixup Portion is 0.5, then 64 mixup samples are added. 默认为“0.0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Mixup Portion( 0.5 ) ) );

```

#### NMS Threshold

**语法:** obj << NMS Threshold( number=0.5 )

**说明:** Specifies the non-maximum suppression threshold for predicted boxes.  Overlapping boxes with IOU values above this threshold are dropped. 默认为“0.5”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( NMS Threshold( 0.5 ) ) );

```

#### Noise Max Sigma

**语法:** obj << Noise Max Sigma( number=0 )

**说明:** Maximum standard deviation of additive Gaussian noise 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Noise Max Sigma( 1 ) ) );

```

#### Nominal Image Threshold

**语法:** obj << Nominal Image Threshold( number=10 )

**说明:** Specifies the cutoff for determining if images in a column are nominal or continuous.  If the number of unique pixel levels is <= this number, then the images are considered to be nominal. 默认为“10”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Image Threshold( 10 ) ) );

```

#### Nominal Loss

**语法:** obj << Nominal Loss( "NLL"="NLL" )

**说明:** Specifies the loss function for nominal responses. Choose from Negative Loglikelihood (NLL). 默认为“NLL”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Nominal Loss( "NLL" ) ) );

```

#### Norm

**语法:** obj << Norm( "None"|"Batch"|"Group"|"Instance"="Batch" )

**说明:** Specifies the type of normalization to apply to each MLP layer. 默认为“Batch”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm( "Batch" ) ) );

```

#### Norm First

**语法:** obj << Norm First( "None"|"Batch"="Batch" )

**说明:** Specifies the type of normalization to apply to the input data to the tabular model. Batch norm effectively centers and scales each input. 默认为“Batch”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Norm First( "Batch" ) ) );

```

#### Num Linear

**语法:** obj << Num Linear( number=1 )

**说明:** For custom convolutional and message passing models, specifies the number of linear layers at the end of Layer Sizes. 默认为“1”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Num Linear( 1 ) ) );

```

#### Optimizer

**语法:** obj << Optimizer( "Adam"|"AdamW"|"SGD"|"SGDAGC"="AdamW" )

**说明:** Specifies the optimization method. Choose between Adaptive moment estimation (Adam), Adam weight decay (AdamW), Stochastic Gradient Descent (SGD), or SGD with Adaptive Gradient Clipping (SGDAGC). 默认为“AdamW”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Optimizer( "AdamW" ) ) );

```

#### Pitch Sigma

**语法:** obj << Pitch Sigma( number=0 )

**说明:** Standard deviation of Gaussian pitch 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Pitch Sigma( 5 ) ) );

```

#### Pooling Layers

**语法:** obj << Pooling Layers( text=Max )

**说明:** Specifies pooling layers as a space-delimited list of one of four keywords:  Max, Avg, Cat, or None. Last value carries forward if necessary. 默认为“Max”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pooling Layers( "Max" ) ) );

```

#### Pretrained Tabular

**语法:** obj << Pretrained Tabular( ="None" )

**说明:** Specify a pretrained tabular model that is prepended to the Tabular Model. 默认为“None”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Pretrained Tabular( "None" ) ) );

```

#### Quantiles

**语法:** obj << Quantiles( text=0.9 )

**说明:** Specify a space-delimited list of quantiles to use for Quantile loss. 默认为“0.9”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Quantiles( "0.9" ) ) );

```

#### RPN NMS Threshold

**语法:** obj << RPN NMS Threshold( number=0.7 )

**说明:** Specifies the non-maximum suppression threshold for region proposals.  Overlapping boxes with IOU values above this threshold are dropped. 默认为“0.7”。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( RPN NMS Threshold( 0.7 ) ) );

```

#### Remove All But This Fit

**语法:** obj << ( fit[number] << Remove All But This Fit )

**说明:** Removes the reports and plots for all models except this one.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove All But This Fit);

```

#### Remove Fit

**语法:** obj << ( fit[number] << Remove Fit )

**说明:** Removes the entire model report.

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
obj = dt << Torch Deep Learning(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Fit
);
Wait( 2 );
obj << (Fit[1] << Remove Fit);

```

#### Restore From

**语法:** obj << Restore From( " "=" " )

**说明:** Select a subfolder containing saved files from a previously fit model. Training for a new model will begin where this model finished. Model architectures and validation variables should match. Leave this field blank to train from scratch. 默认为“ ”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Restore From( "" ) ) );

```

#### Roll Sigma

**语法:** obj << Roll Sigma( number=0 )

**说明:** Standard deviation of Gaussian roll 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Roll Sigma( 5 ) ) );

```

#### Save CAMs

**语法:** obj << Save CAMs

**说明:** Save gradient-based class activation maps (CAMs) as a new column.

**JMP添加的版本:** 18

#### Save Embeddings

**语法:** obj << Save Embeddings

**说明:** Saves model embeddings (from final hidden layer) as new columns in the data table

**JMP添加的版本:** 18

#### Save Model

**语法:** obj << Save Model

**说明:** Saves serialized modeling components to disk in a folder that you name.  You can then specify this folder in Restore From to begin training with this model.

**JMP添加的版本:** 18

#### Save Predicteds

**语法:** obj << Save Predicteds

**说明:** Saves the predicted values in a new column in the data table.

**JMP添加的版本:** 18

#### Screening Method

**语法:** obj << Screening Method( "ResponseScreening"|"BootstrapForest"="ResponseScreening" )

**说明:** Choose a method by which to screen Tabular Model predictors prior to fitting the model within each fold.  ResponseScreening is fast and BootstrapForest is more thorough. 默认为“ResponseScreening”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Screening Method( "ResponseScreening" ) )
);

```

#### Screening Threshold

**语法:** obj << Screening Threshold( number=0 )

**说明:** If >= 1, the number of Tabular Model predictors to select by screening.  If < 1, the predictors with cumulative portion less than the threshold. 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Screening Threshold( 1 ) ) );

```

#### Seed

**语法:** obj << Seed( number=0 )

**说明:** Specifies the seed for the random number generator.  Note results may not be fully reproducible with the same seed due to the stochastic nature of certain Torch calculations. 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Seed( 0 ) ) );

```

#### Segmentation Model

**语法:** obj << Segmentation Model( "UNet"|"FPN"|"LinkNet"|"DeepLabV3"|"DeepLabV3Plus"|"PAN"|"PSPNet"="UNet" )

**说明:** Specifies the image segmentation model. 默认为“UNet”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/segmentation.jmp" );
Torch Deep Learning( Y( :Mask ), X( :Picture ), Sett( Segmentation Model( "VGG11_BN" ) ) );

```

#### Spline Order

**语法:** obj << Spline Order( number=3 )

**说明:** For Kolmogorov Arnold B Spline networks, specifies the order of the spline used for interpolation. 默认为“3”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Spline Order( 3 ) ) );

```

#### Strides

**语法:** obj << Strides( text=1 )

**说明:** For custom convolutional models, specifies the strides as a space-delimited list of positive integers. Last value carries forward if necessary. 默认为“1”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :height, :weight ), Fit( Strides( "1" ) ) );

```

#### Tabular Model

**语法:** obj << Tabular Model( "MultiLayerPerceptron"|"FTTransformer"|"KolmogorovArnoldBSpline"|"CustomConv1d"|"RadialBasisMachine"|"MixedModel"="MultiLayerPerceptron" )

**说明:** Specifies the tabular network architecture to use. Choose from Multilayer Perceptron (MLP), Feature Tokenized Transformer (FTTransformer), Kolmogorov Arnold Network (KolmogorovArnoldBSpline), or other options 默认为“MultiLayerPerceptron”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex ),
	X( :picture ),
	Fit( Tabular Model( "MultiLayerPerceptron" ) )
);

```

#### Text Model

**语法:** obj << Text Model( ="BertTiny" )

**说明:** Specifies the text network architecture to use. Models are ordered by size. Smaller models train faster but may not perform as well as larger models. 默认为“BertTiny”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Chips.jmp" );
Torch Deep Learning(
	Y( :Buy again? ),
	X( :Potato Chip Product Review ),
	Fit( Text Model( "BERT" ) )
);

```

#### Triplet Loss Weight

**语法:** obj << Triplet Loss Weight( number=0.0 )

**说明:** Specifies the multiplier alpha to use in the following compound loss function: alpha * triplet_loss + (1 - alpha) * loss_function. Must be between 0 and 1. 默认为“0.0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Triplet Loss Weight( 0.5 ) ) );

```

#### Use Data As Knots

**语法:** obj << Use Data As Knots( state=0 )

**说明:** For Radial Basis Machine models, check to use the training data as knots to form an interpolation-style model. 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning(
	Y( :sex, :height ),
	X( :picture ),
	Fit( Tabular Model( "Radial Basis Machine" ), Use Data As Knots( 1 ) )
);

```

#### VFlip Prob

**语法:** obj << VFlip Prob( number=0 )

**说明:** Probability of vertical flip 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( VFlip Prob( 0.2 ) ) );

```

#### Weight Decay

**语法:** obj << Weight Decay( number=0.0 )

**说明:** Specifies a penalty term multiplier of the L2 norm of the trainable parameters, which regularizes them in a way similar to ridge regression. 默认为“0.0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Weight Decay( 0.0001 ) ) );

```

#### Worker Count

**语法:** obj << Worker Count( number=4 )

**说明:** Specifies the number of workers to use to load batches of data during training. A number near half the number of actual cores is usually near optimal. 默认为“4”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Worker Count( 0 ) ) );

```

#### X Slide Sigma

**语法:** obj << X Slide Sigma( number=0 )

**说明:** Standard deviation of Gaussian random shift along the X axis 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( X Slide Sigma( 5 ) ) );

```

#### Y Slide Sigma

**语法:** obj << Y Slide Sigma( number=0 )

**说明:** Standard deviation of Gaussian random shift along the Y axis 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Y Slide Sigma( 5 ) ) );

```

#### Yaw Sigma

**语法:** obj << Yaw Sigma( number=0 )

**说明:** Standard deviation of Gaussian yaw 默认为“0”。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Torch Deep Learning( Y( :sex ), X( :picture ), Fit( Yaw Sigma( 5 ) ) );

```

