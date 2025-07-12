# Character Pattern



## Fonctions

### Pat Abort

**Syntaxe :** Pat Abort()

**Description :** Génère une valeur de configuration qui entraîne l&apos;échec immédiat de toute la correspondance, sans sauvegarde ni nouvelle tentative.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs
+Expr(
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

**Syntaxe :** Pat Altern( pat1, pat2, ... )

**Description :** Génère une valeur de configuration qui correspond à une quelconque des configurations données. Généralement exprimée comme pat1 | pat2 | ....

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match(
	"123456789",
	((Pat Pos( 2 ) + "1") | (Pat Pos( 1 ) + "2") | (Pat Pos( 0 ) + "3")
	) >> result
);
result;

```

### Pat Any

**Syntaxe :** Pat Any( string )

**Description :** Génère une valeur de configuration qui correspondra à n&apos;importe quel caractère présent dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
operators = Pat Any( "*+-/" );
text = "abc+def";
Pat Match( text, operators >> op );
op;

```

### Pat Arb

**Syntaxe :** Pat Arb( pattern )

**Description :** Génère une valeur de configuration qui correspond à zéro ou plusieurs caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match(
	"123nonnumeric456",
	Pat Span( "0123456789" ) + Pat Arb() >> result
	+Pat Span( "0123456789" )
);
result;

```

### Pat Arb No

**Syntaxe :** Pat Arb No( pattern )

**Description :** Génère une valeur de configuration qui correspond à son argument zéro ou plusieurs fois. Équivalent à patRepeat(pattern,0,infinity,RELUCTANT) ; (*? dans une expression régulière).

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbb@ccc no c is matched because reluctant",
	Pat Arb No( "a" ) >> a + Pat Arb No( "b" ) >> b + "@"
	+Pat Arb No( "c" ) >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat At

**Syntaxe :** Pat At( variable )

**Description :** Génère une valeur de configuration qui correspond à un nombre de caractères égal à zéro et affecte la position actuelle du curseur à une variable. Généralement exprimée comme patpos()>>variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat At( result ) );
result;

```

### Pat Break

**Syntaxe :** Pat Break( string )

**Description :** Génère une valeur de configuration qui correspond à aucun ou plusieurs caractères non présents dans la chaîne et s&apos;arrête avant un caractère (nécessaire) dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
b = "- ";
Pat Match(
	"one two three-",
	Pat Repeat( Pat Break( b ) >> word + Pat Any( b ) )
);
word;

```

### Pat Concat

**Syntaxe :** Pat Concat( pat1, pat2, ... )

**Description :** Génère une valeur de configuration qui correspond à chacune des configurations données à tour de rôle. Généralement exprimée comme pat1 + pat2 + ....

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
num = Pat Break( "," );
sep = ",";
Pat Match( "1.3,7.9,8.66", num + sep + num >> result + sep + num );
result;

```

### Pat Conditional

**Syntaxe :** Pat Conditional( pattern, variable )

**Description :** Génère une valeur de configuration qui correspond à la configuration donnée et enregistre le texte correspondant dans une variable en cas de succès. Généralement exprimée comme pattern >? variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >? a | Pat Len( 1 ) >? b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Fail

**Syntaxe :** Pat Fail()

**Description :** Génère une valeur de configuration qui échoue toujours la correspondance vers l&apos;avant, obligeant le système à essayer des alternatives.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs
+Expr(
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

**Syntaxe :** Pat Fence()

**Description :** Génère une valeur de configuration qui correspond aux caractères zéro vers l&apos;avant, et échoue lors de la sauvegarde, provoquant l&apos;échec de la correspondance. Également utilisé pour réduire la pile de sauvegardes de configuration.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
rc = Pat Match(
	"123456789",
	(Pat Len( 1 ) | Pat Len( 2 )) >> result + Pat Fence() + "3"
);
"rc=" || Char( rc ) || " result=" || result;

```

### Pat Immediate

**Syntaxe :** Pat Immediate( pattern, variable )

**Description :** Génère une valeur de configuration qui correspond à la configuration donnée et enregistre le texte correspondant dans une variable. Généralement exprimée comme pattern >> variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
a = "unchanged";
b = "unchanged";
Pat Match( "123456789", (Pat Len( 2 ) >> a | Pat Len( 1 ) >> b) + "2" );
" a=" || a || " b=" || b;

```

### Pat Len

**Syntaxe :** Pat Len( n )

**Description :** Génère une valeur de configuration qui correspond à n caractères.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match( "123456789", Pat Len( 2 ) + Pat Len( 3 ) >> result );
result;

```

### Pat Look Ahead

**Syntaxe :** Pat Look Ahead( pattern, <0|1> )

**Description :** Une correspondance de largeur zéro après la position actuelle. Le deuxième argument facultatif prend par défaut la valeur zéro. 1 désigne une correspondance négative, ou une absence de correspondance.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, "s" + Pat Look Ahead( "'" ), "z" ), /* find an s that IS followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, "s" + Pat Look Ahead( "'", 1 ), "z" ), /* find an s that is NOT followed by an apostrophe and replace it with z */
	Print( test )
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead(
			Expr( xxx ) /* and look ahead one position */
		),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Look Behind

**Syntaxe :** Pat Look Behind( pattern, <0|1> )

**Description :** Une correspondance de largeur zéro avant la position actuelle. Le deuxième argument facultatif prend par défaut la valeur zéro. 1 désigne une correspondance négative, ou une absence de correspondance.

**JMP Version ajoutée :** Avant la version 14

**Exemple 1**

```jsl

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, Pat Look Behind( "'" ) + "s", "z" ), /* find an s that IS preceded by an apostrophe and replace it with z */
	Print( test )
);

