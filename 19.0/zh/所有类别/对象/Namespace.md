# Namespace



## 关联的构造器

### New Namespace

**语法:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**说明:** 创建一个命名空间，其中创建的所有函数和变量都仅在指定的名称中定义。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);

```

## 项消息

### Contains

**语法:** obj &lt;&lt; Contains( string )

**说明:** 若命名空间包含指定的字符串表达式，则返回 1；否则返回 0。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Contains( "nObs" );

```

### Delete Namespace

**语法:** nsref &lt;&lt; Delete Namespace( &lt; Force( boolean ) &gt; )

**说明:** 删除该命名空间。

**JMP添加的版本:** 14

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Delete Namespace;
Show( nsref );

```

### First

**语法:** obj &lt;&lt; First

**说明:** 返回该命名空间中第一项的字符串表达式。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << First;

```

### Get Contents

**语法:** obj &lt;&lt; Get Contents

**说明:** 返回该命名空间中的项列表，其中每个元素为包含键及其关联值的两项列表。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Contents;

```

### Get Keys

**语法:** obj &lt;&lt; Get Keys

**说明:** 返回该命名空间中的键列表，其中键为该命名空间中包含的单个项的字符串表示。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Keys;

```

### Get Name

**语法:** obj &lt;&lt; Get Name

**说明:** 返回该命名空间的名称。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
space name = nsref << Get Name;

```

### Get Value

**语法:** obj &lt;&lt; Get Value( string )

**说明:** 返回该命名空间中指定项的值。“字符串”为该项的键。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Value( "nObs" );

```

### Get Values

**语法:** obj &lt;&lt; Get Values

**说明:** 返回该命名空间中每项对应的值列表。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Values;

```

### Insert

**语法:** obj &lt;&lt; Insert( string, value )

**说明:** 插入字符串表达式，将指定值插入该命名空间。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Insert( "X", 25 );
Show( nsref );

```

### Lock Namespace

**语法:** obj &lt;&lt; Lock Namespace( &lt;string, | {string, ...}&gt;* )

**说明:** 锁定该命名空间中的所有变量或指定的命名变量，并防止添加、更改或删除变量。

**JMP添加的版本:** 14

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace;
Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**语法:** obj &lt;&lt; N Items

**说明:** 返回该命名空间中包含的项数目。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
n = nsref << N Items;

```

### Next

**语法:** obj &lt;&lt; Next( string )

**说明:** 返回该命名空间中指定的键后面的下一项的字符串表达式。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Next( "addition" );

```

### Remove

**语法:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**说明:** 从命名空间中删除指定的字符串表达式。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Remove( "nObs" );
Show( nsref );

```

### Show Contents

**语法:** obj &lt;&lt; Show Contents

**说明:** 显示 JMP 日志中命名空间的内容。

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Show Contents;

```

### Unlock Namespace

**语法:** obj &lt;&lt; Unlock Namespace( &lt;string | {string, ...}&gt;* )

**说明:** 解除锁定以前锁定的命名空间（该命名空间中的所有变量都被锁定，并防止添加、更改或删除变量）。

**JMP添加的版本:** 14

```jsl

nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace( "nObs" );
Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); 
//Try again after unlocking. 
nsref << Unlock Namespace( "nObs" );
Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

