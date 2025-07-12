# Associative Array



## Elementmeldungen

### Contains

**Syntax:** bool = AAobj << Contains( key | AAobj )

**Beschreibung:** Ermitteln, ob der Schlüssel oder Schlüsselsatz im assoziativen Array enthalten ist. Unter „Enthält Element“ finden Sie ein einfacheres Beispiel.

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

**Syntax:** bool = AAobj << Contains Item( key )

**Beschreibung:** Ermitteln, ob der Schlüssel im assoziativen Array enthalten ist. Siehe auch „Enthält“ mit zusätzlicher Fähigkeit.

```jsl

Names Default To Here( 1 );
Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]},
	rhymes << Contains Item( "car" )
);

```

### First

**Syntax:** key = AAobj << first

**Beschreibung:** Iterator für assoziatives Array.

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

**Syntax:** list = AAObj << Get Contents

**Beschreibung:** Gibt den Inhalt des assoziativen Arrays als Liste zurück.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Contents );

```

### Get Default Value

**Syntax:** value = AAobj << Get Default Value()

**Beschreibung:** Gibt den Wert zurück, den das assoziative Array für Schlüssel zurückgibt, die nicht gefunden werden.

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

**Syntax:** list = AAObj << Get Keys

**Beschreibung:** Gibt eine Liste der Schlüssel zurück, die im assoziativen Array gefunden werden.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Keys );

```

### Get Value

**Syntax:** value = AAobj << Get Value( key )

**Beschreibung:** Gibt den Wert zuürck, der unter dem Schlüssel im assoziativen Array gespeichert ist.

```jsl

Names Default To Here( 1 );
Local( {prices = Associative Array( {{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}} )},
	prices << getvalue( "orange" ) /* or prices["orange"] */
);

```

### Get Values

**Syntax:** list = AAObj << Get Values

**Beschreibung:** Gibt eine Liste der Werte zurück, die im assoziativen Array gefunden werden.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Values );

```

### Insert

**Syntax:** AAobj1 << Insert( AAobj2 | key,  { value } )

**Beschreibung:** Fügt ein assoziatives Array in ein anderes assoziatives Array ein oder speichert den Wert unter dem Schlüssel im assoziativen Array. Unter „Element einfügen“ finden Sie ein einfacheres Beispiel.

```jsl

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"], others = ["..." => "s", "-.-." => "c"]},
	decode << Insert( others );
	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];
);

```

### Insert Item

**Syntax:** AAobj << Insert Item( key, value )

**Beschreibung:** Speichert den Wert unter dem Schlüssel im assoziativen Array. Siehe auch „Einfügen“ mit zusätzlicher Fähigkeit.

```jsl

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"]},
	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/
	decode["-.-."] || decode[".-"] || decode["-..."];
);

```

### Intersect

**Syntax:** AAobj1 << Intersect( AAobj2 )

**Beschreibung:** Behandelt ein assoziatives Array als Objektsatz. Die Werte müssen für Objekte im Satz 1 sein. Der Standardwert muss 0 sein. Der aktuelle Satz wird durch die Schnittmenge mit dem Satz in der Meldung ersetzt.

**Beispiel 1**

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

**Beispiel 2**

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

**Syntax:** key = AAobj << next( previous key )

**Beschreibung:** Iterator für assoziatives Array.

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

**Syntax:** AAobj1 << Remove( AAobj2 | key )

**Beschreibung:** Entfernt den Schlüsselsatz oder den Schlüssel aus dem assoziativen Array. Unter „Element entfernen“ finden Sie ein einfacheres Beispiel.

```jsl

Names Default To Here( 1 );
Local( {primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},
	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );
	primes << GetKeys; /* retrieve a list of remaining keys */
);

```

### Remove Item

**Syntax:** AAobj << Remove Item( key )

**Beschreibung:** Entfernt den Schlüssel aus dem assoziativen Array. Siehe auch „Entfernen“ mit zusätzlicher Fähigkeit.

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

**Syntax:** AAobj << Set Default Value( value )

**Beschreibung:** Ändert den Wert, den das assoziative Array für Schlüssel zurückgibt, die nicht gefunden werden.

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

## Zugehörige Konstruktoren

### Associative Array

**Syntax:** y = Associative Array( {{key1, value1}, ...} );

y = Associative Array( keys, values )

**Beschreibung:** Erstellt ein assoziatives Array, das auch als Wörterbuch oder Hashmap bekannt ist. Im Format mit zwei Argumenten können Schlüssel und Werte eine Liste, eine Matrix oder eine Spalte in einer Datentabelle sein.

```jsl

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

