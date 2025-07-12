# Formula Depot



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

### Copy Script

**语法:** obj << Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
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

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
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

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ), By( _bycol ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ), By( _bycol ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
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

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
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

### Formula Depot

**语法:** Formula Depot

**说明:** 预测模型的容器可支持模型比较、刻画和评分代码生成。“公式存储库”通过分析菜单、建模平台中的“发布”命令、“重新编码”和“公式编辑器”启动。

```jsl

Names Default To Here( 1 );

fd1 = Formula Depot();
dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
fd1 << Close Window;
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];

```

## 项消息

### Add Formula from Column

**语法:** 预测变量 = obj << Add Formula from Column( Table(name|reference), Columns(name|index|reference, ...), <Expand Intermediate Formulas(number)> )

**说明:** 将给定表中的现有预测公式列添加至“公式存储库”

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Save Probability Formula;
mp = fd << Add Formula From Column( Table( dt ), Columns( 11 ) ); // "Most Likely Species"
mp << Generate Python Code;

```

### Copy Formulas as Functions

**语法:** obj << Copy Formulas as Functions( <Formulas(name|index|reference, ...)> )

**说明:** 将给定模型作为标量 Function() 语句复制到剪贴板。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
predictor = model << Publish Probability Formulas;
fd << Copy Formulas as Functions( Formulas( predictor ) );
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Copy Formulas as Transforms

**语法:** obj << Copy Formulas as Transforms( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**说明:** 将给定模型复制到剪贴板 Transform Column() 语句中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Publish Probability Formulas;
fd << Copy Formulas as Transforms(
    // English: Formulas("Fit Nominal Logistic - Species")
	Formulas( 1 )
);
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Copy Scripts

**语法:** obj << Copy Scripts( <Formulas(name|index|reference, ...)> )

**说明:** 将“公式存储库”中储存的给定公式的脚本复制到剪贴板。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
predictor = model << Publish Probability Formulas;
fd << Copy Scripts( Formulas( predictor ) );
Wait( 0 );
text = Get Clipboard();
Show( text );

```

### Generate C Code

**语法:** obj << Generate C Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**说明:** 为“公式存储库”中储存的给定模型生成 C 代码。输出写到编辑器窗口，若给定了“无编辑器”参数，则输出写到字符串变量。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
c_code = fd << Generate C Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// c_code = predictor << Generate C Code(No Editor);
Save Text File( "$TEMP\logist.c", c_code );
// Open code in editor window
fd << Generate C Code( Formulas( predictor ) );

```

### Generate JavaScript Code

**语法:** obj << Generate JavaScript Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**说明:** 为“公式存储库”中储存的给定模型生成 JavaScript 代码。输出写到编辑器窗口，若给定了“无编辑器”参数，则输出写到字符串变量。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
js_code = fd << Generate JavaScript Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// js_code = predictor << Generate JavaScript Code(No Editor);
Save Text File( "$TEMP\logist.js", js_code );
// Open code in editor window
fd << Generate JavaScript Code( Formulas( predictor ) );

```

### Generate Python Code

**语法:** obj << Generate Python Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**说明:** 为“公式存储库”中储存的给定模型生成 Python 代码。输出写到编辑器窗口，若给定了“无编辑器”参数，则输出写到字符串变量。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
py_code = fd << Generate Python Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// py_code = predictor << Generate Python Code(No Editor);
Save Text File( "$TEMP\logist.py", py_code );
// Open code in editor window
fd << Generate Python Code( Formulas( predictor ) );

```

### Generate SAS Code

**语法:** obj << Generate SAS Code( <Formulas(name|index|reference, ...)>, <No Editor> )

**说明:** 为“公式存储库”中储存的给定模型生成 SAS (DS2) 代码。输出写到编辑器窗口，若给定了“无编辑器”参数，则输出写到字符串变量。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
md = dt << Run Script( "Nominal Logistic" );
predictor = md << Publish Probability Formulas;
// Save code to string 
sas_code = fd << Generate SAS Code( Formulas( predictor ), No Editor );
// shortcut using predictor reference
// sas_code = predictor << Generate SAS Code(No Editor);
Save Text File( "$TEMP\logist.sas", sas_code );
// Open code in editor window
fd << Generate SAS Code( Formulas( predictor ) );

```

### Generate SQL Code

**语法:** obj << Generate SQL Code( <Formulas(name|index|reference, ...)>, <No Editor>, <QUOTE_STYLE> )

**说明:** 为“公式存储库”中储存的给定模型生成 SQL 代码（适合在 SQL Select 语句中使用的列定义）。输出写到编辑器窗口，若给定了“无编辑器”参数，则输出写到编辑器窗口或字符串变量。QUOTE_STYLE 是表示 JMP 支持的 SQL 数据库（MySQL、Impala、Hive 等）之一的字符串或 SQL 引用类型（“下划线”、“反引号”、“括号”或“双引号”）。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Liver Cancer.jmp" );
md = dt << Run Script( "Elastic Net Poisson, BIC" );
mp_obs = md << xpath( "//OutlineBox" );
scriptables = Filter Each( {ob}, mp_obs << Get Scriptable Object(), !Is Empty( ob ) );
mp = scriptables[2];
predictor = mp << Publish Prediction Formula;
// Save code to string 
sql_code = fd << Generate SQL Code( Formulas( 1 ), No Editor );
// shortcut using predictor reference
// sql_code = predictor << Generate SQL Code(No Editor);
Save Text File( "$TEMP\genreg.sql", sql_code );
// Open code in editor window
fd << Generate SQL Code( Formulas( predictor ), "MySQL" );

```

### Model Comparison

**语法:** obj << Model Comparison( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**说明:** 基于给定表的内容，使用模型比较实用工具比较“公式存储库”中储存的给定模型。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_mp = nl_md << Publish Probability Formulas;
nn_md = Neural(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ) )
);
nn_mp = nn_md << Publish Prediction Formula;
mc_plat = fd << ModelComparison( Formulas( 1, 2 ) );
// Other options:
// mds = {"Fit Nominal Logistic - Species", "Neural - Species"};
// fd << ModelComparison( Formulas( mds ) );
// fd << ModelComparison( Formulas( 1 ), Formulas( 2 ) );
// fd << ModelComparison; // all models

```

### Profiler

**语法:** obj << Profiler( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**说明:** 基于给定表的内容，使用刻画器实用工具刻画“公式存储库”中储存的给定模型。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_mp = nl_md << Publish Probability Formulas;
nn_md = Neural(
	Y( :Species ),
	X( :Sepal length, :Sepal width, :Petal length, :Petal width ),
	Informative Missing( 0 ),
	Validation Method( "Holdback", 0.3333 ),
	Fit( NTanH( 3 ) )
);
nn_mp = nn_md << Publish Prediction Formula;
fd << Profiler( Formulas( nl_mp, nn_mp ) );

```

### Remove Model Comparison

**语法:** obj << Remove Model Comparison

**说明:** 从当前“公式存储库”中删除所有“模型比较”报表。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_md << Publish Probability Formulas;
fd << Model Comparison();
fd << Remove Model Comparison();

```

### Remove Profiler

**语法:** obj << Remove Profiler

**说明:** 从当前“公式存储库”中删除所有刻画器。

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
dt = Open( "$SAMPLE_DATA/Iris.jmp" );
nl_md = dt << Run Script( "Nominal Logistic" );
nl_md << Publish Probability Formulas;
fd << Profiler();
fd << Remove Profiler();

```

### Rename Formula Depot

**语法:** obj << Rename Formula Depot( text )

```jsl

Names Default To Here( 1 );

fd = Formula Depot();
fd << Rename Formula Depot( "New Name" );

```

### Run Scripts

**语法:** obj << Run Scripts( <Table(name|reference)>, <Formulas(name|index|reference, ...)> )

**说明:** 将给定模型作为一个或多个公式列保存至当前或给定 JMP 数据表。

```jsl

Names Default To Here( 1 );

// Create a Formula Depot to store the model
dt1 = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt1 << RunScript( "Nominal Logistic" );
fd1 = Formula Depot();
model << Publish Probability Formulas;
fd_script = fd1 << Get Script;
Save Text File( "$TEMP\fd.jrp", Char( Name Expr( fd_script ) ) );
// Clean-up
Close( dt1, NoSave );
fd1 << Close Window;
// Read FD from disk
Open( "$TEMP\fd.jrp" );
fd2 = Formula Depot[1];
// Create columns from stored model; usually this is a new table with a compatible schema
dt2 = Open( "$SAMPLE_DATA\Iris.jmp" );
fd2 << Run Scripts( Table( dt2 ), Formulas( 1 ) );

```

### Show Scripts

**语法:** obj << Show Scripts( <Formulas(name|index|reference, ...)> )

**说明:** 打开新的“公式”窗口（或追加至打开的“公式”窗口），它包含“公式存储库”中储存的给定公式的脚本。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA\Iris.jmp" );
model = dt << RunScript( "Nominal Logistic" );
fd = Formula Depot();
model << Publish Probability Formulas;
fd << Show Scripts( Formulas( 1 ) );

```

