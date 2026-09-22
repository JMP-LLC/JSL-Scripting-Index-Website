# Programming



### Add Custom Functions

**语法:** Add Custom Functions({f1, f2, ...} | f)

**说明:** 定义用于脚本和“公式编辑器”中的定制函数的列表。该命令还将列表添加至环境。

**JMP添加的版本:** 14

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y}, x + y - 1 ) );mySub = New Custom Function( "custom", "Sub", Function( {x, y}, x - y + 1 ) );Add Custom Functions( {myAdd, mySub} );

```

### As Boolean

**语法:** b = As Boolean( x )

**说明:** 计算表达式并返回布尔值。

**JMP添加的版本:** 14

```jsl

x = 45;b = As Boolean( x > 2 );Show( b );

```

### As Column

**语法:** y = :name; y = dataTable:name; y = As Column( name ); y = As Column( dataTable, name )

**说明:** 访问指定数据表或当前数据表中的指定列。若未找到这样的列或数据表，则抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

exdt = Open( "$SAMPLE_DATA/Big Class.jmp" );exdt:height[1] + :height[2] + As Column( "height" )[3];

```

### As Constant

**语法:** y = As Constant( x )

**说明:** 计算用于创建常数值的表达式，该值在计算之后不会发生更改

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

New Table( "As Constant Demo Table 1",	Add Rows( 10 ),	New Column( "Non-Constant", Formula( Random Uniform() ) ),	New Column( "Constant", Formula( As Constant( Random Uniform() ) ) ));

```

**示例 2**

```jsl

New Table( "As Constant Demo Table 2",	Add Rows( 1000 ),	New Column( "What's on Your Desktop?",		"character",		Formula(			As Constant( xFiles = Files In Directory( "$Desktop" ) );			iR = Row();			If( iR <= N Items( xFiles ),				xFiles[iR],				"---"			);		)	));

```

**示例 3**

```jsl

For( i = 1, i <= 10, i++,	x = 2;	y = 100;	z = As Constant( x + y );	x *= i;	y /= i;	Show( i, x + y, z ););

```

### As Global

**语法:** y = ::name; y = As Global( name )

**说明:** 访问指定的全局变量，若不存在这样的全局变量，则抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

::ex = 23;Local( {ex = 12}, Eval List( {ex, ::ex, As Global( "ex" )} ) );

```

### As List

**语法:** y = As List( matrix )

**说明:** 返回以列表形式表示的矩阵。使用矩阵运算符，将多列矩阵转换为一系列列表，每个一行。

**JMP添加的版本:** 早于版本 14

```jsl

As List( [11 22 33, 44 55 66] );

```

### As Name

**语法:** y = As Name( s )

**说明:** 将字符串转换为名称或将字符串列表转换为名称列表。

**JMP添加的版本:** 早于版本 14

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt:(As Name( "height" ))[3];

```

### As Namespace

**语法:** asns = As Namespace( ns )

**说明:** 访问指定的命名空间，若不存在该命名空间，则抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

ns = New Namespace(	"complex");As Namespace( ns );

```

### As Root

**语法:** y = :::name; y = As Root( name )

**说明:** 访问指定的根作用域变量，若不存在该根作用域变量，则抛出错误。

**JMP添加的版本:** 15

```jsl

::: ex = 23;Local( {ex = 12}, Eval List( {ex, ::: ex, As Global( "ex" )} ) );

```

### As Scoped

**语法:** y = namespace:variable; y = As Scoped( namespace, variable )

**说明:** 访问指定的作用域变量，若不存在该作用域变量，则抛出错误。

**JMP添加的版本:** 早于版本 14

```jsl

Here:z = 23.5;As Scoped( Here, z );

```

### Associative Array

**语法:** y = Associative Array( {{key1, value1}, ...} ); y = Associative Array( keys, values )

**说明:** 创建关联数组，也称为词典或哈希映射。在双参数形式下，键与值可以是列表、矩阵或数据表列。

**JMP添加的版本:** 早于版本 14

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );ex["green"] = 3;ex << get contents;

