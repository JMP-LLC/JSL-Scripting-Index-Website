# List



## 関数

### As List

**構文:** y = As List( matrix )

**説明:** 行列をリストに変換して戻す。行列に複数の列がある場合は、Matrix演算子のように、各行を1つのリストとしたリストのリストを作成する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
As List( [11 22 33, 44 55 66] );

```

### Concat Items

**構文:** string = Concat Items( {list of strings}, <separatorString> )

**説明:** 文字列のリストを1つの長い文字列に結合する。文字列間は区切り文字(指定されていない場合は空白)で区切られる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Eval List

**構文:** y = Eval List( list )

**説明:** リスト内のすべての項目の式を評価した後、その評価後のリストを戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Eval List( {1 + 2, 3 + 4} );

```

**例 2**

```jsl

Names Default To Here( 1 );
x = 5;
y = 10;
Eval List( {x, y} );

```

### Insert

**構文:** z = Insert( x, y, <i> )

**説明:** リストxのi番目の位置にyを挿入した結果を戻す。引数iがない場合、yは末尾に追加される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
z = {11, 22, 33};
z = Insert( z, 99, 2 );

```

### Insert Into

**構文:** Insert Into( x, y, <i> )

**説明:** リスト、連想配列、またはディスプレイボックスxにyを挿入する。リストとディスプレイボックスの場合は、iで位置を指定できる。位置が指定されない場合は項目が末尾に追加される。引数xは変数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33};
Insert Into( ex, 99 );
ex;

```

**例 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, => 0];
Insert Into( ex, "c", 12 );
ex;

```

**例 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
Wait( 1 );
Insert Into( hlist, Button Box( "c" ) );

```

### Is List

**構文:** y = Is List( x )

**説明:** 引数xがリストの場合に1、それ以外の場合は0を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Is List( {1, 2, 3} );

```

### Items

**構文:** wl = Items(<[first last]>, s, <delim>, <Include Boundary Delimiters(0|1)>)

**説明:** 引数delimのいずれかの1文字で区切られた文字列（空の文字列も含む）のリストを戻す。delimを指定しない場合は、区切り文字としてスペースが使用される。delimが空の文字列の場合、各文字がそれぞれ個別の項目とみなされる。

**JMP追加されたバージョン:** 15

**例 1**

```jsl

Names Default To Here( 1 );
Eval List( {Items( "http://www.jmp.com", ":/." ), Items( "hello", "" )} );

```

**例 2**

```jsl

