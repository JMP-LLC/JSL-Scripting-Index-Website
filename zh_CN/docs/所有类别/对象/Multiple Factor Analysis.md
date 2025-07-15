# Multiple Factor Analysis



## 共享项消息

### Action

**语法:** obj &lt;&lt; Action

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

**语法:** Apply Preset( preset ); Apply Preset( source, label, &lt;Folder( folder {, folder2, ...} )&gt; )

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

**语法:** obj &lt;&lt; Automatic Recalc( state=0|1 )

**说明:** 对排除和数据更改自动重新执行分析。若启用了“自动重新计算”选项，则应考虑使用 Wait(0) 命令来确保排除和数据更改在重新计算前生效。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Automatic Recalc( 1 );
dt << Select Rows( 5 ) << Exclude( 1 );

```

### Broadcast

**语法:** obj &lt;&lt; Broadcast(message)

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

**语法:** obj &lt;&lt; Column Switcher(column reference, {column reference, ...}, &lt; Title(title) &gt;, &lt; Close Outline(0|1) &gt;, &lt; Retain Axis Settings(0|1) &gt;, &lt; Layout(0|1) &gt;)

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

**语法:** obj &lt;&lt; Copy ByGroup Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Copy ByGroup Script;

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建生成该分析的 JSL 脚本，并将其置于剪贴板上。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Copy Script;

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 将该分析的数据表窗口移动到前面。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Data Table Window;

```

### Get By Levels

**语法:** obj &lt;&lt; Get By Levels

**说明:** 返回将“依据”组列映射到其值的关联数组。

**JMP添加的版本:** 18

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
biv = dt << Bivariate( X( :height ), Y( :weight ), By( :sex ) );
biv << Get By Levels;

```

### Get ByGroup Script

**语法:** obj &lt;&lt; Get ByGroup Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
t = obj[1] << Get ByGroup Script;
Show( t );

```

### Get Container

**语法:** obj &lt;&lt; Get Container

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
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
t = obj << Get Container;
Show( (t << XPath( "//OutlineBox" )) << Get Title );

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回对该数据表的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
t = obj << Get Datatable;
Show( N Rows( t ) );

```

### Get Group Platform

**语法:** obj &lt;&lt; Get Group Platform

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

**语法:** obj &lt;&lt; Get Script

**说明:** 创建生成该分析的脚本 (JSL)，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
t = obj << Get Script;
Show( t );

```

### Get Script With Data Table

**语法:** obj &lt;&lt; Get Script With Data Table

**说明:** 创建生成该分析的脚本 (JSL) 以专门引用该数据表，并将其作为表达式返回。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
t = obj << Get Script With Data Table;
Show( t );

```

### Get Timing

**语法:** obj &lt;&lt; Get Timing

**说明:** 平台启动过程计时。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
t = obj << Get Timing;
Show( t );

```

### Get Web Support

**语法:** obj &lt;&lt; Get Web Support

**说明:** 返回一个数字，指示显示对象的交互式 HTML 支持的水平。1 表示支持部分或全部元素。0 表示不支持。

```jsl

Names Default To Here( 1 );
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

**语法:** obj &lt;&lt; Local Data Filter

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

**语法:** obj &lt;&lt; Paste Local Data Filter

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

**语法:** obj &lt;&lt; Redo Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Redo Analysis;

```

### Redo ByGroup Analysis

**语法:** obj &lt;&lt; Redo ByGroup Analysis

**说明:** 在新窗口中重新运行相同的分析。若数据发生更改，分析也将不同。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Redo ByGroup Analysis;

```

### Relaunch Analysis

**语法:** obj &lt;&lt; Relaunch Analysis

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Relaunch Analysis;

```

### Relaunch ByGroup

**语法:** obj &lt;&lt; Relaunch ByGroup

**说明:** 打开平台启动窗口并重新调用曾用于创建报表的设置。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Relaunch ByGroup;

```

### Remove Column Switcher

**语法:** obj &lt;&lt; Remove Column Switcher

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

**语法:** obj &lt;&lt; Remove Local Data Filter

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

**语法:** obj &lt;&lt; Report;Report( obj )

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Report View( "Summary" );

```

### Save ByGroup Script to Data Table

**语法:** Save ByGroup Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Append Suffix(0|1)&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本并将其保存为数据表中的表属性。您可以为脚本指定一个名称。Append Suffix 选项在脚本名称后追加一个数字后缀，用于将该脚本与现有的同名脚本区别出来。Prompt 选项提示用户指定脚本名称。Replace 选项会替换同名的现有脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Data Table;