```

### Choose Closest

**语法:** Choose Closest(source string, {canonical strings...}, &lt;Ignore Case(ignore=1|0)&gt;, &lt;Ignore Nonprintable(ignore=1|0)&gt;, &lt;Ignore Whitespace(ignore=1|0)&gt;, &lt;Max Edit Count(count)&gt;, &lt;Max Edit Ratio([0..1])&gt;, &lt;Min String Length(&lt;count=3&gt;)&gt;, &lt;Replace Unmatched(replace=0|1)&gt;, &lt;Unmatched Value(&lt;value=""&gt;)&gt;)

**说明:** 挑选指定规则中的最近字符串并将其返回。

默认情况下，忽略字符大小写；使用“忽略大小写”进行指定。

默认情况下，不可打印字符被忽略；使用“忽略不可打印”来指定。

默认情况下，空格被忽略；使用“忽略空格”来指定。

默认情况下，不允许字符更改来找到匹配项。

	使用“最大编辑计数”来控制可以进行的编辑数量。

	使用“最大编辑比率”来控制允许的更改百分比（以原始字符串中的字符为单位）。

	若指定，将应用这两个设置。

默认情况下，少于 3 个字符的字符串将不匹配；使用“最小字符串长度”指定不同的长度。

不匹配的字符串

	默认情况下，若给定规则内没有典型字符串匹配，则返回源字符串。

	使用“替换不匹配”来指定是否返回源字符串。

	使用“不匹配”指定要返回的值。

**JMP添加的版本:** 15

#### 不匹配

```jsl

Choose Closest( "MARTHA", {"Martha"}, Ignore Case( 0 ), Unmatched() );

```

#### 保留标点符号

```jsl

Choose Closest( "MARTHA_", {"MARTHA"}, Ignore Punctuation( 0 ) );

```

#### 允许编辑

```jsl

Choose Closest( "MARTA", {"MARTHA"}, Max Edit Count( 2 ) );

```

#### 在字符串中选择，不进行编辑

```jsl

Choose Closest( "MARTHA_", {"Martha", "MARY"} );

```

### Class Exists

**语法:** nsexists = Class Exists( class name )

**说明:** 若存在 name 参数指定的类，则返回 1。否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );clexists = Class Exists( cl );Show( clexists );cl << Delete;Delete Classes( "complex" );

```

### Clear Globals

**语法:** Clear Globals( &lt; varname, ... &gt; )

**说明:** 清除当前定义的所有全局符号的值。

**JMP添加的版本:** 早于版本 14

```jsl

Clear Globals();

```

### Clear Log

**语法:** Clear Log()

**说明:** 清空日志。

**JMP添加的版本:** 早于版本 14

```jsl

Clear Log();

```

### Clear Symbols

**语法:** Clear Symbols( &lt; varname, ... &gt; )

**说明:** 清除当前定义的所有符号的值。

**JMP添加的版本:** 早于版本 14

```jsl

Clear Symbols();

```

### Close Log

**语法:** Close Log()

**说明:** 关闭日志窗口

**JMP添加的版本:** 早于版本 14

```jsl

Close Log();Show( Is Log Open() );

```

### Define Class

**语法:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**说明:** 定义新分类

**JMP添加的版本:** 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( complex );

```

### Delete Classes

**语法:** Delete Classes( &lt;Force( boolean )&gt;, &lt;class reference, ...&gt; )

**说明:** 删除所有分类定义或者一个或多个特定分类定义。

**JMP添加的版本:** 早于版本 14

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Classes();Show( lcl );Show Classes();Clear Symbols( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );Show Classes();

```

### Delete Globals

**语法:** Delete Globals( &lt; varname, ... &gt; )

**说明:** 删除当前定义的所有全局符号及其值。

**JMP添加的版本:** 早于版本 14

```jsl

Delete Globals();

```

### Delete Namespaces

**语法:** Delete Namespaces( &lt;Force( boolean )&gt;, &lt;namespace reference, ...&gt; )

**说明:** 删除所有命名空间或者一个或多个特定命名空间。

**JMP添加的版本:** 早于版本 14

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});Show Namespaces();Delete Namespaces( nsaa, nsbb );Show Namespaces();

```

### Delete Symbols

**语法:** Delete Symbols( &lt; varname, ... &gt; )

**说明:** 删除当前定义的所有符号及其值。

**JMP添加的版本:** 早于版本 14

```jsl

Delete Symbols();

```

### Eval

**语法:** y = Eval( x )

**说明:** 计算参数并返回结果。

**JMP添加的版本:** 早于版本 14

```jsl

Eval( Expr( 1 + 2 ) );

```

### Eval Insert

**语法:** y = Eval Insert( string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**说明:** 查找 startChar/endChar 对括住的子字符串，并使用内部计算的表达式替换。

**JMP添加的版本:** 早于版本 14

```jsl

Eval Insert( "Today is ^As Date( Today())^" );

