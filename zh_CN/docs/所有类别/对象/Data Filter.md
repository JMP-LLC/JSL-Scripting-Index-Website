# Data Filter



## 关联的构造器

### Data Filter

**语法:** Data Filter( &lt;local&gt;, &lt;invisible&gt;, &lt;Add Filter&gt;, &lt;Mode&gt;, &lt;Show Window(0 | 1)&gt;, &lt;no outline box(0 | 1)&gt; )

**说明:** 创建或显示“数据过滤器”，您可以在其中以交互方式选择复杂的数据子集。Mode 选项确定受过滤器中的选择影响的行状态。Add Filter 命令将添加具有指定 Columns 和 Where 子句的过滤器组。当存在多个过滤器组时，组合行为由 Group By AND 选项确定。若指定了 Local 关键字，则过滤器可以嵌入在报表中以过滤一个或多个平台但不影响其他报表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## 列

### Add Filter Columns

**语法:** obj &lt;&lt; Add Filter Columns( Add Filter Columns( column ) )

**说明:** 添加一个或多个过滤器列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter Columns( :State );

```

### Filter Column

**语法:** obj &lt;&lt; Filter Column( column(s) )

**说明:** 添加过滤器列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Filter Column( :State );

```

### Filter Columns

**语法:** obj &lt;&lt; Filter Columns( column(s) )

**说明:** 添加一个或多个过滤器列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Filter Columns( :State, :OZONE );

```

### Filter Group

**语法:** obj &lt;&lt; Filter Group( column(s) )

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);

```

## 项消息

### Add Favorites

**语法:** obj &lt;&lt; Add Favorites( name or string )

**说明:** 将当前过滤器选择与给定名称相关联，并保存至收藏夹列表

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites( "FemaleAverageHt" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter( columns( :age, :sex, :height, :weight ), Where( :sex == "F" ) ),
	Mode( Select )
);
Wait( 1 );
fav1 = df << add favorites();
Show( fav1 );

```

### Add Filter

**语法:** obj &lt;&lt; Add Filter( columns( column, ... ), &lt;Where( clause )&gt; )

**说明:** 在新的“或”组中添加一个或多个过滤器列。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter();
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);

```

### Animation

**语法:** obj &lt;&lt; Animation( &lt;Animate Column( column )&gt;, &lt;Animate Rate( number )&gt;, &lt;Forward|Backward|Bounce&gt; )

**说明:** 循环通过指定列的排序值以选择和取消选择行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region );
obj << Animation( Animate Column( :Region ), Bounce );
//Now press the play button.

```

### Apply Favorites

**语法:** obj &lt;&lt; Apply Favorites( name or string )

**说明:** 将保存在命名收藏夹中的过滤器选择应用于数据过滤。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
a = "FemaleAverageHt";
b = "Female";
df << add favorites( a );
df << Match( Where( :sex == "F" ) );
df << add favorites( b );
Wait( 1 );
df << apply favorites( "FemaleAverageHt" );

```

### Auto clear

**语法:** obj &lt;&lt; Auto clear( state=0|1 )

**说明:** 过滤时先清除所有当前选定的行，然后进行新的选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
obj << Auto Clear( 1 );
obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
Wait( 1 );
obj << (filter column( :sex ) << Where( :sex == "M" ));

```

### Clear

**语法:** obj &lt;&lt; Clear

**说明:** 清除当前选定的行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
Wait( 1 );
obj << Clear;

```

### Clear Selection

**语法:** obj &lt;&lt; Clear Selection

**说明:** 清除该列过滤器的选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Clear Selection);

```

### Close

**语法:** obj &lt;&lt; Close

**说明:** 关闭数据过滤器。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Close;

```

### Conditional

**语法:** obj &lt;&lt; Conditional( state=0|1 )

**说明:** 该选项标记分类列过滤器是否按条件排序。选择一个类别将把下一个列过滤器的类别限制在仅所选类别中的类别。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/SATByYear.jmp" );
obj = dt << Data Filter( Add Filter( columns( :Region, :State ) ) );
obj << (Filter Column( :Region ) << Where( :Region == {"South"} ));
Wait( 1 );
obj << conditional( 1 );

