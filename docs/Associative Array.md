# Associative Array



### Associative Array

**Syntax:** y = Associative Array( {{key1, value1}, ...} );

y = Associative Array( keys, values )

**Description:** Creates an associative array, which is also known as a dictionary or a hash map. In the two-argument form, keys and values can be a list, matrix, or data table column.

```

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### Contains

**Syntax:** bool = AAobj << Contains( key | AAobj )

**Description:** Inquire if the key or set of keys is in the associative array.  Also see Contains Item for a simpler example.

```

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

**Description:** Inquire if the key is in the associative array.  Also see Contains, which has additional capability.

```

Names Default To Here( 1 );
Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]},
	rhymes << Contains Item( "car" )
);

```

### First

**Syntax:** key = AAobj << first

**Description:** Iterator for Associative Array.

```

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

**Description:** Returns the contents of the Associative Array as a list.

```

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Contents );

```

### Get Default Value

**Syntax:** value = AAobj << Get Default Value()

**Description:** Returns the value the Associative Array will return for keys that are not found.

```

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

**Description:** Returns a list of keys found in the Associative Array.

```

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Keys );

```

### Get Value

**Syntax:** value = AAobj << Get Value( key )

**Description:** Returns the value stored under the key in the associative array.

```

Names Default To Here( 1 );
Local(
	{prices = Associative Array( {{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}} )},
	prices << getvalue( "orange" ) /* or prices["orange"] */
);

```

### Get Values

**Syntax:** list = AAObj << Get Values

**Description:** Returns a list of values found in the Associative Array.

```

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Values );

```

### Insert

**Syntax:** AAobj1 << Insert( AAobj2 | key,  { value } )

**Description:** Inserts an associative array into another associative array or stores value under key in the associative array.  See Insert Item for a simpler example.

```

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"], others = ["..." => "s", "-.-." => "c"]},
	decode << Insert( others );
	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];
);

```

### Insert Item

**Syntax:** AAobj << Insert Item( key, value )

**Description:** Stores value under key in the associative array.  Also see Insert, which has additional capability.

```

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"]},
	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/
	decode["-.-."] || decode[".-"] || decode["-..."];
);

```

### Intersect

**Syntax:** AAobj1 << Intersect( AAobj2 )

**Description:** Treats an associative array as a set of objects.  Values must be 1 for objects in the set.  Default value must be 0.  The current set is replaced by its intersection with the set in the message.

**Example 1**

```

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

**Example 2**

```

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

**Description:** Iterator for Associative Array.

```

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

**Description:** Removes the set of keys or the key from the associative array.  Also see Remove Item for a simpler example.

```

Names Default To Here( 1 );
Local( {primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},
	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );
	primes << GetKeys; /* retrieve a list of remaining keys */
);

```

### Remove Item

**Syntax:** AAobj << Remove Item( key )

**Description:** Removes the key from the associative array.  Also see Remove, which has additional capability.

```

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

**Description:** Changes the value the Associative array will return for keys that are not found.

```

Names Default To Here( 1 );
Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */
	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */
	aa << Insert( "set item" ); /* used for sets, value is 1 */
	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */
	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */
	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa );
);

```

