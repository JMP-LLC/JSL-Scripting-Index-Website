# Character



## 函数

### Blob To Char

**语法:** s = Blob To Char( blob, <encoding="utf-8"> )

**说明:** 使用指定编码，根据 BLOB（二进制大对象）创建字符串。支持的编码包括 utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、shift_jis、euc-jp和 ascii~hex。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**语法:** m = Blob To Matrix( blob, type, bytesEach, endian, <nCols=1> )

**说明:** 通过将 blob 形式的字节转换为数值来生成矩阵。type 为“int”、“uint”或“float”。bytesEach 为 1、2、4 或 8。endian 表示第一个字节是最高位的（“big”）还是最低位的（“little”）；“native”表示机器的本机格式。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**语法:** s = Char( x, <w>, <d>, < <<Use Locale( Boolean ) >, < <<Full Precision( Boolean ) > )

**说明:** 返回 x 的字符串表示，若 x 参数为数值型，则使用最大宽度 w 和小数位数 d。<<FullPrecision 使用所有可用的精度写入数值。

**JMP添加的版本:** 早于版本 14

**使用语言/区域**

```jsl

Names Default To Here( 1 );
Char( 2.1, <<Use Locale( 1 ) );

```

**全精度**

```jsl

Names Default To Here( 1 );
Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

**简单**

```jsl

Names Default To Here( 1 );
Char( Pi(), 10, 4 );

```

### Char To Blob

**语法:** blob = Char To Blob( string, <encoding="utf-8"> )

**说明:** 使用指定编码，根据字符串创建 BLOB（二进制大对象）。支持的编码包括 utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、shift_jis、euc-jp和 ascii~hex。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**语法:** h = Char To Hex( value, <"integer">|<encoding="utf-8"> )

**说明:** 返回与给定值和编码对应的十六进制文本，可以是数值、字符串或 blob。若值是数值，除非已提供可选参数 "integer"，否则使用 IEEE 754 64 位编码。支持的编码包括 utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、ascii~hex、shift_jis 和 euc-jp。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**语法:** scw = Collapse Whitespace( s )

**说明:** 去除首尾空格字符并删除内部的重复空格

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**语法:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**说明:** 将几个字符串拼接为一个更长的字符串，或将几个矩阵拼接为一个更大的矩阵。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
[1 2] || [3 4] || [5 6];

```

### Concat Items

**语法:** string = Concat Items( {list of strings}, <separatorString> )

**说明:** 将字符串列表连接成一个长字符串，并用分隔符分隔相邻的字符串，若未指定分隔符则使用空格。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**语法:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**说明:** 在原位拼接。a ||= b 等价于 a = a || b。这是一个赋值运算符。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
ex = "hello ";
ex ||= "world";

```

### Contains

**语法:** pos = Contains( x, item, <start=1> )

**说明:** 返回“item”在“x”中的位置。若提供了 start，则会从该位置起计。若 start 为负，则从 length( x ) - start 开始往回搜索。参数 x 可以是一个字符串，也可以是一个列表。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**语法:** b = Contains Item( x, item | list | Pat Regex(), <delimiter> )

**说明:** 返回一个布尔值，该值指示某个单词 [项]、单词列表之一 [列表] 或模式 [模式] 是否与 [x] 所表示的文本中的某一单词匹配。文字由可选分隔符 [分隔符] 字符串中的字符来分隔。逗号“quot;,”是默认分隔符。从输入文本字符串 [x] 的每个提取单词的末尾修剪掉空格。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**示例 3**

```jsl

Names Default To Here( 1 );
//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**语法:** b = Ends With( s, sub )

**说明:** 若 s 以 sub 结束，则返回 1；否则返回 0。s 和 sub 参数可同时为字符串或同时为列表。等价于 Right( s, Length( sub )) == sub。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**语法:** h = Hex( value, <"integer">|<encoding="utf-8">|<Base(number)>,<Pad To(number)> )

**说明:** 返回与给定值和编码对应的十六进制（或其他基数系统）文本，可以是数值、字符串或 blob。若值是数值，除非已提供可选参数 integer 或 Base，否则使用 IEEE 754 64 位编码。若指定了 Base，则函数返回与该基数系统中的指定数字而非十六进制对应的文本。基数必须是介于 2 和 36（包括端值）的整数值。支持的编码包括 utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、ascii~hex、shift_jis 和 euc-jp。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**语法:** blob = Hex To Blob( hex string )

**说明:** 根据给定的十六进制编码字符串（还可以包含空格、逗点、回车符和换行符），来创建 BLOB（二进制大对象）。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Hex To Blob( "FF78CE" );

```

### Hex To Char

**语法:** s = Hex To Char( hextext, <encoding="utf-8"> )

**说明:** 使用指定编码返回与十六进制文本对应的文本。支持的编码包括  utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、ascii~hex、shift_jis 和 euc-jp。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**语法:** x = Hex To Number( hextext, <Base(number)> )

**说明:** 返回与十六进制（或其他基数系统）文本对应的数字。16 进制数转换成 IEEE 754 64 位浮点数，否则视输入为十六进制整数。若指定了 Base，则文本视为表示该基数系统中数字的字符串。基数必须是介于 2 和 36（包括端值）的整数值。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Hex To Number( "11110000", Base( 2 ) );

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

### Item

**语法:** w = Item( n|[first last], s, <delim>, <Unmatched(result string)>, <Include Boundary Delimiters(0|1)>)

**说明:** 返回 s 参数的第 n 项，其中项是由 delim 参数中指定的任意一个（且只能为一个）字符所分隔的子字符串（可能为空）。若没有 delim，则使用空格字符。若 delim 为空字符串，则每个字符均被视为一个单独的项。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Item( 5, "http://www.jmp.com", ":/." );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Item( [2 -1], "This is a sentence" );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**示例 4**

```jsl

