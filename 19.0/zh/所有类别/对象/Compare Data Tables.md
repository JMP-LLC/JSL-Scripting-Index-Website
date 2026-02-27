# Compare Data Tables



## 关联的构造器

### Compare Data Tables

**语法:** Compare Data Tables( &lt;Compare with( Data Table( name ))&gt;, &lt;show window(0 | 1)&gt;, &lt;limit(integer)&gt;, &lt;Compare table properties(0 | 1)&gt;, &lt;Compare column attributes and properties(0 | 1)&gt;, &lt;Compare data(0 | 1)&gt;, &lt;Fuzzy compare( &lt;0 | 1&gt;, &lt;Relative Error(number)&gt;)&gt;, &lt;Show difference summary(0 | 1)&gt;, &lt;Show difference plot(0 | 1)&gt; )

**说明:** 比较两个打开的数据表和数据之间的报表差异，以及元数据。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );

```

## 项消息

### Are Data Different

**语法:** obj &lt;&lt; Are Data Different

**说明:** 根据两个表中的数据是否相同返回 true 或 false。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
how = (obj << Are Data Different);

```

### Auto compare

**语法:** Auto Compare(0|1)

**说明:** 只要任何设置发生更改即执行比较

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Auto Compare( 1 );

```

### Close

**语法:** obj &lt;&lt; Close

**说明:** 关闭“比较数据表”对象

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << close;

```

### Compare

**语法:** Compare()

**说明:** 立即执行比较

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Compare();

```

### Compare Column Attributes and Properties

**语法:** obj &lt;&lt; Compare Column Attributes and Properties( state=0|1 )

**说明:** 设置或清除用于比较列特性和属性的标志。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare column attributes and properties( 1 );

```

### Compare Data

**语法:** obj &lt;&lt; Compare Data( state=0|1 )

**说明:** 设置或清除用于比较列数据的标志。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare data( 0 );

```

### Compare Table Properties

**语法:** obj &lt;&lt; Compare Table Properties( state=0|1 )

**说明:** 设置或清除用于比较表变量和脚本的标志。 默认开启。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << compare table properties;

```

### Compare With

**语法:** obj &lt;&lt; Compare With( Data Table( name ) )

**说明:** 将第一个表与该表进行比较。返回 True 或 False。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
obj = dt << Compare Data Tables();
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
same = obj << compare with( dt2 );

```

### Copy Script

**语法:** obj &lt;&lt; Copy Script

**说明:** 将“比较数据表”脚本置于剪贴板中。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Copy Script;

```

### Fuzzy Compare

**语法:** obj &lt;&lt; Fuzzy Compare( &lt;(state= 1 | 0)&gt;, &lt;Relative Error (number)&gt; )

**说明:** 设置或清除用于比较列数据的标志。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << fuzzy compare( relative error( 0.0001 ) );

```

### Get column attributes differences

**语法:** obj &lt;&lt; Get column attributes differences( columns( column) )

**说明:** 获取比较列中存在差异的列特性的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
attribDiff = (obj << Get columns attributes differences( :name ));

```

### Get column properties differences

**语法:** obj &lt;&lt; Get column properties differences( columns( column) )

**说明:** 获取比较列中存在差异的列属性的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
propDiff = (obj << Get columns properties differences( :name ));

```

### Get columns list

**语法:** obj &lt;&lt; Get columns list( ( &lt;differed in data&gt; | &lt;differed in properties&gt; | &lt;mismatched data type&gt; | &lt;differed in attributes&gt;) )

**说明:** 获取在数据、列属性、数据类型或其他列特性方面存在差异的列的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get columns list( differed in attributes ));
Show( colDiff );

```

### Get difference summary matrix

**语法:** obj &lt;&lt; Get difference summary matrix

**说明:** 以矩阵方式获取差异汇总。矩阵列对应于差异汇总中的列。第一列操作在矩阵中分别用 -1 表示删除，0 表示替换，1 表示添加。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
mtx = (obj << Get Difference Summary matrix);

```

### Get table scripts difference list

**语法:** obj &lt;&lt; Get table scripts difference list

**说明:** 获取存在差异或缺失的表脚本的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
scriptDiff = (obj << Get table scripts difference list);

```

### Get table variables difference list

**语法:** obj &lt;&lt; Get table variables difference list

**说明:** 获取存在差异或缺失的表变量的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
tvdiff = (obj << Get table variables difference list);

```

### Get unmatched columns list

**语法:** obj &lt;&lt; Get unmatched columns list

**说明:** 获取不匹配列（即没有要比较的对应列）的列表。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
colDiff = (obj << Get unmatched columns list);

```

