# Associative Array



## 연결된 생성자

### Associative Array

**구문:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**설명:** 사전 또는 해시 맵이라고도 하는 연관 배열을 생성합니다. 인수가 두 개인 형식에서 &apos;keys&apos;와 &apos;values&apos;는 목록, 행렬 또는 데이터 테이블 열이 될 수 있습니다.

```jsl

Names Default To Here( 1 );
ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

## 항목 메시지

### Contains

**구문:** bool = AAobj &lt;&lt; Contains( key | AAobj )

**설명:** 키 또는 키 집합이 연관 배열에 있는지 조사합니다. 간단한 예제는 Contains Item을 참조하십시오.

```jsl

Names Default To Here( 1 );
Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""], words = ["mouse" => 42, "car" => 54]},
	rhymes << Contains( words )
);

```

### Contains Item

**구문:** bool = AAobj &lt;&lt; Contains Item( key )

**설명:** 키가 연관 배열에 있는지 조사합니다. 추가 기능이 있는 Contains를 참조하십시오.

```jsl

Names Default To Here( 1 );
Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]}, rhymes << Contains Item( "car" ) );

```

### First

**구문:** key = AAobj &lt;&lt; first

**설명:** 연관 배열에 대한 반복자

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

**구문:** list = AAObj &lt;&lt; Get Contents

**설명:** 연관 배열의 내용을 목록으로 반환합니다.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Contents );

```

### Get Default Value

**구문:** value = AAobj &lt;&lt; Get Default Value()

**설명:** 찾을 수 없는 키에 대해 연관 배열이 반환할 값을 반환합니다.

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

**구문:** list = AAObj &lt;&lt; Get Keys

**설명:** 연관 배열에서 찾은 키 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Keys );

```

### Get Value

**구문:** value = AAobj &lt;&lt; Get Value( key )

**설명:** 연관 배열의 키에 저장된 값을 반환합니다.

```jsl

Names Default To Here( 1 );
Local( {prices = Associative Array( {{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}} )},
	prices << getvalue( "orange" ) /* or prices["orange"] */
);

```

### Get Values

**구문:** list = AAObj &lt;&lt; Get Values

**설명:** 연관 배열에서 찾은 값 목록을 반환합니다.

```jsl

Names Default To Here( 1 );
Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Values );

```

### Insert

**구문:** AAobj1 &lt;&lt; Insert( AAobj2 | key, { value } )

**설명:** 연관 배열을 다른 연관 배열에 삽입하거나 값을 연관 배열에 있는 키에 저장합니다. 간단한 예제는 Insert Item을 참조하십시오.

```jsl

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"], others = ["..." => "s", "-.-." => "c"]},
	decode << Insert( others );
	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];
);

```

### Insert Item

**구문:** AAobj &lt;&lt; Insert Item( key, value )

**설명:** 값을 연관 배열의 키에 저장합니다. 추가 기능이 있는 Insert를 참조하십시오.

```jsl

Names Default To Here( 1 );
Local( {decode = [".-" => "a", "-..." => "b"]},
	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/
	decode["-.-."] || decode[".-"] || decode["-..."];
);

```

### Intersect

**구문:** AAobj1 &lt;&lt; Intersect( AAobj2 )

**설명:** 연관 배열을 개체 집합으로 처리합니다. 집합 내 개체에 대해 값이 1이어야 합니다. 기본값은 0이어야 합니다. 현재 집합은 메시지에 있는 집합과의 교차를 통해 대체됩니다.

**예제 1**

```jsl

Names Default To Here( 1 );
Local( {red things = [=> 0], round things = [=> 0]},  /* default values must be zero for intersect to work */
	red things << Insert( "apple" ) << Insert( "blood" ) << Insert( "stop light" ) << Insert( "mars" );
	round things << Insert( "earth" ) << Insert( "mars" ) << Insert( "apple" ) << Insert( "orange" );
	red and round = red things;
	red and round << Intersect( round things );
	red and round << Get Keys;
);

```

**예제 2**

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

**구문:** key = AAobj &lt;&lt; next( previous key )

**설명:** 연관 배열에 대한 반복자

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

**구문:** AAobj1 &lt;&lt; Remove( AAobj2 | key )

**설명:** 키 집합 또는 키를 연관 배열에서 제거합니다. 간단한 예제는 Remove Item을 참조하십시오.

```jsl

Names Default To Here( 1 );
Local( {primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},
	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );
	primes << GetKeys; /* retrieve a list of remaining keys */
);

```

### Remove Item

**구문:** AAobj &lt;&lt; Remove Item( key )

**설명:** 키를 연관 배열에서 제거합니다. 추가 기능이 있는 Remove를 참조하십시오.

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

**구문:** AAobj &lt;&lt; Set Default Value( value )

**설명:** 찾을 수 없는 키에 대해 연관 배열이 반환할 값을 변경합니다.

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

