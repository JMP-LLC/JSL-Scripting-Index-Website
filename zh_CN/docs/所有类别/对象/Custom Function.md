# Custom Function



## 项消息

### Custom Format Category

**语法:** f &lt;&lt; Custom Format Category(1|0)

**说明:** 将定制函数视为定制格式。指定 0 以从定制格式菜单中排除该函数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );

```

### Description

**语法:** obj &lt;&lt; Description( text )

**说明:** 设置定制函数的说明。该说明将出现在“脚本索引”和工具提示中。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );

```

### Example

**语法:** f &lt;&lt; Example(example text | Expr(example JSL code), &lt;example name&gt;)

**说明:** 添加一个示例，显示如何有效使用函数。该示例应作为文本字符串或使用 Expr 命令封装的 JSL 代码进行传递。您可以多次发送消息以添加多个示例。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );

```

### Formula Category

**语法:** f &lt;&lt; Formula Category(name|""|1|0)

**说明:** 包括指定“公式编辑器”类别中的函数。若已指定，该函数将添加到匹配类别的结尾处。若类别不存在，将创建新类别。指定 0 或空字符串以在公式编辑器树中不显示该函数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );

```

### Get Custom Format Category

**语法:** f &lt;&lt; Get Custom Format Category

**说明:** 获取定制函数的定制格式类别。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Custom Format Category( 1 );
myAdd << Get Custom Format Category;

```

### Get Description

**语法:** f &lt;&lt; Get Description

**说明:** 获取定制函数的说明。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Description( "Add two numbers together, but subtract 1" );
myAdd << Get Description;

```

### Get Examples

**语法:** f &lt;&lt; Get Examples

**说明:** 将示例列表检索为字符串

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Example( "Add(1, 2)", "small add" );
myAdd << Example( "Add(1, 500)", "bigger add" );
myAdd << Get Examples;

```

### Get Formula Category

**语法:** f &lt;&lt; Get Formula Category

**说明:** 返回该函数应属于的“公式编辑器”类别（若有）。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Formula Category( "NumberStuff" );
myAdd << Get Formula Category;

```

### Get Function

**语法:** f &lt;&lt; Get Function

**说明:** 检索函数定义。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Function;

```

### Get Name

**语法:** f &lt;&lt; Get Name

**说明:** 检索函数名称。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Name;

```

### Get Namespace

**语法:** f &lt;&lt; Get Namespace

**说明:** 检索函数命名空间。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Get Namespace;

```

### Get Parameters

**语法:** f &lt;&lt; Get Parameters

**说明:** 检索参数列表。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );
myAdd << Get Parameters;

```

### Get Prototype

**语法:** f &lt;&lt; Get Prototype

**说明:** 获取该函数出现在“脚本索引”中的原型

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );
myAdd << Get Prototype;

```

### Get Result Type

**语法:** f &lt;&lt; Get Result Type

**说明:** 获取函数的结果类型。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );
myAdd << Get Result Type;

```

### Get Scripting Index Category

**语法:** f &lt;&lt; Get Scripting Index Category

**说明:** 获取“脚本索引”中定制函数的类别。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );
myAdd << Get Scripting Index Category;

```

### Get Transform Category

**语法:** f &lt;&lt; Get Transform Category

**说明:** 获取定制函数的变换类别。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );
myAdd << Get Transform Category;

```

### Parameter

**语法:** f &lt;&lt; Parameter(typename | {typename1, typename2, ...}, hint text)

**说明:** 添加有关函数参数的信息。为该函数取的每个参数发送一次该消息。该项可用于代码验证。参数类型的有效选择为“任意”、“名称”、“数字”、“字符串”、“列表”、“矩阵”、“行状态”。若可能有多个结果类型，则在列表中提供类型名称。提示文本用于指示哪些数据应在公式编辑器的相应参数中使用。若不需要提示文本，则指定空字符串。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Parameter( "Number", "number" );
myAdd << Parameter( "Number", "<number=1>" );

```

### Prototype

**语法:** obj &lt;&lt; Prototype( text )

**说明:** 设置该函数出现在“脚本索引”中的原型

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Prototype( "Add(number, <number=1>)" );

```

### Result Type

**语法:** f &lt;&lt; Result Type(typename | {typename1, typename2 ...})

**说明:** 设置函数的结果类型。该项可用于代码验证。有效的选择为“任意”、“名称”、“数字”、“字符串”、“列表”、“矩阵”、“行状态”。若可能有多个结果类型，则在列表中提供类型名称。

**JMP添加的版本:** 14

**示例 1**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( "Number" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Result Type( {"Number", "String"} );

```

### Scripting Index Category

**语法:** f &lt;&lt; Scripting Index Category(name|""|1|0)

**说明:** 设置“脚本索引”中定制函数的类别。除了您指定的类别之外，每个定制函数还将列在“所有函数”类别中。指定 0 或 "" 以仅在“所有函数”类别中列出函数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Scripting Index Category( "My Functions" );

```

### Transform Category

**语法:** f &lt;&lt; Transform Category(1|0)

**说明:** 将定制函数视为列变换。指定 0 以从列变换菜单中排除该函数。

**JMP添加的版本:** 14

```jsl

Names Default To Here( 1 );
myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );
myAdd << Transform Category( 1 );

```