```

### Save ByGroup Script to Journal

**语法:** obj &lt;&lt; Save ByGroup Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Journal;

```

### Save ByGroup Script to Script Window

**语法:** obj &lt;&lt; Save ByGroup Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save ByGroup Script to Script Window;

```

### Save Script for All Objects

**语法:** obj &lt;&lt; Save Script for All Objects

**说明:** Creates a script for all report objects in the window and appends it to the current Script window. This option is useful when you have multiple reports in the window.

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Save Script for All Objects;

```

### Save Script for All Objects To Data Table

**语法:** obj &lt;&lt; Save Script for All Objects To Data Table( &lt;name&gt; )

**说明:** 将所有报表对象的脚本保存至当前数据表。当您在该窗口中具有多个报表时，该选项很有用。除非您在引号中指定脚本名称，否则脚本将以第一个平台命名。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table;

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);
obj[1] << Save Script for All Objects To Data Table( "My Script" );

```

### Save Script to Data Table

**语法:** Save Script to Data Table( &lt;name&gt;, &lt; &lt;&lt;Prompt(0|1)&gt;, &lt; &lt;&lt;Replace(0|1)&gt; );

**说明:** 创建生成该分析的 JSL 脚本，并将其作为表属性保存至数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Save Script to Data Table( "My Analysis", <<Prompt( 0 ), <<Replace( 0 ) );

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建生成该分析的 JSL 脚本，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Save Script to Journal;

```

### Save Script to Report

**语法:** obj &lt;&lt; Save Script to Report

**说明:** 创建生成该分析的 JSL 脚本，并在报表中显示。有助于保留打印的已完成操作记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Save Script to Report;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建生成该分析的 JSL 脚本，并将其追加至当前的脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
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

**语法:** obj &lt;&lt; Sync to Data Table Changes

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

**语法:** obj &lt;&lt; Title( "new title" )

**说明:** 设置平台的标题。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
obj << Title( "My Platform" );

```

### Top Report

**语法:** obj &lt;&lt; Top Report

**说明:** 返回对报表中根节点的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);
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

Names Default To Here( 1 );
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

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Bivariate( Y( :Weight ), X( :Height ) );
xml = obj << View Web XML;

```

### Window View

**语法:** obj = Multiple Factor Analysis(...Window View( "Visible"|"Invisible"|"Private" )...)&lt;b&gt;启动窗口项: 是&lt;/b&gt;

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

### Multiple Factor Analysis

**语法:** Multiple Factor Analysis( MFABLocks({"Block 1", columns},{"Block 2", columns}) )

**说明:** 分析感官数据分析中的小组成员之间的一致性。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	)
);

```

## 列

### By

**语法:** obj = Multiple Factor Analysis(...&lt;By( column(s) )&gt;...)

**说明:** 为指定列的每个水平执行单独的分析。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_bycol",
	Character,
	Nominal,
	set values( Repeat( {"A", "B"}, N Rows( dt ) )[1 :: N Rows( dt )] )
);
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	By( _bycol )
);

```

### Freq

**语法:** obj = Multiple Factor Analysis(...&lt;Freq( column )&gt;...)

**说明:** 指定一列，其值为分析中的每一行都分配一个频数。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_freqcol", Numeric, Continuous, Formula( Random Integer( 1, 5 ) ) );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	Freq( _freqcol )
);