```

**Exemple 2**

```jsl

Names Default To Here( 1 );
Test = "These are Bob's sons' nails.";
While( /* repeat the match until it fails */
	Pat Match( Test, Pat Look Behind( "'", 1 ) + "s", "z" ), /* find an s that is NOT preceded by an apostrophe and replace it with a z */
	Print( test )
);

```

**Exemple 3**

```jsl

Names Default To Here( 1 );
Test = "a bb ccc dddd";
While( /* keep repeating the match until it won't match */
	Pat Match(
		Test,
		Pat Len( 1 ) >> xxx/* find any character */
		+ Pat Look Behind( Expr( xxx ) + Expr( xxx ) ) /* back up 2 positions, which includes the character just found */
		+ Pat Look Ahead(
			Expr( xxx ) /* and look ahead one position */
		),
		"@" /* replacement for the middle character of a triple */
	),
	Print( test ) /* show each intermediate result */
);

```

### Pat Match

**Syntaxe :** Pat Match( source, pattern, <replacement> )

**Description :** Exécute la correspondance de configuration dans la variable pattern sur la chaîne dans la variable source ; le texte de remplacement replacement facultatif remplace le texte correspondant.

**JMP Version ajoutée :** Avant la version 14

```jsl

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

**Syntaxe :** Pat Not Any( string )

**Description :** Génère une valeur de configuration qui correspondra à n&apos;importe quel caractère non présent dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
delimiter = ";,-";
text = "fish,dog,cat,";
Pat Match(
	text,
	Pat Repeat( Pat Not Any( delimiter ) ) >> word
	+Pat Any( delimiter )
);
word;

```

### Pat Pos

**Syntaxe :** Pat Pos( n )

**Description :** Génère une valeur de configuration qui correspond à un nombre de caractères égal à zéro si le curseur se trouve à la position n. En absence d’arguments, la fonction Pat Pos() renvoie la position du curseur pour >> ou >? affectation : patpos()>>variable.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match(
	"ab3defghi",
	Pat Pos( 2 ) + Pat Len( 1 ) >> v/*v=3*/+ Expr( Pat Len( v ) )
	+Pat Pos( /* no argument returns current position = 6 */ ) >>
	result
);
result;

```