```

### Copy Local Data Filter

**语法:** obj &lt;&lt; Copy Local Data Filter

**说明:** 将本地数据过滤器的脚本复制到剪贴板。

**JMP添加的版本:** 16

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

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 创建 JSL 脚本以生成过滤窗口，并将该脚本置于剪贴板中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Copy Script;

```

### Count Excluded Rows

**语法:** obj &lt;&lt; Count Excluded Rows( state=0|1 )

**说明:** 若清除该选项，则数据过滤器中的列值和计数将不包括数据表中具有已排除行状态的行。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
Distribution(
	Automatic Recalc( 1 ),
	Continuous Distribution( Column( :weight ) ),
	Local Data Filter(
		Count Excluded Rows( 0 ),
		Add Filter( columns( :age ), Where( :age == 12 ) )
	)
);

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
dt << Data Filter(
	Mode( Select( 0 ), Show( 1 ), Include( 1 ) ),
	Add Filter( columns( :sex ), Where( :sex == "F" ) )
);
New Window( "Hierarchical Data Filter",
	V List Box(
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 1 = dt << Data Filter(
					Local,
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		),
		Data Filter Context Box(
			H List Box(
				Filter Ref Sub 2 = dt << Data Filter(
					Local,
					Count Excluded Rows( 0 ),
					Add Filter( columns( :age ), Where( :age == 12 ) )
				),
				Platform( Current Data Table(), Distribution( Column( :weight ) ) )
			)
		)
	)
);

```

### Data Table Window

**语法:** obj &lt;&lt; Data Table Window

**说明:** 显示用于该过滤对话框的数据表。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Data Table Window;

```

### Delete

**语法:** obj &lt;&lt; Delete( {column(s)} )

**说明:** 删除数据过滤器中现有过滤器指定的列。

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << Delete( {:State} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 1 );
obj << (Filter Column( :State ) << delete);

```

### Delete All

**语法:** obj &lt;&lt; Delete All

**说明:** 删除数据过滤器中的所有现有过滤器。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );
Wait( 2 );
obj << Delete All;

```

### Display

**语法:** obj &lt;&lt; Display( column, &lt;Invisible(0 | 1)&gt;, &lt;options&gt; )

**说明:** 更改列水平在过滤器中显示的方式。分类列支持显示类型选项“区组显示”、“列表显示”、“单一类别显示”、“复选框显示”或“单选框显示”。选项 NItems(n) 将设置可滚动视图中可见项的个数。连续列支持选项 NBins(n) 和 Height(h)。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Display( :Region, N Items( 4 ) );

```

### Extend Where

**语法:** obj &lt;&lt; Extend Where

**说明:** 基于该列过滤器的指定条件扩大选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << Extend Where( :Region = "W" ));

```

### Get Data Table

**语法:** obj &lt;&lt; Get Data Table

**说明:** 返回与过滤器关联的数据表。

**JMP添加的版本:** 17

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Data Table();

```

### Get Filter Column

**语法:** obj &lt;&lt; Get Filter Column( column, &lt;index&gt; )

**说明:** 返回命名列的过滤器列对象。若相同的列使用了多次，则 index 参数将返回指定的发生次数

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionfilter = obj << Get Filter Column( :Region );
regionfilter << Invert Selection;

```

### Get Filtered Rows

**语法:** obj &lt;&lt; Get Filtered Rows

**说明:** 返回满足当前过滤条件的行号矩阵。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Get Filtered Rows;

```

### Get Script

**语法:** obj &lt;&lt; Get Script

**说明:** 以文本形式获取数据过滤器脚本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
txt = obj << Get Script;
Show( txt );

```

### Get where clause

**语法:** obj &lt;&lt; Get where clause

**说明:** 获取过滤器选择的说明性文本。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));
txt = obj << get where clause;