```

### Eval Insert Into

**语法:** Eval Insert Into( l_string, &lt;startChar="^"&gt;, &lt;endChar=startChar&gt; )

**说明:** 查找 startChar/endChar 对括住的子字符串，并使用内部计算的表达式替换，被替换字符串为 l_string。

**JMP添加的版本:** 早于版本 14

```jsl

ex = "Today is ^As Date( Today())^";Eval Insert Into( ex );ex;

```

### Eval List

**语法:** y = Eval List( list )

**说明:** 返回一个列表，其中所有项均已经过计算。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Eval List( {1 + 2, 3 + 4} );

```

**示例 2**

```jsl

x = 5;y = 10;Eval List( {x, y} );

```

### Exit

**语法:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**说明:** 退出 JMP。

**JMP添加的版本:** 早于版本 14

```jsl

If(	New Window( "Exit() example",		<<Type( "Modal" ),		Text Box( "Shut down JMP?" ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	)["Button"] == 1, /*OK==1*/Exit(), /*cancel==-1*/"Good choice.");

```

### First

**语法:** y = First( x1, x2, ... )

**说明:** 计算每个参数并返回第一个参数的值。

**JMP添加的版本:** 早于版本 14

```jsl

First( 11, 22 );

```

### Function

**语法:** y = Function( {arg1=val1, ...}, &lt;{local1=val1, ...}&gt;, expr )

**说明:** 用指定的参数、默认值以及可选局部变量定义一个函数。具有默认值的参数为调用函数时的可选项。若函数脚本中使用了 Return()，则返回内部表达式。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

exsqr = Function( {x}, x * x );exsqr( 5 );

```

**示例 2**

```jsl

// y is an optional argumentexmul = Function( {x, y = 3}, x * y );a = exmul( 5 );b = exmul( 5, 10 );Show( a, b );

```

**示例 3**

```jsl

posorneg = Function( {x},	{},	If(		x > 0, Return( "positive" ),		x == 0, Return( "zero" ),		Return( "negative" )	));posorneg( -5.5 );

```

### Get Class Names

**语法:** Get Class Names( &lt; &lt;class reference&gt;, ... &gt; )

**说明:** 返回所有当前定义的分类的名称列表。

**JMP添加的版本:** 14

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Class Names();Show( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );

```

### Get Classes

**语法:** Get Classes( &lt; &lt;class reference&gt;, ... &gt; )

**说明:** 返回当前定义的所有类的引用列表

**JMP添加的版本:** 早于版本 14

```jsl

Define Class(	"aa",	{_init_ = Method( {} ), x = 1, m1 = Method( {a, b}, a * b )});Define Class(	"bb",	{_init_ = Method( {} ), y = 1, m2 = Method( {a, b}, a / b )});lcaa = New Object( aa() );lcbb = New Object( bb() );lcl = Get Classes();Show( lcl );Clear Symbols( lcl );lcaa << Delete;lcbb << Delete;Delete Classes( "aa", "bb" );

```

### Get Custom Functions

**语法:** Get Custom Functions(&lt;{function 1 full name, function 2 full name, ...} | function full name&gt;)

**说明:** 获取定制函数的列表

**JMP添加的版本:** 14

**示例 1**

```jsl

Get Custom Functions();

```

**示例 2**

```jsl

Get Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Get Environment Variable

**语法:** value = Get Environment Variable( string )

**说明:** 返回操作系统的指定环境变量的值。



注意: 在 Macintosh 操作系统中，变量名称区分大小写。

**JMP添加的版本:** 早于版本 14

```jsl

Get Environment Variable( "PATH" );

```

### Get Locale Setting

**语法:** value = Get Locale Setting( settingName )

**说明:** 检索语言/区域设置，如小数分隔符

**JMP添加的版本:** 16

```jsl

Get Locale Setting( "Decimal Separator" );

```

### Get Log

**语法:** list = Get Log( &lt;N&gt; )

**说明:** 返回日志中的行列表。若未指定参数，则返回日志中的所有行。若数值型参数 N 为正，则返回日志中的前 N 行。若 N 为负，则返回日志中的后 N 行。若 N 为零，则不返回任何行。

**JMP添加的版本:** 早于版本 14

```jsl

all contents = Get Log();headcontents = Get Log( 10 );tailcontents = Get Log( -5 );

```

### Get Namespace Names

**语法:** Get Namespace Names( &lt; &lt;namespace reference&gt;, ... &gt; )

**说明:** 返回所有当前定义的命名空间的名称列表。

**JMP添加的版本:** 14

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});lns = Get Namespace Names();Show( lns );nsaa << Delete;nsbb << Delete;

```

### Get Namespaces