### Pat R Pos

**Syntaxe :** Pat R Pos( n )

**Description :** Génère une valeur de configuration qui correspond à un nombre de caractères égal à zéro si le curseur est à n caractères de la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match( "quick brown fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat R Tab

**Syntaxe :** Pat R Tab( n )

**Description :** Génère une valeur de configuration qui correspond à zéro caractère ou plus pour faire avancer le curseur de n caractères avant la fin.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat R Tab( 2 ) >> result );
result;

```

### Pat Regex

**Syntaxe :** Pat Regex( string )

**Description :** Génère une valeur de configuration qui correspond à l&apos;expression régulière dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
string = "John Smith";
Regex Match( string, Pat Regex( "([^ ]+)([ ]+)([^ ]+)" ), "\3, \1" );
string;

```

### Pat Rem

**Syntaxe :** Pat Rem()

**Description :** Génère une valeur de configuration qui correspond au reste du texte.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match( "the quick fox", Pat R Pos( 3 ) + Pat Rem() >> result );
result;

```

### Pat Repeat

**Syntaxe :** Pat Repeat( pattern, <min=1>, <max=infinity>, <GREEDY or RELUCTANT=GREEDY> )

**Description :** Génère une valeur de configuration qui correspond à la configuration donnée entre min et max fois.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match(
	"xyz aaaaabbbbbbccc 3 c is matched because greedy",
	Pat Repeat( "a" ) >> a + Pat Repeat( "b" ) >> b + Pat Repeat( "c" )
	 >> c
);
" a=" || a || " b=" || b || " c=" || c;

```

### Pat Span

**Syntaxe :** Pat Span( string )

**Description :** Génère une valeur de configuration qui correspond à un ou plusieurs caractères dans la chaîne.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
sp = Pat Span( "0123456789.-" );
Pat Match( "junk=-33.44e33", sp >> result );
result;

```

### Pat String

**Syntaxe :** Pat String( string )

**Description :** Génère une valeur de configuration qui correspond à la chaîne. En général, la chaîne peut être utilisée sans la fonction. Pat String().

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
x = Pat String( "a" || "b" );
Pat Match(
	"acbdbababc",
	Pat Arb() >> before + Pat Repeat( x ) >> match + Pat Rem() >> after
);
"before=" || before || " match=" || match || " after=" || after;

```

### Pat Succeed

**Syntaxe :** Pat Succeed()

**Description :** Génère une valeur de configuration qui correspond toujours aux caractères zéro, même lors de la sauvegarde.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
source = "xxxxx";
n = 0;
pattern = Pat Succeed() + Pat Arb() >> xs
+Expr(
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

**Syntaxe :** Pat Tab( n )

**Description :** Génère une valeur de configuration qui correspond à zéro caractère ou plus pour faire avancer le curseur à la position n.

**JMP Version ajoutée :** Avant la version 14

```jsl

Names Default To Here( 1 );
Pat Match( "123456789", "23" + Pat Tab( 6 ) >> result );
result;

```

### Pat Test

**Syntaxe :** Pat Test( expression )

**Description :** Génère une valeur de configuration qui correspond à zéro caractère si l&apos;expression n&apos;est pas nulle. L&apos;expression est réévaluée pendant chaque test, équivalent à utiliser Expr().

**JMP Version ajoutée :** Avant la version 14

```jsl

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

**Syntaxe :** Regex Match( source, pattern, <replacement | NULL>, <MATCHCASE> )

**Description :** Exécute un appariement d&apos;expression régulière et renvoie une liste de l&apos;ensemble du texte apparié ainsi que les appariements pour chaque référence inverse créée par une parenthèse ouverte. Le troisième argument peut éventuellement spécifier une chaîne de remplacement pour l&apos;ensemble de l&apos;appariement ; la chaîne de remplacement peut utiliser des références inverses.

**JMP Version ajoutée :** Avant la version 14

```jsl

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