```

### MFA Blocks

**语法:** obj = Multiple Factor Analysis(...&lt;MFA Blocks( column )&gt;...)

**说明:** 指定多因子分析中应视为子表的列组。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

### Product ID

**语法:** obj = Multiple Factor Analysis(...&lt;Product ID( column )&gt;...)

**说明:** 指定要分析的项或产品所在的列。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

### Supplementary

**语法:** obj = Multiple Factor Analysis(...&lt;Supplementary( column )&gt;...)

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	Z( :Region ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

### Weight

**语法:** obj = Multiple Factor Analysis(...&lt;Weight( column )&gt;...)

**说明:** 指定一列，其值为分析中的每一行都分配一个权重。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << New Column( "_weightcol", Numeric, Continuous, Formula( Random Beta( 1, 1 ) ) );
dt << Multiple Factor Analysis(
	Product ID( :Vineyard ),
	Z( :Region ),
	MFA Blocks(
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence Flowery etc.", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness},
		{"Xavier Fruity etc.", :Xavier Fruity, :Xavier Spicy, :Xavier Crispness,
		:Xavier Alcohol, :Xavier Savory, :Xavier Lightness},
		{"Robert Fruity etc.", :Robert Fruity, :Robert Flowery, :Robert Spicy,
		:Robert Crispness, :Robert Tannin, :Robert Alcohol, :Robert Savory, :Robert Lightness
		},
		{"Paula Fruity etc.", :Paula Fruity, :Paula Flowery, :Paula Spicy, :Paula Crispness,
		:Paula Tannin, :Paula Savory},
		{"Monica Fruity etc.", :Monica Fruity, :Monica Flowery, :Monica Spicy, :Monica Tannin,
		:Monica Alcohol, :Monica Savory, :Monica Lightness},
		{"Frank Fruity etc.", :Frank Fruity, :Frank Flowery, :Frank Spicy, :Frank Crispness,
		:Frank Tannin, :Frank Alcohol, :Frank Savory, :Frank Lightness}
	),
	Weight( _weightcol )
);

```

### Z

**语法:** obj = Multiple Factor Analysis(...&lt;Z( column )&gt;...)

**说明:** 指定一个或多个补充变量。平台中的任何计算都不使用补充变量，所以包括这些变量并不会影响结果。这些变量可以改善数据解释或用于将来的分析。

**JMP添加的版本:** 14

<b>启动窗口项: 是</b>

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
dt << Multiple Factor Analysis(
	Product ID( :Wine ),
	Z( :Region ),
	MFA Blocks(
		{"Susan", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness},
		{"Florence", :Florence Flowery, :Florence Crispness, :Florence Tannin,
		:Florence Savory, :Florence Lightness}
	)
);

```

## 项消息

### Arrow Lines

**语法:** obj &lt;&lt; Arrow Lines( state=0|1 )

**说明:** 在图形上显示或隐藏箭头线。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Arrow Lines( 0 );

```

### Biplot

**语法:** obj &lt;&lt; Biplot( state=0|1 )

**说明:** 显示或隐藏一个图，该图叠加了指定数量的成分的得分图和载荷图。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Biplot( 1 );

```

### Biplot Select Component

**语法:** obj&lt;&lt;Biplot Select Component( 1, 3 )

**说明:** 选择用作双标图中的轴的成分。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Biplot Select Component( 1, 3 );

```

### Block Partial Contributions

**语法:** obj &lt;&lt; Block Partial Contributions( state=0|1 )

**说明:** 显示或隐藏区组贡献，它是区组变量的贡献总和。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Block Partial Contributions( 1 );

```

### Block Partial Inertias

**语法:** obj &lt;&lt; Block Partial Inertias( state=0|1 )

**说明:** 显示或隐藏重新调整尺度的区组贡献，使得不同区组之间的惯量总和等于主成分的特征值。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Block Partial Inertias( 1 );

```

### Block Partial and Consensus Correlations

**语法:** obj &lt;&lt; Block Partial and Consensus Correlations( state=0|1 )

**说明:** 显示或隐藏指示每个主成分维上部分得分和一致性得分之间相关性的系数矩阵。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Block Partial and Consensus Correlations( 1 );

```

### Block Squared Cosines

**语法:** obj &lt;&lt; Block Squared Cosines( state=0|1 )

**说明:** 显示或隐藏区组维和主成分维之间方差中的重叠比例。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Block Squared Cosines( 1 );

```

### Block Weights

**语法:** obj &lt;&lt; Block Weights( state=0|1 )

**说明:** 显示或隐藏区组权重的矩阵，它是每个区组的第一个奇异值的逆矩阵。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Block Weights( 1 );

```

### Consensus Map

**语法:** obj &lt;&lt; Consensus Map( state=0|1 )

**说明:** 显示或隐藏一致性图，它叠加了每个区组的重心得分和部分得分。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Consensus Map( 0 );

```

### Consensus Map Select Component

**语法:** obj&lt;&lt;Consensus Map Select Component( 1, 3 )

**说明:** 选择用作一致性图中的轴的成分。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Consensus Map Select Component( 1, 3 );

```

### Eigenvalues

**语法:** obj &lt;&lt; Eigenvalues( state=0|1 )

**说明:** 显示或隐藏排序的特征值、它们的变异百分比和累积变异百分比。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Eigenvalues( 1 );

```