Names Default To Here( 1 );
Items( ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**例 3**

```jsl

Names Default To Here( 1 );
Items(
	",Apple,Banana Tree,Peach",
	Get Punctuation Characters(),
	Include Boundary Delimiters
);

```

**例 4**

```jsl

Names Default To Here( 1 );
Items( [1 2], ",Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

### Length

**構文:** l = Length( x )

**説明:** 指定された文字列の長さ（文字数）、リスト（項目数）、連想配列（キーの数）、BLOB（バイト数）、行列（要素数）、または名前空間/クラス（関数および変数の数）を戻す。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Length( "Café" );

```

**例 2**

```jsl

Names Default To Here( 1 );
Length( {1, 2 + 3, [11 22]} );

```

**例 3**

```jsl

Names Default To Here( 1 );
Length( ["a" => 10, "b" => 3, => 0] );

```

**例 4**

```jsl

Names Default To Here( 1 );
Length( Char To Blob( "Café" ) );

```

### List

**構文:** y = {a, b, ...}; y = List( a, b, ... )

**説明:** 項目のリストを作成する。計算はしない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
{1, 2 + 3, [11 22]};

```

### N Items

**構文:** y = N Items( x )

**説明:** リスト内の項目数、行列内の要素数、連想配列内のキーの数、名前空間内の関数と変数の数、クラスオブジェクト内のメソッドと変数の数、またはディスプレイボックスの子の数を戻します。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
N Items( {1, 2 + 3, [11 22]} );

```

**例 2**

```jsl

Names Default To Here( 1 );
N Items( ["a" => 10, "b" => 3, => 0] );

```

**例 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes", hlist = H List Box( Button Box( "a" ), Button Box( "b" ) ) );
N Items( hlist );

```

### Remove

**構文:** y = Remove( x, <i>, <n=1> ); y = Remove( x, {list} )

**説明:** リストxのi番目からn個の項目を削除した結果を戻す。または、引数listで指定された項目のリストを削除した結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Remove( {11, 22, 33, 44, 55}, 3, 2 );

```

### Remove From

**構文:** Remove From( x, <i>, <n=1> )

**説明:** リスト、連想配列、またはディスプレイボックスxの項目を削除する。連想配列の場合は、キー値iで指定された項目を削除する。リストとディスプレイボックスの場合は、位置iの項目から削除を開始する。リストでnが指定されている場合、複数の項目を一度に削除する。引数xは変数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Remove From( ex, 3, 2 );
ex;

```

**例 2**

```jsl

Names Default To Here( 1 );
ex = ["a" => 10, "b" => 3, "c" => 12, => 0];
Remove From( ex, "c" );
ex;

```

**例 3**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Remove From( hlist, 1 );

```

### Reverse

**構文:** y = Reverse( x )

**説明:** リストxの項目の順序を逆にした結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Reverse( {11, 22, 33, 44, 55} );

```

### Reverse Into

**構文:** Reverse Into( x )

**説明:** リストまたはディスプレイボックスxの項目の順序を逆にした結果を戻す。引数xは変数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Reverse Into( ex );
ex;

```

**例 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Reverse Into( hlist );

```

### Set Difference

**構文:** list = Set Difference( list1, list2 )

**説明:** list1だけにあり、list2には存在しない項目のリストを戻す。同じ項目が複数個戻される場合がある。引数が多重応答の列の参照である場合、それは現在の行の値のリストとして扱われる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
Show( Set Difference( {1, 3}, {3, 2} ) );
Show( Set Difference( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );

```

### Set Intersection

**構文:** list = Set Intersect( list1, list2 )

**説明:** 両方のリストにある項目をリストで戻す。同じ項目が複数個戻される場合がある。引数が多重応答の列の参照である場合、それは現在の行の値のリストとして扱われる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
Show( Set Intersection( {1, 3}, {3, 2} ) );
Show( Set Intersection( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
dt = Open( "$SAMPLE_DATA/Big Class Families.jmp" );
dt << get rows where( Set Intersection( :sports, {"Soccer"} ) != {} );

```

### Set Union

**構文:** list = Set Union( list1, list2 )

**説明:** どちらか一方のリストのみにある項目のリストを戻す。同じ項目が複数個戻される場合がある。引数が多重応答の列の参照である場合、それは現在の行の値のリストとして扱われる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
Show( Set Union( {1, 3}, {3, 2} ) );
Show( Set Union( {1, 3, 4, 3}, {3, 2, 3, 5, 3} ) );
all = {};
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
For Each Row( all = Set Union( all, :sports ) );
all = Set Unique( all );
Show( all );

```

### Set Unique

**構文:** list = Set Unique( list )

**説明:** 入力リストにある一意の項目のリストを戻す。引数が多重応答の列の参照である場合、それは現在の行の値のリストとして扱われる。

**JMP追加されたバージョン:** 19

```jsl

Names Default To Here( 1 );
Show( Set Unique( {1, 3, 2} ) );
Show( Set Unique( {1, 3, 4, 3, 3, 2, 3, 5, 3} ) );
Open( "$SAMPLE_DATA/Big Class Families.jmp" );
Row() = 1;
Show( Set Unique( :sports ) );

```

### Shift

**構文:** y = Shift( x, <n=1> )

**説明:** リストxの最初のn個の項目を末尾に移動した結果を戻す。nが負の場合は、最後のn個の項目を冒頭に移動する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Shift( {11, 22, 33, 44, 55}, 2 );

```

### Shift Into

**構文:** Shift Into( x, <n=1> )

**説明:** リストまたはディスプレイボックスxの最初のn個の項目を末尾に移動する。nが負の場合は、最後のn個の項目を冒頭に移動する。引数xは変数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
ex = {11, 22, 33, 44, 55};
Shift Into( ex, -2 );
ex;

```

**例 2**

```jsl

Names Default To Here( 1 );
New Window( "boxes",
	hlist = H List Box( Button Box( "a" ), Button Box( "b" ), Button Box( "c" ) )
);
Wait( 1 );
Shift Into( hlist, -2 );

```

### Sort List

**構文:** y = Sort List( x )

**説明:** リストxの項目の順序を昇順にした結果を戻す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Sort List( {111, 212, 133, 114, 55} );

```

### Sort List Into

**構文:** Sort List Into( x )

**説明:** リストxの項目の順序を昇順にする。引数xは変数でなければならない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = {111, 212, 133, 114, 55};
Sort List Into( ex );
ex;

```

### Substitute

**構文:** y = Substitute( x, patternExpr1, replacementExpr1, ... )

y = Substitute( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**説明:** xで指定された文字列、リスト、式において、patternExprに指定されている部分をreplacementExprに置換した結果を戻す。オプションの<<IGNORECASE引数は、xが文字列の場合に大文字と小文字を区別しないマッチングを可能にする。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Substitute( Expr( a + Sqrt( a ) ), Expr( a ), Expr( b ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", "All", "Some" );

```

**例 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute( lst, "a", "A" );

```

**例 4**

```jsl

Names Default To Here( 1 );
Substitute( "All things considered", {"things", "All"}, {"ideas", "Some"} );

```

**例 5**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,orange,banana-grape",
	Items( Get Punctuation Characters() || "-'", "" ), " "
);

```

**例 6**

```jsl

Names Default To Here( 1 );
Substitute( "Apple,APPLE,apple", "apple", "orange", <<IGNORECASE );

```

### Substitute Into

**構文:** Substitute Into( x, patternExpr1, replacementExpr1, ... )

Substitute Into( x, patternString1, replacementString1, ..., < <<IGNORECASE > )

**説明:** x で指定された文字列、リスト、式において、patternExprに指定されている部分をreplacementExprに置換する。x引数は、変数でなければならない。オプションの<<IGNORECASE引数は、xが文字列の場合に大文字と小文字を区別しないマッチングを可能にする。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
ex = Expr( a + Sqrt( a ) );
Substitute Into( ex, Expr( a ), Expr( b ) );
Name Expr( ex );

```

**例 2**

```jsl

Names Default To Here( 1 );
ex = "All things considered";
Substitute Into( ex, "All", "Some" );
Show( ex );

```

**例 3**

```jsl

Names Default To Here( 1 );
lst = {"a", "b", "c"};
Substitute Into( lst, "a", "A" );
Show( lst );

```

**例 4**

```jsl

Names Default To Here( 1 );
s = "Apple,APPLE,apple";
Substitute Into( s, "apple", "orange", <<IGNORECASE );
Show( s );

```

### Words

**構文:** wl = Words( <[first last]>, s, <delim>)

**説明:** 引数delimのいずれかの文字で区切られた部分文字列のリストを戻す。delimを指定しない場合は、スペースが使用される。delimが空の文字列の場合、各文字がそれぞれ個別の語とみなされる。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Eval List( {Words( "http://www.jmp.com", ":/." ), Words( "hello", "" )} );

```

**例 2**

```jsl

Names Default To Here( 1 );
Words( "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

**例 3**

```jsl

Names Default To Here( 1 );
Words( [1 2], "Apple,Banana Tree,Peach", Get Punctuation Characters() );

```

