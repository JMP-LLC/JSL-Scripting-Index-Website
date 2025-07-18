# Class



## 関連するコンストラクター

### Define Class

**構文:** Define Class("class name", &lt;Base Class{ "base class name", ... }&gt;, &lt;Show( All( boolean ) | ( Members( boolean ) | Methods( boolean ) | Functions( boolean ) )+ )&gt;, { method* | member* | function* } )

**説明:** クラスを作成する。作成されるすべてのメソッドと変数は指定したクラス名の中でのみ定義される。

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );

```

## 項目のメッセージ

### Clone

**構文:** obj &lt;&lt; Clone

**説明:** クラス参照の内容を複製して新しいオブジェクトを作成する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = clref << Clone;
Show( clref << Equal( nclref ) );
Show( clref == nclref );

```

### Contains

**構文:** obj &lt;&lt; Contains( string )

**説明:** 指定した文字列の式をクラスが含んでいる場合は1を、そうでない場合は0を戻す。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Contains( "nObs" );

```

### Delete Class

**構文:** clref &lt;&lt; Delete Class( &lt; Force( boolean ) &gt; )

**説明:** クラスを削除する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Delete Class;
Show( clref );

```

### Equal

**構文:** obj &lt;&lt; Equal( classref )

**説明:** 引数に指定したクラス参照と、メッセージの送り先のクラス参照が等しいかどうかを比較する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
nclref = New Object( Test() );
Show( clref << Equal( nclref ) );
nclref:nObs = 50;
Show( clref << Equal( nclref ) );

```

### First

**構文:** obj &lt;&lt; First

**説明:** クラスの最初の項目の、文字列の式を戻す。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << First;

```

### Get Contents

**構文:** obj &lt;&lt; Get Contents

**説明:** クラスの中にある項目のリストを戻す。各要素は、キーとその値の2項目を持つリストになっている。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Contents;

```

### Get Keys

**構文:** obj &lt;&lt; Get Keys

**説明:** クラスの中にあるキーのリストを戻す。各キーは、クラスの項目を表す文字列。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Keys;

```

### Get Name

**構文:** obj &lt;&lt; Get Name

**説明:** クラスの名前を戻す。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
class name = clref << Get Name;

```

### Get Value

**構文:** obj &lt;&lt; Get Value( string )

**説明:** クラスにある、指定した項目の値を戻す。"string"は項目のキー。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Value( "nObs" );

```

### Get Values

**構文:** obj &lt;&lt; Get Values

**説明:** クラスの中にある各項目の値のリストを戻す。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Get Values;

```

### Insert

**構文:** obj &lt;&lt; Insert( string, value )

**説明:** 文字列の式を、指定された値とともにクラスに挿入する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Insert( "X", 25 );
Show( clref );

```

### Lock Class

**構文:** obj &lt;&lt; Lock Class( &lt;string, | {string, ...}&gt;* )

**説明:** 追加、変更、削除が行えなくなるよう、クラス内のすべてのメソッドのメンバー、または指定された名前のメンバーをロックする。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class;
Try( clref:nObs = 40, "clref is locked." );

```

### N Items

**構文:** obj &lt;&lt; N Items

**説明:** クラスの中にある項目の数を戻す。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
n = clref << N Items;

```

### Next

**構文:** obj &lt;&lt; Next( string )

**説明:** クラスの、指定されたキーの次の項目の、文字列の式を戻す。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Next( "addition" );

```

### Remove

**構文:** obj &lt;&lt; Remove( &lt;string | {string, ...}&gt;* )

**説明:** クラスから、指定した文字列の式を削除する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Remove( "nObs" );
Show( clref );

```

### Show Contents

**構文:** obj &lt;&lt; Show Contents

**説明:** クラスの内容をJMPログに出力する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
result = clref << Show Contents;

```

### Unlock Class

**構文:** obj &lt;&lt; Unlock Class( &lt;string | {string, ...}&gt;* )

**説明:** ロックされているため、メソッドのメンバーの追加、変更、削除が行えないクラスのロックを解除する。

**JMP追加されたバージョン:** 14

```jsl

Define Class(
	"Test",
	nObs = 20;
	addition = Method( {x, y},
		(x + y) * nObs
	);
	append = Method( {a, b},
		Char( a ) || " + " || Char( b )
	);
);
clref = New Object( Test() );
clref << Lock Class( "nObs" );
Try( clref:nObs = 30, Show( "clref is locked." ) ); 
//Try again after unlocking. 
clref << Unlock Class( "nObs" );
Try( clref:nObs = 40, Show( "clref is locked." ) );

```

