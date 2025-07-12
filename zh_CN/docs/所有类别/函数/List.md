# List



## 函数

### As List

**语法:** y = As List( matrix )

**说明:** 返回以列表形式表示的矩阵。使用矩阵运算符，将多列矩阵转换为一系列列表，每个一行。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### Concat Items

**语法:** string = Concat Items( {list of strings}, <separatorString> )

**说明:** 将字符串列表连接成一个长字符串，并用分隔符分隔相邻的字符串，若未指定分隔符则使用空格。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Eval List

**语法:** y = Eval List( list )

**说明:** 返回一个列表，其中所有项均已经过计算。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

```

### Insert

**语法:** z = Insert( x, y, <i> )

**说明:** 返回在第 i 位插入 y 的列表 x 的副本，若没有指定可选 i 参数，则追加至末尾。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**语法:** Insert Into( x, y, <i> )

**说明:** 通过在集合中插入“y”修改列表、关联数组或显示框“x”。列表和显示框支持通过可选的“i”指定位置；若不指定位置，则会追加项。注意:“x”参数必须是变量。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**示例 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**示例 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Is List

**语法:** y = Is List( x )

**说明:** 若 x 参数是列表，则返回 1；否则返回 0。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Items

**语法:** wl = Items(<[first last]>, s, <delim>, <Include Boundary Delimiters(0|1)>)

**说明:** 返回由 delim 参数中指定的任意一个（且只能为一个）字符所分隔的子字符串列表（可能为空）。若没有 delim，则使用空格字符。若 delim 为空字符串，则每个字符均被视为一个单独的项。

**JMP添加的版本:** 15

**示例 1**

```jsl

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**示例 4**

```jsl

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Length

**语法:** l = Length( x )

**说明:** 返回给定字符串的长度（字符数）、列表的长度（项数）、关联数组中的长度（键数）、blob 的长度（字节数）、矩阵的长度（元素数）或命名空间/类的长度（函数和变量数）。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Length( "Café" );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**示例 4**

```jsl

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### List

**语法:** y = {a, b, ...}; y = List( a, b, ... )

**说明:** 创建项列表，但不计算它们。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### N Items

**语法:** y = N Items( x )

**说明:** 返回列表中的项数、矩阵中的元素数、关联数组中的键数、命名空间中的函数和变量数、类对象中的方法和变量数或显示框中的子项数。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**示例 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Remove

**语法:** y = Remove( x, <i>, <n=1> ); y = Remove( x, {list} )

**说明:** 返回列表 x 的以下副本: 从第 i 项开始删除 n 项，或删除 list 参数指定的项列表。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**语法:** Remove From( x, <i>, <n=1> )

**说明:** 通过删除项来修改列表、关联数组或显示框“x”。关联数组使用键值“i”指定要删除的项。列表和显示框从位于“i”的项开始删除。若指定“n”选项，则将从列表中同时删除多项。注意:“x”参数必须是变量。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**示例 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**示例 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Reverse

**语法:** y = Reverse( x )

**说明:** 返回项顺序颠倒的列表 x 的副本。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**语法:** Reverse Into( x )

**说明:** 通过颠倒项顺序修改列表或显示框 x。注意: x 参数必须是变量。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**示例 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Set Difference

**语法:** list = Set Difference( list1, list2 )

**说明:** 返回出现在 list1 但未出现在 list2 中的项列表。项可以重复。若参数是多重响应列引用，则将其视为当前行中的该参数值的列表。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**语法:** list = Set Intersect( list1, list2 )

**说明:** 返回同时出现在两个列表中的项列表。项可以重复。若参数是多重响应列引用，则将其视为当前行中的该参数值的列表。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**语法:** list = Set Union( list1, list2 )

**说明:** 返回出现在任一列表中的项列表。项可以重复。若参数是多重响应列引用，则将其视为当前行中的该参数值的列表。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Show( Set Union( {1, 3}, {3, 2} ) );
Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
all = {};
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
For Each Row( all = Set Union( all, :sports ) );
all = Set Unique( all );
Show( all );

```

### Set Unique

**语法:** list = Set Unique( list )

**说明:** 返回出现在输入列表中的唯一项的列表。若参数是多重响应列引用，则将其视为当前行中的该参数值的列表。

**JMP添加的版本:** 19

```jsl

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**语法:** y = Shift( x, <n=1> )

**说明:** 返回列表 x 的以下副本: 将头 n 项移动到列表末尾，若 n 为负数，则将后 n 项移动到列表的起始位置。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**语法:** Shift Into( x, <n=1> )

**说明:** 修改列表或显示框 x: 将头 n 项移动到列表末尾，若 n 为负数，则将后 n 项移动到列表的起始位置。注意: x 参数必须是变量。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**示例 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Sort List

**语法:** y = Sort List( x )

**说明:** 返回列表 x 的项以升序排序的副本。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**语法:** Sort List Into( x )

**说明:** 通过以升序排序项修改列表 x。注意: x 参数必须是变量。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Substitute

**语法:** y = Substitute( x, patternExpr1, replacementExpr1, ... )

y = Substitute( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**说明:** 返回字符串、列表或表达式 x 的副本，将每个模式表达式的实例替换为相应的替换表达式。若 x 是字符串，则可选 <<IGNORECASE 参数允许不区分大小写匹配。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**示例 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**示例 4**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**示例 5**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**示例 6**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**语法:** Substitute Into( x, patternExpr1, replacementExpr1, ... )

Substitute Into( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**说明:** 修改字符串、列表或表达式 x，将每个模式表达式的实例替换为相应的替换表达式。请注意，x 参数必须是变量。若 x 是字符串，则可选 <<IGNORECASE 参数允许不区分大小写匹配。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**示例 2**

```jsl

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**示例 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**示例 4**

```jsl

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Words

**语法:** wl = Words( <[first last]>, s, <delim>)

**说明:** 返回由 delim 参数中指定的任意字符所分隔的子字符串列表。若没有 delim，则使用空格字符。若 delim 为空字符串，则每个字符均被视为一个单独的词。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