### Eigenvectors

**语法:** obj &lt;&lt; Eigenvectors( state=0|1 )

**说明:** 显示或隐藏每个主成分的特征向量的报表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Eigenvectors( 1 );

```

### Highlight Product

**语法:** obj&lt;&lt;Partial Axes Plot Select Component( 1, 3 )

**说明:** 基于指定的惯量值突出显示产品聚类。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	),
	Consensus Map( 1 )
);
obj << Highlight Product( "Small Inertia", 4 );

```

### Lg Coefficients

**语法:** obj &lt;&lt; Lg Coefficients( state=0|1 )

**说明:** 显示或隐藏指示区组间相似性的系数矩阵。等价于非标准化 RV 相关性。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Lg Coefficients( 1 );

```

### Partial Axes Plot

**语法:** obj &lt;&lt; Partial Axes Plot( state=0|1 )

**说明:** 显示或隐藏“部分轴图”，该图显示重心平面和区组之间的联系。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Partial Axes Plot( 1 );

```

### Partial Axes Plot Select Component

**语法:** obj&lt;&lt;Partial Axes Plot Select Component( 1, 3 )

**说明:** 选择用作部分轴图中的轴的成分。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	),
	Partial Axes Plot( 1 )
);
obj << Partial Axes Plot Select component( 1, 3 );

```

### RV Correlations

**语法:** obj &lt;&lt; RV Correlations( state=0|1 )

**说明:** 显示或隐藏区组间平方相关性系数的矩阵。RV 系数的范围从 0 到 1。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << RV Correlations( 1 );

```

### Save Block Partial Scores

**语法:** obj &lt;&lt; Save Block Partial Scores

**说明:** 在数据表的新列中保存区组部分得分。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Save Block Partial Scores();

```

### Save Individual Partial Contributions

**语法:** obj &lt;&lt; Save Individual Partial Contributions

**说明:** 在数据表的新列中保存单值部分贡献。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Save Individual Partial Contributions();

```

### Save Individual Scores

**语法:** obj &lt;&lt; Save Individual Scores

**说明:** 在数据表的新列中保存指定数量的主成分。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Save Individual Scores();

```

### Save Individual Squared Cosines

**语法:** obj &lt;&lt; Save Individual Squared Cosines

**说明:** 在数据表的新列中保存单值平方余弦。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Save Individual Squared Cosines();

```

### Save Partial Axes Coordinates

**语法:** obj &lt;&lt; Save Partial Axes Coordinates

**说明:** 在数据表的新列中保存部分轴坐标。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Save Partial Axes Coordinates();

```

### Show Labels

**语法:** obj &lt;&lt; Show Labels( state=0|1 )

**说明:** 显示或隐藏图形中点的标签。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Show Labels( 1 );

```

### Summary Plot Select Component

**语法:** obj&lt;&lt;Summary Plot Select Component( 1, 3 )

**说明:** 选择用作汇总图中的轴的成分。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Summary Plot Select Component( 1, 3 );

```

### Summary Plots

**语法:** obj &lt;&lt; Summary Plots( state=0|1 )

**说明:** 显示或隐藏包含特征值图、得分图和载荷图的分级显示节点。 默认开启。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Summary Plots( 0 );

```

### Variable Loadings

**语法:** obj &lt;&lt; Variable Loadings( state=0|1 )

**说明:** 显示或隐藏报表，该报表显示成分载荷所对应的列。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Variable Loadings( 1 );

```

### Variable Partial Contributions

**语法:** obj &lt;&lt; Variable Partial Contributions( state=0|1 )

**说明:** 显示或隐藏包含变量的部分贡献的表，以及前三个主成分的部分贡献的图。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Variable Partial Contributions( 1 );

```

### Variable Squared Cosines

**语法:** obj &lt;&lt; Variable Squared Cosines( state=0|1 )

**说明:** 显示或隐藏包含变量的平方余弦的表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Wine Sensory Data.jmp" );
obj = dt << Multiple Factor Analysis(
	MFA Blocks(
		{"Carolyn Peppery etc.", :Carolyn Peppery, :Carolyn Tannic, :Carolyn Aromatic,
		:Carolyn Berry Notes},
		{"Susan Fruity etc.", :Susan Fruity, :Susan Flowery, :Susan Spicy, :Susan Crispness}
	)
);
obj << Variable Squared Cosines( 1 );

```

