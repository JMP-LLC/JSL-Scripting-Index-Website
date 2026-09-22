# Row



### As Table

**语法:** dt = As Table( matrix, &lt;matrix2,...&gt; &lt; &lt;&lt;invisible/private&gt;, &lt; &lt;&lt;Column Names(name list) &gt; )

**说明:** 将矩阵转换为数据表。invisible 选项用于将表设置为不显示状态。

**JMP添加的版本:** 早于版本 14

```jsl

As Table( [1 2 3, 4 5 6] );

```

### Col Stored Value

**语法:** y = Col Stored Value( &lt;dt&gt;, xCol, &lt;row=Row()&gt; )

**说明:** 返回尚未应用列属性的列值。若未指定行选项，则假定为当前行。

**JMP添加的版本:** 早于版本 14

```jsl

Open( "$SAMPLE_DATA/Equity.jmp" );:JOB << Set Property( "Missing Value Codes", {"Other"} );y1 = Col Stored Value( :JOB, 10 );y2 = Col Stored Value( :JOB, 11 );y3 = Col Stored Value( :JOB, 14 );y4 = Col Stored Value( :JOB, 15 );Show( y1, y2, y3, y4 );

```

### Column

**语法:** y = Column( name|number ); y = Column( dataTable, name|number, &lt;"formatted"&gt; )

**说明:** 返回指定数据表列的引用。关键字“formatted”允许访问带格式的数据，例如值标签。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );col4 = Column( 4 );ht = Column( "height" );col4[1] + ht[2];

```

**示例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << run script( "Set Sex Value Labels" );col = Column( dt, "sex", "formatted" );Write( "\!n", col[5] );Write( "\!nData value returned is the formatted value of row 5." );

```

### Column Name

**语法:** name = Column Name( n )

**说明:** 返回当前数据表中第 n 列的名称。

**JMP添加的版本:** 早于版本 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Column Name( 4 );

```

### Count

**语法:** y = Count( start, end, s, &lt;n=1&gt; )

**说明:** 构建一个分 s 步从 start 增长到 end 的数值序列，其中每个数字重复 n 次，然后返回序列的第 i 个值，其中 i 由 Row() 函数的值确定。Count() 函数依赖于 Row() 函数，一般用于列公式。

**JMP添加的版本:** 早于版本 14

```jsl

New Table( "Count Example",	Add Rows( 12 ),	New Column( "Count1" ),	New Column( "Count2" ),	New Column( "Count3", Set Formula( Count( 0, 6, 4, 1 ) ) ));For Each Row(	:Count1[Row()] = Count( 0, 6, 4, 1 );	:Count2[Row()] = Count( 0, 6, 3, 2 ););

```

### Current Data Table

**语法:** dt = Current Data Table( &lt;Project(title|index|box|window)&gt; ); Current Data Table( dt )

**说明:** 返回当前数据表；如已指定，则使指定数据表成为当前数据表。



要指定项目，将可选 Project() 参数与标题、索引、显示框或窗口对象一起使用。使用 Project(0) 指定当在项目中运行脚本时没有项目。

**JMP添加的版本:** 早于版本 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Current Data Table() << Get Column Names;

```

### Data Table

**语法:** dt = Data Table( name|number )

**说明:** 返回指定数据表的引用。

**JMP添加的版本:** 早于版本 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Data Table( 1 );

```

### Dif

**语法:** y = Dif( x, &lt;n=1&gt; )

**说明:** 返回 x - Lag( x, n )，也被称为“第一个差值”。Dif() 依赖于 Row()，主要用于列公式。

**JMP添加的版本:** 早于版本 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 3;Dif( :height, 2 );

```

### Dim

**语法:** y = Dim(); y = Dim( dt ); y = Dim( matrix )

**说明:** 返回由当前数据表、指定数据表或矩阵的维度构成的行向量。维度是行数和列数并以该顺序列出。

**JMP添加的版本:** 14

