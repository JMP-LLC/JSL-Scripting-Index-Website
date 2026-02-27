# Associative Array



## 关联的构造器

### Associative Array

**语法:** y = Associative Array( {{key1, value1}, ...} );y = Associative Array( keys, values )

**说明:** 创建关联数组，也称为词典或哈希映射。在双参数形式下，键与值可以是列表、矩阵或数据表列。

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );
ex["green"] = 3;
ex << get contents;

```

## 项消息

### Contains

**语法:** bool = AAobj &lt;&lt; Contains( key | AAobj )

**说明:** 查询该键或一组键是否在关联数组中。另见“包含项”获取较简单的示例。

```jsl

Local(
	{rhymes = ["mouse" => "house",
	"car" => "star",
	"orange" => ""], words = ["mouse" => 42,
	"car" => 54]},
	rhymes << Contains( words )
);

```

### Contains Item

**语法:** bool = AAobj &lt;&lt; Contains Item( key )

**说明:** 查询该键是否在关联数组中。另见“包含”，该命令具有附加的功能。

```jsl

Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]},
	rhymes << Contains Item( "car" )
);

```

### First

**语法:** key = AAobj &lt;&lt; first

**说明:** 关联数组迭代器。

```jsl

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

**语法:** list = AAObj &lt;&lt; Get Contents

**说明:** 以列表方式返回关联数组的内容。

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Contents );

```

### Get Default Value

**语法:** value = AAobj &lt;&lt; Get Default Value()

**说明:** 返回关联数组将对未找到的键返回的值。

```jsl

Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */
	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */
	aa << Insert( "set item" ); /* used for sets, value is 1 */
	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */
	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */
	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa );
);

```

### Get Keys

**语法:** list = AAObj &lt;&lt; Get Keys

**说明:** 返回在关联数组中找到的键列表。

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Keys );

```

### Get Value

**语法:** value = AAobj &lt;&lt; Get Value( key )

**说明:** 返回储存在关联数组中的键下的值。

```jsl

Local( {prices = Associative Array( {{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}} )},
	prices << getvalue( "orange" ) /* or prices["orange"] */
);

```

### Get Values

**语法:** list = AAObj &lt;&lt; Get Values

**说明:** 返回在关联数组中找到的值列表。

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Values );

```

### Insert

**语法:** AAobj1 &lt;&lt; Insert( AAobj2 | key, { value } )

**说明:** 将一关联数组插入另一个关联数组或将值储存在该关联数组中的键下。请参见“插入项”获取较简单的示例。

```jsl

Local( {decode = [".-" => "a", "-..." => "b"], others = ["..." => "s", "-.-." => "c"]},
	decode << Insert( others );
	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];
);

```

### Insert Item

**语法:** AAobj &lt;&lt; Insert Item( key, value )

**说明:** 将值储存在关联数组中的键下。另见“插入”，该命令具有附加的功能。

```jsl

Local( {decode = [".-" => "a", "-..." => "b"]},
	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/
	decode["-.-."] || decode[".-"] || decode["-..."];
);

```

### Intersect

**语法:** AAobj1 &lt;&lt; Intersect( AAobj2 )

**说明:** 将关联数组视为一个对象集合。集合中的对象的值必须为 1。默认值为必须为 0。当前集合由其与该消息中的集合的交叉点所替换。

#### 示例 1

```jsl

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

#### 示例 2

```jsl

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

**语法:** key = AAobj &lt;&lt; next( previous key )

**说明:** 关联数组迭代器。

```jsl

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

**语法:** AAobj1 &lt;&lt; Remove( AAobj2 | key )

**说明:** 从关联数组中删除该键或一组键。另见“删除项”获取较简单的示例。

```jsl

Local( {primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},
	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );
	primes << GetKeys; /* retrieve a list of remaining keys */
);

```

### Remove Item

**语法:** AAobj &lt;&lt; Remove Item( key )

**说明:** 从关联数组中删除该键。另见“删除”，该命令具有附加的功能。

```jsl

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

**语法:** AAobj &lt;&lt; Set Default Value( value )

**说明:** 更改关联数组将对未找到的键返回的值。

```jsl

Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */
	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */
	aa << Insert( "set item" ); /* used for sets, value is 1 */
	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */
	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */
	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa );
);

```