Names Default To Here( 1 );
Item( 5, "a b c d", Unmatched( "None" ) );

```

**示例 5**

```jsl

Names Default To Here( 1 );
Item( 2, "abcd", "" );

```

**示例 6**

```jsl

Names Default To Here( 1 );
Item( 2, ",abcd", ",", Include Boundary Delimiters );

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

### Left

**语法:** sub = Left( s, n, <filler> )

**说明:** 返回原始字符串或列表 s 的截断或填补版本。结果包含左侧的 n 个字符或列表项，若 s 的长度小于 n，则在右侧填补任意 filler。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

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

### Lowercase

**语法:** sl = Lowercase( s )

**说明:** 将指定字符串中的大写字母转换为小写字母。大小写规则与语言/区域相关。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**语法:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**说明:** 根据矩阵创建 blob: 将该矩阵元素转换为 1、2 或 4 个字节的带符号或无符号整数，或者转换为 4 或 8 字节的浮点数。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**语法:** r = Munger( s, startPos, findStringOrNChars, <replaceString> )

**说明:** 根据参数组合，在 s 参数中搜索子字符串或位置。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### Num

**语法:** y = Num( s, < <<Use Locale( use=1 ) >, < <<Restrict > )

**说明:** 使用任何内置格式（包括日期和货币格式）将 s 转换为一个数值。若转换失败，返回缺失值。可选 <<Restrict 仅允许使用整数、小数和科学记数法格式进行转换。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Regex

**语法:** result = Regex( source, pattern, <format, <IGNORECASE>, <GLOBALREPLACE>> )

**说明:** 在 source 文本中搜索 pattern 的匹配。format 默认值为“\0”（整个匹配），但可以是“Fred”（对于常数替换）或“\1”（使用 pattern 中第一个圆括号匹配的文本）。返回数值缺失值表示无匹配。默认大小写必须匹配。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

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

### Repeat

**语法:** s = Repeat( x, n, <m=1> )

**说明:** 返回由 x 参数指定的文本、矩阵或列表本身拼接 n 次的结果。若 x 是数字或矩阵，则 n 表示垂直重复，可选参数 m 表示水平重复。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

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

### Right

**语法:** sub = Right( s, n, <filler> )

**说明:** 返回原始字符串或列表 s 的截断或填补版本。结果包含右侧的 n 个字符或列表项，若 s 的长度小于 n，则在左侧填补任意 filler。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Right( "http://www.jmp.com", 3 );

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

### Starts With

**语法:** b = Starts With( s, sub )

**说明:** 若 s 以 sub 开始，则返回 1；否则返回 0。s 和 sub 参数可同时为字符串或同时为列表。等价于 Left( s, Length( sub )) == sub。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Starts With( "http://www.jmp.com", "http:" );

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

### Substr

**语法:** sub = Substr( s, start, <count> )

**说明:** 返回由 count 个字符组成的 s 的部分字符串，从位置 start 开始计算。count 为负或缺失表示字符串的其余部分。start 为负表示从字符串末尾的 start 个字符开始计算。Substr() 函数也适用于列表。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Text Score

**语法:** score vector = Text Score( text column, text-to-number, <weighting>, <{<center>, <scale>, scoring matrix}>);

**说明:** 用于在文本分析器中创建评分公式。文本转数字参数是可将小写单词映射为数字的关联数组。权重参数为 "Binary", "Ternary", "Count", "LogCount", "LCA" 或 TFLogIDF 的反转文档频数权重数组。评分矩阵必须具有与关联数组中的单词数相同的列数，或多一个若是 LCA。输出为得分向量。若未指定评分矩阵，则返回计数得分向量。若未指定权重，则使用“计数”。该函数不支持“要组合的词干”选项。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Titlecase

**语法:** st = Titlecase( s )

**说明:** 转换为首字母大写

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Titlecase( "The dog crossed the road" );

```

### Trim

**语法:** sub = Trim( s, <left|right|both> )

**说明:** 返回已删除首部或尾部空格字符的字符串 s 副本。第二个参数指定首部空格或尾部空格字符。若没有第二个参数，则删除首尾两端的空格字符。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Trim( " title   ", both );

```

### Trim Whitespace

**语法:** sub = Trim Whitespace( s, <left|right|both> )

**说明:** 返回已删除首部或尾部空格字符的字符串 s 副本。第二个参数指定首部空格或尾部空格字符。若没有第二个参数，则删除首尾两端的空格字符。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**语法:** su = Uppercase( s )

**说明:** 将指定字符串中的小写字母转换为大写字母。大小写规则与语言/区域相关。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
Uppercase( "Café #23" );

```

### Word

**语法:** w = Word( n|[first last], s, <delim>, <Unmatched(result string)>

**说明:** 返回字符串 s 的第 n 个词，其中词为由delim 参数中任意数量的任意字符所分隔的子字符串。若没有 delim，则使用空格字符。若 delim 为空字符串，则每个字符均视为一个单独的词。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Names Default To Here( 1 );
Word( 3, "http://www.jmp.com", ":/." );

```

**示例 2**

```jsl

Names Default To Here( 1 );
Word( [2 -1], "This is a sentence" );

```

**示例 3**

```jsl

Names Default To Here( 1 );
Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**示例 4**

```jsl

Names Default To Here( 1 );
Word( 5, "a b c d", Unmatched( "None" ) );

```

**示例 5**

```jsl

Names Default To Here( 1 );
Word( 2, "abcd", "" );

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

### XPath Query

**语法:** result = XPath Query(xml, xpath expression)

**说明:** 针对 XML 文档运行 XPath 查询。

**JMP添加的版本:** 早于版本 14

```jsl

Names Default To Here( 1 );
result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

