# Character Pattern



### Pat Abort

**구문:** Pat Abort()

**설명:** 전체 매칭이 추가적인 백업 및 재시도 없이 즉시 실패하도록 하는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Altern

**구문:** Pat Altern( pat1, pat2, ... )

**설명:** 제공된 패턴 중 하나와 매칭되는 패턴 값을 생성합니다. 일반적으로 pat1 | pat2 | ....으로 작성됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "123456789", ((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result );result;

```

### Pat Any

**구문:** Pat Any( string )

**설명:** 문자열의 임의 문자 하나와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

operators = Pat Any( "*+-/" );text = "abc+def";Pat Match( text, operators >> op );op;

```

### Pat Arb

**구문:** Pat Arb( pattern )

**설명:** 0개 이상의 문자와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "123nonnumeric456", Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" ) );result;

```

### Pat Arb No

**구문:** Pat Arb No( pattern )

**설명:** 해당 인수와 0번 이상 매칭되는 패턴 값을 생성합니다. patRepeat(pattern,0,infinity,RELUCTANT)와 동일합니다(정규 표현식의 \*?).

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match(	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c);" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**구문:** Pat At( variable )

**설명:** 0개 문자와 매칭되는 패턴 값을 생성하고 현재 커서 위치를 변수에 할당합니다. 일반적으로 patpos()>>variable로 작성됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );result;

```

### Pat Break

**구문:** Pat Break( string )

**설명:** 문자열에 없는 0개 이상의 문자와 매칭되는 패턴 값을 생성하고 문자열의 (요청된) 문자 앞에서 중지합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

b = "- ";Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );word;

```

### Pat Concat

**구문:** Pat Concat( pat1, pat2, ... )

**설명:** 제공된 각 값과 매칭되는 패턴 값을 순서대로 생성합니다. 일반적으로 pat1 + pat2 + ....으로 작성됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

num = Pat Break( "," );sep = ",";Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );result;

```

### Pat Conditional

**구문:** Pat Conditional( pattern, variable )

**설명:** 제공한 패턴과 매칭되는 패턴 값을 생성하고 성공할 경우 매칭되는 텍스트를 변수에 저장합니다. 일반적으로 pattern >? variable로 작성됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

a = "unchanged";b = "unchanged";Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );" a=" || a || " b=" || b;

```

### Pat Fail

**구문:** Pat Fail()

**설명:** 대체 방법을 재시도하도록 함으로써 항상 정방향 매칭에 실패하는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Fence

**구문:** Pat Fence()

**설명:** 0개 문자와 정방향으로 매칭되는 패턴 값을 생성합니다. 백업할 때는 실패하며 이 경우 매칭이 실패합니다. 패턴 백업 스택을 줄이는 데도 사용됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**구문:** Pat Immediate( pattern, variable )

**설명:** 제공한 패턴과 매칭되는 패턴 값을 생성하고 매칭되는 텍스트를 변수에 즉시 저장합니다. 일반적으로 pattern >> variable로 작성됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

a = "unchanged";b = "unchanged";Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );" a=" || a || " b=" || b;

```

### Pat Len

**구문:** Pat Len( n )

**설명:** n개 문자와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );result;

```

### Pat Look Ahead

**구문:** Pat Look Ahead( pattern, &lt;0|1&gt; )

**설명:** 현재 위치 뒤에서 너비가 0인 패턴 매칭. 두 번째 선택적 인수는 기본적으로 0입니다. 1은 부정 매칭 또는 매칭되지 않음을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match( Test, "s" + Pat Look Ahead( "'" ), "z" ), /* find an s that IS followed by an apostrophe and replace it with z */	Print( test ));

```

**예제 2**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match( Test, "s" + Pat Look Ahead( "'", 1 ), "z" ), /* find an s that is NOT followed by an apostrophe and replace it with z */	Print( test ));

```

**예제 3**

```jsl

Test = "a bb ccc dddd";While( /* keep repeating the match until it won't match */	Pat Match(		Test,		Pat Len( 1 ) >> xxx/* find any character */		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),		"@" /* replacement for the middle character of a triple */	),	Print( test ) /* show each intermediate result */);

```

### Pat Look Behind

**구문:** Pat Look Behind( pattern, &lt;0|1&gt; )

**설명:** 현재 위치 앞에서 너비가 0인 패턴 매칭. 두 번째 선택적 인수는 기본적으로 0입니다. 1은 부정 매칭 또는 매칭되지 않음을 지정합니다.

**JMP추가된 버전:** 버전 14 이전

**예제 1**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match( Test, Pat Look Behind( "'" ) + "s", "z" ), /* find an s that IS preceded by an apostrophe and replace it with z */	Print( test ));

```

**예제 2**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match( Test, Pat Look Behind( "'", 1 ) + "s", "z" ), /* find an s that is NOT preceded by an apostrophe and replace it with a z */	Print( test ));