```

### Grouped by AND

**语法:** obj &lt;&lt; Grouped by AND( state=0|1 )

**说明:** 通过“与”连接各组过滤器项

### Inverse

**语法:** obj &lt;&lt; Inverse( state=0|1 )

**说明:** 反转数据表中行的当前选择状态。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Inverse( 1 );

```

### Invert Selection

**语法:** obj &lt;&lt; Invert Selection

**说明:** 反转该列过滤器的选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region ), Where( :Region = {"N", "S"} ) ) );
Wait( 1 );
obj << (Filter Column( :Region ) << invert selection);

```

### Make Filter Change Handler

**语法:** rs = df &lt;&lt; Make Filter Change Handler(function(a) );

**说明:** 创建数据过滤器处理程序以处理过滤器发生更改的通知。过滤的行数在函数的参数中返回。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
dist = Distribution( Automatic Recalc( 1 ), Continuous Distribution( Column( :POP ) ) );
filter = dist << Local Data Filter( Add Filter( columns( :Region ) ) );
f = Function( {a}, Print( a ) );
rs = filter << Make Filter Change Handler( f );

```

### Match

**语法:** obj &lt;&lt; Match( Filter Columns(:a, :b, :c, ...), where( conditions ) )

**说明:** 设置各组的过滤条件。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Blood Pressure.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :BP 8W, :BP 6M ) ),
	Add Filter( columns( :BP 12M ) )
);
Wait( 1 );
obj << Match( Filter Columns( :BP 8W, :BP 6M ), Where( :BP 8W > 174.8 & :BP 8W < 184.2 ) );
obj << Match( Filter Columns( :BP 12M ), Where( :BP 12M > 181.9 & :BP 12M < 192.1 ) );

```

### Mode

**语法:** obj &lt;&lt; Mode( Select|Show|Include (state = 0|1) )

**说明:** 设置通过数据过滤器选择行时使用的操作或模式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );

```

### On Clear

**语法:** obj &lt;&lt; On Clear

**说明:** 设置清除过滤器之后要执行的脚本或函数。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter;
df = obj << Add Filter( columns( :age, :sex ), Where( :age == {13, 14} ) );
obj << OnClear( Function( {}, df << Mode( Include( 0 ), Select( 1 ), Show( 0 ) ) ) );
Wait( 1 );
df << Mode( Include( 1 ), Select( 0 ), Show( 0 ) );

```

### Remove Favorites

**语法:** obj &lt;&lt; Remove Favorites( name or string )

**说明:** 从收藏夹列表中删除命名的收藏夹

**示例 1**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites( "FemaleAverageHt" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
df = dt << Data Filter(
	Add Filter(
		columns( :age, :sex, :height, :weight ),
		Where( :sex == "F" ),
		Where( :height >= 55 & :height <= 65 )
	),
	Mode( Select )
);
df << add favorites( "FemaleAverageHt" );
df << Match( Where( :sex == "F" ) );
df << add favorites( "Female" );
Wait( 1 );
df << remove favorites();

```

### Report

**语法:** obj &lt;&lt; Report

**说明:** 返回对该报表对象的引用。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Add Filter( columns( :POP ) );
obj << Add Filter(
	columns( :Region, :State, :City ),
	Where( :Region == "S" ),
	Where( :State == {"SC", "NC"} )
);
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Save Script to Data Table

**语法:** obj &lt;&lt; Save Script to Data Table

**说明:** 创建 JSL 脚本以生成过滤窗口，并将该脚本作为表属性保存到数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Data Table;

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 创建 JSL 脚本以生成过滤窗口，并将一个按钮添加至包含该脚本的记录中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Journal;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 创建 JSL 脚本以生成过滤窗口，并将该脚本追加至当前脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Save Script to Script Window;

```

### Save Where Clause to Clipboard

**语法:** obj &lt;&lt; Save Where Clause to Clipboard

**说明:** 根据过滤条件创建 Where 子句，并将其置于剪贴板中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Clipboard;

```

### Save Where Clause to Data Table

**语法:** obj &lt;&lt; Save Where Clause to Data Table

**说明:** 根据过滤条件创建 Where 子句，并将其作为表属性保存到数据表中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Data Table;

