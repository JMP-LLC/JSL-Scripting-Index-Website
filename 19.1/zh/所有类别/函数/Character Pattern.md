# Character Pattern



### Pat Abort

**语法:** Pat Abort()

**说明:** 生成模式值，它导致整个匹配立即失败，且不进行备份和重试。

**JMP添加的版本:** 早于版本 14

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Altern

**语法:** Pat Altern( pat1, pat2, ... )

**说明:** 生成与所提供的任一模式匹配的模式值。通常编写为 pat1 | pat2 | ...。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match(	"123456789",	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result);result;

```

### Pat Any

**语法:** Pat Any( string )

**说明:** 生成与字符串中任意字符匹配的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

operators = Pat Any( "*+-/" );text = "abc+def";Pat Match( text, operators >> op );op;

```

### Pat Arb

**语法:** Pat Arb( pattern )

**说明:** 生成与零个或更多字符匹配的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match(	"123nonnumeric456",	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" ));result;

```

### Pat Arb No

**语法:** Pat Arb No( pattern )

**说明:** 生成与其参数匹配零次或更多次的模式值。等同于 patRepeat(pattern,0,infinity,RELUCTANT); (\*? in regex)。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match(	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c);" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**语法:** Pat At( variable )

**说明:** 生成与零个字符匹配的模式值，并将当前光标位置赋给变量。通常编写为 patpos()>>variable。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );result;

```

### Pat Break

**语法:** Pat Break( string )

**说明:** 生成与字符串外零个或更多字符匹配、遇到字符串中（所需）字符即停止的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

b = "- ";Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );word;

```

### Pat Concat

**语法:** Pat Concat( pat1, pat2, ... )

**说明:** 生成与所提供的所有模式依次匹配的模式值。通常编写为 pat1 + pat2 + ...。

**JMP添加的版本:** 早于版本 14

```jsl

num = Pat Break( "," );sep = ",";Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );result;

```

### Pat Conditional

**语法:** Pat Conditional( pattern, variable )

**说明:** 生成模式值，它与所提供的模式匹配，成功后在变量中存储匹配的文本。通常编写为 pattern >? variable。

**JMP添加的版本:** 早于版本 14

```jsl

a = "unchanged";b = "unchanged";Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );" a=" || a || " b=" || b;

```

### Pat Fail

**语法:** Pat Fail()

**说明:** 生成模式值，它向前匹配始终失败，强制匹配器重试备择项。

**JMP添加的版本:** 早于版本 14

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Fence

**语法:** Pat Fence()

**说明:** 生成模式值，其向前匹配零个字符，且在返回上一步时会失败，从而导致匹配失败。也可用于删除模式备份堆栈。

**JMP添加的版本:** 早于版本 14

```jsl

rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**语法:** Pat Immediate( pattern, variable )

**说明:** 生成模式值，它与所提供的模式匹配，并立即在变量中存储匹配的文本。通常编写为 pattern >> variable。

**JMP添加的版本:** 早于版本 14

```jsl

a = "unchanged";b = "unchanged";Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );" a=" || a || " b=" || b;

```

### Pat Len

**语法:** Pat Len( n )

**说明:** 生成与 n 个字符匹配的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );result;

```

### Pat Look Ahead

**语法:** Pat Look Ahead( pattern, &lt;0|1&gt; )

**说明:** 在当前位置之后的零宽度模式匹配。第二个可选参数默认值为 0。1 表明负匹配或不匹配。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		"s" + Pat Look Ahead( "'" ),		"z"	), /* find an s that IS followed by an apostrophe and replace it with z */	Print( test ));

```

**示例 2**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		"s" + Pat Look Ahead( "'", 1 ),		"z"	), /* find an s that is NOT followed by an apostrophe and replace it with z */	Print( test ));

```

**示例 3**

```jsl

Test = "a bb ccc dddd";While( /* keep repeating the match until it won't match */	Pat Match(		Test,		Pat Len( 1 ) >> xxx/* find any character */		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),		"@" /* replacement for the middle character of a triple */	),	Print( test ) /* show each intermediate result */);

```

### Pat Look Behind

**语法:** Pat Look Behind( pattern, &lt;0|1&gt; )

**说明:** 在当前位置之前的零宽度模式匹配。第二个可选参数默认值为 0。1 表明负匹配或不匹配。

**JMP添加的版本:** 早于版本 14

**示例 1**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		Pat Look Behind( "'" ) + "s",		"z"	), /* find an s that IS preceded by an apostrophe and replace it with z */Print( test ));

```

**示例 2**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		Pat Look Behind( "'", 1 ) + "s",		"z"	), /* find an s that is NOT preceded by an apostrophe and replace it with a z */	Print( test ));

```

**示例 3**

```jsl