**语法:** Get Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**说明:** 返回当前定义的所有命名空间的引用列表

**JMP添加的版本:** 早于版本 14

```jsl

nsaa = New Namespace(	"aa",	{		x = 1	});nsbb = New Namespace(	"bb",	{		y = 1	});lns = Get Namespaces();Show( lns );Clear Symbols( lns );nsaa << Delete;nsbb << Delete;

```

### Get Punctuation Characters

**语法:** Get Punctuation Characters(&lt;Exclude Chars(chars) | Include Chars(chars)&gt;)

**说明:** 返回包含通常用于分隔单词的标点符号字符的字符串。包括 ,:;.?!\\/#@&~()[]<>"\*`%$+=^|{} 和一些常见 Unicode 标点符号。

**JMP添加的版本:** 15

**示例 1**

```jsl

Get Punctuation Characters();

```

**示例 2**

```jsl

Get Punctuation Characters( Include Chars( "_" ) );

```

**示例 3**

```jsl

Get Punctuation Characters( Exclude Chars( "$[]" ) );

```

**示例 4**

```jsl

Collapse Whitespace(	Substitute( "This...string..has..dots", Items( Get Punctuation Characters(), "" ), " " ));

```

### Get Session Script

**语法:** Get Session Script( win1, ... )

**说明:** 返回指定窗口的会话脚本。会话脚本是 JSL 表达式，将重新创建给定窗口，包括数据表、脚本窗口、记录和报表。对通过 JSL 脚本创建的报表的支持受限，并且仅尝试重新创建显示布局。

**JMP添加的版本:** 17

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );biv = dt << RunScript( "Bivariate" );Get Session Script( Report( biv ) );

```

### Get Whitespace Characters

**语法:** Get Whitespace Characters()

**说明:** 返回包含通常使用的所有空格字符的字符串。

**JMP添加的版本:** 早于版本 14

```jsl

Get Whitespace Characters();

```

### Include

**语法:** y = Include( filepath, &lt; &lt;&lt;Parse Only&gt;, &lt; &lt;&lt;New Context&gt;, &lt; &lt;&lt;Names Default to Here&gt; )

**说明:** 执行指定文件中的 JSL。若指定了“Parse Only”，则会解析脚本而不执行。若指定了“New Context”，则所包含的 JSL 会在其唯一的命名空间中执行。若父脚本和包含的脚本都使用全局命名空间，则同时指定“New Context”和“Names Default to Here”以避免冲突。

**JMP添加的版本:** 早于版本 14

```jsl

Include( "$SAMPLE_SCRIPTS/chaosGame.jsl" );

```

### Include File List

**语法:** y = Include File List()

**说明:** 返回在执行时所包含文件的列表。

**JMP添加的版本:** 早于版本 14

```jsl

y = Include File List();

```

### Is Log Open

**语法:** Is Log Open()

**说明:** 返回结果指出日志窗口是否打开

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

If( Is Log Open(),	Close Log());

```

**示例 2**

```jsl

If( !Is Log Open(),	Open Log());

```

### Length

**语法:** l = Length( x )

**说明:** 返回给定字符串的长度（字符数）、列表的长度（项数）、关联数组中的长度（键数）、blob 的长度（字节数）、矩阵的长度（元素数）或命名空间/类的长度（函数和变量数）。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Length( "Café" );

```

**示例 2**

```jsl

Length( {1, 2 + 3, [11 22]} );

```

**示例 3**

```jsl

Length( ["a" => 10, "b" => 3, => 0] );

```

**示例 4**

```jsl

Length( Char To Blob( "Café" ) );

```

### List

**语法:** y = {a, b, ...}; y = List( a, b, ... )

**说明:** 创建项列表，但不计算它们。

**JMP添加的版本:** 早于版本 14

```jsl

{1, 2 + 3, [11 22]};

```

### Local

**语法:** y = Local( {name=value, ...}, expression )

**说明:** 解析局部变量的名称。

**JMP添加的版本:** 早于版本 14

```jsl

Local( {a = 1, b},	b = 2;	a + b;);

```

### Local Here

**语法:** y = Local Here( expression )

**说明:** 使用本地 Names Default To Here(1) 执行表达式

**JMP添加的版本:** 早于版本 14

```jsl

y = Local Here(	a = 1;	b = 2;	c = a + b;	c;);