```jsl

Dim( [11 22, 33 44, 55 66] );

```

### Get Data Table

**语法:** dt = Get Data Table( &lt;Project(title|index|box|window)&gt;, name|index )

**说明:** 返回指定数据表的引用。



搜索限制为当前项目中的表（若项目中没有运行脚本则没有项目）。



要指定项目，将可选 Project() 参数与标题、索引、显示框或窗口对象一起使用。使用 Project(0) 指定当在项目中运行脚本时没有项目。

**JMP添加的版本:** 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Get Data Table( 1 );

```

### Get Data Table List

**语法:** tableList = Get Data Table List( &lt;Project(title|index|box|window)&gt; )

**说明:** 返回所有打开数据表的列表。



列表限制为当前项目中的表（若项目中没有运行脚本则没有项目）。



要指定项目，将可选 Project() 参数与标题、索引、显示框或窗口对象一起使用。使用 Project(0) 指定当在项目中运行脚本时没有项目。

**JMP添加的版本:** 14

**示例 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Get Data Table List();

```

**示例 2**

```jsl

project = Open( "$SAMPLE_PROJECTS/Sports.jmpprj" );Get Data Table List( Project( project ) );

```

### Lag

**语法:** y = Lag( &lt;x&gt;, &lt;n=1&gt; )

**说明:** 返回当前行设置为 Row() - n 的 x 参数的值。Lag() 依赖于 Row()，主要用于列公式。

**JMP添加的版本:** 早于版本 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 3;Lag( :height, 2 );

```

### N Row

**语法:** y = N Row(); y = N Row( dt ); y = N Row( matrix )

**说明:** 返回当前数据表、指定数据表或矩阵的行数。

**JMP添加的版本:** 早于版本 14

```jsl

N Row( [11 22, 33 44] );

```

### N Rows

**语法:** y = N Rows(); y = N Rows( dt ); y = N Rows( matrix )

**说明:** 返回当前数据表、指定数据表或矩阵的行数。

**JMP添加的版本:** 早于版本 14

```jsl

N Rows( [11 22, 33 44] );

```

### N Table

**语法:** n = N Table()

**说明:** 返回当前打开的数据表的数量。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );N Table();

```

**示例 2**

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Open( "$SAMPLE_DATA/Cars.jmp" );Open( "$SAMPLE_DATA/Solubility.jmp" );d = {};For( i = 1, i <= N Table(), i++,	d[i] = Data Table( i ) << GetName);d;

```

### New Column

**语法:** dc = New Column( name, &lt;"Numeric"|"Character"|"RowState"|"Expression"&gt;, &lt;"Continuous"|"Ordinal"|"Nominal"|"Multiple Response"|"Unstructured Text"|"Vector"|"None"&gt;, &lt;Width( n )|Format(format name, width, precision)&gt;, &lt;Like(:other column)&gt;, &lt;actions&gt; )

**说明:** 在当前数据表中创建一个新列。可选 actions 参数是数据列所支持的任何消息。

**JMP添加的版本:** 早于版本 14

#### Like

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "like name", Like( :name ) );

```

#### 简单

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );New Column( "example", "Numeric", "Continuous", Width( 5 ), <<Set Each Value( 100 ) );

```

### New Column by Text Matching

**语法:** dc = New Column by Text Matching( Column(:name), Set Regex(), &lt;Output Column Name("Name")&gt;, &lt;Use Result(0 | 1)&gt; )

**说明:** 通过对现有列执行正则表达式模式匹配来创建新列。

**JMP添加的版本:** 16

```jsl

Open( "$SAMPLE_DATA/Aircraft Incidents.jmp" );New Column by Text Matching(	Column( :Narrative Cause ),	Set Regex( Library( "Words" ), Library( "Time" ), Library( "Units" ) ),	Output Column Name( "Match Output" ),	Use Result( 1 ));

