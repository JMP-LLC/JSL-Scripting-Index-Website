# Associative Array



## 関連するコンストラクター

### Associative Array

**構文:** y = Associative Array( {{key1, value1}, ...} ); y = Associative Array( keys, values )

**説明:** 連想配列(「辞書」または「ハッシュマップ」ともいう)を作成する。引数を2つ指定する場合、keyおよびvalueとしてリスト、行列、またはデータテーブル列が指定できる。

```jsl

ex = Associative Array( {"red", "blue"}, {1, 2} );ex["green"] = 3;ex << get contents;

```

## 項目のメッセージ

### Contains

**構文:** bool = AAobj &lt;&lt; Contains( key | AAobj )

**説明:** キー、または、キーの集合が連想配列内にあるかどうかを調べる。単純な例については「アイテムを含む(Contains Item)」も参照のこと。

```jsl

Local(	{rhymes = ["mouse" => "house",	"car" => "star",	"orange" => ""], words = ["mouse" => 42,	"car" => 54]},	rhymes << Contains( words ));

```

### Contains Item

**構文:** bool = AAobj &lt;&lt; Contains Item( key )

**説明:** キーが連想配列内にあるかどうかを調べる。より機能性の高い「次を含む(Contains)」も参照のこと。

```jsl

Local( {rhymes = ["mouse" => "house", "car" => "star", "orange" => ""]},	rhymes << Contains Item( "car" ));

```

### First

**構文:** key = AAobj &lt;&lt; first

**説明:** 連想配列の反復子

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},	x = aa << First;	While( !Is Empty( x ),		words = words || aa[x];		x = aa << Next( x );	);	words;);

```

### Get Contents

**構文:** list = AAObj &lt;&lt; Get Contents

**説明:** 連想配列の内容をリストとして戻す。

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Contents );

```

### Get Default Value

**構文:** value = AAobj &lt;&lt; Get Default Value()

**説明:** 存在しないキーに対して連想配列が戻す値を戻す。

```jsl

Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */	aa << Insert( "set item" ); /* used for sets, value is 1 */	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa ););

```

### Get Keys

**構文:** list = AAObj &lt;&lt; Get Keys

**説明:** 連想配列のキーをリストで戻す。

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Keys );

```

### Get Value

**構文:** value = AAobj &lt;&lt; Get Value( key )

**説明:** 連想配列において、キーの下に保存された値を戻す。

```jsl

Local( {prices = Associative Array( {{"pineapple", 1.25}, {"grape", .50}, {"orange", .75}} )},	prices << getvalue( "orange" ) /* or prices["orange"] */);

```

### Get Values

**構文:** list = AAObj &lt;&lt; Get Values

**説明:** 連想配列の値をリストで戻す。

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"]}, aa << Get Values );

```

### Insert

**構文:** AAobj1 &lt;&lt; Insert( AAobj2 | key, { value } )

**説明:** 連想配列を別の連想配列に挿入するか、連想配列のキーの下に値を保存する。単純な例については「アイテムを挿入(Insert Item)」も参照のこと。

```jsl

Local( {decode = [".-" => "a", "-..." => "b"], others = ["..." => "s", "-.-." => "c"]},	decode << Insert( others );	decode["-.-."] || decode[".-"] || decode["-..."] || decode["..."];);

```

### Insert Item

**構文:** AAobj &lt;&lt; Insert Item( key, value )

**説明:** 値を連想配列内のキーの下に保存する。より機能性の高い「挿入(Insert)」も参照のこと。

```jsl

Local( {decode = [".-" => "a", "-..." => "b"]},	decode << insertitem( "-.-.", "c" );/* or decode["-.-."]="c"*/	decode["-.-."] || decode[".-"] || decode["-..."];);

```

### Intersect

**構文:** AAobj1 &lt;&lt; Intersect( AAobj2 )

**説明:** 連想配列を、要素の集合として扱う。集合内の要素は値を1としなければならない(連想配列のデフォルト値は0である)。現在の集合は、メッセージで指定された集合との積集合によって置き換えられる。