```

### Save Where Clause to Formula Column

**语法:** obj &lt;&lt; Save Where Clause to Formula Column

**说明:** 创建一个指示符列，它具有等价于过滤条件的公式。满足过滤条件的行具有值 1，所有其他行具有值 0。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Formula Column;

```

### Save Where Clause to Journal

**语法:** obj &lt;&lt; Save Where Clause to Journal

**说明:** 根据过滤条件创建 Where 子句，并将其追加至记录。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Journal;

```

### Save Where Clause to Row State Column

**语法:** obj &lt;&lt; Save Where Clause to Row State Column

**说明:** 创建一个行状态列，其包含的公式等价于过滤条件。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Row State Column;

```

### Save Where Clause to Script Window

**语法:** obj &lt;&lt; Save Where Clause to Script Window

**说明:** 根据过滤条件创建 Where 子句，并将其追加至当前脚本文本窗口中。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Lead ), Where( :Lead >= .4 & :Lead <= 2.0 ) );
obj << Save Where Clause To Script Window;

```

### Save and restore current row states

**语法:** obj &lt;&lt; Save and restore current row states( state=0|1 )

**说明:** 保存数据表的当前行状态，然后在关闭数据过滤器时恢复这些状态。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Save and Restore Current Row States( 1 ),
	Add Filter( Columns( :Region ), Where( :Region == "N" ) )
);
Wait( 1 );
obj << Close;

```

### Select Missing

**语法:** obj &lt;&lt; Select Missing( state=0|1 )

**说明:** 将缺失行添加至该连续列过滤器的选择。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :CO ), Where( :CO >= 9 & :CO < 15 ) ) );
Wait( 1 );
obj << (Filter Column( :CO ) << Select Missing);

```

### Set Include

**语法:** obj &lt;&lt; Set Include( state=0|1 )

**说明:** 选中或取消选中包括模式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Include( 1 );
Wait( 1 );
obj << set Include( 0 );

```

### Set Select

**语法:** obj &lt;&lt; Set Select( state=0|1 )

**说明:** 选中或取消选中选择模式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set select( 1 );
Wait( 1 );
obj << set select( 0 );

```

### Set Show

**语法:** obj &lt;&lt; Set Show( state=0|1 )

**说明:** 选中或取消选中显示模式。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
obj = dt << Data Filter( Add Filter( columns( :age, :sex ) ) );
obj << set Show( 1 );
Wait( 1 );
obj << set Show( 0 );

```

### Show Controls

**语法:** obj &lt;&lt; Show Controls( state=0|1 )

**说明:** 显示或隐藏用于修改数据过滤器选项的控件。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Controls( 0 );

```

### Show Counts

**语法:** obj &lt;&lt; Show Counts( state=0|1 )

**JMP添加的版本:** 16

### Show Histograms and Bars

**语法:** obj &lt;&lt; Show Histograms and Bars( state=0|1 )

**说明:** Show Histograms and Bars for filter columns where available

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) )
);
Wait( 1 );
obj << Show Histograms and Bars( 0 );

```

### Show Modes

**语法:** obj &lt;&lt; Show Modes( state=0|1 )

**说明:** 显示或隐藏用于更改数据过滤器模式的控件，它控制数据过滤器的选择/显示/包括行为。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
obj << Show Modes( 0 );

```

### Show Subset

**语法:** obj &lt;&lt; Show Subset

**说明:** 在单独的数据表窗口中显示过滤数据。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Add Filter( Columns( :Region ), Where( :Region == "N" ) );
obj << Show Subset;

```

### Stretch Width

**语法:** obj &lt;&lt; Stretch Width( "Manual" | "Window" )

