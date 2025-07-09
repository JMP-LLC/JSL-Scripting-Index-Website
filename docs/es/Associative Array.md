# Associative Array



### Associative Array

**Sintaxis:** y = Associative Array( {{key1, value1}, ...} );

y = Associative Array( keys, values )

**Descripción:** Crea un arreglo asociativo, que también se conoce como diccionario o mapa hash. En la forma con dos argumentos, las claves y los valores pueden ser una lista, una matriz o una columna de una tabla de datos.

```js

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

### Contains

**Sintaxis:** bool = AAobj << Contains( key | AAobj )

**Descripción:** Examina si la clave o conjunto de claves están presentes en el arreglo asociativo. Véase también un ejemplo más sencillo en Contiene elemento.

```js

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

**Sintaxis:** bool = AAobj << Contains Item( key )

**Descripción:** Examina si la clave está presente en el arreglo asociativo. Véase también Contiene, que ofrece capacidades adicionales.

```js

Names Default To Here( 1 );
Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]},
	rhymes << Contains Item( "car" )
);

```

### First

**Sintaxis:** key = AAobj << first

**Descripción:** Iterador para un arreglo asociativo.

```js

Names Default To Here( 1 );
Local(
	{aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},
	x = aa << First;
	While( !Is Empty( x ),
		words = words || aa[x];
		x = aa << Next( x );
	);
	words;
);

```

### Get Contents

**Sintaxis:** list = AAObj << Get Contents

**Descripción:** Devuelve el contenido del arreglo asociativo en forma de lista.

```js

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]},
	aa << Get Contents
);

```

### Get Default Value

**Sintaxis:** value = AAobj << Get Default Value()

**Descripción:** Devuelve el valor que devolverá el arreglo asociativo cuando no encuentre una clave.

```js

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

**Sintaxis:** list = AAObj << Get Keys

**Descripción:** Devuelve una lista de las claves que contiene el arreglo asociativo.

```js

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]},
	aa << Get Keys
);

```

### Get Value

**Sintaxis:** value = AAobj << Get Value( key )

**Descripción:** Devuelve el valor almacenado en el arreglo asociativo asociado a la clave indicada.

```js

Names Default To Here( 1 );
Local(
	{prices = Associative Array(
		{{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}}
	)},
	prices << getvalue( "orange" ) /* or prices["orange"] */
);

```

### Get Values

**Sintaxis:** list = AAObj << Get Values

**Descripción:** Devuelve una lista de los valores que contiene el arreglo asociativo.

```js

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]},
	aa << Get Values
);

```

### Insert

**Sintaxis:** AAobj1 << Insert( AAobj2 | key,  { value } )

**Descripción:** Inserta un arreglo asociativo en otro o bien almacena un valor asociándolo a la clave indicada dentro del arreglo asociativo. Véase también un ejemplo más sencillo en Insertar elemento.

```js

Names Default To Here( 1 );
Local(
	{decode = [".-" => "a",
	"-..." => "b"], others = ["..." => "s",
	"-.-." => "c"]},
	decode << Insert( others );
	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];
);

```

### Insert Item

**Sintaxis:** AAobj << Insert Item( key, value )

**Descripción:** Almacena el valor vinculándolo a la clave en el arreglo asociativo. Véase también Insertar, que ofrece funcionalidades adicionales.

```js

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"]},
	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/
	decode["-.-."] || decode[".-"] || decode["-..."];
);

```

### Intersect

**Sintaxis:** AAobj1 << Intersect( AAobj2 )

**Descripción:** Trata un arreglo asociativo como un conjunto de objetos. Los valores deben ser 1 para los objetos que pertenecen al conjunto. El valor predeterminado debe ser 0. El conjunto actual se sustituye por la intersección de este conjunto con el conjunto que figura en el mensaje.

**Ejemplo 1**

```js

Names Default To Here( 1 );
Local( {red things = [=> 0], round things = [=> 0]},  /* default values must be zero for intersect to work */
	red things << Insert( "apple" ) << Insert( "blood" ) <<
	Insert( "stop light" ) << Insert( "mars" );
	round things << Insert( "earth" ) << Insert( "mars" ) << Insert( "apple" )
	 << Insert( "orange" );
	red and round = red things;
	red and round << Intersect( round things );
	red and round << Get Keys;
);

```

**Ejemplo 2**

```js

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

**Sintaxis:** key = AAobj << next( previous key )

**Descripción:** Iterador para un arreglo asociativo.

```js

Names Default To Here( 1 );
Local(
	{aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},
	x = aa << First;
	While( !Is Empty( x ),
		words = words || aa[x];
		x = aa << Next( x );
	);
	words;
);

```

### Remove

**Sintaxis:** AAobj1 << Remove( AAobj2 | key )

**Descripción:** Quita el conjunto de claves o la clave del arreglo asociativo. Véase también un ejemplo más sencillo en Quitar elemento.

```js

Names Default To Here( 1 );
Local(
	{primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},
	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );
	primes << GetKeys; /* retrieve a list of remaining keys */
);

```

### Remove Item

**Sintaxis:** AAobj << Remove Item( key )

**Descripción:** Quita la clave del arreglo asociativo. Véase también Quitar, que ofrece funcionalidades adicionales.

```js

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

**Sintaxis:** AAobj << Set Default Value( value )

**Descripción:** Modifica el valor que devolverá el arreglo asociativo en relación con las claves no encontradas.

```js

Names Default To Here( 1 );
Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */
	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */
	aa << Insert( "set item" ); /* used for sets, value is 1 */
	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */
	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */
	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa );
);

```

