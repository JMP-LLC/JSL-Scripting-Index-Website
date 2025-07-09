# Character Pattern



### Pat Abort

**Syntax:** Pat Abort()

**Description:** Generates a pattern value that causes the entire match to fail immediately with no further backup and retry.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

**Syntax:** Pat Altern( pat1, pat2, ... )

**Description:** Generates a pattern value that matches any one of the supplied patterns. Generally written as pat1 | pat2 | ....

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result
);
result;

```

### Pat Any

**Syntax:** Pat Any( string )

**Description:** Generates a pattern value that will match any one character in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Syntax:** Pat Arb( pattern )

**Description:** Generates a pattern value that matches zero or more characters.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Syntax:** Pat Arb No( pattern )

**Description:** Generates a pattern value that matches its argument zero or more times. Same as patRepeat(pattern,0,infinity,RELUCTANT); (*? in regex).

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Syntax:** Pat At( variable )

**Description:** Generates a pattern value that matches zero characters and assigns the current cursor position to variable. Generally written as patpos()>>variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Syntax:** Pat Break( string )

**Description:** Generates a pattern value that matches zero or more characters not in the string, stopping before a (required) character in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
b = "- ";
Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );
word;

```

### Pat Concat

**Syntax:** Pat Concat( pat1, pat2, ... )

**Description:** Generates a pattern value that matches each of the supplied patterns in turn. Generally written as pat1 + pat2 + ....

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Syntax:** Pat Conditional( pattern, variable )

**Description:** Generates a pattern value that matches the supplied pattern and stores the matched text in variable on success. Generally written as pattern >? variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Syntax:** Pat Fail()

**Description:** Generates a pattern value that always fails to match going forward, forcing the matcher to retry alternatives.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

**Syntax:** Pat Fence()

**Description:** Generates a pattern value that matches zero characters going forwards and fails when backing up, causing the match to fail. Also used to trim down the pattern backup stack.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Syntax:** Pat Immediate( pattern, variable )

**Description:** Generates a pattern value that matches the supplied pattern and immediately stores the matched text in variable. Generally written as pattern >> variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Syntax:** Pat Len( n )

**Description:** Generates a pattern value that matches n characters.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Syntax:** Pat Look Ahead( pattern, <0|1> )

**Description:** A zero width pattern match after the current position. The second optional argument defaults to 0. 1 designates a negative match, or a non-match.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'" ),
		"z"
	), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Example 2**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		"s" + Pat Look Ahead( "'", 1 ),
		"z"
	), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Example 3**

```js

Names Default To Here( 1 );
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

**Syntax:** Pat Look Behind( pattern, <0|1> )

**Description:** A zero width pattern match before the current position. The second optional argument defaults to 0. 1 designates a negative match, or a non-match.

**JMP Version Added:** Before version 14

**Example 1**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'" ) + "s",
		"z"
	), /* find an s that IS preceded by an apostrophe and replace it with z */
	Print( test )
);

```

**Example 2**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'", 1 ) + "s",
		"z"
	), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

**Example 3**

```js

Names Default To Here( 1 );
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

**Syntax:** Pat Match( source, pattern, <replacement> )

**Description:** Executes the pattern match in the pattern variable against the string in the source variable; optional replacement text replaces the matched text.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
string = "John Smith";
Pat Match(
	string,
	Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last,
	last || ", " || first
);
string;

```

### Pat Not Any

**Syntax:** Pat Not Any( string )

**Description:** Generates a pattern value that will match any one character not in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );
word;

```

### Pat Pos

**Syntax:** Pat Pos( n )

**Description:** Generates a pattern value that matches zero characters if the cursor is at position n. With no argument, the Pat Pos() function returns the cursor position for >> or >? assignment: patpos()>>variable.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >> result
);
result;

```

### Pat R Pos

**Syntax:** Pat R Pos( n )

**Description:** Generates a pattern value that matches zero characters if the cursor is n characters from the end.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Syntax:** Pat R Tab( n )

**Description:** Generates a pattern value that matches zero or more characters to move the cursor forward to n characters before the end.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Syntax:** Pat Regex( string )

**Description:** Generates a pattern value that matches the regular expression in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Syntax:** Pat Rem()

**Description:** Generates a pattern value that matches the remainder of the text.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Syntax:** Pat Repeat( pattern, <min=1>, <max=infinity>, <GREEDY or RELUCTANT=GREEDY> )

**Description:** Generates a pattern value that matches the supplied pattern between min and max times.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Syntax:** Pat Span( string )

**Description:** Generates a pattern value that matches one or more characters in the string.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Syntax:** Pat String( string )

**Description:** Generates a pattern value that matches the string. Generally the string can be used without using the Pat String() function.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Syntax:** Pat Succeed()

**Description:** Generates a pattern value that always matches zero characters, even when backing up.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

**Syntax:** Pat Tab( n )

**Description:** Generates a pattern value that matches zero or more characters to move the cursor forward to position n.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Syntax:** Pat Test( expression )

**Description:** Generates a pattern value that matches zero characters if the expression is nonzero. The expression is re-evaluated during each test, as if Expr() was used.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );
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

**Syntax:** Regex Match( source, pattern, <replacement | NULL>, <MATCHCASE> )

**Description:** Executes a regular expression match and returns a list of the entire matched text and the matches for each back reference created by an open parenthesis. Optionally, the third argument specifies a replacement string for the entire match; the replacement string can use back references.

**JMP Version Added:** Before version 14

```js

Names Default To Here( 1 );

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