```

### Lock Globals

**语法:** Lock Globals( name, ... )

**说明:** 锁定指定的全局名称，防止它们被修改或被 Clear Globals 函数清除。

**JMP添加的版本:** 早于版本 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Lock Symbols

**语法:** Lock Symbols( name, ... )

**说明:** 锁定指定的全局名称，防止它们被修改或被 Clear Symbols 函数清除。

**JMP添加的版本:** 早于版本 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Log Capture

**语法:** string = Log Capture( expr )

**说明:** 对 expr 参数求值，捕获本应在 JMP 日志窗口中出现的输出，并以字符串的形式将其返回。

**JMP添加的版本:** 早于版本 14

```jsl

"captured:" || Log Capture(	For( i = 1, i <= 3, i++,		Write( Char( i ) );		Write( " " );	));

```

### Map Value

**语法:** Map Value(string | number, {key1, value1...|{key1...},{value1...}}, &lt;Unmatched(value)&gt;)

**说明:** 计算初始值并返回映射的结果或默认值。

**JMP添加的版本:** 15

**示例 1**

```jsl

Map Value( "celry", {"celry", "celery"} );

```

**示例 2**

```jsl

Map Value( "carrot", {"celry", "celery"}, Unmatched( "not found" ) );

```

**示例 3**

```jsl

Map Value( 10, {10, "celery", 11, "banana"} );

```

**示例 4**

```jsl

Map Value( 10, {{1, 2, 3}, {100, 200, 300}} );

```

### Method

**语法:** m = Method( { arg1 = val1, ... }, expression* )

**说明:** 在类内创建方法

**JMP添加的版本:** 早于版本 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( "complex" );

```

### N Items

**语法:** y = N Items( x )

**说明:** 返回列表中的项数、矩阵中的元素数、关联数组中的键数、命名空间中的函数和变量数、类对象中的方法和变量数或显示框中的子项数。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

N Items( {1, 2 + 3, [11 22]} );

```

**示例 2**

```jsl

N Items( ["a" => 10, "b" => 3, => 0] );

```

**示例 3**

```jsl

New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );N Items( hlist );

```

### Names Default To Here

**语法:** Names Default To Here( boolean )

**说明:** 确定未解析名称的储存位置，( 0 ) 表示作为全局/局部名称储存，( 1 ) 表示在 Here: 命名空间处储存。

**JMP添加的版本:** 早于版本 14

```jsl

/* Variable x will be stored in the Here: namespace by default */x = 1;Show( x );

```

### Namespace

**语法:** ns = Namespace( namespace reference )

**说明:** 返回对 name 参数指定的命名空间的引用。

**JMP添加的版本:** 早于版本 14

```jsl

New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});ns = Namespace( "complex" );Show( ns );ns << Delete;

```

### Namespace Exists

**语法:** nsexists = Namespace Exists( namespace reference )

**说明:** 若存在 name 参数指定的命名空间，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

ns = New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});nsexists = Namespace Exists( ns );Show( nsexists );ns << Delete;

```

### New Custom Function

**语法:** f=New Custom Function(namespace, name, function definition)

**说明:** 创建新的定制函数对象。定制函数将在脚本编辑器中着色并显示在“脚本索引”中。定制用户函数的必需信息包括命名空间（避免与全局函数发生冲突）、名称和函数定义。其他帮助信息可以使用消息添加。使用“添加定制函数”命令可将新函数发布至 JMP 环境。

**JMP添加的版本:** 14

**示例 1**

```jsl

myAdd = New Custom Function( "custom", "Add", Function( {x, y = 1}, x + y - 1 ) );

```

**示例 2**

```jsl

/*Create a custom function that can be used as a format*/Add Custom Functions(	{New Custom Function(		"custom",		"User Defined Format Function",		Function( {inches},			Char( inches ) || " in"		),		<<Custom Format Category( "Custom" ), 	)});

```

**示例 3**

```jsl

/*Create a custom function that can be used as a transform*/Add Custom Functions(	{New Custom Function(		"custom",		"User Defined Transform Function",		Function( {inches},			inches * 2.54		),		<<Transform Category( "Custom" ), 	)});

```

### New Namespace

**语法:** ns = New Namespace( &lt;name&gt;, &lt;list of expressions&gt; )

**说明:** 创建新的命名空间，其名称由 name 参数指定。若未指定 name，则使用匿名名称。

**JMP添加的版本:** 早于版本 14

```jsl

ns = New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});Show( ns );ns << Delete;

```

### New Object

**语法:** New Object( "class name" | class name | class reference( constructor arguments* ) )

**说明:** 创建分类的实例对象。

**JMP添加的版本:** 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);cl = New Object( complex( 1, 2 ) );cl << Delete;Delete Classes( "complex" );

