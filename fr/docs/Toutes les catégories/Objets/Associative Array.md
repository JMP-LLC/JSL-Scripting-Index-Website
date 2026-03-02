# Associative Array



## Constructeurs associés

### Associative Array

**Syntaxe :** y = Associative Array( {{key1, value1}, ...} ); y = Associative Array( keys, values )

**Description :** Crée un tableau associatif, également appelé dictionnaire ou table de hachage. Sous la forme à deux arguments, les codes et valeurs peuvent être une liste, une matrice ou une colonne de table de données.

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );ex["green"] = 3;ex << get contents;

```

## Messages d'éléments

### Contains

**Syntaxe :** bool = AAobj &lt;&lt; Contains( key | AAobj )

**Description :** Examine si la clé ou le jeu de clés se trouve dans le tableau associatif. Voir également « Contient l’élément », pour un exemple plus simple.

```jsl

Local(	{rhymes = ["mouse" => "house",	"car" => "star",	"orange" => ""], words = ["mouse" => 42,	"car" => 54]},	rhymes << Contains( words ));

```

### Contains Item

**Syntaxe :** bool = AAobj &lt;&lt; Contains Item( key )

**Description :** Examine si la clé se trouve dans le tableau associatif. Voir aussi Contient, qui possède des fonctionnalités supplémentaires.

```jsl

Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]},	rhymes << Contains Item( "car" ));

```

### First

**Syntaxe :** key = AAobj &lt;&lt; first

**Description :** Itérateur pour tableau associatif.

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},	x = aa << First;	While( !Is Empty( x ),		words = words || aa[x];		x = aa << Next( x );	);	words;);

```

### Get Contents

**Syntaxe :** list = AAObj &lt;&lt; Get Contents

**Description :** Renvoie le contenu du tableau associatif sous forme d&apos;une liste.

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Contents );

```

### Get Default Value

**Syntaxe :** value = AAobj &lt;&lt; Get Default Value()

**Description :** Renvoie la valeur renvoyée par le tableau associatif pour les clés non trouvées.

```jsl

Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */	aa << Insert( "set item" ); /* used for sets, value is 1 */	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa ););

```

### Get Keys

**Syntaxe :** list = AAObj &lt;&lt; Get Keys

**Description :** Renvoie la liste des clés trouvées dans le tableau associatif.

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Keys );

```

### Get Value

**Syntaxe :** value = AAobj &lt;&lt; Get Value( key )

**Description :** Renvoie la valeur stockée sous la clé dans le tableau associatif.

```jsl

Local( {prices = Associative Array( {{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}} )},	prices << getvalue( "orange" ) /* or prices["orange"] */);

```

### Get Values

**Syntaxe :** list = AAObj &lt;&lt; Get Values

**Description :** Renvoie une liste de valeurs trouvées dans le tableau associatif.

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Values );

```

### Insert

**Syntaxe :** AAobj1 &lt;&lt; Insert( AAobj2 | key, { value } )

**Description :** Insère un tableau associatif dans un autre ou stocke la valeur sous une clé dans le tableau associatif. Voir Insérer un élément, pour un exemple plus simple.

```jsl

Local( {decode = [".-" => "a", "-..." => "b"], others = ["..." => "s", "-.-." => "c"]},	decode << Insert( others );	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];);

```

### Insert Item

**Syntaxe :** AAobj &lt;&lt; Insert Item( key, value )

**Description :** Stocke la valeur sous une clé dans le tableau associatif. Voir aussi Insérer, qui dispose des fonctionnalités supplémentaires.

```jsl

Local( {decode = [".-" => "a", "-..." => "b"]},	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/	decode["-.-."] || decode[".-"] || decode["-..."];);

```

### Intersect

**Syntaxe :** AAobj1 &lt;&lt; Intersect( AAobj2 )

**Description :** Traite un tableau associatif comme un ensemble d’objets. Les valeurs doivent être 1 pour les objets appartenant à l’ensemble. La valeur par défaut doit être 0. L’ensemble actuel est remplacé par son intersection avec l’ensemble contenu dans le message.

**Exemple 1**

```jsl

Local( {red things = [=> 0], round things = [=> 0]},  /* default values must be zero for intersect to work */	red things << Insert( "apple" ) << Insert( "blood" ) << Insert( "stop light" ) <<	Insert( "mars" );	round things << Insert( "earth" ) << Insert( "mars" ) << Insert( "apple" ) <<	Insert( "orange" );	red and round = red things;	red and round << Intersect( round things );	red and round << Get Keys;);

```

**Exemple 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" ); // select where could be used with :age<=12 & :sex=="M" in one step.  this is a demo of set operations with associative arrays.// associative array([2,4,7]) builds a set containing keys 2,4,7 with a value of 1 and all other possible keys have a value of 0dt << Select Where( :age <= 12 );preteen = Associative Array( dt << Get Selected Rows ); // get selected rows returns an arraydt << SelectWhere( :sex == "M" );male = Associative Array( dt << GetSelectedRows ); // the array creates a "set" of itemsdesiredSelection = preteen; // copy the set because the following <<intersect happens in-placedesiredSelection << intersect( male ); // two sets can be intersected, producing the items that are in set1 AND set2dt << clear select; // clear, because <<SelectRows extends an existing selectiondt << selectrows( desiredSelection << getkeys ); // males <= 12

```

### Next

**Syntaxe :** key = AAobj &lt;&lt; next( previous key )

**Description :** Itérateur pour tableau associatif.

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},	x = aa << First;	While( !Is Empty( x ),		words = words || aa[x];		x = aa << Next( x );	);	words;);

```

### Remove

**Syntaxe :** AAobj1 &lt;&lt; Remove( AAobj2 | key )

**Description :** Supprime le jeu de clés ou la clé du tableau associatif. Voir également « Supprimer l’élément », pour un exemple plus simple.

```jsl

Local( {primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );	primes << GetKeys; /* retrieve a list of remaining keys */);

```

### Remove Item

**Syntaxe :** AAobj &lt;&lt; Remove Item( key )

**Description :** Supprime la clé du tableau associatif. Voir aussi Supprimer, qui possède des fonctionnalités supplémentaires.

```jsl

Local(	{primes = [2 => 1,	3 => 1,	4 => 1,	5 => 1,	6 => 1,	7 => 1,	8 => 1,	9 => 1] /* all the values are 1; they are not actually used */	, p, test},	p = primes << First; /* iterate through keys */	While( !Is Empty( p ), /* empty key means finished iterating */		test = p; /* remember the key before advancing */		p = primes << Next( p ); /* advance to next key before removing this key */		If( test == 4 | test == 6 | test > 7, /* not the most sophisticated way to make primes */			primes << Remove Item( test ) /* here it is! remove a key from the Associative Array */		);	);	primes << GetKeys; /* retrieve a list of remaining keys */);

```

### Set Default Value

**Syntaxe :** AAobj &lt;&lt; Set Default Value( value )

**Description :** Modifie la valeur renvoyée par le tableau associatif pour les clés non trouvées.

```jsl

Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */	aa << Insert( "set item" ); /* used for sets, value is 1 */	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa ););

```

