# Character Pattern



### Pat Abort

**構文:** Pat Abort()

**説明:** バックアップも再試行も行わないまま、マッチングを即座に終了させるパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Altern

**構文:** Pat Altern( pat1, pat2, ... )

**説明:** 指定したパターンのいずれか1つとマッチするパターン値を生成する。一般的に、pat1 | pat2 | ....と記述される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result
);
result;

```

### Pat Any

**構文:** Pat Any( string )

**説明:** string内のいずれか1文字にマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**構文:** Pat Arb( pattern )

**説明:** 0個以上の文字とマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**構文:** Pat Arb No( pattern )

**説明:** 引数と0回以上マッチするパターン値を生成する。patRepeat(pattern,0,infinity,RELUCTANT); および正規表現の*?と同じ。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**構文:** Pat At( variable )

**説明:** 0文字にマッチするパターン値を生成し、現在のカーソル位置をvariableに代入する。一般的に、patpos()>>variableと記述される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**構文:** Pat Break( string )

**説明:** string内に含まれていないいずれかの文字に0文字以上でマッチするパターン値を生成する。そして、指定された文字の前で、パターンマッチを停止する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

b = "- ";
Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );
word;

```

### Pat Concat

**構文:** Pat Concat( pat1, pat2, ... )

**説明:** 指定したパターンの各々と順番にマッチするパターン値を生成する。一般的に、pat1 + pat2 + ....と記述される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**構文:** Pat Conditional( pattern, variable )

**説明:** 指定されたパターンとのマッチングを行い、成功時にマッチしたテキストを変数に格納するパターン値を生成する。一般的に、pattern >? variableとして記述される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**構文:** Pat Fail()

**説明:** 常に、マッチングを先に進めず、別のマッチングを強制的に再試行させるパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Fence

**構文:** Pat Fence()

**説明:** バックアップが生じたときはマッチングを失敗として、そのマッチングを終了させ、マッチングを先に進める、0文字とマッチするパターン値を生成する。この関数は、バックアップのスタックが増大するのを防ぐためにも利用される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**構文:** Pat Immediate( pattern, variable )

**説明:** 指定されたパターンとのマッチングを行い、そのまま即座にテキストを変数に格納するパターン値を生成する。一般的に、pattern >> variableとして記述される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**構文:** Pat Len( n )

**説明:** n文字とマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**構文:** Pat Look Ahead( pattern, &lt;0|1&gt; )

**説明:** 現在の位置以後で行うゼロ幅のパターンマッチ。第2オプション引数のデフォルトは0。1は負のマッチ、または非マッチを示す。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'" ),
		"z"
	), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

#### 例 2

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'", 1 ),
		"z"
	), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

#### 例 3

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Look Behind

**構文:** Pat Look Behind( pattern, &lt;0|1&gt; )

**説明:** 現在の位置より前で行うゼロ幅のパターンマッチ。第2オプション引数のデフォルトは0。1は負のマッチ、または非マッチを示す。

**JMP追加されたバージョン:** バージョン14より前

#### 例 1

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'" ) + "s",
		"z"
	), /* find an s that IS preceded by an apostrophe and replace it with z */Print( test )
);

```

#### 例 2

```jsl

Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'", 1 ) + "s",
		"z"
	), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

#### 例 3

```jsl

Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Match

**構文:** Pat Match( source, pattern, &lt;replacement&gt; )

**説明:** sourceの文字列に対して、patternのパターンを用いてマッチングを行う。オプションの文字列replacementを指定した場合、文字列が置換される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

string = "John Smith";
Pat Match(
	string,
	Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last,
	last || ", " || first
);
string;

```

### Pat Not Any

**構文:** Pat Not Any( string )

**説明:** string内に含まれていない文字のいずれか1文字にマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );
word;

```

### Pat Pos

**構文:** Pat Pos( n )

**説明:** カーソルがnの位置にある場合の0文字と一致するパターン値を生成する。引数を指定しなかった場合、Pat Pos()関数は、>>または>?を用いてpatpos()>>variableのように変数に代入したときのカーソル位置を戻す

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >> result
);
result;

```

### Pat R Pos

**構文:** Pat R Pos( n )

**説明:** カーソルが最後からn文字の位置の場合の0文字にマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**構文:** Pat R Tab( n )

**説明:** カーソルを最後からnの位置まで移動したときの0文字以上の文字にマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**構文:** Pat Regex( string )

**説明:** stringに指定された正規表現とマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**構文:** Pat Rem()

**説明:** テキストの残りとマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**構文:** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**説明:** 指定されたパターンとmin～max回マッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**構文:** Pat Span( string )

**説明:** string内の文字から構成されている1文字以上の文字列にマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**構文:** Pat String( string )

**説明:** stringとマッチするパターン値を生成する。一般的に、これはPat String()関数を使わずに指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**構文:** Pat Succeed()

**説明:** マッチングが見つからなくてバックアップした時でも、0文字とマッチするパターン値を常に生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs + Expr(
	Show( xs );
	n = n + 1;
	If( n > 16,
		Pat Abort(),
		Pat Fail()
	);
);
rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Tab

**構文:** Pat Tab( n )

**説明:** カーソルをnの位置まで移動したときの0文字以上の文字にマッチするパターン値を生成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**構文:** Pat Test( expression )

**説明:** 式が0以外の場合に0文字にマッチするパターン値を生成する。式は、Expr()が使用されたときのように、テストごとに再評価される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

nCats = 0;
whichCat = 3;
string = "catch a catnapping cat in a catsup factory";
rc = Pat Match(
	string,
	"cat" + Pat Test(
		nCats = nCats + 1;
		nCats == whichCat;
	),
	"dog"
);
string;

```

### Regex Match

**構文:** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**説明:** 正規表現によるマッチを実行し、完全に一致したテキストと、括弧によって作成された後方参照の一致のリストを戻す。オプションで、第3引数を使い、完全一致を置換するための文字列を指定できる。置換文字列では後方参照の使用が可能。

**JMP追加されたバージョン:** バージョン14より前

```jsl


source = "believe";
// [aeiou] matches exactly one vowel
// .*? is a reluctant (vs greedy) match. try it without the ? to see the greedy behavior
// \1 is a back reference to the first ( group -- [aeiou] is inside the first ( group
matches = Regex Match(
	source, // a variable allows updating some text
	"([aeiou])(.*?)(\1)", // a regex with parens makes back references
	">\2<" // the match is replaced by text that uses a back reference
);
Show( source, matches );
// results:
// source = "b>li<ve";
// matches = {"elie", "e", "li", "e"};
// notes:
// matches[1] is the entire match AND the part that will be replaced
// matches[2] is back ref \1  this is the letter e matched by [aeiou]
// matches[3] is back ref \2  this is the letter li matched by .*?
// matches[4] is back ref \3  this is another letter e match by \1, which was an e
//
// the * operator is greedy by default, taking as many characters as it can, and
// only backing up if required. Adding the ? makes it reluctant, taking characters
// one at a time and allowing the remaining pattern to have a chance earlier.

```

