# Character Pattern



### Pat Abort

**Sintassi:** Pat Abort()

**Descrizione:** Genera un valore pattern che causa l&apos;immediato insuccesso dell&apos;intera corrispondenza senza backup né ulteriore esecuzione.

**JMP Versione aggiunta:** prima della versione 14

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Altern

**Sintassi:** Pat Altern( pat1, pat2, ... )

**Descrizione:** Genera un valore pattern che corrisponde a uno qualsiasi dei pattern forniti. Generalmente scritto come pat1 | pat2 | ....

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(	"123456789",	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >> result);result;

```

### Pat Any

**Sintassi:** Pat Any( string )

**Descrizione:** Genera un valore pattern che corrisponderà a un qualsiasi carattere della stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

operators = Pat Any( "*+-/" );text = "abc+def";Pat Match( text, operators >> op );op;

```

### Pat Arb

**Sintassi:** Pat Arb( pattern )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(	"123nonnumeric456",	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" ));result;

```

### Pat Arb No

**Sintassi:** Pat Arb No( pattern )

**Descrizione:** Genera un valore pattern che corrisponde al proprio argomento zero o più volte. Identico a patRepeat(pattern,0,infinity,RELUCTANT); (\*? in regex).

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" ) >> c);" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Sintassi:** Pat At( variable )

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri e assegna la posizione del cursore corrente a variabile. Generalmente scritto come patpos()>>variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );result;

```

### Pat Break

**Sintassi:** Pat Break( string )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri non nella stringa, interrompendosi prima di un carattere (richiesto) nella stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

b = "- ";Pat Match( "one two three-", Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) ) );word;

```

### Pat Concat

**Sintassi:** Pat Concat( pat1, pat2, ... )

**Descrizione:** Genera un valore pattern che corrisponde a turno a ognuno dei pattern forniti. Generalmente scritto come pat1 + pat2 + ....

**JMP Versione aggiunta:** prima della versione 14

```jsl

num = Pat Break( "," );sep = ",";Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );result;

```

### Pat Conditional

**Sintassi:** Pat Conditional( pattern, variable )

**Descrizione:** Genera un valore pattern che corrisponde al pattern fornito e memorizza il testo corrispondente in variabile se riesce. Generalmente scritto come pattern >? variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

a = "unchanged";b = "unchanged";Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );" a=" || a || " b=" || b;

```

### Pat Fail

**Sintassi:** Pat Fail()

**Descrizione:** Genera un valore pattern che fallisce sempre la corrispondenza in avanti, obbligando il sistema a provare delle alternative.

**JMP Versione aggiunta:** prima della versione 14

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Fence

**Sintassi:** Pat Fence()

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri in avanti e non riesce a effettuare il backup causando la mancata corrispondenza. Utilizzato anche per ridurre la pila di backup dei pattern.

**JMP Versione aggiunta:** prima della versione 14

```jsl

rc = Pat Match( "123456789", (Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3" );"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Sintassi:** Pat Immediate( pattern, variable )

**Descrizione:** Genera un valore pattern che corrisponde al pattern fornito e memorizza immediatamente il testo corrispondente in variabile. Generalmente scritto come pattern >> variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

a = "unchanged";b = "unchanged";Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );" a=" || a || " b=" || b;

```

### Pat Len

**Sintassi:** Pat Len( n )

**Descrizione:** Genera un valore pattern che corrisponde a n caratteri.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );result;

```

### Pat Look Ahead

**Sintassi:** Pat Look Ahead( pattern, &lt;0|1&gt; )

**Descrizione:**  Una corrispondenza pattern larghezza zero dopo la posizione corrente. Il secondo argomento opzionale predefinito pari a 0. 1 indica una corrispondenza negativa o una mancata corrispondenza.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		"s" + Pat Look Ahead( "'" ),		"z"	), /* find an s that IS followed by an apostrophe and replace it with z */	Print( test ));

```

**Esempio 2**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		"s" + Pat Look Ahead( "'", 1 ),		"z"	), /* find an s that is NOT followed by an apostrophe and replace it with z */	Print( test ));

```

**Esempio 3**

```jsl

Test = "a bb ccc dddd";While( /* keep repeating the match until it won't match */	Pat Match(		Test,		Pat Len( 1 ) >> xxx/* find any character */		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),		"@" /* replacement for the middle character of a triple */	),	Print( test ) /* show each intermediate result */);

```

### Pat Look Behind

**Sintassi:** Pat Look Behind( pattern, &lt;0|1&gt; )

**Descrizione:** Una corrispondenza pattern larghezza zero prima della posizione corrente. Il secondo argomento facoltativo predefinito pari a 0. 1 indica una corrispondenza negativa o una mancata corrispondenza.

**JMP Versione aggiunta:** prima della versione 14

**Esempio 1**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		Pat Look Behind( "'" ) + "s",		"z"	), /* find an s that IS preceded by an apostrophe and replace it with z */Print( test ));

```

**Esempio 2**

```jsl

Test = "These are Bob's sons' nails.";While( /* repeat the match until it fails */Pat Match(		Test,		Pat Look Behind( "'", 1 ) + "s",		"z"	), /* find an s that is NOT preceded by an apostrophe and replace it with a z */	Print( test ));

```

**Esempio 3**

```jsl

Test = "a bb ccc dddd";While( /* keep repeating the match until it won't match */	Pat Match(		Test,		Pat Len( 1 ) >> xxx/* find any character */		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */		+ Pat Look Ahead( Expr( xxx ) /* and look ahead one position */ ),		"@" /* replacement for the middle character of a triple */	),	Print( test ) /* show each intermediate result */);

```

### Pat Match

**Sintassi:** Pat Match( source, pattern, &lt;replacement&gt; )