```

### New Table

**语法:** dt = New Table( name, &lt;visibility("private"|"invisible"|"visible")&gt;, &lt;Enable Filter Views(bool)&gt;, &lt;actions&gt; )

**说明:** 创建新数据表。"Invisible" 在视图中隐藏数据表，但在“JMP 主窗口”中列出它。"Private" 完全隐藏表。"Visible" 是默认值，创建可见并在“JMP 主窗口”中列出的正常表。可选 actions 参数是数据表支持的任何消息。

**JMP添加的版本:** 早于版本 14

```jsl

New Table( "Little Class",	Add Rows( 3 ),	New Column( "name", Character, Nominal, Set Values( {"KATIE", "LOUISE", "JANE"} ) ),	New Column( "age", Nominal, Set Values( [12, 13, 13] ) ),	New Column( "weight", Continuous, Set Values( [95, 123, 74] ) ));

```

### Row

**语法:** y = Row(); Row() = y

**说明:** 返回数据表中的当前行。可以将其设置为 L 值。通过指定值 0 重置当前行。

**JMP添加的版本:** 早于版本 14

#### 设置行

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Row() = 3;:height * :weight;

```

#### 重置行

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Add Rows( 5 );Show( Row() );Row() = 0;

```

### Sequence

**语法:** y = Sequence( start, end, &lt;incr=1&gt;, &lt;n=1&gt; )

**说明:** 以 incr 为增量构建一个从 start 到 end 的数字序列，其中每个数字重复 n 次，然后返回该序列的第 Row() 项。由于它依赖于 Row()，Sequence() 函数主要用于列公式。要将序列创建为 JSL 矩阵，请参见 Index()。

**JMP添加的版本:** 早于版本 14

```jsl

Row() = 3;Sequence( 1, 9, 2 );

```

### Subscribe to Data Table List

**语法:** aSub = Subscribe to Data Table List( &lt;subscriber name | ""&gt;, &lt;OnOpen(fn) | OnClose(fn) | On Rename(fn)&gt;)

**说明:** 订阅当添加或关闭新数据表时要通知的数据表列表。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab},	dtname = (dtab << getname());	Print( "closing" );	Print( dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnClose( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );

```

**示例 2**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab, b},	dtname = (dtab << getname());	Print( "renaming ", b, " to ", dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnRename( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );dt << setname( "xxx" );

```

### Subscript

**语法:** y = x[i]; y = m[row, col]; y = Subscript( x, i )

**说明:** 返回可用下标标注的对象的第 i 个值，可以是数据表的列、矩阵、列表或报表显示元素。

**JMP添加的版本:** 早于版本 14

```jsl

{11, 12, 13}[2];

```

### Suppress Formula Eval

**语法:** Suppress Formula Eval( &lt;suppress=1&gt; )

**说明:** 若参数并非为零，则禁止所有数据表中公式的计算。

**JMP添加的版本:** 早于版本 14

```jsl

Suppress Formula Eval( 1 );

```

### Unsubscribe to Data Table List

**语法:** aSub = Unsubscribe to Data Table List(&lt;subscriber name&gt;, &lt;"OnOpen" | "OnClose" | "OnRename" | "ALL"&gt;)

**说明:** 删除通过“订阅数据表列表”命令添加的数据表列表订阅。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab},	dtname = (dtab << getname());	Print( "closing" );	Print( dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnClose( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );Unsubscribe to Data Table List( aSub, "on close" );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );

```

**示例 2**

```jsl

f1 = Function( {dtab},	dtname = (dtab << getname());	Print( "opening" );	Print( dtname ););f2 = Function( {dtab},	dtname = (dtab << getname());	Print( "closing" );	Print( dtname ););aSub = Subscribe to Data Table List( , OnOpen( f1 ) );Subscribe to Data Table List( aSub, OnClose( f2 ) );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );Unsubscribe to Data Table List( aSub, "all" );dt = Open( "$SAMPLE_DATA/Big Class.jmp" );Wait( 2 );Close( dt );

```