**说明:** 设置过滤器的水平拉伸行为。默认情况下，可以手动更改过滤器宽度。若设置为“窗口”，则宽度会随窗口大小变得更大或更小。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" );
New Window( "Shared Local Filter",
	Data Filter Context Box(
		H Splitter Box(
			Size( 1200, 500 ),
			V Scroll Box(
				dt << Data Filter(
					Local,
					Stretch Width( "Window" ),
					Add Filter( columns( :sex ), Where( :sex == "F" ) )
				),
				<<Set Stretch( "Off", "Fill" )
			),
			H Splitter Box(
				dt << Bubble Plot(
					X( :weight ),
					Y( :height ),
					Fit To Window( "On" ),
					Sizes( :age ),
					Title Position( 0, 0 )
				),
				dt << Graph Builder(
					Size( 525, 456 ),
					Show Control Panel( 0 ),
					Fit To Window( "On" ),
					Variables( X( :weight ), Y( :age ) ),
					Elements( Box Plot( X, Y, Legend( 4 ) ) ),

				),

			)
		)
	)
);

```

### Title

**语法:** obj &lt;&lt; Title

### Unstructured Text

**语法:** obj &lt;&lt; Unstructured Text

**JMP添加的版本:** 16

### Use Floating Window

**语法:** obj &lt;&lt; Use Floating Window( state=0|1 )

**说明:** 切换该过滤器窗口，使其在其数据表及相关窗口上浮动，或使用可与其他窗口并排的窗口。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter;
obj << Use Floating Window;

```

### Where

**语法:** obj &lt;&lt; Where

**说明:** 基于该列过滤器的指定条件选择行。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter( Add( Filter Columns( :Region, :Lead ) ) );
Wait( 1 );
obj << (Filter Column( :Lead ) << Where( :Lead >= .4 & :Lead <= 1.4 ));

```

### columns

**语法:** obj &lt;&lt; columns( columns )

**说明:** 添加过滤器列。它是另一个用于添加过滤器列的命令。

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
obj << Columns( :Region, :SO2, :CO, :State );

```

## Categorical Filter

### 项消息

#### Blocks Display

**语法:** obj &lt;&lt; Blocks Display( state=0|1 )

**说明:** 将每个水平显示为可选择的块。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**语法:** obj &lt;&lt; Check Box Display( state=0|1 )

**说明:** 用复选框显示每个水平，以及频数计数和直条。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**语法:** obj &lt;&lt; Clear Find

**JMP添加的版本:** 15

#### Clear Selection

**语法:** obj &lt;&lt; Clear Selection

**说明:** 清除对于给定列有效的任何选择。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**语法:** obj &lt;&lt; Continuous( state=0|1 )

**JMP添加的版本:** 16

#### Delete

**语法:** obj &lt;&lt; Delete

**说明:** 从“数据过滤器”控制面板中删除变量。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**语法:** obj &lt;&lt; Extend Where

**说明:** 使用表达式选择行，从而添加至当前选择中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**语法:** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**说明:** 提供一个文本框，您可以在其中为选定列输入搜索字符串。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**语法:** obj &lt;&lt; Get Selected Items

**JMP添加的版本:** 15

#### Get Visible Items

**语法:** obj &lt;&lt; Get Visible Items

**JMP添加的版本:** 19

#### Invert Selection

**语法:** obj &lt;&lt; Invert Selection

**说明:** 对于给定列，取消选择任何选定值并选择以前未选定的所有值。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**语法:** obj &lt;&lt; List Display( state=0|1 )

**说明:** 在列表中显示每个水平，以及频数计数和直条。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Multiple Response

**语法:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP添加的版本:** 16

#### Nominal/Ordinal

**语法:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP添加的版本:** 16

#### Order By Count

**语法:** obj &lt;&lt; Order By Count( state=0|1 )

**说明:** 按计数的降序对值排序。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**语法:** obj &lt;&lt; Radio Box Display( state=0|1 )

**说明:** 用单选框显示每个水平，以及频数计数和直条。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**语法:** obj &lt;&lt; Select Filter Item

**说明:** 选择给定过滤器项。选择的过滤器用作当前动画对象。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**语法:** obj &lt;&lt; Single Category Display( state=0|1 )

**说明:** 在组合框菜单中显示每个水平和频数计数。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**语法:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP添加的版本:** 16

#### Where

**语法:** obj &lt;&lt; Where

**说明:** 使用表达式选择行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Continuous Filter

### 项消息

#### Clear Selection

