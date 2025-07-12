# Character



## 関数

### Blob To Char

**構文:** s = Blob To Char( blob, <encoding="utf-8"> )

**説明:** 指定のエンコーディングを使って、BLOB (Binary Large OBject)から文字列を作成する。使用できるエンコーディングは、utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、shift_jis、euc-jp、および ascii~hex。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Blob To Char( Hex To Blob( "436166C3A9" ) ) || Blob To Char(
	Hex To Blob( "436166C3A9" ),
	"ascii~hex"
);

```

### Blob To Matrix

**構文:** m = Blob To Matrix( blob, type, bytesEach, endian, <nCols=1> )

**説明:** BLOBのバイトを、数値の行列に変換する。typeは"int"、"uint"、"float"のいずれか。bytesEachは1、2、4、または8。endianは最初のバイトが最上位に保存されているか("big")、最初のバイトが最下位に保存されているか("little")、もしくは、コンピュータのネイティブな形式であるか("native")を示す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Blob To Matrix( Hex To Blob( "00010002FFFFFFFE" ), "int", 2, "big", 2 );

```

### Char

**構文:** s = Char( x, <w>, <d>, < <<Use Locale( Boolean ) >, < <<Full Precision( Boolean ) > )

**説明:** 変数xの値を、指定された表示形式を適用した文字列で戻す。引数xが数値の場合は、最大桁数をw、小数点以下の桁数をd とした文字列を戻す。<<FullPrecisionは、最大の精度で表された数値を文字列で戻す。

**JMP追加されたバージョン:** バージョン14より前

**ロケールを使用**

```jsl

Names Default To Here( 1 );
Char( 2.1, <<Use Locale( 1 ) );

```

**単純な例**

```jsl

Names Default To Here( 1 );
Char( Pi(), 10, 4 );

```

**最大精度**

```jsl

Names Default To Here( 1 );
Show( Char( 88.54 ), Char( 88.54, <<Full Precision( 1 ) ) );

```

### Char To Blob

**構文:** blob = Char To Blob( string, <encoding="utf-8"> )

**説明:** 指定のエンコーディングを使って、文字列からBLOB (Binary Large OBject)を作成する。使用できるエンコーディングは、utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、shift_jis、euc-jp、および ascii~hex。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Char To Blob( "Café", "utf-16be" );

```

### Char To Hex

**構文:** h = Char To Hex( value, <"integer">|<encoding="utf-8"> )

**説明:** 指定されたエンコーディングで、与えられた値を16進数のテキストに変換する。第1引数の値は数字、文字列、またはBLOB。第1引数が数値の場合、第2引数に"integer"を指定しない限り、浮動小数点に対するIEEE-754/64ビット形式の16進数が戻される。使用できるエンコーディングは、utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、ascii~hex、shift_jis、およびeuc-jp。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" );

```

### Collapse Whitespace

**構文:** scw = Collapse Whitespace( s )

**説明:** 先頭および末尾の空白文字を削除し、空白文字が連続している部分は重複を削除する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Collapse Whitespace( "  The  dog    crossed    the  road  " );

```

### Concat

**構文:** s = s1 || s2 ...; m = m1 || m2 ...; s = Concat( s1, s2, ... )

**説明:** 文字列と文字列を連結する。もしくは、行列と行列を横に連結する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
[1 2] || [3 4] || [5 6];

```

### Concat Items

**構文:** string = Concat Items( {list of strings}, <separatorString> )

**説明:** 文字列のリストを1つの長い文字列に結合する。文字列間は区切り文字(指定されていない場合は空白)で区切られる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Concat Items( {"www", "jmp", "com"}, "." );

```

### Concat To

**構文:** string1 ||= string2; matrix1 ||= matrix2; Concat To( a, b )

**説明:** 連結する。a ||= bはa = a || bと等価。これは代入演算子。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
ex = "hello ";
ex ||= "world";

```

### Contains

**構文:** pos = Contains( x, item, <start=1> )

**説明:** startの位置から開始し、x内のitemの位置を戻す。startが負の値の場合、length( x ) - startの位置から逆の方向に調べる。引数xは、文字列またはリスト。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Show( Contains( "redreed", "re", -1 ) );
Show( Contains( {"A", 2, "C", [1 5], "C"}, "C", 4 ) );

