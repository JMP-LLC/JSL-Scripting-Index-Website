# Namespace



## 関連するコンストラクター

### New Namespace

**構文:** ns = New Namespace( <name>, <list of expressions> )

**説明:** 作成された関数と変数が指定の名前でのみ定義されるような名前空間を作成する。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);

```

## 項目のメッセージ

### Contains

**構文:** obj << Contains( string )

**説明:** 名前空間に指定の式が含まれている場合は1、含まれていない場合は0を戻す。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Contains( "nObs" );

```

### Delete Namespace

**構文:** nsref << Delete Namespace( < Force( boolean ) > )

**説明:** 名前空間を削除する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Delete Namespace;
Show( nsref );

```

### First

**構文:** obj << First

**説明:** 名前空間にある項目のうち最初の式を戻す。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << First;

```

### Get Contents

**構文:** obj << Get Contents

**説明:** 名前空間に含まれる項目とその値の2項目を要素としたリストを戻す。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Contents;

```

### Get Keys

**構文:** obj << Get Keys

**説明:** 名前空間にあるキーのリストを戻す。キーは、名前空間に含まれる個々の項目を文字列として表したもの。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Keys;

```

### Get Name

**構文:** obj << Get Name

**説明:** 名前空間の名前を戻す。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
space name = nsref << Get Name;

```

### Get Value

**構文:** obj << Get Value( string )

**説明:** 名前空間にある、指定した項目の値を戻す。"string"は項目のキー。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Value( "nObs" );

```

### Get Values

**構文:** obj << Get Values

**説明:** 名前空間内の各項目の値のリストを戻す。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Get Values;

```

### Insert

**構文:** obj << Insert( string, value )

**説明:** 名前空間に、指定の値で文字列式(String)を挿入する。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Insert( "X", 25 );
Show( nsref );

```

### Lock Namespace

**構文:** obj << Lock Namespace( <string, | {string, ...}>* )

**説明:** 名前空間にあるすべての変数または指定の名前付き変数をロックし、追加や変更、削除ができないようにする。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace;
Try( Add Class:nObs = 40, "Add Class is locked." );

```

### N Items

**構文:** obj << N Items

**説明:** 名前空間に含まれている項目の数を戻す。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
n = nsref << N Items;

```

### Next

**構文:** obj << Next( string )

**説明:** 名前空間にある項目のうち指定したキーに続く項目の式を戻す。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Next( "addition" );

```

### Remove

**構文:** obj << Remove( <string | {string, ...}>* )

**説明:** 指定した式を名前空間から削除する。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Remove( "nObs" );
Show( nsref );

```

### Show Contents

**構文:** obj << Show Contents

**説明:** 名前空間の内容をJMPログに表示する。

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
result = nsref << Show Contents;

```

### Unlock Namespace

**構文:** obj << Unlock Namespace( <string | {string, ...}>* )

**説明:** 名前空間の中で、追加や変更、削除ができないようにロックされた変数のロックを解除する。

**JMP追加されたバージョン:** 14

```jsl

Names Default To Here( 1 );
nsref = New Namespace(
	"Add Class"
);
Add Class:nObs = 20;
Add Class:addition = Function( {x, y}, x + y );
Add Class:append = Function( {a, b},
	Char( a ) || " + " || Char( b )
);
nsref << Lock Namespace( "nObs" );
Try( Add Class:nObs = 30, Show( "Add Class is locked." ) ); 
//Try again after unlocking. 
nsref << Unlock Namespace( "nObs" );
Try( Add Class:nObs = 40, Show( "Add Class is locked." ) );

```