**语法:** obj &lt;&lt; Clear Selection

**说明:** 清除对于给定列有效的任何选择。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**语法:** obj &lt;&lt; Continuous( state=0|1 )

**JMP添加的版本:** 16

#### Delete

**语法:** obj &lt;&lt; Delete

**说明:** 从“数据过滤器”控制面板中删除变量。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**语法:** obj &lt;&lt; Extend Where

**说明:** 使用表达式选择行，从而添加至当前选择中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Invert Selection

**语法:** obj &lt;&lt; Invert Selection

**说明:** 对于给定列，取消选择任何选定值并选择以前未选定的所有值。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### Multiple Response

**语法:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP添加的版本:** 16

#### Nominal/Ordinal

**语法:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP添加的版本:** 16

#### Reset Zoom

**语法:** obj &lt;&lt; Reset Zoom

**说明:** 将过滤器显示的最小值和最大值重置为默认值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
fc << Zoom to Selection;
Wait( 1 );
fc << Reset Zoom;

```

#### Select Filter Item

**语法:** obj &lt;&lt; Select Filter Item

**说明:** 选择给定过滤器项。选择的过滤器用作当前动画对象。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Select Missing

**语法:** obj &lt;&lt; Select Missing

**说明:** 选择包含缺失值的行。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Location( {2098, 120} ),
	Mode( Select( 0 ), Include( 1 ) ),
	Add Filter( columns( :OZONE ), Where( :OZONE >= 0.1 & :OZONE <= 0.2 ) )
);
Wait( 1 );
ozoneobj = obj << Get Filter Column( :OZONE );
ozoneobj << Select Missing;

```

#### Unstructured Text

**语法:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP添加的版本:** 16

#### Where

**语法:** obj &lt;&lt; Where

**说明:** 使用表达式选择行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

#### Zoom to Selection

**语法:** obj &lt;&lt; Zoom to Selection

**说明:** 基于当前选择的区间来设置过滤器显示的最小值和最大值。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Time Series/Air.jmp" );
gb = dt << Graph Builder(
	Size( 522, 492 ),
	Show Control Panel( 0 ),
	Variables(
		X( :month ),
		Y( :Ozone Concentration ),
		Group X( :Summer Months Intervention )
	),
	Elements( Points( X, Y, Legend( 10 ) ), Smoother( X, Y, Legend( 11 ) ) ), 
    
);
ldf = gb << Local Data Filter(
	Add Filter( columns( :date ), Where( :date >= 16Oct1965 & :date <= 31Aug1968 ) )
);
fc = ldf << Get Filter Column( :date );
Wait( 1 );
fc << Zoom to Selection;

```

## Multiple Response Filter

### 项消息

#### Blocks Display

**语法:** obj &lt;&lt; Blocks Display( state=0|1 )

**说明:** 将每个水平显示为可选择的块。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**语法:** obj &lt;&lt; Check Box Display( state=0|1 )

**说明:** 用复选框显示每个水平，以及频数计数和直条。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Find

**语法:** obj &lt;&lt; Clear Find

**JMP添加的版本:** 15

#### Clear Selection

**语法:** obj &lt;&lt; Clear Selection

**说明:** 清除对于给定列有效的任何选择。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**语法:** obj &lt;&lt; Continuous( state=0|1 )

**JMP添加的版本:** 16

#### Delete

**语法:** obj &lt;&lt; Delete

**说明:** 从“数据过滤器”控制面板中删除变量。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**语法:** obj &lt;&lt; Extend Where

**说明:** 使用表达式选择行，从而添加至当前选择中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Find

**语法:** obj &lt;&lt; Find(Set Text("string"), &lt;options&gt;)

**说明:** 提供一个文本框，您可以在其中为选定列输入搜索字符串。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Find( Set Text( "w" ) );

```

#### Get Selected Items

**语法:** obj &lt;&lt; Get Selected Items

**JMP添加的版本:** 15

#### Get Visible Items

**语法:** obj &lt;&lt; Get Visible Items

**JMP添加的版本:** 19

#### Invert Selection

**语法:** obj &lt;&lt; Invert Selection