**例 1**

```jsl

Local( {red things = [=> 0], round things = [=> 0]},  /* default values must be zero for intersect to work */	red things << Insert( "apple" ) << Insert( "blood" ) << Insert( "stop light" ) <<	Insert( "mars" );	round things << Insert( "earth" ) << Insert( "mars" ) << Insert( "apple" ) <<	Insert( "orange" );	red and round = red things;	red and round << Intersect( round things );	red and round << Get Keys;);

```

**例 2**

```jsl

dt = Open( "$SAMPLE_DATA/Big Class.jmp" ); // select where could be used with :age<=12 & :sex=="M" in one step.  this is a demo of set operations with associative arrays.// associative array([2,4,7]) builds a set containing keys 2,4,7 with a value of 1 and all other possible keys have a value of 0dt << Select Where( :age <= 12 );preteen = Associative Array( dt << Get Selected Rows ); // get selected rows returns an arraydt << SelectWhere( :sex == "M" );male = Associative Array( dt << GetSelectedRows ); // the array creates a "set" of itemsdesiredSelection = preteen; // copy the set because the following <<intersect happens in-placedesiredSelection << intersect( male ); // two sets can be intersected, producing the items that are in set1 AND set2dt << clear select; // clear, because <<SelectRows extends an existing selectiondt << selectrows( desiredSelection << getkeys ); // males <= 12

```

### Next

**構文:** key = AAobj &lt;&lt; next( previous key )

**説明:** 連想配列の反復子

```jsl

Local( {aa = [1 => "bun", 2 => "shoe", 3 => "tree", 4 => "door"], x, words = ""},	x = aa << First;	While( !Is Empty( x ),		words = words || aa[x];		x = aa << Next( x );	);	words;);

```

### Remove

**構文:** AAobj1 &lt;&lt; Remove( AAobj2 | key )

**説明:** 連想配列からキーの集合またはキーを削除する。単純な例については「アイテムを削除(Remove Item)」も参照のこと。

```jsl

Local( {primes = [2 => 1, 3 => 1, 4 => 1, 5 => 1, 6 => 1, 7 => 1, 8 => 1, 9 => 1]},	primes << Remove( [4 => 1, 6 => 1, 8 => 1, 9 => 1] );	primes << GetKeys; /* retrieve a list of remaining keys */);

```

### Remove Item

**構文:** AAobj &lt;&lt; Remove Item( key )

**説明:** 連想配列からキーを削除する。より機能性の高い「削除(Remove)」も参照のこと。

```jsl

Local(	{primes = [2 => 1,	3 => 1,	4 => 1,	5 => 1,	6 => 1,	7 => 1,	8 => 1,	9 => 1] /* all the values are 1; they are not actually used */	, p, test},	p = primes << First; /* iterate through keys */	While( !Is Empty( p ), /* empty key means finished iterating */		test = p; /* remember the key before advancing */		p = primes << Next( p ); /* advance to next key before removing this key */		If( test == 4 | test == 6 | test > 7, /* not the most sophisticated way to make primes */			primes << Remove Item( test ) /* here it is! remove a key from the Associative Array */		);	);	primes << GetKeys; /* retrieve a list of remaining keys */);

```

### Set Default Value

**構文:** AAobj &lt;&lt; Set Default Value( value )

**説明:** 存在しないキーに対して連想配列が戻す値を変更する。

```jsl

Local( {aa = [=> 99], v1, v2}, /* initial value used for non-existing key is 99 */	v1 = aa[876]; /* v1 is 99 because the key 876 is not found */	aa << Insert( "set item" ); /* used for sets, value is 1 */	aa << Set Default Value( (aa << Get Default Value) - 1 ); /* new default is one less than old default */	v2 = aa[876]; /* v2 is 98 because the key 876 is STILL not found */	Char( v1 ) || " " || Char( v2 ) || " " || Char( aa ););

```

