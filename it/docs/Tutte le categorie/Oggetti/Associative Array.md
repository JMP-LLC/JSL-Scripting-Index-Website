# Associative Array



## Costruttori associati

### Associative Array

**Sintassi:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**Descrizione:** Crea un array associativo, noto anche come dizionario o mappa hash. Nel form a due argomenti, chiavi e valori devono essere un elenco, una matrice o una colonna di una tabella di dati.

```jsl

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

## Messaggi degli elementi

### Contains

**Sintassi:** bool = AAobj &lt;&lt; Contains( key | AAobj )

**Descrizione:** Richiede se la chiave o insieme di chiavi è nell&apos;array associativo. Vedere anche Contiene elemento per un esempio più semplice.

```jsl

Names Default To Here( 1 );
Local(
	{rhymes = ["mouse" => "house",
	"car" => "star",
	"orange" => ""], words = ["mouse" => 42,
	"car" => 54]},
	rhymes << Contains( words )
);

```

### Contains Item

**Sintassi:** bool = AAobj &lt;&lt; Contains Item( key )

**Descrizione:** Richiede se la chiave è nell&apos;array associativo. Vedere anche Contiene che dispone di ulteriori funzionalità.

```jsl

Names Default To Here( 1 );
Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]},
	rhymes << Contains Item( "car" )
);

```

### First

**Sintassi:** key = AAobj &lt;&lt; first

**Descrizione:** Iteratore per array associativo.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},
	x = aa << First;
	While( !Is Empty( x ),
		words = words || aa[x];
		x = aa << Next( x );
	);
	words;
);

```

### Get Contents

**Sintassi:** list = AAObj &lt;&lt; Get Contents

**Descrizione:** Restituisce il contenuto dell&apos;array associativo in un elenco.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Contents );

```

### Get Default Value

**Sintassi:** value = AAobj &lt;&lt; Get Default Value()

**Descrizione:** Restituisce il valore che l&apos;array associativo restituirà per le chiavi non trovate.

```jsl

Names Default To Here( 1 );
Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */
	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */
	aa << Insert( "set item" ); /* used for sets, value is 1 */
	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */
	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */
	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa );
);

```

### Get Keys

**Sintassi:** list = AAObj &lt;&lt; Get Keys

**Descrizione:** Restituisce un elenco di chiavi trovate nell&apos;array associativo.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Keys );

```

### Get Value

**Sintassi:** value = AAobj &lt;&lt; Get Value( key )

**Descrizione:** Restituisce il valore memorizzato sotto la chiave nell&apos;array associativo.

```jsl

Names Default To Here( 1 );
Local( {prices = Associative Array( {{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}} )},
	prices << getvalue( "orange" ) /* or prices["orange"] */
);

```

### Get Values

**Sintassi:** list = AAObj &lt;&lt; Get Values

**Descrizione:** Restituisce un elenco di valori trovati nell&apos;array associativo.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Values );

```

### Insert

**Sintassi:** AAobj1 &lt;&lt; Insert( AAobj2 | key, { value } )

**Descrizione:** Inserisce un array associativo in un altro array associativo o memorizza il valore sotto la chiave nell&apos;array associativo. Vedere Inserisci elemento per un esempio più semplice.

```jsl

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"], others = ["..." => "s", "-.-." => "c"]},
	decode << Insert( others );
	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];
);

```

### Insert Item

**Sintassi:** AAobj &lt;&lt; Insert Item( key, value )

**Descrizione:** Memorizza il valore sotto la chiave nell&apos;array associativo. Vedere anche Inserisci che dispone di ulteriori funzionalità.

```jsl

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"]},
	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/
	decode["-.-."] || decode[".-"] || decode["-..."];
);

```

### Intersect

**Sintassi:** AAobj1 &lt;&lt; Intersect( AAobj2 )

**Descrizione:** Tratta un array associativo come un insieme di oggetti. I valori devono essere 1 per gli oggetti dell&apos;insieme. Il valore predefinito deve essere 0. L&apos;insieme corrente è sostituito dalla sua intersezione con l&apos;insieme nel messaggio.

**Esempio 1**

```jsl

Names Default To Here( 1 );
Local( {red things = [=> 0], round things = [=> 0]},  /* default values must be zero for intersect to work */
	red things << Insert( "apple" ) << Insert( "blood" ) << Insert( "stop light" ) <<
	Insert( "mars" );
	round things << Insert( "earth" ) << Insert( "mars" ) << Insert( "apple" ) <<
	Insert( "orange" );
	red and round = red things;
	red and round << Intersect( round things );
	red and round << Get Keys;
);

```

**Esempio 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Big Class.jmp" ); 

// select where could be used with :age<=12 & :sex=="M" in one step.  this is a demo of set operations with associative arrays.
// associative array([2,4,7]) builds a set containing keys 2,4,7 with a value of 1 and all other possible keys have a value of 0

dt << Select Where( :age <= 12 );
preteen = Associative Array( dt << Get Selected Rows ); // get selected rows returns an array

dt << SelectWhere( :sex == "M" );
male = Associative Array( dt << GetSelectedRows ); // the array creates a "set" of items

desiredSelection = preteen; // copy the set because the following <<intersect happens in-place
desiredSelection << intersect( male ); // two sets can be intersected, producing the items that are in set1 AND set2

dt << clear select; // clear, because <<SelectRows extends an existing selection
dt << selectrows( desiredSelection << getkeys ); // males <= 12

```

### Next

**Sintassi:** key = AAobj &lt;&lt; next( previous key )

**Descrizione:** Iteratore per array associativo.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},
	x = aa << First;
	While( !Is Empty( x ),
		words = words || aa[x];
		x = aa << Next( x );
	);
	words;
);

```

### Remove

**Sintassi:** AAobj1 &lt;&lt; Remove( AAobj2 | key )

**Descrizione:** Rimuove la chiave o l&apos;insieme di chiavi dall&apos;array associativo. Vedere anche Rimuovi elemento per un esempio più semplice.

```jsl

Names Default To Here( 1 );
Local( {primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},
	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );
	primes << GetKeys; /* retrieve a list of remaining keys */
);

```

### Remove Item

**Sintassi:** AAobj &lt;&lt; Remove Item( key )

**Descrizione:** Rimuove la chiave dall&apos;array associativo. Vedere anche Rimuovi che dispone di ulteriori funzionalità.

```jsl

Names Default To Here( 1 );
Local(
	{primes = [2 => 1,
	3 => 1,
	4 => 1,
	5 => 1,
	6 => 1,
	7 => 1,
	8 => 1,
	9 => 1] /* all the values are 1; they are not actually used */
	, p, test},
	p = primes << First; /* iterate through keys */
	While( !Is Empty( p ), /* empty key means finished iterating */
		test = p; /* remember the key before advancing */
		p = primes << Next( p ); /* advance to next key before removing this key */
		If( test == 4 | test == 6 | test > 7, /* not the most sophisticated way to make primes */
			primes << Remove Item( test ) /* here it is! remove a key from the Associative Array */
		);
	);
	primes << GetKeys; /* retrieve a list of remaining keys */
);

```

### Set Default Value

**Sintassi:** AAobj &lt;&lt; Set Default Value( value )

**Descrizione:** Modifica il valore che l&apos;array associativo restituirà per le chiavi non trovate.

```jsl

Names Default To Here( 1 );
Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */
	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */
	aa << Insert( "set item" ); /* used for sets, value is 1 */
	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */
	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */
	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa );
);

```

