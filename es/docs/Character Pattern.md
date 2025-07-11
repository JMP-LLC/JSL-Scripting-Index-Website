# Character Pattern



### Pat Abort

**Sintaxis:** Pat Abort()

**Descripción:** Genera un valor de patrón que provoca que la coincidencia completa falle de inmediato sin que se produzcan reintentos de coincidencia.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Pat Altern( pat1, pat2, ... )

**Descripción:** Genera un valor de patrón que coincide con cualquiera de los patrones indicados. Generalmente escrito así: pat1 | pat2 | ....

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")) >>
	result
);
result;

```

### Pat Any

**Sintaxis:** Pat Any( string )

**Descripción:** Genera un valor de patrón que coincida con cualquier carácter de la cadena.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Sintaxis:** Pat Arb( pattern )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result + Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Sintaxis:** Pat Arb No( pattern )

**Descripción:** Genera un valor de patrón que coincide con su argumento cero o más veces. Lo mismo que patRepeat(pattern,0,infinity,RELUCTANT); (*? en regex).

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@" + Pat Arb No( "c" )
	 >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Sintaxis:** Pat At( variable )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres y asigna la posición actual del cursor a una variable. Generalmente escrito así: patpos()>>variable.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Sintaxis:** Pat Break( string )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres que no pertenecen a la cadena de caracteres y se detiene antes de un carácter (requerido) de la cadena.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
b = "- ";
Pat Match(
	"one two three-",
	Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) )
);
word;

```

### Pat Concat

**Sintaxis:** Pat Concat( pat1, pat2, ... )

**Descripción:** Genera un valor de patrón que coincide con cada uno de los sucesivos patrones indicados. Generalmente escrito así: pat1 + pat2 + ....

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Sintaxis:** Pat Conditional( pattern, variable )

**Descripción:** Genera un valor de patrón que coincide con el patrón indicado y almacena el texto de coincidencia en una variable en caso de éxito. Generalmente escrito así: pattern >? variable.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Sintaxis:** Pat Fail()

**Descripción:** Genera un valor de patrón que siempre falla al intentar una coincidencia hacia adelante, lo cual fuerza al buscador a reintentar alternativas.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Pat Fence()

**Descripción:** Genera un valor de patrón que coincide con cero caracteres hacia adelante y falla al reintentar la coincidencia, lo cual hace que ésta falle totalmente. También se utiliza para reducir la pila de reintentos de coincidencias con el patrón.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
rc = Pat Match(
	"123456789",
	(Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3"
);
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Sintaxis:** Pat Immediate( pattern, variable )

**Descripción:** Genera un valor de patrón que coincide con el patrón indicado y almacena el texto de coincidencia e inmediatamente almacena el texto de coincidencia en una variable. Generalmente escrito así: pattern >> variable.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Sintaxis:** Pat Len( n )

**Descripción:** Genera un valor de patrón que coincide con n caracteres.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Sintaxis:** Pat Look Ahead( pattern, <0|1> )

**Descripción:** Una coincidencia de patrón de ancho cero después de la posición actual. El segundo argumento opcional tiene el valor predeterminado 0. 1 indica una coincidencia negativa o la ausencia de coincidencia.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, "s" + Pat Look Ahead( "'" ), "z" ), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, "s" + Pat Look Ahead( "'", 1 ), "z" ), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Ejemplo 3**

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

**Sintaxis:** Pat Look Behind( pattern, <0|1> )

**Descripción:** Una coincidencia de patrón de ancho cero antes de la posición actual. El segundo argumento opcional tiene el valor predeterminado 0. 1 indica una coincidencia negativa o la ausencia de coincidencia.

**JMP Versión agregada:** Antes de la versión 14

**Ejemplo 1**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, Pat Look Behind( "'" ) + "s", "z" ), /* find an s that IS preceded by an apostrophe and replace it with z */
	Print( test )
);

```

**Ejemplo 2**

```js

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, Pat Look Behind( "'", 1 ) + "s", "z" ), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

**Ejemplo 3**

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

**Sintaxis:** Pat Match( source, pattern, <replacement> )

**Descripción:** Busca la coincidencia de patrones en la variable pattern frente a la cadena de caracteres contenida en la variable source. El texto que haya coincidido se sustituye por el texto replacement opcional.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Pat Not Any( string )

**Descripción:** Genera un valor de patrón que coincida con cualquier carácter ajeno a la cadena.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match(
	text,
	Pat Repeat( Pat Not Any( delimiter ) ) >> word + Pat Any( delimiter )
);
word;

```

### Pat Pos

**Sintaxis:** Pat Pos( n )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres cuando el cursor se encuentra en la posición n. Si no se indica ningún argumento, la función Pat Pos() devuelve la posición del cursor para la asignación >> o >?: patpos()>>variable.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Pat R Pos( n )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres cuando el cursor se encuentra a n caracteres del final.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Sintaxis:** Pat R Tab( n )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres para mover el cursor hacia adelante hasta n caracteres antes del final.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Sintaxis:** Pat Regex( string )

**Descripción:** Genera un valor de patrón que coincide con la expresión regular de la cadena de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Sintaxis:** Pat Rem()

**Descripción:** Genera un valor de patrón que coincide con el resto del texto.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Sintaxis:** Pat Repeat( pattern, <min=1>, <max=infinity>, <GREEDY or RELUCTANT=GREEDY> )

**Descripción:** Genera un valor de patrón que coincide con el patrón indicado entre min y max veces.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Sintaxis:** Pat Span( string )

**Descripción:** Genera un valor de patrón que coincide con uno o más caracteres de la cadena de caracteres.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Sintaxis:** Pat String( string )

**Descripción:** Genera un valor de patrón que coincide con la cadena de caracteres. Generalmente, la cadena de caracteres se puede usar sin usar la función Pat String().

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Pat Succeed()

**Descripción:** Genera un valor de patrón que siempre coincide con cero caracteres incluso al reintentar la coincidencia.

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Pat Tab( n )

**Descripción:** Genera un valor de patrón que coincide con cero o más caracteres para mover el cursor hacia adelante hasta la posición n.

**JMP Versión agregada:** Antes de la versión 14

```js

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Sintaxis:** Pat Test( expression )

**Descripción:** Genera un valor de patrón que coincide con cero caracteres cuando la expresión es no nula. La expresión se vuelve a evaluar durante cada prueba, como si se utilizase Expr().

**JMP Versión agregada:** Antes de la versión 14

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

**Sintaxis:** Regex Match( source, pattern, <replacement | NULL>, <MATCHCASE> )

**Descripción:** Ejecuta una coincidencia de expresión regular y devuelve una lista de texto totalmente coincidente y las coincidencias de cada referencia inversa creada por un paréntesis abierto. Opcionalmente, el tercer argumento puede especificar una cadena de sustitución para toda la coincidencia; la cadena de sustitución puede utilizar referencias inversas.

**JMP Versión agregada:** Antes de la versión 14

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