**说明:** 对于给定列，取消选择任何选定值并选择以前未选定的所有值。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**语法:** obj &lt;&lt; List Display( state=0|1 )

**说明:** 在列表中显示每个水平，以及频数计数和直条。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**语法:** obj &lt;&lt; Match All

**说明:** 选择其值与所有选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**语法:** obj &lt;&lt; Match Any

**说明:** 选择其值与任意选中值匹配的行。默认情况下，该选项是选中的。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**语法:** dfitem &lt;&lt; Match At Least(n);

**说明:** 选择其值与至少 n 个选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**语法:** dfitem &lt;&lt; Match At Most(n);

**说明:** 选择其值与至多 n 个选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**语法:** dfitem &lt;&lt; Match Between(n, m);

**说明:** 选择其值与 n 至 m 个选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**语法:** obj &lt;&lt; Match Exactly

**说明:** 选择其值与选中值精确匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**语法:** obj &lt;&lt; Match None

**说明:** 选择其值与选中值均不匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**语法:** obj &lt;&lt; Match Only

**说明:** 选择其值仅与选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**语法:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP添加的版本:** 16

#### Nominal/Ordinal

**语法:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP添加的版本:** 16

#### Order By Count

**语法:** obj &lt;&lt; Order By Count( state=0|1 )

**说明:** 按计数的降序对值排序。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**语法:** obj &lt;&lt; Radio Box Display( state=0|1 )

**说明:** 用单选框显示每个水平，以及频数计数和直条。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**语法:** obj &lt;&lt; Select Filter Item

**说明:** 选择给定过滤器项。选择的过滤器用作当前动画对象。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Single Category Display

**语法:** obj &lt;&lt; Single Category Display( state=0|1 )

**说明:** 在组合框菜单中显示每个水平和频数计数。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**语法:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP添加的版本:** 16

#### Where

**语法:** obj &lt;&lt; Where

**说明:** 使用表达式选择行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

## Unstructured Text Filter

### 项消息

#### Add Missing

**语法:** obj &lt;&lt; Add Missing

**说明:** 添加缺失值作为非结构化文本的可选择选项。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Add Missing;

```

#### Blocks Display

**语法:** obj &lt;&lt; Blocks Display( state=0|1 )

**说明:** 将每个水平显示为可选择的块。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Blocks Display;

```

#### Check Box Display

**语法:** obj &lt;&lt; Check Box Display( state=0|1 )

**说明:** 用复选框显示每个水平，以及频数计数和直条。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Check Box Display;

```

#### Clear Filter Texts List

**语法:** obj &lt;&lt; Clear Filter Texts List

**说明:** 清除非结构化文本过滤器项的过滤器列表。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Clear Filter Texts List;

```

#### Clear Selection

**语法:** obj &lt;&lt; Clear Selection

**说明:** 清除对于给定列有效的任何选择。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Clear Selection;

```

#### Continuous

**语法:** obj &lt;&lt; Continuous( state=0|1 )

**JMP添加的版本:** 16

#### Delete

**语法:** obj &lt;&lt; Delete

**说明:** 从“数据过滤器”控制面板中删除变量。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Delete;

```

#### Extend Where

**语法:** obj &lt;&lt; Extend Where

**说明:** 使用表达式选择行，从而添加至当前选择中。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Extend Where( :Region == {"MW"} );

```

#### Get Selected Items

**语法:** obj &lt;&lt; Get Selected Items

**JMP添加的版本:** 15

#### Get Visible Items

**语法:** obj &lt;&lt; Get Visible Items

**JMP添加的版本:** 19

#### Invert Selection

**语法:** obj &lt;&lt; Invert Selection

**说明:** 对于给定列，取消选择任何选定值并选择以前未选定的所有值。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Invert Selection;

```

#### List Display

**语法:** obj &lt;&lt; List Display( state=0|1 )

**说明:** 在列表中显示每个水平，以及频数计数和直条。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "Check Box Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << List Display;

```

#### Match All

**语法:** obj &lt;&lt; Match All

**说明:** 选择其值与所有选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match All;

```