```

### Contains Item

**構文:** b = Contains Item( x, item | list | Pat Regex(), <delimiter> )

**説明:** 引数[x]のテキスト内にある単語のいずれかと、単語[item]、単語リスト[list]の中の1つ、またはパターン[pattern]がマッチするかどうかを、ブール値で戻す。テキスト内の単語は、オプションで指定された区切り文字[delimiter]で区切られる。カンマ","がデフォルトの区切り文字。なお、テキスト[x]から抽出された各単語の末尾にある空白は削除される。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Show( Contains Item( "A, 2, C, D, C", "C", ", " ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
dt = Open( "$SAMPLE_DATA/Food Journal.jmp" );
dt << New Column( "Cheese",
	numeric,
	continuous,
	Formula( Contains Item( dt:Item Name, "Cheese", ", " ) )
);
dt << Distribution( Column( :Cheese ) );

```

**例 3**

```jsl

Names Default To Here( 1 );
//find repeated character c in cdcef
Contains Item( "abcde,bcdef,cdcef", Pat Regex( "(.).*?\1" ), "," );

```

### Ends With

**構文:** b = Ends With( s, sub )

**説明:** sがsubで終わる場合に1、それ以外の場合は0を戻す。引数sと引数subは両方とも文字列、または両方ともリスト。Right( s, Length( sub )) == subと等価。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Ends With( "http://www.jmp.com", ".com" );

```

### Hex

**構文:** h = Hex( value, <"integer">|<encoding="utf-8">|<Base(number)>,<Pad To(number)> )

**説明:** 数値に対して、もしくは指定されたエンコーディングの文字列に対して、16進数(または他の基数で表現された数)のテキストを戻す。数値、文字列、BLOBを変換できる。変換したい値が数値の場合、integerまたはBaseのオプション引数を指定した場合を除き、64ビット浮動小数点のIEEE 754形式として変換される。Baseを指定した場合、16進数ではなく指定の基数で表現された数のテキストを戻す。基数には2～36の整数を指定できる。使用できるエンコーディングは、utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、ascii~hex、shift_jis、euc-jp。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Hex( 1024, "integer" ) || " " || Hex( "Café", "utf-16be" ) || " " ||
Hex( 11, Base( 2 ), Pad To( 8 ) );

```

### Hex To Blob

**構文:** blob = Hex To Blob( hex string )

**説明:** 指定した16進コードの文字列からBLOB (Binary Large OBject)を作成する。これにスペース、カンマ、キャリッジリターン、改行が含まれることもある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Hex To Blob( "FF78CE" );

```

### Hex To Char

**構文:** s = Hex To Char( hextext, <encoding="utf-8"> )

**説明:** 指定されたエンコーディングで、16進数のテキストを文字列に変換する。使用できるエンコーディングは、utf-8、utf-16le、utf-16be、us-ascii、iso-8859-1、ascii~hex、shift_jis、およびeuc-jp。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Hex To Char( "436166C3A9" ) || Hex To Char( "00430061006600E9", "utf-16be" );

```

### Hex To Number

**構文:** x = Hex To Number( hextext, <Base(number)> )

**説明:** 16進数(または他の基数で表現された数)のテキストに対応する数値を戻す。入力値の16進数は、64ビット浮動小数点のIEEE 754形式として変換される。入力値がIEEE 754形式でない場合には、16進数の整数として扱われる。Baseを指定した場合、テキストは、その基数で表現される数として扱われる。基数には2～36の整数を指定できる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Hex To Number( "11110000", Base( 2 ) );

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

### Item

**構文:** w = Item( n|[first last], s, <delim>, <Unmatched(result string)>, <Include Boundary Delimiters(0|1)>)

**説明:** 引数sのn番目の項目を戻す。項目とは、引数delimの文字のいずれか1つだけで区切られた部分文字列（空の場合もあり）を指す。delimを指定しない場合は、スペースが使用される。delimが空の文字列の場合、各文字がそれぞれ個別の項目とみなされる。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Item( 5, "http://www.jmp.com", ":/." );

```

**例 2**

```jsl