### Hide column properties with no differences

**语法:** Hide column properties with no differences(0|1)

**说明:** 隐藏比较列属性时相同的属性。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide column properties with no differences( 0 );

```

### Hide columns with no differences

**语法:** Hide columns with no differences(0|1)

**说明:** 隐藏比较表数据时相同的列。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide columns with no differences( 0 );

```

### Hide rows with no differences

**语法:** Hide rows with no differences(0|1)

**说明:** 隐藏比较表数据时相同的行。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide rows with no differences( 0 );

```

### Hide table properties with no differences

**语法:** Hide table properties with no differences(0|1)

**说明:** 隐藏比较表元数据时相同的项。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Hide table properties with no differences( 0 );

```

### Ignore case

**语法:** Ignore Case(0|1)

**说明:** 数据比较期间忽略字符大小写

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Case( 1 );

```

### Ignore missing

**语法:** Ignore Missing(0|1)

**说明:** 数据比较期间忽略缺失值

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Missing( 1 );

```

### Ignore whitespace

**语法:** Ignore Whitespce(0|1)

**说明:** 数据比较期间忽略空格字符

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Ignore Whitespace( 1 );

```

### Limit

**语法:** obj &lt;&lt; Limit( integer )

**说明:** 设置差异数限值。达到限值后比较将停止。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << limit( 100 );

```

### Link

**语法:** Link({"col1", "col2", &lt;ID(0|1)&gt;, &lt;No Compare(0|1)&gt;, &lt;Fuzzy Compare(&lt;Ignore Case(0|1)&gt;, &lt;Ignore Whitespace(0|1)&gt;, &lt;Ignore Missing(0|1)&gt;, &lt;Relative Error(&lt;amount&gt;)&gt;)&gt;

**说明:** 指定要比较的列对和其他比较选项。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Link( {:age, :weight}, );

```

### Relative Error

**语法:** obj &lt;&lt; Relative Error( integer )

**说明:** 设置模糊比较的相对误差。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Relative Error( 0.00001 );

```

### Report

**语法:** obj &lt;&lt; Report

**说明:** 返回对该报表对象的引用。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
r = obj << Report;
t = r[Outline Box( 1 )] << Get Title;
Show( t );

```

### Row Alignment

**语法:** obj &lt;&lt; Row Alignment (Flexible by Row|By Row|Use ID Columns)

**说明:** 设置如何对齐行进行比较。

按行灵活: 通过跳过不匹配的行块，尝试按顺序查找尽可能多的匹配行。

按行: 按行号比较每行。

使用 ID 列: 指定的 ID 列用于为每行创建一个键。该键用于匹配行。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Row Alignment( "By Row" );

```

### Save Difference Summary

**语法:** obj &lt;&lt; Save Difference Summary( &lt;invisible(0 | 1)&gt; )

**说明:** 在数据表中保存差异汇总。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
summaryDT = (obj << save difference summary( invisible ));

```

### Save Script to Data Table

**语法:** obj &lt;&lt; Save Script to Data Table

**说明:** 将“比较数据表”脚本另存为数据表中的表属性。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Data Table;

```

### Save Script to Journal

**语法:** obj &lt;&lt; Save Script to Journal

**说明:** 添加指向包含“比较数据表”脚本的记录的按钮。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Journal;

```

### Save Script to Script Window

**语法:** obj &lt;&lt; Save Script to Script Window

**说明:** 将“比较数据表”脚本追加至当前“脚本”文本窗口。

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Save Script to Script Window;

```

### Show Window

**语法:** obj &lt;&lt; Show Window( Show window( 0|1) )

**说明:** 显示或隐藏“比较数据表”的窗口

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << show window( 1 );

```

### Show fuzzy differences

**语法:** Show Fuzzy Differences(0|1)

**说明:** 突出显示数据比较中只是因为模糊比较设置才相等的值的差异

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Show Fuzzy Differences( 1 );

```

### Unlink

**语法:** Unlink(&lt;column name 1&gt;, &lt;column name 2&gt;)

**说明:** 删除列比较。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink( {"a", "b"} );

```

### Unlink All

**语法:** Unlink All

**说明:** 删除所有列比较。

**JMP添加的版本:** 16

```jsl

dt = Open( "$SAMPLE_DATA/Students1.jmp" );
dt2 = Open( "$SAMPLE_DATA/Students2.jmp" );
obj = dt << Compare Data Tables( compare With( Data Table( "Students2" ) ) );
obj << Unlink All;

```