**Descrizione:** Esegue la corrispondenza pattern nella variabile pattern rispetto alla stringa nella variabile source; il testo opzionale replacement sostituisce il testo corrispondente.

**JMP Versione aggiunta:** prima della versione 14

```jsl

string = "John Smith";Pat Match(	string,	Pat Break( " " ) >> first + Pat Span( " " ) + Pat Rem() >> last,	last || ", " || first);string;

```

### Pat Not Any

**Sintassi:** Pat Not Any( string )

**Descrizione:** Genera un valore pattern che corrisponderà a un qualsiasi carattere non nella stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

delimiter = ";,-";text = "fish,dog,cat,";Pat Match( text, Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter ) );word;

```

### Pat Pos

**Sintassi:** Pat Pos( n )

**Descrizione:** Genera un valore pattern che corrisponde ai caratteri zero se il cursore è nella posizionen. Senza argomento, la funzione restituisce la posizionePat Pos() del cursore per assegnazione >> o >?: patpos()>>variable.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(	"ab3defghi",	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )	+Pat Pos( /* no argument returns current position = 6 */ ) >> result);result;

```

### Pat R Pos

**Sintassi:** Pat R Pos( n )

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri se il cursore è n caratteri dalla fine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );result;

```

### Pat R Tab

**Sintassi:** Pat R Tab( n )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri per spostare il cursore in avanti a n caratteri dalla fine.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );result;

```

### Pat Regex

**Sintassi:** Pat Regex( string )

**Descrizione:** Genera un valore pattern che corrisponde all&apos;espressione regolare nella stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

string = "John Smith";Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );string;

```

### Pat Rem

**Sintassi:** Pat Rem()

**Descrizione:** Genera un valore pattern che corrisponde al resto del testo.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );result;

```

### Pat Repeat

**Sintassi:** Pat Repeat( pattern, &lt;min=1&gt;, &lt;max=infinity&gt;, &lt;GREEDY or RELUCTANT=GREEDY&gt; )

**Descrizione:** Genera un valore pattern che corrisponde al pattern fornito tra tempi min e max.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match(	"xyz aaaaabbbbbbccc 3 c is matched because greedy",	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c);" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Sintassi:** Pat Span( string )

**Descrizione:** Genera un valore pattern che corrisponde a uno o più caratteri della stringa.

**JMP Versione aggiunta:** prima della versione 14

```jsl

sp = Pat Span( "0123456789.-" );Pat Match( "junk=-33.44e33", sp >> result );result;

```

### Pat String

**Sintassi:** Pat String( string )

**Descrizione:** Genera un valore pattern che corrisponde alla stringa. In generale la stringa può essere utilizzata senza la funzione Pat String().

**JMP Versione aggiunta:** prima della versione 14

```jsl

x = Pat String( "a" || "b" );Pat Match(	"acbdbababc",	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after);"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Sintassi:** Pat Succeed()

**Descrizione:** Genera un valore pattern che corrisponde sempre a zero caratteri, anche durante il backup.

**JMP Versione aggiunta:** prima della versione 14

```jsl

source = "xxxxx";n = 0;pattern = Pat Succeed() + Pat Arb() >> xs + Expr(	Show( xs );	n = n + 1;	If( n > 16,		Pat Abort(),		Pat Fail()	););rc = Pat Match( source, pattern, NULL, FULLSCAN );

```

### Pat Tab

**Sintassi:** Pat Tab( n )

**Descrizione:** Genera un valore pattern che corrisponde a zero o più caratteri per spostare il cursore in avanti in posizione n.

**JMP Versione aggiunta:** prima della versione 14

```jsl

Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );result;

```

### Pat Test

**Sintassi:** Pat Test( expression )

**Descrizione:** Genera un valore pattern che corrisponde a zero caratteri se l&apos;espressione è diversa da zero. L&apos;espressione è rivalutata durante ogni test come se fosse stato utilizzato Expr().

**JMP Versione aggiunta:** prima della versione 14

```jsl

nCats = 0;whichCat = 3;string = "catch a catnapping cat in a catsup factory";rc = Pat Match(	string,	"cat" + Pat Test(		nCats = nCats + 1;		nCats == whichCat;	),	"dog");string;

```

### Regex Match

**Sintassi:** Regex Match( source, pattern, &lt;replacement | NULL&gt;, &lt;MATCHCASE&gt; )

**Descrizione:** Esegue una corrispondenza dell&apos;espressione regolare e restituisce un elenco dell&apos;intero testo corrispondente e le corrispondenze per ogni riferimento all&apos;indietro creato da una parentesi aperta. Facoltativamente, il terzo argomento specifica una stringa di sostituzione per l&apos;intera corrispondenza; la stringa di sostituzione può utilizzare riferimenti all&apos;indietro.

**JMP Versione aggiunta:** prima della versione 14

```jsl

source = "believe";// [aeiou] matches exactly one vowel// .*? is a reluctant (vs greedy) match. try it without the ? to see the greedy behavior// \1 is a back reference to the first ( group -- [aeiou] is inside the first ( groupmatches = Regex Match(	source, // a variable allows updating some text	"([aeiou])(.*?)(\1)", // a regex with parens makes back references	">\2<" // the match is replaced by text that uses a back reference);Show( source, matches );// results:// source = "b>li<ve";// matches = {"elie", "e", "li", "e"};// notes:// matches[1] is the entire match AND the part that will be replaced// matches[2] is back ref \1  this is the letter e matched by [aeiou]// matches[3] is back ref \2  this is the letter li matched by .*?// matches[4] is back ref \3  this is another letter e match by \1, which was an e//// the * operator is greedy by default, taking as many characters as it can, and// only backing up if required. Adding the ? makes it reluctant, taking characters// one at a time and allowing the remaining pattern to have a chance earlier.

```

