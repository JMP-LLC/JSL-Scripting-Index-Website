# Class



## 关联的构造器

### Define Class

**语法:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**说明:** 创建一个分类，其中创建的所有分类方法和分类变量仅在指定的分类名称内定义。

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );

```

## 项消息

### Clone

**语法:** obj &lt;&lt; Clone

**说明:** 复制类引用的内容以生成新对象

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );nclref = clref << Clone;Show( clref << Equal( nclref ) );Show( clref == nclref );

```

### Contains

**语法:** obj &lt;&lt; Contains( string )

**说明:** 若分类包含指定的字符串表达式，则返回 1；否则返回 0。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Contains( "nObs" );

```

### Delete Class

**语法:** clref &lt;&lt; Delete Class( &lt; Force( boolean ) &gt; )

**说明:** 删除该分类。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Delete Class;Show( clref );

```

### Equal

**语法:** obj &lt;&lt; Equal( classref )

**说明:** 比较类引用参数与目标类引用是否相等。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );nclref = New Object( Test() );Show( clref << Equal( nclref ) );nclref:nObs = 50;Show( clref << Equal( nclref ) );

```

### First

**语法:** obj &lt;&lt; First

**说明:** 返回该分类中第一项的字符串表达式。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << First;

```

### Get Contents

**语法:** obj &lt;&lt; Get Contents

**说明:** 返回该分类中的项列表。每个元素为包含键及其关联值的两项列表。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Contents;

```

### Get Keys

**语法:** obj &lt;&lt; Get Keys

**说明:** 返回该分类中的键列表，每个键为该分类中包含的单个项的字符串表示。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Keys;

```

### Get Name

**语法:** obj &lt;&lt; Get Name

**说明:** 返回该分类的名称。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );class name = clref << Get Name;

```

### Get Value

**语法:** obj &lt;&lt; Get Value( string )

**说明:** 返回该分类中指定项的值。“字符串”为该项的键。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Value( "nObs" );

```

### Get Values

**语法:** obj &lt;&lt; Get Values

**说明:** 返回该分类中每项对应的值列表。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Get Values;

```

### Insert

**语法:** obj &lt;&lt; Insert( string, value )

**说明:** 插入字符串表达式，将指定值插入该分类。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Insert( "X", 25 );Show( clref );

```

### Lock Class

**语法:** obj &lt;&lt; Lock Class( &lt;string, | {string, ...}&gt;* )

**说明:** 锁定该分类中的所有方法成员或指定的命名成员，并防止添加、更改或删除它们。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Lock Class;Try( clref:nObs = 40, "clref is locked." );

```

### N Items

**语法:** obj &lt;&lt; N Items

**说明:** 返回该分类中包含的项数目。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );n = clref << N Items;

```

### Next

**语法:** obj &lt;&lt; Next( string )

**说明:** 返回该分类中指定的键后面的下一项的字符串表达式。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Next( "addition" );

```

### Remove

**语法:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**说明:** 从分类中删除指定的字符串表达式。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Remove( "nObs" );Show( clref );

```

### Show Contents

**语法:** obj &lt;&lt; Show Contents

**说明:** 显示 JMP 日志中分类的内容。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );result = clref << Show Contents;

```

### Unlock Class

**语法:** obj &lt;&lt; Unlock Class( &lt;string | {string, ...}&gt;* )

**说明:** 解锁包含防止被添加、更改或删除的方法成员的锁定分类。

**JMP添加的版本:** 14

```jsl

Define Class(	"Test",	nObs = 20;	addition = Method( {x, y},		(x + y) * nObs	);	append = Method( {a, b},		Char( a ) || " + " || Char( b )	););clref = New Object( Test() );clref << Lock Class( "nObs" );Try( clref:nObs = 30, Show( "clref is locked." ) ); //Try again after unlocking. clref << Unlock Class( "nObs" );Try( clref:nObs = 40, Show( "clref is locked." ) );

```