```

**예제 3**

```jsl

Test = "a bb ccc dddd";While( /* keep repeating the match until it won't match */	Pat Match(		Test,		Pat Len( 1 ) >> xxx/* find any character */		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),		"@" /* replacement for the middle character of a triple */	),	Print( test ) /* show each intermediate result */);

```

### Pat Match

**구문:** Pat Match( source, pattern, &lt;replacement&gt; )

**설명:** source 변수의 문자열에 대해 pattern 변수의 패턴 매칭을 실행합니다. 선택적 replacement 텍스트는 매칭되는 텍스트를 대체합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

string = "John Smith";Pat Match( string, Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last, last || ", " || first );string;

```

### Pat Not Any

**구문:** Pat Not Any( string )

**설명:** 문자열에 없는 임의 문자 하나와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

delimiter = ";,-";text = "fish,dog,cat,";Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );word;

```

### Pat Pos

**구문:** Pat Pos( n )

**설명:** 커서가 위치 n에 있을 때 0개 문자와 매칭되는 패턴 값을 생성합니다. 인수가 없으면 Pat Pos() 함수는 >> 또는 >? patpos()>>variable 할당에 대한 커서 위치를 반환합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match(	"ab3defghi",	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) ) + Pat Pos(/* no argument returns current position = 6 */	) >> result);result;

```

### Pat R Pos

**구문:** Pat R Pos( n )

**설명:** 커서가 끝에서 n개 문자만큼 떨어진 위치에 있는 경우 0개 문자와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );result;

```

### Pat R Tab

**구문:** Pat R Tab( n )

**설명:** 커서를 끝에서 n개의 문자까지 전진하도록 0개 이상의 문자와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );result;

```

### Pat Regex

**구문:** Pat Regex( string )

**설명:** 문자열의 정규 표현식과 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

string = "John Smith";Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );string;

```

### Pat Rem

**구문:** Pat Rem()

**설명:** 텍스트의 나머지 부분과 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );result;

```

### Pat Repeat

**구문:** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**설명:** 제공된 패턴과 min~max번 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match(	"xyz aaaaabbbbbbccc 3 c is matched because greedy",	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c);" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**구문:** Pat Span( string )

**설명:** 문자열에 있는 하나 이상의 문자와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

sp = Pat Span( "0123456789.-" );Pat Match( "junk=-33.44e33", sp >> result );result;

```

### Pat String

**구문:** Pat String( string )

**설명:** 문자열과 매칭되는 패턴 값을 생성합니다. 일반적으로 문자열은 Pat String() 함수를 사용하지 않고 사용할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

x = Pat String( "a" || "b" );Pat Match( "acbdbababc", Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after );"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**구문:** Pat Succeed()

**설명:** 백업할 경우에도 항상 0개 문자와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Tab

**구문:** Pat Tab( n )

**설명:** 커서를 위치 n으로 전진하도록 0개 이상의 문자와 매칭되는 패턴 값을 생성합니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );result;

```

### Pat Test

**구문:** Pat Test( expression )

**설명:** 표현식이 0이 아닌 경우 0개 문자와 매칭되는 패턴 값을 생성합니다. Expr()이 사용된 것처럼 각 검정 중에 표현식이 다시 실행됩니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

nCats = 0;whichCat = 3;string = "catch a catnapping cat in a catsup factory";rc = Pat Match(	string,	"cat" + Pat Test(		nCats = nCats + 1;		nCats == whichCat;	),	"dog");string;

```

### Regex Match

**구문:** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**설명:** 정규 표현식 매칭을 실행하고 전체 매칭 텍스트 및 여는 괄호에 의해 생성된 각 역참조에 대한 매칭 목록을 반환합니다. 필요한 경우 세 번째 인수를 사용하여 전체 매칭의 대체 문자열을 지정합니다. 대체 문자열은 역참조를 사용할 수 있습니다.

**JMP추가된 버전:** 버전 14 이전

```jsl

source = "believe";// [aeiou] matches exactly one vowel// .*? is a reluctant (vs greedy) match. try it without the ? to see the greedy behavior// \1 is a back reference to the first ( group -- [aeiou] is inside the first ( groupmatches = Regex Match(	source, // a variable allows updating some text	"([aeiou])(.*?)(\1)", // a regex with parens makes back references	">\2<" // the match is replaced by text that uses a back reference);Show( source, matches );// results:// source = "b>li<ve";// matches = {"elie", "e", "li", "e"};// notes:// matches[1] is the entire match AND the part that will be replaced// matches[2] is back ref \1  this is the letter e matched by [aeiou]// matches[3] is back ref \2  this is the letter li matched by .*?// matches[4] is back ref \3  this is another letter e match by \1, which was an e//// the * operator is greedy by default, taking as many characters as it can, and// only backing up if required. Adding the ? makes it reluctant, taking characters// one at a time and allowing the remaining pattern to have a chance earlier.

```