```

### Open Log

**语法:** Open Log( &lt;bring window to top&gt; )

**说明:** 打开日志窗口

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Open Log();Show( Is Log Open() );

```

**示例 2**

```jsl

/* Bring Log Windows to the Top */Open Log( 1 );Show( Is Log Open() );

```

### Parameter

**语法:** y = Parameter( {name=value, ...}, model expression )

**说明:** 为非线性平台的模型定义公式参数。

**JMP添加的版本:** 早于版本 14

```jsl

Parameter( {a = 1}, a + 1 );

```

### Parse

**语法:** y = Parse( s )

**说明:** 解析字符串并返回得到的 JSL 表达式。

**JMP添加的版本:** 早于版本 14

```jsl

Parse( "x+y" );

```

### Print

**语法:** Print( x, ... )

**说明:** 在日志中显示参数值，每行一个。

**JMP添加的版本:** 早于版本 14

```jsl

Print( 355 / 113, Pi() );

```

### Quit

**语法:** Quit(&lt;"No Save"&gt;); Exit(&lt;"No Save"&gt;)

**说明:** 退出 JMP。

**JMP添加的版本:** 早于版本 14

```jsl

If(	New Window( "Quit() example",		<<Type( "Modal" ),		Text Box( "Shut down JMP?" ),		H List Box( Button Box( "OK" ), Button Box( "Cancel" ) )	)["Button"] == 1, /*OK==1*/Quit(), /*cancel==-1*/"Good choice.");

```

### Recode

