# Character Pattern



### Pat Abort

**Syntax:** Pat Abort()

**Beschreibung:** Erzeugt einen Musterwert, der bewirkt, dass die gesamte Übereinstimmung sofort und ohne weitere Sicherungen oder Wiederholungen misslingt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit einem der vorgegebenen Muster übereinstimmt. Wird im Allgemeinen geschrieben als pat1 | pat2 | ....

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit einem beliebigen Zeichen in der Zeichenkette übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Syntax:** Pat Arb( pattern )

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit dem Argument kein Mal oder mehrere Male übereinstimmt. Wie patRepeat(pattern,0,infinity,RELUCTANT); (*? in Regex).

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt und der Variablen die aktuelle Cursorposition zuweist. Wird im Allgemeinen als patpos()>>variable geschrieben.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Syntax:** Pat Break( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt, die nicht in der Zeichenkette enthalten sind, und der vor einem (erforderlichen) Zeichen in der Zeichenkette stoppt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
b = "- ";
Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );
word;

```

### Pat Concat

**Syntax:** Pat Concat( pat1, pat2, ... )

**Beschreibung:** Erzeugt einen Musterwert, der nacheinander mit jedem der vorgegebenen Muster übereinstimmt. Wird im Allgemeinen geschrieben als pat1 + pat2 + ....

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Syntax:** Pat Conditional( pattern, variable )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem vorgegebenen Muster übereinstimmt, und der übereinstimmende Text wird bei Erfolg in einer Variable gespeichert. Wird im Allgemeinen als pattern >? variable geschrieben.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Syntax:** Pat Fail()

**Beschreibung:** Erzeugt einen Musterwert, der beim Vorwärtslauf niemals Übereinstimmungen findet, so dass andere Alternativen ausprobiert werden müssen.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der beim Vorwärtslauf mit Null-Zeichen übereinstimmt und beim Backup fehlschlägt, so dass keine Übereinstimmung entsteht. Dient auch zum Stutzen des Muster-Backup-Stacks.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Syntax:** Pat Immediate( pattern, variable )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem vorgegebenen Muster übereinstimmt, und der übereinstimmende Text wird sofort in einer Variable gespeichert. Wird im Allgemeinen als pattern >> variable geschrieben.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Syntax:** Pat Len( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit n Zeichen übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Syntax:** Pat Look Ahead( pattern, <0|1> )

**Beschreibung:** Eine Musterübereinstimmung mit Breite null nach der aktuellen Position. Das zweite optionale Argument ist standardmäßig 0. 1 weist auf eine negative Übereinstimmung oder eine Nichtübereinstimmung hin.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

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

**Beispiel 2**

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

**Beispiel 3**

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

**Beschreibung:** Eine Musterübereinstimmung mit Breite null vor der aktuellen Position. Das zweite optionale Argument ist standardmäßig 0. 1 weist auf eine negative Übereinstimmung oder eine Nichtübereinstimmung hin.

**JMP Version hinzugefügt:** Vor Version 14

**Beispiel 1**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */Pat Match(
		Test,
		Pat Look Behind( "'" ) + "s",
		"z"
	), /* find an s that IS preceded by an apostrophe and replace it with z */Print( test )
);

```

**Beispiel 2**

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

**Beispiel 3**

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

**Beschreibung:** Führt die Musterübereinstimmung in der Variable pattern gegen die Zeichenkette in der Variable source aus. Optional wird der übereinstimmende Text durch den Text replacement ersetzt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit einem beliebigen Zeichen übereinstimmt, das nicht in der Zeichenkette enthalten ist.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );
word;

```

### Pat Pos

**Syntax:** Pat Pos( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt, wenn der Cursor an Position n ist. Wenn kein Argument angegeben ist, gibt die Funktion Pat Pos() die Cursorposition für die Zuweisung >> oder >? zurück: patpos()>>variable.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt, wenn sich der Cursor n Zeichen vor dem Ende befindet.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Syntax:** Pat R Tab( n )

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt, um den Cursor n Zeichen vor dem Ende zu positionieren.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Syntax:** Pat Regex( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem regulären Ausdruck in der Zeichenkette übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Syntax:** Pat Rem()

**Beschreibung:** Erzeugt einen Musterwert, der mit dem Rest des Texts übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Syntax:** Pat Repeat( pattern, <min=1>, <max=infinity>, <GREEDY or RELUCTANT=GREEDY> )

**Beschreibung:** Erzeugt einen Musterwert, der mit dem vorgegebenen Muster zwischen min und max Male übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit einem oder mehreren Zeichen in der Zeichenkette übereinstimmt.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Syntax:** Pat String( string )

**Beschreibung:** Erzeugt einen Musterwert, der mit der Zeichenkette übereinstimmt. Im Allgemeinen kann die Zeichenkette ohne die Funktion Pat String() verwendet werden.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der immer mit null Zeichen übereinstimmt, auch beim Anlegen von Sicherungskopien.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Erzeugt einen Musterwert, der mit null oder mehr Zeichen übereinstimmt, um den Cursor bis zur Position n vorwärts zu bewegen.

**JMP Version hinzugefügt:** Vor Version 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Syntax:** Pat Test( expression )

**Beschreibung:** Erzeugt einen Musterwert, der mit null Zeichen übereinstimmt, wenn der Ausdruck ungleich 0 ist. Der Ausdruck wird während jedes Tests neu ausgewertet, als ob Expr() verwendet würde.

**JMP Version hinzugefügt:** Vor Version 14

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

**Beschreibung:** Führt eine Übereinstimmung von regulären Ausdrücken durch und gibt eine Liste des gesamten verglichenen Texts zurück sowie die Übereinstimmungen für jeden Rückverweis, erstellt durch eine offene Klammer. Optional gibt das dritte Argument eine Ersetzungszeichenkette für die gesamte Übereinstimmung an. Die Ersetzungszeichenkette kann Rückverweise verwenden.

**JMP Version hinzugefügt:** Vor Version 14

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