Names Default To Here( 1 );
Item( [2 -1], "This is a sentence" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Item( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**例 4**

```jsl

Names Default To Here( 1 );
Item( 5, "a b c d", Unmatched( "None" ) );

```

**例 5**

```jsl

Names Default To Here( 1 );
Item( 2, "abcd", "" );

```

**例 6**

```jsl

Names Default To Here( 1 );
Item( 2, ",abcd", ",", Include Boundary Delimiters );

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

### Left

**構文:** sub = Left( s, n, <filler> )

**説明:** 文字列またはリストsの先頭部分だけ取り出したり、後ろに文字もしくは項目を補充したりする。結果には左からn個の文字またはリスト項目が含まれる。sがnより短い場合は、右側にfillerが補充される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
exurl = "http://www.jmp.com";
Left( exurl, Contains( exurl, ":" ) - 1 );

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

### Lowercase

**構文:** sl = Lowercase( s )

**説明:** 指定の文字列内の大文字を小文字に変換する。大文字/小文字の規則はロケールによって異なる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Lowercase( "CAFÉ #23" );

```

### Matrix To Blob

**構文:** m = Matrix To Blob( matrix, type, bytesEach, endian )

**説明:** 行列からBLOBを作成する。行列の要素を1、2、または4バイトの符号付きまたは符号なしの整数、あるいは4または8バイトの浮動小数点数に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Matrix To Blob( [3.14, 1.414], "float", 4, "big" );

```

### Munger

**構文:** r = Munger( s, startPos, findStringOrNChars, <replaceString> )

**説明:** 引数の組み合わせに応じて、引数sの中の文字列を検索したり、sの特定の位置にある文字列を戻したりする。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Eval List( {Munger( "over there", 1, "t", "" ), Munger( "17 June 2000", 4, 4, "March" )} );

```

### Num

**構文:** y = Num( s, < <<Use Locale( use=1 ) >, < <<Restrict > )

**説明:** 日付や通貨形式など、組み込みの任意の形式を使用して、sを数値に変換する。変換に失敗すると、欠測値を戻す。オプションの<<Restrictは、整数、小数、および指数表現の変換のみ許可する。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Show( Num( "3.1e6" ), Num( "1989-10-04" ), Num( "5%" ), Num( "£23" ) );

```

**例 2**

```jsl

Names Default To Here( 1 );
Show(
	Num( "3.1e6", <<Restrict ),
	Num( "1989-10-04", <<Restrict ),
	Num( "5%", <<Restrict ),
	Num( "£23", <<Restrict )
);

```

### Regex

**構文:** result = Regex( source, pattern, <format, <IGNORECASE>, <GLOBALREPLACE>> )

**説明:** source文字列内で、patternに一致するものを検索する。formatはデフォルトで「\0」（全体一致）であるが、「Fred」のような定数による置換、または「\1」（patternの最初の括弧に一致するテキストを使用）であっても構わない。一致しない場合、数値の欠測値を戻す。デフォルトでは大文字と小文字が一致する必要がある。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Regex(
	"   Are you there Alice?, asked Jerry.",
	" (here|there) (\w+).+(said|asked) (\w+)\.",
	"  I am \1, \4, replied \2."
);

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

### Repeat

**構文:** s = Repeat( x, n, <m=1> )

**説明:** 引数xで指定されたテキスト、行列、またはリストを、n回複製して連結したものを戻す。xが数字または行列の場合、nは縦の連結を示し、オプションの引数mは横の連結を示す。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Show( Repeat( {"A", "B"}, 3 ), Repeat( 2, 3 ), Repeat( 2, 1, 3 ) );

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

### Right

**構文:** sub = Right( s, n, <filler> )

**説明:** 文字列またはリストsの後半部分だけ取り出したり、先頭に文字もしくは項目を補充したりする。結果には右からn個の文字またはリスト項目が含まれる。sがnより短い場合は、左側にfillerが補充される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Right( "http://www.jmp.com", 3 );

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

### Starts With

**構文:** b = Starts With( s, sub )

**説明:** sがsubで始まる場合に1、それ以外の場合は0を戻す。引数sと引数subは両方とも文字列、または両方ともリスト。Left( s, Length( sub )) == subと等価。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Starts With( "http://www.jmp.com", "http:" );

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

### Substr

**構文:** sub = Substr( s, start, <count> )

**説明:** sの、start字目から始まるcount字分の文字列を戻す。countが負または未指定の場合は、文字列の残り部分を戻す。startが負数の場合、末尾からstart個目の文字から始まることを示す。Substr()関数はリストにも適用可能。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Eval List( {Substr( "undergo", 4 ), Substr( {10, 11, 12, 13, 14}, 2, 3 )} );

```

### Text Score

**構文:** score vector = Text Score( text column, text-to-number, <weighting>, <{<center>, <scale>, scoring matrix}>);

**説明:** テキストエクスプローラのスコア計算式に使用される。引数text-to-numberは、小文字の単語を数字にマッピングする連想配列。重みの引数には、"Binary", "Ternary", "Count", "LogCount", "LCA"、または、TFLogIDFにおける文書度数の重みの逆数を配列で指定できる。スコア行列の列数は、連想配列における単語と同じ数、またはそれより1つ多い数("LCA"の場合)でなければならない。戻り値はスコアのベクトル。スコア行列を指定しなかった場合、度数のベクトルが戻される。重みを指定しなかった場合、度数が使用される。この関数は、[同じ語幹の単語]オプションをサポートしていない。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
score = Text Score(
	"over the lazy dogs back",
	["lazy" => 1, "dogs" => 2],
	"Count",
	[1 0, 0 1]
);
Show( score );

```

### Titlecase

**構文:** st = Titlecase( s )

**説明:** タイトルケース(単語の先頭を大文字、その他は小文字)に変換する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Titlecase( "The dog crossed the road" );

```

### Trim

**構文:** sub = Trim( s, <left|right|both> )

**説明:** 文字列sから、先頭または末尾の空白文字を削除した結果を戻す。第2引数は先頭と末尾のどちらの空白文字を削除するかを指定する。第2引数を指定しない場合、先頭と末尾の両方の空白文字が削除される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Trim( " title   ", both );

```

### Trim Whitespace

**構文:** sub = Trim Whitespace( s, <left|right|both> )

**説明:** 文字列sから、先頭または末尾の空白文字を削除した結果を戻す。第2引数は先頭と末尾のどちらの空白文字を削除するかを指定する。第2引数を指定しない場合、先頭と末尾の両方の空白文字が削除される。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Trim Whitespace( "  The  dog    crossed    the  road  " );

```

### Uppercase

**構文:** su = Uppercase( s )

**説明:** 指定の文字列内の小文字を大文字に変換する。大文字/小文字の規則はロケールによって異なる。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
Uppercase( "Café #23" );

```

### Word

**構文:** w = Word( n|[first last], s, <delim>, <Unmatched(result string)>

**説明:** 文字列sのn番目の語を戻す。語とは、引数delimのいずれかの文字（その数は任意）で区切られた部分文字列を指す。delimを指定しない場合は、スペースが使用される。delimが空の文字列の場合、各文字がそれぞれ個別の語とみなされる。

**JMP追加されたバージョン:** バージョン14より前

**例 1**

```jsl

Names Default To Here( 1 );
Word( 3, "http://www.jmp.com", ":/." );

```

**例 2**

```jsl

Names Default To Here( 1 );
Word( [2 -1], "This is a sentence" );

```

**例 3**

```jsl

Names Default To Here( 1 );
Word( 4, "Apple+Banana Tree,,Pear,,Peach,,Grape", Get Punctuation Characters() );

```

**例 4**

```jsl

Names Default To Here( 1 );
Word( 5, "a b c d", Unmatched( "None" ) );

```

**例 5**

```jsl

Names Default To Here( 1 );
Word( 2, "abcd", "" );

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

### XPath Query

**構文:** result = XPath Query(xml, xpath expression)

**説明:** XMLドキュメントに対し、XPathクエリーを実行する。

**JMP追加されたバージョン:** バージョン14より前

```jsl

Names Default To Here( 1 );
result = XPath Query(
	"<doc><colors><color>red</color><color>green</color><color>blue</color></colors></doc>",
	"//color/text()"
);

```