Test = "a bb ccc dddd";While( /* keep repeating the match until it won't match */	Pat Match(		Test,		Pat Len( 1 ) >> xxx/* find any character */		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),		"@" /* replacement for the middle character of a triple */	),	Print( test ) /* show each intermediate result */);

```

### Pat Match

**语法:** Pat Match( source, pattern, &lt;replacement&gt; )

**说明:** 根据 source 变量中的字符串，在 pattern 变量中执行模式匹配；可选 replacement 文本将替换匹配的文本。

**JMP添加的版本:** 早于版本 14

```jsl

string = "John Smith";Pat Match(	string,	Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last,	last || ", " || first);string;

```

### Pat Not Any

**语法:** Pat Not Any( string )

**说明:** 生成与字符串外任意字符匹配的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

delimiter = ";,-";text = "fish,dog,cat,";Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );word;

```

### Pat Pos

**语法:** Pat Pos( n )

**说明:** 生成模式值，当光标处于位置 n 时，其与零个字符匹配。若无参数，Pat Pos() 函数返回 >> 或 >? 赋值的光标位置: patpos()>>variable。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match(	"ab3defghi",	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )	+Pat Pos( /* no argument returns current position = 6 */ ) >> result);result;

```

### Pat R Pos

**语法:** Pat R Pos( n )

**说明:** 生成模式值，当光标位于距末端 n 个字符处时，其与零个字符匹配。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );result;

```

### Pat R Tab

**语法:** Pat R Tab( n )

**说明:** 生成与零个或更多字符匹配的模式值，以便将光标向前移动到距末端 n 个字符处。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );result;

```

### Pat Regex

**语法:** Pat Regex( string )

**说明:** 生成与字符串中正则表达式匹配的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

string = "John Smith";Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );string;

```

### Pat Rem

**语法:** Pat Rem()

**说明:** 生成与其余文本匹配的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );result;

```

### Pat Repeat

**语法:** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**说明:** 生成与所提供模式匹配次数在 min 和 max 之间的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match(	"xyz aaaaabbbbbbccc 3 c is matched because greedy",	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c);" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**语法:** Pat Span( string )

**说明:** 生成与字符串中一个或更多字符匹配的模式值。

**JMP添加的版本:** 早于版本 14

```jsl

sp = Pat Span( "0123456789.-" );Pat Match( "junk=-33.44e33", sp >> result );result;

```

### Pat String

**语法:** Pat String( string )

**说明:** 生成与字符串匹配的模式值。通常可单独使用该字符串而无需使用 Pat String() 函数。

**JMP添加的版本:** 早于版本 14

```jsl

x = Pat String( "a" || "b" );Pat Match(	"acbdbababc",	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after);"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**语法:** Pat Succeed()

**说明:** 生成模式值，它始终与零个字符匹配（即使返回上一步时）。

**JMP添加的版本:** 早于版本 14

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Tab

**语法:** Pat Tab( n )

**说明:** 生成与零个或更多字符匹配的模式值，以便将光标向前移动到位置 n 处。

**JMP添加的版本:** 早于版本 14

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );result;

```

### Pat Test

**语法:** Pat Test( expression )

**说明:** 生成模式值，当表达式非零时，它与零个字符匹配。每次检验时都会重新计算该表达式，如同使用了 Expr()。

**JMP添加的版本:** 早于版本 14

```jsl

nCats = 0;whichCat = 3;string = "catch a catnapping cat in a catsup factory";rc = Pat Match(	string,	"cat" + Pat Test(		nCats = nCats + 1;		nCats == whichCat;	),	"dog");string;

```

### Regex Match

**语法:** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**说明:** 执行正则表达式匹配，并返回整个匹配文本以及由左圆括号创建的每个向后引用的匹配项的列表。可选的第三个参数指定整个匹配的替换字符串；替换字符串可以使用向后引用。

**JMP添加的版本:** 早于版本 14

```jsl

source = "believe";// [aeiou] matches exactly one vowel// .*? is a reluctant (vs greedy) match. try it without the ? to see the greedy behavior// \1 is a back reference to the first ( group -- [aeiou] is inside the first ( groupmatches = Regex Match(	source, // a variable allows updating some text	"([aeiou])(.*?)(\1)", // a regex with parens makes back references	">\2<" // the match is replaced by text that uses a back reference);Show( source, matches );// results:// source = "b>li<ve";// matches = {"elie", "e", "li", "e"};// notes:// matches[1] is the entire match AND the part that will be replaced// matches[2] is back ref \1  this is the letter e matched by [aeiou]// matches[3] is back ref \2  this is the letter li matched by .*?// matches[4] is back ref \3  this is another letter e match by \1, which was an e//// the * operator is greedy by default, taking as many characters as it can, and// only backing up if required. Adding the ? makes it reluctant, taking characters// one at a time and allowing the remaining pattern to have a chance earlier.

```

