# Sequencing Variants Toolset



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
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj << Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Script

**语法:** obj << Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj << Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj << Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
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
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script for All Objects

**语法:** obj << Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj << Save Script for All Objects To Data Table( <name> )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( <name>, < <<Prompt(0|1)>, < <<Replace(0|1)> );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj << Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj << Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj << Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
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
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj << Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
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

### Sequencing Variants Toolset

**语法:** Sequencing Variants Toolset

**说明:** 提供使用 SamTools 和 BcfTools 处理和分析高通量测序数据的框架。

## 项消息

### Arguments

**语法:** obj << Arguments

**说明:** 允许选项指定从脚本窗口运行该平台。

### Run Cmd

**语法:** obj << Run Cmd

**说明:** 确定要从脚本窗口运行测序变异工具集任务。

### Run Spec

**语法:** obj << Run Spec

**说明:** 确定要从界面窗口运行测序变异工具集任务。

### Specification

**语法:** obj << Specification

**说明:** 允许任务的指定。

## Sequencing Variants Toolset Run

### 项消息

#### Auto Send Output to Files List

**语法:** obj << Auto Send Output to Files List( state=0|1 )

**说明:** 将输出文件发送至文件列表面板。

#### Bam Files

**语法:** obj << Bam Files

**说明:** 指定 BAM 文件。

#### Bcf Files

**语法:** obj << Bcf Files

**说明:** 指定 BCF 文件。

#### Caller

**语法:** obj << Caller( "多等位基因"|"一致性"="多等位基因" )

**说明:** 默认为“多等位基因”。

#### Copy Task Specification

**语法:** obj << Copy Task Specification

**说明:** 将当前测序变异工具集规格复制到剪贴板。

**JMP添加的版本:** 19

#### Files

**语法:** obj << Files

**说明:** 加载要在 samtools 中运行的输入文件。

#### Ploidy

**语法:** obj << Ploidy( number=2 )

**说明:** 默认为“2”。

#### Recall in Task Specification

**语法:** obj << Recall in Task Specification

**说明:** 将“任务规格”报表中的任务规格设置为指定的模型。

#### Ref Files

**语法:** obj << Ref Files

**说明:** 指定参考基因组文件。

#### Remove Run

**语法:** obj << ( Run[number] << Remove Run( state=0|1 ) )

**说明:** 从报表窗口删除指定的运行报表。

#### Results Folder

**语法:** obj << Results Folder

**说明:** 指定结果文件夹。

#### Sam Files

**语法:** obj << Sam Files

**说明:** 指定 SAM 文件。

#### Send Output to Files List

**语法:** obj << Send Output to Files List( state=0|1 )

**说明:** 将输出文件发送至文件列表面板。

#### Sort Reads By

**语法:** obj << Sort Reads By( "坐标"|"字母数字"|"词典"="坐标" )

**说明:** 默认为“坐标”。

#### Summary

**语法:** obj << Summary( state=0|1 )

**说明:** 显示或隐藏包含运行详细信息的报表。 默认开启。

#### Target Regions

**语法:** obj << Target Regions

**说明:** 设置目标区域。区域规范要求 BAM 文件按坐标排序并添加了索引。

#### Task

**语法:** obj << Task( "索引 Fasta"|"将 SAM 转换为 BAM"|"排序读取"|"添加配对坐标"|"删除重复项"|"合并文件"|"索引 BAM"|"将 BAM 转换为 SAM"|"提取映射的读取"|"提取未映射的读取"|"提取目标区域"|"提取正确对齐"|"提取第一个读取"|"标记不匹配和插入"|"计数对齐"|"按标记计数对齐"|"按参考计数对齐"|"生成统计量"|"生成碱基对齐质量"|"生成读取深度"|"Bgzip 压缩"|"Bgzip 解压缩"|"生成遗传型可能性"|"生成遗传型识别"|"将 Bcf 转换为 Vcf"|"将 Vcf 转换为 Bcf" )

**说明:** 确定要运行的任务。

#### Title

**语法:** obj << Title

**说明:** 设置标题。

#### Unthreaded

**语法:** obj << Unthreaded( state=0|1 )

**说明:** 仅使用主线程进行计算

#### Vcf Files

**语法:** obj << Vcf Files

**说明:** 指定 VCF 文件。

## Sequencing Variants Toolset Specification

### 项消息

#### Auto Send Output to Files List

**语法:** obj << Auto Send Output to Files List( state=0|1 )

**说明:** 将输出文件发送至文件列表面板。

#### Bam Files

**语法:** obj << Bam Files

**说明:** 指定 BAM 文件。

#### Bcf Files

**语法:** obj << Bcf Files

**说明:** 指定 BCF 文件。

#### Caller

**语法:** obj << Caller( "多等位基因"|"一致性"="多等位基因" )

**说明:** 默认为“多等位基因”。

#### Files

**语法:** obj << Files

**说明:** 加载要在 samtools 中运行的输入文件。

#### Ploidy

**语法:** obj << Ploidy( number=2 )

**说明:** 指定指示倍性水平的正数。 默认为“2”。

#### Ref Files

**语法:** obj << Ref Files

**说明:** 指定参考基因组文件。

#### Results Folder

**语法:** obj << Results Folder

**说明:** 指定结果文件夹。

#### Sam Files

**语法:** obj << Sam Files

**说明:** 指定 SAM 文件。

#### Sort Reads By

**语法:** obj << Sort Reads By( "坐标"|"字母数字"|"词典"="坐标" )

**说明:** 默认为“坐标”。

#### Target Regions

**语法:** obj << Target Regions

**说明:** 设置目标区域。区域规范要求 BAM 文件按坐标排序并添加了索引。

#### Task

**语法:** obj << Task( "索引 Fasta"|"将 SAM 转换为 BAM"|"排序读取"|"添加配对坐标"|"删除重复项"|"合并文件"|"索引 BAM"|"将 BAM 转换为 SAM"|"提取映射的读取"|"提取未映射的读取"|"提取目标区域"|"提取正确对齐"|"提取第一个读取"|"标记不匹配和插入"|"计数对齐"|"按标记计数对齐"|"按参考计数对齐"|"生成统计量"|"生成碱基对齐质量"|"生成读取深度"|"Bgzip 压缩"|"Bgzip 解压缩"|"生成遗传型可能性"|"生成遗传型识别"|"将 Bcf 转换为 Vcf"|"将 Vcf 转换为 Bcf"="索引 Fasta" )

**说明:** 确定要运行的任务。 默认为“索引 Fasta”。

#### Title

**语法:** obj << Title

**说明:** 设置标题。

#### Unthreaded

**语法:** obj << Unthreaded( state=0|1 )

**说明:** 仅使用主线程进行计算

#### Vcf Files

**语法:** obj << Vcf Files

**说明:** 指定 VCF 文件。