#### Match Any

**语法:** obj &lt;&lt; Match Any

**说明:** 选择其值与任意选中值匹配的行。默认情况下，该选项是选中的。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Any;

```

#### Match At Least

**语法:** dfitem &lt;&lt; Match At Least(n);

**说明:** 选择其值与至少 n 个选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Least( 1 );

```

#### Match At Most

**语法:** dfitem &lt;&lt; Match At Most(n);

**说明:** 选择其值与至多 n 个选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match At Most( 1 );

```

#### Match Between

**语法:** dfitem &lt;&lt; Match Between(n, m);

**说明:** 选择其值与 n 至 m 个选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Between( 1, 2 );

```

#### Match Exactly

**语法:** obj &lt;&lt; Match Exactly

**说明:** 选择其值与选中值精确匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Exactly;

```

#### Match None

**语法:** obj &lt;&lt; Match None

**说明:** 选择其值与选中值均不匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match None;

```

#### Match Only

**语法:** obj &lt;&lt; Match Only

**说明:** 选择其值仅与选中值匹配的行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = dt << Data Filter(
	Add Filter(
		columns( :Sports ),
		Match Any( Where( :sports == {"Basketball", "Tennis"} ) )
	),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
sportsobj = obj << Get Filter Column( :Sports );
sportsobj << Match Only;

```

#### Multiple Response

**语法:** obj &lt;&lt; Multiple Response( state=0|1 )

**JMP添加的版本:** 16

#### Nominal/Ordinal

**语法:** obj &lt;&lt; Nominal/Ordinal( state=0|1 )

**JMP添加的版本:** 16

#### Order By Count

**语法:** obj &lt;&lt; Order By Count( state=0|1 )

**说明:** 按计数的降序对值排序。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Order by Count;

```

#### Radio Box Display

**语法:** obj &lt;&lt; Radio Box Display( state=0|1 )

**说明:** 用单选框显示每个水平，以及频数计数和直条。

**JMP添加的版本:** 15

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Radio Box Display;

```

#### Select Filter Item

**语法:** obj &lt;&lt; Select Filter Item

**说明:** 选择给定过滤器项。选择的过滤器用作当前动画对象。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
popobj = obj << Get Filter Column( :POP );
popobj << Select Filter Item;

```

#### Show Filter Text Edit Box

**语法:** obj &lt;&lt; Show Filter Text Edit Box( state=0|1 )

**说明:** 显示或隐藏用于定义文本过滤器条件的文本编辑框。

**JMP添加的版本:** 16

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
obj = Graph Builder(
	Show Control Panel( 0 ),
	Variables( X( :sibling ages ) ),
	Elements( Bar( X, Legend( 3 ) ) )
);
df = obj << Local Data Filter(
	Add Filter(
		columns( :reported illnesses ),
		Unstructured Text( Column( :reported illnesses ), Add Filter Text( "head" ) ),
		Match Any( Where( Contains( :reported illnesses, "head" ) ) ),

	)
);
Wait( 1 );
illness_obj = df << Get Filter Column( :reported illnesses );
illness_obj << Show Filter Text Edit Box( 0 );

```

#### Single Category Display

**语法:** obj &lt;&lt; Single Category Display( state=0|1 )

**说明:** 在组合框菜单中显示每个水平和频数计数。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Display( :Region, "List Display" ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Single Category Display;

```

#### Unstructured Text

**语法:** obj &lt;&lt; Unstructured Text( state=0|1 )

**JMP添加的版本:** 16

#### Where

**语法:** obj &lt;&lt; Where

**说明:** 使用表达式选择行。

```jsl

Names Default To Here( 1 );

dt = Open( "$SAMPLE_DATA/Cities.jmp" );
obj = dt << Data Filter(
	Add Filter( columns( :Region, :POP ), Where( :Region == {"C", "N"} ) ),
	Mode( Select( 0 ), Show( 0 ), Include( 1 ) )
);
Wait( 1 );
regionobj = obj << Get Filter Column( :Region );
regionobj << Where( :Region == {"MW"} );

```