**语法:** recode(string|number|list, {&lt;transform&gt;, ...}, &lt;Multiple Response (Separator(sepChar))&gt;, &lt;By Word(Delimiters(&lt;chars&gt;)&gt;)

**说明:** 将列出的变换应用于输入值并返回结果。“多重响应”和“按单词”选项将提供的字符数据拆分为更小的输入值。一旦确定输入值，变换会分别应用于这些值。

命令执行时会填充特殊的 JSL 变量:

	_rcNow 是前面的变换之后输入的当前值。

	_rcOrig 是输入的原始值。

**JMP添加的版本:** 15

**示例 1**

```jsl

Recode(	"27513-0000",	{Regex( _rcNow, "(\d\d\d\d\d)-\d+", "\1", GLOBALREPLACE ), Num( _rcNow )});

```

**示例 2**

```jsl

Recode(	"A B C",	{Map Value( _rcNow, {"A", "Apple", "B", "Banana"}, Unmatched( "Unknown fruit" ) )},	By Word);

```

### Recurse

**语法:** y = Recurse( x1, ... )

**说明:** 调用包含函数。

**JMP添加的版本:** 早于版本 14

```jsl

ex rev = Function( {s},	If( Length( s ) <= 1,		s,		Recurse( Substr( s, 2 ) ) || Left( s, 1 )	));ex rev( "abcd" );

```

### Remove Custom Functions

**语法:** Remove Custom Functions({function 1 full name, function 2 full name, ...} | function full name)

**说明:** 从环境中删除定制函数的列表。

**JMP添加的版本:** 14

```jsl

Remove Custom Functions( {"custom:Add", "custom:Sub"} );

```

### Save Log

**语法:** f = Save Log( &lt;path&gt; )

**说明:** 将日志内容写到指定文件位置。若成功写入，该函数将返回所创建文件的名称。

**JMP添加的版本:** 早于版本 14

```jsl

Save Log( "$TEMP/log.txt" );exlogText = Load Text File( "$TEMP/log.txt" );Substr( exlogText, 1, 30 );

```

### Send

**语法:** r = obj &lt;&lt; msg( args ); r = obj &lt;&lt; msg; r = Send( obj, msg )

**说明:** 将消息（以表达式形式）发送给对象。

**JMP添加的版本:** 早于版本 14

```jsl

Open( "$SAMPLE_DATA/Big Class.jmp" );Bivariate( Y( :weight ), X( :height ) ) << Fit Line;

```

### Set Environment Variable

**语法:** value = Set Environment Variable( string, &lt; string&gt; )

**说明:** 设置操作系统中指定环境变量的值。若第二个参数缺失或是空字符串，则环境变量会删除。



注意: 在 Macintosh 操作系统中，变量名称区分大小写。

**JMP添加的版本:** 早于版本 14

```jsl

Set Environment Variable( "PATH", "some path to a directory" );

```

### Show

**语法:** Show( x, ... )

**说明:** 在日志中显示参数的名称与值，每行一个。

**JMP添加的版本:** 早于版本 14

```jsl

Show( 355 / 113, Pi() );

```

### Show Classes

**语法:** Show Classes( &lt; &lt;class name | class reference&gt;, ... &gt; )

**说明:** 显示所有用户定义的类的内容。

**JMP添加的版本:** 早于版本 14

```jsl

Define Class(	"complex",	real = 0;	imag = 0;	_init_ = Method( {a, b},		real = a;		imag = b;	);	Add = Method( {y},		New Object( complex( real + y:real, imag + y:imag ) )	);	Sub = Method( {y},		New Object( complex( real - y:real, imag - y:imag ) )	);	Mul = Method( {y},		New Object( complex( real * y:real - imag * y:imag, imag * y:real + real * y:imag ) )	);	Div = Method( {y},		t = New Object( complex( 0, 0 ) );		mag2 = y:Magsq();		t:real = real * y:real + imag * y:imag;		t:imag = imag * y:real + real * y:imag;		t:real = t:real / mag2;		t:imag = t:imag / mag2;		t;	);	Magsq = Method( {},		real * real + imag * imag	);	Mag = Method( {},		Sqrt( real * real + imag * imag )	);	_to string_ = Method( {},		Char( real ) || " + " || Char( imag ) || "i"	);	_show_ = _to string_;);Show Classes();

```

### Show Globals

**语法:** Show Globals()

**说明:** 列出当前定义的所有全局符号及其值。

**JMP添加的版本:** 早于版本 14

```jsl

Show Globals();

```

### Show Namespaces

**语法:** Show Namespaces( &lt; &lt;namespace reference&gt;, ... &gt; )

**说明:** 显示所有用户定义的命名空间的内容，包括已命名的和匿名的命名空间。

**JMP添加的版本:** 早于版本 14

```jsl

New Namespace(	"complex",	{		make = Function( {a, b},			Index( a, b, b - a )		),		add = Function( {x, y}, x + y ),		sub = Function( {x, y}, x - y ),		mul = Function( {x, y},			local:z = J( 1, 2 );			local:z[1] = x[1] * y[1] - x[2] * y[2];			local:z[2] = x[1] * y[2] + x[2] * y[1];			local:z;		),		div = Function( {x, y},			local:z = J( 1, 2 );			local:d = (y[1] ^ 2 + y[2] ^ 2);			local:z[1] = (x[1] * y[1] + x[2] * y[2]) / local:d;			local:z[2] = (x[2] * y[1] - x[1] * y[2]) / local:d;			local:z;		),		write = Function( {x},			Write( x[1], " + ", x[2], "i\!n" )		)	});Show Namespaces( "complex" );Delete Namespaces( "complex" );

```

### Show Symbols

**语法:** Show Symbols()

**说明:** 列出当前定义的所有符号及其值。

**JMP添加的版本:** 早于版本 14

```jsl

Show Symbols();

```

### Sort List

**语法:** y = Sort List( x )

**说明:** 返回列表 x 的项以升序排序的副本。

**JMP添加的版本:** 早于版本 14

```jsl

Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**语法:** Sort List Into( x )

**说明:** 通过以升序排序项修改列表 x。注意: x 参数必须是变量。

**JMP添加的版本:** 早于版本 14

```jsl

ex = {111, 212, 133, 114, 55};Sort List Into( ex );ex;

```

### Throw

**语法:** Throw(&lt;message&gt;, &lt;Boolean&gt;)

**说明:** 将执行转移到封闭 Try() 函数。否则，终止脚本的运行。若 message 以感叹号开头，将是致命错误，Try() 无法捕获。第二个参数是可选布尔值，用于包括回溯。

**JMP添加的版本:** 早于版本 14

#### Try-Catch

```jsl

Try( If( Random Uniform() < 0.5, 1, Throw() ), "thrown" );

```

#### 严重 Throw

```jsl

Try( Throw( "!This is a fatal error" ), Print( "CATCH message not reached" ) );Print( "AFTER TRY message not reached" );

```

#### 回溯

```jsl

Throw( "A line number is included in this error", 1 );

```

### Try

**语法:** y = Try( expr, &lt;catchExpr&gt; )

**说明:** 计算并返回 expr 参数，除非求值导致 Throw() 或内部异常。若出现这种情况，返回 catchExpr 的求值结果。若您使用 exception_msg 作为 catchExpr，则返回有关错误的详细信息列表。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Try( Sqrt( "s" ), "invalid" );

```

**示例 2**

```jsl

Try( Sqrt( "s" ), exception_msg );

```

### Type

**语法:** y = Type( x )

**说明:** 返回一个以参数 x 值类型命名的字符串。

**JMP添加的版本:** 早于版本 14

```jsl

Type( [1 2 3] );

```

### Unlock Globals

**语法:** Unlock Globals( name, ... )

**说明:** 解除锁定指定的全局名称，允许它们被修改以及被 Clear Globals 函数清除。

**JMP添加的版本:** 早于版本 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Globals( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Unlock Symbols

**语法:** Unlock Symbols( name, ... )

**说明:** 解除锁定的指定的全局名称，允许它们被修改以及被 Clear Symbols 函数清除。

**JMP添加的版本:** 早于版本 14

```jsl

exalpha = 0.05;exdelta = 0.5;Watch( exalpha, exdelta );Wait( 3 );Lock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );Try( exdelta = 0.6, Show( "invalid - exdelta is locked" ) );Wait( 3 );Unlock Symbols( exalpha );Wait( 3 );Try( exalpha = 0.06, Show( "invalid - exalpha is locked" ) );

```

### Wait

**语法:** Wait( &lt;x&gt; )

**说明:** 继续执行之前等待 x 秒。x 的默认值是 3 秒。若 x 大于等于 0，JMP 等待期间还将完成任何操作系统事件（例如，屏幕绘图）以及任何待执行的回调（例如，公式计算）。若 x 小于 0，继续之前只会确认完成屏幕绘图和待执行的 OS 事件。

**JMP添加的版本:** 早于版本 14

#### OS 事件

```jsl

Wait( -1 ); // Wait for OS events

```

#### 回调

```jsl

Wait( 0 ); // Wait for OS events and callbacks

```

#### 简单

```jsl

Wait( 1.5 );

```

### Watch

**语法:** w = Watch( all|name1, ... )

**说明:** 创建一个显示来自 Global、Here 和Local 命名空间的变量及其值的窗口。

**JMP添加的版本:** 早于版本 14

```jsl

x = 1;y = 2;z = "abc";w = Watch( all );Wait( 5 );x = x * 5;y = y / 25;z = z || "def";Wait( 5 );w << close Window();

```

### Where

**语法:** Where( &lt;dt&gt;, clause )

**说明:** 返回匹配给定 where 子句的索引（通常为行号）。可选的 dt 可在计算期间更改 Current Data Table。这些子句通常由 JMP 使用“数据过滤器”编写。这通常比使用 Loc、<<Get Rows Where 或 <<Select Where 更快。若子句在计算期间修改了序列或任何符号，则未定义该行为。

**JMP添加的版本:** 18

#### 其他

```jsl

xs = [10 20 30 . 50];ys = [0 0 0 1 1];Where( xs > 20 & ys );xs = {{10}, {20}, {15}};Where( xs[1] < 18 );

```

#### 列

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Get Rows Where( :sex == "M" );Where( :sex == "M" );Where( dt, :sex == "M" );

```

#### 列函数

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Clear Select << Select Rows( Where( Col Max( :height, :age ) >= 68 ) );dt << Clear Select << Select Rows( Where( :height == Col Max( :height, :age ) ) );

```

#### 矩阵/列表

```jsl

xs = [10 20 30 . 50];xs[Where( xs >= 20 )];xs[Where( !Is Missing( xs ) )];ys = {10, 20, "30", ., 50};ys[Where( ys >= 20 )];

```

#### 行状态

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" );dt << Select Rows( [2 4 6] ) << Exclude( 1 );Where( Excluded() );Where( !Excluded() );

```

### Wild

**语法:** Wild()

**说明:** 指明匹配任意表达式的通配符位置（仅用于表达式模式）。

**JMP添加的版本:** 早于版本 14

```jsl

extestexpr = Expr(	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );	Show( "END" ););Extract Expr( extestexpr, For( i = 1, Wild(), i++, Print( "YES!!!" ) ) );

```

### Wild List

**语法:** Wild List()

**说明:** 指明匹配任意项的一系列通配符参数（仅用于表达式模式）。

**JMP添加的版本:** 早于版本 14

```jsl

extestexpr = Expr(	For( i = 1, i <= 14, i++, Print( "YES!!!" ) );	Show( "END" ););Extract Expr( extestexpr, For( i = 1, Wild List(), Print( "YES!!!" ) ) );

```

### Write

**语法:** Write( x, ... )

**说明:** 在日志中显示指定值，不添加引号、空格或换行符（如同 Print()）。

**JMP添加的版本:** 早于版本 14

```jsl

Write( "fraction = ", 355 / 113, "\!N", "pi       = ", Pi() );

```

